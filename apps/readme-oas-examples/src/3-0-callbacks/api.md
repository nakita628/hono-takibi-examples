<h1 id="callback-example">Callback Example v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="callback-example-default">Default</h1>

## post/streams

> Code samples

```bash
curl 'https://example.com/streams?callbackUrl=https%3A%2F%2Ftonys-server.com' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /streams`

subscribes a client to receive out-of-band data

<h3 id="poststreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callbackUrl|query|string(uri)|true|the location where data will be sent. Must be network accessible by the source server|

> Example responses

> 201 Response

```json
{
  "subscriptionId": "2531329f-fb09-4ef7-887e-84e648214436"
}
```

<h3 id="poststreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|subscription successfully created|Inline|

<h3 id="poststreams-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptionId|string|true|none|this unique identifier allows management of the subscription|

<h3 id="poststreams-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|onData|{$request.query.callbackUrl}/data|POST|none|

<aside class="success">
This operation does not require authentication
</aside>
