<h1 id="xero-payroll-uk">Xero Payroll UK v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Xero Payroll API for orgs in the UK region.

Base URLs:

* <a href="https://api.xero.com/payroll.xro/2.0">https://api.xero.com/payroll.xro/2.0</a> - Xero Payroll UK API

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

<h1 id="xero-payroll-uk-payrolluk">PayrollUk</h1>

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
|filter|query|string|false|Filter by first name, lastname, and/or whether they are an off-payroll worker|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "1a14e877-773d-4cd3-b253-f559a4b4be65",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-24T18:43:43.860852",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 3
  },
  "problem": null,
  "employees": [
    {
      "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
      "firstName": "Jack",
      "lastName": "Allan",
      "dateOfBirth": "1987-12-23T00:00:00Z",
      "gender": "M",
      "email": null,
      "phoneNumber": null,
      "startDate": "2020-02-03T00:00:00",
      "address": {
        "addressLine1": "171 Midsummer Boulevard",
        "city": "Milton Keynes",
        "county": null,
        "countryName": "UNITED KINGDOM",
        "postCode": "MK9 1EB"
      },
      "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
      "updatedDateUTC": "2020-02-13T16:23:31",
      "createdDateUTC": "2020-02-10T10:00:24",
      "isOffPayrollWorker": false,
      "contracts": []
    },
    {
      "employeeID": "67e545d4-e8a6-4f98-9f63-85c2383dfe12",
      "firstName": "Charlotte",
      "lastName": "Danes",
      "dateOfBirth": "1993-10-24T00:00:00Z",
      "gender": "F",
      "email": null,
      "phoneNumber": null,
      "startDate": "2020-02-03T00:00:00",
      "address": {
        "addressLine1": "171 Midsummer Blvd",
        "city": "Milton Keynes",
        "county": null,
        "countryName": "UNITED KINGDOM",
        "postCode": "MK9 1EB"
      },
      "payrollCalendarID": "5e813d9e-949c-461f-8a89-e9ee8955a254",
      "updatedDateUTC": "2020-02-13T16:48:51",
      "createdDateUTC": "2020-02-13T16:32:12",
      "isOffPayrollWorker": false,
      "contracts": [
        {
          "publicKey": "b4d71548-2800-4fb9-be6c-d496a617428c",
          "isFixedTerm": false,
          "employmentStatus": "Employee",
          "contractType": "PartTime",
          "startDate": "2020-02-03T00:00:00",
          "fixedTermEndDate": null
        }
      ]
    },
    {
      "employeeID": "eb4a0c3b-b0d6-440d-bccc-348b7dc92321",
      "firstName": "Chelsea",
      "lastName": "Serati",
      "dateOfBirth": "1976-02-16T00:00:00Z",
      "gender": "F",
      "email": null,
      "phoneNumber": null,
      "startDate": "2019-07-01T00:00:00",
      "address": {
        "addressLine1": "171 Midsummer Boulevard",
        "city": "Milton Keynes",
        "county": null,
        "countryName": "UNITED KINGDOM",
        "postCode": "MK9 1EB"
      },
      "payrollCalendarID": "d45bc68f-59d6-4000-929d-1058dcfa79e1",
      "updatedDateUTC": "2020-02-13T16:53:12",
      "createdDateUTC": "2020-02-13T16:46:41",
      "isOffPayrollWorker": false,
      "contracts": [
        {
          "publicKey": "3a8243d5-a14a-4c06-a71b-930194928ee9",
          "isFixedTerm": false,
          "employmentStatus": "Worker",
          "contractType": "PartTime",
          "startDate": "2019-07-01T00:00:00",
          "fixedTermEndDate": null
        },
        {
          "publicKey": "ce4fe24d-bb85-4b17-a461-3e56917457d6",
          "isFixedTerm": true,
          "employmentStatus": "Employee",
          "contractType": "FullTime",
          "startDate": "2020-07-01T00:00:00",
          "fixedTermEndDate": "2026-08-01T00:00:00",
          "developmentalRoleDetails": {
            "developmentalRolePublicKey": "05bceb91-89c0-4ecc-864c-32a874143770",
            "startDate": "2020-07-01T00:00:00",
            "endDate": "2026-06-30T00:00:00",
            "developmentalRole": "Apprentice"
          }
        }
      ]
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

## Creates employees

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
    "lastName": "Fancy",
    "dateOfBirth": "1999-01-01T00:00:00Z",
    "gender": "M",
    "email": "mike@starkindustries.com",
    "isOffPayrollWorker": false,
    "address": {
      "addressLine1": "171 Midsummer",
      "city": "Milton Keyness",
      "postCode": "MK9 1EB"
    }
  }'
```

`POST /Employees`

> Body parameter

```json
{
  "title": "Mr",
  "firstName": "Mike",
  "lastName": "Fancy",
  "dateOfBirth": "1999-01-01T00:00:00Z",
  "gender": "M",
  "email": "mike@starkindustries.com",
  "isOffPayrollWorker": false,
  "address": {
    "addressLine1": "171 Midsummer",
    "city": "Milton Keyness",
    "postCode": "MK9 1EB"
  }
}
```

<h3 id="creates-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employee](#schemaemployee)|true|none|
|» employeeID|body|string(uuid)|false|Xero unique identifier for the employee|
|» title|body|string|true|Title of the employee|
|» firstName|body|string|true|First name of employee|
|» lastName|body|string|true|Last name of employee|
|» dateOfBirth|body|string(date)|true|Date of birth of the employee (YYYY-MM-DD)|
|» address|body|[Address](#schemaaddress)|true|none|
|» email|body|string|false|The email address for the employee|
|» gender|body|string|true|The employee’s gender|
|» phoneNumber|body|string|false|Employee phone number|
|» startDate|body|string(date)|false|Employment start date of the employee at the time it was requested|
|» endDate|body|string(date)|false|Employment end date of the employee at the time it was requested|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar of the employee|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the employee|
|» createdDateUTC|body|string(date-time)|false|UTC timestamp when the employee was created in Xero|
|» niCategory|body|[NICategoryLetter](#schemanicategoryletter)|false|**Deprecated.** The employee's NI Category letter.|
|» niCategories|body|[[NICategory](#schemanicategory)]|false|The employee's NI categories|
|» nationalInsuranceNumber|body|string|false|National insurance number of the employee|
|» isOffPayrollWorker|body|boolean|false|Whether the employee is an off payroll worker|
|» contracts|body|[[Contracts](#schemacontracts)]|false|The employee's contracts|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|
|» niCategory|A|
|» niCategory|B|
|» niCategory|C|
|» niCategory|F|
|» niCategory|H|
|» niCategory|I|
|» niCategory|J|
|» niCategory|L|
|» niCategory|M|
|» niCategory|S|
|» niCategory|V|
|» niCategory|X|
|» niCategory|Z|
|» niCategory|D|
|» niCategory|E|
|» niCategory|K|
|» niCategory|N|

> Example responses

> 200 Response

```json
{
  "id": "660ff206-fc4a-42f5-8f7d-de886bc2a3d3",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-25T03:12:10.406476",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employee": {
    "employeeID": "316146c7-26a4-4065-b9bd-346d0557ea96",
    "title": "Mr",
    "firstName": "Mike",
    "lastName": "Fancy",
    "dateOfBirth": "1999-01-01",
    "gender": "M",
    "email": "mike@starkindustries.com",
    "phoneNumber": null,
    "startDate": null,
    "nationalInsuranceNumber": null,
    "isOffPayrollWorker": false,
    "address": {
      "addressLine1": "171 Midsummer",
      "city": "Milton Keyness",
      "county": null,
      "countryName": "UNITED KINGDOM",
      "postCode": "MK9 1EB"
    },
    "payrollCalendarID": null,
    "updatedDateUTC": "2020-03-25T03:12:10Z",
    "createdDateUTC": "2020-03-25T03:12:10Z",
    "niCategory": null,
    "employeeNumber": null
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

<h3 id="creates-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeObject](#schemaemployeeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves specific employees by using a unique employee ID

<a id="opIdgetEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}`

<h3 id="retrieves-specific-employees-by-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "9414291b-a8c6-08fa-b165-9b30b1e6aab5",
  "providerName": "!YLT5Y",
  "dateTimeUTC": "2018-04-09T05:15:18.1011141",
  "httpStatusCode": "OK",
  "pagination": null,
  "employee": {
    "employeeID": "d17e008e-3381-45c0-b50c-2fab7757e503",
    "title": "Mr.",
    "firstName": "Edgar",
    "lastName": "Allan Po",
    "dateOfBirth": "1985-03-24",
    "gender": "M",
    "email": "tester1@gmail.com",
    "phoneNumber": "0400123456",
    "nationalInsuranceNumber": "AB123456C",
    "isOffPayrollWorker": false,
    "address": {
      "addressLine1": "171 Midsummer",
      "city": "Milton Keyness",
      "county": null,
      "countryName": "UNITED KINGDOM",
      "postCode": "MK9 1EB"
    },
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "updatedDateUTC": "2017-05-12T10:00:24Z",
    "createdDateUTC": "2017-05-12T10:00:24Z",
    "niCategories": [
      {
        "startDate": "2020-05-01",
        "niCategory": "I",
        "workplacePostcode": "SW1A 1AA"
      },
      {
        "startDate": "2020-05-02",
        "niCategory": "F",
        "niCategoryID": 1,
        "dateFirstEmployedAsCivilian": "2020-05-01",
        "workplacePostcode": "SW1A 1AA"
      }
    ],
    "employeeNumber": "2",
    "contracts": [
      {
        "publicKey": "a3d71548-2800-4fb9-be6c-d496a617428c",
        "isFixedTerm": false,
        "employmentStatus": "Employee",
        "contractType": "PartTime",
        "startDate": "2020-05-01T00:00:00",
        "fixedTermEndDate": null
      }
    ]
  }
}
```

<h3 id="retrieves-specific-employees-by-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeObject](#schemaemployeeobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates a specific employee's detail

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
    "title": "Mr.",
    "firstName": "TestDataUK",
    "lastName": "Tester",
    "dateOfBirth": "1992-11-22T00:00:00Z",
    "gender": "M",
    "email": "tester@gmail.com",
    "phoneNumber": "0400123456",
    "isOffPayrollWorker": false,
    "address": {
      "addressLine1": "171 Midsummer",
      "city": "Milton Keyness",
      "postCode": "MK9 1EB"
    }
  }'
```

`PUT /Employees/{EmployeeID}`

> Body parameter

```json
{
  "title": "Mr.",
  "firstName": "TestDataUK",
  "lastName": "Tester",
  "dateOfBirth": "1992-11-22T00:00:00Z",
  "gender": "M",
  "email": "tester@gmail.com",
  "phoneNumber": "0400123456",
  "isOffPayrollWorker": false,
  "address": {
    "addressLine1": "171 Midsummer",
    "city": "Milton Keyness",
    "postCode": "MK9 1EB"
  }
}
```

<h3 id="updates-a-specific-employees-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employee](#schemaemployee)|true|none|
|» employeeID|body|string(uuid)|false|Xero unique identifier for the employee|
|» title|body|string|true|Title of the employee|
|» firstName|body|string|true|First name of employee|
|» lastName|body|string|true|Last name of employee|
|» dateOfBirth|body|string(date)|true|Date of birth of the employee (YYYY-MM-DD)|
|» address|body|[Address](#schemaaddress)|true|none|
|» email|body|string|false|The email address for the employee|
|» gender|body|string|true|The employee’s gender|
|» phoneNumber|body|string|false|Employee phone number|
|» startDate|body|string(date)|false|Employment start date of the employee at the time it was requested|
|» endDate|body|string(date)|false|Employment end date of the employee at the time it was requested|
|» payrollCalendarID|body|string(uuid)|false|Xero unique identifier for the payroll calendar of the employee|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the employee|
|» createdDateUTC|body|string(date-time)|false|UTC timestamp when the employee was created in Xero|
|» niCategory|body|[NICategoryLetter](#schemanicategoryletter)|false|**Deprecated.** The employee's NI Category letter.|
|» niCategories|body|[[NICategory](#schemanicategory)]|false|The employee's NI categories|
|» nationalInsuranceNumber|body|string|false|National insurance number of the employee|
|» isOffPayrollWorker|body|boolean|false|Whether the employee is an off payroll worker|
|» contracts|body|[[Contracts](#schemacontracts)]|false|The employee's contracts|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|
|» niCategory|A|
|» niCategory|B|
|» niCategory|C|
|» niCategory|F|
|» niCategory|H|
|» niCategory|I|
|» niCategory|J|
|» niCategory|L|
|» niCategory|M|
|» niCategory|S|
|» niCategory|V|
|» niCategory|X|
|» niCategory|Z|
|» niCategory|D|
|» niCategory|E|
|» niCategory|K|
|» niCategory|N|

> Example responses

> 200 Response

```json
{
  "id": "9414291b-a8c6-08fa-b165-9b30b1e6aab5",
  "providerName": "!YLT5Y",
  "dateTimeUTC": "2018-04-09T05:10:51.3504472",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employee": {
    "employeeID": "07f0f9fc-cc95-46ac-9a8a-aa03779f2bde",
    "title": "Mr",
    "firstName": "Mike",
    "lastName": "Johnllsbkrhwopson",
    "dateOfBirth": "1999-01-01",
    "gender": "M",
    "email": "84044@starkindustries.com",
    "phoneNumber": "0400123456",
    "startDate": "2020-02-03",
    "nationalInsuranceNumber": null,
    "isOffPayrollWorker": false,
    "address": {
      "addressLine1": "101 Green St",
      "city": "San Francisco",
      "county": null,
      "countryName": null,
      "postCode": "6TGR4F"
    },
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "updatedDateUTC": "2020-03-25T17:03:50Z",
    "createdDateUTC": "2020-02-10T10:00:24Z"
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

<h3 id="updates-a-specific-employees-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeObject](#schemaemployeeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Creates employment detail for a specific employee using a unique employee ID

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
    "payrollCalendarID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
    "startDate": "2024-04-01",
    "niCategories": [
      {
        "niCategory": "I",
        "startDate": "2020-05-01",
        "workplacePostcode": "SW1A 1AA"
      }
    ],
    "employeeNumber": "123ABC"
  }'
```

`POST /Employees/{EmployeeID}/Employment`

> Body parameter

```json
{
  "payrollCalendarID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
  "startDate": "2024-04-01",
  "niCategories": [
    {
      "niCategory": "I",
      "startDate": "2020-05-01",
      "workplacePostcode": "SW1A 1AA"
    }
  ],
  "employeeNumber": "123ABC"
}
```

<h3 id="creates-employment-detail-for-a-specific-employee-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Employment](#schemaemployment)|true|none|
|» payrollCalendarID|body|string(uuid)|true|Xero unique identifier for the payroll calendar of the employee|
|» startDate|body|string(date)|true|Start date of the employment (YYYY-MM-DD)|
|» employeeNumber|body|string|true|The employment number of the employee|
|» niCategory|body|[NICategoryLetter](#schemanicategoryletter)|false|**Deprecated.** The employee's NI Category letter.|
|» niCategories|body|[[NICategory](#schemanicategory)]|true|The employee's NI categories|
|» contracts|body|[[Contracts](#schemacontracts)]|false|The employee's contracts|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» niCategory|A|
|» niCategory|B|
|» niCategory|C|
|» niCategory|F|
|» niCategory|H|
|» niCategory|I|
|» niCategory|J|
|» niCategory|L|
|» niCategory|M|
|» niCategory|S|
|» niCategory|V|
|» niCategory|X|
|» niCategory|Z|
|» niCategory|D|
|» niCategory|E|
|» niCategory|K|
|» niCategory|N|

> Example responses

> 200 Response

```json
{
  "id": "0160a355-1e6d-4fdc-9532-c0857feaa515",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-26T18:09:11.6235442",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employment": {
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "startDate": "2020-04-01T00:00:00",
    "niCategories": [
      {
        "niCategory": "I",
        "startDate": "2020-05-01",
        "niCategoryID": 594,
        "dateFirstEmployedAsCivilian": "2020-05-01",
        "workplacePostcode": "SW1A 1AA"
      }
    ],
    "employeeNumber": "123ABC",
    "contracts": [
      {
        "publicKey": "ddd71548-2800-4fb9-be6c-d496a617428c",
        "isFixedTerm": false,
        "employmentStatus": "Employee",
        "contractType": "FullTime",
        "startDate": "2020-04-01T00:00:00",
        "fixedTermEndDate": null
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

<h3 id="creates-employment-detail-for-a-specific-employee-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmploymentObject](#schemaemploymentobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves tax records for a specific employee using a unique employee ID

<a id="opIdgetEmployeeTax"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Tax \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Tax`

<h3 id="retrieves-tax-records-for-a-specific-employee-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "a8577248-393a-4e7a-8a03-b43b90800b69",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T00:14:41.2462046",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "employeeTax": {
    "starterType": "New Employee with P45",
    "starterDeclaration": "B.) This is currently their only job",
    "taxCode": "1185L",
    "w1M1": false,
    "previousTaxablePay": 2000,
    "previousTaxPaid": 200,
    "studentLoanDeduction": null,
    "hasPostGraduateLoans": false,
    "isDirector": false,
    "directorshipStartDate": null,
    "nicCalculationMethod": null
  }
}
```

<h3 id="retrieves-tax-records-for-a-specific-employee-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeTaxObject](#schemaemployeetaxobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves a specific employee's openingbalances using a unique employee ID

<a id="opIdgetEmployeeOpeningBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/ukopeningbalances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/ukopeningbalances`

<h3 id="retrieves-a-specific-employees-openingbalances-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "ab1c33de-1927-4210-bf4f-2a55965cb4a9",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T01:13:00.6591505",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "openingBalances": {
    "statutoryAdoptionPay": 10,
    "statutoryMaternityPay": 10,
    "statutoryPaternityPay": 10,
    "statutorySharedParentalPay": 10,
    "statutorySickPay": 10,
    "priorEmployeeNumber": "10.0"
  }
}
```

<h3 id="retrieves-a-specific-employees-openingbalances-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeOpeningBalancesObject](#schemaemployeeopeningbalancesobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates a specific employee's opening balances

<a id="opIdupdateEmployeeOpeningBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/ukopeningbalances \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "statutoryAdoptionPay": 20,
    "statutoryMaternityPay": 20,
    "statutoryPaternityPay": 20,
    "statutorySharedParentalPay": 20,
    "statutorySickPay": 20,
    "priorEmployeeNumber": 20
  }'
```

`PUT /Employees/{EmployeeID}/ukopeningbalances`

> Body parameter

```json
{
  "statutoryAdoptionPay": 20,
  "statutoryMaternityPay": 20,
  "statutoryPaternityPay": 20,
  "statutorySharedParentalPay": 20,
  "statutorySickPay": 20,
  "priorEmployeeNumber": 20
}
```

<h3 id="updates-a-specific-employees-opening-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeOpeningBalances](#schemaemployeeopeningbalances)|true|none|
|» statutoryAdoptionPay|body|number(double)|false|The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date|
|» statutoryMaternityPay|body|number(double)|false|The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date|
|» statutoryPaternityPay|body|number(double)|false|The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date|
|» statutorySharedParentalPay|body|number(double)|false|The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date|
|» statutorySickPay|body|number(double)|false|The total accumulated statutory sick pay amount received by the employee for current fiscal year to date|
|» priorEmployeeNumber|body|number(double)|false|The unique employee number issued by the employee's former employer|

> Example responses

> 200 Response

```json
{
  "id": "21953776-783c-426c-bf15-cbde997839c4",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T15:45:09.7078637",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "openingBalances": null
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

<h3 id="updates-a-specific-employees-opening-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeOpeningBalancesObject](#schemaemployeeopeningbalancesobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Creates an opening balance for a specific employee

<a id="opIdcreateEmployeeOpeningBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/ukopeningbalances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "statutoryAdoptionPay": 10,
    "statutoryMaternityPay": 10,
    "statutoryPaternityPay": 10,
    "statutorySharedParentalPay": 10,
    "statutorySickPay": 10,
    "priorEmployeeNumber": 10
  }'
```

`POST /Employees/{EmployeeID}/ukopeningbalances`

> Body parameter

```json
{
  "statutoryAdoptionPay": 10,
  "statutoryMaternityPay": 10,
  "statutoryPaternityPay": 10,
  "statutorySharedParentalPay": 10,
  "statutorySickPay": 10,
  "priorEmployeeNumber": 10
}
```

<h3 id="creates-an-opening-balance-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeOpeningBalances](#schemaemployeeopeningbalances)|true|none|
|» statutoryAdoptionPay|body|number(double)|false|The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date|
|» statutoryMaternityPay|body|number(double)|false|The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date|
|» statutoryPaternityPay|body|number(double)|false|The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date|
|» statutorySharedParentalPay|body|number(double)|false|The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date|
|» statutorySickPay|body|number(double)|false|The total accumulated statutory sick pay amount received by the employee for current fiscal year to date|
|» priorEmployeeNumber|body|number(double)|false|The unique employee number issued by the employee's former employer|

> Example responses

> 200 Response

```json
{
  "id": "0d30ef37-2fb4-4925-b563-faaee361c9cd",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T01:06:14.47566",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "openingBalances": null
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

<h3 id="creates-an-opening-balance-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeOpeningBalancesObject](#schemaemployeeopeningbalancesobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves a specific employee's leave records using a unique employee ID

<a id="opIdgetEmployeeLeaves"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Leave`

<h3 id="retrieves-a-specific-employees-leave-records-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e4d42712-4876-4b32-987d-1f62538089de",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T15:58:16.0929399",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": [
    {
      "leaveID": "384bf62a-5884-484d-b675-a3ad9c662f8e",
      "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
      "description": "Vacation to Majorca",
      "startDate": "2020-02-17T00:00:00",
      "endDate": "2020-02-21T00:00:00",
      "periods": [
        {
          "periodStartDate": "2020-02-17T00:00:00",
          "periodEndDate": "2020-02-23T00:00:00",
          "numberOfUnits": 40,
          "periodStatus": "Approved"
        }
      ],
      "updatedDateUTC": "2020-02-10T10:15:53"
    }
  ]
}
```

<h3 id="retrieves-a-specific-employees-leave-records-using-a-unique-employee-id-responses">Responses</h3>

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
    "leaveTypeID": "1d2778ee-86ea-45c0-bbf8-1045485f6b3f",
    "description": "Creating a Description",
    "startDate": "2020-03-24",
    "endDate": "2020-03-26"
  }'
```

`POST /Employees/{EmployeeID}/Leave`

> Body parameter

```json
{
  "leaveTypeID": "1d2778ee-86ea-45c0-bbf8-1045485f6b3f",
  "description": "Creating a Description",
  "startDate": "2020-03-24",
  "endDate": "2020-03-26"
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
  "id": "ef91410a-2be1-42cc-86db-e625344a82e9",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-31T04:32:57.0247198",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": {
    "leaveID": "bdfedc6b-363b-4801-8ba6-9a074d400b31",
    "leaveTypeID": "1d2778ee-86ea-45c0-bbf8-1045485f6b3f",
    "description": "Creating a Description",
    "startDate": "2020-03-24T00:00:00",
    "endDate": "2020-03-26T00:00:00",
    "periods": [
      {
        "periodStartDate": "2020-03-23T00:00:00",
        "periodEndDate": "2020-03-29T00:00:00",
        "numberOfUnits": 24,
        "periodStatus": "Approved"
      }
    ],
    "updatedDateUTC": "2020-03-31T04:32:56.9537857"
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

## Retrieves a specific employee's leave record using a unique employee ID

<a id="opIdgetEmployeeLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Leave/c4be24e5-e840-4c92-9eaa-2d86cd596314 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/Leave/{LeaveID}`

<h3 id="retrieves-a-specific-employees-leave-record-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|LeaveID|path|string(uuid)|true|Leave id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "6ae25805-fef3-4c9b-9e69-9ccc71a6a8da",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T19:58:03.8455417",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": {
    "leaveID": "384bf62a-5884-484d-b675-a3ad9c662f8e",
    "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
    "description": "Vacation to Majorca",
    "startDate": "2020-02-17T00:00:00",
    "endDate": "2020-02-21T00:00:00",
    "periods": [
      {
        "periodStartDate": "2020-02-17T00:00:00",
        "periodEndDate": "2020-02-23T00:00:00",
        "numberOfUnits": 40,
        "periodStatus": "Approved"
      }
    ],
    "updatedDateUTC": "2020-02-10T10:15:53"
  }
}
```

<h3 id="retrieves-a-specific-employees-leave-record-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveObject](#schemaemployeeleaveobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates a specific employee's leave records

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
    "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
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
  "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
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

<h3 id="updates-a-specific-employees-leave-records-parameters">Parameters</h3>

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
  "id": "ea115d89-61a0-4a2d-ad77-e3c63a2b401f",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-17T18:18:30.5118218",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leave": {
    "leaveID": "8340b795-50c1-428e-9fda-90badf081ab4",
    "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
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
    "updatedDateUTC": "2020-04-17T18:18:30.614537"
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

<h3 id="updates-a-specific-employees-leave-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeLeaveObject](#schemaemployeeleaveobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes a specific employee's leave record

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

<h3 id="deletes-a-specific-employees-leave-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|LeaveID|path|string(uuid)|true|Leave id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "b0ab87f6-bbca-4c81-b616-c545592f6988",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-31T04:11:42.422139",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null
}
```

<h3 id="deletes-a-specific-employees-leave-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|[EmployeeLeaveObject](#schemaemployeeleaveobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves a specific employee's leave balances using a unique employee ID

<a id="opIdgetEmployeeLeaveBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveBalances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeaveBalances`

<h3 id="retrieves-a-specific-employees-leave-balances-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "a9b96d49-fc15-4e25-8b62-818462ea6dbd",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-31T04:45:06.125346",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "leaveBalances": [
    {
      "name": "Holiday",
      "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
      "balance": 32,
      "typeOfUnits": "Hours"
    },
    {
      "name": "Parental Leave",
      "leaveTypeID": "1d2778ee-86ea-45c0-bbf8-1045485f6b3f",
      "balance": -80,
      "typeOfUnits": "Hours"
    }
  ]
}
```

<h3 id="retrieves-a-specific-employees-leave-balances-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveBalances](#schemaemployeeleavebalances)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves a specific employee's leave balances using a unique employee ID

<a id="opIdgetEmployeeStatutoryLeaveBalances"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/StatutoryLeaveBalance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/StatutoryLeaveBalance`

<h3 id="retrieves-a-specific-employees-leave-balances-using-a-unique-employee-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|LeaveType|query|string|false|Filter by the type of statutory leave|
|AsOfDate|query|string(date)|false|The date from which to calculate balance remaining. If not specified, current date UTC is used.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "ee863df3-c394-4102-bb91-2b14de404c1c",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-31T05:03:47.418497",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveBalance": {
    "leaveType": "Sick",
    "balanceRemaining": 1120,
    "units": "Hours"
  }
}
```

<h3 id="retrieves-a-specific-employees-leave-balances-using-a-unique-employee-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeStatutoryLeaveBalanceObject](#schemaemployeestatutoryleavebalanceobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves a specific employee's summary of statutory leaves using a unique employee ID

<a id="opIdgetStatutoryLeaveSummary"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/StatutoryLeaves/Summary/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /StatutoryLeaves/Summary/{EmployeeID}`

<h3 id="retrieves-a-specific-employees-summary-of-statutory-leaves-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|activeOnly|query|boolean|false|Filter response with leaves that are currently active or yet to be taken. If not specified, all leaves (past, current, and future scheduled) are returned|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "1908f4d1-b85d-4d6d-a885-6b6e2922ad03",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-02T19:47:06.0791382",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "statutoryLeaves": [
    {
      "statutoryLeaveID": "17f4c3c7-d65c-4572-9118-03798f26f813",
      "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
      "type": "Sick",
      "endDate": "2020-04-01",
      "startDate": "2020-03-28",
      "isEntitled": false,
      "status": "Pending"
    }
  ]
}
```

<h3 id="retrieves-a-specific-employees-summary-of-statutory-leaves-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeStatutoryLeavesSummaries](#schemaemployeestatutoryleavessummaries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates statutory sick leave records

<a id="opIdcreateEmployeeStatutorySickLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/StatutoryLeaves/Sick \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "leaveTypeID": "aab78802-e9d3-4bbd-bc87-df858054988f",
    "startDate": "2020-04-21",
    "endDate": "2020-04-24",
    "workPattern": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "isPregnancyRelated": false,
    "sufficientNotice": true
  }'
```

`POST /StatutoryLeaves/Sick`

> Body parameter

```json
{
  "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
  "leaveTypeID": "aab78802-e9d3-4bbd-bc87-df858054988f",
  "startDate": "2020-04-21",
  "endDate": "2020-04-24",
  "workPattern": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ],
  "isPregnancyRelated": false,
  "sufficientNotice": true
}
```

<h3 id="creates-statutory-sick-leave-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeStatutorySickLeave](#schemaemployeestatutorysickleave)|true|none|
|» statutoryLeaveID|body|string(uuid)|false|The unique identifier (guid) of a statutory leave|
|» employeeID|body|string(uuid)|true|The unique identifier (guid) of the employee|
|» leaveTypeID|body|string(uuid)|true|The unique identifier (guid) of the "Statutory Sick Leave (non-pensionable)" pay item|
|» startDate|body|string(date)|true|The date when the leave starts|
|» endDate|body|string(date)|true|The date when the leave ends|
|» type|body|string|false|the type of statutory leave|
|» status|body|string|false|the type of statutory leave|
|» workPattern|body|[string]|true|The days of the work week the employee is scheduled to work at the time the leave is taken|
|» isPregnancyRelated|body|boolean|true|Whether the sick leave was pregnancy related|
|» sufficientNotice|body|boolean|true|Whether the employee provided sufficient notice and documentation as required by the employer supporting the sick leave request|
|» isEntitled|body|boolean|false|Whether the leave was entitled to receive payment|
|» entitlementWeeksRequested|body|number(double)|false|The amount of requested time (in weeks)|
|» entitlementWeeksQualified|body|number(double)|false|The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested|
|» entitlementWeeksRemaining|body|number(double)|false|A calculated amount of time (in weeks) that remains for the statutory sick leave period|
|» overlapsWithOtherLeave|body|boolean|false|Whether another leave (Paternity, Shared Parental specifically) occurs during the requested leave's period. While this is allowed it could affect payment amounts|
|» entitlementFailureReasons|body|[string]|false|If the leave requested was considered "not entitled", the reasons why are listed here.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entitlementFailureReasons|UnableToCalculateAwe|
|» entitlementFailureReasons|AweLowerThanLel|
|» entitlementFailureReasons|NotQualifiedInPreviousPiw|
|» entitlementFailureReasons|ExceededMaximumEntitlementWeeksOfSsp|
|» entitlementFailureReasons|ExceededMaximumDurationOfPiw|
|» entitlementFailureReasons|SufficientNoticeNotGiven|

> Example responses

> 200 Response

```json
{
  "id": "35c840a3-04aa-43f1-9171-f7eaf4fd4454",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T18:59:28.3440854",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "statutorySickLeave": {
    "statutoryLeaveID": "a2b5a1fb-ae21-47b4-876d-0b61fa6b37ab",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "leaveTypeID": "aab78802-e9d3-4bbd-bc87-df858054988f",
    "startDate": "2020-04-21",
    "endDate": "2020-04-24",
    "workPattern": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "isPregnancyRelated": false,
    "sufficientNotice": true,
    "isEntitled": false,
    "entitlementWeeksRequested": 0.8,
    "entitlementWeeksQualified": 27.2,
    "entitlementWeeksRemaining": 26.4,
    "overlapsWithOtherLeave": false,
    "entitlementFailureReasons": [
      "NotQualifiedInPreviousPiw"
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

<h3 id="creates-statutory-sick-leave-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeStatutorySickLeaveObject](#schemaemployeestatutorysickleaveobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a statutory sick leave for an employee

<a id="opIdgetEmployeeStatutorySickLeave"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/StatutoryLeaves/Sick/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /StatutoryLeaves/Sick/{StatutorySickLeaveID}`

<h3 id="retrieves-a-statutory-sick-leave-for-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatutorySickLeaveID|path|string(uuid)|true|Statutory sick leave id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "c484213d-6225-4ede-bc5e-e81ef350af41",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-17T18:31:49.3895522",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "statutorySickLeave": {
    "statutoryLeaveID": "17f4c3c7-d65c-4572-9118-03798f26f813",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "leaveTypeID": "054a2b5e-fe51-4494-9486-3e3130323c69",
    "startDate": "2020-03-28",
    "endDate": "2020-04-01",
    "workPattern": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "isPregnancyRelated": false,
    "sufficientNotice": true,
    "isEntitled": false,
    "entitlementWeeksRequested": 0.6,
    "entitlementWeeksQualified": 28,
    "entitlementWeeksRemaining": 0,
    "overlapsWithOtherLeave": false,
    "entitlementFailureReasons": [
      "AweLowerThanLel"
    ]
  }
}
```

<h3 id="retrieves-a-statutory-sick-leave-for-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeStatutorySickLeaveObject](#schemaemployeestatutorysickleaveobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves a specific employee's leave periods using a unique employee ID

<a id="opIdgetEmployeeLeavePeriods"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/00000000-0000-0000-0000-000000000000/LeavePeriods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeavePeriods`

<h3 id="retrieves-a-specific-employees-leave-periods-using-a-unique-employee-id-parameters">Parameters</h3>

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
  "dateTimeUTC": "2020-04-07T20:33:42.1904008",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "periods": [
    {
      "periodStartDate": "2020-02-24T00:00:00",
      "periodEndDate": "2020-03-01T00:00:00",
      "numberOfUnits": 40,
      "periodStatus": null
    },
    {
      "periodStartDate": "2020-03-02T00:00:00",
      "periodEndDate": "2020-03-08T00:00:00",
      "numberOfUnits": 32,
      "periodStatus": null
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

<h3 id="retrieves-a-specific-employees-leave-periods-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeavePeriods](#schemaleaveperiods)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves a specific employee's leave types using a unique employee ID

<a id="opIdgetEmployeeLeaveTypes"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/LeaveTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/LeaveTypes`

<h3 id="retrieves-a-specific-employees-leave-types-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "d86959c6-94f5-437a-9367-581cb145fc4f",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T16:25:56.2931034",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveTypes": [
    {
      "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
      "scheduleOfAccrual": "OnAnniversaryDate",
      "hoursAccruedAnnually": 200,
      "maximumToAccrue": 0,
      "openingBalance": 72,
      "rateAccruedHourly": 0,
      "scheduleOfAccrualDate": null
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

<h3 id="retrieves-a-specific-employees-leave-types-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveTypes](#schemaemployeeleavetypes)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates employee leave type records

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
    "leaveTypeID": "4918f233-bd31-43f9-9633-bcc6de1178f2",
    "scheduleOfAccrual": "BeginningOfCalendarYear",
    "hoursAccruedAnnually": 10
  }'
```

`POST /Employees/{EmployeeID}/LeaveTypes`

> Body parameter

```json
{
  "leaveTypeID": "4918f233-bd31-43f9-9633-bcc6de1178f2",
  "scheduleOfAccrual": "BeginningOfCalendarYear",
  "hoursAccruedAnnually": 10
}
```

<h3 id="creates-employee-leave-type-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[EmployeeLeaveType](#schemaemployeeleavetype)|true|none|
|» leaveTypeID|body|string(uuid)|true|The Xero identifier for leave type|
|» scheduleOfAccrual|body|string|true|The schedule of accrual|
|» hoursAccruedAnnually|body|number(double)|false|The number of hours accrued for the leave annually. This is 0 when the scheduleOfAccrual chosen is "OnHourWorked"|
|» maximumToAccrue|body|number(double)|false|The maximum number of hours that can be accrued for the leave|
|» openingBalance|body|number(double)|false|The initial number of hours assigned when the leave was added to the employee|
|» rateAccruedHourly|body|number(double)|false|The number of hours added to the leave balance for every hour worked by the employee. This is normally 0, unless the scheduleOfAccrual chosen is "OnHourWorked"|
|» scheduleOfAccrualDate|body|string(date)|false|The date when an employee becomes entitled to their accrual. Only applicable when scheduleOfAccrual is "OnAnniversaryDate"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scheduleOfAccrual|BeginningOfCalendarYear|
|» scheduleOfAccrual|OnAnniversaryDate|
|» scheduleOfAccrual|EachPayPeriod|
|» scheduleOfAccrual|OnHourWorked|

> Example responses

> 200 Response

```json
{
  "id": "3245e4c9-1ec5-4f3e-b659-fdb722733060",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T20:24:25.8151387",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "4918f233-bd31-43f9-9633-bcc6de1178f2",
    "scheduleOfAccrual": "BeginningOfCalendarYear",
    "hoursAccruedAnnually": 10,
    "maximumToAccrue": 0,
    "openingBalance": 0,
    "rateAccruedHourly": 0
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

<h3 id="creates-employee-leave-type-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeeLeaveTypeObject](#schemaemployeeleavetypeobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves a specific employee's payment method using a unique employee ID

<a id="opIdgetEmployeePaymentMethod"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PaymentMethods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/PaymentMethods`

<h3 id="retrieves-a-specific-employees-payment-method-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "33c27fe9-de53-4114-8455-a6392add88b8",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T18:22:18.9003328",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paymentMethod": {
    "paymentMethod": "Electronically",
    "bankAccounts": [
      {
        "accountName": "Oliver Furniss - Santander",
        "accountNumber": "12345678",
        "sortCode": "111111"
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

<h3 id="retrieves-a-specific-employees-payment-method-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaymentMethodObject](#schemapaymentmethodobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates an employee payment method

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
    "paymentMethod": "Electronically",
    "bankAccounts": [
      {
        "accountName": "Sid BofA",
        "accountNumber": "24987654",
        "sortCode": "287654"
      }
    ]
  }'
```

`POST /Employees/{EmployeeID}/PaymentMethods`

> Body parameter

```json
{
  "paymentMethod": "Electronically",
  "bankAccounts": [
    {
      "accountName": "Sid BofA",
      "accountNumber": "24987654",
      "sortCode": "287654"
    }
  ]
}
```

<h3 id="creates-an-employee-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PaymentMethod](#schemapaymentmethod)|true|none|
|» paymentMethod|body|string|true|The payment method code|
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
  "id": "6c5eab91-8f3c-4569-a5ce-ab4eec112d35",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T18:48:16.6038123",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paymentMethod": {
    "paymentMethod": "Electronically",
    "bankAccounts": [
      {
        "accountName": "Sid BofA",
        "accountNumber": "24987654",
        "sortCode": "287654"
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

<h3 id="creates-an-employee-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PaymentMethodObject](#schemapaymentmethodobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves a specific employee pay templates using a unique employee ID

<a id="opIdgetEmployeePayTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/PayTemplates`

<h3 id="retrieves-a-specific-employee-pay-templates-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "3138be2b-96d9-44d0-a01e-80fd527555c8",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-17T15:10:54.4464048",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 0,
    "itemCount": 0
  },
  "problem": null,
  "payTemplate": {
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "earningTemplates": [
      {
        "payTemplateEarningID": "4e2a0753-56b9-423d-8068-624473bd1c00",
        "ratePerUnit": 25,
        "numberOfUnits": 10,
        "fixedAmount": null,
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "name": "Regular Hours"
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

<h3 id="retrieves-a-specific-employee-pay-templates-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeePayTemplateObject](#schemaemployeepaytemplateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates an earnings template records for a specific employee

<a id="opIdcreateEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/earnings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "payTemplateEarningID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }'
```

`POST /Employees/{EmployeeID}/PayTemplates/earnings`

> Body parameter

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

<h3 id="creates-an-earnings-template-records-for-a-specific-employee-parameters">Parameters</h3>

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

<h3 id="creates-an-earnings-template-records-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsTemplateObject](#schemaearningstemplateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Updates a specific employee's earnings template records

<a id="opIdupdateEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "ratePerUnit": 30,
    "numberOfUnits": 4,
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27"
  }'
```

`PUT /Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}`

> Body parameter

```json
{
  "ratePerUnit": 30,
  "numberOfUnits": 4,
  "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27"
}
```

<h3 id="updates-a-specific-employees-earnings-template-records-parameters">Parameters</h3>

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
  "id": "39603f09-e06f-4cd4-8291-e3ad1df8b35b",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-17T15:52:35.0247503",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningTemplate": {
    "payTemplateEarningID": "4e2a0753-56b9-423d-8068-624473bd1c00",
    "ratePerUnit": 30,
    "numberOfUnits": 4,
    "fixedAmount": null,
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "name": "Regular Hours"
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

<h3 id="updates-a-specific-employees-earnings-template-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsTemplateObject](#schemaearningstemplateobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes a specific employee's earnings template record

<a id="opIddeleteEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/PayTemplates/earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}`

<h3 id="deletes-a-specific-employees-earnings-template-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|PayTemplateEarningID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

<h3 id="deletes-a-specific-employees-earnings-template-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Creates multiple earnings template records for a specific employee using a unique employee ID

<a id="opIdcreateMultipleEmployeeEarningsTemplate"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/paytemplateearnings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"ratePerUnit\":20.0, \"numberOfUnits\":8.0, \"earningsRateID\":\"87f5b43a-cf51-4b74-92de-94c819e82d27\" }, { \"ratePerUnit\":20.0, \"numberOfUnits\":8.0, \"earningsRateID\":\"973365f3-66b2-4c33-8ae6-14b75f78f68b\" } ]"'
```

`POST /Employees/{EmployeeID}/paytemplateearnings`

> Body parameter

```json
"[ { \"ratePerUnit\":20.0, \"numberOfUnits\":8.0, \"earningsRateID\":\"87f5b43a-cf51-4b74-92de-94c819e82d27\" }, { \"ratePerUnit\":20.0, \"numberOfUnits\":8.0, \"earningsRateID\":\"973365f3-66b2-4c33-8ae6-14b75f78f68b\" } ]"
```

<h3 id="creates-multiple-earnings-template-records-for-a-specific-employee-using-a-unique-employee-id-parameters">Parameters</h3>

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
  "id": "1c08b529-0827-4e91-a6a1-c479765aa65f",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-17T16:56:35.6264368",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningTemplates": [
    {
      "payTemplateEarningID": "6b32533d-1111-4a92-ac52-7641315a1719",
      "ratePerUnit": 20,
      "numberOfUnits": 8,
      "fixedAmount": null,
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
      "name": "Regular Hours"
    },
    {
      "payTemplateEarningID": "b8b16366-6a60-4b72-97c1-57af555da375",
      "ratePerUnit": 20,
      "numberOfUnits": 8,
      "fixedAmount": null,
      "earningsRateID": "973365f3-66b2-4c33-8ae6-14b75f78f68b",
      "name": "Overtime Hours"
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

<h3 id="creates-multiple-earnings-template-records-for-a-specific-employee-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EmployeePayTemplates](#schemaemployeepaytemplates)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves employee benefits

<a id="opIdgetBenefits"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Benefits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Benefits`

<h3 id="retrieves-employee-benefits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "079865dc-f3df-4783-98a9-67db747ab82c",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T18:45:03.617089",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 1
  },
  "problem": null,
  "benefits": [
    {
      "id": "17ee7e28-9f4c-4675-9590-cc0547c9f7ac",
      "name": "Mind The Gap Pensions",
      "category": "StakeholderPension",
      "liabilityAccountId": "d659ebbf-0760-4e07-a1fb-8de6b9ecdff9",
      "expenseAccountId": "edda7154-dfc8-4486-a82b-e5e955408eaa",
      "standardAmount": null,
      "percentage": 3,
      "calculationType": "PercentageOfGross",
      "currentRecord": true,
      "showBalanceToEmployee": false,
      "subjectToNIC": null,
      "subjectToPension": null,
      "subjectToTax": null,
      "isCalculatingOnQualifyingEarnings": null
    }
  ]
}
```

<h3 id="retrieves-employee-benefits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Benefits](#schemabenefits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new employee benefit

<a id="opIdcreateBenefit"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Benefits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "name": "My Big Bennie",
    "category": "StakeholderPension",
    "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
    "expenseAccountId": "4b03500d-32fd-4616-8d70-e1e56e0519c6",
    "standardAmount": 50,
    "percentage": 25,
    "calculationType": "PercentageOfGross"
  }'
```

`POST /Benefits`

> Body parameter

```json
{
  "name": "My Big Bennie",
  "category": "StakeholderPension",
  "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
  "expenseAccountId": "4b03500d-32fd-4616-8d70-e1e56e0519c6",
  "standardAmount": 50,
  "percentage": 25,
  "calculationType": "PercentageOfGross"
}
```

<h3 id="creates-a-new-employee-benefit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Benefit](#schemabenefit)|true|none|
|» id|body|string(uuid)|false|unique identifier in Xero|
|» name|body|string|true|Name of the employer pension|
|» category|body|string|true|Category type of the employer pension|
|» liabilityAccountId|body|string(uuid)|true|Xero identifier for Liability Account|
|» expenseAccountId|body|string(uuid)|true|Xero identifier for Expense Account|
|» standardAmount|body|number(double)|false|Standard amount of the employer pension|
|» percentage|body|number(double)|true|Percentage of gross of the employer pension|
|» calculationType|body|string|true|Calculation Type of the employer pension (FixedAmount or PercentageOfGross).|
|» currentRecord|body|boolean|false|Identifier of a record is active or not.|
|» subjectToNIC|body|boolean|false|Identifier of subject To NIC|
|» subjectToPension|body|boolean|false|Identifier of subject To pension|
|» subjectToTax|body|boolean|false|Identifier of subject To Tax|
|» isCalculatingOnQualifyingEarnings|body|boolean|false|Identifier of calculating on qualifying earnings|
|» showBalanceToEmployee|body|boolean|false|display the balance to employee|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|StakeholderPension|
|» category|Other|
|» calculationType|FixedAmount|
|» calculationType|PercentageOfGross|

> Example responses

> 200 Response

```json
{
  "id": "95352407-6477-42f1-bd9c-bab28af8b0d9",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T18:59:01.5812362",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "benefit": {
    "id": "d295bf25-fb61-4f91-9b62-a9ae87633746",
    "name": "My Big Bennie",
    "category": "StakeholderPension",
    "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
    "expenseAccountId": "4b03500d-32fd-4616-8d70-e1e56e0519c6",
    "standardAmount": null,
    "percentage": 25,
    "calculationType": "PercentageOfGross",
    "currentRecord": true,
    "showBalanceToEmployee": true,
    "subjectToNIC": null,
    "subjectToPension": null,
    "subjectToTax": null,
    "isCalculatingOnQualifyingEarnings": null
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

<h3 id="creates-a-new-employee-benefit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[BenefitObject](#schemabenefitobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific benefit by using a unique benefit ID

<a id="opIdgetBenefit"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Benefits/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Benefits/{id}`

<h3 id="retrieves-a-specific-benefit-by-using-a-unique-benefit-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier for the benefit|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e7959d7b-370d-47e5-bb15-4b68f136ddae",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T18:45:04.5134277",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "benefit": {
    "id": "17ee7e28-9f4c-4675-9590-cc0547c9f7ac",
    "name": "Mind The Gap Pensions",
    "category": "StakeholderPension",
    "liabilityAccountId": "d659ebbf-0760-4e07-a1fb-8de6b9ecdff9",
    "expenseAccountId": "edda7154-dfc8-4486-a82b-e5e955408eaa",
    "standardAmount": null,
    "percentage": 3,
    "calculationType": "PercentageOfGross",
    "currentRecord": true,
    "showBalanceToEmployee": false,
    "subjectToNIC": null,
    "subjectToPension": null,
    "subjectToTax": null,
    "isCalculatingOnQualifyingEarnings": null
  }
}
```

<h3 id="retrieves-a-specific-benefit-by-using-a-unique-benefit-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[BenefitObject](#schemabenefitobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves deductions

<a id="opIdgetDeductions"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Deductions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Deductions`

<h3 id="retrieves-deductions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "846b81f3-7192-4a78-a05c-ae5d2c402546",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T20:57:39.6123797",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "deductions": [
    {
      "deductionId": "7c736d59-a624-4584-920b-e9910d2887a0",
      "deductionName": "Mind The Gap Pensions (NPA)",
      "deductionCategory": "StakeholderPension",
      "liabilityAccountId": "d659ebbf-0760-4e07-a1fb-8de6b9ecdff9",
      "currentRecord": true,
      "standardAmount": null,
      "reducesSuperLiability": null,
      "reducesTaxLiability": null,
      "calculationType": "PercentageOfGross",
      "percentage": 5,
      "subjectToNIC": null,
      "subjectToTax": null,
      "isReducedByBasicRate": null,
      "applyToPensionCalculations": null,
      "isCalculatingOnQualifyingEarnings": null,
      "isPension": null
    },
    {
      "deductionId": "49f301d4-2746-43a6-ba4a-e7001b5b83fc",
      "deductionName": "Post-Tax Pension",
      "deductionCategory": "StakeholderPensionPostTax",
      "liabilityAccountId": "d659ebbf-0760-4e07-a1fb-8de6b9ecdff9",
      "currentRecord": true,
      "standardAmount": null,
      "reducesSuperLiability": null,
      "reducesTaxLiability": null,
      "calculationType": "PercentageOfGross",
      "percentage": 0,
      "subjectToNIC": null,
      "subjectToTax": null,
      "isReducedByBasicRate": null,
      "applyToPensionCalculations": false,
      "isCalculatingOnQualifyingEarnings": null,
      "isPension": true
    }
  ]
}
```

<h3 id="retrieves-deductions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Deductions](#schemadeductions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a new deduction

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
    "deductionCategory": "SalarySacrifice",
    "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
    "calculationType": "FixedAmount"
  }'
```

`POST /Deductions`

> Body parameter

```json
{
  "deductionName": "My new deduction",
  "deductionCategory": "SalarySacrifice",
  "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
  "calculationType": "FixedAmount"
}
```

<h3 id="creates-a-new-deduction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Deduction](#schemadeduction)|true|none|
|» deductionId|body|string(uuid)|false|The Xero identifier for Deduction|
|» deductionName|body|string|true|Name of the deduction|
|» deductionCategory|body|string|false|Deduction Category type|
|» liabilityAccountId|body|string(uuid)|true|Xero identifier for Liability Account|
|» currentRecord|body|boolean|false|Identifier of a record is active or not.|
|» standardAmount|body|number(double)|false|Standard amount of the deduction|
|» reducesSuperLiability|body|boolean|false|Identifier of reduces super liability|
|» reducesTaxLiability|body|boolean|false|Identifier of reduces tax liability|
|» calculationType|body|string|false|determine the calculation type whether fixed amount or percentage of gross|
|» percentage|body|number(double)|false|Percentage of gross|
|» subjectToNIC|body|boolean|false|Identifier of subject To NIC|
|» subjectToTax|body|boolean|false|Identifier of subject To Tax|
|» isReducedByBasicRate|body|boolean|false|Identifier of reduced by basic rate applicable or not|
|» applyToPensionCalculations|body|boolean|false|Identifier for apply to pension calculations|
|» isCalculatingOnQualifyingEarnings|body|boolean|false|Identifier of calculating on qualifying earnings|
|» isPension|body|boolean|false|Identifier of applicable for pension or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deductionCategory|CapitalContributions|
|» deductionCategory|ChildCareVoucher|
|» deductionCategory|MakingGood|
|» deductionCategory|PostgraduateLoanDeductions|
|» deductionCategory|PrivateUsePayments|
|» deductionCategory|SalarySacrifice|
|» deductionCategory|StakeholderPension|
|» deductionCategory|StakeholderPensionPostTax|
|» deductionCategory|StudentLoanDeductions|
|» deductionCategory|UkOther|
|» calculationType|FixedAmount|
|» calculationType|PercentageOfGross|

> Example responses

> 200 Response

```json
{
  "id": "26cf94f5-6b62-4f76-8e89-44e4d0062566",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T23:03:00.7012103",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "deduction": {
    "deductionId": "b3695b29-750f-4957-98b4-678e4a529043",
    "deductionName": "My new deduction",
    "deductionCategory": "SalarySacrifice",
    "liabilityAccountId": "e0faa299-ca0d-4b0a-9e32-0dfabdf9179a",
    "currentRecord": true,
    "standardAmount": null,
    "reducesSuperLiability": null,
    "reducesTaxLiability": null,
    "calculationType": "FixedAmount",
    "percentage": null,
    "subjectToNIC": null,
    "subjectToTax": null,
    "isReducedByBasicRate": null,
    "applyToPensionCalculations": null,
    "isCalculatingOnQualifyingEarnings": null,
    "isPension": null
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

<h3 id="creates-a-new-deduction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[DeductionObject](#schemadeductionobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a specific deduction by using a unique deduction ID

<a id="opIdgetDeduction"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Deductions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Deductions/{deductionId}`

<h3 id="retrieves-a-specific-deduction-by-using-a-unique-deduction-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deductionId|path|string(uuid)|true|Identifier for the deduction|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "addf44c5-5a3b-4d25-a61c-4e9e85cb27b3",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T22:42:54.5394384",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "deduction": {
    "deductionId": "7c736d59-a624-4584-920b-e9910d2887a0",
    "deductionName": "Mind The Gap Pensions (NPA)",
    "deductionCategory": "StakeholderPension",
    "liabilityAccountId": "d659ebbf-0760-4e07-a1fb-8de6b9ecdff9",
    "currentRecord": true,
    "standardAmount": null,
    "reducesSuperLiability": null,
    "reducesTaxLiability": null,
    "calculationType": "PercentageOfGross",
    "percentage": 5,
    "subjectToNIC": null,
    "subjectToTax": null,
    "isReducedByBasicRate": null,
    "applyToPensionCalculations": null,
    "isCalculatingOnQualifyingEarnings": null,
    "isPension": null
  }
}
```

<h3 id="retrieves-a-specific-deduction-by-using-a-unique-deduction-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[DeductionObject](#schemadeductionobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves earnings orders

<a id="opIdgetEarningsOrders"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/EarningsOrders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /EarningsOrders`

<h3 id="retrieves-earnings-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "5bf85b65-c2de-4632-8e5e-cc0ab3d18ff0",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T23:21:36.0480051",
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
      "id": "d00d0128-500b-4685-8332-8fc8743a395c",
      "name": "AEO (maintenance)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "PriorityOrder",
      "currentRecord": true
    },
    {
      "id": "f7a63612-a68d-431e-96d4-3fd0708e46b5",
      "name": "AEO (fines)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "PriorityOrder",
      "currentRecord": true
    },
    {
      "id": "dabd9a53-25ac-4349-9fb3-8005ea781574",
      "name": "AEO (civil debts)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "NonPriorityOrder",
      "currentRecord": true
    },
    {
      "id": "73ae94bb-182c-4242-8d67-1a281597ca9c",
      "name": "CTAEO",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "PriorityOrder",
      "currentRecord": true
    },
    {
      "id": "649a3c59-3937-43d2-b0e4-5e8942f17ffa",
      "name": "Child Support DEO",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "PriorityOrder",
      "currentRecord": true
    },
    {
      "id": "d4a4441f-452a-4067-97ac-ded4d157c319",
      "name": "Earnings Arrestment (Scotland)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "TableBased",
      "currentRecord": true
    },
    {
      "id": "deec134a-2378-439c-89db-a71fa57fb28a",
      "name": "Conjoined Arrestment Order (Scotland)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "TableBased",
      "currentRecord": true
    },
    {
      "id": "750c7c89-0579-45b4-becc-221a52119bd4",
      "name": "Current Maintenance Arrest (Scotland)",
      "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
      "statutoryDeductionCategory": "NonPriorityOrder",
      "currentRecord": true
    }
  ]
}
```

<h3 id="retrieves-earnings-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsOrders](#schemaearningsorders)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves a specific earnings orders by using a unique earnings orders id

<a id="opIdgetEarningsOrder"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/EarningsOrders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /EarningsOrders/{id}`

<h3 id="retrieves-a-specific-earnings-orders-by-using-a-unique-earnings-orders-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier for the deduction|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e0fd1c57-e9d0-4c3f-9a1a-0355ddf7c060",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-20T23:37:30.3398526",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "statutoryDeduction": {
    "id": "d00d0128-500b-4685-8332-8fc8743a395c",
    "name": "AEO (maintenance)",
    "liabilityAccountId": "921237ae-76ff-4f4c-bf70-5c3c177b149d",
    "statutoryDeductionCategory": "PriorityOrder",
    "currentRecord": true
  }
}
```

<h3 id="retrieves-a-specific-earnings-orders-by-using-a-unique-earnings-orders-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[EarningsOrderObject](#schemaearningsorderobject)|

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
  "id": "fbe7a960-fad3-4293-8de9-0fabfbea615f",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T15:00:05.2418623",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 13
  },
  "problem": null,
  "earningsRates": [
    {
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
      "name": "Regular Hours",
      "earningsType": "RegularEarnings",
      "rateType": "RatePerUnit",
      "typeOfUnits": "hours",
      "currentRecord": true,
      "expenseAccountID": "81da553d-c6c6-411e-95df-cc4ac8f7e1c2",
      "fixedAmount": null,
      "ratePerUnit": null,
      "multipleOfOrdinaryEarningsRate": null
    },
    {
      "earningsRateID": "973365f3-66b2-4c33-8ae6-14b75f78f68b",
      "name": "Overtime Hours",
      "earningsType": "OvertimeEarnings",
      "rateType": "MultipleOfOrdinaryEarningsRate",
      "typeOfUnits": null,
      "currentRecord": true,
      "expenseAccountID": "81da553d-c6c6-411e-95df-cc4ac8f7e1c2",
      "fixedAmount": null,
      "ratePerUnit": null,
      "multipleOfOrdinaryEarningsRate": 1.5
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
    "expenseAccountID": "4b03500d-32fd-4616-8d70-e1e56e0519c6"
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
  "expenseAccountID": "4b03500d-32fd-4616-8d70-e1e56e0519c6"
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
|» earningsType|BackPay|
|» earningsType|Bonus|
|» earningsType|Commission|
|» earningsType|LumpSum|
|» earningsType|OtherEarnings|
|» earningsType|OvertimeEarnings|
|» earningsType|RegularEarnings|
|» earningsType|StatutoryAdoptionPay|
|» earningsType|StatutoryAdoptionPayNonPensionable|
|» earningsType|StatutoryBereavementPay|
|» earningsType|StatutoryMaternityPay|
|» earningsType|StatutoryMaternityPayNonPensionable|
|» earningsType|StatutoryPaternityPay|
|» earningsType|StatutoryPaternityPayNonPensionable|
|» earningsType|StatutoryParentalBereavementPayNonPensionable|
|» earningsType|StatutorySharedParentalPay|
|» earningsType|StatutorySharedParentalPayNonPensionable|
|» earningsType|StatutorySickPay|
|» earningsType|StatutorySickPayNonPensionable|
|» earningsType|TipsNonDirect|
|» earningsType|TipsDirect|
|» earningsType|TerminationPay|
|» earningsType|StatutoryNeonatalCarePay|
|» earningsType|StatutoryNeonatalCarePayNonPensionable|
|» earningsType|StatutoryBereavementPayNorthernIreland|
|» rateType|RatePerUnit|
|» rateType|MultipleOfOrdinaryEarningsRate|
|» rateType|FixedAmount|

> Example responses

> 200 Response

```json
{
  "id": "cc5341dd-c652-47f0-b8a3-67a22617ca7b",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T18:12:04.6341065",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningsRate": {
    "earningsRateID": "fcf811a8-3843-4e87-8431-c62e83158aef",
    "name": "My Earnings Rate",
    "earningsType": "RegularEarnings",
    "rateType": "RatePerUnit",
    "typeOfUnits": "hours",
    "currentRecord": true,
    "expenseAccountID": "4b03500d-32fd-4616-8d70-e1e56e0519c6",
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
  "id": "85375ff5-6ccf-4d8c-a976-0531c94597de",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T16:54:51.8240698",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "earningsRate": {
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "name": "Regular Hours",
    "earningsType": "RegularEarnings",
    "rateType": "RatePerUnit",
    "typeOfUnits": "hours",
    "currentRecord": true,
    "expenseAccountID": "81da553d-c6c6-411e-95df-cc4ac8f7e1c2",
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
  "id": "cb429b37-78d3-4b15-9788-83cbd1fd3f72",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-27T18:32:57.9928041",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 12
  },
  "problem": null,
  "leaveTypes": [
    {
      "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
      "name": "Holiday",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "2020-02-13T15:56:11Z",
      "isStatutoryLeave": false,
      "isActive": true
    },
    {
      "leaveTypeID": "1d2778ee-86ea-45c0-bbf8-1045485f6b3f",
      "name": "Parental Leave",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "2020-03-27T18:19:53Z",
      "isStatutoryLeave": false,
      "isActive": true
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
    "name": "My opebvwbfxf Leave",
    "isPaidLeave": false,
    "showOnPayslip": true
  }'
```

`POST /LeaveTypes`

> Body parameter

```json
{
  "name": "My opebvwbfxf Leave",
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
|» leaveID|body|string(uuid)|false|Xero unique identifier for the leave|
|» leaveTypeID|body|string(uuid)|false|Xero unique identifier for the leave type|
|» name|body|string|true|Name of the leave type|
|» isPaidLeave|body|boolean|true|Indicate that an employee will be paid when taking this type of leave|
|» showOnPayslip|body|boolean|true|Indicate that a balance for this leave type to be shown on the employee’s payslips|
|» updatedDateUTC|body|string(date-time)|false|UTC timestamp of last update to the leave type note|
|» isActive|body|boolean|false|Shows whether the leave type is active or not|
|» isStatutoryLeave|body|boolean|false|Shows whether the leave type is a statutory leave type or not|

> Example responses

> 200 Response

```json
{
  "id": "89aeb982-d6e8-45dd-a853-fcaee4fc99cc",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-21T02:59:35.5461123",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "4c027a23-6e7b-4547-808b-c34b2b140fef",
    "name": "My opebvwbfxf Leave",
    "isPaidLeave": false,
    "showOnPayslip": true,
    "updatedDateUTC": "2020-04-21T02:59:35.3831249Z",
    "isStatutoryLeave": null,
    "isActive": true
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
  "id": "684454f6-d808-46e0-b83d-5593a560b9d0",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-21T02:59:34.9401664",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "leaveType": {
    "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
    "name": "Holiday",
    "isPaidLeave": true,
    "showOnPayslip": true,
    "updatedDateUTC": "2020-04-20T20:14:31",
    "isStatutoryLeave": false,
    "isActive": true
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
  "id": "eea19a1d-a714-41c0-8730-94b6d4fbac84",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T00:17:27.1947108",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 5
  },
  "problem": null,
  "reimbursements": [
    {
      "reimbursementID": "fef6115f-1606-4a74-be54-312d46b0eb0e",
      "name": "Travel Allowance",
      "accountID": "c7b73345-7f25-428a-bb97-7b20a1470a53",
      "currentRecord": true
    },
    {
      "reimbursementID": "8e8d7849-26e1-41d1-a41f-7e1d0bfa147b",
      "name": "Mileage",
      "accountID": "0be1631e-cc7e-4c27-951f-308c3307c0fe",
      "currentRecord": true
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
    "accountID": "9ee28149-32a9-4661-8eab-a28738696983"
  }'
```

`POST /Reimbursements`

> Body parameter

```json
{
  "name": "My new Reimburse",
  "accountID": "9ee28149-32a9-4661-8eab-a28738696983"
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

> Example responses

> 200 Response

```json
{
  "id": "310ecff7-8577-4e05-98a3-3ce7ecb2868a",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-15T00:43:39.0988382",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "reimbursement": {
    "reimbursementID": "2b1b587a-39f6-43f8-9dd9-a858314333c8",
    "name": "My new Reimburse",
    "accountID": "9ee28149-32a9-4661-8eab-a28738696983",
    "currentRecord": true
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

## Retrieves a specific reimbursement by using a unique reimbursement id

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
  "id": "9c727a87-a96b-4998-b7e7-6b79347915cc",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-21T03:05:16.5248369",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "reimbursement": {
    "reimbursementID": "fef6115f-1606-4a74-be54-312d46b0eb0e",
    "name": "Travel Allowance",
    "accountID": "c7b73345-7f25-428a-bb97-7b20a1470a53",
    "currentRecord": true
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
  "id": "d81c2087-3ecb-4d91-b775-73d85f593370",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T21:54:01.8865016",
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
      "timesheetID": "0c94d453-3d8c-4167-8c25-b4025121d18b",
      "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
      "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
      "startDate": "2020-04-13T00:00:00",
      "endDate": "2020-04-19T00:00:00",
      "status": "Approved",
      "totalHours": 16,
      "updatedDateUTC": "2020-04-13T21:53:39"
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
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "startDate": "2020-04-13",
    "endDate": "2020-04-19",
    "timesheetLines": [
      {
        "date": "2020-04-13",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "numberOfUnits": 8
      },
      {
        "date": "2020-04-15",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "numberOfUnits": 6
      }
    ]
  }'
```

`POST /Timesheets`

> Body parameter

```json
{
  "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
  "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
  "startDate": "2020-04-13",
  "endDate": "2020-04-19",
  "timesheetLines": [
    {
      "date": "2020-04-13",
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
      "numberOfUnits": 8
    },
    {
      "date": "2020-04-15",
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
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

> Example responses

> 200 Response

```json
{
  "id": "ef0aa7e2-6f7f-43f6-9186-af670dce7c69",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-21T03:07:37.0148822",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "88d2038a-06f7-4b8a-bdab-809804c0aa1d",
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "startDate": "2020-04-13T00:00:00",
    "endDate": "2020-04-19T00:00:00",
    "status": "Draft",
    "totalHours": 14,
    "updatedDateUTC": "2020-04-21T03:07:36.8132834",
    "timesheetLines": [
      {
        "timesheetLineID": "03060d0c-b14a-4339-aced-51cb2e5313b7",
        "date": "2020-04-15T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 6
      },
      {
        "timesheetLineID": "53ebdb54-b604-4d15-8c42-5162a7fe88e6",
        "date": "2020-04-13T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
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

## Retrieve a specific timesheet by using a unique timesheet ID

<a id="opIdgetTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Timesheets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Timesheets/{TimesheetID}`

<h3 id="retrieve-a-specific-timesheet-by-using-a-unique-timesheet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "504259ac-df26-482e-bd0a-d792d96453bb",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-14T16:41:00.5013526",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "25c59963-5df2-43c3-88f6-25a3caa63084",
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "startDate": "2020-04-13T00:00:00",
    "endDate": "2020-04-19T00:00:00",
    "status": "Draft",
    "totalHours": 14,
    "updatedDateUTC": "2020-04-14T16:31:35",
    "timesheetLines": [
      {
        "timesheetLineID": "6cc1e5c3-f080-4dbc-a82b-bea256ef939f",
        "date": "2020-04-13T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 8
      },
      {
        "timesheetLineID": "3d900df1-9859-492b-9b00-155860158c0d",
        "date": "2020-04-15T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 6
      }
    ]
  }
}
```

<h3 id="retrieve-a-specific-timesheet-by-using-a-unique-timesheet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets payroll.timesheets.read )
</aside>

## Deletes a specific timesheet

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

<h3 id="deletes-a-specific-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date": "1970-01-01",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfUnits": 0
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

<h3 id="deletes-a-specific-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLine](#schematimesheetline)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Creates a new timesheet line for a specific timesheet using a unique timesheet ID

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
    "date": "2020-04-14",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnits": 1
  }'
```

`POST /Timesheets/{TimesheetID}/Lines`

> Body parameter

```json
{
  "date": "2020-04-14",
  "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
  "numberOfUnits": 1
}
```

<h3 id="creates-a-new-timesheet-line-for-a-specific-timesheet-using-a-unique-timesheet-id-parameters">Parameters</h3>

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
  "id": "cf701261-529e-47cd-8156-5ec9ab3394ff",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-14T17:19:22.8599292",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheetLine": {
    "timesheetLineID": "56fce87e-7f0d-4c19-8f74-7f5656651c81",
    "date": "2020-04-14T00:00:00",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
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

<h3 id="creates-a-new-timesheet-line-for-a-specific-timesheet-using-a-unique-timesheet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLineObject](#schematimesheetlineobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Approves a specific timesheet

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

<h3 id="approves-a-specific-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "94c27148-2749-4d85-bc1a-986e6de230ae",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-06-01T20:32:19.7577043",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "62bd8b5f-8e90-4868-a0e6-62f994f7d659",
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "startDate": "2020-04-13T00:00:00",
    "endDate": "2020-04-19T00:00:00",
    "status": "Approved",
    "totalHours": 9,
    "updatedDateUTC": "2020-06-01T20:32:19.9534744",
    "timesheetLines": [
      {
        "timesheetLineID": "ce6db38f-efe9-49dc-ae42-7e6bad3cb167",
        "date": "2020-04-14T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 2
      },
      {
        "timesheetLineID": "bc8004d2-5965-4f4e-8e46-0519040b4a05",
        "date": "2020-04-15T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 6
      },
      {
        "timesheetLineID": "fd00cd5a-7d0c-4cb7-85ff-66bd3ed2439a",
        "date": "2020-04-14T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 1
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

<h3 id="approves-a-specific-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Reverts a specific timesheet to draft

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

<h3 id="reverts-a-specific-timesheet-to-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "a774530a-a50c-4480-a094-358cf80a7d98",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-14T17:49:23.1119111",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheet": {
    "timesheetID": "0fd483c0-3302-48c6-bbd5-7247c9a02460",
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "startDate": "2020-04-13T00:00:00",
    "endDate": "2020-04-19T00:00:00",
    "status": "Draft",
    "totalHours": 15,
    "updatedDateUTC": "2020-04-14T17:49:23.2188538",
    "timesheetLines": [
      {
        "timesheetLineID": "17a08549-1ed1-416b-83e2-c65040119a02",
        "date": "2020-04-13T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 8
      },
      {
        "timesheetLineID": "0e912b7d-dc3f-4b95-a466-3f0f5c8581cb",
        "date": "2020-04-15T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 6
      },
      {
        "timesheetLineID": "d0faac99-f2d4-42b9-ab00-9c2bc6e8fe3a",
        "date": "2020-04-14T00:00:00",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "trackingItemID": null,
        "numberOfUnits": 1
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

<h3 id="reverts-a-specific-timesheet-to-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Updates a specific timesheet line for a specific timesheet

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
    "date": "2020-04-14",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnits": 2
  }'
```

`PUT /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}`

> Body parameter

```json
{
  "date": "2020-04-14",
  "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
  "numberOfUnits": 2
}
```

<h3 id="updates-a-specific-timesheet-line-for-a-specific-timesheet-parameters">Parameters</h3>

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
  "id": "582b87a6-14f3-409b-be89-f9b9c49db983",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-14T18:07:30.718153",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "timesheetLine": {
    "timesheetLineID": "c88edcad-af32-4536-a682-9a4772c21c8d",
    "date": "2020-04-14T00:00:00",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
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

<h3 id="updates-a-specific-timesheet-line-for-a-specific-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetLineObject](#schematimesheetlineobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Deletes a specific timesheet line

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

<h3 id="deletes-a-specific-timesheet-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Identifier for the timesheet|
|TimesheetLineID|path|string(uuid)|true|Identifier for the timesheet line|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "timesheetLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date": "1970-01-01",
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "trackingItemID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfUnits": 0
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

<h3 id="deletes-a-specific-timesheet-line-responses">Responses</h3>

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
  "id": "f66c8da6-06c1-47c7-a415-366cb3991858",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-03-25T18:39:43.9215965",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 3
  },
  "problem": null,
  "payRunCalendars": [
    {
      "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
      "name": "Weekly ",
      "calendarType": "Weekly",
      "periodStartDate": "2020-02-10T00:00:00",
      "periodEndDate": "2020-02-16T00:00:00",
      "paymentDate": "2020-02-17T00:00:00",
      "updatedDateUTC": "2020-02-13T16:53:54"
    },
    {
      "payrollCalendarID": "d45bc68f-59d6-4000-929d-1058dcfa79e1",
      "name": "Fortnightly ",
      "calendarType": "Fortnightly",
      "periodStartDate": "2020-02-03T00:00:00",
      "periodEndDate": "2020-02-16T00:00:00",
      "paymentDate": "2020-02-10T00:00:00",
      "updatedDateUTC": "2020-02-10T10:02:09"
    },
    {
      "payrollCalendarID": "5e813d9e-949c-461f-8a89-e9ee8955a254",
      "name": "Monthly ",
      "calendarType": "Monthly",
      "periodStartDate": "2020-03-03T00:00:00",
      "periodEndDate": "2020-04-02T00:00:00",
      "paymentDate": "2020-03-31T00:00:00",
      "updatedDateUTC": "2020-02-13T16:54:07"
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
|» calendarType|body|string|true|Type of the calendar|
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

> Example responses

> 200 Response

```json
{
  "id": "ef25e7f2-b5d6-454c-8147-396c373565dd",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T17:01:06.2708245",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRunCalendar": {
    "payrollCalendarID": "5f29322d-9123-49be-bef0-9b14c35653d1",
    "name": "My Weekly Cal",
    "calendarType": "Weekly",
    "periodStartDate": "2020-05-01T00:00:00",
    "periodEndDate": "2020-05-07T00:00:00",
    "paymentDate": "2020-05-15T00:00:00",
    "updatedDateUTC": "2020-04-13T17:01:06.4944331"
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

## Retrieves a specific payrun calendar by using a unique payrun calendar ID

<a id="opIdgetPayRunCalendar"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/PayRunCalendars/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRunCalendars/{PayRunCalendarID}`

<h3 id="retrieves-a-specific-payrun-calendar-by-using-a-unique-payrun-calendar-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayRunCalendarID|path|string(uuid)|true|Identifier for the payrun calendars|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "dae942a3-b4fb-4b24-839b-14e1073f8cca",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T16:48:49.6902155",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRunCalendar": {
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "name": "Weekly ",
    "calendarType": "Weekly",
    "periodStartDate": "2020-02-10T00:00:00",
    "periodEndDate": "2020-02-16T00:00:00",
    "paymentDate": "2020-02-17T00:00:00",
    "updatedDateUTC": "2020-02-13T16:53:54"
  }
}
```

<h3 id="retrieves-a-specific-payrun-calendar-by-using-a-unique-payrun-calendar-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRunCalendarObject](#schemapayruncalendarobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves a specific employee's salary and wages by using a unique employee ID

<a id="opIdgetEmployeeSalaryAndWages"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/SalaryAndWages`

<h3 id="retrieves-a-specific-employees-salary-and-wages-by-using-a-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "56273e64-dff0-4542-96f3-54ad3ac27431",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T22:47:38.8995493",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 1
  },
  "problem": null,
  "salaryAndWages": [
    {
      "salaryAndWagesID": "49c33012-c1ac-456c-91fd-cb7e6db6f5fe",
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
      "numberOfUnitsPerWeek": 40,
      "ratePerUnit": null,
      "numberOfUnitsPerDay": null,
      "daysPerWeek": null,
      "effectiveFrom": "2020-04-01T00:00:00",
      "annualSalary": 25000,
      "status": "Active",
      "paymentType": "Salary"
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

<h3 id="retrieves-a-specific-employees-salary-and-wages-by-using-a-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWages](#schemasalaryandwages)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates a salary and wage record for a specific employee

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
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnitsPerWeek": 2,
    "ratePerUnit": 10,
    "numberOfUnitsPerDay": 2,
    "effectiveFrom": "2020-05-01",
    "annualSalary": 100,
    "status": "ACTIVE",
    "paymentType": "Salary"
  }'
```

`POST /Employees/{EmployeeID}/SalaryAndWages`

> Body parameter

```json
{
  "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
  "numberOfUnitsPerWeek": 2,
  "ratePerUnit": 10,
  "numberOfUnitsPerDay": 2,
  "effectiveFrom": "2020-05-01",
  "annualSalary": 100,
  "status": "ACTIVE",
  "paymentType": "Salary"
}
```

<h3 id="creates-a-salary-and-wage-record-for-a-specific-employee-parameters">Parameters</h3>

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
|» numberOfUnitsPerDay|body|number(double)|false|The Number of Units per day for the corresponding salary and wages|
|» effectiveFrom|body|string(date)|true|The effective date of the corresponding salary and wages|
|» annualSalary|body|number(double)|true|The annual salary|
|» status|body|string|true|The current status of the corresponding salary and wages|
|» paymentType|body|string|true|The type of the payment of the corresponding salary and wages|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Pending|
|» status|History|
|» paymentType|Salary|
|» paymentType|Hourly|

> Example responses

> 200 Response

```json
{
  "id": "a15f15ec-a8ed-420b-82f6-1546a9bf6d57",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T23:46:35.2234544",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": {
    "salaryAndWagesID": "1477fc72-b38d-4c0e-a46e-8657f0f32340",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnitsPerWeek": 2,
    "ratePerUnit": null,
    "numberOfUnitsPerDay": 2,
    "daysPerWeek": null,
    "effectiveFrom": "2020-05-01T00:00:00",
    "annualSalary": 100,
    "status": "Pending",
    "paymentType": "Salary"
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

<h3 id="creates-a-salary-and-wage-record-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWageObject](#schemasalaryandwageobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves a specific salary and wages record for a specific employee using a unique salary and wage id

<a id="opIdgetEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

<h3 id="retrieves-a-specific-salary-and-wages-record-for-a-specific-employee-using-a-unique-salary-and-wage-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|SalaryAndWagesID|path|string(uuid)|true|Id for single pay template earnings object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "cd4f35e7-5062-494a-96c4-f81e9083b0b9",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T23:21:48.6291438",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": [
    {
      "salaryAndWagesID": "49c33012-c1ac-456c-91fd-cb7e6db6f5fe",
      "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
      "numberOfUnitsPerWeek": 40,
      "ratePerUnit": null,
      "numberOfUnitsPerDay": null,
      "daysPerWeek": null,
      "effectiveFrom": "2020-04-01T00:00:00",
      "annualSalary": 25000,
      "status": "Active",
      "paymentType": "Salary"
    }
  ]
}
```

<h3 id="retrieves-a-specific-salary-and-wages-record-for-a-specific-employee-using-a-unique-salary-and-wage-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWages](#schemasalaryandwages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates salary and wages record for a specific employee

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
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnitsPerWeek": 3,
    "ratePerUnit": 11,
    "effectiveFrom": "2020-05-15",
    "annualSalary": 101,
    "status": "ACTIVE",
    "paymentType": "Salary"
  }'
```

`PUT /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

> Body parameter

```json
{
  "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
  "numberOfUnitsPerWeek": 3,
  "ratePerUnit": 11,
  "effectiveFrom": "2020-05-15",
  "annualSalary": 101,
  "status": "ACTIVE",
  "paymentType": "Salary"
}
```

<h3 id="updates-salary-and-wages-record-for-a-specific-employee-parameters">Parameters</h3>

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
|» numberOfUnitsPerDay|body|number(double)|false|The Number of Units per day for the corresponding salary and wages|
|» effectiveFrom|body|string(date)|true|The effective date of the corresponding salary and wages|
|» annualSalary|body|number(double)|true|The annual salary|
|» status|body|string|true|The current status of the corresponding salary and wages|
|» paymentType|body|string|true|The type of the payment of the corresponding salary and wages|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Pending|
|» status|History|
|» paymentType|Salary|
|» paymentType|Hourly|

> Example responses

> 200 Response

```json
{
  "id": "d12a31ee-e094-4e67-9092-0d5e1d7569a6",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-13T16:39:11.7310047",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "salaryAndWages": {
    "salaryAndWagesID": "e9c7f567-b0a0-483c-b45f-d072e399352b",
    "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
    "numberOfUnitsPerWeek": 3,
    "ratePerUnit": null,
    "numberOfUnitsPerDay": null,
    "daysPerWeek": null,
    "effectiveFrom": "2020-05-15T00:00:00",
    "annualSalary": 101,
    "status": "Pending",
    "paymentType": "Salary"
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

<h3 id="updates-salary-and-wages-record-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SalaryAndWageObject](#schemasalaryandwageobject)|
|400|Bad Request|validation error for a bad request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Deletes a salary and wages record for a specific employee

<a id="opIddeleteEmployeeSalaryAndWage"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/SalaryAndWages/3fa85f64-5717-4562-b3fc-2c963f66afa6 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}`

<h3 id="deletes-a-salary-and-wages-record-for-a-specific-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|SalaryAndWagesID|path|string(uuid)|true|Id for single salary and wages object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

<h3 id="deletes-a-salary-and-wages-record-for-a-specific-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion successful|None|

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
  "id": "d748445b-fd11-4832-a85a-905fbfcf3d7c",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T21:55:55.0725037",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 2
  },
  "problem": null,
  "payRuns": [
    {
      "payRunID": "e0a59d82-6229-4be4-9d66-49891b4d933e",
      "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
      "periodStartDate": "2020-02-03T00:00:00",
      "periodEndDate": "2020-02-09T00:00:00",
      "paymentDate": "2020-02-10T00:00:00",
      "totalCost": 490.39,
      "totalPay": 376.92,
      "payRunStatus": "Draft",
      "payRunType": "Scheduled",
      "calendarType": "Weekly",
      "postedDateTime": null,
      "payslipMessage": null
    },
    {
      "payRunID": "ea4f0a14-2c41-4583-9845-9e455972b326",
      "payrollCalendarID": "5e813d9e-949c-461f-8a89-e9ee8955a254",
      "periodStartDate": "2020-02-03T00:00:00",
      "periodEndDate": "2020-03-02T00:00:00",
      "paymentDate": "2020-02-28T00:00:00",
      "totalCost": 1502.08,
      "totalPay": 1294.65,
      "payRunStatus": "Posted",
      "payRunType": "Scheduled",
      "calendarType": "Monthly",
      "postedDateTime": "2020-02-13T16:54:11",
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
  "id": "84471d62-74b6-4b21-845c-6d1e6f031172",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T21:55:55.745211",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "payRun": {
    "payRunID": "e0a59d82-6229-4be4-9d66-49891b4d933e",
    "payrollCalendarID": "216d80e6-af55-47b1-b718-9457c3f5d2fe",
    "periodStartDate": "2020-02-03T00:00:00",
    "periodEndDate": "2020-02-09T00:00:00",
    "paymentDate": "2020-02-10T00:00:00",
    "totalCost": 490.39,
    "totalPay": 376.92,
    "payRunStatus": "Draft",
    "payRunType": "Scheduled",
    "calendarType": "Weekly",
    "postedDateTime": null,
    "paySlips": [
      {
        "paySlipID": "ed3fb9b3-e9a1-44fa-a224-8be49facbbe8",
        "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
        "lastEdited": null,
        "firstName": "Mike",
        "lastName": "Johnpitragibigson",
        "totalEarnings": 480.77,
        "grossEarnings": 480.77,
        "totalPay": 386.54,
        "totalEmployerTaxes": 0,
        "totalEmployeeTaxes": 94.23,
        "totalDeductions": 9.62,
        "totalReimbursements": 0,
        "totalCourtOrders": 0,
        "totalBenefits": 9.62,
        "bacsHash": null,
        "paymentMethod": null
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
curl 'https://api.xero.com/payroll.xro/2.0/Payslips?PayRunID=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Payslips`

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
  "id": "c07aa280-478b-48b5-a778-499cf95c9781",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T21:50:46.3775117",
  "httpStatusCode": "OK",
  "pagination": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "itemCount": 1
  },
  "problem": null,
  "paySlips": [
    {
      "paySlipID": "ed3fb9b3-e9a1-44fa-a224-8be49facbbe8",
      "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
      "payRunID": "e0a59d82-6229-4be4-9d66-49891b4d933e",
      "lastEdited": null,
      "firstName": "Mike",
      "lastName": "Johnpitragibigson",
      "totalEarnings": 480.77,
      "grossEarnings": 480.77,
      "totalPay": 386.54,
      "totalEmployerTaxes": 0,
      "totalEmployeeTaxes": 94.23,
      "totalDeductions": 9.62,
      "totalReimbursements": 0,
      "totalCourtOrders": 0,
      "totalBenefits": 9.62,
      "bacsHash": null,
      "paymentMethod": null,
      "earningsLines": [
        {
          "earningsLineID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
          "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
          "displayName": "Regular Hours",
          "ratePerUnit": 12.019231,
          "numberOfUnits": 40,
          "fixedAmount": null,
          "amount": 480.77,
          "isLinkedToTimesheet": false,
          "isAverageDailyPayRate": null
        }
      ],
      "leaveEarningsLines": [],
      "timesheetEarningsLines": [],
      "deductionLines": [],
      "reimbursementLines": [],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
          "numberOfUnits": 0
        }
      ],
      "benefitLines": [],
      "paymentLines": [
        {
          "paymentLineID": "08ceb312-07af-4ce0-ae9a-176532f07009",
          "amount": 384.3,
          "accountNumber": null,
          "sortCode": null,
          "accountName": null
        }
      ],
      "employeeTaxLines": [
        {
          "taxLineID": "e7dc717a-4399-4702-9e15-adb87e568dc9",
          "description": "PAYE",
          "amount": 48.6,
          "globalTaxTypeID": 1,
          "manualAdjustment": false
        },
        {
          "taxLineID": "c774af0b-4776-4c81-9c96-ad18e4b35f40",
          "description": "Employee National Insurance Contribution",
          "amount": 38.25,
          "globalTaxTypeID": 2,
          "manualAdjustment": false
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "8de7a488-57ed-4d58-b76a-d9f9460ebded",
          "description": "Employer National Insurance Contribution",
          "amount": 43.99,
          "globalTaxTypeID": 3,
          "manualAdjustment": false
        }
      ],
      "courtOrderLines": []
    }
  ]
}
```

<h3 id="retrieves-payslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Payslips](#schemapayslips)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip payroll.payslip.read )
</aside>

## Retrieves a specific payslip by using a unique payslip ID

<a id="opIdgetPaySlip"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Payslips/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Payslips/{PayslipID}`

<h3 id="retrieves-a-specific-payslip-by-using-a-unique-payslip-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayslipID|path|string(uuid)|true|Identifier for the payslip|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "80c558c3-bc7a-48d0-91b2-20b8ec784f0d",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T22:04:35.1798025",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "paySlip": {
    "paySlipID": "ed3fb9b3-e9a1-44fa-a224-8be49facbbe8",
    "employeeID": "aad6b292-7b94-408b-93f6-e489867e3fb0",
    "payRunID": "e0a59d82-6229-4be4-9d66-49891b4d933e",
    "lastEdited": null,
    "firstName": "Mike",
    "lastName": "Johnpitragibigson",
    "totalEarnings": 480.77,
    "grossEarnings": 480.77,
    "totalPay": 386.54,
    "totalEmployerTaxes": 0,
    "totalEmployeeTaxes": 94.23,
    "totalDeductions": 9.62,
    "totalReimbursements": 0,
    "totalCourtOrders": 0,
    "totalBenefits": 9.62,
    "bacsHash": null,
    "paymentMethod": null,
    "earningsLines": [
      {
        "earningsLineID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "earningsRateID": "87f5b43a-cf51-4b74-92de-94c819e82d27",
        "displayName": "Regular Hours",
        "ratePerUnit": 12.019231,
        "numberOfUnits": 40,
        "fixedAmount": null,
        "amount": 480.77,
        "isLinkedToTimesheet": false,
        "isAverageDailyPayRate": null
      }
    ],
    "leaveEarningsLines": [],
    "timesheetEarningsLines": [],
    "deductionLines": [],
    "reimbursementLines": [],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "ed08dffe-788e-4b24-9630-f0fa2f4d164c",
        "numberOfUnits": 0
      }
    ],
    "benefitLines": [],
    "paymentLines": [
      {
        "paymentLineID": "08ceb312-07af-4ce0-ae9a-176532f07009",
        "amount": 384.3,
        "accountNumber": null,
        "sortCode": null,
        "accountName": null
      }
    ],
    "employeeTaxLines": [
      {
        "taxLineID": "e7dc717a-4399-4702-9e15-adb87e568dc9",
        "description": "PAYE",
        "amount": 48.6,
        "globalTaxTypeID": 1,
        "manualAdjustment": false
      },
      {
        "taxLineID": "c774af0b-4776-4c81-9c96-ad18e4b35f40",
        "description": "Employee National Insurance Contribution",
        "amount": 38.25,
        "globalTaxTypeID": 2,
        "manualAdjustment": false
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "8de7a488-57ed-4d58-b76a-d9f9460ebded",
        "description": "Employer National Insurance Contribution",
        "amount": 43.99,
        "globalTaxTypeID": 3,
        "manualAdjustment": false
      }
    ],
    "courtOrderLines": []
  }
}
```

<h3 id="retrieves-a-specific-payslip-by-using-a-unique-payslip-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayslipObject](#schemapayslipobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip payroll.payslip.read )
</aside>

## Retrieves payroll settings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/2.0/Settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Settings`

<h3 id="retrieves-payroll-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "3cb41871-980a-47e4-878f-7c576b0d3677",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T21:27:04.8905569",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "settings": {
    "accounts": [
      {
        "accountID": "9ee28149-32a9-4661-8eab-a28738696983",
        "type": "WAGESPAYABLE",
        "code": "814",
        "name": "Wages Payable - Payroll"
      },
      {
        "accountID": "81da553d-c6c6-411e-95df-cc4ac8f7e1c2",
        "type": "WAGESEXPENSE",
        "code": "477",
        "name": "Salaries"
      },
      {
        "accountID": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
        "type": "BANK",
        "code": "090",
        "name": "Business Bank Account"
      },
      {
        "accountID": "43072840-e67b-45df-8b90-f52ebedb2779",
        "type": "PAYELIABILITY",
        "code": "825",
        "name": "PAYE Payable"
      },
      {
        "accountID": "a2377a9f-f5bd-4327-8f85-e3461b591912",
        "type": "NICLIABILITY",
        "code": "826",
        "name": "NIC Payable"
      },
      {
        "accountID": "4e24254c-2770-433d-9845-8925ded5e14a",
        "type": "EMPLOYERSNIC",
        "code": "479",
        "name": "Employers National Insurance"
      },
      {
        "accountID": "9ee28149-32a9-4661-8eab-a28738696983",
        "type": "PAYEECONTRIBUTION",
        "code": "814",
        "name": "Wages Payable - Payroll"
      }
    ]
  }
}
```

<h3 id="retrieves-payroll-settings-responses">Responses</h3>

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
curl https://api.xero.com/payroll.xro/2.0/Settings/trackingCategories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Settings/trackingCategories`

<h3 id="retrieves-tracking-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "e56628f7-a25e-4d23-88c5-56e2895e2143",
  "providerName": "provider-name",
  "dateTimeUTC": "2020-04-10T21:13:21.498344",
  "httpStatusCode": "OK",
  "pagination": null,
  "problem": null,
  "trackingCategories": {
    "employeeGroupsTrackingCategoryID": "9d8ad8f6-0d0f-41e0-8851-ef47e8b54ae6",
    "timesheetTrackingCategoryID": "1d7d2015-10e7-4ecb-8b44-f331c8b63e2d"
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
        "addressLine1": "123 Main St",
        "addressLine2": "Apt 4",
        "city": "Fulham",
        "postCode": "SW6 6EY",
        "countryName": "United Kingdom"
      },
      "email": "developer@me.com",
      "gender": "F",
      "phoneNumber": "415-555-1212",
      "startDate": "2020-01-19",
      "endDate": "2020-01-19",
      "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updatedDateUTC": "1970-01-01T00:00:00Z",
      "createdDateUTC": "1970-01-01T00:00:00Z",
      "niCategory": "I",
      "niCategories": [
        {
          "niCategory": "I",
          "startDate": "2024-12-02",
          "niCategoryID": 15,
          "dateFirstEmployedAsCivilian": "2024-12-02",
          "workplacePostcode": "SW1A 1AA"
        }
      ],
      "nationalInsuranceNumber": "AB123456C",
      "isOffPayrollWorker": true,
      "contracts": [
        {
          "startDate": "2024-12-02",
          "employmentStatus": "Employee",
          "contractType": "FullTime",
          "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "isFixedTerm": true,
          "fixedTermEndDate": "2025-11-01",
          "developmentalRoleDetails": {
            "startDate": "2024-12-02",
            "endDate": "2024-12-02",
            "developmentalRole": "Apprentice",
            "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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
      "addressLine1": "123 Main St",
      "addressLine2": "Apt 4",
      "city": "Fulham",
      "postCode": "SW6 6EY",
      "countryName": "United Kingdom"
    },
    "email": "developer@me.com",
    "gender": "F",
    "phoneNumber": "415-555-1212",
    "startDate": "2020-01-19",
    "endDate": "2020-01-19",
    "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedDateUTC": "1970-01-01T00:00:00Z",
    "createdDateUTC": "1970-01-01T00:00:00Z",
    "niCategory": "I",
    "niCategories": [
      {
        "niCategory": "I",
        "startDate": "2024-12-02",
        "niCategoryID": 15,
        "dateFirstEmployedAsCivilian": "2024-12-02",
        "workplacePostcode": "SW1A 1AA"
      }
    ],
    "nationalInsuranceNumber": "AB123456C",
    "isOffPayrollWorker": true,
    "contracts": [
      {
        "startDate": "2024-12-02",
        "employmentStatus": "Employee",
        "contractType": "FullTime",
        "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isFixedTerm": true,
        "fixedTermEndDate": "2025-11-01",
        "developmentalRoleDetails": {
          "startDate": "2024-12-02",
          "endDate": "2024-12-02",
          "developmentalRole": "Apprentice",
          "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      }
    ]
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
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 4",
    "city": "Fulham",
    "postCode": "SW6 6EY",
    "countryName": "United Kingdom"
  },
  "email": "developer@me.com",
  "gender": "F",
  "phoneNumber": "415-555-1212",
  "startDate": "2020-01-19",
  "endDate": "2020-01-19",
  "payrollCalendarID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedDateUTC": "1970-01-01T00:00:00Z",
  "createdDateUTC": "1970-01-01T00:00:00Z",
  "niCategory": "I",
  "niCategories": [
    {
      "niCategory": "I",
      "startDate": "2024-12-02",
      "niCategoryID": 15,
      "dateFirstEmployedAsCivilian": "2024-12-02",
      "workplacePostcode": "SW1A 1AA"
    }
  ],
  "nationalInsuranceNumber": "AB123456C",
  "isOffPayrollWorker": true,
  "contracts": [
    {
      "startDate": "2024-12-02",
      "employmentStatus": "Employee",
      "contractType": "FullTime",
      "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isFixedTerm": true,
      "fixedTermEndDate": "2025-11-01",
      "developmentalRoleDetails": {
        "startDate": "2024-12-02",
        "endDate": "2024-12-02",
        "developmentalRole": "Apprentice",
        "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeID|string(uuid)|false|none|Xero unique identifier for the employee|
|title|string|true|none|Title of the employee|
|firstName|string|true|none|First name of employee|
|lastName|string|true|none|Last name of employee|
|dateOfBirth|string(date)|true|none|Date of birth of the employee (YYYY-MM-DD)|
|address|[Address](#schemaaddress)|true|none|none|
|email|string|false|none|The email address for the employee|
|gender|string|true|none|The employee’s gender|
|phoneNumber|string|false|none|Employee phone number|
|startDate|string(date)|false|none|Employment start date of the employee at the time it was requested|
|endDate|string(date)|false|none|Employment end date of the employee at the time it was requested|
|payrollCalendarID|string(uuid)|false|none|Xero unique identifier for the payroll calendar of the employee|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of last update to the employee|
|createdDateUTC|string(date-time)|false|none|UTC timestamp when the employee was created in Xero|
|niCategory|[NICategoryLetter](#schemanicategoryletter)|false|none|**Deprecated.** The employee's NI Category letter.|
|niCategories|[[NICategory](#schemanicategory)]|false|none|The employee's NI categories|
|nationalInsuranceNumber|string|false|none|National insurance number of the employee|
|isOffPayrollWorker|boolean|false|none|Whether the employee is an off payroll worker|
|contracts|[[Contracts](#schemacontracts)]|false|none|The employee's contracts|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|
|niCategory|A|
|niCategory|B|
|niCategory|C|
|niCategory|F|
|niCategory|H|
|niCategory|I|
|niCategory|J|
|niCategory|L|
|niCategory|M|
|niCategory|S|
|niCategory|V|
|niCategory|X|
|niCategory|Z|
|niCategory|D|
|niCategory|E|
|niCategory|K|
|niCategory|N|

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
    "startDate": "1970-01-01",
    "employeeNumber": 7,
    "niCategory": "I",
    "niCategories": [
      {
        "niCategory": "I",
        "startDate": "2024-12-02",
        "niCategoryID": 15,
        "dateFirstEmployedAsCivilian": "2024-12-02",
        "workplacePostcode": "SW1A 1AA"
      }
    ],
    "contracts": [
      {
        "startDate": "2024-12-02",
        "employmentStatus": "Employee",
        "contractType": "FullTime",
        "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isFixedTerm": true,
        "fixedTermEndDate": "2025-11-01",
        "developmentalRoleDetails": {
          "startDate": "2024-12-02",
          "endDate": "2024-12-02",
          "developmentalRole": "Apprentice",
          "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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
  "startDate": "1970-01-01",
  "employeeNumber": 7,
  "niCategory": "I",
  "niCategories": [
    {
      "niCategory": "I",
      "startDate": "2024-12-02",
      "niCategoryID": 15,
      "dateFirstEmployedAsCivilian": "2024-12-02",
      "workplacePostcode": "SW1A 1AA"
    }
  ],
  "contracts": [
    {
      "startDate": "2024-12-02",
      "employmentStatus": "Employee",
      "contractType": "FullTime",
      "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isFixedTerm": true,
      "fixedTermEndDate": "2025-11-01",
      "developmentalRoleDetails": {
        "startDate": "2024-12-02",
        "endDate": "2024-12-02",
        "developmentalRole": "Apprentice",
        "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payrollCalendarID|string(uuid)|true|none|Xero unique identifier for the payroll calendar of the employee|
|startDate|string(date)|true|none|Start date of the employment (YYYY-MM-DD)|
|employeeNumber|string|true|none|The employment number of the employee|
|niCategory|[NICategoryLetter](#schemanicategoryletter)|false|none|**Deprecated.** The employee's NI Category letter.|
|niCategories|[[NICategory](#schemanicategory)]|true|none|The employee's NI categories|
|contracts|[[Contracts](#schemacontracts)]|false|none|The employee's contracts|

#### Enumerated Values

|Property|Value|
|---|---|
|niCategory|A|
|niCategory|B|
|niCategory|C|
|niCategory|F|
|niCategory|H|
|niCategory|I|
|niCategory|J|
|niCategory|L|
|niCategory|M|
|niCategory|S|
|niCategory|V|
|niCategory|X|
|niCategory|Z|
|niCategory|D|
|niCategory|E|
|niCategory|K|
|niCategory|N|

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
    "starterType": "New Employee with P45",
    "starterDeclaration": "B.) This is currently their only job",
    "taxCode": "1185L",
    "w1M1": true,
    "previousTaxablePay": 0,
    "previousTaxPaid": 0,
    "studentLoanDeduction": "Plan Type 2",
    "hasPostGraduateLoans": true,
    "isDirector": true,
    "directorshipStartDate": "1970-01-01",
    "nicCalculationMethod": "Annualized"
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
  "starterType": "New Employee with P45",
  "starterDeclaration": "B.) This is currently their only job",
  "taxCode": "1185L",
  "w1M1": true,
  "previousTaxablePay": 0,
  "previousTaxPaid": 0,
  "studentLoanDeduction": "Plan Type 2",
  "hasPostGraduateLoans": true,
  "isDirector": true,
  "directorshipStartDate": "1970-01-01",
  "nicCalculationMethod": "Annualized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|starterType|string|false|none|The Starter type.|
|starterDeclaration|string|false|none|Starter declaration.|
|taxCode|string|false|none|The Tax code.|
|w1M1|boolean|false|none|Describes whether the tax settings is W1M1|
|previousTaxablePay|number(double)|false|none|The previous taxable pay|
|previousTaxPaid|number(double)|false|none|The tax amount previously paid|
|studentLoanDeduction|string|false|none|The employee's student loan deduction type|
|hasPostGraduateLoans|boolean|false|none|Describes whether the employee has post graduate loans|
|isDirector|boolean|false|none|Describes whether the employee is director|
|directorshipStartDate|string(date)|false|none|The directorship start date|
|nicCalculationMethod|string|false|none|NICs calculation method|

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
  "openingBalances": {
    "statutoryAdoptionPay": 0,
    "statutoryMaternityPay": 0,
    "statutoryPaternityPay": 0,
    "statutorySharedParentalPay": 0,
    "statutorySickPay": 0,
    "priorEmployeeNumber": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|problem|[Problem](#schemaproblem)|false|none|The object returned for a bad request|
|openingBalances|[EmployeeOpeningBalances](#schemaemployeeopeningbalances)|false|none|none|

<h2 id="tocS_EmployeeOpeningBalances">EmployeeOpeningBalances</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeopeningbalances"></a>
<a id="schema_EmployeeOpeningBalances"></a>
<a id="tocSemployeeopeningbalances"></a>
<a id="tocsemployeeopeningbalances"></a>

```json
{
  "statutoryAdoptionPay": 0,
  "statutoryMaternityPay": 0,
  "statutoryPaternityPay": 0,
  "statutorySharedParentalPay": 0,
  "statutorySickPay": 0,
  "priorEmployeeNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statutoryAdoptionPay|number(double)|false|none|The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date|
|statutoryMaternityPay|number(double)|false|none|The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date|
|statutoryPaternityPay|number(double)|false|none|The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date|
|statutorySharedParentalPay|number(double)|false|none|The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date|
|statutorySickPay|number(double)|false|none|The total accumulated statutory sick pay amount received by the employee for current fiscal year to date|
|priorEmployeeNumber|number(double)|false|none|The unique employee number issued by the employee's former employer|

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
  "periodStatus": "Approved"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodStartDate|string(date)|false|none|The Pay Period Start Date (YYYY-MM-DD)|
|periodEndDate|string(date)|false|none|The Pay Period End Date (YYYY-MM-DD)|
|numberOfUnits|number(double)|false|none|The Number of Units for the leave|
|periodStatus|string|false|none|Period Status|

#### Enumerated Values

|Property|Value|
|---|---|
|periodStatus|Approved|
|periodStatus|Completed|

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
|leaveType|Bereavement|
|leaveType|NeonatalCare|
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
|type|Bereavement|
|type|NeonatalCare|
|type|BereavementNire|
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
      "scheduleOfAccrual": "BeginningOfCalendarYear",
      "hoursAccruedAnnually": 0,
      "maximumToAccrue": 0,
      "openingBalance": 0,
      "rateAccruedHourly": 0,
      "scheduleOfAccrualDate": "2024-04-01"
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
    "scheduleOfAccrual": "BeginningOfCalendarYear",
    "hoursAccruedAnnually": 0,
    "maximumToAccrue": 0,
    "openingBalance": 0,
    "rateAccruedHourly": 0,
    "scheduleOfAccrualDate": "2024-04-01"
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
  "scheduleOfAccrual": "BeginningOfCalendarYear",
  "hoursAccruedAnnually": 0,
  "maximumToAccrue": 0,
  "openingBalance": 0,
  "rateAccruedHourly": 0,
  "scheduleOfAccrualDate": "2024-04-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveTypeID|string(uuid)|true|none|The Xero identifier for leave type|
|scheduleOfAccrual|string|true|none|The schedule of accrual|
|hoursAccruedAnnually|number(double)|false|none|The number of hours accrued for the leave annually. This is 0 when the scheduleOfAccrual chosen is "OnHourWorked"|
|maximumToAccrue|number(double)|false|none|The maximum number of hours that can be accrued for the leave|
|openingBalance|number(double)|false|none|The initial number of hours assigned when the leave was added to the employee|
|rateAccruedHourly|number(double)|false|none|The number of hours added to the leave balance for every hour worked by the employee. This is normally 0, unless the scheduleOfAccrual chosen is "OnHourWorked"|
|scheduleOfAccrualDate|string(date)|false|none|The date when an employee becomes entitled to their accrual. Only applicable when scheduleOfAccrual is "OnAnniversaryDate"|

#### Enumerated Values

|Property|Value|
|---|---|
|scheduleOfAccrual|BeginningOfCalendarYear|
|scheduleOfAccrual|OnAnniversaryDate|
|scheduleOfAccrual|EachPayPeriod|
|scheduleOfAccrual|OnHourWorked|

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
|earningTemplates|[EarningsTemplates](#schemaearningstemplates)|false|none|none|

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

<h2 id="tocS_Benefits">Benefits</h2>
<!-- backwards compatibility -->
<a id="schemabenefits"></a>
<a id="schema_Benefits"></a>
<a id="tocSbenefits"></a>
<a id="tocsbenefits"></a>

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
      "category": "StakeholderPension",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "standardAmount": 0,
      "percentage": 0,
      "calculationType": "FixedAmount",
      "currentRecord": true,
      "subjectToNIC": true,
      "subjectToPension": true,
      "subjectToTax": true,
      "isCalculatingOnQualifyingEarnings": true,
      "showBalanceToEmployee": true
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

<h2 id="tocS_BenefitObject">BenefitObject</h2>
<!-- backwards compatibility -->
<a id="schemabenefitobject"></a>
<a id="schema_BenefitObject"></a>
<a id="tocSbenefitobject"></a>
<a id="tocsbenefitobject"></a>

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
    "category": "StakeholderPension",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "standardAmount": 0,
    "percentage": 0,
    "calculationType": "FixedAmount",
    "currentRecord": true,
    "subjectToNIC": true,
    "subjectToPension": true,
    "subjectToTax": true,
    "isCalculatingOnQualifyingEarnings": true,
    "showBalanceToEmployee": true
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
  "category": "StakeholderPension",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expenseAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "standardAmount": 0,
  "percentage": 0,
  "calculationType": "FixedAmount",
  "currentRecord": true,
  "subjectToNIC": true,
  "subjectToPension": true,
  "subjectToTax": true,
  "isCalculatingOnQualifyingEarnings": true,
  "showBalanceToEmployee": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|unique identifier in Xero|
|name|string|true|none|Name of the employer pension|
|category|string|true|none|Category type of the employer pension|
|liabilityAccountId|string(uuid)|true|none|Xero identifier for Liability Account|
|expenseAccountId|string(uuid)|true|none|Xero identifier for Expense Account|
|standardAmount|number(double)|false|none|Standard amount of the employer pension|
|percentage|number(double)|true|none|Percentage of gross of the employer pension|
|calculationType|string|true|none|Calculation Type of the employer pension (FixedAmount or PercentageOfGross).|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|
|subjectToNIC|boolean|false|none|Identifier of subject To NIC|
|subjectToPension|boolean|false|none|Identifier of subject To pension|
|subjectToTax|boolean|false|none|Identifier of subject To Tax|
|isCalculatingOnQualifyingEarnings|boolean|false|none|Identifier of calculating on qualifying earnings|
|showBalanceToEmployee|boolean|false|none|display the balance to employee|

#### Enumerated Values

|Property|Value|
|---|---|
|category|StakeholderPension|
|category|Other|
|calculationType|FixedAmount|
|calculationType|PercentageOfGross|

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
      "deductionCategory": "CapitalContributions",
      "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currentRecord": true,
      "standardAmount": 0,
      "reducesSuperLiability": true,
      "reducesTaxLiability": true,
      "calculationType": "FixedAmount",
      "percentage": 0,
      "subjectToNIC": true,
      "subjectToTax": true,
      "isReducedByBasicRate": true,
      "applyToPensionCalculations": true,
      "isCalculatingOnQualifyingEarnings": true,
      "isPension": true
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
    "deductionCategory": "CapitalContributions",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true,
    "standardAmount": 0,
    "reducesSuperLiability": true,
    "reducesTaxLiability": true,
    "calculationType": "FixedAmount",
    "percentage": 0,
    "subjectToNIC": true,
    "subjectToTax": true,
    "isReducedByBasicRate": true,
    "applyToPensionCalculations": true,
    "isCalculatingOnQualifyingEarnings": true,
    "isPension": true
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
  "deductionCategory": "CapitalContributions",
  "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentRecord": true,
  "standardAmount": 0,
  "reducesSuperLiability": true,
  "reducesTaxLiability": true,
  "calculationType": "FixedAmount",
  "percentage": 0,
  "subjectToNIC": true,
  "subjectToTax": true,
  "isReducedByBasicRate": true,
  "applyToPensionCalculations": true,
  "isCalculatingOnQualifyingEarnings": true,
  "isPension": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deductionId|string(uuid)|false|none|The Xero identifier for Deduction|
|deductionName|string|true|none|Name of the deduction|
|deductionCategory|string|false|none|Deduction Category type|
|liabilityAccountId|string(uuid)|true|none|Xero identifier for Liability Account|
|currentRecord|boolean|false|none|Identifier of a record is active or not.|
|standardAmount|number(double)|false|none|Standard amount of the deduction|
|reducesSuperLiability|boolean|false|none|Identifier of reduces super liability|
|reducesTaxLiability|boolean|false|none|Identifier of reduces tax liability|
|calculationType|string|false|none|determine the calculation type whether fixed amount or percentage of gross|
|percentage|number(double)|false|none|Percentage of gross|
|subjectToNIC|boolean|false|none|Identifier of subject To NIC|
|subjectToTax|boolean|false|none|Identifier of subject To Tax|
|isReducedByBasicRate|boolean|false|none|Identifier of reduced by basic rate applicable or not|
|applyToPensionCalculations|boolean|false|none|Identifier for apply to pension calculations|
|isCalculatingOnQualifyingEarnings|boolean|false|none|Identifier of calculating on qualifying earnings|
|isPension|boolean|false|none|Identifier of applicable for pension or not|

#### Enumerated Values

|Property|Value|
|---|---|
|deductionCategory|CapitalContributions|
|deductionCategory|ChildCareVoucher|
|deductionCategory|MakingGood|
|deductionCategory|PostgraduateLoanDeductions|
|deductionCategory|PrivateUsePayments|
|deductionCategory|SalarySacrifice|
|deductionCategory|StakeholderPension|
|deductionCategory|StakeholderPensionPostTax|
|deductionCategory|StudentLoanDeductions|
|deductionCategory|UkOther|
|calculationType|FixedAmount|
|calculationType|PercentageOfGross|

<h2 id="tocS_StatutoryDeductions">StatutoryDeductions</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductions"></a>
<a id="schema_StatutoryDeductions"></a>
<a id="tocSstatutorydeductions"></a>
<a id="tocsstatutorydeductions"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "statutoryDeductionCategory": "AdditionalStudentLoan",
    "liabilityAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currentRecord": true
  }
]
```

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
  "statutoryDeductionCategory": "AdditionalStudentLoan",
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
|statutoryDeductionCategory|AdditionalStudentLoan|
|statutoryDeductionCategory|ChildSupport|
|statutoryDeductionCategory|CourtFines|
|statutoryDeductionCategory|Creditor|
|statutoryDeductionCategory|FederalLevy|
|statutoryDeductionCategory|InlandRevenueArrears|
|statutoryDeductionCategory|KiwiSaver|
|statutoryDeductionCategory|MsdRepayments|
|statutoryDeductionCategory|NonPriorityOrder|
|statutoryDeductionCategory|PriorityOrder|
|statutoryDeductionCategory|TableBased|
|statutoryDeductionCategory|StudentLoan|
|statutoryDeductionCategory|VoluntaryStudentLoan|
|statutoryDeductionCategory|USChildSupport|

<h2 id="tocS_StatutoryDeductionCategory">StatutoryDeductionCategory</h2>
<!-- backwards compatibility -->
<a id="schemastatutorydeductioncategory"></a>
<a id="schema_StatutoryDeductionCategory"></a>
<a id="tocSstatutorydeductioncategory"></a>
<a id="tocsstatutorydeductioncategory"></a>

```json
"AdditionalStudentLoan"
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
      "statutoryDeductionCategory": "AdditionalStudentLoan",
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
    "statutoryDeductionCategory": "AdditionalStudentLoan",
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
  "statutoryDeductionCategory": "AdditionalStudentLoan",
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
|statutoryDeductionCategory|AdditionalStudentLoan|
|statutoryDeductionCategory|ChildSupport|
|statutoryDeductionCategory|CourtFines|
|statutoryDeductionCategory|Creditor|
|statutoryDeductionCategory|FederalLevy|
|statutoryDeductionCategory|InlandRevenueArrears|
|statutoryDeductionCategory|KiwiSaver|
|statutoryDeductionCategory|MsdRepayments|
|statutoryDeductionCategory|NonPriorityOrder|
|statutoryDeductionCategory|PriorityOrder|
|statutoryDeductionCategory|TableBased|
|statutoryDeductionCategory|StudentLoan|
|statutoryDeductionCategory|VoluntaryStudentLoan|
|statutoryDeductionCategory|USChildSupport|

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
|earningsType|BackPay|
|earningsType|Bonus|
|earningsType|Commission|
|earningsType|LumpSum|
|earningsType|OtherEarnings|
|earningsType|OvertimeEarnings|
|earningsType|RegularEarnings|
|earningsType|StatutoryAdoptionPay|
|earningsType|StatutoryAdoptionPayNonPensionable|
|earningsType|StatutoryBereavementPay|
|earningsType|StatutoryMaternityPay|
|earningsType|StatutoryMaternityPayNonPensionable|
|earningsType|StatutoryPaternityPay|
|earningsType|StatutoryPaternityPayNonPensionable|
|earningsType|StatutoryParentalBereavementPayNonPensionable|
|earningsType|StatutorySharedParentalPay|
|earningsType|StatutorySharedParentalPayNonPensionable|
|earningsType|StatutorySickPay|
|earningsType|StatutorySickPayNonPensionable|
|earningsType|TipsNonDirect|
|earningsType|TipsDirect|
|earningsType|TerminationPay|
|earningsType|StatutoryNeonatalCarePay|
|earningsType|StatutoryNeonatalCarePayNonPensionable|
|earningsType|StatutoryBereavementPayNorthernIreland|
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
      "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "isPaidLeave": true,
      "showOnPayslip": true,
      "updatedDateUTC": "1970-01-01T00:00:00Z",
      "isActive": true,
      "isStatutoryLeave": true
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
    "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "isPaidLeave": true,
    "showOnPayslip": true,
    "updatedDateUTC": "1970-01-01T00:00:00Z",
    "isActive": true,
    "isStatutoryLeave": true
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
  "leaveID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "isPaidLeave": true,
  "showOnPayslip": true,
  "updatedDateUTC": "1970-01-01T00:00:00Z",
  "isActive": true,
  "isStatutoryLeave": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaveID|string(uuid)|false|none|Xero unique identifier for the leave|
|leaveTypeID|string(uuid)|false|none|Xero unique identifier for the leave type|
|name|string|true|none|Name of the leave type|
|isPaidLeave|boolean|true|none|Indicate that an employee will be paid when taking this type of leave|
|showOnPayslip|boolean|true|none|Indicate that a balance for this leave type to be shown on the employee’s payslips|
|updatedDateUTC|string(date-time)|false|none|UTC timestamp of last update to the leave type note|
|isActive|boolean|false|none|Shows whether the leave type is active or not|
|isStatutoryLeave|boolean|false|none|Shows whether the leave type is a statutory leave type or not|

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
    "currentRecord": true
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
  "currentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reimbursementID|string(uuid)|false|none|Xero unique identifier for a reimbursement|
|name|string|true|none|Name of the reimbursement|
|accountID|string(uuid)|true|none|Xero unique identifier for the account used for the reimbursement|
|currentRecord|boolean|false|none|Indicates that whether the reimbursement is active|

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
|calendarType|string|true|none|Type of the calendar|
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
        "sortCode": "string"
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
      "sortCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethod|string|true|none|The payment method code|
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
      "effectiveFrom": "1970-01-01",
      "annualSalary": 0,
      "status": "Active",
      "paymentType": "Salary"
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
    "effectiveFrom": "1970-01-01",
    "annualSalary": 0,
    "status": "Active",
    "paymentType": "Salary"
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
  "effectiveFrom": "1970-01-01",
  "annualSalary": 0,
  "status": "Active",
  "paymentType": "Salary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salaryAndWagesID|string(uuid)|false|none|Xero unique identifier for a salary and wages record|
|earningsRateID|string(uuid)|true|none|Xero unique identifier for an earnings rate|
|numberOfUnitsPerWeek|number(double)|true|none|The Number of Units per week for the corresponding salary and wages|
|ratePerUnit|number(double)|false|none|The rate of each unit for the corresponding salary and wages|
|numberOfUnitsPerDay|number(double)|false|none|The Number of Units per day for the corresponding salary and wages|
|effectiveFrom|string(date)|true|none|The effective date of the corresponding salary and wages|
|annualSalary|number(double)|true|none|The annual salary|
|status|string|true|none|The current status of the corresponding salary and wages|
|paymentType|string|true|none|The type of the payment of the corresponding salary and wages|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Pending|
|status|History|
|paymentType|Salary|
|paymentType|Hourly|

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
          "totalCourtOrders": 0,
          "totalBenefits": 0,
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
              "isAverageDailyPayRate": true
            }
          ],
          "leaveEarningsLines": [
            {
              "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "ratePerUnit": 0,
              "numberOfUnits": 0,
              "fixedAmount": 0,
              "amount": 0,
              "isLinkedToTimesheet": true
            }
          ],
          "timesheetEarningsLines": [
            {
              "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "ratePerUnit": 0,
              "numberOfUnits": 0,
              "fixedAmount": 0,
              "amount": 0,
              "isLinkedToTimesheet": true
            }
          ],
          "deductionLines": [
            {
              "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "amount": 0,
              "subjectToTax": true,
              "percentage": 0
            }
          ],
          "reimbursementLines": [
            {
              "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "description": "string",
              "amount": 0
            }
          ],
          "leaveAccrualLines": [
            {
              "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "numberOfUnits": 0
            }
          ],
          "benefitLines": [
            {
              "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "displayName": "string",
              "amount": 0,
              "fixedAmount": 0,
              "percentage": 0
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
              "isEmployerTax": true,
              "amount": 0,
              "globalTaxTypeID": "string",
              "manualAdjustment": true
            }
          ],
          "employerTaxLines": [
            {
              "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "description": "string",
              "isEmployerTax": true,
              "amount": 0,
              "globalTaxTypeID": "string",
              "manualAdjustment": true
            }
          ],
          "courtOrderLines": [
            {
              "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "amount": 0
            }
          ]
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
        "totalCourtOrders": 0,
        "totalBenefits": 0,
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
            "isAverageDailyPayRate": true
          }
        ],
        "leaveEarningsLines": [
          {
            "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "ratePerUnit": 0,
            "numberOfUnits": 0,
            "fixedAmount": 0,
            "amount": 0,
            "isLinkedToTimesheet": true
          }
        ],
        "timesheetEarningsLines": [
          {
            "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "ratePerUnit": 0,
            "numberOfUnits": 0,
            "fixedAmount": 0,
            "amount": 0,
            "isLinkedToTimesheet": true
          }
        ],
        "deductionLines": [
          {
            "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "amount": 0,
            "subjectToTax": true,
            "percentage": 0
          }
        ],
        "reimbursementLines": [
          {
            "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "description": "string",
            "amount": 0
          }
        ],
        "leaveAccrualLines": [
          {
            "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "numberOfUnits": 0
          }
        ],
        "benefitLines": [
          {
            "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "displayName": "string",
            "amount": 0,
            "fixedAmount": 0,
            "percentage": 0
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
            "isEmployerTax": true,
            "amount": 0,
            "globalTaxTypeID": "string",
            "manualAdjustment": true
          }
        ],
        "employerTaxLines": [
          {
            "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "description": "string",
            "isEmployerTax": true,
            "amount": 0,
            "globalTaxTypeID": "string",
            "manualAdjustment": true
          }
        ],
        "courtOrderLines": [
          {
            "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "amount": 0
          }
        ]
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
      "totalCourtOrders": 0,
      "totalBenefits": 0,
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
          "isAverageDailyPayRate": true
        }
      ],
      "leaveEarningsLines": [
        {
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true
        }
      ],
      "timesheetEarningsLines": [
        {
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true
        }
      ],
      "deductionLines": [
        {
          "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "subjectToTax": true,
          "percentage": 0
        }
      ],
      "reimbursementLines": [
        {
          "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0
        }
      ],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "numberOfUnits": 0
        }
      ],
      "benefitLines": [
        {
          "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "fixedAmount": 0,
          "percentage": 0
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
          "isEmployerTax": true,
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "isEmployerTax": true,
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "courtOrderLines": [
        {
          "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0
        }
      ]
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
|calendarType|string|false|none|Calendar type of the pay run|
|postedDateTime|string(date)|false|none|Posted date time of the pay run|
|paySlips|[[Payslip](#schemapayslip)]|false|none|none|

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

<h2 id="tocS_PayslipObject">PayslipObject</h2>
<!-- backwards compatibility -->
<a id="schemapayslipobject"></a>
<a id="schema_PayslipObject"></a>
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
    "totalCourtOrders": 0,
    "totalBenefits": 0,
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
        "isAverageDailyPayRate": true
      }
    ],
    "leaveEarningsLines": [
      {
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "amount": 0,
        "isLinkedToTimesheet": true
      }
    ],
    "timesheetEarningsLines": [
      {
        "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ratePerUnit": 0,
        "numberOfUnits": 0,
        "fixedAmount": 0,
        "amount": 0,
        "isLinkedToTimesheet": true
      }
    ],
    "deductionLines": [
      {
        "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "subjectToTax": true,
        "percentage": 0
      }
    ],
    "reimbursementLines": [
      {
        "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "amount": 0
      }
    ],
    "leaveAccrualLines": [
      {
        "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "numberOfUnits": 0
      }
    ],
    "benefitLines": [
      {
        "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "displayName": "string",
        "amount": 0,
        "fixedAmount": 0,
        "percentage": 0
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
        "isEmployerTax": true,
        "amount": 0,
        "globalTaxTypeID": "string",
        "manualAdjustment": true
      }
    ],
    "employerTaxLines": [
      {
        "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "isEmployerTax": true,
        "amount": 0,
        "globalTaxTypeID": "string",
        "manualAdjustment": true
      }
    ],
    "courtOrderLines": [
      {
        "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0
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
|paySlip|[Payslip](#schemapayslip)|false|none|none|

<h2 id="tocS_Payslips">Payslips</h2>
<!-- backwards compatibility -->
<a id="schemapayslips"></a>
<a id="schema_Payslips"></a>
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
      "totalCourtOrders": 0,
      "totalBenefits": 0,
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
          "isAverageDailyPayRate": true
        }
      ],
      "leaveEarningsLines": [
        {
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true
        }
      ],
      "timesheetEarningsLines": [
        {
          "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "ratePerUnit": 0,
          "numberOfUnits": 0,
          "fixedAmount": 0,
          "amount": 0,
          "isLinkedToTimesheet": true
        }
      ],
      "deductionLines": [
        {
          "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "subjectToTax": true,
          "percentage": 0
        }
      ],
      "reimbursementLines": [
        {
          "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "amount": 0
        }
      ],
      "leaveAccrualLines": [
        {
          "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "numberOfUnits": 0
        }
      ],
      "benefitLines": [
        {
          "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "displayName": "string",
          "amount": 0,
          "fixedAmount": 0,
          "percentage": 0
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
          "isEmployerTax": true,
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "employerTaxLines": [
        {
          "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "description": "string",
          "isEmployerTax": true,
          "amount": 0,
          "globalTaxTypeID": "string",
          "manualAdjustment": true
        }
      ],
      "courtOrderLines": [
        {
          "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0
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
|paySlips|[[Payslip](#schemapayslip)]|false|none|none|

<h2 id="tocS_Payslip">Payslip</h2>
<!-- backwards compatibility -->
<a id="schemapayslip"></a>
<a id="schema_Payslip"></a>
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
  "totalCourtOrders": 0,
  "totalBenefits": 0,
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
      "isAverageDailyPayRate": true
    }
  ],
  "leaveEarningsLines": [
    {
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "amount": 0,
      "isLinkedToTimesheet": true
    }
  ],
  "timesheetEarningsLines": [
    {
      "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ratePerUnit": 0,
      "numberOfUnits": 0,
      "fixedAmount": 0,
      "amount": 0,
      "isLinkedToTimesheet": true
    }
  ],
  "deductionLines": [
    {
      "deductionTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "subjectToTax": true,
      "percentage": 0
    }
  ],
  "reimbursementLines": [
    {
      "reimbursementTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "amount": 0
    }
  ],
  "leaveAccrualLines": [
    {
      "leaveTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfUnits": 0
    }
  ],
  "benefitLines": [
    {
      "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "displayName": "string",
      "amount": 0,
      "fixedAmount": 0,
      "percentage": 0
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
      "isEmployerTax": true,
      "amount": 0,
      "globalTaxTypeID": "string",
      "manualAdjustment": true
    }
  ],
  "employerTaxLines": [
    {
      "taxLineID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "isEmployerTax": true,
      "amount": 0,
      "globalTaxTypeID": "string",
      "manualAdjustment": true
    }
  ],
  "courtOrderLines": [
    {
      "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paySlipID|string(uuid)|false|none|The Xero identifier for a Payslip|
|employeeID|string(uuid)|false|none|The Xero identifier for payroll employee|
|payRunID|string(uuid)|false|none|The Xero identifier for the associated payrun|
|lastEdited|string(date)|false|none|The date payslip was last updated|
|firstName|string|false|none|Employee first name|
|lastName|string|false|none|Employee last name|
|totalEarnings|number(double)|false|none|Total earnings before any deductions. Same as gross earnings for UK.|
|grossEarnings|number(double)|false|none|Total earnings before any deductions. Same as total earnings for UK.|
|totalPay|number(double)|false|none|The employee net pay|
|totalEmployerTaxes|number(double)|false|none|The employer's tax obligation|
|totalEmployeeTaxes|number(double)|false|none|The part of an employee's earnings that is deducted for tax purposes|
|totalDeductions|number(double)|false|none|Total amount subtracted from an employee's earnings to reach total pay|
|totalReimbursements|number(double)|false|none|Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment|
|totalCourtOrders|number(double)|false|none|Total amounts required by law to subtract from the employee's earnings|
|totalBenefits|number(double)|false|none|Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries|
|bacsHash|string|false|none|BACS Service User Number|
|paymentMethod|string|false|none|The payment method code|
|earningsLines|[EarningsLines](#schemaearningslines)|false|none|none|
|leaveEarningsLines|[LeaveEarningsLines](#schemaleaveearningslines)|false|none|none|
|timesheetEarningsLines|[TimesheetEarningsLines](#schematimesheetearningslines)|false|none|none|
|deductionLines|[DeductionLines](#schemadeductionlines)|false|none|none|
|reimbursementLines|[ReimbursementLines](#schemareimbursementlines)|false|none|none|
|leaveAccrualLines|[LeaveAccrualLines](#schemaleaveaccruallines)|false|none|none|
|benefitLines|[BenefitLines](#schemabenefitlines)|false|none|none|
|paymentLines|[PaymentLines](#schemapaymentlines)|false|none|none|
|employeeTaxLines|[TaxLines](#schemataxlines)|false|none|none|
|employerTaxLines|[TaxLines](#schemataxlines)|false|none|none|
|courtOrderLines|[CourtOrderLines](#schemacourtorderlines)|false|none|none|

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
    "isAverageDailyPayRate": true
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
  "isAverageDailyPayRate": true
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

<h2 id="tocS_LeaveEarningsLines">LeaveEarningsLines</h2>
<!-- backwards compatibility -->
<a id="schemaleaveearningslines"></a>
<a id="schema_LeaveEarningsLines"></a>
<a id="tocSleaveearningslines"></a>
<a id="tocsleaveearningslines"></a>

```json
[
  {
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "amount": 0,
    "isLinkedToTimesheet": true
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
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "amount": 0,
  "isLinkedToTimesheet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsRateID|string(uuid)|false|none|Xero identifier for payroll leave earnings rate|
|ratePerUnit|number(double)|false|none|Rate per unit for leave earnings line|
|numberOfUnits|number(double)|false|none|Leave earnings number of units|
|fixedAmount|number(double)|false|none|Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed|
|amount|number(double)|false|none|The amount of the earnings line.|
|isLinkedToTimesheet|boolean|false|none|Identifies if the leave earnings is taken from the timesheet. False for leave earnings line|

<h2 id="tocS_TimesheetEarningsLines">TimesheetEarningsLines</h2>
<!-- backwards compatibility -->
<a id="schematimesheetearningslines"></a>
<a id="schema_TimesheetEarningsLines"></a>
<a id="tocStimesheetearningslines"></a>
<a id="tocstimesheetearningslines"></a>

```json
[
  {
    "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ratePerUnit": 0,
    "numberOfUnits": 0,
    "fixedAmount": 0,
    "amount": 0,
    "isLinkedToTimesheet": true
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
  "earningsRateID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePerUnit": 0,
  "numberOfUnits": 0,
  "fixedAmount": 0,
  "amount": 0,
  "isLinkedToTimesheet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earningsRateID|string(uuid)|false|none|Xero identifier for payroll timesheet earnings rate|
|ratePerUnit|number(double)|false|none|Rate per unit for timesheet earnings line|
|numberOfUnits|number(double)|false|none|Timesheet earnings number of units|
|fixedAmount|number(double)|false|none|Timesheet earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed|
|amount|number(double)|false|none|The amount of the timesheet earnings line.|
|isLinkedToTimesheet|boolean|false|none|Identifies if the timesheet earnings is taken from the timesheet. False for leave earnings line|

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
  "amount": 0,
  "subjectToTax": true,
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deductionTypeID|string(uuid)|false|none|Xero identifier for payroll deduction|
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
    "amount": 0
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
  "amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reimbursementTypeID|string(uuid)|false|none|Xero identifier for payroll reimbursement|
|description|string|false|none|Reimbursement line description|
|amount|number(double)|false|none|Reimbursement amount|

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

<h2 id="tocS_BenefitLines">BenefitLines</h2>
<!-- backwards compatibility -->
<a id="schemabenefitlines"></a>
<a id="schema_BenefitLines"></a>
<a id="tocSbenefitlines"></a>
<a id="tocsbenefitlines"></a>

```json
[
  {
    "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "displayName": "string",
    "amount": 0,
    "fixedAmount": 0,
    "percentage": 0
  }
]
```

<h2 id="tocS_BenefitLine">BenefitLine</h2>
<!-- backwards compatibility -->
<a id="schemabenefitline"></a>
<a id="schema_BenefitLine"></a>
<a id="tocSbenefitline"></a>
<a id="tocsbenefitline"></a>

```json
{
  "benefitTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "displayName": "string",
  "amount": 0,
  "fixedAmount": 0,
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitTypeID|string(uuid)|false|none|Xero identifier for payroll benefit type|
|displayName|string|false|none|Benefit display name|
|amount|number(double)|false|none|The amount of the benefit line.|
|fixedAmount|number(double)|false|none|Benefit fixed amount|
|percentage|number(double)|false|none|Benefit rate percentage|

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
    "isEmployerTax": true,
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
  "isEmployerTax": true,
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
|isEmployerTax|boolean|false|none|Identifies if the amount is paid for by the employee or employer. True if employer pays the tax|
|amount|number(double)|false|none|The amount of the tax line|
|globalTaxTypeID|string|false|none|Tax type ID|
|manualAdjustment|boolean|false|none|Identifies if the tax line is a manual adjustment|

<h2 id="tocS_CourtOrderLines">CourtOrderLines</h2>
<!-- backwards compatibility -->
<a id="schemacourtorderlines"></a>
<a id="schema_CourtOrderLines"></a>
<a id="tocScourtorderlines"></a>
<a id="tocscourtorderlines"></a>

```json
[
  {
    "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0
  }
]
```

<h2 id="tocS_CourtOrderLine">CourtOrderLine</h2>
<!-- backwards compatibility -->
<a id="schemacourtorderline"></a>
<a id="schema_CourtOrderLine"></a>
<a id="tocScourtorderline"></a>
<a id="tocscourtorderline"></a>

```json
{
  "courtOrderTypeID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courtOrderTypeID|string(uuid)|false|none|Xero identifier for payroll court order type|
|amount|number(double)|false|none|Amount|

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
        "type": "BANK",
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
      "type": "BANK",
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
  "type": "BANK",
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
|type|BANK|
|type|EMPLOYERSNIC|
|type|NICLIABILITY|
|type|PAYEECONTRIBUTION|
|type|PAYELIABILITY|
|type|WAGESPAYABLE|
|type|WAGESEXPENSE|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "addressLine1": "123 Main St",
  "addressLine2": "Apt 4",
  "city": "Fulham",
  "postCode": "SW6 6EY",
  "countryName": "United Kingdom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|true|none|Address line 1 for employee home address|
|addressLine2|string|false|none|Address line 2 for employee home address|
|city|string|true|none|Suburb for employee home address|
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
    "sortCode": "string"
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
  "sortCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|Bank account name (max length = 32)|
|accountNumber|string|true|none|Bank account number (digits only; max length = 8)|
|sortCode|string|true|none|Bank account sort code (6 digits)|

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

<h2 id="tocS_NICategoryLetter">NICategoryLetter</h2>
<!-- backwards compatibility -->
<a id="schemanicategoryletter"></a>
<a id="schema_NICategoryLetter"></a>
<a id="tocSnicategoryletter"></a>
<a id="tocsnicategoryletter"></a>

```json
"I"
```

The employee's NI Category letter.

<h2 id="tocS_NICategory">NICategory</h2>
<!-- backwards compatibility -->
<a id="schemanicategory"></a>
<a id="schema_NICategory"></a>
<a id="tocSnicategory"></a>
<a id="tocsnicategory"></a>

```json
{
  "niCategory": "I",
  "startDate": "2024-12-02",
  "niCategoryID": 15,
  "dateFirstEmployedAsCivilian": "2024-12-02",
  "workplacePostcode": "SW1A 1AA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|The start date of the NI category (YYYY-MM-DD)|
|niCategory|[NICategoryLetter](#schemanicategoryletter)|true|none|The employee's NI Category letter.|
|niCategoryID|number|false|none|Xero unique identifier for the NI category|
|dateFirstEmployedAsCivilian|string(date)|false|none|The date in which the employee was first employed as a civilian (YYYY-MM-DD)|
|workplacePostcode|string|true|none|The workplace postcode|
|*oneOf*|object|false|none|none|
|niCategory|string|true|none|none|
|*oneOf*|object|false|none|none|
|niCategory|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|niCategory|A|
|niCategory|B|
|niCategory|C|
|niCategory|F|
|niCategory|H|
|niCategory|I|
|niCategory|J|
|niCategory|L|
|niCategory|M|
|niCategory|S|
|niCategory|V|
|niCategory|X|
|niCategory|Z|
|niCategory|D|
|niCategory|E|
|niCategory|K|
|niCategory|N|
|niCategory|F|
|niCategory|I|
|niCategory|L|
|niCategory|S|
|niCategory|N|
|niCategory|E|
|niCategory|D|
|niCategory|K|
|niCategory|V|

<h2 id="tocS_EmploymentStatus">EmploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaemploymentstatus"></a>
<a id="schema_EmploymentStatus"></a>
<a id="tocSemploymentstatus"></a>
<a id="tocsemploymentstatus"></a>

```json
"Employee"
```

The employment status of the employee.

<h2 id="tocS_ContractType">ContractType</h2>
<!-- backwards compatibility -->
<a id="schemacontracttype"></a>
<a id="schema_ContractType"></a>
<a id="tocScontracttype"></a>
<a id="tocscontracttype"></a>

```json
"FullTime"
```

The contract type of the employee.

<h2 id="tocS_DevelopmentalRoleDetails">DevelopmentalRoleDetails</h2>
<!-- backwards compatibility -->
<a id="schemadevelopmentalroledetails"></a>
<a id="schema_DevelopmentalRoleDetails"></a>
<a id="tocSdevelopmentalroledetails"></a>
<a id="tocsdevelopmentalroledetails"></a>

```json
{
  "startDate": "2024-12-02",
  "endDate": "2024-12-02",
  "developmentalRole": "Apprentice",
  "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|true|none|The start date of the developmental role|
|endDate|string(date)|true|none|The end date of the developmental role|
|developmentalRole|string|true|none|The developmental role type - "Apprentice" is the only supported role currently|
|publicKey|string(uuid)|false|none|The public key of the developmental role. Public key is required if the intention is to edit an existing developmental role. If no key is supplied a new developmental role will be created|

<h2 id="tocS_Contracts">Contracts</h2>
<!-- backwards compatibility -->
<a id="schemacontracts"></a>
<a id="schema_Contracts"></a>
<a id="tocScontracts"></a>
<a id="tocscontracts"></a>

```json
{
  "startDate": "2024-12-02",
  "employmentStatus": "Employee",
  "contractType": "FullTime",
  "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isFixedTerm": true,
  "fixedTermEndDate": "2025-11-01",
  "developmentalRoleDetails": {
    "startDate": "2024-12-02",
    "endDate": "2024-12-02",
    "developmentalRole": "Apprentice",
    "publicKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|true|none|The contract start date of the employee. This will be locked once an employee has been paid and cannot be changed (YYYY-MM-DD)|
|employmentStatus|[EmploymentStatus](#schemaemploymentstatus)|true|none|The employment status of the employee.|
|contractType|[ContractType](#schemacontracttype)|true|none|The contract type of the employee.|
|publicKey|string(uuid)|false|none|The public key of the contract. Public key is required if the intention is to edit an existing contract. If no key is supplied a new contract will be created|
|isFixedTerm|boolean|false|none|describes whether the contract is fixed term (required if trying to create Fixed term contract)|
|fixedTermEndDate|string(date)|false|none|The fixed term end date of the employee. Not required if isFixedTerm is false or not provided (required if trying to create Fixed term contract)|
|developmentalRoleDetails|[DevelopmentalRoleDetails](#schemadevelopmentalroledetails)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|employmentStatus|Employee|
|employmentStatus|Worker|
|employmentStatus|Unspecified|
|employmentStatus|OffPayrollWorker|
|contractType|FullTime|
|contractType|PartTime|
|contractType|ZeroHour|
|contractType|Unspecified|
