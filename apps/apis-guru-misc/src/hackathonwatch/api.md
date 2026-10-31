<h1 id="hackathonwatch">HackathonWatch v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://www.hackathonwatch.com/api/">http://www.hackathonwatch.com/api/</a>

<h1 id="hackathonwatch-hackathons">hackathons</h1>

Operations about hackathons

## Return a list of coming hackathons

<a id="opIdGET-hackathons-coming---format-"></a>

> Code samples

```bash
curl https://example.com/hackathons/coming.json
```

`GET /hackathons/coming.json`

<h3 id="return-a-list-of-coming-hackathons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Specify the page of coming hackathons.|

<h3 id="return-a-list-of-coming-hackathons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return the detail of a given hackathon

<a id="opIdGET-hackathons--id---format-"></a>

> Code samples

```bash
curl https://example.com/hackathons/0.json
```

`GET /hackathons/{id}.json`

<h3 id="return-the-detail-of-a-given-hackathon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the hackathon for detail information|

<h3 id="return-the-detail-of-a-given-hackathon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hackathonwatch-swaggerdoc">swagger_doc</h1>

Operations about swagger_docs

## Swagger compatible API description

<a id="opIdGET-swagger_doc---format-"></a>

> Code samples

```bash
curl https://example.com/swagger_doc.json
```

`GET /swagger_doc.json`

<h3 id="swagger-compatible-api-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Swagger compatible API description for specific API

<a id="opIdGET-swagger_doc--name---format-"></a>

> Code samples

```bash
curl https://example.com/swagger_doc/string.json
```

`GET /swagger_doc/{name}.json`

<h3 id="swagger-compatible-api-description-for-specific-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of mounted API|

<h3 id="swagger-compatible-api-description-for-specific-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>
