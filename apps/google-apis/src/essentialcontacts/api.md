<h1 id="essential-contacts-api">Essential Contacts API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://essentialcontacts.googleapis.com/">https://essentialcontacts.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/essentialcontacts/docs/">External documentation</a>

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

<h1 id="essential-contacts-api-projects">projects</h1>

## essentialcontacts.projects.contacts.get

<a id="opIdessentialcontacts.projects.contacts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a single contact.

<h3 id="essentialcontactsprojectscontactsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the contact to retrieve. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}|
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
  "email": "string",
  "languageTag": "string",
  "name": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.delete

<a id="opIdessentialcontacts.projects.contacts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a contact.

<h3 id="essentialcontactsprojectscontactsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the contact to delete. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}|
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

<h3 id="essentialcontactsprojectscontactsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.patch

<a id="opIdessentialcontacts.projects.contacts.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "languageTag": "string",
    "notificationCategorySubscriptions": [
      "NOTIFICATION_CATEGORY_UNSPECIFIED"
    ],
    "validateTime": "string",
    "validationState": "VALIDATION_STATE_UNSPECIFIED"
  }'
```

`PATCH /v1/{name}`

Updates a contact. Note: A contact's email address cannot be changed.

> Body parameter

```json
{
  "email": "string",
  "languageTag": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}|
|updateMask|query|string|false|Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)|false|none|
|» email|body|string|false|Required. The email address to send notifications to. The email address does not need to be a Google Account.|
|» languageTag|body|string|false|Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.|
|» notificationCategorySubscriptions|body|[string]|false|Required. The categories of notifications that the contact will receive communications for.|
|» validateTime|body|string(google-datetime)|false|The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.|
|» validationState|body|string|false|The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» notificationCategorySubscriptions|NOTIFICATION_CATEGORY_UNSPECIFIED|
|» notificationCategorySubscriptions|ALL|
|» notificationCategorySubscriptions|SUSPENSION|
|» notificationCategorySubscriptions|SECURITY|
|» notificationCategorySubscriptions|TECHNICAL|
|» notificationCategorySubscriptions|BILLING|
|» notificationCategorySubscriptions|LEGAL|
|» notificationCategorySubscriptions|PRODUCT_UPDATES|
|» notificationCategorySubscriptions|TECHNICAL_INCIDENTS|
|» validationState|VALIDATION_STATE_UNSPECIFIED|
|» validationState|VALID|
|» validationState|INVALID|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "languageTag": "string",
  "name": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.list

<a id="opIdessentialcontacts.projects.contacts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/contacts`

Lists the contacts that have been set on a resource.

<h3 id="essentialcontactsprojectscontactslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.|
|pageToken|query|string|false|Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "contacts": [
    {
      "email": "string",
      "languageTag": "string",
      "name": "string",
      "notificationCategorySubscriptions": [
        "NOTIFICATION_CATEGORY_UNSPECIFIED"
      ],
      "validateTime": "string",
      "validationState": "VALIDATION_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="essentialcontactsprojectscontactslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudEssentialcontactsV1ListContactsResponse](#schemagooglecloudessentialcontactsv1listcontactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.create

<a id="opIdessentialcontacts.projects.contacts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "languageTag": "string",
    "notificationCategorySubscriptions": [
      "NOTIFICATION_CATEGORY_UNSPECIFIED"
    ],
    "validateTime": "string",
    "validationState": "VALIDATION_STATE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/contacts`

Adds a new contact for a resource.

> Body parameter

```json
{
  "email": "string",
  "languageTag": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}|
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
|body|body|[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)|false|none|
|» email|body|string|false|Required. The email address to send notifications to. The email address does not need to be a Google Account.|
|» languageTag|body|string|false|Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.|
|» notificationCategorySubscriptions|body|[string]|false|Required. The categories of notifications that the contact will receive communications for.|
|» validateTime|body|string(google-datetime)|false|The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.|
|» validationState|body|string|false|The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» notificationCategorySubscriptions|NOTIFICATION_CATEGORY_UNSPECIFIED|
|» notificationCategorySubscriptions|ALL|
|» notificationCategorySubscriptions|SUSPENSION|
|» notificationCategorySubscriptions|SECURITY|
|» notificationCategorySubscriptions|TECHNICAL|
|» notificationCategorySubscriptions|BILLING|
|» notificationCategorySubscriptions|LEGAL|
|» notificationCategorySubscriptions|PRODUCT_UPDATES|
|» notificationCategorySubscriptions|TECHNICAL_INCIDENTS|
|» validationState|VALIDATION_STATE_UNSPECIFIED|
|» validationState|VALID|
|» validationState|INVALID|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "languageTag": "string",
  "name": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.compute

<a id="opIdessentialcontacts.projects.contacts.compute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contacts:compute \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/contacts:compute`

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

<h3 id="essentialcontactsprojectscontactscompute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the resource to compute contacts for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}|
|notificationCategories|query|[string]|false|The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.|
|pageToken|query|string|false|Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
|notificationCategories|NOTIFICATION_CATEGORY_UNSPECIFIED|
|notificationCategories|ALL|
|notificationCategories|SUSPENSION|
|notificationCategories|SECURITY|
|notificationCategories|TECHNICAL|
|notificationCategories|BILLING|
|notificationCategories|LEGAL|
|notificationCategories|PRODUCT_UPDATES|
|notificationCategories|TECHNICAL_INCIDENTS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contacts": [
    {
      "email": "string",
      "languageTag": "string",
      "name": "string",
      "notificationCategorySubscriptions": [
        "NOTIFICATION_CATEGORY_UNSPECIFIED"
      ],
      "validateTime": "string",
      "validationState": "VALIDATION_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="essentialcontactsprojectscontactscompute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudEssentialcontactsV1ComputeContactsResponse](#schemagooglecloudessentialcontactsv1computecontactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## essentialcontacts.projects.contacts.sendTestMessage

<a id="opIdessentialcontacts.projects.contacts.sendTestMessage"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contacts:sendTestMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contacts": [
      "string"
    ],
    "notificationCategory": "NOTIFICATION_CATEGORY_UNSPECIFIED"
  }'
```

`POST /v1/{resource}/contacts:sendTestMessage`

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

> Body parameter

```json
{
  "contacts": [
    "string"
  ],
  "notificationCategory": "NOTIFICATION_CATEGORY_UNSPECIFIED"
}
```

<h3 id="essentialcontactsprojectscontactssendtestmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}|
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
|body|body|[GoogleCloudEssentialcontactsV1SendTestMessageRequest](#schemagooglecloudessentialcontactsv1sendtestmessagerequest)|false|none|
|» contacts|body|[string]|false|Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}|
|» notificationCategory|body|string|false|Required. The notification category to send the test message for. All contacts must be subscribed to this category.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» notificationCategory|NOTIFICATION_CATEGORY_UNSPECIFIED|
|» notificationCategory|ALL|
|» notificationCategory|SUSPENSION|
|» notificationCategory|SECURITY|
|» notificationCategory|TECHNICAL|
|» notificationCategory|BILLING|
|» notificationCategory|LEGAL|
|» notificationCategory|PRODUCT_UPDATES|
|» notificationCategory|TECHNICAL_INCIDENTS|

> Example responses

> 200 Response

```json
{}
```

<h3 id="essentialcontactsprojectscontactssendtestmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudEssentialcontactsV1ComputeContactsResponse">GoogleCloudEssentialcontactsV1ComputeContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudessentialcontactsv1computecontactsresponse"></a>
<a id="schema_GoogleCloudEssentialcontactsV1ComputeContactsResponse"></a>
<a id="tocSgooglecloudessentialcontactsv1computecontactsresponse"></a>
<a id="tocsgooglecloudessentialcontactsv1computecontactsresponse"></a>

```json
{
  "contacts": [
    {
      "email": "string",
      "languageTag": "string",
      "name": "string",
      "notificationCategorySubscriptions": [
        "NOTIFICATION_CATEGORY_UNSPECIFIED"
      ],
      "validateTime": "string",
      "validationState": "VALIDATION_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the ComputeContacts method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)]|false|none|All contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.|
|nextPageToken|string|false|none|If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.|

<h2 id="tocS_GoogleCloudEssentialcontactsV1Contact">GoogleCloudEssentialcontactsV1Contact</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudessentialcontactsv1contact"></a>
<a id="schema_GoogleCloudEssentialcontactsV1Contact"></a>
<a id="tocSgooglecloudessentialcontactsv1contact"></a>
<a id="tocsgooglecloudessentialcontactsv1contact"></a>

```json
{
  "email": "string",
  "languageTag": "string",
  "name": "string",
  "notificationCategorySubscriptions": [
    "NOTIFICATION_CATEGORY_UNSPECIFIED"
  ],
  "validateTime": "string",
  "validationState": "VALIDATION_STATE_UNSPECIFIED"
}
```

A contact that will receive notifications from Google Cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Required. The email address to send notifications to. The email address does not need to be a Google Account.|
|languageTag|string|false|none|Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.|
|name|string|false|read-only|Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}|
|notificationCategorySubscriptions|[string]|false|none|Required. The categories of notifications that the contact will receive communications for.|
|validateTime|string(google-datetime)|false|none|The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.|
|validationState|string|false|none|The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationCategorySubscriptions|NOTIFICATION_CATEGORY_UNSPECIFIED|
|notificationCategorySubscriptions|ALL|
|notificationCategorySubscriptions|SUSPENSION|
|notificationCategorySubscriptions|SECURITY|
|notificationCategorySubscriptions|TECHNICAL|
|notificationCategorySubscriptions|BILLING|
|notificationCategorySubscriptions|LEGAL|
|notificationCategorySubscriptions|PRODUCT_UPDATES|
|notificationCategorySubscriptions|TECHNICAL_INCIDENTS|
|validationState|VALIDATION_STATE_UNSPECIFIED|
|validationState|VALID|
|validationState|INVALID|

<h2 id="tocS_GoogleCloudEssentialcontactsV1ListContactsResponse">GoogleCloudEssentialcontactsV1ListContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudessentialcontactsv1listcontactsresponse"></a>
<a id="schema_GoogleCloudEssentialcontactsV1ListContactsResponse"></a>
<a id="tocSgooglecloudessentialcontactsv1listcontactsresponse"></a>
<a id="tocsgooglecloudessentialcontactsv1listcontactsresponse"></a>

```json
{
  "contacts": [
    {
      "email": "string",
      "languageTag": "string",
      "name": "string",
      "notificationCategorySubscriptions": [
        "NOTIFICATION_CATEGORY_UNSPECIFIED"
      ],
      "validateTime": "string",
      "validationState": "VALIDATION_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the ListContacts method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[GoogleCloudEssentialcontactsV1Contact](#schemagooglecloudessentialcontactsv1contact)]|false|none|The contacts for the specified resource.|
|nextPageToken|string|false|none|If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.|

<h2 id="tocS_GoogleCloudEssentialcontactsV1SendTestMessageRequest">GoogleCloudEssentialcontactsV1SendTestMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudessentialcontactsv1sendtestmessagerequest"></a>
<a id="schema_GoogleCloudEssentialcontactsV1SendTestMessageRequest"></a>
<a id="tocSgooglecloudessentialcontactsv1sendtestmessagerequest"></a>
<a id="tocsgooglecloudessentialcontactsv1sendtestmessagerequest"></a>

```json
{
  "contacts": [
    "string"
  ],
  "notificationCategory": "NOTIFICATION_CATEGORY_UNSPECIFIED"
}
```

Request message for the SendTestMessage method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[string]|false|none|Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}|
|notificationCategory|string|false|none|Required. The notification category to send the test message for. All contacts must be subscribed to this category.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationCategory|NOTIFICATION_CATEGORY_UNSPECIFIED|
|notificationCategory|ALL|
|notificationCategory|SUSPENSION|
|notificationCategory|SECURITY|
|notificationCategory|TECHNICAL|
|notificationCategory|BILLING|
|notificationCategory|LEGAL|
|notificationCategory|PRODUCT_UPDATES|
|notificationCategory|TECHNICAL_INCIDENTS|

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
