<h1 id="firebase-dynamic-links-api">Firebase Dynamic Links API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Programmatically creates and manages Firebase Dynamic Links.

Base URLs:

* <a href="https://firebasedynamiclinks.googleapis.com/">https://firebasedynamiclinks.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/dynamic-links/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

<h1 id="firebase-dynamic-links-api-managedshortlinks">managedShortLinks</h1>

## firebasedynamiclinks.managedShortLinks.create

<a id="opIdfirebasedynamiclinks.managedShortLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/managedShortLinks:create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dynamicLinkInfo": {
      "analyticsInfo": {
        "googlePlayAnalytics": {
          "gclid": "string",
          "utmCampaign": "string",
          "utmContent": "string",
          "utmMedium": "string",
          "utmSource": "string",
          "utmTerm": "string"
        },
        "itunesConnectAnalytics": {
          "at": "string",
          "ct": "string",
          "mt": "string",
          "pt": "string"
        }
      },
      "androidInfo": {
        "androidFallbackLink": "string",
        "androidLink": "string",
        "androidMinPackageVersionCode": "string",
        "androidPackageName": "string"
      },
      "desktopInfo": {
        "desktopFallbackLink": "string"
      },
      "domainUriPrefix": "string",
      "dynamicLinkDomain": "string",
      "iosInfo": {
        "iosAppStoreId": "string",
        "iosBundleId": "string",
        "iosCustomScheme": "string",
        "iosFallbackLink": "string",
        "iosIpadBundleId": "string",
        "iosIpadFallbackLink": "string",
        "iosMinimumVersion": "string"
      },
      "link": "string",
      "navigationInfo": {
        "enableForcedRedirect": true
      },
      "socialMetaTagInfo": {
        "socialDescription": "string",
        "socialImageLink": "string",
        "socialTitle": "string"
      }
    },
    "longDynamicLink": "string",
    "name": "string",
    "sdkVersion": "string",
    "suffix": {
      "customSuffix": "string",
      "option": "OPTION_UNSPECIFIED"
    }
  }'
```

`POST /v1/managedShortLinks:create`

Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

> Body parameter

```json
{
  "dynamicLinkInfo": {
    "analyticsInfo": {
      "googlePlayAnalytics": {
        "gclid": "string",
        "utmCampaign": "string",
        "utmContent": "string",
        "utmMedium": "string",
        "utmSource": "string",
        "utmTerm": "string"
      },
      "itunesConnectAnalytics": {
        "at": "string",
        "ct": "string",
        "mt": "string",
        "pt": "string"
      }
    },
    "androidInfo": {
      "androidFallbackLink": "string",
      "androidLink": "string",
      "androidMinPackageVersionCode": "string",
      "androidPackageName": "string"
    },
    "desktopInfo": {
      "desktopFallbackLink": "string"
    },
    "domainUriPrefix": "string",
    "dynamicLinkDomain": "string",
    "iosInfo": {
      "iosAppStoreId": "string",
      "iosBundleId": "string",
      "iosCustomScheme": "string",
      "iosFallbackLink": "string",
      "iosIpadBundleId": "string",
      "iosIpadFallbackLink": "string",
      "iosMinimumVersion": "string"
    },
    "link": "string",
    "navigationInfo": {
      "enableForcedRedirect": true
    },
    "socialMetaTagInfo": {
      "socialDescription": "string",
      "socialImageLink": "string",
      "socialTitle": "string"
    }
  },
  "longDynamicLink": "string",
  "name": "string",
  "sdkVersion": "string",
  "suffix": {
    "customSuffix": "string",
    "option": "OPTION_UNSPECIFIED"
  }
}
```

<h3 id="firebasedynamiclinksmanagedshortlinkscreate-parameters">Parameters</h3>

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
|body|body|[CreateManagedShortLinkRequest](#schemacreatemanagedshortlinkrequest)|false|none|
|» dynamicLinkInfo|body|[DynamicLinkInfo](#schemadynamiclinkinfo)|false|Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|» longDynamicLink|body|string|false|Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|» name|body|string|false|Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked.|
|» sdkVersion|body|string|false|Google SDK version. Version takes the form "$major.$minor.$patch"|
|» suffix|body|[Suffix](#schemasuffix)|false|Short Dynamic Link suffix. Optional.|

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
  "managedShortLink": {
    "creationTime": "string",
    "flaggedAttribute": [
      "UNSPECIFIED_ATTRIBUTE"
    ],
    "info": {
      "analyticsInfo": {
        "googlePlayAnalytics": {
          "gclid": "string",
          "utmCampaign": "string",
          "utmContent": "string",
          "utmMedium": "string",
          "utmSource": "string",
          "utmTerm": "string"
        },
        "itunesConnectAnalytics": {
          "at": "string",
          "ct": "string",
          "mt": "string",
          "pt": "string"
        }
      },
      "androidInfo": {
        "androidFallbackLink": "string",
        "androidLink": "string",
        "androidMinPackageVersionCode": "string",
        "androidPackageName": "string"
      },
      "desktopInfo": {
        "desktopFallbackLink": "string"
      },
      "domainUriPrefix": "string",
      "dynamicLinkDomain": "string",
      "iosInfo": {
        "iosAppStoreId": "string",
        "iosBundleId": "string",
        "iosCustomScheme": "string",
        "iosFallbackLink": "string",
        "iosIpadBundleId": "string",
        "iosIpadFallbackLink": "string",
        "iosMinimumVersion": "string"
      },
      "link": "string",
      "navigationInfo": {
        "enableForcedRedirect": true
      },
      "socialMetaTagInfo": {
        "socialDescription": "string",
        "socialImageLink": "string",
        "socialTitle": "string"
      }
    },
    "link": "string",
    "linkName": "string",
    "visibility": "UNSPECIFIED_VISIBILITY"
  },
  "previewLink": "string",
  "warning": [
    {
      "warningCode": "CODE_UNSPECIFIED",
      "warningDocumentLink": "string",
      "warningMessage": "string"
    }
  ]
}
```

<h3 id="firebasedynamiclinksmanagedshortlinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateManagedShortLinkResponse](#schemacreatemanagedshortlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

<h1 id="firebase-dynamic-links-api-shortlinks">shortLinks</h1>

## firebasedynamiclinks.shortLinks.create

<a id="opIdfirebasedynamiclinks.shortLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/shortLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dynamicLinkInfo": {
      "analyticsInfo": {
        "googlePlayAnalytics": {
          "gclid": "string",
          "utmCampaign": "string",
          "utmContent": "string",
          "utmMedium": "string",
          "utmSource": "string",
          "utmTerm": "string"
        },
        "itunesConnectAnalytics": {
          "at": "string",
          "ct": "string",
          "mt": "string",
          "pt": "string"
        }
      },
      "androidInfo": {
        "androidFallbackLink": "string",
        "androidLink": "string",
        "androidMinPackageVersionCode": "string",
        "androidPackageName": "string"
      },
      "desktopInfo": {
        "desktopFallbackLink": "string"
      },
      "domainUriPrefix": "string",
      "dynamicLinkDomain": "string",
      "iosInfo": {
        "iosAppStoreId": "string",
        "iosBundleId": "string",
        "iosCustomScheme": "string",
        "iosFallbackLink": "string",
        "iosIpadBundleId": "string",
        "iosIpadFallbackLink": "string",
        "iosMinimumVersion": "string"
      },
      "link": "string",
      "navigationInfo": {
        "enableForcedRedirect": true
      },
      "socialMetaTagInfo": {
        "socialDescription": "string",
        "socialImageLink": "string",
        "socialTitle": "string"
      }
    },
    "longDynamicLink": "string",
    "sdkVersion": "string",
    "suffix": {
      "customSuffix": "string",
      "option": "OPTION_UNSPECIFIED"
    }
  }'
```

`POST /v1/shortLinks`

Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

> Body parameter

```json
{
  "dynamicLinkInfo": {
    "analyticsInfo": {
      "googlePlayAnalytics": {
        "gclid": "string",
        "utmCampaign": "string",
        "utmContent": "string",
        "utmMedium": "string",
        "utmSource": "string",
        "utmTerm": "string"
      },
      "itunesConnectAnalytics": {
        "at": "string",
        "ct": "string",
        "mt": "string",
        "pt": "string"
      }
    },
    "androidInfo": {
      "androidFallbackLink": "string",
      "androidLink": "string",
      "androidMinPackageVersionCode": "string",
      "androidPackageName": "string"
    },
    "desktopInfo": {
      "desktopFallbackLink": "string"
    },
    "domainUriPrefix": "string",
    "dynamicLinkDomain": "string",
    "iosInfo": {
      "iosAppStoreId": "string",
      "iosBundleId": "string",
      "iosCustomScheme": "string",
      "iosFallbackLink": "string",
      "iosIpadBundleId": "string",
      "iosIpadFallbackLink": "string",
      "iosMinimumVersion": "string"
    },
    "link": "string",
    "navigationInfo": {
      "enableForcedRedirect": true
    },
    "socialMetaTagInfo": {
      "socialDescription": "string",
      "socialImageLink": "string",
      "socialTitle": "string"
    }
  },
  "longDynamicLink": "string",
  "sdkVersion": "string",
  "suffix": {
    "customSuffix": "string",
    "option": "OPTION_UNSPECIFIED"
  }
}
```

<h3 id="firebasedynamiclinksshortlinkscreate-parameters">Parameters</h3>

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
|body|body|[CreateShortDynamicLinkRequest](#schemacreateshortdynamiclinkrequest)|false|none|
|» dynamicLinkInfo|body|[DynamicLinkInfo](#schemadynamiclinkinfo)|false|Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|» longDynamicLink|body|string|false|Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|» sdkVersion|body|string|false|Google SDK version. Version takes the form "$major.$minor.$patch"|
|» suffix|body|[Suffix](#schemasuffix)|false|Short Dynamic Link suffix. Optional.|

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
  "previewLink": "string",
  "shortLink": "string",
  "warning": [
    {
      "warningCode": "CODE_UNSPECIFIED",
      "warningDocumentLink": "string",
      "warningMessage": "string"
    }
  ]
}
```

<h3 id="firebasedynamiclinksshortlinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateShortDynamicLinkResponse](#schemacreateshortdynamiclinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

<h1 id="firebase-dynamic-links-api-v1">v1</h1>

## firebasedynamiclinks.installAttribution

<a id="opIdfirebasedynamiclinks.installAttribution"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/installAttribution \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appInstallationTime": "string",
    "bundleId": "string",
    "device": {
      "deviceModelName": "string",
      "languageCode": "string",
      "languageCodeFromWebview": "string",
      "languageCodeRaw": "string",
      "screenResolutionHeight": "string",
      "screenResolutionWidth": "string",
      "timezone": "string"
    },
    "iosVersion": "string",
    "retrievalMethod": "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
    "sdkVersion": "string",
    "uniqueMatchLinkToCheck": "string",
    "visualStyle": "UNKNOWN_VISUAL_STYLE"
  }'
```

`POST /v1/installAttribution`

Get iOS strong/weak-match info for post-install attribution.

> Body parameter

```json
{
  "appInstallationTime": "string",
  "bundleId": "string",
  "device": {
    "deviceModelName": "string",
    "languageCode": "string",
    "languageCodeFromWebview": "string",
    "languageCodeRaw": "string",
    "screenResolutionHeight": "string",
    "screenResolutionWidth": "string",
    "timezone": "string"
  },
  "iosVersion": "string",
  "retrievalMethod": "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
  "sdkVersion": "string",
  "uniqueMatchLinkToCheck": "string",
  "visualStyle": "UNKNOWN_VISUAL_STYLE"
}
```

<h3 id="firebasedynamiclinksinstallattribution-parameters">Parameters</h3>

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
|body|body|[GetIosPostInstallAttributionRequest](#schemagetiospostinstallattributionrequest)|false|none|
|» appInstallationTime|body|string(int64)|false|App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.|
|» bundleId|body|string|false|APP bundle ID.|
|» device|body|[DeviceInfo](#schemadeviceinfo)|false|Device information.|
|» iosVersion|body|string|false|iOS version, ie: 9.3.5. Consider adding "build".|
|» retrievalMethod|body|string|false|App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.|
|» sdkVersion|body|string|false|Google SDK version. Version takes the form "$major.$minor.$patch"|
|» uniqueMatchLinkToCheck|body|string|false|Possible unique matched link that server need to check before performing fingerprint match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.|
|» visualStyle|body|string|false|Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» retrievalMethod|UNKNOWN_PAYLOAD_RETRIEVAL_METHOD|
|» retrievalMethod|IMPLICIT_WEAK_MATCH|
|» retrievalMethod|EXPLICIT_WEAK_MATCH|
|» retrievalMethod|EXPLICIT_STRONG_AFTER_WEAK_MATCH|
|» visualStyle|UNKNOWN_VISUAL_STYLE|
|» visualStyle|DEFAULT_STYLE|
|» visualStyle|CUSTOM_STYLE|

> Example responses

> 200 Response

```json
{
  "appMinimumVersion": "string",
  "attributionConfidence": "UNKNOWN_ATTRIBUTION_CONFIDENCE",
  "deepLink": "string",
  "externalBrowserDestinationLink": "string",
  "fallbackLink": "string",
  "invitationId": "string",
  "isStrongMatchExecutable": true,
  "matchMessage": "string",
  "requestIpVersion": "UNKNOWN_IP_VERSION",
  "requestedLink": "string",
  "resolvedLink": "string",
  "utmCampaign": "string",
  "utmContent": "string",
  "utmMedium": "string",
  "utmSource": "string",
  "utmTerm": "string"
}
```

<h3 id="firebasedynamiclinksinstallattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetIosPostInstallAttributionResponse](#schemagetiospostinstallattributionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedynamiclinks.reopenAttribution

<a id="opIdfirebasedynamiclinks.reopenAttribution"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/reopenAttribution \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bundleId": "string",
    "requestedLink": "string",
    "sdkVersion": "string"
  }'
```

`POST /v1/reopenAttribution`

Get iOS reopen attribution for app universal link open deeplinking.

> Body parameter

```json
{
  "bundleId": "string",
  "requestedLink": "string",
  "sdkVersion": "string"
}
```

<h3 id="firebasedynamiclinksreopenattribution-parameters">Parameters</h3>

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
|body|body|[GetIosReopenAttributionRequest](#schemagetiosreopenattributionrequest)|false|none|
|» bundleId|body|string|false|APP bundle ID.|
|» requestedLink|body|string|false|FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/|
|» sdkVersion|body|string|false|Google SDK version. Version takes the form "$major.$minor.$patch"|

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
  "deepLink": "string",
  "invitationId": "string",
  "iosMinAppVersion": "string",
  "resolvedLink": "string",
  "utmCampaign": "string",
  "utmContent": "string",
  "utmMedium": "string",
  "utmSource": "string",
  "utmTerm": "string"
}
```

<h3 id="firebasedynamiclinksreopenattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetIosReopenAttributionResponse](#schemagetiosreopenattributionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedynamiclinks.getLinkStats

<a id="opIdfirebasedynamiclinks.getLinkStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/linkStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{dynamicLink}/linkStats`

Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.

<h3 id="firebasedynamiclinksgetlinkstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dynamicLink|path|string|true|Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz|
|durationDays|query|string|false|The span of time requested in days.|
|sdkVersion|query|string|false|Google SDK version. Version takes the form "$major.$minor.$patch"|
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
  "linkEventStats": [
    {
      "count": "string",
      "event": "DYNAMIC_LINK_EVENT_UNSPECIFIED",
      "platform": "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
    }
  ]
}
```

<h3 id="firebasedynamiclinksgetlinkstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DynamicLinkStats](#schemadynamiclinkstats)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

# Schemas

<h2 id="tocS_AnalyticsInfo">AnalyticsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsinfo"></a>
<a id="schema_AnalyticsInfo"></a>
<a id="tocSanalyticsinfo"></a>
<a id="tocsanalyticsinfo"></a>

```json
{
  "googlePlayAnalytics": {
    "gclid": "string",
    "utmCampaign": "string",
    "utmContent": "string",
    "utmMedium": "string",
    "utmSource": "string",
    "utmTerm": "string"
  },
  "itunesConnectAnalytics": {
    "at": "string",
    "ct": "string",
    "mt": "string",
    "pt": "string"
  }
}
```

Tracking parameters supported by Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googlePlayAnalytics|[GooglePlayAnalytics](#schemagoogleplayanalytics)|false|none|Google Play Campaign Measurements.|
|itunesConnectAnalytics|[ITunesConnectAnalytics](#schemaitunesconnectanalytics)|false|none|iTunes Connect App Analytics.|

<h2 id="tocS_AndroidInfo">AndroidInfo</h2>
<!-- backwards compatibility -->
<a id="schemaandroidinfo"></a>
<a id="schema_AndroidInfo"></a>
<a id="tocSandroidinfo"></a>
<a id="tocsandroidinfo"></a>

```json
{
  "androidFallbackLink": "string",
  "androidLink": "string",
  "androidMinPackageVersionCode": "string",
  "androidPackageName": "string"
}
```

Android related attributes to the Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidFallbackLink|string|false|none|Link to open on Android if the app is not installed.|
|androidLink|string|false|none|If specified, this overrides the ‘link’ parameter on Android.|
|androidMinPackageVersionCode|string|false|none|Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store.|
|androidPackageName|string|false|none|Android package name of the app.|

<h2 id="tocS_CreateManagedShortLinkRequest">CreateManagedShortLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanagedshortlinkrequest"></a>
<a id="schema_CreateManagedShortLinkRequest"></a>
<a id="tocScreatemanagedshortlinkrequest"></a>
<a id="tocscreatemanagedshortlinkrequest"></a>

```json
{
  "dynamicLinkInfo": {
    "analyticsInfo": {
      "googlePlayAnalytics": {
        "gclid": "string",
        "utmCampaign": "string",
        "utmContent": "string",
        "utmMedium": "string",
        "utmSource": "string",
        "utmTerm": "string"
      },
      "itunesConnectAnalytics": {
        "at": "string",
        "ct": "string",
        "mt": "string",
        "pt": "string"
      }
    },
    "androidInfo": {
      "androidFallbackLink": "string",
      "androidLink": "string",
      "androidMinPackageVersionCode": "string",
      "androidPackageName": "string"
    },
    "desktopInfo": {
      "desktopFallbackLink": "string"
    },
    "domainUriPrefix": "string",
    "dynamicLinkDomain": "string",
    "iosInfo": {
      "iosAppStoreId": "string",
      "iosBundleId": "string",
      "iosCustomScheme": "string",
      "iosFallbackLink": "string",
      "iosIpadBundleId": "string",
      "iosIpadFallbackLink": "string",
      "iosMinimumVersion": "string"
    },
    "link": "string",
    "navigationInfo": {
      "enableForcedRedirect": true
    },
    "socialMetaTagInfo": {
      "socialDescription": "string",
      "socialImageLink": "string",
      "socialTitle": "string"
    }
  },
  "longDynamicLink": "string",
  "name": "string",
  "sdkVersion": "string",
  "suffix": {
    "customSuffix": "string",
    "option": "OPTION_UNSPECIFIED"
  }
}
```

Request to create a managed Short Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicLinkInfo|[DynamicLinkInfo](#schemadynamiclinkinfo)|false|none|Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|longDynamicLink|string|false|none|Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|name|string|false|none|Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked.|
|sdkVersion|string|false|none|Google SDK version. Version takes the form "$major.$minor.$patch"|
|suffix|[Suffix](#schemasuffix)|false|none|Short Dynamic Link suffix. Optional.|

<h2 id="tocS_CreateManagedShortLinkResponse">CreateManagedShortLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanagedshortlinkresponse"></a>
<a id="schema_CreateManagedShortLinkResponse"></a>
<a id="tocScreatemanagedshortlinkresponse"></a>
<a id="tocscreatemanagedshortlinkresponse"></a>

```json
{
  "managedShortLink": {
    "creationTime": "string",
    "flaggedAttribute": [
      "UNSPECIFIED_ATTRIBUTE"
    ],
    "info": {
      "analyticsInfo": {
        "googlePlayAnalytics": {
          "gclid": "string",
          "utmCampaign": "string",
          "utmContent": "string",
          "utmMedium": "string",
          "utmSource": "string",
          "utmTerm": "string"
        },
        "itunesConnectAnalytics": {
          "at": "string",
          "ct": "string",
          "mt": "string",
          "pt": "string"
        }
      },
      "androidInfo": {
        "androidFallbackLink": "string",
        "androidLink": "string",
        "androidMinPackageVersionCode": "string",
        "androidPackageName": "string"
      },
      "desktopInfo": {
        "desktopFallbackLink": "string"
      },
      "domainUriPrefix": "string",
      "dynamicLinkDomain": "string",
      "iosInfo": {
        "iosAppStoreId": "string",
        "iosBundleId": "string",
        "iosCustomScheme": "string",
        "iosFallbackLink": "string",
        "iosIpadBundleId": "string",
        "iosIpadFallbackLink": "string",
        "iosMinimumVersion": "string"
      },
      "link": "string",
      "navigationInfo": {
        "enableForcedRedirect": true
      },
      "socialMetaTagInfo": {
        "socialDescription": "string",
        "socialImageLink": "string",
        "socialTitle": "string"
      }
    },
    "link": "string",
    "linkName": "string",
    "visibility": "UNSPECIFIED_VISIBILITY"
  },
  "previewLink": "string",
  "warning": [
    {
      "warningCode": "CODE_UNSPECIFIED",
      "warningDocumentLink": "string",
      "warningMessage": "string"
    }
  ]
}
```

Response to create a short Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedShortLink|[ManagedShortLink](#schemamanagedshortlink)|false|none|Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz|
|previewLink|string|false|none|Preview link to show the link flow chart. (debug info.)|
|warning|[[DynamicLinkWarning](#schemadynamiclinkwarning)]|false|none|Information about potential warnings on link creation.|

<h2 id="tocS_CreateShortDynamicLinkRequest">CreateShortDynamicLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateshortdynamiclinkrequest"></a>
<a id="schema_CreateShortDynamicLinkRequest"></a>
<a id="tocScreateshortdynamiclinkrequest"></a>
<a id="tocscreateshortdynamiclinkrequest"></a>

```json
{
  "dynamicLinkInfo": {
    "analyticsInfo": {
      "googlePlayAnalytics": {
        "gclid": "string",
        "utmCampaign": "string",
        "utmContent": "string",
        "utmMedium": "string",
        "utmSource": "string",
        "utmTerm": "string"
      },
      "itunesConnectAnalytics": {
        "at": "string",
        "ct": "string",
        "mt": "string",
        "pt": "string"
      }
    },
    "androidInfo": {
      "androidFallbackLink": "string",
      "androidLink": "string",
      "androidMinPackageVersionCode": "string",
      "androidPackageName": "string"
    },
    "desktopInfo": {
      "desktopFallbackLink": "string"
    },
    "domainUriPrefix": "string",
    "dynamicLinkDomain": "string",
    "iosInfo": {
      "iosAppStoreId": "string",
      "iosBundleId": "string",
      "iosCustomScheme": "string",
      "iosFallbackLink": "string",
      "iosIpadBundleId": "string",
      "iosIpadFallbackLink": "string",
      "iosMinimumVersion": "string"
    },
    "link": "string",
    "navigationInfo": {
      "enableForcedRedirect": true
    },
    "socialMetaTagInfo": {
      "socialDescription": "string",
      "socialImageLink": "string",
      "socialTitle": "string"
    }
  },
  "longDynamicLink": "string",
  "sdkVersion": "string",
  "suffix": {
    "customSuffix": "string",
    "option": "OPTION_UNSPECIFIED"
  }
}
```

Request to create a short Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicLinkInfo|[DynamicLinkInfo](#schemadynamiclinkinfo)|false|none|Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|longDynamicLink|string|false|none|Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).|
|sdkVersion|string|false|none|Google SDK version. Version takes the form "$major.$minor.$patch"|
|suffix|[Suffix](#schemasuffix)|false|none|Short Dynamic Link suffix. Optional.|

<h2 id="tocS_CreateShortDynamicLinkResponse">CreateShortDynamicLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateshortdynamiclinkresponse"></a>
<a id="schema_CreateShortDynamicLinkResponse"></a>
<a id="tocScreateshortdynamiclinkresponse"></a>
<a id="tocscreateshortdynamiclinkresponse"></a>

```json
{
  "previewLink": "string",
  "shortLink": "string",
  "warning": [
    {
      "warningCode": "CODE_UNSPECIFIED",
      "warningDocumentLink": "string",
      "warningMessage": "string"
    }
  ]
}
```

Response to create a short Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previewLink|string|false|none|Preview link to show the link flow chart. (debug info.)|
|shortLink|string|false|none|Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz|
|warning|[[DynamicLinkWarning](#schemadynamiclinkwarning)]|false|none|Information about potential warnings on link creation.|

<h2 id="tocS_DesktopInfo">DesktopInfo</h2>
<!-- backwards compatibility -->
<a id="schemadesktopinfo"></a>
<a id="schema_DesktopInfo"></a>
<a id="tocSdesktopinfo"></a>
<a id="tocsdesktopinfo"></a>

```json
{
  "desktopFallbackLink": "string"
}
```

Desktop related attributes to the Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desktopFallbackLink|string|false|none|Link to open on desktop.|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "deviceModelName": "string",
  "languageCode": "string",
  "languageCodeFromWebview": "string",
  "languageCodeRaw": "string",
  "screenResolutionHeight": "string",
  "screenResolutionWidth": "string",
  "timezone": "string"
}
```

Signals associated with the device making the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceModelName|string|false|none|Device model name.|
|languageCode|string|false|none|Device language code setting.|
|languageCodeFromWebview|string|false|none|Device language code setting obtained by executing JavaScript code in WebView.|
|languageCodeRaw|string|false|none|Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS.|
|screenResolutionHeight|string(int64)|false|none|Device display resolution height.|
|screenResolutionWidth|string(int64)|false|none|Device display resolution width.|
|timezone|string|false|none|Device timezone setting.|

<h2 id="tocS_DynamicLinkEventStat">DynamicLinkEventStat</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclinkeventstat"></a>
<a id="schema_DynamicLinkEventStat"></a>
<a id="tocSdynamiclinkeventstat"></a>
<a id="tocsdynamiclinkeventstat"></a>

```json
{
  "count": "string",
  "event": "DYNAMIC_LINK_EVENT_UNSPECIFIED",
  "platform": "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
}
```

Dynamic Link event stat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of times this event occurred.|
|event|string|false|none|Link event.|
|platform|string|false|none|Requested platform.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|DYNAMIC_LINK_EVENT_UNSPECIFIED|
|event|CLICK|
|event|REDIRECT|
|event|APP_INSTALL|
|event|APP_FIRST_OPEN|
|event|APP_RE_OPEN|
|platform|DYNAMIC_LINK_PLATFORM_UNSPECIFIED|
|platform|ANDROID|
|platform|IOS|
|platform|DESKTOP|
|platform|OTHER|

<h2 id="tocS_DynamicLinkInfo">DynamicLinkInfo</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclinkinfo"></a>
<a id="schema_DynamicLinkInfo"></a>
<a id="tocSdynamiclinkinfo"></a>
<a id="tocsdynamiclinkinfo"></a>

```json
{
  "analyticsInfo": {
    "googlePlayAnalytics": {
      "gclid": "string",
      "utmCampaign": "string",
      "utmContent": "string",
      "utmMedium": "string",
      "utmSource": "string",
      "utmTerm": "string"
    },
    "itunesConnectAnalytics": {
      "at": "string",
      "ct": "string",
      "mt": "string",
      "pt": "string"
    }
  },
  "androidInfo": {
    "androidFallbackLink": "string",
    "androidLink": "string",
    "androidMinPackageVersionCode": "string",
    "androidPackageName": "string"
  },
  "desktopInfo": {
    "desktopFallbackLink": "string"
  },
  "domainUriPrefix": "string",
  "dynamicLinkDomain": "string",
  "iosInfo": {
    "iosAppStoreId": "string",
    "iosBundleId": "string",
    "iosCustomScheme": "string",
    "iosFallbackLink": "string",
    "iosIpadBundleId": "string",
    "iosIpadFallbackLink": "string",
    "iosMinimumVersion": "string"
  },
  "link": "string",
  "navigationInfo": {
    "enableForcedRedirect": true
  },
  "socialMetaTagInfo": {
    "socialDescription": "string",
    "socialImageLink": "string",
    "socialTitle": "string"
  }
}
```

Information about a Dynamic Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsInfo|[AnalyticsInfo](#schemaanalyticsinfo)|false|none|Parameters used for tracking. See all tracking parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).|
|androidInfo|[AndroidInfo](#schemaandroidinfo)|false|none|Android related information. See Android related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).|
|desktopInfo|[DesktopInfo](#schemadesktopinfo)|false|none|Desktop related information. See desktop related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).|
|domainUriPrefix|string|false|none|E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing|
|dynamicLinkDomain|string|false|none|Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.|
|iosInfo|[IosInfo](#schemaiosinfo)|false|none|iOS related information. See iOS related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).|
|link|string|false|none|The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.|
|navigationInfo|[NavigationInfo](#schemanavigationinfo)|false|none|Information of navigation behavior of a Firebase Dynamic Links.|
|socialMetaTagInfo|[SocialMetaTagInfo](#schemasocialmetataginfo)|false|none|Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.|

<h2 id="tocS_DynamicLinkStats">DynamicLinkStats</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclinkstats"></a>
<a id="schema_DynamicLinkStats"></a>
<a id="tocSdynamiclinkstats"></a>
<a id="tocsdynamiclinkstats"></a>

```json
{
  "linkEventStats": [
    {
      "count": "string",
      "event": "DYNAMIC_LINK_EVENT_UNSPECIFIED",
      "platform": "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
    }
  ]
}
```

Analytics stats of a Dynamic Link for a given timeframe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkEventStats|[[DynamicLinkEventStat](#schemadynamiclinkeventstat)]|false|none|Dynamic Link event stats.|

<h2 id="tocS_DynamicLinkWarning">DynamicLinkWarning</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclinkwarning"></a>
<a id="schema_DynamicLinkWarning"></a>
<a id="tocSdynamiclinkwarning"></a>
<a id="tocsdynamiclinkwarning"></a>

```json
{
  "warningCode": "CODE_UNSPECIFIED",
  "warningDocumentLink": "string",
  "warningMessage": "string"
}
```

Dynamic Links warning messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warningCode|string|false|none|The warning code.|
|warningDocumentLink|string|false|none|The document describing the warning, and helps resolve.|
|warningMessage|string|false|none|The warning message to help developers improve their requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|warningCode|CODE_UNSPECIFIED|
|warningCode|NOT_IN_PROJECT_ANDROID_PACKAGE_NAME|
|warningCode|NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION|
|warningCode|UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION|
|warningCode|NOT_URI_ANDROID_LINK|
|warningCode|UNNECESSARY_ANDROID_LINK|
|warningCode|NOT_URI_ANDROID_FALLBACK_LINK|
|warningCode|BAD_URI_SCHEME_ANDROID_FALLBACK_LINK|
|warningCode|NOT_IN_PROJECT_IOS_BUNDLE_ID|
|warningCode|NOT_IN_PROJECT_IPAD_BUNDLE_ID|
|warningCode|UNNECESSARY_IOS_URL_SCHEME|
|warningCode|NOT_NUMERIC_IOS_APP_STORE_ID|
|warningCode|UNNECESSARY_IOS_APP_STORE_ID|
|warningCode|NOT_URI_IOS_FALLBACK_LINK|
|warningCode|BAD_URI_SCHEME_IOS_FALLBACK_LINK|
|warningCode|NOT_URI_IPAD_FALLBACK_LINK|
|warningCode|BAD_URI_SCHEME_IPAD_FALLBACK_LINK|
|warningCode|BAD_DEBUG_PARAM|
|warningCode|BAD_AD_PARAM|
|warningCode|DEPRECATED_PARAM|
|warningCode|UNRECOGNIZED_PARAM|
|warningCode|TOO_LONG_PARAM|
|warningCode|NOT_URI_SOCIAL_IMAGE_LINK|
|warningCode|BAD_URI_SCHEME_SOCIAL_IMAGE_LINK|
|warningCode|NOT_URI_SOCIAL_URL|
|warningCode|BAD_URI_SCHEME_SOCIAL_URL|
|warningCode|LINK_LENGTH_TOO_LONG|
|warningCode|LINK_WITH_FRAGMENTS|
|warningCode|NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID|

<h2 id="tocS_GetIosPostInstallAttributionRequest">GetIosPostInstallAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiospostinstallattributionrequest"></a>
<a id="schema_GetIosPostInstallAttributionRequest"></a>
<a id="tocSgetiospostinstallattributionrequest"></a>
<a id="tocsgetiospostinstallattributionrequest"></a>

```json
{
  "appInstallationTime": "string",
  "bundleId": "string",
  "device": {
    "deviceModelName": "string",
    "languageCode": "string",
    "languageCodeFromWebview": "string",
    "languageCodeRaw": "string",
    "screenResolutionHeight": "string",
    "screenResolutionWidth": "string",
    "timezone": "string"
  },
  "iosVersion": "string",
  "retrievalMethod": "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
  "sdkVersion": "string",
  "uniqueMatchLinkToCheck": "string",
  "visualStyle": "UNKNOWN_VISUAL_STYLE"
}
```

Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInstallationTime|string(int64)|false|none|App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.|
|bundleId|string|false|none|APP bundle ID.|
|device|[DeviceInfo](#schemadeviceinfo)|false|none|Device information.|
|iosVersion|string|false|none|iOS version, ie: 9.3.5. Consider adding "build".|
|retrievalMethod|string|false|none|App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.|
|sdkVersion|string|false|none|Google SDK version. Version takes the form "$major.$minor.$patch"|
|uniqueMatchLinkToCheck|string|false|none|Possible unique matched link that server need to check before performing fingerprint match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.|
|visualStyle|string|false|none|Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.|

#### Enumerated Values

|Property|Value|
|---|---|
|retrievalMethod|UNKNOWN_PAYLOAD_RETRIEVAL_METHOD|
|retrievalMethod|IMPLICIT_WEAK_MATCH|
|retrievalMethod|EXPLICIT_WEAK_MATCH|
|retrievalMethod|EXPLICIT_STRONG_AFTER_WEAK_MATCH|
|visualStyle|UNKNOWN_VISUAL_STYLE|
|visualStyle|DEFAULT_STYLE|
|visualStyle|CUSTOM_STYLE|

<h2 id="tocS_GetIosPostInstallAttributionResponse">GetIosPostInstallAttributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetiospostinstallattributionresponse"></a>
<a id="schema_GetIosPostInstallAttributionResponse"></a>
<a id="tocSgetiospostinstallattributionresponse"></a>
<a id="tocsgetiospostinstallattributionresponse"></a>

```json
{
  "appMinimumVersion": "string",
  "attributionConfidence": "UNKNOWN_ATTRIBUTION_CONFIDENCE",
  "deepLink": "string",
  "externalBrowserDestinationLink": "string",
  "fallbackLink": "string",
  "invitationId": "string",
  "isStrongMatchExecutable": true,
  "matchMessage": "string",
  "requestIpVersion": "UNKNOWN_IP_VERSION",
  "requestedLink": "string",
  "resolvedLink": "string",
  "utmCampaign": "string",
  "utmContent": "string",
  "utmMedium": "string",
  "utmSource": "string",
  "utmTerm": "string"
}
```

Response for iSDK to execute strong match flow for post-install attribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appMinimumVersion|string|false|none|The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this.|
|attributionConfidence|string|false|none|The confidence of the returned attribution.|
|deepLink|string|false|none|The deep-link attributed post-install via one of several techniques (fingerprint, copy unique).|
|externalBrowserDestinationLink|string|false|none|User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com|
|fallbackLink|string|false|none|The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter).|
|invitationId|string|false|none|Invitation ID attributed post-install via one of several techniques (fingerprint, copy unique).|
|isStrongMatchExecutable|boolean|false|none|Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false.|
|matchMessage|string|false|none|Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible.|
|requestIpVersion|string|false|none|Which IP version the request was made from.|
|requestedLink|string|false|none|Entire FDL (short or long) attributed post-install via one of several techniques (fingerprint, copy unique).|
|resolvedLink|string|false|none|The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign\|medium\|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies >1 fallback links).|
|utmCampaign|string|false|none|Scion campaign value to be propagated by iSDK to Scion at post-install.|
|utmContent|string|false|none|Scion content value to be propagated by iSDK to Scion at app-reopen.|
|utmMedium|string|false|none|Scion medium value to be propagated by iSDK to Scion at post-install.|
|utmSource|string|false|none|Scion source value to be propagated by iSDK to Scion at post-install.|
|utmTerm|string|false|none|Scion term value to be propagated by iSDK to Scion at app-reopen.|

#### Enumerated Values

|Property|Value|
|---|---|
|attributionConfidence|UNKNOWN_ATTRIBUTION_CONFIDENCE|
|attributionConfidence|WEAK|
|attributionConfidence|DEFAULT|
|attributionConfidence|UNIQUE|
|requestIpVersion|UNKNOWN_IP_VERSION|
|requestIpVersion|IP_V4|
|requestIpVersion|IP_V6|

<h2 id="tocS_GetIosReopenAttributionRequest">GetIosReopenAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiosreopenattributionrequest"></a>
<a id="schema_GetIosReopenAttributionRequest"></a>
<a id="tocSgetiosreopenattributionrequest"></a>
<a id="tocsgetiosreopenattributionrequest"></a>

```json
{
  "bundleId": "string",
  "requestedLink": "string",
  "sdkVersion": "string"
}
```

Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|string|false|none|APP bundle ID.|
|requestedLink|string|false|none|FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/|
|sdkVersion|string|false|none|Google SDK version. Version takes the form "$major.$minor.$patch"|

<h2 id="tocS_GetIosReopenAttributionResponse">GetIosReopenAttributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetiosreopenattributionresponse"></a>
<a id="schema_GetIosReopenAttributionResponse"></a>
<a id="tocSgetiosreopenattributionresponse"></a>
<a id="tocsgetiosreopenattributionresponse"></a>

```json
{
  "deepLink": "string",
  "invitationId": "string",
  "iosMinAppVersion": "string",
  "resolvedLink": "string",
  "utmCampaign": "string",
  "utmContent": "string",
  "utmMedium": "string",
  "utmSource": "string",
  "utmTerm": "string"
}
```

Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deepLink|string|false|none|The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links.|
|invitationId|string|false|none|Optional invitation ID, for only invite typed requested FDL links.|
|iosMinAppVersion|string|false|none|FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9.|
|resolvedLink|string|false|none|The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long.|
|utmCampaign|string|false|none|Scion campaign value to be propagated by iSDK to Scion at app-reopen.|
|utmContent|string|false|none|Scion content value to be propagated by iSDK to Scion at app-reopen.|
|utmMedium|string|false|none|Scion medium value to be propagated by iSDK to Scion at app-reopen.|
|utmSource|string|false|none|Scion source value to be propagated by iSDK to Scion at app-reopen.|
|utmTerm|string|false|none|Scion term value to be propagated by iSDK to Scion at app-reopen.|

<h2 id="tocS_GooglePlayAnalytics">GooglePlayAnalytics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleplayanalytics"></a>
<a id="schema_GooglePlayAnalytics"></a>
<a id="tocSgoogleplayanalytics"></a>
<a id="tocsgoogleplayanalytics"></a>

```json
{
  "gclid": "string",
  "utmCampaign": "string",
  "utmContent": "string",
  "utmMedium": "string",
  "utmSource": "string",
  "utmTerm": "string"
}
```

Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gclid|string|false|none|Deprecated; FDL SDK does not process nor log it.|
|utmCampaign|string|false|none|Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign.|
|utmContent|string|false|none|Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL.|
|utmMedium|string|false|none|Campaign medium; used to identify a medium such as email or cost-per-click.|
|utmSource|string|false|none|Campaign source; used to identify a search engine, newsletter, or other source.|
|utmTerm|string|false|none|Campaign term; used with paid search to supply the keywords for ads.|

<h2 id="tocS_ITunesConnectAnalytics">ITunesConnectAnalytics</h2>
<!-- backwards compatibility -->
<a id="schemaitunesconnectanalytics"></a>
<a id="schema_ITunesConnectAnalytics"></a>
<a id="tocSitunesconnectanalytics"></a>
<a id="tocsitunesconnectanalytics"></a>

```json
{
  "at": "string",
  "ct": "string",
  "mt": "string",
  "pt": "string"
}
```

Parameters for iTunes Connect App Analytics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at|string|false|none|Affiliate token used to create affiliate-coded links.|
|ct|string|false|none|Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign.|
|mt|string|false|none|iTune media types, including music, podcasts, audiobooks and so on.|
|pt|string|false|none|Provider token that enables analytics for Dynamic Links from within iTunes Connect.|

<h2 id="tocS_IosInfo">IosInfo</h2>
<!-- backwards compatibility -->
<a id="schemaiosinfo"></a>
<a id="schema_IosInfo"></a>
<a id="tocSiosinfo"></a>
<a id="tocsiosinfo"></a>

```json
{
  "iosAppStoreId": "string",
  "iosBundleId": "string",
  "iosCustomScheme": "string",
  "iosFallbackLink": "string",
  "iosIpadBundleId": "string",
  "iosIpadFallbackLink": "string",
  "iosMinimumVersion": "string"
}
```

iOS related attributes to the Dynamic Link..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iosAppStoreId|string|false|none|iOS App Store ID.|
|iosBundleId|string|false|none|iOS bundle ID of the app.|
|iosCustomScheme|string|false|none|Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param.|
|iosFallbackLink|string|false|none|Link to open on iOS if the app is not installed.|
|iosIpadBundleId|string|false|none|iPad bundle ID of the app.|
|iosIpadFallbackLink|string|false|none|If specified, this overrides the ios_fallback_link value on iPads.|
|iosMinimumVersion|string|false|none|iOS minimum version.|

<h2 id="tocS_ManagedShortLink">ManagedShortLink</h2>
<!-- backwards compatibility -->
<a id="schemamanagedshortlink"></a>
<a id="schema_ManagedShortLink"></a>
<a id="tocSmanagedshortlink"></a>
<a id="tocsmanagedshortlink"></a>

```json
{
  "creationTime": "string",
  "flaggedAttribute": [
    "UNSPECIFIED_ATTRIBUTE"
  ],
  "info": {
    "analyticsInfo": {
      "googlePlayAnalytics": {
        "gclid": "string",
        "utmCampaign": "string",
        "utmContent": "string",
        "utmMedium": "string",
        "utmSource": "string",
        "utmTerm": "string"
      },
      "itunesConnectAnalytics": {
        "at": "string",
        "ct": "string",
        "mt": "string",
        "pt": "string"
      }
    },
    "androidInfo": {
      "androidFallbackLink": "string",
      "androidLink": "string",
      "androidMinPackageVersionCode": "string",
      "androidPackageName": "string"
    },
    "desktopInfo": {
      "desktopFallbackLink": "string"
    },
    "domainUriPrefix": "string",
    "dynamicLinkDomain": "string",
    "iosInfo": {
      "iosAppStoreId": "string",
      "iosBundleId": "string",
      "iosCustomScheme": "string",
      "iosFallbackLink": "string",
      "iosIpadBundleId": "string",
      "iosIpadFallbackLink": "string",
      "iosMinimumVersion": "string"
    },
    "link": "string",
    "navigationInfo": {
      "enableForcedRedirect": true
    },
    "socialMetaTagInfo": {
      "socialDescription": "string",
      "socialImageLink": "string",
      "socialTitle": "string"
    }
  },
  "link": "string",
  "linkName": "string",
  "visibility": "UNSPECIFIED_VISIBILITY"
}
```

Managed Short Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(google-datetime)|false|none|Creation timestamp of the short link.|
|flaggedAttribute|[string]|false|none|Attributes that have been flagged about this short url.|
|info|[DynamicLinkInfo](#schemadynamiclinkinfo)|false|none|Full Dyamic Link info|
|link|string|false|none|Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required.|
|linkName|string|false|none|Link name defined by the creator. Required.|
|visibility|string|false|none|Visibility status of link.|

#### Enumerated Values

|Property|Value|
|---|---|
|flaggedAttribute|UNSPECIFIED_ATTRIBUTE|
|flaggedAttribute|SPAM|
|visibility|UNSPECIFIED_VISIBILITY|
|visibility|UNARCHIVED|
|visibility|ARCHIVED|
|visibility|NEVER_SHOWN|

<h2 id="tocS_NavigationInfo">NavigationInfo</h2>
<!-- backwards compatibility -->
<a id="schemanavigationinfo"></a>
<a id="schema_NavigationInfo"></a>
<a id="tocSnavigationinfo"></a>
<a id="tocsnavigationinfo"></a>

```json
{
  "enableForcedRedirect": true
}
```

Information of navigation behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableForcedRedirect|boolean|false|none|If this option is on, FDL click will be forced to redirect rather than show an interstitial page.|

<h2 id="tocS_SocialMetaTagInfo">SocialMetaTagInfo</h2>
<!-- backwards compatibility -->
<a id="schemasocialmetataginfo"></a>
<a id="schema_SocialMetaTagInfo"></a>
<a id="tocSsocialmetataginfo"></a>
<a id="tocssocialmetataginfo"></a>

```json
{
  "socialDescription": "string",
  "socialImageLink": "string",
  "socialTitle": "string"
}
```

Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socialDescription|string|false|none|A short description of the link. Optional.|
|socialImageLink|string|false|none|An image url string. Optional.|
|socialTitle|string|false|none|Title to be displayed. Optional.|

<h2 id="tocS_Suffix">Suffix</h2>
<!-- backwards compatibility -->
<a id="schemasuffix"></a>
<a id="schema_Suffix"></a>
<a id="tocSsuffix"></a>
<a id="tocssuffix"></a>

```json
{
  "customSuffix": "string",
  "option": "OPTION_UNSPECIFIED"
}
```

Short Dynamic Link suffix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customSuffix|string|false|none|Only applies to Option.CUSTOM.|
|option|string|false|none|Suffix option.|

#### Enumerated Values

|Property|Value|
|---|---|
|option|OPTION_UNSPECIFIED|
|option|UNGUESSABLE|
|option|SHORT|
|option|CUSTOM|
