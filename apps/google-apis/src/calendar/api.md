<h1 id="calendar-api">Calendar API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manipulates events and other calendar data.

Base URLs:

* <a href="https://www.googleapis.com/calendar/v3">https://www.googleapis.com/calendar/v3</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/google-apps/calendar/firstapp">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/calendar|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|
|https://www.googleapis.com/auth/calendar.events|View and edit events on all your calendars|
|https://www.googleapis.com/auth/calendar.events.readonly|View events on all your calendars|
|https://www.googleapis.com/auth/calendar.readonly|See and download any calendar you can access using your Google Calendar|
|https://www.googleapis.com/auth/calendar.settings.readonly|View your Calendar settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/calendar|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|
|https://www.googleapis.com/auth/calendar.events|View and edit events on all your calendars|
|https://www.googleapis.com/auth/calendar.events.readonly|View events on all your calendars|
|https://www.googleapis.com/auth/calendar.readonly|See and download any calendar you can access using your Google Calendar|
|https://www.googleapis.com/auth/calendar.settings.readonly|View your Calendar settings|

<h1 id="calendar-api-acl">acl</h1>

## calendar.acl.list

<a id="opIdcalendar.acl.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}/acl`

Returns the rules in the access control list for the calendar.

<h3 id="calendaracllist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
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
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#aclRule",
      "role": "string",
      "scope": {
        "type": "string",
        "value": "string"
      }
    }
  ],
  "kind": "calendar#acl",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

<h3 id="calendaracllist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Acl](#schemaacl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.acl.insert

<a id="opIdcalendar.acl.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "calendar#aclRule",
    "role": "string",
    "scope": {
      "type": "string",
      "value": "string"
    }
  }'
```

`POST /calendars/{calendarId}/acl`

Creates an access control rule.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Optional. The default is True.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the Access Control List (ACL) rule. See Sharing calendars.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:  <br>- "none" - Provides no access. <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» scope|body|object|false|The extent to which calendar access is granted by this ACL rule.|
|» » type|body|string|false|The type of the scope. Possible values are:  <br>- "default" - The public scope. This is the default value. <br>- "user" - Limits the scope to a single user. <br>- "group" - Limits the scope to a group. <br>- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.|
|» » value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.acl.watch

<a id="opIdcalendar.acl.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /calendars/{calendarId}/acl/watch`

Watch for changes to ACL resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendaraclwatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendaraclwatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.acl.get

<a id="opIdcalendar.acl.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}/acl/{ruleId}`

Returns an access control rule.

<h3 id="calendaraclget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
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
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.acl.update

<a id="opIdcalendar.acl.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "calendar#aclRule",
    "role": "string",
    "scope": {
      "type": "string",
      "value": "string"
    }
  }'
```

`PUT /calendars/{calendarId}/acl/{ruleId}`

Updates an access control rule.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the Access Control List (ACL) rule. See Sharing calendars.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:  <br>- "none" - Provides no access. <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» scope|body|object|false|The extent to which calendar access is granted by this ACL rule.|
|» » type|body|string|false|The type of the scope. Possible values are:  <br>- "default" - The public scope. This is the default value. <br>- "user" - Limits the scope to a single user. <br>- "group" - Limits the scope to a group. <br>- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.|
|» » value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.acl.delete

<a id="opIdcalendar.acl.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /calendars/{calendarId}/acl/{ruleId}`

Deletes an access control rule.

<h3 id="calendaracldelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
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

<h3 id="calendaracldelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.acl.patch

<a id="opIdcalendar.acl.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/acl/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "calendar#aclRule",
    "role": "string",
    "scope": {
      "type": "string",
      "value": "string"
    }
  }'
```

`PATCH /calendars/{calendarId}/acl/{ruleId}`

Updates an access control rule. This method supports patch semantics.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the Access Control List (ACL) rule. See Sharing calendars.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:  <br>- "none" - Provides no access. <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» scope|body|object|false|The extent to which calendar access is granted by this ACL rule.|
|» » type|body|string|false|The type of the scope. Possible values are:  <br>- "default" - The public scope. This is the default value. <br>- "user" - Limits the scope to a single user. <br>- "group" - Limits the scope to a group. <br>- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.|
|» » value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<h3 id="calendaraclpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-api-calendarlist">calendarList</h1>

## calendar.calendarList.list

<a id="opIdcalendar.calendarList.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/calendarList`

Returns the calendars on the user's calendar list.

<h3 id="calendarcalendarlistlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|minAccessRole|query|string|false|The minimum access role for the user in the returned entries. Optional. The default is no restriction.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted calendar list entries in the result. Optional. The default is False.|
|showHidden|query|boolean|false|Whether to show hidden entries. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.<br>To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
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
|minAccessRole|freeBusyReader|
|minAccessRole|owner|
|minAccessRole|reader|
|minAccessRole|writer|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "accessRole": "string",
      "backgroundColor": "string",
      "colorId": "string",
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "string"
        ]
      },
      "defaultReminders": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "deleted": false,
      "description": "string",
      "etag": "string",
      "foregroundColor": "string",
      "hidden": false,
      "id": "string",
      "kind": "calendar#calendarListEntry",
      "location": "string",
      "notificationSettings": {
        "notifications": [
          {
            "method": "string",
            "type": "string"
          }
        ]
      },
      "primary": false,
      "selected": false,
      "summary": "string",
      "summaryOverride": "string",
      "timeZone": "string"
    }
  ],
  "kind": "calendar#calendarList",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

<h3 id="calendarcalendarlistlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarList](#schemacalendarlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.calendarList.insert

<a id="opIdcalendar.calendarList.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessRole": "string",
    "backgroundColor": "string",
    "colorId": "string",
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "defaultReminders": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "deleted": false,
    "description": "string",
    "etag": "string",
    "foregroundColor": "string",
    "hidden": false,
    "id": "string",
    "kind": "calendar#calendarListEntry",
    "location": "string",
    "notificationSettings": {
      "notifications": [
        {
          "method": "string",
          "type": "string"
        }
      ]
    },
    "primary": false,
    "selected": false,
    "summary": "string",
    "summaryOverride": "string",
    "timeZone": "string"
  }'
```

`POST /users/me/calendarList`

Inserts an existing calendar into the user's calendar list.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|» » notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|» summary|body|string|false|Title of the calendar. Read-only.|
|» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendarList.watch

<a id="opIdcalendar.calendarList.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /users/me/calendarList/watch`

Watch for changes to CalendarList resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendarcalendarlistwatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|minAccessRole|query|string|false|The minimum access role for the user in the returned entries. Optional. The default is no restriction.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted calendar list entries in the result. Optional. The default is False.|
|showHidden|query|boolean|false|Whether to show hidden entries. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.<br>To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|minAccessRole|freeBusyReader|
|minAccessRole|owner|
|minAccessRole|reader|
|minAccessRole|writer|
|alt|json|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendarcalendarlistwatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.calendarList.get

<a id="opIdcalendar.calendarList.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/calendarList/{calendarId}`

Returns a calendar from the user's calendar list.

<h3 id="calendarcalendarlistget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
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
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.calendarList.update

<a id="opIdcalendar.calendarList.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessRole": "string",
    "backgroundColor": "string",
    "colorId": "string",
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "defaultReminders": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "deleted": false,
    "description": "string",
    "etag": "string",
    "foregroundColor": "string",
    "hidden": false,
    "id": "string",
    "kind": "calendar#calendarListEntry",
    "location": "string",
    "notificationSettings": {
      "notifications": [
        {
          "method": "string",
          "type": "string"
        }
      ]
    },
    "primary": false,
    "selected": false,
    "summary": "string",
    "summaryOverride": "string",
    "timeZone": "string"
  }'
```

`PUT /users/me/calendarList/{calendarId}`

Updates an existing calendar on the user's calendar list.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|» » notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|» summary|body|string|false|Title of the calendar. Read-only.|
|» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendarList.delete

<a id="opIdcalendar.calendarList.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/me/calendarList/{calendarId}`

Removes a calendar from the user's calendar list.

<h3 id="calendarcalendarlistdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
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

<h3 id="calendarcalendarlistdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendarList.patch

<a id="opIdcalendar.calendarList.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/calendarList/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessRole": "string",
    "backgroundColor": "string",
    "colorId": "string",
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "defaultReminders": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "deleted": false,
    "description": "string",
    "etag": "string",
    "foregroundColor": "string",
    "hidden": false,
    "id": "string",
    "kind": "calendar#calendarListEntry",
    "location": "string",
    "notificationSettings": {
      "notifications": [
        {
          "method": "string",
          "type": "string"
        }
      ]
    },
    "primary": false,
    "selected": false,
    "summary": "string",
    "summaryOverride": "string",
    "timeZone": "string"
  }'
```

`PATCH /users/me/calendarList/{calendarId}`

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|» » notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|» summary|body|string|false|Title of the calendar. Read-only.|
|» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarlistpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-api-calendars">calendars</h1>

## calendar.calendars.insert

<a id="opIdcalendar.calendars.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "description": "string",
    "etag": "string",
    "id": "string",
    "kind": "calendar#calendar",
    "location": "string",
    "summary": "string",
    "timeZone": "string"
  }'
```

`POST /calendars`

Creates a secondary calendar.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendars.get

<a id="opIdcalendar.calendars.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}`

Returns metadata for a calendar.

<h3 id="calendarcalendarsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
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
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.calendars.update

<a id="opIdcalendar.calendars.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "description": "string",
    "etag": "string",
    "id": "string",
    "kind": "calendar#calendar",
    "location": "string",
    "summary": "string",
    "timeZone": "string"
  }'
```

`PUT /calendars/{calendarId}`

Updates metadata for a calendar.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendars.delete

<a id="opIdcalendar.calendars.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /calendars/{calendarId}`

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

<h3 id="calendarcalendarsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
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

<h3 id="calendarcalendarsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendars.patch

<a id="opIdcalendar.calendars.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conferenceProperties": {
      "allowedConferenceSolutionTypes": [
        "string"
      ]
    },
    "description": "string",
    "etag": "string",
    "id": "string",
    "kind": "calendar#calendar",
    "location": "string",
    "summary": "string",
    "timeZone": "string"
  }'
```

`PATCH /calendars/{calendarId}`

Updates metadata for a calendar. This method supports patch semantics.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<h3 id="calendarcalendarspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## calendar.calendars.clear

<a id="opIdcalendar.calendars.clear"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/clear \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /calendars/{calendarId}/clear`

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

<h3 id="calendarcalendarsclear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
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

<h3 id="calendarcalendarsclear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-api-channels">channels</h1>

## calendar.channels.stop

<a id="opIdcalendar.channels.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/channels/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /channels/stop`

Stop watching resources through this channel

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendarchannelsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendarchannelsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

<h1 id="calendar-api-colors">colors</h1>

## calendar.colors.get

<a id="opIdcalendar.colors.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/colors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /colors`

Returns the color definitions for calendars and events.

<h3 id="calendarcolorsget-parameters">Parameters</h3>

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
  "calendar": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "event": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "kind": "calendar#colors",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="calendarcolorsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Colors](#schemacolors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

<h1 id="calendar-api-events">events</h1>

## calendar.events.list

<a id="opIdcalendar.events.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}/events`

Returns events on the specified calendar.

<h3 id="calendareventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|eventTypes|query|[string]|false|Event types to return. Optional. Possible values are: <br>- "default" <br>- "focusTime" <br>- "outOfOffice"This parameter can be repeated multiple times to return events of different types. Currently, this is the only allowed value for this field: <br>- ["default", "focusTime", "outOfOffice"] This value will be the default.<br><br>If you're enrolled in the Working Location developer preview program, in addition to the default value above you can also set the "workingLocation" event type: <br>- ["default", "focusTime", "outOfOffice", "workingLocation"] <br>- ["workingLocation"] Additional combinations of these 4 event types will be made available in later releases. Developer Preview.|
|iCalUID|query|string|false|Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|orderBy|query|string|false|The order of the events returned in the result. Optional. The default is an unspecified, stable order.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|privateExtendedProperty|query|[string]|false|Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|q|query|string|false|Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email. Optional.|
|sharedExtendedProperty|query|[string]|false|Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.|
|showHiddenInvitations|query|boolean|false|Whether to include hidden invitations in the result. Optional. The default is False.|
|singleEvents|query|boolean|false|Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.<br>There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.<br><br>These are: <br>- iCalUID <br>- orderBy <br>- privateExtendedProperty <br>- q <br>- sharedExtendedProperty <br>- timeMin <br>- timeMax <br>- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.|
|timeMin|query|string|false|Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|updatedMin|query|string|false|Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.|
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
|orderBy|startTime|
|orderBy|updated|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessRole": "string",
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "description": "string",
  "etag": "string",
  "items": [
    {
      "anyoneCanAddSelf": false,
      "attachments": [
        {
          "fileId": "string",
          "fileUrl": "string",
          "iconLink": "string",
          "mimeType": "string",
          "title": "string"
        }
      ],
      "attendees": [
        {
          "additionalGuests": 0,
          "comment": "string",
          "displayName": "string",
          "email": "string",
          "id": "string",
          "optional": false,
          "organizer": true,
          "resource": false,
          "responseStatus": "string",
          "self": false
        }
      ],
      "attendeesOmitted": false,
      "colorId": "string",
      "conferenceData": {
        "conferenceId": "string",
        "conferenceSolution": {
          "iconUri": "string",
          "key": {
            "type": "string"
          },
          "name": "string"
        },
        "createRequest": {
          "conferenceSolutionKey": {
            "type": "string"
          },
          "requestId": "string",
          "status": {
            "statusCode": "string"
          }
        },
        "entryPoints": [
          {
            "accessCode": "string",
            "entryPointFeatures": [
              "string"
            ],
            "entryPointType": "string",
            "label": "string",
            "meetingCode": "string",
            "passcode": "string",
            "password": "string",
            "pin": "string",
            "regionCode": "string",
            "uri": "string"
          }
        ],
        "notes": "string",
        "parameters": {
          "addOnParameters": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "signature": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "creator": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "description": "string",
      "end": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "endTimeUnspecified": false,
      "etag": "string",
      "eventType": "default",
      "extendedProperties": {
        "private": {
          "property1": "string",
          "property2": "string"
        },
        "shared": {
          "property1": "string",
          "property2": "string"
        }
      },
      "gadget": {
        "display": "string",
        "height": 0,
        "iconLink": "string",
        "link": "string",
        "preferences": {
          "property1": "string",
          "property2": "string"
        },
        "title": "string",
        "type": "string",
        "width": 0
      },
      "guestsCanInviteOthers": true,
      "guestsCanModify": false,
      "guestsCanSeeOtherGuests": true,
      "hangoutLink": "string",
      "htmlLink": "string",
      "iCalUID": "string",
      "id": "string",
      "kind": "calendar#event",
      "location": "string",
      "locked": false,
      "organizer": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "originalStartTime": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "privateCopy": false,
      "recurrence": [
        "string"
      ],
      "recurringEventId": "string",
      "reminders": {
        "overrides": [
          {
            "method": "string",
            "minutes": 0
          }
        ],
        "useDefault": true
      },
      "sequence": 0,
      "source": {
        "title": "string",
        "url": "string"
      },
      "start": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "status": "string",
      "summary": "string",
      "transparency": "opaque",
      "updated": "1970-01-01T00:00:00Z",
      "visibility": "default",
      "workingLocationProperties": {
        "customLocation": {
          "label": "string"
        },
        "homeOffice": null,
        "officeLocation": {
          "buildingId": "string",
          "deskId": "string",
          "floorId": "string",
          "floorSectionId": "string",
          "label": "string"
        }
      }
    }
  ],
  "kind": "calendar#events",
  "nextPageToken": "string",
  "nextSyncToken": "string",
  "summary": "string",
  "timeZone": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="calendareventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Events](#schemaevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.events.insert

<a id="opIdcalendar.events.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anyoneCanAddSelf": false,
    "attachments": [
      {
        "fileId": "string",
        "fileUrl": "string",
        "iconLink": "string",
        "mimeType": "string",
        "title": "string"
      }
    ],
    "attendees": [
      {
        "additionalGuests": 0,
        "comment": "string",
        "displayName": "string",
        "email": "string",
        "id": "string",
        "optional": false,
        "organizer": true,
        "resource": false,
        "responseStatus": "string",
        "self": false
      }
    ],
    "attendeesOmitted": false,
    "colorId": "string",
    "conferenceData": {
      "conferenceId": "string",
      "conferenceSolution": {
        "iconUri": "string",
        "key": {
          "type": "string"
        },
        "name": "string"
      },
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "string"
        },
        "requestId": "string",
        "status": {
          "statusCode": "string"
        }
      },
      "entryPoints": [
        {
          "accessCode": "string",
          "entryPointFeatures": [
            "string"
          ],
          "entryPointType": "string",
          "label": "string",
          "meetingCode": "string",
          "passcode": "string",
          "password": "string",
          "pin": "string",
          "regionCode": "string",
          "uri": "string"
        }
      ],
      "notes": "string",
      "parameters": {
        "addOnParameters": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "signature": "string"
    },
    "created": "1970-01-01T00:00:00Z",
    "creator": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "description": "string",
    "end": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "endTimeUnspecified": false,
    "etag": "string",
    "eventType": "default",
    "extendedProperties": {
      "private": {
        "property1": "string",
        "property2": "string"
      },
      "shared": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gadget": {
      "display": "string",
      "height": 0,
      "iconLink": "string",
      "link": "string",
      "preferences": {
        "property1": "string",
        "property2": "string"
      },
      "title": "string",
      "type": "string",
      "width": 0
    },
    "guestsCanInviteOthers": true,
    "guestsCanModify": false,
    "guestsCanSeeOtherGuests": true,
    "hangoutLink": "string",
    "htmlLink": "string",
    "iCalUID": "string",
    "id": "string",
    "kind": "calendar#event",
    "location": "string",
    "locked": false,
    "organizer": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "originalStartTime": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "privateCopy": false,
    "recurrence": [
      "string"
    ],
    "recurringEventId": "string",
    "reminders": {
      "overrides": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "useDefault": true
    },
    "sequence": 0,
    "source": {
      "title": "string",
      "url": "string"
    },
    "start": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "status": "string",
    "summary": "string",
    "transparency": "opaque",
    "updated": "1970-01-01T00:00:00Z",
    "visibility": "default",
    "workingLocationProperties": {
      "customLocation": {
        "label": "string"
      },
      "homeOffice": null,
      "officeLocation": {
        "buildingId": "string",
        "deskId": "string",
        "floorId": "string",
        "floorSectionId": "string",
        "label": "string"
      }
    }
  }'
```

`POST /calendars/{calendarId}/events`

Creates an event.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event.<br>In order to modify attachments the supportsAttachments request parameter should be set to true.<br>There can be at most 25 attachments per event,|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests.|
|» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|» creator|body|object|false|The creator of the event. Read-only.|
|» » displayName|body|string|false|The creator's name, if available.|
|» » email|body|string|false|The creator's email address, if available.|
|» » id|body|string|false|The creator's Profile ID, if available.|
|» » self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» description|body|string|false|Description of the event. Can contain HTML. Optional.|
|» end|body|[EventDateTime](#schemaeventdatetime)|false|The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.|
|» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|» etag|body|string|false|ETag of the resource.|
|» eventType|body|string|false|Specific type of the event. Read-only. Possible values are:  <br>- "default" - A regular event or not further specified. <br>- "outOfOffice" - An out-of-office event. <br>- "focusTime" - A focus-time event. <br>- "workingLocation" - A working location event. Developer Preview.|
|» extendedProperties|body|object|false|Extended properties of the event.|
|» » private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|» » » **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|» » shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|» » » **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|» gadget|body|object|false|A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.|
|» » display|body|string|false|The gadget's display mode. Deprecated. Possible values are:  <br>- "icon" - The gadget displays next to the event's title in the calendar view. <br>- "chip" - The gadget displays when the event is clicked.|
|» » height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.|
|» » iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS. Deprecated.|
|» » link|body|string|false|The gadget's URL. The URL scheme must be HTTPS. Deprecated.|
|» » preferences|body|object|false|Preferences.|
|» » » **additionalProperties**|body|string|false|The preference name and corresponding value.|
|» » title|body|string|false|The gadget's title. Deprecated.|
|» » type|body|string|false|The gadget's type. Deprecated.|
|» » width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.|
|» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|» hangoutLink|body|string|false|An absolute link to the Google Hangout associated with this event. Read-only.|
|» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.<br>Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.|
|» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  <br>- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 <br>- the length of the ID must be between 5 and 1024 characters <br>- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.<br>If you do not specify an ID, it will be automatically generated by the server.<br>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» kind|body|string|false|Type of the resource ("calendar#event").|
|» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|» » displayName|body|string|false|The organizer's name, if available.|
|» » email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|» » id|body|string|false|The organizer's Profile ID, if available.|
|» » self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.|
|» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|» » overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|» » useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|» » title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|» » url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|» start|body|[EventDateTime](#schemaeventdatetime)|false|The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.|
|» status|body|string|false|Status of the event. Optional. Possible values are:  <br>- "confirmed" - The event is confirmed. This is the default status. <br>- "tentative" - The event is tentatively confirmed. <br>- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.<br>A cancelled status represents two different states depending on the event type:  <br>- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.<br>Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.  <br>- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.<br>Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.<br>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|» summary|body|string|false|Title of the event.|
|» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:  <br>- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. <br>- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|» visibility|body|string|false|Visibility of the event. Optional. Possible values are:  <br>- "default" - Uses the default visibility for events on the calendar. This is the default value. <br>- "public" - The event is public and event details are visible to all readers of the calendar. <br>- "private" - The event is private and only event attendees may view event details. <br>- "confidential" - The event is private. This value is provided for compatibility reasons.|
|» workingLocationProperties|body|[EventWorkingLocationProperties](#schemaeventworkinglocationproperties)|false|Developer Preview: Working Location event data. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.import

<a id="opIdcalendar.events.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anyoneCanAddSelf": false,
    "attachments": [
      {
        "fileId": "string",
        "fileUrl": "string",
        "iconLink": "string",
        "mimeType": "string",
        "title": "string"
      }
    ],
    "attendees": [
      {
        "additionalGuests": 0,
        "comment": "string",
        "displayName": "string",
        "email": "string",
        "id": "string",
        "optional": false,
        "organizer": true,
        "resource": false,
        "responseStatus": "string",
        "self": false
      }
    ],
    "attendeesOmitted": false,
    "colorId": "string",
    "conferenceData": {
      "conferenceId": "string",
      "conferenceSolution": {
        "iconUri": "string",
        "key": {
          "type": "string"
        },
        "name": "string"
      },
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "string"
        },
        "requestId": "string",
        "status": {
          "statusCode": "string"
        }
      },
      "entryPoints": [
        {
          "accessCode": "string",
          "entryPointFeatures": [
            "string"
          ],
          "entryPointType": "string",
          "label": "string",
          "meetingCode": "string",
          "passcode": "string",
          "password": "string",
          "pin": "string",
          "regionCode": "string",
          "uri": "string"
        }
      ],
      "notes": "string",
      "parameters": {
        "addOnParameters": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "signature": "string"
    },
    "created": "1970-01-01T00:00:00Z",
    "creator": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "description": "string",
    "end": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "endTimeUnspecified": false,
    "etag": "string",
    "eventType": "default",
    "extendedProperties": {
      "private": {
        "property1": "string",
        "property2": "string"
      },
      "shared": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gadget": {
      "display": "string",
      "height": 0,
      "iconLink": "string",
      "link": "string",
      "preferences": {
        "property1": "string",
        "property2": "string"
      },
      "title": "string",
      "type": "string",
      "width": 0
    },
    "guestsCanInviteOthers": true,
    "guestsCanModify": false,
    "guestsCanSeeOtherGuests": true,
    "hangoutLink": "string",
    "htmlLink": "string",
    "iCalUID": "string",
    "id": "string",
    "kind": "calendar#event",
    "location": "string",
    "locked": false,
    "organizer": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "originalStartTime": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "privateCopy": false,
    "recurrence": [
      "string"
    ],
    "recurringEventId": "string",
    "reminders": {
      "overrides": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "useDefault": true
    },
    "sequence": 0,
    "source": {
      "title": "string",
      "url": "string"
    },
    "start": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "status": "string",
    "summary": "string",
    "transparency": "opaque",
    "updated": "1970-01-01T00:00:00Z",
    "visibility": "default",
    "workingLocationProperties": {
      "customLocation": {
        "label": "string"
      },
      "homeOffice": null,
      "officeLocation": {
        "buildingId": "string",
        "deskId": "string",
        "floorId": "string",
        "floorSectionId": "string",
        "label": "string"
      }
    }
  }'
```

`POST /calendars/{calendarId}/events/import`

Imports an event. This operation is used to add a private copy of an existing event to a calendar.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event.<br>In order to modify attachments the supportsAttachments request parameter should be set to true.<br>There can be at most 25 attachments per event,|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests.|
|» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|» creator|body|object|false|The creator of the event. Read-only.|
|» » displayName|body|string|false|The creator's name, if available.|
|» » email|body|string|false|The creator's email address, if available.|
|» » id|body|string|false|The creator's Profile ID, if available.|
|» » self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» description|body|string|false|Description of the event. Can contain HTML. Optional.|
|» end|body|[EventDateTime](#schemaeventdatetime)|false|The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.|
|» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|» etag|body|string|false|ETag of the resource.|
|» eventType|body|string|false|Specific type of the event. Read-only. Possible values are:  <br>- "default" - A regular event or not further specified. <br>- "outOfOffice" - An out-of-office event. <br>- "focusTime" - A focus-time event. <br>- "workingLocation" - A working location event. Developer Preview.|
|» extendedProperties|body|object|false|Extended properties of the event.|
|» » private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|» » » **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|» » shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|» » » **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|» gadget|body|object|false|A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.|
|» » display|body|string|false|The gadget's display mode. Deprecated. Possible values are:  <br>- "icon" - The gadget displays next to the event's title in the calendar view. <br>- "chip" - The gadget displays when the event is clicked.|
|» » height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.|
|» » iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS. Deprecated.|
|» » link|body|string|false|The gadget's URL. The URL scheme must be HTTPS. Deprecated.|
|» » preferences|body|object|false|Preferences.|
|» » » **additionalProperties**|body|string|false|The preference name and corresponding value.|
|» » title|body|string|false|The gadget's title. Deprecated.|
|» » type|body|string|false|The gadget's type. Deprecated.|
|» » width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.|
|» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|» hangoutLink|body|string|false|An absolute link to the Google Hangout associated with this event. Read-only.|
|» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.<br>Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.|
|» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  <br>- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 <br>- the length of the ID must be between 5 and 1024 characters <br>- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.<br>If you do not specify an ID, it will be automatically generated by the server.<br>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» kind|body|string|false|Type of the resource ("calendar#event").|
|» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|» » displayName|body|string|false|The organizer's name, if available.|
|» » email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|» » id|body|string|false|The organizer's Profile ID, if available.|
|» » self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.|
|» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|» » overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|» » useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|» » title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|» » url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|» start|body|[EventDateTime](#schemaeventdatetime)|false|The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.|
|» status|body|string|false|Status of the event. Optional. Possible values are:  <br>- "confirmed" - The event is confirmed. This is the default status. <br>- "tentative" - The event is tentatively confirmed. <br>- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.<br>A cancelled status represents two different states depending on the event type:  <br>- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.<br>Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.  <br>- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.<br>Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.<br>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|» summary|body|string|false|Title of the event.|
|» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:  <br>- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. <br>- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|» visibility|body|string|false|Visibility of the event. Optional. Possible values are:  <br>- "default" - Uses the default visibility for events on the calendar. This is the default value. <br>- "public" - The event is public and event details are visible to all readers of the calendar. <br>- "private" - The event is private and only event attendees may view event details. <br>- "confidential" - The event is private. This value is provided for compatibility reasons.|
|» workingLocationProperties|body|[EventWorkingLocationProperties](#schemaeventworkinglocationproperties)|false|Developer Preview: Working Location event data. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.quickAdd

<a id="opIdcalendar.events.quickAdd"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/calendars/string/events/quickAdd?text=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /calendars/{calendarId}/events/quickAdd`

Creates an event based on a simple text string.

<h3 id="calendareventsquickadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|text|query|string|true|The text describing the event to be created.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Guests who should receive notifications about the creation of the new event.|
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
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsquickadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.watch

<a id="opIdcalendar.events.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /calendars/{calendarId}/events/watch`

Watch for changes to Events resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendareventswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|eventTypes|query|[string]|false|Event types to return. Optional. Possible values are: <br>- "default" <br>- "focusTime" <br>- "outOfOffice"This parameter can be repeated multiple times to return events of different types. Currently, this is the only allowed value for this field: <br>- ["default", "focusTime", "outOfOffice"] This value will be the default.<br><br>If you're enrolled in the Working Location developer preview program, in addition to the default value above you can also set the "workingLocation" event type: <br>- ["default", "focusTime", "outOfOffice", "workingLocation"] <br>- ["workingLocation"] Additional combinations of these 4 event types will be made available in later releases. Developer Preview.|
|iCalUID|query|string|false|Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|orderBy|query|string|false|The order of the events returned in the result. Optional. The default is an unspecified, stable order.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|privateExtendedProperty|query|[string]|false|Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|q|query|string|false|Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email. Optional.|
|sharedExtendedProperty|query|[string]|false|Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.|
|showHiddenInvitations|query|boolean|false|Whether to include hidden invitations in the result. Optional. The default is False.|
|singleEvents|query|boolean|false|Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.<br>There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.<br><br>These are: <br>- iCalUID <br>- orderBy <br>- privateExtendedProperty <br>- q <br>- sharedExtendedProperty <br>- timeMin <br>- timeMax <br>- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.|
|timeMin|query|string|false|Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|updatedMin|query|string|false|Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|startTime|
|orderBy|updated|
|alt|json|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendareventswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.events.get

<a id="opIdcalendar.events.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}/events/{eventId}`

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

<h3 id="calendareventsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
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
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.events.update

<a id="opIdcalendar.events.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anyoneCanAddSelf": false,
    "attachments": [
      {
        "fileId": "string",
        "fileUrl": "string",
        "iconLink": "string",
        "mimeType": "string",
        "title": "string"
      }
    ],
    "attendees": [
      {
        "additionalGuests": 0,
        "comment": "string",
        "displayName": "string",
        "email": "string",
        "id": "string",
        "optional": false,
        "organizer": true,
        "resource": false,
        "responseStatus": "string",
        "self": false
      }
    ],
    "attendeesOmitted": false,
    "colorId": "string",
    "conferenceData": {
      "conferenceId": "string",
      "conferenceSolution": {
        "iconUri": "string",
        "key": {
          "type": "string"
        },
        "name": "string"
      },
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "string"
        },
        "requestId": "string",
        "status": {
          "statusCode": "string"
        }
      },
      "entryPoints": [
        {
          "accessCode": "string",
          "entryPointFeatures": [
            "string"
          ],
          "entryPointType": "string",
          "label": "string",
          "meetingCode": "string",
          "passcode": "string",
          "password": "string",
          "pin": "string",
          "regionCode": "string",
          "uri": "string"
        }
      ],
      "notes": "string",
      "parameters": {
        "addOnParameters": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "signature": "string"
    },
    "created": "1970-01-01T00:00:00Z",
    "creator": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "description": "string",
    "end": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "endTimeUnspecified": false,
    "etag": "string",
    "eventType": "default",
    "extendedProperties": {
      "private": {
        "property1": "string",
        "property2": "string"
      },
      "shared": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gadget": {
      "display": "string",
      "height": 0,
      "iconLink": "string",
      "link": "string",
      "preferences": {
        "property1": "string",
        "property2": "string"
      },
      "title": "string",
      "type": "string",
      "width": 0
    },
    "guestsCanInviteOthers": true,
    "guestsCanModify": false,
    "guestsCanSeeOtherGuests": true,
    "hangoutLink": "string",
    "htmlLink": "string",
    "iCalUID": "string",
    "id": "string",
    "kind": "calendar#event",
    "location": "string",
    "locked": false,
    "organizer": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "originalStartTime": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "privateCopy": false,
    "recurrence": [
      "string"
    ],
    "recurringEventId": "string",
    "reminders": {
      "overrides": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "useDefault": true
    },
    "sequence": 0,
    "source": {
      "title": "string",
      "url": "string"
    },
    "start": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "status": "string",
    "summary": "string",
    "transparency": "opaque",
    "updated": "1970-01-01T00:00:00Z",
    "visibility": "default",
    "workingLocationProperties": {
      "customLocation": {
        "label": "string"
      },
      "homeOffice": null,
      "officeLocation": {
        "buildingId": "string",
        "deskId": "string",
        "floorId": "string",
        "floorSectionId": "string",
        "label": "string"
      }
    }
  }'
```

`PUT /calendars/{calendarId}/events/{eventId}`

Updates an event.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Guests who should receive notifications about the event update (for example, title changes, etc.).|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event.<br>In order to modify attachments the supportsAttachments request parameter should be set to true.<br>There can be at most 25 attachments per event,|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests.|
|» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|» creator|body|object|false|The creator of the event. Read-only.|
|» » displayName|body|string|false|The creator's name, if available.|
|» » email|body|string|false|The creator's email address, if available.|
|» » id|body|string|false|The creator's Profile ID, if available.|
|» » self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» description|body|string|false|Description of the event. Can contain HTML. Optional.|
|» end|body|[EventDateTime](#schemaeventdatetime)|false|The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.|
|» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|» etag|body|string|false|ETag of the resource.|
|» eventType|body|string|false|Specific type of the event. Read-only. Possible values are:  <br>- "default" - A regular event or not further specified. <br>- "outOfOffice" - An out-of-office event. <br>- "focusTime" - A focus-time event. <br>- "workingLocation" - A working location event. Developer Preview.|
|» extendedProperties|body|object|false|Extended properties of the event.|
|» » private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|» » » **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|» » shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|» » » **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|» gadget|body|object|false|A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.|
|» » display|body|string|false|The gadget's display mode. Deprecated. Possible values are:  <br>- "icon" - The gadget displays next to the event's title in the calendar view. <br>- "chip" - The gadget displays when the event is clicked.|
|» » height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.|
|» » iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS. Deprecated.|
|» » link|body|string|false|The gadget's URL. The URL scheme must be HTTPS. Deprecated.|
|» » preferences|body|object|false|Preferences.|
|» » » **additionalProperties**|body|string|false|The preference name and corresponding value.|
|» » title|body|string|false|The gadget's title. Deprecated.|
|» » type|body|string|false|The gadget's type. Deprecated.|
|» » width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.|
|» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|» hangoutLink|body|string|false|An absolute link to the Google Hangout associated with this event. Read-only.|
|» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.<br>Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.|
|» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  <br>- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 <br>- the length of the ID must be between 5 and 1024 characters <br>- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.<br>If you do not specify an ID, it will be automatically generated by the server.<br>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» kind|body|string|false|Type of the resource ("calendar#event").|
|» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|» » displayName|body|string|false|The organizer's name, if available.|
|» » email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|» » id|body|string|false|The organizer's Profile ID, if available.|
|» » self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.|
|» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|» » overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|» » useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|» » title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|» » url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|» start|body|[EventDateTime](#schemaeventdatetime)|false|The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.|
|» status|body|string|false|Status of the event. Optional. Possible values are:  <br>- "confirmed" - The event is confirmed. This is the default status. <br>- "tentative" - The event is tentatively confirmed. <br>- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.<br>A cancelled status represents two different states depending on the event type:  <br>- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.<br>Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.  <br>- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.<br>Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.<br>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|» summary|body|string|false|Title of the event.|
|» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:  <br>- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. <br>- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|» visibility|body|string|false|Visibility of the event. Optional. Possible values are:  <br>- "default" - Uses the default visibility for events on the calendar. This is the default value. <br>- "public" - The event is public and event details are visible to all readers of the calendar. <br>- "private" - The event is private and only event attendees may view event details. <br>- "confidential" - The event is private. This value is provided for compatibility reasons.|
|» workingLocationProperties|body|[EventWorkingLocationProperties](#schemaeventworkinglocationproperties)|false|Developer Preview: Working Location event data. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.delete

<a id="opIdcalendar.events.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /calendars/{calendarId}/events/{eventId}`

Deletes an event.

<h3 id="calendareventsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Guests who should receive notifications about the deletion of the event.|
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
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

<h3 id="calendareventsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.patch

<a id="opIdcalendar.events.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anyoneCanAddSelf": false,
    "attachments": [
      {
        "fileId": "string",
        "fileUrl": "string",
        "iconLink": "string",
        "mimeType": "string",
        "title": "string"
      }
    ],
    "attendees": [
      {
        "additionalGuests": 0,
        "comment": "string",
        "displayName": "string",
        "email": "string",
        "id": "string",
        "optional": false,
        "organizer": true,
        "resource": false,
        "responseStatus": "string",
        "self": false
      }
    ],
    "attendeesOmitted": false,
    "colorId": "string",
    "conferenceData": {
      "conferenceId": "string",
      "conferenceSolution": {
        "iconUri": "string",
        "key": {
          "type": "string"
        },
        "name": "string"
      },
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "string"
        },
        "requestId": "string",
        "status": {
          "statusCode": "string"
        }
      },
      "entryPoints": [
        {
          "accessCode": "string",
          "entryPointFeatures": [
            "string"
          ],
          "entryPointType": "string",
          "label": "string",
          "meetingCode": "string",
          "passcode": "string",
          "password": "string",
          "pin": "string",
          "regionCode": "string",
          "uri": "string"
        }
      ],
      "notes": "string",
      "parameters": {
        "addOnParameters": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "signature": "string"
    },
    "created": "1970-01-01T00:00:00Z",
    "creator": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "description": "string",
    "end": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "endTimeUnspecified": false,
    "etag": "string",
    "eventType": "default",
    "extendedProperties": {
      "private": {
        "property1": "string",
        "property2": "string"
      },
      "shared": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gadget": {
      "display": "string",
      "height": 0,
      "iconLink": "string",
      "link": "string",
      "preferences": {
        "property1": "string",
        "property2": "string"
      },
      "title": "string",
      "type": "string",
      "width": 0
    },
    "guestsCanInviteOthers": true,
    "guestsCanModify": false,
    "guestsCanSeeOtherGuests": true,
    "hangoutLink": "string",
    "htmlLink": "string",
    "iCalUID": "string",
    "id": "string",
    "kind": "calendar#event",
    "location": "string",
    "locked": false,
    "organizer": {
      "displayName": "string",
      "email": "string",
      "id": "string",
      "self": false
    },
    "originalStartTime": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "privateCopy": false,
    "recurrence": [
      "string"
    ],
    "recurringEventId": "string",
    "reminders": {
      "overrides": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "useDefault": true
    },
    "sequence": 0,
    "source": {
      "title": "string",
      "url": "string"
    },
    "start": {
      "date": "1970-01-01",
      "dateTime": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "status": "string",
    "summary": "string",
    "transparency": "opaque",
    "updated": "1970-01-01T00:00:00Z",
    "visibility": "default",
    "workingLocationProperties": {
      "customLocation": {
        "label": "string"
      },
      "homeOffice": null,
      "officeLocation": {
        "buildingId": "string",
        "deskId": "string",
        "floorId": "string",
        "floorSectionId": "string",
        "label": "string"
      }
    }
  }'
```

`PATCH /calendars/{calendarId}/events/{eventId}`

Updates an event. This method supports patch semantics.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Guests who should receive notifications about the event update (for example, title changes, etc.).|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event.<br>In order to modify attachments the supportsAttachments request parameter should be set to true.<br>There can be at most 25 attachments per event,|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests.|
|» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|» creator|body|object|false|The creator of the event. Read-only.|
|» » displayName|body|string|false|The creator's name, if available.|
|» » email|body|string|false|The creator's email address, if available.|
|» » id|body|string|false|The creator's Profile ID, if available.|
|» » self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» description|body|string|false|Description of the event. Can contain HTML. Optional.|
|» end|body|[EventDateTime](#schemaeventdatetime)|false|The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.|
|» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|» etag|body|string|false|ETag of the resource.|
|» eventType|body|string|false|Specific type of the event. Read-only. Possible values are:  <br>- "default" - A regular event or not further specified. <br>- "outOfOffice" - An out-of-office event. <br>- "focusTime" - A focus-time event. <br>- "workingLocation" - A working location event. Developer Preview.|
|» extendedProperties|body|object|false|Extended properties of the event.|
|» » private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|» » » **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|» » shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|» » » **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|» gadget|body|object|false|A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.|
|» » display|body|string|false|The gadget's display mode. Deprecated. Possible values are:  <br>- "icon" - The gadget displays next to the event's title in the calendar view. <br>- "chip" - The gadget displays when the event is clicked.|
|» » height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.|
|» » iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS. Deprecated.|
|» » link|body|string|false|The gadget's URL. The URL scheme must be HTTPS. Deprecated.|
|» » preferences|body|object|false|Preferences.|
|» » » **additionalProperties**|body|string|false|The preference name and corresponding value.|
|» » title|body|string|false|The gadget's title. Deprecated.|
|» » type|body|string|false|The gadget's type. Deprecated.|
|» » width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.|
|» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|» hangoutLink|body|string|false|An absolute link to the Google Hangout associated with this event. Read-only.|
|» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.<br>Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.|
|» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  <br>- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 <br>- the length of the ID must be between 5 and 1024 characters <br>- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.<br>If you do not specify an ID, it will be automatically generated by the server.<br>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» kind|body|string|false|Type of the resource ("calendar#event").|
|» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|» » displayName|body|string|false|The organizer's name, if available.|
|» » email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|» » id|body|string|false|The organizer's Profile ID, if available.|
|» » self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.|
|» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|» » overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|» » useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|» » title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|» » url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|» start|body|[EventDateTime](#schemaeventdatetime)|false|The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.|
|» status|body|string|false|Status of the event. Optional. Possible values are:  <br>- "confirmed" - The event is confirmed. This is the default status. <br>- "tentative" - The event is tentatively confirmed. <br>- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.<br>A cancelled status represents two different states depending on the event type:  <br>- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.<br>Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.  <br>- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.<br>Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.<br>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|» summary|body|string|false|Title of the event.|
|» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:  <br>- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. <br>- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|» visibility|body|string|false|Visibility of the event. Optional. Possible values are:  <br>- "default" - Uses the default visibility for events on the calendar. This is the default value. <br>- "public" - The event is public and event details are visible to all readers of the calendar. <br>- "private" - The event is private and only event attendees may view event details. <br>- "confidential" - The event is private. This value is provided for compatibility reasons.|
|» workingLocationProperties|body|[EventWorkingLocationProperties](#schemaeventworkinglocationproperties)|false|Developer Preview: Working Location event data. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## calendar.events.instances

<a id="opIdcalendar.events.instances"></a>

> Code samples

```bash
curl https://www.googleapis.com/calendars/string/events/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/{calendarId}/events/{eventId}/instances`

Returns instances of the specified recurring event.

<h3 id="calendareventsinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Recurring event identifier.|
|alwaysIncludeEmail|query|boolean|false|Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|originalStart|query|string|false|The original start time of the instance in the result. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.|
|timeMin|query|string|false|Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
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
  "accessRole": "string",
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "description": "string",
  "etag": "string",
  "items": [
    {
      "anyoneCanAddSelf": false,
      "attachments": [
        {
          "fileId": "string",
          "fileUrl": "string",
          "iconLink": "string",
          "mimeType": "string",
          "title": "string"
        }
      ],
      "attendees": [
        {
          "additionalGuests": 0,
          "comment": "string",
          "displayName": "string",
          "email": "string",
          "id": "string",
          "optional": false,
          "organizer": true,
          "resource": false,
          "responseStatus": "string",
          "self": false
        }
      ],
      "attendeesOmitted": false,
      "colorId": "string",
      "conferenceData": {
        "conferenceId": "string",
        "conferenceSolution": {
          "iconUri": "string",
          "key": {
            "type": "string"
          },
          "name": "string"
        },
        "createRequest": {
          "conferenceSolutionKey": {
            "type": "string"
          },
          "requestId": "string",
          "status": {
            "statusCode": "string"
          }
        },
        "entryPoints": [
          {
            "accessCode": "string",
            "entryPointFeatures": [
              "string"
            ],
            "entryPointType": "string",
            "label": "string",
            "meetingCode": "string",
            "passcode": "string",
            "password": "string",
            "pin": "string",
            "regionCode": "string",
            "uri": "string"
          }
        ],
        "notes": "string",
        "parameters": {
          "addOnParameters": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "signature": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "creator": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "description": "string",
      "end": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "endTimeUnspecified": false,
      "etag": "string",
      "eventType": "default",
      "extendedProperties": {
        "private": {
          "property1": "string",
          "property2": "string"
        },
        "shared": {
          "property1": "string",
          "property2": "string"
        }
      },
      "gadget": {
        "display": "string",
        "height": 0,
        "iconLink": "string",
        "link": "string",
        "preferences": {
          "property1": "string",
          "property2": "string"
        },
        "title": "string",
        "type": "string",
        "width": 0
      },
      "guestsCanInviteOthers": true,
      "guestsCanModify": false,
      "guestsCanSeeOtherGuests": true,
      "hangoutLink": "string",
      "htmlLink": "string",
      "iCalUID": "string",
      "id": "string",
      "kind": "calendar#event",
      "location": "string",
      "locked": false,
      "organizer": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "originalStartTime": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "privateCopy": false,
      "recurrence": [
        "string"
      ],
      "recurringEventId": "string",
      "reminders": {
        "overrides": [
          {
            "method": "string",
            "minutes": 0
          }
        ],
        "useDefault": true
      },
      "sequence": 0,
      "source": {
        "title": "string",
        "url": "string"
      },
      "start": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "status": "string",
      "summary": "string",
      "transparency": "opaque",
      "updated": "1970-01-01T00:00:00Z",
      "visibility": "default",
      "workingLocationProperties": {
        "customLocation": {
          "label": "string"
        },
        "homeOffice": null,
        "officeLocation": {
          "buildingId": "string",
          "deskId": "string",
          "floorId": "string",
          "floorSectionId": "string",
          "label": "string"
        }
      }
    }
  ],
  "kind": "calendar#events",
  "nextPageToken": "string",
  "nextSyncToken": "string",
  "summary": "string",
  "timeZone": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="calendareventsinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Events](#schemaevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## calendar.events.move

<a id="opIdcalendar.events.move"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/calendars/string/events/string/move?destination=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /calendars/{calendarId}/events/{eventId}/move`

Moves an event to another calendar, i.e. changes an event's organizer.

<h3 id="calendareventsmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier of the source calendar where the event currently is on.|
|eventId|path|string|true|Event identifier.|
|destination|query|string|true|Calendar identifier of the target calendar where the event is to be moved to.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.<br><br>Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.|
|sendUpdates|query|string|false|Guests who should receive notifications about the change of the event's organizer.|
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
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

<h3 id="calendareventsmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

<h1 id="calendar-api-freebusy">freebusy</h1>

## calendar.freebusy.query

<a id="opIdcalendar.freebusy.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/freeBusy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "calendarExpansionMax": 0,
    "groupExpansionMax": 0,
    "items": [
      {
        "id": "string"
      }
    ],
    "timeMax": "1970-01-01T00:00:00Z",
    "timeMin": "1970-01-01T00:00:00Z",
    "timeZone": "UTC"
  }'
```

`POST /freeBusy`

Returns free/busy information for a set of calendars.

> Body parameter

```json
{
  "calendarExpansionMax": 0,
  "groupExpansionMax": 0,
  "items": [
    {
      "id": "string"
    }
  ],
  "timeMax": "1970-01-01T00:00:00Z",
  "timeMin": "1970-01-01T00:00:00Z",
  "timeZone": "UTC"
}
```

<h3 id="calendarfreebusyquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[FreeBusyRequest](#schemafreebusyrequest)|false|none|
|» calendarExpansionMax|body|integer(int32)|false|Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.|
|» groupExpansionMax|body|integer(int32)|false|Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.|
|» items|body|[[FreeBusyRequestItem](#schemafreebusyrequestitem)]|false|List of calendars and/or groups to query.|
|» timeMax|body|string(date-time)|false|The end of the interval for the query formatted as per RFC3339.|
|» timeMin|body|string(date-time)|false|The start of the interval for the query formatted as per RFC3339.|
|» timeZone|body|string|false|Time zone used in the response. Optional. The default is UTC.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "calendars": {
    "property1": {
      "busy": [
        {
          "end": "1970-01-01T00:00:00Z",
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "busy": [
        {
          "end": "1970-01-01T00:00:00Z",
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "groups": {
    "property1": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "kind": "calendar#freeBusy",
  "timeMax": "1970-01-01T00:00:00Z",
  "timeMin": "1970-01-01T00:00:00Z"
}
```

<h3 id="calendarfreebusyquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FreeBusyResponse](#schemafreebusyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

<h1 id="calendar-api-settings">settings</h1>

## calendar.settings.list

<a id="opIdcalendar.settings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/settings`

Returns all user settings for the authenticated user.

<h3 id="calendarsettingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
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
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#setting",
      "value": "string"
    }
  ],
  "kind": "calendar#settings",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

<h3 id="calendarsettingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

## calendar.settings.watch

<a id="opIdcalendar.settings.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/settings/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /users/me/settings/watch`

Watch for changes to Settings resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendarsettingswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.<br>If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.<br>Learn more about incremental synchronization.<br>Optional. The default is to return all entries.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="calendarsettingswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

## calendar.settings.get

<a id="opIdcalendar.settings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/users/me/settings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/settings/{setting}`

Returns a single user setting.

<h3 id="calendarsettingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|setting|path|string|true|The id of the user setting.|
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
  "etag": "string",
  "id": "string",
  "kind": "calendar#setting",
  "value": "string"
}
```

<h3 id="calendarsettingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Setting](#schemasetting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

# Schemas

<h2 id="tocS_Acl">Acl</h2>
<!-- backwards compatibility -->
<a id="schemaacl"></a>
<a id="schema_Acl"></a>
<a id="tocSacl"></a>
<a id="tocsacl"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#aclRule",
      "role": "string",
      "scope": {
        "type": "string",
        "value": "string"
      }
    }
  ],
  "kind": "calendar#acl",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the collection.|
|items|[[AclRule](#schemaaclrule)]|false|none|List of rules on the access control list.|
|kind|string|false|none|Type of the collection ("calendar#acl").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocS_AclRule">AclRule</h2>
<!-- backwards compatibility -->
<a id="schemaaclrule"></a>
<a id="schema_AclRule"></a>
<a id="tocSaclrule"></a>
<a id="tocsaclrule"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Identifier of the Access Control List (ACL) rule. See Sharing calendars.|
|kind|string|false|none|Type of the resource ("calendar#aclRule").|
|role|string|false|none|The role assigned to the scope. Possible values are:  <br>- "none" - Provides no access. <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|scope|object|false|none|The extent to which calendar access is granted by this ACL rule.|

<h2 id="tocS_Calendar">Calendar</h2>
<!-- backwards compatibility -->
<a id="schemacalendar"></a>
<a id="schema_Calendar"></a>
<a id="tocScalendar"></a>
<a id="tocscalendar"></a>

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceProperties|[ConferenceProperties](#schemaconferenceproperties)|false|none|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|description|string|false|none|Description of the calendar. Optional.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|kind|string|false|none|Type of the resource ("calendar#calendar").|
|location|string|false|none|Geographic location of the calendar as free-form text. Optional.|
|summary|string|false|none|Title of the calendar.|
|timeZone|string|false|none|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|

<h2 id="tocS_CalendarList">CalendarList</h2>
<!-- backwards compatibility -->
<a id="schemacalendarlist"></a>
<a id="schema_CalendarList"></a>
<a id="tocScalendarlist"></a>
<a id="tocscalendarlist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "accessRole": "string",
      "backgroundColor": "string",
      "colorId": "string",
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "string"
        ]
      },
      "defaultReminders": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "deleted": false,
      "description": "string",
      "etag": "string",
      "foregroundColor": "string",
      "hidden": false,
      "id": "string",
      "kind": "calendar#calendarListEntry",
      "location": "string",
      "notificationSettings": {
        "notifications": [
          {
            "method": "string",
            "type": "string"
          }
        ]
      },
      "primary": false,
      "selected": false,
      "summary": "string",
      "summaryOverride": "string",
      "timeZone": "string"
    }
  ],
  "kind": "calendar#calendarList",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the collection.|
|items|[[CalendarListEntry](#schemacalendarlistentry)]|false|none|Calendars that are present on the user's calendar list.|
|kind|string|false|none|Type of the collection ("calendar#calendarList").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocS_CalendarListEntry">CalendarListEntry</h2>
<!-- backwards compatibility -->
<a id="schemacalendarlistentry"></a>
<a id="schema_CalendarListEntry"></a>
<a id="tocScalendarlistentry"></a>
<a id="tocscalendarlistentry"></a>

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRole|string|false|none|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  <br>- "freeBusyReader" - Provides read access to free/busy information. <br>- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|backgroundColor|string|false|none|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|colorId|string|false|none|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|conferenceProperties|[ConferenceProperties](#schemaconferenceproperties)|false|none|Conferencing properties for this calendar, for example what types of conferences are allowed.|
|defaultReminders|[[EventReminder](#schemaeventreminder)]|false|none|The default reminders that the authenticated user has for this calendar.|
|deleted|boolean|false|none|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|description|string|false|none|Description of the calendar. Optional. Read-only.|
|etag|string|false|none|ETag of the resource.|
|foregroundColor|string|false|none|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|hidden|boolean|false|none|Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.|
|id|string|false|none|Identifier of the calendar.|
|kind|string|false|none|Type of the resource ("calendar#calendarListEntry").|
|location|string|false|none|Geographic location of the calendar as free-form text. Optional. Read-only.|
|notificationSettings|object|false|none|The notifications that the authenticated user is receiving for this calendar.|
|primary|boolean|false|none|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|selected|boolean|false|none|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|summary|string|false|none|Title of the calendar. Read-only.|
|summaryOverride|string|false|none|The summary that the authenticated user has set for this calendar. Optional.|
|timeZone|string|false|none|The time zone of the calendar. Optional. Read-only.|

<h2 id="tocS_CalendarNotification">CalendarNotification</h2>
<!-- backwards compatibility -->
<a id="schemacalendarnotification"></a>
<a id="schema_CalendarNotification"></a>
<a id="tocScalendarnotification"></a>
<a id="tocscalendarnotification"></a>

```json
{
  "method": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used to deliver the notification. The possible value is:  <br>- "email" - Notifications are sent via email.  <br>Required when adding a notification.|
|type|string|false|none|The type of notification. Possible values are:  <br>- "eventCreation" - Notification sent when a new event is put on the calendar. <br>- "eventChange" - Notification sent when an event is changed. <br>- "eventCancellation" - Notification sent when an event is cancelled. <br>- "eventResponse" - Notification sent when an attendee responds to the event invitation. <br>- "agenda" - An agenda with the events of the day (sent out in the morning).  <br>Required when adding a notification.|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address where notifications are delivered for this channel.|
|expiration|string(int64)|false|none|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|id|string|false|none|A UUID or similar unique string that identifies this channel.|
|kind|string|false|none|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|params|object|false|none|Additional parameters controlling delivery channel behavior. Optional.|
|payload|boolean|false|none|A Boolean value to indicate whether payload is wanted. Optional.|
|resourceId|string|false|none|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|resourceUri|string|false|none|A version-specific identifier for the watched resource.|
|token|string|false|none|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|type|string|false|none|The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages.|

<h2 id="tocS_ColorDefinition">ColorDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacolordefinition"></a>
<a id="schema_ColorDefinition"></a>
<a id="tocScolordefinition"></a>
<a id="tocscolordefinition"></a>

```json
{
  "background": "string",
  "foreground": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background|string|false|none|The background color associated with this color definition.|
|foreground|string|false|none|The foreground color that can be used to write on top of a background with 'background' color.|

<h2 id="tocS_Colors">Colors</h2>
<!-- backwards compatibility -->
<a id="schemacolors"></a>
<a id="schema_Colors"></a>
<a id="tocScolors"></a>
<a id="tocscolors"></a>

```json
{
  "calendar": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "event": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "kind": "calendar#colors",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendar|object|false|none|A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only.|
|event|object|false|none|A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only.|
|kind|string|false|none|Type of the resource ("calendar#colors").|
|updated|string(date-time)|false|none|Last modification time of the color palette (as a RFC3339 timestamp). Read-only.|

<h2 id="tocS_ConferenceData">ConferenceData</h2>
<!-- backwards compatibility -->
<a id="schemaconferencedata"></a>
<a id="schema_ConferenceData"></a>
<a id="tocSconferencedata"></a>
<a id="tocsconferencedata"></a>

```json
{
  "conferenceId": "string",
  "conferenceSolution": {
    "iconUri": "string",
    "key": {
      "type": "string"
    },
    "name": "string"
  },
  "createRequest": {
    "conferenceSolutionKey": {
      "type": "string"
    },
    "requestId": "string",
    "status": {
      "statusCode": "string"
    }
  },
  "entryPoints": [
    {
      "accessCode": "string",
      "entryPointFeatures": [
        "string"
      ],
      "entryPointType": "string",
      "label": "string",
      "meetingCode": "string",
      "passcode": "string",
      "password": "string",
      "pin": "string",
      "regionCode": "string",
      "uri": "string"
    }
  ],
  "notes": "string",
  "parameters": {
    "addOnParameters": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "signature": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceId|string|false|none|The ID of the conference.<br>Can be used by developers to keep track of conferences, should not be displayed to users.<br>The ID value is formed differently for each conference solution type:  <br>- eventHangout: ID is not set. (This conference type is deprecated.)<br>- eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.)<br>- hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc.<br>- addOn: ID is defined by the third-party provider.  Optional.|
|conferenceSolution|[ConferenceSolution](#schemaconferencesolution)|false|none|The conference solution, such as Google Meet.<br>Unset for a conference with a failed create request.<br>Either conferenceSolution and at least one entryPoint, or createRequest is required.|
|createRequest|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|A request to generate a new conference and attach it to the event. The data is generated asynchronously. To see whether the data is present check the status field.<br>Either conferenceSolution and at least one entryPoint, or createRequest is required.|
|entryPoints|[[EntryPoint](#schemaentrypoint)]|false|none|Information about individual conference entry points, such as URLs or phone numbers.<br>All of them must belong to the same conference.<br>Either conferenceSolution and at least one entryPoint, or createRequest is required.|
|notes|string|false|none|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|parameters|[ConferenceParameters](#schemaconferenceparameters)|false|none|Additional properties related to a conference. An example would be a solution-specific setting for enabling video streaming.|
|signature|string|false|none|The signature of the conference data.<br>Generated on server side.<br>Unset for a conference with a failed create request.<br>Optional for a conference with a pending create request.|

<h2 id="tocS_ConferenceParameters">ConferenceParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceparameters"></a>
<a id="schema_ConferenceParameters"></a>
<a id="tocSconferenceparameters"></a>
<a id="tocsconferenceparameters"></a>

```json
{
  "addOnParameters": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnParameters|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|Additional add-on specific data.|

<h2 id="tocS_ConferenceParametersAddOnParameters">ConferenceParametersAddOnParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceparametersaddonparameters"></a>
<a id="schema_ConferenceParametersAddOnParameters"></a>
<a id="tocSconferenceparametersaddonparameters"></a>
<a id="tocsconferenceparametersaddonparameters"></a>

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|none|

<h2 id="tocS_ConferenceProperties">ConferenceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceproperties"></a>
<a id="schema_ConferenceProperties"></a>
<a id="tocSconferenceproperties"></a>
<a id="tocsconferenceproperties"></a>

```json
{
  "allowedConferenceSolutionTypes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedConferenceSolutionTypes|[string]|false|none|The types of conference solutions that are supported for this calendar.<br>The possible values are:  <br>- "eventHangout" <br>- "eventNamedHangout" <br>- "hangoutsMeet"  Optional.|

<h2 id="tocS_ConferenceRequestStatus">ConferenceRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconferencerequeststatus"></a>
<a id="schema_ConferenceRequestStatus"></a>
<a id="tocSconferencerequeststatus"></a>
<a id="tocsconferencerequeststatus"></a>

```json
{
  "statusCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|string|false|none|The current status of the conference create request. Read-only.<br>The possible values are:  <br>- "pending": the conference create request is still being processed.<br>- "success": the conference create request succeeded, the entry points are populated.<br>- "failure": the conference create request failed, there are no entry points.|

<h2 id="tocS_ConferenceSolution">ConferenceSolution</h2>
<!-- backwards compatibility -->
<a id="schemaconferencesolution"></a>
<a id="schema_ConferenceSolution"></a>
<a id="tocSconferencesolution"></a>
<a id="tocsconferencesolution"></a>

```json
{
  "iconUri": "string",
  "key": {
    "type": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconUri|string|false|none|The user-visible icon for this solution.|
|key|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|The key which can uniquely identify the conference solution for this event.|
|name|string|false|none|The user-visible name of this solution. Not localized.|

<h2 id="tocS_ConferenceSolutionKey">ConferenceSolutionKey</h2>
<!-- backwards compatibility -->
<a id="schemaconferencesolutionkey"></a>
<a id="schema_ConferenceSolutionKey"></a>
<a id="tocSconferencesolutionkey"></a>
<a id="tocsconferencesolutionkey"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The conference solution type.<br>If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.<br>The possible values are:  <br>- "eventHangout" for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created)<br>- "eventNamedHangout" for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created)<br>- "hangoutsMeet" for Google Meet (http://meet.google.com)<br>- "addOn" for 3P conference providers|

<h2 id="tocS_CreateConferenceRequest">CreateConferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconferencerequest"></a>
<a id="schema_CreateConferenceRequest"></a>
<a id="tocScreateconferencerequest"></a>
<a id="tocscreateconferencerequest"></a>

```json
{
  "conferenceSolutionKey": {
    "type": "string"
  },
  "requestId": "string",
  "status": {
    "statusCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceSolutionKey|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|The conference solution, such as Hangouts or Google Meet.|
|requestId|string|false|none|The client-generated unique ID for this request.<br>Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.|
|status|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|The status of the conference create request.|

<h2 id="tocS_EntryPoint">EntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemaentrypoint"></a>
<a id="schema_EntryPoint"></a>
<a id="tocSentrypoint"></a>
<a id="tocsentrypoint"></a>

```json
{
  "accessCode": "string",
  "entryPointFeatures": [
    "string"
  ],
  "entryPointType": "string",
  "label": "string",
  "meetingCode": "string",
  "passcode": "string",
  "password": "string",
  "pin": "string",
  "regionCode": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessCode|string|false|none|The access code to access the conference. The maximum length is 128 characters.<br>When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.<br>Optional.|
|entryPointFeatures|[string]|false|none|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|entryPointType|string|false|none|The type of the conference entry point.<br>Possible values are:  <br>- "video" - joining a conference over HTTP. A conference can have zero or one video entry point.<br>- "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.<br>- "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.<br>- "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.|
|label|string|false|none|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.<br>Examples:  <br>- for video: meet.google.com/aaa-bbbb-ccc<br>- for phone: +1 123 268 2601<br>- for sip: 12345678@altostrat.com<br>- for more: should not be filled  <br>Optional.|
|meetingCode|string|false|none|The meeting code to access the conference. The maximum length is 128 characters.<br>When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.<br>Optional.|
|passcode|string|false|none|The passcode to access the conference. The maximum length is 128 characters.<br>When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.|
|password|string|false|none|The password to access the conference. The maximum length is 128 characters.<br>When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.<br>Optional.|
|pin|string|false|none|The PIN to access the conference. The maximum length is 128 characters.<br>When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.<br>Optional.|
|regionCode|string|false|none|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.<br>Calendar backend will populate this field only for EntryPointType.PHONE.|
|uri|string|false|none|The URI of the entry point. The maximum length is 1300 characters.<br>Format:  <br>- for video, http: or https: schema is required.<br>- for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).<br>- for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.<br>- for more, http: or https: schema is required.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "domain": "string",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain, or broad category, of the error.|
|reason|string|false|none|Specific reason for the error. Some of the possible values are:  <br>- "groupTooBig" - The group of users requested is too large for a single query. <br>- "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query. <br>- "notFound" - The requested resource was not found. <br>- "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "eventType": "default",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "1970-01-01",
    "dateTime": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "1970-01-01T00:00:00Z",
  "visibility": "default",
  "workingLocationProperties": {
    "customLocation": {
      "label": "string"
    },
    "homeOffice": null,
    "officeLocation": {
      "buildingId": "string",
      "deskId": "string",
      "floorId": "string",
      "floorSectionId": "string",
      "label": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anyoneCanAddSelf|boolean|false|none|Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.|
|attachments|[[EventAttachment](#schemaeventattachment)]|false|none|File attachments for the event.<br>In order to modify attachments the supportsAttachments request parameter should be set to true.<br>There can be at most 25 attachments per event,|
|attendees|[[EventAttendee](#schemaeventattendee)]|false|none|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.|
|attendeesOmitted|boolean|false|none|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|colorId|string|false|none|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|conferenceData|[ConferenceData](#schemaconferencedata)|false|none|The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests.|
|created|string(date-time)|false|none|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|creator|object|false|none|The creator of the event. Read-only.|
|description|string|false|none|Description of the event. Can contain HTML. Optional.|
|end|[EventDateTime](#schemaeventdatetime)|false|none|The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.|
|endTimeUnspecified|boolean|false|none|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|etag|string|false|none|ETag of the resource.|
|eventType|string|false|none|Specific type of the event. Read-only. Possible values are:  <br>- "default" - A regular event or not further specified. <br>- "outOfOffice" - An out-of-office event. <br>- "focusTime" - A focus-time event. <br>- "workingLocation" - A working location event. Developer Preview.|
|extendedProperties|object|false|none|Extended properties of the event.|
|gadget|object|false|none|A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.|
|guestsCanInviteOthers|boolean|false|none|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|guestsCanModify|boolean|false|none|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|guestsCanSeeOtherGuests|boolean|false|none|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|hangoutLink|string|false|none|An absolute link to the Google Hangout associated with this event. Read-only.|
|htmlLink|string|false|none|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|iCalUID|string|false|none|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.<br>Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.|
|id|string|false|none|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  <br>- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 <br>- the length of the ID must be between 5 and 1024 characters <br>- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.<br>If you do not specify an ID, it will be automatically generated by the server.<br>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|kind|string|false|none|Type of the resource ("calendar#event").|
|location|string|false|none|Geographic location of the event as free-form text. Optional.|
|locked|boolean|false|none|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|organizer|object|false|none|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|originalStartTime|[EventDateTime](#schemaeventdatetime)|false|none|For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.|
|privateCopy|boolean|false|none|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|recurrence|[string]|false|none|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|recurringEventId|string|false|none|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|reminders|object|false|none|Information about the event's reminders for the authenticated user.|
|sequence|integer(int32)|false|none|Sequence number as per iCalendar.|
|source|object|false|none|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|start|[EventDateTime](#schemaeventdatetime)|false|none|The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.|
|status|string|false|none|Status of the event. Optional. Possible values are:  <br>- "confirmed" - The event is confirmed. This is the default status. <br>- "tentative" - The event is tentatively confirmed. <br>- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.<br>A cancelled status represents two different states depending on the event type:  <br>- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.<br>Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.  <br>- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.<br>Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.<br>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|summary|string|false|none|Title of the event.|
|transparency|string|false|none|Whether the event blocks time on the calendar. Optional. Possible values are:  <br>- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. <br>- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|updated|string(date-time)|false|none|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|visibility|string|false|none|Visibility of the event. Optional. Possible values are:  <br>- "default" - Uses the default visibility for events on the calendar. This is the default value. <br>- "public" - The event is public and event details are visible to all readers of the calendar. <br>- "private" - The event is private and only event attendees may view event details. <br>- "confidential" - The event is private. This value is provided for compatibility reasons.|
|workingLocationProperties|[EventWorkingLocationProperties](#schemaeventworkinglocationproperties)|false|none|Developer Preview: Working Location event data. Read-only.|

<h2 id="tocS_EventAttachment">EventAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaeventattachment"></a>
<a id="schema_EventAttachment"></a>
<a id="tocSeventattachment"></a>
<a id="tocseventattachment"></a>

```json
{
  "fileId": "string",
  "fileUrl": "string",
  "iconLink": "string",
  "mimeType": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|ID of the attached file. Read-only.<br>For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.|
|fileUrl|string|false|none|URL link to the attachment.<br>For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.<br>Required when adding an attachment.|
|iconLink|string|false|none|URL link to the attachment's icon. This field can only be modified for custom third-party attachments.|
|mimeType|string|false|none|Internet media type (MIME type) of the attachment.|
|title|string|false|none|Attachment title.|

<h2 id="tocS_EventAttendee">EventAttendee</h2>
<!-- backwards compatibility -->
<a id="schemaeventattendee"></a>
<a id="schema_EventAttendee"></a>
<a id="tocSeventattendee"></a>
<a id="tocseventattendee"></a>

```json
{
  "additionalGuests": 0,
  "comment": "string",
  "displayName": "string",
  "email": "string",
  "id": "string",
  "optional": false,
  "organizer": true,
  "resource": false,
  "responseStatus": "string",
  "self": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalGuests|integer(int32)|false|none|Number of additional guests. Optional. The default is 0.|
|comment|string|false|none|The attendee's response comment. Optional.|
|displayName|string|false|none|The attendee's name, if available. Optional.|
|email|string|false|none|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.<br>Required when adding an attendee.|
|id|string|false|none|The attendee's Profile ID, if available.|
|optional|boolean|false|none|Whether this is an optional attendee. Optional. The default is False.|
|organizer|boolean|false|none|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|resource|boolean|false|none|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|responseStatus|string|false|none|The attendee's response status. Possible values are:  <br>- "needsAction" - The attendee has not responded to the invitation (recommended for new events). <br>- "declined" - The attendee has declined the invitation. <br>- "tentative" - The attendee has tentatively accepted the invitation. <br>- "accepted" - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the "Add invitations to my calendar" setting set to "When I respond to invitation in email" won't see an event on their calendar unless they choose to change their invitation response in the event invitation email.|
|self|boolean|false|none|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|

<h2 id="tocS_EventDateTime">EventDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatetime"></a>
<a id="schema_EventDateTime"></a>
<a id="tocSeventdatetime"></a>
<a id="tocseventdatetime"></a>

```json
{
  "date": "1970-01-01",
  "dateTime": "1970-01-01T00:00:00Z",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|dateTime|string(date-time)|false|none|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|timeZone|string|false|none|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|

<h2 id="tocS_EventReminder">EventReminder</h2>
<!-- backwards compatibility -->
<a id="schemaeventreminder"></a>
<a id="schema_EventReminder"></a>
<a id="tocSeventreminder"></a>
<a id="tocseventreminder"></a>

```json
{
  "method": "string",
  "minutes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used by this reminder. Possible values are:  <br>- "email" - Reminders are sent via email. <br>- "popup" - Reminders are sent via a UI popup.  <br>Required when adding a reminder.|
|minutes|integer(int32)|false|none|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).<br>Required when adding a reminder.|

<h2 id="tocS_EventWorkingLocationProperties">EventWorkingLocationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaeventworkinglocationproperties"></a>
<a id="schema_EventWorkingLocationProperties"></a>
<a id="tocSeventworkinglocationproperties"></a>
<a id="tocseventworkinglocationproperties"></a>

```json
{
  "customLocation": {
    "label": "string"
  },
  "homeOffice": null,
  "officeLocation": {
    "buildingId": "string",
    "deskId": "string",
    "floorId": "string",
    "floorSectionId": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customLocation|object|false|none|If present, specifies that the user is working from a custom location.|
|homeOffice|object|false|none|If present, specifies that the user is working at home.|
|officeLocation|object|false|none|If present, specifies that the user is working from an office.|

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
{
  "accessRole": "string",
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "description": "string",
  "etag": "string",
  "items": [
    {
      "anyoneCanAddSelf": false,
      "attachments": [
        {
          "fileId": "string",
          "fileUrl": "string",
          "iconLink": "string",
          "mimeType": "string",
          "title": "string"
        }
      ],
      "attendees": [
        {
          "additionalGuests": 0,
          "comment": "string",
          "displayName": "string",
          "email": "string",
          "id": "string",
          "optional": false,
          "organizer": true,
          "resource": false,
          "responseStatus": "string",
          "self": false
        }
      ],
      "attendeesOmitted": false,
      "colorId": "string",
      "conferenceData": {
        "conferenceId": "string",
        "conferenceSolution": {
          "iconUri": "string",
          "key": {
            "type": "string"
          },
          "name": "string"
        },
        "createRequest": {
          "conferenceSolutionKey": {
            "type": "string"
          },
          "requestId": "string",
          "status": {
            "statusCode": "string"
          }
        },
        "entryPoints": [
          {
            "accessCode": "string",
            "entryPointFeatures": [
              "string"
            ],
            "entryPointType": "string",
            "label": "string",
            "meetingCode": "string",
            "passcode": "string",
            "password": "string",
            "pin": "string",
            "regionCode": "string",
            "uri": "string"
          }
        ],
        "notes": "string",
        "parameters": {
          "addOnParameters": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "signature": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "creator": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "description": "string",
      "end": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "endTimeUnspecified": false,
      "etag": "string",
      "eventType": "default",
      "extendedProperties": {
        "private": {
          "property1": "string",
          "property2": "string"
        },
        "shared": {
          "property1": "string",
          "property2": "string"
        }
      },
      "gadget": {
        "display": "string",
        "height": 0,
        "iconLink": "string",
        "link": "string",
        "preferences": {
          "property1": "string",
          "property2": "string"
        },
        "title": "string",
        "type": "string",
        "width": 0
      },
      "guestsCanInviteOthers": true,
      "guestsCanModify": false,
      "guestsCanSeeOtherGuests": true,
      "hangoutLink": "string",
      "htmlLink": "string",
      "iCalUID": "string",
      "id": "string",
      "kind": "calendar#event",
      "location": "string",
      "locked": false,
      "organizer": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "originalStartTime": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "privateCopy": false,
      "recurrence": [
        "string"
      ],
      "recurringEventId": "string",
      "reminders": {
        "overrides": [
          {
            "method": "string",
            "minutes": 0
          }
        ],
        "useDefault": true
      },
      "sequence": 0,
      "source": {
        "title": "string",
        "url": "string"
      },
      "start": {
        "date": "1970-01-01",
        "dateTime": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "status": "string",
      "summary": "string",
      "transparency": "opaque",
      "updated": "1970-01-01T00:00:00Z",
      "visibility": "default",
      "workingLocationProperties": {
        "customLocation": {
          "label": "string"
        },
        "homeOffice": null,
        "officeLocation": {
          "buildingId": "string",
          "deskId": "string",
          "floorId": "string",
          "floorSectionId": "string",
          "label": "string"
        }
      }
    }
  ],
  "kind": "calendar#events",
  "nextPageToken": "string",
  "nextSyncToken": "string",
  "summary": "string",
  "timeZone": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRole|string|false|none|The user's access role for this calendar. Read-only. Possible values are:  <br>- "none" - The user has no access. <br>- "freeBusyReader" - The user has read access to free/busy information. <br>- "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. <br>- "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. <br>- "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|defaultReminders|[[EventReminder](#schemaeventreminder)]|false|none|The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).|
|description|string|false|none|Description of the calendar. Read-only.|
|etag|string|false|none|ETag of the collection.|
|items|[[Event](#schemaevent)]|false|none|List of events on the calendar.|
|kind|string|false|none|Type of the collection ("calendar#events").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|
|summary|string|false|none|Title of the calendar. Read-only.|
|timeZone|string|false|none|The time zone of the calendar. Read-only.|
|updated|string(date-time)|false|none|Last modification time of the calendar (as a RFC3339 timestamp). Read-only.|

<h2 id="tocS_FreeBusyCalendar">FreeBusyCalendar</h2>
<!-- backwards compatibility -->
<a id="schemafreebusycalendar"></a>
<a id="schema_FreeBusyCalendar"></a>
<a id="tocSfreebusycalendar"></a>
<a id="tocsfreebusycalendar"></a>

```json
{
  "busy": [
    {
      "end": "1970-01-01T00:00:00Z",
      "start": "1970-01-01T00:00:00Z"
    }
  ],
  "errors": [
    {
      "domain": "string",
      "reason": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|busy|[[TimePeriod](#schematimeperiod)]|false|none|List of time ranges during which this calendar should be regarded as busy.|
|errors|[[Error](#schemaerror)]|false|none|Optional error(s) (if computation for the calendar failed).|

<h2 id="tocS_FreeBusyGroup">FreeBusyGroup</h2>
<!-- backwards compatibility -->
<a id="schemafreebusygroup"></a>
<a id="schema_FreeBusyGroup"></a>
<a id="tocSfreebusygroup"></a>
<a id="tocsfreebusygroup"></a>

```json
{
  "calendars": [
    "string"
  ],
  "errors": [
    {
      "domain": "string",
      "reason": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendars|[string]|false|none|List of calendars' identifiers within a group.|
|errors|[[Error](#schemaerror)]|false|none|Optional error(s) (if computation for the group failed).|

<h2 id="tocS_FreeBusyRequest">FreeBusyRequest</h2>
<!-- backwards compatibility -->
<a id="schemafreebusyrequest"></a>
<a id="schema_FreeBusyRequest"></a>
<a id="tocSfreebusyrequest"></a>
<a id="tocsfreebusyrequest"></a>

```json
{
  "calendarExpansionMax": 0,
  "groupExpansionMax": 0,
  "items": [
    {
      "id": "string"
    }
  ],
  "timeMax": "1970-01-01T00:00:00Z",
  "timeMin": "1970-01-01T00:00:00Z",
  "timeZone": "UTC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarExpansionMax|integer(int32)|false|none|Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.|
|groupExpansionMax|integer(int32)|false|none|Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.|
|items|[[FreeBusyRequestItem](#schemafreebusyrequestitem)]|false|none|List of calendars and/or groups to query.|
|timeMax|string(date-time)|false|none|The end of the interval for the query formatted as per RFC3339.|
|timeMin|string(date-time)|false|none|The start of the interval for the query formatted as per RFC3339.|
|timeZone|string|false|none|Time zone used in the response. Optional. The default is UTC.|

<h2 id="tocS_FreeBusyRequestItem">FreeBusyRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemafreebusyrequestitem"></a>
<a id="schema_FreeBusyRequestItem"></a>
<a id="tocSfreebusyrequestitem"></a>
<a id="tocsfreebusyrequestitem"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier of a calendar or a group.|

<h2 id="tocS_FreeBusyResponse">FreeBusyResponse</h2>
<!-- backwards compatibility -->
<a id="schemafreebusyresponse"></a>
<a id="schema_FreeBusyResponse"></a>
<a id="tocSfreebusyresponse"></a>
<a id="tocsfreebusyresponse"></a>

```json
{
  "calendars": {
    "property1": {
      "busy": [
        {
          "end": "1970-01-01T00:00:00Z",
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "busy": [
        {
          "end": "1970-01-01T00:00:00Z",
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "groups": {
    "property1": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "kind": "calendar#freeBusy",
  "timeMax": "1970-01-01T00:00:00Z",
  "timeMin": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendars|object|false|none|List of free/busy information for calendars.|
|groups|object|false|none|Expansion of groups.|
|kind|string|false|none|Type of the resource ("calendar#freeBusy").|
|timeMax|string(date-time)|false|none|The end of the interval.|
|timeMin|string(date-time)|false|none|The start of the interval.|

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#setting",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The id of the user setting.|
|kind|string|false|none|Type of the resource ("calendar#setting").|
|value|string|false|none|Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#setting",
      "value": "string"
    }
  ],
  "kind": "calendar#settings",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of the collection.|
|items|[[Setting](#schemasetting)]|false|none|List of user settings.|
|kind|string|false|none|Type of the collection ("calendar#settings").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocS_TimePeriod">TimePeriod</h2>
<!-- backwards compatibility -->
<a id="schematimeperiod"></a>
<a id="schema_TimePeriod"></a>
<a id="tocStimeperiod"></a>
<a id="tocstimeperiod"></a>

```json
{
  "end": "1970-01-01T00:00:00Z",
  "start": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(date-time)|false|none|The (exclusive) end of the time period.|
|start|string(date-time)|false|none|The (inclusive) start of the time period.|
