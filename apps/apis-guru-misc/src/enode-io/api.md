<h1 id="enode-api">Enode API v1.3.10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Download [OpenAPI 3.0 Specification](/OpenAPI-Enode-v1.4.0.json)

Download [Postman Collection](/Postman-Enode-v1.4.0.json)

The Enode API is designed to make smart charging applications easy to develop. We provide an abstraction layer that reduces the complexity when extracting vehicle data and sending commands to vehicles from a variety of manufacturers.

The API has a RESTful architecture and utilizes OAuth2 authorization.

We are always available to handle any issues or just answer your questions. Feel free to reach out on post@enode.io


## Registration for API access
In order to use the API you will need a `client_id` and `client_secret`. Please contact us if you are interested in using our API in production, and we will provide these credentials.

# Authorization
Vehicle / hardware access via the Enode API is granted to your application by the User in a standard OAuth `Authorization Code` flow.

> The authorization scheme documented here is the recommended approach for most situations. However, it is also possible to user other OAuth flows, non-confidential clients, and temporary users. Please feel free to contact us if you have any questions about your use-case or the integration of your existing infrastructure.

### Preparation: Configure your OAuth client

Because Enode API implements the OAuth 2.0 spec completely and without modifications, you can avoid rolling your own OAuth client implementation and instead use a well-supported and battle-tested implementation. This is strongly recommended. Information on available OAuth clients for many languages is available [here](https://oauth.net/code/)

To configure your chosen OAuth client, you will need these details:
- Your `client_id`
- Your `client_secret`
- Authorization URL: `https://link.test.enode.io/oauth2/auth`
- Token URL: `https://link.test.enode.io/oauth2/token`

```javascript
// Node.js + openid-client example
const enodeIssuer = await Issuer.discover('https://link.test.enode.io');
const client = new enodeIssuer.Client({
  client_id: 'xyz',
  client_secret: 'shhhhh',
  redirect_uris: ['http://localhost:5000/callback'],
  response_types: ['code'],
});
```


### Preparation: Obtain a client access token via OAuth Client Credentials Grant
Your OAuth client will have a method for using the `OAuth 2.0 Client Credentials Grant` to obtain an access token.

```javascript
// Node.js + openid-client example
const clientAccessToken = await client.grant({grant_type: "client_credentials"});
```

This access token belongs to your client and is used for administrative actions, such as the next step.

This token should be cached by your server and reused until it expires, at which point your server should request a new one.



### Step 1. Generate an Enode Link session for your User and launch the OAuth flow

When your User indicates that they want to connect their hardware to your app, your server must call [Link User](#operation/postUsersUseridLink) to generate an Enode Link session for your User. The User ID can be any string that uniquely identifies the User, but it is recommended that you use the primary key by which you identify the User within your application.

Example Request:
```
POST /users/{userId}/link HTTP/1.1
Authorization: Bearer {access_token}
{
  "forceLanguage": "nb-NO",
  "vendor": "Tesla",
}
```

Example Response:
```
{
    "linkState": "ZjE2MzMxMGFiYmU4MzcxOTU1ZmRjMTU5NGU2ZmE4YTU3NjViMzIwY2YzNG",
}
```

The returned linkState must be stored by your server, attached to the session of the authenticated user for which it was generated.

Your OAuth client will provide a method to construct an authorization URL for your user. That method will require these details:
- Redirect URI - The URI to which your user should be redirected when the Oauth flow completes
- Scope - The OAuth scope(s) you wish to request access to (see list of valid values [here](#section/Authentication/AccessTokenBearer))
- State - The value of `linkState` from the request above

To launch the OAuth flow, send your user to the authorization URL constructed by your OAuth client. This can be done in an embedded webview within a native iOS/Android app, or in the system's default browser.

```javascript
// Node.js + openid-client + express example

// Construct an OAuth authorization URL
const authorizationUrl = client.authorizationUrl({
  scope: "offline_access all",
  state: linkState
});

// Redirect user to authorization URL
res.redirect(authorizationUrl);
```


### Step 2. User grants consent
In the Link UI webapp the user will follow 3 steps:

1. Choose their hardware from a list of supported manufacturers (EVs and charging boxes). For certain EV makes it will be necessary to also select a charge box.
2. For each selection, the user will be presented with the login screen for that particular hardware. The user must successfully log in.
3. A summary of the requested scopes will be presented to the user. The user must choose whether to grant access to your application.


### Step 3. OAuth flow concludes with a callback
When the user has completed their interactions, they will be redirected to the `Redirect URI` you provided in Step 1, with various metadata appended as query parameters.

Your OAuth client will have a method to parse and validate that metadata, and fetch the granted access and refresh tokens.

Among that metadata will be a `state` value - you must verify that it is equal to the `linkState` value persisted in Step 1, as [a countermeasure against CSRF attacks](https://tools.ietf.org/html/rfc6819#section-4.4.1.8).

```javascript
// Node.js + openid-client + express example

// Fetch linkState from user session
const linkState = get(req, 'session.linkState');

// Parse relevant parameters from request URL
const params = client.callbackParams(req);

// Exchange authorization code for access and refresh tokens
// In this example, openid-client does the linkState validation check for us
const tokenSet = await client.oauthCallback('http://localhost:5000/callback', params, {state: linkState})
```

With the access token in hand, you can now access resources on behalf of the user.


# Errors And Problems
## OAuth Authorization Request

When the User has completed the process of allowing/denying access in Enode Link, they will be redirected to your configured redirect URI. If something has gone wrong, query parameters `error` and `error_description` will be set as documented in [Section 4.1.2.1](https://tools.ietf.org/html/rfc6749#section-4.1.2.1) of the OAuth 2.0 spec:

|error                      |error_description|
|---------------------------|-----------------|
|invalid_request            |The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.|
|unauthorized_client        |The client is not authorized to request an authorization code using this method.|
|access_denied              |The resource owner or authorization server denied the request.|
|unsupported_response_type  |The authorization server does not support obtaining an authorization code using this method.|
|invalid_scope              |The requested scope is invalid, unknown, or malformed.|
|server_error               |The authorization server encountered an unexpected condition that prevented it from fulfilling the request.|
|temporarily_unavailable    |The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server|

Example:
```
https://website.example/oauth_callback?state=e0a86fe5&error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request.
```


## Errors when accessing a User's resources

When using an `access_token` to access a User's resources, the following HTTP Status Codes in the 4XX range may be encountered:

|HTTP Status Code           |Explanation      |
|---------------------------|-----------------|
|400 Bad Request            |The request payload has failed schema validation / parsing
|401 Unauthorized           |Authentication details are missing or invalid
|403 Forbidden              |Authentication succeeded, but the authenticated user doesn't have access to the resource
|404 Not Found              |A non-existent resource is requested
|429 Too Many Requests      |Rate limiting by the vendor has prevented us from completing the request


In all cases, an [RFC7807 Problem Details](https://tools.ietf.org/html/rfc7807) body is returned to aid in debugging.

Example:
```
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json
{
  "type": "https://docs.enode.io/problems/payload-validation-error",
  "title": "Payload validation failed",
  "detail": "\"authorizationRequest.scope\" is required",
}
```

Base URLs:

* <a href="https://api.test.enode.io/">https://api.test.enode.io/</a>

# Authentication

- oAuth2 authentication. A `ClientAccessToken` access token is obtained via the [OAuth 2.0 Client Credentials grant](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/)

When accessing protected resources, the token should be provided in a Bearer authorization header as specified in [RFC6750](https://tools.ietf.org/html/rfc6750#section-2.1)

Example:
```
DELETE /users/xyz HTTP/1.1
Authorization: Bearer yQ89j3LAnqBx42gWGUl4v-jxoS1mfTAH3Q52WTGrExw.zgRcRrE6KRKUgVQEVr2Pifub8Z7trCZrobKjvhGIOTI
```

You can read more about obtaining this token in the [Authorization](#section/Authorization) section

    - Flow: clientCredentials
    - Token URL = [https://link.test.enode.io/oauth2/token](https://link.test.enode.io/oauth2/token)

- oAuth2 authentication. A `UserAccessToken` access token is obtained via the [OAuth 2.0 Authorization Code grant](https://www.oauth.com/oauth2-servers/access-tokens/authorization-code-request/)

This token represents the authorization for the bearer to access resources on behalf of the user who authorized it. This authorization is further limited by scopes. When relevant, the `scope` required by each endpoint is listed in the documentation for that endpoint.

When accessing protected resources, the token should be provided in a Bearer authorization header as specified in [RFC6750](https://tools.ietf.org/html/rfc6750#section-2.1)

Example:
```
GET /vehicles HTTP/1.1
Authorization: Bearer yQ89j3LAnqBx42gWGUl4v-jxoS1mfTAH3Q52WTGrExw.zgRcRrE6KRKUgVQEVr2Pifub8Z7trCZrobKjvhGIOTI
```

You can read more about obtaining this token in the [Authorization](#section/Authorization) section

    - Flow: authorizationCode
    - Authorization URL = [https://link.test.enode.io/oauth2/auth](https://link.test.enode.io/oauth2/auth)
    - Token URL = [https://link.test.enode.io/oauth2/token](https://link.test.enode.io/oauth2/token)

|Scope|Scope Description|
|---|---|
|all|Read and write all resources|
|charger:charge_state|Read charger charge state|
|charger:information|Read charger information|
|charging_location|Read & write user's charging locations|
|control:charger:charging|Control charger charging|
|control:vehicle:charging|Control vehicle charging|
|vehicle:charge_state|Read vehicle charge state|
|vehicle:information|Read vehicle information|
|vehicle:location|Read vehicle location|
|vehicle:odometer|Read vehicle odometer|
|vehicle:smart_charging_policy|Read & write vehicle smart charging policy|

<h1 id="enode-api-charging-locations">Charging Locations</h1>

Charging Locations are created by a user to denote locations where they pay for the power used to charge their vehicle. Smart Charging is active at these locations only.

## List Charging Locations

<a id="opIdgetCharginglocations"></a>

> Code samples

```bash
curl https://example.com/charging-locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /charging-locations`

Returns a list of Charging Locations registered to the User

> Example responses

> 200 Response

```json
[
  {
    "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
    "latitude": 59.911491,
    "longitude": 10.757933,
    "name": "Home"
  }
]
```

<h3 id="list-charging-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="list-charging-locations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string(uuid)|true|read-only|Charging Location ID|
|» latitude|number|false|none|Latitude in degrees|
|» longitude|number|false|none|Longitude in degrees|
|» name|string|false|none|User-supplied name for the Charging Location|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charging_location )
</aside>

## Create Charging Location

<a id="opIdpostCharginglocations"></a>

> Code samples

```bash
curl https://example.com/charging-locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "latitude": 59.911491,
    "longitude": 10.757933,
    "name": "Home"
  }'
```

`POST /charging-locations`

> Body parameter

```json
{
  "latitude": 59.911491,
  "longitude": 10.757933,
  "name": "Home"
}
```

<h3 id="create-charging-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» latitude|body|number|false|Latitude in degrees|
|» longitude|body|number|false|Longitude in degrees|
|» name|body|string|false|User-supplied name for the Charging Location|

> Example responses

> 201 Response

```json
{
  "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
  "latitude": 59.911491,
  "longitude": 10.757933,
  "name": "Home"
}
```

<h3 id="create-charging-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<h3 id="create-charging-location-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|Charging Location ID|
|latitude|number|false|none|Latitude in degrees|
|longitude|number|false|none|Longitude in degrees|
|name|string|false|none|User-supplied name for the Charging Location|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charging_location )
</aside>

## Get Charging Location

<a id="opIdgetCharginglocationsCharginglocationid"></a>

> Code samples

```bash
curl https://example.com/charging-locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /charging-locations/{chargingLocationId}`

<h3 id="get-charging-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chargingLocationId|path|string|true|ID of the Charging Location|

> Example responses

> 200 Response

```json
{
  "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
  "latitude": 59.911491,
  "longitude": 10.757933,
  "name": "Home"
}
```

<h3 id="get-charging-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-charging-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|Charging Location ID|
|latitude|number|false|none|Latitude in degrees|
|longitude|number|false|none|Longitude in degrees|
|name|string|false|none|User-supplied name for the Charging Location|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charging_location )
</aside>

## Update Charging Location

<a id="opIdputCharginglocationsCharginglocationid"></a>

> Code samples

```bash
curl https://example.com/charging-locations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "latitude": 59.911491,
    "longitude": 10.757933,
    "name": "Home"
  }'
```

`PUT /charging-locations/{chargingLocationId}`

Updates a charging location with new configuration

> Body parameter

```json
{
  "latitude": 59.911491,
  "longitude": 10.757933,
  "name": "Home"
}
```

<h3 id="update-charging-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chargingLocationId|path|string|true|ID of the Charging Location|
|body|body|object|false|none|
|» latitude|body|number|false|Latitude in degrees|
|» longitude|body|number|false|Longitude in degrees|
|» name|body|string|false|User-supplied name for the Charging Location|

> Example responses

> 200 Response

```json
{
  "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
  "latitude": 59.911491,
  "longitude": 10.757933,
  "name": "Home"
}
```

<h3 id="update-charging-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="update-charging-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|Charging Location ID|
|latitude|number|false|none|Latitude in degrees|
|longitude|number|false|none|Longitude in degrees|
|name|string|false|none|User-supplied name for the Charging Location|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charging_location )
</aside>

## Delete Charging Location

<a id="opIddeleteCharginglocationsCharginglocationid"></a>

> Code samples

```bash
curl https://example.com/charging-locations/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /charging-locations/{chargingLocationId}`

Delete a Charging Location

<h3 id="delete-charging-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chargingLocationId|path|string|true|ID of the Charging Location|

<h3 id="delete-charging-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charging_location )
</aside>

<h1 id="enode-api-me">Me</h1>

The `Me` endpoint returns metadata about the authenticated User.

## Get My User

<a id="opIdgetMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.

> Example responses

> 200 Response

```json
{
  "id": "123456789-ABc",
  "linkedVendors": [
    {
      "isValid": true,
      "vendor": "TESLA"
    }
  ]
}
```

<h3 id="get-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-my-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|linkedVendors|[object]|false|none|none|
|» isValid|boolean|false|none|Whether the provided credentials are currently valid. A `false` value here indicates that a credential has become invalidated, and [Link User](#operation/postUsersUseridLink) should be used to get new credentials from this user.|
|» vendor|string|false|none|Vendor ID|

#### Enumerated Values

|Property|Value|
|---|---|
|» vendor|TESLA|
|» vendor|BMW|
|» vendor|AUDI|
|» vendor|VOLKSWAGEN|
|» vendor|HYUNDAI|
|» vendor|PEUGEOT|
|» vendor|NISSAN|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken
</aside>

## Disconnect Vendor

<a id="opIddisconnectVendor"></a>

> Code samples

```bash
curl https://example.com/me/vendors/TESLA \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /me/vendors/{vendor}`

Disconnect a single Vendor from the User's account.

All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.

<h3 id="disconnect-vendor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor|path|string|true|Vendor to be unlinked|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vendor|TESLA|
|vendor|BMW|
|vendor|AUDI|
|vendor|VOLKSWAGEN|
|vendor|HYUNDAI|
|vendor|PEUGEOT|
|vendor|NISSAN|

<h3 id="disconnect-vendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken
</aside>

<h1 id="enode-api-chargers">Chargers</h1>

## List Chargers

<a id="opIdgetChargers"></a>

> Code samples

```bash
curl https://example.com/chargers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chargers`

<h3 id="list-chargers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field[]|query|[string]|false|An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState` <br><br>By default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field[]|chargeState|
|field[]|location|

> Example responses

> 200 Response

```json
[
  {
    "chargeState": {
      "chargeRate": 40.1,
      "isCharging": false,
      "isPluggedIn": true
    },
    "id": "string",
    "information": {
      "brand": "Easee",
      "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
      "model": "Home",
      "year": 2020
    },
    "isReachable": true,
    "lastSeen": "1970-01-01"
  }
]
```

<h3 id="list-chargers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="list-chargers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» chargeState|object|false|none|none|
|» » chargeRate|number|false|none|The current charge rate in kW.<br><br>This property is only available when the charger is actively charging a vehicle, and is `null` any other time.|
|» » isCharging|boolean|false|none|Current charging status|
|» » isPluggedIn|boolean|false|none|Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)|
|» id|string|false|none|Charger ID|
|» information|object|false|none|Descriptive information about the Charger|
|» » brand|string|false|none|Charger brand|
|» » id|string|false|none|Charger ID|
|» » model|string|false|none|Charger model|
|» » year|integer|false|none|Charger production year|
|» isReachable|boolean|false|none|Is the charger currently reachable?|
|» lastSeen|string(date)|false|none|The last time the charger was successfully communicated with|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charger:charge_state ), UserAccessToken ( Scopes: charger:information )
</aside>

## Get Charger

<a id="opIdgetCharger"></a>

> Code samples

```bash
curl https://example.com/chargers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chargers/{chargerId}`

<h3 id="get-charger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chargerId|path|string|true|ID of the Charger|
|field[]|query|[string]|false|An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState` <br><br>By default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field[]|chargeState|
|field[]|location|

> Example responses

> 200 Response

```json
{
  "chargeState": {
    "chargeRate": 40.1,
    "isCharging": false,
    "isPluggedIn": true
  },
  "id": "string",
  "information": {
    "brand": "Easee",
    "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
    "model": "Home",
    "year": 2020
  },
  "isReachable": true,
  "lastSeen": "1970-01-01"
}
```

<h3 id="get-charger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-charger-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargeState|object|false|none|none|
|» chargeRate|number|false|none|The current charge rate in kW.<br><br>This property is only available when the charger is actively charging a vehicle, and is `null` any other time.|
|» isCharging|boolean|false|none|Current charging status|
|» isPluggedIn|boolean|false|none|Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)|
|id|string|false|none|Charger ID|
|information|object|false|none|Descriptive information about the Charger|
|» brand|string|false|none|Charger brand|
|» id|string|false|none|Charger ID|
|» model|string|false|none|Charger model|
|» year|integer|false|none|Charger production year|
|isReachable|boolean|false|none|Is the charger currently reachable?|
|lastSeen|string(date)|false|none|The last time the charger was successfully communicated with|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: charger:charge_state ), UserAccessToken ( Scopes: charger:information )
</aside>

## Control Charging

<a id="opIdcontrolChargerCharging"></a>

> Code samples

```bash
curl https://example.com/chargers/string/charging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "START"
  }'
```

`POST /chargers/{chargerId}/charging`

Instruct the charger to start or stop charging

> Body parameter

```json
{
  "action": "START"
}
```

<h3 id="control-charging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chargerId|path|string|true|ID of the Charger|
|body|body|object|false|none|
|» action|body|string|true|Charging action to perform|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|START|
|» action|STOP|

<h3 id="control-charging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: control:charger:charging )
</aside>

<h1 id="enode-api-service-health">Service Health</h1>

## Check Service Readiness

<a id="opIdgetHealthReady"></a>

> Code samples

```bash
curl https://example.com/health/ready \
  -H 'Accept: application/json'
```

`GET /health/ready`

Gets the combined health status of the service and all functionalities and dependencies.

> Example responses

> 503 Response

```json
"string"
```

<h3 id="check-service-readiness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|All functionalities are operating nominally|None|
|503|Service Unavailable|At least one functionality of the system is not operating nominally|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Check Available Vendors

<a id="opIdgetHealthVendors"></a>

> Code samples

```bash
curl https://example.com/health/vendors \
  -H 'Accept: application/json'
```

`GET /health/vendors`

List the supported vendors and their current status.

> Example responses

> 200 Response

```json
[
  {
    "displayName": "Tesla",
    "status": "READY",
    "vendor": "TESLA"
  },
  {
    "displayName": "BMW",
    "status": "READY",
    "vendor": "BMW"
  },
  {
    "displayName": "Audi",
    "status": "READY",
    "vendor": "AUDI"
  }
]
```

<h3 id="check-available-vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="check-available-vendors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» displayName|string|false|none|Displayable name of the Vendor|
|» status|string|false|none|Ready-state of the Vendor|
|» vendor|string|false|none|Vendor ID|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|READY|
|» status|ELEVATED_ERROR_RATE|
|» status|OUTAGE|
|» vendor|TESLA|
|» vendor|BMW|
|» vendor|AUDI|
|» vendor|VOLKSWAGEN|
|» vendor|HYUNDAI|
|» vendor|PEUGEOT|
|» vendor|NISSAN|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="enode-api-statistics">Statistics</h1>

## Get User Charging Statistics

<a id="opIdgetStatisticsCharging"></a>

> Code samples

```bash
curl 'https://example.com/statistics/charging?startDate=1970-01-01' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statistics/charging`

Returns a normalized timeseries of statistics about power consumption and price for the User.

<h3 id="get-user-charging-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resolution|query|string|false|The unit of time the data will be cut into before aggregate statistics are applied. For instance if you choose DAY, then each item in the returned array will cover 1 day.|
|startDate|query|string(date)|true|Earliest date to include in the response|
|endDate|query|string(date)|false|Latest date to include in the response (defaults to current date/time)|
|vehicleId|query|string|false|Filter statistics to only include this vehicle|
|chargingLocationId|query|string|false|Filter statistics to only include this charging location|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resolution|HOUR|
|resolution|DAY|
|resolution|WEEK|
|resolution|MONTH|
|resolution|YEAR|

> Example responses

> 200 Response

```json
[
  {
    "costSum": 3.14,
    "date": "2021-01-19T09:37:36.845Z",
    "kw": {
      "max": 78,
      "mean": 61,
      "min": 0
    },
    "kwhSum": 120,
    "price": {
      "max": 14.4,
      "mean": 14.1,
      "min": 13.8
    }
  }
]
```

<h3 id="get-user-charging-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-user-charging-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» costSum|number|true|none|Total cost in <CURRENCY>|
|» date|string(date)|true|none|The start date of this sample within the timeseries|
|» kw|object|true|none|Aggregate statistics for charge rate in kW|
|» » max|number|true|none|none|
|» » mean|number|true|none|none|
|» » min|number|true|none|none|
|» kwhSum|number|true|none|Total power consumption in kWh|
|» price|object|true|none|Aggregate statistics for power price (<CURRENCY> per kWh)|
|» » max|number|true|none|none|
|» » mean|number|true|none|none|
|» » min|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken
</aside>

<h1 id="enode-api-user-management">User Management</h1>

## Unlink User

<a id="opIddeleteUsersUserid"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{userId}`

Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens

<h3 id="unlink-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the User|

<h3 id="unlink-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientAccessToken
</aside>

## Deauthorize User

<a id="opIddeleteUsersUseridAuthorization"></a>

> Code samples

```bash
curl https://example.com/users/string/authorization \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{userId}/authorization`

Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.

All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.

No webhook events will be generated for a deauthorized user.

<h3 id="deauthorize-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the User|

<h3 id="deauthorize-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientAccessToken
</aside>

## Link User

<a id="opIdpostUsersUseridLink"></a>

> Code samples

```bash
curl https://example.com/users/string/link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "forceLanguage": "nb-NO",
    "linkMultiple": false,
    "userImage": "https://cdn.website.example/user/x/profile.jpg",
    "userName": "Ola",
    "vendor": "TESLA"
  }'
```

`POST /users/{userId}/link`

Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.

> Body parameter

```json
{
  "forceLanguage": "nb-NO",
  "linkMultiple": false,
  "userImage": "https://cdn.website.example/user/x/profile.jpg",
  "userName": "Ola",
  "vendor": "TESLA"
}
```

<h3 id="link-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the User|
|body|body|object|false|none|
|» forceLanguage|body|string|false|BCP47 language code - Force the Link UI to prefer the specified language. If omitted, the UI will default to the user's browser default language.|
|» linkMultiple|body|boolean|false|Allow multiple car vendors to be linked during a single Link session. Automatically disabled if `vendor` is set.|
|» userImage|body|string|false|Full URL to an image that the user would recognize as being their own. This URL is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.|
|» userName|body|string|false|The User's first name, full name, or other identifier that the user would recognize as being their own. This name is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.|
|» vendor|body|string|false|Automatically skip to the credential input screen for this vendor, skipping the Vendor selection menu.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» vendor|TESLA|
|» vendor|BMW|
|» vendor|AUDI|
|» vendor|VOLKSWAGEN|
|» vendor|HYUNDAI|
|» vendor|PEUGEOT|
|» vendor|NISSAN|

> Example responses

> 200 Response

```json
{
  "linkState": "ZjE2MzMxMGFiYmU4MzcxOTU1ZmRjMTU5NGU2ZmE4YTU3NjViMzIwY2YzNG"
}
```

<h3 id="link-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="link-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkState|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientAccessToken
</aside>

<h1 id="enode-api-vehicles">Vehicles</h1>

## List Vehicles

<a id="opIdgetVehicles"></a>

> Code samples

```bash
curl https://example.com/vehicles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles`

<h3 id="list-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field[]|query|[object]|false|An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` <br><br>By default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.|

> Example responses

> 200 Response

```json
[
  {
    "chargeState": {
      "batteryCapacity": 73.21,
      "batteryLevel": "38",
      "chargeLimit": 80,
      "chargeRate": 40.1,
      "chargeTimeRemaining": 319,
      "isCharging": false,
      "isChargingReasons": [
        "SMART_CHARGING_DELAY"
      ],
      "isPluggedIn": true,
      "range": "127.5"
    },
    "chargingLocationId": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
    "id": "string",
    "information": {
      "brand": "Tesla",
      "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
      "model": "Model S P85",
      "year": 2020
    },
    "isReachable": true,
    "lastSeen": "1970-01-01",
    "location": {
      "lastUpdated": "2020-04-07T17:04:26Z",
      "latitude": 59.911491,
      "longitude": 10.757933
    },
    "odometer": {
      "distance": 24650,
      "lastUpdated": "2020-01-07T16:21:76Z"
    },
    "smartChargingPolicy": {
      "deadline": "08:00",
      "isEnabled": true
    }
  }
]
```

<h3 id="list-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="list-vehicles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» chargeState|object|false|none|none|
|» » batteryCapacity|number|false|none|Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.|
|» » batteryLevel|number|false|none|Remaining battery in percent|
|» » chargeLimit|number|false|none|Charge limit, as a percent of `batteryCapacity`.|
|» » chargeRate|number|false|none|The current charge rate in kW.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|» » chargeTimeRemaining|number|false|none|Estimated time until the current charging intent is completed, in minutes.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|» » isCharging|boolean|false|none|Current charging status of the vehicle|
|» » isChargingReasons|[string]|false|none|Array of string constants that explain why the car is or is not charging. May contain multiple values.<br><br>**Any:**<br>- DEFAULT - the car is not being controlled by Enode<br><br>**Not Charging:**<br>- NOT_PLUGGED_IN - because the car is not plugged into a charger<br>- FULLY_CHARGED - because the car is fully charged<br>- MANUALLY_STOPPED - because the car has been manually commanded to stop charging<br>- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower<br><br>**Charging:**<br>- MANUALLY_STARTED - because the car has been manually commanded to start charging<br>- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge<br>- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline|
|» » isPluggedIn|boolean|false|none|Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)|
|» » range|number|false|none|Estimated remaining kilometers|
|» chargingLocationId|string|true|none|Id of the charging location the vehicle is currently positioned at (if any)|
|» id|string|true|none|Vehicle ID|
|» information|object|false|none|Descriptive information about the Vehicle|
|» » brand|string|false|none|Vehicle brand|
|» » id|string|false|none|Vehicle ID|
|» » model|string|false|none|Vehicle model|
|» » year|integer|false|none|Vehicle production year|
|» isReachable|boolean|true|none|Is the vehicle currently reachable?|
|» lastSeen|string(date)|true|none|The last time vehicle was successfully communicated with|
|» location|object|false|none|Vehicle's GPS coordinates with timestamp|
|» » lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received location|
|» » latitude|number|false|none|Latitude in degrees|
|» » longitude|number|false|none|Longitude in degrees|
|» odometer|object|false|none|Vehicle's odometer with timestamp|
|» » distance|number|false|none|Odometer in kilometers|
|» » lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received odometer update|
|» smartChargingPolicy|object|false|none|none|
|» » deadline|string|false|none|The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC|
|» » isEnabled|boolean|false|none|When enabled, this vehicle's charging status may be controlled by Smart Charging.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » isChargingReasons|{"override":true}|
|» » isChargingReasons|DEFAULT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:location ), UserAccessToken ( Scopes: vehicle:odometer ), UserAccessToken ( Scopes: vehicle:information ), UserAccessToken ( Scopes: vehicle:charge_state ), UserAccessToken ( Scopes: vehicle:smart_charging_policy )
</aside>

## Get Vehicle

<a id="opIdgetVehiclesVehicleid"></a>

> Code samples

```bash
curl https://example.com/vehicles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}`

<h3 id="get-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|
|field[]|query|[string]|false|An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` <br><br>By default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field[]|smartChargingPolicy|
|field[]|chargeState|
|field[]|location|
|field[]|information|
|field[]|odometer|

> Example responses

> 200 Response

```json
{
  "chargeState": {
    "batteryCapacity": 73.21,
    "batteryLevel": "38",
    "chargeLimit": 80,
    "chargeRate": 40.1,
    "chargeTimeRemaining": 319,
    "isCharging": false,
    "isChargingReasons": [
      "SMART_CHARGING_DELAY"
    ],
    "isPluggedIn": true,
    "range": "127.5"
  },
  "chargingLocationId": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
  "id": "string",
  "information": {
    "brand": "Tesla",
    "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
    "model": "Model S P85",
    "year": 2020
  },
  "isReachable": true,
  "lastSeen": "1970-01-01",
  "location": {
    "lastUpdated": "2020-04-07T17:04:26Z",
    "latitude": 59.911491,
    "longitude": 10.757933
  },
  "odometer": {
    "distance": 24650,
    "lastUpdated": "2020-01-07T16:21:76Z"
  },
  "smartChargingPolicy": {
    "deadline": "08:00",
    "isEnabled": true
  }
}
```

<h3 id="get-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-vehicle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargeState|object|false|none|none|
|» batteryCapacity|number|false|none|Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.|
|» batteryLevel|number|false|none|Remaining battery in percent|
|» chargeLimit|number|false|none|Charge limit, as a percent of `batteryCapacity`.|
|» chargeRate|number|false|none|The current charge rate in kW.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|» chargeTimeRemaining|number|false|none|Estimated time until the current charging intent is completed, in minutes.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|» isCharging|boolean|false|none|Current charging status of the vehicle|
|» isChargingReasons|[string]|false|none|Array of string constants that explain why the car is or is not charging. May contain multiple values.<br><br>**Any:**<br>- DEFAULT - the car is not being controlled by Enode<br><br>**Not Charging:**<br>- NOT_PLUGGED_IN - because the car is not plugged into a charger<br>- FULLY_CHARGED - because the car is fully charged<br>- MANUALLY_STOPPED - because the car has been manually commanded to stop charging<br>- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower<br><br>**Charging:**<br>- MANUALLY_STARTED - because the car has been manually commanded to start charging<br>- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge<br>- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline|
|» isPluggedIn|boolean|false|none|Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)|
|» range|number|false|none|Estimated remaining kilometers|
|chargingLocationId|string|true|none|Id of the charging location the vehicle is currently positioned at (if any)|
|id|string|true|none|Vehicle ID|
|information|object|false|none|Descriptive information about the Vehicle|
|» brand|string|false|none|Vehicle brand|
|» id|string|false|none|Vehicle ID|
|» model|string|false|none|Vehicle model|
|» year|integer|false|none|Vehicle production year|
|isReachable|boolean|true|none|Is the vehicle currently reachable?|
|lastSeen|string(date)|true|none|The last time vehicle was successfully communicated with|
|location|object|false|none|Vehicle's GPS coordinates with timestamp|
|» lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received location|
|» latitude|number|false|none|Latitude in degrees|
|» longitude|number|false|none|Longitude in degrees|
|odometer|object|false|none|Vehicle's odometer with timestamp|
|» distance|number|false|none|Odometer in kilometers|
|» lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received odometer update|
|smartChargingPolicy|object|false|none|none|
|» deadline|string|false|none|The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC|
|» isEnabled|boolean|false|none|When enabled, this vehicle's charging status may be controlled by Smart Charging.|

#### Enumerated Values

|Property|Value|
|---|---|
|» isChargingReasons|{"override":true}|
|» isChargingReasons|DEFAULT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:location ), UserAccessToken ( Scopes: vehicle:odometer ), UserAccessToken ( Scopes: vehicle:information ), UserAccessToken ( Scopes: vehicle:charge_state ), UserAccessToken ( Scopes: vehicle:smart_charging_policy )
</aside>

## Get Vehicle Charge State

<a id="opIdgetVehicleChargestate"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/charge-state \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}/charge-state`

<h3 id="get-vehicle-charge-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

> Example responses

> 200 Response

```json
{
  "batteryCapacity": 73.21,
  "batteryLevel": "38",
  "chargeLimit": 80,
  "chargeRate": 40.1,
  "chargeTimeRemaining": 319,
  "isCharging": false,
  "isChargingReasons": [
    "SMART_CHARGING_DELAY"
  ],
  "isPluggedIn": true,
  "range": "127.5"
}
```

<h3 id="get-vehicle-charge-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-vehicle-charge-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batteryCapacity|number|false|none|Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.|
|batteryLevel|number|false|none|Remaining battery in percent|
|chargeLimit|number|false|none|Charge limit, as a percent of `batteryCapacity`.|
|chargeRate|number|false|none|The current charge rate in kW.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|chargeTimeRemaining|number|false|none|Estimated time until the current charging intent is completed, in minutes.<br><br>This property is only available when the vehicle is charging, and is `null` any other time.|
|isCharging|boolean|false|none|Current charging status of the vehicle|
|isChargingReasons|[string]|false|none|Array of string constants that explain why the car is or is not charging. May contain multiple values.<br><br>**Any:**<br>- DEFAULT - the car is not being controlled by Enode<br><br>**Not Charging:**<br>- NOT_PLUGGED_IN - because the car is not plugged into a charger<br>- FULLY_CHARGED - because the car is fully charged<br>- MANUALLY_STOPPED - because the car has been manually commanded to stop charging<br>- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower<br><br>**Charging:**<br>- MANUALLY_STARTED - because the car has been manually commanded to start charging<br>- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge<br>- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline|
|isPluggedIn|boolean|false|none|Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)|
|range|number|false|none|Estimated remaining kilometers|

#### Enumerated Values

|Property|Value|
|---|---|
|isChargingReasons|{"override":true}|
|isChargingReasons|DEFAULT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:charge_state )
</aside>

## Start / Stop Charging

<a id="opIdpostVehiclesVehicleidCharging"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/charging \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /vehicles/{vehicleId}/charging`

Instruct the vehicle to start or stop charging. 

#### Precedence over smart charging
If the vehicle is at a charging location where smart charging is activated:
- a request to `start` charging will override smart charging and charging will stay on until fully charged. 
- a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.

The smart charging settings are not altered by these actions.

<h3 id="start-stop-charging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

<h3 id="start-stop-charging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: control:vehicle:charging )
</aside>

## Get Vehicle Information

<a id="opIdgetVehiclesVehicleidInformation"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/information \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}/information`

<h3 id="get-vehicle-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

> Example responses

> 200 Response

```json
{
  "brand": "Tesla",
  "id": "8d90101b-3f2f-462a-bbb4-1ed320d33bbe",
  "model": "Model S P85",
  "year": 2020
}
```

<h3 id="get-vehicle-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Descriptive information about the Vehicle|Inline|

<h3 id="get-vehicle-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|Vehicle brand|
|id|string|false|none|Vehicle ID|
|model|string|false|none|Vehicle model|
|year|integer|false|none|Vehicle production year|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:information )
</aside>

## Get Vehicle Location

<a id="opIdgetVehiclesVehicleidLocation"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/location \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}/location`

<h3 id="get-vehicle-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

> Example responses

> 200 Response

```json
{
  "lastUpdated": "2020-04-07T17:04:26Z",
  "latitude": 59.911491,
  "longitude": 10.757933
}
```

<h3 id="get-vehicle-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vehicle's GPS coordinates with timestamp|Inline|

<h3 id="get-vehicle-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received location|
|latitude|number|false|none|Latitude in degrees|
|longitude|number|false|none|Longitude in degrees|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:location )
</aside>

## Get Vehicle Odometer

<a id="opIdgetVehiclesVehicleidOdometer"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/odometer \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}/odometer`

<h3 id="get-vehicle-odometer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

> Example responses

> 200 Response

```json
{
  "distance": 24650,
  "lastUpdated": "2020-01-07T16:21:76Z"
}
```

<h3 id="get-vehicle-odometer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vehicle's odometer with timestamp|Inline|

<h3 id="get-vehicle-odometer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|number|false|none|Odometer in kilometers|
|lastUpdated|string(date)|false|none|ISO8601 UTC timestamp of last received odometer update|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:odometer )
</aside>

## Get Vehicle Smart Charging Policy

<a id="opIdgetVehiclesVehicleidSmartchargingpolicy"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/smart-charging-policy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vehicles/{vehicleId}/smart-charging-policy`

<h3 id="get-vehicle-smart-charging-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|

> Example responses

> 200 Response

```json
{
  "deadline": "08:00",
  "isEnabled": true
}
```

<h3 id="get-vehicle-smart-charging-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="get-vehicle-smart-charging-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deadline|string|false|none|The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC|
|isEnabled|boolean|false|none|When enabled, this vehicle's charging status may be controlled by Smart Charging.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:smart_charging_policy )
</aside>

## Update Vehicle Smart Charging Policy

<a id="opIdputVehiclesVehicleidSmartchargingpolicy"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/smart-charging-policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deadline": "08:00",
    "isEnabled": true
  }'
```

`PUT /vehicles/{vehicleId}/smart-charging-policy`

Updates the Smart Charging settings for a vehicle

> Body parameter

```json
{
  "deadline": "08:00",
  "isEnabled": true
}
```

<h3 id="update-vehicle-smart-charging-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|
|body|body|object|false|none|
|» deadline|body|string|false|The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC|
|» isEnabled|body|boolean|false|When enabled, this vehicle's charging status may be controlled by Smart Charging.|

> Example responses

> 200 Response

```json
{
  "deadline": "08:00",
  "isEnabled": true
}
```

<h3 id="update-vehicle-smart-charging-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="update-vehicle-smart-charging-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deadline|string|false|none|The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC|
|isEnabled|boolean|false|none|When enabled, this vehicle's charging status may be controlled by Smart Charging.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:smart_charging_policy )
</aside>

## Start Watching Vehicle

<a id="opIdpostVehiclesVehicleidWatch"></a>

> Code samples

```bash
curl https://example.com/vehicles/string/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": [
      "LOCATION",
      "BATTERY_LEVEL"
    ]
  }'
```

`POST /vehicles/{vehicleId}/watch`

Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.

Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)

The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.


> Body parameter

```json
{
  "properties": [
    "LOCATION",
    "BATTERY_LEVEL"
  ]
}
```

<h3 id="start-watching-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vehicleId|path|string|true|ID of the Vehicle|
|body|body|object|false|none|
|» properties|body|string|false|Array of vehicle properties to watch|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» properties|BATTERY_LEVEL|
|» properties|RANGE|
|» properties|IS_PLUGGED_IN|
|» properties|IS_CHARGING|
|» properties|IS_CHARGING_REASONS|
|» properties|LOCATION|

> Example responses

> 200 Response

```json
{
  "properties": [
    "LOCATION",
    "BATTERY_LEVEL"
  ]
}
```

<h3 id="start-watching-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|Inline|

<h3 id="start-watching-vehicle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|string|false|none|Array of vehicle properties to watch|

#### Enumerated Values

|Property|Value|
|---|---|
|properties|BATTERY_LEVEL|
|properties|RANGE|
|properties|IS_PLUGGED_IN|
|properties|IS_CHARGING|
|properties|IS_CHARGING_REASONS|
|properties|LOCATION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserAccessToken ( Scopes: all ), UserAccessToken ( Scopes: vehicle:location ), UserAccessToken ( Scopes: vehicle:charge_state )
</aside>

<h1 id="enode-api-webhooks-">Webhooks 🧪</h1>

## Update Firehose Webhook

<a id="opIdputWebhooksFirehose"></a>

> Code samples

```bash
curl https://example.com/webhooks/firehose \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "secret": "0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm",
    "url": "https://brainpower.co/enode-webhooks/firehose"
  }'
```

`PUT /webhooks/firehose`

> Body parameter

```json
{
  "secret": "0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm",
  "url": "https://brainpower.co/enode-webhooks/firehose"
}
```

<h3 id="update-firehose-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» secret|body|string|false|A cryptographically secure secret, generated and provided by your client|
|» url|body|string|false|The HTTPS url to which Enode should POST the event payload when a watched property changes|

<h3 id="update-firehose-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientAccessToken
</aside>

## Test Firehose Webhook

<a id="opIdpostWebhooksFirehoseTest"></a>

> Code samples

```bash
curl https://example.com/webhooks/firehose/test \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/firehose/test`

Trigger a test payload to be sent to your configured Firehose Webhook url.

> Example responses

> default Response

```json
"string"
```

<h3 id="test-firehose-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Successful|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientAccessToken
</aside>
