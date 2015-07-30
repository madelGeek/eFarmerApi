'use strict';

angular
  .module('apiFarmerDocsApp')
  .factory('gettingDocumentsService', ['$resource',
    function ($resource) {
      return $resource(
        "http://dev2.efarmer.mobi:28080/RESTService/RESTService/preview/document?uri=content://TASK/:Id",
        {Id: "@Id"},
        {
          "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}
        }
      );
    }]);
