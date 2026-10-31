<h1 id="recaptcha-enterprise-api">reCAPTCHA Enterprise API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Help protect your website from fraudulent activity, spam, and abuse without creating friction.

Base URLs:

* <a href="https://recaptchaenterprise.googleapis.com/">https://recaptchaenterprise.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/recaptcha-enterprise/">External documentation</a>

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

<h1 id="recaptcha-enterprise-api-projects">projects</h1>

## recaptchaenterprise.projects.keys.retrieveLegacySecretKey

<a id="opIdrecaptchaenterprise.projects.keys.retrieveLegacySecretKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:retrieveLegacySecretKey \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{key}:retrieveLegacySecretKey`

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

<h3 id="recaptchaenterpriseprojectskeysretrievelegacysecretkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Required. The public key name linked to the requested secret key in the format "projects/{project}/keys/{key}".|
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
  "legacySecretKey": "string"
}
```

<h3 id="recaptchaenterpriseprojectskeysretrievelegacysecretkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse](#schemagooglecloudrecaptchaenterprisev1retrievelegacysecretkeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.getMetrics

<a id="opIdrecaptchaenterprise.projects.keys.getMetrics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Get some aggregated metrics for a Key. This data can be used to build dashboards.

<h3 id="recaptchaenterpriseprojectskeysgetmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the requested metrics, in the format "projects/{project}/keys/{key}/metrics".|
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
  "challengeMetrics": [
    {
      "failedCount": "string",
      "nocaptchaCount": "string",
      "pageloadCount": "string",
      "passedCount": "string"
    }
  ],
  "name": "string",
  "scoreMetrics": [
    {
      "actionMetrics": {
        "property1": {
          "scoreBuckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "scoreBuckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "overallMetrics": {
        "scoreBuckets": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "startTime": "string"
}
```

<h3 id="recaptchaenterpriseprojectskeysgetmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1Metrics](#schemagooglecloudrecaptchaenterprisev1metrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.delete

<a id="opIdrecaptchaenterprise.projects.keys.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes the specified key.

<h3 id="recaptchaenterpriseprojectskeysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the key to be deleted, in the format "projects/{project}/keys/{key}".|
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

<h3 id="recaptchaenterpriseprojectskeysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.patch

<a id="opIdrecaptchaenterprise.projects.keys.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "androidSettings": {
      "allowAllPackageNames": true,
      "allowedPackageNames": [
        "string"
      ],
      "supportNonGoogleAppStoreDistribution": true
    },
    "displayName": "string",
    "iosSettings": {
      "allowAllBundleIds": true,
      "allowedBundleIds": [
        "string"
      ]
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "testingOptions": {
      "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
      "testingScore": 0
    },
    "wafSettings": {
      "wafFeature": "WAF_FEATURE_UNSPECIFIED",
      "wafService": "WAF_SERVICE_UNSPECIFIED"
    },
    "webSettings": {
      "allowAllDomains": true,
      "allowAmpTraffic": true,
      "allowedDomains": [
        "string"
      ],
      "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
      "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
    }
  }'
```

`PATCH /v1/{name}`

Updates the specified key.

> Body parameter

```json
{
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="recaptchaenterpriseprojectskeyspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name for the Key in the format "projects/{project}/keys/{key}".|
|updateMask|query|string|false|Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated.|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)|false|none|
|» androidSettings|body|[GoogleCloudRecaptchaenterpriseV1AndroidKeySettings](#schemagooglecloudrecaptchaenterprisev1androidkeysettings)|false|Settings for keys that can be used by Android apps.|
|» displayName|body|string|false|Human-readable display name of this key. Modifiable by user.|
|» iosSettings|body|[GoogleCloudRecaptchaenterpriseV1IOSKeySettings](#schemagooglecloudrecaptchaenterprisev1ioskeysettings)|false|Settings for keys that can be used by iOS apps.|
|» labels|body|object|false|See Creating and managing labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource name for the Key in the format "projects/{project}/keys/{key}".|
|» testingOptions|body|[GoogleCloudRecaptchaenterpriseV1TestingOptions](#schemagooglecloudrecaptchaenterprisev1testingoptions)|false|Options for user acceptance testing.|
|» wafSettings|body|[GoogleCloudRecaptchaenterpriseV1WafSettings](#schemagooglecloudrecaptchaenterprisev1wafsettings)|false|Settings for WAF|
|» webSettings|body|[GoogleCloudRecaptchaenterpriseV1WebKeySettings](#schemagooglecloudrecaptchaenterprisev1webkeysettings)|false|Settings for keys that can be used by websites.|

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
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "createTime": "string",
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="recaptchaenterpriseprojectskeyspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.assessments.annotate

<a id="opIdrecaptchaenterprise.projects.assessments.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotation": "ANNOTATION_UNSPECIFIED",
    "hashedAccountId": "string",
    "reasons": [
      "REASON_UNSPECIFIED"
    ],
    "transactionEvent": {
      "eventTime": "string",
      "eventType": "TRANSACTION_EVENT_TYPE_UNSPECIFIED",
      "reason": "string",
      "value": 0
    }
  }'
```

`POST /v1/{name}:annotate`

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

> Body parameter

```json
{
  "annotation": "ANNOTATION_UNSPECIFIED",
  "hashedAccountId": "string",
  "reasons": [
    "REASON_UNSPECIFIED"
  ],
  "transactionEvent": {
    "eventTime": "string",
    "eventType": "TRANSACTION_EVENT_TYPE_UNSPECIFIED",
    "reason": "string",
    "value": 0
  }
}
```

<h3 id="recaptchaenterpriseprojectsassessmentsannotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Assessment, in the format "projects/{project}/assessments/{assessment}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest](#schemagooglecloudrecaptchaenterprisev1annotateassessmentrequest)|false|none|
|» annotation|body|string|false|Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.|
|» hashedAccountId|body|string(byte)|false|Optional. Unique stable hashed user identifier to apply to the assessment. This is an alternative to setting the hashed_account_id in CreateAssessment, for example when the account identifier is not yet known in the initial request. It is recommended that the identifier is hashed using hmac-sha256 with stable secret.|
|» reasons|body|[string]|false|Optional. Optional reasons for the annotation that will be assigned to the Event.|
|» transactionEvent|body|[GoogleCloudRecaptchaenterpriseV1TransactionEvent](#schemagooglecloudrecaptchaenterprisev1transactionevent)|false|Optional. If the assessment is part of a payment transaction, provide details on payment lifecycle events that occur in the transaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» annotation|ANNOTATION_UNSPECIFIED|
|» annotation|LEGITIMATE|
|» annotation|FRAUDULENT|
|» annotation|PASSWORD_CORRECT|
|» annotation|PASSWORD_INCORRECT|
|» reasons|REASON_UNSPECIFIED|
|» reasons|CHARGEBACK|
|» reasons|CHARGEBACK_FRAUD|
|» reasons|CHARGEBACK_DISPUTE|
|» reasons|REFUND|
|» reasons|REFUND_FRAUD|
|» reasons|TRANSACTION_ACCEPTED|
|» reasons|TRANSACTION_DECLINED|
|» reasons|PAYMENT_HEURISTICS|
|» reasons|INITIATED_TWO_FACTOR|
|» reasons|PASSED_TWO_FACTOR|
|» reasons|FAILED_TWO_FACTOR|
|» reasons|CORRECT_PASSWORD|
|» reasons|INCORRECT_PASSWORD|
|» reasons|SOCIAL_SPAM|

> Example responses

> 200 Response

```json
{}
```

<h3 id="recaptchaenterpriseprojectsassessmentsannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse](#schemagooglecloudrecaptchaenterprisev1annotateassessmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.migrate

<a id="opIdrecaptchaenterprise.projects.keys.migrate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:migrate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "skipBillingCheck": true
  }'
```

`POST /v1/{name}:migrate`

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

> Body parameter

```json
{
  "skipBillingCheck": true
}
```

<h3 id="recaptchaenterpriseprojectskeysmigrate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the key to be migrated, in the format "projects/{project}/keys/{key}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest](#schemagooglecloudrecaptchaenterprisev1migratekeyrequest)|false|none|
|» skipBillingCheck|body|boolean|false|Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information.|

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
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "createTime": "string",
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="recaptchaenterpriseprojectskeysmigrate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.assessments.create

<a id="opIdrecaptchaenterprise.projects.assessments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/assessments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountDefenderAssessment": {
      "labels": [
        "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
      ]
    },
    "accountVerification": {
      "endpoints": [
        {
          "emailAddress": "string",
          "phoneNumber": "string"
        }
      ],
      "languageCode": "string",
      "username": "string"
    },
    "event": {
      "expectedAction": "string",
      "express": true,
      "firewallPolicyEvaluation": true,
      "hashedAccountId": "string",
      "headers": [
        "string"
      ],
      "ja3": "string",
      "requestedUri": "string",
      "siteKey": "string",
      "token": "string",
      "transactionData": {
        "billingAddress": {
          "address": [
            "string"
          ],
          "administrativeArea": "string",
          "locality": "string",
          "postalCode": "string",
          "recipient": "string",
          "regionCode": "string"
        },
        "cardBin": "string",
        "cardLastFour": "string",
        "currencyCode": "string",
        "gatewayInfo": {
          "avsResponseCode": "string",
          "cvvResponseCode": "string",
          "gatewayResponseCode": "string",
          "name": "string"
        },
        "items": [
          {
            "merchantAccountId": "string",
            "name": "string",
            "quantity": "string",
            "value": 0
          }
        ],
        "merchants": [
          {
            "accountId": "string",
            "creationMs": "string",
            "email": "string",
            "emailVerified": true,
            "phoneNumber": "string",
            "phoneVerified": true
          }
        ],
        "paymentMethod": "string",
        "shippingAddress": {
          "address": [
            "string"
          ],
          "administrativeArea": "string",
          "locality": "string",
          "postalCode": "string",
          "recipient": "string",
          "regionCode": "string"
        },
        "shippingValue": 0,
        "transactionId": "string",
        "user": {
          "accountId": "string",
          "creationMs": "string",
          "email": "string",
          "emailVerified": true,
          "phoneNumber": "string",
          "phoneVerified": true
        },
        "value": 0
      },
      "userAgent": "string",
      "userIpAddress": "string",
      "wafTokenAssessment": true
    },
    "firewallPolicyAssessment": {
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    },
    "fraudPreventionAssessment": {
      "behavioralTrustVerdict": {
        "trust": 0
      },
      "cardTestingVerdict": {
        "risk": 0
      },
      "stolenInstrumentVerdict": {
        "risk": 0
      },
      "transactionRisk": 0
    },
    "privatePasswordLeakVerification": {
      "encryptedUserCredentialsHash": "string",
      "lookupHashPrefix": "string"
    }
  }'
```

`POST /v1/{parent}/assessments`

Creates an Assessment of the likelihood an event is legitimate.

> Body parameter

```json
{
  "accountDefenderAssessment": {
    "labels": [
      "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
    ]
  },
  "accountVerification": {
    "endpoints": [
      {
        "emailAddress": "string",
        "phoneNumber": "string"
      }
    ],
    "languageCode": "string",
    "username": "string"
  },
  "event": {
    "expectedAction": "string",
    "express": true,
    "firewallPolicyEvaluation": true,
    "hashedAccountId": "string",
    "headers": [
      "string"
    ],
    "ja3": "string",
    "requestedUri": "string",
    "siteKey": "string",
    "token": "string",
    "transactionData": {
      "billingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "cardBin": "string",
      "cardLastFour": "string",
      "currencyCode": "string",
      "gatewayInfo": {
        "avsResponseCode": "string",
        "cvvResponseCode": "string",
        "gatewayResponseCode": "string",
        "name": "string"
      },
      "items": [
        {
          "merchantAccountId": "string",
          "name": "string",
          "quantity": "string",
          "value": 0
        }
      ],
      "merchants": [
        {
          "accountId": "string",
          "creationMs": "string",
          "email": "string",
          "emailVerified": true,
          "phoneNumber": "string",
          "phoneVerified": true
        }
      ],
      "paymentMethod": "string",
      "shippingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "shippingValue": 0,
      "transactionId": "string",
      "user": {
        "accountId": "string",
        "creationMs": "string",
        "email": "string",
        "emailVerified": true,
        "phoneNumber": "string",
        "phoneVerified": true
      },
      "value": 0
    },
    "userAgent": "string",
    "userIpAddress": "string",
    "wafTokenAssessment": true
  },
  "firewallPolicyAssessment": {
    "error": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "fraudPreventionAssessment": {
    "behavioralTrustVerdict": {
      "trust": 0
    },
    "cardTestingVerdict": {
      "risk": 0
    },
    "stolenInstrumentVerdict": {
      "risk": 0
    },
    "transactionRisk": 0
  },
  "privatePasswordLeakVerification": {
    "encryptedUserCredentialsHash": "string",
    "lookupHashPrefix": "string"
  }
}
```

<h3 id="recaptchaenterpriseprojectsassessmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in which the assessment will be created, in the format "projects/{project}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1Assessment](#schemagooglecloudrecaptchaenterprisev1assessment)|false|none|
|» accountDefenderAssessment|body|[GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment](#schemagooglecloudrecaptchaenterprisev1accountdefenderassessment)|false|Assessment returned by account defender when a hashed_account_id is provided.|
|» accountVerification|body|[GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo](#schemagooglecloudrecaptchaenterprisev1accountverificationinfo)|false|Account verification information for identity verification. The assessment event must include a token and site key to use this feature.|
|» event|body|[GoogleCloudRecaptchaenterpriseV1Event](#schemagooglecloudrecaptchaenterprisev1event)|false|The event being assessed.|
|» firewallPolicyAssessment|body|[GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment](#schemagooglecloudrecaptchaenterprisev1firewallpolicyassessment)|false|Assessment returned when firewall policies belonging to the project are evaluated using the field firewall_policy_evaluation.|
|» fraudPreventionAssessment|body|[GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment](#schemagooglecloudrecaptchaenterprisev1fraudpreventionassessment)|false|Assessment returned by Fraud Prevention when TransactionData is provided.|
|» privatePasswordLeakVerification|body|[GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification](#schemagooglecloudrecaptchaenterprisev1privatepasswordleakverification)|false|The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.|

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
  "accountDefenderAssessment": {
    "labels": [
      "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
    ]
  },
  "accountVerification": {
    "endpoints": [
      {
        "emailAddress": "string",
        "lastVerificationTime": "string",
        "phoneNumber": "string",
        "requestToken": "string"
      }
    ],
    "languageCode": "string",
    "latestVerificationResult": "RESULT_UNSPECIFIED",
    "username": "string"
  },
  "event": {
    "expectedAction": "string",
    "express": true,
    "firewallPolicyEvaluation": true,
    "hashedAccountId": "string",
    "headers": [
      "string"
    ],
    "ja3": "string",
    "requestedUri": "string",
    "siteKey": "string",
    "token": "string",
    "transactionData": {
      "billingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "cardBin": "string",
      "cardLastFour": "string",
      "currencyCode": "string",
      "gatewayInfo": {
        "avsResponseCode": "string",
        "cvvResponseCode": "string",
        "gatewayResponseCode": "string",
        "name": "string"
      },
      "items": [
        {
          "merchantAccountId": "string",
          "name": "string",
          "quantity": "string",
          "value": 0
        }
      ],
      "merchants": [
        {
          "accountId": "string",
          "creationMs": "string",
          "email": "string",
          "emailVerified": true,
          "phoneNumber": "string",
          "phoneVerified": true
        }
      ],
      "paymentMethod": "string",
      "shippingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "shippingValue": 0,
      "transactionId": "string",
      "user": {
        "accountId": "string",
        "creationMs": "string",
        "email": "string",
        "emailVerified": true,
        "phoneNumber": "string",
        "phoneVerified": true
      },
      "value": 0
    },
    "userAgent": "string",
    "userIpAddress": "string",
    "wafTokenAssessment": true
  },
  "firewallPolicyAssessment": {
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
    "firewallPolicy": {
      "actions": [
        {
          "allow": {},
          "block": {},
          "redirect": {},
          "setHeader": {
            "key": "string",
            "value": "string"
          },
          "substitute": {
            "path": "string"
          }
        }
      ],
      "condition": "string",
      "description": "string",
      "name": "string",
      "path": "string"
    }
  },
  "fraudPreventionAssessment": {
    "behavioralTrustVerdict": {
      "trust": 0
    },
    "cardTestingVerdict": {
      "risk": 0
    },
    "stolenInstrumentVerdict": {
      "risk": 0
    },
    "transactionRisk": 0
  },
  "name": "string",
  "privatePasswordLeakVerification": {
    "encryptedLeakMatchPrefixes": [
      "string"
    ],
    "encryptedUserCredentialsHash": "string",
    "lookupHashPrefix": "string",
    "reencryptedUserCredentialsHash": "string"
  },
  "riskAnalysis": {
    "extendedVerdictReasons": [
      "string"
    ],
    "reasons": [
      "CLASSIFICATION_REASON_UNSPECIFIED"
    ],
    "score": 0
  },
  "tokenProperties": {
    "action": "string",
    "androidPackageName": "string",
    "createTime": "string",
    "hostname": "string",
    "invalidReason": "INVALID_REASON_UNSPECIFIED",
    "iosBundleId": "string",
    "valid": true
  }
}
```

<h3 id="recaptchaenterpriseprojectsassessmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1Assessment](#schemagooglecloudrecaptchaenterprisev1assessment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.firewallpolicies.list

<a id="opIdrecaptchaenterprise.projects.firewallpolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/firewallpolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/firewallpolicies`

Returns the list of all firewall policies that belong to a project.

<h3 id="recaptchaenterpriseprojectsfirewallpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project to list the policies for, in the format "projects/{project}".|
|pageSize|query|integer|false|Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.|
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
  "firewallPolicies": [
    {
      "actions": [
        {
          "allow": {},
          "block": {},
          "redirect": {},
          "setHeader": {
            "key": "string",
            "value": "string"
          },
          "substitute": {
            "path": "string"
          }
        }
      ],
      "condition": "string",
      "description": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="recaptchaenterpriseprojectsfirewallpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse](#schemagooglecloudrecaptchaenterprisev1listfirewallpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.firewallpolicies.create

<a id="opIdrecaptchaenterprise.projects.firewallpolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/firewallpolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "allow": {},
        "block": {},
        "redirect": {},
        "setHeader": {
          "key": "string",
          "value": "string"
        },
        "substitute": {
          "path": "string"
        }
      }
    ],
    "condition": "string",
    "description": "string",
    "name": "string",
    "path": "string"
  }'
```

`POST /v1/{parent}/firewallpolicies`

Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

> Body parameter

```json
{
  "actions": [
    {
      "allow": {},
      "block": {},
      "redirect": {},
      "setHeader": {
        "key": "string",
        "value": "string"
      },
      "substitute": {
        "path": "string"
      }
    }
  ],
  "condition": "string",
  "description": "string",
  "name": "string",
  "path": "string"
}
```

<h3 id="recaptchaenterpriseprojectsfirewallpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project this policy will apply to, in the format "projects/{project}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1FirewallPolicy](#schemagooglecloudrecaptchaenterprisev1firewallpolicy)|false|none|
|» actions|body|[[GoogleCloudRecaptchaenterpriseV1FirewallAction](#schemagooglecloudrecaptchaenterprisev1firewallaction)]|false|The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as AllowAction, BlockAction or SubstituteAction. Zero or more non-terminal actions such as SetHeader might be specified. A single policy can contain up to 16 actions.|
|» condition|body|string|false|A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.|
|» description|body|string|false|A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.|
|» name|body|string|false|The resource name for the FirewallPolicy in the format "projects/{project}/firewallpolicies/{firewallpolicy}".|
|» path|body|string|false|The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.|

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
  "actions": [
    {
      "allow": {},
      "block": {},
      "redirect": {},
      "setHeader": {
        "key": "string",
        "value": "string"
      },
      "substitute": {
        "path": "string"
      }
    }
  ],
  "condition": "string",
  "description": "string",
  "name": "string",
  "path": "string"
}
```

<h3 id="recaptchaenterpriseprojectsfirewallpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1FirewallPolicy](#schemagooglecloudrecaptchaenterprisev1firewallpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.list

<a id="opIdrecaptchaenterprise.projects.keys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/keys`

Returns the list of all keys that belong to a project.

<h3 id="recaptchaenterpriseprojectskeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project that contains the keys that will be listed, in the format "projects/{project}".|
|pageSize|query|integer|false|Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.|
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
  "keys": [
    {
      "androidSettings": {
        "allowAllPackageNames": true,
        "allowedPackageNames": [
          "string"
        ],
        "supportNonGoogleAppStoreDistribution": true
      },
      "createTime": "string",
      "displayName": "string",
      "iosSettings": {
        "allowAllBundleIds": true,
        "allowedBundleIds": [
          "string"
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "testingOptions": {
        "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
        "testingScore": 0
      },
      "wafSettings": {
        "wafFeature": "WAF_FEATURE_UNSPECIFIED",
        "wafService": "WAF_SERVICE_UNSPECIFIED"
      },
      "webSettings": {
        "allowAllDomains": true,
        "allowAmpTraffic": true,
        "allowedDomains": [
          "string"
        ],
        "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
        "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="recaptchaenterpriseprojectskeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1ListKeysResponse](#schemagooglecloudrecaptchaenterprisev1listkeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.keys.create

<a id="opIdrecaptchaenterprise.projects.keys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "androidSettings": {
      "allowAllPackageNames": true,
      "allowedPackageNames": [
        "string"
      ],
      "supportNonGoogleAppStoreDistribution": true
    },
    "displayName": "string",
    "iosSettings": {
      "allowAllBundleIds": true,
      "allowedBundleIds": [
        "string"
      ]
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "testingOptions": {
      "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
      "testingScore": 0
    },
    "wafSettings": {
      "wafFeature": "WAF_FEATURE_UNSPECIFIED",
      "wafService": "WAF_SERVICE_UNSPECIFIED"
    },
    "webSettings": {
      "allowAllDomains": true,
      "allowAmpTraffic": true,
      "allowedDomains": [
        "string"
      ],
      "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
      "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/keys`

Creates a new reCAPTCHA Enterprise key.

> Body parameter

```json
{
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="recaptchaenterpriseprojectskeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in which the key will be created, in the format "projects/{project}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)|false|none|
|» androidSettings|body|[GoogleCloudRecaptchaenterpriseV1AndroidKeySettings](#schemagooglecloudrecaptchaenterprisev1androidkeysettings)|false|Settings for keys that can be used by Android apps.|
|» displayName|body|string|false|Human-readable display name of this key. Modifiable by user.|
|» iosSettings|body|[GoogleCloudRecaptchaenterpriseV1IOSKeySettings](#schemagooglecloudrecaptchaenterprisev1ioskeysettings)|false|Settings for keys that can be used by iOS apps.|
|» labels|body|object|false|See Creating and managing labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource name for the Key in the format "projects/{project}/keys/{key}".|
|» testingOptions|body|[GoogleCloudRecaptchaenterpriseV1TestingOptions](#schemagooglecloudrecaptchaenterprisev1testingoptions)|false|Options for user acceptance testing.|
|» wafSettings|body|[GoogleCloudRecaptchaenterpriseV1WafSettings](#schemagooglecloudrecaptchaenterprisev1wafsettings)|false|Settings for WAF|
|» webSettings|body|[GoogleCloudRecaptchaenterpriseV1WebKeySettings](#schemagooglecloudrecaptchaenterprisev1webkeysettings)|false|Settings for keys that can be used by websites.|

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
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "createTime": "string",
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="recaptchaenterpriseprojectskeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.relatedaccountgroups.memberships.list

<a id="opIdrecaptchaenterprise.projects.relatedaccountgroups.memberships.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/memberships`

Get memberships in a group of related accounts.

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.|
|pageSize|query|integer|false|Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.|
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
  "relatedAccountGroupMemberships": [
    {
      "hashedAccountId": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse](#schemagooglecloudrecaptchaenterprisev1listrelatedaccountgroupmembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.relatedaccountgroups.list

<a id="opIdrecaptchaenterprise.projects.relatedaccountgroups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/relatedaccountgroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/relatedaccountgroups`

List groups of related accounts.

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project to list related account groups from, in the format "projects/{project}".|
|pageSize|query|integer|false|Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.|
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
  "relatedAccountGroups": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse](#schemagooglecloudrecaptchaenterprisev1listrelatedaccountgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recaptchaenterprise.projects.relatedaccountgroupmemberships.search

<a id="opIdrecaptchaenterprise.projects.relatedaccountgroupmemberships.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/relatedaccountgroupmemberships:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hashedAccountId": "string",
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1/{project}/relatedaccountgroupmemberships:search`

Search group memberships related to a given account.

> Body parameter

```json
{
  "hashedAccountId": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Required. The name of the project to search related account group memberships from. Specify the project name in the following format: "projects/{project}".|
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
|body|body|[GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest](#schemagooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsrequest)|false|none|
|» hashedAccountId|body|string(byte)|false|Optional. The unique stable hashed user identifier we should search connections to. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.|
|» pageToken|body|string|false|Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.|

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
  "relatedAccountGroupMemberships": [
    {
      "hashedAccountId": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse](#schemagooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment">GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1accountdefenderassessment"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1accountdefenderassessment"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1accountdefenderassessment"></a>

```json
{
  "labels": [
    "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
  ]
}
```

Account defender risk assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|Labels for this request.|

#### Enumerated Values

|Property|Value|
|---|---|
|labels|ACCOUNT_DEFENDER_LABEL_UNSPECIFIED|
|labels|PROFILE_MATCH|
|labels|SUSPICIOUS_LOGIN_ACTIVITY|
|labels|SUSPICIOUS_ACCOUNT_CREATION|
|labels|RELATED_ACCOUNTS_NUMBER_HIGH|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo">GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1accountverificationinfo"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1accountverificationinfo"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1accountverificationinfo"></a>

```json
{
  "endpoints": [
    {
      "emailAddress": "string",
      "lastVerificationTime": "string",
      "phoneNumber": "string",
      "requestToken": "string"
    }
  ],
  "languageCode": "string",
  "latestVerificationResult": "RESULT_UNSPECIFIED",
  "username": "string"
}
```

Information about account verification, used for identity verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[[GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo](#schemagooglecloudrecaptchaenterprisev1endpointverificationinfo)]|false|none|Endpoints that can be used for identity verification.|
|languageCode|string|false|none|Language code preference for the verification message, set as a IETF BCP 47 language code.|
|latestVerificationResult|string|false|read-only|Output only. Result of the latest account verification challenge.|
|username|string|false|none|Username of the account that is being verified. Deprecated. Customers should now provide the hashed account ID field in Event.|

#### Enumerated Values

|Property|Value|
|---|---|
|latestVerificationResult|RESULT_UNSPECIFIED|
|latestVerificationResult|SUCCESS_USER_VERIFIED|
|latestVerificationResult|ERROR_USER_NOT_VERIFIED|
|latestVerificationResult|ERROR_SITE_ONBOARDING_INCOMPLETE|
|latestVerificationResult|ERROR_RECIPIENT_NOT_ALLOWED|
|latestVerificationResult|ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED|
|latestVerificationResult|ERROR_CRITICAL_INTERNAL|
|latestVerificationResult|ERROR_CUSTOMER_QUOTA_EXHAUSTED|
|latestVerificationResult|ERROR_VERIFICATION_BYPASSED|
|latestVerificationResult|ERROR_VERDICT_MISMATCH|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1AndroidKeySettings">GoogleCloudRecaptchaenterpriseV1AndroidKeySettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1androidkeysettings"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1AndroidKeySettings"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1androidkeysettings"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1androidkeysettings"></a>

```json
{
  "allowAllPackageNames": true,
  "allowedPackageNames": [
    "string"
  ],
  "supportNonGoogleAppStoreDistribution": true
}
```

Settings specific to keys that can be used by Android apps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAllPackageNames|boolean|false|none|If set to true, allowed_package_names are not enforced.|
|allowedPackageNames|[string]|false|none|Android package names of apps allowed to use the key. Example: 'com.companyname.appname'|
|supportNonGoogleAppStoreDistribution|boolean|false|none|Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest">GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1annotateassessmentrequest"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1annotateassessmentrequest"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1annotateassessmentrequest"></a>

```json
{
  "annotation": "ANNOTATION_UNSPECIFIED",
  "hashedAccountId": "string",
  "reasons": [
    "REASON_UNSPECIFIED"
  ],
  "transactionEvent": {
    "eventTime": "string",
    "eventType": "TRANSACTION_EVENT_TYPE_UNSPECIFIED",
    "reason": "string",
    "value": 0
  }
}
```

The request message to annotate an Assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation|string|false|none|Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.|
|hashedAccountId|string(byte)|false|none|Optional. Unique stable hashed user identifier to apply to the assessment. This is an alternative to setting the hashed_account_id in CreateAssessment, for example when the account identifier is not yet known in the initial request. It is recommended that the identifier is hashed using hmac-sha256 with stable secret.|
|reasons|[string]|false|none|Optional. Optional reasons for the annotation that will be assigned to the Event.|
|transactionEvent|[GoogleCloudRecaptchaenterpriseV1TransactionEvent](#schemagooglecloudrecaptchaenterprisev1transactionevent)|false|none|Optional. If the assessment is part of a payment transaction, provide details on payment lifecycle events that occur in the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|annotation|ANNOTATION_UNSPECIFIED|
|annotation|LEGITIMATE|
|annotation|FRAUDULENT|
|annotation|PASSWORD_CORRECT|
|annotation|PASSWORD_INCORRECT|
|reasons|REASON_UNSPECIFIED|
|reasons|CHARGEBACK|
|reasons|CHARGEBACK_FRAUD|
|reasons|CHARGEBACK_DISPUTE|
|reasons|REFUND|
|reasons|REFUND_FRAUD|
|reasons|TRANSACTION_ACCEPTED|
|reasons|TRANSACTION_DECLINED|
|reasons|PAYMENT_HEURISTICS|
|reasons|INITIATED_TWO_FACTOR|
|reasons|PASSED_TWO_FACTOR|
|reasons|FAILED_TWO_FACTOR|
|reasons|CORRECT_PASSWORD|
|reasons|INCORRECT_PASSWORD|
|reasons|SOCIAL_SPAM|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse">GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1annotateassessmentresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1annotateassessmentresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1annotateassessmentresponse"></a>

```json
{}
```

Empty response for AnnotateAssessment.

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1Assessment">GoogleCloudRecaptchaenterpriseV1Assessment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1assessment"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1Assessment"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1assessment"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1assessment"></a>

```json
{
  "accountDefenderAssessment": {
    "labels": [
      "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
    ]
  },
  "accountVerification": {
    "endpoints": [
      {
        "emailAddress": "string",
        "lastVerificationTime": "string",
        "phoneNumber": "string",
        "requestToken": "string"
      }
    ],
    "languageCode": "string",
    "latestVerificationResult": "RESULT_UNSPECIFIED",
    "username": "string"
  },
  "event": {
    "expectedAction": "string",
    "express": true,
    "firewallPolicyEvaluation": true,
    "hashedAccountId": "string",
    "headers": [
      "string"
    ],
    "ja3": "string",
    "requestedUri": "string",
    "siteKey": "string",
    "token": "string",
    "transactionData": {
      "billingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "cardBin": "string",
      "cardLastFour": "string",
      "currencyCode": "string",
      "gatewayInfo": {
        "avsResponseCode": "string",
        "cvvResponseCode": "string",
        "gatewayResponseCode": "string",
        "name": "string"
      },
      "items": [
        {
          "merchantAccountId": "string",
          "name": "string",
          "quantity": "string",
          "value": 0
        }
      ],
      "merchants": [
        {
          "accountId": "string",
          "creationMs": "string",
          "email": "string",
          "emailVerified": true,
          "phoneNumber": "string",
          "phoneVerified": true
        }
      ],
      "paymentMethod": "string",
      "shippingAddress": {
        "address": [
          "string"
        ],
        "administrativeArea": "string",
        "locality": "string",
        "postalCode": "string",
        "recipient": "string",
        "regionCode": "string"
      },
      "shippingValue": 0,
      "transactionId": "string",
      "user": {
        "accountId": "string",
        "creationMs": "string",
        "email": "string",
        "emailVerified": true,
        "phoneNumber": "string",
        "phoneVerified": true
      },
      "value": 0
    },
    "userAgent": "string",
    "userIpAddress": "string",
    "wafTokenAssessment": true
  },
  "firewallPolicyAssessment": {
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
    "firewallPolicy": {
      "actions": [
        {
          "allow": {},
          "block": {},
          "redirect": {},
          "setHeader": {
            "key": "string",
            "value": "string"
          },
          "substitute": {
            "path": "string"
          }
        }
      ],
      "condition": "string",
      "description": "string",
      "name": "string",
      "path": "string"
    }
  },
  "fraudPreventionAssessment": {
    "behavioralTrustVerdict": {
      "trust": 0
    },
    "cardTestingVerdict": {
      "risk": 0
    },
    "stolenInstrumentVerdict": {
      "risk": 0
    },
    "transactionRisk": 0
  },
  "name": "string",
  "privatePasswordLeakVerification": {
    "encryptedLeakMatchPrefixes": [
      "string"
    ],
    "encryptedUserCredentialsHash": "string",
    "lookupHashPrefix": "string",
    "reencryptedUserCredentialsHash": "string"
  },
  "riskAnalysis": {
    "extendedVerdictReasons": [
      "string"
    ],
    "reasons": [
      "CLASSIFICATION_REASON_UNSPECIFIED"
    ],
    "score": 0
  },
  "tokenProperties": {
    "action": "string",
    "androidPackageName": "string",
    "createTime": "string",
    "hostname": "string",
    "invalidReason": "INVALID_REASON_UNSPECIFIED",
    "iosBundleId": "string",
    "valid": true
  }
}
```

A reCAPTCHA Enterprise assessment resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountDefenderAssessment|[GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment](#schemagooglecloudrecaptchaenterprisev1accountdefenderassessment)|false|none|Assessment returned by account defender when a hashed_account_id is provided.|
|accountVerification|[GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo](#schemagooglecloudrecaptchaenterprisev1accountverificationinfo)|false|none|Account verification information for identity verification. The assessment event must include a token and site key to use this feature.|
|event|[GoogleCloudRecaptchaenterpriseV1Event](#schemagooglecloudrecaptchaenterprisev1event)|false|none|The event being assessed.|
|firewallPolicyAssessment|[GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment](#schemagooglecloudrecaptchaenterprisev1firewallpolicyassessment)|false|none|Assessment returned when firewall policies belonging to the project are evaluated using the field firewall_policy_evaluation.|
|fraudPreventionAssessment|[GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment](#schemagooglecloudrecaptchaenterprisev1fraudpreventionassessment)|false|none|Assessment returned by Fraud Prevention when TransactionData is provided.|
|name|string|false|read-only|Output only. The resource name for the Assessment in the format "projects/{project}/assessments/{assessment}".|
|privatePasswordLeakVerification|[GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification](#schemagooglecloudrecaptchaenterprisev1privatepasswordleakverification)|false|none|The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.|
|riskAnalysis|[GoogleCloudRecaptchaenterpriseV1RiskAnalysis](#schemagooglecloudrecaptchaenterprisev1riskanalysis)|false|none|Output only. The risk analysis result for the event being assessed.|
|tokenProperties|[GoogleCloudRecaptchaenterpriseV1TokenProperties](#schemagooglecloudrecaptchaenterprisev1tokenproperties)|false|none|Output only. Properties of the provided event token.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ChallengeMetrics">GoogleCloudRecaptchaenterpriseV1ChallengeMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1challengemetrics"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ChallengeMetrics"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1challengemetrics"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1challengemetrics"></a>

```json
{
  "failedCount": "string",
  "nocaptchaCount": "string",
  "pageloadCount": "string",
  "passedCount": "string"
}
```

Metrics related to challenges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedCount|string(int64)|false|none|Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered.|
|nocaptchaCount|string(int64)|false|none|Count of nocaptchas (successful verification without a challenge) issued.|
|pageloadCount|string(int64)|false|none|Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA.|
|passedCount|string(int64)|false|none|Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo">GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1endpointverificationinfo"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1endpointverificationinfo"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1endpointverificationinfo"></a>

```json
{
  "emailAddress": "string",
  "lastVerificationTime": "string",
  "phoneNumber": "string",
  "requestToken": "string"
}
```

Information about a verification endpoint that can be used for 2FA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|Email address for which to trigger a verification request.|
|lastVerificationTime|string(google-datetime)|false|read-only|Output only. Timestamp of the last successful verification for the endpoint, if any.|
|phoneNumber|string|false|none|Phone number for which to trigger a verification request. Should be given in E.164 format.|
|requestToken|string|false|read-only|Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1Event">GoogleCloudRecaptchaenterpriseV1Event</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1event"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1Event"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1event"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1event"></a>

```json
{
  "expectedAction": "string",
  "express": true,
  "firewallPolicyEvaluation": true,
  "hashedAccountId": "string",
  "headers": [
    "string"
  ],
  "ja3": "string",
  "requestedUri": "string",
  "siteKey": "string",
  "token": "string",
  "transactionData": {
    "billingAddress": {
      "address": [
        "string"
      ],
      "administrativeArea": "string",
      "locality": "string",
      "postalCode": "string",
      "recipient": "string",
      "regionCode": "string"
    },
    "cardBin": "string",
    "cardLastFour": "string",
    "currencyCode": "string",
    "gatewayInfo": {
      "avsResponseCode": "string",
      "cvvResponseCode": "string",
      "gatewayResponseCode": "string",
      "name": "string"
    },
    "items": [
      {
        "merchantAccountId": "string",
        "name": "string",
        "quantity": "string",
        "value": 0
      }
    ],
    "merchants": [
      {
        "accountId": "string",
        "creationMs": "string",
        "email": "string",
        "emailVerified": true,
        "phoneNumber": "string",
        "phoneVerified": true
      }
    ],
    "paymentMethod": "string",
    "shippingAddress": {
      "address": [
        "string"
      ],
      "administrativeArea": "string",
      "locality": "string",
      "postalCode": "string",
      "recipient": "string",
      "regionCode": "string"
    },
    "shippingValue": 0,
    "transactionId": "string",
    "user": {
      "accountId": "string",
      "creationMs": "string",
      "email": "string",
      "emailVerified": true,
      "phoneNumber": "string",
      "phoneVerified": true
    },
    "value": 0
  },
  "userAgent": "string",
  "userIpAddress": "string",
  "wafTokenAssessment": true
}
```

The event being assessed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedAction|string|false|none|Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise.|
|express|boolean|false|none|Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference a SCORE key with WAF feature set to EXPRESS.|
|firewallPolicyEvaluation|boolean|false|none|Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response.|
|hashedAccountId|string(byte)|false|none|Optional. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret.|
|headers|[string]|false|none|Optional. HTTP header information about the request.|
|ja3|string|false|none|Optional. Optional JA3 fingerprint for SSL clients.|
|requestedUri|string|false|none|Optional. The URI resource the user requested that triggered an assessment.|
|siteKey|string|false|none|Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token.|
|token|string|false|none|Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site.|
|transactionData|[GoogleCloudRecaptchaenterpriseV1TransactionData](#schemagooglecloudrecaptchaenterprisev1transactiondata)|false|none|Optional. Data describing a payment transaction to be assessed. Sending this data enables reCAPTCHA Enterprise Fraud Prevention and the FraudPreventionAssessment component in the response.|
|userAgent|string|false|none|Optional. The user agent present in the request from the user's device related to this event.|
|userIpAddress|string|false|none|Optional. The IP address in the request from the user's device related to this event.|
|wafTokenAssessment|boolean|false|none|Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallAction">GoogleCloudRecaptchaenterpriseV1FirewallAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallaction"></a>

```json
{
  "allow": {},
  "block": {},
  "redirect": {},
  "setHeader": {
    "key": "string",
    "value": "string"
  },
  "substitute": {
    "path": "string"
  }
}
```

An individual action. Each action represents what to do if a policy matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow|[GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction](#schemagooglecloudrecaptchaenterprisev1firewallactionallowaction)|false|none|The user request did not match any policy and should be allowed access to the requested resource.|
|block|[GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction](#schemagooglecloudrecaptchaenterprisev1firewallactionblockaction)|false|none|This action will deny access to a given page. The user will get an HTTP error code.|
|redirect|[GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction](#schemagooglecloudrecaptchaenterprisev1firewallactionredirectaction)|false|none|This action will redirect the request to a ReCaptcha interstitial to attach a token.|
|setHeader|[GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction](#schemagooglecloudrecaptchaenterprisev1firewallactionsetheaderaction)|false|none|This action will set a custom header but allow the request to continue to the customer backend.|
|substitute|[GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction](#schemagooglecloudrecaptchaenterprisev1firewallactionsubstituteaction)|false|none|This action will transparently serve a different page to an offending user.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction">GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallactionallowaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallactionallowaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallactionallowaction"></a>

```json
{}
```

An allow action continues processing a request unimpeded.

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction">GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallactionblockaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallactionblockaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallactionblockaction"></a>

```json
{}
```

A block action serves an HTTP error code a prevents the request from hitting the backend.

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction">GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallactionredirectaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallactionredirectaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallactionredirectaction"></a>

```json
{}
```

A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token.

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction">GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallactionsetheaderaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallactionsetheaderaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallactionsetheaderaction"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The header key to set in the request to the backend server.|
|value|string|false|none|The header value to set in the request to the backend server.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction">GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallactionsubstituteaction"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallactionsubstituteaction"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallactionsubstituteaction"></a>

```json
{
  "path": "string"
}
```

A substitute action transparently serves a different page than the one requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|The address to redirect to. The target is a relative path in the current host. Example: "/blog/404.html".|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallPolicy">GoogleCloudRecaptchaenterpriseV1FirewallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallpolicy"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallPolicy"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallpolicy"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallpolicy"></a>

```json
{
  "actions": [
    {
      "allow": {},
      "block": {},
      "redirect": {},
      "setHeader": {
        "key": "string",
        "value": "string"
      },
      "substitute": {
        "path": "string"
      }
    }
  ],
  "condition": "string",
  "description": "string",
  "name": "string",
  "path": "string"
}
```

A FirewallPolicy represents a single matching pattern and resulting actions to take.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[GoogleCloudRecaptchaenterpriseV1FirewallAction](#schemagooglecloudrecaptchaenterprisev1firewallaction)]|false|none|The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as AllowAction, BlockAction or SubstituteAction. Zero or more non-terminal actions such as SetHeader might be specified. A single policy can contain up to 16 actions.|
|condition|string|false|none|A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.|
|description|string|false|none|A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.|
|name|string|false|none|The resource name for the FirewallPolicy in the format "projects/{project}/firewallpolicies/{firewallpolicy}".|
|path|string|false|none|The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment">GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1firewallpolicyassessment"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1firewallpolicyassessment"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1firewallpolicyassessment"></a>

```json
{
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
  "firewallPolicy": {
    "actions": [
      {
        "allow": {},
        "block": {},
        "redirect": {},
        "setHeader": {
          "key": "string",
          "value": "string"
        },
        "substitute": {
          "path": "string"
        }
      }
    ],
    "condition": "string",
    "description": "string",
    "name": "string",
    "path": "string"
  }
}
```

Policy config assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|If the processing of a policy config fails, an error will be populated and the firewall_policy will be left empty.|
|firewallPolicy|[GoogleCloudRecaptchaenterpriseV1FirewallPolicy](#schemagooglecloudrecaptchaenterprisev1firewallpolicy)|false|none|Output only. The policy that matched the request. If more than one policy may match, this is the first match. If no policy matches the incoming request, the policy field will be left empty.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment">GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1fraudpreventionassessment"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1fraudpreventionassessment"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1fraudpreventionassessment"></a>

```json
{
  "behavioralTrustVerdict": {
    "trust": 0
  },
  "cardTestingVerdict": {
    "risk": 0
  },
  "stolenInstrumentVerdict": {
    "risk": 0
  },
  "transactionRisk": 0
}
```

Assessment for Fraud Prevention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavioralTrustVerdict|[GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict](#schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentbehavioraltrustverdict)|false|none|Assessment of this transaction for behavioral trust.|
|cardTestingVerdict|[GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict](#schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentcardtestingverdict)|false|none|Assessment of this transaction for risk of being part of a card testing attack.|
|stolenInstrumentVerdict|[GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict](#schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentstoleninstrumentverdict)|false|none|Assessment of this transaction for risk of a stolen instrument.|
|transactionRisk|number(float)|false|none|Probability (0-1) of this transaction being fraudulent. Summarizes the combined risk of attack vectors below.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict">GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentbehavioraltrustverdict"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1fraudpreventionassessmentbehavioraltrustverdict"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1fraudpreventionassessmentbehavioraltrustverdict"></a>

```json
{
  "trust": 0
}
```

Information about behavioral trust of the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trust|number(float)|false|none|Probability (0-1) of this transaction attempt being executed in a behaviorally trustworthy way.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict">GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentcardtestingverdict"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1fraudpreventionassessmentcardtestingverdict"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1fraudpreventionassessmentcardtestingverdict"></a>

```json
{
  "risk": 0
}
```

Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|risk|number(float)|false|none|Probability (0-1) of this transaction attempt being part of a card testing attack.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict">GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1fraudpreventionassessmentstoleninstrumentverdict"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1fraudpreventionassessmentstoleninstrumentverdict"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1fraudpreventionassessmentstoleninstrumentverdict"></a>

```json
{
  "risk": 0
}
```

Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|risk|number(float)|false|none|Probability (0-1) of this transaction being executed with a stolen instrument.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1IOSKeySettings">GoogleCloudRecaptchaenterpriseV1IOSKeySettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1ioskeysettings"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1IOSKeySettings"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1ioskeysettings"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1ioskeysettings"></a>

```json
{
  "allowAllBundleIds": true,
  "allowedBundleIds": [
    "string"
  ]
}
```

Settings specific to keys that can be used by iOS apps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAllBundleIds|boolean|false|none|If set to true, allowed_bundle_ids are not enforced.|
|allowedBundleIds|[string]|false|none|iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1Key">GoogleCloudRecaptchaenterpriseV1Key</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1key"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1Key"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1key"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1key"></a>

```json
{
  "androidSettings": {
    "allowAllPackageNames": true,
    "allowedPackageNames": [
      "string"
    ],
    "supportNonGoogleAppStoreDistribution": true
  },
  "createTime": "string",
  "displayName": "string",
  "iosSettings": {
    "allowAllBundleIds": true,
    "allowedBundleIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "testingOptions": {
    "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
    "testingScore": 0
  },
  "wafSettings": {
    "wafFeature": "WAF_FEATURE_UNSPECIFIED",
    "wafService": "WAF_SERVICE_UNSPECIFIED"
  },
  "webSettings": {
    "allowAllDomains": true,
    "allowAmpTraffic": true,
    "allowedDomains": [
      "string"
    ],
    "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
  }
}
```

A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidSettings|[GoogleCloudRecaptchaenterpriseV1AndroidKeySettings](#schemagooglecloudrecaptchaenterprisev1androidkeysettings)|false|none|Settings for keys that can be used by Android apps.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp corresponding to the creation of this key.|
|displayName|string|false|none|Human-readable display name of this key. Modifiable by user.|
|iosSettings|[GoogleCloudRecaptchaenterpriseV1IOSKeySettings](#schemagooglecloudrecaptchaenterprisev1ioskeysettings)|false|none|Settings for keys that can be used by iOS apps.|
|labels|object|false|none|See Creating and managing labels.|
|name|string|false|none|The resource name for the Key in the format "projects/{project}/keys/{key}".|
|testingOptions|[GoogleCloudRecaptchaenterpriseV1TestingOptions](#schemagooglecloudrecaptchaenterprisev1testingoptions)|false|none|Options for user acceptance testing.|
|wafSettings|[GoogleCloudRecaptchaenterpriseV1WafSettings](#schemagooglecloudrecaptchaenterprisev1wafsettings)|false|none|Settings for WAF|
|webSettings|[GoogleCloudRecaptchaenterpriseV1WebKeySettings](#schemagooglecloudrecaptchaenterprisev1webkeysettings)|false|none|Settings for keys that can be used by websites.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse">GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1listfirewallpoliciesresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1listfirewallpoliciesresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1listfirewallpoliciesresponse"></a>

```json
{
  "firewallPolicies": [
    {
      "actions": [
        {
          "allow": {},
          "block": {},
          "redirect": {},
          "setHeader": {
            "key": "string",
            "value": "string"
          },
          "substitute": {
            "path": "string"
          }
        }
      ],
      "condition": "string",
      "description": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response to request to list firewall policies belonging to a key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewallPolicies|[[GoogleCloudRecaptchaenterpriseV1FirewallPolicy](#schemagooglecloudrecaptchaenterprisev1firewallpolicy)]|false|none|Policy details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. It is set to empty if no policies remain in results.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ListKeysResponse">GoogleCloudRecaptchaenterpriseV1ListKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1listkeysresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ListKeysResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1listkeysresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1listkeysresponse"></a>

```json
{
  "keys": [
    {
      "androidSettings": {
        "allowAllPackageNames": true,
        "allowedPackageNames": [
          "string"
        ],
        "supportNonGoogleAppStoreDistribution": true
      },
      "createTime": "string",
      "displayName": "string",
      "iosSettings": {
        "allowAllBundleIds": true,
        "allowedBundleIds": [
          "string"
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "testingOptions": {
        "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
        "testingScore": 0
      },
      "wafSettings": {
        "wafFeature": "WAF_FEATURE_UNSPECIFIED",
        "wafService": "WAF_SERVICE_UNSPECIFIED"
      },
      "webSettings": {
        "allowAllDomains": true,
        "allowAmpTraffic": true,
        "allowedDomains": [
          "string"
        ],
        "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
        "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response to request to list keys in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[GoogleCloudRecaptchaenterpriseV1Key](#schemagooglecloudrecaptchaenterprisev1key)]|false|none|Key details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. It is set to empty if no keys remain in results.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse">GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1listrelatedaccountgroupmembershipsresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1listrelatedaccountgroupmembershipsresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1listrelatedaccountgroupmembershipsresponse"></a>

```json
{
  "nextPageToken": "string",
  "relatedAccountGroupMemberships": [
    {
      "hashedAccountId": "string",
      "name": "string"
    }
  ]
}
```

The response to a `ListRelatedAccountGroupMemberships` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|relatedAccountGroupMemberships|[[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership](#schemagooglecloudrecaptchaenterprisev1relatedaccountgroupmembership)]|false|none|The memberships listed by the query.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse">GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1listrelatedaccountgroupsresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1listrelatedaccountgroupsresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1listrelatedaccountgroupsresponse"></a>

```json
{
  "nextPageToken": "string",
  "relatedAccountGroups": [
    {
      "name": "string"
    }
  ]
}
```

The response to a `ListRelatedAccountGroups` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|relatedAccountGroups|[[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup](#schemagooglecloudrecaptchaenterprisev1relatedaccountgroup)]|false|none|The groups of related accounts listed by the query.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1Metrics">GoogleCloudRecaptchaenterpriseV1Metrics</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1metrics"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1Metrics"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1metrics"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1metrics"></a>

```json
{
  "challengeMetrics": [
    {
      "failedCount": "string",
      "nocaptchaCount": "string",
      "pageloadCount": "string",
      "passedCount": "string"
    }
  ],
  "name": "string",
  "scoreMetrics": [
    {
      "actionMetrics": {
        "property1": {
          "scoreBuckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "scoreBuckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "overallMetrics": {
        "scoreBuckets": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "startTime": "string"
}
```

Metrics for a single Key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challengeMetrics|[[GoogleCloudRecaptchaenterpriseV1ChallengeMetrics](#schemagooglecloudrecaptchaenterprisev1challengemetrics)]|false|none|Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data.|
|name|string|false|read-only|Output only. The name of the metrics, in the format "projects/{project}/keys/{key}/metrics".|
|scoreMetrics|[[GoogleCloudRecaptchaenterpriseV1ScoreMetrics](#schemagooglecloudrecaptchaenterprisev1scoremetrics)]|false|none|Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.|
|startTime|string(google-datetime)|false|none|Inclusive start time aligned to a day (UTC).|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest">GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1migratekeyrequest"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1migratekeyrequest"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1migratekeyrequest"></a>

```json
{
  "skipBillingCheck": true
}
```

The migrate key request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skipBillingCheck|boolean|false|none|Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification">GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1privatepasswordleakverification"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1privatepasswordleakverification"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1privatepasswordleakverification"></a>

```json
{
  "encryptedLeakMatchPrefixes": [
    "string"
  ],
  "encryptedUserCredentialsHash": "string",
  "lookupHashPrefix": "string",
  "reencryptedUserCredentialsHash": "string"
}
```

Private password leak verification info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedLeakMatchPrefixes|[string(byte)]|false|read-only|Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of `reencrypted_user_credentials_hash`|
|encryptedUserCredentialsHash|string(byte)|false|none|Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`.|
|lookupHashPrefix|string(byte)|false|none|Optional. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix.|
|reencryptedUserCredentialsHash|string(byte)|false|read-only|Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup">GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1relatedaccountgroup"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1relatedaccountgroup"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1relatedaccountgroup"></a>

```json
{
  "name": "string"
}
```

A group of related accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{related_account_group}`.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership">GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1relatedaccountgroupmembership"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1relatedaccountgroupmembership"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1relatedaccountgroupmembership"></a>

```json
{
  "hashedAccountId": "string",
  "name": "string"
}
```

A membership in a group of related accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashedAccountId|string(byte)|false|none|The unique stable hashed user identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.|
|name|string|false|none|Required. The resource name for this membership in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}`.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse">GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1retrievelegacysecretkeyresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1retrievelegacysecretkeyresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1retrievelegacysecretkeyresponse"></a>

```json
{
  "legacySecretKey": "string"
}
```

Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacySecretKey|string|false|none|The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1RiskAnalysis">GoogleCloudRecaptchaenterpriseV1RiskAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1riskanalysis"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1RiskAnalysis"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1riskanalysis"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1riskanalysis"></a>

```json
{
  "extendedVerdictReasons": [
    "string"
  ],
  "reasons": [
    "CLASSIFICATION_REASON_UNSPECIFIED"
  ],
  "score": 0
}
```

Risk analysis result for an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extendedVerdictReasons|[string]|false|none|Extended verdict reasons to be used for experimentation only. The set of possible reasons is subject to change.|
|reasons|[string]|false|none|Reasons contributing to the risk analysis verdict.|
|score|number(float)|false|none|Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic).|

#### Enumerated Values

|Property|Value|
|---|---|
|reasons|CLASSIFICATION_REASON_UNSPECIFIED|
|reasons|AUTOMATION|
|reasons|UNEXPECTED_ENVIRONMENT|
|reasons|TOO_MUCH_TRAFFIC|
|reasons|UNEXPECTED_USAGE_PATTERNS|
|reasons|LOW_CONFIDENCE_SCORE|
|reasons|SUSPECTED_CARDING|
|reasons|SUSPECTED_CHARGEBACK|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ScoreDistribution">GoogleCloudRecaptchaenterpriseV1ScoreDistribution</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1scoredistribution"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ScoreDistribution"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1scoredistribution"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1scoredistribution"></a>

```json
{
  "scoreBuckets": {
    "property1": "string",
    "property2": "string"
  }
}
```

Score distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreBuckets|object|false|none|Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10).|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1ScoreMetrics">GoogleCloudRecaptchaenterpriseV1ScoreMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1scoremetrics"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1ScoreMetrics"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1scoremetrics"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1scoremetrics"></a>

```json
{
  "actionMetrics": {
    "property1": {
      "scoreBuckets": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "scoreBuckets": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "overallMetrics": {
    "scoreBuckets": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Metrics related to scoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionMetrics|object|false|none|Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call.|
|overallMetrics|[GoogleCloudRecaptchaenterpriseV1ScoreDistribution](#schemagooglecloudrecaptchaenterprisev1scoredistribution)|false|none|Aggregated score metrics for all traffic.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest">GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsrequest"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsrequest"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsrequest"></a>

```json
{
  "hashedAccountId": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

The request message to search related account group memberships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashedAccountId|string(byte)|false|none|Optional. The unique stable hashed user identifier we should search connections to. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.|
|pageSize|integer(int32)|false|none|Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.|
|pageToken|string|false|none|Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse">GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsresponse"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsresponse"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1searchrelatedaccountgroupmembershipsresponse"></a>

```json
{
  "nextPageToken": "string",
  "relatedAccountGroupMemberships": [
    {
      "hashedAccountId": "string",
      "name": "string"
    }
  ]
}
```

The response to a `SearchRelatedAccountGroupMemberships` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|relatedAccountGroupMemberships|[[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership](#schemagooglecloudrecaptchaenterprisev1relatedaccountgroupmembership)]|false|none|The queried memberships.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TestingOptions">GoogleCloudRecaptchaenterpriseV1TestingOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1testingoptions"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TestingOptions"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1testingoptions"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1testingoptions"></a>

```json
{
  "testingChallenge": "TESTING_CHALLENGE_UNSPECIFIED",
  "testingScore": 0
}
```

Options for user acceptance testing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testingChallenge|string|false|none|For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.|
|testingScore|number(float)|false|none|All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.|

#### Enumerated Values

|Property|Value|
|---|---|
|testingChallenge|TESTING_CHALLENGE_UNSPECIFIED|
|testingChallenge|NOCAPTCHA|
|testingChallenge|UNSOLVABLE_CHALLENGE|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TokenProperties">GoogleCloudRecaptchaenterpriseV1TokenProperties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1tokenproperties"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TokenProperties"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1tokenproperties"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1tokenproperties"></a>

```json
{
  "action": "string",
  "androidPackageName": "string",
  "createTime": "string",
  "hostname": "string",
  "invalidReason": "INVALID_REASON_UNSPECIFIED",
  "iosBundleId": "string",
  "valid": true
}
```

Properties of the provided event token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action name provided at token generation.|
|androidPackageName|string|false|none|The name of the Android package with which the token was generated (Android keys only).|
|createTime|string(google-datetime)|false|none|The timestamp corresponding to the generation of the token.|
|hostname|string|false|none|The hostname of the page on which the token was generated (Web keys only).|
|invalidReason|string|false|none|Reason associated with the response when valid = false.|
|iosBundleId|string|false|none|The ID of the iOS bundle with which the token was generated (iOS keys only).|
|valid|boolean|false|none|Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment).|

#### Enumerated Values

|Property|Value|
|---|---|
|invalidReason|INVALID_REASON_UNSPECIFIED|
|invalidReason|UNKNOWN_INVALID_REASON|
|invalidReason|MALFORMED|
|invalidReason|EXPIRED|
|invalidReason|DUPE|
|invalidReason|MISSING|
|invalidReason|BROWSER_ERROR|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionData">GoogleCloudRecaptchaenterpriseV1TransactionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactiondata"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionData"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactiondata"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactiondata"></a>

```json
{
  "billingAddress": {
    "address": [
      "string"
    ],
    "administrativeArea": "string",
    "locality": "string",
    "postalCode": "string",
    "recipient": "string",
    "regionCode": "string"
  },
  "cardBin": "string",
  "cardLastFour": "string",
  "currencyCode": "string",
  "gatewayInfo": {
    "avsResponseCode": "string",
    "cvvResponseCode": "string",
    "gatewayResponseCode": "string",
    "name": "string"
  },
  "items": [
    {
      "merchantAccountId": "string",
      "name": "string",
      "quantity": "string",
      "value": 0
    }
  ],
  "merchants": [
    {
      "accountId": "string",
      "creationMs": "string",
      "email": "string",
      "emailVerified": true,
      "phoneNumber": "string",
      "phoneVerified": true
    }
  ],
  "paymentMethod": "string",
  "shippingAddress": {
    "address": [
      "string"
    ],
    "administrativeArea": "string",
    "locality": "string",
    "postalCode": "string",
    "recipient": "string",
    "regionCode": "string"
  },
  "shippingValue": 0,
  "transactionId": "string",
  "user": {
    "accountId": "string",
    "creationMs": "string",
    "email": "string",
    "emailVerified": true,
    "phoneNumber": "string",
    "phoneVerified": true
  },
  "value": 0
}
```

Transaction data associated with a payment protected by reCAPTCHA Enterprise. All fields are optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|[GoogleCloudRecaptchaenterpriseV1TransactionDataAddress](#schemagooglecloudrecaptchaenterprisev1transactiondataaddress)|false|none|Address associated with the payment method when applicable.|
|cardBin|string|false|none|The Bank Identification Number - generally the first 6 or 8 digits of the card.|
|cardLastFour|string|false|none|The last four digits of the card.|
|currencyCode|string|false|none|The currency code in ISO-4217 format.|
|gatewayInfo|[GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo](#schemagooglecloudrecaptchaenterprisev1transactiondatagatewayinfo)|false|none|Information about the payment gateway's response to the transaction.|
|items|[[GoogleCloudRecaptchaenterpriseV1TransactionDataItem](#schemagooglecloudrecaptchaenterprisev1transactiondataitem)]|false|none|Items purchased in this transaction.|
|merchants|[[GoogleCloudRecaptchaenterpriseV1TransactionDataUser](#schemagooglecloudrecaptchaenterprisev1transactiondatauser)]|false|none|Information about the user or users fulfilling the transaction.|
|paymentMethod|string|false|none|The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto)|
|shippingAddress|[GoogleCloudRecaptchaenterpriseV1TransactionDataAddress](#schemagooglecloudrecaptchaenterprisev1transactiondataaddress)|false|none|Destination address if this transaction involves shipping a physical item.|
|shippingValue|number(double)|false|none|The value of shipping in the specified currency. 0 for free or no shipping.|
|transactionId|string|false|none|Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.|
|user|[GoogleCloudRecaptchaenterpriseV1TransactionDataUser](#schemagooglecloudrecaptchaenterprisev1transactiondatauser)|false|none|Information about the user paying/initiating the transaction.|
|value|number(double)|false|none|The decimal value of the transaction in the specified currency.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionDataAddress">GoogleCloudRecaptchaenterpriseV1TransactionDataAddress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactiondataaddress"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionDataAddress"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactiondataaddress"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactiondataaddress"></a>

```json
{
  "address": [
    "string"
  ],
  "administrativeArea": "string",
  "locality": "string",
  "postalCode": "string",
  "recipient": "string",
  "regionCode": "string"
}
```

Structured address format for billing and shipping addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[string]|false|none|The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number.|
|administrativeArea|string|false|none|The state, province, or otherwise administrative area of the address.|
|locality|string|false|none|The town/city of the address.|
|postalCode|string|false|none|The postal or ZIP code of the address.|
|recipient|string|false|none|The recipient name, potentially including information such as "care of".|
|regionCode|string|false|none|The CLDR country/region of the address.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo">GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactiondatagatewayinfo"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactiondatagatewayinfo"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactiondatagatewayinfo"></a>

```json
{
  "avsResponseCode": "string",
  "cvvResponseCode": "string",
  "gatewayResponseCode": "string",
  "name": "string"
}
```

Details about the transaction from the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avsResponseCode|string|false|none|AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).|
|cvvResponseCode|string|false|none|CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).|
|gatewayResponseCode|string|false|none|Gateway response code describing the state of the transaction.|
|name|string|false|none|Name of the gateway service (for example, stripe, square, paypal).|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionDataItem">GoogleCloudRecaptchaenterpriseV1TransactionDataItem</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactiondataitem"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionDataItem"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactiondataitem"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactiondataitem"></a>

```json
{
  "merchantAccountId": "string",
  "name": "string",
  "quantity": "string",
  "value": 0
}
```

Line items being purchased in this transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccountId|string|false|none|When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions.|
|name|string|false|none|The full name of the item.|
|quantity|string(int64)|false|none|The quantity of this item that is being purchased.|
|value|number(double)|false|none|The value per item that the user is paying, in the transaction currency, after discounts.|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionDataUser">GoogleCloudRecaptchaenterpriseV1TransactionDataUser</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactiondatauser"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionDataUser"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactiondatauser"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactiondatauser"></a>

```json
{
  "accountId": "string",
  "creationMs": "string",
  "email": "string",
  "emailVerified": true,
  "phoneNumber": "string",
  "phoneVerified": true
}
```

Details about a user's account involved in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account.|
|creationMs|string(int64)|false|none|The epoch milliseconds of the user's account creation.|
|email|string|false|none|The email address of the user.|
|emailVerified|boolean|false|none|Whether the email has been verified to be accessible by the user (OTP or similar).|
|phoneNumber|string|false|none|The phone number of the user, with country code.|
|phoneVerified|boolean|false|none|Whether the phone number has been verified to be accessible by the user (OTP or similar).|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1TransactionEvent">GoogleCloudRecaptchaenterpriseV1TransactionEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1transactionevent"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1TransactionEvent"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1transactionevent"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1transactionevent"></a>

```json
{
  "eventTime": "string",
  "eventType": "TRANSACTION_EVENT_TYPE_UNSPECIFIED",
  "reason": "string",
  "value": 0
}
```

Describes an event in the lifecycle of a payment transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTime|string(google-datetime)|false|none|Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call.|
|eventType|string|false|none|Optional. The type of this transaction event.|
|reason|string|false|none|Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005.|
|value|number(double)|false|none|Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TRANSACTION_EVENT_TYPE_UNSPECIFIED|
|eventType|MERCHANT_APPROVE|
|eventType|MERCHANT_DENY|
|eventType|MANUAL_REVIEW|
|eventType|AUTHORIZATION|
|eventType|AUTHORIZATION_DECLINE|
|eventType|PAYMENT_CAPTURE|
|eventType|PAYMENT_CAPTURE_DECLINE|
|eventType|CANCEL|
|eventType|CHARGEBACK_INQUIRY|
|eventType|CHARGEBACK_ALERT|
|eventType|FRAUD_NOTIFICATION|
|eventType|CHARGEBACK|
|eventType|CHARGEBACK_REPRESENTMENT|
|eventType|CHARGEBACK_REVERSE|
|eventType|REFUND_REQUEST|
|eventType|REFUND_DECLINE|
|eventType|REFUND|
|eventType|REFUND_REVERSE|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1WafSettings">GoogleCloudRecaptchaenterpriseV1WafSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1wafsettings"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1WafSettings"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1wafsettings"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1wafsettings"></a>

```json
{
  "wafFeature": "WAF_FEATURE_UNSPECIFIED",
  "wafService": "WAF_SERVICE_UNSPECIFIED"
}
```

Settings specific to keys that can be used for WAF (Web Application Firewall).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wafFeature|string|false|none|Required. The WAF feature for which this key is enabled.|
|wafService|string|false|none|Required. The WAF service that uses this key.|

#### Enumerated Values

|Property|Value|
|---|---|
|wafFeature|WAF_FEATURE_UNSPECIFIED|
|wafFeature|CHALLENGE_PAGE|
|wafFeature|SESSION_TOKEN|
|wafFeature|ACTION_TOKEN|
|wafFeature|EXPRESS|
|wafService|WAF_SERVICE_UNSPECIFIED|
|wafService|CA|
|wafService|FASTLY|

<h2 id="tocS_GoogleCloudRecaptchaenterpriseV1WebKeySettings">GoogleCloudRecaptchaenterpriseV1WebKeySettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecaptchaenterprisev1webkeysettings"></a>
<a id="schema_GoogleCloudRecaptchaenterpriseV1WebKeySettings"></a>
<a id="tocSgooglecloudrecaptchaenterprisev1webkeysettings"></a>
<a id="tocsgooglecloudrecaptchaenterprisev1webkeysettings"></a>

```json
{
  "allowAllDomains": true,
  "allowAmpTraffic": true,
  "allowedDomains": [
    "string"
  ],
  "challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
  "integrationType": "INTEGRATION_TYPE_UNSPECIFIED"
}
```

Settings specific to keys that can be used by websites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAllDomains|boolean|false|none|If set to true, it means allowed_domains will not be enforced.|
|allowAmpTraffic|boolean|false|none|If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.|
|allowedDomains|[string]|false|none|Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'|
|challengeSecurityPreference|string|false|none|Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE.|
|integrationType|string|false|none|Required. Describes how this key is integrated with the website.|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeSecurityPreference|CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED|
|challengeSecurityPreference|USABILITY|
|challengeSecurityPreference|BALANCE|
|challengeSecurityPreference|SECURITY|
|integrationType|INTEGRATION_TYPE_UNSPECIFIED|
|integrationType|SCORE|
|integrationType|CHECKBOX|
|integrationType|INVISIBLE|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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
