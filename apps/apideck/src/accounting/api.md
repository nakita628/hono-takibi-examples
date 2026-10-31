<h1 id="accounting-api">Accounting API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Accounting API.

You can use this API to access all Accounting API endpoints.

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

<h1 id="accounting-api-bills">Bills</h1>

## List Bills

<a id="opIdbillsAll"></a>

> Code samples

```bash
curl https://example.com/accounting/bills \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/bills`

List Bills

<h3 id="list-bills-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|sort|query|[BillsSort](#schemabillssort)|false|Apply sorting|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "balance": 27500,
      "bill_date": "2020-09-30",
      "bill_number": "10001",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "deposit": 0,
      "downstream_id": "12345",
      "due_date": "2020-10-30",
      "id": "12345",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "expense_account",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "notes": "Some notes about this bill.",
      "paid_date": "2020-10-30",
      "po_number": "90000117",
      "reference": "123456",
      "row_version": "1-12345",
      "status": "draft",
      "sub_total": 27500,
      "supplier": {
        "address": {
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
        },
        "company_name": "The boring company",
        "display_name": "Windsurf Shop",
        "id": "12345"
      },
      "tax_code": "1234",
      "tax_inclusive": true,
      "terms": "Net 30 days",
      "total": 27500,
      "total_tax": 2500,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "bills",
  "service": "xero",
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

<h3 id="list-bills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bills|[GetBillsResponse](#schemagetbillsresponse)|
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

## Create Bill

<a id="opIdbillsAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/bills \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "balance": 27500,
    "bill_date": "2020-09-30",
    "bill_number": "10001",
    "currency": "USD",
    "currency_rate": 0.69,
    "deposit": 0,
    "due_date": "2020-10-30",
    "ledger_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "expense_account",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "notes": "Some notes about this bill.",
    "paid_date": "2020-10-30",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "status": "draft",
    "sub_total": 27500,
    "supplier": {
      "address": {
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
      },
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500
  }'
```

`POST /accounting/bills`

Create Bill

> Body parameter

```json
{
  "balance": 27500,
  "bill_date": "2020-09-30",
  "bill_number": "10001",
  "currency": "USD",
  "currency_rate": 0.69,
  "deposit": 0,
  "due_date": "2020-10-30",
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "expense_account",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "notes": "Some notes about this bill.",
  "paid_date": "2020-10-30",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "status": "draft",
  "sub_total": 27500,
  "supplier": {
    "address": {
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
    },
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500
}
```

<h3 id="create-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Bill](#schemabill)|true|none|
|» balance|body|number \| null|false|Balance of bill due.|
|» bill_date|body|string(date)|false|Date bill was issued - YYYY-MM-DD.|
|» bill_number|body|string \| null|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» deposit|body|number \| null|false|Amount of deposit made to this bill.|
|» due_date|body|string(date)|false|The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.|
|» ledger_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» line_items|body|[[BillLineItem](#schemabilllineitem)]|false|none|
|» notes|body|string \| null|false|none|
|» paid_date|body|string(date) \| null|false|The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.|
|» po_number|body|string \| null|false|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|» reference|body|string \| null|false|Optional bill reference.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Invoice status|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» supplier|body|[LinkedSupplier](#schemalinkedsupplier)|false|The supplier this entity is linked to.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» terms|body|string \| null|false|Terms of payment.|
|» total|body|number \| null|false|Total amount of bill, including tax.|
|» total_tax|body|number \| null|false|Total tax amount applied to this bill.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|submitted|
|» status|authorised|
|» status|partially_paid|
|» status|paid|
|» status|void|
|» status|credit|
|» status|deleted|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "bills",
  "service": "xero",
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

<h3 id="create-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Bill created|[CreateBillResponse](#schemacreatebillresponse)|
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

## Get Bill

<a id="opIdbillsOne"></a>

> Code samples

```bash
curl https://example.com/accounting/bills/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/bills/{id}`

Get Bill

<h3 id="get-bill-parameters">Parameters</h3>

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
    "balance": 27500,
    "bill_date": "2020-09-30",
    "bill_number": "10001",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "deposit": 0,
    "downstream_id": "12345",
    "due_date": "2020-10-30",
    "id": "12345",
    "ledger_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "expense_account",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "notes": "Some notes about this bill.",
    "paid_date": "2020-10-30",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "status": "draft",
    "sub_total": 27500,
    "supplier": {
      "address": {
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
      },
      "company_name": "The boring company",
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "bills",
  "service": "xero",
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

<h3 id="get-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bill|[GetBillResponse](#schemagetbillresponse)|
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

## Delete Bill

<a id="opIdbillsDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/bills/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/bills/{id}`

Delete Bill

<h3 id="delete-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "bills",
  "service": "xero",
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

<h3 id="delete-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bill deleted|[DeleteBillResponse](#schemadeletebillresponse)|
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

## Update Bill

<a id="opIdbillsUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/bills/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "balance": 27500,
    "bill_date": "2020-09-30",
    "bill_number": "10001",
    "currency": "USD",
    "currency_rate": 0.69,
    "deposit": 0,
    "due_date": "2020-10-30",
    "ledger_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "expense_account",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "notes": "Some notes about this bill.",
    "paid_date": "2020-10-30",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "status": "draft",
    "sub_total": 27500,
    "supplier": {
      "address": {
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
      },
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500
  }'
```

`PATCH /accounting/bills/{id}`

Update Bill

> Body parameter

```json
{
  "balance": 27500,
  "bill_date": "2020-09-30",
  "bill_number": "10001",
  "currency": "USD",
  "currency_rate": 0.69,
  "deposit": 0,
  "due_date": "2020-10-30",
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "expense_account",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "notes": "Some notes about this bill.",
  "paid_date": "2020-10-30",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "status": "draft",
  "sub_total": 27500,
  "supplier": {
    "address": {
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
    },
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500
}
```

<h3 id="update-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Bill](#schemabill)|true|none|
|» balance|body|number \| null|false|Balance of bill due.|
|» bill_date|body|string(date)|false|Date bill was issued - YYYY-MM-DD.|
|» bill_number|body|string \| null|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» deposit|body|number \| null|false|Amount of deposit made to this bill.|
|» due_date|body|string(date)|false|The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.|
|» ledger_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» line_items|body|[[BillLineItem](#schemabilllineitem)]|false|none|
|» notes|body|string \| null|false|none|
|» paid_date|body|string(date) \| null|false|The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.|
|» po_number|body|string \| null|false|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|» reference|body|string \| null|false|Optional bill reference.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Invoice status|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» supplier|body|[LinkedSupplier](#schemalinkedsupplier)|false|The supplier this entity is linked to.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» terms|body|string \| null|false|Terms of payment.|
|» total|body|number \| null|false|Total amount of bill, including tax.|
|» total_tax|body|number \| null|false|Total tax amount applied to this bill.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|submitted|
|» status|authorised|
|» status|partially_paid|
|» status|paid|
|» status|void|
|» status|credit|
|» status|deleted|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "bills",
  "service": "xero",
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

<h3 id="update-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bill Updated|[UpdateBillResponse](#schemaupdatebillresponse)|
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

<h1 id="accounting-api-company-info">Company Info</h1>

## Get company info

<a id="opIdcompanyInfoOne"></a>

> Code samples

```bash
curl https://example.com/accounting/company-info \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/company-info`

Get company info

<h3 id="get-company-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "addresses": [
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
    ],
    "automated_sales_tax": true,
    "company_name": "SpaceX",
    "company_start_date": "2015-06-05",
    "country": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "default_sales_tax": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "fiscal_year_start_month": "January",
    "id": "12345",
    "language": "EN",
    "legal_name": "SpaceX Inc.",
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
    "row_version": "1-12345",
    "sales_tax_enabled": true,
    "sales_tax_number": "111.222.333",
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "company-info",
  "service": "xero",
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

<h3 id="get-company-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CompanyInfo|[GetCompanyInfoResponse](#schemagetcompanyinforesponse)|
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

<h1 id="accounting-api-credit-notes">Credit Notes</h1>

## List Credit Notes

<a id="opIdcreditNotesAll"></a>

> Code samples

```bash
curl https://example.com/accounting/credit-notes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/credit-notes`

List Credit Notes

<h3 id="list-credit-notes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "allocations": [
        {
          "amount": 49.99,
          "code": "N091",
          "id": "123456",
          "type": "invoice"
        }
      ],
      "balance": 27500,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "date_issued": "2021-05-01T12:00:00.000Z",
      "date_paid": "2021-05-01T12:00:00.000Z",
      "id": "123456",
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_amount": 19.99,
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "sales_item",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "note": "Some notes about this credit note",
      "number": "OIT00546",
      "reference": "123456",
      "remaining_credit": 27500,
      "row_version": "1-12345",
      "status": "authorised",
      "sub_total": 27500,
      "tax_code": "1234",
      "tax_inclusive": true,
      "terms": "Some terms about this credit note",
      "total_amount": 49.99,
      "total_tax": 2500,
      "type": "accounts_receivable_credit",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "credit-notes",
  "service": "xero",
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

<h3 id="list-credit-notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit Notes|[GetCreditNotesResponse](#schemagetcreditnotesresponse)|
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

## Create Credit Note

<a id="opIdcreditNotesAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/credit-notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "allocations": [
      {
        "amount": 49.99,
        "id": "123456",
        "type": "invoice"
      }
    ],
    "balance": 27500,
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "date_issued": "2021-05-01T12:00:00.000Z",
    "date_paid": "2021-05-01T12:00:00.000Z",
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "note": "Some notes about this credit note",
    "number": "OIT00546",
    "reference": "123456",
    "remaining_credit": 27500,
    "row_version": "1-12345",
    "status": "authorised",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Some terms about this credit note",
    "total_amount": 49.99,
    "total_tax": 2500,
    "type": "accounts_receivable_credit"
  }'
```

`POST /accounting/credit-notes`

Create Credit Note

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "allocations": [
    {
      "amount": 49.99,
      "id": "123456",
      "type": "invoice"
    }
  ],
  "balance": 27500,
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "date_issued": "2021-05-01T12:00:00.000Z",
  "date_paid": "2021-05-01T12:00:00.000Z",
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "note": "Some notes about this credit note",
  "number": "OIT00546",
  "reference": "123456",
  "remaining_credit": 27500,
  "row_version": "1-12345",
  "status": "authorised",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Some terms about this credit note",
  "total_amount": 49.99,
  "total_tax": 2500,
  "type": "accounts_receivable_credit"
}
```

<h3 id="create-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[CreditNote](#schemacreditnote)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» allocations|body|[object]|false|none|
|» » amount|body|number \| null|false|Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.|
|» » id|body|string|false|Unique identifier of entity this payment should be attributed to.|
|» » type|body|string|false|Type of entity this payment should be attributed to.|
|» balance|body|number \| null|false|The balance reflecting any payments made against the transaction.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» date_issued|body|string(date-time)|false|Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD|
|» date_paid|body|string(date-time) \| null|false|Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD|
|» line_items|body|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|
|» note|body|string \| null|false|Optional note to be associated with the credit note.|
|» number|body|string \| null|false|Credit note number.|
|» reference|body|string \| null|false|Optional reference message ie: Debit remittance detail.|
|» remaining_credit|body|number \| null|false|Indicates the total credit amount still available to apply towards the payment.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string|false|Status of credit notes|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» terms|body|string \| null|false|Optional terms to be associated with the credit note.|
|» total_amount|body|number|true|Amount of transaction|
|» total_tax|body|number \| null|false|Total tax amount applied to this invoice.|
|» type|body|string|false|Type of payment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|invoice|
|» » type|order|
|» » type|expense|
|» » type|credit_memo|
|» » type|over_payment|
|» » type|pre_payment|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|authorised|
|» status|paid|
|» status|voided|
|» status|deleted|
|» type|accounts_receivable_credit|
|» type|accounts_payable_credit|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "credit-notes",
  "service": "xero",
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

<h3 id="create-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Credit Note created|[CreateCreditNoteResponse](#schemacreatecreditnoteresponse)|
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

## Get Credit Note

<a id="opIdcreditNotesOne"></a>

> Code samples

```bash
curl https://example.com/accounting/credit-notes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/credit-notes/{id}`

Get Credit Note

<h3 id="get-credit-note-parameters">Parameters</h3>

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
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "allocations": [
      {
        "amount": 49.99,
        "code": "N091",
        "id": "123456",
        "type": "invoice"
      }
    ],
    "balance": 27500,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "date_issued": "2021-05-01T12:00:00.000Z",
    "date_paid": "2021-05-01T12:00:00.000Z",
    "id": "123456",
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "note": "Some notes about this credit note",
    "number": "OIT00546",
    "reference": "123456",
    "remaining_credit": 27500,
    "row_version": "1-12345",
    "status": "authorised",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Some terms about this credit note",
    "total_amount": 49.99,
    "total_tax": 2500,
    "type": "accounts_receivable_credit",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "credit-notes",
  "service": "xero",
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

<h3 id="get-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit Note|[GetCreditNoteResponse](#schemagetcreditnoteresponse)|
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

## Delete Credit Note

<a id="opIdcreditNotesDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/credit-notes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/credit-notes/{id}`

Delete Credit Note

<h3 id="delete-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "credit-notes",
  "service": "xero",
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

<h3 id="delete-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit Note deleted|[DeleteCreditNoteResponse](#schemadeletecreditnoteresponse)|
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

## Update Credit Note

<a id="opIdcreditNotesUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/credit-notes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "allocations": [
      {
        "amount": 49.99,
        "id": "123456",
        "type": "invoice"
      }
    ],
    "balance": 27500,
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "date_issued": "2021-05-01T12:00:00.000Z",
    "date_paid": "2021-05-01T12:00:00.000Z",
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "note": "Some notes about this credit note",
    "number": "OIT00546",
    "reference": "123456",
    "remaining_credit": 27500,
    "row_version": "1-12345",
    "status": "authorised",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Some terms about this credit note",
    "total_amount": 49.99,
    "total_tax": 2500,
    "type": "accounts_receivable_credit"
  }'
```

`PATCH /accounting/credit-notes/{id}`

Update Credit Note

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "allocations": [
    {
      "amount": 49.99,
      "id": "123456",
      "type": "invoice"
    }
  ],
  "balance": 27500,
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "date_issued": "2021-05-01T12:00:00.000Z",
  "date_paid": "2021-05-01T12:00:00.000Z",
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "note": "Some notes about this credit note",
  "number": "OIT00546",
  "reference": "123456",
  "remaining_credit": 27500,
  "row_version": "1-12345",
  "status": "authorised",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Some terms about this credit note",
  "total_amount": 49.99,
  "total_tax": 2500,
  "type": "accounts_receivable_credit"
}
```

<h3 id="update-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[CreditNote](#schemacreditnote)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» allocations|body|[object]|false|none|
|» » amount|body|number \| null|false|Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.|
|» » id|body|string|false|Unique identifier of entity this payment should be attributed to.|
|» » type|body|string|false|Type of entity this payment should be attributed to.|
|» balance|body|number \| null|false|The balance reflecting any payments made against the transaction.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» date_issued|body|string(date-time)|false|Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD|
|» date_paid|body|string(date-time) \| null|false|Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD|
|» line_items|body|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|
|» note|body|string \| null|false|Optional note to be associated with the credit note.|
|» number|body|string \| null|false|Credit note number.|
|» reference|body|string \| null|false|Optional reference message ie: Debit remittance detail.|
|» remaining_credit|body|number \| null|false|Indicates the total credit amount still available to apply towards the payment.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string|false|Status of credit notes|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» terms|body|string \| null|false|Optional terms to be associated with the credit note.|
|» total_amount|body|number|true|Amount of transaction|
|» total_tax|body|number \| null|false|Total tax amount applied to this invoice.|
|» type|body|string|false|Type of payment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|invoice|
|» » type|order|
|» » type|expense|
|» » type|credit_memo|
|» » type|over_payment|
|» » type|pre_payment|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|authorised|
|» status|paid|
|» status|voided|
|» status|deleted|
|» type|accounts_receivable_credit|
|» type|accounts_payable_credit|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "credit-notes",
  "service": "xero",
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

<h3 id="update-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit Note updated|[UpdateCreditNoteResponse](#schemaupdatecreditnoteresponse)|
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

<h1 id="accounting-api-customers">Customers</h1>

## List Customers

<a id="opIdcustomersAll"></a>

> Code samples

```bash
curl https://example.com/accounting/customers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/customers`

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
|filter|query|[CustomersFilter](#schemacustomersfilter)|false|Apply filters|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "addresses": [
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
      ],
      "bank_accounts": [
        {
          "account_name": "SPACEX LLC",
          "account_number": "123465",
          "account_type": "credit_card",
          "bank_code": "BNH",
          "bic": "AUDSCHGGXXX",
          "branch_identifier": "001",
          "bsb_number": "062-001",
          "currency": "USD",
          "iban": "CH2989144532982975332"
        }
      ],
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "display_id": "EMP00101",
      "display_name": "Windsurf Shop",
      "downstream_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "individual": true,
      "last_name": "Musk",
      "middle_name": "D.",
      "notes": "Some notes about this customer",
      "parent": {
        "id": "12345",
        "name": "Windsurf Shop"
      },
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
      "project": false,
      "row_version": "1-12345",
      "status": "active",
      "suffix": "Jr.",
      "tax_number": "US123945459",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "websites": [
        {
          "id": "12345",
          "type": "primary",
          "url": "http://example.com"
        }
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
  "operation": "all",
  "resource": "customers",
  "service": "xero",
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
|200|OK|Customers|[GetCustomersResponse](#schemagetcustomersresponse)|
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

## Create Customer

<a id="opIdcustomersAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this customer",
    "parent": {
      "id": "12345",
      "name": "Windsurf Shop"
    },
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
    "project": false,
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "id": "123456"
    },
    "title": "CEO",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`POST /accounting/customers`

Create Customer

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this customer",
  "parent": {
    "id": "12345",
    "name": "Windsurf Shop"
  },
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
  "project": false,
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "id": "123456"
  },
  "title": "CEO",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="create-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[AccountingCustomer](#schemaaccountingcustomer)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[[BankAccount](#schemabankaccount)]|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» display_id|body|string \| null|false|Display ID|
|» display_name|body|string \| null|false|Display name|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|Is this an individual or business customer|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» notes|body|string \| null|false|Some notes about this customer|
|» parent|body|[LinkedParentCustomer](#schemalinkedparentcustomer)|false|The parent customer this entity is linked to.|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» project|body|boolean \| null|false|If true, indicates this is a Project.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Customer status|
|» suffix|body|[Suffix](#schemasuffix)|false|none|
|» tax_number|body|[TaxNumber](#schemataxnumber)|false|none|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» status|gdpr-erasure-request|
|» status|unknown|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "customers",
  "service": "xero",
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

<h3 id="create-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Customers|[CreateCustomerResponse](#schemacreatecustomerresponse)|
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
curl https://example.com/accounting/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/customers/{id}`

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
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "downstream_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "id": "12345",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this customer",
    "parent": {
      "id": "12345",
      "name": "Windsurf Shop"
    },
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
    "project": false,
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  },
  "operation": "one",
  "resource": "customers",
  "service": "xero",
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
|200|OK|Customer|[GetCustomerResponse](#schemagetcustomerresponse)|
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

## Delete Customer

<a id="opIdcustomersDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/customers/{id}`

Delete Customer

<h3 id="delete-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "customers",
  "service": "xero",
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

<h3 id="delete-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Customers|[DeleteCustomerResponse](#schemadeletecustomerresponse)|
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

## Update Customer

<a id="opIdcustomersUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this customer",
    "parent": {
      "id": "12345",
      "name": "Windsurf Shop"
    },
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
    "project": false,
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "id": "123456"
    },
    "title": "CEO",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`PATCH /accounting/customers/{id}`

Update Customer

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this customer",
  "parent": {
    "id": "12345",
    "name": "Windsurf Shop"
  },
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
  "project": false,
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "id": "123456"
  },
  "title": "CEO",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="update-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[AccountingCustomer](#schemaaccountingcustomer)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[[BankAccount](#schemabankaccount)]|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» display_id|body|string \| null|false|Display ID|
|» display_name|body|string \| null|false|Display name|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|Is this an individual or business customer|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» notes|body|string \| null|false|Some notes about this customer|
|» parent|body|[LinkedParentCustomer](#schemalinkedparentcustomer)|false|The parent customer this entity is linked to.|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» project|body|boolean \| null|false|If true, indicates this is a Project.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Customer status|
|» suffix|body|[Suffix](#schemasuffix)|false|none|
|» tax_number|body|[TaxNumber](#schemataxnumber)|false|none|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» status|gdpr-erasure-request|
|» status|unknown|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "customers",
  "service": "xero",
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

<h3 id="update-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Customers|[UpdateCustomerResponse](#schemaupdatecustomerresponse)|
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

<h1 id="accounting-api-invoices">Invoices</h1>

## List Invoices

<a id="opIdinvoicesAll"></a>

> Code samples

```bash
curl https://example.com/accounting/invoices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/invoices`

List Invoices

<h3 id="list-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|sort|query|[InvoicesSort](#schemainvoicessort)|false|Apply sorting|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "balance": 27500,
      "billing_address": {
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
      },
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "customer_memo": "Thank you for your business and have a great day!",
      "deposit": 0,
      "discount_amount": 25,
      "discount_percentage": 5.5,
      "downstream_id": "12345",
      "due_date": "2020-09-30",
      "id": "12345",
      "invoice_date": "2020-09-30",
      "invoice_sent": true,
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_amount": 19.99,
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "sales_item",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "number": "OIT00546",
      "po_number": "90000117",
      "reference": "123456",
      "row_version": "1-12345",
      "shipping_address": {
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
      },
      "source_document_url": "https://www.invoicesolution.com/invoice/123456",
      "status": "draft",
      "sub_total": 27500,
      "tax_code": "1234",
      "tax_inclusive": true,
      "template_id": "123456",
      "terms": "Net 30 days",
      "total": 27500,
      "total_tax": 2500,
      "type": "service",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "invoices",
  "service": "xero",
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

<h3 id="list-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoices|[GetInvoicesResponse](#schemagetinvoicesresponse)|
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

## Create Invoice

<a id="opIdinvoicesAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "balance": 27500,
    "billing_address": {
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
    },
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "customer_memo": "Thank you for your business and have a great day!",
    "deposit": 0,
    "discount_amount": 25,
    "discount_percentage": 5.5,
    "due_date": "2020-09-30",
    "invoice_date": "2020-09-30",
    "invoice_sent": true,
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "number": "OIT00546",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "shipping_address": {
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
    },
    "source_document_url": "https://www.invoicesolution.com/invoice/123456",
    "status": "draft",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "template_id": "123456",
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "type": "service"
  }'
```

`POST /accounting/invoices`

Create Invoice

> Body parameter

```json
{
  "balance": 27500,
  "billing_address": {
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
  },
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "customer_memo": "Thank you for your business and have a great day!",
  "deposit": 0,
  "discount_amount": 25,
  "discount_percentage": 5.5,
  "due_date": "2020-09-30",
  "invoice_date": "2020-09-30",
  "invoice_sent": true,
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "number": "OIT00546",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "shipping_address": {
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
  },
  "source_document_url": "https://www.invoicesolution.com/invoice/123456",
  "status": "draft",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "template_id": "123456",
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500,
  "type": "service"
}
```

<h3 id="create-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Invoice](#schemainvoice)|true|none|
|» balance|body|number \| null|false|Balance of invoice due.|
|» billing_address|body|[Address](#schemaaddress)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» customer_memo|body|string \| null|false|Customer memo|
|» deposit|body|number \| null|false|Amount of deposit made to this invoice.|
|» discount_amount|body|number \| null|false|Discount amount applied to this invoice.|
|» discount_percentage|body|number \| null|false|Discount percentage applied to this invoice.|
|» due_date|body|string(date) \| null|false|The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.|
|» invoice_date|body|string(date) \| null|false|Date invoice was issued - YYYY-MM-DD.|
|» invoice_sent|body|boolean|false|Invoice sent to contact/customer.|
|» line_items|body|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|
|» number|body|string \| null|false|Invoice number.|
|» po_number|body|string \| null|false|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|» reference|body|string \| null|false|Optional invoice reference.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» shipping_address|body|[Address](#schemaaddress)|false|none|
|» source_document_url|body|string \| null|false|URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.|
|» status|body|string \| null|false|Invoice status|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» template_id|body|string \| null|false|Optional invoice template|
|» terms|body|string \| null|false|Terms of payment.|
|» total|body|number \| null|false|Total amount of invoice, including tax.|
|» total_tax|body|number \| null|false|Total tax amount applied to this invoice.|
|» type|body|string \| null|false|Invoice type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|submitted|
|» status|authorised|
|» status|partially_paid|
|» status|paid|
|» status|void|
|» status|credit|
|» status|deleted|
|» type|standard|
|» type|credit|
|» type|service|
|» type|product|
|» type|supplier|
|» type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "add",
  "resource": "invoices",
  "service": "xero",
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

<h3 id="create-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Invoice created|[CreateInvoiceResponse](#schemacreateinvoiceresponse)|
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

## Get Invoice

<a id="opIdinvoicesOne"></a>

> Code samples

```bash
curl https://example.com/accounting/invoices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/invoices/{id}`

Get Invoice

<h3 id="get-invoice-parameters">Parameters</h3>

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
    "balance": 27500,
    "billing_address": {
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
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "customer_memo": "Thank you for your business and have a great day!",
    "deposit": 0,
    "discount_amount": 25,
    "discount_percentage": 5.5,
    "downstream_id": "12345",
    "due_date": "2020-09-30",
    "id": "12345",
    "invoice_date": "2020-09-30",
    "invoice_sent": true,
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "number": "OIT00546",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "shipping_address": {
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
    },
    "source_document_url": "https://www.invoicesolution.com/invoice/123456",
    "status": "draft",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "template_id": "123456",
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "type": "service",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "invoices",
  "service": "xero",
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

<h3 id="get-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice|[GetInvoiceResponse](#schemagetinvoiceresponse)|
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

## Delete Invoice

<a id="opIdinvoicesDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/invoices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/invoices/{id}`

Delete Invoice

<h3 id="delete-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "delete",
  "resource": "invoices",
  "service": "xero",
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

<h3 id="delete-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice deleted|[DeleteInvoiceResponse](#schemadeleteinvoiceresponse)|
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

## Update Invoice

<a id="opIdinvoicesUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/invoices/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "balance": 27500,
    "billing_address": {
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
    },
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "customer_memo": "Thank you for your business and have a great day!",
    "deposit": 0,
    "discount_amount": 25,
    "discount_percentage": 5.5,
    "due_date": "2020-09-30",
    "invoice_date": "2020-09-30",
    "invoice_sent": true,
    "line_items": [
      {
        "code": "120-C",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "item": {
          "id": "12344"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      }
    ],
    "number": "OIT00546",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "shipping_address": {
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
    },
    "source_document_url": "https://www.invoicesolution.com/invoice/123456",
    "status": "draft",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "template_id": "123456",
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "type": "service"
  }'
```

`PATCH /accounting/invoices/{id}`

Update Invoice

> Body parameter

```json
{
  "balance": 27500,
  "billing_address": {
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
  },
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "customer_memo": "Thank you for your business and have a great day!",
  "deposit": 0,
  "discount_amount": 25,
  "discount_percentage": 5.5,
  "due_date": "2020-09-30",
  "invoice_date": "2020-09-30",
  "invoice_sent": true,
  "line_items": [
    {
      "code": "120-C",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "item": {
        "id": "12344"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    }
  ],
  "number": "OIT00546",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "shipping_address": {
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
  },
  "source_document_url": "https://www.invoicesolution.com/invoice/123456",
  "status": "draft",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "template_id": "123456",
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500,
  "type": "service"
}
```

<h3 id="update-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Invoice](#schemainvoice)|true|none|
|» balance|body|number \| null|false|Balance of invoice due.|
|» billing_address|body|[Address](#schemaaddress)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» customer_memo|body|string \| null|false|Customer memo|
|» deposit|body|number \| null|false|Amount of deposit made to this invoice.|
|» discount_amount|body|number \| null|false|Discount amount applied to this invoice.|
|» discount_percentage|body|number \| null|false|Discount percentage applied to this invoice.|
|» due_date|body|string(date) \| null|false|The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.|
|» invoice_date|body|string(date) \| null|false|Date invoice was issued - YYYY-MM-DD.|
|» invoice_sent|body|boolean|false|Invoice sent to contact/customer.|
|» line_items|body|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|
|» number|body|string \| null|false|Invoice number.|
|» po_number|body|string \| null|false|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|» reference|body|string \| null|false|Optional invoice reference.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» shipping_address|body|[Address](#schemaaddress)|false|none|
|» source_document_url|body|string \| null|false|URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.|
|» status|body|string \| null|false|Invoice status|
|» sub_total|body|number \| null|false|Sub-total amount, normally before tax.|
|» tax_code|body|string \| null|false|Applicable tax id/code override if tax is not supplied on a line item basis.|
|» tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» template_id|body|string \| null|false|Optional invoice template|
|» terms|body|string \| null|false|Terms of payment.|
|» total|body|number \| null|false|Total amount of invoice, including tax.|
|» total_tax|body|number \| null|false|Total tax amount applied to this invoice.|
|» type|body|string \| null|false|Invoice type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|draft|
|» status|submitted|
|» status|authorised|
|» status|partially_paid|
|» status|paid|
|» status|void|
|» status|credit|
|» status|deleted|
|» type|standard|
|» type|credit|
|» type|service|
|» type|product|
|» type|supplier|
|» type|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "update",
  "resource": "invoices",
  "service": "xero",
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

<h3 id="update-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice updated|[UpdateInvoiceResponse](#schemaupdateinvoiceresponse)|
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

<h1 id="accounting-api-invoice-items">Invoice Items</h1>

Invoice items are stored from invoice lines to be used later on when creating new invoices.

## List Invoice Items

<a id="opIdinvoiceItemsAll"></a>

> Code samples

```bash
curl https://example.com/accounting/invoice-items \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/invoice-items`

List Invoice Items

<h3 id="list-invoice-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[InvoiceItemsFilter](#schemainvoiceitemsfilter)|false|Apply filters|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "active": true,
      "asset_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "code": "120-C",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "expense_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "id": "123456",
      "income_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "inventory_date": "2020-10-30",
      "name": "Model Y",
      "purchase_details": {
        "tax_inclusive": true,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      },
      "purchased": true,
      "quantity": 1,
      "row_version": "1-12345",
      "sales_details": {
        "tax_inclusive": true,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      },
      "sold": true,
      "taxable": true,
      "tracked": true,
      "type": "inventory",
      "unit_price": 27500.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "invoice-items",
  "service": "xero",
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

<h3 id="list-invoice-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|InvoiceItems|[GetInvoiceItemsResponse](#schemagetinvoiceitemsresponse)|
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

## Create Invoice Item

<a id="opIdinvoiceItemsAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/invoice-items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "asset_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "code": "120-C",
    "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    "expense_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "income_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "inventory_date": "2020-10-30",
    "name": "Model Y",
    "purchase_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "id": "123456"
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "purchased": true,
    "quantity": 1,
    "row_version": "1-12345",
    "sales_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "id": "123456"
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "sold": true,
    "taxable": true,
    "tracked": true,
    "type": "inventory",
    "unit_price": 27500.5
  }'
```

`POST /accounting/invoice-items`

Create Invoice Item

> Body parameter

```json
{
  "active": true,
  "asset_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "code": "120-C",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "expense_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "income_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "inventory_date": "2020-10-30",
  "name": "Model Y",
  "purchase_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "id": "123456"
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "purchased": true,
  "quantity": 1,
  "row_version": "1-12345",
  "sales_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "id": "123456"
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "sold": true,
  "taxable": true,
  "tracked": true,
  "type": "inventory",
  "unit_price": 27500.5
}
```

<h3 id="create-invoice-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[InvoiceItem](#schemainvoiceitem)|true|none|
|» active|body|[Active](#schemaactive)|false|none|
|» asset_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» code|body|string \| null|false|User defined item code|
|» description|body|string \| null|false|A short description of the item|
|» expense_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» income_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» inventory_date|body|string(date) \| null|false|The date of opening balance if inventory item is tracked - YYYY-MM-DD.|
|» name|body|string \| null|false|Item name|
|» purchase_details|body|object|false|none|
|» » tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» » tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» » unit_of_measure|body|[UnitOfMeasure](#schemaunitofmeasure)|false|Description of the unit type the item is sold as, ie: kg, hour.|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» purchased|body|boolean \| null|false|Item is available for purchase transactions|
|» quantity|body|[Quantity](#schemaquantity)|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» sales_details|body|object|false|none|
|» » tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» » tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» » unit_of_measure|body|[UnitOfMeasure](#schemaunitofmeasure)|false|Description of the unit type the item is sold as, ie: kg, hour.|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» sold|body|boolean \| null|false|Item will be available on sales transactions|
|» taxable|body|boolean \| null|false|If true, transactions for this item are taxable|
|» tracked|body|boolean \| null|false|Item is inventoried|
|» type|body|string \| null|false|Item type|
|» unit_price|body|[UnitPrice](#schemaunitprice)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|inventory|
|» type|service|
|» type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "invoice-items",
  "service": "xero",
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

<h3 id="create-invoice-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|InvoiceItems|[CreateInvoiceItemResponse](#schemacreateinvoiceitemresponse)|
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

## Get Invoice Item

<a id="opIdinvoiceItemsOne"></a>

> Code samples

```bash
curl https://example.com/accounting/invoice-items/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/invoice-items/{id}`

Get Invoice Item

<h3 id="get-invoice-item-parameters">Parameters</h3>

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
    "active": true,
    "asset_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "code": "120-C",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    "expense_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "id": "123456",
    "income_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "inventory_date": "2020-10-30",
    "name": "Model Y",
    "purchase_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "purchased": true,
    "quantity": 1,
    "row_version": "1-12345",
    "sales_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "sold": true,
    "taxable": true,
    "tracked": true,
    "type": "inventory",
    "unit_price": 27500.5,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "invoice-items",
  "service": "xero",
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

<h3 id="get-invoice-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|InvoiceItems|[GetInvoiceItemResponse](#schemagetinvoiceitemresponse)|
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

## Delete Invoice Item

<a id="opIdinvoiceItemsDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/invoice-items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/invoice-items/{id}`

Delete Invoice Item

<h3 id="delete-invoice-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="delete-invoice-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|InvoiceItems|[DeleteTaxRateResponse](#schemadeletetaxrateresponse)|
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

## Update Invoice Item

<a id="opIdinvoiceItemsUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/invoice-items/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "asset_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "code": "120-C",
    "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    "expense_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "income_account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "inventory_date": "2020-10-30",
    "name": "Model Y",
    "purchase_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "id": "123456"
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "purchased": true,
    "quantity": 1,
    "row_version": "1-12345",
    "sales_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "id": "123456"
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "sold": true,
    "taxable": true,
    "tracked": true,
    "type": "inventory",
    "unit_price": 27500.5
  }'
```

`PATCH /accounting/invoice-items/{id}`

Update Invoice Item

> Body parameter

```json
{
  "active": true,
  "asset_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "code": "120-C",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "expense_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "income_account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "inventory_date": "2020-10-30",
  "name": "Model Y",
  "purchase_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "id": "123456"
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "purchased": true,
  "quantity": 1,
  "row_version": "1-12345",
  "sales_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "id": "123456"
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "sold": true,
  "taxable": true,
  "tracked": true,
  "type": "inventory",
  "unit_price": 27500.5
}
```

<h3 id="update-invoice-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[InvoiceItem](#schemainvoiceitem)|true|none|
|» active|body|[Active](#schemaactive)|false|none|
|» asset_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» code|body|string \| null|false|User defined item code|
|» description|body|string \| null|false|A short description of the item|
|» expense_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» income_account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» inventory_date|body|string(date) \| null|false|The date of opening balance if inventory item is tracked - YYYY-MM-DD.|
|» name|body|string \| null|false|Item name|
|» purchase_details|body|object|false|none|
|» » tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» » tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» » unit_of_measure|body|[UnitOfMeasure](#schemaunitofmeasure)|false|Description of the unit type the item is sold as, ie: kg, hour.|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» purchased|body|boolean \| null|false|Item is available for purchase transactions|
|» quantity|body|[Quantity](#schemaquantity)|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» sales_details|body|object|false|none|
|» » tax_inclusive|body|[TaxInclusive](#schemataxinclusive)|false|Amounts are including tax|
|» » tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» » unit_of_measure|body|[UnitOfMeasure](#schemaunitofmeasure)|false|Description of the unit type the item is sold as, ie: kg, hour.|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» sold|body|boolean \| null|false|Item will be available on sales transactions|
|» taxable|body|boolean \| null|false|If true, transactions for this item are taxable|
|» tracked|body|boolean \| null|false|Item is inventoried|
|» type|body|string \| null|false|Item type|
|» unit_price|body|[UnitPrice](#schemaunitprice)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|inventory|
|» type|service|
|» type|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "invoice-items",
  "service": "xero",
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

<h3 id="update-invoice-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|InvoiceItems|[UpdateInvoiceItemsResponse](#schemaupdateinvoiceitemsresponse)|
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

<h1 id="accounting-api-ledger-accounts">Ledger Accounts</h1>

## List Ledger Accounts

<a id="opIdledgerAccountsAll"></a>

> Code samples

```bash
curl https://example.com/accounting/ledger-accounts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/ledger-accounts`

List Ledger Accounts

<h3 id="list-ledger-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "active": true,
      "bank_account": {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      },
      "categories": [
        {
          "id": "12345",
          "name": "Finance Charges Expense"
        }
      ],
      "classification": "asset",
      "code": "453",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "current_balance": 20000,
      "description": "Main checking account",
      "display_id": "1-12345",
      "fully_qualified_name": "Asset.Bank.Checking_Account",
      "header": true,
      "id": "12345",
      "last_reconciliation_date": "2020-09-30",
      "level": 1,
      "name": "Bank account",
      "nominal_code": "N091",
      "opening_balance": 75000,
      "parent_account": {
        "display_id": "1-1100",
        "id": "12345",
        "name": "Bank Accounts"
      },
      "row_version": "1-12345",
      "status": "active",
      "sub_account": false,
      "sub_accounts": [
        {
          "account_sub_name": "Petty Cash",
          "id": "12345"
        }
      ],
      "sub_type": "CHECKING_ACCOUNT",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "tax_type": "NONE",
      "type": "bank",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "ledger-accounts",
  "service": "xero",
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

<h3 id="list-ledger-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LedgerAccounts|[GetLedgerAccountsResponse](#schemagetledgeraccountsresponse)|
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

## Create Ledger Account

<a id="opIdledgerAccountsAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/ledger-accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "bank_account": {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    },
    "classification": "asset",
    "code": "453",
    "currency": "USD",
    "current_balance": 20000,
    "description": "Main checking account",
    "display_id": "1-12345",
    "fully_qualified_name": "Asset.Bank.Checking_Account",
    "header": true,
    "last_reconciliation_date": "2020-09-30",
    "level": 1,
    "name": "Bank account",
    "nominal_code": "N091",
    "opening_balance": 75000,
    "parent_account": {
      "display_id": "1-1100",
      "id": "12345",
      "name": "Bank Accounts"
    },
    "row_version": "1-12345",
    "status": "active",
    "sub_account": false,
    "sub_type": "CHECKING_ACCOUNT",
    "tax_rate": {
      "id": "123456"
    },
    "tax_type": "NONE",
    "type": "bank"
  }'
```

`POST /accounting/ledger-accounts`

Create Ledger Account

> Body parameter

```json
{
  "active": true,
  "bank_account": {
    "account_name": "SPACEX LLC",
    "account_number": "123465",
    "account_type": "credit_card",
    "bank_code": "BNH",
    "bic": "AUDSCHGGXXX",
    "branch_identifier": "001",
    "bsb_number": "062-001",
    "currency": "USD",
    "iban": "CH2989144532982975332"
  },
  "classification": "asset",
  "code": "453",
  "currency": "USD",
  "current_balance": 20000,
  "description": "Main checking account",
  "display_id": "1-12345",
  "fully_qualified_name": "Asset.Bank.Checking_Account",
  "header": true,
  "last_reconciliation_date": "2020-09-30",
  "level": 1,
  "name": "Bank account",
  "nominal_code": "N091",
  "opening_balance": 75000,
  "parent_account": {
    "display_id": "1-1100",
    "id": "12345",
    "name": "Bank Accounts"
  },
  "row_version": "1-12345",
  "status": "active",
  "sub_account": false,
  "sub_type": "CHECKING_ACCOUNT",
  "tax_rate": {
    "id": "123456"
  },
  "tax_type": "NONE",
  "type": "bank"
}
```

<h3 id="create-ledger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[LedgerAccount](#schemaledgeraccount)|true|none|
|» active|body|boolean \| null|false|Whether the account is active or not.|
|» bank_account|body|[BankAccount](#schemabankaccount)|false|none|
|» classification|body|string \| null|false|The classification of account.|
|» code|body|string \| null|false|The code assigned to the account.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» current_balance|body|number \| null|false|The current balance of the account.|
|» description|body|string \| null|false|The description of the account.|
|» display_id|body|string|false|The human readable display ID used when displaying the account|
|» fully_qualified_name|body|string \| null|false|The fully qualified name of the account.|
|» header|body|boolean \| null|false|Whether the account is a header or not.|
|» last_reconciliation_date|body|string(date) \| null|false|Reconciliation Date means the last calendar day of each Reconciliation Period.|
|» level|body|number \| null|false|none|
|» name|body|string \| null|false|The name of the account.|
|» nominal_code|body|string \| null|false|**Deprecated.** The nominal code of the ledger account.|
|» opening_balance|body|number \| null|false|The opening balance of the account.|
|» parent_account|body|object|false|none|
|» » display_id|body|string|false|The human readable display ID used when displaying the parent account|
|» » id|body|string|false|The ID of the parent account.|
|» » name|body|string|false|The name of the parent account.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|The status of the account.|
|» sub_account|body|boolean \| null|false|Whether the account is a sub account or not.|
|» sub_type|body|string \| null|false|The sub type of account.|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» tax_type|body|string \| null|false|The tax type of the account.|
|» type|body|string|false|The type of account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» classification|asset|
|» classification|equity|
|» classification|expense|
|» classification|liability|
|» classification|revenue|
|» classification|income|
|» classification|other_income|
|» classification|other_expense|
|» classification|costs_of_sales|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» type|accounts_receivable|
|» type|revenue|
|» type|sales|
|» type|other_income|
|» type|bank|
|» type|current_asset|
|» type|fixed_asset|
|» type|non_current_asset|
|» type|other_asset|
|» type|balancesheet|
|» type|equity|
|» type|expense|
|» type|other_expense|
|» type|costs_of_sales|
|» type|accounts_payable|
|» type|credit_card|
|» type|current_liability|
|» type|non_current_liability|
|» type|other_liability|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h3 id="create-ledger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|LedgerAccount created|[CreateLedgerAccountResponse](#schemacreateledgeraccountresponse)|
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

## Get Ledger Account

<a id="opIdledgerAccountsOne"></a>

> Code samples

```bash
curl https://example.com/accounting/ledger-accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/ledger-accounts/{id}`

Get Ledger Account

<h3 id="get-ledger-account-parameters">Parameters</h3>

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
    "active": true,
    "bank_account": {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    },
    "categories": [
      {
        "id": "12345",
        "name": "Finance Charges Expense"
      }
    ],
    "classification": "asset",
    "code": "453",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "current_balance": 20000,
    "description": "Main checking account",
    "display_id": "1-12345",
    "fully_qualified_name": "Asset.Bank.Checking_Account",
    "header": true,
    "id": "12345",
    "last_reconciliation_date": "2020-09-30",
    "level": 1,
    "name": "Bank account",
    "nominal_code": "N091",
    "opening_balance": 75000,
    "parent_account": {
      "display_id": "1-1100",
      "id": "12345",
      "name": "Bank Accounts"
    },
    "row_version": "1-12345",
    "status": "active",
    "sub_account": false,
    "sub_accounts": [
      {
        "account_sub_name": "Petty Cash",
        "id": "12345"
      }
    ],
    "sub_type": "CHECKING_ACCOUNT",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "tax_type": "NONE",
    "type": "bank",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h3 id="get-ledger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LedgerAccount|[GetLedgerAccountResponse](#schemagetledgeraccountresponse)|
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

## Delete Ledger Account

<a id="opIdledgerAccountsDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/ledger-accounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/ledger-accounts/{id}`

Delete Ledger Account

<h3 id="delete-ledger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h3 id="delete-ledger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LedgerAccount deleted|[DeleteLedgerAccountResponse](#schemadeleteledgeraccountresponse)|
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

## Update Ledger Account

<a id="opIdledgerAccountsUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/ledger-accounts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "bank_account": {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    },
    "classification": "asset",
    "code": "453",
    "currency": "USD",
    "current_balance": 20000,
    "description": "Main checking account",
    "display_id": "1-12345",
    "fully_qualified_name": "Asset.Bank.Checking_Account",
    "header": true,
    "last_reconciliation_date": "2020-09-30",
    "level": 1,
    "name": "Bank account",
    "nominal_code": "N091",
    "opening_balance": 75000,
    "parent_account": {
      "display_id": "1-1100",
      "id": "12345",
      "name": "Bank Accounts"
    },
    "row_version": "1-12345",
    "status": "active",
    "sub_account": false,
    "sub_type": "CHECKING_ACCOUNT",
    "tax_rate": {
      "id": "123456"
    },
    "tax_type": "NONE",
    "type": "bank"
  }'
```

`PATCH /accounting/ledger-accounts/{id}`

Update Ledger Account

> Body parameter

```json
{
  "active": true,
  "bank_account": {
    "account_name": "SPACEX LLC",
    "account_number": "123465",
    "account_type": "credit_card",
    "bank_code": "BNH",
    "bic": "AUDSCHGGXXX",
    "branch_identifier": "001",
    "bsb_number": "062-001",
    "currency": "USD",
    "iban": "CH2989144532982975332"
  },
  "classification": "asset",
  "code": "453",
  "currency": "USD",
  "current_balance": 20000,
  "description": "Main checking account",
  "display_id": "1-12345",
  "fully_qualified_name": "Asset.Bank.Checking_Account",
  "header": true,
  "last_reconciliation_date": "2020-09-30",
  "level": 1,
  "name": "Bank account",
  "nominal_code": "N091",
  "opening_balance": 75000,
  "parent_account": {
    "display_id": "1-1100",
    "id": "12345",
    "name": "Bank Accounts"
  },
  "row_version": "1-12345",
  "status": "active",
  "sub_account": false,
  "sub_type": "CHECKING_ACCOUNT",
  "tax_rate": {
    "id": "123456"
  },
  "tax_type": "NONE",
  "type": "bank"
}
```

<h3 id="update-ledger-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[LedgerAccount](#schemaledgeraccount)|true|none|
|» active|body|boolean \| null|false|Whether the account is active or not.|
|» bank_account|body|[BankAccount](#schemabankaccount)|false|none|
|» classification|body|string \| null|false|The classification of account.|
|» code|body|string \| null|false|The code assigned to the account.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» current_balance|body|number \| null|false|The current balance of the account.|
|» description|body|string \| null|false|The description of the account.|
|» display_id|body|string|false|The human readable display ID used when displaying the account|
|» fully_qualified_name|body|string \| null|false|The fully qualified name of the account.|
|» header|body|boolean \| null|false|Whether the account is a header or not.|
|» last_reconciliation_date|body|string(date) \| null|false|Reconciliation Date means the last calendar day of each Reconciliation Period.|
|» level|body|number \| null|false|none|
|» name|body|string \| null|false|The name of the account.|
|» nominal_code|body|string \| null|false|**Deprecated.** The nominal code of the ledger account.|
|» opening_balance|body|number \| null|false|The opening balance of the account.|
|» parent_account|body|object|false|none|
|» » display_id|body|string|false|The human readable display ID used when displaying the parent account|
|» » id|body|string|false|The ID of the parent account.|
|» » name|body|string|false|The name of the parent account.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|The status of the account.|
|» sub_account|body|boolean \| null|false|Whether the account is a sub account or not.|
|» sub_type|body|string \| null|false|The sub type of account.|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» tax_type|body|string \| null|false|The tax type of the account.|
|» type|body|string|false|The type of account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» classification|asset|
|» classification|equity|
|» classification|expense|
|» classification|liability|
|» classification|revenue|
|» classification|income|
|» classification|other_income|
|» classification|other_expense|
|» classification|costs_of_sales|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» type|accounts_receivable|
|» type|revenue|
|» type|sales|
|» type|other_income|
|» type|bank|
|» type|current_asset|
|» type|fixed_asset|
|» type|non_current_asset|
|» type|other_asset|
|» type|balancesheet|
|» type|equity|
|» type|expense|
|» type|other_expense|
|» type|costs_of_sales|
|» type|accounts_payable|
|» type|credit_card|
|» type|current_liability|
|» type|non_current_liability|
|» type|other_liability|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h3 id="update-ledger-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LedgerAccount updated|[UpdateLedgerAccountResponse](#schemaupdateledgeraccountresponse)|
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

<h1 id="accounting-api-payments">Payments</h1>

## List Payments

<a id="opIdpaymentsAll"></a>

> Code samples

```bash
curl https://example.com/accounting/payments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/payments`

List Payments

<h3 id="list-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "accounts_receivable_account_id": "123456",
      "accounts_receivable_account_type": "Account",
      "allocations": [
        {
          "amount": 49.99,
          "code": "N091",
          "id": "123456",
          "type": "invoice"
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "display_id": "123456",
      "downstream_id": "12345",
      "id": "123456",
      "note": "Some notes about this payment",
      "payment_method": "Credit Card",
      "payment_method_id": "123456",
      "payment_method_reference": "123456",
      "reconciled": true,
      "reference": "123456",
      "row_version": "1-12345",
      "status": "authorised",
      "supplier": {
        "address": {
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
        },
        "company_name": "The boring company",
        "display_name": "Windsurf Shop",
        "id": "12345"
      },
      "total_amount": 49.99,
      "transaction_date": "2021-05-01T12:00:00.000Z",
      "type": "accounts_receivable",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "payments",
  "service": "xero",
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

<h3 id="list-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payments|[GetPaymentsResponse](#schemagetpaymentsresponse)|
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

## Create Payment

<a id="opIdpaymentsAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "accounts_receivable_account_id": "123456",
    "accounts_receivable_account_type": "Account",
    "allocations": [
      {
        "amount": 49.99,
        "id": "123456",
        "type": "invoice"
      }
    ],
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "display_id": "123456",
    "note": "Some notes about this payment",
    "payment_method": "Credit Card",
    "payment_method_id": "123456",
    "payment_method_reference": "123456",
    "reconciled": true,
    "reference": "123456",
    "row_version": "1-12345",
    "status": "authorised",
    "supplier": {
      "address": {
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
      },
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "total_amount": 49.99,
    "transaction_date": "2021-05-01T12:00:00.000Z",
    "type": "accounts_receivable"
  }'
```

`POST /accounting/payments`

Create Payment

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "accounts_receivable_account_id": "123456",
  "accounts_receivable_account_type": "Account",
  "allocations": [
    {
      "amount": 49.99,
      "id": "123456",
      "type": "invoice"
    }
  ],
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "display_id": "123456",
  "note": "Some notes about this payment",
  "payment_method": "Credit Card",
  "payment_method_id": "123456",
  "payment_method_reference": "123456",
  "reconciled": true,
  "reference": "123456",
  "row_version": "1-12345",
  "status": "authorised",
  "supplier": {
    "address": {
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
    },
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "total_amount": 49.99,
  "transaction_date": "2021-05-01T12:00:00.000Z",
  "type": "accounts_receivable"
}
```

<h3 id="create-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Payment](#schemapayment)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» accounts_receivable_account_id|body|string \| null|false|**Deprecated.** Unique identifier for the account to allocate payment to.|
|» accounts_receivable_account_type|body|string \| null|false|**Deprecated.** Type of accounts receivable account.|
|» allocations|body|[object]|false|none|
|» » amount|body|number \| null|false|Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.|
|» » id|body|string|false|Unique identifier of entity this payment should be attributed to.|
|» » type|body|string|false|Type of entity this payment should be attributed to.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» display_id|body|string \| null|false|Payment id to be displayed.|
|» note|body|string \| null|false|Optional note to be associated with the payment.|
|» payment_method|body|string \| null|false|Payment method name|
|» payment_method_id|body|string \| null|false|Unique identifier for the payment method.|
|» payment_method_reference|body|string \| null|false|Optional reference message returned by payment method on processing|
|» reconciled|body|boolean|false|Payment has been reconciled|
|» reference|body|string \| null|false|Optional payment reference message ie: Debit remittance detail.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string|false|Status of payment|
|» supplier|body|[LinkedSupplier](#schemalinkedsupplier)|false|The supplier this entity is linked to.|
|» total_amount|body|number|true|Amount of payment|
|» transaction_date|body|string(date-time)|true|Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD|
|» type|body|string|false|Type of payment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|invoice|
|» » type|order|
|» » type|expense|
|» » type|credit_memo|
|» » type|over_payment|
|» » type|pre_payment|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|authorised|
|» status|paid|
|» status|voided|
|» status|deleted|
|» type|accounts_receivable|
|» type|accounts_payable|
|» type|accounts_receivable_credit|
|» type|accounts_payable_credit|
|» type|accounts_receivable_overpayment|
|» type|accounts_payable_overpayment|
|» type|accounts_receivable_prepayment|
|» type|accounts_payable_prepayment|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "payments",
  "service": "xero",
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

<h3 id="create-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Payment created|[CreatePaymentResponse](#schemacreatepaymentresponse)|
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

## Get Payment

<a id="opIdpaymentsOne"></a>

> Code samples

```bash
curl https://example.com/accounting/payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/payments/{id}`

Get Payment

<h3 id="get-payment-parameters">Parameters</h3>

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
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "accounts_receivable_account_id": "123456",
    "accounts_receivable_account_type": "Account",
    "allocations": [
      {
        "amount": 49.99,
        "code": "N091",
        "id": "123456",
        "type": "invoice"
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "display_id": "123456",
    "downstream_id": "12345",
    "id": "123456",
    "note": "Some notes about this payment",
    "payment_method": "Credit Card",
    "payment_method_id": "123456",
    "payment_method_reference": "123456",
    "reconciled": true,
    "reference": "123456",
    "row_version": "1-12345",
    "status": "authorised",
    "supplier": {
      "address": {
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
      },
      "company_name": "The boring company",
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "total_amount": 49.99,
    "transaction_date": "2021-05-01T12:00:00.000Z",
    "type": "accounts_receivable",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "payments",
  "service": "xero",
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

<h3 id="get-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment|[GetPaymentResponse](#schemagetpaymentresponse)|
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

## Delete Payment

<a id="opIdpaymentsDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/payments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/payments/{id}`

Delete Payment

<h3 id="delete-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "payments",
  "service": "xero",
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

<h3 id="delete-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment deleted|[DeletePaymentResponse](#schemadeletepaymentresponse)|
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

## Update Payment

<a id="opIdpaymentsUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/payments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "accounts_receivable_account_id": "123456",
    "accounts_receivable_account_type": "Account",
    "allocations": [
      {
        "amount": 49.99,
        "id": "123456",
        "type": "invoice"
      }
    ],
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "display_id": "123456",
    "note": "Some notes about this payment",
    "payment_method": "Credit Card",
    "payment_method_id": "123456",
    "payment_method_reference": "123456",
    "reconciled": true,
    "reference": "123456",
    "row_version": "1-12345",
    "status": "authorised",
    "supplier": {
      "address": {
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
      },
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "total_amount": 49.99,
    "transaction_date": "2021-05-01T12:00:00.000Z",
    "type": "accounts_receivable"
  }'
```

`PATCH /accounting/payments/{id}`

Update Payment

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "accounts_receivable_account_id": "123456",
  "accounts_receivable_account_type": "Account",
  "allocations": [
    {
      "amount": 49.99,
      "id": "123456",
      "type": "invoice"
    }
  ],
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "display_id": "123456",
  "note": "Some notes about this payment",
  "payment_method": "Credit Card",
  "payment_method_id": "123456",
  "payment_method_reference": "123456",
  "reconciled": true,
  "reference": "123456",
  "row_version": "1-12345",
  "status": "authorised",
  "supplier": {
    "address": {
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
    },
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "total_amount": 49.99,
  "transaction_date": "2021-05-01T12:00:00.000Z",
  "type": "accounts_receivable"
}
```

<h3 id="update-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Payment](#schemapayment)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» accounts_receivable_account_id|body|string \| null|false|**Deprecated.** Unique identifier for the account to allocate payment to.|
|» accounts_receivable_account_type|body|string \| null|false|**Deprecated.** Type of accounts receivable account.|
|» allocations|body|[object]|false|none|
|» » amount|body|number \| null|false|Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.|
|» » id|body|string|false|Unique identifier of entity this payment should be attributed to.|
|» » type|body|string|false|Type of entity this payment should be attributed to.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» customer|body|[LinkedCustomer](#schemalinkedcustomer)|false|The customer this entity is linked to.|
|» display_id|body|string \| null|false|Payment id to be displayed.|
|» note|body|string \| null|false|Optional note to be associated with the payment.|
|» payment_method|body|string \| null|false|Payment method name|
|» payment_method_id|body|string \| null|false|Unique identifier for the payment method.|
|» payment_method_reference|body|string \| null|false|Optional reference message returned by payment method on processing|
|» reconciled|body|boolean|false|Payment has been reconciled|
|» reference|body|string \| null|false|Optional payment reference message ie: Debit remittance detail.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string|false|Status of payment|
|» supplier|body|[LinkedSupplier](#schemalinkedsupplier)|false|The supplier this entity is linked to.|
|» total_amount|body|number|true|Amount of payment|
|» transaction_date|body|string(date-time)|true|Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD|
|» type|body|string|false|Type of payment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|invoice|
|» » type|order|
|» » type|expense|
|» » type|credit_memo|
|» » type|over_payment|
|» » type|pre_payment|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|authorised|
|» status|paid|
|» status|voided|
|» status|deleted|
|» type|accounts_receivable|
|» type|accounts_payable|
|» type|accounts_receivable_credit|
|» type|accounts_payable_credit|
|» type|accounts_receivable_overpayment|
|» type|accounts_payable_overpayment|
|» type|accounts_receivable_prepayment|
|» type|accounts_payable_prepayment|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "payments",
  "service": "xero",
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

<h3 id="update-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Updated|[UpdatePaymentResponse](#schemaupdatepaymentresponse)|
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

<h1 id="accounting-api-suppliers">Suppliers</h1>

## List Suppliers

<a id="opIdsuppliersAll"></a>

> Code samples

```bash
curl https://example.com/accounting/suppliers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/suppliers`

List Suppliers

<h3 id="list-suppliers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[SuppliersFilter](#schemasuppliersfilter)|false|Apply filters|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "addresses": [
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
      ],
      "bank_accounts": [
        {
          "account_name": "SPACEX LLC",
          "account_number": "123465",
          "account_type": "credit_card",
          "bank_code": "BNH",
          "bic": "AUDSCHGGXXX",
          "branch_identifier": "001",
          "bsb_number": "062-001",
          "currency": "USD",
          "iban": "CH2989144532982975332"
        }
      ],
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "display_id": "EMP00101",
      "display_name": "Windsurf Shop",
      "downstream_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "individual": true,
      "last_name": "Musk",
      "middle_name": "D.",
      "notes": "Some notes about this supplier",
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
      "row_version": "1-12345",
      "status": "active",
      "suffix": "Jr.",
      "tax_number": "US123945459",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "websites": [
        {
          "id": "12345",
          "type": "primary",
          "url": "http://example.com"
        }
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
  "operation": "all",
  "resource": "suppliers",
  "service": "xero",
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

<h3 id="list-suppliers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suppliers|[GetSuppliersResponse](#schemagetsuppliersresponse)|
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

## Create Supplier

<a id="opIdsuppliersAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/suppliers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this supplier",
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
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "id": "123456"
    },
    "title": "CEO",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`POST /accounting/suppliers`

Create Supplier

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this supplier",
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
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "id": "123456"
  },
  "title": "CEO",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="create-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Supplier](#schemasupplier)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[[BankAccount](#schemabankaccount)]|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» display_id|body|string \| null|false|Display ID|
|» display_name|body|string \| null|false|Display name|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|Is this an individual or business supplier|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» notes|body|string \| null|false|Some notes about this supplier|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Supplier status|
|» suffix|body|[Suffix](#schemasuffix)|false|none|
|» tax_number|body|[TaxNumber](#schemataxnumber)|false|none|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» status|gdpr-erasure-request|
|» status|unknown|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "payments",
  "service": "xero",
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

<h3 id="create-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Supplier created|[CreateSupplierResponse](#schemacreatesupplierresponse)|
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

## Get Supplier

<a id="opIdsuppliersOne"></a>

> Code samples

```bash
curl https://example.com/accounting/suppliers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/suppliers/{id}`

Get Supplier

<h3 id="get-supplier-parameters">Parameters</h3>

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
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "downstream_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "id": "12345",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this supplier",
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
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  },
  "operation": "one",
  "resource": "suppliers",
  "service": "xero",
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

<h3 id="get-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supplier|[GetSupplierResponse](#schemagetsupplierresponse)|
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

## Delete Supplier

<a id="opIdsuppliersDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/suppliers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/suppliers/{id}`

Delete Supplier

<h3 id="delete-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "suppliers",
  "service": "xero",
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

<h3 id="delete-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supplier deleted|[DeleteSupplierResponse](#schemadeletesupplierresponse)|
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

## Update Supplier

<a id="opIdsuppliersUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/suppliers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "account": {
      "code": "453",
      "id": "123456",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this supplier",
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
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "id": "123456"
    },
    "title": "CEO",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`PATCH /accounting/suppliers/{id}`

Update Supplier

> Body parameter

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this supplier",
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
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "id": "123456"
  },
  "title": "CEO",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="update-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Supplier](#schemasupplier)|true|none|
|» account|body|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[[BankAccount](#schemabankaccount)]|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» display_id|body|string \| null|false|Display ID|
|» display_name|body|string \| null|false|Display name|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|Is this an individual or business supplier|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» notes|body|string \| null|false|Some notes about this supplier|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Supplier status|
|» suffix|body|[Suffix](#schemasuffix)|false|none|
|» tax_number|body|[TaxNumber](#schemataxnumber)|false|none|
|» tax_rate|body|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|
|» status|active|
|» status|inactive|
|» status|archived|
|» status|gdpr-erasure-request|
|» status|unknown|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "suppliers",
  "service": "xero",
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

<h3 id="update-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supplier updated|[UpdateSupplierResponse](#schemaupdatesupplierresponse)|
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

<h1 id="accounting-api-tax-rates">Tax Rates</h1>

## List Tax Rates

<a id="opIdtaxRatesAll"></a>

> Code samples

```bash
curl https://example.com/accounting/tax-rates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/tax-rates`

List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks


<h3 id="list-tax-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[TaxRatesFilter](#schemataxratesfilter)|false|Apply filters|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "ABN",
      "components": [
        {
          "compound": true,
          "id": "10",
          "name": "GST",
          "rate": 10
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Reduced rate GST Purchases",
      "effective_tax_rate": 10,
      "id": "1234",
      "name": "GST on Purchases",
      "original_tax_rate_id": "12345",
      "report_tax_type": "NONE",
      "row_version": "1-12345",
      "status": "active",
      "tax_payable_account_id": "123456",
      "tax_remitted_account_id": "123456",
      "total_tax_rate": 10,
      "type": "NONE",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="list-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TaxRates|[GetTaxRatesResponse](#schemagettaxratesresponse)|
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

## Create Tax Rate

<a id="opIdtaxRatesAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/tax-rates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "code": "ABN",
    "components": [
      {
        "compound": true,
        "id": "10",
        "name": "GST",
        "rate": 10
      }
    ],
    "description": "Reduced rate GST Purchases",
    "effective_tax_rate": 10,
    "id": "1234",
    "name": "GST on Purchases",
    "original_tax_rate_id": "12345",
    "report_tax_type": "NONE",
    "row_version": "1-12345",
    "status": "active",
    "tax_payable_account_id": "123456",
    "tax_remitted_account_id": "123456",
    "total_tax_rate": 10,
    "type": "NONE"
  }'
```

`POST /accounting/tax-rates`

Create Tax Rate

> Body parameter

```json
{
  "code": "ABN",
  "components": [
    {
      "compound": true,
      "id": "10",
      "name": "GST",
      "rate": 10
    }
  ],
  "description": "Reduced rate GST Purchases",
  "effective_tax_rate": 10,
  "id": "1234",
  "name": "GST on Purchases",
  "original_tax_rate_id": "12345",
  "report_tax_type": "NONE",
  "row_version": "1-12345",
  "status": "active",
  "tax_payable_account_id": "123456",
  "tax_remitted_account_id": "123456",
  "total_tax_rate": 10,
  "type": "NONE"
}
```

<h3 id="create-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[TaxRate](#schemataxrate)|true|none|
|» code|body|string \| null|false|Tax code assigned to identify this tax rate.|
|» components|body|[object]|false|none|
|» » compound|body|boolean \| null|false|none|
|» » id|body|string \| null|false|none|
|» » name|body|string|false|none|
|» » rate|body|number \| null|false|none|
|» description|body|string \| null|false|Description of tax rate|
|» effective_tax_rate|body|number \| null|false|Effective tax rate|
|» id|body|string \| null|false|ID assigned to identify this tax rate.|
|» name|body|string|false|Name assigned to identify this tax rate.|
|» original_tax_rate_id|body|string \| null|false|ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.|
|» report_tax_type|body|string \| null|false|Report Tax type to aggregate tax collected or paid for reporting purposes|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Tax rate status|
|» tax_payable_account_id|body|string \| null|false|Unique identifier for the account for tax collected.|
|» tax_remitted_account_id|body|string \| null|false|Unique identifier for the account for tax remitted.|
|» total_tax_rate|body|number \| null|false|Not compounded sum of the components of a tax rate|
|» type|body|string \| null|false|Tax type used to indicate the source of tax collected or paid|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» status|archived|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="create-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|TaxRate created|[CreateTaxRateResponse](#schemacreatetaxrateresponse)|
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

## Get Tax Rate

<a id="opIdtaxRatesOne"></a>

> Code samples

```bash
curl https://example.com/accounting/tax-rates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/tax-rates/{id}`

Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks


<h3 id="get-tax-rate-parameters">Parameters</h3>

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
    "code": "ABN",
    "components": [
      {
        "compound": true,
        "id": "10",
        "name": "GST",
        "rate": 10
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Reduced rate GST Purchases",
    "effective_tax_rate": 10,
    "id": "1234",
    "name": "GST on Purchases",
    "original_tax_rate_id": "12345",
    "report_tax_type": "NONE",
    "row_version": "1-12345",
    "status": "active",
    "tax_payable_account_id": "123456",
    "tax_remitted_account_id": "123456",
    "total_tax_rate": 10,
    "type": "NONE",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="get-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TaxRate|[GetTaxRateResponse](#schemagettaxrateresponse)|
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

## Delete Tax Rate

<a id="opIdtaxRatesDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/tax-rates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/tax-rates/{id}`

Delete Tax Rate

<h3 id="delete-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="delete-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TaxRates deleted|[DeleteTaxRateResponse](#schemadeletetaxrateresponse)|
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

## Update Tax Rate

<a id="opIdtaxRatesUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/tax-rates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "code": "ABN",
    "components": [
      {
        "compound": true,
        "id": "10",
        "name": "GST",
        "rate": 10
      }
    ],
    "description": "Reduced rate GST Purchases",
    "effective_tax_rate": 10,
    "id": "1234",
    "name": "GST on Purchases",
    "original_tax_rate_id": "12345",
    "report_tax_type": "NONE",
    "row_version": "1-12345",
    "status": "active",
    "tax_payable_account_id": "123456",
    "tax_remitted_account_id": "123456",
    "total_tax_rate": 10,
    "type": "NONE"
  }'
```

`PATCH /accounting/tax-rates/{id}`

Update Tax Rate

> Body parameter

```json
{
  "code": "ABN",
  "components": [
    {
      "compound": true,
      "id": "10",
      "name": "GST",
      "rate": 10
    }
  ],
  "description": "Reduced rate GST Purchases",
  "effective_tax_rate": 10,
  "id": "1234",
  "name": "GST on Purchases",
  "original_tax_rate_id": "12345",
  "report_tax_type": "NONE",
  "row_version": "1-12345",
  "status": "active",
  "tax_payable_account_id": "123456",
  "tax_remitted_account_id": "123456",
  "total_tax_rate": 10,
  "type": "NONE"
}
```

<h3 id="update-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[TaxRate](#schemataxrate)|true|none|
|» code|body|string \| null|false|Tax code assigned to identify this tax rate.|
|» components|body|[object]|false|none|
|» » compound|body|boolean \| null|false|none|
|» » id|body|string \| null|false|none|
|» » name|body|string|false|none|
|» » rate|body|number \| null|false|none|
|» description|body|string \| null|false|Description of tax rate|
|» effective_tax_rate|body|number \| null|false|Effective tax rate|
|» id|body|string \| null|false|ID assigned to identify this tax rate.|
|» name|body|string|false|Name assigned to identify this tax rate.|
|» original_tax_rate_id|body|string \| null|false|ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.|
|» report_tax_type|body|string \| null|false|Report Tax type to aggregate tax collected or paid for reporting purposes|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» status|body|string \| null|false|Tax rate status|
|» tax_payable_account_id|body|string \| null|false|Unique identifier for the account for tax collected.|
|» tax_remitted_account_id|body|string \| null|false|Unique identifier for the account for tax remitted.|
|» total_tax_rate|body|number \| null|false|Not compounded sum of the components of a tax rate|
|» type|body|string \| null|false|Tax type used to indicate the source of tax collected or paid|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» status|archived|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "tax-rates",
  "service": "xero",
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

<h3 id="update-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TaxRate updated|[UpdateTaxRateResponse](#schemaupdatetaxrateresponse)|
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

<h1 id="accounting-api-balance-sheet">Balance Sheet</h1>

## Get BalanceSheet

<a id="opIdbalanceSheetOne"></a>

> Code samples

```bash
curl https://example.com/accounting/balance-sheet \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/balance-sheet`

Get BalanceSheet

<h3 id="get-balancesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|filter|query|[BalanceSheetFilter](#schemabalancesheetfilter)|false|Apply filters|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "assets": {
      "current_assets": {
        "accounts": [
          {
            "id": "1",
            "name": "Accounts Receivable (A/R)",
            "value": 10000
          },
          {
            "id": "2",
            "name": "Accounts Payable (A/P)",
            "value": 10000
          }
        ],
        "total": 100000
      },
      "fixed_assets": {
        "accounts": [
          {
            "id": "1",
            "name": "Accounts Receivable (A/R)",
            "value": 10000
          },
          {
            "id": "2",
            "name": "Accounts Payable (A/P)",
            "value": 10000
          }
        ],
        "total": 100000
      },
      "total": 200000
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "end_date": "2017-01-01",
    "equity": {
      "items": [
        {
          "id": "1",
          "name": "Retained Earnings",
          "value": 10000
        }
      ],
      "total": 200000
    },
    "id": "12345",
    "liabilities": {
      "accounts": [
        {
          "id": "1",
          "name": "Accounts Payable (A/P)",
          "value": 10000
        }
      ],
      "total": 200000
    },
    "report_name": "BalanceSheet",
    "start_date": "2017-01-01",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "BalanceSheets",
  "service": "quickbooks",
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

<h3 id="get-balancesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|BalanceSheet|[GetBalanceSheetResponse](#schemagetbalancesheetresponse)|
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

<h1 id="accounting-api-profit-and-loss">Profit and Loss</h1>

## Get Profit and Loss

<a id="opIdprofitAndLossOne"></a>

> Code samples

```bash
curl https://example.com/accounting/profit-and-loss \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/profit-and-loss`

Get Profit and Loss

<h3 id="get-profit-and-loss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|filter|query|[ProfitAndLossFilter](#schemaprofitandlossfilter)|false|Apply filters|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": "USD",
    "customer_id": "123",
    "end_date": "2017-01-01",
    "expenses": {
      "records": [
        {
          "amount": 10000,
          "id": "123",
          "name": "Expense 1"
        },
        {
          "amount": 20000,
          "id": "456",
          "name": "Expense 2"
        }
      ],
      "total": 200000
    },
    "gross_profit": {
      "total": 200000
    },
    "id": "12345",
    "income": {
      "records": [
        {
          "amount": 10000,
          "id": "123",
          "name": "Income 1"
        },
        {
          "amount": 20000,
          "id": "456",
          "name": "Income 2"
        }
      ],
      "total": 200000
    },
    "net_income": {
      "total": 200000
    },
    "net_operating_income": {
      "total": 200000
    },
    "report_name": "ProfitAndLoss",
    "start_date": "2017-01-01"
  },
  "operation": "one",
  "resource": "ProfitAndLosses",
  "service": "quickbooks",
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

<h3 id="get-profit-and-loss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Profit & Loss Report|[GetProfitAndLossResponse](#schemagetprofitandlossresponse)|
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

<h1 id="accounting-api-journal-entries">Journal Entries</h1>

## List Journal Entries

<a id="opIdjournalEntriesAll"></a>

> Code samples

```bash
curl https://example.com/accounting/journal-entries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/journal-entries`

List Journal Entries

<h3 id="list-journal-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|pass_through|query|[PassThroughQuery](#schemapassthroughquery)|false|Optional unmapped key/values that will be passed through to downstream as query parameters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "id": "12345",
      "journal_symbol": "IND",
      "line_items": [
        {
          "department_id": "12345",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "id": "12345",
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "location_id": "12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "tracking_category": {
            "id": "123456",
            "name": "New York"
          },
          "type": "debit"
        },
        {
          "department_id": "12345",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "id": "12345",
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "location_id": "12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "tracking_category": {
            "id": "123456",
            "name": "New York"
          },
          "type": "debit"
        }
      ],
      "memo": "Thank you for your business and have a great day!",
      "posted_at": "2020-09-30T07:43:32.000Z",
      "row_version": "1-12345",
      "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h3 id="list-journal-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JournalEntry|[GetJournalEntriesResponse](#schemagetjournalentriesresponse)|
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

## Create Journal Entry

<a id="opIdjournalEntriesAdd"></a>

> Code samples

```bash
curl https://example.com/accounting/journal-entries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "currency": "USD",
    "currency_rate": 0.69,
    "journal_symbol": "IND",
    "line_items": [
      {
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      },
      {
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      }
    ],
    "memo": "Thank you for your business and have a great day!",
    "posted_at": "2020-09-30T07:43:32.000Z",
    "row_version": "1-12345",
    "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"
  }'
```

`POST /accounting/journal-entries`

Create Journal Entry

> Body parameter

```json
{
  "currency": "USD",
  "currency_rate": 0.69,
  "journal_symbol": "IND",
  "line_items": [
    {
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    },
    {
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    }
  ],
  "memo": "Thank you for your business and have a great day!",
  "posted_at": "2020-09-30T07:43:32.000Z",
  "row_version": "1-12345",
  "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"
}
```

<h3 id="create-journal-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[JournalEntry](#schemajournalentry)|true|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» journal_symbol|body|string \| null|false|Journal symbol of the entry. For example IND for indirect costs|
|» line_items|body|[[JournalEntryLineItem](#schemajournalentrylineitem)]|false|Requires a minimum of 2 line items that sum to 0|
|» memo|body|string \| null|false|Reference for the journal entry.|
|» posted_at|body|string(date-time)|false|This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» title|body|string \| null|false|Journal entry title|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h3 id="create-journal-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|JournalEntries|[CreateJournalEntryResponse](#schemacreatejournalentryresponse)|
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

## Get Journal Entry

<a id="opIdjournalEntriesOne"></a>

> Code samples

```bash
curl https://example.com/accounting/journal-entries/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /accounting/journal-entries/{id}`

Get Journal Entry

<h3 id="get-journal-entry-parameters">Parameters</h3>

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
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "id": "12345",
    "journal_symbol": "IND",
    "line_items": [
      {
        "department_id": "12345",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "id": "12345",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "location_id": "12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      },
      {
        "department_id": "12345",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "id": "12345",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "location_id": "12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      }
    ],
    "memo": "Thank you for your business and have a great day!",
    "posted_at": "2020-09-30T07:43:32.000Z",
    "row_version": "1-12345",
    "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h3 id="get-journal-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JournalEntries|[GetJournalEntryResponse](#schemagetjournalentryresponse)|
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

## Delete Journal Entry

<a id="opIdjournalEntriesDelete"></a>

> Code samples

```bash
curl https://example.com/accounting/journal-entries/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /accounting/journal-entries/{id}`

Delete Journal Entry

<h3 id="delete-journal-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h3 id="delete-journal-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JournalEntries|[DeleteJournalEntryResponse](#schemadeletejournalentryresponse)|
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

## Update Journal Entry

<a id="opIdjournalEntriesUpdate"></a>

> Code samples

```bash
curl https://example.com/accounting/journal-entries/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "currency": "USD",
    "currency_rate": 0.69,
    "journal_symbol": "IND",
    "line_items": [
      {
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      },
      {
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "nominal_code": "N091"
        },
        "tax_amount": 27500,
        "tax_rate": {
          "id": "123456"
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      }
    ],
    "memo": "Thank you for your business and have a great day!",
    "posted_at": "2020-09-30T07:43:32.000Z",
    "row_version": "1-12345",
    "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"
  }'
```

`PATCH /accounting/journal-entries/{id}`

Update Journal Entry

> Body parameter

```json
{
  "currency": "USD",
  "currency_rate": 0.69,
  "journal_symbol": "IND",
  "line_items": [
    {
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    },
    {
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "nominal_code": "N091"
      },
      "tax_amount": 27500,
      "tax_rate": {
        "id": "123456"
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    }
  ],
  "memo": "Thank you for your business and have a great day!",
  "posted_at": "2020-09-30T07:43:32.000Z",
  "row_version": "1-12345",
  "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"
}
```

<h3 id="update-journal-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[JournalEntry](#schemajournalentry)|true|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» currency_rate|body|[CurrencyRate](#schemacurrencyrate)|false|Currency Exchange Rate at the time entity was recorded/generated.|
|» journal_symbol|body|string \| null|false|Journal symbol of the entry. For example IND for indirect costs|
|» line_items|body|[[JournalEntryLineItem](#schemajournalentrylineitem)]|false|Requires a minimum of 2 line items that sum to 0|
|» memo|body|string \| null|false|Reference for the journal entry.|
|» posted_at|body|string(date-time)|false|This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» title|body|string \| null|false|Journal entry title|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|UNKNOWN_CURRENCY|
|» currency|AED|
|» currency|AFN|
|» currency|ALL|
|» currency|AMD|
|» currency|ANG|
|» currency|AOA|
|» currency|ARS|
|» currency|AUD|
|» currency|AWG|
|» currency|AZN|
|» currency|BAM|
|» currency|BBD|
|» currency|BDT|
|» currency|BGN|
|» currency|BHD|
|» currency|BIF|
|» currency|BMD|
|» currency|BND|
|» currency|BOB|
|» currency|BOV|
|» currency|BRL|
|» currency|BSD|
|» currency|BTN|
|» currency|BWP|
|» currency|BYR|
|» currency|BZD|
|» currency|CAD|
|» currency|CDF|
|» currency|CHE|
|» currency|CHF|
|» currency|CHW|
|» currency|CLF|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|COU|
|» currency|CRC|
|» currency|CUC|
|» currency|CUP|
|» currency|CVE|
|» currency|CZK|
|» currency|DJF|
|» currency|DKK|
|» currency|DOP|
|» currency|DZD|
|» currency|EGP|
|» currency|ERN|
|» currency|ETB|
|» currency|EUR|
|» currency|FJD|
|» currency|FKP|
|» currency|GBP|
|» currency|GEL|
|» currency|GHS|
|» currency|GIP|
|» currency|GMD|
|» currency|GNF|
|» currency|GTQ|
|» currency|GYD|
|» currency|HKD|
|» currency|HNL|
|» currency|HRK|
|» currency|HTG|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|IQD|
|» currency|IRR|
|» currency|ISK|
|» currency|JMD|
|» currency|JOD|
|» currency|JPY|
|» currency|KES|
|» currency|KGS|
|» currency|KHR|
|» currency|KMF|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KYD|
|» currency|KZT|
|» currency|LAK|
|» currency|LBP|
|» currency|LKR|
|» currency|LRD|
|» currency|LSL|
|» currency|LTL|
|» currency|LVL|
|» currency|LYD|
|» currency|MAD|
|» currency|MDL|
|» currency|MGA|
|» currency|MKD|
|» currency|MMK|
|» currency|MNT|
|» currency|MOP|
|» currency|MRO|
|» currency|MUR|
|» currency|MVR|
|» currency|MWK|
|» currency|MXN|
|» currency|MXV|
|» currency|MYR|
|» currency|MZN|
|» currency|NAD|
|» currency|NGN|
|» currency|NIO|
|» currency|NOK|
|» currency|NPR|
|» currency|NZD|
|» currency|OMR|
|» currency|PAB|
|» currency|PEN|
|» currency|PGK|
|» currency|PHP|
|» currency|PKR|
|» currency|PLN|
|» currency|PYG|
|» currency|QAR|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|RWF|
|» currency|SAR|
|» currency|SBD|
|» currency|SCR|
|» currency|SDG|
|» currency|SEK|
|» currency|SGD|
|» currency|SHP|
|» currency|SLL|
|» currency|SOS|
|» currency|SRD|
|» currency|SSP|
|» currency|STD|
|» currency|SVC|
|» currency|SYP|
|» currency|SZL|
|» currency|THB|
|» currency|TJS|
|» currency|TMT|
|» currency|TND|
|» currency|TOP|
|» currency|TRC|
|» currency|TRY|
|» currency|TTD|
|» currency|TWD|
|» currency|TZS|
|» currency|UAH|
|» currency|UGX|
|» currency|USD|
|» currency|USN|
|» currency|USS|
|» currency|UYI|
|» currency|UYU|
|» currency|UZS|
|» currency|VEF|
|» currency|VND|
|» currency|VUV|
|» currency|WST|
|» currency|XAF|
|» currency|XAG|
|» currency|XAU|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XCD|
|» currency|XDR|
|» currency|XOF|
|» currency|XPD|
|» currency|XPF|
|» currency|XPT|
|» currency|XTS|
|» currency|XXX|
|» currency|YER|
|» currency|ZAR|
|» currency|ZMK|
|» currency|ZMW|
|» currency|BTC|
|» currency|ETH|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h3 id="update-journal-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JournalEntries|[UpdateJournalEntryResponse](#schemaupdatejournalentryresponse)|
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

<h2 id="tocS_AccountingCustomer">AccountingCustomer</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingcustomer"></a>
<a id="schema_AccountingCustomer"></a>
<a id="tocSaccountingcustomer"></a>
<a id="tocsaccountingcustomer"></a>

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "downstream_id": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "id": "12345",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this customer",
  "parent": {
    "id": "12345",
    "name": "Windsurf Shop"
  },
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
  "project": false,
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "title": "CEO",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|bank_accounts|[[BankAccount](#schemabankaccount)]|false|none|none|
|company_name|[CompanyName](#schemacompanyname)|false|none|The name of the company.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|display_id|string \| null|false|none|Display ID|
|display_name|string \| null|false|none|Display name|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|emails|[[Email](#schemaemail)]|false|none|none|
|first_name|[FirstName](#schemafirstname)|false|none|The first name of the person.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|individual|boolean \| null|false|none|Is this an individual or business customer|
|last_name|[LastName](#schemalastname)|false|none|The last name of the person.|
|middle_name|[MiddleName](#schemamiddlename)|false|none|Middle name of the person.|
|notes|string \| null|false|none|Some notes about this customer|
|parent|[LinkedParentCustomer](#schemalinkedparentcustomer)|false|none|The parent customer this entity is linked to.|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|project|boolean \| null|false|none|If true, indicates this is a Project.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string \| null|false|none|Customer status|
|suffix|[Suffix](#schemasuffix)|false|none|none|
|tax_number|[TaxNumber](#schemataxnumber)|false|none|none|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|title|[Title](#schematitle)|false|none|The job title of the person.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|websites|[[Website](#schemawebsite)]|false|none|none|

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
|status|inactive|
|status|archived|
|status|gdpr-erasure-request|
|status|unknown|

<h2 id="tocS_AccountingEventType">AccountingEventType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingeventtype"></a>
<a id="schema_AccountingEventType"></a>
<a id="tocSaccountingeventtype"></a>
<a id="tocsaccountingeventtype"></a>

```json
"*"
```

<h2 id="tocS_AccountingWebhookEvent">AccountingWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingwebhookevent"></a>
<a id="schema_AccountingWebhookEvent"></a>
<a id="tocSaccountingwebhookevent"></a>
<a id="tocsaccountingwebhookevent"></a>

```json
{
  "entity_id": "123456ASDF",
  "entity_type": "Company",
  "entity_url": "https://unify.apideck.com/crm/contacts/123456",
  "event_id": "9755c355-56c3-4a2f-a2da-86ff4411fccb",
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close",
  "event_type": "*"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|The service provider's ID of the entity that triggered this event|
|entity_type|string|false|none|The type entity that triggered this event|
|entity_url|string|false|none|The url to retrieve entity detail.|
|event_id|string|false|none|Unique reference to this request event|
|execution_attempt|number|false|none|The current count this request event has been attempted|
|occurred_at|string|false|none|ISO Datetime for when the original event occurred|
|service_id|string|false|none|Service provider identifier|
|event_type|[AccountingEventType](#schemaaccountingeventtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|*|
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

<h2 id="tocS_Active">Active</h2>
<!-- backwards compatibility -->
<a id="schemaactive"></a>
<a id="schema_Active"></a>
<a id="tocSactive"></a>
<a id="tocsactive"></a>

```json
true
```

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

<h2 id="tocS_BalanceSheet">BalanceSheet</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheet"></a>
<a id="schema_BalanceSheet"></a>
<a id="tocSbalancesheet"></a>
<a id="tocsbalancesheet"></a>

```json
{
  "assets": {
    "current_assets": {
      "accounts": [
        {
          "id": "1",
          "name": "Accounts Receivable (A/R)",
          "value": 10000
        },
        {
          "id": "2",
          "name": "Accounts Payable (A/P)",
          "value": 10000
        }
      ],
      "total": 100000
    },
    "fixed_assets": {
      "accounts": [
        {
          "id": "1",
          "name": "Accounts Receivable (A/R)",
          "value": 10000
        },
        {
          "id": "2",
          "name": "Accounts Payable (A/P)",
          "value": 10000
        }
      ],
      "total": 100000
    },
    "total": 200000
  },
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "end_date": "2017-01-01",
  "equity": {
    "items": [
      {
        "id": "1",
        "name": "Retained Earnings",
        "value": 10000
      }
    ],
    "total": 200000
  },
  "id": "12345",
  "liabilities": {
    "accounts": [
      {
        "id": "1",
        "name": "Accounts Payable (A/P)",
        "value": 10000
      }
    ],
    "total": 200000
  },
  "report_name": "BalanceSheet",
  "start_date": "2017-01-01",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|object|true|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|end_date|string|false|none|The start date of the report|
|equity|object|true|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|liabilities|object|true|none|none|
|report_name|string|true|none|The name of the report|
|start_date|string|true|none|The start date of the report|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

<h2 id="tocS_BalanceSheetFilter">BalanceSheetFilter</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheetfilter"></a>
<a id="schema_BalanceSheetFilter"></a>
<a id="tocSbalancesheetfilter"></a>
<a id="tocsbalancesheetfilter"></a>

```json
{
  "end_date": "2021-12-31",
  "start_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string|false|none|Filter by end date. If end date is given, start date is required.|
|start_date|string|false|none|Filter by start date. If start date is given, end date is required.|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "account_name": "SPACEX LLC",
  "account_number": "123465",
  "account_type": "credit_card",
  "bank_code": "BNH",
  "bic": "AUDSCHGGXXX",
  "branch_identifier": "001",
  "bsb_number": "062-001",
  "currency": "USD",
  "iban": "CH2989144532982975332"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_name|string \| null|false|none|The name which you used in opening your bank account.|
|account_number|string \| null|false|none|A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number.|
|account_type|string \| null|false|none|The type of bank account.|
|bank_code|string \| null|false|none|A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.|
|bic|string \| null|false|none|none|
|branch_identifier|string \| null|false|none|A branch identifier is a unique identifier for a branch of a bank or financial institution.|
|bsb_number|string \| null|false|none|A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|iban|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|account_type|bank_account|
|account_type|credit_card|
|account_type|other|
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

<h2 id="tocS_Bill">Bill</h2>
<!-- backwards compatibility -->
<a id="schemabill"></a>
<a id="schema_Bill"></a>
<a id="tocSbill"></a>
<a id="tocsbill"></a>

```json
{
  "balance": 27500,
  "bill_date": "2020-09-30",
  "bill_number": "10001",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "currency_rate": 0.69,
  "deposit": 0,
  "downstream_id": "12345",
  "due_date": "2020-10-30",
  "id": "12345",
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "line_items": [
    {
      "code": "120-C",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_percentage": 0.01,
      "id": "12345",
      "item": {
        "code": "120-C",
        "id": "12344",
        "name": "Model Y"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "total_amount": 27500,
      "type": "expense_account",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
    }
  ],
  "notes": "Some notes about this bill.",
  "paid_date": "2020-10-30",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "status": "draft",
  "sub_total": 27500,
  "supplier": {
    "address": {
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
    },
    "company_name": "The boring company",
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number \| null|false|none|Balance of bill due.|
|bill_date|string(date)|false|none|Date bill was issued - YYYY-MM-DD.|
|bill_number|string \| null|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|currency_rate|[CurrencyRate](#schemacurrencyrate)|false|none|Currency Exchange Rate at the time entity was recorded/generated.|
|deposit|number \| null|false|none|Amount of deposit made to this bill.|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|due_date|string(date)|false|none|The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|ledger_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|line_items|[[BillLineItem](#schemabilllineitem)]|false|none|none|
|notes|string \| null|false|none|none|
|paid_date|string(date) \| null|false|none|The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.|
|po_number|string \| null|false|none|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|reference|string \| null|false|none|Optional bill reference.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string \| null|false|none|Invoice status|
|sub_total|number \| null|false|none|Sub-total amount, normally before tax.|
|supplier|[LinkedSupplier](#schemalinkedsupplier)|false|none|The supplier this entity is linked to.|
|tax_code|string \| null|false|none|Applicable tax id/code override if tax is not supplied on a line item basis.|
|tax_inclusive|[TaxInclusive](#schemataxinclusive)|false|none|Amounts are including tax|
|terms|string \| null|false|none|Terms of payment.|
|total|number \| null|false|none|Total amount of bill, including tax.|
|total_tax|number \| null|false|none|Total tax amount applied to this bill.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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
|status|draft|
|status|submitted|
|status|authorised|
|status|partially_paid|
|status|paid|
|status|void|
|status|credit|
|status|deleted|

<h2 id="tocS_BillLineItem">BillLineItem</h2>
<!-- backwards compatibility -->
<a id="schemabilllineitem"></a>
<a id="schema_BillLineItem"></a>
<a id="tocSbilllineitem"></a>
<a id="tocsbilllineitem"></a>

```json
{
  "code": "120-C",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "department_id": "1234",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "discount_percentage": 0.01,
  "id": "12345",
  "item": {
    "code": "120-C",
    "id": "12344",
    "name": "Model Y"
  },
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "line_number": 1,
  "location_id": "1234",
  "quantity": 1,
  "row_id": "12345",
  "row_version": "1-12345",
  "tax_amount": 27500,
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "total_amount": 27500,
  "type": "expense_account",
  "unit_of_measure": "pc.",
  "unit_price": 27500.5,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|User defined item code|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|department_id|string \| null|false|none|Department id|
|description|string \| null|false|none|User defined description|
|discount_percentage|number \| null|false|none|Discount percentage|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|item|[LinkedInvoiceItem](#schemalinkedinvoiceitem)|false|none|none|
|ledger_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|line_number|integer \| null|false|none|Line number in the invoice|
|location_id|string \| null|false|none|Location id|
|quantity|[Quantity](#schemaquantity)|false|none|none|
|row_id|string|false|none|Row ID|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|tax_amount|number \| null|false|none|Tax amount|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|total_amount|number \| null|false|none|Total amount of the line item|
|type|string \| null|false|none|Bill Line Item type|
|unit_of_measure|[UnitOfMeasure](#schemaunitofmeasure)|false|none|Description of the unit type the item is sold as, ie: kg, hour.|
|unit_price|[UnitPrice](#schemaunitprice)|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|expense_item|
|type|expense_account|

<h2 id="tocS_BillsSort">BillsSort</h2>
<!-- backwards compatibility -->
<a id="schemabillssort"></a>
<a id="schema_BillsSort"></a>
<a id="tocSbillssort"></a>
<a id="tocsbillssort"></a>

```json
{
  "by": "updated_at",
  "direction": "desc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|false|none|The field on which to sort the Bills|
|direction|[SortDirection](#schemasortdirection)|false|none|The direction in which to sort the results|

#### Enumerated Values

|Property|Value|
|---|---|
|by|updated_at|
|direction|asc|
|direction|desc|

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "abn_branch": "123",
  "abn_or_tfn": "46 115 614 695",
  "acn": "XXX XXX XXX",
  "addresses": [
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
  ],
  "annual_revenue": "+$35m",
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "birthday": "2000-08-12",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "deleted": false,
  "description": "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "fax": "+12129876543",
  "first_name": "Elon",
  "id": "12345",
  "image": "https://www.spacex.com/static/images/share.jpg",
  "industry": "Apparel",
  "interaction_count": 1,
  "last_activity_at": "2020-09-30T07:43:32.000Z",
  "last_name": "Musk",
  "name": "SpaceX",
  "number_of_employees": "500-1000",
  "owner_id": "12345",
  "ownership": "Public",
  "parent_id": "22345",
  "payee_number": "78932EN",
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
  "read_only": false,
  "row_type": {
    "id": "12345",
    "name": "Customer Account"
  },
  "sales_tax_number": "12456EN",
  "salutation": "Mr",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "status": "Open",
  "tags": [
    "New"
  ],
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "vat_number": "BE0689615164",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abn_branch|string \| null|false|none|An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.|
|abn_or_tfn|string \| null|false|none|An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.|
|acn|string \| null|false|none|The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|annual_revenue|string \| null|false|none|Annual revenue|
|bank_accounts|[[BankAccount](#schemabankaccount)]|false|none|none|
|birthday|string(date) \| null|false|none|The date of birth of the person.|
|created_at|string(date-time)|false|read-only|none|
|created_by|string \| null|false|read-only|none|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|deleted|boolean|false|read-only|none|
|description|string \| null|false|none|none|
|emails|[[Email](#schemaemail)]|false|none|none|
|fax|string \| null|false|none|none|
|first_name|[FirstName](#schemafirstname)|false|none|The first name of the person.|
|id|string|false|read-only|none|
|image|string \| null|false|none|none|
|industry|string \| null|false|none|Industry|
|interaction_count|integer \| null|false|read-only|none|
|last_activity_at|string(date-time) \| null|false|read-only|none|
|last_name|[LastName](#schemalastname)|false|none|The last name of the person.|
|name|string|true|none|none|
|number_of_employees|string \| null|false|none|Number of employees|
|owner_id|string|false|none|none|
|ownership|string \| null|false|none|Ownership|
|parent_id|string|false|read-only|Parent ID|
|payee_number|string \| null|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|read_only|boolean \| null|false|none|none|
|row_type|object|false|none|none|
|sales_tax_number|string \| null|false|none|none|
|salutation|string \| null|false|none|A formal salutation for the person. For example, 'Mr', 'Mrs'|
|social_links|[[SocialLink](#schemasociallink)]|false|none|none|
|status|string \| null|false|none|none|
|tags|[Tags](#schematags)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|updated_by|string \| null|false|read-only|none|
|vat_number|string \| null|false|none|VAT number|
|websites|[[Website](#schemawebsite)]|false|none|none|

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

<h2 id="tocS_CompanyInfo">CompanyInfo</h2>
<!-- backwards compatibility -->
<a id="schemacompanyinfo"></a>
<a id="schema_CompanyInfo"></a>
<a id="tocScompanyinfo"></a>
<a id="tocscompanyinfo"></a>

```json
{
  "addresses": [
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
  ],
  "automated_sales_tax": true,
  "company_name": "SpaceX",
  "company_start_date": "2015-06-05",
  "country": "US",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "default_sales_tax": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "fiscal_year_start_month": "January",
  "id": "12345",
  "language": "EN",
  "legal_name": "SpaceX Inc.",
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
  "row_version": "1-12345",
  "sales_tax_enabled": true,
  "sales_tax_number": "111.222.333",
  "status": "active",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|automated_sales_tax|boolean|false|none|Whether sales tax is calculated automatically for the company|
|company_name|[CompanyName](#schemacompanyname)|false|none|The name of the company.|
|company_start_date|string(date)|false|none|Date when company file was created|
|country|string \| null|false|none|country code according to ISO 3166-1 alpha-2.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|default_sales_tax|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|emails|[[Email](#schemaemail)]|false|none|none|
|fiscal_year_start_month|string|false|none|The start month of fiscal year.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|language|[Language](#schemalanguage)|false|none|language code according to ISO 639-1. For the United States - EN|
|legal_name|string|false|none|The legal name of the company|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|sales_tax_enabled|boolean|false|none|Whether sales tax is enabled for the company|
|sales_tax_number|[SalesTaxNumber](#schemasalestaxnumber)|false|none|none|
|status|string|false|none|Based on the status some functionality is enabled or disabled.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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
|fiscal_year_start_month|January|
|fiscal_year_start_month|February|
|fiscal_year_start_month|March|
|fiscal_year_start_month|April|
|fiscal_year_start_month|May|
|fiscal_year_start_month|June|
|fiscal_year_start_month|July|
|fiscal_year_start_month|August|
|fiscal_year_start_month|September|
|fiscal_year_start_month|October|
|fiscal_year_start_month|November|
|fiscal_year_start_month|December|
|status|active|
|status|inactive|

<h2 id="tocS_CompanyName">CompanyName</h2>
<!-- backwards compatibility -->
<a id="schemacompanyname"></a>
<a id="schema_CompanyName"></a>
<a id="tocScompanyname"></a>
<a id="tocscompanyname"></a>

```json
"SpaceX"
```

The name of the company.

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "active": true,
  "addresses": [
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
  ],
  "birthday": "2000-08-12",
  "company_id": "23456",
  "company_name": "23456",
  "created_at": "2017-08-12T20:43:21.291Z",
  "current_balance": 10.5,
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "department": "Engineering",
  "description": "Internal champion",
  "email_domain": "gmail.com",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "fax": "+12129876543",
  "first_call_at": "2020-09-30T07:43:32.000Z",
  "first_email_at": "2020-09-30T07:43:32.000Z",
  "first_name": "Elon",
  "gender": "female",
  "id": "12345",
  "image": "https://unavatar.io/elon-musk",
  "language": "EN",
  "last_activity_at": "2020-09-30T07:43:32.000Z",
  "last_name": "Musk",
  "lead_id": "34567",
  "lead_source": "Cold Call",
  "middle_name": "D.",
  "name": "Elon Musk",
  "owner_id": "54321",
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
  "photo_url": "https://unavatar.io/elon-musk",
  "prefix": "Mr.",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "status": "open",
  "suffix": "PhD",
  "tags": [
    "New"
  ],
  "title": "CEO",
  "type": "personal",
  "updated_at": "2017-08-12T20:43:21.291Z",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|none|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|birthday|string \| null|false|none|none|
|company_id|string \| null|false|none|none|
|company_name|string \| null|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|current_balance|number \| null|false|none|none|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|department|string \| null|false|none|none|
|description|string \| null|false|none|none|
|email_domain|string \| null|false|none|none|
|emails|[[Email](#schemaemail)]|false|none|none|
|fax|string \| null|false|none|none|
|first_call_at|string(date-time) \| null|false|read-only|none|
|first_email_at|string(date-time) \| null|false|read-only|none|
|first_name|string \| null|false|none|none|
|gender|string \| null|false|none|none|
|id|string|false|read-only|none|
|image|string \| null|false|none|**Deprecated.**|
|language|string \| null|false|none|language code according to ISO 639-1. For the United States - EN|
|last_activity_at|string(date-time) \| null|false|read-only|none|
|last_name|string \| null|false|none|none|
|lead_id|string \| null|false|none|none|
|lead_source|string \| null|false|none|none|
|middle_name|string \| null|false|none|none|
|name|string|true|none|none|
|owner_id|string \| null|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|photo_url|string \| null|false|none|The URL of the photo of a person.|
|prefix|string \| null|false|none|none|
|social_links|[[SocialLink](#schemasociallink)]|false|none|none|
|status|string \| null|false|none|none|
|suffix|string \| null|false|none|none|
|tags|[Tags](#schematags)|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|websites|[[Website](#schemawebsite)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|
|gender|unisex|
|type|customer|
|type|supplier|
|type|employee|
|type|personal|

<h2 id="tocS_CreateBillResponse">CreateBillResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebillresponse"></a>
<a id="schema_CreateBillResponse"></a>
<a id="tocScreatebillresponse"></a>
<a id="tocscreatebillresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "bills",
  "service": "xero",
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

<h2 id="tocS_CreateCreditNoteResponse">CreateCreditNoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecreditnoteresponse"></a>
<a id="schema_CreateCreditNoteResponse"></a>
<a id="tocScreatecreditnoteresponse"></a>
<a id="tocscreatecreditnoteresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "credit-notes",
  "service": "xero",
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

<h2 id="tocS_CreateCustomerResponse">CreateCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomerresponse"></a>
<a id="schema_CreateCustomerResponse"></a>
<a id="tocScreatecustomerresponse"></a>
<a id="tocscreatecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "customers",
  "service": "xero",
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

<h2 id="tocS_CreateInvoiceItemResponse">CreateInvoiceItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvoiceitemresponse"></a>
<a id="schema_CreateInvoiceItemResponse"></a>
<a id="tocScreateinvoiceitemresponse"></a>
<a id="tocscreateinvoiceitemresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "invoice-items",
  "service": "xero",
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

<h2 id="tocS_CreateInvoiceResponse">CreateInvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvoiceresponse"></a>
<a id="schema_CreateInvoiceResponse"></a>
<a id="tocScreateinvoiceresponse"></a>
<a id="tocscreateinvoiceresponse"></a>

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "add",
  "resource": "invoices",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InvoiceResponse](#schemainvoiceresponse)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_CreateJournalEntryResponse">CreateJournalEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejournalentryresponse"></a>
<a id="schema_CreateJournalEntryResponse"></a>
<a id="tocScreatejournalentryresponse"></a>
<a id="tocscreatejournalentryresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h2 id="tocS_CreateLedgerAccountResponse">CreateLedgerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateledgeraccountresponse"></a>
<a id="schema_CreateLedgerAccountResponse"></a>
<a id="tocScreateledgeraccountresponse"></a>
<a id="tocscreateledgeraccountresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h2 id="tocS_CreatePaymentResponse">CreatePaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentresponse"></a>
<a id="schema_CreatePaymentResponse"></a>
<a id="tocScreatepaymentresponse"></a>
<a id="tocscreatepaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "payments",
  "service": "xero",
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

<h2 id="tocS_CreateSupplierResponse">CreateSupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesupplierresponse"></a>
<a id="schema_CreateSupplierResponse"></a>
<a id="tocScreatesupplierresponse"></a>
<a id="tocscreatesupplierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "payments",
  "service": "xero",
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

<h2 id="tocS_CreateTaxRateResponse">CreateTaxRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetaxrateresponse"></a>
<a id="schema_CreateTaxRateResponse"></a>
<a id="tocScreatetaxrateresponse"></a>
<a id="tocscreatetaxrateresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "tax-rates",
  "service": "xero",
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

<h2 id="tocS_CreditNote">CreditNote</h2>
<!-- backwards compatibility -->
<a id="schemacreditnote"></a>
<a id="schema_CreditNote"></a>
<a id="tocScreditnote"></a>
<a id="tocscreditnote"></a>

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "allocations": [
    {
      "amount": 49.99,
      "code": "N091",
      "id": "123456",
      "type": "invoice"
    }
  ],
  "balance": 27500,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "company_name": "The boring company",
    "display_id": "CUST00101",
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "date_issued": "2021-05-01T12:00:00.000Z",
  "date_paid": "2021-05-01T12:00:00.000Z",
  "id": "123456",
  "line_items": [
    {
      "code": "120-C",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "id": "12345",
      "item": {
        "code": "120-C",
        "id": "12344",
        "name": "Model Y"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
    }
  ],
  "note": "Some notes about this credit note",
  "number": "OIT00546",
  "reference": "123456",
  "remaining_credit": 27500,
  "row_version": "1-12345",
  "status": "authorised",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "terms": "Some terms about this credit note",
  "total_amount": 49.99,
  "total_tax": 2500,
  "type": "accounts_receivable_credit",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|allocations|[object]|false|none|none|
|balance|number \| null|false|none|The balance reflecting any payments made against the transaction.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|currency_rate|[CurrencyRate](#schemacurrencyrate)|false|none|Currency Exchange Rate at the time entity was recorded/generated.|
|customer|[LinkedCustomer](#schemalinkedcustomer)|false|none|The customer this entity is linked to.|
|date_issued|string(date-time)|false|none|Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD|
|date_paid|string(date-time) \| null|false|none|Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD|
|id|string|true|read-only|Unique identifier representing the entity|
|line_items|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|none|
|note|string \| null|false|none|Optional note to be associated with the credit note.|
|number|string \| null|false|none|Credit note number.|
|reference|string \| null|false|none|Optional reference message ie: Debit remittance detail.|
|remaining_credit|number \| null|false|none|Indicates the total credit amount still available to apply towards the payment.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string|false|none|Status of credit notes|
|sub_total|number \| null|false|none|Sub-total amount, normally before tax.|
|tax_code|string \| null|false|none|Applicable tax id/code override if tax is not supplied on a line item basis.|
|tax_inclusive|[TaxInclusive](#schemataxinclusive)|false|none|Amounts are including tax|
|terms|string \| null|false|none|Optional terms to be associated with the credit note.|
|total_amount|number|true|none|Amount of transaction|
|total_tax|number \| null|false|none|Total tax amount applied to this invoice.|
|type|string|false|none|Type of payment|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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
|status|draft|
|status|authorised|
|status|paid|
|status|voided|
|status|deleted|
|type|accounts_receivable_credit|
|type|accounts_payable_credit|

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

<h2 id="tocS_CurrencyRate">CurrencyRate</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyrate"></a>
<a id="schema_CurrencyRate"></a>
<a id="tocScurrencyrate"></a>
<a id="tocscurrencyrate"></a>

```json
0.69
```

Currency Exchange Rate at the time entity was recorded/generated.

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

<h2 id="tocS_CustomersFilter">CustomersFilter</h2>
<!-- backwards compatibility -->
<a id="schemacustomersfilter"></a>
<a id="schema_CustomersFilter"></a>
<a id="tocScustomersfilter"></a>
<a id="tocscustomersfilter"></a>

```json
{
  "company_name": "SpaceX",
  "display_name": "Elon Musk",
  "email": "elon@musk.com",
  "first_name": "Elon",
  "last_name": "Musk"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|Company Name of customer to search for|
|display_name|string|false|none|Display Name of customer to search for|
|email|string|false|none|Email of customer to search for|
|first_name|string|false|none|First name of customer to search for|
|last_name|string|false|none|Last name of customer to search for|

<h2 id="tocS_DeleteBillResponse">DeleteBillResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebillresponse"></a>
<a id="schema_DeleteBillResponse"></a>
<a id="tocSdeletebillresponse"></a>
<a id="tocsdeletebillresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "bills",
  "service": "xero",
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

<h2 id="tocS_DeleteCreditNoteResponse">DeleteCreditNoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecreditnoteresponse"></a>
<a id="schema_DeleteCreditNoteResponse"></a>
<a id="tocSdeletecreditnoteresponse"></a>
<a id="tocsdeletecreditnoteresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "credit-notes",
  "service": "xero",
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

<h2 id="tocS_DeleteCustomerResponse">DeleteCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomerresponse"></a>
<a id="schema_DeleteCustomerResponse"></a>
<a id="tocSdeletecustomerresponse"></a>
<a id="tocsdeletecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "customers",
  "service": "xero",
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

<h2 id="tocS_DeleteInvoiceItemResponse">DeleteInvoiceItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvoiceitemresponse"></a>
<a id="schema_DeleteInvoiceItemResponse"></a>
<a id="tocSdeleteinvoiceitemresponse"></a>
<a id="tocsdeleteinvoiceitemresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "tax-rates",
  "service": "xero",
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

<h2 id="tocS_DeleteInvoiceResponse">DeleteInvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvoiceresponse"></a>
<a id="schema_DeleteInvoiceResponse"></a>
<a id="tocSdeleteinvoiceresponse"></a>
<a id="tocsdeleteinvoiceresponse"></a>

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "delete",
  "resource": "invoices",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InvoiceResponse](#schemainvoiceresponse)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_DeleteJournalEntryResponse">DeleteJournalEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejournalentryresponse"></a>
<a id="schema_DeleteJournalEntryResponse"></a>
<a id="tocSdeletejournalentryresponse"></a>
<a id="tocsdeletejournalentryresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h2 id="tocS_DeleteLedgerAccountResponse">DeleteLedgerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteledgeraccountresponse"></a>
<a id="schema_DeleteLedgerAccountResponse"></a>
<a id="tocSdeleteledgeraccountresponse"></a>
<a id="tocsdeleteledgeraccountresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h2 id="tocS_DeletePaymentResponse">DeletePaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepaymentresponse"></a>
<a id="schema_DeletePaymentResponse"></a>
<a id="tocSdeletepaymentresponse"></a>
<a id="tocsdeletepaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "payments",
  "service": "xero",
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

<h2 id="tocS_DeleteSupplierResponse">DeleteSupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesupplierresponse"></a>
<a id="schema_DeleteSupplierResponse"></a>
<a id="tocSdeletesupplierresponse"></a>
<a id="tocsdeletesupplierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "suppliers",
  "service": "xero",
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

<h2 id="tocS_DeleteTaxRateResponse">DeleteTaxRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetaxrateresponse"></a>
<a id="schema_DeleteTaxRateResponse"></a>
<a id="tocSdeletetaxrateresponse"></a>
<a id="tocsdeletetaxrateresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "tax-rates",
  "service": "xero",
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

<h2 id="tocS_DownstreamId">DownstreamId</h2>
<!-- backwards compatibility -->
<a id="schemadownstreamid"></a>
<a id="schema_DownstreamId"></a>
<a id="tocSdownstreamid"></a>
<a id="tocsdownstreamid"></a>

```json
"12345"
```

The third-party API ID of original entity

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

<h2 id="tocS_GetBalanceSheetResponse">GetBalanceSheetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbalancesheetresponse"></a>
<a id="schema_GetBalanceSheetResponse"></a>
<a id="tocSgetbalancesheetresponse"></a>
<a id="tocsgetbalancesheetresponse"></a>

```json
{
  "data": {
    "assets": {
      "current_assets": {
        "accounts": [
          {
            "id": "1",
            "name": "Accounts Receivable (A/R)",
            "value": 10000
          },
          {
            "id": "2",
            "name": "Accounts Payable (A/P)",
            "value": 10000
          }
        ],
        "total": 100000
      },
      "fixed_assets": {
        "accounts": [
          {
            "id": "1",
            "name": "Accounts Receivable (A/R)",
            "value": 10000
          },
          {
            "id": "2",
            "name": "Accounts Payable (A/P)",
            "value": 10000
          }
        ],
        "total": 100000
      },
      "total": 200000
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "end_date": "2017-01-01",
    "equity": {
      "items": [
        {
          "id": "1",
          "name": "Retained Earnings",
          "value": 10000
        }
      ],
      "total": 200000
    },
    "id": "12345",
    "liabilities": {
      "accounts": [
        {
          "id": "1",
          "name": "Accounts Payable (A/P)",
          "value": 10000
        }
      ],
      "total": 200000
    },
    "report_name": "BalanceSheet",
    "start_date": "2017-01-01",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "BalanceSheets",
  "service": "quickbooks",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BalanceSheet](#schemabalancesheet)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetBillResponse">GetBillResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbillresponse"></a>
<a id="schema_GetBillResponse"></a>
<a id="tocSgetbillresponse"></a>
<a id="tocsgetbillresponse"></a>

```json
{
  "data": {
    "balance": 27500,
    "bill_date": "2020-09-30",
    "bill_number": "10001",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "deposit": 0,
    "downstream_id": "12345",
    "due_date": "2020-10-30",
    "id": "12345",
    "ledger_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "expense_account",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "notes": "Some notes about this bill.",
    "paid_date": "2020-10-30",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "status": "draft",
    "sub_total": 27500,
    "supplier": {
      "address": {
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
      },
      "company_name": "The boring company",
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "bills",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Bill](#schemabill)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetBillsResponse">GetBillsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbillsresponse"></a>
<a id="schema_GetBillsResponse"></a>
<a id="tocSgetbillsresponse"></a>
<a id="tocsgetbillsresponse"></a>

```json
{
  "data": [
    {
      "balance": 27500,
      "bill_date": "2020-09-30",
      "bill_number": "10001",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "deposit": 0,
      "downstream_id": "12345",
      "due_date": "2020-10-30",
      "id": "12345",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "expense_account",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "notes": "Some notes about this bill.",
      "paid_date": "2020-10-30",
      "po_number": "90000117",
      "reference": "123456",
      "row_version": "1-12345",
      "status": "draft",
      "sub_total": 27500,
      "supplier": {
        "address": {
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
        },
        "company_name": "The boring company",
        "display_name": "Windsurf Shop",
        "id": "12345"
      },
      "tax_code": "1234",
      "tax_inclusive": true,
      "terms": "Net 30 days",
      "total": 27500,
      "total_tax": 2500,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "bills",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Bill](#schemabill)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCompanyInfoResponse">GetCompanyInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompanyinforesponse"></a>
<a id="schema_GetCompanyInfoResponse"></a>
<a id="tocSgetcompanyinforesponse"></a>
<a id="tocsgetcompanyinforesponse"></a>

```json
{
  "data": {
    "addresses": [
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
    ],
    "automated_sales_tax": true,
    "company_name": "SpaceX",
    "company_start_date": "2015-06-05",
    "country": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "default_sales_tax": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "fiscal_year_start_month": "January",
    "id": "12345",
    "language": "EN",
    "legal_name": "SpaceX Inc.",
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
    "row_version": "1-12345",
    "sales_tax_enabled": true,
    "sales_tax_number": "111.222.333",
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "company-info",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CompanyInfo](#schemacompanyinfo)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCreditNoteResponse">GetCreditNoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcreditnoteresponse"></a>
<a id="schema_GetCreditNoteResponse"></a>
<a id="tocSgetcreditnoteresponse"></a>
<a id="tocsgetcreditnoteresponse"></a>

```json
{
  "data": {
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "allocations": [
      {
        "amount": 49.99,
        "code": "N091",
        "id": "123456",
        "type": "invoice"
      }
    ],
    "balance": 27500,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "date_issued": "2021-05-01T12:00:00.000Z",
    "date_paid": "2021-05-01T12:00:00.000Z",
    "id": "123456",
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "note": "Some notes about this credit note",
    "number": "OIT00546",
    "reference": "123456",
    "remaining_credit": 27500,
    "row_version": "1-12345",
    "status": "authorised",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "terms": "Some terms about this credit note",
    "total_amount": 49.99,
    "total_tax": 2500,
    "type": "accounts_receivable_credit",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "credit-notes",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CreditNote](#schemacreditnote)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCreditNotesResponse">GetCreditNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcreditnotesresponse"></a>
<a id="schema_GetCreditNotesResponse"></a>
<a id="tocSgetcreditnotesresponse"></a>
<a id="tocsgetcreditnotesresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "allocations": [
        {
          "amount": 49.99,
          "code": "N091",
          "id": "123456",
          "type": "invoice"
        }
      ],
      "balance": 27500,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "date_issued": "2021-05-01T12:00:00.000Z",
      "date_paid": "2021-05-01T12:00:00.000Z",
      "id": "123456",
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_amount": 19.99,
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "sales_item",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "note": "Some notes about this credit note",
      "number": "OIT00546",
      "reference": "123456",
      "remaining_credit": 27500,
      "row_version": "1-12345",
      "status": "authorised",
      "sub_total": 27500,
      "tax_code": "1234",
      "tax_inclusive": true,
      "terms": "Some terms about this credit note",
      "total_amount": 49.99,
      "total_tax": 2500,
      "type": "accounts_receivable_credit",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "credit-notes",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CreditNote](#schemacreditnote)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCustomerResponse">GetCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomerresponse"></a>
<a id="schema_GetCustomerResponse"></a>
<a id="tocSgetcustomerresponse"></a>
<a id="tocsgetcustomerresponse"></a>

```json
{
  "data": {
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "downstream_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "id": "12345",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this customer",
    "parent": {
      "id": "12345",
      "name": "Windsurf Shop"
    },
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
    "project": false,
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  },
  "operation": "one",
  "resource": "customers",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountingCustomer](#schemaaccountingcustomer)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCustomersResponse">GetCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomersresponse"></a>
<a id="schema_GetCustomersResponse"></a>
<a id="tocSgetcustomersresponse"></a>
<a id="tocsgetcustomersresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "addresses": [
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
      ],
      "bank_accounts": [
        {
          "account_name": "SPACEX LLC",
          "account_number": "123465",
          "account_type": "credit_card",
          "bank_code": "BNH",
          "bic": "AUDSCHGGXXX",
          "branch_identifier": "001",
          "bsb_number": "062-001",
          "currency": "USD",
          "iban": "CH2989144532982975332"
        }
      ],
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "display_id": "EMP00101",
      "display_name": "Windsurf Shop",
      "downstream_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "individual": true,
      "last_name": "Musk",
      "middle_name": "D.",
      "notes": "Some notes about this customer",
      "parent": {
        "id": "12345",
        "name": "Windsurf Shop"
      },
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
      "project": false,
      "row_version": "1-12345",
      "status": "active",
      "suffix": "Jr.",
      "tax_number": "US123945459",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "websites": [
        {
          "id": "12345",
          "type": "primary",
          "url": "http://example.com"
        }
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
  "operation": "all",
  "resource": "customers",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AccountingCustomer](#schemaaccountingcustomer)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetInvoiceItemResponse">GetInvoiceItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvoiceitemresponse"></a>
<a id="schema_GetInvoiceItemResponse"></a>
<a id="tocSgetinvoiceitemresponse"></a>
<a id="tocsgetinvoiceitemresponse"></a>

```json
{
  "data": {
    "active": true,
    "asset_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "code": "120-C",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    "expense_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "id": "123456",
    "income_account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "inventory_date": "2020-10-30",
    "name": "Model Y",
    "purchase_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "purchased": true,
    "quantity": 1,
    "row_version": "1-12345",
    "sales_details": {
      "tax_inclusive": true,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "unit_of_measure": "pc.",
      "unit_price": 27500.5
    },
    "sold": true,
    "taxable": true,
    "tracked": true,
    "type": "inventory",
    "unit_price": 27500.5,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "invoice-items",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InvoiceItem](#schemainvoiceitem)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetInvoiceItemsResponse">GetInvoiceItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvoiceitemsresponse"></a>
<a id="schema_GetInvoiceItemsResponse"></a>
<a id="tocSgetinvoiceitemsresponse"></a>
<a id="tocsgetinvoiceitemsresponse"></a>

```json
{
  "data": [
    {
      "active": true,
      "asset_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "code": "120-C",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "expense_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "id": "123456",
      "income_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "inventory_date": "2020-10-30",
      "name": "Model Y",
      "purchase_details": {
        "tax_inclusive": true,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      },
      "purchased": true,
      "quantity": 1,
      "row_version": "1-12345",
      "sales_details": {
        "tax_inclusive": true,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "unit_of_measure": "pc.",
        "unit_price": 27500.5
      },
      "sold": true,
      "taxable": true,
      "tracked": true,
      "type": "inventory",
      "unit_price": 27500.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "invoice-items",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InvoiceItem](#schemainvoiceitem)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetInvoiceResponse">GetInvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvoiceresponse"></a>
<a id="schema_GetInvoiceResponse"></a>
<a id="tocSgetinvoiceresponse"></a>
<a id="tocsgetinvoiceresponse"></a>

```json
{
  "data": {
    "balance": 27500,
    "billing_address": {
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
    },
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "customer_memo": "Thank you for your business and have a great day!",
    "deposit": 0,
    "discount_amount": 25,
    "discount_percentage": 5.5,
    "downstream_id": "12345",
    "due_date": "2020-09-30",
    "id": "12345",
    "invoice_date": "2020-09-30",
    "invoice_sent": true,
    "line_items": [
      {
        "code": "120-C",
        "created_at": "2020-09-30T07:43:32.000Z",
        "created_by": "12345",
        "department_id": "1234",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "discount_amount": 19.99,
        "discount_percentage": 0.01,
        "id": "12345",
        "item": {
          "code": "120-C",
          "id": "12344",
          "name": "Model Y"
        },
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "line_number": 1,
        "location_id": "1234",
        "quantity": 1,
        "row_id": "12345",
        "row_version": "1-12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "type": "sales_item",
        "unit_of_measure": "pc.",
        "unit_price": 27500.5,
        "updated_at": "2020-09-30T07:43:32.000Z",
        "updated_by": "12345"
      }
    ],
    "number": "OIT00546",
    "po_number": "90000117",
    "reference": "123456",
    "row_version": "1-12345",
    "shipping_address": {
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
    },
    "source_document_url": "https://www.invoicesolution.com/invoice/123456",
    "status": "draft",
    "sub_total": 27500,
    "tax_code": "1234",
    "tax_inclusive": true,
    "template_id": "123456",
    "terms": "Net 30 days",
    "total": 27500,
    "total_tax": 2500,
    "type": "service",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "invoices",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Invoice](#schemainvoice)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetInvoicesResponse">GetInvoicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvoicesresponse"></a>
<a id="schema_GetInvoicesResponse"></a>
<a id="tocSgetinvoicesresponse"></a>
<a id="tocsgetinvoicesresponse"></a>

```json
{
  "data": [
    {
      "balance": 27500,
      "billing_address": {
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
      },
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "customer_memo": "Thank you for your business and have a great day!",
      "deposit": 0,
      "discount_amount": 25,
      "discount_percentage": 5.5,
      "downstream_id": "12345",
      "due_date": "2020-09-30",
      "id": "12345",
      "invoice_date": "2020-09-30",
      "invoice_sent": true,
      "line_items": [
        {
          "code": "120-C",
          "created_at": "2020-09-30T07:43:32.000Z",
          "created_by": "12345",
          "department_id": "1234",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "discount_amount": 19.99,
          "discount_percentage": 0.01,
          "id": "12345",
          "item": {
            "code": "120-C",
            "id": "12344",
            "name": "Model Y"
          },
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "line_number": 1,
          "location_id": "1234",
          "quantity": 1,
          "row_id": "12345",
          "row_version": "1-12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "type": "sales_item",
          "unit_of_measure": "pc.",
          "unit_price": 27500.5,
          "updated_at": "2020-09-30T07:43:32.000Z",
          "updated_by": "12345"
        }
      ],
      "number": "OIT00546",
      "po_number": "90000117",
      "reference": "123456",
      "row_version": "1-12345",
      "shipping_address": {
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
      },
      "source_document_url": "https://www.invoicesolution.com/invoice/123456",
      "status": "draft",
      "sub_total": 27500,
      "tax_code": "1234",
      "tax_inclusive": true,
      "template_id": "123456",
      "terms": "Net 30 days",
      "total": 27500,
      "total_tax": 2500,
      "type": "service",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "invoices",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Invoice](#schemainvoice)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetJournalEntriesResponse">GetJournalEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjournalentriesresponse"></a>
<a id="schema_GetJournalEntriesResponse"></a>
<a id="tocSgetjournalentriesresponse"></a>
<a id="tocsgetjournalentriesresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "id": "12345",
      "journal_symbol": "IND",
      "line_items": [
        {
          "department_id": "12345",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "id": "12345",
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "location_id": "12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "tracking_category": {
            "id": "123456",
            "name": "New York"
          },
          "type": "debit"
        },
        {
          "department_id": "12345",
          "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          "id": "12345",
          "ledger_account": {
            "code": "453",
            "id": "123456",
            "name": "Bank account",
            "nominal_code": "N091"
          },
          "location_id": "12345",
          "tax_amount": 27500,
          "tax_rate": {
            "code": "N-T",
            "id": "123456",
            "name": "GST on Purchases",
            "rate": 10
          },
          "total_amount": 27500,
          "tracking_category": {
            "id": "123456",
            "name": "New York"
          },
          "type": "debit"
        }
      ],
      "memo": "Thank you for your business and have a great day!",
      "posted_at": "2020-09-30T07:43:32.000Z",
      "row_version": "1-12345",
      "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "journal-entries",
  "service": "quickbooks",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[JournalEntry](#schemajournalentry)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetJournalEntryResponse">GetJournalEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjournalentryresponse"></a>
<a id="schema_GetJournalEntryResponse"></a>
<a id="tocSgetjournalentryresponse"></a>
<a id="tocsgetjournalentryresponse"></a>

```json
{
  "data": {
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "id": "12345",
    "journal_symbol": "IND",
    "line_items": [
      {
        "department_id": "12345",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "id": "12345",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "location_id": "12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      },
      {
        "department_id": "12345",
        "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        "id": "12345",
        "ledger_account": {
          "code": "453",
          "id": "123456",
          "name": "Bank account",
          "nominal_code": "N091"
        },
        "location_id": "12345",
        "tax_amount": 27500,
        "tax_rate": {
          "code": "N-T",
          "id": "123456",
          "name": "GST on Purchases",
          "rate": 10
        },
        "total_amount": 27500,
        "tracking_category": {
          "id": "123456",
          "name": "New York"
        },
        "type": "debit"
      }
    ],
    "memo": "Thank you for your business and have a great day!",
    "posted_at": "2020-09-30T07:43:32.000Z",
    "row_version": "1-12345",
    "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "journal-entries",
  "service": "quickbooks",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[JournalEntry](#schemajournalentry)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetLedgerAccountResponse">GetLedgerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetledgeraccountresponse"></a>
<a id="schema_GetLedgerAccountResponse"></a>
<a id="tocSgetledgeraccountresponse"></a>
<a id="tocsgetledgeraccountresponse"></a>

```json
{
  "data": {
    "active": true,
    "bank_account": {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    },
    "categories": [
      {
        "id": "12345",
        "name": "Finance Charges Expense"
      }
    ],
    "classification": "asset",
    "code": "453",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "current_balance": 20000,
    "description": "Main checking account",
    "display_id": "1-12345",
    "fully_qualified_name": "Asset.Bank.Checking_Account",
    "header": true,
    "id": "12345",
    "last_reconciliation_date": "2020-09-30",
    "level": 1,
    "name": "Bank account",
    "nominal_code": "N091",
    "opening_balance": 75000,
    "parent_account": {
      "display_id": "1-1100",
      "id": "12345",
      "name": "Bank Accounts"
    },
    "row_version": "1-12345",
    "status": "active",
    "sub_account": false,
    "sub_accounts": [
      {
        "account_sub_name": "Petty Cash",
        "id": "12345"
      }
    ],
    "sub_type": "CHECKING_ACCOUNT",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "tax_type": "NONE",
    "type": "bank",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "ledger-accounts",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[LedgerAccount](#schemaledgeraccount)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetLedgerAccountsResponse">GetLedgerAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetledgeraccountsresponse"></a>
<a id="schema_GetLedgerAccountsResponse"></a>
<a id="tocSgetledgeraccountsresponse"></a>
<a id="tocsgetledgeraccountsresponse"></a>

```json
{
  "data": [
    {
      "active": true,
      "bank_account": {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      },
      "categories": [
        {
          "id": "12345",
          "name": "Finance Charges Expense"
        }
      ],
      "classification": "asset",
      "code": "453",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "current_balance": 20000,
      "description": "Main checking account",
      "display_id": "1-12345",
      "fully_qualified_name": "Asset.Bank.Checking_Account",
      "header": true,
      "id": "12345",
      "last_reconciliation_date": "2020-09-30",
      "level": 1,
      "name": "Bank account",
      "nominal_code": "N091",
      "opening_balance": 75000,
      "parent_account": {
        "display_id": "1-1100",
        "id": "12345",
        "name": "Bank Accounts"
      },
      "row_version": "1-12345",
      "status": "active",
      "sub_account": false,
      "sub_accounts": [
        {
          "account_sub_name": "Petty Cash",
          "id": "12345"
        }
      ],
      "sub_type": "CHECKING_ACCOUNT",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "tax_type": "NONE",
      "type": "bank",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "ledger-accounts",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LedgerAccount](#schemaledgeraccount)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPaymentResponse">GetPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentresponse"></a>
<a id="schema_GetPaymentResponse"></a>
<a id="tocSgetpaymentresponse"></a>
<a id="tocsgetpaymentresponse"></a>

```json
{
  "data": {
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "accounts_receivable_account_id": "123456",
    "accounts_receivable_account_type": "Account",
    "allocations": [
      {
        "amount": 49.99,
        "code": "N091",
        "id": "123456",
        "type": "invoice"
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "currency_rate": 0.69,
    "customer": {
      "company_name": "The boring company",
      "display_id": "CUST00101",
      "display_name": "Windsurf Shop",
      "id": "12345",
      "name": "Windsurf Shop"
    },
    "display_id": "123456",
    "downstream_id": "12345",
    "id": "123456",
    "note": "Some notes about this payment",
    "payment_method": "Credit Card",
    "payment_method_id": "123456",
    "payment_method_reference": "123456",
    "reconciled": true,
    "reference": "123456",
    "row_version": "1-12345",
    "status": "authorised",
    "supplier": {
      "address": {
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
      },
      "company_name": "The boring company",
      "display_name": "Windsurf Shop",
      "id": "12345"
    },
    "total_amount": 49.99,
    "transaction_date": "2021-05-01T12:00:00.000Z",
    "type": "accounts_receivable",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "payments",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Payment](#schemapayment)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPaymentsResponse">GetPaymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsresponse"></a>
<a id="schema_GetPaymentsResponse"></a>
<a id="tocSgetpaymentsresponse"></a>
<a id="tocsgetpaymentsresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "accounts_receivable_account_id": "123456",
      "accounts_receivable_account_type": "Account",
      "allocations": [
        {
          "amount": 49.99,
          "code": "N091",
          "id": "123456",
          "type": "invoice"
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "currency_rate": 0.69,
      "customer": {
        "company_name": "The boring company",
        "display_id": "CUST00101",
        "display_name": "Windsurf Shop",
        "id": "12345",
        "name": "Windsurf Shop"
      },
      "display_id": "123456",
      "downstream_id": "12345",
      "id": "123456",
      "note": "Some notes about this payment",
      "payment_method": "Credit Card",
      "payment_method_id": "123456",
      "payment_method_reference": "123456",
      "reconciled": true,
      "reference": "123456",
      "row_version": "1-12345",
      "status": "authorised",
      "supplier": {
        "address": {
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
        },
        "company_name": "The boring company",
        "display_name": "Windsurf Shop",
        "id": "12345"
      },
      "total_amount": 49.99,
      "transaction_date": "2021-05-01T12:00:00.000Z",
      "type": "accounts_receivable",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "payments",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Payment](#schemapayment)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetProfitAndLossResponse">GetProfitAndLossResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprofitandlossresponse"></a>
<a id="schema_GetProfitAndLossResponse"></a>
<a id="tocSgetprofitandlossresponse"></a>
<a id="tocsgetprofitandlossresponse"></a>

```json
{
  "data": {
    "currency": "USD",
    "customer_id": "123",
    "end_date": "2017-01-01",
    "expenses": {
      "records": [
        {
          "amount": 10000,
          "id": "123",
          "name": "Expense 1"
        },
        {
          "amount": 20000,
          "id": "456",
          "name": "Expense 2"
        }
      ],
      "total": 200000
    },
    "gross_profit": {
      "total": 200000
    },
    "id": "12345",
    "income": {
      "records": [
        {
          "amount": 10000,
          "id": "123",
          "name": "Income 1"
        },
        {
          "amount": 20000,
          "id": "456",
          "name": "Income 2"
        }
      ],
      "total": 200000
    },
    "net_income": {
      "total": 200000
    },
    "net_operating_income": {
      "total": 200000
    },
    "report_name": "ProfitAndLoss",
    "start_date": "2017-01-01"
  },
  "operation": "one",
  "resource": "ProfitAndLosses",
  "service": "quickbooks",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ProfitAndLoss](#schemaprofitandloss)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetSupplierResponse">GetSupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsupplierresponse"></a>
<a id="schema_GetSupplierResponse"></a>
<a id="tocSgetsupplierresponse"></a>
<a id="tocsgetsupplierresponse"></a>

```json
{
  "data": {
    "account": {
      "code": "453",
      "id": "123456",
      "name": "Bank account",
      "nominal_code": "N091"
    },
    "addresses": [
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
    ],
    "bank_accounts": [
      {
        "account_name": "SPACEX LLC",
        "account_number": "123465",
        "account_type": "credit_card",
        "bank_code": "BNH",
        "bic": "AUDSCHGGXXX",
        "branch_identifier": "001",
        "bsb_number": "062-001",
        "currency": "USD",
        "iban": "CH2989144532982975332"
      }
    ],
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "display_id": "EMP00101",
    "display_name": "Windsurf Shop",
    "downstream_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "id": "12345",
    "individual": true,
    "last_name": "Musk",
    "middle_name": "D.",
    "notes": "Some notes about this supplier",
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
    "row_version": "1-12345",
    "status": "active",
    "suffix": "Jr.",
    "tax_number": "US123945459",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  },
  "operation": "one",
  "resource": "suppliers",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Supplier](#schemasupplier)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetSuppliersResponse">GetSuppliersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsuppliersresponse"></a>
<a id="schema_GetSuppliersResponse"></a>
<a id="tocSgetsuppliersresponse"></a>
<a id="tocsgetsuppliersresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "addresses": [
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
      ],
      "bank_accounts": [
        {
          "account_name": "SPACEX LLC",
          "account_number": "123465",
          "account_type": "credit_card",
          "bank_code": "BNH",
          "bic": "AUDSCHGGXXX",
          "branch_identifier": "001",
          "bsb_number": "062-001",
          "currency": "USD",
          "iban": "CH2989144532982975332"
        }
      ],
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "display_id": "EMP00101",
      "display_name": "Windsurf Shop",
      "downstream_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "individual": true,
      "last_name": "Musk",
      "middle_name": "D.",
      "notes": "Some notes about this supplier",
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
      "row_version": "1-12345",
      "status": "active",
      "suffix": "Jr.",
      "tax_number": "US123945459",
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "websites": [
        {
          "id": "12345",
          "type": "primary",
          "url": "http://example.com"
        }
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
  "operation": "all",
  "resource": "suppliers",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Supplier](#schemasupplier)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTaxRateResponse">GetTaxRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaxrateresponse"></a>
<a id="schema_GetTaxRateResponse"></a>
<a id="tocSgettaxrateresponse"></a>
<a id="tocsgettaxrateresponse"></a>

```json
{
  "data": {
    "code": "ABN",
    "components": [
      {
        "compound": true,
        "id": "10",
        "name": "GST",
        "rate": 10
      }
    ],
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Reduced rate GST Purchases",
    "effective_tax_rate": 10,
    "id": "1234",
    "name": "GST on Purchases",
    "original_tax_rate_id": "12345",
    "report_tax_type": "NONE",
    "row_version": "1-12345",
    "status": "active",
    "tax_payable_account_id": "123456",
    "tax_remitted_account_id": "123456",
    "total_tax_rate": 10,
    "type": "NONE",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "tax-rates",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TaxRate](#schemataxrate)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTaxRatesResponse">GetTaxRatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaxratesresponse"></a>
<a id="schema_GetTaxRatesResponse"></a>
<a id="tocSgettaxratesresponse"></a>
<a id="tocsgettaxratesresponse"></a>

```json
{
  "data": [
    {
      "code": "ABN",
      "components": [
        {
          "compound": true,
          "id": "10",
          "name": "GST",
          "rate": 10
        }
      ],
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Reduced rate GST Purchases",
      "effective_tax_rate": 10,
      "id": "1234",
      "name": "GST on Purchases",
      "original_tax_rate_id": "12345",
      "report_tax_type": "NONE",
      "row_version": "1-12345",
      "status": "active",
      "tax_payable_account_id": "123456",
      "tax_remitted_account_id": "123456",
      "total_tax_rate": 10,
      "type": "NONE",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
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
  "resource": "tax-rates",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TaxRate](#schemataxrate)]|true|none|none|
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

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "balance": 27500,
  "billing_address": {
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
  },
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "company_name": "The boring company",
    "display_id": "CUST00101",
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "customer_memo": "Thank you for your business and have a great day!",
  "deposit": 0,
  "discount_amount": 25,
  "discount_percentage": 5.5,
  "downstream_id": "12345",
  "due_date": "2020-09-30",
  "id": "12345",
  "invoice_date": "2020-09-30",
  "invoice_sent": true,
  "line_items": [
    {
      "code": "120-C",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "department_id": "1234",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "discount_amount": 19.99,
      "discount_percentage": 0.01,
      "id": "12345",
      "item": {
        "code": "120-C",
        "id": "12344",
        "name": "Model Y"
      },
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "line_number": 1,
      "location_id": "1234",
      "quantity": 1,
      "row_id": "12345",
      "row_version": "1-12345",
      "tax_amount": 27500,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "total_amount": 27500,
      "type": "sales_item",
      "unit_of_measure": "pc.",
      "unit_price": 27500.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345"
    }
  ],
  "number": "OIT00546",
  "po_number": "90000117",
  "reference": "123456",
  "row_version": "1-12345",
  "shipping_address": {
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
  },
  "source_document_url": "https://www.invoicesolution.com/invoice/123456",
  "status": "draft",
  "sub_total": 27500,
  "tax_code": "1234",
  "tax_inclusive": true,
  "template_id": "123456",
  "terms": "Net 30 days",
  "total": 27500,
  "total_tax": 2500,
  "type": "service",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number \| null|false|none|Balance of invoice due.|
|billing_address|[Address](#schemaaddress)|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|currency_rate|[CurrencyRate](#schemacurrencyrate)|false|none|Currency Exchange Rate at the time entity was recorded/generated.|
|customer|[LinkedCustomer](#schemalinkedcustomer)|false|none|The customer this entity is linked to.|
|customer_memo|string \| null|false|none|Customer memo|
|deposit|number \| null|false|none|Amount of deposit made to this invoice.|
|discount_amount|number \| null|false|none|Discount amount applied to this invoice.|
|discount_percentage|number \| null|false|none|Discount percentage applied to this invoice.|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|due_date|string(date) \| null|false|none|The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|invoice_date|string(date) \| null|false|none|Date invoice was issued - YYYY-MM-DD.|
|invoice_sent|boolean|false|none|Invoice sent to contact/customer.|
|line_items|[[InvoiceLineItem](#schemainvoicelineitem)]|false|none|none|
|number|string \| null|false|none|Invoice number.|
|po_number|string \| null|false|none|A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.|
|reference|string \| null|false|none|Optional invoice reference.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|shipping_address|[Address](#schemaaddress)|false|none|none|
|source_document_url|string \| null|false|none|URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.|
|status|string \| null|false|none|Invoice status|
|sub_total|number \| null|false|none|Sub-total amount, normally before tax.|
|tax_code|string \| null|false|none|Applicable tax id/code override if tax is not supplied on a line item basis.|
|tax_inclusive|[TaxInclusive](#schemataxinclusive)|false|none|Amounts are including tax|
|template_id|string \| null|false|none|Optional invoice template|
|terms|string \| null|false|none|Terms of payment.|
|total|number \| null|false|none|Total amount of invoice, including tax.|
|total_tax|number \| null|false|none|Total tax amount applied to this invoice.|
|type|string \| null|false|none|Invoice type|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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
|status|draft|
|status|submitted|
|status|authorised|
|status|partially_paid|
|status|paid|
|status|void|
|status|credit|
|status|deleted|
|type|standard|
|type|credit|
|type|service|
|type|product|
|type|supplier|
|type|other|

<h2 id="tocS_InvoiceItem">InvoiceItem</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitem"></a>
<a id="schema_InvoiceItem"></a>
<a id="tocSinvoiceitem"></a>
<a id="tocsinvoiceitem"></a>

```json
{
  "active": true,
  "asset_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "code": "120-C",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "expense_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "id": "123456",
  "income_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "inventory_date": "2020-10-30",
  "name": "Model Y",
  "purchase_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "purchased": true,
  "quantity": 1,
  "row_version": "1-12345",
  "sales_details": {
    "tax_inclusive": true,
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "unit_of_measure": "pc.",
    "unit_price": 27500.5
  },
  "sold": true,
  "taxable": true,
  "tracked": true,
  "type": "inventory",
  "unit_price": 27500.5,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|[Active](#schemaactive)|false|none|none|
|asset_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|code|string \| null|false|none|User defined item code|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|description|string \| null|false|none|A short description of the item|
|expense_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|id|string|false|read-only|The ID of the item.|
|income_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|inventory_date|string(date) \| null|false|none|The date of opening balance if inventory item is tracked - YYYY-MM-DD.|
|name|string \| null|false|none|Item name|
|purchase_details|object|false|none|none|
|purchased|boolean \| null|false|none|Item is available for purchase transactions|
|quantity|[Quantity](#schemaquantity)|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|sales_details|object|false|none|none|
|sold|boolean \| null|false|none|Item will be available on sales transactions|
|taxable|boolean \| null|false|none|If true, transactions for this item are taxable|
|tracked|boolean \| null|false|none|Item is inventoried|
|type|string \| null|false|none|Item type|
|unit_price|[UnitPrice](#schemaunitprice)|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inventory|
|type|service|
|type|other|

<h2 id="tocS_InvoiceItemAssetAccount">InvoiceItemAssetAccount</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemassetaccount"></a>
<a id="schema_InvoiceItemAssetAccount"></a>
<a id="tocSinvoiceitemassetaccount"></a>
<a id="tocsinvoiceitemassetaccount"></a>

```json
{
  "code": "453",
  "id": "123456",
  "name": "Bank account",
  "nominal_code": "N091"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|The code assigned to the account.|
|id|string|false|none|The unique identifier for the account.|
|name|string \| null|false|read-only|The name of the account.|
|nominal_code|string \| null|false|none|The nominal code of the account.|

<h2 id="tocS_InvoiceItemExpenseAccount">InvoiceItemExpenseAccount</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemexpenseaccount"></a>
<a id="schema_InvoiceItemExpenseAccount"></a>
<a id="tocSinvoiceitemexpenseaccount"></a>
<a id="tocsinvoiceitemexpenseaccount"></a>

```json
{
  "code": "453",
  "id": "123456",
  "name": "Bank account",
  "nominal_code": "N091"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|The code assigned to the account.|
|id|string|false|none|The unique identifier for the account.|
|name|string \| null|false|read-only|The name of the account.|
|nominal_code|string \| null|false|none|The nominal code of the account.|

<h2 id="tocS_InvoiceItemIncomeAccount">InvoiceItemIncomeAccount</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemincomeaccount"></a>
<a id="schema_InvoiceItemIncomeAccount"></a>
<a id="tocSinvoiceitemincomeaccount"></a>
<a id="tocsinvoiceitemincomeaccount"></a>

```json
{
  "code": "453",
  "id": "123456",
  "name": "Bank account",
  "nominal_code": "N091"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|The code assigned to the account.|
|id|string|false|none|The unique identifier for the account.|
|name|string \| null|false|read-only|The name of the account.|
|nominal_code|string \| null|false|none|The nominal code of the account.|

<h2 id="tocS_InvoiceItemsFilter">InvoiceItemsFilter</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemsfilter"></a>
<a id="schema_InvoiceItemsFilter"></a>
<a id="tocSinvoiceitemsfilter"></a>
<a id="tocsinvoiceitemsfilter"></a>

```json
{
  "name": "Widgets Large"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of Invoice Items to search for|

<h2 id="tocS_InvoiceLineItem">InvoiceLineItem</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelineitem"></a>
<a id="schema_InvoiceLineItem"></a>
<a id="tocSinvoicelineitem"></a>
<a id="tocsinvoicelineitem"></a>

```json
{
  "code": "120-C",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "department_id": "1234",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "discount_amount": 19.99,
  "discount_percentage": 0.01,
  "id": "12345",
  "item": {
    "code": "120-C",
    "id": "12344",
    "name": "Model Y"
  },
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "line_number": 1,
  "location_id": "1234",
  "quantity": 1,
  "row_id": "12345",
  "row_version": "1-12345",
  "tax_amount": 27500,
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "total_amount": 27500,
  "type": "sales_item",
  "unit_of_measure": "pc.",
  "unit_price": 27500.5,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|User defined item code|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|department_id|string \| null|false|none|Department id|
|description|string \| null|false|none|User defined description|
|discount_amount|number \| null|false|none|Discount amount applied to the line item when supported downstream.|
|discount_percentage|number \| null|false|none|Discount percentage applied to the line item when supported downstream.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|item|[LinkedInvoiceItem](#schemalinkedinvoiceitem)|false|none|none|
|ledger_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|line_number|integer \| null|false|none|Line number in the invoice|
|location_id|string \| null|false|none|Location id|
|quantity|[Quantity](#schemaquantity)|false|none|none|
|row_id|string|false|none|Row ID|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|tax_amount|number \| null|false|none|Tax amount|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|total_amount|number \| null|false|none|Total amount of the line item|
|type|string \| null|false|none|Item type|
|unit_of_measure|[UnitOfMeasure](#schemaunitofmeasure)|false|none|Description of the unit type the item is sold as, ie: kg, hour.|
|unit_price|[UnitPrice](#schemaunitprice)|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sales_item|
|type|discount|
|type|info|
|type|sub_total|

<h2 id="tocS_InvoiceResponse">InvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse"></a>
<a id="schema_InvoiceResponse"></a>
<a id="tocSinvoiceresponse"></a>
<a id="tocsinvoiceresponse"></a>

```json
{
  "downstream_id": "12345",
  "id": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|

<h2 id="tocS_InvoicesSort">InvoicesSort</h2>
<!-- backwards compatibility -->
<a id="schemainvoicessort"></a>
<a id="schema_InvoicesSort"></a>
<a id="tocSinvoicessort"></a>
<a id="tocsinvoicessort"></a>

```json
{
  "by": "updated_at",
  "direction": "desc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|false|none|The field on which to sort the Invoices|
|direction|[SortDirection](#schemasortdirection)|false|none|The direction in which to sort the results|

#### Enumerated Values

|Property|Value|
|---|---|
|by|updated_at|
|direction|asc|
|direction|desc|

<h2 id="tocS_JournalEntry">JournalEntry</h2>
<!-- backwards compatibility -->
<a id="schemajournalentry"></a>
<a id="schema_JournalEntry"></a>
<a id="tocSjournalentry"></a>
<a id="tocsjournalentry"></a>

```json
{
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "currency_rate": 0.69,
  "id": "12345",
  "journal_symbol": "IND",
  "line_items": [
    {
      "department_id": "12345",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "id": "12345",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "location_id": "12345",
      "tax_amount": 27500,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    },
    {
      "department_id": "12345",
      "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      "id": "12345",
      "ledger_account": {
        "code": "453",
        "id": "123456",
        "name": "Bank account",
        "nominal_code": "N091"
      },
      "location_id": "12345",
      "tax_amount": 27500,
      "tax_rate": {
        "code": "N-T",
        "id": "123456",
        "name": "GST on Purchases",
        "rate": 10
      },
      "total_amount": 27500,
      "tracking_category": {
        "id": "123456",
        "name": "New York"
      },
      "type": "debit"
    }
  ],
  "memo": "Thank you for your business and have a great day!",
  "posted_at": "2020-09-30T07:43:32.000Z",
  "row_version": "1-12345",
  "title": "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|currency_rate|[CurrencyRate](#schemacurrencyrate)|false|none|Currency Exchange Rate at the time entity was recorded/generated.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|journal_symbol|string \| null|false|none|Journal symbol of the entry. For example IND for indirect costs|
|line_items|[[JournalEntryLineItem](#schemajournalentrylineitem)]|false|none|Requires a minimum of 2 line items that sum to 0|
|memo|string \| null|false|none|Reference for the journal entry.|
|posted_at|string(date-time)|false|none|This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|title|string \| null|false|none|Journal entry title|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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

<h2 id="tocS_JournalEntryLineItem">JournalEntryLineItem</h2>
<!-- backwards compatibility -->
<a id="schemajournalentrylineitem"></a>
<a id="schema_JournalEntryLineItem"></a>
<a id="tocSjournalentrylineitem"></a>
<a id="tocsjournalentrylineitem"></a>

```json
{
  "department_id": "12345",
  "description": "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  "id": "12345",
  "ledger_account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "location_id": "12345",
  "tax_amount": 27500,
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "total_amount": 27500,
  "tracking_category": {
    "id": "123456",
    "name": "New York"
  },
  "type": "debit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department_id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|description|string \| null|false|none|User defined description|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|ledger_account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|true|none|none|
|location_id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|tax_amount|number \| null|false|none|Tax amount|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|total_amount|number \| null|true|none|Debit entries are considered positive, and credit entries are considered negative.|
|tracking_category|[LinkedTrackingCategory](#schemalinkedtrackingcategory)|false|none|none|
|type|string|true|none|Debit entries are considered positive, and credit entries are considered negative.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|debit|
|type|credit|

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

<h2 id="tocS_LedgerAccount">LedgerAccount</h2>
<!-- backwards compatibility -->
<a id="schemaledgeraccount"></a>
<a id="schema_LedgerAccount"></a>
<a id="tocSledgeraccount"></a>
<a id="tocsledgeraccount"></a>

```json
{
  "active": true,
  "bank_account": {
    "account_name": "SPACEX LLC",
    "account_number": "123465",
    "account_type": "credit_card",
    "bank_code": "BNH",
    "bic": "AUDSCHGGXXX",
    "branch_identifier": "001",
    "bsb_number": "062-001",
    "currency": "USD",
    "iban": "CH2989144532982975332"
  },
  "categories": [
    {
      "id": "12345",
      "name": "Finance Charges Expense"
    }
  ],
  "classification": "asset",
  "code": "453",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "current_balance": 20000,
  "description": "Main checking account",
  "display_id": "1-12345",
  "fully_qualified_name": "Asset.Bank.Checking_Account",
  "header": true,
  "id": "12345",
  "last_reconciliation_date": "2020-09-30",
  "level": 1,
  "name": "Bank account",
  "nominal_code": "N091",
  "opening_balance": 75000,
  "parent_account": {
    "display_id": "1-1100",
    "id": "12345",
    "name": "Bank Accounts"
  },
  "row_version": "1-12345",
  "status": "active",
  "sub_account": false,
  "sub_accounts": [
    {
      "account_sub_name": "Petty Cash",
      "id": "12345"
    }
  ],
  "sub_type": "CHECKING_ACCOUNT",
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "tax_type": "NONE",
  "type": "bank",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|Whether the account is active or not.|
|bank_account|[BankAccount](#schemabankaccount)|false|none|none|
|categories|[object]|false|read-only|The categories of the account.|
|classification|string \| null|false|none|The classification of account.|
|code|string \| null|false|none|The code assigned to the account.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|current_balance|number \| null|false|none|The current balance of the account.|
|description|string \| null|false|none|The description of the account.|
|display_id|string|false|none|The human readable display ID used when displaying the account|
|fully_qualified_name|string \| null|false|none|The fully qualified name of the account.|
|header|boolean \| null|false|none|Whether the account is a header or not.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|last_reconciliation_date|string(date) \| null|false|none|Reconciliation Date means the last calendar day of each Reconciliation Period.|
|level|number \| null|false|none|none|
|name|string \| null|false|none|The name of the account.|
|nominal_code|string \| null|false|none|**Deprecated.** The nominal code of the ledger account.|
|opening_balance|number \| null|false|none|The opening balance of the account.|
|parent_account|object|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string \| null|false|none|The status of the account.|
|sub_account|boolean \| null|false|none|Whether the account is a sub account or not.|
|sub_accounts|[object]|false|read-only|The sub accounts of the account.|
|sub_type|string \| null|false|none|The sub type of account.|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|tax_type|string \| null|false|none|The tax type of the account.|
|type|string|false|none|The type of account.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|classification|asset|
|classification|equity|
|classification|expense|
|classification|liability|
|classification|revenue|
|classification|income|
|classification|other_income|
|classification|other_expense|
|classification|costs_of_sales|
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
|status|inactive|
|status|archived|
|type|accounts_receivable|
|type|revenue|
|type|sales|
|type|other_income|
|type|bank|
|type|current_asset|
|type|fixed_asset|
|type|non_current_asset|
|type|other_asset|
|type|balancesheet|
|type|equity|
|type|expense|
|type|other_expense|
|type|costs_of_sales|
|type|accounts_payable|
|type|credit_card|
|type|current_liability|
|type|non_current_liability|
|type|other_liability|

<h2 id="tocS_LedgerAccounts">LedgerAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaledgeraccounts"></a>
<a id="schema_LedgerAccounts"></a>
<a id="tocSledgeraccounts"></a>
<a id="tocsledgeraccounts"></a>

```json
[
  {
    "active": true,
    "bank_account": {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    },
    "categories": [
      {
        "id": "12345",
        "name": "Finance Charges Expense"
      }
    ],
    "classification": "asset",
    "code": "453",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "current_balance": 20000,
    "description": "Main checking account",
    "display_id": "1-12345",
    "fully_qualified_name": "Asset.Bank.Checking_Account",
    "header": true,
    "id": "12345",
    "last_reconciliation_date": "2020-09-30",
    "level": 1,
    "name": "Bank account",
    "nominal_code": "N091",
    "opening_balance": 75000,
    "parent_account": {
      "display_id": "1-1100",
      "id": "12345",
      "name": "Bank Accounts"
    },
    "row_version": "1-12345",
    "status": "active",
    "sub_account": false,
    "sub_accounts": [
      {
        "account_sub_name": "Petty Cash",
        "id": "12345"
      }
    ],
    "sub_type": "CHECKING_ACCOUNT",
    "tax_rate": {
      "code": "N-T",
      "id": "123456",
      "name": "GST on Purchases",
      "rate": 10
    },
    "tax_type": "NONE",
    "type": "bank",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  }
]
```

<h2 id="tocS_LinkedCustomer">LinkedCustomer</h2>
<!-- backwards compatibility -->
<a id="schemalinkedcustomer"></a>
<a id="schema_LinkedCustomer"></a>
<a id="tocSlinkedcustomer"></a>
<a id="tocslinkedcustomer"></a>

```json
{
  "company_name": "The boring company",
  "display_id": "CUST00101",
  "display_name": "Windsurf Shop",
  "id": "12345",
  "name": "Windsurf Shop"
}
```

The customer this entity is linked to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string \| null|false|read-only|The company name of the customer.|
|display_id|string \| null|false|read-only|The display ID of the customer.|
|display_name|string \| null|false|none|The display name of the customer.|
|id|string|true|none|The ID of the customer this entity is linked to.|
|name|string|false|none|**Deprecated.** The name of the customer. Deprecated, use display_name instead.|

<h2 id="tocS_LinkedInvoiceItem">LinkedInvoiceItem</h2>
<!-- backwards compatibility -->
<a id="schemalinkedinvoiceitem"></a>
<a id="schema_LinkedInvoiceItem"></a>
<a id="tocSlinkedinvoiceitem"></a>
<a id="tocslinkedinvoiceitem"></a>

```json
{
  "code": "120-C",
  "id": "12344",
  "name": "Model Y"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|read-only|User defined item code|
|id|string \| null|false|none|ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item|
|name|string \| null|false|read-only|User defined item name|

<h2 id="tocS_LinkedLedgerAccount">LinkedLedgerAccount</h2>
<!-- backwards compatibility -->
<a id="schemalinkedledgeraccount"></a>
<a id="schema_LinkedLedgerAccount"></a>
<a id="tocSlinkedledgeraccount"></a>
<a id="tocslinkedledgeraccount"></a>

```json
{
  "code": "453",
  "id": "123456",
  "name": "Bank account",
  "nominal_code": "N091"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|The code assigned to the account.|
|id|string|false|none|The unique identifier for the account.|
|name|string \| null|false|read-only|The name of the account.|
|nominal_code|string \| null|false|none|The nominal code of the account.|

<h2 id="tocS_LinkedParentCustomer">LinkedParentCustomer</h2>
<!-- backwards compatibility -->
<a id="schemalinkedparentcustomer"></a>
<a id="schema_LinkedParentCustomer"></a>
<a id="tocSlinkedparentcustomer"></a>
<a id="tocslinkedparentcustomer"></a>

```json
{
  "id": "12345",
  "name": "Windsurf Shop"
}
```

The parent customer this entity is linked to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The parent ID of the customer this entity is linked to.|
|name|string|false|none|The name of the parent customer.|

<h2 id="tocS_LinkedSupplier">LinkedSupplier</h2>
<!-- backwards compatibility -->
<a id="schemalinkedsupplier"></a>
<a id="schema_LinkedSupplier"></a>
<a id="tocSlinkedsupplier"></a>
<a id="tocslinkedsupplier"></a>

```json
{
  "address": {
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
  },
  "company_name": "The boring company",
  "display_name": "Windsurf Shop",
  "id": "12345"
}
```

The supplier this entity is linked to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|company_name|string \| null|false|read-only|The company name of the supplier.|
|display_name|string \| null|false|none|The display name of the supplier.|
|id|string|true|none|The ID of the supplier this entity is linked to.|

<h2 id="tocS_LinkedTaxRate">LinkedTaxRate</h2>
<!-- backwards compatibility -->
<a id="schemalinkedtaxrate"></a>
<a id="schema_LinkedTaxRate"></a>
<a id="tocSlinkedtaxrate"></a>
<a id="tocslinkedtaxrate"></a>

```json
{
  "code": "N-T",
  "id": "123456",
  "name": "GST on Purchases",
  "rate": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|read-only|Tax rate code|
|id|string \| null|false|none|The ID of the object.|
|name|string \| null|false|read-only|Name of the tax rate|
|rate|number \| null|false|read-only|Rate of the tax rate|

<h2 id="tocS_LinkedTrackingCategory">LinkedTrackingCategory</h2>
<!-- backwards compatibility -->
<a id="schemalinkedtrackingcategory"></a>
<a id="schema_LinkedTrackingCategory"></a>
<a id="tocSlinkedtrackingcategory"></a>
<a id="tocslinkedtrackingcategory"></a>

```json
{
  "id": "123456",
  "name": "New York"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier for the tracking category.|
|name|string \| null|false|none|The name of the tracking category.|

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

<h2 id="tocS_PassThroughQuery">PassThroughQuery</h2>
<!-- backwards compatibility -->
<a id="schemapassthroughquery"></a>
<a id="schema_PassThroughQuery"></a>
<a id="tocSpassthroughquery"></a>
<a id="tocspassthroughquery"></a>

```json
{
  "example_downstream_property": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|example_downstream_property|string|false|none|All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "accounts_receivable_account_id": "123456",
  "accounts_receivable_account_type": "Account",
  "allocations": [
    {
      "amount": 49.99,
      "code": "N091",
      "id": "123456",
      "type": "invoice"
    }
  ],
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "currency_rate": 0.69,
  "customer": {
    "company_name": "The boring company",
    "display_id": "CUST00101",
    "display_name": "Windsurf Shop",
    "id": "12345",
    "name": "Windsurf Shop"
  },
  "display_id": "123456",
  "downstream_id": "12345",
  "id": "123456",
  "note": "Some notes about this payment",
  "payment_method": "Credit Card",
  "payment_method_id": "123456",
  "payment_method_reference": "123456",
  "reconciled": true,
  "reference": "123456",
  "row_version": "1-12345",
  "status": "authorised",
  "supplier": {
    "address": {
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
    },
    "company_name": "The boring company",
    "display_name": "Windsurf Shop",
    "id": "12345"
  },
  "total_amount": 49.99,
  "transaction_date": "2021-05-01T12:00:00.000Z",
  "type": "accounts_receivable",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|accounts_receivable_account_id|string \| null|false|none|**Deprecated.** Unique identifier for the account to allocate payment to.|
|accounts_receivable_account_type|string \| null|false|none|**Deprecated.** Type of accounts receivable account.|
|allocations|[object]|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|currency_rate|[CurrencyRate](#schemacurrencyrate)|false|none|Currency Exchange Rate at the time entity was recorded/generated.|
|customer|[LinkedCustomer](#schemalinkedcustomer)|false|none|The customer this entity is linked to.|
|display_id|string \| null|false|none|Payment id to be displayed.|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|id|string|true|read-only|Unique identifier representing the entity|
|note|string \| null|false|none|Optional note to be associated with the payment.|
|payment_method|string \| null|false|none|Payment method name|
|payment_method_id|string \| null|false|none|Unique identifier for the payment method.|
|payment_method_reference|string \| null|false|none|Optional reference message returned by payment method on processing|
|reconciled|boolean|false|none|Payment has been reconciled|
|reference|string \| null|false|none|Optional payment reference message ie: Debit remittance detail.|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string|false|none|Status of payment|
|supplier|[LinkedSupplier](#schemalinkedsupplier)|false|none|The supplier this entity is linked to.|
|total_amount|number|true|none|Amount of payment|
|transaction_date|string(date-time)|true|none|Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD|
|type|string|false|none|Type of payment|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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
|status|authorised|
|status|paid|
|status|voided|
|status|deleted|
|type|accounts_receivable|
|type|accounts_payable|
|type|accounts_receivable_credit|
|type|accounts_payable_credit|
|type|accounts_receivable_overpayment|
|type|accounts_payable_overpayment|
|type|accounts_receivable_prepayment|
|type|accounts_payable_prepayment|

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

<h2 id="tocS_ProfitAndLoss">ProfitAndLoss</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandloss"></a>
<a id="schema_ProfitAndLoss"></a>
<a id="tocSprofitandloss"></a>
<a id="tocsprofitandloss"></a>

```json
{
  "currency": "USD",
  "customer_id": "123",
  "end_date": "2017-01-01",
  "expenses": {
    "records": [
      {
        "amount": 10000,
        "id": "123",
        "name": "Expense 1"
      },
      {
        "amount": 20000,
        "id": "456",
        "name": "Expense 2"
      }
    ],
    "total": 200000
  },
  "gross_profit": {
    "total": 200000
  },
  "id": "12345",
  "income": {
    "records": [
      {
        "amount": 10000,
        "id": "123",
        "name": "Income 1"
      },
      {
        "amount": 20000,
        "id": "456",
        "name": "Income 2"
      }
    ],
    "total": 200000
  },
  "net_income": {
    "total": 200000
  },
  "net_operating_income": {
    "total": 200000
  },
  "report_name": "ProfitAndLoss",
  "start_date": "2017-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|none|
|customer_id|string|false|none|Customer id|
|end_date|string|false|none|The start date of the report|
|expenses|object|true|none|none|
|gross_profit|object \| null|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|income|object|true|none|none|
|net_income|object \| null|false|none|none|
|net_operating_income|object \| null|false|none|none|
|report_name|string|true|none|The name of the report|
|start_date|string|false|none|The start date of the report|

<h2 id="tocS_ProfitAndLossFilter">ProfitAndLossFilter</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandlossfilter"></a>
<a id="schema_ProfitAndLossFilter"></a>
<a id="tocSprofitandlossfilter"></a>
<a id="tocsprofitandlossfilter"></a>

```json
{
  "customer_id": "123abc",
  "end_date": "2021-12-31",
  "start_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_id|string|false|none|Filter by customer id|
|end_date|string|false|none|Filter by end date. If end date is given, start date is required.|
|start_date|string|false|none|Filter by start date. If start date is given, end date is required.|

<h2 id="tocS_ProfitAndLossRecord">ProfitAndLossRecord</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandlossrecord"></a>
<a id="schema_ProfitAndLossRecord"></a>
<a id="tocSprofitandlossrecord"></a>
<a id="tocsprofitandlossrecord"></a>

```json
{
  "type": "Record"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string|true|none|none|
|value|number \| null|false|none|none|

<h2 id="tocS_ProfitAndLossRecords">ProfitAndLossRecords</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandlossrecords"></a>
<a id="schema_ProfitAndLossRecords"></a>
<a id="tocSprofitandlossrecords"></a>
<a id="tocsprofitandlossrecords"></a>

```json
[
  {
    "total": 200000
  }
]
```

<h2 id="tocS_ProfitAndLossSection">ProfitAndLossSection</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandlosssection"></a>
<a id="schema_ProfitAndLossSection"></a>
<a id="tocSprofitandlosssection"></a>
<a id="tocsprofitandlosssection"></a>

```json
{
  "total": 200000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|records|[ProfitAndLossRecords](#schemaprofitandlossrecords)|false|none|none|
|title|string \| null|false|none|none|
|total|number \| null|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_Quantity">Quantity</h2>
<!-- backwards compatibility -->
<a id="schemaquantity"></a>
<a id="schema_Quantity"></a>
<a id="tocSquantity"></a>
<a id="tocsquantity"></a>

```json
1
```

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

<h2 id="tocS_SalesTaxNumber">SalesTaxNumber</h2>
<!-- backwards compatibility -->
<a id="schemasalestaxnumber"></a>
<a id="schema_SalesTaxNumber"></a>
<a id="tocSsalestaxnumber"></a>
<a id="tocssalestaxnumber"></a>

```json
"111.222.333"
```

<h2 id="tocS_SocialLink">SocialLink</h2>
<!-- backwards compatibility -->
<a id="schemasociallink"></a>
<a id="schema_SocialLink"></a>
<a id="tocSsociallink"></a>
<a id="tocssociallink"></a>

```json
{
  "id": "12345",
  "type": "twitter",
  "url": "https://www.twitter.com/apideck-io"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|type|string \| null|false|none|none|
|url|string|true|none|none|

<h2 id="tocS_SortDirection">SortDirection</h2>
<!-- backwards compatibility -->
<a id="schemasortdirection"></a>
<a id="schema_SortDirection"></a>
<a id="tocSsortdirection"></a>
<a id="tocssortdirection"></a>

```json
"asc"
```

The direction in which to sort the results

<h2 id="tocS_Suffix">Suffix</h2>
<!-- backwards compatibility -->
<a id="schemasuffix"></a>
<a id="schema_Suffix"></a>
<a id="tocSsuffix"></a>
<a id="tocssuffix"></a>

```json
"Jr."
```

<h2 id="tocS_Supplier">Supplier</h2>
<!-- backwards compatibility -->
<a id="schemasupplier"></a>
<a id="schema_Supplier"></a>
<a id="tocSsupplier"></a>
<a id="tocssupplier"></a>

```json
{
  "account": {
    "code": "453",
    "id": "123456",
    "name": "Bank account",
    "nominal_code": "N091"
  },
  "addresses": [
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
  ],
  "bank_accounts": [
    {
      "account_name": "SPACEX LLC",
      "account_number": "123465",
      "account_type": "credit_card",
      "bank_code": "BNH",
      "bic": "AUDSCHGGXXX",
      "branch_identifier": "001",
      "bsb_number": "062-001",
      "currency": "USD",
      "iban": "CH2989144532982975332"
    }
  ],
  "company_name": "SpaceX",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "display_id": "EMP00101",
  "display_name": "Windsurf Shop",
  "downstream_id": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "id": "12345",
  "individual": true,
  "last_name": "Musk",
  "middle_name": "D.",
  "notes": "Some notes about this supplier",
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
  "row_version": "1-12345",
  "status": "active",
  "suffix": "Jr.",
  "tax_number": "US123945459",
  "tax_rate": {
    "code": "N-T",
    "id": "123456",
    "name": "GST on Purchases",
    "rate": 10
  },
  "title": "CEO",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[LinkedLedgerAccount](#schemalinkedledgeraccount)|false|none|none|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|bank_accounts|[[BankAccount](#schemabankaccount)]|false|none|none|
|company_name|[CompanyName](#schemacompanyname)|false|none|The name of the company.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|display_id|string \| null|false|none|Display ID|
|display_name|string \| null|false|none|Display name|
|downstream_id|[DownstreamId](#schemadownstreamid)|false|read-only|The third-party API ID of original entity|
|emails|[[Email](#schemaemail)]|false|none|none|
|first_name|[FirstName](#schemafirstname)|false|none|The first name of the person.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|individual|boolean \| null|false|none|Is this an individual or business supplier|
|last_name|[LastName](#schemalastname)|false|none|The last name of the person.|
|middle_name|[MiddleName](#schemamiddlename)|false|none|Middle name of the person.|
|notes|string \| null|false|none|Some notes about this supplier|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string \| null|false|none|Supplier status|
|suffix|[Suffix](#schemasuffix)|false|none|none|
|tax_number|[TaxNumber](#schemataxnumber)|false|none|none|
|tax_rate|[LinkedTaxRate](#schemalinkedtaxrate)|false|none|none|
|title|[Title](#schematitle)|false|none|The job title of the person.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|websites|[[Website](#schemawebsite)]|false|none|none|

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
|status|inactive|
|status|archived|
|status|gdpr-erasure-request|
|status|unknown|

<h2 id="tocS_SuppliersFilter">SuppliersFilter</h2>
<!-- backwards compatibility -->
<a id="schemasuppliersfilter"></a>
<a id="schema_SuppliersFilter"></a>
<a id="tocSsuppliersfilter"></a>
<a id="tocssuppliersfilter"></a>

```json
{
  "company_name": "SpaceX",
  "email": "elon@musk.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|Company Name of supplier to search for|
|email|string|false|none|Email of supplier to search for|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  "New"
]
```

<h2 id="tocS_TaxInclusive">TaxInclusive</h2>
<!-- backwards compatibility -->
<a id="schemataxinclusive"></a>
<a id="schema_TaxInclusive"></a>
<a id="tocStaxinclusive"></a>
<a id="tocstaxinclusive"></a>

```json
true
```

Amounts are including tax

<h2 id="tocS_TaxNumber">TaxNumber</h2>
<!-- backwards compatibility -->
<a id="schemataxnumber"></a>
<a id="schema_TaxNumber"></a>
<a id="tocStaxnumber"></a>
<a id="tocstaxnumber"></a>

```json
"US123945459"
```

<h2 id="tocS_TaxRate">TaxRate</h2>
<!-- backwards compatibility -->
<a id="schemataxrate"></a>
<a id="schema_TaxRate"></a>
<a id="tocStaxrate"></a>
<a id="tocstaxrate"></a>

```json
{
  "code": "ABN",
  "components": [
    {
      "compound": true,
      "id": "10",
      "name": "GST",
      "rate": 10
    }
  ],
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "description": "Reduced rate GST Purchases",
  "effective_tax_rate": 10,
  "id": "1234",
  "name": "GST on Purchases",
  "original_tax_rate_id": "12345",
  "report_tax_type": "NONE",
  "row_version": "1-12345",
  "status": "active",
  "tax_payable_account_id": "123456",
  "tax_remitted_account_id": "123456",
  "total_tax_rate": 10,
  "type": "NONE",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|Tax code assigned to identify this tax rate.|
|components|[object]|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|description|string \| null|false|none|Description of tax rate|
|effective_tax_rate|number \| null|false|none|Effective tax rate|
|id|string \| null|false|none|ID assigned to identify this tax rate.|
|name|string|false|none|Name assigned to identify this tax rate.|
|original_tax_rate_id|string \| null|false|none|ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.|
|report_tax_type|string \| null|false|none|Report Tax type to aggregate tax collected or paid for reporting purposes|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|status|string \| null|false|none|Tax rate status|
|tax_payable_account_id|string \| null|false|none|Unique identifier for the account for tax collected.|
|tax_remitted_account_id|string \| null|false|none|Unique identifier for the account for tax remitted.|
|total_tax_rate|number \| null|false|none|Not compounded sum of the components of a tax rate|
|type|string \| null|false|none|Tax type used to indicate the source of tax collected or paid|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|status|archived|

<h2 id="tocS_TaxRatesFilter">TaxRatesFilter</h2>
<!-- backwards compatibility -->
<a id="schemataxratesfilter"></a>
<a id="schema_TaxRatesFilter"></a>
<a id="tocStaxratesfilter"></a>
<a id="tocstaxratesfilter"></a>

```json
{
  "assets": true,
  "equity": true,
  "expenses": true,
  "liabilities": true,
  "revenue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|boolean|false|none|Boolean to describe if tax rate can be used for asset accounts|
|equity|boolean|false|none|Boolean to describe if tax rate can be used for equity accounts|
|expenses|boolean|false|none|Boolean to describe if tax rate can be used for expense accounts|
|liabilities|boolean|false|none|Boolean to describe if tax rate can be used for liability accounts|
|revenue|boolean|false|none|Boolean to describe if tax rate can be used for revenue accounts|

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

<h2 id="tocS_UnitOfMeasure">UnitOfMeasure</h2>
<!-- backwards compatibility -->
<a id="schemaunitofmeasure"></a>
<a id="schema_UnitOfMeasure"></a>
<a id="tocSunitofmeasure"></a>
<a id="tocsunitofmeasure"></a>

```json
"pc."
```

Description of the unit type the item is sold as, ie: kg, hour.

<h2 id="tocS_UnitPrice">UnitPrice</h2>
<!-- backwards compatibility -->
<a id="schemaunitprice"></a>
<a id="schema_UnitPrice"></a>
<a id="tocSunitprice"></a>
<a id="tocsunitprice"></a>

```json
27500.5
```

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

<h2 id="tocS_UpdateBillResponse">UpdateBillResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebillresponse"></a>
<a id="schema_UpdateBillResponse"></a>
<a id="tocSupdatebillresponse"></a>
<a id="tocsupdatebillresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "bills",
  "service": "xero",
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

<h2 id="tocS_UpdateCreditNoteResponse">UpdateCreditNoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecreditnoteresponse"></a>
<a id="schema_UpdateCreditNoteResponse"></a>
<a id="tocSupdatecreditnoteresponse"></a>
<a id="tocsupdatecreditnoteresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "credit-notes",
  "service": "xero",
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

<h2 id="tocS_UpdateCustomerResponse">UpdateCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomerresponse"></a>
<a id="schema_UpdateCustomerResponse"></a>
<a id="tocSupdatecustomerresponse"></a>
<a id="tocsupdatecustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "customers",
  "service": "xero",
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

<h2 id="tocS_UpdateInvoiceItemsResponse">UpdateInvoiceItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinvoiceitemsresponse"></a>
<a id="schema_UpdateInvoiceItemsResponse"></a>
<a id="tocSupdateinvoiceitemsresponse"></a>
<a id="tocsupdateinvoiceitemsresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "invoice-items",
  "service": "xero",
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

<h2 id="tocS_UpdateInvoiceResponse">UpdateInvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinvoiceresponse"></a>
<a id="schema_UpdateInvoiceResponse"></a>
<a id="tocSupdateinvoiceresponse"></a>
<a id="tocsupdateinvoiceresponse"></a>

```json
{
  "data": {
    "downstream_id": "12345",
    "id": "12345"
  },
  "operation": "update",
  "resource": "invoices",
  "service": "xero",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InvoiceResponse](#schemainvoiceresponse)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_UpdateJournalEntryResponse">UpdateJournalEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejournalentryresponse"></a>
<a id="schema_UpdateJournalEntryResponse"></a>
<a id="tocSupdatejournalentryresponse"></a>
<a id="tocsupdatejournalentryresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "journal-entries",
  "service": "quickbooks",
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

<h2 id="tocS_UpdateLedgerAccountResponse">UpdateLedgerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateledgeraccountresponse"></a>
<a id="schema_UpdateLedgerAccountResponse"></a>
<a id="tocSupdateledgeraccountresponse"></a>
<a id="tocsupdateledgeraccountresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "ledger-accounts",
  "service": "xero",
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

<h2 id="tocS_UpdatePaymentResponse">UpdatePaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepaymentresponse"></a>
<a id="schema_UpdatePaymentResponse"></a>
<a id="tocSupdatepaymentresponse"></a>
<a id="tocsupdatepaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "payments",
  "service": "xero",
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

<h2 id="tocS_UpdateSupplierResponse">UpdateSupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesupplierresponse"></a>
<a id="schema_UpdateSupplierResponse"></a>
<a id="tocSupdatesupplierresponse"></a>
<a id="tocsupdatesupplierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "suppliers",
  "service": "xero",
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

<h2 id="tocS_UpdateTaxRateResponse">UpdateTaxRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaxrateresponse"></a>
<a id="schema_UpdateTaxRateResponse"></a>
<a id="tocSupdatetaxrateresponse"></a>
<a id="tocsupdatetaxrateresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "tax-rates",
  "service": "xero",
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
