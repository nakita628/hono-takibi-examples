<h1 id="google-site-verification-api">Google Site Verification API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Verifies ownership of websites or domains with Google.

Base URLs:

* <a href="https://www.googleapis.com/siteVerification/v1">https://www.googleapis.com/siteVerification/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/site-verification/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/siteverification|Manage the list of sites and domains you control|
|https://www.googleapis.com/auth/siteverification.verify_only|Manage your new site verifications with Google|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/siteverification|Manage the list of sites and domains you control|
|https://www.googleapis.com/auth/siteverification.verify_only|Manage your new site verifications with Google|

<h1 id="google-site-verification-api-webresource">webResource</h1>

## siteVerification.webResource.getToken

<a id="opIdsiteVerification.webResource.getToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site": {
      "identifier": "string",
      "type": "string"
    },
    "verificationMethod": "string"
  }'
```

`POST /token`

Get a verification token for placing on a website or domain.

> Body parameter

```json
{
  "site": {
    "identifier": "string",
    "type": "string"
  },
  "verificationMethod": "string"
}
```

<h3 id="siteverificationwebresourcegettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[SiteVerificationWebResourceGettokenRequest](#schemasiteverificationwebresourcegettokenrequest)|false|none|
|» site|body|object|false|The site for which a verification token will be generated.|
|» » identifier|body|string|false|The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.|
|» » type|body|string|false|The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name).|
|» verificationMethod|body|string|false|The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "method": "string",
  "token": "string"
}
```

<h3 id="siteverificationwebresourcegettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceGettokenResponse](#schemasiteverificationwebresourcegettokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification ), Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification.verify_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification.verify_only )
</aside>

## siteVerification.webResource.list

<a id="opIdsiteVerification.webResource.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/webResource \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webResource`

Get the list of your verified websites and domains.

<h3 id="siteverificationwebresourcelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "owners": [
        "string"
      ],
      "site": {
        "identifier": "string",
        "type": "string"
      }
    }
  ]
}
```

<h3 id="siteverificationwebresourcelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceListResponse](#schemasiteverificationwebresourcelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification )
</aside>

## siteVerification.webResource.insert

<a id="opIdsiteVerification.webResource.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/webResource?verificationMethod=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "owners": [
      "string"
    ],
    "site": {
      "identifier": "string",
      "type": "string"
    }
  }'
```

`POST /webResource`

Attempt verification of a website or domain.

> Body parameter

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourceinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verificationMethod|query|string|true|The method to use for verifying a site or domain.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|false|none|
|» id|body|string|false|The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.|
|» owners|body|[string]|false|The email addresses of all verified owners.|
|» site|body|object|false|The address and type of a site that is verified or will be verified.|
|» » identifier|body|string|false|The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.|
|» » type|body|string|false|The site type. Can be SITE or INET_DOMAIN (domain name).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourceinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification ), Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification.verify_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification.verify_only )
</aside>

## siteVerification.webResource.get

<a id="opIdsiteVerification.webResource.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/webResource/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webResource/{id}`

Get the most current data for a website or domain.

<h3 id="siteverificationwebresourceget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of a verified site or domain.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourceget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification )
</aside>

## siteVerification.webResource.update

<a id="opIdsiteVerification.webResource.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/webResource/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "owners": [
      "string"
    ],
    "site": {
      "identifier": "string",
      "type": "string"
    }
  }'
```

`PUT /webResource/{id}`

Modify the list of owners for your website or domain.

> Body parameter

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourceupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of a verified site or domain.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|false|none|
|» id|body|string|false|The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.|
|» owners|body|[string]|false|The email addresses of all verified owners.|
|» site|body|object|false|The address and type of a site that is verified or will be verified.|
|» » identifier|body|string|false|The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.|
|» » type|body|string|false|The site type. Can be SITE or INET_DOMAIN (domain name).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourceupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification )
</aside>

## siteVerification.webResource.delete

<a id="opIdsiteVerification.webResource.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/webResource/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webResource/{id}`

Relinquish ownership of a website or domain.

<h3 id="siteverificationwebresourcedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of a verified site or domain.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="siteverificationwebresourcedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification )
</aside>

## siteVerification.webResource.patch

<a id="opIdsiteVerification.webResource.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/webResource/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "owners": [
      "string"
    ],
    "site": {
      "identifier": "string",
      "type": "string"
    }
  }'
```

`PATCH /webResource/{id}`

Modify the list of owners for your website or domain. This method supports patch semantics.

> Body parameter

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourcepatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of a verified site or domain.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|false|none|
|» id|body|string|false|The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.|
|» owners|body|[string]|false|The email addresses of all verified owners.|
|» site|body|object|false|The address and type of a site that is verified or will be verified.|
|» » identifier|body|string|false|The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.|
|» » type|body|string|false|The site type. Can be SITE or INET_DOMAIN (domain name).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

<h3 id="siteverificationwebresourcepatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/siteverification ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/siteverification )
</aside>

# Schemas

<h2 id="tocS_SiteVerificationWebResourceGettokenRequest">SiteVerificationWebResourceGettokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemasiteverificationwebresourcegettokenrequest"></a>
<a id="schema_SiteVerificationWebResourceGettokenRequest"></a>
<a id="tocSsiteverificationwebresourcegettokenrequest"></a>
<a id="tocssiteverificationwebresourcegettokenrequest"></a>

```json
{
  "site": {
    "identifier": "string",
    "type": "string"
  },
  "verificationMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site|object|false|none|The site for which a verification token will be generated.|
|verificationMethod|string|false|none|The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.|

<h2 id="tocS_SiteVerificationWebResourceGettokenResponse">SiteVerificationWebResourceGettokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteverificationwebresourcegettokenresponse"></a>
<a id="schema_SiteVerificationWebResourceGettokenResponse"></a>
<a id="tocSsiteverificationwebresourcegettokenresponse"></a>
<a id="tocssiteverificationwebresourcegettokenresponse"></a>

```json
{
  "method": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.|
|token|string|false|none|The verification token. The token must be placed appropriately in order for verification to succeed.|

<h2 id="tocS_SiteVerificationWebResourceListResponse">SiteVerificationWebResourceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteverificationwebresourcelistresponse"></a>
<a id="schema_SiteVerificationWebResourceListResponse"></a>
<a id="tocSsiteverificationwebresourcelistresponse"></a>
<a id="tocssiteverificationwebresourcelistresponse"></a>

```json
{
  "items": [
    {
      "id": "string",
      "owners": [
        "string"
      ],
      "site": {
        "identifier": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SiteVerificationWebResourceResource](#schemasiteverificationwebresourceresource)]|false|none|The list of sites that are owned by the authenticated user.|

<h2 id="tocS_SiteVerificationWebResourceResource">SiteVerificationWebResourceResource</h2>
<!-- backwards compatibility -->
<a id="schemasiteverificationwebresourceresource"></a>
<a id="schema_SiteVerificationWebResourceResource"></a>
<a id="tocSsiteverificationwebresourceresource"></a>
<a id="tocssiteverificationwebresourceresource"></a>

```json
{
  "id": "string",
  "owners": [
    "string"
  ],
  "site": {
    "identifier": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.|
|owners|[string]|false|none|The email addresses of all verified owners.|
|site|object|false|none|The address and type of a site that is verified or will be verified.|
