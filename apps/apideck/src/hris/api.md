<h1 id="hris-api">HRIS API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the HRIS API.

You can use this API to access all HRIS API endpoints.

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

<h1 id="hris-api-employees">Employees</h1>

## List Employees

<a id="opIdemployeesAll"></a>

> Code samples

```bash
curl https://example.com/hris/employees \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/employees`

List Employees

<h3 id="list-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[EmployeesFilter](#schemaemployeesfilter)|false|Apply filters|
|sort|query|[EmployeesSort](#schemaemployeessort)|false|Apply sorting|
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
      "birthday": "2000-08-12",
      "company_id": "23456",
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
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
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="list-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Employees|[GetEmployeesResponse](#schemagetemployeesresponse)|
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

## Create Employee

<a id="opIdemployeesAdd"></a>

> Code samples

```bash
curl https://example.com/hris/employees \
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
    "birthday": "2000-08-12",
    "company_id": "23456",
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "works_remote": true
  }'
```

`POST /hris/employees`

Create Employee

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
  "birthday": "2000-08-12",
  "company_id": "23456",
  "company_name": "SpaceX",
  "compensations": [
    {
      "effective_date": "2021-06-11",
      "flsa_status": "nonexempt",
      "id": "3404301363494309004",
      "job_id": "3490439050957906679",
      "payment_unit": "hour",
      "rate": 50
    }
  ],
  "country_of_birth": "US",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "deceased_on": "2000-08-12",
  "deleted": true,
  "department": "R&D",
  "department_id": "12345",
  "department_name": "12345",
  "description": "A description",
  "dietary_preference": "Veggie",
  "direct_reports": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "display_name": "Technoking",
  "division": "Europe",
  "division_id": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "employee_number": "123456-AB",
  "employment_end_date": "2028-10-26",
  "employment_role": {
    "sub_type": "full_time",
    "type": "contractor"
  },
  "employment_start_date": "2021-10-26",
  "employment_status": "active",
  "first_name": "Elon",
  "food_allergies": [
    "No allergies"
  ],
  "gender": "male",
  "initials": "EM",
  "jobs": [
    {
      "compensation_rate": 72000,
      "currency": "USD",
      "end_date": "2020-08-12",
      "hired_at": "2020-08-12",
      "is_primary": true,
      "location": {
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
      "payment_unit": "year",
      "role": "Sales",
      "start_date": "2020-08-12",
      "title": "CEO"
    }
  ],
  "languages": [
    "EN"
  ],
  "last_name": "Musk",
  "leaving_reason": "resigned",
  "manager": {
    "email": "elon@musk.com",
    "employment_status": "active",
    "first_name": "Elon",
    "last_name": "Musk",
    "name": "Elon Musk"
  },
  "marital_status": "married",
  "middle_name": "D.",
  "nationalities": [
    "US"
  ],
  "partner": {
    "birthday": "2000-08-12",
    "deceased_on": "2000-08-12",
    "first_name": "Elon",
    "gender": "male",
    "initials": "EM",
    "last_name": "Musk",
    "middle_name": "D."
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
  "photo_url": "https://unavatar.io/elon-musk",
  "preferred_language": "EN",
  "preferred_name": "Elon Musk",
  "pronouns": "she,her",
  "record_url": "https://app.intercom.io/contacts/12345",
  "row_version": "1-12345",
  "salutation": "Mr",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "social_security_number": "123456789",
  "source": "lever",
  "source_id": "12345",
  "tags": [
    "New"
  ],
  "tax_code": "1111",
  "tax_id": "234-32-0000",
  "team": {
    "id": "1234",
    "name": "Full Stack Engineers"
  },
  "timezone": "Europe/London",
  "title": "CEO",
  "works_remote": true
}
```

<h3 id="create-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Employee](#schemaemployee)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» birthday|body|string(date) \| null|false|The date of birth of the person.|
|» company_id|body|[CompanyId](#schemacompanyid)|false|The unique identifier of the company.|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» compensations|body|[object]|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » effective_date|body|string|false|The date on which a change to an employee's compensation takes effect.|
|» » flsa_status|body|string|false|The FLSA status for this compensation.|
|» » payment_unit|body|[PaymentUnit](#schemapaymentunit)|false|Unit of measurement for employee compensation.|
|» » rate|body|number|false|The amount paid per payment unit.|
|» country_of_birth|body|string \| null|false|Country code according to ISO 3166-1 alpha-2.|
|» custom_fields|body|[[CustomField](#schemacustomfield)]|false|none|
|» deceased_on|body|string(date) \| null|false|The date the person deceased.|
|» deleted|body|boolean \| null|false|none|
|» department|body|string \| null|false|**Deprecated.** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.|
|» department_id|body|string \| null|false|Unique identifier of the department ID this employee belongs to.|
|» department_name|body|string \| null|false|Name of the department this employee belongs to.|
|» description|body|[Description](#schemadescription)|false|A description of the object.|
|» dietary_preference|body|string \| null|false|Indicate the employee's dietary preference.|
|» direct_reports|body|[string]|false|The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.|
|» display_name|body|string \| null|false|The name used to display the employee, often a combination of their first and last names.|
|» division|body|[Division](#schemadivision)|false|The division the person is currently in. Usually a collection of departments or teams or regions.|
|» division_id|body|string \| null|false|Unique identifier of the division this employee belongs to.|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» employee_number|body|[EmployeeNumber](#schemaemployeenumber)|false|An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.|
|» employment_end_date|body|string \| null|false|An End Date is the date that the employee ended working at the company|
|» employment_role|body|object|false|none|
|» » sub_type|body|string \| null|false|The work schedule of the employee.|
|» » type|body|string \| null|false|The type of employment relationship the employee has with the organization.|
|» employment_start_date|body|string \| null|false|A Start Date is the date that the employee started working at the company|
|» employment_status|body|[EmploymentStatus](#schemaemploymentstatus)|false|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» food_allergies|body|[string]|false|Indicate the employee's food allergies.|
|» gender|body|[Gender](#schemagender)|false|The gender represents the gender identity of a person.|
|» initials|body|string \| null|false|The initials of the person, usually derived from their first, middle, and last names.|
|» jobs|body|[object]|false|none|
|» » compensation_rate|body|number|false|The rate of pay for the employee in their current job role.|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » end_date|body|string(date) \| null|false|The date on which the employee leaves or is expected to leave their current job role.|
|» » hired_at|body|string(date) \| null|false|The date on which the employee was hired by the organization|
|» » is_primary|body|boolean \| null|false|Indicates whether this the employee's primary job.|
|» » location|body|[Address](#schemaaddress)|false|none|
|» » payment_unit|body|[PaymentUnit](#schemapaymentunit)|false|Unit of measurement for employee compensation.|
|» » role|body|string \| null|false|The position and responsibilities of the person within the organization.|
|» » start_date|body|string(date) \| null|false|The date on which the employee starts working in their current job role.|
|» » title|body|[Title](#schematitle)|false|The job title of the person.|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» leaving_reason|body|string \| null|false|The reason because the employment ended.|
|» manager|body|object|false|none|
|» » email|body|string(email) \| null|false|The email address of the manager.|
|» » employment_status|body|[EmploymentStatus](#schemaemploymentstatus)|false|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|» » first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» » last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» » name|body|string \| null|false|The name of the manager, often a combination of their first and last names.|
|» marital_status|body|string \| null|false|The marital status of the employee.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» nationalities|body|[string \| null]|false|none|
|» partner|body|object|false|none|
|» » birthday|body|string(date) \| null|false|none|
|» » deceased_on|body|string(date) \| null|false|none|
|» » first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» » gender|body|[Gender](#schemagender)|false|The gender represents the gender identity of a person.|
|» » initials|body|string \| null|false|none|
|» » last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» » middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» photo_url|body|[PhotoUrl](#schemaphotourl)|false|The URL of the photo of a person.|
|» preferred_language|body|[Language](#schemalanguage)|false|language code according to ISO 639-1. For the United States - EN|
|» preferred_name|body|string \| null|false|The name the employee prefers to be addressed by, which may be different from their legal name.|
|» pronouns|body|string \| null|false|The preferred pronouns of the person.|
|» record_url|body|string \| null|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» salutation|body|string \| null|false|A formal salutation for the person. For example, 'Mr', 'Mrs'|
|» social_links|body|[object]|false|none|
|» » id|body|string \| null|false|none|
|» » type|body|string \| null|false|none|
|» » url|body|string|true|none|
|» social_security_number|body|string \| null|false|A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.|
|» source|body|string \| null|false|When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.|
|» source_id|body|string \| null|false|Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).|
|» tags|body|[string]|false|none|
|» tax_code|body|string \| null|false|none|
|» tax_id|body|string \| null|false|none|
|» team|body|object \| null|false|The team the person is currently in.|
|» » id|body|string \| null|false|The unique identifier of the team.|
|» » name|body|string \| null|false|The name of the team.|
|» timezone|body|string \| null|false|The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» works_remote|body|boolean \| null|false|Indicates if the employee works from a remote location.|

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
|» » flsa_status|exempt|
|» » flsa_status|salaried-nonexempt|
|» » flsa_status|nonexempt|
|» » flsa_status|owner|
|» » payment_unit|hour|
|» » payment_unit|week|
|» » payment_unit|month|
|» » payment_unit|year|
|» » payment_unit|paycheck|
|» » sub_type|full_time|
|» » sub_type|part_time|
|» » sub_type|hourly|
|» » type|contractor|
|» » type|employee|
|» » type|freelance|
|» » type|temp|
|» » type|internship|
|» » type|other|
|» employment_status|active|
|» employment_status|inactive|
|» employment_status|terminated|
|» employment_status|other|
|» gender|male|
|» gender|female|
|» gender|unisex|
|» gender|other|
|» gender|not_specified|
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
|» » payment_unit|hour|
|» » payment_unit|week|
|» » payment_unit|month|
|» » payment_unit|year|
|» » payment_unit|paycheck|
|» leaving_reason|dismissed|
|» leaving_reason|resigned|
|» leaving_reason|redundancy|
|» leaving_reason|other|
|» » employment_status|active|
|» » employment_status|inactive|
|» » employment_status|terminated|
|» » employment_status|other|
|» » gender|male|
|» » gender|female|
|» » gender|unisex|
|» » gender|other|
|» » gender|not_specified|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="create-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Employees|[CreateEmployeeResponse](#schemacreateemployeeresponse)|
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

## Get Employee

<a id="opIdemployeesOne"></a>

> Code samples

```bash
curl https://example.com/hris/employees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/employees/{id}`

Get Employee

<h3 id="get-employee-parameters">Parameters</h3>

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
    "birthday": "2000-08-12",
    "company_id": "23456",
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "operation": "one",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="get-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Employees|[GetEmployeeResponse](#schemagetemployeeresponse)|
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

## Delete Employee

<a id="opIdemployeesDelete"></a>

> Code samples

```bash
curl https://example.com/hris/employees/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /hris/employees/{id}`

Delete Employee

<h3 id="delete-employee-parameters">Parameters</h3>

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
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="delete-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Employees|[DeleteEmployeeResponse](#schemadeleteemployeeresponse)|
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

## Update Employee

<a id="opIdemployeesUpdate"></a>

> Code samples

```bash
curl https://example.com/hris/employees/string \
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
    "birthday": "2000-08-12",
    "company_id": "23456",
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "works_remote": true
  }'
```

`PATCH /hris/employees/{id}`

Update Employee

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
  "birthday": "2000-08-12",
  "company_id": "23456",
  "company_name": "SpaceX",
  "compensations": [
    {
      "effective_date": "2021-06-11",
      "flsa_status": "nonexempt",
      "id": "3404301363494309004",
      "job_id": "3490439050957906679",
      "payment_unit": "hour",
      "rate": 50
    }
  ],
  "country_of_birth": "US",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "deceased_on": "2000-08-12",
  "deleted": true,
  "department": "R&D",
  "department_id": "12345",
  "department_name": "12345",
  "description": "A description",
  "dietary_preference": "Veggie",
  "direct_reports": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "display_name": "Technoking",
  "division": "Europe",
  "division_id": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "employee_number": "123456-AB",
  "employment_end_date": "2028-10-26",
  "employment_role": {
    "sub_type": "full_time",
    "type": "contractor"
  },
  "employment_start_date": "2021-10-26",
  "employment_status": "active",
  "first_name": "Elon",
  "food_allergies": [
    "No allergies"
  ],
  "gender": "male",
  "initials": "EM",
  "jobs": [
    {
      "compensation_rate": 72000,
      "currency": "USD",
      "end_date": "2020-08-12",
      "hired_at": "2020-08-12",
      "is_primary": true,
      "location": {
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
      "payment_unit": "year",
      "role": "Sales",
      "start_date": "2020-08-12",
      "title": "CEO"
    }
  ],
  "languages": [
    "EN"
  ],
  "last_name": "Musk",
  "leaving_reason": "resigned",
  "manager": {
    "email": "elon@musk.com",
    "employment_status": "active",
    "first_name": "Elon",
    "last_name": "Musk",
    "name": "Elon Musk"
  },
  "marital_status": "married",
  "middle_name": "D.",
  "nationalities": [
    "US"
  ],
  "partner": {
    "birthday": "2000-08-12",
    "deceased_on": "2000-08-12",
    "first_name": "Elon",
    "gender": "male",
    "initials": "EM",
    "last_name": "Musk",
    "middle_name": "D."
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
  "photo_url": "https://unavatar.io/elon-musk",
  "preferred_language": "EN",
  "preferred_name": "Elon Musk",
  "pronouns": "she,her",
  "record_url": "https://app.intercom.io/contacts/12345",
  "row_version": "1-12345",
  "salutation": "Mr",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "social_security_number": "123456789",
  "source": "lever",
  "source_id": "12345",
  "tags": [
    "New"
  ],
  "tax_code": "1111",
  "tax_id": "234-32-0000",
  "team": {
    "id": "1234",
    "name": "Full Stack Engineers"
  },
  "timezone": "Europe/London",
  "title": "CEO",
  "works_remote": true
}
```

<h3 id="update-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Employee](#schemaemployee)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» birthday|body|string(date) \| null|false|The date of birth of the person.|
|» company_id|body|[CompanyId](#schemacompanyid)|false|The unique identifier of the company.|
|» company_name|body|[CompanyName](#schemacompanyname)|false|The name of the company.|
|» compensations|body|[object]|false|none|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » effective_date|body|string|false|The date on which a change to an employee's compensation takes effect.|
|» » flsa_status|body|string|false|The FLSA status for this compensation.|
|» » payment_unit|body|[PaymentUnit](#schemapaymentunit)|false|Unit of measurement for employee compensation.|
|» » rate|body|number|false|The amount paid per payment unit.|
|» country_of_birth|body|string \| null|false|Country code according to ISO 3166-1 alpha-2.|
|» custom_fields|body|[[CustomField](#schemacustomfield)]|false|none|
|» deceased_on|body|string(date) \| null|false|The date the person deceased.|
|» deleted|body|boolean \| null|false|none|
|» department|body|string \| null|false|**Deprecated.** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.|
|» department_id|body|string \| null|false|Unique identifier of the department ID this employee belongs to.|
|» department_name|body|string \| null|false|Name of the department this employee belongs to.|
|» description|body|[Description](#schemadescription)|false|A description of the object.|
|» dietary_preference|body|string \| null|false|Indicate the employee's dietary preference.|
|» direct_reports|body|[string]|false|The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.|
|» display_name|body|string \| null|false|The name used to display the employee, often a combination of their first and last names.|
|» division|body|[Division](#schemadivision)|false|The division the person is currently in. Usually a collection of departments or teams or regions.|
|» division_id|body|string \| null|false|Unique identifier of the division this employee belongs to.|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» employee_number|body|[EmployeeNumber](#schemaemployeenumber)|false|An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.|
|» employment_end_date|body|string \| null|false|An End Date is the date that the employee ended working at the company|
|» employment_role|body|object|false|none|
|» » sub_type|body|string \| null|false|The work schedule of the employee.|
|» » type|body|string \| null|false|The type of employment relationship the employee has with the organization.|
|» employment_start_date|body|string \| null|false|A Start Date is the date that the employee started working at the company|
|» employment_status|body|[EmploymentStatus](#schemaemploymentstatus)|false|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|» first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» food_allergies|body|[string]|false|Indicate the employee's food allergies.|
|» gender|body|[Gender](#schemagender)|false|The gender represents the gender identity of a person.|
|» initials|body|string \| null|false|The initials of the person, usually derived from their first, middle, and last names.|
|» jobs|body|[object]|false|none|
|» » compensation_rate|body|number|false|The rate of pay for the employee in their current job role.|
|» » currency|body|[Currency](#schemacurrency)|false|Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).|
|» » end_date|body|string(date) \| null|false|The date on which the employee leaves or is expected to leave their current job role.|
|» » hired_at|body|string(date) \| null|false|The date on which the employee was hired by the organization|
|» » is_primary|body|boolean \| null|false|Indicates whether this the employee's primary job.|
|» » location|body|[Address](#schemaaddress)|false|none|
|» » payment_unit|body|[PaymentUnit](#schemapaymentunit)|false|Unit of measurement for employee compensation.|
|» » role|body|string \| null|false|The position and responsibilities of the person within the organization.|
|» » start_date|body|string(date) \| null|false|The date on which the employee starts working in their current job role.|
|» » title|body|[Title](#schematitle)|false|The job title of the person.|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» leaving_reason|body|string \| null|false|The reason because the employment ended.|
|» manager|body|object|false|none|
|» » email|body|string(email) \| null|false|The email address of the manager.|
|» » employment_status|body|[EmploymentStatus](#schemaemploymentstatus)|false|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|» » first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» » last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» » name|body|string \| null|false|The name of the manager, often a combination of their first and last names.|
|» marital_status|body|string \| null|false|The marital status of the employee.|
|» middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» nationalities|body|[string \| null]|false|none|
|» partner|body|object|false|none|
|» » birthday|body|string(date) \| null|false|none|
|» » deceased_on|body|string(date) \| null|false|none|
|» » first_name|body|[FirstName](#schemafirstname)|false|The first name of the person.|
|» » gender|body|[Gender](#schemagender)|false|The gender represents the gender identity of a person.|
|» » initials|body|string \| null|false|none|
|» » last_name|body|[LastName](#schemalastname)|false|The last name of the person.|
|» » middle_name|body|[MiddleName](#schemamiddlename)|false|Middle name of the person.|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» photo_url|body|[PhotoUrl](#schemaphotourl)|false|The URL of the photo of a person.|
|» preferred_language|body|[Language](#schemalanguage)|false|language code according to ISO 639-1. For the United States - EN|
|» preferred_name|body|string \| null|false|The name the employee prefers to be addressed by, which may be different from their legal name.|
|» pronouns|body|string \| null|false|The preferred pronouns of the person.|
|» record_url|body|string \| null|false|none|
|» row_version|body|[RowVersion](#schemarowversion)|false|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|» salutation|body|string \| null|false|A formal salutation for the person. For example, 'Mr', 'Mrs'|
|» social_links|body|[object]|false|none|
|» » id|body|string \| null|false|none|
|» » type|body|string \| null|false|none|
|» » url|body|string|true|none|
|» social_security_number|body|string \| null|false|A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.|
|» source|body|string \| null|false|When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.|
|» source_id|body|string \| null|false|Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).|
|» tags|body|[string]|false|none|
|» tax_code|body|string \| null|false|none|
|» tax_id|body|string \| null|false|none|
|» team|body|object \| null|false|The team the person is currently in.|
|» » id|body|string \| null|false|The unique identifier of the team.|
|» » name|body|string \| null|false|The name of the team.|
|» timezone|body|string \| null|false|The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» works_remote|body|boolean \| null|false|Indicates if the employee works from a remote location.|

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
|» » flsa_status|exempt|
|» » flsa_status|salaried-nonexempt|
|» » flsa_status|nonexempt|
|» » flsa_status|owner|
|» » payment_unit|hour|
|» » payment_unit|week|
|» » payment_unit|month|
|» » payment_unit|year|
|» » payment_unit|paycheck|
|» » sub_type|full_time|
|» » sub_type|part_time|
|» » sub_type|hourly|
|» » type|contractor|
|» » type|employee|
|» » type|freelance|
|» » type|temp|
|» » type|internship|
|» » type|other|
|» employment_status|active|
|» employment_status|inactive|
|» employment_status|terminated|
|» employment_status|other|
|» gender|male|
|» gender|female|
|» gender|unisex|
|» gender|other|
|» gender|not_specified|
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
|» » payment_unit|hour|
|» » payment_unit|week|
|» » payment_unit|month|
|» » payment_unit|year|
|» » payment_unit|paycheck|
|» leaving_reason|dismissed|
|» leaving_reason|resigned|
|» leaving_reason|redundancy|
|» leaving_reason|other|
|» » employment_status|active|
|» » employment_status|inactive|
|» » employment_status|terminated|
|» » employment_status|other|
|» » gender|male|
|» » gender|female|
|» » gender|unisex|
|» » gender|other|
|» » gender|not_specified|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="update-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Employees|[UpdateEmployeeResponse](#schemaupdateemployeeresponse)|
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

<h1 id="hris-api-companies">Companies</h1>

## List Companies

<a id="opIdcompaniesAll"></a>

> Code samples

```bash
curl https://example.com/hris/companies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/companies`

List Companies

<h3 id="list-companies-parameters">Parameters</h3>

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
      "company_number": "123456-AB",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "debtor_id": "12345",
      "deleted": false,
      "display_name": "SpaceX",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "id": "12345",
      "legal_name": "SpaceX",
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
      "subdomain": "company",
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
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="list-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Companies|[GetHrisCompaniesResponse](#schemagethriscompaniesresponse)|
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

## Create Company

<a id="opIdcompaniesAdd"></a>

> Code samples

```bash
curl https://example.com/hris/companies \
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
    "company_number": "123456-AB",
    "debtor_id": "12345",
    "display_name": "SpaceX",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "legal_name": "SpaceX",
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
    "subdomain": "company",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`POST /hris/companies`

Create Company

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
  "company_number": "123456-AB",
  "debtor_id": "12345",
  "display_name": "SpaceX",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "legal_name": "SpaceX",
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
  "subdomain": "company",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="create-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[HrisCompany](#schemahriscompany)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» company_number|body|string \| null|false|An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.|
|» debtor_id|body|string|false|none|
|» display_name|body|string|false|none|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» legal_name|body|string|true|none|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» status|body|string|false|none|
|» subdomain|body|string|false|none|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» status|trial|
|» status|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="create-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Companies|[CreateHrisCompanyResponse](#schemacreatehriscompanyresponse)|
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

## Get Company

<a id="opIdcompaniesOne"></a>

> Code samples

```bash
curl https://example.com/hris/companies/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/companies/{id}`

Get Company

<h3 id="get-company-parameters">Parameters</h3>

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
    "company_number": "123456-AB",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "debtor_id": "12345",
    "deleted": false,
    "display_name": "SpaceX",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "id": "12345",
    "legal_name": "SpaceX",
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
    "subdomain": "company",
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
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="get-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Company|[GetHrisCompanyResponse](#schemagethriscompanyresponse)|
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

## Delete Company

<a id="opIdcompaniesDelete"></a>

> Code samples

```bash
curl https://example.com/hris/companies/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /hris/companies/{id}`

Delete Company

<h3 id="delete-company-parameters">Parameters</h3>

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
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="delete-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Companies|[DeleteHrisCompanyResponse](#schemadeletehriscompanyresponse)|
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

## Update Company

<a id="opIdcompaniesUpdate"></a>

> Code samples

```bash
curl https://example.com/hris/companies/string \
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
    "company_number": "123456-AB",
    "debtor_id": "12345",
    "display_name": "SpaceX",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "legal_name": "SpaceX",
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
    "subdomain": "company",
    "websites": [
      {
        "id": "12345",
        "type": "primary",
        "url": "http://example.com"
      }
    ]
  }'
```

`PATCH /hris/companies/{id}`

Update Company

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
  "company_number": "123456-AB",
  "debtor_id": "12345",
  "display_name": "SpaceX",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "legal_name": "SpaceX",
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
  "subdomain": "company",
  "websites": [
    {
      "id": "12345",
      "type": "primary",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="update-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[HrisCompany](#schemahriscompany)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» company_number|body|string \| null|false|An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.|
|» debtor_id|body|string|false|none|
|» display_name|body|string|false|none|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» legal_name|body|string|true|none|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» status|body|string|false|none|
|» subdomain|body|string|false|none|
|» websites|body|[[Website](#schemawebsite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» status|trial|
|» status|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="update-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Companies|[UpdateHrisCompanyResponse](#schemaupdatehriscompanyresponse)|
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

<h1 id="hris-api-departments">Departments</h1>

## List Departments

<a id="opIddepartmentsAll"></a>

> Code samples

```bash
curl https://example.com/hris/departments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/departments`

List Departments

<h3 id="list-departments-parameters">Parameters</h3>

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
  "resource": "Departments",
  "service": "workday",
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

<h3 id="list-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Departments|[GetDepartmentsResponse](#schemagetdepartmentsresponse)|
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

## Create Department

<a id="opIddepartmentsAdd"></a>

> Code samples

```bash
curl https://example.com/hris/departments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "code": "2",
    "description": "R&D",
    "name": "R&D"
  }'
```

`POST /hris/departments`

Create Department

> Body parameter

```json
{
  "code": "2",
  "description": "R&D",
  "name": "R&D"
}
```

<h3 id="create-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Department](#schemadepartment)|true|none|
|» code|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|Department name|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Departments",
  "service": "workday",
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

<h3 id="create-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Departments|[CreateDepartmentResponse](#schemacreatedepartmentresponse)|
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

## Get Department

<a id="opIddepartmentsOne"></a>

> Code samples

```bash
curl https://example.com/hris/departments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/departments/{id}`

Get Department

<h3 id="get-department-parameters">Parameters</h3>

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
    "code": "2",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "R&D",
    "id": "12345",
    "name": "R&D",
    "parent_id": "22345",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Departments",
  "service": "workday",
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

<h3 id="get-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Departments|[GetDepartmentResponse](#schemagetdepartmentresponse)|
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

## Delete Department

<a id="opIddepartmentsDelete"></a>

> Code samples

```bash
curl https://example.com/hris/departments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /hris/departments/{id}`

Delete Department

<h3 id="delete-department-parameters">Parameters</h3>

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
  "resource": "Departments",
  "service": "workday",
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

<h3 id="delete-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Departments|[DeleteDepartmentResponse](#schemadeletedepartmentresponse)|
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

## Update Department

<a id="opIddepartmentsUpdate"></a>

> Code samples

```bash
curl https://example.com/hris/departments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "code": "2",
    "description": "R&D",
    "name": "R&D"
  }'
```

`PATCH /hris/departments/{id}`

Update Department

> Body parameter

```json
{
  "code": "2",
  "description": "R&D",
  "name": "R&D"
}
```

<h3 id="update-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[Department](#schemadepartment)|true|none|
|» code|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|Department name|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Departments",
  "service": "workday",
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

<h3 id="update-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Departments|[UpdateDepartmentResponse](#schemaupdatedepartmentresponse)|
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

<h1 id="hris-api-payrolls">Payrolls</h1>

## List Payroll

<a id="opIdpayrollsAll"></a>

> Code samples

```bash
curl https://example.com/hris/payrolls \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/payrolls`

List Payroll

<h3 id="list-payroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|filter|query|[PayrollsFilter](#schemapayrollsfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "check_date": "2022-04-08",
      "company_id": "23456",
      "compensations": [
        {
          "benefits": [
            {
              "employee_deduction": 142.94,
              "employer_contribution": 141.14,
              "name": "Health Insurance"
            }
          ],
          "deductions": [
            {
              "amount": 10.97,
              "name": "Company Car"
            }
          ],
          "employee_id": "12345",
          "gross_pay": 3000,
          "net_pay": 2199.93,
          "taxes": [
            {
              "amount": 1.97,
              "employer": false,
              "name": "CA State Income Tax"
            }
          ]
        }
      ],
      "end_date": "2022-04-21",
      "id": "12345",
      "processed": false,
      "processed_date": "2022-04-08",
      "start_date": "2022-04-08",
      "totals": {
        "check_amount": 27966.23,
        "company_debit": 27992.49,
        "employee_benefit_deductions": 0,
        "employee_taxes": 6616.39,
        "employer_benefit_contributions": 0,
        "employer_taxes": 2038.93,
        "gross_pay": 27966.23,
        "net_pay": 19337.17,
        "tax_debit": 8655.32
      }
    }
  ],
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="list-payroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payrolls|[GetPayrollsResponse](#schemagetpayrollsresponse)|
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

## Get Payroll

<a id="opIdpayrollsOne"></a>

> Code samples

```bash
curl https://example.com/hris/payrolls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/payrolls/{payroll_id}`

Get Payroll

<h3 id="get-payroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payroll_id|path|string|true|ID of the payroll you are acting upon.|
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
    "check_date": "2022-04-08",
    "company_id": "23456",
    "compensations": [
      {
        "benefits": [
          {
            "employee_deduction": 142.94,
            "employer_contribution": 141.14,
            "name": "Health Insurance"
          }
        ],
        "deductions": [
          {
            "amount": 10.97,
            "name": "Company Car"
          }
        ],
        "employee_id": "12345",
        "gross_pay": 3000,
        "net_pay": 2199.93,
        "taxes": [
          {
            "amount": 1.97,
            "employer": false,
            "name": "CA State Income Tax"
          }
        ]
      }
    ],
    "end_date": "2022-04-21",
    "id": "12345",
    "processed": false,
    "processed_date": "2022-04-08",
    "start_date": "2022-04-08",
    "totals": {
      "check_amount": 27966.23,
      "company_debit": 27992.49,
      "employee_benefit_deductions": 0,
      "employee_taxes": 6616.39,
      "employer_benefit_contributions": 0,
      "employer_taxes": 2038.93,
      "gross_pay": 27966.23,
      "net_pay": 19337.17,
      "tax_debit": 8655.32
    }
  },
  "operation": "one",
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="get-payroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payrolls|[GetPayrollResponse](#schemagetpayrollresponse)|
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

<h1 id="hris-api-employee-payrolls">Employee Payrolls</h1>

## List Employee Payrolls

<a id="opIdemployeePayrollsAll"></a>

> Code samples

```bash
curl https://example.com/hris/payrolls/employees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/payrolls/employees/{employee_id}`

List payrolls for employee

<h3 id="list-employee-payrolls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|string|true|ID of the employee you are acting upon.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|filter|query|[PayrollsFilter](#schemapayrollsfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "payrolls": [
      {
        "check_date": "2022-04-08",
        "company_id": "23456",
        "compensations": [
          {
            "benefits": [
              {
                "employee_deduction": 142.94,
                "employer_contribution": 141.14,
                "name": "Health Insurance"
              }
            ],
            "deductions": [
              {
                "amount": 10.97,
                "name": "Company Car"
              }
            ],
            "employee_id": "12345",
            "gross_pay": 3000,
            "net_pay": 2199.93,
            "taxes": [
              {
                "amount": 1.97,
                "employer": false,
                "name": "CA State Income Tax"
              }
            ]
          }
        ],
        "end_date": "2022-04-21",
        "id": "12345",
        "processed": false,
        "processed_date": "2022-04-08",
        "start_date": "2022-04-08",
        "totals": {
          "check_amount": 27966.23,
          "company_debit": 27992.49,
          "employee_benefit_deductions": 0,
          "employee_taxes": 6616.39,
          "employer_benefit_contributions": 0,
          "employer_taxes": 2038.93,
          "gross_pay": 27966.23,
          "net_pay": 19337.17,
          "tax_debit": 8655.32
        }
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="list-employee-payrolls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|EmployeePayrolls|[GetEmployeePayrollsResponse](#schemagetemployeepayrollsresponse)|
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

## Get Employee Payroll

<a id="opIdemployeePayrollsOne"></a>

> Code samples

```bash
curl https://example.com/hris/payrolls/employees/string/payrolls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/payrolls/employees/{employee_id}/payrolls/{payroll_id}`

Get payroll for employee

<h3 id="get-employee-payroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payroll_id|path|string|true|ID of the payroll you are acting upon.|
|employee_id|path|string|true|ID of the employee you are acting upon.|
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
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "payroll": {
      "check_date": "2022-04-08",
      "company_id": "23456",
      "compensations": [
        {
          "benefits": [
            {
              "employee_deduction": 142.94,
              "employer_contribution": 141.14,
              "name": "Health Insurance"
            }
          ],
          "deductions": [
            {
              "amount": 10.97,
              "name": "Company Car"
            }
          ],
          "employee_id": "12345",
          "gross_pay": 3000,
          "net_pay": 2199.93,
          "taxes": [
            {
              "amount": 1.97,
              "employer": false,
              "name": "CA State Income Tax"
            }
          ]
        }
      ],
      "end_date": "2022-04-21",
      "id": "12345",
      "processed": false,
      "processed_date": "2022-04-08",
      "start_date": "2022-04-08",
      "totals": {
        "check_amount": 27966.23,
        "company_debit": 27992.49,
        "employee_benefit_deductions": 0,
        "employee_taxes": 6616.39,
        "employer_benefit_contributions": 0,
        "employer_taxes": 2038.93,
        "gross_pay": 27966.23,
        "net_pay": 19337.17,
        "tax_debit": 8655.32
      }
    }
  },
  "operation": "one",
  "resource": "Companies",
  "service": "undefined",
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

<h3 id="get-employee-payroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payrolls|[GetEmployeePayrollResponse](#schemagetemployeepayrollresponse)|
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

<h1 id="hris-api-employee-schedules">Employee Schedules</h1>

## List Employee Schedules

<a id="opIdemployeeSchedulesAll"></a>

> Code samples

```bash
curl https://example.com/hris/schedules/employees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/schedules/employees/{employee_id}`

List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.

<h3 id="list-employee-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|string|true|ID of the employee you are acting upon.|
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
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "schedules": [
      {
        "end_date": "2022-04-21",
        "id": "12345",
        "start_date": "2022-04-08",
        "work_pattern": {
          "even_weeks": {
            "hours_friday": 4,
            "hours_monday": 8,
            "hours_saturday": 0,
            "hours_sunday": 0,
            "hours_thursday": 7.5,
            "hours_tuesday": 8,
            "hours_wednesday": 4
          },
          "odd_weeks": {
            "hours_friday": 4,
            "hours_monday": 8,
            "hours_saturday": 0,
            "hours_sunday": 0,
            "hours_thursday": 7.5,
            "hours_tuesday": 8,
            "hours_wednesday": 4
          }
        }
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="list-employee-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|EmployeeSchedules|[GetEmployeeSchedulesResponse](#schemagetemployeeschedulesresponse)|
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

<h1 id="hris-api-jobs">Jobs</h1>

## List Jobs

<a id="opIdjobsAll"></a>

> Code samples

```bash
curl https://example.com/hris/jobs/employees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/jobs/employees/{employee_id}`

List Jobs for employee.

<h3 id="list-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|string|true|ID of the employee you are acting upon.|
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
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "jobs": [
      {
        "department": "Brussels Office",
        "employee_id": "string",
        "employment_status": "active",
        "end_date": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
          "name": "HQ US"
        },
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="list-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jobs|[GetHrisJobsResponse](#schemagethrisjobsresponse)|
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

## One Job

<a id="opIdjobsOne"></a>

> Code samples

```bash
curl https://example.com/hris/jobs/employees/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/jobs/employees/{employee_id}/jobs/{job_id}`

A Job for employee.

<h3 id="one-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string|true|ID of the job you are acting upon.|
|employee_id|path|string|true|ID of the employee you are acting upon.|
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
    "department": "Brussels Office",
    "employee_id": "string",
    "employment_status": "active",
    "end_date": "2020-08-12",
    "id": "12345",
    "is_primary": true,
    "location": {
      "name": "HQ US"
    },
    "start_date": "2020-08-12",
    "title": "CEO"
  },
  "operation": "one",
  "resource": "Employees",
  "service": "sage-hr",
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

<h3 id="one-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job|[GetHrisJobResponse](#schemagethrisjobresponse)|
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

<h1 id="hris-api-time-off-requests">Time Off Requests</h1>

## List Time Off Requests

<a id="opIdtimeOffRequestsAll"></a>

> Code samples

```bash
curl https://example.com/hris/time-off-requests \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/time-off-requests`

List Time Off Requests

<h3 id="list-time-off-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[TimeOffRequestsFilter](#schematimeoffrequestsfilter)|false|Apply filters|
|fields|query|string \| null|false|The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "amount": 3.5,
      "approval_date": "2022-03-21",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Enjoying some sun.",
      "employee_id": "12345",
      "end_date": "2022-04-01",
      "id": "12345",
      "notes": {
        "employee": "Relaxing on the beach for a few hours.",
        "manager": "Enjoy!"
      },
      "policy_id": "12345",
      "request_date": "2022-03-21",
      "request_type": "vacation",
      "start_date": "2022-04-01",
      "status": "approved",
      "units": "hours",
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
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h3 id="list-time-off-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TimeOffRequests|[GetTimeOffRequestsResponse](#schemagettimeoffrequestsresponse)|
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

## Create Time Off Request

<a id="opIdtimeOffRequestsAdd"></a>

> Code samples

```bash
curl https://example.com/hris/time-off-requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "amount": 3.5,
    "approval_date": "2022-03-21",
    "description": "Enjoying some sun.",
    "employee_id": "12345",
    "end_date": "2022-04-01",
    "notes": {
      "employee": "Relaxing on the beach for a few hours.",
      "manager": "Enjoy!"
    },
    "policy_id": "12345",
    "request_date": "2022-03-21",
    "request_type": "vacation",
    "start_date": "2022-04-01",
    "status": "approved",
    "units": "hours"
  }'
```

`POST /hris/time-off-requests`

Create Time Off Request

> Body parameter

```json
{
  "amount": 3.5,
  "approval_date": "2022-03-21",
  "description": "Enjoying some sun.",
  "employee_id": "12345",
  "end_date": "2022-04-01",
  "notes": {
    "employee": "Relaxing on the beach for a few hours.",
    "manager": "Enjoy!"
  },
  "policy_id": "12345",
  "request_date": "2022-03-21",
  "request_type": "vacation",
  "start_date": "2022-04-01",
  "status": "approved",
  "units": "hours"
}
```

<h3 id="create-time-off-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[TimeOffRequest](#schematimeoffrequest)|true|none|
|» amount|body|number|false|The amount of time off requested.|
|» approval_date|body|string|false|The date the request was approved|
|» description|body|string|false|Description of the time off request.|
|» employee_id|body|string|false|ID of the employee|
|» end_date|body|string|false|The end date of the time off request.|
|» notes|body|object|false|none|
|» » employee|body|string|false|none|
|» » manager|body|string|false|none|
|» policy_id|body|string|false|ID of the policy|
|» request_date|body|string|false|The date the request was made.|
|» request_type|body|string|false|The type of request|
|» start_date|body|string|false|The start date of the time off request.|
|» status|body|string|false|The status of the time off request.|
|» units|body|string|false|The unit of time off requested. Possible values include: `hours`, `days`, or `other`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» request_type|vacation|
|» request_type|sick|
|» request_type|personal|
|» request_type|jury_duty|
|» request_type|volunteer|
|» request_type|bereavement|
|» request_type|other|
|» status|requested|
|» status|approved|
|» status|declined|
|» status|cancelled|
|» status|deleted|
|» status|other|
|» units|days|
|» units|hours|
|» units|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h3 id="create-time-off-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|TimeOffRequests|[CreateTimeOffRequestResponse](#schemacreatetimeoffrequestresponse)|
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

## Get Time Off Request

<a id="opIdtimeOffRequestsOne"></a>

> Code samples

```bash
curl https://example.com/hris/time-off-requests/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /hris/time-off-requests/{id}`

Get Time Off Request

<h3 id="get-time-off-request-parameters">Parameters</h3>

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
    "amount": 3.5,
    "approval_date": "2022-03-21",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Enjoying some sun.",
    "employee_id": "12345",
    "end_date": "2022-04-01",
    "id": "12345",
    "notes": {
      "employee": "Relaxing on the beach for a few hours.",
      "manager": "Enjoy!"
    },
    "policy_id": "12345",
    "request_date": "2022-03-21",
    "request_type": "vacation",
    "start_date": "2022-04-01",
    "status": "approved",
    "units": "hours",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h3 id="get-time-off-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TimeOffRequests|[GetTimeOffRequestResponse](#schemagettimeoffrequestresponse)|
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

## Delete Time Off Request

<a id="opIdtimeOffRequestsDelete"></a>

> Code samples

```bash
curl https://example.com/hris/time-off-requests/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`DELETE /hris/time-off-requests/{id}`

Delete Time Off Request

<h3 id="delete-time-off-request-parameters">Parameters</h3>

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
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h3 id="delete-time-off-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TimeOffRequests|[DeleteTimeOffRequestResponse](#schemadeletetimeoffrequestresponse)|
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

## Update Time Off Request

<a id="opIdtimeOffRequestsUpdate"></a>

> Code samples

```bash
curl https://example.com/hris/time-off-requests/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' \
  -d '{
    "amount": 3.5,
    "approval_date": "2022-03-21",
    "description": "Enjoying some sun.",
    "employee_id": "12345",
    "end_date": "2022-04-01",
    "notes": {
      "employee": "Relaxing on the beach for a few hours.",
      "manager": "Enjoy!"
    },
    "policy_id": "12345",
    "request_date": "2022-03-21",
    "request_type": "vacation",
    "start_date": "2022-04-01",
    "status": "approved",
    "units": "hours"
  }'
```

`PATCH /hris/time-off-requests/{id}`

Update Time Off Request

> Body parameter

```json
{
  "amount": 3.5,
  "approval_date": "2022-03-21",
  "description": "Enjoying some sun.",
  "employee_id": "12345",
  "end_date": "2022-04-01",
  "notes": {
    "employee": "Relaxing on the beach for a few hours.",
    "manager": "Enjoy!"
  },
  "policy_id": "12345",
  "request_date": "2022-03-21",
  "request_type": "vacation",
  "start_date": "2022-04-01",
  "status": "approved",
  "units": "hours"
}
```

<h3 id="update-time-off-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the record you are acting upon.|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|body|body|[TimeOffRequest](#schematimeoffrequest)|true|none|
|» amount|body|number|false|The amount of time off requested.|
|» approval_date|body|string|false|The date the request was approved|
|» description|body|string|false|Description of the time off request.|
|» employee_id|body|string|false|ID of the employee|
|» end_date|body|string|false|The end date of the time off request.|
|» notes|body|object|false|none|
|» » employee|body|string|false|none|
|» » manager|body|string|false|none|
|» policy_id|body|string|false|ID of the policy|
|» request_date|body|string|false|The date the request was made.|
|» request_type|body|string|false|The type of request|
|» start_date|body|string|false|The start date of the time off request.|
|» status|body|string|false|The status of the time off request.|
|» units|body|string|false|The unit of time off requested. Possible values include: `hours`, `days`, or `other`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» request_type|vacation|
|» request_type|sick|
|» request_type|personal|
|» request_type|jury_duty|
|» request_type|volunteer|
|» request_type|bereavement|
|» request_type|other|
|» status|requested|
|» status|approved|
|» status|declined|
|» status|cancelled|
|» status|deleted|
|» status|other|
|» units|days|
|» units|hours|
|» units|other|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h3 id="update-time-off-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TimeOffRequests|[UpdateTimeOffRequestResponse](#schemaupdatetimeoffrequestresponse)|
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

<h2 id="tocS_Benefit">Benefit</h2>
<!-- backwards compatibility -->
<a id="schemabenefit"></a>
<a id="schema_Benefit"></a>
<a id="tocSbenefit"></a>
<a id="tocsbenefit"></a>

```json
{
  "employee_deduction": 142.94,
  "employer_contribution": 141.14,
  "name": "Health Insurance"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_deduction|number|false|none|The amount deducted for benefit.|
|employer_contribution|number|false|none|The amount of employer contribution.|
|name|string|false|none|The name of the benefit.|

<h2 id="tocS_CompanyId">CompanyId</h2>
<!-- backwards compatibility -->
<a id="schemacompanyid"></a>
<a id="schema_CompanyId"></a>
<a id="tocScompanyid"></a>
<a id="tocscompanyid"></a>

```json
"23456"
```

The unique identifier of the company.

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

<h2 id="tocS_Compensation">Compensation</h2>
<!-- backwards compatibility -->
<a id="schemacompensation"></a>
<a id="schema_Compensation"></a>
<a id="tocScompensation"></a>
<a id="tocscompensation"></a>

```json
{
  "benefits": [
    {
      "employee_deduction": 142.94,
      "employer_contribution": 141.14,
      "name": "Health Insurance"
    }
  ],
  "deductions": [
    {
      "amount": 10.97,
      "name": "Company Car"
    }
  ],
  "employee_id": "12345",
  "gross_pay": 3000,
  "net_pay": 2199.93,
  "taxes": [
    {
      "amount": 1.97,
      "employer": false,
      "name": "CA State Income Tax"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefits|[[Benefit](#schemabenefit)]|false|none|An array of employee benefits for the pay period.|
|deductions|[[Deduction](#schemadeduction)]|false|none|An array of employee deductions for the pay period.|
|employee_id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|gross_pay|number|false|none|The employee's gross pay. Only available when payroll has been processed|
|net_pay|number|false|none|The employee's net pay. Only available when payroll has been processed|
|taxes|[[Tax](#schematax)]|false|none|An array of employer and employee taxes for the pay period.|

<h2 id="tocS_CreateDepartmentResponse">CreateDepartmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedepartmentresponse"></a>
<a id="schema_CreateDepartmentResponse"></a>
<a id="tocScreatedepartmentresponse"></a>
<a id="tocscreatedepartmentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Departments",
  "service": "workday",
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

<h2 id="tocS_CreateEmployeeResponse">CreateEmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateemployeeresponse"></a>
<a id="schema_CreateEmployeeResponse"></a>
<a id="tocScreateemployeeresponse"></a>
<a id="tocscreateemployeeresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Employees",
  "service": "sage-hr",
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

<h2 id="tocS_CreateHrisCompanyResponse">CreateHrisCompanyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehriscompanyresponse"></a>
<a id="schema_CreateHrisCompanyResponse"></a>
<a id="tocScreatehriscompanyresponse"></a>
<a id="tocscreatehriscompanyresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Companies",
  "service": "undefined",
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

<h2 id="tocS_CreateTimeOffRequestResponse">CreateTimeOffRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimeoffrequestresponse"></a>
<a id="schema_CreateTimeOffRequestResponse"></a>
<a id="tocScreatetimeoffrequestresponse"></a>
<a id="tocscreatetimeoffrequestresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h2 id="tocS_Deduction">Deduction</h2>
<!-- backwards compatibility -->
<a id="schemadeduction"></a>
<a id="schema_Deduction"></a>
<a id="tocSdeduction"></a>
<a id="tocsdeduction"></a>

```json
{
  "amount": 10.97,
  "name": "Company Car"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount deducted.|
|name|string|false|none|The name of the deduction.|

<h2 id="tocS_DeleteDepartmentResponse">DeleteDepartmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedepartmentresponse"></a>
<a id="schema_DeleteDepartmentResponse"></a>
<a id="tocSdeletedepartmentresponse"></a>
<a id="tocsdeletedepartmentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Departments",
  "service": "workday",
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

<h2 id="tocS_DeleteEmployeeResponse">DeleteEmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemployeeresponse"></a>
<a id="schema_DeleteEmployeeResponse"></a>
<a id="tocSdeleteemployeeresponse"></a>
<a id="tocsdeleteemployeeresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Employees",
  "service": "sage-hr",
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

<h2 id="tocS_DeleteHrisCompanyResponse">DeleteHrisCompanyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehriscompanyresponse"></a>
<a id="schema_DeleteHrisCompanyResponse"></a>
<a id="tocSdeletehriscompanyresponse"></a>
<a id="tocsdeletehriscompanyresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Companies",
  "service": "undefined",
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

<h2 id="tocS_DeleteTimeOffRequestResponse">DeleteTimeOffRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetimeoffrequestresponse"></a>
<a id="schema_DeleteTimeOffRequestResponse"></a>
<a id="tocSdeletetimeoffrequestresponse"></a>
<a id="tocsdeletetimeoffrequestresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "time-off-requests",
  "service": "bamboohr",
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

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

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
  "birthday": "2000-08-12",
  "company_id": "23456",
  "company_name": "SpaceX",
  "compensations": [
    {
      "effective_date": "2021-06-11",
      "flsa_status": "nonexempt",
      "id": "3404301363494309004",
      "job_id": "3490439050957906679",
      "payment_unit": "hour",
      "rate": 50
    }
  ],
  "country_of_birth": "US",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "deceased_on": "2000-08-12",
  "deleted": true,
  "department": "R&D",
  "department_id": "12345",
  "department_name": "12345",
  "description": "A description",
  "dietary_preference": "Veggie",
  "direct_reports": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "display_name": "Technoking",
  "division": "Europe",
  "division_id": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "employee_number": "123456-AB",
  "employment_end_date": "2028-10-26",
  "employment_role": {
    "sub_type": "full_time",
    "type": "contractor"
  },
  "employment_start_date": "2021-10-26",
  "employment_status": "active",
  "first_name": "Elon",
  "food_allergies": [
    "No allergies"
  ],
  "gender": "male",
  "id": "12345",
  "initials": "EM",
  "jobs": [
    {
      "compensation_rate": 72000,
      "currency": "USD",
      "employee_id": "12345",
      "end_date": "2020-08-12",
      "hired_at": "2020-08-12",
      "id": "12345",
      "is_primary": true,
      "location": {
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
      "payment_unit": "year",
      "role": "Sales",
      "start_date": "2020-08-12",
      "title": "CEO"
    }
  ],
  "languages": [
    "EN"
  ],
  "last_name": "Musk",
  "leaving_reason": "resigned",
  "manager": {
    "email": "elon@musk.com",
    "employment_status": "active",
    "first_name": "Elon",
    "id": "12345",
    "last_name": "Musk",
    "name": "Elon Musk"
  },
  "marital_status": "married",
  "middle_name": "D.",
  "nationalities": [
    "US"
  ],
  "partner": {
    "birthday": "2000-08-12",
    "deceased_on": "2000-08-12",
    "first_name": "Elon",
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "last_name": "Musk",
    "middle_name": "D."
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
  "photo_url": "https://unavatar.io/elon-musk",
  "preferred_language": "EN",
  "preferred_name": "Elon Musk",
  "pronouns": "she,her",
  "record_url": "https://app.intercom.io/contacts/12345",
  "row_version": "1-12345",
  "salutation": "Mr",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "social_security_number": "123456789",
  "source": "lever",
  "source_id": "12345",
  "tags": [
    "New"
  ],
  "tax_code": "1111",
  "tax_id": "234-32-0000",
  "team": {
    "id": "1234",
    "name": "Full Stack Engineers"
  },
  "timezone": "Europe/London",
  "title": "CEO",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "works_remote": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|birthday|string(date) \| null|false|none|The date of birth of the person.|
|company_id|[CompanyId](#schemacompanyid)|false|none|The unique identifier of the company.|
|company_name|[CompanyName](#schemacompanyname)|false|none|The name of the company.|
|compensations|[object]|false|none|none|
|country_of_birth|string \| null|false|none|Country code according to ISO 3166-1 alpha-2.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|deceased_on|string(date) \| null|false|none|The date the person deceased.|
|deleted|boolean \| null|false|none|none|
|department|string \| null|false|none|**Deprecated.** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.|
|department_id|string \| null|false|none|Unique identifier of the department ID this employee belongs to.|
|department_name|string \| null|false|none|Name of the department this employee belongs to.|
|description|[Description](#schemadescription)|false|none|A description of the object.|
|dietary_preference|string \| null|false|none|Indicate the employee's dietary preference.|
|direct_reports|[string]|false|none|The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.|
|display_name|string \| null|false|none|The name used to display the employee, often a combination of their first and last names.|
|division|[Division](#schemadivision)|false|none|The division the person is currently in. Usually a collection of departments or teams or regions.|
|division_id|string \| null|false|none|Unique identifier of the division this employee belongs to.|
|emails|[[Email](#schemaemail)]|false|none|none|
|employee_number|[EmployeeNumber](#schemaemployeenumber)|false|none|An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.|
|employment_end_date|string \| null|false|none|An End Date is the date that the employee ended working at the company|
|employment_role|object|false|none|none|
|employment_start_date|string \| null|false|none|A Start Date is the date that the employee started working at the company|
|employment_status|[EmploymentStatus](#schemaemploymentstatus)|false|none|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|first_name|[FirstName](#schemafirstname)|false|none|The first name of the person.|
|food_allergies|[string]|false|none|Indicate the employee's food allergies.|
|gender|[Gender](#schemagender)|false|none|The gender represents the gender identity of a person.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|initials|string \| null|false|none|The initials of the person, usually derived from their first, middle, and last names.|
|jobs|[object]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|last_name|[LastName](#schemalastname)|false|none|The last name of the person.|
|leaving_reason|string \| null|false|none|The reason because the employment ended.|
|manager|object|false|none|none|
|marital_status|string \| null|false|none|The marital status of the employee.|
|middle_name|[MiddleName](#schemamiddlename)|false|none|Middle name of the person.|
|nationalities|[string \| null]|false|none|none|
|partner|object|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|photo_url|[PhotoUrl](#schemaphotourl)|false|none|The URL of the photo of a person.|
|preferred_language|[Language](#schemalanguage)|false|none|language code according to ISO 639-1. For the United States - EN|
|preferred_name|string \| null|false|none|The name the employee prefers to be addressed by, which may be different from their legal name.|
|pronouns|string \| null|false|none|The preferred pronouns of the person.|
|record_url|string \| null|false|none|none|
|row_version|[RowVersion](#schemarowversion)|false|none|A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.|
|salutation|string \| null|false|none|A formal salutation for the person. For example, 'Mr', 'Mrs'|
|social_links|[object]|false|none|none|
|social_security_number|string \| null|false|none|A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.|
|source|string \| null|false|none|When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.|
|source_id|string \| null|false|none|Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).|
|tags|[string]|false|none|none|
|tax_code|string \| null|false|none|none|
|tax_id|string \| null|false|none|none|
|team|object \| null|false|none|The team the person is currently in.|
|timezone|string \| null|false|none|The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.|
|title|[Title](#schematitle)|false|none|The job title of the person.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|works_remote|boolean \| null|false|none|Indicates if the employee works from a remote location.|

#### Enumerated Values

|Property|Value|
|---|---|
|employment_status|active|
|employment_status|inactive|
|employment_status|terminated|
|employment_status|other|
|gender|male|
|gender|female|
|gender|unisex|
|gender|other|
|gender|not_specified|
|leaving_reason|dismissed|
|leaving_reason|resigned|
|leaving_reason|redundancy|
|leaving_reason|other|

<h2 id="tocS_EmployeeNumber">EmployeeNumber</h2>
<!-- backwards compatibility -->
<a id="schemaemployeenumber"></a>
<a id="schema_EmployeeNumber"></a>
<a id="tocSemployeenumber"></a>
<a id="tocsemployeenumber"></a>

```json
"123456-AB"
```

An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.

<h2 id="tocS_EmployeePayroll">EmployeePayroll</h2>
<!-- backwards compatibility -->
<a id="schemaemployeepayroll"></a>
<a id="schema_EmployeePayroll"></a>
<a id="tocSemployeepayroll"></a>
<a id="tocsemployeepayroll"></a>

```json
{
  "employee": {
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
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "payroll": {
    "check_date": "2022-04-08",
    "company_id": "23456",
    "compensations": [
      {
        "benefits": [
          {
            "employee_deduction": 142.94,
            "employer_contribution": 141.14,
            "name": "Health Insurance"
          }
        ],
        "deductions": [
          {
            "amount": 10.97,
            "name": "Company Car"
          }
        ],
        "employee_id": "12345",
        "gross_pay": 3000,
        "net_pay": 2199.93,
        "taxes": [
          {
            "amount": 1.97,
            "employer": false,
            "name": "CA State Income Tax"
          }
        ]
      }
    ],
    "end_date": "2022-04-21",
    "id": "12345",
    "processed": false,
    "processed_date": "2022-04-08",
    "start_date": "2022-04-08",
    "totals": {
      "check_amount": 27966.23,
      "company_debit": 27992.49,
      "employee_benefit_deductions": 0,
      "employee_taxes": 6616.39,
      "employer_benefit_contributions": 0,
      "employer_taxes": 2038.93,
      "gross_pay": 27966.23,
      "net_pay": 19337.17,
      "tax_debit": 8655.32
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[Employee](#schemaemployee)|false|none|none|
|payroll|[Payroll](#schemapayroll)|false|none|none|

<h2 id="tocS_EmployeePayrolls">EmployeePayrolls</h2>
<!-- backwards compatibility -->
<a id="schemaemployeepayrolls"></a>
<a id="schema_EmployeePayrolls"></a>
<a id="tocSemployeepayrolls"></a>
<a id="tocsemployeepayrolls"></a>

```json
{
  "employee": {
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
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "payrolls": [
    {
      "check_date": "2022-04-08",
      "company_id": "23456",
      "compensations": [
        {
          "benefits": [
            {
              "employee_deduction": 142.94,
              "employer_contribution": 141.14,
              "name": "Health Insurance"
            }
          ],
          "deductions": [
            {
              "amount": 10.97,
              "name": "Company Car"
            }
          ],
          "employee_id": "12345",
          "gross_pay": 3000,
          "net_pay": 2199.93,
          "taxes": [
            {
              "amount": 1.97,
              "employer": false,
              "name": "CA State Income Tax"
            }
          ]
        }
      ],
      "end_date": "2022-04-21",
      "id": "12345",
      "processed": false,
      "processed_date": "2022-04-08",
      "start_date": "2022-04-08",
      "totals": {
        "check_amount": 27966.23,
        "company_debit": 27992.49,
        "employee_benefit_deductions": 0,
        "employee_taxes": 6616.39,
        "employer_benefit_contributions": 0,
        "employer_taxes": 2038.93,
        "gross_pay": 27966.23,
        "net_pay": 19337.17,
        "tax_debit": 8655.32
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[Employee](#schemaemployee)|false|none|none|
|payrolls|[[Payroll](#schemapayroll)]|false|none|none|

<h2 id="tocS_EmployeeSchedules">EmployeeSchedules</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeschedules"></a>
<a id="schema_EmployeeSchedules"></a>
<a id="tocSemployeeschedules"></a>
<a id="tocsemployeeschedules"></a>

```json
{
  "employee": {
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
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "schedules": [
    {
      "end_date": "2022-04-21",
      "id": "12345",
      "start_date": "2022-04-08",
      "work_pattern": {
        "even_weeks": {
          "hours_friday": 4,
          "hours_monday": 8,
          "hours_saturday": 0,
          "hours_sunday": 0,
          "hours_thursday": 7.5,
          "hours_tuesday": 8,
          "hours_wednesday": 4
        },
        "odd_weeks": {
          "hours_friday": 4,
          "hours_monday": 8,
          "hours_saturday": 0,
          "hours_sunday": 0,
          "hours_thursday": 7.5,
          "hours_tuesday": 8,
          "hours_wednesday": 4
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[Employee](#schemaemployee)|false|none|none|
|schedules|[[Schedule](#schemaschedule)]|false|none|none|

<h2 id="tocS_EmployeesFilter">EmployeesFilter</h2>
<!-- backwards compatibility -->
<a id="schemaemployeesfilter"></a>
<a id="schema_EmployeesFilter"></a>
<a id="tocSemployeesfilter"></a>
<a id="tocsemployeesfilter"></a>

```json
{
  "company_id": "1234",
  "department_id": "1234",
  "email": "elon@tesla.com",
  "employee_number": "123456-AB",
  "employment_status": "active",
  "first_name": "Elon",
  "last_name": "Musk",
  "manager_id": "1234",
  "title": "Manager"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|string|false|none|Company ID to filter on|
|department_id|string|false|none|ID of the department to filter on|
|email|string|false|none|Email to filter on|
|employee_number|string|false|none|Employee number to filter on|
|employment_status|string|false|none|Employment status to filter on|
|first_name|string|false|none|First Name to filter on|
|last_name|string|false|none|Last Name to filter on|
|manager_id|string|false|none|Manager id to filter on|
|title|string|false|none|Job title to filter on|

#### Enumerated Values

|Property|Value|
|---|---|
|employment_status|active|
|employment_status|inactive|
|employment_status|terminated|
|employment_status|other|

<h2 id="tocS_EmployeesSort">EmployeesSort</h2>
<!-- backwards compatibility -->
<a id="schemaemployeessort"></a>
<a id="schema_EmployeesSort"></a>
<a id="tocSemployeessort"></a>
<a id="tocsemployeessort"></a>

```json
{
  "by": "created_at",
  "direction": "desc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|false|none|The field on which to sort the Employees|
|direction|[SortDirection](#schemasortdirection)|false|none|The direction in which to sort the results|

#### Enumerated Values

|Property|Value|
|---|---|
|by|first_name|
|by|last_name|
|by|created_at|
|by|updated_at|
|direction|asc|
|direction|desc|

<h2 id="tocS_EmploymentStatus">EmploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaemploymentstatus"></a>
<a id="schema_EmploymentStatus"></a>
<a id="tocSemploymentstatus"></a>
<a id="tocsemploymentstatus"></a>

```json
"active"
```

The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.

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

<h2 id="tocS_GetDepartmentResponse">GetDepartmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdepartmentresponse"></a>
<a id="schema_GetDepartmentResponse"></a>
<a id="tocSgetdepartmentresponse"></a>
<a id="tocsgetdepartmentresponse"></a>

```json
{
  "data": {
    "code": "2",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "R&D",
    "id": "12345",
    "name": "R&D",
    "parent_id": "22345",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "Departments",
  "service": "workday",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Department](#schemadepartment)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetDepartmentsResponse">GetDepartmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdepartmentsresponse"></a>
<a id="schema_GetDepartmentsResponse"></a>
<a id="tocSgetdepartmentsresponse"></a>
<a id="tocsgetdepartmentsresponse"></a>

```json
{
  "data": [
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
  "resource": "Departments",
  "service": "workday",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Department](#schemadepartment)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEmployeePayrollResponse">GetEmployeePayrollResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemployeepayrollresponse"></a>
<a id="schema_GetEmployeePayrollResponse"></a>
<a id="tocSgetemployeepayrollresponse"></a>
<a id="tocsgetemployeepayrollresponse"></a>

```json
{
  "data": {
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "payroll": {
      "check_date": "2022-04-08",
      "company_id": "23456",
      "compensations": [
        {
          "benefits": [
            {
              "employee_deduction": 142.94,
              "employer_contribution": 141.14,
              "name": "Health Insurance"
            }
          ],
          "deductions": [
            {
              "amount": 10.97,
              "name": "Company Car"
            }
          ],
          "employee_id": "12345",
          "gross_pay": 3000,
          "net_pay": 2199.93,
          "taxes": [
            {
              "amount": 1.97,
              "employer": false,
              "name": "CA State Income Tax"
            }
          ]
        }
      ],
      "end_date": "2022-04-21",
      "id": "12345",
      "processed": false,
      "processed_date": "2022-04-08",
      "start_date": "2022-04-08",
      "totals": {
        "check_amount": 27966.23,
        "company_debit": 27992.49,
        "employee_benefit_deductions": 0,
        "employee_taxes": 6616.39,
        "employer_benefit_contributions": 0,
        "employer_taxes": 2038.93,
        "gross_pay": 27966.23,
        "net_pay": 19337.17,
        "tax_debit": 8655.32
      }
    }
  },
  "operation": "one",
  "resource": "Companies",
  "service": "undefined",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EmployeePayroll](#schemaemployeepayroll)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEmployeePayrollsResponse">GetEmployeePayrollsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemployeepayrollsresponse"></a>
<a id="schema_GetEmployeePayrollsResponse"></a>
<a id="tocSgetemployeepayrollsresponse"></a>
<a id="tocsgetemployeepayrollsresponse"></a>

```json
{
  "data": {
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "payrolls": [
      {
        "check_date": "2022-04-08",
        "company_id": "23456",
        "compensations": [
          {
            "benefits": [
              {
                "employee_deduction": 142.94,
                "employer_contribution": 141.14,
                "name": "Health Insurance"
              }
            ],
            "deductions": [
              {
                "amount": 10.97,
                "name": "Company Car"
              }
            ],
            "employee_id": "12345",
            "gross_pay": 3000,
            "net_pay": 2199.93,
            "taxes": [
              {
                "amount": 1.97,
                "employer": false,
                "name": "CA State Income Tax"
              }
            ]
          }
        ],
        "end_date": "2022-04-21",
        "id": "12345",
        "processed": false,
        "processed_date": "2022-04-08",
        "start_date": "2022-04-08",
        "totals": {
          "check_amount": 27966.23,
          "company_debit": 27992.49,
          "employee_benefit_deductions": 0,
          "employee_taxes": 6616.39,
          "employer_benefit_contributions": 0,
          "employer_taxes": 2038.93,
          "gross_pay": 27966.23,
          "net_pay": 19337.17,
          "tax_debit": 8655.32
        }
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EmployeePayrolls](#schemaemployeepayrolls)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEmployeeResponse">GetEmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemployeeresponse"></a>
<a id="schema_GetEmployeeResponse"></a>
<a id="tocSgetemployeeresponse"></a>
<a id="tocsgetemployeeresponse"></a>

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
    "birthday": "2000-08-12",
    "company_id": "23456",
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "operation": "one",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Employee](#schemaemployee)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEmployeeSchedulesResponse">GetEmployeeSchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemployeeschedulesresponse"></a>
<a id="schema_GetEmployeeSchedulesResponse"></a>
<a id="tocSgetemployeeschedulesresponse"></a>
<a id="tocsgetemployeeschedulesresponse"></a>

```json
{
  "data": {
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "schedules": [
      {
        "end_date": "2022-04-21",
        "id": "12345",
        "start_date": "2022-04-08",
        "work_pattern": {
          "even_weeks": {
            "hours_friday": 4,
            "hours_monday": 8,
            "hours_saturday": 0,
            "hours_sunday": 0,
            "hours_thursday": 7.5,
            "hours_tuesday": 8,
            "hours_wednesday": 4
          },
          "odd_weeks": {
            "hours_friday": 4,
            "hours_monday": 8,
            "hours_saturday": 0,
            "hours_sunday": 0,
            "hours_thursday": 7.5,
            "hours_tuesday": 8,
            "hours_wednesday": 4
          }
        }
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EmployeeSchedules](#schemaemployeeschedules)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEmployeesResponse">GetEmployeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemployeesresponse"></a>
<a id="schema_GetEmployeesResponse"></a>
<a id="tocSgetemployeesresponse"></a>
<a id="tocsgetemployeesresponse"></a>

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
      "birthday": "2000-08-12",
      "company_id": "23456",
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
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
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Employee](#schemaemployee)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetHrisCompaniesResponse">GetHrisCompaniesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethriscompaniesresponse"></a>
<a id="schema_GetHrisCompaniesResponse"></a>
<a id="tocSgethriscompaniesresponse"></a>
<a id="tocsgethriscompaniesresponse"></a>

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
      "company_number": "123456-AB",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "debtor_id": "12345",
      "deleted": false,
      "display_name": "SpaceX",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "id": "12345",
      "legal_name": "SpaceX",
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
      "subdomain": "company",
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
  "resource": "Companies",
  "service": "undefined",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[HrisCompany](#schemahriscompany)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetHrisCompanyResponse">GetHrisCompanyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethriscompanyresponse"></a>
<a id="schema_GetHrisCompanyResponse"></a>
<a id="tocSgethriscompanyresponse"></a>
<a id="tocsgethriscompanyresponse"></a>

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
    "company_number": "123456-AB",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "debtor_id": "12345",
    "deleted": false,
    "display_name": "SpaceX",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "id": "12345",
    "legal_name": "SpaceX",
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
    "subdomain": "company",
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
  "resource": "Companies",
  "service": "undefined",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HrisCompany](#schemahriscompany)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetHrisJobResponse">GetHrisJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethrisjobresponse"></a>
<a id="schema_GetHrisJobResponse"></a>
<a id="tocSgethrisjobresponse"></a>
<a id="tocsgethrisjobresponse"></a>

```json
{
  "data": {
    "department": "Brussels Office",
    "employee_id": "string",
    "employment_status": "active",
    "end_date": "2020-08-12",
    "id": "12345",
    "is_primary": true,
    "location": {
      "name": "HQ US"
    },
    "start_date": "2020-08-12",
    "title": "CEO"
  },
  "operation": "one",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HrisJob](#schemahrisjob)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetHrisJobsResponse">GetHrisJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethrisjobsresponse"></a>
<a id="schema_GetHrisJobsResponse"></a>
<a id="tocSgethrisjobsresponse"></a>
<a id="tocsgethrisjobsresponse"></a>

```json
{
  "data": {
    "employee": {
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
      "company_name": "SpaceX",
      "compensations": [
        {
          "effective_date": "2021-06-11",
          "flsa_status": "nonexempt",
          "id": "3404301363494309004",
          "job_id": "3490439050957906679",
          "payment_unit": "hour",
          "rate": 50
        }
      ],
      "country_of_birth": "US",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "custom_fields": [
        {
          "description": "Employee Level",
          "id": "2389328923893298",
          "name": "employee_level",
          "value": "Uses Salesforce and Marketo"
        }
      ],
      "deceased_on": "2000-08-12",
      "deleted": true,
      "department": "R&D",
      "department_id": "12345",
      "department_name": "12345",
      "description": "A description",
      "dietary_preference": "Veggie",
      "direct_reports": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "display_name": "Technoking",
      "division": "Europe",
      "division_id": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "employee_number": "123456-AB",
      "employment_end_date": "2028-10-26",
      "employment_role": {
        "sub_type": "full_time",
        "type": "contractor"
      },
      "employment_start_date": "2021-10-26",
      "employment_status": "active",
      "first_name": "Elon",
      "food_allergies": [
        "No allergies"
      ],
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "jobs": [
        {
          "compensation_rate": 72000,
          "currency": "USD",
          "employee_id": "12345",
          "end_date": "2020-08-12",
          "hired_at": "2020-08-12",
          "id": "12345",
          "is_primary": true,
          "location": {
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
          "payment_unit": "year",
          "role": "Sales",
          "start_date": "2020-08-12",
          "title": "CEO"
        }
      ],
      "languages": [
        "EN"
      ],
      "last_name": "Musk",
      "leaving_reason": "resigned",
      "manager": {
        "email": "elon@musk.com",
        "employment_status": "active",
        "first_name": "Elon",
        "id": "12345",
        "last_name": "Musk",
        "name": "Elon Musk"
      },
      "marital_status": "married",
      "middle_name": "D.",
      "nationalities": [
        "US"
      ],
      "partner": {
        "birthday": "2000-08-12",
        "deceased_on": "2000-08-12",
        "first_name": "Elon",
        "gender": "male",
        "id": "12345",
        "initials": "EM",
        "last_name": "Musk",
        "middle_name": "D."
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
      "photo_url": "https://unavatar.io/elon-musk",
      "preferred_language": "EN",
      "preferred_name": "Elon Musk",
      "pronouns": "she,her",
      "record_url": "https://app.intercom.io/contacts/12345",
      "row_version": "1-12345",
      "salutation": "Mr",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "social_security_number": "123456789",
      "source": "lever",
      "source_id": "12345",
      "tags": [
        "New"
      ],
      "tax_code": "1111",
      "tax_id": "234-32-0000",
      "team": {
        "id": "1234",
        "name": "Full Stack Engineers"
      },
      "timezone": "Europe/London",
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "works_remote": true
    },
    "jobs": [
      {
        "department": "Brussels Office",
        "employee_id": "string",
        "employment_status": "active",
        "end_date": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
          "name": "HQ US"
        },
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ]
  },
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HrisJobs](#schemahrisjobs)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPayrollResponse">GetPayrollResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpayrollresponse"></a>
<a id="schema_GetPayrollResponse"></a>
<a id="tocSgetpayrollresponse"></a>
<a id="tocsgetpayrollresponse"></a>

```json
{
  "data": {
    "check_date": "2022-04-08",
    "company_id": "23456",
    "compensations": [
      {
        "benefits": [
          {
            "employee_deduction": 142.94,
            "employer_contribution": 141.14,
            "name": "Health Insurance"
          }
        ],
        "deductions": [
          {
            "amount": 10.97,
            "name": "Company Car"
          }
        ],
        "employee_id": "12345",
        "gross_pay": 3000,
        "net_pay": 2199.93,
        "taxes": [
          {
            "amount": 1.97,
            "employer": false,
            "name": "CA State Income Tax"
          }
        ]
      }
    ],
    "end_date": "2022-04-21",
    "id": "12345",
    "processed": false,
    "processed_date": "2022-04-08",
    "start_date": "2022-04-08",
    "totals": {
      "check_amount": 27966.23,
      "company_debit": 27992.49,
      "employee_benefit_deductions": 0,
      "employee_taxes": 6616.39,
      "employer_benefit_contributions": 0,
      "employer_taxes": 2038.93,
      "gross_pay": 27966.23,
      "net_pay": 19337.17,
      "tax_debit": 8655.32
    }
  },
  "operation": "one",
  "resource": "Companies",
  "service": "undefined",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Payroll](#schemapayroll)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetPayrollsResponse">GetPayrollsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpayrollsresponse"></a>
<a id="schema_GetPayrollsResponse"></a>
<a id="tocSgetpayrollsresponse"></a>
<a id="tocsgetpayrollsresponse"></a>

```json
{
  "data": [
    {
      "check_date": "2022-04-08",
      "company_id": "23456",
      "compensations": [
        {
          "benefits": [
            {
              "employee_deduction": 142.94,
              "employer_contribution": 141.14,
              "name": "Health Insurance"
            }
          ],
          "deductions": [
            {
              "amount": 10.97,
              "name": "Company Car"
            }
          ],
          "employee_id": "12345",
          "gross_pay": 3000,
          "net_pay": 2199.93,
          "taxes": [
            {
              "amount": 1.97,
              "employer": false,
              "name": "CA State Income Tax"
            }
          ]
        }
      ],
      "end_date": "2022-04-21",
      "id": "12345",
      "processed": false,
      "processed_date": "2022-04-08",
      "start_date": "2022-04-08",
      "totals": {
        "check_amount": 27966.23,
        "company_debit": 27992.49,
        "employee_benefit_deductions": 0,
        "employee_taxes": 6616.39,
        "employer_benefit_contributions": 0,
        "employer_taxes": 2038.93,
        "gross_pay": 27966.23,
        "net_pay": 19337.17,
        "tax_debit": 8655.32
      }
    }
  ],
  "operation": "all",
  "resource": "Employees",
  "service": "sage-hr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Payroll](#schemapayroll)]|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTimeOffRequestResponse">GetTimeOffRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettimeoffrequestresponse"></a>
<a id="schema_GetTimeOffRequestResponse"></a>
<a id="tocSgettimeoffrequestresponse"></a>
<a id="tocsgettimeoffrequestresponse"></a>

```json
{
  "data": {
    "amount": 3.5,
    "approval_date": "2022-03-21",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "description": "Enjoying some sun.",
    "employee_id": "12345",
    "end_date": "2022-04-01",
    "id": "12345",
    "notes": {
      "employee": "Relaxing on the beach for a few hours.",
      "manager": "Enjoy!"
    },
    "policy_id": "12345",
    "request_date": "2022-03-21",
    "request_type": "vacation",
    "start_date": "2022-04-01",
    "status": "approved",
    "units": "hours",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345"
  },
  "operation": "one",
  "resource": "time-off-requests",
  "service": "bamboohr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TimeOffRequest](#schematimeoffrequest)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetTimeOffRequestsResponse">GetTimeOffRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettimeoffrequestsresponse"></a>
<a id="schema_GetTimeOffRequestsResponse"></a>
<a id="tocSgettimeoffrequestsresponse"></a>
<a id="tocsgettimeoffrequestsresponse"></a>

```json
{
  "data": [
    {
      "amount": 3.5,
      "approval_date": "2022-03-21",
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "description": "Enjoying some sun.",
      "employee_id": "12345",
      "end_date": "2022-04-01",
      "id": "12345",
      "notes": {
        "employee": "Relaxing on the beach for a few hours.",
        "manager": "Enjoy!"
      },
      "policy_id": "12345",
      "request_date": "2022-03-21",
      "request_type": "vacation",
      "start_date": "2022-04-01",
      "status": "approved",
      "units": "hours",
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
  "resource": "time-off-requests",
  "service": "bamboohr",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TimeOffRequest](#schematimeoffrequest)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_HrisCompany">HrisCompany</h2>
<!-- backwards compatibility -->
<a id="schemahriscompany"></a>
<a id="schema_HrisCompany"></a>
<a id="tocShriscompany"></a>
<a id="tocshriscompany"></a>

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
  "company_number": "123456-AB",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "debtor_id": "12345",
  "deleted": false,
  "display_name": "SpaceX",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "id": "12345",
  "legal_name": "SpaceX",
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
  "subdomain": "company",
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
|addresses|[[Address](#schemaaddress)]|false|none|none|
|company_number|string \| null|false|none|An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|debtor_id|string|false|none|none|
|deleted|boolean|false|read-only|none|
|display_name|string|false|none|none|
|emails|[[Email](#schemaemail)]|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|legal_name|string|true|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|status|string|false|none|none|
|subdomain|string|false|none|none|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|websites|[[Website](#schemawebsite)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|status|trial|
|status|other|

<h2 id="tocS_HrisEventType">HrisEventType</h2>
<!-- backwards compatibility -->
<a id="schemahriseventtype"></a>
<a id="schema_HrisEventType"></a>
<a id="tocShriseventtype"></a>
<a id="tocshriseventtype"></a>

```json
"hris.employee.created"
```

<h2 id="tocS_HrisJob">HrisJob</h2>
<!-- backwards compatibility -->
<a id="schemahrisjob"></a>
<a id="schema_HrisJob"></a>
<a id="tocShrisjob"></a>
<a id="tocshrisjob"></a>

```json
{
  "department": "Brussels Office",
  "employee_id": "string",
  "employment_status": "active",
  "end_date": "2020-08-12",
  "id": "12345",
  "is_primary": true,
  "location": {
    "name": "HQ US"
  },
  "start_date": "2020-08-12",
  "title": "CEO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|string \| null|false|none|Department name|
|employee_id|string|false|none|Id of the employee|
|employment_status|[EmploymentStatus](#schemaemploymentstatus)|false|none|The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.|
|end_date|string(date) \| null|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|is_primary|boolean \| null|false|none|Indicates whether this the employee's primary job.|
|location|object|false|none|none|
|start_date|string(date) \| null|false|none|none|
|title|[Title](#schematitle)|false|none|The job title of the person.|

#### Enumerated Values

|Property|Value|
|---|---|
|employment_status|active|
|employment_status|inactive|
|employment_status|terminated|
|employment_status|other|

<h2 id="tocS_HrisJobs">HrisJobs</h2>
<!-- backwards compatibility -->
<a id="schemahrisjobs"></a>
<a id="schema_HrisJobs"></a>
<a id="tocShrisjobs"></a>
<a id="tocshrisjobs"></a>

```json
{
  "employee": {
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
    "company_name": "SpaceX",
    "compensations": [
      {
        "effective_date": "2021-06-11",
        "flsa_status": "nonexempt",
        "id": "3404301363494309004",
        "job_id": "3490439050957906679",
        "payment_unit": "hour",
        "rate": 50
      }
    ],
    "country_of_birth": "US",
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deceased_on": "2000-08-12",
    "deleted": true,
    "department": "R&D",
    "department_id": "12345",
    "department_name": "12345",
    "description": "A description",
    "dietary_preference": "Veggie",
    "direct_reports": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "display_name": "Technoking",
    "division": "Europe",
    "division_id": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "employee_number": "123456-AB",
    "employment_end_date": "2028-10-26",
    "employment_role": {
      "sub_type": "full_time",
      "type": "contractor"
    },
    "employment_start_date": "2021-10-26",
    "employment_status": "active",
    "first_name": "Elon",
    "food_allergies": [
      "No allergies"
    ],
    "gender": "male",
    "id": "12345",
    "initials": "EM",
    "jobs": [
      {
        "compensation_rate": 72000,
        "currency": "USD",
        "employee_id": "12345",
        "end_date": "2020-08-12",
        "hired_at": "2020-08-12",
        "id": "12345",
        "is_primary": true,
        "location": {
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
        "payment_unit": "year",
        "role": "Sales",
        "start_date": "2020-08-12",
        "title": "CEO"
      }
    ],
    "languages": [
      "EN"
    ],
    "last_name": "Musk",
    "leaving_reason": "resigned",
    "manager": {
      "email": "elon@musk.com",
      "employment_status": "active",
      "first_name": "Elon",
      "id": "12345",
      "last_name": "Musk",
      "name": "Elon Musk"
    },
    "marital_status": "married",
    "middle_name": "D.",
    "nationalities": [
      "US"
    ],
    "partner": {
      "birthday": "2000-08-12",
      "deceased_on": "2000-08-12",
      "first_name": "Elon",
      "gender": "male",
      "id": "12345",
      "initials": "EM",
      "last_name": "Musk",
      "middle_name": "D."
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
    "photo_url": "https://unavatar.io/elon-musk",
    "preferred_language": "EN",
    "preferred_name": "Elon Musk",
    "pronouns": "she,her",
    "record_url": "https://app.intercom.io/contacts/12345",
    "row_version": "1-12345",
    "salutation": "Mr",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "social_security_number": "123456789",
    "source": "lever",
    "source_id": "12345",
    "tags": [
      "New"
    ],
    "tax_code": "1111",
    "tax_id": "234-32-0000",
    "team": {
      "id": "1234",
      "name": "Full Stack Engineers"
    },
    "timezone": "Europe/London",
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "works_remote": true
  },
  "jobs": [
    {
      "department": "Brussels Office",
      "employee_id": "string",
      "employment_status": "active",
      "end_date": "2020-08-12",
      "id": "12345",
      "is_primary": true,
      "location": {
        "name": "HQ US"
      },
      "start_date": "2020-08-12",
      "title": "CEO"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[Employee](#schemaemployee)|false|none|none|
|jobs|[[HrisJob](#schemahrisjob)]|false|none|none|

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

<h2 id="tocS_Payroll">Payroll</h2>
<!-- backwards compatibility -->
<a id="schemapayroll"></a>
<a id="schema_Payroll"></a>
<a id="tocSpayroll"></a>
<a id="tocspayroll"></a>

```json
{
  "check_date": "2022-04-08",
  "company_id": "23456",
  "compensations": [
    {
      "benefits": [
        {
          "employee_deduction": 142.94,
          "employer_contribution": 141.14,
          "name": "Health Insurance"
        }
      ],
      "deductions": [
        {
          "amount": 10.97,
          "name": "Company Car"
        }
      ],
      "employee_id": "12345",
      "gross_pay": 3000,
      "net_pay": 2199.93,
      "taxes": [
        {
          "amount": 1.97,
          "employer": false,
          "name": "CA State Income Tax"
        }
      ]
    }
  ],
  "end_date": "2022-04-21",
  "id": "12345",
  "processed": false,
  "processed_date": "2022-04-08",
  "start_date": "2022-04-08",
  "totals": {
    "check_amount": 27966.23,
    "company_debit": 27992.49,
    "employee_benefit_deductions": 0,
    "employee_taxes": 6616.39,
    "employer_benefit_contributions": 0,
    "employer_taxes": 2038.93,
    "gross_pay": 27966.23,
    "net_pay": 19337.17,
    "tax_debit": 8655.32
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_date|string|true|none|The date on which employees will be paid for the payroll.|
|company_id|[CompanyId](#schemacompanyid)|false|none|The unique identifier of the company.|
|compensations|[[Compensation](#schemacompensation)]|false|none|An array of compensations for the payroll.|
|end_date|string|true|none|The end date, inclusive, of the pay period.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|processed|boolean|true|none|Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.|
|processed_date|string \| null|false|none|The date the payroll was processed.|
|start_date|string|true|none|The start date, inclusive, of the pay period.|
|totals|[PayrollTotals](#schemapayrolltotals)|false|none|The overview of the payroll totals.|

<h2 id="tocS_PayrollTotals">PayrollTotals</h2>
<!-- backwards compatibility -->
<a id="schemapayrolltotals"></a>
<a id="schema_PayrollTotals"></a>
<a id="tocSpayrolltotals"></a>
<a id="tocspayrolltotals"></a>

```json
{
  "check_amount": 27966.23,
  "company_debit": 27992.49,
  "employee_benefit_deductions": 0,
  "employee_taxes": 6616.39,
  "employer_benefit_contributions": 0,
  "employer_taxes": 2038.93,
  "gross_pay": 27966.23,
  "net_pay": 19337.17,
  "tax_debit": 8655.32
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_amount|number|false|none|The total check amount for the payroll.|
|company_debit|number|false|none|The total company debit for the payroll.|
|employee_benefit_deductions|number|false|none|The total amount of employee deducted benefits for the payroll.|
|employee_taxes|number|false|none|The total amount of employee paid taxes for the payroll.|
|employer_benefit_contributions|number|false|none|The total amount of company contributed benefits for the payroll.|
|employer_taxes|number|false|none|The total amount of employer paid taxes for the payroll.|
|gross_pay|number|false|none|The gross pay amount for the payroll.|
|net_pay|number|false|none|The net pay amount for the payroll.|
|tax_debit|number|false|none|The total tax debit for the payroll.|

<h2 id="tocS_PayrollsFilter">PayrollsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapayrollsfilter"></a>
<a id="schema_PayrollsFilter"></a>
<a id="tocSpayrollsfilter"></a>
<a id="tocspayrollsfilter"></a>

```json
{
  "end_date": "2022-04-21",
  "start_date": "2022-04-08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string|false|none|Return payrolls whose pay period is before the end date|
|start_date|string|false|none|Return payrolls whose pay period is after the start date|

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

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "end_date": "2022-04-21",
  "id": "12345",
  "start_date": "2022-04-08",
  "work_pattern": {
    "even_weeks": {
      "hours_friday": 4,
      "hours_monday": 8,
      "hours_saturday": 0,
      "hours_sunday": 0,
      "hours_thursday": 7.5,
      "hours_tuesday": 8,
      "hours_wednesday": 4
    },
    "odd_weeks": {
      "hours_friday": 4,
      "hours_monday": 8,
      "hours_saturday": 0,
      "hours_sunday": 0,
      "hours_thursday": 7.5,
      "hours_tuesday": 8,
      "hours_wednesday": 4
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string|true|none|The end date, inclusive, of the schedule period.|
|id|[Id](#schemaid)|true|read-only|A unique identifier for an object.|
|start_date|string|true|none|The start date, inclusive, of the schedule period.|
|work_pattern|object|true|none|none|

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

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "amount": 1.97,
  "employer": false,
  "name": "CA State Income Tax"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount of the tax.|
|employer|boolean|false|none|Paid by employer.|
|name|string|false|none|The name of the tax.|

<h2 id="tocS_TimeOffRequest">TimeOffRequest</h2>
<!-- backwards compatibility -->
<a id="schematimeoffrequest"></a>
<a id="schema_TimeOffRequest"></a>
<a id="tocStimeoffrequest"></a>
<a id="tocstimeoffrequest"></a>

```json
{
  "amount": 3.5,
  "approval_date": "2022-03-21",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "description": "Enjoying some sun.",
  "employee_id": "12345",
  "end_date": "2022-04-01",
  "id": "12345",
  "notes": {
    "employee": "Relaxing on the beach for a few hours.",
    "manager": "Enjoy!"
  },
  "policy_id": "12345",
  "request_date": "2022-03-21",
  "request_type": "vacation",
  "start_date": "2022-04-01",
  "status": "approved",
  "units": "hours",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount of time off requested.|
|approval_date|string|false|none|The date the request was approved|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|description|string|false|none|Description of the time off request.|
|employee_id|string|false|none|ID of the employee|
|end_date|string|false|none|The end date of the time off request.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|notes|object|false|none|none|
|policy_id|string|false|none|ID of the policy|
|request_date|string|false|none|The date the request was made.|
|request_type|string|false|none|The type of request|
|start_date|string|false|none|The start date of the time off request.|
|status|string|false|none|The status of the time off request.|
|units|string|false|none|The unit of time off requested. Possible values include: `hours`, `days`, or `other`.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|request_type|vacation|
|request_type|sick|
|request_type|personal|
|request_type|jury_duty|
|request_type|volunteer|
|request_type|bereavement|
|request_type|other|
|status|requested|
|status|approved|
|status|declined|
|status|cancelled|
|status|deleted|
|status|other|
|units|days|
|units|hours|
|units|other|

<h2 id="tocS_TimeOffRequestsFilter">TimeOffRequestsFilter</h2>
<!-- backwards compatibility -->
<a id="schematimeoffrequestsfilter"></a>
<a id="schema_TimeOffRequestsFilter"></a>
<a id="tocStimeoffrequestsfilter"></a>
<a id="tocstimeoffrequestsfilter"></a>

```json
{
  "employee_id": "1234",
  "end_date": "2022-04-21",
  "start_date": "2022-04-08",
  "time_off_request_status": "approved"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_id|string|false|none|Employee ID|
|end_date|string|false|none|End date|
|start_date|string|false|none|Start date|
|time_off_request_status|string|false|none|Time off request status to filter on|

#### Enumerated Values

|Property|Value|
|---|---|
|time_off_request_status|requested|
|time_off_request_status|approved|
|time_off_request_status|declined|
|time_off_request_status|cancelled|
|time_off_request_status|deleted|
|time_off_request_status|other|

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

<h2 id="tocS_UpdateDepartmentResponse">UpdateDepartmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedepartmentresponse"></a>
<a id="schema_UpdateDepartmentResponse"></a>
<a id="tocSupdatedepartmentresponse"></a>
<a id="tocsupdatedepartmentresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Departments",
  "service": "workday",
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

<h2 id="tocS_UpdateEmployeeResponse">UpdateEmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemployeeresponse"></a>
<a id="schema_UpdateEmployeeResponse"></a>
<a id="tocSupdateemployeeresponse"></a>
<a id="tocsupdateemployeeresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Employees",
  "service": "sage-hr",
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

<h2 id="tocS_UpdateHrisCompanyResponse">UpdateHrisCompanyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehriscompanyresponse"></a>
<a id="schema_UpdateHrisCompanyResponse"></a>
<a id="tocSupdatehriscompanyresponse"></a>
<a id="tocsupdatehriscompanyresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Companies",
  "service": "undefined",
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

<h2 id="tocS_UpdateTimeOffRequestResponse">UpdateTimeOffRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimeoffrequestresponse"></a>
<a id="schema_UpdateTimeOffRequestResponse"></a>
<a id="tocSupdatetimeoffrequestresponse"></a>
<a id="tocsupdatetimeoffrequestresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "time-off-requests",
  "service": "bamboohr",
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
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close",
  "event_type": "hris.employee.created"
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
|event_type|[HrisEventType](#schemahriseventtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|*|
|event_type|hris.employee.created|
|event_type|hris.employee.updated|
|event_type|hris.employee.deleted|
|event_type|hris.company.created|
|event_type|hris.company.updated|
|event_type|hris.company.deleted|

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
