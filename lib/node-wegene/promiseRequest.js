const request = require('./Http/Client/RequestClient'),
  configuration = require('./configuration'),
  APIHelper = require('./APIHelper');

function promiseRequest ({ url, params, query, headers, body, options}) {
  if (!url) {
    return Promise.reject(new Error('need url'));
  }
  let urlTemplate = `${configuration.BASEURI}${url}`;
  if (params) {
    Object.keys(params).forEach(key => {
      urlTemplate = `${urlTemplate}{${key}}/`;
    });
    urlTemplate = urlTemplate.slice(0, -1);
  }
  const queryBuilder = APIHelper.appendUrlWithTemplateParameters(urlTemplate, params);
  const queryUrl = APIHelper.cleanUrl(queryBuilder);
  let _headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${configuration.oAuthAccessToken}`
  };
  if (headers) {
    _headers = Object.assign(_headers, headers);
  }
  let _body = {};
  if (body) {
    _body = Object.assign(_body, body);
  }
  APIHelper.cleanObject(_body);
  let _options = {
    queryUrl: queryUrl,
    method: 'POST',
    headers: _headers,
    form : _body,
  };
  if (options) {
    _options = Object.assign(_options, options);
  }
  return new Promise((resolve, reject) => {
    request(_options, (error, response, context) => {
      if (error) {
        reject({
          message: error.message,
          code: error.code
        });
      } else if (response.statusCode >= 200 && response.statusCode <= 206) {
        resolve(JSON.parse(response.body));
      } else {
        reject({
          message: 'HTTP Response Not OK',
          code: response.statusCode,
          response: response.body
        });
      }
    });
  })
}

module.exports = promiseRequest;
