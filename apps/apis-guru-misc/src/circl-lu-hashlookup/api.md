<h1 id="hashlookup-circl-api">hashlookup CIRCL API v1.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

![](https://www.circl.lu/assets/images/circl-logo.png)
[CIRCL hash lookup](https://hashlookup.circl.lu/) is a public API to lookup hash values against known database of files. For more details about all the datasets included [visit the website of the project](https://www.circl.lu/services/hashlookup/). The API is accessible via HTTP ReST API and the API is also [described as an OpenAPI](https://hashlookup.circl.lu/swagger.json). A [documentation is available with](https://www.circl.lu/services/hashlookup/) with sample queries and software using hashlookup. An offline version as Bloom filter is also [available](https://circl.lu/services/hashlookup/#how-to-quickly-check-a-set-of-files-in-a-local-directory). The API can be tested live in the interface below.

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

License: CC-BY

<h1 id="hashlookup-circl-api-default">default</h1>

Default namespace

## post_bulkmd5

<a id="opIdpost_bulkmd5"></a>

> Code samples

```bash
curl https://example.com/bulk/md5 \
  -X POST
```

`POST /bulk/md5`

Bulk search of MD5 hashes in a JSON array with the key 'hashes'.

<h3 id="postbulkmd5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|JSON format incorrect. An array of hashes in the key 'hashes' is expected.|None|

<aside class="success">
This operation does not require authentication
</aside>

## post_bulksha1

<a id="opIdpost_bulksha1"></a>

> Code samples

```bash
curl https://example.com/bulk/sha1 \
  -X POST
```

`POST /bulk/sha1`

Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

<h3 id="postbulksha1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|JSON format incorrect. An array of hashes in the key 'hashes' is expected.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_children

<a id="opIdget_children"></a>

> Code samples

```bash
curl https://example.com/children/string/0/string
```

`GET /children/{sha1}/{count}/{cursor}`

Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

<h3 id="getchildren-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha1|path|string|true|none|
|count|path|integer|true|none|
|cursor|path|string|true|none|

<h3 id="getchildren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|SHA1 value incorrect, expecting a SHA1 value in hex format|None|
|404|Not Found|The SHA1 value has no known child.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_info

<a id="opIdget_info"></a>

> Code samples

```bash
curl https://example.com/info
```

`GET /info`

Info about the hashlookup database

<h3 id="getinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_lookup_md5

<a id="opIdget_lookup_md5"></a>

> Code samples

```bash
curl https://example.com/lookup/md5/string
```

`GET /lookup/md5/{md5}`

Lookup MD5.

<h3 id="getlookupmd5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|md5|path|string|true|none|

<h3 id="getlookupmd5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|MD5 value incorrect, expecting a MD5 value in hex format|None|
|404|Not Found|Non existing MD5|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_lookup_sha1

<a id="opIdget_lookup_sha1"></a>

> Code samples

```bash
curl https://example.com/lookup/sha1/string
```

`GET /lookup/sha1/{sha1}`

Lookup SHA-1.

<h3 id="getlookupsha1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha1|path|string|true|none|

<h3 id="getlookupsha1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|SHA1 value incorrect, expecting a SHA1 value in hex format|None|
|404|Not Found|Non existing SHA1|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_lookup_sha256

<a id="opIdget_lookup_sha256"></a>

> Code samples

```bash
curl https://example.com/lookup/sha256/string
```

`GET /lookup/sha256/{sha256}`

Lookup SHA-256.

<h3 id="getlookupsha256-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha256|path|string|true|none|

<h3 id="getlookupsha256-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|SHA-256 value incorrect, expecting a SHA-256 value in hex format|None|
|404|Not Found|Non existing SHA-256|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_parents

<a id="opIdget_parents"></a>

> Code samples

```bash
curl https://example.com/parents/string/0/string
```

`GET /parents/{sha1}/{count}/{cursor}`

Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

<h3 id="getparents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha1|path|string|true|none|
|count|path|integer|true|none|
|cursor|path|string|true|none|

<h3 id="getparents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|SHA1 value incorrect, expecting a SHA1 value in hex format|None|
|404|Not Found|The SHA1 value has no known parent.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_session_create

<a id="opIdget_session_create"></a>

> Code samples

```bash
curl https://example.com/session/create/string
```

`GET /session/create/{name}`

Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.

<h3 id="getsessioncreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="getsessioncreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Expecting a name for the session|None|
|500|Internal Server Error|Session feature is not enabled|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_session_matches

<a id="opIdget_session_matches"></a>

> Code samples

```bash
curl https://example.com/session/get/string
```

`GET /session/get/{name}`

Return set of matching and non-matching hashes from a session.

<h3 id="getsessionmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="getsessionmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Expecting a name for the session|None|
|500|Internal Server Error|Session feature is not enabled|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_stattop

<a id="opIdget_stattop"></a>

> Code samples

```bash
curl https://example.com/stats/top
```

`GET /stats/top`

Return the top 100 of most queried values.

<h3 id="getstattop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Public statistics not enabled|None|

<aside class="success">
This operation does not require authentication
</aside>
