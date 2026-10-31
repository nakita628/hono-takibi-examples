<h1 id="connector-api">Connector API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Connector API.

You can use this API to access all Connector API endpoints.

## Base URL

The base URL for all API requests is `https://unify.apideck.com`

We also provide a [Mock API](https://developers.apideck.com/mock-api) that can be used for testing purposes: `https://mock-api.apideck.com`

## Headers

Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.

| Name                  | Type    | Required | Description                                                                                                                                                    |
| --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. |
| x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             |
| x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      |
| x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             |
| Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |

## Authorization

You can interact with the API through the authorization methods below.

<!-- ReDoc-Inject: <security-definitions> -->

## Pagination

All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.

To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.

In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.

### Query Parameters

| Name   | Type   | Required | Description                                                                                                        |
| ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. |
| limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |

### Response Body

| Name                  | Type   | Description                                                        |
| --------------------- | ------ | ------------------------------------------------------------------ |
| meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API |
| meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  |
| meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     |
| meta.items_on_page    | Number | Number of items returned in the data property of the response      |
| links.previous        | String | Link to navigate to the previous page of results through the API   |
| links.current         | String | Link to navigate to the current page of results through the API    |
| links.next            | String | Link to navigate to the next page of results through the API       |

⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.

## SDKs and API Clients

We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK.
Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).

## Debugging

Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.

## Errors

The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.

| Code | Title                | Description                                                                                                                                                                                              |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                |
| 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              |
| 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          |
| 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. |
| 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              |
| 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      |
| 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            |
| 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           |
| 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      |
| 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     |
| 429  | Too Many Requests    | You sent too many requests in a given amount of time ("rate limit"). Try again later                                                                                                                     |
| 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |

### Handling errors

The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.

### Error Types

#### RequestValidationError

Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.

#### UnsupportedFiltersError

Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.

#### UnsupportedSortFieldError

Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.

#### InvalidCursorError

Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.

#### ConnectorExecutionError

A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.

#### UnauthorizedError

We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`

#### ConnectorCredentialsError

A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.

#### ConnectorDisabledError

A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.

#### ConnectorRateLimitError

You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.

#### RequestLimitError

You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.

#### EntityNotFoundError

You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.

#### OAuthCredentialsNotFoundError

When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.

#### IntegrationNotFoundError

The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.

#### ConnectionNotFoundError

A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.

#### ConnectionSettingsError

The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.

#### ConnectorNotFoundError

A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.

#### OAuthRedirectUriError

A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.

#### OAuthInvalidStateError

The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.

#### OAuthCodeExchangeError

When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.

#### OAuthConnectorError

It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### MappingError

There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.

#### ConnectorMappingNotFoundError

It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorResponseMappingNotFoundError

We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationMappingNotFoundError

Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorWorkflowMappingError

The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationUnsupportedError

You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.

#### PaginationNotSupportedError

Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

## API Design

### API Styles and data formats

#### REST API

The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.

##### Available HTTP methods

The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \_method.

```
POST /messages
GET /messages
GET /messages/{messageId}
PATCH /messages/{messageId}
DELETE /messages/{messageId}
```

Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.

### Schema

All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.

### Meta

Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.

### Idempotence (upcoming)

To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.

Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)

### Request IDs

Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.

### Fixed field types

#### Dates

The dates returned by the API are all represented in UTC (ISO8601 format).

This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced "Zulu" per military/aviation tradition.

The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.

#### Prices and Currencies

All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).

For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.

All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

## Support

If you have problems or need help with your case, you can always reach out to our Support.

Base URLs:

* <a href="https://unify.apideck.com">https://unify.apideck.com</a>

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

<h1 id="connector-api-connectors">Connectors</h1>

## List Connectors

<a id="opIdconnectorsAll"></a>

> Code samples

```bash
curl https://example.com/connector/connectors \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/connectors`

List Connectors

<h3 id="list-connectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[ConnectorsFilter](#schemaconnectorsfilter)|false|Apply filters|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "auth_only": true,
      "auth_type": "oauth2",
      "blind_mapped": true,
      "configurable_resources": [
        "leads",
        "companies"
      ],
      "custom_scopes": true,
      "description": "A description",
      "docs": [
        {
          "audience": "application_owner",
          "format": "markdown",
          "id": "12345",
          "name": "connection",
          "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
        }
      ],
      "free_trial_available": true,
      "has_sandbox_credentials": true,
      "icon_url": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      "id": "crm+salesforce",
      "logo_url": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      "name": "Salesforce",
      "oauth_credentials_source": "integration",
      "oauth_grant_type": "authorization_code",
      "oauth_scopes": [
        {
          "default_apis": [
            "crm"
          ],
          "id": "contacts:all",
          "label": "Read/write on the Contacts resource"
        }
      ],
      "service_id": "close",
      "settings": [
        {
          "id": "pipeline_id",
          "label": "Pipeline",
          "type": "select"
        }
      ],
      "signup_url": "https://www.salesforce.com/signup",
      "status": "live",
      "supported_events": [
        {
          "downstream_event_type": "person_created",
          "entity_type": "employee",
          "event_source": "native",
          "event_type": "employee.created",
          "resources": [
            "companies"
          ]
        }
      ],
      "supported_resources": [
        {
          "downstream_id": "accounts",
          "downstream_name": "Accounts",
          "id": "companies",
          "name": "Companies",
          "status": "live"
        }
      ],
      "tls_support": {
        "description": "string",
        "type": "string"
      },
      "unified_apis": [
        {
          "downstream_unsupported_resources": [
            "companies"
          ],
          "id": "crm",
          "name": "File Storage API",
          "oauth_scopes": [
            {
              "id": "contacts:all",
              "label": "Read/write on the Contacts resource"
            }
          ],
          "supported_events": [
            {
              "downstream_event_type": "person_created",
              "entity_type": "employee",
              "event_source": "native",
              "event_type": "employee.created",
              "resources": [
                "companies"
              ]
            }
          ],
          "supported_resources": [
            {
              "downstream_id": "accounts",
              "downstream_name": "Accounts",
              "id": "companies",
              "name": "Companies",
              "status": "live"
            }
          ]
        }
      ],
      "webhook_support": {
        "managed_via": "api",
        "mode": "native",
        "subscription_level": "integration",
        "virtual_webhooks": {
          "request_rate": {
            "rate": 0,
            "size": 0,
            "unit": "second"
          },
          "resources": {}
        }
      },
      "website_url": "https://www.salesforce.com"
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

<h3 id="list-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connectors|[GetConnectorsResponse](#schemagetconnectorsresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get Connector

<a id="opIdconnectorsOne"></a>

> Code samples

```bash
curl https://example.com/connector/connectors/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/connectors/{id}`

Get Connector

<h3 id="get-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "auth_only": true,
    "auth_type": "oauth2",
    "blind_mapped": true,
    "configurable_resources": [
      "leads",
      "companies"
    ],
    "custom_scopes": true,
    "description": "A description",
    "docs": [
      {
        "audience": "application_owner",
        "format": "markdown",
        "id": "12345",
        "name": "connection",
        "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
      }
    ],
    "free_trial_available": true,
    "has_sandbox_credentials": true,
    "icon_url": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "logo_url": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "name": "Salesforce",
    "oauth_credentials_source": "integration",
    "oauth_grant_type": "authorization_code",
    "oauth_scopes": [
      {
        "default_apis": [
          "crm"
        ],
        "id": "contacts:all",
        "label": "Read/write on the Contacts resource"
      }
    ],
    "service_id": "close",
    "settings": [
      {
        "id": "pipeline_id",
        "label": "Pipeline",
        "type": "select"
      }
    ],
    "signup_url": "https://www.salesforce.com/signup",
    "status": "live",
    "supported_events": [
      {
        "downstream_event_type": "person_created",
        "entity_type": "employee",
        "event_source": "native",
        "event_type": "employee.created",
        "resources": [
          "companies"
        ]
      }
    ],
    "supported_resources": [
      {
        "downstream_id": "accounts",
        "downstream_name": "Accounts",
        "id": "companies",
        "name": "Companies",
        "status": "live"
      }
    ],
    "tls_support": {
      "description": "string",
      "type": "string"
    },
    "unified_apis": [
      {
        "downstream_unsupported_resources": [
          "companies"
        ],
        "id": "crm",
        "name": "File Storage API",
        "oauth_scopes": [
          {
            "id": "contacts:all",
            "label": "Read/write on the Contacts resource"
          }
        ],
        "supported_events": [
          {
            "downstream_event_type": "person_created",
            "entity_type": "employee",
            "event_source": "native",
            "event_type": "employee.created",
            "resources": [
              "companies"
            ]
          }
        ],
        "supported_resources": [
          {
            "downstream_id": "accounts",
            "downstream_name": "Accounts",
            "id": "companies",
            "name": "Companies",
            "status": "live"
          }
        ]
      }
    ],
    "webhook_support": {
      "managed_via": "api",
      "mode": "native",
      "subscription_level": "integration",
      "virtual_webhooks": {
        "request_rate": {
          "rate": 0,
          "size": 0,
          "unit": "second"
        },
        "resources": {}
      }
    },
    "website_url": "https://www.salesforce.com"
  },
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

<h3 id="get-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connectors|[GetConnectorResponse](#schemagetconnectorresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="connector-api-connector-docs">Connector Docs</h1>

## Get Connector Doc content

<a id="opIdconnectorDocsOne"></a>

> Code samples

```bash
curl https://example.com/connector/connectors/string/docs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/connectors/{id}/docs/{doc_id}`

Get Connector Doc content

<h3 id="get-connector-doc-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|
|doc_id|path|string|true|ID of the Doc|

> Example responses

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

<h3 id="get-connector-doc-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connectors|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="connector-api-apis">APIs</h1>

## List APIs

<a id="opIdapisAll"></a>

> Code samples

```bash
curl https://example.com/connector/apis \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/apis`

List APIs

<h3 id="list-apis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[ApisFilter](#schemaapisfilter)|false|Apply filters|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "api_reference_url": "https://developers.apideck.com/apis/file-storage/reference",
      "categories": [
        "files",
        "file-storage",
        "cloud-storage",
        "object-storage"
      ],
      "description": "Manage API keys, access tokens, OAuth flows and integrations.",
      "events": [
        "crm.contact.updated",
        "accounting.invoice.created"
      ],
      "id": "file-storage",
      "name": "File Storage API",
      "postman_collection_id": "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
      "resources": [
        {
          "excluded_from_coverage": false,
          "id": "companies",
          "name": "Companies",
          "status": "live"
        }
      ],
      "spec_url": "https://specs.apideck.com/file-storage.yml",
      "status": "live",
      "type": "platform"
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

<h3 id="list-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Apis|[GetApisResponse](#schemagetapisresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get API

<a id="opIdapisOne"></a>

> Code samples

```bash
curl https://example.com/connector/apis/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/apis/{id}`

Get API

<h3 id="get-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "api_reference_url": "https://developers.apideck.com/apis/file-storage/reference",
    "categories": [
      "files",
      "file-storage",
      "cloud-storage",
      "object-storage"
    ],
    "description": "Manage API keys, access tokens, OAuth flows and integrations.",
    "events": [
      "crm.contact.updated",
      "accounting.invoice.created"
    ],
    "id": "file-storage",
    "name": "File Storage API",
    "postman_collection_id": "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
    "resources": [
      {
        "excluded_from_coverage": false,
        "id": "companies",
        "name": "Companies",
        "status": "live"
      }
    ],
    "spec_url": "https://specs.apideck.com/file-storage.yml",
    "status": "live",
    "type": "platform"
  },
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

<h3 id="get-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Apis|[GetApiResponse](#schemagetapiresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="connector-api-connector-resources">Connector Resources</h1>

## Get Connector Resource

<a id="opIdconnectorResourcesOne"></a>

> Code samples

```bash
curl https://example.com/connector/connectors/string/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/connectors/{id}/resources/{resource_id}`

Get Connector Resource

<h3 id="get-connector-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|
|resource_id|path|string|true|ID of the resource you are acting upon.|
|unified_api|query|[UnifiedApiId](#schemaunifiedapiid)|false|Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs|

#### Enumerated Values

|Parameter|Value|
|---|---|
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

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_fields_supported": true,
    "downstream_id": "accounts",
    "downstream_name": "Accounts",
    "downstream_unsupported_operations": [
      "upload"
    ],
    "id": "companies",
    "name": "Companies",
    "pagination": {
      "limit_support": true,
      "mode": "native",
      "paging_support": true
    },
    "pagination_supported": true,
    "status": "live",
    "supported_fields": [
      {
        "child_properties": [
          {
            "unified_property": {}
          }
        ],
        "unified_property": "owner_id"
      }
    ],
    "supported_filters": [
      "name",
      "email"
    ],
    "supported_list_fields": [
      {
        "child_properties": [
          {
            "unified_property": {}
          }
        ],
        "unified_property": "owner_id"
      }
    ],
    "supported_operations": [
      "all",
      "one",
      "add",
      "update",
      "delete"
    ],
    "supported_sort_by": [
      "updated_at",
      "created_at",
      "name"
    ]
  },
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

<h3 id="get-connector-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ConnectorResources|[GetConnectorResourceResponse](#schemagetconnectorresourceresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="connector-api-api-resources">API Resources</h1>

## Get API Resource

<a id="opIdapiResourcesOne"></a>

> Code samples

```bash
curl https://example.com/connector/apis/string/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/apis/{id}/resources/{resource_id}`

Get API Resource

<h3 id="get-api-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|
|resource_id|path|string|true|ID of the resource you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "companies",
    "linked_resources": [
      {
        "id": "companies",
        "unified_property": "owner_id"
      }
    ],
    "name": "Companies",
    "schema": {
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "example": "2020-09-30T07:43:32.000Z",
          "readOnly": true,
          "type": "string"
        },
        "id": {
          "example": "12345",
          "readOnly": true,
          "type": "string"
        },
        "name": {
          "example": "Elon Musk",
          "minLength": 1,
          "type": "string"
        },
        "updated_at": {
          "example": "2020-09-30T07:43:32.000Z",
          "readOnly": true,
          "type": "string"
        }
      },
      "required": [
        "name",
        "company_name"
      ],
      "x-pii": [
        "name",
        "email",
        "first_name",
        "last_name"
      ]
    },
    "status": "live"
  },
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

<h3 id="get-api-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ApiResources|[GetApiResourceResponse](#schemagetapiresourceresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get API Resource Coverage

<a id="opIdapiResourceCoverageOne"></a>

> Code samples

```bash
curl https://example.com/connector/apis/string/resources/string/coverage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /connector/apis/{id}/resources/{resource_id}/coverage`

Get API Resource Coverage

<h3 id="get-api-resource-coverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|id|path|string|true|ID of the record you are acting upon.|
|resource_id|path|string|true|ID of the resource you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "coverage": [
      {
        "downstream_id": "accounts",
        "downstream_name": "Accounts",
        "pagination": {
          "limit_support": true,
          "mode": "native",
          "paging_support": true
        },
        "pagination_supported": true,
        "supported_fields": [
          {
            "child_properties": [
              {
                "unified_property": {}
              }
            ],
            "unified_property": "owner_id"
          }
        ],
        "supported_filters": [
          "name",
          "email"
        ],
        "supported_list_fields": [
          {
            "child_properties": [
              {
                "unified_property": {}
              }
            ],
            "unified_property": "owner_id"
          }
        ],
        "supported_operations": [
          "all",
          "one",
          "add",
          "update",
          "delete"
        ],
        "supported_sort_by": [
          "updated_at",
          "created_at",
          "name"
        ]
      }
    ],
    "id": "companies",
    "name": "Companies",
    "status": "live"
  },
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

<h3 id="get-api-resource-coverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ApiResources|[GetApiResourceCoverageResponse](#schemagetapiresourcecoverageresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|402|Payment Required|Payment Required|[PaymentRequiredResponse](#schemapaymentrequiredresponse)|
|404|Not Found|The specified resource was not found|[NotFoundResponse](#schemanotfoundresponse)|
|default|Default|Unexpected error|[UnexpectedErrorResponse](#schemaunexpectederrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_Api">Api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_Api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "api_reference_url": "https://developers.apideck.com/apis/file-storage/reference",
  "categories": [
    "files",
    "file-storage",
    "cloud-storage",
    "object-storage"
  ],
  "description": "Manage API keys, access tokens, OAuth flows and integrations.",
  "events": [
    "crm.contact.updated",
    "accounting.invoice.created"
  ],
  "id": "file-storage",
  "name": "File Storage API",
  "postman_collection_id": "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
  "resources": [
    {
      "excluded_from_coverage": false,
      "id": "companies",
      "name": "Companies",
      "status": "live"
    }
  ],
  "spec_url": "https://specs.apideck.com/file-storage.yml",
  "status": "live",
  "type": "platform"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_reference_url|string|false|none|Link to the API reference of the API.|
|categories|[string]|false|none|List of categories the API belongs to.|
|description|string \| null|false|none|Description of the API.|
|events|[string]|false|none|List of event types this API supports.|
|id|string|false|read-only|ID of the API.|
|name|string|false|none|Name of the API.|
|postman_collection_id|string \| null|false|none|ID of the Postman collection of the API.|
|resources|[object]|false|none|List of resources supported in this API.|
|spec_url|string|false|none|Link to the latest OpenAPI specification of the API.|
|status|[ApiStatus](#schemaapistatus)|false|none|Status of the API. APIs with status live or beta are callable.|
|type|string|false|none|Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|considering|
|type|platform|
|type|unified|

<h2 id="tocS_ApiResource">ApiResource</h2>
<!-- backwards compatibility -->
<a id="schemaapiresource"></a>
<a id="schema_ApiResource"></a>
<a id="tocSapiresource"></a>
<a id="tocsapiresource"></a>

```json
{
  "id": "companies",
  "linked_resources": [
    {
      "id": "companies",
      "unified_property": "owner_id"
    }
  ],
  "name": "Companies",
  "schema": {
    "additionalProperties": false,
    "properties": {
      "created_at": {
        "example": "2020-09-30T07:43:32.000Z",
        "readOnly": true,
        "type": "string"
      },
      "id": {
        "example": "12345",
        "readOnly": true,
        "type": "string"
      },
      "name": {
        "example": "Elon Musk",
        "minLength": 1,
        "type": "string"
      },
      "updated_at": {
        "example": "2020-09-30T07:43:32.000Z",
        "readOnly": true,
        "type": "string"
      }
    },
    "required": [
      "name",
      "company_name"
    ],
    "x-pii": [
      "name",
      "email",
      "first_name",
      "last_name"
    ]
  },
  "status": "live"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the resource, typically a lowercased version of name.|
|linked_resources|[object]|false|none|List of linked resources.|
|name|string|false|none|Name of the resource (plural)|
|schema|object|false|none|JSON Schema of the resource in our Unified API|
|status|[ResourceStatus](#schemaresourcestatus)|false|none|Status of the resource. Resources with status live or beta are callable.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|upcoming|
|status|considering|

<h2 id="tocS_ApiResourceCoverage">ApiResourceCoverage</h2>
<!-- backwards compatibility -->
<a id="schemaapiresourcecoverage"></a>
<a id="schema_ApiResourceCoverage"></a>
<a id="tocSapiresourcecoverage"></a>
<a id="tocsapiresourcecoverage"></a>

```json
{
  "coverage": [
    {
      "downstream_id": "accounts",
      "downstream_name": "Accounts",
      "pagination": {
        "limit_support": true,
        "mode": "native",
        "paging_support": true
      },
      "pagination_supported": true,
      "supported_fields": [
        {
          "child_properties": [
            {
              "unified_property": {}
            }
          ],
          "unified_property": "owner_id"
        }
      ],
      "supported_filters": [
        "name",
        "email"
      ],
      "supported_list_fields": [
        {
          "child_properties": [
            {
              "unified_property": {}
            }
          ],
          "unified_property": "owner_id"
        }
      ],
      "supported_operations": [
        "all",
        "one",
        "add",
        "update",
        "delete"
      ],
      "supported_sort_by": [
        "updated_at",
        "created_at",
        "name"
      ]
    }
  ],
  "id": "companies",
  "name": "Companies",
  "status": "live"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverage|[object]|false|none|none|
|id|string|false|none|ID of the resource, typically a lowercased version of name.|
|name|string|false|none|Name of the resource (plural)|
|status|[ResourceStatus](#schemaresourcestatus)|false|none|Status of the resource. Resources with status live or beta are callable.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|upcoming|
|status|considering|

<h2 id="tocS_ApiStatus">ApiStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapistatus"></a>
<a id="schema_ApiStatus"></a>
<a id="tocSapistatus"></a>
<a id="tocsapistatus"></a>

```json
"live"
```

Status of the API. APIs with status live or beta are callable.

<h2 id="tocS_ApisFilter">ApisFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapisfilter"></a>
<a id="schema_ApisFilter"></a>
<a id="tocSapisfilter"></a>
<a id="tocsapisfilter"></a>

```json
{
  "status": "beta"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ApiStatus](#schemaapistatus)|false|none|Status of the API. APIs with status live or beta are callable.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|considering|

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

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "auth_only": true,
  "auth_type": "oauth2",
  "blind_mapped": true,
  "configurable_resources": [
    "leads",
    "companies"
  ],
  "custom_scopes": true,
  "description": "A description",
  "docs": [
    {
      "audience": "application_owner",
      "format": "markdown",
      "id": "12345",
      "name": "connection",
      "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
    }
  ],
  "free_trial_available": true,
  "has_sandbox_credentials": true,
  "icon_url": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
  "id": "crm+salesforce",
  "logo_url": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
  "name": "Salesforce",
  "oauth_credentials_source": "integration",
  "oauth_grant_type": "authorization_code",
  "oauth_scopes": [
    {
      "default_apis": [
        "crm"
      ],
      "id": "contacts:all",
      "label": "Read/write on the Contacts resource"
    }
  ],
  "service_id": "close",
  "settings": [
    {
      "id": "pipeline_id",
      "label": "Pipeline",
      "type": "select"
    }
  ],
  "signup_url": "https://www.salesforce.com/signup",
  "status": "live",
  "supported_events": [
    {
      "downstream_event_type": "person_created",
      "entity_type": "employee",
      "event_source": "native",
      "event_type": "employee.created",
      "resources": [
        "companies"
      ]
    }
  ],
  "supported_resources": [
    {
      "downstream_id": "accounts",
      "downstream_name": "Accounts",
      "id": "companies",
      "name": "Companies",
      "status": "live"
    }
  ],
  "tls_support": {
    "description": "string",
    "type": "string"
  },
  "unified_apis": [
    {
      "downstream_unsupported_resources": [
        "companies"
      ],
      "id": "crm",
      "name": "File Storage API",
      "oauth_scopes": [
        {
          "id": "contacts:all",
          "label": "Read/write on the Contacts resource"
        }
      ],
      "supported_events": [
        {
          "downstream_event_type": "person_created",
          "entity_type": "employee",
          "event_source": "native",
          "event_type": "employee.created",
          "resources": [
            "companies"
          ]
        }
      ],
      "supported_resources": [
        {
          "downstream_id": "accounts",
          "downstream_name": "Accounts",
          "id": "companies",
          "name": "Companies",
          "status": "live"
        }
      ]
    }
  ],
  "webhook_support": {
    "managed_via": "api",
    "mode": "native",
    "subscription_level": "integration",
    "virtual_webhooks": {
      "request_rate": {
        "rate": 0,
        "size": 0,
        "unit": "second"
      },
      "resources": {}
    }
  },
  "website_url": "https://www.salesforce.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_only|boolean|false|read-only|Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API|
|auth_type|string|false|read-only|Type of authorization used by the connector|
|blind_mapped|boolean|false|read-only|Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality.|
|configurable_resources|[[ResourceId](#schemaresourceid)]|false|none|List of resources that have settings that can be configured.|
|custom_scopes|boolean|false|read-only|Set to `true` when connector allows the definition of custom scopes.|
|description|string \| null|false|none|A description of the object.|
|docs|[[ConnectorDoc](#schemaconnectordoc)]|false|none|none|
|free_trial_available|boolean|false|none|Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial|
|has_sandbox_credentials|boolean|false|none|Indicates whether Apideck Sandbox OAuth credentials are available.|
|icon_url|string(uri)|false|none|Link to a small square icon for the connector.|
|id|string|false|read-only|ID of the connector.|
|logo_url|string(uri)|false|none|Link to the full logo for the connector.|
|name|string|false|none|Name of the connector.|
|oauth_credentials_source|string|false|read-only|Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.|
|oauth_grant_type|string|false|read-only|OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types|
|oauth_scopes|[object]|false|none|List of OAuth Scopes available for this connector.|
|service_id|string|false|none|Service provider identifier|
|settings|[[ConnectorSetting](#schemaconnectorsetting)]|false|none|none|
|signup_url|string(uri)|false|none|Link to the connector's signup page.|
|status|[ConnectorStatus](#schemaconnectorstatus)|false|none|Status of the connector. Connectors with status live or beta are callable.|
|supported_events|[[ConnectorEvent](#schemaconnectorevent)]|false|none|List of events that are supported on the connector across all Unified APIs.|
|supported_resources|[[LinkedConnectorResource](#schemalinkedconnectorresource)]|false|none|List of resources that are supported on the connector.|
|tls_support|object|false|none|none|
|unified_apis|[object]|false|none|List of Unified APIs that feature this connector.|
|webhook_support|[WebhookSupport](#schemawebhooksupport)|false|none|How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.|
|website_url|string(uri)|false|none|Link to the connector's website.|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2|
|auth_type|apiKey|
|auth_type|basic|
|auth_type|custom|
|auth_type|none|
|oauth_credentials_source|integration|
|oauth_credentials_source|connection|
|oauth_grant_type|authorization_code|
|oauth_grant_type|client_credentials|
|oauth_grant_type|password|
|status|live|
|status|beta|
|status|development|
|status|considering|

<h2 id="tocS_ConnectorDoc">ConnectorDoc</h2>
<!-- backwards compatibility -->
<a id="schemaconnectordoc"></a>
<a id="schema_ConnectorDoc"></a>
<a id="tocSconnectordoc"></a>
<a id="tocsconnectordoc"></a>

```json
{
  "audience": "application_owner",
  "format": "markdown",
  "id": "12345",
  "name": "connection",
  "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Audience for the doc.|
|format|string|false|none|Format of the doc.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|name|string|false|none|Name of the doc.|
|url|string(uri)|false|none|Link to fetch the content of the doc.|

#### Enumerated Values

|Property|Value|
|---|---|
|audience|application_owner|
|audience|consumer|
|format|markdown|

<h2 id="tocS_ConnectorEvent">ConnectorEvent</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorevent"></a>
<a id="schema_ConnectorEvent"></a>
<a id="tocSconnectorevent"></a>
<a id="tocsconnectorevent"></a>

```json
{
  "downstream_event_type": "person_created",
  "entity_type": "employee",
  "event_source": "native",
  "event_type": "employee.created",
  "resources": [
    "companies"
  ]
}
```

Unify event that is supported on the connector. Events are delivered via Webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downstream_event_type|string|false|none|Downstream event type|
|entity_type|string|false|none|Unify entity type|
|event_source|string|false|none|Unify event source|
|event_type|string|false|none|Unify event type|
|resources|[[ResourceId](#schemaresourceid)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_source|native|
|event_source|virtual|

<h2 id="tocS_ConnectorResource">ConnectorResource</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorresource"></a>
<a id="schema_ConnectorResource"></a>
<a id="tocSconnectorresource"></a>
<a id="tocsconnectorresource"></a>

```json
{
  "custom_fields_supported": true,
  "downstream_id": "accounts",
  "downstream_name": "Accounts",
  "downstream_unsupported_operations": [
    "upload"
  ],
  "id": "companies",
  "name": "Companies",
  "pagination": {
    "limit_support": true,
    "mode": "native",
    "paging_support": true
  },
  "pagination_supported": true,
  "status": "live",
  "supported_fields": [
    {
      "child_properties": [
        {
          "unified_property": {}
        }
      ],
      "unified_property": "owner_id"
    }
  ],
  "supported_filters": [
    "name",
    "email"
  ],
  "supported_list_fields": [
    {
      "child_properties": [
        {
          "unified_property": {}
        }
      ],
      "unified_property": "owner_id"
    }
  ],
  "supported_operations": [
    "all",
    "one",
    "add",
    "update",
    "delete"
  ],
  "supported_sort_by": [
    "updated_at",
    "created_at",
    "name"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields_supported|boolean|false|none|Indicates if custom fields are supported on this resource.|
|downstream_id|string|false|none|ID of the resource in the Connector's API (downstream)|
|downstream_name|string|false|none|Name of the resource in the Connector's API (downstream)|
|downstream_unsupported_operations|[string]|false|none|List of operations that are not supported on the downstream.|
|id|[ResourceId](#schemaresourceid)|false|none|ID of the resource, typically a lowercased version of name.|
|name|string|false|none|Name of the resource (plural)|
|pagination|[PaginationCoverage](#schemapaginationcoverage)|false|none|none|
|pagination_supported|boolean|false|none|Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.|
|status|[ResourceStatus](#schemaresourcestatus)|false|none|Status of the resource. Resources with status live or beta are callable.|
|supported_fields|[[SupportedProperty](#schemasupportedproperty)]|false|none|Supported fields on the detail endpoint.|
|supported_filters|[string]|false|none|Supported filters on the list endpoint of the resource.|
|supported_list_fields|[[SupportedProperty](#schemasupportedproperty)]|false|none|Supported fields on the list endpoint.|
|supported_operations|[string]|false|none|List of supported operations on the resource.|
|supported_sort_by|[string]|false|none|Supported sorting properties on the list endpoint of the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|upcoming|
|status|considering|

<h2 id="tocS_ConnectorSetting">ConnectorSetting</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsetting"></a>
<a id="schema_ConnectorSetting"></a>
<a id="tocSconnectorsetting"></a>
<a id="tocsconnectorsetting"></a>

```json
{
  "id": "pipeline_id",
  "label": "Pipeline",
  "type": "select"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|label|string|false|none|none|
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
|type|password|

<h2 id="tocS_ConnectorStatus">ConnectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorstatus"></a>
<a id="schema_ConnectorStatus"></a>
<a id="tocSconnectorstatus"></a>
<a id="tocsconnectorstatus"></a>

```json
"live"
```

Status of the connector. Connectors with status live or beta are callable.

<h2 id="tocS_ConnectorsFilter">ConnectorsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsfilter"></a>
<a id="schema_ConnectorsFilter"></a>
<a id="tocSconnectorsfilter"></a>
<a id="tocsconnectorsfilter"></a>

```json
{
  "unified_api": "file-storage"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ConnectorStatus](#schemaconnectorstatus)|false|none|Status of the connector. Connectors with status live or beta are callable.|
|unified_api|[UnifiedApiId](#schemaunifiedapiid)|false|none|Name of Apideck Unified API|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|considering|
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

<h2 id="tocS_GetApiResourceCoverageResponse">GetApiResourceCoverageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapiresourcecoverageresponse"></a>
<a id="schema_GetApiResourceCoverageResponse"></a>
<a id="tocSgetapiresourcecoverageresponse"></a>
<a id="tocsgetapiresourcecoverageresponse"></a>

```json
{
  "data": {
    "coverage": [
      {
        "downstream_id": "accounts",
        "downstream_name": "Accounts",
        "pagination": {
          "limit_support": true,
          "mode": "native",
          "paging_support": true
        },
        "pagination_supported": true,
        "supported_fields": [
          {
            "child_properties": [
              {
                "unified_property": {}
              }
            ],
            "unified_property": "owner_id"
          }
        ],
        "supported_filters": [
          "name",
          "email"
        ],
        "supported_list_fields": [
          {
            "child_properties": [
              {
                "unified_property": {}
              }
            ],
            "unified_property": "owner_id"
          }
        ],
        "supported_operations": [
          "all",
          "one",
          "add",
          "update",
          "delete"
        ],
        "supported_sort_by": [
          "updated_at",
          "created_at",
          "name"
        ]
      }
    ],
    "id": "companies",
    "name": "Companies",
    "status": "live"
  },
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
|data|[ApiResourceCoverage](#schemaapiresourcecoverage)|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetApiResourceResponse">GetApiResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapiresourceresponse"></a>
<a id="schema_GetApiResourceResponse"></a>
<a id="tocSgetapiresourceresponse"></a>
<a id="tocsgetapiresourceresponse"></a>

```json
{
  "data": {
    "id": "companies",
    "linked_resources": [
      {
        "id": "companies",
        "unified_property": "owner_id"
      }
    ],
    "name": "Companies",
    "schema": {
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "example": "2020-09-30T07:43:32.000Z",
          "readOnly": true,
          "type": "string"
        },
        "id": {
          "example": "12345",
          "readOnly": true,
          "type": "string"
        },
        "name": {
          "example": "Elon Musk",
          "minLength": 1,
          "type": "string"
        },
        "updated_at": {
          "example": "2020-09-30T07:43:32.000Z",
          "readOnly": true,
          "type": "string"
        }
      },
      "required": [
        "name",
        "company_name"
      ],
      "x-pii": [
        "name",
        "email",
        "first_name",
        "last_name"
      ]
    },
    "status": "live"
  },
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
|data|[ApiResource](#schemaapiresource)|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetApiResponse">GetApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapiresponse"></a>
<a id="schema_GetApiResponse"></a>
<a id="tocSgetapiresponse"></a>
<a id="tocsgetapiresponse"></a>

```json
{
  "data": {
    "api_reference_url": "https://developers.apideck.com/apis/file-storage/reference",
    "categories": [
      "files",
      "file-storage",
      "cloud-storage",
      "object-storage"
    ],
    "description": "Manage API keys, access tokens, OAuth flows and integrations.",
    "events": [
      "crm.contact.updated",
      "accounting.invoice.created"
    ],
    "id": "file-storage",
    "name": "File Storage API",
    "postman_collection_id": "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
    "resources": [
      {
        "excluded_from_coverage": false,
        "id": "companies",
        "name": "Companies",
        "status": "live"
      }
    ],
    "spec_url": "https://specs.apideck.com/file-storage.yml",
    "status": "live",
    "type": "platform"
  },
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
|data|[Api](#schemaapi)|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetApisResponse">GetApisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapisresponse"></a>
<a id="schema_GetApisResponse"></a>
<a id="tocSgetapisresponse"></a>
<a id="tocsgetapisresponse"></a>

```json
{
  "data": [
    {
      "api_reference_url": "https://developers.apideck.com/apis/file-storage/reference",
      "categories": [
        "files",
        "file-storage",
        "cloud-storage",
        "object-storage"
      ],
      "description": "Manage API keys, access tokens, OAuth flows and integrations.",
      "events": [
        "crm.contact.updated",
        "accounting.invoice.created"
      ],
      "id": "file-storage",
      "name": "File Storage API",
      "postman_collection_id": "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
      "resources": [
        {
          "excluded_from_coverage": false,
          "id": "companies",
          "name": "Companies",
          "status": "live"
        }
      ],
      "spec_url": "https://specs.apideck.com/file-storage.yml",
      "status": "live",
      "type": "platform"
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
|data|[[Api](#schemaapi)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConnectorResourceResponse">GetConnectorResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorresourceresponse"></a>
<a id="schema_GetConnectorResourceResponse"></a>
<a id="tocSgetconnectorresourceresponse"></a>
<a id="tocsgetconnectorresourceresponse"></a>

```json
{
  "data": {
    "custom_fields_supported": true,
    "downstream_id": "accounts",
    "downstream_name": "Accounts",
    "downstream_unsupported_operations": [
      "upload"
    ],
    "id": "companies",
    "name": "Companies",
    "pagination": {
      "limit_support": true,
      "mode": "native",
      "paging_support": true
    },
    "pagination_supported": true,
    "status": "live",
    "supported_fields": [
      {
        "child_properties": [
          {
            "unified_property": {}
          }
        ],
        "unified_property": "owner_id"
      }
    ],
    "supported_filters": [
      "name",
      "email"
    ],
    "supported_list_fields": [
      {
        "child_properties": [
          {
            "unified_property": {}
          }
        ],
        "unified_property": "owner_id"
      }
    ],
    "supported_operations": [
      "all",
      "one",
      "add",
      "update",
      "delete"
    ],
    "supported_sort_by": [
      "updated_at",
      "created_at",
      "name"
    ]
  },
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
|data|[ConnectorResource](#schemaconnectorresource)|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConnectorResponse">GetConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorresponse"></a>
<a id="schema_GetConnectorResponse"></a>
<a id="tocSgetconnectorresponse"></a>
<a id="tocsgetconnectorresponse"></a>

```json
{
  "data": {
    "auth_only": true,
    "auth_type": "oauth2",
    "blind_mapped": true,
    "configurable_resources": [
      "leads",
      "companies"
    ],
    "custom_scopes": true,
    "description": "A description",
    "docs": [
      {
        "audience": "application_owner",
        "format": "markdown",
        "id": "12345",
        "name": "connection",
        "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
      }
    ],
    "free_trial_available": true,
    "has_sandbox_credentials": true,
    "icon_url": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
    "id": "crm+salesforce",
    "logo_url": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
    "name": "Salesforce",
    "oauth_credentials_source": "integration",
    "oauth_grant_type": "authorization_code",
    "oauth_scopes": [
      {
        "default_apis": [
          "crm"
        ],
        "id": "contacts:all",
        "label": "Read/write on the Contacts resource"
      }
    ],
    "service_id": "close",
    "settings": [
      {
        "id": "pipeline_id",
        "label": "Pipeline",
        "type": "select"
      }
    ],
    "signup_url": "https://www.salesforce.com/signup",
    "status": "live",
    "supported_events": [
      {
        "downstream_event_type": "person_created",
        "entity_type": "employee",
        "event_source": "native",
        "event_type": "employee.created",
        "resources": [
          "companies"
        ]
      }
    ],
    "supported_resources": [
      {
        "downstream_id": "accounts",
        "downstream_name": "Accounts",
        "id": "companies",
        "name": "Companies",
        "status": "live"
      }
    ],
    "tls_support": {
      "description": "string",
      "type": "string"
    },
    "unified_apis": [
      {
        "downstream_unsupported_resources": [
          "companies"
        ],
        "id": "crm",
        "name": "File Storage API",
        "oauth_scopes": [
          {
            "id": "contacts:all",
            "label": "Read/write on the Contacts resource"
          }
        ],
        "supported_events": [
          {
            "downstream_event_type": "person_created",
            "entity_type": "employee",
            "event_source": "native",
            "event_type": "employee.created",
            "resources": [
              "companies"
            ]
          }
        ],
        "supported_resources": [
          {
            "downstream_id": "accounts",
            "downstream_name": "Accounts",
            "id": "companies",
            "name": "Companies",
            "status": "live"
          }
        ]
      }
    ],
    "webhook_support": {
      "managed_via": "api",
      "mode": "native",
      "subscription_level": "integration",
      "virtual_webhooks": {
        "request_rate": {
          "rate": 0,
          "size": 0,
          "unit": "second"
        },
        "resources": {}
      }
    },
    "website_url": "https://www.salesforce.com"
  },
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
|data|[Connector](#schemaconnector)|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetConnectorsResponse">GetConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorsresponse"></a>
<a id="schema_GetConnectorsResponse"></a>
<a id="tocSgetconnectorsresponse"></a>
<a id="tocsgetconnectorsresponse"></a>

```json
{
  "data": [
    {
      "auth_only": true,
      "auth_type": "oauth2",
      "blind_mapped": true,
      "configurable_resources": [
        "leads",
        "companies"
      ],
      "custom_scopes": true,
      "description": "A description",
      "docs": [
        {
          "audience": "application_owner",
          "format": "markdown",
          "id": "12345",
          "name": "connection",
          "url": "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection"
        }
      ],
      "free_trial_available": true,
      "has_sandbox_credentials": true,
      "icon_url": "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      "id": "crm+salesforce",
      "logo_url": "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      "name": "Salesforce",
      "oauth_credentials_source": "integration",
      "oauth_grant_type": "authorization_code",
      "oauth_scopes": [
        {
          "default_apis": [
            "crm"
          ],
          "id": "contacts:all",
          "label": "Read/write on the Contacts resource"
        }
      ],
      "service_id": "close",
      "settings": [
        {
          "id": "pipeline_id",
          "label": "Pipeline",
          "type": "select"
        }
      ],
      "signup_url": "https://www.salesforce.com/signup",
      "status": "live",
      "supported_events": [
        {
          "downstream_event_type": "person_created",
          "entity_type": "employee",
          "event_source": "native",
          "event_type": "employee.created",
          "resources": [
            "companies"
          ]
        }
      ],
      "supported_resources": [
        {
          "downstream_id": "accounts",
          "downstream_name": "Accounts",
          "id": "companies",
          "name": "Companies",
          "status": "live"
        }
      ],
      "tls_support": {
        "description": "string",
        "type": "string"
      },
      "unified_apis": [
        {
          "downstream_unsupported_resources": [
            "companies"
          ],
          "id": "crm",
          "name": "File Storage API",
          "oauth_scopes": [
            {
              "id": "contacts:all",
              "label": "Read/write on the Contacts resource"
            }
          ],
          "supported_events": [
            {
              "downstream_event_type": "person_created",
              "entity_type": "employee",
              "event_source": "native",
              "event_type": "employee.created",
              "resources": [
                "companies"
              ]
            }
          ],
          "supported_resources": [
            {
              "downstream_id": "accounts",
              "downstream_name": "Accounts",
              "id": "companies",
              "name": "Companies",
              "status": "live"
            }
          ]
        }
      ],
      "webhook_support": {
        "managed_via": "api",
        "mode": "native",
        "subscription_level": "integration",
        "virtual_webhooks": {
          "request_rate": {
            "rate": 0,
            "size": 0,
            "unit": "second"
          },
          "resources": {}
        }
      },
      "website_url": "https://www.salesforce.com"
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
|data|[[Connector](#schemaconnector)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"12345"
```

A unique identifier for an object.

<h2 id="tocS_LinkedConnectorResource">LinkedConnectorResource</h2>
<!-- backwards compatibility -->
<a id="schemalinkedconnectorresource"></a>
<a id="schema_LinkedConnectorResource"></a>
<a id="tocSlinkedconnectorresource"></a>
<a id="tocslinkedconnectorresource"></a>

```json
{
  "downstream_id": "accounts",
  "downstream_name": "Accounts",
  "id": "companies",
  "name": "Companies",
  "status": "live"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downstream_id|string|false|none|ID of the resource in the Connector's API (downstream)|
|downstream_name|string|false|none|Name of the resource in the Connector's API (downstream)|
|id|[ResourceId](#schemaresourceid)|false|none|ID of the resource, typically a lowercased version of name.|
|name|string|false|none|Name of the resource (plural)|
|status|[ResourceStatus](#schemaresourcestatus)|false|none|Status of the resource. Resources with status live or beta are callable.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|live|
|status|beta|
|status|development|
|status|upcoming|
|status|considering|

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

<h2 id="tocS_PaginationCoverage">PaginationCoverage</h2>
<!-- backwards compatibility -->
<a id="schemapaginationcoverage"></a>
<a id="schema_PaginationCoverage"></a>
<a id="tocSpaginationcoverage"></a>
<a id="tocspaginationcoverage"></a>

```json
{
  "limit_support": true,
  "mode": "native",
  "paging_support": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit_support|boolean|false|none|Indicates whether the connector supports changing the page size by using the limit parameter.|
|mode|string|false|none|How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.|
|paging_support|boolean|false|none|Indicates whether the connector supports paging through results using the cursor parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|native|
|mode|virtual|

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

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"companies"
```

ID of the resource, typically a lowercased version of name.

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
"live"
```

Status of the resource. Resources with status live or beta are callable.

<h2 id="tocS_SupportedProperty">SupportedProperty</h2>
<!-- backwards compatibility -->
<a id="schemasupportedproperty"></a>
<a id="schema_SupportedProperty"></a>
<a id="tocSsupportedproperty"></a>
<a id="tocssupportedproperty"></a>

```json
{
  "child_properties": [
    {
      "unified_property": {
        "child_properties": [
          {
            "unified_property": {}
          }
        ],
        "unified_property": "owner_id"
      }
    }
  ],
  "unified_property": "owner_id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|child_properties|[object]|false|none|List of child properties of the unified property.|
|unified_property|[UnifiedProperty](#schemaunifiedproperty)|false|none|Name of the property in our Unified API.|

<h2 id="tocS_TooManyRequestsResponse">TooManyRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsresponse"></a>
<a id="schema_TooManyRequestsResponse"></a>
<a id="tocStoomanyrequestsresponse"></a>
<a id="tocstoomanyrequestsresponse"></a>

```json
{
  "detail": {
    "context": "string",
    "error": {}
  },
  "error": "Too Many Requests",
  "message": "Connector Rate Limit Error",
  "ref": "https://developers.apideck.com/errors#connectorratelimiterror",
  "status_code": 429,
  "type_name": "ConnectorRateLimitError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|object|false|none|none|
|error|string|false|none|Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)|
|message|string|false|none|A human-readable message providing more details about the error.|
|ref|string|false|none|Link to documentation of error type|
|status_code|number|false|none|HTTP status code|
|type_name|string|false|none|The type of error returned|

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

<h2 id="tocS_UnifiedProperty">UnifiedProperty</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedproperty"></a>
<a id="schema_UnifiedProperty"></a>
<a id="tocSunifiedproperty"></a>
<a id="tocsunifiedproperty"></a>

```json
"owner_id"
```

Name of the property in our Unified API.

<h2 id="tocS_WebhookSupport">WebhookSupport</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksupport"></a>
<a id="schema_WebhookSupport"></a>
<a id="tocSwebhooksupport"></a>
<a id="tocswebhooksupport"></a>

```json
{
  "managed_via": "api",
  "mode": "native",
  "subscription_level": "integration",
  "virtual_webhooks": {
    "request_rate": {
      "rate": 0,
      "size": 0,
      "unit": "second"
    },
    "resources": {}
  }
}
```

How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managed_via|string|false|none|How the subscription is managed in the downstream.|
|mode|string|false|none|Mode of the webhook support.|
|subscription_level|string|false|none|Received events are scoped to connection or across integration.|
|virtual_webhooks|object|false|none|Virtual webhook config for the connector.|

#### Enumerated Values

|Property|Value|
|---|---|
|managed_via|manual|
|managed_via|api|
|mode|native|
|mode|virtual|
|mode|none|
|subscription_level|connection|
|subscription_level|integration|
