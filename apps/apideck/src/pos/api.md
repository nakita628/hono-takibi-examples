<h1 id="pos-api">POS API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the POS API.

You can use this API to access all POS API endpoints.

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

<h1 id="pos-api-orders">Orders</h1>

## List Orders

<a id="opIdordersAll"></a>

> Code samples

```bash
curl https://example.com/pos/orders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/orders`

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
|location_id|query|string|false|ID of the location.|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "closed_date": "2022-08-13",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "customer_id": "12345",
      "customers": [
        {
          "emails": [
            {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            }
          ],
          "first_name": "Elon",
          "id": "12345",
          "last_name": "Musk",
          "middle_name": "D.",
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
      ],
      "discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "10% off",
          "product_id": "12345",
          "scope": "order",
          "type": "percentage"
        }
      ],
      "employee_id": "12345",
      "fulfillments": [
        {
          "id": "12345",
          "pickup_details": {
            "accepted_at": "2020-09-30T07:43:32.000Z",
            "auto_complete_duration": "P1W3D",
            "cancel_reason": "Not hungry",
            "canceled_at": "2016-09-04T23:59:33.123Z",
            "curbside_pickup_details": {
              "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
              "curbside_details": "string"
            },
            "expired_at": "2016-09-04T23:59:33.123Z",
            "expires_at": "2016-09-04T23:59:33.123Z",
            "is_curbside_pickup": true,
            "note": "Pickup in the back.",
            "picked_up_at": "2016-09-04T23:59:33.123Z",
            "pickup_at": "2016-09-04T23:59:33.123Z",
            "pickup_window_duration": "P1W3D",
            "placed_at": "2016-09-04T23:59:33.123Z",
            "prep_time_duration": "P1W3D",
            "ready_at": "2016-09-04T23:59:33.123Z",
            "recipient": {
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
              "customer_id": "12345",
              "display_name": "Elon Musk",
              "email": {
                "email": "elon@musk.com",
                "id": "123",
                "type": "primary"
              },
              "phone_number": {
                "area_code": "323",
                "country_code": "1",
                "extension": "105",
                "id": "12345",
                "number": "111-111-1111",
                "type": "primary"
              }
            },
            "rejected_at": "2016-09-04T23:59:33.123Z",
            "schedule_type": "scheduled"
          },
          "shipment_details": {},
          "status": "proposed",
          "type": "shipment"
        }
      ],
      "id": "12345",
      "idempotency_key": "random_string",
      "line_items": [
        {
          "applied_discounts": [
            {
              "amount": 27500,
              "currency": "USD",
              "discount_id": "12345",
              "id": "12345"
            }
          ],
          "applied_taxes": [
            {
              "amount": 27500,
              "currency": "USD",
              "id": "12345",
              "tax_id": "sales-tax"
            }
          ],
          "id": "12345",
          "item": {
            "id": "12345"
          },
          "modifiers": [
            {
              "alternate_name": "Modifier New",
              "amount": 27500,
              "currency": "USD",
              "id": "12345",
              "modifier_group_id": "123",
              "name": "New York Strip Steak - no cheese"
            }
          ],
          "name": "New York Strip Steak",
          "quantity": 1,
          "total_amount": 27500,
          "total_discount": 3000,
          "total_tax": 2000,
          "unit_price": 27500.5
        }
      ],
      "location_id": "12345",
      "merchant_id": "12345",
      "note": "string",
      "order_date": "2022-08-12",
      "order_number": "1F",
      "order_type_id": "12345",
      "payment_status": "open",
      "payments": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345"
        }
      ],
      "reference_id": "my-order-001",
      "refunded": false,
      "refunds": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "location_id": "12345",
          "reason": "The reason for the refund being issued.",
          "status": "pending",
          "tender_id": "12345",
          "transaction_id": "12345"
        }
      ],
      "seat": "23F",
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "source": "api",
      "status": "open",
      "table": "1F",
      "taxes": [
        {
          "amount": 27500,
          "auto_applied": true,
          "currency": "USD",
          "id": "state-sales-tax",
          "name": "State Sales Tax",
          "percentage": 15,
          "scope": "order",
          "type": "unknown"
        }
      ],
      "tenders": [
        {
          "amount": 27500,
          "buyer_tendered_cash_amount": 27500,
          "card": {
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
            "bin": "41111",
            "card_brand": "visa",
            "card_type": "credit",
            "cardholder_name": "John Doe",
            "customer_id": "12345",
            "enabled": true,
            "exp_month": 1,
            "exp_year": 2022,
            "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            "id": "12345",
            "last_4": "The last 4 digits of the card number.",
            "merchant_id": "12345",
            "prepaid_type": "prepaid",
            "reference_id": "card-001",
            "version": "230320320320"
          },
          "card_entry_method": "swiped",
          "card_status": "authorized",
          "change_back_cash_amount": 27500,
          "currency": "USD",
          "id": "12345",
          "location_id": "12345",
          "name": "10% off",
          "note": "An optional note associated with the tender at the time of payment.",
          "payment_id": "12345",
          "percentage": 10,
          "total_amount": 27.5,
          "total_discount": 3,
          "total_processing_fee": 0,
          "total_refund": 0,
          "total_service_charge": 0,
          "total_tax": 2.75,
          "total_tip": 7,
          "transaction_id": "12345",
          "type": "cash"
        }
      ],
      "title": "string",
      "total_amount": 275,
      "total_discount": 300,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 275,
      "total_tip": 700,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "version": "230320320320",
      "voided": false,
      "voided_at": "2020-09-30T07:43:32.000Z"
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
  "service": "clover",
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
|200|OK|Orders|[GetOrdersResponse](#schemagetordersresponse)|
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

## Create Order

<a id="opIdordersAdd"></a>

> Code samples

```bash
curl https://example.com/pos/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "closed_date": "2022-08-13",
    "currency": "USD",
    "customer_id": "12345",
    "customers": [
      {
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "middle_name": "D.",
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
    ],
    "discounts": [
      {
        "amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "scope": "order",
        "type": "percentage"
      }
    ],
    "employee_id": "12345",
    "fulfillments": [
      {
        "id": "12345",
        "pickup_details": {
          "auto_complete_duration": "P1W3D",
          "cancel_reason": "Not hungry",
          "canceled_at": "2016-09-04T23:59:33.123Z",
          "curbside_pickup_details": {
            "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
            "curbside_details": "string"
          },
          "expired_at": "2016-09-04T23:59:33.123Z",
          "expires_at": "2016-09-04T23:59:33.123Z",
          "is_curbside_pickup": true,
          "note": "Pickup in the back.",
          "picked_up_at": "2016-09-04T23:59:33.123Z",
          "pickup_at": "2016-09-04T23:59:33.123Z",
          "pickup_window_duration": "P1W3D",
          "placed_at": "2016-09-04T23:59:33.123Z",
          "prep_time_duration": "P1W3D",
          "ready_at": "2016-09-04T23:59:33.123Z",
          "recipient": {
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
            "customer_id": "12345",
            "display_name": "Elon Musk",
            "email": {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            },
            "phone_number": {
              "area_code": "323",
              "country_code": "1",
              "extension": "105",
              "id": "12345",
              "number": "111-111-1111",
              "type": "primary"
            }
          },
          "rejected_at": "2016-09-04T23:59:33.123Z",
          "schedule_type": "scheduled"
        },
        "shipment_details": {},
        "status": "proposed",
        "type": "shipment"
      }
    ],
    "idempotency_key": "random_string",
    "line_items": [
      {
        "applied_discounts": [
          {
            "amount": 27500,
            "currency": "USD",
            "discount_id": "12345"
          }
        ],
        "applied_taxes": [
          {
            "amount": 27500,
            "currency": "USD",
            "tax_id": "sales-tax"
          }
        ],
        "item": {},
        "modifiers": [
          {
            "alternate_name": "Modifier New",
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "modifier_group_id": "123",
            "name": "New York Strip Steak - no cheese"
          }
        ],
        "name": "New York Strip Steak",
        "quantity": 1,
        "total_amount": 27500,
        "total_discount": 3000,
        "total_tax": 2000,
        "unit_price": 27500.5
      }
    ],
    "location_id": "12345",
    "merchant_id": "12345",
    "note": "string",
    "order_date": "2022-08-12",
    "order_number": "1F",
    "order_type_id": "12345",
    "payment_status": "open",
    "payments": [
      {
        "amount": 27500,
        "currency": "USD"
      }
    ],
    "reference_id": "my-order-001",
    "refunded": false,
    "refunds": [
      {
        "amount": 27500,
        "currency": "USD",
        "reason": "The reason for the refund being issued.",
        "status": "pending"
      }
    ],
    "seat": "23F",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "open",
    "table": "1F",
    "taxes": [
      {
        "amount": 27500,
        "auto_applied": true,
        "currency": "USD",
        "id": "state-sales-tax",
        "name": "State Sales Tax",
        "percentage": 15,
        "scope": "order",
        "type": "unknown"
      }
    ],
    "tenders": [
      {
        "amount": 27500,
        "buyer_tendered_cash_amount": 27500,
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        },
        "card_entry_method": "swiped",
        "card_status": "authorized",
        "change_back_cash_amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "note": "An optional note associated with the tender at the time of payment.",
        "percentage": 10,
        "total_amount": 27.5,
        "total_discount": 3,
        "total_processing_fee": 0,
        "total_refund": 0,
        "total_service_charge": 0,
        "total_tax": 2.75,
        "total_tip": 7,
        "type": "cash"
      }
    ],
    "title": "string",
    "total_amount": 275,
    "total_discount": 300,
    "total_refund": 0,
    "total_service_charge": 0,
    "total_tax": 275,
    "total_tip": 700,
    "version": "230320320320",
    "voided": false
  }'
```

`POST /pos/orders`

Create Order

> Body parameter

```json
{
  "closed_date": "2022-08-13",
  "currency": "USD",
  "customer_id": "12345",
  "customers": [
    {
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "middle_name": "D.",
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
  ],
  "discounts": [
    {
      "amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "scope": "order",
      "type": "percentage"
    }
  ],
  "employee_id": "12345",
  "fulfillments": [
    {
      "id": "12345",
      "pickup_details": {
        "auto_complete_duration": "P1W3D",
        "cancel_reason": "Not hungry",
        "canceled_at": "2016-09-04T23:59:33.123Z",
        "curbside_pickup_details": {
          "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
          "curbside_details": "string"
        },
        "expired_at": "2016-09-04T23:59:33.123Z",
        "expires_at": "2016-09-04T23:59:33.123Z",
        "is_curbside_pickup": true,
        "note": "Pickup in the back.",
        "picked_up_at": "2016-09-04T23:59:33.123Z",
        "pickup_at": "2016-09-04T23:59:33.123Z",
        "pickup_window_duration": "P1W3D",
        "placed_at": "2016-09-04T23:59:33.123Z",
        "prep_time_duration": "P1W3D",
        "ready_at": "2016-09-04T23:59:33.123Z",
        "recipient": {
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
          "customer_id": "12345",
          "display_name": "Elon Musk",
          "email": {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          },
          "phone_number": {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        },
        "rejected_at": "2016-09-04T23:59:33.123Z",
        "schedule_type": "scheduled"
      },
      "shipment_details": {},
      "status": "proposed",
      "type": "shipment"
    }
  ],
  "idempotency_key": "random_string",
  "line_items": [
    {
      "applied_discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "discount_id": "12345"
        }
      ],
      "applied_taxes": [
        {
          "amount": 27500,
          "currency": "USD",
          "tax_id": "sales-tax"
        }
      ],
      "item": {},
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "modifier_group_id": "123",
          "name": "New York Strip Steak - no cheese"
        }
      ],
      "name": "New York Strip Steak",
      "quantity": 1,
      "total_amount": 27500,
      "total_discount": 3000,
      "total_tax": 2000,
      "unit_price": 27500.5
    }
  ],
  "location_id": "12345",
  "merchant_id": "12345",
  "note": "string",
  "order_date": "2022-08-12",
  "order_number": "1F",
  "order_type_id": "12345",
  "payment_status": "open",
  "payments": [
    {
      "amount": 27500,
      "currency": "USD"
    }
  ],
  "reference_id": "my-order-001",
  "refunded": false,
  "refunds": [
    {
      "amount": 27500,
      "currency": "USD",
      "reason": "The reason for the refund being issued.",
      "status": "pending"
    }
  ],
  "seat": "23F",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "open",
  "table": "1F",
  "taxes": [
    {
      "amount": 27500,
      "auto_applied": true,
      "currency": "USD",
      "id": "state-sales-tax",
      "name": "State Sales Tax",
      "percentage": 15,
      "scope": "order",
      "type": "unknown"
    }
  ],
  "tenders": [
    {
      "amount": 27500,
      "buyer_tendered_cash_amount": 27500,
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      },
      "card_entry_method": "swiped",
      "card_status": "authorized",
      "change_back_cash_amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "note": "An optional note associated with the tender at the time of payment.",
      "percentage": 10,
      "total_amount": 27.5,
      "total_discount": 3,
      "total_processing_fee": 0,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 2.75,
      "total_tip": 7,
      "type": "cash"
    }
  ],
  "title": "string",
  "total_amount": 275,
  "total_discount": 300,
  "total_refund": 0,
  "total_service_charge": 0,
  "total_tax": 275,
  "total_tip": 700,
  "version": "230320320320",
  "voided": false
}
```

<h3 id="create-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Order](#schemaorder)|true|none|
|» closed_date|body|string(date) \| null|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» customer_id|body|string|false|none|
|» customers|body|[object]|false|none|
|» » emails|body|[[Email](#schemaemail)]|false|none|
|» » first_name|body|string \| null|false|none|
|» » id|body|string|false|none|
|» » last_name|body|string \| null|false|none|
|» » middle_name|body|string \| null|false|none|
|» » phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» discounts|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» employee_id|body|string|false|none|
|» fulfillments|body|[object]|false|none|
|» » id|body|string|false|none|
|» » pickup_details|body|object|false|none|
|» » » auto_complete_duration|body|string \| null|false|The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').|
|» » » cancel_reason|body|string \| null|false|A description of why the pickup was canceled.|
|» » » canceled_at|body|string(date-time)|false|Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » curbside_pickup_details|body|object|false|Specific details for curbside pickup.|
|» » » » buyer_arrived_at|body|string(date-time)|false|Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » » curbside_details|body|string|false|Specific details for curbside pickup, such as parking number and vehicle model.|
|» » » expired_at|body|string(date-time)|false|Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » expires_at|body|string(date-time)|false|Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.<br>If `expires_at` is not set, this pickup fulfillment is automatically accepted when <br>placed.|
|» » » is_curbside_pickup|body|boolean|false|If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.|
|» » » note|body|string|false|A note meant to provide additional instructions about the pickup<br>fulfillment displayed in the Square Point of Sale application and set by the API.|
|» » » picked_up_at|body|string(date-time)|false|Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » pickup_at|body|string(date-time)|false|The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., <br>"2016-09-04T23:59:33.123Z".<br><br>For fulfillments with the schedule type `ASAP`, this is automatically set<br>to the current time plus the expected duration to prepare the fulfillment.|
|» » » pickup_window_duration|body|string|false|The window of time in which the order should be picked up after the `pickup_at` timestamp.<br>Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an<br>informational guideline for merchants.|
|» » » placed_at|body|string(date-time)|false|Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » prep_time_duration|body|string|false|The duration of time it takes to prepare this fulfillment.<br>The duration must be in RFC 3339 format (for example, "P1W3D").|
|» » » ready_at|body|string(date-time)|false|Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » recipient|body|object|false|none|
|» » » » address|body|[Address](#schemaaddress)|false|none|
|» » » » customer_id|body|string|false|none|
|» » » » display_name|body|string|false|none|
|» » » » email|body|[Email](#schemaemail)|false|none|
|» » » » phone_number|body|[PhoneNumber](#schemaphonenumber)|false|none|
|» » » rejected_at|body|string(date-time)|false|Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » schedule_type|body|string|false|The schedule type of the pickup fulfillment.|
|» » shipment_details|body|object|false|none|
|» » status|body|string|false|The state of the fulfillment.|
|» » type|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» line_items|body|[object]|false|none|
|» » applied_discounts|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » discount_id|body|string|false|none|
|» » applied_taxes|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » tax_id|body|string|false|none|
|» » item|body|object|false|none|
|» » modifiers|body|[object]|false|Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts|
|» » » alternate_name|body|string|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » id|body|string|false|none|
|» » » modifier_group_id|body|string|false|none|
|» » » name|body|string|false|none|
|» » name|body|string|false|none|
|» » quantity|body|[Quantity](#schemaquantity)|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» location_id|body|string|true|none|
|» merchant_id|body|string|true|none|
|» note|body|string|false|A note with information about this order, may be printed on the order receipt and displayed in apps|
|» order_date|body|string(date) \| null|false|none|
|» order_number|body|string|false|none|
|» order_type_id|body|string|false|none|
|» payment_status|body|string|false|Is this order paid or not?|
|» payments|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» reference_id|body|string \| null|false|An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.|
|» refunded|body|boolean|false|none|
|» refunds|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » reason|body|string|false|none|
|» » status|body|string|false|none|
|» seat|body|string|false|none|
|» service_charges|body|[ServiceCharges](#schemaservicecharges)|false|Optional service charges or gratuity tip applied to the order.|
|» status|body|string|false|Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()|
|» table|body|string|false|none|
|» taxes|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » auto_applied|body|boolean|false|Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]()|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » id|body|string|false|none|
|» » name|body|string|false|The tax's name.|
|» » percentage|body|[Percentage](#schemapercentage)|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» tenders|body|[object]|false|none|
|» » amount|body|number|false|none|
|» » buyer_tendered_cash_amount|body|integer \| null|false|The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.|
|» » card|body|[PaymentCard](#schemapaymentcard)|false|A card's non-confidential details.|
|» » card_entry_method|body|string \| null|false|The entry method of the card. Only applicable when the tender type is card.|
|» » card_status|body|string \| null|false|The status of the card. Only applicable when the tender type is card.|
|» » change_back_cash_amount|body|integer \| null|false|The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » note|body|string|false|none|
|» » percentage|body|number|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_processing_fee|body|integer \| null|false|none|
|» » total_refund|body|integer \| null|false|none|
|» » total_service_charge|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » total_tip|body|integer \| null|false|none|
|» » type|body|string|false|none|
|» title|body|string|false|none|
|» total_amount|body|integer \| null|false|none|
|» total_discount|body|integer \| null|false|none|
|» total_refund|body|integer \| null|false|none|
|» total_service_charge|body|integer \| null|false|none|
|» total_tax|body|integer \| null|false|none|
|» total_tip|body|integer \| null|false|none|
|» version|body|[Version](#schemaversion)|false|none|
|» voided|body|boolean|false|none|

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
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|percentage|
|» » type|flat_fee|
|» » » schedule_type|scheduled|
|» » status|proposed|
|» » status|reserved|
|» » status|prepared|
|» » status|completed|
|» » status|cancelled|
|» » status|failed|
|» » status|other|
|» » type|pickup|
|» » type|shipment|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» payment_status|open|
|» payment_status|paid|
|» payment_status|refunded|
|» payment_status|credited|
|» payment_status|partially_paid|
|» payment_status|partially_refunded|
|» payment_status|unknown|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » status|pending|
|» » status|approved|
|» » status|rejected|
|» » status|failed|
|» status|open|
|» status|draft|
|» status|delivered|
|» status|delayed|
|» status|voided|
|» status|completed|
|» status|hidden|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|unknown|
|» » type|additive|
|» » type|inclusive|
|» » card_entry_method|evm|
|» » card_entry_method|swiped|
|» » card_entry_method|keyed|
|» » card_entry_method|on-file|
|» » card_entry_method|contactless|
|» » card_status|authorized|
|» » card_status|captured|
|» » card_status|failed|
|» » card_status|voided|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » type|cash|
|» » type|card|
|» » type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "orders",
  "service": "clover",
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

<h3 id="create-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Orders|[CreateOrderResponse](#schemacreateorderresponse)|
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
curl https://example.com/pos/orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/orders/{id}`

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
    "closed_date": "2022-08-13",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "customer_id": "12345",
    "customers": [
      {
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "middle_name": "D.",
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
    ],
    "discounts": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "10% off",
        "product_id": "12345",
        "scope": "order",
        "type": "percentage"
      }
    ],
    "employee_id": "12345",
    "fulfillments": [
      {
        "id": "12345",
        "pickup_details": {
          "accepted_at": "2020-09-30T07:43:32.000Z",
          "auto_complete_duration": "P1W3D",
          "cancel_reason": "Not hungry",
          "canceled_at": "2016-09-04T23:59:33.123Z",
          "curbside_pickup_details": {
            "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
            "curbside_details": "string"
          },
          "expired_at": "2016-09-04T23:59:33.123Z",
          "expires_at": "2016-09-04T23:59:33.123Z",
          "is_curbside_pickup": true,
          "note": "Pickup in the back.",
          "picked_up_at": "2016-09-04T23:59:33.123Z",
          "pickup_at": "2016-09-04T23:59:33.123Z",
          "pickup_window_duration": "P1W3D",
          "placed_at": "2016-09-04T23:59:33.123Z",
          "prep_time_duration": "P1W3D",
          "ready_at": "2016-09-04T23:59:33.123Z",
          "recipient": {
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
            "customer_id": "12345",
            "display_name": "Elon Musk",
            "email": {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            },
            "phone_number": {
              "area_code": "323",
              "country_code": "1",
              "extension": "105",
              "id": "12345",
              "number": "111-111-1111",
              "type": "primary"
            }
          },
          "rejected_at": "2016-09-04T23:59:33.123Z",
          "schedule_type": "scheduled"
        },
        "shipment_details": {},
        "status": "proposed",
        "type": "shipment"
      }
    ],
    "id": "12345",
    "idempotency_key": "random_string",
    "line_items": [
      {
        "applied_discounts": [
          {
            "amount": 27500,
            "currency": "USD",
            "discount_id": "12345",
            "id": "12345"
          }
        ],
        "applied_taxes": [
          {
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "tax_id": "sales-tax"
          }
        ],
        "id": "12345",
        "item": {
          "id": "12345"
        },
        "modifiers": [
          {
            "alternate_name": "Modifier New",
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "modifier_group_id": "123",
            "name": "New York Strip Steak - no cheese"
          }
        ],
        "name": "New York Strip Steak",
        "quantity": 1,
        "total_amount": 27500,
        "total_discount": 3000,
        "total_tax": 2000,
        "unit_price": 27500.5
      }
    ],
    "location_id": "12345",
    "merchant_id": "12345",
    "note": "string",
    "order_date": "2022-08-12",
    "order_number": "1F",
    "order_type_id": "12345",
    "payment_status": "open",
    "payments": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345"
      }
    ],
    "reference_id": "my-order-001",
    "refunded": false,
    "refunds": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "location_id": "12345",
        "reason": "The reason for the refund being issued.",
        "status": "pending",
        "tender_id": "12345",
        "transaction_id": "12345"
      }
    ],
    "seat": "23F",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "api",
    "status": "open",
    "table": "1F",
    "taxes": [
      {
        "amount": 27500,
        "auto_applied": true,
        "currency": "USD",
        "id": "state-sales-tax",
        "name": "State Sales Tax",
        "percentage": 15,
        "scope": "order",
        "type": "unknown"
      }
    ],
    "tenders": [
      {
        "amount": 27500,
        "buyer_tendered_cash_amount": 27500,
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "id": "12345",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        },
        "card_entry_method": "swiped",
        "card_status": "authorized",
        "change_back_cash_amount": 27500,
        "currency": "USD",
        "id": "12345",
        "location_id": "12345",
        "name": "10% off",
        "note": "An optional note associated with the tender at the time of payment.",
        "payment_id": "12345",
        "percentage": 10,
        "total_amount": 27.5,
        "total_discount": 3,
        "total_processing_fee": 0,
        "total_refund": 0,
        "total_service_charge": 0,
        "total_tax": 2.75,
        "total_tip": 7,
        "transaction_id": "12345",
        "type": "cash"
      }
    ],
    "title": "string",
    "total_amount": 275,
    "total_discount": 300,
    "total_refund": 0,
    "total_service_charge": 0,
    "total_tax": 275,
    "total_tip": 700,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "version": "230320320320",
    "voided": false,
    "voided_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "orders",
  "service": "clover",
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
|200|OK|Orders|[GetOrderResponse](#schemagetorderresponse)|
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

## Delete Order

<a id="opIdordersDelete"></a>

> Code samples

```bash
curl https://example.com/pos/orders/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/orders/{id}`

Delete Order

<h3 id="delete-order-parameters">Parameters</h3>

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
  "resource": "orders",
  "service": "clover",
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

<h3 id="delete-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Orders|[DeleteOrderResponse](#schemadeleteorderresponse)|
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

## Update Order

<a id="opIdordersUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/orders/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "closed_date": "2022-08-13",
    "currency": "USD",
    "customer_id": "12345",
    "customers": [
      {
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "middle_name": "D.",
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
    ],
    "discounts": [
      {
        "amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "scope": "order",
        "type": "percentage"
      }
    ],
    "employee_id": "12345",
    "fulfillments": [
      {
        "id": "12345",
        "pickup_details": {
          "auto_complete_duration": "P1W3D",
          "cancel_reason": "Not hungry",
          "canceled_at": "2016-09-04T23:59:33.123Z",
          "curbside_pickup_details": {
            "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
            "curbside_details": "string"
          },
          "expired_at": "2016-09-04T23:59:33.123Z",
          "expires_at": "2016-09-04T23:59:33.123Z",
          "is_curbside_pickup": true,
          "note": "Pickup in the back.",
          "picked_up_at": "2016-09-04T23:59:33.123Z",
          "pickup_at": "2016-09-04T23:59:33.123Z",
          "pickup_window_duration": "P1W3D",
          "placed_at": "2016-09-04T23:59:33.123Z",
          "prep_time_duration": "P1W3D",
          "ready_at": "2016-09-04T23:59:33.123Z",
          "recipient": {
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
            "customer_id": "12345",
            "display_name": "Elon Musk",
            "email": {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            },
            "phone_number": {
              "area_code": "323",
              "country_code": "1",
              "extension": "105",
              "id": "12345",
              "number": "111-111-1111",
              "type": "primary"
            }
          },
          "rejected_at": "2016-09-04T23:59:33.123Z",
          "schedule_type": "scheduled"
        },
        "shipment_details": {},
        "status": "proposed",
        "type": "shipment"
      }
    ],
    "idempotency_key": "random_string",
    "line_items": [
      {
        "applied_discounts": [
          {
            "amount": 27500,
            "currency": "USD",
            "discount_id": "12345"
          }
        ],
        "applied_taxes": [
          {
            "amount": 27500,
            "currency": "USD",
            "tax_id": "sales-tax"
          }
        ],
        "item": {},
        "modifiers": [
          {
            "alternate_name": "Modifier New",
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "modifier_group_id": "123",
            "name": "New York Strip Steak - no cheese"
          }
        ],
        "name": "New York Strip Steak",
        "quantity": 1,
        "total_amount": 27500,
        "total_discount": 3000,
        "total_tax": 2000,
        "unit_price": 27500.5
      }
    ],
    "location_id": "12345",
    "merchant_id": "12345",
    "note": "string",
    "order_date": "2022-08-12",
    "order_number": "1F",
    "order_type_id": "12345",
    "payment_status": "open",
    "payments": [
      {
        "amount": 27500,
        "currency": "USD"
      }
    ],
    "reference_id": "my-order-001",
    "refunded": false,
    "refunds": [
      {
        "amount": 27500,
        "currency": "USD",
        "reason": "The reason for the refund being issued.",
        "status": "pending"
      }
    ],
    "seat": "23F",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "open",
    "table": "1F",
    "taxes": [
      {
        "amount": 27500,
        "auto_applied": true,
        "currency": "USD",
        "id": "state-sales-tax",
        "name": "State Sales Tax",
        "percentage": 15,
        "scope": "order",
        "type": "unknown"
      }
    ],
    "tenders": [
      {
        "amount": 27500,
        "buyer_tendered_cash_amount": 27500,
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        },
        "card_entry_method": "swiped",
        "card_status": "authorized",
        "change_back_cash_amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "note": "An optional note associated with the tender at the time of payment.",
        "percentage": 10,
        "total_amount": 27.5,
        "total_discount": 3,
        "total_processing_fee": 0,
        "total_refund": 0,
        "total_service_charge": 0,
        "total_tax": 2.75,
        "total_tip": 7,
        "type": "cash"
      }
    ],
    "title": "string",
    "total_amount": 275,
    "total_discount": 300,
    "total_refund": 0,
    "total_service_charge": 0,
    "total_tax": 275,
    "total_tip": 700,
    "version": "230320320320",
    "voided": false
  }'
```

`PATCH /pos/orders/{id}`

Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).


> Body parameter

```json
{
  "closed_date": "2022-08-13",
  "currency": "USD",
  "customer_id": "12345",
  "customers": [
    {
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "middle_name": "D.",
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
  ],
  "discounts": [
    {
      "amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "scope": "order",
      "type": "percentage"
    }
  ],
  "employee_id": "12345",
  "fulfillments": [
    {
      "id": "12345",
      "pickup_details": {
        "auto_complete_duration": "P1W3D",
        "cancel_reason": "Not hungry",
        "canceled_at": "2016-09-04T23:59:33.123Z",
        "curbside_pickup_details": {
          "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
          "curbside_details": "string"
        },
        "expired_at": "2016-09-04T23:59:33.123Z",
        "expires_at": "2016-09-04T23:59:33.123Z",
        "is_curbside_pickup": true,
        "note": "Pickup in the back.",
        "picked_up_at": "2016-09-04T23:59:33.123Z",
        "pickup_at": "2016-09-04T23:59:33.123Z",
        "pickup_window_duration": "P1W3D",
        "placed_at": "2016-09-04T23:59:33.123Z",
        "prep_time_duration": "P1W3D",
        "ready_at": "2016-09-04T23:59:33.123Z",
        "recipient": {
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
          "customer_id": "12345",
          "display_name": "Elon Musk",
          "email": {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          },
          "phone_number": {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        },
        "rejected_at": "2016-09-04T23:59:33.123Z",
        "schedule_type": "scheduled"
      },
      "shipment_details": {},
      "status": "proposed",
      "type": "shipment"
    }
  ],
  "idempotency_key": "random_string",
  "line_items": [
    {
      "applied_discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "discount_id": "12345"
        }
      ],
      "applied_taxes": [
        {
          "amount": 27500,
          "currency": "USD",
          "tax_id": "sales-tax"
        }
      ],
      "item": {},
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "modifier_group_id": "123",
          "name": "New York Strip Steak - no cheese"
        }
      ],
      "name": "New York Strip Steak",
      "quantity": 1,
      "total_amount": 27500,
      "total_discount": 3000,
      "total_tax": 2000,
      "unit_price": 27500.5
    }
  ],
  "location_id": "12345",
  "merchant_id": "12345",
  "note": "string",
  "order_date": "2022-08-12",
  "order_number": "1F",
  "order_type_id": "12345",
  "payment_status": "open",
  "payments": [
    {
      "amount": 27500,
      "currency": "USD"
    }
  ],
  "reference_id": "my-order-001",
  "refunded": false,
  "refunds": [
    {
      "amount": 27500,
      "currency": "USD",
      "reason": "The reason for the refund being issued.",
      "status": "pending"
    }
  ],
  "seat": "23F",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "open",
  "table": "1F",
  "taxes": [
    {
      "amount": 27500,
      "auto_applied": true,
      "currency": "USD",
      "id": "state-sales-tax",
      "name": "State Sales Tax",
      "percentage": 15,
      "scope": "order",
      "type": "unknown"
    }
  ],
  "tenders": [
    {
      "amount": 27500,
      "buyer_tendered_cash_amount": 27500,
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      },
      "card_entry_method": "swiped",
      "card_status": "authorized",
      "change_back_cash_amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "note": "An optional note associated with the tender at the time of payment.",
      "percentage": 10,
      "total_amount": 27.5,
      "total_discount": 3,
      "total_processing_fee": 0,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 2.75,
      "total_tip": 7,
      "type": "cash"
    }
  ],
  "title": "string",
  "total_amount": 275,
  "total_discount": 300,
  "total_refund": 0,
  "total_service_charge": 0,
  "total_tax": 275,
  "total_tip": 700,
  "version": "230320320320",
  "voided": false
}
```

<h3 id="update-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Order](#schemaorder)|true|none|
|» closed_date|body|string(date) \| null|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» customer_id|body|string|false|none|
|» customers|body|[object]|false|none|
|» » emails|body|[[Email](#schemaemail)]|false|none|
|» » first_name|body|string \| null|false|none|
|» » id|body|string|false|none|
|» » last_name|body|string \| null|false|none|
|» » middle_name|body|string \| null|false|none|
|» » phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» discounts|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» employee_id|body|string|false|none|
|» fulfillments|body|[object]|false|none|
|» » id|body|string|false|none|
|» » pickup_details|body|object|false|none|
|» » » auto_complete_duration|body|string \| null|false|The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').|
|» » » cancel_reason|body|string \| null|false|A description of why the pickup was canceled.|
|» » » canceled_at|body|string(date-time)|false|Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » curbside_pickup_details|body|object|false|Specific details for curbside pickup.|
|» » » » buyer_arrived_at|body|string(date-time)|false|Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » » curbside_details|body|string|false|Specific details for curbside pickup, such as parking number and vehicle model.|
|» » » expired_at|body|string(date-time)|false|Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » expires_at|body|string(date-time)|false|Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.<br>If `expires_at` is not set, this pickup fulfillment is automatically accepted when <br>placed.|
|» » » is_curbside_pickup|body|boolean|false|If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.|
|» » » note|body|string|false|A note meant to provide additional instructions about the pickup<br>fulfillment displayed in the Square Point of Sale application and set by the API.|
|» » » picked_up_at|body|string(date-time)|false|Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » pickup_at|body|string(date-time)|false|The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., <br>"2016-09-04T23:59:33.123Z".<br><br>For fulfillments with the schedule type `ASAP`, this is automatically set<br>to the current time plus the expected duration to prepare the fulfillment.|
|» » » pickup_window_duration|body|string|false|The window of time in which the order should be picked up after the `pickup_at` timestamp.<br>Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an<br>informational guideline for merchants.|
|» » » placed_at|body|string(date-time)|false|Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » prep_time_duration|body|string|false|The duration of time it takes to prepare this fulfillment.<br>The duration must be in RFC 3339 format (for example, "P1W3D").|
|» » » ready_at|body|string(date-time)|false|Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » recipient|body|object|false|none|
|» » » » address|body|[Address](#schemaaddress)|false|none|
|» » » » customer_id|body|string|false|none|
|» » » » display_name|body|string|false|none|
|» » » » email|body|[Email](#schemaemail)|false|none|
|» » » » phone_number|body|[PhoneNumber](#schemaphonenumber)|false|none|
|» » » rejected_at|body|string(date-time)|false|Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » schedule_type|body|string|false|The schedule type of the pickup fulfillment.|
|» » shipment_details|body|object|false|none|
|» » status|body|string|false|The state of the fulfillment.|
|» » type|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» line_items|body|[object]|false|none|
|» » applied_discounts|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » discount_id|body|string|false|none|
|» » applied_taxes|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » tax_id|body|string|false|none|
|» » item|body|object|false|none|
|» » modifiers|body|[object]|false|Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts|
|» » » alternate_name|body|string|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » id|body|string|false|none|
|» » » modifier_group_id|body|string|false|none|
|» » » name|body|string|false|none|
|» » name|body|string|false|none|
|» » quantity|body|[Quantity](#schemaquantity)|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» location_id|body|string|true|none|
|» merchant_id|body|string|true|none|
|» note|body|string|false|A note with information about this order, may be printed on the order receipt and displayed in apps|
|» order_date|body|string(date) \| null|false|none|
|» order_number|body|string|false|none|
|» order_type_id|body|string|false|none|
|» payment_status|body|string|false|Is this order paid or not?|
|» payments|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» reference_id|body|string \| null|false|An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.|
|» refunded|body|boolean|false|none|
|» refunds|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » reason|body|string|false|none|
|» » status|body|string|false|none|
|» seat|body|string|false|none|
|» service_charges|body|[ServiceCharges](#schemaservicecharges)|false|Optional service charges or gratuity tip applied to the order.|
|» status|body|string|false|Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()|
|» table|body|string|false|none|
|» taxes|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » auto_applied|body|boolean|false|Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]()|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » id|body|string|false|none|
|» » name|body|string|false|The tax's name.|
|» » percentage|body|[Percentage](#schemapercentage)|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» tenders|body|[object]|false|none|
|» » amount|body|number|false|none|
|» » buyer_tendered_cash_amount|body|integer \| null|false|The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.|
|» » card|body|[PaymentCard](#schemapaymentcard)|false|A card's non-confidential details.|
|» » card_entry_method|body|string \| null|false|The entry method of the card. Only applicable when the tender type is card.|
|» » card_status|body|string \| null|false|The status of the card. Only applicable when the tender type is card.|
|» » change_back_cash_amount|body|integer \| null|false|The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » note|body|string|false|none|
|» » percentage|body|number|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_processing_fee|body|integer \| null|false|none|
|» » total_refund|body|integer \| null|false|none|
|» » total_service_charge|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » total_tip|body|integer \| null|false|none|
|» » type|body|string|false|none|
|» title|body|string|false|none|
|» total_amount|body|integer \| null|false|none|
|» total_discount|body|integer \| null|false|none|
|» total_refund|body|integer \| null|false|none|
|» total_service_charge|body|integer \| null|false|none|
|» total_tax|body|integer \| null|false|none|
|» total_tip|body|integer \| null|false|none|
|» version|body|[Version](#schemaversion)|false|none|
|» voided|body|boolean|false|none|

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
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|percentage|
|» » type|flat_fee|
|» » » schedule_type|scheduled|
|» » status|proposed|
|» » status|reserved|
|» » status|prepared|
|» » status|completed|
|» » status|cancelled|
|» » status|failed|
|» » status|other|
|» » type|pickup|
|» » type|shipment|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» payment_status|open|
|» payment_status|paid|
|» payment_status|refunded|
|» payment_status|credited|
|» payment_status|partially_paid|
|» payment_status|partially_refunded|
|» payment_status|unknown|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » status|pending|
|» » status|approved|
|» » status|rejected|
|» » status|failed|
|» status|open|
|» status|draft|
|» status|delivered|
|» status|delayed|
|» status|voided|
|» status|completed|
|» status|hidden|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|unknown|
|» » type|additive|
|» » type|inclusive|
|» » card_entry_method|evm|
|» » card_entry_method|swiped|
|» » card_entry_method|keyed|
|» » card_entry_method|on-file|
|» » card_entry_method|contactless|
|» » card_status|authorized|
|» » card_status|captured|
|» » card_status|failed|
|» » card_status|voided|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » type|cash|
|» » type|card|
|» » type|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "orders",
  "service": "clover",
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

<h3 id="update-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Orders|[UpdateOrderResponse](#schemaupdateorderresponse)|
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

## Pay Order

<a id="opIdordersPay"></a>

> Code samples

```bash
curl https://example.com/pos/orders/string/pay \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "closed_date": "2022-08-13",
    "currency": "USD",
    "customer_id": "12345",
    "customers": [
      {
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "middle_name": "D.",
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
    ],
    "discounts": [
      {
        "amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "scope": "order",
        "type": "percentage"
      }
    ],
    "employee_id": "12345",
    "fulfillments": [
      {
        "id": "12345",
        "pickup_details": {
          "auto_complete_duration": "P1W3D",
          "cancel_reason": "Not hungry",
          "canceled_at": "2016-09-04T23:59:33.123Z",
          "curbside_pickup_details": {
            "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
            "curbside_details": "string"
          },
          "expired_at": "2016-09-04T23:59:33.123Z",
          "expires_at": "2016-09-04T23:59:33.123Z",
          "is_curbside_pickup": true,
          "note": "Pickup in the back.",
          "picked_up_at": "2016-09-04T23:59:33.123Z",
          "pickup_at": "2016-09-04T23:59:33.123Z",
          "pickup_window_duration": "P1W3D",
          "placed_at": "2016-09-04T23:59:33.123Z",
          "prep_time_duration": "P1W3D",
          "ready_at": "2016-09-04T23:59:33.123Z",
          "recipient": {
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
            "customer_id": "12345",
            "display_name": "Elon Musk",
            "email": {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            },
            "phone_number": {
              "area_code": "323",
              "country_code": "1",
              "extension": "105",
              "id": "12345",
              "number": "111-111-1111",
              "type": "primary"
            }
          },
          "rejected_at": "2016-09-04T23:59:33.123Z",
          "schedule_type": "scheduled"
        },
        "shipment_details": {},
        "status": "proposed",
        "type": "shipment"
      }
    ],
    "idempotency_key": "random_string",
    "line_items": [
      {
        "applied_discounts": [
          {
            "amount": 27500,
            "currency": "USD",
            "discount_id": "12345"
          }
        ],
        "applied_taxes": [
          {
            "amount": 27500,
            "currency": "USD",
            "tax_id": "sales-tax"
          }
        ],
        "item": {},
        "modifiers": [
          {
            "alternate_name": "Modifier New",
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "modifier_group_id": "123",
            "name": "New York Strip Steak - no cheese"
          }
        ],
        "name": "New York Strip Steak",
        "quantity": 1,
        "total_amount": 27500,
        "total_discount": 3000,
        "total_tax": 2000,
        "unit_price": 27500.5
      }
    ],
    "location_id": "12345",
    "merchant_id": "12345",
    "note": "string",
    "order_date": "2022-08-12",
    "order_number": "1F",
    "order_type_id": "12345",
    "payment_status": "open",
    "payments": [
      {
        "amount": 27500,
        "currency": "USD"
      }
    ],
    "reference_id": "my-order-001",
    "refunded": false,
    "refunds": [
      {
        "amount": 27500,
        "currency": "USD",
        "reason": "The reason for the refund being issued.",
        "status": "pending"
      }
    ],
    "seat": "23F",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "open",
    "table": "1F",
    "taxes": [
      {
        "amount": 27500,
        "auto_applied": true,
        "currency": "USD",
        "id": "state-sales-tax",
        "name": "State Sales Tax",
        "percentage": 15,
        "scope": "order",
        "type": "unknown"
      }
    ],
    "tenders": [
      {
        "amount": 27500,
        "buyer_tendered_cash_amount": 27500,
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        },
        "card_entry_method": "swiped",
        "card_status": "authorized",
        "change_back_cash_amount": 27500,
        "currency": "USD",
        "name": "10% off",
        "note": "An optional note associated with the tender at the time of payment.",
        "percentage": 10,
        "total_amount": 27.5,
        "total_discount": 3,
        "total_processing_fee": 0,
        "total_refund": 0,
        "total_service_charge": 0,
        "total_tax": 2.75,
        "total_tip": 7,
        "type": "cash"
      }
    ],
    "title": "string",
    "total_amount": 275,
    "total_discount": 300,
    "total_refund": 0,
    "total_service_charge": 0,
    "total_tax": 275,
    "total_tip": 700,
    "version": "230320320320",
    "voided": false
  }'
```

`POST /pos/orders/{id}/pay`

Pay Order

> Body parameter

```json
{
  "closed_date": "2022-08-13",
  "currency": "USD",
  "customer_id": "12345",
  "customers": [
    {
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "middle_name": "D.",
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
  ],
  "discounts": [
    {
      "amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "scope": "order",
      "type": "percentage"
    }
  ],
  "employee_id": "12345",
  "fulfillments": [
    {
      "id": "12345",
      "pickup_details": {
        "auto_complete_duration": "P1W3D",
        "cancel_reason": "Not hungry",
        "canceled_at": "2016-09-04T23:59:33.123Z",
        "curbside_pickup_details": {
          "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
          "curbside_details": "string"
        },
        "expired_at": "2016-09-04T23:59:33.123Z",
        "expires_at": "2016-09-04T23:59:33.123Z",
        "is_curbside_pickup": true,
        "note": "Pickup in the back.",
        "picked_up_at": "2016-09-04T23:59:33.123Z",
        "pickup_at": "2016-09-04T23:59:33.123Z",
        "pickup_window_duration": "P1W3D",
        "placed_at": "2016-09-04T23:59:33.123Z",
        "prep_time_duration": "P1W3D",
        "ready_at": "2016-09-04T23:59:33.123Z",
        "recipient": {
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
          "customer_id": "12345",
          "display_name": "Elon Musk",
          "email": {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          },
          "phone_number": {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        },
        "rejected_at": "2016-09-04T23:59:33.123Z",
        "schedule_type": "scheduled"
      },
      "shipment_details": {},
      "status": "proposed",
      "type": "shipment"
    }
  ],
  "idempotency_key": "random_string",
  "line_items": [
    {
      "applied_discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "discount_id": "12345"
        }
      ],
      "applied_taxes": [
        {
          "amount": 27500,
          "currency": "USD",
          "tax_id": "sales-tax"
        }
      ],
      "item": {},
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "modifier_group_id": "123",
          "name": "New York Strip Steak - no cheese"
        }
      ],
      "name": "New York Strip Steak",
      "quantity": 1,
      "total_amount": 27500,
      "total_discount": 3000,
      "total_tax": 2000,
      "unit_price": 27500.5
    }
  ],
  "location_id": "12345",
  "merchant_id": "12345",
  "note": "string",
  "order_date": "2022-08-12",
  "order_number": "1F",
  "order_type_id": "12345",
  "payment_status": "open",
  "payments": [
    {
      "amount": 27500,
      "currency": "USD"
    }
  ],
  "reference_id": "my-order-001",
  "refunded": false,
  "refunds": [
    {
      "amount": 27500,
      "currency": "USD",
      "reason": "The reason for the refund being issued.",
      "status": "pending"
    }
  ],
  "seat": "23F",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "open",
  "table": "1F",
  "taxes": [
    {
      "amount": 27500,
      "auto_applied": true,
      "currency": "USD",
      "id": "state-sales-tax",
      "name": "State Sales Tax",
      "percentage": 15,
      "scope": "order",
      "type": "unknown"
    }
  ],
  "tenders": [
    {
      "amount": 27500,
      "buyer_tendered_cash_amount": 27500,
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      },
      "card_entry_method": "swiped",
      "card_status": "authorized",
      "change_back_cash_amount": 27500,
      "currency": "USD",
      "name": "10% off",
      "note": "An optional note associated with the tender at the time of payment.",
      "percentage": 10,
      "total_amount": 27.5,
      "total_discount": 3,
      "total_processing_fee": 0,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 2.75,
      "total_tip": 7,
      "type": "cash"
    }
  ],
  "title": "string",
  "total_amount": 275,
  "total_discount": 300,
  "total_refund": 0,
  "total_service_charge": 0,
  "total_tax": 275,
  "total_tip": 700,
  "version": "230320320320",
  "voided": false
}
```

<h3 id="pay-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|
|body|body|[Order](#schemaorder)|true|none|
|» closed_date|body|string(date) \| null|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» customer_id|body|string|false|none|
|» customers|body|[object]|false|none|
|» » emails|body|[[Email](#schemaemail)]|false|none|
|» » first_name|body|string \| null|false|none|
|» » id|body|string|false|none|
|» » last_name|body|string \| null|false|none|
|» » middle_name|body|string \| null|false|none|
|» » phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» discounts|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» employee_id|body|string|false|none|
|» fulfillments|body|[object]|false|none|
|» » id|body|string|false|none|
|» » pickup_details|body|object|false|none|
|» » » auto_complete_duration|body|string \| null|false|The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').|
|» » » cancel_reason|body|string \| null|false|A description of why the pickup was canceled.|
|» » » canceled_at|body|string(date-time)|false|Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » curbside_pickup_details|body|object|false|Specific details for curbside pickup.|
|» » » » buyer_arrived_at|body|string(date-time)|false|Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » » curbside_details|body|string|false|Specific details for curbside pickup, such as parking number and vehicle model.|
|» » » expired_at|body|string(date-time)|false|Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » expires_at|body|string(date-time)|false|Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.<br>If `expires_at` is not set, this pickup fulfillment is automatically accepted when <br>placed.|
|» » » is_curbside_pickup|body|boolean|false|If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.|
|» » » note|body|string|false|A note meant to provide additional instructions about the pickup<br>fulfillment displayed in the Square Point of Sale application and set by the API.|
|» » » picked_up_at|body|string(date-time)|false|Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » pickup_at|body|string(date-time)|false|The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., <br>"2016-09-04T23:59:33.123Z".<br><br>For fulfillments with the schedule type `ASAP`, this is automatically set<br>to the current time plus the expected duration to prepare the fulfillment.|
|» » » pickup_window_duration|body|string|false|The window of time in which the order should be picked up after the `pickup_at` timestamp.<br>Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an<br>informational guideline for merchants.|
|» » » placed_at|body|string(date-time)|false|Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » prep_time_duration|body|string|false|The duration of time it takes to prepare this fulfillment.<br>The duration must be in RFC 3339 format (for example, "P1W3D").|
|» » » ready_at|body|string(date-time)|false|Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » recipient|body|object|false|none|
|» » » » address|body|[Address](#schemaaddress)|false|none|
|» » » » customer_id|body|string|false|none|
|» » » » display_name|body|string|false|none|
|» » » » email|body|[Email](#schemaemail)|false|none|
|» » » » phone_number|body|[PhoneNumber](#schemaphonenumber)|false|none|
|» » » rejected_at|body|string(date-time)|false|Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z").|
|» » » schedule_type|body|string|false|The schedule type of the pickup fulfillment.|
|» » shipment_details|body|object|false|none|
|» » status|body|string|false|The state of the fulfillment.|
|» » type|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» line_items|body|[object]|false|none|
|» » applied_discounts|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » discount_id|body|string|false|none|
|» » applied_taxes|body|[object]|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » tax_id|body|string|false|none|
|» » item|body|object|false|none|
|» » modifiers|body|[object]|false|Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts|
|» » » alternate_name|body|string|false|none|
|» » » amount|body|integer|false|none|
|» » » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » » id|body|string|false|none|
|» » » modifier_group_id|body|string|false|none|
|» » » name|body|string|false|none|
|» » name|body|string|false|none|
|» » quantity|body|[Quantity](#schemaquantity)|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » unit_price|body|[UnitPrice](#schemaunitprice)|false|none|
|» location_id|body|string|true|none|
|» merchant_id|body|string|true|none|
|» note|body|string|false|A note with information about this order, may be printed on the order receipt and displayed in apps|
|» order_date|body|string(date) \| null|false|none|
|» order_number|body|string|false|none|
|» order_type_id|body|string|false|none|
|» payment_status|body|string|false|Is this order paid or not?|
|» payments|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» reference_id|body|string \| null|false|An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.|
|» refunded|body|boolean|false|none|
|» refunds|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » reason|body|string|false|none|
|» » status|body|string|false|none|
|» seat|body|string|false|none|
|» service_charges|body|[ServiceCharges](#schemaservicecharges)|false|Optional service charges or gratuity tip applied to the order.|
|» status|body|string|false|Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()|
|» table|body|string|false|none|
|» taxes|body|[object]|false|none|
|» » amount|body|integer|false|none|
|» » auto_applied|body|boolean|false|Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]()|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » id|body|string|false|none|
|» » name|body|string|false|The tax's name.|
|» » percentage|body|[Percentage](#schemapercentage)|false|none|
|» » scope|body|string|false|none|
|» » type|body|string|false|none|
|» tenders|body|[object]|false|none|
|» » amount|body|number|false|none|
|» » buyer_tendered_cash_amount|body|integer \| null|false|The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.|
|» » card|body|[PaymentCard](#schemapaymentcard)|false|A card's non-confidential details.|
|» » card_entry_method|body|string \| null|false|The entry method of the card. Only applicable when the tender type is card.|
|» » card_status|body|string \| null|false|The status of the card. Only applicable when the tender type is card.|
|» » change_back_cash_amount|body|integer \| null|false|The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » name|body|string|false|none|
|» » note|body|string|false|none|
|» » percentage|body|number|false|none|
|» » total_amount|body|integer \| null|false|none|
|» » total_discount|body|integer \| null|false|none|
|» » total_processing_fee|body|integer \| null|false|none|
|» » total_refund|body|integer \| null|false|none|
|» » total_service_charge|body|integer \| null|false|none|
|» » total_tax|body|integer \| null|false|none|
|» » total_tip|body|integer \| null|false|none|
|» » type|body|string|false|none|
|» title|body|string|false|none|
|» total_amount|body|integer \| null|false|none|
|» total_discount|body|integer \| null|false|none|
|» total_refund|body|integer \| null|false|none|
|» total_service_charge|body|integer \| null|false|none|
|» total_tax|body|integer \| null|false|none|
|» total_tip|body|integer \| null|false|none|
|» version|body|[Version](#schemaversion)|false|none|
|» voided|body|boolean|false|none|

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
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|percentage|
|» » type|flat_fee|
|» » » schedule_type|scheduled|
|» » status|proposed|
|» » status|reserved|
|» » status|prepared|
|» » status|completed|
|» » status|cancelled|
|» » status|failed|
|» » status|other|
|» » type|pickup|
|» » type|shipment|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» » » currency|UNKNOWN_CURRENCY|
|» » » currency|AED|
|» » » currency|AFN|
|» » » currency|ALL|
|» » » currency|AMD|
|» » » currency|ANG|
|» » » currency|AOA|
|» » » currency|ARS|
|» » » currency|AUD|
|» » » currency|AWG|
|» » » currency|AZN|
|» » » currency|BAM|
|» » » currency|BBD|
|» » » currency|BDT|
|» » » currency|BGN|
|» » » currency|BHD|
|» » » currency|BIF|
|» » » currency|BMD|
|» » » currency|BND|
|» » » currency|BOB|
|» » » currency|BOV|
|» » » currency|BRL|
|» » » currency|BSD|
|» » » currency|BTN|
|» » » currency|BWP|
|» » » currency|BYR|
|» » » currency|BZD|
|» » » currency|CAD|
|» » » currency|CDF|
|» » » currency|CHE|
|» » » currency|CHF|
|» » » currency|CHW|
|» » » currency|CLF|
|» » » currency|CLP|
|» » » currency|CNY|
|» » » currency|COP|
|» » » currency|COU|
|» » » currency|CRC|
|» » » currency|CUC|
|» » » currency|CUP|
|» » » currency|CVE|
|» » » currency|CZK|
|» » » currency|DJF|
|» » » currency|DKK|
|» » » currency|DOP|
|» » » currency|DZD|
|» » » currency|EGP|
|» » » currency|ERN|
|» » » currency|ETB|
|» » » currency|EUR|
|» » » currency|FJD|
|» » » currency|FKP|
|» » » currency|GBP|
|» » » currency|GEL|
|» » » currency|GHS|
|» » » currency|GIP|
|» » » currency|GMD|
|» » » currency|GNF|
|» » » currency|GTQ|
|» » » currency|GYD|
|» » » currency|HKD|
|» » » currency|HNL|
|» » » currency|HRK|
|» » » currency|HTG|
|» » » currency|HUF|
|» » » currency|IDR|
|» » » currency|ILS|
|» » » currency|INR|
|» » » currency|IQD|
|» » » currency|IRR|
|» » » currency|ISK|
|» » » currency|JMD|
|» » » currency|JOD|
|» » » currency|JPY|
|» » » currency|KES|
|» » » currency|KGS|
|» » » currency|KHR|
|» » » currency|KMF|
|» » » currency|KPW|
|» » » currency|KRW|
|» » » currency|KWD|
|» » » currency|KYD|
|» » » currency|KZT|
|» » » currency|LAK|
|» » » currency|LBP|
|» » » currency|LKR|
|» » » currency|LRD|
|» » » currency|LSL|
|» » » currency|LTL|
|» » » currency|LVL|
|» » » currency|LYD|
|» » » currency|MAD|
|» » » currency|MDL|
|» » » currency|MGA|
|» » » currency|MKD|
|» » » currency|MMK|
|» » » currency|MNT|
|» » » currency|MOP|
|» » » currency|MRO|
|» » » currency|MUR|
|» » » currency|MVR|
|» » » currency|MWK|
|» » » currency|MXN|
|» » » currency|MXV|
|» » » currency|MYR|
|» » » currency|MZN|
|» » » currency|NAD|
|» » » currency|NGN|
|» » » currency|NIO|
|» » » currency|NOK|
|» » » currency|NPR|
|» » » currency|NZD|
|» » » currency|OMR|
|» » » currency|PAB|
|» » » currency|PEN|
|» » » currency|PGK|
|» » » currency|PHP|
|» » » currency|PKR|
|» » » currency|PLN|
|» » » currency|PYG|
|» » » currency|QAR|
|» » » currency|RON|
|» » » currency|RSD|
|» » » currency|RUB|
|» » » currency|RWF|
|» » » currency|SAR|
|» » » currency|SBD|
|» » » currency|SCR|
|» » » currency|SDG|
|» » » currency|SEK|
|» » » currency|SGD|
|» » » currency|SHP|
|» » » currency|SLL|
|» » » currency|SOS|
|» » » currency|SRD|
|» » » currency|SSP|
|» » » currency|STD|
|» » » currency|SVC|
|» » » currency|SYP|
|» » » currency|SZL|
|» » » currency|THB|
|» » » currency|TJS|
|» » » currency|TMT|
|» » » currency|TND|
|» » » currency|TOP|
|» » » currency|TRC|
|» » » currency|TRY|
|» » » currency|TTD|
|» » » currency|TWD|
|» » » currency|TZS|
|» » » currency|UAH|
|» » » currency|UGX|
|» » » currency|USD|
|» » » currency|USN|
|» » » currency|USS|
|» » » currency|UYI|
|» » » currency|UYU|
|» » » currency|UZS|
|» » » currency|VEF|
|» » » currency|VND|
|» » » currency|VUV|
|» » » currency|WST|
|» » » currency|XAF|
|» » » currency|XAG|
|» » » currency|XAU|
|» » » currency|XBA|
|» » » currency|XBB|
|» » » currency|XBC|
|» » » currency|XBD|
|» » » currency|XCD|
|» » » currency|XDR|
|» » » currency|XOF|
|» » » currency|XPD|
|» » » currency|XPF|
|» » » currency|XPT|
|» » » currency|XTS|
|» » » currency|XXX|
|» » » currency|YER|
|» » » currency|ZAR|
|» » » currency|ZMK|
|» » » currency|ZMW|
|» » » currency|BTC|
|» » » currency|ETH|
|» payment_status|open|
|» payment_status|paid|
|» payment_status|refunded|
|» payment_status|credited|
|» payment_status|partially_paid|
|» payment_status|partially_refunded|
|» payment_status|unknown|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » status|pending|
|» » status|approved|
|» » status|rejected|
|» » status|failed|
|» status|open|
|» status|draft|
|» status|delivered|
|» status|delayed|
|» status|voided|
|» status|completed|
|» status|hidden|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » scope|order|
|» » scope|line_item|
|» » type|unknown|
|» » type|additive|
|» » type|inclusive|
|» » card_entry_method|evm|
|» » card_entry_method|swiped|
|» » card_entry_method|keyed|
|» » card_entry_method|on-file|
|» » card_entry_method|contactless|
|» » card_status|authorized|
|» » card_status|captured|
|» » card_status|failed|
|» » card_status|voided|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» » type|cash|
|» » type|card|
|» » type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "orders",
  "service": "clover",
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

<h3 id="pay-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Orders|[CreateOrderResponse](#schemacreateorderresponse)|
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

<h1 id="pos-api-payments">Payments</h1>

## List Payments

<a id="opIdpaymentsAll"></a>

> Code samples

```bash
curl https://example.com/pos/payments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/payments`

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
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "amount": 27.5,
      "app_fee": 3,
      "approved": 37.5,
      "bank_account": {
        "account_ownership_type": "string",
        "ach_details": {
          "account_number_suffix": "stri",
          "account_type": "string",
          "routing_number": "string"
        },
        "bank_name": "string",
        "country": "US",
        "fingerprint": "string",
        "statement_description": "string",
        "transfer_type": "string"
      },
      "card_details": {
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "id": "12345",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        }
      },
      "cash": {
        "amount": null,
        "charge_back_amount": null
      },
      "change_back_cash_amount": 20,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "customer_id": "12345",
      "device_id": "12345",
      "employee_id": "12345",
      "external_details": {
        "source": "string",
        "source_fee_amount": 2.5,
        "source_id": "string",
        "type": "check"
      },
      "external_payment_id": "12345",
      "id": "12345",
      "idempotency_key": "random_string",
      "location_id": "12345",
      "merchant_id": "12345",
      "order_id": "12345",
      "processing_fees": [
        {
          "amount": 1.05,
          "effective_at": "2020-09-30T07:43:32.000Z",
          "processing_type": "initial"
        }
      ],
      "refunded": 37.5,
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "source": "external",
      "source_id": "12345",
      "status": "approved",
      "tax": 20,
      "tender_id": "12345",
      "tip": 7,
      "total": 37.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "wallet": {
        "status": "authorized"
      }
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
  "resource": "PosPayments",
  "service": "square",
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
|200|OK|PosPayments|[GetPosPaymentsResponse](#schemagetpospaymentsresponse)|
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
curl https://example.com/pos/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "amount": 27.5,
    "app_fee": 3,
    "approved": 37.5,
    "bank_account": {
      "account_ownership_type": "string",
      "ach_details": {
        "account_number_suffix": "stri",
        "account_type": "string",
        "routing_number": "string"
      },
      "bank_name": "string",
      "country": "US",
      "fingerprint": "string",
      "statement_description": "string",
      "transfer_type": "string"
    },
    "card_details": {
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      }
    },
    "cash": {
      "amount": null,
      "charge_back_amount": null
    },
    "change_back_cash_amount": 20,
    "currency": "USD",
    "customer_id": "12345",
    "device_id": "12345",
    "employee_id": "12345",
    "external_details": {
      "source": "string",
      "source_fee_amount": 2.5,
      "source_id": "string",
      "type": "check"
    },
    "external_payment_id": "12345",
    "idempotency_key": "random_string",
    "location_id": "12345",
    "merchant_id": "12345",
    "order_id": "12345",
    "processing_fees": [
      {
        "amount": 1.05,
        "effective_at": "2020-09-30T07:43:32.000Z",
        "processing_type": "initial"
      }
    ],
    "refunded": 37.5,
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "external",
    "source_id": "12345",
    "status": "approved",
    "tax": 20,
    "tender_id": "12345",
    "tip": 7,
    "total": 37.5,
    "wallet": {
      "status": "authorized"
    }
  }'
```

`POST /pos/payments`

Create Payment

> Body parameter

```json
{
  "amount": 27.5,
  "app_fee": 3,
  "approved": 37.5,
  "bank_account": {
    "account_ownership_type": "string",
    "ach_details": {
      "account_number_suffix": "stri",
      "account_type": "string",
      "routing_number": "string"
    },
    "bank_name": "string",
    "country": "US",
    "fingerprint": "string",
    "statement_description": "string",
    "transfer_type": "string"
  },
  "card_details": {
    "card": {
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
      "bin": "41111",
      "card_brand": "visa",
      "card_type": "credit",
      "cardholder_name": "John Doe",
      "customer_id": "12345",
      "enabled": true,
      "exp_month": 1,
      "exp_year": 2022,
      "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
      "last_4": "The last 4 digits of the card number.",
      "merchant_id": "12345",
      "prepaid_type": "prepaid",
      "reference_id": "card-001",
      "version": "230320320320"
    }
  },
  "cash": {
    "amount": null,
    "charge_back_amount": null
  },
  "change_back_cash_amount": 20,
  "currency": "USD",
  "customer_id": "12345",
  "device_id": "12345",
  "employee_id": "12345",
  "external_details": {
    "source": "string",
    "source_fee_amount": 2.5,
    "source_id": "string",
    "type": "check"
  },
  "external_payment_id": "12345",
  "idempotency_key": "random_string",
  "location_id": "12345",
  "merchant_id": "12345",
  "order_id": "12345",
  "processing_fees": [
    {
      "amount": 1.05,
      "effective_at": "2020-09-30T07:43:32.000Z",
      "processing_type": "initial"
    }
  ],
  "refunded": 37.5,
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "source": "external",
  "source_id": "12345",
  "status": "approved",
  "tax": 20,
  "tender_id": "12345",
  "tip": 7,
  "total": 37.5,
  "wallet": {
    "status": "authorized"
  }
}
```

<h3 id="create-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[PosPayment](#schemapospayment)|true|none|
|» amount|body|number|true|none|
|» app_fee|body|number|false|The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.|
|» approved|body|number|false|The initial amount of money approved for this payment.|
|» bank_account|body|[PosBankAccount](#schemaposbankaccount)|false|Card details for this payment. This field is currently not available. Reach out to our team for more info.|
|» card_details|body|object|false|none|
|» » card|body|[PaymentCard](#schemapaymentcard)|false|A card's non-confidential details.|
|» cash|body|object|false|Cash details for this payment|
|» » amount|body|object|false|The amount of cash given by the customer.|
|» » charge_back_amount|body|object|false|The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields.|
|» change_back_cash_amount|body|number|false|none|
|» currency|body|[Currency](#schemacurrency)|true|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» customer_id|body|string|true|none|
|» device_id|body|string|false|none|
|» employee_id|body|string|false|none|
|» external_details|body|object|false|Details about an external payment.|
|» » source|body|string|true|A description of the external payment source. For example, <br>"Food Delivery Service".|
|» » source_fee_amount|body|number|false|The fees paid to the source. The amount minus this field is the net amount seller receives.|
|» » source_id|body|string|false|An ID to associate the payment to its originating source.|
|» » type|body|string|true|The type of external payment the seller received. It can be one of the following:<br>- CHECK - Paid using a physical check.<br>- BANK_TRANSFER - Paid using external bank transfer.<br>- OTHER\_GIFT\_CARD - Paid using a non-Square gift card.<br>- CRYPTO - Paid using a crypto currency.<br>- SQUARE_CASH - Paid using Square Cash App.<br>- SOCIAL - Paid using peer-to-peer payment applications.<br>- EXTERNAL - A third-party application gathered this payment outside of Square.<br>- EMONEY - Paid using an E-money provider.<br>- CARD - A credit or debit card that Square does not support.<br>- STORED_BALANCE - Use for house accounts, store credit, and so forth.<br>- FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals<br>- OTHER - A type not listed here.|
|» external_payment_id|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» location_id|body|string|false|none|
|» merchant_id|body|string|false|none|
|» order_id|body|string|true|none|
|» processing_fees|body|[object]|false|none|
|» » amount|body|number|false|none|
|» » effective_at|body|string(date-time)|false|none|
|» » processing_type|body|string|false|none|
|» refunded|body|number|false|The initial amount of money approved for this payment.|
|» service_charges|body|[ServiceCharges](#schemaservicecharges)|false|Optional service charges or gratuity tip applied to the order.|
|» source|body|string|false|Source of this payment.|
|» source_id|body|string|true|The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.|
|» status|body|string|false|Status of this payment.|
|» tax|body|number|false|none|
|» tender_id|body|string|true|none|
|» tip|body|number|false|none|
|» total|body|number|false|none|
|» wallet|body|object|false|Wallet details for this payment. This field is currently not available. Reach out to our team for more info.|
|» » status|body|string|false|The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.|

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
|» » type|check|
|» » type|bank_transfer|
|» » type|other_gift_card|
|» » type|crypto|
|» » type|square_cash|
|» » type|social|
|» » type|external|
|» » type|emoney|
|» » type|card|
|» » type|stored_balance|
|» » type|food_voucher|
|» » type|other|
|» » processing_type|initial|
|» » processing_type|adjustment|
|» source|card|
|» source|bank_account|
|» source|wallet|
|» source|bnpl|
|» source|cash|
|» source|external|
|» source|other|
|» status|approved|
|» status|pending|
|» status|completed|
|» status|canceled|
|» status|failed|
|» status|other|
|» » status|authorized|
|» » status|captured|
|» » status|voided|
|» » status|failed|
|» » status|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "PosPayments",
  "service": "square",
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
|201|Created|PosPayments|[CreatePosPaymentResponse](#schemacreatepospaymentresponse)|
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
curl https://example.com/pos/payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/payments/{id}`

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
    "amount": 27.5,
    "app_fee": 3,
    "approved": 37.5,
    "bank_account": {
      "account_ownership_type": "string",
      "ach_details": {
        "account_number_suffix": "stri",
        "account_type": "string",
        "routing_number": "string"
      },
      "bank_name": "string",
      "country": "US",
      "fingerprint": "string",
      "statement_description": "string",
      "transfer_type": "string"
    },
    "card_details": {
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "id": "12345",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      }
    },
    "cash": {
      "amount": null,
      "charge_back_amount": null
    },
    "change_back_cash_amount": 20,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "customer_id": "12345",
    "device_id": "12345",
    "employee_id": "12345",
    "external_details": {
      "source": "string",
      "source_fee_amount": 2.5,
      "source_id": "string",
      "type": "check"
    },
    "external_payment_id": "12345",
    "id": "12345",
    "idempotency_key": "random_string",
    "location_id": "12345",
    "merchant_id": "12345",
    "order_id": "12345",
    "processing_fees": [
      {
        "amount": 1.05,
        "effective_at": "2020-09-30T07:43:32.000Z",
        "processing_type": "initial"
      }
    ],
    "refunded": 37.5,
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "external",
    "source_id": "12345",
    "status": "approved",
    "tax": 20,
    "tender_id": "12345",
    "tip": 7,
    "total": 37.5,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "wallet": {
      "status": "authorized"
    }
  },
  "operation": "one",
  "resource": "PosPayments",
  "service": "square",
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
|200|OK|PosPayments|[GetPosPaymentResponse](#schemagetpospaymentresponse)|
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
curl https://example.com/pos/payments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/payments/{id}`

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
  "resource": "PosPayments",
  "service": "square",
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
|200|OK|PosPayments|[DeletePosPaymentResponse](#schemadeletepospaymentresponse)|
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
curl https://example.com/pos/payments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "amount": 27.5,
    "app_fee": 3,
    "approved": 37.5,
    "bank_account": {
      "account_ownership_type": "string",
      "ach_details": {
        "account_number_suffix": "stri",
        "account_type": "string",
        "routing_number": "string"
      },
      "bank_name": "string",
      "country": "US",
      "fingerprint": "string",
      "statement_description": "string",
      "transfer_type": "string"
    },
    "card_details": {
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      }
    },
    "cash": {
      "amount": null,
      "charge_back_amount": null
    },
    "change_back_cash_amount": 20,
    "currency": "USD",
    "customer_id": "12345",
    "device_id": "12345",
    "employee_id": "12345",
    "external_details": {
      "source": "string",
      "source_fee_amount": 2.5,
      "source_id": "string",
      "type": "check"
    },
    "external_payment_id": "12345",
    "idempotency_key": "random_string",
    "location_id": "12345",
    "merchant_id": "12345",
    "order_id": "12345",
    "processing_fees": [
      {
        "amount": 1.05,
        "effective_at": "2020-09-30T07:43:32.000Z",
        "processing_type": "initial"
      }
    ],
    "refunded": 37.5,
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "external",
    "source_id": "12345",
    "status": "approved",
    "tax": 20,
    "tender_id": "12345",
    "tip": 7,
    "total": 37.5,
    "wallet": {
      "status": "authorized"
    }
  }'
```

`PATCH /pos/payments/{id}`

Update Payment

> Body parameter

```json
{
  "amount": 27.5,
  "app_fee": 3,
  "approved": 37.5,
  "bank_account": {
    "account_ownership_type": "string",
    "ach_details": {
      "account_number_suffix": "stri",
      "account_type": "string",
      "routing_number": "string"
    },
    "bank_name": "string",
    "country": "US",
    "fingerprint": "string",
    "statement_description": "string",
    "transfer_type": "string"
  },
  "card_details": {
    "card": {
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
      "bin": "41111",
      "card_brand": "visa",
      "card_type": "credit",
      "cardholder_name": "John Doe",
      "customer_id": "12345",
      "enabled": true,
      "exp_month": 1,
      "exp_year": 2022,
      "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
      "last_4": "The last 4 digits of the card number.",
      "merchant_id": "12345",
      "prepaid_type": "prepaid",
      "reference_id": "card-001",
      "version": "230320320320"
    }
  },
  "cash": {
    "amount": null,
    "charge_back_amount": null
  },
  "change_back_cash_amount": 20,
  "currency": "USD",
  "customer_id": "12345",
  "device_id": "12345",
  "employee_id": "12345",
  "external_details": {
    "source": "string",
    "source_fee_amount": 2.5,
    "source_id": "string",
    "type": "check"
  },
  "external_payment_id": "12345",
  "idempotency_key": "random_string",
  "location_id": "12345",
  "merchant_id": "12345",
  "order_id": "12345",
  "processing_fees": [
    {
      "amount": 1.05,
      "effective_at": "2020-09-30T07:43:32.000Z",
      "processing_type": "initial"
    }
  ],
  "refunded": 37.5,
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "source": "external",
  "source_id": "12345",
  "status": "approved",
  "tax": 20,
  "tender_id": "12345",
  "tip": 7,
  "total": 37.5,
  "wallet": {
    "status": "authorized"
  }
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
|body|body|[PosPayment](#schemapospayment)|true|none|
|» amount|body|number|true|none|
|» app_fee|body|number|false|The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.|
|» approved|body|number|false|The initial amount of money approved for this payment.|
|» bank_account|body|[PosBankAccount](#schemaposbankaccount)|false|Card details for this payment. This field is currently not available. Reach out to our team for more info.|
|» card_details|body|object|false|none|
|» » card|body|[PaymentCard](#schemapaymentcard)|false|A card's non-confidential details.|
|» cash|body|object|false|Cash details for this payment|
|» » amount|body|object|false|The amount of cash given by the customer.|
|» » charge_back_amount|body|object|false|The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields.|
|» change_back_cash_amount|body|number|false|none|
|» currency|body|[Currency](#schemacurrency)|true|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» customer_id|body|string|true|none|
|» device_id|body|string|false|none|
|» employee_id|body|string|false|none|
|» external_details|body|object|false|Details about an external payment.|
|» » source|body|string|true|A description of the external payment source. For example, <br>"Food Delivery Service".|
|» » source_fee_amount|body|number|false|The fees paid to the source. The amount minus this field is the net amount seller receives.|
|» » source_id|body|string|false|An ID to associate the payment to its originating source.|
|» » type|body|string|true|The type of external payment the seller received. It can be one of the following:<br>- CHECK - Paid using a physical check.<br>- BANK_TRANSFER - Paid using external bank transfer.<br>- OTHER\_GIFT\_CARD - Paid using a non-Square gift card.<br>- CRYPTO - Paid using a crypto currency.<br>- SQUARE_CASH - Paid using Square Cash App.<br>- SOCIAL - Paid using peer-to-peer payment applications.<br>- EXTERNAL - A third-party application gathered this payment outside of Square.<br>- EMONEY - Paid using an E-money provider.<br>- CARD - A credit or debit card that Square does not support.<br>- STORED_BALANCE - Use for house accounts, store credit, and so forth.<br>- FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals<br>- OTHER - A type not listed here.|
|» external_payment_id|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» location_id|body|string|false|none|
|» merchant_id|body|string|false|none|
|» order_id|body|string|true|none|
|» processing_fees|body|[object]|false|none|
|» » amount|body|number|false|none|
|» » effective_at|body|string(date-time)|false|none|
|» » processing_type|body|string|false|none|
|» refunded|body|number|false|The initial amount of money approved for this payment.|
|» service_charges|body|[ServiceCharges](#schemaservicecharges)|false|Optional service charges or gratuity tip applied to the order.|
|» source|body|string|false|Source of this payment.|
|» source_id|body|string|true|The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.|
|» status|body|string|false|Status of this payment.|
|» tax|body|number|false|none|
|» tender_id|body|string|true|none|
|» tip|body|number|false|none|
|» total|body|number|false|none|
|» wallet|body|object|false|Wallet details for this payment. This field is currently not available. Reach out to our team for more info.|
|» » status|body|string|false|The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.|

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
|» » type|check|
|» » type|bank_transfer|
|» » type|other_gift_card|
|» » type|crypto|
|» » type|square_cash|
|» » type|social|
|» » type|external|
|» » type|emoney|
|» » type|card|
|» » type|stored_balance|
|» » type|food_voucher|
|» » type|other|
|» » processing_type|initial|
|» » processing_type|adjustment|
|» source|card|
|» source|bank_account|
|» source|wallet|
|» source|bnpl|
|» source|cash|
|» source|external|
|» source|other|
|» status|approved|
|» status|pending|
|» status|completed|
|» status|canceled|
|» status|failed|
|» status|other|
|» » status|authorized|
|» » status|captured|
|» » status|voided|
|» » status|failed|
|» » status|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "PosPayments",
  "service": "square",
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
|200|OK|PosPayments|[UpdatePosPaymentResponse](#schemaupdatepospaymentresponse)|
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

<h1 id="pos-api-merchants">Merchants</h1>

## List Merchants

<a id="opIdmerchantsAll"></a>

> Code samples

```bash
curl https://example.com/pos/merchants \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/merchants`

List Merchants

<h3 id="list-merchants-parameters">Parameters</h3>

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
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "language": "EN",
      "main_location_id": "12345",
      "name": "Dunkin Donuts",
      "owner_id": "12345",
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "status": "active",
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
  "resource": "Merchants",
  "service": "square",
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

<h3 id="list-merchants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Merchants|[GetMerchantsResponse](#schemagetmerchantsresponse)|
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

## Create Merchant

<a id="opIdmerchantsAdd"></a>

> Code samples

```bash
curl https://example.com/pos/merchants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "currency": "USD",
    "language": "EN",
    "main_location_id": "12345",
    "name": "Dunkin Donuts",
    "owner_id": "12345",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "active"
  }'
```

`POST /pos/merchants`

Create Merchant

> Body parameter

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
  "currency": "USD",
  "language": "EN",
  "main_location_id": "12345",
  "name": "Dunkin Donuts",
  "owner_id": "12345",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "active"
}
```

<h3 id="create-merchant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Merchant](#schemamerchant)|true|none|
|» address|body|[Address](#schemaaddress)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» language|body|string \| null|false|language code according to ISO 639-1. For the United States - EN|
|» main_location_id|body|string \| null|false|The main location ID of the merchant|
|» name|body|string \| null|false|The name of the merchant|
|» owner_id|body|string|false|none|
|» service_charges|body|[[ServiceCharge](#schemaservicecharge)]|false|none|
|» status|body|string \| null|false|Status of this merchant.|

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
|» status|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Merchants",
  "service": "square",
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

<h3 id="create-merchant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Merchants|[CreateMerchantResponse](#schemacreatemerchantresponse)|
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

## Get Merchant

<a id="opIdmerchantsOne"></a>

> Code samples

```bash
curl https://example.com/pos/merchants/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/merchants/{id}`

Get Merchant

<h3 id="get-merchant-parameters">Parameters</h3>

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
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "language": "EN",
    "main_location_id": "12345",
    "name": "Dunkin Donuts",
    "owner_id": "12345",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Merchants",
  "service": "square",
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

<h3 id="get-merchant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Merchants|[GetMerchantResponse](#schemagetmerchantresponse)|
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

## Delete Merchant

<a id="opIdmerchantsDelete"></a>

> Code samples

```bash
curl https://example.com/pos/merchants/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/merchants/{id}`

Delete Merchant

<h3 id="delete-merchant-parameters">Parameters</h3>

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
  "resource": "Merchants",
  "service": "square",
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

<h3 id="delete-merchant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Merchants|[DeleteMerchantResponse](#schemadeletemerchantresponse)|
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

## Update Merchant

<a id="opIdmerchantsUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/merchants/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "currency": "USD",
    "language": "EN",
    "main_location_id": "12345",
    "name": "Dunkin Donuts",
    "owner_id": "12345",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "active"
  }'
```

`PATCH /pos/merchants/{id}`

Update Merchant

> Body parameter

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
  "currency": "USD",
  "language": "EN",
  "main_location_id": "12345",
  "name": "Dunkin Donuts",
  "owner_id": "12345",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "active"
}
```

<h3 id="update-merchant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Merchant](#schemamerchant)|true|none|
|» address|body|[Address](#schemaaddress)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» language|body|string \| null|false|language code according to ISO 639-1. For the United States - EN|
|» main_location_id|body|string \| null|false|The main location ID of the merchant|
|» name|body|string \| null|false|The name of the merchant|
|» owner_id|body|string|false|none|
|» service_charges|body|[[ServiceCharge](#schemaservicecharge)]|false|none|
|» status|body|string \| null|false|Status of this merchant.|

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
|» status|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Merchants",
  "service": "square",
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

<h3 id="update-merchant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Merchants|[UpdateMerchantResponse](#schemaupdatemerchantresponse)|
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

<h1 id="pos-api-locations">Locations</h1>

## List Locations

<a id="opIdlocationsAll"></a>

> Code samples

```bash
curl https://example.com/pos/locations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/locations`

List Locations

<h3 id="list-locations-parameters">Parameters</h3>

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
      "business_name": "Dunkin Donuts LLC",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "merchant_id": "12345",
      "name": "Dunkin Donuts",
      "status": "active",
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
  "resource": "Locations",
  "service": "square",
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

<h3 id="list-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locations|[GetLocationsResponse](#schemagetlocationsresponse)|
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

## Create Location

<a id="opIdlocationsAdd"></a>

> Code samples

```bash
curl https://example.com/pos/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "business_name": "Dunkin Donuts LLC",
    "currency": "USD",
    "merchant_id": "12345",
    "name": "Dunkin Donuts",
    "status": "active"
  }'
```

`POST /pos/locations`

Create Location

> Body parameter

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
  "business_name": "Dunkin Donuts LLC",
  "currency": "USD",
  "merchant_id": "12345",
  "name": "Dunkin Donuts",
  "status": "active"
}
```

<h3 id="create-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Location](#schemalocation)|true|none|
|» address|body|[Address](#schemaaddress)|false|none|
|» business_name|body|string \| null|false|The business name of the location|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» merchant_id|body|string|false|none|
|» name|body|string \| null|false|The name of the location|
|» status|body|string \| null|false|Status of this location.|

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
|» status|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Locations",
  "service": "square",
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

<h3 id="create-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Locations|[CreateLocationResponse](#schemacreatelocationresponse)|
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

## Get Location

<a id="opIdlocationsOne"></a>

> Code samples

```bash
curl https://example.com/pos/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/locations/{id}`

Get Location

<h3 id="get-location-parameters">Parameters</h3>

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
    "business_name": "Dunkin Donuts LLC",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "merchant_id": "12345",
    "name": "Dunkin Donuts",
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Locations",
  "service": "square",
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

<h3 id="get-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locations|[GetLocationResponse](#schemagetlocationresponse)|
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

## Delete Location

<a id="opIdlocationsDelete"></a>

> Code samples

```bash
curl https://example.com/pos/locations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/locations/{id}`

Delete Location

<h3 id="delete-location-parameters">Parameters</h3>

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
  "resource": "Locations",
  "service": "square",
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

<h3 id="delete-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locations|[DeleteLocationResponse](#schemadeletelocationresponse)|
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

## Update Location

<a id="opIdlocationsUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/locations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
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
    "business_name": "Dunkin Donuts LLC",
    "currency": "USD",
    "merchant_id": "12345",
    "name": "Dunkin Donuts",
    "status": "active"
  }'
```

`PATCH /pos/locations/{id}`

Update Location

> Body parameter

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
  "business_name": "Dunkin Donuts LLC",
  "currency": "USD",
  "merchant_id": "12345",
  "name": "Dunkin Donuts",
  "status": "active"
}
```

<h3 id="update-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Location](#schemalocation)|true|none|
|» address|body|[Address](#schemaaddress)|false|none|
|» business_name|body|string \| null|false|The business name of the location|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» merchant_id|body|string|false|none|
|» name|body|string \| null|false|The name of the location|
|» status|body|string \| null|false|Status of this location.|

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
|» status|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Locations",
  "service": "square",
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

<h3 id="update-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locations|[UpdateLocationResponse](#schemaupdatelocationresponse)|
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

<h1 id="pos-api-items">Items</h1>

## List Items

<a id="opIditemsAll"></a>

> Code samples

```bash
curl https://example.com/pos/items \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/items`

List Items

<h3 id="list-items-parameters">Parameters</h3>

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
      "abbreviation": "Ch",
      "absent_at_location_ids": [
        "12345",
        "67890"
      ],
      "available": true,
      "available_for_pickup": false,
      "available_online": false,
      "categories": [
        {
          "id": "12345",
          "image_ids": [
            "12345",
            "67890"
          ],
          "name": "Food"
        }
      ],
      "code": "11910345",
      "cost": 2,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "description": "Hot Chocolate",
      "hidden": true,
      "id": "#cocoa",
      "idempotency_key": "random_string",
      "modifier_groups": [
        {
          "id": "12345"
        }
      ],
      "name": "Cocoa",
      "options": [
        {
          "attribute_id": "12345",
          "id": "12345",
          "name": "Option 1"
        }
      ],
      "present_at_all_locations": false,
      "price_amount": 10,
      "price_currency": "USD",
      "pricing_type": "fixed",
      "product_type": "regular",
      "sku": "11910345",
      "tax_ids": [
        "12345",
        "67890"
      ],
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "variations": [
        {
          "id": "12345",
          "image_ids": [
            "12345",
            "67890"
          ],
          "item_id": "12345",
          "name": "Food",
          "price_amount": 10,
          "price_currency": "USD",
          "pricing_type": "fixed",
          "sequence": 0,
          "sku": "11910345"
        }
      ],
      "version": "12345"
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
  "resource": "Items",
  "service": "square",
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

<h3 id="list-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items|[GetItemsResponse](#schemagetitemsresponse)|
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

## Create Item

<a id="opIditemsAdd"></a>

> Code samples

```bash
curl https://example.com/pos/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "abbreviation": "Ch",
    "absent_at_location_ids": [
      "12345",
      "67890"
    ],
    "available": true,
    "available_for_pickup": false,
    "available_online": false,
    "categories": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "name": "Food"
      }
    ],
    "code": "11910345",
    "cost": 2,
    "deleted": true,
    "description": "Hot Chocolate",
    "hidden": true,
    "id": "#cocoa",
    "idempotency_key": "random_string",
    "modifier_groups": [
      {
        "id": "12345"
      }
    ],
    "name": "Cocoa",
    "options": [
      {
        "attribute_id": "12345",
        "id": "12345",
        "name": "Option 1"
      }
    ],
    "present_at_all_locations": false,
    "price_amount": 10,
    "price_currency": "USD",
    "pricing_type": "fixed",
    "product_type": "regular",
    "sku": "11910345",
    "tax_ids": [
      "12345",
      "67890"
    ],
    "variations": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "item_id": "12345",
        "name": "Food",
        "price_amount": 10,
        "price_currency": "USD",
        "pricing_type": "fixed",
        "sequence": 0,
        "sku": "11910345"
      }
    ]
  }'
```

`POST /pos/items`

Create Item

> Body parameter

```json
{
  "abbreviation": "Ch",
  "absent_at_location_ids": [
    "12345",
    "67890"
  ],
  "available": true,
  "available_for_pickup": false,
  "available_online": false,
  "categories": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "name": "Food"
    }
  ],
  "code": "11910345",
  "cost": 2,
  "deleted": true,
  "description": "Hot Chocolate",
  "hidden": true,
  "id": "#cocoa",
  "idempotency_key": "random_string",
  "modifier_groups": [
    {
      "id": "12345"
    }
  ],
  "name": "Cocoa",
  "options": [
    {
      "attribute_id": "12345",
      "id": "12345",
      "name": "Option 1"
    }
  ],
  "present_at_all_locations": false,
  "price_amount": 10,
  "price_currency": "USD",
  "pricing_type": "fixed",
  "product_type": "regular",
  "sku": "11910345",
  "tax_ids": [
    "12345",
    "67890"
  ],
  "variations": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "item_id": "12345",
      "name": "Food",
      "price_amount": 10,
      "price_currency": "USD",
      "pricing_type": "fixed",
      "sequence": 0,
      "sku": "11910345"
    }
  ]
}
```

<h3 id="create-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Item](#schemaitem)|true|none|
|» abbreviation|body|string|false|none|
|» absent_at_location_ids|body|[string]|false|A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.|
|» available|body|[Available](#schemaavailable)|false|none|
|» available_for_pickup|body|boolean|false|none|
|» available_online|body|boolean|false|none|
|» categories|body|[object]|false|none|
|» » image_ids|body|[[Id](#schemaid)]|false|none|
|» » name|body|string|false|none|
|» code|body|string|false|Product code, e.g. UPC or EAN|
|» cost|body|number|false|none|
|» deleted|body|[Deleted](#schemadeleted)|false|none|
|» description|body|string|false|none|
|» hidden|body|[Hidden](#schemahidden)|false|none|
|» id|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» modifier_groups|body|[object]|false|none|
|» name|body|string|true|none|
|» options|body|[object]|false|List of options pertaining to this item's attribute variation|
|» » attribute_id|body|string|false|none|
|» » id|body|string|false|none|
|» » name|body|string|false|none|
|» present_at_all_locations|body|boolean|false|none|
|» price_amount|body|number|false|none|
|» price_currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» pricing_type|body|string|false|none|
|» product_type|body|string|false|none|
|» sku|body|string|false|SKU of the item|
|» tax_ids|body|[string]|false|A list of Tax IDs for the product.|
|» variations|body|[object]|false|none|
|» » name|body|string|false|none|
|» » present_at_all_locations|body|boolean|false|none|
|» » price_amount|body|number|false|none|
|» » price_currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » pricing_type|body|string|false|none|
|» » sequence|body|[Sequence](#schemasequence)|false|none|
|» » sku|body|string|false|none|
|» » stockable|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» price_currency|UNKNOWN_CURRENCY|
|» price_currency|AED|
|» price_currency|AFN|
|» price_currency|ALL|
|» price_currency|AMD|
|» price_currency|ANG|
|» price_currency|AOA|
|» price_currency|ARS|
|» price_currency|AUD|
|» price_currency|AWG|
|» price_currency|AZN|
|» price_currency|BAM|
|» price_currency|BBD|
|» price_currency|BDT|
|» price_currency|BGN|
|» price_currency|BHD|
|» price_currency|BIF|
|» price_currency|BMD|
|» price_currency|BND|
|» price_currency|BOB|
|» price_currency|BOV|
|» price_currency|BRL|
|» price_currency|BSD|
|» price_currency|BTN|
|» price_currency|BWP|
|» price_currency|BYR|
|» price_currency|BZD|
|» price_currency|CAD|
|» price_currency|CDF|
|» price_currency|CHE|
|» price_currency|CHF|
|» price_currency|CHW|
|» price_currency|CLF|
|» price_currency|CLP|
|» price_currency|CNY|
|» price_currency|COP|
|» price_currency|COU|
|» price_currency|CRC|
|» price_currency|CUC|
|» price_currency|CUP|
|» price_currency|CVE|
|» price_currency|CZK|
|» price_currency|DJF|
|» price_currency|DKK|
|» price_currency|DOP|
|» price_currency|DZD|
|» price_currency|EGP|
|» price_currency|ERN|
|» price_currency|ETB|
|» price_currency|EUR|
|» price_currency|FJD|
|» price_currency|FKP|
|» price_currency|GBP|
|» price_currency|GEL|
|» price_currency|GHS|
|» price_currency|GIP|
|» price_currency|GMD|
|» price_currency|GNF|
|» price_currency|GTQ|
|» price_currency|GYD|
|» price_currency|HKD|
|» price_currency|HNL|
|» price_currency|HRK|
|» price_currency|HTG|
|» price_currency|HUF|
|» price_currency|IDR|
|» price_currency|ILS|
|» price_currency|INR|
|» price_currency|IQD|
|» price_currency|IRR|
|» price_currency|ISK|
|» price_currency|JMD|
|» price_currency|JOD|
|» price_currency|JPY|
|» price_currency|KES|
|» price_currency|KGS|
|» price_currency|KHR|
|» price_currency|KMF|
|» price_currency|KPW|
|» price_currency|KRW|
|» price_currency|KWD|
|» price_currency|KYD|
|» price_currency|KZT|
|» price_currency|LAK|
|» price_currency|LBP|
|» price_currency|LKR|
|» price_currency|LRD|
|» price_currency|LSL|
|» price_currency|LTL|
|» price_currency|LVL|
|» price_currency|LYD|
|» price_currency|MAD|
|» price_currency|MDL|
|» price_currency|MGA|
|» price_currency|MKD|
|» price_currency|MMK|
|» price_currency|MNT|
|» price_currency|MOP|
|» price_currency|MRO|
|» price_currency|MUR|
|» price_currency|MVR|
|» price_currency|MWK|
|» price_currency|MXN|
|» price_currency|MXV|
|» price_currency|MYR|
|» price_currency|MZN|
|» price_currency|NAD|
|» price_currency|NGN|
|» price_currency|NIO|
|» price_currency|NOK|
|» price_currency|NPR|
|» price_currency|NZD|
|» price_currency|OMR|
|» price_currency|PAB|
|» price_currency|PEN|
|» price_currency|PGK|
|» price_currency|PHP|
|» price_currency|PKR|
|» price_currency|PLN|
|» price_currency|PYG|
|» price_currency|QAR|
|» price_currency|RON|
|» price_currency|RSD|
|» price_currency|RUB|
|» price_currency|RWF|
|» price_currency|SAR|
|» price_currency|SBD|
|» price_currency|SCR|
|» price_currency|SDG|
|» price_currency|SEK|
|» price_currency|SGD|
|» price_currency|SHP|
|» price_currency|SLL|
|» price_currency|SOS|
|» price_currency|SRD|
|» price_currency|SSP|
|» price_currency|STD|
|» price_currency|SVC|
|» price_currency|SYP|
|» price_currency|SZL|
|» price_currency|THB|
|» price_currency|TJS|
|» price_currency|TMT|
|» price_currency|TND|
|» price_currency|TOP|
|» price_currency|TRC|
|» price_currency|TRY|
|» price_currency|TTD|
|» price_currency|TWD|
|» price_currency|TZS|
|» price_currency|UAH|
|» price_currency|UGX|
|» price_currency|USD|
|» price_currency|USN|
|» price_currency|USS|
|» price_currency|UYI|
|» price_currency|UYU|
|» price_currency|UZS|
|» price_currency|VEF|
|» price_currency|VND|
|» price_currency|VUV|
|» price_currency|WST|
|» price_currency|XAF|
|» price_currency|XAG|
|» price_currency|XAU|
|» price_currency|XBA|
|» price_currency|XBB|
|» price_currency|XBC|
|» price_currency|XBD|
|» price_currency|XCD|
|» price_currency|XDR|
|» price_currency|XOF|
|» price_currency|XPD|
|» price_currency|XPF|
|» price_currency|XPT|
|» price_currency|XTS|
|» price_currency|XXX|
|» price_currency|YER|
|» price_currency|ZAR|
|» price_currency|ZMK|
|» price_currency|ZMW|
|» price_currency|BTC|
|» price_currency|ETH|
|» pricing_type|fixed|
|» pricing_type|variable|
|» pricing_type|per_unit|
|» pricing_type|other|
|» product_type|regular|
|» product_type|other|
|» » price_currency|UNKNOWN_CURRENCY|
|» » price_currency|AED|
|» » price_currency|AFN|
|» » price_currency|ALL|
|» » price_currency|AMD|
|» » price_currency|ANG|
|» » price_currency|AOA|
|» » price_currency|ARS|
|» » price_currency|AUD|
|» » price_currency|AWG|
|» » price_currency|AZN|
|» » price_currency|BAM|
|» » price_currency|BBD|
|» » price_currency|BDT|
|» » price_currency|BGN|
|» » price_currency|BHD|
|» » price_currency|BIF|
|» » price_currency|BMD|
|» » price_currency|BND|
|» » price_currency|BOB|
|» » price_currency|BOV|
|» » price_currency|BRL|
|» » price_currency|BSD|
|» » price_currency|BTN|
|» » price_currency|BWP|
|» » price_currency|BYR|
|» » price_currency|BZD|
|» » price_currency|CAD|
|» » price_currency|CDF|
|» » price_currency|CHE|
|» » price_currency|CHF|
|» » price_currency|CHW|
|» » price_currency|CLF|
|» » price_currency|CLP|
|» » price_currency|CNY|
|» » price_currency|COP|
|» » price_currency|COU|
|» » price_currency|CRC|
|» » price_currency|CUC|
|» » price_currency|CUP|
|» » price_currency|CVE|
|» » price_currency|CZK|
|» » price_currency|DJF|
|» » price_currency|DKK|
|» » price_currency|DOP|
|» » price_currency|DZD|
|» » price_currency|EGP|
|» » price_currency|ERN|
|» » price_currency|ETB|
|» » price_currency|EUR|
|» » price_currency|FJD|
|» » price_currency|FKP|
|» » price_currency|GBP|
|» » price_currency|GEL|
|» » price_currency|GHS|
|» » price_currency|GIP|
|» » price_currency|GMD|
|» » price_currency|GNF|
|» » price_currency|GTQ|
|» » price_currency|GYD|
|» » price_currency|HKD|
|» » price_currency|HNL|
|» » price_currency|HRK|
|» » price_currency|HTG|
|» » price_currency|HUF|
|» » price_currency|IDR|
|» » price_currency|ILS|
|» » price_currency|INR|
|» » price_currency|IQD|
|» » price_currency|IRR|
|» » price_currency|ISK|
|» » price_currency|JMD|
|» » price_currency|JOD|
|» » price_currency|JPY|
|» » price_currency|KES|
|» » price_currency|KGS|
|» » price_currency|KHR|
|» » price_currency|KMF|
|» » price_currency|KPW|
|» » price_currency|KRW|
|» » price_currency|KWD|
|» » price_currency|KYD|
|» » price_currency|KZT|
|» » price_currency|LAK|
|» » price_currency|LBP|
|» » price_currency|LKR|
|» » price_currency|LRD|
|» » price_currency|LSL|
|» » price_currency|LTL|
|» » price_currency|LVL|
|» » price_currency|LYD|
|» » price_currency|MAD|
|» » price_currency|MDL|
|» » price_currency|MGA|
|» » price_currency|MKD|
|» » price_currency|MMK|
|» » price_currency|MNT|
|» » price_currency|MOP|
|» » price_currency|MRO|
|» » price_currency|MUR|
|» » price_currency|MVR|
|» » price_currency|MWK|
|» » price_currency|MXN|
|» » price_currency|MXV|
|» » price_currency|MYR|
|» » price_currency|MZN|
|» » price_currency|NAD|
|» » price_currency|NGN|
|» » price_currency|NIO|
|» » price_currency|NOK|
|» » price_currency|NPR|
|» » price_currency|NZD|
|» » price_currency|OMR|
|» » price_currency|PAB|
|» » price_currency|PEN|
|» » price_currency|PGK|
|» » price_currency|PHP|
|» » price_currency|PKR|
|» » price_currency|PLN|
|» » price_currency|PYG|
|» » price_currency|QAR|
|» » price_currency|RON|
|» » price_currency|RSD|
|» » price_currency|RUB|
|» » price_currency|RWF|
|» » price_currency|SAR|
|» » price_currency|SBD|
|» » price_currency|SCR|
|» » price_currency|SDG|
|» » price_currency|SEK|
|» » price_currency|SGD|
|» » price_currency|SHP|
|» » price_currency|SLL|
|» » price_currency|SOS|
|» » price_currency|SRD|
|» » price_currency|SSP|
|» » price_currency|STD|
|» » price_currency|SVC|
|» » price_currency|SYP|
|» » price_currency|SZL|
|» » price_currency|THB|
|» » price_currency|TJS|
|» » price_currency|TMT|
|» » price_currency|TND|
|» » price_currency|TOP|
|» » price_currency|TRC|
|» » price_currency|TRY|
|» » price_currency|TTD|
|» » price_currency|TWD|
|» » price_currency|TZS|
|» » price_currency|UAH|
|» » price_currency|UGX|
|» » price_currency|USD|
|» » price_currency|USN|
|» » price_currency|USS|
|» » price_currency|UYI|
|» » price_currency|UYU|
|» » price_currency|UZS|
|» » price_currency|VEF|
|» » price_currency|VND|
|» » price_currency|VUV|
|» » price_currency|WST|
|» » price_currency|XAF|
|» » price_currency|XAG|
|» » price_currency|XAU|
|» » price_currency|XBA|
|» » price_currency|XBB|
|» » price_currency|XBC|
|» » price_currency|XBD|
|» » price_currency|XCD|
|» » price_currency|XDR|
|» » price_currency|XOF|
|» » price_currency|XPD|
|» » price_currency|XPF|
|» » price_currency|XPT|
|» » price_currency|XTS|
|» » price_currency|XXX|
|» » price_currency|YER|
|» » price_currency|ZAR|
|» » price_currency|ZMK|
|» » price_currency|ZMW|
|» » price_currency|BTC|
|» » price_currency|ETH|
|» » pricing_type|fixed|
|» » pricing_type|variable|
|» » pricing_type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Items",
  "service": "square",
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

<h3 id="create-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Items|[CreateItemResponse](#schemacreateitemresponse)|
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

## Get Item

<a id="opIditemsOne"></a>

> Code samples

```bash
curl https://example.com/pos/items/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/items/{id}`

Get Item

<h3 id="get-item-parameters">Parameters</h3>

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
    "abbreviation": "Ch",
    "absent_at_location_ids": [
      "12345",
      "67890"
    ],
    "available": true,
    "available_for_pickup": false,
    "available_online": false,
    "categories": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "name": "Food"
      }
    ],
    "code": "11910345",
    "cost": 2,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "description": "Hot Chocolate",
    "hidden": true,
    "id": "#cocoa",
    "idempotency_key": "random_string",
    "modifier_groups": [
      {
        "id": "12345"
      }
    ],
    "name": "Cocoa",
    "options": [
      {
        "attribute_id": "12345",
        "id": "12345",
        "name": "Option 1"
      }
    ],
    "present_at_all_locations": false,
    "price_amount": 10,
    "price_currency": "USD",
    "pricing_type": "fixed",
    "product_type": "regular",
    "sku": "11910345",
    "tax_ids": [
      "12345",
      "67890"
    ],
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "variations": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "item_id": "12345",
        "name": "Food",
        "price_amount": 10,
        "price_currency": "USD",
        "pricing_type": "fixed",
        "sequence": 0,
        "sku": "11910345"
      }
    ],
    "version": "12345"
  },
  "operation": "one",
  "resource": "Items",
  "service": "square",
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

<h3 id="get-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items|[GetItemResponse](#schemagetitemresponse)|
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

## Delete Item

<a id="opIditemsDelete"></a>

> Code samples

```bash
curl https://example.com/pos/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/items/{id}`

Delete Item

<h3 id="delete-item-parameters">Parameters</h3>

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
  "resource": "Items",
  "service": "square",
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

<h3 id="delete-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items|[DeleteItemResponse](#schemadeleteitemresponse)|
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

## Update Item

<a id="opIditemsUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/items/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "abbreviation": "Ch",
    "absent_at_location_ids": [
      "12345",
      "67890"
    ],
    "available": true,
    "available_for_pickup": false,
    "available_online": false,
    "categories": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "name": "Food"
      }
    ],
    "code": "11910345",
    "cost": 2,
    "deleted": true,
    "description": "Hot Chocolate",
    "hidden": true,
    "id": "#cocoa",
    "idempotency_key": "random_string",
    "modifier_groups": [
      {
        "id": "12345"
      }
    ],
    "name": "Cocoa",
    "options": [
      {
        "attribute_id": "12345",
        "id": "12345",
        "name": "Option 1"
      }
    ],
    "present_at_all_locations": false,
    "price_amount": 10,
    "price_currency": "USD",
    "pricing_type": "fixed",
    "product_type": "regular",
    "sku": "11910345",
    "tax_ids": [
      "12345",
      "67890"
    ],
    "variations": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "item_id": "12345",
        "name": "Food",
        "price_amount": 10,
        "price_currency": "USD",
        "pricing_type": "fixed",
        "sequence": 0,
        "sku": "11910345"
      }
    ]
  }'
```

`PATCH /pos/items/{id}`

Update Item

> Body parameter

```json
{
  "abbreviation": "Ch",
  "absent_at_location_ids": [
    "12345",
    "67890"
  ],
  "available": true,
  "available_for_pickup": false,
  "available_online": false,
  "categories": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "name": "Food"
    }
  ],
  "code": "11910345",
  "cost": 2,
  "deleted": true,
  "description": "Hot Chocolate",
  "hidden": true,
  "id": "#cocoa",
  "idempotency_key": "random_string",
  "modifier_groups": [
    {
      "id": "12345"
    }
  ],
  "name": "Cocoa",
  "options": [
    {
      "attribute_id": "12345",
      "id": "12345",
      "name": "Option 1"
    }
  ],
  "present_at_all_locations": false,
  "price_amount": 10,
  "price_currency": "USD",
  "pricing_type": "fixed",
  "product_type": "regular",
  "sku": "11910345",
  "tax_ids": [
    "12345",
    "67890"
  ],
  "variations": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "item_id": "12345",
      "name": "Food",
      "price_amount": 10,
      "price_currency": "USD",
      "pricing_type": "fixed",
      "sequence": 0,
      "sku": "11910345"
    }
  ]
}
```

<h3 id="update-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Item](#schemaitem)|true|none|
|» abbreviation|body|string|false|none|
|» absent_at_location_ids|body|[string]|false|A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.|
|» available|body|[Available](#schemaavailable)|false|none|
|» available_for_pickup|body|boolean|false|none|
|» available_online|body|boolean|false|none|
|» categories|body|[object]|false|none|
|» » image_ids|body|[[Id](#schemaid)]|false|none|
|» » name|body|string|false|none|
|» code|body|string|false|Product code, e.g. UPC or EAN|
|» cost|body|number|false|none|
|» deleted|body|[Deleted](#schemadeleted)|false|none|
|» description|body|string|false|none|
|» hidden|body|[Hidden](#schemahidden)|false|none|
|» id|body|string|false|none|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» modifier_groups|body|[object]|false|none|
|» name|body|string|true|none|
|» options|body|[object]|false|List of options pertaining to this item's attribute variation|
|» » attribute_id|body|string|false|none|
|» » id|body|string|false|none|
|» » name|body|string|false|none|
|» present_at_all_locations|body|boolean|false|none|
|» price_amount|body|number|false|none|
|» price_currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» pricing_type|body|string|false|none|
|» product_type|body|string|false|none|
|» sku|body|string|false|SKU of the item|
|» tax_ids|body|[string]|false|A list of Tax IDs for the product.|
|» variations|body|[object]|false|none|
|» » name|body|string|false|none|
|» » present_at_all_locations|body|boolean|false|none|
|» » price_amount|body|number|false|none|
|» » price_currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » pricing_type|body|string|false|none|
|» » sequence|body|[Sequence](#schemasequence)|false|none|
|» » sku|body|string|false|none|
|» » stockable|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» price_currency|UNKNOWN_CURRENCY|
|» price_currency|AED|
|» price_currency|AFN|
|» price_currency|ALL|
|» price_currency|AMD|
|» price_currency|ANG|
|» price_currency|AOA|
|» price_currency|ARS|
|» price_currency|AUD|
|» price_currency|AWG|
|» price_currency|AZN|
|» price_currency|BAM|
|» price_currency|BBD|
|» price_currency|BDT|
|» price_currency|BGN|
|» price_currency|BHD|
|» price_currency|BIF|
|» price_currency|BMD|
|» price_currency|BND|
|» price_currency|BOB|
|» price_currency|BOV|
|» price_currency|BRL|
|» price_currency|BSD|
|» price_currency|BTN|
|» price_currency|BWP|
|» price_currency|BYR|
|» price_currency|BZD|
|» price_currency|CAD|
|» price_currency|CDF|
|» price_currency|CHE|
|» price_currency|CHF|
|» price_currency|CHW|
|» price_currency|CLF|
|» price_currency|CLP|
|» price_currency|CNY|
|» price_currency|COP|
|» price_currency|COU|
|» price_currency|CRC|
|» price_currency|CUC|
|» price_currency|CUP|
|» price_currency|CVE|
|» price_currency|CZK|
|» price_currency|DJF|
|» price_currency|DKK|
|» price_currency|DOP|
|» price_currency|DZD|
|» price_currency|EGP|
|» price_currency|ERN|
|» price_currency|ETB|
|» price_currency|EUR|
|» price_currency|FJD|
|» price_currency|FKP|
|» price_currency|GBP|
|» price_currency|GEL|
|» price_currency|GHS|
|» price_currency|GIP|
|» price_currency|GMD|
|» price_currency|GNF|
|» price_currency|GTQ|
|» price_currency|GYD|
|» price_currency|HKD|
|» price_currency|HNL|
|» price_currency|HRK|
|» price_currency|HTG|
|» price_currency|HUF|
|» price_currency|IDR|
|» price_currency|ILS|
|» price_currency|INR|
|» price_currency|IQD|
|» price_currency|IRR|
|» price_currency|ISK|
|» price_currency|JMD|
|» price_currency|JOD|
|» price_currency|JPY|
|» price_currency|KES|
|» price_currency|KGS|
|» price_currency|KHR|
|» price_currency|KMF|
|» price_currency|KPW|
|» price_currency|KRW|
|» price_currency|KWD|
|» price_currency|KYD|
|» price_currency|KZT|
|» price_currency|LAK|
|» price_currency|LBP|
|» price_currency|LKR|
|» price_currency|LRD|
|» price_currency|LSL|
|» price_currency|LTL|
|» price_currency|LVL|
|» price_currency|LYD|
|» price_currency|MAD|
|» price_currency|MDL|
|» price_currency|MGA|
|» price_currency|MKD|
|» price_currency|MMK|
|» price_currency|MNT|
|» price_currency|MOP|
|» price_currency|MRO|
|» price_currency|MUR|
|» price_currency|MVR|
|» price_currency|MWK|
|» price_currency|MXN|
|» price_currency|MXV|
|» price_currency|MYR|
|» price_currency|MZN|
|» price_currency|NAD|
|» price_currency|NGN|
|» price_currency|NIO|
|» price_currency|NOK|
|» price_currency|NPR|
|» price_currency|NZD|
|» price_currency|OMR|
|» price_currency|PAB|
|» price_currency|PEN|
|» price_currency|PGK|
|» price_currency|PHP|
|» price_currency|PKR|
|» price_currency|PLN|
|» price_currency|PYG|
|» price_currency|QAR|
|» price_currency|RON|
|» price_currency|RSD|
|» price_currency|RUB|
|» price_currency|RWF|
|» price_currency|SAR|
|» price_currency|SBD|
|» price_currency|SCR|
|» price_currency|SDG|
|» price_currency|SEK|
|» price_currency|SGD|
|» price_currency|SHP|
|» price_currency|SLL|
|» price_currency|SOS|
|» price_currency|SRD|
|» price_currency|SSP|
|» price_currency|STD|
|» price_currency|SVC|
|» price_currency|SYP|
|» price_currency|SZL|
|» price_currency|THB|
|» price_currency|TJS|
|» price_currency|TMT|
|» price_currency|TND|
|» price_currency|TOP|
|» price_currency|TRC|
|» price_currency|TRY|
|» price_currency|TTD|
|» price_currency|TWD|
|» price_currency|TZS|
|» price_currency|UAH|
|» price_currency|UGX|
|» price_currency|USD|
|» price_currency|USN|
|» price_currency|USS|
|» price_currency|UYI|
|» price_currency|UYU|
|» price_currency|UZS|
|» price_currency|VEF|
|» price_currency|VND|
|» price_currency|VUV|
|» price_currency|WST|
|» price_currency|XAF|
|» price_currency|XAG|
|» price_currency|XAU|
|» price_currency|XBA|
|» price_currency|XBB|
|» price_currency|XBC|
|» price_currency|XBD|
|» price_currency|XCD|
|» price_currency|XDR|
|» price_currency|XOF|
|» price_currency|XPD|
|» price_currency|XPF|
|» price_currency|XPT|
|» price_currency|XTS|
|» price_currency|XXX|
|» price_currency|YER|
|» price_currency|ZAR|
|» price_currency|ZMK|
|» price_currency|ZMW|
|» price_currency|BTC|
|» price_currency|ETH|
|» pricing_type|fixed|
|» pricing_type|variable|
|» pricing_type|per_unit|
|» pricing_type|other|
|» product_type|regular|
|» product_type|other|
|» » price_currency|UNKNOWN_CURRENCY|
|» » price_currency|AED|
|» » price_currency|AFN|
|» » price_currency|ALL|
|» » price_currency|AMD|
|» » price_currency|ANG|
|» » price_currency|AOA|
|» » price_currency|ARS|
|» » price_currency|AUD|
|» » price_currency|AWG|
|» » price_currency|AZN|
|» » price_currency|BAM|
|» » price_currency|BBD|
|» » price_currency|BDT|
|» » price_currency|BGN|
|» » price_currency|BHD|
|» » price_currency|BIF|
|» » price_currency|BMD|
|» » price_currency|BND|
|» » price_currency|BOB|
|» » price_currency|BOV|
|» » price_currency|BRL|
|» » price_currency|BSD|
|» » price_currency|BTN|
|» » price_currency|BWP|
|» » price_currency|BYR|
|» » price_currency|BZD|
|» » price_currency|CAD|
|» » price_currency|CDF|
|» » price_currency|CHE|
|» » price_currency|CHF|
|» » price_currency|CHW|
|» » price_currency|CLF|
|» » price_currency|CLP|
|» » price_currency|CNY|
|» » price_currency|COP|
|» » price_currency|COU|
|» » price_currency|CRC|
|» » price_currency|CUC|
|» » price_currency|CUP|
|» » price_currency|CVE|
|» » price_currency|CZK|
|» » price_currency|DJF|
|» » price_currency|DKK|
|» » price_currency|DOP|
|» » price_currency|DZD|
|» » price_currency|EGP|
|» » price_currency|ERN|
|» » price_currency|ETB|
|» » price_currency|EUR|
|» » price_currency|FJD|
|» » price_currency|FKP|
|» » price_currency|GBP|
|» » price_currency|GEL|
|» » price_currency|GHS|
|» » price_currency|GIP|
|» » price_currency|GMD|
|» » price_currency|GNF|
|» » price_currency|GTQ|
|» » price_currency|GYD|
|» » price_currency|HKD|
|» » price_currency|HNL|
|» » price_currency|HRK|
|» » price_currency|HTG|
|» » price_currency|HUF|
|» » price_currency|IDR|
|» » price_currency|ILS|
|» » price_currency|INR|
|» » price_currency|IQD|
|» » price_currency|IRR|
|» » price_currency|ISK|
|» » price_currency|JMD|
|» » price_currency|JOD|
|» » price_currency|JPY|
|» » price_currency|KES|
|» » price_currency|KGS|
|» » price_currency|KHR|
|» » price_currency|KMF|
|» » price_currency|KPW|
|» » price_currency|KRW|
|» » price_currency|KWD|
|» » price_currency|KYD|
|» » price_currency|KZT|
|» » price_currency|LAK|
|» » price_currency|LBP|
|» » price_currency|LKR|
|» » price_currency|LRD|
|» » price_currency|LSL|
|» » price_currency|LTL|
|» » price_currency|LVL|
|» » price_currency|LYD|
|» » price_currency|MAD|
|» » price_currency|MDL|
|» » price_currency|MGA|
|» » price_currency|MKD|
|» » price_currency|MMK|
|» » price_currency|MNT|
|» » price_currency|MOP|
|» » price_currency|MRO|
|» » price_currency|MUR|
|» » price_currency|MVR|
|» » price_currency|MWK|
|» » price_currency|MXN|
|» » price_currency|MXV|
|» » price_currency|MYR|
|» » price_currency|MZN|
|» » price_currency|NAD|
|» » price_currency|NGN|
|» » price_currency|NIO|
|» » price_currency|NOK|
|» » price_currency|NPR|
|» » price_currency|NZD|
|» » price_currency|OMR|
|» » price_currency|PAB|
|» » price_currency|PEN|
|» » price_currency|PGK|
|» » price_currency|PHP|
|» » price_currency|PKR|
|» » price_currency|PLN|
|» » price_currency|PYG|
|» » price_currency|QAR|
|» » price_currency|RON|
|» » price_currency|RSD|
|» » price_currency|RUB|
|» » price_currency|RWF|
|» » price_currency|SAR|
|» » price_currency|SBD|
|» » price_currency|SCR|
|» » price_currency|SDG|
|» » price_currency|SEK|
|» » price_currency|SGD|
|» » price_currency|SHP|
|» » price_currency|SLL|
|» » price_currency|SOS|
|» » price_currency|SRD|
|» » price_currency|SSP|
|» » price_currency|STD|
|» » price_currency|SVC|
|» » price_currency|SYP|
|» » price_currency|SZL|
|» » price_currency|THB|
|» » price_currency|TJS|
|» » price_currency|TMT|
|» » price_currency|TND|
|» » price_currency|TOP|
|» » price_currency|TRC|
|» » price_currency|TRY|
|» » price_currency|TTD|
|» » price_currency|TWD|
|» » price_currency|TZS|
|» » price_currency|UAH|
|» » price_currency|UGX|
|» » price_currency|USD|
|» » price_currency|USN|
|» » price_currency|USS|
|» » price_currency|UYI|
|» » price_currency|UYU|
|» » price_currency|UZS|
|» » price_currency|VEF|
|» » price_currency|VND|
|» » price_currency|VUV|
|» » price_currency|WST|
|» » price_currency|XAF|
|» » price_currency|XAG|
|» » price_currency|XAU|
|» » price_currency|XBA|
|» » price_currency|XBB|
|» » price_currency|XBC|
|» » price_currency|XBD|
|» » price_currency|XCD|
|» » price_currency|XDR|
|» » price_currency|XOF|
|» » price_currency|XPD|
|» » price_currency|XPF|
|» » price_currency|XPT|
|» » price_currency|XTS|
|» » price_currency|XXX|
|» » price_currency|YER|
|» » price_currency|ZAR|
|» » price_currency|ZMK|
|» » price_currency|ZMW|
|» » price_currency|BTC|
|» » price_currency|ETH|
|» » pricing_type|fixed|
|» » pricing_type|variable|
|» » pricing_type|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Items",
  "service": "square",
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

<h3 id="update-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items|[UpdateItemResponse](#schemaupdateitemresponse)|
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

<h1 id="pos-api-modifiers">Modifiers</h1>

## List Modifiers

<a id="opIdmodifiersAll"></a>

> Code samples

```bash
curl https://example.com/pos/modifiers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/modifiers`

List Modifiers

<h3 id="list-modifiers-parameters">Parameters</h3>

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
      "alternate_name": "Modifier New",
      "available": true,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "idempotency_key": "random_string",
      "modifier_group_id": "123",
      "name": "Modifier",
      "price_amount": 10,
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
  "resource": "Modifiers",
  "service": "square",
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

<h3 id="list-modifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Modifiers|[GetModifiersResponse](#schemagetmodifiersresponse)|
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

## Create Modifier

<a id="opIdmodifiersAdd"></a>

> Code samples

```bash
curl https://example.com/pos/modifiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "alternate_name": "Modifier New",
    "available": true,
    "currency": "USD",
    "idempotency_key": "random_string",
    "modifier_group_id": "123",
    "name": "Modifier",
    "price_amount": 10
  }'
```

`POST /pos/modifiers`

Create Modifier

> Body parameter

```json
{
  "alternate_name": "Modifier New",
  "available": true,
  "currency": "USD",
  "idempotency_key": "random_string",
  "modifier_group_id": "123",
  "name": "Modifier",
  "price_amount": 10
}
```

<h3 id="create-modifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Modifier](#schemamodifier)|true|none|
|» alternate_name|body|string|false|none|
|» available|body|[Available](#schemaavailable)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» modifier_group_id|body|string|true|none|
|» name|body|string|true|none|
|» price_amount|body|number|false|none|

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
  "resource": "Modifiers",
  "service": "square",
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

<h3 id="create-modifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Modifiers|[CreateModifierResponse](#schemacreatemodifierresponse)|
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

## Get Modifier

<a id="opIdmodifiersOne"></a>

> Code samples

```bash
curl https://example.com/pos/modifiers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/modifiers/{id}`

Get Modifier

<h3 id="get-modifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|filter|query|[ModifierGroupFilter](#schemamodifiergroupfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "alternate_name": "Modifier New",
    "available": true,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "idempotency_key": "random_string",
    "modifier_group_id": "123",
    "name": "Modifier",
    "price_amount": 10,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Modifiers",
  "service": "square",
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

<h3 id="get-modifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Modifiers|[GetModifierResponse](#schemagetmodifierresponse)|
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

## Delete Modifier

<a id="opIdmodifiersDelete"></a>

> Code samples

```bash
curl https://example.com/pos/modifiers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/modifiers/{id}`

Delete Modifier

<h3 id="delete-modifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|filter|query|[ModifierGroupFilter](#schemamodifiergroupfilter)|false|Apply filters|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Modifiers",
  "service": "square",
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

<h3 id="delete-modifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Modifiers|[DeleteModifierResponse](#schemadeletemodifierresponse)|
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

## Update Modifier

<a id="opIdmodifiersUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/modifiers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "alternate_name": "Modifier New",
    "available": true,
    "currency": "USD",
    "idempotency_key": "random_string",
    "modifier_group_id": "123",
    "name": "Modifier",
    "price_amount": 10
  }'
```

`PATCH /pos/modifiers/{id}`

Update Modifier

> Body parameter

```json
{
  "alternate_name": "Modifier New",
  "available": true,
  "currency": "USD",
  "idempotency_key": "random_string",
  "modifier_group_id": "123",
  "name": "Modifier",
  "price_amount": 10
}
```

<h3 id="update-modifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Modifier](#schemamodifier)|true|none|
|» alternate_name|body|string|false|none|
|» available|body|[Available](#schemaavailable)|false|none|
|» currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» idempotency_key|body|[IdempotencyKey](#schemaidempotencykey)|false|A value you specify that uniquely identifies this request among requests you have sent.|
|» modifier_group_id|body|string|true|none|
|» name|body|string|true|none|
|» price_amount|body|number|false|none|

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
  "resource": "Modifiers",
  "service": "square",
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

<h3 id="update-modifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Modifiers|[UpdateModifierResponse](#schemaupdatemodifierresponse)|
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

<h1 id="pos-api-modifier-groups">Modifier Groups</h1>

## List Modifier Groups

<a id="opIdmodifierGroupsAll"></a>

> Code samples

```bash
curl https://example.com/pos/modifier-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/modifier-groups`

List Modifier Groups

<h3 id="list-modifier-groups-parameters">Parameters</h3>

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
      "alternate_name": "Modifier New",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "id": "12345",
      "maximum_allowed": 5,
      "minimum_required": 1,
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "available": true,
          "currency": "USD",
          "id": "12345",
          "name": "Modifier",
          "price_amount": 10
        }
      ],
      "name": "Modifier",
      "present_at_all_locations": false,
      "row_version": "1-12345",
      "selection_type": "single",
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
  "resource": "ModifierGroups",
  "service": "square",
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

<h3 id="list-modifier-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ModifierGroups|[GetModifierGroupsResponse](#schemagetmodifiergroupsresponse)|
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

## Create Modifier Group

<a id="opIdmodifierGroupsAdd"></a>

> Code samples

```bash
curl https://example.com/pos/modifier-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "alternate_name": "Modifier New",
    "deleted": true,
    "maximum_allowed": 5,
    "minimum_required": 1,
    "modifiers": [
      {
        "alternate_name": "Modifier New",
        "available": true,
        "currency": "USD",
        "id": "12345",
        "name": "Modifier",
        "price_amount": 10
      }
    ],
    "name": "Modifier",
    "present_at_all_locations": false,
    "row_version": "1-12345",
    "selection_type": "single"
  }'
```

`POST /pos/modifier-groups`

Create Modifier Group

> Body parameter

```json
{
  "alternate_name": "Modifier New",
  "deleted": true,
  "maximum_allowed": 5,
  "minimum_required": 1,
  "modifiers": [
    {
      "alternate_name": "Modifier New",
      "available": true,
      "currency": "USD",
      "id": "12345",
      "name": "Modifier",
      "price_amount": 10
    }
  ],
  "name": "Modifier",
  "present_at_all_locations": false,
  "row_version": "1-12345",
  "selection_type": "single"
}
```

<h3 id="create-modifier-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[ModifierGroup](#schemamodifiergroup)|true|none|
|» alternate_name|body|string|false|none|
|» deleted|body|[Deleted](#schemadeleted)|false|none|
|» maximum_allowed|body|integer|false|none|
|» minimum_required|body|integer|false|none|
|» modifiers|body|[object]|false|none|
|» » alternate_name|body|string|false|none|
|» » available|body|[Available](#schemaavailable)|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » id|body|string|false|none|
|» » name|body|string|false|none|
|» » price_amount|body|number|false|none|
|» name|body|string|false|none|
|» present_at_all_locations|body|boolean|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» selection_type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» selection_type|single|
|» selection_type|multiple|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "ModifierGroups",
  "service": "square",
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

<h3 id="create-modifier-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|ModifierGroups|[CreateModifierGroupResponse](#schemacreatemodifiergroupresponse)|
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

## Get Modifier Group

<a id="opIdmodifierGroupsOne"></a>

> Code samples

```bash
curl https://example.com/pos/modifier-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/modifier-groups/{id}`

Get Modifier Group

<h3 id="get-modifier-group-parameters">Parameters</h3>

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
    "alternate_name": "Modifier New",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "id": "12345",
    "maximum_allowed": 5,
    "minimum_required": 1,
    "modifiers": [
      {
        "alternate_name": "Modifier New",
        "available": true,
        "currency": "USD",
        "id": "12345",
        "name": "Modifier",
        "price_amount": 10
      }
    ],
    "name": "Modifier",
    "present_at_all_locations": false,
    "row_version": "1-12345",
    "selection_type": "single",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "ModifierGroups",
  "service": "square",
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

<h3 id="get-modifier-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ModifierGroups|[GetModifierGroupResponse](#schemagetmodifiergroupresponse)|
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

## Delete Modifier Group

<a id="opIdmodifierGroupsDelete"></a>

> Code samples

```bash
curl https://example.com/pos/modifier-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/modifier-groups/{id}`

Delete Modifier Group

<h3 id="delete-modifier-group-parameters">Parameters</h3>

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
  "resource": "ModifierGroups",
  "service": "square",
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

<h3 id="delete-modifier-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ModifierGroups|[DeleteModifierGroupResponse](#schemadeletemodifiergroupresponse)|
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

## Update Modifier Group

<a id="opIdmodifierGroupsUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/modifier-groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "alternate_name": "Modifier New",
    "deleted": true,
    "maximum_allowed": 5,
    "minimum_required": 1,
    "modifiers": [
      {
        "alternate_name": "Modifier New",
        "available": true,
        "currency": "USD",
        "id": "12345",
        "name": "Modifier",
        "price_amount": 10
      }
    ],
    "name": "Modifier",
    "present_at_all_locations": false,
    "row_version": "1-12345",
    "selection_type": "single"
  }'
```

`PATCH /pos/modifier-groups/{id}`

Update Modifier Group

> Body parameter

```json
{
  "alternate_name": "Modifier New",
  "deleted": true,
  "maximum_allowed": 5,
  "minimum_required": 1,
  "modifiers": [
    {
      "alternate_name": "Modifier New",
      "available": true,
      "currency": "USD",
      "id": "12345",
      "name": "Modifier",
      "price_amount": 10
    }
  ],
  "name": "Modifier",
  "present_at_all_locations": false,
  "row_version": "1-12345",
  "selection_type": "single"
}
```

<h3 id="update-modifier-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[ModifierGroup](#schemamodifiergroup)|true|none|
|» alternate_name|body|string|false|none|
|» deleted|body|[Deleted](#schemadeleted)|false|none|
|» maximum_allowed|body|integer|false|none|
|» minimum_required|body|integer|false|none|
|» modifiers|body|[object]|false|none|
|» » alternate_name|body|string|false|none|
|» » available|body|[Available](#schemaavailable)|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » id|body|string|false|none|
|» » name|body|string|false|none|
|» » price_amount|body|number|false|none|
|» name|body|string|false|none|
|» present_at_all_locations|body|boolean|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» selection_type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » currency|UNKNOWN_CURRENCY|
|» » currency|AED|
|» » currency|AFN|
|» » currency|ALL|
|» » currency|AMD|
|» » currency|ANG|
|» » currency|AOA|
|» » currency|ARS|
|» » currency|AUD|
|» » currency|AWG|
|» » currency|AZN|
|» » currency|BAM|
|» » currency|BBD|
|» » currency|BDT|
|» » currency|BGN|
|» » currency|BHD|
|» » currency|BIF|
|» » currency|BMD|
|» » currency|BND|
|» » currency|BOB|
|» » currency|BOV|
|» » currency|BRL|
|» » currency|BSD|
|» » currency|BTN|
|» » currency|BWP|
|» » currency|BYR|
|» » currency|BZD|
|» » currency|CAD|
|» » currency|CDF|
|» » currency|CHE|
|» » currency|CHF|
|» » currency|CHW|
|» » currency|CLF|
|» » currency|CLP|
|» » currency|CNY|
|» » currency|COP|
|» » currency|COU|
|» » currency|CRC|
|» » currency|CUC|
|» » currency|CUP|
|» » currency|CVE|
|» » currency|CZK|
|» » currency|DJF|
|» » currency|DKK|
|» » currency|DOP|
|» » currency|DZD|
|» » currency|EGP|
|» » currency|ERN|
|» » currency|ETB|
|» » currency|EUR|
|» » currency|FJD|
|» » currency|FKP|
|» » currency|GBP|
|» » currency|GEL|
|» » currency|GHS|
|» » currency|GIP|
|» » currency|GMD|
|» » currency|GNF|
|» » currency|GTQ|
|» » currency|GYD|
|» » currency|HKD|
|» » currency|HNL|
|» » currency|HRK|
|» » currency|HTG|
|» » currency|HUF|
|» » currency|IDR|
|» » currency|ILS|
|» » currency|INR|
|» » currency|IQD|
|» » currency|IRR|
|» » currency|ISK|
|» » currency|JMD|
|» » currency|JOD|
|» » currency|JPY|
|» » currency|KES|
|» » currency|KGS|
|» » currency|KHR|
|» » currency|KMF|
|» » currency|KPW|
|» » currency|KRW|
|» » currency|KWD|
|» » currency|KYD|
|» » currency|KZT|
|» » currency|LAK|
|» » currency|LBP|
|» » currency|LKR|
|» » currency|LRD|
|» » currency|LSL|
|» » currency|LTL|
|» » currency|LVL|
|» » currency|LYD|
|» » currency|MAD|
|» » currency|MDL|
|» » currency|MGA|
|» » currency|MKD|
|» » currency|MMK|
|» » currency|MNT|
|» » currency|MOP|
|» » currency|MRO|
|» » currency|MUR|
|» » currency|MVR|
|» » currency|MWK|
|» » currency|MXN|
|» » currency|MXV|
|» » currency|MYR|
|» » currency|MZN|
|» » currency|NAD|
|» » currency|NGN|
|» » currency|NIO|
|» » currency|NOK|
|» » currency|NPR|
|» » currency|NZD|
|» » currency|OMR|
|» » currency|PAB|
|» » currency|PEN|
|» » currency|PGK|
|» » currency|PHP|
|» » currency|PKR|
|» » currency|PLN|
|» » currency|PYG|
|» » currency|QAR|
|» » currency|RON|
|» » currency|RSD|
|» » currency|RUB|
|» » currency|RWF|
|» » currency|SAR|
|» » currency|SBD|
|» » currency|SCR|
|» » currency|SDG|
|» » currency|SEK|
|» » currency|SGD|
|» » currency|SHP|
|» » currency|SLL|
|» » currency|SOS|
|» » currency|SRD|
|» » currency|SSP|
|» » currency|STD|
|» » currency|SVC|
|» » currency|SYP|
|» » currency|SZL|
|» » currency|THB|
|» » currency|TJS|
|» » currency|TMT|
|» » currency|TND|
|» » currency|TOP|
|» » currency|TRC|
|» » currency|TRY|
|» » currency|TTD|
|» » currency|TWD|
|» » currency|TZS|
|» » currency|UAH|
|» » currency|UGX|
|» » currency|USD|
|» » currency|USN|
|» » currency|USS|
|» » currency|UYI|
|» » currency|UYU|
|» » currency|UZS|
|» » currency|VEF|
|» » currency|VND|
|» » currency|VUV|
|» » currency|WST|
|» » currency|XAF|
|» » currency|XAG|
|» » currency|XAU|
|» » currency|XBA|
|» » currency|XBB|
|» » currency|XBC|
|» » currency|XBD|
|» » currency|XCD|
|» » currency|XDR|
|» » currency|XOF|
|» » currency|XPD|
|» » currency|XPF|
|» » currency|XPT|
|» » currency|XTS|
|» » currency|XXX|
|» » currency|YER|
|» » currency|ZAR|
|» » currency|ZMK|
|» » currency|ZMW|
|» » currency|BTC|
|» » currency|ETH|
|» selection_type|single|
|» selection_type|multiple|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "ModifierGroups",
  "service": "square",
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

<h3 id="update-modifier-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ModifierGroups|[UpdateModifierGroupResponse](#schemaupdatemodifiergroupresponse)|
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

<h1 id="pos-api-order-types">Order Types</h1>

## List Order Types

<a id="opIdorderTypesAll"></a>

> Code samples

```bash
curl https://example.com/pos/order-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/order-types`

List Order Types

<h3 id="list-order-types-parameters">Parameters</h3>

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
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "default": true,
      "id": "12345",
      "name": "Default order type",
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
  "resource": "OrderTypes",
  "service": "clover",
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

<h3 id="list-order-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OrderTypes|[GetOrderTypesResponse](#schemagetordertypesresponse)|
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

## Create Order Type

<a id="opIdorderTypesAdd"></a>

> Code samples

```bash
curl https://example.com/pos/order-types \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "default": true,
    "name": "Default order type"
  }'
```

`POST /pos/order-types`

Create Order Type

> Body parameter

```json
{
  "default": true,
  "name": "Default order type"
}
```

<h3 id="create-order-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[OrderType](#schemaordertype)|true|none|
|» default|body|boolean|false|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "OrderTypes",
  "service": "clover",
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

<h3 id="create-order-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OrderTypes|[CreateOrderTypeResponse](#schemacreateordertyperesponse)|
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

## Get Order Type

<a id="opIdorderTypesOne"></a>

> Code samples

```bash
curl https://example.com/pos/order-types/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/order-types/{id}`

Get Order Type

<h3 id="get-order-type-parameters">Parameters</h3>

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
    "default": true,
    "id": "12345",
    "name": "Default order type",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "OrderTypes",
  "service": "clover",
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

<h3 id="get-order-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OrderTypes|[GetOrderTypeResponse](#schemagetordertyperesponse)|
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

## Delete Order Type

<a id="opIdorderTypesDelete"></a>

> Code samples

```bash
curl https://example.com/pos/order-types/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/order-types/{id}`

Delete Order Type

<h3 id="delete-order-type-parameters">Parameters</h3>

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
  "resource": "OrderTypes",
  "service": "clover",
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

<h3 id="delete-order-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OrderTypes|[DeleteOrderTypeResponse](#schemadeleteordertyperesponse)|
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

## Update Order Type

<a id="opIdorderTypesUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/order-types/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "default": true,
    "name": "Default order type"
  }'
```

`PATCH /pos/order-types/{id}`

Update Order Type

> Body parameter

```json
{
  "default": true,
  "name": "Default order type"
}
```

<h3 id="update-order-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[OrderType](#schemaordertype)|true|none|
|» default|body|boolean|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "OrderTypes",
  "service": "clover",
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

<h3 id="update-order-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OrderTypes|[UpdateOrderTypeResponse](#schemaupdateordertyperesponse)|
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

<h1 id="pos-api-tenders">Tenders</h1>

## List Tenders

<a id="opIdtendersAll"></a>

> Code samples

```bash
curl https://example.com/pos/tenders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/tenders`

List Tenders

<h3 id="list-tenders-parameters">Parameters</h3>

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
      "active": true,
      "allows_tipping": true,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "editable": true,
      "hidden": true,
      "id": "12345",
      "key": "com.clover.tender.cash",
      "label": "Cash",
      "opens_cash_drawer": true,
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
  "resource": "Tenders",
  "service": "clover",
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

<h3 id="list-tenders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenders|[GetTendersResponse](#schemagettendersresponse)|
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

## Create Tender

<a id="opIdtendersAdd"></a>

> Code samples

```bash
curl https://example.com/pos/tenders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "allows_tipping": true,
    "editable": true,
    "hidden": true,
    "key": "com.clover.tender.cash",
    "label": "Cash",
    "opens_cash_drawer": true
  }'
```

`POST /pos/tenders`

Create Tender

> Body parameter

```json
{
  "active": true,
  "allows_tipping": true,
  "editable": true,
  "hidden": true,
  "key": "com.clover.tender.cash",
  "label": "Cash",
  "opens_cash_drawer": true
}
```

<h3 id="create-tender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Tender](#schematender)|true|none|
|» active|body|[Active](#schemaactive)|false|none|
|» allows_tipping|body|boolean|false|Allow tipping on payment from tender|
|» editable|body|[Hidden](#schemahidden)|false|none|
|» hidden|body|[Hidden](#schemahidden)|false|none|
|» key|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» opens_cash_drawer|body|boolean|false|If this tender opens the cash drawer|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Tenders",
  "service": "clover",
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

<h3 id="create-tender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Tenders|[CreateTenderResponse](#schemacreatetenderresponse)|
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

## Get Tender

<a id="opIdtendersOne"></a>

> Code samples

```bash
curl https://example.com/pos/tenders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /pos/tenders/{id}`

Get Tender

<h3 id="get-tender-parameters">Parameters</h3>

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
    "allows_tipping": true,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "editable": true,
    "hidden": true,
    "id": "12345",
    "key": "com.clover.tender.cash",
    "label": "Cash",
    "opens_cash_drawer": true,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Tenders",
  "service": "clover",
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

<h3 id="get-tender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenders|[GetTenderResponse](#schemagettenderresponse)|
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

## Delete Tender

<a id="opIdtendersDelete"></a>

> Code samples

```bash
curl https://example.com/pos/tenders/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /pos/tenders/{id}`

Delete Tender

<h3 id="delete-tender-parameters">Parameters</h3>

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
  "resource": "Tenders",
  "service": "clover",
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

<h3 id="delete-tender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenders|[DeleteTenderResponse](#schemadeletetenderresponse)|
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

## Update Tender

<a id="opIdtendersUpdate"></a>

> Code samples

```bash
curl https://example.com/pos/tenders/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "active": true,
    "allows_tipping": true,
    "editable": true,
    "hidden": true,
    "key": "com.clover.tender.cash",
    "label": "Cash",
    "opens_cash_drawer": true
  }'
```

`PATCH /pos/tenders/{id}`

Update Tender

> Body parameter

```json
{
  "active": true,
  "allows_tipping": true,
  "editable": true,
  "hidden": true,
  "key": "com.clover.tender.cash",
  "label": "Cash",
  "opens_cash_drawer": true
}
```

<h3 id="update-tender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Tender](#schematender)|true|none|
|» active|body|[Active](#schemaactive)|false|none|
|» allows_tipping|body|boolean|false|Allow tipping on payment from tender|
|» editable|body|[Hidden](#schemahidden)|false|none|
|» hidden|body|[Hidden](#schemahidden)|false|none|
|» key|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» opens_cash_drawer|body|boolean|false|If this tender opens the cash drawer|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Tenders",
  "service": "clover",
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

<h3 id="update-tender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenders|[UpdateTenderResponse](#schemaupdatetenderresponse)|
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

<h2 id="tocS_Available">Available</h2>
<!-- backwards compatibility -->
<a id="schemaavailable"></a>
<a id="schema_Available"></a>
<a id="tocSavailable"></a>
<a id="tocsavailable"></a>

```json
true
```

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

<h2 id="tocS_CreateItemResponse">CreateItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateitemresponse"></a>
<a id="schema_CreateItemResponse"></a>
<a id="tocScreateitemresponse"></a>
<a id="tocscreateitemresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Items",
  "service": "square",
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

<h2 id="tocS_CreateLocationResponse">CreateLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationresponse"></a>
<a id="schema_CreateLocationResponse"></a>
<a id="tocScreatelocationresponse"></a>
<a id="tocscreatelocationresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Locations",
  "service": "square",
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

<h2 id="tocS_CreateMerchantResponse">CreateMerchantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemerchantresponse"></a>
<a id="schema_CreateMerchantResponse"></a>
<a id="tocScreatemerchantresponse"></a>
<a id="tocscreatemerchantresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Merchants",
  "service": "square",
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

<h2 id="tocS_CreateModifierGroupResponse">CreateModifierGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodifiergroupresponse"></a>
<a id="schema_CreateModifierGroupResponse"></a>
<a id="tocScreatemodifiergroupresponse"></a>
<a id="tocscreatemodifiergroupresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "ModifierGroups",
  "service": "square",
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

<h2 id="tocS_CreateModifierResponse">CreateModifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodifierresponse"></a>
<a id="schema_CreateModifierResponse"></a>
<a id="tocScreatemodifierresponse"></a>
<a id="tocscreatemodifierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Modifiers",
  "service": "square",
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

<h2 id="tocS_CreateOrderResponse">CreateOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderresponse"></a>
<a id="schema_CreateOrderResponse"></a>
<a id="tocScreateorderresponse"></a>
<a id="tocscreateorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "orders",
  "service": "clover",
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

<h2 id="tocS_CreateOrderTypeResponse">CreateOrderTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateordertyperesponse"></a>
<a id="schema_CreateOrderTypeResponse"></a>
<a id="tocScreateordertyperesponse"></a>
<a id="tocscreateordertyperesponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "OrderTypes",
  "service": "clover",
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

<h2 id="tocS_CreatePosPaymentResponse">CreatePosPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepospaymentresponse"></a>
<a id="schema_CreatePosPaymentResponse"></a>
<a id="tocScreatepospaymentresponse"></a>
<a id="tocscreatepospaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "PosPayments",
  "service": "square",
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

<h2 id="tocS_CreateTenderResponse">CreateTenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetenderresponse"></a>
<a id="schema_CreateTenderResponse"></a>
<a id="tocScreatetenderresponse"></a>
<a id="tocscreatetenderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Tenders",
  "service": "clover",
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

<h2 id="tocS_DeleteItemResponse">DeleteItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteitemresponse"></a>
<a id="schema_DeleteItemResponse"></a>
<a id="tocSdeleteitemresponse"></a>
<a id="tocsdeleteitemresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Items",
  "service": "square",
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

<h2 id="tocS_DeleteLocationResponse">DeleteLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelocationresponse"></a>
<a id="schema_DeleteLocationResponse"></a>
<a id="tocSdeletelocationresponse"></a>
<a id="tocsdeletelocationresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Locations",
  "service": "square",
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

<h2 id="tocS_DeleteMerchantResponse">DeleteMerchantResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemerchantresponse"></a>
<a id="schema_DeleteMerchantResponse"></a>
<a id="tocSdeletemerchantresponse"></a>
<a id="tocsdeletemerchantresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Merchants",
  "service": "square",
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

<h2 id="tocS_DeleteModifierGroupResponse">DeleteModifierGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodifiergroupresponse"></a>
<a id="schema_DeleteModifierGroupResponse"></a>
<a id="tocSdeletemodifiergroupresponse"></a>
<a id="tocsdeletemodifiergroupresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "ModifierGroups",
  "service": "square",
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

<h2 id="tocS_DeleteModifierResponse">DeleteModifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodifierresponse"></a>
<a id="schema_DeleteModifierResponse"></a>
<a id="tocSdeletemodifierresponse"></a>
<a id="tocsdeletemodifierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Modifiers",
  "service": "square",
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

<h2 id="tocS_DeleteOrderResponse">DeleteOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorderresponse"></a>
<a id="schema_DeleteOrderResponse"></a>
<a id="tocSdeleteorderresponse"></a>
<a id="tocsdeleteorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "orders",
  "service": "clover",
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

<h2 id="tocS_DeleteOrderTypeResponse">DeleteOrderTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteordertyperesponse"></a>
<a id="schema_DeleteOrderTypeResponse"></a>
<a id="tocSdeleteordertyperesponse"></a>
<a id="tocsdeleteordertyperesponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "OrderTypes",
  "service": "clover",
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

<h2 id="tocS_DeletePosPaymentResponse">DeletePosPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepospaymentresponse"></a>
<a id="schema_DeletePosPaymentResponse"></a>
<a id="tocSdeletepospaymentresponse"></a>
<a id="tocsdeletepospaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "PosPayments",
  "service": "square",
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

<h2 id="tocS_DeleteTenderResponse">DeleteTenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetenderresponse"></a>
<a id="schema_DeleteTenderResponse"></a>
<a id="tocSdeletetenderresponse"></a>
<a id="tocsdeletetenderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Tenders",
  "service": "clover",
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

<h2 id="tocS_Deleted">Deleted</h2>
<!-- backwards compatibility -->
<a id="schemadeleted"></a>
<a id="schema_Deleted"></a>
<a id="tocSdeleted"></a>
<a id="tocsdeleted"></a>

```json
true
```

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

<h2 id="tocS_GetItemResponse">GetItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetitemresponse"></a>
<a id="schema_GetItemResponse"></a>
<a id="tocSgetitemresponse"></a>
<a id="tocsgetitemresponse"></a>

```json
{
  "data": {
    "abbreviation": "Ch",
    "absent_at_location_ids": [
      "12345",
      "67890"
    ],
    "available": true,
    "available_for_pickup": false,
    "available_online": false,
    "categories": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "name": "Food"
      }
    ],
    "code": "11910345",
    "cost": 2,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "description": "Hot Chocolate",
    "hidden": true,
    "id": "#cocoa",
    "idempotency_key": "random_string",
    "modifier_groups": [
      {
        "id": "12345"
      }
    ],
    "name": "Cocoa",
    "options": [
      {
        "attribute_id": "12345",
        "id": "12345",
        "name": "Option 1"
      }
    ],
    "present_at_all_locations": false,
    "price_amount": 10,
    "price_currency": "USD",
    "pricing_type": "fixed",
    "product_type": "regular",
    "sku": "11910345",
    "tax_ids": [
      "12345",
      "67890"
    ],
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "variations": [
      {
        "id": "12345",
        "image_ids": [
          "12345",
          "67890"
        ],
        "item_id": "12345",
        "name": "Food",
        "price_amount": 10,
        "price_currency": "USD",
        "pricing_type": "fixed",
        "sequence": 0,
        "sku": "11910345"
      }
    ],
    "version": "12345"
  },
  "operation": "one",
  "resource": "Items",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Item](#schemaitem)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetItemsResponse">GetItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetitemsresponse"></a>
<a id="schema_GetItemsResponse"></a>
<a id="tocSgetitemsresponse"></a>
<a id="tocsgetitemsresponse"></a>

```json
{
  "data": [
    {
      "abbreviation": "Ch",
      "absent_at_location_ids": [
        "12345",
        "67890"
      ],
      "available": true,
      "available_for_pickup": false,
      "available_online": false,
      "categories": [
        {
          "id": "12345",
          "image_ids": [
            "12345",
            "67890"
          ],
          "name": "Food"
        }
      ],
      "code": "11910345",
      "cost": 2,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "description": "Hot Chocolate",
      "hidden": true,
      "id": "#cocoa",
      "idempotency_key": "random_string",
      "modifier_groups": [
        {
          "id": "12345"
        }
      ],
      "name": "Cocoa",
      "options": [
        {
          "attribute_id": "12345",
          "id": "12345",
          "name": "Option 1"
        }
      ],
      "present_at_all_locations": false,
      "price_amount": 10,
      "price_currency": "USD",
      "pricing_type": "fixed",
      "product_type": "regular",
      "sku": "11910345",
      "tax_ids": [
        "12345",
        "67890"
      ],
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "variations": [
        {
          "id": "12345",
          "image_ids": [
            "12345",
            "67890"
          ],
          "item_id": "12345",
          "name": "Food",
          "price_amount": 10,
          "price_currency": "USD",
          "pricing_type": "fixed",
          "sequence": 0,
          "sku": "11910345"
        }
      ],
      "version": "12345"
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
  "resource": "Items",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Item](#schemaitem)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetLocationResponse">GetLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlocationresponse"></a>
<a id="schema_GetLocationResponse"></a>
<a id="tocSgetlocationresponse"></a>
<a id="tocsgetlocationresponse"></a>

```json
{
  "data": {
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
    "business_name": "Dunkin Donuts LLC",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "merchant_id": "12345",
    "name": "Dunkin Donuts",
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Locations",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Location](#schemalocation)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetLocationsResponse">GetLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlocationsresponse"></a>
<a id="schema_GetLocationsResponse"></a>
<a id="tocSgetlocationsresponse"></a>
<a id="tocsgetlocationsresponse"></a>

```json
{
  "data": [
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
      "business_name": "Dunkin Donuts LLC",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "merchant_id": "12345",
      "name": "Dunkin Donuts",
      "status": "active",
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
  "resource": "Locations",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Location](#schemalocation)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetMerchantResponse">GetMerchantResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmerchantresponse"></a>
<a id="schema_GetMerchantResponse"></a>
<a id="tocSgetmerchantresponse"></a>
<a id="tocsgetmerchantresponse"></a>

```json
{
  "data": {
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
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "language": "EN",
    "main_location_id": "12345",
    "name": "Dunkin Donuts",
    "owner_id": "12345",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "status": "active",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Merchants",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Merchant](#schemamerchant)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetMerchantsResponse">GetMerchantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmerchantsresponse"></a>
<a id="schema_GetMerchantsResponse"></a>
<a id="tocSgetmerchantsresponse"></a>
<a id="tocsgetmerchantsresponse"></a>

```json
{
  "data": [
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
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "language": "EN",
      "main_location_id": "12345",
      "name": "Dunkin Donuts",
      "owner_id": "12345",
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "status": "active",
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
  "resource": "Merchants",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Merchant](#schemamerchant)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetModifierGroupResponse">GetModifierGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodifiergroupresponse"></a>
<a id="schema_GetModifierGroupResponse"></a>
<a id="tocSgetmodifiergroupresponse"></a>
<a id="tocsgetmodifiergroupresponse"></a>

```json
{
  "data": {
    "alternate_name": "Modifier New",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "id": "12345",
    "maximum_allowed": 5,
    "minimum_required": 1,
    "modifiers": [
      {
        "alternate_name": "Modifier New",
        "available": true,
        "currency": "USD",
        "id": "12345",
        "name": "Modifier",
        "price_amount": 10
      }
    ],
    "name": "Modifier",
    "present_at_all_locations": false,
    "row_version": "1-12345",
    "selection_type": "single",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "ModifierGroups",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ModifierGroup](#schemamodifiergroup)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetModifierGroupsResponse">GetModifierGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodifiergroupsresponse"></a>
<a id="schema_GetModifierGroupsResponse"></a>
<a id="tocSgetmodifiergroupsresponse"></a>
<a id="tocsgetmodifiergroupsresponse"></a>

```json
{
  "data": [
    {
      "alternate_name": "Modifier New",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "id": "12345",
      "maximum_allowed": 5,
      "minimum_required": 1,
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "available": true,
          "currency": "USD",
          "id": "12345",
          "name": "Modifier",
          "price_amount": 10
        }
      ],
      "name": "Modifier",
      "present_at_all_locations": false,
      "row_version": "1-12345",
      "selection_type": "single",
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
  "resource": "ModifierGroups",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ModifierGroup](#schemamodifiergroup)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetModifierResponse">GetModifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodifierresponse"></a>
<a id="schema_GetModifierResponse"></a>
<a id="tocSgetmodifierresponse"></a>
<a id="tocsgetmodifierresponse"></a>

```json
{
  "data": {
    "alternate_name": "Modifier New",
    "available": true,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "id": "12345",
    "idempotency_key": "random_string",
    "modifier_group_id": "123",
    "name": "Modifier",
    "price_amount": 10,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Modifiers",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Modifier](#schemamodifier)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetModifiersResponse">GetModifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodifiersresponse"></a>
<a id="schema_GetModifiersResponse"></a>
<a id="tocSgetmodifiersresponse"></a>
<a id="tocsgetmodifiersresponse"></a>

```json
{
  "data": [
    {
      "alternate_name": "Modifier New",
      "available": true,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "id": "12345",
      "idempotency_key": "random_string",
      "modifier_group_id": "123",
      "name": "Modifier",
      "price_amount": 10,
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
  "resource": "Modifiers",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Modifier](#schemamodifier)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetOrderResponse">GetOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorderresponse"></a>
<a id="schema_GetOrderResponse"></a>
<a id="tocSgetorderresponse"></a>
<a id="tocsgetorderresponse"></a>

```json
{
  "data": {
    "closed_date": "2022-08-13",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "customer_id": "12345",
    "customers": [
      {
        "emails": [
          {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          }
        ],
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "middle_name": "D.",
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
    ],
    "discounts": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "10% off",
        "product_id": "12345",
        "scope": "order",
        "type": "percentage"
      }
    ],
    "employee_id": "12345",
    "fulfillments": [
      {
        "id": "12345",
        "pickup_details": {
          "accepted_at": "2020-09-30T07:43:32.000Z",
          "auto_complete_duration": "P1W3D",
          "cancel_reason": "Not hungry",
          "canceled_at": "2016-09-04T23:59:33.123Z",
          "curbside_pickup_details": {
            "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
            "curbside_details": "string"
          },
          "expired_at": "2016-09-04T23:59:33.123Z",
          "expires_at": "2016-09-04T23:59:33.123Z",
          "is_curbside_pickup": true,
          "note": "Pickup in the back.",
          "picked_up_at": "2016-09-04T23:59:33.123Z",
          "pickup_at": "2016-09-04T23:59:33.123Z",
          "pickup_window_duration": "P1W3D",
          "placed_at": "2016-09-04T23:59:33.123Z",
          "prep_time_duration": "P1W3D",
          "ready_at": "2016-09-04T23:59:33.123Z",
          "recipient": {
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
            "customer_id": "12345",
            "display_name": "Elon Musk",
            "email": {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            },
            "phone_number": {
              "area_code": "323",
              "country_code": "1",
              "extension": "105",
              "id": "12345",
              "number": "111-111-1111",
              "type": "primary"
            }
          },
          "rejected_at": "2016-09-04T23:59:33.123Z",
          "schedule_type": "scheduled"
        },
        "shipment_details": {},
        "status": "proposed",
        "type": "shipment"
      }
    ],
    "id": "12345",
    "idempotency_key": "random_string",
    "line_items": [
      {
        "applied_discounts": [
          {
            "amount": 27500,
            "currency": "USD",
            "discount_id": "12345",
            "id": "12345"
          }
        ],
        "applied_taxes": [
          {
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "tax_id": "sales-tax"
          }
        ],
        "id": "12345",
        "item": {
          "id": "12345"
        },
        "modifiers": [
          {
            "alternate_name": "Modifier New",
            "amount": 27500,
            "currency": "USD",
            "id": "12345",
            "modifier_group_id": "123",
            "name": "New York Strip Steak - no cheese"
          }
        ],
        "name": "New York Strip Steak",
        "quantity": 1,
        "total_amount": 27500,
        "total_discount": 3000,
        "total_tax": 2000,
        "unit_price": 27500.5
      }
    ],
    "location_id": "12345",
    "merchant_id": "12345",
    "note": "string",
    "order_date": "2022-08-12",
    "order_number": "1F",
    "order_type_id": "12345",
    "payment_status": "open",
    "payments": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345"
      }
    ],
    "reference_id": "my-order-001",
    "refunded": false,
    "refunds": [
      {
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "location_id": "12345",
        "reason": "The reason for the refund being issued.",
        "status": "pending",
        "tender_id": "12345",
        "transaction_id": "12345"
      }
    ],
    "seat": "23F",
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "api",
    "status": "open",
    "table": "1F",
    "taxes": [
      {
        "amount": 27500,
        "auto_applied": true,
        "currency": "USD",
        "id": "state-sales-tax",
        "name": "State Sales Tax",
        "percentage": 15,
        "scope": "order",
        "type": "unknown"
      }
    ],
    "tenders": [
      {
        "amount": 27500,
        "buyer_tendered_cash_amount": 27500,
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "id": "12345",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        },
        "card_entry_method": "swiped",
        "card_status": "authorized",
        "change_back_cash_amount": 27500,
        "currency": "USD",
        "id": "12345",
        "location_id": "12345",
        "name": "10% off",
        "note": "An optional note associated with the tender at the time of payment.",
        "payment_id": "12345",
        "percentage": 10,
        "total_amount": 27.5,
        "total_discount": 3,
        "total_processing_fee": 0,
        "total_refund": 0,
        "total_service_charge": 0,
        "total_tax": 2.75,
        "total_tip": 7,
        "transaction_id": "12345",
        "type": "cash"
      }
    ],
    "title": "string",
    "total_amount": 275,
    "total_discount": 300,
    "total_refund": 0,
    "total_service_charge": 0,
    "total_tax": 275,
    "total_tip": 700,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "version": "230320320320",
    "voided": false,
    "voided_at": "2020-09-30T07:43:32.000Z"
  },
  "operation": "one",
  "resource": "orders",
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Order](#schemaorder)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetOrderTypeResponse">GetOrderTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetordertyperesponse"></a>
<a id="schema_GetOrderTypeResponse"></a>
<a id="tocSgetordertyperesponse"></a>
<a id="tocsgetordertyperesponse"></a>

```json
{
  "data": {
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "default": true,
    "id": "12345",
    "name": "Default order type",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "OrderTypes",
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OrderType](#schemaordertype)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetOrderTypesResponse">GetOrderTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetordertypesresponse"></a>
<a id="schema_GetOrderTypesResponse"></a>
<a id="tocSgetordertypesresponse"></a>
<a id="tocsgetordertypesresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "default": true,
      "id": "12345",
      "name": "Default order type",
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
  "resource": "OrderTypes",
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OrderType](#schemaordertype)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetOrdersResponse">GetOrdersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetordersresponse"></a>
<a id="schema_GetOrdersResponse"></a>
<a id="tocSgetordersresponse"></a>
<a id="tocsgetordersresponse"></a>

```json
{
  "data": [
    {
      "closed_date": "2022-08-13",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "customer_id": "12345",
      "customers": [
        {
          "emails": [
            {
              "email": "elon@musk.com",
              "id": "123",
              "type": "primary"
            }
          ],
          "first_name": "Elon",
          "id": "12345",
          "last_name": "Musk",
          "middle_name": "D.",
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
      ],
      "discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "10% off",
          "product_id": "12345",
          "scope": "order",
          "type": "percentage"
        }
      ],
      "employee_id": "12345",
      "fulfillments": [
        {
          "id": "12345",
          "pickup_details": {
            "accepted_at": "2020-09-30T07:43:32.000Z",
            "auto_complete_duration": "P1W3D",
            "cancel_reason": "Not hungry",
            "canceled_at": "2016-09-04T23:59:33.123Z",
            "curbside_pickup_details": {
              "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
              "curbside_details": "string"
            },
            "expired_at": "2016-09-04T23:59:33.123Z",
            "expires_at": "2016-09-04T23:59:33.123Z",
            "is_curbside_pickup": true,
            "note": "Pickup in the back.",
            "picked_up_at": "2016-09-04T23:59:33.123Z",
            "pickup_at": "2016-09-04T23:59:33.123Z",
            "pickup_window_duration": "P1W3D",
            "placed_at": "2016-09-04T23:59:33.123Z",
            "prep_time_duration": "P1W3D",
            "ready_at": "2016-09-04T23:59:33.123Z",
            "recipient": {
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
              "customer_id": "12345",
              "display_name": "Elon Musk",
              "email": {
                "email": "elon@musk.com",
                "id": "123",
                "type": "primary"
              },
              "phone_number": {
                "area_code": "323",
                "country_code": "1",
                "extension": "105",
                "id": "12345",
                "number": "111-111-1111",
                "type": "primary"
              }
            },
            "rejected_at": "2016-09-04T23:59:33.123Z",
            "schedule_type": "scheduled"
          },
          "shipment_details": {},
          "status": "proposed",
          "type": "shipment"
        }
      ],
      "id": "12345",
      "idempotency_key": "random_string",
      "line_items": [
        {
          "applied_discounts": [
            {
              "amount": 27500,
              "currency": "USD",
              "discount_id": "12345",
              "id": "12345"
            }
          ],
          "applied_taxes": [
            {
              "amount": 27500,
              "currency": "USD",
              "id": "12345",
              "tax_id": "sales-tax"
            }
          ],
          "id": "12345",
          "item": {
            "id": "12345"
          },
          "modifiers": [
            {
              "alternate_name": "Modifier New",
              "amount": 27500,
              "currency": "USD",
              "id": "12345",
              "modifier_group_id": "123",
              "name": "New York Strip Steak - no cheese"
            }
          ],
          "name": "New York Strip Steak",
          "quantity": 1,
          "total_amount": 27500,
          "total_discount": 3000,
          "total_tax": 2000,
          "unit_price": 27500.5
        }
      ],
      "location_id": "12345",
      "merchant_id": "12345",
      "note": "string",
      "order_date": "2022-08-12",
      "order_number": "1F",
      "order_type_id": "12345",
      "payment_status": "open",
      "payments": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345"
        }
      ],
      "reference_id": "my-order-001",
      "refunded": false,
      "refunds": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "location_id": "12345",
          "reason": "The reason for the refund being issued.",
          "status": "pending",
          "tender_id": "12345",
          "transaction_id": "12345"
        }
      ],
      "seat": "23F",
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "source": "api",
      "status": "open",
      "table": "1F",
      "taxes": [
        {
          "amount": 27500,
          "auto_applied": true,
          "currency": "USD",
          "id": "state-sales-tax",
          "name": "State Sales Tax",
          "percentage": 15,
          "scope": "order",
          "type": "unknown"
        }
      ],
      "tenders": [
        {
          "amount": 27500,
          "buyer_tendered_cash_amount": 27500,
          "card": {
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
            "bin": "41111",
            "card_brand": "visa",
            "card_type": "credit",
            "cardholder_name": "John Doe",
            "customer_id": "12345",
            "enabled": true,
            "exp_month": 1,
            "exp_year": 2022,
            "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            "id": "12345",
            "last_4": "The last 4 digits of the card number.",
            "merchant_id": "12345",
            "prepaid_type": "prepaid",
            "reference_id": "card-001",
            "version": "230320320320"
          },
          "card_entry_method": "swiped",
          "card_status": "authorized",
          "change_back_cash_amount": 27500,
          "currency": "USD",
          "id": "12345",
          "location_id": "12345",
          "name": "10% off",
          "note": "An optional note associated with the tender at the time of payment.",
          "payment_id": "12345",
          "percentage": 10,
          "total_amount": 27.5,
          "total_discount": 3,
          "total_processing_fee": 0,
          "total_refund": 0,
          "total_service_charge": 0,
          "total_tax": 2.75,
          "total_tip": 7,
          "transaction_id": "12345",
          "type": "cash"
        }
      ],
      "title": "string",
      "total_amount": 275,
      "total_discount": 300,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 275,
      "total_tip": 700,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "version": "230320320320",
      "voided": false,
      "voided_at": "2020-09-30T07:43:32.000Z"
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
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Order](#schemaorder)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPosPaymentResponse">GetPosPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpospaymentresponse"></a>
<a id="schema_GetPosPaymentResponse"></a>
<a id="tocSgetpospaymentresponse"></a>
<a id="tocsgetpospaymentresponse"></a>

```json
{
  "data": {
    "amount": 27.5,
    "app_fee": 3,
    "approved": 37.5,
    "bank_account": {
      "account_ownership_type": "string",
      "ach_details": {
        "account_number_suffix": "stri",
        "account_type": "string",
        "routing_number": "string"
      },
      "bank_name": "string",
      "country": "US",
      "fingerprint": "string",
      "statement_description": "string",
      "transfer_type": "string"
    },
    "card_details": {
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "id": "12345",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      }
    },
    "cash": {
      "amount": null,
      "charge_back_amount": null
    },
    "change_back_cash_amount": 20,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "currency": "USD",
    "customer_id": "12345",
    "device_id": "12345",
    "employee_id": "12345",
    "external_details": {
      "source": "string",
      "source_fee_amount": 2.5,
      "source_id": "string",
      "type": "check"
    },
    "external_payment_id": "12345",
    "id": "12345",
    "idempotency_key": "random_string",
    "location_id": "12345",
    "merchant_id": "12345",
    "order_id": "12345",
    "processing_fees": [
      {
        "amount": 1.05,
        "effective_at": "2020-09-30T07:43:32.000Z",
        "processing_type": "initial"
      }
    ],
    "refunded": 37.5,
    "service_charges": [
      {
        "active": true,
        "amount": 27500,
        "currency": "USD",
        "id": "12345",
        "name": "Charge for delivery",
        "percentage": 12.5,
        "type": "auto_gratuity"
      }
    ],
    "source": "external",
    "source_id": "12345",
    "status": "approved",
    "tax": 20,
    "tender_id": "12345",
    "tip": 7,
    "total": 37.5,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "wallet": {
      "status": "authorized"
    }
  },
  "operation": "one",
  "resource": "PosPayments",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PosPayment](#schemapospayment)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPosPaymentsResponse">GetPosPaymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpospaymentsresponse"></a>
<a id="schema_GetPosPaymentsResponse"></a>
<a id="tocSgetpospaymentsresponse"></a>
<a id="tocsgetpospaymentsresponse"></a>

```json
{
  "data": [
    {
      "amount": 27.5,
      "app_fee": 3,
      "approved": 37.5,
      "bank_account": {
        "account_ownership_type": "string",
        "ach_details": {
          "account_number_suffix": "stri",
          "account_type": "string",
          "routing_number": "string"
        },
        "bank_name": "string",
        "country": "US",
        "fingerprint": "string",
        "statement_description": "string",
        "transfer_type": "string"
      },
      "card_details": {
        "card": {
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
          "bin": "41111",
          "card_brand": "visa",
          "card_type": "credit",
          "cardholder_name": "John Doe",
          "customer_id": "12345",
          "enabled": true,
          "exp_month": 1,
          "exp_year": 2022,
          "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          "id": "12345",
          "last_4": "The last 4 digits of the card number.",
          "merchant_id": "12345",
          "prepaid_type": "prepaid",
          "reference_id": "card-001",
          "version": "230320320320"
        }
      },
      "cash": {
        "amount": null,
        "charge_back_amount": null
      },
      "change_back_cash_amount": 20,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "currency": "USD",
      "customer_id": "12345",
      "device_id": "12345",
      "employee_id": "12345",
      "external_details": {
        "source": "string",
        "source_fee_amount": 2.5,
        "source_id": "string",
        "type": "check"
      },
      "external_payment_id": "12345",
      "id": "12345",
      "idempotency_key": "random_string",
      "location_id": "12345",
      "merchant_id": "12345",
      "order_id": "12345",
      "processing_fees": [
        {
          "amount": 1.05,
          "effective_at": "2020-09-30T07:43:32.000Z",
          "processing_type": "initial"
        }
      ],
      "refunded": 37.5,
      "service_charges": [
        {
          "active": true,
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "name": "Charge for delivery",
          "percentage": 12.5,
          "type": "auto_gratuity"
        }
      ],
      "source": "external",
      "source_id": "12345",
      "status": "approved",
      "tax": 20,
      "tender_id": "12345",
      "tip": 7,
      "total": 37.5,
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "wallet": {
        "status": "authorized"
      }
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
  "resource": "PosPayments",
  "service": "square",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PosPayment](#schemapospayment)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTenderResponse">GetTenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettenderresponse"></a>
<a id="schema_GetTenderResponse"></a>
<a id="tocSgettenderresponse"></a>
<a id="tocsgettenderresponse"></a>

```json
{
  "data": {
    "active": true,
    "allows_tipping": true,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "editable": true,
    "hidden": true,
    "id": "12345",
    "key": "com.clover.tender.cash",
    "label": "Cash",
    "opens_cash_drawer": true,
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Tenders",
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tender](#schematender)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTendersResponse">GetTendersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettendersresponse"></a>
<a id="schema_GetTendersResponse"></a>
<a id="tocSgettendersresponse"></a>
<a id="tocsgettendersresponse"></a>

```json
{
  "data": [
    {
      "active": true,
      "allows_tipping": true,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "editable": true,
      "hidden": true,
      "id": "12345",
      "key": "com.clover.tender.cash",
      "label": "Cash",
      "opens_cash_drawer": true,
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
  "resource": "Tenders",
  "service": "clover",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tender](#schematender)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_Hidden">Hidden</h2>
<!-- backwards compatibility -->
<a id="schemahidden"></a>
<a id="schema_Hidden"></a>
<a id="tocShidden"></a>
<a id="tocshidden"></a>

```json
true
```

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

<h2 id="tocS_IdempotencyKey">IdempotencyKey</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencykey"></a>
<a id="schema_IdempotencyKey"></a>
<a id="tocSidempotencykey"></a>
<a id="tocsidempotencykey"></a>

```json
"random_string"
```

A value you specify that uniquely identifies this request among requests you have sent.

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "abbreviation": "Ch",
  "absent_at_location_ids": [
    "12345",
    "67890"
  ],
  "available": true,
  "available_for_pickup": false,
  "available_online": false,
  "categories": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "name": "Food"
    }
  ],
  "code": "11910345",
  "cost": 2,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "deleted": true,
  "description": "Hot Chocolate",
  "hidden": true,
  "id": "#cocoa",
  "idempotency_key": "random_string",
  "modifier_groups": [
    {
      "id": "12345"
    }
  ],
  "name": "Cocoa",
  "options": [
    {
      "attribute_id": "12345",
      "id": "12345",
      "name": "Option 1"
    }
  ],
  "present_at_all_locations": false,
  "price_amount": 10,
  "price_currency": "USD",
  "pricing_type": "fixed",
  "product_type": "regular",
  "sku": "11910345",
  "tax_ids": [
    "12345",
    "67890"
  ],
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "variations": [
    {
      "id": "12345",
      "image_ids": [
        "12345",
        "67890"
      ],
      "item_id": "12345",
      "name": "Food",
      "price_amount": 10,
      "price_currency": "USD",
      "pricing_type": "fixed",
      "sequence": 0,
      "sku": "11910345"
    }
  ],
  "version": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|absent_at_location_ids|[string]|false|none|A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.|
|available|[Available](#schemaavailable)|false|none|none|
|available_for_pickup|boolean|false|none|none|
|available_online|boolean|false|none|none|
|categories|[object]|false|none|none|
|code|string|false|none|Product code, e.g. UPC or EAN|
|cost|number|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|deleted|[Deleted](#schemadeleted)|false|none|none|
|description|string|false|none|none|
|hidden|[Hidden](#schemahidden)|false|none|none|
|id|string|false|none|none|
|idempotency_key|[IdempotencyKey](#schemaidempotencykey)|false|none|A value you specify that uniquely identifies this request among requests you have sent.|
|modifier_groups|[object]|false|none|none|
|name|string|true|none|none|
|options|[object]|false|none|List of options pertaining to this item's attribute variation|
|present_at_all_locations|boolean|false|none|none|
|price_amount|number|false|none|none|
|price_currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|pricing_type|string|false|none|none|
|product_type|string|false|none|none|
|sku|string|false|none|SKU of the item|
|tax_ids|[string]|false|none|A list of Tax IDs for the product.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|variations|[object]|false|none|none|
|version|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|price_currency|UNKNOWN_CURRENCY|
|price_currency|AED|
|price_currency|AFN|
|price_currency|ALL|
|price_currency|AMD|
|price_currency|ANG|
|price_currency|AOA|
|price_currency|ARS|
|price_currency|AUD|
|price_currency|AWG|
|price_currency|AZN|
|price_currency|BAM|
|price_currency|BBD|
|price_currency|BDT|
|price_currency|BGN|
|price_currency|BHD|
|price_currency|BIF|
|price_currency|BMD|
|price_currency|BND|
|price_currency|BOB|
|price_currency|BOV|
|price_currency|BRL|
|price_currency|BSD|
|price_currency|BTN|
|price_currency|BWP|
|price_currency|BYR|
|price_currency|BZD|
|price_currency|CAD|
|price_currency|CDF|
|price_currency|CHE|
|price_currency|CHF|
|price_currency|CHW|
|price_currency|CLF|
|price_currency|CLP|
|price_currency|CNY|
|price_currency|COP|
|price_currency|COU|
|price_currency|CRC|
|price_currency|CUC|
|price_currency|CUP|
|price_currency|CVE|
|price_currency|CZK|
|price_currency|DJF|
|price_currency|DKK|
|price_currency|DOP|
|price_currency|DZD|
|price_currency|EGP|
|price_currency|ERN|
|price_currency|ETB|
|price_currency|EUR|
|price_currency|FJD|
|price_currency|FKP|
|price_currency|GBP|
|price_currency|GEL|
|price_currency|GHS|
|price_currency|GIP|
|price_currency|GMD|
|price_currency|GNF|
|price_currency|GTQ|
|price_currency|GYD|
|price_currency|HKD|
|price_currency|HNL|
|price_currency|HRK|
|price_currency|HTG|
|price_currency|HUF|
|price_currency|IDR|
|price_currency|ILS|
|price_currency|INR|
|price_currency|IQD|
|price_currency|IRR|
|price_currency|ISK|
|price_currency|JMD|
|price_currency|JOD|
|price_currency|JPY|
|price_currency|KES|
|price_currency|KGS|
|price_currency|KHR|
|price_currency|KMF|
|price_currency|KPW|
|price_currency|KRW|
|price_currency|KWD|
|price_currency|KYD|
|price_currency|KZT|
|price_currency|LAK|
|price_currency|LBP|
|price_currency|LKR|
|price_currency|LRD|
|price_currency|LSL|
|price_currency|LTL|
|price_currency|LVL|
|price_currency|LYD|
|price_currency|MAD|
|price_currency|MDL|
|price_currency|MGA|
|price_currency|MKD|
|price_currency|MMK|
|price_currency|MNT|
|price_currency|MOP|
|price_currency|MRO|
|price_currency|MUR|
|price_currency|MVR|
|price_currency|MWK|
|price_currency|MXN|
|price_currency|MXV|
|price_currency|MYR|
|price_currency|MZN|
|price_currency|NAD|
|price_currency|NGN|
|price_currency|NIO|
|price_currency|NOK|
|price_currency|NPR|
|price_currency|NZD|
|price_currency|OMR|
|price_currency|PAB|
|price_currency|PEN|
|price_currency|PGK|
|price_currency|PHP|
|price_currency|PKR|
|price_currency|PLN|
|price_currency|PYG|
|price_currency|QAR|
|price_currency|RON|
|price_currency|RSD|
|price_currency|RUB|
|price_currency|RWF|
|price_currency|SAR|
|price_currency|SBD|
|price_currency|SCR|
|price_currency|SDG|
|price_currency|SEK|
|price_currency|SGD|
|price_currency|SHP|
|price_currency|SLL|
|price_currency|SOS|
|price_currency|SRD|
|price_currency|SSP|
|price_currency|STD|
|price_currency|SVC|
|price_currency|SYP|
|price_currency|SZL|
|price_currency|THB|
|price_currency|TJS|
|price_currency|TMT|
|price_currency|TND|
|price_currency|TOP|
|price_currency|TRC|
|price_currency|TRY|
|price_currency|TTD|
|price_currency|TWD|
|price_currency|TZS|
|price_currency|UAH|
|price_currency|UGX|
|price_currency|USD|
|price_currency|USN|
|price_currency|USS|
|price_currency|UYI|
|price_currency|UYU|
|price_currency|UZS|
|price_currency|VEF|
|price_currency|VND|
|price_currency|VUV|
|price_currency|WST|
|price_currency|XAF|
|price_currency|XAG|
|price_currency|XAU|
|price_currency|XBA|
|price_currency|XBB|
|price_currency|XBC|
|price_currency|XBD|
|price_currency|XCD|
|price_currency|XDR|
|price_currency|XOF|
|price_currency|XPD|
|price_currency|XPF|
|price_currency|XPT|
|price_currency|XTS|
|price_currency|XXX|
|price_currency|YER|
|price_currency|ZAR|
|price_currency|ZMK|
|price_currency|ZMW|
|price_currency|BTC|
|price_currency|ETH|
|pricing_type|fixed|
|pricing_type|variable|
|pricing_type|per_unit|
|pricing_type|other|
|product_type|regular|
|product_type|other|

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

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

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
  "business_name": "Dunkin Donuts LLC",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "id": "12345",
  "merchant_id": "12345",
  "name": "Dunkin Donuts",
  "status": "active",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|business_name|string \| null|false|none|The business name of the location|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|merchant_id|string|false|none|none|
|name|string \| null|false|none|The name of the location|
|status|string \| null|false|none|Status of this location.|
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
|status|active|
|status|inactive|
|status|other|

<h2 id="tocS_Merchant">Merchant</h2>
<!-- backwards compatibility -->
<a id="schemamerchant"></a>
<a id="schema_Merchant"></a>
<a id="tocSmerchant"></a>
<a id="tocsmerchant"></a>

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
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "id": "12345",
  "language": "EN",
  "main_location_id": "12345",
  "name": "Dunkin Donuts",
  "owner_id": "12345",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "id": "12345",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "status": "active",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|language|string \| null|false|none|language code according to ISO 639-1. For the United States - EN|
|main_location_id|string \| null|false|none|The main location ID of the merchant|
|name|string \| null|false|none|The name of the merchant|
|owner_id|string|false|none|none|
|service_charges|[[ServiceCharge](#schemaservicecharge)]|false|none|none|
|status|string \| null|false|none|Status of this merchant.|
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
|status|active|
|status|inactive|
|status|other|

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

<h2 id="tocS_Modifier">Modifier</h2>
<!-- backwards compatibility -->
<a id="schemamodifier"></a>
<a id="schema_Modifier"></a>
<a id="tocSmodifier"></a>
<a id="tocsmodifier"></a>

```json
{
  "alternate_name": "Modifier New",
  "available": true,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "id": "12345",
  "idempotency_key": "random_string",
  "modifier_group_id": "123",
  "name": "Modifier",
  "price_amount": 10,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_name|string|false|none|none|
|available|[Available](#schemaavailable)|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|idempotency_key|[IdempotencyKey](#schemaidempotencykey)|false|none|A value you specify that uniquely identifies this request among requests you have sent.|
|modifier_group_id|string|true|none|none|
|name|string|true|none|none|
|price_amount|number|false|none|none|
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

<h2 id="tocS_ModifierGroup">ModifierGroup</h2>
<!-- backwards compatibility -->
<a id="schemamodifiergroup"></a>
<a id="schema_ModifierGroup"></a>
<a id="tocSmodifiergroup"></a>
<a id="tocsmodifiergroup"></a>

```json
{
  "alternate_name": "Modifier New",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "deleted": true,
  "id": "12345",
  "maximum_allowed": 5,
  "minimum_required": 1,
  "modifiers": [
    {
      "alternate_name": "Modifier New",
      "available": true,
      "currency": "USD",
      "id": "12345",
      "name": "Modifier",
      "price_amount": 10
    }
  ],
  "name": "Modifier",
  "present_at_all_locations": false,
  "row_version": "1-12345",
  "selection_type": "single",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_name|string|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|deleted|[Deleted](#schemadeleted)|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|maximum_allowed|integer|false|none|none|
|minimum_required|integer|false|none|none|
|modifiers|[object]|false|none|none|
|name|string|false|none|none|
|present_at_all_locations|boolean|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|selection_type|string|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|selection_type|single|
|selection_type|multiple|

<h2 id="tocS_ModifierGroupFilter">ModifierGroupFilter</h2>
<!-- backwards compatibility -->
<a id="schemamodifiergroupfilter"></a>
<a id="schema_ModifierGroupFilter"></a>
<a id="tocSmodifiergroupfilter"></a>
<a id="tocsmodifiergroupfilter"></a>

```json
{
  "modifier_group_id": "1234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifier_group_id|string|false|none|Id of the job to filter on|

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

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "closed_date": "2022-08-13",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "customer_id": "12345",
  "customers": [
    {
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "middle_name": "D.",
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
  ],
  "discounts": [
    {
      "amount": 27500,
      "currency": "USD",
      "id": "12345",
      "name": "10% off",
      "product_id": "12345",
      "scope": "order",
      "type": "percentage"
    }
  ],
  "employee_id": "12345",
  "fulfillments": [
    {
      "id": "12345",
      "pickup_details": {
        "accepted_at": "2020-09-30T07:43:32.000Z",
        "auto_complete_duration": "P1W3D",
        "cancel_reason": "Not hungry",
        "canceled_at": "2016-09-04T23:59:33.123Z",
        "curbside_pickup_details": {
          "buyer_arrived_at": "2016-09-04T23:59:33.123Z",
          "curbside_details": "string"
        },
        "expired_at": "2016-09-04T23:59:33.123Z",
        "expires_at": "2016-09-04T23:59:33.123Z",
        "is_curbside_pickup": true,
        "note": "Pickup in the back.",
        "picked_up_at": "2016-09-04T23:59:33.123Z",
        "pickup_at": "2016-09-04T23:59:33.123Z",
        "pickup_window_duration": "P1W3D",
        "placed_at": "2016-09-04T23:59:33.123Z",
        "prep_time_duration": "P1W3D",
        "ready_at": "2016-09-04T23:59:33.123Z",
        "recipient": {
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
          "customer_id": "12345",
          "display_name": "Elon Musk",
          "email": {
            "email": "elon@musk.com",
            "id": "123",
            "type": "primary"
          },
          "phone_number": {
            "area_code": "323",
            "country_code": "1",
            "extension": "105",
            "id": "12345",
            "number": "111-111-1111",
            "type": "primary"
          }
        },
        "rejected_at": "2016-09-04T23:59:33.123Z",
        "schedule_type": "scheduled"
      },
      "shipment_details": {},
      "status": "proposed",
      "type": "shipment"
    }
  ],
  "id": "12345",
  "idempotency_key": "random_string",
  "line_items": [
    {
      "applied_discounts": [
        {
          "amount": 27500,
          "currency": "USD",
          "discount_id": "12345",
          "id": "12345"
        }
      ],
      "applied_taxes": [
        {
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "tax_id": "sales-tax"
        }
      ],
      "id": "12345",
      "item": {
        "id": "12345"
      },
      "modifiers": [
        {
          "alternate_name": "Modifier New",
          "amount": 27500,
          "currency": "USD",
          "id": "12345",
          "modifier_group_id": "123",
          "name": "New York Strip Steak - no cheese"
        }
      ],
      "name": "New York Strip Steak",
      "quantity": 1,
      "total_amount": 27500,
      "total_discount": 3000,
      "total_tax": 2000,
      "unit_price": 27500.5
    }
  ],
  "location_id": "12345",
  "merchant_id": "12345",
  "note": "string",
  "order_date": "2022-08-12",
  "order_number": "1F",
  "order_type_id": "12345",
  "payment_status": "open",
  "payments": [
    {
      "amount": 27500,
      "currency": "USD",
      "id": "12345"
    }
  ],
  "reference_id": "my-order-001",
  "refunded": false,
  "refunds": [
    {
      "amount": 27500,
      "currency": "USD",
      "id": "12345",
      "location_id": "12345",
      "reason": "The reason for the refund being issued.",
      "status": "pending",
      "tender_id": "12345",
      "transaction_id": "12345"
    }
  ],
  "seat": "23F",
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "id": "12345",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "source": "api",
  "status": "open",
  "table": "1F",
  "taxes": [
    {
      "amount": 27500,
      "auto_applied": true,
      "currency": "USD",
      "id": "state-sales-tax",
      "name": "State Sales Tax",
      "percentage": 15,
      "scope": "order",
      "type": "unknown"
    }
  ],
  "tenders": [
    {
      "amount": 27500,
      "buyer_tendered_cash_amount": 27500,
      "card": {
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
        "bin": "41111",
        "card_brand": "visa",
        "card_type": "credit",
        "cardholder_name": "John Doe",
        "customer_id": "12345",
        "enabled": true,
        "exp_month": 1,
        "exp_year": 2022,
        "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
        "id": "12345",
        "last_4": "The last 4 digits of the card number.",
        "merchant_id": "12345",
        "prepaid_type": "prepaid",
        "reference_id": "card-001",
        "version": "230320320320"
      },
      "card_entry_method": "swiped",
      "card_status": "authorized",
      "change_back_cash_amount": 27500,
      "currency": "USD",
      "id": "12345",
      "location_id": "12345",
      "name": "10% off",
      "note": "An optional note associated with the tender at the time of payment.",
      "payment_id": "12345",
      "percentage": 10,
      "total_amount": 27.5,
      "total_discount": 3,
      "total_processing_fee": 0,
      "total_refund": 0,
      "total_service_charge": 0,
      "total_tax": 2.75,
      "total_tip": 7,
      "transaction_id": "12345",
      "type": "cash"
    }
  ],
  "title": "string",
  "total_amount": 275,
  "total_discount": 300,
  "total_refund": 0,
  "total_service_charge": 0,
  "total_tax": 275,
  "total_tip": 700,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "version": "230320320320",
  "voided": false,
  "voided_at": "2020-09-30T07:43:32.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed_date|string(date) \| null|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|customer_id|string|false|none|none|
|customers|[object]|false|none|none|
|discounts|[object]|false|none|none|
|employee_id|string|false|none|none|
|fulfillments|[object]|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|idempotency_key|[IdempotencyKey](#schemaidempotencykey)|false|none|A value you specify that uniquely identifies this request among requests you have sent.|
|line_items|[object]|false|none|none|
|location_id|string|true|none|none|
|merchant_id|string|true|none|none|
|note|string|false|none|A note with information about this order, may be printed on the order receipt and displayed in apps|
|order_date|string(date) \| null|false|none|none|
|order_number|string|false|none|none|
|order_type_id|string|false|none|none|
|payment_status|string|false|none|Is this order paid or not?|
|payments|[object]|false|none|none|
|reference_id|string \| null|false|none|An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.|
|refunded|boolean|false|none|none|
|refunds|[object]|false|none|none|
|seat|string|false|none|none|
|service_charges|[ServiceCharges](#schemaservicecharges)|false|none|Optional service charges or gratuity tip applied to the order.|
|source|string \| null|false|read-only|Source of order. Indicates the way that the order was placed.|
|status|string|false|none|Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()|
|table|string|false|none|none|
|taxes|[object]|false|none|none|
|tenders|[object]|false|none|none|
|title|string|false|none|none|
|total_amount|integer \| null|false|none|none|
|total_discount|integer \| null|false|none|none|
|total_refund|integer \| null|false|none|none|
|total_service_charge|integer \| null|false|none|none|
|total_tax|integer \| null|false|none|none|
|total_tip|integer \| null|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|version|[Version](#schemaversion)|false|none|none|
|voided|boolean|false|none|none|
|voided_at|string(date-time)|false|read-only|none|

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
|payment_status|open|
|payment_status|paid|
|payment_status|refunded|
|payment_status|credited|
|payment_status|partially_paid|
|payment_status|partially_refunded|
|payment_status|unknown|
|source|in-store|
|source|online|
|source|opt|
|source|api|
|source|kiosk|
|source|caller-id|
|source|google|
|source|invoice|
|status|open|
|status|draft|
|status|delivered|
|status|delayed|
|status|voided|
|status|completed|
|status|hidden|

<h2 id="tocS_OrderType">OrderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_OrderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
{
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "default": true,
  "id": "12345",
  "name": "Default order type",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|default|boolean|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|name|string|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

<h2 id="tocS_PaymentCard">PaymentCard</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcard"></a>
<a id="schema_PaymentCard"></a>
<a id="tocSpaymentcard"></a>
<a id="tocspaymentcard"></a>

```json
{
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
  "bin": "41111",
  "card_brand": "visa",
  "card_type": "credit",
  "cardholder_name": "John Doe",
  "customer_id": "12345",
  "enabled": true,
  "exp_month": 1,
  "exp_year": 2022,
  "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
  "id": "12345",
  "last_4": "The last 4 digits of the card number.",
  "merchant_id": "12345",
  "prepaid_type": "prepaid",
  "reference_id": "card-001",
  "version": "230320320320"
}
```

A card's non-confidential details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_address|[Address](#schemaaddress)|false|none|none|
|bin|string \| null|false|none|The first six digits of the card number, known as the Bank Identification Number (BIN).|
|card_brand|string \| null|false|none|The first six digits of the card number, known as the Bank Identification Number (BIN).|
|card_type|string \| null|false|none|none|
|cardholder_name|string \| null|false|none|none|
|customer_id|string \| null|false|none|none|
|enabled|boolean \| null|false|none|Indicates whether or not a card can be used for payments.|
|exp_month|integer \| null|false|none|The expiration month of the associated card as an integer between 1 and 12.|
|exp_year|integer \| null|false|none|The four-digit year of the card's expiration date.|
|fingerprint|string \| null|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|last_4|string \| null|false|none|none|
|merchant_id|string|false|none|none|
|prepaid_type|string \| null|false|none|none|
|reference_id|string \| null|false|none|An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.|
|version|[Version](#schemaversion)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|amex|
|card_brand|discover|
|card_brand|discover-diners|
|card_brand|jcb|
|card_brand|china-unionpay|
|card_brand|square-gift-card|
|card_brand|square-capital-card|
|card_brand|interac|
|card_brand|eftpos|
|card_brand|felica|
|card_brand|ebt|
|card_brand|other|
|card_type|credit|
|card_type|debit|
|card_type|prepaid|
|card_type|other|
|prepaid_type|non-prepaid|
|prepaid_type|prepaid|
|prepaid_type|unknown|

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

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
15
```

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

<h2 id="tocS_PosBankAccount">PosBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemaposbankaccount"></a>
<a id="schema_PosBankAccount"></a>
<a id="tocSposbankaccount"></a>
<a id="tocsposbankaccount"></a>

```json
{
  "account_ownership_type": "string",
  "ach_details": {
    "account_number_suffix": "stri",
    "account_type": "string",
    "routing_number": "string"
  },
  "bank_name": "string",
  "country": "US",
  "fingerprint": "string",
  "statement_description": "string",
  "transfer_type": "string"
}
```

Card details for this payment. This field is currently not available. Reach out to our team for more info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_ownership_type|string|false|none|The ownership type of the bank account performing the transfer.<br>The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.|
|ach_details|object|false|none|ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.|
|bank_name|string|false|none|The name of the bank associated with the bank account.|
|country|string \| null|false|none|Country code according to ISO 3166-1 alpha-2.|
|fingerprint|string|false|none|Uniquely identifies the bank account for this seller and can be used<br>to determine if payments are from the same bank account.|
|statement_description|string|false|none|The statement description as sent to the bank.|
|transfer_type|string|false|none|The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.|

<h2 id="tocS_PosPayment">PosPayment</h2>
<!-- backwards compatibility -->
<a id="schemapospayment"></a>
<a id="schema_PosPayment"></a>
<a id="tocSpospayment"></a>
<a id="tocspospayment"></a>

```json
{
  "amount": 27.5,
  "app_fee": 3,
  "approved": 37.5,
  "bank_account": {
    "account_ownership_type": "string",
    "ach_details": {
      "account_number_suffix": "stri",
      "account_type": "string",
      "routing_number": "string"
    },
    "bank_name": "string",
    "country": "US",
    "fingerprint": "string",
    "statement_description": "string",
    "transfer_type": "string"
  },
  "card_details": {
    "card": {
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
      "bin": "41111",
      "card_brand": "visa",
      "card_type": "credit",
      "cardholder_name": "John Doe",
      "customer_id": "12345",
      "enabled": true,
      "exp_month": 1,
      "exp_year": 2022,
      "fingerprint": " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
      "id": "12345",
      "last_4": "The last 4 digits of the card number.",
      "merchant_id": "12345",
      "prepaid_type": "prepaid",
      "reference_id": "card-001",
      "version": "230320320320"
    }
  },
  "cash": {
    "amount": null,
    "charge_back_amount": null
  },
  "change_back_cash_amount": 20,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "currency": "USD",
  "customer_id": "12345",
  "device_id": "12345",
  "employee_id": "12345",
  "external_details": {
    "source": "string",
    "source_fee_amount": 2.5,
    "source_id": "string",
    "type": "check"
  },
  "external_payment_id": "12345",
  "id": "12345",
  "idempotency_key": "random_string",
  "location_id": "12345",
  "merchant_id": "12345",
  "order_id": "12345",
  "processing_fees": [
    {
      "amount": 1.05,
      "effective_at": "2020-09-30T07:43:32.000Z",
      "processing_type": "initial"
    }
  ],
  "refunded": 37.5,
  "service_charges": [
    {
      "active": true,
      "amount": 27500,
      "currency": "USD",
      "id": "12345",
      "name": "Charge for delivery",
      "percentage": 12.5,
      "type": "auto_gratuity"
    }
  ],
  "source": "external",
  "source_id": "12345",
  "status": "approved",
  "tax": 20,
  "tender_id": "12345",
  "tip": 7,
  "total": 37.5,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "wallet": {
    "status": "authorized"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|app_fee|number|false|none|The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.|
|approved|number|false|none|The initial amount of money approved for this payment.|
|bank_account|[PosBankAccount](#schemaposbankaccount)|false|none|Card details for this payment. This field is currently not available. Reach out to our team for more info.|
|card_details|object|false|none|none|
|cash|object|false|none|Cash details for this payment|
|change_back_cash_amount|number|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|currency|[Currency](#schemacurrency)|true|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|customer_id|string|true|none|none|
|device_id|string|false|none|none|
|employee_id|string|false|none|none|
|external_details|object|false|none|Details about an external payment.|
|external_payment_id|string|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|idempotency_key|[IdempotencyKey](#schemaidempotencykey)|false|none|A value you specify that uniquely identifies this request among requests you have sent.|
|location_id|string|false|none|none|
|merchant_id|string|false|none|none|
|order_id|string|true|none|none|
|processing_fees|[object]|false|none|none|
|refunded|number|false|none|The initial amount of money approved for this payment.|
|service_charges|[ServiceCharges](#schemaservicecharges)|false|none|Optional service charges or gratuity tip applied to the order.|
|source|string|false|none|Source of this payment.|
|source_id|string|true|none|The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.|
|status|string|false|none|Status of this payment.|
|tax|number|false|none|none|
|tender_id|string|true|none|none|
|tip|number|false|none|none|
|total|number|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|wallet|object|false|none|Wallet details for this payment. This field is currently not available. Reach out to our team for more info.|

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
|source|card|
|source|bank_account|
|source|wallet|
|source|bnpl|
|source|cash|
|source|external|
|source|other|
|status|approved|
|status|pending|
|status|completed|
|status|canceled|
|status|failed|
|status|other|

<h2 id="tocS_PosWebhookEvent">PosWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemaposwebhookevent"></a>
<a id="schema_PosWebhookEvent"></a>
<a id="tocSposwebhookevent"></a>
<a id="tocsposwebhookevent"></a>

```json
{
  "entity_id": "123456ASDF",
  "entity_type": "Company",
  "entity_url": "https://unify.apideck.com/crm/contacts/123456",
  "event_id": "9755c355-56c3-4a2f-a2da-86ff4411fccb",
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close",
  "event_type": "pos.order.created"
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
|event_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|pos.order.created|
|event_type|pos.order.updated|
|event_type|pos.order.deleted|
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

<h2 id="tocS_Sequence">Sequence</h2>
<!-- backwards compatibility -->
<a id="schemasequence"></a>
<a id="schema_Sequence"></a>
<a id="tocSsequence"></a>
<a id="tocssequence"></a>

```json
1
```

<h2 id="tocS_ServiceCharge">ServiceCharge</h2>
<!-- backwards compatibility -->
<a id="schemaservicecharge"></a>
<a id="schema_ServiceCharge"></a>
<a id="tocSservicecharge"></a>
<a id="tocsservicecharge"></a>

```json
{
  "active": true,
  "amount": 27500,
  "currency": "USD",
  "id": "12345",
  "name": "Charge for delivery",
  "percentage": 12.5,
  "type": "auto_gratuity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|[Active](#schemaactive)|false|none|none|
|amount|number|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|name|string|false|none|Service charge name|
|percentage|number|false|none|Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.|
|type|string|false|none|The type of the service charge.|

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
|type|auto_gratuity|
|type|custom|

<h2 id="tocS_ServiceCharges">ServiceCharges</h2>
<!-- backwards compatibility -->
<a id="schemaservicecharges"></a>
<a id="schema_ServiceCharges"></a>
<a id="tocSservicecharges"></a>
<a id="tocsservicecharges"></a>

```json
[
  {
    "active": true,
    "amount": 27500,
    "currency": "USD",
    "id": "12345",
    "name": "Charge for delivery",
    "percentage": 12.5,
    "type": "auto_gratuity"
  }
]
```

Optional service charges or gratuity tip applied to the order.

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

<h2 id="tocS_Tender">Tender</h2>
<!-- backwards compatibility -->
<a id="schematender"></a>
<a id="schema_Tender"></a>
<a id="tocStender"></a>
<a id="tocstender"></a>

```json
{
  "active": true,
  "allows_tipping": true,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "editable": true,
  "hidden": true,
  "id": "12345",
  "key": "com.clover.tender.cash",
  "label": "Cash",
  "opens_cash_drawer": true,
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|[Active](#schemaactive)|false|none|none|
|allows_tipping|boolean|false|none|Allow tipping on payment from tender|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|editable|[Hidden](#schemahidden)|false|none|none|
|hidden|[Hidden](#schemahidden)|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|key|string \| null|false|none|none|
|label|string \| null|false|none|none|
|opens_cash_drawer|boolean|false|none|If this tender opens the cash drawer|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

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

<h2 id="tocS_UpdateItemResponse">UpdateItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateitemresponse"></a>
<a id="schema_UpdateItemResponse"></a>
<a id="tocSupdateitemresponse"></a>
<a id="tocsupdateitemresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Items",
  "service": "square",
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

<h2 id="tocS_UpdateLocationResponse">UpdateLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationresponse"></a>
<a id="schema_UpdateLocationResponse"></a>
<a id="tocSupdatelocationresponse"></a>
<a id="tocsupdatelocationresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Locations",
  "service": "square",
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

<h2 id="tocS_UpdateMerchantResponse">UpdateMerchantResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemerchantresponse"></a>
<a id="schema_UpdateMerchantResponse"></a>
<a id="tocSupdatemerchantresponse"></a>
<a id="tocsupdatemerchantresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Merchants",
  "service": "square",
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

<h2 id="tocS_UpdateModifierGroupResponse">UpdateModifierGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodifiergroupresponse"></a>
<a id="schema_UpdateModifierGroupResponse"></a>
<a id="tocSupdatemodifiergroupresponse"></a>
<a id="tocsupdatemodifiergroupresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "ModifierGroups",
  "service": "square",
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

<h2 id="tocS_UpdateModifierResponse">UpdateModifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodifierresponse"></a>
<a id="schema_UpdateModifierResponse"></a>
<a id="tocSupdatemodifierresponse"></a>
<a id="tocsupdatemodifierresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Modifiers",
  "service": "square",
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

<h2 id="tocS_UpdateOrderResponse">UpdateOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorderresponse"></a>
<a id="schema_UpdateOrderResponse"></a>
<a id="tocSupdateorderresponse"></a>
<a id="tocsupdateorderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "orders",
  "service": "clover",
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

<h2 id="tocS_UpdateOrderTypeResponse">UpdateOrderTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateordertyperesponse"></a>
<a id="schema_UpdateOrderTypeResponse"></a>
<a id="tocSupdateordertyperesponse"></a>
<a id="tocsupdateordertyperesponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "OrderTypes",
  "service": "clover",
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

<h2 id="tocS_UpdatePosPaymentResponse">UpdatePosPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepospaymentresponse"></a>
<a id="schema_UpdatePosPaymentResponse"></a>
<a id="tocSupdatepospaymentresponse"></a>
<a id="tocsupdatepospaymentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "PosPayments",
  "service": "square",
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

<h2 id="tocS_UpdateTenderResponse">UpdateTenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetenderresponse"></a>
<a id="schema_UpdateTenderResponse"></a>
<a id="tocSupdatetenderresponse"></a>
<a id="tocsupdatetenderresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Tenders",
  "service": "clover",
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

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"230320320320"
```

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
