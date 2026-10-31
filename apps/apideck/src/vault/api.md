<h1 id="vault-api">Vault API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Vault API 👋

When you're looking to connect to an API, the first step is authentication.

Vault helps you handle OAuth flows, store API keys, and refresh access tokens from users (called consumers in Apideck).

## Base URL

The base URL for all API requests is `https://unify.apideck.com`

## Get Started

To use the Apideck APIs, you need to sign up for free at [https://app.apideck.com/signup](). Follow the steps below to get started.

- [Create a free account.](https://app.apideck.com/signup)
- Go to the [Dashboard](https://app.apideck.com/unify/unified-apis/dashboard).
- Get your API key and the application ID.
- Select and configure the integrations you want to make available to your users. Through the Unify dashboard, you can configure which connectors you want to support as integrations.
- Retrieve the client_id and client_secret for the integration you want to activate (Only needed for OAuth integrations).
- Soon, you can skip the previous step and use the Apideck sandbox credentials to get you started instead (upcoming)
- Register the redirect URI for the example app (https://unify.apideck.com/vault/callback) in the list of redirect URIs under your app's settings
- Use the [publishing guides](/app-listing-requirements) to get your integration listed across app marketplaces.

### Hosted Vault

Hosted Vault (vault.apideck.com) is a no-code solution, so you don't need to build your own UI to handle the integration settings and authentication.

![Hosted Vault - Integrations portal](https://github.com/apideck-samples/integration-settings/raw/master/public/img/vault.png)

Behind the scenes, Hosted Vault implements the Vault API endpoints and handles the following features for your customers:

- Add a connection
- Handle the OAuth flow
- Configure connection settings per integration
- Manage connections
- Discover and propose integration options
- Search for integrations (upcoming)
- Give integration suggestions based on provided metadata (email or website) when creating the session (upcoming)

To use Hosted Vault, you will need to first [**create a session**](https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate). This can be achieved by making a POST request to the Vault API to create a valid session for a user, hereafter referred to as the consumer ID.

Example using curl:

```
curl -X POST https://unify.apideck.com/vault/sessions
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <your-api-key>"
    -H "X-APIDECK-CONSUMER-ID: <consumer-id>"
    -H "X-APIDECK-APP-ID: <application-id>"
    -d '{"consumer_metadata": { "account_name" : "Sample", "user_name": "Sand Box", "email": "sand@box.com", "image": "https://unavatar.now.sh/jake" }, "theme": { "vault_name": "Intercom", "primary_color": "#286efa", "sidepanel_background_color": "#286efa","sidepanel_text_color": "#FFFFFF", "favicon": "https://res.cloudinary.com/apideck/icons/intercom" }}'
```

### Vault API

_Beware, this is strategy takes more time to implement in comparison to Hosted Vault._

If you are building your integration settings UI manually, you can call the Vault API directly.

The Vault API is for those who want to completely white label the in-app integrations overview and authentication experience. All the available endpoints are listed below.

Through the API, your customers authenticate directly in your app, where Vault will still take care of redirecting to the auth provider and back to your app.

If you're already storing access tokens, we will help you migrate through our Vault Migration API (upcoming).

## Domain model

At its core, a domain model creates a web of interconnected entities.

Our domain model contains five main entity types: Consumer (user, account, team, machine), Application, Connector, Integration, and Connection.

## Connection state

The connection state is computed based on the connection flow below.

![](https://developers.apideck.com/api-references/vault/connection-flow.png)

## Unify and Proxy integration

The only thing you need to use the Unify APIs and Proxy is the consumer id; thereafter, Vault will do the look-up in the background to handle the token injection before performing the API call(s).

## Headers

Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.

| Name                  | Type    | Required | Description |
| --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-apideck-app-id      | String  | Yes      | The id of your Unify application. Available at https://app.apideck.com/api-keys. |
| x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. |
| x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes. |

## Sandbox (upcoming)

The sandbox is pre-loaded with data similar to a real-life integrations setup. You can use the preconfigured OAauth configured connectors for testing purposes and can skip this step by using the Apideck sandbox credentials to get you started.

## Guides

- [How to build an integrations UI with Vault](https://github.com/apideck-samples/integration-settings)
- How to configure the OAuth credentials for integration providers (COMING SOON)

## FAQ

**What purpose does Vault serve? Can I just handle the authentication and access token myself?**
You can store everything yourself, but that defeats the purpose of using Apideck Unify. Handling tokens for multiple providers can quickly become very complex.

### Is my data secure?

Vault employs data minimization, therefore only requesting the minimum amount of scopes needed to perform an API request.

### How do I migrate existing data?

Using our migration API, you can migrate the access tokens and accounts to Apideck Vault. (COMING SOON)

### Can I use Vault in combination with existing integrations?

Yes, you can. The flexibility of Unify allows you to quickly the use cases you need while keeping a gradual migration path based on your timeline and requirements.

### How does Vault work for Apideck Ecosystem customers?

Once logged in, pick your ecosystem; on the left-hand side of the screen, you'll have the option to create an application underneath the Unify section.

### How to integrate Apideck Vault

This section covers everything you need to know to authenticate your customers through Vault.
Vault provides **three auth strategies** to use API tokens from your customers:

- Vault API
- Hosted Vault
- Apideck Ecosystem _(COMING SOON)_

You can also opt to bypass Vault and still take care of authentication flows yourself. Make sure to put the right safeguards in place to protect your customers' tokens and other sensitive data.

### What auth types does Vault support?

What auth strategies does Vault handle? We currently support three flows so your customers can activate an integration.

#### API keys

For Services supporting the API key strategy, you can use Hosted Vault will need to provide an in-app form where users can configure their API keys provided by the integration service.

#### OAuth 2.0

##### Authorization Code Grant Type Flow

Vault handles the complete Authorization Code Grant Type Flow for you. This flow only supports browser-based (passive) authentication because most identity providers don't allow entering a username and password to be entered into applications that they don't own.

Certain connectors require an OAuth redirect authentication flow, where the end-user is redirected to the provider's website or mobile app to authenticate.

This is being handled by the `/authorize` endpoint.

#### Basic auth

Basic authentication is a simple authentication scheme built into the HTTP protocol. The required fields to complete basic auth are handled by Hosted Vault or by updating the connection through the Vault API below.

Base URLs:

* <a href="https://unify.apideck.com">https://unify.apideck.com</a> - Production server

Email: <a href="mailto:hello@apideck.com">hello@apideck.com</a> 
Web: <a href="https://developers.apideck.com">https://developers.apideck.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://developers.apideck.com">Apideck Developer Docs</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **Authorization**, in: header. To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. 
To change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.
Your Apideck application_id can also be found on the same page.

Authenticate your API requests by including your test or live secret API key in the request header. 

- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`
- Application id header: `x-apideck-app-id: <your-apideck-app-id>`

You should use the public keys on the SDKs and the secret keys to authenticate API requests.

**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.

Learn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key

Go to Unify to grab your API KEY https://app.apideck.com/unify/api-keys

* API Key (applicationId)
    - Parameter Name: **x-apideck-app-id**, in: header. The ID of your Unify application

<h1 id="vault-api-sessions">Sessions</h1>

A session represents an authorized session for a consumer. A session is a JWT token that is valid for a short time (1h by default). Use this session token to open Hosted Vault or Vault JS for a consumer.

## Create Session

<a id="opIdsessionsCreate"></a>

> Code samples

```bash
curl https://example.com/vault/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "consumer_metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "custom_consumer_settings": {
      "feature_flag_1": true,
      "tax_rates": [
        {
          "id": "6",
          "label": "6%"
        },
        {
          "id": "21",
          "label": "21%"
        }
      ]
    },
    "redirect_uri": "https://mysaas.com/dashboard",
    "settings": {
      "allow_actions": [
        "delete"
      ],
      "auto_redirect": false,
      "hide_guides": false,
      "hide_resource_settings": false,
      "isolation_mode": false,
      "sandbox_mode": false,
      "session_length": "30m",
      "show_logs": true,
      "show_sidebar": true,
      "show_suggestions": false,
      "unified_apis": [
        "crm"
      ]
    },
    "theme": {
      "favicon": "https://res.cloudinary.com/apideck/icons/intercom",
      "logo": "https://res.cloudinary.com/apideck/icons/intercom",
      "primary_color": "#286efa",
      "privacy_url": "https://compliance.apideck.com/privacy-policy",
      "sidepanel_background_color": "#286efa",
      "sidepanel_text_color": "#FFFFFF",
      "terms_url": "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
      "vault_name": "Intercom"
    }
  }'
```

`POST /vault/sessions`

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
URL to allow temporary access to manage their integrations and settings.

Note: This is a short lived token that will expire after 1 hour (TTL: 3600).


> Body parameter

```json
{
  "consumer_metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  },
  "custom_consumer_settings": {
    "feature_flag_1": true,
    "tax_rates": [
      {
        "id": "6",
        "label": "6%"
      },
      {
        "id": "21",
        "label": "21%"
      }
    ]
  },
  "redirect_uri": "https://mysaas.com/dashboard",
  "settings": {
    "allow_actions": [
      "delete"
    ],
    "auto_redirect": false,
    "hide_guides": false,
    "hide_resource_settings": false,
    "isolation_mode": false,
    "sandbox_mode": false,
    "session_length": "30m",
    "show_logs": true,
    "show_sidebar": true,
    "show_suggestions": false,
    "unified_apis": [
      "crm"
    ]
  },
  "theme": {
    "favicon": "https://res.cloudinary.com/apideck/icons/intercom",
    "logo": "https://res.cloudinary.com/apideck/icons/intercom",
    "primary_color": "#286efa",
    "privacy_url": "https://compliance.apideck.com/privacy-policy",
    "sidepanel_background_color": "#286efa",
    "sidepanel_text_color": "#FFFFFF",
    "terms_url": "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
    "vault_name": "Intercom"
  }
}
```

<h3 id="create-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|body|body|[Session](#schemasession)|false|Additional redirect uri and/or consumer metadata|
|» consumer_metadata|body|[ConsumerMetadata](#schemaconsumermetadata)|false|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|
|» custom_consumer_settings|body|object|false|Custom consumer settings that are passed as part of the session.|
|» redirect_uri|body|string|false|The URL to redirect the user to after the session has been configured.|
|» settings|body|object|false|Settings to change the way the Vault is displayed.|
|» » allow_actions|body|[string]|false|Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.<br>Available actions are: `delete`, `disconnect`, `reauthorize` and `disable`.<br>Empty array will hide all actions. By default all actions are visible.|
|» » auto_redirect|body|boolean|false|Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`.|
|» » hide_guides|body|boolean|false|Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`.|
|» » hide_resource_settings|body|boolean|false|A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user.|
|» » isolation_mode|body|boolean|false|Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items.|
|» » sandbox_mode|body|boolean|false|Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment.|
|» » session_length|body|string|false|The duration of time the session is valid for (maximum 1 week).|
|» » show_logs|body|boolean|false|Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`.|
|» » show_sidebar|body|boolean|false|Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`.|
|» » show_suggestions|body|boolean|false|Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`.|
|» » unified_apis|body|[[UnifiedApiId](#schemaunifiedapiid)]|false|Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs.|
|» theme|body|object|false|Theming options to change the look and feel of Vault.|
|» » favicon|body|string|false|The URL to the favicon to use for Vault.|
|» » logo|body|string|false|The URL to the logo to use for Vault.|
|» » primary_color|body|string|false|The primary color to use for Vault.|
|» » privacy_url|body|string|false|The URL to the privacy policy that will be shown in the sidebar.|
|» » sidepanel_background_color|body|string|false|The background color to use for the sidebar.|
|» » sidepanel_text_color|body|string|false|The text color to use for the sidebar.|
|» » terms_url|body|string|false|The URL to the terms and conditions that will be shown in the sidebar.|
|» » vault_name|body|string|false|The name that will be shown in the sidebar.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » allow_actions|delete|
|» » allow_actions|disconnect|
|» » allow_actions|reauthorize|
|» » allow_actions|disable|
|» » unified_apis|accounting|
|» » unified_apis|ats|
|» » unified_apis|calendar|
|» » unified_apis|crm|
|» » unified_apis|csp|
|» » unified_apis|customer-support|
|» » unified_apis|ecommerce|
|» » unified_apis|email|
|» » unified_apis|email-marketing|
|» » unified_apis|expense-management|
|» » unified_apis|file-storage|
|» » unified_apis|form|
|» » unified_apis|hris|
|» » unified_apis|lead|
|» » unified_apis|payroll|
|» » unified_apis|pos|
|» » unified_apis|procurement|
|» » unified_apis|project-management|
|» » unified_apis|script|
|» » unified_apis|sms|
|» » unified_apis|spreadsheet|
|» » unified_apis|team-messaging|
|» » unified_apis|issue-tracking|
|» » unified_apis|time-registration|
|» » unified_apis|transactional-email|
|» » unified_apis|vault|

> Example responses

> 200 Response

```json
{
  "data": {
    "session_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj",
    "session_uri": "http://vault.apideck.com/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="create-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session created|[CreateSessionResponse](#schemacreatesessionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="vault-api-connections">Connections</h1>

A connection represents an account of a consumer for a connector. For example a consumer with ID "test-consumer" has a Salesforce connection for the CRM API. Connections securely save credentials and settings for a connector.

## Authorize

<a id="opIdconnectionsAuthorize"></a>

> Code samples

```bash
curl 'https://example.com/vault/authorize/pipedrive/dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX?state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk&redirect_uri=http%3A%2F%2Fexample.com%2Fintegrations' \
  -H 'Accept: application/json'
```

`GET /vault/authorize/{service_id}/{application_id}`

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__

Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.

Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.

Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.


<h3 id="authorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|Service ID of the resource to return|
|application_id|path|string|true|Application ID of the resource to return|
|state|query|string|true|An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.|
|redirect_uri|query|string|true|URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.|
|scope|query|[string]|false|One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.|

> Example responses

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="authorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|redirect|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Callback

<a id="opIdconnectionsCallback"></a>

> Code samples

```bash
curl 'https://example.com/vault/callback?state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk&code=g0ZGZmNjVmOWI' \
  -H 'Accept: application/json'
```

`GET /vault/callback`

This endpoint gets called after the triggering the authorize flow.

Callback links need a state and code parameter to verify the validity of the request.


<h3 id="callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.|
|code|query|string|true|An authorization code from the connector which Apideck Vault will later exchange for an access token.|

> Example responses

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|callback|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all connections

<a id="opIdconnectionsAll"></a>

> Code samples

```bash
curl https://example.com/vault/connections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/connections`

This endpoint includes all the configured integrations and contains the required assets
to build an integrations page where your users can install integrations.
OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.


<h3 id="get-all-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|api|query|string|false|Scope results to Unified API|
|configured|query|boolean|false|Scopes results to connections that have been configured or not|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "auth_type": "oauth2",
      "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
      "configurable_resources": [
        "opportunities",
        "companies",
        "contacts",
        "leads"
      ],
      "configuration": [
        {
          "defaults": [
            {
              "id": "ProductInterest",
              "options": [
                {
                  "label": "General Channel",
                  "value": "general"
                }
              ],
              "target": "custom_fields",
              "value": "GC5000 series"
            }
          ],
          "resource": "leads"
        }
      ],
      "created_at": 1615563533390,
      "enabled": true,
      "form_fields": [
        {
          "custom_field": false,
          "disabled": false,
          "id": "instance_url",
          "label": "Instance url",
          "mask": false,
          "placeholder": "",
          "required": true,
          "sensitive": false,
          "type": "text",
          "value": "https://eu28.salesforce.com"
        },
        {
          "custom_field": false,
          "disabled": false,
          "id": "api_key",
          "label": "API Key",
          "mask": false,
          "placeholder": "",
          "required": true,
          "sensitive": true,
          "type": "text",
          "value": "123455677"
        }
      ],
      "has_guide": true,
      "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      "id": "crm+salesforce",
      "integration_state": "configured",
      "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      "metadata": {
        "account": {
          "id": "c01458a5-7276-41ce-bc19-639906b0450a",
          "name": "My Company"
        },
        "plan": "enterprise"
      },
      "name": "Salesforce",
      "oauth_grant_type": "authorization_code",
      "resource_schema_support": [
        "leads"
      ],
      "resource_settings_support": [
        "leads"
      ],
      "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
      "service_id": "salesforce",
      "settings": {
        "api_key": "12345xxxxxx",
        "instance_url": "https://eu28.salesforce.com"
      },
      "settings_required_for_authorization": [
        "client_id",
        "client_secret"
      ],
      "state": "authorized",
      "status": "live",
      "subscriptions": [
        {
          "created_at": "2020-10-01T12:00:00.000Z",
          "downstream_event_types": [
            "contacts.CREATED"
          ],
          "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
          "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
          "unify_event_types": [
            "crm.contact.created"
          ]
        }
      ],
      "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
      "unified_api": "crm",
      "updated_at": 1616662325753,
      "validation_support": true,
      "website": "https://www.salesforce.com"
    }
  ],
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-all-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connections|[GetConnectionsResponse](#schemagetconnectionsresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get connection

<a id="opIdconnectionsOne"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/connections/{unified_api}/{service_id}`

Get a connection

<h3 id="get-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection|[GetConnectionResponse](#schemagetconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create connection

<a id="opIdconnectionsAdd"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "enabled": true,
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    }
  }'
```

`POST /vault/connections/{unified_api}/{service_id}`

Create an authorized connection


> Body parameter

```json
{
  "configuration": [
    {
      "defaults": [
        {
          "id": "ProductInterest",
          "options": [
            {
              "label": "General Channel",
              "value": "general"
            }
          ],
          "value": "GC5000 series"
        }
      ],
      "resource": "leads"
    }
  ],
  "enabled": true,
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "settings": {
    "api_key": "12345xxxxxx",
    "instance_url": "https://eu28.salesforce.com"
  }
}
```

<h3 id="create-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|
|body|body|[Connection](#schemaconnection)|true|Fields that need to be persisted on the resource|
|» configuration|body|[object]|false|none|
|» » defaults|body|[object]|false|none|
|» » » id|body|string|false|none|
|» » » options|body|[[FormFieldOption](#schemaformfieldoption)]|false|none|
|» » » value|body|string \| integer \| number \| boolean \| [string \| integer \| number]|false|none|
|» » » » *anyOf*|body|string|false|none|
|» » » » *anyOf*|body|integer|false|none|
|» » » » *anyOf*|body|number|false|none|
|» » » » *anyOf*|body|boolean|false|none|
|» » » » *anyOf*|body|[string \| integer \| number]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|integer|false|none|
|» *anyOf*|body|number|false|none|
|» » resource|body|string|false|none|
|» enabled|body|boolean|false|Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.|
|» metadata|body|object \| null|false|Attach your own consumer specific metadata|
|» settings|body|object \| null|false|Connection settings. Values will persist to `form_fields` with corresponding id|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 201
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="create-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection created|[CreateConnectionResponse](#schemacreateconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletes a connection

<a id="opIdconnectionsDelete"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /vault/connections/{unified_api}/{service_id}`

Deletes a connection

<h3 id="deletes-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|

> Example responses

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="deletes-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Resource deleted|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update connection

<a id="opIdconnectionsUpdate"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "enabled": true,
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    }
  }'
```

`PATCH /vault/connections/{unified_api}/{service_id}`

Update a connection

> Body parameter

```json
{
  "configuration": [
    {
      "defaults": [
        {
          "id": "ProductInterest",
          "options": [
            {
              "label": "General Channel",
              "value": "general"
            }
          ],
          "value": "GC5000 series"
        }
      ],
      "resource": "leads"
    }
  ],
  "enabled": true,
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "settings": {
    "api_key": "12345xxxxxx",
    "instance_url": "https://eu28.salesforce.com"
  }
}
```

<h3 id="update-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|
|body|body|[Connection](#schemaconnection)|true|Fields that need to be updated on the resource|
|» configuration|body|[object]|false|none|
|» » defaults|body|[object]|false|none|
|» » » id|body|string|false|none|
|» » » options|body|[[FormFieldOption](#schemaformfieldoption)]|false|none|
|» » » value|body|string \| integer \| number \| boolean \| [string \| integer \| number]|false|none|
|» » » » *anyOf*|body|string|false|none|
|» » » » *anyOf*|body|integer|false|none|
|» » » » *anyOf*|body|number|false|none|
|» » » » *anyOf*|body|boolean|false|none|
|» » » » *anyOf*|body|[string \| integer \| number]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|integer|false|none|
|» *anyOf*|body|number|false|none|
|» » resource|body|string|false|none|
|» enabled|body|boolean|false|Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.|
|» metadata|body|object \| null|false|Attach your own consumer specific metadata|
|» settings|body|object \| null|false|Connection settings. Values will persist to `form_fields` with corresponding id|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="update-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection updated|[UpdateConnectionResponse](#schemaupdateconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Import connection

<a id="opIdconnectionsImport"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "credentials": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"
    },
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "settings": {
      "instance_url": "https://eu28.salesforce.com"
    }
  }'
```

`POST /vault/connections/{unified_api}/{service_id}/import`

Import an authorized connection.


> Body parameter

```json
{
  "credentials": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"
  },
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "settings": {
    "instance_url": "https://eu28.salesforce.com"
  }
}
```

<h3 id="import-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|
|body|body|[ConnectionImportData](#schemaconnectionimportdata)|true|Fields that need to be persisted on the resource|
|» credentials|body|object|false|none|
|» » access_token|body|string|false|Access token|
|» » expires_in|body|integer \| null|false|The number of seconds until the token expires. If omitted the token will be queued for refresh.|
|» » issued_at|body|string(date-time) \| null|false|The datetime at which the token was issued. If omitted the token will be queued for refresh.|
|» » refresh_token|body|string|true|The refresh token can be used to obtain a new access token.|
|» metadata|body|object \| null|false|Attach your own consumer specific metadata|
|» settings|body|object \| null|false|Connection settings. Values will persist to `form_fields` with corresponding id|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 201
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="import-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection created|[CreateConnectionResponse](#schemacreateconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get Access Token

<a id="opIdconnectionsToken"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{}'
```

`POST /vault/connections/{unified_api}/{service_id}/token`

Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.

Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.


> Body parameter

```json
{}
```

<h3 id="get-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection|[GetConnectionResponse](#schemagetconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get resource settings

<a id="opIdconnectionSettingsAll"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive/leads/config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/connections/{unified_api}/{service_id}/{resource}/config`

This endpoint returns custom settings and their defaults required by connection for a given resource.


<h3 id="get-resource-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|unified_api|path|string|true|Unified API|
|service_id|path|string|true|Service ID of the resource to return|
|resource|path|string|true|Resource Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-resource-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection|[GetConnectionResponse](#schemagetconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update settings

<a id="opIdconnectionSettingsUpdate"></a>

> Code samples

```bash
curl https://example.com/vault/connections/crm/pipedrive/leads/config \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "enabled": true,
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    }
  }'
```

`PATCH /vault/connections/{unified_api}/{service_id}/{resource}/config`

Update default values for a connection's resource settings

> Body parameter

```json
{
  "configuration": [
    {
      "defaults": [
        {
          "id": "ProductInterest",
          "options": [
            {
              "label": "General Channel",
              "value": "general"
            }
          ],
          "value": "GC5000 series"
        }
      ],
      "resource": "leads"
    }
  ],
  "enabled": true,
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "settings": {
    "api_key": "12345xxxxxx",
    "instance_url": "https://eu28.salesforce.com"
  }
}
```

<h3 id="update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|service_id|path|string|true|Service ID of the resource to return|
|unified_api|path|string|true|Unified API|
|resource|path|string|true|Resource Name|
|body|body|[Connection](#schemaconnection)|true|Fields that need to be updated on the resource|
|» configuration|body|[object]|false|none|
|» » defaults|body|[object]|false|none|
|» » » id|body|string|false|none|
|» » » options|body|[[FormFieldOption](#schemaformfieldoption)]|false|none|
|» » » value|body|string \| integer \| number \| boolean \| [string \| integer \| number]|false|none|
|» » » » *anyOf*|body|string|false|none|
|» » » » *anyOf*|body|integer|false|none|
|» » » » *anyOf*|body|number|false|none|
|» » » » *anyOf*|body|boolean|false|none|
|» » » » *anyOf*|body|[string \| integer \| number]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|integer|false|none|
|» *anyOf*|body|number|false|none|
|» » resource|body|string|false|none|
|» enabled|body|boolean|false|Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.|
|» metadata|body|object \| null|false|Attach your own consumer specific metadata|
|» settings|body|object \| null|false|Connection settings. Values will persist to `form_fields` with corresponding id|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection updated|[UpdateConnectionResponse](#schemaupdateconnectionresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Revoke connection

<a id="opIdconnectionsRevoke"></a>

> Code samples

```bash
curl 'https://example.com/vault/revoke/pipedrive/dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX?state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk&redirect_uri=http%3A%2F%2Fexample.com%2Fintegrations' \
  -H 'Accept: application/json'
```

`GET /vault/revoke/{service_id}/{application_id}`

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__

Use this endpoint to revoke an existing OAuth connector.

Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.

Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.


<h3 id="revoke-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|Service ID of the resource to return|
|application_id|path|string|true|Application ID of the resource to return|
|state|query|string|true|An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.|
|redirect_uri|query|string|true|URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.|

> Example responses

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="revoke-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|redirect|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vault-api-consumers">Consumers</h1>

A consumer represents an account or user in your system. All connections to connectors are scoped to a consumer.

## Get all consumers

<a id="opIdconsumersAll"></a>

> Code samples

```bash
curl https://example.com/vault/consumers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/consumers`

This endpoint includes all application consumers, along with an aggregated count of requests made.


<h3 id="get-all-consumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "aggregated_request_count": 101,
      "application_id": "1111",
      "consumer_id": "test_consumer_id",
      "created": "2021-05-07T12:55:42.242Z",
      "metadata": {
        "account_name": "SpaceX",
        "email": "elon@musk.com",
        "image": "https://www.spacex.com/static/images/share.jpg",
        "user_name": "Elon Musk"
      },
      "modified": "2021-05-07T12:55:42.242Z",
      "request_count_updated": "2021-05-07T12:55:42.242Z",
      "request_counts": {
        "proxy": 10,
        "unify": 100,
        "vault": 21
      },
      "services": [
        "salesforce",
        "stripe"
      ]
    }
  ],
  "links": {
    "current": "https://unify.apideck.com/crm/companies",
    "next": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-all-consumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumers|[GetConsumersResponse](#schemagetconsumersresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create consumer

<a id="opIdconsumersAdd"></a>

> Code samples

```bash
curl https://example.com/vault/consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "consumer_id": "test_consumer_id",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    }
  }'
```

`POST /vault/consumers`

Create a consumer

> Body parameter

```json
{
  "consumer_id": "test_consumer_id",
  "metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  }
}
```

<h3 id="create-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|body|body|[Consumer](#schemaconsumer)|true|none|
|» consumer_id|body|[ConsumerId](#schemaconsumerid)|true|Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.|
|» metadata|body|[ConsumerMetadata](#schemaconsumermetadata)|false|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|

> Example responses

> 200 Response

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="create-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumer created|[CreateConsumerResponse](#schemacreateconsumerresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get consumer

<a id="opIdconsumersOne"></a>

> Code samples

```bash
curl https://example.com/vault/consumers/test_user_id \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/consumers/{consumer_id}`

Consumer detail including their aggregated counts with the connections they have authorized.


<h3 id="get-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|consumer_id|path|string|true|ID of the consumer to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumer|[GetConsumerResponse](#schemagetconsumerresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete consumer

<a id="opIdconsumersDelete"></a>

> Code samples

```bash
curl https://example.com/vault/consumers/test_user_id \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /vault/consumers/{consumer_id}`

Delete consumer and all their connections, including credentials.

<h3 id="delete-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|consumer_id|path|string|true|ID of the consumer to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "consumer_id": "test_consumer_id"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="delete-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumer deleted|[DeleteConsumerResponse](#schemadeleteconsumerresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update consumer

<a id="opIdconsumersUpdate"></a>

> Code samples

```bash
curl https://example.com/vault/consumers/test_user_id \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    }
  }'
```

`PATCH /vault/consumers/{consumer_id}`

Update consumer metadata such as name and email.

> Body parameter

```json
{
  "metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  }
}
```

<h3 id="update-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|consumer_id|path|string|true|ID of the consumer to return|
|body|body|[UpdateConsumerRequest](#schemaupdateconsumerrequest)|true|none|
|» metadata|body|[ConsumerMetadata](#schemaconsumermetadata)|false|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|

> Example responses

> 200 Response

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="update-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumer updated|[UpdateConsumerResponse](#schemaupdateconsumerresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Consumer request counts

<a id="opIdconsumerRequestCountsAll"></a>

> Code samples

```bash
curl 'https://example.com/vault/consumers/test_user_id/stats?start_datetime=2021-05-01T12%3A00%3A00.000Z&end_datetime=2021-05-30T12%3A00%3A00.000Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /vault/consumers/{consumer_id}/stats`

Get consumer request counts within a given datetime range.


<h3 id="consumer-request-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|consumer_id|path|string|true|ID of the consumer to return|
|start_datetime|query|string|true|Scopes results to requests that happened after datetime|
|end_datetime|query|string|true|Scopes results to requests that happened before datetime|

> Example responses

> 200 Response

```json
{
  "data": {
    "aggregated_request_count": 40,
    "application_id": "1111",
    "consumer_id": "test_user_id",
    "end_datetime": "2021-05-10T12:00:00.000Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "start_datetime": "2021-05-01T12:00:00.000Z"
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="consumer-request-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumers Request Counts within Date Range|[ConsumerRequestCountsInDateRangeResponse](#schemaconsumerrequestcountsindaterangeresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="vault-api-logs">Logs</h1>

A log represents a request made for a given consumer. Logs include requests made to unified APIs, connectors and the Vault API.

## Get all consumer request logs

<a id="opIdlogsAll"></a>

> Code samples

```bash
curl https://example.com/vault/logs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -H 'x-apideck-consumer-id: string'
```

`GET /vault/logs`

This endpoint includes all consumer request logs.


<h3 id="get-all-consumer-request-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|filter|query|[LogsFilter](#schemalogsfilter)|false|Filter results|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "api_style": "REST",
      "base_url": "unify.apideck.com",
      "child_request": false,
      "consumer_id": "test-consumer",
      "duration": 2220.379304,
      "error_message": "Refresh token is invalid",
      "execution": 2248,
      "has_children": false,
      "http_method": "GET",
      "id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      "latency": 27.620695999999953,
      "operation": {
        "id": "connectionsAll",
        "name": "Get All Connections"
      },
      "parent_id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      "path": "/vault/connections",
      "sandbox": false,
      "service": {
        "id": "apideck-vault",
        "name": "Apideck Vault"
      },
      "source_ip": "94.227.131.238",
      "status_code": 200,
      "success": true,
      "timestamp": "2021-07-12T14:26:17.420Z",
      "unified_api": "vault"
    }
  ],
  "links": {
    "current": "https://unify.apideck.com/crm/companies",
    "next": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

> 400 Response

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

> 401 Response

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

> 402 Response

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

> 404 Response

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

> default Response

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

<h3 id="get-all-consumer-request-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs|[GetLogsResponse](#schemagetlogsresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|422|Unprocessable Entity|Unprocessable|[UnprocessableResponse](#schemaunprocessableresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_ApplicationId">ApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationId"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX"
```

ID of your Apideck Application

<h2 id="tocS_AuthType">AuthType</h2>
<!-- backwards compatibility -->
<a id="schemaauthtype"></a>
<a id="schema_AuthType"></a>
<a id="tocSauthtype"></a>
<a id="tocsauthtype"></a>

```json
"oauth2"
```

Type of authorization used by the connector

<h2 id="tocS_BadRequestResponse">BadRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestresponse"></a>
<a id="schema_BadRequestResponse"></a>
<a id="tocSbadrequestresponse"></a>
<a id="tocsbadrequestresponse"></a>

```json
{
  "detail": "Missing property foobar",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#requestvalidationerror",
  "status_code": 400,
  "type_name": "RequestValidationError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| object|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "auth_type": "oauth2",
  "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
  "configurable_resources": [
    "opportunities",
    "companies",
    "contacts",
    "leads"
  ],
  "configuration": [
    {
      "defaults": [
        {
          "id": "ProductInterest",
          "options": [
            {
              "label": "General Channel",
              "value": "general"
            }
          ],
          "target": "custom_fields",
          "value": "GC5000 series"
        }
      ],
      "resource": "leads"
    }
  ],
  "created_at": 1615563533390,
  "enabled": true,
  "form_fields": [
    {
      "custom_field": false,
      "disabled": false,
      "id": "instance_url",
      "label": "Instance url",
      "mask": false,
      "placeholder": "",
      "required": true,
      "sensitive": false,
      "type": "text",
      "value": "https://eu28.salesforce.com"
    },
    {
      "custom_field": false,
      "disabled": false,
      "id": "api_key",
      "label": "API Key",
      "mask": false,
      "placeholder": "",
      "required": true,
      "sensitive": true,
      "type": "text",
      "value": "123455677"
    }
  ],
  "has_guide": true,
  "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
  "id": "crm+salesforce",
  "integration_state": "configured",
  "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "name": "Salesforce",
  "oauth_grant_type": "authorization_code",
  "resource_schema_support": [
    "leads"
  ],
  "resource_settings_support": [
    "leads"
  ],
  "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
  "service_id": "salesforce",
  "settings": {
    "api_key": "12345xxxxxx",
    "instance_url": "https://eu28.salesforce.com"
  },
  "settings_required_for_authorization": [
    "client_id",
    "client_secret"
  ],
  "state": "authorized",
  "status": "live",
  "subscriptions": [
    {
      "created_at": "2020-10-01T12:00:00.000Z",
      "downstream_event_types": [
        "contacts.CREATED"
      ],
      "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
      "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
      "unify_event_types": [
        "crm.contact.created"
      ]
    }
  ],
  "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
  "unified_api": "crm",
  "updated_at": 1616662325753,
  "validation_support": true,
  "website": "https://www.salesforce.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_type|[AuthType](#schemaauthtype)|false|read-only|Type of authorization used by the connector|
|authorize_url|string \| null|false|read-only|The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.|
|configurable_resources|[string]|false|read-only|none|
|configuration|[object]|false|none|none|
|created_at|number|false|read-only|none|
|enabled|boolean|false|none|Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.|
|form_fields|[[FormField](#schemaformfield)]|false|read-only|The settings that are wanted to create a connection.|
|has_guide|boolean|false|read-only|Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).|
|icon|string|false|read-only|A visual icon of the connection, that will be shown in the Vault|
|id|string|false|read-only|The unique identifier of the connection.|
|integration_state|[IntegrationState](#schemaintegrationstate)|false|read-only|The current state of the Integration.|
|logo|string|false|read-only|The logo of the connection, that will be shown in the Vault|
|metadata|object \| null|false|none|Attach your own consumer specific metadata|
|name|string|false|read-only|The name of the connection|
|oauth_grant_type|[OAuthGrantType](#schemaoauthgranttype)|false|read-only|OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types|
|resource_schema_support|[string]|false|read-only|none|
|resource_settings_support|[string]|false|read-only|none|
|revoke_url|string \| null|false|read-only|The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.|
|service_id|string|false|read-only|The ID of the service this connection belongs to.|
|settings|object \| null|false|none|Connection settings. Values will persist to `form_fields` with corresponding id|
|settings_required_for_authorization|[string]|false|read-only|List of settings that are required to be configured on integration before authorization can occur|
|state|[ConnectionState](#schemaconnectionstate)|false|read-only|[Connection state flow](#section/Connection-state)|
|status|string|false|read-only|Status of the connection.|
|subscriptions|[[WebhookSubscription](#schemawebhooksubscription)]|false|read-only|none|
|tag_line|string|false|read-only|none|
|unified_api|string|false|read-only|The unified API category where the connection belongs to.|
|updated_at|number \| null|false|read-only|none|
|validation_support|boolean|false|read-only|none|
|website|string|false|read-only|The website URL of the connection|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2|
|auth_type|apiKey|
|auth_type|basic|
|auth_type|custom|
|auth_type|none|
|integration_state|disabled|
|integration_state|needs_configuration|
|integration_state|configured|
|oauth_grant_type|authorization_code|
|oauth_grant_type|client_credentials|
|oauth_grant_type|password|
|state|available|
|state|callable|
|state|added|
|state|authorized|
|state|invalid|
|status|live|
|status|upcoming|
|status|requested|

<h2 id="tocS_ConnectionEvent">ConnectionEvent</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionevent"></a>
<a id="schema_ConnectionEvent"></a>
<a id="tocSconnectionevent"></a>
<a id="tocsconnectionevent"></a>

```json
{
  "entity": {
    "auth_type": "oauth2",
    "consumer_id": "test_user_id",
    "created_at": "2020-09-19T12:18:37.071Z",
    "enabled": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "1111+test_user_id",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "service_id": "teamleader",
    "settings": {
      "instance_url": "https://eu28.salesforce.com"
    },
    "state": "authorized",
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": "2020-09-19T12:18:37.071Z",
    "website": "https://www.salesforce.com"
  },
  "entity_id": "123456ASDF",
  "entity_type": "Connection",
  "event_id": "9755c355-56c3-4a2f-a2da-86ff4411fccb",
  "event_type": "vault.connection.created",
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[ConsumerConnection](#schemaconsumerconnection)|false|none|none|
|entity_id|string|false|none|The service provider's ID of the entity that triggered this event|
|entity_type|string|false|none|The type entity that triggered this event|
|event_id|string|false|none|Unique reference to this request event|
|event_type|[VaultEventType](#schemavaulteventtype)|false|none|none|
|execution_attempt|number|false|none|The current count this request event has been attempted|
|occurred_at|string|false|none|ISO Datetime for when the original event occurred|
|service_id|string|false|none|Service provider identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|*|
|event_type|vault.connection.created|
|event_type|vault.connection.updated|
|event_type|vault.connection.disabled|
|event_type|vault.connection.deleted|
|event_type|vault.connection.callable|
|event_type|vault.connection.token_refresh.failed|

<h2 id="tocS_ConnectionImportData">ConnectionImportData</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionimportdata"></a>
<a id="schema_ConnectionImportData"></a>
<a id="tocSconnectionimportdata"></a>
<a id="tocsconnectionimportdata"></a>

```json
{
  "credentials": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"
  },
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "settings": {
    "instance_url": "https://eu28.salesforce.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|object|false|none|none|
|metadata|object \| null|false|none|Attach your own consumer specific metadata|
|settings|object \| null|false|none|Connection settings. Values will persist to `form_fields` with corresponding id|

<h2 id="tocS_ConnectionMetadata">ConnectionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmetadata"></a>
<a id="schema_ConnectionMetadata"></a>
<a id="tocSconnectionmetadata"></a>
<a id="tocsconnectionmetadata"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
"authorized"
```

[Connection state flow](#section/Connection-state)

<h2 id="tocS_ConnectionWebhook">ConnectionWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionwebhook"></a>
<a id="schema_ConnectionWebhook"></a>
<a id="tocSconnectionwebhook"></a>
<a id="tocsconnectionwebhook"></a>

```json
{
  "created_at": "2020-09-30T07:43:32.000Z",
  "delivery_url": "https://example.com/my/webhook/endpoint",
  "description": "A description",
  "disabled_reason": "retry_limit",
  "events": [
    "vault.connection.created",
    "vault.connection.updated"
  ],
  "execute_base_url": "https://unify.apideck.com/webhook/webhooks/1234/execute",
  "id": "1234",
  "status": "enabled",
  "unified_api": "crm",
  "updated_at": "2020-09-30T07:43:32.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|The date and time when the object was created.|
|delivery_url|string(uri)|true|none|The delivery url of the webhook endpoint.|
|description|string \| null|false|none|A description of the object.|
|disabled_reason|string|false|none|Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.|
|events|[string]|true|none|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|execute_base_url|string(uri)|true|read-only|The Unify Base URL events from connectors will be sent to after service id is appended.|
|id|string|false|read-only|none|
|status|string|true|none|The status of the webhook.|
|unified_api|[UnifiedApiId](#schemaunifiedapiid)|true|none|Name of Apideck Unified API|
|updated_at|string(date-time) \| null|false|read-only|The date and time when the object was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|disabled_reason|none|
|disabled_reason|retry_limit|
|disabled_reason|usage_limit|
|events|*|
|events|crm.activity.created|
|events|crm.activity.updated|
|events|crm.activity.deleted|
|events|crm.company.created|
|events|crm.company.updated|
|events|crm.company.deleted|
|events|crm.contact.created|
|events|crm.contact.updated|
|events|crm.contact.deleted|
|events|crm.lead.created|
|events|crm.lead.updated|
|events|crm.lead.deleted|
|events|crm.note.created|
|events|crm.notes.updated|
|events|crm.notes.deleted|
|events|crm.opportunity.created|
|events|crm.opportunity.updated|
|events|crm.opportunity.deleted|
|events|lead.lead.created|
|events|lead.lead.updated|
|events|lead.lead.deleted|
|events|vault.connection.created|
|events|vault.connection.updated|
|events|vault.connection.disabled|
|events|vault.connection.deleted|
|events|vault.connection.callable|
|events|vault.connection.token_refresh.failed|
|events|ats.job.created|
|events|ats.job.updated|
|events|ats.job.deleted|
|events|ats.applicant.created|
|events|ats.applicant.updated|
|events|ats.applicant.deleted|
|events|accounting.customer.created|
|events|accounting.customer.updated|
|events|accounting.customer.deleted|
|events|accounting.invoice.created|
|events|accounting.invoice.updated|
|events|accounting.invoice.deleted|
|events|accounting.invoice_item.created|
|events|accounting.invoice_item.updated|
|events|accounting.invoice_item.deleted|
|events|accounting.ledger_account.created|
|events|accounting.ledger_account.updated|
|events|accounting.ledger_account.deleted|
|events|accounting.tax_rate.created|
|events|accounting.tax_rate.updated|
|events|accounting.tax_rate.deleted|
|events|accounting.bill.created|
|events|accounting.bill.updated|
|events|accounting.bill.deleted|
|events|accounting.payment.created|
|events|accounting.payment.updated|
|events|accounting.payment.deleted|
|events|accounting.supplier.created|
|events|accounting.supplier.updated|
|events|accounting.supplier.deleted|
|events|pos.order.created|
|events|pos.order.updated|
|events|pos.order.deleted|
|events|pos.product.created|
|events|pos.product.updated|
|events|pos.product.deleted|
|events|pos.payment.created|
|events|pos.payment.updated|
|events|pos.payment.deleted|
|events|pos.merchant.created|
|events|pos.merchant.updated|
|events|pos.merchant.deleted|
|events|pos.location.created|
|events|pos.location.updated|
|events|pos.location.deleted|
|events|pos.item.created|
|events|pos.item.updated|
|events|pos.item.deleted|
|events|pos.modifier.created|
|events|pos.modifier.updated|
|events|pos.modifier.deleted|
|events|pos.modifier-group.created|
|events|pos.modifier-group.updated|
|events|pos.modifier-group.deleted|
|events|hris.employee.created|
|events|hris.employee.updated|
|events|hris.employee.deleted|
|events|hris.company.created|
|events|hris.company.updated|
|events|hris.company.deleted|
|events|file-storage.file.created|
|events|file-storage.file.updated|
|events|file-storage.file.deleted|
|events|issue-tracking.ticket.created|
|events|issue-tracking.ticket.updated|
|events|issue-tracking.ticket.deleted|
|status|enabled|
|status|disabled|
|unified_api|accounting|
|unified_api|ats|
|unified_api|calendar|
|unified_api|crm|
|unified_api|csp|
|unified_api|customer-support|
|unified_api|ecommerce|
|unified_api|email|
|unified_api|email-marketing|
|unified_api|expense-management|
|unified_api|file-storage|
|unified_api|form|
|unified_api|hris|
|unified_api|lead|
|unified_api|payroll|
|unified_api|pos|
|unified_api|procurement|
|unified_api|project-management|
|unified_api|script|
|unified_api|sms|
|unified_api|spreadsheet|
|unified_api|team-messaging|
|unified_api|issue-tracking|
|unified_api|time-registration|
|unified_api|transactional-email|
|unified_api|vault|

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "aggregated_request_count": 101,
  "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  "connections": [
    {
      "auth_type": "oauth2",
      "consumer_id": "test_user_id",
      "created_at": "2020-09-19T12:18:37.071Z",
      "enabled": true,
      "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      "id": "1111+test_user_id",
      "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      "metadata": {
        "account": {
          "id": "c01458a5-7276-41ce-bc19-639906b0450a",
          "name": "My Company"
        },
        "plan": "enterprise"
      },
      "name": "Salesforce",
      "service_id": "teamleader",
      "settings": {
        "instance_url": "https://eu28.salesforce.com"
      },
      "state": "authorized",
      "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
      "unified_api": "crm",
      "updated_at": "2020-09-19T12:18:37.071Z",
      "website": "https://www.salesforce.com"
    }
  ],
  "consumer_id": "test_consumer_id",
  "created": "2021-05-07T12:55:42.242Z",
  "metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  },
  "modified": "2021-05-07T12:55:42.242Z",
  "request_count_updated": "2021-05-07T12:55:42.242Z",
  "request_counts": {
    "proxy": 10,
    "unify": 100,
    "vault": 21
  },
  "services": [
    "salesforce",
    "stripe"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregated_request_count|number|false|read-only|none|
|application_id|string|false|read-only|ID of your Apideck Application|
|connections|[[ConsumerConnection](#schemaconsumerconnection)]|false|read-only|none|
|consumer_id|[ConsumerId](#schemaconsumerid)|true|none|Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.|
|created|string|false|read-only|none|
|metadata|[ConsumerMetadata](#schemaconsumermetadata)|false|none|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|
|modified|string|false|read-only|none|
|request_count_updated|string|false|read-only|none|
|request_counts|[RequestCountAllocation](#schemarequestcountallocation)|false|read-only|none|
|services|[string]|false|read-only|none|

<h2 id="tocS_ConsumerConnection">ConsumerConnection</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerconnection"></a>
<a id="schema_ConsumerConnection"></a>
<a id="tocSconsumerconnection"></a>
<a id="tocsconsumerconnection"></a>

```json
{
  "auth_type": "oauth2",
  "consumer_id": "test_user_id",
  "created_at": "2020-09-19T12:18:37.071Z",
  "enabled": true,
  "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
  "id": "1111+test_user_id",
  "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
  "metadata": {
    "account": {
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      "name": "My Company"
    },
    "plan": "enterprise"
  },
  "name": "Salesforce",
  "service_id": "teamleader",
  "settings": {
    "instance_url": "https://eu28.salesforce.com"
  },
  "state": "authorized",
  "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
  "unified_api": "crm",
  "updated_at": "2020-09-19T12:18:37.071Z",
  "website": "https://www.salesforce.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_type|[AuthType](#schemaauthtype)|false|read-only|Type of authorization used by the connector|
|consumer_id|string|false|none|none|
|created_at|string|false|none|none|
|enabled|boolean|false|none|none|
|icon|string|false|none|none|
|id|string|false|read-only|none|
|logo|string|false|none|none|
|metadata|object \| null|false|none|Attach your own consumer specific metadata|
|name|string|false|none|none|
|service_id|string|false|none|none|
|settings|object \| null|false|none|Connection settings. Values will persist to `form_fields` with corresponding id|
|state|string|false|none|none|
|tag_line|string|false|read-only|none|
|unified_api|string|false|none|none|
|updated_at|string \| null|false|none|none|
|website|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2|
|auth_type|apiKey|
|auth_type|basic|
|auth_type|custom|
|auth_type|none|
|state|available|
|state|callable|
|state|added|
|state|configured|
|state|authorized|

<h2 id="tocS_ConsumerId">ConsumerId</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerid"></a>
<a id="schema_ConsumerId"></a>
<a id="tocSconsumerid"></a>
<a id="tocsconsumerid"></a>

```json
"test_consumer_id"
```

Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.

<h2 id="tocS_ConsumerMetadata">ConsumerMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaconsumermetadata"></a>
<a id="schema_ConsumerMetadata"></a>
<a id="tocSconsumermetadata"></a>
<a id="tocsconsumermetadata"></a>

```json
{
  "account_name": "SpaceX",
  "email": "elon@musk.com",
  "image": "https://www.spacex.com/static/images/share.jpg",
  "user_name": "Elon Musk"
}
```

The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_name|string|false|none|The name of the account as shown in the sidebar.|
|email|string|false|none|The email of the user as shown in the sidebar.|
|image|string|false|none|The avatar of the user in the sidebar. Must be a valid URL|
|user_name|string|false|none|The name of the user as shown in the sidebar.|

<h2 id="tocS_ConsumerRequestCountsInDateRangeResponse">ConsumerRequestCountsInDateRangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerrequestcountsindaterangeresponse"></a>
<a id="schema_ConsumerRequestCountsInDateRangeResponse"></a>
<a id="tocSconsumerrequestcountsindaterangeresponse"></a>
<a id="tocsconsumerrequestcountsindaterangeresponse"></a>

```json
{
  "data": {
    "aggregated_request_count": 40,
    "application_id": "1111",
    "consumer_id": "test_user_id",
    "end_datetime": "2021-05-10T12:00:00.000Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "start_datetime": "2021-05-01T12:00:00.000Z"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateConnectionResponse">CreateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionresponse"></a>
<a id="schema_CreateConnectionResponse"></a>
<a id="tocScreateconnectionresponse"></a>
<a id="tocscreateconnectionresponse"></a>

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 201
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Connection](#schemaconnection)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateConsumerResponse">CreateConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconsumerresponse"></a>
<a id="schema_CreateConsumerResponse"></a>
<a id="tocScreateconsumerresponse"></a>
<a id="tocscreateconsumerresponse"></a>

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Consumer](#schemaconsumer)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateSessionResponse">CreateSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionresponse"></a>
<a id="schema_CreateSessionResponse"></a>
<a id="tocScreatesessionresponse"></a>
<a id="tocscreatesessionresponse"></a>

```json
{
  "data": {
    "session_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj",
    "session_uri": "http://vault.apideck.com/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_DeleteConsumerResponse">DeleteConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconsumerresponse"></a>
<a id="schema_DeleteConsumerResponse"></a>
<a id="tocSdeleteconsumerresponse"></a>
<a id="tocsdeleteconsumerresponse"></a>

```json
{
  "data": {
    "consumer_id": "test_consumer_id"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_FormField">FormField</h2>
<!-- backwards compatibility -->
<a id="schemaformfield"></a>
<a id="schema_FormField"></a>
<a id="tocSformfield"></a>
<a id="tocsformfield"></a>

```json
{
  "allow_custom_values": false,
  "custom_field": false,
  "description": "Slack channel to push notification to",
  "disabled": false,
  "hidden": false,
  "id": "channel",
  "label": "Channel",
  "options": [
    {
      "label": "General Channel",
      "value": "general"
    }
  ],
  "placeholder": "Select a channel",
  "prefix": "https://",
  "required": true,
  "sensitive": false,
  "suffix": ".shopify.com",
  "type": "select"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_custom_values|boolean|false|none|Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list.|
|custom_field|boolean|false|none|none|
|description|string \| null|false|none|The description of the form field|
|disabled|boolean \| null|false|none|Indicates if the form field is displayed in a “read-only” mode.|
|hidden|boolean \| null|false|none|Indicates if the form field is not displayed but the value that is being stored on the connection.|
|id|string|false|none|The unique identifier of the form field.|
|label|string|false|none|The label of the field|
|options|[[FormFieldOption](#schemaformfieldoption)]|false|none|none|
|placeholder|string \| null|false|none|The placeholder for the form field|
|prefix|string \| null|false|none|Prefix to display in front of the form field.|
|required|boolean|false|none|Indicates if the form field is required, which means it must be filled in before the form can be submitted|
|sensitive|boolean \| null|false|none|Indicates if the form field contains sensitive data, which will display the value as a masked input.|
|suffix|string \| null|false|none|Suffix to display next to the form field.|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|checkbox|
|type|tel|
|type|email|
|type|url|
|type|textarea|
|type|select|
|type|filtered-select|
|type|multi-select|
|type|datetime|
|type|date|
|type|time|
|type|number|

<h2 id="tocS_FormFieldOption">FormFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemaformfieldoption"></a>
<a id="schema_FormFieldOption"></a>
<a id="tocSformfieldoption"></a>
<a id="tocsformfieldoption"></a>

```json
{
  "label": "General Channel",
  "value": "general"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[SimpleFormFieldOption](#schemasimpleformfieldoption)|false|none|none|
|*anyOf*|[FormFieldOptionGroup](#schemaformfieldoptiongroup)|false|none|none|

<h2 id="tocS_FormFieldOptionGroup">FormFieldOptionGroup</h2>
<!-- backwards compatibility -->
<a id="schemaformfieldoptiongroup"></a>
<a id="schema_FormFieldOptionGroup"></a>
<a id="tocSformfieldoptiongroup"></a>
<a id="tocsformfieldoptiongroup"></a>

```json
{
  "id": "1234",
  "label": "General Channel",
  "options": [
    {
      "label": "General Channel",
      "value": "general"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|label|string|false|none|none|
|options|[[SimpleFormFieldOption](#schemasimpleformfieldoption)]|false|none|none|

<h2 id="tocS_GetConnectionResponse">GetConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionresponse"></a>
<a id="schema_GetConnectionResponse"></a>
<a id="tocSgetconnectionresponse"></a>
<a id="tocsgetconnectionresponse"></a>

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Connection](#schemaconnection)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConnectionsResponse">GetConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionsresponse"></a>
<a id="schema_GetConnectionsResponse"></a>
<a id="tocSgetconnectionsresponse"></a>
<a id="tocsgetconnectionsresponse"></a>

```json
{
  "data": [
    {
      "auth_type": "oauth2",
      "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
      "configurable_resources": [
        "opportunities",
        "companies",
        "contacts",
        "leads"
      ],
      "configuration": [
        {
          "defaults": [
            {
              "id": "ProductInterest",
              "options": [
                {
                  "label": "General Channel",
                  "value": "general"
                }
              ],
              "target": "custom_fields",
              "value": "GC5000 series"
            }
          ],
          "resource": "leads"
        }
      ],
      "created_at": 1615563533390,
      "enabled": true,
      "form_fields": [
        {
          "custom_field": false,
          "disabled": false,
          "id": "instance_url",
          "label": "Instance url",
          "mask": false,
          "placeholder": "",
          "required": true,
          "sensitive": false,
          "type": "text",
          "value": "https://eu28.salesforce.com"
        },
        {
          "custom_field": false,
          "disabled": false,
          "id": "api_key",
          "label": "API Key",
          "mask": false,
          "placeholder": "",
          "required": true,
          "sensitive": true,
          "type": "text",
          "value": "123455677"
        }
      ],
      "has_guide": true,
      "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      "id": "crm+salesforce",
      "integration_state": "configured",
      "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      "metadata": {
        "account": {
          "id": "c01458a5-7276-41ce-bc19-639906b0450a",
          "name": "My Company"
        },
        "plan": "enterprise"
      },
      "name": "Salesforce",
      "oauth_grant_type": "authorization_code",
      "resource_schema_support": [
        "leads"
      ],
      "resource_settings_support": [
        "leads"
      ],
      "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
      "service_id": "salesforce",
      "settings": {
        "api_key": "12345xxxxxx",
        "instance_url": "https://eu28.salesforce.com"
      },
      "settings_required_for_authorization": [
        "client_id",
        "client_secret"
      ],
      "state": "authorized",
      "status": "live",
      "subscriptions": [
        {
          "created_at": "2020-10-01T12:00:00.000Z",
          "downstream_event_types": [
            "contacts.CREATED"
          ],
          "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
          "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
          "unify_event_types": [
            "crm.contact.created"
          ]
        }
      ],
      "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
      "unified_api": "crm",
      "updated_at": 1616662325753,
      "validation_support": true,
      "website": "https://www.salesforce.com"
    }
  ],
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Connection](#schemaconnection)]|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConsumerResponse">GetConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconsumerresponse"></a>
<a id="schema_GetConsumerResponse"></a>
<a id="tocSgetconsumerresponse"></a>
<a id="tocsgetconsumerresponse"></a>

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Consumer](#schemaconsumer)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConsumersResponse">GetConsumersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconsumersresponse"></a>
<a id="schema_GetConsumersResponse"></a>
<a id="tocSgetconsumersresponse"></a>
<a id="tocsgetconsumersresponse"></a>

```json
{
  "data": [
    {
      "aggregated_request_count": 101,
      "application_id": "1111",
      "consumer_id": "test_consumer_id",
      "created": "2021-05-07T12:55:42.242Z",
      "metadata": {
        "account_name": "SpaceX",
        "email": "elon@musk.com",
        "image": "https://www.spacex.com/static/images/share.jpg",
        "user_name": "Elon Musk"
      },
      "modified": "2021-05-07T12:55:42.242Z",
      "request_count_updated": "2021-05-07T12:55:42.242Z",
      "request_counts": {
        "proxy": 10,
        "unify": 100,
        "vault": 21
      },
      "services": [
        "salesforce",
        "stripe"
      ]
    }
  ],
  "links": {
    "current": "https://unify.apideck.com/crm/companies",
    "next": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetLogsResponse">GetLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlogsresponse"></a>
<a id="schema_GetLogsResponse"></a>
<a id="tocSgetlogsresponse"></a>
<a id="tocsgetlogsresponse"></a>

```json
{
  "data": [
    {
      "api_style": "REST",
      "base_url": "unify.apideck.com",
      "child_request": false,
      "consumer_id": "test-consumer",
      "duration": 2220.379304,
      "error_message": "Refresh token is invalid",
      "execution": 2248,
      "has_children": false,
      "http_method": "GET",
      "id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      "latency": 27.620695999999953,
      "operation": {
        "id": "connectionsAll",
        "name": "Get All Connections"
      },
      "parent_id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      "path": "/vault/connections",
      "sandbox": false,
      "service": {
        "id": "apideck-vault",
        "name": "Apideck Vault"
      },
      "source_ip": "94.227.131.238",
      "status_code": 200,
      "success": true,
      "timestamp": "2021-07-12T14:26:17.420Z",
      "unified_api": "vault"
    }
  ],
  "links": {
    "current": "https://unify.apideck.com/crm/companies",
    "next": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Log](#schemalog)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_IntegrationState">IntegrationState</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationstate"></a>
<a id="schema_IntegrationState"></a>
<a id="tocSintegrationstate"></a>
<a id="tocsintegrationstate"></a>

```json
"configured"
```

The current state of the Integration.

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "current": "https://unify.apideck.com/crm/companies",
  "next": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  "previous": "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
}
```

Links to navigate to previous or next pages through the API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|string|false|none|Link to navigate to the current page through the API|
|next|string \| null|false|none|Link to navigate to the previous page through the API|
|previous|string \| null|false|none|Link to navigate to the previous page through the API|

<h2 id="tocS_Log">Log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_Log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "api_style": "REST",
  "base_url": "unify.apideck.com",
  "child_request": false,
  "consumer_id": "test-consumer",
  "duration": 2220.379304,
  "error_message": "Refresh token is invalid",
  "execution": 2248,
  "has_children": false,
  "http_method": "GET",
  "id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
  "latency": 27.620695999999953,
  "operation": {
    "id": "connectionsAll",
    "name": "Get All Connections"
  },
  "parent_id": "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
  "path": "/vault/connections",
  "sandbox": false,
  "service": {
    "id": "apideck-vault",
    "name": "Apideck Vault"
  },
  "source_ip": "94.227.131.238",
  "status_code": 200,
  "success": true,
  "timestamp": "2021-07-12T14:26:17.420Z",
  "unified_api": "vault"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_style|string|true|none|Indicates if the request was made via REST or Graphql endpoint.|
|base_url|string|true|none|The Apideck base URL the request was made to.|
|child_request|boolean|true|none|Indicates whether or not this is a child or parent request.|
|consumer_id|string|true|none|The consumer Id associated with the request.|
|duration|number|true|none|The entire execution time in milliseconds it took to call the Apideck service provider.|
|error_message|string \| null|false|none|If error occurred, this is brief explanation|
|execution|integer|true|none|The entire execution time in milliseconds it took to make the request.|
|has_children|boolean|true|none|When request is a parent request, this indicates if there are child requests associated.|
|http_method|string|true|none|HTTP Method of request.|
|id|string|true|none|UUID acting as Request Identifier.|
|latency|number|true|none|Latency added by making this request via Unified Api.|
|operation|object|true|none|The request as defined in OpenApi Spec.|
|parent_id|string \| null|true|none|When request is a child request, this UUID indicates it's parent request.|
|path|string|true|none|The path component of the URI the request was made to.|
|sandbox|boolean|true|none|Indicates whether the request was made using Apidecks sandbox credentials or not.|
|service|object|true|none|Apideck service provider associated with request.|
|source_ip|string \| null|false|none|The IP address of the source of the request.|
|status_code|integer|true|none|HTTP Status code that was returned.|
|success|boolean|true|none|Whether or not the request was successful.|
|timestamp|string|true|none|ISO Date and time when the request was made.|
|unified_api|string|true|none|Which Unified Api request was made to.|

#### Enumerated Values

|Property|Value|
|---|---|
|unified_api|crm|
|unified_api|lead|
|unified_api|proxy|
|unified_api|vault|
|unified_api|accounting|
|unified_api|hris|
|unified_api|ats|
|unified_api|ecommerce|
|unified_api|issue-tracking|
|unified_api|pos|
|unified_api|file-storage|
|unified_api|sms|

<h2 id="tocS_LogsFilter">LogsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalogsfilter"></a>
<a id="schema_LogsFilter"></a>
<a id="tocSlogsfilter"></a>
<a id="tocslogsfilter"></a>

```json
{
  "connector_id": "crm+salesforce",
  "exclude_unified_apis": "vault,proxy",
  "status_code": 201
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector_id|string \| null|false|none|none|
|exclude_unified_apis|string \| null|false|none|none|
|status_code|number \| null|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "cursors": {
    "current": "em9oby1jcm06OnBhZ2U6OjI=",
    "next": "em9oby1jcm06OnBhZ2U6OjM=",
    "previous": "em9oby1jcm06OnBhZ2U6OjE="
  },
  "items_on_page": 50
}
```

Response metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|Cursors to navigate to previous or next pages through the API|
|items_on_page|integer|false|none|Number of items returned in the data property of the response|

<h2 id="tocS_NotFoundResponse">NotFoundResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundresponse"></a>
<a id="schema_NotFoundResponse"></a>
<a id="tocSnotfoundresponse"></a>
<a id="tocsnotfoundresponse"></a>

```json
{
  "detail": "Could not find widget with id: '123'",
  "error": "Not Found",
  "message": "Unknown Widget",
  "ref": "https://developers.apideck.com/errors#entitynotfounderror",
  "status_code": 404,
  "type_name": "EntityNotFoundError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| object|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_NotImplementedResponse">NotImplementedResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotimplementedresponse"></a>
<a id="schema_NotImplementedResponse"></a>
<a id="tocSnotimplementedresponse"></a>
<a id="tocsnotimplementedresponse"></a>

```json
{
  "detail": "Failed to retrieve Widget tokenUrl from 'components.securitySchemes.OAuth2.flows'",
  "error": "Not Implemented",
  "message": "Unmapped Attribute",
  "ref": "https://developers.apideck.com/errors#mappingerror",
  "status_code": 501,
  "type_name": "MappingError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| object|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_OAuthGrantType">OAuthGrantType</h2>
<!-- backwards compatibility -->
<a id="schemaoauthgranttype"></a>
<a id="schema_OAuthGrantType"></a>
<a id="tocSoauthgranttype"></a>
<a id="tocsoauthgranttype"></a>

```json
"authorization_code"
```

OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types

<h2 id="tocS_PaymentRequiredResponse">PaymentRequiredResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequiredresponse"></a>
<a id="schema_PaymentRequiredResponse"></a>
<a id="tocSpaymentrequiredresponse"></a>
<a id="tocspaymentrequiredresponse"></a>

```json
{
  "detail": "You have reached your limit of 2000",
  "error": "Payment Required",
  "message": "Request Limit Reached",
  "ref": "https://developers.apideck.com/errors#requestlimiterror",
  "status_code": 402,
  "type_name": "RequestLimitError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_ProxyRequest">ProxyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproxyrequest"></a>
<a id="schema_ProxyRequest"></a>
<a id="tocSproxyrequest"></a>
<a id="tocsproxyrequest"></a>

```json
{
  "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "api_version": "2010-04-01",
  "body": "This is the ship that made the Kessel Run in fourteen parsecs?",
  "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
  "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
  "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
  "direction": "outbound-api",
  "from": "+15017122661",
  "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "num_media": "0",
  "num_segments": "1",
  "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "status": "sent",
  "subresource_uris": {
    "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
  },
  "to": "+15558675310",
  "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
}
```

<h2 id="tocS_RequestCountAllocation">RequestCountAllocation</h2>
<!-- backwards compatibility -->
<a id="schemarequestcountallocation"></a>
<a id="schema_RequestCountAllocation"></a>
<a id="tocSrequestcountallocation"></a>
<a id="tocsrequestcountallocation"></a>

```json
{
  "proxy": 10,
  "unify": 100,
  "vault": 21
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proxy|number|false|none|none|
|unify|number|false|none|none|
|vault|number|false|none|none|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "consumer_metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  },
  "custom_consumer_settings": {
    "feature_flag_1": true,
    "tax_rates": [
      {
        "id": "6",
        "label": "6%"
      },
      {
        "id": "21",
        "label": "21%"
      }
    ]
  },
  "redirect_uri": "https://mysaas.com/dashboard",
  "settings": {
    "allow_actions": [
      "delete"
    ],
    "auto_redirect": false,
    "hide_guides": false,
    "hide_resource_settings": false,
    "isolation_mode": false,
    "sandbox_mode": false,
    "session_length": "30m",
    "show_logs": true,
    "show_sidebar": true,
    "show_suggestions": false,
    "unified_apis": [
      "crm"
    ]
  },
  "theme": {
    "favicon": "https://res.cloudinary.com/apideck/icons/intercom",
    "logo": "https://res.cloudinary.com/apideck/icons/intercom",
    "primary_color": "#286efa",
    "privacy_url": "https://compliance.apideck.com/privacy-policy",
    "sidepanel_background_color": "#286efa",
    "sidepanel_text_color": "#FFFFFF",
    "terms_url": "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
    "vault_name": "Intercom"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_metadata|[ConsumerMetadata](#schemaconsumermetadata)|false|none|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|
|custom_consumer_settings|object|false|none|Custom consumer settings that are passed as part of the session.|
|redirect_uri|string|false|none|The URL to redirect the user to after the session has been configured.|
|settings|object|false|none|Settings to change the way the Vault is displayed.|
|theme|object|false|none|Theming options to change the look and feel of Vault.|

<h2 id="tocS_SimpleFormFieldOption">SimpleFormFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemasimpleformfieldoption"></a>
<a id="schema_SimpleFormFieldOption"></a>
<a id="tocSsimpleformfieldoption"></a>
<a id="tocssimpleformfieldoption"></a>

```json
{
  "label": "General Channel",
  "value": "general"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|value|string \| integer \| number \| boolean \| [string \| integer \| number]|false|none|none|

<h2 id="tocS_UnauthorizedResponse">UnauthorizedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedresponse"></a>
<a id="schema_UnauthorizedResponse"></a>
<a id="tocSunauthorizedresponse"></a>
<a id="tocsunauthorizedresponse"></a>

```json
{
  "detail": "Failed to generate valid JWT Session. Verify applicationId is correct",
  "error": "Unauthorized",
  "message": "Unauthorized Request",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 401,
  "type_name": "UnauthorizedError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_UnexpectedErrorResponse">UnexpectedErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectederrorresponse"></a>
<a id="schema_UnexpectedErrorResponse"></a>
<a id="tocSunexpectederrorresponse"></a>
<a id="tocsunexpectederrorresponse"></a>

```json
{
  "detail": "Missing Header: x-apideck-consumer-id",
  "error": "Bad Request",
  "message": "Invalid Params",
  "ref": "https://developers.apideck.com/errors#unauthorizederror",
  "status_code": 400,
  "type_name": "RequestHeadersValidationError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| object|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_UnifiedApiId">UnifiedApiId</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedapiid"></a>
<a id="schema_UnifiedApiId"></a>
<a id="tocSunifiedapiid"></a>
<a id="tocsunifiedapiid"></a>

```json
"crm"
```

Name of Apideck Unified API

<h2 id="tocS_UnprocessableResponse">UnprocessableResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessableresponse"></a>
<a id="schema_UnprocessableResponse"></a>
<a id="tocSunprocessableresponse"></a>
<a id="tocsunprocessableresponse"></a>

```json
{
  "detail": "Unprocessable request, please verify your request headers and body.",
  "error": "Unprocessable Entity",
  "message": "Invalid State",
  "ref": "https://developers.apideck.com/errors#invalidstateerror",
  "status_code": 422,
  "type_name": "InvalidStateError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Contains parameter or domain specific information related to the error and why it occurred.|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

<h2 id="tocS_UpdateConnectionResponse">UpdateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionresponse"></a>
<a id="schema_UpdateConnectionResponse"></a>
<a id="tocSupdateconnectionresponse"></a>
<a id="tocsupdateconnectionresponse"></a>

```json
{
  "data": {
    "auth_type": "oauth2",
    "authorize_url": "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
    "configurable_resources": [
      "opportunities",
      "companies",
      "contacts",
      "leads"
    ],
    "configuration": [
      {
        "defaults": [
          {
            "id": "ProductInterest",
            "options": [
              {
                "label": "General Channel",
                "value": "general"
              }
            ],
            "target": "custom_fields",
            "value": "GC5000 series"
          }
        ],
        "resource": "leads"
      }
    ],
    "created_at": 1615563533390,
    "enabled": true,
    "form_fields": [
      {
        "custom_field": false,
        "disabled": false,
        "id": "instance_url",
        "label": "Instance url",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": false,
        "type": "text",
        "value": "https://eu28.salesforce.com"
      },
      {
        "custom_field": false,
        "disabled": false,
        "id": "api_key",
        "label": "API Key",
        "mask": false,
        "placeholder": "",
        "required": true,
        "sensitive": true,
        "type": "text",
        "value": "123455677"
      }
    ],
    "has_guide": true,
    "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "integration_state": "configured",
    "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "metadata": {
      "account": {
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
        "name": "My Company"
      },
      "plan": "enterprise"
    },
    "name": "Salesforce",
    "oauth_grant_type": "authorization_code",
    "resource_schema_support": [
      "leads"
    ],
    "resource_settings_support": [
      "leads"
    ],
    "revoke_url": "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
    "service_id": "salesforce",
    "settings": {
      "api_key": "12345xxxxxx",
      "instance_url": "https://eu28.salesforce.com"
    },
    "settings_required_for_authorization": [
      "client_id",
      "client_secret"
    ],
    "state": "authorized",
    "status": "live",
    "subscriptions": [
      {
        "created_at": "2020-10-01T12:00:00.000Z",
        "downstream_event_types": [
          "contacts.CREATED"
        ],
        "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
        "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
        "unify_event_types": [
          "crm.contact.created"
        ]
      }
    ],
    "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
    "unified_api": "crm",
    "updated_at": 1616662325753,
    "validation_support": true,
    "website": "https://www.salesforce.com"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Connection](#schemaconnection)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_UpdateConsumerRequest">UpdateConsumerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconsumerrequest"></a>
<a id="schema_UpdateConsumerRequest"></a>
<a id="tocSupdateconsumerrequest"></a>
<a id="tocsupdateconsumerrequest"></a>

```json
{
  "metadata": {
    "account_name": "SpaceX",
    "email": "elon@musk.com",
    "image": "https://www.spacex.com/static/images/share.jpg",
    "user_name": "Elon Musk"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ConsumerMetadata](#schemaconsumermetadata)|false|none|The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.|

<h2 id="tocS_UpdateConsumerResponse">UpdateConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconsumerresponse"></a>
<a id="schema_UpdateConsumerResponse"></a>
<a id="tocSupdateconsumerresponse"></a>
<a id="tocsupdateconsumerresponse"></a>

```json
{
  "data": {
    "aggregated_request_count": 101,
    "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    "connections": [
      {
        "auth_type": "oauth2",
        "consumer_id": "test_user_id",
        "created_at": "2020-09-19T12:18:37.071Z",
        "enabled": true,
        "icon": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        "id": "1111+test_user_id",
        "logo": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        "metadata": {
          "account": {
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            "name": "My Company"
          },
          "plan": "enterprise"
        },
        "name": "Salesforce",
        "service_id": "teamleader",
        "settings": {
          "instance_url": "https://eu28.salesforce.com"
        },
        "state": "authorized",
        "tag_line": "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        "unified_api": "crm",
        "updated_at": "2020-09-19T12:18:37.071Z",
        "website": "https://www.salesforce.com"
      }
    ],
    "consumer_id": "test_consumer_id",
    "created": "2021-05-07T12:55:42.242Z",
    "metadata": {
      "account_name": "SpaceX",
      "email": "elon@musk.com",
      "image": "https://www.spacex.com/static/images/share.jpg",
      "user_name": "Elon Musk"
    },
    "modified": "2021-05-07T12:55:42.242Z",
    "request_count_updated": "2021-05-07T12:55:42.242Z",
    "request_counts": {
      "proxy": 10,
      "unify": 100,
      "vault": 21
    },
    "services": [
      "salesforce",
      "stripe"
    ]
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Consumer](#schemaconsumer)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_VaultEventType">VaultEventType</h2>
<!-- backwards compatibility -->
<a id="schemavaulteventtype"></a>
<a id="schema_VaultEventType"></a>
<a id="tocSvaulteventtype"></a>
<a id="tocsvaulteventtype"></a>

```json
"vault.connection.created"
```

<h2 id="tocS_WebhookSubscription">WebhookSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscription"></a>
<a id="schema_WebhookSubscription"></a>
<a id="tocSwebhooksubscription"></a>
<a id="tocswebhooksubscription"></a>

```json
{
  "created_at": "2020-10-01T12:00:00.000Z",
  "downstream_event_types": [
    "contacts.CREATED"
  ],
  "downstream_id": "5f5f5f5f5f5f5f5f5f5f5f5f",
  "execute_url": "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
  "unify_event_types": [
    "crm.contact.created"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|The date and time the webhook subscription was created downstream|
|downstream_event_types|[string]|false|none|The list of downstream Events this connection is subscribed to|
|downstream_id|string|false|none|The ID of the downstream service|
|execute_url|string|false|none|The URL the downstream is sending to when the event is triggered|
|unify_event_types|[string]|false|none|The list of Unify Events this connection is subscribed to|
