<h1 id="audit-logs">Audit Logs v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|account-info.security.read||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="audit-logs-basic">Basic</h1>

## Retrieve audit logs

<a id="opIdget-/account-info/2026-09/activity/audit-logs"></a>

> Code samples

```bash
curl https://api.hubapi.com/account-info/2026-09/activity/audit-logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account-info/2026-09/activity/audit-logs`

Retrieve activity history for user actions related to approvals, content updates, CRM object updates, security activity, and more (Enterprise only). Learn more about [activities included in audit log exports](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history-in-a-centralized-audit-log?hubs_content=knowledge.hubspot.com/account-management/view-and-export-account-activity-history&hubs_content-cta=centralized%20audit%20log#data-included-in-the-centralized-audit-log).

<h3 id="retrieve-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actingUserId|query|[integer(int32)]|false|An array of user IDs to filter the audit logs by the acting users.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|fillFinalTimestamp|query|boolean|false|A boolean indicating whether to fill the final timestamp in the response.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|occurredAfter|query|string(date-time)|false|The start date and time for filtering logs, in ISO 8601 format.|
|occurredBefore|query|string(date-time)|false|The end date and time for filtering logs, in ISO 8601 format.|
|sort|query|[string]|false|An array of fields to sort the results by.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicApiUserActionEventForwardPaging](#schemacollectionresponsepublicapiuseractioneventforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: account-info.security.read )
</aside>

## Retrieve login activity

<a id="opIdget-/account-info/2026-09/activity/login"></a>

> Code samples

```bash
curl https://api.hubapi.com/account-info/2026-09/activity/login \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account-info/2026-09/activity/login`

Retrieve logs of user actions related to [login activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#account-login-history).

<h3 id="retrieve-login-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|userId|query|integer(int32)|false|The unique identifier of the user whose login activity is being queried.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-login-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicLoginAuditForwardPaging](#schemacollectionresponsepublicloginauditforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: account-info.security.read )
</aside>

## Retrieve security history

<a id="opIdget-/account-info/2026-09/activity/security"></a>

> Code samples

```bash
curl https://api.hubapi.com/account-info/2026-09/activity/security \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account-info/2026-09/activity/security`

Retrieve logs of user actions related to [security activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#security-activity-history).

<h3 id="retrieve-security-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|fromTimestamp|query|integer(int64)|false|The start of the time range for the security activity in Unix timestamp format.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|toTimestamp|query|integer(int64)|false|The end of the time range for the security activity in Unix timestamp format.|
|userId|query|integer(int32)|false|The unique identifier of the user whose security activity you want to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-security-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseHydratedCriticalActionForwardPaging](#schemacollectionresponsehydratedcriticalactionforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: account-info.security.read )
</aside>

# Schemas

<h2 id="tocS_ActingUser">ActingUser</h2>
<!-- backwards compatibility -->
<a id="schemaactinguser"></a>
<a id="schema_ActingUser"></a>
<a id="tocSactinguser"></a>
<a id="tocsactinguser"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEmail|string|false|none|The email address of the user who performed the action.|
|userId|integer(int32)|true|none|The user's unique ID.|

<h2 id="tocS_CollectionResponseHydratedCriticalActionForwardPaging">CollectionResponseHydratedCriticalActionForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsehydratedcriticalactionforwardpaging"></a>
<a id="schema_CollectionResponseHydratedCriticalActionForwardPaging"></a>
<a id="tocScollectionresponsehydratedcriticalactionforwardpaging"></a>
<a id="tocscollectionresponsehydratedcriticalactionforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[HydratedCriticalAction](#schemahydratedcriticalaction)]|true|none|An array of hydrated critical actions, each containing detailed information about a specific critical action.|

<h2 id="tocS_CollectionResponsePublicApiUserActionEventForwardPaging">CollectionResponsePublicApiUserActionEventForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicapiuseractioneventforwardpaging"></a>
<a id="schema_CollectionResponsePublicApiUserActionEventForwardPaging"></a>
<a id="tocScollectionresponsepublicapiuseractioneventforwardpaging"></a>
<a id="tocscollectionresponsepublicapiuseractioneventforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicApiUserActionEvent](#schemapublicapiuseractionevent)]|true|none|An array of user action events, each represented by a PublicApiUserActionEvent object.|

<h2 id="tocS_CollectionResponsePublicLoginAuditForwardPaging">CollectionResponsePublicLoginAuditForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicloginauditforwardpaging"></a>
<a id="schema_CollectionResponsePublicLoginAuditForwardPaging"></a>
<a id="tocScollectionresponsepublicloginauditforwardpaging"></a>
<a id="tocscollectionresponsepublicloginauditforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicLoginAudit](#schemapublicloginaudit)]|true|none|An array of PublicLoginAudit objects, each representing a single login audit event.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_HydratedCriticalAction">HydratedCriticalAction</h2>
<!-- backwards compatibility -->
<a id="schemahydratedcriticalaction"></a>
<a id="schema_HydratedCriticalAction"></a>
<a id="tocShydratedcriticalaction"></a>
<a id="tocshydratedcriticalaction"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actingUser|string|false|none|Email address of the user associated with the activity.|
|countryCode|string|false|none|The approximate country code|
|createdAt|string(date-time)|true|none|The time the activity took place.|
|id|string|true|none|The activity's unique ID.|
|infoUrl|string|false|none|A link to the URL where the action was taken in the account.|
|ipAddress|string|false|none|IP address where the activity originated.|
|location|string|false|none|The approximate location where the activity took place.|
|objectId|string|false|none|The ID of the affected object.|
|regionCode|string|false|none|The approximate region code|
|type|string|true|none|The type of activity.|
|userId|integer(int32)|true|none|The user's unique ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ACCEPTANCE_TEST|
|type|ACCOUNT_ADDED_TO_MULTI_ACCOUNT_ORGANIZATION|
|type|ACCOUNT_REMOVED_FROM_MULTI_ACCOUNT_ORGANIZATION|
|type|ADD_ADMIN_PERMISSIONS|
|type|ADD_ADMIN_USER|
|type|ADD_SINGLE_SIGN_ON|
|type|ADD_TWO_FACTOR_AUTHENTICATION|
|type|ADD_USER|
|type|ADD_WEBHOOK_IN_WORKFLOW|
|type|ALLOWED_GEOLOCATIONS_DISABLED|
|type|ALLOWED_GEOLOCATIONS_ENABLED|
|type|ALLOWED_LOGIN_METHODS_DELETE|
|type|ALLOWED_LOGIN_METHODS_UPDATE|
|type|ATTACHMENT_LOGGING_DISABLED|
|type|ATTACHMENT_LOGGING_ENABLED|
|type|AUTOMATED_INACTIVE_USER_DEACTIVATION_DISABLED|
|type|AUTOMATED_INACTIVE_USER_DEACTIVATION_ENABLED|
|type|BOTS_WEBHOOK_POST|
|type|BOTS_WEBHOOK_UPDATE|
|type|BOTS_WEBHOOK_VIEWED|
|type|BULK_EMAIL_DOMAIN_CHANGE|
|type|CHANGE_AD_EVENT_CONSENT_SETTING|
|type|CHANGE_AD_EVENT_DATA_SHARING_SETTING|
|type|CHANGE_PASSWORD|
|type|CHANNEL_SENSITIVE_DATA_DISABLED|
|type|CHANNEL_SENSITIVE_DATA_ENABLED|
|type|CONTACT_DATA_EXPORT|
|type|CONTACT_OWNER_AUTO_ASSIGN_DISABLED|
|type|CONTACT_OWNER_AUTO_ASSIGN_ENABLED|
|type|DATA_ACCESS_REQUEST_SUBMITTED|
|type|DATA_BACKUP_CREATED|
|type|DATA_BACKUP_DOWNLOADED|
|type|DATA_BACKUP_SCHEDULE_CREATED|
|type|DATA_BACKUP_SCHEDULE_DELETED|
|type|DATA_BACKUP_SCHEDULE_UPDATED|
|type|DATA_RESTORE_COMPLETED|
|type|DATA_SHARING_CONNECTION_ADDED|
|type|DATA_SHARING_CONNECTION_REMOVED|
|type|DATASET_SYNC|
|type|DEACTIVATE_USER|
|type|DOMAIN_BASED_INVITE_CREATED|
|type|DOMAIN_BASED_INVITE_REMOVED|
|type|DOMAIN_BASED_INVITES_DISABLED|
|type|DOMAIN_BASED_INVITES_ENABLED|
|type|EMAIL_LOGGING_SYNC_SET_ALL|
|type|EMAIL_LOGGING_SYNC_SET_CONTACTS|
|type|EMAIL_LOGGING_SYNC_SET_REPLIES|
|type|EMAIL_TRACKING_DISABLED|
|type|EMAIL_TRACKING_ENABLED|
|type|EXPORT|
|type|EXPORT_APPROVAL|
|type|EXPORT_DOWNLOAD|
|type|EXPORT_USERS|
|type|FORM_SUBMISSIONS_EXPORT|
|type|GDPR_DELETE|
|type|GDPR_TOGGLE_DISABLED|
|type|GDPR_TOGGLE_ENABLED|
|type|HAPIKEY_CREATE|
|type|HAPIKEY_DEACTIVATE|
|type|HAPIKEY_VIEW|
|type|HUBSPOT_EMPLOYEE_ACCESS_DISABLED|
|type|HUBSPOT_EMPLOYEE_ACCESS_ENABLED|
|type|IMPERSONATE_USER|
|type|IMPORT|
|type|INSTALL_INTEGRATION|
|type|IP_RESTRICTIONS_DISABLED|
|type|IP_RESTRICTIONS_ENABLED|
|type|JOINED_PORTAL_VIA_DOMAIN_BASED_INVITE|
|type|LEGAL_BASIS_REQUIREMENT_DISABLED|
|type|LEGAL_BASIS_REQUIREMENT_ENABLED|
|type|MANUAL_PASSWORD_RESET_EMAIL_SEND|
|type|MANUAL_REGISTRATION_EMAIL_SEND|
|type|MARKETING_CONTACTS_APP_SETTINGS_DISABLED|
|type|MARKETING_CONTACTS_APP_SETTINGS_ENABLED|
|type|MERGE_REVERT|
|type|MODIFY_WEBHOOK_IN_WORKFLOW|
|type|MULTI_ACCOUNT_REPORTING_CONNECTION_ADDED|
|type|MULTI_ACCOUNT_REPORTING_CONNECTION_REMOVED|
|type|MULTI_ACCOUNT_WORKFLOWS_CONNECTION_ADDED|
|type|MULTI_ACCOUNT_WORKFLOWS_CONNECTION_REMOVED|
|type|NEVER_LOG_FOR_PORTAL_ADDITION|
|type|NEVER_LOG_FOR_PORTAL_DELETION|
|type|NEVER_LOG_FOR_USER_ADDITION|
|type|NEVER_LOG_FOR_USER_DELETION|
|type|PASSKEY_ADDED|
|type|PASSKEY_DELETED|
|type|PAYMENT_ACCOUNT_CREATION|
|type|PAYMENT_ACCOUNT_INFO_UPDATE|
|type|PAYMENT_BANK_ACCOUNT_CHANGE|
|type|PAYMENT_ONBOARDING_LINK_SEND|
|type|PERSONAL_ACCESS_KEY_CREATE|
|type|PERSONAL_ACCESS_KEY_DEACTIVATE|
|type|PERSONAL_ACCESS_KEY_ROTATE|
|type|PERSONAL_ACCESS_KEY_VIEW|
|type|PRIVATE_APP_ACCESS_TOKEN_CREATE|
|type|PRIVATE_APP_ACCESS_TOKEN_DEACTIVATE|
|type|PRIVATE_APP_ACCESS_TOKEN_ROTATE|
|type|PRIVATE_APP_ACCESS_TOKEN_VIEW|
|type|PRIVATE_APP_CLIENT_SECRET_VIEW|
|type|PRIVATE_APP_CLIENT_SECRET_WRITE|
|type|PRIVATE_APP_SCOPE_GROUPS_UPDATE|
|type|PRODUCTION_DEPLOYMENT|
|type|PROPERTY_HISTORY_REVISION|
|type|PUBLIC_APP_CLIENT_SECRET_VIEW|
|type|PUBLIC_APP_CLIENT_SECRET_WRITE|
|type|REACTIVATE_USER|
|type|REMOVE_ADMIN_PERMISSIONS|
|type|REMOVE_ADMIN_USER|
|type|REMOVE_SINGLE_SIGN_ON|
|type|REMOVE_TWO_FACTOR_AUTHENTICATION|
|type|REMOVE_USER|
|type|REQUIRE_SINGLE_SIGN_ON|
|type|RESTRICTED_LIST_ADDED_TO_CONTENT|
|type|SANDBOX_CREATION|
|type|SANDBOX_DELETION|
|type|SANDBOX_SYNC|
|type|SANDBOX_SYNC_TO_PRODUCTION|
|type|SECRET_ADDED_TO_SERVERLESS_FUNCTION|
|type|SENSITIVE_DATA_DISABLED|
|type|SENSITIVE_DATA_ENABLED|
|type|SEQUENCE_CLONED|
|type|SEQUENCE_CREATED|
|type|SEQUENCE_ENROLLMENT_INITIATED|
|type|SEQUENCE_ENROLLMENT_STATE_CHANGED|
|type|SEQUENCE_MODIFIED|
|type|SERVICE_KEY_AUTO_ROTATE|
|type|SERVICE_KEY_CREATE|
|type|SERVICE_KEY_DEACTIVATE|
|type|SERVICE_KEY_PERMISSIONS_UPDATE|
|type|SERVICE_KEY_REVEAL|
|type|SERVICE_KEY_ROTATE|
|type|SERVICE_KEY_ROTATION_SCHEDULE_REMOVED|
|type|SERVICE_KEY_ROTATION_SCHEDULE_SET|
|type|SERVICE_KEY_ROTATION_SCHEDULE_UPDATED|
|type|SMTP_TOKEN_CREATED|
|type|SMTP_TOKEN_DELETED|
|type|SMTP_TOKEN_PASSWORD_RESET|
|type|SMTP_TOKEN_RETRIEVED|
|type|TEAM_ADDED|
|type|TEAM_DELETED|
|type|TEAM_USER_ADDED|
|type|TEAM_USER_DELETED|
|type|TEMPLATE_DELETED|
|type|TEMPLATE_MODIFIED|
|type|TOUCHLESS_PURCHASE|
|type|TWO_FACTOR_PROTECTED_ENDPOINT_BLOCKED|
|type|TWO_FACTOR_PROTECTED_ENDPOINT_SUCCEEDED|
|type|UNIFIED_RESTORE_UNDO_EXECUTION|
|type|UNINSTALL_INTEGRATION|
|type|UNREQUIRE_SINGLE_SIGN_ON|
|type|WEBHOOK_SETTINGS_UPDATE|
|type|WEBHOOK_SUBSCRIPTION_CREATE|
|type|WEBHOOK_SUBSCRIPTION_UPDATE|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token used as a cursor to fetch the next set of results in a paged response.|
|link|string|false|none|A URL string that provides a direct link to the next page of results.|

<h2 id="tocS_PublicApiUserActionEvent">PublicApiUserActionEvent</h2>
<!-- backwards compatibility -->
<a id="schemapublicapiuseractionevent"></a>
<a id="schema_PublicApiUserActionEvent"></a>
<a id="tocSpublicapiuseractionevent"></a>
<a id="tocspublicapiuseractionevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actingUser|[ActingUser](#schemaactinguser)|true|none|none|
|action|string|true|none|The type of action taken.|
|category|string|true|none|The category of the activity.|
|id|string|true|none|The login activity's unique ID.|
|occurredAt|string(date-time)|true|none|The time that the action occurred at.|
|subCategory|string|false|none|The subcategory of the activity.|
|targetObjectId|string|false|none|The ID of the impacted object.|

<h2 id="tocS_PublicLoginAudit">PublicLoginAudit</h2>
<!-- backwards compatibility -->
<a id="schemapublicloginaudit"></a>
<a id="schema_PublicLoginAudit"></a>
<a id="tocSpublicloginaudit"></a>
<a id="tocspublicloginaudit"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The approximate country code of the login|
|email|string|false|none|Email address of the user associated with the login.|
|id|string|true|none|The login activity's unique ID.|
|ipAddress|string|false|none|IP address where the activity originated.|
|location|string|false|none|The approximate location where the login activity originated.|
|loginAt|string(date-time)|true|none|The time the login took place.|
|loginSucceeded|boolean|true|none|Whether the login was successful or not.|
|regionCode|string|false|none|The approximate region code of the login|
|userAgent|string|false|none|Information about the device used for logging in.|
|userId|integer(int32)|false|none|The user's unique ID.|
