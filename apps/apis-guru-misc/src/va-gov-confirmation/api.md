<h1 id="veteran-confirmation">Veteran Confirmation v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Veteran Confirmation API allows you to confirm Veteran status for a given person. This can be useful for offering Veterans discounts or other benefits.

The API will only return “Confirmed” or “Not Confirmed”.

## Quickstart Guide
### 1. Get Access Credentials
Get started by filling out the form on the [Apply for VA Lighthouse Developer Access](https://developer.va.gov/apply) page.

After submitting a request, you will receive your credentials for using the API in the Development environment, which allows you to try it out with mock data before moving to the Production environment.

### 2. Test the API
In the endpoint documentation below, we've provided a curl command builder for trying out the API before implementation with your app.
Use [Test User](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/confirmation_test_accounts.md) attributes to populate the request body.

### 3. Build your app
The base URI for the Veteran Confirmation API in the Sandbox environment is:

https://sandbox-api.va.gov/services/veteran_confirmation/v0

In this environment, use attributes from the list of [Test Users](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/confirmation_test_accounts.md). Only Test Users can return a `"confirmed"` response.

Check out some of our [sample apps](https://github.com/department-of-veterans-affairs/vets-api-clients). Please visit our VA Lighthouse [Support portal](https://developer.va.gov/support) should you need further assistance.

### 4. Show us a demo and get access to the Production environment
After building your app, we ask that you give us a demo before we set you up with production credentials. Please see the [Path to Production](https://developer.va.gov/go-live) page for more details.

## Authorization
This API requires an API key in combination with identifiable information for the person being confirmed listed below. API requests are authorized through a symmetric API token provided in an HTTP header with name `apikey`. Including more information has a better chance of making a match and returning a Confirmed status.
### Required information:
* First Name
* Last Name
* Date of Birth
* Social Security Number

### Optional information:
* Middle Name
* Gender

## Reference
### Sandbox vs. Production Data
APIs accessed via the Sandbox environment are using the same underlying logic as VA’s production APIs; only the underlying data store is different.

### Master Veteran Index (MVI)
The Master Veteran Index confirms a user's identity. In Production, several factors are considered to confirm identity. These include: a user’s first name, last name, date of birth and Social Security number. The MVI is mocked in the Sandbox environment. In this environment, the only factor used to confirm identity is the Social Security number.

### Rate Limiting
We implemented basic rate limiting of 60 requests per minute. If you exceed this quota, your request will return a 429 status code. You may petition for increased rate limits by emailing and requests will be decided on a case by case basis.

### Raw Open API Spec
https://api.va.gov/services/veteran_confirmation/docs/v0/api

Base URLs:

* <a href="https://sandbox-api.va.gov/services/veteran_confirmation/v0">https://sandbox-api.va.gov/services/veteran_confirmation/v0</a> - VA.gov API sandbox environment

* <a href="https://api.va.gov/services/veteran_confirmation/v0">https://api.va.gov/services/veteran_confirmation/v0</a> - VA.gov API production environment

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="veteran-confirmation-veteranconfirmationstatus">veteran_confirmation_status</h1>

Veteran Confirmation - Veteran Status

## Get confirmation about an individual's Veteran status according to the VA

<a id="opIdgetVeteranStatus"></a>

> Code samples

```bash
curl https://example.com/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "birth_date": "1965-01-01",
    "first_name": "John",
    "gender": "M",
    "last_name": "Doe",
    "middle_name": "Theodore",
    "ssn": "555-55-5555"
  }'
```

`POST /status`

> Body parameter

```json
{
  "birth_date": "1965-01-01",
  "first_name": "John",
  "gender": "M",
  "last_name": "Doe",
  "middle_name": "Theodore",
  "ssn": "555-55-5555"
}
```

<h3 id="get-confirmation-about-an-individuals-veteran-status-according-to-the-va-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VeteranStatusRequest](#schemaveteranstatusrequest)|true|none|
|» birth_date|body|string|true|Birth date for the person of interest in any valid ISO8601 format|
|» first_name|body|string|true|First name for the person of interest|
|» gender|body|string|false|Optional gender of M or F for the person of interest|
|» last_name|body|string|true|Last name for the person of interest|
|» middle_name|body|string|false|Optional middle name for the person of interest|
|» ssn|body|string|true|Social Security Number for the person of interest with or without dashes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|

> Example responses

> 200 Response

```json
{
  "veteran_status": "confirmed"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "No API key found in request"
}
```

> 403 Response

```json
{
  "message": "No API key found in request"
}
```

<h3 id="get-confirmation-about-an-individuals-veteran-status-according-to-the-va-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Confirmation status successfully retrieved|[VeteranStatusConfirmation](#schemaveteranstatusconfirmation)|
|400|Bad Request|Bad request - invalid or missing query parameters|[APIError](#schemaapierror)|
|401|Unauthorized|Missing API token|[AuthorizationError](#schemaauthorizationerror)|
|403|Forbidden|Invalid API token|[AuthorizationError](#schemaauthorizationerror)|
|503|Service Unavailable|We encountered a temporary error. Check back in the future.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_APIError">APIError</h2>
<!-- backwards compatibility -->
<a id="schemaapierror"></a>
<a id="schema_APIError"></a>
<a id="tocSapierror"></a>
<a id="tocsapierror"></a>

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

API invocation or processing error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_AuthorizationError">AuthorizationError</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationerror"></a>
<a id="schema_AuthorizationError"></a>
<a id="tocSauthorizationerror"></a>
<a id="tocsauthorizationerror"></a>

```json
{
  "message": "No API key found in request"
}
```

API Platform authorization (API token) error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_VeteranStatusConfirmation">VeteranStatusConfirmation</h2>
<!-- backwards compatibility -->
<a id="schemaveteranstatusconfirmation"></a>
<a id="schema_VeteranStatusConfirmation"></a>
<a id="tocSveteranstatusconfirmation"></a>
<a id="tocsveteranstatusconfirmation"></a>

```json
{
  "veteran_status": "confirmed"
}
```

Veteran status confirmation for an individual

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|veteran_status|string|false|none|Whether the system could confirm the Veteran status of an individual based on traits<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|veteran_status|confirmed|
|veteran_status|not confirmed|

<h2 id="tocS_VeteranStatusRequest">VeteranStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaveteranstatusrequest"></a>
<a id="schema_VeteranStatusRequest"></a>
<a id="tocSveteranstatusrequest"></a>
<a id="tocsveteranstatusrequest"></a>

```json
{
  "birth_date": "1965-01-01",
  "first_name": "John",
  "gender": "M",
  "last_name": "Doe",
  "middle_name": "Theodore",
  "ssn": "555-55-5555"
}
```

Attributes required to retrieve a Veteran's status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_date|string|true|none|Birth date for the person of interest in any valid ISO8601 format|
|first_name|string|true|none|First name for the person of interest|
|gender|string|false|none|Optional gender of M or F for the person of interest|
|last_name|string|true|none|Last name for the person of interest|
|middle_name|string|false|none|Optional middle name for the person of interest|
|ssn|string|true|none|Social Security Number for the person of interest with or without dashes|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|
