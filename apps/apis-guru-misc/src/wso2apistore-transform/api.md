<h1 id="transform">Transform v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides XML to JSON, JSON to XML transformations.

Base URLs:

* <a href="https://gateway.wso2apistore.com/transform/1.0.0">https://gateway.wso2apistore.com/transform/1.0.0</a>

* <a href="http://gateway.wso2apistore.com/transform/1.0.0">http://gateway.wso2apistore.com/transform/1.0.0</a>

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://gateway.api.cloud.wso2.com/authorize](https://gateway.api.cloud.wso2.com/authorize)

<h1 id="transform-default">Default</h1>

## post/jsontoxml

> Code samples

```bash
curl https://example.com/jsontoxml \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"{\"foo\":\"bar\"}"'
```

`POST /jsontoxml`

> Body parameter

```json
"{\"foo\":\"bar\"}"
```

<h3 id="postjsontoxml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|JSON payload|

<h3 id="postjsontoxml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## post/xmltojson

> Code samples

```bash
curl https://example.com/xmltojson \
  -X POST \
  -H 'Content-Type: text/xml' \
  -d '<foo>bar</foo>'
```

`POST /xmltojson`

> Body parameter

```text
<foo>bar</foo>
```

<h3 id="postxmltojson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|XML payload|

<h3 id="postxmltojson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
