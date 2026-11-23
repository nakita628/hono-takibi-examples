<h1 id="exa-public-api">Exa Public API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.exa.ai">https://api.exa.ai</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **x-api-key**, in: header. Pass your Exa API key in the x-api-key header. You can also authenticate with Authorization: Bearer <key>.

- HTTP Authentication, scheme: bearer Pass your Exa API key in the x-api-key header. You can also authenticate with Authorization: Bearer <key>.

<h1 id="exa-public-api-default">Default</h1>

## Search

<a id="opIdsearch"></a>

> Code samples

```bash
curl https://api.exa.ai/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "startPublishedDate": "1970-01-01T00:00:00Z",
    "endPublishedDate": "1970-01-01T00:00:00Z",
    "numResults": 10,
    "moderation": false,
    "contents": {
      "text": false,
      "highlights": false,
      "summary": {
        "query": "string",
        "schema": {
          "property1": true,
          "property2": true
        }
      },
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "snapshotAsOf": "1970-01-01T00:00:00Z",
      "context": true,
      "livecrawl": "never",
      "crawledBeforeDate": "string",
      "subpages": 0,
      "subpageTarget": "string"
    },
    "query": "string",
    "additionalQueries": [
      "string"
    ],
    "type": "auto",
    "category": "company",
    "userLocation": "string",
    "compliance": "hipaa",
    "outputSchema": {
      "type": "text",
      "description": "string"
    },
    "objective": "string",
    "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
    "systemPrompt": "string",
    "stream": false,
    "startCrawlDate": "1970-01-01T00:00:00Z",
    "endCrawlDate": "1970-01-01T00:00:00Z",
    "includeText": [
      "string"
    ],
    "excludeText": [
      "string"
    ],
    "context": true
  }'
```

`POST /search`

Perform a search with an Exa prompt-engineered query and retrieve a list of relevant results. Optionally get contents.

> Body parameter

```json
{
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "startPublishedDate": "1970-01-01T00:00:00Z",
  "endPublishedDate": "1970-01-01T00:00:00Z",
  "numResults": 10,
  "moderation": false,
  "contents": {
    "text": false,
    "highlights": false,
    "summary": {
      "query": "string",
      "schema": {
        "property1": true,
        "property2": true
      }
    },
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "snapshotAsOf": "1970-01-01T00:00:00Z",
    "context": true,
    "livecrawl": "never",
    "crawledBeforeDate": "string",
    "subpages": 0,
    "subpageTarget": "string"
  },
  "query": "string",
  "additionalQueries": [
    "string"
  ],
  "type": "auto",
  "category": "company",
  "userLocation": "string",
  "compliance": "hipaa",
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "objective": "string",
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
  "systemPrompt": "string",
  "stream": false,
  "startCrawlDate": "1970-01-01T00:00:00Z",
  "endCrawlDate": "1970-01-01T00:00:00Z",
  "includeText": [
    "string"
  ],
  "excludeText": [
    "string"
  ],
  "context": true
}
```

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchRequest](#schemasearchrequest)|true|none|
|» includeDomains|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|List of domains or domain paths to include in the search. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, results will only come from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.|
|» » *anyOf*|body|null|false|none|
|» excludeDomains|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|List of domains or domain paths to exclude from search results. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, no results will be returned from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.|
|» » *anyOf*|body|null|false|none|
|» startPublishedDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|Only links with a published date after this will be returned. Must be specified in ISO 8601 format.|
|» » *anyOf*|body|null|false|none|
|» endPublishedDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|Only links with a published date before this will be returned. Must be specified in ISO 8601 format.|
|» » *anyOf*|body|null|false|none|
|» numResults|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.|
|» » *anyOf*|body|null|false|none|
|» moderation|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|Enable content moderation to filter unsafe content from search results.|
|» » *anyOf*|body|null|false|none|
|» contents|body|[ContentsOptions](#schemacontentsoptions) \| null|false|none|
|» » *anyOf*|body|[ContentsOptions](#schemacontentsoptions)|false|Content options for text, highlights, summary, extras, and freshness controls.|
|» » *anyOf*|body|null|false|none|
|» query|body|string|true|The query string for the search.|
|» additionalQueries|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|Additional query variations for deep-search variants. Only works with a deep-search type. When provided, these queries are used alongside the main query for broader results.|
|» » *anyOf*|body|null|false|none|
|» type|body|string \| null|false|The search mode to use. Defaults to `auto`, a balanced mode recommended for most applications.<br><br>- `auto`: The default. A balanced mode that optimizes for both quality and speed and is recommended for most applications.<br>- `lite`: Low-cost, low-latency search for real-time and interactive experiences such as chat, voice agents, and autocomplete. Accepts only `query` (a single string), `objective`, `userIdentifier`, `metadata`, `category`, `numResults`, `contents.highlights`, `contents.text`, `contents.snapshotAsOf`, `userLocation`, `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `moderation`, and `compliance`; a request that sets any other parameter is rejected. Serves cached content only; it never fetches live, so the freshness options are rejected.<br>- `deep-lite`: Performs lightweight research with synthesized results and a consistent 4-second latency, lower than full deep search.<br>- `deep`: Conducts comprehensive multi-step research with synthesis.<br>- `instant`: Legacy. Use `lite` instead. Runs a minimum-latency search that trades some search depth for speed. Unlike `lite`, it accepts every search parameter.<br>- `fast`: Legacy. Use `lite` instead. Runs a reduced-latency search for user-facing and interactive workflows. Unlike `lite`, it accepts every search parameter.<br>- `deep-reasoning`: Legacy. Use `deep` instead. Runs `deep` with stronger reasoning at each step, for complex analysis and decision-making tasks. For agentic, multi-step research, use the Agent API.|
|» » *anyOf*|body|string|false|The default. A balanced mode that optimizes for both quality and speed and is recommended for most applications.|
|» » *anyOf*|body|string|false|Low-cost, low-latency search for real-time and interactive experiences such as chat, voice agents, and autocomplete. Accepts only `query` (a single string), `objective`, `userIdentifier`, `metadata`, `category`, `numResults`, `contents.highlights`, `contents.text`, `contents.snapshotAsOf`, `userLocation`, `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `moderation`, and `compliance`; a request that sets any other parameter is rejected. Serves cached content only; it never fetches live, so the freshness options are rejected.|
|» » *anyOf*|body|string|false|Performs lightweight research with synthesized results and a consistent 4-second latency, lower than full deep search.|
|» » *anyOf*|body|string|false|Conducts comprehensive multi-step research with synthesis.|
|» » *anyOf*|body|string|false|Legacy. Use `lite` instead. Runs a minimum-latency search that trades some search depth for speed. Unlike `lite`, it accepts every search parameter.|
|» » *anyOf*|body|string|false|Legacy. Use `lite` instead. Runs a reduced-latency search for user-facing and interactive workflows. Unlike `lite`, it accepts every search parameter.|
|» » *anyOf*|body|string|false|Legacy. Use `deep` instead. Runs `deep` with stronger reasoning at each step, for complex analysis and decision-making tasks. For agentic, multi-step research, use the Agent API.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» category|body|string \| null|false|none|
|» » *anyOf*|body|string|false|A data category to focus on. Other strings are accepted and used as category hints. `people` and `company` return higher-quality people profiles and company pages. `publication` returns scholarly publications such as research papers, preprints, and journal articles, with metadata like authors, venue, and citations. `company` and `people` do not support `startPublishedDate` or `endPublishedDate`, and `people` also does not support `excludeDomains`. Requests that set an unsupported filter return a 400 error.|
|» » *anyOf*|body|null|false|none|
|» userLocation|body|string \| object \| null|false|none|
|» » *anyOf*|body|string \| object|false|The end user's location, as a two-letter ISO 3166-1 country code (e.g. `US`) or an object with `country`, a `latitude` and `longitude` pair, or both. The country localizes results. Coordinates are used only for queries that name no place but depend on where the user is, such as "coffee near me". They do not set a country, so send `country` with them to localize results. Send only the precision your use case needs.|
|» » *oneOf*|body|string|false|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » *oneOf*|body|object|false|The user's country only. Equivalent to the string form.|
|» » country|body|string|true|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » *oneOf*|body|object|false|The user's coordinates, with an optional country.|
|» » country|body|string|false|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » latitude|body|number|true|The user's latitude in decimal degrees.|
|» » longitude|body|number|true|The user's longitude in decimal degrees.|
|» » *anyOf*|body|null|false|none|
|» compliance|body|string \| null|false|none|
|» » *anyOf*|body|string|false|Enterprise-only compliance mode. Set to `hipaa` for HIPAA mode. Requires cache-only retrieval with supported parameters. See the HIPAA docs for details.|
|» » *anyOf*|body|null|false|none|
|» outputSchema|body|object \| null|false|none|
|» » *anyOf*|body|object|false|JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.|
|» » *oneOf*|body|[OutputSchemaText](#schemaoutputschematext)|false|none|
|» » *oneOf*|body|[OutputSchemaObject](#schemaoutputschemaobject)|false|none|
|» » *anyOf*|body|null|false|none|
|» objective|body|string \| null|false|The broader goal this search serves: the task the caller is working on, beyond the query itself. When exposing this field to an agent as a tool parameter, describe it as: "Goal for this search turn; say which documents should rank first, which should be excluded, and what specific facts or figures to pull from them."|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» userIdentifier|body|string \| null|false|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» systemPrompt|body|string \| null|false|none|
|» » *anyOf*|body|string|false|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|Requests server-sent events for synthesized output streaming. Streaming is currently used only when outputSchema is provided; otherwise the endpoint returns the normal JSON search response.|
|» » *anyOf*|body|null|false|none|
|» startCrawlDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|**Deprecated.** Deprecated. Ignored by the API. Setting it adds an `IGNORED_FIELD` warning to the response's `warnings`.|
|» » *anyOf*|body|null|false|none|
|» endCrawlDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|**Deprecated.** Deprecated. Ignored by the API. Setting it adds an `IGNORED_FIELD` warning to the response's `warnings`.|
|» » *anyOf*|body|null|false|none|
|» includeText|body|[string] \| null|false|**Deprecated.** Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters.|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» excludeText|body|[string] \| null|false|**Deprecated.** Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters.|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» context|body|boolean \| object \| null|false|none|
|» » *anyOf*|body|boolean \| object|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|boolean|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|object|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » maxCharacters|body|integer|false|Maximum character limit for the context string.|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|company|
|» » *anyOf*|publication|
|» » *anyOf*|news|
|» » *anyOf*|personal site|
|» » *anyOf*|financial report|
|» » *anyOf*|people|
|» » *anyOf*|hipaa|

> Example responses

> 200 Response

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "warnings": [
    {
      "code": "IGNORED_FIELD",
      "path": "/startCrawlDate",
      "message": "string"
    }
  ],
  "notices": [
    {
      "code": "RESTRICTIONS_RELAXED",
      "path": "/query",
      "message": "string",
      "details": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "output": {
    "content": "string",
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "resolvedSearchType": "string",
  "context": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 402 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 429 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 503 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchResponse](#schemasearchresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. API-key requests receive the standard error envelope when the team is out of credits or a spending budget is exceeded. On x402-priced endpoints, requests without an API key receive an x402 payment challenge with tag `X402_PAYMENT_REQUIRED` that describes how to pay.|Inline|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|A rate limit for this API key, team, or network was exceeded.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Exa is temporarily over capacity or unavailable. The request was not processed; retry with exponential backoff.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="search-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|Standard error envelope returned by the Exa API for failed requests.|
|*oneOf*|[X402PaymentChallenge](#schemax402paymentchallenge)|false|none|x402 payment challenge: the standard error envelope extended with x402 payment metadata.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|200|x-exa-queued|string||Whether the request waited in the customer rate-limit queue before being admitted.|
|200|x-exa-queue-ms|string||Total milliseconds the request waited in the customer rate-limit queue.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|402|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|503|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Contents

<a id="opIdgetContents"></a>

> Code samples

```bash
curl https://api.exa.ai/contents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ],
    "urls": [
      "string"
    ],
    "compliance": "hipaa",
    "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
    "text": false,
    "highlights": false,
    "summary": {
      "query": "string",
      "schema": {
        "property1": true,
        "property2": true
      }
    },
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "snapshotAsOf": "1970-01-01T00:00:00Z",
    "subpages": 0,
    "subpageTarget": "string",
    "context": true,
    "livecrawl": "never",
    "crawledBeforeDate": "string"
  }'
```

`POST /contents`

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "urls": [
    "string"
  ],
  "compliance": "hipaa",
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
  "text": false,
  "highlights": false,
  "summary": {
    "query": "string",
    "schema": {
      "property1": true,
      "property2": true
    }
  },
  "extras": {
    "links": 0,
    "imageLinks": 0,
    "richImageLinks": 0,
    "richLinks": 0,
    "codeBlocks": 0
  },
  "livecrawlTimeout": 10000,
  "maxAgeHours": -1,
  "snapshotAsOf": "1970-01-01T00:00:00Z",
  "subpages": 0,
  "subpageTarget": "string",
  "context": true,
  "livecrawl": "never",
  "crawledBeforeDate": "string"
}
```

<h3 id="contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentsRequest](#schemacontentsrequest)|true|none|
|» ids|body|[string]|false|Document IDs obtained from searches.|
|» urls|body|[string]|false|URLs to crawl (backwards compatible with the `ids` parameter).|
|» compliance|body|string \| null|false|none|
|» » *anyOf*|body|string|false|Enterprise-only compliance mode. Set to `hipaa` for HIPAA mode. Requires cache-only retrieval with supported parameters. See the HIPAA docs for details.|
|» » *anyOf*|body|null|false|none|
|» userIdentifier|body|string \| null|false|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» text|body|boolean \| object \| null|false|none|
|» » *anyOf*|body|boolean \| object|false|Text extraction options for each result.|
|» » *oneOf*|body|boolean|false|If true, returns full page text with default settings. If false, disables text return.|
|» » *oneOf*|body|object|false|Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure. Set `maxAgeHours: 0` to apply `includeHtmlTags`, `verbosity`, and section filters to freshly fetched content.|
|» » maxCharacters|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Maximum character limit for the full page text. Useful for controlling response size and API costs.|
|» » » *anyOf*|body|null|false|none|
|» » includeHtmlTags|body|boolean \| null|false|none|
|» » » *anyOf*|body|boolean|false|If true, include lightweight HTML tags in returned text instead of plain markdown-style text.|
|» » » *anyOf*|body|null|false|none|
|» » verbosity|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|Controls text rendering verbosity. compact focuses on main content, standard includes more surrounding page context, and full requests the most complete rendered text. Some pages may produce identical standard and full output.|
|» » » *anyOf*|body|null|false|none|
|» » includeSections|body|[string] \| null|false|none|
|» » » *anyOf*|body|[string]|false|Best-effort. Only include content classified into these semantic page sections. Section classification may be unavailable or incomplete for some pages; validate output if strict filtering is required.|
|» » » *anyOf*|body|null|false|none|
|» » excludeSections|body|[string] \| null|false|none|
|» » » *anyOf*|body|[string]|false|Exclude content classified into these semantic page sections. Section classification is best-effort.|
|» » » *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» highlights|body|boolean \| object \| null|false|none|
|» » *anyOf*|body|boolean \| object|false|Text snippets the LLM identifies as most relevant from each page.|
|» » *oneOf*|body|boolean|false|If true, returns highlights with default settings. If false, disables highlights.|
|» » *oneOf*|body|object|false|Advanced options for steering highlight extraction. Pass highlights: true for the highest-quality default; supply this object only when you need to guide selection with your own query.|
|» » query|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|Custom query that guides which highlights the LLM picks.|
|» » » *anyOf*|body|null|false|none|
|» » verbosity|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|Preset highlight length: `low`, `medium`, and `high` allocate progressively larger token budgets for the returned highlights. With highlights.dynamic, the preset sets a single shared budget across the whole result set instead of a per-URL budget. Exact budgets are tuned by Exa and may change. Not compatible with maxCharacters or numSentences. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `verbosity` without it are rejected.|
|» » » *anyOf*|body|null|false|none|
|» » dynamic|body|boolean \| null|false|none|
|» » » *anyOf*|body|boolean|false|Enable Dynamic Highlights (research preview): considers all results together and allocates a single shared context budget across the result set instead of a per-document budget. Not compatible with maxCharacters. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `dynamic` without it are rejected.|
|» » » *anyOf*|body|null|false|none|
|» » maxCharacters|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL. Not compatible with highlights.dynamic.|
|» » » *anyOf*|body|null|false|none|
|» » numSentences|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|**Deprecated.** Deprecated. Use `maxCharacters` instead. Currently mapped to a character budget of about 1333 characters per sentence. Pass highlights: true for default highlights, or { query } to guide selection with your own query.|
|» » » *anyOf*|body|null|false|none|
|» » highlightsPerUrl|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|**Deprecated.** Deprecated. Currently ignored. Pass highlights: true for default highlights, or { query } to guide selection with your own query.|
|» » » *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» summary|body|object \| null|false|none|
|» » *anyOf*|body|object|false|Summary of the webpage.|
|» » query|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|Custom query for the LLM-generated summary.|
|» » » *anyOf*|body|null|false|none|
|» » schema|body|object \| null|false|none|
|» » » *anyOf*|body|object|false|JSON schema for structured output from summary. See https://json-schema.org/overview/what-is-jsonschema for JSON Schema documentation.|
|» » » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» » » *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» extras|body|object \| null|false|none|
|» » *anyOf*|body|object|false|Extra parameters to pass.|
|» » links|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Number of URLs to return from each webpage.|
|» » » *anyOf*|body|null|false|none|
|» » imageLinks|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Number of images to return for each result.|
|» » » *anyOf*|body|null|false|none|
|» » richImageLinks|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Number of rich image links to return for each result.|
|» » » *anyOf*|body|null|false|none|
|» » richLinks|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Number of rich links to return for each result.|
|» » » *anyOf*|body|null|false|none|
|» » codeBlocks|body|integer \| null|false|none|
|» » » *anyOf*|body|integer|false|Number of code blocks to return for each result.|
|» » » *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» livecrawlTimeout|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|The timeout for livecrawling in milliseconds.|
|» » *anyOf*|body|null|false|none|
|» maxAgeHours|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.|
|» » *anyOf*|body|null|false|none|
|» snapshotAsOf|body|string(date-time) \| string(date) \| null|false|none|
|» » *anyOf*|body|string(date-time) \| string(date)|false|Return the newest stored version of each page as of this instant. Accepts an ISO 8601 date-time (`2026-01-15T00:00:00Z`) or a date-only value (`2026-01-15`), which is interpreted as midnight UTC. Historical requests are served from stored versions only and never fetch the live page.|
|» » *oneOf*|body|string(date-time)|false|ISO 8601 date-time.|
|» » *oneOf*|body|string(date)|false|ISO 8601 date (`YYYY-MM-DD`), interpreted as midnight UTC.|
|» » *anyOf*|body|null|false|none|
|» subpages|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|The number of subpages to crawl. The actual number crawled may be limited by system constraints.|
|» » *anyOf*|body|null|false|none|
|» subpageTarget|body|string \| [string] \| null|false|none|
|» » *anyOf*|body|string \| [string]|false|Term to find specific subpages of search results. Can be a single string or an array of strings.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» context|body|boolean \| object \| null|false|none|
|» » *anyOf*|body|boolean \| object|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|boolean|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|object|false|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|
|» » maxCharacters|body|integer|false|Maximum character limit for the context string.|
|» » *anyOf*|body|null|false|none|
|» livecrawl|body|string \| null|false|none|
|» » *anyOf*|body|string|false|**Deprecated.** Deprecated. Use `maxAgeHours` instead. Does not guarantee freshly fetched content. Cannot be combined with `maxAgeHours`.|
|» » *anyOf*|body|null|false|none|
|» crawledBeforeDate|body|string \| null(date-time)|false|**Deprecated.** Deprecated. Use `snapshotAsOf` instead. Alias of snapshotAsOf with identical behavior.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|hipaa|
|» » » *anyOf*|compact|
|» » » *anyOf*|standard|
|» » » *anyOf*|full|
|» » » *anyOf*|header|
|» » » *anyOf*|navigation|
|» » » *anyOf*|banner|
|» » » *anyOf*|body|
|» » » *anyOf*|sidebar|
|» » » *anyOf*|footer|
|» » » *anyOf*|metadata|
|» » » *anyOf*|header|
|» » » *anyOf*|navigation|
|» » » *anyOf*|banner|
|» » » *anyOf*|body|
|» » » *anyOf*|sidebar|
|» » » *anyOf*|footer|
|» » » *anyOf*|metadata|
|» » » *anyOf*|low|
|» » » *anyOf*|medium|
|» » » *anyOf*|high|
|» » *anyOf*|never|
|» » *anyOf*|always|
|» » *anyOf*|fallback|
|» » *anyOf*|preferred|

> Example responses

> 200 Response

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "statuses": [
    {
      "id": "string",
      "status": "success",
      "source": "cached",
      "error": {
        "tag": "string",
        "httpStatusCode": 100
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "context": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 402 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 429 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 503 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentsResponse](#schemacontentsresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. API-key requests receive the standard error envelope when the team is out of credits or a spending budget is exceeded. On x402-priced endpoints, requests without an API key receive an x402 payment challenge with tag `X402_PAYMENT_REQUIRED` that describes how to pay.|Inline|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|A rate limit for this API key, team, or network was exceeded.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Exa is temporarily over capacity or unavailable. The request was not processed; retry with exponential backoff.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="contents-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|Standard error envelope returned by the Exa API for failed requests.|
|*oneOf*|[X402PaymentChallenge](#schemax402paymentchallenge)|false|none|x402 payment challenge: the standard error envelope extended with x402 payment metadata.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|200|x-exa-queued|string||Whether the request waited in the customer rate-limit queue before being admitted.|
|200|x-exa-queue-ms|string||Total milliseconds the request waited in the customer rate-limit queue.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|402|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|503|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Answer

<a id="opIdanswer"></a>

> Code samples

```bash
curl https://api.exa.ai/answer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "query": "string",
    "stream": false,
    "text": false,
    "model": "exa",
    "systemPrompt": "string",
    "userLocation": "string",
    "outputSchema": {
      "type": "string",
      "properties": {
        "property1": true,
        "property2": true
      },
      "required": [
        "string"
      ],
      "description": "string",
      "additionalProperties": false,
      "property1": true,
      "property2": true
    },
    "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
  }'
```

`POST /answer`

Performs a search based on the query and generates either a direct answer or a detailed summary with citations, depending on the query type.

> Body parameter

```json
{
  "query": "string",
  "stream": false,
  "text": false,
  "model": "exa",
  "systemPrompt": "string",
  "userLocation": "string",
  "outputSchema": {
    "type": "string",
    "properties": {
      "property1": true,
      "property2": true
    },
    "required": [
      "string"
    ],
    "description": "string",
    "additionalProperties": false,
    "property1": true,
    "property2": true
  },
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
}
```

<h3 id="answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnswerRequest](#schemaanswerrequest)|true|none|
|» query|body|string|true|Natural-language question or instructions for the request.|
|» stream|body|boolean|false|If true, the response is returned as a server-sent events (SSE) stream.|
|» text|body|boolean|false|If true, returns full page text with default settings. If false, disables text return.|
|» model|body|string|false|The model used to generate the answer.|
|» systemPrompt|body|string|false|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|» userLocation|body|string \| object \| null|false|none|
|» » *anyOf*|body|string \| object|false|The end user's location, as a two-letter ISO 3166-1 country code (e.g. `US`) or an object with `country`, a `latitude` and `longitude` pair, or both. The country localizes results. Coordinates are used only for queries that name no place but depend on where the user is, such as "coffee near me". They do not set a country, so send `country` with them to localize results. Send only the precision your use case needs.|
|» » *oneOf*|body|string|false|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » *oneOf*|body|object|false|The user's country only. Equivalent to the string form.|
|» » country|body|string|true|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » *oneOf*|body|object|false|The user's coordinates, with an optional country.|
|» » country|body|string|false|The two-letter ISO 3166-1 country code of the user, e.g. `US`.|
|» » latitude|body|number|true|The user's latitude in decimal degrees.|
|» » longitude|body|number|true|The user's longitude in decimal degrees.|
|» » *anyOf*|body|null|false|none|
|» outputSchema|body|object|false|A [JSON Schema Draft 7](https://json-schema.org/draft-07) specification for the desired answer structure. When provided, the answer is returned as a structured object matching the schema instead of a plain string.|
|» » type|body|string|false|The root schema type (typically "object").|
|» » properties|body|object|false|An object where each key is a property name and each value is a JSON Schema describing that property (with `type`, `description`, etc).|
|» » » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» » required|body|[string]|false|List of required property names.|
|» » description|body|string|false|A description of the schema.|
|» » additionalProperties|body|boolean|false|Whether to allow properties not listed in `properties`.|
|» » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» userIdentifier|body|string \| null|false|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|exa|
|» model|exa-pro|
|» model|exa-research|
|» model|exa-fast|

> Example responses

> 200 Response

```json
{
  "requestId": "string",
  "answer": "string",
  "citations": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string"
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  }
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 402 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 429 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 503 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AnswerResponse](#schemaanswerresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|The team is out of credits or a spending budget has been exceeded.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|A rate limit for this API key, team, or network was exceeded.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Exa is temporarily over capacity or unavailable. The request was not processed; retry with exponential backoff.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|200|x-exa-queued|string||Whether the request waited in the customer rate-limit queue before being admitted.|
|200|x-exa-queue-ms|string||Total milliseconds the request waited in the customer rate-limit queue.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|402|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|503|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Find similar links

<a id="opIdfindSimilar"></a>

> Code samples

```bash
curl https://api.exa.ai/findSimilar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "startPublishedDate": "1970-01-01T00:00:00Z",
    "endPublishedDate": "1970-01-01T00:00:00Z",
    "numResults": 10,
    "contents": {
      "text": false,
      "highlights": false,
      "summary": {
        "query": "string",
        "schema": {
          "property1": true,
          "property2": true
        }
      },
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "snapshotAsOf": "1970-01-01T00:00:00Z",
      "context": true,
      "livecrawl": "never",
      "crawledBeforeDate": "string",
      "subpages": 0,
      "subpageTarget": "string"
    },
    "url": "string",
    "category": "company",
    "excludeSourceDomain": true,
    "startCrawlDate": "1970-01-01T00:00:00Z",
    "endCrawlDate": "1970-01-01T00:00:00Z",
    "includeText": [
      "string"
    ],
    "excludeText": [
      "string"
    ]
  }'
```

`POST /findSimilar`

<aside class="warning">
This operation is deprecated
</aside>

Find links similar to the provided URL and optionally retrieve their contents. Deprecated: prefer `/search` with a query describing the source.

> Body parameter

```json
{
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "startPublishedDate": "1970-01-01T00:00:00Z",
  "endPublishedDate": "1970-01-01T00:00:00Z",
  "numResults": 10,
  "contents": {
    "text": false,
    "highlights": false,
    "summary": {
      "query": "string",
      "schema": {
        "property1": true,
        "property2": true
      }
    },
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "snapshotAsOf": "1970-01-01T00:00:00Z",
    "context": true,
    "livecrawl": "never",
    "crawledBeforeDate": "string",
    "subpages": 0,
    "subpageTarget": "string"
  },
  "url": "string",
  "category": "company",
  "excludeSourceDomain": true,
  "startCrawlDate": "1970-01-01T00:00:00Z",
  "endCrawlDate": "1970-01-01T00:00:00Z",
  "includeText": [
    "string"
  ],
  "excludeText": [
    "string"
  ]
}
```

<h3 id="find-similar-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindSimilarRequest](#schemafindsimilarrequest)|true|none|
|» includeDomains|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|List of domains or domain paths to include in the search. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, results will only come from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.|
|» » *anyOf*|body|null|false|none|
|» excludeDomains|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|List of domains or domain paths to exclude from search results. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, no results will be returned from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.|
|» » *anyOf*|body|null|false|none|
|» startPublishedDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|Only links with a published date after this will be returned. Must be specified in ISO 8601 format.|
|» » *anyOf*|body|null|false|none|
|» endPublishedDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|Only links with a published date before this will be returned. Must be specified in ISO 8601 format.|
|» » *anyOf*|body|null|false|none|
|» numResults|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.|
|» » *anyOf*|body|null|false|none|
|» contents|body|[ContentsOptions](#schemacontentsoptions) \| null|false|none|
|» » *anyOf*|body|[ContentsOptions](#schemacontentsoptions)|false|Content options for text, highlights, summary, extras, and freshness controls.|
|» » *anyOf*|body|null|false|none|
|» url|body|string|true|The url for which you would like to find similar links.|
|» category|body|string \| null|false|none|
|» » *anyOf*|body|string|false|A data category to focus on. Other strings are accepted and used as category hints. `people` and `company` return higher-quality people profiles and company pages. `publication` returns scholarly publications such as research papers, preprints, and journal articles, with metadata like authors, venue, and citations. With `company` or `people`, domain, URL, published-date, and text filters are ignored.|
|» » *anyOf*|body|null|false|none|
|» excludeSourceDomain|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|If true, results from the same domain as the source url are excluded.|
|» » *anyOf*|body|null|false|none|
|» startCrawlDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|**Deprecated.** Deprecated. Ignored by the API.|
|» » *anyOf*|body|null|false|none|
|» endCrawlDate|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|**Deprecated.** Deprecated. Ignored by the API.|
|» » *anyOf*|body|null|false|none|
|» includeText|body|[string] \| null|false|**Deprecated.** Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» excludeText|body|[string] \| null|false|**Deprecated.** Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|company|
|» » *anyOf*|publication|
|» » *anyOf*|news|
|» » *anyOf*|personal site|
|» » *anyOf*|financial report|
|» » *anyOf*|people|

> Example responses

> 200 Response

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      },
      "score": 0
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "context": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 402 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 429 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 503 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="find-similar-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FindSimilarResponse](#schemafindsimilarresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|The team is out of credits or a spending budget has been exceeded.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|A rate limit for this API key, team, or network was exceeded.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Exa is temporarily over capacity or unavailable. The request was not processed; retry with exponential backoff.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|200|Deprecation|string||Signals that this operation is deprecated.|
|200|x-exa-queued|string||Whether the request waited in the customer rate-limit queue before being admitted.|
|200|x-exa-queue-ms|string||Total milliseconds the request waited in the customer rate-limit queue.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|402|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|503|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-monitors">Monitors</h1>

## List monitors

<a id="opIdlistMonitors"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /monitors`

Lists all monitors for the authenticated team. Supports filtering by status and cursor-based pagination.

<h3 id="list-monitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|none|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|name|query|string|false|none|
|metadata|query|object|false|Filter monitors by metadata key-value pairs (exact match, AND semantics). Use bracket notation: `metadata[key]=value`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|paused|
|status|disabled|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "active",
      "search": {
        "query": "string",
        "numResults": 10,
        "includeDomains": [
          "string"
        ],
        "excludeDomains": [
          "string"
        ],
        "contents": {
          "text": false,
          "highlights": false,
          "summary": true,
          "extras": {
            "links": 0,
            "imageLinks": 0,
            "richImageLinks": 0,
            "richLinks": 0,
            "codeBlocks": 0
          },
          "livecrawl": "never",
          "livecrawlTimeout": 10000,
          "maxAgeHours": -1,
          "filterEmptyResults": true,
          "subpages": 0,
          "subpageTarget": "string",
          "context": true
        }
      },
      "trigger": {
        "type": "interval",
        "period": "string"
      },
      "outputSchema": {
        "type": "text",
        "description": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "webhook": {
        "url": "http://example.com",
        "events": [
          "monitor.created"
        ]
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="list-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of monitors|[ListSearchMonitorsResponse](#schemalistsearchmonitorsresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a monitor

<a id="opIdcreateMonitor"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "search": {
      "query": "string",
      "numResults": 10,
      "includeDomains": [
        "string"
      ],
      "excludeDomains": [
        "string"
      ],
      "contents": {
        "text": false,
        "highlights": false,
        "summary": true,
        "extras": {
          "links": 0,
          "imageLinks": 0,
          "richImageLinks": 0,
          "richLinks": 0,
          "codeBlocks": 0
        },
        "livecrawl": "never",
        "livecrawlTimeout": 10000,
        "maxAgeHours": -1,
        "filterEmptyResults": true,
        "subpages": 0,
        "subpageTarget": "string",
        "context": true
      }
    },
    "trigger": {
      "type": "interval",
      "period": "string"
    },
    "outputSchema": {
      "type": "text",
      "description": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "webhook": {
      "url": "http://example.com",
      "events": [
        "monitor.created"
      ]
    }
  }'
```

`POST /monitors`

Creates a Monitor that runs an Exa search on a schedule and sends new results to your webhook. Each run searches recent content and drops results that match what earlier runs already returned, so your webhook receives only new developments.

The response includes a `webhookSecret` for verifying webhook signatures. It is returned only once, so store it securely.

> Body parameter

```json
{
  "name": "string",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  }
}
```

<h3 id="create-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSearchMonitorParameters](#schemacreatesearchmonitorparameters)|true|none|
|» name|body|string|false|An optional name for the monitor|
|» search|body|[SearchMonitorSearch](#schemasearchmonitorsearch)|true|none|
|» trigger|body|[SearchMonitorTrigger](#schemasearchmonitortrigger)|false|none|
|» outputSchema|body|[SearchMonitorOutputSchema](#schemasearchmonitoroutputschema)|false|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|» metadata|body|object|false|Optional key-value metadata. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|» » **additionalProperties**|body|string|false|none|
|» webhook|body|[SearchMonitorWebhook](#schemasearchmonitorwebhook)|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "webhookSecret": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="create-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created monitor with webhook secret|[CreateSearchMonitorResponse](#schemacreatesearchmonitorresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Batch action on monitors

<a id="opIdbatchMonitors"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "action": "delete",
    "filter": {
      "name": "string",
      "status": "active",
      "metadata": {
        "property1": "string",
        "property2": "string"
      }
    },
    "dry_run": true,
    "limit": 50
  }'
```

`POST /monitors/batch`

Deletes, pauses, or unpauses the monitors that match the filter. Deletion is permanent. `dry_run` defaults to `true`, so a request only previews the affected monitors unless you set it to `false`. Repeat the request until `has_more` is `false` to process all matches.

> Body parameter

```json
{
  "action": "delete",
  "filter": {
    "name": "string",
    "status": "active",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "dry_run": true,
  "limit": 50
}
```

<h3 id="batch-action-on-monitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMonitorsRequest](#schemabatchmonitorsrequest)|true|none|
|» action|body|string|true|The action to perform on matching monitors. `delete` permanently removes them, `pause` sets their status to paused, and `unpause` sets their status to active.|
|» filter|body|object|true|At least one filter field must be provided to prevent accidental bulk operations.|
|» » name|body|string|false|Filter by name (case-insensitive substring match)|
|» » status|body|string|false|Filter by monitor status|
|» » metadata|body|object|false|Filter by metadata key-value pairs (exact match, AND semantics)|
|» » » **additionalProperties**|body|string|false|none|
|» dry_run|body|boolean|false|When `true`, returns the monitors that would be affected without performing the action. Defaults to `true`.|
|» limit|body|integer|false|Maximum number of monitors to process in a single request. Defaults to 50, maximum 500.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|delete|
|» action|pause|
|» action|unpause|
|» » status|active|
|» » status|paused|
|» » status|disabled|

> Example responses

> 200 Response

```json
{
  "action": "delete",
  "affected": 0,
  "ids": [
    "string"
  ],
  "dry_run": true,
  "has_more": true
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="batch-action-on-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch action result|[BatchMonitorsResponse](#schemabatchmonitorsresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a monitor

<a id="opIdgetMonitor"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /monitors/{id}`

Retrieves a single monitor by its ID.

<h3 id="get-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="get-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The monitor|[SearchMonitor](#schemasearchmonitor)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete a monitor

<a id="opIddeleteMonitor"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /monitors/{id}`

Deletes a monitor. This cannot be undone.

<h3 id="delete-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="delete-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The deleted monitor|[SearchMonitor](#schemasearchmonitor)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update a monitor

<a id="opIdupdateMonitor"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "status": "active",
    "search": {
      "query": "string",
      "numResults": 10,
      "includeDomains": [
        "string"
      ],
      "excludeDomains": [
        "string"
      ],
      "contents": {
        "text": false,
        "highlights": false,
        "summary": true,
        "extras": {
          "links": 0,
          "imageLinks": 0,
          "richImageLinks": 0,
          "richLinks": 0,
          "codeBlocks": 0
        },
        "livecrawl": "never",
        "livecrawlTimeout": 10000,
        "maxAgeHours": -1,
        "filterEmptyResults": true,
        "subpages": 0,
        "subpageTarget": "string",
        "context": true
      }
    },
    "trigger": {
      "type": "interval",
      "period": "string"
    },
    "outputSchema": {
      "type": "text",
      "description": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "webhook": {
      "url": "http://example.com",
      "events": [
        "monitor.created"
      ]
    }
  }'
```

`PATCH /monitors/{id}`

Updates an existing monitor. All fields are optional. For `search`, you can send a partial object containing only the fields you want to change. Set `trigger` to `null` to remove the schedule.

> Body parameter

```json
{
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  }
}
```

<h3 id="update-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|
|body|body|[UpdateSearchMonitorParameters](#schemaupdatesearchmonitorparameters)|true|none|
|» name|body|string \| null|false|Update the monitor name|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» status|body|string|false|Update the monitor status (can only set to `active` or `paused`)|
|» search|body|object|false|Partial search params to merge. All fields are optional for updates.|
|» » query|body|string|false|The query string for the search.|
|» » numResults|body|integer|false|Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.|
|» » includeDomains|body|[string]|false|Restrict search results to these domains.|
|» » excludeDomains|body|[string]|false|Exclude these domains from search results.|
|» » contents|body|[SearchMonitorContents](#schemasearchmonitorcontents)|false|Content extraction options applied to each search result. All fields are optional.|
|» trigger|body|object \| null|false|Update the schedule. Set to null to remove the schedule.|
|» » *anyOf*|body|object|false|none|
|» » type|body|string|false|The type of trigger. Currently only `interval` is supported.|
|» » period|body|string|false|A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour.|
|» » *anyOf*|body|null|false|none|
|» outputSchema|body|[SearchMonitorOutputSchema](#schemasearchmonitoroutputschema)|false|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|» metadata|body|object \| null|false|Update metadata. Set to null to remove. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|» » *anyOf*|body|object|false|Caller-provided key-value metadata for your own tracking.|
|» » **additionalProperties**|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» webhook|body|object|false|Partial webhook params to merge. All fields are optional for updates.|
|» » url|body|string(uri)|false|The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.|
|» » events|body|[string]|false|Which events to subscribe to. Defaults to all events if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|paused|
|» » events|monitor.created|
|» » events|monitor.updated|
|» » events|monitor.deleted|
|» » events|monitor.run.created|
|» » events|monitor.run.completed|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="update-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated monitor|[SearchMonitor](#schemasearchmonitor)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Trigger a monitor

<a id="opIdtriggerMonitor"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string/trigger \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /monitors/{id}/trigger`

Triggers a run immediately, regardless of the schedule. Works for monitors with status `active` or `paused`.

<h3 id="trigger-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "triggered": true
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="trigger-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Whether the monitor was triggered|[TriggerSearchMonitorResponse](#schematriggersearchmonitorresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## List Monitors

<a id="opIdmonitors-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/monitors`

Lists all monitors for the Webset.

<h3 id="list-monitors-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|
|websetId|query|string|false|The id of the Webset to list monitors for|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-monitors-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitors|[ListMonitorsResponse](#schemalistmonitorsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a Monitor

<a id="opIdmonitors-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "websetId": "string",
    "cadence": {
      "cron": "string",
      "timezone": "Etc/UTC"
    },
    "behavior": {
      "config": {
        "query": "string",
        "criteria": [
          {
            "description": "string"
          }
        ],
        "entity": {
          "type": "company"
        },
        "count": 0.1,
        "behavior": "override"
      },
      "type": "search"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v0/monitors`

Creates a Monitor that searches for new Items for a Webset on a `cron` schedule in the given `timezone`.

> Body parameter

```json
{
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-monitor-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateMonitorParameters](#schemacreatemonitorparameters)|true|none|
|» websetId|body|string|true|The id of the Webset|
|» cadence|body|[MonitorCadence](#schemamonitorcadence)|true|How often the monitor will run|
|» behavior|body|[MonitorBehavior](#schemamonitorbehavior)|true|Behavior to perform when monitor runs|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "object": "monitor",
  "status": "enabled",
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "lastRun": {
    "id": "string",
    "object": "monitor_run",
    "monitorId": "string",
    "status": "created",
    "completedAt": "1970-01-01T00:00:00Z",
    "failedAt": "1970-01-01T00:00:00Z",
    "failedReason": "string",
    "canceledAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "type": "search"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-monitor-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Monitor created successfully|[Monitor](#schemamonitor)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get Monitor

<a id="opIdmonitors-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/monitors/{id}`

Gets a specific monitor.

<h3 id="get-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Monitor|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "monitor",
  "status": "enabled",
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "lastRun": {
    "id": "string",
    "object": "monitor_run",
    "monitorId": "string",
    "status": "created",
    "completedAt": "1970-01-01T00:00:00Z",
    "failedAt": "1970-01-01T00:00:00Z",
    "failedReason": "string",
    "canceledAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "type": "search"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor details|[Monitor](#schemamonitor)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete Monitor

<a id="opIdmonitors-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/monitors/{id}`

Deletes a monitor.

<h3 id="delete-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Monitor|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "monitor",
  "status": "enabled",
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "lastRun": {
    "id": "string",
    "object": "monitor_run",
    "monitorId": "string",
    "status": "created",
    "completedAt": "1970-01-01T00:00:00Z",
    "failedAt": "1970-01-01T00:00:00Z",
    "failedReason": "string",
    "canceledAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "type": "search"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor deleted successfully|[Monitor](#schemamonitor)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update Monitor

<a id="opIdmonitors-update"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "status": "enabled",
    "cadence": {
      "cron": "string",
      "timezone": "Etc/UTC"
    },
    "behavior": {
      "config": {
        "query": "string",
        "criteria": [
          {
            "description": "string"
          }
        ],
        "entity": {
          "type": "company"
        },
        "count": 0.1,
        "behavior": "override"
      },
      "type": "search"
    }
  }'
```

`PATCH /v0/monitors/{id}`

Updates a monitor configuration.

> Body parameter

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "status": "enabled",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  }
}
```

<h3 id="update-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Monitor|
|body|body|[UpdateMonitor](#schemaupdatemonitor)|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» status|body|string|false|The status of the monitor.|
|» cadence|body|[MonitorCadence](#schemamonitorcadence)|false|none|
|» behavior|body|[MonitorBehavior](#schemamonitorbehavior)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "monitor",
  "status": "enabled",
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "lastRun": {
    "id": "string",
    "object": "monitor_run",
    "monitorId": "string",
    "status": "created",
    "completedAt": "1970-01-01T00:00:00Z",
    "failedAt": "1970-01-01T00:00:00Z",
    "failedReason": "string",
    "canceledAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "type": "search"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor updated successfully|[Monitor](#schemamonitor)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-runs">Runs</h1>

## List runs

<a id="opIdlistRuns"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string/runs \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /monitors/{id}/runs`

Lists all runs for a monitor with cursor-based pagination. Runs are returned in reverse chronological order.

<h3 id="list-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "monitorId": "string",
      "status": "pending",
      "output": {
        "results": [
          {
            "property1": true,
            "property2": true
          }
        ],
        "content": true,
        "grounding": [
          {
            "field": "string",
            "citations": [
              {
                "url": "http://example.com",
                "title": "string"
              }
            ],
            "confidence": "low"
          }
        ]
      },
      "failReason": "api_key_invalid",
      "startedAt": "1970-01-01T00:00:00Z",
      "completedAt": "1970-01-01T00:00:00Z",
      "failedAt": "1970-01-01T00:00:00Z",
      "cancelledAt": "1970-01-01T00:00:00Z",
      "durationMs": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="list-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of runs|[ListSearchMonitorRunsResponse](#schemalistsearchmonitorrunsresponse)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a run

<a id="opIdgetRun"></a>

> Code samples

```bash
curl https://api.exa.ai/monitors/string/runs/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /monitors/{id}/runs/{runId}`

Retrieves a single run by its ID, including the full output if the run is completed.

<h3 id="get-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The monitor ID|
|runId|path|string|true|The run ID|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "monitorId": "string",
  "status": "pending",
  "output": {
    "results": [
      {
        "property1": true,
        "property2": true
      }
    ],
    "content": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "failReason": "api_key_invalid",
  "startedAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "failedAt": "1970-01-01T00:00:00Z",
  "cancelledAt": "1970-01-01T00:00:00Z",
  "durationMs": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="get-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The run|[SearchMonitorRun](#schemasearchmonitorrun)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-agent">Agent</h1>

## List runs

<a id="opIdlistAgentRuns"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /agent/runs`

List Agent runs for your team, ordered from newest to oldest.

<h3 id="list-runs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|cursor|query|[AgentRunId](#schemaagentrunid)|false|none|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "object": "agent_run",
      "status": "queued",
      "stopReason": "schema_satisfied",
      "createdAt": "1970-01-01T00:00:00Z",
      "completedAt": "1970-01-01T00:00:00Z",
      "request": {
        "query": "string",
        "systemPrompt": "string",
        "effort": "auto",
        "input": {
          "data": [
            {
              "property1": true,
              "property2": true
            }
          ],
          "exclusion": [
            {
              "property1": true,
              "property2": true
            }
          ]
        },
        "outputSchema": {
          "property1": true,
          "property2": true
        },
        "previousRunId": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "dataSources": [
          {
            "provider": "string"
          }
        ],
        "budget": {
          "maxCostDollars": 0,
          "maxDurationSeconds": 0
        },
        "property1": true,
        "property2": true
      },
      "output": {
        "text": "string",
        "structured": true,
        "grounding": [
          {
            "field": "string",
            "citations": [
              {
                "url": "http://example.com",
                "title": "string"
              }
            ],
            "confidence": "low"
          }
        ]
      },
      "usage": {
        "agentComputeUnits": 0,
        "searches": 0,
        "emails": 0,
        "phoneNumbers": 0,
        "dataSources": {
          "property1": 0,
          "property2": 0
        }
      },
      "costDollars": {
        "total": 0,
        "agentCompute": 0,
        "search": 0,
        "emails": 0,
        "phoneNumbers": 0,
        "dataSources": {
          "property1": 0,
          "property2": 0
        }
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="list-runs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated Agent runs|[AgentRunList](#schemaagentrunlist)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a run

<a id="opIdcreateAgentRun"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
  }'
```

`POST /agent/runs`

Create an asynchronous Agent run. By default, the API returns the run object immediately. Set `Accept: text/event-stream` to stream run lifecycle events until the run reaches a terminal status.

> Body parameter

```json
{
  "query": "string",
  "systemPrompt": "string",
  "effort": "auto",
  "input": {
    "data": [
      {
        "property1": true,
        "property2": true
      }
    ],
    "exclusion": [
      {
        "property1": true,
        "property2": true
      }
    ]
  },
  "outputSchema": {
    "property1": true,
    "property2": true
  },
  "previousRunId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "dataSources": [
    {
      "provider": "string"
    }
  ],
  "budget": {
    "maxCostDollars": 0,
    "maxDurationSeconds": 0
  },
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
}
```

<h3 id="create-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|false|Set to `text/event-stream` to receive server-sent events.|
|Exa-Beta|header|string|false|Comma-separated beta feature tokens for opting into experimental features.|
|body|body|[CreateAgentRunRequest](#schemacreateagentrunrequest)|true|none|
|» query|body|string|true|Natural-language question or instructions for the request.|
|» systemPrompt|body|string|false|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|» effort|body|[AgentEffort](#schemaagenteffort)|false|Cost and reasoning effort preference for the run. `auto` lets Exa choose the appropriate effort. `ultra` is the highest-effort tier for work where completeness and thoroughness matter more than latency or cost, including large list building, deep multi-source research, and criteria that are hard to verify.|
|» input|body|object|false|Records to process and records or entities to exclude from the answer.|
|» » data|body|[object]|false|Records the agent should process or enrich.|
|» » » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» » exclusion|body|[object]|false|Records or entities the agent should avoid returning.|
|» » » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» outputSchema|body|object \| null|false|none|
|» » *anyOf*|body|object|false|JSON Schema for validated structured output in `output.structured`. Fields unsupported by evidence may be returned as `null`. Supports draft-07, 2019-09, and 2020-12 via `$schema`.|
|» » **additionalProperties**|body|[JsonValue](#schemajsonvalue)|false|Any JSON value.|
|» » *anyOf*|body|null|false|none|
|» previousRunId|body|[AgentRunId](#schemaagentrunid)|false|Completed run ID to continue from. Must belong to the same team.|
|» metadata|body|object|false|Caller-provided metadata stored with the run.|
|» » **additionalProperties**|body|string|false|none|
|» dataSources|body|[[AgentDataSource](#schemaagentdatasource)]|false|Exa Connect data providers to enable for the run. Each entry enables all of that provider's tools.|
|» budget|body|[AgentBudget](#schemaagentbudget)|false|Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.|
|» userIdentifier|body|string \| null|false|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/json|
|Accept|text/event-stream|
|» effort|minimal|
|» effort|low|
|» effort|medium|
|» effort|high|
|» effort|xhigh|
|» effort|auto|
|» effort|ultra|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "agent_run",
  "status": "queued",
  "stopReason": "schema_satisfied",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "request": {
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "property1": true,
    "property2": true
  },
  "output": {
    "text": "string",
    "structured": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "usage": {
    "agentComputeUnits": 0,
    "searches": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  },
  "costDollars": {
    "total": 0,
    "agentCompute": 0,
    "search": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="create-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run created|[AgentRun](#schemaagentrun)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a run

<a id="opIdgetAgentRun"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /agent/runs/{id}`

Retrieve a single Agent run by ID.

<h3 id="get-a-run-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AgentRunId](#schemaagentrunid)|true|Agent run ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "agent_run",
  "status": "queued",
  "stopReason": "schema_satisfied",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "request": {
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "property1": true,
    "property2": true
  },
  "output": {
    "text": "string",
    "structured": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "usage": {
    "agentComputeUnits": 0,
    "searches": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  },
  "costDollars": {
    "total": 0,
    "agentCompute": 0,
    "search": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="get-a-run-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run|[AgentRun](#schemaagentrun)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Run not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete a run

<a id="opIddeleteAgentRun"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /agent/runs/{id}`

Delete a stored Agent run.

<h3 id="delete-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AgentRunId](#schemaagentrunid)|true|Agent run ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "agent_run.deleted",
  "deleted": true
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="delete-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run deleted|[DeleteAgentRunResponse](#schemadeleteagentrunresponse)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Run not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Cancel a run

<a id="opIdcancelAgentRun"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /agent/runs/{id}/cancel`

Cancel a queued or running Agent run immediately without returning any results. You are billed for usage accrued before cancellation. If the run has already reached a terminal status, the API returns the existing run.

<h3 id="cancel-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AgentRunId](#schemaagentrunid)|true|Agent run ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "agent_run",
  "status": "queued",
  "stopReason": "schema_satisfied",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "request": {
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "property1": true,
    "property2": true
  },
  "output": {
    "text": "string",
    "structured": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "usage": {
    "agentComputeUnits": 0,
    "searches": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  },
  "costDollars": {
    "total": 0,
    "agentCompute": 0,
    "search": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="cancel-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run|[AgentRun](#schemaagentrun)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Run not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Stop a run

<a id="opIdstopAgentRun"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /agent/runs/{id}/stop`

Complete a running Agent run early, returning the results gathered so far. You are billed for usage accrued before the stop. Currently supported only for `ultra` effort runs. If the run has already reached a terminal status, the API returns the existing run.

<h3 id="stop-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AgentRunId](#schemaagentrunid)|true|Agent run ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "agent_run",
  "status": "queued",
  "stopReason": "schema_satisfied",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "request": {
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "property1": true,
    "property2": true
  },
  "output": {
    "text": "string",
    "structured": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "usage": {
    "agentComputeUnits": 0,
    "searches": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  },
  "costDollars": {
    "total": 0,
    "agentCompute": 0,
    "search": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="stop-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run|[AgentRun](#schemaagentrun)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Run not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## List run events

<a id="opIdlistAgentRunEvents"></a>

> Code samples

```bash
curl https://api.exa.ai/agent/runs/string/events \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /agent/runs/{id}/events`

List stored events for an Agent run. Set `Accept: text/event-stream` to replay stored events as server-sent events. Use `cursor` for JSON pagination or `Last-Event-ID` for SSE replay.

<h3 id="list-run-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AgentRunId](#schemaagentrunid)|true|Agent run ID.|
|limit|query|integer|false|none|
|cursor|query|string|false|none|
|Accept|header|string|false|Set to `text/event-stream` to receive server-sent events.|
|Last-Event-ID|header|string|false|For SSE replay, return only events after this event ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/json|
|Accept|text/event-stream|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "event": "agent_run.created",
      "data": true,
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 429 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

<h3 id="list-run-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent run events|[AgentRunEventList](#schemaagentruneventlist)|
|400|Bad Request|Invalid request.|[AgentErrorResponse](#schemaagenterrorresponse)|
|401|Unauthorized|Team context or authentication was not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Run not found.|[AgentErrorResponse](#schemaagenterrorresponse)|
|429|Too Many Requests|Agent run concurrency limit reached.|[AgentErrorResponse](#schemaagenterrorresponse)|
|500|Internal Server Error|Server error or run timeout.|[AgentErrorResponse](#schemaagenterrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|429|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-batches">Batches</h1>

## List batches

<a id="opIdlistBatches"></a>

> Code samples

```bash
curl https://api.exa.ai/batches \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'Exa-Beta: batches-2026-06-06'
```

`GET /batches`

List batches for your team, ordered from newest to oldest.

<h3 id="list-batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|status|query|string|false|none|
|Exa-Beta|header|string|true|Required beta token for the Batch API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Exa-Beta|batches-2026-06-06|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "object": "batch",
      "status": "in_progress",
      "requestCounts": {
        "total": 0,
        "completed": 0,
        "failed": 0
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "endedAt": "1970-01-01T00:00:00Z",
      "resultsUrl": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="list-batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchList](#schemabatchlist)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a batch

<a id="opIdcreateBatch"></a>

> Code samples

```bash
curl https://api.exa.ai/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'Exa-Beta: batches-2026-06-06' \
  -d '{
    "requests": [
      {
        "customId": "string",
        "method": "POST",
        "url": "/search",
        "body": {
          "property1": true,
          "property2": true
        }
      }
    ],
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /batches`

Create a batch of requests to run asynchronously. Each request is dispatched to its target route and results are made available for download when the batch completes.

> Body parameter

```json
{
  "requests": [
    {
      "customId": "string",
      "method": "POST",
      "url": "/search",
      "body": {
        "property1": true,
        "property2": true
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Exa-Beta|header|string|true|Required beta token for the Batch API.|
|body|body|[CreateBatchRequest](#schemacreatebatchrequest)|true|none|
|» requests|body|[[BatchRequestItem](#schemabatchrequestitem)]|true|The requests to enqueue. Each `customId` must be unique within the batch.|
|» metadata|body|object|false|Caller-provided metadata stored with the batch.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Exa-Beta|batches-2026-06-06|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "status": "in_progress",
  "requestCounts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "endedAt": "1970-01-01T00:00:00Z",
  "resultsUrl": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="create-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Batch](#schemabatch)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a batch

<a id="opIdgetBatch"></a>

> Code samples

```bash
curl https://api.exa.ai/batches/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'Exa-Beta: batches-2026-06-06'
```

`GET /batches/{id}`

Retrieve a single batch by ID.

<h3 id="get-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Batch ID.|
|Exa-Beta|header|string|true|Required beta token for the Batch API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Exa-Beta|batches-2026-06-06|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "status": "in_progress",
  "requestCounts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "endedAt": "1970-01-01T00:00:00Z",
  "resultsUrl": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="get-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Batch](#schemabatch)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete a batch

<a id="opIddeleteBatch"></a>

> Code samples

```bash
curl https://api.exa.ai/batches/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'Exa-Beta: batches-2026-06-06'
```

`DELETE /batches/{id}`

Soft-delete a batch in a terminal status.

<h3 id="delete-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Batch ID.|
|Exa-Beta|header|string|true|Required beta token for the Batch API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Exa-Beta|batches-2026-06-06|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch.deleted",
  "deleted": true
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 409 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="delete-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeletedBatch](#schemadeletedbatch)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|The request conflicts with the current state of the resource.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|409|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Cancel a batch

<a id="opIdcancelBatch"></a>

> Code samples

```bash
curl https://api.exa.ai/batches/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'Exa-Beta: batches-2026-06-06'
```

`POST /batches/{id}/cancel`

Request cancellation of a batch. The batch stops scheduling new requests and drains in-flight work before settling to `cancelled`. Cancelling a batch that is already `cancelling` or `cancelled` is idempotent and returns the batch unchanged. A batch that has already reached a terminal status (`completed` or `expired`) cannot be cancelled and the request fails with a 409.

<h3 id="cancel-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Batch ID.|
|Exa-Beta|header|string|true|Required beta token for the Batch API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Exa-Beta|batches-2026-06-06|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "status": "in_progress",
  "requestCounts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "endedAt": "1970-01-01T00:00:00Z",
  "resultsUrl": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 401 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 403 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 404 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 409 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

> 500 Response

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

<h3 id="cancel-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Batch](#schemabatch)|
|400|Bad Request|The request body or query parameters failed validation.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|The API key is missing or invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource does not exist.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|The request conflicts with the current state of the resource.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|An unexpected error occurred while processing the request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|400|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|401|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|403|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|404|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|409|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|
|500|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-teams">Teams</h1>

## Get team info

<a id="opIdteams-me-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/teams/me \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/teams/me`

Returns information about the authenticated team, including current concurrency usage and limits.

> Example responses

> 200 Response

```json
{
  "object": "team",
  "id": "string",
  "name": "string",
  "concurrency": {
    "active": 0,
    "queued": 0
  },
  "limits": {
    "maxConcurrent": 0,
    "maxQueued": 0
  }
}
```

<h3 id="get-team-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Team information retrieved successfully|[WebsetsTeamInfo](#schemawebsetsteaminfo)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-websets">Websets</h1>

## List all Websets

<a id="opIdwebsets-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets`

Returns a list of Websets.

You can paginate through the results using the `cursor` parameter.

You can filter results using the `search` parameter to find Websets by ID, external ID, or title.

<h3 id="list-all-websets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|number|false|The number of Websets to return|
|search|query|string|false|Search term to filter Websets by ID, external ID, or title|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "webset",
      "status": "idle",
      "externalId": "string",
      "title": "string",
      "searches": [
        {
          "id": "string",
          "object": "webset_search",
          "websetId": "string",
          "status": "created",
          "query": "string",
          "entity": {
            "type": "company"
          },
          "criteria": [
            {
              "description": "string",
              "successRate": 0
            }
          ],
          "count": 1,
          "maxPeoplePerCompany": 1,
          "behavior": "override",
          "exclude": [
            {
              "source": "import",
              "id": "string"
            }
          ],
          "scope": [
            {
              "source": "import",
              "id": "string",
              "relationship": {
                "definition": "string",
                "limit": 1
              }
            }
          ],
          "progress": {
            "found": 0,
            "analyzed": 0,
            "completion": 0,
            "timeLeft": 0
          },
          "recall": {
            "expected": {
              "total": 0,
              "confidence": "high",
              "bounds": {
                "min": 0,
                "max": 0
              }
            },
            "reasoning": "string"
          },
          "metadata": {},
          "canceledAt": "1970-01-01T00:00:00Z",
          "canceledReason": "webset_deleted",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "imports": [
        {
          "id": "string",
          "object": "import",
          "status": "pending",
          "format": "csv",
          "entity": {
            "type": "company"
          },
          "title": "string",
          "count": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "failedReason": "invalid_format",
          "failedAt": "1970-01-01T00:00:00Z",
          "failedMessage": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "enrichments": [
        {
          "id": "string",
          "object": "webset_enrichment",
          "status": "pending",
          "websetId": "string",
          "title": "string",
          "description": "string",
          "format": "text",
          "options": [
            {
              "label": "string"
            }
          ],
          "instructions": "string",
          "metadata": {},
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "monitors": [
        {
          "id": "string",
          "object": "monitor",
          "status": "enabled",
          "websetId": "string",
          "cadence": {
            "cron": "string",
            "timezone": "Etc/UTC"
          },
          "behavior": {
            "config": {
              "query": "string",
              "criteria": [
                {
                  "description": "string"
                }
              ],
              "entity": {
                "type": "company"
              },
              "count": 0.1,
              "behavior": "override"
            },
            "type": "search"
          },
          "lastRun": {
            "id": "string",
            "object": "monitor_run",
            "monitorId": "string",
            "status": "created",
            "completedAt": "1970-01-01T00:00:00Z",
            "failedAt": "1970-01-01T00:00:00Z",
            "failedReason": "string",
            "canceledAt": "1970-01-01T00:00:00Z",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z",
            "type": "search"
          },
          "nextRunAt": "1970-01-01T00:00:00Z",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "excludes": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "metadata": {},
      "dashboardUrl": "http://example.com",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-all-websets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Websets|[ListWebsetsResponse](#schemalistwebsetsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a Webset

<a id="opIdwebsets-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "search": {
      "query": "Marketing agencies based in the US, that focus on consumer products.",
      "count": 10
    }
  }'
```

`POST /v0/websets`

Creates a new Webset with optional search, import, and enrichment configurations. The Webset will automatically begin processing once created.

You can specify an `externalId` to reference the Webset with your own identifiers for easier integration.

> Body parameter

```json
{
  "search": {
    "query": "Marketing agencies based in the US, that focus on consumer products.",
    "count": 10
  }
}
```

<h3 id="create-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebsetParameters](#schemacreatewebsetparameters)|true|none|
|» title|body|string \| null|false|Optional name that appears anywhere the Webset is displayed. Leave empty to have Exa generate one automatically.|
|» search|body|object|false|Create initial search for the Webset.|
|» » query|body|string|true|Natural language search query describing what you are looking for.<br><br>Be specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.<br><br>Any URLs provided will be crawled and used as additional context for the search.|
|» » count|body|number|false|Number of Items the Webset will attempt to find.<br><br>The actual number of Items found may be less than this number depending on the search complexity.|
|» » entity|body|[Entity](#schemaentity)|false|Entity the Webset returns results for. Detected from the query when omitted.|
|» » criteria|body|[[CreateCriterionParameters](#schemacreatecriterionparameters)]|false|Criteria every Item is evaluated against. Generated from the query when omitted.|
|» » maxPeoplePerCompany|body|integer|false|Optional soft cap for people searches. When set, the search will try to include at most this many matching people from the same current employer company.|
|» » recall|body|boolean|false|Whether to estimate how many relevant results exist for this search. The estimate is returned in the search's `recall` field.|
|» » exclude|body|[object]|false|Imports or Websets whose items are left out of this search's results.|
|» » » source|body|string|true|none|
|» » » id|body|string|true|The ID of the source to exclude.|
|» » scope|body|[object]|false|Limit the search to specific sources (existing imports or websets). Any results found within these sources matching the search criteria will be included in the Webset.|
|» » » source|body|string|true|none|
|» » » id|body|string|true|The ID of the source to search.|
|» » » relationship|body|object|false|none|
|» » » » definition|body|string|true|What the relationship of the entities you hope to find is relative to the entities contained in the provided source.|
|» » » » limit|body|number|true|none|
|» import|body|[object]|false|Import data from existing Websets and Imports into this Webset.|
|» » source|body|string|true|none|
|» » id|body|string|true|The ID of the source to import.|
|» » evaluate|body|boolean|false|When true, items from this import will be evaluated against the search criteria. Requires a search to be provided.|
|» enrichments|body|[[CreateEnrichmentParameters](#schemacreateenrichmentparameters)]|false|Enrichments that extract additional data from each Item added to the Webset.|
|» exclude|body|[object]|false|Global exclusion sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.|
|» » source|body|string|true|none|
|» » id|body|string|true|The ID of the source to exclude.|
|» externalId|body|string|false|The external identifier for the webset.<br><br>You can use this to reference the Webset by your own internal identifiers.|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » source|import|
|» » » source|webset|
|» » » source|import|
|» » » source|webset|
|» » source|import|
|» » source|webset|
|» » source|import|
|» » source|webset|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webset created|[Webset](#schemawebset)|
|409|Conflict|Webset with this externalId already exists|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Request-Id|string||Unique identifier for the request.|
|409|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a Webset

<a id="opIdwebsets-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets/{id}`

Returns a Webset by `id` or `externalId`, including its status, searches, imports, enrichments, and monitors.

Pass `expand=items` to include up to the first 100 items in the response.

<h3 id="get-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id or externalId of the Webset.|
|expand|query|[string]|false|Expand the response with the specified resources|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|items|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "items": [
    {
      "id": "string",
      "object": "webset_item",
      "source": "search",
      "sourceId": "string",
      "sourceEntityId": "string",
      "scopeId": "string",
      "websetId": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "evaluations": [
        {
          "criterion": "string",
          "reasoning": "string",
          "satisfied": "yes",
          "references": []
        }
      ],
      "enrichments": [
        {
          "object": "enrichment_result",
          "status": "pending",
          "format": "text",
          "result": [
            "string"
          ],
          "reasoning": "string",
          "references": [
            {
              "title": "string",
              "snippet": "string",
              "url": "http://example.com"
            }
          ],
          "enrichmentId": "string"
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset|[GetWebsetResponse](#schemagetwebsetresponse)|
|404|Not Found|Webset not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update a Webset

<a id="opIdwebsets-update"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "title": "Leading climate tech startups"
  }'
```

`POST /v0/websets/{id}`

Updates the `title` or `metadata` of a Webset. Searches, imports, and enrichments are managed through their own endpoints.

> Body parameter

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "title": "Leading climate tech startups"
}
```

<h3 id="update-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id or externalId of the Webset|
|body|body|[UpdateWebsetRequest](#schemaupdatewebsetrequest)|true|none|
|» metadata|body|object \| null|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|
|» title|body|string|false|Optional name that appears anywhere the Webset is displayed.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset updated|[Webset](#schemawebset)|
|404|Not Found|Webset not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete a Webset

<a id="opIdwebsets-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/websets/{id}`

Deletes a Webset.

Once deleted, the Webset and all its Items will no longer be available.

<h3 id="delete-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id or externalId of the Webset|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset deleted|[Webset](#schemawebset)|
|404|Not Found|Webset not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Cancel a running Webset

<a id="opIdwebsets-cancel"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /v0/websets/{id}/cancel`

Cancels all operations being performed on a Webset.

Any enrichment or search will be stopped and the Webset will be marked as `idle`.

<h3 id="cancel-a-running-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id or externalId of the Webset|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="cancel-a-running-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset canceled|[Webset](#schemawebset)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-searches">Searches</h1>

## Create a Search

<a id="opIdwebsets-searches-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/searches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "count": 1,
    "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
    "entity": {
      "type": "company"
    },
    "criteria": [
      {
        "description": "string"
      }
    ],
    "maxPeoplePerCompany": 1,
    "exclude": [
      {
        "source": "import",
        "id": "string"
      }
    ],
    "scope": [
      {
        "source": "import",
        "id": "string",
        "relationship": {
          "definition": "string",
          "limit": 1
        }
      }
    ],
    "recall": true,
    "behavior": "override",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v0/websets/{webset}/searches`

Creates a new Search for the Webset.

The default behavior is to reuse the previous Search results and evaluate them against the new criteria.

> Body parameter

```json
{
  "count": 1,
  "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string"
    }
  ],
  "maxPeoplePerCompany": 1,
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "recall": true,
  "behavior": "override",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id of the Webset|
|body|body|[CreateWebsetSearchParameters](#schemacreatewebsetsearchparameters)|true|none|
|» count|body|number|true|Number of Items the Search will attempt to find.<br><br>The actual number of Items found may be less than this number depending on the query complexity.|
|» query|body|string|true|Natural language search query describing what you are looking for.<br><br>Be specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.<br><br>Any URLs provided will be crawled and used as additional context for the search.|
|» entity|body|[Entity](#schemaentity)|false|Entity the search returns results for. Detected from the query when omitted.|
|» criteria|body|[[CreateCriterionParameters](#schemacreatecriterionparameters)]|false|Criteria every Item is evaluated against. Generated from the query when omitted.|
|» maxPeoplePerCompany|body|integer|false|Optional soft cap for people searches. When set, the search will try to include at most this many matching people from the same current employer company.|
|» exclude|body|[object]|false|Imports or Websets whose items are left out of this search's results.|
|» » source|body|string|true|none|
|» » id|body|string|true|The ID of the source to exclude.|
|» scope|body|[object]|false|Limit the search to specific sources (existing imports). Any results found within these sources matching the search criteria will be included in the Webset.|
|» » source|body|string|true|none|
|» » id|body|string|true|The ID of the source to search.|
|» » relationship|body|object|false|none|
|» » » definition|body|string|true|What the relationship of the entities you hope to find is relative to the entities contained in the provided source.|
|» » » limit|body|number|true|none|
|» recall|body|boolean|false|Whether to estimate how many relevant results exist for this search. The estimate is returned in the search's `recall` field.|
|» behavior|body|[WebsetSearchBehavior](#schemawebsetsearchbehavior)|false|How this search interacts with existing items in the Webset:<br><br>- **override**: Replace existing items and evaluate all items against new criteria<br>- **append**: Add new items to existing ones, keeping items that match the new criteria|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » source|import|
|» » source|webset|
|» » source|import|
|» » source|webset|
|» behavior|override|
|» behavior|append|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_search",
  "websetId": "string",
  "status": "created",
  "query": "string",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string",
      "successRate": 0
    }
  ],
  "count": 1,
  "maxPeoplePerCompany": 1,
  "behavior": "override",
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "progress": {
    "found": 0,
    "analyzed": 0,
    "completion": 0,
    "timeLeft": 0
  },
  "recall": {
    "expected": {
      "total": 0,
      "confidence": "high",
      "bounds": {
        "min": 0,
        "max": 0
      }
    },
    "reasoning": "string"
  },
  "metadata": {},
  "canceledAt": "1970-01-01T00:00:00Z",
  "canceledReason": "webset_deleted",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset Search created|[WebsetSearch](#schemawebsetsearch)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a Search

<a id="opIdwebsets-searches-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/searches/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets/{webset}/searches/{id}`

Gets a Search by id

<h3 id="get-a-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id of the Webset|
|id|path|string|true|The id of the Search|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_search",
  "websetId": "string",
  "status": "created",
  "query": "string",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string",
      "successRate": 0
    }
  ],
  "count": 1,
  "maxPeoplePerCompany": 1,
  "behavior": "override",
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "progress": {
    "found": 0,
    "analyzed": 0,
    "completion": 0,
    "timeLeft": 0
  },
  "recall": {
    "expected": {
      "total": 0,
      "confidence": "high",
      "bounds": {
        "min": 0,
        "max": 0
      }
    },
    "reasoning": "string"
  },
  "metadata": {},
  "canceledAt": "1970-01-01T00:00:00Z",
  "canceledReason": "webset_deleted",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search retrieved|[WebsetSearch](#schemawebsetsearch)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Cancel a running Search

<a id="opIdwebsets-searches-cancel"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/searches/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /v0/websets/{webset}/searches/{id}/cancel`

Cancels a currently running Search.

You can cancel all searches at once by using the `websets/:webset/cancel` endpoint.

<h3 id="cancel-a-running-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id of the Webset|
|id|path|string|true|The id of the Search|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_search",
  "websetId": "string",
  "status": "created",
  "query": "string",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string",
      "successRate": 0
    }
  ],
  "count": 1,
  "maxPeoplePerCompany": 1,
  "behavior": "override",
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "progress": {
    "found": 0,
    "analyzed": 0,
    "completion": 0,
    "timeLeft": 0
  },
  "recall": {
    "expected": {
      "total": 0,
      "confidence": "high",
      "bounds": {
        "min": 0,
        "max": 0
      }
    },
    "reasoning": "string"
  },
  "metadata": {},
  "canceledAt": "1970-01-01T00:00:00Z",
  "canceledReason": "webset_deleted",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="cancel-a-running-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search canceled|[WebsetSearch](#schemawebsetsearch)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-enrichments">Enrichments</h1>

## Create an Enrichment

<a id="opIdwebsets-enrichments-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/enrichments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "description": "string",
    "format": "text",
    "options": [
      {
        "label": "string"
      }
    ],
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v0/websets/{webset}/enrichments`

Create an Enrichment for a Webset.

> Body parameter

```json
{
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-an-enrichment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|body|body|[CreateEnrichmentParameters](#schemacreateenrichmentparameters)|true|none|
|» description|body|string|true|Provide a description of the enrichment task you want to perform to each Webset Item.|
|» format|body|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|false|Format of the enrichment response.<br><br>We automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.|
|» options|body|[object]|false|When the format is options, the different options for the enrichment agent to choose from.|
|» » label|body|string|true|The label of the option|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|text|
|» format|date|
|» format|number|
|» format|options|
|» format|email|
|» format|phone|
|» format|url|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_enrichment",
  "status": "pending",
  "websetId": "string",
  "title": "string",
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "instructions": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-an-enrichment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enrichment created|[WebsetEnrichment](#schemawebsetenrichment)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get an Enrichment

<a id="opIdwebsets-enrichments-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/enrichments/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets/{webset}/enrichments/{id}`

Returns an Enrichment configured on a Webset, including its status, description, format, and options.

<h3 id="get-an-enrichment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|id|path|string|true|The id of the Enrichment|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_enrichment",
  "status": "pending",
  "websetId": "string",
  "title": "string",
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "instructions": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-an-enrichment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enrichment|[WebsetEnrichment](#schemawebsetenrichment)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete an Enrichment

<a id="opIdwebsets-enrichments-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/enrichments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/websets/{webset}/enrichments/{id}`

When deleting an Enrichment, any running enrichments will be canceled and all existing `enrichment_result` generated by this Enrichment will no longer be available.

<h3 id="delete-an-enrichment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|id|path|string|true|The id of the Enrichment|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_enrichment",
  "status": "pending",
  "websetId": "string",
  "title": "string",
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "instructions": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-an-enrichment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enrichment deleted|[WebsetEnrichment](#schemawebsetenrichment)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update an Enrichment

<a id="opIdwebsets-enrichments-update"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/enrichments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "description": "string",
    "format": "text",
    "options": [
      {
        "label": "string"
      }
    ],
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v0/websets/{webset}/enrichments/{id}`

Update an Enrichment configuration for a Webset.

> Body parameter

```json
{
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-an-enrichment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|none|
|id|path|string|true|none|
|body|body|[UpdateEnrichmentParameters](#schemaupdateenrichmentparameters)|true|none|
|» description|body|string|false|Provide a description of the enrichment task you want to perform to each Webset Item.|
|» format|body|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|false|Format of the enrichment response.<br><br>We automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.|
|» options|body|[object]|false|When the format is options, the different options for the enrichment agent to choose from.|
|» » label|body|string|true|The label of the option|
|» metadata|body|object \| null|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|text|
|» format|date|
|» format|number|
|» format|options|
|» format|email|
|» format|phone|
|» format|url|

<h3 id="update-an-enrichment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Cancel a running Enrichment

<a id="opIdwebsets-enrichments-cancel"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/enrichments/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /v0/websets/{webset}/enrichments/{id}/cancel`

All running enrichments will be canceled. You can not resume an Enrichment after it has been canceled.

<h3 id="cancel-a-running-enrichment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|id|path|string|true|The id of the Enrichment|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_enrichment",
  "status": "pending",
  "websetId": "string",
  "title": "string",
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "instructions": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="cancel-a-running-enrichment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enrichment cancelled|[WebsetEnrichment](#schemawebsetenrichment)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-items">Items</h1>

## Get an Item

<a id="opIdwebsets-items-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/items/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets/{webset}/items/{id}`

Returns a Webset Item.

<h3 id="get-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|id|path|string|true|The id of the Webset item|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_item",
  "source": "search",
  "sourceId": "string",
  "sourceEntityId": "string",
  "scopeId": "string",
  "websetId": "string",
  "properties": {
    "url": "http://example.com",
    "description": "string",
    "person": {
      "name": "string",
      "location": "string",
      "position": "string",
      "company": {
        "name": "string",
        "location": "string"
      },
      "pictureUrl": "http://example.com",
      "workHistory": [
        {
          "title": "string",
          "location": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "company": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ],
      "educationHistory": [
        {
          "degree": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "institution": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ]
    },
    "type": "person"
  },
  "evaluations": [
    {
      "criterion": "string",
      "reasoning": "string",
      "satisfied": "yes",
      "references": []
    }
  ],
  "enrichments": [
    {
      "object": "enrichment_result",
      "status": "pending",
      "format": "text",
      "result": [
        "string"
      ],
      "reasoning": "string",
      "references": [
        {
          "title": "string",
          "snippet": "string",
          "url": "http://example.com"
        }
      ],
      "enrichmentId": "string"
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset Item|[WebsetItem](#schemawebsetitem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete an Item

<a id="opIdwebsets-items-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/websets/{webset}/items/{id}`

Deletes an Item from the Webset.

This will cancel any enrichment process for it.

<h3 id="delete-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|id|path|string|true|The id of the Webset item|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webset_item",
  "source": "search",
  "sourceId": "string",
  "sourceEntityId": "string",
  "scopeId": "string",
  "websetId": "string",
  "properties": {
    "url": "http://example.com",
    "description": "string",
    "person": {
      "name": "string",
      "location": "string",
      "position": "string",
      "company": {
        "name": "string",
        "location": "string"
      },
      "pictureUrl": "http://example.com",
      "workHistory": [
        {
          "title": "string",
          "location": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "company": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ],
      "educationHistory": [
        {
          "degree": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "institution": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ]
    },
    "type": "person"
  },
  "evaluations": [
    {
      "criterion": "string",
      "reasoning": "string",
      "satisfied": "yes",
      "references": []
    }
  ],
  "enrichments": [
    {
      "object": "enrichment_result",
      "status": "pending",
      "format": "text",
      "result": [
        "string"
      ],
      "reasoning": "string",
      "references": [
        {
          "title": "string",
          "snippet": "string",
          "url": "http://example.com"
        }
      ],
      "enrichmentId": "string"
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset Item deleted|[WebsetItem](#schemawebsetitem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## List all Items for a Webset

<a id="opIdwebsets-items-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/string/items \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/websets/{webset}/items`

Returns a list of Webset Items.

You can paginate through the Items using the `cursor` parameter.

<h3 id="list-all-items-for-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webset|path|string|true|The id or externalId of the Webset|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|
|sourceId|query|string|false|The id of the source|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "webset_item",
      "source": "search",
      "sourceId": "string",
      "sourceEntityId": "string",
      "scopeId": "string",
      "websetId": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "evaluations": [
        {
          "criterion": "string",
          "reasoning": "string",
          "satisfied": "yes",
          "references": []
        }
      ],
      "enrichments": [
        {
          "object": "enrichment_result",
          "status": "pending",
          "format": "text",
          "result": [
            "string"
          ],
          "reasoning": "string",
          "references": [
            {
              "title": "string",
              "snippet": "string",
              "url": "http://example.com"
            }
          ],
          "enrichmentId": "string"
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-all-items-for-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webset Items|[ListWebsetItemResponse](#schemalistwebsetitemresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-websets-preview">Websets Preview</h1>

## Preview a webset

<a id="opIdwebsets-preview"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/websets/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "search": {
      "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
      "entity": {
        "type": "company"
      },
      "count": 10
    }
  }'
```

`POST /v0/websets/preview`

Returns how a search query will be interpreted before you create a Webset, including the detected entity, generated criteria, and suggested enrichments.

> Body parameter

```json
{
  "search": {
    "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
    "entity": {
      "type": "company"
    },
    "count": 10
  }
}
```

<h3 id="preview-a-webset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|boolean|false|Whether you want to search for a preview list of items or not|
|body|body|[PreviewWebsetParameters](#schemapreviewwebsetparameters)|true|Search parameters|
|» search|body|object|true|none|
|» » query|body|string|true|Natural language search query describing what you are looking for.<br><br>Be specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.|
|» » entity|body|[Entity](#schemaentity)|false|Entity to search for. Detected from the query when omitted.|
|» » count|body|number|false|When query parameter search=true, the number of preview items to return.|

> Example responses

> 200 Response

```json
{
  "search": {
    "entity": {
      "type": "company"
    },
    "criteria": [
      {
        "description": "string"
      }
    ]
  },
  "enrichments": [
    {
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="preview-a-webset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview of the webset|[PreviewWebsetResponse](#schemapreviewwebsetresponse)|
|422|Unprocessable Entity|Unable to detect entity or criteria from query|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|422|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-monitors-runs">Monitors Runs</h1>

## List Monitor Runs

<a id="opIdmonitors-runs-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors/string/runs \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/monitors/{monitor}/runs`

Lists all runs for the Monitor.

<h3 id="list-monitor-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitor|path|string|true|The id of the Monitor to list runs for|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "monitor_run",
      "monitorId": "string",
      "status": "created",
      "completedAt": "1970-01-01T00:00:00Z",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedReason": "string",
      "canceledAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "type": "search"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-monitor-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitor runs|[ListMonitorRunsResponse](#schemalistmonitorrunsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get Monitor Run

<a id="opIdmonitors-runs-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/monitors/string/runs/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/monitors/{monitor}/runs/{id}`

Gets a specific monitor run.

<h3 id="get-monitor-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitor|path|string|true|The id of the Monitor to get the run for|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "monitor_run",
  "monitorId": "string",
  "status": "created",
  "completedAt": "1970-01-01T00:00:00Z",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedReason": "string",
  "canceledAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "type": "search"
}
```

<h3 id="get-monitor-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor run details|[MonitorRun](#schemamonitorrun)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-imports">Imports</h1>

## List Imports

<a id="opIdimports-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/imports \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/imports`

Lists all imports for the Webset.

<h3 id="list-imports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-imports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of imports|[ListImportsResponse](#schemalistimportsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create an Import

<a id="opIdimports-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/imports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "size": 0,
    "count": 0,
    "title": "string",
    "format": "csv",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "entity": {
      "type": "company"
    },
    "csv": {
      "identifier": 0
    }
  }'
```

`POST /v0/imports`

Creates an Import for your own data. Upload the file to the returned `uploadUrl` before `uploadValidUntil`, 1 hour after creation. Use an Import to enrich its records, to search within them with `scope`, or to leave them out of searches with `exclude`.

> Body parameter

```json
{
  "size": 0,
  "count": 0,
  "title": "string",
  "format": "csv",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "entity": {
    "type": "company"
  },
  "csv": {
    "identifier": 0
  }
}
```

<h3 id="create-an-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateImportParameters](#schemacreateimportparameters)|true|none|
|» *oneOf*|body|object|false|none|
|» size|body|number|true|The size of the file in bytes. Maximum size is 50 MB.|
|» count|body|number|true|The number of records to import|
|» title|body|string|false|The title of the import|
|» format|body|string|true|The file format. The CSV must include a column that identifies each entity, or the import fails.|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|
|» entity|body|[Entity](#schemaentity)|true|The type of entity each row describes.|
|» csv|body|object|false|When format is `csv`, these are the specific import parameters.|
|» » identifier|body|integer|false|Column containing the key identifier for the entity (e.g. URL, Name, etc.). If not provided, we will try to infer it from the file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|csv|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "uploadUrl": "string",
  "uploadValidUntil": "string"
}
```

<h3 id="create-an-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Import created successfully|[CreateImportResponse](#schemacreateimportresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get Import

<a id="opIdimports-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/imports/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/imports/{id}`

Gets a specific import.

<h3 id="get-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Import|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import details|[Import](#schemaimport)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete Import

<a id="opIdimports-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/imports/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/imports/{id}`

Deletes a import.

<h3 id="delete-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Import|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import deleted successfully|[Import](#schemaimport)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update Import

<a id="opIdimports-update"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/imports/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string"
  }'
```

`PATCH /v0/imports/{id}`

Updates a import configuration.

> Body parameter

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "title": "string"
}
```

<h3 id="update-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Import|
|body|body|[UpdateImport](#schemaupdateimport)|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import updated successfully|[Import](#schemaimport)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-webhooks">Webhooks</h1>

## List webhooks

<a id="opIdwebhooks-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/webhooks`

Returns the active Webhooks for your team.

You can paginate through the results using the `cursor` parameter.

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "webhook",
      "status": "active",
      "events": [
        "webset.created"
      ],
      "url": "http://example.com",
      "secret": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of webhooks|[ListWebhooksResponse](#schemalistwebhooksresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Create a Webhook

<a id="opIdwebhooks-create"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "events": [
      "webset.created"
    ],
    "url": "http://example.com",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v0/webhooks`

Creates a Webhook that delivers the selected events to your URL as they occur.

The response includes the signing `secret` used to verify deliveries; it is only returned on creation.

> Body parameter

```json
{
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebhookParameters](#schemacreatewebhookparameters)|true|none|
|» events|body|[[EventType](#schemaeventtype)]|true|The events to trigger the webhook|
|» url|body|string(uri)|true|The URL to send the webhook to|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|webset.created|
|» events|webset.deleted|
|» events|webset.paused|
|» events|webset.idle|
|» events|webset.search.created|
|» events|webset.search.canceled|
|» events|webset.search.completed|
|» events|webset.search.updated|
|» events|import.created|
|» events|import.completed|
|» events|webset.item.created|
|» events|webset.item.enriched|
|» events|monitor.created|
|» events|monitor.updated|
|» events|monitor.deleted|
|» events|monitor.run.created|
|» events|monitor.run.completed|
|» events|webset.export.created|
|» events|webset.export.completed|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webhook",
  "status": "active",
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "secret": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook|[Webhook](#schemawebhook)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get a Webhook

<a id="opIdwebhooks-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/webhooks/{id}`

Returns a Webhook by id, including its status, subscribed events, target URL, and metadata. The signing `secret` is not returned.

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the webhook|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webhook",
  "status": "active",
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "secret": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook|[Webhook](#schemawebhook)|
|404|Not Found|Webhook not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Delete a Webhook

<a id="opIdwebhooks-delete"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /v0/webhooks/{id}`

Deletes a Webhook. Its status becomes `inactive`, which stops future webhook deliveries to its URL.

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the webhook|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webhook",
  "status": "active",
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "secret": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook|[Webhook](#schemawebhook)|
|404|Not Found|Webhook not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Update a Webhook

<a id="opIdwebhooks-update"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "events": [
      "webset.created"
    ],
    "url": "http://example.com",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v0/webhooks/{id}`

Updates the target URL, subscribed events, or metadata of a Webhook. Omitted fields are left unchanged.

> Body parameter

```json
{
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the webhook|
|body|body|[UpdateWebhookParameters](#schemaupdatewebhookparameters)|true|none|
|» events|body|[[EventType](#schemaeventtype)]|false|The events to trigger the webhook|
|» url|body|string(uri)|false|The URL to send the webhook to|
|» metadata|body|object|false|Set of key-value pairs you want to associate with this object.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|webset.created|
|» events|webset.deleted|
|» events|webset.paused|
|» events|webset.idle|
|» events|webset.search.created|
|» events|webset.search.canceled|
|» events|webset.search.completed|
|» events|webset.search.updated|
|» events|import.created|
|» events|import.completed|
|» events|webset.item.created|
|» events|webset.item.enriched|
|» events|monitor.created|
|» events|monitor.updated|
|» events|monitor.deleted|
|» events|monitor.run.created|
|» events|monitor.run.completed|
|» events|webset.export.created|
|» events|webset.export.completed|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "webhook",
  "status": "active",
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "secret": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook|[Webhook](#schemawebhook)|
|404|Not Found|Webhook not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-webhooks-attempts">Webhooks Attempts</h1>

## List webhook attempts

<a id="opIdwebhooks-attempts-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/webhooks/string/attempts \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/webhooks/{id}/attempts`

List all attempts made by a Webhook ordered in descending order.

<h3 id="list-webhook-attempts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the webhook|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|
|eventType|query|[EventType](#schemaeventtype)|false|The type of event to filter by|
|successful|query|boolean|false|Filter attempts by their success status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|webset.created|
|eventType|webset.deleted|
|eventType|webset.paused|
|eventType|webset.idle|
|eventType|webset.search.created|
|eventType|webset.search.canceled|
|eventType|webset.search.completed|
|eventType|webset.search.updated|
|eventType|import.created|
|eventType|import.completed|
|eventType|webset.item.created|
|eventType|webset.item.enriched|
|eventType|monitor.created|
|eventType|monitor.updated|
|eventType|monitor.deleted|
|eventType|monitor.run.created|
|eventType|monitor.run.completed|
|eventType|webset.export.created|
|eventType|webset.export.completed|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "webhook_attempt",
      "eventId": "string",
      "eventType": "webset.created",
      "webhookId": "string",
      "url": "string",
      "successful": true,
      "responseHeaders": {
        "property1": "string",
        "property2": "string"
      },
      "responseBody": "string",
      "responseStatusCode": 0,
      "attempt": 0,
      "attemptedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-webhook-attempts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of webhook attempts|[ListWebhookAttemptsResponse](#schemalistwebhookattemptsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

<h1 id="exa-public-api-events">Events</h1>

## List all Events

<a id="opIdevents-list"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/events \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/events`

List all events that have occurred in the system.

You can paginate through the results using the `cursor` parameter.

<h3 id="list-all-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|integer|false|The number of results to return|
|types|query|[string]|false|The types of events to filter by|
|createdBefore|query|string(date-time)|false|Filter events created before or at this timestamp (inclusive). Must be a valid ISO 8601 datetime string. All times are in UTC.|
|createdAfter|query|string(date-time)|false|Filter events created after or at this timestamp (inclusive). Must be a valid ISO 8601 datetime string. All times are in UTC.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|webset.created|
|types|webset.deleted|
|types|webset.paused|
|types|webset.idle|
|types|webset.search.created|
|types|webset.search.canceled|
|types|webset.search.completed|
|types|webset.search.updated|
|types|import.created|
|types|import.completed|
|types|webset.item.created|
|types|webset.item.enriched|
|types|monitor.created|
|types|monitor.updated|
|types|monitor.deleted|
|types|monitor.run.created|
|types|monitor.run.completed|
|types|webset.export.created|
|types|webset.export.completed|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "object": "event",
      "data": {
        "id": "string",
        "object": "webset",
        "status": "idle",
        "externalId": "string",
        "title": "string",
        "searches": [
          {
            "id": "string",
            "object": "webset_search",
            "websetId": "string",
            "status": "created",
            "query": "string",
            "entity": {
              "type": "company"
            },
            "criteria": [
              {
                "description": "string",
                "successRate": 0
              }
            ],
            "count": 1,
            "maxPeoplePerCompany": 1,
            "behavior": "override",
            "exclude": [
              {
                "source": "import",
                "id": "string"
              }
            ],
            "scope": [
              {
                "source": "import",
                "id": "string",
                "relationship": {
                  "definition": "string",
                  "limit": 1
                }
              }
            ],
            "progress": {
              "found": 0,
              "analyzed": 0,
              "completion": 0,
              "timeLeft": 0
            },
            "recall": {
              "expected": {
                "total": 0,
                "confidence": "high",
                "bounds": {
                  "min": 0,
                  "max": 0
                }
              },
              "reasoning": "string"
            },
            "metadata": {},
            "canceledAt": "1970-01-01T00:00:00Z",
            "canceledReason": "webset_deleted",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "imports": [
          {
            "id": "string",
            "object": "import",
            "status": "pending",
            "format": "csv",
            "entity": {
              "type": "company"
            },
            "title": "string",
            "count": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "failedReason": "invalid_format",
            "failedAt": "1970-01-01T00:00:00Z",
            "failedMessage": "string",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "enrichments": [
          {
            "id": "string",
            "object": "webset_enrichment",
            "status": "pending",
            "websetId": "string",
            "title": "string",
            "description": "string",
            "format": "text",
            "options": [
              {
                "label": "string"
              }
            ],
            "instructions": "string",
            "metadata": {},
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "monitors": [
          {
            "id": "string",
            "object": "monitor",
            "status": "enabled",
            "websetId": "string",
            "cadence": {
              "cron": "string",
              "timezone": "Etc/UTC"
            },
            "behavior": {
              "config": {
                "query": "string",
                "criteria": [
                  {
                    "description": "string"
                  }
                ],
                "entity": {
                  "type": "company"
                },
                "count": 0.1,
                "behavior": "override"
              },
              "type": "search"
            },
            "lastRun": {
              "id": "string",
              "object": "monitor_run",
              "monitorId": "string",
              "status": "created",
              "completedAt": "1970-01-01T00:00:00Z",
              "failedAt": "1970-01-01T00:00:00Z",
              "failedReason": "string",
              "canceledAt": "1970-01-01T00:00:00Z",
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z",
              "type": "search"
            },
            "nextRunAt": "1970-01-01T00:00:00Z",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "excludes": [
          {
            "source": "import",
            "id": "string"
          }
        ],
        "metadata": {},
        "dashboardUrl": "http://example.com",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "type": "webset.created"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-all-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of events|[ListEventsResponse](#schemalisteventsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

## Get an Event

<a id="opIdevents-get"></a>

> Code samples

```bash
curl https://api.exa.ai/v0/events/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v0/events/{id}`

Get a single Event by id.

You can subscribe to Events by creating a Webhook.

<h3 id="get-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the event|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "event",
  "data": {
    "id": "string",
    "object": "webset",
    "status": "idle",
    "externalId": "string",
    "title": "string",
    "searches": [
      {
        "id": "string",
        "object": "webset_search",
        "websetId": "string",
        "status": "created",
        "query": "string",
        "entity": {
          "type": "company"
        },
        "criteria": [
          {
            "description": "string",
            "successRate": 0
          }
        ],
        "count": 1,
        "maxPeoplePerCompany": 1,
        "behavior": "override",
        "exclude": [
          {
            "source": "import",
            "id": "string"
          }
        ],
        "scope": [
          {
            "source": "import",
            "id": "string",
            "relationship": {
              "definition": "string",
              "limit": 1
            }
          }
        ],
        "progress": {
          "found": 0,
          "analyzed": 0,
          "completion": 0,
          "timeLeft": 0
        },
        "recall": {
          "expected": {
            "total": 0,
            "confidence": "high",
            "bounds": {
              "min": 0,
              "max": 0
            }
          },
          "reasoning": "string"
        },
        "metadata": {},
        "canceledAt": "1970-01-01T00:00:00Z",
        "canceledReason": "webset_deleted",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "imports": [
      {
        "id": "string",
        "object": "import",
        "status": "pending",
        "format": "csv",
        "entity": {
          "type": "company"
        },
        "title": "string",
        "count": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "failedReason": "invalid_format",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedMessage": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "enrichments": [
      {
        "id": "string",
        "object": "webset_enrichment",
        "status": "pending",
        "websetId": "string",
        "title": "string",
        "description": "string",
        "format": "text",
        "options": [
          {
            "label": "string"
          }
        ],
        "instructions": "string",
        "metadata": {},
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "monitors": [
      {
        "id": "string",
        "object": "monitor",
        "status": "enabled",
        "websetId": "string",
        "cadence": {
          "cron": "string",
          "timezone": "Etc/UTC"
        },
        "behavior": {
          "config": {
            "query": "string",
            "criteria": [
              {
                "description": "string"
              }
            ],
            "entity": {
              "type": "company"
            },
            "count": 0.1,
            "behavior": "override"
          },
          "type": "search"
        },
        "lastRun": {
          "id": "string",
          "object": "monitor_run",
          "monitorId": "string",
          "status": "created",
          "completedAt": "1970-01-01T00:00:00Z",
          "failedAt": "1970-01-01T00:00:00Z",
          "failedReason": "string",
          "canceledAt": "1970-01-01T00:00:00Z",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "type": "search"
        },
        "nextRunAt": "1970-01-01T00:00:00Z",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "excludes": [
      {
        "source": "import",
        "id": "string"
      }
    ],
    "metadata": {},
    "dashboardUrl": "http://example.com",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "type": "webset.created"
}
```

<h3 id="get-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Event](#schemaevent)|
|404|Not Found|Event not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Request-Id|string||Unique identifier for the request.|
|404|X-Request-Id|string||Unique identifier for the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, bearer
</aside>

# Schemas

<h2 id="tocS_SearchRequest">SearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_SearchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "startPublishedDate": "1970-01-01T00:00:00Z",
  "endPublishedDate": "1970-01-01T00:00:00Z",
  "numResults": 10,
  "moderation": false,
  "contents": {
    "text": false,
    "highlights": false,
    "summary": {
      "query": "string",
      "schema": {
        "property1": true,
        "property2": true
      }
    },
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "snapshotAsOf": "1970-01-01T00:00:00Z",
    "context": true,
    "livecrawl": "never",
    "crawledBeforeDate": "string",
    "subpages": 0,
    "subpageTarget": "string"
  },
  "query": "string",
  "additionalQueries": [
    "string"
  ],
  "type": "auto",
  "category": "company",
  "userLocation": "string",
  "compliance": "hipaa",
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "objective": "string",
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
  "systemPrompt": "string",
  "stream": false,
  "startCrawlDate": "1970-01-01T00:00:00Z",
  "endCrawlDate": "1970-01-01T00:00:00Z",
  "includeText": [
    "string"
  ],
  "excludeText": [
    "string"
  ],
  "context": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeDomains|[string] \| null|false|none|none|
|excludeDomains|[string] \| null|false|none|none|
|startPublishedDate|string(date-time) \| null|false|none|none|
|endPublishedDate|string(date-time) \| null|false|none|none|
|numResults|integer \| null|false|none|none|
|moderation|boolean \| null|false|none|none|
|contents|[ContentsOptions](#schemacontentsoptions) \| null|false|none|none|
|query|string|true|none|The query string for the search.|
|additionalQueries|[string] \| null|false|none|none|
|type|string \| null|false|none|The search mode to use. Defaults to `auto`, a balanced mode recommended for most applications.<br><br>- `auto`: The default. A balanced mode that optimizes for both quality and speed and is recommended for most applications.<br>- `lite`: Low-cost, low-latency search for real-time and interactive experiences such as chat, voice agents, and autocomplete. Accepts only `query` (a single string), `objective`, `userIdentifier`, `metadata`, `category`, `numResults`, `contents.highlights`, `contents.text`, `contents.snapshotAsOf`, `userLocation`, `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `moderation`, and `compliance`; a request that sets any other parameter is rejected. Serves cached content only; it never fetches live, so the freshness options are rejected.<br>- `deep-lite`: Performs lightweight research with synthesized results and a consistent 4-second latency, lower than full deep search.<br>- `deep`: Conducts comprehensive multi-step research with synthesis.<br>- `instant`: Legacy. Use `lite` instead. Runs a minimum-latency search that trades some search depth for speed. Unlike `lite`, it accepts every search parameter.<br>- `fast`: Legacy. Use `lite` instead. Runs a reduced-latency search for user-facing and interactive workflows. Unlike `lite`, it accepts every search parameter.<br>- `deep-reasoning`: Legacy. Use `deep` instead. Runs `deep` with stronger reasoning at each step, for complex analysis and decision-making tasks. For agentic, multi-step research, use the Agent API.|
|category|string \| null|false|none|none|
|userLocation|string \| object \| null|false|none|none|
|compliance|string \| null|false|none|none|
|outputSchema|object \| null|false|none|none|
|objective|string \| null|false|none|The broader goal this search serves: the task the caller is working on, beyond the query itself. When exposing this field to an agent as a tool parameter, describe it as: "Goal for this search turn; say which documents should rank first, which should be excluded, and what specific facts or figures to pull from them."|
|userIdentifier|string \| null|false|none|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|systemPrompt|string \| null|false|none|none|
|stream|boolean \| null|false|none|none|
|startCrawlDate|string(date-time) \| null|false|none|none|
|endCrawlDate|string(date-time) \| null|false|none|none|
|includeText|[string] \| null|false|none|**Deprecated.** Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters.|
|excludeText|[string] \| null|false|none|**Deprecated.** Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters.|
|context|boolean \| object \| null|false|none|none|

<h2 id="tocS_JsonValue">JsonValue</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue"></a>
<a id="schema_JsonValue"></a>
<a id="tocSjsonvalue"></a>
<a id="tocsjsonvalue"></a>

```json
true
```

Any JSON value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|null|false|none|none|
|*oneOf*|boolean|false|none|none|
|*oneOf*|number|false|none|none|
|*oneOf*|string|false|none|none|
|*oneOf*|[[JsonValue](#schemajsonvalue)]|false|none|none|
|*oneOf*|object|false|none|none|
|**additionalProperties**|[JsonValue](#schemajsonvalue)|false|none|Any JSON value.|

<h2 id="tocS_ContentsOptions">ContentsOptions</h2>
<!-- backwards compatibility -->
<a id="schemacontentsoptions"></a>
<a id="schema_ContentsOptions"></a>
<a id="tocScontentsoptions"></a>
<a id="tocscontentsoptions"></a>

```json
{
  "text": false,
  "highlights": false,
  "summary": {
    "query": "string",
    "schema": {
      "property1": true,
      "property2": true
    }
  },
  "extras": {
    "links": 0,
    "imageLinks": 0,
    "richImageLinks": 0,
    "richLinks": 0,
    "codeBlocks": 0
  },
  "livecrawlTimeout": 10000,
  "maxAgeHours": -1,
  "snapshotAsOf": "1970-01-01T00:00:00Z",
  "context": true,
  "livecrawl": "never",
  "crawledBeforeDate": "string",
  "subpages": 0,
  "subpageTarget": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|boolean \| object \| null|false|none|none|
|highlights|boolean \| object \| null|false|none|none|
|summary|object \| null|false|none|none|
|extras|object \| null|false|none|none|
|livecrawlTimeout|integer \| null|false|none|none|
|maxAgeHours|integer \| null|false|none|none|
|snapshotAsOf|string(date-time) \| string(date) \| null|false|none|none|
|context|boolean \| object \| null|false|none|none|
|livecrawl|string \| null|false|none|none|
|crawledBeforeDate|string \| null(date-time)|false|none|**Deprecated.** Deprecated. Use `snapshotAsOf` instead. Alias of snapshotAsOf with identical behavior.|
|subpages|integer \| null|false|none|none|
|subpageTarget|string \| [string] \| null|false|none|none|

<h2 id="tocS_OutputSchemaText">OutputSchemaText</h2>
<!-- backwards compatibility -->
<a id="schemaoutputschematext"></a>
<a id="schema_OutputSchemaText"></a>
<a id="tocSoutputschematext"></a>
<a id="tocsoutputschematext"></a>

```json
{
  "type": "text",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|description|string|false|none|none|

<h2 id="tocS_OutputSchemaObject">OutputSchemaObject</h2>
<!-- backwards compatibility -->
<a id="schemaoutputschemaobject"></a>
<a id="schema_OutputSchemaObject"></a>
<a id="tocSoutputschemaobject"></a>
<a id="tocsoutputschemaobject"></a>

```json
{
  "type": "object",
  "description": "string",
  "properties": {
    "property1": true,
    "property2": true
  },
  "required": [
    "string"
  ],
  "additionalProperties": true,
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|description|string|false|none|none|
|properties|object|false|none|none|
|required|[string]|false|none|none|
|additionalProperties|boolean|false|none|none|
|**additionalProperties**|[JsonValue](#schemajsonvalue)|false|none|Any JSON value.|

<h2 id="tocS_ContentsRequest">ContentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontentsrequest"></a>
<a id="schema_ContentsRequest"></a>
<a id="tocScontentsrequest"></a>
<a id="tocscontentsrequest"></a>

```json
{
  "ids": [
    "string"
  ],
  "urls": [
    "string"
  ],
  "compliance": "hipaa",
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37",
  "text": false,
  "highlights": false,
  "summary": {
    "query": "string",
    "schema": {
      "property1": true,
      "property2": true
    }
  },
  "extras": {
    "links": 0,
    "imageLinks": 0,
    "richImageLinks": 0,
    "richLinks": 0,
    "codeBlocks": 0
  },
  "livecrawlTimeout": 10000,
  "maxAgeHours": -1,
  "snapshotAsOf": "1970-01-01T00:00:00Z",
  "subpages": 0,
  "subpageTarget": "string",
  "context": true,
  "livecrawl": "never",
  "crawledBeforeDate": "string"
}
```

Provide either `ids` or `urls`, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|Document IDs obtained from searches.|
|urls|[string]|false|none|URLs to crawl (backwards compatible with the `ids` parameter).|
|compliance|string \| null|false|none|none|
|userIdentifier|string \| null|false|none|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|
|text|boolean \| object \| null|false|none|none|
|highlights|boolean \| object \| null|false|none|none|
|summary|object \| null|false|none|none|
|extras|object \| null|false|none|none|
|livecrawlTimeout|integer \| null|false|none|none|
|maxAgeHours|integer \| null|false|none|none|
|snapshotAsOf|string(date-time) \| string(date) \| null|false|none|none|
|subpages|integer \| null|false|none|none|
|subpageTarget|string \| [string] \| null|false|none|none|
|context|boolean \| object \| null|false|none|none|
|livecrawl|string \| null|false|none|none|
|crawledBeforeDate|string \| null(date-time)|false|none|**Deprecated.** Deprecated. Use `snapshotAsOf` instead. Alias of snapshotAsOf with identical behavior.|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_AnswerRequest">AnswerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanswerrequest"></a>
<a id="schema_AnswerRequest"></a>
<a id="tocSanswerrequest"></a>
<a id="tocsanswerrequest"></a>

```json
{
  "query": "string",
  "stream": false,
  "text": false,
  "model": "exa",
  "systemPrompt": "string",
  "userLocation": "string",
  "outputSchema": {
    "type": "string",
    "properties": {
      "property1": true,
      "property2": true
    },
    "required": [
      "string"
    ],
    "description": "string",
    "additionalProperties": false,
    "property1": true,
    "property2": true
  },
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Natural-language question or instructions for the request.|
|stream|boolean|false|none|If true, the response is returned as a server-sent events (SSE) stream.|
|text|boolean|false|none|If true, returns full page text with default settings. If false, disables text return.|
|model|string|false|none|The model used to generate the answer.|
|systemPrompt|string|false|none|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|userLocation|string \| object \| null|false|none|none|
|outputSchema|object|false|none|A [JSON Schema Draft 7](https://json-schema.org/draft-07) specification for the desired answer structure. When provided, the answer is returned as a structured object matching the schema instead of a plain string.|
|userIdentifier|string \| null|false|none|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|

#### Enumerated Values

|Property|Value|
|---|---|
|model|exa|
|model|exa-pro|
|model|exa-research|
|model|exa-fast|

<h2 id="tocS_FindSimilarRequest">FindSimilarRequest</h2>
<!-- backwards compatibility -->
<a id="schemafindsimilarrequest"></a>
<a id="schema_FindSimilarRequest"></a>
<a id="tocSfindsimilarrequest"></a>
<a id="tocsfindsimilarrequest"></a>

```json
{
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "startPublishedDate": "1970-01-01T00:00:00Z",
  "endPublishedDate": "1970-01-01T00:00:00Z",
  "numResults": 10,
  "contents": {
    "text": false,
    "highlights": false,
    "summary": {
      "query": "string",
      "schema": {
        "property1": true,
        "property2": true
      }
    },
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "snapshotAsOf": "1970-01-01T00:00:00Z",
    "context": true,
    "livecrawl": "never",
    "crawledBeforeDate": "string",
    "subpages": 0,
    "subpageTarget": "string"
  },
  "url": "string",
  "category": "company",
  "excludeSourceDomain": true,
  "startCrawlDate": "1970-01-01T00:00:00Z",
  "endCrawlDate": "1970-01-01T00:00:00Z",
  "includeText": [
    "string"
  ],
  "excludeText": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeDomains|[string] \| null|false|none|none|
|excludeDomains|[string] \| null|false|none|none|
|startPublishedDate|string(date-time) \| null|false|none|none|
|endPublishedDate|string(date-time) \| null|false|none|none|
|numResults|integer \| null|false|none|none|
|contents|[ContentsOptions](#schemacontentsoptions) \| null|false|none|none|
|url|string|true|none|The url for which you would like to find similar links.|
|category|string \| null|false|none|none|
|excludeSourceDomain|boolean \| null|false|none|none|
|startCrawlDate|string(date-time) \| null|false|none|none|
|endCrawlDate|string(date-time) \| null|false|none|none|
|includeText|[string] \| null|false|none|**Deprecated.** Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.|
|excludeText|[string] \| null|false|none|**Deprecated.** Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.|

<h2 id="tocS_CreateSearchMonitorParameters">CreateSearchMonitorParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatesearchmonitorparameters"></a>
<a id="schema_CreateSearchMonitorParameters"></a>
<a id="tocScreatesearchmonitorparameters"></a>
<a id="tocscreatesearchmonitorparameters"></a>

```json
{
  "name": "string",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|An optional name for the monitor|
|search|[SearchMonitorSearch](#schemasearchmonitorsearch)|true|none|none|
|trigger|[SearchMonitorTrigger](#schemasearchmonitortrigger)|false|none|none|
|outputSchema|[SearchMonitorOutputSchema](#schemasearchmonitoroutputschema)|false|none|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|metadata|object|false|none|Optional key-value metadata. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|webhook|[SearchMonitorWebhook](#schemasearchmonitorwebhook)|true|none|none|

<h2 id="tocS_SearchMonitorSearch">SearchMonitorSearch</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorsearch"></a>
<a id="schema_SearchMonitorSearch"></a>
<a id="tocSsearchmonitorsearch"></a>
<a id="tocssearchmonitorsearch"></a>

```json
{
  "query": "string",
  "numResults": 10,
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "contents": {
    "text": false,
    "highlights": false,
    "summary": true,
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawl": "never",
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "filterEmptyResults": true,
    "subpages": 0,
    "subpageTarget": "string",
    "context": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|The query string for the search.|
|numResults|integer|false|none|Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.|
|includeDomains|[string]|false|none|Restrict search results to these domains.|
|excludeDomains|[string]|false|none|Exclude these domains from search results.|
|contents|[SearchMonitorContents](#schemasearchmonitorcontents)|false|none|Content extraction options applied to each search result. All fields are optional.|

<h2 id="tocS_SearchMonitorContents">SearchMonitorContents</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorcontents"></a>
<a id="schema_SearchMonitorContents"></a>
<a id="tocSsearchmonitorcontents"></a>
<a id="tocssearchmonitorcontents"></a>

```json
{
  "text": false,
  "highlights": false,
  "summary": true,
  "extras": {
    "links": 0,
    "imageLinks": 0,
    "richImageLinks": 0,
    "richLinks": 0,
    "codeBlocks": 0
  },
  "livecrawl": "never",
  "livecrawlTimeout": 10000,
  "maxAgeHours": -1,
  "filterEmptyResults": true,
  "subpages": 0,
  "subpageTarget": "string",
  "context": true
}
```

Content extraction options applied to each search result. All fields are optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|boolean \| object|false|none|Text extraction options for each result.|
|highlights|boolean \| object|false|none|Text snippets the LLM identifies as most relevant from each page.|
|summary|boolean \| [SummaryWithMaxTokensOptions](#schemasummarywithmaxtokensoptions)|false|none|Return an LLM-generated summary. Pass `true` for defaults, or an object with `query`.|
|extras|object|false|none|Extra parameters to pass.|
|livecrawl|string|false|none|Crawl strategy for fetching page content|
|livecrawlTimeout|integer|false|none|The timeout for livecrawling in milliseconds.|
|maxAgeHours|integer|false|none|Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.|
|filterEmptyResults|boolean|false|none|Filter out results with no content|
|subpages|integer|false|none|The number of subpages to crawl. The actual number crawled may be limited by system constraints.|
|subpageTarget|string \| [string]|false|none|Term to find specific subpages of search results. Can be a single string or an array of strings.|
|context|boolean \| object|false|none|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|

<h2 id="tocS_SummaryWithMaxTokensOptions">SummaryWithMaxTokensOptions</h2>
<!-- backwards compatibility -->
<a id="schemasummarywithmaxtokensoptions"></a>
<a id="schema_SummaryWithMaxTokensOptions"></a>
<a id="tocSsummarywithmaxtokensoptions"></a>
<a id="tocssummarywithmaxtokensoptions"></a>

```json
{
  "query": "string",
  "maxTokens": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string \| null|false|none|none|
|maxTokens|integer|false|none|**Deprecated.** Deprecated. Maximum tokens for the generated summary.|

<h2 id="tocS_SearchMonitorTrigger">SearchMonitorTrigger</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitortrigger"></a>
<a id="schema_SearchMonitorTrigger"></a>
<a id="tocSsearchmonitortrigger"></a>
<a id="tocssearchmonitortrigger"></a>

```json
{
  "type": "interval",
  "period": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of trigger. Currently only `interval` is supported.|
|period|string|true|none|A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour. The schedule is anchored to the monitor's creation time (e.g., a daily monitor created at 2:30 PM runs daily around 2:30 PM).|

<h2 id="tocS_SearchMonitorOutputSchema">SearchMonitorOutputSchema</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitoroutputschema"></a>
<a id="schema_SearchMonitorOutputSchema"></a>
<a id="tocSsearchmonitoroutputschema"></a>
<a id="tocssearchmonitoroutputschema"></a>

```json
{
  "type": "text",
  "description": "string"
}
```

Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.|
|*oneOf*|[OutputSchemaText](#schemaoutputschematext)|false|none|none|
|*oneOf*|[OutputSchemaObject](#schemaoutputschemaobject)|false|none|none|
|*anyOf*|null|false|none|none|

<h2 id="tocS_SearchMonitorWebhook">SearchMonitorWebhook</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorwebhook"></a>
<a id="schema_SearchMonitorWebhook"></a>
<a id="tocSsearchmonitorwebhook"></a>
<a id="tocssearchmonitorwebhook"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "monitor.created"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.|
|events|[string]|false|none|Which events to subscribe to. Defaults to all events if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|monitor.created|
|events|monitor.updated|
|events|monitor.deleted|
|events|monitor.run.created|
|events|monitor.run.completed|

<h2 id="tocS_BatchMonitorsRequest">BatchMonitorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchmonitorsrequest"></a>
<a id="schema_BatchMonitorsRequest"></a>
<a id="tocSbatchmonitorsrequest"></a>
<a id="tocsbatchmonitorsrequest"></a>

```json
{
  "action": "delete",
  "filter": {
    "name": "string",
    "status": "active",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "dry_run": true,
  "limit": 50
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to perform on matching monitors. `delete` permanently removes them, `pause` sets their status to paused, and `unpause` sets their status to active.|
|filter|object|true|none|At least one filter field must be provided to prevent accidental bulk operations.|
|dry_run|boolean|false|none|When `true`, returns the monitors that would be affected without performing the action. Defaults to `true`.|
|limit|integer|false|none|Maximum number of monitors to process in a single request. Defaults to 50, maximum 500.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|delete|
|action|pause|
|action|unpause|

<h2 id="tocS_UpdateSearchMonitorParameters">UpdateSearchMonitorParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesearchmonitorparameters"></a>
<a id="schema_UpdateSearchMonitorParameters"></a>
<a id="tocSupdatesearchmonitorparameters"></a>
<a id="tocsupdatesearchmonitorparameters"></a>

```json
{
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Update the monitor name|
|status|string|false|none|Update the monitor status (can only set to `active` or `paused`)|
|search|object|false|none|Partial search params to merge. All fields are optional for updates.|
|trigger|object \| null|false|none|Update the schedule. Set to null to remove the schedule.|
|outputSchema|[SearchMonitorOutputSchema](#schemasearchmonitoroutputschema)|false|none|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|metadata|object \| null|false|none|Update metadata. Set to null to remove. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|webhook|object|false|none|Partial webhook params to merge. All fields are optional for updates.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_CreateAgentRunRequest">CreateAgentRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentrunrequest"></a>
<a id="schema_CreateAgentRunRequest"></a>
<a id="tocScreateagentrunrequest"></a>
<a id="tocscreateagentrunrequest"></a>

```json
{
  "query": "string",
  "systemPrompt": "string",
  "effort": "auto",
  "input": {
    "data": [
      {
        "property1": true,
        "property2": true
      }
    ],
    "exclusion": [
      {
        "property1": true,
        "property2": true
      }
    ]
  },
  "outputSchema": {
    "property1": true,
    "property2": true
  },
  "previousRunId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "dataSources": [
    {
      "provider": "string"
    }
  ],
  "budget": {
    "maxCostDollars": 0,
    "maxDurationSeconds": 0
  },
  "userIdentifier": "7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Natural-language question or instructions for the request.|
|systemPrompt|string|false|none|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|effort|[AgentEffort](#schemaagenteffort)|false|none|Cost and reasoning effort preference for the run. `auto` lets Exa choose the appropriate effort. `ultra` is the highest-effort tier for work where completeness and thoroughness matter more than latency or cost, including large list building, deep multi-source research, and criteria that are hard to verify.|
|input|object|false|none|Records to process and records or entities to exclude from the answer.|
|outputSchema|object \| null|false|none|none|
|previousRunId|[AgentRunId](#schemaagentrunid)|false|none|Completed run ID to continue from. Must belong to the same team.|
|metadata|object|false|none|Caller-provided metadata stored with the run.|
|dataSources|[[AgentDataSource](#schemaagentdatasource)]|false|none|Exa Connect data providers to enable for the run. Each entry enables all of that provider's tools.|
|budget|[AgentBudget](#schemaagentbudget)|false|none|Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.|
|userIdentifier|string \| null|false|none|An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.|

#### Enumerated Values

|Property|Value|
|---|---|
|effort|minimal|
|effort|low|
|effort|medium|
|effort|high|
|effort|xhigh|
|effort|auto|
|effort|ultra|

<h2 id="tocS_AgentEffort">AgentEffort</h2>
<!-- backwards compatibility -->
<a id="schemaagenteffort"></a>
<a id="schema_AgentEffort"></a>
<a id="tocSagenteffort"></a>
<a id="tocsagenteffort"></a>

```json
"auto"
```

Cost and reasoning effort preference for the run. `auto` lets Exa choose the appropriate effort. `ultra` is the highest-effort tier for work where completeness and thoroughness matter more than latency or cost, including large list building, deep multi-source research, and criteria that are hard to verify.

<h2 id="tocS_AgentRunId">AgentRunId</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunid"></a>
<a id="schema_AgentRunId"></a>
<a id="tocSagentrunid"></a>
<a id="tocsagentrunid"></a>

```json
"string"
```

Agent run ID. New run IDs are returned with the `agent_run_` prefix.

<h2 id="tocS_AgentDataSource">AgentDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaagentdatasource"></a>
<a id="schema_AgentDataSource"></a>
<a id="tocSagentdatasource"></a>
<a id="tocsagentdatasource"></a>

```json
{
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[AgentDataSourceProvider](#schemaagentdatasourceprovider)|true|none|Exa Connect data provider to enable for the run. All provider tools are available by default.|

<h2 id="tocS_AgentDataSourceProvider">AgentDataSourceProvider</h2>
<!-- backwards compatibility -->
<a id="schemaagentdatasourceprovider"></a>
<a id="schema_AgentDataSourceProvider"></a>
<a id="tocSagentdatasourceprovider"></a>
<a id="tocsagentdatasourceprovider"></a>

```json
"string"
```

Identifier of an Exa Connect data provider, such as `fiber` or `financial_datasets`. A team can use the self-serve providers and any provider enabled for it; requesting any other provider returns a 400.

<h2 id="tocS_AgentBudget">AgentBudget</h2>
<!-- backwards compatibility -->
<a id="schemaagentbudget"></a>
<a id="schema_AgentBudget"></a>
<a id="tocSagentbudget"></a>
<a id="tocsagentbudget"></a>

```json
{
  "maxCostDollars": 0,
  "maxDurationSeconds": 0
}
```

Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxCostDollars|number|false|none|Maximum amount this run can spend in US dollars. Accepts $1–$100 and applies only to `auto` and `ultra`; when omitted, the default cap is $5 for `auto` and $20 for `ultra`.|
|maxDurationSeconds|integer|false|none|Soft wall-clock ceiling for the run in seconds. Accepts 300–10,800 (5 minutes to 3 hours) and applies only to `ultra`. As the run approaches the limit, the agent stops starting new work and returns what it has found with `stopReason: "time_limit_reached"`.|

<h2 id="tocS_CreateBatchRequest">CreateBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchrequest"></a>
<a id="schema_CreateBatchRequest"></a>
<a id="tocScreatebatchrequest"></a>
<a id="tocscreatebatchrequest"></a>

```json
{
  "requests": [
    {
      "customId": "string",
      "method": "POST",
      "url": "/search",
      "body": {
        "property1": true,
        "property2": true
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[BatchRequestItem](#schemabatchrequestitem)]|true|none|The requests to enqueue. Each `customId` must be unique within the batch.|
|metadata|object|false|none|Caller-provided metadata stored with the batch.|

<h2 id="tocS_BatchRequestItem">BatchRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequestitem"></a>
<a id="schema_BatchRequestItem"></a>
<a id="tocSbatchrequestitem"></a>
<a id="tocsbatchrequestitem"></a>

```json
{
  "customId": "string",
  "method": "POST",
  "url": "/search",
  "body": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customId|string|true|none|Your unique handle for this request; keys the result and must be unique in the batch.|
|method|string|true|none|HTTP method of the batched request. POST-only in v1.|
|url|string|true|none|Target API route for the request.|
|body|object|true|none|Request body for the target route. Must be a JSON object; `stream: true` is not allowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|url|/search|
|url|/agent/runs|

<h2 id="tocS_AnswerStreamTextDeltaChunk">AnswerStreamTextDeltaChunk</h2>
<!-- backwards compatibility -->
<a id="schemaanswerstreamtextdeltachunk"></a>
<a id="schema_AnswerStreamTextDeltaChunk"></a>
<a id="tocSanswerstreamtextdeltachunk"></a>
<a id="tocsanswerstreamtextdeltachunk"></a>

```json
{
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "refusal": "string",
        "property1": true,
        "property2": true
      },
      "finish_reason": "string",
      "property1": true,
      "property2": true
    }
  ],
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[object]|true|none|Streamed completion choices in the OpenAI chat completions format.|
|**additionalProperties**|[JsonValue](#schemajsonvalue)|false|none|Any JSON value.|

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "warnings": [
    {
      "code": "IGNORED_FIELD",
      "path": "/startCrawlDate",
      "message": "string"
    }
  ],
  "notices": [
    {
      "code": "RESTRICTIONS_RELAXED",
      "path": "/query",
      "message": "string",
      "details": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "output": {
    "content": "string",
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "resolvedSearchType": "string",
  "context": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SearchSynthesisResponse](#schemasearchsynthesisresponse)|false|none|none|
|*oneOf*|[SearchResultsResponse](#schemasearchresultsresponse)|false|none|none|

<h2 id="tocS_SearchSynthesisResponse">SearchSynthesisResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynthesisresponse"></a>
<a id="schema_SearchSynthesisResponse"></a>
<a id="tocSsearchsynthesisresponse"></a>
<a id="tocssearchsynthesisresponse"></a>

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "warnings": [
    {
      "code": "IGNORED_FIELD",
      "path": "/startCrawlDate",
      "message": "string"
    }
  ],
  "notices": [
    {
      "code": "RESTRICTIONS_RELAXED",
      "path": "/query",
      "message": "string",
      "details": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "output": {
    "content": "string",
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "resolvedSearchType": "string",
  "context": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|results|[[SearchResultOutput](#schemasearchresultoutput)]|true|none|A list of search results containing title, URL, published date, and author.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|searchTime|number|false|none|Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.|
|warnings|[[SearchWarningOutput](#schemasearchwarningoutput)]|false|none|Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.|
|notices|[[SearchNoticeOutput](#schemasearchnoticeoutput)]|false|none|Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.|
|output|[SearchSynthesisOutputOutput](#schemasearchsynthesisoutputoutput)|true|none|Synthesized output. Returned when outputSchema is provided.|
|resolvedSearchType|string|false|none|**Deprecated.** Deprecated. May be an empty string. Do not branch on this value.|
|context|string|false|none|**Deprecated.** Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.|

<h2 id="tocS_SearchResultsResponse">SearchResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultsresponse"></a>
<a id="schema_SearchResultsResponse"></a>
<a id="tocSsearchresultsresponse"></a>
<a id="tocssearchresultsresponse"></a>

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "warnings": [
    {
      "code": "IGNORED_FIELD",
      "path": "/startCrawlDate",
      "message": "string"
    }
  ],
  "notices": [
    {
      "code": "RESTRICTIONS_RELAXED",
      "path": "/query",
      "message": "string",
      "details": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "resolvedSearchType": "string",
  "context": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|results|[[SearchResultOutput](#schemasearchresultoutput)]|true|none|A list of search results containing title, URL, published date, and author.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|searchTime|number|false|none|Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.|
|warnings|[[SearchWarningOutput](#schemasearchwarningoutput)]|false|none|Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.|
|notices|[[SearchNoticeOutput](#schemasearchnoticeoutput)]|false|none|Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.|
|resolvedSearchType|string|false|none|**Deprecated.** Deprecated. May be an empty string. Do not branch on this value.|
|context|string|false|none|**Deprecated.** Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string"
}
```

Standard error envelope returned by the Exa API for failed requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|true|none|Unique identifier for the request.|
|error|string|true|none|Human-readable message describing the error.|
|tag|string|true|none|Machine-readable error tag identifying the failure. The set of tags is open-ended: new tags may be added at any time, so treat unrecognized tags as a generic error of the response's HTTP status. Known tags are listed as examples.|

<h2 id="tocS_X402PaymentChallenge">X402PaymentChallenge</h2>
<!-- backwards compatibility -->
<a id="schemax402paymentchallenge"></a>
<a id="schema_X402PaymentChallenge"></a>
<a id="tocSx402paymentchallenge"></a>
<a id="tocsx402paymentchallenge"></a>

```json
{
  "requestId": "string",
  "error": "string",
  "tag": "string",
  "x402Version": 0,
  "resource": {
    "url": "string",
    "description": "string",
    "mimeType": "string"
  },
  "accepts": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "extensions": {
    "property1": null,
    "property2": null
  }
}
```

x402 payment challenge: the standard error envelope extended with x402 payment metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|true|none|Unique identifier for the request.|
|error|string|true|none|Human-readable message describing the error.|
|tag|string|true|none|Machine-readable error tag identifying the failure. The set of tags is open-ended: new tags may be added at any time, so treat unrecognized tags as a generic error of the response's HTTP status. Known tags are listed as examples.|
|x402Version|number|true|none|Version of the x402 protocol used to build this challenge.|
|resource|object|true|none|The priced resource this challenge applies to.|
|accepts|[object]|true|none|Payment requirements the server accepts, one per supported rail.|
|extensions|object|false|none|Optional x402 protocol extensions (e.g. Bazaar or AgentKit discovery metadata).|

<h2 id="tocS_ContentsResponse">ContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentsresponse"></a>
<a id="schema_ContentsResponse"></a>
<a id="tocScontentsresponse"></a>
<a id="tocscontentsresponse"></a>

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "statuses": [
    {
      "id": "string",
      "status": "success",
      "source": "cached",
      "error": {
        "tag": "string",
        "httpStatusCode": 100
      }
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "context": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|results|[[SearchResultOutput](#schemasearchresultoutput)]|false|none|none|
|statuses|[object]|false|none|Status information for each requested URL or document ID.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|searchTime|number|false|none|Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.|
|context|string|false|none|**Deprecated.** Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.|

<h2 id="tocS_AnswerResponse">AnswerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanswerresponse"></a>
<a id="schema_AnswerResponse"></a>
<a id="tocSanswerresponse"></a>
<a id="tocsanswerresponse"></a>

```json
{
  "requestId": "string",
  "answer": "string",
  "citations": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string"
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|answer|string \| object|true|none|The generated answer based on search results. Returns a string by default, or a structured object matching the provided outputSchema.|
|citations|[object]|false|none|Search results used to generate the answer.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|

<h2 id="tocS_FindSimilarResponse">FindSimilarResponse</h2>
<!-- backwards compatibility -->
<a id="schemafindsimilarresponse"></a>
<a id="schema_FindSimilarResponse"></a>
<a id="tocSfindsimilarresponse"></a>
<a id="tocsfindsimilarresponse"></a>

```json
{
  "requestId": "string",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      },
      "score": 0
    }
  ],
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "searchTime": 0,
  "context": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|results|[[FindSimilarResult](#schemafindsimilarresult)]|false|none|A list of search results containing title, URL, published date, and author.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|searchTime|number|false|none|Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.|
|context|string|false|none|**Deprecated.** Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.|

<h2 id="tocS_FindSimilarResult">FindSimilarResult</h2>
<!-- backwards compatibility -->
<a id="schemafindsimilarresult"></a>
<a id="schema_FindSimilarResult"></a>
<a id="tocSfindsimilarresult"></a>
<a id="tocsfindsimilarresult"></a>

```json
{
  "title": "string",
  "url": "http://example.com",
  "publishedDate": "1970-01-01T00:00:00Z",
  "author": "string",
  "id": "string",
  "image": "http://example.com",
  "favicon": "http://example.com",
  "text": "string",
  "highlights": [
    "string"
  ],
  "highlightScores": [
    0
  ],
  "summary": "string",
  "subpages": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com"
    }
  ],
  "entities": [
    {
      "id": "string",
      "type": "company",
      "version": 1,
      "properties": {
        "name": "string",
        "foundedYear": 0,
        "description": "string",
        "workforce": {
          "total": 0
        },
        "headquarters": {
          "address": "string",
          "city": "string",
          "postalCode": "string",
          "country": "string"
        },
        "financials": {
          "revenueAnnual": 0,
          "fundingTotal": 0,
          "fundingLatestRound": {
            "name": "string",
            "date": "string",
            "amount": 0
          }
        },
        "webTraffic": {
          "visitsMonthly": 0,
          "countryRank": 0,
          "avgDurationSeconds": 0,
          "history": [
            {
              "value": 0,
              "dateFrom": "string",
              "dateTo": "string"
            }
          ]
        },
        "research": {
          "worksCount": 0,
          "citationCount": 0,
          "areas": [
            "string"
          ],
          "notableWorks": [
            {
              "title": "string",
              "year": 0,
              "venue": "string",
              "citationCount": 0,
              "doi": "string",
              "id": "string",
              "type": "article"
            }
          ],
          "topResearchers": [
            {
              "person": {
                "name": "string",
                "id": "string"
              },
              "worksCount": 0,
              "citationCount": 0
            }
          ]
        }
      }
    }
  ],
  "extras": {
    "links": [
      "string"
    ],
    "imageLinks": [
      "string"
    ],
    "richImageLinks": [
      {
        "url": "string",
        "alt": "string"
      }
    ],
    "richLinks": [
      {
        "url": "string",
        "anchor": "string"
      }
    ],
    "codeBlocks": [
      {
        "text": "string",
        "source": "string"
      }
    ]
  },
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|The title of the search result.|
|url|string(uri)|true|none|The URL of the search result.|
|publishedDate|string(date-time)|false|none|An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.|
|author|string \| null|false|none|If available, the author of the content.|
|id|string|false|none|The temporary ID for the document. Useful for the /contents endpoint.|
|image|string(uri)|false|none|The URL of an image associated with the search result, if available.|
|favicon|string(uri)|false|none|The URL of the favicon for the search result's domain.|
|text|string|false|none|The full content text of the search result.|
|highlights|[string]|false|none|Array of highlights extracted from the search result content.|
|highlightScores|[number(float)]|false|none|Array of cosine similarity scores for each highlighted snippet.|
|summary|string|false|none|Summary of the webpage.|
|subpages|[object]|false|none|Array of subpages for the search result.|
|entities|[object]|false|none|Structured entity data for company, person, publication, or product search results. Returned for supported entity-backed categories and for product listing pages.|
|extras|object|false|none|Results from extras. Each field is returned only when requested via contents.extras.|
|score|number(float)|false|none|Similarity score between the source url and the result. Higher values mean more similar; the scale is not normalized, so compare scores only within a single response.|

<h2 id="tocS_CreateSearchMonitorResponse">CreateSearchMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesearchmonitorresponse"></a>
<a id="schema_CreateSearchMonitorResponse"></a>
<a id="tocScreatesearchmonitorresponse"></a>
<a id="tocscreatesearchmonitorresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "webhookSecret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the monitor|
|name|string \| null|true|none|An optional display name|
|status|string|true|none|The status of the monitor. `active` monitors run on schedule and can be triggered manually. `paused` monitors can only be triggered manually. `disabled` monitors are auto-disabled after 10 consecutive authentication failures.|
|search|[SearchMonitorSearchOutput](#schemasearchmonitorsearchoutput)|true|none|none|
|trigger|[SearchMonitorTriggerOutput](#schemasearchmonitortriggeroutput) \| null|true|none|The interval-based schedule for automatic runs. Null if no schedule is set.|
|outputSchema|[SearchMonitorOutputSchemaOutput](#schemasearchmonitoroutputschemaoutput)|true|none|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|metadata|object \| null|true|none|Optional key-value metadata for your own tracking. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|webhook|[SearchMonitorWebhookOutput](#schemasearchmonitorwebhookoutput)|true|none|none|
|nextRunAt|string(date-time) \| null(date-time)|true|none|When the next scheduled run will occur. Null if no trigger is set.|
|createdAt|string(date-time)|true|none|When the monitor was created|
|updatedAt|string(date-time)|true|none|When the monitor was last updated|
|webhookSecret|string|true|none|The secret used to verify webhook signatures. This is only returned once at creation time. Store it securely.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|
|status|disabled|

<h2 id="tocS_ListSearchMonitorsResponse">ListSearchMonitorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsearchmonitorsresponse"></a>
<a id="schema_ListSearchMonitorsResponse"></a>
<a id="tocSlistsearchmonitorsresponse"></a>
<a id="tocslistsearchmonitorsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "active",
      "search": {
        "query": "string",
        "numResults": 10,
        "includeDomains": [
          "string"
        ],
        "excludeDomains": [
          "string"
        ],
        "contents": {
          "text": false,
          "highlights": false,
          "summary": true,
          "extras": {
            "links": 0,
            "imageLinks": 0,
            "richImageLinks": 0,
            "richLinks": 0,
            "codeBlocks": 0
          },
          "livecrawl": "never",
          "livecrawlTimeout": 10000,
          "maxAgeHours": -1,
          "filterEmptyResults": true,
          "subpages": 0,
          "subpageTarget": "string",
          "context": true
        }
      },
      "trigger": {
        "type": "interval",
        "period": "string"
      },
      "outputSchema": {
        "type": "text",
        "description": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "webhook": {
        "url": "http://example.com",
        "events": [
          "monitor.created"
        ]
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchMonitor](#schemasearchmonitor)]|true|none|The list of monitors|
|hasMore|boolean|true|none|Whether there are more results|
|nextCursor|string \| null|false|none|Cursor for the next page|

<h2 id="tocS_SearchMonitor">SearchMonitor</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitor"></a>
<a id="schema_SearchMonitor"></a>
<a id="tocSsearchmonitor"></a>
<a id="tocssearchmonitor"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "active",
  "search": {
    "query": "string",
    "numResults": 10,
    "includeDomains": [
      "string"
    ],
    "excludeDomains": [
      "string"
    ],
    "contents": {
      "text": false,
      "highlights": false,
      "summary": true,
      "extras": {
        "links": 0,
        "imageLinks": 0,
        "richImageLinks": 0,
        "richLinks": 0,
        "codeBlocks": 0
      },
      "livecrawl": "never",
      "livecrawlTimeout": 10000,
      "maxAgeHours": -1,
      "filterEmptyResults": true,
      "subpages": 0,
      "subpageTarget": "string",
      "context": true
    }
  },
  "trigger": {
    "type": "interval",
    "period": "string"
  },
  "outputSchema": {
    "type": "text",
    "description": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "webhook": {
    "url": "http://example.com",
    "events": [
      "monitor.created"
    ]
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the monitor|
|name|string \| null|true|none|An optional display name|
|status|string|true|none|The status of the monitor. `active` monitors run on schedule and can be triggered manually. `paused` monitors can only be triggered manually. `disabled` monitors are auto-disabled after 10 consecutive authentication failures.|
|search|[SearchMonitorSearchOutput](#schemasearchmonitorsearchoutput)|true|none|none|
|trigger|[SearchMonitorTriggerOutput](#schemasearchmonitortriggeroutput) \| null|true|none|The interval-based schedule for automatic runs. Null if no schedule is set.|
|outputSchema|[SearchMonitorOutputSchemaOutput](#schemasearchmonitoroutputschemaoutput)|true|none|Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.|
|metadata|object \| null|true|none|Optional key-value metadata for your own tracking. Echoed back in webhook deliveries so you can route updates to systems like Slack.|
|webhook|[SearchMonitorWebhookOutput](#schemasearchmonitorwebhookoutput)|true|none|none|
|nextRunAt|string(date-time) \| null(date-time)|true|none|When the next scheduled run will occur. Null if no trigger is set.|
|createdAt|string(date-time)|true|none|When the monitor was created|
|updatedAt|string(date-time)|true|none|When the monitor was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|
|status|disabled|

<h2 id="tocS_BatchMonitorsResponse">BatchMonitorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchmonitorsresponse"></a>
<a id="schema_BatchMonitorsResponse"></a>
<a id="tocSbatchmonitorsresponse"></a>
<a id="tocsbatchmonitorsresponse"></a>

```json
{
  "action": "delete",
  "affected": 0,
  "ids": [
    "string"
  ],
  "dry_run": true,
  "has_more": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action that was performed|
|affected|integer|true|none|The number of monitors affected by the action|
|ids|[string]|true|none|The IDs of the monitors that were affected|
|dry_run|boolean|true|none|Whether this was a dry run|
|has_more|boolean|true|none|Whether there are more monitors matching the filter. If `true`, repeat the request to process the next batch.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|delete|
|action|pause|
|action|unpause|

<h2 id="tocS_TriggerSearchMonitorResponse">TriggerSearchMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schematriggersearchmonitorresponse"></a>
<a id="schema_TriggerSearchMonitorResponse"></a>
<a id="tocStriggersearchmonitorresponse"></a>
<a id="tocstriggersearchmonitorresponse"></a>

```json
{
  "triggered": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggered|boolean|true|none|Whether the monitor was successfully triggered|

<h2 id="tocS_ListSearchMonitorRunsResponse">ListSearchMonitorRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsearchmonitorrunsresponse"></a>
<a id="schema_ListSearchMonitorRunsResponse"></a>
<a id="tocSlistsearchmonitorrunsresponse"></a>
<a id="tocslistsearchmonitorrunsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "monitorId": "string",
      "status": "pending",
      "output": {
        "results": [
          {
            "property1": true,
            "property2": true
          }
        ],
        "content": true,
        "grounding": [
          {
            "field": "string",
            "citations": [
              {
                "url": "http://example.com",
                "title": "string"
              }
            ],
            "confidence": "low"
          }
        ]
      },
      "failReason": "api_key_invalid",
      "startedAt": "1970-01-01T00:00:00Z",
      "completedAt": "1970-01-01T00:00:00Z",
      "failedAt": "1970-01-01T00:00:00Z",
      "cancelledAt": "1970-01-01T00:00:00Z",
      "durationMs": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchMonitorRun](#schemasearchmonitorrun)]|true|none|The list of runs|
|hasMore|boolean|true|none|Whether there are more results|
|nextCursor|string \| null|false|none|Cursor for the next page|

<h2 id="tocS_SearchMonitorRun">SearchMonitorRun</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorrun"></a>
<a id="schema_SearchMonitorRun"></a>
<a id="tocSsearchmonitorrun"></a>
<a id="tocssearchmonitorrun"></a>

```json
{
  "id": "string",
  "monitorId": "string",
  "status": "pending",
  "output": {
    "results": [
      {
        "property1": true,
        "property2": true
      }
    ],
    "content": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "failReason": "api_key_invalid",
  "startedAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "failedAt": "1970-01-01T00:00:00Z",
  "cancelledAt": "1970-01-01T00:00:00Z",
  "durationMs": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the run|
|monitorId|string|true|none|The monitor this run belongs to|
|status|string|true|none|The status of the run|
|output|[SearchMonitorRunOutput](#schemasearchmonitorrunoutput) \| null|true|none|The output of the run. Null until the run completes.|
|failReason|string \| null|true|none|The reason the run failed. Null unless status is `failed`. `source_not_available` means the search requested a domain Exa cannot return (remove it from the search), and `forbidden` means the request was otherwise not permitted.|
|startedAt|string(date-time) \| null(date-time)|true|none|When the run started executing|
|completedAt|string(date-time) \| null(date-time)|true|none|When the run completed successfully|
|failedAt|string(date-time) \| null(date-time)|true|none|When the run failed|
|cancelledAt|string(date-time) \| null(date-time)|true|none|When the run was cancelled|
|durationMs|integer \| null|true|none|Total execution time in milliseconds|
|createdAt|string(date-time)|true|none|When the run was created|
|updatedAt|string(date-time)|true|none|When the run was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|running|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_SearchMonitorRunOutput">SearchMonitorRunOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorrunoutput"></a>
<a id="schema_SearchMonitorRunOutput"></a>
<a id="tocSsearchmonitorrunoutput"></a>
<a id="tocssearchmonitorrunoutput"></a>

```json
{
  "results": [
    {
      "property1": true,
      "property2": true
    }
  ],
  "content": true,
  "grounding": [
    {
      "field": "string",
      "citations": [
        {
          "url": "http://example.com",
          "title": "string"
        }
      ],
      "confidence": "low"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object] \| null|false|none|The search results|
|content|[JsonValue](#schemajsonvalue) \| null|false|none|Synthesized content from the search results. Shape depends on `outputSchema.type`.|
|grounding|[object] \| null|false|none|Field-level citations with confidence levels|

<h2 id="tocS_AgentRun">AgentRun</h2>
<!-- backwards compatibility -->
<a id="schemaagentrun"></a>
<a id="schema_AgentRun"></a>
<a id="tocSagentrun"></a>
<a id="tocsagentrun"></a>

```json
{
  "id": "string",
  "object": "agent_run",
  "status": "queued",
  "stopReason": "schema_satisfied",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "request": {
    "query": "string",
    "systemPrompt": "string",
    "effort": "auto",
    "input": {
      "data": [
        {
          "property1": true,
          "property2": true
        }
      ],
      "exclusion": [
        {
          "property1": true,
          "property2": true
        }
      ]
    },
    "outputSchema": {
      "property1": true,
      "property2": true
    },
    "previousRunId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "dataSources": [
      {
        "provider": "string"
      }
    ],
    "budget": {
      "maxCostDollars": 0,
      "maxDurationSeconds": 0
    },
    "property1": true,
    "property2": true
  },
  "output": {
    "text": "string",
    "structured": true,
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "usage": {
    "agentComputeUnits": 0,
    "searches": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  },
  "costDollars": {
    "total": 0,
    "agentCompute": 0,
    "search": 0,
    "emails": 0,
    "phoneNumbers": 0,
    "dataSources": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentRunId](#schemaagentrunid)|true|none|Agent run ID. New run IDs are returned with the `agent_run_` prefix.|
|object|string|true|none|none|
|status|[AgentRunStatus](#schemaagentrunstatus)|true|none|none|
|stopReason|[AgentStopReason](#schemaagentstopreason) \| null|true|none|Why the run stopped. `null` while the run is queued or running. Every reason except `error` and `cancelled` means the run completed and returned what it found. Clients should accept values not listed here.|
|createdAt|string(date-time)|true|none|When the run was created|
|completedAt|string(date-time) \| null(date-time)|true|none|none|
|request|[AgentRunRequest](#schemaagentrunrequest) \| null|true|none|none|
|output|[AgentRunOutput](#schemaagentrunoutput)|true|none|none|
|usage|[AgentUsage](#schemaagentusage)|true|none|Billed usage for the run. When an `auto` or `ultra` run's metered cost exceeds `budget.maxCostDollars`, the run is billed the budget and each quantity except `dataSources` is scaled down in proportion, so quantities can be fractional.|
|costDollars|[AgentCostDollars](#schemaagentcostdollars)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|running|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_AgentRunStatus">AgentRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunstatus"></a>
<a id="schema_AgentRunStatus"></a>
<a id="tocSagentrunstatus"></a>
<a id="tocsagentrunstatus"></a>

```json
"queued"
```

<h2 id="tocS_AgentStopReason">AgentStopReason</h2>
<!-- backwards compatibility -->
<a id="schemaagentstopreason"></a>
<a id="schema_AgentStopReason"></a>
<a id="tocSagentstopreason"></a>
<a id="tocsagentstopreason"></a>

```json
"schema_satisfied"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|The agent finished the task.|
|*anyOf*|string|false|none|The run reached `budget.maxCostDollars`.|
|*anyOf*|string|false|none|The run reached `budget.maxDurationSeconds`.|
|*anyOf*|string|false|none|The run reached its maximum number of agent steps.|
|*anyOf*|string|false|none|The run reached its limit on model tokens.|
|*anyOf*|string|false|none|You stopped the run.|
|*anyOf*|string|false|none|The run failed.|
|*anyOf*|string|false|none|The run was cancelled.|
|*anyOf*|string|false|none|none|

<h2 id="tocS_AgentRunRequest">AgentRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunrequest"></a>
<a id="schema_AgentRunRequest"></a>
<a id="tocSagentrunrequest"></a>
<a id="tocsagentrunrequest"></a>

```json
{
  "query": "string",
  "systemPrompt": "string",
  "effort": "auto",
  "input": {
    "data": [
      {
        "property1": true,
        "property2": true
      }
    ],
    "exclusion": [
      {
        "property1": true,
        "property2": true
      }
    ]
  },
  "outputSchema": {
    "property1": true,
    "property2": true
  },
  "previousRunId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "dataSources": [
    {
      "provider": "string"
    }
  ],
  "budget": {
    "maxCostDollars": 0,
    "maxDurationSeconds": 0
  },
  "property1": true,
  "property2": true
}
```

Canonicalized request fields stored with the run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Natural-language question or instructions for the request.|
|systemPrompt|string|false|none|Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.|
|effort|[AgentEffort](#schemaagenteffort)|false|none|Cost and reasoning effort preference for the run. `auto` lets Exa choose the appropriate effort. `ultra` is the highest-effort tier for work where completeness and thoroughness matter more than latency or cost, including large list building, deep multi-source research, and criteria that are hard to verify.|
|input|object|false|none|none|
|outputSchema|object \| null|false|none|none|
|previousRunId|[AgentRunId](#schemaagentrunid)|false|none|Agent run ID. New run IDs are returned with the `agent_run_` prefix.|
|metadata|object|false|none|Caller-provided key-value metadata for your own tracking.|
|dataSources|[[AgentDataSourceOutput](#schemaagentdatasourceoutput)]|false|none|Exa Connect data providers configured for the run.|
|budget|[AgentBudgetOutput](#schemaagentbudgetoutput)|false|none|Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.|
|**additionalProperties**|[JsonValue](#schemajsonvalue)|false|none|Any JSON value.|

#### Enumerated Values

|Property|Value|
|---|---|
|effort|minimal|
|effort|low|
|effort|medium|
|effort|high|
|effort|xhigh|
|effort|auto|
|effort|ultra|

<h2 id="tocS_AgentRunOutput">AgentRunOutput</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunoutput"></a>
<a id="schema_AgentRunOutput"></a>
<a id="tocSagentrunoutput"></a>
<a id="tocsagentrunoutput"></a>

```json
{
  "text": "string",
  "structured": true,
  "grounding": [
    {
      "field": "string",
      "citations": [
        {
          "url": "http://example.com",
          "title": "string"
        }
      ],
      "confidence": "low"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Natural-language answer or summary.|
|structured|[JsonValue](#schemajsonvalue) \| null|true|none|JSON shaped by `outputSchema`; fields unsupported by evidence may be `null`. `null` when no schema was provided.|
|grounding|[[AgentGrounding](#schemaagentgrounding)]|true|none|Field-level citations emitted by the run.|

<h2 id="tocS_AgentGrounding">AgentGrounding</h2>
<!-- backwards compatibility -->
<a id="schemaagentgrounding"></a>
<a id="schema_AgentGrounding"></a>
<a id="tocSagentgrounding"></a>
<a id="tocsagentgrounding"></a>

```json
{
  "field": "string",
  "citations": [
    {
      "url": "http://example.com",
      "title": "string"
    }
  ],
  "confidence": "low"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Output field the citations support.|
|citations|[[AgentCitation](#schemaagentcitation)]|true|none|none|
|confidence|string \| null|false|none|none|

<h2 id="tocS_AgentCitation">AgentCitation</h2>
<!-- backwards compatibility -->
<a id="schemaagentcitation"></a>
<a id="schema_AgentCitation"></a>
<a id="tocSagentcitation"></a>
<a id="tocsagentcitation"></a>

```json
{
  "url": "http://example.com",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|Source URL.|
|title|string|false|none|Source title.|

<h2 id="tocS_AgentUsage">AgentUsage</h2>
<!-- backwards compatibility -->
<a id="schemaagentusage"></a>
<a id="schema_AgentUsage"></a>
<a id="tocSagentusage"></a>
<a id="tocsagentusage"></a>

```json
{
  "agentComputeUnits": 0,
  "searches": 0,
  "emails": 0,
  "phoneNumbers": 0,
  "dataSources": {
    "property1": 0,
    "property2": 0
  }
}
```

Billed usage for the run. When an `auto` or `ultra` run's metered cost exceeds `budget.maxCostDollars`, the run is billed the budget and each quantity except `dataSources` is scaled down in proportion, so quantities can be fractional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentComputeUnits|number|true|none|none|
|searches|number|true|none|none|
|emails|number|true|none|none|
|phoneNumbers|number|true|none|none|
|dataSources|[AgentDataSourceUsage](#schemaagentdatasourceusage)|false|none|Per-provider tool call counts for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.|

<h2 id="tocS_AgentDataSourceUsage">AgentDataSourceUsage</h2>
<!-- backwards compatibility -->
<a id="schemaagentdatasourceusage"></a>
<a id="schema_AgentDataSourceUsage"></a>
<a id="tocSagentdatasourceusage"></a>
<a id="tocsagentdatasourceusage"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

Per-provider tool call counts for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer|false|none|none|

<h2 id="tocS_AgentCostDollars">AgentCostDollars</h2>
<!-- backwards compatibility -->
<a id="schemaagentcostdollars"></a>
<a id="schema_AgentCostDollars"></a>
<a id="tocSagentcostdollars"></a>
<a id="tocsagentcostdollars"></a>

```json
{
  "total": 0,
  "agentCompute": 0,
  "search": 0,
  "emails": 0,
  "phoneNumbers": 0,
  "dataSources": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|true|none|none|
|agentCompute|number|true|none|none|
|search|number|true|none|none|
|emails|number|true|none|none|
|phoneNumbers|number|true|none|none|
|dataSources|[AgentDataSourceCost](#schemaagentdatasourcecost)|false|none|Per-provider cost in dollars for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.|

<h2 id="tocS_AgentDataSourceCost">AgentDataSourceCost</h2>
<!-- backwards compatibility -->
<a id="schemaagentdatasourcecost"></a>
<a id="schema_AgentDataSourceCost"></a>
<a id="tocSagentdatasourcecost"></a>
<a id="tocsagentdatasourcecost"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

Per-provider cost in dollars for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number|false|none|none|

<h2 id="tocS_AgentErrorResponse">AgentErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagenterrorresponse"></a>
<a id="schema_AgentErrorResponse"></a>
<a id="tocSagenterrorresponse"></a>
<a id="tocsagenterrorresponse"></a>

```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "code": "INVALID_REQUEST",
    "message": "string",
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[AgentError](#schemaagenterror)|true|none|none|

<h2 id="tocS_AgentError">AgentError</h2>
<!-- backwards compatibility -->
<a id="schemaagenterror"></a>
<a id="schema_AgentError"></a>
<a id="tocSagenterror"></a>
<a id="tocsagenterror"></a>

```json
{
  "type": "INVALID_REQUEST",
  "code": "INVALID_REQUEST",
  "message": "string",
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|code|string|true|none|none|
|message|string|true|none|none|
|**additionalProperties**|[JsonValue](#schemajsonvalue)|false|none|Any JSON value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INVALID_REQUEST|
|type|AUTHENTICATION_ERROR|
|type|RATE_LIMIT_ERROR|
|type|NOT_FOUND|
|type|SERVER_ERROR|
|code|INVALID_REQUEST|
|code|TEAM_NOT_FOUND|
|code|RUN_NOT_FOUND|
|code|PREVIOUS_RUN_NOT_FOUND|
|code|PREVIOUS_RUN_NOT_COMPLETED|
|code|CONCURRENCY_LIMIT_REACHED|
|code|INVALID_OUTPUT_SCHEMA|
|code|INVALID_DATA_SOURCE|
|code|TIMEOUT|
|code|SERVER_ERROR|

<h2 id="tocS_AgentRunList">AgentRunList</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunlist"></a>
<a id="schema_AgentRunList"></a>
<a id="tocSagentrunlist"></a>
<a id="tocsagentrunlist"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "object": "agent_run",
      "status": "queued",
      "stopReason": "schema_satisfied",
      "createdAt": "1970-01-01T00:00:00Z",
      "completedAt": "1970-01-01T00:00:00Z",
      "request": {
        "query": "string",
        "systemPrompt": "string",
        "effort": "auto",
        "input": {
          "data": [
            {
              "property1": true,
              "property2": true
            }
          ],
          "exclusion": [
            {
              "property1": true,
              "property2": true
            }
          ]
        },
        "outputSchema": {
          "property1": true,
          "property2": true
        },
        "previousRunId": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "dataSources": [
          {
            "provider": "string"
          }
        ],
        "budget": {
          "maxCostDollars": 0,
          "maxDurationSeconds": 0
        },
        "property1": true,
        "property2": true
      },
      "output": {
        "text": "string",
        "structured": true,
        "grounding": [
          {
            "field": "string",
            "citations": [
              {
                "url": "http://example.com",
                "title": "string"
              }
            ],
            "confidence": "low"
          }
        ]
      },
      "usage": {
        "agentComputeUnits": 0,
        "searches": 0,
        "emails": 0,
        "phoneNumbers": 0,
        "dataSources": {
          "property1": 0,
          "property2": 0
        }
      },
      "costDollars": {
        "total": 0,
        "agentCompute": 0,
        "search": 0,
        "emails": 0,
        "phoneNumbers": 0,
        "dataSources": {
          "property1": 0,
          "property2": 0
        }
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|none|
|data|[[AgentRun](#schemaagentrun)]|true|none|none|
|hasMore|boolean|true|none|Whether there are more results|
|nextCursor|[AgentRunId](#schemaagentrunid) \| null|true|none|none|

<h2 id="tocS_DeleteAgentRunResponse">DeleteAgentRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagentrunresponse"></a>
<a id="schema_DeleteAgentRunResponse"></a>
<a id="tocSdeleteagentrunresponse"></a>
<a id="tocsdeleteagentrunresponse"></a>

```json
{
  "id": "string",
  "object": "agent_run.deleted",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentRunId](#schemaagentrunid)|true|none|Agent run ID. New run IDs are returned with the `agent_run_` prefix.|
|object|string|true|none|none|
|deleted|boolean|true|none|none|

<h2 id="tocS_AgentRunEventList">AgentRunEventList</h2>
<!-- backwards compatibility -->
<a id="schemaagentruneventlist"></a>
<a id="schema_AgentRunEventList"></a>
<a id="tocSagentruneventlist"></a>
<a id="tocsagentruneventlist"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "event": "agent_run.created",
      "data": true,
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|none|
|data|[[AgentRunEvent](#schemaagentrunevent)]|true|none|none|
|hasMore|boolean|true|none|Whether there are more results|
|nextCursor|string \| null|true|none|none|

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "id": "string",
  "object": "batch",
  "status": "in_progress",
  "requestCounts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "endedAt": "1970-01-01T00:00:00Z",
  "resultsUrl": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Batch ID. New batch IDs are returned with the `batch_` prefix.|
|object|string|true|none|The object type, always `batch`.|
|status|[BatchStatus](#schemabatchstatus)|true|none|Lifecycle status of the batch.|
|requestCounts|[BatchRequestCounts](#schemabatchrequestcounts)|true|none|none|
|createdAt|string(date-time)|true|none|When the batch was created.|
|expiresAt|string(date-time) \| null(date-time)|true|none|When the batch expires, or `null` if it does not expire.|
|endedAt|string(date-time) \| null(date-time)|true|none|When the batch reached a terminal status, or `null` while it is still running.|
|resultsUrl|string \| null|true|none|Short-lived download URL for the batch results file (JSONL), or `null` until the batch completes. Fetch it directly, without an API key. Retrieve the batch again for a fresh URL after it expires.|
|metadata|object|true|none|Caller-provided key-value metadata for your own tracking.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|in_progress|
|status|completed|
|status|cancelling|
|status|cancelled|
|status|expired|

<h2 id="tocS_BatchStatus">BatchStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatus"></a>
<a id="schema_BatchStatus"></a>
<a id="tocSbatchstatus"></a>
<a id="tocsbatchstatus"></a>

```json
"in_progress"
```

Lifecycle status of the batch.

<h2 id="tocS_BatchRequestCounts">BatchRequestCounts</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequestcounts"></a>
<a id="schema_BatchRequestCounts"></a>
<a id="tocSbatchrequestcounts"></a>
<a id="tocsbatchrequestcounts"></a>

```json
{
  "total": 0,
  "completed": 0,
  "failed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|Total requests in the batch.|
|completed|integer|true|none|Requests that have completed successfully.|
|failed|integer|true|none|Requests that have failed.|

<h2 id="tocS_BatchList">BatchList</h2>
<!-- backwards compatibility -->
<a id="schemabatchlist"></a>
<a id="schema_BatchList"></a>
<a id="tocSbatchlist"></a>
<a id="tocsbatchlist"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "object": "batch",
      "status": "in_progress",
      "requestCounts": {
        "total": 0,
        "completed": 0,
        "failed": 0
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "endedAt": "1970-01-01T00:00:00Z",
      "resultsUrl": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type, always `list`.|
|data|[[Batch](#schemabatch)]|true|none|The page of batches, newest first.|
|hasMore|boolean|true|none|Whether there are more results|
|nextCursor|string \| null|true|none|Cursor for the next page|

<h2 id="tocS_DeletedBatch">DeletedBatch</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbatch"></a>
<a id="schema_DeletedBatch"></a>
<a id="tocSdeletedbatch"></a>
<a id="tocsdeletedbatch"></a>

```json
{
  "id": "string",
  "object": "batch.deleted",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the deleted batch.|
|object|string|true|none|The object type, always `batch.deleted`.|
|deleted|boolean|true|none|Always `true` for a successful delete.|

<h2 id="tocS_WebsetsTeamInfo">WebsetsTeamInfo</h2>
<!-- backwards compatibility -->
<a id="schemawebsetsteaminfo"></a>
<a id="schema_WebsetsTeamInfo"></a>
<a id="tocSwebsetsteaminfo"></a>
<a id="tocswebsetsteaminfo"></a>

```json
{
  "object": "team",
  "id": "string",
  "name": "string",
  "concurrency": {
    "active": 0,
    "queued": 0
  },
  "limits": {
    "maxConcurrent": 0,
    "maxQueued": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type, always `"team"`.|
|id|string|true|none|Unique identifier for the team.|
|name|string|true|none|Name of the team.|
|concurrency|object|true|none|Current concurrency usage.|
|limits|object|true|none|Concurrency limits for the team.|

<h2 id="tocS_AnswerStreamChunk">AnswerStreamChunk</h2>
<!-- backwards compatibility -->
<a id="schemaanswerstreamchunk"></a>
<a id="schema_AnswerStreamChunk"></a>
<a id="tocSanswerstreamchunk"></a>
<a id="tocsanswerstreamchunk"></a>

```json
{
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "refusal": "string",
        "property1": true,
        "property2": true
      },
      "finish_reason": "string",
      "property1": true,
      "property2": true
    }
  ],
  "property1": true,
  "property2": true
}
```

Schema for each JSON payload emitted in an `/answer` server-sent event stream. Each event is emitted as `data: <json>`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AnswerStreamTextDeltaChunk](#schemaanswerstreamtextdeltachunk)|false|none|none|
|*oneOf*|[AnswerStreamCitationsChunkOutput](#schemaanswerstreamcitationschunkoutput)|false|none|none|
|*oneOf*|[AnswerStreamCostChunkOutput](#schemaanswerstreamcostchunkoutput)|false|none|none|
|*oneOf*|[AnswerStreamErrorChunkOutput](#schemaanswerstreamerrorchunkoutput)|false|none|none|

<h2 id="tocS_SearchStreamChunk">SearchStreamChunk</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamchunk"></a>
<a id="schema_SearchStreamChunk"></a>
<a id="tocSsearchstreamchunk"></a>
<a id="tocssearchstreamchunk"></a>

```json
{
  "requestId": "string",
  "type": "text-delta",
  "delta": "string",
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string",
            "id": "string"
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}
```

Schema for each JSON payload emitted in a `/search` server-sent event stream. Each event is emitted as `data: <json>` and the stream terminates with `data: [DONE]`, which is not represented by this JSON schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SearchStreamTextDeltaChunkOutput](#schemasearchstreamtextdeltachunkoutput)|false|none|none|
|*oneOf*|[SearchStreamGroundingChunkOutput](#schemasearchstreamgroundingchunkoutput)|false|none|none|
|*oneOf*|[SearchStreamResultsChunkOutput](#schemasearchstreamresultschunkoutput)|false|none|none|
|*oneOf*|[SearchStreamResetChunkOutput](#schemasearchstreamresetchunkoutput)|false|none|none|
|*oneOf*|[SearchStreamDoneChunkOutput](#schemasearchstreamdonechunkoutput)|false|none|none|
|*oneOf*|[SearchStreamErrorChunkOutput](#schemasearchstreamerrorchunkoutput)|false|none|none|

<h2 id="tocS_AgentRunEvent">AgentRunEvent</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunevent"></a>
<a id="schema_AgentRunEvent"></a>
<a id="tocSagentrunevent"></a>
<a id="tocsagentrunevent"></a>

```json
{
  "id": "string",
  "event": "agent_run.created",
  "data": true,
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Event ID within the run.|
|event|string|true|none|none|
|data|[JsonValue](#schemajsonvalue)|true|none|Any JSON value.|
|createdAt|string(date-time)|true|none|When the event was created|

#### Enumerated Values

|Property|Value|
|---|---|
|event|agent_run.created|
|event|agent_run.started|
|event|agent_run.completed|
|event|agent_run.failed|
|event|agent_run.cancelled|

<h2 id="tocS_SearchResultOutput">SearchResultOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultoutput"></a>
<a id="schema_SearchResultOutput"></a>
<a id="tocSsearchresultoutput"></a>
<a id="tocssearchresultoutput"></a>

```json
{
  "title": "string",
  "url": "http://example.com",
  "publishedDate": "1970-01-01T00:00:00Z",
  "author": "string",
  "id": "string",
  "image": "http://example.com",
  "favicon": "http://example.com",
  "text": "string",
  "highlights": [
    "string"
  ],
  "highlightScores": [
    0
  ],
  "summary": "string",
  "subpages": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com"
    }
  ],
  "entities": [
    {
      "id": "string",
      "type": "company",
      "version": 1,
      "properties": {
        "name": "string",
        "foundedYear": 0,
        "description": "string",
        "workforce": {
          "total": 0
        },
        "headquarters": {
          "address": "string",
          "city": "string",
          "postalCode": "string",
          "country": "string"
        },
        "financials": {
          "revenueAnnual": 0,
          "fundingTotal": 0,
          "fundingLatestRound": {
            "name": "string",
            "date": "string",
            "amount": 0
          }
        },
        "webTraffic": {
          "visitsMonthly": 0,
          "countryRank": 0,
          "avgDurationSeconds": 0,
          "history": [
            {
              "value": 0,
              "dateFrom": "string",
              "dateTo": "string"
            }
          ]
        },
        "research": {
          "worksCount": 0,
          "citationCount": 0,
          "areas": [
            "string"
          ],
          "notableWorks": [
            {
              "title": "string",
              "year": 0,
              "venue": "string",
              "citationCount": 0,
              "doi": "string",
              "id": "string",
              "type": "article"
            }
          ],
          "topResearchers": [
            {
              "person": {
                "name": "string",
                "id": "string"
              },
              "worksCount": 0,
              "citationCount": 0
            }
          ]
        }
      }
    }
  ],
  "extras": {
    "links": [
      "string"
    ],
    "imageLinks": [
      "string"
    ],
    "richImageLinks": [
      {
        "url": "string",
        "alt": "string"
      }
    ],
    "richLinks": [
      {
        "url": "string",
        "anchor": "string"
      }
    ],
    "codeBlocks": [
      {
        "text": "string",
        "source": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|The title of the search result.|
|url|string(uri)|true|none|The URL of the search result.|
|publishedDate|string(date-time)|false|none|An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.|
|author|string \| null|false|none|If available, the author of the content.|
|id|string|false|none|The temporary ID for the document. Useful for the /contents endpoint.|
|image|string(uri)|false|none|The URL of an image associated with the search result, if available.|
|favicon|string(uri)|false|none|The URL of the favicon for the search result's domain.|
|text|string|false|none|The full content text of the search result.|
|highlights|[string]|false|none|Array of highlights extracted from the search result content.|
|highlightScores|[number(float)]|false|none|Array of cosine similarity scores for each highlighted snippet.|
|summary|string|false|none|Summary of the webpage.|
|subpages|[object]|false|none|Array of subpages for the search result.|
|entities|[object]|false|none|Structured entity data for company, person, publication, or product search results. Returned for supported entity-backed categories and for product listing pages.|
|extras|object|false|none|Results from extras. Each field is returned only when requested via contents.extras.|

<h2 id="tocS_SearchCompanyEntityOutput">SearchCompanyEntityOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchcompanyentityoutput"></a>
<a id="schema_SearchCompanyEntityOutput"></a>
<a id="tocSsearchcompanyentityoutput"></a>
<a id="tocssearchcompanyentityoutput"></a>

```json
{
  "id": "string",
  "type": "company",
  "version": 1,
  "properties": {
    "name": "string",
    "foundedYear": 0,
    "description": "string",
    "workforce": {
      "total": 0
    },
    "headquarters": {
      "address": "string",
      "city": "string",
      "postalCode": "string",
      "country": "string"
    },
    "financials": {
      "revenueAnnual": 0,
      "fundingTotal": 0,
      "fundingLatestRound": {
        "name": "string",
        "date": "string",
        "amount": 0
      }
    },
    "webTraffic": {
      "visitsMonthly": 0,
      "countryRank": 0,
      "avgDurationSeconds": 0,
      "history": [
        {
          "value": 0,
          "dateFrom": "string",
          "dateTo": "string"
        }
      ]
    },
    "research": {
      "worksCount": 0,
      "citationCount": 0,
      "areas": [
        "string"
      ],
      "notableWorks": [
        {
          "title": "string",
          "year": 0,
          "venue": "string",
          "citationCount": 0,
          "doi": "string",
          "id": "string",
          "type": "article"
        }
      ],
      "topResearchers": [
        {
          "person": {
            "name": "string",
            "id": "string"
          },
          "worksCount": 0,
          "citationCount": 0
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable company entity identifier.|
|type|string|true|none|Entity discriminator.|
|version|integer|true|none|Entity schema version.|
|properties|object|true|none|Company-specific entity fields.|

<h2 id="tocS_SearchPersonEntityOutput">SearchPersonEntityOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchpersonentityoutput"></a>
<a id="schema_SearchPersonEntityOutput"></a>
<a id="tocSsearchpersonentityoutput"></a>
<a id="tocssearchpersonentityoutput"></a>

```json
{
  "id": "string",
  "type": "person",
  "version": 1,
  "properties": {
    "name": "string",
    "firstName": "string",
    "lastName": "string",
    "location": "string",
    "workHistory": [
      {
        "title": "string",
        "location": "string",
        "dates": {
          "from": "string",
          "to": "string"
        },
        "company": {
          "id": "string",
          "name": "string"
        }
      }
    ],
    "educationHistory": [
      {
        "degree": "string",
        "dates": {
          "from": "string",
          "to": "string"
        },
        "institution": {
          "id": "string",
          "name": "string"
        }
      }
    ],
    "research": {
      "worksCount": 0,
      "citationCount": 0,
      "hIndex": 0,
      "firstPublicationYear": 0,
      "latestPublicationYear": 0,
      "areas": [
        "string"
      ],
      "notableWorks": [
        {
          "title": "string",
          "year": 0,
          "venue": "string",
          "citationCount": 0,
          "doi": "string",
          "id": "string",
          "type": "article"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable person entity identifier.|
|type|string|true|none|Entity discriminator.|
|version|integer|true|none|Entity schema version.|
|properties|object|true|none|Person-specific entity fields.|

<h2 id="tocS_SearchPublicationEntityOutput">SearchPublicationEntityOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchpublicationentityoutput"></a>
<a id="schema_SearchPublicationEntityOutput"></a>
<a id="tocSsearchpublicationentityoutput"></a>
<a id="tocssearchpublicationentityoutput"></a>

```json
{
  "id": "string",
  "type": "publication",
  "version": 1,
  "properties": {
    "title": "string",
    "year": 0,
    "date": "string",
    "type": "article",
    "language": "string",
    "citationCount": 0,
    "authors": [
      {
        "name": "string",
        "id": "string"
      }
    ],
    "referenceCount": 0,
    "abstract": "string",
    "doi": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable publication entity identifier.|
|type|string|true|none|Entity discriminator.|
|version|integer|true|none|Entity schema version.|
|properties|object|true|none|Publication-specific entity fields.|

<h2 id="tocS_CostDollarsOutput">CostDollarsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacostdollarsoutput"></a>
<a id="schema_CostDollarsOutput"></a>
<a id="tocScostdollarsoutput"></a>
<a id="tocscostdollarsoutput"></a>

```json
{
  "total": 0,
  "search": {
    "neural": 0,
    "keyword": 0
  },
  "summary": 0,
  "contents": {
    "text": 0,
    "highlights": 0,
    "summary": 0
  }
}
```

Estimated dollar cost of the request. Which fields appear depends on the endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(float)|false|none|Estimated total dollar cost for the completed request. This response value is not an invoice record.|
|search|object|false|none|Estimated search cost by retrieval mode. Some search types report their cost only in `total`.|
|summary|number(float)|false|none|Cost of synthesized summary generation for search requests.|
|contents|object|false|none|Estimated cost breakdown for standalone content retrieval (text, highlights, and summaries billed outside the bundled search price).|

<h2 id="tocS_SearchWarningOutput">SearchWarningOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchwarningoutput"></a>
<a id="schema_SearchWarningOutput"></a>
<a id="tocSsearchwarningoutput"></a>
<a id="tocssearchwarningoutput"></a>

```json
{
  "code": "IGNORED_FIELD",
  "path": "/startCrawlDate",
  "message": "string"
}
```

A note about the request itself, for whoever maintains the code that builds it. Log it; do not pass it to a model. A warning never changes the status code or the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Machine-readable warning code, UPPER_SNAKE. `IGNORED_FIELD`: the field at `path` is accepted and has no effect. Codes are an open set: tolerate codes you do not recognize.|
|path|string|true|none|JSON Pointer to the request field the warning is about.|
|message|string|true|none|Human-readable and complete on its own: what to change in the request.|

<h2 id="tocS_SearchNoticeOutput">SearchNoticeOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchnoticeoutput"></a>
<a id="schema_SearchNoticeOutput"></a>
<a id="tocSsearchnoticeoutput"></a>
<a id="tocssearchnoticeoutput"></a>

```json
{
  "code": "RESTRICTIONS_RELAXED",
  "path": "/query",
  "message": "string",
  "details": {
    "property1": null,
    "property2": null
  }
}
```

A note about how the results were produced, written to be passed to a model with the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Machine-readable notice code, UPPER_SNAKE. `RESTRICTIONS_RELAXED`: the `site:` or exact-phrase restrictions written in the query matched nothing, so the results come from a search with them removed; filters set in the request body were kept. Codes are an open set: tolerate codes you do not recognize.|
|path|string|true|none|JSON Pointer to the request field the notice is about.|
|message|string|true|none|Human-readable and complete on its own; written to be shown to a model.|
|details|object|false|none|Optional extra context for a harness or model. An open object: no schema is promised for its keys, and it never carries information that `message` lacks.|

<h2 id="tocS_SearchSynthesisOutputOutput">SearchSynthesisOutputOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynthesisoutputoutput"></a>
<a id="schema_SearchSynthesisOutputOutput"></a>
<a id="tocSsearchsynthesisoutputoutput"></a>
<a id="tocssearchsynthesisoutputoutput"></a>

```json
{
  "content": "string",
  "grounding": [
    {
      "field": "string",
      "citations": [
        {
          "url": "http://example.com",
          "title": "string"
        }
      ],
      "confidence": "low"
    }
  ]
}
```

Synthesized output. Returned when outputSchema is provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| object|true|none|Synthesized content. String by default, or object when outputSchema is provided.|
|grounding|[object]|true|none|Field-level grounding for synthesized output.|

<h2 id="tocS_SearchStreamTextDeltaChunkOutput">SearchStreamTextDeltaChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamtextdeltachunkoutput"></a>
<a id="schema_SearchStreamTextDeltaChunkOutput"></a>
<a id="tocSsearchstreamtextdeltachunkoutput"></a>
<a id="tocssearchstreamtextdeltachunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "text-delta",
  "delta": "string",
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string",
            "id": "string"
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|delta|string|true|none|none|
|choices|[object]|false|none|none|

<h2 id="tocS_SearchStreamGroundingChunkOutput">SearchStreamGroundingChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamgroundingchunkoutput"></a>
<a id="schema_SearchStreamGroundingChunkOutput"></a>
<a id="tocSsearchstreamgroundingchunkoutput"></a>
<a id="tocssearchstreamgroundingchunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "grounding",
  "grounding": [
    {
      "field": "string",
      "citations": [
        {
          "url": "http://example.com",
          "title": "string"
        }
      ],
      "confidence": "low"
    }
  ],
  "citations": [
    {
      "url": "http://example.com",
      "title": "string",
      "id": "string"
    }
  ],
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string",
            "id": "string"
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|grounding|[object]|true|none|Field-level grounding for synthesized output.|
|citations|[object]|false|none|none|
|choices|[object]|false|none|none|

<h2 id="tocS_SearchStreamResultsChunkOutput">SearchStreamResultsChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamresultschunkoutput"></a>
<a id="schema_SearchStreamResultsChunkOutput"></a>
<a id="tocSsearchstreamresultschunkoutput"></a>
<a id="tocssearchstreamresultschunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "results",
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string",
      "highlights": [
        "string"
      ],
      "highlightScores": [
        0
      ],
      "summary": "string",
      "subpages": [
        {
          "title": "string",
          "url": "http://example.com",
          "publishedDate": "1970-01-01T00:00:00Z",
          "author": "string",
          "id": "string",
          "image": "http://example.com",
          "favicon": "http://example.com"
        }
      ],
      "entities": [
        {
          "id": "string",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "string",
            "foundedYear": 0,
            "description": "string",
            "workforce": {
              "total": 0
            },
            "headquarters": {
              "address": "string",
              "city": "string",
              "postalCode": "string",
              "country": "string"
            },
            "financials": {
              "revenueAnnual": 0,
              "fundingTotal": 0,
              "fundingLatestRound": {
                "name": "string",
                "date": "string",
                "amount": 0
              }
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 0,
                  "dateFrom": "string",
                  "dateTo": "string"
                }
              ]
            },
            "research": {
              "worksCount": 0,
              "citationCount": 0,
              "areas": [
                "string"
              ],
              "notableWorks": [
                {
                  "title": "string",
                  "year": 0,
                  "venue": "string",
                  "citationCount": 0,
                  "doi": "string",
                  "id": "string",
                  "type": "article"
                }
              ],
              "topResearchers": [
                {
                  "person": {
                    "name": "string",
                    "id": "string"
                  },
                  "worksCount": 0,
                  "citationCount": 0
                }
              ]
            }
          }
        }
      ],
      "extras": {
        "links": [
          "string"
        ],
        "imageLinks": [
          "string"
        ],
        "richImageLinks": [
          {
            "url": "string",
            "alt": "string"
          }
        ],
        "richLinks": [
          {
            "url": "string",
            "anchor": "string"
          }
        ],
        "codeBlocks": [
          {
            "text": "string",
            "source": "string"
          }
        ]
      }
    }
  ],
  "warnings": [
    {
      "code": "IGNORED_FIELD",
      "path": "/startCrawlDate",
      "message": "string"
    }
  ],
  "notices": [
    {
      "code": "RESTRICTIONS_RELAXED",
      "path": "/query",
      "message": "string",
      "details": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|results|[[SearchResultOutput](#schemasearchresultoutput)]|true|none|none|
|warnings|[[SearchWarningOutput](#schemasearchwarningoutput)]|false|none|Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.|
|notices|[[SearchNoticeOutput](#schemasearchnoticeoutput)]|false|none|Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.|

<h2 id="tocS_SearchStreamResetChunkOutput">SearchStreamResetChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamresetchunkoutput"></a>
<a id="schema_SearchStreamResetChunkOutput"></a>
<a id="tocSsearchstreamresetchunkoutput"></a>
<a id="tocssearchstreamresetchunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "stream-reset",
  "streamReset": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|streamReset|boolean|true|none|none|

<h2 id="tocS_SearchStreamDoneChunkOutput">SearchStreamDoneChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamdonechunkoutput"></a>
<a id="schema_SearchStreamDoneChunkOutput"></a>
<a id="tocSsearchstreamdonechunkoutput"></a>
<a id="tocssearchstreamdonechunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "done",
  "output": {
    "content": "string",
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "searchTime": 0,
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "assistant",
        "content": "string",
        "citations": [
          {
            "url": "http://example.com",
            "title": "string",
            "id": "string"
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|output|[SearchSynthesisOutputOutput](#schemasearchsynthesisoutputoutput) \| null|true|none|none|
|searchTime|number|true|none|Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|false|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|choices|[object]|false|none|none|

<h2 id="tocS_SearchStreamErrorChunkOutput">SearchStreamErrorChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchstreamerrorchunkoutput"></a>
<a id="schema_SearchStreamErrorChunkOutput"></a>
<a id="tocSsearchstreamerrorchunkoutput"></a>
<a id="tocssearchstreamerrorchunkoutput"></a>

```json
{
  "requestId": "string",
  "type": "error",
  "error": {
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request.|
|type|string|true|none|none|
|error|object|true|none|none|

<h2 id="tocS_AnswerStreamCitationsChunkOutput">AnswerStreamCitationsChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemaanswerstreamcitationschunkoutput"></a>
<a id="schema_AnswerStreamCitationsChunkOutput"></a>
<a id="tocSanswerstreamcitationschunkoutput"></a>
<a id="tocsanswerstreamcitationschunkoutput"></a>

```json
{
  "citations": [
    {
      "title": "string",
      "url": "http://example.com",
      "publishedDate": "1970-01-01T00:00:00Z",
      "author": "string",
      "id": "string",
      "image": "http://example.com",
      "favicon": "http://example.com",
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citations|[object]|true|none|Search results cited by the final streamed answer.|

<h2 id="tocS_AnswerStreamCostChunkOutput">AnswerStreamCostChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemaanswerstreamcostchunkoutput"></a>
<a id="schema_AnswerStreamCostChunkOutput"></a>
<a id="tocSanswerstreamcostchunkoutput"></a>
<a id="tocsanswerstreamcostchunkoutput"></a>

```json
{
  "costDollars": {
    "total": 0,
    "search": {
      "neural": 0,
      "keyword": 0
    },
    "summary": 0,
    "contents": {
      "text": 0,
      "highlights": 0,
      "summary": 0
    }
  },
  "requestId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costDollars|[CostDollarsOutput](#schemacostdollarsoutput)|true|none|Estimated dollar cost of the request. Which fields appear depends on the endpoint.|
|requestId|string|false|none|Unique identifier for the request.|

<h2 id="tocS_AnswerStreamErrorChunkOutput">AnswerStreamErrorChunkOutput</h2>
<!-- backwards compatibility -->
<a id="schemaanswerstreamerrorchunkoutput"></a>
<a id="schema_AnswerStreamErrorChunkOutput"></a>
<a id="tocSanswerstreamerrorchunkoutput"></a>
<a id="tocsanswerstreamerrorchunkoutput"></a>

```json
{
  "tag": "ERROR",
  "payload": {
    "error": {
      "code": 0,
      "message": "string"
    },
    "requestId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|none|
|payload|object|true|none|none|

<h2 id="tocS_SearchMonitorSearchOutput">SearchMonitorSearchOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorsearchoutput"></a>
<a id="schema_SearchMonitorSearchOutput"></a>
<a id="tocSsearchmonitorsearchoutput"></a>
<a id="tocssearchmonitorsearchoutput"></a>

```json
{
  "query": "string",
  "numResults": 10,
  "includeDomains": [
    "string"
  ],
  "excludeDomains": [
    "string"
  ],
  "contents": {
    "text": false,
    "highlights": false,
    "summary": true,
    "extras": {
      "links": 0,
      "imageLinks": 0,
      "richImageLinks": 0,
      "richLinks": 0,
      "codeBlocks": 0
    },
    "livecrawl": "never",
    "livecrawlTimeout": 10000,
    "maxAgeHours": -1,
    "filterEmptyResults": true,
    "subpages": 0,
    "subpageTarget": "string",
    "context": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|The query string for the search.|
|numResults|integer|false|none|Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.|
|includeDomains|[string]|false|none|Restrict search results to these domains.|
|excludeDomains|[string]|false|none|Exclude these domains from search results.|
|contents|[SearchMonitorContentsOutput](#schemasearchmonitorcontentsoutput)|false|none|Content extraction options applied to each search result. All fields are optional.|

<h2 id="tocS_SearchMonitorContentsOutput">SearchMonitorContentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorcontentsoutput"></a>
<a id="schema_SearchMonitorContentsOutput"></a>
<a id="tocSsearchmonitorcontentsoutput"></a>
<a id="tocssearchmonitorcontentsoutput"></a>

```json
{
  "text": false,
  "highlights": false,
  "summary": true,
  "extras": {
    "links": 0,
    "imageLinks": 0,
    "richImageLinks": 0,
    "richLinks": 0,
    "codeBlocks": 0
  },
  "livecrawl": "never",
  "livecrawlTimeout": 10000,
  "maxAgeHours": -1,
  "filterEmptyResults": true,
  "subpages": 0,
  "subpageTarget": "string",
  "context": true
}
```

Content extraction options applied to each search result. All fields are optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|boolean \| object|false|none|Text extraction options for each result.|
|highlights|boolean \| object|false|none|Text snippets the LLM identifies as most relevant from each page.|
|summary|boolean \| [SummaryWithMaxTokensOptionsOutput](#schemasummarywithmaxtokensoptionsoutput)|false|none|Return an LLM-generated summary. Pass `true` for defaults, or an object with `query`.|
|extras|object|false|none|Extra parameters to pass.|
|livecrawl|string|false|none|Crawl strategy for fetching page content|
|livecrawlTimeout|integer|false|none|The timeout for livecrawling in milliseconds.|
|maxAgeHours|integer|false|none|Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.|
|filterEmptyResults|boolean|false|none|Filter out results with no content|
|subpages|integer|false|none|The number of subpages to crawl. The actual number crawled may be limited by system constraints.|
|subpageTarget|string \| [string]|false|none|Term to find specific subpages of search results. Can be a single string or an array of strings.|
|context|boolean \| object|false|none|**Deprecated.** Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.|

<h2 id="tocS_SummaryWithMaxTokensOptionsOutput">SummaryWithMaxTokensOptionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasummarywithmaxtokensoptionsoutput"></a>
<a id="schema_SummaryWithMaxTokensOptionsOutput"></a>
<a id="tocSsummarywithmaxtokensoptionsoutput"></a>
<a id="tocssummarywithmaxtokensoptionsoutput"></a>

```json
{
  "query": "string",
  "maxTokens": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string \| null|false|none|none|
|maxTokens|integer|false|none|**Deprecated.** Deprecated. Maximum tokens for the generated summary.|

<h2 id="tocS_SearchMonitorTriggerOutput">SearchMonitorTriggerOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitortriggeroutput"></a>
<a id="schema_SearchMonitorTriggerOutput"></a>
<a id="tocSsearchmonitortriggeroutput"></a>
<a id="tocssearchmonitortriggeroutput"></a>

```json
{
  "type": "interval",
  "period": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of trigger. Currently only `interval` is supported.|
|period|string|true|none|A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour. The schedule is anchored to the monitor's creation time (e.g., a daily monitor created at 2:30 PM runs daily around 2:30 PM).|

<h2 id="tocS_SearchMonitorOutputSchemaOutput">SearchMonitorOutputSchemaOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitoroutputschemaoutput"></a>
<a id="schema_SearchMonitorOutputSchemaOutput"></a>
<a id="tocSsearchmonitoroutputschemaoutput"></a>
<a id="tocssearchmonitoroutputschemaoutput"></a>

```json
{
  "type": "text",
  "description": "string"
}
```

Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.|
|*oneOf*|[OutputSchemaTextOutput](#schemaoutputschematextoutput)|false|none|none|
|*oneOf*|[OutputSchemaObject](#schemaoutputschemaobject)|false|none|none|
|*anyOf*|null|false|none|none|

<h2 id="tocS_OutputSchemaTextOutput">OutputSchemaTextOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoutputschematextoutput"></a>
<a id="schema_OutputSchemaTextOutput"></a>
<a id="tocSoutputschematextoutput"></a>
<a id="tocsoutputschematextoutput"></a>

```json
{
  "type": "text",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|description|string|false|none|none|

<h2 id="tocS_SearchMonitorWebhookOutput">SearchMonitorWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchmonitorwebhookoutput"></a>
<a id="schema_SearchMonitorWebhookOutput"></a>
<a id="tocSsearchmonitorwebhookoutput"></a>
<a id="tocssearchmonitorwebhookoutput"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "monitor.created"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.|
|events|[string]|false|none|Which events to subscribe to. Defaults to all events if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|monitor.created|
|events|monitor.updated|
|events|monitor.deleted|
|events|monitor.run.created|
|events|monitor.run.completed|

<h2 id="tocS_AgentDataSourceOutput">AgentDataSourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaagentdatasourceoutput"></a>
<a id="schema_AgentDataSourceOutput"></a>
<a id="tocSagentdatasourceoutput"></a>
<a id="tocsagentdatasourceoutput"></a>

```json
{
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[AgentDataSourceProvider](#schemaagentdatasourceprovider)|true|none|Exa Connect data provider to enable for the run. All provider tools are available by default.|

<h2 id="tocS_AgentBudgetOutput">AgentBudgetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaagentbudgetoutput"></a>
<a id="schema_AgentBudgetOutput"></a>
<a id="tocSagentbudgetoutput"></a>
<a id="tocsagentbudgetoutput"></a>

```json
{
  "maxCostDollars": 0,
  "maxDurationSeconds": 0
}
```

Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxCostDollars|number|false|none|Maximum amount this run can spend in US dollars. Accepts $1–$100 and applies only to `auto` and `ultra`; when omitted, the default cap is $5 for `auto` and $20 for `ultra`.|
|maxDurationSeconds|integer|false|none|Soft wall-clock ceiling for the run in seconds. Accepts 300–10,800 (5 minutes to 3 hours) and applies only to `ultra`. As the run approaches the limit, the agent stops starting new work and returns what it has found with `stopReason: "time_limit_reached"`.|

<h2 id="tocS_CreateWebsetParameters">CreateWebsetParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebsetparameters"></a>
<a id="schema_CreateWebsetParameters"></a>
<a id="tocScreatewebsetparameters"></a>
<a id="tocscreatewebsetparameters"></a>

```json
{
  "search": {
    "query": "Marketing agencies based in the US, that focus on consumer products.",
    "count": 10
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|Optional name that appears anywhere the Webset is displayed. Leave empty to have Exa generate one automatically.|
|search|object|false|none|Create initial search for the Webset.|
|import|[object]|false|none|Import data from existing Websets and Imports into this Webset.|
|enrichments|[[CreateEnrichmentParameters](#schemacreateenrichmentparameters)]|false|none|Enrichments that extract additional data from each Item added to the Webset.|
|exclude|[object]|false|none|Global exclusion sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.|
|externalId|string|false|none|The external identifier for the webset.<br><br>You can use this to reference the Webset by your own internal identifiers.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "type": "company"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompanyEntity](#schemacompanyentity)|false|none|none|
|*oneOf*|[PersonEntity](#schemapersonentity)|false|none|none|
|*oneOf*|[ArticleEntity](#schemaarticleentity)|false|none|none|
|*oneOf*|[ResearchPaperEntity](#schemaresearchpaperentity)|false|none|none|
|*oneOf*|[CustomEntity](#schemacustomentity)|false|none|none|

<h2 id="tocS_CompanyEntity">CompanyEntity</h2>
<!-- backwards compatibility -->
<a id="schemacompanyentity"></a>
<a id="schema_CompanyEntity"></a>
<a id="tocScompanyentity"></a>
<a id="tocscompanyentity"></a>

```json
{
  "type": "company"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_PersonEntity">PersonEntity</h2>
<!-- backwards compatibility -->
<a id="schemapersonentity"></a>
<a id="schema_PersonEntity"></a>
<a id="tocSpersonentity"></a>
<a id="tocspersonentity"></a>

```json
{
  "type": "person"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_ArticleEntity">ArticleEntity</h2>
<!-- backwards compatibility -->
<a id="schemaarticleentity"></a>
<a id="schema_ArticleEntity"></a>
<a id="tocSarticleentity"></a>
<a id="tocsarticleentity"></a>

```json
{
  "type": "article"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_ResearchPaperEntity">ResearchPaperEntity</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpaperentity"></a>
<a id="schema_ResearchPaperEntity"></a>
<a id="tocSresearchpaperentity"></a>
<a id="tocsresearchpaperentity"></a>

```json
{
  "type": "research_paper"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_CustomEntity">CustomEntity</h2>
<!-- backwards compatibility -->
<a id="schemacustomentity"></a>
<a id="schema_CustomEntity"></a>
<a id="tocScustomentity"></a>
<a id="tocscustomentity"></a>

```json
{
  "description": "string",
  "type": "custom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_CreateCriterionParameters">CreateCriterionParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatecriterionparameters"></a>
<a id="schema_CreateCriterionParameters"></a>
<a id="tocScreatecriterionparameters"></a>
<a id="tocscreatecriterionparameters"></a>

```json
{
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|The description of the criterion|

<h2 id="tocS_WebsetEnrichmentFormat">WebsetEnrichmentFormat</h2>
<!-- backwards compatibility -->
<a id="schemawebsetenrichmentformat"></a>
<a id="schema_WebsetEnrichmentFormat"></a>
<a id="tocSwebsetenrichmentformat"></a>
<a id="tocswebsetenrichmentformat"></a>

```json
"text"
```

<h2 id="tocS_CreateEnrichmentParameters">CreateEnrichmentParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateenrichmentparameters"></a>
<a id="schema_CreateEnrichmentParameters"></a>
<a id="tocScreateenrichmentparameters"></a>
<a id="tocscreateenrichmentparameters"></a>

```json
{
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Provide a description of the enrichment task you want to perform to each Webset Item.|
|format|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|false|none|Format of the enrichment response.<br><br>We automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.|
|options|[object]|false|none|When the format is options, the different options for the enrichment agent to choose from.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|text|
|format|date|
|format|number|
|format|options|
|format|email|
|format|phone|
|format|url|

<h2 id="tocS_UpdateWebsetRequest">UpdateWebsetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebsetrequest"></a>
<a id="schema_UpdateWebsetRequest"></a>
<a id="tocSupdatewebsetrequest"></a>
<a id="tocsupdatewebsetrequest"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "title": "Leading climate tech startups"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object \| null|false|none|Set of key-value pairs you want to associate with this object.|
|title|string|false|none|Optional name that appears anywhere the Webset is displayed.|

<h2 id="tocS_CreateWebsetSearchParameters">CreateWebsetSearchParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebsetsearchparameters"></a>
<a id="schema_CreateWebsetSearchParameters"></a>
<a id="tocScreatewebsetsearchparameters"></a>
<a id="tocscreatewebsetsearchparameters"></a>

```json
{
  "count": 1,
  "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string"
    }
  ],
  "maxPeoplePerCompany": 1,
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "recall": true,
  "behavior": "override",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|true|none|Number of Items the Search will attempt to find.<br><br>The actual number of Items found may be less than this number depending on the query complexity.|
|query|string|true|none|Natural language search query describing what you are looking for.<br><br>Be specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.<br><br>Any URLs provided will be crawled and used as additional context for the search.|
|entity|[Entity](#schemaentity)|false|none|Entity the search returns results for. Detected from the query when omitted.|
|criteria|[[CreateCriterionParameters](#schemacreatecriterionparameters)]|false|none|Criteria every Item is evaluated against. Generated from the query when omitted.|
|maxPeoplePerCompany|integer|false|none|Optional soft cap for people searches. When set, the search will try to include at most this many matching people from the same current employer company.|
|exclude|[object]|false|none|Imports or Websets whose items are left out of this search's results.|
|scope|[object]|false|none|Limit the search to specific sources (existing imports). Any results found within these sources matching the search criteria will be included in the Webset.|
|recall|boolean|false|none|Whether to estimate how many relevant results exist for this search. The estimate is returned in the search's `recall` field.|
|behavior|[WebsetSearchBehavior](#schemawebsetsearchbehavior)|false|none|How this search interacts with existing items in the Webset:<br><br>- **override**: Replace existing items and evaluate all items against new criteria<br>- **append**: Add new items to existing ones, keeping items that match the new criteria|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|

#### Enumerated Values

|Property|Value|
|---|---|
|behavior|override|
|behavior|append|

<h2 id="tocS_WebsetSearchBehavior">WebsetSearchBehavior</h2>
<!-- backwards compatibility -->
<a id="schemawebsetsearchbehavior"></a>
<a id="schema_WebsetSearchBehavior"></a>
<a id="tocSwebsetsearchbehavior"></a>
<a id="tocswebsetsearchbehavior"></a>

```json
"override"
```

<h2 id="tocS_UpdateEnrichmentParameters">UpdateEnrichmentParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenrichmentparameters"></a>
<a id="schema_UpdateEnrichmentParameters"></a>
<a id="tocSupdateenrichmentparameters"></a>
<a id="tocsupdateenrichmentparameters"></a>

```json
{
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Provide a description of the enrichment task you want to perform to each Webset Item.|
|format|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|false|none|Format of the enrichment response.<br><br>We automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.|
|options|[object]|false|none|When the format is options, the different options for the enrichment agent to choose from.|
|metadata|object \| null|false|none|Set of key-value pairs you want to associate with this object.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|text|
|format|date|
|format|number|
|format|options|
|format|email|
|format|phone|
|format|url|

<h2 id="tocS_PreviewWebsetParameters">PreviewWebsetParameters</h2>
<!-- backwards compatibility -->
<a id="schemapreviewwebsetparameters"></a>
<a id="schema_PreviewWebsetParameters"></a>
<a id="tocSpreviewwebsetparameters"></a>
<a id="tocspreviewwebsetparameters"></a>

```json
{
  "search": {
    "query": "Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city",
    "entity": {
      "type": "company"
    },
    "count": 10
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|object|true|none|none|

<h2 id="tocS_CreateMonitorParameters">CreateMonitorParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatemonitorparameters"></a>
<a id="schema_CreateMonitorParameters"></a>
<a id="tocScreatemonitorparameters"></a>
<a id="tocscreatemonitorparameters"></a>

```json
{
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|websetId|string|true|none|The id of the Webset|
|cadence|[MonitorCadence](#schemamonitorcadence)|true|none|How often the monitor will run|
|behavior|[MonitorBehavior](#schemamonitorbehavior)|true|none|Behavior to perform when monitor runs|
|metadata|object|false|none|none|

<h2 id="tocS_MonitorCadence">MonitorCadence</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcadence"></a>
<a id="schema_MonitorCadence"></a>
<a id="tocSmonitorcadence"></a>
<a id="tocsmonitorcadence"></a>

```json
{
  "cron": "string",
  "timezone": "Etc/UTC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|true|none|Cron expression for monitor cadence (must be a valid Unix cron with 5 fields). The schedule must trigger at most once per day.|
|timezone|string|false|none|IANA timezone (e.g., "America/New_York")|

<h2 id="tocS_MonitorBehavior">MonitorBehavior</h2>
<!-- backwards compatibility -->
<a id="schemamonitorbehavior"></a>
<a id="schema_MonitorBehavior"></a>
<a id="tocSmonitorbehavior"></a>
<a id="tocsmonitorbehavior"></a>

```json
{
  "config": {
    "query": "string",
    "criteria": [
      {
        "description": "string"
      }
    ],
    "entity": {
      "type": "company"
    },
    "count": 0.1,
    "behavior": "override"
  },
  "type": "search"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|Search parameters for each Monitor run.|
|type|string|true|none|Configure the Monitor to find new Items matching your search criteria|

<h2 id="tocS_UpdateMonitor">UpdateMonitor</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemonitor"></a>
<a id="schema_UpdateMonitor"></a>
<a id="tocSupdatemonitor"></a>
<a id="tocsupdatemonitor"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "status": "enabled",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|
|status|string|false|none|The status of the monitor.|
|cadence|[MonitorCadence](#schemamonitorcadence)|false|none|none|
|behavior|[MonitorBehavior](#schemamonitorbehavior)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_CreateImportParameters">CreateImportParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateimportparameters"></a>
<a id="schema_CreateImportParameters"></a>
<a id="tocScreateimportparameters"></a>
<a id="tocscreateimportparameters"></a>

```json
{
  "size": 0,
  "count": 0,
  "title": "string",
  "format": "csv",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "entity": {
    "type": "company"
  },
  "csv": {
    "identifier": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|size|number|true|none|The size of the file in bytes. Maximum size is 50 MB.|
|count|number|true|none|The number of records to import|
|title|string|false|none|The title of the import|
|format|string|true|none|The file format. The CSV must include a column that identifies each entity, or the import fails.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|
|entity|[Entity](#schemaentity)|true|none|The type of entity each row describes.|
|csv|object|false|none|When format is `csv`, these are the specific import parameters.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|

<h2 id="tocS_UpdateImport">UpdateImport</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimport"></a>
<a id="schema_UpdateImport"></a>
<a id="tocSupdateimport"></a>
<a id="tocsupdateimport"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_CreateWebhookParameters">CreateWebhookParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookparameters"></a>
<a id="schema_CreateWebhookParameters"></a>
<a id="tocScreatewebhookparameters"></a>
<a id="tocscreatewebhookparameters"></a>

```json
{
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[EventType](#schemaeventtype)]|true|none|The events to trigger the webhook|
|url|string(uri)|true|none|The URL to send the webhook to|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|webset.created|
|events|webset.deleted|
|events|webset.paused|
|events|webset.idle|
|events|webset.search.created|
|events|webset.search.canceled|
|events|webset.search.completed|
|events|webset.search.updated|
|events|import.created|
|events|import.completed|
|events|webset.item.created|
|events|webset.item.enriched|
|events|monitor.created|
|events|monitor.updated|
|events|monitor.deleted|
|events|monitor.run.created|
|events|monitor.run.completed|
|events|webset.export.created|
|events|webset.export.completed|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"webset.created"
```

<h2 id="tocS_UpdateWebhookParameters">UpdateWebhookParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookparameters"></a>
<a id="schema_UpdateWebhookParameters"></a>
<a id="tocSupdatewebhookparameters"></a>
<a id="tocsupdatewebhookparameters"></a>

```json
{
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[EventType](#schemaeventtype)]|false|none|The events to trigger the webhook|
|url|string(uri)|false|none|The URL to send the webhook to|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|webset.created|
|events|webset.deleted|
|events|webset.paused|
|events|webset.idle|
|events|webset.search.created|
|events|webset.search.canceled|
|events|webset.search.completed|
|events|webset.search.updated|
|events|import.created|
|events|import.completed|
|events|webset.item.created|
|events|webset.item.enriched|
|events|monitor.created|
|events|monitor.updated|
|events|monitor.deleted|
|events|monitor.run.created|
|events|monitor.run.completed|
|events|webset.export.created|
|events|webset.export.completed|

<h2 id="tocS_Webset">Webset</h2>
<!-- backwards compatibility -->
<a id="schemawebset"></a>
<a id="schema_Webset"></a>
<a id="tocSwebset"></a>
<a id="tocswebset"></a>

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the webset|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the webset|
|externalId|string \| null|true|none|The external identifier for the webset|
|title|string \| null|true|none|The title of the webset|
|searches|[[WebsetSearch](#schemawebsetsearch)]|true|none|The searches that have been performed on the webset.|
|imports|[[Import](#schemaimport)]|true|none|Imports that have been performed on the webset.|
|enrichments|[[WebsetEnrichment](#schemawebsetenrichment)]|true|none|The Enrichments to apply to the Webset Items.|
|monitors|[[Monitor](#schemamonitor)]|true|none|The Monitors for the Webset.|
|excludes|[object]|false|none|The Excludes sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|
|dashboardUrl|string(uri)|true|none|The URL to view the webset in the Exa dashboard|
|createdAt|string(date-time)|true|none|The date and time the webset was created|
|updatedAt|string(date-time)|true|none|The date and time the webset was updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|idle|
|status|pending|
|status|running|
|status|paused|

<h2 id="tocS_WebsetSearch">WebsetSearch</h2>
<!-- backwards compatibility -->
<a id="schemawebsetsearch"></a>
<a id="schema_WebsetSearch"></a>
<a id="tocSwebsetsearch"></a>
<a id="tocswebsetsearch"></a>

```json
{
  "id": "string",
  "object": "webset_search",
  "websetId": "string",
  "status": "created",
  "query": "string",
  "entity": {
    "type": "company"
  },
  "criteria": [
    {
      "description": "string",
      "successRate": 0
    }
  ],
  "count": 1,
  "maxPeoplePerCompany": 1,
  "behavior": "override",
  "exclude": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "scope": [
    {
      "source": "import",
      "id": "string",
      "relationship": {
        "definition": "string",
        "limit": 1
      }
    }
  ],
  "progress": {
    "found": 0,
    "analyzed": 0,
    "completion": 0,
    "timeLeft": 0
  },
  "recall": {
    "expected": {
      "total": 0,
      "confidence": "high",
      "bounds": {
        "min": 0,
        "max": 0
      }
    },
    "reasoning": "string"
  },
  "metadata": {},
  "canceledAt": "1970-01-01T00:00:00Z",
  "canceledReason": "webset_deleted",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the search|
|object|string|true|none|The type of object|
|websetId|string|true|none|The unique identifier for the Webset this search belongs to|
|status|string|true|none|The status of the search|
|query|string|true|none|The query used to create the search.|
|entity|[Entity](#schemaentity)|true|none|The entity the search will return results for.<br><br>When no entity is provided during creation, we will automatically select the best entity based on the query.|
|criteria|[object]|true|none|The criteria the search will use to evaluate the results. If not provided, we will automatically generate them for you.|
|count|number|true|none|The number of results the search will attempt to find. The actual number of results may be less than this number depending on the search complexity.|
|maxPeoplePerCompany|integer \| null|true|none|The soft cap requested for matching people from the same current employer company, or null when no cap was requested.|
|behavior|[WebsetSearchBehavior](#schemawebsetsearchbehavior)|false|none|The behavior of the search when it is added to a Webset.<br><br>- `override`: the search will replace the existing Items found in the Webset and evaluate them against the new criteria. Any Items that don't match the new criteria will be discarded.<br>- `append`: the search will add the new Items found to the existing Webset. Any Items that don't match the new criteria will be discarded.|
|exclude|[object]|true|none|Sources (existing imports or websets) used to omit certain results to be found during the search.|
|scope|[object]|true|none|Sources the search is limited to. Empty when the search covers the whole web.|
|progress|object|true|none|The progress of the search|
|recall|object \| null|true|none|Recall metrics for the search, null if not yet computed or requested.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|
|canceledAt|string(date-time) \| null|true|none|The date and time the search was canceled|
|canceledReason|[WebsetSearchCanceledReason](#schemawebsetsearchcanceledreason)|true|none|The reason the search was canceled|
|createdAt|string(date-time)|true|none|The date and time the search was created|
|updatedAt|string(date-time)|true|none|The date and time the search was updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|pending|
|status|running|
|status|completed|
|status|canceled|
|behavior|override|
|behavior|append|
|canceledReason|webset_deleted|
|canceledReason|webset_canceled|
|canceledReason|out_of_credits|

<h2 id="tocS_WebsetSearchCanceledReason">WebsetSearchCanceledReason</h2>
<!-- backwards compatibility -->
<a id="schemawebsetsearchcanceledreason"></a>
<a id="schema_WebsetSearchCanceledReason"></a>
<a id="tocSwebsetsearchcanceledreason"></a>
<a id="tocswebsetsearchcanceledreason"></a>

```json
"webset_deleted"
```

<h2 id="tocS_Import">Import</h2>
<!-- backwards compatibility -->
<a id="schemaimport"></a>
<a id="schema_Import"></a>
<a id="tocSimport"></a>
<a id="tocsimport"></a>

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Import|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the Import|
|format|string|true|none|The format of the import.|
|entity|[Entity](#schemaentity)|true|none|The type of entity the import contains.|
|title|string|true|none|The title of the import|
|count|number|true|none|The number of entities in the import|
|metadata|object|true|none|Set of key-value pairs you want to associate with this object.|
|failedReason|string \| null|true|none|The reason the import failed|
|failedAt|string(date-time) \| null|true|none|When the import failed|
|failedMessage|string \| null|true|none|A human readable message of the import failure|
|createdAt|string(date-time)|true|none|When the import was created|
|updatedAt|string(date-time)|true|none|When the import was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|object|import|
|status|pending|
|status|processing|
|status|completed|
|status|failed|
|status|canceled|
|format|csv|
|format|webset|
|failedReason|invalid_format|
|failedReason|invalid_file_content|
|failedReason|missing_identifier|

<h2 id="tocS_WebsetEnrichment">WebsetEnrichment</h2>
<!-- backwards compatibility -->
<a id="schemawebsetenrichment"></a>
<a id="schema_WebsetEnrichment"></a>
<a id="tocSwebsetenrichment"></a>
<a id="tocswebsetenrichment"></a>

```json
{
  "id": "string",
  "object": "webset_enrichment",
  "status": "pending",
  "websetId": "string",
  "title": "string",
  "description": "string",
  "format": "text",
  "options": [
    {
      "label": "string"
    }
  ],
  "instructions": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the enrichment|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the enrichment|
|websetId|string|true|none|The unique identifier for the Webset this enrichment belongs to.|
|title|string \| null|true|none|The title of the enrichment.<br><br>This will be automatically generated based on the description and format.|
|description|string|true|none|The description of the enrichment task provided during the creation of the enrichment.|
|format|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|true|none|The format of the enrichment response.|
|options|[object]|true|none|When the format is options, the different options for the enrichment agent to choose from.|
|instructions|string \| null|true|none|The instructions for the enrichment Agent.<br><br>This will be automatically generated based on the description and format.|
|metadata|object|false|none|The metadata of the enrichment|
|createdAt|string(date-time)|true|none|The date and time the enrichment was created|
|updatedAt|string(date-time)|true|none|The date and time the enrichment was updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|canceled|
|status|completed|
|format|text|
|format|date|
|format|number|
|format|options|
|format|email|
|format|phone|
|format|url|

<h2 id="tocS_Monitor">Monitor</h2>
<!-- backwards compatibility -->
<a id="schemamonitor"></a>
<a id="schema_Monitor"></a>
<a id="tocSmonitor"></a>
<a id="tocsmonitor"></a>

```json
{
  "id": "string",
  "object": "monitor",
  "status": "enabled",
  "websetId": "string",
  "cadence": {
    "cron": "string",
    "timezone": "Etc/UTC"
  },
  "behavior": {
    "config": {
      "query": "string",
      "criteria": [
        {
          "description": "string"
        }
      ],
      "entity": {
        "type": "company"
      },
      "count": 0.1,
      "behavior": "override"
    },
    "type": "search"
  },
  "lastRun": {
    "id": "string",
    "object": "monitor_run",
    "monitorId": "string",
    "status": "created",
    "completedAt": "1970-01-01T00:00:00Z",
    "failedAt": "1970-01-01T00:00:00Z",
    "failedReason": "string",
    "canceledAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "type": "search"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Monitor|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the Monitor|
|websetId|string|true|none|The id of the Webset the Monitor belongs to|
|cadence|[MonitorCadence](#schemamonitorcadence)|true|none|How often the monitor will run|
|behavior|[MonitorBehavior](#schemamonitorbehavior)|true|none|Behavior to perform when monitor runs|
|lastRun|[MonitorRun](#schemamonitorrun)|true|none|The last run of the monitor|
|nextRunAt|string(date-time) \| null|true|none|Date and time when the next run will occur in|
|metadata|object|true|none|Set of key-value pairs you want to associate with this object.|
|createdAt|string(date-time)|true|none|When the monitor was created|
|updatedAt|string(date-time)|true|none|When the monitor was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|object|monitor|
|status|enabled|
|status|disabled|

<h2 id="tocS_MonitorRun">MonitorRun</h2>
<!-- backwards compatibility -->
<a id="schemamonitorrun"></a>
<a id="schema_MonitorRun"></a>
<a id="tocSmonitorrun"></a>
<a id="tocsmonitorrun"></a>

```json
{
  "id": "string",
  "object": "monitor_run",
  "monitorId": "string",
  "status": "created",
  "completedAt": "1970-01-01T00:00:00Z",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedReason": "string",
  "canceledAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "type": "search"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Monitor Run|
|object|string|true|none|The type of object|
|monitorId|string|true|none|The monitor that the run is associated with|
|status|string|true|none|The status of the Monitor Run|
|completedAt|string(date-time) \| null|true|none|When the run completed|
|failedAt|string(date-time) \| null|true|none|When the run failed|
|failedReason|string \| null|true|none|The reason the run failed|
|canceledAt|string(date-time) \| null|true|none|When the run was canceled|
|createdAt|string(date-time)|true|none|When the run was created|
|updatedAt|string(date-time)|true|none|When the run was last updated|
|type|string|true|none|The type of the Monitor Run|

#### Enumerated Values

|Property|Value|
|---|---|
|object|monitor_run|
|status|created|
|status|running|
|status|completed|
|status|canceled|
|status|failed|
|type|search|
|type|refresh|

<h2 id="tocS_ListWebsetsResponse">ListWebsetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsetsresponse"></a>
<a id="schema_ListWebsetsResponse"></a>
<a id="tocSlistwebsetsresponse"></a>
<a id="tocslistwebsetsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "webset",
      "status": "idle",
      "externalId": "string",
      "title": "string",
      "searches": [
        {
          "id": "string",
          "object": "webset_search",
          "websetId": "string",
          "status": "created",
          "query": "string",
          "entity": {
            "type": "company"
          },
          "criteria": [
            {
              "description": "string",
              "successRate": 0
            }
          ],
          "count": 1,
          "maxPeoplePerCompany": 1,
          "behavior": "override",
          "exclude": [
            {
              "source": "import",
              "id": "string"
            }
          ],
          "scope": [
            {
              "source": "import",
              "id": "string",
              "relationship": {
                "definition": "string",
                "limit": 1
              }
            }
          ],
          "progress": {
            "found": 0,
            "analyzed": 0,
            "completion": 0,
            "timeLeft": 0
          },
          "recall": {
            "expected": {
              "total": 0,
              "confidence": "high",
              "bounds": {
                "min": 0,
                "max": 0
              }
            },
            "reasoning": "string"
          },
          "metadata": {},
          "canceledAt": "1970-01-01T00:00:00Z",
          "canceledReason": "webset_deleted",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "imports": [
        {
          "id": "string",
          "object": "import",
          "status": "pending",
          "format": "csv",
          "entity": {
            "type": "company"
          },
          "title": "string",
          "count": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "failedReason": "invalid_format",
          "failedAt": "1970-01-01T00:00:00Z",
          "failedMessage": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "enrichments": [
        {
          "id": "string",
          "object": "webset_enrichment",
          "status": "pending",
          "websetId": "string",
          "title": "string",
          "description": "string",
          "format": "text",
          "options": [
            {
              "label": "string"
            }
          ],
          "instructions": "string",
          "metadata": {},
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "monitors": [
        {
          "id": "string",
          "object": "monitor",
          "status": "enabled",
          "websetId": "string",
          "cadence": {
            "cron": "string",
            "timezone": "Etc/UTC"
          },
          "behavior": {
            "config": {
              "query": "string",
              "criteria": [
                {
                  "description": "string"
                }
              ],
              "entity": {
                "type": "company"
              },
              "count": 0.1,
              "behavior": "override"
            },
            "type": "search"
          },
          "lastRun": {
            "id": "string",
            "object": "monitor_run",
            "monitorId": "string",
            "status": "created",
            "completedAt": "1970-01-01T00:00:00Z",
            "failedAt": "1970-01-01T00:00:00Z",
            "failedReason": "string",
            "canceledAt": "1970-01-01T00:00:00Z",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z",
            "type": "search"
          },
          "nextRunAt": "1970-01-01T00:00:00Z",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "excludes": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "metadata": {},
      "dashboardUrl": "http://example.com",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Webset](#schemawebset)]|true|none|The list of websets|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_GetWebsetResponse">GetWebsetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebsetresponse"></a>
<a id="schema_GetWebsetResponse"></a>
<a id="tocSgetwebsetresponse"></a>
<a id="tocsgetwebsetresponse"></a>

```json
{
  "id": "string",
  "object": "webset",
  "status": "idle",
  "externalId": "string",
  "title": "string",
  "searches": [
    {
      "id": "string",
      "object": "webset_search",
      "websetId": "string",
      "status": "created",
      "query": "string",
      "entity": {
        "type": "company"
      },
      "criteria": [
        {
          "description": "string",
          "successRate": 0
        }
      ],
      "count": 1,
      "maxPeoplePerCompany": 1,
      "behavior": "override",
      "exclude": [
        {
          "source": "import",
          "id": "string"
        }
      ],
      "scope": [
        {
          "source": "import",
          "id": "string",
          "relationship": {
            "definition": "string",
            "limit": 1
          }
        }
      ],
      "progress": {
        "found": 0,
        "analyzed": 0,
        "completion": 0,
        "timeLeft": 0
      },
      "recall": {
        "expected": {
          "total": 0,
          "confidence": "high",
          "bounds": {
            "min": 0,
            "max": 0
          }
        },
        "reasoning": "string"
      },
      "metadata": {},
      "canceledAt": "1970-01-01T00:00:00Z",
      "canceledReason": "webset_deleted",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "imports": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "enrichments": [
    {
      "id": "string",
      "object": "webset_enrichment",
      "status": "pending",
      "websetId": "string",
      "title": "string",
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ],
      "instructions": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "monitors": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "excludes": [
    {
      "source": "import",
      "id": "string"
    }
  ],
  "metadata": {},
  "dashboardUrl": "http://example.com",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "items": [
    {
      "id": "string",
      "object": "webset_item",
      "source": "search",
      "sourceId": "string",
      "sourceEntityId": "string",
      "scopeId": "string",
      "websetId": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "evaluations": [
        {
          "criterion": "string",
          "reasoning": "string",
          "satisfied": "yes",
          "references": []
        }
      ],
      "enrichments": [
        {
          "object": "enrichment_result",
          "status": "pending",
          "format": "text",
          "result": [
            "string"
          ],
          "reasoning": "string",
          "references": [
            {
              "title": "string",
              "snippet": "string",
              "url": "http://example.com"
            }
          ],
          "enrichmentId": "string"
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the webset|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the webset|
|externalId|string \| null|true|none|The external identifier for the webset|
|title|string \| null|true|none|The title of the webset|
|searches|[[WebsetSearch](#schemawebsetsearch)]|true|none|The searches that have been performed on the webset.|
|imports|[[Import](#schemaimport)]|true|none|Imports that have been performed on the webset.|
|enrichments|[[WebsetEnrichment](#schemawebsetenrichment)]|true|none|The Enrichments to apply to the Webset Items.|
|monitors|[[Monitor](#schemamonitor)]|true|none|The Monitors for the Webset.|
|excludes|[object]|false|none|The Excludes sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.|
|metadata|object|false|none|Set of key-value pairs you want to associate with this object.|
|dashboardUrl|string(uri)|true|none|The URL to view the webset in the Exa dashboard|
|createdAt|string(date-time)|true|none|The date and time the webset was created|
|updatedAt|string(date-time)|true|none|The date and time the webset was updated|
|items|[[WebsetItem](#schemawebsetitem)]|false|none|When expand query parameter contains `items`, this will contain the items in the webset|

#### Enumerated Values

|Property|Value|
|---|---|
|status|idle|
|status|pending|
|status|running|
|status|paused|

<h2 id="tocS_WebsetItem">WebsetItem</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitem"></a>
<a id="schema_WebsetItem"></a>
<a id="tocSwebsetitem"></a>
<a id="tocswebsetitem"></a>

```json
{
  "id": "string",
  "object": "webset_item",
  "source": "search",
  "sourceId": "string",
  "sourceEntityId": "string",
  "scopeId": "string",
  "websetId": "string",
  "properties": {
    "url": "http://example.com",
    "description": "string",
    "person": {
      "name": "string",
      "location": "string",
      "position": "string",
      "company": {
        "name": "string",
        "location": "string"
      },
      "pictureUrl": "http://example.com",
      "workHistory": [
        {
          "title": "string",
          "location": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "company": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ],
      "educationHistory": [
        {
          "degree": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "institution": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ]
    },
    "type": "person"
  },
  "evaluations": [
    {
      "criterion": "string",
      "reasoning": "string",
      "satisfied": "yes",
      "references": []
    }
  ],
  "enrichments": [
    {
      "object": "enrichment_result",
      "status": "pending",
      "format": "text",
      "result": [
        "string"
      ],
      "reasoning": "string",
      "references": [
        {
          "title": "string",
          "snippet": "string",
          "url": "http://example.com"
        }
      ],
      "enrichmentId": "string"
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Webset Item|
|object|string|true|none|The type of object|
|source|string|true|none|The source of the Item|
|sourceId|string|true|none|The unique identifier for the source|
|sourceEntityId|string|false|none|The original identifier used to resolve this item (e.g., email, name, or URL). Only relevant when the source is import.|
|scopeId|string|false|none|The import that sourced this item, when the item came from a scoped search with evaluate enabled on the import.|
|websetId|string|true|none|The unique identifier for the Webset this Item belongs to.|
|properties|[WebsetItemPersonProperties](#schemawebsetitempersonproperties) \| [WebsetItemCompanyProperties](#schemawebsetitemcompanyproperties) \| [WebsetItemArticleProperties](#schemawebsetitemarticleproperties) \| [WebsetItemResearchPaperProperties](#schemawebsetitemresearchpaperproperties) \| [WebsetItemCustomProperties](#schemawebsetitemcustomproperties)|true|none|The properties of the Item|
|evaluations|[[WebsetItemEvaluation](#schemawebsetitemevaluation)]|true|none|The criteria evaluations of the item|
|enrichments|[[EnrichmentResult](#schemaenrichmentresult)]|true|none|The enrichments results of the Webset item|
|createdAt|string(date-time)|true|none|The date and time the item was created|
|updatedAt|string(date-time)|true|none|The date and time the item was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|source|search|
|source|import|

<h2 id="tocS_WebsetItemPersonProperties">WebsetItemPersonProperties</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitempersonproperties"></a>
<a id="schema_WebsetItemPersonProperties"></a>
<a id="tocSwebsetitempersonproperties"></a>
<a id="tocswebsetitempersonproperties"></a>

```json
{
  "url": "http://example.com",
  "description": "string",
  "person": {
    "name": "string",
    "location": "string",
    "position": "string",
    "company": {
      "name": "string",
      "location": "string"
    },
    "pictureUrl": "http://example.com",
    "workHistory": [
      {
        "title": "string",
        "location": "string",
        "dates": {
          "from": "string",
          "to": "string"
        },
        "company": {
          "id": "string",
          "name": "string",
          "linkedinUrl": "string"
        }
      }
    ],
    "educationHistory": [
      {
        "degree": "string",
        "dates": {
          "from": "string",
          "to": "string"
        },
        "institution": {
          "id": "string",
          "name": "string",
          "linkedinUrl": "string"
        }
      }
    ]
  },
  "type": "person"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL of the person profile|
|description|string|true|none|Short description of the relevance of the person|
|person|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_WebsetItemCompanyProperties">WebsetItemCompanyProperties</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitemcompanyproperties"></a>
<a id="schema_WebsetItemCompanyProperties"></a>
<a id="tocSwebsetitemcompanyproperties"></a>
<a id="tocswebsetitemcompanyproperties"></a>

```json
{
  "url": "http://example.com",
  "description": "string",
  "content": "string",
  "company": {
    "name": "string",
    "location": "string",
    "employees": 0,
    "industry": "string",
    "about": "string",
    "logoUrl": "http://example.com",
    "foundedYear": 0,
    "headquarters": {
      "address": "string",
      "city": "string",
      "state": "string",
      "postalCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "financials": {
      "revenueAnnual": 0,
      "fundingTotal": 0,
      "fundingLatestRound": {
        "name": "string",
        "date": "string",
        "amount": 0
      }
    },
    "webTraffic": {
      "visitsMonthly": 0,
      "uniqueVisitors": 0
    }
  },
  "type": "company"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL of the company website|
|description|string|true|none|Short description of the relevance of the company|
|content|string \| null|true|none|The text content of the company website|
|company|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_WebsetItemArticleProperties">WebsetItemArticleProperties</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitemarticleproperties"></a>
<a id="schema_WebsetItemArticleProperties"></a>
<a id="tocSwebsetitemarticleproperties"></a>
<a id="tocswebsetitemarticleproperties"></a>

```json
{
  "url": "http://example.com",
  "description": "string",
  "content": "string",
  "article": {
    "title": "string",
    "author": "string",
    "publishedAt": "string"
  },
  "type": "article"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL of the article|
|description|string|true|none|Short description of the relevance of the article|
|content|string \| null|true|none|The text content for the article|
|article|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_WebsetItemResearchPaperProperties">WebsetItemResearchPaperProperties</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitemresearchpaperproperties"></a>
<a id="schema_WebsetItemResearchPaperProperties"></a>
<a id="tocSwebsetitemresearchpaperproperties"></a>
<a id="tocswebsetitemresearchpaperproperties"></a>

```json
{
  "url": "http://example.com",
  "description": "string",
  "content": "string",
  "researchPaper": {
    "title": "string",
    "author": "string",
    "publishedAt": "string"
  },
  "type": "research_paper"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL of the research paper|
|description|string|true|none|Short description of the relevance of the research paper|
|content|string \| null|true|none|The text content of the research paper|
|researchPaper|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_WebsetItemCustomProperties">WebsetItemCustomProperties</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitemcustomproperties"></a>
<a id="schema_WebsetItemCustomProperties"></a>
<a id="tocSwebsetitemcustomproperties"></a>
<a id="tocswebsetitemcustomproperties"></a>

```json
{
  "url": "http://example.com",
  "description": "string",
  "content": "string",
  "custom": {
    "title": "string",
    "author": "string",
    "publishedAt": "string"
  },
  "type": "custom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL of the Item|
|description|string|true|none|Short description of the Item|
|content|string \| null|true|none|The text content of the Item|
|custom|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_WebsetItemEvaluation">WebsetItemEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitemevaluation"></a>
<a id="schema_WebsetItemEvaluation"></a>
<a id="tocSwebsetitemevaluation"></a>
<a id="tocswebsetitemevaluation"></a>

```json
{
  "criterion": "string",
  "reasoning": "string",
  "satisfied": "yes",
  "references": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criterion|string|true|none|The description of the criterion|
|reasoning|string|true|none|The reasoning for the result of the evaluation|
|satisfied|string|true|none|The satisfaction of the criterion|
|references|[object]|false|none|The references used to generate the result.|

#### Enumerated Values

|Property|Value|
|---|---|
|satisfied|yes|
|satisfied|no|
|satisfied|unclear|

<h2 id="tocS_EnrichmentResult">EnrichmentResult</h2>
<!-- backwards compatibility -->
<a id="schemaenrichmentresult"></a>
<a id="schema_EnrichmentResult"></a>
<a id="tocSenrichmentresult"></a>
<a id="tocsenrichmentresult"></a>

```json
{
  "object": "enrichment_result",
  "status": "pending",
  "format": "text",
  "result": [
    "string"
  ],
  "reasoning": "string",
  "references": [
    {
      "title": "string",
      "snippet": "string",
      "url": "http://example.com"
    }
  ],
  "enrichmentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the enrichment result.|
|format|[WebsetEnrichmentFormat](#schemawebsetenrichmentformat)|true|none|none|
|result|[string]|true|none|The result of the enrichment.|
|reasoning|string \| null|true|none|The reasoning for the result when an Agent is used.|
|references|[object]|true|none|The references used to generate the result.|
|enrichmentId|string|true|none|The id of the Enrichment that generated the result|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|completed|
|status|canceled|
|format|text|
|format|date|
|format|number|
|format|options|
|format|email|
|format|phone|
|format|url|

<h2 id="tocS_ListWebsetItemResponse">ListWebsetItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsetitemresponse"></a>
<a id="schema_ListWebsetItemResponse"></a>
<a id="tocSlistwebsetitemresponse"></a>
<a id="tocslistwebsetitemresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "webset_item",
      "source": "search",
      "sourceId": "string",
      "sourceEntityId": "string",
      "scopeId": "string",
      "websetId": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "evaluations": [
        {
          "criterion": "string",
          "reasoning": "string",
          "satisfied": "yes",
          "references": []
        }
      ],
      "enrichments": [
        {
          "object": "enrichment_result",
          "status": "pending",
          "format": "text",
          "result": [
            "string"
          ],
          "reasoning": "string",
          "references": [
            {
              "title": "string",
              "snippet": "string",
              "url": "http://example.com"
            }
          ],
          "enrichmentId": "string"
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebsetItem](#schemawebsetitem)]|true|none|The list of webset items|
|hasMore|boolean|true|none|Whether there are more Items to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of Items|

<h2 id="tocS_PreviewWebsetResponse">PreviewWebsetResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewwebsetresponse"></a>
<a id="schema_PreviewWebsetResponse"></a>
<a id="tocSpreviewwebsetresponse"></a>
<a id="tocspreviewwebsetresponse"></a>

```json
{
  "search": {
    "entity": {
      "type": "company"
    },
    "criteria": [
      {
        "description": "string"
      }
    ]
  },
  "enrichments": [
    {
      "description": "string",
      "format": "text",
      "options": [
        {
          "label": "string"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "string",
      "properties": {
        "url": "http://example.com",
        "description": "string",
        "person": {
          "name": "string",
          "location": "string",
          "position": "string",
          "company": {
            "name": "string",
            "location": "string"
          },
          "pictureUrl": "http://example.com",
          "workHistory": [
            {
              "title": "string",
              "location": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "company": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ],
          "educationHistory": [
            {
              "degree": "string",
              "dates": {
                "from": "string",
                "to": "string"
              },
              "institution": {
                "id": "string",
                "name": "string",
                "linkedinUrl": "string"
              }
            }
          ]
        },
        "type": "person"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|object|true|none|none|
|enrichments|[object]|true|none|Detected enrichments from the query.|
|items|[[WebsetItemPreview](#schemawebsetitempreview)]|true|none|Preview items matching the search criteria.|

<h2 id="tocS_WebsetItemPreview">WebsetItemPreview</h2>
<!-- backwards compatibility -->
<a id="schemawebsetitempreview"></a>
<a id="schema_WebsetItemPreview"></a>
<a id="tocSwebsetitempreview"></a>
<a id="tocswebsetitempreview"></a>

```json
{
  "id": "string",
  "properties": {
    "url": "http://example.com",
    "description": "string",
    "person": {
      "name": "string",
      "location": "string",
      "position": "string",
      "company": {
        "name": "string",
        "location": "string"
      },
      "pictureUrl": "http://example.com",
      "workHistory": [
        {
          "title": "string",
          "location": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "company": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ],
      "educationHistory": [
        {
          "degree": "string",
          "dates": {
            "from": "string",
            "to": "string"
          },
          "institution": {
            "id": "string",
            "name": "string",
            "linkedinUrl": "string"
          }
        }
      ]
    },
    "type": "person"
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the preview item|
|properties|[WebsetItemPersonProperties](#schemawebsetitempersonproperties) \| [WebsetItemCompanyProperties](#schemawebsetitemcompanyproperties) \| [WebsetItemArticleProperties](#schemawebsetitemarticleproperties) \| [WebsetItemResearchPaperProperties](#schemawebsetitemresearchpaperproperties) \| [WebsetItemCustomProperties](#schemawebsetitemcustomproperties)|true|none|The properties of the preview item|
|createdAt|string(date-time)|true|none|The date and time the preview was created|

<h2 id="tocS_ListMonitorsResponse">ListMonitorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorsresponse"></a>
<a id="schema_ListMonitorsResponse"></a>
<a id="tocSlistmonitorsresponse"></a>
<a id="tocslistmonitorsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "monitor",
      "status": "enabled",
      "websetId": "string",
      "cadence": {
        "cron": "string",
        "timezone": "Etc/UTC"
      },
      "behavior": {
        "config": {
          "query": "string",
          "criteria": [
            {
              "description": "string"
            }
          ],
          "entity": {
            "type": "company"
          },
          "count": 0.1,
          "behavior": "override"
        },
        "type": "search"
      },
      "lastRun": {
        "id": "string",
        "object": "monitor_run",
        "monitorId": "string",
        "status": "created",
        "completedAt": "1970-01-01T00:00:00Z",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedReason": "string",
        "canceledAt": "1970-01-01T00:00:00Z",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "type": "search"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Monitor](#schemamonitor)]|true|none|The list of monitors|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_ListMonitorRunsResponse">ListMonitorRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorrunsresponse"></a>
<a id="schema_ListMonitorRunsResponse"></a>
<a id="tocSlistmonitorrunsresponse"></a>
<a id="tocslistmonitorrunsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "monitor_run",
      "monitorId": "string",
      "status": "created",
      "completedAt": "1970-01-01T00:00:00Z",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedReason": "string",
      "canceledAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "type": "search"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MonitorRun](#schemamonitorrun)]|true|none|The list of monitor runs|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_CreateImportResponse">CreateImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimportresponse"></a>
<a id="schema_CreateImportResponse"></a>
<a id="tocScreateimportresponse"></a>
<a id="tocscreateimportresponse"></a>

```json
{
  "id": "string",
  "object": "import",
  "status": "pending",
  "format": "csv",
  "entity": {
    "type": "company"
  },
  "title": "string",
  "count": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "failedReason": "invalid_format",
  "failedAt": "1970-01-01T00:00:00Z",
  "failedMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "uploadUrl": "string",
  "uploadValidUntil": "string"
}
```

An Import with the URL to upload your file to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Import|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the Import|
|format|string|true|none|The format of the import.|
|entity|[Entity](#schemaentity)|true|none|The type of entity the import contains.|
|title|string|true|none|The title of the import|
|count|number|true|none|The number of entities in the import|
|metadata|object|true|none|Set of key-value pairs you want to associate with this object.|
|failedReason|string \| null|true|none|The reason the import failed|
|failedAt|string(date-time) \| null|true|none|When the import failed|
|failedMessage|string \| null|true|none|A human readable message of the import failure|
|createdAt|string(date-time)|true|none|When the import was created|
|updatedAt|string(date-time)|true|none|When the import was last updated|
|uploadUrl|string|true|none|The URL to upload the file to|
|uploadValidUntil|string|true|none|The date and time until the upload URL is valid. The upload URL will be valid for 1 hour.|

#### Enumerated Values

|Property|Value|
|---|---|
|object|import|
|status|pending|
|status|processing|
|status|completed|
|status|failed|
|status|canceled|
|format|csv|
|format|webset|
|failedReason|invalid_format|
|failedReason|invalid_file_content|
|failedReason|missing_identifier|

<h2 id="tocS_ListImportsResponse">ListImportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsresponse"></a>
<a id="schema_ListImportsResponse"></a>
<a id="tocSlistimportsresponse"></a>
<a id="tocslistimportsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "import",
      "status": "pending",
      "format": "csv",
      "entity": {
        "type": "company"
      },
      "title": "string",
      "count": 0,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "failedReason": "invalid_format",
      "failedAt": "1970-01-01T00:00:00Z",
      "failedMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Import](#schemaimport)]|true|none|The list of imports|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": "string",
  "object": "webhook",
  "status": "active",
  "events": [
    "webset.created"
  ],
  "url": "http://example.com",
  "secret": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the webhook|
|object|string|true|none|The type of object|
|status|string|true|none|The status of the webhook|
|events|[[EventType](#schemaeventtype)]|true|none|The events to trigger the webhook|
|url|string(uri)|true|none|The URL to send the webhook to|
|secret|string \| null|true|none|The secret to verify the webhook signature. Only returned on Webhook creation.|
|metadata|object|false|none|The metadata of the webhook|
|createdAt|string(date-time)|true|none|The date and time the webhook was created|
|updatedAt|string(date-time)|true|none|The date and time the webhook was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|events|webset.created|
|events|webset.deleted|
|events|webset.paused|
|events|webset.idle|
|events|webset.search.created|
|events|webset.search.canceled|
|events|webset.search.completed|
|events|webset.search.updated|
|events|import.created|
|events|import.completed|
|events|webset.item.created|
|events|webset.item.enriched|
|events|monitor.created|
|events|monitor.updated|
|events|monitor.deleted|
|events|monitor.run.created|
|events|monitor.run.completed|
|events|webset.export.created|
|events|webset.export.completed|

<h2 id="tocS_ListWebhooksResponse">ListWebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksresponse"></a>
<a id="schema_ListWebhooksResponse"></a>
<a id="tocSlistwebhooksresponse"></a>
<a id="tocslistwebhooksresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "webhook",
      "status": "active",
      "events": [
        "webset.created"
      ],
      "url": "http://example.com",
      "secret": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Webhook](#schemawebhook)]|true|none|The list of webhooks|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_ListWebhookAttemptsResponse">ListWebhookAttemptsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhookattemptsresponse"></a>
<a id="schema_ListWebhookAttemptsResponse"></a>
<a id="tocSlistwebhookattemptsresponse"></a>
<a id="tocslistwebhookattemptsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "webhook_attempt",
      "eventId": "string",
      "eventType": "webset.created",
      "webhookId": "string",
      "url": "string",
      "successful": true,
      "responseHeaders": {
        "property1": "string",
        "property2": "string"
      },
      "responseBody": "string",
      "responseStatusCode": 0,
      "attempt": 0,
      "attemptedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookAttempt](#schemawebhookattempt)]|true|none|The list of webhook attempts|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_WebhookAttempt">WebhookAttempt</h2>
<!-- backwards compatibility -->
<a id="schemawebhookattempt"></a>
<a id="schema_WebhookAttempt"></a>
<a id="tocSwebhookattempt"></a>
<a id="tocswebhookattempt"></a>

```json
{
  "id": "string",
  "object": "webhook_attempt",
  "eventId": "string",
  "eventType": "webset.created",
  "webhookId": "string",
  "url": "string",
  "successful": true,
  "responseHeaders": {
    "property1": "string",
    "property2": "string"
  },
  "responseBody": "string",
  "responseStatusCode": 0,
  "attempt": 0,
  "attemptedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the webhook attempt|
|object|string|true|none|The type of object|
|eventId|string|true|none|The unique identifier for the event|
|eventType|[EventType](#schemaeventtype)|true|none|The type of event|
|webhookId|string|true|none|The unique identifier for the webhook|
|url|string|true|none|The URL that was used during the attempt|
|successful|boolean|true|none|Whether the attempt was successful|
|responseHeaders|object|true|none|The headers of the response|
|responseBody|string \| null|true|none|The body of the response|
|responseStatusCode|number|true|none|The status code of the response|
|attempt|number|true|none|The attempt number of the webhook|
|attemptedAt|string(date-time)|true|none|The date and time the webhook attempt was made|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|webset.created|
|eventType|webset.deleted|
|eventType|webset.paused|
|eventType|webset.idle|
|eventType|webset.search.created|
|eventType|webset.search.canceled|
|eventType|webset.search.completed|
|eventType|webset.search.updated|
|eventType|import.created|
|eventType|import.completed|
|eventType|webset.item.created|
|eventType|webset.item.enriched|
|eventType|monitor.created|
|eventType|monitor.updated|
|eventType|monitor.deleted|
|eventType|monitor.run.created|
|eventType|monitor.run.completed|
|eventType|webset.export.created|
|eventType|webset.export.completed|

<h2 id="tocS_ListEventsResponse">ListEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsresponse"></a>
<a id="schema_ListEventsResponse"></a>
<a id="tocSlisteventsresponse"></a>
<a id="tocslisteventsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "object": "event",
      "data": {
        "id": "string",
        "object": "webset",
        "status": "idle",
        "externalId": "string",
        "title": "string",
        "searches": [
          {
            "id": "string",
            "object": "webset_search",
            "websetId": "string",
            "status": "created",
            "query": "string",
            "entity": {
              "type": "company"
            },
            "criteria": [
              {
                "description": "string",
                "successRate": 0
              }
            ],
            "count": 1,
            "maxPeoplePerCompany": 1,
            "behavior": "override",
            "exclude": [
              {
                "source": "import",
                "id": "string"
              }
            ],
            "scope": [
              {
                "source": "import",
                "id": "string",
                "relationship": {
                  "definition": "string",
                  "limit": 1
                }
              }
            ],
            "progress": {
              "found": 0,
              "analyzed": 0,
              "completion": 0,
              "timeLeft": 0
            },
            "recall": {
              "expected": {
                "total": 0,
                "confidence": "high",
                "bounds": {
                  "min": 0,
                  "max": 0
                }
              },
              "reasoning": "string"
            },
            "metadata": {},
            "canceledAt": "1970-01-01T00:00:00Z",
            "canceledReason": "webset_deleted",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "imports": [
          {
            "id": "string",
            "object": "import",
            "status": "pending",
            "format": "csv",
            "entity": {
              "type": "company"
            },
            "title": "string",
            "count": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "failedReason": "invalid_format",
            "failedAt": "1970-01-01T00:00:00Z",
            "failedMessage": "string",
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "enrichments": [
          {
            "id": "string",
            "object": "webset_enrichment",
            "status": "pending",
            "websetId": "string",
            "title": "string",
            "description": "string",
            "format": "text",
            "options": [
              {
                "label": "string"
              }
            ],
            "instructions": "string",
            "metadata": {},
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "monitors": [
          {
            "id": "string",
            "object": "monitor",
            "status": "enabled",
            "websetId": "string",
            "cadence": {
              "cron": "string",
              "timezone": "Etc/UTC"
            },
            "behavior": {
              "config": {
                "query": "string",
                "criteria": [
                  {
                    "description": "string"
                  }
                ],
                "entity": {
                  "type": "company"
                },
                "count": 0.1,
                "behavior": "override"
              },
              "type": "search"
            },
            "lastRun": {
              "id": "string",
              "object": "monitor_run",
              "monitorId": "string",
              "status": "created",
              "completedAt": "1970-01-01T00:00:00Z",
              "failedAt": "1970-01-01T00:00:00Z",
              "failedReason": "string",
              "canceledAt": "1970-01-01T00:00:00Z",
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z",
              "type": "search"
            },
            "nextRunAt": "1970-01-01T00:00:00Z",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "excludes": [
          {
            "source": "import",
            "id": "string"
          }
        ],
        "metadata": {},
        "dashboardUrl": "http://example.com",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "type": "webset.created"
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Event](#schemaevent)]|true|none|The list of events|
|hasMore|boolean|true|none|Whether there are more results to paginate through|
|nextCursor|string \| null|true|none|The cursor to paginate through the next set of results|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "string",
  "object": "event",
  "data": {
    "id": "string",
    "object": "webset",
    "status": "idle",
    "externalId": "string",
    "title": "string",
    "searches": [
      {
        "id": "string",
        "object": "webset_search",
        "websetId": "string",
        "status": "created",
        "query": "string",
        "entity": {
          "type": "company"
        },
        "criteria": [
          {
            "description": "string",
            "successRate": 0
          }
        ],
        "count": 1,
        "maxPeoplePerCompany": 1,
        "behavior": "override",
        "exclude": [
          {
            "source": "import",
            "id": "string"
          }
        ],
        "scope": [
          {
            "source": "import",
            "id": "string",
            "relationship": {
              "definition": "string",
              "limit": 1
            }
          }
        ],
        "progress": {
          "found": 0,
          "analyzed": 0,
          "completion": 0,
          "timeLeft": 0
        },
        "recall": {
          "expected": {
            "total": 0,
            "confidence": "high",
            "bounds": {
              "min": 0,
              "max": 0
            }
          },
          "reasoning": "string"
        },
        "metadata": {},
        "canceledAt": "1970-01-01T00:00:00Z",
        "canceledReason": "webset_deleted",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "imports": [
      {
        "id": "string",
        "object": "import",
        "status": "pending",
        "format": "csv",
        "entity": {
          "type": "company"
        },
        "title": "string",
        "count": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "failedReason": "invalid_format",
        "failedAt": "1970-01-01T00:00:00Z",
        "failedMessage": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "enrichments": [
      {
        "id": "string",
        "object": "webset_enrichment",
        "status": "pending",
        "websetId": "string",
        "title": "string",
        "description": "string",
        "format": "text",
        "options": [
          {
            "label": "string"
          }
        ],
        "instructions": "string",
        "metadata": {},
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "monitors": [
      {
        "id": "string",
        "object": "monitor",
        "status": "enabled",
        "websetId": "string",
        "cadence": {
          "cron": "string",
          "timezone": "Etc/UTC"
        },
        "behavior": {
          "config": {
            "query": "string",
            "criteria": [
              {
                "description": "string"
              }
            ],
            "entity": {
              "type": "company"
            },
            "count": 0.1,
            "behavior": "override"
          },
          "type": "search"
        },
        "lastRun": {
          "id": "string",
          "object": "monitor_run",
          "monitorId": "string",
          "status": "created",
          "completedAt": "1970-01-01T00:00:00Z",
          "failedAt": "1970-01-01T00:00:00Z",
          "failedReason": "string",
          "canceledAt": "1970-01-01T00:00:00Z",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "type": "search"
        },
        "nextRunAt": "1970-01-01T00:00:00Z",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "excludes": [
      {
        "source": "import",
        "id": "string"
      }
    ],
    "metadata": {},
    "dashboardUrl": "http://example.com",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "type": "webset.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Webset](#schemawebset)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Webset](#schemawebset)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Webset](#schemawebset)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Webset](#schemawebset)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetItem](#schemawebsetitem)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetItem](#schemawebsetitem)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetSearch](#schemawebsetsearch)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetSearch](#schemawebsetsearch)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetSearch](#schemawebsetsearch)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[WebsetSearch](#schemawebsetsearch)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Import](#schemaimport)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Import](#schemaimport)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Monitor](#schemamonitor)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Monitor](#schemamonitor)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[Monitor](#schemamonitor)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[MonitorRun](#schemamonitorrun)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
|*oneOf*|object|false|none|none|
|id|string|true|none|The unique identifier for the event|
|object|string|true|none|The type of object|
|data|[MonitorRun](#schemamonitorrun)|true|none|none|
|createdAt|string(date-time)|true|none|The date and time the event was created|
|type|string|true|none|The type of event|
