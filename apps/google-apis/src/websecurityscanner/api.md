<h1 id="web-security-scanner-api">Web Security Scanner API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Scans your Compute and App Engine apps for common web vulnerabilities.

Base URLs:

* <a href="https://websecurityscanner.googleapis.com/">https://websecurityscanner.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="web-security-scanner-api-projects">projects</h1>

## websecurityscanner.projects.scanConfigs.scanRuns.findings.get

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.findings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets a Finding.

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.|
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
  "body": "string",
  "description": "string",
  "finalUrl": "string",
  "findingType": "string",
  "form": {
    "actionUri": "string",
    "fields": [
      "string"
    ]
  },
  "frameUrl": "string",
  "fuzzedUrl": "string",
  "httpMethod": "string",
  "name": "string",
  "outdatedLibrary": {
    "learnMoreUrls": [
      "string"
    ],
    "libraryName": "string",
    "version": "string"
  },
  "reproductionUrl": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "trackingId": "string",
  "violatingResource": {
    "contentType": "string",
    "resourceUrl": "string"
  },
  "vulnerableHeaders": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "missingHeaders": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "vulnerableParameters": {
    "parameterNames": [
      "string"
    ]
  },
  "xss": {
    "errorMessage": "string",
    "stackTraces": [
      "string"
    ]
  },
  "xxe": {
    "payloadLocation": "LOCATION_UNSPECIFIED",
    "payloadValue": "string"
  }
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Finding](#schemafinding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.delete

<a id="opIdwebsecurityscanner.projects.scanConfigs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes an existing ScanConfig and its child resources.

<h3 id="websecurityscannerprojectsscanconfigsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.|
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

<h3 id="websecurityscannerprojectsscanconfigsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.patch

<a id="opIdwebsecurityscanner.projects.scanConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authentication": {
      "customAccount": {
        "loginUrl": "string",
        "password": "string",
        "username": "string"
      },
      "googleAccount": {
        "password": "string",
        "username": "string"
      },
      "iapCredential": {
        "iapTestServiceAccountInfo": {
          "targetAudienceClientId": "string"
        }
      }
    },
    "blacklistPatterns": [
      "string"
    ],
    "displayName": "string",
    "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
    "ignoreHttpStatusErrors": true,
    "latestRun": {
      "endTime": "string",
      "errorTrace": {
        "code": "CODE_UNSPECIFIED",
        "mostCommonHttpErrorCode": 0,
        "scanConfigError": {
          "code": "CODE_UNSPECIFIED",
          "fieldName": "string"
        }
      },
      "executionState": "EXECUTION_STATE_UNSPECIFIED",
      "hasVulnerabilities": true,
      "name": "string",
      "progressPercent": 0,
      "resultState": "RESULT_STATE_UNSPECIFIED",
      "startTime": "string",
      "urlsCrawledCount": "string",
      "urlsTestedCount": "string",
      "warningTraces": [
        {
          "code": "CODE_UNSPECIFIED"
        }
      ]
    },
    "managedScan": true,
    "maxQps": 0,
    "name": "string",
    "riskLevel": "RISK_LEVEL_UNSPECIFIED",
    "schedule": {
      "intervalDurationDays": 0,
      "scheduleTime": "string"
    },
    "startingUrls": [
      "string"
    ],
    "staticIpScan": true,
    "targetPlatforms": [
      "TARGET_PLATFORM_UNSPECIFIED"
    ],
    "userAgent": "USER_AGENT_UNSPECIFIED"
  }'
```

`PATCH /v1beta/{name}`

Updates a ScanConfig. This method support partial update of a ScanConfig.

> Body parameter

```json
{
  "authentication": {
    "customAccount": {
      "loginUrl": "string",
      "password": "string",
      "username": "string"
    },
    "googleAccount": {
      "password": "string",
      "username": "string"
    },
    "iapCredential": {
      "iapTestServiceAccountInfo": {
        "targetAudienceClientId": "string"
      }
    }
  },
  "blacklistPatterns": [
    "string"
  ],
  "displayName": "string",
  "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
  "ignoreHttpStatusErrors": true,
  "latestRun": {
    "endTime": "string",
    "errorTrace": {
      "code": "CODE_UNSPECIFIED",
      "mostCommonHttpErrorCode": 0,
      "scanConfigError": {
        "code": "CODE_UNSPECIFIED",
        "fieldName": "string"
      }
    },
    "executionState": "EXECUTION_STATE_UNSPECIFIED",
    "hasVulnerabilities": true,
    "name": "string",
    "progressPercent": 0,
    "resultState": "RESULT_STATE_UNSPECIFIED",
    "startTime": "string",
    "urlsCrawledCount": "string",
    "urlsTestedCount": "string",
    "warningTraces": [
      {
        "code": "CODE_UNSPECIFIED"
      }
    ]
  },
  "managedScan": true,
  "maxQps": 0,
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "schedule": {
    "intervalDurationDays": 0,
    "scheduleTime": "string"
  },
  "startingUrls": [
    "string"
  ],
  "staticIpScan": true,
  "targetPlatforms": [
    "TARGET_PLATFORM_UNSPECIFIED"
  ],
  "userAgent": "USER_AGENT_UNSPECIFIED"
}
```

<h3 id="websecurityscannerprojectsscanconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.|
|updateMask|query|string|false|Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[ScanConfig](#schemascanconfig)|false|none|
|» authentication|body|[Authentication](#schemaauthentication)|false|The authentication configuration. If specified, service will use the authentication configuration during scanning.|
|» blacklistPatterns|body|[string]|false|The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls|
|» displayName|body|string|false|Required. The user provided display name of the ScanConfig.|
|» exportToSecurityCommandCenter|body|string|false|Controls export of scan configurations and results to Security Command Center.|
|» ignoreHttpStatusErrors|body|boolean|false|Whether to keep scanning even if most requests return HTTP error codes.|
|» latestRun|body|[ScanRun](#schemascanrun)|false|Latest ScanRun if available.|
|» managedScan|body|boolean|false|Whether the scan config is managed by Web Security Scanner, output only.|
|» maxQps|body|integer(int32)|false|The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.|
|» name|body|string|false|The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.|
|» riskLevel|body|string|false|The risk level selected for the scan|
|» schedule|body|[Schedule](#schemaschedule)|false|The schedule of the ScanConfig.|
|» startingUrls|body|[string]|false|Required. The starting URLs from which the scanner finds site pages.|
|» staticIpScan|body|boolean|false|Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses.|
|» targetPlatforms|body|[string]|false|Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.|
|» userAgent|body|string|false|The user agent used during scanning.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» exportToSecurityCommandCenter|EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED|
|» exportToSecurityCommandCenter|ENABLED|
|» exportToSecurityCommandCenter|DISABLED|
|» riskLevel|RISK_LEVEL_UNSPECIFIED|
|» riskLevel|NORMAL|
|» riskLevel|LOW|
|» targetPlatforms|TARGET_PLATFORM_UNSPECIFIED|
|» targetPlatforms|APP_ENGINE|
|» targetPlatforms|COMPUTE|
|» targetPlatforms|CLOUD_RUN|
|» targetPlatforms|CLOUD_FUNCTIONS|
|» userAgent|USER_AGENT_UNSPECIFIED|
|» userAgent|CHROME_LINUX|
|» userAgent|CHROME_ANDROID|
|» userAgent|SAFARI_IPHONE|

> Example responses

> 200 Response

```json
{
  "authentication": {
    "customAccount": {
      "loginUrl": "string",
      "password": "string",
      "username": "string"
    },
    "googleAccount": {
      "password": "string",
      "username": "string"
    },
    "iapCredential": {
      "iapTestServiceAccountInfo": {
        "targetAudienceClientId": "string"
      }
    }
  },
  "blacklistPatterns": [
    "string"
  ],
  "displayName": "string",
  "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
  "ignoreHttpStatusErrors": true,
  "latestRun": {
    "endTime": "string",
    "errorTrace": {
      "code": "CODE_UNSPECIFIED",
      "mostCommonHttpErrorCode": 0,
      "scanConfigError": {
        "code": "CODE_UNSPECIFIED",
        "fieldName": "string"
      }
    },
    "executionState": "EXECUTION_STATE_UNSPECIFIED",
    "hasVulnerabilities": true,
    "name": "string",
    "progressPercent": 0,
    "resultState": "RESULT_STATE_UNSPECIFIED",
    "startTime": "string",
    "urlsCrawledCount": "string",
    "urlsTestedCount": "string",
    "warningTraces": [
      {
        "code": "CODE_UNSPECIFIED"
      }
    ]
  },
  "managedScan": true,
  "maxQps": 0,
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "schedule": {
    "intervalDurationDays": 0,
    "scheduleTime": "string"
  },
  "startingUrls": [
    "string"
  ],
  "staticIpScan": true,
  "targetPlatforms": [
    "TARGET_PLATFORM_UNSPECIFIED"
  ],
  "userAgent": "USER_AGENT_UNSPECIFIED"
}
```

<h3 id="websecurityscannerprojectsscanconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScanConfig](#schemascanconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.start

<a id="opIdwebsecurityscanner.projects.scanConfigs.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:start`

Start a ScanRun according to the given ScanConfig.

> Body parameter

```json
{}
```

<h3 id="websecurityscannerprojectsscanconfigsstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.|
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
|body|body|[StartScanRunRequest](#schemastartscanrunrequest)|false|none|

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
  "endTime": "string",
  "errorTrace": {
    "code": "CODE_UNSPECIFIED",
    "mostCommonHttpErrorCode": 0,
    "scanConfigError": {
      "code": "CODE_UNSPECIFIED",
      "fieldName": "string"
    }
  },
  "executionState": "EXECUTION_STATE_UNSPECIFIED",
  "hasVulnerabilities": true,
  "name": "string",
  "progressPercent": 0,
  "resultState": "RESULT_STATE_UNSPECIFIED",
  "startTime": "string",
  "urlsCrawledCount": "string",
  "urlsTestedCount": "string",
  "warningTraces": [
    {
      "code": "CODE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="websecurityscannerprojectsscanconfigsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScanRun](#schemascanrun)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.scanRuns.stop

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:stop`

Stops a ScanRun. The stopped ScanRun is returned.

> Body parameter

```json
{}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.|
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
|body|body|[StopScanRunRequest](#schemastopscanrunrequest)|false|none|

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
  "endTime": "string",
  "errorTrace": {
    "code": "CODE_UNSPECIFIED",
    "mostCommonHttpErrorCode": 0,
    "scanConfigError": {
      "code": "CODE_UNSPECIFIED",
      "fieldName": "string"
    }
  },
  "executionState": "EXECUTION_STATE_UNSPECIFIED",
  "hasVulnerabilities": true,
  "name": "string",
  "progressPercent": 0,
  "resultState": "RESULT_STATE_UNSPECIFIED",
  "startTime": "string",
  "urlsCrawledCount": "string",
  "urlsTestedCount": "string",
  "warningTraces": [
    {
      "code": "CODE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScanRun](#schemascanrun)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/crawledUrls \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/crawledUrls`

List CrawledUrls under a given ScanRun.

<h3 id="websecurityscannerprojectsscanconfigsscanrunscrawledurlslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.|
|pageSize|query|integer|false|The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.|
|pageToken|query|string|false|A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.|
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
  "crawledUrls": [
    {
      "body": "string",
      "httpMethod": "string",
      "url": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunscrawledurlslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCrawledUrlsResponse](#schemalistcrawledurlsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/findingTypeStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/findingTypeStats`

List all FindingTypeStats under a given ScanRun.

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.|
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
  "findingTypeStats": [
    {
      "findingCount": 0,
      "findingType": "string"
    }
  ]
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFindingTypeStatsResponse](#schemalistfindingtypestatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.scanRuns.findings.list

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.findings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/findings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/findings`

List Findings under a given ScanRun.

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.|
|filter|query|string|false|Required. The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='.|
|pageSize|query|integer|false|The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.|
|pageToken|query|string|false|A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.|
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
  "findings": [
    {
      "body": "string",
      "description": "string",
      "finalUrl": "string",
      "findingType": "string",
      "form": {
        "actionUri": "string",
        "fields": [
          "string"
        ]
      },
      "frameUrl": "string",
      "fuzzedUrl": "string",
      "httpMethod": "string",
      "name": "string",
      "outdatedLibrary": {
        "learnMoreUrls": [
          "string"
        ],
        "libraryName": "string",
        "version": "string"
      },
      "reproductionUrl": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "trackingId": "string",
      "violatingResource": {
        "contentType": "string",
        "resourceUrl": "string"
      },
      "vulnerableHeaders": {
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "missingHeaders": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "vulnerableParameters": {
        "parameterNames": [
          "string"
        ]
      },
      "xss": {
        "errorMessage": "string",
        "stackTraces": [
          "string"
        ]
      },
      "xxe": {
        "payloadLocation": "LOCATION_UNSPECIFIED",
        "payloadValue": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunsfindingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFindingsResponse](#schemalistfindingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.list

<a id="opIdwebsecurityscanner.projects.scanConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/scanConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/scanConfigs`

Lists ScanConfigs under a given project.

<h3 id="websecurityscannerprojectsscanconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.|
|pageSize|query|integer|false|The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.|
|pageToken|query|string|false|A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.|
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
  "scanConfigs": [
    {
      "authentication": {
        "customAccount": {
          "loginUrl": "string",
          "password": "string",
          "username": "string"
        },
        "googleAccount": {
          "password": "string",
          "username": "string"
        },
        "iapCredential": {
          "iapTestServiceAccountInfo": {
            "targetAudienceClientId": "string"
          }
        }
      },
      "blacklistPatterns": [
        "string"
      ],
      "displayName": "string",
      "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
      "ignoreHttpStatusErrors": true,
      "latestRun": {
        "endTime": "string",
        "errorTrace": {
          "code": "CODE_UNSPECIFIED",
          "mostCommonHttpErrorCode": 0,
          "scanConfigError": {
            "code": "CODE_UNSPECIFIED",
            "fieldName": "string"
          }
        },
        "executionState": "EXECUTION_STATE_UNSPECIFIED",
        "hasVulnerabilities": true,
        "name": "string",
        "progressPercent": 0,
        "resultState": "RESULT_STATE_UNSPECIFIED",
        "startTime": "string",
        "urlsCrawledCount": "string",
        "urlsTestedCount": "string",
        "warningTraces": [
          {
            "code": "CODE_UNSPECIFIED"
          }
        ]
      },
      "managedScan": true,
      "maxQps": 0,
      "name": "string",
      "riskLevel": "RISK_LEVEL_UNSPECIFIED",
      "schedule": {
        "intervalDurationDays": 0,
        "scheduleTime": "string"
      },
      "startingUrls": [
        "string"
      ],
      "staticIpScan": true,
      "targetPlatforms": [
        "TARGET_PLATFORM_UNSPECIFIED"
      ],
      "userAgent": "USER_AGENT_UNSPECIFIED"
    }
  ]
}
```

<h3 id="websecurityscannerprojectsscanconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScanConfigsResponse](#schemalistscanconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.create

<a id="opIdwebsecurityscanner.projects.scanConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/scanConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authentication": {
      "customAccount": {
        "loginUrl": "string",
        "password": "string",
        "username": "string"
      },
      "googleAccount": {
        "password": "string",
        "username": "string"
      },
      "iapCredential": {
        "iapTestServiceAccountInfo": {
          "targetAudienceClientId": "string"
        }
      }
    },
    "blacklistPatterns": [
      "string"
    ],
    "displayName": "string",
    "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
    "ignoreHttpStatusErrors": true,
    "latestRun": {
      "endTime": "string",
      "errorTrace": {
        "code": "CODE_UNSPECIFIED",
        "mostCommonHttpErrorCode": 0,
        "scanConfigError": {
          "code": "CODE_UNSPECIFIED",
          "fieldName": "string"
        }
      },
      "executionState": "EXECUTION_STATE_UNSPECIFIED",
      "hasVulnerabilities": true,
      "name": "string",
      "progressPercent": 0,
      "resultState": "RESULT_STATE_UNSPECIFIED",
      "startTime": "string",
      "urlsCrawledCount": "string",
      "urlsTestedCount": "string",
      "warningTraces": [
        {
          "code": "CODE_UNSPECIFIED"
        }
      ]
    },
    "managedScan": true,
    "maxQps": 0,
    "name": "string",
    "riskLevel": "RISK_LEVEL_UNSPECIFIED",
    "schedule": {
      "intervalDurationDays": 0,
      "scheduleTime": "string"
    },
    "startingUrls": [
      "string"
    ],
    "staticIpScan": true,
    "targetPlatforms": [
      "TARGET_PLATFORM_UNSPECIFIED"
    ],
    "userAgent": "USER_AGENT_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/scanConfigs`

Creates a new ScanConfig.

> Body parameter

```json
{
  "authentication": {
    "customAccount": {
      "loginUrl": "string",
      "password": "string",
      "username": "string"
    },
    "googleAccount": {
      "password": "string",
      "username": "string"
    },
    "iapCredential": {
      "iapTestServiceAccountInfo": {
        "targetAudienceClientId": "string"
      }
    }
  },
  "blacklistPatterns": [
    "string"
  ],
  "displayName": "string",
  "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
  "ignoreHttpStatusErrors": true,
  "latestRun": {
    "endTime": "string",
    "errorTrace": {
      "code": "CODE_UNSPECIFIED",
      "mostCommonHttpErrorCode": 0,
      "scanConfigError": {
        "code": "CODE_UNSPECIFIED",
        "fieldName": "string"
      }
    },
    "executionState": "EXECUTION_STATE_UNSPECIFIED",
    "hasVulnerabilities": true,
    "name": "string",
    "progressPercent": 0,
    "resultState": "RESULT_STATE_UNSPECIFIED",
    "startTime": "string",
    "urlsCrawledCount": "string",
    "urlsTestedCount": "string",
    "warningTraces": [
      {
        "code": "CODE_UNSPECIFIED"
      }
    ]
  },
  "managedScan": true,
  "maxQps": 0,
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "schedule": {
    "intervalDurationDays": 0,
    "scheduleTime": "string"
  },
  "startingUrls": [
    "string"
  ],
  "staticIpScan": true,
  "targetPlatforms": [
    "TARGET_PLATFORM_UNSPECIFIED"
  ],
  "userAgent": "USER_AGENT_UNSPECIFIED"
}
```

<h3 id="websecurityscannerprojectsscanconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.|
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
|body|body|[ScanConfig](#schemascanconfig)|false|none|
|» authentication|body|[Authentication](#schemaauthentication)|false|The authentication configuration. If specified, service will use the authentication configuration during scanning.|
|» blacklistPatterns|body|[string]|false|The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls|
|» displayName|body|string|false|Required. The user provided display name of the ScanConfig.|
|» exportToSecurityCommandCenter|body|string|false|Controls export of scan configurations and results to Security Command Center.|
|» ignoreHttpStatusErrors|body|boolean|false|Whether to keep scanning even if most requests return HTTP error codes.|
|» latestRun|body|[ScanRun](#schemascanrun)|false|Latest ScanRun if available.|
|» managedScan|body|boolean|false|Whether the scan config is managed by Web Security Scanner, output only.|
|» maxQps|body|integer(int32)|false|The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.|
|» name|body|string|false|The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.|
|» riskLevel|body|string|false|The risk level selected for the scan|
|» schedule|body|[Schedule](#schemaschedule)|false|The schedule of the ScanConfig.|
|» startingUrls|body|[string]|false|Required. The starting URLs from which the scanner finds site pages.|
|» staticIpScan|body|boolean|false|Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses.|
|» targetPlatforms|body|[string]|false|Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.|
|» userAgent|body|string|false|The user agent used during scanning.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» exportToSecurityCommandCenter|EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED|
|» exportToSecurityCommandCenter|ENABLED|
|» exportToSecurityCommandCenter|DISABLED|
|» riskLevel|RISK_LEVEL_UNSPECIFIED|
|» riskLevel|NORMAL|
|» riskLevel|LOW|
|» targetPlatforms|TARGET_PLATFORM_UNSPECIFIED|
|» targetPlatforms|APP_ENGINE|
|» targetPlatforms|COMPUTE|
|» targetPlatforms|CLOUD_RUN|
|» targetPlatforms|CLOUD_FUNCTIONS|
|» userAgent|USER_AGENT_UNSPECIFIED|
|» userAgent|CHROME_LINUX|
|» userAgent|CHROME_ANDROID|
|» userAgent|SAFARI_IPHONE|

> Example responses

> 200 Response

```json
{
  "authentication": {
    "customAccount": {
      "loginUrl": "string",
      "password": "string",
      "username": "string"
    },
    "googleAccount": {
      "password": "string",
      "username": "string"
    },
    "iapCredential": {
      "iapTestServiceAccountInfo": {
        "targetAudienceClientId": "string"
      }
    }
  },
  "blacklistPatterns": [
    "string"
  ],
  "displayName": "string",
  "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
  "ignoreHttpStatusErrors": true,
  "latestRun": {
    "endTime": "string",
    "errorTrace": {
      "code": "CODE_UNSPECIFIED",
      "mostCommonHttpErrorCode": 0,
      "scanConfigError": {
        "code": "CODE_UNSPECIFIED",
        "fieldName": "string"
      }
    },
    "executionState": "EXECUTION_STATE_UNSPECIFIED",
    "hasVulnerabilities": true,
    "name": "string",
    "progressPercent": 0,
    "resultState": "RESULT_STATE_UNSPECIFIED",
    "startTime": "string",
    "urlsCrawledCount": "string",
    "urlsTestedCount": "string",
    "warningTraces": [
      {
        "code": "CODE_UNSPECIFIED"
      }
    ]
  },
  "managedScan": true,
  "maxQps": 0,
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "schedule": {
    "intervalDurationDays": 0,
    "scheduleTime": "string"
  },
  "startingUrls": [
    "string"
  ],
  "staticIpScan": true,
  "targetPlatforms": [
    "TARGET_PLATFORM_UNSPECIFIED"
  ],
  "userAgent": "USER_AGENT_UNSPECIFIED"
}
```

<h3 id="websecurityscannerprojectsscanconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScanConfig](#schemascanconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## websecurityscanner.projects.scanConfigs.scanRuns.list

<a id="opIdwebsecurityscanner.projects.scanConfigs.scanRuns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/scanRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/scanRuns`

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

<h3 id="websecurityscannerprojectsscanconfigsscanrunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.|
|pageSize|query|integer|false|The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.|
|pageToken|query|string|false|A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.|
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
  "scanRuns": [
    {
      "endTime": "string",
      "errorTrace": {
        "code": "CODE_UNSPECIFIED",
        "mostCommonHttpErrorCode": 0,
        "scanConfigError": {
          "code": "CODE_UNSPECIFIED",
          "fieldName": "string"
        }
      },
      "executionState": "EXECUTION_STATE_UNSPECIFIED",
      "hasVulnerabilities": true,
      "name": "string",
      "progressPercent": 0,
      "resultState": "RESULT_STATE_UNSPECIFIED",
      "startTime": "string",
      "urlsCrawledCount": "string",
      "urlsTestedCount": "string",
      "warningTraces": [
        {
          "code": "CODE_UNSPECIFIED"
        }
      ]
    }
  ]
}
```

<h3 id="websecurityscannerprojectsscanconfigsscanrunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScanRunsResponse](#schemalistscanrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "customAccount": {
    "loginUrl": "string",
    "password": "string",
    "username": "string"
  },
  "googleAccount": {
    "password": "string",
    "username": "string"
  },
  "iapCredential": {
    "iapTestServiceAccountInfo": {
      "targetAudienceClientId": "string"
    }
  }
}
```

Scan authentication configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customAccount|[CustomAccount](#schemacustomaccount)|false|none|Authentication using a custom account.|
|googleAccount|[GoogleAccount](#schemagoogleaccount)|false|none|Authentication using a Google account.|
|iapCredential|[IapCredential](#schemaiapcredential)|false|none|Authentication using Identity-Aware-Proxy (IAP).|

<h2 id="tocS_CrawledUrl">CrawledUrl</h2>
<!-- backwards compatibility -->
<a id="schemacrawledurl"></a>
<a id="schema_CrawledUrl"></a>
<a id="tocScrawledurl"></a>
<a id="tocscrawledurl"></a>

```json
{
  "body": "string",
  "httpMethod": "string",
  "url": "string"
}
```

A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The body of the request that was used to visit the URL.|
|httpMethod|string|false|none|The http method of the request that was used to visit the URL, in uppercase.|
|url|string|false|none|The URL that was crawled.|

<h2 id="tocS_CustomAccount">CustomAccount</h2>
<!-- backwards compatibility -->
<a id="schemacustomaccount"></a>
<a id="schema_CustomAccount"></a>
<a id="tocScustomaccount"></a>
<a id="tocscustomaccount"></a>

```json
{
  "loginUrl": "string",
  "password": "string",
  "username": "string"
}
```

Describes authentication configuration that uses a custom account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loginUrl|string|false|none|Required. The login form URL of the website.|
|password|string|false|none|Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs.|
|username|string|false|none|Required. The user name of the custom account.|

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

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "body": "string",
  "description": "string",
  "finalUrl": "string",
  "findingType": "string",
  "form": {
    "actionUri": "string",
    "fields": [
      "string"
    ]
  },
  "frameUrl": "string",
  "fuzzedUrl": "string",
  "httpMethod": "string",
  "name": "string",
  "outdatedLibrary": {
    "learnMoreUrls": [
      "string"
    ],
    "libraryName": "string",
    "version": "string"
  },
  "reproductionUrl": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "trackingId": "string",
  "violatingResource": {
    "contentType": "string",
    "resourceUrl": "string"
  },
  "vulnerableHeaders": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "missingHeaders": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "vulnerableParameters": {
    "parameterNames": [
      "string"
    ]
  },
  "xss": {
    "errorMessage": "string",
    "stackTraces": [
      "string"
    ]
  },
  "xxe": {
    "payloadLocation": "LOCATION_UNSPECIFIED",
    "payloadValue": "string"
  }
}
```

A Finding resource represents a vulnerability instance identified during a ScanRun.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The body of the request that triggered the vulnerability.|
|description|string|false|none|The description of the vulnerability.|
|finalUrl|string|false|none|The URL where the browser lands when the vulnerability is detected.|
|findingType|string|false|none|The type of the Finding. Detailed and up-to-date information on findings can be found here: https://cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner|
|form|[Form](#schemaform)|false|none|An addon containing information reported for a vulnerability with an HTML form, if any.|
|frameUrl|string|false|none|If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.|
|fuzzedUrl|string|false|none|The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.|
|httpMethod|string|false|none|The http method of the request that triggered the vulnerability, in uppercase.|
|name|string|false|none|The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system.|
|outdatedLibrary|[OutdatedLibrary](#schemaoutdatedlibrary)|false|none|An addon containing information about outdated libraries.|
|reproductionUrl|string|false|none|The URL containing human-readable payload that user can leverage to reproduce the vulnerability.|
|severity|string|false|none|The severity level of the reported vulnerability.|
|trackingId|string|false|none|The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.|
|violatingResource|[ViolatingResource](#schemaviolatingresource)|false|none|An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.|
|vulnerableHeaders|[VulnerableHeaders](#schemavulnerableheaders)|false|none|An addon containing information about vulnerable or missing HTTP headers.|
|vulnerableParameters|[VulnerableParameters](#schemavulnerableparameters)|false|none|An addon containing information about request parameters which were found to be vulnerable.|
|xss|[Xss](#schemaxss)|false|none|An addon containing information reported for an XSS, if any.|
|xxe|[Xxe](#schemaxxe)|false|none|An addon containing information reported for an XXE, if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|CRITICAL|
|severity|HIGH|
|severity|MEDIUM|
|severity|LOW|

<h2 id="tocS_FindingTypeStats">FindingTypeStats</h2>
<!-- backwards compatibility -->
<a id="schemafindingtypestats"></a>
<a id="schema_FindingTypeStats"></a>
<a id="tocSfindingtypestats"></a>
<a id="tocsfindingtypestats"></a>

```json
{
  "findingCount": 0,
  "findingType": "string"
}
```

A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingCount|integer(int32)|false|none|The count of findings belonging to this finding type.|
|findingType|string|false|none|The finding type associated with the stats.|

<h2 id="tocS_Form">Form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_Form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "actionUri": "string",
  "fields": [
    "string"
  ]
}
```

! Information about a vulnerability with an HTML.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionUri|string|false|none|! The URI where to send the form when it's submitted.|
|fields|[string]|false|none|! The names of form fields related to the vulnerability.|

<h2 id="tocS_GoogleAccount">GoogleAccount</h2>
<!-- backwards compatibility -->
<a id="schemagoogleaccount"></a>
<a id="schema_GoogleAccount"></a>
<a id="tocSgoogleaccount"></a>
<a id="tocsgoogleaccount"></a>

```json
{
  "password": "string",
  "username": "string"
}
```

Describes authentication configuration that uses a Google account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs.|
|username|string|false|none|Required. The user name of the Google account.|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Describes a HTTP Header.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Header name.|
|value|string|false|none|Header value.|

<h2 id="tocS_IapCredential">IapCredential</h2>
<!-- backwards compatibility -->
<a id="schemaiapcredential"></a>
<a id="schema_IapCredential"></a>
<a id="tocSiapcredential"></a>
<a id="tocsiapcredential"></a>

```json
{
  "iapTestServiceAccountInfo": {
    "targetAudienceClientId": "string"
  }
}
```

Describes authentication configuration for Identity-Aware-Proxy (IAP).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iapTestServiceAccountInfo|[IapTestServiceAccountInfo](#schemaiaptestserviceaccountinfo)|false|none|Authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.|

<h2 id="tocS_IapTestServiceAccountInfo">IapTestServiceAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaiaptestserviceaccountinfo"></a>
<a id="schema_IapTestServiceAccountInfo"></a>
<a id="tocSiaptestserviceaccountinfo"></a>
<a id="tocsiaptestserviceaccountinfo"></a>

```json
{
  "targetAudienceClientId": "string"
}
```

Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetAudienceClientId|string|false|none|Required. Describes OAuth2 Client ID of resources protected by Identity-Aware-Proxy(IAP).|

<h2 id="tocS_ListCrawledUrlsResponse">ListCrawledUrlsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcrawledurlsresponse"></a>
<a id="schema_ListCrawledUrlsResponse"></a>
<a id="tocSlistcrawledurlsresponse"></a>
<a id="tocslistcrawledurlsresponse"></a>

```json
{
  "crawledUrls": [
    {
      "body": "string",
      "httpMethod": "string",
      "url": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the `ListCrawledUrls` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crawledUrls|[[CrawledUrl](#schemacrawledurl)]|false|none|The list of CrawledUrls returned.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListFindingTypeStatsResponse">ListFindingTypeStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingtypestatsresponse"></a>
<a id="schema_ListFindingTypeStatsResponse"></a>
<a id="tocSlistfindingtypestatsresponse"></a>
<a id="tocslistfindingtypestatsresponse"></a>

```json
{
  "findingTypeStats": [
    {
      "findingCount": 0,
      "findingType": "string"
    }
  ]
}
```

Response for the `ListFindingTypeStats` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingTypeStats|[[FindingTypeStats](#schemafindingtypestats)]|false|none|The list of FindingTypeStats returned.|

<h2 id="tocS_ListFindingsResponse">ListFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsresponse"></a>
<a id="schema_ListFindingsResponse"></a>
<a id="tocSlistfindingsresponse"></a>
<a id="tocslistfindingsresponse"></a>

```json
{
  "findings": [
    {
      "body": "string",
      "description": "string",
      "finalUrl": "string",
      "findingType": "string",
      "form": {
        "actionUri": "string",
        "fields": [
          "string"
        ]
      },
      "frameUrl": "string",
      "fuzzedUrl": "string",
      "httpMethod": "string",
      "name": "string",
      "outdatedLibrary": {
        "learnMoreUrls": [
          "string"
        ],
        "libraryName": "string",
        "version": "string"
      },
      "reproductionUrl": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "trackingId": "string",
      "violatingResource": {
        "contentType": "string",
        "resourceUrl": "string"
      },
      "vulnerableHeaders": {
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "missingHeaders": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "vulnerableParameters": {
        "parameterNames": [
          "string"
        ]
      },
      "xss": {
        "errorMessage": "string",
        "stackTraces": [
          "string"
        ]
      },
      "xxe": {
        "payloadLocation": "LOCATION_UNSPECIFIED",
        "payloadValue": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for the `ListFindings` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|[[Finding](#schemafinding)]|false|none|The list of Findings returned.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListScanConfigsResponse">ListScanConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscanconfigsresponse"></a>
<a id="schema_ListScanConfigsResponse"></a>
<a id="tocSlistscanconfigsresponse"></a>
<a id="tocslistscanconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "scanConfigs": [
    {
      "authentication": {
        "customAccount": {
          "loginUrl": "string",
          "password": "string",
          "username": "string"
        },
        "googleAccount": {
          "password": "string",
          "username": "string"
        },
        "iapCredential": {
          "iapTestServiceAccountInfo": {
            "targetAudienceClientId": "string"
          }
        }
      },
      "blacklistPatterns": [
        "string"
      ],
      "displayName": "string",
      "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
      "ignoreHttpStatusErrors": true,
      "latestRun": {
        "endTime": "string",
        "errorTrace": {
          "code": "CODE_UNSPECIFIED",
          "mostCommonHttpErrorCode": 0,
          "scanConfigError": {
            "code": "CODE_UNSPECIFIED",
            "fieldName": "string"
          }
        },
        "executionState": "EXECUTION_STATE_UNSPECIFIED",
        "hasVulnerabilities": true,
        "name": "string",
        "progressPercent": 0,
        "resultState": "RESULT_STATE_UNSPECIFIED",
        "startTime": "string",
        "urlsCrawledCount": "string",
        "urlsTestedCount": "string",
        "warningTraces": [
          {
            "code": "CODE_UNSPECIFIED"
          }
        ]
      },
      "managedScan": true,
      "maxQps": 0,
      "name": "string",
      "riskLevel": "RISK_LEVEL_UNSPECIFIED",
      "schedule": {
        "intervalDurationDays": 0,
        "scheduleTime": "string"
      },
      "startingUrls": [
        "string"
      ],
      "staticIpScan": true,
      "targetPlatforms": [
        "TARGET_PLATFORM_UNSPECIFIED"
      ],
      "userAgent": "USER_AGENT_UNSPECIFIED"
    }
  ]
}
```

Response for the `ListScanConfigs` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|scanConfigs|[[ScanConfig](#schemascanconfig)]|false|none|The list of ScanConfigs returned.|

<h2 id="tocS_ListScanRunsResponse">ListScanRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscanrunsresponse"></a>
<a id="schema_ListScanRunsResponse"></a>
<a id="tocSlistscanrunsresponse"></a>
<a id="tocslistscanrunsresponse"></a>

```json
{
  "nextPageToken": "string",
  "scanRuns": [
    {
      "endTime": "string",
      "errorTrace": {
        "code": "CODE_UNSPECIFIED",
        "mostCommonHttpErrorCode": 0,
        "scanConfigError": {
          "code": "CODE_UNSPECIFIED",
          "fieldName": "string"
        }
      },
      "executionState": "EXECUTION_STATE_UNSPECIFIED",
      "hasVulnerabilities": true,
      "name": "string",
      "progressPercent": 0,
      "resultState": "RESULT_STATE_UNSPECIFIED",
      "startTime": "string",
      "urlsCrawledCount": "string",
      "urlsTestedCount": "string",
      "warningTraces": [
        {
          "code": "CODE_UNSPECIFIED"
        }
      ]
    }
  ]
}
```

Response for the `ListScanRuns` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|scanRuns|[[ScanRun](#schemascanrun)]|false|none|The list of ScanRuns returned.|

<h2 id="tocS_OutdatedLibrary">OutdatedLibrary</h2>
<!-- backwards compatibility -->
<a id="schemaoutdatedlibrary"></a>
<a id="schema_OutdatedLibrary"></a>
<a id="tocSoutdatedlibrary"></a>
<a id="tocsoutdatedlibrary"></a>

```json
{
  "learnMoreUrls": [
    "string"
  ],
  "libraryName": "string",
  "version": "string"
}
```

Information reported for an outdated library.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|learnMoreUrls|[string]|false|none|URLs to learn more information about the vulnerabilities in the library.|
|libraryName|string|false|none|The name of the outdated library.|
|version|string|false|none|The version number.|

<h2 id="tocS_ScanConfig">ScanConfig</h2>
<!-- backwards compatibility -->
<a id="schemascanconfig"></a>
<a id="schema_ScanConfig"></a>
<a id="tocSscanconfig"></a>
<a id="tocsscanconfig"></a>

```json
{
  "authentication": {
    "customAccount": {
      "loginUrl": "string",
      "password": "string",
      "username": "string"
    },
    "googleAccount": {
      "password": "string",
      "username": "string"
    },
    "iapCredential": {
      "iapTestServiceAccountInfo": {
        "targetAudienceClientId": "string"
      }
    }
  },
  "blacklistPatterns": [
    "string"
  ],
  "displayName": "string",
  "exportToSecurityCommandCenter": "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
  "ignoreHttpStatusErrors": true,
  "latestRun": {
    "endTime": "string",
    "errorTrace": {
      "code": "CODE_UNSPECIFIED",
      "mostCommonHttpErrorCode": 0,
      "scanConfigError": {
        "code": "CODE_UNSPECIFIED",
        "fieldName": "string"
      }
    },
    "executionState": "EXECUTION_STATE_UNSPECIFIED",
    "hasVulnerabilities": true,
    "name": "string",
    "progressPercent": 0,
    "resultState": "RESULT_STATE_UNSPECIFIED",
    "startTime": "string",
    "urlsCrawledCount": "string",
    "urlsTestedCount": "string",
    "warningTraces": [
      {
        "code": "CODE_UNSPECIFIED"
      }
    ]
  },
  "managedScan": true,
  "maxQps": 0,
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "schedule": {
    "intervalDurationDays": 0,
    "scheduleTime": "string"
  },
  "startingUrls": [
    "string"
  ],
  "staticIpScan": true,
  "targetPlatforms": [
    "TARGET_PLATFORM_UNSPECIFIED"
  ],
  "userAgent": "USER_AGENT_UNSPECIFIED"
}
```

A ScanConfig resource contains the configurations to launch a scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|The authentication configuration. If specified, service will use the authentication configuration during scanning.|
|blacklistPatterns|[string]|false|none|The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls|
|displayName|string|false|none|Required. The user provided display name of the ScanConfig.|
|exportToSecurityCommandCenter|string|false|none|Controls export of scan configurations and results to Security Command Center.|
|ignoreHttpStatusErrors|boolean|false|none|Whether to keep scanning even if most requests return HTTP error codes.|
|latestRun|[ScanRun](#schemascanrun)|false|none|Latest ScanRun if available.|
|managedScan|boolean|false|none|Whether the scan config is managed by Web Security Scanner, output only.|
|maxQps|integer(int32)|false|none|The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.|
|name|string|false|none|The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.|
|riskLevel|string|false|none|The risk level selected for the scan|
|schedule|[Schedule](#schemaschedule)|false|none|The schedule of the ScanConfig.|
|startingUrls|[string]|false|none|Required. The starting URLs from which the scanner finds site pages.|
|staticIpScan|boolean|false|none|Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses.|
|targetPlatforms|[string]|false|none|Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.|
|userAgent|string|false|none|The user agent used during scanning.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportToSecurityCommandCenter|EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED|
|exportToSecurityCommandCenter|ENABLED|
|exportToSecurityCommandCenter|DISABLED|
|riskLevel|RISK_LEVEL_UNSPECIFIED|
|riskLevel|NORMAL|
|riskLevel|LOW|
|targetPlatforms|TARGET_PLATFORM_UNSPECIFIED|
|targetPlatforms|APP_ENGINE|
|targetPlatforms|COMPUTE|
|targetPlatforms|CLOUD_RUN|
|targetPlatforms|CLOUD_FUNCTIONS|
|userAgent|USER_AGENT_UNSPECIFIED|
|userAgent|CHROME_LINUX|
|userAgent|CHROME_ANDROID|
|userAgent|SAFARI_IPHONE|

<h2 id="tocS_ScanConfigError">ScanConfigError</h2>
<!-- backwards compatibility -->
<a id="schemascanconfigerror"></a>
<a id="schema_ScanConfigError"></a>
<a id="tocSscanconfigerror"></a>
<a id="tocsscanconfigerror"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "fieldName": "string"
}
```

Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Indicates the reason code for a configuration failure.|
|fieldName|string|false|none|Indicates the full name of the ScanConfig field that triggers this error, for example "scan_config.max_qps". This field is provided for troubleshooting purposes only and its actual value can change in the future.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|OK|
|code|INTERNAL_ERROR|
|code|APPENGINE_API_BACKEND_ERROR|
|code|APPENGINE_API_NOT_ACCESSIBLE|
|code|APPENGINE_DEFAULT_HOST_MISSING|
|code|CANNOT_USE_GOOGLE_COM_ACCOUNT|
|code|CANNOT_USE_OWNER_ACCOUNT|
|code|COMPUTE_API_BACKEND_ERROR|
|code|COMPUTE_API_NOT_ACCESSIBLE|
|code|CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT|
|code|CUSTOM_LOGIN_URL_MALFORMED|
|code|CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS|
|code|CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS|
|code|CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS|
|code|CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS|
|code|DUPLICATE_SCAN_NAME|
|code|INVALID_FIELD_VALUE|
|code|FAILED_TO_AUTHENTICATE_TO_TARGET|
|code|FINDING_TYPE_UNSPECIFIED|
|code|FORBIDDEN_TO_SCAN_COMPUTE|
|code|FORBIDDEN_UPDATE_TO_MANAGED_SCAN|
|code|MALFORMED_FILTER|
|code|MALFORMED_RESOURCE_NAME|
|code|PROJECT_INACTIVE|
|code|REQUIRED_FIELD|
|code|RESOURCE_NAME_INCONSISTENT|
|code|SCAN_ALREADY_RUNNING|
|code|SCAN_NOT_RUNNING|
|code|SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT|
|code|SEED_URL_MALFORMED|
|code|SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS|
|code|SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS|
|code|SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS|
|code|SEED_URL_HAS_UNRESERVED_IP_ADDRESS|
|code|SERVICE_ACCOUNT_NOT_CONFIGURED|
|code|TOO_MANY_SCANS|
|code|UNABLE_TO_RESOLVE_PROJECT_INFO|
|code|UNSUPPORTED_BLACKLIST_PATTERN_FORMAT|
|code|UNSUPPORTED_FILTER|
|code|UNSUPPORTED_FINDING_TYPE|
|code|UNSUPPORTED_URL_SCHEME|

<h2 id="tocS_ScanRun">ScanRun</h2>
<!-- backwards compatibility -->
<a id="schemascanrun"></a>
<a id="schema_ScanRun"></a>
<a id="tocSscanrun"></a>
<a id="tocsscanrun"></a>

```json
{
  "endTime": "string",
  "errorTrace": {
    "code": "CODE_UNSPECIFIED",
    "mostCommonHttpErrorCode": 0,
    "scanConfigError": {
      "code": "CODE_UNSPECIFIED",
      "fieldName": "string"
    }
  },
  "executionState": "EXECUTION_STATE_UNSPECIFIED",
  "hasVulnerabilities": true,
  "name": "string",
  "progressPercent": 0,
  "resultState": "RESULT_STATE_UNSPECIFIED",
  "startTime": "string",
  "urlsCrawledCount": "string",
  "urlsTestedCount": "string",
  "warningTraces": [
    {
      "code": "CODE_UNSPECIFIED"
    }
  ]
}
```

A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user.|
|errorTrace|[ScanRunErrorTrace](#schemascanrunerrortrace)|false|none|If result_state is an ERROR, this field provides the primary reason for scan's termination and more details, if such are available.|
|executionState|string|false|none|The execution state of the ScanRun.|
|hasVulnerabilities|boolean|false|none|Whether the scan run has found any vulnerabilities.|
|name|string|false|none|The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system.|
|progressPercent|integer(int32)|false|none|The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100.|
|resultState|string|false|none|The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED".|
|startTime|string(google-datetime)|false|none|The time at which the ScanRun started.|
|urlsCrawledCount|string(int64)|false|none|The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now.|
|urlsTestedCount|string(int64)|false|none|The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads.|
|warningTraces|[[ScanRunWarningTrace](#schemascanrunwarningtrace)]|false|none|A list of warnings, if such are encountered during this scan run.|

#### Enumerated Values

|Property|Value|
|---|---|
|executionState|EXECUTION_STATE_UNSPECIFIED|
|executionState|QUEUED|
|executionState|SCANNING|
|executionState|FINISHED|
|resultState|RESULT_STATE_UNSPECIFIED|
|resultState|SUCCESS|
|resultState|ERROR|
|resultState|KILLED|

<h2 id="tocS_ScanRunErrorTrace">ScanRunErrorTrace</h2>
<!-- backwards compatibility -->
<a id="schemascanrunerrortrace"></a>
<a id="schema_ScanRunErrorTrace"></a>
<a id="tocSscanrunerrortrace"></a>
<a id="tocsscanrunerrortrace"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "mostCommonHttpErrorCode": 0,
  "scanConfigError": {
    "code": "CODE_UNSPECIFIED",
    "fieldName": "string"
  }
}
```

Output only. Defines an error trace message for a ScanRun.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Indicates the error reason code.|
|mostCommonHttpErrorCode|integer(int32)|false|none|If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses.|
|scanConfigError|[ScanConfigError](#schemascanconfigerror)|false|none|If the scan encounters SCAN_CONFIG_ISSUE error, this field has the error message encountered during scan configuration validation that is performed before each scan run.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|INTERNAL_ERROR|
|code|SCAN_CONFIG_ISSUE|
|code|AUTHENTICATION_CONFIG_ISSUE|
|code|TIMED_OUT_WHILE_SCANNING|
|code|TOO_MANY_REDIRECTS|
|code|TOO_MANY_HTTP_ERRORS|
|code|STARTING_URLS_CRAWL_HTTP_ERRORS|

<h2 id="tocS_ScanRunWarningTrace">ScanRunWarningTrace</h2>
<!-- backwards compatibility -->
<a id="schemascanrunwarningtrace"></a>
<a id="schema_ScanRunWarningTrace"></a>
<a id="tocSscanrunwarningtrace"></a>
<a id="tocsscanrunwarningtrace"></a>

```json
{
  "code": "CODE_UNSPECIFIED"
}
```

Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Indicates the warning code.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|INSUFFICIENT_CRAWL_RESULTS|
|code|TOO_MANY_CRAWL_RESULTS|
|code|TOO_MANY_FUZZ_TASKS|
|code|BLOCKED_BY_IAP|
|code|NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "intervalDurationDays": 0,
  "scheduleTime": "string"
}
```

Scan schedule configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intervalDurationDays|integer(int32)|false|none|Required. The duration of time between executions in days.|
|scheduleTime|string(google-datetime)|false|none|A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately.|

<h2 id="tocS_StartScanRunRequest">StartScanRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartscanrunrequest"></a>
<a id="schema_StartScanRunRequest"></a>
<a id="tocSstartscanrunrequest"></a>
<a id="tocsstartscanrunrequest"></a>

```json
{}
```

Request for the `StartScanRun` method.

<h2 id="tocS_StopScanRunRequest">StopScanRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopscanrunrequest"></a>
<a id="schema_StopScanRunRequest"></a>
<a id="tocSstopscanrunrequest"></a>
<a id="tocsstopscanrunrequest"></a>

```json
{}
```

Request for the `StopScanRun` method.

<h2 id="tocS_ViolatingResource">ViolatingResource</h2>
<!-- backwards compatibility -->
<a id="schemaviolatingresource"></a>
<a id="schema_ViolatingResource"></a>
<a id="tocSviolatingresource"></a>
<a id="tocsviolatingresource"></a>

```json
{
  "contentType": "string",
  "resourceUrl": "string"
}
```

Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The MIME type of this resource.|
|resourceUrl|string|false|none|URL of this violating resource.|

<h2 id="tocS_VulnerableHeaders">VulnerableHeaders</h2>
<!-- backwards compatibility -->
<a id="schemavulnerableheaders"></a>
<a id="schema_VulnerableHeaders"></a>
<a id="tocSvulnerableheaders"></a>
<a id="tocsvulnerableheaders"></a>

```json
{
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "missingHeaders": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

Information about vulnerable or missing HTTP Headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|[[Header](#schemaheader)]|false|none|List of vulnerable headers.|
|missingHeaders|[[Header](#schemaheader)]|false|none|List of missing headers.|

<h2 id="tocS_VulnerableParameters">VulnerableParameters</h2>
<!-- backwards compatibility -->
<a id="schemavulnerableparameters"></a>
<a id="schema_VulnerableParameters"></a>
<a id="tocSvulnerableparameters"></a>
<a id="tocsvulnerableparameters"></a>

```json
{
  "parameterNames": [
    "string"
  ]
}
```

Information about vulnerable request parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameterNames|[string]|false|none|The vulnerable parameter names.|

<h2 id="tocS_Xss">Xss</h2>
<!-- backwards compatibility -->
<a id="schemaxss"></a>
<a id="schema_Xss"></a>
<a id="tocSxss"></a>
<a id="tocsxss"></a>

```json
{
  "errorMessage": "string",
  "stackTraces": [
    "string"
  ]
}
```

Information reported for an XSS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|An error message generated by a javascript breakage.|
|stackTraces|[string]|false|none|Stack traces leading to the point where the XSS occurred.|

<h2 id="tocS_Xxe">Xxe</h2>
<!-- backwards compatibility -->
<a id="schemaxxe"></a>
<a id="schema_Xxe"></a>
<a id="tocSxxe"></a>
<a id="tocsxxe"></a>

```json
{
  "payloadLocation": "LOCATION_UNSPECIFIED",
  "payloadValue": "string"
}
```

Information reported for an XXE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadLocation|string|false|none|Location within the request where the payload was placed.|
|payloadValue|string|false|none|The XML string that triggered the XXE vulnerability. Non-payload values might be redacted.|

#### Enumerated Values

|Property|Value|
|---|---|
|payloadLocation|LOCATION_UNSPECIFIED|
|payloadLocation|COMPLETE_REQUEST_BODY|
