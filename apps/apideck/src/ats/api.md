<h1 id="ats-api">ATS API v9.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the ATS API.

You can use this API to access all ATS API endpoints.

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

<h1 id="ats-api-applicants">Applicants</h1>

## List applicants

<a id="opIdapplicantsAll"></a>

> Code samples

```bash
curl https://example.com/ats/applicants \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ats/applicants`

List applicants

<h3 id="list-applicants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of results to return. Minimum 1, Maximum 200, Default 20|
|filter|query|[JobsFilter](#schemajobsfilter)|false|Apply filters|
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
      "anonymized": true,
      "applications": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "archived": false,
      "birthday": "2000-08-12",
      "confidential": false,
      "coordinator_id": "12345",
      "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
      "cv_url": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
      "deleted": true,
      "deleted_at": "2020-09-30T07:43:32.000Z",
      "deleted_by": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "followers": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "headline": "PepsiCo, Inc, Central Perk",
      "id": "12345",
      "initials": "EM",
      "job_url": "https://democompany.recruitee.com/o/example-talent-pool",
      "last_interaction_at": "2020-09-30T07:43:32.000Z",
      "last_name": "Musk",
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
      "position_id": "123",
      "record_url": "https://app.intercom.io/contacts/12345",
      "recruiter_id": "12345",
      "rejected_at": "2020-09-30T07:43:32.000Z",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "source_id": "12345",
      "sourced_by": "12345",
      "sources": [
        "Job site"
      ],
      "stage_id": "12345",
      "tags": [
        "New"
      ],
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
  "resource": "Applicants",
  "service": "lever",
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

<h3 id="list-applicants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Applicants|[GetApplicantsResponse](#schemagetapplicantsresponse)|
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

## Create applicant

<a id="opIdapplicantsAdd"></a>

> Code samples

```bash
curl https://example.com/ats/applicants \
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
    "anonymized": true,
    "applications": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "archived": false,
    "birthday": "2000-08-12",
    "confidential": false,
    "coordinator_id": "12345",
    "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
    "custom_fields": [
      {
        "description": "Employee Level",
        "id": "2389328923893298",
        "name": "employee_level",
        "value": "Uses Salesforce and Marketo"
      }
    ],
    "deleted": true,
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "followers": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "headline": "PepsiCo, Inc, Central Perk",
    "initials": "EM",
    "last_name": "Musk",
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
    "position_id": "123",
    "record_url": "https://app.intercom.io/contacts/12345",
    "recruiter_id": "12345",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "sources": [
      "Job site"
    ],
    "stage_id": "12345",
    "tags": [
      "New"
    ],
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

`POST /ats/applicants`

Create applicant

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
  "anonymized": true,
  "applications": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "archived": false,
  "birthday": "2000-08-12",
  "confidential": false,
  "coordinator_id": "12345",
  "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
  "custom_fields": [
    {
      "description": "Employee Level",
      "id": "2389328923893298",
      "name": "employee_level",
      "value": "Uses Salesforce and Marketo"
    }
  ],
  "deleted": true,
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "followers": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "headline": "PepsiCo, Inc, Central Perk",
  "initials": "EM",
  "last_name": "Musk",
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
  "position_id": "123",
  "record_url": "https://app.intercom.io/contacts/12345",
  "recruiter_id": "12345",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "sources": [
    "Job site"
  ],
  "stage_id": "12345",
  "tags": [
    "New"
  ],
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

<h3 id="create-applicant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw|query|boolean|false|Include raw response. Mostly used for debugging purposes|
|x-apideck-consumer-id|header|string|true|ID of the consumer which you want to get or push data from|
|x-apideck-app-id|header|string|true|The ID of your Unify application|
|x-apideck-service-id|header|string|false|Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.|
|body|body|[Applicant](#schemaapplicant)|true|none|
|» addresses|body|[[Address](#schemaaddress)]|false|none|
|» anonymized|body|[Anonymized](#schemaanonymized)|false|none|
|» applications|body|[string]|false|none|
|» archived|body|[Archived](#schemaarchived)|false|none|
|» birthday|body|string(date) \| null|false|The date of birth of the person.|
|» confidential|body|boolean|false|none|
|» coordinator_id|body|string|false|none|
|» cover_letter|body|string|false|none|
|» custom_fields|body|[[CustomField](#schemacustomfield)]|false|none|
|» deleted|body|[Deleted](#schemadeleted)|false|none|
|» emails|body|[[Email](#schemaemail)]|false|none|
|» first_name|body|string \| null|false|The first name of the person.|
|» followers|body|[string]|false|none|
|» headline|body|string|false|Typically a list of previous companies where the contact has worked or schools that the contact has attended|
|» initials|body|[Initials](#schemainitials)|false|The initials of the person, usually derived from their first, middle, and last names.|
|» last_name|body|string \| null|false|The last name of the person.|
|» middle_name|body|string \| null|false|Middle name of the person.|
|» name|body|string|false|The name of an applicant.|
|» owner_id|body|[OwnerId](#schemaownerid)|false|none|
|» phone_numbers|body|[[PhoneNumber](#schemaphonenumber)]|false|none|
|» photo_url|body|string \| null|false|The URL of the photo of a person.|
|» position_id|body|string|false|The PositionId the applicant applied for.|
|» record_url|body|[RecordUrl](#schemarecordurl)|false|none|
|» recruiter_id|body|string|false|none|
|» social_links|body|[object]|false|none|
|» » id|body|string \| null|false|none|
|» » type|body|string \| null|false|none|
|» » url|body|string|true|none|
|» sources|body|[string]|false|none|
|» stage_id|body|string|false|none|
|» tags|body|[Tags](#schematags)|false|none|
|» title|body|[Title](#schematitle)|false|The job title of the person.|
|» websites|body|[object]|false|none|
|» » id|body|string \| null|false|none|
|» » type|body|string|false|none|
|» » url|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|primary|
|» » type|secondary|
|» » type|work|
|» » type|personal|
|» » type|other|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Applicants",
  "service": "lever",
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

<h3 id="create-applicant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Applicants|[CreateApplicantResponse](#schemacreateapplicantresponse)|
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

## Get applicant

<a id="opIdapplicantsOne"></a>

> Code samples

```bash
curl https://example.com/ats/applicants/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ats/applicants/{id}`

Get applicant

<h3 id="get-applicant-parameters">Parameters</h3>

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
    "anonymized": true,
    "applications": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "archived": false,
    "birthday": "2000-08-12",
    "confidential": false,
    "coordinator_id": "12345",
    "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
    "cv_url": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
    "deleted": true,
    "deleted_at": "2020-09-30T07:43:32.000Z",
    "deleted_by": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "followers": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "headline": "PepsiCo, Inc, Central Perk",
    "id": "12345",
    "initials": "EM",
    "job_url": "https://democompany.recruitee.com/o/example-talent-pool",
    "last_interaction_at": "2020-09-30T07:43:32.000Z",
    "last_name": "Musk",
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
    "position_id": "123",
    "record_url": "https://app.intercom.io/contacts/12345",
    "recruiter_id": "12345",
    "rejected_at": "2020-09-30T07:43:32.000Z",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "source_id": "12345",
    "sourced_by": "12345",
    "sources": [
      "Job site"
    ],
    "stage_id": "12345",
    "tags": [
      "New"
    ],
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
  "resource": "Applicants",
  "service": "lever",
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

<h3 id="get-applicant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Applicants|[GetApplicantResponse](#schemagetapplicantresponse)|
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

<h1 id="ats-api-jobs">Jobs</h1>

## List Jobs

<a id="opIdjobsAll"></a>

> Code samples

```bash
curl https://example.com/ats/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ats/jobs`

List Jobs

<h3 id="list-jobs-parameters">Parameters</h3>

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
      "available_to_employees": false,
      "blocks": [
        {
          "content": "string",
          "title": "string"
        }
      ],
      "branch": {
        "id": "123",
        "name": "HQ NY"
      },
      "closing": "The closing section of the job description",
      "closing_date": "2020-10-30",
      "closing_html": "string",
      "code": "123-OC",
      "confidential": false,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "department": {
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
      "description": "A description",
      "description_html": "string",
      "employment_terms": "full-time",
      "experience": "Director/ Vice President",
      "followers": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "hiring_managers": [
        "123456"
      ],
      "id": "12345",
      "job_portal_url": "string",
      "language": "EN",
      "owner_id": "54321",
      "published_at": "2020-09-30T07:43:32.000Z",
      "record_url": "https://app.intercom.io/contacts/12345",
      "recruiters": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4"
      ],
      "remote": true,
      "requisition_id": "abc123",
      "salary": {
        "currency": "USD",
        "max": 10000,
        "min": 8000
      },
      "sequence": 3,
      "slug": "ceo",
      "status": "completed",
      "tags": [
        "New"
      ],
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "url": "string",
      "visibility": "internal"
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
  "resource": "Jobs",
  "service": "lever",
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
|200|OK|Jobs|[GetJobsResponse](#schemagetjobsresponse)|
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

## Get Job

<a id="opIdjobsOne"></a>

> Code samples

```bash
curl https://example.com/ats/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-apideck-consumer-id: string' \
  -H 'x-apideck-app-id: dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX'
```

`GET /ats/jobs/{id}`

Get Job

<h3 id="get-job-parameters">Parameters</h3>

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
    "available_to_employees": false,
    "blocks": [
      {
        "content": "string",
        "title": "string"
      }
    ],
    "branch": {
      "id": "123",
      "name": "HQ NY"
    },
    "closing": "The closing section of the job description",
    "closing_date": "2020-10-30",
    "closing_html": "string",
    "code": "123-OC",
    "confidential": false,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "department": {
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
    "description": "A description",
    "description_html": "string",
    "employment_terms": "full-time",
    "experience": "Director/ Vice President",
    "followers": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "hiring_managers": [
      "123456"
    ],
    "id": "12345",
    "job_portal_url": "string",
    "language": "EN",
    "owner_id": "54321",
    "published_at": "2020-09-30T07:43:32.000Z",
    "record_url": "https://app.intercom.io/contacts/12345",
    "recruiters": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4"
    ],
    "remote": true,
    "requisition_id": "abc123",
    "salary": {
      "currency": "USD",
      "max": 10000,
      "min": 8000
    },
    "sequence": 3,
    "slug": "ceo",
    "status": "completed",
    "tags": [
      "New"
    ],
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "url": "string",
    "visibility": "internal"
  },
  "operation": "one",
  "resource": "Jobs",
  "service": "lever",
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

<h3 id="get-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jobs|[GetJobResponse](#schemagetjobresponse)|
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

<h2 id="tocS_Anonymized">Anonymized</h2>
<!-- backwards compatibility -->
<a id="schemaanonymized"></a>
<a id="schema_Anonymized"></a>
<a id="tocSanonymized"></a>
<a id="tocsanonymized"></a>

```json
true
```

<h2 id="tocS_Applicant">Applicant</h2>
<!-- backwards compatibility -->
<a id="schemaapplicant"></a>
<a id="schema_Applicant"></a>
<a id="tocSapplicant"></a>
<a id="tocsapplicant"></a>

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
  "anonymized": true,
  "applications": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "archived": false,
  "birthday": "2000-08-12",
  "confidential": false,
  "coordinator_id": "12345",
  "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
  "cv_url": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
  "deleted": true,
  "deleted_at": "2020-09-30T07:43:32.000Z",
  "deleted_by": "12345",
  "emails": [
    {
      "email": "elon@musk.com",
      "id": "123",
      "type": "primary"
    }
  ],
  "first_name": "Elon",
  "followers": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "headline": "PepsiCo, Inc, Central Perk",
  "id": "12345",
  "initials": "EM",
  "job_url": "https://democompany.recruitee.com/o/example-talent-pool",
  "last_interaction_at": "2020-09-30T07:43:32.000Z",
  "last_name": "Musk",
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
  "position_id": "123",
  "record_url": "https://app.intercom.io/contacts/12345",
  "recruiter_id": "12345",
  "rejected_at": "2020-09-30T07:43:32.000Z",
  "social_links": [
    {
      "id": "12345",
      "type": "twitter",
      "url": "https://www.twitter.com/apideck-io"
    }
  ],
  "source_id": "12345",
  "sourced_by": "12345",
  "sources": [
    "Job site"
  ],
  "stage_id": "12345",
  "tags": [
    "New"
  ],
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
|addresses|[[Address](#schemaaddress)]|false|none|none|
|anonymized|[Anonymized](#schemaanonymized)|false|none|none|
|applications|[string]|false|none|none|
|archived|[Archived](#schemaarchived)|false|none|none|
|birthday|string(date) \| null|false|none|The date of birth of the person.|
|confidential|boolean|false|none|none|
|coordinator_id|string|false|none|none|
|cover_letter|string|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|custom_fields|[[CustomField](#schemacustomfield)]|false|none|none|
|cv_url|string|false|read-only|none|
|deleted|[Deleted](#schemadeleted)|false|none|none|
|deleted_at|[DeletedAt](#schemadeletedat)|false|read-only|The time at which the object was deleted.|
|deleted_by|[DeletedBy](#schemadeletedby)|false|read-only|The user who deleted the object.|
|emails|[[Email](#schemaemail)]|false|none|none|
|first_name|string \| null|false|none|The first name of the person.|
|followers|[string]|false|none|none|
|headline|string|false|none|Typically a list of previous companies where the contact has worked or schools that the contact has attended|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|initials|[Initials](#schemainitials)|false|none|The initials of the person, usually derived from their first, middle, and last names.|
|job_url|string \| null|false|read-only|none|
|last_interaction_at|[LastInteractionAt](#schemalastinteractionat)|false|read-only|none|
|last_name|string \| null|false|none|The last name of the person.|
|middle_name|string \| null|false|none|Middle name of the person.|
|name|string|false|none|The name of an applicant.|
|owner_id|[OwnerId](#schemaownerid)|false|none|none|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|none|
|photo_url|string \| null|false|none|The URL of the photo of a person.|
|position_id|string|false|none|The PositionId the applicant applied for.|
|record_url|[RecordUrl](#schemarecordurl)|false|none|none|
|recruiter_id|string|false|none|none|
|rejected_at|string(date-time) \| null|false|read-only|none|
|social_links|[object]|false|none|none|
|source_id|string|false|read-only|none|
|sourced_by|string \| null|false|read-only|none|
|sources|[string]|false|none|none|
|stage_id|string|false|none|none|
|tags|[Tags](#schematags)|false|none|none|
|title|[Title](#schematitle)|false|none|The job title of the person.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|websites|[object]|false|none|none|

<h2 id="tocS_ApplicantsFilter">ApplicantsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapplicantsfilter"></a>
<a id="schema_ApplicantsFilter"></a>
<a id="tocSapplicantsfilter"></a>
<a id="tocsapplicantsfilter"></a>

```json
{
  "job_id": "1234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|false|none|Id of the job to filter on|

<h2 id="tocS_Archived">Archived</h2>
<!-- backwards compatibility -->
<a id="schemaarchived"></a>
<a id="schema_Archived"></a>
<a id="tocSarchived"></a>
<a id="tocsarchived"></a>

```json
false
```

<h2 id="tocS_AtsActivity">AtsActivity</h2>
<!-- backwards compatibility -->
<a id="schemaatsactivity"></a>
<a id="schema_AtsActivity"></a>
<a id="tocSatsactivity"></a>
<a id="tocsatsactivity"></a>

```json
{
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "id": "12345",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

<h2 id="tocS_AtsEventType">AtsEventType</h2>
<!-- backwards compatibility -->
<a id="schemaatseventtype"></a>
<a id="schema_AtsEventType"></a>
<a id="tocSatseventtype"></a>
<a id="tocsatseventtype"></a>

```json
"ats.job.created"
```

<h2 id="tocS_AtsWebhookEvent">AtsWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemaatswebhookevent"></a>
<a id="schema_AtsWebhookEvent"></a>
<a id="tocSatswebhookevent"></a>
<a id="tocsatswebhookevent"></a>

```json
{
  "entity_id": "123456ASDF",
  "entity_type": "Company",
  "entity_url": "https://unify.apideck.com/crm/contacts/123456",
  "event_id": "9755c355-56c3-4a2f-a2da-86ff4411fccb",
  "execution_attempt": 2,
  "occurred_at": "2021-10-01T03:14:55.419Z",
  "service_id": "close",
  "event_type": "ats.job.created"
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
|event_type|[AtsEventType](#schemaatseventtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|ats.job.created|
|event_type|ats.job.updated|
|event_type|ats.job.deleted|
|event_type|ats.applicant.created|
|event_type|ats.applicant.updated|
|event_type|ats.applicant.deleted|

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

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"123-OC"
```

The code of the job.

<h2 id="tocS_CreateApplicantResponse">CreateApplicantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicantresponse"></a>
<a id="schema_CreateApplicantResponse"></a>
<a id="tocScreateapplicantresponse"></a>
<a id="tocscreateapplicantresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Applicants",
  "service": "lever",
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

<h2 id="tocS_CreateJobResponse">CreateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresponse"></a>
<a id="schema_CreateJobResponse"></a>
<a id="tocScreatejobresponse"></a>
<a id="tocscreatejobresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "add",
  "resource": "Jobs",
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

<h2 id="tocS_DeleteJobResponse">DeleteJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobresponse"></a>
<a id="schema_DeleteJobResponse"></a>
<a id="tocSdeletejobresponse"></a>
<a id="tocsdeletejobresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "delete",
  "resource": "Jobs",
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

<h2 id="tocS_Deleted">Deleted</h2>
<!-- backwards compatibility -->
<a id="schemadeleted"></a>
<a id="schema_Deleted"></a>
<a id="tocSdeleted"></a>
<a id="tocsdeleted"></a>

```json
true
```

<h2 id="tocS_DeletedAt">DeletedAt</h2>
<!-- backwards compatibility -->
<a id="schemadeletedat"></a>
<a id="schema_DeletedAt"></a>
<a id="tocSdeletedat"></a>
<a id="tocsdeletedat"></a>

```json
"2020-09-30T07:43:32.000Z"
```

The time at which the object was deleted.

<h2 id="tocS_DeletedBy">DeletedBy</h2>
<!-- backwards compatibility -->
<a id="schemadeletedby"></a>
<a id="schema_DeletedBy"></a>
<a id="tocSdeletedby"></a>
<a id="tocsdeletedby"></a>

```json
"12345"
```

The user who deleted the object.

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

<h2 id="tocS_GetApplicantResponse">GetApplicantResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicantresponse"></a>
<a id="schema_GetApplicantResponse"></a>
<a id="tocSgetapplicantresponse"></a>
<a id="tocsgetapplicantresponse"></a>

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
    "anonymized": true,
    "applications": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "archived": false,
    "birthday": "2000-08-12",
    "confidential": false,
    "coordinator_id": "12345",
    "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
    "cv_url": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
    "deleted": true,
    "deleted_at": "2020-09-30T07:43:32.000Z",
    "deleted_by": "12345",
    "emails": [
      {
        "email": "elon@musk.com",
        "id": "123",
        "type": "primary"
      }
    ],
    "first_name": "Elon",
    "followers": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "headline": "PepsiCo, Inc, Central Perk",
    "id": "12345",
    "initials": "EM",
    "job_url": "https://democompany.recruitee.com/o/example-talent-pool",
    "last_interaction_at": "2020-09-30T07:43:32.000Z",
    "last_name": "Musk",
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
    "position_id": "123",
    "record_url": "https://app.intercom.io/contacts/12345",
    "recruiter_id": "12345",
    "rejected_at": "2020-09-30T07:43:32.000Z",
    "social_links": [
      {
        "id": "12345",
        "type": "twitter",
        "url": "https://www.twitter.com/apideck-io"
      }
    ],
    "source_id": "12345",
    "sourced_by": "12345",
    "sources": [
      "Job site"
    ],
    "stage_id": "12345",
    "tags": [
      "New"
    ],
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
  "resource": "Applicants",
  "service": "lever",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Applicant](#schemaapplicant)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetApplicantsResponse">GetApplicantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicantsresponse"></a>
<a id="schema_GetApplicantsResponse"></a>
<a id="tocSgetapplicantsresponse"></a>
<a id="tocsgetapplicantsresponse"></a>

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
      "anonymized": true,
      "applications": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "archived": false,
      "birthday": "2000-08-12",
      "confidential": false,
      "coordinator_id": "12345",
      "cover_letter": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
      "cv_url": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
      "deleted": true,
      "deleted_at": "2020-09-30T07:43:32.000Z",
      "deleted_by": "12345",
      "emails": [
        {
          "email": "elon@musk.com",
          "id": "123",
          "type": "primary"
        }
      ],
      "first_name": "Elon",
      "followers": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "headline": "PepsiCo, Inc, Central Perk",
      "id": "12345",
      "initials": "EM",
      "job_url": "https://democompany.recruitee.com/o/example-talent-pool",
      "last_interaction_at": "2020-09-30T07:43:32.000Z",
      "last_name": "Musk",
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
      "position_id": "123",
      "record_url": "https://app.intercom.io/contacts/12345",
      "recruiter_id": "12345",
      "rejected_at": "2020-09-30T07:43:32.000Z",
      "social_links": [
        {
          "id": "12345",
          "type": "twitter",
          "url": "https://www.twitter.com/apideck-io"
        }
      ],
      "source_id": "12345",
      "sourced_by": "12345",
      "sources": [
        "Job site"
      ],
      "stage_id": "12345",
      "tags": [
        "New"
      ],
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
  "resource": "Applicants",
  "service": "lever",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Applicant](#schemaapplicant)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetJobResponse">GetJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresponse"></a>
<a id="schema_GetJobResponse"></a>
<a id="tocSgetjobresponse"></a>
<a id="tocsgetjobresponse"></a>

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
    "available_to_employees": false,
    "blocks": [
      {
        "content": "string",
        "title": "string"
      }
    ],
    "branch": {
      "id": "123",
      "name": "HQ NY"
    },
    "closing": "The closing section of the job description",
    "closing_date": "2020-10-30",
    "closing_html": "string",
    "code": "123-OC",
    "confidential": false,
    "created_at": "2020-09-30T07:43:32.000Z",
    "created_by": "12345",
    "deleted": true,
    "department": {
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
    "description": "A description",
    "description_html": "string",
    "employment_terms": "full-time",
    "experience": "Director/ Vice President",
    "followers": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6"
    ],
    "hiring_managers": [
      "123456"
    ],
    "id": "12345",
    "job_portal_url": "string",
    "language": "EN",
    "owner_id": "54321",
    "published_at": "2020-09-30T07:43:32.000Z",
    "record_url": "https://app.intercom.io/contacts/12345",
    "recruiters": [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4"
    ],
    "remote": true,
    "requisition_id": "abc123",
    "salary": {
      "currency": "USD",
      "max": 10000,
      "min": 8000
    },
    "sequence": 3,
    "slug": "ceo",
    "status": "completed",
    "tags": [
      "New"
    ],
    "title": "CEO",
    "updated_at": "2020-09-30T07:43:32.000Z",
    "updated_by": "12345",
    "url": "string",
    "visibility": "internal"
  },
  "operation": "one",
  "resource": "Jobs",
  "service": "lever",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Job](#schemajob)|true|none|none|
|operation|string|true|none|Operation performed|
|resource|string|true|none|Unified API resource name|
|service|string|true|none|Apideck ID of service provider|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetJobsResponse">GetJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjobsresponse"></a>
<a id="schema_GetJobsResponse"></a>
<a id="tocSgetjobsresponse"></a>
<a id="tocsgetjobsresponse"></a>

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
      "available_to_employees": false,
      "blocks": [
        {
          "content": "string",
          "title": "string"
        }
      ],
      "branch": {
        "id": "123",
        "name": "HQ NY"
      },
      "closing": "The closing section of the job description",
      "closing_date": "2020-10-30",
      "closing_html": "string",
      "code": "123-OC",
      "confidential": false,
      "created_at": "2020-09-30T07:43:32.000Z",
      "created_by": "12345",
      "deleted": true,
      "department": {
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
      "description": "A description",
      "description_html": "string",
      "employment_terms": "full-time",
      "experience": "Director/ Vice President",
      "followers": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4",
        "a98lfd96-43b3-4bde-8c70-85b707d992e6"
      ],
      "hiring_managers": [
        "123456"
      ],
      "id": "12345",
      "job_portal_url": "string",
      "language": "EN",
      "owner_id": "54321",
      "published_at": "2020-09-30T07:43:32.000Z",
      "record_url": "https://app.intercom.io/contacts/12345",
      "recruiters": [
        "a0d636c6-43b3-4bde-8c70-85b707d992f4"
      ],
      "remote": true,
      "requisition_id": "abc123",
      "salary": {
        "currency": "USD",
        "max": 10000,
        "min": 8000
      },
      "sequence": 3,
      "slug": "ceo",
      "status": "completed",
      "tags": [
        "New"
      ],
      "title": "CEO",
      "updated_at": "2020-09-30T07:43:32.000Z",
      "updated_by": "12345",
      "url": "string",
      "visibility": "internal"
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
  "resource": "Jobs",
  "service": "lever",
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Job](#schemajob)]|true|none|none|
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

<h2 id="tocS_Initials">Initials</h2>
<!-- backwards compatibility -->
<a id="schemainitials"></a>
<a id="schema_Initials"></a>
<a id="tocSinitials"></a>
<a id="tocsinitials"></a>

```json
"EM"
```

The initials of the person, usually derived from their first, middle, and last names.

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

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
  "available_to_employees": false,
  "blocks": [
    {
      "content": "string",
      "title": "string"
    }
  ],
  "branch": {
    "id": "123",
    "name": "HQ NY"
  },
  "closing": "The closing section of the job description",
  "closing_date": "2020-10-30",
  "closing_html": "string",
  "code": "123-OC",
  "confidential": false,
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "deleted": true,
  "department": {
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
  "description": "A description",
  "description_html": "string",
  "employment_terms": "full-time",
  "experience": "Director/ Vice President",
  "followers": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    "a98lfd96-43b3-4bde-8c70-85b707d992e6"
  ],
  "hiring_managers": [
    "123456"
  ],
  "id": "12345",
  "job_portal_url": "string",
  "language": "EN",
  "owner_id": "54321",
  "published_at": "2020-09-30T07:43:32.000Z",
  "record_url": "https://app.intercom.io/contacts/12345",
  "recruiters": [
    "a0d636c6-43b3-4bde-8c70-85b707d992f4"
  ],
  "remote": true,
  "requisition_id": "abc123",
  "salary": {
    "currency": "USD",
    "max": 10000,
    "min": 8000
  },
  "sequence": 3,
  "slug": "ceo",
  "status": "completed",
  "tags": [
    "New"
  ],
  "title": "CEO",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345",
  "url": "string",
  "visibility": "internal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|false|none|none|
|available_to_employees|boolean|false|none|Specifies whether an employee of the organization can apply for the job.|
|blocks|[object]|false|none|none|
|branch|object|false|none|Details of the branch for which the job is created.|
|closing|string \| null|false|none|none|
|closing_date|string(date) \| null|false|none|none|
|closing_html|string \| null|false|none|The closing section of the job description in HTML format|
|code|[Code](#schemacode)|false|none|The code of the job.|
|confidential|boolean|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|deleted|[Deleted](#schemadeleted)|false|none|none|
|department|[Department](#schemadepartment)|false|none|none|
|description|[Description](#schemadescription)|false|none|A description of the object.|
|description_html|string \| null|false|none|The job description in HTML format|
|employment_terms|string \| null|false|none|none|
|experience|string|false|none|Level of experience required for the job role.|
|followers|[string]|false|none|none|
|hiring_managers|[object]|false|none|none|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|job_portal_url|string \| null|false|none|URL of the job portal|
|language|[Language](#schemalanguage)|false|none|language code according to ISO 639-1. For the United States - EN|
|owner_id|[OwnerId](#schemaownerid)|false|none|none|
|published_at|[PublishedAt](#schemapublishedat)|false|read-only|none|
|record_url|[RecordUrl](#schemarecordurl)|false|none|none|
|recruiters|[string]|false|none|The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant|
|remote|boolean \| null|false|none|Specifies whether the posting is for a remote job.|
|requisition_id|string|false|none|A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.|
|salary|object|false|none|none|
|sequence|integer|false|none|Sequence in relation to other jobs.|
|slug|string \| null|false|none|none|
|status|[JobStatus](#schemajobstatus)|false|none|The status of the job.|
|tags|[Tags](#schematags)|false|none|none|
|title|[Title](#schematitle)|false|none|The job title of the person.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|
|url|string \| null|false|none|URL of the job description|
|visibility|string|false|none|The visibility of the job|

#### Enumerated Values

|Property|Value|
|---|---|
|employment_terms|full-time|
|employment_terms|part-time|
|employment_terms|internship|
|employment_terms|contractor|
|employment_terms|employee|
|employment_terms|freelance|
|employment_terms|temp|
|employment_terms|seasonal|
|employment_terms|volunteer|
|employment_terms|other|
|status|draft|
|status|internal|
|status|published|
|status|completed|
|status|on-hold|
|status|private|
|visibility|public|
|visibility|internal|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"completed"
```

The status of the job.

<h2 id="tocS_JobsFilter">JobsFilter</h2>
<!-- backwards compatibility -->
<a id="schemajobsfilter"></a>
<a id="schema_JobsFilter"></a>
<a id="tocSjobsfilter"></a>
<a id="tocsjobsfilter"></a>

```json
{
  "job_id": "1234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|false|none|Id of the job to filter on|

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

<h2 id="tocS_LastInteractionAt">LastInteractionAt</h2>
<!-- backwards compatibility -->
<a id="schemalastinteractionat"></a>
<a id="schema_LastInteractionAt"></a>
<a id="tocSlastinteractionat"></a>
<a id="tocslastinteractionat"></a>

```json
"2020-09-30T07:43:32.000Z"
```

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

<h2 id="tocS_Offer">Offer</h2>
<!-- backwards compatibility -->
<a id="schemaoffer"></a>
<a id="schema_Offer"></a>
<a id="tocSoffer"></a>
<a id="tocsoffer"></a>

```json
{
  "application_id": "abc123",
  "created_at": "2020-09-30T07:43:32.000Z",
  "created_by": "12345",
  "id": "12345",
  "updated_at": "2020-09-30T07:43:32.000Z",
  "updated_by": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_id|string|false|none|none|
|created_at|[CreatedAt](#schemacreatedat)|false|read-only|The date and time when the object was created.|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|The user who created the object.|
|id|[Id](#schemaid)|false|read-only|A unique identifier for an object.|
|updated_at|[UpdatedAt](#schemaupdatedat)|false|read-only|The date and time when the object was last updated.|
|updated_by|[UpdatedBy](#schemaupdatedby)|false|read-only|The user who last updated the object.|

<h2 id="tocS_OwnerId">OwnerId</h2>
<!-- backwards compatibility -->
<a id="schemaownerid"></a>
<a id="schema_OwnerId"></a>
<a id="tocSownerid"></a>
<a id="tocsownerid"></a>

```json
"54321"
```

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

<h2 id="tocS_PublishedAt">PublishedAt</h2>
<!-- backwards compatibility -->
<a id="schemapublishedat"></a>
<a id="schema_PublishedAt"></a>
<a id="tocSpublishedat"></a>
<a id="tocspublishedat"></a>

```json
"2020-09-30T07:43:32.000Z"
```

<h2 id="tocS_RecordUrl">RecordUrl</h2>
<!-- backwards compatibility -->
<a id="schemarecordurl"></a>
<a id="schema_RecordUrl"></a>
<a id="tocSrecordurl"></a>
<a id="tocsrecordurl"></a>

```json
"https://app.intercom.io/contacts/12345"
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

<h2 id="tocS_UpdateJobResponse">UpdateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobresponse"></a>
<a id="schema_UpdateJobResponse"></a>
<a id="tocSupdatejobresponse"></a>
<a id="tocsupdatejobresponse"></a>

```json
{
  "data": {
    "id": "12345"
  },
  "operation": "update",
  "resource": "Jobs",
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

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"https://downstreamconnector.com/job?id=123"
```

The url pointing to the job.
