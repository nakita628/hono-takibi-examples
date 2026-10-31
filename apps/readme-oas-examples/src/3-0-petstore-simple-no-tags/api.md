<h1 id="petstore-simple-wo-tags">Petstore simple w/o tags v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This ia variant of `petstore-simple` except that there are no `tags` configured.

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="petstore-simple-wo-tags-default">Default</h1>

## Find a pet

> Code samples

```bash
curl https://example.com/pet/0
```

`GET /pet/{id}`

This operation will find a pet in the database.

<h3 id="find-a-pet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="find-a-pet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Invalid status value|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a pet

> Code samples

```bash
curl https://example.com/pet/0 \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /pet/{id}`

This operation will update a pet in the database.

<h3 id="update-a-pet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="update-a-pet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Invalid id value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>
