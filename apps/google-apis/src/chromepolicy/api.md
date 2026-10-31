<h1 id="chrome-policy-api">Chrome Policy API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Chrome Policy API is a suite of services that allows Chrome administrators to control the policies applied to their managed Chrome OS devices and Chrome browsers.

Base URLs:

* <a href="https://chromepolicy.googleapis.com/">https://chromepolicy.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="http://developers.google.com/chrome/policy">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chrome.management.policy|See, edit, create or delete policies applied to Chrome OS and Chrome Browsers managed within your organization|
|https://www.googleapis.com/auth/chrome.management.policy.readonly|See policies applied to Chrome OS and Chrome Browsers managed within your organization|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chrome.management.policy|See, edit, create or delete policies applied to Chrome OS and Chrome Browsers managed within your organization|
|https://www.googleapis.com/auth/chrome.management.policy.readonly|See policies applied to Chrome OS and Chrome Browsers managed within your organization|

<h1 id="chrome-policy-api-customers">customers</h1>

## chromepolicy.customers.policies.groups.batchDelete

<a id="opIdchromepolicy.customers.policies.groups.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/groups:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "policySchema": "string",
        "policyTargetKey": {
          "additionalTargetKeys": {
            "property1": "string",
            "property2": "string"
          },
          "targetResource": "string"
        }
      }
    ]
  }'
```

`POST /v1/{customer}/policies/groups:batchDelete`

Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "requests": [
    {
      "policySchema": "string",
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      }
    }
  ]
}
```

<h3 id="chromepolicycustomerspoliciesgroupsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest](#schemagooglechromepolicyversionsv1batchdeletegrouppoliciesrequest)|false|none|
|» requests|body|[[GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest](#schemagooglechromepolicyversionsv1deletegrouppolicyrequest)]|false|List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

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

<h3 id="chromepolicycustomerspoliciesgroupsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.groups.batchModify

<a id="opIdchromepolicy.customers.policies.groups.batchModify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/groups:batchModify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "policyTargetKey": {
          "additionalTargetKeys": {
            "property1": "string",
            "property2": "string"
          },
          "targetResource": "string"
        },
        "policyValue": {
          "policySchema": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        },
        "updateMask": "string"
      }
    ]
  }'
```

`POST /v1/{customer}/policies/groups:batchModify`

Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "requests": [
    {
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "policyValue": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string"
    }
  ]
}
```

<h3 id="chromepolicycustomerspoliciesgroupsbatchmodify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest](#schemagooglechromepolicyversionsv1batchmodifygrouppoliciesrequest)|false|none|
|» requests|body|[[GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest](#schemagooglechromepolicyversionsv1modifygrouppolicyrequest)]|false|List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

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

<h3 id="chromepolicycustomerspoliciesgroupsbatchmodify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.groups.listGroupPriorityOrdering

<a id="opIdchromepolicy.customers.policies.groups.listGroupPriorityOrdering"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/groups:listGroupPriorityOrdering \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policyNamespace": "string",
    "policySchema": "string",
    "policyTargetKey": {
      "additionalTargetKeys": {
        "property1": "string",
        "property2": "string"
      },
      "targetResource": "string"
    }
  }'
```

`POST /v1/{customer}/policies/groups:listGroupPriorityOrdering`

Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

<h3 id="chromepolicycustomerspoliciesgroupslistgrouppriorityordering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest](#schemagooglechromepolicyversionsv1listgrouppriorityorderingrequest)|false|none|
|» policyNamespace|body|string|false|The namespace of the policy type for the request.|
|» policySchema|body|string|false|The schema name of the policy for the request.|
|» policyTargetKey|body|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|Required. The key of the target for which we want to retrieve the group priority ordering. The target resource must point to an app.|

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
  "groupIds": [
    "string"
  ],
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

<h3 id="chromepolicycustomerspoliciesgroupslistgrouppriorityordering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse](#schemagooglechromepolicyversionsv1listgrouppriorityorderingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly )
</aside>

## chromepolicy.customers.policies.groups.updateGroupPriorityOrdering

<a id="opIdchromepolicy.customers.policies.groups.updateGroupPriorityOrdering"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/groups:updateGroupPriorityOrdering \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "groupIds": [
      "string"
    ],
    "policyNamespace": "string",
    "policySchema": "string",
    "policyTargetKey": {
      "additionalTargetKeys": {
        "property1": "string",
        "property2": "string"
      },
      "targetResource": "string"
    }
  }'
```

`POST /v1/{customer}/policies/groups:updateGroupPriorityOrdering`

Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "groupIds": [
    "string"
  ],
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

<h3 id="chromepolicycustomerspoliciesgroupsupdategrouppriorityordering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest](#schemagooglechromepolicyversionsv1updategrouppriorityorderingrequest)|false|none|
|» groupIds|body|[string]|false|Required. The group IDs, in desired priority ordering.|
|» policyNamespace|body|string|false|The namespace of the policy type for the request.|
|» policySchema|body|string|false|The schema name of the policy for the request.|
|» policyTargetKey|body|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|Required. The key of the target for which we want to update the group priority ordering. The target resource must point to an app.|

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

<h3 id="chromepolicycustomerspoliciesgroupsupdategrouppriorityordering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.networks.defineCertificate

<a id="opIdchromepolicy.customers.policies.networks.defineCertificate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/networks:defineCertificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ceritificateName": "string",
    "certificate": "string",
    "settings": [
      {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "targetResource": "string"
  }'
```

`POST /v1/{customer}/policies/networks:defineCertificate`

Creates a certificate at a specified OU for a customer.

> Body parameter

```json
{
  "ceritificateName": "string",
  "certificate": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksdefinecertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer for which the certificate will apply.|
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
|body|body|[GoogleChromePolicyVersionsV1DefineCertificateRequest](#schemagooglechromepolicyversionsv1definecertificaterequest)|false|none|
|» ceritificateName|body|string|false|Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name.|
|» certificate|body|string|false|Required. The raw contents of the .PEM, .CRT, or .CER file.|
|» settings|body|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|Optional. Certificate settings within the chrome.networks.certificates namespace.|
|» targetResource|body|string|false|Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

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
  "networkId": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksdefinecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1DefineCertificateResponse](#schemagooglechromepolicyversionsv1definecertificateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.networks.defineNetwork

<a id="opIdchromepolicy.customers.policies.networks.defineNetwork"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/networks:defineNetwork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "settings": [
      {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "targetResource": "string"
  }'
```

`POST /v1/{customer}/policies/networks:defineNetwork`

Define a new network.

> Body parameter

```json
{
  "name": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksdefinenetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer who will own this new network.|
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
|body|body|[GoogleChromePolicyVersionsV1DefineNetworkRequest](#schemagooglechromepolicyversionsv1definenetworkrequest)|false|none|
|» name|body|string|false|Required. Name of the new created network.|
|» settings|body|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|Required. Detailed network settings.|
|» targetResource|body|string|false|Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

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
  "networkId": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksdefinenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1DefineNetworkResponse](#schemagooglechromepolicyversionsv1definenetworkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.networks.removeCertificate

<a id="opIdchromepolicy.customers.policies.networks.removeCertificate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/networks:removeCertificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "networkId": "string",
    "targetResource": "string"
  }'
```

`POST /v1/{customer}/policies/networks:removeCertificate`

Remove an existing certificate by guid.

> Body parameter

```json
{
  "networkId": "string",
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksremovecertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer whose certificate will be removed.|
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
|body|body|[GoogleChromePolicyVersionsV1RemoveCertificateRequest](#schemagooglechromepolicyversionsv1removecertificaterequest)|false|none|
|» networkId|body|string|false|Required. The GUID of the certificate to remove.|
|» targetResource|body|string|false|Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

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

<h3 id="chromepolicycustomerspoliciesnetworksremovecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1RemoveCertificateResponse](#schemagooglechromepolicyversionsv1removecertificateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.networks.removeNetwork

<a id="opIdchromepolicy.customers.policies.networks.removeNetwork"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/networks:removeNetwork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "networkId": "string",
    "targetResource": "string"
  }'
```

`POST /v1/{customer}/policies/networks:removeNetwork`

Remove an existing network by guid.

> Body parameter

```json
{
  "networkId": "string",
  "targetResource": "string"
}
```

<h3 id="chromepolicycustomerspoliciesnetworksremovenetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer whose network will be removed.|
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
|body|body|[GoogleChromePolicyVersionsV1RemoveNetworkRequest](#schemagooglechromepolicyversionsv1removenetworkrequest)|false|none|
|» networkId|body|string|false|Required. The GUID of the network to remove.|
|» targetResource|body|string|false|Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

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

<h3 id="chromepolicycustomerspoliciesnetworksremovenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1RemoveNetworkResponse](#schemagooglechromepolicyversionsv1removenetworkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.orgunits.batchInherit

<a id="opIdchromepolicy.customers.policies.orgunits.batchInherit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/orgunits:batchInherit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "policySchema": "string",
        "policyTargetKey": {
          "additionalTargetKeys": {
            "property1": "string",
            "property2": "string"
          },
          "targetResource": "string"
        }
      }
    ]
  }'
```

`POST /v1/{customer}/policies/orgunits:batchInherit`

Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "requests": [
    {
      "policySchema": "string",
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      }
    }
  ]
}
```

<h3 id="chromepolicycustomerspoliciesorgunitsbatchinherit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|ID of the G Suite account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest](#schemagooglechromepolicyversionsv1batchinheritorgunitpoliciesrequest)|false|none|
|» requests|body|[[GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest](#schemagooglechromepolicyversionsv1inheritorgunitpolicyrequest)]|false|List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

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

<h3 id="chromepolicycustomerspoliciesorgunitsbatchinherit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.orgunits.batchModify

<a id="opIdchromepolicy.customers.policies.orgunits.batchModify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/orgunits:batchModify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "policyTargetKey": {
          "additionalTargetKeys": {
            "property1": "string",
            "property2": "string"
          },
          "targetResource": "string"
        },
        "policyValue": {
          "policySchema": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        },
        "updateMask": "string"
      }
    ]
  }'
```

`POST /v1/{customer}/policies/orgunits:batchModify`

Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

> Body parameter

```json
{
  "requests": [
    {
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "policyValue": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string"
    }
  ]
}
```

<h3 id="chromepolicycustomerspoliciesorgunitsbatchmodify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|ID of the G Suite account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest](#schemagooglechromepolicyversionsv1batchmodifyorgunitpoliciesrequest)|false|none|
|» requests|body|[[GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest](#schemagooglechromepolicyversionsv1modifyorgunitpolicyrequest)]|false|List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

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

<h3 id="chromepolicycustomerspoliciesorgunitsbatchmodify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

## chromepolicy.customers.policies.resolve

<a id="opIdchromepolicy.customers.policies.resolve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies:resolve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string",
    "policySchemaFilter": "string",
    "policyTargetKey": {
      "additionalTargetKeys": {
        "property1": "string",
        "property2": "string"
      },
      "targetResource": "string"
    }
  }'
```

`POST /v1/{customer}/policies:resolve`

Gets the resolved policy values for a list of policies that match a search query.

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "policySchemaFilter": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

<h3 id="chromepolicycustomerspoliciesresolve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|ID of the G Suite account or literal "my_customer" for the customer associated to the request.|
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
|body|body|[GoogleChromePolicyVersionsV1ResolveRequest](#schemagooglechromepolicyversionsv1resolverequest)|false|none|
|» pageSize|body|integer(int32)|false|The maximum number of policies to return, defaults to 100 and has a maximum of 1000.|
|» pageToken|body|string|false|The page token used to retrieve a specific page of the request.|
|» policySchemaFilter|body|string|false|Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"|
|» policyTargetKey|body|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|Required. The key of the target resource on which the policies should be resolved.|

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
  "resolvedPolicies": [
    {
      "addedSourceKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "sourceKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "targetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "value": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      }
    }
  ]
}
```

<h3 id="chromepolicycustomerspoliciesresolve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1ResolveResponse](#schemagooglechromepolicyversionsv1resolveresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly )
</aside>

## chromepolicy.customers.policySchemas.get

<a id="opIdchromepolicy.customers.policySchemas.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Get a specific policy schema for a customer by its resource name.

<h3 id="chromepolicycustomerspolicyschemasget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The policy schema resource name to query.|
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
  "accessRestrictions": [
    "string"
  ],
  "additionalTargetKeyNames": [
    {
      "key": "string",
      "keyDescription": "string"
    }
  ],
  "categoryTitle": "string",
  "definition": {
    "enumType": [
      {
        "name": "string",
        "value": [
          {
            "name": "string",
            "number": 0
          }
        ]
      }
    ],
    "messageType": [
      {
        "enumType": [
          {
            "name": "string",
            "value": [
              {
                "name": "string",
                "number": 0
              }
            ]
          }
        ],
        "field": [
          {
            "defaultValue": "string",
            "jsonName": "string",
            "label": "LABEL_OPTIONAL",
            "name": "string",
            "number": 0,
            "oneofIndex": 0,
            "proto3Optional": true,
            "type": "TYPE_DOUBLE",
            "typeName": "string"
          }
        ],
        "name": "string",
        "nestedType": [
          {}
        ],
        "oneofDecl": [
          {
            "name": "string"
          }
        ]
      }
    ],
    "name": "string",
    "package": "string",
    "syntax": "string"
  },
  "fieldDescriptions": [
    {
      "defaultValue": null,
      "description": "string",
      "field": "string",
      "fieldConstraints": {
        "numericRangeConstraint": {
          "maximum": "string",
          "minimum": "string"
        }
      },
      "fieldDependencies": [
        {
          "sourceField": "string",
          "sourceFieldValue": "string"
        }
      ],
      "fieldDescription": "string",
      "inputConstraint": "string",
      "knownValueDescriptions": [
        {
          "description": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "nestedFieldDescriptions": [
        {}
      ],
      "requiredItems": [
        {
          "fieldConditions": [
            "string"
          ],
          "requiredFields": [
            "string"
          ]
        }
      ]
    }
  ],
  "name": "string",
  "notices": [
    {
      "acknowledgementRequired": true,
      "field": "string",
      "noticeMessage": "string",
      "noticeValue": "string"
    }
  ],
  "policyApiLifecycle": {
    "deprecatedInFavorOf": [
      "string"
    ],
    "description": "string",
    "endSupport": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "policyApiLifecycleStage": "API_UNSPECIFIED"
  },
  "policyDescription": "string",
  "schemaName": "string",
  "supportUri": "string",
  "validTargetResources": [
    "TARGET_RESOURCE_UNSPECIFIED"
  ]
}
```

<h3 id="chromepolicycustomerspolicyschemasget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1PolicySchema](#schemagooglechromepolicyversionsv1policyschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly )
</aside>

## chromepolicy.customers.policySchemas.list

<a id="opIdchromepolicy.customers.policySchemas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policySchemas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/policySchemas`

Gets a list of policy schemas that match a specified filter value for a given customer.

<h3 id="chromepolicycustomerspolicyschemaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer for which the listing request will apply.|
|filter|query|string|false|The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.|
|pageSize|query|integer|false|The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.|
|pageToken|query|string|false|The page token used to retrieve a specific page of the listing request.|
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
  "policySchemas": [
    {
      "accessRestrictions": [
        "string"
      ],
      "additionalTargetKeyNames": [
        {
          "key": "string",
          "keyDescription": "string"
        }
      ],
      "categoryTitle": "string",
      "definition": {
        "enumType": [
          {
            "name": "string",
            "value": [
              {
                "name": "string",
                "number": 0
              }
            ]
          }
        ],
        "messageType": [
          {
            "enumType": [
              {
                "name": "string",
                "value": [
                  {
                    "name": "string",
                    "number": 0
                  }
                ]
              }
            ],
            "field": [
              {
                "defaultValue": "string",
                "jsonName": "string",
                "label": "LABEL_OPTIONAL",
                "name": "string",
                "number": 0,
                "oneofIndex": 0,
                "proto3Optional": true,
                "type": "TYPE_DOUBLE",
                "typeName": "string"
              }
            ],
            "name": "string",
            "nestedType": [
              {}
            ],
            "oneofDecl": [
              {
                "name": "string"
              }
            ]
          }
        ],
        "name": "string",
        "package": "string",
        "syntax": "string"
      },
      "fieldDescriptions": [
        {
          "defaultValue": null,
          "description": "string",
          "field": "string",
          "fieldConstraints": {
            "numericRangeConstraint": {
              "maximum": "string",
              "minimum": "string"
            }
          },
          "fieldDependencies": [
            {
              "sourceField": "string",
              "sourceFieldValue": "string"
            }
          ],
          "fieldDescription": "string",
          "inputConstraint": "string",
          "knownValueDescriptions": [
            {
              "description": "string",
              "value": "string"
            }
          ],
          "name": "string",
          "nestedFieldDescriptions": [
            {}
          ],
          "requiredItems": [
            {
              "fieldConditions": [
                "string"
              ],
              "requiredFields": [
                "string"
              ]
            }
          ]
        }
      ],
      "name": "string",
      "notices": [
        {
          "acknowledgementRequired": true,
          "field": "string",
          "noticeMessage": "string",
          "noticeValue": "string"
        }
      ],
      "policyApiLifecycle": {
        "deprecatedInFavorOf": [
          "string"
        ],
        "description": "string",
        "endSupport": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "policyApiLifecycleStage": "API_UNSPECIFIED"
      },
      "policyDescription": "string",
      "schemaName": "string",
      "supportUri": "string",
      "validTargetResources": [
        "TARGET_RESOURCE_UNSPECIFIED"
      ]
    }
  ]
}
```

<h3 id="chromepolicycustomerspolicyschemaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1ListPolicySchemasResponse](#schemagooglechromepolicyversionsv1listpolicyschemasresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy.readonly )
</aside>

<h1 id="chrome-policy-api-media">media</h1>

## chromepolicy.media.upload

<a id="opIdchromepolicy.media.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies/files:uploadPolicyFile \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"policyField":"string"}'
```

`POST /v1/{customer}/policies/files:uploadPolicyFile`

Creates an enterprise file from the content provided by user. Returns a public download url for end user.

> Body parameter

```json
{
  "policyField": "string"
}
```

<h3 id="chromepolicymediaupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer for which the file upload will apply.|
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
|body|body|[GoogleChromePolicyVersionsV1UploadPolicyFileRequest](#schemagooglechromepolicyversionsv1uploadpolicyfilerequest)|false|none|
|» policyField|body|string|false|Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.|

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
  "downloadUri": "string"
}
```

<h3 id="chromepolicymediaupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromePolicyVersionsV1UploadPolicyFileResponse](#schemagooglechromepolicyversionsv1uploadpolicyfileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.policy ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.policy )
</aside>

# Schemas

<h2 id="tocS_ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle">ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemachromecrosdpanelautosettingsprotopolicyapilifecycle"></a>
<a id="schema_ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle"></a>
<a id="tocSchromecrosdpanelautosettingsprotopolicyapilifecycle"></a>
<a id="tocschromecrosdpanelautosettingsprotopolicyapilifecycle"></a>

```json
{
  "deprecatedInFavorOf": [
    "string"
  ],
  "description": "string",
  "endSupport": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "policyApiLifecycleStage": "API_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecatedInFavorOf|[string]|false|none|In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI.|
|description|string|false|none|Description about current life cycle.|
|endSupport|[GoogleTypeDate](#schemagoogletypedate)|false|none|End supporting date for current policy.|
|policyApiLifecycleStage|string|false|none|Indicate current life cycle stage of the policy API.|

#### Enumerated Values

|Property|Value|
|---|---|
|policyApiLifecycleStage|API_UNSPECIFIED|
|policyApiLifecycleStage|API_PREVIEW|
|policyApiLifecycleStage|API_DEVELOPMENT|
|policyApiLifecycleStage|API_CURRENT|
|policyApiLifecycleStage|API_DEPRECATED|

<h2 id="tocS_GoogleChromePolicyVersionsV1AdditionalTargetKeyName">GoogleChromePolicyVersionsV1AdditionalTargetKeyName</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1additionaltargetkeyname"></a>
<a id="schema_GoogleChromePolicyVersionsV1AdditionalTargetKeyName"></a>
<a id="tocSgooglechromepolicyversionsv1additionaltargetkeyname"></a>
<a id="tocsgooglechromepolicyversionsv1additionaltargetkeyname"></a>

```json
{
  "key": "string",
  "keyDescription": "string"
}
```

Additional key names that will be used to identify the target of the policy value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key name.|
|keyDescription|string|false|none|Key description.|

<h2 id="tocS_GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest">GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1batchdeletegrouppoliciesrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest"></a>
<a id="tocSgooglechromepolicyversionsv1batchdeletegrouppoliciesrequest"></a>
<a id="tocsgooglechromepolicyversionsv1batchdeletegrouppoliciesrequest"></a>

```json
{
  "requests": [
    {
      "policySchema": "string",
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      }
    }
  ]
}
```

Request message for specifying that multiple policy values will be deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest](#schemagooglechromepolicyversionsv1deletegrouppolicyrequest)]|false|none|List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

<h2 id="tocS_GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest">GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1batchinheritorgunitpoliciesrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest"></a>
<a id="tocSgooglechromepolicyversionsv1batchinheritorgunitpoliciesrequest"></a>
<a id="tocsgooglechromepolicyversionsv1batchinheritorgunitpoliciesrequest"></a>

```json
{
  "requests": [
    {
      "policySchema": "string",
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      }
    }
  ]
}
```

Request message for specifying that multiple policy values inherit their value from their parents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest](#schemagooglechromepolicyversionsv1inheritorgunitpolicyrequest)]|false|none|List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

<h2 id="tocS_GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest">GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1batchmodifygrouppoliciesrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest"></a>
<a id="tocSgooglechromepolicyversionsv1batchmodifygrouppoliciesrequest"></a>
<a id="tocsgooglechromepolicyversionsv1batchmodifygrouppoliciesrequest"></a>

```json
{
  "requests": [
    {
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "policyValue": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string"
    }
  ]
}
```

Request message for modifying multiple policy values for a specific group-based target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest](#schemagooglechromepolicyversionsv1modifygrouppolicyrequest)]|false|none|List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

<h2 id="tocS_GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest">GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1batchmodifyorgunitpoliciesrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest"></a>
<a id="tocSgooglechromepolicyversionsv1batchmodifyorgunitpoliciesrequest"></a>
<a id="tocsgooglechromepolicyversionsv1batchmodifyorgunitpoliciesrequest"></a>

```json
{
  "requests": [
    {
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "policyValue": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string"
    }
  ]
}
```

Request message for modifying multiple policy values for a specific target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest](#schemagooglechromepolicyversionsv1modifyorgunitpolicyrequest)]|false|none|List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. |

<h2 id="tocS_GoogleChromePolicyVersionsV1CertificateReference">GoogleChromePolicyVersionsV1CertificateReference</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1certificatereference"></a>
<a id="schema_GoogleChromePolicyVersionsV1CertificateReference"></a>
<a id="tocSgooglechromepolicyversionsv1certificatereference"></a>
<a id="tocsgooglechromepolicyversionsv1certificatereference"></a>

```json
{
  "network": "string",
  "orgUnitId": "string"
}
```

Error information for removing of a specific certificate on a specific target. A reference to a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|read-only|Output only. The name of the referencing network.|
|orgUnitId|string|false|read-only|Output only. The obfuscated id of the org unit the referencing network is in.|

<h2 id="tocS_GoogleChromePolicyVersionsV1DefineCertificateRequest">GoogleChromePolicyVersionsV1DefineCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1definecertificaterequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1DefineCertificateRequest"></a>
<a id="tocSgooglechromepolicyversionsv1definecertificaterequest"></a>
<a id="tocsgooglechromepolicyversionsv1definecertificaterequest"></a>

```json
{
  "ceritificateName": "string",
  "certificate": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

Request object for creating a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ceritificateName|string|false|none|Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name.|
|certificate|string|false|none|Required. The raw contents of the .PEM, .CRT, or .CER file.|
|settings|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|none|Optional. Certificate settings within the chrome.networks.certificates namespace.|
|targetResource|string|false|none|Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1DefineCertificateResponse">GoogleChromePolicyVersionsV1DefineCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1definecertificateresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1DefineCertificateResponse"></a>
<a id="tocSgooglechromepolicyversionsv1definecertificateresponse"></a>
<a id="tocsgooglechromepolicyversionsv1definecertificateresponse"></a>

```json
{
  "networkId": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

Response object for creating a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkId|string|false|none|The guid of the certificate created by the action.|
|settings|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|none|the affiliated settings of the certificate (NOT IMPLEMENTED)|
|targetResource|string|false|none|the resource at which the certificate is defined.|

<h2 id="tocS_GoogleChromePolicyVersionsV1DefineNetworkRequest">GoogleChromePolicyVersionsV1DefineNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1definenetworkrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1DefineNetworkRequest"></a>
<a id="tocSgooglechromepolicyversionsv1definenetworkrequest"></a>
<a id="tocsgooglechromepolicyversionsv1definenetworkrequest"></a>

```json
{
  "name": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

Request object for creating a new network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. Name of the new created network.|
|settings|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|none|Required. Detailed network settings.|
|targetResource|string|false|none|Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1DefineNetworkResponse">GoogleChromePolicyVersionsV1DefineNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1definenetworkresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1DefineNetworkResponse"></a>
<a id="tocSgooglechromepolicyversionsv1definenetworkresponse"></a>
<a id="tocsgooglechromepolicyversionsv1definenetworkresponse"></a>

```json
{
  "networkId": "string",
  "settings": [
    {
      "policySchema": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "targetResource": "string"
}
```

Response object for creating a network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkId|string|false|none|Network ID of the new created network.|
|settings|[[GoogleChromePolicyVersionsV1NetworkSetting](#schemagooglechromepolicyversionsv1networksetting)]|false|none|Detailed network settings of the new created network|
|targetResource|string|false|none|The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest">GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1deletegrouppolicyrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest"></a>
<a id="tocSgooglechromepolicyversionsv1deletegrouppolicyrequest"></a>
<a id="tocsgooglechromepolicyversionsv1deletegrouppolicyrequest"></a>

```json
{
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Request parameters for deleting the policy value of a specific group target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policySchema|string|false|none|The fully qualified name of the policy schema that is being inherited.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.|

<h2 id="tocS_GoogleChromePolicyVersionsV1FieldConstraints">GoogleChromePolicyVersionsV1FieldConstraints</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1fieldconstraints"></a>
<a id="schema_GoogleChromePolicyVersionsV1FieldConstraints"></a>
<a id="tocSgooglechromepolicyversionsv1fieldconstraints"></a>
<a id="tocsgooglechromepolicyversionsv1fieldconstraints"></a>

```json
{
  "numericRangeConstraint": {
    "maximum": "string",
    "minimum": "string"
  }
}
```

Information about any range constraints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numericRangeConstraint|[GoogleChromePolicyVersionsV1NumericRangeConstraint](#schemagooglechromepolicyversionsv1numericrangeconstraint)|false|none|The allowed range for numeric fields.|

<h2 id="tocS_GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest">GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1inheritorgunitpolicyrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest"></a>
<a id="tocSgooglechromepolicyversionsv1inheritorgunitpolicyrequest"></a>
<a id="tocsgooglechromepolicyversionsv1inheritorgunitpolicyrequest"></a>

```json
{
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policySchema|string|false|none|The fully qualified name of the policy schema that is being inherited.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest">GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1listgrouppriorityorderingrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest"></a>
<a id="tocSgooglechromepolicyversionsv1listgrouppriorityorderingrequest"></a>
<a id="tocsgooglechromepolicyversionsv1listgrouppriorityorderingrequest"></a>

```json
{
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Request message for listing the group priority ordering of an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyNamespace|string|false|none|The namespace of the policy type for the request.|
|policySchema|string|false|none|The schema name of the policy for the request.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to retrieve the group priority ordering. The target resource must point to an app.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse">GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1listgrouppriorityorderingresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse"></a>
<a id="tocSgooglechromepolicyversionsv1listgrouppriorityorderingresponse"></a>
<a id="tocsgooglechromepolicyversionsv1listgrouppriorityorderingresponse"></a>

```json
{
  "groupIds": [
    "string"
  ],
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Response message for listing the group priority ordering of an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupIds|[string]|false|read-only|Output only. The group IDs, in priority ordering.|
|policyNamespace|string|false|read-only|Output only. The namespace of the policy type of the group IDs.|
|policySchema|string|false|read-only|Output only. The schema name of the policy for the group IDs.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Output only. The target resource for which the group priority ordering has been retrieved.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ListPolicySchemasResponse">GoogleChromePolicyVersionsV1ListPolicySchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1listpolicyschemasresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1ListPolicySchemasResponse"></a>
<a id="tocSgooglechromepolicyversionsv1listpolicyschemasresponse"></a>
<a id="tocsgooglechromepolicyversionsv1listpolicyschemasresponse"></a>

```json
{
  "nextPageToken": "string",
  "policySchemas": [
    {
      "accessRestrictions": [
        "string"
      ],
      "additionalTargetKeyNames": [
        {
          "key": "string",
          "keyDescription": "string"
        }
      ],
      "categoryTitle": "string",
      "definition": {
        "enumType": [
          {
            "name": "string",
            "value": [
              {
                "name": "string",
                "number": 0
              }
            ]
          }
        ],
        "messageType": [
          {
            "enumType": [
              {
                "name": "string",
                "value": [
                  {
                    "name": "string",
                    "number": 0
                  }
                ]
              }
            ],
            "field": [
              {
                "defaultValue": "string",
                "jsonName": "string",
                "label": "LABEL_OPTIONAL",
                "name": "string",
                "number": 0,
                "oneofIndex": 0,
                "proto3Optional": true,
                "type": "TYPE_DOUBLE",
                "typeName": "string"
              }
            ],
            "name": "string",
            "nestedType": [
              {}
            ],
            "oneofDecl": [
              {
                "name": "string"
              }
            ]
          }
        ],
        "name": "string",
        "package": "string",
        "syntax": "string"
      },
      "fieldDescriptions": [
        {
          "defaultValue": null,
          "description": "string",
          "field": "string",
          "fieldConstraints": {
            "numericRangeConstraint": {
              "maximum": "string",
              "minimum": "string"
            }
          },
          "fieldDependencies": [
            {
              "sourceField": "string",
              "sourceFieldValue": "string"
            }
          ],
          "fieldDescription": "string",
          "inputConstraint": "string",
          "knownValueDescriptions": [
            {
              "description": "string",
              "value": "string"
            }
          ],
          "name": "string",
          "nestedFieldDescriptions": [
            {}
          ],
          "requiredItems": [
            {
              "fieldConditions": [
                "string"
              ],
              "requiredFields": [
                "string"
              ]
            }
          ]
        }
      ],
      "name": "string",
      "notices": [
        {
          "acknowledgementRequired": true,
          "field": "string",
          "noticeMessage": "string",
          "noticeValue": "string"
        }
      ],
      "policyApiLifecycle": {
        "deprecatedInFavorOf": [
          "string"
        ],
        "description": "string",
        "endSupport": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "policyApiLifecycleStage": "API_UNSPECIFIED"
      },
      "policyDescription": "string",
      "schemaName": "string",
      "supportUri": "string",
      "validTargetResources": [
        "TARGET_RESOURCE_UNSPECIFIED"
      ]
    }
  ]
}
```

Response message for listing policy schemas that match a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The page token used to get the next page of policy schemas.|
|policySchemas|[[GoogleChromePolicyVersionsV1PolicySchema](#schemagooglechromepolicyversionsv1policyschema)]|false|none|The list of policy schemas that match the query.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest">GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1modifygrouppolicyrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest"></a>
<a id="tocSgooglechromepolicyversionsv1modifygrouppolicyrequest"></a>
<a id="tocsgooglechromepolicyversionsv1modifygrouppolicyrequest"></a>

```json
{
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  },
  "policyValue": {
    "policySchema": "string",
    "value": {
      "property1": null,
      "property2": null
    }
  },
  "updateMask": "string"
}
```

Request parameters for modifying a policy value for a specific group target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.|
|policyValue|[GoogleChromePolicyVersionsV1PolicyValue](#schemagooglechromepolicyversionsv1policyvalue)|false|none|The new value for the policy.|
|updateMask|string(google-fieldmask)|false|none|Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest">GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1modifyorgunitpolicyrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest"></a>
<a id="tocSgooglechromepolicyversionsv1modifyorgunitpolicyrequest"></a>
<a id="tocsgooglechromepolicyversionsv1modifyorgunitpolicyrequest"></a>

```json
{
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  },
  "policyValue": {
    "policySchema": "string",
    "value": {
      "property1": null,
      "property2": null
    }
  },
  "updateMask": "string"
}
```

Request parameters for modifying a policy value for a specific org unit target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.|
|policyValue|[GoogleChromePolicyVersionsV1PolicyValue](#schemagooglechromepolicyversionsv1policyvalue)|false|none|The new value for the policy.|
|updateMask|string(google-fieldmask)|false|none|Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.|

<h2 id="tocS_GoogleChromePolicyVersionsV1NetworkSetting">GoogleChromePolicyVersionsV1NetworkSetting</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1networksetting"></a>
<a id="schema_GoogleChromePolicyVersionsV1NetworkSetting"></a>
<a id="tocSgooglechromepolicyversionsv1networksetting"></a>
<a id="tocsgooglechromepolicyversionsv1networksetting"></a>

```json
{
  "policySchema": "string",
  "value": {
    "property1": null,
    "property2": null
  }
}
```

A network setting contains network configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policySchema|string|false|none|The fully qualified name of the network setting.|
|value|object|false|none|The value of the network setting.|

<h2 id="tocS_GoogleChromePolicyVersionsV1NumericRangeConstraint">GoogleChromePolicyVersionsV1NumericRangeConstraint</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1numericrangeconstraint"></a>
<a id="schema_GoogleChromePolicyVersionsV1NumericRangeConstraint"></a>
<a id="tocSgooglechromepolicyversionsv1numericrangeconstraint"></a>
<a id="tocsgooglechromepolicyversionsv1numericrangeconstraint"></a>

```json
{
  "maximum": "string",
  "minimum": "string"
}
```

A constraint on upper and/or lower bounds, with at least one being set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|string(int64)|false|none|Maximum value.|
|minimum|string(int64)|false|none|Minimum value.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicyModificationError">GoogleChromePolicyVersionsV1PolicyModificationError</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policymodificationerror"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicyModificationError"></a>
<a id="tocSgooglechromepolicyversionsv1policymodificationerror"></a>
<a id="tocsgooglechromepolicyversionsv1policymodificationerror"></a>

```json
{
  "errors": [
    "string"
  ],
  "fieldErrors": [
    {
      "error": "string",
      "field": "string"
    }
  ],
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Error information for a modification request of a specific policy on a specific target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|read-only|Output only. The non-field errors related to the modification.|
|fieldErrors|[[GoogleChromePolicyVersionsV1PolicyModificationFieldError](#schemagooglechromepolicyversionsv1policymodificationfielderror)]|false|read-only|Output only. The error messages related to the modification.|
|policySchema|string|false|read-only|Output only. The specific policy schema modification that had an error.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Output only. The specific policy target modification that had error.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicyModificationErrorDetails">GoogleChromePolicyVersionsV1PolicyModificationErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policymodificationerrordetails"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicyModificationErrorDetails"></a>
<a id="tocSgooglechromepolicyversionsv1policymodificationerrordetails"></a>
<a id="tocsgooglechromepolicyversionsv1policymodificationerrordetails"></a>

```json
{
  "modificationErrors": [
    {
      "errors": [
        "string"
      ],
      "fieldErrors": [
        {
          "error": "string",
          "field": "string"
        }
      ],
      "policySchema": "string",
      "policyTargetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      }
    }
  ]
}
```

Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modificationErrors|[[GoogleChromePolicyVersionsV1PolicyModificationError](#schemagooglechromepolicyversionsv1policymodificationerror)]|false|read-only|Output only. List of specific policy modifications errors that may have occurred during a modifying request.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicyModificationFieldError">GoogleChromePolicyVersionsV1PolicyModificationFieldError</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policymodificationfielderror"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicyModificationFieldError"></a>
<a id="tocSgooglechromepolicyversionsv1policymodificationfielderror"></a>
<a id="tocsgooglechromepolicyversionsv1policymodificationfielderror"></a>

```json
{
  "error": "string",
  "field": "string"
}
```

Error information for a modification request of a specific field on a specific policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|read-only|Output only. The error message related to the field.|
|field|string|false|read-only|Output only. The name of the field with the error.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchema">GoogleChromePolicyVersionsV1PolicySchema</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschema"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchema"></a>
<a id="tocSgooglechromepolicyversionsv1policyschema"></a>
<a id="tocsgooglechromepolicyversionsv1policyschema"></a>

```json
{
  "accessRestrictions": [
    "string"
  ],
  "additionalTargetKeyNames": [
    {
      "key": "string",
      "keyDescription": "string"
    }
  ],
  "categoryTitle": "string",
  "definition": {
    "enumType": [
      {
        "name": "string",
        "value": [
          {
            "name": "string",
            "number": 0
          }
        ]
      }
    ],
    "messageType": [
      {
        "enumType": [
          {
            "name": "string",
            "value": [
              {
                "name": "string",
                "number": 0
              }
            ]
          }
        ],
        "field": [
          {
            "defaultValue": "string",
            "jsonName": "string",
            "label": "LABEL_OPTIONAL",
            "name": "string",
            "number": 0,
            "oneofIndex": 0,
            "proto3Optional": true,
            "type": "TYPE_DOUBLE",
            "typeName": "string"
          }
        ],
        "name": "string",
        "nestedType": [
          {}
        ],
        "oneofDecl": [
          {
            "name": "string"
          }
        ]
      }
    ],
    "name": "string",
    "package": "string",
    "syntax": "string"
  },
  "fieldDescriptions": [
    {
      "defaultValue": null,
      "description": "string",
      "field": "string",
      "fieldConstraints": {
        "numericRangeConstraint": {
          "maximum": "string",
          "minimum": "string"
        }
      },
      "fieldDependencies": [
        {
          "sourceField": "string",
          "sourceFieldValue": "string"
        }
      ],
      "fieldDescription": "string",
      "inputConstraint": "string",
      "knownValueDescriptions": [
        {
          "description": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "nestedFieldDescriptions": [
        {}
      ],
      "requiredItems": [
        {
          "fieldConditions": [
            "string"
          ],
          "requiredFields": [
            "string"
          ]
        }
      ]
    }
  ],
  "name": "string",
  "notices": [
    {
      "acknowledgementRequired": true,
      "field": "string",
      "noticeMessage": "string",
      "noticeValue": "string"
    }
  ],
  "policyApiLifecycle": {
    "deprecatedInFavorOf": [
      "string"
    ],
    "description": "string",
    "endSupport": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "policyApiLifecycleStage": "API_UNSPECIFIED"
  },
  "policyDescription": "string",
  "schemaName": "string",
  "supportUri": "string",
  "validTargetResources": [
    "TARGET_RESOURCE_UNSPECIFIED"
  ]
}
```

Resource representing a policy schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRestrictions|[string]|false|read-only|Output only. Specific access restrictions related to this policy.|
|additionalTargetKeyNames|[[GoogleChromePolicyVersionsV1AdditionalTargetKeyName](#schemagooglechromepolicyversionsv1additionaltargetkeyname)]|false|read-only|Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map.|
|categoryTitle|string|false|none|Title of the category in which a setting belongs.|
|definition|[Proto2FileDescriptorProto](#schemaproto2filedescriptorproto)|false|none|Schema definition using proto descriptor.|
|fieldDescriptions|[[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription](#schemagooglechromepolicyversionsv1policyschemafielddescription)]|false|read-only|Output only. Detailed description of each field that is part of the schema.|
|name|string|false|none|Format: name=customers/{customer}/policySchemas/{schema_namespace}|
|notices|[[GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription](#schemagooglechromepolicyversionsv1policyschemanoticedescription)]|false|read-only|Output only. Special notice messages related to setting certain values in certain fields in the schema.|
|policyApiLifecycle|[ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle](#schemachromecrosdpanelautosettingsprotopolicyapilifecycle)|false|none|Output only. Current lifecycle information.|
|policyDescription|string|false|read-only|Output only. Description about the policy schema for user consumption.|
|schemaName|string|false|read-only|Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies.|
|supportUri|string|false|read-only|Output only. URI to related support article for this schema.|
|validTargetResources|[string]|false|read-only|Output only. Information about applicable target resources for the policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|validTargetResources|TARGET_RESOURCE_UNSPECIFIED|
|validTargetResources|ORG_UNIT|
|validTargetResources|GROUP|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies">GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschemafielddependencies"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies"></a>
<a id="tocSgooglechromepolicyversionsv1policyschemafielddependencies"></a>
<a id="tocsgooglechromepolicyversionsv1policyschemafielddependencies"></a>

```json
{
  "sourceField": "string",
  "sourceFieldValue": "string"
}
```

The field and the value it must have for another field to be allowed to be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceField|string|false|none|The source field which this field depends on.|
|sourceFieldValue|string|false|none|The value which the source field must have for this field to be allowed to be set.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchemaFieldDescription">GoogleChromePolicyVersionsV1PolicySchemaFieldDescription</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschemafielddescription"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchemaFieldDescription"></a>
<a id="tocSgooglechromepolicyversionsv1policyschemafielddescription"></a>
<a id="tocsgooglechromepolicyversionsv1policyschemafielddescription"></a>

```json
{
  "defaultValue": null,
  "description": "string",
  "field": "string",
  "fieldConstraints": {
    "numericRangeConstraint": {
      "maximum": "string",
      "minimum": "string"
    }
  },
  "fieldDependencies": [
    {
      "sourceField": "string",
      "sourceFieldValue": "string"
    }
  ],
  "fieldDescription": "string",
  "inputConstraint": "string",
  "knownValueDescriptions": [
    {
      "description": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "nestedFieldDescriptions": [
    {
      "defaultValue": null,
      "description": "string",
      "field": "string",
      "fieldConstraints": {
        "numericRangeConstraint": {
          "maximum": "string",
          "minimum": "string"
        }
      },
      "fieldDependencies": [
        {
          "sourceField": "string",
          "sourceFieldValue": "string"
        }
      ],
      "fieldDescription": "string",
      "inputConstraint": "string",
      "knownValueDescriptions": [
        {
          "description": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "nestedFieldDescriptions": [
        {}
      ],
      "requiredItems": [
        {
          "fieldConditions": [
            "string"
          ],
          "requiredFields": [
            "string"
          ]
        }
      ]
    }
  ],
  "requiredItems": [
    {
      "fieldConditions": [
        "string"
      ],
      "requiredFields": [
        "string"
      ]
    }
  ]
}
```

Provides detailed information for a particular field that is part of a PolicySchema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|object|false|read-only|Output only. Client default if the policy is unset.|
|description|string|false|none|Deprecated. Use name and field_description instead. The description for the field.|
|field|string|false|read-only|Output only. The name of the field for associated with this description.|
|fieldConstraints|[GoogleChromePolicyVersionsV1FieldConstraints](#schemagooglechromepolicyversionsv1fieldconstraints)|false|none|Output only. Information on any input constraints associated on the values for the field.|
|fieldDependencies|[[GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies](#schemagooglechromepolicyversionsv1policyschemafielddependencies)]|false|read-only|Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set.|
|fieldDescription|string|false|read-only|Output only. The description of the field.|
|inputConstraint|string|false|read-only|Output only. Any input constraints associated on the values for the field.|
|knownValueDescriptions|[[GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription](#schemagooglechromepolicyversionsv1policyschemafieldknownvaluedescription)]|false|read-only|Output only. If the field has a set of known values, this field will provide a description for these values.|
|name|string|false|read-only|Output only. The name of the field.|
|nestedFieldDescriptions|[[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription](#schemagooglechromepolicyversionsv1policyschemafielddescription)]|false|read-only|Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields.|
|requiredItems|[[GoogleChromePolicyVersionsV1PolicySchemaRequiredItems](#schemagooglechromepolicyversionsv1policyschemarequireditems)]|false|read-only|Output only. Provides a list of fields that are required to be set if this field has a certain value.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription">GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschemafieldknownvaluedescription"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription"></a>
<a id="tocSgooglechromepolicyversionsv1policyschemafieldknownvaluedescription"></a>
<a id="tocsgooglechromepolicyversionsv1policyschemafieldknownvaluedescription"></a>

```json
{
  "description": "string",
  "value": "string"
}
```

Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|Output only. Additional description for this value.|
|value|string|false|read-only|Output only. The string represenstation of the value that can be set for the field.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription">GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschemanoticedescription"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription"></a>
<a id="tocSgooglechromepolicyversionsv1policyschemanoticedescription"></a>
<a id="tocsgooglechromepolicyversionsv1policyschemanoticedescription"></a>

```json
{
  "acknowledgementRequired": true,
  "field": "string",
  "noticeMessage": "string",
  "noticeValue": "string"
}
```

Provides special notice messages related to a particular value in a field that is part of a PolicySchema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementRequired|boolean|false|read-only|Output only. Whether the user needs to acknowledge the notice message before the value can be set.|
|field|string|false|read-only|Output only. The field name associated with the notice.|
|noticeMessage|string|false|read-only|Output only. The notice message associate with the value of the field.|
|noticeValue|string|false|read-only|Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicySchemaRequiredItems">GoogleChromePolicyVersionsV1PolicySchemaRequiredItems</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyschemarequireditems"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicySchemaRequiredItems"></a>
<a id="tocSgooglechromepolicyversionsv1policyschemarequireditems"></a>
<a id="tocsgooglechromepolicyversionsv1policyschemarequireditems"></a>

```json
{
  "fieldConditions": [
    "string"
  ],
  "requiredFields": [
    "string"
  ]
}
```

The fields that will become required based on the value of this field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldConditions|[string]|false|none|The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement.|
|requiredFields|[string]|false|none|The fields that are required as a consequence of the field conditions.|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicyTargetKey">GoogleChromePolicyVersionsV1PolicyTargetKey</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policytargetkey"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicyTargetKey"></a>
<a id="tocSgooglechromepolicyversionsv1policytargetkey"></a>
<a id="tocsgooglechromepolicyversionsv1policytargetkey"></a>

```json
{
  "additionalTargetKeys": {
    "property1": "string",
    "property2": "string"
  },
  "targetResource": "string"
}
```

The key used to identify the target on which the policy will be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalTargetKeys|object|false|none|Map containing the additional target key name and value pairs used to further identify the target of the policy.|
|targetResource|string|false|none|The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1PolicyValue">GoogleChromePolicyVersionsV1PolicyValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1policyvalue"></a>
<a id="schema_GoogleChromePolicyVersionsV1PolicyValue"></a>
<a id="tocSgooglechromepolicyversionsv1policyvalue"></a>
<a id="tocsgooglechromepolicyversionsv1policyvalue"></a>

```json
{
  "policySchema": "string",
  "value": {
    "property1": null,
    "property2": null
  }
}
```

A particular value for a policy managed by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policySchema|string|false|none|The fully qualified name of the policy schema associated with this policy.|
|value|object|false|none|The value of the policy that is compatible with the schema that it is associated with.|

<h2 id="tocS_GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails">GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1removecertificateerrordetails"></a>
<a id="schema_GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails"></a>
<a id="tocSgooglechromepolicyversionsv1removecertificateerrordetails"></a>
<a id="tocsgooglechromepolicyversionsv1removecertificateerrordetails"></a>

```json
{
  "certificateReferences": [
    {
      "network": "string",
      "orgUnitId": "string"
    }
  ]
}
```

Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateReferences|[[GoogleChromePolicyVersionsV1CertificateReference](#schemagooglechromepolicyversionsv1certificatereference)]|false|read-only|Output only. If the certificate was not removed, a list of references to the certificate that prevented it from being removed. Only unreferenced certificates can be removed.|

<h2 id="tocS_GoogleChromePolicyVersionsV1RemoveCertificateRequest">GoogleChromePolicyVersionsV1RemoveCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1removecertificaterequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1RemoveCertificateRequest"></a>
<a id="tocSgooglechromepolicyversionsv1removecertificaterequest"></a>
<a id="tocsgooglechromepolicyversionsv1removecertificaterequest"></a>

```json
{
  "networkId": "string",
  "targetResource": "string"
}
```

Request object for removing a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkId|string|false|none|Required. The GUID of the certificate to remove.|
|targetResource|string|false|none|Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1RemoveCertificateResponse">GoogleChromePolicyVersionsV1RemoveCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1removecertificateresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1RemoveCertificateResponse"></a>
<a id="tocSgooglechromepolicyversionsv1removecertificateresponse"></a>
<a id="tocsgooglechromepolicyversionsv1removecertificateresponse"></a>

```json
{}
```

Response object for removing a certificate.

<h2 id="tocS_GoogleChromePolicyVersionsV1RemoveNetworkRequest">GoogleChromePolicyVersionsV1RemoveNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1removenetworkrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1RemoveNetworkRequest"></a>
<a id="tocSgooglechromepolicyversionsv1removenetworkrequest"></a>
<a id="tocsgooglechromepolicyversionsv1removenetworkrequest"></a>

```json
{
  "networkId": "string",
  "targetResource": "string"
}
```

Request object for removing a network

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkId|string|false|none|Required. The GUID of the network to remove.|
|targetResource|string|false|none|Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")|

<h2 id="tocS_GoogleChromePolicyVersionsV1RemoveNetworkResponse">GoogleChromePolicyVersionsV1RemoveNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1removenetworkresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1RemoveNetworkResponse"></a>
<a id="tocSgooglechromepolicyversionsv1removenetworkresponse"></a>
<a id="tocsgooglechromepolicyversionsv1removenetworkresponse"></a>

```json
{}
```

Response object for removing a network.

<h2 id="tocS_GoogleChromePolicyVersionsV1ResolveRequest">GoogleChromePolicyVersionsV1ResolveRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1resolverequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1ResolveRequest"></a>
<a id="tocSgooglechromepolicyversionsv1resolverequest"></a>
<a id="tocsgooglechromepolicyversionsv1resolverequest"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "policySchemaFilter": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Request message for getting the resolved policy value for a specific target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|The maximum number of policies to return, defaults to 100 and has a maximum of 1000.|
|pageToken|string|false|none|The page token used to retrieve a specific page of the request.|
|policySchemaFilter|string|false|none|Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target resource on which the policies should be resolved.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ResolveResponse">GoogleChromePolicyVersionsV1ResolveResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1resolveresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1ResolveResponse"></a>
<a id="tocSgooglechromepolicyversionsv1resolveresponse"></a>
<a id="tocsgooglechromepolicyversionsv1resolveresponse"></a>

```json
{
  "nextPageToken": "string",
  "resolvedPolicies": [
    {
      "addedSourceKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "sourceKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "targetKey": {
        "additionalTargetKeys": {
          "property1": "string",
          "property2": "string"
        },
        "targetResource": "string"
      },
      "value": {
        "policySchema": "string",
        "value": {
          "property1": null,
          "property2": null
        }
      }
    }
  ]
}
```

Response message for getting the resolved policy value for a specific target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The page token used to get the next set of resolved policies found by the request.|
|resolvedPolicies|[[GoogleChromePolicyVersionsV1ResolvedPolicy](#schemagooglechromepolicyversionsv1resolvedpolicy)]|false|none|The list of resolved policies found by the resolve request.|

<h2 id="tocS_GoogleChromePolicyVersionsV1ResolvedPolicy">GoogleChromePolicyVersionsV1ResolvedPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1resolvedpolicy"></a>
<a id="schema_GoogleChromePolicyVersionsV1ResolvedPolicy"></a>
<a id="tocSgooglechromepolicyversionsv1resolvedpolicy"></a>
<a id="tocsgooglechromepolicyversionsv1resolvedpolicy"></a>

```json
{
  "addedSourceKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  },
  "sourceKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  },
  "targetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  },
  "value": {
    "policySchema": "string",
    "value": {
      "property1": null,
      "property2": null
    }
  }
}
```

The resolved value of a policy for a given target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedSourceKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Output only. The added source key establishes at which level an entity was explicitly added for management. This is useful for certain type of policies that are only applied if they are explicitly added for management. For example: apps and networks. An entity can only be deleted from management in an Organizational Unit that it was explicitly added to. If this is not present it means that the policy is managed without the need to explicitly add an entity, for example: standard user or device policies.|
|sourceKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Output only. The source resource from which this policy value is obtained. May be the same as `targetKey` if the policy is directly modified on the target, otherwise it would be another resource from which the policy gets its value (if applicable). If not present, the source is the default value for the customer.|
|targetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Output only. The target resource for which the resolved policy value applies.|
|value|[GoogleChromePolicyVersionsV1PolicyValue](#schemagooglechromepolicyversionsv1policyvalue)|false|none|Output only. The resolved value of the policy.|

<h2 id="tocS_GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest">GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1updategrouppriorityorderingrequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest"></a>
<a id="tocSgooglechromepolicyversionsv1updategrouppriorityorderingrequest"></a>
<a id="tocsgooglechromepolicyversionsv1updategrouppriorityorderingrequest"></a>

```json
{
  "groupIds": [
    "string"
  ],
  "policyNamespace": "string",
  "policySchema": "string",
  "policyTargetKey": {
    "additionalTargetKeys": {
      "property1": "string",
      "property2": "string"
    },
    "targetResource": "string"
  }
}
```

Request message for updating the group priority ordering of an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupIds|[string]|false|none|Required. The group IDs, in desired priority ordering.|
|policyNamespace|string|false|none|The namespace of the policy type for the request.|
|policySchema|string|false|none|The schema name of the policy for the request.|
|policyTargetKey|[GoogleChromePolicyVersionsV1PolicyTargetKey](#schemagooglechromepolicyversionsv1policytargetkey)|false|none|Required. The key of the target for which we want to update the group priority ordering. The target resource must point to an app.|

<h2 id="tocS_GoogleChromePolicyVersionsV1UploadPolicyFileRequest">GoogleChromePolicyVersionsV1UploadPolicyFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1uploadpolicyfilerequest"></a>
<a id="schema_GoogleChromePolicyVersionsV1UploadPolicyFileRequest"></a>
<a id="tocSgooglechromepolicyversionsv1uploadpolicyfilerequest"></a>
<a id="tocsgooglechromepolicyversionsv1uploadpolicyfilerequest"></a>

```json
{
  "policyField": "string"
}
```

Request message for uploading a file for a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyField|string|false|none|Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.|

<h2 id="tocS_GoogleChromePolicyVersionsV1UploadPolicyFileResponse">GoogleChromePolicyVersionsV1UploadPolicyFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromepolicyversionsv1uploadpolicyfileresponse"></a>
<a id="schema_GoogleChromePolicyVersionsV1UploadPolicyFileResponse"></a>
<a id="tocSgooglechromepolicyversionsv1uploadpolicyfileresponse"></a>
<a id="tocsgooglechromepolicyversionsv1uploadpolicyfileresponse"></a>

```json
{
  "downloadUri": "string"
}
```

Response message for downloading an uploaded file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUri|string|false|none|The uri for end user to download the file.|

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

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_Proto2DescriptorProto">Proto2DescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2descriptorproto"></a>
<a id="schema_Proto2DescriptorProto"></a>
<a id="tocSproto2descriptorproto"></a>
<a id="tocsproto2descriptorproto"></a>

```json
{
  "enumType": [
    {
      "name": "string",
      "value": [
        {
          "name": "string",
          "number": 0
        }
      ]
    }
  ],
  "field": [
    {
      "defaultValue": "string",
      "jsonName": "string",
      "label": "LABEL_OPTIONAL",
      "name": "string",
      "number": 0,
      "oneofIndex": 0,
      "proto3Optional": true,
      "type": "TYPE_DOUBLE",
      "typeName": "string"
    }
  ],
  "name": "string",
  "nestedType": [
    {
      "enumType": [
        {
          "name": "string",
          "value": [
            {
              "name": "string",
              "number": 0
            }
          ]
        }
      ],
      "field": [
        {
          "defaultValue": "string",
          "jsonName": "string",
          "label": "LABEL_OPTIONAL",
          "name": "string",
          "number": 0,
          "oneofIndex": 0,
          "proto3Optional": true,
          "type": "TYPE_DOUBLE",
          "typeName": "string"
        }
      ],
      "name": "string",
      "nestedType": [
        {}
      ],
      "oneofDecl": [
        {
          "name": "string"
        }
      ]
    }
  ],
  "oneofDecl": [
    {
      "name": "string"
    }
  ]
}
```

Describes a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enumType|[[Proto2EnumDescriptorProto](#schemaproto2enumdescriptorproto)]|false|none|none|
|field|[[Proto2FieldDescriptorProto](#schemaproto2fielddescriptorproto)]|false|none|none|
|name|string|false|none|none|
|nestedType|[[Proto2DescriptorProto](#schemaproto2descriptorproto)]|false|none|none|
|oneofDecl|[[Proto2OneofDescriptorProto](#schemaproto2oneofdescriptorproto)]|false|none|none|

<h2 id="tocS_Proto2EnumDescriptorProto">Proto2EnumDescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2enumdescriptorproto"></a>
<a id="schema_Proto2EnumDescriptorProto"></a>
<a id="tocSproto2enumdescriptorproto"></a>
<a id="tocsproto2enumdescriptorproto"></a>

```json
{
  "name": "string",
  "value": [
    {
      "name": "string",
      "number": 0
    }
  ]
}
```

Describes an enum type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|[[Proto2EnumValueDescriptorProto](#schemaproto2enumvaluedescriptorproto)]|false|none|none|

<h2 id="tocS_Proto2EnumValueDescriptorProto">Proto2EnumValueDescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2enumvaluedescriptorproto"></a>
<a id="schema_Proto2EnumValueDescriptorProto"></a>
<a id="tocSproto2enumvaluedescriptorproto"></a>
<a id="tocsproto2enumvaluedescriptorproto"></a>

```json
{
  "name": "string",
  "number": 0
}
```

Describes a value within an enum.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|number|integer(int32)|false|none|none|

<h2 id="tocS_Proto2FieldDescriptorProto">Proto2FieldDescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2fielddescriptorproto"></a>
<a id="schema_Proto2FieldDescriptorProto"></a>
<a id="tocSproto2fielddescriptorproto"></a>
<a id="tocsproto2fielddescriptorproto"></a>

```json
{
  "defaultValue": "string",
  "jsonName": "string",
  "label": "LABEL_OPTIONAL",
  "name": "string",
  "number": 0,
  "oneofIndex": 0,
  "proto3Optional": true,
  "type": "TYPE_DOUBLE",
  "typeName": "string"
}
```

Describes a field within a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|For numeric types, contains the original text representation of the value. For booleans, "true" or "false". For strings, contains the default text contents (not escaped in any way). For bytes, contains the C escaped value. All bytes >= 128 are escaped.|
|jsonName|string|false|none|JSON name of this field. The value is set by protocol compiler. If the user has set a "json_name" option on this field, that option's value will be used. Otherwise, it's deduced from the field's name by converting it to camelCase.|
|label|string|false|none|none|
|name|string|false|none|none|
|number|integer(int32)|false|none|none|
|oneofIndex|integer(int32)|false|none|If set, gives the index of a oneof in the containing type's oneof_decl list. This field is a member of that oneof.|
|proto3Optional|boolean|false|none|If true, this is a proto3 "optional". When a proto3 field is optional, it tracks presence regardless of field type. When proto3_optional is true, this field must be belong to a oneof to signal to old proto3 clients that presence is tracked for this field. This oneof is known as a "synthetic" oneof, and this field must be its sole member (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs exist in the descriptor only, and do not generate any API. Synthetic oneofs must be ordered after all "real" oneofs. For message fields, proto3_optional doesn't create any semantic change, since non-repeated message fields always track presence. However it still indicates the semantic detail of whether the user wrote "optional" or not. This can be useful for round-tripping the .proto file. For consistency we give message fields a synthetic oneof also, even though it is not required to track presence. This is especially important because the parser can't tell if a field is a message or an enum, so it must always create a synthetic oneof. Proto2 optional fields do not set this flag, because they already indicate optional with `LABEL_OPTIONAL`.|
|type|string|false|none|If type_name is set, this need not be set. If both this and type_name are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.|
|typeName|string|false|none|For message and enum types, this is the name of the type. If the name starts with a '.', it is fully-qualified. Otherwise, C++-like scoping rules are used to find the type (i.e. first the nested types within this message are searched, then within the parent, on up to the root namespace).|

#### Enumerated Values

|Property|Value|
|---|---|
|label|LABEL_OPTIONAL|
|label|LABEL_REQUIRED|
|label|LABEL_REPEATED|
|type|TYPE_DOUBLE|
|type|TYPE_FLOAT|
|type|TYPE_INT64|
|type|TYPE_UINT64|
|type|TYPE_INT32|
|type|TYPE_FIXED64|
|type|TYPE_FIXED32|
|type|TYPE_BOOL|
|type|TYPE_STRING|
|type|TYPE_GROUP|
|type|TYPE_MESSAGE|
|type|TYPE_BYTES|
|type|TYPE_UINT32|
|type|TYPE_ENUM|
|type|TYPE_SFIXED32|
|type|TYPE_SFIXED64|
|type|TYPE_SINT32|
|type|TYPE_SINT64|

<h2 id="tocS_Proto2FileDescriptorProto">Proto2FileDescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2filedescriptorproto"></a>
<a id="schema_Proto2FileDescriptorProto"></a>
<a id="tocSproto2filedescriptorproto"></a>
<a id="tocsproto2filedescriptorproto"></a>

```json
{
  "enumType": [
    {
      "name": "string",
      "value": [
        {
          "name": "string",
          "number": 0
        }
      ]
    }
  ],
  "messageType": [
    {
      "enumType": [
        {
          "name": "string",
          "value": [
            {
              "name": "string",
              "number": 0
            }
          ]
        }
      ],
      "field": [
        {
          "defaultValue": "string",
          "jsonName": "string",
          "label": "LABEL_OPTIONAL",
          "name": "string",
          "number": 0,
          "oneofIndex": 0,
          "proto3Optional": true,
          "type": "TYPE_DOUBLE",
          "typeName": "string"
        }
      ],
      "name": "string",
      "nestedType": [
        {}
      ],
      "oneofDecl": [
        {
          "name": "string"
        }
      ]
    }
  ],
  "name": "string",
  "package": "string",
  "syntax": "string"
}
```

Describes a complete .proto file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enumType|[[Proto2EnumDescriptorProto](#schemaproto2enumdescriptorproto)]|false|none|none|
|messageType|[[Proto2DescriptorProto](#schemaproto2descriptorproto)]|false|none|All top-level definitions in this file.|
|name|string|false|none|file name, relative to root of source tree|
|package|string|false|none|e.g. "foo", "foo.bar", etc.|
|syntax|string|false|none|The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions".|

<h2 id="tocS_Proto2OneofDescriptorProto">Proto2OneofDescriptorProto</h2>
<!-- backwards compatibility -->
<a id="schemaproto2oneofdescriptorproto"></a>
<a id="schema_Proto2OneofDescriptorProto"></a>
<a id="tocSproto2oneofdescriptorproto"></a>
<a id="tocsproto2oneofdescriptorproto"></a>

```json
{
  "name": "string"
}
```

Describes a oneof.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
