<h1 id="semantic-api">Semantic API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Semantic API complements the Articles API. With the Semantic API, you get access to the long list of people, places, organizations and other locations, entities and descriptors that make up the controlled vocabulary used as metadata by The New York Times (sometimes referred to as Times Tags and used for Times Topics pages).

The Semantic API uses concepts which are, by definition, terms in The New York Times controlled vocabulary. Like the way facets are used in the Articles API, concepts are a good way to uncover articles of interest in The New York Times archive, and at the same time, limit the scope and number of those articles. The Semantic API maps to external semantic data resources, in a fashion consistent with the idea of linked data. The Semantic API also provides combination and relationship information to other, similar concepts in The New York Times controlled vocabulary.

Base URLs:

* <a href="http://api.nytimes.com/svc/semantic/v2/concept">http://api.nytimes.com/svc/semantic/v2/concept</a>

* <a href="https://api.nytimes.com/svc/semantic/v2/concept">https://api.nytimes.com/svc/semantic/v2/concept</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="semantic-api-default">Default</h1>

## get/name/{concept-type}/{specific-concept}.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/name/nytd_geo/string.json?query=string&api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /name/{concept-type}/{specific-concept}.json`

<h3 id="getnameconcept-typespecific-conceptjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concept-type|path|string|true|The type of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined as a name-value pair, as in "concept_type=[nytd_geo\|nytd_per\|nytd_org\|nytd_des]".<br>|
|specific-concept|path|string|true|The name of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined in the URI path, as the element immediately preceding ".json" like with "Baseball.json".<br>|
|fields|query|string|false|"all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query<br><br>Optional fields are returned in result_set. They are briefly explained here:<br><br>pages: A list of topic pages associated with a specific concept.<br>ticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.<br>links: A list of links from this concept to external data resources.<br>taxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.<br>combinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.<br>geocodes: For geographic concepts, the full GIS record from geonames.<br>article_list: A list of up to 10 articles associated with this concept.<br>scope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.<br>search_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.<br>|
|query|query|string|true|Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|concept-type|nytd_geo|
|concept-type|nytd_per|
|concept-type|nytd_org|
|concept-type|nytd_des|
|fields|all|
|fields|pages|
|fields|ticker_symbol|
|fields|links|
|fields|taxonomy|
|fields|combinations|
|fields|geocodes|
|fields|article_list|
|fields|scope_notes|
|fields|search_api_query|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "ancestors": [
        {
          "concept_created": "string",
          "concept_id": 0,
          "concept_name": "string",
          "concept_status": "string",
          "concept_type": "string",
          "concept_updated": "string",
          "is_times_tag": 0,
          "vernacular": "string"
        }
      ],
      "article_list": {
        "results": [
          {
            "body": "string",
            "byline": "string",
            "concepts": {
              "nytd_des": [
                "string"
              ],
              "nytd_org": [
                "string"
              ],
              "nytd_per": [
                "string"
              ]
            },
            "date": "string",
            "document_type": "string",
            "title": "string",
            "type_of_material": "string",
            "url": "string"
          }
        ],
        "total": 0
      },
      "combinations": [
        {
          "combination_note": "string",
          "combination_source_concept_id": 0,
          "combination_source_concept_name": "string",
          "combination_source_concept_type": "string",
          "combination_target_concept_id": 0,
          "combination_target_concept_name": "string",
          "combination_target_concept_type": "string"
        }
      ],
      "concept_created": "string",
      "concept_id": 0,
      "concept_name": "string",
      "concept_status": "string",
      "concept_type": "string",
      "concept_updated": "string",
      "descendants": [
        {
          "concept_created": "string",
          "concept_id": 0,
          "concept_name": "string",
          "concept_status": "string",
          "concept_type": "string",
          "concept_updated": "string",
          "is_times_tag": 0,
          "vernacular": "string"
        }
      ],
      "is_times_tag": 0,
      "links": [
        {
          "concept_id": 0,
          "concept_name": "string",
          "concept_status": "string",
          "concept_type": "string",
          "is_times_tag": 0,
          "link": "string",
          "link_id": 0,
          "link_type": "string",
          "mapping_type": "string",
          "relation": "string"
        }
      ],
      "scope_notes": [
        {
          "scope_note": "string",
          "scope_note_name": "string",
          "scope_note_type": "string"
        }
      ],
      "search_api_query": "string",
      "taxonomy": [
        {
          "source_concept_id": 0,
          "source_concept_name": "string",
          "source_concept_type": "string",
          "source_concept_vernacular": "string",
          "target_concept_id": 0,
          "target_concept_name": "string",
          "target_concept_type": "string",
          "target_concept_vernacular": "string",
          "taxonomic_relation": "string",
          "taxonomic_verification_status": "string"
        }
      ],
      "vernacular": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getnameconcept-typespecific-conceptjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Concepts|Inline|

<h3 id="getnameconcept-typespecific-conceptjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Concept](#schemaconcept)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/search.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/search.json?query=string&api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /search.json`

<h3 id="getsearchjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.|
|offset|query|integer|false|Integer value for the index count from the first concept to the last concept, sorted alphabetically. Used in a Search Query. A Search Query will return up to 10 concepts in its results.|
|fields|query|string|false|"all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query<br><br>Optional fields are returned in result_set. They are briefly explained here:<br><br>pages: A list of topic pages associated with a specific concept.<br>ticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.<br>links: A list of links from this concept to external data resources.<br>taxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.<br>combinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.<br>geocodes: For geographic concepts, the full GIS record from geonames.<br>article_list: A list of up to 10 articles associated with this concept.<br>scope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.<br>search_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|pages|
|fields|ticker_symbol|
|fields|links|
|fields|taxonomy|
|fields|combinations|
|fields|geocodes|
|fields|article_list|
|fields|scope_notes|
|fields|search_api_query|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "concept_created": "string",
      "concept_id": 0,
      "concept_name": "string",
      "concept_status": "string",
      "concept_type": "string",
      "concept_updated": "string",
      "is_times_tag": 0,
      "vernacular": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getsearchjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Concepts|Inline|

<h3 id="getsearchjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[ConceptRelation](#schemaconceptrelation)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Concept">Concept</h2>
<!-- backwards compatibility -->
<a id="schemaconcept"></a>
<a id="schema_Concept"></a>
<a id="tocSconcept"></a>
<a id="tocsconcept"></a>

```json
{
  "ancestors": [
    {
      "concept_created": "string",
      "concept_id": 0,
      "concept_name": "string",
      "concept_status": "string",
      "concept_type": "string",
      "concept_updated": "string",
      "is_times_tag": 0,
      "vernacular": "string"
    }
  ],
  "article_list": {
    "results": [
      {
        "body": "string",
        "byline": "string",
        "concepts": {
          "nytd_des": [
            "string"
          ],
          "nytd_org": [
            "string"
          ],
          "nytd_per": [
            "string"
          ]
        },
        "date": "string",
        "document_type": "string",
        "title": "string",
        "type_of_material": "string",
        "url": "string"
      }
    ],
    "total": 0
  },
  "combinations": [
    {
      "combination_note": "string",
      "combination_source_concept_id": 0,
      "combination_source_concept_name": "string",
      "combination_source_concept_type": "string",
      "combination_target_concept_id": 0,
      "combination_target_concept_name": "string",
      "combination_target_concept_type": "string"
    }
  ],
  "concept_created": "string",
  "concept_id": 0,
  "concept_name": "string",
  "concept_status": "string",
  "concept_type": "string",
  "concept_updated": "string",
  "descendants": [
    {
      "concept_created": "string",
      "concept_id": 0,
      "concept_name": "string",
      "concept_status": "string",
      "concept_type": "string",
      "concept_updated": "string",
      "is_times_tag": 0,
      "vernacular": "string"
    }
  ],
  "is_times_tag": 0,
  "links": [
    {
      "concept_id": 0,
      "concept_name": "string",
      "concept_status": "string",
      "concept_type": "string",
      "is_times_tag": 0,
      "link": "string",
      "link_id": 0,
      "link_type": "string",
      "mapping_type": "string",
      "relation": "string"
    }
  ],
  "scope_notes": [
    {
      "scope_note": "string",
      "scope_note_name": "string",
      "scope_note_type": "string"
    }
  ],
  "search_api_query": "string",
  "taxonomy": [
    {
      "source_concept_id": 0,
      "source_concept_name": "string",
      "source_concept_type": "string",
      "source_concept_vernacular": "string",
      "target_concept_id": 0,
      "target_concept_name": "string",
      "target_concept_type": "string",
      "target_concept_vernacular": "string",
      "taxonomic_relation": "string",
      "taxonomic_verification_status": "string"
    }
  ],
  "vernacular": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestors|[[ConceptRelation](#schemaconceptrelation)]|false|none|none|
|article_list|object|false|none|none|
|combinations|[object]|false|none|none|
|concept_created|string|false|none|none|
|concept_id|integer|false|none|none|
|concept_name|string|false|none|none|
|concept_status|string|false|none|none|
|concept_type|string|false|none|none|
|concept_updated|string|false|none|none|
|descendants|[[ConceptRelation](#schemaconceptrelation)]|false|none|none|
|is_times_tag|integer|false|none|none|
|links|[object]|false|none|none|
|scope_notes|[object]|false|none|none|
|search_api_query|string|false|none|none|
|taxonomy|[object]|false|none|none|
|vernacular|string|false|none|none|

<h2 id="tocS_ConceptRelation">ConceptRelation</h2>
<!-- backwards compatibility -->
<a id="schemaconceptrelation"></a>
<a id="schema_ConceptRelation"></a>
<a id="tocSconceptrelation"></a>
<a id="tocsconceptrelation"></a>

```json
{
  "concept_created": "string",
  "concept_id": 0,
  "concept_name": "string",
  "concept_status": "string",
  "concept_type": "string",
  "concept_updated": "string",
  "is_times_tag": 0,
  "vernacular": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concept_created|string|false|none|none|
|concept_id|integer|false|none|none|
|concept_name|string|false|none|none|
|concept_status|string|false|none|none|
|concept_type|string|false|none|none|
|concept_updated|string|false|none|none|
|is_times_tag|integer|false|none|none|
|vernacular|string|false|none|none|
