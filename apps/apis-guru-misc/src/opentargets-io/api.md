<h1 id="open-targets-platform-rest-api">Open Targets Platform REST API v19.02.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

### The Open Targets Platform REST API

The Open Targets Platform API ('Application Programming Interface') allows programmatic retrieval of the Open Targets Platform data via a set of [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) services.

You can make calls to the latest version of our API using the base URL `https://platform-api.opentargets.io/v3/platform`. Please make sure you use `https` instead of the unencrypted `http` calls, which we do not accept.

We list below the methods available to query our data directly from the API, followed by an interactive interface that you can use to try out the parameters and execute the REST-API calls.

For every request you create, the interactive interface will display both a [curl](https://curl.haxx.se/) command and a request URL that you can use to ensure you get the expected response before using your application or workflow. 

Check our documentation for some [API tutorials](https://docs.targetvalidation.org/tutorials/api-tutorials) and [get in touch](mailto:support@targetvalidation.org) if you have any questions.

### Available Methods

The available methods can be grouped in three types:

* __public__ - Methods that serve the core set of our data. These are stable and we fully supported them.
* __private__ - Methods used by the web app to serve additional data not specific to our platform. These methods
may change without notice and should be used with caution.
* __utils__ - Methods to get statistics and technical data about our API.

### Supported formats

The methods above are all available via a `GET` request, and will serve outputs as `JSON`.

Alternative output formats, such `xml`, `csv` and `tab`, are also available for some of the methods. However alternative output formats are not supported in interactive interface below where the response will be always in `JSON.

If you have complex queries with large number of parameters, you should use a `POST` request instead of  `GET`. 
`POST` methods require a body encoded as `json`. When querying for a specific disease using the latest version of the API, your call would look like the example below:

```sh
curl -X POST -d '{"disease":["EFO_0000253"]}' --header 'Content-Type: application/json' https://platform-api.opentargets.io/v3/platform/public/evidence/filter
```
### How to interpret a response

Each HTTPS response will serve data in headers and body. The headers will give you details about your query, such as how long it took to run.

In the body of the response, you will find the data you have requested for in `JSON` format. The [jq](https://stedolan.github.io/jq/) program is a useful tool to parse the json response while on the command line.

```sh
curl https://platform-api.opentargets.io/v3/platform/public/association/filter\?target\=ENSG00000157764 | jq
```

We do not analyse the nature of any specific API queries except for the purposes of improving the performance of our API.
Read more in our [privacy section](https://www.targetvalidation.org/terms_of_use#privacy).

How can we make the Open Targets Platform API more useful to you? Would you like additional methods to be implemented?
Please [get in touch](mailto:support@targetvalidation.org) and send your suggestions.

Base URLs:

* <a href="https://api.apis.guru//platform-api.opentargets.io/v3">https://api.apis.guru//platform-api.opentargets.io/v3</a>

Email: <a href="mailto:support@targetvalidation.org">Open Targets Platform team</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="open-targets-platform-rest-api-public">public</h1>

Publicly supported stable API.

## Get association by id

<a id="opIdgetAssociationById"></a>

> Code samples

```bash
curl 'https://example.com/platform/public/association?id=string'
```

`GET /platform/public/association`

Once we integrate all evidence connecting a target to a specific disease, we
 compute an association score by the means of an harmonic sum. This *association score* provides
 an indication of how strong the evidence behind each connection is and can be
 used to rank genes in order of likelihood as drug targets.
 The association ID is constructed by using the Ensembl ID of the gene and the
 EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
 The method returns an association object, which contains the data and summary
 on each evidence type included in the calculation of the score, as well as the score itself.


<h3 id="get-association-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|An association ID usually in the form of `TARGET_ID-DISEASE_ID`.|

<h3 id="get-association-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Filter available associations

<a id="opIdgetAssociationFilter"></a>

> Code samples

```bash
curl https://example.com/platform/public/association/filter
```

`GET /platform/public/association/filter`

More complex queries for associations scores and objects can be done using
this method, which allows to sort in different order, restrict to a specific class
of diseases or targets, as well as filtering results by score and associated pathways.


<h3 id="filter-available-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|query|string|false|A target identifier listed as target.id.|
|disease|query|string|false|An EFO code listed as disease.id.|
|therapeutic_area|query|string|false|An EFO code of a therapeutic area.|
|datasource|query|string|false|Data source to consider.|
|datatype|query|string|false|Data type to consider.|
|pathway|query|string|false|A Reactome pathway identifier (returning only those targets linked to the specified pathway).|
|target_class|query|string|false|A ChEMBL target class identifier (returning only those targets belonging to the specified class).|
|uniprotkw|query|string|false|A UniProt keyword (meaning all the targets linked to that keyword).|
|direct|query|boolean|false|If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.|
|datastructure|query|string|false|Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.|
|fields|query|string|false|Fields you want to retrieve. This will get priority over the data structure requested.|
|facets|query|boolean|false|Returns facets|
|scorevalue_min|query|number(float)|false|Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.|
|scorevalue_max|query|number(float)|false|Filter by maximum score value.|
|scorevalue_types|query|string|false|Score types to apply the score value min and max filters. The default is `overall`.|
|size|query|number(integer)|false|Maximum amount of results to return. Defaults to 10, max is 10000.|
|from|query|number(integer)|false|How many initial results should be skipped. Defaults to 0.|
|format|query|string|false|Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.|
|sort|query|string|false|Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending<br>order e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as<br>'datasources.gwas'. Supports multiple entries.<br>|
|search|query|string|false|Restrict the filtered results to those matching the passed string. The matching is done with a<br>phrase match prefix.<br>|

<h3 id="filter-available-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Batch query available associations

<a id="opIdpostAssociationFilter"></a>

> Code samples

```bash
curl https://example.com/platform/public/association/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"target\":[\"target1\", \"target2\"]}\n"'
```

`POST /platform/public/association/filter`

Complex queries and filters for association objects can also be submitted using a JSON
object and the equivalent POST method.


> Body parameter

```json
"{\"target\":[\"target1\", \"target2\"]}\n"
```

<h3 id="batch-query-available-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|Filters to apply when retrieving association objects.|

<h3 id="batch-query-available-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get evidence by ID

<a id="opIdgetEvidenceById"></a>

> Code samples

```bash
curl 'https://example.com/platform/public/evidence?id=string'
```

`GET /platform/public/evidence`

We call **evidence** a unit of data that support a connection between a target and a disease.
The Open Targets Platform integrates multiple types of evidence including genetic associations,
somatic mutations, RNA expression and target-disease associations mined from the literature.
This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
targetvalidation.org ID.

Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).

**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.


<h3 id="get-evidence-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Internal unique ID of the evidence string to retrieve.|

<h3 id="get-evidence-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get evidence for a list of IDs

<a id="opIdpostEvidenceById"></a>

> Code samples

```bash
curl https://example.com/platform/public/evidence \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"id\":[\"id1\", \"id2\"]}\n"'
```

`POST /platform/public/evidence`

This is the POST version of [/public/evidence](#!/public/get_public_evidence).
It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.


> Body parameter

```json
"{\"id\":[\"id1\", \"id2\"]}\n"
```

<h3 id="get-evidence-for-a-list-of-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|IDs of the evidence string to retrieve.|

<h3 id="get-evidence-for-a-list-of-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Filter available evidence

<a id="opIdgetEvidenceFilter"></a>

> Code samples

```bash
curl https://example.com/platform/public/evidence/filter
```

`GET /platform/public/evidence/filter`

The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
Filters can be used to restrict the results by source and type of data,
or limit results to targets which are part of a particular pathway.
Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
**Note** that multiple genes and diseases can be specified in the same request.


<h3 id="filter-available-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|query|string|false|A target identifier listed as target.id.|
|disease|query|string|false|An EFO code listed as disease.id.|
|data source|query|string|false|Data source to consider.|
|datatype|query|string|false|Data type to consider.|
|pathway|query|string|false|A pathway identifier (meaning all the targets linked to that pathway).|
|uniprotkw|query|string|false|A UniProt keyword (meaning all the targets linked to that keyword).|
|datastructure|query|string|false|Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.|
|fields|query|string|false|The fields you want to retrieve. This will get priority over the data structure requested.|
|scorevalue_min|query|number(float)|false|Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.|
|scorevalue_max|query|number(float)|false|Filter by maximum score value.|
|sort|query|string|false|Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending<br>order e.g. '~scores.association_score'. It supports multiple entries.<br>|
|size|query|number(integer)|false|Maximum amount of results to return. Defaults to 10, max is 10000.|
|from|query|number(integer)|false|How many initial results should be skipped. Defaults to 0.|
|format|query|string|false|Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.|

<h3 id="filter-available-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Batch filter available evidence

<a id="opIdpostEvidenceFilter"></a>

> Code samples

```bash
curl https://example.com/platform/public/evidence/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"target\":[\"ENSG00000094755\", \"ENSG00000167207\"], \"disease\":[\"EFO_0003767\"]}\n"'
```

`POST /platform/public/evidence/filter`

POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.


> Body parameter

```json
"{\"target\":[\"ENSG00000094755\", \"ENSG00000167207\"], \"disease\":[\"EFO_0003767\"]}\n"
```

<h3 id="batch-filter-available-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|Filters to apply when retrieving evidence string objects.|

<h3 id="batch-filter-available-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search for a disease or a target

<a id="opIdgetSearch"></a>

> Code samples

```bash
curl 'https://example.com/platform/public/search?q=string'
```

`GET /platform/public/search`

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


<h3 id="search-for-a-disease-or-a-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|A full text query.|
|size|query|string|false|Maximum amount of results to return. Defaults to 10, max is 10000.|
|from|query|string|false|How many initial results should be skipped. Defaults to 0.|
|filter|query|string|false|Restrict the search to the type requested. Eg. `target` or `disease`.|

<h3 id="search-for-a-disease-or-a-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get metrics about the current data release

<a id="opIdgetDataMetrics"></a>

> Code samples

```bash
curl https://example.com/platform/public/utils/metrics
```

`GET /platform/public/utils/metrics`

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


<h3 id="get-metrics-about-the-current-data-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ping service

<a id="opIdgetPing"></a>

> Code samples

```bash
curl https://example.com/platform/public/utils/ping
```

`GET /platform/public/utils/ping`

Check if the API is up


<h3 id="ping-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get statistics about the current data release

<a id="opIdgetDataStats"></a>

> Code samples

```bash
curl https://example.com/platform/public/utils/stats
```

`GET /platform/public/utils/stats`

Returns the number of associations and evidences, divided by datasource.


<h3 id="get-statistics-about-the-current-data-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the list of therapeutic areas about the current data release

<a id="opIdgetTherapeuticAreas"></a>

> Code samples

```bash
curl https://example.com/platform/public/utils/therapeuticareas
```

`GET /platform/public/utils/therapeuticareas`

Returns the list of therapeutic areas for the current data release


<h3 id="get-the-list-of-therapeutic-areas-about-the-current-data-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get API version

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/platform/public/utils/version
```

`GET /platform/public/utils/version`

Returns current API version.


<h3 id="get-api-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-targets-platform-rest-api-private">private</h1>

Unstable API methods. Subject to change without prior notice. Use at your own risk.

## Browse API documentation

<a id="opIdgetApiDocs"></a>

> Code samples

```bash
curl https://example.com/platform/docs
```

`GET /platform/docs`

Access api docs as served by Redoc

<h3 id="browse-api-documentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redoc API documentation file|None|

<aside class="success">
This operation does not require authentication
</aside>

## Browse interactive API documentation

<a id="opIdgetApiSwaggerUI"></a>

> Code samples

```bash
curl https://example.com/platform/docs/swagger-ui
```

`GET /platform/docs/swagger-ui`

Interactive API docs using swagger-ui

<h3 id="browse-interactive-api-documentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Swagger-UI API documentation file|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get `autocomplete` objects.

<a id="opIdgetAutocomplete"></a>

> Code samples

```bash
curl 'https://example.com/platform/private/autocomplete?q=string'
```

`GET /platform/private/autocomplete`

Search for the closest term to autocomplete in the search box.


<h3 id="get-autocomplete-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|A full text query.|
|size|query|string|false|Maximum amount of results to return. Defaults to 5.|

<h3 id="get-autocomplete-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find the best hit

<a id="opIdpostBestHitSearch"></a>

> Code samples

```bash
curl https://example.com/platform/private/besthitsearch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`POST /platform/private/besthitsearch`

Fire the search method for multiple strings


> Body parameter

```json
"string"
```

<h3 id="find-the-best-hit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|list of strings to search for|

<h3 id="find-the-best-hit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find information about a list of diseases

<a id="opIdpostDiseaseById"></a>

> Code samples

```bash
curl https://example.com/platform/private/disease \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"disease\":[\"disease1\", \"disease2\"],\n\"facets\" = \"true\"}\n"'
```

`POST /platform/private/disease`

Get `disease` objects.


> Body parameter

```json
"{\"disease\":[\"disease1\", \"disease2\"],\n\"facets\" = \"true\"}\n"
```

<h3 id="find-information-about-a-list-of-diseases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|An EFO identifier.|

<h3 id="find-information-about-a-list-of-diseases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find information about a disease

<a id="opIdgetDiseaseById"></a>

> Code samples

```bash
curl https://example.com/platform/private/disease/string
```

`GET /platform/private/disease/{disease}`

Get `disease` objects.


<h3 id="find-information-about-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disease|path|string|true|An EFO identifier.|

<h3 id="find-information-about-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get drug by ID

<a id="opIdgetDrugByID"></a>

> Code samples

```bash
curl 'https://example.com/platform/private/drug/string?drug_id=string'
```

`GET /platform/private/drug/{DRUG_ID}`

Get `drug` objects.


<h3 id="get-drug-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drug_id|query|string|true|An ID in the drug index.|
|DRUG_ID|path|string|true|Automatically added|

<h3 id="get-drug-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get evidence code by ID

<a id="opIdgetECObyID"></a>

> Code samples

```bash
curl https://example.com/platform/private/eco/string
```

`GET /platform/private/eco/{ECO_ID}`

Get `ECO` objects.


<h3 id="get-evidence-code-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ECO_ID|path|string|true|An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.|

<h3 id="get-evidence-code-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Enrichment analysis

<a id="opIdpostEnrichmentTarget"></a>

> Code samples

```bash
curl https://example.com/platform/private/enrichment/targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"target\" : [\"ENSG00000001\", \"ENSG00000002\"],\n \"pvalue\" : 0.001,\n \"size\" : 20}\n"'
```

`POST /platform/private/enrichment/targets`

Returns an enrichment analysis for a list of targets passed in the body


> Body parameter

```json
"{\"target\" : [\"ENSG00000001\", \"ENSG00000002\"],\n \"pvalue\" : 0.001,\n \"size\" : 20}\n"
```

<h3 id="enrichment-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|IDs of the targets to do the enrichment analysis for.|

<h3 id="enrichment-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search most relevant results

<a id="opIdgetQuickSearch"></a>

> Code samples

```bash
curl 'https://example.com/platform/private/quicksearch?q=string'
```

`GET /platform/private/quicksearch`

Get `search-result` objects. Enables search bar functionality.


<h3 id="search-most-relevant-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|A full text query.|
|size|query|string|false|Maximum amount of results to return. Defaults to 5.|

<h3 id="search-most-relevant-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find related entities

<a id="opIdpostRelation"></a>

> Code samples

```bash
curl https://example.com/platform/private/relation \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"subject\":[\"gene1\", \"gene2\"]}\n"'
```

`POST /platform/private/relation`

Get `relation` objects.


> Body parameter

```json
"{\"subject\":[\"gene1\", \"gene2\"]}\n"
```

<h3 id="find-related-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|An Ensembl gene identifier.|

<h3 id="find-related-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find related entities by disease

<a id="opIdgetRelationByEFOID"></a>

> Code samples

```bash
curl https://example.com/platform/private/relation/disease/string
```

`GET /platform/private/relation/disease/{disease}`

Get `relation` objects starting from diseases.


<h3 id="find-related-entities-by-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disease|path|string|true|An EFO gene identifier.|

<h3 id="find-related-entities-by-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find related entities by target

<a id="opIdgetRelationByENSGID"></a>

> Code samples

```bash
curl https://example.com/platform/private/relation/target/string
```

`GET /platform/private/relation/target/{target}`

Get `relation` objects starting from diseases.


<h3 id="find-related-entities-by-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|An Ensembl gene identifier.|

<h3 id="find-related-entities-by-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find information about a list of targets

<a id="opIdpostTargetByENSGID"></a>

> Code samples

```bash
curl https://example.com/platform/private/target \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"target\":[\"target1\", \"target2\"],\n\"facets\" = \"true\"}\n"'
```

`POST /platform/private/target`

Get `target` objects. Used for the target profile page.


> Body parameter

```json
"{\"target\":[\"target1\", \"target2\"],\n\"facets\" = \"true\"}\n"
```

<h3 id="find-information-about-a-list-of-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|An Ensembl gene identifier.|

<h3 id="find-information-about-a-list-of-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Query expression levels

<a id="opIdgetTargetExpressionByENSGID"></a>

> Code samples

```bash
curl 'https://example.com/platform/private/target/expression?gene=string'
```

`GET /platform/private/target/expression`

Get `gene-expression` objects.


<h3 id="query-expression-levels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gene|query|string|true|An Ensembl gene identifier.|

<h3 id="query-expression-levels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Batch query expression levels

<a id="opIdpostTargetExpressionByENSGID"></a>

> Code samples

```bash
curl https://example.com/platform/private/target/expression \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"gene\":[\"gene1\", \"gene2\"]}\n"'
```

`POST /platform/private/target/expression`

Get `gene-expression` objects.


> Body parameter

```json
"{\"gene\":[\"gene1\", \"gene2\"]}\n"
```

<h3 id="batch-query-expression-levels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|An Ensembl gene identifier.|

<h3 id="batch-query-expression-levels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find information about a target

<a id="opIdgetTargetByENSGID"></a>

> Code samples

```bash
curl https://example.com/platform/private/target/string
```

`GET /platform/private/target/{target}`

Get `target` objects.


<h3 id="find-information-about-a-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|An Ensembl gene ID for the target of interest.|

<h3 id="find-information-about-a-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get OpenAPI schema

<a id="opIdgetSwagger"></a>

> Code samples

```bash
curl https://example.com/platform/swagger
```

`GET /platform/swagger`

Get swagger.yaml specs for the API

<h3 id="get-openapi-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Swagger.yaml file|None|

<aside class="success">
This operation does not require authentication
</aside>
