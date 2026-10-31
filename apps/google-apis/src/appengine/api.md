<h1 id="app-engine-admin-api">App Engine Admin API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provisions and manages developers' App Engine applications.

Base URLs:

* <a href="https://appengine.googleapis.com/">https://appengine.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/appengine/docs/admin-api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/appengine.admin|View and manage your applications deployed on Google App Engine|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/appengine.admin|View and manage your applications deployed on Google App Engine|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="app-engine-admin-api-apps">apps</h1>

## appengine.apps.create

<a id="opIdappengine.apps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authDomain": "string",
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "defaultCookieExpiration": "string",
    "dispatchRules": [
      {
        "domain": "string",
        "path": "string",
        "service": "string"
      }
    ],
    "featureSettings": {
      "splitHealthChecks": true,
      "useContainerOptimizedOs": true
    },
    "iap": {
      "enabled": true,
      "oauth2ClientId": "string",
      "oauth2ClientSecret": "string"
    },
    "id": "string",
    "locationId": "string",
    "serviceAccount": "string",
    "servingStatus": "UNSPECIFIED"
  }'
```

`POST /v1beta/apps`

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

> Body parameter

```json
{
  "authDomain": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultCookieExpiration": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string"
  },
  "id": "string",
  "locationId": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

<h3 id="appengineappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|query|string|false|The project and location in which the application should be created, specified in the format projects/*/locations/*|
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
|body|body|[Application](#schemaapplication)|false|none|
|» authDomain|body|string|false|Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.|
|» databaseType|body|string|false|The type of the Cloud Firestore or Cloud Datastore database associated with this application.|
|» defaultCookieExpiration|body|string(google-duration)|false|Cookie expiration policy for this application.|
|» dispatchRules|body|[[UrlDispatchRule](#schemaurldispatchrule)]|false|HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.|
|» featureSettings|body|[FeatureSettings](#schemafeaturesettings)|false|The feature specific settings to be used in the application.|
|» iap|body|[IdentityAwareProxy](#schemaidentityawareproxy)|false|Identity-Aware Proxy|
|» id|body|string|false|Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.|
|» locationId|body|string|false|Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).|
|» serviceAccount|body|string|false|The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.|
|» servingStatus|body|string|false|Serving status of this application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseType|DATABASE_TYPE_UNSPECIFIED|
|» databaseType|CLOUD_DATASTORE|
|» databaseType|CLOUD_FIRESTORE|
|» databaseType|CLOUD_DATASTORE_COMPATIBILITY|
|» servingStatus|UNSPECIFIED|
|» servingStatus|SERVING|
|» servingStatus|USER_DISABLED|
|» servingStatus|SYSTEM_DISABLED|

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

<h3 id="appengineappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.get

<a id="opIdappengine.apps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}`

Gets information about an application.

<h3 id="appengineappsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Application resource to get. Example: apps/myapp.|
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
  "authDomain": "string",
  "codeBucket": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultBucket": "string",
  "defaultCookieExpiration": "string",
  "defaultHostname": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "gcrDomain": "string",
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string",
    "oauth2ClientSecretSha256": "string"
  },
  "id": "string",
  "locationId": "string",
  "name": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

<h3 id="appengineappsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Application](#schemaapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.patch

<a id="opIdappengine.apps.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authDomain": "string",
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "defaultCookieExpiration": "string",
    "dispatchRules": [
      {
        "domain": "string",
        "path": "string",
        "service": "string"
      }
    ],
    "featureSettings": {
      "splitHealthChecks": true,
      "useContainerOptimizedOs": true
    },
    "iap": {
      "enabled": true,
      "oauth2ClientId": "string",
      "oauth2ClientSecret": "string"
    },
    "id": "string",
    "locationId": "string",
    "serviceAccount": "string",
    "servingStatus": "UNSPECIFIED"
  }'
```

`PATCH /v1beta/apps/{appsId}`

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

> Body parameter

```json
{
  "authDomain": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultCookieExpiration": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string"
  },
  "id": "string",
  "locationId": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

<h3 id="appengineappspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Application resource to update. Example: apps/myapp.|
|updateMask|query|string|false|Required. Standard field mask for the set of fields to be updated.|
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
|body|body|[Application](#schemaapplication)|false|none|
|» authDomain|body|string|false|Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.|
|» databaseType|body|string|false|The type of the Cloud Firestore or Cloud Datastore database associated with this application.|
|» defaultCookieExpiration|body|string(google-duration)|false|Cookie expiration policy for this application.|
|» dispatchRules|body|[[UrlDispatchRule](#schemaurldispatchrule)]|false|HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.|
|» featureSettings|body|[FeatureSettings](#schemafeaturesettings)|false|The feature specific settings to be used in the application.|
|» iap|body|[IdentityAwareProxy](#schemaidentityawareproxy)|false|Identity-Aware Proxy|
|» id|body|string|false|Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.|
|» locationId|body|string|false|Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).|
|» serviceAccount|body|string|false|The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.|
|» servingStatus|body|string|false|Serving status of this application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseType|DATABASE_TYPE_UNSPECIFIED|
|» databaseType|CLOUD_DATASTORE|
|» databaseType|CLOUD_FIRESTORE|
|» databaseType|CLOUD_DATASTORE_COMPATIBILITY|
|» servingStatus|UNSPECIFIED|
|» servingStatus|SERVING|
|» servingStatus|USER_DISABLED|
|» servingStatus|SYSTEM_DISABLED|

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

<h3 id="appengineappspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.authorizedCertificates.list

<a id="opIdappengine.apps.authorizedCertificates.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedCertificates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/authorizedCertificates`

Lists all SSL certificates the user is authorized to administer.

<h3 id="appengineappsauthorizedcertificateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
|view|query|string|false|Controls the set of fields returned in the LIST response.|
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
|view|BASIC_CERTIFICATE|
|view|FULL_CERTIFICATE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "certificates": [
    {
      "certificateRawData": {
        "privateKey": "string",
        "publicCertificate": "string"
      },
      "displayName": "string",
      "domainMappingsCount": 0,
      "domainNames": [
        "string"
      ],
      "expireTime": "string",
      "id": "string",
      "managedCertificate": {
        "lastRenewalTime": "string",
        "status": "MANAGEMENT_STATUS_UNSPECIFIED"
      },
      "name": "string",
      "visibleDomainMappings": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappsauthorizedcertificateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAuthorizedCertificatesResponse](#schemalistauthorizedcertificatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.authorizedCertificates.create

<a id="opIdappengine.apps.authorizedCertificates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedCertificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certificateRawData": {
      "privateKey": "string",
      "publicCertificate": "string"
    },
    "displayName": "string",
    "domainMappingsCount": 0,
    "domainNames": [
      "string"
    ],
    "expireTime": "string",
    "id": "string",
    "managedCertificate": {
      "lastRenewalTime": "string",
      "status": "MANAGEMENT_STATUS_UNSPECIFIED"
    },
    "name": "string",
    "visibleDomainMappings": [
      "string"
    ]
  }'
```

`POST /v1beta/apps/{appsId}/authorizedCertificates`

Uploads the specified SSL certificate.

> Body parameter

```json
{
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

<h3 id="appengineappsauthorizedcertificatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
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
|body|body|[AuthorizedCertificate](#schemaauthorizedcertificate)|false|none|
|» certificateRawData|body|[CertificateRawData](#schemacertificaterawdata)|false|The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.|
|» displayName|body|string|false|The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.|
|» domainMappingsCount|body|integer(int32)|false|Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|
|» domainNames|body|[string]|false|Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly|
|» expireTime|body|string(google-datetime)|false|The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly|
|» id|body|string|false|Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly|
|» managedCertificate|body|[ManagedCertificate](#schemamanagedcertificate)|false|Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly|
|» name|body|string|false|Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly|
|» visibleDomainMappings|body|[string]|false|The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|

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
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

<h3 id="appengineappsauthorizedcertificatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthorizedCertificate](#schemaauthorizedcertificate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.authorizedCertificates.get

<a id="opIdappengine.apps.authorizedCertificates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedCertificates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}`

Gets the specified SSL certificate.

<h3 id="appengineappsauthorizedcertificatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.|
|authorizedCertificatesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|view|query|string|false|Controls the set of fields returned in the GET response.|
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
|view|BASIC_CERTIFICATE|
|view|FULL_CERTIFICATE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

<h3 id="appengineappsauthorizedcertificatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthorizedCertificate](#schemaauthorizedcertificate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.authorizedCertificates.delete

<a id="opIdappengine.apps.authorizedCertificates.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedCertificates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}`

Deletes the specified SSL certificate.

<h3 id="appengineappsauthorizedcertificatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.|
|authorizedCertificatesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsauthorizedcertificatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.authorizedCertificates.patch

<a id="opIdappengine.apps.authorizedCertificates.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedCertificates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certificateRawData": {
      "privateKey": "string",
      "publicCertificate": "string"
    },
    "displayName": "string",
    "domainMappingsCount": 0,
    "domainNames": [
      "string"
    ],
    "expireTime": "string",
    "id": "string",
    "managedCertificate": {
      "lastRenewalTime": "string",
      "status": "MANAGEMENT_STATUS_UNSPECIFIED"
    },
    "name": "string",
    "visibleDomainMappings": [
      "string"
    ]
  }'
```

`PATCH /v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}`

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

> Body parameter

```json
{
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

<h3 id="appengineappsauthorizedcertificatespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.|
|authorizedCertificatesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|updateMask|query|string|false|Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.|
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
|body|body|[AuthorizedCertificate](#schemaauthorizedcertificate)|false|none|
|» certificateRawData|body|[CertificateRawData](#schemacertificaterawdata)|false|The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.|
|» displayName|body|string|false|The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.|
|» domainMappingsCount|body|integer(int32)|false|Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|
|» domainNames|body|[string]|false|Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly|
|» expireTime|body|string(google-datetime)|false|The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly|
|» id|body|string|false|Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly|
|» managedCertificate|body|[ManagedCertificate](#schemamanagedcertificate)|false|Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly|
|» name|body|string|false|Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly|
|» visibleDomainMappings|body|[string]|false|The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|

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
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

<h3 id="appengineappsauthorizedcertificatespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthorizedCertificate](#schemaauthorizedcertificate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.authorizedDomains.list

<a id="opIdappengine.apps.authorizedDomains.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/authorizedDomains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/authorizedDomains`

Lists all domains the user is authorized to administer.

<h3 id="appengineappsauthorizeddomainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
      "id": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappsauthorizeddomainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAuthorizedDomainsResponse](#schemalistauthorizeddomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.domainMappings.list

<a id="opIdappengine.apps.domainMappings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/domainMappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/domainMappings`

Lists the domain mappings on an application.

<h3 id="appengineappsdomainmappingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "domainMappings": [
    {
      "id": "string",
      "name": "string",
      "resourceRecords": [
        {
          "name": "string",
          "rrdata": "string",
          "type": "A"
        }
      ],
      "sslSettings": {
        "certificateId": "string",
        "pendingManagedCertificateId": "string",
        "sslManagementType": "AUTOMATIC"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappsdomainmappingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDomainMappingsResponse](#schemalistdomainmappingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.domainMappings.create

<a id="opIdappengine.apps.domainMappings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/domainMappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "resourceRecords": [
      {
        "name": "string",
        "rrdata": "string",
        "type": "A"
      }
    ],
    "sslSettings": {
      "certificateId": "string",
      "pendingManagedCertificateId": "string",
      "sslManagementType": "AUTOMATIC"
    }
  }'
```

`POST /v1beta/apps/{appsId}/domainMappings`

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "resourceRecords": [
    {
      "name": "string",
      "rrdata": "string",
      "type": "A"
    }
  ],
  "sslSettings": {
    "certificateId": "string",
    "pendingManagedCertificateId": "string",
    "sslManagementType": "AUTOMATIC"
  }
}
```

<h3 id="appengineappsdomainmappingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
|overrideStrategy|query|string|false|Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.|
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
|body|body|[DomainMapping](#schemadomainmapping)|false|none|
|» id|body|string|false|Relative name of the domain serving the application. Example: example.com.|
|» name|body|string|false|Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly|
|» resourceRecords|body|[[ResourceRecord](#schemaresourcerecord)]|false|The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly|
|» sslSettings|body|[SslSettings](#schemasslsettings)|false|SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|overrideStrategy|UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY|
|overrideStrategy|STRICT|
|overrideStrategy|OVERRIDE|
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

<h3 id="appengineappsdomainmappingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.domainMappings.get

<a id="opIdappengine.apps.domainMappings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/domainMappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/domainMappings/{domainMappingsId}`

Gets the specified domain mapping.

<h3 id="appengineappsdomainmappingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.|
|domainMappingsId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
  "id": "string",
  "name": "string",
  "resourceRecords": [
    {
      "name": "string",
      "rrdata": "string",
      "type": "A"
    }
  ],
  "sslSettings": {
    "certificateId": "string",
    "pendingManagedCertificateId": "string",
    "sslManagementType": "AUTOMATIC"
  }
}
```

<h3 id="appengineappsdomainmappingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DomainMapping](#schemadomainmapping)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.domainMappings.delete

<a id="opIdappengine.apps.domainMappings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/domainMappings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/domainMappings/{domainMappingsId}`

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

<h3 id="appengineappsdomainmappingsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.|
|domainMappingsId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsdomainmappingsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.domainMappings.patch

<a id="opIdappengine.apps.domainMappings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/domainMappings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "resourceRecords": [
      {
        "name": "string",
        "rrdata": "string",
        "type": "A"
      }
    ],
    "sslSettings": {
      "certificateId": "string",
      "pendingManagedCertificateId": "string",
      "sslManagementType": "AUTOMATIC"
    }
  }'
```

`PATCH /v1beta/apps/{appsId}/domainMappings/{domainMappingsId}`

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "resourceRecords": [
    {
      "name": "string",
      "rrdata": "string",
      "type": "A"
    }
  ],
  "sslSettings": {
    "certificateId": "string",
    "pendingManagedCertificateId": "string",
    "sslManagementType": "AUTOMATIC"
  }
}
```

<h3 id="appengineappsdomainmappingspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.|
|domainMappingsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|updateMask|query|string|false|Required. Standard field mask for the set of fields to be updated.|
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
|body|body|[DomainMapping](#schemadomainmapping)|false|none|
|» id|body|string|false|Relative name of the domain serving the application. Example: example.com.|
|» name|body|string|false|Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly|
|» resourceRecords|body|[[ResourceRecord](#schemaresourcerecord)]|false|The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly|
|» sslSettings|body|[SslSettings](#schemasslsettings)|false|SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.|

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

<h3 id="appengineappsdomainmappingspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.firewall.ingressRules.list

<a id="opIdappengine.apps.firewall.ingressRules.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/firewall/ingressRules`

Lists the firewall rules of an application.

<h3 id="appengineappsfirewallingressruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.|
|matchingAddress|query|string|false|A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappsfirewallingressruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListIngressRulesResponse](#schemalistingressrulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.firewall.ingressRules.create

<a id="opIdappengine.apps.firewall.ingressRules.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "UNSPECIFIED_ACTION",
    "description": "string",
    "priority": 0,
    "sourceRange": "string"
  }'
```

`POST /v1beta/apps/{appsId}/firewall/ingressRules`

Creates a firewall rule for the application.

> Body parameter

```json
{
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

<h3 id="appengineappsfirewallingressrulescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.|
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
|body|body|[FirewallRule](#schemafirewallrule)|false|none|
|» action|body|string|false|The action to take on matched requests.|
|» description|body|string|false|An optional string description of this rule. This field has a maximum length of 400 characters.|
|» priority|body|integer(int32)|false|A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.|
|» sourceRange|body|string|false|IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|UNSPECIFIED_ACTION|
|» action|ALLOW|
|» action|DENY|

> Example responses

> 200 Response

```json
{
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

<h3 id="appengineappsfirewallingressrulescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FirewallRule](#schemafirewallrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.firewall.ingressRules.get

<a id="opIdappengine.apps.firewall.ingressRules.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}`

Gets the specified firewall rule.

<h3 id="appengineappsfirewallingressrulesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.|
|ingressRulesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

<h3 id="appengineappsfirewallingressrulesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FirewallRule](#schemafirewallrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.firewall.ingressRules.delete

<a id="opIdappengine.apps.firewall.ingressRules.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}`

Deletes the specified firewall rule.

<h3 id="appengineappsfirewallingressrulesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.|
|ingressRulesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsfirewallingressrulesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.firewall.ingressRules.patch

<a id="opIdappengine.apps.firewall.ingressRules.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "UNSPECIFIED_ACTION",
    "description": "string",
    "priority": 0,
    "sourceRange": "string"
  }'
```

`PATCH /v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}`

Updates the specified firewall rule.

> Body parameter

```json
{
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

<h3 id="appengineappsfirewallingressrulespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.|
|ingressRulesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|updateMask|query|string|false|Standard field mask for the set of fields to be updated.|
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
|body|body|[FirewallRule](#schemafirewallrule)|false|none|
|» action|body|string|false|The action to take on matched requests.|
|» description|body|string|false|An optional string description of this rule. This field has a maximum length of 400 characters.|
|» priority|body|integer(int32)|false|A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.|
|» sourceRange|body|string|false|IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|UNSPECIFIED_ACTION|
|» action|ALLOW|
|» action|DENY|

> Example responses

> 200 Response

```json
{
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

<h3 id="appengineappsfirewallingressrulespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FirewallRule](#schemafirewallrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.firewall.ingressRules.batchUpdate

<a id="opIdappengine.apps.firewall.ingressRules.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/firewall/ingressRules:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ingressRules": [
      {
        "action": "UNSPECIFIED_ACTION",
        "description": "string",
        "priority": 0,
        "sourceRange": "string"
      }
    ]
  }'
```

`POST /v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate`

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

> Body parameter

```json
{
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ]
}
```

<h3 id="appengineappsfirewallingressrulesbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.|
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
|body|body|[BatchUpdateIngressRulesRequest](#schemabatchupdateingressrulesrequest)|false|none|
|» ingressRules|body|[[FirewallRule](#schemafirewallrule)]|false|A list of FirewallRules to replace the existing set.|

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
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ]
}
```

<h3 id="appengineappsfirewallingressrulesbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdateIngressRulesResponse](#schemabatchupdateingressrulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.locations.list

<a id="opIdappengine.apps.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/locations`

Lists information about the supported locations for this service.

<h3 id="appengineappslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.locations.get

<a id="opIdappengine.apps.locations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/locations/{locationsId}`

Gets information about a location.

<h3 id="appengineappslocationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Resource name for the location.|
|locationsId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

<h3 id="appengineappslocationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.operations.list

<a id="opIdappengine.apps.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

<h3 id="appengineappsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
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
  ]
}
```

<h3 id="appengineappsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.operations.get

<a id="opIdappengine.apps.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/operations/{operationsId}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="appengineappsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. The name of the operation resource.|
|operationsId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.list

<a id="opIdappengine.apps.services.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services`

Lists all the services in the application.

<h3 id="appengineappsserviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Application resource. Example: apps/myapp.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "services": [
    {
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networkSettings": {
        "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
      },
      "split": {
        "allocations": {
          "property1": 0,
          "property2": 0
        },
        "shardBy": "UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="appengineappsserviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListServicesResponse](#schemalistservicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.get

<a id="opIdappengine.apps.services.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services/{servicesId}`

Gets the current configuration of the specified service.

<h3 id="appengineappsservicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "networkSettings": {
    "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
  },
  "split": {
    "allocations": {
      "property1": 0,
      "property2": 0
    },
    "shardBy": "UNSPECIFIED"
  }
}
```

<h3 id="appengineappsservicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.delete

<a id="opIdappengine.apps.services.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/services/{servicesId}`

Deletes the specified service and all enclosed versions.

<h3 id="appengineappsservicesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsservicesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.patch

<a id="opIdappengine.apps.services.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "networkSettings": {
      "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
    },
    "split": {
      "allocations": {
        "property1": 0,
        "property2": 0
      },
      "shardBy": "UNSPECIFIED"
    }
  }'
```

`PATCH /v1beta/apps/{appsId}/services/{servicesId}`

Updates the configuration of the specified service.

> Body parameter

```json
{
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "networkSettings": {
    "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
  },
  "split": {
    "allocations": {
      "property1": 0,
      "property2": 0
    },
    "shardBy": "UNSPECIFIED"
  }
}
```

<h3 id="appengineappsservicespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|migrateTraffic|query|boolean|false|Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).|
|updateMask|query|string|false|Required. Standard field mask for the set of fields to be updated.|
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
|body|body|[Service](#schemaservice)|false|none|
|» id|body|string|false|Relative name of the service within the application. Example: default.@OutputOnly|
|» labels|body|object|false|A set of labels to apply to this service. Labels are key/value pairs that describe the service and all resources that belong to it (e.g., versions). The labels can be used to search and group resources, and are propagated to the usage and billing reports, enabling fine-grain analysis of costs. An example of using labels is to tag resources belonging to different environments (e.g., "env=prod", "env=qa"). Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters. Label keys must start with a lowercase letter or an international character. Each service can have at most 32 labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly|
|» networkSettings|body|[NetworkSettings](#schemanetworksettings)|false|Ingress settings for this service. Will apply to all versions.|
|» split|body|[TrafficSplit](#schematrafficsplit)|false|Mapping that defines fractional HTTP traffic diversion to different versions within the service.|

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

<h3 id="appengineappsservicespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.versions.list

<a id="opIdappengine.apps.services.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services/{servicesId}/versions`

Lists the versions of a service.

<h3 id="appengineappsservicesversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.|
|servicesId|path|string|true|Part of `parent`. See documentation of `appsId`.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
|view|query|string|false|Controls the set of fields returned in the List response.|
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
|view|BASIC|
|view|FULL|
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
      "apiConfig": {
        "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
        "login": "LOGIN_UNSPECIFIED",
        "script": "string",
        "securityLevel": "SECURE_UNSPECIFIED",
        "url": "string"
      },
      "appEngineApis": true,
      "automaticScaling": {
        "coolDownPeriod": "string",
        "cpuUtilization": {
          "aggregationWindowLength": "string",
          "targetUtilization": 0
        },
        "customMetrics": [
          {
            "filter": "string",
            "metricName": "string",
            "singleInstanceAssignment": 0,
            "targetType": "string",
            "targetUtilization": 0
          }
        ],
        "diskUtilization": {
          "targetReadBytesPerSecond": 0,
          "targetReadOpsPerSecond": 0,
          "targetWriteBytesPerSecond": 0,
          "targetWriteOpsPerSecond": 0
        },
        "maxConcurrentRequests": 0,
        "maxIdleInstances": 0,
        "maxPendingLatency": "string",
        "maxTotalInstances": 0,
        "minIdleInstances": 0,
        "minPendingLatency": "string",
        "minTotalInstances": 0,
        "networkUtilization": {
          "targetReceivedBytesPerSecond": 0,
          "targetReceivedPacketsPerSecond": 0,
          "targetSentBytesPerSecond": 0,
          "targetSentPacketsPerSecond": 0
        },
        "requestUtilization": {
          "targetConcurrentRequests": 0,
          "targetRequestCountPerSecond": 0
        },
        "standardSchedulerSettings": {
          "maxInstances": 0,
          "minInstances": 0,
          "targetCpuUtilization": 0,
          "targetThroughputUtilization": 0
        }
      },
      "basicScaling": {
        "idleTimeout": "string",
        "maxInstances": 0
      },
      "betaSettings": {
        "property1": "string",
        "property2": "string"
      },
      "buildEnvVariables": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "createdBy": "string",
      "defaultExpiration": "string",
      "deployment": {
        "build": {
          "cloudBuildId": "string"
        },
        "cloudBuildOptions": {
          "appYamlPath": "string",
          "cloudBuildTimeout": "string"
        },
        "container": {
          "image": "string"
        },
        "files": {
          "property1": {
            "mimeType": "string",
            "sha1Sum": "string",
            "sourceUrl": "string"
          },
          "property2": {
            "mimeType": "string",
            "sha1Sum": "string",
            "sourceUrl": "string"
          }
        },
        "zip": {
          "filesCount": 0,
          "sourceUrl": "string"
        }
      },
      "diskUsageBytes": "string",
      "endpointsApiService": {
        "configId": "string",
        "disableTraceSampling": true,
        "name": "string",
        "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
      },
      "entrypoint": {
        "shell": "string"
      },
      "env": "string",
      "envVariables": {
        "property1": "string",
        "property2": "string"
      },
      "errorHandlers": [
        {
          "errorCode": "ERROR_CODE_UNSPECIFIED",
          "mimeType": "string",
          "staticFile": "string"
        }
      ],
      "flexibleRuntimeSettings": {
        "operatingSystem": "string",
        "runtimeVersion": "string"
      },
      "handlers": [
        {
          "apiEndpoint": {
            "scriptPath": "string"
          },
          "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
          "login": "LOGIN_UNSPECIFIED",
          "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
          "script": {
            "scriptPath": "string"
          },
          "securityLevel": "SECURE_UNSPECIFIED",
          "staticFiles": {
            "applicationReadable": true,
            "expiration": "string",
            "httpHeaders": {
              "property1": "string",
              "property2": "string"
            },
            "mimeType": "string",
            "path": "string",
            "requireMatchingFile": true,
            "uploadPathRegex": "string"
          },
          "urlRegex": "string"
        }
      ],
      "healthCheck": {
        "checkInterval": "string",
        "disableHealthCheck": true,
        "healthyThreshold": 0,
        "host": "string",
        "restartThreshold": 0,
        "timeout": "string",
        "unhealthyThreshold": 0
      },
      "id": "string",
      "inboundServices": [
        "INBOUND_SERVICE_UNSPECIFIED"
      ],
      "instanceClass": "string",
      "libraries": [
        {
          "name": "string",
          "version": "string"
        }
      ],
      "livenessCheck": {
        "checkInterval": "string",
        "failureThreshold": 0,
        "host": "string",
        "initialDelay": "string",
        "path": "string",
        "successThreshold": 0,
        "timeout": "string"
      },
      "manualScaling": {
        "instances": 0
      },
      "name": "string",
      "network": {
        "forwardedPorts": [
          "string"
        ],
        "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
        "instanceTag": "string",
        "name": "string",
        "sessionAffinity": true,
        "subnetworkName": "string"
      },
      "nobuildFilesRegex": "string",
      "readinessCheck": {
        "appStartTimeout": "string",
        "checkInterval": "string",
        "failureThreshold": 0,
        "host": "string",
        "path": "string",
        "successThreshold": 0,
        "timeout": "string"
      },
      "resources": {
        "cpu": 0,
        "diskGb": 0,
        "kmsKeyReference": "string",
        "memoryGb": 0,
        "volumes": [
          {
            "name": "string",
            "sizeGb": 0,
            "volumeType": "string"
          }
        ]
      },
      "runtime": "string",
      "runtimeApiVersion": "string",
      "runtimeChannel": "string",
      "runtimeMainExecutablePath": "string",
      "serviceAccount": "string",
      "servingStatus": "SERVING_STATUS_UNSPECIFIED",
      "threadsafe": true,
      "versionUrl": "string",
      "vm": true,
      "vpcAccessConnector": {
        "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
        "name": "string"
      },
      "zones": [
        "string"
      ]
    }
  ]
}
```

<h3 id="appengineappsservicesversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionsResponse](#schemalistversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.versions.create

<a id="opIdappengine.apps.services.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiConfig": {
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "script": "string",
      "securityLevel": "SECURE_UNSPECIFIED",
      "url": "string"
    },
    "appEngineApis": true,
    "automaticScaling": {
      "coolDownPeriod": "string",
      "cpuUtilization": {
        "aggregationWindowLength": "string",
        "targetUtilization": 0
      },
      "customMetrics": [
        {
          "filter": "string",
          "metricName": "string",
          "singleInstanceAssignment": 0,
          "targetType": "string",
          "targetUtilization": 0
        }
      ],
      "diskUtilization": {
        "targetReadBytesPerSecond": 0,
        "targetReadOpsPerSecond": 0,
        "targetWriteBytesPerSecond": 0,
        "targetWriteOpsPerSecond": 0
      },
      "maxConcurrentRequests": 0,
      "maxIdleInstances": 0,
      "maxPendingLatency": "string",
      "maxTotalInstances": 0,
      "minIdleInstances": 0,
      "minPendingLatency": "string",
      "minTotalInstances": 0,
      "networkUtilization": {
        "targetReceivedBytesPerSecond": 0,
        "targetReceivedPacketsPerSecond": 0,
        "targetSentBytesPerSecond": 0,
        "targetSentPacketsPerSecond": 0
      },
      "requestUtilization": {
        "targetConcurrentRequests": 0,
        "targetRequestCountPerSecond": 0
      },
      "standardSchedulerSettings": {
        "maxInstances": 0,
        "minInstances": 0,
        "targetCpuUtilization": 0,
        "targetThroughputUtilization": 0
      }
    },
    "basicScaling": {
      "idleTimeout": "string",
      "maxInstances": 0
    },
    "betaSettings": {
      "property1": "string",
      "property2": "string"
    },
    "buildEnvVariables": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": "string",
    "createdBy": "string",
    "defaultExpiration": "string",
    "deployment": {
      "build": {
        "cloudBuildId": "string"
      },
      "cloudBuildOptions": {
        "appYamlPath": "string",
        "cloudBuildTimeout": "string"
      },
      "container": {
        "image": "string"
      },
      "files": {
        "property1": {
          "mimeType": "string",
          "sha1Sum": "string",
          "sourceUrl": "string"
        },
        "property2": {
          "mimeType": "string",
          "sha1Sum": "string",
          "sourceUrl": "string"
        }
      },
      "zip": {
        "filesCount": 0,
        "sourceUrl": "string"
      }
    },
    "diskUsageBytes": "string",
    "endpointsApiService": {
      "configId": "string",
      "disableTraceSampling": true,
      "name": "string",
      "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
    },
    "entrypoint": {
      "shell": "string"
    },
    "env": "string",
    "envVariables": {
      "property1": "string",
      "property2": "string"
    },
    "errorHandlers": [
      {
        "errorCode": "ERROR_CODE_UNSPECIFIED",
        "mimeType": "string",
        "staticFile": "string"
      }
    ],
    "flexibleRuntimeSettings": {
      "operatingSystem": "string",
      "runtimeVersion": "string"
    },
    "handlers": [
      {
        "apiEndpoint": {
          "scriptPath": "string"
        },
        "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
        "login": "LOGIN_UNSPECIFIED",
        "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
        "script": {
          "scriptPath": "string"
        },
        "securityLevel": "SECURE_UNSPECIFIED",
        "staticFiles": {
          "applicationReadable": true,
          "expiration": "string",
          "httpHeaders": {
            "property1": "string",
            "property2": "string"
          },
          "mimeType": "string",
          "path": "string",
          "requireMatchingFile": true,
          "uploadPathRegex": "string"
        },
        "urlRegex": "string"
      }
    ],
    "healthCheck": {
      "checkInterval": "string",
      "disableHealthCheck": true,
      "healthyThreshold": 0,
      "host": "string",
      "restartThreshold": 0,
      "timeout": "string",
      "unhealthyThreshold": 0
    },
    "id": "string",
    "inboundServices": [
      "INBOUND_SERVICE_UNSPECIFIED"
    ],
    "instanceClass": "string",
    "libraries": [
      {
        "name": "string",
        "version": "string"
      }
    ],
    "livenessCheck": {
      "checkInterval": "string",
      "failureThreshold": 0,
      "host": "string",
      "initialDelay": "string",
      "path": "string",
      "successThreshold": 0,
      "timeout": "string"
    },
    "manualScaling": {
      "instances": 0
    },
    "name": "string",
    "network": {
      "forwardedPorts": [
        "string"
      ],
      "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
      "instanceTag": "string",
      "name": "string",
      "sessionAffinity": true,
      "subnetworkName": "string"
    },
    "nobuildFilesRegex": "string",
    "readinessCheck": {
      "appStartTimeout": "string",
      "checkInterval": "string",
      "failureThreshold": 0,
      "host": "string",
      "path": "string",
      "successThreshold": 0,
      "timeout": "string"
    },
    "resources": {
      "cpu": 0,
      "diskGb": 0,
      "kmsKeyReference": "string",
      "memoryGb": 0,
      "volumes": [
        {
          "name": "string",
          "sizeGb": 0,
          "volumeType": "string"
        }
      ]
    },
    "runtime": "string",
    "runtimeApiVersion": "string",
    "runtimeChannel": "string",
    "runtimeMainExecutablePath": "string",
    "serviceAccount": "string",
    "servingStatus": "SERVING_STATUS_UNSPECIFIED",
    "threadsafe": true,
    "versionUrl": "string",
    "vm": true,
    "vpcAccessConnector": {
      "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
      "name": "string"
    },
    "zones": [
      "string"
    ]
  }'
```

`POST /v1beta/apps/{appsId}/services/{servicesId}/versions`

Deploys code and resource files to a new version.

> Body parameter

```json
{
  "apiConfig": {
    "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
    "login": "LOGIN_UNSPECIFIED",
    "script": "string",
    "securityLevel": "SECURE_UNSPECIFIED",
    "url": "string"
  },
  "appEngineApis": true,
  "automaticScaling": {
    "coolDownPeriod": "string",
    "cpuUtilization": {
      "aggregationWindowLength": "string",
      "targetUtilization": 0
    },
    "customMetrics": [
      {
        "filter": "string",
        "metricName": "string",
        "singleInstanceAssignment": 0,
        "targetType": "string",
        "targetUtilization": 0
      }
    ],
    "diskUtilization": {
      "targetReadBytesPerSecond": 0,
      "targetReadOpsPerSecond": 0,
      "targetWriteBytesPerSecond": 0,
      "targetWriteOpsPerSecond": 0
    },
    "maxConcurrentRequests": 0,
    "maxIdleInstances": 0,
    "maxPendingLatency": "string",
    "maxTotalInstances": 0,
    "minIdleInstances": 0,
    "minPendingLatency": "string",
    "minTotalInstances": 0,
    "networkUtilization": {
      "targetReceivedBytesPerSecond": 0,
      "targetReceivedPacketsPerSecond": 0,
      "targetSentBytesPerSecond": 0,
      "targetSentPacketsPerSecond": 0
    },
    "requestUtilization": {
      "targetConcurrentRequests": 0,
      "targetRequestCountPerSecond": 0
    },
    "standardSchedulerSettings": {
      "maxInstances": 0,
      "minInstances": 0,
      "targetCpuUtilization": 0,
      "targetThroughputUtilization": 0
    }
  },
  "basicScaling": {
    "idleTimeout": "string",
    "maxInstances": 0
  },
  "betaSettings": {
    "property1": "string",
    "property2": "string"
  },
  "buildEnvVariables": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "createdBy": "string",
  "defaultExpiration": "string",
  "deployment": {
    "build": {
      "cloudBuildId": "string"
    },
    "cloudBuildOptions": {
      "appYamlPath": "string",
      "cloudBuildTimeout": "string"
    },
    "container": {
      "image": "string"
    },
    "files": {
      "property1": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      },
      "property2": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      }
    },
    "zip": {
      "filesCount": 0,
      "sourceUrl": "string"
    }
  },
  "diskUsageBytes": "string",
  "endpointsApiService": {
    "configId": "string",
    "disableTraceSampling": true,
    "name": "string",
    "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
  },
  "entrypoint": {
    "shell": "string"
  },
  "env": "string",
  "envVariables": {
    "property1": "string",
    "property2": "string"
  },
  "errorHandlers": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "mimeType": "string",
      "staticFile": "string"
    }
  ],
  "flexibleRuntimeSettings": {
    "operatingSystem": "string",
    "runtimeVersion": "string"
  },
  "handlers": [
    {
      "apiEndpoint": {
        "scriptPath": "string"
      },
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
      "script": {
        "scriptPath": "string"
      },
      "securityLevel": "SECURE_UNSPECIFIED",
      "staticFiles": {
        "applicationReadable": true,
        "expiration": "string",
        "httpHeaders": {
          "property1": "string",
          "property2": "string"
        },
        "mimeType": "string",
        "path": "string",
        "requireMatchingFile": true,
        "uploadPathRegex": "string"
      },
      "urlRegex": "string"
    }
  ],
  "healthCheck": {
    "checkInterval": "string",
    "disableHealthCheck": true,
    "healthyThreshold": 0,
    "host": "string",
    "restartThreshold": 0,
    "timeout": "string",
    "unhealthyThreshold": 0
  },
  "id": "string",
  "inboundServices": [
    "INBOUND_SERVICE_UNSPECIFIED"
  ],
  "instanceClass": "string",
  "libraries": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "livenessCheck": {
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "initialDelay": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "manualScaling": {
    "instances": 0
  },
  "name": "string",
  "network": {
    "forwardedPorts": [
      "string"
    ],
    "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
    "instanceTag": "string",
    "name": "string",
    "sessionAffinity": true,
    "subnetworkName": "string"
  },
  "nobuildFilesRegex": "string",
  "readinessCheck": {
    "appStartTimeout": "string",
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "resources": {
    "cpu": 0,
    "diskGb": 0,
    "kmsKeyReference": "string",
    "memoryGb": 0,
    "volumes": [
      {
        "name": "string",
        "sizeGb": 0,
        "volumeType": "string"
      }
    ]
  },
  "runtime": "string",
  "runtimeApiVersion": "string",
  "runtimeChannel": "string",
  "runtimeMainExecutablePath": "string",
  "serviceAccount": "string",
  "servingStatus": "SERVING_STATUS_UNSPECIFIED",
  "threadsafe": true,
  "versionUrl": "string",
  "vm": true,
  "vpcAccessConnector": {
    "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
    "name": "string"
  },
  "zones": [
    "string"
  ]
}
```

<h3 id="appengineappsservicesversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.|
|servicesId|path|string|true|Part of `parent`. See documentation of `appsId`.|
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
|» apiConfig|body|[ApiConfigHandler](#schemaapiconfighandler)|false|Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set.|
|» appEngineApis|body|boolean|false|Allows App Engine second generation runtimes to access the legacy bundled services.|
|» automaticScaling|body|[AutomaticScaling](#schemaautomaticscaling)|false|Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic.|
|» basicScaling|body|[BasicScaling](#schemabasicscaling)|false|A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.|
|» betaSettings|body|object|false|Metadata settings that are supplied to this version to enable beta runtime features.|
|» » **additionalProperties**|body|string|false|none|
|» buildEnvVariables|body|object|false|Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.|
|» » **additionalProperties**|body|string|false|none|
|» createTime|body|string(google-datetime)|false|Time that this version was created.@OutputOnly|
|» createdBy|body|string|false|Email address of the user who created this version.@OutputOnly|
|» defaultExpiration|body|string(google-duration)|false|Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.|
|» deployment|body|[Deployment](#schemadeployment)|false|Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.|
|» diskUsageBytes|body|string(int64)|false|Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly|
|» endpointsApiService|body|[EndpointsApiService](#schemaendpointsapiservice)|false|Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.|
|» entrypoint|body|[Entrypoint](#schemaentrypoint)|false|The entrypoint for the application.|
|» env|body|string|false|App Engine execution environment for this version.Defaults to standard.|
|» envVariables|body|object|false|Environment variables available to the application.Only returned in GET requests if view=FULL is set.|
|» » **additionalProperties**|body|string|false|none|
|» errorHandlers|body|[[ErrorHandler](#schemaerrorhandler)]|false|Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.|
|» flexibleRuntimeSettings|body|[FlexibleRuntimeSettings](#schemaflexibleruntimesettings)|false|Settings for App Engine flexible runtimes.|
|» handlers|body|[[UrlMap](#schemaurlmap)]|false|An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.|
|» healthCheck|body|[HealthCheck](#schemahealthcheck)|false|Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.Only returned in GET requests if view=FULL is set.|
|» id|body|string|false|Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".|
|» inboundServices|body|[string]|false|Before an application can receive email or XMPP messages, the application must be configured to enable the service.|
|» instanceClass|body|string|false|Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.|
|» libraries|body|[[Library](#schemalibrary)]|false|Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.|
|» livenessCheck|body|[LivenessCheck](#schemalivenesscheck)|false|Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.|
|» manualScaling|body|[ManualScaling](#schemamanualscaling)|false|A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends".|
|» name|body|string|false|Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly|
|» network|body|[Network](#schemanetwork)|false|Extra network settings. Only applicable in the App Engine flexible environment.|
|» nobuildFilesRegex|body|string|false|Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.|
|» readinessCheck|body|[ReadinessCheck](#schemareadinesscheck)|false|Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.|
|» resources|body|[Resources](#schemaresources)|false|Machine resources for this version. Only applicable in the App Engine flexible environment.|
|» runtime|body|string|false|Desired runtime. Example: python27.|
|» runtimeApiVersion|body|string|false|The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref|
|» runtimeChannel|body|string|false|The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.|
|» runtimeMainExecutablePath|body|string|false|The path or name of the app's main executable.|
|» serviceAccount|body|string|false|The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.|
|» servingStatus|body|string|false|Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.|
|» threadsafe|body|boolean|false|Whether multiple requests can be dispatched to this version at once.|
|» versionUrl|body|string|false|Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly|
|» vm|body|boolean|false|Whether to deploy this version in a container on a virtual machine.|
|» vpcAccessConnector|body|[VpcAccessConnector](#schemavpcaccessconnector)|false|Enables VPC connectivity for standard apps.|
|» zones|body|[string]|false|The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» inboundServices|INBOUND_SERVICE_UNSPECIFIED|
|» inboundServices|INBOUND_SERVICE_MAIL|
|» inboundServices|INBOUND_SERVICE_MAIL_BOUNCE|
|» inboundServices|INBOUND_SERVICE_XMPP_ERROR|
|» inboundServices|INBOUND_SERVICE_XMPP_MESSAGE|
|» inboundServices|INBOUND_SERVICE_XMPP_SUBSCRIBE|
|» inboundServices|INBOUND_SERVICE_XMPP_PRESENCE|
|» inboundServices|INBOUND_SERVICE_CHANNEL_PRESENCE|
|» inboundServices|INBOUND_SERVICE_WARMUP|
|» servingStatus|SERVING_STATUS_UNSPECIFIED|
|» servingStatus|SERVING|
|» servingStatus|STOPPED|

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

<h3 id="appengineappsservicesversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.versions.get

<a id="opIdappengine.apps.services.versions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}`

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

<h3 id="appengineappsservicesversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|view|query|string|false|Controls the set of fields returned in the Get response.|
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
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "apiConfig": {
    "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
    "login": "LOGIN_UNSPECIFIED",
    "script": "string",
    "securityLevel": "SECURE_UNSPECIFIED",
    "url": "string"
  },
  "appEngineApis": true,
  "automaticScaling": {
    "coolDownPeriod": "string",
    "cpuUtilization": {
      "aggregationWindowLength": "string",
      "targetUtilization": 0
    },
    "customMetrics": [
      {
        "filter": "string",
        "metricName": "string",
        "singleInstanceAssignment": 0,
        "targetType": "string",
        "targetUtilization": 0
      }
    ],
    "diskUtilization": {
      "targetReadBytesPerSecond": 0,
      "targetReadOpsPerSecond": 0,
      "targetWriteBytesPerSecond": 0,
      "targetWriteOpsPerSecond": 0
    },
    "maxConcurrentRequests": 0,
    "maxIdleInstances": 0,
    "maxPendingLatency": "string",
    "maxTotalInstances": 0,
    "minIdleInstances": 0,
    "minPendingLatency": "string",
    "minTotalInstances": 0,
    "networkUtilization": {
      "targetReceivedBytesPerSecond": 0,
      "targetReceivedPacketsPerSecond": 0,
      "targetSentBytesPerSecond": 0,
      "targetSentPacketsPerSecond": 0
    },
    "requestUtilization": {
      "targetConcurrentRequests": 0,
      "targetRequestCountPerSecond": 0
    },
    "standardSchedulerSettings": {
      "maxInstances": 0,
      "minInstances": 0,
      "targetCpuUtilization": 0,
      "targetThroughputUtilization": 0
    }
  },
  "basicScaling": {
    "idleTimeout": "string",
    "maxInstances": 0
  },
  "betaSettings": {
    "property1": "string",
    "property2": "string"
  },
  "buildEnvVariables": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "createdBy": "string",
  "defaultExpiration": "string",
  "deployment": {
    "build": {
      "cloudBuildId": "string"
    },
    "cloudBuildOptions": {
      "appYamlPath": "string",
      "cloudBuildTimeout": "string"
    },
    "container": {
      "image": "string"
    },
    "files": {
      "property1": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      },
      "property2": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      }
    },
    "zip": {
      "filesCount": 0,
      "sourceUrl": "string"
    }
  },
  "diskUsageBytes": "string",
  "endpointsApiService": {
    "configId": "string",
    "disableTraceSampling": true,
    "name": "string",
    "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
  },
  "entrypoint": {
    "shell": "string"
  },
  "env": "string",
  "envVariables": {
    "property1": "string",
    "property2": "string"
  },
  "errorHandlers": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "mimeType": "string",
      "staticFile": "string"
    }
  ],
  "flexibleRuntimeSettings": {
    "operatingSystem": "string",
    "runtimeVersion": "string"
  },
  "handlers": [
    {
      "apiEndpoint": {
        "scriptPath": "string"
      },
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
      "script": {
        "scriptPath": "string"
      },
      "securityLevel": "SECURE_UNSPECIFIED",
      "staticFiles": {
        "applicationReadable": true,
        "expiration": "string",
        "httpHeaders": {
          "property1": "string",
          "property2": "string"
        },
        "mimeType": "string",
        "path": "string",
        "requireMatchingFile": true,
        "uploadPathRegex": "string"
      },
      "urlRegex": "string"
    }
  ],
  "healthCheck": {
    "checkInterval": "string",
    "disableHealthCheck": true,
    "healthyThreshold": 0,
    "host": "string",
    "restartThreshold": 0,
    "timeout": "string",
    "unhealthyThreshold": 0
  },
  "id": "string",
  "inboundServices": [
    "INBOUND_SERVICE_UNSPECIFIED"
  ],
  "instanceClass": "string",
  "libraries": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "livenessCheck": {
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "initialDelay": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "manualScaling": {
    "instances": 0
  },
  "name": "string",
  "network": {
    "forwardedPorts": [
      "string"
    ],
    "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
    "instanceTag": "string",
    "name": "string",
    "sessionAffinity": true,
    "subnetworkName": "string"
  },
  "nobuildFilesRegex": "string",
  "readinessCheck": {
    "appStartTimeout": "string",
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "resources": {
    "cpu": 0,
    "diskGb": 0,
    "kmsKeyReference": "string",
    "memoryGb": 0,
    "volumes": [
      {
        "name": "string",
        "sizeGb": 0,
        "volumeType": "string"
      }
    ]
  },
  "runtime": "string",
  "runtimeApiVersion": "string",
  "runtimeChannel": "string",
  "runtimeMainExecutablePath": "string",
  "serviceAccount": "string",
  "servingStatus": "SERVING_STATUS_UNSPECIFIED",
  "threadsafe": true,
  "versionUrl": "string",
  "vm": true,
  "vpcAccessConnector": {
    "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
    "name": "string"
  },
  "zones": [
    "string"
  ]
}
```

<h3 id="appengineappsservicesversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.versions.delete

<a id="opIdappengine.apps.services.versions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}`

Deletes an existing Version resource.

<h3 id="appengineappsservicesversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsservicesversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.versions.patch

<a id="opIdappengine.apps.services.versions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiConfig": {
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "script": "string",
      "securityLevel": "SECURE_UNSPECIFIED",
      "url": "string"
    },
    "appEngineApis": true,
    "automaticScaling": {
      "coolDownPeriod": "string",
      "cpuUtilization": {
        "aggregationWindowLength": "string",
        "targetUtilization": 0
      },
      "customMetrics": [
        {
          "filter": "string",
          "metricName": "string",
          "singleInstanceAssignment": 0,
          "targetType": "string",
          "targetUtilization": 0
        }
      ],
      "diskUtilization": {
        "targetReadBytesPerSecond": 0,
        "targetReadOpsPerSecond": 0,
        "targetWriteBytesPerSecond": 0,
        "targetWriteOpsPerSecond": 0
      },
      "maxConcurrentRequests": 0,
      "maxIdleInstances": 0,
      "maxPendingLatency": "string",
      "maxTotalInstances": 0,
      "minIdleInstances": 0,
      "minPendingLatency": "string",
      "minTotalInstances": 0,
      "networkUtilization": {
        "targetReceivedBytesPerSecond": 0,
        "targetReceivedPacketsPerSecond": 0,
        "targetSentBytesPerSecond": 0,
        "targetSentPacketsPerSecond": 0
      },
      "requestUtilization": {
        "targetConcurrentRequests": 0,
        "targetRequestCountPerSecond": 0
      },
      "standardSchedulerSettings": {
        "maxInstances": 0,
        "minInstances": 0,
        "targetCpuUtilization": 0,
        "targetThroughputUtilization": 0
      }
    },
    "basicScaling": {
      "idleTimeout": "string",
      "maxInstances": 0
    },
    "betaSettings": {
      "property1": "string",
      "property2": "string"
    },
    "buildEnvVariables": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": "string",
    "createdBy": "string",
    "defaultExpiration": "string",
    "deployment": {
      "build": {
        "cloudBuildId": "string"
      },
      "cloudBuildOptions": {
        "appYamlPath": "string",
        "cloudBuildTimeout": "string"
      },
      "container": {
        "image": "string"
      },
      "files": {
        "property1": {
          "mimeType": "string",
          "sha1Sum": "string",
          "sourceUrl": "string"
        },
        "property2": {
          "mimeType": "string",
          "sha1Sum": "string",
          "sourceUrl": "string"
        }
      },
      "zip": {
        "filesCount": 0,
        "sourceUrl": "string"
      }
    },
    "diskUsageBytes": "string",
    "endpointsApiService": {
      "configId": "string",
      "disableTraceSampling": true,
      "name": "string",
      "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
    },
    "entrypoint": {
      "shell": "string"
    },
    "env": "string",
    "envVariables": {
      "property1": "string",
      "property2": "string"
    },
    "errorHandlers": [
      {
        "errorCode": "ERROR_CODE_UNSPECIFIED",
        "mimeType": "string",
        "staticFile": "string"
      }
    ],
    "flexibleRuntimeSettings": {
      "operatingSystem": "string",
      "runtimeVersion": "string"
    },
    "handlers": [
      {
        "apiEndpoint": {
          "scriptPath": "string"
        },
        "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
        "login": "LOGIN_UNSPECIFIED",
        "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
        "script": {
          "scriptPath": "string"
        },
        "securityLevel": "SECURE_UNSPECIFIED",
        "staticFiles": {
          "applicationReadable": true,
          "expiration": "string",
          "httpHeaders": {
            "property1": "string",
            "property2": "string"
          },
          "mimeType": "string",
          "path": "string",
          "requireMatchingFile": true,
          "uploadPathRegex": "string"
        },
        "urlRegex": "string"
      }
    ],
    "healthCheck": {
      "checkInterval": "string",
      "disableHealthCheck": true,
      "healthyThreshold": 0,
      "host": "string",
      "restartThreshold": 0,
      "timeout": "string",
      "unhealthyThreshold": 0
    },
    "id": "string",
    "inboundServices": [
      "INBOUND_SERVICE_UNSPECIFIED"
    ],
    "instanceClass": "string",
    "libraries": [
      {
        "name": "string",
        "version": "string"
      }
    ],
    "livenessCheck": {
      "checkInterval": "string",
      "failureThreshold": 0,
      "host": "string",
      "initialDelay": "string",
      "path": "string",
      "successThreshold": 0,
      "timeout": "string"
    },
    "manualScaling": {
      "instances": 0
    },
    "name": "string",
    "network": {
      "forwardedPorts": [
        "string"
      ],
      "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
      "instanceTag": "string",
      "name": "string",
      "sessionAffinity": true,
      "subnetworkName": "string"
    },
    "nobuildFilesRegex": "string",
    "readinessCheck": {
      "appStartTimeout": "string",
      "checkInterval": "string",
      "failureThreshold": 0,
      "host": "string",
      "path": "string",
      "successThreshold": 0,
      "timeout": "string"
    },
    "resources": {
      "cpu": 0,
      "diskGb": 0,
      "kmsKeyReference": "string",
      "memoryGb": 0,
      "volumes": [
        {
          "name": "string",
          "sizeGb": 0,
          "volumeType": "string"
        }
      ]
    },
    "runtime": "string",
    "runtimeApiVersion": "string",
    "runtimeChannel": "string",
    "runtimeMainExecutablePath": "string",
    "serviceAccount": "string",
    "servingStatus": "SERVING_STATUS_UNSPECIFIED",
    "threadsafe": true,
    "versionUrl": "string",
    "vm": true,
    "vpcAccessConnector": {
      "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
      "name": "string"
    },
    "zones": [
      "string"
    ]
  }'
```

`PATCH /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}`

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

> Body parameter

```json
{
  "apiConfig": {
    "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
    "login": "LOGIN_UNSPECIFIED",
    "script": "string",
    "securityLevel": "SECURE_UNSPECIFIED",
    "url": "string"
  },
  "appEngineApis": true,
  "automaticScaling": {
    "coolDownPeriod": "string",
    "cpuUtilization": {
      "aggregationWindowLength": "string",
      "targetUtilization": 0
    },
    "customMetrics": [
      {
        "filter": "string",
        "metricName": "string",
        "singleInstanceAssignment": 0,
        "targetType": "string",
        "targetUtilization": 0
      }
    ],
    "diskUtilization": {
      "targetReadBytesPerSecond": 0,
      "targetReadOpsPerSecond": 0,
      "targetWriteBytesPerSecond": 0,
      "targetWriteOpsPerSecond": 0
    },
    "maxConcurrentRequests": 0,
    "maxIdleInstances": 0,
    "maxPendingLatency": "string",
    "maxTotalInstances": 0,
    "minIdleInstances": 0,
    "minPendingLatency": "string",
    "minTotalInstances": 0,
    "networkUtilization": {
      "targetReceivedBytesPerSecond": 0,
      "targetReceivedPacketsPerSecond": 0,
      "targetSentBytesPerSecond": 0,
      "targetSentPacketsPerSecond": 0
    },
    "requestUtilization": {
      "targetConcurrentRequests": 0,
      "targetRequestCountPerSecond": 0
    },
    "standardSchedulerSettings": {
      "maxInstances": 0,
      "minInstances": 0,
      "targetCpuUtilization": 0,
      "targetThroughputUtilization": 0
    }
  },
  "basicScaling": {
    "idleTimeout": "string",
    "maxInstances": 0
  },
  "betaSettings": {
    "property1": "string",
    "property2": "string"
  },
  "buildEnvVariables": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "createdBy": "string",
  "defaultExpiration": "string",
  "deployment": {
    "build": {
      "cloudBuildId": "string"
    },
    "cloudBuildOptions": {
      "appYamlPath": "string",
      "cloudBuildTimeout": "string"
    },
    "container": {
      "image": "string"
    },
    "files": {
      "property1": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      },
      "property2": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      }
    },
    "zip": {
      "filesCount": 0,
      "sourceUrl": "string"
    }
  },
  "diskUsageBytes": "string",
  "endpointsApiService": {
    "configId": "string",
    "disableTraceSampling": true,
    "name": "string",
    "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
  },
  "entrypoint": {
    "shell": "string"
  },
  "env": "string",
  "envVariables": {
    "property1": "string",
    "property2": "string"
  },
  "errorHandlers": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "mimeType": "string",
      "staticFile": "string"
    }
  ],
  "flexibleRuntimeSettings": {
    "operatingSystem": "string",
    "runtimeVersion": "string"
  },
  "handlers": [
    {
      "apiEndpoint": {
        "scriptPath": "string"
      },
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
      "script": {
        "scriptPath": "string"
      },
      "securityLevel": "SECURE_UNSPECIFIED",
      "staticFiles": {
        "applicationReadable": true,
        "expiration": "string",
        "httpHeaders": {
          "property1": "string",
          "property2": "string"
        },
        "mimeType": "string",
        "path": "string",
        "requireMatchingFile": true,
        "uploadPathRegex": "string"
      },
      "urlRegex": "string"
    }
  ],
  "healthCheck": {
    "checkInterval": "string",
    "disableHealthCheck": true,
    "healthyThreshold": 0,
    "host": "string",
    "restartThreshold": 0,
    "timeout": "string",
    "unhealthyThreshold": 0
  },
  "id": "string",
  "inboundServices": [
    "INBOUND_SERVICE_UNSPECIFIED"
  ],
  "instanceClass": "string",
  "libraries": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "livenessCheck": {
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "initialDelay": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "manualScaling": {
    "instances": 0
  },
  "name": "string",
  "network": {
    "forwardedPorts": [
      "string"
    ],
    "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
    "instanceTag": "string",
    "name": "string",
    "sessionAffinity": true,
    "subnetworkName": "string"
  },
  "nobuildFilesRegex": "string",
  "readinessCheck": {
    "appStartTimeout": "string",
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "resources": {
    "cpu": 0,
    "diskGb": 0,
    "kmsKeyReference": "string",
    "memoryGb": 0,
    "volumes": [
      {
        "name": "string",
        "sizeGb": 0,
        "volumeType": "string"
      }
    ]
  },
  "runtime": "string",
  "runtimeApiVersion": "string",
  "runtimeChannel": "string",
  "runtimeMainExecutablePath": "string",
  "serviceAccount": "string",
  "servingStatus": "SERVING_STATUS_UNSPECIFIED",
  "threadsafe": true,
  "versionUrl": "string",
  "vm": true,
  "vpcAccessConnector": {
    "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
    "name": "string"
  },
  "zones": [
    "string"
  ]
}
```

<h3 id="appengineappsservicesversionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|updateMask|query|string|false|Standard field mask for the set of fields to be updated.|
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
|» apiConfig|body|[ApiConfigHandler](#schemaapiconfighandler)|false|Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set.|
|» appEngineApis|body|boolean|false|Allows App Engine second generation runtimes to access the legacy bundled services.|
|» automaticScaling|body|[AutomaticScaling](#schemaautomaticscaling)|false|Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic.|
|» basicScaling|body|[BasicScaling](#schemabasicscaling)|false|A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.|
|» betaSettings|body|object|false|Metadata settings that are supplied to this version to enable beta runtime features.|
|» » **additionalProperties**|body|string|false|none|
|» buildEnvVariables|body|object|false|Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.|
|» » **additionalProperties**|body|string|false|none|
|» createTime|body|string(google-datetime)|false|Time that this version was created.@OutputOnly|
|» createdBy|body|string|false|Email address of the user who created this version.@OutputOnly|
|» defaultExpiration|body|string(google-duration)|false|Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.|
|» deployment|body|[Deployment](#schemadeployment)|false|Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.|
|» diskUsageBytes|body|string(int64)|false|Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly|
|» endpointsApiService|body|[EndpointsApiService](#schemaendpointsapiservice)|false|Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.|
|» entrypoint|body|[Entrypoint](#schemaentrypoint)|false|The entrypoint for the application.|
|» env|body|string|false|App Engine execution environment for this version.Defaults to standard.|
|» envVariables|body|object|false|Environment variables available to the application.Only returned in GET requests if view=FULL is set.|
|» » **additionalProperties**|body|string|false|none|
|» errorHandlers|body|[[ErrorHandler](#schemaerrorhandler)]|false|Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.|
|» flexibleRuntimeSettings|body|[FlexibleRuntimeSettings](#schemaflexibleruntimesettings)|false|Settings for App Engine flexible runtimes.|
|» handlers|body|[[UrlMap](#schemaurlmap)]|false|An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.|
|» healthCheck|body|[HealthCheck](#schemahealthcheck)|false|Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.Only returned in GET requests if view=FULL is set.|
|» id|body|string|false|Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".|
|» inboundServices|body|[string]|false|Before an application can receive email or XMPP messages, the application must be configured to enable the service.|
|» instanceClass|body|string|false|Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.|
|» libraries|body|[[Library](#schemalibrary)]|false|Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.|
|» livenessCheck|body|[LivenessCheck](#schemalivenesscheck)|false|Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.|
|» manualScaling|body|[ManualScaling](#schemamanualscaling)|false|A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends".|
|» name|body|string|false|Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly|
|» network|body|[Network](#schemanetwork)|false|Extra network settings. Only applicable in the App Engine flexible environment.|
|» nobuildFilesRegex|body|string|false|Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.|
|» readinessCheck|body|[ReadinessCheck](#schemareadinesscheck)|false|Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.|
|» resources|body|[Resources](#schemaresources)|false|Machine resources for this version. Only applicable in the App Engine flexible environment.|
|» runtime|body|string|false|Desired runtime. Example: python27.|
|» runtimeApiVersion|body|string|false|The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref|
|» runtimeChannel|body|string|false|The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.|
|» runtimeMainExecutablePath|body|string|false|The path or name of the app's main executable.|
|» serviceAccount|body|string|false|The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.|
|» servingStatus|body|string|false|Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.|
|» threadsafe|body|boolean|false|Whether multiple requests can be dispatched to this version at once.|
|» versionUrl|body|string|false|Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly|
|» vm|body|boolean|false|Whether to deploy this version in a container on a virtual machine.|
|» vpcAccessConnector|body|[VpcAccessConnector](#schemavpcaccessconnector)|false|Enables VPC connectivity for standard apps.|
|» zones|body|[string]|false|The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» inboundServices|INBOUND_SERVICE_UNSPECIFIED|
|» inboundServices|INBOUND_SERVICE_MAIL|
|» inboundServices|INBOUND_SERVICE_MAIL_BOUNCE|
|» inboundServices|INBOUND_SERVICE_XMPP_ERROR|
|» inboundServices|INBOUND_SERVICE_XMPP_MESSAGE|
|» inboundServices|INBOUND_SERVICE_XMPP_SUBSCRIBE|
|» inboundServices|INBOUND_SERVICE_XMPP_PRESENCE|
|» inboundServices|INBOUND_SERVICE_CHANNEL_PRESENCE|
|» inboundServices|INBOUND_SERVICE_WARMUP|
|» servingStatus|SERVING_STATUS_UNSPECIFIED|
|» servingStatus|SERVING|
|» servingStatus|STOPPED|

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

<h3 id="appengineappsservicesversionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.versions.instances.list

<a id="opIdappengine.apps.services.versions.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances`

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

<h3 id="appengineappsservicesversionsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.|
|servicesId|path|string|true|Part of `parent`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `parent`. See documentation of `appsId`.|
|pageSize|query|integer|false|Maximum results to return per page.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "instances": [
    {
      "appEngineRelease": "string",
      "availability": "UNSPECIFIED",
      "averageLatency": 0,
      "errors": 0,
      "id": "string",
      "memoryUsage": "string",
      "name": "string",
      "qps": 0,
      "requests": 0,
      "startTime": "string",
      "vmDebugEnabled": true,
      "vmId": "string",
      "vmIp": "string",
      "vmLiveness": "LIVENESS_STATE_UNSPECIFIED",
      "vmName": "string",
      "vmStatus": "string",
      "vmZoneName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineappsservicesversionsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.versions.instances.get

<a id="opIdappengine.apps.services.versions.instances.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}`

Gets instance information.

<h3 id="appengineappsservicesversionsinstancesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|instancesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
  "appEngineRelease": "string",
  "availability": "UNSPECIFIED",
  "averageLatency": 0,
  "errors": 0,
  "id": "string",
  "memoryUsage": "string",
  "name": "string",
  "qps": 0,
  "requests": 0,
  "startTime": "string",
  "vmDebugEnabled": true,
  "vmId": "string",
  "vmIp": "string",
  "vmLiveness": "LIVENESS_STATE_UNSPECIFIED",
  "vmName": "string",
  "vmStatus": "string",
  "vmZoneName": "string"
}
```

<h3 id="appengineappsservicesversionsinstancesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Instance](#schemainstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.apps.services.versions.instances.delete

<a id="opIdappengine.apps.services.versions.instances.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string/instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}`

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

<h3 id="appengineappsservicesversionsinstancesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|instancesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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

<h3 id="appengineappsservicesversionsinstancesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.services.versions.instances.debug

<a id="opIdappengine.apps.services.versions.instances.debug"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string/services/string/versions/string/instances/string:debug \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sshKey": "string"
  }'
```

`POST /v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug`

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

> Body parameter

```json
{
  "sshKey": "string"
}
```

<h3 id="appengineappsservicesversionsinstancesdebug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.|
|servicesId|path|string|true|Part of `name`. See documentation of `appsId`.|
|versionsId|path|string|true|Part of `name`. See documentation of `appsId`.|
|instancesId|path|string|true|Part of `name`. See documentation of `appsId`.|
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
|body|body|[DebugInstanceRequest](#schemadebuginstancerequest)|false|none|
|» sshKey|body|string|false|Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).|

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

<h3 id="appengineappsservicesversionsinstancesdebug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.apps.repair

<a id="opIdappengine.apps.repair"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/apps/string:repair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/apps/{appsId}:repair`

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

> Body parameter

```json
{}
```

<h3 id="appengineappsrepair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appsId|path|string|true|Part of `name`. Name of the application to repair. Example: apps/myapp|
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
|body|body|[RepairApplicationRequest](#schemarepairapplicationrequest)|false|none|

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

<h3 id="appengineappsrepair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="app-engine-admin-api-projects">projects</h1>

## appengine.projects.locations.list

<a id="opIdappengine.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/projects/{projectsId}/locations`

Lists information about the supported locations for this service.

<h3 id="appengineprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appengineprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.projects.locations.get

<a id="opIdappengine.projects.locations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/projects/{projectsId}/locations/{locationsId}`

Gets information about a location.

<h3 id="appengineprojectslocationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. Resource name for the location.|
|locationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
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
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

<h3 id="appengineprojectslocationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.projects.locations.applications.create

<a id="opIdappengine.projects.locations.applications.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authDomain": "string",
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "defaultCookieExpiration": "string",
    "dispatchRules": [
      {
        "domain": "string",
        "path": "string",
        "service": "string"
      }
    ],
    "featureSettings": {
      "splitHealthChecks": true,
      "useContainerOptimizedOs": true
    },
    "iap": {
      "enabled": true,
      "oauth2ClientId": "string",
      "oauth2ClientSecret": "string"
    },
    "id": "string",
    "locationId": "string",
    "serviceAccount": "string",
    "servingStatus": "UNSPECIFIED"
  }'
```

`POST /v1beta/projects/{projectsId}/locations/{locationsId}/applications`

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

> Body parameter

```json
{
  "authDomain": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultCookieExpiration": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string"
  },
  "id": "string",
  "locationId": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

<h3 id="appengineprojectslocationsapplicationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `parent`. The project and location in which the application should be created, specified in the format projects/*/locations/*|
|locationsId|path|string|true|Part of `parent`. See documentation of `projectsId`.|
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
|body|body|[Application](#schemaapplication)|false|none|
|» authDomain|body|string|false|Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.|
|» databaseType|body|string|false|The type of the Cloud Firestore or Cloud Datastore database associated with this application.|
|» defaultCookieExpiration|body|string(google-duration)|false|Cookie expiration policy for this application.|
|» dispatchRules|body|[[UrlDispatchRule](#schemaurldispatchrule)]|false|HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.|
|» featureSettings|body|[FeatureSettings](#schemafeaturesettings)|false|The feature specific settings to be used in the application.|
|» iap|body|[IdentityAwareProxy](#schemaidentityawareproxy)|false|Identity-Aware Proxy|
|» id|body|string|false|Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.|
|» locationId|body|string|false|Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).|
|» serviceAccount|body|string|false|The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.|
|» servingStatus|body|string|false|Serving status of this application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseType|DATABASE_TYPE_UNSPECIFIED|
|» databaseType|CLOUD_DATASTORE|
|» databaseType|CLOUD_FIRESTORE|
|» databaseType|CLOUD_DATASTORE_COMPATIBILITY|
|» servingStatus|UNSPECIFIED|
|» servingStatus|SERVING|
|» servingStatus|USER_DISABLED|
|» servingStatus|SYSTEM_DISABLED|

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

<h3 id="appengineprojectslocationsapplicationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.projects.locations.applications.get

<a id="opIdappengine.projects.locations.applications.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string/applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}`

Gets information about an application.

<h3 id="appengineprojectslocationsapplicationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. Name of the Application resource to get. Example: apps/myapp.|
|locationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
|applicationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
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
  "authDomain": "string",
  "codeBucket": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultBucket": "string",
  "defaultCookieExpiration": "string",
  "defaultHostname": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "gcrDomain": "string",
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string",
    "oauth2ClientSecretSha256": "string"
  },
  "id": "string",
  "locationId": "string",
  "name": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

<h3 id="appengineprojectslocationsapplicationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Application](#schemaapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.projects.locations.applications.repair

<a id="opIdappengine.projects.locations.applications.repair"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string/applications/string:repair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}:repair`

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

> Body parameter

```json
{}
```

<h3 id="appengineprojectslocationsapplicationsrepair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. Name of the application to repair. Example: apps/myapp|
|locationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
|applicationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
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
|body|body|[RepairApplicationRequest](#schemarepairapplicationrequest)|false|none|

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

<h3 id="appengineprojectslocationsapplicationsrepair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## appengine.projects.locations.operations.list

<a id="opIdappengine.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/projects/{projectsId}/locations/{locationsId}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

<h3 id="appengineprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. The name of the operation's parent resource.|
|locationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
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
  ]
}
```

<h3 id="appengineprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## appengine.projects.locations.operations.get

<a id="opIdappengine.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/projects/string/locations/string/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="appengineprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectsId|path|string|true|Part of `name`. The name of the operation resource.|
|locationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
|operationsId|path|string|true|Part of `name`. See documentation of `projectsId`.|
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

<h3 id="appengineprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/appengine.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/appengine.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

# Schemas

<h2 id="tocS_ApiConfigHandler">ApiConfigHandler</h2>
<!-- backwards compatibility -->
<a id="schemaapiconfighandler"></a>
<a id="schema_ApiConfigHandler"></a>
<a id="tocSapiconfighandler"></a>
<a id="tocsapiconfighandler"></a>

```json
{
  "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
  "login": "LOGIN_UNSPECIFIED",
  "script": "string",
  "securityLevel": "SECURE_UNSPECIFIED",
  "url": "string"
}
```

Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authFailAction|string|false|none|Action to take when users access resources that require authentication. Defaults to redirect.|
|login|string|false|none|Level of login required to access this resource. Defaults to optional.|
|script|string|false|none|Path to the script from the application root directory.|
|securityLevel|string|false|none|Security (HTTPS) enforcement for this URL.|
|url|string|false|none|URL to serve the endpoint at.|

#### Enumerated Values

|Property|Value|
|---|---|
|authFailAction|AUTH_FAIL_ACTION_UNSPECIFIED|
|authFailAction|AUTH_FAIL_ACTION_REDIRECT|
|authFailAction|AUTH_FAIL_ACTION_UNAUTHORIZED|
|login|LOGIN_UNSPECIFIED|
|login|LOGIN_OPTIONAL|
|login|LOGIN_ADMIN|
|login|LOGIN_REQUIRED|
|securityLevel|SECURE_UNSPECIFIED|
|securityLevel|SECURE_DEFAULT|
|securityLevel|SECURE_NEVER|
|securityLevel|SECURE_OPTIONAL|
|securityLevel|SECURE_ALWAYS|

<h2 id="tocS_ApiEndpointHandler">ApiEndpointHandler</h2>
<!-- backwards compatibility -->
<a id="schemaapiendpointhandler"></a>
<a id="schema_ApiEndpointHandler"></a>
<a id="tocSapiendpointhandler"></a>
<a id="tocsapiendpointhandler"></a>

```json
{
  "scriptPath": "string"
}
```

Uses Google Cloud Endpoints to handle requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scriptPath|string|false|none|Path to the script from the application root directory.|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "authDomain": "string",
  "codeBucket": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "defaultBucket": "string",
  "defaultCookieExpiration": "string",
  "defaultHostname": "string",
  "dispatchRules": [
    {
      "domain": "string",
      "path": "string",
      "service": "string"
    }
  ],
  "featureSettings": {
    "splitHealthChecks": true,
    "useContainerOptimizedOs": true
  },
  "gcrDomain": "string",
  "iap": {
    "enabled": true,
    "oauth2ClientId": "string",
    "oauth2ClientSecret": "string",
    "oauth2ClientSecretSha256": "string"
  },
  "id": "string",
  "locationId": "string",
  "name": "string",
  "serviceAccount": "string",
  "servingStatus": "UNSPECIFIED"
}
```

An Application resource contains the top-level configuration of an App Engine application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authDomain|string|false|none|Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.|
|codeBucket|string|false|read-only|Output only. Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly|
|databaseType|string|false|none|The type of the Cloud Firestore or Cloud Datastore database associated with this application.|
|defaultBucket|string|false|read-only|Output only. Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly|
|defaultCookieExpiration|string(google-duration)|false|none|Cookie expiration policy for this application.|
|defaultHostname|string|false|read-only|Output only. Hostname used to reach this application, as resolved by App Engine.@OutputOnly|
|dispatchRules|[[UrlDispatchRule](#schemaurldispatchrule)]|false|none|HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.|
|featureSettings|[FeatureSettings](#schemafeaturesettings)|false|none|The feature specific settings to be used in the application.|
|gcrDomain|string|false|read-only|Output only. The Google Container Registry domain used for storing managed build docker images for this application.|
|iap|[IdentityAwareProxy](#schemaidentityawareproxy)|false|none|Identity-Aware Proxy|
|id|string|false|none|Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.|
|locationId|string|false|none|Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).|
|name|string|false|read-only|Output only. Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly|
|serviceAccount|string|false|none|The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.|
|servingStatus|string|false|none|Serving status of this application.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseType|DATABASE_TYPE_UNSPECIFIED|
|databaseType|CLOUD_DATASTORE|
|databaseType|CLOUD_FIRESTORE|
|databaseType|CLOUD_DATASTORE_COMPATIBILITY|
|servingStatus|UNSPECIFIED|
|servingStatus|SERVING|
|servingStatus|USER_DISABLED|
|servingStatus|SYSTEM_DISABLED|

<h2 id="tocS_AuthorizedCertificate">AuthorizedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedcertificate"></a>
<a id="schema_AuthorizedCertificate"></a>
<a id="tocSauthorizedcertificate"></a>
<a id="tocsauthorizedcertificate"></a>

```json
{
  "certificateRawData": {
    "privateKey": "string",
    "publicCertificate": "string"
  },
  "displayName": "string",
  "domainMappingsCount": 0,
  "domainNames": [
    "string"
  ],
  "expireTime": "string",
  "id": "string",
  "managedCertificate": {
    "lastRenewalTime": "string",
    "status": "MANAGEMENT_STATUS_UNSPECIFIED"
  },
  "name": "string",
  "visibleDomainMappings": [
    "string"
  ]
}
```

An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateRawData|[CertificateRawData](#schemacertificaterawdata)|false|none|The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.|
|displayName|string|false|none|The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.|
|domainMappingsCount|integer(int32)|false|none|Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|
|domainNames|[string]|false|none|Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly|
|expireTime|string(google-datetime)|false|none|The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly|
|id|string|false|none|Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly|
|managedCertificate|[ManagedCertificate](#schemamanagedcertificate)|false|none|Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly|
|name|string|false|none|Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly|
|visibleDomainMappings|[string]|false|none|The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly|

<h2 id="tocS_AuthorizedDomain">AuthorizedDomain</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeddomain"></a>
<a id="schema_AuthorizedDomain"></a>
<a id="tocSauthorizeddomain"></a>
<a id="tocsauthorizeddomain"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Search Console (https://search.google.com/search-console/welcome).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Fully qualified domain name of the domain authorized for use. Example: example.com.|
|name|string|false|none|Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly|

<h2 id="tocS_AutomaticScaling">AutomaticScaling</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticscaling"></a>
<a id="schema_AutomaticScaling"></a>
<a id="tocSautomaticscaling"></a>
<a id="tocsautomaticscaling"></a>

```json
{
  "coolDownPeriod": "string",
  "cpuUtilization": {
    "aggregationWindowLength": "string",
    "targetUtilization": 0
  },
  "customMetrics": [
    {
      "filter": "string",
      "metricName": "string",
      "singleInstanceAssignment": 0,
      "targetType": "string",
      "targetUtilization": 0
    }
  ],
  "diskUtilization": {
    "targetReadBytesPerSecond": 0,
    "targetReadOpsPerSecond": 0,
    "targetWriteBytesPerSecond": 0,
    "targetWriteOpsPerSecond": 0
  },
  "maxConcurrentRequests": 0,
  "maxIdleInstances": 0,
  "maxPendingLatency": "string",
  "maxTotalInstances": 0,
  "minIdleInstances": 0,
  "minPendingLatency": "string",
  "minTotalInstances": 0,
  "networkUtilization": {
    "targetReceivedBytesPerSecond": 0,
    "targetReceivedPacketsPerSecond": 0,
    "targetSentBytesPerSecond": 0,
    "targetSentPacketsPerSecond": 0
  },
  "requestUtilization": {
    "targetConcurrentRequests": 0,
    "targetRequestCountPerSecond": 0
  },
  "standardSchedulerSettings": {
    "maxInstances": 0,
    "minInstances": 0,
    "targetCpuUtilization": 0,
    "targetThroughputUtilization": 0
  }
}
```

Automatic scaling is based on request rate, response latencies, and other application metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coolDownPeriod|string(google-duration)|false|none|The time period that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. Only applicable in the App Engine flexible environment.|
|cpuUtilization|[CpuUtilization](#schemacpuutilization)|false|none|Target scaling by CPU usage.|
|customMetrics|[[CustomMetric](#schemacustommetric)]|false|none|Target scaling by user-provided metrics. Only applicable in the App Engine flexible environment.|
|diskUtilization|[DiskUtilization](#schemadiskutilization)|false|none|Target scaling by disk usage.|
|maxConcurrentRequests|integer(int32)|false|none|Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.|
|maxIdleInstances|integer(int32)|false|none|Maximum number of idle instances that should be maintained for this version.|
|maxPendingLatency|string(google-duration)|false|none|Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.|
|maxTotalInstances|integer(int32)|false|none|Maximum number of instances that should be started to handle requests for this version.|
|minIdleInstances|integer(int32)|false|none|Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.|
|minPendingLatency|string(google-duration)|false|none|Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.|
|minTotalInstances|integer(int32)|false|none|Minimum number of running instances that should be maintained for this version.|
|networkUtilization|[NetworkUtilization](#schemanetworkutilization)|false|none|Target scaling by network usage.|
|requestUtilization|[RequestUtilization](#schemarequestutilization)|false|none|Target scaling by request utilization.|
|standardSchedulerSettings|[StandardSchedulerSettings](#schemastandardschedulersettings)|false|none|Scheduler settings for standard environment.|

<h2 id="tocS_BasicScaling">BasicScaling</h2>
<!-- backwards compatibility -->
<a id="schemabasicscaling"></a>
<a id="schema_BasicScaling"></a>
<a id="tocSbasicscaling"></a>
<a id="tocsbasicscaling"></a>

```json
{
  "idleTimeout": "string",
  "maxInstances": 0
}
```

A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idleTimeout|string(google-duration)|false|none|Duration of time after the last request that an instance must wait before the instance is shut down.|
|maxInstances|integer(int32)|false|none|Maximum number of instances to create for this version.|

<h2 id="tocS_BatchUpdateIngressRulesRequest">BatchUpdateIngressRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateingressrulesrequest"></a>
<a id="schema_BatchUpdateIngressRulesRequest"></a>
<a id="tocSbatchupdateingressrulesrequest"></a>
<a id="tocsbatchupdateingressrulesrequest"></a>

```json
{
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ]
}
```

Request message for Firewall.BatchUpdateIngressRules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressRules|[[FirewallRule](#schemafirewallrule)]|false|none|A list of FirewallRules to replace the existing set.|

<h2 id="tocS_BatchUpdateIngressRulesResponse">BatchUpdateIngressRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateingressrulesresponse"></a>
<a id="schema_BatchUpdateIngressRulesResponse"></a>
<a id="tocSbatchupdateingressrulesresponse"></a>
<a id="tocsbatchupdateingressrulesresponse"></a>

```json
{
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ]
}
```

Response message for Firewall.UpdateAllIngressRules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressRules|[[FirewallRule](#schemafirewallrule)]|false|none|The full list of ingress FirewallRules for this application.|

<h2 id="tocS_BuildInfo">BuildInfo</h2>
<!-- backwards compatibility -->
<a id="schemabuildinfo"></a>
<a id="schema_BuildInfo"></a>
<a id="tocSbuildinfo"></a>
<a id="tocsbuildinfo"></a>

```json
{
  "cloudBuildId": "string"
}
```

Google Cloud Build information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBuildId|string|false|none|The Google Cloud Build id. Example: "f966068f-08b2-42c8-bdfe-74137dff2bf9"|

<h2 id="tocS_CertificateRawData">CertificateRawData</h2>
<!-- backwards compatibility -->
<a id="schemacertificaterawdata"></a>
<a id="schema_CertificateRawData"></a>
<a id="tocScertificaterawdata"></a>
<a id="tocscertificaterawdata"></a>

```json
{
  "privateKey": "string",
  "publicCertificate": "string"
}
```

An SSL certificate obtained from a certificate authority.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateKey|string|false|none|Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: -----BEGIN RSA PRIVATE KEY----- -----END RSA PRIVATE KEY----- @InputOnly|
|publicCertificate|string|false|none|PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: -----BEGIN CERTIFICATE----- -----END CERTIFICATE----- |

<h2 id="tocS_CloudBuildOptions">CloudBuildOptions</h2>
<!-- backwards compatibility -->
<a id="schemacloudbuildoptions"></a>
<a id="schema_CloudBuildOptions"></a>
<a id="tocScloudbuildoptions"></a>
<a id="tocscloudbuildoptions"></a>

```json
{
  "appYamlPath": "string",
  "cloudBuildTimeout": "string"
}
```

Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appYamlPath|string|false|none|Path to the yaml file used in deployment, used to determine runtime configuration details.Required for flexible environment builds.See https://cloud.google.com/appengine/docs/standard/python/config/appref for more details.|
|cloudBuildTimeout|string(google-duration)|false|none|The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.|

<h2 id="tocS_ContainerInfo">ContainerInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinfo"></a>
<a id="schema_ContainerInfo"></a>
<a id="tocScontainerinfo"></a>
<a id="tocscontainerinfo"></a>

```json
{
  "image": "string"
}
```

Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"|

<h2 id="tocS_CpuUtilization">CpuUtilization</h2>
<!-- backwards compatibility -->
<a id="schemacpuutilization"></a>
<a id="schema_CpuUtilization"></a>
<a id="tocScpuutilization"></a>
<a id="tocscpuutilization"></a>

```json
{
  "aggregationWindowLength": "string",
  "targetUtilization": 0
}
```

Target scaling by CPU usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationWindowLength|string(google-duration)|false|none|Period of time over which CPU utilization is calculated.|
|targetUtilization|number(double)|false|none|Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.|

<h2 id="tocS_CreateVersionMetadataV1">CreateVersionMetadataV1</h2>
<!-- backwards compatibility -->
<a id="schemacreateversionmetadatav1"></a>
<a id="schema_CreateVersionMetadataV1"></a>
<a id="tocScreateversionmetadatav1"></a>
<a id="tocscreateversionmetadatav1"></a>

```json
{
  "cloudBuildId": "string"
}
```

Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBuildId|string|false|none|The Cloud Build ID if one was created as part of the version create. @OutputOnly|

<h2 id="tocS_CreateVersionMetadataV1Alpha">CreateVersionMetadataV1Alpha</h2>
<!-- backwards compatibility -->
<a id="schemacreateversionmetadatav1alpha"></a>
<a id="schema_CreateVersionMetadataV1Alpha"></a>
<a id="tocScreateversionmetadatav1alpha"></a>
<a id="tocscreateversionmetadatav1alpha"></a>

```json
{
  "cloudBuildId": "string"
}
```

Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBuildId|string|false|none|The Cloud Build ID if one was created as part of the version create. @OutputOnly|

<h2 id="tocS_CreateVersionMetadataV1Beta">CreateVersionMetadataV1Beta</h2>
<!-- backwards compatibility -->
<a id="schemacreateversionmetadatav1beta"></a>
<a id="schema_CreateVersionMetadataV1Beta"></a>
<a id="tocScreateversionmetadatav1beta"></a>
<a id="tocscreateversionmetadatav1beta"></a>

```json
{
  "cloudBuildId": "string"
}
```

Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBuildId|string|false|none|The Cloud Build ID if one was created as part of the version create. @OutputOnly|

<h2 id="tocS_CustomMetric">CustomMetric</h2>
<!-- backwards compatibility -->
<a id="schemacustommetric"></a>
<a id="schema_CustomMetric"></a>
<a id="tocScustommetric"></a>
<a id="tocscustommetric"></a>

```json
{
  "filter": "string",
  "metricName": "string",
  "singleInstanceAssignment": 0,
  "targetType": "string",
  "targetUtilization": 0
}
```

Allows autoscaling based on Stackdriver metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Allows filtering on the metric's fields.|
|metricName|string|false|none|The name of the metric.|
|singleInstanceAssignment|number(double)|false|none|May be used instead of target_utilization when an instance can handle a specific amount of work/resources and the metric value is equal to the current amount of work remaining. The autoscaler will try to keep the number of instances equal to the metric value divided by single_instance_assignment.|
|targetType|string|false|none|The type of the metric. Must be a string representing a Stackdriver metric type e.g. GAGUE, DELTA_PER_SECOND, etc.|
|targetUtilization|number(double)|false|none|The target value for the metric.|

<h2 id="tocS_DebugInstanceRequest">DebugInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginstancerequest"></a>
<a id="schema_DebugInstanceRequest"></a>
<a id="tocSdebuginstancerequest"></a>
<a id="tocsdebuginstancerequest"></a>

```json
{
  "sshKey": "string"
}
```

Request message for Instances.DebugInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sshKey|string|false|none|Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "build": {
    "cloudBuildId": "string"
  },
  "cloudBuildOptions": {
    "appYamlPath": "string",
    "cloudBuildTimeout": "string"
  },
  "container": {
    "image": "string"
  },
  "files": {
    "property1": {
      "mimeType": "string",
      "sha1Sum": "string",
      "sourceUrl": "string"
    },
    "property2": {
      "mimeType": "string",
      "sha1Sum": "string",
      "sourceUrl": "string"
    }
  },
  "zip": {
    "filesCount": 0,
    "sourceUrl": "string"
  }
}
```

Code and application artifacts used to deploy a version to App Engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[BuildInfo](#schemabuildinfo)|false|none|Google Cloud Build build information. Only applicable for instances running in the App Engine flexible environment.|
|cloudBuildOptions|[CloudBuildOptions](#schemacloudbuildoptions)|false|none|Options for any Google Cloud Build builds created as a part of this deployment.These options will only be used if a new build is created, such as when deploying to the App Engine flexible environment using files or zip.|
|container|[ContainerInfo](#schemacontainerinfo)|false|none|The Docker image for the container that runs the version. Only applicable for instances running in the App Engine flexible environment.|
|files|object|false|none|Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.|
|zip|[ZipInfo](#schemazipinfo)|false|none|The zip file for this deployment, if this is a zip deployment.|

<h2 id="tocS_DiskUtilization">DiskUtilization</h2>
<!-- backwards compatibility -->
<a id="schemadiskutilization"></a>
<a id="schema_DiskUtilization"></a>
<a id="tocSdiskutilization"></a>
<a id="tocsdiskutilization"></a>

```json
{
  "targetReadBytesPerSecond": 0,
  "targetReadOpsPerSecond": 0,
  "targetWriteBytesPerSecond": 0,
  "targetWriteOpsPerSecond": 0
}
```

Target scaling by disk usage. Only applicable in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetReadBytesPerSecond|integer(int32)|false|none|Target bytes read per second.|
|targetReadOpsPerSecond|integer(int32)|false|none|Target ops read per seconds.|
|targetWriteBytesPerSecond|integer(int32)|false|none|Target bytes written per second.|
|targetWriteOpsPerSecond|integer(int32)|false|none|Target ops written per second.|

<h2 id="tocS_DomainMapping">DomainMapping</h2>
<!-- backwards compatibility -->
<a id="schemadomainmapping"></a>
<a id="schema_DomainMapping"></a>
<a id="tocSdomainmapping"></a>
<a id="tocsdomainmapping"></a>

```json
{
  "id": "string",
  "name": "string",
  "resourceRecords": [
    {
      "name": "string",
      "rrdata": "string",
      "type": "A"
    }
  ],
  "sslSettings": {
    "certificateId": "string",
    "pendingManagedCertificateId": "string",
    "sslManagementType": "AUTOMATIC"
  }
}
```

A domain serving an App Engine application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Relative name of the domain serving the application. Example: example.com.|
|name|string|false|none|Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly|
|resourceRecords|[[ResourceRecord](#schemaresourcerecord)]|false|none|The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly|
|sslSettings|[SslSettings](#schemasslsettings)|false|none|SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.|

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

<h2 id="tocS_EndpointsApiService">EndpointsApiService</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsapiservice"></a>
<a id="schema_EndpointsApiService"></a>
<a id="tocSendpointsapiservice"></a>
<a id="tocsendpointsapiservice"></a>

```json
{
  "configId": "string",
  "disableTraceSampling": true,
  "name": "string",
  "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
}
```

Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string|false|none|Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".By default, the rollout strategy for Endpoints is RolloutStrategy.FIXED. This means that Endpoints starts up with a particular configuration ID. When a new configuration is rolled out, Endpoints must be given the new configuration ID. The config_id field is used to give the configuration ID and is required in this case.Endpoints also has a rollout strategy called RolloutStrategy.MANAGED. When using this, Endpoints fetches the latest configuration and does not need the configuration ID. In this case, config_id must be omitted.|
|disableTraceSampling|boolean|false|none|Enable or disable trace sampling. By default, this is set to false for enabled.|
|name|string|false|none|Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog"|
|rolloutStrategy|string|false|none|Endpoints rollout strategy. If FIXED, config_id must be specified. If MANAGED, config_id must be omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|rolloutStrategy|UNSPECIFIED_ROLLOUT_STRATEGY|
|rolloutStrategy|FIXED|
|rolloutStrategy|MANAGED|

<h2 id="tocS_Entrypoint">Entrypoint</h2>
<!-- backwards compatibility -->
<a id="schemaentrypoint"></a>
<a id="schema_Entrypoint"></a>
<a id="tocSentrypoint"></a>
<a id="tocsentrypoint"></a>

```json
{
  "shell": "string"
}
```

The entrypoint for the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shell|string|false|none|The format should be a shell command that can be fed to bash -c.|

<h2 id="tocS_ErrorHandler">ErrorHandler</h2>
<!-- backwards compatibility -->
<a id="schemaerrorhandler"></a>
<a id="schema_ErrorHandler"></a>
<a id="tocSerrorhandler"></a>
<a id="tocserrorhandler"></a>

```json
{
  "errorCode": "ERROR_CODE_UNSPECIFIED",
  "mimeType": "string",
  "staticFile": "string"
}
```

Custom static error page to be served when an error occurs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Error condition this handler applies to.|
|mimeType|string|false|none|MIME type of file. Defaults to text/html.|
|staticFile|string|false|none|Static file content to be served for this error.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|ERROR_CODE_UNSPECIFIED|
|errorCode|ERROR_CODE_DEFAULT|
|errorCode|ERROR_CODE_OVER_QUOTA|
|errorCode|ERROR_CODE_DOS_API_DENIAL|
|errorCode|ERROR_CODE_TIMEOUT|

<h2 id="tocS_FeatureSettings">FeatureSettings</h2>
<!-- backwards compatibility -->
<a id="schemafeaturesettings"></a>
<a id="schema_FeatureSettings"></a>
<a id="tocSfeaturesettings"></a>
<a id="tocsfeaturesettings"></a>

```json
{
  "splitHealthChecks": true,
  "useContainerOptimizedOs": true
}
```

The feature specific settings to be used in the application. These define behaviors that are user configurable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|splitHealthChecks|boolean|false|none|Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed.|
|useContainerOptimizedOs|boolean|false|none|If true, use Container-Optimized OS (https://cloud.google.com/container-optimized-os/) base image for VMs, rather than a base Debian image.|

<h2 id="tocS_FileInfo">FileInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileinfo"></a>
<a id="schema_FileInfo"></a>
<a id="tocSfileinfo"></a>
<a id="tocsfileinfo"></a>

```json
{
  "mimeType": "string",
  "sha1Sum": "string",
  "sourceUrl": "string"
}
```

Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|The MIME type of the file.Defaults to the value from Google Cloud Storage.|
|sha1Sum|string|false|none|The SHA1 hash of the file, in hex.|
|sourceUrl|string|false|none|URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.|

<h2 id="tocS_FirewallRule">FirewallRule</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrule"></a>
<a id="schema_FirewallRule"></a>
<a id="tocSfirewallrule"></a>
<a id="tocsfirewallrule"></a>

```json
{
  "action": "UNSPECIFIED_ACTION",
  "description": "string",
  "priority": 0,
  "sourceRange": "string"
}
```

A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action to take on matched requests.|
|description|string|false|none|An optional string description of this rule. This field has a maximum length of 400 characters.|
|priority|integer(int32)|false|none|A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.|
|sourceRange|string|false|none|IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|UNSPECIFIED_ACTION|
|action|ALLOW|
|action|DENY|

<h2 id="tocS_FlexibleRuntimeSettings">FlexibleRuntimeSettings</h2>
<!-- backwards compatibility -->
<a id="schemaflexibleruntimesettings"></a>
<a id="schema_FlexibleRuntimeSettings"></a>
<a id="tocSflexibleruntimesettings"></a>
<a id="tocsflexibleruntimesettings"></a>

```json
{
  "operatingSystem": "string",
  "runtimeVersion": "string"
}
```

Runtime settings for the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatingSystem|string|false|none|The operating system of the application runtime.|
|runtimeVersion|string|false|none|The runtime version of an App Engine flexible application.|

<h2 id="tocS_GoogleAppengineV1betaLocationMetadata">GoogleAppengineV1betaLocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappenginev1betalocationmetadata"></a>
<a id="schema_GoogleAppengineV1betaLocationMetadata"></a>
<a id="tocSgoogleappenginev1betalocationmetadata"></a>
<a id="tocsgoogleappenginev1betalocationmetadata"></a>

```json
{
  "flexibleEnvironmentAvailable": true,
  "searchApiAvailable": true,
  "standardEnvironmentAvailable": true
}
```

Metadata for the given google.cloud.location.Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flexibleEnvironmentAvailable|boolean|false|none|App Engine flexible environment is available in the given location.@OutputOnly|
|searchApiAvailable|boolean|false|read-only|Output only. Search API (https://cloud.google.com/appengine/docs/standard/python/search) is available in the given location.|
|standardEnvironmentAvailable|boolean|false|none|App Engine standard environment is available in the given location.@OutputOnly|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "checkInterval": "string",
  "disableHealthCheck": true,
  "healthyThreshold": 0,
  "host": "string",
  "restartThreshold": 0,
  "timeout": "string",
  "unhealthyThreshold": 0
}
```

Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkInterval|string(google-duration)|false|none|Interval between health checks.|
|disableHealthCheck|boolean|false|none|Whether to explicitly disable health checks for this instance.|
|healthyThreshold|integer(uint32)|false|none|Number of consecutive successful health checks required before receiving traffic.|
|host|string|false|none|Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"|
|restartThreshold|integer(uint32)|false|none|Number of consecutive failed health checks required before an instance is restarted.|
|timeout|string(google-duration)|false|none|Time before the health check is considered failed.|
|unhealthyThreshold|integer(uint32)|false|none|Number of consecutive failed health checks required before removing traffic.|

<h2 id="tocS_IdentityAwareProxy">IdentityAwareProxy</h2>
<!-- backwards compatibility -->
<a id="schemaidentityawareproxy"></a>
<a id="schema_IdentityAwareProxy"></a>
<a id="tocSidentityawareproxy"></a>
<a id="tocsidentityawareproxy"></a>

```json
{
  "enabled": true,
  "oauth2ClientId": "string",
  "oauth2ClientSecret": "string",
  "oauth2ClientSecretSha256": "string"
}
```

Identity-Aware Proxy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.|
|oauth2ClientId|string|false|none|OAuth2 client ID to use for the authentication flow.|
|oauth2ClientSecret|string|false|none|OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly|
|oauth2ClientSecretSha256|string|false|read-only|Output only. Hex-encoded SHA-256 hash of the client secret.@OutputOnly|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "appEngineRelease": "string",
  "availability": "UNSPECIFIED",
  "averageLatency": 0,
  "errors": 0,
  "id": "string",
  "memoryUsage": "string",
  "name": "string",
  "qps": 0,
  "requests": 0,
  "startTime": "string",
  "vmDebugEnabled": true,
  "vmId": "string",
  "vmIp": "string",
  "vmLiveness": "LIVENESS_STATE_UNSPECIFIED",
  "vmName": "string",
  "vmStatus": "string",
  "vmZoneName": "string"
}
```

An Instance resource is the computing unit that App Engine uses to automatically scale an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineRelease|string|false|read-only|Output only. App Engine release this instance is running on.|
|availability|string|false|read-only|Output only. Availability of the instance.|
|averageLatency|integer(int32)|false|read-only|Output only. Average latency (ms) over the last minute.|
|errors|integer(int32)|false|read-only|Output only. Number of errors since this instance was started.|
|id|string|false|read-only|Output only. Relative name of the instance within the version. Example: instance-1.|
|memoryUsage|string(int64)|false|read-only|Output only. Total memory in use (bytes).|
|name|string|false|read-only|Output only. Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.|
|qps|number(float)|false|read-only|Output only. Average queries per second (QPS) over the last minute.|
|requests|integer(int32)|false|read-only|Output only. Number of requests since this instance was started.|
|startTime|string(google-datetime)|false|read-only|Output only. Time that this instance was started.@OutputOnly|
|vmDebugEnabled|boolean|false|read-only|Output only. Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.|
|vmId|string|false|read-only|Output only. Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.|
|vmIp|string|false|read-only|Output only. The IP address of this instance. Only applicable for instances in App Engine flexible environment.|
|vmLiveness|string|false|read-only|Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment.|
|vmName|string|false|read-only|Output only. Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.|
|vmStatus|string|false|read-only|Output only. Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.|
|vmZoneName|string|false|read-only|Output only. Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|availability|UNSPECIFIED|
|availability|RESIDENT|
|availability|DYNAMIC|
|vmLiveness|LIVENESS_STATE_UNSPECIFIED|
|vmLiveness|UNKNOWN|
|vmLiveness|HEALTHY|
|vmLiveness|UNHEALTHY|
|vmLiveness|DRAINING|
|vmLiveness|TIMEOUT|

<h2 id="tocS_Library">Library</h2>
<!-- backwards compatibility -->
<a id="schemalibrary"></a>
<a id="schema_Library"></a>
<a id="tocSlibrary"></a>
<a id="tocslibrary"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

Third-party Python runtime library that is required by the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the library. Example: "django".|
|version|string|false|none|Version of the library to select, or "latest".|

<h2 id="tocS_ListAuthorizedCertificatesResponse">ListAuthorizedCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistauthorizedcertificatesresponse"></a>
<a id="schema_ListAuthorizedCertificatesResponse"></a>
<a id="tocSlistauthorizedcertificatesresponse"></a>
<a id="tocslistauthorizedcertificatesresponse"></a>

```json
{
  "certificates": [
    {
      "certificateRawData": {
        "privateKey": "string",
        "publicCertificate": "string"
      },
      "displayName": "string",
      "domainMappingsCount": 0,
      "domainNames": [
        "string"
      ],
      "expireTime": "string",
      "id": "string",
      "managedCertificate": {
        "lastRenewalTime": "string",
        "status": "MANAGEMENT_STATUS_UNSPECIFIED"
      },
      "name": "string",
      "visibleDomainMappings": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AuthorizedCertificates.ListAuthorizedCertificates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[[AuthorizedCertificate](#schemaauthorizedcertificate)]|false|none|The SSL certificates the user is authorized to administer.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListAuthorizedDomainsResponse">ListAuthorizedDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistauthorizeddomainsresponse"></a>
<a id="schema_ListAuthorizedDomainsResponse"></a>
<a id="tocSlistauthorizeddomainsresponse"></a>
<a id="tocslistauthorizeddomainsresponse"></a>

```json
{
  "domains": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AuthorizedDomains.ListAuthorizedDomains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[AuthorizedDomain](#schemaauthorizeddomain)]|false|none|The authorized domains belonging to the user.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListDomainMappingsResponse">ListDomainMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainmappingsresponse"></a>
<a id="schema_ListDomainMappingsResponse"></a>
<a id="tocSlistdomainmappingsresponse"></a>
<a id="tocslistdomainmappingsresponse"></a>

```json
{
  "domainMappings": [
    {
      "id": "string",
      "name": "string",
      "resourceRecords": [
        {
          "name": "string",
          "rrdata": "string",
          "type": "A"
        }
      ],
      "sslSettings": {
        "certificateId": "string",
        "pendingManagedCertificateId": "string",
        "sslManagementType": "AUTOMATIC"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for DomainMappings.ListDomainMappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainMappings|[[DomainMapping](#schemadomainmapping)]|false|none|The domain mappings for the application.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListIngressRulesResponse">ListIngressRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistingressrulesresponse"></a>
<a id="schema_ListIngressRulesResponse"></a>
<a id="tocSlistingressrulesresponse"></a>
<a id="tocslistingressrulesresponse"></a>

```json
{
  "ingressRules": [
    {
      "action": "UNSPECIFIED_ACTION",
      "description": "string",
      "priority": 0,
      "sourceRange": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Firewall.ListIngressRules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressRules|[[FirewallRule](#schemafirewallrule)]|false|none|The ingress FirewallRules for this application.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "instances": [
    {
      "appEngineRelease": "string",
      "availability": "UNSPECIFIED",
      "averageLatency": 0,
      "errors": 0,
      "id": "string",
      "memoryUsage": "string",
      "name": "string",
      "qps": 0,
      "requests": 0,
      "startTime": "string",
      "vmDebugEnabled": true,
      "vmId": "string",
      "vmIp": "string",
      "vmLiveness": "LIVENESS_STATE_UNSPECIFIED",
      "vmName": "string",
      "vmStatus": "string",
      "vmZoneName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Instances.ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[Instance](#schemainstance)]|false|none|The instances belonging to the requested version.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
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
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "nextPageToken": "string",
  "services": [
    {
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networkSettings": {
        "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
      },
      "split": {
        "allocations": {
          "property1": 0,
          "property2": 0
        },
        "shardBy": "UNSPECIFIED"
      }
    }
  ]
}
```

Response message for Services.ListServices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|services|[[Service](#schemaservice)]|false|none|The services belonging to the requested application.|

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
      "apiConfig": {
        "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
        "login": "LOGIN_UNSPECIFIED",
        "script": "string",
        "securityLevel": "SECURE_UNSPECIFIED",
        "url": "string"
      },
      "appEngineApis": true,
      "automaticScaling": {
        "coolDownPeriod": "string",
        "cpuUtilization": {
          "aggregationWindowLength": "string",
          "targetUtilization": 0
        },
        "customMetrics": [
          {
            "filter": "string",
            "metricName": "string",
            "singleInstanceAssignment": 0,
            "targetType": "string",
            "targetUtilization": 0
          }
        ],
        "diskUtilization": {
          "targetReadBytesPerSecond": 0,
          "targetReadOpsPerSecond": 0,
          "targetWriteBytesPerSecond": 0,
          "targetWriteOpsPerSecond": 0
        },
        "maxConcurrentRequests": 0,
        "maxIdleInstances": 0,
        "maxPendingLatency": "string",
        "maxTotalInstances": 0,
        "minIdleInstances": 0,
        "minPendingLatency": "string",
        "minTotalInstances": 0,
        "networkUtilization": {
          "targetReceivedBytesPerSecond": 0,
          "targetReceivedPacketsPerSecond": 0,
          "targetSentBytesPerSecond": 0,
          "targetSentPacketsPerSecond": 0
        },
        "requestUtilization": {
          "targetConcurrentRequests": 0,
          "targetRequestCountPerSecond": 0
        },
        "standardSchedulerSettings": {
          "maxInstances": 0,
          "minInstances": 0,
          "targetCpuUtilization": 0,
          "targetThroughputUtilization": 0
        }
      },
      "basicScaling": {
        "idleTimeout": "string",
        "maxInstances": 0
      },
      "betaSettings": {
        "property1": "string",
        "property2": "string"
      },
      "buildEnvVariables": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "createdBy": "string",
      "defaultExpiration": "string",
      "deployment": {
        "build": {
          "cloudBuildId": "string"
        },
        "cloudBuildOptions": {
          "appYamlPath": "string",
          "cloudBuildTimeout": "string"
        },
        "container": {
          "image": "string"
        },
        "files": {
          "property1": {
            "mimeType": "string",
            "sha1Sum": "string",
            "sourceUrl": "string"
          },
          "property2": {
            "mimeType": "string",
            "sha1Sum": "string",
            "sourceUrl": "string"
          }
        },
        "zip": {
          "filesCount": 0,
          "sourceUrl": "string"
        }
      },
      "diskUsageBytes": "string",
      "endpointsApiService": {
        "configId": "string",
        "disableTraceSampling": true,
        "name": "string",
        "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
      },
      "entrypoint": {
        "shell": "string"
      },
      "env": "string",
      "envVariables": {
        "property1": "string",
        "property2": "string"
      },
      "errorHandlers": [
        {
          "errorCode": "ERROR_CODE_UNSPECIFIED",
          "mimeType": "string",
          "staticFile": "string"
        }
      ],
      "flexibleRuntimeSettings": {
        "operatingSystem": "string",
        "runtimeVersion": "string"
      },
      "handlers": [
        {
          "apiEndpoint": {
            "scriptPath": "string"
          },
          "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
          "login": "LOGIN_UNSPECIFIED",
          "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
          "script": {
            "scriptPath": "string"
          },
          "securityLevel": "SECURE_UNSPECIFIED",
          "staticFiles": {
            "applicationReadable": true,
            "expiration": "string",
            "httpHeaders": {
              "property1": "string",
              "property2": "string"
            },
            "mimeType": "string",
            "path": "string",
            "requireMatchingFile": true,
            "uploadPathRegex": "string"
          },
          "urlRegex": "string"
        }
      ],
      "healthCheck": {
        "checkInterval": "string",
        "disableHealthCheck": true,
        "healthyThreshold": 0,
        "host": "string",
        "restartThreshold": 0,
        "timeout": "string",
        "unhealthyThreshold": 0
      },
      "id": "string",
      "inboundServices": [
        "INBOUND_SERVICE_UNSPECIFIED"
      ],
      "instanceClass": "string",
      "libraries": [
        {
          "name": "string",
          "version": "string"
        }
      ],
      "livenessCheck": {
        "checkInterval": "string",
        "failureThreshold": 0,
        "host": "string",
        "initialDelay": "string",
        "path": "string",
        "successThreshold": 0,
        "timeout": "string"
      },
      "manualScaling": {
        "instances": 0
      },
      "name": "string",
      "network": {
        "forwardedPorts": [
          "string"
        ],
        "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
        "instanceTag": "string",
        "name": "string",
        "sessionAffinity": true,
        "subnetworkName": "string"
      },
      "nobuildFilesRegex": "string",
      "readinessCheck": {
        "appStartTimeout": "string",
        "checkInterval": "string",
        "failureThreshold": 0,
        "host": "string",
        "path": "string",
        "successThreshold": 0,
        "timeout": "string"
      },
      "resources": {
        "cpu": 0,
        "diskGb": 0,
        "kmsKeyReference": "string",
        "memoryGb": 0,
        "volumes": [
          {
            "name": "string",
            "sizeGb": 0,
            "volumeType": "string"
          }
        ]
      },
      "runtime": "string",
      "runtimeApiVersion": "string",
      "runtimeChannel": "string",
      "runtimeMainExecutablePath": "string",
      "serviceAccount": "string",
      "servingStatus": "SERVING_STATUS_UNSPECIFIED",
      "threadsafe": true,
      "versionUrl": "string",
      "vm": true,
      "vpcAccessConnector": {
        "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
        "name": "string"
      },
      "zones": [
        "string"
      ]
    }
  ]
}
```

Response message for Versions.ListVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|versions|[[Version](#schemaversion)]|false|none|The versions belonging to the requested service.|

<h2 id="tocS_LivenessCheck">LivenessCheck</h2>
<!-- backwards compatibility -->
<a id="schemalivenesscheck"></a>
<a id="schema_LivenessCheck"></a>
<a id="tocSlivenesscheck"></a>
<a id="tocslivenesscheck"></a>

```json
{
  "checkInterval": "string",
  "failureThreshold": 0,
  "host": "string",
  "initialDelay": "string",
  "path": "string",
  "successThreshold": 0,
  "timeout": "string"
}
```

Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkInterval|string(google-duration)|false|none|Interval between health checks.|
|failureThreshold|integer(uint32)|false|none|Number of consecutive failed checks required before considering the VM unhealthy.|
|host|string|false|none|Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com"|
|initialDelay|string(google-duration)|false|none|The initial delay before starting to execute the checks.|
|path|string|false|none|The request path.|
|successThreshold|integer(uint32)|false|none|Number of consecutive successful checks required before considering the VM healthy.|
|timeout|string(google-duration)|false|none|Time before the check is considered failed.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} |
|locationId|string|false|none|The canonical id for this location. For example: "us-east1".|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"|

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "flexibleEnvironmentAvailable": true,
  "searchApiAvailable": true,
  "standardEnvironmentAvailable": true
}
```

Metadata for the given google.cloud.location.Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flexibleEnvironmentAvailable|boolean|false|none|App Engine flexible environment is available in the given location.@OutputOnly|
|searchApiAvailable|boolean|false|read-only|Output only. Search API (https://cloud.google.com/appengine/docs/standard/python/search) is available in the given location.|
|standardEnvironmentAvailable|boolean|false|none|App Engine standard environment is available in the given location.@OutputOnly|

<h2 id="tocS_ManagedCertificate">ManagedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemamanagedcertificate"></a>
<a id="schema_ManagedCertificate"></a>
<a id="tocSmanagedcertificate"></a>
<a id="tocsmanagedcertificate"></a>

```json
{
  "lastRenewalTime": "string",
  "status": "MANAGEMENT_STATUS_UNSPECIFIED"
}
```

A certificate managed by App Engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastRenewalTime|string(google-datetime)|false|none|Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly|
|status|string|false|none|Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly|

#### Enumerated Values

|Property|Value|
|---|---|
|status|MANAGEMENT_STATUS_UNSPECIFIED|
|status|OK|
|status|PENDING|
|status|FAILED_RETRYING_NOT_VISIBLE|
|status|FAILED_PERMANENT|
|status|FAILED_RETRYING_CAA_FORBIDDEN|
|status|FAILED_RETRYING_CAA_CHECKING|

<h2 id="tocS_ManualScaling">ManualScaling</h2>
<!-- backwards compatibility -->
<a id="schemamanualscaling"></a>
<a id="schema_ManualScaling"></a>
<a id="tocSmanualscaling"></a>
<a id="tocsmanualscaling"></a>

```json
{
  "instances": 0
}
```

A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|integer(int32)|false|none|Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.|

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "forwardedPorts": [
    "string"
  ],
  "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
  "instanceTag": "string",
  "name": "string",
  "sessionAffinity": true,
  "subnetworkName": "string"
}
```

Extra network settings. Only applicable in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardedPorts|[string]|false|none|List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment.|
|instanceIpMode|string|false|none|The IP mode for instances. Only applicable in the App Engine flexible environment.|
|instanceTag|string|false|none|Tag to apply to the instance during creation. Only applicable in the App Engine flexible environment.|
|name|string|false|none|Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default.|
|sessionAffinity|boolean|false|none|Enable session affinity. Only applicable in the App Engine flexible environment.|
|subnetworkName|string|false|none|Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network. If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range. If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network. If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceIpMode|INSTANCE_IP_MODE_UNSPECIFIED|
|instanceIpMode|EXTERNAL|
|instanceIpMode|INTERNAL|

<h2 id="tocS_NetworkSettings">NetworkSettings</h2>
<!-- backwards compatibility -->
<a id="schemanetworksettings"></a>
<a id="schema_NetworkSettings"></a>
<a id="tocSnetworksettings"></a>
<a id="tocsnetworksettings"></a>

```json
{
  "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
}
```

A NetworkSettings resource is a container for ingress settings for a version or service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressTrafficAllowed|string|false|none|The ingress settings for version or service.|

#### Enumerated Values

|Property|Value|
|---|---|
|ingressTrafficAllowed|INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED|
|ingressTrafficAllowed|INGRESS_TRAFFIC_ALLOWED_ALL|
|ingressTrafficAllowed|INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY|
|ingressTrafficAllowed|INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB|

<h2 id="tocS_NetworkUtilization">NetworkUtilization</h2>
<!-- backwards compatibility -->
<a id="schemanetworkutilization"></a>
<a id="schema_NetworkUtilization"></a>
<a id="tocSnetworkutilization"></a>
<a id="tocsnetworkutilization"></a>

```json
{
  "targetReceivedBytesPerSecond": 0,
  "targetReceivedPacketsPerSecond": 0,
  "targetSentBytesPerSecond": 0,
  "targetSentPacketsPerSecond": 0
}
```

Target scaling by network usage. Only applicable in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetReceivedBytesPerSecond|integer(int32)|false|none|Target bytes received per second.|
|targetReceivedPacketsPerSecond|integer(int32)|false|none|Target packets received per second.|
|targetSentBytesPerSecond|integer(int32)|false|none|Target bytes sent per second.|
|targetSentPacketsPerSecond|integer(int32)|false|none|Target packets sent per second.|

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

<h2 id="tocS_OperationMetadataV1">OperationMetadataV1</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1"></a>
<a id="schema_OperationMetadataV1"></a>
<a id="tocSoperationmetadatav1"></a>
<a id="tocsoperationmetadatav1"></a>

```json
{
  "createVersionMetadata": {
    "cloudBuildId": "string"
  },
  "endTime": "string",
  "ephemeralMessage": "string",
  "insertTime": "string",
  "method": "string",
  "target": "string",
  "user": "string",
  "warning": [
    "string"
  ]
}
```

Metadata for the given google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createVersionMetadata|[CreateVersionMetadataV1](#schemacreateversionmetadatav1)|false|none|Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest.|
|endTime|string(google-datetime)|false|none|Time that this operation completed.@OutputOnly|
|ephemeralMessage|string|false|none|Ephemeral message that may change every time the operation is polled. @OutputOnly|
|insertTime|string(google-datetime)|false|none|Time that this operation was created.@OutputOnly|
|method|string|false|none|API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly|
|target|string|false|none|Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly|
|user|string|false|none|User who requested this operation.@OutputOnly|
|warning|[string]|false|none|Durable messages that persist on every operation poll. @OutputOnly|

<h2 id="tocS_OperationMetadataV1Alpha">OperationMetadataV1Alpha</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1alpha"></a>
<a id="schema_OperationMetadataV1Alpha"></a>
<a id="tocSoperationmetadatav1alpha"></a>
<a id="tocsoperationmetadatav1alpha"></a>

```json
{
  "createVersionMetadata": {
    "cloudBuildId": "string"
  },
  "endTime": "string",
  "ephemeralMessage": "string",
  "insertTime": "string",
  "method": "string",
  "target": "string",
  "user": "string",
  "warning": [
    "string"
  ]
}
```

Metadata for the given google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createVersionMetadata|[CreateVersionMetadataV1Alpha](#schemacreateversionmetadatav1alpha)|false|none|Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest.|
|endTime|string(google-datetime)|false|none|Time that this operation completed.@OutputOnly|
|ephemeralMessage|string|false|none|Ephemeral message that may change every time the operation is polled. @OutputOnly|
|insertTime|string(google-datetime)|false|none|Time that this operation was created.@OutputOnly|
|method|string|false|none|API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly|
|target|string|false|none|Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly|
|user|string|false|none|User who requested this operation.@OutputOnly|
|warning|[string]|false|none|Durable messages that persist on every operation poll. @OutputOnly|

<h2 id="tocS_OperationMetadataV1Beta">OperationMetadataV1Beta</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1beta"></a>
<a id="schema_OperationMetadataV1Beta"></a>
<a id="tocSoperationmetadatav1beta"></a>
<a id="tocsoperationmetadatav1beta"></a>

```json
{
  "createVersionMetadata": {
    "cloudBuildId": "string"
  },
  "endTime": "string",
  "ephemeralMessage": "string",
  "insertTime": "string",
  "method": "string",
  "target": "string",
  "user": "string",
  "warning": [
    "string"
  ]
}
```

Metadata for the given google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createVersionMetadata|[CreateVersionMetadataV1Beta](#schemacreateversionmetadatav1beta)|false|none|Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest.|
|endTime|string(google-datetime)|false|none|Time that this operation completed.@OutputOnly|
|ephemeralMessage|string|false|none|Ephemeral message that may change every time the operation is polled. @OutputOnly|
|insertTime|string(google-datetime)|false|none|Time that this operation was created.@OutputOnly|
|method|string|false|none|API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly|
|target|string|false|none|Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly|
|user|string|false|none|User who requested this operation.@OutputOnly|
|warning|[string]|false|none|Durable messages that persist on every operation poll. @OutputOnly|

<h2 id="tocS_ProjectEvent">ProjectEvent</h2>
<!-- backwards compatibility -->
<a id="schemaprojectevent"></a>
<a id="schema_ProjectEvent"></a>
<a id="tocSprojectevent"></a>
<a id="tocsprojectevent"></a>

```json
{
  "eventId": "string",
  "phase": "UNKNOWN",
  "projectMetadata": {
    "consumerProjectId": "string",
    "consumerProjectNumber": "string",
    "consumerProjectState": "UNKNOWN_STATE",
    "p4ServiceAccount": "string",
    "producerProjectId": "string",
    "producerProjectNumber": "string",
    "tenantProjectId": "string",
    "tenantProjectNumber": "string"
  },
  "state": {
    "currentReasons": {
      "abuse": "ABUSE_UNKNOWN_REASON",
      "billing": "BILLING_UNKNOWN_REASON",
      "dataGovernance": "DATA_GOVERNANCE_UNKNOWN_REASON",
      "serviceManagement": "SERVICE_MANAGEMENT_UNKNOWN_REASON"
    },
    "previousReasons": {
      "abuse": "ABUSE_UNKNOWN_REASON",
      "billing": "BILLING_UNKNOWN_REASON",
      "dataGovernance": "DATA_GOVERNANCE_UNKNOWN_REASON",
      "serviceManagement": "SERVICE_MANAGEMENT_UNKNOWN_REASON"
    },
    "state": "UNKNOWN_STATE"
  }
}
```

The request sent to CLHs during project events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|string|false|none|The unique ID for this project event. CLHs can use this value to dedup repeated calls. required|
|phase|string|false|none|none|
|projectMetadata|[ProjectsMetadata](#schemaprojectsmetadata)|false|none|The projects metadata for this project. required|
|state|[ProjectState](#schemaprojectstate)|false|none|The state of the project that led to this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|UNKNOWN|
|phase|BEFORE_RESOURCE_HANDLING|
|phase|AFTER_RESOURCE_HANDLING|

<h2 id="tocS_ProjectState">ProjectState</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstate"></a>
<a id="schema_ProjectState"></a>
<a id="tocSprojectstate"></a>
<a id="tocsprojectstate"></a>

```json
{
  "currentReasons": {
    "abuse": "ABUSE_UNKNOWN_REASON",
    "billing": "BILLING_UNKNOWN_REASON",
    "dataGovernance": "DATA_GOVERNANCE_UNKNOWN_REASON",
    "serviceManagement": "SERVICE_MANAGEMENT_UNKNOWN_REASON"
  },
  "previousReasons": {
    "abuse": "ABUSE_UNKNOWN_REASON",
    "billing": "BILLING_UNKNOWN_REASON",
    "dataGovernance": "DATA_GOVERNANCE_UNKNOWN_REASON",
    "serviceManagement": "SERVICE_MANAGEMENT_UNKNOWN_REASON"
  },
  "state": "UNKNOWN_STATE"
}
```

ProjectState contains the externally-visible project state that is used to communicate the state and reasoning for that state to the CLH. This data is not persisted by CCFE, but is instead derived from CCFE's internal representation of the project state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentReasons|[Reasons](#schemareasons)|false|none|Projects transition between and within states based on reasons sent from various systems. CCFE will provide the CLH with reasons for the current state per system.The current systems that CCFE supports are: Service Management (Inception) Data Governance (Wipeout) Abuse (Ares) Billing (Internal Cloud Billing API)|
|previousReasons|[Reasons](#schemareasons)|false|none|The previous and current reasons for a project state will be sent for a project event. CLHs that need to know the signal that caused the project event to trigger (edges) as opposed to just knowing the state can act upon differences in the previous and current reasons.Reasons will be provided for every system: service management, data governance, abuse, and billing.If this is a CCFE-triggered event used for reconciliation then the current reasons will be set to their *_CONTROL_PLANE_SYNC state. The previous reasons will contain the last known set of non-unknown non-control_plane_sync reasons for the state.Reasons fields are deprecated. New tenants should only use the state field. If you must know the reason(s) behind a specific state, please consult with CCFE team first (cloud-ccfe-discuss@google.com).|
|state|string|false|none|The current state of the project. This state is the culmination of all of the opinions from external systems that CCFE knows about of the project.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN_STATE|
|state|ON|
|state|OFF|
|state|DELETED|

<h2 id="tocS_ProjectsMetadata">ProjectsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsmetadata"></a>
<a id="schema_ProjectsMetadata"></a>
<a id="tocSprojectsmetadata"></a>
<a id="tocsprojectsmetadata"></a>

```json
{
  "consumerProjectId": "string",
  "consumerProjectNumber": "string",
  "consumerProjectState": "UNKNOWN_STATE",
  "p4ServiceAccount": "string",
  "producerProjectId": "string",
  "producerProjectNumber": "string",
  "tenantProjectId": "string",
  "tenantProjectNumber": "string"
}
```

ProjectsMetadata is the metadata CCFE stores about the all the relevant projects (tenant, consumer, producer).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerProjectId|string|false|none|The consumer project id.|
|consumerProjectNumber|string(int64)|false|none|The consumer project number.|
|consumerProjectState|string|false|none|The CCFE state of the consumer project. It is the same state that is communicated to the CLH during project events. Notice that this field is not set in the DB, it is only set in this proto when communicated to CLH in the side channel.|
|p4ServiceAccount|string|false|none|The service account authorized to operate on the consumer project. Note: CCFE only propagates P4SA with default tag to CLH.|
|producerProjectId|string|false|none|The producer project id.|
|producerProjectNumber|string(int64)|false|none|The producer project number.|
|tenantProjectId|string|false|none|The tenant project id.|
|tenantProjectNumber|string(int64)|false|none|The tenant project number.|

#### Enumerated Values

|Property|Value|
|---|---|
|consumerProjectState|UNKNOWN_STATE|
|consumerProjectState|ON|
|consumerProjectState|OFF|
|consumerProjectState|DELETED|

<h2 id="tocS_ReadinessCheck">ReadinessCheck</h2>
<!-- backwards compatibility -->
<a id="schemareadinesscheck"></a>
<a id="schema_ReadinessCheck"></a>
<a id="tocSreadinesscheck"></a>
<a id="tocsreadinesscheck"></a>

```json
{
  "appStartTimeout": "string",
  "checkInterval": "string",
  "failureThreshold": 0,
  "host": "string",
  "path": "string",
  "successThreshold": 0,
  "timeout": "string"
}
```

Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStartTimeout|string(google-duration)|false|none|A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.|
|checkInterval|string(google-duration)|false|none|Interval between health checks.|
|failureThreshold|integer(uint32)|false|none|Number of consecutive failed checks required before removing traffic.|
|host|string|false|none|Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"|
|path|string|false|none|The request path.|
|successThreshold|integer(uint32)|false|none|Number of consecutive successful checks required before receiving traffic.|
|timeout|string(google-duration)|false|none|Time before the check is considered failed.|

<h2 id="tocS_Reasons">Reasons</h2>
<!-- backwards compatibility -->
<a id="schemareasons"></a>
<a id="schema_Reasons"></a>
<a id="tocSreasons"></a>
<a id="tocsreasons"></a>

```json
{
  "abuse": "ABUSE_UNKNOWN_REASON",
  "billing": "BILLING_UNKNOWN_REASON",
  "dataGovernance": "DATA_GOVERNANCE_UNKNOWN_REASON",
  "serviceManagement": "SERVICE_MANAGEMENT_UNKNOWN_REASON"
}
```

Projects transition between and within states based on reasons sent from various systems. CCFE will provide the CLH with reasons for the current state per system.The current systems that CCFE supports are: Service Management (Inception) Data Governance (Wipeout) Abuse (Ares) Billing (Internal Cloud Billing API)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abuse|string|false|none|none|
|billing|string|false|none|none|
|dataGovernance|string|false|none|none|
|serviceManagement|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|abuse|ABUSE_UNKNOWN_REASON|
|abuse|ABUSE_CONTROL_PLANE_SYNC|
|abuse|SUSPEND|
|abuse|REINSTATE|
|billing|BILLING_UNKNOWN_REASON|
|billing|BILLING_CONTROL_PLANE_SYNC|
|billing|PROBATION|
|billing|CLOSE|
|billing|OPEN|
|dataGovernance|DATA_GOVERNANCE_UNKNOWN_REASON|
|dataGovernance|DATA_GOVERNANCE_CONTROL_PLANE_SYNC|
|dataGovernance|HIDE|
|dataGovernance|UNHIDE|
|dataGovernance|PURGE|
|serviceManagement|SERVICE_MANAGEMENT_UNKNOWN_REASON|
|serviceManagement|SERVICE_MANAGEMENT_CONTROL_PLANE_SYNC|
|serviceManagement|ACTIVATION|
|serviceManagement|PREPARE_DEACTIVATION|
|serviceManagement|ABORT_DEACTIVATION|
|serviceManagement|COMMIT_DEACTIVATION|

<h2 id="tocS_RepairApplicationRequest">RepairApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarepairapplicationrequest"></a>
<a id="schema_RepairApplicationRequest"></a>
<a id="tocSrepairapplicationrequest"></a>
<a id="tocsrepairapplicationrequest"></a>

```json
{}
```

Request message for 'Applications.RepairApplication'.

<h2 id="tocS_RequestUtilization">RequestUtilization</h2>
<!-- backwards compatibility -->
<a id="schemarequestutilization"></a>
<a id="schema_RequestUtilization"></a>
<a id="tocSrequestutilization"></a>
<a id="tocsrequestutilization"></a>

```json
{
  "targetConcurrentRequests": 0,
  "targetRequestCountPerSecond": 0
}
```

Target scaling by request utilization. Only applicable in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetConcurrentRequests|integer(int32)|false|none|Target number of concurrent requests.|
|targetRequestCountPerSecond|integer(int32)|false|none|Target requests per second.|

<h2 id="tocS_ResourceRecord">ResourceRecord</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecord"></a>
<a id="schema_ResourceRecord"></a>
<a id="tocSresourcerecord"></a>
<a id="tocsresourcerecord"></a>

```json
{
  "name": "string",
  "rrdata": "string",
  "type": "A"
}
```

A DNS resource record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.|
|rrdata|string|false|none|Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).|
|type|string|false|none|Resource record type. Example: AAAA.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
{
  "cpu": 0,
  "diskGb": 0,
  "kmsKeyReference": "string",
  "memoryGb": 0,
  "volumes": [
    {
      "name": "string",
      "sizeGb": 0,
      "volumeType": "string"
    }
  ]
}
```

Machine resources for a version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|number(double)|false|none|Number of CPU cores needed.|
|diskGb|number(double)|false|none|Disk size (GB) needed.|
|kmsKeyReference|string|false|none|The name of the encryption key that is stored in Google Cloud KMS. Only should be used by Cloud Composer to encrypt the vm disk|
|memoryGb|number(double)|false|none|Memory (GB) needed.|
|volumes|[[Volume](#schemavolume)]|false|none|User specified volumes.|

<h2 id="tocS_ScriptHandler">ScriptHandler</h2>
<!-- backwards compatibility -->
<a id="schemascripthandler"></a>
<a id="schema_ScriptHandler"></a>
<a id="tocSscripthandler"></a>
<a id="tocsscripthandler"></a>

```json
{
  "scriptPath": "string"
}
```

Executes a script to handle the request that matches the URL pattern.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scriptPath|string|false|none|Path to the script from the application root directory.|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "networkSettings": {
    "ingressTrafficAllowed": "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
  },
  "split": {
    "allocations": {
      "property1": 0,
      "property2": 0
    },
    "shardBy": "UNSPECIFIED"
  }
}
```

A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Relative name of the service within the application. Example: default.@OutputOnly|
|labels|object|false|none|A set of labels to apply to this service. Labels are key/value pairs that describe the service and all resources that belong to it (e.g., versions). The labels can be used to search and group resources, and are propagated to the usage and billing reports, enabling fine-grain analysis of costs. An example of using labels is to tag resources belonging to different environments (e.g., "env=prod", "env=qa"). Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters. Label keys must start with a lowercase letter or an international character. Each service can have at most 32 labels.|
|name|string|false|none|Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly|
|networkSettings|[NetworkSettings](#schemanetworksettings)|false|none|Ingress settings for this service. Will apply to all versions.|
|split|[TrafficSplit](#schematrafficsplit)|false|none|Mapping that defines fractional HTTP traffic diversion to different versions within the service.|

<h2 id="tocS_SslSettings">SslSettings</h2>
<!-- backwards compatibility -->
<a id="schemasslsettings"></a>
<a id="schema_SslSettings"></a>
<a id="tocSsslsettings"></a>
<a id="tocssslsettings"></a>

```json
{
  "certificateId": "string",
  "pendingManagedCertificateId": "string",
  "sslManagementType": "AUTOMATIC"
}
```

SSL configuration for a DomainMapping resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateId|string|false|none|ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify SslManagementType.MANUAL on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.|
|pendingManagedCertificateId|string|false|none|ID of the managed AuthorizedCertificate resource currently being provisioned, if applicable. Until the new managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the provisioning process completes, the certificate_id field will reflect the new managed certificate and this field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the certificate_id field with an UpdateDomainMappingRequest.@OutputOnly|
|sslManagementType|string|false|none|SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain.|

#### Enumerated Values

|Property|Value|
|---|---|
|sslManagementType|AUTOMATIC|
|sslManagementType|MANUAL|

<h2 id="tocS_StandardSchedulerSettings">StandardSchedulerSettings</h2>
<!-- backwards compatibility -->
<a id="schemastandardschedulersettings"></a>
<a id="schema_StandardSchedulerSettings"></a>
<a id="tocSstandardschedulersettings"></a>
<a id="tocsstandardschedulersettings"></a>

```json
{
  "maxInstances": 0,
  "minInstances": 0,
  "targetCpuUtilization": 0,
  "targetThroughputUtilization": 0
}
```

Scheduler settings for standard environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxInstances|integer(int32)|false|none|Maximum number of instances to run for this version. Set to zero to disable max_instances configuration.|
|minInstances|integer(int32)|false|none|Minimum number of instances to run for this version. Set to zero to disable min_instances configuration.|
|targetCpuUtilization|number(double)|false|none|Target CPU utilization ratio to maintain when scaling.|
|targetThroughputUtilization|number(double)|false|none|Target throughput utilization ratio to maintain when scaling|

<h2 id="tocS_StaticFilesHandler">StaticFilesHandler</h2>
<!-- backwards compatibility -->
<a id="schemastaticfileshandler"></a>
<a id="schema_StaticFilesHandler"></a>
<a id="tocSstaticfileshandler"></a>
<a id="tocsstaticfileshandler"></a>

```json
{
  "applicationReadable": true,
  "expiration": "string",
  "httpHeaders": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "path": "string",
  "requireMatchingFile": true,
  "uploadPathRegex": "string"
}
```

Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationReadable|boolean|false|none|Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.|
|expiration|string(google-duration)|false|none|Time a static file served by this handler should be cached by web proxies and browsers.|
|httpHeaders|object|false|none|HTTP headers to use for all responses from these URLs.|
|mimeType|string|false|none|MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension.|
|path|string|false|none|Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.|
|requireMatchingFile|boolean|false|none|Whether this handler should match the request if the file referenced by the handler does not exist.|
|uploadPathRegex|string|false|none|Regular expression that matches the file paths for all files that should be referenced by this handler.|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TrafficSplit">TrafficSplit</h2>
<!-- backwards compatibility -->
<a id="schematrafficsplit"></a>
<a id="schema_TrafficSplit"></a>
<a id="tocStrafficsplit"></a>
<a id="tocstrafficsplit"></a>

```json
{
  "allocations": {
    "property1": 0,
    "property2": 0
  },
  "shardBy": "UNSPECIFIED"
}
```

Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocations|object|false|none|Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.|
|shardBy|string|false|none|Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|shardBy|UNSPECIFIED|
|shardBy|COOKIE|
|shardBy|IP|
|shardBy|RANDOM|

<h2 id="tocS_UrlDispatchRule">UrlDispatchRule</h2>
<!-- backwards compatibility -->
<a id="schemaurldispatchrule"></a>
<a id="schema_UrlDispatchRule"></a>
<a id="tocSurldispatchrule"></a>
<a id="tocsurldispatchrule"></a>

```json
{
  "domain": "string",
  "path": "string",
  "service": "string"
}
```

Rules to match an HTTP request and dispatch that request to a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".|
|path|string|false|none|Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.|
|service|string|false|none|Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.|

<h2 id="tocS_UrlMap">UrlMap</h2>
<!-- backwards compatibility -->
<a id="schemaurlmap"></a>
<a id="schema_UrlMap"></a>
<a id="tocSurlmap"></a>
<a id="tocsurlmap"></a>

```json
{
  "apiEndpoint": {
    "scriptPath": "string"
  },
  "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
  "login": "LOGIN_UNSPECIFIED",
  "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
  "script": {
    "scriptPath": "string"
  },
  "securityLevel": "SECURE_UNSPECIFIED",
  "staticFiles": {
    "applicationReadable": true,
    "expiration": "string",
    "httpHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "path": "string",
    "requireMatchingFile": true,
    "uploadPathRegex": "string"
  },
  "urlRegex": "string"
}
```

URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiEndpoint|[ApiEndpointHandler](#schemaapiendpointhandler)|false|none|Uses API Endpoints to handle requests.|
|authFailAction|string|false|none|Action to take when users access resources that require authentication. Defaults to redirect.|
|login|string|false|none|Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment.|
|redirectHttpResponseCode|string|false|none|30x code to use when performing redirects for the secure field. Defaults to 302.|
|script|[ScriptHandler](#schemascripthandler)|false|none|Executes a script to handle the requests that match this URL pattern. Only the auto value is supported for Node.js in the App Engine standard environment, for example "script": "auto".|
|securityLevel|string|false|none|Security (HTTPS) enforcement for this URL.|
|staticFiles|[StaticFilesHandler](#schemastaticfileshandler)|false|none|Returns the contents of a file, such as an image, as the response.|
|urlRegex|string|false|none|URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.|

#### Enumerated Values

|Property|Value|
|---|---|
|authFailAction|AUTH_FAIL_ACTION_UNSPECIFIED|
|authFailAction|AUTH_FAIL_ACTION_REDIRECT|
|authFailAction|AUTH_FAIL_ACTION_UNAUTHORIZED|
|login|LOGIN_UNSPECIFIED|
|login|LOGIN_OPTIONAL|
|login|LOGIN_ADMIN|
|login|LOGIN_REQUIRED|
|redirectHttpResponseCode|REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED|
|redirectHttpResponseCode|REDIRECT_HTTP_RESPONSE_CODE_301|
|redirectHttpResponseCode|REDIRECT_HTTP_RESPONSE_CODE_302|
|redirectHttpResponseCode|REDIRECT_HTTP_RESPONSE_CODE_303|
|redirectHttpResponseCode|REDIRECT_HTTP_RESPONSE_CODE_307|
|securityLevel|SECURE_UNSPECIFIED|
|securityLevel|SECURE_DEFAULT|
|securityLevel|SECURE_NEVER|
|securityLevel|SECURE_OPTIONAL|
|securityLevel|SECURE_ALWAYS|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "apiConfig": {
    "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
    "login": "LOGIN_UNSPECIFIED",
    "script": "string",
    "securityLevel": "SECURE_UNSPECIFIED",
    "url": "string"
  },
  "appEngineApis": true,
  "automaticScaling": {
    "coolDownPeriod": "string",
    "cpuUtilization": {
      "aggregationWindowLength": "string",
      "targetUtilization": 0
    },
    "customMetrics": [
      {
        "filter": "string",
        "metricName": "string",
        "singleInstanceAssignment": 0,
        "targetType": "string",
        "targetUtilization": 0
      }
    ],
    "diskUtilization": {
      "targetReadBytesPerSecond": 0,
      "targetReadOpsPerSecond": 0,
      "targetWriteBytesPerSecond": 0,
      "targetWriteOpsPerSecond": 0
    },
    "maxConcurrentRequests": 0,
    "maxIdleInstances": 0,
    "maxPendingLatency": "string",
    "maxTotalInstances": 0,
    "minIdleInstances": 0,
    "minPendingLatency": "string",
    "minTotalInstances": 0,
    "networkUtilization": {
      "targetReceivedBytesPerSecond": 0,
      "targetReceivedPacketsPerSecond": 0,
      "targetSentBytesPerSecond": 0,
      "targetSentPacketsPerSecond": 0
    },
    "requestUtilization": {
      "targetConcurrentRequests": 0,
      "targetRequestCountPerSecond": 0
    },
    "standardSchedulerSettings": {
      "maxInstances": 0,
      "minInstances": 0,
      "targetCpuUtilization": 0,
      "targetThroughputUtilization": 0
    }
  },
  "basicScaling": {
    "idleTimeout": "string",
    "maxInstances": 0
  },
  "betaSettings": {
    "property1": "string",
    "property2": "string"
  },
  "buildEnvVariables": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "createdBy": "string",
  "defaultExpiration": "string",
  "deployment": {
    "build": {
      "cloudBuildId": "string"
    },
    "cloudBuildOptions": {
      "appYamlPath": "string",
      "cloudBuildTimeout": "string"
    },
    "container": {
      "image": "string"
    },
    "files": {
      "property1": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      },
      "property2": {
        "mimeType": "string",
        "sha1Sum": "string",
        "sourceUrl": "string"
      }
    },
    "zip": {
      "filesCount": 0,
      "sourceUrl": "string"
    }
  },
  "diskUsageBytes": "string",
  "endpointsApiService": {
    "configId": "string",
    "disableTraceSampling": true,
    "name": "string",
    "rolloutStrategy": "UNSPECIFIED_ROLLOUT_STRATEGY"
  },
  "entrypoint": {
    "shell": "string"
  },
  "env": "string",
  "envVariables": {
    "property1": "string",
    "property2": "string"
  },
  "errorHandlers": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "mimeType": "string",
      "staticFile": "string"
    }
  ],
  "flexibleRuntimeSettings": {
    "operatingSystem": "string",
    "runtimeVersion": "string"
  },
  "handlers": [
    {
      "apiEndpoint": {
        "scriptPath": "string"
      },
      "authFailAction": "AUTH_FAIL_ACTION_UNSPECIFIED",
      "login": "LOGIN_UNSPECIFIED",
      "redirectHttpResponseCode": "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
      "script": {
        "scriptPath": "string"
      },
      "securityLevel": "SECURE_UNSPECIFIED",
      "staticFiles": {
        "applicationReadable": true,
        "expiration": "string",
        "httpHeaders": {
          "property1": "string",
          "property2": "string"
        },
        "mimeType": "string",
        "path": "string",
        "requireMatchingFile": true,
        "uploadPathRegex": "string"
      },
      "urlRegex": "string"
    }
  ],
  "healthCheck": {
    "checkInterval": "string",
    "disableHealthCheck": true,
    "healthyThreshold": 0,
    "host": "string",
    "restartThreshold": 0,
    "timeout": "string",
    "unhealthyThreshold": 0
  },
  "id": "string",
  "inboundServices": [
    "INBOUND_SERVICE_UNSPECIFIED"
  ],
  "instanceClass": "string",
  "libraries": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "livenessCheck": {
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "initialDelay": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "manualScaling": {
    "instances": 0
  },
  "name": "string",
  "network": {
    "forwardedPorts": [
      "string"
    ],
    "instanceIpMode": "INSTANCE_IP_MODE_UNSPECIFIED",
    "instanceTag": "string",
    "name": "string",
    "sessionAffinity": true,
    "subnetworkName": "string"
  },
  "nobuildFilesRegex": "string",
  "readinessCheck": {
    "appStartTimeout": "string",
    "checkInterval": "string",
    "failureThreshold": 0,
    "host": "string",
    "path": "string",
    "successThreshold": 0,
    "timeout": "string"
  },
  "resources": {
    "cpu": 0,
    "diskGb": 0,
    "kmsKeyReference": "string",
    "memoryGb": 0,
    "volumes": [
      {
        "name": "string",
        "sizeGb": 0,
        "volumeType": "string"
      }
    ]
  },
  "runtime": "string",
  "runtimeApiVersion": "string",
  "runtimeChannel": "string",
  "runtimeMainExecutablePath": "string",
  "serviceAccount": "string",
  "servingStatus": "SERVING_STATUS_UNSPECIFIED",
  "threadsafe": true,
  "versionUrl": "string",
  "vm": true,
  "vpcAccessConnector": {
    "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
    "name": "string"
  },
  "zones": [
    "string"
  ]
}
```

A Version resource is a specific set of source code and configuration files that are deployed into a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiConfig|[ApiConfigHandler](#schemaapiconfighandler)|false|none|Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set.|
|appEngineApis|boolean|false|none|Allows App Engine second generation runtimes to access the legacy bundled services.|
|automaticScaling|[AutomaticScaling](#schemaautomaticscaling)|false|none|Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic.|
|basicScaling|[BasicScaling](#schemabasicscaling)|false|none|A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.|
|betaSettings|object|false|none|Metadata settings that are supplied to this version to enable beta runtime features.|
|buildEnvVariables|object|false|none|Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.|
|createTime|string(google-datetime)|false|none|Time that this version was created.@OutputOnly|
|createdBy|string|false|none|Email address of the user who created this version.@OutputOnly|
|defaultExpiration|string(google-duration)|false|none|Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.|
|deployment|[Deployment](#schemadeployment)|false|none|Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.|
|diskUsageBytes|string(int64)|false|none|Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly|
|endpointsApiService|[EndpointsApiService](#schemaendpointsapiservice)|false|none|Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.|
|entrypoint|[Entrypoint](#schemaentrypoint)|false|none|The entrypoint for the application.|
|env|string|false|none|App Engine execution environment for this version.Defaults to standard.|
|envVariables|object|false|none|Environment variables available to the application.Only returned in GET requests if view=FULL is set.|
|errorHandlers|[[ErrorHandler](#schemaerrorhandler)]|false|none|Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.|
|flexibleRuntimeSettings|[FlexibleRuntimeSettings](#schemaflexibleruntimesettings)|false|none|Settings for App Engine flexible runtimes.|
|handlers|[[UrlMap](#schemaurlmap)]|false|none|An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.|
|healthCheck|[HealthCheck](#schemahealthcheck)|false|none|Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.Only returned in GET requests if view=FULL is set.|
|id|string|false|none|Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".|
|inboundServices|[string]|false|none|Before an application can receive email or XMPP messages, the application must be configured to enable the service.|
|instanceClass|string|false|none|Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.|
|libraries|[[Library](#schemalibrary)]|false|none|Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.|
|livenessCheck|[LivenessCheck](#schemalivenesscheck)|false|none|Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.|
|manualScaling|[ManualScaling](#schemamanualscaling)|false|none|A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends".|
|name|string|false|none|Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly|
|network|[Network](#schemanetwork)|false|none|Extra network settings. Only applicable in the App Engine flexible environment.|
|nobuildFilesRegex|string|false|none|Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.|
|readinessCheck|[ReadinessCheck](#schemareadinesscheck)|false|none|Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.|
|resources|[Resources](#schemaresources)|false|none|Machine resources for this version. Only applicable in the App Engine flexible environment.|
|runtime|string|false|none|Desired runtime. Example: python27.|
|runtimeApiVersion|string|false|none|The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref|
|runtimeChannel|string|false|none|The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.|
|runtimeMainExecutablePath|string|false|none|The path or name of the app's main executable.|
|serviceAccount|string|false|none|The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.|
|servingStatus|string|false|none|Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.|
|threadsafe|boolean|false|none|Whether multiple requests can be dispatched to this version at once.|
|versionUrl|string|false|none|Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly|
|vm|boolean|false|none|Whether to deploy this version in a container on a virtual machine.|
|vpcAccessConnector|[VpcAccessConnector](#schemavpcaccessconnector)|false|none|Enables VPC connectivity for standard apps.|
|zones|[string]|false|none|The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.|

#### Enumerated Values

|Property|Value|
|---|---|
|inboundServices|INBOUND_SERVICE_UNSPECIFIED|
|inboundServices|INBOUND_SERVICE_MAIL|
|inboundServices|INBOUND_SERVICE_MAIL_BOUNCE|
|inboundServices|INBOUND_SERVICE_XMPP_ERROR|
|inboundServices|INBOUND_SERVICE_XMPP_MESSAGE|
|inboundServices|INBOUND_SERVICE_XMPP_SUBSCRIBE|
|inboundServices|INBOUND_SERVICE_XMPP_PRESENCE|
|inboundServices|INBOUND_SERVICE_CHANNEL_PRESENCE|
|inboundServices|INBOUND_SERVICE_WARMUP|
|servingStatus|SERVING_STATUS_UNSPECIFIED|
|servingStatus|SERVING|
|servingStatus|STOPPED|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "name": "string",
  "sizeGb": 0,
  "volumeType": "string"
}
```

Volumes mounted within the app container. Only applicable in the App Engine flexible environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Unique name for the volume.|
|sizeGb|number(double)|false|none|Volume size in gigabytes.|
|volumeType|string|false|none|Underlying volume type, e.g. 'tmpfs'.|

<h2 id="tocS_VpcAccessConnector">VpcAccessConnector</h2>
<!-- backwards compatibility -->
<a id="schemavpcaccessconnector"></a>
<a id="schema_VpcAccessConnector"></a>
<a id="tocSvpcaccessconnector"></a>
<a id="tocsvpcaccessconnector"></a>

```json
{
  "egressSetting": "EGRESS_SETTING_UNSPECIFIED",
  "name": "string"
}
```

VPC access connector specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressSetting|string|false|none|The egress setting for the connector, controlling what traffic is diverted through it.|
|name|string|false|none|Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.|

#### Enumerated Values

|Property|Value|
|---|---|
|egressSetting|EGRESS_SETTING_UNSPECIFIED|
|egressSetting|ALL_TRAFFIC|
|egressSetting|PRIVATE_IP_RANGES|

<h2 id="tocS_ZipInfo">ZipInfo</h2>
<!-- backwards compatibility -->
<a id="schemazipinfo"></a>
<a id="schema_ZipInfo"></a>
<a id="tocSzipinfo"></a>
<a id="tocszipinfo"></a>

```json
{
  "filesCount": 0,
  "sourceUrl": "string"
}
```

The zip file information for a zip deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filesCount|integer(int32)|false|none|An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.|
|sourceUrl|string|false|none|URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.|
