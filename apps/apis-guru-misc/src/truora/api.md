<h1 id="checks-api">Checks API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

**NOTE:** This is a preview of the API and it is not considered stable since refinements are still being made.

# Introduction

Welcome to the  **Truora Check** [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer) reference. You may also want to check out our [**Validations API docs**](https://docs.validations.truora.com/) or our [**Signals API docs**](https://docs.signals.truora.com/).

Truora Check API allows performing full background checks on people, vehicles and companies. There are three main types of background checks:

- **Personal background check**: Verifies national IDs in multiple databases of public and legal entities in the LATAM region. For every national ID, returns information on: personal identity, criminal records, international background check, and professional background.

- **Vehicle background check**: Verifies the vehicle documents and the owner identity in multiple databases of public and legal entities in the LATAM region. For every vehicle and owner type, returns information on: personal identity, driving records, criminal records, and vehicle information.  

- **Company background check**: Verifies the tax ID or a company name in multiple databases of public and legal entities in the LATAM region. For every company, returns the associated: business status, legal and criminal records, and media reports.

# API Key V1 is live!

API key version 1 is now live. Users with version 0 API keys are not immediately required to upgrade to V1 but should plan to do so at their earliest convenience. The changes for integration with API keys v1 are as follows:

- The field ``user_authorized`` is now required to perform person checks. This field indicates the API user has authorization to perform the check in compliance with data protection law.
- The field ``homonym_scores`` is no longer included in our person check response as its results are already included in the body of the check and keeping them duplicated is generating unnecessary confusion.


# API composition

## Endpoints

- **Check endpoints**: Provide an easy way to create and search for a background check. They also allow inserting groups of checks into reports. Each check contains scores, datasets and databases.
 
```plain
https://api.truora.com/v1/checks
```

- **Report endpoints**: Support batch uploads and grouping multiple checks together. Excel and .csv files are supported for batch uploads.
 
```plain
https://api.truora.com/v1/reports
```

- **Configuration endpoints**: Allows personalizing data sets and scores for customized background checks.

```plain
https://api.truora.com/v1/config
```

- **Continuous check endpoints**: Allows creating recurring checks and get notified whenever a change in the check score occurs.

```plain
https://api.truora.com/v1/continuous_checks
```

- **Behavior endpoints**: Allows sharing anonymous feedback about a person behavior when interacting with the company.

```plain
https://api.truora.com/v1/behaviour
```

- **Hooks endpoints**: Allows sending notifications via requests to your service or another third-party service whenever certain events occur.

```plain
https://api.truora.com/v1/hooks
```

## Datasets

Categories that group the resulting information for background checks from databases are called datasets. Datasets are divided in:

- **Personal identity**: Corroborates the existence and validates personal identity documents. 

- **Criminal record**: Checks for crimes according to each country penal code or criminal code. Keep in mind that data aged less than 10 years is usually more consistent.

- **Legal background**: Checks for lawsuits filed. Keep in mind that data aged less than 10 years is usually more consistent.

- **International background**: Checks international lists for crimes related to identity theft, money laundering, terrorist financing, and high crimes.

- **Professional background**: Checks professional regulatory entities for relevant information.

- **Affiliations and insurances**: Checks the history and status of social security affiliations.

- **Alert in media**: Checks major media agencies for relevant news related to violent actions.    

- **Vehicle information**: Checks for the physical characteristics of the vehicle, technical status, insurance history, and other relevant information.

- **Traffic fines**: Checks for outstanding traffic fines.

- **Driving licenses**: Shows information relevant to the driver. Such as license status and driver certificates.

- **Business background**: Checks for business status, legal and criminal history, and other relevant information.

- **Taxes and Finances**: Checks for the information related to personal finances, liabilities, and taxes.

## Requests Format

The POST requests receive a body that must be encoded in `www-x-form-urlencoded`, for instance:

```plain
type=person&national_id=123456&country=CO
```

The responses are always encoded in `JSON` format.

## Errors

Whenever there is an error, a JSON with the following format is returned:

```json
{
    "code": <Truora error code>,
    "http_code": <The HTTP status of the response>,
    "message": <The error message>
}
```

for instance:

```json
{
    "code": 10404,
    "http_code": 404,
    "message": "The Check was not found"
}
```

## SDKs

If your favorite language was not on the next list, You can use our [OpenAPI 3 spec](https://docs.truora.com/openapi.json) to generate it using the [Open API Generator](https://openapi-generator.tech/docs/installation).

To download the SDK click on the desired programming language:

- [C# .Net Core](https://truora-sdk.s3.amazonaws.com/checks/checks_csharp-netcore_latest.zip)

- [Elixir](https://truora-sdk.s3.amazonaws.com/checks/checks_elixir_latest.zip)

- [Go](https://truora-sdk.s3.amazonaws.com/checks/checks_go_latest.zip)

- [Java](https://truora-sdk.s3.amazonaws.com/checks/checks_java_latest.zip)

- [JavaScript](https://truora-sdk.s3.amazonaws.com/checks/checks_javascript_latest.zip)

- [Objc](https://truora-sdk.s3.amazonaws.com/checks/checks_objc_latest.zip)

- [Php](https://truora-sdk.s3.amazonaws.com/checks/checks_php_latest.zip)

- [Python](https://truora-sdk.s3.amazonaws.com/checks/checks_python_latest.zip)

- [Ruby](https://truora-sdk.s3.amazonaws.com/checks/checks_ruby_latest.zip)

You can see the full list of supported platforms here:

https://openapi-generator.tech/docs/generators

Base URLs:

* <a href="https://api.truora.com">https://api.truora.com</a> - The main Truora API domain

<a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:api@truora.com">Truora API Team</a> 
Web: <a href="https://www.truora.com">Truora API Team</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT License</a>

# Authentication

* API Key (api-key)
    - Parameter Name: **Truora-API-Key**, in: header. To authenticate a request, the `Truora-API-Key` header must be provided along with the user API key.

An API key is a unique [**JWT**](https://en.wikipedia.org/wiki/JSON_Web_Token) linked to a user account.

<h1 id="checks-api-checks">checks</h1>

Allows you to create and retrieve background checks. Consults multiple databases and delivers a comprehensive set of information to help assess the reliability of a person, vehicle, or company.

## List Checks

<a id="opIdlistChecks"></a>

> Code samples

```bash
curl https://example.com/v1/checks \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/checks`

Lists the existing checks in the account or in a specified report.

<h3 id="list-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_key|query|string|false|Start key value for the pagination|
|report_id|query|string|false|Report id checks to be returned|

> Example responses

> 200 Response

```json
{
  "check": {
    "check_id": "CHKd8bf0b996552777f4cde0b966ccdfe65",
    "country": "BR",
    "creation_date": "2020-02-24T18:13:08.373Z",
    "homonym_score": 0,
    "id_score": 0,
    "previous_check": "CHKc532a8c0f5ab451ee7b92c37ac379302",
    "score": -1,
    "status": "in_progress",
    "tax_id": "26.002.101/0001-95",
    "type": "company",
    "update_date": "2020-02-24T18:13:57.420Z"
  },
  "details": "/v1/checks/CHKd8bf0b996552777f4cde0b966ccdfe65/details",
  "self": "/v1/checks/CHKd8bf0b996552777f4cde0b966ccdfe65"
}
```

<h3 id="list-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ChecksOutput](#schemachecksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Create a background check

<a id="opIdcreateCheck"></a>

> Code samples

```bash
curl https://example.com/v1/checks \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`POST /v1/checks`

Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.

If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.

| Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
|:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
| Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
| Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
| Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
| Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
| Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
| Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
| Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
| Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
| International<br>ALL | name* | name* | company_name* | N/A | N/A |

(*) Required field

> Body parameter

```yaml
"country=co&national_id=29478657&type=person"
```

<h3 id="create-a-background-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Truora-Priority|header|string|false|Describes the background check priority. The amount of high priority checks is limited by country. Medium priority is used by default|
|body|body|[CreateCheckInput](#schemacreatecheckinput)|true|Request body create a background check|
|» birth_certificate|body|string|false|Person birth certificate|
|» company_name|body|string|false|Company name "Don't forget this required field to complete background checks in Brazil"|
|» country|body|string|true|Document country|
|» date_of_birth|body|string(date)|false|Person birthdate. This date is used to get some additional information about a person and to filter homonyms in some cases. YYYY-MM-DD format, Required for complete background checks in Brazil|
|» diplomatic_id|body|string|false|Diplomatic ID|
|» driver_license|body|string|false|Driver's license number|
|» escrow|body|string|false|Colombian escrow|
|» first_name|body|string|false|Person or entity first name. If the document type and number are not provided, the report might include homonyms. Required when searching by first name, Required in order to get complete background checks in Brazil|
|» force_creation|body|boolean|false|Forces a new background check creation when true. Reuses recently created background checks otherwise|
|» foreign_id|body|string|false|Person foreign ID|
|» issue_date|body|string(date)|false|Person document issue date in "YYYY-mm-dd" format (e.g. 2008-12-31) . This date is used to get some additional information about a person in some cases|
|» last_name|body|string|false|Person or entity last name. If the document type and number are not provided, the report might include homonyms. Required when searching by last name. Required in order to get complete background checks in Brazil|
|» license_plate|body|string|false|Vehicle license plate|
|» national_id|body|string|false|National ID|
|» native_country|body|string|false|Country of birth|
|» owner_document_id|body|string|false|National ID of the vehicle owner|
|» owner_document_type|body|string|false|National ID, foreign ID, or tax ID|
|» passport|body|string|false|Person passport|
|» payment_date|body|string(date)|false|Payment day of a vehicle circulation permit (Chile only)|
|» pep|body|string|false|ID for Venezuelans working in Colombia|
|» phone_number|body|string|false|Person phone number. Required by law to notify the person their background is being checked|
|» professional_card|body|string|false|Professional ID card|
|» ptp|body|string|false|ID for Venezuelans working in Peru|
|» region|body|string|false|Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.|
|» report_id|body|string|false|Report ID the background check will be inserted into|
|» state_id|body|string|false| Used for the RG (Registro Geral) identification in Brazil. This identification has different formats according to the state that issues the document. It can have numbers and letters but other characters (- * , . ) are omitted, Required in order to get complete background checks in Brazil|
|» tax_id|body|string|false|Company ID used for tax payments|
|» type|body|string|true|Background check type|
|» user_authorized|body|boolean|false|Indicates whether the person subject to the validation authorized the validation. Must be true in order to proceed [Required for API key V1 or later]|
|» vehicle_id|body|string|false|Vehicle license plate|
|» verification_code|body|string|false|Verification code registered for criminal records in Peru only|
|» watch|body|string|false|Indicates whether the check score is to be periodically revised and its frequency. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks. Ignore this field if the check is only to be performed once|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Truora-Priority|low|
|Truora-Priority|medium|
|Truora-Priority|high|
|» country|ALL|
|» country|BR|
|» country|CL|
|» country|CO|
|» country|CR|
|» country|EC|
|» country|MX|
|» country|PE|
|» country|AR|
|» region|DF|
|» region|AC|
|» region|AL|
|» region|AP|
|» region|AM|
|» region|BA|
|» region|CE|
|» region|ES|
|» region|GO|
|» region|MA|
|» region|MT|
|» region|MS|
|» region|MG|
|» region|PA|
|» region|PB|
|» region|PR|
|» region|PE|
|» region|PI|
|» region|RJ|
|» region|RN|
|» region|RS|
|» region|RO|
|» region|RR|
|» region|SC|
|» region|SP|
|» region|SE|
|» region|TO|
|» type|person|
|» type|vehicle|
|» type|company|
|» type|custom_type_name|

> Example responses

> 201 Response

```json
{
  "check": {
    "check_id": "CHKf4d6e83984aa19acb130171a4392be0b",
    "country": "BR",
    "creation_date": "2020-03-02T21:21:47.115Z",
    "homonym_score": 0,
    "id_score": 0,
    "previous_check": "CHKcd35e792e3d8b623bd6b512e763312ff",
    "score": -1,
    "status": "not_started",
    "tax_id": "32.589.181/0001-20",
    "type": "company",
    "update_date": "2020-03-02T21:21:47.196Z"
  },
  "details": "/v1/checks/CHKf4d6e83984aa19acb130171a4392be0b/details",
  "self": "/v1/checks/CHKf4d6e83984aa19acb130171a4392be0b"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-background-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Click to view/hide response structure|[CheckOutput](#schemacheckoutput)|
|400|Bad Request|Validation error, at least one of the parameters was invalid.|[Error](#schemaerror)|
|429|Too Many Requests|There are too many high priority background checks being processed. Please try again later.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Get Health Dashboard

<a id="opIdGetHealthDashboard"></a>

> Code samples

```bash
curl https://example.com/v1/checks/health \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/checks/health`

Get the status of a database

<h3 id="get-health-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|Country in ISO 3166, uppercase|
|unixTimestampSeconds|query|string|false|Unix timestamp in seconds. Send a day timestamp to view the database hourly status for that day or send the current time to know the current database status|
|unixtimezoneOffsetSeconds|query|string|false|Offset between the local time and the UTC time in seconds. (e.g., Colombia is at UTC -18000 seconds)<br>|

> Example responses

> 200 Response

```json
[
  {
    "data_sets": [
      "string"
    ],
    "database_id": "string",
    "database_name": "string",
    "hourly_status": [
      "string"
    ]
  }
]
```

<h3 id="get-health-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-health-dashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Database](#schemadatabase)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Get Background Check

<a id="opIdgetCheck"></a>

> Code samples

```bash
curl https://example.com/v1/checks/string \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/checks/{check_id}`

Returns the results of the check that matches the ID provided, complete with a set of scores explained below.

### Scores:


- **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


- **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk. 


- **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.

Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.

<h3 id="get-background-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_id|path|string|true|Check ID|

> Example responses

> 200 Response

```json
{
  "check": {
    "check_id": "CHKff10acc81bf97cbbe6510e07ab1442bf",
    "company_summary": {
      "company_status": "not_found"
    },
    "country": "BR",
    "creation_date": "2020-02-24T18:20:46.846Z",
    "driver_license": "146.467.797-22",
    "homonym_score": 1,
    "homonym_scores": [
      {
        "data_set": "vehicle_information",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "personal_identity",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "traffic_fines",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "driving_licenses",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "criminal_record",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "international_background",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "behavior",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "vehicle_permits",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      }
    ],
    "id_score": 1,
    "score": 1,
    "scores": [
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "vehicle_information",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "personal_identity",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "traffic_fines",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "driving_licenses",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "criminal_record",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "international_background",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "behavior",
        "result": "pending",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "vehicle_permits",
        "result": "pending",
        "score": 1,
        "severity": "none"
      }
    ],
    "status": "in_progress",
    "statuses": [
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-se",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-go",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-rn",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ce",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-pe",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-rs",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-es",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-al",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ac",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ba",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-bnmp",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ms",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-df",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-am",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-sp",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-tjpa-turmais-recursais",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-sc",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-mt",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ma",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-ap",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-rj",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-mg",
        "status": "not_started"
      },
      {
        "data_set": "criminal_record",
        "database_name": "br-bgc-to",
        "status": "not_started"
      },
      {
        "database_id": "DBI5a155dfdb55d96a9ea00797ab5cf3fd88eac5910",
        "database_name": "Office of Foreign Assets Control",
        "invalid_inputs": [
          "national_id",
          "tax_id",
          "passport",
          "foreign_id"
        ],
        "status": "skipped"
      },
      {
        "data_set": "international_background",
        "database_name": "dea",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "bid",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "fbi",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "interpol",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "worldbankdebarredfirms",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "dss",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "federal-bureau-of-prisons",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "fsf",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "most-wanted-fugitives-eu",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "unsc",
        "status": "not_started"
      },
      {
        "data_set": "international_background",
        "database_name": "csl",
        "status": "not_started"
      },
      {
        "data_set": "personal_identity",
        "database_name": "br-bgc-id",
        "status": "not_started"
      },
      {
        "data_set": "personal_identity",
        "database_name": "cpf-situation",
        "status": "not_started"
      }
    ],
    "summary": {
      "identity_status": "not_found"
    },
    "type": "vehicle",
    "update_date": "2020-02-24T18:20:57.127Z",
    "vehicle_summary": {
      "vehicle_status": "not_found"
    }
  },
  "details": "/v1/checks/CHKff10acc81bf97cbbe6510e07ab1442bf/details",
  "self": "/v1/checks/CHKff10acc81bf97cbbe6510e07ab1442bf"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-background-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CheckOutput](#schemacheckoutput)|
|404|Not Found|The Check was not found with the given ID|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## List Check Details

<a id="opIdlistCheckDetails"></a>

> Code samples

```bash
curl https://example.com/v1/checks/string/details \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/checks/{check_id}/details`

Lists all details associated with a Check. It can be paginated.

<h3 id="list-check-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_key|query|string|false|Start key value for the pagination|
|lang|query|string|false|This parameter is used to specify the language wanted for details, if not specified details will come in their original language.|
|check_id|path|string|true|ID of the Check|

> Example responses

> 200 Response

```json
{
  "check_id": "CHK0c6d9af79dce8e4c949ef7865c4d21cd",
  "data_set": "criminal_record",
  "database_name": "BGC Brasil Rio de Janeiro",
  "depth": 0,
  "document_type": "",
  "found_company_name": "",
  "found_date_of_birth": "",
  "found_first_name": "",
  "found_last_name": "",
  "found_rfc": "",
  "id": "DTLba7c9d70f147a65bf1512d352f5b9517",
  "identity_result": "",
  "identity_state": "",
  "result": "found",
  "route": "person",
  "severity": "high",
  "tables": [
    {
      "rows": [
        {
          "cells": [
            {
              "label": "Aprovado",
              "value": "Sim"
            },
            {
              "label": "Inconclusivo",
              "value": "Não"
            },
            {
              "label": "Processamento Finalizado em",
              "value": "2019-09-19T16:31:31.000Z"
            }
          ]
        }
      ],
      "title": "Rio de Janeiro: Justiça Federal Consulta Processual"
    },
    {
      "rows": [
        {
          "cells": [
            {
              "label": "Aprovado",
              "value": "Não"
            },
            {
              "label": "Inconclusivo",
              "value": "Não"
            },
            {
              "label": "Processamento Finalizado em",
              "value": "2019-09-19T16:31:38.000Z"
            }
          ]
        }
      ],
      "title": "Rio de Janeiro: Tribunal de Justiça"
    },
    {
      "rows": [
        {
          "cells": [
            {
              "label": "Ligação",
              "value": "http://www4.tjrj.jus.br/consultaProcessoWebV2/consultaProc.do?v=2&numProcesso=2002.203.004751-2&FLAGNOME=S&tipoConsulta=0&back=1&PORTAL=1&v=2"
            },
            {
              "label": "Tipo",
              "value": "0004883-90.2002.8.19.0203(2002.203.004751-2)"
            },
            {
              "label": "Risco",
              "value": "Sim"
            }
          ]
        },
        {
          "cells": [
            {
              "label": "Ligação",
              "value": "http://www4.tjrj.jus.br/consultaProcessoWebV2/consultaProc.do?v=2&numProcesso=2017.030.003300-5&FLAGNOME=S&tipoConsulta=0&back=1&PORTAL=1&v=2"
            },
            {
              "label": "Tipo",
              "value": "0003317-18.2017.8.19.0030"
            },
            {
              "label": "Risco",
              "value": "Não"
            }
          ]
        }
      ],
      "title": "Rio de Janeiro: Tribunal de Justiça resultados"
    }
  ],
  "update_date": "2019-10-28T19:03:38.814Z"
}
```

<h3 id="list-check-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CheckDetailsOutput](#schemacheckdetailsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-reports">reports</h1>

The reports API let you group checks into a single report and download the result as a PDF or CSV file.
It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.

## List Reports

<a id="opIdlistReports"></a>

> Code samples

```bash
curl https://example.com/v1/reports \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/reports`

Lists all reports asociated with the client or user requesting.

<h3 id="list-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_key|query|string|false|Start value for pagination.|
|username|query|string|false|filter reports created by the specified username|

> Example responses

> 200 Response

```json
{
  "checks": "/v1/checks?report_id=RPT26d9ce3f80c5f10e4e7dad59560da4c9",
  "report": {
    "created_by": "truorateam-truorakey",
    "creation_date": "2020-02-27T21:51:20.000Z",
    "has_data": true,
    "id": "RPT26d9ce3f80c5f10e4e7dad59560da4c9",
    "invalid_checks_count": 1,
    "name": "JANETTE ALLE TAMER",
    "size": 1,
    "update_date": "2020-02-27T21:52:05.000Z"
  },
  "self": "/v1/reports/RPT26d9ce3f80c5f10e4e7dad59560da4c9"
}
```

<h3 id="list-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response containing list of reports|[ReportsOutput](#schemareportsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Create Report

<a id="opIdcreateReport"></a>

> Code samples

```bash
curl https://example.com/v1/reports \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'name=string'
```

`POST /v1/reports`

Creates a Report to which it is possible to associate multiple Checks.

> Body parameter

```yaml
name: string
```

<h3 id="create-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateReportInput](#schemacreatereportinput)|true|The params required to create a Report|
|» name|body|string|true|Report name|

> Example responses

> 201 Response

```json
{
  "checks": "/v1/checks?report_id=RPT8b63304ee061518f7118f6312a4b263f",
  "report": {
    "created_by": "truorateam-truorakey",
    "creation_date": "2020-02-28T16:13:25.000Z",
    "has_data": false,
    "id": "RPT8b63304ee061518f7118f6312a4b263f",
    "name": "RODRIGO MILET CARDOSO DOS SANTOS",
    "update_date": "2020-02-28T16:13:25.000Z"
  },
  "self": "/v1/reports/RPT8b63304ee061518f7118f6312a4b263f"
}
```

> 400 Response

```json
{
  "checks": "string",
  "report": {
    "created_by": "string",
    "created_checks_count": 0,
    "creation_date": "1970-01-01T00:00:00Z",
    "has_data": true,
    "id": "string",
    "invalid_checks_count": 0,
    "name": "string",
    "size": 0,
    "update_date": "1970-01-01T00:00:00Z"
  },
  "self": "string"
}
```

<h3 id="create-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ReportOutput](#schemareportoutput)|
|400|Bad Request|The Report couldn't be created|[ReportOutput](#schemareportoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Get Report

<a id="opIdgetReport"></a>

> Code samples

```bash
curl https://example.com/v1/reports/string \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/reports/{report_id}`

Returns a report with the given ID.

<h3 id="get-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|The ID of the Report|

> Example responses

> 200 Response

```json
{
  "checks": "/v1/checks?report_id=RPTd8424963678a86f605f1a77cd126c9aa",
  "report": {
    "created_by": "truorateam-truorakey",
    "created_checks_count": 1,
    "creation_date": "2020-02-27T12:54:53.000Z",
    "has_data": true,
    "id": "RPTd8424963678a86f605f1a77cd126c9aa",
    "name": "D1",
    "size": 1,
    "update_date": "2020-02-27T12:55:46.000Z"
  },
  "self": "/v1/reports/RPTd8424963678a86f605f1a77cd126c9aa"
}
```

<h3 id="get-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReportOutput](#schemareportoutput)|
|404|Not Found|The Report was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Batch Upload

<a id="opIdbatchUpload"></a>

> Code samples

```bash
curl https://example.com/v1/reports/string/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -F 'file=["string"]'
```

`POST /v1/reports/{report_id}/upload`

Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:

**Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)

**Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)

**Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)

Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.

> Body parameter

```yaml
file:
  - string
```

<h3 id="batch-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|The ID of the Report|
|body|body|[BatchUploadInput](#schemabatchuploadinput)|true|The params required to batch upload|
|» file|body|[string(binary)]|true|Uploaded file name|

> Example responses

> 200 Response

```json
{
  "checks": "string",
  "report": {
    "created_by": "string",
    "created_checks_count": 0,
    "creation_date": "1970-01-01T00:00:00Z",
    "has_data": true,
    "id": "string",
    "invalid_checks_count": 0,
    "name": "string",
    "size": 0,
    "update_date": "1970-01-01T00:00:00Z"
  },
  "self": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="batch-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReportOutput](#schemareportoutput)|
|400|Bad Request|Error uploading the items|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-custom-type">custom-type</h1>

The Custom Type API allows the creation of new products so only desired datasets are included in background checks.

## Score Configuration
The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.


## List Score Configurations

<a id="opIdlistScoreConfigs"></a>

> Code samples

```bash
curl https://example.com/v1/config \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/config`

Lists the custom score configurations of the associated account.

<h3 id="list-score-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_key|query|string|false|The key to start the pagination|

> Example responses

> 200 Response

```json
{
  "client_id": "b6tcorivshibaguog4m4v9ttf",
  "config_id": "CFG3e9d1fadeb24b4c0ea50aacf72d3cd8d",
  "provider_configs": {},
  "score_configs": {
    "BR": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "dem": [
        {
          "data_set": "legal_background",
          "weight": 0.2
        },
        {
          "data_set": "vehicle_information",
          "weight": 0.1
        },
        {
          "data_set": "personal_identity",
          "weight": 0.4
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        }
      ],
      "demo": [
        {
          "data_set": "vehicle_information",
          "weight": 0.1
        },
        {
          "data_set": "personal_identity",
          "weight": 0.4
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "frubana-company": [
        {
          "data_set": "taxes_and_finances",
          "weight": 0.5
        },
        {
          "data_set": "business_background",
          "weight": 0.5
        }
      ]
    },
    "CL": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ]
    },
    "CO": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "affiliation": [
        {
          "data_set": "personal_identity",
          "weight": 0
        },
        {
          "data_set": "affiliations_and_insurances",
          "weight": 1
        }
      ],
      "beat-demo": [
        {
          "data_set": "personal_identity",
          "weight": 1
        }
      ],
      "demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.5
        }
      ]
    },
    "MX": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "beat-demo": [
        {
          "data_set": "personal_identity",
          "weight": 1
        }
      ],
      "beat-identity-alert": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "alert_in_media",
          "weight": 0.5
        }
      ]
    }
  }
}
```

<h3 id="list-score-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScoreConfigsOutput](#schemascoreconfigsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Update Custom Type

<a id="opIdUpdateCustomType"></a>

> Code samples

```bash
curl https://example.com/v1/config \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'country=ALL&dataset_affiliations_and_insurances=0&dataset_alert_in_media=0&dataset_business_background=0&dataset_criminal_record=0&dataset_driving_licenses=0&dataset_international_background=0&dataset_legal_background=0&dataset_personal_identity=0&dataset_professional_background=0&dataset_taxes_and_finances=0&dataset_traffic_fines=0&dataset_vehicle_information=0&dataset_vehicle_permits=0&type=string'
```

`PUT /v1/config`

Allows updating a custom type. Person, vehicle, and company types are not modifiable

> Body parameter

```yaml
country: ALL
dataset_affiliations_and_insurances: 0
dataset_alert_in_media: 0
dataset_business_background: 0
dataset_criminal_record: 0
dataset_driving_licenses: 0
dataset_international_background: 0
dataset_legal_background: 0
dataset_personal_identity: 0
dataset_professional_background: 0
dataset_taxes_and_finances: 0
dataset_traffic_fines: 0
dataset_vehicle_information: 0
dataset_vehicle_permits: 0
type: string
```

<h3 id="update-custom-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateConfigInput](#schemacreateconfiginput)|true|none|
|» country|body|string|true|Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases|
|» dataset_affiliations_and_insurances|body|number(float)|false|Affiliation and insurance weight for score calculation. From 0 to 1|
|» dataset_alert_in_media|body|number(float)|false|Alert in media weight for score calculation. From 0 to 1|
|» dataset_business_background|body|number(float)|false|Business background weight for score calculation. From 0 to 1|
|» dataset_criminal_record|body|number(float)|false|Criminal record weight for score calculation. From 0 to 1|
|» dataset_driving_licenses|body|number(float)|false|Driving license weight for score calculation. From 0 to 1|
|» dataset_international_background|body|number(float)|false|International background weight for score calculation. From 0 to 1|
|» dataset_legal_background|body|number(float)|false|Legal background weight for score calculation. From 0 to 1|
|» dataset_personal_identity|body|number(float)|false|Personal identity weight for score calculation. From 0 to 1|
|» dataset_professional_background|body|number(float)|false|Professional background weight for score calculation. From 0 to 1|
|» dataset_taxes_and_finances|body|number(float)|false|Taxes and financial background weight for score calculation. From 0 to 1|
|» dataset_traffic_fines|body|number(float)|false|Traffic fines weight for score calculation. From 0 to 1|
|» dataset_vehicle_information|body|number(float)|false|Vehicle information weight for score calculation. From 0 to 1|
|» dataset_vehicle_permits|body|number(float)|false|Vehicle certificate background weight for score calculation. From 0 to 1|
|» type|body|string|true|Score configuration name. It cannot be person, vehicle, or company|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» country|ALL|
|» country|BR|
|» country|CL|
|» country|CO|
|» country|CR|
|» country|EC|
|» country|MX|
|» country|PE|
|» country|AR|

<h3 id="update-custom-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Create Score Configurations

<a id="opIdcreateScoreConfig"></a>

> Code samples

```bash
curl https://example.com/v1/config \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'country=ALL&dataset_affiliations_and_insurances=0&dataset_alert_in_media=0&dataset_business_background=0&dataset_criminal_record=0&dataset_driving_licenses=0&dataset_international_background=0&dataset_legal_background=0&dataset_personal_identity=0&dataset_professional_background=0&dataset_taxes_and_finances=0&dataset_traffic_fines=0&dataset_vehicle_information=0&dataset_vehicle_permits=0&type=string'
```

`POST /v1/config`

Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.

> Body parameter

```yaml
country: ALL
dataset_affiliations_and_insurances: 0
dataset_alert_in_media: 0
dataset_business_background: 0
dataset_criminal_record: 0
dataset_driving_licenses: 0
dataset_international_background: 0
dataset_legal_background: 0
dataset_personal_identity: 0
dataset_professional_background: 0
dataset_taxes_and_finances: 0
dataset_traffic_fines: 0
dataset_vehicle_information: 0
dataset_vehicle_permits: 0
type: string
```

<h3 id="create-score-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateConfigInput](#schemacreateconfiginput)|true|none|
|» country|body|string|true|Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases|
|» dataset_affiliations_and_insurances|body|number(float)|false|Affiliation and insurance weight for score calculation. From 0 to 1|
|» dataset_alert_in_media|body|number(float)|false|Alert in media weight for score calculation. From 0 to 1|
|» dataset_business_background|body|number(float)|false|Business background weight for score calculation. From 0 to 1|
|» dataset_criminal_record|body|number(float)|false|Criminal record weight for score calculation. From 0 to 1|
|» dataset_driving_licenses|body|number(float)|false|Driving license weight for score calculation. From 0 to 1|
|» dataset_international_background|body|number(float)|false|International background weight for score calculation. From 0 to 1|
|» dataset_legal_background|body|number(float)|false|Legal background weight for score calculation. From 0 to 1|
|» dataset_personal_identity|body|number(float)|false|Personal identity weight for score calculation. From 0 to 1|
|» dataset_professional_background|body|number(float)|false|Professional background weight for score calculation. From 0 to 1|
|» dataset_taxes_and_finances|body|number(float)|false|Taxes and financial background weight for score calculation. From 0 to 1|
|» dataset_traffic_fines|body|number(float)|false|Traffic fines weight for score calculation. From 0 to 1|
|» dataset_vehicle_information|body|number(float)|false|Vehicle information weight for score calculation. From 0 to 1|
|» dataset_vehicle_permits|body|number(float)|false|Vehicle certificate background weight for score calculation. From 0 to 1|
|» type|body|string|true|Score configuration name. It cannot be person, vehicle, or company|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» country|ALL|
|» country|BR|
|» country|CL|
|» country|CO|
|» country|CR|
|» country|EC|
|» country|MX|
|» country|PE|
|» country|AR|

> Example responses

> 201 Response

```json
{
  "client_id": "b6tcorivshibaguog4m4v9ttf",
  "config_id": "CFG3e9d1fadeb24b4c0ea50aacf72d3cd8d",
  "provider_configs": {},
  "score_configs": {
    "BR": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "demo": [
        {
          "data_set": "vehicle_information",
          "weight": 0.1
        },
        {
          "data_set": "personal_identity",
          "weight": 0.4
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "frubana-company": [
        {
          "data_set": "taxes_and_finances",
          "weight": 0.5
        },
        {
          "data_set": "business_background",
          "weight": 0.5
        }
      ]
    },
    "CL": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ]
    },
    "CO": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "affiliation": [
        {
          "data_set": "personal_identity",
          "weight": 0
        },
        {
          "data_set": "affiliations_and_insurances",
          "weight": 1
        }
      ],
      "beat-demo": [
        {
          "data_set": "personal_identity",
          "weight": 1
        }
      ],
      "demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.5
        }
      ]
    },
    "MX": {
      "Demo": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "traffic_fines",
          "weight": 0.3
        },
        {
          "data_set": "legal_background",
          "weight": 0.2
        }
      ],
      "beat-demo": [
        {
          "data_set": "personal_identity",
          "weight": 1
        }
      ],
      "beat-identity-alert": [
        {
          "data_set": "personal_identity",
          "weight": 0.5
        },
        {
          "data_set": "alert_in_media",
          "weight": 0.5
        }
      ]
    }
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-score-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ScoreConfigOutput](#schemascoreconfigoutput)|
|400|Bad Request|Validation error when creating the ScoreConfig|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Delete Custom Type

<a id="opIdDeleteCustomType"></a>

> Code samples

```bash
curl 'https://example.com/v1/config?type=string' \
  -X DELETE \
  -H "Truora-API-Key: ${API_KEY}"
```

`DELETE /v1/config`

Allows deleting a custom type. Person, vehicle, and company types cannot be deleted

<h3 id="delete-custom-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Name of the custom type to be deleted|
|country|query|string|false|Country where the custom type is valid|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|BR|
|country|CL|
|country|CO|
|country|CR|
|country|EC|
|country|MX|
|country|PE|
|country|ALL|

<h3 id="delete-custom-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-behavior">behavior</h1>

Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.

## Report Behavior

<a id="opIdreportBehavior"></a>

> Code samples

```bash
curl https://example.com/v1/behavior \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'birth_date=1989-08-18T00%3A00%3A00.000Z&client_id=5E3T34TAWEQE&country=CO&creation_date=2020-03-09T00%3A00%3A00.000Z&document_id=1116247495&document_type=national-id&email=test%40truora.com&feedback_date=2017-02-13T00%3A00%3A00.000Z&feedback_id=314159&first_name=Pablo&last_name=G%C3%B3mez&phone_number=3184223113&reason=Good%20Reputation'
```

`POST /v1/behavior`

Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.

### Reasons to report a person

<table>
  <tr>
    <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
    <td>Rape, Drug Dealing, Sexual Harassment</td>
  </tr>
  <tr>
    <td><center><b>High</b><br>(Score: 0.8)</td>
    <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
  </tr>
  <tr>
    <td><center><b>Medium</b><br>(Score: 0.6)</td>
    <td>Absences</td>
  </tr>
  <tr>
    <td><center><b>Low</b><br>(Score: 0.4)</td>
    <td>Tardiness, Confidentiality Breach</td>
  </tr>
  <tr>
    <td><center><b>None</b><br>(Score: 0)</td>
    <td>Good Reputation</td>
  </tr>
  <tr>
    <td><center><b>Unknown</b></td>
    <td>No information</td>
  </tr>
</table>

**NOTE:** If the reason of your report is not here, please contact Truora support team.


> Body parameter

```yaml
birth_date: "1989-08-18T00:00:00.000Z"
client_id: "5E3T34TAWEQE"
country: CO
creation_date: "2020-03-09T00:00:00.000Z"
document_id: "1116247495"
document_type: national-id
email: test@truora.com
feedback_date: "2017-02-13T00:00:00.000Z"
feedback_id: "314159"
first_name: Pablo
last_name: "Gómez"
phone_number: "3184223113"
reason: Good Reputation
```

<h3 id="report-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateBehaviorInput](#schemacreatebehaviorinput)|true|The params necessary to create a Behaviour item|
|» birth_date|body|string(date-time)|true|Birth date of reported person|
|» country|body|string|true|Document country|
|» document_id|body|string|true|Person document ID|
|» document_type|body|string|true|Document type associated with the background check|
|» email|body|string|true|Reported person e-mail|
|» feedback_date|body|string(date-time)|true|Behavior report date|
|» first_name|body|string|true|Person first name|
|» last_name|body|string|true|Person last name|
|» phone_number|body|string|false|Phone number of the reported person|
|» reason|body|string|true|Report reason|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» country|co|
|» country|ve|
|» country|cl|
|» country|mx|
|» country|pe|
|» country|do|
|» country|sv|
|» country|gt|
|» country|bo|
|» country|cr|
|» country|ec|
|» country|pa|
|» country|br|
|» document_type|national-id|
|» document_type|passport|
|» document_type|foreign-id|
|» document_type|nit|
|» document_type|diplomatic-id|
|» document_type|civil-registration|
|» document_type|identity-card|
|» document_type|foreigner-card|
|» document_type|professional-card|
|» document_type|military-card|
|» document_type|pep|
|» document_type|nis|
|» document_type|dni|
|» document_type|rui|
|» document_type|license-plate|
|» document_type|query|
|» document_type|name|
|» document_type|rut|
|» document_type|nuip|
|» document_type|foreign-societies|
|» document_type|escrow|
|» document_type|individual-registration|
|» document_type|general-registration|
|» document_type|curp|
|» document_type|dui|
|» document_type|driver-license|
|» document_type|ruc|
|» reason|rape|
|» reason|drug-dealer|
|» reason|sexual-harassment|
|» reason|theft|
|» reason|fights|
|» reason|aggressive-behaviour|
|» reason|identity-fraud|
|» reason|drunk|
|» reason|drug-possession|
|» reason|absences|
|» reason|tardiness|
|» reason|confidentiality-breach|
|» reason|good-reputation|

> Example responses

> 201 Response

```json
{
  "behavior": [
    {
      "birth_date": "1970-01-01",
      "country": "co",
      "creation_date": "1970-01-01T00:00:00Z",
      "document_id": "string",
      "document_type": "national-id",
      "email": "string",
      "feedback_date": "1970-01-01",
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "reason": "string"
    }
  ],
  "self": "string"
}
```

> 400 Response

```json
[
  {
    "code": "string",
    "message": "string"
  }
]
```

<h3 id="report-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BehaviourOutput](#schemabehaviouroutput)|
|400|Bad Request|Error uploading the items|Inline|

<h3 id="report-behavior-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-hooks">hooks</h1>

Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.

## Lists all hooks

<a id="opIdlistHook"></a>

> Code samples

```bash
curl https://example.com/v1/hooks \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/hooks`

Lists all the configured hooks in your account.

> Example responses

> 200 Response

```json
{
  "hooks": [
    {
      "event_type": "check",
      "hook_id": "HOK4c344e6fe18f2937da43dd67ad5a5917",
      "signing_key": "572cd5ad35633c8fb5898799ff15d4d4b0e1544b5b56ecb6f725e39b27d2e99f",
      "status": "enabled",
      "subscriber": {
        "address": "lmanrique@truora.com",
        "name": "luis"
      },
      "subscriber_type": "email"
    },
    {
      "actions": [
        "finished"
      ],
      "event_type": "check",
      "hook_id": "HOK78eb7ee0b3cc8dffbefffaf17c1953eb",
      "signing_key": "3e6f86640bcde25051fc3f7666d4b6543c62e16d94831e7f64510807dd313e50",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://e72fbc04.ngrok.io"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKa016cef41a78e592192b3d9cd3cc6b14",
      "signing_key": "efcf09f57de9c4348ff01637aff1c07dcb49f9517376e3adcc41233a40986713",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKa241e9ad8e9836d98c3f88aa6db85adc",
      "signing_key": "f4c4dceb2b45f8e73943e029c834974810a2c6f3f748119c92d0e125a5f4e07b",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKb16a8af52d99acbe3b63bd81b4803763",
      "signing_key": "5db810ae8e3fad778c23c3521b550f0af75ce4f951a9e3540863495b39de545b",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKc66055d793bcec0b7cbe84cfcbde74d5",
      "signing_key": "2b5edf594ed6eca309616b4ebf59117333b03df9be00a59d49109a55b14f855f",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKdcf53e101ccc8c185801908393b7f584",
      "signing_key": "5f211c26df6232c409958dc3fe43f0f9b857bf03e323c07c7444f77f44524f4b",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "all",
      "hook_id": "HOKe36808b197e4eeb8fca2da3f134086be",
      "signing_key": "04eef08b79dec58292ae60cf610214070ca9b3a3e04311dfdaef69a5b4c862f7",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKe5e1d013e7b420c45d3fa97b5340c141",
      "signing_key": "0a201f99a38d51fe627448bdd141019bb634b83cd44013e9dfc4c7a2b16d9d2e",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    },
    {
      "event_type": "check",
      "hook_id": "HOKea1ad1c5ef5cbf730432980bb9cf3afd",
      "signing_key": "50f207610baf325134808d3173bd81f9497808703ee46e01cc0cb7264b873a03",
      "status": "enabled",
      "subscriber": {
        "http_method": "POST",
        "url": "https://truora.com/test"
      },
      "subscriber_type": "web"
    }
  ],
  "next": "",
  "self": "/v1/hooks"
}
```

<h3 id="lists-all-hooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[HookOutput](#schemahookoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Creates a hook subscription

<a id="opIdcreateHook"></a>

> Code samples

```bash
curl https://example.com/v1/hooks \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'client_id=b6tcorivshibaguog4m4v9ttf&event_type=check&hook_id=HOKa016cef41a78e592192b3d9cd3cc6b14&signing_key=efcf09f57de9c4348ff01637aff1c07dcb49f9517376e3adcc41233a40986713&status=enabled&subscriber=%7B%22http_method%22%3A%22POST%22%2C%22url%22%3A%22https%3A%2F%2Ftruora.com%2Ftest%22%7D&subscriber_type=web'
```

`POST /v1/hooks`

Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:

```
{
    "events": [
        {
            "event_action": "created",
            "event_type": "check",
            "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
            "object": {
                "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
                "country": "CO",
                "creation_date": "2020-04-01T23:00:30.581232281Z",
                "homonym_score": 0,
                "id_score": 0,
                "national_id": "1151959906",
                "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
                "score": -1,
                "status": "not_started",
                "type": "person",
                "update_date": "2020-04-01T23:00:30.680937413Z"
            },
            "timestamp": "2020-04-01T23:00:30Z",
            "version": "1.0"
        }
    ],
    "iat": 1585782031,
    "iss": "Truora"
}
```

Keep in mind that the object attribute varies depending on the event_type.

> Body parameter

```yaml
client_id: b6tcorivshibaguog4m4v9ttf
event_type: check
hook_id: HOKa016cef41a78e592192b3d9cd3cc6b14
signing_key: efcf09f57de9c4348ff01637aff1c07dcb49f9517376e3adcc41233a40986713
status: enabled
subscriber:
  http_method: POST
  url: "https://truora.com/test"
subscriber_type: web
```

<h3 id="creates-a-hook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateHookInput](#schemacreatehookinput)|true|Request body create a hook.|
|» actions|body|[string]|false|Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three|
|» event_type|body|string|true|The entity events the client wants to subscribe|
|» status|body|string|false|indicates whether the hook is active or not. enabled by default|
|» subscriber_address|body|string|false|Email address where the notification is to be sent. Required if subscriber_type was set to email|
|» subscriber_language|body|string|false|Language for the notification to be sent|
|» subscriber_name|body|string|false|Name of the person to be notified|
|» subscriber_type|body|string|true|A platform with an endpoint ready to process the information|
|» subscriber_url|body|string|false|URL where the notification is to be sent. Required only if subscriber_type is set to web|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_type|all|
|» event_type|check|
|» event_type|continuous_check|
|» status|enabled|
|» status|disabled|
|» subscriber_language|af|
|» subscriber_language|ar|
|» subscriber_language|ca|
|» subscriber_language|cs|
|» subscriber_language|da|
|» subscriber_language|de|
|» subscriber_language|el|
|» subscriber_language|en|
|» subscriber_language|es|
|» subscriber_language|fi|
|» subscriber_language|fr|
|» subscriber_language|he|
|» subscriber_language|hi|
|» subscriber_language|hr|
|» subscriber_language|hu|
|» subscriber_language|id|
|» subscriber_language|it|
|» subscriber_language|ja|
|» subscriber_language|ko|
|» subscriber_language|ms|
|» subscriber_language|nb|
|» subscriber_language|nl|
|» subscriber_language|pl|
|» subscriber_language|pt|
|» subscriber_language|pr-BR|
|» subscriber_language|ro|
|» subscriber_language|ru|
|» subscriber_language|sv|
|» subscriber_language|th|
|» subscriber_language|tl|
|» subscriber_language|tr|
|» subscriber_language|vi|
|» subscriber_language|zh|
|» subscriber_language|zh-CN|
|» subscriber_language|zh-HK|
|» subscriber_type|web|
|» subscriber_type|email|

> Example responses

> 201 Response

```json
{
  "actions": [
    "string"
  ],
  "event_type": "all",
  "signing_key": "string",
  "status": "enabled",
  "subscriber_type": "string",
  "subscriber_url": "string"
}
```

<h3 id="creates-a-hook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Hook](#schemahook)|
|400|Bad Request|Validation error, at least one of the parameters was invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Updates hook

<a id="opIdupdateHook"></a>

> Code samples

```bash
curl https://example.com/v1/hooks/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'actions=%5B%22string%22%5D&event_type=all&status=enabled&subscriber_address=string&subscriber_language=af&subscriber_name=string&subscriber_type=web&subscriber_url=string'
```

`PUT /v1/hooks/{hook_id}`

Updates a hook configuration.

> Body parameter

```yaml
actions:
  - string
event_type: all
status: enabled
subscriber_address: string
subscriber_language: af
subscriber_name: string
subscriber_type: web
subscriber_url: string
```

<h3 id="updates-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|Hook ID|
|body|body|[CreateHookInput](#schemacreatehookinput)|true|Request body updates given hook.|
|» actions|body|[string]|false|Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three|
|» event_type|body|string|true|The entity events the client wants to subscribe|
|» status|body|string|false|indicates whether the hook is active or not. enabled by default|
|» subscriber_address|body|string|false|Email address where the notification is to be sent. Required if subscriber_type was set to email|
|» subscriber_language|body|string|false|Language for the notification to be sent|
|» subscriber_name|body|string|false|Name of the person to be notified|
|» subscriber_type|body|string|true|A platform with an endpoint ready to process the information|
|» subscriber_url|body|string|false|URL where the notification is to be sent. Required only if subscriber_type is set to web|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_type|all|
|» event_type|check|
|» event_type|continuous_check|
|» status|enabled|
|» status|disabled|
|» subscriber_language|af|
|» subscriber_language|ar|
|» subscriber_language|ca|
|» subscriber_language|cs|
|» subscriber_language|da|
|» subscriber_language|de|
|» subscriber_language|el|
|» subscriber_language|en|
|» subscriber_language|es|
|» subscriber_language|fi|
|» subscriber_language|fr|
|» subscriber_language|he|
|» subscriber_language|hi|
|» subscriber_language|hr|
|» subscriber_language|hu|
|» subscriber_language|id|
|» subscriber_language|it|
|» subscriber_language|ja|
|» subscriber_language|ko|
|» subscriber_language|ms|
|» subscriber_language|nb|
|» subscriber_language|nl|
|» subscriber_language|pl|
|» subscriber_language|pt|
|» subscriber_language|pr-BR|
|» subscriber_language|ro|
|» subscriber_language|ru|
|» subscriber_language|sv|
|» subscriber_language|th|
|» subscriber_language|tl|
|» subscriber_language|tr|
|» subscriber_language|vi|
|» subscriber_language|zh|
|» subscriber_language|zh-CN|
|» subscriber_language|zh-HK|
|» subscriber_type|web|
|» subscriber_type|email|

> Example responses

> 200 Response

```text
subscriber_type=web
&subscriber_url=https://truora.com/new_test
&actions=created
&actions=finished
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="updates-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Hook](#schemahook)|
|400|Bad Request|Validation error, at least one of the parameters was invalid.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Deletes hook

<a id="opIddeletHook"></a>

> Code samples

```bash
curl https://example.com/v1/hooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`DELETE /v1/hooks/{hook_id}`

Deletes hook configuration.

<h3 id="deletes-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|Hook ID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-continuous">continuous</h1>

Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.

## ListContinuousChecks

<a id="opIdListContinuousChecks"></a>

> Code samples

```bash
curl https://example.com/v1/continuous-checks \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/continuous-checks`

Lists all continuous checks

> Example responses

> 200 Response

```json
{
  "check": {
    "check_id": "CHK77768f74ff3b7ae45e6e876e56056ac6",
    "company_summary": {
      "company_status": "not_found"
    },
    "country": "CO",
    "creation_date": "2020-04-13T21:28:51.512Z",
    "first_name": "LAUNA ELENA",
    "homonym_probability": 0.6,
    "homonym_score": 1,
    "homonym_scores": [
      {
        "data_set": "personal_identity",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "criminal_record",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "legal_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "international_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "professional_background",
        "result": "not_found",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "affiliations_and_insurances",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.199,
        "severity": "high"
      }
    ],
    "id_score": 1,
    "last_name": "PEDROZA MORA",
    "national_id": "1026565742",
    "previous_check": "CHK5e8c6748b7e050f857df25649ba315f7",
    "score": 1,
    "scores": [
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "personal_identity",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "criminal_record",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "legal_background",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "international_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "professional_background",
        "result": "not_found",
        "score": 1,
        "severity": "unknown"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "affiliations_and_insurances",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "found",
          "score": 0.199,
          "severity": "high"
        },
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.199,
        "severity": "high"
      }
    ],
    "status": "completed",
    "statuses": [
      {
        "data_set": "legal_background",
        "database_id": "DBIef43a3d7d2af8e4e8ca0f3d3e4c1bfc138d73c31",
        "database_name": "Sistema Penal Oral Acusatorio Colombiano - Notificación a deudores",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI1fa89de9ddefb027566c52f633a1f4057cd14358",
        "database_name": "Sistema Electrónico de Contratación Pública Colombia",
        "status": "completed"
      },
      {
        "database_id": "DBIe7a37e8584777ce70de79fe49bcbc657fac89396",
        "database_name": "Policía: Registro Nacional de Medidas Correctivas",
        "invalid_inputs": [
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI74d4ab1557f81e4a21229fc97796f44660c38832",
        "database_name": "SPOA - Notificaciones Administrativas",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI619ce4a1b34e5ec4bc91b237efc63d0d3537f332",
        "database_name": "Policía Nacional de Colombia",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "database_id": "DBI41eb124213acf97a022487d928a8ac34626819c4",
        "database_name": "Certificación del estado de Cédula de Extranjería",
        "invalid_inputs": [
          "foreign_id",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "database_id": "DBIe7a37e8584777ce70de79fe49bcbc657fac89396",
        "database_name": "Policía: Registro Nacional de Medidas Correctivas",
        "invalid_inputs": [
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI01241e248d1ceab7f163e2d8357c9a955c6700b7",
        "database_name": "Lugar de votación",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI0e769ed7cca8905f0261a2da9f4f9a90895552f2",
        "database_name": "Situación Militar",
        "status": "completed"
      },
      {
        "database_id": "DBI0d265630253ded5cdba1d98688a69e6271544546",
        "database_name": "Permiso Especial de Permanencia",
        "invalid_inputs": [
          "pep",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIcac12a47ea246a013727bc3fc90cd29b637108c0",
        "database_name": "Certificados Digitales SENA",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBI24ad1ca3e134494e438cf703a882711035eadd78",
        "database_name": "Consulta antecedentes disciplinarios Colombia",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIae15a1f323abc05d14e348c7e8a382d166dbe17f",
        "database_name": "Candidatos a Cargos Públicos",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIdbe220b8c70103ed2eb538361a8ef64388fd5934",
        "database_name": "Directorio de Servidores Públicos",
        "status": "completed"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_id": "DBI3a8fec3eda33f7c3939f61b517844d1d327b705b",
        "database_name": "Afiliados del régimen contributivo y subsidiado",
        "status": "completed"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_name": "sisben",
        "status": "expired"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_id": "DBIcea6b33e3f77251d4247c3a19682b456191628f6",
        "database_name": "Fondo de Pensiones Públicas",
        "status": "completed"
      },
      {
        "database_id": "DBI6265d2a778eb894c0d52f1c37d15f05a0d551ddc",
        "database_name": "Registro Único de Afiliados",
        "invalid_inputs": [
          "document_expedition_date",
          "birth_certificate",
          "document_expedition_date",
          "diplomatic_id",
          "document_expedition_date",
          "foreign_id",
          "document_expedition_date",
          "passport",
          "document_expedition_date",
          "pep",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "alert_in_media",
        "database_id": "DBI20279be53a2cc5eb78c4eca234622c7764855804",
        "database_name": "Google",
        "status": "completed"
      },
      {
        "data_set": "alert_in_media",
        "database_id": "DBI2b69e4bd677e0c028939a2f3c1292c1cf2c31313",
        "database_name": "Búsqueda en medios GOOGLE RSS",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI619ce4a1b34e5ec4bc91b237efc63d0d3537f332",
        "database_name": "Policía Nacional de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIdaff27e3eb07992b3d6b343acbd16bbdfb248b76",
        "database_name": "Juzgados De Ejecución De Penas Y Medidas De Seguridad",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI200187dbf578076573d2ee836b3e70fb8ac8b6c8",
        "database_name": "Sistema Penal Oral Acusatorio Colombiano - Sentencias crímenes contra sindicalistas de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIcdeff105c4612715cfad486c321caed19def8c7e",
        "database_name": "Instituto Nacional Penitenciario y Carcelario",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI5a155dfdb55d96a9ea00797ab5cf3fd88eac5910",
        "database_name": "Office of Foreign Assets Control",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI4430985bb6620056a6064cf11bb31186d34d582d",
        "database_name": "Most Wanted Fugitives by the DEA",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIe72ce9fcb6bd79b6c9a2685cb66e72f387e78e40",
        "database_name": "Interpol list of the most wanted",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI6eeab904c812b84f8a78a7fd4e286b817c430fe1",
        "database_name": "Federal Bureau Of Prisons",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIda71937421a651f8564d16e18b21bb3955278271",
        "database_name": "DSS Most Wanted - Bureau of Diplomatic Security",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIac4d74895385c27eccc0e589c2cf542a01ed6eea",
        "database_name": "FBI",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIc75c46e22d5565371d2893fad550474abc891fc7",
        "database_name": "Reported in the EU financial system",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIca0e39584d803f7b935e481328a559efeb315532",
        "database_name": "EU list of the most wanted",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIb6f45cf65d3dfd2c37e6210ebbd9191d35dc48e2",
        "database_name": "World Bank Debarred Firms",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI2ba70e37e29aacc38fc9a89cb6c39c29e8a5cfdd",
        "database_name": "United Nations Security Council Consolidate List",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI021bf85b4b88628dfe6c9f155e2f53c27c6e491a",
        "database_name": "Inter-American Development Bank",
        "status": "completed"
      }
    ],
    "summary": {
      "gender": "male",
      "identity_status": "found",
      "names_found": [
        {
          "count": 4,
          "first_name": "DIEGO ALEXANDER",
          "last_name": "SOLANO FAJARDO"
        }
      ]
    },
    "type": "person",
    "update_date": "2020-04-13T21:32:56.409Z",
    "vehicle_summary": {
      "vehicle_status": "not_found"
    }
  },
  "continuous_check_id": "CCK9cb5004dd7404a934bb44b31948d515d",
  "counter": 0,
  "creation_date": "2020-04-13T21:34:23.600Z",
  "frequency": "1m",
  "next_run_date": "2020-05-13T00:00:00.000Z",
  "score_status": "new",
  "status": "enabled",
  "update_date": "2020-04-13T21:34:23.600Z"
}
```

<h3 id="listcontinuouschecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContinuousChecksOutput](#schemalistcontinuouschecksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## createContinuousCheck

<a id="opIdcreateContinuousCheck"></a>

> Code samples

```bash
curl https://example.com/v1/continuous-checks \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'check_id=string&frequency=string&status=string'
```

`POST /v1/continuous-checks`

Creates a continuous check that will run background checks recurrently according to the frequency provided.

> Body parameter

```yaml
check_id: string
frequency: string
status: string
```

<h3 id="createcontinuouscheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateContinuousCheckInput](#schemacreatecontinuouscheckinput)|true|none|
|» check_id|body|string|false|Background checks to be processed recurrently|
|» frequency|body|string|false|Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks|
|» status|body|string|false|Indicates whether the background checks must be processed recurrently (enabled \| disabled)|

> Example responses

> 201 Response

```json
{
  "check": {
    "check_id": "CHK77768f74ff3b7ae45e6e876e56056ac6",
    "company_summary": {
      "company_status": "not_found"
    },
    "country": "CO",
    "creation_date": "2020-04-13T21:28:51.512Z",
    "first_name": "LAUNA ELENA",
    "homonym_probability": 0.6,
    "homonym_score": 1,
    "homonym_scores": [
      {
        "data_set": "personal_identity",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "criminal_record",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "legal_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "international_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "data_set": "professional_background",
        "result": "not_found",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "affiliations_and_insurances",
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      {
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.199,
        "severity": "high"
      }
    ],
    "id_score": 1,
    "last_name": "PEDROZA MORA",
    "national_id": "1026565742",
    "previous_check": "CHK5e8c6748b7e050f857df25649ba315f7",
    "score": 1,
    "scores": [
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "personal_identity",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "criminal_record",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "legal_background",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "data_set": "international_background",
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "not_found",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "professional_background",
        "result": "not_found",
        "score": 1,
        "severity": "unknown"
      },
      {
        "by_id": {
          "result": "found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "affiliations_and_insurances",
        "result": "found",
        "score": 1,
        "severity": "none"
      },
      {
        "by_id": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "by_name": {
          "result": "found",
          "score": 0.199,
          "severity": "high"
        },
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.199,
        "severity": "high"
      }
    ],
    "status": "completed",
    "statuses": [
      {
        "data_set": "legal_background",
        "database_id": "DBIef43a3d7d2af8e4e8ca0f3d3e4c1bfc138d73c31",
        "database_name": "Sistema Penal Oral Acusatorio Colombiano - Notificación a deudores",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI1fa89de9ddefb027566c52f633a1f4057cd14358",
        "database_name": "Sistema Electrónico de Contratación Pública Colombia",
        "status": "completed"
      },
      {
        "database_id": "DBIe7a37e8584777ce70de79fe49bcbc657fac89396",
        "database_name": "Policía: Registro Nacional de Medidas Correctivas",
        "invalid_inputs": [
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "legal_background",
        "database_id": "DBI74d4ab1557f81e4a21229fc97796f44660c38832",
        "database_name": "SPOA - Notificaciones Administrativas",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI619ce4a1b34e5ec4bc91b237efc63d0d3537f332",
        "database_name": "Policía Nacional de Colombia",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "database_id": "DBI41eb124213acf97a022487d928a8ac34626819c4",
        "database_name": "Certificación del estado de Cédula de Extranjería",
        "invalid_inputs": [
          "foreign_id",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "database_id": "DBIe7a37e8584777ce70de79fe49bcbc657fac89396",
        "database_name": "Policía: Registro Nacional de Medidas Correctivas",
        "invalid_inputs": [
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI01241e248d1ceab7f163e2d8357c9a955c6700b7",
        "database_name": "Lugar de votación",
        "status": "completed"
      },
      {
        "data_set": "personal_identity",
        "database_id": "DBI0e769ed7cca8905f0261a2da9f4f9a90895552f2",
        "database_name": "Situación Militar",
        "status": "completed"
      },
      {
        "database_id": "DBI0d265630253ded5cdba1d98688a69e6271544546",
        "database_name": "Permiso Especial de Permanencia",
        "invalid_inputs": [
          "pep",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIcac12a47ea246a013727bc3fc90cd29b637108c0",
        "database_name": "Certificados Digitales SENA",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBI24ad1ca3e134494e438cf703a882711035eadd78",
        "database_name": "Consulta antecedentes disciplinarios Colombia",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIae15a1f323abc05d14e348c7e8a382d166dbe17f",
        "database_name": "Candidatos a Cargos Públicos",
        "status": "completed"
      },
      {
        "data_set": "professional_background",
        "database_id": "DBIdbe220b8c70103ed2eb538361a8ef64388fd5934",
        "database_name": "Directorio de Servidores Públicos",
        "status": "completed"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_id": "DBI3a8fec3eda33f7c3939f61b517844d1d327b705b",
        "database_name": "Afiliados del régimen contributivo y subsidiado",
        "status": "completed"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_name": "sisben",
        "status": "expired"
      },
      {
        "data_set": "affiliations_and_insurances",
        "database_id": "DBIcea6b33e3f77251d4247c3a19682b456191628f6",
        "database_name": "Fondo de Pensiones Públicas",
        "status": "completed"
      },
      {
        "database_id": "DBI6265d2a778eb894c0d52f1c37d15f05a0d551ddc",
        "database_name": "Registro Único de Afiliados",
        "invalid_inputs": [
          "document_expedition_date",
          "birth_certificate",
          "document_expedition_date",
          "diplomatic_id",
          "document_expedition_date",
          "foreign_id",
          "document_expedition_date",
          "passport",
          "document_expedition_date",
          "pep",
          "document_expedition_date"
        ],
        "status": "skipped"
      },
      {
        "data_set": "alert_in_media",
        "database_id": "DBI20279be53a2cc5eb78c4eca234622c7764855804",
        "database_name": "Google",
        "status": "completed"
      },
      {
        "data_set": "alert_in_media",
        "database_id": "DBI2b69e4bd677e0c028939a2f3c1292c1cf2c31313",
        "database_name": "Búsqueda en medios GOOGLE RSS",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI7b7dcb77eee7449153cf91b087b559cf996817dc",
        "database_name": "Procuraduría",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI619ce4a1b34e5ec4bc91b237efc63d0d3537f332",
        "database_name": "Policía Nacional de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIdaff27e3eb07992b3d6b343acbd16bbdfb248b76",
        "database_name": "Juzgados De Ejecución De Penas Y Medidas De Seguridad",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBI200187dbf578076573d2ee836b3e70fb8ac8b6c8",
        "database_name": "Sistema Penal Oral Acusatorio Colombiano - Sentencias crímenes contra sindicalistas de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIa27c7448403bdd3c004cd6f85c7cf0850b4b84f2",
        "database_name": "Procesos Judiciales de Colombia",
        "status": "completed"
      },
      {
        "data_set": "criminal_record",
        "database_id": "DBIcdeff105c4612715cfad486c321caed19def8c7e",
        "database_name": "Instituto Nacional Penitenciario y Carcelario",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI5a155dfdb55d96a9ea00797ab5cf3fd88eac5910",
        "database_name": "Office of Foreign Assets Control",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI4430985bb6620056a6064cf11bb31186d34d582d",
        "database_name": "Most Wanted Fugitives by the DEA",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIe72ce9fcb6bd79b6c9a2685cb66e72f387e78e40",
        "database_name": "Interpol list of the most wanted",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI6eeab904c812b84f8a78a7fd4e286b817c430fe1",
        "database_name": "Federal Bureau Of Prisons",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIda71937421a651f8564d16e18b21bb3955278271",
        "database_name": "DSS Most Wanted - Bureau of Diplomatic Security",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIac4d74895385c27eccc0e589c2cf542a01ed6eea",
        "database_name": "FBI",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIc75c46e22d5565371d2893fad550474abc891fc7",
        "database_name": "Reported in the EU financial system",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIca0e39584d803f7b935e481328a559efeb315532",
        "database_name": "EU list of the most wanted",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBIb6f45cf65d3dfd2c37e6210ebbd9191d35dc48e2",
        "database_name": "World Bank Debarred Firms",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI2ba70e37e29aacc38fc9a89cb6c39c29e8a5cfdd",
        "database_name": "United Nations Security Council Consolidate List",
        "status": "completed"
      },
      {
        "data_set": "international_background",
        "database_id": "DBI021bf85b4b88628dfe6c9f155e2f53c27c6e491a",
        "database_name": "Inter-American Development Bank",
        "status": "completed"
      }
    ],
    "summary": {
      "gender": "male",
      "identity_status": "found",
      "names_found": [
        {
          "count": 4,
          "first_name": "DIEGO ALEXANDER",
          "last_name": "SOLANO FAJARDO"
        }
      ]
    },
    "type": "person",
    "update_date": "2020-04-13T21:32:56.409Z",
    "vehicle_summary": {
      "vehicle_status": "not_found"
    }
  },
  "continuous_check_id": "CCK9cb5004dd7404a934bb44b31948d515d",
  "counter": 0,
  "creation_date": "2020-04-13T21:34:23.600Z",
  "frequency": "1m",
  "next_run_date": "2020-05-13T00:00:00.000Z",
  "score_status": "new",
  "status": "enabled",
  "update_date": "2020-04-13T21:34:23.600Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="createcontinuouscheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ContinuousCheck](#schemacontinuouscheck)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## GetContinuousCheck

<a id="opIdGetContinuousCheck"></a>

> Code samples

```bash
curl https://example.com/v1/continuous-checks/0 \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/continuous-checks/{continuous_check_id}`

Lists history associated with a Check. It can be paginated

<h3 id="getcontinuouscheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuous_check_id|path|number|true|ID resulting from calling CreateContinuousCheck|

> Example responses

> 200 Response

```json
{
  "ContinuousCheckID": "string",
  "ContinuousCheckStatus": "new",
  "CreationDate": "1970-01-01",
  "Enabled": true,
  "Frequency": "string",
  "History": {
    "changes": [
      {
        "dataset_score_changes": 0,
        "score_changes": [
          {}
        ]
      }
    ],
    "check_id": "string",
    "continuous_check_id": "string",
    "creation_date": "1970-01-01",
    "previous_check_id": "string"
  },
  "LastCheckID": "string",
  "NextRunDate": "1970-01-01",
  "OriginalCheck": {
    "birth_certificate": "sometext",
    "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
    "company_summary": {
      "names_found": [
        {
          "count": 3,
          "first_name": "Truora",
          "last_name": ""
        },
        {
          "count": 1,
          "first_name": "Other company",
          "last_name": ""
        }
      ]
    },
    "country": "bo",
    "creation_date": "2018-02-10T09:30Z",
    "date_of_birth": "2018-02-10T09:30Z",
    "diplomatic_id": "sometext",
    "driver_license": "sometext",
    "first_name": "Cesar Augusto",
    "foreign_id": "sometext",
    "homonym_probability": 0.6,
    "homonym_score": 0.84,
    "homonym_scores": [
      {
        "data_set": "vehicle_information",
        "result": "not_found",
        "score": 0.09,
        "severity": "very_low"
      },
      {
        "data_set": "international_background",
        "result": "not_found",
        "score": 0.36,
        "severity": "unknown"
      }
    ],
    "id_score": 0.34,
    "issue_date": "2018-02-10T09:30Z",
    "last_name": "Pino Sandoval",
    "license_plate": "sometext",
    "national_id": "sometext",
    "native_country": "co",
    "owner_document_id": "sometext",
    "owner_document_type": "sometext",
    "passport": "sometext",
    "payment_date": "sometext",
    "pep": "sometext",
    "professional_card": "sometext",
    "ptp": "sometext",
    "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
    "score": 0.34,
    "scores": [
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "found",
          "score": 0.78,
          "severity": "low"
        },
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.96,
        "severity": "very_low"
      },
      {
        "by_id": {
          "result": "found",
          "score": 0.79,
          "severity": "high"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "business_background",
        "result": "delayed",
        "score": 0.79,
        "severity": "high"
      }
    ],
    "status": "completed",
    "statuses": [
      {
        "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
        "database_name": "Licencias de Conducción Santiago de Chile",
        "invalid_inputs": [
          "driver_license"
        ],
        "status": "skipped"
      },
      {
        "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
        "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
        "status": "completed"
      }
    ],
    "summary": {
      "date_of_birth": "2018-02-10T09:30Z",
      "death_date": "2018-02-10T09:30Z",
      "drivers_license": "1144025634",
      "gender": "female",
      "identity_status": "dead",
      "imss": "sometext",
      "names_found": [
        {
          "count": 7,
          "first_name": "César Augusto",
          "last_name": "Pino Sandoval"
        },
        {
          "count": 1,
          "first_name": "Pepito",
          "last_name": "Perez"
        }
      ],
      "rfc": "MUTT920802FP2"
    },
    "tax_id": "901189979-5",
    "type": "vehicle",
    "update_date": "2018-02-10T09:30Z",
    "vehicle_id": "sometext",
    "vehicle_summary": {
      "capacity": 1000,
      "color": "red",
      "license_plate": "IIR350",
      "manufacturer": "Ford",
      "model": "ESCAPE",
      "number_of_doors": 5,
      "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
      "obligatory_insurance_status": "VIGENTE",
      "service_type": "privado",
      "vehicle_category": "particular",
      "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
      "vehicle_type": "Camioneta",
      "year": 2018
    }
  },
  "UpdateDate": "1970-01-01"
}
```

<h3 id="getcontinuouscheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContinuousCheck](#schemacontinuouscheck)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## UpdateContinuousCheck

<a id="opIdUpdateContinuousCheck"></a>

> Code samples

```bash
curl https://example.com/v1/continuous-checks/0 \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}" \
  -d 'frequency=string&status=enabled'
```

`PUT /v1/continuous-checks/{continuous_check_id}`

Updates a continuous check

> Body parameter

```yaml
frequency: string
status: enabled
```

<h3 id="updatecontinuouscheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuous_check_id|path|number|true|ID resulting from calling CreateContinuousCheck|
|body|body|[UpdateContinuousCheckInput](#schemaupdatecontinuouscheckinput)|true|none|
|» frequency|body|string|true|Time between background checks|
|» status|body|string|true|Indicates whether the background checks must be processed recurrently|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "ContinuousCheckID": "string",
  "ContinuousCheckStatus": "new",
  "CreationDate": "1970-01-01",
  "Enabled": true,
  "Frequency": "string",
  "History": {
    "changes": [
      {
        "dataset_score_changes": 0,
        "score_changes": [
          {}
        ]
      }
    ],
    "check_id": "string",
    "continuous_check_id": "string",
    "creation_date": "1970-01-01",
    "previous_check_id": "string"
  },
  "LastCheckID": "string",
  "NextRunDate": "1970-01-01",
  "OriginalCheck": {
    "birth_certificate": "sometext",
    "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
    "company_summary": {
      "names_found": [
        {
          "count": 3,
          "first_name": "Truora",
          "last_name": ""
        },
        {
          "count": 1,
          "first_name": "Other company",
          "last_name": ""
        }
      ]
    },
    "country": "bo",
    "creation_date": "2018-02-10T09:30Z",
    "date_of_birth": "2018-02-10T09:30Z",
    "diplomatic_id": "sometext",
    "driver_license": "sometext",
    "first_name": "Cesar Augusto",
    "foreign_id": "sometext",
    "homonym_probability": 0.6,
    "homonym_score": 0.84,
    "homonym_scores": [
      {
        "data_set": "vehicle_information",
        "result": "not_found",
        "score": 0.09,
        "severity": "very_low"
      },
      {
        "data_set": "international_background",
        "result": "not_found",
        "score": 0.36,
        "severity": "unknown"
      }
    ],
    "id_score": 0.34,
    "issue_date": "2018-02-10T09:30Z",
    "last_name": "Pino Sandoval",
    "license_plate": "sometext",
    "national_id": "sometext",
    "native_country": "co",
    "owner_document_id": "sometext",
    "owner_document_type": "sometext",
    "passport": "sometext",
    "payment_date": "sometext",
    "pep": "sometext",
    "professional_card": "sometext",
    "ptp": "sometext",
    "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
    "score": 0.34,
    "scores": [
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "found",
          "score": 0.78,
          "severity": "low"
        },
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.96,
        "severity": "very_low"
      },
      {
        "by_id": {
          "result": "found",
          "score": 0.79,
          "severity": "high"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "business_background",
        "result": "delayed",
        "score": 0.79,
        "severity": "high"
      }
    ],
    "status": "completed",
    "statuses": [
      {
        "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
        "database_name": "Licencias de Conducción Santiago de Chile",
        "invalid_inputs": [
          "driver_license"
        ],
        "status": "skipped"
      },
      {
        "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
        "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
        "status": "completed"
      }
    ],
    "summary": {
      "date_of_birth": "2018-02-10T09:30Z",
      "death_date": "2018-02-10T09:30Z",
      "drivers_license": "1144025634",
      "gender": "female",
      "identity_status": "dead",
      "imss": "sometext",
      "names_found": [
        {
          "count": 7,
          "first_name": "César Augusto",
          "last_name": "Pino Sandoval"
        },
        {
          "count": 1,
          "first_name": "Pepito",
          "last_name": "Perez"
        }
      ],
      "rfc": "MUTT920802FP2"
    },
    "tax_id": "901189979-5",
    "type": "vehicle",
    "update_date": "2018-02-10T09:30Z",
    "vehicle_id": "sometext",
    "vehicle_summary": {
      "capacity": 1000,
      "color": "red",
      "license_plate": "IIR350",
      "manufacturer": "Ford",
      "model": "ESCAPE",
      "number_of_doors": 5,
      "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
      "obligatory_insurance_status": "VIGENTE",
      "service_type": "privado",
      "vehicle_category": "particular",
      "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
      "vehicle_type": "Camioneta",
      "year": 2018
    }
  },
  "UpdateDate": "1970-01-01"
}
```

<h3 id="updatecontinuouscheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContinuousCheck](#schemacontinuouscheck)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## get/v1/continuous-checks/{continuous_check_id}/history

> Code samples

```bash
curl https://example.com/v1/continuous-checks/string/history \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/continuous-checks/{continuous_check_id}/history`

Lists background check logs. It can be paginated


<h3 id="getv1continuous-checkscontinuouscheckidhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuous_check_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "dataset_score_changes": 0,
      "score_changes": [
        {}
      ]
    }
  ],
  "next": "string",
  "self": "string"
}
```

<h3 id="getv1continuous-checkscontinuouscheckidhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok|[GetContiuousCheckHistoryOutput](#schemagetcontiuouscheckhistoryoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="checks-api-pdf">pdf</h1>

## Get PDF

<a id="opIdgetPDF"></a>

> Code samples

```bash
curl https://example.com/v1/checks/string/pdf \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`GET /v1/checks/{check_id}/pdf`

Downloads the PDF in the specified language, Spanish by default.

<h3 id="get-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|false|Used to specify the language for the PDF, if not specified the PDF will be downloaded in Spanish.|
|check_id|path|string|true|ID of the check|

> Example responses

> 404 Response

```json
{
  "code": 10404,
  "http_code": 404,
  "message": "Resource not found"
}
```

<h3 id="get-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Downloads the PDF of the check|None|
|404|Not Found|This can happen if the create pdf request has not been finished.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Create PDF

<a id="opIdCreatePDF"></a>

> Code samples

```bash
curl https://example.com/v1/checks/string/pdf \
  -X POST \
  -H 'Accept: application/json' \
  -H "Truora-API-Key: ${API_KEY}"
```

`POST /v1/checks/{check_id}/pdf`

Creates a PDF containing the background check results.

<h3 id="create-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_id|path|string|true|ID of the check|

> Example responses

> 200 Response

```json
{
  "pdf_path": "/v1/checks/CHKbca9bb227dc2551d17347e5c2fb75e87/pdf/"
}
```

> 404 Response

```json
{
  "code": 10404,
  "http_code": 404,
  "message": "Resource not found"
}
```

<h3 id="create-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Outputs the link to download the PDF|None|
|404|Not Found|This can happen if the check ID doesn't exist.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

# Schemas

<h2 id="tocS_APIKey">APIKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_APIKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "api_key_previous_version": "string",
  "api_key_version": "string",
  "client_id": "string",
  "creation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "key_name": "string",
  "update_date": "1970-01-01",
  "user_key_name": "string"
}
```

Represents the data contained in an API key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_previous_version|string|false|none|Previous version of the API key|
|api_key_version|string|false|none|API key version|
|client_id|string|false|none|Client ID of the API Key|
|creation_date|string(date)|false|none|API key creation date|
|expiration_date|string(date)|false|none|Expiration date of the API key|
|key_name|string|false|none|Key name, equals user_key_name normalized|
|update_date|string(date)|false|none|Date when the API key version was changed|
|user_key_name|string|false|none|User name of the API key|

<h2 id="tocS_APIKeyVersion">APIKeyVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyversion"></a>
<a id="schema_APIKeyVersion"></a>
<a id="tocSapikeyversion"></a>
<a id="tocsapikeyversion"></a>

```json
{
  "changelog": {
    "added": [
      "string"
    ],
    "changed": [
      "string"
    ],
    "deprecated": [
      "string"
    ],
    "fixed": [
      "string"
    ],
    "notes": "string",
    "removed": [
      "string"
    ],
    "security": [
      "string"
    ]
  },
  "expiration_date": "1970-01-01",
  "release_date": "1970-01-01",
  "version": "string"
}
```

Represents an API key version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changelog|[APIKeyVersionChangelog](#schemaapikeyversionchangelog)|false|none|Changes made to the API key version|
|expiration_date|string(date)|false|none|Expiration date of the API key version|
|release_date|string(date)|false|none|Release date of the API key version|
|version|string|false|none|API key version|

<h2 id="tocS_APIKeyVersionChangelog">APIKeyVersionChangelog</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyversionchangelog"></a>
<a id="schema_APIKeyVersionChangelog"></a>
<a id="tocSapikeyversionchangelog"></a>
<a id="tocsapikeyversionchangelog"></a>

```json
{
  "added": [
    "string"
  ],
  "changed": [
    "string"
  ],
  "deprecated": [
    "string"
  ],
  "fixed": [
    "string"
  ],
  "notes": "string",
  "removed": [
    "string"
  ],
  "security": [
    "string"
  ]
}
```

Represents changes made to a API key version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|[string]|false|none|List of added features|
|changed|[string]|false|none|List of changed features|
|deprecated|[string]|false|none|List of deprecated features|
|fixed|[string]|false|none|List of fixed features|
|notes|string|false|none|Additional notes|
|removed|[string]|false|none|List of removed features|
|security|[string]|false|none|List of security features added|

<h2 id="tocS_BatchUploadInput">BatchUploadInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchuploadinput"></a>
<a id="schema_BatchUploadInput"></a>
<a id="tocSbatchuploadinput"></a>
<a id="tocsbatchuploadinput"></a>

```json
{
  "file": [
    "string"
  ]
}
```

Represents the parameters required to perform a batch upload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[string(binary)]|true|none|Uploaded file name|

<h2 id="tocS_Behavior">Behavior</h2>
<!-- backwards compatibility -->
<a id="schemabehavior"></a>
<a id="schema_Behavior"></a>
<a id="tocSbehavior"></a>
<a id="tocsbehavior"></a>

```json
{
  "birth_date": "1970-01-01",
  "country": "co",
  "creation_date": "1970-01-01T00:00:00Z",
  "document_id": "string",
  "document_type": "national-id",
  "email": "string",
  "feedback_date": "1970-01-01",
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "reason": "string"
}
```

Represents behaviour reports

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_date|string(date)|true|none|Birth date of reported person|
|country|string|true|none|Document country|
|creation_date|string(date-time)|false|none|Feedback creation date|
|document_id|string|true|none|Person document ID|
|document_type|string|true|none|Document type associated with the background check|
|email|string|true|none|Reported person e-mail|
|feedback_date|string(date)|true|none|Behavior report date|
|first_name|string|true|none|Person first name|
|last_name|string|true|none|Person last name|
|phone_number|string|false|none|Phone number of the reported person|
|reason|string|true|none|Report reason|

#### Enumerated Values

|Property|Value|
|---|---|
|country|co|
|country|ve|
|country|cl|
|country|mx|
|country|pe|
|country|do|
|country|sv|
|country|gt|
|country|bo|
|country|cr|
|country|ec|
|country|pa|
|country|br|
|document_type|national-id|
|document_type|passport|
|document_type|foreign-id|
|document_type|nit|
|document_type|diplomatic-id|
|document_type|civil-registration|
|document_type|identity-card|
|document_type|foreigner-card|
|document_type|professional-card|
|document_type|military-card|
|document_type|pep|
|document_type|nis|
|document_type|dni|
|document_type|rui|
|document_type|license-plate|
|document_type|query|
|document_type|name|
|document_type|rut|
|document_type|nuip|
|document_type|foreign-societies|
|document_type|escrow|
|document_type|individual-registration|
|document_type|general-registration|
|document_type|curp|
|document_type|dui|
|document_type|driver-license|
|document_type|ruc|

<h2 id="tocS_BehaviourOutput">BehaviourOutput</h2>
<!-- backwards compatibility -->
<a id="schemabehaviouroutput"></a>
<a id="schema_BehaviourOutput"></a>
<a id="tocSbehaviouroutput"></a>
<a id="tocsbehaviouroutput"></a>

```json
{
  "behavior": [
    {
      "birth_date": "1970-01-01",
      "country": "co",
      "creation_date": "1970-01-01T00:00:00Z",
      "document_id": "string",
      "document_type": "national-id",
      "email": "string",
      "feedback_date": "1970-01-01",
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "reason": "string"
    }
  ],
  "self": "string"
}
```

Represents behaviour search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavior|[[Behavior](#schemabehavior)]|true|none|Behavior list|
|self|string|true|none|Path to this resource|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "dataset_score_changes": 0,
  "score_changes": [
    {
      "dataset_score_changes": 0,
      "score_changes": [
        {}
      ]
    }
  ]
}
```

Represents changes in check scores between continuous checks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_score_changes|number|false|none|Old and new score map by dataset|
|score_changes|[[Change](#schemachange)]|false|none|Old and new score list|

<h2 id="tocS_Check">Check</h2>
<!-- backwards compatibility -->
<a id="schemacheck"></a>
<a id="schema_Check"></a>
<a id="tocScheck"></a>
<a id="tocscheck"></a>

```json
{
  "birth_certificate": "sometext",
  "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
  "company_summary": {
    "names_found": [
      {
        "count": 3,
        "first_name": "Truora",
        "last_name": ""
      },
      {
        "count": 1,
        "first_name": "Other company",
        "last_name": ""
      }
    ]
  },
  "country": "bo",
  "creation_date": "2018-02-10T09:30Z",
  "date_of_birth": "2018-02-10T09:30Z",
  "diplomatic_id": "sometext",
  "driver_license": "sometext",
  "first_name": "Cesar Augusto",
  "foreign_id": "sometext",
  "homonym_probability": 0.6,
  "homonym_score": 0.84,
  "homonym_scores": [
    {
      "data_set": "vehicle_information",
      "result": "not_found",
      "score": 0.09,
      "severity": "very_low"
    },
    {
      "data_set": "international_background",
      "result": "not_found",
      "score": 0.36,
      "severity": "unknown"
    }
  ],
  "id_score": 0.34,
  "issue_date": "2018-02-10T09:30Z",
  "last_name": "Pino Sandoval",
  "license_plate": "sometext",
  "national_id": "sometext",
  "native_country": "co",
  "owner_document_id": "sometext",
  "owner_document_type": "sometext",
  "passport": "sometext",
  "payment_date": "sometext",
  "pep": "sometext",
  "professional_card": "sometext",
  "ptp": "sometext",
  "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
  "score": 0.34,
  "scores": [
    {
      "by_id": {
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      "by_name": {
        "result": "found",
        "score": 0.78,
        "severity": "low"
      },
      "data_set": "alert_in_media",
      "result": "found",
      "score": 0.96,
      "severity": "very_low"
    },
    {
      "by_id": {
        "result": "found",
        "score": 0.79,
        "severity": "high"
      },
      "by_name": {
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      "data_set": "business_background",
      "result": "delayed",
      "score": 0.79,
      "severity": "high"
    }
  ],
  "status": "completed",
  "statuses": [
    {
      "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
      "database_name": "Licencias de Conducción Santiago de Chile",
      "invalid_inputs": [
        "driver_license"
      ],
      "status": "skipped"
    },
    {
      "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
      "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
      "status": "completed"
    }
  ],
  "summary": {
    "date_of_birth": "2018-02-10T09:30Z",
    "death_date": "2018-02-10T09:30Z",
    "drivers_license": "1144025634",
    "gender": "female",
    "identity_status": "dead",
    "imss": "sometext",
    "names_found": [
      {
        "count": 7,
        "first_name": "César Augusto",
        "last_name": "Pino Sandoval"
      },
      {
        "count": 1,
        "first_name": "Pepito",
        "last_name": "Perez"
      }
    ],
    "rfc": "MUTT920802FP2"
  },
  "tax_id": "901189979-5",
  "type": "vehicle",
  "update_date": "2018-02-10T09:30Z",
  "vehicle_id": "sometext",
  "vehicle_summary": {
    "capacity": 1000,
    "color": "red",
    "license_plate": "IIR350",
    "manufacturer": "Ford",
    "model": "ESCAPE",
    "number_of_doors": 5,
    "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
    "obligatory_insurance_status": "VIGENTE",
    "service_type": "privado",
    "vehicle_category": "particular",
    "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
    "vehicle_type": "Camioneta",
    "year": 2018
  }
}
```

Represents a background check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_certificate|string|false|none|Person birth certificate|
|check_id|string|true|none|Background check ID|
|company_summary|[CompanySummary](#schemacompanysummary)|false|none|Summary of the company background check process|
|country|string|true|none|ID Document country|
|creation_date|string(date-time)|true|none|Background check creation date|
|date_of_birth|string(date-time)|false|none|Person birthdate. Shown only if provided during check creation. YYYY-MM-DD format|
|diplomatic_id|string|false|none|Person diplomatic id|
|driver_license|string|false|none|Person driver's license|
|first_name|string|false|none|Person or entity first name. Shown only if provided during check creation|
|foreign_id|string|false|none|Person foreign identification|
|homonym_probability|number(float)|false|none|[Experimental] Analyzes the probability that the results by name are attributed to a homonym. Number between 0 and 1 where 1 is the the greatest probability|
|homonym_score|number(float)|false|none|Background check score including results by name only. This might contain homonym information|
|homonym_scores|[[Score](#schemascore)]|false|none|Background check scores by name for each profile group. [Deprecated for API key V1]|
|id_score|number(float)|true|none|Background check score regarding results by ID number only. It is a number between 0 and 1 where 1 is the best score. This result is a weighted average of the id_scores listed under scores.|
|issue_date|string(date-time)|false|none|Issue date of the person ID|
|last_name|string|false|none|Person or entity last name. Shown only if provided during check creation|
|license_plate|string|false|none|Vehicle license plate|
|national_id|string|false|none|Person national identification|
|native_country|string|false|none|Person origin country|
|owner_document_id|string|false|none|Vehicle owner identification|
|owner_document_type|string|false|none|Vehicle owner document type|
|passport|string|false|none|Person passport|
|payment_date|string|false|none|Vehicle license payment date|
|pep|string|false|none|Colombian PEP idenfitication for Venezuelans|
|phone_number|string|false|none|Person phone number. Required by law in order to notify the person their background is being checked|
|professional_card|string|false|none|Person professional card number|
|ptp|string|false|none|Temporary residence permit of the person|
|region|string|false|none|Region where the background is to be checked. By default, background checks in Brazil are performed in region where the person is from. Applies for some Brazil collectors only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.<br>|
|report_id|string|false|none|Report ID the background check is associated with|
|score|number(float)|true|none|Background check score. Number between 0 and 1 where 1 is the best score|
|scores|[[Score](#schemascore)]|false|none|Background check score of each profile group and dataset|
|status|string|true|none|Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the check finished successfully, **error** means the check failed, **in_progress** means the check is currently being processed, **delayed** means the check is waiting for an additional requirement to be met, this can last up to 3 days. **Completed** and **error** are the two only final statuses|
|statuses|[[Status](#schemastatus)]|true|none|Database status list|
|summary|[Summary](#schemasummary)|true|none|Background check process summary|
|tax_id|string|false|none|Person or company tax id|
|type|string|true|none|Background check type|
|update_date|string(date-time)|false|none|Background check update date|
|vehicle_id|string|false|none|Vehicle identification|
|vehicle_summary|[VehicleSummary](#schemavehiclesummary)|false|none|Summary of the vehicle background check process|
|wrong_inputs|[[WrongInput](#schemawronginput)]|false|none|List of parameters entered during background check creation that do not match the information obtained|

#### Enumerated Values

|Property|Value|
|---|---|
|country|ALL|
|country|BR|
|country|CL|
|country|CO|
|country|CR|
|country|EC|
|country|MX|
|country|PE|
|country|AR|
|native_country|ad|
|native_country|ae|
|native_country|af|
|native_country|ag|
|native_country|ai|
|native_country|al|
|native_country|am|
|native_country|an|
|native_country|ao|
|native_country|aq|
|native_country|ar|
|native_country|as|
|native_country|at|
|native_country|au|
|native_country|aw|
|native_country|ax|
|native_country|az|
|native_country|ba|
|native_country|bb|
|native_country|bd|
|native_country|be|
|native_country|bf|
|native_country|bg|
|native_country|bh|
|native_country|bi|
|native_country|bj|
|native_country|bm|
|native_country|bn|
|native_country|bo|
|native_country|br|
|native_country|bs|
|native_country|bt|
|native_country|bv|
|native_country|bw|
|native_country|by|
|native_country|bz|
|native_country|ca|
|native_country|cc|
|native_country|cd|
|native_country|cf|
|native_country|cg|
|native_country|ch|
|native_country|ci|
|native_country|ck|
|native_country|cl|
|native_country|cm|
|native_country|cn|
|native_country|co|
|native_country|cr|
|native_country|cu|
|native_country|cv|
|native_country|cx|
|native_country|cy|
|native_country|cz|
|native_country|de|
|native_country|dj|
|native_country|dk|
|native_country|dm|
|native_country|do|
|native_country|dz|
|native_country|ea|
|native_country|ec|
|native_country|ee|
|native_country|eg|
|native_country|eh|
|native_country|er|
|native_country|es|
|native_country|et|
|native_country|fi|
|native_country|fj|
|native_country|fk|
|native_country|fm|
|native_country|fo|
|native_country|fr|
|native_country|ga|
|native_country|gb|
|native_country|gd|
|native_country|ge|
|native_country|gf|
|native_country|gg|
|native_country|gh|
|native_country|gi|
|native_country|gl|
|native_country|gm|
|native_country|gn|
|native_country|gp|
|native_country|gq|
|native_country|gr|
|native_country|gs|
|native_country|gt|
|native_country|gu|
|native_country|gw|
|native_country|gy|
|native_country|hk|
|native_country|hm|
|native_country|hn|
|native_country|hr|
|native_country|ht|
|native_country|hu|
|native_country|id|
|native_country|ie|
|native_country|il|
|native_country|im|
|native_country|in|
|native_country|io|
|native_country|iq|
|native_country|ir|
|native_country|is|
|native_country|it|
|native_country|je|
|native_country|jm|
|native_country|jo|
|native_country|jp|
|native_country|ke|
|native_country|kg|
|native_country|kh|
|native_country|ki|
|native_country|km|
|native_country|kn|
|native_country|kp|
|native_country|kr|
|native_country|kw|
|native_country|ky|
|native_country|kz|
|native_country|la|
|native_country|lb|
|native_country|lc|
|native_country|li|
|native_country|lk|
|native_country|lr|
|native_country|ls|
|native_country|lt|
|native_country|lu|
|native_country|lv|
|native_country|ly|
|native_country|ma|
|native_country|mc|
|native_country|md|
|native_country|me|
|native_country|mg|
|native_country|mh|
|native_country|mk|
|native_country|ml|
|native_country|mm|
|native_country|mn|
|native_country|mo|
|native_country|mp|
|native_country|mq|
|native_country|mr|
|native_country|ms|
|native_country|mt|
|native_country|mu|
|native_country|mv|
|native_country|mw|
|native_country|mx|
|native_country|my|
|native_country|mz|
|native_country|na|
|native_country|nc|
|native_country|ne|
|native_country|nf|
|native_country|ng|
|native_country|ni|
|native_country|nl|
|native_country|no|
|native_country|np|
|native_country|nr|
|native_country|nu|
|native_country|nz|
|native_country|om|
|native_country|pa|
|native_country|pe|
|native_country|pf|
|native_country|pg|
|native_country|ph|
|native_country|pk|
|native_country|pl|
|native_country|pm|
|native_country|pn|
|native_country|pr|
|native_country|ps|
|native_country|pt|
|native_country|pw|
|native_country|py|
|native_country|qa|
|native_country|re|
|native_country|ro|
|native_country|rs|
|native_country|ru|
|native_country|rw|
|native_country|sa|
|native_country|sb|
|native_country|sc|
|native_country|sd|
|native_country|se|
|native_country|sg|
|native_country|sh|
|native_country|si|
|native_country|sj|
|native_country|sk|
|native_country|sl|
|native_country|sm|
|native_country|sn|
|native_country|so|
|native_country|sr|
|native_country|st|
|native_country|sv|
|native_country|sy|
|native_country|sz|
|native_country|tc|
|native_country|td|
|native_country|tf|
|native_country|tg|
|native_country|th|
|native_country|tj|
|native_country|tk|
|native_country|tl|
|native_country|tm|
|native_country|tn|
|native_country|to|
|native_country|tr|
|native_country|tt|
|native_country|tv|
|native_country|tw|
|native_country|tz|
|native_country|ua|
|native_country|ug|
|native_country|um|
|native_country|us|
|native_country|uy|
|native_country|uz|
|native_country|va|
|native_country|vc|
|native_country|ve|
|native_country|vg|
|native_country|vi|
|native_country|vn|
|native_country|vu|
|native_country|wf|
|native_country|ws|
|native_country|ye|
|native_country|yt|
|native_country|za|
|native_country|zm|
|native_country|zw|
|region|DF|
|region|AC|
|region|AL|
|region|AP|
|region|AM|
|region|BA|
|region|CE|
|region|ES|
|region|GO|
|region|MA|
|region|MT|
|region|MS|
|region|MG|
|region|PA|
|region|PB|
|region|PR|
|region|PE|
|region|PI|
|region|RJ|
|region|RN|
|region|RS|
|region|RO|
|region|RR|
|region|SC|
|region|SP|
|region|SE|
|region|TO|
|status|not_started|
|status|in_progress|
|status|completed|
|status|error|
|status|delayed|
|type|company|
|type|person|
|type|vehicle|

<h2 id="tocS_CheckDetails">CheckDetails</h2>
<!-- backwards compatibility -->
<a id="schemacheckdetails"></a>
<a id="schema_CheckDetails"></a>
<a id="tocScheckdetails"></a>
<a id="tocscheckdetails"></a>

```json
"{\n    \"details\": [\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Permiso Especial de Permanencia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL01517c1c39ddc95c7aaa666f9169cd80\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.744534427Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Reputational Score\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL04f41606f588357800040e3db341233f\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.714144016Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Fugitivos buscados por la DEA\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL070cb2b7c986717951396233242f6149\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.538430761Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Policía: Sistema Registro Nacional de Medidas Correctivas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL07516c1ce1e175a9a68b17eb7f97810d\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.724237843Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Certificación del estado de Cédula de Extranjería\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0847f6c3eaf8f37bbc33bcbca6ab8fe6\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.714552784Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Consolidated Screening Lists\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0ac51d4fd9beba3dfe72da2e8ada9292\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.546955261Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"business_background\",\n            \"database_name\": \"Banco Interamericano de Desarrollo\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0c554e290fd791243a6443ead757bc66\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.537528917Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Certificados Digitales SENA\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL1a32fc0c11dc96c8af86e76d2e3a1b06\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.794932848Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Policía Nacional de Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2506c29ee2f8afe3dfa1dae30fbddf52\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.81398584Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Consulta antecedentes disciplinarios Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2afe1d921806d2061ce13b84defa73fd\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.798192725Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"World Bank Debarred Firms\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2bc8aae0e1363d65956e4427555fcd31\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541260667Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Federal Bureau Of Prisons\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2c30c2f61b9ac3433dbff85e3a01d309\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.542345514Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Registro Único de Afiliados\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL3e957dc203f7fe5f49469620da2ba796\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.715970317Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Lugar de votación\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL3f36182d388da0fa45bf004d75f2e1e5\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"NUIP\",\n                                    \"value\": \"1143861771\"\n                                },\n                                {\n                                    \"label\": \"DEPARTAMENTO\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                },\n                                {\n                                    \"label\": \"MUNICIPIO\",\n                                    \"value\": \"BOGOTA. D.C.\"\n                                },\n                                {\n                                    \"label\": \"PUESTO\",\n                                    \"value\": \"HACIENDA SANTA BARBARA\"\n                                },\n                                {\n                                    \"label\": \"DIRECCIÓN\",\n                                    \"value\": \"CLL 114 CR 6 ENT. ZONA C-CRA 6 No 115-65 ENT. F\"\n                                },\n                                {\n                                    \"label\": \"MESA\",\n                                    \"value\": \"46\"\n                                },\n                                {\n                                    \"label\": \"FECHA INSCRIPCIÓN\",\n                                    \"value\": \"Oct 29 2017 12:00AM\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.72155298Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Fondo de Pensiones Públicas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL583fefc7ff636631c7fb8a65731990e4\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.711765389Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"alert_in_media\",\n            \"database_name\": \"Google\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5bbf3f005f098fe9a78611e7ee1927ca\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.584036916Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Procesos Judiciales\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5ea28119815396422268ba6c47a2ac18\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.76521174Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Sistema Electrónico de Contratación Pública Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5f7fe3a476a9eb2ca5f03cd99db03495\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.719849266Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Procuraduría\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL657c426daaf23b25c5c0554412e46e0c\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.738352721Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Instituto Nacional Penitenciario y Carcelario\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL6cb0095baf857ed41988efbf00043c2a\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:19.963833191Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Boletín de Deudores Morosos del Estado\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL7b8a285ffd13393fe1f52af8b175e563\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.720675312Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Policía Nacional de Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL7c87b3fba1c3b12f4624d5818b84242c\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Reporte Policía\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre Completo\",\n                                    \"value\": \"PERILLA OCAMPO DANIEL\"\n                                },\n                                {\n                                    \"label\": \"Resultado\",\n                                    \"value\": \"NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.813979628Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Oficina de control de activos extranjeros\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8045640030144c2fc8881325827cb4ec\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.790974816Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"United Nations Security Council Consolidate List\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8b68831f398a6cea0161c1933ae63637\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541204049Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Offshore Leaks Database - Officers\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8d5eb2af69dd2f18929d05080e519d91\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.556381167Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Afiliados del régimen contributivo y subsidiado\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8f2dadba8e04240cfda6cbb93b4c21b8\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Tipo de Identificación\",\n                                    \"value\": \"CC\"\n                                },\n                                {\n                                    \"label\": \"Número de Identificación\",\n                                    \"value\": \"1143861771\"\n                                },\n                                {\n                                    \"label\": \"Nombres\",\n                                    \"value\": \"DANIEL\"\n                                },\n                                {\n                                    \"label\": \"Apellidos\",\n                                    \"value\": \"PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Departamento\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                },\n                                {\n                                    \"label\": \"Municipio\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"title\": \"Información afiliación\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Estado\",\n                                    \"value\": \"RETIRADO\"\n                                },\n                                {\n                                    \"label\": \"Entidad\",\n                                    \"value\": \"COMPENSAR E.P.S.\"\n                                },\n                                {\n                                    \"label\": \"Régimen\",\n                                    \"value\": \"CONTRIBUTIVO\"\n                                },\n                                {\n                                    \"label\": \"Fecha afiliación efectiva\",\n                                    \"value\": \"01/10/2016\"\n                                },\n                                {\n                                    \"label\": \"Fecha finalización afiliación\",\n                                    \"value\": \"30/04/2018\"\n                                },\n                                {\n                                    \"label\": \"Tipo de afiliado\",\n                                    \"value\": \"COTIZANTE\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.738153169Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Sistema Penal Oral Acusatorio Colombiano - Sentencias crímenes contra sindicalistas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL91324cc91090e4398021e6e025566707\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.5420584Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Offshore Leaks Database - Intermediares\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLa16d8446a8227752aa2ae58b3fc43e5f\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.602335361Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Procesos Judiciales\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLbdc2f8b9cbbc8fd087c6b6673538219f\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.591445055Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Reportados en el sistema financiero de la unión europea\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc5fa9dab4b5c374cc2f8bbf9c733c64a\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.538825052Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Juzgados De Ejecución De Penas Y Medidas De Seguridad\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc7071b89f577331c89c0f5104ca43a47\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.813472509Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Sistema Penal Oral Acusatorio Colombiano - Notificación a deudores\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc72a9aa99663ab7df2f4f331ad29c964\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.719786828Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Sistema de Selección de Beneficiarios Para Programas Sociales -SISBEN\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLcbf55abed9129c60243ac47c52ed7767\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.785395167Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"FBI\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLd06d79f4d07ef759b43ab15fa9faeda7\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.600501951Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Procuraduría\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLdf21036f47303e6af8c7f3c91d8e02b5\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre Completo\",\n                                    \"value\": \"DANIEL PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Descripción\",\n                                    \"value\": \"EL CIUDADANO NO PRESENTA ANTECEDENTES\"\n                                },\n                                {\n                                    \"label\": \"Resumen\",\n                                    \"value\": \"\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:04.807292878Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Situación Militar\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLecf4b2fb7632ed4909cd2fa1e3bc8a11\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre\",\n                                    \"value\": \"DANIEL PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Estado\",\n                                    \"value\": \"Citado - Junta para Remisos\"\n                                },\n                                {\n                                    \"label\": \"Lugar\",\n                                    \"value\": \"\"\n                                },\n                                {\n                                    \"label\": \"Dirección\",\n                                    \"value\": \"\"\n                                },\n                                {\n                                    \"label\": \"Fecha\",\n                                    \"value\": \"04/12/2017 6:00 a. m.\"\n                                },\n                                {\n                                    \"label\": \"Sexo\",\n                                    \"value\": \"hombre\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.773359876Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Lista de los buscados por Interpol\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf22fde71f18770029c48622e28537ad4\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.555362779Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Sistema de Información y Gestión del Empleo Público\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf307b6a1cf42013077ceff4db01a99a5\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.524434594Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Lista de los mas buscados de la Union Europea\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf4331692ddc3f4ab6447461dd73093e8\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541203842Z\"\n        }\n    ],\n    \"self\": \"/v1/checks/CHKb6e4db0cf044d5849a46ffe8a53c4ebe/details\",\n    \"next\": \"\"\n}"
```

Represents background check details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_id|string|true|none|Associated background check ID|
|data_set|string|true|none|Details dataset|
|database_name|string|true|none|Database name. Do not use this field to identify the database as its value may vary as the check is completed|
|group|string|true|none|table group type|
|id|string|true|none|Detail ID|
|result|string|true|none|Database result|
|score|number|true|none|Partial detail score. Scores are aggregated later in the background check|
|tables|[[Table](#schematable)]|true|none|Query detailed information|

#### Enumerated Values

|Property|Value|
|---|---|
|group|profile|
|group|legal|
|group|affiliations|
|group|vehicle|
|group|global|
|group|media|
|group|unknown|
|result|pending|
|result|found|
|result|not_found|
|result|error|

<h2 id="tocS_CheckDetailsOutput">CheckDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacheckdetailsoutput"></a>
<a id="schema_CheckDetailsOutput"></a>
<a id="tocScheckdetailsoutput"></a>
<a id="tocscheckdetailsoutput"></a>

```json
{
  "details": [
    "{\n    \"details\": [\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Permiso Especial de Permanencia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL01517c1c39ddc95c7aaa666f9169cd80\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.744534427Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Reputational Score\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL04f41606f588357800040e3db341233f\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.714144016Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Fugitivos buscados por la DEA\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL070cb2b7c986717951396233242f6149\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.538430761Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Policía: Sistema Registro Nacional de Medidas Correctivas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL07516c1ce1e175a9a68b17eb7f97810d\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.724237843Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Certificación del estado de Cédula de Extranjería\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0847f6c3eaf8f37bbc33bcbca6ab8fe6\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.714552784Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Consolidated Screening Lists\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0ac51d4fd9beba3dfe72da2e8ada9292\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.546955261Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"business_background\",\n            \"database_name\": \"Banco Interamericano de Desarrollo\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL0c554e290fd791243a6443ead757bc66\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.537528917Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Certificados Digitales SENA\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL1a32fc0c11dc96c8af86e76d2e3a1b06\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.794932848Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Policía Nacional de Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2506c29ee2f8afe3dfa1dae30fbddf52\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.81398584Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Consulta antecedentes disciplinarios Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2afe1d921806d2061ce13b84defa73fd\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.798192725Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"World Bank Debarred Firms\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2bc8aae0e1363d65956e4427555fcd31\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541260667Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Federal Bureau Of Prisons\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL2c30c2f61b9ac3433dbff85e3a01d309\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.542345514Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"\",\n            \"database_name\": \"Registro Único de Afiliados\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL3e957dc203f7fe5f49469620da2ba796\",\n            \"issued_at\": \"\",\n            \"result\": \"ignored\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.715970317Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Lugar de votación\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL3f36182d388da0fa45bf004d75f2e1e5\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"NUIP\",\n                                    \"value\": \"1143861771\"\n                                },\n                                {\n                                    \"label\": \"DEPARTAMENTO\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                },\n                                {\n                                    \"label\": \"MUNICIPIO\",\n                                    \"value\": \"BOGOTA. D.C.\"\n                                },\n                                {\n                                    \"label\": \"PUESTO\",\n                                    \"value\": \"HACIENDA SANTA BARBARA\"\n                                },\n                                {\n                                    \"label\": \"DIRECCIÓN\",\n                                    \"value\": \"CLL 114 CR 6 ENT. ZONA C-CRA 6 No 115-65 ENT. F\"\n                                },\n                                {\n                                    \"label\": \"MESA\",\n                                    \"value\": \"46\"\n                                },\n                                {\n                                    \"label\": \"FECHA INSCRIPCIÓN\",\n                                    \"value\": \"Oct 29 2017 12:00AM\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.72155298Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Fondo de Pensiones Públicas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL583fefc7ff636631c7fb8a65731990e4\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.711765389Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"alert_in_media\",\n            \"database_name\": \"Google\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5bbf3f005f098fe9a78611e7ee1927ca\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.584036916Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Procesos Judiciales\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5ea28119815396422268ba6c47a2ac18\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.76521174Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Sistema Electrónico de Contratación Pública Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL5f7fe3a476a9eb2ca5f03cd99db03495\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.719849266Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Procuraduría\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL657c426daaf23b25c5c0554412e46e0c\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.738352721Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Instituto Nacional Penitenciario y Carcelario\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL6cb0095baf857ed41988efbf00043c2a\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:19.963833191Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Boletín de Deudores Morosos del Estado\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL7b8a285ffd13393fe1f52af8b175e563\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.720675312Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Policía Nacional de Colombia\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL7c87b3fba1c3b12f4624d5818b84242c\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Reporte Policía\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre Completo\",\n                                    \"value\": \"PERILLA OCAMPO DANIEL\"\n                                },\n                                {\n                                    \"label\": \"Resultado\",\n                                    \"value\": \"NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.813979628Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Oficina de control de activos extranjeros\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8045640030144c2fc8881325827cb4ec\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.790974816Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"United Nations Security Council Consolidate List\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8b68831f398a6cea0161c1933ae63637\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541204049Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Offshore Leaks Database - Officers\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8d5eb2af69dd2f18929d05080e519d91\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.556381167Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Afiliados del régimen contributivo y subsidiado\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL8f2dadba8e04240cfda6cbb93b4c21b8\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Tipo de Identificación\",\n                                    \"value\": \"CC\"\n                                },\n                                {\n                                    \"label\": \"Número de Identificación\",\n                                    \"value\": \"1143861771\"\n                                },\n                                {\n                                    \"label\": \"Nombres\",\n                                    \"value\": \"DANIEL\"\n                                },\n                                {\n                                    \"label\": \"Apellidos\",\n                                    \"value\": \"PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Departamento\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                },\n                                {\n                                    \"label\": \"Municipio\",\n                                    \"value\": \"BOGOTA D.C.\"\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"title\": \"Información afiliación\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Estado\",\n                                    \"value\": \"RETIRADO\"\n                                },\n                                {\n                                    \"label\": \"Entidad\",\n                                    \"value\": \"COMPENSAR E.P.S.\"\n                                },\n                                {\n                                    \"label\": \"Régimen\",\n                                    \"value\": \"CONTRIBUTIVO\"\n                                },\n                                {\n                                    \"label\": \"Fecha afiliación efectiva\",\n                                    \"value\": \"01/10/2016\"\n                                },\n                                {\n                                    \"label\": \"Fecha finalización afiliación\",\n                                    \"value\": \"30/04/2018\"\n                                },\n                                {\n                                    \"label\": \"Tipo de afiliado\",\n                                    \"value\": \"COTIZANTE\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.738153169Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Sistema Penal Oral Acusatorio Colombiano - Sentencias crímenes contra sindicalistas\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTL91324cc91090e4398021e6e025566707\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.5420584Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Offshore Leaks Database - Intermediares\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLa16d8446a8227752aa2ae58b3fc43e5f\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.602335361Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Procesos Judiciales\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLbdc2f8b9cbbc8fd087c6b6673538219f\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.591445055Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Reportados en el sistema financiero de la unión europea\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc5fa9dab4b5c374cc2f8bbf9c733c64a\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.538825052Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Juzgados De Ejecución De Penas Y Medidas De Seguridad\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc7071b89f577331c89c0f5104ca43a47\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.813472509Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"legal_background\",\n            \"database_name\": \"Sistema Penal Oral Acusatorio Colombiano - Notificación a deudores\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLc72a9aa99663ab7df2f4f331ad29c964\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.719786828Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"affiliations_and_insurances\",\n            \"database_name\": \"Sistema de Selección de Beneficiarios Para Programas Sociales -SISBEN\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLcbf55abed9129c60243ac47c52ed7767\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person\",\n            \"severity\": \"unknown\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:03.785395167Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"FBI\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLd06d79f4d07ef759b43ab15fa9faeda7\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.600501951Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"criminal_record\",\n            \"database_name\": \"Procuraduría\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLdf21036f47303e6af8c7f3c91d8e02b5\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre Completo\",\n                                    \"value\": \"DANIEL PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Descripción\",\n                                    \"value\": \"EL CIUDADANO NO PRESENTA ANTECEDENTES\"\n                                },\n                                {\n                                    \"label\": \"Resumen\",\n                                    \"value\": \"\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:04.807292878Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"personal_identity\",\n            \"database_name\": \"Situación Militar\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"DANIEL\",\n            \"found_last_name\": \"PERILLA OCAMPO\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLecf4b2fb7632ed4909cd2fa1e3bc8a11\",\n            \"issued_at\": \"\",\n            \"result\": \"found\",\n            \"route\": \"person\",\n            \"severity\": \"none\",\n            \"tables\": [\n                {\n                    \"title\": \"Información general\",\n                    \"rows\": [\n                        {\n                            \"cells\": [\n                                {\n                                    \"label\": \"Nombre\",\n                                    \"value\": \"DANIEL PERILLA OCAMPO\"\n                                },\n                                {\n                                    \"label\": \"Estado\",\n                                    \"value\": \"Citado - Junta para Remisos\"\n                                },\n                                {\n                                    \"label\": \"Lugar\",\n                                    \"value\": \"\"\n                                },\n                                {\n                                    \"label\": \"Dirección\",\n                                    \"value\": \"\"\n                                },\n                                {\n                                    \"label\": \"Fecha\",\n                                    \"value\": \"04/12/2017 6:00 a. m.\"\n                                },\n                                {\n                                    \"label\": \"Sexo\",\n                                    \"value\": \"hombre\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            \"update_date\": \"2019-08-08T19:48:03.773359876Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Lista de los buscados por Interpol\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf22fde71f18770029c48622e28537ad4\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.555362779Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"professional_background\",\n            \"database_name\": \"Sistema de Información y Gestión del Empleo Público\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf307b6a1cf42013077ceff4db01a99a5\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.524434594Z\"\n        },\n        {\n            \"check_id\": \"CHKb6e4db0cf044d5849a46ffe8a53c4ebe\",\n            \"data_set\": \"international_background\",\n            \"database_name\": \"Lista de los mas buscados de la Union Europea\",\n            \"depth\": 0,\n            \"found_company_name\": \"\",\n            \"found_first_name\": \"\",\n            \"found_last_name\": \"\",\n            \"found_rfc\": \"\",\n            \"id\": \"DTLf4331692ddc3f4ab6447461dd73093e8\",\n            \"issued_at\": \"\",\n            \"result\": \"not_found\",\n            \"route\": \"person-name\",\n            \"severity\": \"none\",\n            \"tables\": null,\n            \"update_date\": \"2019-08-08T19:48:06.541203842Z\"\n        }\n    ],\n    \"self\": \"/v1/checks/CHKb6e4db0cf044d5849a46ffe8a53c4ebe/details\",\n    \"next\": \"\"\n}"
  ],
  "next": "string",
  "self": "string"
}
```

Represents a list of background check details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[[CheckDetails](#schemacheckdetails)]|true|none|Detail list|
|next|string|false|none|Next page path|
|self|string|true|none|Current page path|

<h2 id="tocS_CheckOutput">CheckOutput</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutput"></a>
<a id="schema_CheckOutput"></a>
<a id="tocScheckoutput"></a>
<a id="tocscheckoutput"></a>

```json
{
  "birth_certificate": "sometext",
  "birthday": "2018-02-10T09:30Z",
  "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
  "company_summary": {
    "names_found": [
      {
        "count": 3,
        "first_name": "Truora",
        "last_name": ""
      },
      {
        "count": 1,
        "first_name": "Other company",
        "last_name": ""
      }
    ]
  },
  "country": "bo",
  "creation_date": "2018-02-10T09:30Z",
  "diplomatic_id": "sometext",
  "driver_license": "sometext",
  "expedition_date": "2018-02-10T09:30Z",
  "first_name": "Cesar Augusto",
  "foreign_id": "sometext",
  "homonym_probability": 0.6,
  "homonym_score": 0.84,
  "homonym_scores": [
    {
      "data_set": "vehicle_information",
      "result": "not_found",
      "score": 0.09,
      "severity": "very_low"
    },
    {
      "data_set": "international_background",
      "result": "not_found",
      "score": 0.36,
      "severity": "unknown"
    }
  ],
  "id_score": 0.34,
  "last_name": "Pino Sandoval",
  "license_plate": "sometext",
  "national_id": "sometext",
  "native_country": "co",
  "owner_document_id": "sometext",
  "owner_document_type": "sometext",
  "passport": "sometext",
  "payment_date": "sometext",
  "pep": "sometext",
  "professional_card": "sometext",
  "ptp": "sometext",
  "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
  "score": 0.34,
  "scores": [
    {
      "by_id": {
        "result": "not_found",
        "score": 1,
        "severity": "none"
      },
      "by_name": {
        "result": "found",
        "score": 0.78,
        "severity": "low"
      },
      "data_set": "alert_in_media",
      "result": "not_found",
      "score": 0.96,
      "severity": "very_low"
    },
    {
      "by_id": {
        "result": "found",
        "score": 0.79,
        "severity": "high"
      },
      "by_name": {
        "result": "ignored",
        "score": 1,
        "severity": "unknown"
      },
      "data_set": "business_background",
      "result": "delayed",
      "score": 0.79,
      "severity": "high"
    }
  ],
  "status": "completed",
  "statuses": [
    {
      "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
      "database_name": "Licencias de Conducción Santiago de Chile",
      "invalid_inputs": [
        "driver_license"
      ],
      "status": "skipped"
    },
    {
      "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
      "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
      "status": "completed"
    }
  ],
  "summary": {
    "birthday": "2018-02-10T09:30Z",
    "death_date": "2018-02-10T09:30Z",
    "drivers_license": "1144025634",
    "gender": "female",
    "identity_status": "dead",
    "imss": "sometext",
    "names_found": [
      {
        "count": 7,
        "first_name": "César Augusto",
        "last_name": "Pino Sandoval"
      },
      {
        "count": 1,
        "first_name": "Pepito",
        "last_name": "Perez"
      }
    ],
    "rfc": "MUTT920802FP2"
  },
  "tax_id": "901189979-5",
  "type": "vehicle",
  "update_date": "2018-02-10T09:30Z",
  "vehicle_id": "sometext",
  "vehicle_summary": {
    "capacity": 1000,
    "color": "red",
    "license_plate": "IIR350",
    "manufacturer": "Ford",
    "model": "ESCAPE",
    "number_of_doors": 5,
    "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
    "obligatory_insurance_status": "VIGENTE",
    "service_type": "privado",
    "vehicle_category": "particular",
    "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
    "vehicle_type": "Camioneta",
    "year": 2018
  }
}
```

Represents the result of a background check search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check|[Check](#schemacheck)|true|none|Background check data found|
|details|string|true|none|Detail path|
|self|string|true|none|Background check URL|

<h2 id="tocS_ChecksOutput">ChecksOutput</h2>
<!-- backwards compatibility -->
<a id="schemachecksoutput"></a>
<a id="schema_ChecksOutput"></a>
<a id="tocSchecksoutput"></a>
<a id="tocschecksoutput"></a>

```json
{
  "checks": [
    {
      "birth_certificate": "sometext",
      "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
      "company_summary": {
        "names_found": [
          {
            "count": 3,
            "first_name": "Truora",
            "last_name": ""
          },
          {
            "count": 1,
            "first_name": "Other company",
            "last_name": ""
          }
        ]
      },
      "country": "bo",
      "creation_date": "2018-02-10T09:30Z",
      "date_of_birth": "2018-02-10T09:30Z",
      "diplomatic_id": "sometext",
      "driver_license": "sometext",
      "first_name": "Cesar Augusto",
      "foreign_id": "sometext",
      "homonym_probability": 0.6,
      "homonym_score": 0.84,
      "homonym_scores": [
        {
          "data_set": "vehicle_information",
          "result": "not_found",
          "score": 0.09,
          "severity": "very_low"
        },
        {
          "data_set": "international_background",
          "result": "not_found",
          "score": 0.36,
          "severity": "unknown"
        }
      ],
      "id_score": 0.34,
      "issue_date": "2018-02-10T09:30Z",
      "last_name": "Pino Sandoval",
      "license_plate": "sometext",
      "national_id": "sometext",
      "native_country": "co",
      "owner_document_id": "sometext",
      "owner_document_type": "sometext",
      "passport": "sometext",
      "payment_date": "sometext",
      "pep": "sometext",
      "professional_card": "sometext",
      "ptp": "sometext",
      "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
      "score": 0.34,
      "scores": [
        {
          "by_id": {
            "result": "not_found",
            "score": 1,
            "severity": "none"
          },
          "by_name": {
            "result": "found",
            "score": 0.78,
            "severity": "low"
          },
          "data_set": "alert_in_media",
          "result": "found",
          "score": 0.96,
          "severity": "very_low"
        },
        {
          "by_id": {
            "result": "found",
            "score": 0.79,
            "severity": "high"
          },
          "by_name": {
            "result": "ignored",
            "score": 1,
            "severity": "unknown"
          },
          "data_set": "business_background",
          "result": "delayed",
          "score": 0.79,
          "severity": "high"
        }
      ],
      "status": "completed",
      "statuses": [
        {
          "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
          "database_name": "Licencias de Conducción Santiago de Chile",
          "invalid_inputs": [
            "driver_license"
          ],
          "status": "skipped"
        },
        {
          "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
          "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
          "status": "completed"
        }
      ],
      "summary": {
        "date_of_birth": "2018-02-10T09:30Z",
        "death_date": "2018-02-10T09:30Z",
        "drivers_license": "1144025634",
        "gender": "female",
        "identity_status": "dead",
        "imss": "sometext",
        "names_found": [
          {
            "count": 7,
            "first_name": "César Augusto",
            "last_name": "Pino Sandoval"
          },
          {
            "count": 1,
            "first_name": "Pepito",
            "last_name": "Perez"
          }
        ],
        "rfc": "MUTT920802FP2"
      },
      "tax_id": "901189979-5",
      "type": "vehicle",
      "update_date": "2018-02-10T09:30Z",
      "vehicle_id": "sometext",
      "vehicle_summary": {
        "capacity": 1000,
        "color": "red",
        "license_plate": "IIR350",
        "manufacturer": "Ford",
        "model": "ESCAPE",
        "number_of_doors": 5,
        "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
        "obligatory_insurance_status": "VIGENTE",
        "service_type": "privado",
        "vehicle_category": "particular",
        "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
        "vehicle_type": "Camioneta",
        "year": 2018
      }
    }
  ],
  "next": "string",
  "self": "string"
}
```

Represents the results of a background check search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[Check](#schemacheck)]|true|none|Background check list in the page|
|next|string|false|none|Next page path|
|self|string|true|none|Current page path|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "check_id": "string",
  "content": "string",
  "creation_date": "string",
  "id": "string",
  "parent_id": "string",
  "update_date": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_id|string|true|none|Background check ID|
|content|string|true|none|Comment content|
|creation_date|string|true|none|Comment creation date|
|id|string|true|none|Comment ID|
|parent_id|string|false|none|Comment parent ID|
|update_date|string|true|none|Comment update date|
|username|string|true|none|Comment creator username|

<h2 id="tocS_CommentOutput">CommentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacommentoutput"></a>
<a id="schema_CommentOutput"></a>
<a id="tocScommentoutput"></a>
<a id="tocscommentoutput"></a>

```json
{
  "comment": {
    "check_id": "string",
    "content": "string",
    "creation_date": "string",
    "id": "string",
    "parent_id": "string",
    "update_date": "string",
    "username": "string"
  },
  "self": "string"
}
```

Represents a comment search result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[Comment](#schemacomment)|true|none|Comment object|
|self|string|true|none|Current comment path|

<h2 id="tocS_CommentsOutput">CommentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacommentsoutput"></a>
<a id="schema_CommentsOutput"></a>
<a id="tocScommentsoutput"></a>
<a id="tocscommentsoutput"></a>

```json
{
  "comments": [
    {
      "check_id": "string",
      "content": "string",
      "creation_date": "string",
      "id": "string",
      "parent_id": "string",
      "update_date": "string",
      "username": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

Represents comment search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[[Comment](#schemacomment)]|true|none|Comment list|
|next|string|true|none|Next page path|
|previous|string|true|none|Previous page path|

<h2 id="tocS_CompanySummary">CompanySummary</h2>
<!-- backwards compatibility -->
<a id="schemacompanysummary"></a>
<a id="schema_CompanySummary"></a>
<a id="tocScompanysummary"></a>
<a id="tocscompanysummary"></a>

```json
{
  "names_found": [
    {
      "count": 0,
      "first_name": "string",
      "last_name": "string"
    }
  ]
}
```

Represents the summary of a company background check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names_found|[[NameFound](#schemanamefound)]|false|none|Names found during the background check process|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "client_id": "string",
  "config_id": "string",
  "score_config": {
    "data_set": "string",
    "weight": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|Client ID|
|config_id|string|true|none|Configuration ID|
|score_config|[ScoreConfig](#schemascoreconfig)|true|none|Score ID|

<h2 id="tocS_ContinuousCheck">ContinuousCheck</h2>
<!-- backwards compatibility -->
<a id="schemacontinuouscheck"></a>
<a id="schema_ContinuousCheck"></a>
<a id="tocScontinuouscheck"></a>
<a id="tocscontinuouscheck"></a>

```json
{
  "ContinuousCheckID": "string",
  "ContinuousCheckStatus": "new",
  "CreationDate": "1970-01-01",
  "Enabled": true,
  "Frequency": "string",
  "History": {
    "changes": [
      {
        "dataset_score_changes": 0,
        "score_changes": [
          {}
        ]
      }
    ],
    "check_id": "string",
    "continuous_check_id": "string",
    "creation_date": "1970-01-01",
    "previous_check_id": "string"
  },
  "LastCheckID": "string",
  "NextRunDate": "1970-01-01",
  "OriginalCheck": {
    "birth_certificate": "sometext",
    "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
    "company_summary": {
      "names_found": [
        {
          "count": 3,
          "first_name": "Truora",
          "last_name": ""
        },
        {
          "count": 1,
          "first_name": "Other company",
          "last_name": ""
        }
      ]
    },
    "country": "bo",
    "creation_date": "2018-02-10T09:30Z",
    "date_of_birth": "2018-02-10T09:30Z",
    "diplomatic_id": "sometext",
    "driver_license": "sometext",
    "first_name": "Cesar Augusto",
    "foreign_id": "sometext",
    "homonym_probability": 0.6,
    "homonym_score": 0.84,
    "homonym_scores": [
      {
        "data_set": "vehicle_information",
        "result": "not_found",
        "score": 0.09,
        "severity": "very_low"
      },
      {
        "data_set": "international_background",
        "result": "not_found",
        "score": 0.36,
        "severity": "unknown"
      }
    ],
    "id_score": 0.34,
    "issue_date": "2018-02-10T09:30Z",
    "last_name": "Pino Sandoval",
    "license_plate": "sometext",
    "national_id": "sometext",
    "native_country": "co",
    "owner_document_id": "sometext",
    "owner_document_type": "sometext",
    "passport": "sometext",
    "payment_date": "sometext",
    "pep": "sometext",
    "professional_card": "sometext",
    "ptp": "sometext",
    "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
    "score": 0.34,
    "scores": [
      {
        "by_id": {
          "result": "not_found",
          "score": 1,
          "severity": "none"
        },
        "by_name": {
          "result": "found",
          "score": 0.78,
          "severity": "low"
        },
        "data_set": "alert_in_media",
        "result": "found",
        "score": 0.96,
        "severity": "very_low"
      },
      {
        "by_id": {
          "result": "found",
          "score": 0.79,
          "severity": "high"
        },
        "by_name": {
          "result": "ignored",
          "score": 1,
          "severity": "unknown"
        },
        "data_set": "business_background",
        "result": "delayed",
        "score": 0.79,
        "severity": "high"
      }
    ],
    "status": "completed",
    "statuses": [
      {
        "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
        "database_name": "Licencias de Conducción Santiago de Chile",
        "invalid_inputs": [
          "driver_license"
        ],
        "status": "skipped"
      },
      {
        "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
        "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
        "status": "completed"
      }
    ],
    "summary": {
      "date_of_birth": "2018-02-10T09:30Z",
      "death_date": "2018-02-10T09:30Z",
      "drivers_license": "1144025634",
      "gender": "female",
      "identity_status": "dead",
      "imss": "sometext",
      "names_found": [
        {
          "count": 7,
          "first_name": "César Augusto",
          "last_name": "Pino Sandoval"
        },
        {
          "count": 1,
          "first_name": "Pepito",
          "last_name": "Perez"
        }
      ],
      "rfc": "MUTT920802FP2"
    },
    "tax_id": "901189979-5",
    "type": "vehicle",
    "update_date": "2018-02-10T09:30Z",
    "vehicle_id": "sometext",
    "vehicle_summary": {
      "capacity": 1000,
      "color": "red",
      "license_plate": "IIR350",
      "manufacturer": "Ford",
      "model": "ESCAPE",
      "number_of_doors": 5,
      "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
      "obligatory_insurance_status": "VIGENTE",
      "service_type": "privado",
      "vehicle_category": "particular",
      "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
      "vehicle_type": "Camioneta",
      "year": 2018
    }
  },
  "UpdateDate": "1970-01-01"
}
```

Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousCheckID|string|false|none|Continuous check ID [partition key and sort key]|
|ContinuousCheckStatus|string|true|none|Shows whether the background check score rose, fell, stood the same or was just created|
|CreationDate|string(date)|false|none|Continuous check creation date in RFC3339 format|
|Enabled|boolean|false|none|Indicates whether continuous check is enabled|
|Frequency|string|true|none|Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks|
|History|[ContinuousCheckEntry](#schemacontinuouscheckentry)|false|none|Background check changelog|
|LastCheckID|string|true|none|Last check ID|
|NextRunDate|string(date)|false|none|Next background check date, in RFC3339 format (without time)|
|OriginalCheck|[Check](#schemacheck)|false|none|First check|
|UpdateDate|string(date)|false|none|Continuous check update date in RFC3339 format|

#### Enumerated Values

|Property|Value|
|---|---|
|ContinuousCheckStatus|new|
|ContinuousCheckStatus|up|
|ContinuousCheckStatus|down|
|ContinuousCheckStatus|same|

<h2 id="tocS_ContinuousCheckEntry">ContinuousCheckEntry</h2>
<!-- backwards compatibility -->
<a id="schemacontinuouscheckentry"></a>
<a id="schema_ContinuousCheckEntry"></a>
<a id="tocScontinuouscheckentry"></a>
<a id="tocscontinuouscheckentry"></a>

```json
{
  "changes": [
    {
      "dataset_score_changes": 0,
      "score_changes": [
        {}
      ]
    }
  ],
  "check_id": "string",
  "continuous_check_id": "string",
  "creation_date": "1970-01-01",
  "previous_check_id": "string"
}
```

Represents to changelog entry of a continuous check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[Change](#schemachange)]|false|none|Change list of background check scores|
|check_id|string|false|none|Check ID|
|continuous_check_id|string|false|none|Continuous check ID|
|creation_date|string(date)|false|none|Continuous check creation date in RFC3339 format<br>|
|previous_check_id|string|false|none|Previous check ID|

<h2 id="tocS_CreateAPIKeyInput">CreateAPIKeyInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyinput"></a>
<a id="schema_CreateAPIKeyInput"></a>
<a id="tocScreateapikeyinput"></a>
<a id="tocscreateapikeyinput"></a>

```json
{
  "days_exp": 0,
  "key_name": "string",
  "tenant": "string",
  "version": "string"
}
```

Represents information required to create an API key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days_exp|integer|true|none|Time in days the API key will be valid for. 365 by default|
|key_name|string|true|none|API key name|
|tenant|string|true|none|API key owner name|
|version|string|true|none|API key version. 0 by default|

<h2 id="tocS_CreateBehaviorInput">CreateBehaviorInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebehaviorinput"></a>
<a id="schema_CreateBehaviorInput"></a>
<a id="tocScreatebehaviorinput"></a>
<a id="tocscreatebehaviorinput"></a>

```json
{
  "birth_date": "1970-01-01T00:00:00Z",
  "country": "co",
  "document_id": "string",
  "document_type": "national-id",
  "email": "string",
  "feedback_date": "1970-01-01T00:00:00Z",
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "reason": "rape"
}
```

Represents paramaters required to give behavior feedback

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_date|string(date-time)|true|none|Birth date of reported person|
|country|string|true|none|Document country|
|document_id|string|true|none|Person document ID|
|document_type|string|true|none|Document type associated with the background check|
|email|string|true|none|Reported person e-mail|
|feedback_date|string(date-time)|true|none|Behavior report date|
|first_name|string|true|none|Person first name|
|last_name|string|true|none|Person last name|
|phone_number|string|false|none|Phone number of the reported person|
|reason|string|true|none|Report reason|

#### Enumerated Values

|Property|Value|
|---|---|
|country|co|
|country|ve|
|country|cl|
|country|mx|
|country|pe|
|country|do|
|country|sv|
|country|gt|
|country|bo|
|country|cr|
|country|ec|
|country|pa|
|country|br|
|document_type|national-id|
|document_type|passport|
|document_type|foreign-id|
|document_type|nit|
|document_type|diplomatic-id|
|document_type|civil-registration|
|document_type|identity-card|
|document_type|foreigner-card|
|document_type|professional-card|
|document_type|military-card|
|document_type|pep|
|document_type|nis|
|document_type|dni|
|document_type|rui|
|document_type|license-plate|
|document_type|query|
|document_type|name|
|document_type|rut|
|document_type|nuip|
|document_type|foreign-societies|
|document_type|escrow|
|document_type|individual-registration|
|document_type|general-registration|
|document_type|curp|
|document_type|dui|
|document_type|driver-license|
|document_type|ruc|
|reason|rape|
|reason|drug-dealer|
|reason|sexual-harassment|
|reason|theft|
|reason|fights|
|reason|aggressive-behaviour|
|reason|identity-fraud|
|reason|drunk|
|reason|drug-possession|
|reason|absences|
|reason|tardiness|
|reason|confidentiality-breach|
|reason|good-reputation|

<h2 id="tocS_CreateCheckInput">CreateCheckInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecheckinput"></a>
<a id="schema_CreateCheckInput"></a>
<a id="tocScreatecheckinput"></a>
<a id="tocscreatecheckinput"></a>

```json
{
  "country": {},
  "date_of_birth": "string",
  "expedition_date": "string",
  "first_name": "string",
  "force_creation": true,
  "last_name": "string",
  "license_plate": "string",
  "national_id": "string",
  "report_id": "string"
}
```

Represents paramaters required to create a background check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_certificate|string|false|none|Person birth certificate|
|company_name|string|false|none|Company name "Don't forget this required field to complete background checks in Brazil"|
|country|string|true|none|Document country|
|date_of_birth|string(date)|false|none|Person birthdate. This date is used to get some additional information about a person and to filter homonyms in some cases. YYYY-MM-DD format, Required for complete background checks in Brazil|
|diplomatic_id|string|false|none|Diplomatic ID|
|driver_license|string|false|none|Driver's license number|
|escrow|string|false|none|Colombian escrow|
|first_name|string|false|none|Person or entity first name. If the document type and number are not provided, the report might include homonyms. Required when searching by first name, Required in order to get complete background checks in Brazil|
|force_creation|boolean|false|none|Forces a new background check creation when true. Reuses recently created background checks otherwise|
|foreign_id|string|false|none|Person foreign ID|
|issue_date|string(date)|false|none|Person document issue date in "YYYY-mm-dd" format (e.g. 2008-12-31) . This date is used to get some additional information about a person in some cases|
|last_name|string|false|none|Person or entity last name. If the document type and number are not provided, the report might include homonyms. Required when searching by last name. Required in order to get complete background checks in Brazil|
|license_plate|string|false|none|Vehicle license plate|
|national_id|string|false|none|National ID|
|native_country|string|false|none|Country of birth|
|owner_document_id|string|false|none|National ID of the vehicle owner|
|owner_document_type|string|false|none|National ID, foreign ID, or tax ID|
|passport|string|false|none|Person passport|
|payment_date|string(date)|false|none|Payment day of a vehicle circulation permit (Chile only)|
|pep|string|false|none|ID for Venezuelans working in Colombia|
|phone_number|string|false|none|Person phone number. Required by law to notify the person their background is being checked|
|professional_card|string|false|none|Professional ID card|
|ptp|string|false|none|ID for Venezuelans working in Peru|
|region|string|false|none|Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.|
|report_id|string|false|none|Report ID the background check will be inserted into|
|state_id|string|false|none| Used for the RG (Registro Geral) identification in Brazil. This identification has different formats according to the state that issues the document. It can have numbers and letters but other characters (- * , . ) are omitted, Required in order to get complete background checks in Brazil|
|tax_id|string|false|none|Company ID used for tax payments|
|type|string|true|none|Background check type|
|user_authorized|boolean|false|none|Indicates whether the person subject to the validation authorized the validation. Must be true in order to proceed [Required for API key V1 or later]|
|vehicle_id|string|false|none|Vehicle license plate|
|verification_code|string|false|none|Verification code registered for criminal records in Peru only|
|watch|string|false|none|Indicates whether the check score is to be periodically revised and its frequency. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks. Ignore this field if the check is only to be performed once|

#### Enumerated Values

|Property|Value|
|---|---|
|country|ALL|
|country|BR|
|country|CL|
|country|CO|
|country|CR|
|country|EC|
|country|MX|
|country|PE|
|country|AR|
|region|DF|
|region|AC|
|region|AL|
|region|AP|
|region|AM|
|region|BA|
|region|CE|
|region|ES|
|region|GO|
|region|MA|
|region|MT|
|region|MS|
|region|MG|
|region|PA|
|region|PB|
|region|PR|
|region|PE|
|region|PI|
|region|RJ|
|region|RN|
|region|RS|
|region|RO|
|region|RR|
|region|SC|
|region|SP|
|region|SE|
|region|TO|
|type|person|
|type|vehicle|
|type|company|
|type|custom_type_name|

<h2 id="tocS_CreateCommentInput">CreateCommentInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentinput"></a>
<a id="schema_CreateCommentInput"></a>
<a id="tocScreatecommentinput"></a>
<a id="tocscreatecommentinput"></a>

```json
{
  "content": null
}
```

Represents paramaters required to create a comment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|Comment content|

<h2 id="tocS_CreateConfigInput">CreateConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfiginput"></a>
<a id="schema_CreateConfigInput"></a>
<a id="tocScreateconfiginput"></a>
<a id="tocscreateconfiginput"></a>

```json
{
  "country": "ALL",
  "dataset_affiliations_and_insurances": 0,
  "dataset_alert_in_media": 0,
  "dataset_business_background": 0,
  "dataset_criminal_record": 0,
  "dataset_driving_licenses": 0,
  "dataset_international_background": 0,
  "dataset_legal_background": 0,
  "dataset_personal_identity": 0,
  "dataset_professional_background": 0,
  "dataset_taxes_and_finances": 0,
  "dataset_traffic_fines": 0,
  "dataset_vehicle_information": 0,
  "dataset_vehicle_permits": 0,
  "type": "string"
}
```

Represents paramaters required to create a score configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases|
|dataset_affiliations_and_insurances|number(float)|false|none|Affiliation and insurance weight for score calculation. From 0 to 1|
|dataset_alert_in_media|number(float)|false|none|Alert in media weight for score calculation. From 0 to 1|
|dataset_business_background|number(float)|false|none|Business background weight for score calculation. From 0 to 1|
|dataset_criminal_record|number(float)|false|none|Criminal record weight for score calculation. From 0 to 1|
|dataset_driving_licenses|number(float)|false|none|Driving license weight for score calculation. From 0 to 1|
|dataset_international_background|number(float)|false|none|International background weight for score calculation. From 0 to 1|
|dataset_legal_background|number(float)|false|none|Legal background weight for score calculation. From 0 to 1|
|dataset_personal_identity|number(float)|false|none|Personal identity weight for score calculation. From 0 to 1|
|dataset_professional_background|number(float)|false|none|Professional background weight for score calculation. From 0 to 1|
|dataset_taxes_and_finances|number(float)|false|none|Taxes and financial background weight for score calculation. From 0 to 1|
|dataset_traffic_fines|number(float)|false|none|Traffic fines weight for score calculation. From 0 to 1|
|dataset_vehicle_information|number(float)|false|none|Vehicle information weight for score calculation. From 0 to 1|
|dataset_vehicle_permits|number(float)|false|none|Vehicle certificate background weight for score calculation. From 0 to 1|
|type|string|true|none|Score configuration name. It cannot be person, vehicle, or company|

#### Enumerated Values

|Property|Value|
|---|---|
|country|ALL|
|country|BR|
|country|CL|
|country|CO|
|country|CR|
|country|EC|
|country|MX|
|country|PE|
|country|AR|

<h2 id="tocS_CreateContinuousCheckInput">CreateContinuousCheckInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontinuouscheckinput"></a>
<a id="schema_CreateContinuousCheckInput"></a>
<a id="tocScreatecontinuouscheckinput"></a>
<a id="tocscreatecontinuouscheckinput"></a>

```json
{
  "check_id": "string",
  "frequency": "string",
  "status": "string"
}
```

 Represents to CreateContinuousCheckInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_id|string|false|none|Background checks to be processed recurrently|
|frequency|string|false|none|Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks|
|status|string|false|none|Indicates whether the background checks must be processed recurrently (enabled \| disabled)|

<h2 id="tocS_CreateHookInput">CreateHookInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatehookinput"></a>
<a id="schema_CreateHookInput"></a>
<a id="tocScreatehookinput"></a>
<a id="tocscreatehookinput"></a>

```json
{
  "actions": [
    "string"
  ],
  "event_type": "all",
  "status": "enabled",
  "subscriber_address": "string",
  "subscriber_language": "af",
  "subscriber_name": "string",
  "subscriber_type": "web",
  "subscriber_url": "string"
}
```

Creates a hook related to previous created check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|false|none|Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three|
|event_type|string|true|none|The entity events the client wants to subscribe|
|status|string|false|none|indicates whether the hook is active or not. enabled by default|
|subscriber_address|string|false|none|Email address where the notification is to be sent. Required if subscriber_type was set to email|
|subscriber_language|string|false|none|Language for the notification to be sent|
|subscriber_name|string|false|none|Name of the person to be notified|
|subscriber_type|string|true|none|A platform with an endpoint ready to process the information|
|subscriber_url|string|false|none|URL where the notification is to be sent. Required only if subscriber_type is set to web|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|all|
|event_type|check|
|event_type|continuous_check|
|status|enabled|
|status|disabled|
|subscriber_language|af|
|subscriber_language|ar|
|subscriber_language|ca|
|subscriber_language|cs|
|subscriber_language|da|
|subscriber_language|de|
|subscriber_language|el|
|subscriber_language|en|
|subscriber_language|es|
|subscriber_language|fi|
|subscriber_language|fr|
|subscriber_language|he|
|subscriber_language|hi|
|subscriber_language|hr|
|subscriber_language|hu|
|subscriber_language|id|
|subscriber_language|it|
|subscriber_language|ja|
|subscriber_language|ko|
|subscriber_language|ms|
|subscriber_language|nb|
|subscriber_language|nl|
|subscriber_language|pl|
|subscriber_language|pt|
|subscriber_language|pr-BR|
|subscriber_language|ro|
|subscriber_language|ru|
|subscriber_language|sv|
|subscriber_language|th|
|subscriber_language|tl|
|subscriber_language|tr|
|subscriber_language|vi|
|subscriber_language|zh|
|subscriber_language|zh-CN|
|subscriber_language|zh-HK|
|subscriber_type|web|
|subscriber_type|email|

<h2 id="tocS_CreateReportInput">CreateReportInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereportinput"></a>
<a id="schema_CreateReportInput"></a>
<a id="tocScreatereportinput"></a>
<a id="tocscreatereportinput"></a>

```json
{
  "name": "string"
}
```

Represents paramaters required to create a report

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Report name|

<h2 id="tocS_CreateRuleInput">CreateRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleinput"></a>
<a id="schema_CreateRuleInput"></a>
<a id="tocScreateruleinput"></a>
<a id="tocscreateruleinput"></a>

```json
{
  "label": "string",
  "level": "danger",
  "operation": "==",
  "value": 0
}
```

Represents paramaters required to create a rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Used on the scores that fulfil this rule|
|level|string|true|none|Rule nature|
|operation|string|true|none|Comparison between the rule and score values|
|value|number|true|none|Rule value|

#### Enumerated Values

|Property|Value|
|---|---|
|level|danger|
|level|warning|
|level|success|
|level|info|
|operation|==|
|operation|>=|
|operation|>|
|operation|<|
|operation|<=|

<h2 id="tocS_CreateUserInput">CreateUserInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserinput"></a>
<a id="schema_CreateUserInput"></a>
<a id="tocScreateuserinput"></a>
<a id="tocscreateuserinput"></a>

```json
{
  "country": "string",
  "email": "string",
  "phone_number": "string",
  "tenant": "string"
}
```

Represents the inputs required to create a user for an API-key version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|User country|
|email|string|true|none|User account email|
|phone_number|string|true|none|User phone number (including country code)|
|tenant|string|true|none|Account name|

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "data_sets": [
    "string"
  ],
  "database_id": "string",
  "database_name": "string",
  "hourly_status": [
    "string"
  ]
}
```

Represents a database as well as an hourly status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_sets|[string]|false|none|List of data sets fed by the database. It can contain ``affiliations_and_insurances``, ``alert_in:media``, ``business_background``, ``criminal_record``, ``driving_licenses``, ``international_background``, ``legal_background``, ``personal_identity``, ``permiso_de_circulación_covid-19``, ``professional_background``, ``traffic_fines``, ``vehicle_information``, ``vehicle_permits``, ``behaviour_and_reputation``, or ``taxes_and_finances``|
|database_id|string|false|none|Database identifier|
|database_name|string|false|none|Database name. Do not use this field to identify the database as it might change, use database_id instead|
|hourly_status|[string]|false|none|An hourly list of the database statuses. The ``operational`` status means the database executions were at least 90% successful, ``degraded_performance`` means the database executions were from 50 to 90% successful, ``partial_outage`` means the database executions were from 10 to 50% sucessful, ``major_outage`` means the database executions were under 10% successful. ``under_maintenance`` means the database is temporarily out of service for maintenance, ``deprecated`` means the database is permanently out of service, ``undetermined`` means there was no enough data to assess the database status|

<h2 id="tocS_DeleteAPIKeyInput">DeleteAPIKeyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapikeyinput"></a>
<a id="schema_DeleteAPIKeyInput"></a>
<a id="tocSdeleteapikeyinput"></a>
<a id="tocsdeleteapikeyinput"></a>

```json
{
  "key_name": "string"
}
```

Represents the input required to delete an API Key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key_name|string|true|none|Key name|

<h2 id="tocS_DeleteConfigInput">DeleteConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfiginput"></a>
<a id="schema_DeleteConfigInput"></a>
<a id="tocSdeleteconfiginput"></a>
<a id="tocsdeleteconfiginput"></a>

```json
{}
```

Represents the inputs required to delete a Custom Type

<h2 id="tocS_DeleteUserInput">DeleteUserInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserinput"></a>
<a id="schema_DeleteUserInput"></a>
<a id="tocSdeleteuserinput"></a>
<a id="tocsdeleteuserinput"></a>

```json
{
  "email": "string"
}
```

Repersents the input required to delete an API key user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|email of the API key user|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

The error type is returned when an error occurred in the platform.

Error codes include:

- 10404: resource was not found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Error code|
|message|string|true|none|Message describing the error|

<h2 id="tocS_GetContiuousCheckHistoryOutput">GetContiuousCheckHistoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcontiuouscheckhistoryoutput"></a>
<a id="schema_GetContiuousCheckHistoryOutput"></a>
<a id="tocSgetcontiuouscheckhistoryoutput"></a>
<a id="tocsgetcontiuouscheckhistoryoutput"></a>

```json
{
  "history": [
    {
      "dataset_score_changes": 0,
      "score_changes": [
        {}
      ]
    }
  ],
  "next": "string",
  "self": "string"
}
```

GetContiuousCheckHistoryOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[[Change](#schemachange)]|true|none|List of background check changelogs|
|next|string|false|none|Next page URL|
|self|string|false|none|Current page URL|

<h2 id="tocS_GetHealthDashboardInput">GetHealthDashboardInput</h2>
<!-- backwards compatibility -->
<a id="schemagethealthdashboardinput"></a>
<a id="schema_GetHealthDashboardInput"></a>
<a id="tocSgethealthdashboardinput"></a>
<a id="tocsgethealthdashboardinput"></a>

```json
{
  "country": "string",
  "unixTimestampSeconds": "string",
  "unixtimezoneOffsetSeconds": "string"
}
```

Represents the input required for health dashboard searches

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|Database country in ISO 3166 code. Must be in all caps.|
|unixTimestampSeconds|string|true|none|Unix timestamp. Send the current time to know the status|
|unixtimezoneOffsetSeconds|string|true|none|Offset between the local time and the UTC time in seconds. (e.g., Colombia is located at UTC -18000 seconds)|

<h2 id="tocS_Hook">Hook</h2>
<!-- backwards compatibility -->
<a id="schemahook"></a>
<a id="schema_Hook"></a>
<a id="tocShook"></a>
<a id="tocshook"></a>

```json
{
  "actions": [
    "string"
  ],
  "event_type": "all",
  "signing_key": "string",
  "status": "enabled",
  "subscriber_type": "string",
  "subscriber_url": "string"
}
```

Represents a hook configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|false|none|Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three|
|event_type|string|false|none|Entity events you want to be notified. If all is selected, there is no need to enter actions|
|signing_key|string|false|none|Secret random hexadecimal key used to sign the event and confirm its legitimacy. Signing keys are used to decode the JWT you get as payload from events|
|status|string|false|none|indicates whether the hook is active or not. enabled by default|
|subscriber_type|string|false|none|Platform with an endpoint ready to process the information. Only web is supported currently|
|subscriber_url|string|false|none|Link where notification requests will be sent, required when subscriber_type is web|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|all|
|event_type|check|
|status|enabled|
|status|disabled|

<h2 id="tocS_HookOutput">HookOutput</h2>
<!-- backwards compatibility -->
<a id="schemahookoutput"></a>
<a id="schema_HookOutput"></a>
<a id="tocShookoutput"></a>
<a id="tocshookoutput"></a>

```json
{
  "hooks": [
    {
      "actions": [
        "string"
      ],
      "event_type": "all",
      "signing_key": "string",
      "status": "enabled",
      "subscriber_type": "string",
      "subscriber_url": "string"
    }
  ],
  "next": "string",
  "self": "string",
  "signing_key": "string"
}
```

Represents the output of lists hooks request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hooks|[[Hook](#schemahook)]|false|none|List of hooks in current page.|
|next|string|false|none|Next page URL|
|self|string|false|none|Current page URL|
|signing_key|string|false|none|HMAC key needed to decode the JWTs you will receive. All events are sent in JWT format, this key is needed in order to ensure that only authorized users can decode the information.|

<h2 id="tocS_ListContinuousChecksOutput">ListContinuousChecksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcontinuouschecksoutput"></a>
<a id="schema_ListContinuousChecksOutput"></a>
<a id="tocSlistcontinuouschecksoutput"></a>
<a id="tocslistcontinuouschecksoutput"></a>

```json
{
  "continuous_checks": [
    {
      "birth_certificate": "sometext",
      "check_id": "CHK555c991f53dc70831faf5f6fd853a2c2",
      "company_summary": {
        "names_found": [
          {
            "count": 3,
            "first_name": "Truora",
            "last_name": ""
          },
          {
            "count": 1,
            "first_name": "Other company",
            "last_name": ""
          }
        ]
      },
      "country": "bo",
      "creation_date": "2018-02-10T09:30Z",
      "date_of_birth": "2018-02-10T09:30Z",
      "diplomatic_id": "sometext",
      "driver_license": "sometext",
      "first_name": "Cesar Augusto",
      "foreign_id": "sometext",
      "homonym_probability": 0.6,
      "homonym_score": 0.84,
      "homonym_scores": [
        {
          "data_set": "vehicle_information",
          "result": "not_found",
          "score": 0.09,
          "severity": "very_low"
        },
        {
          "data_set": "international_background",
          "result": "not_found",
          "score": 0.36,
          "severity": "unknown"
        }
      ],
      "id_score": 0.34,
      "issue_date": "2018-02-10T09:30Z",
      "last_name": "Pino Sandoval",
      "license_plate": "sometext",
      "national_id": "sometext",
      "native_country": "co",
      "owner_document_id": "sometext",
      "owner_document_type": "sometext",
      "passport": "sometext",
      "payment_date": "sometext",
      "pep": "sometext",
      "professional_card": "sometext",
      "ptp": "sometext",
      "report_id": "RPT6ebb04c8896bb300c4358ed0240435e4",
      "score": 0.34,
      "scores": [
        {
          "by_id": {
            "result": "not_found",
            "score": 1,
            "severity": "none"
          },
          "by_name": {
            "result": "found",
            "score": 0.78,
            "severity": "low"
          },
          "data_set": "alert_in_media",
          "result": "found",
          "score": 0.96,
          "severity": "very_low"
        },
        {
          "by_id": {
            "result": "found",
            "score": 0.79,
            "severity": "high"
          },
          "by_name": {
            "result": "ignored",
            "score": 1,
            "severity": "unknown"
          },
          "data_set": "business_background",
          "result": "delayed",
          "score": 0.79,
          "severity": "high"
        }
      ],
      "status": "completed",
      "statuses": [
        {
          "database_id": "DBI9c0fcc5f8ad7bf80cdda9595ae83e479b9b8db4c",
          "database_name": "Licencias de Conducción Santiago de Chile",
          "invalid_inputs": [
            "driver_license"
          ],
          "status": "skipped"
        },
        {
          "database_id": "DBIdf5a486fa11494b2571898540051b4868485684f",
          "database_name": "Servicio de Registro Civil e Identificación - Certificado de Nacimiento",
          "status": "completed"
        }
      ],
      "summary": {
        "date_of_birth": "2018-02-10T09:30Z",
        "death_date": "2018-02-10T09:30Z",
        "drivers_license": "1144025634",
        "gender": "female",
        "identity_status": "dead",
        "imss": "sometext",
        "names_found": [
          {
            "count": 7,
            "first_name": "César Augusto",
            "last_name": "Pino Sandoval"
          },
          {
            "count": 1,
            "first_name": "Pepito",
            "last_name": "Perez"
          }
        ],
        "rfc": "MUTT920802FP2"
      },
      "tax_id": "901189979-5",
      "type": "vehicle",
      "update_date": "2018-02-10T09:30Z",
      "vehicle_id": "sometext",
      "vehicle_summary": {
        "capacity": 1000,
        "color": "red",
        "license_plate": "IIR350",
        "manufacturer": "Ford",
        "model": "ESCAPE",
        "number_of_doors": 5,
        "obligatory_insurance_expiration_date": "2018-01-17T00:00:00.000Z",
        "obligatory_insurance_status": "VIGENTE",
        "service_type": "privado",
        "vehicle_category": "particular",
        "vehicle_id": "51d5cc2a-42ed-4a7d-8610-ff48c2f711c0",
        "vehicle_type": "Camioneta",
        "year": 2018
      }
    }
  ],
  "next": "string",
  "self": "string"
}
```

Represents to ListContinuousChecksOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuous_checks|[[Check](#schemacheck)]|false|none|List of continuous checks in current page<br><br>Default: all|
|next|string|false|none|Next page URL|
|self|string|false|none|Current page URL|

<h2 id="tocS_NameFound">NameFound</h2>
<!-- backwards compatibility -->
<a id="schemanamefound"></a>
<a id="schema_NameFound"></a>
<a id="tocSnamefound"></a>
<a id="tocsnamefound"></a>

```json
{
  "count": 0,
  "first_name": "string",
  "last_name": "string"
}
```

Represents names found during the process

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Times this name was found during the background check process|
|first_name|string|true|none|First name found in the background check|
|last_name|string|true|none|Last name found in the background check|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "created_by": "string",
  "created_checks_count": 0,
  "creation_date": "1970-01-01T00:00:00Z",
  "has_data": true,
  "id": "string",
  "invalid_checks_count": 0,
  "name": "string",
  "size": 0,
  "update_date": "1970-01-01T00:00:00Z"
}
```

Represents reports

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|string|false|none|name of the user who created the report|
|created_checks_count|integer|false|none|Amount of created checks. Returned only when a file is uploaded|
|creation_date|string(date-time)|true|none|Report creation date|
|has_data|boolean|false|none|Indicates whether the report has an associated file|
|id|string|true|none|Report ID|
|invalid_checks_count|integer|false|none|number of invalid rows in the uploaded file. Returned only when a file is uploaded|
|name|string|true|none|Report name|
|size|integer|false|none|Uploaded file row count. Returned only when a file is uploaded|
|update_date|string(date-time)|true|none|Latest modification date of the report|

<h2 id="tocS_ReportOutput">ReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemareportoutput"></a>
<a id="schema_ReportOutput"></a>
<a id="tocSreportoutput"></a>
<a id="tocsreportoutput"></a>

```json
{
  "checks": "string",
  "report": {
    "created_by": "string",
    "created_checks_count": 0,
    "creation_date": "1970-01-01T00:00:00Z",
    "has_data": true,
    "id": "string",
    "invalid_checks_count": 0,
    "name": "string",
    "size": 0,
    "update_date": "1970-01-01T00:00:00Z"
  },
  "self": "string"
}
```

Reprents the report creation result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|string|true|none|Path to background check list|
|report|[Report](#schemareport)|true|none|Report searched|
|self|string|false|none|Path to this resource|

<h2 id="tocS_ReportsOutput">ReportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemareportsoutput"></a>
<a id="schema_ReportsOutput"></a>
<a id="tocSreportsoutput"></a>
<a id="tocsreportsoutput"></a>

```json
{
  "next": "string",
  "reports": [
    {
      "created_by": "string",
      "created_checks_count": 0,
      "creation_date": "1970-01-01T00:00:00Z",
      "has_data": true,
      "id": "string",
      "invalid_checks_count": 0,
      "name": "string",
      "size": 0,
      "update_date": "1970-01-01T00:00:00Z"
    }
  ],
  "self": "string"
}
```

Represents the result of report searches

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string|false|none|Next page path|
|reports|[[Report](#schemareport)]|true|none|Report list|
|self|string|true|none|Current page path|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "level": "danger",
  "operation": "==",
  "outcome_label": "string",
  "value": 0
}
```

Represents a rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|true|none|Rule nature|
|operation|string|true|none|Comparison between the rule and score values|
|outcome_label|string|false|none|Used on the scores that fulfil this rule|
|value|number|true|none|Rule value|

#### Enumerated Values

|Property|Value|
|---|---|
|level|danger|
|level|warning|
|level|success|
|level|info|
|operation|==|
|operation|>=|
|operation|>|
|operation|<|
|operation|<=|

<h2 id="tocS_RuleOutput">RuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaruleoutput"></a>
<a id="schema_RuleOutput"></a>
<a id="tocSruleoutput"></a>
<a id="tocsruleoutput"></a>

```json
{
  "rule": {
    "level": "danger",
    "operation": "==",
    "outcome_label": "string",
    "value": 0
  },
  "self": "string"
}
```

Represents the result of a rule search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[Rule](#schemarule)|true|none|Rule object|
|self|string|true|none|Path to this rule|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "by_id": {
    "result": "not_found",
    "score": 1,
    "severity": "none"
  },
  "by_name": {
    "result": "not_found",
    "score": 1,
    "severity": "none"
  },
  "data_set": "affiliations_and_insurances",
  "result": "pending",
  "score": 0,
  "severity": "unknown"
}
```

Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by_id|[ScoreDetail](#schemascoredetail)|true|none|Dataset score detail of the background check result by identity document|
|by_name|[ScoreDetail](#schemascoredetail)|true|none|Score detail of the background check results by name. Might include homonyms|
|data_set|string|true|none|Dataset summed up to create the score|
|result|string|false|none|Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status|
|score|number(float)|true|none|Dataset score. Number between 0 and 1 where 1 is the best score.|
|severity|string|true|none|Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none due to a problem with one of the searches|

#### Enumerated Values

|Property|Value|
|---|---|
|data_set|affiliations_and_insurances|
|data_set|alert_in_media|
|data_set|behavior|
|data_set|business_background|
|data_set|criminal_record|
|data_set|driving_licenses|
|data_set|international_background|
|data_set|legal_background|
|data_set|personal_identity|
|data_set|professional_background|
|data_set|traffic_fines|
|data_set|vehicle_information|
|data_set|vehicle_permits|
|data_set|taxes_and_finances|
|result|pending|
|result|found|
|result|not_found|
|result|error|
|result|delayed|
|result|ignored|
|severity|unknown|
|severity|none|
|severity|very_low|
|severity|low|
|severity|medium|
|severity|high|
|severity|very_high|

<h2 id="tocS_ScoreConfig">ScoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfig"></a>
<a id="schema_ScoreConfig"></a>
<a id="tocSscoreconfig"></a>
<a id="tocsscoreconfig"></a>

```json
{
  "data_set": "string",
  "weight": "string"
}
```

Represents a set of configurations to determine the background check score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_set|string|true|none|Background check dataset|
|weight|string|true|none|Dataset weight for score calculation|

<h2 id="tocS_ScoreConfigOutput">ScoreConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfigoutput"></a>
<a id="schema_ScoreConfigOutput"></a>
<a id="tocSscoreconfigoutput"></a>
<a id="tocsscoreconfigoutput"></a>

```json
{
  "ScoreConfigByCountry": [
    {
      "data_set": "string",
      "weight": "string"
    }
  ]
}
```

Represents a list of score configurations that apply in the country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScoreConfigByCountry|[[ScoreConfig](#schemascoreconfig)]|false|none|List of score configs that apply for the country|

<h2 id="tocS_ScoreConfigsOutput">ScoreConfigsOutput</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfigsoutput"></a>
<a id="schema_ScoreConfigsOutput"></a>
<a id="tocSscoreconfigsoutput"></a>
<a id="tocsscoreconfigsoutput"></a>

```json
{
  "score_configs": [
    {
      "ScoreConfigByCountry": [
        {
          "data_set": "string",
          "weight": "string"
        }
      ]
    }
  ]
}
```

The result of an operation that returns multiple score configs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score_configs|[[ScoreConfigOutput](#schemascoreconfigoutput)]|true|none|The list of score configs|

<h2 id="tocS_ScoreDetail">ScoreDetail</h2>
<!-- backwards compatibility -->
<a id="schemascoredetail"></a>
<a id="schema_ScoreDetail"></a>
<a id="tocSscoredetail"></a>
<a id="tocsscoredetail"></a>

```json
{
  "result": "not_found",
  "score": 1,
  "severity": "none"
}
```

Represents score detail of a background check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status|
|score|number(float)|true|none|Dataset score. Number between 0 and 1 where 1 is the best score.|
|severity|string|true|none|Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none|

#### Enumerated Values

|Property|Value|
|---|---|
|result|pending|
|result|found|
|result|not_found|
|result|error|
|result|delayed|
|result|ignored|
|severity|unknown|
|severity|none|
|severity|very_low|
|severity|low|
|severity|medium|
|severity|high|
|severity|very_high|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "data_set": "criminal record",
  "database_id": "DBI1234",
  "database_name": "Police Records",
  "invalid_inputs": [
    "first_name",
    "last_name"
  ],
  "status": "completed"
}
```

Represents the status of databases used to generate background checks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_set|string|false|none|Background check dataset|
|database_id|string|false|none|Database ID. Can be used to verify the database status|
|database_name|string|false|none|Background check database name. Do not use this field to identify the database as it may change during the check execution. Use database_id instead|
|invalid_inputs|[string]|false|none|List of missing or invalid inputs|
|status|string|false|none|Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the search finished successfully, **error** means the search failed, **expired** means the search took too long to finish and therefore failed, **skipped** means the search failed because a wrong number or type of parameters was provided, **delayed** means the search is waiting for an additional requirement to be met and can last up to 3 days|

#### Enumerated Values

|Property|Value|
|---|---|
|data_set|affiliations_and_insurances|
|data_set|alert_in_media|
|data_set|behavior|
|data_set|business_background|
|data_set|criminal_record|
|data_set|driving_licenses|
|data_set|international_background|
|data_set|legal_background|
|data_set|personal_identity|
|data_set|professional_background|
|data_set|traffic_fines|
|data_set|vehicle_information|
|data_set|vehicle_permits|
|data_set|taxes_and_finances|
|status|not_started|
|status|completed|
|status|expired|
|status|error|
|status|delayed|
|status|skipped|

<h2 id="tocS_Subscriber">Subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "url": "string"
}
```

Subscriber attribute that depends on the subscriber_type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|Link where notification requests will be sent in case subscriber_type is web|

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "date_of_birth": "1970-01-01T00:00:00Z",
  "death_date": "1970-01-01T00:00:00Z",
  "drivers_license": "string",
  "gender": "male",
  "identity_status": "found",
  "names_found": [
    {
      "count": 0,
      "first_name": "string",
      "last_name": "string"
    }
  ],
  "nss": "string",
  "rfc": "string"
}
```

Represents a background check summary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_of_birth|string(date-time)|false|none|Person date of birth in RFC3339 format|
|death_date|string(date-time)|false|none|Person date of death|
|drivers_license|string|false|none|Person driver's license|
|gender|string|false|none|Person gender|
|identity_status|string|false|none|Indicates whether a person was found, found as dead or not found at all|
|names_found|[[NameFound](#schemanamefound)]|true|none|Names found during the background check process|
|nss|string|false|none|Social security number of the person (Mexico)|
|rfc|string|false|none|Federal taxpayer registration number of the person|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|
|identity_status|found|
|identity_status|not_found|
|identity_status|dead|

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "rows": [
    {
      "cells": [
        {
          "label": "string",
          "value": "string"
        }
      ]
    }
  ],
  "title": "string"
}
```

Represents a table to lay out search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[[TableRow](#schematablerow)]|true|none|Table rows|
|title|string|true|none|Table title|

<h2 id="tocS_TableCell">TableCell</h2>
<!-- backwards compatibility -->
<a id="schematablecell"></a>
<a id="schema_TableCell"></a>
<a id="tocStablecell"></a>
<a id="tocstablecell"></a>

```json
{
  "label": "string",
  "value": "string"
}
```

Represents a table cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Cell label|
|value|string|true|none|Cell value|

<h2 id="tocS_TableRow">TableRow</h2>
<!-- backwards compatibility -->
<a id="schematablerow"></a>
<a id="schema_TableRow"></a>
<a id="tocStablerow"></a>
<a id="tocstablerow"></a>

```json
{
  "cells": [
    {
      "label": "string",
      "value": "string"
    }
  ]
}
```

A table row, containing one or more cells

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[TableCell](#schematablecell)]|true|none|Row cells|

<h2 id="tocS_UpdateAPIKeyInput">UpdateAPIKeyInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyinput"></a>
<a id="schema_UpdateAPIKeyInput"></a>
<a id="tocSupdateapikeyinput"></a>
<a id="tocsupdateapikeyinput"></a>

```json
{
  "api_key_version": "string",
  "key_name": "string"
}
```

Represents the input required to update an API key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_version|string|true|none|API key Version|
|key_name|string|true|none|API key name|

<h2 id="tocS_UpdateContinuousCheckInput">UpdateContinuousCheckInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontinuouscheckinput"></a>
<a id="schema_UpdateContinuousCheckInput"></a>
<a id="tocSupdatecontinuouscheckinput"></a>
<a id="tocsupdatecontinuouscheckinput"></a>

```json
{
  "frequency": "string",
  "status": "enabled"
}
```

 Represents to UpdateContinuousCheckInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string|true|none|Time between background checks|
|status|string|true|none|Indicates whether the background checks must be processed recurrently|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "string",
  "enabled": true,
  "user_creation_date": "string",
  "user_status": "FORCE_CHANGE_PASSWORD",
  "username": "string"
}
```

Represents a user of API-key access control

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|User email|
|enabled|boolean|false|none|Indicates whether the user is allowed to access or not|
|user_creation_date|string|false|none|Date on which the user was created|
|user_status|string|false|none|Indicates whether the user is confirmed or needs to change their password|
|username|string|false|none|Username|

#### Enumerated Values

|Property|Value|
|---|---|
|user_status|FORCE_CHANGE_PASSWORD|
|user_status|CONFIRMED|

<h2 id="tocS_VehicleSummary">VehicleSummary</h2>
<!-- backwards compatibility -->
<a id="schemavehiclesummary"></a>
<a id="schema_VehicleSummary"></a>
<a id="tocSvehiclesummary"></a>
<a id="tocsvehiclesummary"></a>

```json
{
  "capacity": 0,
  "color": "string",
  "license_plate": "string",
  "manufacturer": "string",
  "model": "string",
  "number_of_doors": 0,
  "obligatory_insurance_expiration_date": "1970-01-01",
  "obligatory_insurance_status": "string",
  "service_type": "string",
  "vehicle_category": "string",
  "vehicle_id": "string",
  "vehicle_type": "string",
  "year": 0
}
```

Represents the summary of a vehicle background check

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer|false|none|Number of passengers allowed to travel in the vehicle|
|color|string|false|none|Vehicle color|
|license_plate|string|false|none|Vehicle license plate|
|manufacturer|string|false|none|Vehicle manufacturer|
|model|string|false|none|Vehicle model|
|number_of_doors|integer|false|none|Vehicle door count|
|obligatory_insurance_expiration_date|string(date)|false|none|Expiration date of the vehicle compulsory insurance |
|obligatory_insurance_status|string|false|none|Status of the vehicle compulsory insurances|
|service_type|string|false|none|Vehicle service type|
|vehicle_category|string|false|none|Vehicle category|
|vehicle_id|string|false|none|Vehicle ID|
|vehicle_type|string|false|none|Vehicle type|
|year|integer|false|none|Vehicle model year|

<h2 id="tocS_WrongInput">WrongInput</h2>
<!-- backwards compatibility -->
<a id="schemawronginput"></a>
<a id="schema_WrongInput"></a>
<a id="tocSwronginput"></a>
<a id="tocswronginput"></a>

```json
{
  "input": "document_expedition_date"
}
```

Represents a parameter entered during the background check creation that does not match the information obtained

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Input|string|false|none|Parameter entered that differs from the information obtained|

#### Enumerated Values

|Property|Value|
|---|---|
|Input|document_expedition_date|
