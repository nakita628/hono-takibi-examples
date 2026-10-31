<h1 id="webhook-api">Webhook API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Webhook API.

You can use this API to access all Webhook API endpoints.

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

<h1 id="webhook-api-webhooks">Webhooks</h1>

## List event logs

<a id="opIdeventLogsAll"></a>

> Code samples

```bash
curl https://example.com/webhook/logs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /webhook/logs`

List event logs

<h3 id="list-event-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[WebhookEventLogsFilter](#schemawebhookeventlogsfilter)|false|Filter results|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
      "attempts": [
        {
          "execution_attempt": 3,
          "status_code": 200,
          "success": true,
          "timestamp": "2021-07-12T14:26:17.420Z"
        }
      ],
      "consumer_id": "test_consumer_id",
      "endpoint": "https://example.com/my/webhook/endpoint",
      "entity_type": "Connection",
      "event_type": "vault.connection.updated",
      "execution_attempt": 3,
      "http_method": "GET",
      "id": "1d174c4d-fe9e-4377-a76c-6da22fe9cd87",
      "request_body": "{\"entity\":{\"id\":\"2222+test_user_id\",\"application_id\":\"2222\",\"consumer_id\":\"test_user_id\",\"name\":\"ActiveCampaign\",\"icon\":\"https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png\",\"logo\":\"https://www.activecampaign.com/site/assets/social-2x.png\",\"unified_api\":\"crm\",\"service_id\":\"activecampaign\",\"auth_type\":\"apiKey\",\"enabled\":true,\"tag_line\":\"Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.\",\"website\":\"https://www.activecampaign.com/\",\"settings\":{\"instance_url\":\"https://eu28.salesforce.com\",\"base_url\":\"https://updated.api-us1.com\"},\"metadata\":{\"plan\":\"enterprise\",\"account\":{\"name\":\"My Company\"}},\"state\":\"callable\",\"created_at\":\"2021-09-10T10:39:49.628Z\",\"updated_at\":\"2021-09-10T10:39:52.715Z\"},\"entityType\":\"Connection\"}",
      "response_body": "{\"status\":\"OK\"}",
      "retry_scheduled": true,
      "service": {
        "id": "101-data-solution",
        "name": "101 Data Solution"
      },
      "status_code": 200,
      "success": true,
      "timestamp": "2021-07-12T14:26:17.420Z",
      "unified_api": "crm"
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

<h3 id="list-event-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|EventLogs|[GetWebhookEventLogsResponse](#schemagetwebhookeventlogsresponse)|
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

## Resolve and Execute a connection webhook

<a id="opIdwebhooksResolve"></a>

> Code samples

```bash
curl https://example.com/webhook/w/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2MDAwYzIzLWI1NmItNGRlOC1iZmEzLTMxNTAzMTE3YzBmNyJ9.rAXnsmZ4O7eF0aDwdflkxAJQwMUfWs5989WfmspNZ6Q/factorialhr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /webhook/w/{id}/{serviceId}`

Resolve a webhook based on lookup_id and then execute it

> Body parameter

```json
{}
```

<h3 id="resolve-and-execute-a-connection-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the connection lookupId. Signed so we know source came from us|
|serviceId|path|string|true|Service provider ID.|
|e|query|string|false|The name of downstream event when connector does not supply in body or header|
|body|body|[ResolveWebhookEventRequest](#schemaresolvewebhookeventrequest) \| [ResolveWebhookEventsRequest](#schemaresolvewebhookeventsrequest)|true|none|
|» *oneOf*|body|[ResolveWebhookEventRequest](#schemaresolvewebhookeventrequest)|false|none|
|» *oneOf*|body|[ResolveWebhookEventsRequest](#schemaresolvewebhookeventsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "request_id": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
  "status": "OK",
  "status_code": 200,
  "timestamp": "2021-10-01T08:26:28.039Z"
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

<h3 id="resolve-and-execute-a-connection-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resolve Webhook|[ResolveWebhookResponse](#schemaresolvewebhookresponse)|
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

## List webhook subscriptions

<a id="opIdwebhooksAll"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /webhook/webhooks`

List all webhook subscriptions

<h3 id="list-webhook-subscriptions-parameters">Parameters</h3>

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

<h3 id="list-webhook-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[GetWebhooksResponse](#schemagetwebhooksresponse)|
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

## Create webhook subscription

<a id="opIdwebhooksAdd"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "delivery_url": "https://example.com/my/webhook/endpoint",
    "description": "A description",
    "events": [
      "vault.connection.created",
      "vault.connection.updated"
    ],
    "status": "enabled",
    "unified_api": "crm"
  }'
```

`POST /webhook/webhooks`

Create a webhook subscription to receive events

> Body parameter

```json
{
  "delivery_url": "https://example.com/my/webhook/endpoint",
  "description": "A description",
  "events": [
    "vault.connection.created",
    "vault.connection.updated"
  ],
  "status": "enabled",
  "unified_api": "crm"
}
```

<h3 id="create-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|body|body|[CreateWebhookRequest](#schemacreatewebhookrequest)|true|none|
|» delivery_url|body|[DeliveryUrl](#schemadeliveryurl)|true|The delivery url of the webhook endpoint.|
|» description|body|[Description](#schemadescription)|false|A description of the object.|
|» events|body|[[WebhookEventType](#schemawebhookeventtype)]|true|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|» status|body|[Status](#schemastatus)|true|The status of the webhook.|
|» unified_api|body|[UnifiedApiId](#schemaunifiedapiid)|true|Name of Apideck Unified API|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|*|
|» events|crm.activity.created|
|» events|crm.activity.updated|
|» events|crm.activity.deleted|
|» events|crm.company.created|
|» events|crm.company.updated|
|» events|crm.company.deleted|
|» events|crm.contact.created|
|» events|crm.contact.updated|
|» events|crm.contact.deleted|
|» events|crm.lead.created|
|» events|crm.lead.updated|
|» events|crm.lead.deleted|
|» events|crm.note.created|
|» events|crm.notes.updated|
|» events|crm.notes.deleted|
|» events|crm.opportunity.created|
|» events|crm.opportunity.updated|
|» events|crm.opportunity.deleted|
|» events|lead.lead.created|
|» events|lead.lead.updated|
|» events|lead.lead.deleted|
|» events|vault.connection.created|
|» events|vault.connection.updated|
|» events|vault.connection.disabled|
|» events|vault.connection.deleted|
|» events|vault.connection.callable|
|» events|vault.connection.token_refresh.failed|
|» events|ats.job.created|
|» events|ats.job.updated|
|» events|ats.job.deleted|
|» events|ats.applicant.created|
|» events|ats.applicant.updated|
|» events|ats.applicant.deleted|
|» events|accounting.customer.created|
|» events|accounting.customer.updated|
|» events|accounting.customer.deleted|
|» events|accounting.invoice.created|
|» events|accounting.invoice.updated|
|» events|accounting.invoice.deleted|
|» events|accounting.invoice_item.created|
|» events|accounting.invoice_item.updated|
|» events|accounting.invoice_item.deleted|
|» events|accounting.ledger_account.created|
|» events|accounting.ledger_account.updated|
|» events|accounting.ledger_account.deleted|
|» events|accounting.tax_rate.created|
|» events|accounting.tax_rate.updated|
|» events|accounting.tax_rate.deleted|
|» events|accounting.bill.created|
|» events|accounting.bill.updated|
|» events|accounting.bill.deleted|
|» events|accounting.payment.created|
|» events|accounting.payment.updated|
|» events|accounting.payment.deleted|
|» events|accounting.supplier.created|
|» events|accounting.supplier.updated|
|» events|accounting.supplier.deleted|
|» events|pos.order.created|
|» events|pos.order.updated|
|» events|pos.order.deleted|
|» events|pos.product.created|
|» events|pos.product.updated|
|» events|pos.product.deleted|
|» events|pos.payment.created|
|» events|pos.payment.updated|
|» events|pos.payment.deleted|
|» events|pos.merchant.created|
|» events|pos.merchant.updated|
|» events|pos.merchant.deleted|
|» events|pos.location.created|
|» events|pos.location.updated|
|» events|pos.location.deleted|
|» events|pos.item.created|
|» events|pos.item.updated|
|» events|pos.item.deleted|
|» events|pos.modifier.created|
|» events|pos.modifier.updated|
|» events|pos.modifier.deleted|
|» events|pos.modifier-group.created|
|» events|pos.modifier-group.updated|
|» events|pos.modifier-group.deleted|
|» events|hris.employee.created|
|» events|hris.employee.updated|
|» events|hris.employee.deleted|
|» events|hris.company.created|
|» events|hris.company.updated|
|» events|hris.company.deleted|
|» events|file-storage.file.created|
|» events|file-storage.file.updated|
|» events|file-storage.file.deleted|
|» events|issue-tracking.ticket.created|
|» events|issue-tracking.ticket.updated|
|» events|issue-tracking.ticket.deleted|
|» status|enabled|
|» status|disabled|
|» unified_api|accounting|
|» unified_api|ats|
|» unified_api|calendar|
|» unified_api|crm|
|» unified_api|csp|
|» unified_api|customer-support|
|» unified_api|ecommerce|
|» unified_api|email|
|» unified_api|email-marketing|
|» unified_api|expense-management|
|» unified_api|file-storage|
|» unified_api|form|
|» unified_api|hris|
|» unified_api|lead|
|» unified_api|payroll|
|» unified_api|pos|
|» unified_api|procurement|
|» unified_api|project-management|
|» unified_api|script|
|» unified_api|sms|
|» unified_api|spreadsheet|
|» unified_api|team-messaging|
|» unified_api|issue-tracking|
|» unified_api|time-registration|
|» unified_api|transactional-email|
|» unified_api|vault|

> Example responses

> 201 Response

```json
{
  "data": {
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

<h3 id="create-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhooks|[CreateWebhookResponse](#schemacreatewebhookresponse)|
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

## Get webhook subscription

<a id="opIdwebhooksOne"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /webhook/webhooks/{id}`

Get the webhook subscription details

<h3 id="get-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.|
|x-apideck-app-id|header|string|true|The ID of your Unify application|

> Example responses

> 200 Response

```json
{
  "data": {
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

<h3 id="get-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[GetWebhookResponse](#schemagetwebhookresponse)|
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

## Delete webhook subscription

<a id="opIdwebhooksDelete"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /webhook/webhooks/{id}`

Delete a webhook subscription

<h3 id="delete-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.|
|x-apideck-app-id|header|string|true|The ID of your Unify application|

> Example responses

> 200 Response

```json
{
  "data": {
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

<h3 id="delete-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[DeleteWebhookResponse](#schemadeletewebhookresponse)|
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

## Update webhook subscription

<a id="opIdwebhooksUpdate"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "delivery_url": "https://example.com/my/webhook/endpoint",
    "description": "A description",
    "events": [
      "vault.connection.created",
      "vault.connection.updated"
    ],
    "status": "enabled"
  }'
```

`PATCH /webhook/webhooks/{id}`

Update a webhook subscription

> Body parameter

```json
{
  "delivery_url": "https://example.com/my/webhook/endpoint",
  "description": "A description",
  "events": [
    "vault.connection.created",
    "vault.connection.updated"
  ],
  "status": "enabled"
}
```

<h3 id="update-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|body|body|[UpdateWebhookRequest](#schemaupdatewebhookrequest)|true|none|
|» delivery_url|body|[DeliveryUrl](#schemadeliveryurl)|false|The delivery url of the webhook endpoint.|
|» description|body|[Description](#schemadescription)|false|A description of the object.|
|» events|body|[[WebhookEventType](#schemawebhookeventtype)]|false|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|» status|body|[Status](#schemastatus)|false|The status of the webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|*|
|» events|crm.activity.created|
|» events|crm.activity.updated|
|» events|crm.activity.deleted|
|» events|crm.company.created|
|» events|crm.company.updated|
|» events|crm.company.deleted|
|» events|crm.contact.created|
|» events|crm.contact.updated|
|» events|crm.contact.deleted|
|» events|crm.lead.created|
|» events|crm.lead.updated|
|» events|crm.lead.deleted|
|» events|crm.note.created|
|» events|crm.notes.updated|
|» events|crm.notes.deleted|
|» events|crm.opportunity.created|
|» events|crm.opportunity.updated|
|» events|crm.opportunity.deleted|
|» events|lead.lead.created|
|» events|lead.lead.updated|
|» events|lead.lead.deleted|
|» events|vault.connection.created|
|» events|vault.connection.updated|
|» events|vault.connection.disabled|
|» events|vault.connection.deleted|
|» events|vault.connection.callable|
|» events|vault.connection.token_refresh.failed|
|» events|ats.job.created|
|» events|ats.job.updated|
|» events|ats.job.deleted|
|» events|ats.applicant.created|
|» events|ats.applicant.updated|
|» events|ats.applicant.deleted|
|» events|accounting.customer.created|
|» events|accounting.customer.updated|
|» events|accounting.customer.deleted|
|» events|accounting.invoice.created|
|» events|accounting.invoice.updated|
|» events|accounting.invoice.deleted|
|» events|accounting.invoice_item.created|
|» events|accounting.invoice_item.updated|
|» events|accounting.invoice_item.deleted|
|» events|accounting.ledger_account.created|
|» events|accounting.ledger_account.updated|
|» events|accounting.ledger_account.deleted|
|» events|accounting.tax_rate.created|
|» events|accounting.tax_rate.updated|
|» events|accounting.tax_rate.deleted|
|» events|accounting.bill.created|
|» events|accounting.bill.updated|
|» events|accounting.bill.deleted|
|» events|accounting.payment.created|
|» events|accounting.payment.updated|
|» events|accounting.payment.deleted|
|» events|accounting.supplier.created|
|» events|accounting.supplier.updated|
|» events|accounting.supplier.deleted|
|» events|pos.order.created|
|» events|pos.order.updated|
|» events|pos.order.deleted|
|» events|pos.product.created|
|» events|pos.product.updated|
|» events|pos.product.deleted|
|» events|pos.payment.created|
|» events|pos.payment.updated|
|» events|pos.payment.deleted|
|» events|pos.merchant.created|
|» events|pos.merchant.updated|
|» events|pos.merchant.deleted|
|» events|pos.location.created|
|» events|pos.location.updated|
|» events|pos.location.deleted|
|» events|pos.item.created|
|» events|pos.item.updated|
|» events|pos.item.deleted|
|» events|pos.modifier.created|
|» events|pos.modifier.updated|
|» events|pos.modifier.deleted|
|» events|pos.modifier-group.created|
|» events|pos.modifier-group.updated|
|» events|pos.modifier-group.deleted|
|» events|hris.employee.created|
|» events|hris.employee.updated|
|» events|hris.employee.deleted|
|» events|hris.company.created|
|» events|hris.company.updated|
|» events|hris.company.deleted|
|» events|file-storage.file.created|
|» events|file-storage.file.updated|
|» events|file-storage.file.deleted|
|» events|issue-tracking.ticket.created|
|» events|issue-tracking.ticket.updated|
|» events|issue-tracking.ticket.deleted|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "data": {
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

<h3 id="update-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[UpdateWebhookResponse](#schemaupdatewebhookresponse)|
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

## Execute a webhook

<a id="opIdwebhooksExecute"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks/string/execute/factorialhr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /webhook/webhooks/{id}/execute/{serviceId}`

Execute a webhook

> Body parameter

```json
{}
```

<h3 id="execute-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.|
|serviceId|path|string|true|Service provider ID.|
|body|body|[ExecuteWebhookEventRequest](#schemaexecutewebhookeventrequest) \| [ExecuteWebhookEventsRequest](#schemaexecutewebhookeventsrequest)|true|none|
|» *oneOf*|body|[ExecuteWebhookEventRequest](#schemaexecutewebhookeventrequest)|false|none|
|» *oneOf*|body|[ExecuteWebhookEventsRequest](#schemaexecutewebhookeventsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "request_id": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
  "status": "OK",
  "status_code": 200,
  "timestamp": "2021-10-01T08:26:28.039Z"
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

<h3 id="execute-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Execute Webhook|[ExecuteWebhookResponse](#schemaexecutewebhookresponse)|
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

## Execute a webhook

<a id="opIdwebhooksShortExecute"></a>

> Code samples

```bash
curl https://example.com/webhook/webhooks/string/x/factorialhr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /webhook/webhooks/{id}/x/{serviceId}`

Execute a webhook

> Body parameter

```json
{}
```

<h3 id="execute-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.|
|serviceId|path|string|true|Service provider ID.|
|l_id|query|string|false|Unique identifier to used to look up consumer/connection when receiving connector events from downstream.|
|e|query|string|false|The name of downstream event when connector does not supply in body or header|
|body|body|[ExecuteWebhookEventRequest](#schemaexecutewebhookeventrequest) \| [ExecuteWebhookEventsRequest](#schemaexecutewebhookeventsrequest)|true|none|
|» *oneOf*|body|[ExecuteWebhookEventRequest](#schemaexecutewebhookeventrequest)|false|none|
|» *oneOf*|body|[ExecuteWebhookEventsRequest](#schemaexecutewebhookeventsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "request_id": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
  "status": "OK",
  "status_code": 200,
  "timestamp": "2021-10-01T08:26:28.039Z"
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

<h3 id="execute-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Execute Webhook|[ExecuteWebhookResponse](#schemaexecutewebhookresponse)|
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

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "delivery_url": "https://example.com/my/webhook/endpoint",
  "description": "A description",
  "events": [
    "vault.connection.created",
    "vault.connection.updated"
  ],
  "status": "enabled",
  "unified_api": "crm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_url|[DeliveryUrl](#schemadeliveryurl)|true|none|The delivery url of the webhook endpoint.|
|description|[Description](#schemadescription)|false|none|A description of the object.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|true|none|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|status|[Status](#schemastatus)|true|none|The status of the webhook.|
|unified_api|[UnifiedApiId](#schemaunifiedapiid)|true|none|Name of Apideck Unified API|

#### Enumerated Values

|Property|Value|
|---|---|
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

<h2 id="tocS_CreateWebhookResponse">CreateWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookresponse"></a>
<a id="schema_CreateWebhookResponse"></a>
<a id="tocScreatewebhookresponse"></a>
<a id="tocscreatewebhookresponse"></a>

```json
{
  "data": {
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
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"2020-09-30T07:43:32.000Z"
```

The date and time when the object was created.

<h2 id="tocS_DeleteWebhookResponse">DeleteWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookresponse"></a>
<a id="schema_DeleteWebhookResponse"></a>
<a id="tocSdeletewebhookresponse"></a>
<a id="tocsdeletewebhookresponse"></a>

```json
{
  "data": {
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
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_DeliveryUrl">DeliveryUrl</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryurl"></a>
<a id="schema_DeliveryUrl"></a>
<a id="tocSdeliveryurl"></a>
<a id="tocsdeliveryurl"></a>

```json
"https://example.com/my/webhook/endpoint"
```

The delivery url of the webhook endpoint.

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"A description"
```

A description of the object.

<h2 id="tocS_ExecuteBaseUrl">ExecuteBaseUrl</h2>
<!-- backwards compatibility -->
<a id="schemaexecutebaseurl"></a>
<a id="schema_ExecuteBaseUrl"></a>
<a id="tocSexecutebaseurl"></a>
<a id="tocsexecutebaseurl"></a>

```json
"https://unify.apideck.com/webhook/webhooks/1234/execute"
```

The Unify Base URL events from connectors will be sent to after service id is appended.

<h2 id="tocS_ExecuteWebhookEventRequest">ExecuteWebhookEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutewebhookeventrequest"></a>
<a id="schema_ExecuteWebhookEventRequest"></a>
<a id="tocSexecutewebhookeventrequest"></a>
<a id="tocsexecutewebhookeventrequest"></a>

```json
{}
```

<h2 id="tocS_ExecuteWebhookEventsRequest">ExecuteWebhookEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutewebhookeventsrequest"></a>
<a id="schema_ExecuteWebhookEventsRequest"></a>
<a id="tocSexecutewebhookeventsrequest"></a>
<a id="tocsexecutewebhookeventsrequest"></a>

```json
[
  {}
]
```

<h2 id="tocS_ExecuteWebhookResponse">ExecuteWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutewebhookresponse"></a>
<a id="schema_ExecuteWebhookResponse"></a>
<a id="tocSexecutewebhookresponse"></a>
<a id="tocsexecutewebhookresponse"></a>

```json
{
  "request_id": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
  "status": "OK",
  "status_code": 200,
  "timestamp": "2021-10-01T08:26:28.039Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|UUID of the request received|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|
|timestamp|string|false|none|ISO Datetime webhook event was received|

<h2 id="tocS_GetWebhookEventLogsResponse">GetWebhookEventLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookeventlogsresponse"></a>
<a id="schema_GetWebhookEventLogsResponse"></a>
<a id="tocSgetwebhookeventlogsresponse"></a>
<a id="tocsgetwebhookeventlogsresponse"></a>

```json
{
  "data": [
    {
      "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
      "attempts": [
        {
          "execution_attempt": 3,
          "status_code": 200,
          "success": true,
          "timestamp": "2021-07-12T14:26:17.420Z"
        }
      ],
      "consumer_id": "test_consumer_id",
      "endpoint": "https://example.com/my/webhook/endpoint",
      "entity_type": "Connection",
      "event_type": "vault.connection.updated",
      "execution_attempt": 3,
      "http_method": "GET",
      "id": "1d174c4d-fe9e-4377-a76c-6da22fe9cd87",
      "request_body": "{\"entity\":{\"id\":\"2222+test_user_id\",\"application_id\":\"2222\",\"consumer_id\":\"test_user_id\",\"name\":\"ActiveCampaign\",\"icon\":\"https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png\",\"logo\":\"https://www.activecampaign.com/site/assets/social-2x.png\",\"unified_api\":\"crm\",\"service_id\":\"activecampaign\",\"auth_type\":\"apiKey\",\"enabled\":true,\"tag_line\":\"Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.\",\"website\":\"https://www.activecampaign.com/\",\"settings\":{\"instance_url\":\"https://eu28.salesforce.com\",\"base_url\":\"https://updated.api-us1.com\"},\"metadata\":{\"plan\":\"enterprise\",\"account\":{\"name\":\"My Company\"}},\"state\":\"callable\",\"created_at\":\"2021-09-10T10:39:49.628Z\",\"updated_at\":\"2021-09-10T10:39:52.715Z\"},\"entityType\":\"Connection\"}",
      "response_body": "{\"status\":\"OK\"}",
      "retry_scheduled": true,
      "service": {
        "id": "101-data-solution",
        "name": "101 Data Solution"
      },
      "status_code": 200,
      "success": true,
      "timestamp": "2021-07-12T14:26:17.420Z",
      "unified_api": "crm"
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
|data|[[WebhookEventLog](#schemawebhookeventlog)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetWebhookResponse">GetWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookresponse"></a>
<a id="schema_GetWebhookResponse"></a>
<a id="tocSgetwebhookresponse"></a>
<a id="tocsgetwebhookresponse"></a>

```json
{
  "data": {
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
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetWebhooksResponse">GetWebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhooksresponse"></a>
<a id="schema_GetWebhooksResponse"></a>
<a id="tocSgetwebhooksresponse"></a>
<a id="tocsgetwebhooksresponse"></a>

```json
{
  "data": [
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
|data|[[Webhook](#schemawebhook)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

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

<h2 id="tocS_ResolveWebhookEventRequest">ResolveWebhookEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolvewebhookeventrequest"></a>
<a id="schema_ResolveWebhookEventRequest"></a>
<a id="tocSresolvewebhookeventrequest"></a>
<a id="tocsresolvewebhookeventrequest"></a>

```json
{}
```

<h2 id="tocS_ResolveWebhookEventsRequest">ResolveWebhookEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolvewebhookeventsrequest"></a>
<a id="schema_ResolveWebhookEventsRequest"></a>
<a id="tocSresolvewebhookeventsrequest"></a>
<a id="tocsresolvewebhookeventsrequest"></a>

```json
[
  {}
]
```

<h2 id="tocS_ResolveWebhookResponse">ResolveWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolvewebhookresponse"></a>
<a id="schema_ResolveWebhookResponse"></a>
<a id="tocSresolvewebhookresponse"></a>
<a id="tocsresolvewebhookresponse"></a>

```json
{
  "request_id": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
  "status": "OK",
  "status_code": 200,
  "timestamp": "2021-10-01T08:26:28.039Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|UUID of the request received|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|
|timestamp|string|false|none|ISO Datetime webhook event was received|

<h2 id="tocS_ServiceId">ServiceId</h2>
<!-- backwards compatibility -->
<a id="schemaserviceid"></a>
<a id="schema_ServiceId"></a>
<a id="tocSserviceid"></a>
<a id="tocsserviceid"></a>

```json
"close"
```

Service provider identifier

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"enabled"
```

The status of the webhook.

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

<h2 id="tocS_UpdateWebhookRequest">UpdateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_UpdateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "delivery_url": "https://example.com/my/webhook/endpoint",
  "description": "A description",
  "events": [
    "vault.connection.created",
    "vault.connection.updated"
  ],
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_url|[DeliveryUrl](#schemadeliveryurl)|false|none|The delivery url of the webhook endpoint.|
|description|[Description](#schemadescription)|false|none|A description of the object.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|false|none|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|status|[Status](#schemastatus)|false|none|The status of the webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
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

<h2 id="tocS_UpdateWebhookResponse">UpdateWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookresponse"></a>
<a id="schema_UpdateWebhookResponse"></a>
<a id="tocSupdatewebhookresponse"></a>
<a id="tocsupdatewebhookresponse"></a>

```json
{
  "data": {
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
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_UpdatedAt">UpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedat"></a>
<a id="schema_UpdatedAt"></a>
<a id="tocSupdatedat"></a>
<a id="tocsupdatedat"></a>

```json
"2020-09-30T07:43:32.000Z"
```

The date and time when the object was last updated.

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

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
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|delivery_url|[DeliveryUrl](#schemadeliveryurl)|true|none|The delivery url of the webhook endpoint.|
|description|[Description](#schemadescription)|false|none|A description of the object.|
|disabled_reason|string|false|none|Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|true|none|The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.|
|execute_base_url|[ExecuteBaseUrl](#schemaexecutebaseurl)|true|read-only|The Unify Base URL events from connectors will be sent to after service id is appended.|
|id|string|false|read-only|none|
|status|[Status](#schemastatus)|true|none|The status of the webhook.|
|unified_api|[UnifiedApiId](#schemaunifiedapiid)|true|none|Name of Apideck Unified API|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|

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

<h2 id="tocS_WebhookEvent">WebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemawebhookevent"></a>
<a id="schema_WebhookEvent"></a>
<a id="tocSwebhookevent"></a>
<a id="tocswebhookevent"></a>

```json
{
  "entity_id": "123456ASDF",
  "entity_type": "Company",
  "entity_url": "https://unify.apideck.com/crm/contacts/123456",
  "event_id": "9755c355-56c3-4a2f-a2da-86ff4411fccb",
  "event_type": "crm.company.created",
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|The service provider's ID of the entity that triggered this event|
|entity_type|string|false|none|The type entity that triggered this event|
|entity_url|string|false|none|The url to retrieve entity detail.|
|event_id|string|false|none|Unique reference to this request event|
|event_type|[WebhookEventType](#schemawebhookeventtype)|false|none|none|
|execution_attempt|number|false|none|The current count this request event has been attempted|
|occurred_at|string(date-time)|false|none|ISO Datetime for when the original event occurred|
|service_id|[ServiceId](#schemaserviceid)|false|none|Service provider identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|*|
|event_type|crm.activity.created|
|event_type|crm.activity.updated|
|event_type|crm.activity.deleted|
|event_type|crm.company.created|
|event_type|crm.company.updated|
|event_type|crm.company.deleted|
|event_type|crm.contact.created|
|event_type|crm.contact.updated|
|event_type|crm.contact.deleted|
|event_type|crm.lead.created|
|event_type|crm.lead.updated|
|event_type|crm.lead.deleted|
|event_type|crm.note.created|
|event_type|crm.notes.updated|
|event_type|crm.notes.deleted|
|event_type|crm.opportunity.created|
|event_type|crm.opportunity.updated|
|event_type|crm.opportunity.deleted|
|event_type|lead.lead.created|
|event_type|lead.lead.updated|
|event_type|lead.lead.deleted|
|event_type|vault.connection.created|
|event_type|vault.connection.updated|
|event_type|vault.connection.disabled|
|event_type|vault.connection.deleted|
|event_type|vault.connection.callable|
|event_type|vault.connection.token_refresh.failed|
|event_type|ats.job.created|
|event_type|ats.job.updated|
|event_type|ats.job.deleted|
|event_type|ats.applicant.created|
|event_type|ats.applicant.updated|
|event_type|ats.applicant.deleted|
|event_type|accounting.customer.created|
|event_type|accounting.customer.updated|
|event_type|accounting.customer.deleted|
|event_type|accounting.invoice.created|
|event_type|accounting.invoice.updated|
|event_type|accounting.invoice.deleted|
|event_type|accounting.invoice_item.created|
|event_type|accounting.invoice_item.updated|
|event_type|accounting.invoice_item.deleted|
|event_type|accounting.ledger_account.created|
|event_type|accounting.ledger_account.updated|
|event_type|accounting.ledger_account.deleted|
|event_type|accounting.tax_rate.created|
|event_type|accounting.tax_rate.updated|
|event_type|accounting.tax_rate.deleted|
|event_type|accounting.bill.created|
|event_type|accounting.bill.updated|
|event_type|accounting.bill.deleted|
|event_type|accounting.payment.created|
|event_type|accounting.payment.updated|
|event_type|accounting.payment.deleted|
|event_type|accounting.supplier.created|
|event_type|accounting.supplier.updated|
|event_type|accounting.supplier.deleted|
|event_type|pos.order.created|
|event_type|pos.order.updated|
|event_type|pos.order.deleted|
|event_type|pos.product.created|
|event_type|pos.product.updated|
|event_type|pos.product.deleted|
|event_type|pos.payment.created|
|event_type|pos.payment.updated|
|event_type|pos.payment.deleted|
|event_type|pos.merchant.created|
|event_type|pos.merchant.updated|
|event_type|pos.merchant.deleted|
|event_type|pos.location.created|
|event_type|pos.location.updated|
|event_type|pos.location.deleted|
|event_type|pos.item.created|
|event_type|pos.item.updated|
|event_type|pos.item.deleted|
|event_type|pos.modifier.created|
|event_type|pos.modifier.updated|
|event_type|pos.modifier.deleted|
|event_type|pos.modifier-group.created|
|event_type|pos.modifier-group.updated|
|event_type|pos.modifier-group.deleted|
|event_type|hris.employee.created|
|event_type|hris.employee.updated|
|event_type|hris.employee.deleted|
|event_type|hris.company.created|
|event_type|hris.company.updated|
|event_type|hris.company.deleted|
|event_type|file-storage.file.created|
|event_type|file-storage.file.updated|
|event_type|file-storage.file.deleted|
|event_type|issue-tracking.ticket.created|
|event_type|issue-tracking.ticket.updated|
|event_type|issue-tracking.ticket.deleted|

<h2 id="tocS_WebhookEventLog">WebhookEventLog</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventlog"></a>
<a id="schema_WebhookEventLog"></a>
<a id="tocSwebhookeventlog"></a>
<a id="tocswebhookeventlog"></a>

```json
{
  "application_id": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  "attempts": [
    {
      "execution_attempt": 3,
      "status_code": 200,
      "success": true,
      "timestamp": "2021-07-12T14:26:17.420Z"
    }
  ],
  "consumer_id": "test_consumer_id",
  "endpoint": "https://example.com/my/webhook/endpoint",
  "entity_type": "Connection",
  "event_type": "vault.connection.updated",
  "execution_attempt": 3,
  "http_method": "GET",
  "id": "1d174c4d-fe9e-4377-a76c-6da22fe9cd87",
  "request_body": "{\"entity\":{\"id\":\"2222+test_user_id\",\"application_id\":\"2222\",\"consumer_id\":\"test_user_id\",\"name\":\"ActiveCampaign\",\"icon\":\"https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png\",\"logo\":\"https://www.activecampaign.com/site/assets/social-2x.png\",\"unified_api\":\"crm\",\"service_id\":\"activecampaign\",\"auth_type\":\"apiKey\",\"enabled\":true,\"tag_line\":\"Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.\",\"website\":\"https://www.activecampaign.com/\",\"settings\":{\"instance_url\":\"https://eu28.salesforce.com\",\"base_url\":\"https://updated.api-us1.com\"},\"metadata\":{\"plan\":\"enterprise\",\"account\":{\"name\":\"My Company\"}},\"state\":\"callable\",\"created_at\":\"2021-09-10T10:39:49.628Z\",\"updated_at\":\"2021-09-10T10:39:52.715Z\"},\"entityType\":\"Connection\"}",
  "response_body": "{\"status\":\"OK\"}",
  "retry_scheduled": true,
  "service": {
    "id": "101-data-solution",
    "name": "101 Data Solution"
  },
  "status_code": 200,
  "success": true,
  "timestamp": "2021-07-12T14:26:17.420Z",
  "unified_api": "crm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_id|[ApplicationId](#schemaapplicationid)|false|none|ID of your Apideck Application|
|attempts|[object]|false|none|record of each attempt to call webhook endpoint|
|consumer_id|[ConsumerId](#schemaconsumerid)|false|none|Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.|
|endpoint|string(uri)|false|none|The URL of the webhook endpoint.|
|entity_type|string|false|none|Name of the Entity described by the attributes delivered within payload|
|event_type|string|false|none|Name of source event that webhook is subscribed to.|
|execution_attempt|number|false|none|Number of attempts webhook endpoint was called before a success was returned or eventually failed|
|http_method|string|false|none|HTTP Method of request to endpoint.|
|id|string|false|none|none|
|request_body|string|false|none|The JSON stringified payload that was delivered to the webhook endpoint.|
|response_body|string|false|none|The JSON stringified response that was returned from the webhook endpoint.|
|retry_scheduled|boolean|false|none|If the request has not hit the max retry limit and will be retried.|
|service|object|false|none|Apideck service provider associated with event.|
|status_code|integer|false|none|HTTP Status code that was returned.|
|success|boolean|false|none|Whether or not the request was successful.|
|timestamp|string|false|none|ISO Date and time when the request was made.|
|unified_api|[UnifiedApiId](#schemaunifiedapiid)|false|none|Name of Apideck Unified API|

#### Enumerated Values

|Property|Value|
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

<h2 id="tocS_WebhookEventLogsFilter">WebhookEventLogsFilter</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventlogsfilter"></a>
<a id="schema_WebhookEventLogsFilter"></a>
<a id="tocSwebhookeventlogsfilter"></a>
<a id="tocswebhookeventlogsfilter"></a>

```json
{
  "consumer_id": "test_user_id",
  "entity_type": "Connection",
  "event_type": "vault.connection.callable",
  "exclude_apis": "vault,proxy",
  "service": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_id|string \| null|false|none|none|
|entity_type|string \| null|false|none|none|
|event_type|string \| null|false|none|none|
|exclude_apis|string \| null|false|none|none|
|service|object \| null|false|none|none|

<h2 id="tocS_WebhookEventType">WebhookEventType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventtype"></a>
<a id="schema_WebhookEventType"></a>
<a id="tocSwebhookeventtype"></a>
<a id="tocswebhookeventtype"></a>

```json
"crm.company.created"
```
