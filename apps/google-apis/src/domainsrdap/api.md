<h1 id="domains-rdap-api">Domains RDAP API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Read-only public API that lets users search for information about domain names.

Base URLs:

* <a href="https://domainsrdap.googleapis.com/">https://domainsrdap.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/domains/rdap/">External documentation</a>

<h1 id="domains-rdap-api-autnum">autnum</h1>

## domainsrdap.autnum.get

<a id="opIddomainsrdap.autnum.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/autnum/string \
  -H 'Accept: application/json'
```

`GET /v1/autnum/{autnumId}`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapautnumget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|autnumId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapautnumget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-rdap-api-domain">domain</h1>

## domainsrdap.domain.get

<a id="opIddomainsrdap.domain.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/domain/string \
  -H 'Accept: application/json'
```

`GET /v1/domain/{domainName}`

Look up RDAP information for a domain by name.

<h3 id="domainsrdapdomainget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|Full domain name to look up. Example: "example.com"|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="domainsrdapdomainget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-rdap-api-entity">entity</h1>

## domainsrdap.entity.get

<a id="opIddomainsrdap.entity.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/entity/string \
  -H 'Accept: application/json'
```

`GET /v1/entity/{entityId}`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapentityget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapentityget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-rdap-api-ip">ip</h1>

## domainsrdap.ip.get

<a id="opIddomainsrdap.ip.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/ip/string/string \
  -H 'Accept: application/json'
```

`GET /v1/ip/{ipId}/{ipId1}`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapipget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ipId|path|string|true|none|
|ipId1|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapipget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-rdap-api-nameserver">nameserver</h1>

## domainsrdap.nameserver.get

<a id="opIddomainsrdap.nameserver.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/nameserver/string \
  -H 'Accept: application/json'
```

`GET /v1/nameserver/{nameserverId}`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapnameserverget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameserverId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapnameserverget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-rdap-api-v1">v1</h1>

## domainsrdap.getDomains

<a id="opIddomainsrdap.getDomains"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/domains \
  -H 'Accept: application/json'
```

`GET /v1/domains`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapgetdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapgetdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## domainsrdap.getEntities

<a id="opIddomainsrdap.getEntities"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/entities \
  -H 'Accept: application/json'
```

`GET /v1/entities`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapgetentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapgetentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## domainsrdap.getHelp

<a id="opIddomainsrdap.getHelp"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/help \
  -H 'Accept: application/json'
```

`GET /v1/help`

Get help information for the RDAP API, including links to documentation.

<h3 id="domainsrdapgethelp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="domainsrdapgethelp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="success">
This operation does not require authentication
</aside>

## domainsrdap.getIp

<a id="opIddomainsrdap.getIp"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/ip \
  -H 'Accept: application/json'
```

`GET /v1/ip`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapgetip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="domainsrdapgetip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="success">
This operation does not require authentication
</aside>

## domainsrdap.getNameservers

<a id="opIddomainsrdap.getNameservers"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/nameservers \
  -H 'Accept: application/json'
```

`GET /v1/nameservers`

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

<h3 id="domainsrdapgetnameservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="domainsrdapgetnameservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RdapResponse](#schemardapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_HttpBody">HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemahttpbody"></a>
<a id="schema_HttpBody"></a>
<a id="tocShttpbody"></a>
<a id="tocshttpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[object]|false|none|Application specific response metadata. Must be set in the first response for streaming APIs.|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "hreflang": "string",
  "media": "string",
  "rel": "string",
  "title": "string",
  "type": "string",
  "value": "string"
}
```

Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|Target URL of a link. Example: "http://example.com/previous".|
|hreflang|string|false|none|Language code of a link. Example: "en".|
|media|string|false|none|Media type of the link destination. Example: "screen".|
|rel|string|false|none|Relation type of a link. Example: "previous".|
|title|string|false|none|Title of this link. Example: "title".|
|type|string|false|none|Content type of the link. Example: "application/json".|
|value|string|false|none|URL giving context for the link. Example: "http://example.com/current".|

<h2 id="tocS_Notice">Notice</h2>
<!-- backwards compatibility -->
<a id="schemanotice"></a>
<a id="schema_Notice"></a>
<a id="tocSnotice"></a>
<a id="tocsnotice"></a>

```json
{
  "description": [
    "string"
  ],
  "links": [
    {
      "href": "string",
      "hreflang": "string",
      "media": "string",
      "rel": "string",
      "title": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "title": "string",
  "type": "string"
}
```

Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[string]|false|none|Description of the notice.|
|links|[[Link](#schemalink)]|false|none|Link to a document containing more information.|
|title|string|false|none|Title of a notice. Example: "Terms of Service".|
|type|string|false|none|Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons".|

<h2 id="tocS_RdapResponse">RdapResponse</h2>
<!-- backwards compatibility -->
<a id="schemardapresponse"></a>
<a id="schema_RdapResponse"></a>
<a id="tocSrdapresponse"></a>
<a id="tocsrdapresponse"></a>

```json
{
  "description": [
    "string"
  ],
  "errorCode": 0,
  "jsonResponse": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "lang": "string",
  "notices": [
    {
      "description": [
        "string"
      ],
      "links": [
        {
          "href": "string",
          "hreflang": "string",
          "media": "string",
          "rel": "string",
          "title": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "title": "string",
      "type": "string"
    }
  ],
  "rdapConformance": [
    "string"
  ],
  "title": "string"
}
```

Response to a general RDAP query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[string]|false|none|Error description.|
|errorCode|integer(int32)|false|none|Error HTTP code. Example: "501".|
|jsonResponse|[HttpBody](#schemahttpbody)|false|none|HTTP response with content type set to "application/json+rdap".|
|lang|string|false|none|Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6).|
|notices|[[Notice](#schemanotice)]|false|none|Notices applying to this response.|
|rdapConformance|[string]|false|none|RDAP conformance level.|
|title|string|false|none|Error title.|
