<h1 id="ecommerce-api">Ecommerce API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Ecommerce API.

You can use this API to access all Ecommerce API endpoints.

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

<h1 id="ecommerce-api-orders">Orders</h1>

## List Orders

<a id="opIdordersAll"></a>

> Code samples

```bash
curl https://example.com/ecommerce/orders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/orders`

List Orders

<h3 id="list-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[EcommerceOrdersFilter](#schemaecommerceordersfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "billing_address": {
        "city": "New York",
        "company_name": "Acme Inc.",
        "country": "US",
        "line1": "123 Main Street",
        "line2": "Apt 1",
        "postal_code": "10001",
        "state": "NY"
      },
      "created_at": "2020-09-30T07:43:32.000Z",
      "currency": "USD",
      "customer": {
        "company_name": "Acme Inc.",
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "John",
        "id": "12345",
        "last_name": "Doe",
        "name": "John Doe",
        "phone_numbers": [
          {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        ]
      },
      "discounts": [
        {
          "amount": "5.99",
          "code": "SUMMER20",
          "percentage": "0.1"
        }
      ],
      "fulfillment_status": "shipped",
      "id": "12345",
      "line_items": [
        {
          "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
          "discounts": [
            {
              "amount": "5.99",
              "code": "SUMMER20",
              "percentage": "0.1"
            }
          ],
          "id": "12345",
          "name": "Midnight 16inch MacBook Pro",
          "options": [
            {
              "id": "jkl012",
              "name": "Color",
              "value": "Silver"
            }
          ],
          "product_id": "def456",
          "quantity": "2",
          "sku": "MBP123-16GB-SILVER-13",
          "tax_amount": "1.6",
          "tax_rate": "0.08",
          "total_amount": "43.18",
          "unit_price": "19.99",
          "variant_id": "ghi789"
        }
      ],
      "note": "Special instructions for delivery",
      "order_number": "123456789",
      "payment_method": "credit_card",
      "payment_status": "paid",
      "shipping_address": {
        "city": "New York",
        "company_name": "Acme Inc.",
        "country": "US",
        "line1": "123 Main Street",
        "line2": "Apt 1",
        "postal_code": "10001",
        "state": "NY"
      },
      "shipping_cost": "5.17",
      "status": "active",
      "sub_total": "45.17",
      "total_amount": "50.17",
      "total_discount": "5.5",
      "total_tax": "5.16",
      "tracking": [
        {
          "number": "1Z9999999999999999",
          "provider": "UPS",
          "updated_at": "2020-09-30T07:43:32.000Z",
          "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
        }
      ],
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
  "operation": "all",
  "resource": "orders",
  "service": "shopify",
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

<h3 id="list-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Orders|[GetEcommerceOrdersResponse](#schemagetecommerceordersresponse)|
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

## Get Order

<a id="opIdordersOne"></a>

> Code samples

```bash
curl https://example.com/ecommerce/orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/orders/{id}`

Get Order

<h3 id="get-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "billing_address": {
      "city": "New York",
      "company_name": "Acme Inc.",
      "country": "US",
      "line1": "123 Main Street",
      "line2": "Apt 1",
      "postal_code": "10001",
      "state": "NY"
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "currency": "USD",
    "customer": {
      "company_name": "Acme Inc.",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "John",
      "id": "12345",
      "last_name": "Doe",
      "name": "John Doe",
      "phone_numbers": [
        {
          "area_code": "323",
          "country_code": "1",
          "extension": "105",
          "id": "12345",
          "number": "111-111-1111",
          "type": "primary"
        }
      ]
    },
    "discounts": [
      {
        "amount": "5.99",
        "code": "SUMMER20",
        "percentage": "0.1"
      }
    ],
    "fulfillment_status": "shipped",
    "id": "12345",
    "line_items": [
      {
        "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
        "discounts": [
          {
            "amount": "5.99",
            "code": "SUMMER20",
            "percentage": "0.1"
          }
        ],
        "id": "12345",
        "name": "Midnight 16inch MacBook Pro",
        "options": [
          {
            "id": "jkl012",
            "name": "Color",
            "value": "Silver"
          }
        ],
        "product_id": "def456",
        "quantity": "2",
        "sku": "MBP123-16GB-SILVER-13",
        "tax_amount": "1.6",
        "tax_rate": "0.08",
        "total_amount": "43.18",
        "unit_price": "19.99",
        "variant_id": "ghi789"
      }
    ],
    "note": "Special instructions for delivery",
    "order_number": "123456789",
    "payment_method": "credit_card",
    "payment_status": "paid",
    "shipping_address": {
      "city": "New York",
      "company_name": "Acme Inc.",
      "country": "US",
      "line1": "123 Main Street",
      "line2": "Apt 1",
      "postal_code": "10001",
      "state": "NY"
    },
    "shipping_cost": "5.17",
    "status": "active",
    "sub_total": "45.17",
    "total_amount": "50.17",
    "total_discount": "5.5",
    "total_tax": "5.16",
    "tracking": [
      {
        "number": "1Z9999999999999999",
        "provider": "UPS",
        "updated_at": "2020-09-30T07:43:32.000Z",
        "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
      }
    ],
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "orders",
  "service": "shopify",
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

<h3 id="get-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Orders|[GetEcommerceOrderResponse](#schemagetecommerceorderresponse)|
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

<h1 id="ecommerce-api-products">Products</h1>

## List Products

<a id="opIdproductsAll"></a>

> Code samples

```bash
curl https://example.com/ecommerce/products \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/products`

List Products

<h3 id="list-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "categories": [
        {
          "id": "12345",
          "name": "Laptops"
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
      "id": "12345",
      "images": [
        {
          "id": "12345",
          "url": "https://example.com/macbook-pro.jpg"
        }
      ],
      "inventory_quantity": "10",
      "name": "MacBook Pro",
      "options": [
        {
          "id": "1",
          "name": "Color",
          "values": [
            "Red"
          ]
        }
      ],
      "price": "1999.99",
      "sku": "MBP123",
      "status": "active",
      "tags": [
        "Apple"
      ],
      "updated_at": "2020-09-30T07:43:32.000Z",
      "variants": [
        {
          "id": "1",
          "images": [
            {
              "id": "12345",
              "url": "https://example.com/macbook-pro.jpg"
            }
          ],
          "inventory_quantity": "5",
          "name": "Midnight 16inch MacBook Pro",
          "options": [
            {
              "id": "1",
              "name": "Color",
              "value": "Silver"
            }
          ],
          "price": "1999.99",
          "sku": "MBP123-16GB-SILVER-13",
          "weight": "1.25",
          "weight_unit": "lb"
        }
      ],
      "weight": "1.25",
      "weight_unit": "lb"
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
  "operation": "all",
  "resource": "products",
  "service": "shopify",
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

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products|[GetProductsResponse](#schemagetproductsresponse)|
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

## Get Product

<a id="opIdproductsOne"></a>

> Code samples

```bash
curl https://example.com/ecommerce/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/products/{id}`

Get Product

<h3 id="get-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "categories": [
      {
        "id": "12345",
        "name": "Laptops"
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
    "id": "12345",
    "images": [
      {
        "id": "12345",
        "url": "https://example.com/macbook-pro.jpg"
      }
    ],
    "inventory_quantity": "10",
    "name": "MacBook Pro",
    "options": [
      {
        "id": "1",
        "name": "Color",
        "values": [
          "Red"
        ]
      }
    ],
    "price": "1999.99",
    "sku": "MBP123",
    "status": "active",
    "tags": [
      "Apple"
    ],
    "updated_at": "2020-09-30T07:43:32.000Z",
    "variants": [
      {
        "id": "1",
        "images": [
          {
            "id": "12345",
            "url": "https://example.com/macbook-pro.jpg"
          }
        ],
        "inventory_quantity": "5",
        "name": "Midnight 16inch MacBook Pro",
        "options": [
          {
            "id": "1",
            "name": "Color",
            "value": "Silver"
          }
        ],
        "price": "1999.99",
        "sku": "MBP123-16GB-SILVER-13",
        "weight": "1.25",
        "weight_unit": "lb"
      }
    ],
    "weight": "1.25",
    "weight_unit": "lb"
  },
  "operation": "one",
  "resource": "products",
  "service": "shopify",
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

<h3 id="get-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products|[GetProductResponse](#schemagetproductresponse)|
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

<h1 id="ecommerce-api-customers">Customers</h1>

## List Customers

<a id="opIdcustomersAll"></a>

> Code samples

```bash
curl https://example.com/ecommerce/customers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/customers`

List Customers

<h3 id="list-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[EcommerceCustomersFilter](#schemaecommercecustomersfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "addresses": [
        {
          "city": "Anytown",
          "country": "US",
          "id": "12345",
          "line1": "Main street",
          "line2": "apt #",
          "postal_code": "12345",
          "state": "Ohio",
          "type": "billing"
        }
      ],
      "company_name": "Acme Inc.",
      "created_at": "2020-09-30T07:43:32.000Z",
      "currency": "USD",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "John",
      "id": "12345",
      "last_name": "Doe",
      "name": "John Doe",
      "orders": [
        {
          "id": "12345",
          "status": "active",
          "total": "199.99"
        }
      ],
      "phone_numbers": [
        {
          "area_code": "323",
          "country_code": "1",
          "extension": "105",
          "id": "12345",
          "number": "111-111-1111",
          "type": "primary"
        }
      ],
      "status": "active",
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
  "operation": "all",
  "resource": "customers",
  "service": "shopify",
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

<h3 id="list-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Customers|[GetEcommerceCustomersResponse](#schemagetecommercecustomersresponse)|
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

## Get Customer

<a id="opIdcustomersOne"></a>

> Code samples

```bash
curl https://example.com/ecommerce/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/customers/{id}`

Get Customer

<h3 id="get-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "addresses": [
      {
        "city": "Anytown",
        "country": "US",
        "id": "12345",
        "line1": "Main street",
        "line2": "apt #",
        "postal_code": "12345",
        "state": "Ohio",
        "type": "billing"
      }
    ],
    "company_name": "Acme Inc.",
    "created_at": "2020-09-30T07:43:32.000Z",
    "currency": "USD",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "John",
    "id": "12345",
    "last_name": "Doe",
    "name": "John Doe",
    "orders": [
      {
        "id": "12345",
        "status": "active",
        "total": "199.99"
      }
    ],
    "phone_numbers": [
      {
        "area_code": "323",
        "country_code": "1",
        "extension": "105",
        "id": "12345",
        "number": "111-111-1111",
        "type": "primary"
      }
    ],
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "customers",
  "service": "shopify",
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

<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Customers|[GetEcommerceCustomerResponse](#schemagetecommercecustomerresponse)|
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

<h1 id="ecommerce-api-stores">Stores</h1>

## Get Store

<a id="opIdstoresOne"></a>

> Code samples

```bash
curl https://example.com/ecommerce/store \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ecommerce/store`

Get Store

<h3 id="get-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "admin_url": "https://mybrand.com/admin",
    "created_at": "2020-09-30T07:43:32.000Z",
    "id": "12345",
    "name": "My Store",
    "store_url": "https://mybrand.com/shop",
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "stores",
  "service": "shopify",
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

<h3 id="get-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stores|[GetStoreResponse](#schemagetstoreresponse)|
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

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "San Francisco",
  "contact_name": "Elon Musk",
  "country": "US",
  "county": "Santa Clara",
  "email": "elon@musk.com",
  "fax": "122-111-1111",
  "id": "123",
  "latitude": "40.759211",
  "line1": "Main street",
  "line2": "apt #",
  "line3": "Suite #",
  "line4": "delivery instructions",
  "longitude": "-73.984638",
  "name": "HQ US",
  "phone_number": "111-111-1111",
  "postal_code": "94104",
  "row_version": "1-12345",
  "salutation": "Mr",
  "state": "CA",
  "street_number": "25",
  "string": "25 Spring Street, Blackburn, VIC 3130",
  "type": "primary",
  "website": "https://elonmusk.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string \| null|false|none|Name of city.|
|contact_name|string \| null|false|none|none|
|country|string \| null|false|none|country code according to ISO 3166-1 alpha-2.|
|county|string \| null|false|none|Address field that holds a sublocality, such as a county|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|id|string \| null|false|none|none|
|latitude|string \| null|false|none|none|
|line1|string \| null|false|none|Line 1 of the address e.g. number, street, suite, apt #, etc.|
|line2|string \| null|false|none|Line 2 of the address|
|line3|string \| null|false|none|Line 3 of the address|
|line4|string \| null|false|none|Line 4 of the address|
|longitude|string \| null|false|none|none|
|name|string \| null|false|none|none|
|phone_number|string \| null|false|none|none|
|postal_code|string \| null|false|none|Zip code or equivalent.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|salutation|string \| null|false|none|none|
|state|string \| null|false|none|Name of state|
|street_number|string \| null|false|none|Street number|
|string|string \| null|false|none|none|
|type|string|false|none|none|
|website|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|primary|
|type|secondary|
|type|home|
|type|office|
|type|shipping|
|type|billing|
|type|other|

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

<h2 id="tocS_CreateEcommerceCustomerResponse">CreateEcommerceCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateecommercecustomerresponse"></a>
<a id="schema_CreateEcommerceCustomerResponse"></a>
<a id="tocScreateecommercecustomerresponse"></a>
<a id="tocscreateecommercecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "customers",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateEcommerceOrderResponse">CreateEcommerceOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateecommerceorderresponse"></a>
<a id="schema_CreateEcommerceOrderResponse"></a>
<a id="tocScreateecommerceorderresponse"></a>
<a id="tocscreateecommerceorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "orders",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateProductResponse">CreateProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateproductresponse"></a>
<a id="schema_CreateProductResponse"></a>
<a id="tocScreateproductresponse"></a>
<a id="tocscreateproductresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "products",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
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

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"12345"
```

The user who created the object.

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"USD"
```

Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

<h2 id="tocS_CustomField">CustomField</h2>
<!-- backwards compatibility -->
<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "description": "Employee Level",
  "id": "2389328923893298",
  "name": "employee_level",
  "value": "Uses Salesforce and Marketo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|More information about the custom field|
|id|string|true|none|none|
|name|string|false|none|Name of the custom field.|
|value|string \| null \| number \| null \| boolean \| null \| [string]|false|none|none|

<h2 id="tocS_DeleteEcommerceCustomerResponse">DeleteEcommerceCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteecommercecustomerresponse"></a>
<a id="schema_DeleteEcommerceCustomerResponse"></a>
<a id="tocSdeleteecommercecustomerresponse"></a>
<a id="tocsdeleteecommercecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "customers",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_DeleteEcommerceOrderResponse">DeleteEcommerceOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteecommerceorderresponse"></a>
<a id="schema_DeleteEcommerceOrderResponse"></a>
<a id="tocSdeleteecommerceorderresponse"></a>
<a id="tocsdeleteecommerceorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "orders",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_DeleteProductResponse">DeleteProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteproductresponse"></a>
<a id="schema_DeleteProductResponse"></a>
<a id="tocSdeleteproductresponse"></a>
<a id="tocsdeleteproductresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "products",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "code": "2",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "description": "R&D",
  "id": "12345",
  "name": "R&D",
  "parent_id": "22345",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|description|string \| null|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|name|string \| null|false|none|Department name|
|parent_id|string|false|read-only|Parent ID|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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

<h2 id="tocS_Division">Division</h2>
<!-- backwards compatibility -->
<a id="schemadivision"></a>
<a id="schema_Division"></a>
<a id="tocSdivision"></a>
<a id="tocsdivision"></a>

```json
"Europe"
```

The division the person is currently in. Usually a collection of departments or teams or regions.

<h2 id="tocS_EcommerceAddress">EcommerceAddress</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceaddress"></a>
<a id="schema_EcommerceAddress"></a>
<a id="tocSecommerceaddress"></a>
<a id="tocsecommerceaddress"></a>

```json
{
  "city": "New York",
  "company_name": "Acme Inc.",
  "country": "US",
  "line1": "123 Main Street",
  "line2": "Apt 1",
  "postal_code": "10001",
  "state": "NY"
}
```

An object representing a shipping or billing address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the billing address.|
|company_name|string|false|none|Company name of the customer|
|country|string|false|none|Country of the billing address.|
|line1|string|false|none|Address line 1 of the billing address.|
|line2|string|false|none|Address line 2 of the billing address.|
|postal_code|string|false|none|Postal/ZIP code of the billing address.|
|state|string|false|none|State/province of the billing address.|

<h2 id="tocS_EcommerceCustomer">EcommerceCustomer</h2>
<!-- backwards compatibility -->
<a id="schemaecommercecustomer"></a>
<a id="schema_EcommerceCustomer"></a>
<a id="tocSecommercecustomer"></a>
<a id="tocsecommercecustomer"></a>

```json
{
  "addresses": [
    {
      "city": "Anytown",
      "country": "US",
      "id": "12345",
      "line1": "Main street",
      "line2": "apt #",
      "postal_code": "12345",
      "state": "Ohio",
      "type": "billing"
    }
  ],
  "company_name": "Acme Inc.",
  "created_at": "2020-09-30T07:43:32.000Z",
  "currency": "USD",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "John",
  "id": "12345",
  "last_name": "Doe",
  "name": "John Doe",
  "orders": [
    {
      "id": "12345",
      "status": "active",
      "total": "199.99"
    }
  ],
  "phone_numbers": [
    {
      "area_code": "323",
      "country_code": "1",
      "extension": "105",
      "id": "12345",
      "number": "111-111-1111",
      "type": "primary"
    }
  ],
  "status": "active",
  "updated_at": "2020-09-30T07:43:32.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[object]|false|none|An array of addresses for the customer.|
|company_name|string|false|none|Company name of the customer|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|emails|[[Email](#schemaemail)]|false|none|An array of email addresses for the customer.|
|first_name|string|false|none|First name of the customer|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|last_name|string|false|none|Last name of the customer|
|name|string|false|none|Full name of the customer|
|orders|[[LinkedEcommerceOrder](#schemalinkedecommerceorder)]|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|An array of phone numbers for the customer.|
|status|string|false|none|The current status of the customer|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|UNKNOWN_CURRENCY|
|currency|AED|
|currency|AFN|
|currency|ALL|
|currency|AMD|
|currency|ANG|
|currency|AOA|
|currency|ARS|
|currency|AUD|
|currency|AWG|
|currency|AZN|
|currency|BAM|
|currency|BBD|
|currency|BDT|
|currency|BGN|
|currency|BHD|
|currency|BIF|
|currency|BMD|
|currency|BND|
|currency|BOB|
|currency|BOV|
|currency|BRL|
|currency|BSD|
|currency|BTN|
|currency|BWP|
|currency|BYR|
|currency|BZD|
|currency|CAD|
|currency|CDF|
|currency|CHE|
|currency|CHF|
|currency|CHW|
|currency|CLF|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|COU|
|currency|CRC|
|currency|CUC|
|currency|CUP|
|currency|CVE|
|currency|CZK|
|currency|DJF|
|currency|DKK|
|currency|DOP|
|currency|DZD|
|currency|EGP|
|currency|ERN|
|currency|ETB|
|currency|EUR|
|currency|FJD|
|currency|FKP|
|currency|GBP|
|currency|GEL|
|currency|GHS|
|currency|GIP|
|currency|GMD|
|currency|GNF|
|currency|GTQ|
|currency|GYD|
|currency|HKD|
|currency|HNL|
|currency|HRK|
|currency|HTG|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|IQD|
|currency|IRR|
|currency|ISK|
|currency|JMD|
|currency|JOD|
|currency|JPY|
|currency|KES|
|currency|KGS|
|currency|KHR|
|currency|KMF|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KYD|
|currency|KZT|
|currency|LAK|
|currency|LBP|
|currency|LKR|
|currency|LRD|
|currency|LSL|
|currency|LTL|
|currency|LVL|
|currency|LYD|
|currency|MAD|
|currency|MDL|
|currency|MGA|
|currency|MKD|
|currency|MMK|
|currency|MNT|
|currency|MOP|
|currency|MRO|
|currency|MUR|
|currency|MVR|
|currency|MWK|
|currency|MXN|
|currency|MXV|
|currency|MYR|
|currency|MZN|
|currency|NAD|
|currency|NGN|
|currency|NIO|
|currency|NOK|
|currency|NPR|
|currency|NZD|
|currency|OMR|
|currency|PAB|
|currency|PEN|
|currency|PGK|
|currency|PHP|
|currency|PKR|
|currency|PLN|
|currency|PYG|
|currency|QAR|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|RWF|
|currency|SAR|
|currency|SBD|
|currency|SCR|
|currency|SDG|
|currency|SEK|
|currency|SGD|
|currency|SHP|
|currency|SLL|
|currency|SOS|
|currency|SRD|
|currency|SSP|
|currency|STD|
|currency|SVC|
|currency|SYP|
|currency|SZL|
|currency|THB|
|currency|TJS|
|currency|TMT|
|currency|TND|
|currency|TOP|
|currency|TRC|
|currency|TRY|
|currency|TTD|
|currency|TWD|
|currency|TZS|
|currency|UAH|
|currency|UGX|
|currency|USD|
|currency|USN|
|currency|USS|
|currency|UYI|
|currency|UYU|
|currency|UZS|
|currency|VEF|
|currency|VND|
|currency|VUV|
|currency|WST|
|currency|XAF|
|currency|XAG|
|currency|XAU|
|currency|XBA|
|currency|XBB|
|currency|XBC|
|currency|XBD|
|currency|XCD|
|currency|XDR|
|currency|XOF|
|currency|XPD|
|currency|XPF|
|currency|XPT|
|currency|XTS|
|currency|XXX|
|currency|YER|
|currency|ZAR|
|currency|ZMK|
|currency|ZMW|
|currency|BTC|
|currency|ETH|
|status|active|
|status|archived|

<h2 id="tocS_EcommerceCustomersFilter">EcommerceCustomersFilter</h2>
<!-- backwards compatibility -->
<a id="schemaecommercecustomersfilter"></a>
<a id="schema_EcommerceCustomersFilter"></a>
<a id="tocSecommercecustomersfilter"></a>
<a id="tocsecommercecustomersfilter"></a>

```json
{
  "email": "elon@musk.com",
  "phone_number": "111-111-1111"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Customer email address to filter on|
|phone_number|string|false|none|Customer phone number to filter on|

<h2 id="tocS_EcommerceDiscount">EcommerceDiscount</h2>
<!-- backwards compatibility -->
<a id="schemaecommercediscount"></a>
<a id="schema_EcommerceDiscount"></a>
<a id="tocSecommercediscount"></a>
<a id="tocsecommercediscount"></a>

```json
{
  "amount": "5.99",
  "code": "SUMMER20",
  "percentage": "0.1"
}
```

An object representing a discount applied to an ecommerce order or product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|The fixed amount of the discount.|
|code|string|false|none|The code used to apply the discount.|
|percentage|string|false|none|The percentage of the discount.|

<h2 id="tocS_EcommerceOrder">EcommerceOrder</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceorder"></a>
<a id="schema_EcommerceOrder"></a>
<a id="tocSecommerceorder"></a>
<a id="tocsecommerceorder"></a>

```json
{
  "billing_address": {
    "city": "New York",
    "company_name": "Acme Inc.",
    "country": "US",
    "line1": "123 Main Street",
    "line2": "Apt 1",
    "postal_code": "10001",
    "state": "NY"
  },
  "created_at": "2020-09-30T07:43:32.000Z",
  "currency": "USD",
  "customer": {
    "company_name": "Acme Inc.",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "John",
    "id": "12345",
    "last_name": "Doe",
    "name": "John Doe",
    "phone_numbers": [
      {
        "area_code": "323",
        "country_code": "1",
        "extension": "105",
        "id": "12345",
        "number": "111-111-1111",
        "type": "primary"
      }
    ]
  },
  "discounts": [
    {
      "amount": "5.99",
      "code": "SUMMER20",
      "percentage": "0.1"
    }
  ],
  "fulfillment_status": "shipped",
  "id": "12345",
  "line_items": [
    {
      "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
      "discounts": [
        {
          "amount": "5.99",
          "code": "SUMMER20",
          "percentage": "0.1"
        }
      ],
      "id": "12345",
      "name": "Midnight 16inch MacBook Pro",
      "options": [
        {
          "id": "jkl012",
          "name": "Color",
          "value": "Silver"
        }
      ],
      "product_id": "def456",
      "quantity": "2",
      "sku": "MBP123-16GB-SILVER-13",
      "tax_amount": "1.6",
      "tax_rate": "0.08",
      "total_amount": "43.18",
      "unit_price": "19.99",
      "variant_id": "ghi789"
    }
  ],
  "note": "Special instructions for delivery",
  "order_number": "123456789",
  "payment_method": "credit_card",
  "payment_status": "paid",
  "shipping_address": {
    "city": "New York",
    "company_name": "Acme Inc.",
    "country": "US",
    "line1": "123 Main Street",
    "line2": "Apt 1",
    "postal_code": "10001",
    "state": "NY"
  },
  "shipping_cost": "5.17",
  "status": "active",
  "sub_total": "45.17",
  "total_amount": "50.17",
  "total_discount": "5.5",
  "total_tax": "5.16",
  "tracking": [
    {
      "number": "1Z9999999999999999",
      "provider": "UPS",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
    }
  ],
  "updated_at": "2020-09-30T07:43:32.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_address|[EcommerceAddress](#schemaecommerceaddress)|false|none|An object representing a shipping or billing address.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|customer|[LinkedEcommerceCustomer](#schemalinkedecommercecustomer)|false|none|The customer this entity is linked to.|
|discounts|[[EcommerceDiscount](#schemaecommercediscount)]|false|none|none|
|fulfillment_status|string|false|none|Current fulfillment status of the order.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|line_items|[[EcommerceOrderLineItem](#schemaecommerceorderlineitem)]|false|none|none|
|note|string|false|none|Note for the order.|
|order_number|string|false|none|Order number, if any.|
|payment_method|string|false|none|Payment method used for this order.|
|payment_status|string|false|none|Current payment status of the order.|
|shipping_address|[EcommerceAddress](#schemaecommerceaddress)|false|none|An object representing a shipping or billing address.|
|shipping_cost|string|false|none|Shipping cost, if any.|
|status|[EcommerceOrderStatus](#schemaecommerceorderstatus)|false|none|Current status of the order.|
|sub_total|string|false|none|Sub-total amount, normally before tax.|
|total_amount|string|false|none|Total amount due.|
|total_discount|string|false|none|Total discount, if any.|
|total_tax|string|false|none|Total tax, if any.|
|tracking|[[TrackingItem](#schematrackingitem)]|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|UNKNOWN_CURRENCY|
|currency|AED|
|currency|AFN|
|currency|ALL|
|currency|AMD|
|currency|ANG|
|currency|AOA|
|currency|ARS|
|currency|AUD|
|currency|AWG|
|currency|AZN|
|currency|BAM|
|currency|BBD|
|currency|BDT|
|currency|BGN|
|currency|BHD|
|currency|BIF|
|currency|BMD|
|currency|BND|
|currency|BOB|
|currency|BOV|
|currency|BRL|
|currency|BSD|
|currency|BTN|
|currency|BWP|
|currency|BYR|
|currency|BZD|
|currency|CAD|
|currency|CDF|
|currency|CHE|
|currency|CHF|
|currency|CHW|
|currency|CLF|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|COU|
|currency|CRC|
|currency|CUC|
|currency|CUP|
|currency|CVE|
|currency|CZK|
|currency|DJF|
|currency|DKK|
|currency|DOP|
|currency|DZD|
|currency|EGP|
|currency|ERN|
|currency|ETB|
|currency|EUR|
|currency|FJD|
|currency|FKP|
|currency|GBP|
|currency|GEL|
|currency|GHS|
|currency|GIP|
|currency|GMD|
|currency|GNF|
|currency|GTQ|
|currency|GYD|
|currency|HKD|
|currency|HNL|
|currency|HRK|
|currency|HTG|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|IQD|
|currency|IRR|
|currency|ISK|
|currency|JMD|
|currency|JOD|
|currency|JPY|
|currency|KES|
|currency|KGS|
|currency|KHR|
|currency|KMF|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KYD|
|currency|KZT|
|currency|LAK|
|currency|LBP|
|currency|LKR|
|currency|LRD|
|currency|LSL|
|currency|LTL|
|currency|LVL|
|currency|LYD|
|currency|MAD|
|currency|MDL|
|currency|MGA|
|currency|MKD|
|currency|MMK|
|currency|MNT|
|currency|MOP|
|currency|MRO|
|currency|MUR|
|currency|MVR|
|currency|MWK|
|currency|MXN|
|currency|MXV|
|currency|MYR|
|currency|MZN|
|currency|NAD|
|currency|NGN|
|currency|NIO|
|currency|NOK|
|currency|NPR|
|currency|NZD|
|currency|OMR|
|currency|PAB|
|currency|PEN|
|currency|PGK|
|currency|PHP|
|currency|PKR|
|currency|PLN|
|currency|PYG|
|currency|QAR|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|RWF|
|currency|SAR|
|currency|SBD|
|currency|SCR|
|currency|SDG|
|currency|SEK|
|currency|SGD|
|currency|SHP|
|currency|SLL|
|currency|SOS|
|currency|SRD|
|currency|SSP|
|currency|STD|
|currency|SVC|
|currency|SYP|
|currency|SZL|
|currency|THB|
|currency|TJS|
|currency|TMT|
|currency|TND|
|currency|TOP|
|currency|TRC|
|currency|TRY|
|currency|TTD|
|currency|TWD|
|currency|TZS|
|currency|UAH|
|currency|UGX|
|currency|USD|
|currency|USN|
|currency|USS|
|currency|UYI|
|currency|UYU|
|currency|UZS|
|currency|VEF|
|currency|VND|
|currency|VUV|
|currency|WST|
|currency|XAF|
|currency|XAG|
|currency|XAU|
|currency|XBA|
|currency|XBB|
|currency|XBC|
|currency|XBD|
|currency|XCD|
|currency|XDR|
|currency|XOF|
|currency|XPD|
|currency|XPF|
|currency|XPT|
|currency|XTS|
|currency|XXX|
|currency|YER|
|currency|ZAR|
|currency|ZMK|
|currency|ZMW|
|currency|BTC|
|currency|ETH|
|fulfillment_status|pending|
|fulfillment_status|shipped|
|fulfillment_status|partial|
|fulfillment_status|delivered|
|fulfillment_status|cancelled|
|fulfillment_status|returned|
|fulfillment_status|unknown|
|payment_status|pending|
|payment_status|authorized|
|payment_status|paid|
|payment_status|partial|
|payment_status|refunded|
|payment_status|voided|
|payment_status|unknown|
|status|active|
|status|completed|
|status|cancelled|
|status|archived|
|status|unknown|

<h2 id="tocS_EcommerceOrderLineItem">EcommerceOrderLineItem</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceorderlineitem"></a>
<a id="schema_EcommerceOrderLineItem"></a>
<a id="tocSecommerceorderlineitem"></a>
<a id="tocsecommerceorderlineitem"></a>

```json
{
  "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
  "discounts": [
    {
      "amount": "5.99",
      "code": "SUMMER20",
      "percentage": "0.1"
    }
  ],
  "id": "12345",
  "name": "Midnight 16inch MacBook Pro",
  "options": [
    {
      "id": "jkl012",
      "name": "Color",
      "value": "Silver"
    }
  ],
  "product_id": "def456",
  "quantity": "2",
  "sku": "MBP123-16GB-SILVER-13",
  "tax_amount": "1.6",
  "tax_rate": "0.08",
  "total_amount": "43.18",
  "unit_price": "19.99",
  "variant_id": "ghi789"
}
```

A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the product or variant associated with the line item.|
|discounts|[[EcommerceDiscount](#schemaecommercediscount)]|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|name|string|true|none|The name of the product or variant associated with the line item.|
|options|[object]|false|none|none|
|product_id|string|false|none|A unique identifier for the product associated with the line item.|
|quantity|string|true|none|The quantity of the product or variant associated with the line item.|
|sku|string|false|none|The SKU of the product or variant associated with the line item.|
|tax_amount|string|false|none|The total tax amount applied to the product or variant associated with the line item.|
|tax_rate|string|false|none|The tax rate applied to the product or variant associated with the line item.|
|total_amount|string|true|none|The total amount for the product(s) or variant associated with the line item, including taxes and discounts.|
|unit_price|string|false|none|The unit price of the product or variant associated with the line item.|
|variant_id|string|false|none|A unique identifier for the variant of the product associated with the line item, if applicable.|

<h2 id="tocS_EcommerceOrderStatus">EcommerceOrderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceorderstatus"></a>
<a id="schema_EcommerceOrderStatus"></a>
<a id="tocSecommerceorderstatus"></a>
<a id="tocsecommerceorderstatus"></a>

```json
"active"
```

Current status of the order.

<h2 id="tocS_EcommerceOrdersFilter">EcommerceOrdersFilter</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceordersfilter"></a>
<a id="schema_EcommerceOrdersFilter"></a>
<a id="tocSecommerceordersfilter"></a>
<a id="tocsecommerceordersfilter"></a>

```json
{
  "email": "elon@musk.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Customer email address to filter on|

<h2 id="tocS_EcommerceProduct">EcommerceProduct</h2>
<!-- backwards compatibility -->
<a id="schemaecommerceproduct"></a>
<a id="schema_EcommerceProduct"></a>
<a id="tocSecommerceproduct"></a>
<a id="tocsecommerceproduct"></a>

```json
{
  "categories": [
    {
      "id": "12345",
      "name": "Laptops"
    }
  ],
  "created_at": "2020-09-30T07:43:32.000Z",
  "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
  "id": "12345",
  "images": [
    {
      "id": "12345",
      "url": "https://example.com/macbook-pro.jpg"
    }
  ],
  "inventory_quantity": "10",
  "name": "MacBook Pro",
  "options": [
    {
      "id": "1",
      "name": "Color",
      "values": [
        "Red"
      ]
    }
  ],
  "price": "1999.99",
  "sku": "MBP123",
  "status": "active",
  "tags": [
    "Apple"
  ],
  "updated_at": "2020-09-30T07:43:32.000Z",
  "variants": [
    {
      "id": "1",
      "images": [
        {
          "id": "12345",
          "url": "https://example.com/macbook-pro.jpg"
        }
      ],
      "inventory_quantity": "5",
      "name": "Midnight 16inch MacBook Pro",
      "options": [
        {
          "id": "1",
          "name": "Color",
          "value": "Silver"
        }
      ],
      "price": "1999.99",
      "sku": "MBP123-16GB-SILVER-13",
      "weight": "1.25",
      "weight_unit": "lb"
    }
  ],
  "weight": "1.25",
  "weight_unit": "lb"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[object]|false|none|An array of categories for the product, used for organization and searching.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|description|string|false|none|A detailed description of the product.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|images|[object]|false|none|An array of image URLs for the product.|
|inventory_quantity|string|false|none|The quantity of the product in stock.|
|name|string|false|none|The name of the product as it should be displayed to customers.|
|options|[object]|false|none|An array of options for the product.|
|price|string|false|none|The price of the product.|
|sku|string|false|none|The stock keeping unit of the product.|
|status|string|false|none|The current status of the product (active or archived).|
|tags|[string]|false|none|An array of tags for the product, used for organization and searching.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|variants|[object]|false|none|none|
|weight|string|false|none|The weight of the product.|
|weight_unit|string|false|none|The unit of measurement for the weight of the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|archived|

<h2 id="tocS_EcommerceStore">EcommerceStore</h2>
<!-- backwards compatibility -->
<a id="schemaecommercestore"></a>
<a id="schema_EcommerceStore"></a>
<a id="tocSecommercestore"></a>
<a id="tocsecommercestore"></a>

```json
{
  "admin_url": "https://mybrand.com/admin",
  "created_at": "2020-09-30T07:43:32.000Z",
  "id": "12345",
  "name": "My Store",
  "store_url": "https://mybrand.com/shop",
  "updated_at": "2020-09-30T07:43:32.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_url|string(uri)|false|none|The store's admin login URL|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|name|string|false|none|The store's name|
|store_url|string(uri)|false|none|The store's website URL|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "email": "elon@musk.com",
  "id": "123",
  "type": "primary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|primary|
|type|secondary|
|type|work|
|type|personal|
|type|billing|
|type|other|

<h2 id="tocS_FirstName">FirstName</h2>
<!-- backwards compatibility -->
<a id="schemafirstname"></a>
<a id="schema_FirstName"></a>
<a id="tocSfirstname"></a>
<a id="tocsfirstname"></a>

```json
"Elon"
```

The first name of the person.

<h2 id="tocS_Gender">Gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_Gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```json
"male"
```

The gender represents the gender identity of a person.

<h2 id="tocS_GetEcommerceCustomerResponse">GetEcommerceCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecommercecustomerresponse"></a>
<a id="schema_GetEcommerceCustomerResponse"></a>
<a id="tocSgetecommercecustomerresponse"></a>
<a id="tocsgetecommercecustomerresponse"></a>

```json
{
  "data": {
    "addresses": [
      {
        "city": "Anytown",
        "country": "US",
        "id": "12345",
        "line1": "Main street",
        "line2": "apt #",
        "postal_code": "12345",
        "state": "Ohio",
        "type": "billing"
      }
    ],
    "company_name": "Acme Inc.",
    "created_at": "2020-09-30T07:43:32.000Z",
    "currency": "USD",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "John",
    "id": "12345",
    "last_name": "Doe",
    "name": "John Doe",
    "orders": [
      {
        "id": "12345",
        "status": "active",
        "total": "199.99"
      }
    ],
    "phone_numbers": [
      {
        "area_code": "323",
        "country_code": "1",
        "extension": "105",
        "id": "12345",
        "number": "111-111-1111",
        "type": "primary"
      }
    ],
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "customers",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EcommerceCustomer](#schemaecommercecustomer)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEcommerceCustomersResponse">GetEcommerceCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecommercecustomersresponse"></a>
<a id="schema_GetEcommerceCustomersResponse"></a>
<a id="tocSgetecommercecustomersresponse"></a>
<a id="tocsgetecommercecustomersresponse"></a>

```json
{
  "data": [
    {
      "addresses": [
        {
          "city": "Anytown",
          "country": "US",
          "id": "12345",
          "line1": "Main street",
          "line2": "apt #",
          "postal_code": "12345",
          "state": "Ohio",
          "type": "billing"
        }
      ],
      "company_name": "Acme Inc.",
      "created_at": "2020-09-30T07:43:32.000Z",
      "currency": "USD",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "John",
      "id": "12345",
      "last_name": "Doe",
      "name": "John Doe",
      "orders": [
        {
          "id": "12345",
          "status": "active",
          "total": "199.99"
        }
      ],
      "phone_numbers": [
        {
          "area_code": "323",
          "country_code": "1",
          "extension": "105",
          "id": "12345",
          "number": "111-111-1111",
          "type": "primary"
        }
      ],
      "status": "active",
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
  "operation": "all",
  "resource": "customers",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EcommerceCustomer](#schemaecommercecustomer)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEcommerceOrderResponse">GetEcommerceOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecommerceorderresponse"></a>
<a id="schema_GetEcommerceOrderResponse"></a>
<a id="tocSgetecommerceorderresponse"></a>
<a id="tocsgetecommerceorderresponse"></a>

```json
{
  "data": {
    "billing_address": {
      "city": "New York",
      "company_name": "Acme Inc.",
      "country": "US",
      "line1": "123 Main Street",
      "line2": "Apt 1",
      "postal_code": "10001",
      "state": "NY"
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "currency": "USD",
    "customer": {
      "company_name": "Acme Inc.",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "John",
      "id": "12345",
      "last_name": "Doe",
      "name": "John Doe",
      "phone_numbers": [
        {
          "area_code": "323",
          "country_code": "1",
          "extension": "105",
          "id": "12345",
          "number": "111-111-1111",
          "type": "primary"
        }
      ]
    },
    "discounts": [
      {
        "amount": "5.99",
        "code": "SUMMER20",
        "percentage": "0.1"
      }
    ],
    "fulfillment_status": "shipped",
    "id": "12345",
    "line_items": [
      {
        "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
        "discounts": [
          {
            "amount": "5.99",
            "code": "SUMMER20",
            "percentage": "0.1"
          }
        ],
        "id": "12345",
        "name": "Midnight 16inch MacBook Pro",
        "options": [
          {
            "id": "jkl012",
            "name": "Color",
            "value": "Silver"
          }
        ],
        "product_id": "def456",
        "quantity": "2",
        "sku": "MBP123-16GB-SILVER-13",
        "tax_amount": "1.6",
        "tax_rate": "0.08",
        "total_amount": "43.18",
        "unit_price": "19.99",
        "variant_id": "ghi789"
      }
    ],
    "note": "Special instructions for delivery",
    "order_number": "123456789",
    "payment_method": "credit_card",
    "payment_status": "paid",
    "shipping_address": {
      "city": "New York",
      "company_name": "Acme Inc.",
      "country": "US",
      "line1": "123 Main Street",
      "line2": "Apt 1",
      "postal_code": "10001",
      "state": "NY"
    },
    "shipping_cost": "5.17",
    "status": "active",
    "sub_total": "45.17",
    "total_amount": "50.17",
    "total_discount": "5.5",
    "total_tax": "5.16",
    "tracking": [
      {
        "number": "1Z9999999999999999",
        "provider": "UPS",
        "updated_at": "2020-09-30T07:43:32.000Z",
        "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
      }
    ],
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "orders",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EcommerceOrder](#schemaecommerceorder)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEcommerceOrdersResponse">GetEcommerceOrdersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecommerceordersresponse"></a>
<a id="schema_GetEcommerceOrdersResponse"></a>
<a id="tocSgetecommerceordersresponse"></a>
<a id="tocsgetecommerceordersresponse"></a>

```json
{
  "data": [
    {
      "billing_address": {
        "city": "New York",
        "company_name": "Acme Inc.",
        "country": "US",
        "line1": "123 Main Street",
        "line2": "Apt 1",
        "postal_code": "10001",
        "state": "NY"
      },
      "created_at": "2020-09-30T07:43:32.000Z",
      "currency": "USD",
      "customer": {
        "company_name": "Acme Inc.",
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "John",
        "id": "12345",
        "last_name": "Doe",
        "name": "John Doe",
        "phone_numbers": [
          {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        ]
      },
      "discounts": [
        {
          "amount": "5.99",
          "code": "SUMMER20",
          "percentage": "0.1"
        }
      ],
      "fulfillment_status": "shipped",
      "id": "12345",
      "line_items": [
        {
          "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
          "discounts": [
            {
              "amount": "5.99",
              "code": "SUMMER20",
              "percentage": "0.1"
            }
          ],
          "id": "12345",
          "name": "Midnight 16inch MacBook Pro",
          "options": [
            {
              "id": "jkl012",
              "name": "Color",
              "value": "Silver"
            }
          ],
          "product_id": "def456",
          "quantity": "2",
          "sku": "MBP123-16GB-SILVER-13",
          "tax_amount": "1.6",
          "tax_rate": "0.08",
          "total_amount": "43.18",
          "unit_price": "19.99",
          "variant_id": "ghi789"
        }
      ],
      "note": "Special instructions for delivery",
      "order_number": "123456789",
      "payment_method": "credit_card",
      "payment_status": "paid",
      "shipping_address": {
        "city": "New York",
        "company_name": "Acme Inc.",
        "country": "US",
        "line1": "123 Main Street",
        "line2": "Apt 1",
        "postal_code": "10001",
        "state": "NY"
      },
      "shipping_cost": "5.17",
      "status": "active",
      "sub_total": "45.17",
      "total_amount": "50.17",
      "total_discount": "5.5",
      "total_tax": "5.16",
      "tracking": [
        {
          "number": "1Z9999999999999999",
          "provider": "UPS",
          "updated_at": "2020-09-30T07:43:32.000Z",
          "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
        }
      ],
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
  "operation": "all",
  "resource": "orders",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EcommerceOrder](#schemaecommerceorder)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetProductResponse">GetProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproductresponse"></a>
<a id="schema_GetProductResponse"></a>
<a id="tocSgetproductresponse"></a>
<a id="tocsgetproductresponse"></a>

```json
{
  "data": {
    "categories": [
      {
        "id": "12345",
        "name": "Laptops"
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
    "id": "12345",
    "images": [
      {
        "id": "12345",
        "url": "https://example.com/macbook-pro.jpg"
      }
    ],
    "inventory_quantity": "10",
    "name": "MacBook Pro",
    "options": [
      {
        "id": "1",
        "name": "Color",
        "values": [
          "Red"
        ]
      }
    ],
    "price": "1999.99",
    "sku": "MBP123",
    "status": "active",
    "tags": [
      "Apple"
    ],
    "updated_at": "2020-09-30T07:43:32.000Z",
    "variants": [
      {
        "id": "1",
        "images": [
          {
            "id": "12345",
            "url": "https://example.com/macbook-pro.jpg"
          }
        ],
        "inventory_quantity": "5",
        "name": "Midnight 16inch MacBook Pro",
        "options": [
          {
            "id": "1",
            "name": "Color",
            "value": "Silver"
          }
        ],
        "price": "1999.99",
        "sku": "MBP123-16GB-SILVER-13",
        "weight": "1.25",
        "weight_unit": "lb"
      }
    ],
    "weight": "1.25",
    "weight_unit": "lb"
  },
  "operation": "one",
  "resource": "products",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EcommerceProduct](#schemaecommerceproduct)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetProductsResponse">GetProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproductsresponse"></a>
<a id="schema_GetProductsResponse"></a>
<a id="tocSgetproductsresponse"></a>
<a id="tocsgetproductsresponse"></a>

```json
{
  "data": [
    {
      "categories": [
        {
          "id": "12345",
          "name": "Laptops"
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "description": "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
      "id": "12345",
      "images": [
        {
          "id": "12345",
          "url": "https://example.com/macbook-pro.jpg"
        }
      ],
      "inventory_quantity": "10",
      "name": "MacBook Pro",
      "options": [
        {
          "id": "1",
          "name": "Color",
          "values": [
            "Red"
          ]
        }
      ],
      "price": "1999.99",
      "sku": "MBP123",
      "status": "active",
      "tags": [
        "Apple"
      ],
      "updated_at": "2020-09-30T07:43:32.000Z",
      "variants": [
        {
          "id": "1",
          "images": [
            {
              "id": "12345",
              "url": "https://example.com/macbook-pro.jpg"
            }
          ],
          "inventory_quantity": "5",
          "name": "Midnight 16inch MacBook Pro",
          "options": [
            {
              "id": "1",
              "name": "Color",
              "value": "Silver"
            }
          ],
          "price": "1999.99",
          "sku": "MBP123-16GB-SILVER-13",
          "weight": "1.25",
          "weight_unit": "lb"
        }
      ],
      "weight": "1.25",
      "weight_unit": "lb"
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
  "operation": "all",
  "resource": "products",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EcommerceProduct](#schemaecommerceproduct)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetStoreResponse">GetStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstoreresponse"></a>
<a id="schema_GetStoreResponse"></a>
<a id="tocSgetstoreresponse"></a>
<a id="tocsgetstoreresponse"></a>

```json
{
  "data": {
    "admin_url": "https://mybrand.com/admin",
    "created_at": "2020-09-30T07:43:32.000Z",
    "id": "12345",
    "name": "My Store",
    "store_url": "https://mybrand.com/shop",
    "updated_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "stores",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EcommerceStore](#schemaecommercestore)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetStoresResponse">GetStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstoresresponse"></a>
<a id="schema_GetStoresResponse"></a>
<a id="tocSgetstoresresponse"></a>
<a id="tocsgetstoresresponse"></a>

```json
{
  "data": [
    {
      "admin_url": "https://mybrand.com/admin",
      "created_at": "2020-09-30T07:43:32.000Z",
      "id": "12345",
      "name": "My Store",
      "store_url": "https://mybrand.com/shop",
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
  "operation": "all",
  "resource": "stores",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EcommerceStore](#schemaecommercestore)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
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

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"EN"
```

language code according to ISO 639-1. For the United States - EN

<h2 id="tocS_LastName">LastName</h2>
<!-- backwards compatibility -->
<a id="schemalastname"></a>
<a id="schema_LastName"></a>
<a id="tocSlastname"></a>
<a id="tocslastname"></a>

```json
"Musk"
```

The last name of the person.

<h2 id="tocS_LinkedEcommerceCustomer">LinkedEcommerceCustomer</h2>
<!-- backwards compatibility -->
<a id="schemalinkedecommercecustomer"></a>
<a id="schema_LinkedEcommerceCustomer"></a>
<a id="tocSlinkedecommercecustomer"></a>
<a id="tocslinkedecommercecustomer"></a>

```json
{
  "company_name": "Acme Inc.",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "John",
  "id": "12345",
  "last_name": "Doe",
  "name": "John Doe",
  "phone_numbers": [
    {
      "area_code": "323",
      "country_code": "1",
      "extension": "105",
      "id": "12345",
      "number": "111-111-1111",
      "type": "primary"
    }
  ]
}
```

The customer this entity is linked to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|Company name of the customer|
|emails|[[Email](#schemaemail)]|false|none|none|
|first_name|string|false|none|First name of the customer|
|id|string|true|none|The ID of the customer this entity is linked to.|
|last_name|string|false|none|Last name of the customer|
|name|string|false|none|Full name of the customer|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|

<h2 id="tocS_LinkedEcommerceOrder">LinkedEcommerceOrder</h2>
<!-- backwards compatibility -->
<a id="schemalinkedecommerceorder"></a>
<a id="schema_LinkedEcommerceOrder"></a>
<a id="tocSlinkedecommerceorder"></a>
<a id="tocslinkedecommerceorder"></a>

```json
{
  "id": "12345",
  "status": "active",
  "total": "199.99"
}
```

The order this entity is linked to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|status|[EcommerceOrderStatus](#schemaecommerceorderstatus)|false|none|Current status of the order.|
|total|string|false|none|The total amount of the order.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|completed|
|status|cancelled|
|status|archived|
|status|unknown|

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

<h2 id="tocS_MiddleName">MiddleName</h2>
<!-- backwards compatibility -->
<a id="schemamiddlename"></a>
<a id="schema_MiddleName"></a>
<a id="tocSmiddlename"></a>
<a id="tocsmiddlename"></a>

```json
"D."
```

Middle name of the person.

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

<h2 id="tocS_PaymentUnit">PaymentUnit</h2>
<!-- backwards compatibility -->
<a id="schemapaymentunit"></a>
<a id="schema_PaymentUnit"></a>
<a id="tocSpaymentunit"></a>
<a id="tocspaymentunit"></a>

```json
"year"
```

Unit of measurement for employee compensation.

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "area_code": "323",
  "country_code": "1",
  "extension": "105",
  "id": "12345",
  "number": "111-111-1111",
  "type": "primary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area_code|string \| null|false|none|none|
|country_code|string \| null|false|none|none|
|extension|string \| null|false|none|none|
|id|string \| null|false|none|none|
|number|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|primary|
|type|secondary|
|type|home|
|type|work|
|type|office|
|type|mobile|
|type|assistant|
|type|fax|
|type|direct-dial-in|
|type|personal|
|type|other|

<h2 id="tocS_PhotoUrl">PhotoUrl</h2>
<!-- backwards compatibility -->
<a id="schemaphotourl"></a>
<a id="schema_PhotoUrl"></a>
<a id="tocSphotourl"></a>
<a id="tocsphotourl"></a>

```json
"https://unavatar.io/elon-musk"
```

The URL of the photo of a person.

<h2 id="tocS_RowVersion">RowVersion</h2>
<!-- backwards compatibility -->
<a id="schemarowversion"></a>
<a id="schema_RowVersion"></a>
<a id="tocSrowversion"></a>
<a id="tocsrowversion"></a>

```json
"1-12345"
```

A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
"CEO"
```

The job title of the person.

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

<h2 id="tocS_TrackingItem">TrackingItem</h2>
<!-- backwards compatibility -->
<a id="schematrackingitem"></a>
<a id="schema_TrackingItem"></a>
<a id="tocStrackingitem"></a>
<a id="tocstrackingitem"></a>

```json
{
  "number": "1Z9999999999999999",
  "provider": "UPS",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "url": "https://www.ups.com/track?tracknum=1Z9999999999999999"
}
```

Represents the tracking information associated with an ecommerce order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string \| null|true|none| The tracking number associated with the shipment, which can be used to track the progress of the delivery.|
|provider|string \| null|true|none|The name or code of the carrier or shipping company that is handling the shipment.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|url|string \| null|false|none|The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress.|

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

<h2 id="tocS_UnifiedId">UnifiedId</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedid"></a>
<a id="schema_UnifiedId"></a>
<a id="tocSunifiedid"></a>
<a id="tocsunifiedid"></a>

```json
{
  "id": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|read-only|The unique identifier of the resource|

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

<h2 id="tocS_UpdateEcommerceCustomerResponse">UpdateEcommerceCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateecommercecustomerresponse"></a>
<a id="schema_UpdateEcommerceCustomerResponse"></a>
<a id="tocSupdateecommercecustomerresponse"></a>
<a id="tocsupdateecommercecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "customers",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_UpdateEcommerceOrderResponse">UpdateEcommerceOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateecommerceorderresponse"></a>
<a id="schema_UpdateEcommerceOrderResponse"></a>
<a id="tocSupdateecommerceorderresponse"></a>
<a id="tocsupdateecommerceorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "orders",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_UpdateProductResponse">UpdateProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproductresponse"></a>
<a id="schema_UpdateProductResponse"></a>
<a id="tocSupdateproductresponse"></a>
<a id="tocsupdateproductresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "products",
  "service": "shopify",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UnifiedId](#schemaunifiedid)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
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

<h2 id="tocS_UpdatedBy">UpdatedBy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedby"></a>
<a id="schema_UpdatedBy"></a>
<a id="tocSupdatedby"></a>
<a id="tocsupdatedby"></a>

```json
"12345"
```

The user who last updated the object.

<h2 id="tocS_Website">Website</h2>
<!-- backwards compatibility -->
<a id="schemawebsite"></a>
<a id="schema_Website"></a>
<a id="tocSwebsite"></a>
<a id="tocswebsite"></a>

```json
{
  "id": "12345",
  "type": "primary",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|type|string|false|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|primary|
|type|secondary|
|type|work|
|type|personal|
|type|other|
