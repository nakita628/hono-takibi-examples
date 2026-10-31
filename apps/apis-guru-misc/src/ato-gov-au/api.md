<h1 id="business-registries">Business Registries v0.0.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
The Business Registries API is built on HTTP. The API is RESTful. It has predictable resource URIs.

  The API is documented in <a target="_blank" href="https://github.com/OAI/OpenAPI-Specification">OpenAPI</a> format.
  In addition to the standard OpenAPI syntax we use a few
  <a target="_blank" href="https://github.com/Rebilly/ReDoc/blob/master/docs/redoc-vendor-extensions.md">vendor extensions</a>.

# Overview
The following sections describe the resources that make up the Business Registries REST API.
## Current Version
By default, all requests to https://api.abr.ato.gov.au receive the `v1` version of the REST API. We encourage you to explicitly request this version via the `Accept` header.

    Accept: application/vnd.abr-ato.v1+json

## Schema
All API access is over HTTPS, and accessed from https://api.abr.ato.gov.au. All data is sent and received as JSON. Blank fields are included.

  All dates use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DD

  For example: `2017-07-01` (the 1st of July 2017)

  All timestamps use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DDTHH:MM:SSZ

  For example: `2017-07-01T11:05:06+10:00`

## Timezones
Some requests allow for specifying timestamps or generate timestamps with time zone information. We apply the following rules, in order of priority, to determine timezone information for API calls.
### Explicitly provide an ISO 8601 timestamp with timezone information
For API calls that allow for a timestamp to be specified, we use that exact timestamp.

  For example: `2017-07-01T11:05:06+10:00`

## Pagination
Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.

  For example:

    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",
          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"

`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.
## Parameters
Many API methods take optional parameters:

    GET /individuals/1234/addresses/?addressType='Mailing'

In this example, the '1234' value is provided for the `:partyId` parameter in the path while `:addressType` is passed in the query string.
For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json'.
## Metadata
The API provides **metadata services** that you can use to discover information about the classifcation schemes and values used by the Registry.

  For example:

    GET /classifications/roles

  Sample response:

    [
      {
        "id": "123e4567-e89b-12d3-a456-426655440001",
        "role": "Director",
        "roleDescription": "An individual responsible for managing a company's ...",
        "relationship": "Directorship",
        "reciprocalRole": "Company",
        "reciprocalRoleDescription": "An incorporated legal entity."
      },
      {
        ...
      }
    ]

## Root Endpoint
You can issue a GET request to the root endpoint (also known as the service root) to get all the endpoint categories that the REST API supports:

    curl https://api.abr.ato.gov.au

## Authentication
The Business Registries API supports API Key authentication.

  When you sign up for an account, you are given your first API key. You can generate additional API keys, and delete
  API keys (as you may need to rotate your keys in the future). You authenticate to the Business Registries API by
  providing your secret key in the request header.

  **Note:** Some requests will return `404 Not Found`, instead of `403 Permission Denied`. This is to prevent the
  accidental leakage of information to unauthorised users.

Base URLs:

* <a href="https://api.apis.guru//api.abr.ato.gov.au/">https://api.apis.guru//api.abr.ato.gov.au/</a> - Production API Server

* <a href="https://api.apis.guru//api.sandbox.abr.ato.gov.au/">https://api.apis.guru//api.sandbox.abr.ato.gov.au/</a> - Sandbox API Server

<a href="https://ato.gov.au/terms-of-service/">Terms of service</a>
License: <a href="https://creativecommons.org/licenses/by/3.0/au/">Creative Commons Attribution 3.0 Australia</a>

<h1 id="business-registries-individuals">Individuals</h1>

An individual is a person about whom the registry wishes to maintain information.

  For example, the individual's date and place of birth (for the purposes of identification) and the individual's
  residential address (which is used for administrative purposes).


## Retrieve a list of individuals

> Code samples

```bash
curl https://example.com/individuals \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals`

Retrieve a list of individuals


<h3 id="retrieve-a-list-of-individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|dateOfBirth|query|string|false|The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|placeOfBirth|query|string|false|The individual's place of birth, for example, `Tamworth`.|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "fromDate": "1979-01-13T09:05:06+10:00",
        "id": {},
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "toDate": "",
        "addressType": "Principal Place of Residence"
      }
    ],
    "dateOfBirth": "1979-01-13",
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "fromDate": "1979-01-13T09:05:06+10:00",
        "id": {},
        "number": "62164453",
        "toDate": "",
        "url": ""
      }
    ],
    "fromDate": "1979-01-13T09:05:06+10:00",
    "gender": "Male",
    "id": {},
    "names": [
      {
        "direction": "left-to-right",
        "familyName": "Ferguson",
        "formalSalutation": "Mr Robert Ferguson",
        "fromDate": "1979-01-13T09:05:06+10:00",
        "givenName": "Robert",
        "id": {},
        "informalSalutation": "Rob",
        "middleName": "James",
        "namePrefix": "Mr",
        "nameSuffix": "",
        "nameType": "Principal Name",
        "toDate": ""
      }
    ],
    "placeOfBirth": "Tamworth",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of individuals was retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-individuals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[individual](#schemaindividual)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an individual

> Code samples

```bash
curl https://example.com/individuals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "addressType": "Principal Place of Residence"
      }
    ],
    "dateOfBirth": "1979-01-13",
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "number": "62164453",
        "url": ""
      }
    ],
    "gender": "Male",
    "names": [
      {
        "direction": "left-to-right",
        "familyName": "Ferguson",
        "formalSalutation": "Mr Robert Ferguson",
        "givenName": "Robert",
        "informalSalutation": "Rob",
        "middleName": "James",
        "namePrefix": "Mr",
        "nameSuffix": "",
        "nameType": "Principal Name"
      }
    ],
    "placeOfBirth": "Tamworth"
  }'
```

`POST /individuals`

Create an individual


> Body parameter

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "number": "62164453",
      "url": ""
    }
  ],
  "gender": "Male",
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "givenName": "Robert",
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name"
    }
  ],
  "placeOfBirth": "Tamworth"
}
```

<h3 id="create-an-individual-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|body|body|[individual](#schemaindividual)|true|Individual resource|
|» addresses|body|[[individual-address](#schemaindividual-address)]|false|none|
|» dateOfBirth|body|string(date)|true|The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|» electronicAddresses|body|[[electronic-address](#schemaelectronic-address)]|false|none|
|» gender|body|string|false|The individual's gender.|
|» names|body|[[individual-name](#schemaindividual-name)]|false|none|
|» placeOfBirth|body|string|true|The individual's place of birth, for example, `Tamworth`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|Female|
|» gender|Male|
|» gender|Not Applicable|
|» gender|Not Known|

> Example responses

> 201 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "fromDate": "1979-01-13T09:05:06+10:00",
  "gender": "Male",
  "id": {},
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "givenName": "Robert",
      "id": {},
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name",
      "toDate": ""
    }
  ],
  "placeOfBirth": "Tamworth",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-individual-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Individual was created|[individual](#schemaindividual)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an individual

> Code samples

```bash
curl https://example.com/individuals/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}`

Retrieve an individual with the specified identifier


<h3 id="retrieve-an-individual-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "fromDate": "1979-01-13T09:05:06+10:00",
  "gender": "Male",
  "id": {},
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "givenName": "Robert",
      "id": {},
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name",
      "toDate": ""
    }
  ],
  "placeOfBirth": "Tamworth",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-individual-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Individual was retrieved successfully|[individual](#schemaindividual)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an individual

> Code samples

```bash
curl https://example.com/individuals/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "addressType": "Principal Place of Residence"
      }
    ],
    "dateOfBirth": "1979-01-13",
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "number": "62164453",
        "url": ""
      }
    ],
    "gender": "Male",
    "names": [
      {
        "direction": "left-to-right",
        "familyName": "Ferguson",
        "formalSalutation": "Mr Robert Ferguson",
        "givenName": "Robert",
        "informalSalutation": "Rob",
        "middleName": "James",
        "namePrefix": "Mr",
        "nameSuffix": "",
        "nameType": "Principal Name"
      }
    ],
    "placeOfBirth": "Tamworth"
  }'
```

`PUT /individuals/{partyId}`

Update an individual


> Body parameter

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "number": "62164453",
      "url": ""
    }
  ],
  "gender": "Male",
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "givenName": "Robert",
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name"
    }
  ],
  "placeOfBirth": "Tamworth"
}
```

<h3 id="update-an-individual-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[individual](#schemaindividual)|true|Individual resource|
|» addresses|body|[[individual-address](#schemaindividual-address)]|false|none|
|» dateOfBirth|body|string(date)|true|The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|» electronicAddresses|body|[[electronic-address](#schemaelectronic-address)]|false|none|
|» gender|body|string|false|The individual's gender.|
|» names|body|[[individual-name](#schemaindividual-name)]|false|none|
|» placeOfBirth|body|string|true|The individual's place of birth, for example, `Tamworth`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|Female|
|» gender|Male|
|» gender|Not Applicable|
|» gender|Not Known|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "fromDate": "1979-01-13T09:05:06+10:00",
  "gender": "Male",
  "id": {},
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "givenName": "Robert",
      "id": {},
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name",
      "toDate": ""
    }
  ],
  "placeOfBirth": "Tamworth",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-individual-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Individual was updated|[individual](#schemaindividual)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an individual

> Code samples

```bash
curl https://example.com/individuals/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}`

Delete an individual with the specified identifier


<h3 id="delete-an-individual-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "Request can not be executed in the current system state",
  "status": "FAILED_PRECONDITION"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-individual-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Individual was deleted|None|
|400|Bad Request|Request can not be executed in the current system state|[failed-precondition](#schemafailed-precondition)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-individuals-roles">Individuals Roles</h1>

A role defines the characteristics of a relationship between parties.
An Individual can participate in a relationship with other individuals and organisations.

For example:

| Party         | Role           | Relationship     | Role          | Party                           |
| ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
| Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
| Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
| Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
| Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
| Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
| Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
| Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
| Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
| Homer Simpson | Member         | Membership       | Association   | Mensa International             |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


## Retrieve a list of roles

> Code samples

```bash
curl https://example.com/individuals/string/roles \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/roles`

<h3 id="retrieve-a-list-of-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "2016-01-13T09:05:06+10:00",
    "id": {},
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Roles were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[party-role](#schemaparty-role)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a role

> Code samples

```bash
curl https://example.com/individuals/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment"
  }'
```

`POST /individuals/{partyId}/roles`

Create a role


> Body parameter

```json
{
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment"
}
```

<h3 id="create-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[party-role](#schemaparty-role)|true|Role resource|
|» partyRoleType|body|string|false|The party's role type.|
|» relatedPartyId|body|object|true|The related party's unique identifier.|
|» relatedPartyRoleType|body|string|false|The related party's role type.|
|» relationshipType|body|string|true|The relationship type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» partyRoleType|Director|
|» partyRoleType|Employee|
|» partyRoleType|Member|
|» partyRoleType|Partner|
|» partyRoleType|Trustee|
|» relatedPartyRoleType|Association|
|» relatedPartyRoleType|Company|
|» relatedPartyRoleType|Employer|
|» relatedPartyRoleType|Organisation|
|» relatedPartyRoleType|Partnership|
|» relatedPartyRoleType|Trust|
|» relationshipType|Directorship|
|» relationshipType|Employment|
|» relationshipType|Membership|
|» relationshipType|Partnership|
|» relationshipType|Trusteeship|

> Example responses

> 201 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Role was created|[party-role](#schemaparty-role)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a role

> Code samples

```bash
curl https://example.com/individuals/string/roles/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/roles/{roleId}`

Retrieve a role


<h3 id="retrieve-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role was retrieved successfully|[party-role](#schemaparty-role)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a role

> Code samples

```bash
curl https://example.com/individuals/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment"
  }'
```

`PUT /individuals/{partyId}/roles/{roleId}`

Update a role


> Body parameter

```json
{
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment"
}
```

<h3 id="update-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|
|body|body|[party-role](#schemaparty-role)|true|Role resource|
|» partyRoleType|body|string|false|The party's role type.|
|» relatedPartyId|body|object|true|The related party's unique identifier.|
|» relatedPartyRoleType|body|string|false|The related party's role type.|
|» relationshipType|body|string|true|The relationship type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» partyRoleType|Director|
|» partyRoleType|Employee|
|» partyRoleType|Member|
|» partyRoleType|Partner|
|» partyRoleType|Trustee|
|» relatedPartyRoleType|Association|
|» relatedPartyRoleType|Company|
|» relatedPartyRoleType|Employer|
|» relatedPartyRoleType|Organisation|
|» relatedPartyRoleType|Partnership|
|» relatedPartyRoleType|Trust|
|» relationshipType|Directorship|
|» relationshipType|Employment|
|» relationshipType|Membership|
|» relationshipType|Partnership|
|» relationshipType|Trusteeship|

> Example responses

> 200 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role was updated|[party-role](#schemaparty-role)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a role

> Code samples

```bash
curl https://example.com/individuals/string/roles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}/roles/{roleId}`

Delete a role


<h3 id="delete-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Role was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-individuals-addresses">Individuals Addresses</h1>

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


## Retrieve a list of addresses

> Code samples

```bash
curl https://example.com/individuals/string/addresses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/addresses`

<h3 id="retrieve-a-list-of-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "city": "Canberra",
    "country": "Australia",
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Addresses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[address](#schemaaddress)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an address

> Code samples

```bash
curl https://example.com/individuals/string/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "city": "Canberra",
    "country": "Australia",
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic"
  }'
```

`POST /individuals/{partyId}/addresses`

Create an address


> Body parameter

```json
{
  "city": "Canberra",
  "country": "Australia",
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic"
}
```

<h3 id="create-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[address](#schemaaddress)|true|Address resource|
|» city|body|string|false|The city.|
|» country|body|string|false|The country.|
|» line1|body|string|false|The address line 1.|
|» line2|body|string|false|The address line 2.|
|» line3|body|string|false|The address line 3.|
|» name|body|string|false|The address name.|
|» postalCode|body|string|false|The postal code.|
|» suburb|body|string|false|The suburb.|

> Example responses

> 201 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Address was created|[address](#schemaaddress)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an address

> Code samples

```bash
curl https://example.com/individuals/string/addresses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/addresses/{addressId}`

Retrieve an address


<h3 id="retrieve-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 200 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was retrieved successfully|[address](#schemaaddress)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an address

> Code samples

```bash
curl https://example.com/individuals/string/addresses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "city": "Canberra",
    "country": "Australia",
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic"
  }'
```

`PUT /individuals/{partyId}/addresses/{addressId}`

Update an address


> Body parameter

```json
{
  "city": "Canberra",
  "country": "Australia",
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic"
}
```

<h3 id="update-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|
|body|body|[address](#schemaaddress)|true|Address resource|
|» city|body|string|false|The city.|
|» country|body|string|false|The country.|
|» line1|body|string|false|The address line 1.|
|» line2|body|string|false|The address line 2.|
|» line3|body|string|false|The address line 3.|
|» name|body|string|false|The address name.|
|» postalCode|body|string|false|The postal code.|
|» suburb|body|string|false|The suburb.|

> Example responses

> 200 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was updated|[address](#schemaaddress)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an address

> Code samples

```bash
curl https://example.com/individuals/string/addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}/addresses/{addressId}`

Delete an address


<h3 id="delete-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-individuals-electronic-addresses">Individuals Electronic Addresses</h1>

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


## Retrieve a list of electronic addresses

> Code samples

```bash
curl https://example.com/individuals/string/electronic-addresses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/electronic-addresses`

<h3 id="retrieve-a-list-of-electronic-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "number": "62164453",
    "toDate": "",
    "url": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-electronic-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic addresses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-electronic-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[electronic-address](#schemaelectronic-address)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an electronic address

> Code samples

```bash
curl https://example.com/individuals/string/electronic-addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "number": "62164453",
    "url": ""
  }'
```

`POST /individuals/{partyId}/electronic-addresses`

Create an electronic address


> Body parameter

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "number": "62164453",
  "url": ""
}
```

<h3 id="create-an-electronic-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[electronic-address](#schemaelectronic-address)|true|Electronic Address resource|
|» areaCode|body|string|false|The area code, for example, "02".|
|» countryPrefix|body|string|false|The country prefix, for example, "61".|
|» electronicAddressType|body|string|false|The electronic address type.|
|» email|body|string|false|The email address, for example, "robert.ferguson@ato.gov.au".|
|» extension|body|string|false|The extension number, for example, "4453".|
|» number|body|string|false|The number, for example, "62164453".|
|» url|body|string|false|The website address, for example, "https://ato.gov.au".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» electronicAddressType|Email|
|» electronicAddressType|Fax|
|» electronicAddressType|Landline|
|» electronicAddressType|Mobile|
|» electronicAddressType|Website|

> Example responses

> 201 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-electronic-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Electronic Address was created|[electronic-address](#schemaelectronic-address)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an electronic address

> Code samples

```bash
curl https://example.com/individuals/string/electronic-addresses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/electronic-addresses/{addressId}`

Retrieve an electronic address


<h3 id="retrieve-an-electronic-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 200 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-electronic-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic Address was retrieved successfully|[electronic-address](#schemaelectronic-address)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an electronic address

> Code samples

```bash
curl https://example.com/individuals/string/electronic-addresses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "number": "62164453",
    "url": ""
  }'
```

`PUT /individuals/{partyId}/electronic-addresses/{addressId}`

Update an electronic address


> Body parameter

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "number": "62164453",
  "url": ""
}
```

<h3 id="update-an-electronic-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|
|body|body|[electronic-address](#schemaelectronic-address)|true|Electronic Address resource|
|» areaCode|body|string|false|The area code, for example, "02".|
|» countryPrefix|body|string|false|The country prefix, for example, "61".|
|» electronicAddressType|body|string|false|The electronic address type.|
|» email|body|string|false|The email address, for example, "robert.ferguson@ato.gov.au".|
|» extension|body|string|false|The extension number, for example, "4453".|
|» number|body|string|false|The number, for example, "62164453".|
|» url|body|string|false|The website address, for example, "https://ato.gov.au".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» electronicAddressType|Email|
|» electronicAddressType|Fax|
|» electronicAddressType|Landline|
|» electronicAddressType|Mobile|
|» electronicAddressType|Website|

> Example responses

> 200 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-electronic-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic Address was updated|[electronic-address](#schemaelectronic-address)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an electronic address

> Code samples

```bash
curl https://example.com/individuals/string/electronic-addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}/electronic-addresses/{addressId}`

Delete an electronic address


<h3 id="delete-an-electronic-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-electronic-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Electronic Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-individuals-business-names">Individuals Business Names</h1>

A business name is a name or title under which a person conducts a business.


## Retrieve a list of business names

> Code samples

```bash
curl https://example.com/individuals/string/business-names \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/business-names`

<h3 id="retrieve-a-list-of-business-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-business-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Business Names were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-business-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[business-name](#schemabusiness-name)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a business name

> Code samples

```bash
curl https://example.com/individuals/string/business-names \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures"
  }'
```

`POST /individuals/{partyId}/business-names`

Create a business name


> Body parameter

```json
{
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures"
}
```

<h3 id="create-a-business-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[business-name](#schemabusiness-name)|true|Business Name resource|
|» lifecycleState|body|string|false|The business name's lifecycle state.|
|» name|body|string|false|The business name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 201 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-business-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Business Name was created|[business-name](#schemabusiness-name)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a business name

> Code samples

```bash
curl https://example.com/individuals/string/business-names/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/business-names/{productId}`

Retrieve a business name


<h3 id="retrieve-a-business-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-business-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Business Name was retrieved successfully|[business-name](#schemabusiness-name)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a business name

> Code samples

```bash
curl https://example.com/individuals/string/business-names/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures"
  }'
```

`PUT /individuals/{partyId}/business-names/{productId}`

Update a business name


> Body parameter

```json
{
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures"
}
```

<h3 id="update-a-business-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|
|body|body|[business-name](#schemabusiness-name)|true|Business Name resource|
|» lifecycleState|body|string|false|The business name's lifecycle state.|
|» name|body|string|false|The business name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-business-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was updated|[business-name](#schemabusiness-name)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a business name

> Code samples

```bash
curl https://example.com/individuals/string/business-names/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}/business-names/{productId}`

Delete a business name


<h3 id="delete-a-business-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-business-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-individuals-licenses">Individuals Licenses</h1>

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


## Retrieve a list of licenses

> Code samples

```bash
curl https://example.com/individuals/string/licenses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/licenses`

<h3 id="retrieve-a-list-of-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Licenses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[license](#schemalicense)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a license

> Code samples

```bash
curl https://example.com/individuals/string/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval"
  }'
```

`POST /individuals/{partyId}/licenses`

Create a license


> Body parameter

```json
{
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval"
}
```

<h3 id="create-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[license](#schemalicense)|true|License resource|
|» licenseType|body|string|false|The license type.|
|» lifecycleState|body|string|false|The business name's lifecycle state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseType|Australian Financial Services License|
|» licenseType|License 2B|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 201 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|License was created|[license](#schemalicense)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a license

> Code samples

```bash
curl https://example.com/individuals/string/licenses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /individuals/{partyId}/licenses/{productId}`

Retrieve a license


<h3 id="retrieve-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License was retrieved successfully|[license](#schemalicense)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a license

> Code samples

```bash
curl https://example.com/individuals/string/licenses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval"
  }'
```

`PUT /individuals/{partyId}/licenses/{productId}`

Update a license


> Body parameter

```json
{
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval"
}
```

<h3 id="update-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|
|body|body|[license](#schemalicense)|true|License resource|
|» licenseType|body|string|false|The license type.|
|» lifecycleState|body|string|false|The business name's lifecycle state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseType|Australian Financial Services License|
|» licenseType|License 2B|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License was updated|[license](#schemalicense)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a license

> Code samples

```bash
curl https://example.com/individuals/string/licenses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /individuals/{partyId}/licenses/{productId}`

Delete a license


<h3 id="delete-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|License was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations">Organisations</h1>

An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
registry wishes to maintain information.

  For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
  Partnership or Joint Venture).


## Retrieve a list of organisations

> Code samples

```bash
curl https://example.com/organisations \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations`

Retrieve a list of organisations


<h3 id="retrieve-a-list-of-organisations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|registeredIdentifier|query|string|false|The registered identifier, for example, `ACN` or `ABN`.|
|identifier|query|string|false|The identifier, for example, `123456789`.|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "fromDate": "1979-01-13T09:05:06+10:00",
        "id": {},
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "toDate": "",
        "addressType": "Principal Place of Business"
      }
    ],
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "fromDate": "1979-01-13T09:05:06+10:00",
        "id": {},
        "number": "62164453",
        "toDate": "",
        "url": ""
      }
    ],
    "establishmentDate": "1928-03-03",
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "legalEntityType": "Company",
    "names": [
      {
        "fromDate": "1928-03-03T09:05:06+10:00",
        "id": {},
        "name": "321 Technology Ventures",
        "toDate": ""
      }
    ],
    "registeredIdentifiers": [
      {
        "fromDate": "1979-01-13T09:05:06+10:00",
        "id": {},
        "identifier": "123456789",
        "identifierType": "ACN",
        "toDate": ""
      }
    ],
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-organisations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of organisations was retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-organisations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[organisation](#schemaorganisation)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an organisation

> Code samples

```bash
curl https://example.com/organisations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "addressType": "Principal Place of Business"
      }
    ],
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "number": "62164453",
        "url": ""
      }
    ],
    "establishmentDate": "1928-03-03",
    "legalEntityType": "Company",
    "names": [
      {
        "name": "321 Technology Ventures"
      }
    ],
    "registeredIdentifiers": [
      {
        "identifier": "123456789",
        "identifierType": "ACN"
      }
    ]
  }'
```

`POST /organisations`

Create an organisation


> Body parameter

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "number": "62164453",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "legalEntityType": "Company",
  "names": [
    {
      "name": "321 Technology Ventures"
    }
  ],
  "registeredIdentifiers": [
    {
      "identifier": "123456789",
      "identifierType": "ACN"
    }
  ]
}
```

<h3 id="create-an-organisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|body|body|[organisation](#schemaorganisation)|true|Organisation resource|
|» addresses|body|[[organisation-address](#schemaorganisation-address)]|false|none|
|» electronicAddresses|body|[[electronic-address](#schemaelectronic-address)]|false|none|
|» establishmentDate|body|string(date)|true|The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|» legalEntityType|body|string|true|The organisation's legal entity type.|
|» names|body|[[organisation-name](#schemaorganisation-name)]|false|none|
|» registeredIdentifiers|body|[[registered-identifier](#schemaregistered-identifier)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» legalEntityType|Company|
|» legalEntityType|Partnership|
|» legalEntityType|Trust|
|» legalEntityType|Joint Venture|

> Example responses

> 201 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "legalEntityType": "Company",
  "names": [
    {
      "fromDate": "1928-03-03T09:05:06+10:00",
      "id": {},
      "name": "321 Technology Ventures",
      "toDate": ""
    }
  ],
  "registeredIdentifiers": [
    {
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "identifier": "123456789",
      "identifierType": "ACN",
      "toDate": ""
    }
  ],
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-organisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organisation was created|[organisation](#schemaorganisation)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an organisation

> Code samples

```bash
curl https://example.com/organisations/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}`

Retrieve an organisation with the specified identifier


<h3 id="retrieve-an-organisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "legalEntityType": "Company",
  "names": [
    {
      "fromDate": "1928-03-03T09:05:06+10:00",
      "id": {},
      "name": "321 Technology Ventures",
      "toDate": ""
    }
  ],
  "registeredIdentifiers": [
    {
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "identifier": "123456789",
      "identifierType": "ACN",
      "toDate": ""
    }
  ],
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-organisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Individual was retrieved successfully|[organisation](#schemaorganisation)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an organisation

> Code samples

```bash
curl https://example.com/organisations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "addresses": [
      {
        "city": "Canberra",
        "country": "Australia",
        "line1": "Level 7",
        "line2": "21 Genge Street",
        "line3": "",
        "name": "Kembery Building",
        "postalCode": "2601",
        "suburb": "Civic",
        "addressType": "Principal Place of Business"
      }
    ],
    "electronicAddresses": [
      {
        "areaCode": "02",
        "countryPrefix": "61",
        "electronicAddressType": "Landline",
        "email": "",
        "extension": "",
        "number": "62164453",
        "url": ""
      }
    ],
    "establishmentDate": "1928-03-03",
    "legalEntityType": "Company",
    "names": [
      {
        "name": "321 Technology Ventures"
      }
    ],
    "registeredIdentifiers": [
      {
        "identifier": "123456789",
        "identifierType": "ACN"
      }
    ]
  }'
```

`PUT /organisations/{partyId}`

Update an organisation


> Body parameter

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "number": "62164453",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "legalEntityType": "Company",
  "names": [
    {
      "name": "321 Technology Ventures"
    }
  ],
  "registeredIdentifiers": [
    {
      "identifier": "123456789",
      "identifierType": "ACN"
    }
  ]
}
```

<h3 id="update-an-organisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[organisation](#schemaorganisation)|true|Organisation resource|
|» addresses|body|[[organisation-address](#schemaorganisation-address)]|false|none|
|» electronicAddresses|body|[[electronic-address](#schemaelectronic-address)]|false|none|
|» establishmentDate|body|string(date)|true|The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|» legalEntityType|body|string|true|The organisation's legal entity type.|
|» names|body|[[organisation-name](#schemaorganisation-name)]|false|none|
|» registeredIdentifiers|body|[[registered-identifier](#schemaregistered-identifier)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» legalEntityType|Company|
|» legalEntityType|Partnership|
|» legalEntityType|Trust|
|» legalEntityType|Joint Venture|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "legalEntityType": "Company",
  "names": [
    {
      "fromDate": "1928-03-03T09:05:06+10:00",
      "id": {},
      "name": "321 Technology Ventures",
      "toDate": ""
    }
  ],
  "registeredIdentifiers": [
    {
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "identifier": "123456789",
      "identifierType": "ACN",
      "toDate": ""
    }
  ],
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-organisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organisation was updated|[organisation](#schemaorganisation)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an organisation

> Code samples

```bash
curl https://example.com/organisations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}`

Delete an organisation with the specified identifier


<h3 id="delete-an-organisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "Request can not be executed in the current system state",
  "status": "FAILED_PRECONDITION"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-organisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organisation was deleted|None|
|400|Bad Request|Request can not be executed in the current system state|[failed-precondition](#schemafailed-precondition)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations-roles">Organisations Roles</h1>

A role defines the characteristics of a relationship between parties.
An Organisation can participate in a relationship with other organisations and indiviuals.

For example:

| Party                           | Role     | Relationship | Role         | Party             |
| ------------------------------- | -------- | -------------| ------------ | ----------------- |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
| Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
| Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


## Retrieve a list of roles

> Code samples

```bash
curl https://example.com/organisations/string/roles \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/roles`

<h3 id="retrieve-a-list-of-roles-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "2016-01-13T09:05:06+10:00",
    "id": {},
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-roles-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Roles were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-roles-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[party-role](#schemaparty-role)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a role

> Code samples

```bash
curl https://example.com/organisations/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment"
  }'
```

`POST /organisations/{partyId}/roles`

Create a role


> Body parameter

```json
{
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment"
}
```

<h3 id="create-a-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[party-role](#schemaparty-role)|true|Role resource|
|» partyRoleType|body|string|false|The party's role type.|
|» relatedPartyId|body|object|true|The related party's unique identifier.|
|» relatedPartyRoleType|body|string|false|The related party's role type.|
|» relationshipType|body|string|true|The relationship type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» partyRoleType|Director|
|» partyRoleType|Employee|
|» partyRoleType|Member|
|» partyRoleType|Partner|
|» partyRoleType|Trustee|
|» relatedPartyRoleType|Association|
|» relatedPartyRoleType|Company|
|» relatedPartyRoleType|Employer|
|» relatedPartyRoleType|Organisation|
|» relatedPartyRoleType|Partnership|
|» relatedPartyRoleType|Trust|
|» relationshipType|Directorship|
|» relationshipType|Employment|
|» relationshipType|Membership|
|» relationshipType|Partnership|
|» relationshipType|Trusteeship|

> Example responses

> 201 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Role was created|[party-role](#schemaparty-role)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a role

> Code samples

```bash
curl https://example.com/organisations/string/roles/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/roles/{roleId}`

Retrieve a role


<h3 id="retrieve-a-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role was retrieved successfully|[party-role](#schemaparty-role)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a role

> Code samples

```bash
curl https://example.com/organisations/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "partyRoleType": "Employee",
    "relatedPartyId": {},
    "relatedPartyRoleType": "Employer",
    "relationshipType": "Employment"
  }'
```

`PUT /organisations/{partyId}/roles/{roleId}`

Update a role


> Body parameter

```json
{
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment"
}
```

<h3 id="update-a-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|
|body|body|[party-role](#schemaparty-role)|true|Role resource|
|» partyRoleType|body|string|false|The party's role type.|
|» relatedPartyId|body|object|true|The related party's unique identifier.|
|» relatedPartyRoleType|body|string|false|The related party's role type.|
|» relationshipType|body|string|true|The relationship type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» partyRoleType|Director|
|» partyRoleType|Employee|
|» partyRoleType|Member|
|» partyRoleType|Partner|
|» partyRoleType|Trustee|
|» relatedPartyRoleType|Association|
|» relatedPartyRoleType|Company|
|» relatedPartyRoleType|Employer|
|» relatedPartyRoleType|Organisation|
|» relatedPartyRoleType|Partnership|
|» relatedPartyRoleType|Trust|
|» relationshipType|Directorship|
|» relationshipType|Employment|
|» relationshipType|Membership|
|» relationshipType|Partnership|
|» relationshipType|Trusteeship|

> Example responses

> 200 Response

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role was updated|[party-role](#schemaparty-role)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a role

> Code samples

```bash
curl https://example.com/organisations/string/roles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}/roles/{roleId}`

Delete a role


<h3 id="delete-a-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|roleId|path|string|true|The role identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Role was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations-addresses">Organisations Addresses</h1>

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


## Retrieve a list of addresses

> Code samples

```bash
curl https://example.com/organisations/string/addresses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/addresses`

<h3 id="retrieve-a-list-of-addresses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "city": "Canberra",
    "country": "Australia",
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-addresses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Addresses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-addresses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[address](#schemaaddress)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an address

> Code samples

```bash
curl https://example.com/organisations/string/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "city": "Canberra",
    "country": "Australia",
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic"
  }'
```

`POST /organisations/{partyId}/addresses`

Create an address


> Body parameter

```json
{
  "city": "Canberra",
  "country": "Australia",
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic"
}
```

<h3 id="create-an-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[address](#schemaaddress)|true|Address resource|
|» city|body|string|false|The city.|
|» country|body|string|false|The country.|
|» line1|body|string|false|The address line 1.|
|» line2|body|string|false|The address line 2.|
|» line3|body|string|false|The address line 3.|
|» name|body|string|false|The address name.|
|» postalCode|body|string|false|The postal code.|
|» suburb|body|string|false|The suburb.|

> Example responses

> 201 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Address was created|[address](#schemaaddress)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an address

> Code samples

```bash
curl https://example.com/organisations/string/addresses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/addresses/{addressId}`

Retrieve an address


<h3 id="retrieve-an-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 200 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was retrieved successfully|[address](#schemaaddress)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an address

> Code samples

```bash
curl https://example.com/organisations/string/addresses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "city": "Canberra",
    "country": "Australia",
    "line1": "Level 7",
    "line2": "21 Genge Street",
    "line3": "",
    "name": "Kembery Building",
    "postalCode": "2601",
    "suburb": "Civic"
  }'
```

`PUT /organisations/{partyId}/addresses/{addressId}`

Update an address


> Body parameter

```json
{
  "city": "Canberra",
  "country": "Australia",
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic"
}
```

<h3 id="update-an-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|
|body|body|[address](#schemaaddress)|true|Address resource|
|» city|body|string|false|The city.|
|» country|body|string|false|The country.|
|» line1|body|string|false|The address line 1.|
|» line2|body|string|false|The address line 2.|
|» line3|body|string|false|The address line 3.|
|» name|body|string|false|The address name.|
|» postalCode|body|string|false|The postal code.|
|» suburb|body|string|false|The suburb.|

> Example responses

> 200 Response

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was updated|[address](#schemaaddress)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an address

> Code samples

```bash
curl https://example.com/organisations/string/addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}/addresses/{addressId}`

Delete an address


<h3 id="delete-an-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations-electronic-addresses">Organisations Electronic Addresses</h1>

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


## Retrieve a list of electronic addresses

> Code samples

```bash
curl https://example.com/organisations/string/electronic-addresses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/electronic-addresses`

<h3 id="retrieve-a-list-of-electronic-addresses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "number": "62164453",
    "toDate": "",
    "url": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-electronic-addresses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic addresses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-electronic-addresses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[electronic-address](#schemaelectronic-address)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create an electronic address

> Code samples

```bash
curl https://example.com/organisations/string/electronic-addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "number": "62164453",
    "url": ""
  }'
```

`POST /organisations/{partyId}/electronic-addresses`

Create an electronic address


> Body parameter

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "number": "62164453",
  "url": ""
}
```

<h3 id="create-an-electronic-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[electronic-address](#schemaelectronic-address)|true|Electronic Address resource|
|» areaCode|body|string|false|The area code, for example, "02".|
|» countryPrefix|body|string|false|The country prefix, for example, "61".|
|» electronicAddressType|body|string|false|The electronic address type.|
|» email|body|string|false|The email address, for example, "robert.ferguson@ato.gov.au".|
|» extension|body|string|false|The extension number, for example, "4453".|
|» number|body|string|false|The number, for example, "62164453".|
|» url|body|string|false|The website address, for example, "https://ato.gov.au".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» electronicAddressType|Email|
|» electronicAddressType|Fax|
|» electronicAddressType|Landline|
|» electronicAddressType|Mobile|
|» electronicAddressType|Website|

> Example responses

> 201 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-an-electronic-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Electronic Address was created|[electronic-address](#schemaelectronic-address)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an electronic address

> Code samples

```bash
curl https://example.com/organisations/string/electronic-addresses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/electronic-addresses/{addressId}`

Retrieve an electronic address


<h3 id="retrieve-an-electronic-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 200 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-an-electronic-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic address was retrieved successfully|[electronic-address](#schemaelectronic-address)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an electronic address

> Code samples

```bash
curl https://example.com/organisations/string/electronic-addresses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "areaCode": "02",
    "countryPrefix": "61",
    "electronicAddressType": "Landline",
    "email": "",
    "extension": "",
    "number": "62164453",
    "url": ""
  }'
```

`PUT /organisations/{partyId}/electronic-addresses/{addressId}`

Update an electronic address


> Body parameter

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "number": "62164453",
  "url": ""
}
```

<h3 id="update-an-electronic-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|
|body|body|[electronic-address](#schemaelectronic-address)|true|Electronic Address resource|
|» areaCode|body|string|false|The area code, for example, "02".|
|» countryPrefix|body|string|false|The country prefix, for example, "61".|
|» electronicAddressType|body|string|false|The electronic address type.|
|» email|body|string|false|The email address, for example, "robert.ferguson@ato.gov.au".|
|» extension|body|string|false|The extension number, for example, "4453".|
|» number|body|string|false|The number, for example, "62164453".|
|» url|body|string|false|The website address, for example, "https://ato.gov.au".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» electronicAddressType|Email|
|» electronicAddressType|Fax|
|» electronicAddressType|Landline|
|» electronicAddressType|Mobile|
|» electronicAddressType|Website|

> Example responses

> 200 Response

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-an-electronic-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic Address was updated|[electronic-address](#schemaelectronic-address)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an electronic address

> Code samples

```bash
curl https://example.com/organisations/string/electronic-addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}/electronic-addresses/{addressId}`

Delete an electronic address


<h3 id="delete-an-electronic-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|addressId|path|string|true|The address identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-an-electronic-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Electronic Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations-business-names">Organisations Business Names</h1>

A business name is a name or title under which an organisation conducts a business.


## Retrieve a list of business names

> Code samples

```bash
curl https://example.com/organisations/string/business-names \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/business-names`

<h3 id="retrieve-a-list-of-business-names-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-business-names-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Business Names were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-business-names-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[business-name](#schemabusiness-name)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a business name

> Code samples

```bash
curl https://example.com/organisations/string/business-names \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures"
  }'
```

`POST /organisations/{partyId}/business-names`

Create a business name


> Body parameter

```json
{
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures"
}
```

<h3 id="create-a-business-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[business-name](#schemabusiness-name)|true|Business Name resource|
|» lifecycleState|body|string|false|The business name's lifecycle state.|
|» name|body|string|false|The business name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 201 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-business-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Business Name was created|[business-name](#schemabusiness-name)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a business name

> Code samples

```bash
curl https://example.com/organisations/string/business-names/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/business-names/{productId}`

Retrieve a business name


<h3 id="retrieve-a-business-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-business-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Business Name was retrieved successfully|[business-name](#schemabusiness-name)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a business name

> Code samples

```bash
curl https://example.com/organisations/string/business-names/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures"
  }'
```

`PUT /organisations/{partyId}/business-names/{productId}`

Update a business name


> Body parameter

```json
{
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures"
}
```

<h3 id="update-a-business-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|
|body|body|[business-name](#schemabusiness-name)|true|Business Name resource|
|» lifecycleState|body|string|false|The business name's lifecycle state.|
|» name|body|string|false|The business name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-business-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address was updated|[business-name](#schemabusiness-name)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a business name

> Code samples

```bash
curl https://example.com/organisations/string/business-names/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}/business-names/{productId}`

Delete a business name


<h3 id="delete-a-business-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-business-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Address was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-organisations-licenses">Organisations Licenses</h1>

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


## Retrieve a list of licenses

> Code samples

```bash
curl https://example.com/organisations/string/licenses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/licenses`

<h3 id="retrieve-a-list-of-licenses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-licenses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Licenses were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-licenses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[license](#schemalicense)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a license

> Code samples

```bash
curl https://example.com/organisations/string/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval"
  }'
```

`POST /organisations/{partyId}/licenses`

Create a license


> Body parameter

```json
{
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval"
}
```

<h3 id="create-a-license-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|body|body|[license](#schemalicense)|true|License resource|
|» licenseType|body|string|false|The license type.|
|» lifecycleState|body|string|false|The business name's lifecycle state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseType|Australian Financial Services License|
|» licenseType|License 2B|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 201 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

<h3 id="create-a-license-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|License was created|[license](#schemalicense)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a license

> Code samples

```bash
curl https://example.com/organisations/string/licenses/string \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /organisations/{partyId}/licenses/{productId}`

Retrieve a license


<h3 id="retrieve-a-license-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-license-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License was retrieved successfully|[license](#schemalicense)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a license

> Code samples

```bash
curl https://example.com/organisations/string/licenses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'apiKey: string' \
  -d '{
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval"
  }'
```

`PUT /organisations/{partyId}/licenses/{productId}`

Update a license


> Body parameter

```json
{
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval"
}
```

<h3 id="update-a-license-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|
|body|body|[license](#schemalicense)|true|License resource|
|» licenseType|body|string|false|The license type.|
|» lifecycleState|body|string|false|The business name's lifecycle state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseType|Australian Financial Services License|
|» licenseType|License 2B|
|» lifecycleState|Approved|
|» lifecycleState|Expired|
|» lifecycleState|Issued|
|» lifecycleState|Pending Approval|
|» lifecycleState|Suspended|

> Example responses

> 200 Response

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

> 400 Response

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="update-a-license-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License was updated|[license](#schemalicense)|
|400|Bad Request|The client specified an invalid argument|[invalid-argument](#schemainvalid-argument)|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a license

> Code samples

```bash
curl https://example.com/organisations/string/licenses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`DELETE /organisations/{partyId}/licenses/{productId}`

Delete a license


<h3 id="delete-a-license-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|
|partyId|path|string|true|The party identifier.|
|productId|path|string|true|The product identifier.|

> Example responses

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="delete-a-license-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|License was deleted|None|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-business-names">Business Names</h1>

A business name is a name or title under which a person or organisation conducts a business.


## Retrieve a list of business names

> Code samples

```bash
curl https://example.com/business-names \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /business-names`

Retrieve a list of business names


<h3 id="retrieve-a-list-of-business-names-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "lifecycleState": "Pending Approval",
    "name": "XYZ Technology Ventures",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-business-names-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of business names was retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-business-names-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[business-name](#schemabusiness-name)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-licenses">Licenses</h1>

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


## Retrieve a list of licenses

> Code samples

```bash
curl https://example.com/licenses \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /licenses`

Retrieve a list of licenses


<h3 id="retrieve-a-list-of-licenses-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "1979-01-13T09:05:06+10:00",
    "id": {},
    "licenseType": "Australian Financial Services License",
    "lifecycleState": "Pending Approval",
    "toDate": ""
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-licenses-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of licenses was retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-licenses-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[license](#schemalicense)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-business-name-lifecycle-states">Business Name Lifecycle States</h1>

A classification scheme for business names.


## Retrieve a list of business name lifecycle states

> Code samples

```bash
curl https://example.com/classifications/business-name-lifecycle-states \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/business-name-lifecycle-states`

<h3 id="retrieve-a-list-of-business-name-lifecycle-states-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "The Business Name has been approved.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Approved"
  },
  {
    "description": "The Business Name has expired.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Expired"
  },
  {
    "description": "The Business Name has been issued.",
    "id": "123e4567-e89b-12d3-a456-426655440003",
    "name": "Issued"
  },
  {
    "description": "The Business Name is pending approval.",
    "id": "123e4567-e89b-12d3-a456-426655440004",
    "name": "Pending Approval"
  },
  {
    "description": "The Business Name has been suspended.",
    "id": "123e4567-e89b-12d3-a456-426655440005",
    "name": "Suspended"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-business-name-lifecycle-states-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Business name lifecycle states were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-business-name-lifecycle-states-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[business-name-lifecycle-state](#schemabusiness-name-lifecycle-state)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-name-directions">Name Directions</h1>

A classification scheme for names.


## Retrieve a list of name directions

> Code samples

```bash
curl https://example.com/classifications/name-directions \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/name-directions`

<h3 id="retrieve-a-list-of-name-directions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "The full name or formal salutation is rendered left to right.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "left-to-right"
  },
  {
    "description": "The full name or formal salutation is rendered right to left.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "right-to-left"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-name-directions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Name directions were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-name-directions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[name-direction](#schemaname-direction)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-name-prefixes">Name Prefixes</h1>

A classification scheme for names.


## Retrieve a list of name prefixes

> Code samples

```bash
curl https://example.com/classifications/name-prefixes \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/name-prefixes`

<h3 id="retrieve-a-list-of-name-prefixes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "A title used before a family name or formal salutation to address a man.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Mr"
  },
  {
    "description": "A title used before a family name or formal salutation to address a woman.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Ms"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-name-prefixes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Name prefixes were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-name-prefixes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[name-prefix](#schemaname-prefix)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-name-types">Name Types</h1>

A classification scheme for names.


## Retrieve a list of name types

> Code samples

```bash
curl https://example.com/classifications/name-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/name-types`

<h3 id="retrieve-a-list-of-name-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "An alternate name used by a party.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Alias"
  },
  {
    "description": "The primary name used by a party.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Principal Name"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-name-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Name types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-name-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[name-type](#schemaname-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-address-types">Address Types</h1>

A classification scheme for addresses.


## Retrieve a list of address types

> Code samples

```bash
curl https://example.com/classifications/address-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/address-types`

<h3 id="retrieve-a-list-of-address-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "The address at which an individual or organisation receives letters or packages.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Mailing"
  },
  {
    "description": "The main location where work is conducted.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Principal Place of Business"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-address-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-address-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[address-type](#schemaaddress-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-electronic-address-types">Electronic Address Types</h1>

A classification scheme for electronic addresses.


## Retrieve a list of electronic address types

> Code samples

```bash
curl https://example.com/classifications/electronic-address-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/electronic-address-types`

<h3 id="retrieve-a-list-of-electronic-address-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "An address used to send and receive emails.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Email"
  },
  {
    "description": "A number used to send and receive faxes.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Fax"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-electronic-address-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Electronic address types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-electronic-address-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[electronic-address-type](#schemaelectronic-address-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-genders">Genders</h1>

A classification scheme for the representation of human sexes.


## Retrieve a list of genders

> Code samples

```bash
curl https://example.com/classifications/genders \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/genders`

<h3 id="retrieve-a-list-of-genders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "gender": "Not Known",
    "id": "123e4567-e89b-12d3-a456-426655440001"
  },
  {
    "gender": "Male",
    "id": "123e4567-e89b-12d3-a456-426655440002"
  },
  {
    "gender": "Female",
    "id": "123e4567-e89b-12d3-a456-426655440003"
  },
  {
    "gender": "Not Applicable",
    "id": "123e4567-e89b-12d3-a456-426655440004"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-genders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Genders were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-genders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[gender](#schemagender)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-legal-entity-types">Legal Entity Types</h1>

A classification scheme for parties (individuals and organisations).


## Retrieve a list of legal entity types

> Code samples

```bash
curl https://example.com/classifications/legal-entity-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/legal-entity-types`

<h3 id="retrieve-a-list-of-legal-entity-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "If you operate as a sole trader, you're responsible for all aspects of the business, including any debts the business incurs.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Sole Trader"
  },
  {
    "description": "A partnership is two or more individuals or organisations who do business as partners or receive income jointly.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Partnership"
  },
  {
    "description": "A joint venture is two or more people or entities who join to do business together for a particular purpose, usually a single project, rather than as an ongoing business.",
    "id": "123e4567-e89b-12d3-a456-426655440003",
    "name": "Joint Venture"
  },
  {
    "description": "A company is a separate legal entity. This means it has the same rights as a natural person and can incur debt, sue and be sued.",
    "id": "123e4567-e89b-12d3-a456-426655440004",
    "name": "Company"
  },
  {
    "description": "A trust is an obligation imposed on a person – the trustee – to hold property or assets (e.g. business assets) for the benefit of others (known as beneficiaries).",
    "id": "123e4567-e89b-12d3-a456-426655440005",
    "name": "Trust"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-legal-entity-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legal entity types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-legal-entity-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[legal-entity-type](#schemalegal-entity-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-license-lifecycle-states">License Lifecycle States</h1>

A classification scheme for licenses.


## Retrieve a list of license lifecycle states

> Code samples

```bash
curl https://example.com/classifications/license-lifecycle-states \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/license-lifecycle-states`

<h3 id="retrieve-a-list-of-license-lifecycle-states-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "The License has been approved.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Approved"
  },
  {
    "description": "The License has expired.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "Expired"
  },
  {
    "description": "The License has been issued.",
    "id": "123e4567-e89b-12d3-a456-426655440003",
    "name": "Issued"
  },
  {
    "description": "The License is pending approval.",
    "id": "123e4567-e89b-12d3-a456-426655440004",
    "name": "Pending Approval"
  },
  {
    "description": "The License has been suspended.",
    "id": "123e4567-e89b-12d3-a456-426655440005",
    "name": "Suspended"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-license-lifecycle-states-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License lifecycle states were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-license-lifecycle-states-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[license-lifecycle-state](#schemalicense-lifecycle-state)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-license-types">License Types</h1>

A classification scheme for licenses.


## Retrieve a list of license types

> Code samples

```bash
curl https://example.com/classifications/license-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/license-types`

<h3 id="retrieve-a-list-of-license-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "To conduct a financial services business in Australia, you must have an Australian Financial Services (AFS) licence.",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "Australian Financial Services License"
  },
  {
    "description": "To conduct a <insert-name-here> business you must have a 2B licence.",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "2B License"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-license-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-license-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[license-type](#schemalicense-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-registered-identifier-types">Registered Identifier Types</h1>

A classification scheme for registered identifiers.


## Retrieve a list of registered identifier types

> Code samples

```bash
curl https://example.com/classifications/registered-identifier-types \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/registered-identifier-types`

<h3 id="retrieve-a-list-of-registered-identifier-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "description": "An Australian Business Number (ABN) is a unique eleven-character number issued by the Australian Business Register (ABR).",
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "name": "ABN"
  },
  {
    "description": "An Australian Company Number (ACN) is a unique nine-character number issued by the Australian Securities and Investments Commission (ASIC).",
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "name": "ACN"
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-registered-identifier-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Registered identifier types were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-registered-identifier-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[registered-identifier-type](#schemaregistered-identifier-type)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="business-registries-roles">Roles</h1>

A classification scheme for the characteristics of relationships between parties (individuals and organisations).


## Retrieve a list of roles

> Code samples

```bash
curl https://example.com/classifications/roles \
  -H 'Accept: application/json' \
  -H 'apiKey: string'
```

`GET /classifications/roles`

<h3 id="retrieve-a-list-of-roles-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|header|string|true|The API key.|

> Example responses

> 200 Response

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426655440001",
    "reciprocalRole": "Company",
    "reciprocalRoleDescription": "An incorporated legal entity.",
    "relationship": "Directorship",
    "role": "Director",
    "roleDescription": "An individual responsible for managing a company's business activities."
  },
  {
    "id": "123e4567-e89b-12d3-a456-426655440002",
    "reciprocalRole": "Employer",
    "reciprocalRoleDescription": "An individual or organisation that employs people.",
    "relationship": "Employment",
    "role": "Employee",
    "roleDescription": "An individual employed for wages or salary."
  }
]
```

> 401 Response

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

<h3 id="retrieve-a-list-of-roles-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Roles were retrieved successfully|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, or expired token|[unauthenticated](#schemaunauthenticated)|
|404|Not Found|The specified resource was not found|[not-found](#schemanot-found)|

<h3 id="retrieve-a-list-of-roles-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[role](#schemarole)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.<br>For example:<br><br>    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",<br>          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"<br><br>`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.<br>|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": ""
}
```

The Address resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city.|
|country|string|false|none|The country.|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|line1|string|false|none|The address line 1.|
|line2|string|false|none|The address line 2.|
|line3|string|false|none|The address line 3.|
|name|string|false|none|The address name.|
|postalCode|string|false|none|The postal code.|
|suburb|string|false|none|The suburb.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

<h2 id="tocS_address-type">address-type</h2>
<!-- backwards compatibility -->
<a id="schemaaddress-type"></a>
<a id="schema_address-type"></a>
<a id="tocSaddress-type"></a>
<a id="tocsaddress-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_addressId">addressId</h2>
<!-- backwards compatibility -->
<a id="schemaaddressid"></a>
<a id="schema_addressId"></a>
<a id="tocSaddressid"></a>
<a id="tocsaddressid"></a>

```json
{}
```

<h2 id="tocS_business-name">business-name</h2>
<!-- backwards compatibility -->
<a id="schemabusiness-name"></a>
<a id="schema_business-name"></a>
<a id="tocSbusiness-name"></a>
<a id="tocsbusiness-name"></a>

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "lifecycleState": "Pending Approval",
  "name": "XYZ Technology Ventures",
  "toDate": ""
}
```

The Business Name resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|lifecycleState|string|false|none|The business name's lifecycle state.|
|name|string|false|none|The business name.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|lifecycleState|Approved|
|lifecycleState|Expired|
|lifecycleState|Issued|
|lifecycleState|Pending Approval|
|lifecycleState|Suspended|

<h2 id="tocS_business-name-lifecycle-state">business-name-lifecycle-state</h2>
<!-- backwards compatibility -->
<a id="schemabusiness-name-lifecycle-state"></a>
<a id="schema_business-name-lifecycle-state"></a>
<a id="tocSbusiness-name-lifecycle-state"></a>
<a id="tocsbusiness-name-lifecycle-state"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_electronic-address">electronic-address</h2>
<!-- backwards compatibility -->
<a id="schemaelectronic-address"></a>
<a id="schema_electronic-address"></a>
<a id="tocSelectronic-address"></a>
<a id="tocselectronic-address"></a>

```json
{
  "areaCode": "02",
  "countryPrefix": "61",
  "electronicAddressType": "Landline",
  "email": "",
  "extension": "",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "number": "62164453",
  "toDate": "",
  "url": ""
}
```

The Electronic Address resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaCode|string|false|none|The area code, for example, "02".|
|countryPrefix|string|false|none|The country prefix, for example, "61".|
|electronicAddressType|string|false|none|The electronic address type.|
|email|string|false|none|The email address, for example, "robert.ferguson@ato.gov.au".|
|extension|string|false|none|The extension number, for example, "4453".|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|number|string|false|none|The number, for example, "62164453".|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|url|string|false|none|The website address, for example, "https://ato.gov.au".|

#### Enumerated Values

|Property|Value|
|---|---|
|electronicAddressType|Email|
|electronicAddressType|Fax|
|electronicAddressType|Landline|
|electronicAddressType|Mobile|
|electronicAddressType|Website|

<h2 id="tocS_electronic-address-type">electronic-address-type</h2>
<!-- backwards compatibility -->
<a id="schemaelectronic-address-type"></a>
<a id="schema_electronic-address-type"></a>
<a id="tocSelectronic-address-type"></a>
<a id="tocselectronic-address-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_error-details">error-details</h2>
<!-- backwards compatibility -->
<a id="schemaerror-details"></a>
<a id="schema_error-details"></a>
<a id="tocSerror-details"></a>
<a id="tocserror-details"></a>

```json
{
  "code": "NullValue",
  "message": "Family name must not be null",
  "target": "familyName"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|message|string|false|none|The error message.|
|target|string|false|none|The error target.|

<h2 id="tocS_failed-precondition">failed-precondition</h2>
<!-- backwards compatibility -->
<a id="schemafailed-precondition"></a>
<a id="schema_failed-precondition"></a>
<a id="tocSfailed-precondition"></a>
<a id="tocsfailed-precondition"></a>

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "Request can not be executed in the current system state",
  "status": "FAILED_PRECONDITION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|details|[[error-details](#schemaerror-details)]|false|none|none|
|message|string|false|none|The error message.|
|status|string|false|none|The error status.|

<h2 id="tocS_gender">gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```json
{
  "gender": "string",
  "id": {}
}
```

The Gender resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|none|The gender.|
|id|object|false|read-only|The resource's unique identifier.|

<h2 id="tocS_individual">individual</h2>
<!-- backwards compatibility -->
<a id="schemaindividual"></a>
<a id="schema_individual"></a>
<a id="tocSindividual"></a>
<a id="tocsindividual"></a>

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Residence"
    }
  ],
  "dateOfBirth": "1979-01-13",
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "fromDate": "1979-01-13T09:05:06+10:00",
  "gender": "Male",
  "id": {},
  "names": [
    {
      "direction": "left-to-right",
      "familyName": "Ferguson",
      "formalSalutation": "Mr Robert Ferguson",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "givenName": "Robert",
      "id": {},
      "informalSalutation": "Rob",
      "middleName": "James",
      "namePrefix": "Mr",
      "nameSuffix": "",
      "nameType": "Principal Name",
      "toDate": ""
    }
  ],
  "placeOfBirth": "Tamworth",
  "toDate": ""
}
```

The Individual resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[individual-address](#schemaindividual-address)]|false|none|none|
|dateOfBirth|string(date)|true|none|The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|electronicAddresses|[[electronic-address](#schemaelectronic-address)]|false|none|none|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|gender|string|false|none|The individual's gender.|
|id|object|false|read-only|The party's unique identifier.|
|names|[[individual-name](#schemaindividual-name)]|false|none|none|
|placeOfBirth|string|true|none|The individual's place of birth, for example, `Tamworth`.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|Female|
|gender|Male|
|gender|Not Applicable|
|gender|Not Known|

<h2 id="tocS_individual-address">individual-address</h2>
<!-- backwards compatibility -->
<a id="schemaindividual-address"></a>
<a id="schema_individual-address"></a>
<a id="tocSindividual-address"></a>
<a id="tocsindividual-address"></a>

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": "",
  "addressType": "Principal Place of Residence"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city.|
|country|string|false|none|The country.|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|line1|string|false|none|The address line 1.|
|line2|string|false|none|The address line 2.|
|line3|string|false|none|The address line 3.|
|name|string|false|none|The address name.|
|postalCode|string|false|none|The postal code.|
|suburb|string|false|none|The suburb.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|addressType|string|false|none|The address type.|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|Mailing|
|addressType|Principal Place of Business|
|addressType|Principal Place of Residence|

<h2 id="tocS_individual-name">individual-name</h2>
<!-- backwards compatibility -->
<a id="schemaindividual-name"></a>
<a id="schema_individual-name"></a>
<a id="tocSindividual-name"></a>
<a id="tocsindividual-name"></a>

```json
{
  "direction": "left-to-right",
  "familyName": "Ferguson",
  "formalSalutation": "Mr Robert Ferguson",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "givenName": "Robert",
  "id": {},
  "informalSalutation": "Rob",
  "middleName": "James",
  "namePrefix": "Mr",
  "nameSuffix": "",
  "nameType": "Principal Name",
  "toDate": ""
}
```

The Individual Name resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|The direction used to render the individual's name.|
|familyName|string|false|none|The individual's family name.|
|formalSalutation|string|false|none|The individual's formal salutation, for example, "Mr William Smith".|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|givenName|string|false|none|The individual's given name.|
|id|object|false|read-only|The resource's unique identifier.|
|informalSalutation|string|false|none|The individual's informal salutation, for example, "Bill".|
|middleName|string|false|none|The individual's middle name.|
|namePrefix|string|false|none|The individual's name prefix.|
|nameSuffix|string|false|none|The individual's name suffix, for example, "Jr" or "Sr".|
|nameType|string|false|none|The name type.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|left-to-right|
|direction|right-to-left|
|namePrefix|Mr|
|namePrefix|Ms|
|nameType|Alias|
|nameType|Principal Name|

<h2 id="tocS_invalid-argument">invalid-argument</h2>
<!-- backwards compatibility -->
<a id="schemainvalid-argument"></a>
<a id="schema_invalid-argument"></a>
<a id="tocSinvalid-argument"></a>
<a id="tocsinvalid-argument"></a>

```json
{
  "code": "400",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client specified an invalid argument",
  "status": "INVALID_ARGUMENT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|details|[[error-details](#schemaerror-details)]|false|none|none|
|message|string|false|none|The error message.|
|status|string|false|none|The error status.|

<h2 id="tocS_legal-entity-type">legal-entity-type</h2>
<!-- backwards compatibility -->
<a id="schemalegal-entity-type"></a>
<a id="schema_legal-entity-type"></a>
<a id="tocSlegal-entity-type"></a>
<a id="tocslegal-entity-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_license">license</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_license"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "licenseType": "Australian Financial Services License",
  "lifecycleState": "Pending Approval",
  "toDate": ""
}
```

The License resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|licenseType|string|false|none|The license type.|
|lifecycleState|string|false|none|The business name's lifecycle state.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|licenseType|Australian Financial Services License|
|licenseType|License 2B|
|lifecycleState|Approved|
|lifecycleState|Expired|
|lifecycleState|Issued|
|lifecycleState|Pending Approval|
|lifecycleState|Suspended|

<h2 id="tocS_license-lifecycle-state">license-lifecycle-state</h2>
<!-- backwards compatibility -->
<a id="schemalicense-lifecycle-state"></a>
<a id="schema_license-lifecycle-state"></a>
<a id="tocSlicense-lifecycle-state"></a>
<a id="tocslicense-lifecycle-state"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_license-type">license-type</h2>
<!-- backwards compatibility -->
<a id="schemalicense-type"></a>
<a id="schema_license-type"></a>
<a id="tocSlicense-type"></a>
<a id="tocslicense-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_name-direction">name-direction</h2>
<!-- backwards compatibility -->
<a id="schemaname-direction"></a>
<a id="schema_name-direction"></a>
<a id="tocSname-direction"></a>
<a id="tocsname-direction"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_name-prefix">name-prefix</h2>
<!-- backwards compatibility -->
<a id="schemaname-prefix"></a>
<a id="schema_name-prefix"></a>
<a id="tocSname-prefix"></a>
<a id="tocsname-prefix"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_name-type">name-type</h2>
<!-- backwards compatibility -->
<a id="schemaname-type"></a>
<a id="schema_name-type"></a>
<a id="tocSname-type"></a>
<a id="tocsname-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_not-found">not-found</h2>
<!-- backwards compatibility -->
<a id="schemanot-found"></a>
<a id="schema_not-found"></a>
<a id="tocSnot-found"></a>
<a id="tocsnot-found"></a>

```json
{
  "code": "404",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The specified resource was not found",
  "status": "NOT_FOUND"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|details|[[error-details](#schemaerror-details)]|false|none|none|
|message|string|false|none|The error message.|
|status|string|false|none|The error status.|

<h2 id="tocS_organisation">organisation</h2>
<!-- backwards compatibility -->
<a id="schemaorganisation"></a>
<a id="schema_organisation"></a>
<a id="tocSorganisation"></a>
<a id="tocsorganisation"></a>

```json
{
  "addresses": [
    {
      "city": "Canberra",
      "country": "Australia",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "line1": "Level 7",
      "line2": "21 Genge Street",
      "line3": "",
      "name": "Kembery Building",
      "postalCode": "2601",
      "suburb": "Civic",
      "toDate": "",
      "addressType": "Principal Place of Business"
    }
  ],
  "electronicAddresses": [
    {
      "areaCode": "02",
      "countryPrefix": "61",
      "electronicAddressType": "Landline",
      "email": "",
      "extension": "",
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "number": "62164453",
      "toDate": "",
      "url": ""
    }
  ],
  "establishmentDate": "1928-03-03",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "legalEntityType": "Company",
  "names": [
    {
      "fromDate": "1928-03-03T09:05:06+10:00",
      "id": {},
      "name": "321 Technology Ventures",
      "toDate": ""
    }
  ],
  "registeredIdentifiers": [
    {
      "fromDate": "1979-01-13T09:05:06+10:00",
      "id": {},
      "identifier": "123456789",
      "identifierType": "ACN",
      "toDate": ""
    }
  ],
  "toDate": ""
}
```

The Organisation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[organisation-address](#schemaorganisation-address)]|false|none|none|
|electronicAddresses|[[electronic-address](#schemaelectronic-address)]|false|none|none|
|establishmentDate|string(date)|true|none|The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The party's unique identifier.|
|legalEntityType|string|true|none|The organisation's legal entity type.|
|names|[[organisation-name](#schemaorganisation-name)]|false|none|none|
|registeredIdentifiers|[[registered-identifier](#schemaregistered-identifier)]|false|none|none|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntityType|Company|
|legalEntityType|Partnership|
|legalEntityType|Trust|
|legalEntityType|Joint Venture|

<h2 id="tocS_organisation-address">organisation-address</h2>
<!-- backwards compatibility -->
<a id="schemaorganisation-address"></a>
<a id="schema_organisation-address"></a>
<a id="tocSorganisation-address"></a>
<a id="tocsorganisation-address"></a>

```json
{
  "city": "Canberra",
  "country": "Australia",
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "line1": "Level 7",
  "line2": "21 Genge Street",
  "line3": "",
  "name": "Kembery Building",
  "postalCode": "2601",
  "suburb": "Civic",
  "toDate": "",
  "addressType": "Principal Place of Business"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city.|
|country|string|false|none|The country.|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|line1|string|false|none|The address line 1.|
|line2|string|false|none|The address line 2.|
|line3|string|false|none|The address line 3.|
|name|string|false|none|The address name.|
|postalCode|string|false|none|The postal code.|
|suburb|string|false|none|The suburb.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|addressType|string|false|none|The address type.|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|Mailing|
|addressType|Principal Place of Business|

<h2 id="tocS_organisation-name">organisation-name</h2>
<!-- backwards compatibility -->
<a id="schemaorganisation-name"></a>
<a id="schema_organisation-name"></a>
<a id="tocSorganisation-name"></a>
<a id="tocsorganisation-name"></a>

```json
{
  "fromDate": "1928-03-03T09:05:06+10:00",
  "id": {},
  "name": "321 Technology Ventures",
  "toDate": ""
}
```

The Organisation Name resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The organisation's name.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

<h2 id="tocS_party-role">party-role</h2>
<!-- backwards compatibility -->
<a id="schemaparty-role"></a>
<a id="schema_party-role"></a>
<a id="tocSparty-role"></a>
<a id="tocsparty-role"></a>

```json
{
  "fromDate": "2016-01-13T09:05:06+10:00",
  "id": {},
  "partyRoleType": "Employee",
  "relatedPartyId": {},
  "relatedPartyRoleType": "Employer",
  "relationshipType": "Employment",
  "toDate": ""
}
```

The Party Role resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|partyRoleType|string|false|none|The party's role type.|
|relatedPartyId|object|true|none|The related party's unique identifier.|
|relatedPartyRoleType|string|false|none|The related party's role type.|
|relationshipType|string|true|none|The relationship type.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|partyRoleType|Director|
|partyRoleType|Employee|
|partyRoleType|Member|
|partyRoleType|Partner|
|partyRoleType|Trustee|
|relatedPartyRoleType|Association|
|relatedPartyRoleType|Company|
|relatedPartyRoleType|Employer|
|relatedPartyRoleType|Organisation|
|relatedPartyRoleType|Partnership|
|relatedPartyRoleType|Trust|
|relationshipType|Directorship|
|relationshipType|Employment|
|relationshipType|Membership|
|relationshipType|Partnership|
|relationshipType|Trusteeship|

<h2 id="tocS_partyId">partyId</h2>
<!-- backwards compatibility -->
<a id="schemapartyid"></a>
<a id="schema_partyId"></a>
<a id="tocSpartyid"></a>
<a id="tocspartyid"></a>

```json
{}
```

<h2 id="tocS_permission-denied">permission-denied</h2>
<!-- backwards compatibility -->
<a id="schemapermission-denied"></a>
<a id="schema_permission-denied"></a>
<a id="tocSpermission-denied"></a>
<a id="tocspermission-denied"></a>

```json
{
  "code": "403",
  "details": [
    {
      "code": "NullValue",
      "message": "Family name must not be null",
      "target": "familyName"
    }
  ],
  "message": "The client does not have sufficient permission",
  "status": "PERMISSION_DENIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|details|[[error-details](#schemaerror-details)]|false|none|none|
|message|string|false|none|The error message.|
|status|string|false|none|The error status.|

<h2 id="tocS_registered-identifier">registered-identifier</h2>
<!-- backwards compatibility -->
<a id="schemaregistered-identifier"></a>
<a id="schema_registered-identifier"></a>
<a id="tocSregistered-identifier"></a>
<a id="tocsregistered-identifier"></a>

```json
{
  "fromDate": "1979-01-13T09:05:06+10:00",
  "id": {},
  "identifier": "123456789",
  "identifierType": "ACN",
  "toDate": ""
}
```

The Registered Identifier resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|read-only|The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|
|id|object|false|read-only|The resource's unique identifier.|
|identifier|string|false|none|The registered identifier.|
|identifierType|string|false|none|The registered identifier type.|
|toDate|string(date-time)|false|read-only|The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).|

#### Enumerated Values

|Property|Value|
|---|---|
|identifierType|ACN|
|identifierType|ABN|

<h2 id="tocS_registered-identifier-type">registered-identifier-type</h2>
<!-- backwards compatibility -->
<a id="schemaregistered-identifier-type"></a>
<a id="schema_registered-identifier-type"></a>
<a id="tocSregistered-identifier-type"></a>
<a id="tocsregistered-identifier-type"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_resourceId">resourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_resourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"123e4567-e89b-12d3-a456-426655440000"
```

The resource ID. Defaults to UUID v4

<h2 id="tocS_role">role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "id": {},
  "reciprocalRole": "string",
  "reciprocalRoleDescription": "string",
  "relationship": "string",
  "role": "string",
  "roleDescription": "string"
}
```

The Role Type resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|read-only|The resource's unique identifier.|
|reciprocalRole|string|false|none|The reciprocal role name.|
|reciprocalRoleDescription|string|false|none|The reciprocal role description.|
|relationship|string|false|none|The relationship name.|
|role|string|false|none|The role name.|
|roleDescription|string|false|none|The role description.|

<h2 id="tocS_roleId">roleId</h2>
<!-- backwards compatibility -->
<a id="schemaroleid"></a>
<a id="schema_roleId"></a>
<a id="tocSroleid"></a>
<a id="tocsroleid"></a>

```json
{}
```

<h2 id="tocS_type">type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "description": "string",
  "id": {},
  "name": "string"
}
```

The Type resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The scheme value description.|
|id|object|false|read-only|The resource's unique identifier.|
|name|string|false|none|The scheme value.|

<h2 id="tocS_unauthenticated">unauthenticated</h2>
<!-- backwards compatibility -->
<a id="schemaunauthenticated"></a>
<a id="schema_unauthenticated"></a>
<a id="tocSunauthenticated"></a>
<a id="tocsunauthenticated"></a>

```json
{
  "code": "401",
  "details": {
    "code": "NullValue",
    "message": "Family name must not be null",
    "target": "familyName"
  },
  "message": "Request not authenticated due to missing, invalid, or expired token",
  "status": "UNAUTHENTICATED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code.|
|details|[error-details](#schemaerror-details)|false|none|none|
|message|string|false|none|The error message.|
|status|string|false|none|The error status.|
