<h1 id="firebase-hosting-api">Firebase Hosting API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Firebase Hosting REST API enables programmatic and customizable management and deployments to your Firebase-hosted sites. Use this REST API to create and manage channels and sites as well as to deploy new or updated hosting configurations and content files.

Base URLs:

* <a href="https://firebasehosting.googleapis.com/">https://firebasehosting.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/hosting/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

<h1 id="firebase-hosting-api-projects">projects</h1>

## firebasehosting.projects.sites.list

<a id="opIdfirebasehosting.projects.sites.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/sites`

Lists each Hosting Site associated with the specified parent Firebase project.

<h3 id="firebasehostingprojectssiteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|pageSize|query|integer|false|Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.|
|pageToken|query|string|false|Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.|
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
  "nextPageToken": "string",
  "sites": [
    {
      "appId": "string",
      "defaultUrl": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="firebasehostingprojectssiteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSitesResponse](#schemalistsitesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.projects.sites.create

<a id="opIdfirebasehosting.projects.sites.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appId": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{parent}/sites`

Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.

> Body parameter

```json
{
  "appId": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="firebasehostingprojectssitescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|siteId|query|string|false|Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.|
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
|body|body|[Site](#schemasite)|false|none|
|» appId|body|string|false|Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.|
|» labels|body|object|false|Optional. User-specified labels for the Hosting site.|
|» » **additionalProperties**|body|string|false|none|

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
  "appId": "string",
  "defaultUrl": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="firebasehostingprojectssitescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

<h1 id="firebase-hosting-api-sites">sites</h1>

## firebasehosting.sites.versions.get

<a id="opIdfirebasehosting.sites.versions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

<h3 id="firebasehostingsitesversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID|
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
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

<h3 id="firebasehostingsitesversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.domains.update

<a id="opIdfirebasehosting.sites.domains.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domainName": "string",
    "domainRedirect": {
      "domainName": "string",
      "type": "REDIRECT_TYPE_UNSPECIFIED"
    },
    "provisioning": {
      "certChallengeDiscoveredTxt": [
        "string"
      ],
      "certChallengeDns": {
        "domainName": "string",
        "token": "string"
      },
      "certChallengeHttp": {
        "path": "string",
        "token": "string"
      },
      "certStatus": "CERT_STATUS_UNSPECIFIED",
      "discoveredIps": [
        "string"
      ],
      "dnsFetchTime": "string",
      "dnsStatus": "DNS_STATUS_UNSPECIFIED",
      "expectedIps": [
        "string"
      ]
    },
    "site": "string",
    "status": "DOMAIN_STATUS_UNSPECIFIED",
    "updateTime": "string"
  }'
```

`PUT /v1beta1/{name}`

Updates the specified domain mapping, creating the mapping as if it does not exist.

> Body parameter

```json
{
  "domainName": "string",
  "domainRedirect": {
    "domainName": "string",
    "type": "REDIRECT_TYPE_UNSPECIFIED"
  },
  "provisioning": {
    "certChallengeDiscoveredTxt": [
      "string"
    ],
    "certChallengeDns": {
      "domainName": "string",
      "token": "string"
    },
    "certChallengeHttp": {
      "path": "string",
      "token": "string"
    },
    "certStatus": "CERT_STATUS_UNSPECIFIED",
    "discoveredIps": [
      "string"
    ],
    "dnsFetchTime": "string",
    "dnsStatus": "DNS_STATUS_UNSPECIFIED",
    "expectedIps": [
      "string"
    ]
  },
  "site": "string",
  "status": "DOMAIN_STATUS_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="firebasehostingsitesdomainsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the domain association to update or create, if an association doesn't already exist.|
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
|body|body|[Domain](#schemadomain)|false|none|
|» domainName|body|string|false|Required. The domain name of the association.|
|» domainRedirect|body|[DomainRedirect](#schemadomainredirect)|false|If set, the domain should redirect with the provided parameters.|
|» provisioning|body|[DomainProvisioning](#schemadomainprovisioning)|false|Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.|
|» site|body|string|false|Required. The site name of the association.|
|» status|body|string|false|Output only. Additional status of the domain association.|
|» updateTime|body|string(google-datetime)|false|Output only. The time at which the domain was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|DOMAIN_STATUS_UNSPECIFIED|
|» status|DOMAIN_CHANGE_PENDING|
|» status|DOMAIN_ACTIVE|
|» status|DOMAIN_VERIFICATION_REQUIRED|
|» status|DOMAIN_VERIFICATION_LOST|

> Example responses

> 200 Response

```json
{
  "domainName": "string",
  "domainRedirect": {
    "domainName": "string",
    "type": "REDIRECT_TYPE_UNSPECIFIED"
  },
  "provisioning": {
    "certChallengeDiscoveredTxt": [
      "string"
    ],
    "certChallengeDns": {
      "domainName": "string",
      "token": "string"
    },
    "certChallengeHttp": {
      "path": "string",
      "token": "string"
    },
    "certStatus": "CERT_STATUS_UNSPECIFIED",
    "discoveredIps": [
      "string"
    ],
    "dnsFetchTime": "string",
    "dnsStatus": "DNS_STATUS_UNSPECIFIED",
    "expectedIps": [
      "string"
    ]
  },
  "site": "string",
  "status": "DOMAIN_STATUS_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="firebasehostingsitesdomainsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Domain](#schemadomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.delete

<a id="opIdfirebasehosting.sites.versions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes the specified version.

<h3 id="firebasehostingsitesversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID|
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
{}
```

<h3 id="firebasehostingsitesversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.patch

<a id="opIdfirebasehosting.sites.versions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "appAssociation": "AUTO",
      "cleanUrls": true,
      "headers": [
        {
          "glob": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "regex": "string"
        }
      ],
      "i18n": {
        "root": "string"
      },
      "redirects": [
        {
          "glob": "string",
          "location": "string",
          "regex": "string",
          "statusCode": 0
        }
      ],
      "rewrites": [
        {
          "dynamicLinks": true,
          "function": "string",
          "functionRegion": "string",
          "glob": "string",
          "path": "string",
          "regex": "string",
          "run": {
            "region": "string",
            "serviceId": "string"
          }
        }
      ],
      "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    },
    "createTime": "string",
    "createUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "deleteTime": "string",
    "deleteUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "fileCount": "string",
    "finalizeTime": "string",
    "finalizeUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "status": "VERSION_STATUS_UNSPECIFIED",
    "versionBytes": "string"
  }'
```

`PATCH /v1beta1/{name}`

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

> Body parameter

```json
{
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

<h3 id="firebasehostingsitesversionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).|
|updateMask|query|string|false|A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.|
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
|body|body|[Version](#schemaversion)|false|none|
|» config|body|[ServingConfig](#schemaservingconfig)|false|The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](https://firebase.google.com/docs/cli/#the_firebasejson_file) file.|
|» createTime|body|string(google-datetime)|false|Output only. The time at which the version was created.|
|» createUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who created the version.|
|» deleteTime|body|string(google-datetime)|false|Output only. The time at which the version was `DELETED`.|
|» deleteUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who `DELETED` the version.|
|» fileCount|body|string(int64)|false|Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.|
|» finalizeTime|body|string(google-datetime)|false|Output only. The time at which the version was `FINALIZED`.|
|» finalizeUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who `FINALIZED` the version.|
|» labels|body|object|false|The labels used for extra metadata and/or filtering.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).|
|» status|body|string|false|The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).|
|» versionBytes|body|string(int64)|false|Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|VERSION_STATUS_UNSPECIFIED|
|» status|CREATED|
|» status|FINALIZED|
|» status|DELETED|
|» status|ABANDONED|
|» status|EXPIRED|
|» status|CLONING|

> Example responses

> 200 Response

```json
{
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

<h3 id="firebasehostingsitesversionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.channels.list

<a id="opIdfirebasehosting.sites.channels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/channels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/channels`

Lists the channels for the specified site. All sites have a default `live` channel.

<h3 id="firebasehostingsiteschannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site for which to list channels, in the format: sites/SITE_ID|
|pageSize|query|integer|false|The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|A token from a previous call to `ListChannels` that tells the server where to resume listing.|
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
  "channels": [
    {
      "createTime": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "release": {
        "message": "string",
        "name": "string",
        "releaseTime": "string",
        "releaseUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "type": "TYPE_UNSPECIFIED",
        "version": {
          "config": {
            "appAssociation": "AUTO",
            "cleanUrls": true,
            "headers": [
              {
                "glob": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "regex": "string"
              }
            ],
            "i18n": {
              "root": "string"
            },
            "redirects": [
              {
                "glob": "string",
                "location": "string",
                "regex": "string",
                "statusCode": 0
              }
            ],
            "rewrites": [
              {
                "dynamicLinks": true,
                "function": "string",
                "functionRegion": "string",
                "glob": "string",
                "path": "string",
                "regex": "string",
                "run": {
                  "region": "string",
                  "serviceId": "string"
                }
              }
            ],
            "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
          },
          "createTime": "string",
          "createUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "deleteTime": "string",
          "deleteUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "fileCount": "string",
          "finalizeTime": "string",
          "finalizeUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "status": "VERSION_STATUS_UNSPECIFIED",
          "versionBytes": "string"
        }
      },
      "retainedReleaseCount": 0,
      "ttl": "string",
      "updateTime": "string",
      "url": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasehostingsiteschannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListChannelsResponse](#schemalistchannelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.channels.create

<a id="opIdfirebasehosting.sites.channels.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expireTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "retainedReleaseCount": 0,
    "ttl": "string"
  }'
```

`POST /v1beta1/{parent}/channels`

Creates a new channel in the specified site.

> Body parameter

```json
{
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "retainedReleaseCount": 0,
  "ttl": "string"
}
```

<h3 id="firebasehostingsiteschannelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site in which to create this channel, in the format: sites/ SITE_ID|
|channelId|query|string|false|Required. Immutable. A unique ID within the site that identifies the channel.|
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
|body|body|[Channel](#schemachannel)|false|none|
|» expireTime|body|string(google-datetime)|false|The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field.|
|» labels|body|object|false|Text labels used for extra metadata and/or filtering.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID|
|» retainedReleaseCount|body|integer(int32)|false|The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.|
|» ttl|body|string(google-duration)|false|Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request.|

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
  "createTime": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "release": {
    "message": "string",
    "name": "string",
    "releaseTime": "string",
    "releaseUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "type": "TYPE_UNSPECIFIED",
    "version": {
      "config": {
        "appAssociation": "AUTO",
        "cleanUrls": true,
        "headers": [
          {
            "glob": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "regex": "string"
          }
        ],
        "i18n": {
          "root": "string"
        },
        "redirects": [
          {
            "glob": "string",
            "location": "string",
            "regex": "string",
            "statusCode": 0
          }
        ],
        "rewrites": [
          {
            "dynamicLinks": true,
            "function": "string",
            "functionRegion": "string",
            "glob": "string",
            "path": "string",
            "regex": "string",
            "run": {
              "region": "string",
              "serviceId": "string"
            }
          }
        ],
        "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
      },
      "createTime": "string",
      "createUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "deleteTime": "string",
      "deleteUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "fileCount": "string",
      "finalizeTime": "string",
      "finalizeUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "status": "VERSION_STATUS_UNSPECIFIED",
      "versionBytes": "string"
    }
  },
  "retainedReleaseCount": 0,
  "ttl": "string",
  "updateTime": "string",
  "url": "string"
}
```

<h3 id="firebasehostingsiteschannelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.domains.list

<a id="opIdfirebasehosting.sites.domains.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/domains`

Lists the domains for the specified site.

<h3 id="firebasehostingsitesdomainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent for which to list domains, in the format: sites/ site-name|
|pageSize|query|integer|false|The page size to return. Defaults to 50.|
|pageToken|query|string|false|The next_page_token from a previous request, if provided.|
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
  "domains": [
    {
      "domainName": "string",
      "domainRedirect": {
        "domainName": "string",
        "type": "REDIRECT_TYPE_UNSPECIFIED"
      },
      "provisioning": {
        "certChallengeDiscoveredTxt": [
          "string"
        ],
        "certChallengeDns": {
          "domainName": "string",
          "token": "string"
        },
        "certChallengeHttp": {
          "path": "string",
          "token": "string"
        },
        "certStatus": "CERT_STATUS_UNSPECIFIED",
        "discoveredIps": [
          "string"
        ],
        "dnsFetchTime": "string",
        "dnsStatus": "DNS_STATUS_UNSPECIFIED",
        "expectedIps": [
          "string"
        ]
      },
      "site": "string",
      "status": "DOMAIN_STATUS_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasehostingsitesdomainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDomainsResponse](#schemalistdomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.domains.create

<a id="opIdfirebasehosting.sites.domains.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domainName": "string",
    "domainRedirect": {
      "domainName": "string",
      "type": "REDIRECT_TYPE_UNSPECIFIED"
    },
    "provisioning": {
      "certChallengeDiscoveredTxt": [
        "string"
      ],
      "certChallengeDns": {
        "domainName": "string",
        "token": "string"
      },
      "certChallengeHttp": {
        "path": "string",
        "token": "string"
      },
      "certStatus": "CERT_STATUS_UNSPECIFIED",
      "discoveredIps": [
        "string"
      ],
      "dnsFetchTime": "string",
      "dnsStatus": "DNS_STATUS_UNSPECIFIED",
      "expectedIps": [
        "string"
      ]
    },
    "site": "string",
    "status": "DOMAIN_STATUS_UNSPECIFIED",
    "updateTime": "string"
  }'
```

`POST /v1beta1/{parent}/domains`

Creates a domain mapping on the specified site.

> Body parameter

```json
{
  "domainName": "string",
  "domainRedirect": {
    "domainName": "string",
    "type": "REDIRECT_TYPE_UNSPECIFIED"
  },
  "provisioning": {
    "certChallengeDiscoveredTxt": [
      "string"
    ],
    "certChallengeDns": {
      "domainName": "string",
      "token": "string"
    },
    "certChallengeHttp": {
      "path": "string",
      "token": "string"
    },
    "certStatus": "CERT_STATUS_UNSPECIFIED",
    "discoveredIps": [
      "string"
    ],
    "dnsFetchTime": "string",
    "dnsStatus": "DNS_STATUS_UNSPECIFIED",
    "expectedIps": [
      "string"
    ]
  },
  "site": "string",
  "status": "DOMAIN_STATUS_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="firebasehostingsitesdomainscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent to create the domain association for, in the format: sites/site-name|
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
|body|body|[Domain](#schemadomain)|false|none|
|» domainName|body|string|false|Required. The domain name of the association.|
|» domainRedirect|body|[DomainRedirect](#schemadomainredirect)|false|If set, the domain should redirect with the provided parameters.|
|» provisioning|body|[DomainProvisioning](#schemadomainprovisioning)|false|Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.|
|» site|body|string|false|Required. The site name of the association.|
|» status|body|string|false|Output only. Additional status of the domain association.|
|» updateTime|body|string(google-datetime)|false|Output only. The time at which the domain was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|DOMAIN_STATUS_UNSPECIFIED|
|» status|DOMAIN_CHANGE_PENDING|
|» status|DOMAIN_ACTIVE|
|» status|DOMAIN_VERIFICATION_REQUIRED|
|» status|DOMAIN_VERIFICATION_LOST|

> Example responses

> 200 Response

```json
{
  "domainName": "string",
  "domainRedirect": {
    "domainName": "string",
    "type": "REDIRECT_TYPE_UNSPECIFIED"
  },
  "provisioning": {
    "certChallengeDiscoveredTxt": [
      "string"
    ],
    "certChallengeDns": {
      "domainName": "string",
      "token": "string"
    },
    "certChallengeHttp": {
      "path": "string",
      "token": "string"
    },
    "certStatus": "CERT_STATUS_UNSPECIFIED",
    "discoveredIps": [
      "string"
    ],
    "dnsFetchTime": "string",
    "dnsStatus": "DNS_STATUS_UNSPECIFIED",
    "expectedIps": [
      "string"
    ]
  },
  "site": "string",
  "status": "DOMAIN_STATUS_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="firebasehostingsitesdomainscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Domain](#schemadomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.files.list

<a id="opIdfirebasehosting.sites.versions.files.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/files`

Lists the remaining files to be uploaded for the specified version.

<h3 id="firebasehostingsitesversionsfileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID|
|pageSize|query|integer|false|The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.|
|pageToken|query|string|false|A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.|
|status|query|string|false| The type of files that should be listed for the specified version.|
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
|status|STATUS_UNSPECIFIED|
|status|EXPECTED|
|status|ACTIVE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "hash": "string",
      "path": "string",
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasehostingsitesversionsfileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionFilesResponse](#schemalistversionfilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.releases.list

<a id="opIdfirebasehosting.sites.releases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/releases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/releases`

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

<h3 id="firebasehostingsitesreleaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
|pageSize|query|integer|false|The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.|
|pageToken|query|string|false|A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.|
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
  "nextPageToken": "string",
  "releases": [
    {
      "message": "string",
      "name": "string",
      "releaseTime": "string",
      "releaseUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "type": "TYPE_UNSPECIFIED",
      "version": {
        "config": {
          "appAssociation": "AUTO",
          "cleanUrls": true,
          "headers": [
            {
              "glob": "string",
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "regex": "string"
            }
          ],
          "i18n": {
            "root": "string"
          },
          "redirects": [
            {
              "glob": "string",
              "location": "string",
              "regex": "string",
              "statusCode": 0
            }
          ],
          "rewrites": [
            {
              "dynamicLinks": true,
              "function": "string",
              "functionRegion": "string",
              "glob": "string",
              "path": "string",
              "regex": "string",
              "run": {
                "region": "string",
                "serviceId": "string"
              }
            }
          ],
          "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
        },
        "createTime": "string",
        "createUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "deleteTime": "string",
        "deleteUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "fileCount": "string",
        "finalizeTime": "string",
        "finalizeUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "status": "VERSION_STATUS_UNSPECIFIED",
        "versionBytes": "string"
      }
    }
  ]
}
```

<h3 id="firebasehostingsitesreleaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReleasesResponse](#schemalistreleasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.releases.create

<a id="opIdfirebasehosting.sites.releases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/releases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string",
    "name": "string",
    "releaseTime": "string",
    "releaseUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "type": "TYPE_UNSPECIFIED",
    "version": {
      "config": {
        "appAssociation": "AUTO",
        "cleanUrls": true,
        "headers": [
          {
            "glob": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "regex": "string"
          }
        ],
        "i18n": {
          "root": "string"
        },
        "redirects": [
          {
            "glob": "string",
            "location": "string",
            "regex": "string",
            "statusCode": 0
          }
        ],
        "rewrites": [
          {
            "dynamicLinks": true,
            "function": "string",
            "functionRegion": "string",
            "glob": "string",
            "path": "string",
            "regex": "string",
            "run": {
              "region": "string",
              "serviceId": "string"
            }
          }
        ],
        "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
      },
      "createTime": "string",
      "createUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "deleteTime": "string",
      "deleteUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "fileCount": "string",
      "finalizeTime": "string",
      "finalizeUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "status": "VERSION_STATUS_UNSPECIFIED",
      "versionBytes": "string"
    }
  }'
```

`POST /v1beta1/{parent}/releases`

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

> Body parameter

```json
{
  "message": "string",
  "name": "string",
  "releaseTime": "string",
  "releaseUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "type": "TYPE_UNSPECIFIED",
  "version": {
    "config": {
      "appAssociation": "AUTO",
      "cleanUrls": true,
      "headers": [
        {
          "glob": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "regex": "string"
        }
      ],
      "i18n": {
        "root": "string"
      },
      "redirects": [
        {
          "glob": "string",
          "location": "string",
          "regex": "string",
          "statusCode": 0
        }
      ],
      "rewrites": [
        {
          "dynamicLinks": true,
          "function": "string",
          "functionRegion": "string",
          "glob": "string",
          "path": "string",
          "regex": "string",
          "run": {
            "region": "string",
            "serviceId": "string"
          }
        }
      ],
      "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    },
    "createTime": "string",
    "createUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "deleteTime": "string",
    "deleteUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "fileCount": "string",
    "finalizeTime": "string",
    "finalizeUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "status": "VERSION_STATUS_UNSPECIFIED",
    "versionBytes": "string"
  }
}
```

<h3 id="firebasehostingsitesreleasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID|
|versionName|query|string|false| The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.|
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
|body|body|[Release](#schemarelease)|false|none|
|» message|body|string|false|The deploy description when the release was created. The value can be up to 512 characters.|
|» name|body|string|false|Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create).|
|» releaseTime|body|string(google-datetime)|false|Output only. The time at which the version is set to be public.|
|» releaseUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who created the release.|
|» type|body|string|false|Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.|
|» version|body|[Version](#schemaversion)|false|Output only. The configuration and content that was released.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|DEPLOY|
|» type|ROLLBACK|
|» type|SITE_DISABLE|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "name": "string",
  "releaseTime": "string",
  "releaseUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "type": "TYPE_UNSPECIFIED",
  "version": {
    "config": {
      "appAssociation": "AUTO",
      "cleanUrls": true,
      "headers": [
        {
          "glob": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "regex": "string"
        }
      ],
      "i18n": {
        "root": "string"
      },
      "redirects": [
        {
          "glob": "string",
          "location": "string",
          "regex": "string",
          "statusCode": 0
        }
      ],
      "rewrites": [
        {
          "dynamicLinks": true,
          "function": "string",
          "functionRegion": "string",
          "glob": "string",
          "path": "string",
          "regex": "string",
          "run": {
            "region": "string",
            "serviceId": "string"
          }
        }
      ],
      "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    },
    "createTime": "string",
    "createUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "deleteTime": "string",
    "deleteUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "fileCount": "string",
    "finalizeTime": "string",
    "finalizeUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "status": "VERSION_STATUS_UNSPECIFIED",
    "versionBytes": "string"
  }
}
```

<h3 id="firebasehostingsitesreleasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Release](#schemarelease)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.list

<a id="opIdfirebasehosting.sites.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/versions`

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

<h3 id="firebasehostingsitesversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
|filter|query|string|false|A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|A token from a previous call to `ListVersions` that tells the server where to resume listing.|
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
  "nextPageToken": "string",
  "versions": [
    {
      "config": {
        "appAssociation": "AUTO",
        "cleanUrls": true,
        "headers": [
          {
            "glob": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "regex": "string"
          }
        ],
        "i18n": {
          "root": "string"
        },
        "redirects": [
          {
            "glob": "string",
            "location": "string",
            "regex": "string",
            "statusCode": 0
          }
        ],
        "rewrites": [
          {
            "dynamicLinks": true,
            "function": "string",
            "functionRegion": "string",
            "glob": "string",
            "path": "string",
            "regex": "string",
            "run": {
              "region": "string",
              "serviceId": "string"
            }
          }
        ],
        "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
      },
      "createTime": "string",
      "createUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "deleteTime": "string",
      "deleteUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "fileCount": "string",
      "finalizeTime": "string",
      "finalizeUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "status": "VERSION_STATUS_UNSPECIFIED",
      "versionBytes": "string"
    }
  ]
}
```

<h3 id="firebasehostingsitesversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionsResponse](#schemalistversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasehosting.sites.versions.create

<a id="opIdfirebasehosting.sites.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "appAssociation": "AUTO",
      "cleanUrls": true,
      "headers": [
        {
          "glob": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "regex": "string"
        }
      ],
      "i18n": {
        "root": "string"
      },
      "redirects": [
        {
          "glob": "string",
          "location": "string",
          "regex": "string",
          "statusCode": 0
        }
      ],
      "rewrites": [
        {
          "dynamicLinks": true,
          "function": "string",
          "functionRegion": "string",
          "glob": "string",
          "path": "string",
          "regex": "string",
          "run": {
            "region": "string",
            "serviceId": "string"
          }
        }
      ],
      "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    },
    "createTime": "string",
    "createUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "deleteTime": "string",
    "deleteUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "fileCount": "string",
    "finalizeTime": "string",
    "finalizeUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "status": "VERSION_STATUS_UNSPECIFIED",
    "versionBytes": "string"
  }'
```

`POST /v1beta1/{parent}/versions`

Creates a new version for the specified site.

> Body parameter

```json
{
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

<h3 id="firebasehostingsitesversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The site in which to create the version, in the format: sites/ SITE_ID|
|sizeBytes|query|string|false|The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.|
|versionId|query|string|false|A unique id for the new version. This is was only specified for legacy version creations, and should be blank.|
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
|body|body|[Version](#schemaversion)|false|none|
|» config|body|[ServingConfig](#schemaservingconfig)|false|The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](https://firebase.google.com/docs/cli/#the_firebasejson_file) file.|
|» createTime|body|string(google-datetime)|false|Output only. The time at which the version was created.|
|» createUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who created the version.|
|» deleteTime|body|string(google-datetime)|false|Output only. The time at which the version was `DELETED`.|
|» deleteUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who `DELETED` the version.|
|» fileCount|body|string(int64)|false|Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.|
|» finalizeTime|body|string(google-datetime)|false|Output only. The time at which the version was `FINALIZED`.|
|» finalizeUser|body|[ActingUser](#schemaactinguser)|false|Output only. Identifies the user who `FINALIZED` the version.|
|» labels|body|object|false|The labels used for extra metadata and/or filtering.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).|
|» status|body|string|false|The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).|
|» versionBytes|body|string(int64)|false|Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|VERSION_STATUS_UNSPECIFIED|
|» status|CREATED|
|» status|FINALIZED|
|» status|DELETED|
|» status|ABANDONED|
|» status|EXPIRED|
|» status|CLONING|

> Example responses

> 200 Response

```json
{
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

<h3 id="firebasehostingsitesversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.clone

<a id="opIdfirebasehosting.sites.versions.clone"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions:clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "exclude": {
      "regexes": [
        "string"
      ]
    },
    "finalize": true,
    "include": {
      "regexes": [
        "string"
      ]
    },
    "sourceVersion": "string"
  }'
```

`POST /v1beta1/{parent}/versions:clone`

Creates a new version on the specified target site using the content of the specified version.

> Body parameter

```json
{
  "exclude": {
    "regexes": [
      "string"
    ]
  },
  "finalize": true,
  "include": {
    "regexes": [
      "string"
    ]
  },
  "sourceVersion": "string"
}
```

<h3 id="firebasehostingsitesversionsclone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The target site for the cloned version, in the format: sites/ SITE_ID|
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
|body|body|[CloneVersionRequest](#schemacloneversionrequest)|false|none|
|» exclude|body|[PathFilter](#schemapathfilter)|false|If provided, only paths that do not match any of the RegEx values in this list will be included in the new version.|
|» finalize|body|boolean|false|If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`.|
|» include|body|[PathFilter](#schemapathfilter)|false|If provided, only paths that match one or more RegEx values in this list will be included in the new version.|
|» sourceVersion|body|string|false|Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="firebasehostingsitesversionsclone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasehosting.sites.versions.populateFiles

<a id="opIdfirebasehosting.sites.versions.populateFiles"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:populateFiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "files": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{parent}:populateFiles`

 Adds content files to the specified version. Each file must be under 2 GB.

> Body parameter

```json
{
  "files": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="firebasehostingsitesversionspopulatefiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID|
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
|body|body|[PopulateVersionFilesRequest](#schemapopulateversionfilesrequest)|false|none|
|» files|body|object|false|A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.|
|» » **additionalProperties**|body|string|false|none|

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
  "uploadRequiredHashes": [
    "string"
  ],
  "uploadUrl": "string"
}
```

<h3 id="firebasehostingsitesversionspopulatefiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PopulateVersionFilesResponse](#schemapopulateversionfilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

# Schemas

<h2 id="tocS_ActingUser">ActingUser</h2>
<!-- backwards compatibility -->
<a id="schemaactinguser"></a>
<a id="schema_ActingUser"></a>
<a id="tocSactinguser"></a>
<a id="tocsactinguser"></a>

```json
{
  "email": "string",
  "imageUrl": "string"
}
```

Contains metadata about the user who performed an action, such as creating a release or finalizing a version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the user when the user performed the action.|
|imageUrl|string|false|none|A profile image URL for the user. May not be present if the user has changed their email address or deleted their account.|

<h2 id="tocS_CertDnsChallenge">CertDnsChallenge</h2>
<!-- backwards compatibility -->
<a id="schemacertdnschallenge"></a>
<a id="schema_CertDnsChallenge"></a>
<a id="tocScertdnschallenge"></a>
<a id="tocscertdnschallenge"></a>

```json
{
  "domainName": "string",
  "token": "string"
}
```

Represents a DNS certificate challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|The domain name upon which the DNS challenge must be satisfied.|
|token|string|false|none|The value that must be present as a TXT record on the domain name to satisfy the challenge.|

<h2 id="tocS_CertHttpChallenge">CertHttpChallenge</h2>
<!-- backwards compatibility -->
<a id="schemacerthttpchallenge"></a>
<a id="schema_CertHttpChallenge"></a>
<a id="tocScerthttpchallenge"></a>
<a id="tocscerthttpchallenge"></a>

```json
{
  "path": "string",
  "token": "string"
}
```

Represents an HTTP certificate challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|The URL path on which to serve the specified token to satisfy the certificate challenge.|
|token|string|false|none|The token to serve at the specified URL path to satisfy the certificate challenge.|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "createTime": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "release": {
    "message": "string",
    "name": "string",
    "releaseTime": "string",
    "releaseUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "type": "TYPE_UNSPECIFIED",
    "version": {
      "config": {
        "appAssociation": "AUTO",
        "cleanUrls": true,
        "headers": [
          {
            "glob": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "regex": "string"
          }
        ],
        "i18n": {
          "root": "string"
        },
        "redirects": [
          {
            "glob": "string",
            "location": "string",
            "regex": "string",
            "statusCode": 0
          }
        ],
        "rewrites": [
          {
            "dynamicLinks": true,
            "function": "string",
            "functionRegion": "string",
            "glob": "string",
            "path": "string",
            "regex": "string",
            "run": {
              "region": "string",
              "serviceId": "string"
            }
          }
        ],
        "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
      },
      "createTime": "string",
      "createUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "deleteTime": "string",
      "deleteUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "fileCount": "string",
      "finalizeTime": "string",
      "finalizeUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "status": "VERSION_STATUS_UNSPECIFIED",
      "versionBytes": "string"
    }
  },
  "retainedReleaseCount": 0,
  "ttl": "string",
  "updateTime": "string",
  "url": "string"
}
```

A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the channel was created.|
|expireTime|string(google-datetime)|false|none|The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field.|
|labels|object|false|none|Text labels used for extra metadata and/or filtering.|
|name|string|false|none|The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID|
|release|[Release](#schemarelease)|false|none|Output only. The current release for the channel, if any.|
|retainedReleaseCount|integer(int32)|false|none|The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.|
|ttl|string(google-duration)|false|none|Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the channel was last updated.|
|url|string|false|read-only|Output only. The URL at which the content of this channel's current release can be viewed. This URL is a Firebase-provided subdomain of `web.app`. The content of this channel's current release can also be viewed at the Firebase-provided subdomain of `firebaseapp.com`. If this channel is the `live` channel for the Hosting site, then the content of this channel's current release can also be viewed at any connected custom domains.|

<h2 id="tocS_CloneVersionRequest">CloneVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloneversionrequest"></a>
<a id="schema_CloneVersionRequest"></a>
<a id="tocScloneversionrequest"></a>
<a id="tocscloneversionrequest"></a>

```json
{
  "exclude": {
    "regexes": [
      "string"
    ]
  },
  "finalize": true,
  "include": {
    "regexes": [
      "string"
    ]
  },
  "sourceVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|[PathFilter](#schemapathfilter)|false|none|If provided, only paths that do not match any of the RegEx values in this list will be included in the new version.|
|finalize|boolean|false|none|If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`.|
|include|[PathFilter](#schemapathfilter)|false|none|If provided, only paths that match one or more RegEx values in this list will be included in the new version.|
|sourceVersion|string|false|none|Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID|

<h2 id="tocS_CloudRunRewrite">CloudRunRewrite</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunrewrite"></a>
<a id="schema_CloudRunRewrite"></a>
<a id="tocScloudrunrewrite"></a>
<a id="tocscloudrunrewrite"></a>

```json
{
  "region": "string",
  "serviceId": "string"
}
```

A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|false|none|Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.|
|serviceId|string|false|none|Required. User-defined ID of the Cloud Run service.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "domainName": "string",
  "domainRedirect": {
    "domainName": "string",
    "type": "REDIRECT_TYPE_UNSPECIFIED"
  },
  "provisioning": {
    "certChallengeDiscoveredTxt": [
      "string"
    ],
    "certChallengeDns": {
      "domainName": "string",
      "token": "string"
    },
    "certChallengeHttp": {
      "path": "string",
      "token": "string"
    },
    "certStatus": "CERT_STATUS_UNSPECIFIED",
    "discoveredIps": [
      "string"
    ],
    "dnsFetchTime": "string",
    "dnsStatus": "DNS_STATUS_UNSPECIFIED",
    "expectedIps": [
      "string"
    ]
  },
  "site": "string",
  "status": "DOMAIN_STATUS_UNSPECIFIED",
  "updateTime": "string"
}
```

The intended behavior and status information of a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Required. The domain name of the association.|
|domainRedirect|[DomainRedirect](#schemadomainredirect)|false|none|If set, the domain should redirect with the provided parameters.|
|provisioning|[DomainProvisioning](#schemadomainprovisioning)|false|none|Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.|
|site|string|false|none|Required. The site name of the association.|
|status|string|false|none|Output only. Additional status of the domain association.|
|updateTime|string(google-datetime)|false|none|Output only. The time at which the domain was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DOMAIN_STATUS_UNSPECIFIED|
|status|DOMAIN_CHANGE_PENDING|
|status|DOMAIN_ACTIVE|
|status|DOMAIN_VERIFICATION_REQUIRED|
|status|DOMAIN_VERIFICATION_LOST|

<h2 id="tocS_DomainProvisioning">DomainProvisioning</h2>
<!-- backwards compatibility -->
<a id="schemadomainprovisioning"></a>
<a id="schema_DomainProvisioning"></a>
<a id="tocSdomainprovisioning"></a>
<a id="tocsdomainprovisioning"></a>

```json
{
  "certChallengeDiscoveredTxt": [
    "string"
  ],
  "certChallengeDns": {
    "domainName": "string",
    "token": "string"
  },
  "certChallengeHttp": {
    "path": "string",
    "token": "string"
  },
  "certStatus": "CERT_STATUS_UNSPECIFIED",
  "discoveredIps": [
    "string"
  ],
  "dnsFetchTime": "string",
  "dnsStatus": "DNS_STATUS_UNSPECIFIED",
  "expectedIps": [
    "string"
  ]
}
```

The current certificate provisioning status information for a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certChallengeDiscoveredTxt|[string]|false|none|The TXT records (for the certificate challenge) that were found at the last DNS fetch.|
|certChallengeDns|[CertDnsChallenge](#schemacertdnschallenge)|false|none|The DNS challenge for generating a certificate.|
|certChallengeHttp|[CertHttpChallenge](#schemacerthttpchallenge)|false|none|The HTTP challenge for generating a certificate.|
|certStatus|string|false|none|The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.|
|discoveredIps|[string]|false|none|The IPs found at the last DNS fetch.|
|dnsFetchTime|string(google-datetime)|false|none|The time at which the last DNS fetch occurred.|
|dnsStatus|string|false|none|The DNS record match status as of the last DNS fetch.|
|expectedIps|[string]|false|none|The list of IPs to which the domain is expected to resolve.|

#### Enumerated Values

|Property|Value|
|---|---|
|certStatus|CERT_STATUS_UNSPECIFIED|
|certStatus|CERT_PENDING|
|certStatus|CERT_MISSING|
|certStatus|CERT_PROCESSING|
|certStatus|CERT_PROPAGATING|
|certStatus|CERT_ACTIVE|
|certStatus|CERT_ERROR|
|dnsStatus|DNS_STATUS_UNSPECIFIED|
|dnsStatus|DNS_PENDING|
|dnsStatus|DNS_MISSING|
|dnsStatus|DNS_PARTIAL_MATCH|
|dnsStatus|DNS_MATCH|
|dnsStatus|DNS_EXTRANEOUS_MATCH|

<h2 id="tocS_DomainRedirect">DomainRedirect</h2>
<!-- backwards compatibility -->
<a id="schemadomainredirect"></a>
<a id="schema_DomainRedirect"></a>
<a id="tocSdomainredirect"></a>
<a id="tocsdomainredirect"></a>

```json
{
  "domainName": "string",
  "type": "REDIRECT_TYPE_UNSPECIFIED"
}
```

Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Required. The domain name to redirect to.|
|type|string|false|none|Required. The redirect status code.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REDIRECT_TYPE_UNSPECIFIED|
|type|MOVED_PERMANENTLY|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "glob": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "regex": "string"
}
```

A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glob|string|false|none|The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.|
|headers|object|false|none|Required. The additional headers to add to the response.|
|regex|string|false|none|The user-supplied RE2 regular expression to match against the request URL path.|

<h2 id="tocS_I18nConfig">I18nConfig</h2>
<!-- backwards compatibility -->
<a id="schemai18nconfig"></a>
<a id="schema_I18nConfig"></a>
<a id="tocSi18nconfig"></a>
<a id="tocsi18nconfig"></a>

```json
{
  "root": "string"
}
```

If provided, i18n rewrites are enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root|string|false|none|Required. The user-supplied path where country and language specific content will be looked for within the public directory.|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "channels": [
    {
      "createTime": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "release": {
        "message": "string",
        "name": "string",
        "releaseTime": "string",
        "releaseUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "type": "TYPE_UNSPECIFIED",
        "version": {
          "config": {
            "appAssociation": "AUTO",
            "cleanUrls": true,
            "headers": [
              {
                "glob": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "regex": "string"
              }
            ],
            "i18n": {
              "root": "string"
            },
            "redirects": [
              {
                "glob": "string",
                "location": "string",
                "regex": "string",
                "statusCode": 0
              }
            ],
            "rewrites": [
              {
                "dynamicLinks": true,
                "function": "string",
                "functionRegion": "string",
                "glob": "string",
                "path": "string",
                "regex": "string",
                "run": {
                  "region": "string",
                  "serviceId": "string"
                }
              }
            ],
            "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
          },
          "createTime": "string",
          "createUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "deleteTime": "string",
          "deleteUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "fileCount": "string",
          "finalizeTime": "string",
          "finalizeUser": {
            "email": "string",
            "imageUrl": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "status": "VERSION_STATUS_UNSPECIFIED",
          "versionBytes": "string"
        }
      },
      "retainedReleaseCount": 0,
      "ttl": "string",
      "updateTime": "string",
      "url": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[Channel](#schemachannel)]|false|none|The list of channels.|
|nextPageToken|string|false|none|The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored.|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "domains": [
    {
      "domainName": "string",
      "domainRedirect": {
        "domainName": "string",
        "type": "REDIRECT_TYPE_UNSPECIFIED"
      },
      "provisioning": {
        "certChallengeDiscoveredTxt": [
          "string"
        ],
        "certChallengeDns": {
          "domainName": "string",
          "token": "string"
        },
        "certChallengeHttp": {
          "path": "string",
          "token": "string"
        },
        "certStatus": "CERT_STATUS_UNSPECIFIED",
        "discoveredIps": [
          "string"
        ],
        "dnsFetchTime": "string",
        "dnsStatus": "DNS_STATUS_UNSPECIFIED",
        "expectedIps": [
          "string"
        ]
      },
      "site": "string",
      "status": "DOMAIN_STATUS_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response to listing Domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[Domain](#schemadomain)]|false|none|The list of domains, if any exist.|
|nextPageToken|string|false|none|The pagination token, if more results exist.|

<h2 id="tocS_ListReleasesResponse">ListReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreleasesresponse"></a>
<a id="schema_ListReleasesResponse"></a>
<a id="tocSlistreleasesresponse"></a>
<a id="tocslistreleasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "releases": [
    {
      "message": "string",
      "name": "string",
      "releaseTime": "string",
      "releaseUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "type": "TYPE_UNSPECIFIED",
      "version": {
        "config": {
          "appAssociation": "AUTO",
          "cleanUrls": true,
          "headers": [
            {
              "glob": "string",
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "regex": "string"
            }
          ],
          "i18n": {
            "root": "string"
          },
          "redirects": [
            {
              "glob": "string",
              "location": "string",
              "regex": "string",
              "statusCode": 0
            }
          ],
          "rewrites": [
            {
              "dynamicLinks": true,
              "function": "string",
              "functionRegion": "string",
              "glob": "string",
              "path": "string",
              "regex": "string",
              "run": {
                "region": "string",
                "serviceId": "string"
              }
            }
          ],
          "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
        },
        "createTime": "string",
        "createUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "deleteTime": "string",
        "deleteUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "fileCount": "string",
        "finalizeTime": "string",
        "finalizeUser": {
          "email": "string",
          "imageUrl": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "status": "VERSION_STATUS_UNSPECIFIED",
        "versionBytes": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored.|
|releases|[[Release](#schemarelease)]|false|none|The list of hashes of files that still need to be uploaded, if any exist.|

<h2 id="tocS_ListSitesResponse">ListSitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsitesresponse"></a>
<a id="schema_ListSitesResponse"></a>
<a id="tocSlistsitesresponse"></a>
<a id="tocslistsitesresponse"></a>

```json
{
  "nextPageToken": "string",
  "sites": [
    {
      "appId": "string",
      "defaultUrl": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored.|
|sites|[[Site](#schemasite)]|false|none|A list of Site objects associated with the specified Firebase project.|

<h2 id="tocS_ListVersionFilesResponse">ListVersionFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistversionfilesresponse"></a>
<a id="schema_ListVersionFilesResponse"></a>
<a id="tocSlistversionfilesresponse"></a>
<a id="tocslistversionfilesresponse"></a>

```json
{
  "files": [
    {
      "hash": "string",
      "path": "string",
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[VersionFile](#schemaversionfile)]|false|none| The list of paths to the hashes of the files in the specified version.|
|nextPageToken|string|false|none|The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored.|

<h2 id="tocS_ListVersionsResponse">ListVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistversionsresponse"></a>
<a id="schema_ListVersionsResponse"></a>
<a id="tocSlistversionsresponse"></a>
<a id="tocslistversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "versions": [
    {
      "config": {
        "appAssociation": "AUTO",
        "cleanUrls": true,
        "headers": [
          {
            "glob": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "regex": "string"
          }
        ],
        "i18n": {
          "root": "string"
        },
        "redirects": [
          {
            "glob": "string",
            "location": "string",
            "regex": "string",
            "statusCode": 0
          }
        ],
        "rewrites": [
          {
            "dynamicLinks": true,
            "function": "string",
            "functionRegion": "string",
            "glob": "string",
            "path": "string",
            "regex": "string",
            "run": {
              "region": "string",
              "serviceId": "string"
            }
          }
        ],
        "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
      },
      "createTime": "string",
      "createUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "deleteTime": "string",
      "deleteUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "fileCount": "string",
      "finalizeTime": "string",
      "finalizeUser": {
        "email": "string",
        "imageUrl": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "status": "VERSION_STATUS_UNSPECIFIED",
      "versionBytes": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored.|
|versions|[[Version](#schemaversion)]|false|none|The list of versions, if any exist.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_PathFilter">PathFilter</h2>
<!-- backwards compatibility -->
<a id="schemapathfilter"></a>
<a id="schema_PathFilter"></a>
<a id="tocSpathfilter"></a>
<a id="tocspathfilter"></a>

```json
{
  "regexes": [
    "string"
  ]
}
```

A representation of filter path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regexes|[string]|false|none|An array of RegEx values by which to filter.|

<h2 id="tocS_PopulateVersionFilesRequest">PopulateVersionFilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemapopulateversionfilesrequest"></a>
<a id="schema_PopulateVersionFilesRequest"></a>
<a id="tocSpopulateversionfilesrequest"></a>
<a id="tocspopulateversionfilesrequest"></a>

```json
{
  "files": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|false|none|A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.|

<h2 id="tocS_PopulateVersionFilesResponse">PopulateVersionFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapopulateversionfilesresponse"></a>
<a id="schema_PopulateVersionFilesResponse"></a>
<a id="tocSpopulateversionfilesresponse"></a>
<a id="tocspopulateversionfilesresponse"></a>

```json
{
  "uploadRequiredHashes": [
    "string"
  ],
  "uploadUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadRequiredHashes|[string]|false|none|The content hashes of the specified files that need to be uploaded to the specified URL.|
|uploadUrl|string|false|none|The URL to which the files should be uploaded, in the format: "https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files" Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end.|

<h2 id="tocS_Redirect">Redirect</h2>
<!-- backwards compatibility -->
<a id="schemaredirect"></a>
<a id="schema_Redirect"></a>
<a id="tocSredirect"></a>
<a id="tocsredirect"></a>

```json
{
  "glob": "string",
  "location": "string",
  "regex": "string",
  "statusCode": 0
}
```

A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glob|string|false|none|The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.|
|location|string|false|none|Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture"|
|regex|string|false|none|The user-supplied RE2 regular expression to match against the request URL path.|
|statusCode|integer(int32)|false|none|Required. The status HTTP code to return in the response. It must be a valid 3xx status code.|

<h2 id="tocS_Release">Release</h2>
<!-- backwards compatibility -->
<a id="schemarelease"></a>
<a id="schema_Release"></a>
<a id="tocSrelease"></a>
<a id="tocsrelease"></a>

```json
{
  "message": "string",
  "name": "string",
  "releaseTime": "string",
  "releaseUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "type": "TYPE_UNSPECIFIED",
  "version": {
    "config": {
      "appAssociation": "AUTO",
      "cleanUrls": true,
      "headers": [
        {
          "glob": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "regex": "string"
        }
      ],
      "i18n": {
        "root": "string"
      },
      "redirects": [
        {
          "glob": "string",
          "location": "string",
          "regex": "string",
          "statusCode": 0
        }
      ],
      "rewrites": [
        {
          "dynamicLinks": true,
          "function": "string",
          "functionRegion": "string",
          "glob": "string",
          "path": "string",
          "regex": "string",
          "run": {
            "region": "string",
            "serviceId": "string"
          }
        }
      ],
      "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    },
    "createTime": "string",
    "createUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "deleteTime": "string",
    "deleteUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "fileCount": "string",
    "finalizeTime": "string",
    "finalizeUser": {
      "email": "string",
      "imageUrl": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "status": "VERSION_STATUS_UNSPECIFIED",
    "versionBytes": "string"
  }
}
```

 A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The deploy description when the release was created. The value can be up to 512 characters.|
|name|string|false|none|Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create).|
|releaseTime|string(google-datetime)|false|none|Output only. The time at which the version is set to be public.|
|releaseUser|[ActingUser](#schemaactinguser)|false|none|Output only. Identifies the user who created the release.|
|type|string|false|none|Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.|
|version|[Version](#schemaversion)|false|none|Output only. The configuration and content that was released.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|DEPLOY|
|type|ROLLBACK|
|type|SITE_DISABLE|

<h2 id="tocS_Rewrite">Rewrite</h2>
<!-- backwards compatibility -->
<a id="schemarewrite"></a>
<a id="schema_Rewrite"></a>
<a id="tocSrewrite"></a>
<a id="tocsrewrite"></a>

```json
{
  "dynamicLinks": true,
  "function": "string",
  "functionRegion": "string",
  "glob": "string",
  "path": "string",
  "regex": "string",
  "run": {
    "region": "string",
    "serviceId": "string"
  }
}
```

A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicLinks|boolean|false|none|The request will be forwarded to Firebase Dynamic Links.|
|function|string|false|none|The function to proxy requests to. Must match the exported function name exactly.|
|functionRegion|string|false|none|Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1.|
|glob|string|false|none|The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.|
|path|string|false|none|The URL path to rewrite the request to.|
|regex|string|false|none|The user-supplied RE2 regular expression to match against the request URL path.|
|run|[CloudRunRewrite](#schemacloudrunrewrite)|false|none|The request will be forwarded to Cloud Run.|

<h2 id="tocS_ServingConfig">ServingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaservingconfig"></a>
<a id="schema_ServingConfig"></a>
<a id="tocSservingconfig"></a>
<a id="tocsservingconfig"></a>

```json
{
  "appAssociation": "AUTO",
  "cleanUrls": true,
  "headers": [
    {
      "glob": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "regex": "string"
    }
  ],
  "i18n": {
    "root": "string"
  },
  "redirects": [
    {
      "glob": "string",
      "location": "string",
      "regex": "string",
      "statusCode": 0
    }
  ],
  "rewrites": [
    {
      "dynamicLinks": true,
      "function": "string",
      "functionRegion": "string",
      "glob": "string",
      "path": "string",
      "regex": "string",
      "run": {
        "region": "string",
        "serviceId": "string"
      }
    }
  ],
  "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
}
```

The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appAssociation|string|false|none|How to handle well known App Association files.|
|cleanUrls|boolean|false|none|Defines whether to drop the file extension from uploaded files.|
|headers|[[Header](#schemaheader)]|false|none|An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.|
|i18n|[I18nConfig](#schemai18nconfig)|false|none|Optional. Defines i18n rewrite behavior.|
|redirects|[[Redirect](#schemaredirect)]|false|none|An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.|
|rewrites|[[Rewrite](#schemarewrite)]|false|none|An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.|
|trailingSlashBehavior|string|false|none|Defines how to handle a trailing slash in the URL path.|

#### Enumerated Values

|Property|Value|
|---|---|
|appAssociation|AUTO|
|appAssociation|NONE|
|trailingSlashBehavior|TRAILING_SLASH_BEHAVIOR_UNSPECIFIED|
|trailingSlashBehavior|ADD|
|trailingSlashBehavior|REMOVE|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "appId": "string",
  "defaultUrl": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

A `Site` represents a Firebase Hosting site.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.|
|defaultUrl|string|false|read-only|Output only. The default URL for the Hosting site.|
|labels|object|false|none|Optional. User-specified labels for the Hosting site.|
|name|string|false|read-only|Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).|
|type|string|false|read-only|Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|DEFAULT_SITE|
|type|USER_SITE|

<h2 id="tocS_SiteConfig">SiteConfig</h2>
<!-- backwards compatibility -->
<a id="schemasiteconfig"></a>
<a id="schema_SiteConfig"></a>
<a id="tocSsiteconfig"></a>
<a id="tocssiteconfig"></a>

```json
{
  "cloudLoggingEnabled": true,
  "maxVersions": "string"
}
```

A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudLoggingEnabled|boolean|false|none|Whether or not web requests made by site visitors are logged via Cloud Logging.|
|maxVersions|string(int64)|false|none|The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "config": {
    "appAssociation": "AUTO",
    "cleanUrls": true,
    "headers": [
      {
        "glob": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "regex": "string"
      }
    ],
    "i18n": {
      "root": "string"
    },
    "redirects": [
      {
        "glob": "string",
        "location": "string",
        "regex": "string",
        "statusCode": 0
      }
    ],
    "rewrites": [
      {
        "dynamicLinks": true,
        "function": "string",
        "functionRegion": "string",
        "glob": "string",
        "path": "string",
        "regex": "string",
        "run": {
          "region": "string",
          "serviceId": "string"
        }
      }
    ],
    "trailingSlashBehavior": "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
  },
  "createTime": "string",
  "createUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "deleteTime": "string",
  "deleteUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "fileCount": "string",
  "finalizeTime": "string",
  "finalizeUser": {
    "email": "string",
    "imageUrl": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "status": "VERSION_STATUS_UNSPECIFIED",
  "versionBytes": "string"
}
```

A `Version` is a configuration and a collection of static files which determine how a site is displayed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ServingConfig](#schemaservingconfig)|false|none|The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](https://firebase.google.com/docs/cli/#the_firebasejson_file) file.|
|createTime|string(google-datetime)|false|none|Output only. The time at which the version was created.|
|createUser|[ActingUser](#schemaactinguser)|false|none|Output only. Identifies the user who created the version.|
|deleteTime|string(google-datetime)|false|none|Output only. The time at which the version was `DELETED`.|
|deleteUser|[ActingUser](#schemaactinguser)|false|none|Output only. Identifies the user who `DELETED` the version.|
|fileCount|string(int64)|false|none|Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.|
|finalizeTime|string(google-datetime)|false|none|Output only. The time at which the version was `FINALIZED`.|
|finalizeUser|[ActingUser](#schemaactinguser)|false|none|Output only. Identifies the user who `FINALIZED` the version.|
|labels|object|false|none|The labels used for extra metadata and/or filtering.|
|name|string|false|none|The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).|
|status|string|false|none|The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).|
|versionBytes|string(int64)|false|none|Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|VERSION_STATUS_UNSPECIFIED|
|status|CREATED|
|status|FINALIZED|
|status|DELETED|
|status|ABANDONED|
|status|EXPIRED|
|status|CLONING|

<h2 id="tocS_VersionFile">VersionFile</h2>
<!-- backwards compatibility -->
<a id="schemaversionfile"></a>
<a id="schema_VersionFile"></a>
<a id="tocSversionfile"></a>
<a id="tocsversionfile"></a>

```json
{
  "hash": "string",
  "path": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

A static content file that is part of a version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|The SHA256 content hash of the file.|
|path|string|false|none|The URI at which the file's content should display.|
|status|string|false|none|Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|EXPECTED|
|status|ACTIVE|
