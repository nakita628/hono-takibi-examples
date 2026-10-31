<h1 id="wolfram">Wolfram v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.wolframalpha.com">https://www.wolframalpha.com</a> - Wolfram Server for ChatGPT

<h1 id="wolfram-default">Default</h1>

## Evaluate Wolfram Language code

<a id="opIdgetWolframCloudResults"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/cloud-plugin?input=string'
```

`GET /api/v1/cloud-plugin`

<a href="https://reference.wolfram.com/language/">External documentation</a>

<h3 id="evaluate-wolfram-language-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|input|query|string|true|the input expression|

<h3 id="evaluate-wolfram-language-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The result of the Wolfram Language evaluation|None|
|400|Bad Request|The request is missing the 'input' parameter|None|
|403|Forbidden|Unauthorized|None|
|500|Internal Server Error|Wolfram Cloud was unable to generate a result|None|
|503|Service Unavailable|Service temporarily unavailable. This may be the result of too many requests.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Wolfram|Alpha results

<a id="opIdgetWolframAlphaResults"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/llm-api?input=string'
```

`GET /api/v1/llm-api`

<a href="https://products.wolframalpha.com/api">External documentation</a>

<h3 id="get-wolframalpha-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|input|query|string|true|the input|

<h3 id="get-wolframalpha-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The result of the Wolfram\|Alpha query|None|
|400|Bad Request|The request is missing the 'input' parameter|None|
|403|Forbidden|Unauthorized|None|
|500|Internal Server Error|Wolfram\|Alpha was unable to generate a result|None|
|501|Not Implemented|Wolfram\|Alpha was unable to generate a result|None|
|503|Service Unavailable|Service temporarily unavailable. This may be the result of too many requests.|None|

<aside class="success">
This operation does not require authentication
</aside>
