<h1 id="xero-payroll-nz">Xero Payroll NZ v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Xero Payroll API for orgs in the NZ region.

Base URLs:

* <a href="https://api.xero.com/payroll.xro/2.0">https://api.xero.com/payroll.xro/2.0</a> - Xero Payroll NZ API

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 

# Authentication

- oAuth2 authentication. For more information visit https://developer.xero.com/documentation/oauth2/overview

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|payroll.employees|Grant read-write access to payroll employees|
|payroll.employees.read|Grant read-only access to payroll employees|
|payroll.payruns|Grant read-write access to payroll payruns|
|payroll.payruns.read|Grant read-only access to payroll payruns|
|payroll.payslip|Grant read-write access to payroll payslips|
|payroll.payslip.read|Grant read-only access to payroll payslips|
|payroll.settings|Grant read-write access to payroll settings|
|payroll.settings.read|Grant read-only access to payroll settings|
|payroll.timesheets|Grant read-write access to payroll timesheets|
|payroll.timesheets.read|Grant read-only access to payroll timesheets|

<h1 id="xero-payroll-nz-payrollnz">PayrollNz</h1>

## Retrieves employees

<a id="opIdgetEmployees"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees`

<h3 id="retrieves-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Filter by first name and/or lastname|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:16:14.6198711",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 8
  },
  "problem": null,
  "employees": [
    {
      "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
      "firstName": "Casual",
      "lastName": "Worker",
      "dateOfBirth": "1990-12-01T00:00:00",
      "gender": "M",
      "email": null,
      "phoneNumber": null,
      "startDate": "2019-02-07T00:00:00",
      "address": {
        "addressLine1": "30 King ST",
        "addressLine2": null,
        "city": "Rangiora",
        "suburb": null,
        "countryName": "NEW ZEALAND",
        "postCode": "7400"
      },
      "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
      "updatedDateUTC": "2019-09-24T05:08:45",
      "createdDateUTC": "2019-09-22T23:58:23",
      "endDate": null,
      "engagementType": "Casual",
      "fixedTermEndDate": null
    },
    {
      "employeeID": "1c4f0c92-03ad-43f2-a690-ee51397ece6a",
      "firstName": "GST",
      "lastName": "Contractor",
      "dateOfBirth": null,
      "gender": null,
      "email": null,
      "phoneNumber": null,
      "startDate": "2019-01-30T00:00:00",
      "address": {
        "addressLine1": null,
        "addressLine2": null,
        "city": null,
        "suburb": null,
        "countryName": null,
        "postCode": null
      },
      "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
      "updatedDateUTC": "2019-09-23T00:16:25",
      "createdDateUTC": "2019-09-23T00:12:16",
      "endDate": null,
      "engagementType": null,
      "fixedTermEndDate": null
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Employees](#schemaemployees)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates an employees

<a id="opIdcreateEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "title": "Mr",
    "firstName": "Mike",
    "lastName": "Johntzxzpxhmkgson",
    "dateOfBirth": "2000-01-01",
    "address": {
      "addressLine1": "101 Green St",
      "city": "San Francisco",
      "postCode": "4351",
      "countryName": "United Kingdom"
    },
    "email": "83139@starkindustries.com",
    "gender": "M"
  }'
```

`POST /Employees`

> Body parameter

```json
{
  "title": "Mr",
  "firstName": "Mike",
  "lastName": "Johntzxzpxhmkgson",
  "dateOfBirth": "2000-01-01",
  "address": {
    "addressLine1": "101 Green St",
    "city": "San Francisco",
    "postCode": "4351",
    "countryName": "United Kingdom"
  },
  "email": "83139@starkindustries.com",
  "gender": "M"
}
```

<h3 id="creates-an-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employee](#schemaemployee)|true|none|
|» employeeID|body|string(uuid)|false|Xero unique identifier for the employee|
|» title|body|string|false|Title of the employee|
|» firstName|body|string|true|First name of employee|
|» lastName|body|string|true|Last name of employee|
|» dateOfBirth|body|string(date)|true|Date of birth of the employee (YYYY-MM-DD)|
|» address|body|[Address](#schemaaddress)|true|none|
|» email|body|string|false|The email address for the employee|
|» gender|body|string|false|The employee’s gender|
|» phoneNumber|body|string|false|Employee phone number|
|» startDate|body|string(date)|false|Employment start date of the employee at the time it was requested|
|» endDate|body|string(date)|false|Employment end date of the employee at the time it was requested|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar of the employee|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the employee|
|» createdDateUTC|body|string(date-time)|false|UTC timestamp when the employee was created in Xero|
|» jobTitle|body|string|false|Employee's job title|
|» engagementType|body|string|false|Engagement type of the employee|
|» fixedTermEndDate|body|string(date)|false|End date for an employee with a fixed-term engagement type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:27:22.5779577",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employee": {
    "employeeID": "658be485-3feb-402e-9e77-ac17623aad42",
    "firstName": "Mike",
    "lastName": "Johntzxzpxhmkgson",
    "dateOfBirth": "2000-01-01T00:00:00",
    "gender": "M",
    "email": "83139@starkindustries.com",
    "phoneNumber": null,
    "startDate": null,
    "address": {
      "addressLine1": "101 Green St",
      "addressLine2": null,
      "city": "San Francisco",
      "suburb": null,
      "countryName": null,
      "postCode": "4351"
    },
    "payrollCalendarID": null,
    "updatedDateUTC": "2020-08-24T20:27:22",
    "createdDateUTC": "2020-08-24T20:27:22",
    "endDate": null,
    "engagementType": null,
    "fixedTermEndDate": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-an-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeObject](#schemaemployeeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves an employees using a unique employee ID

<a id="opIdgetEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}`

<h3 id="retrieves-an-employees-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:16:15.3542191",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employee": {
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "firstName": "Casual",
    "lastName": "Worker",
    "dateOfBirth": "1990-12-01T00:00:00",
    "gender": "M",
    "email": null,
    "phoneNumber": null,
    "startDate": "2019-02-07T00:00:00",
    "address": {
      "addressLine1": "30 King ST",
      "addressLine2": null,
      "city": "Rangiora",
      "suburb": null,
      "countryName": "NEW ZEALAND",
      "postCode": "7400"
    },
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "updatedDateUTC": "2019-09-24T05:08:45",
    "createdDateUTC": "2019-09-22T23:58:23",
    "endDate": null,
    "engagementType": "FixedTerm",
    "fixedTermEndDate": "2026-01-01T00:00:00"
  }
}
```

<h3 id="retrieves-an-employees-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeObject](#schemaemployeeobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates an existing employee

<a id="opIdupdateEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "title": "Mr",
    "firstName": "Tony",
    "lastName": "Starkgtrzgquusrson",
    "dateOfBirth": "1999-01-01",
    "address": {
      "addressLine1": "101 Green St",
      "city": "San Francisco",
      "postCode": "4432",
      "countryName": "United Kingdom"
    },
    "email": "58315@starkindustries.com",
    "gender": "M"
  }'
```

`PUT /Employees/{EmployeeID}`

> Body parameter

```json
{
  "title": "Mr",
  "firstName": "Tony",
  "lastName": "Starkgtrzgquusrson",
  "dateOfBirth": "1999-01-01",
  "address": {
    "addressLine1": "101 Green St",
    "city": "San Francisco",
    "postCode": "4432",
    "countryName": "United Kingdom"
  },
  "email": "58315@starkindustries.com",
  "gender": "M"
}
```

<h3 id="updates-an-existing-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employee](#schemaemployee)|true|none|
|» employeeID|body|string(uuid)|false|Xero unique identifier for the employee|
|» title|body|string|false|Title of the employee|
|» firstName|body|string|true|First name of employee|
|» lastName|body|string|true|Last name of employee|
|» dateOfBirth|body|string(date)|true|Date of birth of the employee (YYYY-MM-DD)|
|» address|body|[Address](#schemaaddress)|true|none|
|» email|body|string|false|The email address for the employee|
|» gender|body|string|false|The employee’s gender|
|» phoneNumber|body|string|false|Employee phone number|
|» startDate|body|string(date)|false|Employment start date of the employee at the time it was requested|
|» endDate|body|string(date)|false|Employment end date of the employee at the time it was requested|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar of the employee|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the employee|
|» createdDateUTC|body|string(date-time)|false|UTC timestamp when the employee was created in Xero|
|» jobTitle|body|string|false|Employee's job title|
|» engagementType|body|string|false|Engagement type of the employee|
|» fixedTermEndDate|body|string(date)|false|End date for an employee with a fixed-term engagement type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:29:43.3452832",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employee": {
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "firstName": "Tony",
    "lastName": "Starkgtrzgquusrson",
    "dateOfBirth": "1999-01-01T00:00:00",
    "gender": "M",
    "email": "58315@starkindustries.com",
    "phoneNumber": null,
    "startDate": "2019-02-07T00:00:00",
    "address": {
      "addressLine1": "101 Green St",
      "addressLine2": null,
      "city": "San Francisco",
      "suburb": null,
      "countryName": null,
      "postCode": "4432"
    },
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "updatedDateUTC": "2020-08-24T20:29:43",
    "createdDateUTC": "2019-09-22T23:58:23",
    "endDate": null,
    "engagementType": null,
    "fixedTermEndDate": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="updates-an-existing-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeObject](#schemaemployeeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Creates an employment detail for a specific employee

<a id="opIdcreateEmployment"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Employment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "startDate": "2020-09-02",
    "engagementType": "FixedTerm",
    "fixedTermEndDate": "2026-01-01"
  }'
```

`POST /Employees/{EmployeeID}/Employment`

> Body parameter

```json
{
  "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
  "startDate": "2020-09-02",
  "engagementType": "FixedTerm",
  "fixedTermEndDate": "2026-01-01"
}
```

<h3 id="creates-an-employment-detail-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employment](#schemaemployment)|true|none|
|» payrollCalendarID|body|string(uuid)|true|Xero unique identifier for the payroll calendar of the employee|
|» payRunCalendarID|body|string(uuid)|false|Xero unique identifier for the payrun calendar for the employee (Deprecated in version 1.1.6)|
|» startDate|body|string(date)|true|Start date of the employment (YYYY-MM-DD)|
|» engagementType|body|string|true|Engagement type of the employee|
|» fixedTermEndDate|body|string(date)|false|End date for an employee with a fixed-term engagement type|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:53:58.8624623",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employment": {
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "startDate": "2020-09-02T00:00:00",
    "engagementType": "FixedTerm",
    "fixedTermEndDate": "2026-01-01T00:00:00"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-an-employment-detail-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmploymentObject](#schemaemploymentobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves tax records for a specific employee

<a id="opIdgetEmployeeTax"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Tax \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Tax`

<h3 id="retrieves-tax-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:57:27.5434491",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employeeTax": {
    "irdNumber": "111111111",
    "taxCode": "M",
    "esctRatePercentage": 17.5,
    "isEligibleForKiwiSaver": true,
    "hasSpecialStudentLoanRate": false,
    "specialStudentLoanRatePercentage": null,
    "specialTaxRatePercentage": null,
    "kiwiSaverContributions": "MakeContributions",
    "kiwiSaverOptOutDate": null,
    "kiwiSaverContributionHolidayEndDate": null,
    "kiwiSaverEmployeeContributionRatePercentage": 3,
    "kiwiSaverEmployerContributionRatePercentage": 3,
    "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 0,
    "hasStudentLoanBalance": false,
    "studentLoanBalance": null,
    "studentLoanAsAt": null
  }
}
```

<h3 id="retrieves-tax-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeTaxObject](#schemaemployeetaxobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates the tax records for a specific employee

<a id="opIdupdateEmployeeTax"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Tax \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "irdNumber": "111111111",
    "taxCode": "M",
    "esctRatePercentage": 17.5,
    "isEligibleForKiwiSaver": true,
    "hasSpecialStudentLoanRate": false,
    "specialStudentLoanRatePercentage": null,
    "specialTaxRatePercentage": null,
    "kiwiSaverContributions": "MakeContributions",
    "kiwiSaverOptOutDate": null,
    "kiwiSaverContributionHolidayEndDate": null,
    "kiwiSaverEmployeeContributionRatePercentage": 3,
    "kiwiSaverEmployerContributionRatePercentage": 3,
    "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 0,
    "hasStudentLoanBalance": false,
    "studentLoanBalance": null,
    "studentLoanAsAt": null
  }'
```

`POST /Employees/{EmployeeID}/Tax`

> Body parameter

```json
{
  "irdNumber": "111111111",
  "taxCode": "M",
  "esctRatePercentage": 17.5,
  "isEligibleForKiwiSaver": true,
  "hasSpecialStudentLoanRate": false,
  "specialStudentLoanRatePercentage": null,
  "specialTaxRatePercentage": null,
  "kiwiSaverContributions": "MakeContributions",
  "kiwiSaverOptOutDate": null,
  "kiwiSaverContributionHolidayEndDate": null,
  "kiwiSaverEmployeeContributionRatePercentage": 3,
  "kiwiSaverEmployerContributionRatePercentage": 3,
  "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 0,
  "hasStudentLoanBalance": false,
  "studentLoanBalance": null,
  "studentLoanAsAt": null
}
```

<h3 id="updates-the-tax-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeTax](#schemaemployeetax)|true|none|
|» irdNumber|body|string|false|The IRD Number.|
|» taxCode|body|[TaxCode](#schemataxcode)|false|Tax codes used for employee tax|
|» specialTaxRatePercentage|body|number(double)|false|Special tax rate percentage.|
|» hasSpecialStudentLoanRate|body|boolean|false|Does the employee has a special student loan rate?|
|» specialStudentLoanRatePercentage|body|number(double)|false|The employee student loan rate percentage.|
|» isEligibleForKiwiSaver|body|boolean|false|The employee eligibility for KiwiSaver.|
|» esctRatePercentage|body|number(double)|false|Employer superannuation contribution tax rate.|
|» kiwiSaverContributions|body|string|false|Contribution Option which can be 'MakeContributions' 'OptOut', 'OnAContributionsHoliday', 'OnASavingsSuspension', 'NotCurrentlyAKiwiSaverMember' for employees without a KiwiSaver membership|
|» kiwiSaverEmployeeContributionRatePercentage|body|number(double)|false|Employee Contribution percentage.|
|» kiwiSaverEmployerContributionRatePercentage|body|number(double)|false|Employer Contribution percentage.|
|» kiwiSaverEmployerSalarySacrificeContributionRatePercentage|body|number(double)|false|Employer Contribution through Salary Sacrifice percentage.|
|» kiwiSaverOptOutDate|body|string(date)|false|Opt Out Date.|
|» kiwiSaverContributionHolidayEndDate|body|string(date)|false|Contribution holiday expiry date or end date.|
|» hasStudentLoanBalance|body|boolean|false|Does the employee have a remaining student loan balance? Set a remaining balance if you have received a letter from IR.|
|» studentLoanBalance|body|number(double)|false|The employee's student loan balance shown on the letter from IR.|
|» studentLoanAsAt|body|string(date)|false|The date of the letter from IR.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» taxCode|ND|
|» taxCode|M|
|» taxCode|ME|
|» taxCode|MSL|
|» taxCode|MESL|
|» taxCode|SB|
|» taxCode|S|
|» taxCode|SH|
|» taxCode|ST|
|» taxCode|SBSL|
|» taxCode|SSL|
|» taxCode|SHSL|
|» taxCode|STSL|
|» taxCode|WT|
|» taxCode|CAE|
|» taxCode|EDW|
|» taxCode|NSW|
|» taxCode|STC|
|» taxCode|STCSL|
|» kiwiSaverContributions|MakeContributions|
|» kiwiSaverContributions|OptOut|
|» kiwiSaverContributions|OnAContributionsHoliday|
|» kiwiSaverContributions|OnASavingsSuspension|
|» kiwiSaverContributions|NotCurrentlyAKiwiSaverMember|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:57:27.5434491",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employeeTax": {
    "irdNumber": "111111111",
    "taxCode": "M",
    "esctRatePercentage": 17.5,
    "isEligibleForKiwiSaver": true,
    "hasSpecialStudentLoanRate": false,
    "specialStudentLoanRatePercentage": null,
    "specialTaxRatePercentage": null,
    "kiwiSaverContributions": "MakeContributions",
    "kiwiSaverOptOutDate": null,
    "kiwiSaverContributionHolidayEndDate": null,
    "kiwiSaverEmployeeContributionRatePercentage": 3,
    "kiwiSaverEmployerContributionRatePercentage": 3,
    "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 0,
    "hasStudentLoanBalance": false,
    "studentLoanBalance": null,
    "studentLoanAsAt": null
  }
}
```

<h3 id="updates-the-tax-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeTaxObject](#schemaemployeetaxobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves the opening balance for a specific employee

<a id="opIdgetEmployeeOpeningBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/OpeningBalances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/OpeningBalances`

<h3 id="retrieves-the-opening-balance-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T20:00:07.7343966",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 8
  },
  "problem": null,
  "openingBalances": [
    {
      "periodEndDate": "2020-10-01T00:00:00",
      "daysPaid": 3,
      "unpaidWeeks": 2,
      "grossEarnings": 40
    }
  ]
}
```

<h3 id="retrieves-the-opening-balance-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeOpeningBalancesObject](#schemaemployeeopeningbalancesobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates opening balances for a specific employee

<a id="opIdcreateEmployeeOpeningBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/OpeningBalances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[{\"periodEndDate\":\"2020-10-01\",\"daysPaid\":3,\"unpaidWeeks\":2,\"grossEarnings\":40.0}]"'
```

`POST /Employees/{EmployeeID}/OpeningBalances`

> Body parameter

```json
"[{\"periodEndDate\":\"2020-10-01\",\"daysPaid\":3,\"unpaidWeeks\":2,\"grossEarnings\":40.0}]"
```

<h3 id="creates-opening-balances-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeOpeningBalances](#schemaemployeeopeningbalances)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T19:55:36.539949",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "openingBalances": [
    {
      "periodEndDate": "2020-10-01T00:00:00",
      "daysPaid": 3,
      "unpaidWeeks": 2,
      "grossEarnings": 40
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-opening-balances-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeOpeningBalancesObject](#schemaemployeeopeningbalancesobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves leave records for a specific employee

<a id="opIdgetEmployeeLeaves"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Leave`

<h3 id="retrieves-leave-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T16:57:18.4657329",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": [
    {
      "leaveID": "e311d45f-122e-4fbf-b068-4e3f92dd2729",
      "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
      "description": "Holiday Pay Payout",
      "startDate": "2019-07-01T00:00:00",
      "endDate": "2019-07-07T00:00:00",
      "periods": [
        {
          "periodStartDate": "2019-07-01T00:00:00",
          "periodEndDate": "2019-07-07T00:00:00",
          "numberOfUnits": 36,
          "periodStatus": "Completed",
          "typeOfUnits": "Hours",
          "numberOfUnitsTaken": 1,
          "typeOfUnitsTaken": "Weeks"
        }
      ],
      "updatedDateUTC": "2019-09-24T05:08:44"
    }
  ]
}
```

<h3 id="retrieves-leave-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaves](#schemaemployeeleaves)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates leave records for a specific employee

<a id="opIdcreateEmployeeLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
    "description": "Creating a Description",
    "startDate": "2020-04-24",
    "endDate": "2020-04-26"
  }'
```

`POST /Employees/{EmployeeID}/Leave`

> Body parameter

```json
{
  "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
  "description": "Creating a Description",
  "startDate": "2020-04-24",
  "endDate": "2020-04-26"
}
```

<h3 id="creates-leave-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeLeave](#schemaemployeeleave)|true|none|
|» leaveID|body|string(uuid)|false|The Xero identifier for LeaveType|
|» leaveTypeID|body|string(uuid)|true|The Xero identifier for LeaveType|
|» description|body|string|true|The description of the leave  (max length = 50)|
|» startDate|body|string(date)|true|Start date of the leave (YYYY-MM-DD)|
|» endDate|body|string(date)|true|End date of the leave (YYYY-MM-DD)|
|» periods|body|[[LeavePeriod](#schemaleaveperiod)]|false|The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the leave type note|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T20:29:55.4086404",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": {
    "leaveID": "82a04ba6-a5cc-4e7d-86d4-b9f381a494e8",
    "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
    "description": "Creating a Description",
    "startDate": "2020-04-24T00:00:00",
    "endDate": "2020-04-26T00:00:00",
    "periods": [
      {
        "periodStartDate": "2020-04-20T00:00:00",
        "periodEndDate": "2020-04-26T00:00:00",
        "numberOfUnits": 0,
        "periodStatus": "Approved",
        "typeOfUnits": "Hours",
        "numberOfUnitsTaken": 0.2,
        "typeOfUnitsTaken": "Weeks"
      }
    ],
    "updatedDateUTC": "2020-08-26T20:29:55.2151561"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-leave-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveObject](#schemaemployeeleaveobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Updates leave records for a specific employee

<a id="opIdupdateEmployeeLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave/c4be24e5-e840-4c92-9eaa-2d86cd596314 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
    "description": "Creating a Description",
    "startDate": "2020-04-24",
    "endDate": "2020-04-26",
    "periods": [
      {
        "periodStartDate": "2020-04-20",
        "periodEndDate": "2020-04-26",
        "numberOfUnits": 1,
        "periodStatus": "Approved"
      }
    ]
  }'
```

`PUT /Employees/{EmployeeID}/Leave/{LeaveID}`

> Body parameter

```json
{
  "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
  "description": "Creating a Description",
  "startDate": "2020-04-24",
  "endDate": "2020-04-26",
  "periods": [
    {
      "periodStartDate": "2020-04-20",
      "periodEndDate": "2020-04-26",
      "numberOfUnits": 1,
      "periodStatus": "Approved"
    }
  ]
}
```

<h3 id="updates-leave-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|LeaveID|path|string(uuid)|true|Leave id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeLeave](#schemaemployeeleave)|true|none|
|» leaveID|body|string(uuid)|false|The Xero identifier for LeaveType|
|» leaveTypeID|body|string(uuid)|true|The Xero identifier for LeaveType|
|» description|body|string|true|The description of the leave  (max length = 50)|
|» startDate|body|string(date)|true|Start date of the leave (YYYY-MM-DD)|
|» endDate|body|string(date)|true|End date of the leave (YYYY-MM-DD)|
|» periods|body|[[LeavePeriod](#schemaleaveperiod)]|false|The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the leave type note|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T20:29:55.8432792",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": {
    "leaveID": "82a04ba6-a5cc-4e7d-86d4-b9f381a494e8",
    "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
    "description": "Creating a Description",
    "startDate": "2020-04-24T00:00:00",
    "endDate": "2020-04-26T00:00:00",
    "periods": [
      {
        "periodStartDate": "2020-04-20T00:00:00",
        "periodEndDate": "2020-04-26T00:00:00",
        "numberOfUnits": 1,
        "periodStatus": "Approved"
      }
    ],
    "updatedDateUTC": "2020-08-26T20:29:55.8854536"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="updates-leave-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeLeaveObject](#schemaemployeeleaveobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes a leave record for a specific employee

<a id="opIddeleteEmployeeLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave/c4be24e5-e840-4c92-9eaa-2d86cd596314 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/Leave/{LeaveID}`

<h3 id="deletes-a-leave-record-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|LeaveID|path|string(uuid)|true|Leave id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T22:11:10.809249",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

<h3 id="deletes-a-leave-record-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeLeaveObject](#schemaemployeeleaveobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves leave balances for a specific employee

<a id="opIdgetEmployeeLeaveBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveBalances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeaveBalances`

<h3 id="retrieves-leave-balances-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T22:26:48.0448356",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 4
  },
  "problem": null,
  "leaveBalances": [
    {
      "name": "Holiday Pay",
      "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
      "balance": 0,
      "typeOfUnits": "Dollars"
    },
    {
      "name": "Annual Leave",
      "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
      "balance": 0,
      "typeOfUnits": "Hours"
    },
    {
      "name": "Sick Leave",
      "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
      "balance": 0,
      "typeOfUnits": "Hours"
    },
    {
      "name": "Alternative Holidays",
      "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
      "balance": 0,
      "typeOfUnits": "Hours"
    }
  ]
}
```

<h3 id="retrieves-leave-balances-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveBalances](#schemaemployeeleavebalances)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves leave periods for a specific employee

<a id="opIdgetEmployeeLeavePeriods"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeavePeriods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeavePeriods`

<h3 id="retrieves-leave-periods-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|startDate|query|string(date)|false|Filter by start date|
|endDate|query|string(date)|false|Filter by end date|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T13:35:49.4407417",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "periods": [
    {
      "periodStartDate": "2020-02-24T00:00:00",
      "periodEndDate": "2020-03-01T00:00:00",
      "numberOfUnits": 24,
      "periodStatus": "Estimated",
      "typeOfUnits": "Hours",
      "numberOfUnitsTaken": 0.6,
      "typeOfUnitsTaken": "Weeks"
    },
    {
      "periodStartDate": "2020-03-02T00:00:00",
      "periodEndDate": "2020-03-08T00:00:00",
      "numberOfUnits": 40,
      "periodStatus": "Estimated",
      "typeOfUnits": "Hours",
      "numberOfUnitsTaken": 1,
      "typeOfUnitsTaken": "Weeks"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-leave-periods-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeavePeriods](#schemaleaveperiods)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates a leave set-up for a specific employee. This is required before viewing, configuring and requesting leave for an employee

<a id="opIdcreateEmployeeLeaveSetup"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveSetup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "holidayPayOpeningBalance": 10,
    "annualLeaveOpeningBalance": 100,
    "sickLeaveToAccrueAnnually": 20,
    "sickLeaveOpeningBalance": 10,
    "sickLeaveScheduleOfAccrual": "OnAnniversaryDate",
    "sickLeaveAnniversaryDate": "2023-12-31",
    "annualLeaveAnniversaryDate": "2023-12-31"
  }'
```

`POST /Employees/{EmployeeID}/LeaveSetup`

> Body parameter

```json
{
  "holidayPayOpeningBalance": 10,
  "annualLeaveOpeningBalance": 100,
  "sickLeaveToAccrueAnnually": 20,
  "sickLeaveOpeningBalance": 10,
  "sickLeaveScheduleOfAccrual": "OnAnniversaryDate",
  "sickLeaveAnniversaryDate": "2023-12-31",
  "annualLeaveAnniversaryDate": "2023-12-31"
}
```

<h3 id="creates-a-leave-set-up-for-a-specific-employee-this-is-required-before-viewing-configuring-and-requesting-leave-for-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeLeaveSetup](#schemaemployeeleavesetup)|true|none|
|» includeHolidayPay|body|boolean|false|Identifier if holiday pay will be included in each payslip|
|» holidayPayOpeningBalance|body|number(double)|false|Initial holiday pay balance. A percentage — usually 8% — of gross earnings since their last work anniversary.|
|» annualLeaveOpeningBalance|body|number(double)|false|Initial annual leave balance. The balance at their last anniversary, less any leave taken since then and excluding accrued annual leave.|
|» negativeAnnualLeaveBalancePaidAmount|body|number(double)|false|The dollar value of annual leave opening balance if negative.|
|» SickLeaveToAccrueAnnually|body|number(double)|false|Number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type|
|» SickLeaveMaximumToAccrue|body|number(double)|false|Maximum number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type|
|» sickLeaveOpeningBalance|body|number(double)|false|Initial sick leave balance. This will be positive unless they've taken sick leave in advance|
|» SickLeaveScheduleOfAccrual|body|string|false|Set Schedule of Accrual Type for Sick Leave|
|» SickLeaveAnniversaryDate|body|string(date)|false|If Sick Leave Schedule of Accrual is "OnAnniversaryDate", this is the date when entitled to Sick Leave. When null the Employee's start date is used as the anniversary date|
|» AnnualLeaveAnniversaryDate|body|string(date)|false|The first date the employee will accrue Annual Leave. When null the Employee's start date is used as the anniversary date|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T16:50:48.7245664",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveSetup": {
    "includeHolidayPay": null,
    "holidayPayOpeningBalance": 10,
    "annualLeaveOpeningBalance": 100,
    "negativeAnnualLeaveBalancePaidAmount": null,
    "sickLeaveToAccrueAnnually": 20,
    "sickLeaveMaximumToAccrue": null,
    "sickLeaveOpeningBalance": 10,
    "sickLeaveScheduleOfAccrual": "OnAnniversaryDate",
    "sickLeaveAnniversaryDate": "2023-12-31",
    "annualLeaveAnniversaryDate": "2023-12-31"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-leave-set-up-for-a-specific-employee-this-is-required-before-viewing-configuring-and-requesting-leave-for-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveSetupObject](#schemaemployeeleavesetupobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves leave types for a specific employee

<a id="opIdgetEmployeeLeaveTypes"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeaveTypes`

<h3 id="retrieves-leave-types-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T14:25:16.004485",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveTypes": [
    {
      "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
      "scheduleOfAccrual": "PercentageOfGrossEarnings",
      "maximumToAccrue": 0,
      "openingBalance": 0,
      "rateAccruedHourly": null,
      "percentageOfGrossEarnings": 8,
      "includeHolidayPayEveryPay": true,
      "showAnnualLeaveInAdvance": null,
      "annualLeaveTotalAmountPaid": null,
      "scheduleOfAccrualDate": null,
      "unitsAccruedAnnually": 0,
      "typeOfUnitsToAccrue": "Weeks",
      "openingBalanceTypeOfUnits": "Weeks"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-leave-types-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveTypes](#schemaemployeeleavetypes)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates leave type records for a specific employee

<a id="opIdcreateEmployeeLeaveType"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "leaveTypeID": "35da97ae-05b9-427f-9a98-69157ba42cec",
    "scheduleOfAccrual": "AnnuallyAfter6Months",
    "unitsAccruedAnnually": 10,
    "typeOfUnitsToAccrue": "Hours",
    "openingBalanceTypeOfUnits": "Hours",
    "maximumToAccrue": 80,
    "openingBalance": 100,
    "rateAccruedHourly": null
  }'
```

`POST /Employees/{EmployeeID}/LeaveTypes`

> Body parameter

```json
{
  "leaveTypeID": "35da97ae-05b9-427f-9a98-69157ba42cec",
  "scheduleOfAccrual": "AnnuallyAfter6Months",
  "unitsAccruedAnnually": 10,
  "typeOfUnitsToAccrue": "Hours",
  "openingBalanceTypeOfUnits": "Hours",
  "maximumToAccrue": 80,
  "openingBalance": 100,
  "rateAccruedHourly": null
}
```

<h3 id="creates-leave-type-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeLeaveType](#schemaemployeeleavetype)|true|none|
|» leaveTypeID|body|string(uuid)|false|The Xero identifier for leave type|
|» scheduleOfAccrual|body|string|false|The schedule of accrual|
|» unitsAccruedAnnually|body|number(double)|false|The number of units accrued for the leave annually. This is 0 when the ScheduleOfAccrual chosen is "NoAccruals"|
|» typeOfUnitsToAccrue|body|string|false|The type of units accrued for the leave annually|
|» maximumToAccrue|body|number(double)|false|The maximum number of units that can be accrued for the leave|
|» openingBalance|body|number(double)|false|The initial number of units assigned when the leave was added to the employee|
|» openingBalanceTypeOfUnits|body|string|false|The type of units for the opening balance|
|» rateAccruedHourly|body|number(double)|false|not supported in Payroll NZ|
|» percentageOfGrossEarnings|body|number(double)|false|Specific for scheduleOfAccrual having percentage of gross earnings. Identifies how much percentage of gross earnings is accrued per pay period.|
|» includeHolidayPayEveryPay|body|boolean|false|Specific to Holiday pay. Flag determining if pay for leave type is added on each pay run.|
|» showAnnualLeaveInAdvance|body|boolean|false|Specific to Annual Leave. Flag to include leave available to take in advance in the balance in the payslip|
|» annualLeaveTotalAmountPaid|body|number(double)|false|Specific to Annual Leave. Annual leave balance in dollars|
|» scheduleOfAccrualDate|body|string(date)|false|The date when an employee becomes entitled to their accrual.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scheduleOfAccrual|AnnuallyAfter6Months|
|» scheduleOfAccrual|OnAnniversaryDate|
|» scheduleOfAccrual|PercentageOfGrossEarnings|
|» scheduleOfAccrual|NoAccruals|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T14:31:54.3370081",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "35da97ae-05b9-427f-9a98-69157ba42cec",
    "scheduleOfAccrual": "AnnuallyAfter6Months",
    "maximumToAccrue": 80,
    "openingBalance": 100,
    "rateAccruedHourly": null,
    "percentageOfGrossEarnings": 0,
    "includeHolidayPayEveryPay": null,
    "showAnnualLeaveInAdvance": null,
    "annualLeaveTotalAmountPaid": null,
    "scheduleOfAccrualDate": null,
    "unitsAccruedAnnually": 0,
    "typeOfUnitsToAccrue": "Hours",
    "openingBalanceTypeOfUnits": "Hours"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-leave-type-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveTypeObject](#schemaemployeeleavetypeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves available payment methods for a specific employee

<a id="opIdgetEmployeePaymentMethod"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PaymentMethods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/PaymentMethods`

<h3 id="retrieves-available-payment-methods-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T23:34:53.6856317",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paymentMethod": {
    "bankAccounts": [
      {
        "accountName": "Casual Worker",
        "accountNumber": "0607050201419000",
        "sortCode": null,
        "particulars": null,
        "code": null,
        "dollarAmount": null,
        "reference": "",
        "calculationType": "Balance"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-available-payment-methods-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaymentMethodObject](#schemapaymentmethodobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates a payment method for an employee

<a id="opIdcreateEmployeePaymentMethod"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PaymentMethods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "bankAccounts": [
      {
        "accountName": "Casual Worker",
        "accountNumber": "0607050201419000",
        "sortCode": null,
        "particulars": null,
        "code": null,
        "dollarAmount": null,
        "reference": "",
        "calculationType": "Balance"
      }
    ]
  }'
```

`POST /Employees/{EmployeeID}/PaymentMethods`

> Body parameter

```json
{
  "bankAccounts": [
    {
      "accountName": "Casual Worker",
      "accountNumber": "0607050201419000",
      "sortCode": null,
      "particulars": null,
      "code": null,
      "dollarAmount": null,
      "reference": "",
      "calculationType": "Balance"
    }
  ]
}
```

<h3 id="creates-a-payment-method-for-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PaymentMethod](#schemapaymentmethod)|true|none|
|» paymentMethod|body|string|false|The payment method code|
|» bankAccounts|body|[[BankAccount](#schemabankaccount)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» paymentMethod|Cheque|
|» paymentMethod|Electronically|
|» paymentMethod|Manual|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T23:34:53.6856317",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paymentMethod": {
    "bankAccounts": [
      {
        "accountName": "Casual Worker",
        "accountNumber": "0607050201419000",
        "sortCode": null,
        "particulars": null,
        "code": null,
        "dollarAmount": null,
        "reference": "",
        "calculationType": "Balance"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-payment-method-for-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaymentMethodObject](#schemapaymentmethodobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves pay templates for a specific employee

<a id="opIdgetEmployeePayTemplates"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/PayTemplates`

<h3 id="retrieves-pay-templates-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T15:09:19.0627389",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 0,
    "itemCount": 0
  },
  "problem": null,
  "payTemplate": {
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "earningTemplates": [
      {
        "payTemplateEarningID": "1527cf6c-93db-41bf-aba2-9d6af1d3c499",
        "ratePerUnit": 20,
        "numberOfUnits": 8,
        "fixedAmount": null,
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "name": "Ordinary Time"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-pay-templates-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeePayTemplates](#schemaemployeepaytemplates)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates earnings template records for an employee

<a id="opIdcreateEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/Earnings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "ratePerUnit": 20,
    "numberOfUnits": 8,
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "name": "My New One"
  }'
```

`POST /Employees/{EmployeeID}/PayTemplates/Earnings`

> Body parameter

```json
{
  "ratePerUnit": 20,
  "numberOfUnits": 8,
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
  "name": "My New One"
}
```

<h3 id="creates-earnings-template-records-for-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EarningsTemplate](#schemaearningstemplate)|true|none|
|» payTemplateEarningID|body|string(uuid)|false|The Xero identifier for the earnings template|
|» ratePerUnit|body|number(double)|false|The rate per unit|
|» numberOfUnits|body|number(double)|false|The rate per unit|
|» fixedAmount|body|number(double)|false|The fixed amount per period|
|» earningsRateID|body|string(uuid)|false|The corresponding earnings rate identifier|
|» name|body|string|false|The read-only name of the Earning Template.|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T14:48:24.6032145",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningTemplate": {
    "payTemplateEarningID": "11b4e492-5d56-4eac-a9ce-687d7b9a4a84",
    "ratePerUnit": 20,
    "numberOfUnits": 8,
    "fixedAmount": null,
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "name": "Ordinary Time"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-earnings-template-records-for-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsTemplateObject](#schemaearningstemplateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Updates an earnings template records for an employee

<a id="opIdupdateEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/Earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "ratePerUnit": 25,
    "numberOfUnits": 4,
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5"
  }'
```

`PUT /Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}`

> Body parameter

```json
{
  "ratePerUnit": 25,
  "numberOfUnits": 4,
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5"
}
```

<h3 id="updates-an-earnings-template-records-for-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|PayTemplateEarningID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EarningsTemplate](#schemaearningstemplate)|true|none|
|» payTemplateEarningID|body|string(uuid)|false|The Xero identifier for the earnings template|
|» ratePerUnit|body|number(double)|false|The rate per unit|
|» numberOfUnits|body|number(double)|false|The rate per unit|
|» fixedAmount|body|number(double)|false|The fixed amount per period|
|» earningsRateID|body|string(uuid)|false|The corresponding earnings rate identifier|
|» name|body|string|false|The read-only name of the Earning Template.|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T18:54:08.6524341",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningTemplate": {
    "payTemplateEarningID": "1527cf6c-93db-41bf-aba2-9d6af1d3c499",
    "ratePerUnit": 25,
    "numberOfUnits": 4,
    "fixedAmount": null,
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "name": "Ordinary Time"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="updates-an-earnings-template-records-for-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsTemplateObject](#schemaearningstemplateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes an employee's earnings template record

<a id="opIddeleteEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/Earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}`

<h3 id="deletes-an-employees-earnings-template-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|PayTemplateEarningID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T18:54:09.1368544",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

<h3 id="deletes-an-employees-earnings-template-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion successful|[EarningsTemplateObject](#schemaearningstemplateobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Creates multiple employee earnings template records for a specific employee

<a id="opIdcreateMultipleEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplateEarnings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[{\"ratePerUnit\":20.0,\"numberOfUnits\":8.0,\"earningsRateID\":\"f9d8f5b5-9049-47f4-8541-35e200f750a5\"},{\"ratePerUnit\":0.0,\"numberOfUnits\":8.0,\"earningsRateID\":\"65b83d94-f20f-45e1-85ae-387fcf460c26\"}]"'
```

`POST /Employees/{EmployeeID}/PayTemplateEarnings`

> Body parameter

```json
"[{\"ratePerUnit\":20.0,\"numberOfUnits\":8.0,\"earningsRateID\":\"f9d8f5b5-9049-47f4-8541-35e200f750a5\"},{\"ratePerUnit\":0.0,\"numberOfUnits\":8.0,\"earningsRateID\":\"65b83d94-f20f-45e1-85ae-387fcf460c26\"}]"
```

<h3 id="creates-multiple-employee-earnings-template-records-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EarningsTemplates](#schemaearningstemplates)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T15:01:52.9369043",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningTemplates": [
    {
      "payTemplateEarningID": "1527cf6c-93db-41bf-aba2-9d6af1d3c499",
      "ratePerUnit": 20,
      "numberOfUnits": 8,
      "fixedAmount": null,
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "name": "Ordinary Time"
    },
    {
      "payTemplateEarningID": "92e757cc-b026-404d-804e-9dc2047a03e6",
      "ratePerUnit": 0,
      "numberOfUnits": 8,
      "fixedAmount": null,
      "earningsRateID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
      "name": "Salary"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-multiple-employee-earnings-template-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeEarningsTemplates](#schemaemployeeearningstemplates)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves deductions for a specific employee

<a id="opIdgetDeductions"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Deductions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Deductions`

<h3 id="retrieves-deductions-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:43:53.931198",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 4
  },
  "problem": null,
  "deductions": [
    {
      "deductionId": "a3760fe4-68a4-4e38-8326-fe616af7dc74",
      "deductionName": "KiwiSaver Voluntary Contributions",
      "deductionCategory": "KiwiSaverVoluntaryContributions",
      "liabilityAccountId": "26c57f04-0436-40cc-9cd9-1a21185d88bb",
      "currentRecord": true,
      "standardAmount": null
    },
    {
      "deductionId": "a131596e-2f83-4f6c-9573-99c4cbfcefd1",
      "deductionName": "Rent",
      "deductionCategory": "NzOther",
      "liabilityAccountId": "26c57f04-0436-40cc-9cd9-1a21185d88bb",
      "currentRecord": true,
      "standardAmount": 200
    }
  ]
}
```

<h3 id="retrieves-deductions-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Deductions](#schemadeductions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new deduction for a specific employee

<a id="opIdcreateDeduction"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Deductions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "deductionName": "My new deduction",
    "deductionCategory": "NzOther",
    "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3"
  }'
```

`POST /Deductions`

> Body parameter

```json
{
  "deductionName": "My new deduction",
  "deductionCategory": "NzOther",
  "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3"
}
```

<h3 id="creates-a-new-deduction-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Deduction](#schemadeduction)|true|none|
|» deductionId|body|string(uuid)|false|The Xero identifier for Deduction|
|» deductionName|body|string|true|Name of the deduction|
|» deductionCategory|body|string|true|Deduction Category type|
|» liabilityAccountId|body|string(uuid)|true|Xero identifier for Liability Account|
|» currentRecord|body|boolean|false|Identifier of a record is active or not.|
|» standardAmount|body|number(double)|false|Standard amount of the deduction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deductionCategory|PayrollGiving|
|» deductionCategory|KiwiSaverVoluntaryContributions|
|» deductionCategory|Superannuation|
|» deductionCategory|NzOther|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:43:54.9563295",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "deduction": {
    "deductionId": "0ee805eb-f5b0-4061-9b35-d9ea550da04e",
    "deductionName": "My new deduction",
    "deductionCategory": "NzOther",
    "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3",
    "currentRecord": true,
    "standardAmount": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-deduction-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[DeductionObject](#schemadeductionobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a single deduction by using a unique deduction ID

<a id="opIdgetDeduction"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Deductions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Deductions/{deductionId}`

<h3 id="retrieves-a-single-deduction-by-using-a-unique-deduction-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deductionId|path|string(uuid)|true|Identifier for the deduction|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:43:54.846821",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "deduction": {
    "deductionId": "a3760fe4-68a4-4e38-8326-fe616af7dc74",
    "deductionName": "KiwiSaver Voluntary Contributions",
    "deductionCategory": "KiwiSaverVoluntaryContributions",
    "liabilityAccountId": "26c57f04-0436-40cc-9cd9-1a21185d88bb",
    "currentRecord": true,
    "standardAmount": null
  }
}
```

<h3 id="retrieves-a-single-deduction-by-using-a-unique-deduction-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[DeductionObject](#schemadeductionobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves statutory deductions

<a id="opIdgetStatutoryDeductions"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/StatutoryDeductions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /StatutoryDeductions`

<h3 id="retrieves-statutory-deductions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e3731829-9801-4809-a1a1-bbe40cd18b7e",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T23:46:21.0212854",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 8
  },
  "problem": null,
  "statutoryDeductions": [
    {
      "id": "e3731829-9801-4809-a1a1-bbe40cd18b7e",
      "name": "Child Support",
      "liabilityAccountId": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
      "statutoryDeductionCategory": "ChildSupport",
      "currentRecord": true
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Student Loan",
      "liabilityAccountId": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
      "statutoryDeductionCategory": "StudentLoan",
      "currentRecord": true
    }
  ]
}
```

<h3 id="retrieves-statutory-deductions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[StatutoryDeductions](#schemastatutorydeductions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves a specific statutory deduction by using a unique statutory deductions id

<a id="opIdgetStatutoryDeduction"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/StatutoryDeductions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /StatutoryDeductions/{id}`

<h3 id="retrieves-a-specific-statutory-deduction-by-using-a-unique-statutory-deductions-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier for the statutory deduction|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e3731829-9801-4809-a1a1-bbe40cd18b7e",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T00:01:57.6562992",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "statutoryDeduction": {
    "id": "e3731829-9801-4809-a1a1-bbe40cd18b7e",
    "name": "Child Support",
    "liabilityAccountId": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
    "statutoryDeductionCategory": "ChildSupport",
    "currentRecord": true
  }
}
```

<h3 id="retrieves-a-specific-statutory-deduction-by-using-a-unique-statutory-deductions-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[StatutoryDeductionObject](#schemastatutorydeductionobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves superannuations

<a id="opIdgetSuperannuations"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Superannuations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Superannuations`

<h3 id="retrieves-superannuations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "563273ea-0dae-4f82-86a4-e0db77c008ea",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-09-14T22:35:14.6806088",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "benefits": [
    {
      "id": "563273ea-0dae-4f82-86a4-e0db77c008ea",
      "name": "KiwiSaver",
      "category": "KiwiSaver",
      "liabilityAccountId": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
      "expenseAccountId": "b343c3b0-5941-4166-82b4-dd926622e0e2",
      "standardAmount": 5,
      "percentage": 3,
      "calculationTypeNZ": "PercentageOfTaxableEarnings",
      "currentRecord": true,
      "companyMax": 2
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "SidSaver",
      "category": "Other",
      "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3",
      "expenseAccountId": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e",
      "standardAmount": 10,
      "percentage": 4,
      "calculationTypeNZ": "FixedAmount",
      "currentRecord": true,
      "companyMax": 4
    }
  ]
}
```

<h3 id="retrieves-superannuations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Superannuations](#schemasuperannuations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new superannuation

<a id="opIdcreateSuperannuation"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Superannuations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "SidSaver",
    "category": "Other",
    "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3",
    "expenseAccountId": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e",
    "CalculationTypeNZ": "FixedAmount",
    "standardAmount": 10
  }'
```

`POST /Superannuations`

> Body parameter

```json
{
  "name": "SidSaver",
  "category": "Other",
  "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3",
  "expenseAccountId": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e",
  "CalculationTypeNZ": "FixedAmount",
  "standardAmount": 10
}
```

<h3 id="creates-a-new-superannuation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Benefit](#schemabenefit)|true|none|
|» id|body|string(uuid)|false|The Xero identifier for superannuation|
|» name|body|string|true|Name of the superannuations|
|» category|body|string|true|Superannuations Category type|
|» liabilityAccountId|body|string(uuid)|true|Xero identifier for Liability Account|
|» expenseAccountId|body|string(uuid)|true|Xero identifier for Expense Account|
|» calculationTypeNZ|body|string|false|Calculation Type of the superannuation either FixedAmount or PercentageOfTaxableEarnings|
|» standardAmount|body|number(double)|false|Standard amount of the superannuation|
|» percentage|body|number(double)|false|Percentage of Taxable Earnings of the superannuation|
|» companyMax|body|number(double)|false|Company Maximum amount of the superannuation|
|» currentRecord|body|boolean|false|Identifier of a record is active or not.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|KiwiSaver|
|» category|ComplyingFund|
|» category|Other|
|» calculationTypeNZ|FixedAmount|
|» calculationTypeNZ|PercentageOfTaxableEarnings|

> Example responses

> 200 Response

```json
{
  "id": "8905a754-7ce8-40e2-9fa5-f819deb7adce",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-09-11T00:36:31.7680431",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "benefit": {
    "id": "8905a754-7ce8-40e2-9fa5-f819deb7adce",
    "name": "SidSaver",
    "category": "Other",
    "liabilityAccountId": "568f2e9a-0870-46cc-8678-f83f132ed4e3",
    "expenseAccountId": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e",
    "standardAmount": 10,
    "percentage": null,
    "calculationTypeNZ": "FixedAmount",
    "currentRecord": true,
    "companyMax": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-superannuation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SuperannuationObject](#schemasuperannuationobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific superannuation using a unique superannuation ID

<a id="opIdgetSuperannuation"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Superannuations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Superannuations/{SuperannuationID}`

<h3 id="retrieves-a-specific-superannuation-using-a-unique-superannuation-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SuperannuationID|path|string(uuid)|true|Identifier for the superannuation|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "563273ea-0dae-4f82-86a4-e0db77c008ea",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-09-11T00:36:29.5745157",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "benefit": {
    "id": "563273ea-0dae-4f82-86a4-e0db77c008ea",
    "name": "KiwiSaver",
    "category": "KiwiSaver",
    "liabilityAccountId": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
    "expenseAccountId": "b343c3b0-5941-4166-82b4-dd926622e0e2",
    "standardAmount": null,
    "percentage": 3,
    "calculationTypeNZ": "PercentageOfTaxableEarnings",
    "currentRecord": true,
    "companyMax": null
  }
}
```

<h3 id="retrieves-a-specific-superannuation-using-a-unique-superannuation-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SuperannuationObject](#schemasuperannuationobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves earnings rates

<a id="opIdgetEarningsRates"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/EarningsRates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /EarningsRates`

<h3 id="retrieves-earnings-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T18:25:57.0647738",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 15
  },
  "problem": null,
  "earningsRates": [
    {
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "name": "Ordinary Time",
      "earningsType": "RegularEarnings",
      "rateType": "RatePerUnit",
      "typeOfUnits": "hours",
      "currentRecord": true,
      "expenseAccountID": "1c91e520-a12b-45cc-8194-99950858e5bf",
      "fixedAmount": null,
      "ratePerUnit": null,
      "multipleOfOrdinaryEarningsRate": null
    },
    {
      "earningsRateID": "31407b3e-0967-4ae0-a7f1-3df4e6481a2e",
      "name": "ACC (First Week)",
      "earningsType": "OtherGrossEarnings",
      "rateType": "MultipleOfOrdinaryEarningsRate",
      "typeOfUnits": "hours",
      "currentRecord": true,
      "expenseAccountID": "1c91e520-a12b-45cc-8194-99950858e5bf",
      "fixedAmount": null,
      "ratePerUnit": null,
      "multipleOfOrdinaryEarningsRate": 0.8
    },
    {
      "earningsRateID": "6e5a4cf2-aa38-4558-a46e-f6998dad239b",
      "name": "Directors Fees",
      "earningsType": "WithholdingIncome",
      "rateType": "FixedAmount",
      "typeOfUnits": null,
      "currentRecord": true,
      "expenseAccountID": "1c91e520-a12b-45cc-8194-99950858e5bf",
      "fixedAmount": 1000,
      "ratePerUnit": null,
      "multipleOfOrdinaryEarningsRate": null
    }
  ]
}
```

<h3 id="retrieves-earnings-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsRates](#schemaearningsrates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new earnings rate

<a id="opIdcreateEarningsRate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/EarningsRates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "My Earnings Rate",
    "earningsType": "RegularEarnings",
    "rateType": "RatePerUnit",
    "typeOfUnits": "hours",
    "expenseAccountID": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e"
  }'
```

`POST /EarningsRates`

> Body parameter

```json
{
  "name": "My Earnings Rate",
  "earningsType": "RegularEarnings",
  "rateType": "RatePerUnit",
  "typeOfUnits": "hours",
  "expenseAccountID": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e"
}
```

<h3 id="creates-a-new-earnings-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EarningsRate](#schemaearningsrate)|true|none|
|» earningsRateID|body|string(uuid)|false|Xero unique identifier for an earning rate|
|» name|body|string|true|Name of the earning rate|
|» earningsType|body|string|true|Indicates how an employee will be paid when taking this type of earning|
|» rateType|body|string|true|Indicates the type of the earning rate|
|» typeOfUnits|body|string|true|The type of units used to record earnings|
|» currentRecord|body|boolean|false|Indicates whether an earning type is active|
|» expenseAccountID|body|string(uuid)|true|The account that will be used for the earnings rate|
|» ratePerUnit|body|number(double)|false|Default rate per unit (optional). Only applicable if RateType is RatePerUnit|
|» multipleOfOrdinaryEarningsRate|body|number(double)|false|This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate|
|» fixedAmount|body|number(double)|false|Optional Fixed Rate Amount. Applicable for FixedAmount Rate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» earningsType|Allowance|
|» earningsType|Backpay|
|» earningsType|Bonus|
|» earningsType|Commission|
|» earningsType|DiscretionaryPayments|
|» earningsType|HolidayPay|
|» earningsType|LumpSum|
|» earningsType|OtherEarnings|
|» earningsType|OtherGrossEarnings|
|» earningsType|OvertimeEarnings|
|» earningsType|RegularEarnings|
|» earningsType|SalarySacrificeForKiwiSaver|
|» earningsType|Tips(Direct)|
|» earningsType|Tips(Non-Direct)|
|» earningsType|WithholdingIncome|
|» rateType|RatePerUnit|
|» rateType|MultipleOfOrdinaryEarningsRate|
|» rateType|FixedAmount|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T18:25:57.8141393",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningsRate": {
    "earningsRateID": "4369b0ef-a64d-42e1-bb6d-f2fc984de133",
    "name": "My Earnings Rate",
    "earningsType": "RegularEarnings",
    "rateType": "RatePerUnit",
    "typeOfUnits": "hours",
    "currentRecord": true,
    "expenseAccountID": "e4eb36f6-97e3-4427-a394-dd4e1b355c2e",
    "fixedAmount": null,
    "ratePerUnit": null,
    "multipleOfOrdinaryEarningsRate": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-earnings-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsRateObject](#schemaearningsrateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific earnings rates by using a unique earnings rate id

<a id="opIdgetEarningsRate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/EarningsRates/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /EarningsRates/{EarningsRateID}`

<h3 id="retrieves-a-specific-earnings-rates-by-using-a-unique-earnings-rate-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EarningsRateID|path|string(uuid)|true|Identifier for the earnings rate|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T18:25:57.8191994",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningsRate": {
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "name": "Ordinary Time",
    "earningsType": "RegularEarnings",
    "rateType": "RatePerUnit",
    "typeOfUnits": "hours",
    "currentRecord": true,
    "expenseAccountID": "1c91e520-a12b-45cc-8194-99950858e5bf",
    "fixedAmount": null,
    "ratePerUnit": null,
    "multipleOfOrdinaryEarningsRate": null
  }
}
```

<h3 id="retrieves-a-specific-earnings-rates-by-using-a-unique-earnings-rate-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsRateObject](#schemaearningsrateobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves leave types

<a id="opIdgetLeaveTypes"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/LeaveTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /LeaveTypes`

<h3 id="retrieves-leave-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|ActiveOnly|query|boolean|false|Filters leave types by active status. By default the API returns all leave types.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:49:58.4095603",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 15
  },
  "problem": null,
  "leaveTypes": [
    {
      "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
      "name": "Annual Leave",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "2019-09-22T23:09:32Z",
      "isActive": true,
      "typeOfUnits": "Hours",
      "typeOfUnitsToAccrue": "Days"
    },
    {
      "leaveTypeID": "71b548db-6e40-4b64-be8b-f6a71455d8ab",
      "name": "Annual Leave - Cash Up",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "2019-09-22T23:09:32Z",
      "isActive": true,
      "typeOfUnits": "Hours",
      "typeOfUnitsToAccrue": "Days"
    }
  ]
}
```

<h3 id="retrieves-leave-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveTypes](#schemaleavetypes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new leave type

<a id="opIdcreateLeaveType"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/LeaveTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "My wqwhhiktun Leave",
    "isPaidLeave": false,
    "showOnPayslip": true
  }'
```

`POST /LeaveTypes`

> Body parameter

```json
{
  "name": "My wqwhhiktun Leave",
  "isPaidLeave": false,
  "showOnPayslip": true
}
```

<h3 id="creates-a-new-leave-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[LeaveType](#schemaleavetype)|true|none|
|» leaveTypeID|body|string(uuid)|false|Xero unique identifier for the leave type|
|» name|body|string|true|Name of the leave type|
|» isPaidLeave|body|boolean|true|Indicate that an employee will be paid when taking this type of leave|
|» showOnPayslip|body|boolean|true|Indicate that a balance for this leave type to be shown on the employee’s payslips|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the leave type note|
|» isActive|body|boolean|false|Shows whether the leave type is active or not|
|» typeOfUnits|body|string|false|The type of units to be paid for the leave type|
|» typeOfUnitsToAccrue|body|string|false|The type of units to be accrued for the leave type|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:49:59.9135451",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "80464f55-b5c9-4d05-84c7-219d98baa3e2",
    "name": "My wqwhhiktun Leave",
    "isPaidLeave": false,
    "showOnPayslip": true,
    "updatedDateUTC": "2020-08-27T20:49:59.8315619",
    "isActive": true,
    "typeOfUnits": "Hours",
    "typeOfUnitsToAccrue": "Hours"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-leave-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveTypeObject](#schemaleavetypeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific leave type by using a unique leave type ID

<a id="opIdgetLeaveType"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/LeaveTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /LeaveTypes/{LeaveTypeID}`

<h3 id="retrieves-a-specific-leave-type-by-using-a-unique-leave-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LeaveTypeID|path|string(uuid)|true|Identifier for the leave type|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T20:49:58.7293665",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
    "name": "Annual Leave",
    "isPaidLeave": true,
    "showOnPayslip": true,
    "updatedDateUTC": "2019-09-22T23:09:32",
    "isActive": true,
    "typeOfUnits": "Hours",
    "typeOfUnitsToAccrue": "Days"
  }
}
```

<h3 id="retrieves-a-specific-leave-type-by-using-a-unique-leave-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveTypeObject](#schemaleavetypeobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves reimbursements

<a id="opIdgetReimbursements"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Reimbursements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Reimbursements`

<h3 id="retrieves-reimbursements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T21:59:44.5592312",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 3
  },
  "problem": null,
  "reimbursements": [
    {
      "reimbursementID": "ddf9b572-5861-4f97-a109-9d612df52242",
      "name": "Mileage",
      "accountID": "36d33c5d-7dea-4911-9ed0-7fccc16f2b5f",
      "currentRecord": true,
      "standardAmount": null,
      "standardTypeOfUnits": "km",
      "standardRatePerUnit": 0.79,
      "reimbursementCategory": "NoGST",
      "calculationType": "RatePerUnit"
    }
  ]
}
```

<h3 id="retrieves-reimbursements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Reimbursements](#schemareimbursements)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new reimbursement

<a id="opIdcreateReimbursement"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Reimbursements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "My new Reimburse",
    "accountID": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
    "reimbursementCategory": "GSTInclusive",
    "calculationType": "FixedAmount"
  }'
```

`POST /Reimbursements`

> Body parameter

```json
{
  "name": "My new Reimburse",
  "accountID": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
  "reimbursementCategory": "GSTInclusive",
  "calculationType": "FixedAmount"
}
```

<h3 id="creates-a-new-reimbursement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Reimbursement](#schemareimbursement)|true|none|
|» reimbursementID|body|string(uuid)|false|Xero unique identifier for a reimbursement|
|» name|body|string|true|Name of the reimbursement|
|» accountID|body|string(uuid)|true|Xero unique identifier for the account used for the reimbursement|
|» currentRecord|body|boolean|false|Indicates that whether the reimbursement is active|
|» reimbursementCategory|body|string|false|See Reimbursement Categories|
|» calculationType|body|string|false|See Calculation Types|
|» standardAmount|body|string|false|Optional Fixed Rate Amount. Applicable when calculation type is Fixed Amount|
|» standardTypeOfUnits|body|string|false|Optional Type Of Units. Applicable when calculation type is Rate Per Unit|
|» standardRatePerUnit|body|number(double)|false|Optional Rate Per Unit. Applicable when calculation type is Rate Per Unit|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reimbursementCategory|GST|
|» reimbursementCategory|NoGST|
|» reimbursementCategory|GSTInclusive|
|» calculationType|Unknown|
|» calculationType|FixedAmount|
|» calculationType|RatePerUnit|
|» standardTypeOfUnits|Hours|
|» standardTypeOfUnits|km|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T23:25:30.5238274",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "reimbursement": {
    "reimbursementID": "c7a8e7fd-b4f1-4f7b-9256-1b3edaa72de7",
    "name": "My new Reimburse",
    "accountID": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
    "currentRecord": true,
    "standardAmount": null,
    "standardTypeOfUnits": null,
    "standardRatePerUnit": null,
    "reimbursementCategory": "GSTInclusive",
    "calculationType": "FixedAmount"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-reimbursement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[ReimbursementObject](#schemareimbursementobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific reimbursement by using a unique reimbursement ID

<a id="opIdgetReimbursement"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Reimbursements/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Reimbursements/{ReimbursementID}`

<h3 id="retrieves-a-specific-reimbursement-by-using-a-unique-reimbursement-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReimbursementID|path|string(uuid)|true|Identifier for the reimbursement|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T21:59:46.5643076",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "reimbursement": {
    "reimbursementID": "0d4e5476-1147-4a2c-9db4-ab6a15f81f1d",
    "name": "GST",
    "accountID": null,
    "currentRecord": true,
    "standardAmount": null,
    "standardTypeOfUnits": null,
    "standardRatePerUnit": null,
    "reimbursementCategory": "GST",
    "calculationType": null
  }
}
```

<h3 id="retrieves-a-specific-reimbursement-by-using-a-unique-reimbursement-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[ReimbursementObject](#schemareimbursementobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves timesheets

<a id="opIdgetTimesheets"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Timesheets`

<h3 id="retrieves-timesheets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|filter|query|string|false|Filter by employeeId and/or payrollCalendarId|
|status|query|string|false|filter results by any timesheets with a matching timesheet status|
|startDate|query|string|false|filter results by any timesheets with a startDate on or after the provided date|
|endDate|query|string|false|filter results by any timesheets with a endDate on or before the provided date|
|sort|query|string|false|sort the order of timesheets returned. The default is based on the timesheets createdDate, sorted oldest to newest. Currently, the only other option is to reverse the order based on the timesheets startDate, sorted newest to oldest.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:39.0921081",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 1
  },
  "problem": null,
  "timesheets": [
    {
      "timesheetID": "f2a2aff0-9944-411e-bc58-44f22304188d",
      "payrollCalendarID": "f6931b89-d9c8-4f25-b4fa-268b5fd24197",
      "employeeID": "272a7559-1b8f-4d3a-977b-d05578cb9546",
      "startDate": "2020-08-01T00:00:00",
      "endDate": "2020-08-31T00:00:00",
      "status": "Draft",
      "totalHours": 17,
      "updatedDateUTC": "2020-08-28T20:50:40"
    }
  ]
}
```

<h3 id="retrieves-timesheets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Timesheets](#schematimesheets)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets payroll.timesheets.read )
</aside>

## Creates a new timesheet

<a id="opIdcreateTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "startDate": "2020-04-13",
    "endDate": "2020-04-19",
    "timesheetLines": [
      {
        "date": "2020-04-13",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "numberOfUnits": 8
      },
      {
        "date": "2020-04-15",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "numberOfUnits": 6
      }
    ]
  }'
```

`POST /Timesheets`

> Body parameter

```json
{
  "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
  "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
  "startDate": "2020-04-13",
  "endDate": "2020-04-19",
  "timesheetLines": [
    {
      "date": "2020-04-13",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "numberOfUnits": 8
    },
    {
      "date": "2020-04-15",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "numberOfUnits": 6
    }
  ]
}
```

<h3 id="creates-a-new-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Timesheet](#schematimesheet)|true|none|
|» timesheetID|body|string(uuid)|false|The Xero identifier for a Timesheet|
|» payrollCalendarID|body|string(uuid)|true|The Xero identifier for the Payroll Calendar that the Timesheet applies to|
|» employeeID|body|string(uuid)|true|The Xero identifier for the Employee that the Timesheet is for|
|» startDate|body|string(date)|true|The Start Date of the Timesheet period (YYYY-MM-DD)|
|» endDate|body|string(date)|true|The End Date of the Timesheet period (YYYY-MM-DD)|
|» status|body|string|false|Status of the timesheet|
|» totalHours|body|number(double)|false|The Total Hours of the Timesheet|
|» updatedDateUTC|body|string(date-time)|false|The UTC date time that the Timesheet was last updated|
|» timesheetLines|body|[TimesheetLines](#schematimesheetlines)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Draft|
|» status|Approved|
|» status|Completed|
|» status|Requested|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:41.7980254",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "d227445a-4188-453a-a196-48163a38188c",
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "startDate": "2020-04-13T00:00:00",
    "endDate": "2020-04-19T00:00:00",
    "status": "Draft",
    "totalHours": 14,
    "updatedDateUTC": "2020-08-28T21:07:41.9676218",
    "timesheetLines": [
      {
        "timesheetLineID": "ebeda184-6f42-4c44-a19c-3c0308578153",
        "date": "2020-04-15T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 6
      },
      {
        "timesheetLineID": "e8e9d84f-d01d-4ab9-9584-3996c898b89c",
        "date": "2020-04-13T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 8
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Retrieves a specific timesheet by using a unique timesheet ID

<a id="opIdgetTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Timesheets/{TimesheetID}`

<h3 id="retrieves-a-specific-timesheet-by-using-a-unique-timesheet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:39.0637818",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "f2a2aff0-9944-411e-bc58-44f22304188d",
    "payrollCalendarID": "f6931b89-d9c8-4f25-b4fa-268b5fd24197",
    "employeeID": "272a7559-1b8f-4d3a-977b-d05578cb9546",
    "startDate": "2020-08-01T00:00:00",
    "endDate": "2020-08-31T00:00:00",
    "status": "Draft",
    "totalHours": 17,
    "updatedDateUTC": "2020-08-28T20:50:40",
    "timesheetLines": [
      {
        "timesheetLineID": "3397aab1-6cac-4804-a72b-00f396b04a08",
        "date": "2020-08-01T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 7
      },
      {
        "timesheetLineID": "11f3608f-c53a-474d-ba17-053849de318b",
        "date": "2020-08-02T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      },
      {
        "timesheetLineID": "f5b416b7-d431-4d54-baff-9cd6de620c70",
        "date": "2020-08-03T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      }
    ]
  }
}
```

<h3 id="retrieves-a-specific-timesheet-by-using-a-unique-timesheet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets payroll.timesheets.read )
</aside>

## Deletes a timesheet

<a id="opIddeleteTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Timesheets/{TimesheetID}`

<h3 id="deletes-a-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:41.4217222",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="deletes-a-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLine](#schematimesheetline)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Create a new timesheet line for a specific time sheet

<a id="opIdcreateTimesheetLine"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08/Lines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "date": "2020-08-03",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnits": 1
  }'
```

`POST /Timesheets/{TimesheetID}/Lines`

> Body parameter

```json
{
  "date": "2020-08-03",
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
  "numberOfUnits": 1
}
```

<h3 id="create-a-new-timesheet-line-for-a-specific-time-sheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TimesheetLine](#schematimesheetline)|true|none|
|» timesheetLineID|body|string(uuid)|false|The Xero identifier for a Timesheet Line|
|» date|body|string(date)|true|The Date that this Timesheet Line is for (YYYY-MM-DD)|
|» earningsRateID|body|string(uuid)|true|The Xero identifier for the Earnings Rate that the Timesheet is for|
|» trackingItemID|body|string(uuid)|false|The Xero identifier for the Tracking Item that the Timesheet is for|
|» numberOfUnits|body|number(double)|true|The Number of Units of the Timesheet Line|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:39.5955147",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheetLine": {
    "timesheetLineID": "10c3c63e-6cd0-4630-861f-08a2baa657fa",
    "date": "2020-08-03T00:00:00",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "trackingItemID": null,
    "numberOfUnits": 1
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="create-a-new-timesheet-line-for-a-specific-time-sheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLineObject](#schematimesheetlineobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Approves a timesheet

<a id="opIdapproveTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08/Approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`POST /Timesheets/{TimesheetID}/Approve`

<h3 id="approves-a-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:40.3918669",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "f2a2aff0-9944-411e-bc58-44f22304188d",
    "payrollCalendarID": "f6931b89-d9c8-4f25-b4fa-268b5fd24197",
    "employeeID": "272a7559-1b8f-4d3a-977b-d05578cb9546",
    "startDate": "2020-08-01T00:00:00",
    "endDate": "2020-08-31T00:00:00",
    "status": "Approved",
    "totalHours": 13,
    "updatedDateUTC": "2020-08-28T21:07:40.5613405",
    "timesheetLines": [
      {
        "timesheetLineID": "10c3c63e-6cd0-4630-861f-08a2baa657fa",
        "date": "2020-08-03T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 1
      },
      {
        "timesheetLineID": "3397aab1-6cac-4804-a72b-00f396b04a08",
        "date": "2020-08-04T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 2
      },
      {
        "timesheetLineID": "11f3608f-c53a-474d-ba17-053849de318b",
        "date": "2020-08-02T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      },
      {
        "timesheetLineID": "f5b416b7-d431-4d54-baff-9cd6de620c70",
        "date": "2020-08-03T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="approves-a-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Reverts a timesheet to draft

<a id="opIdrevertTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08/RevertToDraft \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`POST /Timesheets/{TimesheetID}/RevertToDraft`

<h3 id="reverts-a-timesheet-to-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:41.3053619",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "f2a2aff0-9944-411e-bc58-44f22304188d",
    "payrollCalendarID": "f6931b89-d9c8-4f25-b4fa-268b5fd24197",
    "employeeID": "272a7559-1b8f-4d3a-977b-d05578cb9546",
    "startDate": "2020-08-01T00:00:00",
    "endDate": "2020-08-31T00:00:00",
    "status": "Draft",
    "totalHours": 13,
    "updatedDateUTC": "2020-08-28T21:07:41.2608622",
    "timesheetLines": [
      {
        "timesheetLineID": "10c3c63e-6cd0-4630-861f-08a2baa657fa",
        "date": "2020-08-03T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 1
      },
      {
        "timesheetLineID": "3397aab1-6cac-4804-a72b-00f396b04a08",
        "date": "2020-08-04T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 2
      },
      {
        "timesheetLineID": "11f3608f-c53a-474d-ba17-053849de318b",
        "date": "2020-08-02T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      },
      {
        "timesheetLineID": "f5b416b7-d431-4d54-baff-9cd6de620c70",
        "date": "2020-08-03T00:00:00",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "trackingItemID": null,
        "numberOfUnits": 5
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="reverts-a-timesheet-to-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Updates a timesheet line for a specific timesheet

<a id="opIdupdateTimesheetLine"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08/Lines/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "date": "2020-08-04",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnits": 2
  }'
```

`PUT /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}`

> Body parameter

```json
{
  "date": "2020-08-04",
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
  "numberOfUnits": 2
}
```

<h3 id="updates-a-timesheet-line-for-a-specific-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|TimesheetLineID|path|string(uuid)|true|Identifier for the timesheet line|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TimesheetLine](#schematimesheetline)|true|none|
|» timesheetLineID|body|string(uuid)|false|The Xero identifier for a Timesheet Line|
|» date|body|string(date)|true|The Date that this Timesheet Line is for (YYYY-MM-DD)|
|» earningsRateID|body|string(uuid)|true|The Xero identifier for the Earnings Rate that the Timesheet is for|
|» trackingItemID|body|string(uuid)|false|The Xero identifier for the Tracking Item that the Timesheet is for|
|» numberOfUnits|body|number(double)|true|The Number of Units of the Timesheet Line|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T21:07:39.9074596",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheetLine": {
    "timesheetLineID": "3397aab1-6cac-4804-a72b-00f396b04a08",
    "date": "2020-08-04T00:00:00",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "trackingItemID": null,
    "numberOfUnits": 2
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="updates-a-timesheet-line-for-a-specific-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLineObject](#schematimesheetlineobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Deletes a timesheet line for a specific timesheet

<a id="opIddeleteTimesheetLine"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08/Lines/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}`

<h3 id="deletes-a-timesheet-line-for-a-specific-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|TimesheetLineID|path|string(uuid)|true|Identifier for the timesheet line|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T22:01:51.861069",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="deletes-a-timesheet-line-for-a-specific-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLine](#schematimesheetline)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Retrieves payrun calendars

<a id="opIdgetPayRunCalendars"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRunCalendars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRunCalendars`

<h3 id="retrieves-payrun-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T23:54:48.3357097",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "payRunCalendars": [
    {
      "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
      "name": "Weekly",
      "calendarType": "Weekly",
      "periodStartDate": "2019-07-08T00:00:00",
      "periodEndDate": "2019-07-14T00:00:00",
      "paymentDate": "2019-07-16T00:00:00",
      "updatedDateUTC": "2019-09-24T05:08:45"
    },
    {
      "payrollCalendarID": "f6931b89-d9c8-4f25-b4fa-268b5fd24197",
      "name": "Monthly",
      "calendarType": "Monthly",
      "periodStartDate": "2019-08-01T00:00:00",
      "periodEndDate": "2019-08-31T00:00:00",
      "paymentDate": "2019-08-23T00:00:00",
      "updatedDateUTC": "2019-09-24T03:11:16"
    }
  ]
}
```

<h3 id="retrieves-payrun-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRunCalendars](#schemapayruncalendars)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new payrun calendar

<a id="opIdcreatePayRunCalendar"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRunCalendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "My Weekly Cal",
    "calendarType": "Weekly",
    "periodStartDate": "2020-05-01",
    "paymentDate": "2020-05-15"
  }'
```

`POST /PayRunCalendars`

> Body parameter

```json
{
  "name": "My Weekly Cal",
  "calendarType": "Weekly",
  "periodStartDate": "2020-05-01",
  "paymentDate": "2020-05-15"
}
```

<h3 id="creates-a-new-payrun-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PayRunCalendar](#schemapayruncalendar)|true|none|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar|
|» name|body|string|true|Name of the calendar|
|» calendarType|body|[CalendarType](#schemacalendartype)|true|Calendar type of the pay run|
|» periodStartDate|body|string(date)|true|Period start date of the calendar|
|» periodEndDate|body|string(date)|false|Period end date of the calendar|
|» paymentDate|body|string(date)|true|Payment date of the calendar|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of the last update to the pay run calendar|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» calendarType|Weekly|
|» calendarType|Fortnightly|
|» calendarType|FourWeekly|
|» calendarType|Monthly|
|» calendarType|Annual|
|» calendarType|Quarterly|
|» calendarType|TwiceMonthly|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T23:54:49.3159839",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRunCalendar": {
    "payrollCalendarID": "54e9706a-c4e8-45ff-9c63-6fcac7ee7cde",
    "name": "My Weekly Cal",
    "calendarType": "Weekly",
    "periodStartDate": "2020-05-01T00:00:00",
    "periodEndDate": "2020-05-07T00:00:00",
    "paymentDate": "2020-05-15T00:00:00",
    "updatedDateUTC": "2020-08-26T23:54:49.4863322"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-new-payrun-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRunCalendarObject](#schemapayruncalendarobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific payrun calendar by using a unique payroll calendar ID

<a id="opIdgetPayRunCalendar"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRunCalendars/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRunCalendars/{PayrollCalendarID}`

<h3 id="retrieves-a-specific-payrun-calendar-by-using-a-unique-payroll-calendar-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayrollCalendarID|path|string(uuid)|true|Identifier for the payrun calendars|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T23:54:48.4398063",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRunCalendar": {
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "name": "Weekly",
    "calendarType": "Weekly",
    "periodStartDate": "2019-07-08T00:00:00",
    "periodEndDate": "2019-07-14T00:00:00",
    "paymentDate": "2019-07-16T00:00:00",
    "updatedDateUTC": "2019-09-24T05:08:45"
  }
}
```

<h3 id="retrieves-a-specific-payrun-calendar-by-using-a-unique-payroll-calendar-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRunCalendarObject](#schemapayruncalendarobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves an employee's salary and wages

<a id="opIdgetEmployeeSalaryAndWages"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/SalaryAndWages`

<h3 id="retrieves-an-employees-salary-and-wages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T00:25:03.6697493",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "salaryAndWages": [
    {
      "salaryAndWagesID": "b0026f5a-fa8e-43aa-95e4-cec3c0972e39",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "numberOfUnitsPerWeek": 0,
      "ratePerUnit": 25,
      "numberOfUnitsPerDay": 0,
      "daysPerWeek": 0,
      "effectiveFrom": "2019-02-07T00:00:00",
      "annualSalary": 25,
      "status": "Active",
      "paymentType": "Hourly",
      "workPatternType": "DaysAndHours"
    },
    {
      "salaryAndWagesID": "0211c70c-93d5-4da1-a570-b66d8df2ca15",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "numberOfUnitsPerWeek": 2,
      "ratePerUnit": null,
      "numberOfUnitsPerDay": 2,
      "daysPerWeek": 1,
      "effectiveFrom": "2020-05-01T00:00:00",
      "annualSalary": 100,
      "status": "Active",
      "paymentType": "Salary",
      "workPatternType": "DaysAndHours"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="retrieves-an-employees-salary-and-wages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWages](#schemasalaryandwages)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates an employee salary and wage record

<a id="opIdcreateEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnitsPerWeek": 2,
    "ratePerUnit": 10,
    "numberOfUnitsPerDay": 2,
    "daysPerWeek": 1,
    "effectiveFrom": "2020-05-01",
    "annualSalary": 100,
    "status": "Active",
    "paymentType": "Salary"
  }'
```

`POST /Employees/{EmployeeID}/SalaryAndWages`

> Body parameter

```json
{
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
  "numberOfUnitsPerWeek": 2,
  "ratePerUnit": 10,
  "numberOfUnitsPerDay": 2,
  "daysPerWeek": 1,
  "effectiveFrom": "2020-05-01",
  "annualSalary": 100,
  "status": "Active",
  "paymentType": "Salary"
}
```

<h3 id="creates-an-employee-salary-and-wage-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[SalaryAndWage](#schemasalaryandwage)|true|none|
|» salaryAndWagesID|body|string(uuid)|false|Xero unique identifier for a salary and wages record|
|» earningsRateID|body|string(uuid)|true|Xero unique identifier for an earnings rate|
|» numberOfUnitsPerWeek|body|number(double)|true|The Number of Units per week for the corresponding salary and wages|
|» ratePerUnit|body|number(double)|false|The rate of each unit for the corresponding salary and wages|
|» numberOfUnitsPerDay|body|number(double)|true|The Number of Units per day for the corresponding salary and wages|
|» daysPerWeek|body|number(double)|false|The days per week for the salary.|
|» effectiveFrom|body|string(date)|true|The effective date of the corresponding salary and wages|
|» annualSalary|body|number(double)|true|The annual salary|
|» status|body|string|true|The current status of the corresponding salary and wages|
|» paymentType|body|string|true|The type of the payment of the corresponding salary and wages|
|» workPatternType|body|string|false|The type of the Working Pattern of the corresponding salary and wages|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Pending|
|» status|History|
|» paymentType|Salary|
|» paymentType|Hourly|
|» workPatternType|DaysAndHours|
|» workPatternType|RegularWeek|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T00:22:47.464262",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": {
    "salaryAndWagesID": "0211c70c-93d5-4da1-a570-b66d8df2ca15",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnitsPerWeek": 2,
    "ratePerUnit": null,
    "numberOfUnitsPerDay": 2,
    "daysPerWeek": 1,
    "effectiveFrom": "2020-05-01T00:00:00",
    "annualSalary": 100,
    "status": "Active",
    "paymentType": "Salary",
    "workPatternType": "DaysAndHours"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-an-employee-salary-and-wage-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWageObject](#schemasalaryandwageobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves an employee's salary and wages record by using a unique salary and wage ID

<a id="opIdgetEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

<h3 id="retrieves-an-employees-salary-and-wages-record-by-using-a-unique-salary-and-wage-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|SalaryAndWagesID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T00:25:03.8641784",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": [
    {
      "salaryAndWagesID": "b0026f5a-fa8e-43aa-95e4-cec3c0972e39",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "numberOfUnitsPerWeek": 0,
      "ratePerUnit": 25,
      "numberOfUnitsPerDay": 0,
      "daysPerWeek": 0,
      "effectiveFrom": "2019-02-07T00:00:00",
      "annualSalary": 25,
      "status": "Active",
      "paymentType": "Hourly",
      "workPatternType": "DaysAndHours"
    }
  ]
}
```

<h3 id="retrieves-an-employees-salary-and-wages-record-by-using-a-unique-salary-and-wage-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWages](#schemasalaryandwages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates an employee's salary and wages record

<a id="opIdupdateEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnitsPerWeek": 3,
    "ratePerUnit": 11,
    "numberOfUnitsPerDay": 3,
    "daysPerWeek": 1,
    "effectiveFrom": "2020-05-15",
    "annualSalary": 101,
    "status": "Active",
    "paymentType": "Salary"
  }'
```

`PUT /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

> Body parameter

```json
{
  "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
  "numberOfUnitsPerWeek": 3,
  "ratePerUnit": 11,
  "numberOfUnitsPerDay": 3,
  "daysPerWeek": 1,
  "effectiveFrom": "2020-05-15",
  "annualSalary": 101,
  "status": "Active",
  "paymentType": "Salary"
}
```

<h3 id="updates-an-employees-salary-and-wages-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|SalaryAndWagesID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[SalaryAndWage](#schemasalaryandwage)|true|none|
|» salaryAndWagesID|body|string(uuid)|false|Xero unique identifier for a salary and wages record|
|» earningsRateID|body|string(uuid)|true|Xero unique identifier for an earnings rate|
|» numberOfUnitsPerWeek|body|number(double)|true|The Number of Units per week for the corresponding salary and wages|
|» ratePerUnit|body|number(double)|false|The rate of each unit for the corresponding salary and wages|
|» numberOfUnitsPerDay|body|number(double)|true|The Number of Units per day for the corresponding salary and wages|
|» daysPerWeek|body|number(double)|false|The days per week for the salary.|
|» effectiveFrom|body|string(date)|true|The effective date of the corresponding salary and wages|
|» annualSalary|body|number(double)|true|The annual salary|
|» status|body|string|true|The current status of the corresponding salary and wages|
|» paymentType|body|string|true|The type of the payment of the corresponding salary and wages|
|» workPatternType|body|string|false|The type of the Working Pattern of the corresponding salary and wages|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Pending|
|» status|History|
|» paymentType|Salary|
|» paymentType|Hourly|
|» workPatternType|DaysAndHours|
|» workPatternType|RegularWeek|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T00:25:11.4976642",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": {
    "salaryAndWagesID": "1912d614-99d0-43e6-8d63-5b539dcfe358",
    "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
    "numberOfUnitsPerWeek": 3,
    "ratePerUnit": null,
    "numberOfUnitsPerDay": 3,
    "daysPerWeek": 1,
    "effectiveFrom": "2020-05-15T00:00:00",
    "annualSalary": 101,
    "status": "Active",
    "paymentType": "Salary",
    "workPatternType": "RegularWeek"
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="updates-an-employees-salary-and-wages-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWageObject](#schemasalaryandwageobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes an employee's salary and wages record

<a id="opIddeleteEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

<h3 id="deletes-an-employees-salary-and-wages-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|SalaryAndWagesID|path|string(uuid)|true|Id for single salary and wages object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-27T00:25:11.5391097",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

<h3 id="deletes-an-employees-salary-and-wages-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion successful|[SalaryAndWageObject](#schemasalaryandwageobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves pay runs

<a id="opIdgetPayRuns"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRuns`

<h3 id="retrieves-pay-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|status|query|string|false|By default get payruns will return all the payruns for an organization. You can add GET https://api.xero.com/payroll.xro/2.0/payRuns?statu={PayRunStatus} to filter the payruns by status.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|Draft|
|status|Posted|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T23:01:56.762619",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 1
  },
  "problem": null,
  "payRuns": [
    {
      "payRunID": "8ba9831d-38e4-43d4-808e-472a5d195bce",
      "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
      "periodStartDate": "2019-06-10T00:00:00",
      "periodEndDate": "2019-06-16T00:00:00",
      "paymentDate": "2019-06-18T00:00:00",
      "totalCost": 6735.81,
      "totalPay": 4524.81,
      "payRunStatus": "Draft",
      "payRunType": "Scheduled",
      "calendarType": "Weekly",
      "postedDateTime": null,
      "payslipMessage": null
    }
  ]
}
```

<h3 id="retrieves-pay-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRuns](#schemapayruns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns payroll.payruns.read )
</aside>

## Creates a pay run

<a id="opIdcreatePayRun"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "periodStartDate": "2020-09-08",
    "periodEndDate": "2020-09-15",
    "paymentDate": "2020-09-20",
    "payRunStatus": "Draft",
    "payRunType": "Scheduled",
    "calendarType": "Weekly"
  }'
```

`POST /PayRuns`

> Body parameter

```json
{
  "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
  "periodStartDate": "2020-09-08",
  "periodEndDate": "2020-09-15",
  "paymentDate": "2020-09-20",
  "payRunStatus": "Draft",
  "payRunType": "Scheduled",
  "calendarType": "Weekly"
}
```

<h3 id="creates-a-pay-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PayRun](#schemapayrun)|true|none|
|» payRunID|body|string(uuid)|false|Xero unique identifier for the pay run|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar|
|» periodStartDate|body|string(date)|false|Period start date of the payroll calendar|
|» periodEndDate|body|string(date)|false|Period end date of the payroll calendar|
|» paymentDate|body|string(date)|false|Payment date of the pay run|
|» totalCost|body|number(double)|false|Total cost of the pay run|
|» totalPay|body|number(double)|false|Total pay of the pay run|
|» payRunStatus|body|string|false|Pay run status|
|» payRunType|body|string|false|Pay run type|
|» calendarType|body|[CalendarType](#schemacalendartype)|false|Calendar type of the pay run|
|» postedDateTime|body|string(date)|false|Posted date time of the pay run|
|» paySlips|body|[[PaySlip](#schemapayslip)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payRunStatus|Draft|
|» payRunStatus|Posted|
|» payRunType|Scheduled|
|» payRunType|Unscheduled|
|» payRunType|EarlierYearUpdate|
|» calendarType|Weekly|
|» calendarType|Fortnightly|
|» calendarType|FourWeekly|
|» calendarType|Monthly|
|» calendarType|Annual|
|» calendarType|Quarterly|
|» calendarType|TwiceMonthly|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-09-10T23:56:16.2964746",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRun": {
    "payRunID": "591dbf2f-786b-4814-8c61-93bebaee47f9",
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "periodStartDate": "2019-06-17T00:00:00",
    "periodEndDate": "2019-06-23T00:00:00",
    "paymentDate": "2019-06-25T00:00:00",
    "totalCost": 9416.7,
    "totalPay": 6137.2,
    "payRunStatus": "Draft",
    "payRunType": "Scheduled",
    "calendarType": "Weekly",
    "postedDateTime": null,
    "paySlips": [
      {
        "paySlipID": "8b3a099c-2309-480a-a6ee-1dc4f4b2668b",
        "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
        "lastEdited": null,
        "firstName": "Tony",
        "lastName": "Starkwpjgdjxdvwson",
        "totalEarnings": 3628.8,
        "grossEarnings": 3628.8,
        "totalPay": 2462.72,
        "totalEmployerTaxes": 18.9,
        "totalEmployeeTaxes": 1057.22,
        "totalDeductions": 0,
        "totalReimbursements": 0,
        "totalStatutoryDeductions": 108.86,
        "totalSuperannuation": 108.86,
        "bacsHash": null,
        "paymentMethod": "Electronically"
      },
      {
        "paySlipID": "87ab8047-7066-4609-906a-5b6ee1dc1886",
        "employeeID": "1c4f0c92-03ad-43f2-a690-ee51397ece6a",
        "lastEdited": null,
        "firstName": "GST",
        "lastName": "Contractor",
        "totalEarnings": 480,
        "grossEarnings": 480,
        "totalPay": 456,
        "totalEmployerTaxes": 0,
        "totalEmployeeTaxes": 96,
        "totalDeductions": 0,
        "totalReimbursements": 72,
        "totalStatutoryDeductions": 0,
        "totalSuperannuation": 0,
        "bacsHash": null,
        "paymentMethod": "Electronically"
      }
    ],
    "payslipMessage": null,
    "invalidPayeeIDs": null
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-a-pay-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|created payrun results|[PayRunObject](#schemapayrunobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns )
</aside>

## Retrieves a specific pay run by using a unique pay run ID

<a id="opIdgetPayRun"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRuns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRuns/{PayRunID}`

<h3 id="retrieves-a-specific-pay-run-by-using-a-unique-pay-run-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayRunID|path|string(uuid)|true|Identifier for the pay run|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T23:01:57.3773969",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRun": {
    "payRunID": "8ba9831d-38e4-43d4-808e-472a5d195bce",
    "payrollCalendarID": "9aa56064-990f-4ad3-a189-d966d8f6a030",
    "periodStartDate": "2019-06-10T00:00:00",
    "periodEndDate": "2019-06-16T00:00:00",
    "paymentDate": "2019-06-18T00:00:00",
    "totalCost": 6735.81,
    "totalPay": 4524.81,
    "payRunStatus": "Draft",
    "payRunType": "Scheduled",
    "calendarType": "Weekly",
    "postedDateTime": null,
    "paySlips": [
      {
        "paySlipID": "51a01760-cf9d-4ba1-bf3a-2065d4f8e073",
        "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
        "lastEdited": "2020-08-28T21:58:08",
        "firstName": "Tony",
        "lastName": "Starkmzamlagmdison",
        "totalEarnings": 648,
        "grossEarnings": 648,
        "totalPay": 525,
        "totalEmployerTaxes": 3.32,
        "totalEmployeeTaxes": 103.56,
        "totalDeductions": 0,
        "totalReimbursements": 0,
        "totalStatutoryDeductions": 19.44,
        "totalSuperannuation": 19.44,
        "bacsHash": null,
        "paymentMethod": "Electronically"
      }
    ],
    "payslipMessage": null,
    "invalidPayeeIDs": null
  }
}
```

<h3 id="retrieves-a-specific-pay-run-by-using-a-unique-pay-run-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRunObject](#schemapayrunobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns payroll.payruns.read )
</aside>

## Retrieves payslips

<a id="opIdgetPaySlips"></a>

> Code samples

```bash
curl 'https://api.xero.com/payroll.xro/2.0/PaySlips?PayRunID=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PaySlips`

<h3 id="retrieves-payslips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|PayRunID|query|string(uuid)|true|PayrunID which specifies the containing payrun of payslips to retrieve. By default, the API does not group payslips by payrun.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T22:55:58.6809685",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 6
  },
  "problem": null,
  "paySlips": [
    {
      "paySlipID": "17d88883-686a-400f-9551-34fa366effc4",
      "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
      "payRunID": "be103bd8-321b-419f-8177-48280560771a",
      "lastEdited": "2019-09-23T02:13:29",
      "firstName": "Tony",
      "lastName": "Starkmzamlagmdison",
      "totalEarnings": 162,
      "grossEarnings": 162,
      "totalPay": 137.88,
      "totalEmployerTaxes": 0.7,
      "totalEmployeeTaxes": 19.26,
      "totalDeductions": 0,
      "totalReimbursements": 0,
      "totalStatutoryDeductions": 4.86,
      "totalSuperannuation": 4.86,
      "bacsHash": null,
      "paymentMethod": "Electronically",
      "earningsLines": [
        {
          "earningsLineID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
          "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
          "displayName": "Ordinary Time",
          "ratePerUnit": 25,
          "numberOfUnits": 6,
          "fixedAmount": null,
          "amount": 150,
          "isLinkedToTimesheet": false,
          "isAverageDailyPayRate": null,
          "isSystemGenerated": true
        }
      ],
      "leaveEarningsLines": [
        {
          "earningsLineID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
          "earningsRateID": "39b3560a-5d2f-4538-924a-4349dc86396e",
          "displayName": "Holiday Pay",
          "ratePerUnit": null,
          "numberOfUnits": null,
          "fixedAmount": 12,
          "amount": 12,
          "isLinkedToTimesheet": false,
          "isAverageDailyPayRate": null,
          "isSystemGenerated": true
        }
      ],
      "timesheetEarningsLines": [],
      "deductionLines": [],
      "reimbursementLines": [],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
          "numberOfUnits": 12
        },
        {
          "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
          "numberOfUnits": 0
        },
        {
          "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
          "numberOfUnits": 0
        },
        {
          "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
          "numberOfUnits": 0
        }
      ],
      "superannuationLines": [
        {
          "superannuationTypeID": "563273ea-0dae-4f82-86a4-e0db77c008ea",
          "displayName": "KiwiSaver",
          "amount": 4.86,
          "fixedAmount": null,
          "percentage": 3,
          "manualAdjustment": false
        }
      ],
      "paymentLines": [
        {
          "paymentLineID": "a300f7c3-e934-4e67-84c5-d8687cf4a2b4",
          "amount": 137.88,
          "accountNumber": "0607050201419000",
          "sortCode": null,
          "accountName": "Casual Worker"
        }
      ],
      "employeeTaxLines": [
        {
          "taxLineID": "1d7c6670-c227-4de9-a7fc-fbf7ec16a804",
          "description": null,
          "amount": 19.26,
          "globalTaxTypeID": 11,
          "manualAdjustment": false
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "b790f489-9bbf-4979-a987-53dddf8b648f",
          "description": null,
          "amount": 0.7,
          "globalTaxTypeID": 10,
          "manualAdjustment": false
        }
      ],
      "statutoryDeductionLines": [
        {
          "statutoryDeductionTypeID": "b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3",
          "amount": 4.86,
          "fixedAmount": null,
          "manualAdjustment": null
        }
      ],
      "taxSettings": {
        "periodUnits": 1,
        "periodType": "weeks",
        "taxCode": "M",
        "specialTaxRate": null,
        "lumpSumTaxCode": "SB",
        "lumpSumAmount": null
      },
      "grossEarningsHistory": {
        "daysPaid": 1,
        "unpaidWeeks": 0
      }
    }
  ]
}
```

<h3 id="retrieves-payslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaySlips](#schemapayslips)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip payroll.payslip.read )
</aside>

## Retrieves a specific payslip by a unique pay slip ID

<a id="opIdgetPaySlip"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PaySlips/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PaySlips/{PaySlipID}`

<h3 id="retrieves-a-specific-payslip-by-a-unique-pay-slip-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PaySlipID|path|string(uuid)|true|Identifier for the payslip|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T22:55:59.3854985",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paySlip": {
    "paySlipID": "17d88883-686a-400f-9551-34fa366effc4",
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "payRunID": "be103bd8-321b-419f-8177-48280560771a",
    "lastEdited": "2019-09-23T02:13:29",
    "firstName": "Tony",
    "lastName": "Starkmzamlagmdison",
    "totalEarnings": 162,
    "grossEarnings": 162,
    "totalPay": 137.88,
    "totalEmployerTaxes": 0.7,
    "totalEmployeeTaxes": 19.26,
    "totalDeductions": 0,
    "totalReimbursements": 0,
    "totalStatutoryDeductions": 4.86,
    "totalSuperannuation": 4.86,
    "bacsHash": null,
    "paymentMethod": "Electronically",
    "earningsLines": [
      {
        "earningsLineID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "displayName": "Ordinary Time",
        "ratePerUnit": 25,
        "numberOfUnits": 6,
        "fixedAmount": null,
        "amount": 150,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null,
        "isSystemGenerated": true
      }
    ],
    "leaveEarningsLines": [
      {
        "earningsLineID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "earningsRateID": "39b3560a-5d2f-4538-924a-4349dc86396e",
        "displayName": "Holiday Pay",
        "ratePerUnit": null,
        "numberOfUnits": null,
        "fixedAmount": 12,
        "amount": 12,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null,
        "isSystemGenerated": true
      }
    ],
    "timesheetEarningsLines": [],
    "deductionLines": [],
    "reimbursementLines": [],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "numberOfUnits": 12
      },
      {
        "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
        "numberOfUnits": 0
      }
    ],
    "superannuationLines": [
      {
        "superannuationTypeID": "563273ea-0dae-4f82-86a4-e0db77c008ea",
        "displayName": "KiwiSaver",
        "amount": 4.86,
        "fixedAmount": null,
        "percentage": 3,
        "manualAdjustment": false
      }
    ],
    "paymentLines": [
      {
        "paymentLineID": "a300f7c3-e934-4e67-84c5-d8687cf4a2b4",
        "amount": 137.88,
        "accountNumber": "0607050201419000",
        "sortCode": null,
        "accountName": "Casual Worker"
      }
    ],
    "employeeTaxLines": [
      {
        "taxLineID": "1d7c6670-c227-4de9-a7fc-fbf7ec16a804",
        "description": null,
        "amount": 19.26,
        "globalTaxTypeID": 11,
        "manualAdjustment": false
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "b790f489-9bbf-4979-a987-53dddf8b648f",
        "description": null,
        "amount": 0.7,
        "globalTaxTypeID": 10,
        "manualAdjustment": false
      }
    ],
    "statutoryDeductionLines": [
      {
        "statutoryDeductionTypeID": "b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3",
        "amount": 4.86,
        "fixedAmount": null,
        "manualAdjustment": null
      }
    ],
    "taxSettings": {
      "periodUnits": 1,
      "periodType": "weeks",
      "taxCode": "M",
      "specialTaxRate": null,
      "lumpSumTaxCode": "SB",
      "lumpSumAmount": null
    },
    "grossEarningsHistory": {
      "daysPaid": 1,
      "unpaidWeeks": 0
    }
  }
}
```

<h3 id="retrieves-a-specific-payslip-by-a-unique-pay-slip-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaySlipObject](#schemapayslipobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip payroll.payslip.read )
</aside>

## Creates an employee pay slip

<a id="opIdupdatePaySlipLineItems"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PaySlips/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "earningsLines": [
      {
        "earningsLineID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "displayName": "Ordinary Time",
        "ratePerUnit": 25,
        "numberOfUnits": 0,
        "amount": 0,
        "isLinkedToTimesheet": false,
        "isSystemGenerated": true
      },
      {
        "earningsLineID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
        "earningsRateID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
        "displayName": "Salary",
        "ratePerUnit": 0,
        "numberOfUnits": 8,
        "amount": 0,
        "isLinkedToTimesheet": false,
        "isSystemGenerated": false
      }
    ],
    "leaveEarningsLines": [
      {
        "earningsLineID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "earningsRateID": "39b3560a-5d2f-4538-924a-4349dc86396e",
        "displayName": "Holiday Pay",
        "fixedAmount": 268.8,
        "amount": 268.8,
        "isLinkedToTimesheet": false,
        "isSystemGenerated": true
      }
    ],
    "deductionLines": [
      {
        "deductionTypeID": "a3760fe4-68a4-4e38-8326-fe616af7dc74",
        "amount": 100
      }
    ],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "numberOfUnits": 268.8
      },
      {
        "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
        "numberOfUnits": 0
      }
    ],
    "superannuationLines": [
      {
        "superannuationTypeID": "563273ea-0dae-4f82-86a4-e0db77c008ea",
        "displayName": "KiwiSaver",
        "amount": 108.86,
        "fixedAmount": 3,
        "percentage": 3,
        "manualAdjustment": false
      }
    ],
    "employeeTaxLines": [
      {
        "taxLineID": "1084146b-e890-489c-aed3-06de80f63d84",
        "amount": 1057.22,
        "globalTaxTypeID": "11",
        "manualAdjustment": false
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "6f9eb8cd-0f4a-440b-939c-bdb0f6ad694c",
        "amount": 18.9,
        "globalTaxTypeID": "10",
        "manualAdjustment": false
      }
    ],
    "statutoryDeductionLines": [
      {
        "statutoryDeductionTypeID": "b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3",
        "amount": 108.86
      }
    ],
    "grossEarningsHistory": {
      "daysPaid": 3,
      "unpaidWeeks": 0
    }
  }'
```

`PUT /PaySlips/{PaySlipID}`

> Body parameter

```json
{
  "earningsLines": [
    {
      "earningsLineID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
      "displayName": "Ordinary Time",
      "ratePerUnit": 25,
      "numberOfUnits": 0,
      "amount": 0,
      "isLinkedToTimesheet": false,
      "isSystemGenerated": true
    },
    {
      "earningsLineID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
      "earningsRateID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
      "displayName": "Salary",
      "ratePerUnit": 0,
      "numberOfUnits": 8,
      "amount": 0,
      "isLinkedToTimesheet": false,
      "isSystemGenerated": false
    }
  ],
  "leaveEarningsLines": [
    {
      "earningsLineID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
      "earningsRateID": "39b3560a-5d2f-4538-924a-4349dc86396e",
      "displayName": "Holiday Pay",
      "fixedAmount": 268.8,
      "amount": 268.8,
      "isLinkedToTimesheet": false,
      "isSystemGenerated": true
    }
  ],
  "deductionLines": [
    {
      "deductionTypeID": "a3760fe4-68a4-4e38-8326-fe616af7dc74",
      "amount": 100
    }
  ],
  "leaveAccrualLines": [
    {
      "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
      "numberOfUnits": 268.8
    },
    {
      "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
      "numberOfUnits": 0
    },
    {
      "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
      "numberOfUnits": 0
    },
    {
      "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
      "numberOfUnits": 0
    }
  ],
  "superannuationLines": [
    {
      "superannuationTypeID": "563273ea-0dae-4f82-86a4-e0db77c008ea",
      "displayName": "KiwiSaver",
      "amount": 108.86,
      "fixedAmount": 3,
      "percentage": 3,
      "manualAdjustment": false
    }
  ],
  "employeeTaxLines": [
    {
      "taxLineID": "1084146b-e890-489c-aed3-06de80f63d84",
      "amount": 1057.22,
      "globalTaxTypeID": "11",
      "manualAdjustment": false
    }
  ],
  "employerTaxLines": [
    {
      "taxLineID": "6f9eb8cd-0f4a-440b-939c-bdb0f6ad694c",
      "amount": 18.9,
      "globalTaxTypeID": "10",
      "manualAdjustment": false
    }
  ],
  "statutoryDeductionLines": [
    {
      "statutoryDeductionTypeID": "b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3",
      "amount": 108.86
    }
  ],
  "grossEarningsHistory": {
    "daysPaid": 3,
    "unpaidWeeks": 0
  }
}
```

<h3 id="creates-an-employee-pay-slip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|PaySlipID|path|string(uuid)|true|Identifier for the payslip|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PaySlip](#schemapayslip)|true|none|
|» paySlipID|body|string(uuid)|false|The Xero identifier for a PaySlip|
|» employeeID|body|string(uuid)|false|The Xero identifier for payroll employee|
|» payRunID|body|string(uuid)|false|The Xero identifier for the associated payrun|
|» lastEdited|body|string(date)|false|The date payslip was last updated|
|» firstName|body|string|false|Employee first name|
|» lastName|body|string|false|Employee last name|
|» totalEarnings|body|number(double)|false|Total earnings before any deductions. Same as gross earnings for NZ.|
|» grossEarnings|body|number(double)|false|Total earnings before any deductions. Same as total earnings for NZ.|
|» totalPay|body|number(double)|false|The employee net pay|
|» totalEmployerTaxes|body|number(double)|false|The employer's tax obligation|
|» totalEmployeeTaxes|body|number(double)|false|The part of an employee's earnings that is deducted for tax purposes|
|» totalDeductions|body|number(double)|false|Total amount subtracted from an employee's earnings to reach total pay|
|» totalReimbursements|body|number(double)|false|Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment|
|» totalStatutoryDeductions|body|number(double)|false|Total amounts required by law to subtract from the employee's earnings|
|» totalSuperannuation|body|number(double)|false|Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries|
|» bacsHash|body|string|false|BACS Service User Number|
|» paymentMethod|body|string|false|The payment method code|
|» earningsLines|body|[EarningsLines](#schemaearningslines)|false|none|
|» leaveEarningsLines|body|[LeaveEarningsLines](#schemaleaveearningslines)|false|none|
|» timesheetEarningsLines|body|[TimesheetEarningsLines](#schematimesheetearningslines)|false|none|
|» deductionLines|body|[DeductionLines](#schemadeductionlines)|false|none|
|» reimbursementLines|body|[ReimbursementLines](#schemareimbursementlines)|false|none|
|» leaveAccrualLines|body|[LeaveAccrualLines](#schemaleaveaccruallines)|false|none|
|» superannuationLines|body|[SuperannuationLines](#schemasuperannuationlines)|false|none|
|» paymentLines|body|[PaymentLines](#schemapaymentlines)|false|none|
|» employeeTaxLines|body|[TaxLines](#schemataxlines)|false|none|
|» employerTaxLines|body|[TaxLines](#schemataxlines)|false|none|
|» statutoryDeductionLines|body|[StatutoryDeductionLines](#schemastatutorydeductionlines)|false|none|
|» taxSettings|body|[TaxSettings](#schemataxsettings)|false|none|
|» grossEarningsHistory|body|[GrossEarningsHistory](#schemagrossearningshistory)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» paymentMethod|Cheque|
|» paymentMethod|Electronically|
|» paymentMethod|Manual|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-09-10T17:20:24.2970169",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paySlip": {
    "paySlipID": "51a01760-cf9d-4ba1-bf3a-2065d4f8e073",
    "employeeID": "68342973-c405-4b86-b5d3-d7b877c27995",
    "payRunID": "8ba9831d-38e4-43d4-808e-472a5d195bce",
    "lastEdited": "2020-09-10T17:20:23.7335017",
    "firstName": "Tony",
    "lastName": "Starkwpjgdjxdvwson",
    "totalEarnings": 3628.8,
    "grossEarnings": 3628.8,
    "totalPay": 2362.72,
    "totalEmployerTaxes": 18.9,
    "totalEmployeeTaxes": 1057.22,
    "totalDeductions": 100,
    "totalReimbursements": 0,
    "totalStatutoryDeductions": 108.86,
    "totalSuperannuation": 108.86,
    "bacsHash": null,
    "paymentMethod": "Electronically",
    "earningsLines": [
      {
        "earningsLineID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "earningsRateID": "f9d8f5b5-9049-47f4-8541-35e200f750a5",
        "displayName": "Ordinary Time",
        "ratePerUnit": 25,
        "numberOfUnits": 0,
        "fixedAmount": null,
        "amount": 0,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null,
        "isSystemGenerated": true
      },
      {
        "earningsLineID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
        "earningsRateID": "65b83d94-f20f-45e1-85ae-387fcf460c26",
        "displayName": "Salary",
        "ratePerUnit": 0,
        "numberOfUnits": 8,
        "fixedAmount": null,
        "amount": 0,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null,
        "isSystemGenerated": false
      }
    ],
    "leaveEarningsLines": [
      {
        "earningsLineID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "earningsRateID": "39b3560a-5d2f-4538-924a-4349dc86396e",
        "displayName": "Holiday Pay",
        "ratePerUnit": null,
        "numberOfUnits": null,
        "fixedAmount": 268.8,
        "amount": 268.8,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null,
        "isSystemGenerated": true
      }
    ],
    "timesheetEarningsLines": [],
    "deductionLines": [
      {
        "deductionTypeID": "a3760fe4-68a4-4e38-8326-fe616af7dc74",
        "displayName": "KiwiSaver Voluntary Contributions",
        "amount": 100,
        "subjectToTax": null,
        "percentage": null
      }
    ],
    "reimbursementLines": [],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "0441497f-5dc7-4cd3-a90d-f2e07e21b2a6",
        "numberOfUnits": 268.8
      },
      {
        "leaveTypeID": "b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "f2f994cf-1899-46f3-ad4f-5d92d78c3719",
        "numberOfUnits": 0
      },
      {
        "leaveTypeID": "34129765-11cb-4d8c-b568-84a2219beda3",
        "numberOfUnits": 0
      }
    ],
    "superannuationLines": [
      {
        "superannuationTypeID": "563273ea-0dae-4f82-86a4-e0db77c008ea",
        "displayName": "KiwiSaver",
        "amount": 108.86,
        "fixedAmount": 3,
        "percentage": 3,
        "manualAdjustment": false
      }
    ],
    "paymentLines": [
      {
        "paymentLineID": "6dc42925-2a11-4041-ac9a-4098e77791d5",
        "amount": 2262.72,
        "accountNumber": "0607050201419000",
        "sortCode": null,
        "accountName": "Casual Worker"
      },
      {
        "paymentLineID": "30d6d414-426b-417d-8d0d-d05ca0e5bc88",
        "amount": 100,
        "accountNumber": "1234448494848373",
        "sortCode": null,
        "accountName": "test"
      }
    ],
    "employeeTaxLines": [
      {
        "taxLineID": "2faf8f5d-6446-4bea-a2cd-d5cd7e8b9384",
        "description": null,
        "amount": 1057.22,
        "globalTaxTypeID": 11,
        "manualAdjustment": false
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "caa8d4fa-0949-460d-90f5-f43ec9f3db12",
        "description": null,
        "amount": 18.9,
        "globalTaxTypeID": 10,
        "manualAdjustment": false
      }
    ],
    "statutoryDeductionLines": [
      {
        "statutoryDeductionTypeID": "b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3",
        "amount": 108.86,
        "fixedAmount": null,
        "manualAdjustment": null
      }
    ],
    "taxSettings": {
      "periodUnits": 1,
      "periodType": "weeks",
      "taxCode": "M",
      "specialTaxRate": null,
      "lumpSumTaxCode": "SB",
      "lumpSumAmount": null
    },
    "grossEarningsHistory": {
      "daysPaid": 3,
      "unpaidWeeks": 0
    }
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-an-employee-pay-slip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaySlipObject](#schemapayslipobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip )
</aside>

## Retrieves settings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Settings`

<h3 id="retrieves-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T22:18:40.4518638",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "settings": {
    "accounts": [
      {
        "accountID": "fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488",
        "type": "PAYELIABILITY",
        "code": "825",
        "name": "PAYE Payable"
      },
      {
        "accountID": "e529775e-ea49-4a19-86f0-8d3e1ecda2cd",
        "type": "WAGESPAYABLE",
        "code": "814",
        "name": "Wages Payable - Payroll"
      },
      {
        "accountID": "1c91e520-a12b-45cc-8194-99950858e5bf",
        "type": "WAGESEXPENSE",
        "code": "477",
        "name": "Salaries"
      },
      {
        "accountID": "ac993f75-035b-433c-82e0-7b7a2d40802c",
        "type": "BANK",
        "code": "090",
        "name": "Business Bank Account"
      }
    ]
  }
}
```

<h3 id="retrieves-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves tracking categories

<a id="opIdgetTrackingCategories"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Settings/TrackingCategories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Settings/TrackingCategories`

<h3 id="retrieves-tracking-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-28T22:18:50.0075482",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "trackingCategories": {
    "employeeGroupsTrackingCategoryID": "351953c4-8127-4009-88c3-f9cd8c9cbe9f",
    "timesheetTrackingCategoryID": "f8c0b291-be04-497a-a083-dd9cd19658b5"
  }
}
```

<h3 id="retrieves-tracking-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TrackingCategories](#schematrackingcategories)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves employee's working patterns

<a id="opIdgetEmployeeWorkingPatterns"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Working-Patterns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Working-Patterns`

<h3 id="retrieves-employees-working-patterns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:16:15.3542191",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "payeeWorkingPatterns": [
    {
      "payeeWorkingPatternID": "d0a325df-c9d5-4246-9e95-5172328a729b",
      "effectiveFrom": "2020-01-01T00:00:00"
    },
    {
      "payeeWorkingPatternID": "af50c5d4-a0f5-4306-ad61-8505b8ec6286",
      "effectiveFrom": "2024-07-09T00:00:00"
    }
  ]
}
```

<h3 id="retrieves-employees-working-patterns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeWorkingPatternsObject](#schemaemployeeworkingpatternsobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates an employee working pattern

<a id="opIdcreateEmployeeWorkingPattern"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Working-Patterns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "effectiveFrom": "2020-01-01T00:00:00",
    "workingWeeks": [
      {
        "monday": 0,
        "tuesday": 3,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0
      }
    ]
  }'
```

`POST /Employees/{EmployeeID}/Working-Patterns`

> Body parameter

```json
{
  "effectiveFrom": "2020-01-01T00:00:00",
  "workingWeeks": [
    {
      "monday": 0,
      "tuesday": 3,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    }
  ]
}
```

<h3 id="creates-an-employee-working-pattern-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeWorkingPatternWithWorkingWeeksRequest](#schemaemployeeworkingpatternwithworkingweeksrequest)|true|none|
|» effectiveFrom|body|string(date)|true|The effective date of the corresponding salary and wages|
|» workingWeeks|body|[WorkingWeeks](#schemaworkingweeks)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:53:58.8624623",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payeeWorkingPattern": {
    "payeeWorkingPatternID": "d0a325df-c9d5-4246-9e95-5172328a729b",
    "effectiveFrom": "2020-01-01T00:00:00",
    "workingWeeks": [
      {
        "monday": 0,
        "tuesday": 3,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0
      }
    ]
  }
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="creates-an-employee-working-pattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|employee working pattern correctly added|[EmployeeWorkingPatternWithWorkingWeeksObject](#schemaemployeeworkingpatternwithworkingweeksobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves employee's working patterns

<a id="opIdgetEmployeeWorkingPattern"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Working-Patterns/4ff1e5cc-9835-40d5-bb18-09f3b118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}`

<h3 id="retrieves-employees-working-patterns-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|EmployeeWorkingPatternID|path|string(uuid)|true|Employee working pattern id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-24T20:16:15.3542191",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payeeWorkingPattern": {
    "payeeWorkingPatternID": "d0a325df-c9d5-4246-9e95-5172328a729b",
    "effectiveFrom": "2020-01-01T00:00:00",
    "workingWeeks": [
      {
        "monday": 0,
        "tuesday": 3,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0
      }
    ]
  }
}
```

<h3 id="retrieves-employees-working-patterns-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeWorkingPatternWithWorkingWeeksObject](#schemaemployeeworkingpatternwithworkingweeksobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## deletes employee's working patterns

<a id="opIddeleteEmployeeWorkingPattern"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Working-Patterns/4ff1e5cc-9835-40d5-bb18-09f3b118db9c \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}`

<h3 id="deletes-employees-working-patterns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|EmployeeWorkingPatternID|path|string(uuid)|true|Employee working pattern id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-08-26T22:11:10.809249",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

> 400 Response

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

<h3 id="deletes-employees-working-patterns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeLeaveObject](#schemaemployeeleaveobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

# Schemas

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "page": 1,
  "pageSize": 10,
  "pageCount": 1,
  "itemCount": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|pageCount|integer|false|none|none|
|itemCount|integer|false|none|none|

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "type": "application/problem+json",
  "title": "BadRequest",
  "status": 400,
  "detail": "Validation error occurred.",
  "instance": "string",
  "invalidFields": [
    {
      "name": "DateOfBirth",
      "reason": "The Date of Birth is required."
    }
  ]
}
```

The object returned for a bad request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of error format|
|title|string|false|none|The type of the error|
|status|string|false|none|The error status code|
|detail|string|false|none|A description of the error|
|instance|string|false|none|none|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|none|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "name": "DateOfBirth",
  "reason": "The Date of Birth is required."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the field that caused the error|
|reason|string|false|none|The reason the error occurred|

<h2 id="tocS_Employees">Employees</h2>
<!-- backwards compatibility -->
<a id="schemaemployees"></a>
<a id="schema_Employees"></a>
<a id="tocSemployees"></a>
<a id="tocsemployees"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "employees": [
    {
      "employeeID": "d90457c4-f1be-4f2e-b4e3-f766390a7e30",
      "title": "Mrs",
      "firstName": "Karen",
      "lastName": "Jones",
      "dateOfBirth": "2019-01-02",
      "address": {
        "addressLine1": "19 Taranaki Street",
        "addressLine2": "Apt 4",
        "city": "Wellington",
        "suburb": "Te Aro",
        "postCode": 6011,
        "countryName": "NEW ZEALAND"
      },
      "email": "developer@me.com",
      "gender": "F",
      "phoneNumber": "415-555-1212",
      "startDate": "2020-01-19",
      "endDate": "2020-01-19",
      "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updatedDateUTC": "1970-01-01T00:00:00Z",
      "createdDateUTC": "1970-01-01T00:00:00Z",
      "jobTitle": "General Manager",
      "engagementType": "Permanent",
      "fixedTermEndDate": "2020-01-19"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|employees|[[Employee](#schemaemployee)]|false|none|none|

<h2 id="tocS_EmployeeObject">EmployeeObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeobject"></a>
<a id="schema_EmployeeObject"></a>
<a id="tocSemployeeobject"></a>
<a id="tocsemployeeobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "employee": {
    "employeeID": "d90457c4-f1be-4f2e-b4e3-f766390a7e30",
    "title": "Mrs",
    "firstName": "Karen",
    "lastName": "Jones",
    "dateOfBirth": "2019-01-02",
    "address": {
      "addressLine1": "19 Taranaki Street",
      "addressLine2": "Apt 4",
      "city": "Wellington",
      "suburb": "Te Aro",
      "postCode": 6011,
      "countryName": "NEW ZEALAND"
    },
    "email": "developer@me.com",
    "gender": "F",
    "phoneNumber": "415-555-1212",
    "startDate": "2020-01-19",
    "endDate": "2020-01-19",
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedDateUTC": "1970-01-01T00:00:00Z",
    "createdDateUTC": "1970-01-01T00:00:00Z",
    "jobTitle": "General Manager",
    "engagementType": "Permanent",
    "fixedTermEndDate": "2020-01-19"
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|employee|[Employee](#schemaemployee)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "employeeID": "d90457c4-f1be-4f2e-b4e3-f766390a7e30",
  "title": "Mrs",
  "firstName": "Karen",
  "lastName": "Jones",
  "dateOfBirth": "2019-01-02",
  "address": {
    "addressLine1": "19 Taranaki Street",
    "addressLine2": "Apt 4",
    "city": "Wellington",
    "suburb": "Te Aro",
    "postCode": 6011,
    "countryName": "NEW ZEALAND"
  },
  "email": "developer@me.com",
  "gender": "F",
  "phoneNumber": "415-555-1212",
  "startDate": "2020-01-19",
  "endDate": "2020-01-19",
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedDateUTC": "1970-01-01T00:00:00Z",
  "createdDateUTC": "1970-01-01T00:00:00Z",
  "jobTitle": "General Manager",
  "engagementType": "Permanent",
  "fixedTermEndDate": "2020-01-19"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeID|string(uuid)|false|none|Xero unique identifier for the employee|
|title|string|false|none|Title of the employee|
|firstName|string|true|none|First name of employee|
|lastName|string|true|none|Last name of employee|
|dateOfBirth|string(date)|true|none|Date of birth of the employee (YYYY-MM-DD)|
|address|[Address](#schemaaddress)|true|none|none|
|email|string|false|none|The email address for the employee|
|gender|string|false|none|The employee’s gender|
|phoneNumber|string|false|none|Employee phone number|
|startDate|string(date)|false|none|Employment start date of the employee at the time it was requested|
|endDate|string(date)|false|none|Employment end date of the employee at the time it was requested|
|payrollCalendarID|string(uuid)|false|none|Xero unique identifier for the payroll calendar of the employee|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of last update to the employee|
|createdDateUTC|string(date-time)|false|none|UTC timestamp when the employee was created in Xero|
|jobTitle|string|false|none|Employee's job title|
|engagementType|string|false|none|Engagement type of the employee|
|fixedTermEndDate|string(date)|false|none|End date for an employee with a fixed-term engagement type|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|

<h2 id="tocS_EmploymentObject">EmploymentObject</h2>
<!-- backwards compatibility -->
<a id="schemaemploymentobject"></a>
<a id="schema_EmploymentObject"></a>
<a id="tocSemploymentobject"></a>
<a id="tocsemploymentobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "employment": {
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payRunCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startDate": "1970-01-01",
    "engagementType": "Permanent",
    "fixedTermEndDate": "2020-01-19"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|employment|[Employment](#schemaemployment)|false|none|none|

<h2 id="tocS_Employment">Employment</h2>
<!-- backwards compatibility -->
<a id="schemaemployment"></a>
<a id="schema_Employment"></a>
<a id="tocSemployment"></a>
<a id="tocsemployment"></a>

```json
{
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payRunCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startDate": "1970-01-01",
  "engagementType": "Permanent",
  "fixedTermEndDate": "2020-01-19"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payrollCalendarID|string(uuid)|true|none|Xero unique identifier for the payroll calendar of the employee|
|payRunCalendarID|string(uuid)|false|none|Xero unique identifier for the payrun calendar for the employee (Deprecated in version 1.1.6)|
|startDate|string(date)|true|none|Start date of the employment (YYYY-MM-DD)|
|engagementType|string|true|none|Engagement type of the employee|
|fixedTermEndDate|string(date)|false|none|End date for an employee with a fixed-term engagement type|

<h2 id="tocS_EmployeeTaxObject">EmployeeTaxObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeetaxobject"></a>
<a id="schema_EmployeeTaxObject"></a>
<a id="tocSemployeetaxobject"></a>
<a id="tocsemployeetaxobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "employeeTax": {
    "irdNumber": 111111111,
    "taxCode": "ND",
    "specialTaxRatePercentage": 17.5,
    "hasSpecialStudentLoanRate": true,
    "specialStudentLoanRatePercentage": 2,
    "isEligibleForKiwiSaver": true,
    "esctRatePercentage": 1,
    "kiwiSaverContributions": "MakeContributions",
    "kiwiSaverEmployeeContributionRatePercentage": 4,
    "kiwiSaverEmployerContributionRatePercentage": 10,
    "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 2,
    "kiwiSaverOptOutDate": "2020-06-01T00:00:00",
    "kiwiSaverContributionHolidayEndDate": "2019-06-01T00:00:00",
    "hasStudentLoanBalance": false,
    "studentLoanBalance": 30,
    "studentLoanAsAt": "2020-07-01T00:00:00"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|employeeTax|[EmployeeTax](#schemaemployeetax)|false|none|none|

<h2 id="tocS_EmployeeTax">EmployeeTax</h2>
<!-- backwards compatibility -->
<a id="schemaemployeetax"></a>
<a id="schema_EmployeeTax"></a>
<a id="tocSemployeetax"></a>
<a id="tocsemployeetax"></a>

```json
{
  "irdNumber": 111111111,
  "taxCode": "ND",
  "specialTaxRatePercentage": 17.5,
  "hasSpecialStudentLoanRate": true,
  "specialStudentLoanRatePercentage": 2,
  "isEligibleForKiwiSaver": true,
  "esctRatePercentage": 1,
  "kiwiSaverContributions": "MakeContributions",
  "kiwiSaverEmployeeContributionRatePercentage": 4,
  "kiwiSaverEmployerContributionRatePercentage": 10,
  "kiwiSaverEmployerSalarySacrificeContributionRatePercentage": 2,
  "kiwiSaverOptOutDate": "2020-06-01T00:00:00",
  "kiwiSaverContributionHolidayEndDate": "2019-06-01T00:00:00",
  "hasStudentLoanBalance": false,
  "studentLoanBalance": 30,
  "studentLoanAsAt": "2020-07-01T00:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|irdNumber|string|false|none|The IRD Number.|
|taxCode|[TaxCode](#schemataxcode)|false|none|Tax codes used for employee tax|
|specialTaxRatePercentage|number(double)|false|none|Special tax rate percentage.|
|hasSpecialStudentLoanRate|boolean|false|none|Does the employee has a special student loan rate?|
|specialStudentLoanRatePercentage|number(double)|false|none|The employee student loan rate percentage.|
|isEligibleForKiwiSaver|boolean|false|none|The employee eligibility for KiwiSaver.|
|esctRatePercentage|number(double)|false|none|Employer superannuation contribution tax rate.|
|kiwiSaverContributions|string|false|none|Contribution Option which can be 'MakeContributions' 'OptOut', 'OnAContributionsHoliday', 'OnASavingsSuspension', 'NotCurrentlyAKiwiSaverMember' for employees without a KiwiSaver membership|
|kiwiSaverEmployeeContributionRatePercentage|number(double)|false|none|Employee Contribution percentage.|
|kiwiSaverEmployerContributionRatePercentage|number(double)|false|none|Employer Contribution percentage.|
|kiwiSaverEmployerSalarySacrificeContributionRatePercentage|number(double)|false|none|Employer Contribution through Salary Sacrifice percentage.|
|kiwiSaverOptOutDate|string(date)|false|none|Opt Out Date.|
|kiwiSaverContributionHolidayEndDate|string(date)|false|none|Contribution holiday expiry date or end date.|
|hasStudentLoanBalance|boolean|false|none|Does the employee have a remaining student loan balance? Set a remaining balance if you have received a letter from IR.|
|studentLoanBalance|number(double)|false|none|The employee's student loan balance shown on the letter from IR.|
|studentLoanAsAt|string(date)|false|none|The date of the letter from IR.|

#### Enumerated Values

|Property|Value|
|---|---|
|taxCode|ND|
|taxCode|M|
|taxCode|ME|
|taxCode|MSL|
|taxCode|MESL|
|taxCode|SB|
|taxCode|S|
|taxCode|SH|
|taxCode|ST|
|taxCode|SBSL|
|taxCode|SSL|
|taxCode|SHSL|
|taxCode|STSL|
|taxCode|WT|
|taxCode|CAE|
|taxCode|EDW|
|taxCode|NSW|
|taxCode|STC|
|taxCode|STCSL|
|kiwiSaverContributions|MakeContributions|
|kiwiSaverContributions|OptOut|
|kiwiSaverContributions|OnAContributionsHoliday|
|kiwiSaverContributions|OnASavingsSuspension|
|kiwiSaverContributions|NotCurrentlyAKiwiSaverMember|

<h2 id="tocS_TaxCode">TaxCode</h2>
<!-- backwards compatibility -->
<a id="schemataxcode"></a>
<a id="schema_TaxCode"></a>
<a id="tocStaxcode"></a>
<a id="tocstaxcode"></a>

```json
"ND"
```

Tax codes used for employee tax

<h2 id="tocS_EmployeeOpeningBalancesObject">EmployeeOpeningBalancesObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeopeningbalancesobject"></a>
<a id="schema_EmployeeOpeningBalancesObject"></a>
<a id="tocSemployeeopeningbalancesobject"></a>
<a id="tocsemployeeopeningbalancesobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "openingBalances": [
    {
      "periodEndDate": "2020-07-01T00:00:00",
      "daysPaid": 0,
      "unpaidWeeks": 0,
      "grossEarnings": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|openingBalances|[[EmployeeOpeningBalance](#schemaemployeeopeningbalance)]|false|none|none|

<h2 id="tocS_EmployeeOpeningBalances">EmployeeOpeningBalances</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeopeningbalances"></a>
<a id="schema_EmployeeOpeningBalances"></a>
<a id="tocSemployeeopeningbalances"></a>
<a id="tocsemployeeopeningbalances"></a>

```json
[
  {
    "periodEndDate": "2020-07-01T00:00:00",
    "daysPaid": 0,
    "unpaidWeeks": 0,
    "grossEarnings": 0
  }
]
```

<h2 id="tocS_EmployeeOpeningBalance">EmployeeOpeningBalance</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeopeningbalance"></a>
<a id="schema_EmployeeOpeningBalance"></a>
<a id="tocSemployeeopeningbalance"></a>
<a id="tocsemployeeopeningbalance"></a>

```json
{
  "periodEndDate": "2020-07-01T00:00:00",
  "daysPaid": 0,
  "unpaidWeeks": 0,
  "grossEarnings": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodEndDate|string(date)|false|none|The opening balance period end date.|
|daysPaid|integer(int32)|false|none|The paid number of days.|
|unpaidWeeks|integer(int32)|false|none|The number of unpaid weeks.|
|grossEarnings|number(double)|false|none|The gross earnings during the period.|

<h2 id="tocS_EmployeeLeaves">EmployeeLeaves</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleaves"></a>
<a id="schema_EmployeeLeaves"></a>
<a id="tocSemployeeleaves"></a>
<a id="tocsemployeeleaves"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leave": [
    {
      "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "periods": [
        {
          "periodStartDate": "1970-01-01",
          "periodEndDate": "1970-01-01",
          "numberOfUnits": 0,
          "numberOfUnitsTaken": 0,
          "typeOfUnits": "string",
          "typeOfUnitsTaken": "string",
          "periodStatus": "Approved"
        }
      ],
      "updatedDateUTC": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leave|[[EmployeeLeave](#schemaemployeeleave)]|false|none|none|

<h2 id="tocS_EmployeeLeaveObject">EmployeeLeaveObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleaveobject"></a>
<a id="schema_EmployeeLeaveObject"></a>
<a id="tocSemployeeleaveobject"></a>
<a id="tocsemployeeleaveobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leave": {
    "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "startDate": "1970-01-01",
    "endDate": "1970-01-01",
    "periods": [
      {
        "periodStartDate": "1970-01-01",
        "periodEndDate": "1970-01-01",
        "numberOfUnits": 0,
        "numberOfUnitsTaken": 0,
        "typeOfUnits": "string",
        "typeOfUnitsTaken": "string",
        "periodStatus": "Approved"
      }
    ],
    "updatedDateUTC": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leave|[EmployeeLeave](#schemaemployeeleave)|false|none|none|

<h2 id="tocS_EmployeeLeave">EmployeeLeave</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleave"></a>
<a id="schema_EmployeeLeave"></a>
<a id="tocSemployeeleave"></a>
<a id="tocsemployeeleave"></a>

```json
{
  "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "periods": [
    {
      "periodStartDate": "1970-01-01",
      "periodEndDate": "1970-01-01",
      "numberOfUnits": 0,
      "numberOfUnitsTaken": 0,
      "typeOfUnits": "string",
      "typeOfUnitsTaken": "string",
      "periodStatus": "Approved"
    }
  ],
  "updatedDateUTC": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveID|string(uuid)|false|none|The Xero identifier for LeaveType|
|leaveTypeID|string(uuid)|true|none|The Xero identifier for LeaveType|
|description|string|true|none|The description of the leave  (max length = 50)|
|startDate|string(date)|true|none|Start date of the leave (YYYY-MM-DD)|
|endDate|string(date)|true|none|End date of the leave (YYYY-MM-DD)|
|periods|[[LeavePeriod](#schemaleaveperiod)]|false|none|The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of last update to the leave type note|

<h2 id="tocS_LeavePeriods">LeavePeriods</h2>
<!-- backwards compatibility -->
<a id="schemaleaveperiods"></a>
<a id="schema_LeavePeriods"></a>
<a id="tocSleaveperiods"></a>
<a id="tocsleaveperiods"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "periods": [
    {
      "periodStartDate": "1970-01-01",
      "periodEndDate": "1970-01-01",
      "numberOfUnits": 0,
      "numberOfUnitsTaken": 0,
      "typeOfUnits": "string",
      "typeOfUnitsTaken": "string",
      "periodStatus": "Approved"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|periods|[[LeavePeriod](#schemaleaveperiod)]|false|none|none|

<h2 id="tocS_LeavePeriod">LeavePeriod</h2>
<!-- backwards compatibility -->
<a id="schemaleaveperiod"></a>
<a id="schema_LeavePeriod"></a>
<a id="tocSleaveperiod"></a>
<a id="tocsleaveperiod"></a>

```json
{
  "periodStartDate": "1970-01-01",
  "periodEndDate": "1970-01-01",
  "numberOfUnits": 0,
  "numberOfUnitsTaken": 0,
  "typeOfUnits": "string",
  "typeOfUnitsTaken": "string",
  "periodStatus": "Approved"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodStartDate|string(date)|false|none|The Pay Period Start Date (YYYY-MM-DD)|
|periodEndDate|string(date)|false|none|The Pay Period End Date (YYYY-MM-DD)|
|numberOfUnits|number(double)|false|none|The Number of Units for the leave|
|numberOfUnitsTaken|number(double)|false|none|The number of units taken for the leave|
|typeOfUnits|string|false|none|The type of units paid for the leave|
|typeOfUnitsTaken|string|false|none|The type of units taken for the leave|
|periodStatus|string|false|none|Status of leave|

#### Enumerated Values

|Property|Value|
|---|---|
|periodStatus|Approved|
|periodStatus|Completed|
|periodStatus|Estimated|

<h2 id="tocS_EmployeeLeaveBalances">EmployeeLeaveBalances</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavebalances"></a>
<a id="schema_EmployeeLeaveBalances"></a>
<a id="tocSemployeeleavebalances"></a>
<a id="tocsemployeeleavebalances"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveBalances": [
    {
      "name": "Holiday",
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "balance": 0,
      "typeOfUnits": "hours"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveBalances|[[EmployeeLeaveBalance](#schemaemployeeleavebalance)]|false|none|none|

<h2 id="tocS_EmployeeLeaveBalance">EmployeeLeaveBalance</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavebalance"></a>
<a id="schema_EmployeeLeaveBalance"></a>
<a id="tocSemployeeleavebalance"></a>
<a id="tocsemployeeleavebalance"></a>

```json
{
  "name": "Holiday",
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "balance": 0,
  "typeOfUnits": "hours"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the leave type.|
|leaveTypeID|string(uuid)|false|none|The Xero identifier for leave type|
|balance|number(double)|false|none|The employees current balance for the corresponding leave type.|
|typeOfUnits|string|false|none|The type of the units of the leave.|

<h2 id="tocS_EmployeeStatutoryLeaveBalanceObject">EmployeeStatutoryLeaveBalanceObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutoryleavebalanceobject"></a>
<a id="schema_EmployeeStatutoryLeaveBalanceObject"></a>
<a id="tocSemployeestatutoryleavebalanceobject"></a>
<a id="tocsemployeestatutoryleavebalanceobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveBalance": {
    "leaveType": "Sick",
    "balanceRemaining": 0,
    "units": "Hours"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveBalance|[EmployeeStatutoryLeaveBalance](#schemaemployeestatutoryleavebalance)|false|none|none|

<h2 id="tocS_EmployeeStatutoryLeaveBalance">EmployeeStatutoryLeaveBalance</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutoryleavebalance"></a>
<a id="schema_EmployeeStatutoryLeaveBalance"></a>
<a id="tocSemployeestatutoryleavebalance"></a>
<a id="tocsemployeestatutoryleavebalance"></a>

```json
{
  "leaveType": "Sick",
  "balanceRemaining": 0,
  "units": "Hours"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveType|string|false|none|The type of statutory leave|
|balanceRemaining|number(double)|false|none|The balance remaining for the corresponding leave type as of specified date.|
|units|string|false|none|The units will be "Hours"|

#### Enumerated Values

|Property|Value|
|---|---|
|leaveType|Sick|
|leaveType|Adoption|
|leaveType|Maternity|
|leaveType|Paternity|
|leaveType|Sharedparental|
|units|Hours|

<h2 id="tocS_EmployeeStatutoryLeavesSummaries">EmployeeStatutoryLeavesSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutoryleavessummaries"></a>
<a id="schema_EmployeeStatutoryLeavesSummaries"></a>
<a id="tocSemployeestatutoryleavessummaries"></a>
<a id="tocsemployeestatutoryleavessummaries"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutoryLeaves": [
    {
      "statutoryLeaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "Sick",
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "isEntitled": true,
      "status": "Pending"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutoryLeaves|[[EmployeeStatutoryLeaveSummary](#schemaemployeestatutoryleavesummary)]|false|none|none|

<h2 id="tocS_EmployeeStatutoryLeaveSummary">EmployeeStatutoryLeaveSummary</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutoryleavesummary"></a>
<a id="schema_EmployeeStatutoryLeaveSummary"></a>
<a id="tocSemployeestatutoryleavesummary"></a>
<a id="tocsemployeestatutoryleavesummary"></a>

```json
{
  "statutoryLeaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "Sick",
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "isEntitled": true,
  "status": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statutoryLeaveID|string(uuid)|false|none|The unique identifier (guid) of a statutory leave.|
|employeeID|string(uuid)|false|none|The unique identifier (guid) of the employee|
|type|string|false|none|The category of statutory leave|
|startDate|string(date)|false|none|The date when the leave starts|
|endDate|string(date)|false|none|The date when the leave ends|
|isEntitled|boolean|false|none|Whether the leave was entitled to receive payment|
|status|string|false|none|The status of the leave|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Sick|
|type|Adoption|
|type|Maternity|
|type|Paternity|
|type|Sharedparental|
|status|Pending|
|status|In-Progress|
|status|Completed|

<h2 id="tocS_EmployeeStatutorySickLeaves">EmployeeStatutorySickLeaves</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutorysickleaves"></a>
<a id="schema_EmployeeStatutorySickLeaves"></a>
<a id="tocSemployeestatutorysickleaves"></a>
<a id="tocsemployeestatutorysickleaves"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutorySickLeave": [
    {
      "statutoryLeaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "type": "Sick",
      "status": "Pending",
      "workPattern": [
        "string"
      ],
      "isPregnancyRelated": true,
      "sufficientNotice": true,
      "isEntitled": true,
      "entitlementWeeksRequested": 0,
      "entitlementWeeksQualified": 0,
      "entitlementWeeksRemaining": 0,
      "overlapsWithOtherLeave": true,
      "entitlementFailureReasons": [
        "UnableToCalculateAwe"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutorySickLeave|[[EmployeeStatutorySickLeave](#schemaemployeestatutorysickleave)]|false|none|none|

<h2 id="tocS_EmployeeStatutorySickLeaveObject">EmployeeStatutorySickLeaveObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutorysickleaveobject"></a>
<a id="schema_EmployeeStatutorySickLeaveObject"></a>
<a id="tocSemployeestatutorysickleaveobject"></a>
<a id="tocsemployeestatutorysickleaveobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutorySickLeave": {
    "statutoryLeaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startDate": "1970-01-01",
    "endDate": "1970-01-01",
    "type": "Sick",
    "status": "Pending",
    "workPattern": [
      "string"
    ],
    "isPregnancyRelated": true,
    "sufficientNotice": true,
    "isEntitled": true,
    "entitlementWeeksRequested": 0,
    "entitlementWeeksQualified": 0,
    "entitlementWeeksRemaining": 0,
    "overlapsWithOtherLeave": true,
    "entitlementFailureReasons": [
      "UnableToCalculateAwe"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutorySickLeave|[EmployeeStatutorySickLeave](#schemaemployeestatutorysickleave)|false|none|none|

<h2 id="tocS_EmployeeStatutorySickLeave">EmployeeStatutorySickLeave</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatutorysickleave"></a>
<a id="schema_EmployeeStatutorySickLeave"></a>
<a id="tocSemployeestatutorysickleave"></a>
<a id="tocsemployeestatutorysickleave"></a>

```json
{
  "statutoryLeaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "type": "Sick",
  "status": "Pending",
  "workPattern": [
    "string"
  ],
  "isPregnancyRelated": true,
  "sufficientNotice": true,
  "isEntitled": true,
  "entitlementWeeksRequested": 0,
  "entitlementWeeksQualified": 0,
  "entitlementWeeksRemaining": 0,
  "overlapsWithOtherLeave": true,
  "entitlementFailureReasons": [
    "UnableToCalculateAwe"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statutoryLeaveID|string(uuid)|false|none|The unique identifier (guid) of a statutory leave|
|employeeID|string(uuid)|true|none|The unique identifier (guid) of the employee|
|leaveTypeID|string(uuid)|true|none|The unique identifier (guid) of the "Statutory Sick Leave (non-pensionable)" pay item|
|startDate|string(date)|true|none|The date when the leave starts|
|endDate|string(date)|true|none|The date when the leave ends|
|type|string|false|none|the type of statutory leave|
|status|string|false|none|the type of statutory leave|
|workPattern|[string]|true|none|The days of the work week the employee is scheduled to work at the time the leave is taken|
|isPregnancyRelated|boolean|true|none|Whether the sick leave was pregnancy related|
|sufficientNotice|boolean|true|none|Whether the employee provided sufficient notice and documentation as required by the employer supporting the sick leave request|
|isEntitled|boolean|false|none|Whether the leave was entitled to receive payment|
|entitlementWeeksRequested|number(double)|false|none|The amount of requested time (in weeks)|
|entitlementWeeksQualified|number(double)|false|none|The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested|
|entitlementWeeksRemaining|number(double)|false|none|A calculated amount of time (in weeks) that remains for the statutory sick leave period|
|overlapsWithOtherLeave|boolean|false|none|Whether another leave (Paternity, Shared Parental specifically) occurs during the requested leave's period. While this is allowed it could affect payment amounts|
|entitlementFailureReasons|[string]|false|none|If the leave requested was considered "not entitled", the reasons why are listed here.|

#### Enumerated Values

|Property|Value|
|---|---|
|entitlementFailureReasons|UnableToCalculateAwe|
|entitlementFailureReasons|AweLowerThanLel|
|entitlementFailureReasons|NotQualifiedInPreviousPiw|
|entitlementFailureReasons|ExceededMaximumEntitlementWeeksOfSsp|
|entitlementFailureReasons|ExceededMaximumDurationOfPiw|
|entitlementFailureReasons|SufficientNoticeNotGiven|

<h2 id="tocS_EmployeeLeaveTypes">EmployeeLeaveTypes</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavetypes"></a>
<a id="schema_EmployeeLeaveTypes"></a>
<a id="tocSemployeeleavetypes"></a>
<a id="tocsemployeeleavetypes"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveTypes": [
    {
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scheduleOfAccrual": "AnnuallyAfter6Months",
      "unitsAccruedAnnually": 0,
      "typeOfUnitsToAccrue": "string",
      "maximumToAccrue": 0,
      "openingBalance": 0,
      "openingBalanceTypeOfUnits": "string",
      "rateAccruedHourly": 0,
      "percentageOfGrossEarnings": 0,
      "includeHolidayPayEveryPay": true,
      "showAnnualLeaveInAdvance": true,
      "annualLeaveTotalAmountPaid": 0,
      "scheduleOfAccrualDate": "2020-01-19"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveTypes|[[EmployeeLeaveType](#schemaemployeeleavetype)]|false|none|none|

<h2 id="tocS_EmployeeLeaveSetupObject">EmployeeLeaveSetupObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavesetupobject"></a>
<a id="schema_EmployeeLeaveSetupObject"></a>
<a id="tocSemployeeleavesetupobject"></a>
<a id="tocsemployeeleavesetupobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveSetup": {
    "includeHolidayPay": false,
    "holidayPayOpeningBalance": 10.5,
    "annualLeaveOpeningBalance": 25.89,
    "negativeAnnualLeaveBalancePaidAmount": 10,
    "SickLeaveToAccrueAnnually": 100.5,
    "SickLeaveMaximumToAccrue": 200.5,
    "sickLeaveOpeningBalance": 10.5,
    "SickLeaveScheduleOfAccrual": "OnAnniversaryDate",
    "SickLeaveAnniversaryDate": "2020-01-19",
    "AnnualLeaveAnniversaryDate": "2020-01-19"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveSetup|[EmployeeLeaveSetup](#schemaemployeeleavesetup)|false|none|none|

<h2 id="tocS_EmployeeLeaveSetup">EmployeeLeaveSetup</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavesetup"></a>
<a id="schema_EmployeeLeaveSetup"></a>
<a id="tocSemployeeleavesetup"></a>
<a id="tocsemployeeleavesetup"></a>

```json
{
  "includeHolidayPay": false,
  "holidayPayOpeningBalance": 10.5,
  "annualLeaveOpeningBalance": 25.89,
  "negativeAnnualLeaveBalancePaidAmount": 10,
  "SickLeaveToAccrueAnnually": 100.5,
  "SickLeaveMaximumToAccrue": 200.5,
  "sickLeaveOpeningBalance": 10.5,
  "SickLeaveScheduleOfAccrual": "OnAnniversaryDate",
  "SickLeaveAnniversaryDate": "2020-01-19",
  "AnnualLeaveAnniversaryDate": "2020-01-19"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeHolidayPay|boolean|false|none|Identifier if holiday pay will be included in each payslip|
|holidayPayOpeningBalance|number(double)|false|none|Initial holiday pay balance. A percentage — usually 8% — of gross earnings since their last work anniversary.|
|annualLeaveOpeningBalance|number(double)|false|none|Initial annual leave balance. The balance at their last anniversary, less any leave taken since then and excluding accrued annual leave.|
|negativeAnnualLeaveBalancePaidAmount|number(double)|false|none|The dollar value of annual leave opening balance if negative.|
|SickLeaveToAccrueAnnually|number(double)|false|none|Number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type|
|SickLeaveMaximumToAccrue|number(double)|false|none|Maximum number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type|
|sickLeaveOpeningBalance|number(double)|false|none|Initial sick leave balance. This will be positive unless they've taken sick leave in advance|
|SickLeaveScheduleOfAccrual|string|false|none|Set Schedule of Accrual Type for Sick Leave|
|SickLeaveAnniversaryDate|string(date)|false|none|If Sick Leave Schedule of Accrual is "OnAnniversaryDate", this is the date when entitled to Sick Leave. When null the Employee's start date is used as the anniversary date|
|AnnualLeaveAnniversaryDate|string(date)|false|none|The first date the employee will accrue Annual Leave. When null the Employee's start date is used as the anniversary date|

<h2 id="tocS_EmployeeLeaveTypeObject">EmployeeLeaveTypeObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavetypeobject"></a>
<a id="schema_EmployeeLeaveTypeObject"></a>
<a id="tocSemployeeleavetypeobject"></a>
<a id="tocsemployeeleavetypeobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveType": {
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "scheduleOfAccrual": "AnnuallyAfter6Months",
    "unitsAccruedAnnually": 0,
    "typeOfUnitsToAccrue": "string",
    "maximumToAccrue": 0,
    "openingBalance": 0,
    "openingBalanceTypeOfUnits": "string",
    "rateAccruedHourly": 0,
    "percentageOfGrossEarnings": 0,
    "includeHolidayPayEveryPay": true,
    "showAnnualLeaveInAdvance": true,
    "annualLeaveTotalAmountPaid": 0,
    "scheduleOfAccrualDate": "2020-01-19"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveType|[EmployeeLeaveType](#schemaemployeeleavetype)|false|none|none|

<h2 id="tocS_EmployeeLeaveType">EmployeeLeaveType</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeleavetype"></a>
<a id="schema_EmployeeLeaveType"></a>
<a id="tocSemployeeleavetype"></a>
<a id="tocsemployeeleavetype"></a>

```json
{
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scheduleOfAccrual": "AnnuallyAfter6Months",
  "unitsAccruedAnnually": 0,
  "typeOfUnitsToAccrue": "string",
  "maximumToAccrue": 0,
  "openingBalance": 0,
  "openingBalanceTypeOfUnits": "string",
  "rateAccruedHourly": 0,
  "percentageOfGrossEarnings": 0,
  "includeHolidayPayEveryPay": true,
  "showAnnualLeaveInAdvance": true,
  "annualLeaveTotalAmountPaid": 0,
  "scheduleOfAccrualDate": "2020-01-19"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveTypeID|string(uuid)|false|none|The Xero identifier for leave type|
|scheduleOfAccrual|string|false|none|The schedule of accrual|
|unitsAccruedAnnually|number(double)|false|none|The number of units accrued for the leave annually. This is 0 when the ScheduleOfAccrual chosen is "NoAccruals"|
|typeOfUnitsToAccrue|string|false|none|The type of units accrued for the leave annually|
|maximumToAccrue|number(double)|false|none|The maximum number of units that can be accrued for the leave|
|openingBalance|number(double)|false|none|The initial number of units assigned when the leave was added to the employee|
|openingBalanceTypeOfUnits|string|false|none|The type of units for the opening balance|
|rateAccruedHourly|number(double)|false|none|not supported in Payroll NZ|
|percentageOfGrossEarnings|number(double)|false|none|Specific for scheduleOfAccrual having percentage of gross earnings. Identifies how much percentage of gross earnings is accrued per pay period.|
|includeHolidayPayEveryPay|boolean|false|none|Specific to Holiday pay. Flag determining if pay for leave type is added on each pay run.|
|showAnnualLeaveInAdvance|boolean|false|none|Specific to Annual Leave. Flag to include leave available to take in advance in the balance in the payslip|
|annualLeaveTotalAmountPaid|number(double)|false|none|Specific to Annual Leave. Annual leave balance in dollars|
|scheduleOfAccrualDate|string(date)|false|none|The date when an employee becomes entitled to their accrual.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheduleOfAccrual|AnnuallyAfter6Months|
|scheduleOfAccrual|OnAnniversaryDate|
|scheduleOfAccrual|PercentageOfGrossEarnings|
|scheduleOfAccrual|NoAccruals|

<h2 id="tocS_EmployeePayTemplateObject">EmployeePayTemplateObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeepaytemplateobject"></a>
<a id="schema_EmployeePayTemplateObject"></a>
<a id="tocSemployeepaytemplateobject"></a>
<a id="tocsemployeepaytemplateobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payTemplate": {
    "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningTemplates": [
      {
        "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payTemplate|[EmployeePayTemplate](#schemaemployeepaytemplate)|false|none|none|

<h2 id="tocS_EmployeePayTemplates">EmployeePayTemplates</h2>
<!-- backwards compatibility -->
<a id="schemaemployeepaytemplates"></a>
<a id="schema_EmployeePayTemplates"></a>
<a id="tocSemployeepaytemplates"></a>
<a id="tocsemployeepaytemplates"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payTemplate": {
    "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningTemplates": [
      {
        "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payTemplate|[EmployeePayTemplate](#schemaemployeepaytemplate)|false|none|none|

<h2 id="tocS_EmployeeEarningsTemplates">EmployeeEarningsTemplates</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeearningstemplates"></a>
<a id="schema_EmployeeEarningsTemplates"></a>
<a id="tocSemployeeearningstemplates"></a>
<a id="tocsemployeeearningstemplates"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "earningTemplates": [
    {
      "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|earningTemplates|[[EarningsTemplate](#schemaearningstemplate)]|false|none|none|

<h2 id="tocS_EmployeePayTemplate">EmployeePayTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaemployeepaytemplate"></a>
<a id="schema_EmployeePayTemplate"></a>
<a id="tocSemployeepaytemplate"></a>
<a id="tocsemployeepaytemplate"></a>

```json
{
  "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "earningTemplates": [
    {
      "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeID|string(uuid)|false|none|Unique identifier for the employee|
|earningTemplates|[EarningsTemplates](#schemaearningstemplates)|true|none|none|

<h2 id="tocS_EarningsTemplates">EarningsTemplates</h2>
<!-- backwards compatibility -->
<a id="schemaearningstemplates"></a>
<a id="schema_EarningsTemplates"></a>
<a id="tocSearningstemplates"></a>
<a id="tocsearningstemplates"></a>

```json
[
  {
    "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }
]
```

<h2 id="tocS_EarningsTemplateObject">EarningsTemplateObject</h2>
<!-- backwards compatibility -->
<a id="schemaearningstemplateobject"></a>
<a id="schema_EarningsTemplateObject"></a>
<a id="tocSearningstemplateobject"></a>
<a id="tocsearningstemplateobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "earningTemplate": {
    "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|earningTemplate|[EarningsTemplate](#schemaearningstemplate)|false|none|none|

<h2 id="tocS_EarningsTemplate">EarningsTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaearningstemplate"></a>
<a id="schema_EarningsTemplate"></a>
<a id="tocSearningstemplate"></a>
<a id="tocsearningstemplate"></a>

```json
{
  "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payTemplateEarningID|string(uuid)|false|none|The Xero identifier for the earnings template|
|ratePerUnit|number(double)|false|none|The rate per unit|
|numberOfUnits|number(double)|false|none|The rate per unit|
|fixedAmount|number(double)|false|none|The fixed amount per period|
|earningsRateID|string(uuid)|false|none|The corresponding earnings rate identifier|
|name|string|false|none|The read-only name of the Earning Template.|

<h2 id="tocS_Superannuations">Superannuations</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuations"></a>
<a id="schema_Superannuations"></a>
<a id="tocSsuperannuations"></a>
<a id="tocssuperannuations"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "benefits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "category": "KiwiSaver",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "calculationTypeNZ": "FixedAmount",
      "standardAmount": 0,
      "percentage": 0,
      "companyMax": 0,
      "currentRecord": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|benefits|[[Benefit](#schemabenefit)]|false|none|none|

<h2 id="tocS_SuperannuationObject">SuperannuationObject</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationobject"></a>
<a id="schema_SuperannuationObject"></a>
<a id="tocSsuperannuationobject"></a>
<a id="tocssuperannuationobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "benefit": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "category": "KiwiSaver",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "calculationTypeNZ": "FixedAmount",
    "standardAmount": 0,
    "percentage": 0,
    "companyMax": 0,
    "currentRecord": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|benefit|[Benefit](#schemabenefit)|false|none|none|

<h2 id="tocS_Benefit">Benefit</h2>
<!-- backwards compatibility -->
<a id="schemabenefit"></a>
<a id="schema_Benefit"></a>
<a id="tocSbenefit"></a>
<a id="tocsbenefit"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "category": "KiwiSaver",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "calculationTypeNZ": "FixedAmount",
  "standardAmount": 0,
  "percentage": 0,
  "companyMax": 0,
  "currentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The Xero identifier for superannuation|
|name|string|true|none|Name of the superannuations|
|category|string|true|none|Superannuations Category type|
|liabilityAccountId|string(uuid)|true|none|Xero identifier for Liability Account|
|expenseAccountId|string(uuid)|true|none|Xero identifier for Expense Account|
|calculationTypeNZ|string|false|none|Calculation Type of the superannuation either FixedAmount or PercentageOfTaxableEarnings|
|standardAmount|number(double)|false|none|Standard amount of the superannuation|
|percentage|number(double)|false|none|Percentage of Taxable Earnings of the superannuation|
|companyMax|number(double)|false|none|Company Maximum amount of the superannuation|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|KiwiSaver|
|category|ComplyingFund|
|category|Other|
|calculationTypeNZ|FixedAmount|
|calculationTypeNZ|PercentageOfTaxableEarnings|

<h2 id="tocS_Deductions">Deductions</h2>
<!-- backwards compatibility -->
<a id="schemadeductions"></a>
<a id="schema_Deductions"></a>
<a id="tocSdeductions"></a>
<a id="tocsdeductions"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "deductions": [
    {
      "deductionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deductionName": "string",
      "deductionCategory": "PayrollGiving",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currentRecord": true,
      "standardAmount": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|deductions|[[Deduction](#schemadeduction)]|false|none|none|

<h2 id="tocS_DeductionObject">DeductionObject</h2>
<!-- backwards compatibility -->
<a id="schemadeductionobject"></a>
<a id="schema_DeductionObject"></a>
<a id="tocSdeductionobject"></a>
<a id="tocsdeductionobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "deduction": {
    "deductionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "deductionName": "string",
    "deductionCategory": "PayrollGiving",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true,
    "standardAmount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|deduction|[Deduction](#schemadeduction)|false|none|none|

<h2 id="tocS_Deduction">Deduction</h2>
<!-- backwards compatibility -->
<a id="schemadeduction"></a>
<a id="schema_Deduction"></a>
<a id="tocSdeduction"></a>
<a id="tocsdeduction"></a>

```json
{
  "deductionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deductionName": "string",
  "deductionCategory": "PayrollGiving",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentRecord": true,
  "standardAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deductionId|string(uuid)|false|none|The Xero identifier for Deduction|
|deductionName|string|true|none|Name of the deduction|
|deductionCategory|string|true|none|Deduction Category type|
|liabilityAccountId|string(uuid)|true|none|Xero identifier for Liability Account|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|
|standardAmount|number(double)|false|none|Standard amount of the deduction.|

#### Enumerated Values

|Property|Value|
|---|---|
|deductionCategory|PayrollGiving|
|deductionCategory|KiwiSaverVoluntaryContributions|
|deductionCategory|Superannuation|
|deductionCategory|NzOther|

<h2 id="tocS_StatutoryDeductions">StatutoryDeductions</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductions"></a>
<a id="schema_StatutoryDeductions"></a>
<a id="tocSstatutorydeductions"></a>
<a id="tocsstatutorydeductions"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutoryDeductions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "statutoryDeductionCategory": "PriorityOrder",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currentRecord": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutoryDeductions|[[StatutoryDeduction](#schemastatutorydeduction)]|false|none|none|

<h2 id="tocS_StatutoryDeductionObject">StatutoryDeductionObject</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductionobject"></a>
<a id="schema_StatutoryDeductionObject"></a>
<a id="tocSstatutorydeductionobject"></a>
<a id="tocsstatutorydeductionobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutoryDeduction": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "statutoryDeductionCategory": "PriorityOrder",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutoryDeduction|[StatutoryDeduction](#schemastatutorydeduction)|false|none|none|

<h2 id="tocS_StatutoryDeduction">StatutoryDeduction</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeduction"></a>
<a id="schema_StatutoryDeduction"></a>
<a id="tocSstatutorydeduction"></a>
<a id="tocsstatutorydeduction"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "statutoryDeductionCategory": "PriorityOrder",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The Xero identifier for earnings order|
|name|string|false|none|Name of the earnings order|
|statutoryDeductionCategory|[StatutoryDeductionCategory](#schemastatutorydeductioncategory)|false|none|Statutory Deduction Category|
|liabilityAccountId|string(uuid)|false|none|Xero identifier for Liability Account|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|statutoryDeductionCategory|PriorityOrder|
|statutoryDeductionCategory|NonPriorityOrder|
|statutoryDeductionCategory|TableBased|
|statutoryDeductionCategory|ChildSupport|
|statutoryDeductionCategory|CourtFines|
|statutoryDeductionCategory|InlandRevenueArrears|
|statutoryDeductionCategory|MsdRepayments|
|statutoryDeductionCategory|StudentLoan|
|statutoryDeductionCategory|AdditionalStudentLoan|
|statutoryDeductionCategory|VoluntaryStudentLoan|
|statutoryDeductionCategory|KiwiSaver|

<h2 id="tocS_StatutoryDeductionCategory">StatutoryDeductionCategory</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductioncategory"></a>
<a id="schema_StatutoryDeductionCategory"></a>
<a id="tocSstatutorydeductioncategory"></a>
<a id="tocsstatutorydeductioncategory"></a>

```json
"PriorityOrder"
```

Statutory Deduction Category

<h2 id="tocS_EarningsOrders">EarningsOrders</h2>
<!-- backwards compatibility -->
<a id="schemaearningsorders"></a>
<a id="schema_EarningsOrders"></a>
<a id="tocSearningsorders"></a>
<a id="tocsearningsorders"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutoryDeductions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "statutoryDeductionCategory": "PriorityOrder",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currentRecord": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutoryDeductions|[[EarningsOrder](#schemaearningsorder)]|false|none|none|

<h2 id="tocS_EarningsOrderObject">EarningsOrderObject</h2>
<!-- backwards compatibility -->
<a id="schemaearningsorderobject"></a>
<a id="schema_EarningsOrderObject"></a>
<a id="tocSearningsorderobject"></a>
<a id="tocsearningsorderobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "statutoryDeduction": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "statutoryDeductionCategory": "PriorityOrder",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|statutoryDeduction|[EarningsOrder](#schemaearningsorder)|false|none|none|

<h2 id="tocS_EarningsOrder">EarningsOrder</h2>
<!-- backwards compatibility -->
<a id="schemaearningsorder"></a>
<a id="schema_EarningsOrder"></a>
<a id="tocSearningsorder"></a>
<a id="tocsearningsorder"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "statutoryDeductionCategory": "PriorityOrder",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Xero unique identifier for an earning rate|
|name|string|true|none|Name of the earning order|
|statutoryDeductionCategory|[StatutoryDeductionCategory](#schemastatutorydeductioncategory)|false|none|Statutory Deduction Category|
|liabilityAccountId|string(uuid)|false|none|Xero identifier for Liability Account|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|statutoryDeductionCategory|PriorityOrder|
|statutoryDeductionCategory|NonPriorityOrder|
|statutoryDeductionCategory|TableBased|
|statutoryDeductionCategory|ChildSupport|
|statutoryDeductionCategory|CourtFines|
|statutoryDeductionCategory|InlandRevenueArrears|
|statutoryDeductionCategory|MsdRepayments|
|statutoryDeductionCategory|StudentLoan|
|statutoryDeductionCategory|AdditionalStudentLoan|
|statutoryDeductionCategory|VoluntaryStudentLoan|
|statutoryDeductionCategory|KiwiSaver|

<h2 id="tocS_EarningsRates">EarningsRates</h2>
<!-- backwards compatibility -->
<a id="schemaearningsrates"></a>
<a id="schema_EarningsRates"></a>
<a id="tocSearningsrates"></a>
<a id="tocsearningsrates"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "earningsRates": [
    {
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "earningsType": "Allowance",
      "rateType": "RatePerUnit",
      "typeOfUnits": "string",
      "currentRecord": true,
      "expenseAccountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ratePerUnit": 0,
      "multipleOfOrdinaryEarningsRate": 0,
      "fixedAmount": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|earningsRates|[[EarningsRate](#schemaearningsrate)]|false|none|none|

<h2 id="tocS_EarningsRateObject">EarningsRateObject</h2>
<!-- backwards compatibility -->
<a id="schemaearningsrateobject"></a>
<a id="schema_EarningsRateObject"></a>
<a id="tocSearningsrateobject"></a>
<a id="tocsearningsrateobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "earningsRate": {
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "earningsType": "Allowance",
    "rateType": "RatePerUnit",
    "typeOfUnits": "string",
    "currentRecord": true,
    "expenseAccountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "multipleOfOrdinaryEarningsRate": 0,
    "fixedAmount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|earningsRate|[EarningsRate](#schemaearningsrate)|false|none|none|

<h2 id="tocS_EarningsRate">EarningsRate</h2>
<!-- backwards compatibility -->
<a id="schemaearningsrate"></a>
<a id="schema_EarningsRate"></a>
<a id="tocSearningsrate"></a>
<a id="tocsearningsrate"></a>

```json
{
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "earningsType": "Allowance",
  "rateType": "RatePerUnit",
  "typeOfUnits": "string",
  "currentRecord": true,
  "expenseAccountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePerUnit": 0,
  "multipleOfOrdinaryEarningsRate": 0,
  "fixedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsRateID|string(uuid)|false|none|Xero unique identifier for an earning rate|
|name|string|true|none|Name of the earning rate|
|earningsType|string|true|none|Indicates how an employee will be paid when taking this type of earning|
|rateType|string|true|none|Indicates the type of the earning rate|
|typeOfUnits|string|true|none|The type of units used to record earnings|
|currentRecord|boolean|false|none|Indicates whether an earning type is active|
|expenseAccountID|string(uuid)|true|none|The account that will be used for the earnings rate|
|ratePerUnit|number(double)|false|none|Default rate per unit (optional). Only applicable if RateType is RatePerUnit|
|multipleOfOrdinaryEarningsRate|number(double)|false|none|This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate|
|fixedAmount|number(double)|false|none|Optional Fixed Rate Amount. Applicable for FixedAmount Rate|

#### Enumerated Values

|Property|Value|
|---|---|
|earningsType|Allowance|
|earningsType|Backpay|
|earningsType|Bonus|
|earningsType|Commission|
|earningsType|DiscretionaryPayments|
|earningsType|HolidayPay|
|earningsType|LumpSum|
|earningsType|OtherEarnings|
|earningsType|OtherGrossEarnings|
|earningsType|OvertimeEarnings|
|earningsType|RegularEarnings|
|earningsType|SalarySacrificeForKiwiSaver|
|earningsType|Tips(Direct)|
|earningsType|Tips(Non-Direct)|
|earningsType|WithholdingIncome|
|rateType|RatePerUnit|
|rateType|MultipleOfOrdinaryEarningsRate|
|rateType|FixedAmount|

<h2 id="tocS_LeaveTypes">LeaveTypes</h2>
<!-- backwards compatibility -->
<a id="schemaleavetypes"></a>
<a id="schema_LeaveTypes"></a>
<a id="tocSleavetypes"></a>
<a id="tocsleavetypes"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveTypes": [
    {
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "1970-01-01T00:00:00Z",
      "isActive": true,
      "typeOfUnits": "string",
      "typeOfUnitsToAccrue": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveTypes|[[LeaveType](#schemaleavetype)]|false|none|none|

<h2 id="tocS_LeaveTypeObject">LeaveTypeObject</h2>
<!-- backwards compatibility -->
<a id="schemaleavetypeobject"></a>
<a id="schema_LeaveTypeObject"></a>
<a id="tocSleavetypeobject"></a>
<a id="tocsleavetypeobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "leaveType": {
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "isPaidLeave": true,
    "showOnPayslip": true,
    "updatedDateUTC": "1970-01-01T00:00:00Z",
    "isActive": true,
    "typeOfUnits": "string",
    "typeOfUnitsToAccrue": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|leaveType|[LeaveType](#schemaleavetype)|false|none|none|

<h2 id="tocS_LeaveType">LeaveType</h2>
<!-- backwards compatibility -->
<a id="schemaleavetype"></a>
<a id="schema_LeaveType"></a>
<a id="tocSleavetype"></a>
<a id="tocsleavetype"></a>

```json
{
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "isPaidLeave": true,
  "showOnPayslip": true,
  "updatedDateUTC": "1970-01-01T00:00:00Z",
  "isActive": true,
  "typeOfUnits": "string",
  "typeOfUnitsToAccrue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveTypeID|string(uuid)|false|none|Xero unique identifier for the leave type|
|name|string|true|none|Name of the leave type|
|isPaidLeave|boolean|true|none|Indicate that an employee will be paid when taking this type of leave|
|showOnPayslip|boolean|true|none|Indicate that a balance for this leave type to be shown on the employee’s payslips|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of last update to the leave type note|
|isActive|boolean|false|none|Shows whether the leave type is active or not|
|typeOfUnits|string|false|none|The type of units to be paid for the leave type|
|typeOfUnitsToAccrue|string|false|none|The type of units to be accrued for the leave type|

<h2 id="tocS_Reimbursements">Reimbursements</h2>
<!-- backwards compatibility -->
<a id="schemareimbursements"></a>
<a id="schema_Reimbursements"></a>
<a id="tocSreimbursements"></a>
<a id="tocsreimbursements"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "reimbursements": [
    {
      "reimbursementID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currentRecord": true,
      "reimbursementCategory": "GST",
      "calculationType": "Unknown",
      "standardAmount": "string",
      "standardTypeOfUnits": "Hours",
      "standardRatePerUnit": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|reimbursements|[[Reimbursement](#schemareimbursement)]|false|none|none|

<h2 id="tocS_ReimbursementObject">ReimbursementObject</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementobject"></a>
<a id="schema_ReimbursementObject"></a>
<a id="tocSreimbursementobject"></a>
<a id="tocsreimbursementobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "reimbursement": {
    "reimbursementID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true,
    "reimbursementCategory": "GST",
    "calculationType": "Unknown",
    "standardAmount": "string",
    "standardTypeOfUnits": "Hours",
    "standardRatePerUnit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|reimbursement|[Reimbursement](#schemareimbursement)|false|none|none|

<h2 id="tocS_Reimbursement">Reimbursement</h2>
<!-- backwards compatibility -->
<a id="schemareimbursement"></a>
<a id="schema_Reimbursement"></a>
<a id="tocSreimbursement"></a>
<a id="tocsreimbursement"></a>

```json
{
  "reimbursementID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentRecord": true,
  "reimbursementCategory": "GST",
  "calculationType": "Unknown",
  "standardAmount": "string",
  "standardTypeOfUnits": "Hours",
  "standardRatePerUnit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reimbursementID|string(uuid)|false|none|Xero unique identifier for a reimbursement|
|name|string|true|none|Name of the reimbursement|
|accountID|string(uuid)|true|none|Xero unique identifier for the account used for the reimbursement|
|currentRecord|boolean|false|none|Indicates that whether the reimbursement is active|
|reimbursementCategory|string|false|none|See Reimbursement Categories|
|calculationType|string|false|none|See Calculation Types|
|standardAmount|string|false|none|Optional Fixed Rate Amount. Applicable when calculation type is Fixed Amount|
|standardTypeOfUnits|string|false|none|Optional Type Of Units. Applicable when calculation type is Rate Per Unit|
|standardRatePerUnit|number(double)|false|none|Optional Rate Per Unit. Applicable when calculation type is Rate Per Unit|

#### Enumerated Values

|Property|Value|
|---|---|
|reimbursementCategory|GST|
|reimbursementCategory|NoGST|
|reimbursementCategory|GSTInclusive|
|calculationType|Unknown|
|calculationType|FixedAmount|
|calculationType|RatePerUnit|
|standardTypeOfUnits|Hours|
|standardTypeOfUnits|km|

<h2 id="tocS_Timesheets">Timesheets</h2>
<!-- backwards compatibility -->
<a id="schematimesheets"></a>
<a id="schema_Timesheets"></a>
<a id="tocStimesheets"></a>
<a id="tocstimesheets"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "timesheets": [
    {
      "timesheetID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "status": "Draft",
      "totalHours": 0,
      "updatedDateUTC": "1970-01-01T00:00:00Z",
      "timesheetLines": [
        {
          "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "date": "1970-01-01",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "numberOfUnits": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|timesheets|[[Timesheet](#schematimesheet)]|false|none|none|

<h2 id="tocS_TimesheetObject">TimesheetObject</h2>
<!-- backwards compatibility -->
<a id="schematimesheetobject"></a>
<a id="schema_TimesheetObject"></a>
<a id="tocStimesheetobject"></a>
<a id="tocstimesheetobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "timesheet": {
    "timesheetID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startDate": "1970-01-01",
    "endDate": "1970-01-01",
    "status": "Draft",
    "totalHours": 0,
    "updatedDateUTC": "1970-01-01T00:00:00Z",
    "timesheetLines": [
      {
        "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "date": "1970-01-01",
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "numberOfUnits": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|timesheet|[Timesheet](#schematimesheet)|false|none|none|

<h2 id="tocS_Timesheet">Timesheet</h2>
<!-- backwards compatibility -->
<a id="schematimesheet"></a>
<a id="schema_Timesheet"></a>
<a id="tocStimesheet"></a>
<a id="tocstimesheet"></a>

```json
{
  "timesheetID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "status": "Draft",
  "totalHours": 0,
  "updatedDateUTC": "1970-01-01T00:00:00Z",
  "timesheetLines": [
    {
      "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date": "1970-01-01",
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfUnits": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timesheetID|string(uuid)|false|none|The Xero identifier for a Timesheet|
|payrollCalendarID|string(uuid)|true|none|The Xero identifier for the Payroll Calendar that the Timesheet applies to|
|employeeID|string(uuid)|true|none|The Xero identifier for the Employee that the Timesheet is for|
|startDate|string(date)|true|none|The Start Date of the Timesheet period (YYYY-MM-DD)|
|endDate|string(date)|true|none|The End Date of the Timesheet period (YYYY-MM-DD)|
|status|string|false|none|Status of the timesheet|
|totalHours|number(double)|false|none|The Total Hours of the Timesheet|
|updatedDateUTC|string(date-time)|false|none|The UTC date time that the Timesheet was last updated|
|timesheetLines|[TimesheetLines](#schematimesheetlines)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Draft|
|status|Approved|
|status|Completed|
|status|Requested|

<h2 id="tocS_TimesheetLines">TimesheetLines</h2>
<!-- backwards compatibility -->
<a id="schematimesheetlines"></a>
<a id="schema_TimesheetLines"></a>
<a id="tocStimesheetlines"></a>
<a id="tocstimesheetlines"></a>

```json
[
  {
    "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "date": "1970-01-01",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "numberOfUnits": 0
  }
]
```

<h2 id="tocS_TimesheetLineObject">TimesheetLineObject</h2>
<!-- backwards compatibility -->
<a id="schematimesheetlineobject"></a>
<a id="schema_TimesheetLineObject"></a>
<a id="tocStimesheetlineobject"></a>
<a id="tocstimesheetlineobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "timesheetLine": {
    "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "date": "1970-01-01",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "numberOfUnits": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|timesheetLine|[TimesheetLine](#schematimesheetline)|false|none|none|

<h2 id="tocS_TimesheetLine">TimesheetLine</h2>
<!-- backwards compatibility -->
<a id="schematimesheetline"></a>
<a id="schema_TimesheetLine"></a>
<a id="tocStimesheetline"></a>
<a id="tocstimesheetline"></a>

```json
{
  "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date": "1970-01-01",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfUnits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timesheetLineID|string(uuid)|false|none|The Xero identifier for a Timesheet Line|
|date|string(date)|true|none|The Date that this Timesheet Line is for (YYYY-MM-DD)|
|earningsRateID|string(uuid)|true|none|The Xero identifier for the Earnings Rate that the Timesheet is for|
|trackingItemID|string(uuid)|false|none|The Xero identifier for the Tracking Item that the Timesheet is for|
|numberOfUnits|number(double)|true|none|The Number of Units of the Timesheet Line|

<h2 id="tocS_PayRunCalendars">PayRunCalendars</h2>
<!-- backwards compatibility -->
<a id="schemapayruncalendars"></a>
<a id="schema_PayRunCalendars"></a>
<a id="tocSpayruncalendars"></a>
<a id="tocspayruncalendars"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payRunCalendars": [
    {
      "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "calendarType": "Weekly",
      "periodStartDate": "1970-01-01",
      "periodEndDate": "1970-01-01",
      "paymentDate": "1970-01-01",
      "updatedDateUTC": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payRunCalendars|[[PayRunCalendar](#schemapayruncalendar)]|false|none|none|

<h2 id="tocS_PayRunCalendarObject">PayRunCalendarObject</h2>
<!-- backwards compatibility -->
<a id="schemapayruncalendarobject"></a>
<a id="schema_PayRunCalendarObject"></a>
<a id="tocSpayruncalendarobject"></a>
<a id="tocspayruncalendarobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payRunCalendar": {
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "calendarType": "Weekly",
    "periodStartDate": "1970-01-01",
    "periodEndDate": "1970-01-01",
    "paymentDate": "1970-01-01",
    "updatedDateUTC": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payRunCalendar|[PayRunCalendar](#schemapayruncalendar)|false|none|none|

<h2 id="tocS_PayRunCalendar">PayRunCalendar</h2>
<!-- backwards compatibility -->
<a id="schemapayruncalendar"></a>
<a id="schema_PayRunCalendar"></a>
<a id="tocSpayruncalendar"></a>
<a id="tocspayruncalendar"></a>

```json
{
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "calendarType": "Weekly",
  "periodStartDate": "1970-01-01",
  "periodEndDate": "1970-01-01",
  "paymentDate": "1970-01-01",
  "updatedDateUTC": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payrollCalendarID|string(uuid)|false|none|Xero unique identifier for the payroll calendar|
|name|string|true|none|Name of the calendar|
|calendarType|[CalendarType](#schemacalendartype)|true|none|Calendar type of the pay run|
|periodStartDate|string(date)|true|none|Period start date of the calendar|
|periodEndDate|string(date)|false|none|Period end date of the calendar|
|paymentDate|string(date)|true|none|Payment date of the calendar|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of the last update to the pay run calendar|

#### Enumerated Values

|Property|Value|
|---|---|
|calendarType|Weekly|
|calendarType|Fortnightly|
|calendarType|FourWeekly|
|calendarType|Monthly|
|calendarType|Annual|
|calendarType|Quarterly|
|calendarType|TwiceMonthly|

<h2 id="tocS_PaymentMethodObject">PaymentMethodObject</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodobject"></a>
<a id="schema_PaymentMethodObject"></a>
<a id="tocSpaymentmethodobject"></a>
<a id="tocspaymentmethodobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "paymentMethod": {
    "paymentMethod": "Cheque",
    "bankAccounts": [
      {
        "accountName": "string",
        "accountNumber": "string",
        "sortCode": "string",
        "particulars": "string",
        "code": "string",
        "dollarAmount": 0,
        "reference": "string",
        "calculationType": "FixedAmount"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|paymentMethod|[PaymentMethod](#schemapaymentmethod)|false|none|none|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "paymentMethod": "Cheque",
  "bankAccounts": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "sortCode": "string",
      "particulars": "string",
      "code": "string",
      "dollarAmount": 0,
      "reference": "string",
      "calculationType": "FixedAmount"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethod|string|false|none|The payment method code|
|bankAccounts|[[BankAccount](#schemabankaccount)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentMethod|Cheque|
|paymentMethod|Electronically|
|paymentMethod|Manual|

<h2 id="tocS_SalaryAndWages">SalaryAndWages</h2>
<!-- backwards compatibility -->
<a id="schemasalaryandwages"></a>
<a id="schema_SalaryAndWages"></a>
<a id="tocSsalaryandwages"></a>
<a id="tocssalaryandwages"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "salaryAndWages": [
    {
      "salaryAndWagesID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfUnitsPerWeek": 0,
      "ratePerUnit": 0,
      "numberOfUnitsPerDay": 0,
      "daysPerWeek": 0,
      "effectiveFrom": "1970-01-01",
      "annualSalary": 0,
      "status": "Active",
      "paymentType": "Salary",
      "workPatternType": "DaysAndHours"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|salaryAndWages|[[SalaryAndWage](#schemasalaryandwage)]|false|none|none|

<h2 id="tocS_SalaryAndWageObject">SalaryAndWageObject</h2>
<!-- backwards compatibility -->
<a id="schemasalaryandwageobject"></a>
<a id="schema_SalaryAndWageObject"></a>
<a id="tocSsalaryandwageobject"></a>
<a id="tocssalaryandwageobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "salaryAndWages": {
    "salaryAndWagesID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "numberOfUnitsPerWeek": 0,
    "ratePerUnit": 0,
    "numberOfUnitsPerDay": 0,
    "daysPerWeek": 0,
    "effectiveFrom": "1970-01-01",
    "annualSalary": 0,
    "status": "Active",
    "paymentType": "Salary",
    "workPatternType": "DaysAndHours"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|salaryAndWages|[SalaryAndWage](#schemasalaryandwage)|false|none|none|

<h2 id="tocS_SalaryAndWage">SalaryAndWage</h2>
<!-- backwards compatibility -->
<a id="schemasalaryandwage"></a>
<a id="schema_SalaryAndWage"></a>
<a id="tocSsalaryandwage"></a>
<a id="tocssalaryandwage"></a>

```json
{
  "salaryAndWagesID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfUnitsPerWeek": 0,
  "ratePerUnit": 0,
  "numberOfUnitsPerDay": 0,
  "daysPerWeek": 0,
  "effectiveFrom": "1970-01-01",
  "annualSalary": 0,
  "status": "Active",
  "paymentType": "Salary",
  "workPatternType": "DaysAndHours"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salaryAndWagesID|string(uuid)|false|none|Xero unique identifier for a salary and wages record|
|earningsRateID|string(uuid)|true|none|Xero unique identifier for an earnings rate|
|numberOfUnitsPerWeek|number(double)|true|none|The Number of Units per week for the corresponding salary and wages|
|ratePerUnit|number(double)|false|none|The rate of each unit for the corresponding salary and wages|
|numberOfUnitsPerDay|number(double)|true|none|The Number of Units per day for the corresponding salary and wages|
|daysPerWeek|number(double)|false|none|The days per week for the salary.|
|effectiveFrom|string(date)|true|none|The effective date of the corresponding salary and wages|
|annualSalary|number(double)|true|none|The annual salary|
|status|string|true|none|The current status of the corresponding salary and wages|
|paymentType|string|true|none|The type of the payment of the corresponding salary and wages|
|workPatternType|string|false|none|The type of the Working Pattern of the corresponding salary and wages|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Pending|
|status|History|
|paymentType|Salary|
|paymentType|Hourly|
|workPatternType|DaysAndHours|
|workPatternType|RegularWeek|

<h2 id="tocS_PayRuns">PayRuns</h2>
<!-- backwards compatibility -->
<a id="schemapayruns"></a>
<a id="schema_PayRuns"></a>
<a id="tocSpayruns"></a>
<a id="tocspayruns"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payRuns": [
    {
      "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "periodStartDate": "1970-01-01",
      "periodEndDate": "1970-01-01",
      "paymentDate": "1970-01-01",
      "totalCost": 0,
      "totalPay": 0,
      "payRunStatus": "Draft",
      "payRunType": "Scheduled",
      "calendarType": "Weekly",
      "postedDateTime": "1970-01-01",
      "paySlips": [
        {
          "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "lastEdited": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "totalEarnings": 0,
          "grossEarnings": 0,
          "totalPay": 0,
          "totalEmployerTaxes": 0,
          "totalEmployeeTaxes": 0,
          "totalDeductions": 0,
          "totalReimbursements": 0,
          "totalStatutoryDeductions": 0,
          "totalSuperannuation": 0,
          "bacsHash": "string",
          "paymentMethod": "Cheque",
          "earningsLines": [
            {
              "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "ratePerUnit": 0,
              "numberOfUnits": 0,
              "fixedAmount": 0,
              "amount": 0,
              "isLinkedToTimesheet": true,
              "isAverageDailyPayRate": true,
              "isSystemGenerated": true
            }
          ],
          "leaveEarningsLines": [
            {
              "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "ratePerUnit": 0,
              "numberOfUnits": 0,
              "fixedAmount": 0,
              "amount": 0,
              "isLinkedToTimesheet": true,
              "isAverageDailyPayRate": true,
              "isSystemGenerated": true
            }
          ],
          "timesheetEarningsLines": [
            {
              "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "ratePerUnit": 0,
              "numberOfUnits": 0,
              "fixedAmount": 0,
              "amount": 0,
              "isLinkedToTimesheet": true,
              "isAverageDailyPayRate": true,
              "isSystemGenerated": true
            }
          ],
          "deductionLines": [
            {
              "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "amount": 0,
              "subjectToTax": true,
              "percentage": 0
            }
          ],
          "reimbursementLines": [
            {
              "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "description": "string",
              "amount": 0,
              "ratePerUnit": 0,
              "numberOfUnits": 0
            }
          ],
          "leaveAccrualLines": [
            {
              "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "numberOfUnits": 0
            }
          ],
          "superannuationLines": [
            {
              "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "amount": 0,
              "fixedAmount": 0,
              "percentage": 0,
              "manualAdjustment": true
            }
          ],
          "paymentLines": [
            {
              "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "amount": 0,
              "accountNumber": "string",
              "sortCode": "string",
              "accountName": "string"
            }
          ],
          "employeeTaxLines": [
            {
              "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "description": "string",
              "amount": 0,
              "globalTaxTypeID": "string",
              "manualAdjustment": true
            }
          ],
          "employerTaxLines": [
            {
              "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "description": "string",
              "amount": 0,
              "globalTaxTypeID": "string",
              "manualAdjustment": true
            }
          ],
          "statutoryDeductionLines": [
            {
              "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "amount": 0,
              "fixedAmount": 0,
              "manualAdjustment": true
            }
          ],
          "taxSettings": {
            "periodUnits": 0,
            "periodType": "weeks",
            "taxCode": "ND",
            "specialTaxRate": "string",
            "lumpSumTaxCode": "string",
            "lumpSumAmount": "string"
          },
          "grossEarningsHistory": {
            "daysPaid": 0,
            "unpaidWeeks": 0
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payRuns|[[PayRun](#schemapayrun)]|false|none|none|

<h2 id="tocS_PayRunObject">PayRunObject</h2>
<!-- backwards compatibility -->
<a id="schemapayrunobject"></a>
<a id="schema_PayRunObject"></a>
<a id="tocSpayrunobject"></a>
<a id="tocspayrunobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payRun": {
    "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "periodStartDate": "1970-01-01",
    "periodEndDate": "1970-01-01",
    "paymentDate": "1970-01-01",
    "totalCost": 0,
    "totalPay": 0,
    "payRunStatus": "Draft",
    "payRunType": "Scheduled",
    "calendarType": "Weekly",
    "postedDateTime": "1970-01-01",
    "paySlips": [
      {
        "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "lastEdited": "1970-01-01",
        "firstName": "string",
        "lastName": "string",
        "totalEarnings": 0,
        "grossEarnings": 0,
        "totalPay": 0,
        "totalEmployerTaxes": 0,
        "totalEmployeeTaxes": 0,
        "totalDeductions": 0,
        "totalReimbursements": 0,
        "totalStatutoryDeductions": 0,
        "totalSuperannuation": 0,
        "bacsHash": "string",
        "paymentMethod": "Cheque",
        "earningsLines": [
          {
            "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "ratePerUnit": 0,
            "numberOfUnits": 0,
            "fixedAmount": 0,
            "amount": 0,
            "isLinkedToTimesheet": true,
            "isAverageDailyPayRate": true,
            "isSystemGenerated": true
          }
        ],
        "leaveEarningsLines": [
          {
            "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "ratePerUnit": 0,
            "numberOfUnits": 0,
            "fixedAmount": 0,
            "amount": 0,
            "isLinkedToTimesheet": true,
            "isAverageDailyPayRate": true,
            "isSystemGenerated": true
          }
        ],
        "timesheetEarningsLines": [
          {
            "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "ratePerUnit": 0,
            "numberOfUnits": 0,
            "fixedAmount": 0,
            "amount": 0,
            "isLinkedToTimesheet": true,
            "isAverageDailyPayRate": true,
            "isSystemGenerated": true
          }
        ],
        "deductionLines": [
          {
            "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "amount": 0,
            "subjectToTax": true,
            "percentage": 0
          }
        ],
        "reimbursementLines": [
          {
            "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "description": "string",
            "amount": 0,
            "ratePerUnit": 0,
            "numberOfUnits": 0
          }
        ],
        "leaveAccrualLines": [
          {
            "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "numberOfUnits": 0
          }
        ],
        "superannuationLines": [
          {
            "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "amount": 0,
            "fixedAmount": 0,
            "percentage": 0,
            "manualAdjustment": true
          }
        ],
        "paymentLines": [
          {
            "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "amount": 0,
            "accountNumber": "string",
            "sortCode": "string",
            "accountName": "string"
          }
        ],
        "employeeTaxLines": [
          {
            "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "description": "string",
            "amount": 0,
            "globalTaxTypeID": "string",
            "manualAdjustment": true
          }
        ],
        "employerTaxLines": [
          {
            "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "description": "string",
            "amount": 0,
            "globalTaxTypeID": "string",
            "manualAdjustment": true
          }
        ],
        "statutoryDeductionLines": [
          {
            "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "amount": 0,
            "fixedAmount": 0,
            "manualAdjustment": true
          }
        ],
        "taxSettings": {
          "periodUnits": 0,
          "periodType": "weeks",
          "taxCode": "ND",
          "specialTaxRate": "string",
          "lumpSumTaxCode": "string",
          "lumpSumAmount": "string"
        },
        "grossEarningsHistory": {
          "daysPaid": 0,
          "unpaidWeeks": 0
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payRun|[PayRun](#schemapayrun)|false|none|none|

<h2 id="tocS_PayRun">PayRun</h2>
<!-- backwards compatibility -->
<a id="schemapayrun"></a>
<a id="schema_PayRun"></a>
<a id="tocSpayrun"></a>
<a id="tocspayrun"></a>

```json
{
  "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "periodStartDate": "1970-01-01",
  "periodEndDate": "1970-01-01",
  "paymentDate": "1970-01-01",
  "totalCost": 0,
  "totalPay": 0,
  "payRunStatus": "Draft",
  "payRunType": "Scheduled",
  "calendarType": "Weekly",
  "postedDateTime": "1970-01-01",
  "paySlips": [
    {
      "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "lastEdited": "1970-01-01",
      "firstName": "string",
      "lastName": "string",
      "totalEarnings": 0,
      "grossEarnings": 0,
      "totalPay": 0,
      "totalEmployerTaxes": 0,
      "totalEmployeeTaxes": 0,
      "totalDeductions": 0,
      "totalReimbursements": 0,
      "totalStatutoryDeductions": 0,
      "totalSuperannuation": 0,
      "bacsHash": "string",
      "paymentMethod": "Cheque",
      "earningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "leaveEarningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "timesheetEarningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "deductionLines": [
        {
          "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "subjectToTax": true,
          "percentage": 0
        }
      ],
      "reimbursementLines": [
        {
          "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "ratePerUnit": 0,
          "numberOfUnits": 0
        }
      ],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "numberOfUnits": 0
        }
      ],
      "superannuationLines": [
        {
          "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "fixedAmount": 0,
          "percentage": 0,
          "manualAdjustment": true
        }
      ],
      "paymentLines": [
        {
          "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "accountNumber": "string",
          "sortCode": "string",
          "accountName": "string"
        }
      ],
      "employeeTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "statutoryDeductionLines": [
        {
          "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "fixedAmount": 0,
          "manualAdjustment": true
        }
      ],
      "taxSettings": {
        "periodUnits": 0,
        "periodType": "weeks",
        "taxCode": "ND",
        "specialTaxRate": "string",
        "lumpSumTaxCode": "string",
        "lumpSumAmount": "string"
      },
      "grossEarningsHistory": {
        "daysPaid": 0,
        "unpaidWeeks": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payRunID|string(uuid)|false|none|Xero unique identifier for the pay run|
|payrollCalendarID|string(uuid)|false|none|Xero unique identifier for the payroll calendar|
|periodStartDate|string(date)|false|none|Period start date of the payroll calendar|
|periodEndDate|string(date)|false|none|Period end date of the payroll calendar|
|paymentDate|string(date)|false|none|Payment date of the pay run|
|totalCost|number(double)|false|none|Total cost of the pay run|
|totalPay|number(double)|false|none|Total pay of the pay run|
|payRunStatus|string|false|none|Pay run status|
|payRunType|string|false|none|Pay run type|
|calendarType|[CalendarType](#schemacalendartype)|false|none|Calendar type of the pay run|
|postedDateTime|string(date)|false|none|Posted date time of the pay run|
|paySlips|[[PaySlip](#schemapayslip)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payRunStatus|Draft|
|payRunStatus|Posted|
|payRunType|Scheduled|
|payRunType|Unscheduled|
|payRunType|EarlierYearUpdate|
|calendarType|Weekly|
|calendarType|Fortnightly|
|calendarType|FourWeekly|
|calendarType|Monthly|
|calendarType|Annual|
|calendarType|Quarterly|
|calendarType|TwiceMonthly|

<h2 id="tocS_CalendarType">CalendarType</h2>
<!-- backwards compatibility -->
<a id="schemacalendartype"></a>
<a id="schema_CalendarType"></a>
<a id="tocScalendartype"></a>
<a id="tocscalendartype"></a>

```json
"Weekly"
```

Calendar type of the pay run

<h2 id="tocS_PaySlipObject">PaySlipObject</h2>
<!-- backwards compatibility -->
<a id="schemapayslipobject"></a>
<a id="schema_PaySlipObject"></a>
<a id="tocSpayslipobject"></a>
<a id="tocspayslipobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "paySlip": {
    "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lastEdited": "1970-01-01",
    "firstName": "string",
    "lastName": "string",
    "totalEarnings": 0,
    "grossEarnings": 0,
    "totalPay": 0,
    "totalEmployerTaxes": 0,
    "totalEmployeeTaxes": 0,
    "totalDeductions": 0,
    "totalReimbursements": 0,
    "totalStatutoryDeductions": 0,
    "totalSuperannuation": 0,
    "bacsHash": "string",
    "paymentMethod": "Cheque",
    "earningsLines": [
      {
        "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "amount": 0,
        "isLinkedToTimesheet": true,
        "isAverageDailyPayRate": true,
        "isSystemGenerated": true
      }
    ],
    "leaveEarningsLines": [
      {
        "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "amount": 0,
        "isLinkedToTimesheet": true,
        "isAverageDailyPayRate": true,
        "isSystemGenerated": true
      }
    ],
    "timesheetEarningsLines": [
      {
        "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "amount": 0,
        "isLinkedToTimesheet": true,
        "isAverageDailyPayRate": true,
        "isSystemGenerated": true
      }
    ],
    "deductionLines": [
      {
        "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "amount": 0,
        "subjectToTax": true,
        "percentage": 0
      }
    ],
    "reimbursementLines": [
      {
        "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "amount": 0,
        "ratePerUnit": 0,
        "numberOfUnits": 0
      }
    ],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "numberOfUnits": 0
      }
    ],
    "superannuationLines": [
      {
        "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "amount": 0,
        "fixedAmount": 0,
        "percentage": 0,
        "manualAdjustment": true
      }
    ],
    "paymentLines": [
      {
        "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "accountNumber": "string",
        "sortCode": "string",
        "accountName": "string"
      }
    ],
    "employeeTaxLines": [
      {
        "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "amount": 0,
        "globalTaxTypeID": "string",
        "manualAdjustment": true
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "amount": 0,
        "globalTaxTypeID": "string",
        "manualAdjustment": true
      }
    ],
    "statutoryDeductionLines": [
      {
        "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "fixedAmount": 0,
        "manualAdjustment": true
      }
    ],
    "taxSettings": {
      "periodUnits": 0,
      "periodType": "weeks",
      "taxCode": "ND",
      "specialTaxRate": "string",
      "lumpSumTaxCode": "string",
      "lumpSumAmount": "string"
    },
    "grossEarningsHistory": {
      "daysPaid": 0,
      "unpaidWeeks": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|paySlip|[PaySlip](#schemapayslip)|false|none|none|

<h2 id="tocS_PaySlips">PaySlips</h2>
<!-- backwards compatibility -->
<a id="schemapayslips"></a>
<a id="schema_PaySlips"></a>
<a id="tocSpayslips"></a>
<a id="tocspayslips"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "paySlips": [
    {
      "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "lastEdited": "1970-01-01",
      "firstName": "string",
      "lastName": "string",
      "totalEarnings": 0,
      "grossEarnings": 0,
      "totalPay": 0,
      "totalEmployerTaxes": 0,
      "totalEmployeeTaxes": 0,
      "totalDeductions": 0,
      "totalReimbursements": 0,
      "totalStatutoryDeductions": 0,
      "totalSuperannuation": 0,
      "bacsHash": "string",
      "paymentMethod": "Cheque",
      "earningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "leaveEarningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "timesheetEarningsLines": [
        {
          "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true,
          "isAverageDailyPayRate": true,
          "isSystemGenerated": true
        }
      ],
      "deductionLines": [
        {
          "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "subjectToTax": true,
          "percentage": 0
        }
      ],
      "reimbursementLines": [
        {
          "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "ratePerUnit": 0,
          "numberOfUnits": 0
        }
      ],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "numberOfUnits": 0
        }
      ],
      "superannuationLines": [
        {
          "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "fixedAmount": 0,
          "percentage": 0,
          "manualAdjustment": true
        }
      ],
      "paymentLines": [
        {
          "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "accountNumber": "string",
          "sortCode": "string",
          "accountName": "string"
        }
      ],
      "employeeTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "statutoryDeductionLines": [
        {
          "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "fixedAmount": 0,
          "manualAdjustment": true
        }
      ],
      "taxSettings": {
        "periodUnits": 0,
        "periodType": "weeks",
        "taxCode": "ND",
        "specialTaxRate": "string",
        "lumpSumTaxCode": "string",
        "lumpSumAmount": "string"
      },
      "grossEarningsHistory": {
        "daysPaid": 0,
        "unpaidWeeks": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|paySlips|[[PaySlip](#schemapayslip)]|false|none|none|

<h2 id="tocS_PaySlip">PaySlip</h2>
<!-- backwards compatibility -->
<a id="schemapayslip"></a>
<a id="schema_PaySlip"></a>
<a id="tocSpayslip"></a>
<a id="tocspayslip"></a>

```json
{
  "paySlipID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "employeeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payRunID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastEdited": "1970-01-01",
  "firstName": "string",
  "lastName": "string",
  "totalEarnings": 0,
  "grossEarnings": 0,
  "totalPay": 0,
  "totalEmployerTaxes": 0,
  "totalEmployeeTaxes": 0,
  "totalDeductions": 0,
  "totalReimbursements": 0,
  "totalStatutoryDeductions": 0,
  "totalSuperannuation": 0,
  "bacsHash": "string",
  "paymentMethod": "Cheque",
  "earningsLines": [
    {
      "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "amount": 0,
      "isLinkedToTimesheet": true,
      "isAverageDailyPayRate": true,
      "isSystemGenerated": true
    }
  ],
  "leaveEarningsLines": [
    {
      "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "amount": 0,
      "isLinkedToTimesheet": true,
      "isAverageDailyPayRate": true,
      "isSystemGenerated": true
    }
  ],
  "timesheetEarningsLines": [
    {
      "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "amount": 0,
      "isLinkedToTimesheet": true,
      "isAverageDailyPayRate": true,
      "isSystemGenerated": true
    }
  ],
  "deductionLines": [
    {
      "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "amount": 0,
      "subjectToTax": true,
      "percentage": 0
    }
  ],
  "reimbursementLines": [
    {
      "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "amount": 0,
      "ratePerUnit": 0,
      "numberOfUnits": 0
    }
  ],
  "leaveAccrualLines": [
    {
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfUnits": 0
    }
  ],
  "superannuationLines": [
    {
      "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "amount": 0,
      "fixedAmount": 0,
      "percentage": 0,
      "manualAdjustment": true
    }
  ],
  "paymentLines": [
    {
      "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "accountNumber": "string",
      "sortCode": "string",
      "accountName": "string"
    }
  ],
  "employeeTaxLines": [
    {
      "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "amount": 0,
      "globalTaxTypeID": "string",
      "manualAdjustment": true
    }
  ],
  "employerTaxLines": [
    {
      "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "amount": 0,
      "globalTaxTypeID": "string",
      "manualAdjustment": true
    }
  ],
  "statutoryDeductionLines": [
    {
      "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "fixedAmount": 0,
      "manualAdjustment": true
    }
  ],
  "taxSettings": {
    "periodUnits": 0,
    "periodType": "weeks",
    "taxCode": "ND",
    "specialTaxRate": "string",
    "lumpSumTaxCode": "string",
    "lumpSumAmount": "string"
  },
  "grossEarningsHistory": {
    "daysPaid": 0,
    "unpaidWeeks": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paySlipID|string(uuid)|false|none|The Xero identifier for a PaySlip|
|employeeID|string(uuid)|false|none|The Xero identifier for payroll employee|
|payRunID|string(uuid)|false|none|The Xero identifier for the associated payrun|
|lastEdited|string(date)|false|none|The date payslip was last updated|
|firstName|string|false|none|Employee first name|
|lastName|string|false|none|Employee last name|
|totalEarnings|number(double)|false|none|Total earnings before any deductions. Same as gross earnings for NZ.|
|grossEarnings|number(double)|false|none|Total earnings before any deductions. Same as total earnings for NZ.|
|totalPay|number(double)|false|none|The employee net pay|
|totalEmployerTaxes|number(double)|false|none|The employer's tax obligation|
|totalEmployeeTaxes|number(double)|false|none|The part of an employee's earnings that is deducted for tax purposes|
|totalDeductions|number(double)|false|none|Total amount subtracted from an employee's earnings to reach total pay|
|totalReimbursements|number(double)|false|none|Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment|
|totalStatutoryDeductions|number(double)|false|none|Total amounts required by law to subtract from the employee's earnings|
|totalSuperannuation|number(double)|false|none|Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries|
|bacsHash|string|false|none|BACS Service User Number|
|paymentMethod|string|false|none|The payment method code|
|earningsLines|[EarningsLines](#schemaearningslines)|false|none|none|
|leaveEarningsLines|[LeaveEarningsLines](#schemaleaveearningslines)|false|none|none|
|timesheetEarningsLines|[TimesheetEarningsLines](#schematimesheetearningslines)|false|none|none|
|deductionLines|[DeductionLines](#schemadeductionlines)|false|none|none|
|reimbursementLines|[ReimbursementLines](#schemareimbursementlines)|false|none|none|
|leaveAccrualLines|[LeaveAccrualLines](#schemaleaveaccruallines)|false|none|none|
|superannuationLines|[SuperannuationLines](#schemasuperannuationlines)|false|none|none|
|paymentLines|[PaymentLines](#schemapaymentlines)|false|none|none|
|employeeTaxLines|[TaxLines](#schemataxlines)|false|none|none|
|employerTaxLines|[TaxLines](#schemataxlines)|false|none|none|
|statutoryDeductionLines|[StatutoryDeductionLines](#schemastatutorydeductionlines)|false|none|none|
|taxSettings|[TaxSettings](#schemataxsettings)|false|none|none|
|grossEarningsHistory|[GrossEarningsHistory](#schemagrossearningshistory)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentMethod|Cheque|
|paymentMethod|Electronically|
|paymentMethod|Manual|

<h2 id="tocS_EarningsLines">EarningsLines</h2>
<!-- backwards compatibility -->
<a id="schemaearningslines"></a>
<a id="schema_EarningsLines"></a>
<a id="tocSearningslines"></a>
<a id="tocsearningslines"></a>

```json
[
  {
    "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "amount": 0,
    "isLinkedToTimesheet": true,
    "isAverageDailyPayRate": true,
    "isSystemGenerated": true
  }
]
```

<h2 id="tocS_EarningsLine">EarningsLine</h2>
<!-- backwards compatibility -->
<a id="schemaearningsline"></a>
<a id="schema_EarningsLine"></a>
<a id="tocSearningsline"></a>
<a id="tocsearningsline"></a>

```json
{
  "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "amount": 0,
  "isLinkedToTimesheet": true,
  "isAverageDailyPayRate": true,
  "isSystemGenerated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsLineID|string(uuid)|false|none|Xero identifier for payroll earnings line|
|earningsRateID|string(uuid)|false|none|Xero identifier for payroll earnings rate|
|displayName|string|false|none|name of earnings rate for display in UI|
|ratePerUnit|number(double)|false|none|Rate per unit for earnings line|
|numberOfUnits|number(double)|false|none|Earnings number of units|
|fixedAmount|number(double)|false|none|Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed|
|amount|number(double)|false|none|The amount of the earnings line.|
|isLinkedToTimesheet|boolean|false|none|Identifies if the earnings is taken from the timesheet. False for earnings line|
|isAverageDailyPayRate|boolean|false|none|Identifies if the earnings is using an average daily pay rate|
|isSystemGenerated|boolean|false|none|Flag to identify whether the earnings line is system generated or not.|

<h2 id="tocS_LeaveEarningsLines">LeaveEarningsLines</h2>
<!-- backwards compatibility -->
<a id="schemaleaveearningslines"></a>
<a id="schema_LeaveEarningsLines"></a>
<a id="tocSleaveearningslines"></a>
<a id="tocsleaveearningslines"></a>

```json
[
  {
    "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "amount": 0,
    "isLinkedToTimesheet": true,
    "isAverageDailyPayRate": true,
    "isSystemGenerated": true
  }
]
```

<h2 id="tocS_LeaveEarningsLine">LeaveEarningsLine</h2>
<!-- backwards compatibility -->
<a id="schemaleaveearningsline"></a>
<a id="schema_LeaveEarningsLine"></a>
<a id="tocSleaveearningsline"></a>
<a id="tocsleaveearningsline"></a>

```json
{
  "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "amount": 0,
  "isLinkedToTimesheet": true,
  "isAverageDailyPayRate": true,
  "isSystemGenerated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsLineID|string(uuid)|false|none|Xero identifier for payroll earnings line|
|earningsRateID|string(uuid)|false|none|Xero identifier for payroll leave earnings rate|
|displayName|string|false|none|name of earnings rate for display in UI|
|ratePerUnit|number(double)|false|none|Rate per unit for leave earnings line|
|numberOfUnits|number(double)|false|none|Leave earnings number of units|
|fixedAmount|number(double)|false|none|Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed|
|amount|number(double)|false|none|The amount of the earnings line.|
|isLinkedToTimesheet|boolean|false|none|Identifies if the leave earnings is taken from the timesheet. False for leave earnings line|
|isAverageDailyPayRate|boolean|false|none|Identifies if the earnings is using an average daily pay rate|
|isSystemGenerated|boolean|false|none|Flag to identify whether the earnings line is system generated or not.|

<h2 id="tocS_TimesheetEarningsLines">TimesheetEarningsLines</h2>
<!-- backwards compatibility -->
<a id="schematimesheetearningslines"></a>
<a id="schema_TimesheetEarningsLines"></a>
<a id="tocStimesheetearningslines"></a>
<a id="tocstimesheetearningslines"></a>

```json
[
  {
    "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "amount": 0,
    "isLinkedToTimesheet": true,
    "isAverageDailyPayRate": true,
    "isSystemGenerated": true
  }
]
```

<h2 id="tocS_TimesheetEarningsLine">TimesheetEarningsLine</h2>
<!-- backwards compatibility -->
<a id="schematimesheetearningsline"></a>
<a id="schema_TimesheetEarningsLine"></a>
<a id="tocStimesheetearningsline"></a>
<a id="tocstimesheetearningsline"></a>

```json
{
  "earningsLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "amount": 0,
  "isLinkedToTimesheet": true,
  "isAverageDailyPayRate": true,
  "isSystemGenerated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsLineID|string(uuid)|false|none|Xero identifier for payroll earnings line|
|earningsRateID|string(uuid)|false|none|Xero identifier for payroll leave earnings rate|
|displayName|string|false|none|name of earnings rate for display in UI|
|ratePerUnit|number(double)|false|none|Rate per unit for leave earnings line|
|numberOfUnits|number(double)|false|none|Leave earnings number of units|
|fixedAmount|number(double)|false|none|Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed|
|amount|number(double)|false|none|The amount of the earnings line.|
|isLinkedToTimesheet|boolean|false|none|Identifies if the leave earnings is taken from the timesheet. False for leave earnings line|
|isAverageDailyPayRate|boolean|false|none|Identifies if the earnings is using an average daily pay rate|
|isSystemGenerated|boolean|false|none|Flag to identify whether the earnings line is system generated or not.|

<h2 id="tocS_DeductionLines">DeductionLines</h2>
<!-- backwards compatibility -->
<a id="schemadeductionlines"></a>
<a id="schema_DeductionLines"></a>
<a id="tocSdeductionlines"></a>
<a id="tocsdeductionlines"></a>

```json
[
  {
    "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "amount": 0,
    "subjectToTax": true,
    "percentage": 0
  }
]
```

<h2 id="tocS_DeductionLine">DeductionLine</h2>
<!-- backwards compatibility -->
<a id="schemadeductionline"></a>
<a id="schema_DeductionLine"></a>
<a id="tocSdeductionline"></a>
<a id="tocsdeductionline"></a>

```json
{
  "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "amount": 0,
  "subjectToTax": true,
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deductionTypeID|string(uuid)|false|none|Xero identifier for payroll deduction|
|displayName|string|false|none|name of earnings rate for display in UI|
|amount|number(double)|false|none|The amount of the deduction line|
|subjectToTax|boolean|false|none|Identifies if the deduction is subject to tax|
|percentage|number(double)|false|none|Deduction rate percentage|

<h2 id="tocS_ReimbursementLines">ReimbursementLines</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementlines"></a>
<a id="schema_ReimbursementLines"></a>
<a id="tocSreimbursementlines"></a>
<a id="tocsreimbursementlines"></a>

```json
[
  {
    "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "amount": 0,
    "ratePerUnit": 0,
    "numberOfUnits": 0
  }
]
```

<h2 id="tocS_ReimbursementLine">ReimbursementLine</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementline"></a>
<a id="schema_ReimbursementLine"></a>
<a id="tocSreimbursementline"></a>
<a id="tocsreimbursementline"></a>

```json
{
  "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "amount": 0,
  "ratePerUnit": 0,
  "numberOfUnits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reimbursementTypeID|string(uuid)|false|none|Xero identifier for payroll reimbursement|
|description|string|false|none|Reimbursement line description|
|amount|number(double)|false|none|Reimbursement amount|
|ratePerUnit|number(double)|false|none|Rate per unit for leave earnings line|
|numberOfUnits|number(double)|false|none|Leave earnings number of units|

<h2 id="tocS_LeaveAccrualLines">LeaveAccrualLines</h2>
<!-- backwards compatibility -->
<a id="schemaleaveaccruallines"></a>
<a id="schema_LeaveAccrualLines"></a>
<a id="tocSleaveaccruallines"></a>
<a id="tocsleaveaccruallines"></a>

```json
[
  {
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "numberOfUnits": 0
  }
]
```

<h2 id="tocS_LeaveAccrualLine">LeaveAccrualLine</h2>
<!-- backwards compatibility -->
<a id="schemaleaveaccrualline"></a>
<a id="schema_LeaveAccrualLine"></a>
<a id="tocSleaveaccrualline"></a>
<a id="tocsleaveaccrualline"></a>

```json
{
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfUnits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveTypeID|string(uuid)|false|none|Xero identifier for the Leave type|
|numberOfUnits|number(double)|false|none|Leave accrual number of units|

<h2 id="tocS_SuperannuationLines">SuperannuationLines</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationlines"></a>
<a id="schema_SuperannuationLines"></a>
<a id="tocSsuperannuationlines"></a>
<a id="tocssuperannuationlines"></a>

```json
[
  {
    "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "amount": 0,
    "fixedAmount": 0,
    "percentage": 0,
    "manualAdjustment": true
  }
]
```

<h2 id="tocS_SuperannuationLine">SuperannuationLine</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationline"></a>
<a id="schema_SuperannuationLine"></a>
<a id="tocSsuperannuationline"></a>
<a id="tocssuperannuationline"></a>

```json
{
  "superannuationTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "amount": 0,
  "fixedAmount": 0,
  "percentage": 0,
  "manualAdjustment": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|superannuationTypeID|string(uuid)|false|none|Xero identifier for payroll superannuation type|
|displayName|string|false|none|Benefit display name|
|amount|number(double)|false|none|The amount of the superannuation line|
|fixedAmount|number(double)|false|none|Superannuation fixed amount|
|percentage|number(double)|false|none|Superannuation rate percentage|
|manualAdjustment|boolean|false|none|manual adjustment made|

<h2 id="tocS_PaymentLines">PaymentLines</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlines"></a>
<a id="schema_PaymentLines"></a>
<a id="tocSpaymentlines"></a>
<a id="tocspaymentlines"></a>

```json
[
  {
    "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "accountNumber": "string",
    "sortCode": "string",
    "accountName": "string"
  }
]
```

<h2 id="tocS_PaymentLine">PaymentLine</h2>
<!-- backwards compatibility -->
<a id="schemapaymentline"></a>
<a id="schema_PaymentLine"></a>
<a id="tocSpaymentline"></a>
<a id="tocspaymentline"></a>

```json
{
  "paymentLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "accountNumber": "string",
  "sortCode": "string",
  "accountName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentLineID|string(uuid)|false|none|Xero identifier for payroll payment line|
|amount|number(double)|false|none|The amount of the payment line|
|accountNumber|string|false|none|The account number|
|sortCode|string|false|none|The account sort code|
|accountName|string|false|none|The account name|

<h2 id="tocS_TaxLines">TaxLines</h2>
<!-- backwards compatibility -->
<a id="schemataxlines"></a>
<a id="schema_TaxLines"></a>
<a id="tocStaxlines"></a>
<a id="tocstaxlines"></a>

```json
[
  {
    "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "amount": 0,
    "globalTaxTypeID": "string",
    "manualAdjustment": true
  }
]
```

<h2 id="tocS_TaxLine">TaxLine</h2>
<!-- backwards compatibility -->
<a id="schemataxline"></a>
<a id="schema_TaxLine"></a>
<a id="tocStaxline"></a>
<a id="tocstaxline"></a>

```json
{
  "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "amount": 0,
  "globalTaxTypeID": "string",
  "manualAdjustment": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxLineID|string(uuid)|false|none|Xero identifier for payroll tax line|
|description|string|false|none|Tax line description|
|amount|number(double)|false|none|The amount of the tax line|
|globalTaxTypeID|string|false|none|Tax type ID|
|manualAdjustment|boolean|false|none|Identifies if the tax line is a manual adjustment|

<h2 id="tocS_StatutoryDeductionLines">StatutoryDeductionLines</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductionlines"></a>
<a id="schema_StatutoryDeductionLines"></a>
<a id="tocSstatutorydeductionlines"></a>
<a id="tocsstatutorydeductionlines"></a>

```json
[
  {
    "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "fixedAmount": 0,
    "manualAdjustment": true
  }
]
```

<h2 id="tocS_StatutoryDeductionLine">StatutoryDeductionLine</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductionline"></a>
<a id="schema_StatutoryDeductionLine"></a>
<a id="tocSstatutorydeductionline"></a>
<a id="tocsstatutorydeductionline"></a>

```json
{
  "statutoryDeductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "fixedAmount": 0,
  "manualAdjustment": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statutoryDeductionTypeID|string(uuid)|false|none|Xero identifier for payroll statutory deduction type|
|amount|number(double)|false|none|The amount of the statutory deduction line|
|fixedAmount|number(double)|false|none|Fixed Amount|
|manualAdjustment|boolean|false|none|Identifies if the tax line is a manual adjustment|

<h2 id="tocS_TaxSettings">TaxSettings</h2>
<!-- backwards compatibility -->
<a id="schemataxsettings"></a>
<a id="schema_TaxSettings"></a>
<a id="tocStaxsettings"></a>
<a id="tocstaxsettings"></a>

```json
{
  "periodUnits": 0,
  "periodType": "weeks",
  "taxCode": "ND",
  "specialTaxRate": "string",
  "lumpSumTaxCode": "string",
  "lumpSumAmount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodUnits|number(double)|false|none|The number of units for the period type|
|periodType|string|false|none|The type of period ("weeks" or "months")|
|taxCode|[TaxCode](#schemataxcode)|false|none|Tax codes used for employee tax|
|specialTaxRate|string|false|none|Tax rate for STC and WT|
|lumpSumTaxCode|string|false|none|Tax code for a lump sum amount|
|lumpSumAmount|string|false|none|The total of the lump sum amount|

#### Enumerated Values

|Property|Value|
|---|---|
|periodType|weeks|
|periodType|months|
|taxCode|ND|
|taxCode|M|
|taxCode|ME|
|taxCode|MSL|
|taxCode|MESL|
|taxCode|SB|
|taxCode|S|
|taxCode|SH|
|taxCode|ST|
|taxCode|SBSL|
|taxCode|SSL|
|taxCode|SHSL|
|taxCode|STSL|
|taxCode|WT|
|taxCode|CAE|
|taxCode|EDW|
|taxCode|NSW|
|taxCode|STC|
|taxCode|STCSL|

<h2 id="tocS_GrossEarningsHistory">GrossEarningsHistory</h2>
<!-- backwards compatibility -->
<a id="schemagrossearningshistory"></a>
<a id="schema_GrossEarningsHistory"></a>
<a id="tocSgrossearningshistory"></a>
<a id="tocsgrossearningshistory"></a>

```json
{
  "daysPaid": 0,
  "unpaidWeeks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daysPaid|integer(int32)|false|none|Number of days the employee worked in the pay period (0 - 365)|
|unpaidWeeks|integer(int32)|false|none|Number of full weeks the employee didn't work in the pay period (0 - 52)|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "settings": {
    "accounts": [
      {
        "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "PAYELIABILITY",
        "code": "string",
        "name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|settings|[Accounts](#schemaaccounts)|false|none|none|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "accounts": [
    {
      "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "PAYELIABILITY",
      "code": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "PAYELIABILITY",
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountID|string(uuid)|false|none|The Xero identifier for Settings.|
|type|string|false|none|The assigned AccountType|
|code|string|false|none|A unique 3 digit number for each Account|
|name|string|false|none|Name of the Account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYELIABILITY|
|type|WAGESPAYABLE|
|type|WAGESEXPENSE|
|type|BANK|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "addressLine1": "19 Taranaki Street",
  "addressLine2": "Apt 4",
  "city": "Wellington",
  "suburb": "Te Aro",
  "postCode": 6011,
  "countryName": "NEW ZEALAND"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|true|none|Address line 1 for employee home address|
|addressLine2|string|false|none|Address line 2 for employee home address|
|city|string|true|none|Suburb for employee home address|
|suburb|string|false|none|Suburb for employee home address|
|postCode|string|true|none|PostCode for employee home address|
|countryName|string|false|none|Country of HomeAddress|

<h2 id="tocS_BankAccounts">BankAccounts</h2>
<!-- backwards compatibility -->
<a id="schemabankaccounts"></a>
<a id="schema_BankAccounts"></a>
<a id="tocSbankaccounts"></a>
<a id="tocsbankaccounts"></a>

```json
[
  {
    "accountName": "string",
    "accountNumber": "string",
    "sortCode": "string",
    "particulars": "string",
    "code": "string",
    "dollarAmount": 0,
    "reference": "string",
    "calculationType": "FixedAmount"
  }
]
```

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "sortCode": "string",
  "particulars": "string",
  "code": "string",
  "dollarAmount": 0,
  "reference": "string",
  "calculationType": "FixedAmount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|Bank account name (max length = 32)|
|accountNumber|string|true|none|Bank account number (digits only; max length = 8)|
|sortCode|string|true|none|Bank account sort code (6 digits)|
|particulars|string|false|none|Particulars that appear on the statement.|
|code|string|false|none|Code of a transaction that appear on the statement.|
|dollarAmount|number(double)|false|none|Dollar amount of a transaction.|
|reference|string|false|none|Statement Text/reference for a transaction that appear on the statement.|
|calculationType|string|false|none|Calculation type for the transaction can be 'Fixed Amount' or 'Balance'|

#### Enumerated Values

|Property|Value|
|---|---|
|calculationType|FixedAmount|
|calculationType|Balance|

<h2 id="tocS_TrackingCategories">TrackingCategories</h2>
<!-- backwards compatibility -->
<a id="schematrackingcategories"></a>
<a id="schema_TrackingCategories"></a>
<a id="tocStrackingcategories"></a>
<a id="tocstrackingcategories"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "trackingCategories": {
    "employeeGroupsTrackingCategoryID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "timesheetTrackingCategoryID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|trackingCategories|[TrackingCategory](#schematrackingcategory)|false|none|none|

<h2 id="tocS_TrackingCategory">TrackingCategory</h2>
<!-- backwards compatibility -->
<a id="schematrackingcategory"></a>
<a id="schema_TrackingCategory"></a>
<a id="tocStrackingcategory"></a>
<a id="tocstrackingcategory"></a>

```json
{
  "employeeGroupsTrackingCategoryID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timesheetTrackingCategoryID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeGroupsTrackingCategoryID|string(uuid)|false|none|The Xero identifier for Employee groups tracking category.|
|timesheetTrackingCategoryID|string(uuid)|false|none|The Xero identifier for Timesheet tracking category.|

<h2 id="tocS_WorkingWeek">WorkingWeek</h2>
<!-- backwards compatibility -->
<a id="schemaworkingweek"></a>
<a id="schema_WorkingWeek"></a>
<a id="tocSworkingweek"></a>
<a id="tocsworkingweek"></a>

```json
{
  "monday": 0,
  "tuesday": 0,
  "wednesday": 0,
  "thursday": 0,
  "friday": 0,
  "saturday": 0,
  "sunday": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monday|number(double)|true|none|The number of hours worked on a Monday|
|tuesday|number(double)|true|none|The number of hours worked on a Tuesday|
|wednesday|number(double)|true|none|The number of hours worked on a Wednesday|
|thursday|number(double)|true|none|The number of hours worked on a Thursday|
|friday|number(double)|true|none|The number of hours worked on a Friday|
|saturday|number(double)|true|none|The number of hours worked on a Saturday|
|sunday|number(double)|true|none|The number of hours worked on a Sunday|

<h2 id="tocS_WorkingWeeks">WorkingWeeks</h2>
<!-- backwards compatibility -->
<a id="schemaworkingweeks"></a>
<a id="schema_WorkingWeeks"></a>
<a id="tocSworkingweeks"></a>
<a id="tocsworkingweeks"></a>

```json
[
  {
    "monday": 0,
    "tuesday": 0,
    "wednesday": 0,
    "thursday": 0,
    "friday": 0,
    "saturday": 0,
    "sunday": 0
  }
]
```

<h2 id="tocS_EmployeeWorkingPattern">EmployeeWorkingPattern</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpattern"></a>
<a id="schema_EmployeeWorkingPattern"></a>
<a id="tocSemployeeworkingpattern"></a>
<a id="tocsemployeeworkingpattern"></a>

```json
{
  "payeeWorkingPatternID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectiveFrom": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeWorkingPatternID|string(uuid)|true|none|The Xero identifier for for Employee working pattern|
|effectiveFrom|string(date)|true|none|The effective date of the corresponding salary and wages|

<h2 id="tocS_EmployeeWorkingPatterns">EmployeeWorkingPatterns</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpatterns"></a>
<a id="schema_EmployeeWorkingPatterns"></a>
<a id="tocSemployeeworkingpatterns"></a>
<a id="tocsemployeeworkingpatterns"></a>

```json
[
  {
    "payeeWorkingPatternID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "effectiveFrom": "1970-01-01"
  }
]
```

<h2 id="tocS_EmployeeWorkingPatternsObject">EmployeeWorkingPatternsObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpatternsobject"></a>
<a id="schema_EmployeeWorkingPatternsObject"></a>
<a id="tocSemployeeworkingpatternsobject"></a>
<a id="tocsemployeeworkingpatternsobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payeeWorkingPatterns": [
    {
      "payeeWorkingPatternID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "effectiveFrom": "1970-01-01"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payeeWorkingPatterns|[EmployeeWorkingPatterns](#schemaemployeeworkingpatterns)|false|none|none|

<h2 id="tocS_EmployeeWorkingPatternWithWorkingWeeks">EmployeeWorkingPatternWithWorkingWeeks</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpatternwithworkingweeks"></a>
<a id="schema_EmployeeWorkingPatternWithWorkingWeeks"></a>
<a id="tocSemployeeworkingpatternwithworkingweeks"></a>
<a id="tocsemployeeworkingpatternwithworkingweeks"></a>

```json
{
  "payeeWorkingPatternID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectiveFrom": "1970-01-01",
  "workingWeeks": [
    {
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeWorkingPatternID|string(uuid)|true|none|The Xero identifier for for Employee working pattern|
|effectiveFrom|string(date)|true|none|The effective date of the corresponding salary and wages|
|workingWeeks|[WorkingWeeks](#schemaworkingweeks)|false|none|none|

<h2 id="tocS_EmployeeWorkingPatternWithWorkingWeeksRequest">EmployeeWorkingPatternWithWorkingWeeksRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpatternwithworkingweeksrequest"></a>
<a id="schema_EmployeeWorkingPatternWithWorkingWeeksRequest"></a>
<a id="tocSemployeeworkingpatternwithworkingweeksrequest"></a>
<a id="tocsemployeeworkingpatternwithworkingweeksrequest"></a>

```json
{
  "effectiveFrom": "1970-01-01",
  "workingWeeks": [
    {
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveFrom|string(date)|true|none|The effective date of the corresponding salary and wages|
|workingWeeks|[WorkingWeeks](#schemaworkingweeks)|true|none|none|

<h2 id="tocS_EmployeeWorkingPatternWithWorkingWeeksObject">EmployeeWorkingPatternWithWorkingWeeksObject</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeworkingpatternwithworkingweeksobject"></a>
<a id="schema_EmployeeWorkingPatternWithWorkingWeeksObject"></a>
<a id="tocSemployeeworkingpatternwithworkingweeksobject"></a>
<a id="tocsemployeeworkingpatternwithworkingweeksobject"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": {
    "type": "application/problem+json",
    "title": "BadRequest",
    "status": 400,
    "detail": "Validation error occurred.",
    "instance": "string",
    "invalidFields": [
      {
        "name": "DateOfBirth",
        "reason": "The Date of Birth is required."
      }
    ]
  },
  "payeeWorkingPattern": {
    "payeeWorkingPatternID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "effectiveFrom": "1970-01-01",
    "workingWeeks": [
      {
        "monday": 0,
        "tuesday": 0,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|payeeWorkingPattern|[EmployeeWorkingPatternWithWorkingWeeks](#schemaemployeeworkingpatternwithworkingweeks)|false|none|none|
