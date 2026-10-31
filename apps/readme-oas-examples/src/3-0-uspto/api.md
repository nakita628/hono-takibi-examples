<h1 id="uspto-data-set-api">USPTO Data Set API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Data Set API (DSAPI) allows the public users to discover and search USPTO exported data sets. This is a generic API that allows USPTO users to make any CSV based data files searchable through API. With the help of GET call, it returns the list of data fields that are searchable. With the help of POST call, data can be fetched based on the filters on the field names. Please note that POST call is used to search the actual data. The reason for the POST call is that it allows users to specify any complex search criteria without worry about the GET size limitations as well as encoding of the input parameters.

Base URLs:

* <a href="https://developer.uspto.gov/ds-api">https://developer.uspto.gov/ds-api</a>

Email: <a href="mailto:developer@uspto.gov">Open Data Portal</a> 
Web: <a href="https://developer.uspto.gov">Open Data Portal</a> 

<h1 id="uspto-data-set-api-metadata">metadata</h1>

Find out about the data sets

## List available data sets

<a id="opIdlist-data-sets"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

> Example responses

> 200 Response

```json
{
  "total": 2,
  "apis": [
    {
      "apiKey": "oa_citations",
      "apiVersionNumber": "v1",
      "apiUrl": "https://developer.uspto.gov/ds-api/oa_citations/v1/fields",
      "apiDocumentationUrl": "https://developer.uspto.gov/ds-api-docs/index.html?url=https://developer.uspto.gov/ds-api/swagger/docs/oa_citations.json"
    },
    {
      "apiKey": "cancer_moonshot",
      "apiVersionNumber": "v1",
      "apiUrl": "https://developer.uspto.gov/ds-api/cancer_moonshot/v1/fields",
      "apiDocumentationUrl": "https://developer.uspto.gov/ds-api-docs/index.html?url=https://developer.uspto.gov/ds-api/swagger/docs/cancer_moonshot.json"
    }
  ]
}
```

<h3 id="list-available-data-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of data sets|[dataSetList](#schemadatasetlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Provides the general information about the API and the list of fields that can be used to query the dataset.

<a id="opIdlist-searchable-fields"></a>

> Code samples

```bash
curl https://example.com/oa_citations/v1/fields \
  -H 'Accept: application/json'
```

`GET /{dataset}/{version}/fields`

This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.

<h3 id="provides-the-general-information-about-the-api-and-the-list-of-fields-that-can-be-used-to-query-the-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset|path|string|true|Name of the dataset.|
|version|path|string|true|Version of the dataset.|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
"string"
```

<h3 id="provides-the-general-information-about-the-api-and-the-list-of-fields-that-can-be-used-to-query-the-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The dataset API for the given version is found and it is accessible to consume.|Inline|
|404|Not Found|The combination of dataset name and version is not found in the system or it is not published yet to be consumed by public.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="uspto-data-set-api-search">search</h1>

Search a data set

## Provides search capability for the data set with the given search criteria.

<a id="opIdperform-search"></a>

> Code samples

```bash
curl https://example.com/oa_citations/v1/records \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'criteria=*%3A*&start=0&rows=100'
```

`POST /{dataset}/{version}/records`

This API is based on Solr/Lucense Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.

> Body parameter

```yaml
criteria: "*:*"
start: 0
rows: 100
```

<h3 id="provides-search-capability-for-the-data-set-with-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|path|string|true|Version of the dataset.|
|dataset|path|string|true|Name of the dataset. In this case, the default value is oa_citations|
|body|body|object|false|none|
|» criteria|body|string|true|Uses Lucene Query Syntax in the format of propertyName:value, propertyName:[num1 TO num2] and date range format: propertyName:[yyyyMMdd TO yyyyMMdd]. In the response please see the 'docs' element which has the list of record objects. Each record structure would consist of all the fields and their corresponding values.|
|» start|body|integer|false|Starting record number. Default value is 0.|
|» rows|body|integer|false|Specify number of rows to be returned. If you run the search with default values, in the response you will see 'numFound' attribute which will tell the number of records available in the dataset.|

> Example responses

> 200 Response

```json
[
  {
    "property1": {},
    "property2": {}
  }
]
```

<h3 id="provides-search-capability-for-the-data-set-with-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|404|Not Found|No matching record found for the given criteria.|None|

<h3 id="provides-search-capability-for-the-data-set-with-the-given-search-criteria-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» **additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_dataSetList">dataSetList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlist"></a>
<a id="schema_dataSetList"></a>
<a id="tocSdatasetlist"></a>
<a id="tocsdatasetlist"></a>

```json
{
  "total": 0,
  "apis": [
    {
      "apiKey": "string",
      "apiVersionNumber": "string",
      "apiUrl": "string",
      "apiDocumentationUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|apis|[object]|false|none|none|
