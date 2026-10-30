<h1 id="exa-search-api">Exa Search API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A comprehensive API for internet-scale search, allowing users to perform queries and retrieve results from a wide variety of sources using embeddings-based and traditional search.

Base URLs:

* <a href="https://api.exa.ai">https://api.exa.ai</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **x-api-key**, in: header. API key can be provided either via x-api-key header or Authorization header with Bearer scheme

- HTTP Authentication, scheme: bearer API key can be provided either via x-api-key header or Authorization header with Bearer scheme

<h1 id="exa-search-api-default">Default</h1>

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
    "query": "Latest developments in LLM capabilities",
    "additionalQueries": [
      "LLM advancements",
      "large language model progress"
    ],
    "type": "auto",
    "outputSchema": {
      "property1": null,
      "property2": null
    },
    "category": "research paper",
    "userLocation": "US",
    "numResults": 10,
    "includeDomains": [
      "arxiv.org",
      "paperswithcode.com"
    ],
    "excludeDomains": [
      "string"
    ],
    "startCrawlDate": "2023-01-01",
    "endCrawlDate": "2023-12-31",
    "startPublishedDate": "2023-01-01",
    "endPublishedDate": "2023-12-31",
    "includeText": [
      "large language model"
    ],
    "excludeText": [
      "course"
    ],
    "context": true,
    "moderation": true,
    "contents": {
      "text": true,
      "highlights": true,
      "summary": {
        "query": "Main developments",
        "schema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "title": "Title",
          "type": "object",
          "properties": {
            "Property 1": {
              "type": "string",
              "description": "Description"
            },
            "Property 2": {
              "type": "string",
              "enum": [
                "option 1",
                "option 2",
                "option 3"
              ],
              "description": "Description"
            }
          },
          "required": [
            "Property 1"
          ]
        }
      },
      "livecrawl": "preferred",
      "livecrawlTimeout": 1000,
      "maxAgeHours": 24,
      "subpages": 1,
      "subpageTarget": "sources",
      "extras": {
        "links": 1,
        "imageLinks": 1
      },
      "context": true
    }
  }'
```

`POST /search`

Perform a search with a Exa prompt-engineered query and retrieve a list of relevant results. Optionally get contents.

> Body parameter

```json
{
  "query": "Latest developments in LLM capabilities",
  "additionalQueries": [
    "LLM advancements",
    "large language model progress"
  ],
  "type": "auto",
  "outputSchema": {
    "property1": null,
    "property2": null
  },
  "category": "research paper",
  "userLocation": "US",
  "numResults": 10,
  "includeDomains": [
    "arxiv.org",
    "paperswithcode.com"
  ],
  "excludeDomains": [
    "string"
  ],
  "startCrawlDate": "2023-01-01",
  "endCrawlDate": "2023-12-31",
  "startPublishedDate": "2023-01-01",
  "endPublishedDate": "2023-12-31",
  "includeText": [
    "large language model"
  ],
  "excludeText": [
    "course"
  ],
  "context": true,
  "moderation": true,
  "contents": {
    "text": true,
    "highlights": true,
    "summary": {
      "query": "Main developments",
      "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Title",
        "type": "object",
        "properties": {
          "Property 1": {
            "type": "string",
            "description": "Description"
          },
          "Property 2": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
              "option 3"
            ],
            "description": "Description"
          }
        },
        "required": [
          "Property 1"
        ]
      }
    },
    "livecrawl": "preferred",
    "livecrawlTimeout": 1000,
    "maxAgeHours": 24,
    "subpages": 1,
    "subpageTarget": "sources",
    "extras": {
      "links": 1,
      "imageLinks": 1
    },
    "context": true
  }
}
```

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|The query string for the search.|
|» additionalQueries|body|[string]|false|Additional query variations for deep search. Only works with type="deep" or type="deep-reasoning". When provided, these queries are used alongside the main query for comprehensive results.|
|» type|body|string|false|The type of search. Neural uses an embeddings-based model, auto (default) intelligently combines neural and other search methods, fast uses streamlined versions of the search models, deep is light deep search, deep-reasoning is base deep search, and instant provides the lowest latency search optimized for real-time applications.|
|» outputSchema|body|object|false|JSON schema for deep search structured output mode. When provided, the output.content field is returned as structured JSON matching this schema.|
|» » **additionalProperties**|body|object|false|none|
|» category|body|string|false|A data category to focus on. The `people` and `company` categories have improved quality for finding LinkedIn profiles and company pages. Note: The `company` and `people` categories only support a limited set of filters. The following parameters are NOT supported for these categories: `startPublishedDate`, `endPublishedDate`, `startCrawlDate`, `endCrawlDate`, `includeText`, `excludeText`, `excludeDomains`. For `people` category, `includeDomains` only accepts LinkedIn domains. Using unsupported parameters will result in a 400 error.|
|» userLocation|body|string|false|The two-letter ISO country code of the user, e.g. US.|
|» numResults|body|integer|false|Number of results to return (up to thousands of results available for custom plans)|
|» includeDomains|body|[string]|false|List of domains to include in the search. If specified, results will only come from these domains.|
|» excludeDomains|body|[string]|false|List of domains to exclude from search results. If specified, no results will be returned from these domains.|
|» startCrawlDate|body|string(date-time)|false|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled after this date. Must be specified in ISO 8601 format.|
|» endCrawlDate|body|string(date-time)|false|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled before this date. Must be specified in ISO 8601 format.|
|» startPublishedDate|body|string(date-time)|false|Only links with a published date after this will be returned. Must be specified in ISO 8601 format.|
|» endPublishedDate|body|string(date-time)|false|Only links with a published date before this will be returned. Must be specified in ISO 8601 format.|
|» includeText|body|[string]|false|List of strings that must be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words.|
|» excludeText|body|[string]|false|List of strings that must not be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words. Checks from the first 1000 words of the webpage text.|
|» context|body|boolean \| object|false|none|
|» » *oneOf*|body|boolean|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|object|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » maxCharacters|body|integer|false|Deprecated. Maximum character limit for the context string.|
|» moderation|body|boolean|false|Enable content moderation to filter unsafe content from search results.|
|» contents|body|[ContentsRequest](#schemacontentsrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|neural|
|» type|fast|
|» type|auto|
|» type|deep|
|» type|deep-reasoning|
|» type|instant|
|» category|company|
|» category|research paper|
|» category|news|
|» category|pdf|
|» category|github|
|» category|personal site|
|» category|people|
|» category|financial report|

> Example responses

> 200 Response

```json
{
  "requestId": "b5947044c4b78efa9552a7c89b306d95",
  "results": [
    {
      "title": "A Comprehensive Overview of Large Language Models",
      "url": "https://arxiv.org/pdf/2307.06435.pdf",
      "publishedDate": "2023-11-16T01:36:32.547Z",
      "author": "Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan",
      "score": 0.4600165784358978,
      "id": "https://arxiv.org/abs/2307.06435",
      "image": "https://arxiv.org/pdf/2307.06435.pdf/page_1.png",
      "favicon": "https://arxiv.org/favicon.ico",
      "text": "Abstract Large Language Models (LLMs) have recently demonstrated remarkable capabilities...",
      "highlights": [
        "Such requirements have limited their adoption..."
      ],
      "highlightScores": [
        0.4600165784358978
      ],
      "summary": "This overview paper on Large Language Models (LLMs) highlights key developments...",
      "subpages": [
        {
          "id": "https://arxiv.org/abs/2303.17580",
          "url": "https://arxiv.org/pdf/2303.17580.pdf",
          "title": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face",
          "author": "Yongliang  Shen, Microsoft Research Asia, Kaitao  Song, Microsoft Research Asia, Xu  Tan, Microsoft Research Asia, Dongsheng  Li, Microsoft Research Asia, Weiming  Lu, Microsoft Research Asia, Yueting  Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn, Zhejiang  University, Microsoft Research Asia, Microsoft  Research, Microsoft Research Asia",
          "publishedDate": "2023-11-16T01:36:20.486Z",
          "text": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face Date Published: 2023-05-25 Authors: Yongliang Shen, Microsoft Research Asia Kaitao Song, Microsoft Research Asia Xu Tan, Microsoft Research Asia Dongsheng Li, Microsoft Research Asia Weiming Lu, Microsoft Research Asia Yueting Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn Zhejiang University, Microsoft Research Asia Microsoft Research, Microsoft Research Asia Abstract Solving complicated AI tasks with different domains and modalities is a key step toward artificial general intelligence. While there are abundant AI models available for different domains and modalities, they cannot handle complicated AI tasks. Considering large language models (LLMs) have exhibited exceptional ability in language understanding, generation, interaction, and reasoning, we advocate that LLMs could act as a controller to manage existing AI models to solve complicated AI tasks and language could be a generic interface to empower t",
          "summary": "HuggingGPT is a framework using ChatGPT as a central controller to orchestrate various AI models from Hugging Face to solve complex tasks. ChatGPT plans the task, selects appropriate models based on their descriptions, executes subtasks, and summarizes the results. This approach addresses limitations of LLMs by allowing them to handle multimodal data (vision, speech) and coordinate multiple models for complex tasks, paving the way for more advanced AI systems.",
          "highlights": [
            "2) Recently, some researchers started to investigate the integration of using tools or models in LLMs  ."
          ],
          "highlightScores": [
            0.32679107785224915
          ]
        }
      ],
      "extras": {
        "links": []
      },
      "entities": [
        {
          "id": "https://exa.ai/library/company/exa",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "Exa",
            "foundedYear": 2022,
            "description": "AI-powered search engine",
            "workforce": {
              "total": 500
            },
            "headquarters": {
              "address": "123 Main St",
              "city": "San Francisco",
              "postalCode": "94105",
              "country": "United States"
            },
            "financials": {
              "revenueAnnual": 1000000000,
              "fundingTotal": 500000000,
              "fundingLatestRound": {
                "name": "Series B",
                "date": "2023-06-15",
                "amount": 50000000
              }
            },
            "webTraffic": {
              "visitsMonthly": 266306714
            }
          }
        }
      ]
    }
  ],
  "searchType": "auto",
  "context": "string",
  "output": {
    "content": "string",
    "grounding": [
      {
        "field": "string",
        "citations": [
          {
            "url": "string",
            "title": "string"
          }
        ],
        "confidence": "low"
      }
    ]
  },
  "costDollars": {
    "total": 0.005,
    "breakDown": [
      {
        "search": 0.005,
        "contents": 0,
        "breakdown": {
          "neuralSearch": 0.005,
          "deepSearch": 0.015,
          "contentText": 0,
          "contentHighlight": 0,
          "contentSummary": 0
        }
      }
    ],
    "perRequestPrices": {
      "neuralSearch_1_25_results": 0.005,
      "neuralSearch_26_100_results": 0.025,
      "neuralSearch_100_plus_results": 1,
      "deepSearch_1_25_results": 0.015,
      "deepSearch_26_100_results": 0.075
    },
    "perPagePrices": {
      "contentText": 0.001,
      "contentHighlight": 0.001,
      "contentSummary": 0.001
    }
  }
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request|
|results|[[ResultWithContent](#schemaresultwithcontent)]|false|none|A list of search results containing title, URL, published date, and author.|
|searchType|string|false|none|For auto searches, indicates which search type was selected.|
|context|string|false|none|Deprecated. Combined context string from search results. Use highlights or text instead.|
|output|object|false|none|Deep-search synthesized output. Returned for deep search variants.|
|» content|string \| object|true|none|Deep-search synthesized content. String by default, or object when outputSchema is provided.|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» grounding|[object]|true|none|Field-level grounding for synthesized output.|
|» » field|string|true|none|Field path in output.content (for example, content or companies[0].funding).|
|» » citations|[object]|true|none|Sources supporting this output field.|
|» » » url|string|true|none|none|
|» » » title|string|true|none|none|
|» » confidence|string|true|none|none|
|costDollars|[CostDollars](#schemacostdollars)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|neural|
|searchType|deep|
|searchType|deep-reasoning|
|» » confidence|low|
|» » confidence|medium|
|» » confidence|high|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
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
    "url": "https://arxiv.org/abs/2307.06435",
    "excludeSourceDomain": true,
    "numResults": 10,
    "includeDomains": [
      "arxiv.org",
      "paperswithcode.com"
    ],
    "excludeDomains": [
      "string"
    ],
    "startCrawlDate": "2023-01-01",
    "endCrawlDate": "2023-12-31",
    "startPublishedDate": "2023-01-01",
    "endPublishedDate": "2023-12-31",
    "includeText": [
      "large language model"
    ],
    "excludeText": [
      "course"
    ],
    "context": true,
    "moderation": true,
    "contents": {
      "text": true,
      "highlights": true,
      "summary": {
        "query": "Main developments",
        "schema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "title": "Title",
          "type": "object",
          "properties": {
            "Property 1": {
              "type": "string",
              "description": "Description"
            },
            "Property 2": {
              "type": "string",
              "enum": [
                "option 1",
                "option 2",
                "option 3"
              ],
              "description": "Description"
            }
          },
          "required": [
            "Property 1"
          ]
        }
      },
      "livecrawl": "preferred",
      "livecrawlTimeout": 1000,
      "maxAgeHours": 24,
      "subpages": 1,
      "subpageTarget": "sources",
      "extras": {
        "links": 1,
        "imageLinks": 1
      },
      "context": true
    }
  }'
```

`POST /findSimilar`

Find similar links to the link provided. Optionally get contents.

> Body parameter

```json
{
  "url": "https://arxiv.org/abs/2307.06435",
  "excludeSourceDomain": true,
  "numResults": 10,
  "includeDomains": [
    "arxiv.org",
    "paperswithcode.com"
  ],
  "excludeDomains": [
    "string"
  ],
  "startCrawlDate": "2023-01-01",
  "endCrawlDate": "2023-12-31",
  "startPublishedDate": "2023-01-01",
  "endPublishedDate": "2023-12-31",
  "includeText": [
    "large language model"
  ],
  "excludeText": [
    "course"
  ],
  "context": true,
  "moderation": true,
  "contents": {
    "text": true,
    "highlights": true,
    "summary": {
      "query": "Main developments",
      "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Title",
        "type": "object",
        "properties": {
          "Property 1": {
            "type": "string",
            "description": "Description"
          },
          "Property 2": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
              "option 3"
            ],
            "description": "Description"
          }
        },
        "required": [
          "Property 1"
        ]
      }
    },
    "livecrawl": "preferred",
    "livecrawlTimeout": 1000,
    "maxAgeHours": 24,
    "subpages": 1,
    "subpageTarget": "sources",
    "extras": {
      "links": 1,
      "imageLinks": 1
    },
    "context": true
  }
}
```

<h3 id="find-similar-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string|true|The url for which you would like to find similar links.|
|» excludeSourceDomain|body|boolean|false|If true, excludes links from the same domain as the provided URL from the results.|
|» numResults|body|integer|false|Number of results to return (up to thousands of results available for custom plans)|
|» includeDomains|body|[string]|false|List of domains to include in the search. If specified, results will only come from these domains.|
|» excludeDomains|body|[string]|false|List of domains to exclude from search results. If specified, no results will be returned from these domains.|
|» startCrawlDate|body|string(date-time)|false|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled after this date. Must be specified in ISO 8601 format.|
|» endCrawlDate|body|string(date-time)|false|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled before this date. Must be specified in ISO 8601 format.|
|» startPublishedDate|body|string(date-time)|false|Only links with a published date after this will be returned. Must be specified in ISO 8601 format.|
|» endPublishedDate|body|string(date-time)|false|Only links with a published date before this will be returned. Must be specified in ISO 8601 format.|
|» includeText|body|[string]|false|List of strings that must be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words.|
|» excludeText|body|[string]|false|List of strings that must not be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words. Checks from the first 1000 words of the webpage text.|
|» context|body|boolean \| object|false|none|
|» » *oneOf*|body|boolean|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|object|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » maxCharacters|body|integer|false|Deprecated. Maximum character limit for the context string.|
|» moderation|body|boolean|false|Enable content moderation to filter unsafe content from search results.|
|» contents|body|[ContentsRequest](#schemacontentsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "requestId": "c6958155d5c89ffa0663b7c90c407396",
  "context": "string",
  "results": [
    {
      "title": "A Comprehensive Overview of Large Language Models",
      "url": "https://arxiv.org/pdf/2307.06435.pdf",
      "publishedDate": "2023-11-16T01:36:32.547Z",
      "author": "Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan",
      "score": 0.4600165784358978,
      "id": "https://arxiv.org/abs/2307.06435",
      "image": "https://arxiv.org/pdf/2307.06435.pdf/page_1.png",
      "favicon": "https://arxiv.org/favicon.ico",
      "text": "Abstract Large Language Models (LLMs) have recently demonstrated remarkable capabilities...",
      "highlights": [
        "Such requirements have limited their adoption..."
      ],
      "highlightScores": [
        0.4600165784358978
      ],
      "summary": "This overview paper on Large Language Models (LLMs) highlights key developments...",
      "subpages": [
        {
          "id": "https://arxiv.org/abs/2303.17580",
          "url": "https://arxiv.org/pdf/2303.17580.pdf",
          "title": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face",
          "author": "Yongliang  Shen, Microsoft Research Asia, Kaitao  Song, Microsoft Research Asia, Xu  Tan, Microsoft Research Asia, Dongsheng  Li, Microsoft Research Asia, Weiming  Lu, Microsoft Research Asia, Yueting  Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn, Zhejiang  University, Microsoft Research Asia, Microsoft  Research, Microsoft Research Asia",
          "publishedDate": "2023-11-16T01:36:20.486Z",
          "text": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face Date Published: 2023-05-25 Authors: Yongliang Shen, Microsoft Research Asia Kaitao Song, Microsoft Research Asia Xu Tan, Microsoft Research Asia Dongsheng Li, Microsoft Research Asia Weiming Lu, Microsoft Research Asia Yueting Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn Zhejiang University, Microsoft Research Asia Microsoft Research, Microsoft Research Asia Abstract Solving complicated AI tasks with different domains and modalities is a key step toward artificial general intelligence. While there are abundant AI models available for different domains and modalities, they cannot handle complicated AI tasks. Considering large language models (LLMs) have exhibited exceptional ability in language understanding, generation, interaction, and reasoning, we advocate that LLMs could act as a controller to manage existing AI models to solve complicated AI tasks and language could be a generic interface to empower t",
          "summary": "HuggingGPT is a framework using ChatGPT as a central controller to orchestrate various AI models from Hugging Face to solve complex tasks. ChatGPT plans the task, selects appropriate models based on their descriptions, executes subtasks, and summarizes the results. This approach addresses limitations of LLMs by allowing them to handle multimodal data (vision, speech) and coordinate multiple models for complex tasks, paving the way for more advanced AI systems.",
          "highlights": [
            "2) Recently, some researchers started to investigate the integration of using tools or models in LLMs  ."
          ],
          "highlightScores": [
            0.32679107785224915
          ]
        }
      ],
      "extras": {
        "links": []
      },
      "entities": [
        {
          "id": "https://exa.ai/library/company/exa",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "Exa",
            "foundedYear": 2022,
            "description": "AI-powered search engine",
            "workforce": {
              "total": 500
            },
            "headquarters": {
              "address": "123 Main St",
              "city": "San Francisco",
              "postalCode": "94105",
              "country": "United States"
            },
            "financials": {
              "revenueAnnual": 1000000000,
              "fundingTotal": 500000000,
              "fundingLatestRound": {
                "name": "Series B",
                "date": "2023-06-15",
                "amount": 50000000
              }
            },
            "webTraffic": {
              "visitsMonthly": 266306714
            }
          }
        }
      ]
    }
  ],
  "costDollars": {
    "total": 0.005,
    "breakDown": [
      {
        "search": 0.005,
        "contents": 0,
        "breakdown": {
          "neuralSearch": 0.005,
          "deepSearch": 0.015,
          "contentText": 0,
          "contentHighlight": 0,
          "contentSummary": 0
        }
      }
    ],
    "perRequestPrices": {
      "neuralSearch_1_25_results": 0.005,
      "neuralSearch_26_100_results": 0.025,
      "neuralSearch_100_plus_results": 1,
      "deepSearch_1_25_results": 0.015,
      "deepSearch_26_100_results": 0.075
    },
    "perPagePrices": {
      "contentText": 0.001,
      "contentHighlight": 0.001,
      "contentSummary": 0.001
    }
  }
}
```

<h3 id="find-similar-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="find-similar-links-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request|
|context|string|false|none|Deprecated. Combined context string from search results. Use highlights or text instead.|
|results|[[ResultWithContent](#schemaresultwithcontent)]|false|none|A list of search results containing title, URL, published date, and author.|
|costDollars|[CostDollars](#schemacostdollars)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get Contents

<a id="opIdgetContents"></a>

> Code samples

```bash
curl https://api.exa.ai/contents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "urls": [
      "https://arxiv.org/pdf/2307.06435"
    ],
    "ids": [
      "https://arxiv.org/pdf/2307.06435"
    ],
    "text": true,
    "highlights": true,
    "summary": {
      "query": "Main developments",
      "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Title",
        "type": "object",
        "properties": {
          "Property 1": {
            "type": "string",
            "description": "Description"
          },
          "Property 2": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
              "option 3"
            ],
            "description": "Description"
          }
        },
        "required": [
          "Property 1"
        ]
      }
    },
    "livecrawl": "preferred",
    "livecrawlTimeout": 1000,
    "maxAgeHours": 24,
    "subpages": 1,
    "subpageTarget": "sources",
    "extras": {
      "links": 1,
      "imageLinks": 1
    },
    "context": true
  }'
```

`POST /contents`

> Body parameter

```json
{
  "urls": [
    "https://arxiv.org/pdf/2307.06435"
  ],
  "ids": [
    "https://arxiv.org/pdf/2307.06435"
  ],
  "text": true,
  "highlights": true,
  "summary": {
    "query": "Main developments",
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Title",
      "type": "object",
      "properties": {
        "Property 1": {
          "type": "string",
          "description": "Description"
        },
        "Property 2": {
          "type": "string",
          "enum": [
            "option 1",
            "option 2",
            "option 3"
          ],
          "description": "Description"
        }
      },
      "required": [
        "Property 1"
      ]
    }
  },
  "livecrawl": "preferred",
  "livecrawlTimeout": 1000,
  "maxAgeHours": 24,
  "subpages": 1,
  "subpageTarget": "sources",
  "extras": {
    "links": 1,
    "imageLinks": 1
  },
  "context": true
}
```

<h3 id="get-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string]|true|Array of URLs to crawl (backwards compatible with 'ids' parameter).|
|» ids|body|[string]|false|**Deprecated.** Deprecated - use 'urls' instead. Array of document IDs obtained from searches.|
|» text|body|boolean \| object|false|none|
|» » *oneOf*|body|boolean|false|If true, returns full page text with default settings. If false, disables text return.|
|» » *oneOf*|body|object|false|Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure.|
|» » maxCharacters|body|integer|false|Maximum character limit for the full page text. Useful for controlling response size and API costs.|
|» » includeHtmlTags|body|boolean|false|Include HTML tags in the response, which can help LLMs understand text structure and formatting.|
|» » verbosity|body|string|false|Controls the verbosity level of returned content. Requires livecrawl: "always" to take effect.<br>- compact: Most concise output, main content only (default)<br>- standard: Balanced content with more detail<br>- full: Complete content including all sections<br>|
|» » includeSections|body|[string]|false|Only include content from these semantic page sections. Requires livecrawl: "always" to take effect.<br>|
|» » excludeSections|body|[string]|false|Exclude content from these semantic page sections. Requires livecrawl: "always" to take effect.<br>|
|» highlights|body|boolean \| object|false|Text snippets the LLM identifies as most relevant from each page.|
|» » *oneOf*|body|boolean|false|If true, returns highlights with default settings. If false, disables highlights.|
|» » *oneOf*|body|object|false|Advanced options for controlling highlight extraction. Use this when you need to customize the number of sentences, highlights per URL, or provide a custom query.|
|» » maxCharacters|body|integer|false|Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL.|
|» » numSentences|body|integer|false|**Deprecated.** Deprecated: use maxCharacters instead. The number of sentences to return for each snippet.|
|» » highlightsPerUrl|body|integer|false|**Deprecated.** Deprecated: use maxCharacters instead. The number of snippets to return for each result.|
|» » query|body|string|false|Custom query to direct the LLM's selection of highlights.|
|» summary|body|object|false|Summary of the webpage|
|» » query|body|string|false|Custom query for the LLM-generated summary.|
|» » schema|body|object|false|JSON schema for structured output from summary. <br>See https://json-schema.org/overview/what-is-jsonschema for JSON Schema documentation.<br>|
|» livecrawl|body|string|false|**Deprecated.** **Deprecated**: Use `maxAgeHours` instead for more precise control over content freshness.<br><br>Options for livecrawling pages.<br>'never': Disable livecrawling (default for neural search).<br>'fallback': Livecrawl when cache is empty.<br>'preferred': Always try to livecrawl, but fall back to cache if crawling fails.<br>'always': Always live-crawl, never use cache. Only use if you cannot tolerate any cached content. This option is not recommended unless consulted with the Exa team.<br>|
|» livecrawlTimeout|body|integer|false|The timeout for livecrawling in milliseconds.|
|» maxAgeHours|body|integer|false|Maximum age of cached content in hours. Controls when livecrawling is triggered based on content freshness.<br>- Positive value (e.g. 24): Use cached content if it's less than this many hours old, otherwise livecrawl.<br>- 0: Always livecrawl, never use cache.<br>- -1: Never livecrawl, always use cache.<br>- Omit (default): Livecrawl as fallback only when no cached content exists.<br>|
|» subpages|body|integer|false|The number of subpages to crawl. The actual number crawled may be limited by system constraints.|
|» subpageTarget|body|string \| [string]|false|Keyword to find specific subpages of search results. Can be a single string or an array of strings, comma delimited.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» extras|body|object|false|Extra parameters to pass.|
|» » links|body|integer|false|Number of URLs to return from each webpage.|
|» » imageLinks|body|integer|false|Number of images to return for each result.|
|» context|body|boolean \| object|false|none|
|» » *oneOf*|body|boolean|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » *oneOf*|body|object|false|**Deprecated.** Deprecated: Use highlights or text instead. Returns page contents as a combined context string.|
|» » maxCharacters|body|integer|false|Deprecated. Maximum character limit for the context string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » verbosity|compact|
|» » verbosity|standard|
|» » verbosity|full|
|» » includeSections|header|
|» » includeSections|navigation|
|» » includeSections|banner|
|» » includeSections|body|
|» » includeSections|sidebar|
|» » includeSections|footer|
|» » includeSections|metadata|
|» » excludeSections|header|
|» » excludeSections|navigation|
|» » excludeSections|banner|
|» » excludeSections|body|
|» » excludeSections|sidebar|
|» » excludeSections|footer|
|» » excludeSections|metadata|
|» livecrawl|never|
|» livecrawl|fallback|
|» livecrawl|preferred|
|» livecrawl|always|

> Example responses

> 200 Response

```json
{
  "requestId": "e492118ccdedcba5088bfc4357a8a125",
  "results": [
    {
      "title": "A Comprehensive Overview of Large Language Models",
      "url": "https://arxiv.org/pdf/2307.06435.pdf",
      "publishedDate": "2023-11-16T01:36:32.547Z",
      "author": "Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan",
      "score": 0.4600165784358978,
      "id": "https://arxiv.org/abs/2307.06435",
      "image": "https://arxiv.org/pdf/2307.06435.pdf/page_1.png",
      "favicon": "https://arxiv.org/favicon.ico",
      "text": "Abstract Large Language Models (LLMs) have recently demonstrated remarkable capabilities...",
      "highlights": [
        "Such requirements have limited their adoption..."
      ],
      "highlightScores": [
        0.4600165784358978
      ],
      "summary": "This overview paper on Large Language Models (LLMs) highlights key developments...",
      "subpages": [
        {
          "id": "https://arxiv.org/abs/2303.17580",
          "url": "https://arxiv.org/pdf/2303.17580.pdf",
          "title": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face",
          "author": "Yongliang  Shen, Microsoft Research Asia, Kaitao  Song, Microsoft Research Asia, Xu  Tan, Microsoft Research Asia, Dongsheng  Li, Microsoft Research Asia, Weiming  Lu, Microsoft Research Asia, Yueting  Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn, Zhejiang  University, Microsoft Research Asia, Microsoft  Research, Microsoft Research Asia",
          "publishedDate": "2023-11-16T01:36:20.486Z",
          "text": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face Date Published: 2023-05-25 Authors: Yongliang Shen, Microsoft Research Asia Kaitao Song, Microsoft Research Asia Xu Tan, Microsoft Research Asia Dongsheng Li, Microsoft Research Asia Weiming Lu, Microsoft Research Asia Yueting Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn Zhejiang University, Microsoft Research Asia Microsoft Research, Microsoft Research Asia Abstract Solving complicated AI tasks with different domains and modalities is a key step toward artificial general intelligence. While there are abundant AI models available for different domains and modalities, they cannot handle complicated AI tasks. Considering large language models (LLMs) have exhibited exceptional ability in language understanding, generation, interaction, and reasoning, we advocate that LLMs could act as a controller to manage existing AI models to solve complicated AI tasks and language could be a generic interface to empower t",
          "summary": "HuggingGPT is a framework using ChatGPT as a central controller to orchestrate various AI models from Hugging Face to solve complex tasks. ChatGPT plans the task, selects appropriate models based on their descriptions, executes subtasks, and summarizes the results. This approach addresses limitations of LLMs by allowing them to handle multimodal data (vision, speech) and coordinate multiple models for complex tasks, paving the way for more advanced AI systems.",
          "highlights": [
            "2) Recently, some researchers started to investigate the integration of using tools or models in LLMs  ."
          ],
          "highlightScores": [
            0.32679107785224915
          ]
        }
      ],
      "extras": {
        "links": []
      },
      "entities": [
        {
          "id": "https://exa.ai/library/company/exa",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "Exa",
            "foundedYear": 2022,
            "description": "AI-powered search engine",
            "workforce": {
              "total": 500
            },
            "headquarters": {
              "address": "123 Main St",
              "city": "San Francisco",
              "postalCode": "94105",
              "country": "United States"
            },
            "financials": {
              "revenueAnnual": 1000000000,
              "fundingTotal": 500000000,
              "fundingLatestRound": {
                "name": "Series B",
                "date": "2023-06-15",
                "amount": 50000000
              }
            },
            "webTraffic": {
              "visitsMonthly": 266306714
            }
          }
        }
      ]
    }
  ],
  "context": "string",
  "statuses": [
    {
      "id": "https://example.com",
      "status": "success",
      "error": {
        "tag": "CRAWL_NOT_FOUND",
        "httpStatusCode": 404
      }
    }
  ],
  "costDollars": {
    "total": 0.005,
    "breakDown": [
      {
        "search": 0.005,
        "contents": 0,
        "breakdown": {
          "neuralSearch": 0.005,
          "deepSearch": 0.015,
          "contentText": 0,
          "contentHighlight": 0,
          "contentSummary": 0
        }
      }
    ],
    "perRequestPrices": {
      "neuralSearch_1_25_results": 0.005,
      "neuralSearch_26_100_results": 0.025,
      "neuralSearch_100_plus_results": 1,
      "deepSearch_1_25_results": 0.015,
      "deepSearch_26_100_results": 0.075
    },
    "perPagePrices": {
      "contentText": 0.001,
      "contentHighlight": 0.001,
      "contentSummary": 0.001
    }
  }
}
```

<h3 id="get-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-contents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request|
|results|[[ResultWithContent](#schemaresultwithcontent)]|false|none|none|
|context|string|false|none|Deprecated. Combined context string from search results. Use highlights or text instead.|
|statuses|[object]|false|none|Status information for each requested URL|
|» id|string|false|none|The URL that was requested|
|» status|string|false|none|Status of the content fetch operation|
|» error|object \| null|false|none|Error details, only present when status is "error"|
|» » tag|string|false|none|Specific error type|
|» » httpStatusCode|integer \| null|false|none|The corresponding HTTP status code|
|costDollars|[CostDollars](#schemacostdollars)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|error|
|» » tag|CRAWL_NOT_FOUND|
|» » tag|CRAWL_TIMEOUT|
|» » tag|CRAWL_LIVECRAWL_TIMEOUT|
|» » tag|SOURCE_NOT_AVAILABLE|
|» » tag|UNSUPPORTED_URL|
|» » tag|CRAWL_UNKNOWN_ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Generate an answer from search results

<a id="opIdanswer"></a>

> Code samples

```bash
curl https://api.exa.ai/answer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "query": "What is the latest valuation of SpaceX?",
    "stream": false,
    "text": false,
    "outputSchema": {
      "type": "object",
      "properties": {},
      "required": [
        "string"
      ],
      "description": "string",
      "additionalProperties": false
    }
  }'
```

`POST /answer`

Performs a search based on the query and generates either a direct answer or a detailed summary with citations, depending on the query type.


> Body parameter

```json
{
  "query": "What is the latest valuation of SpaceX?",
  "stream": false,
  "text": false,
  "outputSchema": {
    "type": "object",
    "properties": {},
    "required": [
      "string"
    ],
    "description": "string",
    "additionalProperties": false
  }
}
```

<h3 id="generate-an-answer-from-search-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|The question or query to answer.|
|» stream|body|boolean|false|If true, the response is returned as a server-sent events (SSS) stream.|
|» text|body|boolean|false|If true, the response includes full text content in the search results|
|» outputSchema|body|object|false|A [JSON Schema Draft 7](https://json-schema.org/draft-07) specification for the desired answer structure. When provided, the answer will be returned as a structured object matching the schema instead of a plain string.|
|» » type|body|string|false|The root schema type (typically "object").|
|» » properties|body|object|false|An object where each key is a property name and each value is a JSON Schema describing that property (with `type`, `description`, etc).|
|» » required|body|[string]|false|List of required property names.|
|» » description|body|string|false|A description of the schema.|
|» » additionalProperties|body|boolean|false|Whether to allow properties not listed in `properties`.|

> Example responses

> 200 Response

```json
{
  "answer": "$350 billion.",
  "citations": [
    {
      "id": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
      "url": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
      "title": "SpaceX valued at $350bn as company agrees to buy shares from ...",
      "author": "Dan Milmon",
      "publishedDate": "2023-11-16T01:36:32.547Z",
      "text": "SpaceX valued at $350bn as company agrees to buy shares from ...",
      "image": "https://i.guim.co.uk/img/media/7cfee7e84b24b73c97a079c402642a333ad31e77/0_380_6176_3706/master/6176.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=71ebb2fbf458c185229d02d380c01530",
      "favicon": "https://assets.guim.co.uk/static/frontend/icons/homescreen/apple-touch-icon.svg"
    }
  ],
  "costDollars": {
    "total": 0.005,
    "breakDown": [
      {
        "search": 0.005,
        "contents": 0,
        "breakdown": {
          "neuralSearch": 0.005,
          "deepSearch": 0.015,
          "contentText": 0,
          "contentHighlight": 0,
          "contentSummary": 0
        }
      }
    ],
    "perRequestPrices": {
      "neuralSearch_1_25_results": 0.005,
      "neuralSearch_26_100_results": 0.025,
      "neuralSearch_100_plus_results": 1,
      "deepSearch_1_25_results": 0.015,
      "deepSearch_26_100_results": 0.075
    },
    "perPagePrices": {
      "contentText": 0.001,
      "contentHighlight": 0.001,
      "contentSummary": 0.001
    }
  }
}
```

<h3 id="generate-an-answer-from-search-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="generate-an-answer-from-search-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string \| object|false|none|The generated answer based on search results. Returns a string by default, or a structured object matching the provided outputSchema.|
|» *oneOf*|string|false|none|none|
|» *oneOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|citations|[[AnswerCitation](#schemaanswercitation)]|false|none|Search results used to generate the answer.|
|costDollars|[CostDollars](#schemacostdollars)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="exa-search-api-research">Research</h1>

## List research tasks

<a id="opIdresearch-tasks-list"></a>

> Code samples

```bash
curl https://api.exa.ai/research/v0/tasks \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /research/v0/tasks`

<h3 id="list-research-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|The cursor to paginate through the results|
|limit|query|number|false|The number of results to return|

> Example responses

> 200 Response

```json
{
  "requestId": "b5947044c4b78efa9552a7c89b306d95",
  "data": [
    {
      "id": "string",
      "status": "running",
      "instructions": "string",
      "schema": {
        "property1": null,
        "property2": null
      },
      "data": {
        "property1": null,
        "property2": null
      },
      "citations": {
        "property1": [
          {
            "id": "string",
            "url": "string",
            "title": "string",
            "snippet": "string"
          }
        ],
        "property2": [
          {
            "id": "string",
            "url": "string",
            "title": "string",
            "snippet": "string"
          }
        ]
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string"
}
```

<h3 id="list-research-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of research tasks|Inline|

<h3 id="list-research-tasks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Unique identifier for the request|
|data|[[ResearchTaskDto](#schemaresearchtaskdto)]|false|none|The list of research tasks|
|hasMore|boolean|false|none|Whether there are more results to paginate through|
|nextCursor|string \| null|false|none|The cursor to paginate through the next set of results|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Create a research task with instructions and an output schema

<a id="opIdresearch-tasks-create"></a>

> Code samples

```bash
curl https://api.exa.ai/research/v0/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "instructions": "What species of ant are similar to honeypot ants?",
    "model": "exa-research",
    "output": {
      "schema": {
        "type": "object",
        "properties": {
          "answer": {
            "type": "string"
          }
        }
      }
    }
  }'
```

`POST /research/v0/tasks`

> Body parameter

```json
{
  "instructions": "What species of ant are similar to honeypot ants?",
  "model": "exa-research",
  "output": {
    "schema": {
      "type": "object",
      "properties": {
        "answer": {
          "type": "string"
        }
      }
    }
  }
}
```

<h3 id="create-a-research-task-with-instructions-and-an-output-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» instructions|body|string|true|Instructions for what the research task should accomplish|
|» model|body|string|false|none|
|» output|body|object|false|none|
|» » schema|body|object|false|A JsonSchema specification of the desired output. See https://json-schema.org/draft-07.|
|» » inferSchema|body|boolean|false|When set to true and no output schema is provided, an LLM will generate an output schema.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|exa-research|
|» model|exa-research-pro|

> Example responses

> 201 Response

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

<h3 id="create-a-research-task-with-instructions-and-an-output-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Research task created|Inline|

<h3 id="create-a-research-task-with-instructions-and-an-output-schema-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier for the research task|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get a research task by id

<a id="opIdResearchControllerV0_getResearchTask"></a>

> Code samples

```bash
curl https://api.exa.ai/research/v0/tasks/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /research/v0/tasks/{id}`

<h3 id="get-a-research-task-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": "running",
  "instructions": "string",
  "schema": {
    "property1": null,
    "property2": null
  },
  "data": {
    "property1": null,
    "property2": null
  },
  "citations": {
    "property1": [
      {
        "id": "string",
        "url": "string",
        "title": "string",
        "snippet": "string"
      }
    ],
    "property2": [
      {
        "id": "string",
        "url": "string",
        "title": "string",
        "snippet": "string"
      }
    ]
  }
}
```

<h3 id="get-a-research-task-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Research task details|Inline|

<h3 id="get-a-research-task-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the research task|
|status|string|true|none|The current status of the research task|
|instructions|string|true|none|The instructions or query for the research task|
|schema|object|false|none|The JSON schema specification for the expected output format|
|» **additionalProperties**|object|false|none|none|
|data|object|false|none|The research results data conforming to the specified schema|
|» **additionalProperties**|object|false|none|none|
|citations|object|false|none|Citations grouped by the root field they were used in|
|» **additionalProperties**|[object]|false|none|none|
|» » id|string|true|none|none|
|» » url|string|true|none|none|
|» » title|string|false|none|none|
|» » snippet|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_AnswerCitation">AnswerCitation</h2>
<!-- backwards compatibility -->
<a id="schemaanswercitation"></a>
<a id="schema_AnswerCitation"></a>
<a id="tocSanswercitation"></a>
<a id="tocsanswercitation"></a>

```json
{
  "id": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
  "url": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
  "title": "SpaceX valued at $350bn as company agrees to buy shares from ...",
  "author": "Dan Milmon",
  "publishedDate": "2023-11-16T01:36:32.547Z",
  "text": "SpaceX valued at $350bn as company agrees to buy shares from ...",
  "image": "https://i.guim.co.uk/img/media/7cfee7e84b24b73c97a079c402642a333ad31e77/0_380_6176_3706/master/6176.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=71ebb2fbf458c185229d02d380c01530",
  "favicon": "https://assets.guim.co.uk/static/frontend/icons/homescreen/apple-touch-icon.svg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The temporary ID for the document.|
|url|string(uri)|false|none|The URL of the search result.|
|title|string|false|none|The title of the search result.|
|author|string \| null|false|none|If available, the author of the content.|
|publishedDate|string \| null|false|none|An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.|
|text|string|false|none|The full text content of each source. Only present when includeText is enabled.|
|image|string(uri)|false|none|The URL of the image associated with the search result, if available.|
|favicon|string(uri)|false|none|The URL of the favicon for the search result's domain, if available.|

<h2 id="tocS_AnswerResult">AnswerResult</h2>
<!-- backwards compatibility -->
<a id="schemaanswerresult"></a>
<a id="schema_AnswerResult"></a>
<a id="tocSanswerresult"></a>
<a id="tocsanswerresult"></a>

```json
{
  "answer": "$350 billion.",
  "citations": [
    {
      "id": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
      "url": "https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees",
      "title": "SpaceX valued at $350bn as company agrees to buy shares from ...",
      "author": "Dan Milmon",
      "publishedDate": "2023-11-16T01:36:32.547Z",
      "text": "SpaceX valued at $350bn as company agrees to buy shares from ...",
      "image": "https://i.guim.co.uk/img/media/7cfee7e84b24b73c97a079c402642a333ad31e77/0_380_6176_3706/master/6176.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=71ebb2fbf458c185229d02d380c01530",
      "favicon": "https://assets.guim.co.uk/static/frontend/icons/homescreen/apple-touch-icon.svg"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string \| object|false|none|The generated answer based on search results. Returns a string by default, or a structured object matching the provided outputSchema.|
|citations|[[AnswerCitation](#schemaanswercitation)]|false|none|Search results used to generate the answer.|

<h2 id="tocS_ContentsRequest">ContentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontentsrequest"></a>
<a id="schema_ContentsRequest"></a>
<a id="tocScontentsrequest"></a>
<a id="tocscontentsrequest"></a>

```json
{
  "text": true,
  "highlights": true,
  "summary": {
    "query": "Main developments",
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Title",
      "type": "object",
      "properties": {
        "Property 1": {
          "type": "string",
          "description": "Description"
        },
        "Property 2": {
          "type": "string",
          "enum": [
            "option 1",
            "option 2",
            "option 3"
          ],
          "description": "Description"
        }
      },
      "required": [
        "Property 1"
      ]
    }
  },
  "livecrawl": "preferred",
  "livecrawlTimeout": 1000,
  "maxAgeHours": 24,
  "subpages": 1,
  "subpageTarget": "sources",
  "extras": {
    "links": 1,
    "imageLinks": 1
  },
  "context": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|boolean \| object|false|none|none|
|highlights|boolean \| object|false|none|Text snippets the LLM identifies as most relevant from each page.|
|summary|object|false|none|Summary of the webpage|
|livecrawl|string|false|none|**Deprecated.** **Deprecated**: Use `maxAgeHours` instead for more precise control over content freshness.<br><br>Options for livecrawling pages.<br>'never': Disable livecrawling (default for neural search).<br>'fallback': Livecrawl when cache is empty.<br>'preferred': Always try to livecrawl, but fall back to cache if crawling fails.<br>'always': Always live-crawl, never use cache. Only use if you cannot tolerate any cached content. This option is not recommended unless consulted with the Exa team.<br>|
|livecrawlTimeout|integer|false|none|The timeout for livecrawling in milliseconds.|
|maxAgeHours|integer|false|none|Maximum age of cached content in hours. Controls when livecrawling is triggered based on content freshness.<br>- Positive value (e.g. 24): Use cached content if it's less than this many hours old, otherwise livecrawl.<br>- 0: Always livecrawl, never use cache.<br>- -1: Never livecrawl, always use cache.<br>- Omit (default): Livecrawl as fallback only when no cached content exists.<br>|
|subpages|integer|false|none|The number of subpages to crawl. The actual number crawled may be limited by system constraints.|
|subpageTarget|string \| [string]|false|none|Keyword to find specific subpages of search results. Can be a single string or an array of strings, comma delimited.|
|extras|object|false|none|Extra parameters to pass.|
|context|boolean \| object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|livecrawl|never|
|livecrawl|fallback|
|livecrawl|preferred|
|livecrawl|always|

<h2 id="tocS_CommonRequest">CommonRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommonrequest"></a>
<a id="schema_CommonRequest"></a>
<a id="tocScommonrequest"></a>
<a id="tocscommonrequest"></a>

```json
{
  "numResults": 10,
  "includeDomains": [
    "arxiv.org",
    "paperswithcode.com"
  ],
  "excludeDomains": [
    "string"
  ],
  "startCrawlDate": "2023-01-01",
  "endCrawlDate": "2023-12-31",
  "startPublishedDate": "2023-01-01",
  "endPublishedDate": "2023-12-31",
  "includeText": [
    "large language model"
  ],
  "excludeText": [
    "course"
  ],
  "context": true,
  "moderation": true,
  "contents": {
    "text": true,
    "highlights": true,
    "summary": {
      "query": "Main developments",
      "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Title",
        "type": "object",
        "properties": {
          "Property 1": {
            "type": "string",
            "description": "Description"
          },
          "Property 2": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
              "option 3"
            ],
            "description": "Description"
          }
        },
        "required": [
          "Property 1"
        ]
      }
    },
    "livecrawl": "preferred",
    "livecrawlTimeout": 1000,
    "maxAgeHours": 24,
    "subpages": 1,
    "subpageTarget": "sources",
    "extras": {
      "links": 1,
      "imageLinks": 1
    },
    "context": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numResults|integer|false|none|Number of results to return (up to thousands of results available for custom plans)|
|includeDomains|[string]|false|none|List of domains to include in the search. If specified, results will only come from these domains.|
|excludeDomains|[string]|false|none|List of domains to exclude from search results. If specified, no results will be returned from these domains.|
|startCrawlDate|string(date-time)|false|none|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled after this date. Must be specified in ISO 8601 format.|
|endCrawlDate|string(date-time)|false|none|Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled before this date. Must be specified in ISO 8601 format.|
|startPublishedDate|string(date-time)|false|none|Only links with a published date after this will be returned. Must be specified in ISO 8601 format.|
|endPublishedDate|string(date-time)|false|none|Only links with a published date before this will be returned. Must be specified in ISO 8601 format.|
|includeText|[string]|false|none|List of strings that must be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words.|
|excludeText|[string]|false|none|List of strings that must not be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words. Checks from the first 1000 words of the webpage text.|
|context|boolean \| object|false|none|none|
|moderation|boolean|false|none|Enable content moderation to filter unsafe content from search results.|
|contents|[ContentsRequest](#schemacontentsrequest)|false|none|none|

<h2 id="tocS_EntityCompanyPropertiesWorkforce">EntityCompanyPropertiesWorkforce</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanypropertiesworkforce"></a>
<a id="schema_EntityCompanyPropertiesWorkforce"></a>
<a id="tocSentitycompanypropertiesworkforce"></a>
<a id="tocsentitycompanypropertiesworkforce"></a>

```json
{
  "total": 500
}
```

Company workforce information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer \| null|false|none|Total number of employees.|

<h2 id="tocS_EntityCompanyPropertiesHeadquarters">EntityCompanyPropertiesHeadquarters</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanypropertiesheadquarters"></a>
<a id="schema_EntityCompanyPropertiesHeadquarters"></a>
<a id="tocSentitycompanypropertiesheadquarters"></a>
<a id="tocsentitycompanypropertiesheadquarters"></a>

```json
{
  "address": "123 Main St",
  "city": "San Francisco",
  "postalCode": "94105",
  "country": "United States"
}
```

Company headquarters information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|Street address.|
|city|string \| null|false|none|City name.|
|postalCode|string \| null|false|none|Postal/ZIP code.|
|country|string \| null|false|none|Full country name.|

<h2 id="tocS_EntityCompanyPropertiesFundingRound">EntityCompanyPropertiesFundingRound</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanypropertiesfundinground"></a>
<a id="schema_EntityCompanyPropertiesFundingRound"></a>
<a id="tocSentitycompanypropertiesfundinground"></a>
<a id="tocsentitycompanypropertiesfundinground"></a>

```json
{
  "name": "Series B",
  "date": "2023-06-15",
  "amount": 50000000
}
```

Funding round information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Name of the funding round (e.g., "Series A", "Seed").|
|date|string \| null|false|none|Date of the funding round.|
|amount|integer \| null|false|none|Amount raised in USD.|

<h2 id="tocS_EntityCompanyPropertiesFinancials">EntityCompanyPropertiesFinancials</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanypropertiesfinancials"></a>
<a id="schema_EntityCompanyPropertiesFinancials"></a>
<a id="tocSentitycompanypropertiesfinancials"></a>
<a id="tocsentitycompanypropertiesfinancials"></a>

```json
{
  "revenueAnnual": 1000000000,
  "fundingTotal": 500000000,
  "fundingLatestRound": {
    "name": "Series B",
    "date": "2023-06-15",
    "amount": 50000000
  }
}
```

Company financial information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revenueAnnual|integer \| null|false|none|Annual revenue in USD.|
|fundingTotal|integer \| null|false|none|Total funding raised in USD.|
|fundingLatestRound|[EntityCompanyPropertiesFundingRound](#schemaentitycompanypropertiesfundinground) \| null|false|none|none|

<h2 id="tocS_EntityCompanyPropertiesWebTraffic">EntityCompanyPropertiesWebTraffic</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanypropertieswebtraffic"></a>
<a id="schema_EntityCompanyPropertiesWebTraffic"></a>
<a id="tocSentitycompanypropertieswebtraffic"></a>
<a id="tocsentitycompanypropertieswebtraffic"></a>

```json
{
  "visitsMonthly": 266306714
}
```

Company web traffic information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitsMonthly|integer \| null|false|none|Estimated monthly website visits.|

<h2 id="tocS_EntityCompanyProperties">EntityCompanyProperties</h2>
<!-- backwards compatibility -->
<a id="schemaentitycompanyproperties"></a>
<a id="schema_EntityCompanyProperties"></a>
<a id="tocSentitycompanyproperties"></a>
<a id="tocsentitycompanyproperties"></a>

```json
{
  "name": "Exa",
  "foundedYear": 2022,
  "description": "AI-powered search engine",
  "workforce": {
    "total": 500
  },
  "headquarters": {
    "address": "123 Main St",
    "city": "San Francisco",
    "postalCode": "94105",
    "country": "United States"
  },
  "financials": {
    "revenueAnnual": 1000000000,
    "fundingTotal": 500000000,
    "fundingLatestRound": {
      "name": "Series B",
      "date": "2023-06-15",
      "amount": 50000000
    }
  },
  "webTraffic": {
    "visitsMonthly": 266306714
  }
}
```

Structured properties for a company entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Company name.|
|foundedYear|integer \| null|false|none|Year the company was founded.|
|description|string \| null|false|none|Brief description of the company.|
|workforce|[EntityCompanyPropertiesWorkforce](#schemaentitycompanypropertiesworkforce) \| null|false|none|none|
|headquarters|[EntityCompanyPropertiesHeadquarters](#schemaentitycompanypropertiesheadquarters) \| null|false|none|none|
|financials|[EntityCompanyPropertiesFinancials](#schemaentitycompanypropertiesfinancials) \| null|false|none|none|
|webTraffic|[EntityCompanyPropertiesWebTraffic](#schemaentitycompanypropertieswebtraffic) \| null|false|none|none|

<h2 id="tocS_EntityDateRange">EntityDateRange</h2>
<!-- backwards compatibility -->
<a id="schemaentitydaterange"></a>
<a id="schema_EntityDateRange"></a>
<a id="tocSentitydaterange"></a>
<a id="tocsentitydaterange"></a>

```json
{
  "from": "2020-01-15",
  "to": "2023-06-30"
}
```

Date range for work history entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string \| null|false|none|Start date (YYYY-MM-DD format).|
|to|string \| null|false|none|End date (YYYY-MM-DD format).|

<h2 id="tocS_EntityPersonPropertiesCompanyRef">EntityPersonPropertiesCompanyRef</h2>
<!-- backwards compatibility -->
<a id="schemaentitypersonpropertiescompanyref"></a>
<a id="schema_EntityPersonPropertiesCompanyRef"></a>
<a id="tocSentitypersonpropertiescompanyref"></a>
<a id="tocsentitypersonpropertiescompanyref"></a>

```json
{
  "id": "https://exa.ai/library/company/exa",
  "name": "Exa"
}
```

Reference to a company in work history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|Exa entity ID for the company.|
|name|string \| null|false|none|Company name.|

<h2 id="tocS_EntityPersonPropertiesWorkHistoryEntry">EntityPersonPropertiesWorkHistoryEntry</h2>
<!-- backwards compatibility -->
<a id="schemaentitypersonpropertiesworkhistoryentry"></a>
<a id="schema_EntityPersonPropertiesWorkHistoryEntry"></a>
<a id="tocSentitypersonpropertiesworkhistoryentry"></a>
<a id="tocsentitypersonpropertiesworkhistoryentry"></a>

```json
{
  "title": "Software Engineer",
  "location": "San Francisco, CA",
  "dates": {
    "from": "2020-01-15",
    "to": "2023-06-30"
  },
  "company": {
    "id": "https://exa.ai/library/company/exa",
    "name": "Exa"
  }
}
```

A single work history entry for a person.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|Job title.|
|location|string \| null|false|none|Work location.|
|dates|[EntityDateRange](#schemaentitydaterange) \| null|false|none|none|
|company|[EntityPersonPropertiesCompanyRef](#schemaentitypersonpropertiescompanyref) \| null|false|none|none|

<h2 id="tocS_EntityPersonProperties">EntityPersonProperties</h2>
<!-- backwards compatibility -->
<a id="schemaentitypersonproperties"></a>
<a id="schema_EntityPersonProperties"></a>
<a id="tocSentitypersonproperties"></a>
<a id="tocsentitypersonproperties"></a>

```json
{
  "name": "John Doe",
  "location": "San Francisco, CA",
  "workHistory": [
    {
      "title": "Software Engineer",
      "location": "San Francisco, CA",
      "dates": {
        "from": "2020-01-15",
        "to": "2023-06-30"
      },
      "company": {
        "id": "https://exa.ai/library/company/exa",
        "name": "Exa"
      }
    }
  ]
}
```

Structured properties for a person entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Person's full name.|
|location|string \| null|false|none|Person's location.|
|workHistory|[[EntityPersonPropertiesWorkHistoryEntry](#schemaentitypersonpropertiesworkhistoryentry)]|false|none|List of work history entries.|

<h2 id="tocS_CompanyEntity">CompanyEntity</h2>
<!-- backwards compatibility -->
<a id="schemacompanyentity"></a>
<a id="schema_CompanyEntity"></a>
<a id="tocScompanyentity"></a>
<a id="tocscompanyentity"></a>

```json
{
  "id": "https://exa.ai/library/company/exa",
  "type": "company",
  "version": 1,
  "properties": {
    "name": "Exa",
    "foundedYear": 2022,
    "description": "AI-powered search engine",
    "workforce": {
      "total": 500
    },
    "headquarters": {
      "address": "123 Main St",
      "city": "San Francisco",
      "postalCode": "94105",
      "country": "United States"
    },
    "financials": {
      "revenueAnnual": 1000000000,
      "fundingTotal": 500000000,
      "fundingLatestRound": {
        "name": "Series B",
        "date": "2023-06-15",
        "amount": 50000000
      }
    },
    "webTraffic": {
      "visitsMonthly": 266306714
    }
  }
}
```

Structured entity data for a company.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Exa entity ID.|
|type|string|true|none|Entity type discriminator.|
|version|integer|true|none|Schema version number.|
|properties|[EntityCompanyProperties](#schemaentitycompanyproperties)|true|none|Structured properties for a company entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|company|

<h2 id="tocS_PersonEntity">PersonEntity</h2>
<!-- backwards compatibility -->
<a id="schemapersonentity"></a>
<a id="schema_PersonEntity"></a>
<a id="tocSpersonentity"></a>
<a id="tocspersonentity"></a>

```json
{
  "id": "https://exa.ai/library/person/john-doe",
  "type": "person",
  "version": 1,
  "properties": {
    "name": "John Doe",
    "location": "San Francisco, CA",
    "workHistory": [
      {
        "title": "Software Engineer",
        "location": "San Francisco, CA",
        "dates": {
          "from": "2020-01-15",
          "to": "2023-06-30"
        },
        "company": {
          "id": "https://exa.ai/library/company/exa",
          "name": "Exa"
        }
      }
    ]
  }
}
```

Structured entity data for a person.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Exa entity ID.|
|type|string|true|none|Entity type discriminator.|
|version|integer|true|none|Schema version number.|
|properties|[EntityPersonProperties](#schemaentitypersonproperties)|true|none|Structured properties for a person entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|person|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "id": "https://exa.ai/library/company/exa",
  "type": "company",
  "version": 1,
  "properties": {
    "name": "Exa",
    "foundedYear": 2022,
    "description": "AI-powered search engine",
    "workforce": {
      "total": 500
    },
    "headquarters": {
      "address": "123 Main St",
      "city": "San Francisco",
      "postalCode": "94105",
      "country": "United States"
    },
    "financials": {
      "revenueAnnual": 1000000000,
      "fundingTotal": 500000000,
      "fundingLatestRound": {
        "name": "Series B",
        "date": "2023-06-15",
        "amount": 50000000
      }
    },
    "webTraffic": {
      "visitsMonthly": 266306714
    }
  }
}
```

Structured entity data for company or person search results. Only returned for category=company or category=people searches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompanyEntity](#schemacompanyentity)|false|none|Structured entity data for a company.|
|*oneOf*|[PersonEntity](#schemapersonentity)|false|none|Structured entity data for a person.|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "title": "A Comprehensive Overview of Large Language Models",
  "url": "https://arxiv.org/pdf/2307.06435.pdf",
  "publishedDate": "2023-11-16T01:36:32.547Z",
  "author": "Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan",
  "score": 0.4600165784358978,
  "id": "https://arxiv.org/abs/2307.06435",
  "image": "https://arxiv.org/pdf/2307.06435.pdf/page_1.png",
  "favicon": "https://arxiv.org/favicon.ico"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The title of the search result.|
|url|string(uri)|false|none|The URL of the search result.|
|publishedDate|string \| null|false|none|An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.|
|author|string \| null|false|none|If available, the author of the content.|
|score|number \| null|false|none|A number from 0 to 1 representing similarity between the query/url and the result.|
|id|string|false|none|The temporary ID for the document. Useful for /contents endpoint.|
|image|string(uri)|false|none|The URL of an image associated with the search result, if available.|
|favicon|string(uri)|false|none|The URL of the favicon for the search result's domain.|

<h2 id="tocS_ResultWithContent">ResultWithContent</h2>
<!-- backwards compatibility -->
<a id="schemaresultwithcontent"></a>
<a id="schema_ResultWithContent"></a>
<a id="tocSresultwithcontent"></a>
<a id="tocsresultwithcontent"></a>

```json
{
  "title": "A Comprehensive Overview of Large Language Models",
  "url": "https://arxiv.org/pdf/2307.06435.pdf",
  "publishedDate": "2023-11-16T01:36:32.547Z",
  "author": "Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan",
  "score": 0.4600165784358978,
  "id": "https://arxiv.org/abs/2307.06435",
  "image": "https://arxiv.org/pdf/2307.06435.pdf/page_1.png",
  "favicon": "https://arxiv.org/favicon.ico",
  "text": "Abstract Large Language Models (LLMs) have recently demonstrated remarkable capabilities...",
  "highlights": [
    "Such requirements have limited their adoption..."
  ],
  "highlightScores": [
    0.4600165784358978
  ],
  "summary": "This overview paper on Large Language Models (LLMs) highlights key developments...",
  "subpages": [
    {
      "id": "https://arxiv.org/abs/2303.17580",
      "url": "https://arxiv.org/pdf/2303.17580.pdf",
      "title": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face",
      "author": "Yongliang  Shen, Microsoft Research Asia, Kaitao  Song, Microsoft Research Asia, Xu  Tan, Microsoft Research Asia, Dongsheng  Li, Microsoft Research Asia, Weiming  Lu, Microsoft Research Asia, Yueting  Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn, Zhejiang  University, Microsoft Research Asia, Microsoft  Research, Microsoft Research Asia",
      "publishedDate": "2023-11-16T01:36:20.486Z",
      "text": "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face Date Published: 2023-05-25 Authors: Yongliang Shen, Microsoft Research Asia Kaitao Song, Microsoft Research Asia Xu Tan, Microsoft Research Asia Dongsheng Li, Microsoft Research Asia Weiming Lu, Microsoft Research Asia Yueting Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn Zhejiang University, Microsoft Research Asia Microsoft Research, Microsoft Research Asia Abstract Solving complicated AI tasks with different domains and modalities is a key step toward artificial general intelligence. While there are abundant AI models available for different domains and modalities, they cannot handle complicated AI tasks. Considering large language models (LLMs) have exhibited exceptional ability in language understanding, generation, interaction, and reasoning, we advocate that LLMs could act as a controller to manage existing AI models to solve complicated AI tasks and language could be a generic interface to empower t",
      "summary": "HuggingGPT is a framework using ChatGPT as a central controller to orchestrate various AI models from Hugging Face to solve complex tasks. ChatGPT plans the task, selects appropriate models based on their descriptions, executes subtasks, and summarizes the results. This approach addresses limitations of LLMs by allowing them to handle multimodal data (vision, speech) and coordinate multiple models for complex tasks, paving the way for more advanced AI systems.",
      "highlights": [
        "2) Recently, some researchers started to investigate the integration of using tools or models in LLMs  ."
      ],
      "highlightScores": [
        0.32679107785224915
      ]
    }
  ],
  "extras": {
    "links": []
  },
  "entities": [
    {
      "id": "https://exa.ai/library/company/exa",
      "type": "company",
      "version": 1,
      "properties": {
        "name": "Exa",
        "foundedYear": 2022,
        "description": "AI-powered search engine",
        "workforce": {
          "total": 500
        },
        "headquarters": {
          "address": "123 Main St",
          "city": "San Francisco",
          "postalCode": "94105",
          "country": "United States"
        },
        "financials": {
          "revenueAnnual": 1000000000,
          "fundingTotal": 500000000,
          "fundingLatestRound": {
            "name": "Series B",
            "date": "2023-06-15",
            "amount": 50000000
          }
        },
        "webTraffic": {
          "visitsMonthly": 266306714
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The title of the search result.|
|url|string(uri)|false|none|The URL of the search result.|
|publishedDate|string \| null|false|none|An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.|
|author|string \| null|false|none|If available, the author of the content.|
|score|number \| null|false|none|A number from 0 to 1 representing similarity between the query/url and the result.|
|id|string|false|none|The temporary ID for the document. Useful for /contents endpoint.|
|image|string(uri)|false|none|The URL of an image associated with the search result, if available.|
|favicon|string(uri)|false|none|The URL of the favicon for the search result's domain.|
|text|string|false|none|The full content text of the search result.|
|highlights|[string]|false|none|Array of highlights extracted from the search result content.|
|highlightScores|[number(float)]|false|none|Array of cosine similarity scores for each highlighted|
|summary|string|false|none|Summary of the webpage|
|subpages|[[ResultWithContent](#schemaresultwithcontent)]|false|none|Array of subpages for the search result.|
|extras|object|false|none|Results from extras.|
|entities|[[Entity](#schemaentity)]|false|none|Structured entity data for company or person search results. Only returned for category=company or category=people searches.|

<h2 id="tocS_CostDollars">CostDollars</h2>
<!-- backwards compatibility -->
<a id="schemacostdollars"></a>
<a id="schema_CostDollars"></a>
<a id="tocScostdollars"></a>
<a id="tocscostdollars"></a>

```json
{
  "total": 0.005,
  "breakDown": [
    {
      "search": 0.005,
      "contents": 0,
      "breakdown": {
        "neuralSearch": 0.005,
        "deepSearch": 0.015,
        "contentText": 0,
        "contentHighlight": 0,
        "contentSummary": 0
      }
    }
  ],
  "perRequestPrices": {
    "neuralSearch_1_25_results": 0.005,
    "neuralSearch_26_100_results": 0.025,
    "neuralSearch_100_plus_results": 1,
    "deepSearch_1_25_results": 0.015,
    "deepSearch_26_100_results": 0.075
  },
  "perPagePrices": {
    "contentText": 0.001,
    "contentHighlight": 0.001,
    "contentSummary": 0.001
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(float)|false|none|Total dollar cost for your request|
|breakDown|[object]|false|none|Breakdown of costs by operation type|
|perRequestPrices|object|false|none|Standard price per request for different operations|
|perPagePrices|object|false|none|Standard price per page for different content operations|

<h2 id="tocS_ResearchTaskDto">ResearchTaskDto</h2>
<!-- backwards compatibility -->
<a id="schemaresearchtaskdto"></a>
<a id="schema_ResearchTaskDto"></a>
<a id="tocSresearchtaskdto"></a>
<a id="tocsresearchtaskdto"></a>

```json
{
  "id": "string",
  "status": "running",
  "instructions": "string",
  "schema": {
    "property1": null,
    "property2": null
  },
  "data": {
    "property1": null,
    "property2": null
  },
  "citations": {
    "property1": [
      {
        "id": "string",
        "url": "string",
        "title": "string",
        "snippet": "string"
      }
    ],
    "property2": [
      {
        "id": "string",
        "url": "string",
        "title": "string",
        "snippet": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the research task|
|status|string|true|none|The current status of the research task|
|instructions|string|true|none|The instructions or query for the research task|
|schema|object|false|none|The JSON schema specification for the expected output format|
|data|object|false|none|The research results data conforming to the specified schema|
|citations|object|false|none|Citations grouped by the root field they were used in|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|failed|
