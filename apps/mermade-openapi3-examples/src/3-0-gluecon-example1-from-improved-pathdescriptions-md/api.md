<h1 id="example-of-documenting-paths-instead-of-operations">Example of documenting paths instead of operations v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="example-of-documenting-paths-instead-of-operations-default">Default</h1>

## get/speakers

> Code samples

```bash
curl https://example.com/speakers \
  -H 'Accept: application/vnd.collection+json'
```

`GET /speakers`

<h3 id="getspeakers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of speakers|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/speakers

> Code samples

```bash
curl https://example.com/speakers \
  -X POST
```

`POST /speakers`

Use a `application/x-www-urlencoded-form` to send speaker related information

<h3 id="postspeakers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Acknowledge creation of a new speaker resource|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|uri|none|

<aside class="success">
This operation does not require authentication
</aside>

## delete/speakers

> Code samples

```bash
curl https://example.com/speakers \
  -X DELETE
```

`DELETE /speakers`

<h3 id="deletespeakers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Acknowledge successful deleted|None|

<aside class="success">
This operation does not require authentication
</aside>
