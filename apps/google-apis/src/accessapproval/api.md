<h1 id="access-approval-api">Access Approval API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for controlling access to data by Google personnel.

Base URLs:

* <a href="https://accessapproval.googleapis.com/">https://accessapproval.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/cloud-provider-access-management/access-approval/docs">External documentation</a>

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

<h1 id="access-approval-api-projects">projects</h1>

## accessapproval.projects.approvalRequests.get

<a id="opIdaccessapproval.projects.approvalRequests.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets an approval request. Returns NOT_FOUND if the request does not exist.

<h3 id="accessapprovalprojectsapprovalrequestsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the approval request to retrieve. Format: "{projects\|folders\|organizations}/{id}/approvalRequests/{approval_request}"|
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
  "approve": {
    "approveTime": "string",
    "autoApproved": true,
    "expireTime": "string",
    "invalidateTime": "string",
    "signatureInfo": {
      "customerKmsKeyVersion": "string",
      "googlePublicKeyPem": "string",
      "signature": "string"
    }
  },
  "dismiss": {
    "dismissTime": "string",
    "implicit": true
  },
  "name": "string",
  "requestTime": "string",
  "requestedExpiration": "string",
  "requestedLocations": {
    "principalOfficeCountry": "string",
    "principalPhysicalLocationCountry": "string"
  },
  "requestedReason": {
    "detail": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "requestedResourceName": "string",
  "requestedResourceProperties": {
    "excludesDescendants": true
  }
}
```

<h3 id="accessapprovalprojectsapprovalrequestsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApprovalRequest](#schemaapprovalrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.deleteAccessApprovalSettings

<a id="opIdaccessapproval.projects.deleteAccessApprovalSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

<h3 id="accessapprovalprojectsdeleteaccessapprovalsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the AccessApprovalSettings to delete.|
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

<h3 id="accessapprovalprojectsdeleteaccessapprovalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.updateAccessApprovalSettings

<a id="opIdaccessapproval.projects.updateAccessApprovalSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeKeyVersion": "string",
    "enrolledServices": [
      {
        "cloudProduct": "string",
        "enrollmentLevel": "ENROLLMENT_LEVEL_UNSPECIFIED"
      }
    ],
    "name": "string",
    "notificationEmails": [
      "string"
    ]
  }'
```

`PATCH /v1/{name}`

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

> Body parameter

```json
{
  "activeKeyVersion": "string",
  "enrolledServices": [
    {
      "cloudProduct": "string",
      "enrollmentLevel": "ENROLLMENT_LEVEL_UNSPECIFIED"
    }
  ],
  "name": "string",
  "notificationEmails": [
    "string"
  ]
}
```

<h3 id="accessapprovalprojectsupdateaccessapprovalsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"|
|updateMask|query|string|false|The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.|
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
|body|body|[AccessApprovalSettings](#schemaaccessapprovalsettings)|false|none|
|» activeKeyVersion|body|string|false|The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.|
|» enrolledServices|body|[[EnrolledService](#schemaenrolledservice)]|false|A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.|
|» name|body|string|false|The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"|
|» notificationEmails|body|[string]|false|A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.|

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
  "activeKeyVersion": "string",
  "ancestorHasActiveKeyVersion": true,
  "enrolledAncestor": true,
  "enrolledServices": [
    {
      "cloudProduct": "string",
      "enrollmentLevel": "ENROLLMENT_LEVEL_UNSPECIFIED"
    }
  ],
  "invalidKeyVersion": true,
  "name": "string",
  "notificationEmails": [
    "string"
  ]
}
```

<h3 id="accessapprovalprojectsupdateaccessapprovalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccessApprovalSettings](#schemaaccessapprovalsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.approvalRequests.approve

<a id="opIdaccessapproval.projects.approvalRequests.approve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expireTime": "string"
  }'
```

`POST /v1/{name}:approve`

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

> Body parameter

```json
{
  "expireTime": "string"
}
```

<h3 id="accessapprovalprojectsapprovalrequestsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the approval request to approve.|
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
|body|body|[ApproveApprovalRequestMessage](#schemaapproveapprovalrequestmessage)|false|none|
|» expireTime|body|string(google-datetime)|false|The expiration time of this approval.|

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
  "approve": {
    "approveTime": "string",
    "autoApproved": true,
    "expireTime": "string",
    "invalidateTime": "string",
    "signatureInfo": {
      "customerKmsKeyVersion": "string",
      "googlePublicKeyPem": "string",
      "signature": "string"
    }
  },
  "dismiss": {
    "dismissTime": "string",
    "implicit": true
  },
  "name": "string",
  "requestTime": "string",
  "requestedExpiration": "string",
  "requestedLocations": {
    "principalOfficeCountry": "string",
    "principalPhysicalLocationCountry": "string"
  },
  "requestedReason": {
    "detail": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "requestedResourceName": "string",
  "requestedResourceProperties": {
    "excludesDescendants": true
  }
}
```

<h3 id="accessapprovalprojectsapprovalrequestsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApprovalRequest](#schemaapprovalrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.approvalRequests.dismiss

<a id="opIdaccessapproval.projects.approvalRequests.dismiss"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:dismiss \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:dismiss`

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

> Body parameter

```json
{}
```

<h3 id="accessapprovalprojectsapprovalrequestsdismiss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the ApprovalRequest to dismiss.|
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
|body|body|[DismissApprovalRequestMessage](#schemadismissapprovalrequestmessage)|false|none|

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
  "approve": {
    "approveTime": "string",
    "autoApproved": true,
    "expireTime": "string",
    "invalidateTime": "string",
    "signatureInfo": {
      "customerKmsKeyVersion": "string",
      "googlePublicKeyPem": "string",
      "signature": "string"
    }
  },
  "dismiss": {
    "dismissTime": "string",
    "implicit": true
  },
  "name": "string",
  "requestTime": "string",
  "requestedExpiration": "string",
  "requestedLocations": {
    "principalOfficeCountry": "string",
    "principalPhysicalLocationCountry": "string"
  },
  "requestedReason": {
    "detail": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "requestedResourceName": "string",
  "requestedResourceProperties": {
    "excludesDescendants": true
  }
}
```

<h3 id="accessapprovalprojectsapprovalrequestsdismiss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApprovalRequest](#schemaapprovalrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.approvalRequests.invalidate

<a id="opIdaccessapproval.projects.approvalRequests.invalidate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:invalidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:invalidate`

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

> Body parameter

```json
{}
```

<h3 id="accessapprovalprojectsapprovalrequestsinvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the ApprovalRequest to invalidate.|
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
|body|body|[InvalidateApprovalRequestMessage](#schemainvalidateapprovalrequestmessage)|false|none|

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
  "approve": {
    "approveTime": "string",
    "autoApproved": true,
    "expireTime": "string",
    "invalidateTime": "string",
    "signatureInfo": {
      "customerKmsKeyVersion": "string",
      "googlePublicKeyPem": "string",
      "signature": "string"
    }
  },
  "dismiss": {
    "dismissTime": "string",
    "implicit": true
  },
  "name": "string",
  "requestTime": "string",
  "requestedExpiration": "string",
  "requestedLocations": {
    "principalOfficeCountry": "string",
    "principalPhysicalLocationCountry": "string"
  },
  "requestedReason": {
    "detail": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "requestedResourceName": "string",
  "requestedResourceProperties": {
    "excludesDescendants": true
  }
}
```

<h3 id="accessapprovalprojectsapprovalrequestsinvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApprovalRequest](#schemaapprovalrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accessapproval.projects.approvalRequests.list

<a id="opIdaccessapproval.projects.approvalRequests.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/approvalRequests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/approvalRequests`

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

<h3 id="accessapprovalprojectsapprovalrequestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".|
|filter|query|string|false|A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.|
|pageSize|query|integer|false|Requested page size.|
|pageToken|query|string|false|A token identifying the page of results to return.|
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
  "approvalRequests": [
    {
      "approve": {
        "approveTime": "string",
        "autoApproved": true,
        "expireTime": "string",
        "invalidateTime": "string",
        "signatureInfo": {
          "customerKmsKeyVersion": "string",
          "googlePublicKeyPem": "string",
          "signature": "string"
        }
      },
      "dismiss": {
        "dismissTime": "string",
        "implicit": true
      },
      "name": "string",
      "requestTime": "string",
      "requestedExpiration": "string",
      "requestedLocations": {
        "principalOfficeCountry": "string",
        "principalPhysicalLocationCountry": "string"
      },
      "requestedReason": {
        "detail": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "requestedResourceName": "string",
      "requestedResourceProperties": {
        "excludesDescendants": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="accessapprovalprojectsapprovalrequestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApprovalRequestsResponse](#schemalistapprovalrequestsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AccessApprovalServiceAccount">AccessApprovalServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaaccessapprovalserviceaccount"></a>
<a id="schema_AccessApprovalServiceAccount"></a>
<a id="tocSaccessapprovalserviceaccount"></a>
<a id="tocsaccessapprovalserviceaccount"></a>

```json
{
  "accountEmail": "string",
  "name": "string"
}
```

Access Approval service account related to a project/folder/organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEmail|string|false|none|Email address of the service account.|
|name|string|false|none|The resource name of the Access Approval service account. Format is one of: * "projects/{project}/serviceAccount" * "folders/{folder}/serviceAccount" * "organizations/{organization}/serviceAccount"|

<h2 id="tocS_AccessApprovalSettings">AccessApprovalSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccessapprovalsettings"></a>
<a id="schema_AccessApprovalSettings"></a>
<a id="tocSaccessapprovalsettings"></a>
<a id="tocsaccessapprovalsettings"></a>

```json
{
  "activeKeyVersion": "string",
  "ancestorHasActiveKeyVersion": true,
  "enrolledAncestor": true,
  "enrolledServices": [
    {
      "cloudProduct": "string",
      "enrollmentLevel": "ENROLLMENT_LEVEL_UNSPECIFIED"
    }
  ],
  "invalidKeyVersion": true,
  "name": "string",
  "notificationEmails": [
    "string"
  ]
}
```

Settings on a Project/Folder/Organization related to Access Approval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeKeyVersion|string|false|none|The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.|
|ancestorHasActiveKeyVersion|boolean|false|read-only|Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).|
|enrolledAncestor|boolean|false|read-only|Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).|
|enrolledServices|[[EnrolledService](#schemaenrolledservice)]|false|none|A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.|
|invalidKeyVersion|boolean|false|read-only|Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.|
|name|string|false|none|The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"|
|notificationEmails|[string]|false|none|A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.|

<h2 id="tocS_AccessLocations">AccessLocations</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslocations"></a>
<a id="schema_AccessLocations"></a>
<a id="tocSaccesslocations"></a>
<a id="tocsaccesslocations"></a>

```json
{
  "principalOfficeCountry": "string",
  "principalPhysicalLocationCountry": "string"
}
```

Home office and physical location of the principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalOfficeCountry|string|false|none|The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location|
|principalPhysicalLocationCountry|string|false|none|Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location|

<h2 id="tocS_AccessReason">AccessReason</h2>
<!-- backwards compatibility -->
<a id="schemaaccessreason"></a>
<a id="schema_AccessReason"></a>
<a id="tocSaccessreason"></a>
<a id="tocsaccessreason"></a>

```json
{
  "detail": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail about certain reason types. See comments for each type above.|
|type|string|false|none|Type of access justification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|CUSTOMER_INITIATED_SUPPORT|
|type|GOOGLE_INITIATED_SERVICE|
|type|GOOGLE_INITIATED_REVIEW|
|type|THIRD_PARTY_DATA_REQUEST|
|type|GOOGLE_RESPONSE_TO_PRODUCTION_ALERT|

<h2 id="tocS_ApprovalRequest">ApprovalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrequest"></a>
<a id="schema_ApprovalRequest"></a>
<a id="tocSapprovalrequest"></a>
<a id="tocsapprovalrequest"></a>

```json
{
  "approve": {
    "approveTime": "string",
    "autoApproved": true,
    "expireTime": "string",
    "invalidateTime": "string",
    "signatureInfo": {
      "customerKmsKeyVersion": "string",
      "googlePublicKeyPem": "string",
      "signature": "string"
    }
  },
  "dismiss": {
    "dismissTime": "string",
    "implicit": true
  },
  "name": "string",
  "requestTime": "string",
  "requestedExpiration": "string",
  "requestedLocations": {
    "principalOfficeCountry": "string",
    "principalPhysicalLocationCountry": "string"
  },
  "requestedReason": {
    "detail": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "requestedResourceName": "string",
  "requestedResourceProperties": {
    "excludesDescendants": true
  }
}
```

A request for the customer to approve access to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approve|[ApproveDecision](#schemaapprovedecision)|false|none|Access was approved.|
|dismiss|[DismissDecision](#schemadismissdecision)|false|none|The request was dismissed.|
|name|string|false|none|The resource name of the request. Format is "{projects\|folders\|organizations}/{id}/approvalRequests/{approval_request}".|
|requestTime|string(google-datetime)|false|none|The time at which approval was requested.|
|requestedExpiration|string(google-datetime)|false|none|The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.|
|requestedLocations|[AccessLocations](#schemaaccesslocations)|false|none|The locations for which approval is being requested.|
|requestedReason|[AccessReason](#schemaaccessreason)|false|none|The justification for which approval is being requested.|
|requestedResourceName|string|false|none|The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.|
|requestedResourceProperties|[ResourceProperties](#schemaresourceproperties)|false|none|Properties related to the resource represented by requested_resource_name.|

<h2 id="tocS_ApproveApprovalRequestMessage">ApproveApprovalRequestMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapproveapprovalrequestmessage"></a>
<a id="schema_ApproveApprovalRequestMessage"></a>
<a id="tocSapproveapprovalrequestmessage"></a>
<a id="tocsapproveapprovalrequestmessage"></a>

```json
{
  "expireTime": "string"
}
```

Request to approve an ApprovalRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The expiration time of this approval.|

<h2 id="tocS_ApproveDecision">ApproveDecision</h2>
<!-- backwards compatibility -->
<a id="schemaapprovedecision"></a>
<a id="schema_ApproveDecision"></a>
<a id="tocSapprovedecision"></a>
<a id="tocsapprovedecision"></a>

```json
{
  "approveTime": "string",
  "autoApproved": true,
  "expireTime": "string",
  "invalidateTime": "string",
  "signatureInfo": {
    "customerKmsKeyVersion": "string",
    "googlePublicKeyPem": "string",
    "signature": "string"
  }
}
```

A decision that has been made to approve access to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approveTime|string(google-datetime)|false|none|The time at which approval was granted.|
|autoApproved|boolean|false|none|True when the request has been auto-approved.|
|expireTime|string(google-datetime)|false|none|The time at which the approval expires.|
|invalidateTime|string(google-datetime)|false|none|If set, denotes the timestamp at which the approval is invalidated.|
|signatureInfo|[SignatureInfo](#schemasignatureinfo)|false|none|The signature for the ApprovalRequest and details on how it was signed.|

<h2 id="tocS_DismissApprovalRequestMessage">DismissApprovalRequestMessage</h2>
<!-- backwards compatibility -->
<a id="schemadismissapprovalrequestmessage"></a>
<a id="schema_DismissApprovalRequestMessage"></a>
<a id="tocSdismissapprovalrequestmessage"></a>
<a id="tocsdismissapprovalrequestmessage"></a>

```json
{}
```

Request to dismiss an approval request.

<h2 id="tocS_DismissDecision">DismissDecision</h2>
<!-- backwards compatibility -->
<a id="schemadismissdecision"></a>
<a id="schema_DismissDecision"></a>
<a id="tocSdismissdecision"></a>
<a id="tocsdismissdecision"></a>

```json
{
  "dismissTime": "string",
  "implicit": true
}
```

A decision that has been made to dismiss an approval request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dismissTime|string(google-datetime)|false|none|The time at which the approval request was dismissed.|
|implicit|boolean|false|none|This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).|

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

<h2 id="tocS_EnrolledService">EnrolledService</h2>
<!-- backwards compatibility -->
<a id="schemaenrolledservice"></a>
<a id="schema_EnrolledService"></a>
<a id="tocSenrolledservice"></a>
<a id="tocsenrolledservice"></a>

```json
{
  "cloudProduct": "string",
  "enrollmentLevel": "ENROLLMENT_LEVEL_UNSPECIFIED"
}
```

Represents the enrollment of a cloud resource into a specific service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudProduct|string|false|none|The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services|
|enrollmentLevel|string|false|none|The enrollment level of the service.|

#### Enumerated Values

|Property|Value|
|---|---|
|enrollmentLevel|ENROLLMENT_LEVEL_UNSPECIFIED|
|enrollmentLevel|BLOCK_ALL|

<h2 id="tocS_InvalidateApprovalRequestMessage">InvalidateApprovalRequestMessage</h2>
<!-- backwards compatibility -->
<a id="schemainvalidateapprovalrequestmessage"></a>
<a id="schema_InvalidateApprovalRequestMessage"></a>
<a id="tocSinvalidateapprovalrequestmessage"></a>
<a id="tocsinvalidateapprovalrequestmessage"></a>

```json
{}
```

Request to invalidate an existing approval.

<h2 id="tocS_ListApprovalRequestsResponse">ListApprovalRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapprovalrequestsresponse"></a>
<a id="schema_ListApprovalRequestsResponse"></a>
<a id="tocSlistapprovalrequestsresponse"></a>
<a id="tocslistapprovalrequestsresponse"></a>

```json
{
  "approvalRequests": [
    {
      "approve": {
        "approveTime": "string",
        "autoApproved": true,
        "expireTime": "string",
        "invalidateTime": "string",
        "signatureInfo": {
          "customerKmsKeyVersion": "string",
          "googlePublicKeyPem": "string",
          "signature": "string"
        }
      },
      "dismiss": {
        "dismissTime": "string",
        "implicit": true
      },
      "name": "string",
      "requestTime": "string",
      "requestedExpiration": "string",
      "requestedLocations": {
        "principalOfficeCountry": "string",
        "principalPhysicalLocationCountry": "string"
      },
      "requestedReason": {
        "detail": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "requestedResourceName": "string",
      "requestedResourceProperties": {
        "excludesDescendants": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response to listing of ApprovalRequest objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRequests|[[ApprovalRequest](#schemaapprovalrequest)]|false|none|Approval request details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more.|

<h2 id="tocS_ResourceProperties">ResourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaresourceproperties"></a>
<a id="schema_ResourceProperties"></a>
<a id="tocSresourceproperties"></a>
<a id="tocsresourceproperties"></a>

```json
{
  "excludesDescendants": true
}
```

The properties associated with the resource of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludesDescendants|boolean|false|none|Whether an approval will exclude the descendants of the resource being requested.|

<h2 id="tocS_SignatureInfo">SignatureInfo</h2>
<!-- backwards compatibility -->
<a id="schemasignatureinfo"></a>
<a id="schema_SignatureInfo"></a>
<a id="tocSsignatureinfo"></a>
<a id="tocssignatureinfo"></a>

```json
{
  "customerKmsKeyVersion": "string",
  "googlePublicKeyPem": "string",
  "signature": "string"
}
```

Information about the digital signature of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerKmsKeyVersion|string|false|none|The resource name of the customer CryptoKeyVersion used for signing.|
|googlePublicKeyPem|string|false|none|The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.|
|signature|string(byte)|false|none|The digital signature.|
