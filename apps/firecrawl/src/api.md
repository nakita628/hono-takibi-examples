<h1 id="firecrawl-api">Firecrawl API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for interacting with Firecrawl services to perform web scraping and crawling tasks.

Base URLs:

* <a href="https://api.firecrawl.dev/v1">https://api.firecrawl.dev/v1</a>

Email: <a href="mailto:support@firecrawl.dev">Firecrawl Support</a> 
Web: <a href="https://firecrawl.dev/support">Firecrawl Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="firecrawl-api-scraping">Scraping</h1>

## Scrape a single URL and optionally extract information using an LLM

<a id="opIdscrapeAndExtractFromUrl"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/scrape \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": false,
    "timeout": 30000,
    "parsePDF": true,
    "jsonOptions": {
      "schema": {},
      "systemPrompt": "string",
      "prompt": "string"
    },
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1,
        "selector": "#my-element"
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "basic",
    "changeTrackingOptions": {
      "modes": [
        "git-diff"
      ],
      "schema": {},
      "prompt": "string",
      "tag": null
    },
    "storeInCache": true
  }'
```

`POST /scrape`

> Body parameter

```json
{
  "url": "http://example.com",
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "maxAge": 0,
  "headers": {},
  "waitFor": 0,
  "mobile": false,
  "skipTlsVerification": false,
  "timeout": 30000,
  "parsePDF": true,
  "jsonOptions": {
    "schema": {},
    "systemPrompt": "string",
    "prompt": "string"
  },
  "actions": [
    {
      "type": "wait",
      "milliseconds": 1,
      "selector": "#my-element"
    }
  ],
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "removeBase64Images": true,
  "blockAds": true,
  "proxy": "basic",
  "changeTrackingOptions": {
    "modes": [
      "git-diff"
    ],
    "schema": {},
    "prompt": "string",
    "tag": null
  },
  "storeInCache": true
}
```

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The URL to scrape|
|» formats|body|[string]|false|Formats to include in the output. `rawBase64` must be requested by itself.|
|» onlyMainContent|body|boolean|false|Only return the main content of the page excluding headers, navs, footers, etc.|
|» includeTags|body|[string]|false|Tags to include in the output.|
|» excludeTags|body|[string]|false|Tags to exclude from the output.|
|» maxAge|body|integer|false|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 0, which disables caching.|
|» headers|body|object|false|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|» waitFor|body|integer|false|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.|
|» mobile|body|boolean|false|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|» skipTlsVerification|body|boolean|false|Skip TLS certificate verification when making requests|
|» timeout|body|integer|false|Timeout in milliseconds for the request|
|» parsePDF|body|boolean|false|Controls how PDF files are processed during scraping. When true, the PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page). When false, the PDF file is returned in base64 encoding with a flat rate of 1 credit total.|
|» jsonOptions|body|object|false|JSON options object|
|» » schema|body|object|false|The schema to use for the extraction (Optional). Must conform to [JSON Schema](https://json-schema.org/).|
|» » systemPrompt|body|string|false|The system prompt to use for the extraction (Optional)|
|» » prompt|body|string|false|The prompt to use for the extraction without a schema (Optional)|
|» actions|body|[object]|false|Actions to perform on the page before grabbing the content|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specified amount of milliseconds|
|» » milliseconds|body|integer|false|Number of milliseconds to wait|
|» » selector|body|string|false|Query selector to find the element by|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Take a screenshot. The links will be in the response's `actions.screenshots` array.|
|» » fullPage|body|boolean|false|Should the screenshot be full-page or viewport sized?|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Click on an element|
|» » selector|body|string|true|Query selector to find the element by|
|» » all|body|boolean|false|Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.|
|» » text|body|string|true|Text to type|
|» » *oneOf*|body|object|false|Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.|
|» » type|body|string|true|Press a key on the page|
|» » key|body|string|true|Key to press|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scroll the page or a specific element|
|» » direction|body|string|false|Direction to scroll|
|» » selector|body|string|false|Query selector for the element to scroll|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scrape the current page content, returns the url and the html.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Execute JavaScript code on the page|
|» » script|body|string|true|JavaScript code to execute|
|» location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» removeBase64Images|body|boolean|false|Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|» blockAds|body|boolean|false|Enables ad-blocking and cookie popup blocking.|
|» proxy|body|string|false|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.<br><br>If you do not specify a proxy, Firecrawl will default to basic.|
|» changeTrackingOptions|body|object|false|Options for change tracking (Beta). Only applicable when 'changeTracking' is included in formats. The 'markdown' format must also be specified when using change tracking.|
|» » modes|body|[string]|false|The mode to use for change tracking. 'git-diff' provides a detailed diff, and 'json' compares extracted JSON data.|
|» » schema|body|object|false|Schema for JSON extraction when using 'json' mode. Defines the structure of data to extract and compare. Must conform to [JSON Schema](https://json-schema.org/).|
|» » prompt|body|string|false|Prompt to use for change tracking when using 'json' mode. If not provided, the default prompt will be used.|
|» » tag|body|string \| null|false|Tag to use for change tracking. Tags can separate change tracking history into separate "branches", where change tracking with a specific tagwill only compare to scrapes made in the same tag. If not provided, the default tag (null) will be used.|
|» storeInCache|body|boolean|false|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (actions, headers) will force this parameter to be false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» formats|markdown|
|» formats|html|
|» formats|rawHtml|
|» formats|rawBase64|
|» formats|links|
|» formats|screenshot|
|» formats|screenshot@fullPage|
|» formats|json|
|» formats|changeTracking|
|» formats|branding|
|» » type|wait|
|» » type|screenshot|
|» » type|click|
|» » type|write|
|» » type|press|
|» » type|scroll|
|» » direction|up|
|» » direction|down|
|» » type|scrape|
|» » type|executeJavascript|
|» proxy|basic|
|» proxy|enhanced|
|» proxy|auto|
|» » modes|git-diff|
|» » modes|json|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "links": [
      "string"
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "<any other metadata> ": "string",
      "statusCode": 0,
      "timezone": "string",
      "error": "string"
    },
    "llm_extraction": {},
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "logo": "string",
      "fonts": [
        {
          "family": "string"
        }
      ],
      "colors": {},
      "typography": {},
      "spacing": {},
      "components": {},
      "icons": {},
      "images": {},
      "animations": {},
      "layout": {},
      "tone": {}
    }
  }
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScrapeResponse](#schemascraperesponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Scrape multiple URLs and optionally extract information using an LLM

<a id="opIdscrapeAndExtractFromUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/batch/scrape \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "urls": [
      "http://example.com"
    ],
    "webhook": {
      "url": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "completed"
      ]
    },
    "ignoreInvalidURLs": false,
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": false,
    "timeout": 30000,
    "parsePDF": true,
    "jsonOptions": {
      "schema": {},
      "systemPrompt": "string",
      "prompt": "string"
    },
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1,
        "selector": "#my-element"
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "basic",
    "changeTrackingOptions": {
      "modes": [
        "git-diff"
      ],
      "schema": {},
      "prompt": "string",
      "tag": null
    },
    "storeInCache": true
  }'
```

`POST /batch/scrape`

> Body parameter

```json
{
  "urls": [
    "http://example.com"
  ],
  "webhook": {
    "url": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "completed"
    ]
  },
  "ignoreInvalidURLs": false,
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "maxAge": 0,
  "headers": {},
  "waitFor": 0,
  "mobile": false,
  "skipTlsVerification": false,
  "timeout": 30000,
  "parsePDF": true,
  "jsonOptions": {
    "schema": {},
    "systemPrompt": "string",
    "prompt": "string"
  },
  "actions": [
    {
      "type": "wait",
      "milliseconds": 1,
      "selector": "#my-element"
    }
  ],
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "removeBase64Images": true,
  "blockAds": true,
  "proxy": "basic",
  "changeTrackingOptions": {
    "modes": [
      "git-diff"
    ],
    "schema": {},
    "prompt": "string",
    "tag": null
  },
  "storeInCache": true
}
```

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string(uri)]|true|none|
|» webhook|body|object|false|A webhook specification object.|
|» » url|body|string|true|The URL to send the webhook to. This will trigger for batch scrape started (batch_scrape.started), every page scraped (batch_scrape.page) and when the batch scrape is completed (batch_scrape.completed or batch_scrape.failed). The response will be the same as the `/scrape` endpoint.|
|» » headers|body|object|false|Headers to send to the webhook URL.|
|» » » **additionalProperties**|body|string|false|none|
|» » metadata|body|object|false|Custom metadata that will be included in all webhook payloads for this crawl|
|» » events|body|[string]|false|Type of events that should be sent to the webhook URL. (default: all)|
|» ignoreInvalidURLs|body|boolean|false|If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.|
|» formats|body|[string]|false|Formats to include in the output. `rawBase64` must be requested by itself.|
|» onlyMainContent|body|boolean|false|Only return the main content of the page excluding headers, navs, footers, etc.|
|» includeTags|body|[string]|false|Tags to include in the output.|
|» excludeTags|body|[string]|false|Tags to exclude from the output.|
|» maxAge|body|integer|false|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 0, which disables caching.|
|» headers|body|object|false|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|» waitFor|body|integer|false|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.|
|» mobile|body|boolean|false|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|» skipTlsVerification|body|boolean|false|Skip TLS certificate verification when making requests|
|» timeout|body|integer|false|Timeout in milliseconds for the request|
|» parsePDF|body|boolean|false|Controls how PDF files are processed during scraping. When true, the PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page). When false, the PDF file is returned in base64 encoding with a flat rate of 1 credit total.|
|» jsonOptions|body|object|false|JSON options object|
|» » schema|body|object|false|The schema to use for the extraction (Optional). Must conform to [JSON Schema](https://json-schema.org/).|
|» » systemPrompt|body|string|false|The system prompt to use for the extraction (Optional)|
|» » prompt|body|string|false|The prompt to use for the extraction without a schema (Optional)|
|» actions|body|[object]|false|Actions to perform on the page before grabbing the content|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specified amount of milliseconds|
|» » milliseconds|body|integer|false|Number of milliseconds to wait|
|» » selector|body|string|false|Query selector to find the element by|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Take a screenshot. The links will be in the response's `actions.screenshots` array.|
|» » fullPage|body|boolean|false|Should the screenshot be full-page or viewport sized?|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Click on an element|
|» » selector|body|string|true|Query selector to find the element by|
|» » all|body|boolean|false|Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.|
|» » text|body|string|true|Text to type|
|» » *oneOf*|body|object|false|Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.|
|» » type|body|string|true|Press a key on the page|
|» » key|body|string|true|Key to press|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scroll the page or a specific element|
|» » direction|body|string|false|Direction to scroll|
|» » selector|body|string|false|Query selector for the element to scroll|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scrape the current page content, returns the url and the html.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Execute JavaScript code on the page|
|» » script|body|string|true|JavaScript code to execute|
|» location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» removeBase64Images|body|boolean|false|Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|» blockAds|body|boolean|false|Enables ad-blocking and cookie popup blocking.|
|» proxy|body|string|false|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.<br><br>If you do not specify a proxy, Firecrawl will default to basic.|
|» changeTrackingOptions|body|object|false|Options for change tracking (Beta). Only applicable when 'changeTracking' is included in formats. The 'markdown' format must also be specified when using change tracking.|
|» » modes|body|[string]|false|The mode to use for change tracking. 'git-diff' provides a detailed diff, and 'json' compares extracted JSON data.|
|» » schema|body|object|false|Schema for JSON extraction when using 'json' mode. Defines the structure of data to extract and compare. Must conform to [JSON Schema](https://json-schema.org/).|
|» » prompt|body|string|false|Prompt to use for change tracking when using 'json' mode. If not provided, the default prompt will be used.|
|» » tag|body|string \| null|false|Tag to use for change tracking. Tags can separate change tracking history into separate "branches", where change tracking with a specific tagwill only compare to scrapes made in the same tag. If not provided, the default tag (null) will be used.|
|» storeInCache|body|boolean|false|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (actions, headers) will force this parameter to be false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » events|completed|
|» » events|page|
|» » events|failed|
|» » events|started|
|» formats|markdown|
|» formats|html|
|» formats|rawHtml|
|» formats|rawBase64|
|» formats|links|
|» formats|screenshot|
|» formats|screenshot@fullPage|
|» formats|json|
|» formats|changeTracking|
|» formats|branding|
|» » type|wait|
|» » type|screenshot|
|» » type|click|
|» » type|write|
|» » type|press|
|» » type|scroll|
|» » direction|up|
|» » direction|down|
|» » type|scrape|
|» » type|executeJavascript|
|» proxy|basic|
|» proxy|enhanced|
|» proxy|auto|
|» » modes|git-diff|
|» » modes|json|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com",
  "invalidURLs": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchScrapeResponseObj](#schemabatchscraperesponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of a batch scrape job

<a id="opIdgetBatchScrapeStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batch/scrape/{id}`

<h3 id="get-the-status-of-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "<any other metadata> ": "string",
        "statusCode": 0,
        "timezone": "string",
        "error": "string"
      }
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-status-of-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchScrapeStatusResponseObj](#schemabatchscrapestatusresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-status-of-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a batch scrape job

<a id="opIdcancelBatchScrape"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /batch/scrape/{id}`

<h3 id="cancel-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "Batch scrape job successfully cancelled."
}
```

> 404 Response

```json
{
  "error": "Batch scrape job not found."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="cancel-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful cancellation|Inline|
|404|Not Found|Batch scrape job not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="cancel-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the errors of a batch scrape job

<a id="opIdgetBatchScrapeErrors"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08/errors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batch/scrape/{id}/errors`

<h3 id="get-the-errors-of-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-errors-of-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlErrorsResponseObj](#schemacrawlerrorsresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-errors-of-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-crawling">Crawling</h1>

## Get the status of a crawl job

<a id="opIdgetCrawlStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/{id}`

<h3 id="get-the-status-of-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "<any other metadata> ": "string",
        "statusCode": 0,
        "timezone": "string",
        "error": "string"
      }
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-status-of-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlStatusResponseObj](#schemacrawlstatusresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-status-of-a-crawl-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a crawl job

<a id="opIdcancelCrawl"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crawl/{id}`

<h3 id="cancel-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "status": "cancelled"
}
```

> 404 Response

```json
{
  "error": "Crawl job not found."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="cancel-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful cancellation|Inline|
|404|Not Found|Crawl job not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="cancel-a-crawl-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the errors of a crawl job

<a id="opIdgetCrawlErrors"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08/errors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/{id}/errors`

<h3 id="get-the-errors-of-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-errors-of-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlErrorsResponseObj](#schemacrawlerrorsresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-errors-of-a-crawl-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Crawl multiple URLs based on options

<a id="opIdcrawlUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/crawl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "excludePaths": [
      "string"
    ],
    "includePaths": [
      "string"
    ],
    "maxDepth": 10,
    "maxDiscoveryDepth": 0,
    "ignoreSitemap": false,
    "ignoreQueryParameters": false,
    "limit": 10000,
    "allowBackwardLinks": false,
    "allowExternalLinks": false,
    "delay": 0,
    "webhook": {
      "url": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "completed"
      ]
    },
    "scrapeOptions": {
      "formats": [
        "markdown"
      ],
      "onlyMainContent": true,
      "includeTags": [
        "string"
      ],
      "excludeTags": [
        "string"
      ],
      "maxAge": 0,
      "headers": {},
      "waitFor": 0,
      "mobile": false,
      "skipTlsVerification": false,
      "timeout": 30000,
      "parsePDF": true,
      "jsonOptions": {
        "schema": {},
        "systemPrompt": "string",
        "prompt": "string"
      },
      "actions": [
        {
          "type": "wait",
          "milliseconds": 1,
          "selector": "#my-element"
        }
      ],
      "location": {
        "country": "US",
        "languages": [
          "en-US"
        ]
      },
      "removeBase64Images": true,
      "blockAds": true,
      "proxy": "basic",
      "changeTrackingOptions": {
        "modes": [
          "git-diff"
        ],
        "schema": {},
        "prompt": "string",
        "tag": null
      },
      "storeInCache": true
    }
  }'
```

`POST /crawl`

> Body parameter

```json
{
  "url": "http://example.com",
  "excludePaths": [
    "string"
  ],
  "includePaths": [
    "string"
  ],
  "maxDepth": 10,
  "maxDiscoveryDepth": 0,
  "ignoreSitemap": false,
  "ignoreQueryParameters": false,
  "limit": 10000,
  "allowBackwardLinks": false,
  "allowExternalLinks": false,
  "delay": 0,
  "webhook": {
    "url": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "completed"
    ]
  },
  "scrapeOptions": {
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": false,
    "timeout": 30000,
    "parsePDF": true,
    "jsonOptions": {
      "schema": {},
      "systemPrompt": "string",
      "prompt": "string"
    },
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1,
        "selector": "#my-element"
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "basic",
    "changeTrackingOptions": {
      "modes": [
        "git-diff"
      ],
      "schema": {},
      "prompt": "string",
      "tag": null
    },
    "storeInCache": true
  }
}
```

<h3 id="crawl-multiple-urls-based-on-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The base URL to start crawling from|
|» excludePaths|body|[string]|false|URL pathname regex patterns that exclude matching URLs from the crawl. For example, if you set "excludePaths": ["blog/.*"] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.|
|» includePaths|body|[string]|false|URL pathname regex patterns that include matching URLs in the crawl. Only the paths that match the specified patterns will be included in the response. For example, if you set "includePaths": ["blog/.*"] for the base URL firecrawl.dev, only results matching that pattern will be included, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.|
|» maxDepth|body|integer|false|Maximum depth to crawl relative to the base URL. Basically, the max number of slashes the pathname of a scraped URL may contain.|
|» maxDiscoveryDepth|body|integer|false|Maximum depth to crawl based on discovery order. The root site and sitemapped pages has a discovery depth of 0. For example, if you set it to 1, and you set ignoreSitemap, you will only crawl the entered URL and all URLs that are linked on that page.|
|» ignoreSitemap|body|boolean|false|Ignore the website sitemap when crawling|
|» ignoreQueryParameters|body|boolean|false|Do not re-scrape the same path with different (or none) query parameters|
|» limit|body|integer|false|Maximum number of pages to crawl. Default limit is 10000.|
|» allowBackwardLinks|body|boolean|false|Allows the crawler to follow internal links to sibling or parent URLs, not just child paths.<br><br>false: Only crawls deeper (child) URLs.<br>→ e.g. /features/feature-1 → /features/feature-1/tips ✅<br>→ Won't follow /pricing or / ❌<br><br>true: Crawls any internal links, including siblings and parents.<br>→ e.g. /features/feature-1 → /pricing, /, etc. ✅<br><br>Use true for broader internal coverage beyond nested paths.|
|» allowExternalLinks|body|boolean|false|Allows the crawler to follow links to external websites.|
|» delay|body|number|false|Delay in seconds between scrapes. This helps respect website rate limits.|
|» webhook|body|object|false|A webhook specification object.|
|» » url|body|string|true|The URL to send the webhook to. This will trigger for crawl started (crawl.started), every page crawled (crawl.page) and when the crawl is completed (crawl.completed or crawl.failed). The response will be the same as the `/scrape` endpoint.|
|» » headers|body|object|false|Headers to send to the webhook URL.|
|» » » **additionalProperties**|body|string|false|none|
|» » metadata|body|object|false|Custom metadata that will be included in all webhook payloads for this crawl|
|» » events|body|[string]|false|Type of events that should be sent to the webhook URL. (default: all)|
|» scrapeOptions|body|[ScrapeOptions](#schemascrapeoptions)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » events|completed|
|» » events|page|
|» » events|failed|
|» » events|started|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com"
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="crawl-multiple-urls-based-on-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlResponse](#schemacrawlresponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="crawl-multiple-urls-based-on-options-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all active crawls for the authenticated team

<a id="opIdgetActiveCrawls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/crawl/active \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/active`

> Example responses

> 200 Response

```json
{
  "success": true,
  "crawls": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teamId": "string",
      "url": "http://example.com",
      "options": {
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": false,
          "timeout": 30000,
          "parsePDF": true,
          "jsonOptions": {
            "schema": {},
            "systemPrompt": "string",
            "prompt": "string"
          },
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1,
              "selector": "#my-element"
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "basic",
          "changeTrackingOptions": {
            "modes": [
              "git-diff"
            ],
            "schema": {},
            "prompt": "string",
            "tag": null
          },
          "storeInCache": true
        }
      }
    }
  ]
}
```

> 402 Response

```json
{
  "success": false,
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "success": false,
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "success": false,
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-all-active-crawls-for-the-authenticated-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-all-active-crawls-for-the-authenticated-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|crawls|[object]|false|none|none|
|» id|string(uuid)|true|none|The unique identifier of the crawl|
|» teamId|string|true|none|The ID of the team that owns the crawl|
|» url|string(uri)|true|none|The origin URL of the crawl|
|» options|object|true|none|The crawler options used for this crawl|
|» » scrapeOptions|[ScrapeOptions](#schemascrapeoptions)|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-mapping">Mapping</h1>

## Map multiple URLs based on options

<a id="opIdmapUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/map \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "search": "string",
    "ignoreSitemap": true,
    "sitemapOnly": false,
    "includeSubdomains": true,
    "limit": 5000,
    "timeout": 0
  }'
```

`POST /map`

> Body parameter

```json
{
  "url": "http://example.com",
  "search": "string",
  "ignoreSitemap": true,
  "sitemapOnly": false,
  "includeSubdomains": true,
  "limit": 5000,
  "timeout": 0
}
```

<h3 id="map-multiple-urls-based-on-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The base URL to start crawling from|
|» search|body|string|false|Search query to use for mapping. During the Alpha phase, the 'smart' part of the search functionality is limited to 1000 search results. However, if map finds more results, there is no limit applied.|
|» ignoreSitemap|body|boolean|false|Ignore the website sitemap when crawling.|
|» sitemapOnly|body|boolean|false|Only return links found in the website sitemap|
|» includeSubdomains|body|boolean|false|Include subdomains of the website|
|» limit|body|integer|false|Maximum number of links to return|
|» timeout|body|integer|false|Timeout in milliseconds. There is no timeout by default.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "links": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="map-multiple-urls-based-on-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MapResponse](#schemamapresponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="map-multiple-urls-based-on-options-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-extraction">Extraction</h1>

## Extract structured data from pages using LLMs

<a id="opIdextractData"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/extract \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "urls": [
      "http://example.com"
    ],
    "prompt": "string",
    "schema": {},
    "enableWebSearch": false,
    "ignoreSitemap": false,
    "includeSubdomains": true,
    "showSources": false,
    "scrapeOptions": {
      "formats": [
        "markdown"
      ],
      "onlyMainContent": true,
      "includeTags": [
        "string"
      ],
      "excludeTags": [
        "string"
      ],
      "maxAge": 0,
      "headers": {},
      "waitFor": 0,
      "mobile": false,
      "skipTlsVerification": false,
      "timeout": 30000,
      "parsePDF": true,
      "jsonOptions": {
        "schema": {},
        "systemPrompt": "string",
        "prompt": "string"
      },
      "actions": [
        {
          "type": "wait",
          "milliseconds": 1,
          "selector": "#my-element"
        }
      ],
      "location": {
        "country": "US",
        "languages": [
          "en-US"
        ]
      },
      "removeBase64Images": true,
      "blockAds": true,
      "proxy": "basic",
      "changeTrackingOptions": {
        "modes": [
          "git-diff"
        ],
        "schema": {},
        "prompt": "string",
        "tag": null
      },
      "storeInCache": true
    },
    "ignoreInvalidURLs": false
  }'
```

`POST /extract`

> Body parameter

```json
{
  "urls": [
    "http://example.com"
  ],
  "prompt": "string",
  "schema": {},
  "enableWebSearch": false,
  "ignoreSitemap": false,
  "includeSubdomains": true,
  "showSources": false,
  "scrapeOptions": {
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": false,
    "timeout": 30000,
    "parsePDF": true,
    "jsonOptions": {
      "schema": {},
      "systemPrompt": "string",
      "prompt": "string"
    },
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1,
        "selector": "#my-element"
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "basic",
    "changeTrackingOptions": {
      "modes": [
        "git-diff"
      ],
      "schema": {},
      "prompt": "string",
      "tag": null
    },
    "storeInCache": true
  },
  "ignoreInvalidURLs": false
}
```

<h3 id="extract-structured-data-from-pages-using-llms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string(uri)]|true|none|
|» prompt|body|string|false|Prompt to guide the extraction process|
|» schema|body|object|false|Schema to define the structure of the extracted data. Must conform to [JSON Schema](https://json-schema.org/).|
|» enableWebSearch|body|boolean|false|When true, the extraction will use web search to find additional data|
|» ignoreSitemap|body|boolean|false|When true, sitemap.xml files will be ignored during website scanning|
|» includeSubdomains|body|boolean|false|When true, subdomains of the provided URLs will also be scanned|
|» showSources|body|boolean|false|When true, the sources used to extract the data will be included in the response as `sources` key|
|» scrapeOptions|body|[ScrapeOptions](#schemascrapeoptions)|false|none|
|» ignoreInvalidURLs|body|boolean|false|If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, an extract using the remaining valid URLs will be performed, and the invalid URLs will be returned in the invalidURLs field of the response.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "invalidURLs": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": "Invalid input data."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="extract-structured-data-from-pages-using-llms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful extraction|[ExtractResponse](#schemaextractresponse)|
|400|Bad Request|Invalid request|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="extract-structured-data-from-pages-using-llms-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of an extract job

<a id="opIdgetExtractStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/extract/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extract/{id}`

<h3 id="get-the-status-of-an-extract-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the extract job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {},
  "status": "completed",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-the-status-of-an-extract-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExtractStatusResponse](#schemaextractstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-research">Research</h1>

## Start a deep research operation on a query

<a id="opIdstartDeepResearch"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/deep-research \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "string",
    "maxDepth": 7,
    "timeLimit": 300,
    "maxUrls": 20,
    "analysisPrompt": "string",
    "systemPrompt": "string",
    "formats": [
      [
        "markdown"
      ]
    ],
    "jsonOptions": {
      "schema": {},
      "systemPrompt": "string",
      "prompt": "string"
    }
  }'
```

`POST /deep-research`

> Body parameter

```json
{
  "query": "string",
  "maxDepth": 7,
  "timeLimit": 300,
  "maxUrls": 20,
  "analysisPrompt": "string",
  "systemPrompt": "string",
  "formats": [
    [
      "markdown"
    ]
  ],
  "jsonOptions": {
    "schema": {},
    "systemPrompt": "string",
    "prompt": "string"
  }
}
```

<h3 id="start-a-deep-research-operation-on-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|The query to research|
|» maxDepth|body|integer|false|Maximum depth of research iterations|
|» timeLimit|body|integer|false|Time limit in seconds|
|» maxUrls|body|integer|false|Maximum number of URLs to analyze|
|» analysisPrompt|body|string|false|The prompt to use for the final analysis. Useful to format the final analysis markdown in a specific way.|
|» systemPrompt|body|string|false|The system prompt to use for the research agent. Useful to steer the research agent to a specific direction.|
|» formats|body|[string]|false|none|
|» jsonOptions|body|object|false|Options for JSON output|
|» » schema|body|object|false|The schema to use for the JSON output. Must conform to [JSON Schema](https://json-schema.org/).|
|» » systemPrompt|body|string|false|The system prompt to use for the JSON output|
|» » prompt|body|string|false|The prompt to use for the JSON output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» formats|markdown|
|» formats|json|
|» formats|branding|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid parameters provided"
}
```

<h3 id="start-a-deep-research-operation-on-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Research job started successfully|Inline|
|400|Bad Request|Invalid request parameters|Inline|

<h3 id="start-a-deep-research-operation-on-a-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|ID of the research job|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status and results of a deep research operation

<a id="opIdgetDeepResearchStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/deep-research/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deep-research/{id}`

<h3 id="get-the-status-and-results-of-a-deep-research-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the research job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "finalAnalysis": "string",
    "json": {},
    "activities": [
      {
        "type": "string",
        "status": "string",
        "message": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "depth": 0
      }
    ],
    "sources": [
      {
        "url": "string",
        "title": "string",
        "description": "string",
        "favicon": "string"
      }
    ],
    "status": "processing",
    "error": "string",
    "expiresAt": "1970-01-01T00:00:00Z",
    "currentDepth": 0,
    "maxDepth": 0,
    "totalUrls": 0
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Research job not found"
}
```

<h3 id="get-the-status-and-results-of-a-deep-research-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Research job not found|Inline|

<h3 id="get-the-status-and-results-of-a-deep-research-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» finalAnalysis|string|false|none|none|
|» json|object \| null|false|none|Displayed when using JSON format|
|» activities|[object]|false|none|none|
|» » type|string|false|none|none|
|» » status|string|false|none|none|
|» » message|string|false|none|none|
|» » timestamp|string(date-time)|false|none|none|
|» » depth|integer|false|none|none|
|» sources|[object]|false|none|none|
|» » url|string|false|none|none|
|» » title|string|false|none|none|
|» » description|string|false|none|none|
|» » favicon|string|false|none|none|
|» status|string|false|none|none|
|» error|string|false|none|none|
|» expiresAt|string(date-time)|false|none|none|
|» currentDepth|integer|false|none|none|
|» maxDepth|integer|false|none|none|
|» totalUrls|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|processing|
|» status|completed|
|» status|failed|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-billing">Billing</h1>

## Get remaining credits for the authenticated team

<a id="opIdgetCreditUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/team/credit-usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/credit-usage`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "remaining_credits": 1000
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Could not find credit usage information"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching credit usage"
}
```

<h3 id="get-remaining-credits-for-the-authenticated-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Credit usage information not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-remaining-credits-for-the-authenticated-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» remaining_credits|number|false|none|Number of credits remaining for the team|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get remaining tokens for the authenticated team (Extract only)

<a id="opIdgetTokenUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/team/token-usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/token-usage`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "remaining_tokens": 1000
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Could not find token usage information"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching token usage"
}
```

<h3 id="get-remaining-tokens-for-the-authenticated-team-extract-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Token usage information not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-remaining-tokens-for-the-authenticated-team-extract-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» remaining_tokens|number|false|none|Number of tokens remaining for the team|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-search">Search</h1>

## Search and optionally scrape search results

<a id="opIdsearchAndScrape"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "string",
    "limit": 5,
    "tbs": "string",
    "location": "string",
    "timeout": 60000,
    "ignoreInvalidURLs": false,
    "scrapeOptions": {}
  }'
```

`POST /search`

> Body parameter

```json
{
  "query": "string",
  "limit": 5,
  "tbs": "string",
  "location": "string",
  "timeout": 60000,
  "ignoreInvalidURLs": false,
  "scrapeOptions": {}
}
```

<h3 id="search-and-optionally-scrape-search-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|The search query|
|» limit|body|integer|false|Maximum number of results to return|
|» tbs|body|string|false|Time-based search parameter|
|» location|body|string|false|Location parameter for search results|
|» timeout|body|integer|false|Timeout in milliseconds|
|» ignoreInvalidURLs|body|boolean|false|Excludes URLs from the search results that are invalid for other Firecrawl endpoints. This helps reduce errors if you are piping data from search into other Firecrawl API endpoints.|
|» scrapeOptions|body|object|false|Options for scraping search results|
|» » formats|body|[string]|false|Formats to include in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » formats|markdown|
|» » formats|html|
|» » formats|rawHtml|
|» » formats|links|
|» » formats|screenshot|
|» » formats|screenshot@fullPage|
|» » formats|json|
|» » formats|branding|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "title": "string",
      "description": "string",
      "url": "string",
      "markdown": "string",
      "html": "string",
      "rawHtml": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "sourceURL": "string",
        "statusCode": 0,
        "error": "string"
      }
    }
  ],
  "warning": "string"
}
```

> 408 Response

```json
{
  "success": false,
  "error": "Request timed out"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="search-and-optionally-scrape-search-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|408|Request Timeout|Request timeout|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="search-and-optionally-scrape-search-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[object]|false|none|none|
|» title|string|false|none|Title from search result|
|» description|string|false|none|Description from search result|
|» url|string|false|none|URL of the search result|
|» markdown|string \| null|false|none|Markdown content if scraping was requested|
|» html|string \| null|false|none|HTML content if requested in formats|
|» rawHtml|string \| null|false|none|Raw HTML content if requested in formats|
|» links|[string]|false|none|Links found if requested in formats|
|» screenshot|string \| null|false|none|Screenshot URL if requested in formats|
|» metadata|object|false|none|none|
|» » title|string|false|none|none|
|» » description|string|false|none|none|
|» » sourceURL|string|false|none|none|
|» » statusCode|integer|false|none|none|
|» » error|string \| null|false|none|none|
|warning|string \| null|false|none|Warning message if any issues occurred|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-llmstxt">LLMs.txt</h1>

## Generate LLMs.txt for a website

<a id="opIdgenerateLLMsTxt"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/llmstxt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "maxUrls": 2,
    "showFullText": false
  }'
```

`POST /llmstxt`

> Body parameter

```json
{
  "url": "http://example.com",
  "maxUrls": 2,
  "showFullText": false
}
```

<h3 id="generate-llmstxt-for-a-website-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The URL to generate LLMs.txt from|
|» maxUrls|body|integer|false|Maximum number of URLs to analyze|
|» showFullText|body|boolean|false|Include full text content in the response|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid parameters provided"
}
```

<h3 id="generate-llmstxt-for-a-website-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LLMs.txt generation job started successfully|Inline|
|400|Bad Request|Invalid request parameters|Inline|

<h3 id="generate-llmstxt-for-a-website-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|ID of the LLMs.txt generation job|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status and results of an LLMs.txt generation job

<a id="opIdgetLLMsTxtStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/llmstxt/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /llmstxt/{id}`

<h3 id="get-the-status-and-results-of-an-llmstxt-generation-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the LLMs.txt generation job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "status": "processing",
  "data": {
    "llmstxt": "string",
    "llmsfulltxt": "string"
  },
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "success": false,
  "error": "LLMs.txt generation job not found"
}
```

<h3 id="get-the-status-and-results-of-an-llmstxt-generation-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|LLMs.txt generation job not found|Inline|

<h3 id="get-the-status-and-results-of-an-llmstxt-generation-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|status|string|false|none|none|
|data|object|false|none|none|
|» llmstxt|string|false|none|The generated LLMs.txt content|
|» llmsfulltxt|string|false|none|The full text content when showFullText is true|
|expiresAt|string(date-time)|false|none|When the generated content will expire|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|completed|
|status|failed|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ScrapeOptions">ScrapeOptions</h2>
<!-- backwards compatibility -->
<a id="schemascrapeoptions"></a>
<a id="schema_ScrapeOptions"></a>
<a id="tocSscrapeoptions"></a>
<a id="tocsscrapeoptions"></a>

```json
{
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "maxAge": 0,
  "headers": {},
  "waitFor": 0,
  "mobile": false,
  "skipTlsVerification": false,
  "timeout": 30000,
  "parsePDF": true,
  "jsonOptions": {
    "schema": {},
    "systemPrompt": "string",
    "prompt": "string"
  },
  "actions": [
    {
      "type": "wait",
      "milliseconds": 1,
      "selector": "#my-element"
    }
  ],
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "removeBase64Images": true,
  "blockAds": true,
  "proxy": "basic",
  "changeTrackingOptions": {
    "modes": [
      "git-diff"
    ],
    "schema": {},
    "prompt": "string",
    "tag": null
  },
  "storeInCache": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formats|[string]|false|none|Formats to include in the output. `rawBase64` must be requested by itself.|
|onlyMainContent|boolean|false|none|Only return the main content of the page excluding headers, navs, footers, etc.|
|includeTags|[string]|false|none|Tags to include in the output.|
|excludeTags|[string]|false|none|Tags to exclude from the output.|
|maxAge|integer|false|none|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 0, which disables caching.|
|headers|object|false|none|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|waitFor|integer|false|none|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.|
|mobile|boolean|false|none|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|skipTlsVerification|boolean|false|none|Skip TLS certificate verification when making requests|
|timeout|integer|false|none|Timeout in milliseconds for the request|
|parsePDF|boolean|false|none|Controls how PDF files are processed during scraping. When true, the PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page). When false, the PDF file is returned in base64 encoding with a flat rate of 1 credit total.|
|jsonOptions|object|false|none|JSON options object|
|actions|[object]|false|none|Actions to perform on the page before grabbing the content|
|location|object|false|none|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|removeBase64Images|boolean|false|none|Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|blockAds|boolean|false|none|Enables ad-blocking and cookie popup blocking.|
|proxy|string|false|none|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.<br><br>If you do not specify a proxy, Firecrawl will default to basic.|
|changeTrackingOptions|object|false|none|Options for change tracking (Beta). Only applicable when 'changeTracking' is included in formats. The 'markdown' format must also be specified when using change tracking.|
|storeInCache|boolean|false|none|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (actions, headers) will force this parameter to be false.|

#### Enumerated Values

|Property|Value|
|---|---|
|formats|markdown|
|formats|html|
|formats|rawHtml|
|formats|rawBase64|
|formats|links|
|formats|screenshot|
|formats|screenshot@fullPage|
|formats|json|
|formats|changeTracking|
|formats|branding|
|proxy|basic|
|proxy|enhanced|
|proxy|auto|

<h2 id="tocS_ScrapeResponse">ScrapeResponse</h2>
<!-- backwards compatibility -->
<a id="schemascraperesponse"></a>
<a id="schema_ScrapeResponse"></a>
<a id="tocSscraperesponse"></a>
<a id="tocsscraperesponse"></a>

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "links": [
      "string"
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "<any other metadata> ": "string",
      "statusCode": 0,
      "timezone": "string",
      "error": "string"
    },
    "llm_extraction": {},
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "logo": "string",
      "fonts": [
        {
          "family": "string"
        }
      ],
      "colors": {},
      "typography": {},
      "spacing": {},
      "components": {},
      "icons": {},
      "images": {},
      "animations": {},
      "layout": {},
      "tone": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_CrawlStatusResponseObj">CrawlStatusResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatusresponseobj"></a>
<a id="schema_CrawlStatusResponseObj"></a>
<a id="tocScrawlstatusresponseobj"></a>
<a id="tocscrawlstatusresponseobj"></a>

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "<any other metadata> ": "string",
        "statusCode": 0,
        "timezone": "string",
        "error": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The current status of the crawl. Can be `scraping`, `completed`, or `failed`.|
|total|integer|false|none|The total number of pages that were attempted to be crawled.|
|completed|integer|false|none|The number of pages that have been successfully crawled.|
|creditsUsed|integer|false|none|The number of credits used for the crawl.|
|expiresAt|string(date-time)|false|none|The date and time when the crawl will expire.|
|next|string \| null|false|none|The URL to retrieve the next 10MB of data. Returned if the crawl is not completed or if the response is larger than 10MB.|
|data|[object]|false|none|The data of the crawl.|

<h2 id="tocS_CrawlErrorsResponseObj">CrawlErrorsResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemacrawlerrorsresponseobj"></a>
<a id="schema_CrawlErrorsResponseObj"></a>
<a id="tocScrawlerrorsresponseobj"></a>
<a id="tocscrawlerrorsresponseobj"></a>

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|Errored scrape jobs and error details|
|robotsBlocked|[string]|false|none|List of URLs that were attempted in scraping but were blocked by robots.txt|

<h2 id="tocS_BatchScrapeStatusResponseObj">BatchScrapeStatusResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemabatchscrapestatusresponseobj"></a>
<a id="schema_BatchScrapeStatusResponseObj"></a>
<a id="tocSbatchscrapestatusresponseobj"></a>
<a id="tocsbatchscrapestatusresponseobj"></a>

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "<any other metadata> ": "string",
        "statusCode": 0,
        "timezone": "string",
        "error": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The current status of the batch scrape. Can be `scraping`, `completed`, or `failed`.|
|total|integer|false|none|The total number of pages that were attempted to be scraped.|
|completed|integer|false|none|The number of pages that have been successfully scraped.|
|creditsUsed|integer|false|none|The number of credits used for the batch scrape.|
|expiresAt|string(date-time)|false|none|The date and time when the batch scrape will expire.|
|next|string \| null|false|none|The URL to retrieve the next 10MB of data. Returned if the batch scrape is not completed or if the response is larger than 10MB.|
|data|[object]|false|none|The data of the batch scrape.|

<h2 id="tocS_CrawlResponse">CrawlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacrawlresponse"></a>
<a id="schema_CrawlResponse"></a>
<a id="tocScrawlresponse"></a>
<a id="tocscrawlresponse"></a>

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|url|string(uri)|false|none|none|

<h2 id="tocS_BatchScrapeResponseObj">BatchScrapeResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemabatchscraperesponseobj"></a>
<a id="schema_BatchScrapeResponseObj"></a>
<a id="tocSbatchscraperesponseobj"></a>
<a id="tocsbatchscraperesponseobj"></a>

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com",
  "invalidURLs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|url|string(uri)|false|none|none|
|invalidURLs|[string]|false|none|If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.|

<h2 id="tocS_MapResponse">MapResponse</h2>
<!-- backwards compatibility -->
<a id="schemamapresponse"></a>
<a id="schema_MapResponse"></a>
<a id="tocSmapresponse"></a>
<a id="tocsmapresponse"></a>

```json
{
  "success": true,
  "links": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|links|[string]|false|none|none|

<h2 id="tocS_ExtractResponse">ExtractResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextractresponse"></a>
<a id="schema_ExtractResponse"></a>
<a id="tocSextractresponse"></a>
<a id="tocsextractresponse"></a>

```json
{
  "success": true,
  "id": "string",
  "invalidURLs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|invalidURLs|[string]|false|none|If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.|

<h2 id="tocS_ExtractStatusResponse">ExtractStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextractstatusresponse"></a>
<a id="schema_ExtractStatusResponse"></a>
<a id="tocSextractstatusresponse"></a>
<a id="tocsextractstatusresponse"></a>

```json
{
  "success": true,
  "data": {},
  "status": "completed",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|status|string|false|none|The current status of the extract job|
|expiresAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|processing|
|status|failed|
|status|cancelled|
