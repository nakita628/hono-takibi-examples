<h1 id="google-mirror">Google Mirror v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Interacts with Glass users via the timeline.

Base URLs:

* <a href="https://www.googleapis.com/mirror/v1">https://www.googleapis.com/mirror/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/glass">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/glass.location|View your location|
|https://www.googleapis.com/auth/glass.timeline|View and manage your Glass timeline|

- oAuth2 authentication. Oauth 2.0 accessCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/glass.location|View your location|
|https://www.googleapis.com/auth/glass.timeline|View and manage your Glass timeline|

<h1 id="google-mirror-accounts">accounts</h1>

## mirror.accounts.insert

<a id="opIdmirror.accounts.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "authTokens": [
      {
        "authToken": "string",
        "type": "string"
      }
    ],
    "features": [
      "string"
    ],
    "password": "string",
    "userData": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }'
```

`POST /accounts/{userToken}/{accountType}/{accountName}`

Inserts a new account for a user

> Body parameter

```json
{
  "authTokens": [
    {
      "authToken": "string",
      "type": "string"
    }
  ],
  "features": [
    "string"
  ],
  "password": "string",
  "userData": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="mirroraccountsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userToken|path|string|true|The ID for the user.|
|accountType|path|string|true|Account type to be passed to Android Account Manager.|
|accountName|path|string|true|The name of the account to be passed to the Android Account Manager.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Account](#schemaaccount)|false|none|
|» authTokens|body|[[AuthToken](#schemaauthtoken)]|false|none|
|» features|body|[string]|false|none|
|» password|body|string|false|none|
|» userData|body|[[UserData](#schemauserdata)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirroraccountsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-mirror-contacts">contacts</h1>

## mirror.contacts.list

<a id="opIdmirror.contacts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts`

Retrieves a list of contacts for the authenticated user.

<h3 id="mirrorcontactslist-parameters">Parameters</h3>

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

<h3 id="mirrorcontactslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContactsListResponse](#schemacontactslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.contacts.insert

<a id="opIdmirror.contacts.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  }'
```

`POST /contacts`

Inserts a new contact.

> Body parameter

```json
{
  "acceptCommands": [
    {
      "type": "string"
    }
  ],
  "acceptTypes": [
    "string"
  ],
  "displayName": "string",
  "id": "string",
  "imageUrls": [
    "string"
  ],
  "kind": "mirror#contact",
  "phoneNumber": "string",
  "priority": 0,
  "sharingFeatures": [
    "string"
  ],
  "source": "string",
  "speakableName": "string",
  "type": "string"
}
```

<h3 id="mirrorcontactsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Contact](#schemacontact)|false|none|
|» acceptCommands|body|[[Command](#schemacommand)]|false|A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.|
|» acceptTypes|body|[string]|false|A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.|
|» displayName|body|string|false|The name to display for this contact.|
|» id|body|string|false|An ID for this contact. This is generated by the application and is treated as an opaque token.|
|» imageUrls|body|[string]|false|Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.|
|» kind|body|string|false|The type of resource. This is always mirror#contact.|
|» phoneNumber|body|string|false|Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.|
|» priority|body|integer(uint32)|false|Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.|
|» sharingFeatures|body|[string]|false|A list of sharing features that a contact can handle. Allowed values are:  <br>- ADD_CAPTION|
|» source|body|string|false|The ID of the application that created this contact. This is populated by the API|
|» speakableName|body|string|false|Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.|
|» type|body|string|false|The type for this contact. This is used for sorting in UIs. Allowed values are:  <br>- INDIVIDUAL - Represents a single person. This is the default. <br>- GROUP - Represents more than a single person.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrorcontactsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Contact](#schemacontact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.contacts.get

<a id="opIdmirror.contacts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}`

Gets a single contact by ID.

<h3 id="mirrorcontactsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the contact.|
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

<h3 id="mirrorcontactsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Contact](#schemacontact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.contacts.update

<a id="opIdmirror.contacts.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  }'
```

`PUT /contacts/{id}`

Updates a contact in place.

> Body parameter

```json
{
  "acceptCommands": [
    {
      "type": "string"
    }
  ],
  "acceptTypes": [
    "string"
  ],
  "displayName": "string",
  "id": "string",
  "imageUrls": [
    "string"
  ],
  "kind": "mirror#contact",
  "phoneNumber": "string",
  "priority": 0,
  "sharingFeatures": [
    "string"
  ],
  "source": "string",
  "speakableName": "string",
  "type": "string"
}
```

<h3 id="mirrorcontactsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the contact.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Contact](#schemacontact)|false|none|
|» acceptCommands|body|[[Command](#schemacommand)]|false|A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.|
|» acceptTypes|body|[string]|false|A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.|
|» displayName|body|string|false|The name to display for this contact.|
|» id|body|string|false|An ID for this contact. This is generated by the application and is treated as an opaque token.|
|» imageUrls|body|[string]|false|Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.|
|» kind|body|string|false|The type of resource. This is always mirror#contact.|
|» phoneNumber|body|string|false|Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.|
|» priority|body|integer(uint32)|false|Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.|
|» sharingFeatures|body|[string]|false|A list of sharing features that a contact can handle. Allowed values are:  <br>- ADD_CAPTION|
|» source|body|string|false|The ID of the application that created this contact. This is populated by the API|
|» speakableName|body|string|false|Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.|
|» type|body|string|false|The type for this contact. This is used for sorting in UIs. Allowed values are:  <br>- INDIVIDUAL - Represents a single person. This is the default. <br>- GROUP - Represents more than a single person.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrorcontactsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Contact](#schemacontact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.contacts.delete

<a id="opIdmirror.contacts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /contacts/{id}`

Deletes a contact.

<h3 id="mirrorcontactsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the contact.|
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

<h3 id="mirrorcontactsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.contacts.patch

<a id="opIdmirror.contacts.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/contacts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  }'
```

`PATCH /contacts/{id}`

Updates a contact in place. This method supports patch semantics.

> Body parameter

```json
{
  "acceptCommands": [
    {
      "type": "string"
    }
  ],
  "acceptTypes": [
    "string"
  ],
  "displayName": "string",
  "id": "string",
  "imageUrls": [
    "string"
  ],
  "kind": "mirror#contact",
  "phoneNumber": "string",
  "priority": 0,
  "sharingFeatures": [
    "string"
  ],
  "source": "string",
  "speakableName": "string",
  "type": "string"
}
```

<h3 id="mirrorcontactspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the contact.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Contact](#schemacontact)|false|none|
|» acceptCommands|body|[[Command](#schemacommand)]|false|A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.|
|» acceptTypes|body|[string]|false|A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.|
|» displayName|body|string|false|The name to display for this contact.|
|» id|body|string|false|An ID for this contact. This is generated by the application and is treated as an opaque token.|
|» imageUrls|body|[string]|false|Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.|
|» kind|body|string|false|The type of resource. This is always mirror#contact.|
|» phoneNumber|body|string|false|Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.|
|» priority|body|integer(uint32)|false|Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.|
|» sharingFeatures|body|[string]|false|A list of sharing features that a contact can handle. Allowed values are:  <br>- ADD_CAPTION|
|» source|body|string|false|The ID of the application that created this contact. This is populated by the API|
|» speakableName|body|string|false|Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.|
|» type|body|string|false|The type for this contact. This is used for sorting in UIs. Allowed values are:  <br>- INDIVIDUAL - Represents a single person. This is the default. <br>- GROUP - Represents more than a single person.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrorcontactspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Contact](#schemacontact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

<h1 id="google-mirror-locations">locations</h1>

## mirror.locations.list

<a id="opIdmirror.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/locations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /locations`

Retrieves a list of locations for the user.

<h3 id="mirrorlocationslist-parameters">Parameters</h3>

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

<h3 id="mirrorlocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LocationsListResponse](#schemalocationslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.locations.get

<a id="opIdmirror.locations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/locations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /locations/{id}`

Gets a single location by ID.

<h3 id="mirrorlocationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the location or latest for the last known location.|
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

<h3 id="mirrorlocationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

<h1 id="google-mirror-settings">settings</h1>

## mirror.settings.get

<a id="opIdmirror.settings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/settings/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/{id}`

Gets a single setting by ID.

<h3 id="mirrorsettingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the setting. The following IDs are valid: <br>- locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content. <br>- timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.|
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

<h3 id="mirrorsettingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Setting](#schemasetting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

<h1 id="google-mirror-subscriptions">subscriptions</h1>

## mirror.subscriptions.list

<a id="opIdmirror.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/subscriptions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions`

Retrieves a list of subscriptions for the authenticated user and service.

<h3 id="mirrorsubscriptionslist-parameters">Parameters</h3>

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

<h3 id="mirrorsubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionsListResponse](#schemasubscriptionslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.subscriptions.insert

<a id="opIdmirror.subscriptions.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callbackUrl": "string",
    "collection": "string",
    "id": "string",
    "kind": "mirror#subscription",
    "notification": {
      "collection": "string",
      "itemId": "string",
      "operation": "string",
      "userActions": [
        {
          "payload": "string",
          "type": "string"
        }
      ],
      "userToken": "string",
      "verifyToken": "string"
    },
    "operation": [
      "string"
    ],
    "updated": "1970-01-01T00:00:00Z",
    "userToken": "string",
    "verifyToken": "string"
  }'
```

`POST /subscriptions`

Creates a new subscription.

> Body parameter

```json
{
  "callbackUrl": "string",
  "collection": "string",
  "id": "string",
  "kind": "mirror#subscription",
  "notification": {
    "collection": "string",
    "itemId": "string",
    "operation": "string",
    "userActions": [
      {
        "payload": "string",
        "type": "string"
      }
    ],
    "userToken": "string",
    "verifyToken": "string"
  },
  "operation": [
    "string"
  ],
  "updated": "1970-01-01T00:00:00Z",
  "userToken": "string",
  "verifyToken": "string"
}
```

<h3 id="mirrorsubscriptionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Subscription](#schemasubscription)|false|none|
|» callbackUrl|body|string|false|The URL where notifications should be delivered (must start with https://).|
|» collection|body|string|false|The collection to subscribe to. Allowed values are:  <br>- timeline - Changes in the timeline including insertion, deletion, and updates. <br>- locations - Location updates. <br>- settings - Settings updates.|
|» id|body|string|false|The ID of the subscription.|
|» kind|body|string|false|The type of resource. This is always mirror#subscription.|
|» notification|body|[Notification](#schemanotification)|false|Container object for notifications. This is not populated in the Subscription resource.|
|» operation|body|[string]|false|A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:  <br>- UPDATE - The item has been updated. <br>- INSERT - A new item has been inserted. <br>- DELETE - The item has been deleted. <br>- MENU_ACTION - A custom menu item has been triggered by the user.|
|» updated|body|string(date-time)|false|The time at which this subscription was last modified, formatted according to RFC 3339.|
|» userToken|body|string|false|An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.|
|» verifyToken|body|string|false|A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrorsubscriptionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.subscriptions.update

<a id="opIdmirror.subscriptions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/subscriptions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callbackUrl": "string",
    "collection": "string",
    "id": "string",
    "kind": "mirror#subscription",
    "notification": {
      "collection": "string",
      "itemId": "string",
      "operation": "string",
      "userActions": [
        {
          "payload": "string",
          "type": "string"
        }
      ],
      "userToken": "string",
      "verifyToken": "string"
    },
    "operation": [
      "string"
    ],
    "updated": "1970-01-01T00:00:00Z",
    "userToken": "string",
    "verifyToken": "string"
  }'
```

`PUT /subscriptions/{id}`

Updates an existing subscription in place.

> Body parameter

```json
{
  "callbackUrl": "string",
  "collection": "string",
  "id": "string",
  "kind": "mirror#subscription",
  "notification": {
    "collection": "string",
    "itemId": "string",
    "operation": "string",
    "userActions": [
      {
        "payload": "string",
        "type": "string"
      }
    ],
    "userToken": "string",
    "verifyToken": "string"
  },
  "operation": [
    "string"
  ],
  "updated": "1970-01-01T00:00:00Z",
  "userToken": "string",
  "verifyToken": "string"
}
```

<h3 id="mirrorsubscriptionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Subscription](#schemasubscription)|false|none|
|» callbackUrl|body|string|false|The URL where notifications should be delivered (must start with https://).|
|» collection|body|string|false|The collection to subscribe to. Allowed values are:  <br>- timeline - Changes in the timeline including insertion, deletion, and updates. <br>- locations - Location updates. <br>- settings - Settings updates.|
|» id|body|string|false|The ID of the subscription.|
|» kind|body|string|false|The type of resource. This is always mirror#subscription.|
|» notification|body|[Notification](#schemanotification)|false|Container object for notifications. This is not populated in the Subscription resource.|
|» operation|body|[string]|false|A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:  <br>- UPDATE - The item has been updated. <br>- INSERT - A new item has been inserted. <br>- DELETE - The item has been deleted. <br>- MENU_ACTION - A custom menu item has been triggered by the user.|
|» updated|body|string(date-time)|false|The time at which this subscription was last modified, formatted according to RFC 3339.|
|» userToken|body|string|false|An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.|
|» verifyToken|body|string|false|A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrorsubscriptionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.subscriptions.delete

<a id="opIdmirror.subscriptions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/subscriptions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /subscriptions/{id}`

Deletes a subscription.

<h3 id="mirrorsubscriptionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
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

<h3 id="mirrorsubscriptionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

<h1 id="google-mirror-timeline">timeline</h1>

## mirror.timeline.list

<a id="opIdmirror.timeline.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /timeline`

Retrieves a list of timeline items for the authenticated user.

<h3 id="mirrortimelinelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundleId|query|string|false|If provided, only items with the given bundleId will be returned.|
|includeDeleted|query|boolean|false|If true, tombstone records for deleted items will be returned.|
|maxResults|query|integer|false|The maximum number of items to include in the response, used for paging.|
|orderBy|query|string|false|Controls the order in which timeline items are returned.|
|pageToken|query|string|false|Token for the page of results to return.|
|pinnedOnly|query|boolean|false|If true, only pinned items will be returned.|
|sourceItemId|query|string|false|If provided, only items with the given sourceItemId will be returned.|
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
|orderBy|displayTime|
|orderBy|writeTime|
|alt|json|

<h3 id="mirrortimelinelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TimelineListResponse](#schematimelinelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.insert

<a id="opIdmirror.timeline.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline \
  -X POST \
  -H 'Content-Type: audio/1d-interleaved-parityfec' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"attachments":[{"contentType":"string","contentUrl":"string","id":"string","isProcessingContent":true}],"bundleId":"string","canonicalUrl":"string","created":"1970-01-01T00:00:00Z","creator":{"acceptCommands":[{"type":"string"}],"acceptTypes":["string"],"displayName":"string","id":"string","imageUrls":["string"],"kind":"mirror#contact","phoneNumber":"string","priority":0,"sharingFeatures":["string"],"source":"string","speakableName":"string","type":"string"},"displayTime":"1970-01-01T00:00:00Z","etag":"string","html":"string","id":"string","inReplyTo":"string","isBundleCover":true,"isDeleted":true,"isPinned":true,"kind":"mirror#timelineItem","location":{"accuracy":0,"address":"string","displayName":"string","id":"string","kind":"mirror#location","latitude":0,"longitude":0,"timestamp":"1970-01-01T00:00:00Z"},"menuItems":[{"action":"string","contextual_command":"string","id":"string","payload":"string","removeWhenSelected":true,"values":[{"displayName":"string","iconUrl":"string","state":"string"}]}],"notification":{"deliveryTime":"1970-01-01T00:00:00Z","level":"string"},"pinScore":0,"recipients":[{"acceptCommands":[{"type":"string"}],"acceptTypes":["string"],"displayName":"string","id":"string","imageUrls":["string"],"kind":"mirror#contact","phoneNumber":"string","priority":0,"sharingFeatures":["string"],"source":"string","speakableName":"string","type":"string"}],"selfLink":"string","sourceItemId":"string","speakableText":"string","speakableType":"string","text":"string","title":"string","updated":"1970-01-01T00:00:00Z"}'
```

`POST /timeline`

Inserts a new item into the timeline.

> Body parameter

```json
{
  "attachments": [
    {
      "contentType": "string",
      "contentUrl": "string",
      "id": "string",
      "isProcessingContent": true
    }
  ],
  "bundleId": "string",
  "canonicalUrl": "string",
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  },
  "displayTime": "1970-01-01T00:00:00Z",
  "etag": "string",
  "html": "string",
  "id": "string",
  "inReplyTo": "string",
  "isBundleCover": true,
  "isDeleted": true,
  "isPinned": true,
  "kind": "mirror#timelineItem",
  "location": {
    "accuracy": 0,
    "address": "string",
    "displayName": "string",
    "id": "string",
    "kind": "mirror#location",
    "latitude": 0,
    "longitude": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "menuItems": [
    {
      "action": "string",
      "contextual_command": "string",
      "id": "string",
      "payload": "string",
      "removeWhenSelected": true,
      "values": [
        {
          "displayName": "string",
          "iconUrl": "string",
          "state": "string"
        }
      ]
    }
  ],
  "notification": {
    "deliveryTime": "1970-01-01T00:00:00Z",
    "level": "string"
  },
  "pinScore": 0,
  "recipients": [
    {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    }
  ],
  "selfLink": "string",
  "sourceItemId": "string",
  "speakableText": "string",
  "speakableType": "string",
  "text": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="mirrortimelineinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[TimelineItem](#schematimelineitem)|false|none|
|» attachments|body|[[Attachment](#schemaattachment)]|false|A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  <br>- attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array. <br>- cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.|
|» bundleId|body|string|false|The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.|
|» canonicalUrl|body|string|false|A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.|
|» created|body|string(date-time)|false|The time at which this item was created, formatted according to RFC 3339.|
|» creator|body|[Contact](#schemacontact)|false|The user or group that created this item.|
|» displayTime|body|string(date-time)|false|The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.|
|» etag|body|string|false|ETag for this item.|
|» html|body|string|false|HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.<br>Allowed HTML elements - You can use these elements in your timeline cards.<br> <br>- Headers: h1, h2, h3, h4, h5, h6 <br>- Images: img <br>- Lists: li, ol, ul <br>- HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time <br>- Structural: blockquote, br, div, hr, p, span <br>- Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup <br>- Tables: table, tbody, td, tfoot, th, thead, tr  <br>Blocked HTML elements: These elements and their contents are removed from HTML payloads.<br> <br>- Document headers: head, title <br>- Embeds: audio, embed, object, source, video <br>- Frames: frame, frameset <br>- Scripting: applet, script  <br>Other elements: Any elements that aren't listed are removed, but their contents are preserved.|
|» id|body|string|false|The ID of the timeline item. This is unique within a user's timeline.|
|» inReplyTo|body|string|false|If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.|
|» isBundleCover|body|boolean|false|Whether this item is a bundle cover.<br><br>If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.<br><br>On the main timeline, items that are shown are:  <br>- Items that have isBundleCover set to true  <br>- Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:  <br>- Items that have the bundleId in question AND isBundleCover set to false|
|» isDeleted|body|boolean|false|When true, indicates this item is deleted, and only the ID property is set.|
|» isPinned|body|boolean|false|When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.|
|» kind|body|string|false|The type of resource. This is always mirror#timelineItem.|
|» location|body|[Location](#schemalocation)|false|The geographic location associated with this item.|
|» menuItems|body|[[MenuItem](#schemamenuitem)]|false|A list of menu items that will be presented to the user when this item is selected in the timeline.|
|» notification|body|[NotificationConfig](#schemanotificationconfig)|false|Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.|
|» pinScore|body|integer(int32)|false|For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.|
|» recipients|body|[[Contact](#schemacontact)]|false|A list of users or groups that this item has been shared with.|
|» selfLink|body|string|false|A URL that can be used to retrieve this item.|
|» sourceItemId|body|string|false|Opaque string you can use to map a timeline item to data in your own service.|
|» speakableText|body|string|false|The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.<br><br>Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.|
|» speakableType|body|string|false|A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.<br><br>This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".<br><br>Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.|
|» text|body|string|false|Text content of this item.|
|» title|body|string|false|The title of this item.|
|» updated|body|string(date-time)|false|The time at which this item was last modified, formatted according to RFC 3339.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrortimelineinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TimelineItem](#schematimelineitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.get

<a id="opIdmirror.timeline.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /timeline/{id}`

Gets a single timeline item by ID.

<h3 id="mirrortimelineget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the timeline item.|
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

<h3 id="mirrortimelineget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TimelineItem](#schematimelineitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.update

<a id="opIdmirror.timeline.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string \
  -X PUT \
  -H 'Content-Type: audio/1d-interleaved-parityfec' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"attachments":[{"contentType":"string","contentUrl":"string","id":"string","isProcessingContent":true}],"bundleId":"string","canonicalUrl":"string","created":"1970-01-01T00:00:00Z","creator":{"acceptCommands":[{"type":"string"}],"acceptTypes":["string"],"displayName":"string","id":"string","imageUrls":["string"],"kind":"mirror#contact","phoneNumber":"string","priority":0,"sharingFeatures":["string"],"source":"string","speakableName":"string","type":"string"},"displayTime":"1970-01-01T00:00:00Z","etag":"string","html":"string","id":"string","inReplyTo":"string","isBundleCover":true,"isDeleted":true,"isPinned":true,"kind":"mirror#timelineItem","location":{"accuracy":0,"address":"string","displayName":"string","id":"string","kind":"mirror#location","latitude":0,"longitude":0,"timestamp":"1970-01-01T00:00:00Z"},"menuItems":[{"action":"string","contextual_command":"string","id":"string","payload":"string","removeWhenSelected":true,"values":[{"displayName":"string","iconUrl":"string","state":"string"}]}],"notification":{"deliveryTime":"1970-01-01T00:00:00Z","level":"string"},"pinScore":0,"recipients":[{"acceptCommands":[{"type":"string"}],"acceptTypes":["string"],"displayName":"string","id":"string","imageUrls":["string"],"kind":"mirror#contact","phoneNumber":"string","priority":0,"sharingFeatures":["string"],"source":"string","speakableName":"string","type":"string"}],"selfLink":"string","sourceItemId":"string","speakableText":"string","speakableType":"string","text":"string","title":"string","updated":"1970-01-01T00:00:00Z"}'
```

`PUT /timeline/{id}`

Updates a timeline item in place.

> Body parameter

```json
{
  "attachments": [
    {
      "contentType": "string",
      "contentUrl": "string",
      "id": "string",
      "isProcessingContent": true
    }
  ],
  "bundleId": "string",
  "canonicalUrl": "string",
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  },
  "displayTime": "1970-01-01T00:00:00Z",
  "etag": "string",
  "html": "string",
  "id": "string",
  "inReplyTo": "string",
  "isBundleCover": true,
  "isDeleted": true,
  "isPinned": true,
  "kind": "mirror#timelineItem",
  "location": {
    "accuracy": 0,
    "address": "string",
    "displayName": "string",
    "id": "string",
    "kind": "mirror#location",
    "latitude": 0,
    "longitude": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "menuItems": [
    {
      "action": "string",
      "contextual_command": "string",
      "id": "string",
      "payload": "string",
      "removeWhenSelected": true,
      "values": [
        {
          "displayName": "string",
          "iconUrl": "string",
          "state": "string"
        }
      ]
    }
  ],
  "notification": {
    "deliveryTime": "1970-01-01T00:00:00Z",
    "level": "string"
  },
  "pinScore": 0,
  "recipients": [
    {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    }
  ],
  "selfLink": "string",
  "sourceItemId": "string",
  "speakableText": "string",
  "speakableType": "string",
  "text": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="mirrortimelineupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the timeline item.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[TimelineItem](#schematimelineitem)|false|none|
|» attachments|body|[[Attachment](#schemaattachment)]|false|A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  <br>- attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array. <br>- cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.|
|» bundleId|body|string|false|The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.|
|» canonicalUrl|body|string|false|A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.|
|» created|body|string(date-time)|false|The time at which this item was created, formatted according to RFC 3339.|
|» creator|body|[Contact](#schemacontact)|false|The user or group that created this item.|
|» displayTime|body|string(date-time)|false|The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.|
|» etag|body|string|false|ETag for this item.|
|» html|body|string|false|HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.<br>Allowed HTML elements - You can use these elements in your timeline cards.<br> <br>- Headers: h1, h2, h3, h4, h5, h6 <br>- Images: img <br>- Lists: li, ol, ul <br>- HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time <br>- Structural: blockquote, br, div, hr, p, span <br>- Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup <br>- Tables: table, tbody, td, tfoot, th, thead, tr  <br>Blocked HTML elements: These elements and their contents are removed from HTML payloads.<br> <br>- Document headers: head, title <br>- Embeds: audio, embed, object, source, video <br>- Frames: frame, frameset <br>- Scripting: applet, script  <br>Other elements: Any elements that aren't listed are removed, but their contents are preserved.|
|» id|body|string|false|The ID of the timeline item. This is unique within a user's timeline.|
|» inReplyTo|body|string|false|If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.|
|» isBundleCover|body|boolean|false|Whether this item is a bundle cover.<br><br>If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.<br><br>On the main timeline, items that are shown are:  <br>- Items that have isBundleCover set to true  <br>- Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:  <br>- Items that have the bundleId in question AND isBundleCover set to false|
|» isDeleted|body|boolean|false|When true, indicates this item is deleted, and only the ID property is set.|
|» isPinned|body|boolean|false|When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.|
|» kind|body|string|false|The type of resource. This is always mirror#timelineItem.|
|» location|body|[Location](#schemalocation)|false|The geographic location associated with this item.|
|» menuItems|body|[[MenuItem](#schemamenuitem)]|false|A list of menu items that will be presented to the user when this item is selected in the timeline.|
|» notification|body|[NotificationConfig](#schemanotificationconfig)|false|Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.|
|» pinScore|body|integer(int32)|false|For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.|
|» recipients|body|[[Contact](#schemacontact)]|false|A list of users or groups that this item has been shared with.|
|» selfLink|body|string|false|A URL that can be used to retrieve this item.|
|» sourceItemId|body|string|false|Opaque string you can use to map a timeline item to data in your own service.|
|» speakableText|body|string|false|The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.<br><br>Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.|
|» speakableType|body|string|false|A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.<br><br>This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".<br><br>Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.|
|» text|body|string|false|Text content of this item.|
|» title|body|string|false|The title of this item.|
|» updated|body|string(date-time)|false|The time at which this item was last modified, formatted according to RFC 3339.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrortimelineupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TimelineItem](#schematimelineitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.delete

<a id="opIdmirror.timeline.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /timeline/{id}`

Deletes a timeline item.

<h3 id="mirrortimelinedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the timeline item.|
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

<h3 id="mirrortimelinedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.patch

<a id="opIdmirror.timeline.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "contentType": "string",
        "contentUrl": "string",
        "id": "string",
        "isProcessingContent": true
      }
    ],
    "bundleId": "string",
    "canonicalUrl": "string",
    "created": "1970-01-01T00:00:00Z",
    "creator": {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    },
    "displayTime": "1970-01-01T00:00:00Z",
    "etag": "string",
    "html": "string",
    "id": "string",
    "inReplyTo": "string",
    "isBundleCover": true,
    "isDeleted": true,
    "isPinned": true,
    "kind": "mirror#timelineItem",
    "location": {
      "accuracy": 0,
      "address": "string",
      "displayName": "string",
      "id": "string",
      "kind": "mirror#location",
      "latitude": 0,
      "longitude": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "menuItems": [
      {
        "action": "string",
        "contextual_command": "string",
        "id": "string",
        "payload": "string",
        "removeWhenSelected": true,
        "values": [
          {
            "displayName": "string",
            "iconUrl": "string",
            "state": "string"
          }
        ]
      }
    ],
    "notification": {
      "deliveryTime": "1970-01-01T00:00:00Z",
      "level": "string"
    },
    "pinScore": 0,
    "recipients": [
      {
        "acceptCommands": [
          {
            "type": "string"
          }
        ],
        "acceptTypes": [
          "string"
        ],
        "displayName": "string",
        "id": "string",
        "imageUrls": [
          "string"
        ],
        "kind": "mirror#contact",
        "phoneNumber": "string",
        "priority": 0,
        "sharingFeatures": [
          "string"
        ],
        "source": "string",
        "speakableName": "string",
        "type": "string"
      }
    ],
    "selfLink": "string",
    "sourceItemId": "string",
    "speakableText": "string",
    "speakableType": "string",
    "text": "string",
    "title": "string",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /timeline/{id}`

Updates a timeline item in place. This method supports patch semantics.

> Body parameter

```json
{
  "attachments": [
    {
      "contentType": "string",
      "contentUrl": "string",
      "id": "string",
      "isProcessingContent": true
    }
  ],
  "bundleId": "string",
  "canonicalUrl": "string",
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  },
  "displayTime": "1970-01-01T00:00:00Z",
  "etag": "string",
  "html": "string",
  "id": "string",
  "inReplyTo": "string",
  "isBundleCover": true,
  "isDeleted": true,
  "isPinned": true,
  "kind": "mirror#timelineItem",
  "location": {
    "accuracy": 0,
    "address": "string",
    "displayName": "string",
    "id": "string",
    "kind": "mirror#location",
    "latitude": 0,
    "longitude": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "menuItems": [
    {
      "action": "string",
      "contextual_command": "string",
      "id": "string",
      "payload": "string",
      "removeWhenSelected": true,
      "values": [
        {
          "displayName": "string",
          "iconUrl": "string",
          "state": "string"
        }
      ]
    }
  ],
  "notification": {
    "deliveryTime": "1970-01-01T00:00:00Z",
    "level": "string"
  },
  "pinScore": 0,
  "recipients": [
    {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    }
  ],
  "selfLink": "string",
  "sourceItemId": "string",
  "speakableText": "string",
  "speakableType": "string",
  "text": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="mirrortimelinepatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the timeline item.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[TimelineItem](#schematimelineitem)|false|none|
|» attachments|body|[[Attachment](#schemaattachment)]|false|A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  <br>- attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array. <br>- cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.|
|» bundleId|body|string|false|The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.|
|» canonicalUrl|body|string|false|A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.|
|» created|body|string(date-time)|false|The time at which this item was created, formatted according to RFC 3339.|
|» creator|body|[Contact](#schemacontact)|false|The user or group that created this item.|
|» displayTime|body|string(date-time)|false|The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.|
|» etag|body|string|false|ETag for this item.|
|» html|body|string|false|HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.<br>Allowed HTML elements - You can use these elements in your timeline cards.<br> <br>- Headers: h1, h2, h3, h4, h5, h6 <br>- Images: img <br>- Lists: li, ol, ul <br>- HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time <br>- Structural: blockquote, br, div, hr, p, span <br>- Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup <br>- Tables: table, tbody, td, tfoot, th, thead, tr  <br>Blocked HTML elements: These elements and their contents are removed from HTML payloads.<br> <br>- Document headers: head, title <br>- Embeds: audio, embed, object, source, video <br>- Frames: frame, frameset <br>- Scripting: applet, script  <br>Other elements: Any elements that aren't listed are removed, but their contents are preserved.|
|» id|body|string|false|The ID of the timeline item. This is unique within a user's timeline.|
|» inReplyTo|body|string|false|If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.|
|» isBundleCover|body|boolean|false|Whether this item is a bundle cover.<br><br>If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.<br><br>On the main timeline, items that are shown are:  <br>- Items that have isBundleCover set to true  <br>- Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:  <br>- Items that have the bundleId in question AND isBundleCover set to false|
|» isDeleted|body|boolean|false|When true, indicates this item is deleted, and only the ID property is set.|
|» isPinned|body|boolean|false|When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.|
|» kind|body|string|false|The type of resource. This is always mirror#timelineItem.|
|» location|body|[Location](#schemalocation)|false|The geographic location associated with this item.|
|» menuItems|body|[[MenuItem](#schemamenuitem)]|false|A list of menu items that will be presented to the user when this item is selected in the timeline.|
|» notification|body|[NotificationConfig](#schemanotificationconfig)|false|Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.|
|» pinScore|body|integer(int32)|false|For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.|
|» recipients|body|[[Contact](#schemacontact)]|false|A list of users or groups that this item has been shared with.|
|» selfLink|body|string|false|A URL that can be used to retrieve this item.|
|» sourceItemId|body|string|false|Opaque string you can use to map a timeline item to data in your own service.|
|» speakableText|body|string|false|The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.<br><br>Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.|
|» speakableType|body|string|false|A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.<br><br>This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".<br><br>Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.|
|» text|body|string|false|Text content of this item.|
|» title|body|string|false|The title of this item.|
|» updated|body|string(date-time)|false|The time at which this item was last modified, formatted according to RFC 3339.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="mirrortimelinepatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TimelineItem](#schematimelineitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.location ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.location ), Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.attachments.list

<a id="opIdmirror.timeline.attachments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string/attachments \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /timeline/{itemId}/attachments`

Returns a list of attachments for a timeline item.

<h3 id="mirrortimelineattachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The ID of the timeline item whose attachments should be listed.|
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

<h3 id="mirrortimelineattachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AttachmentsListResponse](#schemaattachmentslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.attachments.insert

<a id="opIdmirror.timeline.attachments.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string/attachments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /timeline/{itemId}/attachments`

Adds a new attachment to a timeline item.

<h3 id="mirrortimelineattachmentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The ID of the timeline item the attachment belongs to.|
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

<h3 id="mirrortimelineattachmentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attachment](#schemaattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.attachments.get

<a id="opIdmirror.timeline.attachments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string/attachments/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /timeline/{itemId}/attachments/{attachmentId}`

Retrieves an attachment on a timeline item by item ID and attachment ID.

<h3 id="mirrortimelineattachmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The ID of the timeline item the attachment belongs to.|
|attachmentId|path|string|true|The ID of the attachment.|
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

<h3 id="mirrortimelineattachmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attachment](#schemaattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

## mirror.timeline.attachments.delete

<a id="opIdmirror.timeline.attachments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/timeline/string/attachments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /timeline/{itemId}/attachments/{attachmentId}`

Deletes an attachment from a timeline item.

<h3 id="mirrortimelineattachmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The ID of the timeline item the attachment belongs to.|
|attachmentId|path|string|true|The ID of the attachment.|
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

<h3 id="mirrortimelineattachmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/glass.timeline ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/glass.timeline )
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "authTokens": [
    {
      "authToken": "string",
      "type": "string"
    }
  ],
  "features": [
    "string"
  ],
  "password": "string",
  "userData": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

Represents an account passed into the Account Manager on Glass.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authTokens|[[AuthToken](#schemaauthtoken)]|false|none|none|
|features|[string]|false|none|none|
|password|string|false|none|none|
|userData|[[UserData](#schemauserdata)]|false|none|none|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "contentType": "string",
  "contentUrl": "string",
  "id": "string",
  "isProcessingContent": true
}
```

Represents media content, such as a photo, that can be attached to a timeline item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The MIME type of the attachment.|
|contentUrl|string|false|none|The URL for the content.|
|id|string|false|none|The ID of the attachment.|
|isProcessingContent|boolean|false|none|Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later.|

<h2 id="tocS_AttachmentsListResponse">AttachmentsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentslistresponse"></a>
<a id="schema_AttachmentsListResponse"></a>
<a id="tocSattachmentslistresponse"></a>
<a id="tocsattachmentslistresponse"></a>

```json
{
  "items": [
    {
      "contentType": "string",
      "contentUrl": "string",
      "id": "string",
      "isProcessingContent": true
    }
  ],
  "kind": "mirror#attachmentsList"
}
```

A list of Attachments. This is the response from the server to GET requests on the attachments collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Attachment](#schemaattachment)]|false|none|The list of attachments.|
|kind|string|false|none|The type of resource. This is always mirror#attachmentsList.|

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
{
  "authToken": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "type": "string"
}
```

A single menu command that is part of a Contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of operation this command corresponds to. Allowed values are:  <br>- TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the "Take a note" voice menu command.  <br>- POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the "Post an update" voice menu command.|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "acceptCommands": [
    {
      "type": "string"
    }
  ],
  "acceptTypes": [
    "string"
  ],
  "displayName": "string",
  "id": "string",
  "imageUrls": [
    "string"
  ],
  "kind": "mirror#contact",
  "phoneNumber": "string",
  "priority": 0,
  "sharingFeatures": [
    "string"
  ],
  "source": "string",
  "speakableName": "string",
  "type": "string"
}
```

A person or group that can be used as a creator or a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptCommands|[[Command](#schemacommand)]|false|none|A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.|
|acceptTypes|[string]|false|none|A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.|
|displayName|string|false|none|The name to display for this contact.|
|id|string|false|none|An ID for this contact. This is generated by the application and is treated as an opaque token.|
|imageUrls|[string]|false|none|Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.|
|kind|string|false|none|The type of resource. This is always mirror#contact.|
|phoneNumber|string|false|none|Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.|
|priority|integer(uint32)|false|none|Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.|
|sharingFeatures|[string]|false|none|A list of sharing features that a contact can handle. Allowed values are:  <br>- ADD_CAPTION|
|source|string|false|none|The ID of the application that created this contact. This is populated by the API|
|speakableName|string|false|none|Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.|
|type|string|false|none|The type for this contact. This is used for sorting in UIs. Allowed values are:  <br>- INDIVIDUAL - Represents a single person. This is the default. <br>- GROUP - Represents more than a single person.|

<h2 id="tocS_ContactsListResponse">ContactsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactslistresponse"></a>
<a id="schema_ContactsListResponse"></a>
<a id="tocScontactslistresponse"></a>
<a id="tocscontactslistresponse"></a>

```json
{
  "items": [
    {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    }
  ],
  "kind": "mirror#contacts"
}
```

A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Contact](#schemacontact)]|false|none|Contact list.|
|kind|string|false|none|The type of resource. This is always mirror#contacts.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "accuracy": 0,
  "address": "string",
  "displayName": "string",
  "id": "string",
  "kind": "mirror#location",
  "latitude": 0,
  "longitude": 0,
  "timestamp": "1970-01-01T00:00:00Z"
}
```

A geographic location that can be associated with a timeline item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracy|number(double)|false|none|The accuracy of the location fix in meters.|
|address|string|false|none|The full address of the location.|
|displayName|string|false|none|The name to be displayed. This may be a business name or a user-defined place, such as "Home".|
|id|string|false|none|The ID of the location.|
|kind|string|false|none|The type of resource. This is always mirror#location.|
|latitude|number(double)|false|none|The latitude, in degrees.|
|longitude|number(double)|false|none|The longitude, in degrees.|
|timestamp|string(date-time)|false|none|The time at which this location was captured, formatted according to RFC 3339.|

<h2 id="tocS_LocationsListResponse">LocationsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalocationslistresponse"></a>
<a id="schema_LocationsListResponse"></a>
<a id="tocSlocationslistresponse"></a>
<a id="tocslocationslistresponse"></a>

```json
{
  "items": [
    {
      "accuracy": 0,
      "address": "string",
      "displayName": "string",
      "id": "string",
      "kind": "mirror#location",
      "latitude": 0,
      "longitude": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "mirror#locationsList"
}
```

A list of Locations. This is the response from the server to GET requests on the locations collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Location](#schemalocation)]|false|none|The list of locations.|
|kind|string|false|none|The type of resource. This is always mirror#locationsList.|

<h2 id="tocS_MenuItem">MenuItem</h2>
<!-- backwards compatibility -->
<a id="schemamenuitem"></a>
<a id="schema_MenuItem"></a>
<a id="tocSmenuitem"></a>
<a id="tocsmenuitem"></a>

```json
{
  "action": "string",
  "contextual_command": "string",
  "id": "string",
  "payload": "string",
  "removeWhenSelected": true,
  "values": [
    {
      "displayName": "string",
      "iconUrl": "string",
      "state": "string"
    }
  ]
}
```

A custom menu item that can be presented to the user by a timeline item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Controls the behavior when the user picks the menu option. Allowed values are:  <br>- CUSTOM - Custom action set by the service. When the user selects this menuItem, the API triggers a notification to your callbackUrl with the userActions.type set to CUSTOM and the userActions.payload set to the ID of this menu item. This is the default value. <br>- Built-in actions:  <br>- REPLY - Initiate a reply to the timeline item using the voice recording UI. The creator attribute must be set in the timeline item for this menu to be available. <br>- REPLY_ALL - Same behavior as REPLY. The original timeline item's recipients will be added to the reply item. <br>- DELETE - Delete the timeline item. <br>- SHARE - Share the timeline item with the available contacts. <br>- READ_ALOUD - Read the timeline item's speakableText aloud; if this field is not set, read the text field; if none of those fields are set, this menu item is ignored. <br>- GET_MEDIA_INPUT - Allow users to provide media payloads to Glassware from a menu item (currently, only transcribed text from voice input is supported). Subscribe to notifications when users invoke this menu item to receive the timeline item ID. Retrieve the media from the timeline item in the payload property. <br>- VOICE_CALL - Initiate a phone call using the timeline item's creator.phoneNumber attribute as recipient. <br>- NAVIGATE - Navigate to the timeline item's location. <br>- TOGGLE_PINNED - Toggle the isPinned state of the timeline item. <br>- OPEN_URI - Open the payload of the menu item in the browser. <br>- PLAY_VIDEO - Open the payload of the menu item in the Glass video player. <br>- SEND_MESSAGE - Initiate sending a message to the timeline item's creator:  <br>- If the creator.phoneNumber is set and Glass is connected to an Android phone, the message is an SMS. <br>- Otherwise, if the creator.email is set, the message is an email.|
|contextual_command|string|false|none|The ContextualMenus.Command associated with this MenuItem (e.g. READ_ALOUD). The voice label for this command will be displayed in the voice menu and the touch label will be displayed in the touch menu. Note that the default menu value's display name will be overriden if you specify this property. Values that do not correspond to a ContextualMenus.Command name will be ignored.|
|id|string|false|none|The ID for this menu item. This is generated by the application and is treated as an opaque token.|
|payload|string|false|none|A generic payload whose meaning changes depending on this MenuItem's action.  <br>- When the action is OPEN_URI, the payload is the URL of the website to view. <br>- When the action is PLAY_VIDEO, the payload is the streaming URL of the video <br>- When the action is GET_MEDIA_INPUT, the payload is the text transcription of a user's speech input|
|removeWhenSelected|boolean|false|none|If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected.|
|values|[[MenuValue](#schemamenuvalue)]|false|none|For CUSTOM items, a list of values controlling the appearance of the menu item in each of its states. A value for the DEFAULT state must be provided. If the PENDING or CONFIRMED states are missing, they will not be shown.|

<h2 id="tocS_MenuValue">MenuValue</h2>
<!-- backwards compatibility -->
<a id="schemamenuvalue"></a>
<a id="schema_MenuValue"></a>
<a id="tocSmenuvalue"></a>
<a id="tocsmenuvalue"></a>

```json
{
  "displayName": "string",
  "iconUrl": "string",
  "state": "string"
}
```

A single value that is part of a MenuItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown.|
|iconUrl|string|false|none|URL of an icon to display with the menu item.|
|state|string|false|none|The state that this value applies to. Allowed values are:  <br>- DEFAULT - Default value shown when displayed in the menuItems list. <br>- PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled. <br>- CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "collection": "string",
  "itemId": "string",
  "operation": "string",
  "userActions": [
    {
      "payload": "string",
      "type": "string"
    }
  ],
  "userToken": "string",
  "verifyToken": "string"
}
```

A notification delivered by the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|The collection that generated the notification.|
|itemId|string|false|none|The ID of the item that generated the notification.|
|operation|string|false|none|The type of operation that generated the notification.|
|userActions|[[UserAction](#schemauseraction)]|false|none|A list of actions taken by the user that triggered the notification.|
|userToken|string|false|none|The user token provided by the service when it subscribed for notifications.|
|verifyToken|string|false|none|The secret verify token provided by the service when it subscribed for notifications.|

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "deliveryTime": "1970-01-01T00:00:00Z",
  "level": "string"
}
```

Controls how notifications for a timeline item are presented to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryTime|string(date-time)|false|none|The time at which the notification should be delivered.|
|level|string|false|none|Describes how important the notification is. Allowed values are:  <br>- DEFAULT - Notifications of default importance. A chime will be played to alert users.|

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
{
  "id": "string",
  "kind": "mirror#setting",
  "value": "string"
}
```

A setting for Glass.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The setting's ID. The following IDs are valid:  <br>- locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.  <br>- timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.|
|kind|string|false|none|The type of resource. This is always mirror#setting.|
|value|string|false|none|The setting value, as a string.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "callbackUrl": "string",
  "collection": "string",
  "id": "string",
  "kind": "mirror#subscription",
  "notification": {
    "collection": "string",
    "itemId": "string",
    "operation": "string",
    "userActions": [
      {
        "payload": "string",
        "type": "string"
      }
    ],
    "userToken": "string",
    "verifyToken": "string"
  },
  "operation": [
    "string"
  ],
  "updated": "1970-01-01T00:00:00Z",
  "userToken": "string",
  "verifyToken": "string"
}
```

A subscription to events on a collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|The URL where notifications should be delivered (must start with https://).|
|collection|string|false|none|The collection to subscribe to. Allowed values are:  <br>- timeline - Changes in the timeline including insertion, deletion, and updates. <br>- locations - Location updates. <br>- settings - Settings updates.|
|id|string|false|none|The ID of the subscription.|
|kind|string|false|none|The type of resource. This is always mirror#subscription.|
|notification|[Notification](#schemanotification)|false|none|Container object for notifications. This is not populated in the Subscription resource.|
|operation|[string]|false|none|A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:  <br>- UPDATE - The item has been updated. <br>- INSERT - A new item has been inserted. <br>- DELETE - The item has been deleted. <br>- MENU_ACTION - A custom menu item has been triggered by the user.|
|updated|string(date-time)|false|none|The time at which this subscription was last modified, formatted according to RFC 3339.|
|userToken|string|false|none|An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.|
|verifyToken|string|false|none|A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.|

<h2 id="tocS_SubscriptionsListResponse">SubscriptionsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionslistresponse"></a>
<a id="schema_SubscriptionsListResponse"></a>
<a id="tocSsubscriptionslistresponse"></a>
<a id="tocssubscriptionslistresponse"></a>

```json
{
  "items": [
    {
      "callbackUrl": "string",
      "collection": "string",
      "id": "string",
      "kind": "mirror#subscription",
      "notification": {
        "collection": "string",
        "itemId": "string",
        "operation": "string",
        "userActions": [
          {
            "payload": "string",
            "type": "string"
          }
        ],
        "userToken": "string",
        "verifyToken": "string"
      },
      "operation": [
        "string"
      ],
      "updated": "1970-01-01T00:00:00Z",
      "userToken": "string",
      "verifyToken": "string"
    }
  ],
  "kind": "mirror#subscriptionsList"
}
```

A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Subscription](#schemasubscription)]|false|none|The list of subscriptions.|
|kind|string|false|none|The type of resource. This is always mirror#subscriptionsList.|

<h2 id="tocS_TimelineItem">TimelineItem</h2>
<!-- backwards compatibility -->
<a id="schematimelineitem"></a>
<a id="schema_TimelineItem"></a>
<a id="tocStimelineitem"></a>
<a id="tocstimelineitem"></a>

```json
{
  "attachments": [
    {
      "contentType": "string",
      "contentUrl": "string",
      "id": "string",
      "isProcessingContent": true
    }
  ],
  "bundleId": "string",
  "canonicalUrl": "string",
  "created": "1970-01-01T00:00:00Z",
  "creator": {
    "acceptCommands": [
      {
        "type": "string"
      }
    ],
    "acceptTypes": [
      "string"
    ],
    "displayName": "string",
    "id": "string",
    "imageUrls": [
      "string"
    ],
    "kind": "mirror#contact",
    "phoneNumber": "string",
    "priority": 0,
    "sharingFeatures": [
      "string"
    ],
    "source": "string",
    "speakableName": "string",
    "type": "string"
  },
  "displayTime": "1970-01-01T00:00:00Z",
  "etag": "string",
  "html": "string",
  "id": "string",
  "inReplyTo": "string",
  "isBundleCover": true,
  "isDeleted": true,
  "isPinned": true,
  "kind": "mirror#timelineItem",
  "location": {
    "accuracy": 0,
    "address": "string",
    "displayName": "string",
    "id": "string",
    "kind": "mirror#location",
    "latitude": 0,
    "longitude": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "menuItems": [
    {
      "action": "string",
      "contextual_command": "string",
      "id": "string",
      "payload": "string",
      "removeWhenSelected": true,
      "values": [
        {
          "displayName": "string",
          "iconUrl": "string",
          "state": "string"
        }
      ]
    }
  ],
  "notification": {
    "deliveryTime": "1970-01-01T00:00:00Z",
    "level": "string"
  },
  "pinScore": 0,
  "recipients": [
    {
      "acceptCommands": [
        {
          "type": "string"
        }
      ],
      "acceptTypes": [
        "string"
      ],
      "displayName": "string",
      "id": "string",
      "imageUrls": [
        "string"
      ],
      "kind": "mirror#contact",
      "phoneNumber": "string",
      "priority": 0,
      "sharingFeatures": [
        "string"
      ],
      "source": "string",
      "speakableName": "string",
      "type": "string"
    }
  ],
  "selfLink": "string",
  "sourceItemId": "string",
  "speakableText": "string",
  "speakableType": "string",
  "text": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  <br>- attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array. <br>- cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.|
|bundleId|string|false|none|The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.|
|canonicalUrl|string|false|none|A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.|
|created|string(date-time)|false|none|The time at which this item was created, formatted according to RFC 3339.|
|creator|[Contact](#schemacontact)|false|none|The user or group that created this item.|
|displayTime|string(date-time)|false|none|The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.|
|etag|string|false|none|ETag for this item.|
|html|string|false|none|HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.<br>Allowed HTML elements - You can use these elements in your timeline cards.<br> <br>- Headers: h1, h2, h3, h4, h5, h6 <br>- Images: img <br>- Lists: li, ol, ul <br>- HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time <br>- Structural: blockquote, br, div, hr, p, span <br>- Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup <br>- Tables: table, tbody, td, tfoot, th, thead, tr  <br>Blocked HTML elements: These elements and their contents are removed from HTML payloads.<br> <br>- Document headers: head, title <br>- Embeds: audio, embed, object, source, video <br>- Frames: frame, frameset <br>- Scripting: applet, script  <br>Other elements: Any elements that aren't listed are removed, but their contents are preserved.|
|id|string|false|none|The ID of the timeline item. This is unique within a user's timeline.|
|inReplyTo|string|false|none|If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.|
|isBundleCover|boolean|false|none|Whether this item is a bundle cover.<br><br>If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.<br><br>On the main timeline, items that are shown are:  <br>- Items that have isBundleCover set to true  <br>- Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:  <br>- Items that have the bundleId in question AND isBundleCover set to false|
|isDeleted|boolean|false|none|When true, indicates this item is deleted, and only the ID property is set.|
|isPinned|boolean|false|none|When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.|
|kind|string|false|none|The type of resource. This is always mirror#timelineItem.|
|location|[Location](#schemalocation)|false|none|The geographic location associated with this item.|
|menuItems|[[MenuItem](#schemamenuitem)]|false|none|A list of menu items that will be presented to the user when this item is selected in the timeline.|
|notification|[NotificationConfig](#schemanotificationconfig)|false|none|Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.|
|pinScore|integer(int32)|false|none|For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.|
|recipients|[[Contact](#schemacontact)]|false|none|A list of users or groups that this item has been shared with.|
|selfLink|string|false|none|A URL that can be used to retrieve this item.|
|sourceItemId|string|false|none|Opaque string you can use to map a timeline item to data in your own service.|
|speakableText|string|false|none|The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.<br><br>Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.|
|speakableType|string|false|none|A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.<br><br>This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".<br><br>Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.|
|text|string|false|none|Text content of this item.|
|title|string|false|none|The title of this item.|
|updated|string(date-time)|false|none|The time at which this item was last modified, formatted according to RFC 3339.|

<h2 id="tocS_TimelineListResponse">TimelineListResponse</h2>
<!-- backwards compatibility -->
<a id="schematimelinelistresponse"></a>
<a id="schema_TimelineListResponse"></a>
<a id="tocStimelinelistresponse"></a>
<a id="tocstimelinelistresponse"></a>

```json
{
  "items": [
    {
      "attachments": [
        {
          "contentType": "string",
          "contentUrl": "string",
          "id": "string",
          "isProcessingContent": true
        }
      ],
      "bundleId": "string",
      "canonicalUrl": "string",
      "created": "1970-01-01T00:00:00Z",
      "creator": {
        "acceptCommands": [
          {
            "type": "string"
          }
        ],
        "acceptTypes": [
          "string"
        ],
        "displayName": "string",
        "id": "string",
        "imageUrls": [
          "string"
        ],
        "kind": "mirror#contact",
        "phoneNumber": "string",
        "priority": 0,
        "sharingFeatures": [
          "string"
        ],
        "source": "string",
        "speakableName": "string",
        "type": "string"
      },
      "displayTime": "1970-01-01T00:00:00Z",
      "etag": "string",
      "html": "string",
      "id": "string",
      "inReplyTo": "string",
      "isBundleCover": true,
      "isDeleted": true,
      "isPinned": true,
      "kind": "mirror#timelineItem",
      "location": {
        "accuracy": 0,
        "address": "string",
        "displayName": "string",
        "id": "string",
        "kind": "mirror#location",
        "latitude": 0,
        "longitude": 0,
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "menuItems": [
        {
          "action": "string",
          "contextual_command": "string",
          "id": "string",
          "payload": "string",
          "removeWhenSelected": true,
          "values": [
            {
              "displayName": "string",
              "iconUrl": "string",
              "state": "string"
            }
          ]
        }
      ],
      "notification": {
        "deliveryTime": "1970-01-01T00:00:00Z",
        "level": "string"
      },
      "pinScore": 0,
      "recipients": [
        {
          "acceptCommands": [
            {
              "type": "string"
            }
          ],
          "acceptTypes": [
            "string"
          ],
          "displayName": "string",
          "id": "string",
          "imageUrls": [
            "string"
          ],
          "kind": "mirror#contact",
          "phoneNumber": "string",
          "priority": 0,
          "sharingFeatures": [
            "string"
          ],
          "source": "string",
          "speakableName": "string",
          "type": "string"
        }
      ],
      "selfLink": "string",
      "sourceItemId": "string",
      "speakableText": "string",
      "speakableType": "string",
      "text": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "mirror#timeline",
  "nextPageToken": "string"
}
```

A list of timeline items. This is the response from the server to GET requests on the timeline collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TimelineItem](#schematimelineitem)]|false|none|Items in the timeline.|
|kind|string|false|none|The type of resource. This is always mirror#timeline.|
|nextPageToken|string|false|none|The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results.|

<h2 id="tocS_UserAction">UserAction</h2>
<!-- backwards compatibility -->
<a id="schemauseraction"></a>
<a id="schema_UserAction"></a>
<a id="tocSuseraction"></a>
<a id="tocsuseraction"></a>

```json
{
  "payload": "string",
  "type": "string"
}
```

Represents an action taken by the user that triggered a notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|string|false|none|An optional payload for the action.<br><br>For actions of type CUSTOM, this is the ID of the custom menu item that was selected.|
|type|string|false|none|The type of action. The value of this can be:  <br>- SHARE - the user shared an item. <br>- REPLY - the user replied to an item. <br>- REPLY_ALL - the user replied to all recipients of an item. <br>- CUSTOM - the user selected a custom menu item on the timeline item. <br>- DELETE - the user deleted the item. <br>- PIN - the user pinned the item. <br>- UNPIN - the user unpinned the item. <br>- LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored.|

<h2 id="tocS_UserData">UserData</h2>
<!-- backwards compatibility -->
<a id="schemauserdata"></a>
<a id="schema_UserData"></a>
<a id="tocSuserdata"></a>
<a id="tocsuserdata"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|
