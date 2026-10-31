<h1 id="customer-support">Customer Support v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Customer Support API.

You can use this API to access all Customer Support API endpoints.

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

<h1 id="customer-support-customers">Customers</h1>

## List Customer Support Customers

<a id="opIdcustomersAll"></a>

> Code samples

```bash
curl https://example.com/customer-support/customers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /customer-support/customers`

List Customer Support Customers

<h3 id="list-customer-support-customers-parameters">Parameters</h3>

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
      "bank_accounts": {
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
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
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
      "notes": "Some notes about this customer",
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
      "tax_number": "US123945459",
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
  "resource": "customers",
  "service": "kustomer",
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

<h3 id="list-customer-support-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CustomerSupportCustomers|[GetCustomerSupportCustomersResponse](#schemagetcustomersupportcustomersresponse)|
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

## Create Customer Support Customer

<a id="opIdcustomersAdd"></a>

> Code samples

```bash
curl https://example.com/customer-support/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "bank_accounts": {
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
    "company_name": "SpaceX",
    "currency": "USD",
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
    "notes": "Some notes about this customer",
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
    "tax_number": "US123945459"
  }'
```

`POST /customer-support/customers`

Create Customer Support Customer

> Body parameter

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
  "bank_accounts": {
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
  "company_name": "SpaceX",
  "currency": "USD",
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
  "notes": "Some notes about this customer",
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
  "tax_number": "US123945459"
}
```

<h3 id="create-customer-support-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[CustomerSupportCustomer](#schemacustomersupportcustomer)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[BankAccount](#schemabankaccount)|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|none|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» notes|body|string \| null|false|none|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» status|body|string \| null|false|Customer status|
|» tax_number|body|string \| null|false|none|

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
  "service": "kustomer",
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

<h3 id="create-customer-support-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|CustomerSupportCustomers|[CreateCustomerSupportCustomerResponse](#schemacreatecustomersupportcustomerresponse)|
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

## Get Customer Support Customer

<a id="opIdcustomersOne"></a>

> Code samples

```bash
curl https://example.com/customer-support/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /customer-support/customers/{id}`

Get Customer Support Customer

<h3 id="get-customer-support-customer-parameters">Parameters</h3>

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
    "bank_accounts": {
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
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
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
    "notes": "Some notes about this customer",
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
    "tax_number": "US123945459",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "customers",
  "service": "kustomer",
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

<h3 id="get-customer-support-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CustomerSupportCustomers|[GetCustomerSupportCustomerResponse](#schemagetcustomersupportcustomerresponse)|
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

## Delete Customer Support Customer

<a id="opIdcustomersDelete"></a>

> Code samples

```bash
curl https://example.com/customer-support/customers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /customer-support/customers/{id}`

Delete Customer Support Customer

<h3 id="delete-customer-support-customer-parameters">Parameters</h3>

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
  "service": "kustomer",
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

<h3 id="delete-customer-support-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CustomerSupportCustomers|[DeleteCustomerSupportCustomerResponse](#schemadeletecustomersupportcustomerresponse)|
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

## Update Customer Support Customer

<a id="opIdcustomersUpdate"></a>

> Code samples

```bash
curl https://example.com/customer-support/customers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "bank_accounts": {
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
    "company_name": "SpaceX",
    "currency": "USD",
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
    "notes": "Some notes about this customer",
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
    "tax_number": "US123945459"
  }'
```

`PATCH /customer-support/customers/{id}`

Update Customer Support Customer

> Body parameter

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
  "bank_accounts": {
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
  "company_name": "SpaceX",
  "currency": "USD",
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
  "notes": "Some notes about this customer",
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
  "tax_number": "US123945459"
}
```

<h3 id="update-customer-support-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[CustomerSupportCustomer](#schemacustomersupportcustomer)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» bank_accounts|body|[BankAccount](#schemabankaccount)|false|none|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» individual|body|boolean \| null|false|none|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» notes|body|string \| null|false|none|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» status|body|string \| null|false|Customer status|
|» tax_number|body|string \| null|false|none|

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
  "service": "kustomer",
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

<h3 id="update-customer-support-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CustomerSupportCustomers|[UpdateCustomerSupportCustomerResponse](#schemaupdatecustomersupportcustomerresponse)|
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

<h2 id="tocS_CreateCustomerSupportCustomerResponse">CreateCustomerSupportCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomersupportcustomerresponse"></a>
<a id="schema_CreateCustomerSupportCustomerResponse"></a>
<a id="tocScreatecustomersupportcustomerresponse"></a>
<a id="tocscreatecustomersupportcustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "customers",
  "service": "kustomer",
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

<h2 id="tocS_CustomerSupportCustomer">CustomerSupportCustomer</h2>
<!-- backwards compatibility -->
<a id="schemacustomersupportcustomer"></a>
<a id="schema_CustomerSupportCustomer"></a>
<a id="tocScustomersupportcustomer"></a>
<a id="tocscustomersupportcustomer"></a>

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
  "bank_accounts": {
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
  "company_name": "SpaceX",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
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
  "notes": "Some notes about this customer",
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
  "tax_number": "US123945459",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|bank_accounts|[BankAccount](#schemabankaccount)|false|none|none|
|company_name|[CompanyName](#schemacompanyname)|false|none|The name of the company.|
|created_at|string(date-time)|false|read-only|The date and time when the object was created.|
|created_by|string \| null|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|emails|[[Email](#schemaemail)]|false|none|none|
|first_name|[FirstName](#schemafirstname)|false|none|The first name of the person.|
|id|string|false|read-only|A unique identifier for an object.|
|individual|boolean \| null|false|none|none|
|last_name|[LastName](#schemalastname)|false|none|The last name of the person.|
|notes|string \| null|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|status|string \| null|false|none|Customer status|
|tax_number|string \| null|false|none|none|
|updated_at|string(date-time) \| null|false|read-only|The date and time when the object was last updated.|
|updated_by|string \| null|false|read-only|The user who last updated the object.|

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
|status|gdpr-erasure-request|
|status|unknown|

<h2 id="tocS_DeleteCustomerSupportCustomerResponse">DeleteCustomerSupportCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomersupportcustomerresponse"></a>
<a id="schema_DeleteCustomerSupportCustomerResponse"></a>
<a id="tocSdeletecustomersupportcustomerresponse"></a>
<a id="tocsdeletecustomersupportcustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "customers",
  "service": "kustomer",
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

<h2 id="tocS_GetCustomerSupportCustomerResponse">GetCustomerSupportCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomersupportcustomerresponse"></a>
<a id="schema_GetCustomerSupportCustomerResponse"></a>
<a id="tocSgetcustomersupportcustomerresponse"></a>
<a id="tocsgetcustomersupportcustomerresponse"></a>

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
    "bank_accounts": {
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
    "company_name": "SpaceX",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
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
    "notes": "Some notes about this customer",
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
    "tax_number": "US123945459",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "customers",
  "service": "kustomer",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CustomerSupportCustomer](#schemacustomersupportcustomer)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCustomerSupportCustomersResponse">GetCustomerSupportCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomersupportcustomersresponse"></a>
<a id="schema_GetCustomerSupportCustomersResponse"></a>
<a id="tocSgetcustomersupportcustomersresponse"></a>
<a id="tocsgetcustomersupportcustomersresponse"></a>

```json
{
  "data": [
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
      "bank_accounts": {
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
      "company_name": "SpaceX",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
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
      "notes": "Some notes about this customer",
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
      "tax_number": "US123945459",
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
  "resource": "customers",
  "service": "kustomer",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomerSupportCustomer](#schemacustomersupportcustomer)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

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

<h2 id="tocS_Lead">Lead</h2>
<!-- backwards compatibility -->
<a id="schemalead"></a>
<a id="schema_Lead"></a>
<a id="tocSlead"></a>
<a id="tocslead"></a>

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
  "company_id": "2",
  "company_name": "Spacex",
  "contact_id": "2",
  "created_at": "2020-09-30T07:43:32.000Z",
  "currency": "USD",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "description": "A thinker",
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
  "language": "EN",
  "last_name": "Musk",
  "lead_source": "Cold Call",
  "monetary_amount": 75000,
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
  "prefix": "Sir",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "status": "New",
  "tags": [
    "New"
  ],
  "title": "CEO",
  "updated_at": "2020-09-30T07:43:32.000Z",
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
|addresses|[[Address](#schemaaddress)]|false|none|none|
|company_id|string \| null|false|none|none|
|company_name|string \| null|true|none|none|
|contact_id|string \| null|false|none|none|
|created_at|string|false|read-only|none|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|description|string \| null|false|none|none|
|emails|[[Email](#schemaemail)]|false|none|none|
|fax|string \| null|false|none|none|
|first_name|string \| null|false|none|none|
|id|string|false|read-only|none|
|language|string \| null|false|none|language code according to ISO 639-1. For the United States - EN|
|last_name|string \| null|false|none|none|
|lead_source|string \| null|false|none|none|
|monetary_amount|number \| null|false|none|none|
|name|string|true|none|none|
|owner_id|string|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|prefix|string \| null|false|none|none|
|social_links|[[SocialLink](#schemasociallink)]|false|none|none|
|status|string \| null|false|none|none|
|tags|[Tags](#schematags)|false|none|none|
|title|string \| null|false|none|none|
|updated_at|string|false|read-only|none|
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

<h2 id="tocS_Opportunity">Opportunity</h2>
<!-- backwards compatibility -->
<a id="schemaopportunity"></a>
<a id="schema_Opportunity"></a>
<a id="tocSopportunity"></a>
<a id="tocsopportunity"></a>

```json
{
  "close_date": "2020-10-30",
  "company_id": "12345",
  "company_name": "Copper",
  "contact_id": "12345",
  "contact_ids": [
    "12345"
  ],
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
  "date_last_contacted": "2020-09-30T00:00:00.000Z",
  "date_lead_created": "2020-09-30T00:00:00.000Z",
  "date_stage_changed": "2020-09-30T00:00:00.000Z",
  "deleted": false,
  "description": "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
  "expected_revenue": 75000,
  "id": "12345",
  "interaction_count": 0,
  "last_activity_at": "2020-09-30T07:43:32.000Z",
  "lead_id": "12345",
  "lead_source": "Website",
  "loss_reason": "No budget",
  "loss_reason_id": "12345",
  "monetary_amount": 75000,
  "owner_id": "12345",
  "pipeline_id": "12345",
  "pipeline_stage_id": "12345",
  "primary_contact_id": "12345",
  "priority": "None",
  "source_id": "12345",
  "stage_last_changed_at": "2020-09-30T07:43:32.000Z",
  "status": "Open",
  "status_id": "12345",
  "tags": [
    "New"
  ],
  "title": "New Rocket",
  "type": "Existing Customer - Upgrade",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "win_probability": 40,
  "won_reason": "Best pitch",
  "won_reason_id": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close_date|string(date) \| null|false|none|The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet.|
|company_id|string \| null|false|none|The unique identifier of the company associated with the opportunity.|
|company_name|string \| null|false|none|The name of the company associated with the opportunity.|
|contact_id|string \| null|false|none|The unique identifier of the contact associated with the opportunity.|
|contact_ids|[string]|false|none|An array of unique identifiers of all contacts associated with the opportunity.|
|created_at|string(date-time)|false|read-only|The date and time when the opportunity was created.|
|created_by|string \| null|false|read-only|The unique identifier of the user who created the opportunity.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|date_last_contacted|string(date-time) \| null|false|read-only|The date and time when the opportunity was last contacted.|
|date_lead_created|string(date-time) \| null|false|read-only|The date and time when the lead associated with the opportunity was created.|
|date_stage_changed|string(date-time) \| null|false|read-only|The date and time when the stage of the opportunity was last changed.|
|deleted|boolean|false|read-only|Indicates whether the opportunity has been deleted.|
|description|string \| null|false|none|A description of the opportunity.|
|expected_revenue|number \| null|false|read-only|The expected revenue from the opportunity|
|id|string|false|read-only|A unique identifier for the opportunity.|
|interaction_count|number \| null|false|read-only|The number of interactions with the opportunity.|
|last_activity_at|string \| null|false|read-only|The date and time of the last activity associated with the opportunity.|
|lead_id|string \| null|false|none|The unique identifier of the lead associated with the opportunity.|
|lead_source|string \| null|false|none|The source of the lead associated with the opportunity.|
|loss_reason|string \| null|false|none|The reason why the opportunity was lost.|
|loss_reason_id|string \| null|false|none|The unique identifier of the reason why the opportunity was lost.|
|monetary_amount|number \| null|false|none|The monetary value associated with the opportunity|
|owner_id|string \| null|false|none|The unique identifier of the user who owns the opportunity.|
|pipeline_id|string \| null|false|none|The unique identifier of the pipeline associated with the opportunity|
|pipeline_stage_id|string \| null|false|none|The unique identifier of the stage in the pipeline associated with the opportunity.|
|primary_contact_id|string \| null|true|none|The unique identifier of the primary contact associated with the opportunity.|
|priority|string \| null|false|none|The priority level of the opportunity.|
|source_id|string \| null|false|none|The unique identifier of the source of the opportunity.|
|stage_last_changed_at|string(date-time) \| null|false|none|The date and time when the stage of the opportunity was last changed.|
|status|string \| null|false|none|The current status of the opportunity.|
|status_id|string \| null|false|none|The unique identifier of the current status of the opportunity.|
|tags|[Tags](#schematags)|false|none|none|
|title|string|true|none|The title or name of the opportunity.|
|type|string \| null|false|none|The type of the opportunity|
|updated_at|string(date-time)|false|read-only|The date and time when the opportunity was last updated.|
|updated_by|string \| null|false|read-only|The unique identifier of the user who last updated the opportunity.|
|win_probability|number \| null|false|none|The probability of winning the opportunity, expressed as a percentage.|
|won_reason|string \| null|false|none|The reason why the opportunity was won.|
|won_reason_id|string \| null|false|none|The unique identifier of the reason why the opportunity was won.|

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

<h2 id="tocS_UpdateCustomerSupportCustomerResponse">UpdateCustomerSupportCustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomersupportcustomerresponse"></a>
<a id="schema_UpdateCustomerSupportCustomerResponse"></a>
<a id="tocSupdatecustomersupportcustomerresponse"></a>
<a id="tocsupdatecustomersupportcustomerresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "customers",
  "service": "kustomer",
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
