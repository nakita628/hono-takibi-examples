<h1 id="enanomapper-database">eNanoMapper database v4.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AMBIT REST web services [eNanoMapper profile] with free text & faceted search

Base URLs:

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - NanoReg2 database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - caLIBRAte database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - GRACIOUS database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - PATROLS database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - NanoInformaTIX database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - RISKGONE database

* <a href="https://api.ideaconsult.net/nanoreg1">https://api.ideaconsult.net/nanoreg1</a> - Gov4Nano database

<a href="http://ambit.sf.net">Terms of service</a>
Email: <a href="mailto:support@ideaconsult.net">IDEAconsult's technical support</a> 
Web: <a href="https://phabricator.ideaconsult.net">IDEAconsult's technical support</a> 
License: <a href="http://www.gnu.org/licenses/lgpl.html">API available under GNU Lesser General Public License</a>

<a href="https://search.data.enanomapper.net">More information about the Nano safety data</a>

<h1 id="enanomapper-database-search">Search</h1>

Multi-DB aggregated free text and faceted search

## Apache Solr powered search

<a id="opIdsolrquery_get"></a>

> Code samples

```bash
curl https://example.com/select \
  -H 'Accept: application/json'
```

`GET /select`

GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.

<h3 id="apache-solr-powered-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|The query|
|start|query|integer|false|Starting page|
|rows|query|integer|false|Page size|
|wt|query|string|false|Response format|

#### Enumerated Values

|Parameter|Value|
|---|---|
|wt|json|
|wt|xml|

> Example responses

> 200 Response

```json
{
  "response": {
    "docs": [
      {}
    ],
    "maxScore": 0,
    "numFound": 0,
    "start": 0
  },
  "responseHeader": {
    "QTime": 0,
    "params": {},
    "status": 0,
    "zkConnected": true
  }
}
```

<h3 id="apache-solr-powered-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query performed successfully|[SolrResponse](#schemasolrresponse)|
|400|Bad Request|BAD_REQUEST|None|
|401|Unauthorized|UNAUTHORIZED|None|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT_FOUND|None|
|409|Conflict|CONFLICT|None|
|415|Unsupported Media Type|UNSUPPORTED_MEDIA_TYPE|None|
|500|Internal Server Error|SERVER_ERROR|None|
|503|Service Unavailable|SERVICE_UNAVAILABLE|None|
|510|Not Extended|INVALID_STATE          |None|

<aside class="success">
This operation does not require authentication
</aside>

## Apache Solr powered search

<a id="opIdsolrquery_post"></a>

> Code samples

```bash
curl https://example.com/select \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"{\n  \"params\": {\n    \"fl\": [\n      \"[child parentFilter=type_s:substance childFilter=type_s:composition limit=100]\",\n      \"dbtag_hss\",\n      \"name:name_hs\",\n      \"publicname:publicname_hs\",\n      \"owner_name:owner_name_hs\",\n      \"substanceType:substanceType_hs\",\n      \"s_uuid:s_uuid_hs\",\n      \"content:content_hss\",\n      \"SUMMARY.*\"\n    ],\n    \"rows\": 20\n  },\n  \"facet\": {\n    \"owner_name\": {\n      \"type\": \"terms\",\n      \"field\": \"owner_name_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"owner_name_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference_owner\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_owner_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_owner_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"substanceType\": {\n      \"type\": \"terms\",\n      \"field\": \"substanceType_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"substanceType_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"nm_name\": {\n      \"type\": \"terms\",\n      \"field\": \"publicname_s\",\n      \"mincount\": 451,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"nm_name_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"protocol\": {\n      \"type\": \"terms\",\n      \"field\": \"guidance_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"protocol_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"method\": {\n      \"type\": \"terms\",\n      \"field\": \"E.method_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"method_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"cell\": {\n      \"type\": \"terms\",\n      \"field\": \"E.cell_type_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"cell_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"species\": {\n      \"type\": \"terms\",\n      \"field\": \"E.animal_model_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"species_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"route\": {\n      \"type\": \"terms\",\n      \"field\": \"E.exposure_route_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"route_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"interpretation\": {\n      \"type\": \"terms\",\n      \"field\": \"MEDIUM_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"interpretation_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"dprotocol\": {\n      \"type\": \"terms\",\n      \"field\": \"Dispersion protocol_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"dprotocol_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference_year\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_year_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_year_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"release\": {\n      \"type\": \"terms\",\n      \"field\": \"updated_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"release_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"topcategory\": {\n      \"type\": \"terms\",\n      \"field\": \"topcategory_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"facet\": {\n        \"min\": \"min(loValue_d)\",\n        \"max\": \"max(loValue_d)\",\n        \"avg\": \"avg(loValue_d)\",\n        \"endpointcategory\": {\n          \"type\": \"terms\",\n          \"field\": \"endpointcategory_s\",\n          \"mincount\": 1,\n          \"limit\": -1,\n          \"facet\": {\n            \"min\": \"min(loValue_d)\",\n            \"max\": \"max(loValue_d)\",\n            \"avg\": \"avg(loValue_d)\",\n            \"effectendpoint\": {\n              \"type\": \"terms\",\n              \"field\": \"effectendpoint_s\",\n              \"mincount\": 1,\n              \"limit\": -1,\n              \"facet\": {\n                \"min\": \"min(loValue_d)\",\n                \"max\": \"max(loValue_d)\",\n                \"avg\": \"avg(loValue_d)\",\n                \"unit\": {\n                  \"type\": \"terms\",\n                  \"field\": \"unit_s\",\n                  \"mincount\": 1,\n                  \"limit\": -1,\n                  \"facet\": {\n                    \"min\": \"min(loValue_d)\",\n                    \"max\": \"max(loValue_d)\",\n                    \"avg\": \"avg(loValue_d)\"\n                  }\n                }\n              }\n            }\n          }\n        }\n      },\n      \"domain\": {\n        \"blockChildren\": \"type_s:substance\"\n      }\n    }\n  }\n}\n"'
```

`POST /select`

POST is more complex to use, but also allows for much for complex and lengthy queries.

> Body parameter

```json
"{\n  \"params\": {\n    \"fl\": [\n      \"[child parentFilter=type_s:substance childFilter=type_s:composition limit=100]\",\n      \"dbtag_hss\",\n      \"name:name_hs\",\n      \"publicname:publicname_hs\",\n      \"owner_name:owner_name_hs\",\n      \"substanceType:substanceType_hs\",\n      \"s_uuid:s_uuid_hs\",\n      \"content:content_hss\",\n      \"SUMMARY.*\"\n    ],\n    \"rows\": 20\n  },\n  \"facet\": {\n    \"owner_name\": {\n      \"type\": \"terms\",\n      \"field\": \"owner_name_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"owner_name_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference_owner\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_owner_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_owner_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"substanceType\": {\n      \"type\": \"terms\",\n      \"field\": \"substanceType_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"substanceType_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"nm_name\": {\n      \"type\": \"terms\",\n      \"field\": \"publicname_s\",\n      \"mincount\": 451,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"nm_name_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"protocol\": {\n      \"type\": \"terms\",\n      \"field\": \"guidance_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"protocol_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"method\": {\n      \"type\": \"terms\",\n      \"field\": \"E.method_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"method_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"cell\": {\n      \"type\": \"terms\",\n      \"field\": \"E.cell_type_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"cell_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"species\": {\n      \"type\": \"terms\",\n      \"field\": \"E.animal_model_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"species_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"route\": {\n      \"type\": \"terms\",\n      \"field\": \"E.exposure_route_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"route_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"interpretation\": {\n      \"type\": \"terms\",\n      \"field\": \"MEDIUM_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"interpretation_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"dprotocol\": {\n      \"type\": \"terms\",\n      \"field\": \"Dispersion protocol_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"dprotocol_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference_year\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_year_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_year_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"reference\": {\n      \"type\": \"terms\",\n      \"field\": \"reference_s\",\n      \"mincount\": 2,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"reference_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"release\": {\n      \"type\": \"terms\",\n      \"field\": \"updated_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"domain\": {\n        \"excludeTags\": \"release_tag\",\n        \"blockChildren\": \"type_s:substance\"\n      }\n    },\n    \"topcategory\": {\n      \"type\": \"terms\",\n      \"field\": \"topcategory_s\",\n      \"mincount\": 1,\n      \"limit\": -1,\n      \"facet\": {\n        \"min\": \"min(loValue_d)\",\n        \"max\": \"max(loValue_d)\",\n        \"avg\": \"avg(loValue_d)\",\n        \"endpointcategory\": {\n          \"type\": \"terms\",\n          \"field\": \"endpointcategory_s\",\n          \"mincount\": 1,\n          \"limit\": -1,\n          \"facet\": {\n            \"min\": \"min(loValue_d)\",\n            \"max\": \"max(loValue_d)\",\n            \"avg\": \"avg(loValue_d)\",\n            \"effectendpoint\": {\n              \"type\": \"terms\",\n              \"field\": \"effectendpoint_s\",\n              \"mincount\": 1,\n              \"limit\": -1,\n              \"facet\": {\n                \"min\": \"min(loValue_d)\",\n                \"max\": \"max(loValue_d)\",\n                \"avg\": \"avg(loValue_d)\",\n                \"unit\": {\n                  \"type\": \"terms\",\n                  \"field\": \"unit_s\",\n                  \"mincount\": 1,\n                  \"limit\": -1,\n                  \"facet\": {\n                    \"min\": \"min(loValue_d)\",\n                    \"max\": \"max(loValue_d)\",\n                    \"avg\": \"avg(loValue_d)\"\n                  }\n                }\n              }\n            }\n          }\n        }\n      },\n      \"domain\": {\n        \"blockChildren\": \"type_s:substance\"\n      }\n    }\n  }\n}\n"
```

<h3 id="apache-solr-powered-search-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wt|query|string|false|Response format|
|body|body|object|false|a JSON object with Solr query parameters|
|» facet|body|object|false|none|
|» params|body|object|false|none|
|» » fl|body|[string]|false|none|
|» » rows|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|wt|json|
|wt|xml|

> Example responses

> 200 Response

```json
{
  "response": {
    "docs": [
      {}
    ],
    "maxScore": 0,
    "numFound": 0,
    "start": 0
  },
  "responseHeader": {
    "QTime": 0,
    "params": {},
    "status": 0,
    "zkConnected": true
  }
}
```

<h3 id="apache-solr-powered-search-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query performed successfully|[SolrResponse](#schemasolrresponse)|
|400|Bad Request|BAD_REQUEST|None|
|401|Unauthorized|UNAUTHORIZED|None|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT_FOUND|None|
|409|Conflict|CONFLICT|None|
|415|Unsupported Media Type|UNSUPPORTED_MEDIA_TYPE|None|
|500|Internal Server Error|SERVER_ERROR|None|
|503|Service Unavailable|SERVICE_UNAVAILABLE|None|
|510|Not Extended|INVALID_STATE|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="enanomapper-database-structures">Structures</h1>

Chemical structures

<a href="https://github.com/ideaconsult/apps-ambit/blob/master/ambit-json-docs/">External documentation</a>

## Exact chemical structure search

<a id="opIdsearchByIdentifier"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/query/compound/search/all \
  -H 'Accept: application/json'
```

`GET /enm/{db}/query/compound/{term}/{representation}`

Returns compounds found

<a href="http://ambit.sf.net">Learn more about operations provided by this API.</a>

<h3 id="exact-chemical-structure-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|term|path|string|true|search term type|
|representation|path|string|true|none|
|search|query|string|false|Compound identifier (SMILES, InChI, name, registry identifiers)|
|b64search|query|string|false|Base64 encoded mol file; if included, will be used instead of the 'search' parameter|
|casesens|query|boolean|false|Case sensitive search if yes|
|bundle_uri|query|string|false|Bundle URI|
|sameas|query|string|false|Ontology URI to define groups of columns|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|term|search|
|term|url|
|term|inchikey|
|representation|all|
|representation|smiles|
|representation|reach|
|representation|stdinchi|
|representation|stdinchikey|
|representation|names|
|representation|iupac_name|
|representation|synonym|
|representation|cas|
|representation|einecs|

> Example responses

> 200 Response

```json
{
  "dataEntry": {},
  "feature": {},
  "model_uri": "string",
  "query": {}
}
```

<h3 id="exact-chemical-structure-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Entries found|[Dataset](#schemadataset)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Exact similarity search

<a id="opIdsearchBySimilarity"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/query/similarity \
  -H 'Accept: application/json'
```

`GET /enm/{db}/query/similarity`

Returns similar compounds

<a href="http://ambit.sf.net">Learn more about operations provided by this API.</a>

<h3 id="exact-similarity-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|search|query|string|false|Compound identifier (SMILES, InChI, name, registry identifiers)|
|b64search|query|string|false|Base64 encoded mol file; if included, will be used instead of the 'search' parameter|
|type|query|string|false|Defines the expected content of the search parameter|
|threshold|query|number|false|Similarity threshold|
|dataset_uri|query|string|false|Restrict the search within the AMBIT dataset specified with the URI|
|filterBySubstance|query|boolean|false|Restrict the search within the set of structures with assigned substances|
|bundle_uri|query|string|false|If the structure is used in the specified bundle URI, the selection tag will be returned|
|sameas|query|string|false|Ontology URI to define groups of columns|
|mol|query|boolean|false|Only for application/json; to include mol as JSON field|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|type|smiles|
|type|mol|
|type|url|

> Example responses

> 200 Response

```json
{
  "dataEntry": {},
  "feature": {},
  "model_uri": "string",
  "query": {}
}
```

<h3 id="exact-similarity-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Entries found|[Dataset](#schemadataset)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Substructure search

<a id="opIdsearchBySmarts"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/query/smarts \
  -H 'Accept: application/json'
```

`GET /enm/{db}/query/smarts`

Returns compounds with the specified substructure

<a href="http://ambit.sf.net">Learn more about operations provided by this API.</a>

<h3 id="substructure-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|search|query|string|false|Compound identifier (SMILES, InChI, name, registry identifiers)|
|b64search|query|string|false|Base64 encoded mol file; if included, will be used instead of the 'search' parameter|
|type|query|string|false|Defines the expected content of the search parameter|
|dataset_uri|query|string|false|Restrict the search within the AMBIT dataset specified with the URI|
|filterBySubstance|query|boolean|false|Restrict the search within the set of structures with assigned substances|
|bundle_uri|query|string|false|If the structure is used in the specified bundle URI, the selection tag will be returned|
|sameas|query|string|false|Ontology URI to define groups of columns|
|mol|query|boolean|false|Only for application/json; to include mol as JSON field|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|type|smiles|
|type|mol|
|type|url|

> Example responses

> 200 Response

```json
{
  "dataEntry": {},
  "feature": {},
  "model_uri": "string",
  "query": {}
}
```

<h3 id="substructure-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Entries found|[Dataset](#schemadataset)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Substance composition

<a id="opIdgetSubstanceComposition"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance/string/composition \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance/{uuid}/composition`

Returns substance composition

<h3 id="substance-composition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|uuid|path|string|true|Substance UUID|
|all|query|boolean|false|true (Show all compositions) false (do not show hidden compositions)|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|

> Example responses

> 200 Response

```json
{
  "composition": {},
  "feature": {}
}
```

<h3 id="substance-composition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. compositions found|[SubstanceComposition](#schemasubstancecomposition)|
|404|Not Found|compositions not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get substance composition as a dataset

<a id="opIdgetSubstanceStructures"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance/string/structures \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance/{uuid}/structures`

Returns substance composition

<h3 id="get-substance-composition-as-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|uuid|path|string|true|Substance UUID|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|

> Example responses

> 200 Response

```json
{
  "dataEntry": {},
  "feature": {},
  "model_uri": "string",
  "query": {}
}
```

<h3 id="get-substance-composition-as-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. compositions found|[Dataset](#schemadataset)|
|404|Not Found|compositions not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="enanomapper-database-substances">Substances</h1>

Chemical substances and (nano)materials

<a href="https://github.com/ideaconsult/apps-ambit/blob/master/ambit-json-docs/substance.md">External documentation</a>

## List substances

<a id="opIdgetSubstances"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance`

Returns a list of substances, according to the search criteria

<h3 id="list-substances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|search|query|string|false|Search parameter|
|type|query|string|false|none|
|compound_uri|query|string|false|If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure|
|bundle_uri|query|string|false|Retrieves if selected in this bundle|
|addDummySubstance|query|boolean|false|Adds a compound record as substance in JSON; only if type=related|
|studysummary|query|boolean|false|If true retrieves study summary for each substance|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|type|substancetype|
|type|name|
|type|like|
|type|regexp|
|type|uuif|
|type|CompTox|
|type|DOI|
|type|reliability|
|type|purposeFlag|
|type|studyResultType|
|type|isRobustStudy|
|type|citation|
|type|citationowner|
|type|topcategory|
|type|endpointcategory|
|type|params|
|type|owner_name|
|type|owner_uuid|
|type|related|
|type|reference|
|type|facet|

> Example responses

> 200 Response

```json
{
  "substance": {}
}
```

<h3 id="list-substances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Substances found|[Substance](#schemasubstance)|
|404|Not Found|Substances not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a substance

<a id="opIdgetSubstanceByUUID"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance/string \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance/{uuid}`

Returns substance representation

<h3 id="get-a-substance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|uuid|path|string|true|Substance UUID|
|property_uris[]|query|string|false|Property URIs|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|

> Example responses

> 200 Response

```json
{
  "substance": {}
}
```

<h3 id="get-a-substance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Substances found|[Substance](#schemasubstance)|
|404|Not Found|Substances not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="enanomapper-database-studies">Studies</h1>

Measurements or calculations attached to a substance

<a href="https://github.com/ideaconsult/apps-ambit/blob/master/ambit-json-docs/substance.md#study">External documentation</a>

## Details of multiple studies

<a id="opIdgetInvestigationResults"></a>

> Code samples

```bash
curl 'https://example.com/enm/nanoreg1/investigation?type=bystudytype&search=PC_GRANULOMETRY_SECTION' \
  -H 'Accept: application/json'
```

`GET /enm/{db}/investigation`

Multiple studies in tabular form

<h3 id="details-of-multiple-studies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|type|query|string|true|query type|
|search|query|string|true|Search parameter, UUID of the investigation or a substance|
|inchikey|query|string|false|Search parameter, InChI key(s) of the substance component(s), comma delimited|
|id|query|string|false|Search parameter, chemical structure or substance identifier(s), comma delimited|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|type|byinvestigation|
|type|byassay|
|type|bysubstance|
|type|byprovider|
|type|bycitation|
|type|bystudytype|
|type|bystructure_inchikey|
|type|bystructure_smiles|
|type|bystructure_name|
|type|bysubstance_name|
|type|bysubstance_type|

> Example responses

> 200 Response

```json
{
  "_childDocuments_": {},
  "assay": "string",
  "document_uuid": "string",
  "effectendpoint": "string",
  "endpoint": "string",
  "endpointcategory": "string",
  "err": 0,
  "errQualifier": "string",
  "guidance": "string",
  "investigation": "string",
  "loQualifier": "string",
  "loValue": 0,
  "name": "string",
  "owner_name": "string",
  "publicname": "string",
  "reference": "string",
  "reference_owner": "string",
  "reference_year": "string",
  "resulttype": "string",
  "s_uuid": "string",
  "studyResultType": "string",
  "substanceType": "string",
  "textValue": "string",
  "topcategory": "string",
  "type_s": "string",
  "unit": "string",
  "upQualifier": "string",
  "upValue": 0,
  "updated": "string"
}
```

<h3 id="details-of-multiple-studies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Entries found|[Investigation](#schemainvestigation)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search endpoint summary

<a id="opIdgetEndpointSummary"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/query/study \
  -H 'Accept: application/json'
```

`GET /enm/{db}/query/study`

Returns endpoint summary

<h3 id="search-endpoint-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|top|query|string|false|Top endpoint category|
|category|query|string|false|Endpoint category (The value in the protocol.category.code field)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|top|P-CHEM|
|top|ECOTOX|
|top|ENV FATE|
|top|TOX|
|top|EXPOSURE|

> Example responses

> 200 Response

```json
{
  "facet": {}
}
```

<h3 id="search-endpoint-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[Facet](#schemafacet)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## get substance study

<a id="opIdgetSubstanceStudy"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance/string/study \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance/{uuid}/study`

Returns substance study representation

<h3 id="get-substance-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|uuid|path|string|true|Substance UUID|
|top|query|string|false|Top endpoint category|
|category|query|string|false|Endpoint category (The value in the protocol.category.code field)|
|property_uri|query|string|false|Property URI https://data.enanomapper.net/property/{UUID} , see Property service|
|property|query|string|false|Property UUID|
|investigation_uuid|query|string|false|Investigation UUID, a code to link different studies|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|top|P-CHEM|
|top|ECOTOX|
|top|ENV FATE|
|top|TOX|
|top|EXPOSURE|

> Example responses

> 200 Response

```json
{
  "study": {}
}
```

<h3 id="get-substance-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Substances found|[SubstanceStudy](#schemasubstancestudy)|
|404|Not Found|Substances not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get study summary for the substance

<a id="opIdgetSubstanceStudySummary"></a>

> Code samples

```bash
curl https://example.com/enm/nanoreg1/substance/string/studySummary \
  -H 'Accept: application/json'
```

`GET /enm/{db}/substance/{uuid}/studySummary`

Study summary

<h3 id="get-study-summary-for-the-substance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|path|string|true|Database ID|
|uuid|path|string|true|Substance UUID|
|top|query|string|false|Top endpoint category|
|category|query|string|false|Endpoint category (The value in the protocol.category.code field)|
|property_uri|query|string|false|Property URI https://data.enanomapper.net/property/{UUID} , see Property service|
|property|query|string|false|Property UUID, see Property service|
|result|query|boolean|false|If true will group by topcategory,endpointcategory,interpretation result|
|page|query|integer|false|Starting page|
|pagesize|query|integer|false|Page size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|db|calibrate|
|db|enanomapper|
|db|enpra|
|db|marina|
|db|nanogenotox|
|db|nanoinformatix|
|db|nanoreg1|
|db|nanoreg2|
|db|nanotest|
|top|P-CHEM|
|top|ECOTOX|
|top|ENV FATE|
|top|TOX|
|top|EXPOSURE|

> Example responses

> 200 Response

```json
{
  "facet": {}
}
```

<h3 id="get-study-summary-for-the-substance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[SubstanceStudySummary](#schemasubstancestudysummary)|
|404|Not Found|Entries not found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "dataEntry": {},
  "feature": {},
  "model_uri": "string",
  "query": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataEntry|object|false|none|none|
|feature|object|false|none|none|
|model_uri|string|false|none|none|
|query|object|false|none|none|

<h2 id="tocS_Facet">Facet</h2>
<!-- backwards compatibility -->
<a id="schemafacet"></a>
<a id="schema_Facet"></a>
<a id="tocSfacet"></a>
<a id="tocsfacet"></a>

```json
{
  "facet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|object|false|none|none|

<h2 id="tocS_Investigation">Investigation</h2>
<!-- backwards compatibility -->
<a id="schemainvestigation"></a>
<a id="schema_Investigation"></a>
<a id="tocSinvestigation"></a>
<a id="tocsinvestigation"></a>

```json
{
  "_childDocuments_": {},
  "assay": "string",
  "document_uuid": "string",
  "effectendpoint": "string",
  "endpoint": "string",
  "endpointcategory": "string",
  "err": 0,
  "errQualifier": "string",
  "guidance": "string",
  "investigation": "string",
  "loQualifier": "string",
  "loValue": 0,
  "name": "string",
  "owner_name": "string",
  "publicname": "string",
  "reference": "string",
  "reference_owner": "string",
  "reference_year": "string",
  "resulttype": "string",
  "s_uuid": "string",
  "studyResultType": "string",
  "substanceType": "string",
  "textValue": "string",
  "topcategory": "string",
  "type_s": "string",
  "unit": "string",
  "upQualifier": "string",
  "upValue": 0,
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_childDocuments_|object|false|none|none|
|assay|string|false|none|none|
|document_uuid|string|false|none|none|
|effectendpoint|string|false|none|none|
|endpoint|string|false|none|none|
|endpointcategory|string|false|none|none|
|err|number|false|none|none|
|errQualifier|string|false|none|none|
|guidance|string|false|none|none|
|investigation|string|false|none|none|
|loQualifier|string|false|none|none|
|loValue|number|false|none|none|
|name|string|false|none|none|
|owner_name|string|false|none|none|
|publicname|string|false|none|none|
|reference|string|false|none|none|
|reference_owner|string|false|none|none|
|reference_year|string|false|none|none|
|resulttype|string|false|none|none|
|s_uuid|string|false|none|none|
|studyResultType|string|false|none|none|
|substanceType|string|false|none|none|
|textValue|string|false|none|none|
|topcategory|string|false|none|none|
|type_s|string|false|none|none|
|unit|string|false|none|none|
|upQualifier|string|false|none|none|
|upValue|number|false|none|none|
|updated|string|false|none|none|

<h2 id="tocS_SolrQuery">SolrQuery</h2>
<!-- backwards compatibility -->
<a id="schemasolrquery"></a>
<a id="schema_SolrQuery"></a>
<a id="tocSsolrquery"></a>
<a id="tocssolrquery"></a>

```json
{
  "facet": "string",
  "filter": "string",
  "query": "string",
  "rows": 0,
  "sort": true,
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|string|false|none|none|
|filter|string|false|none|none|
|query|string|false|none|none|
|rows|integer|false|none|none|
|sort|boolean|false|none|none|
|start|integer|false|none|none|

<h2 id="tocS_SolrResponse">SolrResponse</h2>
<!-- backwards compatibility -->
<a id="schemasolrresponse"></a>
<a id="schema_SolrResponse"></a>
<a id="tocSsolrresponse"></a>
<a id="tocssolrresponse"></a>

```json
{
  "response": {
    "docs": [
      {}
    ],
    "maxScore": 0,
    "numFound": 0,
    "start": 0
  },
  "responseHeader": {
    "QTime": 0,
    "params": {},
    "status": 0,
    "zkConnected": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|responseHeader|object|false|none|none|

<h2 id="tocS_Substance">Substance</h2>
<!-- backwards compatibility -->
<a id="schemasubstance"></a>
<a id="schema_Substance"></a>
<a id="tocSsubstance"></a>
<a id="tocssubstance"></a>

```json
{
  "substance": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|substance|object|false|none|none|

<h2 id="tocS_SubstanceComposition">SubstanceComposition</h2>
<!-- backwards compatibility -->
<a id="schemasubstancecomposition"></a>
<a id="schema_SubstanceComposition"></a>
<a id="tocSsubstancecomposition"></a>
<a id="tocssubstancecomposition"></a>

```json
{
  "composition": {},
  "feature": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|composition|object|false|none|none|
|feature|object|false|none|none|

<h2 id="tocS_SubstanceStudy">SubstanceStudy</h2>
<!-- backwards compatibility -->
<a id="schemasubstancestudy"></a>
<a id="schema_SubstanceStudy"></a>
<a id="tocSsubstancestudy"></a>
<a id="tocssubstancestudy"></a>

```json
{
  "study": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|study|object|false|none|none|

<h2 id="tocS_SubstanceStudySummary">SubstanceStudySummary</h2>
<!-- backwards compatibility -->
<a id="schemasubstancestudysummary"></a>
<a id="schema_SubstanceStudySummary"></a>
<a id="tocSsubstancestudysummary"></a>
<a id="tocssubstancestudysummary"></a>

```json
{
  "facet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|object|false|none|none|
