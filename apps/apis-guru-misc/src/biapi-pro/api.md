<h1 id="budgea-api-documentation">Budgea API Documentation v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Budgea Development Guides

Welcome to **Budgea**'s documentation.

This documentation is intended to get you up-and-running with our APIs and advise on the implementation of some regulatory aspects of your application, following the DSP2's guidelines.

## Getting Started
**IMPORTANT**
Depending on your status with regard of the DSP2 regulation, **agent** or **partner**, you may call our APIs or simply use our Webview and callbacks to get the financial data of your users.
As an **agent**, you are allowed to call directly our APIs and implement your own form to get the user's credentials.
As a **partner**, you cannot manipulate the credentials, and have to delegate this step to us through our webview.

The sections below will document how to use our APIs, make sure you have the **agent** status to do so.
For the **partner**, please refer to the section *Webview* and *Callbacks* of this documentation.

### Overview
Your API is a REST API which requires a communication through https to send and receive JSON documents.
During your tests, we recommend to make calls to the API with curl or any other HTTP client of your choice.
You can watch a video demonstration on this [URL](https://asciinema.org/a/FsaFyt3WAPyDm7sfaZPkwal3V).
For the examples we'll use the demo API with address `https://demo.biapi.pro`, you should change that name to your API's name.

### Hello World
Let's start by calling the service `/banks` which lists all available banks.
```
curl https://demo.biapi.pro/2.0/banks/
```
To log in to a bank webpage, you'll need to know for a given bank, the fields your user should fill in the form.
Let's call a  specific bank and ask for an additional resource *fields*.
```
curl https://demo.biapi.pro/2.0/banks/59?expand=fields
```
The response here concerns only 1 bank (since we specified an id) and the resource _Fields_ is added to the response thanks to the query parameter `expand`.

To get more interesting things done, you'll need to send authenticated requests.

### Authentication
The way to authenticate is by passing the `Authorization: Bearer <token>` header in your request.
At the setup a _manage token_ have been generated, you can use this token for now, when creating your user we'll see how to generate a user's token.
```
curl https://demo.biapi.pro/2.0/config \
  -H 'Authorization: Bearer <token>'
```
This endpoint will list all the parameters you can change to adapt Budgea to your needs.

We've covered the very first calls. Before diving deeper, let's see some general information about the APIs.

## Abstract

### API URL
`https://demo.biapi.pro/2.0`

### Requests format
Data format: **application/x-www-form-urlencoded** or **application/json** (suggested)

Additional headers: Authorization: User's token (private)

### Responses format
Data format: **application/json** ([http://www.json.org](http://www.json.org/))
Charset: **UTF-8**

### Resources
Each call on an endpoint will return resources. The main resources are:
| Resource            | Description                                                                                                           |
| ---------------------|:------------------------------------------------------------------------------------------------------------------   |
|Users                 |Represent a user                                                                                                      |
|Connection            |A set of data used to authenticate on a website (usually a login and password). There is 1 connection for each website|
|Account               |A bank account contained in a connection                                                                              |
|Transaction           |An entry in a bank account                                                                                            |
|Investment            |An asset in a bank account                                                                                            |

The chain of resources is as follow: **Users ∈ Connections ∈ Accounts ∈ Transactions or Investments**

### RESTful API

This API is RESTful, which means it is stateless and each resource is accessed with an unique URI.

Several HTTP methods are available:

| Method                  | Description                    |
| ------------------------|:-------------------------------|
| GET /resources          | List resources                 |
| GET /resources/{ID}     | Get a resource from its ID     |
| POST /resources         | Create a new resource          |
| POST /resources/{ID}    | Update a resource              |
| PUT /resources  /{ID}   | Update a resource              |
| DELETE /resources       | Remove every resources         |
| DELETE /resources/{ID}  | Delete a resource              |


Each resource can contain sub-resources, for example:
`/users/me/connections/2/accounts/23/transactions/48`

### HTTP response codes

| Code        | Message               | Description                                                                                   |
| ----------- |:---------------------:|-----------------------------------------------------------------------------------------------|
| 200         | OK                    |Default response when a GET or POST request has succeed                                        |
| 202         | Accepted              |For a new connection this code means it is necessary to provide complementary information (2FA)|
| 204         | No content            |Default response when a POST request succeed without content                                   |
| 400         | Bad request           |Supplied parameters are incorrect                                                              |
| 403         | Forbidden             |Invalid token                                                                                  |
| 500         | Internal Servor Error |Server error                                                                                   |
| 503         | Service Unavailable   |Service is temporarily unavailable                                                             |

### Errors management
In case an error occurs (code 4xx or 5xx), the response can contain a JSON object describing this error:
```json
{
   "code": "authFailure",
   "message": "Wrong password"  // Optional
}
```
If an error is displayed on the website, Its content is returned in error_message field.
The list of all possible errors is listed further down this page.

### Authentication
A user is authenticated by an access_token which is sent by the API during a call on one of the authentication services, and can be supplied with this header:
`Authorization: Bearer YYYYYYYYYYYYYYYYYYYYYYYYYYY`

 There are two user levels:

    - Normal user, which can only access to his own accounts
    - Administrator, with extended rights

### Default filters
During a call to an URI which lists resources, some filters can be passed as query parameters:

| Parameter   | Type      | Description                                               |
| ----------- |:---------:|-----------------------------------------------------------|
| offset      | Integer   |Offset of the first returned resource                      |
| limit       | Integer   |Limit number of results                                    |
| min_date    | Date      |Minimal date (if supported by service), format: YYYY-MM-DD |
| max_date    | Date      |Maximal date (if supported by service), format: YYYY-MM-DD |

### Extend requests
During a GET on a set of resources or on a unique resource, it is possible to add a parameter expand to the request to extend relations with other resources:

`GET /2.0/users/me/accounts/123?expand=transactions[category],connection`

```json
{
   "id" : 123
   "name" : "Compte chèque"
   "balance" : 1561.15
   "transactions" : [
      {
         "id" : 9849,
         "simplified_wording" : "HALL'S BEER",
         "value" : -513.20,
         ...
         "category" : {
            "id" : 561,
            "name" : "Sorties / Bar",
            ...
         }
       },
       ...
   ],
   "id_user" : 1,
   "connection" : {
      "id" : 1518,
      "id_bank" : 41,
      "id_user" : 1,
      "error" : null,
      ...
   }
}
```

### Request example
```http
GET /2.0/banks?offset=0&limit=10&expand=fields
Host: demo.biapi.pro
Accept: application/json
Authorization: Bearer <token>
```
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 3026
Server: Apache
Date: Fri, 14 Mar 2014 08:24:02 GMT

{
   "banks" : [
      {
         "id_weboob" : "bnp",
         "name" : "BNP Paribas",
         "id" : 3,
         "hidden" : false,
         "fields" : [
            {
               "id" : 1,
               "id_bank" : 3,
               "regex" : "^[0-9]{5,10}$",
               "name" : "login",
               "type" : "text",
               "label" : "Numéro client"
            },
            {
               "id" : 2,
               "id_bank" : 3,
               "regex" : "^[0-9]{6}$",
               "name" : "password",
               "type" : "password",
               "label" : "Code secret"
            }
         ]
      },
      ...
   ]
   "total" : 41
}
```

### Constants
#### List of bank account types
| Type          |Description                        |
| -----------   |-----------------------------------|
| checking      |Checking account                   |
| savings       |Savings account                    |
| deposit       |Deposit accounts                   |
| loan          |Loan                               |
| market        | Market accounts                   |
| joint         |Joint account                      |
| card          |Card                               |
| lifeinsurance |Life insurance accounts            |
| pee           |Plan Épargne Entreprise            |
| perco         |Plan Épargne Retraite              |
| article83     |Article 83                         |
| rsp           |Réserve spéciale de participation  |
| pea           |Plan d'épargne en actions          |
| capitalisation|Contrat de capitalisation          |
| perp          |Plan d'épargne retraite populaire  |
| madelin       |Contrat retraite Madelin           |
| unknown       |Inconnu                            |

#### List of transaction types

| Type         |Description                        |
| -----------  |-----------------------------------|
|transfer      |Transfers                          |
|order         |Orders                             |
|check         |Checks                             |
|deposit       |Cash deposit                       |
|payback       |Payback                            |
|withdrawal    |Withdrawal                         |
|loan_payment  |Loan payment                       |
|bank          |Bank fees                          |
|card          |Card operation                     |
|deferred_card |Deferred card operation            |
|card_summary  |Mensual debit of a deferred card   |

#### List of synchronization errors
##### Error on Connection object
The error field may take one of the below values in case of error when accessing the user space.

| Error                      |Description                                                                                       |
| -----------------------    |--------------------------------------------------------------------------------------------------|
|wrongpass                   |The authentication on website has failed                                                          |
|additionalInformationNeeded |Additional information is needed such as an OTP                                                  |
|websiteUnavailable          |The website is unavailable, for instance we get a HTTP 503 response when requesting the website   |
|actionNeeded                |An action is needed on the website by the user, scraping is blocked                               |
|SCARequired                |An SCA process must be done by updating the connection                               |
|decoupled                  |Requires a user validation (ex: digital key)|
|passwordExpired                   |The password has expired and needs to be changed on the website.                                                         |
|webauthRequired                |A complete authentication process is required by update the connection via redirect                            |
|bug                         |A bug has occurred during the synchronization. An alert has been sent to Budget Insight           |

#### Error on Account object
Errors can be filled at the account level in case we access the user's dashboard but some account related data cannot be retrieved.
For instance, we may not access the transactions or investments for a specific account.
Getting an error during an account synchronization does not impact the scraping of other acccounts.

| Error                      |Description                                                                                       |
| -----------------------    |--------------------------------------------------------------------------------------------------|
|websiteUnavailable          |The website or a page is unavailable                                                              |
|actionNeeded                |An action is needed on the website by the user, scraping is blocked                               |
|bug                         |A bug has occurred during the synchronization. An alert has been sent to Budget Insight           |

Now you know the basics of Budgea API
- Basic call to retrieve resources
- Add query parameters to aplly filters
- Expand resources
- Authenticated calls

We're good for the basics! Now let's see how to integrate Budgea in your app and create your first user.

## Integrate Budgea *(protocol or Webview)*
### The workflow
Users of your application exist in the Budgea API.
Every User is identified by an access_token which is the shared secret between your application and our API.

The workflow is as below:
1. The user is on your application and wants to share his bank accounts or invoices.
2. A call is made **client side** (browser's javascript or desktop application) to create a temporarily token which will be used to make API calls.
3. A form is built, allowing the user to select the connector to use (bank or provider, depending on context). Every connector requires different kind of credentials.
4. A call on the API is made with the temporarily token to add a **Connection** with the credentials supplied by user.
5. In case of success, the user chooses what bank accounts (**Account**) or subscriptions (**Subscription**) he wants to share with your application.
6. When he validates the share, the temporarily token is transmitted to your server. This one will call the Budgea API with this token to get a permanent token.

**Note**
In case your application works without a server (for example a desktop application), the permanent token can be obtained on the 1st step, by supplying a client_secret to /auth/init and the step 6 is omitted. To get more information, read the protocol.

There are 3 steps to integrate Budgea in your application:
1. Provide a way for your users to share their credentials with you
2. Get the data scraped from Budgea
3. Be sure to follow the good practices before going into production

### Get credentials from users
You have 2 options here:
- Integrate the Budget Insight's Webview, a turnkey solution to get user's credentials
- Create your own form following the protocol (must have the *agent* status)

### Budgea webview

The Budgea webview complements REST API endpoints with web-based services to handle sensitive or complex operations:
- add a connection (to a bank or a provider), or edit/repare access to a connection;
- manage connections (add/remove/edit);
- edit and validate bank transfers (alpha preview).

Usage of the webview is mandatory if you don't hold an Agent status, since you are not allowed to use API endpoints carrying user credentials, and optional otherwise.

#### Implementation guidelines

##### Base URL

The base URL of all services must be customized:  
`https://{{domain}}.biapi.pro/2.0/auth/webview/`  
`https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/`  
- `{{domain}}`: substitute with you API domain;
- `{{lang}}`: optionally specify the language of the webview, `en` or `fr` (if not specified, an automatic redirection will be performed following the language of the browser).

##### Browser integration

Services available as part of the webview are designed as parameterized URLs intended to be opened in a web browser. A callback URI must be specified by callers to be notified at the end of the operation flow, similar to OAuth 2 specification.

You are encouraged to integrate web-based steps in your product following UX best practices:
- in a web environment, perform a full-page redirect to the URL (using either [HTTP redirect](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/302) or [scripting](https://developer.mozilla.org/fr/docs/Web/API/Location)), and avoid new tabs or popups;
- in a native Android app, prefer opening the default browser or relying on [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) to integrating a WebView;
- in a native iOS app, prefer using a [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) to integrating a WKWebView.

##### Callback handling

Most flows redirect to a callback URI at the end of the process. Query parameters are added to the URI to identify successful or failed operations.

Successful parameters are specific to each flow. In case of an error, the following parameters are added:

| Parameter | Description |
| - | - |
| `error` | An lowercase string error code identifying the kind of error that occurred. When the parameter is not present, the response is successful. |
| `error_description` | A longer string description of the error (not intended for user display). |

Common error codes include:

| Code | Description |
| - | - |
| `access_denied` | The user explicitly cancelled the flow. |
| `server_error` | Oops, a technical failure occurred during the process. |

**Forward compatibility requirement**: Additional error codes may be added in the future to describe specific cases. When implementing error codes handling, always fallback to a generic case for unknown codes.

##### Browser compatibility

The webview is designed and tested to work with browsers supported by the Angular framework:  
https://angular.io/guide/browser-support

##### Privacy / GDPR status

The webview itself does not use any kind of long-term data persistence mechanism such as cookies or local storage, but some authentication or authorization steps may delegate to third-party web services that may implement them.

#### Configuration

You can configure the appearance and behaviour of the webview by configuring the associated *Client Application* in the console:

| Key | Format | Description |
| - | - | - |
| `primary_color` | String | Optional. An accent color (hexadecimal string without '#' prefix) to personalize the UI elements of the webview. If absent, the default color is grey. |
| `redirect_uri` | String | Optional. A recommended security whitelist configuration. The `redirect_uri` parameter sent to any endpoint of the webview is checked against the configuration, if any. |
| `config.disable_connector_hints` | Boolean | Optional. This flags hides the list of most-used entries in the connector selection step. The default is `false`, i.e. the list is shown. |
| `config.use_app_layout` | Boolean | Optional. Use this flag to enable presenting your log as an app icon. The default value is ` false`, i.e. the logo is shown in the top bar of the UI. |
| `config.disable_accounts_pre_check` | Boolean | Optional. An optional boolean flag to prevent bank accounts to be automatically pre-checked when the user enters the activation step. The default value is ` false`, i.e. the bank accounts are pre-checked. |

#### Endpoints reference

##### Add connection flow
```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/connect
```

This flow allows an end-user to add a new connection to the API. The flow handles the following steps:
- selecting a connector;
- authenticating & authorizing with the connector, by collecting credentials or delegating;
- managing consent to aggregate accounts/subscriptions;
- collecting required information for professional accounts.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Optional. A user-scoped temporary code to use with the Budgea API.<br>If you don't provide a code, a new anonymous user will be created before the connection is added, and you will be returned an access token code scoped to it with the success callback. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `connector_ids` | Optional. A comma-separated list of connector IDs available to pick from.<br>If the parameter is omitted, all active connectors are available.<br>If you pass a single value, the user is not prompted to choose the connector.<br>This parameter is mutually exclusive with `connector_uuids`. |
| `connector_uuids` | Optional. A comma-separated list of connector UUIDs available to pick from.<br>If the parameter is omitted, all active connectors are available.<br>If you pass a single value, the user is not prompted to choose the connector.<br>This parameter is mutually exclusive with `connector_ids`. |
| `connector_capabilities` | Optional. A comma-separated list of capabilities to filter available connectors.<br>If the parameter is omitted, `bank` is inferred.<br>If multiple values are provided, only connectors that expose all the requested capabilities are available.<br>To request a bank connection, use `bank`.<br>To request a provider connection, use `document`. |
| `account_ibans` | Optional. A comma-separated list of IBANs to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |
| `account_types` | Optional. A comma-separated list of account types to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |
| `account_usages` | Optional. A comma-separated list of account usages to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |

###### Successful callback parameters

| Parameter | Description |
| - | - |
| `connection_id` | The id of the newly created connection. Please note that when redirecting to the callback URI, the accounts and/or subscriptions are available in the API, but bank transactions or documents may still be syncing in background. |
| `code` | Optional. If a `code` was *not* initially specified, an API code that you must exchange to obtain a permanent access token associated with the newly-created anonymous user holding the connection. The parameter is URL-encoded, make sure to handle it accordingly. |
| `state` | Optional. Identical to the `state` parameter that was initially specified. |

###### Additional error codes

| Code | Description |
| - | - |
| `tos_declined` | The end-user refused to validate the terms of service. |

##### Re-auth / edit connection credentials flow

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/reconnect
```

This flow allows an end-user to re-authenticate against a bank or a provider in order to recover an existing connection, or to completely reset credentials associated with a connection.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API. |
| `connection_id` | Required. The id of the existing connection. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `reset_credentials` | Optional. In the default mode (`false`), the service will try to recover the connection and prompt the user only with outdated or transient information (new password, OTP...).<br>Set the parameter to `true` to force resetting all the credentials associated with the connection. This parameter may not apply to all connectors. |

###### Successful callback parameters

This flow adds no parameter to the callback URI in case of success, except from `state`.

##### Manage connections

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/manage
```
This flow allows an end-user to manage the connections associated with his account in the API. The user can add new connections, remove existing ones, fix connection errors, reset credentials or activate/deactivate bank accounts.

Support of `redirect_uri` in this flow is optional, as it can be integrated or presented as a terminal step, without relying on a final redirection.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API. |
| `redirect_uri` | Optional. An absolute callback URI. When provided, the webview will display a close button that redirects to it. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow when providing a `redirect_uri`. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `connector_capabilities` | Optional. A comma-separated list of capabilities to filter available connectors when adding a new connection.<br>If the parameter is omitted, `bank` is inferred.<br>If multiple values are provided, only connectors that expose all the requested capabilities are available.<br>To request a bank connection, use `bank`.<br>To request a provider connection, use `document`. |
| `account_types` | Optional. A comma-separated list of account types to filter accounts available for activation on adding a new bank connection or updating existing connections. Other accounts will not be selectable. |
| `account_usages` | Optional. A comma-separated list of account usages to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |

###### Callback parameters

This flow adds no parameter to the callback URI, except from `state`.

##### Execute a bank transfer (preview)

**Disclaimer**: Transfer or payment services are available as a preview, protocols and parameters are subject to change in upcoming beta/final releases.

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/transfer
```
This flow allows an end-user to execute a bank transfer. The flow handles the following steps:
- if the transfer is not already created, all steps to authenticate with a bank, select the recipient, the emitter account, the amount and label;
- executing the transfer, including managing SCAs for recipient registration and/or transfer validation.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API.<br>If you don't provide a code, a new anonymous user will be created before a connection is added and the transfer is executed, and you will be returned an access token code scoped to it with the success callback. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `transfer_id`| Optional. The ID of an prepared transfer to be validated in the webview. The user cannot edit anything on the transfer before validation. |

###### Successfull callback parameters

| Parameter | Description |
| - | - |
| `transfer_id` | The ID of the transfer that was created and executed. |
| `code` | Optional. If a `code` was *not* initially specified, an API code that you can exchange to obtain a permanent access token associated with the newly-created anonymous user holding the transfer. The parameter is URL-encoded, make sure to handle it accordingly. |
| `state` | Optional. Identical to the `state` parameter that was initially specified. |

###### Additional error codes

| Code | Description |
| - | - |
| `tos_declined` | The end-user refused to validate the terms of service. |

#### Migrating from v3

We provide a full backward compatibility layer with current implementations of the webview v3 to ease the transition. All endpoints remains accessible, with the same parameters and callback behaviour. Migration instructions are provided below.

*The v3 compatibility mode is expected to be removed on 31 December 2019.* You should migrate your implementation a soon as possible to new endpoints and parameters.

##### Add connection flow / Edit connection credentials  
```
/connect/select
```

This endpoint has been superseded by `/connect` (no suffix) for adding a new connection, and `/reconnect` for resetting or updating an existing connection.

| Endpoint parameter | Migration instructions |
| - | - |
| `client_id` | No change. |
| `redirect_uri`, `state` | No change. |
| `response_type` | This parameter is not used anymore. |
| `id_connector`, `connectors` | Superseded by `connector_ids` sent to the `/connect` endpoint. |
| `types` | Superseded by `connector_capabilities` sent to the `/connect` endpoint.<br>Use`connector_capabilities=bank` (bank connection) or `connector_capabilities=document` (provider connection). |
| `id_connection` | Superseded by `connection_id` sent to the `/reconnect` endpoint. |

Passing the code or access token as an URL fragment is no longer supported, use the `code` query parameter.

| Callback parameter | Migration instructions |
| - | - |
| `id_connection` | Superseded by `connection_id`.<br>In the `/reconnect` flow, this parameter is not returned anymore. |
| `code` | Still named `code`, but in the `/connect` flow the parameter is now **only** added if an anonymous user was created, i.e. the `code` parameter was **not** provided as a query parameter or fragment.<br>In the `/reconnect` flow, this parameter is not returned anymore. |
| `state` | No change. |

##### Manage connections

```
/accounts
```

This endpoint has been superseded by `/manage`, that now fully allows users to add/remove connections, reset their credentials or recover from error states.

| Endpoint parameter | Migration instructions |
| - | - |
| `client_id` | No change. |
| `redirect_uri`, `state` | No change, these parameters are now optional. |
| `response_type` | This parameter is not used anymore. |
| `types` | Superseded by `connector_capabilities`.<br>Use`connector_capabilities=bank` (bank connection) or `connector_capabilities=document` (provider connection). |

Passing the code or access token as an URL fragment is no longer supported, use the `code` query parameter.

| Callback parameter | Migration instructions |
| - | - |
| `code` | This parameter is not returned anymore. |
| `state` | No change. |

##### Behaviour change

In v3, the `/accounts` flow used to redirect to the `redirect_uri` after a connection addition. This is no longer the case in v4, where redirection is only performed when the user explicitly closes the flow. If you need to perform actions when a connection is added or removed, you should rely on webhooks.

#### Protocol
This section describes the protocol used to set bank and provider accounts of a user, in case you don't want to use the webview.

The idea is to call the following services client-side (with AJAX in case of a web application), to ensure the bank and providers credentials will not be sent to your servers.

1. /auth/init
```http
POST /auth/init
```
```json
{
   "auth_token" : "fBqjMZbYddebUGlkR445JKPA6pCoRaGb",
   "type" : "temporary",
   "expires_in" : 1800,
   "id_user": 1
}
```
This service creates a temporarily token, to use in the "Authorization" header in next calls to the API

The returned token has a life-time of 30 minutes, and should be transfered to the API then (cf Permanent Token), so that your server can get a permanent access_token.

It is possible to generate a permanent token immediately, by calling the service with the manage_token, or by supply parameters client_id and client_secret.

2. /banks or /providers
```http
GET /banks?expand=fields
Authorization: Bearer <token>
```
```json
{
   "hidden" : false,
         "charged" : true,
         "name" : "American Express",
         "id" : 30,
         "fields" : [
            {
               "values" : [
                  {
                     "label" : "Particuliers/Professionnels",
                     "value" : "pp"
                  },
                  {
                     "value" : "ent",
                     "label" : "Entreprises"
                  }
               ],
               "label" : "Type de compte",
               "regex" : null,
               "name" : "website",
               "type" : "list"
            },
            {
               "type" : "password",
               "label" : "Code secret",
               "name" : "password",
               "regex" : "^[0-9]{6}$"
            }
         ],
      },
      ...
   ],
   "total" : 44,
}
```
You get a list of connectors, and all associated fields needed to build the form at step 3.
You can also use that list to show to your user, all available banks.

3. /users/me/connections
Make a POST request and supply the id_bank (ID of the chosen bank) or id_provider (ID of provider), and all requested fields as key/value parameters.
For example:
```http
POST /users/me/connections
Authorization: Bearer <token>
-F login=12345678
-F password=123456
-F id_bank=59
```
You can get the following return codes:

|Code           |Description                                                  |
|---------------|------------------------------------------------------------ |
|200            |The connection has succeed and has been created              |
|202            |It is necessary to provide complementary information. This occurs on the first connection on some kind of Boursorama accounts for example, where a SMS is sent to the customer. It is necessary to ask the user to fill fields requested in the fields, and do a POST again on /users/me/connections/ID, with the connection ID in id_connection. |
|400            |Unable to connect to the website, the field error in the JSON can be **websiteUnavailable** or **wrongpass**  |
|403            |Invalid token                                                |

4. Activate accounts
The accounts the user wants to aggregate must be activated before any transaction or investment is retrieved.
Several accounts can be activated in 1 request by separating the account ids with commas.
```http
PUT /users/me/connections/<id_connection>/accounts/<id_account>?all
```

5. Permanent token
If the user validates the share of his accounts, it is necessary to transform the temporary code to a permanent access_token (so that the user won't expire).

To do that, make a POST request on /auth/token/access with the following parameters:
|Parameter            |Description                                                     |
|---------------------|----------------------------------------------------------------|
|code                 |The temporarily token which will let you get the access_token   |
|client_id            |The ID of your client application                               |
|client_secret        |The secret of your client application                           |

```json
POST /auth/token/access

{
   "client_id" : 17473055,
   "client_secret" : "54tHJHjvodbANVzaRtcLzlHGXQiOgw80",
   "code" : "fBqjMZbYddebUGlkR445JKPA6pCoRaGb"
}
```
```http
HTTP/1.1 200 OK

{
   "access_token" : "7wBPuFfb1Hod82f1+KNa0AmrkIuQ3h1G",
   "token_type":"Bearer"
}
```

### Update accounts
Another important call is when a user wants to add/remove connections to banks or providers, or to change the password on one of them, it is advised to give him a temporarily code from the permanent access_token, with the following call (using the access_token as bearer):
```http
POST /auth/token/code
Authorization: Bearer <token>
```
```json
{
   "code" : "/JiDppWgbmc+5ztHIUJtHl0ynYfw682Z",
   "type" : "temporary",
   "expires_in" : 1800,
}
```
Its life-time is 30 minutes, and let the browser to list connections and accounts, via `GET /users/me/connections?expand=accounts` for example.

 To update the password of a connection, you can do a POST on the *connection* resource, with the field *password* in the data. The new credentials are checked to make sure they are valid, and the return codes are the same as when adding a connection.

## Getting the data (Webhooks)
You have created your users and their connections, now it's time to get the data.
There are 2 ways to retrieve it, the 2 can be complementary:
- make regular calls to the API
- use the webhooks (recommended)

### Manual Synchronization
It is possible to do a manual synchronization of a user. We recommend to use this method in case the user wants fresh data after logging in.

To trigger the synchronization, call the API as below:
`PUT /users/ID/connections`
The following call is blocking until the synchronization is terminated.

Even if it is not recommended, it's possible to fetch synchronously new data. To do that, you can use the *expand* parameter:
` /users/ID/connections?expand=accounts[transactions,investments[type]],subscriptions`
```json
{
   "connections" : [
      {
         "accounts" : [
            {
               "balance" : 7481.01,
               "currency" : {
                  "symbol" : "€",
                  "id" : "EUR",
                  "prefix" : false
               },
               "deleted" : null,
               "display" : true,
               "formatted_balance" : "7 481,01 €",
               "iban" : "FR76131048379405300290000016",
               "id" : 17,
               "id_connection" : 7,
               "investments" : [
                  {
                     "code" : "FR0010330902",
                     "description" : "",
                     "diff" : -67.86,
                     "id" : 55,
                     "id_account" : 19,
                     "id_type" : 1,
                     "label" : "Agressor PEA",
                     "portfolio_share" : 0.48,
                     "prev_diff" : 2019.57,
                     "quantity" : 7.338,
                     "type" : {
                        "color" : "AABBCC",
                        "id" : 1,
                        "name" : "Fonds action"
                     },
                     "unitprice" : 488.98,
                     "unitvalue" : 479.73,
                     "valuation" : 3520.28
                  }
               ],
               "last_update" : "2015-07-04 15:17:30",
               "name" : "Compte chèque",
               "number" : "3002900000",
               "transactions" : [
                  {
                     "active" : true,
                     "application_date" : "2015-06-17",
                     "coming" : false,
                     "comment" : null,
                     "commission" : null,
                     "country" : null,
                     "date" : "2015-06-18",
                     "date_scraped" : "2015-07-04 15:17:30",
                     "deleted" : null,
                     "documents_count" : 0,
                     "formatted_value" : "-16,22 €",
                     "id" : 309,
                     "id_account" : 17,
                     "id_category" : 9998,
                     "id_cluster" : null,
                     "last_update" : "2015-07-04 15:17:30",
                     "new" : true,
                     "original_currency" : null,
                     "original_value" : null,
                     "original_wording" : "FACTURE CB HALL'S BEER",
                     "rdate" : "2015-06-17",
                     "simplified_wording" : "HALL'S BEER",
                     "state" : "parsed",
                     "stemmed_wording" : "HALL'S BEER",
                     "type" : "card",
                     "value" : -16.22,
                     "wording" : "HALL'S BEER"
                  }
               ],
               "type" : "checking"
            }
         ],
         "error" : null,
         "expire" : null,
         "id" : 7,
         "id_user" : 7,
         "id_bank" : 41,
         "last_update" : "2015-07-04 15:17:31"
      }
   ],
   "total" : 1,
}
```

### Background synchronizations & Webhooks
Webhooks are callbacks sent to your server, when an event is triggered during a synchronization.
Synchronizations are automatic, the frequency can be set using the configuration key `autosync.frequency`.
Using webhooks allows you to get the most up-to-date data of your users, after each synchronization.

The automatic synchronization makes it possible to recover new bank entries, or new invoices, at a given frequency.
You have the possibility to add webhooks on several events, and choose to receive each one on a distinct URL.
To see the list of available webhooks you can call the endpoint hereunder:
```
curl https://demo.biapi.pro/2.0/webhooks_events \
  -H 'Authorization: Bearer <token>'
```

The background synchronizations for each user are independent, and their plannings are spread over the day so that they do not overload any website.

Once the synchronization of a user is over, a POST request is sent on the callback URL you have defined, including all webhook data.
A typical json sent to your server is as below:
```http
POST /callback HTTP/1.1
Host: example.org
Content-Length: 959
Accept-Encoding: gzip, deflate, compress
Accept: */*
User-Agent: Budgea API/2.0
Content-Type: application/json; charset=utf-8
Authorization: Bearer sl/wuqgD2eOo+4Zf9FjvAz3YJgU+JKsJ

{
   "connections" : [
      {
         "accounts" : [
            {
               "balance" : 7481.01,
               "currency" : {
                  "symbol" : "€",
                  "id" : "EUR",
                  "prefix" : false
               },
               "deleted" : null,
               "display" : true,
               "formatted_balance" : "7 481,01 €",
               "iban" : "FR76131048379405300290000016",
               "id" : 17,
               "id_connection" : 7,
               "investments" : [
                  {
                     "code" : "FR0010330902",
                     "description" : "",
                     "diff" : -67.86,
                     "id" : 55,
                     "id_account" : 19,
                     "id_type" : 1,
                     "label" : "Agressor PEA",
                     "portfolio_share" : 0.48,
                     "prev_diff" : 2019.57,
                     "quantity" : 7.338,
                     "type" : {
                        "color" : "AABBCC",
                        "id" : 1,
                        "name" : "Fonds action"
                     },
                     "unitprice" : 488.98,
                     "unitvalue" : 479.73,
                     "valuation" : 3520.28
                  }
               ],
               "last_update" : "2015-07-04 15:17:30",
               "name" : "Compte chèque",
               "number" : "3002900000",
               "transactions" : [
                  {
                     "active" : true,
                     "application_date" : "2015-06-17",
                     "coming" : false,
                     "comment" : null,
                     "commission" : null,
                     "country" : null,
                     "date" : "2015-06-18",
                     "date_scraped" : "2015-07-04 15:17:30",
                     "deleted" : null,
                     "documents_count" : 0,
                     "formatted_value" : "-16,22 €",
                     "id" : 309,
                     "id_account" : 17,
                     "id_category" : 9998,
                     "id_cluster" : null,
                     "last_update" : "2015-07-04 15:17:30",
                     "new" : true,
                     "original_currency" : null,
                     "original_value" : null,
                     "original_wording" : "FACTURE CB HALL'S BEER",
                     "rdate" : "2015-06-17",
                     "simplified_wording" : "HALL'S BEER",
                     "state" : "parsed",
                     "stemmed_wording" : "HALL'S BEER",
                     "type" : "card",
                     "value" : -16.22,
                     "wording" : "HALL'S BEER"
                  }
               ],
               "type" : "checking"
            }
         ],
         "bank" : {
            "id_weboob" : "ing",
            "charged" : true,
            "name" : "ING Direct",
            "id" : 7,
            "hidden" : false
         },
         "error" : null,
         "expire" : null,
         "id" : 7,
         "id_user" : 7,
         "id_bank" : 41,
         "last_update" : "2015-07-04 15:17:31"
      }
   ],
   "total" : 1,
   "user" : {
      "signin" : "2015-07-04 15:17:29",
      "id" : 7,
      "platform" : "sharedAccess"
   }
}
```
The authentication on the callback is made with the access_token of the user (which is a shared secret between your server and the Budgea API).

When you are in production, it is needed to define a HTTPS URL using a valid certificate, delivered by a recognized authority. If this is not the case, you can contact us to add your CA (Certificate Authority) to our PKI (Public Key Infrastructure).

Important: it is necessary to send back a HTTP 200 code, without what we consider that data is not correctly taken into account on your system, and it will be sent again at the next user synchronization.

## Guidelines for production
Now you should have integrated the API inside your application. Make sure your Webhooks URLs are in HTTPS, if so you can enable the production state of the API.

To make things great, here are some good practices, please check you have respected them:
- You have provided to your users a way to configure their accounts
- You have provided to your users a way to change their account passwords
- You consider the **error** field of Connections, to alert the user in case the state is **wrongpass**
- You map IDs of Accounts, Subscriptions, Transactions and Documents in your application, to be sure to correctly match them
- When the deleted field is set on a bank transaction, you delete it in your database
- You don't loop on all users to launch synchronizations, this might saturate the service

If you have questions about above points, please contact us. Otherwise, you can put into production!

### Going further
If you want to raise the bar for your app and add features such as the ability to do transfers, get invoices, aggregate patrimony and more, please refer to the sections below.
We'll discuss complementary APIs building upon the aggregation, allowing for the best of financial apps.

## Budgea API Pay
This API allows for the emition of transfers between the aggregated accounts.
Just like the simple aggregation, BI provides a webview or a protocol to follow, to implement this feature.

### API pay protocol
This section describes how the transfer and recipient protocol work, in case you don't want to integrate the webview.
The idea is to do following calls client side (with AJAX in case of a web application), so that the interaction with the Budgea API is transparent.

#### Executing a transfer
1. /auth/token/code
If you do calls client side, get a new temporary code for the user, from the access_token. This will prevent security issues.
```
curl -d '' \
  https://demo.biapi.pro/2.0/auth/token/code \
  -H 'Authorization: Bearer <token>'
```
```json
{
   "code": "/JiDppWgbmc+5ztHIUJtHl0ynYfw682Z",
   "type": "temporary",
   "expires_in": 1800
}
```
The returned token has a life-time of 30 minutes.

2. /users/me/accounts?able_to_transfer=1
List all the accounts that can do transfers. Authenticate the call with the code you got at step 1.
```
curl https://demo.biapi.pro/2.0/users/me/accounts?able_to_transfer=1 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z'
```
```json
{
  "accounts" : [
      {
         "display" : true,
         "balance" : 2893.36,
         "id_type" : 2,
         "number" : "****1572",
         "type" : "checking",
         "deleted" : null,
         "bic" : "BNPAFRPPXXX",
         "bookmarked" : false,
         "coming" : -2702.74,
         "id_user" : 1,
         "original_name" : "Compte de chèques",
         "currency" : {
            "symbol" : "€",
            "id" : "EUR",
            "prefix" : false
         },
         "name" : "lol",
         "iban" : "FR7630004012550000041157244",
         "last_update" : "2016-12-28 12:31:04",
         "id" : 723,
         "formatted_balance" : "2893,36 €",
         "able_to_transfer" : true,
         "id_connection" : 202
      }
   ],
   "total" : 1
}
```

3. /users/me/accounts/ID/recipients
List all available recipients for a given account.
```
curl https://demo.biapi.pro/2.0/users/me/accounts/723/recipients?limit=1 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z'
```
```json
{
  "total" : 27,
   "recipients" : [
      {
         "bank_name" : "BNP PARIBAS",
         "bic" : "BNPAFRPPXXX",
         "category" : "Interne",
         "deleted" : null,
         "enabled_at" : "2016-10-31 18:52:53",
         "expire" : null,
         "iban" : "FR7630004012550003027641744",
         "id" : 1,
         "id_account" : 1,
         "id_target_account" : 2,
         "label" : "Livret A",
         "last_update" : "2016-12-05 12:07:24",
         "time_scraped" : "2016-10-31 18:52:54",
         "webid" : "2741588268268091098819849694548441184167285851255682796371"
      }
   ]
}
```

4. /users/me/accounts/ID/recipients/ID/transfers
Create the transfer
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients/1/transfers \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F amount=10, \
  -F label="Test virement", \
  -F exec_date="2018-09-12" // optional
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "amount" : 10,
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "exec_date" : "2018-09-12",
   "fees" : null
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2018-09-12 10:34:59",
   "state" : "created",
   "webid" : null
}
```

5. /users/me/transfers/ID
Execute the transfer
```
curl \
  https://demo.biapi.pro/2.0/users/me/transfers/22 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F validated=true
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "amount" : 10,
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "exec_date" : "2016-12-19",
   "fees" : null,
   "fields" : [
      {
         "label" : "Code secret BNP Paribas",
         "type" : "password",
         "regex" : "^[0-9]{6}$",
         "name" : "password"
      }
   ],
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2016-12-19 10:34:59",
   "state" : "created",
   "webid" : null
}
```
Here, an authentication step asks user to enter his bank password. The transfer can be validated with:

```
curl \
  https://demo.biapi.pro/2.0/users/me/transfers/22 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F validated=true \
  -F password="123456"
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "amount" : 10,
   "exec_date" : "2016-12-19",
   "fees" : 0,
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2016-12-19 10:34:59",
   "state" : "pending",
   "webid" : "ZZ10C4FKSNP05TK95"
}
```
The field state is changed to *pending*, telling that the transfer has been correctly executed on the bank. A connection synchronization is then launched, to find the bank transaction in the movements history. In this case, the transfer state will be changed to *done*.

#### Adding a recipient
1. /auth/token/code
Get a temporary token for the user. Same procedure than step 1 for a transfer.

2. /users/me/accounts?able_to_transfer=1
List accounts allowing transfers. Same procedure than step 2 for a transfer.

3. /users/me/accounts/ID/recipients/
Add a new recipient.
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F iban=FR7613048379405300290000355 \
  -F label="Papa", \
  -F category="Famille" // optional
```
```json
{
   "bank_name" : "BNP PARIBAS",
   "bic" : "BNPAFRPPXXX",
   "category" : "Famille",
   "deleted" : null,
   "enabled_at" : null,
   "expire" : "2017-04-29 16:56:20",
   "fields" : [
      {
         "label" : "Veuillez entrer le code reçu par SMS",
         "type" : "password",
         "regex" : "^[0-9]{6}$",
         "name" : "sms"
      }
   ],
   "iban" : "FR7613048379405300290000355",
   "id" : 2,
   "id_account" : 1,
   "id_target_account" : null,
   "label" : "Papa",
   "last_update" : "2017-04-29 16:26:20",
   "time_scraped" : null,
   "webid" : null
}
```
It is necessary to post on the object Recipient with the requested fields (here sms), until the add is validated:
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients/2 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F sms="123456"
```
```json
{
   "bank_name" : "BNP PARIBAS",
   "bic" : "BNPAFRPPXXX",
   "category" : "Famille",
   "deleted" : null,
   "enabled_at" : "2017-05-01 00:00:00",
   "expire" : null,
   "iban" : "FR7613048379405300290000355",
   "id" : 2,
   "id_account" : 1,
   "id_target_account" : null,
   "label" : "Papa",
   "last_update" : "2017-04-29 16:26:20",
   "time_scraped" : null,
   "webid" : "2741588268268091098819849694548441184167285851255682796371"
}
```
If the field enabled_at is in the future, it means that it isn't possible yet to execute a transfer, as the bank requires to wait a validation period.

### API Pay Webview
This section describes how to integrate the webview of the Budgea Pay API inside your application, to let your users do transfers to their recipients.

#### User redirection
To redirect the user to the webview, it is necessary to build a URI authenticated with a temporary token.
This can be done from our library, or by calling the endpoint `/auth/token/code` (see the protocol section for an example).
If the parameter **redirect_uri** is supplied, the user will be redirected to that page once the transfer is done.

#### List of pages
Here are a list a pages you may call to redirect your user directly on a page of the process:
|Path                                 |Description of the page                                                           |
|-------------------------------------|----------------------------------------------------------------------------------|
|/transfers                           |List Transfers                                                                    |
|/transfers/accounts                  |List emitter accounts                                                             |
|/transfers/accounts/id/recipients    |List recipients                                                                   |
|/transfers/accounts/id/recipients/id |Initialization of a transfer between the account and the recipient                |
|/transfers/id                        |Detail of a given transfer                                                        |

## Deprecated

This section lists all the deprecated features in Budgea API. The associated date is the date of its removal.
**Do not use them**.

### Key Investments (**2019-06-24**)

Adding a temporary new key "all_investments" that will include deleted investments in the **webhooks**.

### No automatic expand on User objects (**2019-07-30**)
In the API responses, by default, User objects won't display the keys "config", "alert_settings" and "invites" anymore.
You will still be able to access this data by expanding the request.
Example: GET /users/me/?expand=alert_settings,config

### Renaming of "type" field for jwt tokens (**2019-07-30**)
For user's tokens in the jwt format, the "type" field will be renamed from "shared_access" to "sharedAccess".

Base URLs:

* <a href="https://api.apis.guru//budgea.biapi.pro/2.0">https://api.apis.guru//budgea.biapi.pro/2.0</a>

<h1 id="budgea-api-documentation-administration">Administration</h1>

## List clients

> Code samples

```bash
curl https://example.com/clients \
  -H 'Accept: application/json'
```

`GET /clients`

<h3 id="list-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "id": 0,
      "id_logo": 0,
      "name": "",
      "private_key": "",
      "pro": false,
      "public_key": "",
      "redirect_uris": "",
      "secret": ""
    }
  ],
  "total": 0
}
```

<h3 id="list-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|clients|Inline|

<h3 id="list-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[Client](#schemaclient)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Create a client

> Code samples

```bash
curl https://example.com/clients \
  -X POST \
  -H 'Accept: application/json' \
  -F 'config=string' \
  -F 'generate_keys=true' \
  -F 'name=string' \
  -F 'redirect_uris=string'
```

`POST /clients`

> Body parameter

```yaml
config: string
generate_keys: true
name: string
redirect_uris: string
```

<h3 id="create-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|false|none|
|» config|body|string|false|custom config about the client|
|» generate_keys|body|boolean|false|if True, generate a rsa pair of keys so the client can be used to generate jwt user tokens (default: False)|
|» name|body|string|false|name of client|
|» redirect_uris|body|string|false|list of allowed redirect uris|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_logo": 0,
  "name": "",
  "private_key": "",
  "pro": false,
  "public_key": "",
  "redirect_uris": "",
  "secret": ""
}
```

<h3 id="create-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Client resource|[Client](#schemaclient)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a client

> Code samples

```bash
curl https://example.com/clients/0 \
  -H 'Accept: application/json'
```

`GET /clients/{id_client}`

If you use the manage_token or a configuration token, you will get also the client secret.<br><br>

<h3 id="get-information-about-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_client|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_logo": 0,
  "name": "",
  "private_key": "",
  "pro": false,
  "public_key": "",
  "redirect_uris": "",
  "secret": ""
}
```

<h3 id="get-information-about-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Client resource|[Client](#schemaclient)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a client

> Code samples

```bash
curl https://example.com/clients/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'config=string' \
  -F 'description=string' \
  -F 'description_banks=string' \
  -F 'description_providers=string' \
  -F 'generate_keys=true' \
  -F 'name=string' \
  -F 'primary_color=string' \
  -F 'pro=true' \
  -F 'redirect_uris=string' \
  -F 'secondary_color=string' \
  -F 'secret=true' \
  -F 'update_config=true'
```

`PUT /clients/{id_client}`

> Body parameter

```yaml
config: string
description: string
description_banks: string
description_providers: string
generate_keys: true
name: string
primary_color: string
pro: true
redirect_uris: string
secondary_color: string
secret: true
update_config: true
```

<h3 id="update-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_client|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» config|body|string|false|custom config about the client|
|» description|body|string|false|text to display as a default description|
|» description_banks|body|string|false|text to display as a description for banks|
|» description_providers|body|string|false|text to display as a description for providers|
|» generate_keys|body|boolean|false|set a rsa key pair for the client, which make it possible to generate a jwt user token using this client. No effect if the client already has a set of keys(default: False)|
|» name|body|string|false|name of client|
|» primary_color|body|string|false|hexadecimal code of the client primary color (e.g F45B9A)|
|» pro|body|boolean|false|Wether the client should display the company manager page|
|» redirect_uris|body|string|false|list of allowed redirect uris|
|» secondary_color|body|string|false|hexadecimal code of the client secondary color (e.g F45B9A)|
|» secret|body|boolean|false|reset the secret|
|» update_config|body|boolean|false|update the custom information about the client instead of replacing the existing one (default: True)|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_logo": 0,
  "name": "",
  "private_key": "",
  "pro": false,
  "public_key": "",
  "redirect_uris": "",
  "secret": ""
}
```

<h3 id="update-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Client resource|[Client](#schemaclient)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a client

> Code samples

```bash
curl https://example.com/clients/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clients/{id_client}`

<h3 id="delete-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_client|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_logo": 0,
  "name": "",
  "private_key": "",
  "pro": false,
  "public_key": "",
  "redirect_uris": "",
  "secret": ""
}
```

<h3 id="delete-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Client resource|[Client](#schemaclient)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the client logo

> Code samples

```bash
curl https://example.com/clients/0/logo \
  -X POST \
  -H 'Accept: application/json'
```

`POST /clients/{id_client}/logo`

<h3 id="update-the-client-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_client|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "content_type": "",
  "file_size": 0,
  "filename": "",
  "id": 0
}
```

<h3 id="update-the-client-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on File resource|[File](#schemafile)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the client logo

> Code samples

```bash
curl https://example.com/clients/0/logo \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clients/{id_client}/logo`

<h3 id="delete-the-client-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_client|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "content_type": "",
  "file_size": 0,
  "filename": "",
  "id": 0
}
```

<h3 id="delete-the-client-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on File resource|[File](#schemafile)|

<aside class="success">
This operation does not require authentication
</aside>

## Get configuration of the API.

> Code samples

```bash
curl https://example.com/config
```

`GET /config`

<br><br>

<h3 id="get-configuration-of-the-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|limit the results to keys matching the given value|

<h3 id="get-configuration-of-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Insert/update configuration key(s)/value(s) on the API.

> Code samples

```bash
curl https://example.com/config \
  -X POST
```

`POST /config`

<h3 id="insertupdate-configuration-keysvalues-on-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get configuration change history of the API.

> Code samples

```bash
curl https://example.com/config/logs \
  -H 'Accept: application/json'
```

`GET /config/logs`

<br><br>

<h3 id="get-configuration-change-history-of-the-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|limit the results to keys matching the given value|
|type|query|string|false|type of change done on the configuration|
|min_date|query|string(date)|false|minimal date of the change|
|max_date|query|string(date)|false|maximum date of the change|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "configlogs": [
    {
      "id": 0,
      "new_value": "",
      "origin": "",
      "previous_value": "",
      "timestamp": "<function datetime.now at 0x7f5740c0d9d8>",
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-configuration-change-history-of-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|configlogs|Inline|

<h3 id="get-configuration-change-history-of-the-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configlogs|[[ConfigLog](#schemaconfiglog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## get performances stats on this instance

> Code samples

```bash
curl https://example.com/monitoring
```

`GET /monitoring`

<h3 id="get-performances-stats-on-this-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|integer|false|number on days on which stats on synchronization have to be done per worker (Default: 1)|

<h3 id="get-performances-stats-on-this-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get public encryption key of the API.

> Code samples

```bash
curl https://example.com/publickey
```

`GET /publickey`

<h3 id="get-public-encryption-key-of-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test synchronization on a random connection.

> Code samples

```bash
curl https://example.com/test/sync \
  -X POST
```

`POST /test/sync`

It can be used to test receiving data on your webhooks.<br><br>

<h3 id="test-synchronization-on-a-random-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test synchronization on a random connection.

> Code samples

```bash
curl https://example.com/test/webhooks \
  -X POST
```

`POST /test/webhooks`

It can be used to test receiving data on your webhooks.<br><br>

<h3 id="test-synchronization-on-a-random-connection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json'
```

`GET /webhooks`

<h3 id="get-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "webhooks": [
    {
      "created": "2021-08-23 10:35:44.609103",
      "deleted": "2021-08-23 10:35:44.609425",
      "id": 0,
      "id_auth": 0,
      "id_event": 0,
      "id_service": 0,
      "id_user": 0,
      "updated": "2021-08-23 10:35:44.609274",
      "url": ""
    }
  ]
}
```

<h3 id="get-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|webhooks|Inline|

<h3 id="get-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|webhooks|[[Webhook](#schemawebhook)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Adds a new webhook

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Accept: application/json' \
  -F 'event=string' \
  -F 'id_auth=string' \
  -F 'id_service=0' \
  -F 'id_user=0' \
  -F 'params=string' \
  -F 'url=string'
```

`POST /webhooks`

> Body parameter

```yaml
event: string
id_auth: string
id_service: 0
id_user: 0
params: string
url: string
```

<h3 id="adds-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|false|none|
|» event|body|string|false|The webhook event|
|» id_auth|body|string|false|The webhook authentication process to use (its ID or its name)|
|» id_service|body|integer|false|The service ID to associate with the webhook|
|» id_user|body|integer|false|The user ID to associate with the webhook|
|» params|body|string|false|The webhook parameters as an object with three keys: type, key and value|
|» url|body|string|false|The webhook callback url|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="adds-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes all webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks`

Updates the deleted field with the date of the deletion<br><br>

<h3 id="deletes-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="deletes-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## Get webhooks authentication types

> Code samples

```bash
curl https://example.com/webhooks/auth \
  -H 'Accept: application/json'
```

`GET /webhooks/auth`

<h3 id="get-webhooks-authentication-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "authproviders": [
    {
      "id": 0,
      "name": "",
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-webhooks-authentication-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|authproviders|Inline|

<h3 id="get-webhooks-authentication-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authproviders|[[AuthProvider](#schemaauthprovider)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Adds a new webhook authentication type

> Code samples

```bash
curl https://example.com/webhooks/auth \
  -X POST \
  -H 'Accept: application/json' \
  -F 'config=string' \
  -F 'name=string' \
  -F 'type=0'
```

`POST /webhooks/auth`

> Body parameter

```yaml
config: string
name: string
type: 0
```

<h3 id="adds-a-new-webhook-authentication-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|true|none|
|» config|body|string|false|The authentication process configuration. A dict contains either the certificate|
|» name|body|string|true|The name of the authentication process to differentiate|
|» type|body|integer|true|The type of the authentication process (oauth, certificate, token, etc...)|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

<h3 id="adds-a-new-webhook-authentication-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on AuthProvider resource|[AuthProvider](#schemaauthprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes all webhook authentication types

> Code samples

```bash
curl https://example.com/webhooks/auth \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/auth`

<h3 id="deletes-all-webhook-authentication-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

<h3 id="deletes-all-webhook-authentication-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on AuthProvider resource|[AuthProvider](#schemaauthprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the webhook authentication type

> Code samples

```bash
curl https://example.com/webhooks/auth/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'config=string' \
  -F 'name=string' \
  -F 'type=0'
```

`PUT /webhooks/auth/{id_auth}`

> Body parameter

```yaml
config: string
name: string
type: 0
```

<h3 id="updates-the-webhook-authentication-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_auth|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|true|none|
|» config|body|string|false|The authentication process configuration. A dict containt either the certificate|
|» name|body|string|true|The name of the authentication process to differentiate|
|» type|body|integer|true|The type of the authentication process (oauth, certificate, token, etc...)|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

<h3 id="updates-the-webhook-authentication-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on AuthProvider resource|[AuthProvider](#schemaauthprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the webhook authentication type

> Code samples

```bash
curl https://example.com/webhooks/auth/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'config=string' \
  -F 'name=string' \
  -F 'type=0'
```

`POST /webhooks/auth/{id_auth}`

> Body parameter

```yaml
config: string
name: string
type: 0
```

<h3 id="updates-the-webhook-authentication-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_auth|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|true|none|
|» config|body|string|false|The authentication process configuration. A dict containing either the certificate|
|» name|body|string|true|The name of the authentication process to differentiate|
|» type|body|integer|true|The type of the authentication process (oauth, certificate, token, etc...)|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

<h3 id="updates-the-webhook-authentication-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on AuthProvider resource|[AuthProvider](#schemaauthprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes the webhook authentication type

> Code samples

```bash
curl https://example.com/webhooks/auth/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/auth/{id_auth}`

Updates the deleted field with the date of the deletion<br><br>

<h3 id="deletes-the-webhook-authentication-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_auth|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

<h3 id="deletes-the-webhook-authentication-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on AuthProvider resource|[AuthProvider](#schemaauthprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a webhook

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'deleted=string' \
  -F 'event=string' \
  -F 'id_auth=0' \
  -F 'id_service=0' \
  -F 'id_user=0' \
  -F 'url=string'
```

`PUT /webhooks/{id_webhook}`

> Body parameter

```yaml
deleted: string
event: string
id_auth: 0
id_service: 0
id_user: 0
url: string
```

<h3 id="updates-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» deleted|body|string|false|a date to delete the webhook or 'null' to enable it|
|» event|body|string|false|The webhook event|
|» id_auth|body|integer|false|The webhook authentication process to use|
|» id_service|body|integer|false|The service ID to associate with the webhook|
|» id_user|body|integer|false|The user ID to associate with the webhook|
|» url|body|string|false|The webhook callback url|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="updates-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a webhook

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'deleted=string' \
  -F 'event=string' \
  -F 'id_auth=0' \
  -F 'id_service=0' \
  -F 'id_user=0' \
  -F 'url=string'
```

`POST /webhooks/{id_webhook}`

> Body parameter

```yaml
deleted: string
event: string
id_auth: 0
id_service: 0
id_user: 0
url: string
```

<h3 id="updates-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» deleted|body|string|false|a date to delete the webhook or 'null' to enable it|
|» event|body|string|false|The webhook event|
|» id_auth|body|integer|false|The webhook authentication process to use|
|» id_service|body|integer|false|The service ID to associate with the webhook|
|» id_user|body|integer|false|The user ID to associate with the webhook|
|» url|body|string|false|The webhook callback url|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="updates-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a webhook

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/{id_webhook}`

Updates the deleted field with the date of the deletion<br><br>

<h3 id="deletes-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="deletes-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## retrieve the list of the value to add in webhooks when sending the requested webhook

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data \
  -H 'Accept: application/json'
```

`GET /webhooks/{id_webhook}/add_to_data`

<h3 id="retrieve-the-list-of-the-value-to-add-in-webhooks-when-sending-the-requested-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "webhooks": [
    {
      "created": "2021-08-23 10:35:44.609103",
      "deleted": "2021-08-23 10:35:44.609425",
      "id": 0,
      "id_auth": 0,
      "id_event": 0,
      "id_service": 0,
      "id_user": 0,
      "updated": "2021-08-23 10:35:44.609274",
      "url": ""
    }
  ]
}
```

<h3 id="retrieve-the-list-of-the-value-to-add-in-webhooks-when-sending-the-requested-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|webhooks|Inline|

<h3 id="retrieve-the-list-of-the-value-to-add-in-webhooks-when-sending-the-requested-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|webhooks|[[Webhook](#schemawebhook)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Setup a field to store in user config when calling the endpoint

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data \
  -X POST \
  -H 'Accept: application/json'
```

`POST /webhooks/{id_webhook}/add_to_data`

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

<h3 id="setup-a-field-to-store-in-user-config-when-calling-the-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="setup-a-field-to-store-in-user-config-when-calling-the-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## delete all entries

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/{id_webhook}/add_to_data`

<h3 id="delete-all-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="delete-all-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## retrieve the value to add in the requested webhook for the requested name

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data/string \
  -H 'Accept: application/json'
```

`GET /webhooks/{id_webhook}/add_to_data/{key}`

<h3 id="retrieve-the-value-to-add-in-the-requested-webhook-for-the-requested-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|key|path|string|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="retrieve-the-value-to-add-in-the-requested-webhook-for-the-requested-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## upate the requested field to store in user config when calling the endpoint

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /webhooks/{id_webhook}/add_to_data/{key}`

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

<h3 id="upate-the-requested-field-to-store-in-user-config-when-calling-the-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|key|path|string|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="upate-the-requested-field-to-store-in-user-config-when-calling-the-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## delete the requested entry

> Code samples

```bash
curl https://example.com/webhooks/0/add_to_data/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/{id_webhook}/add_to_data/{key}`

<h3 id="delete-the-requested-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|key|path|string|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

<h3 id="delete-the-requested-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Webhook resource|[Webhook](#schemawebhook)|

<aside class="success">
This operation does not require authentication
</aside>

## Get webhooks logs.

> Code samples

```bash
curl https://example.com/webhooks/0/logs \
  -H 'Accept: application/json'
```

`GET /webhooks/{id_webhook}/logs`

Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

<h3 id="get-webhooks-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_webhook|path|integer|true|none|
|id_user|query|integer|false|limit number of results to this user|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal (inclusive) date|
|max_date|query|string(date)|false|maximum (inclusive) date|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "webhooklogs": [
    {
      "id": 0,
      "id_service": 0,
      "id_user": 0,
      "id_webhook_data": 0,
      "next_try": "2021-08-23 10:35:44.614914",
      "response_code": 0,
      "response_date": "2021-08-23 10:35:44.614448",
      "timestamp": "2021-08-23 10:35:44.614374"
    }
  ]
}
```

<h3 id="get-webhooks-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|webhooklogs|Inline|

<h3 id="get-webhooks-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|webhooklogs|[[WebhookLog](#schemawebhooklog)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-authentication">Authentication</h1>

## Generate a jwt manage token

> Code samples

```bash
curl https://example.com/admin/jwt \
  -X POST \
  -H 'Accept: application/json' \
  -F 'duration=0' \
  -F 'scope=string'
```

`POST /admin/jwt`

This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>

> Body parameter

```yaml
duration: 0
scope: string
```

<h3 id="generate-a-jwt-manage-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» duration|body|integer|false|number of minute before the token expiration (0 for token that won't expire unless the client application is deleted) (default: 1)|
|» scope|body|string|false|scope requested for the token (default: config)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="generate-a-jwt-manage-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new anonymous user

> Code samples

```bash
curl https://example.com/auth/init \
  -X POST \
  -H 'Accept: application/json' \
  -F 'client_id=string' \
  -F 'client_secret=string'
```

`POST /auth/init`

This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>

> Body parameter

```yaml
client_id: string
client_secret: string
```

<h3 id="create-a-new-anonymous-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|ID of the client|
|» client_secret|body|string|false|secret of the client|

> Example responses

> 200 Response

```json
{
  "auth_token": "string",
  "expires_in": 0,
  "type": "string"
}
```

<h3 id="create-a-new-anonymous-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-a-new-anonymous-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_token|string|true|none|new token created for the new anonymous user|
|expires_in|integer|false|none|duration in seconds of the token validity|
|type|string|true|none|type of the token|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a user jwt token

> Code samples

```bash
curl https://example.com/auth/jwt \
  -X POST \
  -H 'Accept: application/json' \
  -F 'client_id=string' \
  -F 'client_secret=string' \
  -F 'expire=true' \
  -F 'id_user=0' \
  -F 'scope=string'
```

`POST /auth/jwt`

This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>

> Body parameter

```yaml
client_id: string
client_secret: string
expire: true
id_user: 0
scope: string
```

<h3 id="generate-a-user-jwt-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|id of the client|
|» client_secret|body|string|false|secret for the client|
|» expire|body|boolean|false|if set to True, the token will expire n minutes after its creation, n being the value of configuration key auth.default_token_expire (default: True)|
|» id_user|body|integer|false|user for whom the token has to be generated. If not supplied, a user will be created|
|» scope|body|string|false|scope requested for the token|

> Example responses

> 200 Response

```json
{
  "jwt_token": "string",
  "payload": {}
}
```

<h3 id="generate-a-user-jwt-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="generate-a-user-jwt-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt_token|string|true|none|the jwt token|
|payload|object|true|none|the payload contained in the jwt token|

<aside class="success">
This operation does not require authentication
</aside>

## Get a new access token given an user id and client credentials

> Code samples

```bash
curl https://example.com/auth/renew \
  -X POST \
  -H 'Accept: application/json' \
  -F 'client_id=string' \
  -F 'client_secret=string' \
  -F 'grant_type=string' \
  -F 'id_user=0' \
  -F 'revoke_previous=true'
```

`POST /auth/renew`

> Body parameter

```yaml
client_id: string
client_secret: string
grant_type: string
id_user: 0
revoke_previous: true
```

<h3 id="get-a-new-access-token-given-an-user-id-and-client-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|ID of the client|
|» client_secret|body|string|true|secret of the client|
|» grant_type|body|string|false|default is "client_credentials"|
|» id_user|body|integer|true|id of the user to generate a token for|
|» revoke_previous|body|boolean|false|if true, all other permanent tokens for the user will be deleted|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "token_type": "string"
}
```

<h3 id="get-a-new-access-token-given-an-user-id-and-client-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-new-access-token-given-an-user-id-and-client-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|the access token transformed from the temporary one|
|token_type|string|true|none|the access token type|

<aside class="success">
This operation does not require authentication
</aside>

## Remove user access

> Code samples

```bash
curl https://example.com/auth/token \
  -X DELETE
```

`DELETE /auth/token`

This endpoint removes the token in use.<br><br>

<h3 id="remove-user-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform a temporary code to a access_token

> Code samples

```bash
curl https://example.com/auth/token/access \
  -X POST \
  -H 'Accept: application/json' \
  -F 'client_id=string' \
  -F 'client_secret=string' \
  -F 'code=string' \
  -F 'grant_type=string' \
  -F 'redirect_uri=string'
```

`POST /auth/token/access`

In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>

> Body parameter

```yaml
client_id: string
client_secret: string
code: string
grant_type: string
redirect_uri: string
```

<h3 id="transform-a-temporary-code-to-a-accesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|ID of the client|
|» client_secret|body|string|true|secret of the client|
|» code|body|string|true|user's temporary code|
|» grant_type|body|string|false|default is "authorization_code"|
|» redirect_uri|body|string|false|redirect uri used by user|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "token_type": "string"
}
```

<h3 id="transform-a-temporary-code-to-a-accesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="transform-a-temporary-code-to-a-accesstoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|the access token transformed from the temporary one|
|token_type|string|true|none|the access token type|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a user temporary token

> Code samples

```bash
curl https://example.com/auth/token/code \
  -H 'Accept: application/json'
```

`GET /auth/token/code`

This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>

> Example responses

> 200 Response

```json
{
  "access": "string",
  "code": "string",
  "expires_in": 0,
  "type": {}
}
```

<h3 id="generate-a-user-temporary-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="generate-a-user-temporary-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|true|none|the reusability of a token (standard or single use)|
|code|string|true|none|the temporary token|
|expires_in|integer|true|none|duration in seconds of the token validity|
|type|object|true|none|the token type|

<aside class="success">
This operation does not require authentication
</aside>

## Get the latest certificate of a type

> Code samples

```bash
curl https://example.com/certificate/string \
  -H 'Accept: application/json'
```

`GET /certificate/{type}`

<h3 id="get-the-latest-certificate-of-a-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2021-08-23 10:35:44.254863",
  "id": 0,
  "id_private_key_file": 0,
  "id_public_key_file": 0,
  "type": ""
}
```

<h3 id="get-the-latest-certificate-of-a-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Certificate resource|[Certificate](#schemacertificate)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the user

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}`

This endpoint deletes the user.<br><br>

<h3 id="delete-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "platform": "",
  "signin": "<function datetime.now at 0x7f5740c71620>"
}
```

<h3 id="delete-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on User resource|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## First step to establish an oAuth2 connection.

> Code samples

```bash
curl https://example.com/webauth \
  -F 'client_id=0' \
  -F 'id_transfer=0' \
  -F 'redirect_uri=string' \
  -F 'state=string'
```

`GET /webauth`

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

> Body parameter

```yaml
client_id: 0
id_transfer: 0
redirect_uri: string
state: string
```

<h3 id="first-step-to-establish-an-oauth2-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|integer|false|Client Application ID|
|» id_transfer|body|integer|false|ID of the transfer|
|» redirect_uri|body|string|false|Redirect URI|
|» state|body|string|false|Optional state|

<h3 id="first-step-to-establish-an-oauth2-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-banks">Banks</h1>

## Get account types

> Code samples

```bash
curl https://example.com/account_types \
  -H 'Accept: application/json'
```

`GET /account_types`

<h3 id="get-account-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "accounttypes": [
    {
      "color": "",
      "display_name": "",
      "display_name_p": "",
      "id": 0,
      "id_parent": 0,
      "is_invest": false,
      "name": "",
      "product": "",
      "weboob_type_id": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-account-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|accounttypes|Inline|

<h3 id="get-account-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounttypes|[[AccountType](#schemaaccounttype)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get an account type

> Code samples

```bash
curl https://example.com/account_types/0 \
  -H 'Accept: application/json'
```

`GET /account_types/{id_account_type}`

<h3 id="get-an-account-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_account_type|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "color": "",
  "display_name": "",
  "display_name_p": "",
  "id": 0,
  "id_parent": 0,
  "is_invest": false,
  "name": "",
  "product": "",
  "weboob_type_id": 0
}
```

<h3 id="get-an-account-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on AccountType resource|[AccountType](#schemaaccounttype)|

<aside class="success">
This operation does not require authentication
</aside>

## Create bank categories

> Code samples

```bash
curl https://example.com/banks/categories \
  -X POST \
  -H 'Accept: application/json' \
  -F 'name=string'
```

`POST /banks/categories`

It requires the name of the category to be created<br><br>

> Body parameter

```yaml
name: string
```

<h3 id="create-bank-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|name of the category to be created|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": false
}
```

<h3 id="create-bank-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on ConnectorCategory resource|[ConnectorCategory](#schemaconnectorcategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a bank categories

> Code samples

```bash
curl https://example.com/banks/categories/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'name=string'
```

`POST /banks/categories/{id_category}`

Edit the name for the supplied category.<br><br>

> Body parameter

```yaml
name: string
```

<h3 id="edit-a-bank-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_category|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|new name for the supplied category|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": false
}
```

<h3 id="edit-a-bank-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on ConnectorCategory resource|[ConnectorCategory](#schemaconnectorcategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the supplied category

> Code samples

```bash
curl https://example.com/banks/categories/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /banks/categories/{id_category}`

<h3 id="delete-the-supplied-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_category|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": false
}
```

<h3 id="delete-the-supplied-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on ConnectorCategory resource|[ConnectorCategory](#schemaconnectorcategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a subset of id_connection for a given bank. Different selection methode are possible

> Code samples

```bash
curl https://example.com/banks/0/connections \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/connections`

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

<h3 id="get-a-subset-of-idconnection-for-a-given-bank-different-selection-methode-are-possible-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|method|query|string|false|methode of selection use between 'diversity' (default), 'cover' and 'type_select'|
|n|query|integer|false|the number of requested connections, if applicable by the method|
|type|query|integer|false|for 'type_select' method. Specific account type id (weboob_type_id) to select|
|occurences|query|integer|false|for 'type_select' method. Each connection requires at least N|
|source|query|string|false|specify a source name that should have a null state|
|minutes_without_sync|query|integer|false|Ensure the connection will not have a sync happening for at|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "active": true,
      "created": "<function datetime.now at 0x7f5740f1ad90>",
      "id": 0,
      "id_connector": 0,
      "id_user": 0,
      "last_push": "2021-08-23 10:35:44.203796",
      "last_update": "2021-08-23 10:35:44.203510",
      "next_try": "2021-08-23 10:35:44.203907"
    }
  ],
  "total": 0
}
```

<h3 id="get-a-subset-of-idconnection-for-a-given-bank-different-selection-methode-are-possible-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connections|Inline|

<h3 id="get-a-subset-of-idconnection-for-a-given-bank-different-selection-methode-are-possible-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[Connection](#schemaconnection)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/banks/0/logos \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/logos`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/banks/0/logos/main \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/logos/main`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/banks/0/logos/thumbnail \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/logos/thumbnail`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all categories

> Code samples

```bash
curl https://example.com/categories \
  -H 'Accept: application/json'
```

`GET /categories`

Ressource to get all existing categories<br><br>

<h3 id="get-all-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "color": "",
      "id": 0,
      "id_logo": 0,
      "id_parent_category": 0,
      "id_parent_category_in_menu": 0,
      "id_user": 0,
      "income": false,
      "name": "",
      "name_displayed": "",
      "refundable": false
    }
  ],
  "total": 0
}
```

<h3 id="get-all-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|categories|Inline|

<h3 id="get-all-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new keyword associated with a category in the database.

> Code samples

```bash
curl https://example.com/categories/keywords \
  -X POST \
  -H 'Accept: application/json'
```

`POST /categories/keywords`

If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>

<h3 id="add-a-new-keyword-associated-with-a-category-in-the-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_category": 0,
  "income": false,
  "keyword": "",
  "priority": 0
}
```

<h3 id="add-a-new-keyword-associated-with-a-category-in-the-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Keyword resource|[Keyword](#schemakeyword)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a particular key-value pair on a transaction.

> Code samples

```bash
curl https://example.com/categories/keywords/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /categories/keywords/{id_keyword}`

<h3 id="delete-a-particular-key-value-pair-on-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_keyword|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_category": 0,
  "income": false,
  "keyword": "",
  "priority": 0
}
```

<h3 id="delete-a-particular-key-value-pair-on-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Keyword resource|[Keyword](#schemakeyword)|

<aside class="success">
This operation does not require authentication
</aside>

## categorize transactions without storing them

> Code samples

```bash
curl https://example.com/categorize \
  -X POST \
  -H 'Accept: application/json' \
  -F 'type=string' \
  -F 'value=0' \
  -F 'wording=string'
```

`POST /categorize`

It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>

> Body parameter

```yaml
type: string
value: 0
wording: string
```

<h3 id="categorize-transactions-without-storing-them-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» type|body|string|true|type of the transaction (default: unknown)|
|» value|body|integer|true|value of the transaction|
|» wording|body|string|true|label of the transaction|

> Example responses

> 200 Response

```json
{}
```

<h3 id="categorize-transactions-without-storing-them-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Enable/disable several connectors

> Code samples

```bash
curl https://example.com/connectors \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'hidden=true'
```

`PUT /connectors`

> Body parameter

```yaml
hidden: true
```

<h3 id="enabledisable-several-connectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|false|none|
|» hidden|body|boolean|false|to enable  or disable connector (bank or provider)|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="enabledisable-several-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit the provided connector

> Code samples

```bash
curl https://example.com/connectors/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'auth_mechanism=string' \
  -F 'hidden=true' \
  -F 'id_categories=string' \
  -F 'sync_frequency=0'
```

`PUT /connectors/{id_connector}`

<br><br>

> Body parameter

```yaml
auth_mechanism: string
hidden: true
id_categories: string
sync_frequency: 0
```

<h3 id="edit-the-provided-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» auth_mechanism|body|string|false|the authentication mechanism to use for this connector|
|» hidden|body|boolean|false|to enable  or disable connector (bank or provider)|
|» id_categories|body|string|false|one or several comma separated categories to map to the given connector (or null to map no category)|
|» sync_frequency|body|integer|false|Allows you to overload global sync_frequency param|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="edit-the-provided-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/connectors/0/logos \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/logos`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Create or Update a connector Logo

> Code samples

```bash
curl https://example.com/connectors/0/logos \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /connectors/{id_connector}/logos`

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

<h3 id="create-or-update-a-connector-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_connector": 0,
  "id_file": 0,
  "type": ""
}
```

<h3 id="create-or-update-a-connector-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectorLogo resource|[ConnectorLogo](#schemaconnectorlogo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a connector Logo

> Code samples

```bash
curl https://example.com/connectors/0/logos \
  -X POST \
  -H 'Accept: application/json'
```

`POST /connectors/{id_connector}/logos`

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

<h3 id="create-a-connector-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_connector": 0,
  "id_file": 0,
  "type": ""
}
```

<h3 id="create-a-connector-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on ConnectorLogo resource|[ConnectorLogo](#schemaconnectorlogo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/connectors/0/logos/main \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/logos/main`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/connectors/0/logos/thumbnail \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/logos/thumbnail`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-5-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Create or Update a connector Logo.

> Code samples

```bash
curl https://example.com/connectors/0/logos/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /connectors/{id_connector}/logos/{id_logo}`

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

<h3 id="create-or-update-a-connector-logo-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_logo|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_connector": 0,
  "id_file": 0,
  "type": ""
}
```

<h3 id="create-or-update-a-connector-logo-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectorLogo resource|[ConnectorLogo](#schemaconnectorlogo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a single Logo object.

> Code samples

```bash
curl https://example.com/connectors/0/logos/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /connectors/{id_connector}/logos/{id_logo}`

<h3 id="delete-a-single-logo-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_logo|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_connector": 0,
  "id_file": 0,
  "type": ""
}
```

<h3 id="delete-a-single-logo-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on ConnectorLogo resource|[ConnectorLogo](#schemaconnectorlogo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get invoicing data for a given period (default is the current month).

> Code samples

```bash
curl https://example.com/invoicing
```

`GET /invoicing`

You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>

<h3 id="get-invoicing-data-for-a-given-period-default-is-the-current-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|users_synced|query|string|false|the number of user synchronized during the period|
|users_bank|query|string|false|the number of user of the Bank API synchronized during the period|
|users_bill|query|string|false| the number of user of the Bill API synchronized during the period|
|accounts_synced|query|string|false|the number of accounts synchronized during the period|
|subscriptions_synced|query|string|false|the number of subscriptions synchronized during the period|
|connections_synced|query|string|false|the number of connections synchronized during the period|
|connections_account|query|string|false|the number of Bank API connections synchronized during the period|
|transfers_synced|query|string|false|the number of transfers done during the period|
|payments_synced|query|string|false|the number of payments done during the period|
|all|query|string|false|get all the invoicing data at once|
|detail|query|string|false|get full ids list instead of numbers|

<h3 id="get-invoicing-data-for-a-given-period-default-is-the-current-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a random subset of provider's id_connection

> Code samples

```bash
curl https://example.com/providers/0/connections \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/connections`

By default, it selects a set of 3 connections.<br><br>

<h3 id="get-a-random-subset-of-providers-idconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|range|query|integer|false|the length of the connection subset|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "active": true,
      "created": "<function datetime.now at 0x7f5740f1ad90>",
      "id": 0,
      "id_connector": 0,
      "id_user": 0,
      "last_push": "2021-08-23 10:35:44.203796",
      "last_update": "2021-08-23 10:35:44.203510",
      "next_try": "2021-08-23 10:35:44.203907"
    }
  ],
  "total": 0
}
```

<h3 id="get-a-random-subset-of-providers-idconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connections|Inline|

<h3 id="get-a-random-subset-of-providers-idconnection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[Connection](#schemaconnection)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/providers/0/logos \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/logos`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-6-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/providers/0/logos/main \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/logos/main`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-7-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get all links to the files associated with this connector.

> Code samples

```bash
curl https://example.com/providers/0/logos/thumbnail \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/logos/thumbnail`

This endpoint returns all links to files associated with this connector.<br><br>

<h3 id="get-all-links-to-the-files-associated-with-this-connector-8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectorlogos": [
    {
      "id": 0,
      "id_connector": 0,
      "id_file": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-all-links-to-the-files-associated-with-this-connector-8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectorlogos|Inline|

<h3 id="get-all-links-to-the-files-associated-with-this-connector-8-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorlogos|[[ConnectorLogo](#schemaconnectorlogo)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get details on all psd2 registrations

> Code samples

```bash
curl https://example.com/psd2-registrations \
  -H 'Accept: application/json'
```

`GET /psd2-registrations`

<h3 id="get-details-on-all-psd2-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "psd2registrations": [
    {
      "id": 0,
      "id_connector_source": 0,
      "status": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-details-on-all-psd2-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|psd2registrations|Inline|

<h3 id="get-details-on-all-psd2-registrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|psd2registrations|[[Psd2Registration](#schemapsd2registration)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get details for a given psd2 registration

> Code samples

```bash
curl https://example.com/psd2-registrations/0 \
  -H 'Accept: application/json'
```

`GET /psd2-registrations/{id_psd2-registration}`

<h3 id="get-details-for-a-given-psd2-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_psd2-registration|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_connector_source": 0,
  "status": ""
}
```

<h3 id="get-details-for-a-given-psd2-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Psd2Registration resource|[Psd2Registration](#schemapsd2registration)|

<aside class="success">
This operation does not require authentication
</aside>

## Get psd2 registration logs.

> Code samples

```bash
curl https://example.com/psd2-registrations/0/logs \
  -H 'Accept: application/json'
```

`GET /psd2-registrations/{id_psd2registration}/logs`

Get logs of psd2 registration. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

<h3 id="get-psd2-registration-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_psd2registration|path|integer|true|none|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal (inclusive) date|
|max_date|query|string(date)|false|maximum (inclusive) date|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "psd2registrationlogs": [
    {
      "created_at": "2021-08-23 10:35:44.620718",
      "error_message": "",
      "id": 0,
      "id_psd2registration": 0,
      "type": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-psd2-registration-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|psd2registrationlogs|Inline|

<h3 id="get-psd2-registration-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|psd2registrationlogs|[[Psd2RegistrationLog](#schemapsd2registrationlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get account types

> Code samples

```bash
curl https://example.com/users/string/account_types \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/account_types`

<h3 id="get-account-types-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "accounttypes": [
    {
      "color": "",
      "display_name": "",
      "display_name_p": "",
      "id": 0,
      "id_parent": 0,
      "is_invest": false,
      "name": "",
      "product": "",
      "weboob_type_id": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-account-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|accounttypes|Inline|

<h3 id="get-account-types-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounttypes|[[AccountType](#schemaaccounttype)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get an account type

> Code samples

```bash
curl https://example.com/users/string/account_types/0 \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/account_types/{id_account_type}`

<h3 id="get-an-account-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account_type|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "color": "",
  "display_name": "",
  "display_name_p": "",
  "id": 0,
  "id_parent": 0,
  "is_invest": false,
  "name": "",
  "product": "",
  "weboob_type_id": 0
}
```

<h3 id="get-an-account-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on AccountType resource|[AccountType](#schemaaccounttype)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the category

> Code samples

```bash
curl https://example.com/users/string/accounts/0/categories
```

`GET /users/{id_user}/accounts/{id_account}/categories`

Ressource to get categories for the user's transactions<br><br>

<h3 id="get-the-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account|path|integer|true|none|

<h3 id="get-the-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get clustered transactions

> Code samples

```bash
curl https://example.com/users/string/accounts/0/transactionsclusters \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/accounts/{id_account}/transactionsclusters`

<h3 id="get-clustered-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactionsclusters": [
    {
      "created_by": "",
      "enabled": true,
      "id": 0,
      "id_account": 0,
      "id_category": 0,
      "mean_amount": 0,
      "median_increment": 0,
      "next_date": "2021-08-23",
      "wording": ""
    }
  ]
}
```

<h3 id="get-clustered-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactionsclusters|Inline|

<h3 id="get-clustered-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactionsclusters|[[TransactionsCluster](#schematransactionscluster)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create clustered transaction

> Code samples

```bash
curl https://example.com/users/string/accounts/0/transactionsclusters \
  -X POST \
  -H 'Accept: application/json'
```

`POST /users/{id_user}/accounts/{id_account}/transactionsclusters`

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

<h3 id="create-clustered-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="create-clustered-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/accounts/0/transactionsclusters/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}`

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

<h3 id="edit-a-clustered-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="edit-a-clustered-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/accounts/0/transactionsclusters/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}`

<h3 id="delete-a-clustered-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_account|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="delete-a-clustered-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Get alerts

> Code samples

```bash
curl https://example.com/users/string/alerts \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/alerts`

<h3 id="get-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "alerts": [
    {
      "id": 0,
      "id_account": 0,
      "id_investment": 0,
      "id_transaction": 0,
      "id_user": 0,
      "timestamp": "<function datetime.now at 0x7f5740d7b510>",
      "type": "",
      "value": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|alerts|Inline|

<h3 id="get-alerts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[Alert](#schemaalert)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get the category

> Code samples

```bash
curl https://example.com/users/string/categories
```

`GET /users/{id_user}/categories`

Ressource to get categories for the user's transactions<br><br>

<h3 id="get-the-category-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|

<h3 id="get-the-category-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the category

> Code samples

```bash
curl https://example.com/users/string/categories/full \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/categories/full`

Ressource to get categories<br><br>

<h3 id="get-the-category-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "categorys": [
    {
      "color": "",
      "id": 0,
      "id_logo": 0,
      "id_parent_category": 0,
      "id_parent_category_in_menu": 0,
      "id_user": 0,
      "income": false,
      "name": "",
      "name_displayed": "",
      "refundable": false
    }
  ],
  "total": 0
}
```

<h3 id="get-the-category-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|categorys|Inline|

<h3 id="get-the-category-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categorys|[[Category](#schemacategory)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new transaction category

> Code samples

```bash
curl https://example.com/users/string/categories/full \
  -X POST \
  -H 'Accept: application/json' \
  -F 'accountant_account=string' \
  -F 'color=string' \
  -F 'id_parent_category=0' \
  -F 'id_parent_category_in_menu=0' \
  -F 'income=true' \
  -F 'name=string' \
  -F 'refundable=true'
```

`POST /users/{id_user}/categories/full`

> Body parameter

```yaml
accountant_account: string
color: string
id_parent_category: 0
id_parent_category_in_menu: 0
income: true
name: string
refundable: true
```

<h3 id="create-a-new-transaction-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|
|body|body|object|false|none|
|» accountant_account|body|string|false|Accountant account number.|
|» color|body|string|false|Color of the category.|
|» id_parent_category|body|integer|false|ID of the parent category.|
|» id_parent_category_in_menu|body|integer|false|ID of the parent category to be displayed.|
|» income|body|boolean|false|Is an income category. If null, this is both an income and an expense category.|
|» name|body|string|false|Name of the category.|
|» refundable|body|boolean|false|This category accepts opposite sign of transactions.|

> Example responses

> 200 Response

```json
{
  "color": "",
  "id": 0,
  "id_logo": 0,
  "id_parent_category": 0,
  "id_parent_category_in_menu": 0,
  "id_user": 0,
  "income": false,
  "name": "",
  "name_displayed": "",
  "refundable": false
}
```

<h3 id="create-a-new-transaction-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Category resource|[Category](#schemacategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a user-created category

> Code samples

```bash
curl https://example.com/users/string/categories/full/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'accountant_account=string' \
  -F 'hide=string'
```

`PUT /users/{id_user}/categories/full/{id_full}`

> Body parameter

```yaml
accountant_account: string
hide: string
```

<h3 id="modify-a-user-created-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_full|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» accountant_account|body|string|false|Accountant account number.|
|» hide|body|string|false|Hide (but not delete) a category. Must be 0, 1 or toggle.|

> Example responses

> 200 Response

```json
{
  "color": "",
  "id": 0,
  "id_logo": 0,
  "id_parent_category": 0,
  "id_parent_category_in_menu": 0,
  "id_user": 0,
  "income": false,
  "name": "",
  "name_displayed": "",
  "refundable": false
}
```

<h3 id="modify-a-user-created-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Category resource|[Category](#schemacategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user-created transaction category

> Code samples

```bash
curl https://example.com/users/string/categories/full/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/categories/full/{id_full}`

<h3 id="delete-a-user-created-transaction-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_full|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "color": "",
  "id": 0,
  "id_logo": 0,
  "id_parent_category": 0,
  "id_parent_category_in_menu": 0,
  "id_user": 0,
  "income": false,
  "name": "",
  "name_displayed": "",
  "refundable": false
}
```

<h3 id="delete-a-user-created-transaction-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Category resource|[Category](#schemacategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Get accounts list.

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts`

<h3 id="get-accounts-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "balance": 0,
      "bookmarked": false,
      "coming": 0,
      "company_name": "",
      "currency": "",
      "deleted": "2021-08-23 10:35:44.408402",
      "disabled": "2021-08-23 10:35:44.408472",
      "display": true,
      "error": "",
      "iban": "",
      "id": 0,
      "id_connection": 0,
      "id_parent": 0,
      "id_source": 0,
      "id_type": 0,
      "id_user": 0,
      "last_update": "2021-08-23 10:35:44.408324",
      "name": "",
      "number": "",
      "opening_date": "2021-08-23",
      "original_name": "",
      "ownership": "",
      "usage": "",
      "webid": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-accounts-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|accounts|Inline|

<h3 id="get-accounts-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Update many accounts at once

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/connections/{id_connection}/accounts`

<h3 id="update-many-accounts-at-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

<h3 id="update-many-accounts-at-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Account resource|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an account

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts \
  -X POST \
  -H 'Accept: application/json' \
  -F 'balance=0' \
  -F 'iban=string' \
  -F 'id_connection=0' \
  -F 'id_currency=string' \
  -F 'name=string' \
  -F 'number=string'
```

`POST /users/{id_user}/connections/{id_connection}/accounts`

This endpoint creates an account related to a connection or not.<br><br>

> Body parameter

```yaml
balance: 0
iban: string
id_connection: 0
id_currency: string
name: string
number: string
```

<h3 id="create-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|true|none|
|» balance|body|number(float)|false|balance of account|
|» iban|body|string|false|IBAN of account|
|» id_connection|body|integer|false|the connection to attach to the account|
|» id_currency|body|string|false|the currency of the account (default: 'EUR')|
|» name|body|string|true|name of account|
|» number|body|string|false|number of account|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

<h3 id="create-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Account resource|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all accounts

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts`

<h3 id="delete-all-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

<h3 id="delete-all-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Account resource|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an account

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'balance=0' \
  -F 'bookmarked=true' \
  -F 'disabled=true' \
  -F 'display=true' \
  -F 'iban=string' \
  -F 'name=string' \
  -F 'usage=string'
```

`PUT /users/{id_user}/connections/{id_connection}/accounts/{id_account}`

It updates a specific account<br><br>

> Body parameter

```yaml
balance: 0
bookmarked: true
disabled: true
display: true
iban: string
name: string
usage: string
```

<h3 id="update-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» balance|body|number(float)|false|Balance of the account|
|» bookmarked|body|boolean|false|If the account is bookmarked|
|» disabled|body|boolean|false|If the account is disabled (not synchronized)|
|» display|body|boolean|false|If the account is displayed|
|» iban|body|string|false|IBAN of the account|
|» name|body|string|false|Label of the account|
|» usage|body|string|false|Usage of the account : PRIV, ORGA or ASSO|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

<h3 id="update-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Account resource|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an account.

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts/{id_account}`

It deletes a specific account.<br><br>

<h3 id="delete-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

<h3 id="delete-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Account resource|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the category

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/categories
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/categories`

Ressource to get categories for the user's transactions<br><br>

<h3 id="get-the-category-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|

<h3 id="get-the-category-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get deltas of accounts

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/delta
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/delta`

Get account delta between sums of transactions and difference of account balance for the given period.<br><br>

<h3 id="get-deltas-of-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|period|query|string|false|period to group logs|

<h3 id="get-deltas-of-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get accounts logs.

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/logs \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/logs`

Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

<h3 id="get-accounts-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal (inclusive) date|
|max_date|query|string(date)|false|maximum (inclusive) date|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "accountlogs": [
    {
      "balance": 0,
      "coming": 0,
      "error": "",
      "error_message": "",
      "id": 0,
      "id_account": 0,
      "id_connection_log": 0,
      "id_connector": 0,
      "timestamp": "<function datetime.now at 0x7f5740ee1950>"
    }
  ],
  "total": 0
}
```

<h3 id="get-accounts-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|accountlogs|Inline|

<h3 id="get-accounts-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountlogs|[[AccountLog](#schemaaccountlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get account sources

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/sources \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/sources`

<h3 id="get-account-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "access_expire": "2021-08-23 10:35:44.235793",
      "created": "<function datetime.now at 0x7f5740f46510>",
      "disabled": "2021-08-23 10:35:44.235550",
      "expire": "2021-08-23 10:35:44.235883",
      "id": 0,
      "id_connection": 0,
      "id_connector_source": 0,
      "last_update": "2021-08-23 10:35:44.235451",
      "name": "",
      "next_try": "2021-08-23 10:35:44.236093",
      "state": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-account-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-account-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectionSource](#schemaconnectionsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions`

Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal (inclusive) date|
|max_date|query|string(date)|false|maximum (inclusive) date|
|income|query|boolean|false|filter on income or expenditures|
|deleted|query|boolean|false|display only deleted transactions|
|all|query|boolean|false|display all transactions, including deleted ones|
|last_update|query|string(date-time)|false|get only transactions updated after the specified datetime|
|wording|query|string|false|filter transactions containing the given string|
|min_value|query|number(float)|false|minimal (inclusive) value|
|max_value|query|number(float)|false|maximum (inclusive) value|
|search|query|string|false|search in labels, dates, values and categories|
|value|query|string|false|"XX\|-XX" or "±XX"|
|id_category|query|integer|false|filter on given category id(s) (comma separated) or "null"|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactions": [
    {
      "active": true,
      "application_date": "2021-08-23",
      "bdate": "2021-08-23",
      "bdatetime": "2021-08-23 10:35:44.313780",
      "card": "",
      "coming": false,
      "comment": "",
      "commission": 0,
      "commission_currency": "",
      "counterparty": "",
      "country": "",
      "date": "2021-08-23",
      "date_scraped": "2021-08-23 10:35:44.312472",
      "datetime": "2021-08-23 10:35:44.311470",
      "deleted": "2021-08-23 10:35:44.314252",
      "gross_value": 0,
      "id": 0,
      "id_account": 0,
      "id_category": 0,
      "id_cluster": 0,
      "last_update": "2021-08-23 10:35:44.314171",
      "nature": "inconnu",
      "original_currency": "",
      "original_gross_value": 0,
      "original_value": 0,
      "rdate": "2021-08-23",
      "rdatetime": "2021-08-23 10:35:44.312932",
      "state": "new",
      "value": 0,
      "vdate": "2021-08-23",
      "vdatetime": "2021-08-23 10:35:44.313366",
      "webid": "",
      "wording": ""
    }
  ]
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactions|Inline|

<h3 id="get-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactions|[[Transaction](#schematransaction)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create transactions

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'active=true' \
  -F 'coming=true' \
  -F 'date=1970-01-01' \
  -F 'date_scraped=1970-01-01T00:00:00Z' \
  -F 'id_account=0' \
  -F 'original_wording=string' \
  -F 'rdate=1970-01-01' \
  -F 'state=string' \
  -F 'type=string' \
  -F 'value=0'
```

`POST /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions`

Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>

> Body parameter

```yaml
active: true
coming: true
date: "1970-01-01"
date_scraped: "1970-01-01T00:00:00Z"
id_account: 0
original_wording: string
rdate: "1970-01-01"
state: string
type: string
value: 0
```

<h3 id="create-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|true|none|
|» active|body|boolean|false|1 if the transaction should be taken into account by pfm services (default: 1)|
|» coming|body|boolean|false|1 if the transaction has already been debited (default: 0)|
|» date|body|string(date)|true|date of the transaction|
|» date_scraped|body|string(date-time)|false|date on which the transaction has been found for the first time. YYYY-MM-DD HH:MM:SS(default: now)|
|» id_account|body|integer|false|account of the transaction. If not supplied, it has to be given in the route|
|» original_wording|body|string|true|label of the transaction|
|» rdate|body|string(date)|false|realisation date of the transaction (default: value of date)|
|» state|body|string|false|nature of the transaction (default: new)|
|» type|body|string|false|type of the transaction (default: unknown)|
|» value|body|integer|true|vallue of the transaction|

> Example responses

> 200 Response

```json
{
  "active": true,
  "application_date": "2021-08-23",
  "bdate": "2021-08-23",
  "bdatetime": "2021-08-23 10:35:44.313780",
  "card": "",
  "coming": false,
  "comment": "",
  "commission": 0,
  "commission_currency": "",
  "counterparty": "",
  "country": "",
  "date": "2021-08-23",
  "date_scraped": "2021-08-23 10:35:44.312472",
  "datetime": "2021-08-23 10:35:44.311470",
  "deleted": "2021-08-23 10:35:44.314252",
  "gross_value": 0,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "id_cluster": 0,
  "last_update": "2021-08-23 10:35:44.314171",
  "nature": "inconnu",
  "original_currency": "",
  "original_gross_value": 0,
  "original_value": 0,
  "rdate": "2021-08-23",
  "rdatetime": "2021-08-23 10:35:44.312932",
  "state": "new",
  "value": 0,
  "vdate": "2021-08-23",
  "vdatetime": "2021-08-23 10:35:44.313366",
  "webid": "",
  "wording": ""
}
```

<h3 id="create-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Transaction resource|[Transaction](#schematransaction)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete transactions

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions`

<h3 id="delete-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "application_date": "2021-08-23",
  "bdate": "2021-08-23",
  "bdatetime": "2021-08-23 10:35:44.313780",
  "card": "",
  "coming": false,
  "comment": "",
  "commission": 0,
  "commission_currency": "",
  "counterparty": "",
  "country": "",
  "date": "2021-08-23",
  "date_scraped": "2021-08-23 10:35:44.312472",
  "datetime": "2021-08-23 10:35:44.311470",
  "deleted": "2021-08-23 10:35:44.314252",
  "gross_value": 0,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "id_cluster": 0,
  "last_update": "2021-08-23 10:35:44.314171",
  "nature": "inconnu",
  "original_currency": "",
  "original_gross_value": 0,
  "original_value": 0,
  "rdate": "2021-08-23",
  "rdatetime": "2021-08-23 10:35:44.312932",
  "state": "new",
  "value": 0,
  "vdate": "2021-08-23",
  "vdatetime": "2021-08-23 10:35:44.313366",
  "webid": "",
  "wording": ""
}
```

<h3 id="delete-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Transaction resource|[Transaction](#schematransaction)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a transaction meta-data

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'active=true' \
  -F 'application_date=1970-01-01' \
  -F 'comment=string' \
  -F 'id_category=0' \
  -F 'wording=string'
```

`PUT /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}`

> Body parameter

```yaml
active: true
application_date: "1970-01-01"
comment: string
id_category: 0
wording: string
```

<h3 id="edit-a-transaction-meta-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» active|body|boolean|false|if false, transaction isn't considered in analyzisis endpoints (like /balances)|
|» application_date|body|string(date)|false|change application date of the transaction|
|» comment|body|string|false|change comment|
|» id_category|body|integer|false|ID of the associated category|
|» wording|body|string|false|user rewording of the transaction|

> Example responses

> 200 Response

```json
{
  "active": true,
  "application_date": "2021-08-23",
  "bdate": "2021-08-23",
  "bdatetime": "2021-08-23 10:35:44.313780",
  "card": "",
  "coming": false,
  "comment": "",
  "commission": 0,
  "commission_currency": "",
  "counterparty": "",
  "country": "",
  "date": "2021-08-23",
  "date_scraped": "2021-08-23 10:35:44.312472",
  "datetime": "2021-08-23 10:35:44.311470",
  "deleted": "2021-08-23 10:35:44.314252",
  "gross_value": 0,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "id_cluster": 0,
  "last_update": "2021-08-23 10:35:44.314171",
  "nature": "inconnu",
  "original_currency": "",
  "original_gross_value": 0,
  "original_value": 0,
  "rdate": "2021-08-23",
  "rdatetime": "2021-08-23 10:35:44.312932",
  "state": "new",
  "value": 0,
  "vdate": "2021-08-23",
  "vdatetime": "2021-08-23 10:35:44.313366",
  "webid": "",
  "wording": ""
}
```

<h3 id="edit-a-transaction-meta-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Transaction resource|[Transaction](#schematransaction)|

<aside class="success">
This operation does not require authentication
</aside>

## List all arbitrary key-value pairs on a transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0/informations \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations`

<h3 id="list-all-arbitrary-key-value-pairs-on-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactioninformations": [
    {
      "id": 0,
      "id_transaction": 0,
      "key": "",
      "value": ""
    }
  ]
}
```

<h3 id="list-all-arbitrary-key-value-pairs-on-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactioninformations|Inline|

<h3 id="list-all-arbitrary-key-value-pairs-on-a-transaction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactioninformations|[[TransactionInformation](#schematransactioninformation)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add or edit transaction arbitrary key-value pairs

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0/informations \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations`

<h3 id="add-or-edit-transaction-arbitrary-key-value-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_transaction": 0,
  "key": "",
  "value": ""
}
```

<h3 id="add-or-edit-transaction-arbitrary-key-value-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on TransactionInformation resource|[TransactionInformation](#schematransactioninformation)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all arbitrary key-value pairs of a transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0/informations \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations`

<h3 id="delete-all-arbitrary-key-value-pairs-of-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_transaction": 0,
  "key": "",
  "value": ""
}
```

<h3 id="delete-all-arbitrary-key-value-pairs-of-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionInformation resource|[TransactionInformation](#schematransactioninformation)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a particular arbitrary key-value pair on a transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0/informations/0 \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations/{id_information}`

<h3 id="get-a-particular-arbitrary-key-value-pair-on-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|id_information|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_transaction": 0,
  "key": "",
  "value": ""
}
```

<h3 id="get-a-particular-arbitrary-key-value-pair-on-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on TransactionInformation resource|[TransactionInformation](#schematransactioninformation)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a particular key-value pair on a transaction.

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactions/0/informations/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations/{id_information}`

<h3 id="delete-a-particular-key-value-pair-on-a-transaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transaction|path|integer|true|none|
|id_information|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "id_transaction": 0,
  "key": "",
  "value": ""
}
```

<h3 id="delete-a-particular-key-value-pair-on-a-transaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionInformation resource|[TransactionInformation](#schematransactioninformation)|

<aside class="success">
This operation does not require authentication
</aside>

## Get clustered transactions

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactionsclusters \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters`

<h3 id="get-clustered-transactions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactionsclusters": [
    {
      "created_by": "",
      "enabled": true,
      "id": 0,
      "id_account": 0,
      "id_category": 0,
      "mean_amount": 0,
      "median_increment": 0,
      "next_date": "2021-08-23",
      "wording": ""
    }
  ]
}
```

<h3 id="get-clustered-transactions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactionsclusters|Inline|

<h3 id="get-clustered-transactions-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactionsclusters|[[TransactionsCluster](#schematransactionscluster)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactionsclusters \
  -X POST \
  -H 'Accept: application/json'
```

`POST /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters`

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

<h3 id="create-clustered-transaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="create-clustered-transaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactionsclusters/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}`

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

<h3 id="edit-a-clustered-transaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="edit-a-clustered-transaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/accounts/0/transactionsclusters/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}`

<h3 id="delete-a-clustered-transaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_account|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="delete-a-clustered-transaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Get clustered transactions

> Code samples

```bash
curl https://example.com/users/string/connections/0/transactionsclusters \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/transactionsclusters`

<h3 id="get-clustered-transactions-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactionsclusters": [
    {
      "created_by": "",
      "enabled": true,
      "id": 0,
      "id_account": 0,
      "id_category": 0,
      "mean_amount": 0,
      "median_increment": 0,
      "next_date": "2021-08-23",
      "wording": ""
    }
  ]
}
```

<h3 id="get-clustered-transactions-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactionsclusters|Inline|

<h3 id="get-clustered-transactions-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactionsclusters|[[TransactionsCluster](#schematransactionscluster)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/transactionsclusters \
  -X POST \
  -H 'Accept: application/json'
```

`POST /users/{id_user}/connections/{id_connection}/transactionsclusters`

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

<h3 id="create-clustered-transaction-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="create-clustered-transaction-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/transactionsclusters/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/connections/{id_connection}/transactionsclusters/{id_transactionscluster}`

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

<h3 id="edit-a-clustered-transaction-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="edit-a-clustered-transaction-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/connections/0/transactionsclusters/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/transactionsclusters/{id_transactionscluster}`

<h3 id="delete-a-clustered-transaction-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="delete-a-clustered-transaction-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Get forecast

> Code samples

```bash
curl https://example.com/users/string/forecast
```

`GET /users/{id_user}/forecast`

<h3 id="get-forecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|

<h3 id="get-forecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get clustered transactions

> Code samples

```bash
curl https://example.com/users/string/transactionsclusters \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/transactionsclusters`

<h3 id="get-clustered-transactions-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "transactionsclusters": [
    {
      "created_by": "",
      "enabled": true,
      "id": 0,
      "id_account": 0,
      "id_category": 0,
      "mean_amount": 0,
      "median_increment": 0,
      "next_date": "2021-08-23",
      "wording": ""
    }
  ]
}
```

<h3 id="get-clustered-transactions-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transactionsclusters|Inline|

<h3 id="get-clustered-transactions-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|transactionsclusters|[[TransactionsCluster](#schematransactionscluster)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create clustered transaction

> Code samples

```bash
curl https://example.com/users/string/transactionsclusters \
  -X POST \
  -H 'Accept: application/json'
```

`POST /users/{id_user}/transactionsclusters`

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

<h3 id="create-clustered-transaction-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="create-clustered-transaction-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/transactionsclusters/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/transactionsclusters/{id_transactionscluster}`

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

<h3 id="edit-a-clustered-transaction-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="edit-a-clustered-transaction-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a clustered transaction

> Code samples

```bash
curl https://example.com/users/string/transactionsclusters/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/transactionsclusters/{id_transactionscluster}`

<h3 id="delete-a-clustered-transaction-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_transactionscluster|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

<h3 id="delete-a-clustered-transaction-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on TransactionsCluster resource|[TransactionsCluster](#schematransactionscluster)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-connections">Connections</h1>

## Get list of connectors

> Code samples

```bash
curl https://example.com/banks \
  -H 'Accept: application/json'
```

`GET /banks`

<h3 id="get-list-of-connectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "banks": [
    {
      "auth_mechanism": "",
      "beta": false,
      "charged": true,
      "code": "",
      "color": "",
      "hidden": false,
      "id": 0,
      "months_to_fetch": 0,
      "name": "",
      "restricted": false,
      "siret": "",
      "slug": "",
      "sync_frequency": 0,
      "uuid": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|banks|Inline|

<h3 id="get-list-of-connectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banks|[[Connector](#schemaconnector)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connector

> Code samples

```bash
curl https://example.com/banks/0 \
  -H 'Accept: application/json'
```

`GET /banks/{id_bank}`

<h3 id="get-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_bank|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="get-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of connector sources

> Code samples

```bash
curl https://example.com/banks/0/sources \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/sources`

<h3 id="get-list-of-connector-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "auth_mechanism": "",
      "disabled": "2021-08-23 10:35:44.205371",
      "disabled_capabilities": "",
      "fallback": "",
      "id": 0,
      "id_connector": 0,
      "id_weboob": "",
      "name": "",
      "priority": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connector-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-list-of-connector-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectorSource](#schemaconnectorsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get fields specific to a domain and a source

> Code samples

```bash
curl https://example.com/banks/0/sources/0/fields \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/sources/{id_connector_source}/fields`

<h3 id="get-fields-specific-to-a-domain-and-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_connector_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "source_fields": [
    {
      "id_connector_source": 0,
      "label": "",
      "name": "",
      "regex": "",
      "required": true,
      "secret": true,
      "type": "text"
    }
  ],
  "total": 0
}
```

<h3 id="get-fields-specific-to-a-domain-and-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|source_fields|Inline|

<h3 id="get-fields-specific-to-a-domain-and-a-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_fields|[[ConnectorSourceField](#schemaconnectorsourcefield)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get the connector source

> Code samples

```bash
curl https://example.com/banks/0/sources/0 \
  -H 'Accept: application/json'
```

`GET /banks/{id_connector}/sources/{id_source}`

<h3 id="get-the-connector-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

<h3 id="get-the-connector-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on ConnectorSource resource|[ConnectorSource](#schemaconnectorsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get connections without a user

> Code samples

```bash
curl https://example.com/connections \
  -H 'Accept: application/json'
```

`GET /connections`

<h3 id="get-connections-without-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "active": true,
      "created": "<function datetime.now at 0x7f5740f1ad90>",
      "id": 0,
      "id_connector": 0,
      "id_user": 0,
      "last_push": "2021-08-23 10:35:44.203796",
      "last_update": "2021-08-23 10:35:44.203510",
      "next_try": "2021-08-23 10:35:44.203907"
    }
  ],
  "total": 0
}
```

<h3 id="get-connections-without-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connections|Inline|

<h3 id="get-connections-without-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[Connection](#schemaconnection)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection logs

> Code samples

```bash
curl https://example.com/connections/0/logs \
  -H 'Accept: application/json'
```

`GET /connections/{id_connection}/logs`

Get logs about connections.<br><br>

<h3 id="get-connection-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connection|path|integer|true|none|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|period|query|string|false|period to group logs|
|id_user|query|integer|false|ID of a user|
|id_connection|query|integer|false|ID of a connection|
|id_connector|query|integer|false|ID of a connector|
|connector_uuid|query|string|false|UUID of a connector|
|error|query|string|false|connections log error filter|
|id_source|query|integer|false|ID of a source|
|id_max|query|integer|false|filter "id" of logs, maximum id to return|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectionlogs": [
    {
      "error": "",
      "error_message": "",
      "error_uid": "",
      "id": 0,
      "id_connection": 0,
      "id_connector": 0,
      "id_source": 0,
      "id_user": 0,
      "login": "",
      "nb_accounts": 0,
      "next_try": "2021-08-23 10:35:44.219976",
      "session_folder_id": "",
      "start": "2021-08-23 10:35:44.221393",
      "statut": 0,
      "timestamp": "<function datetime.now at 0x7f5740f766a8>",
      "worker": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectionlogs|Inline|

<h3 id="get-connection-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionlogs|[[ConnectionLog](#schemaconnectionlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection sources

> Code samples

```bash
curl https://example.com/connections/0/sources \
  -H 'Accept: application/json'
```

`GET /connections/{id_connection}/sources`

<h3 id="get-connection-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "access_expire": "2021-08-23 10:35:44.235793",
      "created": "<function datetime.now at 0x7f5740f46510>",
      "disabled": "2021-08-23 10:35:44.235550",
      "expire": "2021-08-23 10:35:44.235883",
      "id": 0,
      "id_connection": 0,
      "id_connector_source": 0,
      "last_update": "2021-08-23 10:35:44.235451",
      "name": "",
      "next_try": "2021-08-23 10:35:44.236093",
      "state": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-connection-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectionSource](#schemaconnectionsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Update connection source

> Code samples

```bash
curl https://example.com/connections/0/sources/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'disabled=true' \
  -F 'force=true' \
  -F 'synchronize=true'
```

`PUT /connections/{id_connection}/sources/{id_source}`

This endpoint is used to enable a source or force a synchronization on it.<br><br>

> Body parameter

```yaml
disabled: true
force: true
synchronize: true
```

<h3 id="update-connection-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|background|query|boolean|false|do the synchronization in background (to use with the synchronize parameter)|
|expand|query|string|false|none|
|body|body|object|false|none|
|» disabled|body|boolean|false|to enable or disable connector source|
|» force|body|boolean|false|whether to force the synchronization on the source if it's in error|
|» synchronize|body|boolean|false|whether to force a synchronization on the source if it's not disabled|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="update-connection-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## &quot;

> Code samples

```bash
curl https://example.com/connections/0/sources/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'disabled=true' \
  -F 'synchronize=true'
```

`POST /connections/{id_connection}/sources/{id_source}`

This endpoint is used to enable a source or force a synchronization on it.<br><br>

> Body parameter

```yaml
disabled: true
synchronize: true
```

<h3 id="postconnectionsidconnectionsourcesidsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|background|query|boolean|false|do the synchronization in background (to use with the sysynchronizenc parameter)|
|expand|query|string|false|none|
|body|body|object|false|none|
|» disabled|body|boolean|false|to enable or disable connector source|
|» synchronize|body|boolean|false|whether to force a synchronization on the source if it's not disabled|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="postconnectionsidconnectionsourcesidsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Disable a connection source

> Code samples

```bash
curl https://example.com/connections/0/sources/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /connections/{id_connection}/sources/{id_source}`

This will make it so the specified source will not be synchronized anymore.<br><br>

<h3 id="disable-a-connection-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="disable-a-connection-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of connectors

> Code samples

```bash
curl https://example.com/connectors \
  -H 'Accept: application/json'
```

`GET /connectors`

<h3 id="get-list-of-connectors-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectors": [
    {
      "auth_mechanism": "",
      "beta": false,
      "charged": true,
      "code": "",
      "color": "",
      "hidden": false,
      "id": 0,
      "months_to_fetch": 0,
      "name": "",
      "restricted": false,
      "siret": "",
      "slug": "",
      "sync_frequency": 0,
      "uuid": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connectors-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectors|Inline|

<h3 id="get-list-of-connectors-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectors|[[Connector](#schemaconnector)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Request a new connector

> Code samples

```bash
curl https://example.com/connectors \
  -X POST \
  -H 'Accept: application/json' \
  -F 'comment=string' \
  -F 'email=string' \
  -F 'login=string' \
  -F 'name=string' \
  -F 'password=string' \
  -F 'sendmail=true' \
  -F 'types=string' \
  -F 'url=string'
```

`POST /connectors`

Send a request to add a new connector<br><br>

> Body parameter

```yaml
comment: string
email: string
login: string
name: string
password: string
sendmail: true
types: string
url: string
```

<h3 id="request-a-new-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|
|body|body|object|true|none|
|» comment|body|string|false|Optionnal comment|
|» email|body|string|false|Email of the user|
|» login|body|string|true|Users login|
|» name|body|string|true|Name of the bank or provider|
|» password|body|string|true|Users password|
|» sendmail|body|boolean|false|if set, send an email to user|
|» types|body|string|false|Type of connector, eg. banks or providers|
|» url|body|string|false|Url of the bank|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="request-a-new-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connector

> Code samples

```bash
curl https://example.com/connectors/0 \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}`

<h3 id="get-a-connector-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="get-a-connector-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of connector sources

> Code samples

```bash
curl https://example.com/connectors/0/sources \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/sources`

<h3 id="get-list-of-connector-sources-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "auth_mechanism": "",
      "disabled": "2021-08-23 10:35:44.205371",
      "disabled_capabilities": "",
      "fallback": "",
      "id": 0,
      "id_connector": 0,
      "id_weboob": "",
      "name": "",
      "priority": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connector-sources-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-list-of-connector-sources-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectorSource](#schemaconnectorsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Edit several connector sources

> Code samples

```bash
curl https://example.com/connectors/0/sources \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'disabled_capabilities=string' \
  -F 'unavailable_capabilities=string'
```

`PUT /connectors/{id_connector}/sources`

> Body parameter

```yaml
disabled_capabilities: string
unavailable_capabilities: string
```

<h3 id="edit-several-connector-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» disabled_capabilities|body|string|false|list (json format) of capabilities the sources will be disabled for|
|» unavailable_capabilities|body|string|false|list (json format) of capabilities the sources will be unavailable for|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

<h3 id="edit-several-connector-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectorSource resource|[ConnectorSource](#schemaconnectorsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get fields specific to a domain and a source

> Code samples

```bash
curl https://example.com/connectors/0/sources/0/fields \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/sources/{id_connector_source}/fields`

<h3 id="get-fields-specific-to-a-domain-and-a-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_connector_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "source_fields": [
    {
      "id_connector_source": 0,
      "label": "",
      "name": "",
      "regex": "",
      "required": true,
      "secret": true,
      "type": "text"
    }
  ],
  "total": 0
}
```

<h3 id="get-fields-specific-to-a-domain-and-a-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|source_fields|Inline|

<h3 id="get-fields-specific-to-a-domain-and-a-source-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_fields|[[ConnectorSourceField](#schemaconnectorsourcefield)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get the connector source

> Code samples

```bash
curl https://example.com/connectors/0/sources/0 \
  -H 'Accept: application/json'
```

`GET /connectors/{id_connector}/sources/{id_source}`

<h3 id="get-the-connector-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

<h3 id="get-the-connector-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on ConnectorSource resource|[ConnectorSource](#schemaconnectorsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit the provided connector source

> Code samples

```bash
curl https://example.com/connectors/0/sources/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'auth_mechanism=string' \
  -F 'disabled=true' \
  -F 'disabled_capabilities=string' \
  -F 'unavailable=true' \
  -F 'unavailable_capabilities=string'
```

`PUT /connectors/{id_connector}/sources/{id_source}`

> Body parameter

```yaml
auth_mechanism: string
disabled: true
disabled_capabilities: string
unavailable: true
unavailable_capabilities: string
```

<h3 id="edit-the-provided-connector-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|
|body|body|object|false|none|
|» auth_mechanism|body|string|false|the authentication mechanism to use for this connector source|
|» disabled|body|boolean|false|to enable or disable connector source|
|» disabled_capabilities|body|string|false|list (json format) of capabilities this source will be disabled for|
|» unavailable|body|boolean|false|to enable or disable the source (can only be edited by BI employees)|
|» unavailable_capabilities|body|string|false|list (json format) of capabilities this source will be unavailable for|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

<h3 id="edit-the-provided-connector-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectorSource resource|[ConnectorSource](#schemaconnectorsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection logs

> Code samples

```bash
curl https://example.com/logs \
  -H 'Accept: application/json'
```

`GET /logs`

Get logs about connections.<br><br>

<h3 id="get-connection-logs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|period|query|string|false|period to group logs|
|id_user|query|integer|false|ID of a user|
|id_connection|query|integer|false|ID of a connection|
|id_connector|query|integer|false|ID of a connector|
|connector_uuid|query|string|false|UUID of a connector|
|error|query|string|false|connections log error filter|
|id_source|query|integer|false|ID of a source|
|id_max|query|integer|false|filter "id" of logs, maximum id to return|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectionlogs": [
    {
      "error": "",
      "error_message": "",
      "error_uid": "",
      "id": 0,
      "id_connection": 0,
      "id_connector": 0,
      "id_source": 0,
      "id_user": 0,
      "login": "",
      "nb_accounts": 0,
      "next_try": "2021-08-23 10:35:44.219976",
      "session_folder_id": "",
      "start": "2021-08-23 10:35:44.221393",
      "statut": 0,
      "timestamp": "<function datetime.now at 0x7f5740f766a8>",
      "worker": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-logs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectionlogs|Inline|

<h3 id="get-connection-logs-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionlogs|[[ConnectionLog](#schemaconnectionlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of connectors

> Code samples

```bash
curl https://example.com/providers \
  -H 'Accept: application/json'
```

`GET /providers`

<h3 id="get-list-of-connectors-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "providers": [
    {
      "auth_mechanism": "",
      "beta": false,
      "charged": true,
      "code": "",
      "color": "",
      "hidden": false,
      "id": 0,
      "months_to_fetch": 0,
      "name": "",
      "restricted": false,
      "siret": "",
      "slug": "",
      "sync_frequency": 0,
      "uuid": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connectors-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|providers|Inline|

<h3 id="get-list-of-connectors-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[Connector](#schemaconnector)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of connector sources

> Code samples

```bash
curl https://example.com/providers/0/sources \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/sources`

<h3 id="get-list-of-connector-sources-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "auth_mechanism": "",
      "disabled": "2021-08-23 10:35:44.205371",
      "disabled_capabilities": "",
      "fallback": "",
      "id": 0,
      "id_connector": 0,
      "id_weboob": "",
      "name": "",
      "priority": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-list-of-connector-sources-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-list-of-connector-sources-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectorSource](#schemaconnectorsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get fields specific to a domain and a source

> Code samples

```bash
curl https://example.com/providers/0/sources/0/fields \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/sources/{id_connector_source}/fields`

<h3 id="get-fields-specific-to-a-domain-and-a-source-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_connector_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "source_fields": [
    {
      "id_connector_source": 0,
      "label": "",
      "name": "",
      "regex": "",
      "required": true,
      "secret": true,
      "type": "text"
    }
  ],
  "total": 0
}
```

<h3 id="get-fields-specific-to-a-domain-and-a-source-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|source_fields|Inline|

<h3 id="get-fields-specific-to-a-domain-and-a-source-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_fields|[[ConnectorSourceField](#schemaconnectorsourcefield)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get the connector source

> Code samples

```bash
curl https://example.com/providers/0/sources/0 \
  -H 'Accept: application/json'
```

`GET /providers/{id_connector}/sources/{id_source}`

<h3 id="get-the-connector-source-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_connector|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

<h3 id="get-the-connector-source-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on ConnectorSource resource|[ConnectorSource](#schemaconnectorsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connector

> Code samples

```bash
curl https://example.com/providers/0 \
  -H 'Accept: application/json'
```

`GET /providers/{id_provider}`

<h3 id="get-a-connector-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_provider|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

<h3 id="get-a-connector-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Connector resource|[Connector](#schemaconnector)|

<aside class="success">
This operation does not require authentication
</aside>

## Get connections

> Code samples

```bash
curl https://example.com/users/string/connections \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections`

<h3 id="get-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "active": true,
      "created": "<function datetime.now at 0x7f5740f1ad90>",
      "id": 0,
      "id_connector": 0,
      "id_user": 0,
      "last_push": "2021-08-23 10:35:44.203796",
      "last_update": "2021-08-23 10:35:44.203510",
      "next_try": "2021-08-23 10:35:44.203907"
    }
  ],
  "total": 0
}
```

<h3 id="get-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connections|Inline|

<h3 id="get-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[Connection](#schemaconnection)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new connection.

> Code samples

```bash
curl https://example.com/users/string/connections \
  -X POST \
  -H 'Accept: application/json' \
  -F 'connector_uuid=string' \
  -F 'id_connector=0'
```

`POST /users/{id_user}/connections`

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

> Body parameter

```yaml
connector_uuid: string
id_connector: 0
```

<h3 id="add-a-new-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|source|query|string|false|optional comma-separated list of sources to use for the connection synchronization|
|expand|query|string|false|none|
|body|body|object|false|none|
|» connector_uuid|body|string|false|optional uuid of the connector (replaces id_connector)|
|» id_connector|body|integer|false|ID of the connector|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

<h3 id="add-a-new-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Connection resource|[Connection](#schemaconnection)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all connections

> Code samples

```bash
curl https://example.com/users/string/connections \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections`

<h3 id="delete-all-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

<h3 id="delete-all-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Connection resource|[Connection](#schemaconnection)|

<aside class="success">
This operation does not require authentication
</aside>

## Force synchronisation of a connection.

> Code samples

```bash
curl https://example.com/users/string/connections/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /users/{id_user}/connections/{id_connection}`

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

<h3 id="force-synchronisation-of-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|last_update|query|string(date-time)|false|if supplied, get transactions inserted since this date|
|background|query|boolean|false|do the connection synchronization in background|
|psu_requested|query|boolean|false|Whether the connection synchronization is asked by the PSU or not (default is true)|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

<h3 id="force-synchronisation-of-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on Connection resource|[Connection](#schemaconnection)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a connection.

> Code samples

```bash
curl https://example.com/users/string/connections/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'active=true' \
  -F 'decoupled=true' \
  -F 'expire=1970-01-01T00:00:00Z' \
  -F 'login=string' \
  -F 'password=string'
```

`POST /users/{id_user}/connections/{id_connection}`

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

> Body parameter

```yaml
active: true
decoupled: true
expire: "1970-01-01T00:00:00Z"
login: string
password: string
```

<h3 id="update-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|background|query|boolean|false|Do the connection update/synchronization in background|
|psu_requested|query|boolean|false|Whether the connection synchronization is asked by the PSU or not (default is true)|
|refresh_psd2_auth|query|boolean|false|Refresh the PSU's SCA for openapi source|
|expand|query|string|false|none|
|body|body|object|false|none|
|» active|body|boolean|false|Set if the connection synchronization is active|
|» decoupled|body|boolean|false|Try to update a connection with the decoupled error|
|» expire|body|string(date-time)|false|Set expiration of the connection to this date|
|» login|body|string|false|Set login to this new login|
|» password|body|string|false|Set password to this new password|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

<h3 id="update-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on Connection resource|[Connection](#schemaconnection)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a connection.

> Code samples

```bash
curl https://example.com/users/string/connections/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}`

This endpoint deletes a connection and all related accounts and transactions.<br><br>

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on Connection resource|[Connection](#schemaconnection)|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection additionnal informations

> Code samples

```bash
curl https://example.com/users/string/connections/0/informations \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/informations`

<br><br>

<h3 id="get-connection-additionnal-informations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "active": true,
      "created": "<function datetime.now at 0x7f5740f1ad90>",
      "id": 0,
      "id_connector": 0,
      "id_user": 0,
      "last_push": "2021-08-23 10:35:44.203796",
      "last_update": "2021-08-23 10:35:44.203510",
      "next_try": "2021-08-23 10:35:44.203907"
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-additionnal-informations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connections|Inline|

<h3 id="get-connection-additionnal-informations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[Connection](#schemaconnection)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection logs

> Code samples

```bash
curl https://example.com/users/string/connections/0/logs \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/logs`

Get logs about connections.<br><br>

<h3 id="get-connection-logs-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|period|query|string|false|period to group logs|
|id_user|query|integer|false|ID of a user|
|id_connection|query|integer|false|ID of a connection|
|id_connector|query|integer|false|ID of a connector|
|connector_uuid|query|string|false|UUID of a connector|
|error|query|string|false|connections log error filter|
|id_source|query|integer|false|ID of a source|
|id_max|query|integer|false|filter "id" of logs, maximum id to return|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectionlogs": [
    {
      "error": "",
      "error_message": "",
      "error_uid": "",
      "id": 0,
      "id_connection": 0,
      "id_connector": 0,
      "id_source": 0,
      "id_user": 0,
      "login": "",
      "nb_accounts": 0,
      "next_try": "2021-08-23 10:35:44.219976",
      "session_folder_id": "",
      "start": "2021-08-23 10:35:44.221393",
      "statut": 0,
      "timestamp": "<function datetime.now at 0x7f5740f766a8>",
      "worker": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-logs-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectionlogs|Inline|

<h3 id="get-connection-logs-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionlogs|[[ConnectionLog](#schemaconnectionlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection sources

> Code samples

```bash
curl https://example.com/users/string/connections/0/sources \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/connections/{id_connection}/sources`

<h3 id="get-connection-sources-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "access_expire": "2021-08-23 10:35:44.235793",
      "created": "<function datetime.now at 0x7f5740f46510>",
      "disabled": "2021-08-23 10:35:44.235550",
      "expire": "2021-08-23 10:35:44.235883",
      "id": 0,
      "id_connection": 0,
      "id_connector_source": 0,
      "last_update": "2021-08-23 10:35:44.235451",
      "name": "",
      "next_try": "2021-08-23 10:35:44.236093",
      "state": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-sources-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sources|Inline|

<h3 id="get-connection-sources-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ConnectionSource](#schemaconnectionsource)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Update connection source

> Code samples

```bash
curl https://example.com/users/string/connections/0/sources/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -F 'disabled=true' \
  -F 'force=true' \
  -F 'synchronize=true'
```

`PUT /users/{id_user}/connections/{id_connection}/sources/{id_source}`

This endpoint is used to enable a source or force a synchronization on it.<br><br>

> Body parameter

```yaml
disabled: true
force: true
synchronize: true
```

<h3 id="update-connection-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|background|query|boolean|false|do the synchronization in background (to use with the synchronize parameter)|
|expand|query|string|false|none|
|body|body|object|false|none|
|» disabled|body|boolean|false|to enable or disable connector source|
|» force|body|boolean|false|whether to force the synchronization on the source if it's in error|
|» synchronize|body|boolean|false|whether to force a synchronization on the source if it's not disabled|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="update-connection-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful PUT on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## &quot;

> Code samples

```bash
curl https://example.com/users/string/connections/0/sources/0 \
  -X POST \
  -H 'Accept: application/json' \
  -F 'disabled=true' \
  -F 'synchronize=true'
```

`POST /users/{id_user}/connections/{id_connection}/sources/{id_source}`

This endpoint is used to enable a source or force a synchronization on it.<br><br>

> Body parameter

```yaml
disabled: true
synchronize: true
```

<h3 id="postusersiduserconnectionsidconnectionsourcesidsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|background|query|boolean|false|do the synchronization in background (to use with the sysynchronizenc parameter)|
|expand|query|string|false|none|
|body|body|object|false|none|
|» disabled|body|boolean|false|to enable or disable connector source|
|» synchronize|body|boolean|false|whether to force a synchronization on the source if it's not disabled|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="postusersiduserconnectionsidconnectionsourcesidsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful POST on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Disable a connection source

> Code samples

```bash
curl https://example.com/users/string/connections/0/sources/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{id_user}/connections/{id_connection}/sources/{id_source}`

This will make it so the specified source will not be synchronized anymore.<br><br>

<h3 id="disable-a-connection-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_connection|path|integer|true|none|
|id_source|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

<h3 id="disable-a-connection-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful DELETE on ConnectionSource resource|[ConnectionSource](#schemaconnectionsource)|

<aside class="success">
This operation does not require authentication
</aside>

## Get connection logs

> Code samples

```bash
curl https://example.com/users/string/logs \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/logs`

Get logs about connections.<br><br>

<h3 id="get-connection-logs-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|limit|query|integer|false|limit number of results|
|offset|query|integer|false|offset of first result|
|min_date|query|string(date)|false|minimal date|
|max_date|query|string(date)|false|maximum date|
|period|query|string|false|period to group logs|
|id_user|query|integer|false|ID of a user|
|id_connection|query|integer|false|ID of a connection|
|id_connector|query|integer|false|ID of a connector|
|connector_uuid|query|string|false|UUID of a connector|
|error|query|string|false|connections log error filter|
|id_source|query|integer|false|ID of a source|
|id_max|query|integer|false|filter "id" of logs, maximum id to return|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "connectionlogs": [
    {
      "error": "",
      "error_message": "",
      "error_uid": "",
      "id": 0,
      "id_connection": 0,
      "id_connector": 0,
      "id_source": 0,
      "id_user": 0,
      "login": "",
      "nb_accounts": 0,
      "next_try": "2021-08-23 10:35:44.219976",
      "session_folder_id": "",
      "start": "2021-08-23 10:35:44.221393",
      "statut": 0,
      "timestamp": "<function datetime.now at 0x7f5740f766a8>",
      "worker": ""
    }
  ],
  "total": 0
}
```

<h3 id="get-connection-logs-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|connectionlogs|Inline|

<h3 id="get-connection-logs-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionlogs|[[ConnectionLog](#schemaconnectionlog)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-pfm">PFM</h1>

## Login to API with credentials

> Code samples

```bash
curl https://example.com/auth/token \
  -X POST \
  -H 'Accept: application/json' \
  -F 'application=string' \
  -F 'grant_type=string' \
  -F 'password=string' \
  -F 'scope=string' \
  -F 'username=string'
```

`POST /auth/token`

Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>

> Body parameter

```yaml
application: string
grant_type: string
password: string
scope: string
username: string
```

<h3 id="login-to-api-with-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» application|body|string|true|application name|
|» grant_type|body|string|false|password when requesting a user token and client_credentials for a payment manage token (default: password)|
|» password|body|string|true|password|
|» scope|body|string|false|scope requested for the token|
|» username|body|string|true|username|

> Example responses

> 200 Response

```json
{
  "expires_in": 0,
  "scope": "string",
  "token": "string"
}
```

<h3 id="login-to-api-with-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="login-to-api-with-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_in|integer|false|none|duration in seconds of the token validity|
|scope|string|true|none|the token scope|
|token|string|true|none|the requested token|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-timeline">Timeline</h1>

## Get incidents logs.

> Code samples

```bash
curl https://example.com/incidents
```

`GET /incidents`

By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>

<h3 id="get-incidents-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|false|comma separated list, filter incidents in the given states.|
|id|query|integer|false|give only the current state of the particular incidents.|
|weboob_id|query|string|false|comma_separated list, filter the incidents of the given weboob_id|
|start_date|query|string|false|filter last_update date >= start_date. YYYY-MM-DD format.|
|end_date|query|string|false|filter last_update date <= start_date. YYYY-MM-DD format.|
|page|query|integer|false|pagination option. Default to 1.|
|size|query|integer|false|pagination option. Default to 30.|

<h3 id="get-incidents-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="budgea-api-documentation-users-management">Users management</h1>

## Get users

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json'
```

`GET /users`

<h3 id="get-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|searches a user by mail (if it contains no '@', '@biapi.pro' will be added at the end)|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "users": [
    {
      "id": 0,
      "platform": "",
      "signin": "<function datetime.now at 0x7f5740c71620>"
    }
  ]
}
```

<h3 id="get-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|users|Inline|

<h3 id="get-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|total number of results|
|users|[[User](#schemauser)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json'
```

`GET /users/{id_user}`

<h3 id="get-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "platform": "",
  "signin": "<function datetime.now at 0x7f5740c71620>"
}
```

<h3 id="get-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on User resource|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Get configuration of a user.

> Code samples

```bash
curl https://example.com/users/string/config \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/config`

<br><br>

<h3 id="get-configuration-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-configuration-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored

> Code samples

```bash
curl https://example.com/users/string/config \
  -X POST
```

`POST /users/{id_user}/config`

<h3 id="change-configuration-of-a-user-modifications-on-keys-prefixed-by-biapi-except-callbackurl-are-ignored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|

<h3 id="change-configuration-of-a-user-modifications-on-keys-prefixed-by-biapi-except-callbackurl-are-ignored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored

> Code samples

```bash
curl https://example.com/users/string/config \
  -X DELETE
```

`DELETE /users/{id_user}/config`

- keys (string): list of coma separated keys to be deleted.<br><br>

<h3 id="delete-the-given-user-configurations-deletions-on-keys-prefixed-by-biapi-except-callbackurl-are-ignored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|

<h3 id="delete-the-given-user-configurations-deletions-on-keys-prefixed-by-biapi-except-callbackurl-are-ignored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|standard HTTP response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get profiles

> Code samples

```bash
curl https://example.com/users/string/profiles \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/profiles`

<h3 id="get-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "profiles": [
    {
      "admin": false,
      "conf": "",
      "id": 0,
      "id_user": 0,
      "lang": "",
      "role": "admin",
      "statut": 0
    }
  ],
  "total": 0
}
```

<h3 id="get-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|profiles|Inline|

<h3 id="get-profiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|[[Profile](#schemaprofile)]|true|none|none|
|total|number|false|none|total number of results|

<aside class="success">
This operation does not require authentication
</aside>

## Get the main profile

> Code samples

```bash
curl https://example.com/users/string/profiles/main \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/profiles/main`

<h3 id="get-the-main-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "admin": false,
  "conf": "",
  "id": 0,
  "id_user": 0,
  "lang": "",
  "role": "admin",
  "statut": 0
}
```

<h3 id="get-the-main-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Profile resource|[Profile](#schemaprofile)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a profile

> Code samples

```bash
curl https://example.com/users/string/profiles/0 \
  -H 'Accept: application/json'
```

`GET /users/{id_user}/profiles/{id_profile}`

<h3 id="get-a-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|id_profile|path|integer|true|none|
|expand|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "admin": false,
  "conf": "",
  "id": 0,
  "id_user": 0,
  "lang": "",
  "role": "admin",
  "statut": 0
}
```

<h3 id="get-a-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful GET on Profile resource|[Profile](#schemaprofile)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a token

> Code samples

```bash
curl https://example.com/users/string/token \
  -X POST \
  -H 'Accept: application/json' \
  -F 'application=string'
```

`POST /users/{id_user}/token`

Create an access_token for this user and get it.<br><br>

> Body parameter

```yaml
application: string
```

<h3 id="create-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_user|path|string|true|Hint: you can use 'me' or 'all'|
|body|body|object|true|none|
|» application|body|string|true|application name|

> Example responses

> 200 Response

```json
{}
```

<h3 id="create-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Access">Access</h2>
<!-- backwards compatibility -->
<a id="schemaaccess"></a>
<a id="schema_Access"></a>
<a id="tocSaccess"></a>
<a id="tocsaccess"></a>

```json
{
  "email": "",
  "id": 0,
  "id_profile": 0,
  "id_role": 0,
  "id_user": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|id|integer|true|none|none|
|id_profile|integer|true|none|none|
|id_role|integer|false|none|none|
|id_user|integer|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "balance": 0,
  "bookmarked": false,
  "coming": 0,
  "company_name": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.408402",
  "disabled": "2021-08-23 10:35:44.408472",
  "display": true,
  "error": "",
  "iban": "",
  "id": 0,
  "id_connection": 0,
  "id_parent": 0,
  "id_source": 0,
  "id_type": 0,
  "id_user": 0,
  "last_update": "2021-08-23 10:35:44.408324",
  "name": "",
  "number": "",
  "opening_date": "2021-08-23",
  "original_name": "",
  "ownership": "",
  "usage": "",
  "webid": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(float)|true|none|Balance of the account|
|bookmarked|integer|true|none|This account has been bookmarked by user|
|coming|number(float)|false|none|Amount of coming operations not yet debited|
|company_name|string|false|none|Name of the company holding the employee savings of the account|
|currency|object|false|none|Account currency|
|deleted|string(date-time)|false|none|This account is not found on the website anymore|
|disabled|string(date-time)|false|none|This account has been deleted by user and will not be synchronized anymore|
|display|boolean|true|none|Display this account in accounts list|
|error|string|false|none|If the last update has failed, the error code|
|iban|string|false|none|Account IBAN|
|id|integer|true|none|ID of the account|
|id_connection|integer|false|none|ID of the related connection|
|id_parent|integer|false|none|Id of the parent account|
|id_source|integer|false|none|ID of the related connection source|
|id_type|integer|false|none|ID of the account type|
|id_user|integer|false|none|ID of the related user|
|last_update|string(date-time)|false|none|Last successful update of the account|
|name|string|false|none|Name of the account|
|number|string|false|none|Account number|
|opening_date|string(date)|false|none|Opening date of the account|
|original_name|string|true|none|Original name of the account on the bank|
|ownership|string|false|none|Relationship between the credentials owner and the account|
|usage|string|false|none|Account usage (if not set by the user, displays the value of original_usage)|
|webid|string|false|none|Account webid|

<h2 id="tocS_AccountLog">AccountLog</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlog"></a>
<a id="schema_AccountLog"></a>
<a id="tocSaccountlog"></a>
<a id="tocsaccountlog"></a>

```json
{
  "balance": 0,
  "coming": 0,
  "error": "",
  "error_message": "",
  "id": 0,
  "id_account": 0,
  "id_connection_log": 0,
  "id_connector": 0,
  "timestamp": "<function datetime.now at 0x7f5740ee1950>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(float)|true|none|Balanced recorded|
|coming|number(float)|false|none|Coming debit recorded|
|error|string|false|none|If fail, contains the error code|
|error_message|string|false|none|If fail, error message received from bank or provider|
|id|integer|true|none|ID of the log|
|id_account|integer|true|none|ID of the related account|
|id_connection_log|integer|false|none|ID of the related connection log|
|id_connector|integer|false|none|provider id|
|timestamp|string(date-time)|true|none|Timestamp of log|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
{
  "color": "",
  "display_name": "",
  "display_name_p": "",
  "id": 0,
  "id_parent": 0,
  "is_invest": false,
  "name": "",
  "product": "",
  "weboob_type_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|Color of the account type (hexdecimal)|
|display_name|string|true|none|Name to display in singular|
|display_name_p|string|true|none|Name to display in plurial|
|id|integer|true|none|ID of the account type|
|id_parent|integer|false|none|Id of the parent type|
|is_invest|boolean|true|none|Is it an investment account|
|name|string|true|none|Name of the account type|
|product|string|false|none|Product associated with the account|
|weboob_type_id|integer|true|none|Map to the weboob_type_id|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "id": 0,
  "id_account": 0,
  "id_investment": 0,
  "id_transaction": 0,
  "id_user": 0,
  "timestamp": "<function datetime.now at 0x7f5740d7b510>",
  "type": "",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|id_account|integer|false|none|ID of the related account|
|id_investment|integer|false|none|ID of the related investment|
|id_transaction|integer|false|none|ID of the related transaction|
|id_user|integer|true|none|ID of the related user|
|timestamp|string(date-time)|true|none|Date of the alerts emission|
|type|string|true|none|Type of the alert|
|value|number(float)|true|none|Amount related to the alert|

<h2 id="tocS_AuthProvider">AuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaauthprovider"></a>
<a id="schema_AuthProvider"></a>
<a id="tocSauthprovider"></a>
<a id="tocsauthprovider"></a>

```json
{
  "id": 0,
  "name": "",
  "type": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string|true|none|Name to differentiate the authentication type|
|type|string|true|none|Authentication type to use when pushing the webhook|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "color": "",
  "id": 0,
  "id_logo": 0,
  "id_parent_category": 0,
  "id_parent_category_in_menu": 0,
  "id_user": 0,
  "income": false,
  "name": "",
  "name_displayed": "",
  "refundable": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|true|none|Color of the category|
|id|integer|true|none|ID of the category|
|id_logo|integer|false|none|ID of the logo|
|id_parent_category|integer|true|none|ID of the parent category. If this is a parent category, it will be equal to its own ID|
|id_parent_category_in_menu|integer|true|none|ID of the parent category to be displayed|
|id_user|integer|false|none|If not null, this category is specific to a user|
|income|boolean|false|none|Is an income category. If null, this is both an income and an expense category|
|name|string|true|none|Name of the category|
|name_displayed|string|false|none|Displayed name, with HTML tags|
|refundable|boolean|true|none|This category accepts opposite sign of transactions|

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "created": "2021-08-23 10:35:44.254863",
  "id": 0,
  "id_private_key_file": 0,
  "id_public_key_file": 0,
  "type": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|none|
|id|integer|true|none|none|
|id_private_key_file|integer|true|none|none|
|id_public_key_file|integer|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "id": 0,
  "id_logo": 0,
  "name": "",
  "private_key": "",
  "pro": false,
  "public_key": "",
  "redirect_uris": "",
  "secret": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|customizable config|
|id|integer|true|none|none|
|id_logo|integer|false|none|none|
|name|string|true|none|none|
|private_key|string|false|none|none|
|pro|boolean|true|none|Should the client display the company manager page.|
|public_key|string|false|none|none|
|redirect_uris|string|true|none|none|
|secret|string|true|none|none|

<h2 id="tocS_ConfigLog">ConfigLog</h2>
<!-- backwards compatibility -->
<a id="schemaconfiglog"></a>
<a id="schema_ConfigLog"></a>
<a id="tocSconfiglog"></a>
<a id="tocsconfiglog"></a>

```json
{
  "id": 0,
  "new_value": "",
  "origin": "",
  "previous_value": "",
  "timestamp": "<function datetime.now at 0x7f5740c0d9d8>",
  "type": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|key|string|true|none|none|
|new_value|string|false|none|none|
|origin|string|false|none|The entity who made the config key modification|
|previous_value|string|false|none|none|
|timestamp|string(date-time)|true|none|Timestamp of when the configuration key was changed|
|type|string|true|none|Action done on the config: add, update or delete|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "active": true,
  "created": "<function datetime.now at 0x7f5740f1ad90>",
  "id": 0,
  "id_connector": 0,
  "id_user": 0,
  "last_push": "2021-08-23 10:35:44.203796",
  "last_update": "2021-08-23 10:35:44.203510",
  "next_try": "2021-08-23 10:35:44.203907"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|This connection is active and will be automatically synced|
|created|string(date-time)|false|none|Creation date|
|id|integer|true|none|ID of connection|
|id_connector|integer|true|none|ID of the related connector|
|id_user|integer|false|none|ID of the related user|
|last_push|string(date-time)|false|none|Last successful push|
|last_update|string(date-time)|false|none|Last successful update|
|next_try|string(date-time)|false|none|Date of next synchronization|

<h2 id="tocS_ConnectionLog">ConnectionLog</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionlog"></a>
<a id="schema_ConnectionLog"></a>
<a id="tocSconnectionlog"></a>
<a id="tocsconnectionlog"></a>

```json
{
  "error": "",
  "error_message": "",
  "error_uid": "",
  "id": 0,
  "id_connection": 0,
  "id_connector": 0,
  "id_source": 0,
  "id_user": 0,
  "login": "",
  "nb_accounts": 0,
  "next_try": "2021-08-23 10:35:44.219976",
  "session_folder_id": "",
  "start": "2021-08-23 10:35:44.221393",
  "statut": 0,
  "timestamp": "<function datetime.now at 0x7f5740f766a8>",
  "worker": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|If fail, contains the error code|
|error_message|string|false|none|If fail, error message received from connector|
|error_uid|string|false|none|MD5 hash of the exception backtrace|
|fields|string|false|none|Fields for connection in additionalInformationNeeded state with background option|
|id|integer|true|none|ID of the log|
|id_connection|integer|true|none|ID of the connection|
|id_connector|integer|false|none|ID of the connector|
|id_source|integer|false|none|ID of the related connection source|
|id_user|integer|false|none|ID of the user|
|login|string|false|none|bcrypt hash of the login|
|nb_accounts|integer|false|none|In case of bank connection, number of accounts|
|next_try|string(date-time)|false|none|If fail, the date represents the next try to connect|
|session_folder_id|string|false|none|Session folder uid|
|start|string(date-time)|false|none|Timestamp when the synchronization has started|
|statut|integer|false|none|Status of user (1 = charged user)|
|timestamp|string(date-time)|true|none|Timestamp of log, when the synchronization has finished|
|worker|string|false|none|Worker used to do synchronization|

<h2 id="tocS_ConnectionSource">ConnectionSource</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionsource"></a>
<a id="schema_ConnectionSource"></a>
<a id="tocSconnectionsource"></a>
<a id="tocsconnectionsource"></a>

```json
{
  "access_expire": "2021-08-23 10:35:44.235793",
  "created": "<function datetime.now at 0x7f5740f46510>",
  "disabled": "2021-08-23 10:35:44.235550",
  "expire": "2021-08-23 10:35:44.235883",
  "id": 0,
  "id_connection": 0,
  "id_connector_source": 0,
  "last_update": "2021-08-23 10:35:44.235451",
  "name": "",
  "next_try": "2021-08-23 10:35:44.236093",
  "state": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_expire|string(date-time)|false|none|Expiration date of the access|
|created|string(date-time)|true|none|Creation date of the connection source|
|disabled|string(date-time)|false|none|This source is not used to synchronize the connection|
|expire|string(date-time)|false|none|Expiration of the connection source. Used to purge the connection in case completion was not finished|
|id|integer|true|none|ID of connection|
|id_connection|integer|true|none|ID of the related connection|
|id_connector_source|integer|true|none|ID of the related connector source|
|last_update|string(date-time)|false|none|Last successful update|
|name|string|true|none|Name of the connection source|
|next_try|string(date-time)|false|none|Date of next synchronization|
|state|string|false|none|If the last update has failed, the state code|

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "auth_mechanism": "",
  "beta": false,
  "charged": true,
  "code": "",
  "color": "",
  "hidden": false,
  "id": 0,
  "months_to_fetch": 0,
  "name": "",
  "restricted": false,
  "siret": "",
  "slug": "",
  "sync_frequency": 0,
  "uuid": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_mechanism|string|false|none|Authentication mechanism to use|
|beta|boolean|true|none|If true, this connector is perhaps unstable :)|
|charged|boolean|true|none|Usage of this connector is charged|
|code|string|false|none|Bank code|
|color|string|false|none|Main color of the bank or provider|
|hidden|boolean|false|none|This connector is hidden from your users|
|id|integer|true|none|ID of the connector|
|months_to_fetch|integer|false|none|How many months of history to fetch|
|name|string|true|none|Name of the bank or provider|
|restricted|boolean|true|none|If true, new connections cannot be added with this connector|
|siret|string|false|none|SIRET code for Bill modules|
|slug|string|false|none|none|
|sync_frequency|number(float)|false|none|How many days to wait between syncs|
|uuid|string|true|none|Unique connector identifier|

<h2 id="tocS_ConnectorCategory">ConnectorCategory</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorcategory"></a>
<a id="schema_ConnectorCategory"></a>
<a id="tocSconnectorcategory"></a>
<a id="tocsconnectorcategory"></a>

```json
{
  "id": 0,
  "name": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|ID of the bank category|
|name|string|true|none|Name of the category|

<h2 id="tocS_ConnectorLogo">ConnectorLogo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorlogo"></a>
<a id="schema_ConnectorLogo"></a>
<a id="tocSconnectorlogo"></a>
<a id="tocsconnectorlogo"></a>

```json
{
  "id": 0,
  "id_connector": 0,
  "id_file": 0,
  "type": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|id_connector|integer|true|none|ID of the connector|
|id_file|integer|true|none|Id of the Bank/Provider Logo|
|type|string|false|none|Logo's type|

<h2 id="tocS_ConnectorSource">ConnectorSource</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsource"></a>
<a id="schema_ConnectorSource"></a>
<a id="tocSconnectorsource"></a>
<a id="tocsconnectorsource"></a>

```json
{
  "auth_mechanism": "",
  "disabled": "2021-08-23 10:35:44.205371",
  "disabled_capabilities": "",
  "fallback": "",
  "id": 0,
  "id_connector": 0,
  "id_weboob": "",
  "name": "",
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_mechanism|string|false|none|Authentication mechanism to use|
|disabled|string(date-time)|false|none|This source is not used to synchronize the connection|
|disabled_capabilities|string|false|none|Comma separated list of capabilities disabled on this connector source|
|fallback|string|false|none|Name of the source this fallback is for|
|id|integer|true|none|ID of the connector source|
|id_connector|integer|true|none|ID of the connector|
|id_weboob|string|true|none|none|
|name|string|true|none|Name of the source|
|priority|integer|false|none|The source priority order for the synchronization|
|stability|string|false|none|last known stability|

<h2 id="tocS_ConnectorSourceField">ConnectorSourceField</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsourcefield"></a>
<a id="schema_ConnectorSourceField"></a>
<a id="tocSconnectorsourcefield"></a>
<a id="tocsconnectorsourcefield"></a>

```json
{
  "id_connector_source": 0,
  "label": "",
  "name": "",
  "regex": "",
  "required": true,
  "secret": true,
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id_connector_source|integer|true|none|ID of the related connector source|
|label|string|true|none|Label to display to user|
|name|string|true|none|Name of the config|
|regex|string|false|none|If set, the value must match this regexp|
|required|boolean|false|none|If true, config has to be set to use this source|
|secret|boolean|false|none|If true, value must be hidden on fronts|
|type|string|false|none|Type of config|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "crypto": false,
  "datetime": "2021-08-23 10:35:44.274832",
  "id": "",
  "marketcap": 0,
  "precision": 2,
  "prefix": false,
  "symbol": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crypto|boolean|false|none|It is a crypto currency or not|
|datetime|string(date-time)|false|none|Time and date of Market Cap (for cryptos)|
|id|string|true|none|ISO 4217 code used as ID|
|marketcap|number(float)|false|none|Market Capitalization in EUR|
|precision|integer|false|none|Numbers of significant digits|
|prefix|boolean|true|none|Amount is prefixed or not by the currency|
|symbol|string|true|none|Symbol representing the currency|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "debug": false,
  "id": 0,
  "id_token": 0,
  "last_update": "<function datetime.now at 0x7f5740d2bd90>",
  "notification_token": "",
  "type": "",
  "version": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|boolean|true|none|none|
|id|integer|true|none|none|
|id_token|integer|true|none|none|
|last_update|string(date-time)|true|none|none|
|notification_token|string|true|none|none|
|type|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "currency": "",
  "date": "2021-08-23 10:35:44.287914",
  "duedate": "2021-08-23",
  "has_file_on_website": true,
  "id": 0,
  "id_category": 0,
  "id_file": 0,
  "id_subscription": 0,
  "id_thumbnail": 0,
  "id_type": 0,
  "id_user": 0,
  "income": true,
  "issuer": "",
  "last_update": "2021-08-23 10:35:44.289188",
  "name": "",
  "number": "",
  "readonly": true,
  "timestamp": "<function datetime.now at 0x7f5740bab6a8>",
  "total_amount": 0,
  "untaxed_amount": 0,
  "vat": 0,
  "webid": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|object|false|none|Document currency|
|date|string(date-time)|false|none|none|
|duedate|string(date)|false|none|none|
|has_file_on_website|boolean|true|none|Boolean to set if file is available on website|
|id|integer|true|none|none|
|id_category|integer|false|none|none|
|id_file|integer|false|none|none|
|id_subscription|integer|false|none|none|
|id_thumbnail|integer|false|none|none|
|id_type|integer|false|none|none|
|id_user|integer|true|none|none|
|income|boolean|false|none|none|
|issuer|string|false|none|none|
|last_update|string(date-time)|false|none|Last successful update of the document|
|name|string|false|none|none|
|number|string|false|none|none|
|readonly|boolean|true|none|none|
|timestamp|string(date-time)|true|none|none|
|total_amount|number(float)|false|none|none|
|untaxed_amount|number(float)|false|none|none|
|vat|number(float)|false|none|none|
|webid|string|false|none|none|

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
{
  "attacheable": true,
  "id": 0,
  "name": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attacheable|boolean|true|none|none|
|id|integer|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "auth_mechanisms": "",
  "connector_sources": "",
  "ephemeral": false,
  "id": 0,
  "id_connector": 0,
  "label": "",
  "name": "",
  "regex": "",
  "required": true,
  "type": "text",
  "value": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_mechanisms|string|false|none|Authentication mechanisms this field is used for|
|connector_sources|string|false|none|Sources this field is used for|
|ephemeral|boolean|false|none|This field will not be saved in database|
|id|integer|true|none|ID of the field|
|id_connector|integer|true|none|ID of the related connector|
|label|string|true|none|Label to display to user|
|name|string|true|none|Name of the field|
|regex|string|false|none|If set, the value must match this regexp|
|required|boolean|true|none|If true, field has to be set to synchronize the connection|
|type|string|false|none|Type of field (text, password, list, hidden)|
|value|string|false|none|Default value of the field|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "content_type": "",
  "file_size": 0,
  "filename": "",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|none|
|file_size|integer|true|none|none|
|filename|string|true|none|none|
|id|integer|true|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "color": "",
  "conf": "",
  "email": "",
  "id": 0,
  "id_logo": 0,
  "id_parent_group": 0,
  "name": "",
  "url": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|conf|string|false|none|none|
|email|string|false|none|none|
|id|integer|true|none|none|
|id_logo|integer|false|none|none|
|id_parent_group|integer|false|none|none|
|name|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_HashTable">HashTable</h2>
<!-- backwards compatibility -->
<a id="schemahashtable"></a>
<a id="schema_HashTable"></a>
<a id="tocShashtable"></a>
<a id="tocshashtable"></a>

```json
{
  "display": true,
  "income": false,
  "nature": "",
  "wording": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display|boolean|true|none|none|
|income|boolean|true|none|none|
|nature|string|true|none|none|
|wording|string|true|none|none|

<h2 id="tocS_IdentityInfo">IdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaidentityinfo"></a>
<a id="schema_IdentityInfo"></a>
<a id="tocSidentityinfo"></a>
<a id="tocsidentityinfo"></a>

```json
{
  "external_ref": "",
  "id": 0,
  "id_user": 0,
  "identification": "",
  "issuer": "",
  "kind": "",
  "scheme_name": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_ref|string|false|none|Label associated with the beneficiary account|
|id|integer|true|none|none|
|id_user|integer|false|none|ID of a related user|
|identification|string|false|none|Identification number|
|issuer|string|false|none|issuer of the identification|
|kind|string|false|none|Kind of the entity|
|scheme_name|string|false|none|Identification number type|

<h2 id="tocS_Investment">Investment</h2>
<!-- backwards compatibility -->
<a id="schemainvestment"></a>
<a id="schema_Investment"></a>
<a id="tocSinvestment"></a>
<a id="tocsinvestment"></a>

```json
{
  "code": "",
  "code_type": "",
  "deleted": "2021-08-23 10:35:44.377160",
  "description": "",
  "diff": 0,
  "diff_percent": 0,
  "id": 0,
  "id_account": 0,
  "id_security": 0,
  "label": "",
  "last_update": "2021-08-23 10:35:44.377092",
  "original_currency": "",
  "original_diff": 0,
  "original_unitprice": 0,
  "original_unitvalue": 0,
  "original_valuation": 0,
  "portfolio_share": 0,
  "prev_diff": 0,
  "prev_vdate": "2021-08-23",
  "quantity": 0,
  "source": "",
  "unitprice": 0,
  "unitvalue": 0,
  "valuation": 0,
  "vdate": "2021-08-23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Investment code|
|code_type|string|false|none|Code type (ISIN of AMF)|
|deleted|string(date-time)|false|none|If set, this investment has been removed from the website|
|description|string|false|none|Description of the investment|
|diff|number(float)|false|none|Capital gain|
|diff_percent|number(float)|false|none|Capital gain in percent (between 0 and 1)|
|id|integer|true|none|ID of the investment|
|id_account|integer|true|none|ID of the related account|
|id_security|integer|false|none|ID of the related security|
|label|string|true|none|Label of the investment|
|last_update|string(date-time)|false|none|Last update of the investment|
|original_currency|object|false|none|Original currency|
|original_diff|number(float)|false|none|Capital gain in the original currency|
|original_unitprice|number(float)|false|none|Current unit value in the original currency|
|original_unitvalue|number(float)|false|none|Average buy price in the original currency|
|original_valuation|number(float)|false|none|Valuation in original currency|
|portfolio_share|number(float)|false|none|Percent of the portfolio|
|prev_diff|number(float)|false|none|Capital gain from previous value|
|prev_vdate|string(date)|false|none|Value date of the previous value (prev_diff)|
|quantity|number(float)|false|none|Quantity|
|source|string|false|none|Source of the ISIN code (website, notFound)|
|unitprice|number(float)|false|none|Average buy price|
|unitvalue|number(float)|false|none|Current unit value|
|valuation|number(float)|false|none|Current valuation|
|vdate|string(date)|false|none|Value date|

<h2 id="tocS_InvestmentValue">InvestmentValue</h2>
<!-- backwards compatibility -->
<a id="schemainvestmentvalue"></a>
<a id="schema_InvestmentValue"></a>
<a id="tocSinvestmentvalue"></a>
<a id="tocsinvestmentvalue"></a>

```json
{
  "id": 0,
  "id_investment": 0,
  "original_currency": "",
  "original_unitvalue": 0,
  "unitvalue": 0,
  "vdate": "2021-08-23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|ID of the value|
|id_investment|integer|true|none|ID of the related investment|
|original_currency|object|false|none|Original currency|
|original_unitvalue|number(float)|false|none|Value on this date, in the original currency|
|unitvalue|number(float)|true|none|Value on this date|
|vdate|string(date)|true|none|Date of this value|

<h2 id="tocS_Keyword">Keyword</h2>
<!-- backwards compatibility -->
<a id="schemakeyword"></a>
<a id="schema_Keyword"></a>
<a id="tocSkeyword"></a>
<a id="tocskeyword"></a>

```json
{
  "id": 0,
  "id_category": 0,
  "income": false,
  "keyword": "",
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|id_category|integer|true|none|none|
|income|boolean|true|none|none|
|keyword|string|true|none|none|
|priority|integer|true|none|none|

<h2 id="tocS_LockedUser">LockedUser</h2>
<!-- backwards compatibility -->
<a id="schemalockeduser"></a>
<a id="schema_LockedUser"></a>
<a id="tocSlockeduser"></a>
<a id="tocslockeduser"></a>

```json
{
  "id_user": 0,
  "timestamp": "<function datetime.now at 0x7f5740d00c80>",
  "worker": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id_user|integer|true|none|none|
|timestamp|string(date-time)|true|none|none|
|worker|string|false|none|none|

<h2 id="tocS_MarketOrder">MarketOrder</h2>
<!-- backwards compatibility -->
<a id="schemamarketorder"></a>
<a id="schema_MarketOrder"></a>
<a id="tocSmarketorder"></a>
<a id="tocsmarketorder"></a>

```json
{
  "amount": 0,
  "code": "",
  "created": "2021-08-23 10:35:44.372113",
  "date": "2021-08-23",
  "deleted": "2021-08-23 10:35:44.372183",
  "execution_date": "2021-08-23",
  "id": 0,
  "id_account": 0,
  "label": "",
  "last_update": "2021-08-23 10:35:44.372022",
  "ordervalue": 0,
  "payment_method": "",
  "quantity": 0,
  "state": "",
  "stock_market": "",
  "unitprice": 0,
  "unitvalue": 0,
  "validity_date": "2021-08-23",
  "webid": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|false|none|Total amount of the market order|
|code|string|false|none|ISIN code of the investment associated with the market order|
|created|string(date-time)|true|none|Insertion date of the market order in bi_market_order|
|date|string(date)|false|none|Creation date of the market order|
|deleted|string(date-time)|false|none|If set, this market order has been removed from the website|
|execution_date|string(date)|false|none|Execution date of the market order|
|id|integer|true|none|ID of the market order|
|id_account|integer|true|none|ID of the related account|
|label|string|true|none|Label of the investment associated with the market order|
|last_update|string(date-time)|false|none|Last update of the market order|
|ordervalue|number(float)|false|none|Limit value or trigger value, only relevant if the order type is LIMIT or TRIGGER|
|payment_method|string|false|none|Payment method for the market order (usually 'SRD' or 'Comptant')|
|quantity|number(float)|false|none|Quantity of stock shares in the market order|
|state|string|false|none|Current state of the market order|
|stock_market|string|false|none|Stock market on which the order was executed|
|unitprice|number(float)|false|none|Value of the stock at the moment of the market order|
|unitvalue|number(float)|false|none|Current value of the stock associated with the market order|
|validity_date|string(date)|false|none|Validity date of the market order|
|webid|string|false|none|Weboob ID of the market order|

<h2 id="tocS_OidcWhitelist">OidcWhitelist</h2>
<!-- backwards compatibility -->
<a id="schemaoidcwhitelist"></a>
<a id="schema_OidcWhitelist"></a>
<a id="tocSoidcwhitelist"></a>
<a id="tocsoidcwhitelist"></a>

```json
{
  "id": 0,
  "redirect_uri": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|redirect_uri|string|true|none|authorized redirect uri|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "client_redirect_uri": "",
  "error_code": "",
  "error_description": "",
  "id": 0,
  "register_date": "2021-08-23 10:35:44.188272",
  "state": "",
  "validate_uri": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_redirect_uri|string|false|none|URL to redirecting to client|
|error_code|string|false|none|In case of error, the error code|
|error_description|string|false|none|Error message|
|id|integer|true|none|none|
|register_date|string(date-time)|false|none|Date of payment registration|
|state|string|false|none|State of the payment|
|validate_uri|string|false|none|URL to validate payment|

<h2 id="tocS_PaymentAccount">PaymentAccount</h2>
<!-- backwards compatibility -->
<a id="schemapaymentaccount"></a>
<a id="schema_PaymentAccount"></a>
<a id="tocSpaymentaccount"></a>
<a id="tocspaymentaccount"></a>

```json
{
  "disabled_date": "2021-08-23 10:35:44.173688",
  "id": 0,
  "id_account": 0,
  "identification": "",
  "issuer": "",
  "label": "",
  "scheme_name": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled_date|string(date-time)|false|none|Date at which the entry was disabled|
|id|integer|true|none|none|
|id_account|integer|false|none|ID of a related account|
|identification|string|false|none|Account identification number|
|issuer|string|false|none|Issuer or bic associated with the account|
|label|string|false|none|Label associated with the beneficiary account|
|scheme_name|string|false|none|Account number type|

<h2 id="tocS_PaymentLog">PaymentLog</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlog"></a>
<a id="schema_PaymentLog"></a>
<a id="tocSpaymentlog"></a>
<a id="tocspaymentlog"></a>

```json
{
  "error_code": "",
  "error_description": "",
  "id": 0,
  "id_file": 0,
  "id_payment": 0,
  "state": "",
  "timestamp": "<function datetime.now at 0x7f5740047f28>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|string|false|none|In case of error, the error code|
|error_description|string|false|none|Error message|
|id|integer|true|none|none|
|id_file|integer|false|none|ID of the related payment file|
|id_payment|integer|false|none|ID of the related payment|
|state|string|false|none|State of the payment|
|timestamp|string(date-time)|true|none|Timestamp of the log|

<h2 id="tocS_Pocket">Pocket</h2>
<!-- backwards compatibility -->
<a id="schemapocket"></a>
<a id="schema_Pocket"></a>
<a id="tocSpocket"></a>
<a id="tocspocket"></a>

```json
{
  "availability_date": "2021-08-23",
  "condition": "inconnu",
  "deleted": "2021-08-23 10:35:44.318086",
  "id": 0,
  "id_account": 0,
  "id_investment": 0,
  "label": "",
  "last_update": "2021-08-23 10:35:44.318015",
  "quantity": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability_date|string(date)|false|none|Availability date of the pocket|
|condition|string|true|none|Withdrawal condition of the pocket|
|deleted|string(date-time)|false|none|If set, this pocket has been removed from the website|
|id|integer|true|none|ID of the pocket|
|id_account|integer|true|none|ID of the related account|
|id_investment|integer|true|none|ID of the related investment|
|label|string|false|none|Label of the pocket|
|last_update|string(date-time)|false|none|Last update of the pocket|
|quantity|number(float)|false|none|Quantity of stocks|
|value|number(float)|true|none|Value of the pocket|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "admin": false,
  "conf": "",
  "id": 0,
  "id_user": 0,
  "lang": "",
  "role": "admin",
  "statut": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|true|none|none|
|conf|string|false|none|none|
|email|string|true|none|none|
|id|integer|true|none|none|
|id_user|integer|true|none|none|
|lang|string|false|none|none|
|role|string|true|none|none|
|statut|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|ser|

<h2 id="tocS_Psd2Registration">Psd2Registration</h2>
<!-- backwards compatibility -->
<a id="schemapsd2registration"></a>
<a id="schema_Psd2Registration"></a>
<a id="tocSpsd2registration"></a>
<a id="tocspsd2registration"></a>

```json
{
  "id": 0,
  "id_connector_source": 0,
  "status": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|id_connector_source|integer|false|none|ID of the connector source|
|status|string|true|none|Current status: created/updated/error|

<h2 id="tocS_Psd2RegistrationLog">Psd2RegistrationLog</h2>
<!-- backwards compatibility -->
<a id="schemapsd2registrationlog"></a>
<a id="schema_Psd2RegistrationLog"></a>
<a id="tocSpsd2registrationlog"></a>
<a id="tocspsd2registrationlog"></a>

```json
{
  "created_at": "2021-08-23 10:35:44.620718",
  "error_message": "",
  "id": 0,
  "id_psd2registration": 0,
  "type": ""
}
```

Keep traces of PSD2 registration calls.
    The table is used by the plugin `psd2registration` to know:
     - whether it must call `update` or `create` routes on the PSD2 APIs when the config is updated
     - the list of PSD2 API to create (needed when a new connector is added)
     - the list of broken connectors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|When this row was created|
|error_message|string|false|none|If fail, error message received from connector|
|id|integer|true|none|none|
|id_psd2registration|integer|false|none|ID of the psd2 registration|
|type|string|true|none|Action done: create, update, delete|

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
{
  "add_verified": false,
  "bank_name": "",
  "category": "",
  "currency": "",
  "deleted": "2021-08-23 10:35:44.378670",
  "enabled_at": "2021-08-23 10:35:44.378801",
  "error": "",
  "expire": "2021-08-23 10:35:44.378737",
  "iban": "",
  "id": 0,
  "id_account": 0,
  "id_target_account": 0,
  "label": "",
  "last_update": "2021-08-23 10:35:44.378535",
  "state": "",
  "time_scraped": "2021-08-23 10:35:44.378602",
  "webid": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_verified|boolean|false|none|Was the recipient adding authorized|
|bank_name|string|false|none|Bank of the recipient|
|category|string|true|none|Category in which the recipient is|
|currency|object|false|none|Currency of the object|
|deleted|string(date-time)|false|none|The recipient isn't found anymore on the bank|
|enabled_at|string(date-time)|false|none|It will be possible to do transfers to this recipient at this date|
|error|string|false|none|Error message|
|expire|string(date-time)|false|none|none|
|fields|string|false|none|Fields for recipient with additionalInformationNeeded state|
|iban|string|false|none|IBAN of the recipient|
|id|integer|true|none|ID of the recipient|
|id_account|integer|true|none|ID of the related account|
|id_target_account|integer|false|none|ID of the target account, in case of internal recipient|
|label|string|true|none|Label of the recipient|
|last_update|string(date-time)|true|none|Last time we have fetched this recipient|
|state|string|false|none|State of recipient|
|time_scraped|string(date-time)|false|none|First time we've seen this recipient|
|webid|string|false|none|Webid of the recipient|

<h2 id="tocS_RecipientLog">RecipientLog</h2>
<!-- backwards compatibility -->
<a id="schemarecipientlog"></a>
<a id="schema_RecipientLog"></a>
<a id="tocSrecipientlog"></a>
<a id="tocsrecipientlog"></a>

```json
{
  "error": "",
  "id": 0,
  "id_file": 0,
  "id_recipient": 0,
  "request_data": "",
  "step": "",
  "timestamp": "<function datetime.now at 0x7f5740ef61e0>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message during recipient addition, if any|
|fields|string|false|none|Fields for recipient in additionalInformationNeeded state with background option|
|id|integer|true|none|ID of the transfer log entry|
|id_file|integer|false|none|ID of the related file|
|id_recipient|integer|false|none|ID of the related recipient|
|request_data|string|false|none|Data stored related to user who has requested the recipient addition|
|step|string|false|none|Step of recipient addition, (add_recipient, asking_field, recipient addition validated, creation, storing_files)|
|timestamp|string(date-time)|true|none|Timestamp of the log|

<h2 id="tocS_Security">Security</h2>
<!-- backwards compatibility -->
<a id="schemasecurity"></a>
<a id="schema_Security"></a>
<a id="tocSsecurity"></a>
<a id="tocssecurity"></a>

```json
{
  "code": "",
  "id": 0,
  "id_type": 0,
  "last_update": "2021-08-23 10:35:44.162155",
  "name": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|ISIN code of the security|
|id|integer|true|none|ID of the security|
|id_type|integer|false|none|ID of the security type|
|last_update|string(date-time)|false|none|Last update of the security|
|name|string|true|none|Name of the security|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "deleted": "2021-08-23 10:35:44.400732",
  "disabled": "2021-08-23 10:35:44.400809",
  "error": "",
  "id": 0,
  "id_connection": 0,
  "id_source": 0,
  "id_user": 0,
  "label": "",
  "last_update": "2021-08-23 10:35:44.400663",
  "number": "",
  "renewdate": "2021-08-23",
  "subscriber": "",
  "validity": "2021-08-23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|string(date-time)|false|none|This subscription is not found on the website anymore|
|disabled|string(date-time)|false|none|This subscription has been deleted by user and will not be synchronized anymore|
|error|string|false|none|If the last update has failed, the error code|
|id|integer|true|none|ID of subscription|
|id_connection|integer|false|none|ID of related connection|
|id_source|integer|false|none|ID of the related connection source|
|id_user|integer|false|none|ID of related user|
|label|string|true|none|Label of the subscription|
|last_update|string(date-time)|false|none|Last successful update of the subscription|
|number|string|true|none|Subscription's number|
|renewdate|string(date)|false|none|Next renew date, if any|
|subscriber|string|false|none|Name of the subscriber|
|validity|string(date)|false|none|The subscription is valid until this date, if any|

<h2 id="tocS_SubscriptionLog">SubscriptionLog</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlog"></a>
<a id="schema_SubscriptionLog"></a>
<a id="tocSsubscriptionlog"></a>
<a id="tocssubscriptionlog"></a>

```json
{
  "error": "",
  "error_message": "",
  "id": 0,
  "id_connection_log": 0,
  "id_source": 0,
  "id_subscription": 0,
  "nb_docs": 0,
  "timestamp": "<function datetime.now at 0x7f5740bab400>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|If fail, contains the error code|
|error_message|string|false|none|If fail, error message received from provider|
|id|integer|true|none|ID of the log|
|id_connection_log|integer|false|none|ID of the related connection log|
|id_source|integer|false|none|ID of the related connection source|
|id_subscription|integer|true|none|ID of the related subscription|
|nb_docs|integer|false|none|Number of docs on the subscription|
|timestamp|string(date-time)|true|none|Timestamp of log|

<h2 id="tocS_TermsOfService">TermsOfService</h2>
<!-- backwards compatibility -->
<a id="schematermsofservice"></a>
<a id="schema_TermsOfService"></a>
<a id="tocStermsofservice"></a>
<a id="tocstermsofservice"></a>

```json
{
  "created": "2021-08-23 10:35:44.452486",
  "deleted": "2021-08-23 10:35:44.452561",
  "id": 0,
  "version": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|none|
|deleted|string(date-time)|false|none|none|
|id|integer|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "active": true,
  "application_date": "2021-08-23",
  "bdate": "2021-08-23",
  "bdatetime": "2021-08-23 10:35:44.313780",
  "card": "",
  "coming": false,
  "comment": "",
  "commission": 0,
  "commission_currency": "",
  "counterparty": "",
  "country": "",
  "date": "2021-08-23",
  "date_scraped": "2021-08-23 10:35:44.312472",
  "datetime": "2021-08-23 10:35:44.311470",
  "deleted": "2021-08-23 10:35:44.314252",
  "gross_value": 0,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "id_cluster": 0,
  "last_update": "2021-08-23 10:35:44.314171",
  "nature": "inconnu",
  "original_currency": "",
  "original_gross_value": 0,
  "original_value": 0,
  "rdate": "2021-08-23",
  "rdatetime": "2021-08-23 10:35:44.312932",
  "state": "new",
  "value": 0,
  "vdate": "2021-08-23",
  "vdatetime": "2021-08-23 10:35:44.313366",
  "webid": "",
  "wording": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|If false, PFM services will ignore this transaction|
|application_date|string(date)|false|none|Date considered by PFM services. It is used to change the month of a transaction, for example.|
|bdate|string(date)|false|none|Date used by the bank for the transaction|
|bdatetime|string(date-time)|false|none|Datetime used by the bank|
|card|string|false|none|Card number associated to the transaction|
|coming|boolean|true|none|If true, this transaction hasn't been yet debited|
|comment|string|false|none|User comment|
|commission|number(float)|false|none|Commission taken on the transaction|
|commission_currency|object|false|none|Commission currency|
|counterparty|string|false|none|Counterparty|
|country|string|false|none|Original country|
|date|string(date)|true|none|Debit date|
|date_scraped|string(date-time)|true|none|Date when the transaction has been seen|
|datetime|string(date-time)|false|none|Datetime of the debit of the transaction|
|deleted|string(date-time)|false|none|If set, this transaction has been removed from the bank|
|gross_value|number(float)|false|none|Gross value of the transaction|
|id|integer|true|none|ID of the transaction|
|id_account|integer|true|none|ID of the related account|
|id_category|integer|false|none|ID of the related category|
|id_cluster|integer|false|none|If the transaction is part of a cluster|
|last_update|string(date-time)|false|none|Last update of the transaction|
|nature|string|true|none|Type of transaction|
|original_currency|object|false|none|Original currency|
|original_gross_value|number(float)|false|none|Gross value in the original currency|
|original_value|number(float)|false|none|Value in the original currency|
|original_wording|string|true|none|Full label of the transaction|
|rdate|string(date)|true|none|Realization of the transaction|
|rdatetime|string(date-time)|false|none|Datetime of the realization of the transaction|
|simplified_wording|string|true|none|Simplified label of the transaction|
|state|string|true|none|Internal state of the transaction|
|stemmed_wording|string|true|none|Do not use it|
|value|number(float)|false|none|Value of the transaction|
|vdate|string(date)|false|none|Value date of the transaction|
|vdatetime|string(date-time)|false|none|Datetime of the Value of the transaction|
|webid|string|false|none|Webid of the transaction|
|wording|string|false|none|Label set by the user|

<h2 id="tocS_TransactionInformation">TransactionInformation</h2>
<!-- backwards compatibility -->
<a id="schematransactioninformation"></a>
<a id="schema_TransactionInformation"></a>
<a id="tocStransactioninformation"></a>
<a id="tocstransactioninformation"></a>

```json
{
  "id": 0,
  "id_transaction": 0,
  "key": "",
  "value": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|ID of this transaction information|
|id_transaction|integer|true|none|ID of the related transaction|
|key|string|true|none|Key of the transaction information|
|value|string|false|none|Value of the transaction information|

<h2 id="tocS_TransactionsCluster">TransactionsCluster</h2>
<!-- backwards compatibility -->
<a id="schematransactionscluster"></a>
<a id="schema_TransactionsCluster"></a>
<a id="tocStransactionscluster"></a>
<a id="tocstransactionscluster"></a>

```json
{
  "created_by": "",
  "enabled": true,
  "id": 0,
  "id_account": 0,
  "id_category": 0,
  "mean_amount": 0,
  "median_increment": 0,
  "next_date": "2021-08-23",
  "wording": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|string|false|none|none|
|enabled|boolean|true|none|none|
|id|integer|true|none|none|
|id_account|integer|true|none|none|
|id_category|integer|false|none|none|
|mean_amount|number(float)|true|none|none|
|median_increment|integer|false|none|none|
|next_date|string(date)|false|none|none|
|wording|string|true|none|none|

<h2 id="tocS_Transfer">Transfer</h2>
<!-- backwards compatibility -->
<a id="schematransfer"></a>
<a id="schema_Transfer"></a>
<a id="tocStransfer"></a>
<a id="tocstransfer"></a>

```json
{
  "account_balance": 0,
  "account_iban": "",
  "amount": 0,
  "beneficiary_label": "",
  "beneficiary_number": "",
  "beneficiary_type": "recipient",
  "currency": "",
  "error": "",
  "exec_date": "2021-08-23",
  "fees": 0,
  "id": 0,
  "id_account": 0,
  "id_recipient": 0,
  "id_transaction": 0,
  "id_user": 0,
  "label": "",
  "recipient_iban": "",
  "register_date": "2021-08-23 10:35:44.320560",
  "state": "",
  "validate_mechanism": "",
  "webid": ""
}
```

This is a representation of a transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_balance|number(float)|false|none|Balance of the account just before the transfer|
|account_iban|string|false|none|IBAN of the debited account|
|amount|number(float)|true|none|Amount of the transfer|
|beneficiary_label|string|false|none|Label of the beneficiary (needed for transfer to other beneficiary type than 'recipient')|
|beneficiary_number|string|false|none|Beneficiary bank identifier value like recipient webid, iban: EX6713281847025300290000062 or phone_number: 06XXXXXX|
|beneficiary_type|string|true|none|Type of beneficiary number, for example: 'recipient' (in bank recipient list), 'iban' or 'phone_number'|
|currency|object|false|none|Currency of the object|
|error|string|false|none|Error message during transfer, if any|
|exec_date|string(date)|true|none|Date when the transfer will be operated by the bank|
|fees|number(float)|false|none|Fees taken by the bank|
|id|integer|true|none|ID of transfer|
|id_account|integer|false|none|ID of the debited account|
|id_recipient|integer|false|none|ID of the recipient|
|id_transaction|integer|false|none|If found, ID of the related transaction|
|id_user|integer|false|none|ID of the related user|
|label|string|false|none|Label of the transfer|
|recipient_iban|string|false|none|IBAN of the recipient in bank recipient list|
|register_date|string(date-time)|true|none|Date when the transfer has been registered|
|state|string|true|none|State of the transfer (created, scheduled, validating, pending, coming, done, canceled, transactionNotFound, deleted, error, bug)|
|validate_mechanism|string|false|none|Authentication method used to validate transfer (credentials or webauth)|
|webid|string|false|none|WebID of the transfer|

<h2 id="tocS_TransferLog">TransferLog</h2>
<!-- backwards compatibility -->
<a id="schematransferlog"></a>
<a id="schema_TransferLog"></a>
<a id="tocStransferlog"></a>
<a id="tocstransferlog"></a>

```json
{
  "error": "",
  "id": 0,
  "id_file": 0,
  "id_transfer": 0,
  "request_data": "",
  "state": "",
  "timestamp": "<function datetime.now at 0x7f5740ef6510>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message during transfer, if any|
|fields|string|false|none|Fields for transfer in additionalInformationNeeded state with background option|
|id|integer|true|none|ID of the transfer log entry|
|id_file|integer|false|none|ID of the related file|
|id_transfer|integer|false|none|ID of the related transfer|
|request_data|string|false|none|Data stored related to user who has requested the transfer|
|state|string|false|none|State of the transfer (created, scheduled, validating, pending, done, canceled, error, bug)|
|timestamp|string(date-time)|true|none|Timestamp of the log|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "platform": "",
  "signin": "<function datetime.now at 0x7f5740c71620>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|platform|string|true|none|none|
|signin|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|platform|web|
|platform|iPad|
|platform|iPhone|
|platform|Android|
|platform|CAstore|
|platform|requestAccess|
|platform|sharedAccess|
|platform|singleAccess|
|platform|transfer|
|platform|refresh_token|

<h2 id="tocS_UserAlert">UserAlert</h2>
<!-- backwards compatibility -->
<a id="schemauseralert"></a>
<a id="schema_UserAlert"></a>
<a id="tocSuseralert"></a>
<a id="tocsuseralert"></a>

```json
{
  "apply": "",
  "balance_max": 10000,
  "balance_min1": 500,
  "balance_min2": 0,
  "date_range": 0,
  "enabled": true,
  "expense_max": 500,
  "id": 0,
  "income_max": 500,
  "resume_enabled": true,
  "resume_frequency": 7,
  "transaction_types": "",
  "type": "transactions",
  "value_type": "flat"
}
```

/!\ Careful we use default value from database if present

    For more information see AlertsPlugin.init

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apply|string|false|none|none|
|balance_max|number(float)|false|none|none|
|balance_min1|number(float)|false|none|none|
|balance_min2|number(float)|false|none|none|
|date_range|integer|false|none|none|
|enabled|boolean|false|none|none|
|expense_max|number(float)|false|none|none|
|id|integer|true|none|none|
|income_max|number(float)|false|none|none|
|resume_enabled|boolean|false|none|none|
|resume_frequency|integer|true|none|none|
|transaction_types|string|false|none|none|
|type|string|true|none|none|
|value_type|string|true|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "created": "2021-08-23 10:35:44.609103",
  "deleted": "2021-08-23 10:35:44.609425",
  "id": 0,
  "id_auth": 0,
  "id_event": 0,
  "id_service": 0,
  "id_user": 0,
  "updated": "2021-08-23 10:35:44.609274",
  "url": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_to_data|string|false|none|json value to describe data to add|
|created|string(date-time)|true|none|Date of the webhook creation|
|deleted|string(date-time)|false|none|Date of the webhook deletion|
|flush_fail|string|false|none|json value to store last related webhook data flushing fail|
|id|integer|true|none|ID of the webhook|
|id_auth|integer|false|none|ID of the authentication process|
|id_event|integer|false|none|ID of the webhook event|
|id_service|integer|false|none|ID of the service|
|id_user|integer|false|none|ID of the emitter user|
|updated|string(date-time)|true|none|Date of the webhook last update|
|url|string|false|none|URL of the webhook|

<h2 id="tocS_WebhookData">WebhookData</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdata"></a>
<a id="schema_WebhookData"></a>
<a id="tocSwebhookdata"></a>
<a id="tocswebhookdata"></a>

```json
{
  "created": "2021-08-23 10:35:44.613621",
  "id": 0,
  "id_resource": 0,
  "id_service": 0,
  "id_user": 0,
  "id_webhook": 0,
  "mimetype": "",
  "success": "2021-08-23 10:35:44.613701"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|Timestamp when the hook data was generated|
|data|string|false|none|Data emitted|
|id|integer|true|none|ID of the webhook data|
|id_resource|integer|false|none|a changing ID used to filter webhookdata depending on the event triggered|
|id_service|integer|false|none|ID of the recipient service|
|id_user|integer|false|none|ID of the emitter user|
|id_webhook|integer|false|none|ID of the webhook|
|mimetype|string|false|none|Mimetype of the data|
|success|string(date-time)|false|none|Timestamp when the hook has been successfully called|

<h2 id="tocS_WebhookLog">WebhookLog</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklog"></a>
<a id="schema_WebhookLog"></a>
<a id="tocSwebhooklog"></a>
<a id="tocswebhooklog"></a>

```json
{
  "id": 0,
  "id_service": 0,
  "id_user": 0,
  "id_webhook_data": 0,
  "next_try": "2021-08-23 10:35:44.614914",
  "response_code": 0,
  "response_date": "2021-08-23 10:35:44.614448",
  "timestamp": "2021-08-23 10:35:44.614374"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|ID of the log|
|id_service|integer|false|none|ID of the service|
|id_user|integer|false|none|ID of the user|
|id_webhook_data|integer|false|none|ID of the webhook data|
|next_try|string(date-time)|false|none|If the log is an error, do not retry to push before this timestamp|
|response_code|integer|false|none|Return code of the reply to the hook|
|response_date|string(date-time)|false|none|Timestamp of the reply to the hook|
|timestamp|string(date-time)|true|none|Timestamp when the hook was sent|
