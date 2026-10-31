<h1 id="odn-api">ODN API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Socrata OpenDataNetwork (ODN) REST API exposes public data, often continuosly updated and enhanced, from many thousands of public
government and non profit agencies.

Much of this data originating from independent sources is fused together to create new, and often
powerful, entity level data. The API, in addition to search and autosuggest capabilities for finding datasets,
enables data based comparisons across geographical regions such as states, counties, metropolitan areas,
cities and zip codes using highly vetted data providers such as US Census, BEA, HUD and others. Comparison data
is preformatted for easy and efficient display on a chart, graph or interactive map.

The API also exposes data organized by narrative style questions a human might ask. The questions can
be rapidly found using an autosuggest style index, and then used to directly access all data needed to
thoroughly and authoritatively answer the question. Retrieved data includes time series (temporally aligned),
tabular, map heavy (includes spatial boundaries), and auto generated unstructured descriptive text.

The ODN API does not duplicate API endpoints or services provided by public sector agencies, but rather,
returns context relevant pre-populated REST URLs, when appropriate, so the caller can access data
directly from the source.

The [open source](http://github.com/socrata/odn-backend) API powers [OpenDataNetwork.com](http://OpenDataNetwork.com), an [open source](http://github.com/socrata/opendatanetwork.com)
site; the site highlights myriad uses and provides API badges with contextually relevant API example
REST endpoints and documentation pointers.

Finally, we continuously add new dat sources which appear automatically in the API, so if your favorite data
source is not available, check back soon. You can also join us [HERE](http://www.opendatanetwork.com/join-open-data-network)
and receive updates or let us know which data sources you are most interested in.

## App Tokens

Registering for and including a [Socrata application token](https://dev.socrata.com/docs/app-tokens.html)
is _required_ for the ODN API. They can be passed either using the `app_token` parameter
or the `X-App-Token` HTTP header.

Base URLs:

* <a href="http://api.opendatanetwork.com">http://api.opendatanetwork.com</a>

<h1 id="odn-api-default">Default</h1>

## Find all available data for some entities

<a id="opIdFind all available data for some entities"></a>

> Code samples

```bash
curl 'https://example.com/data/v1/availability/?entity_id=0100000US%2C0400000US53' \
  -H 'Accept: application/json'
```

`GET /data/v1/availability/`

<h3 id="find-all-available-data-for-some-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|true|Comma separated list of entity IDs.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "topics": {
    "demographics": {
      "datasets": {
        "population": {
          "constraints": [
            "year"
          ],
          "description": "",
          "domain": "odn.data.socrata.com",
          "fxf": "9jg8-ki9x",
          "id": "demographics.population",
          "name": "Population",
          "searchTerms": [
            "population",
            "household",
            "demographics",
            "ethnicity",
            "minority"
          ],
          "sources": [
            {
              "name": "U.S. Census American Community Survey",
              "url": "https://www.census.gov/programs-surveys/acs/"
            }
          ],
          "url": "https://odn.data.socrata.com/resource/9jg8-ki9x.json",
          "variables": {
            "change": {
              "description": "Percent change from the previous year",
              "id": "demographics.population.change",
              "name": "Population Change"
            },
            "count": {
              "id": "demographics.population.count",
              "name": "Population Count"
            }
          }
        }
      },
      "id": "demographics",
      "name": "Demographics"
    }
  }
}
```

<h3 id="find-all-available-data-for-some-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get constraint permutations for entities

<a id="opIdGet constraint permutations for entities"></a>

> Code samples

```bash
curl 'https://example.com/data/v1/constraint/demographics.population.count?entity_id=0100000US%2C0400000US53&constraint=year' \
  -H 'Accept: application/json'
```

`GET /data/v1/constraint/{variable}`

<h3 id="get-constraint-permutations-for-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable|path|string|true|Full ID of the variable to retrieve.|
|entity_id|query|string|true|Comma separated list of entity IDs.|
|constraint|query|string|true|Constraint to use.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "permutations": [
    {
      "constraint_value": "2009"
    },
    {
      "constraint_value": "2010"
    },
    {
      "constraint_value": "2011"
    },
    {
      "constraint_value": "2012"
    },
    {
      "constraint_value": "2013"
    }
  ]
}
```

<h3 id="get-constraint-permutations-for-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a map

<a id="opIdCreate a map"></a>

> Code samples

```bash
curl 'https://example.com/data/v1/map/new?variable=demographics.population.count&entity_id=0400000US53%2C0400000US08' \
  -H 'Accept: application/json'
```

`GET /data/v1/map/new`

<h3 id="create-a-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable|query|string|true|A single variable ID.|
|entity_id|query|string|true|A comma separated list of entity IDs.<br>Entities must have the same type and represent geographical regions.|
|constraint|query|string|false|Values must be specified for each constraint in the dataset.<br>For example, to generate map data for `demographics.population.count`,<br>you must specify a value for `year` by passing `year=2013`.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "bounds": [
    [
      40.712,
      -74.227
    ],
    [
      40.774,
      -74.125
    ]
  ],
  "session_id": "rhzpyxdvq56cc9cbg3ssb57b9",
  "summary_statistics": {
    "names": [
      "minimum",
      "average",
      "maximum"
    ],
    "values": [
      570134,
      6061914.615384615,
      37659181
    ],
    "values_formatted": [
      "570,134",
      "6,061,914",
      "37,659,181"
    ]
  }
}
```

<h3 id="create-a-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get values for variables

<a id="opIdGet values for variables"></a>

> Code samples

```bash
curl 'https://example.com/data/v1/values?variable=demographics.population.count' \
  -H 'Accept: application/json'
```

`GET /data/v1/values`

<h3 id="get-values-for-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable|query|string|true|Comma separated list of variable IDs.<br>Defaults to retrieving all variables.<br>It is also possible to pass in a topic such as<br>`demographics`, or a dataset such as `demographics.population`,<br>which would both be equivalent to specifying<br>`demographics.population.count` and `demographics.population.change`.<br>Note that only variables in the same dataset are allowed.|
|entity_id|query|string|false|Comma separated list of entity IDs.<br>Defaults to retrieving all entities.<br>Note that since there is currently no results pagination,<br>retrieving values for all entities may produce incomplete results.|
|forecast|query|number|false|Number of steps to forecast.<br>Must be an integer between 0 and 20.<br>Forecasts are produced using linear extrapolation<br>on the data. They are only available when retrieving<br>data for a single variable across many numerical<br>constraint options.<br><br>+ Default `0`|
|describe|query|boolean|false|Whether or not to produce a description of the data.<br>Set to `true` to produce a description.<br>Descriptions are not available if no entities are specified.<br><br>+ Default `false`|
|format|query|string|false|If format is set to `google`, the data frame will be formatted<br>as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class).<br>If the format is not provided or invalid, then the frame<br>will be formatted normally.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|google|

> Example responses

> 200 Response

```json
{
  "data": [
    [
      "year",
      "0100000US",
      "forecast",
      "0400000US53",
      "forecast"
    ],
    [
      2009,
      301461533,
      false,
      6465755,
      false
    ],
    [
      2010,
      303965272,
      false,
      6561297,
      false
    ],
    [
      2011,
      306603772,
      false,
      6652845,
      false
    ],
    [
      2012,
      309138711,
      false,
      6738714,
      false
    ],
    [
      2013,
      311536594,
      false,
      6819579,
      false
    ],
    [
      2014,
      314055359.25,
      true,
      6908035,
      true
    ],
    [
      2015,
      316574124.5,
      true,
      6996491,
      true
    ],
    [
      2016,
      319092889.75,
      true,
      7084947,
      true
    ]
  ],
  "forecast_info": {
    "algorithm_name": "linear",
    "algorithm_url": "https://en.wikipedia.org/wiki/Extrapolation#Linear_extrapolation"
  }
}
```

<h3 id="get-values-for-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Entities

<a id="opIdGet Entities"></a>

> Code samples

```bash
curl https://example.com/entity/v1 \
  -H 'Accept: application/json'
```

`GET /entity/v1`

<h3 id="get-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|false|ID of the entity.|
|entity_name|query|string|false|Name of the entity.|
|entity_type|query|string|false|Type of the entity.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": "0400000US53",
      "name": "Washington",
      "type": "region.state"
    }
  ]
}
```

<h3 id="get-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find the relatives of an entity

<a id="opIdFind the relatives of an entity"></a>

> Code samples

```bash
curl 'https://example.com/entity/v1/parent?entity_id=0400000US53' \
  -H 'Accept: application/json'
```

`GET /entity/v1/{relation}`

<h3 id="find-the-relatives-of-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|relation|path|string|true|The type of relation to find.|
|entity_id|query|string|true|ID of the target entity.|
|variable_id|query|string|false|If this parameter is included, only entities with data for the given<br>variable will be returned. Note that this may cause the number of<br>entities returned to be less than the specified `limit`.|
|limit|query|number|false|Maximum number of entities in each group.<br>Must be an integer from 1 to 1000.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

#### Enumerated Values

|Parameter|Value|
|---|---|
|relation|parent|
|relation|child|
|relation|sibling|
|relation|peer|

> Example responses

> 200 Response

```json
{
  "relatives": [
    {
      "entities": [
        {
          "id": "0300000US9",
          "name": "Pacific Division",
          "type": "region.division"
        }
      ],
      "type": "region.division"
    }
  ]
}
```

<h3 id="find-the-relatives-of-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get datasets

<a id="opIdGet datasets"></a>

> Code samples

```bash
curl https://example.com/search/v1/dataset \
  -H 'Accept: application/json'
```

`GET /search/v1/dataset`

<h3 id="get-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|false|Entities to use in formulating the query.|
|dataset_id|query|string|false|If included, the search terms of the dataset<br>will be used in the query.|
|limit|query|number|false|Maximum number of results to return.<br>Must be an integer from 0 to 50000.|
|offset|query|number|false|Number of results to skip.<br>Used for pagination.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "datasets": [
    {
      "attribution": "The Big Cities Health Coalition",
      "categories": [
        "education",
        "health"
      ],
      "created_at": "2015-09-01T19:23:15.000Z",
      "dataset_url": "https://bchi.bigcitieshealth.org/d/rwyf-6cby",
      "description": "This dataset illustrates health status of 26 of the nation’s largest and most urban cities as captured by 34 health (and six demographics-related) indicators. These indicators represent some of the leading causes of morbidity and mortality in the United States and leading priorities of national, state, and local health agencies. Public health data were captured in nine overarching categories: HIV/AIDS, cancer, nutrition/physical activity/obesity, food safety, infectious disease, maternal and child health, tobacco, injury/violence, and behavioral health/substance abuse.",
      "dev_docs_url": "https://dev.socrata.com/foundry/bchi.bigcitieshealth.org/ffnx-yiyc",
      "domain": "bchi.bigcitieshealth.org",
      "domain_url": "http://bchi.bigcitieshealth.org",
      "name": "Big Cities Health Data Inventory",
      "updated_at": "2016-06-27T19:10:04.000Z"
    },
    {
      "attribution": "Public Health - Seattle & King County",
      "categories": [
        "health"
      ],
      "created_at": "2014-03-06T23:17:51.000Z",
      "dataset_url": "https://data.kingcounty.gov/d/ajpg-dges",
      "description": "Health reporting area (HRA) and zip code-level indicators for monitoring the impact of the Affordable Care Act in King County, WA. Topic areas range from access to care to population health. Imported to Socrata to allow data to be pulled as JSON from SODA to feed into Leaflet.js-based maps on an external site.",
      "dev_docs_url": "https://dev.socrata.com/foundry/data.kingcounty.gov/t34p-gkbv",
      "domain": "data.kingcounty.gov",
      "domain_url": "http://data.kingcounty.gov",
      "name": "King County Health Reform Indicators",
      "updated_at": "2014-12-17T00:09:12.000Z"
    }
  ]
}
```

<h3 id="get-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get questions

<a id="opIdGet questions"></a>

> Code samples

```bash
curl 'https://example.com/search/v1/question?query=seattle' \
  -H 'Accept: application/json'
```

`GET /search/v1/question`

<h3 id="get-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|String to search against.|
|limit|query|number|false|Maximum number of results to return.<br>Must be an integer from 0 to 50000.|
|offset|query|number|false|Number of results to skip.<br>Used for pagination.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

> Example responses

> 200 Response

```json
{
  "questions": [
    {
      "entity": {
        "id": "310M200US42660",
        "name": "Seattle Metro Area (WA)"
      },
      "metric": "population",
      "text": "What is the population count of Seattle Metro Area (WA)?",
      "variable_name": "population count",
      "vector": "population"
    },
    {
      "entity": {
        "id": "310M200US42660",
        "name": "Seattle Metro Area (WA)"
      },
      "metric": "business_and_finance",
      "text": "What is the business and finance employment rate of Seattle Metro Area (WA)?",
      "variable_name": "business and finance employment rate",
      "vector": "occupations"
    }
  ]
}
```

<h3 id="get-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get suggestions

<a id="opIdGet suggestions"></a>

> Code samples

```bash
curl 'https://example.com/suggest/v1/entity?query=seattl' \
  -H 'Accept: application/json'
```

`GET /suggest/v1/{type}`

<h3 id="get-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of the object to find.|
|query|query|string|true|Query to match.|
|limit|query|number|false|Maximum number of results to return.<br>Must be an integer from 0 to 100.|
|variable_id|query|string|false|This parameter is only available when suggesting entities with `type=entity`.<br>If it is provided, suggestions will be filtered to include<br>only entities that have data for the given variable.<br><br>If the variable provided is invalid, no entities will be returned.<br><br>Note that this filtering will increase response time significantly,<br>so it should only be used when necessary.|
|app_token|query|string|false|The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be<br>used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).|
|X-App-Token|header|string|false|e.g. cQovpGcdUT1CSzgYk0KPYdAI0|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|entity|
|type|category|
|type|publisher|
|type|dataset|
|type|question|

> Example responses

> 200 Response

```json
{
  "options": [
    {
      "id": "310M200US42660",
      "name": "Seattle Metro Area (WA)",
      "type": "regions.msa"
    },
    {
      "id": "1600000US5363000",
      "name": "Seattle, WA",
      "type": "regions.place"
    }
  ]
}
```

<h3 id="get-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Data_Availability">Data_Availability</h2>
<!-- backwards compatibility -->
<a id="schemadata_availability"></a>
<a id="schema_Data_Availability"></a>
<a id="tocSdata_availability"></a>
<a id="tocsdata_availability"></a>

```json
null
```

<h2 id="tocS_Data_Constraints">Data_Constraints</h2>
<!-- backwards compatibility -->
<a id="schemadata_constraints"></a>
<a id="schema_Data_Constraints"></a>
<a id="tocSdata_constraints"></a>
<a id="tocsdata_constraints"></a>

```json
null
```

<h2 id="tocS_Data_Values">Data_Values</h2>
<!-- backwards compatibility -->
<a id="schemadata_values"></a>
<a id="schema_Data_Values"></a>
<a id="tocSdata_values"></a>
<a id="tocsdata_values"></a>

```json
null
```

<h2 id="tocS_Entity_Lookup">Entity_Lookup</h2>
<!-- backwards compatibility -->
<a id="schemaentity_lookup"></a>
<a id="schema_Entity_Lookup"></a>
<a id="tocSentity_lookup"></a>
<a id="tocsentity_lookup"></a>

```json
null
```

<h2 id="tocS_Entity_Relationships">Entity_Relationships</h2>
<!-- backwards compatibility -->
<a id="schemaentity_relationships"></a>
<a id="schema_Entity_Relationships"></a>
<a id="tocSentity_relationships"></a>
<a id="tocsentity_relationships"></a>

```json
null
```

<h2 id="tocS_Map_Creation">Map_Creation</h2>
<!-- backwards compatibility -->
<a id="schemamap_creation"></a>
<a id="schema_Map_Creation"></a>
<a id="tocSmap_creation"></a>
<a id="tocsmap_creation"></a>

```json
null
```

<h2 id="tocS_Search_Datasets">Search_Datasets</h2>
<!-- backwards compatibility -->
<a id="schemasearch_datasets"></a>
<a id="schema_Search_Datasets"></a>
<a id="tocSsearch_datasets"></a>
<a id="tocssearch_datasets"></a>

```json
null
```

<h2 id="tocS_Search_Questions">Search_Questions</h2>
<!-- backwards compatibility -->
<a id="schemasearch_questions"></a>
<a id="schema_Search_Questions"></a>
<a id="tocSsearch_questions"></a>
<a id="tocssearch_questions"></a>

```json
null
```

<h2 id="tocS_Suggestions">Suggestions</h2>
<!-- backwards compatibility -->
<a id="schemasuggestions"></a>
<a id="schema_Suggestions"></a>
<a id="tocSsuggestions"></a>
<a id="tocssuggestions"></a>

```json
null
```
