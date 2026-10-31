<h1 id="external-accounts-api">External Accounts API v0.1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The External Accounts API is used to manage accounts for Viber Business Messages, Facebook Messenger and Whatsapp for use in the [Messages](https://developer.nexmo.com/messages/overview) and [Dispatch](https://developer.nexmo.com/dispatch/overview) APIs.

Base URLs:

* <a href="https://api.nexmo.com/beta/chatapp-accounts">https://api.nexmo.com/beta/chatapp-accounts</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="external-accounts-api-application">Application</h1>

Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.

## Link application to an account

<a id="opIdLinkApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger/string/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "application": "applicationId"
  }'
```

`POST /{provider}/{external_id}/applications`

> Body parameter

```json
{
  "application": "applicationId"
}
```

<h3 id="link-application-to-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|Provider of the account you want to assign an application to|
|external_id|path|string|true|External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.|
|body|body|object|true|Request body can contain any of the following. Please note, the only one application can be linked to the account.|
|» application|body|string|true|There is just one application allowed per an account. The application type must be type "messages". For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|messenger|
|provider|viber_service_msg|
|provider|whatsapp|

> Example responses

> 200 Response

```json
{
  "access_token": "accessToken",
  "api_key": "abcd1234",
  "applications": [
    "applicationId"
  ],
  "external_id": "12345678",
  "name": "name",
  "provider": "messenger"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

> 403 Response

```json
{
  "detail": "Cannot link application",
  "title": "Forbidden",
  "type": "https://www.nexmo.com/messages/Errors#Forbidden"
}
```

> 409 Response

```json
{
  "detail": "Unable to link application",
  "title": "Application conflict",
  "type": "https://www.nexmo.com/messages/Errors#Conflict"
}
```

<h3 id="link-application-to-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[AccountResponse](#schemaaccountresponse)|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|403|Forbidden|Forbidden.|Inline|
|409|Conflict|Conflict.|Inline|

<h3 id="link-application-to-an-account-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|The application does not exist or the application type is not "messages"|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|The account reached limit of maximum number of linked applications. (The only one application is allowed per an account)|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Unlink application from an account

<a id="opIdUnliWithoutApplicationnkApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger/string/applications/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{provider}/{external_id}/applications/{application_id}`

<h3 id="unlink-application-from-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|Provider of the account you want to unlink an application from|
|external_id|path|string|true|External id of the account you want to unlink an application from|
|application_id|path|string|true|Id of the application you want to unlink|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|messenger|
|provider|viber_service_msg|
|provider|whatsapp|

> Example responses

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

> 403 Response

```json
{
  "detail": "Cannot unlink application",
  "title": "Forbidden",
  "type": "https://www.nexmo.com/messages/Errors#Forbidden"
}
```

> 409 Response

```json
{
  "detail": "Unable to unlink application",
  "title": "Application conflict",
  "type": "https://www.nexmo.com/messages/Errors#Conflict"
}
```

<h3 id="unlink-application-from-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content.|None|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|403|Forbidden|Forbidden.|Inline|
|409|Conflict|Conflict.|Inline|

<h3 id="unlink-application-from-an-account-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|The application is not linked or doesn't exist.|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="external-accounts-api-account">Account</h1>

An external-account used as the `from` field in the Messages API and Dispatch API

## Retrieve all accounts you own

<a id="opIdGetAllAccounts"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /`

<h3 id="retrieve-all-accounts-you-own-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|false|Filter by provider|
|page_number|query|integer|false|Page number of the results|
|page_size|query|integer|false|Page size of the results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|messenger|
|provider|viber_service_msg|
|provider|whatsapp|

> Example responses

> 200 Response

```json
{
  "_embedded": [
    {
      "access_token": "myAccessToken",
      "api_key": "abcd1234",
      "applications": [
        "optionalApplicationId"
      ],
      "external_id": "12345678",
      "name": "optionalName",
      "provider": "whatsapp"
    }
  ],
  "_links": {
    "first": {
      "href": "https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10"
    },
    "last": {
      "href": "https://api.nexmo.com/beta/chatapp-accounts?page_number=4&page_size=10"
    },
    "next": {
      "href": "https://api.nexmo.com/beta/chatapp-accounts?page_number=3&page_size=10"
    },
    "prev": {
      "href": "https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10"
    },
    "self": {
      "href": "https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10"
    }
  },
  "page_number": 1,
  "page_size": 10
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

<h3 id="retrieve-all-accounts-you-own-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|Inline|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|

<h3 id="retrieve-all-accounts-you-own-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|[[GetAllAccountResponse](#schemagetallaccountresponse)]|false|none|none|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» last|object|false|none|none|
|» » href|string|false|none|none|
|» next|object|false|none|none|
|» » href|string|false|none|none|
|» prev|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|page_number|integer|false|none|none|
|page_size|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="external-accounts-api-facebook-messenger">Facebook Messenger</h1>

Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account

## Create a Messenger account

<a id="opIdCreateMessengerAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_token": "myAccessToken",
    "applications": [
      "optionalApplicationId"
    ],
    "external_id": "12345678",
    "name": "optionalName"
  }'
```

`POST /messenger`

> Body parameter

```json
{
  "access_token": "myAccessToken",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName"
}
```

<h3 id="create-a-messenger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» access_token|body|string|true|This is the Facebook Business Page token. You can obtain the token using one of the following methods:<br><br>* Linking your Facebook Business Page to your account [with our Dashboard tool](https://dashboard.nexmo.com/messages/social-channels/facebook-connect)<br>* Requesting a Page Access Token using the steps in the [Facebook token reference](https://developers.facebook.com/docs/pages/access-tokens/)<br>|
|» applications|body|[string]|false|Contains a list of application IDs which are linked to the account. <ul> <li>There is just one application allowed per an account.</li> <li>The application type must be type "messages".</li> </ul> For more information see [Application API spec](https://developer.nexmo.com/api/application.v2)|
|» external_id|body|string|true|This is the unique identifier within the provider's domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click "Settings", click "Messenger platform " scroll down to "Messenger link" to find your Page ID.|
|» name|body|string|false|Custom account name|

> Example responses

> 201 Response

```json
{
  "access_token": "myAccessToken",
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "messenger"
}
```

> 400 Response

```json
{
  "detail": "Found errors validating 1 of your submitted parameters.",
  "instance": null,
  "invalid_params": [
    {
      "name": "external_id",
      "reason": "Missing `external_id` field"
    }
  ],
  "title": "Your request parameters didn't validate.",
  "type": "https://www.nexmo.com/messages/Errors#InvalidParams"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

> 403 Response

```json
{
  "title": "Wrong authentication - You are not authorised to access this resource"
}
```

<h3 id="create-a-messenger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created.|[MessengerAccountResponse](#schemamessengeraccountresponse)|
|400|Bad Request|Bad Request.|Inline|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|403|Forbidden|Forbidden.|[403Response](#schema403response)|

<h3 id="create-a-messenger-account-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|invalid_params|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Retrieve a Messenger account

<a id="opIdGetMessengerAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messenger/{external_id}`

<h3 id="retrieve-a-messenger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|External id of the account you want to retrieve. In this case it is the Facebook Page ID.|

> Example responses

> 200 Response

```json
{
  "access_token": "myAccessToken",
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "messenger"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

<h3 id="retrieve-a-messenger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[MessengerAccountResponse](#schemamessengeraccountresponse)|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|404|Not Found|Not Found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a Messenger account

<a id="opIdDeleteMessengerAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /messenger/{external_id}`

<h3 id="delete-a-messenger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|External id of the account you want to delete. In this case it is the Facebook Page ID.|

> Example responses

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

> 403 Response

```json
{
  "title": "Wrong authentication - You are not authorised to access this resource"
}
```

<h3 id="delete-a-messenger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content.|None|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|403|Forbidden|Forbidden.|[403Response](#schema403response)|
|404|Not Found|Not Found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a Messenger account

<a id="opIdUpdateMessengerAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/messenger/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_token": "updatedAccessToken",
    "applications": [
      "newApplicationId"
    ],
    "name": "newName"
  }'
```

`PATCH /messenger/{external_id}`

> Body parameter

```json
{
  "access_token": "updatedAccessToken",
  "applications": [
    "newApplicationId"
  ],
  "name": "newName"
}
```

<h3 id="update-a-messenger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|External id of the account you want to update. In this case it is the Facebook Page ID.|
|body|body|object|true|Request body can contain any of the following|
|» access_token|body|string|false|none|
|» applications|body|[string]|false|none|
|» name|body|string|false|The new account name|

> Example responses

> 200 Response

```json
{
  "access_token": "updatedAccessToken",
  "api_key": "abcd1234",
  "applications": [
    "newApplicationId"
  ],
  "external_id": "12345678",
  "name": "newName",
  "provider": "messenger"
}
```

> 400 Response

```json
{
  "detail": "Found errors validating 1 of your submitted parameters.",
  "instance": null,
  "invalid_params": [
    {
      "name": "external_id",
      "reason": "'external_id' parameter cannot be changed"
    }
  ],
  "title": "Your request parameters didn't validate.",
  "type": "https://www.nexmo.com/messages/Errors#InvalidParams"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

> 403 Response

```json
{
  "title": "Wrong authentication - You are not authorised to access this resource"
}
```

<h3 id="update-a-messenger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|Inline|
|400|Bad Request|Bad Request.|Inline|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|403|Forbidden|Forbidden.|[403Response](#schema403response)|
|404|Not Found|Not Found.|None|

<h3 id="update-a-messenger-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The provider access token|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account. In this case it is the Facebook Page ID.|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `messenger`).|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|invalid_params|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="external-accounts-api-viber-service-message">Viber Service Message</h1>

Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account

## Retrieve a Viber Service Message account

<a id="opIdGetVSMAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/viber_service_msg/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /viber_service_msg/{external_id}`

<h3 id="retrieve-a-viber-service-message-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|External id of the account you want to retrieve. In this case it will be your Viber Service Message ID.|

> Example responses

> 200 Response

```json
{
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "viber_service_msg"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

<h3 id="retrieve-a-viber-service-message-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[VSMAccountResponse](#schemavsmaccountresponse)|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|404|Not Found|Not Found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="external-accounts-api-whatsapp">WhatsApp</h1>

## Retrieve a Whatsapp account

<a id="opIdGetWAAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/whatsapp/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /whatsapp/{external_id}`

<h3 id="retrieve-a-whatsapp-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|External id of the account you want to retrieve. In this case it will be the WhatsApp number.|

> Example responses

> 200 Response

```json
{
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "whatsapp"
}
```

> 401 Response

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

<h3 id="retrieve-a-whatsapp-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|[WAAccountResponse](#schemawaaccountresponse)|
|401|Unauthorized|Unauthorized.|[401Response](#schema401response)|
|404|Not Found|Not Found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

# Schemas

<h2 id="tocS_401Response">401Response</h2>
<!-- backwards compatibility -->
<a id="schema401response"></a>
<a id="schema_401Response"></a>
<a id="tocS401response"></a>
<a id="tocs401response"></a>

```json
{
  "detail": "Request header 'Authorization' missing / Invalid Token",
  "title": "Unauthorised"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_403Response">403Response</h2>
<!-- backwards compatibility -->
<a id="schema403response"></a>
<a id="schema_403Response"></a>
<a id="tocS403response"></a>
<a id="tocs403response"></a>

```json
{
  "title": "Wrong authentication - You are not authorised to access this resource"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "access_token": "accessToken",
  "api_key": "abcd1234",
  "applications": [
    "applicationId"
  ],
  "external_id": "12345678",
  "name": "name",
  "provider": "messenger"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|The provider access token (only for `messenger`)|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be one of `messenger, viber_service_msg, whatsapp`).|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|messenger|
|provider|viber_service_msg|
|provider|whatsapp|

<h2 id="tocS_GetAllAccountResponse">GetAllAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallaccountresponse"></a>
<a id="schema_GetAllAccountResponse"></a>
<a id="tocSgetallaccountresponse"></a>
<a id="tocsgetallaccountresponse"></a>

```json
{
  "access_token": "myAccessToken",
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The provider access token|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `messenger`).|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `viber_service_msg`).|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `whatsapp`).|

<h2 id="tocS_MessengerAccountResponse">MessengerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessengeraccountresponse"></a>
<a id="schema_MessengerAccountResponse"></a>
<a id="tocSmessengeraccountresponse"></a>
<a id="tocsmessengeraccountresponse"></a>

```json
{
  "access_token": "myAccessToken",
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "messenger"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The provider access token|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `messenger`).|

<h2 id="tocS_VSMAccountResponse">VSMAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemavsmaccountresponse"></a>
<a id="schema_VSMAccountResponse"></a>
<a id="tocSvsmaccountresponse"></a>
<a id="tocsvsmaccountresponse"></a>

```json
{
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "viber_service_msg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `viber_service_msg`).|

<h2 id="tocS_WAAccountResponse">WAAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemawaaccountresponse"></a>
<a id="schema_WAAccountResponse"></a>
<a id="tocSwaaccountresponse"></a>
<a id="tocswaaccountresponse"></a>

```json
{
  "api_key": "abcd1234",
  "applications": [
    "optionalApplicationId"
  ],
  "external_id": "12345678",
  "name": "optionalName",
  "provider": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|The external api key for this account|
|applications|[string]|false|none|The array of associated application ids|
|external_id|string|true|none|The external identifier for this account|
|name|string|false|none|The account name|
|provider|string|true|none|The provider (will be `whatsapp`).|
