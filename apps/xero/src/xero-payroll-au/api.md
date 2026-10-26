<h1 id="xero-payroll-au-api">Xero Payroll AU API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Xero Payroll API for orgs in Australia region.

Base URLs:

* <a href="https://api.xero.com/payroll.xro/1.0">https://api.xero.com/payroll.xro/1.0</a> - Xero Payroll AU API

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information visit https://developer.xero.com/documentation/oauth2/overview

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
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

<h1 id="xero-payroll-au-api-payrollau">PayrollAu</h1>

Operations available to regular developers

## Searches payroll employees

<a id="opIdgetEmployees"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Employees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees`

<h3 id="searches-payroll-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 employees will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573621523465)/",
  "Employees": [
    {
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "FirstName": "Jack",
      "MiddleNames": "Johnson",
      "LastName": "Sparrow",
      "Status": "ACTIVE",
      "Email": "jack.sparrow@xero.com",
      "DateOfBirth": "/Date(572313600000+0000)/",
      "Gender": "M",
      "Phone": "4153332323",
      "Mobile": "415-1234567",
      "StartDate": "/Date(1547164800000+0000)/",
      "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
      "PayrollCalendarID": "22a05fc5-386d-4950-9842-3e7a6c812135",
      "UpdatedDateUTC": "/Date(1572915814000+0000)/",
      "IsSTP2Qualified": false
    },
    {
      "EmployeeID": "7aa04979-ded5-44d9-b09a-793749425844",
      "FirstName": "John",
      "LastName": "Smith",
      "Status": "ACTIVE",
      "Email": "john.smith@xero.com",
      "DateOfBirth": "/Date(315619200000+0000)/",
      "Gender": "M",
      "StartDate": "/Date(1572566400000+0000)/",
      "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "UpdatedDateUTC": "/Date(1572916028000+0000)/",
      "IsSTP2Qualified": false
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="searches-payroll-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Employees](#schemaemployees)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates a payroll employee

<a id="opIdcreateEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"FirstName\": \"Albus\", \"LastName\": \"Dumbledore\", \"DateOfBirth\": \"/Date(321523200000+0000)/\", \"HomeAddress\": { \"AddressLine1\": \"101 Green St\", \"City\": \"Island Bay\", \"Region\": \"NSW\", \"PostalCode\": \"6023\", \"Country\": \"AUSTRALIA\" }, \"StartDate\": \"/Date(321523200000+0000)/\", \"MiddleNames\": \"Percival\", \"Email\": \"albus39608@hogwarts.edu\", \"Gender\": \"M\", \"Phone\": \"444-2323\", \"Mobile\": \"555-1212\", \"IsAuthorisedToApproveLeave\": true, \"IsAuthorisedToApproveTimesheets\": true, \"JobTitle\": \"Regional Manager\", \"Classification\": \"corporate\", \"OrdinaryEarningsRateID\": \"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"Status\": \"ACTIVE\" } ]"'
```

`POST /Employees`

> Body parameter

```json
"[ { \"FirstName\": \"Albus\", \"LastName\": \"Dumbledore\", \"DateOfBirth\": \"/Date(321523200000+0000)/\", \"HomeAddress\": { \"AddressLine1\": \"101 Green St\", \"City\": \"Island Bay\", \"Region\": \"NSW\", \"PostalCode\": \"6023\", \"Country\": \"AUSTRALIA\" }, \"StartDate\": \"/Date(321523200000+0000)/\", \"MiddleNames\": \"Percival\", \"Email\": \"albus39608@hogwarts.edu\", \"Gender\": \"M\", \"Phone\": \"444-2323\", \"Mobile\": \"555-1212\", \"IsAuthorisedToApproveLeave\": true, \"IsAuthorisedToApproveTimesheets\": true, \"JobTitle\": \"Regional Manager\", \"Classification\": \"corporate\", \"OrdinaryEarningsRateID\": \"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"Status\": \"ACTIVE\" } ]"
```

<h3 id="creates-a-payroll-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[Employee](#schemaemployee)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573621524489)/",
  "Employees": [
    {
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "FirstName": "Albus",
      "MiddleNames": "Percival",
      "LastName": "Dumbledore",
      "Status": "ACTIVE",
      "Email": "albus39608@hogwarts.edu",
      "DateOfBirth": "/Date(321523200000+0000)/",
      "JobTitle": "Regional Manager",
      "Gender": "M",
      "HomeAddress": {
        "AddressLine1": "101 Green St",
        "City": "Island Bay",
        "Region": "NSW",
        "PostalCode": "6023",
        "Country": "AUSTRALIA"
      },
      "Phone": "444-2323",
      "Mobile": "555-1212",
      "StartDate": "/Date(321523200000+0000)/",
      "Classification": "corporate",
      "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
      "UpdatedDateUTC": "/Date(1573621524458+0000)/",
      "IsAuthorisedToApproveLeave": true,
      "IsAuthorisedToApproveTimesheets": true
    }
  ]
}
```

<h3 id="creates-a-payroll-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[Employees](#schemaemployees)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves an employee's detail by unique employee id

<a id="opIdgetEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Employees/{EmployeeID}`

<h3 id="retrieves-an-employees-detail-by-unique-employee-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573623316150)/",
  "Employees": [
    {
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "Title": "Mr.",
      "FirstName": "Albus",
      "MiddleNames": "Frank",
      "LastName": "Dumbledore",
      "Status": "ACTIVE",
      "Email": "albus39608@hogwarts.edu",
      "DateOfBirth": "/Date(321494400000+0000)/",
      "JobTitle": "Regional Manager",
      "Gender": "M",
      "HomeAddress": {
        "AddressLine1": "101 Green St",
        "City": "Island Bay",
        "Region": "NSW",
        "PostalCode": "6023",
        "Country": "AUSTRALIA"
      },
      "Phone": "444-2323",
      "Mobile": "555-1212",
      "StartDate": "/Date(321494400000+0000)/",
      "Classification": "corporate",
      "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "UpdatedDateUTC": "/Date(1573623306000+0000)/",
      "EmployeeGroupName": "foo",
      "IsAuthorisedToApproveLeave": true,
      "IsAuthorisedToApproveTimesheets": true,
      "TaxDeclaration": {
        "AustralianResidentForTaxPurposes": true,
        "TaxFreeThresholdClaimed": true,
        "HasHELPDebt": false,
        "HasSFSSDebt": false,
        "EligibleToReceiveLeaveLoading": false,
        "UpdatedDateUTC": "/Date(1573623306000+0000)/",
        "HasStudentStartupLoan": false,
        "ResidencyStatus": "AUSTRALIANRESIDENT",
        "IncludeLeaveLoadingInQualifyingEarnings": false
      },
      "BankAccounts": [],
      "OpeningBalances": {
        "OpeningBalanceDate": "/Date(1573603200000+0000)/",
        "EarningsLines": [],
        "DeductionLines": [],
        "SuperLines": [],
        "ReimbursementLines": [],
        "LeaveLines": [
          {
            "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
            "NumberOfUnits": 10
          }
        ],
        "PaidLeaveEarningsLines": []
      },
      "PayTemplate": {
        "EarningsLines": [
          {
            "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
            "CalculationType": "USEEARNINGSRATE",
            "NormalNumberOfUnits": 3
          }
        ],
        "DeductionLines": [
          {
            "DeductionTypeID": "ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938",
            "CalculationType": "FIXEDAMOUNT",
            "Amount": 4
          }
        ],
        "SuperLines": [
          {
            "ContributionType": "SGC",
            "CalculationType": "STATUTORY",
            "MinimumMonthlyEarnings": 450,
            "ExpenseAccountCode": "478",
            "LiabilityAccountCode": "826"
          }
        ],
        "ReimbursementLines": [
          {
            "ReimbursementTypeID": "aa8cfa40-d872-4be0-8a94-bb7f00962f74",
            "Description": "boo",
            "Amount": 55
          }
        ],
        "LeaveLines": [
          {
            "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
            "CalculationType": "FIXEDAMOUNTEACHPERIOD",
            "AnnualNumberOfUnits": 4,
            "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
            "IsQualifyingEarnings": false
          }
        ]
      },
      "SuperMemberships": [],
      "LeaveBalances": [
        {
          "LeaveName": "Carer Leave (unpaid)",
          "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
          "NumberOfUnits": 10,
          "TypeOfUnits": "Hours"
        }
      ]
    }
  ]
}
```

<h3 id="retrieves-an-employees-detail-by-unique-employee-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Employees](#schemaemployees)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates an employee's detail

<a id="opIdupdateEmployee"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Employees/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"MiddleNames\": \"Frank\" } ]"'
```

`POST /Employees/{EmployeeID}`

Update properties on a single employee

> Body parameter

```json
"[ { \"MiddleNames\": \"Frank\" } ]"
```

<h3 id="updates-an-employees-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|EmployeeID|path|string(uuid)|true|Employee id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[Employee](#schemaemployee)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "3f93110a-df13-49c7-b82f-a069813df188",
  "DateTimeUTC": "/Date(1573621524786)/",
  "Employees": [
    {
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "FirstName": "Albus",
      "MiddleNames": "Frank",
      "LastName": "Dumbledore",
      "Status": "ACTIVE",
      "Email": "albus39608@hogwarts.edu",
      "DateOfBirth": "/Date(321523200000+0000)/",
      "JobTitle": "Regional Manager",
      "Gender": "M",
      "HomeAddress": {
        "AddressLine1": "101 Green St",
        "City": "Island Bay",
        "Region": "NSW",
        "PostalCode": "6023",
        "Country": "AUSTRALIA"
      },
      "Phone": "444-2323",
      "Mobile": "555-1212",
      "StartDate": "/Date(321523200000+0000)/",
      "Classification": "corporate",
      "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
      "UpdatedDateUTC": "/Date(1573621524755+0000)/",
      "IsAuthorisedToApproveLeave": true,
      "IsAuthorisedToApproveTimesheets": true
    }
  ]
}
```

<h3 id="updates-an-employees-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[Employees](#schemaemployees)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves leave applications

<a id="opIdgetLeaveApplications"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /LeaveApplications`

<h3 id="retrieves-leave-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 objects will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791199)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 0
        }
      ],
      "Title": "vacation",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    },
    {
      "LeaveApplicationID": "3b934902-1e16-4c02-a3d3-68fa7d63e01d",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 8
        }
      ],
      "Title": "Cashed Out",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "CASHED_OUT"
    },
    {
      "LeaveApplicationID": "62b90465-66e9-4c3a-8151-de1e6335554d",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1571961600000+0000)/",
          "PayPeriodEndDate": "/Date(1572480000000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 0
        },
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 0
        }
      ],
      "Title": "Yep Carer Leave",
      "Description": "My updated Description",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573447344000+0000)/",
      "PayOutType": "DEFAULT"
    },
    {
      "LeaveApplicationID": "e8bd9eeb-18c9-4475-9c81-b298f9aa26c0",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1571961600000+0000)/",
          "PayPeriodEndDate": "/Date(1572480000000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 0
        },
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 0
        }
      ],
      "Title": "Hello World",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573447343000+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-leave-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Creates a leave application

<a id="opIdcreateLeaveApplication"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"EmployeeID\": \"cdfb8371-0b21-4b8a-8903-1024df6c391e\", \"LeaveTypeID\": \"184ea8f7-d143-46dd-bef3-0c60e1aa6fca\", \"Title\": \"Hello World\", \"StartDate\": \"/Date(1572559200000+0000)/\", \"EndDate\": \"/Date(1572645600000+0000)/\" } ]"'
```

`POST /LeaveApplications`

> Body parameter

```json
"[ { \"EmployeeID\": \"cdfb8371-0b21-4b8a-8903-1024df6c391e\", \"LeaveTypeID\": \"184ea8f7-d143-46dd-bef3-0c60e1aa6fca\", \"Title\": \"Hello World\", \"StartDate\": \"/Date(1572559200000+0000)/\", \"EndDate\": \"/Date(1572645600000+0000)/\" } ]"
```

<h3 id="creates-a-leave-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[LeaveApplication](#schemaleaveapplication)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791917)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "5f7097e4-51f2-46cc-921b-45bc73ea7831",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 7.6
        }
      ],
      "Title": "Hello World",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573679791897+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

<h3 id="creates-a-leave-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves leave applications including leave requests

<a id="opIdgetLeaveApplicationsV2"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications/v2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /LeaveApplications/v2`

<h3 id="retrieves-leave-applications-including-leave-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 objects will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791199)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "REQUESTED",
          "NumberOfUnits": 4
        }
      ],
      "Title": "vacation",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    },
    {
      "LeaveApplicationID": "3b934902-1e16-4c02-a3d3-68fa7d63e01d",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 8
        }
      ],
      "Title": "Cashed Out",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "CASHED_OUT"
    },
    {
      "LeaveApplicationID": "62b90465-66e9-4c3a-8151-de1e6335554d",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1571961600000+0000)/",
          "PayPeriodEndDate": "/Date(1572480000000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 8
        },
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 8
        }
      ],
      "Title": "Yep Carer Leave",
      "Description": "My updated Description",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573447344000+0000)/",
      "PayOutType": "DEFAULT"
    },
    {
      "LeaveApplicationID": "e8bd9eeb-18c9-4475-9c81-b298f9aa26c0",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1571961600000+0000)/",
          "PayPeriodEndDate": "/Date(1572480000000+0000)/",
          "LeavePeriodStatus": "PROCESSED",
          "NumberOfUnits": 8
        },
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 8
        }
      ],
      "Title": "Hello World",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573447343000+0000)/",
      "PayOutType": "DEFAULT"
    },
    {
      "LeaveApplicationID": "3f93110a-df13-49c7-b82f-a069813df188",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "REJECTED",
          "NumberOfUnits": 8
        }
      ],
      "Title": "vacation",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-leave-applications-including-leave-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Retrieves a leave application by a unique leave application id

<a id="opIdgetLeaveApplication"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /LeaveApplications/{LeaveApplicationID}`

<h3 id="retrieves-a-leave-application-by-a-unique-leave-application-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LeaveApplicationID|path|string(uuid)|true|Leave Application id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791457)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 7.6
        }
      ],
      "Title": "vacation",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

<h3 id="retrieves-a-leave-application-by-a-unique-leave-application-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[LeaveApplications](#schemaleaveapplications)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees payroll.employees.read )
</aside>

## Updates a specific leave application

<a id="opIdupdateLeaveApplication"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"EmployeeID\": \"cdfb8371-0b21-4b8a-8903-1024df6c391e\", \"LeaveApplicationID\": \"1d4cd583-0107-4386-936b-672eb3d1f624\", \"LeaveTypeID\": \"184ea8f7-d143-46dd-bef3-0c60e1aa6fca\", \"LeavePeriods\": [ { \"PayPeriodStartDate\": \"/Date(1572566400000+0000)/\", \"PayPeriodEndDate\": \"/Date(1573084800000+0000)/\", \"LeavePeriodStatus\": \"SCHEDULED\", \"NumberOfUnits\": 7.6 } ], \"Title\": \"vacation\", \"Description\": \"My updated Description\", \"StartDate\": \"/Date(1572559200000+0000)/\", \"EndDate\": \"/Date(1572645600000+0000)/\", \"PayOutType\": \"DEFAULT\" } ]"'
```

`POST /LeaveApplications/{LeaveApplicationID}`

> Body parameter

```json
"[ { \"EmployeeID\": \"cdfb8371-0b21-4b8a-8903-1024df6c391e\", \"LeaveApplicationID\": \"1d4cd583-0107-4386-936b-672eb3d1f624\", \"LeaveTypeID\": \"184ea8f7-d143-46dd-bef3-0c60e1aa6fca\", \"LeavePeriods\": [ { \"PayPeriodStartDate\": \"/Date(1572566400000+0000)/\", \"PayPeriodEndDate\": \"/Date(1573084800000+0000)/\", \"LeavePeriodStatus\": \"SCHEDULED\", \"NumberOfUnits\": 7.6 } ], \"Title\": \"vacation\", \"Description\": \"My updated Description\", \"StartDate\": \"/Date(1572559200000+0000)/\", \"EndDate\": \"/Date(1572645600000+0000)/\", \"PayOutType\": \"DEFAULT\" } ]"
```

<h3 id="updates-a-specific-leave-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|LeaveApplicationID|path|string(uuid)|true|Leave Application id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[LeaveApplication](#schemaleaveapplication)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "3f93110a-df13-49c7-b82f-a069813df188",
  "DateTimeUTC": "/Date(1573679792293)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1572566400000+0000)/",
          "PayPeriodEndDate": "/Date(1573084800000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 7.6
        }
      ],
      "Title": "vacation",
      "Description": "My updated Description",
      "StartDate": "/Date(1572559200000+0000)/",
      "EndDate": "/Date(1572645600000+0000)/",
      "UpdatedDateUTC": "/Date(1573679792293+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

<h3 id="updates-a-specific-leave-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Approve a requested leave application by a unique leave application id

<a id="opIdapproveLeaveApplication"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`POST /LeaveApplications/{LeaveApplicationID}/approve`

<h3 id="approve-a-requested-leave-application-by-a-unique-leave-application-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|LeaveApplicationID|path|string(uuid)|true|Leave Application id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791457)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "SCHEDULED",
          "NumberOfUnits": 7.6
        }
      ],
      "Title": "Requested Leave",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="approve-a-requested-leave-application-by-a-unique-leave-application-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Application successfully approved|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Reject a leave application by a unique leave application id

<a id="opIdrejectLeaveApplication"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/LeaveApplications/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`POST /LeaveApplications/{LeaveApplicationID}/reject`

<h3 id="reject-a-leave-application-by-a-unique-leave-application-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|LeaveApplicationID|path|string(uuid)|true|Leave Application id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573679791457)/",
  "LeaveApplications": [
    {
      "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624",
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
      "LeavePeriods": [
        {
          "PayPeriodStartDate": "/Date(1573171200000+0000)/",
          "PayPeriodEndDate": "/Date(1573689600000+0000)/",
          "LeavePeriodStatus": "REJECTED",
          "NumberOfUnits": 7.6
        }
      ],
      "Title": "Requested Leave",
      "StartDate": "/Date(1573516800000+0000)/",
      "EndDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1573623008000+0000)/",
      "PayOutType": "DEFAULT"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="reject-a-leave-application-by-a-unique-leave-application-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Application successfully rejected|[LeaveApplications](#schemaleaveapplications)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.employees )
</aside>

## Retrieves pay items

<a id="opIdgetPayItems"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayItems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayItems`

<h3 id="retrieves-pay-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 objects will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573620869531)/",
  "PayItems": {
    "EarningsRates": [
      {
        "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
        "Name": "Ordinary Hours",
        "EarningsType": "ORDINARYTIMEEARNINGS",
        "RateType": "RATEPERUNIT",
        "AccountCode": "477",
        "TypeOfUnits": "Hours",
        "RatePerUnit": 3,
        "IsExemptFromTax": false,
        "IsExemptFromSuper": false,
        "IsReportableAsW1": false,
        "IsQualifyingEarnings": true,
        "AllowanceContributesToAnnualLeaveRate": true,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1573620821000+0000)/",
        "CurrentRecord": true
      },
      {
        "EarningsRateID": "dc3ff92e-0e49-4967-aa4b-0bb21c0594ce",
        "Name": "Overtime Hours (exempt from super)",
        "EarningsType": "OVERTIMEEARNINGS",
        "RateType": "RATEPERUNIT",
        "AccountCode": "477",
        "TypeOfUnits": "Hours",
        "IsExemptFromTax": false,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": false,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      },
      {
        "EarningsRateID": "f59999ca-cd5c-4a54-a381-2d0c817f0c3e",
        "Name": "Redundancy",
        "EarningsType": "LUMPSUMD",
        "RateType": "FIXEDAMOUNT",
        "AccountCode": "477",
        "IsExemptFromTax": true,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": true,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      },
      {
        "EarningsRateID": "c97dafac-9d99-406f-9f6c-abfaf81c527d",
        "Name": "ETP Leave Earning",
        "EarningsType": "EMPLOYMENTTERMINATIONPAYMENT",
        "RateType": "RATEPERUNIT",
        "AccountCode": "477",
        "TypeOfUnits": "Hours",
        "IsExemptFromTax": false,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": true,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1573620791000+0000)/",
        "EmploymentTerminationPaymentType": "O",
        "CurrentRecord": true
      }
    ],
    "DeductionTypes": [
      {
        "DeductionTypeID": "727af5e8-b347-4ae7-85fc-9b82266d0aec",
        "DeductionCategory": "UNIONFEES",
        "Name": "Union Fees/Subscriptions",
        "AccountCode": "850",
        "ReducesTax": false,
        "ReducesSuper": false,
        "IsExemptFromW1": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      },
      {
        "DeductionTypeID": "04191cd3-7952-4a87-9911-9d8575280f6a",
        "DeductionCategory": "NONE",
        "Name": "Lease Payments",
        "AccountCode": "850",
        "ReducesTax": true,
        "ReducesSuper": true,
        "IsExemptFromW1": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      }
    ],
    "ReimbursementTypes": [
      {
        "ReimbursementTypeID": "98ba33b2-db5b-4204-bcac-5ddd98d63524",
        "Name": "Travel Costs",
        "AccountCode": "850",
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      },
      {
        "ReimbursementTypeID": "aa8cfa40-d872-4be0-8a94-bb7f00962f74",
        "Name": "Other Reimbursable Costs",
        "AccountCode": "850",
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true
      }
    ],
    "LeaveTypes": [
      {
        "LeaveTypeID": "fbcc9dab-6238-43d9-a3f4-d768423fdcfa",
        "Name": "Annual Leave",
        "TypeOfUnits": "Hours",
        "NormalEntitlement": 152,
        "LeaveLoadingRate": 1,
        "IsPaidLeave": true,
        "ShowOnPayslip": true,
        "UpdatedDateUTC": "/Date(1573620853000+0000)/",
        "CurrentRecord": true,
        "SGCExempt": false,
        "IsQualifyingEarnings": true
      },
      {
        "LeaveTypeID": "74195ab2-1f2b-4136-8ddc-20387a0b1027",
        "Name": "Long Service Leave",
        "TypeOfUnits": "Hours",
        "IsPaidLeave": true,
        "ShowOnPayslip": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true,
        "SGCExempt": false,
        "IsQualifyingEarnings": true
      },
      {
        "LeaveTypeID": "ff4d16da-ae8a-4f57-acb3-9ee593996bce",
        "Name": "Parental Leave (unpaid)",
        "TypeOfUnits": "Hours",
        "IsPaidLeave": false,
        "ShowOnPayslip": false,
        "UpdatedDateUTC": "/Date(1547500330000+0000)/",
        "CurrentRecord": true,
        "SGCExempt": false,
        "IsQualifyingEarnings": false
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-pay-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayItems](#schemapayitems)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a pay item

<a id="opIdcreatePayItem"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "EarningsRates": [
      {
        "Name": "MyRate",
        "AccountCode": "400",
        "TypeOfUnits": "4.00",
        "IsExemptFromTax": false,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": false,
        "IsQualifyingEarnings": true,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "EarningsType": "ORDINARYTIMEEARNINGS",
        "EarningsRateID": "1fa4e226-b711-46ba-a8a7-4344c9c5fb87",
        "RateType": "MULTIPLE",
        "RatePerUnit": "10.0",
        "Multiplier": 1.5,
        "Amount": 5,
        "EmploymentTerminationPaymentType": "O"
      }
    ]
  }'
```

`POST /PayItems`

> Body parameter

```json
{
  "EarningsRates": [
    {
      "Name": "MyRate",
      "AccountCode": "400",
      "TypeOfUnits": "4.00",
      "IsExemptFromTax": false,
      "IsExemptFromSuper": true,
      "IsReportableAsW1": false,
      "IsQualifyingEarnings": true,
      "AllowanceContributesToAnnualLeaveRate": false,
      "AllowanceContributesToOvertimeRate": false,
      "EarningsType": "ORDINARYTIMEEARNINGS",
      "EarningsRateID": "1fa4e226-b711-46ba-a8a7-4344c9c5fb87",
      "RateType": "MULTIPLE",
      "RatePerUnit": "10.0",
      "Multiplier": 1.5,
      "Amount": 5,
      "EmploymentTerminationPaymentType": "O"
    }
  ]
}
```

<h3 id="creates-a-pay-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[PayItem](#schemapayitem)|true|none|
|» EarningsRates|body|[[EarningsRate](#schemaearningsrate)]|false|none|
|» DeductionTypes|body|[[DeductionType](#schemadeductiontype)]|false|none|
|» LeaveTypes|body|[[LeaveType](#schemaleavetype)]|false|none|
|» ReimbursementTypes|body|[[ReimbursementType](#schemareimbursementtype)]|false|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1593448963288)/",
  "PayItems": {
    "EarningsRates": [
      {
        "EarningsRateID": "1fa4e226-b711-46ba-a8a7-4344c9c5fb87",
        "Name": "MyRate",
        "EarningsType": "ORDINARYTIMEEARNINGS",
        "RateType": "MULTIPLE",
        "AccountCode": "400",
        "Multiplier": 1.5,
        "IsExemptFromTax": true,
        "IsExemptFromSuper": true,
        "AccrueLeave": false,
        "IsReportableAsW1": false,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1593448963210+0000)/",
        "CurrentRecord": true
      },
      {
        "EarningsRateID": "c6905c26-0716-4746-9098-608545e04dd2",
        "Name": "Redundancy",
        "EarningsType": "LUMPSUMD",
        "RateType": "FIXEDAMOUNT",
        "AccountCode": "477",
        "IsExemptFromTax": true,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": true,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1476729649000+0000)/",
        "CurrentRecord": true
      },
      {
        "EarningsRateID": "33820094-656e-4db3-b04b-8bd3e2db0a9b",
        "Name": "ETP Leave Earning",
        "EarningsType": "EMPLOYMENTTERMINATIONPAYMENT",
        "RateType": "RATEPERUNIT",
        "AccountCode": "477",
        "TypeOfUnits": "Hours",
        "IsExemptFromTax": false,
        "IsExemptFromSuper": true,
        "IsReportableAsW1": true,
        "IsQualifyingEarnings": false,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "UpdatedDateUTC": "/Date(1520900705000+0000)/",
        "EmploymentTerminationPaymentType": "O",
        "CurrentRecord": true
      }
    ]
  }
}
```

<h3 id="creates-a-pay-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request - currently returns empty array for JSON|[PayItems](#schemapayitems)|
|400|Bad Request|invalid input, object invalid - IsQualifyingEarnings is required. IsQualifyingEarnings cannot be true when IsExemptFromSuper is true.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves payroll calendars

<a id="opIdgetPayrollCalendars"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayrollCalendars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayrollCalendars`

<h3 id="retrieves-payroll-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 objects will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573611063408)/",
  "PayrollCalendars": [
    {
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "Name": "Sid Weekly",
      "CalendarType": "WEEKLY",
      "StartDate": "/Date(1573171200000+0000)/",
      "PaymentDate": "/Date(1573776000000+0000)/",
      "UpdatedDateUTC": "/Date(1573077687000+0000)/",
      "ReferenceDate": "/Date(1573171200000+0000)/"
    },
    {
      "PayrollCalendarID": "22a05fc5-386d-4950-9842-3e7a6c812135",
      "Name": "Weekly",
      "CalendarType": "WEEKLY",
      "StartDate": "/Date(1546560000000+0000)/",
      "PaymentDate": "/Date(1547164800000+0000)/",
      "UpdatedDateUTC": "/Date(1572916157000+0000)/",
      "ReferenceDate": "/Date(1573171200000+0000)/"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-payroll-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayrollCalendars](#schemapayrollcalendars)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a Payroll Calendar

<a id="opIdcreatePayrollCalendar"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayrollCalendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"PayrollCalendarID\":\"78bb86b9-e1ea-47ac-b75d-f087a81931de\", \"PayRunPeriodStartDate\":\"/Date(1572566400000+0000)/\", \"PayRunPeriodEndDate\":\"/Date(1573084800000+0000)/\", \"PayRunStatus\":\"DRAFT\", \"PaymentDate\":\"/Date(1573171200000+0000)/\" } ]"'
```

`POST /PayrollCalendars`

> Body parameter

```json
"[ { \"PayrollCalendarID\":\"78bb86b9-e1ea-47ac-b75d-f087a81931de\", \"PayRunPeriodStartDate\":\"/Date(1572566400000+0000)/\", \"PayRunPeriodEndDate\":\"/Date(1573084800000+0000)/\", \"PayRunStatus\":\"DRAFT\", \"PaymentDate\":\"/Date(1573171200000+0000)/\" } ]"
```

<h3 id="creates-a-payroll-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[PayrollCalendar](#schemapayrollcalendar)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1584125518649)/",
  "PayrollCalendars": [
    {
      "PayrollCalendarID": "57accbfe-f729-4be3-b3cb-8c3445c61d3a",
      "Name": "MyCal37127",
      "CalendarType": "WEEKLY",
      "StartDate": "/Date(1572998400000+0000)/",
      "PaymentDate": "/Date(1573516800000+0000)/",
      "UpdatedDateUTC": "/Date(1584125518633+0000)/"
    }
  ]
}
```

<h3 id="creates-a-payroll-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[PayrollCalendars](#schemapayrollcalendars)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves payroll calendar by using a unique payroll calendar ID

<a id="opIdgetPayrollCalendar"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayrollCalendars/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayrollCalendars/{PayrollCalendarID}`

<h3 id="retrieves-payroll-calendar-by-using-a-unique-payroll-calendar-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayrollCalendarID|path|string(uuid)|true|Payroll Calendar id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573611453008)/",
  "PayrollCalendars": [
    {
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "Name": "Sid Weekly",
      "CalendarType": "WEEKLY",
      "StartDate": "/Date(1573171200000+0000)/",
      "PaymentDate": "/Date(1573776000000+0000)/",
      "UpdatedDateUTC": "/Date(1573077687000+0000)/",
      "ReferenceDate": "/Date(1573171200000+0000)/"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-payroll-calendar-by-using-a-unique-payroll-calendar-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayrollCalendars](#schemapayrollcalendars)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves pay runs

<a id="opIdgetPayRuns"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRuns`

<h3 id="retrieves-pay-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 PayRuns will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573611063074)/",
  "PayRuns": [
    {
      "PayRunID": "5de420bb-4ad2-405c-beb1-2610bcc2144e",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "PayRunPeriodStartDate": "/Date(1572566400000+0000)/",
      "PayRunPeriodEndDate": "/Date(1573084800000+0000)/",
      "PaymentDate": "/Date(1573171200000+0000)/",
      "Wages": 200,
      "Deductions": 33,
      "Tax": 78,
      "Super": 0,
      "Reimbursement": 22,
      "NetPay": 89,
      "PayRunStatus": "POSTED",
      "UpdatedDateUTC": "/Date(1573610970000+0000)/"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-pay-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRuns](#schemapayruns)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns payroll.payruns.read )
</aside>

## Creates a pay run

<a id="opIdcreatePayRun"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"PayrollCalendarID\": \"78bb86b9-e1ea-47ac-b75d-f087a81931de\", \"PayRunPeriodStartDate\": \"/Date(1572566400000+0000)/\", \"PayRunPeriodEndDate\": \"/Date(1573084800000+0000)/\", \"PayRunStatus\": \"DRAFT\", \"PaymentDate\": \"/Date(1573171200000+0000)/\" } ]"'
```

`POST /PayRuns`

> Body parameter

```json
"[ { \"PayrollCalendarID\": \"78bb86b9-e1ea-47ac-b75d-f087a81931de\", \"PayRunPeriodStartDate\": \"/Date(1572566400000+0000)/\", \"PayRunPeriodEndDate\": \"/Date(1573084800000+0000)/\", \"PayRunStatus\": \"DRAFT\", \"PaymentDate\": \"/Date(1573171200000+0000)/\" } ]"
```

<h3 id="creates-a-pay-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[PayRun](#schemapayrun)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573685818311)/",
  "PayRuns": [
    {
      "PayRunID": "d1348fab-f47a-4697-beea-922ee262407a",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "PayRunPeriodStartDate": "/Date(1572566400000+0000)/",
      "PayRunPeriodEndDate": "/Date(1573084800000+0000)/",
      "PaymentDate": "/Date(1573171200000+0000)/",
      "PayRunStatus": "DRAFT",
      "UpdatedDateUTC": "/Date(1573685818311+0000)/"
    }
  ]
}
```

<h3 id="creates-a-pay-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[PayRuns](#schemapayruns)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns )
</aside>

## Retrieves a pay run by using a unique pay run id

<a id="opIdgetPayRun"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayRuns/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /PayRuns/{PayRunID}`

<h3 id="retrieves-a-pay-run-by-using-a-unique-pay-run-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayRunID|path|string(uuid)|true|PayRun id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573692531699)/",
  "PayRuns": [
    {
      "PayRunID": "21d6317b-5319-4b3d-8d78-48904db6b665",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "PayRunPeriodStartDate": "/Date(1572566400000+0000)/",
      "PayRunPeriodEndDate": "/Date(1573084800000+0000)/",
      "PaymentDate": "/Date(1573171200000+0000)/",
      "Wages": 205.4,
      "Deductions": 37,
      "Tax": 0,
      "Super": 0,
      "Reimbursement": 77,
      "NetPay": 168.4,
      "PayRunStatus": "POSTED",
      "UpdatedDateUTC": "/Date(1573692155000+0000)/",
      "Payslips": [
        {
          "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
          "PayslipID": "c81e8bcc-56b0-4740-b46b-767753a6ee45",
          "FirstName": "Albus",
          "LastName": "Dumbledore",
          "EmployeeGroup": "foo",
          "Wages": 5.4,
          "Deductions": 4,
          "Tax": 0,
          "Super": 0,
          "Reimbursements": 55,
          "NetPay": 1.4,
          "UpdatedDateUTC": "/Date(1573692155000+0000)/"
        },
        {
          "EmployeeID": "7aa04979-ded5-44d9-b09a-793749425844",
          "PayslipID": "76b9cb4e-d024-47cf-b09a-4c9cea2870f1",
          "FirstName": "John",
          "LastName": "Smith",
          "Wages": 200,
          "Deductions": 33,
          "Tax": 0,
          "Super": 0,
          "Reimbursements": 22,
          "NetPay": 167,
          "UpdatedDateUTC": "/Date(1573692155000+0000)/"
        }
      ]
    }
  ]
}
```

<h3 id="retrieves-a-pay-run-by-using-a-unique-pay-run-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayRuns](#schemapayruns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns payroll.payruns.read )
</aside>

## Updates a pay run

<a id="opIdupdatePayRun"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/PayRuns/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"PayRunStatus\": \"POSTED\" } ]"'
```

`POST /PayRuns/{PayRunID}`

Update properties on a single PayRun

> Body parameter

```json
"[ { \"PayRunStatus\": \"POSTED\" } ]"
```

<h3 id="updates-a-pay-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|PayRunID|path|string(uuid)|true|PayRun id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[PayRun](#schemapayrun)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573693093680)/",
  "PayRuns": [
    {
      "PayRunID": "f8fcda54-643f-4406-902a-d7b020d0a036",
      "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de",
      "PayRunPeriodStartDate": "/Date(1572566400000+0000)/",
      "PayRunPeriodEndDate": "/Date(1573084800000+0000)/",
      "PaymentDate": "/Date(1573171200000+0000)/",
      "PayRunStatus": "POSTED",
      "UpdatedDateUTC": "/Date(1573693093000+0000)/"
    }
  ]
}
```

<h3 id="updates-a-pay-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[PayRuns](#schemapayruns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payruns )
</aside>

## Retrieves for a payslip by a unique payslip id

<a id="opIdgetPayslip"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Payslip/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Payslip/{PayslipID}`

<h3 id="retrieves-for-a-payslip-by-a-unique-payslip-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayslipID|path|string(uuid)|true|Payslip id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573692677622)/",
  "Payslip": {
    "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
    "PayslipID": "c81e8bcc-56b0-4740-b46b-767753a6ee45",
    "FirstName": "Albus",
    "LastName": "Dumbledore",
    "Tax": 0,
    "NetPay": 1.4,
    "UpdatedDateUTC": "/Date(1573692155000+0000)/",
    "EarningsLines": [
      {
        "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
        "RatePerUnit": 3,
        "NumberOfUnits": 1.8
      }
    ],
    "LeaveEarningsLines": [
      {
        "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
        "RatePerUnit": 0,
        "NumberOfUnits": 0.6,
        "PayOutType": "DEFAULT"
      },
      {
        "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
        "RatePerUnit": 3,
        "NumberOfUnits": 0.6,
        "PayOutType": "CASHED_OUT"
      }
    ],
    "TimesheetEarningsLines": [],
    "DeductionLines": [
      {
        "Amount": 4,
        "CalculationType": "FIXEDAMOUNT",
        "DeductionTypeID": "ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938"
      }
    ],
    "LeaveAccrualLines": [
      {
        "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca",
        "NumberOfUnits": 0.0769,
        "AutoCalculate": true
      }
    ],
    "ReimbursementLines": [
      {
        "ReimbursementTypeID": "aa8cfa40-d872-4be0-8a94-bb7f00962f74",
        "Description": "boo",
        "ExpenseAccount": "850",
        "Amount": 55
      }
    ],
    "SuperannuationLines": [
      {
        "ContributionType": "SGC",
        "CalculationType": "STATUTORY",
        "MinimumMonthlyEarnings": 450,
        "ExpenseAccountCode": "478",
        "LiabilityAccountCode": "826",
        "PaymentDateForThisPeriod": "/Date(1580169600000+0000)/",
        "Amount": 0
      }
    ],
    "TaxLines": [
      {
        "PayslipTaxLineID": "c129696e-36ef-4677-a54c-96095787ca20",
        "TaxTypeName": "PAYG Tax",
        "Description": "No tax file number (Australian resident)",
        "Amount": 0,
        "LiabilityAccount": "825"
      }
    ]
  }
}
```

<h3 id="retrieves-for-a-payslip-by-a-unique-payslip-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[PayslipObject](#schemapayslipobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip payroll.payslip.read )
</aside>

## Updates a payslip

<a id="opIdupdatePayslip"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Payslip/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "Payslip": {
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "DeductionLines": [
        {
          "DeductionTypeID": "727af5e8-b347-4ae7-85fc-9b82266d0aec",
          "CalculationType": "FIXEDAMOUNT",
          "NumberOfUnits": 10
        }
      ]
    }
  }'
```

`POST /Payslip/{PayslipID}`

Update lines on a single payslips

> Body parameter

```json
{
  "Payslip": {
    "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
    "DeductionLines": [
      {
        "DeductionTypeID": "727af5e8-b347-4ae7-85fc-9b82266d0aec",
        "CalculationType": "FIXEDAMOUNT",
        "NumberOfUnits": 10
      }
    ]
  }
}
```

<h3 id="updates-a-payslip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|PayslipID|path|string(uuid)|true|Payslip id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[PayslipLines](#schemapaysliplines)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1589568253813)/",
  "Payslips": [
    {
      "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e",
      "PayslipID": "c81e8bcc-56b0-4740-b46b-767753a6ee45",
      "FirstName": "Albus",
      "LastName": "Dumbledore",
      "LastEdited": "/Date(1589568253735+0000)/",
      "Tax": 0,
      "NetPay": 1.4,
      "UpdatedDateUTC": "/Date(1589568253735+0000)/",
      "DeductionLines": [
        {
          "Amount": 4,
          "CalculationType": "FIXEDAMOUNT",
          "DeductionTypeID": "ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938"
        }
      ]
    }
  ]
}
```

<h3 id="updates-a-payslip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request - currently returns empty array for JSON|[Payslips](#schemapayslips)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.payslip )
</aside>

## Retrieves payroll settings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Settings \
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
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573585252781)/",
  "Settings": {
    "Accounts": [
      {
        "AccountID": "85bd2954-7ef5-4fbe-9e40-a1990d0fd63f",
        "Type": "BANK",
        "Code": "094",
        "Name": "Bank of A"
      },
      {
        "AccountID": "7e65fa75-1c64-43d7-b0b4-c05f196e2190",
        "Type": "WAGESPAYABLELIABILITY",
        "Code": "804",
        "Name": "Wages Payable - Payroll"
      },
      {
        "AccountID": "dbc164fa-0cdf-4848-92d3-0d1dc864c53f",
        "Type": "PAYGLIABILITY",
        "Code": "825",
        "Name": "PAYG Withholdings Payable"
      },
      {
        "AccountID": "7dad84d4-bc7a-482e-99b1-d879e4856578",
        "Type": "SUPERANNUATIONEXPENSE",
        "Code": "478",
        "Name": "Superannuation"
      },
      {
        "AccountID": "df3679fe-5ebc-42ce-a7ac-b4d36b520795",
        "Type": "SUPERANNUATIONLIABILITY",
        "Code": "826",
        "Name": "Superannuation Payable"
      },
      {
        "AccountID": "7e130864-5864-4c60-94eb-3c53c95da138",
        "Type": "WAGESEXPENSE",
        "Code": "477",
        "Name": "Wages and Salaries"
      }
    ],
    "TrackingCategories": {
      "EmployeeGroups": {
        "TrackingCategoryID": "a28f419f-6ec3-4dcf-9be0-7959ea983630",
        "TrackingCategoryName": "Foo70317"
      },
      "TimesheetCategories": {
        "TrackingCategoryID": "89375aed-ed51-4624-9e5d-92db6bfa8974",
        "TrackingCategoryName": "Foo32551"
      }
    },
    "DaysInPayrollYear": "364",
    "EmployeesAreSTP2": false
  }
}
```

<h3 id="retrieves-payroll-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|payroll settings|[SettingsObject](#schemasettingsobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves superfunds

<a id="opIdgetSuperfunds"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Superfunds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Superfunds`

<h3 id="retrieves-superfunds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 SuperFunds will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573570941142)/",
  "SuperFunds": [
    {
      "SuperFundID": "fde8e070-bf59-4e56-b1d7-c75a09474b8d",
      "Name": "Accumulate Plus (Commonwealth Bank Group Super)",
      "Type": "REGULATED",
      "USI": "OSF0001AU",
      "UpdatedDateUTC": "/Date(1573510468000+0000)/"
    },
    {
      "SuperFundID": "69079de5-67ef-43bb-b5a5-3e7c2ccad7f0",
      "Name": "AMG Super",
      "Type": "REGULATED",
      "USI": "PTC0133AU",
      "UpdatedDateUTC": "/Date(1573490487000+0000)/"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-superfunds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SuperFunds](#schemasuperfunds)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Creates a superfund

<a id="opIdcreateSuperfund"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Superfunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"usi\":\"PTC0133AU\", \"Type\":\"REGULATED\", \"Name\":\"Bar99359\", \"AccountNumber\":\"FB36350\", \"AccountName\":\"Foo38428\", \"USI\":\"PTC0133AU\" } ]"'
```

`POST /Superfunds`

> Body parameter

```json
"[ { \"usi\":\"PTC0133AU\", \"Type\":\"REGULATED\", \"Name\":\"Bar99359\", \"AccountNumber\":\"FB36350\", \"AccountName\":\"Foo38428\", \"USI\":\"PTC0133AU\" } ]"
```

<h3 id="creates-a-superfund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[SuperFund](#schemasuperfund)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573583393024)/",
  "SuperFunds": [
    {
      "SuperFundID": "e02e44eb-2dba-4d5e-84da-8a0c3a4a4fef",
      "Name": "AMG Super",
      "Type": "REGULATED",
      "ABN": "30099320583",
      "USI": "PTC0133AU",
      "AccountNumber": "FB36350",
      "AccountName": "Foo38428",
      "UpdatedDateUTC": "/Date(1573583393009+0000)/"
    }
  ]
}
```

<h3 id="creates-a-superfund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[SuperFunds](#schemasuperfunds)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves a superfund by using a unique superfund ID

<a id="opIdgetSuperfund"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Superfunds/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Superfunds/{SuperFundID}`

<h3 id="retrieves-a-superfund-by-using-a-unique-superfund-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SuperFundID|path|string(uuid)|true|Superfund id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573571518603)/",
  "SuperFunds": [
    {
      "SuperFundID": "540f4327-dda2-4b36-9c2f-2fe1c93a72b5",
      "Name": "My Self Managed one",
      "Type": "SMSF",
      "ABN": "53004085616",
      "EmployerNumber": "9876543",
      "BSB": "324324",
      "AccountNumber": "234234234",
      "AccountName": "My Checking",
      "UpdatedDateUTC": "/Date(1573571429000+0000)/",
      "ElectronicServiceAddress": "FG48739"
    }
  ]
}
```

<h3 id="retrieves-a-superfund-by-using-a-unique-superfund-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SuperFunds](#schemasuperfunds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Updates a superfund

<a id="opIdupdateSuperfund"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Superfunds/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '" [ { \"Type\":\"REGULATED\", \"Name\":\"Nice23534\" } ]"'
```

`POST /Superfunds/{SuperFundID}`

Update properties on a single Superfund

> Body parameter

```json
" [ { \"Type\":\"REGULATED\", \"Name\":\"Nice23534\" } ]"
```

<h3 id="updates-a-superfund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|SuperFundID|path|string(uuid)|true|Superfund id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[SuperFund](#schemasuperfund)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573570941547)/",
  "SuperFunds": [
    {
      "SuperFundID": "fde8e070-bf59-4e56-b1d7-c75a09474b8d",
      "Name": "Accumulate Plus (Commonwealth Bank Group Super)",
      "Type": "REGULATED",
      "ABN": "24248426878",
      "USI": "OSF0001AU",
      "UpdatedDateUTC": "/Date(1573510468000+0000)/"
    }
  ]
}
```

<h3 id="updates-a-superfund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[SuperFunds](#schemasuperfunds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings )
</aside>

## Retrieves superfund products

<a id="opIdgetSuperfundProducts"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/SuperfundProducts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /SuperfundProducts`

<h3 id="retrieves-superfund-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ABN|query|string|false|The ABN of the Regulated SuperFund|
|USI|query|string|false|The USI of the Regulated SuperFund|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573570720295)/",
  "SuperFundProducts": [
    {
      "USI": "OSF0001AU",
      "ABN": "24248426878",
      "ProductName": "Accumulate Plus (Commonwealth Bank Group Super)"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-superfund-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[SuperFundProducts](#schemasuperfundproducts)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.settings payroll.settings.read )
</aside>

## Retrieves timesheets

<a id="opIdgetTimesheets"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Timesheets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Timesheets`

<h3 id="retrieves-timesheets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|Only records created or modified since this timestamp will be returned|
|where|query|string|false|Filter by an any element|
|order|query|string|false|Order by an any element|
|page|query|integer|false|e.g. page=1 – Up to 100 timesheets will be returned in a single API call|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573516183708)/",
  "Timesheets": [
    {
      "TimesheetID": "863bbd31-0447-4419-80d5-d733d5e723ba",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "StartDate": "/Date(1547769600000)/",
      "EndDate": "/Date(1548288000000)/",
      "Status": "APPROVED",
      "Hours": 24,
      "TimesheetLines": [
        {
          "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
          "NumberOfUnits": [
            4,
            4,
            4,
            4,
            4,
            4,
            0
          ],
          "UpdatedDateUTC": "/Date(1572915827000+0000)/"
        }
      ],
      "UpdatedDateUTC": "/Date(1572915827000+0000)/"
    },
    {
      "TimesheetID": "544eb3a7-0d63-495b-90ae-f6aa3c26c2c8",
      "EmployeeID": "7aa04979-ded5-44d9-b09a-793749425844",
      "StartDate": "/Date(1572566400000)/",
      "EndDate": "/Date(1573084800000)/",
      "Status": "APPROVED",
      "Hours": 10,
      "TimesheetLines": [
        {
          "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
          "NumberOfUnits": [
            2,
            2,
            2,
            2,
            2,
            0,
            0
          ],
          "UpdatedDateUTC": "/Date(1572916045000+0000)/"
        }
      ],
      "UpdatedDateUTC": "/Date(1572916045000+0000)/"
    }
  ]
}
```

> 400 Response

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

<h3 id="retrieves-timesheets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Timesheets](#schematimesheets)|
|400|Bad Request|validation error for a bad request|[APIException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets payroll.timesheets.read )
</aside>

## Creates a timesheet

<a id="opIdcreateTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Timesheets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"EmployeeID\":\"b34e89ff-770d-4099-b7e5-f968767118bc\", \"StartDate\":\"/Date(1573171200000+0000)/\", \"EndDate\":\"/Date(1573689600000+0000)/\", \"Status\":\"DRAFT\", \"TimesheetLines\":[ { \"EarningsRateID\":\"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"TrackingItemID\":\"af5e9ce2-2349-4136-be99-3561b189f473\", \"NumberOfUnits\":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ] } ] } ]"'
```

`POST /Timesheets`

> Body parameter

```json
"[ { \"EmployeeID\":\"b34e89ff-770d-4099-b7e5-f968767118bc\", \"StartDate\":\"/Date(1573171200000+0000)/\", \"EndDate\":\"/Date(1573689600000+0000)/\", \"Status\":\"DRAFT\", \"TimesheetLines\":[ { \"EarningsRateID\":\"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"TrackingItemID\":\"af5e9ce2-2349-4136-be99-3561b189f473\", \"NumberOfUnits\":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ] } ] } ]"
```

<h3 id="creates-a-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[Timesheet](#schematimesheet)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573516185143)/",
  "Timesheets": [
    {
      "TimesheetID": "a7eb0a79-8511-4ee7-b473-3a25f28abcb9",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "StartDate": "/Date(1573171200000+0000)/",
      "EndDate": "/Date(1573689600000+0000)/",
      "Status": "DRAFT",
      "Hours": 22,
      "TimesheetLines": [
        {
          "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
          "TrackingItemID": "af5e9ce2-2349-4136-be99-3561b189f473",
          "NumberOfUnits": [
            2,
            10,
            0,
            0,
            5,
            0,
            5
          ],
          "UpdatedDateUTC": "/Date(1573516185127+0000)/"
        }
      ],
      "UpdatedDateUTC": "/Date(1573516185127+0000)/"
    }
  ]
}
```

<h3 id="creates-a-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[Timesheets](#schematimesheets)|
|400|Bad Request|invalid input, object invalid - TODO|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

## Retrieves a timesheet by using a unique timesheet id

<a id="opIdgetTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Timesheets/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Timesheets/{TimesheetID}`

<h3 id="retrieves-a-timesheet-by-using-a-unique-timesheet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TimesheetID|path|string(uuid)|true|Timesheet id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "provider-name",
  "DateTimeUTC": "/Date(1573516184161)/",
  "Timesheet": {
    "TimesheetID": "df954ca3-3a70-47e9-9a3e-80711e7c5f90",
    "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
    "StartDate": "/Date(1547164800000+0000)/",
    "EndDate": "/Date(1547683200000+0000)/",
    "Status": "APPROVED",
    "Hours": 15,
    "TimesheetLines": [
      {
        "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
        "NumberOfUnits": [
          3,
          3,
          3,
          3,
          0,
          3,
          0
        ],
        "UpdatedDateUTC": "/Date(1572915797000+0000)/"
      }
    ],
    "UpdatedDateUTC": "/Date(1572915797000+0000)/"
  }
}
```

<h3 id="retrieves-a-timesheet-by-using-a-unique-timesheet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[TimesheetObject](#schematimesheetobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets payroll.timesheets.read )
</aside>

## Updates a timesheet

<a id="opIdupdateTimesheet"></a>

> Code samples

```bash
curl https://api.xero.com/payroll.xro/1.0/Timesheets/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"[ { \"EmployeeID\":\"b34e89ff-770d-4099-b7e5-f968767118bc\", \"StartDate\":\"/Date(1573171200000+0000)/\", \"EndDate\":\"/Date(1573689600000+0000)/\", \"Status\":\"APPROVED\", \"Hours\":22.0, \"TimesheetID\":\"a7eb0a79-8511-4ee7-b473-3a25f28abcb9\", \"TimesheetLines\":[ { \"EarningsRateID\":\"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"TrackingItemID\":\"af5e9ce2-2349-4136-be99-3561b189f473\", \"NumberOfUnits\":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ], \"UpdatedDateUTC\":\"/Date(1573516185127+0000)/\" } ] } ]"'
```

`POST /Timesheets/{TimesheetID}`

Update properties on a single timesheet

> Body parameter

```json
"[ { \"EmployeeID\":\"b34e89ff-770d-4099-b7e5-f968767118bc\", \"StartDate\":\"/Date(1573171200000+0000)/\", \"EndDate\":\"/Date(1573689600000+0000)/\", \"Status\":\"APPROVED\", \"Hours\":22.0, \"TimesheetID\":\"a7eb0a79-8511-4ee7-b473-3a25f28abcb9\", \"TimesheetLines\":[ { \"EarningsRateID\":\"ab874dfb-ab09-4c91-954e-43acf6fc23b4\", \"TrackingItemID\":\"af5e9ce2-2349-4136-be99-3561b189f473\", \"NumberOfUnits\":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ], \"UpdatedDateUTC\":\"/Date(1573516185127+0000)/\" } ] } ]"
```

<h3 id="updates-a-timesheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|TimesheetID|path|string(uuid)|true|Timesheet id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[[Timesheet](#schematimesheet)]|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "Status": "OK",
  "ProviderName": "3f93110a-df13-49c7-b82f-a069813df188",
  "DateTimeUTC": "/Date(1573516185258)/",
  "Timesheets": [
    {
      "TimesheetID": "a7eb0a79-8511-4ee7-b473-3a25f28abcb9",
      "EmployeeID": "b34e89ff-770d-4099-b7e5-f968767118bc",
      "StartDate": "/Date(1573171200000+0000)/",
      "EndDate": "/Date(1573689600000+0000)/",
      "Status": "APPROVED",
      "Hours": 22,
      "TimesheetLines": [
        {
          "EarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4",
          "TrackingItemID": "af5e9ce2-2349-4136-be99-3561b189f473",
          "NumberOfUnits": [
            2,
            10,
            0,
            0,
            5,
            0,
            5
          ],
          "UpdatedDateUTC": "/Date(1573516185227+0000)/"
        }
      ],
      "UpdatedDateUTC": "/Date(1573516185227+0000)/"
    }
  ]
}
```

<h3 id="updates-a-timesheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[Timesheets](#schematimesheets)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: payroll.timesheets )
</aside>

# Schemas

<h2 id="tocS_Employees">Employees</h2>
<!-- backwards compatibility -->
<a id="schemaemployees"></a>
<a id="schema_Employees"></a>
<a id="tocSemployees"></a>
<a id="tocsemployees"></a>

```json
{
  "Employees": [
    {
      "FirstName": "Karen",
      "LastName": "Jones",
      "DateOfBirth": "/Date(322560000000+0000)/",
      "HomeAddress": {
        "AddressLine1": "123 Main St",
        "AddressLine2": "Apt 4",
        "City": "St. Kilda",
        "Region": "VIC",
        "PostalCode": 3182,
        "Country": "AUSTRALIA"
      },
      "StartDate": "/Date(320284900000+0000)/",
      "Title": "Mrs",
      "MiddleNames": "Adena",
      "Email": "developer@me.com",
      "Gender": "F",
      "Phone": "415-555-1212",
      "Mobile": "415-234-5678",
      "TwitterUserName": "xeroapi",
      "IsAuthorisedToApproveLeave": false,
      "IsAuthorisedToApproveTimesheets": true,
      "JobTitle": "Manager",
      "Classification": 99383,
      "OrdinaryEarningsRateID": "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
      "PayrollCalendarID": "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
      "EmployeeGroupName": "marketing",
      "EmployeeID": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
      "TerminationDate": "/Date(1584662400000+0000)/",
      "TerminationReason": "F",
      "BankAccounts": [
        {
          "StatementText": "Salary",
          "AccountName": "James Lebron Savings",
          "BSB": 122344,
          "AccountNumber": 345678,
          "Remainder": false,
          "Amount": 200
        }
      ],
      "PayTemplate": {
        "EarningsLines": [
          {
            "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            "CalculationType": "USEEARNINGSRATE",
            "AnnualSalary": 40000,
            "NumberOfUnitsPerWeek": 38,
            "RatePerUnit": 38,
            "NormalNumberOfUnits": 38,
            "Amount": 38,
            "NumberOfUnits": 2.5,
            "FixedAmount": 2.5
          }
        ],
        "DeductionLines": [
          {
            "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
            "CalculationType": "FIXEDAMOUNT",
            "Amount": 10,
            "Percentage": 10,
            "NumberOfUnits": 10
          }
        ],
        "SuperLines": [
          {
            "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
            "ContributionType": "SGC",
            "CalculationType": "FIXEDAMOUNT",
            "MinimumMonthlyEarnings": 450,
            "ExpenseAccountCode": 478,
            "LiabilityAccountCode": 826,
            "Percentage": 9,
            "Amount": 10
          }
        ],
        "ReimbursementLines": [
          {
            "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
            "Amount": 10,
            "Description": "For the taxi",
            "ExpenseAccount": 420
          }
        ],
        "LeaveLines": [
          {
            "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
            "CalculationType": "NOCALCULATIONREQUIRED",
            "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
            "EmploymentTerminationPaymentType": "O",
            "IncludeSuperannuationGuaranteeContribution": true,
            "IsQualifyingEarnings": true,
            "NumberOfUnits": 2.5,
            "AnnualNumberOfUnits": 2.5,
            "FullTimeNumberOfUnitsPerPeriod": 2.5
          }
        ]
      },
      "OpeningBalances": {
        "OpeningBalanceDate": "/Date(322560000000+0000)/",
        "Tax": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        "EarningsLines": [
          {
            "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            "CalculationType": "USEEARNINGSRATE",
            "AnnualSalary": 40000,
            "NumberOfUnitsPerWeek": 38,
            "RatePerUnit": 38,
            "NormalNumberOfUnits": 38,
            "Amount": 38,
            "NumberOfUnits": 2.5,
            "FixedAmount": 2.5
          }
        ],
        "DeductionLines": [
          {
            "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
            "CalculationType": "FIXEDAMOUNT",
            "Amount": 10,
            "Percentage": 10,
            "NumberOfUnits": 10
          }
        ],
        "SuperLines": [
          {
            "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
            "ContributionType": "SGC",
            "CalculationType": "FIXEDAMOUNT",
            "MinimumMonthlyEarnings": 450,
            "ExpenseAccountCode": 478,
            "LiabilityAccountCode": 826,
            "Percentage": 9,
            "Amount": 10
          }
        ],
        "ReimbursementLines": [
          {
            "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
            "Amount": 10,
            "Description": "For the taxi",
            "ExpenseAccount": 420
          }
        ],
        "LeaveLines": [
          {
            "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
            "NumberOfUnits": 2.5
          }
        ],
        "PaidLeaveEarningsLines": [
          {
            "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
            "Amount": 500,
            "SGCAppliedLeaveLoadingAmount": 50,
            "SGCExemptedLeaveLoadingAmount": 60,
            "ResetSTPCategorisation": true
          }
        ]
      },
      "TaxDeclaration": {
        "EmployeeID": "123 Main St",
        "EmploymentBasis": "FULLTIME",
        "TFNExemptionType": "NOTQUOTED",
        "TaxFileNumber": 123123123,
        "ABN": 21006819692,
        "AustralianResidentForTaxPurposes": true,
        "ResidencyStatus": "AUSTRALIANRESIDENT",
        "TaxScaleType": "REGULAR",
        "WorkCondition": "PROMOTIONAL",
        "SeniorMaritalStatus": "MEMBEROFCOUPLE",
        "TaxFreeThresholdClaimed": false,
        "TaxOffsetEstimatedAmount": 100,
        "HasHELPDebt": false,
        "HasSFSSDebt": false,
        "HasTradeSupportLoanDebt": false,
        "UpwardVariationTaxWithholdingAmount": 50,
        "EligibleToReceiveLeaveLoading": false,
        "ApprovedWithholdingVariationPercentage": 75,
        "HasStudentStartupLoan": true,
        "HasLoanOrStudentDebt": true,
        "UpdatedDateUTC": "/Date(1583967733054+0000)/",
        "IncludeLeaveLoadingInQualifyingEarnings": true
      },
      "IncomeType": "SALARYANDWAGES",
      "EmploymentType": "EMPLOYEE",
      "CountryOfResidence": "AU",
      "IsSTP2Qualified": true,
      "LeaveBalances": [
        {
          "LeaveName": "Annual Leave",
          "LeaveTypeID": "544d9292-4329-4512-bfff-a9f15236d776",
          "NumberOfUnits": 81.2602,
          "TypeOfUnits": "Hours"
        }
      ],
      "SuperMemberships": [
        {
          "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          "SuperFundID": "2187a42b-639a-45cb-9eed-cd4ae488306a",
          "EmployeeNumber": 1234
        }
      ],
      "Status": "ACTIVE",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Employees|[[Employee](#schemaemployee)]|false|none|none|

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "FirstName": "Karen",
  "LastName": "Jones",
  "DateOfBirth": "/Date(322560000000+0000)/",
  "HomeAddress": {
    "AddressLine1": "123 Main St",
    "AddressLine2": "Apt 4",
    "City": "St. Kilda",
    "Region": "VIC",
    "PostalCode": 3182,
    "Country": "AUSTRALIA"
  },
  "StartDate": "/Date(320284900000+0000)/",
  "Title": "Mrs",
  "MiddleNames": "Adena",
  "Email": "developer@me.com",
  "Gender": "F",
  "Phone": "415-555-1212",
  "Mobile": "415-234-5678",
  "TwitterUserName": "xeroapi",
  "IsAuthorisedToApproveLeave": false,
  "IsAuthorisedToApproveTimesheets": true,
  "JobTitle": "Manager",
  "Classification": 99383,
  "OrdinaryEarningsRateID": "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
  "PayrollCalendarID": "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
  "EmployeeGroupName": "marketing",
  "EmployeeID": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
  "TerminationDate": "/Date(1584662400000+0000)/",
  "TerminationReason": "F",
  "BankAccounts": [
    {
      "StatementText": "Salary",
      "AccountName": "James Lebron Savings",
      "BSB": 122344,
      "AccountNumber": 345678,
      "Remainder": false,
      "Amount": 200
    }
  ],
  "PayTemplate": {
    "EarningsLines": [
      {
        "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
        "CalculationType": "USEEARNINGSRATE",
        "AnnualSalary": 40000,
        "NumberOfUnitsPerWeek": 38,
        "RatePerUnit": 38,
        "NormalNumberOfUnits": 38,
        "Amount": 38,
        "NumberOfUnits": 2.5,
        "FixedAmount": 2.5
      }
    ],
    "DeductionLines": [
      {
        "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
        "CalculationType": "FIXEDAMOUNT",
        "Amount": 10,
        "Percentage": 10,
        "NumberOfUnits": 10
      }
    ],
    "SuperLines": [
      {
        "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        "ContributionType": "SGC",
        "CalculationType": "FIXEDAMOUNT",
        "MinimumMonthlyEarnings": 450,
        "ExpenseAccountCode": 478,
        "LiabilityAccountCode": 826,
        "Percentage": 9,
        "Amount": 10
      }
    ],
    "ReimbursementLines": [
      {
        "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
        "Amount": 10,
        "Description": "For the taxi",
        "ExpenseAccount": 420
      }
    ],
    "LeaveLines": [
      {
        "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
        "CalculationType": "NOCALCULATIONREQUIRED",
        "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
        "EmploymentTerminationPaymentType": "O",
        "IncludeSuperannuationGuaranteeContribution": true,
        "IsQualifyingEarnings": true,
        "NumberOfUnits": 2.5,
        "AnnualNumberOfUnits": 2.5,
        "FullTimeNumberOfUnitsPerPeriod": 2.5
      }
    ]
  },
  "OpeningBalances": {
    "OpeningBalanceDate": "/Date(322560000000+0000)/",
    "Tax": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
    "EarningsLines": [
      {
        "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
        "CalculationType": "USEEARNINGSRATE",
        "AnnualSalary": 40000,
        "NumberOfUnitsPerWeek": 38,
        "RatePerUnit": 38,
        "NormalNumberOfUnits": 38,
        "Amount": 38,
        "NumberOfUnits": 2.5,
        "FixedAmount": 2.5
      }
    ],
    "DeductionLines": [
      {
        "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
        "CalculationType": "FIXEDAMOUNT",
        "Amount": 10,
        "Percentage": 10,
        "NumberOfUnits": 10
      }
    ],
    "SuperLines": [
      {
        "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        "ContributionType": "SGC",
        "CalculationType": "FIXEDAMOUNT",
        "MinimumMonthlyEarnings": 450,
        "ExpenseAccountCode": 478,
        "LiabilityAccountCode": 826,
        "Percentage": 9,
        "Amount": 10
      }
    ],
    "ReimbursementLines": [
      {
        "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
        "Amount": 10,
        "Description": "For the taxi",
        "ExpenseAccount": 420
      }
    ],
    "LeaveLines": [
      {
        "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
        "NumberOfUnits": 2.5
      }
    ],
    "PaidLeaveEarningsLines": [
      {
        "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
        "Amount": 500,
        "SGCAppliedLeaveLoadingAmount": 50,
        "SGCExemptedLeaveLoadingAmount": 60,
        "ResetSTPCategorisation": true
      }
    ]
  },
  "TaxDeclaration": {
    "EmployeeID": "123 Main St",
    "EmploymentBasis": "FULLTIME",
    "TFNExemptionType": "NOTQUOTED",
    "TaxFileNumber": 123123123,
    "ABN": 21006819692,
    "AustralianResidentForTaxPurposes": true,
    "ResidencyStatus": "AUSTRALIANRESIDENT",
    "TaxScaleType": "REGULAR",
    "WorkCondition": "PROMOTIONAL",
    "SeniorMaritalStatus": "MEMBEROFCOUPLE",
    "TaxFreeThresholdClaimed": false,
    "TaxOffsetEstimatedAmount": 100,
    "HasHELPDebt": false,
    "HasSFSSDebt": false,
    "HasTradeSupportLoanDebt": false,
    "UpwardVariationTaxWithholdingAmount": 50,
    "EligibleToReceiveLeaveLoading": false,
    "ApprovedWithholdingVariationPercentage": 75,
    "HasStudentStartupLoan": true,
    "HasLoanOrStudentDebt": true,
    "UpdatedDateUTC": "/Date(1583967733054+0000)/",
    "IncludeLeaveLoadingInQualifyingEarnings": true
  },
  "IncomeType": "SALARYANDWAGES",
  "EmploymentType": "EMPLOYEE",
  "CountryOfResidence": "AU",
  "IsSTP2Qualified": true,
  "LeaveBalances": [
    {
      "LeaveName": "Annual Leave",
      "LeaveTypeID": "544d9292-4329-4512-bfff-a9f15236d776",
      "NumberOfUnits": 81.2602,
      "TypeOfUnits": "Hours"
    }
  ],
  "SuperMemberships": [
    {
      "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      "SuperFundID": "2187a42b-639a-45cb-9eed-cd4ae488306a",
      "EmployeeNumber": 1234
    }
  ],
  "Status": "ACTIVE",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|string|true|none|First name of employee|
|LastName|string|true|none|Last name of employee|
|DateOfBirth|string|true|none|Date of birth of the employee (YYYY-MM-DD)|
|HomeAddress|[HomeAddress](#schemahomeaddress)|false|none|none|
|StartDate|string|false|none|Start date for an employee (YYYY-MM-DD)|
|Title|string|false|none|Title of the employee|
|MiddleNames|string|false|none|Middle name(s) of the employee|
|Email|string|false|none|The email address for the employee|
|Gender|string|false|none|The employee’s gender. See Employee Gender|
|Phone|string|false|none|Employee phone number|
|Mobile|string|false|none|Employee mobile number|
|TwitterUserName|string|false|none|Employee’s twitter name|
|IsAuthorisedToApproveLeave|boolean|false|none|Authorised to approve other employees' leave requests|
|IsAuthorisedToApproveTimesheets|boolean|false|none|Authorised to approve timesheets|
|JobTitle|string|false|none|JobTitle of the employee|
|Classification|string|false|none|Employees classification|
|OrdinaryEarningsRateID|string(uuid)|false|none|Xero unique identifier for earnings rate|
|PayrollCalendarID|string(uuid)|false|none|Xero unique identifier for payroll calendar for the employee|
|EmployeeGroupName|string|false|none|The Employee Group allows you to report on payroll expenses and liabilities for each group of employees|
|EmployeeID|string(uuid)|false|none|Xero unique identifier for an Employee|
|TerminationDate|string|false|none|Employee Termination Date (YYYY-MM-DD)|
|TerminationReason|string|false|none|* `V` Voluntary cessation - An employee resignation, retirement, domestic or pressing necessity or abandonment of employment<br>* `I` Ill health - An employee resignation due to medical condition that prevents the continuation of employment, such as for illness, ill-health, medical unfitness or total permanent disability<br>* `D` Deceased - The death of an employee<br>* `R` Redundancy - An employer-initiated termination of employment due to a genuine redundancy or approved early retirement scheme<br>* `F` Dismissal - An employer-initiated termination of employment due to dismissal, inability to perform the required work, misconduct or inefficiency<br>* `C` Contract cessation - The natural conclusion of a limited employment relationship due to contract/engagement duration or task completion, seasonal work completion, or to cease casuals that are no longer required<br>* `T` Transfer - The administrative arrangements performed to transfer employees across payroll systems, move them temporarily to another employer (machinery of government for public servants), transfer of business, move them to outsourcing arrangements or other such technical activities.<br>|
|BankAccounts|[[BankAccount](#schemabankaccount)]|false|none|none|
|PayTemplate|[PayTemplate](#schemapaytemplate)|false|none|none|
|OpeningBalances|[OpeningBalances](#schemaopeningbalances)|false|none|none|
|TaxDeclaration|[TaxDeclaration](#schemataxdeclaration)|false|none|none|
|IncomeType|[IncomeType](#schemaincometype)|false|none|none|
|EmploymentType|[EmploymentType](#schemaemploymenttype)|false|none|none|
|CountryOfResidence|[CountryOfResidence](#schemacountryofresidence)|false|none|Country of residence as a valid ISO 3166-1 alpha-2 country code e.g. "AU", "NZ", "CA". Only applicable, and mandatory if income type is WORKINGHOLIDAYMAKER.|
|IsSTP2Qualified|boolean|false|none|Indicates if the employee has been updated for STP Phase 2 compliance. Doesn't indicate that the employee is payable.|
|LeaveBalances|[[LeaveBalance](#schemaleavebalance)]|false|none|none|
|SuperMemberships|[[SuperMembership](#schemasupermembership)]|false|none|none|
|Status|[EmployeeStatus](#schemaemployeestatus)|false|none|Employee Status Types|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|Gender|N|
|Gender|M|
|Gender|F|
|Gender|I|
|TerminationReason|V|
|TerminationReason|I|
|TerminationReason|D|
|TerminationReason|R|
|TerminationReason|F|
|TerminationReason|C|
|TerminationReason|T|
|IncomeType|SALARYANDWAGES|
|IncomeType|WORKINGHOLIDAYMAKER|
|IncomeType|NONEMPLOYEE|
|IncomeType|CLOSELYHELDPAYEES|
|IncomeType|LABOURHIRE|
|EmploymentType|EMPLOYEE|
|EmploymentType|CONTRACTOR|
|CountryOfResidence|AF|
|CountryOfResidence|AX|
|CountryOfResidence|AL|
|CountryOfResidence|DZ|
|CountryOfResidence|AS|
|CountryOfResidence|AD|
|CountryOfResidence|AO|
|CountryOfResidence|AI|
|CountryOfResidence|AQ|
|CountryOfResidence|AG|
|CountryOfResidence|AR|
|CountryOfResidence|AM|
|CountryOfResidence|AW|
|CountryOfResidence|AU|
|CountryOfResidence|AT|
|CountryOfResidence|AZ|
|CountryOfResidence|BS|
|CountryOfResidence|BH|
|CountryOfResidence|BD|
|CountryOfResidence|BB|
|CountryOfResidence|BY|
|CountryOfResidence|BE|
|CountryOfResidence|BZ|
|CountryOfResidence|BJ|
|CountryOfResidence|BM|
|CountryOfResidence|BT|
|CountryOfResidence|BO|
|CountryOfResidence|BA|
|CountryOfResidence|BW|
|CountryOfResidence|BV|
|CountryOfResidence|BR|
|CountryOfResidence|IO|
|CountryOfResidence|BN|
|CountryOfResidence|BG|
|CountryOfResidence|BF|
|CountryOfResidence|BI|
|CountryOfResidence|KH|
|CountryOfResidence|CM|
|CountryOfResidence|CA|
|CountryOfResidence|CV|
|CountryOfResidence|KY|
|CountryOfResidence|CF|
|CountryOfResidence|TD|
|CountryOfResidence|CL|
|CountryOfResidence|CN|
|CountryOfResidence|CX|
|CountryOfResidence|CC|
|CountryOfResidence|CO|
|CountryOfResidence|KM|
|CountryOfResidence|CG|
|CountryOfResidence|CD|
|CountryOfResidence|CK|
|CountryOfResidence|CR|
|CountryOfResidence|CI|
|CountryOfResidence|HR|
|CountryOfResidence|CU|
|CountryOfResidence|CY|
|CountryOfResidence|CZ|
|CountryOfResidence|DK|
|CountryOfResidence|DJ|
|CountryOfResidence|DM|
|CountryOfResidence|DO|
|CountryOfResidence|EC|
|CountryOfResidence|EG|
|CountryOfResidence|SV|
|CountryOfResidence|GQ|
|CountryOfResidence|ER|
|CountryOfResidence|EE|
|CountryOfResidence|ET|
|CountryOfResidence|FK|
|CountryOfResidence|FO|
|CountryOfResidence|FJ|
|CountryOfResidence|FI|
|CountryOfResidence|FR|
|CountryOfResidence|GF|
|CountryOfResidence|PF|
|CountryOfResidence|TF|
|CountryOfResidence|GA|
|CountryOfResidence|GM|
|CountryOfResidence|GE|
|CountryOfResidence|DE|
|CountryOfResidence|GH|
|CountryOfResidence|GI|
|CountryOfResidence|GR|
|CountryOfResidence|GL|
|CountryOfResidence|GD|
|CountryOfResidence|GP|
|CountryOfResidence|GU|
|CountryOfResidence|GT|
|CountryOfResidence|GG|
|CountryOfResidence|GN|
|CountryOfResidence|GW|
|CountryOfResidence|GY|
|CountryOfResidence|HT|
|CountryOfResidence|HM|
|CountryOfResidence|VA|
|CountryOfResidence|HN|
|CountryOfResidence|HK|
|CountryOfResidence|HU|
|CountryOfResidence|IS|
|CountryOfResidence|IN|
|CountryOfResidence|ID|
|CountryOfResidence|IR|
|CountryOfResidence|IQ|
|CountryOfResidence|IE|
|CountryOfResidence|IM|
|CountryOfResidence|IL|
|CountryOfResidence|IT|
|CountryOfResidence|JM|
|CountryOfResidence|JP|
|CountryOfResidence|JE|
|CountryOfResidence|JO|
|CountryOfResidence|KZ|
|CountryOfResidence|KE|
|CountryOfResidence|KI|
|CountryOfResidence|KP|
|CountryOfResidence|KR|
|CountryOfResidence|KW|
|CountryOfResidence|KG|
|CountryOfResidence|LA|
|CountryOfResidence|LV|
|CountryOfResidence|LB|
|CountryOfResidence|LS|
|CountryOfResidence|LR|
|CountryOfResidence|LY|
|CountryOfResidence|LI|
|CountryOfResidence|LT|
|CountryOfResidence|LU|
|CountryOfResidence|MO|
|CountryOfResidence|MK|
|CountryOfResidence|MG|
|CountryOfResidence|MW|
|CountryOfResidence|MY|
|CountryOfResidence|MV|
|CountryOfResidence|ML|
|CountryOfResidence|MT|
|CountryOfResidence|MH|
|CountryOfResidence|MQ|
|CountryOfResidence|MR|
|CountryOfResidence|MU|
|CountryOfResidence|YT|
|CountryOfResidence|MX|
|CountryOfResidence|FM|
|CountryOfResidence|MD|
|CountryOfResidence|MC|
|CountryOfResidence|MN|
|CountryOfResidence|ME|
|CountryOfResidence|MS|
|CountryOfResidence|MA|
|CountryOfResidence|MZ|
|CountryOfResidence|MM|
|CountryOfResidence|NA|
|CountryOfResidence|NR|
|CountryOfResidence|NP|
|CountryOfResidence|NL|
|CountryOfResidence|AN|
|CountryOfResidence|NC|
|CountryOfResidence|NZ|
|CountryOfResidence|NI|
|CountryOfResidence|NE|
|CountryOfResidence|NG|
|CountryOfResidence|NU|
|CountryOfResidence|NF|
|CountryOfResidence|MP|
|CountryOfResidence|NO|
|CountryOfResidence|OM|
|CountryOfResidence|PK|
|CountryOfResidence|PW|
|CountryOfResidence|PS|
|CountryOfResidence|PA|
|CountryOfResidence|PG|
|CountryOfResidence|PY|
|CountryOfResidence|PE|
|CountryOfResidence|PH|
|CountryOfResidence|PN|
|CountryOfResidence|PL|
|CountryOfResidence|PT|
|CountryOfResidence|PR|
|CountryOfResidence|QA|
|CountryOfResidence|RE|
|CountryOfResidence|RO|
|CountryOfResidence|RU|
|CountryOfResidence|RW|
|CountryOfResidence|BL|
|CountryOfResidence|SH|
|CountryOfResidence|KN|
|CountryOfResidence|LC|
|CountryOfResidence|MF|
|CountryOfResidence|PM|
|CountryOfResidence|VC|
|CountryOfResidence|WS|
|CountryOfResidence|SM|
|CountryOfResidence|ST|
|CountryOfResidence|SA|
|CountryOfResidence|SN|
|CountryOfResidence|RS|
|CountryOfResidence|SC|
|CountryOfResidence|SL|
|CountryOfResidence|SG|
|CountryOfResidence|SK|
|CountryOfResidence|SI|
|CountryOfResidence|SB|
|CountryOfResidence|SO|
|CountryOfResidence|ZA|
|CountryOfResidence|GS|
|CountryOfResidence|ES|
|CountryOfResidence|LK|
|CountryOfResidence|SD|
|CountryOfResidence|SR|
|CountryOfResidence|SJ|
|CountryOfResidence|SZ|
|CountryOfResidence|SE|
|CountryOfResidence|CH|
|CountryOfResidence|SY|
|CountryOfResidence|TW|
|CountryOfResidence|TJ|
|CountryOfResidence|TZ|
|CountryOfResidence|TH|
|CountryOfResidence|TL|
|CountryOfResidence|TG|
|CountryOfResidence|TK|
|CountryOfResidence|TO|
|CountryOfResidence|TT|
|CountryOfResidence|TN|
|CountryOfResidence|TR|
|CountryOfResidence|TM|
|CountryOfResidence|TC|
|CountryOfResidence|TV|
|CountryOfResidence|UG|
|CountryOfResidence|UA|
|CountryOfResidence|AE|
|CountryOfResidence|GB|
|CountryOfResidence|US|
|CountryOfResidence|UM|
|CountryOfResidence|UY|
|CountryOfResidence|UZ|
|CountryOfResidence|VU|
|CountryOfResidence|VE|
|CountryOfResidence|VN|
|CountryOfResidence|VG|
|CountryOfResidence|VI|
|CountryOfResidence|WF|
|CountryOfResidence|EH|
|CountryOfResidence|YE|
|CountryOfResidence|ZM|
|CountryOfResidence|ZW|
|CountryOfResidence|BQ|
|CountryOfResidence|CW|
|CountryOfResidence|SX|
|CountryOfResidence|SS|
|Status|ACTIVE|
|Status|TERMINATED|

<h2 id="tocS_LeaveApplications">LeaveApplications</h2>
<!-- backwards compatibility -->
<a id="schemaleaveapplications"></a>
<a id="schema_LeaveApplications"></a>
<a id="tocSleaveapplications"></a>
<a id="tocsleaveapplications"></a>

```json
{
  "LeaveApplications": [
    {
      "LeaveApplicationID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "EmployeeID": "fb4ebd68-6568-41eb-96ab-628a0f54b4b8",
      "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
      "Title": "Annual Leave",
      "StartDate": "/Date(322560000000+0000)/",
      "EndDate": "/Date(322560000000+0000)/",
      "Description": "My leave",
      "PayOutType": "DEFAULT",
      "LeavePeriods": [
        {
          "NumberOfUnits": 22.8,
          "PayPeriodEndDate": "/Date(322560000000+0000)/",
          "PayPeriodStartDate": "/Date(322560000000+0000)/",
          "LeavePeriodStatus": "SCHEDULED"
        }
      ],
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveApplications|[[LeaveApplication](#schemaleaveapplication)]|false|none|none|

<h2 id="tocS_LeaveApplication">LeaveApplication</h2>
<!-- backwards compatibility -->
<a id="schemaleaveapplication"></a>
<a id="schema_LeaveApplication"></a>
<a id="tocSleaveapplication"></a>
<a id="tocsleaveapplication"></a>

```json
{
  "LeaveApplicationID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "EmployeeID": "fb4ebd68-6568-41eb-96ab-628a0f54b4b8",
  "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
  "Title": "Annual Leave",
  "StartDate": "/Date(322560000000+0000)/",
  "EndDate": "/Date(322560000000+0000)/",
  "Description": "My leave",
  "PayOutType": "DEFAULT",
  "LeavePeriods": [
    {
      "NumberOfUnits": 22.8,
      "PayPeriodEndDate": "/Date(322560000000+0000)/",
      "PayPeriodStartDate": "/Date(322560000000+0000)/",
      "LeavePeriodStatus": "SCHEDULED"
    }
  ],
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveApplicationID|string(uuid)|false|none|The Xero identifier for Payroll Employee|
|EmployeeID|string(uuid)|false|none|The Xero identifier for Payroll Employee|
|LeaveTypeID|string(uuid)|false|none|The Xero identifier for Leave Type|
|Title|string|false|none|The title of the leave|
|StartDate|string|false|none|Start date of the leave (YYYY-MM-DD)|
|EndDate|string|false|none|End date of the leave (YYYY-MM-DD)|
|Description|string|false|none|The Description of the Leave|
|PayOutType|[PayOutType](#schemapayouttype)|false|none|How the requested leave will be paid out, e.g. cashed out.|
|LeavePeriods|[[LeavePeriod](#schemaleaveperiod)]|false|none|none|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|PayOutType|DEFAULT|
|PayOutType|CASHED_OUT|

<h2 id="tocS_PayOutType">PayOutType</h2>
<!-- backwards compatibility -->
<a id="schemapayouttype"></a>
<a id="schema_PayOutType"></a>
<a id="tocSpayouttype"></a>
<a id="tocspayouttype"></a>

```json
"DEFAULT"
```

How the requested leave will be paid out, e.g. cashed out.

<h2 id="tocS_LeavePeriod">LeavePeriod</h2>
<!-- backwards compatibility -->
<a id="schemaleaveperiod"></a>
<a id="schema_LeavePeriod"></a>
<a id="tocSleaveperiod"></a>
<a id="tocsleaveperiod"></a>

```json
{
  "NumberOfUnits": 22.8,
  "PayPeriodEndDate": "/Date(322560000000+0000)/",
  "PayPeriodStartDate": "/Date(322560000000+0000)/",
  "LeavePeriodStatus": "SCHEDULED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfUnits|number(double)|false|none|The Number of Units for the leave|
|PayPeriodEndDate|string|false|none|The Pay Period End Date (YYYY-MM-DD)|
|PayPeriodStartDate|string|false|none|The Pay Period Start Date (YYYY-MM-DD)|
|LeavePeriodStatus|[LeavePeriodStatus](#schemaleaveperiodstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|LeavePeriodStatus|SCHEDULED|
|LeavePeriodStatus|PROCESSED|
|LeavePeriodStatus|REQUESTED|
|LeavePeriodStatus|REJECTED|

<h2 id="tocS_LeavePeriodStatus">LeavePeriodStatus</h2>
<!-- backwards compatibility -->
<a id="schemaleaveperiodstatus"></a>
<a id="schema_LeavePeriodStatus"></a>
<a id="tocSleaveperiodstatus"></a>
<a id="tocsleaveperiodstatus"></a>

```json
"SCHEDULED"
```

<h2 id="tocS_PayItems">PayItems</h2>
<!-- backwards compatibility -->
<a id="schemapayitems"></a>
<a id="schema_PayItems"></a>
<a id="tocSpayitems"></a>
<a id="tocspayitems"></a>

```json
{
  "PayItems": {
    "EarningsRates": [
      {
        "Name": "PTO",
        "AccountCode": 720,
        "TypeOfUnits": "Fixed",
        "IsExemptFromTax": false,
        "IsExemptFromSuper": false,
        "IsReportableAsW1": false,
        "IsQualifyingEarnings": true,
        "AllowanceContributesToAnnualLeaveRate": false,
        "AllowanceContributesToOvertimeRate": false,
        "EarningsType": "FIXED",
        "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "RateType": "FIXEDAMOUNT",
        "RatePerUnit": 10,
        "Multiplier": 1.5,
        "AccrueLeave": false,
        "Amount": 50.3,
        "EmploymentTerminationPaymentType": "O",
        "UpdatedDateUTC": "/Date(1583967733054+0000)/",
        "CurrentRecord": true,
        "AllowanceType": "CAR",
        "AllowanceCategory": "NONDEDUCTIBLE"
      }
    ],
    "DeductionTypes": [
      {
        "Name": "PTO",
        "AccountCode": 720,
        "ReducesTax": false,
        "ReducesSuper": false,
        "IsExemptFromW1": false,
        "DeductionTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "UpdatedDateUTC": "/Date(1583967733054+0000)/",
        "DeductionCategory": "NONE",
        "CurrentRecord": true
      }
    ],
    "LeaveTypes": [
      {
        "Name": "PTO",
        "TypeOfUnits": "Hours",
        "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "NormalEntitlement": 152,
        "LeaveLoadingRate": 2,
        "UpdatedDateUTC": "/Date(1583967733054+0000)/",
        "IsPaidLeave": true,
        "ShowOnPayslip": true,
        "CurrentRecord": true,
        "LeaveCategoryCode": "ANNUALLEAVE",
        "SGCExempt": true,
        "IsQualifyingEarnings": true
      }
    ],
    "ReimbursementTypes": [
      {
        "Name": "PTO",
        "AccountCode": 720,
        "ReimbursementTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "UpdatedDateUTC": "/Date(1583967733054+0000)/",
        "CurrentRecord": true
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayItems|[PayItem](#schemapayitem)|false|none|none|

<h2 id="tocS_PayItem">PayItem</h2>
<!-- backwards compatibility -->
<a id="schemapayitem"></a>
<a id="schema_PayItem"></a>
<a id="tocSpayitem"></a>
<a id="tocspayitem"></a>

```json
{
  "EarningsRates": [
    {
      "Name": "PTO",
      "AccountCode": 720,
      "TypeOfUnits": "Fixed",
      "IsExemptFromTax": false,
      "IsExemptFromSuper": false,
      "IsReportableAsW1": false,
      "IsQualifyingEarnings": true,
      "AllowanceContributesToAnnualLeaveRate": false,
      "AllowanceContributesToOvertimeRate": false,
      "EarningsType": "FIXED",
      "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "RateType": "FIXEDAMOUNT",
      "RatePerUnit": 10,
      "Multiplier": 1.5,
      "AccrueLeave": false,
      "Amount": 50.3,
      "EmploymentTerminationPaymentType": "O",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "CurrentRecord": true,
      "AllowanceType": "CAR",
      "AllowanceCategory": "NONDEDUCTIBLE"
    }
  ],
  "DeductionTypes": [
    {
      "Name": "PTO",
      "AccountCode": 720,
      "ReducesTax": false,
      "ReducesSuper": false,
      "IsExemptFromW1": false,
      "DeductionTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "DeductionCategory": "NONE",
      "CurrentRecord": true
    }
  ],
  "LeaveTypes": [
    {
      "Name": "PTO",
      "TypeOfUnits": "Hours",
      "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "NormalEntitlement": 152,
      "LeaveLoadingRate": 2,
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "IsPaidLeave": true,
      "ShowOnPayslip": true,
      "CurrentRecord": true,
      "LeaveCategoryCode": "ANNUALLEAVE",
      "SGCExempt": true,
      "IsQualifyingEarnings": true
    }
  ],
  "ReimbursementTypes": [
    {
      "Name": "PTO",
      "AccountCode": 720,
      "ReimbursementTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "CurrentRecord": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsRates|[[EarningsRate](#schemaearningsrate)]|false|none|none|
|DeductionTypes|[[DeductionType](#schemadeductiontype)]|false|none|none|
|LeaveTypes|[[LeaveType](#schemaleavetype)]|false|none|none|
|ReimbursementTypes|[[ReimbursementType](#schemareimbursementtype)]|false|none|none|

<h2 id="tocS_PayrollCalendars">PayrollCalendars</h2>
<!-- backwards compatibility -->
<a id="schemapayrollcalendars"></a>
<a id="schema_PayrollCalendars"></a>
<a id="tocSpayrollcalendars"></a>
<a id="tocspayrollcalendars"></a>

```json
{
  "PayrollCalendars": [
    {
      "Name": "Fortnightly Calendar",
      "CalendarType": "WEEKLY",
      "StartDate": "/Date(322560000000+0000)/",
      "PaymentDate": "/Date(322560000000+0000)/",
      "PayrollCalendarID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "ReferenceDate": "/Date(322560000000+0000)/",
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayrollCalendars|[[PayrollCalendar](#schemapayrollcalendar)]|false|none|none|

<h2 id="tocS_PayrollCalendar">PayrollCalendar</h2>
<!-- backwards compatibility -->
<a id="schemapayrollcalendar"></a>
<a id="schema_PayrollCalendar"></a>
<a id="tocSpayrollcalendar"></a>
<a id="tocspayrollcalendar"></a>

```json
{
  "Name": "Fortnightly Calendar",
  "CalendarType": "WEEKLY",
  "StartDate": "/Date(322560000000+0000)/",
  "PaymentDate": "/Date(322560000000+0000)/",
  "PayrollCalendarID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "ReferenceDate": "/Date(322560000000+0000)/",
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the Payroll Calendar|
|CalendarType|[CalendarType](#schemacalendartype)|false|none|none|
|StartDate|string|false|none|The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD)|
|PaymentDate|string|false|none|The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD)|
|PayrollCalendarID|string(uuid)|false|none|Xero identifier|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|ReferenceDate|string|false|none|Reference Date (YYYY-MM-DD)|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|CalendarType|WEEKLY|
|CalendarType|FORTNIGHTLY|
|CalendarType|FOURWEEKLY|
|CalendarType|MONTHLY|
|CalendarType|TWICEMONTHLY|
|CalendarType|QUARTERLY|

<h2 id="tocS_Timesheets">Timesheets</h2>
<!-- backwards compatibility -->
<a id="schematimesheets"></a>
<a id="schema_Timesheets"></a>
<a id="tocStimesheets"></a>
<a id="tocstimesheets"></a>

```json
{
  "Timesheets": [
    {
      "EmployeeID": "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
      "StartDate": "/Date(322560000000+0000)/",
      "EndDate": "/Date(322560000000+0000)/",
      "Status": "DRAFT",
      "Hours": 31,
      "TimesheetID": "049765fc-4506-48fb-bf88-3578dec0ec47",
      "TimesheetLines": [
        {
          "EarningsRateID": "966c5c77-2ef0-4320-b6a9-6c27b080ecc5",
          "TrackingItemID": "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a",
          "NumberOfUnits": [
            3
          ],
          "UpdatedDateUTC": "/Date(1583967733054+0000)/"
        }
      ],
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timesheets|[[Timesheet](#schematimesheet)]|false|none|none|

<h2 id="tocS_TimesheetObject">TimesheetObject</h2>
<!-- backwards compatibility -->
<a id="schematimesheetobject"></a>
<a id="schema_TimesheetObject"></a>
<a id="tocStimesheetobject"></a>
<a id="tocstimesheetobject"></a>

```json
{
  "Timesheet": {
    "EmployeeID": "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
    "StartDate": "/Date(322560000000+0000)/",
    "EndDate": "/Date(322560000000+0000)/",
    "Status": "DRAFT",
    "Hours": 31,
    "TimesheetID": "049765fc-4506-48fb-bf88-3578dec0ec47",
    "TimesheetLines": [
      {
        "EarningsRateID": "966c5c77-2ef0-4320-b6a9-6c27b080ecc5",
        "TrackingItemID": "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a",
        "NumberOfUnits": [
          3
        ],
        "UpdatedDateUTC": "/Date(1583967733054+0000)/"
      }
    ],
    "UpdatedDateUTC": "/Date(1583967733054+0000)/",
    "ValidationErrors": [
      {
        "Message": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timesheet|[Timesheet](#schematimesheet)|false|none|none|

<h2 id="tocS_Timesheet">Timesheet</h2>
<!-- backwards compatibility -->
<a id="schematimesheet"></a>
<a id="schema_Timesheet"></a>
<a id="tocStimesheet"></a>
<a id="tocstimesheet"></a>

```json
{
  "EmployeeID": "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
  "StartDate": "/Date(322560000000+0000)/",
  "EndDate": "/Date(322560000000+0000)/",
  "Status": "DRAFT",
  "Hours": 31,
  "TimesheetID": "049765fc-4506-48fb-bf88-3578dec0ec47",
  "TimesheetLines": [
    {
      "EarningsRateID": "966c5c77-2ef0-4320-b6a9-6c27b080ecc5",
      "TrackingItemID": "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a",
      "NumberOfUnits": [
        3
      ],
      "UpdatedDateUTC": "/Date(1583967733054+0000)/"
    }
  ],
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmployeeID|string(uuid)|true|none|The Xero identifier for an employee|
|StartDate|string|true|none|Period start date (YYYY-MM-DD)|
|EndDate|string|true|none|Period end date (YYYY-MM-DD)|
|Status|[TimesheetStatus](#schematimesheetstatus)|false|none|none|
|Hours|number(double)|false|none|Timesheet total hours|
|TimesheetID|string(uuid)|false|none|The Xero identifier for a Payroll Timesheet|
|TimesheetLines|[TimesheetLines](#schematimesheetlines)|false|none|none|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|DRAFT|
|Status|PROCESSED|
|Status|APPROVED|
|Status|REJECTED|
|Status|REQUESTED|

<h2 id="tocS_TimesheetLines">TimesheetLines</h2>
<!-- backwards compatibility -->
<a id="schematimesheetlines"></a>
<a id="schema_TimesheetLines"></a>
<a id="tocStimesheetlines"></a>
<a id="tocstimesheetlines"></a>

```json
[
  {
    "EarningsRateID": "966c5c77-2ef0-4320-b6a9-6c27b080ecc5",
    "TrackingItemID": "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a",
    "NumberOfUnits": [
      3
    ],
    "UpdatedDateUTC": "/Date(1583967733054+0000)/"
  }
]
```

<h2 id="tocS_TimesheetLine">TimesheetLine</h2>
<!-- backwards compatibility -->
<a id="schematimesheetline"></a>
<a id="schema_TimesheetLine"></a>
<a id="tocStimesheetline"></a>
<a id="tocstimesheetline"></a>

```json
{
  "EarningsRateID": "966c5c77-2ef0-4320-b6a9-6c27b080ecc5",
  "TrackingItemID": "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a",
  "NumberOfUnits": [
    3
  ],
  "UpdatedDateUTC": "/Date(1583967733054+0000)/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsRateID|string(uuid)|false|none|The Xero identifier for an Earnings Rate|
|TrackingItemID|string(uuid)|false|none|The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.|
|NumberOfUnits|[number(double)]|false|none|The number of units on a timesheet line|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|

<h2 id="tocS_PayRuns">PayRuns</h2>
<!-- backwards compatibility -->
<a id="schemapayruns"></a>
<a id="schema_PayRuns"></a>
<a id="tocSpayruns"></a>
<a id="tocspayruns"></a>

```json
{
  "PayRuns": [
    {
      "PayrollCalendarID": "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
      "PayRunID": "bba1d10f-63b1-4692-b5c5-a99f869523a4",
      "PayRunPeriodStartDate": "/Date(322560000000+0000)/",
      "PayRunPeriodEndDate": "/Date(322560000000+0000)/",
      "PayRunStatus": "DRAFT",
      "PaymentDate": "/Date(322560000000+0000)/",
      "PayslipMessage": "Thanks for being awesome",
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "Payslips": [
        {
          "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
          "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
          "FirstName": "Karen",
          "LastName": "Jones",
          "EmployeeGroup": "Marketing",
          "Wages": 1060.5,
          "Deductions": 0,
          "Tax": 198,
          "Super": 75.6,
          "Reimbursements": 0,
          "NetPay": 862.5,
          "UpdatedDateUTC": "/Date(1583967733054+0000)/"
        }
      ],
      "Wages": 1060.5,
      "Deductions": 0,
      "Tax": 198,
      "Super": 75.6,
      "Reimbursement": 0,
      "NetPay": 862.5,
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayRuns|[[PayRun](#schemapayrun)]|false|none|none|

<h2 id="tocS_PayRun">PayRun</h2>
<!-- backwards compatibility -->
<a id="schemapayrun"></a>
<a id="schema_PayRun"></a>
<a id="tocSpayrun"></a>
<a id="tocspayrun"></a>

```json
{
  "PayrollCalendarID": "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
  "PayRunID": "bba1d10f-63b1-4692-b5c5-a99f869523a4",
  "PayRunPeriodStartDate": "/Date(322560000000+0000)/",
  "PayRunPeriodEndDate": "/Date(322560000000+0000)/",
  "PayRunStatus": "DRAFT",
  "PaymentDate": "/Date(322560000000+0000)/",
  "PayslipMessage": "Thanks for being awesome",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "Payslips": [
    {
      "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
      "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
      "FirstName": "Karen",
      "LastName": "Jones",
      "EmployeeGroup": "Marketing",
      "Wages": 1060.5,
      "Deductions": 0,
      "Tax": 198,
      "Super": 75.6,
      "Reimbursements": 0,
      "NetPay": 862.5,
      "UpdatedDateUTC": "/Date(1583967733054+0000)/"
    }
  ],
  "Wages": 1060.5,
  "Deductions": 0,
  "Tax": 198,
  "Super": 75.6,
  "Reimbursement": 0,
  "NetPay": 862.5,
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayrollCalendarID|string(uuid)|true|none|Xero identifier for pay run|
|PayRunID|string(uuid)|false|none|Xero identifier for pay run|
|PayRunPeriodStartDate|string|false|none|Period Start Date for the PayRun (YYYY-MM-DD)|
|PayRunPeriodEndDate|string|false|none|Period End Date for the PayRun (YYYY-MM-DD)|
|PayRunStatus|[PayRunStatus](#schemapayrunstatus)|false|none|none|
|PaymentDate|string|false|none|Payment Date for the PayRun (YYYY-MM-DD)|
|PayslipMessage|string|false|none|Payslip message for the PayRun|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|Payslips|[[PayslipSummary](#schemapayslipsummary)]|false|none|The payslips in the payrun|
|Wages|number(double)|false|none|The total Wages for the Payrun|
|Deductions|number(double)|false|none|The total Deductions for the Payrun|
|Tax|number(double)|false|none|The total Tax for the Payrun|
|Super|number(double)|false|none|The total Super for the Payrun|
|Reimbursement|number(double)|false|none|The total Reimbursements for the Payrun|
|NetPay|number(double)|false|none|The total NetPay for the Payrun|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|PayRunStatus|DRAFT|
|PayRunStatus|POSTED|

<h2 id="tocS_PayslipSummary">PayslipSummary</h2>
<!-- backwards compatibility -->
<a id="schemapayslipsummary"></a>
<a id="schema_PayslipSummary"></a>
<a id="tocSpayslipsummary"></a>
<a id="tocspayslipsummary"></a>

```json
{
  "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
  "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
  "FirstName": "Karen",
  "LastName": "Jones",
  "EmployeeGroup": "Marketing",
  "Wages": 1060.5,
  "Deductions": 0,
  "Tax": 198,
  "Super": 75.6,
  "Reimbursements": 0,
  "NetPay": 862.5,
  "UpdatedDateUTC": "/Date(1583967733054+0000)/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmployeeID|string(uuid)|false|none|The Xero identifier for an employee|
|PayslipID|string(uuid)|false|none|Xero identifier for the payslip|
|FirstName|string|false|none|First name of employee|
|LastName|string|false|none|Last name of employee|
|EmployeeGroup|string|false|none|Employee group name|
|Wages|number(double)|false|none|The Wages for the Payslip|
|Deductions|number(double)|false|none|The Deductions for the Payslip|
|Tax|number(double)|false|none|The Tax for the Payslip|
|Super|number(double)|false|none|The Super for the Payslip|
|Reimbursements|number(double)|false|none|The Reimbursements for the Payslip|
|NetPay|number(double)|false|none|The NetPay for the Payslip|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|

<h2 id="tocS_PayslipLines">PayslipLines</h2>
<!-- backwards compatibility -->
<a id="schemapaysliplines"></a>
<a id="schema_PayslipLines"></a>
<a id="tocSpaysliplines"></a>
<a id="tocspaysliplines"></a>

```json
{
  "EarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "LeaveEarningsLines": [
    {
      "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "RatePerUnit": 38,
      "NumberOfUnits": 2.5,
      "PayOutType": "DEFAULT"
    }
  ],
  "TimesheetEarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "DeductionLines": [
    {
      "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
      "CalculationType": "FIXEDAMOUNT",
      "Amount": 10,
      "Percentage": 10,
      "NumberOfUnits": 10
    }
  ],
  "LeaveAccrualLines": [
    {
      "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "NumberOfUnits": 105.5,
      "AutoCalculate": true
    }
  ],
  "ReimbursementLines": [
    {
      "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
      "Amount": 10,
      "Description": "For the taxi",
      "ExpenseAccount": 420
    }
  ],
  "SuperannuationLines": [
    {
      "SuperMembershipID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "ContributionType": "SGC",
      "CalculationType": "FIXEDAMOUNT",
      "MinimumMonthlyEarnings": 100.5,
      "ExpenseAccountCode": 450,
      "LiabilityAccountCode": 650,
      "PaymentDateForThisPeriod": "/Date(322560000000+0000)/",
      "Percentage": 4,
      "Amount": 10.5
    }
  ],
  "TaxLines": [
    {
      "PayslipTaxLineID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "Amount": 50,
      "TaxTypeName": "Manual Adjustment",
      "Description": "string",
      "ManualTaxType": "PAYGMANUAL",
      "LiabilityAccount": 620
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|LeaveEarningsLines|[[LeaveEarningsLine](#schemaleaveearningsline)]|false|none|none|
|TimesheetEarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|DeductionLines|[[DeductionLine](#schemadeductionline)]|false|none|none|
|LeaveAccrualLines|[[LeaveAccrualLine](#schemaleaveaccrualline)]|false|none|none|
|ReimbursementLines|[[ReimbursementLine](#schemareimbursementline)]|false|none|none|
|SuperannuationLines|[[SuperannuationLine](#schemasuperannuationline)]|false|none|none|
|TaxLines|[[TaxLine](#schemataxline)]|false|none|none|

<h2 id="tocS_PayslipObject">PayslipObject</h2>
<!-- backwards compatibility -->
<a id="schemapayslipobject"></a>
<a id="schema_PayslipObject"></a>
<a id="tocSpayslipobject"></a>
<a id="tocspayslipobject"></a>

```json
{
  "Payslip": {
    "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
    "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
    "FirstName": "Karen",
    "LastName": "Jones",
    "Wages": 1060.5,
    "Deductions": 0,
    "Tax": 198,
    "Super": 75.6,
    "Reimbursements": 0,
    "NetPay": 862.5,
    "EarningsLines": [
      {
        "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
        "CalculationType": "USEEARNINGSRATE",
        "AnnualSalary": 40000,
        "NumberOfUnitsPerWeek": 38,
        "RatePerUnit": 38,
        "NormalNumberOfUnits": 38,
        "Amount": 38,
        "NumberOfUnits": 2.5,
        "FixedAmount": 2.5
      }
    ],
    "LeaveEarningsLines": [
      {
        "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "RatePerUnit": 38,
        "NumberOfUnits": 2.5,
        "PayOutType": "DEFAULT"
      }
    ],
    "TimesheetEarningsLines": [
      {
        "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
        "CalculationType": "USEEARNINGSRATE",
        "AnnualSalary": 40000,
        "NumberOfUnitsPerWeek": 38,
        "RatePerUnit": 38,
        "NormalNumberOfUnits": 38,
        "Amount": 38,
        "NumberOfUnits": 2.5,
        "FixedAmount": 2.5
      }
    ],
    "DeductionLines": [
      {
        "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
        "CalculationType": "FIXEDAMOUNT",
        "Amount": 10,
        "Percentage": 10,
        "NumberOfUnits": 10
      }
    ],
    "LeaveAccrualLines": [
      {
        "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "NumberOfUnits": 105.5,
        "AutoCalculate": true
      }
    ],
    "ReimbursementLines": [
      {
        "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
        "Amount": 10,
        "Description": "For the taxi",
        "ExpenseAccount": 420
      }
    ],
    "SuperannuationLines": [
      {
        "SuperMembershipID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "ContributionType": "SGC",
        "CalculationType": "FIXEDAMOUNT",
        "MinimumMonthlyEarnings": 100.5,
        "ExpenseAccountCode": 450,
        "LiabilityAccountCode": 650,
        "PaymentDateForThisPeriod": "/Date(322560000000+0000)/",
        "Percentage": 4,
        "Amount": 10.5
      }
    ],
    "TaxLines": [
      {
        "PayslipTaxLineID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "Amount": 50,
        "TaxTypeName": "Manual Adjustment",
        "Description": "string",
        "ManualTaxType": "PAYGMANUAL",
        "LiabilityAccount": 620
      }
    ],
    "UpdatedDateUTC": "/Date(1583967733054+0000)/"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payslip|[Payslip](#schemapayslip)|false|none|none|

<h2 id="tocS_Payslips">Payslips</h2>
<!-- backwards compatibility -->
<a id="schemapayslips"></a>
<a id="schema_Payslips"></a>
<a id="tocSpayslips"></a>
<a id="tocspayslips"></a>

```json
{
  "Payslips": [
    {
      "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
      "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
      "FirstName": "Karen",
      "LastName": "Jones",
      "Wages": 1060.5,
      "Deductions": 0,
      "Tax": 198,
      "Super": 75.6,
      "Reimbursements": 0,
      "NetPay": 862.5,
      "EarningsLines": [
        {
          "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
          "CalculationType": "USEEARNINGSRATE",
          "AnnualSalary": 40000,
          "NumberOfUnitsPerWeek": 38,
          "RatePerUnit": 38,
          "NormalNumberOfUnits": 38,
          "Amount": 38,
          "NumberOfUnits": 2.5,
          "FixedAmount": 2.5
        }
      ],
      "LeaveEarningsLines": [
        {
          "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
          "RatePerUnit": 38,
          "NumberOfUnits": 2.5,
          "PayOutType": "DEFAULT"
        }
      ],
      "TimesheetEarningsLines": [
        {
          "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
          "CalculationType": "USEEARNINGSRATE",
          "AnnualSalary": 40000,
          "NumberOfUnitsPerWeek": 38,
          "RatePerUnit": 38,
          "NormalNumberOfUnits": 38,
          "Amount": 38,
          "NumberOfUnits": 2.5,
          "FixedAmount": 2.5
        }
      ],
      "DeductionLines": [
        {
          "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
          "CalculationType": "FIXEDAMOUNT",
          "Amount": 10,
          "Percentage": 10,
          "NumberOfUnits": 10
        }
      ],
      "LeaveAccrualLines": [
        {
          "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
          "NumberOfUnits": 105.5,
          "AutoCalculate": true
        }
      ],
      "ReimbursementLines": [
        {
          "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
          "Amount": 10,
          "Description": "For the taxi",
          "ExpenseAccount": 420
        }
      ],
      "SuperannuationLines": [
        {
          "SuperMembershipID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
          "ContributionType": "SGC",
          "CalculationType": "FIXEDAMOUNT",
          "MinimumMonthlyEarnings": 100.5,
          "ExpenseAccountCode": 450,
          "LiabilityAccountCode": 650,
          "PaymentDateForThisPeriod": "/Date(322560000000+0000)/",
          "Percentage": 4,
          "Amount": 10.5
        }
      ],
      "TaxLines": [
        {
          "PayslipTaxLineID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
          "Amount": 50,
          "TaxTypeName": "Manual Adjustment",
          "Description": "string",
          "ManualTaxType": "PAYGMANUAL",
          "LiabilityAccount": 620
        }
      ],
      "UpdatedDateUTC": "/Date(1583967733054+0000)/"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payslips|[[Payslip](#schemapayslip)]|false|none|none|

<h2 id="tocS_Payslip">Payslip</h2>
<!-- backwards compatibility -->
<a id="schemapayslip"></a>
<a id="schema_Payslip"></a>
<a id="tocSpayslip"></a>
<a id="tocspayslip"></a>

```json
{
  "EmployeeID": "4729f087-8eec-49c1-8294-4d11a5a0a37c",
  "PayslipID": "f3c0874d-7cdd-459a-a95c-d90d51decc42",
  "FirstName": "Karen",
  "LastName": "Jones",
  "Wages": 1060.5,
  "Deductions": 0,
  "Tax": 198,
  "Super": 75.6,
  "Reimbursements": 0,
  "NetPay": 862.5,
  "EarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "LeaveEarningsLines": [
    {
      "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "RatePerUnit": 38,
      "NumberOfUnits": 2.5,
      "PayOutType": "DEFAULT"
    }
  ],
  "TimesheetEarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "DeductionLines": [
    {
      "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
      "CalculationType": "FIXEDAMOUNT",
      "Amount": 10,
      "Percentage": 10,
      "NumberOfUnits": 10
    }
  ],
  "LeaveAccrualLines": [
    {
      "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "NumberOfUnits": 105.5,
      "AutoCalculate": true
    }
  ],
  "ReimbursementLines": [
    {
      "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
      "Amount": 10,
      "Description": "For the taxi",
      "ExpenseAccount": 420
    }
  ],
  "SuperannuationLines": [
    {
      "SuperMembershipID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "ContributionType": "SGC",
      "CalculationType": "FIXEDAMOUNT",
      "MinimumMonthlyEarnings": 100.5,
      "ExpenseAccountCode": 450,
      "LiabilityAccountCode": 650,
      "PaymentDateForThisPeriod": "/Date(322560000000+0000)/",
      "Percentage": 4,
      "Amount": 10.5
    }
  ],
  "TaxLines": [
    {
      "PayslipTaxLineID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "Amount": 50,
      "TaxTypeName": "Manual Adjustment",
      "Description": "string",
      "ManualTaxType": "PAYGMANUAL",
      "LiabilityAccount": 620
    }
  ],
  "UpdatedDateUTC": "/Date(1583967733054+0000)/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmployeeID|string(uuid)|false|none|The Xero identifier for an employee|
|PayslipID|string(uuid)|false|none|Xero identifier for the payslip|
|FirstName|string|false|none|First name of employee|
|LastName|string|false|none|Last name of employee|
|Wages|number(double)|false|none|The Wages for the Payslip|
|Deductions|number(double)|false|none|The Deductions for the Payslip|
|Tax|number(double)|false|none|The Tax for the Payslip|
|Super|number(double)|false|none|The Super for the Payslip|
|Reimbursements|number(double)|false|none|The Reimbursements for the Payslip|
|NetPay|number(double)|false|none|The NetPay for the Payslip|
|EarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|LeaveEarningsLines|[[LeaveEarningsLine](#schemaleaveearningsline)]|false|none|none|
|TimesheetEarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|DeductionLines|[[DeductionLine](#schemadeductionline)]|false|none|none|
|LeaveAccrualLines|[[LeaveAccrualLine](#schemaleaveaccrualline)]|false|none|none|
|ReimbursementLines|[[ReimbursementLine](#schemareimbursementline)]|false|none|none|
|SuperannuationLines|[[SuperannuationLine](#schemasuperannuationline)]|false|none|none|
|TaxLines|[[TaxLine](#schemataxline)]|false|none|none|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|

<h2 id="tocS_LeaveAccrualLine">LeaveAccrualLine</h2>
<!-- backwards compatibility -->
<a id="schemaleaveaccrualline"></a>
<a id="schema_LeaveAccrualLine"></a>
<a id="tocSleaveaccrualline"></a>
<a id="tocsleaveaccrualline"></a>

```json
{
  "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "NumberOfUnits": 105.5,
  "AutoCalculate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveTypeID|string(uuid)|false|none|Xero identifier for the Leave type.|
|NumberOfUnits|number(double)|false|none|Leave Accrual number of units|
|AutoCalculate|boolean|false|none|If you want to auto calculate leave.|

<h2 id="tocS_SuperannuationLine">SuperannuationLine</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationline"></a>
<a id="schema_SuperannuationLine"></a>
<a id="tocSsuperannuationline"></a>
<a id="tocssuperannuationline"></a>

```json
{
  "SuperMembershipID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "ContributionType": "SGC",
  "CalculationType": "FIXEDAMOUNT",
  "MinimumMonthlyEarnings": 100.5,
  "ExpenseAccountCode": 450,
  "LiabilityAccountCode": 650,
  "PaymentDateForThisPeriod": "/Date(322560000000+0000)/",
  "Percentage": 4,
  "Amount": 10.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperMembershipID|string(uuid)|false|none|Xero identifier for payroll super fund membership ID.|
|ContributionType|[SuperannuationContributionType](#schemasuperannuationcontributiontype)|false|none|none|
|CalculationType|[SuperannuationCalculationType](#schemasuperannuationcalculationtype)|false|none|none|
|MinimumMonthlyEarnings|number(double)|false|none|Superannuation minimum monthly earnings.|
|ExpenseAccountCode|string|false|none|Superannuation expense account code.|
|LiabilityAccountCode|string|false|none|Superannuation liability account code|
|PaymentDateForThisPeriod|string|false|none|Superannuation payment date for the current period (YYYY-MM-DD)|
|Percentage|number(double)|false|none|Superannuation percentage|
|Amount|number(double)|false|none|Superannuation amount|

#### Enumerated Values

|Property|Value|
|---|---|
|ContributionType|SGC|
|ContributionType|SALARYSACRIFICE|
|ContributionType|EMPLOYERADDITIONAL|
|ContributionType|EMPLOYEE|
|CalculationType|FIXEDAMOUNT|
|CalculationType|PERCENTAGEOFEARNINGS|
|CalculationType|STATUTORY|

<h2 id="tocS_TaxLine">TaxLine</h2>
<!-- backwards compatibility -->
<a id="schemataxline"></a>
<a id="schema_TaxLine"></a>
<a id="tocStaxline"></a>
<a id="tocstaxline"></a>

```json
{
  "PayslipTaxLineID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "Amount": 50,
  "TaxTypeName": "Manual Adjustment",
  "Description": "string",
  "ManualTaxType": "PAYGMANUAL",
  "LiabilityAccount": 620
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayslipTaxLineID|string(uuid)|false|none|Xero identifier for payslip tax line ID.|
|Amount|number(double)|false|none|The tax line amount|
|TaxTypeName|string|false|none|Name of the tax type.|
|Description|string|false|none|Description of the tax line.|
|ManualTaxType|[ManualTaxType](#schemamanualtaxtype)|false|none|none|
|LiabilityAccount|string|false|none|The tax line liability account code. For posted pay run you should be able to see liability account code|

#### Enumerated Values

|Property|Value|
|---|---|
|ManualTaxType|PAYGMANUAL|
|ManualTaxType|ETPOMANUAL|
|ManualTaxType|ETPRMANUAL|
|ManualTaxType|SCHEDULE5MANUAL|
|ManualTaxType|SCHEDULE5STSLMANUAL|
|ManualTaxType|SCHEDULE4MANUAL|

<h2 id="tocS_LeaveEarningsLine">LeaveEarningsLine</h2>
<!-- backwards compatibility -->
<a id="schemaleaveearningsline"></a>
<a id="schema_LeaveEarningsLine"></a>
<a id="tocSleaveearningsline"></a>
<a id="tocsleaveearningsline"></a>

```json
{
  "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "RatePerUnit": 38,
  "NumberOfUnits": 2.5,
  "PayOutType": "DEFAULT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsRateID|string(uuid)|false|none|Xero identifier|
|RatePerUnit|number(double)|false|none|Rate per unit of the EarningsLine.|
|NumberOfUnits|number(double)|false|none|Earnings rate number of units.|
|PayOutType|[PayOutType](#schemapayouttype)|false|none|How the requested leave will be paid out, e.g. cashed out.|

#### Enumerated Values

|Property|Value|
|---|---|
|PayOutType|DEFAULT|
|PayOutType|CASHED_OUT|

<h2 id="tocS_SettingsObject">SettingsObject</h2>
<!-- backwards compatibility -->
<a id="schemasettingsobject"></a>
<a id="schema_SettingsObject"></a>
<a id="tocSsettingsobject"></a>
<a id="tocssettingsobject"></a>

```json
{
  "Settings": {
    "Accounts": [
      {
        "AccountID": "c56b19ef-75bf-45e8-98a4-e699a96609f7",
        "Type": "BANK",
        "Code": 420,
        "Name": "General expenses"
      }
    ],
    "TrackingCategories": {
      "EmployeeGroups": {
        "TrackingCategoryID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "TrackingCategoryName": "string"
      },
      "TimesheetCategories": {
        "TrackingCategoryID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
        "TrackingCategoryName": "string"
      }
    },
    "DaysInPayrollYear": 365,
    "EmployeesAreSTP2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Settings|[Settings](#schemasettings)|false|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "Accounts": [
    {
      "AccountID": "c56b19ef-75bf-45e8-98a4-e699a96609f7",
      "Type": "BANK",
      "Code": 420,
      "Name": "General expenses"
    }
  ],
  "TrackingCategories": {
    "EmployeeGroups": {
      "TrackingCategoryID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "TrackingCategoryName": "string"
    },
    "TimesheetCategories": {
      "TrackingCategoryID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
      "TrackingCategoryName": "string"
    }
  },
  "DaysInPayrollYear": 365,
  "EmployeesAreSTP2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|[[Account](#schemaaccount)]|false|none|Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable.|
|TrackingCategories|object|false|none|Tracking categories for Employees and Timesheets|
|DaysInPayrollYear|integer(int32)|false|none|Number of days in the Payroll year|
|EmployeesAreSTP2|boolean|false|none|Indicates if the organisation has been enabled for STP Phase 2 editing of employees.|

<h2 id="tocS_SuperFunds">SuperFunds</h2>
<!-- backwards compatibility -->
<a id="schemasuperfunds"></a>
<a id="schema_SuperFunds"></a>
<a id="tocSsuperfunds"></a>
<a id="tocssuperfunds"></a>

```json
{
  "SuperFunds": [
    {
      "SuperFundID": "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
      "Type": "REGULATED",
      "Name": "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)",
      "ABN": 40022701955,
      "BSB": 234324,
      "AccountNumber": 234234234,
      "AccountName": "Money account",
      "ElectronicServiceAddress": 12345678,
      "EmployerNumber": 324324,
      "SPIN": 4545445454,
      "USI": 40022701955001,
      "UpdatedDateUTC": "/Date(1583967733054+0000)/",
      "ValidationErrors": [
        {
          "Message": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperFunds|[[SuperFund](#schemasuperfund)]|false|none|none|

<h2 id="tocS_SuperFund">SuperFund</h2>
<!-- backwards compatibility -->
<a id="schemasuperfund"></a>
<a id="schema_SuperFund"></a>
<a id="tocSsuperfund"></a>
<a id="tocssuperfund"></a>

```json
{
  "SuperFundID": "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
  "Type": "REGULATED",
  "Name": "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)",
  "ABN": 40022701955,
  "BSB": 234324,
  "AccountNumber": 234234234,
  "AccountName": "Money account",
  "ElectronicServiceAddress": 12345678,
  "EmployerNumber": 324324,
  "SPIN": 4545445454,
  "USI": 40022701955001,
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "ValidationErrors": [
    {
      "Message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperFundID|string(uuid)|false|none|Xero identifier for a super fund|
|Type|[SuperFundType](#schemasuperfundtype)|true|none|none|
|Name|string|false|none|Name of the super fund|
|ABN|string|false|none|ABN of the self managed super fund|
|BSB|string|false|none|BSB of the self managed super fund|
|AccountNumber|string|false|none|The account number for the self managed super fund.|
|AccountName|string|false|none|The account name for the self managed super fund.|
|ElectronicServiceAddress|string|false|none|The electronic service address for the self managed super fund.|
|EmployerNumber|string|false|none|Some funds assign a unique number to each employer|
|SPIN|string|false|none|The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN.|
|USI|string|false|none|The USI of the Regulated SuperFund|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|ValidationErrors|[[ValidationError](#schemavalidationerror)]|false|none|Displays array of validation error messages from the API|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|REGULATED|
|Type|SMSF|

<h2 id="tocS_SuperFundProducts">SuperFundProducts</h2>
<!-- backwards compatibility -->
<a id="schemasuperfundproducts"></a>
<a id="schema_SuperFundProducts"></a>
<a id="tocSsuperfundproducts"></a>
<a id="tocssuperfundproducts"></a>

```json
{
  "SuperFundProducts": [
    {
      "ABN": 839182848805,
      "USI": 839182848805001,
      "SPIN": "NML0117AU",
      "ProductName": "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperFundProducts|[[SuperFundProduct](#schemasuperfundproduct)]|false|none|none|

<h2 id="tocS_SuperFundProduct">SuperFundProduct</h2>
<!-- backwards compatibility -->
<a id="schemasuperfundproduct"></a>
<a id="schema_SuperFundProduct"></a>
<a id="tocSsuperfundproduct"></a>
<a id="tocssuperfundproduct"></a>

```json
{
  "ABN": 839182848805,
  "USI": 839182848805001,
  "SPIN": "NML0117AU",
  "ProductName": "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ABN|string|false|none|The ABN of the Regulated SuperFund|
|USI|string|false|none|The USI of the Regulated SuperFund|
|SPIN|string|false|none|The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN|
|ProductName|string|false|none|The name of the Regulated SuperFund|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "AccountID": "c56b19ef-75bf-45e8-98a4-e699a96609f7",
  "Type": "BANK",
  "Code": 420,
  "Name": "General expenses"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountID|string(uuid)|false|none|Xero identifier for accounts|
|Type|[AccountType](#schemaaccounttype)|false|none|See Account Types|
|Code|string|false|none|Customer defined account code|
|Name|string|false|none|Name of account|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|BANK|
|Type|CURRENT|
|Type|CURRLIAB|
|Type|DEPRECIATN|
|Type|DIRECTCOSTS|
|Type|EQUITY|
|Type|EXPENSE|
|Type|FIXED|
|Type|INVENTORY|
|Type|LIABILITY|
|Type|NONCURRENT|
|Type|OTHERINCOME|
|Type|OVERHEADS|
|Type|PREPAYMENT|
|Type|REVENUE|
|Type|SALES|
|Type|TERMLIAB|
|Type|PAYGLIABILITY|
|Type|PAYG|
|Type|SUPERANNUATIONEXPENSE|
|Type|SUPERANNUATIONLIABILITY|
|Type|WAGESEXPENSE|
|Type|WAGESPAYABLELIABILITY|

<h2 id="tocS_EarningsRate">EarningsRate</h2>
<!-- backwards compatibility -->
<a id="schemaearningsrate"></a>
<a id="schema_EarningsRate"></a>
<a id="tocSearningsrate"></a>
<a id="tocsearningsrate"></a>

```json
{
  "Name": "PTO",
  "AccountCode": 720,
  "TypeOfUnits": "Fixed",
  "IsExemptFromTax": false,
  "IsExemptFromSuper": false,
  "IsReportableAsW1": false,
  "IsQualifyingEarnings": true,
  "AllowanceContributesToAnnualLeaveRate": false,
  "AllowanceContributesToOvertimeRate": false,
  "EarningsType": "FIXED",
  "EarningsRateID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "RateType": "FIXEDAMOUNT",
  "RatePerUnit": 10,
  "Multiplier": 1.5,
  "AccrueLeave": false,
  "Amount": 50.3,
  "EmploymentTerminationPaymentType": "O",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "CurrentRecord": true,
  "AllowanceType": "CAR",
  "AllowanceCategory": "NONDEDUCTIBLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the earnings rate (max length = 100)|
|AccountCode|string|false|none|See Accounts|
|TypeOfUnits|string|false|none|Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT|
|IsExemptFromTax|boolean|false|none|Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding|
|IsExemptFromSuper|boolean|false|none|See the ATO website for details of which payments are exempt from SGC|
|IsReportableAsW1|boolean|false|none|Boolean to determine if the earnings rate is reportable or exempt from W1|
|IsQualifyingEarnings|boolean|true|none|Boolean to determine if the earnings rate is considered as qualifying earnings for superannuation guarantee calculations|
|AllowanceContributesToAnnualLeaveRate|boolean|false|none|Boolean to determine if the allowance earnings rate contributes towards annual leave rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT|
|AllowanceContributesToOvertimeRate|boolean|false|none|Boolean to determine if the allowance earnings rate contributes towards overtime allowance rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT|
|EarningsType|[EarningsType](#schemaearningstype)|false|none|none|
|EarningsRateID|string(uuid)|false|none|Xero identifier|
|RateType|[RateType](#schemaratetype)|false|none|none|
|RatePerUnit|string|false|none|Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.|
|Multiplier|number(double)|false|none|This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE|
|AccrueLeave|boolean|false|none|Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE|
|Amount|number(double)|false|none|Optional Amount for FIXEDAMOUNT RateType EarningsRate|
|EmploymentTerminationPaymentType|[EmploymentTerminationPaymentType](#schemaemploymentterminationpaymenttype)|false|none|none|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|CurrentRecord|boolean|false|none|Is the current record|
|AllowanceType|[AllowanceType](#schemaallowancetype)|false|none|none|
|AllowanceCategory|[AllowanceCategory](#schemaallowancecategory)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|EarningsType|FIXED|
|EarningsType|ORDINARYTIMEEARNINGS|
|EarningsType|OVERTIMEEARNINGS|
|EarningsType|ALLOWANCE|
|EarningsType|LUMPSUMD|
|EarningsType|EMPLOYMENTTERMINATIONPAYMENT|
|EarningsType|LUMPSUMA|
|EarningsType|LUMPSUMB|
|EarningsType|BONUSESANDCOMMISSIONS|
|EarningsType|LUMPSUME|
|EarningsType|LUMPSUMW|
|EarningsType|DIRECTORSFEES|
|EarningsType|PAIDPARENTALLEAVE|
|EarningsType|WORKERSCOMPENSATION|
|RateType|FIXEDAMOUNT|
|RateType|MULTIPLE|
|RateType|RATEPERUNIT|
|EmploymentTerminationPaymentType|O|
|EmploymentTerminationPaymentType|R|
|AllowanceType|CAR|
|AllowanceType|TRANSPORT|
|AllowanceType|LAUNDRY|
|AllowanceType|MEALS|
|AllowanceType|TRAVEL|
|AllowanceType|OTHER|
|AllowanceType|TOOLS|
|AllowanceType|TASKS|
|AllowanceType|QUALIFICATIONS|
|AllowanceCategory|NONDEDUCTIBLE|
|AllowanceCategory|UNIFORM|
|AllowanceCategory|PRIVATEVEHICLE|
|AllowanceCategory|HOMEOFFICE|
|AllowanceCategory|TRANSPORT|
|AllowanceCategory|GENERAL|
|AllowanceCategory|OTHER|

<h2 id="tocS_DeductionType">DeductionType</h2>
<!-- backwards compatibility -->
<a id="schemadeductiontype"></a>
<a id="schema_DeductionType"></a>
<a id="tocSdeductiontype"></a>
<a id="tocsdeductiontype"></a>

```json
{
  "Name": "PTO",
  "AccountCode": 720,
  "ReducesTax": false,
  "ReducesSuper": false,
  "IsExemptFromW1": false,
  "DeductionTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "DeductionCategory": "NONE",
  "CurrentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the earnings rate (max length = 100)|
|AccountCode|string|false|none|See Accounts|
|ReducesTax|boolean|false|none|Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee.|
|ReducesSuper|boolean|false|none|Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this.|
|IsExemptFromW1|boolean|false|none|Boolean to determine if the deduction type is reportable or exempt from W1|
|DeductionTypeID|string(uuid)|false|none|Xero identifier|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|DeductionCategory|string|false|none|none|
|CurrentRecord|boolean|false|none|Is the current record|

#### Enumerated Values

|Property|Value|
|---|---|
|DeductionCategory|NONE|
|DeductionCategory|UNIONFEES|
|DeductionCategory|WORKPLACEGIVING|

<h2 id="tocS_LeaveType">LeaveType</h2>
<!-- backwards compatibility -->
<a id="schemaleavetype"></a>
<a id="schema_LeaveType"></a>
<a id="tocSleavetype"></a>
<a id="tocsleavetype"></a>

```json
{
  "Name": "PTO",
  "TypeOfUnits": "Hours",
  "LeaveTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "NormalEntitlement": 152,
  "LeaveLoadingRate": 2,
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "IsPaidLeave": true,
  "ShowOnPayslip": true,
  "CurrentRecord": true,
  "LeaveCategoryCode": "ANNUALLEAVE",
  "SGCExempt": true,
  "IsQualifyingEarnings": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the earnings rate (max length = 100)|
|TypeOfUnits|string|false|none|The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate|
|LeaveTypeID|string(uuid)|false|none|Xero identifier|
|NormalEntitlement|number(double)|false|none|The number of units the employee is entitled to each year|
|LeaveLoadingRate|number(double)|false|none|Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|IsPaidLeave|boolean|false|none|Set this to indicate that an employee will be paid when taking this type of leave|
|ShowOnPayslip|boolean|false|none|Set this if you want a balance for this leave type to be shown on your employee’s payslips|
|CurrentRecord|boolean|false|none|Is the current record|
|LeaveCategoryCode|[LeaveCategoryCode](#schemaleavecategorycode)|false|none|Code used to identify the Leave Category|
|SGCExempt|boolean|false|none|Set this to indicate that the leave type is exempt from superannuation guarantee contribution|
|IsQualifyingEarnings|boolean|true|none|Boolean to determine if the leave type is considered as qualifying earnings for superannuation guarantee calculations|

#### Enumerated Values

|Property|Value|
|---|---|
|LeaveCategoryCode|ANNUALLEAVE|
|LeaveCategoryCode|LONGSERVICELEAVE|
|LeaveCategoryCode|PERSONALSICKCARERSLEAVE|
|LeaveCategoryCode|ROSTEREDDAYOFF|
|LeaveCategoryCode|TIMEOFFINLIEU|
|LeaveCategoryCode|COMPASSIONATEANDBEREAVEMENTLEAVE|
|LeaveCategoryCode|STUDYLEAVE|
|LeaveCategoryCode|FAMILYANDDOMESTICVIOLENCELEAVE|
|LeaveCategoryCode|SPECIALPAIDLEAVE|
|LeaveCategoryCode|COMMUNITYSERVICELEAVE|
|LeaveCategoryCode|JURYDUTYLEAVE|
|LeaveCategoryCode|DEFENCERESERVELEAVE|

<h2 id="tocS_ReimbursementType">ReimbursementType</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementtype"></a>
<a id="schema_ReimbursementType"></a>
<a id="tocSreimbursementtype"></a>
<a id="tocsreimbursementtype"></a>

```json
{
  "Name": "PTO",
  "AccountCode": 720,
  "ReimbursementTypeID": "e0eb6747-7c17-4075-b804-989f8d4e5d39",
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "CurrentRecord": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the earnings rate (max length = 100)|
|AccountCode|string|false|none|See Accounts|
|ReimbursementTypeID|string(uuid)|false|none|Xero identifier|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|CurrentRecord|boolean|false|none|Is the current record|

<h2 id="tocS_HomeAddress">HomeAddress</h2>
<!-- backwards compatibility -->
<a id="schemahomeaddress"></a>
<a id="schema_HomeAddress"></a>
<a id="tocShomeaddress"></a>
<a id="tocshomeaddress"></a>

```json
{
  "AddressLine1": "123 Main St",
  "AddressLine2": "Apt 4",
  "City": "St. Kilda",
  "Region": "VIC",
  "PostalCode": 3182,
  "Country": "AUSTRALIA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressLine1|string|true|none|Address line 1 for employee home address|
|AddressLine2|string|false|none|Address line 2 for employee home address|
|City|string|false|none|Suburb for employee home address|
|Region|[State](#schemastate)|false|none|State abbreviation for employee home address|
|PostalCode|string|false|none|PostCode for employee home address|
|Country|string|false|none|Country of HomeAddress|

#### Enumerated Values

|Property|Value|
|---|---|
|Region|ACT|
|Region|NSW|
|Region|NT|
|Region|QLD|
|Region|SA|
|Region|TAS|
|Region|VIC|
|Region|WA|

<h2 id="tocS_TaxDeclaration">TaxDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemataxdeclaration"></a>
<a id="schema_TaxDeclaration"></a>
<a id="tocStaxdeclaration"></a>
<a id="tocstaxdeclaration"></a>

```json
{
  "EmployeeID": "123 Main St",
  "EmploymentBasis": "FULLTIME",
  "TFNExemptionType": "NOTQUOTED",
  "TaxFileNumber": 123123123,
  "ABN": 21006819692,
  "AustralianResidentForTaxPurposes": true,
  "ResidencyStatus": "AUSTRALIANRESIDENT",
  "TaxScaleType": "REGULAR",
  "WorkCondition": "PROMOTIONAL",
  "SeniorMaritalStatus": "MEMBEROFCOUPLE",
  "TaxFreeThresholdClaimed": false,
  "TaxOffsetEstimatedAmount": 100,
  "HasHELPDebt": false,
  "HasSFSSDebt": false,
  "HasTradeSupportLoanDebt": false,
  "UpwardVariationTaxWithholdingAmount": 50,
  "EligibleToReceiveLeaveLoading": false,
  "ApprovedWithholdingVariationPercentage": 75,
  "HasStudentStartupLoan": true,
  "HasLoanOrStudentDebt": true,
  "UpdatedDateUTC": "/Date(1583967733054+0000)/",
  "IncludeLeaveLoadingInQualifyingEarnings": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmployeeID|string(uuid)|false|none|Address line 1 for employee home address|
|EmploymentBasis|[EmploymentBasis](#schemaemploymentbasis)|false|none|none|
|TFNExemptionType|[TFNExemptionType](#schematfnexemptiontype)|false|none|none|
|TaxFileNumber|string|false|none|The tax file number e.g 123123123.|
|ABN|string|false|none|11-digit Australian Business Number e.g 21006819692 or an empty string ("") to unset a previously set value. Only applicable, and mandatory if income type is NONEMPLOYEE.|
|AustralianResidentForTaxPurposes|boolean|false|none|If the employee is Australian resident for tax purposes. e.g true or false|
|ResidencyStatus|[ResidencyStatus](#schemaresidencystatus)|false|none|none|
|TaxScaleType|[TaxScaleType](#schemataxscaletype)|false|none|none|
|WorkCondition|[WorkCondition](#schemaworkcondition)|false|none|none|
|SeniorMaritalStatus|[SeniorMaritalStatus](#schemaseniormaritalstatus)|false|none|none|
|TaxFreeThresholdClaimed|boolean|false|none|If tax free threshold claimed. e.g true or false|
|TaxOffsetEstimatedAmount|number(int)|false|none|If has tax offset estimated then the tax offset estimated amount. e.g 100|
|HasHELPDebt|boolean|false|none|If employee has HECS or HELP debt. e.g true or false|
|HasSFSSDebt|boolean|false|none|If employee has financial supplement debt. e.g true or false|
|HasTradeSupportLoanDebt|boolean|false|none|If employee has trade support loan. e.g true or false|
|UpwardVariationTaxWithholdingAmount|number(int)|false|none|If the employee has requested that additional tax be withheld each pay run. e.g 50|
|EligibleToReceiveLeaveLoading|boolean|false|none|If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false|
|ApprovedWithholdingVariationPercentage|number(int)|false|none|If the employee has approved withholding variation. e.g (0 - 100)|
|HasStudentStartupLoan|boolean|false|none|If the employee is eligible for student startup loan rules|
|HasLoanOrStudentDebt|boolean|false|none|If the employee has any of the following loans or debts: Higher Education Loan Program (HELP/HECS), VET Student Loan (VSL), Financial Supplement (FS), Student Start-up Loan (SSL), or Trade Support Loan (TSL)|
|UpdatedDateUTC|string|false|read-only|Last modified timestamp|
|IncludeLeaveLoadingInQualifyingEarnings|boolean|false|none|Boolean to determine if leave loading is considered as qualifying earnings for superannuation guarantee calculations. Required when IncludeLeaveLoadingInSGC is specified in the payload|

#### Enumerated Values

|Property|Value|
|---|---|
|EmploymentBasis|FULLTIME|
|EmploymentBasis|PARTTIME|
|EmploymentBasis|CASUAL|
|EmploymentBasis|LABOURHIRE|
|EmploymentBasis|SUPERINCOMESTREAM|
|EmploymentBasis|NONEMPLOYEE|
|TFNExemptionType|NOTQUOTED|
|TFNExemptionType|PENDING|
|TFNExemptionType|PENSIONER|
|TFNExemptionType|UNDER18|
|ResidencyStatus|AUSTRALIANRESIDENT|
|ResidencyStatus|FOREIGNRESIDENT|
|ResidencyStatus|WORKINGHOLIDAYMAKER|
|TaxScaleType|REGULAR|
|TaxScaleType|ACTORSARTISTSENTERTAINERS|
|TaxScaleType|HORTICULTURISTORSHEARER|
|TaxScaleType|SENIORORPENSIONER|
|TaxScaleType|WORKINGHOLIDAYMAKER|
|TaxScaleType|FOREIGN|
|WorkCondition|PROMOTIONAL|
|WorkCondition|THREELESSPERFORMANCESPERWEEK|
|WorkCondition|NONE|
|SeniorMaritalStatus|MEMBEROFCOUPLE|
|SeniorMaritalStatus|MEMBEROFILLNESSSEPARATEDCOUPLE|
|SeniorMaritalStatus|SINGLE|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "StatementText": "Salary",
  "AccountName": "James Lebron Savings",
  "BSB": 122344,
  "AccountNumber": 345678,
  "Remainder": false,
  "Amount": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementText|string|false|none|The text that will appear on your employee's bank statement when they receive payment|
|AccountName|string|false|none|The name of the account|
|BSB|string|false|none|The BSB number of the account|
|AccountNumber|string|false|none|The account number|
|Remainder|boolean|false|none|If this account is the Remaining bank account|
|Amount|number(double)|false|none|Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)|

<h2 id="tocS_PayTemplate">PayTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapaytemplate"></a>
<a id="schema_PayTemplate"></a>
<a id="tocSpaytemplate"></a>
<a id="tocspaytemplate"></a>

```json
{
  "EarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "DeductionLines": [
    {
      "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
      "CalculationType": "FIXEDAMOUNT",
      "Amount": 10,
      "Percentage": 10,
      "NumberOfUnits": 10
    }
  ],
  "SuperLines": [
    {
      "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      "ContributionType": "SGC",
      "CalculationType": "FIXEDAMOUNT",
      "MinimumMonthlyEarnings": 450,
      "ExpenseAccountCode": 478,
      "LiabilityAccountCode": 826,
      "Percentage": 9,
      "Amount": 10
    }
  ],
  "ReimbursementLines": [
    {
      "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
      "Amount": 10,
      "Description": "For the taxi",
      "ExpenseAccount": 420
    }
  ],
  "LeaveLines": [
    {
      "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
      "CalculationType": "NOCALCULATIONREQUIRED",
      "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
      "EmploymentTerminationPaymentType": "O",
      "IncludeSuperannuationGuaranteeContribution": true,
      "IsQualifyingEarnings": true,
      "NumberOfUnits": 2.5,
      "AnnualNumberOfUnits": 2.5,
      "FullTimeNumberOfUnitsPerPeriod": 2.5
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|DeductionLines|[[DeductionLine](#schemadeductionline)]|false|none|none|
|SuperLines|[[SuperLine](#schemasuperline)]|false|none|none|
|ReimbursementLines|[[ReimbursementLine](#schemareimbursementline)]|false|none|none|
|LeaveLines|[[LeaveLine](#schemaleaveline)]|false|none|none|

<h2 id="tocS_EarningsLine">EarningsLine</h2>
<!-- backwards compatibility -->
<a id="schemaearningsline"></a>
<a id="schema_EarningsLine"></a>
<a id="tocSearningsline"></a>
<a id="tocsearningsline"></a>

```json
{
  "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
  "CalculationType": "USEEARNINGSRATE",
  "AnnualSalary": 40000,
  "NumberOfUnitsPerWeek": 38,
  "RatePerUnit": 38,
  "NormalNumberOfUnits": 38,
  "Amount": 38,
  "NumberOfUnits": 2.5,
  "FixedAmount": 2.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EarningsRateID|string(uuid)|true|none|Xero unique id for earnings rate|
|CalculationType|[EarningsRateCalculationType](#schemaearningsratecalculationtype)|false|none|none|
|AnnualSalary|number(double)|false|none|Annual salary for earnings line|
|NumberOfUnitsPerWeek|number(double)|false|none|number of units for earning line|
|RatePerUnit|number(double)|false|none|Rate per unit of the EarningsLine.|
|NormalNumberOfUnits|number(double)|false|none|Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE"|
|Amount|number(double)|false|none|Earnings rate amount|
|NumberOfUnits|number(double)|false|none|Earnings rate number of units.|
|FixedAmount|number(double)|false|none|Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed|

#### Enumerated Values

|Property|Value|
|---|---|
|CalculationType|USEEARNINGSRATE|
|CalculationType|ENTEREARNINGSRATE|
|CalculationType|ANNUALSALARY|

<h2 id="tocS_DeductionLine">DeductionLine</h2>
<!-- backwards compatibility -->
<a id="schemadeductionline"></a>
<a id="schema_DeductionLine"></a>
<a id="tocSdeductionline"></a>
<a id="tocsdeductionline"></a>

```json
{
  "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
  "CalculationType": "FIXEDAMOUNT",
  "Amount": 10,
  "Percentage": 10,
  "NumberOfUnits": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeductionTypeID|string(uuid)|true|none|Xero deduction type identifier|
|CalculationType|[DeductionTypeCalculationType](#schemadeductiontypecalculationtype)|false|none|none|
|Amount|number(double)|false|none|Deduction type amount|
|Percentage|number(double)|false|none|The Percentage of the Deduction|
|NumberOfUnits|number(double)|false|none|Deduction number of units|

#### Enumerated Values

|Property|Value|
|---|---|
|CalculationType|FIXEDAMOUNT|
|CalculationType|PRETAX|
|CalculationType|POSTTAX|

<h2 id="tocS_SuperLine">SuperLine</h2>
<!-- backwards compatibility -->
<a id="schemasuperline"></a>
<a id="schema_SuperLine"></a>
<a id="tocSsuperline"></a>
<a id="tocssuperline"></a>

```json
{
  "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
  "ContributionType": "SGC",
  "CalculationType": "FIXEDAMOUNT",
  "MinimumMonthlyEarnings": 450,
  "ExpenseAccountCode": 478,
  "LiabilityAccountCode": 826,
  "Percentage": 9,
  "Amount": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperMembershipID|string(uuid)|false|none|Xero super membership ID|
|ContributionType|[SuperannuationContributionType](#schemasuperannuationcontributiontype)|false|none|none|
|CalculationType|[SuperannuationCalculationType](#schemasuperannuationcalculationtype)|false|none|none|
|MinimumMonthlyEarnings|number(double)|false|none|amount of minimum earnings|
|ExpenseAccountCode|string|false|none|expense account code|
|LiabilityAccountCode|string|false|none|liabilty account code|
|Percentage|number(double)|false|none|percentage for super line|
|Amount|number(double)|false|none|Super membership amount|

#### Enumerated Values

|Property|Value|
|---|---|
|ContributionType|SGC|
|ContributionType|SALARYSACRIFICE|
|ContributionType|EMPLOYERADDITIONAL|
|ContributionType|EMPLOYEE|
|CalculationType|FIXEDAMOUNT|
|CalculationType|PERCENTAGEOFEARNINGS|
|CalculationType|STATUTORY|

<h2 id="tocS_ReimbursementLines">ReimbursementLines</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementlines"></a>
<a id="schema_ReimbursementLines"></a>
<a id="tocSreimbursementlines"></a>
<a id="tocsreimbursementlines"></a>

```json
{
  "ReimbursementLines": [
    {
      "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
      "Amount": 10,
      "Description": "For the taxi",
      "ExpenseAccount": 420
    }
  ]
}
```

The reimbursement type lines

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReimbursementLines|[[ReimbursementLine](#schemareimbursementline)]|false|none|none|

<h2 id="tocS_ReimbursementLine">ReimbursementLine</h2>
<!-- backwards compatibility -->
<a id="schemareimbursementline"></a>
<a id="schema_ReimbursementLine"></a>
<a id="tocSreimbursementline"></a>
<a id="tocsreimbursementline"></a>

```json
{
  "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
  "Amount": 10,
  "Description": "For the taxi",
  "ExpenseAccount": 420
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReimbursementTypeID|string(uuid)|false|none|Xero reimbursement type identifier|
|Amount|number(double)|false|none|Reimbursement type amount|
|Description|string|false|none|Reimbursement lines description (max length 50)|
|ExpenseAccount|string|false|none|Reimbursement expense account. For posted pay run you should be able to see expense account code.|

<h2 id="tocS_LeaveLines">LeaveLines</h2>
<!-- backwards compatibility -->
<a id="schemaleavelines"></a>
<a id="schema_LeaveLines"></a>
<a id="tocSleavelines"></a>
<a id="tocsleavelines"></a>

```json
{
  "Employee": [
    {
      "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
      "CalculationType": "NOCALCULATIONREQUIRED",
      "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
      "EmploymentTerminationPaymentType": "O",
      "IncludeSuperannuationGuaranteeContribution": true,
      "IsQualifyingEarnings": true,
      "NumberOfUnits": 2.5,
      "AnnualNumberOfUnits": 2.5,
      "FullTimeNumberOfUnitsPerPeriod": 2.5
    }
  ]
}
```

The leave type lines

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Employee|[[LeaveLine](#schemaleaveline)]|false|none|none|

<h2 id="tocS_LeaveLine">LeaveLine</h2>
<!-- backwards compatibility -->
<a id="schemaleaveline"></a>
<a id="schema_LeaveLine"></a>
<a id="tocSleaveline"></a>
<a id="tocsleaveline"></a>

```json
{
  "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
  "CalculationType": "NOCALCULATIONREQUIRED",
  "EntitlementFinalPayPayoutType": "NOTPAIDOUT",
  "EmploymentTerminationPaymentType": "O",
  "IncludeSuperannuationGuaranteeContribution": true,
  "IsQualifyingEarnings": true,
  "NumberOfUnits": 2.5,
  "AnnualNumberOfUnits": 2.5,
  "FullTimeNumberOfUnitsPerPeriod": 2.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveTypeID|string(uuid)|false|none|Xero leave type identifier|
|CalculationType|[LeaveLineCalculationType](#schemaleavelinecalculationtype)|false|none|Calculation type for leave line for Opening Balance on Employee|
|EntitlementFinalPayPayoutType|[EntitlementFinalPayPayoutType](#schemaentitlementfinalpaypayouttype)|false|none|none|
|EmploymentTerminationPaymentType|[EmploymentTerminationPaymentType](#schemaemploymentterminationpaymenttype)|false|none|none|
|IncludeSuperannuationGuaranteeContribution|boolean|false|none|amount of leave line|
|IsQualifyingEarnings|boolean|true|none|Boolean to determine if the leave line is considered as qualifying earnings for superannuation guarantee calculations|
|NumberOfUnits|number(double)|false|none|Number of units for leave line.|
|AnnualNumberOfUnits|number(double)|false|none|Hours of leave accrued each year|
|FullTimeNumberOfUnitsPerPeriod|number(double)|false|none|Normal ordinary earnings number of units for leave line.|

#### Enumerated Values

|Property|Value|
|---|---|
|CalculationType|NOCALCULATIONREQUIRED|
|CalculationType|FIXEDAMOUNTEACHPERIOD|
|CalculationType|ENTERRATEINPAYTEMPLATE|
|CalculationType|BASEDONORDINARYEARNINGS|
|EntitlementFinalPayPayoutType|NOTPAIDOUT|
|EntitlementFinalPayPayoutType|PAIDOUT|
|EmploymentTerminationPaymentType|O|
|EmploymentTerminationPaymentType|R|

<h2 id="tocS_PaidLeaveEarningsLine">PaidLeaveEarningsLine</h2>
<!-- backwards compatibility -->
<a id="schemapaidleaveearningsline"></a>
<a id="schema_PaidLeaveEarningsLine"></a>
<a id="tocSpaidleaveearningsline"></a>
<a id="tocspaidleaveearningsline"></a>

```json
{
  "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
  "Amount": 500,
  "SGCAppliedLeaveLoadingAmount": 50,
  "SGCExemptedLeaveLoadingAmount": 60,
  "ResetSTPCategorisation": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveTypeID|string(uuid)|true|none|Xero leave type identifier|
|Amount|number(double)|true|none|Paid leave amount|
|SGCAppliedLeaveLoadingAmount|number(double)|false|none|The amount of leave loading applied for the leave type that is subject to Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories|
|SGCExemptedLeaveLoadingAmount|number(double)|false|none|The amount of leave loading applied for the leave type that is exempt from Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories|
|ResetSTPCategorisation|boolean|false|none|Reset the STP categorisations for the leave type. *Only applicable for Leave Types with Annual Leave Categories|

<h2 id="tocS_OpeningBalanceLeaveLine">OpeningBalanceLeaveLine</h2>
<!-- backwards compatibility -->
<a id="schemaopeningbalanceleaveline"></a>
<a id="schema_OpeningBalanceLeaveLine"></a>
<a id="tocSopeningbalanceleaveline"></a>
<a id="tocsopeningbalanceleaveline"></a>

```json
{
  "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
  "NumberOfUnits": 2.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveTypeID|string(uuid)|false|none|Xero leave type identifier|
|NumberOfUnits|number(double)|false|none|Number of units for leave line.|

<h2 id="tocS_OpeningBalances">OpeningBalances</h2>
<!-- backwards compatibility -->
<a id="schemaopeningbalances"></a>
<a id="schema_OpeningBalances"></a>
<a id="tocSopeningbalances"></a>
<a id="tocsopeningbalances"></a>

```json
{
  "OpeningBalanceDate": "/Date(322560000000+0000)/",
  "Tax": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
  "EarningsLines": [
    {
      "EarningsRateID": "72e962d1-fcac-4083-8a71-742bb3e7ae14",
      "CalculationType": "USEEARNINGSRATE",
      "AnnualSalary": 40000,
      "NumberOfUnitsPerWeek": 38,
      "RatePerUnit": 38,
      "NormalNumberOfUnits": 38,
      "Amount": 38,
      "NumberOfUnits": 2.5,
      "FixedAmount": 2.5
    }
  ],
  "DeductionLines": [
    {
      "DeductionTypeID": "59cd9d04-4521-4cc3-93ac-7841651ff407",
      "CalculationType": "FIXEDAMOUNT",
      "Amount": 10,
      "Percentage": 10,
      "NumberOfUnits": 10
    }
  ],
  "SuperLines": [
    {
      "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      "ContributionType": "SGC",
      "CalculationType": "FIXEDAMOUNT",
      "MinimumMonthlyEarnings": 450,
      "ExpenseAccountCode": 478,
      "LiabilityAccountCode": 826,
      "Percentage": 9,
      "Amount": 10
    }
  ],
  "ReimbursementLines": [
    {
      "ReimbursementTypeID": "bd246b96-c637-4767-81cf-851ba8fa93c2",
      "Amount": 10,
      "Description": "For the taxi",
      "ExpenseAccount": 420
    }
  ],
  "LeaveLines": [
    {
      "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
      "NumberOfUnits": 2.5
    }
  ],
  "PaidLeaveEarningsLines": [
    {
      "LeaveTypeID": "742998cb-7584-4ecf-aa88-d694f59c50f9",
      "Amount": 500,
      "SGCAppliedLeaveLoadingAmount": 50,
      "SGCExemptedLeaveLoadingAmount": 60,
      "ResetSTPCategorisation": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpeningBalanceDate|string|false|none|Opening Balance Date. (YYYY-MM-DD)|
|Tax|string|false|none|Opening Balance tax|
|EarningsLines|[[EarningsLine](#schemaearningsline)]|false|none|none|
|DeductionLines|[[DeductionLine](#schemadeductionline)]|false|none|none|
|SuperLines|[[SuperLine](#schemasuperline)]|false|none|none|
|ReimbursementLines|[[ReimbursementLine](#schemareimbursementline)]|false|none|none|
|LeaveLines|[[OpeningBalanceLeaveLine](#schemaopeningbalanceleaveline)]|false|none|none|
|PaidLeaveEarningsLines|[[PaidLeaveEarningsLine](#schemapaidleaveearningsline)]|false|none|none|

<h2 id="tocS_LeaveBalance">LeaveBalance</h2>
<!-- backwards compatibility -->
<a id="schemaleavebalance"></a>
<a id="schema_LeaveBalance"></a>
<a id="tocSleavebalance"></a>
<a id="tocsleavebalance"></a>

```json
{
  "LeaveName": "Annual Leave",
  "LeaveTypeID": "544d9292-4329-4512-bfff-a9f15236d776",
  "NumberOfUnits": 81.2602,
  "TypeOfUnits": "Hours"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LeaveName|string|false|none|The name of the leave type|
|LeaveTypeID|string|false|none|Identifier of the leave type (see PayItems)|
|NumberOfUnits|number(double)|false|none|The balance of the leave available|
|TypeOfUnits|string|false|none|The type of units as specified by the LeaveType (see PayItems)|

<h2 id="tocS_LeaveCategoryCode">LeaveCategoryCode</h2>
<!-- backwards compatibility -->
<a id="schemaleavecategorycode"></a>
<a id="schema_LeaveCategoryCode"></a>
<a id="tocSleavecategorycode"></a>
<a id="tocsleavecategorycode"></a>

```json
"ANNUALLEAVE"
```

Code used to identify the Leave Category

<h2 id="tocS_RateType">RateType</h2>
<!-- backwards compatibility -->
<a id="schemaratetype"></a>
<a id="schema_RateType"></a>
<a id="tocSratetype"></a>
<a id="tocsratetype"></a>

```json
"FIXEDAMOUNT"
```

<h2 id="tocS_EarningsType">EarningsType</h2>
<!-- backwards compatibility -->
<a id="schemaearningstype"></a>
<a id="schema_EarningsType"></a>
<a id="tocSearningstype"></a>
<a id="tocsearningstype"></a>

```json
"FIXED"
```

<h2 id="tocS_EmploymentTerminationPaymentType">EmploymentTerminationPaymentType</h2>
<!-- backwards compatibility -->
<a id="schemaemploymentterminationpaymenttype"></a>
<a id="schema_EmploymentTerminationPaymentType"></a>
<a id="tocSemploymentterminationpaymenttype"></a>
<a id="tocsemploymentterminationpaymenttype"></a>

```json
"O"
```

<h2 id="tocS_AllowanceType">AllowanceType</h2>
<!-- backwards compatibility -->
<a id="schemaallowancetype"></a>
<a id="schema_AllowanceType"></a>
<a id="tocSallowancetype"></a>
<a id="tocsallowancetype"></a>

```json
"CAR"
```

<h2 id="tocS_AllowanceCategory">AllowanceCategory</h2>
<!-- backwards compatibility -->
<a id="schemaallowancecategory"></a>
<a id="schema_AllowanceCategory"></a>
<a id="tocSallowancecategory"></a>
<a id="tocsallowancecategory"></a>

```json
"NONDEDUCTIBLE"
```

<h2 id="tocS_CalendarType">CalendarType</h2>
<!-- backwards compatibility -->
<a id="schemacalendartype"></a>
<a id="schema_CalendarType"></a>
<a id="tocScalendartype"></a>
<a id="tocscalendartype"></a>

```json
"WEEKLY"
```

<h2 id="tocS_EarningsRateCalculationType">EarningsRateCalculationType</h2>
<!-- backwards compatibility -->
<a id="schemaearningsratecalculationtype"></a>
<a id="schema_EarningsRateCalculationType"></a>
<a id="tocSearningsratecalculationtype"></a>
<a id="tocsearningsratecalculationtype"></a>

```json
"USEEARNINGSRATE"
```

<h2 id="tocS_DeductionTypeCalculationType">DeductionTypeCalculationType</h2>
<!-- backwards compatibility -->
<a id="schemadeductiontypecalculationtype"></a>
<a id="schema_DeductionTypeCalculationType"></a>
<a id="tocSdeductiontypecalculationtype"></a>
<a id="tocsdeductiontypecalculationtype"></a>

```json
"FIXEDAMOUNT"
```

<h2 id="tocS_LeaveLineCalculationType">LeaveLineCalculationType</h2>
<!-- backwards compatibility -->
<a id="schemaleavelinecalculationtype"></a>
<a id="schema_LeaveLineCalculationType"></a>
<a id="tocSleavelinecalculationtype"></a>
<a id="tocsleavelinecalculationtype"></a>

```json
"NOCALCULATIONREQUIRED"
```

Calculation type for leave line for Opening Balance on Employee

<h2 id="tocS_SuperannuationContributionType">SuperannuationContributionType</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationcontributiontype"></a>
<a id="schema_SuperannuationContributionType"></a>
<a id="tocSsuperannuationcontributiontype"></a>
<a id="tocssuperannuationcontributiontype"></a>

```json
"SGC"
```

<h2 id="tocS_SuperannuationCalculationType">SuperannuationCalculationType</h2>
<!-- backwards compatibility -->
<a id="schemasuperannuationcalculationtype"></a>
<a id="schema_SuperannuationCalculationType"></a>
<a id="tocSsuperannuationcalculationtype"></a>
<a id="tocssuperannuationcalculationtype"></a>

```json
"FIXEDAMOUNT"
```

<h2 id="tocS_PaymentFrequencyType">PaymentFrequencyType</h2>
<!-- backwards compatibility -->
<a id="schemapaymentfrequencytype"></a>
<a id="schema_PaymentFrequencyType"></a>
<a id="tocSpaymentfrequencytype"></a>
<a id="tocspaymentfrequencytype"></a>

```json
"WEEKLY"
```

<h2 id="tocS_LeaveTypeContributionType">LeaveTypeContributionType</h2>
<!-- backwards compatibility -->
<a id="schemaleavetypecontributiontype"></a>
<a id="schema_LeaveTypeContributionType"></a>
<a id="tocSleavetypecontributiontype"></a>
<a id="tocsleavetypecontributiontype"></a>

```json
"SGC"
```

<h2 id="tocS_EntitlementFinalPayPayoutType">EntitlementFinalPayPayoutType</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementfinalpaypayouttype"></a>
<a id="schema_EntitlementFinalPayPayoutType"></a>
<a id="tocSentitlementfinalpaypayouttype"></a>
<a id="tocsentitlementfinalpaypayouttype"></a>

```json
"NOTPAIDOUT"
```

<h2 id="tocS_PayRunStatus">PayRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemapayrunstatus"></a>
<a id="schema_PayRunStatus"></a>
<a id="tocSpayrunstatus"></a>
<a id="tocspayrunstatus"></a>

```json
"DRAFT"
```

<h2 id="tocS_ManualTaxType">ManualTaxType</h2>
<!-- backwards compatibility -->
<a id="schemamanualtaxtype"></a>
<a id="schema_ManualTaxType"></a>
<a id="tocSmanualtaxtype"></a>
<a id="tocsmanualtaxtype"></a>

```json
"PAYGMANUAL"
```

<h2 id="tocS_SuperFundType">SuperFundType</h2>
<!-- backwards compatibility -->
<a id="schemasuperfundtype"></a>
<a id="schema_SuperFundType"></a>
<a id="tocSsuperfundtype"></a>
<a id="tocssuperfundtype"></a>

```json
"REGULATED"
```

<h2 id="tocS_EmploymentType">EmploymentType</h2>
<!-- backwards compatibility -->
<a id="schemaemploymenttype"></a>
<a id="schema_EmploymentType"></a>
<a id="tocSemploymenttype"></a>
<a id="tocsemploymenttype"></a>

```json
"EMPLOYEE"
```

<h2 id="tocS_CountryOfResidence">CountryOfResidence</h2>
<!-- backwards compatibility -->
<a id="schemacountryofresidence"></a>
<a id="schema_CountryOfResidence"></a>
<a id="tocScountryofresidence"></a>
<a id="tocscountryofresidence"></a>

```json
"AU"
```

Country of residence as a valid ISO 3166-1 alpha-2 country code e.g. "AU", "NZ", "CA". Only applicable, and mandatory if income type is WORKINGHOLIDAYMAKER.

<h2 id="tocS_IncomeType">IncomeType</h2>
<!-- backwards compatibility -->
<a id="schemaincometype"></a>
<a id="schema_IncomeType"></a>
<a id="tocSincometype"></a>
<a id="tocsincometype"></a>

```json
"SALARYANDWAGES"
```

<h2 id="tocS_TaxScaleType">TaxScaleType</h2>
<!-- backwards compatibility -->
<a id="schemataxscaletype"></a>
<a id="schema_TaxScaleType"></a>
<a id="tocStaxscaletype"></a>
<a id="tocstaxscaletype"></a>

```json
"REGULAR"
```

<h2 id="tocS_WorkCondition">WorkCondition</h2>
<!-- backwards compatibility -->
<a id="schemaworkcondition"></a>
<a id="schema_WorkCondition"></a>
<a id="tocSworkcondition"></a>
<a id="tocsworkcondition"></a>

```json
"PROMOTIONAL"
```

<h2 id="tocS_SeniorMaritalStatus">SeniorMaritalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaseniormaritalstatus"></a>
<a id="schema_SeniorMaritalStatus"></a>
<a id="tocSseniormaritalstatus"></a>
<a id="tocsseniormaritalstatus"></a>

```json
"MEMBEROFCOUPLE"
```

<h2 id="tocS_EmploymentBasis">EmploymentBasis</h2>
<!-- backwards compatibility -->
<a id="schemaemploymentbasis"></a>
<a id="schema_EmploymentBasis"></a>
<a id="tocSemploymentbasis"></a>
<a id="tocsemploymentbasis"></a>

```json
"FULLTIME"
```

<h2 id="tocS_TFNExemptionType">TFNExemptionType</h2>
<!-- backwards compatibility -->
<a id="schematfnexemptiontype"></a>
<a id="schema_TFNExemptionType"></a>
<a id="tocStfnexemptiontype"></a>
<a id="tocstfnexemptiontype"></a>

```json
"NOTQUOTED"
```

<h2 id="tocS_ResidencyStatus">ResidencyStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresidencystatus"></a>
<a id="schema_ResidencyStatus"></a>
<a id="tocSresidencystatus"></a>
<a id="tocsresidencystatus"></a>

```json
"AUSTRALIANRESIDENT"
```

<h2 id="tocS_TimesheetStatus">TimesheetStatus</h2>
<!-- backwards compatibility -->
<a id="schematimesheetstatus"></a>
<a id="schema_TimesheetStatus"></a>
<a id="tocStimesheetstatus"></a>
<a id="tocstimesheetstatus"></a>

```json
"DRAFT"
```

<h2 id="tocS_EmployeeStatus">EmployeeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaemployeestatus"></a>
<a id="schema_EmployeeStatus"></a>
<a id="tocSemployeestatus"></a>
<a id="tocsemployeestatus"></a>

```json
"ACTIVE"
```

Employee Status Types

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"VIC"
```

State abbreviation for employee home address

<h2 id="tocS_SuperMembership">SuperMembership</h2>
<!-- backwards compatibility -->
<a id="schemasupermembership"></a>
<a id="schema_SuperMembership"></a>
<a id="tocSsupermembership"></a>
<a id="tocssupermembership"></a>

```json
{
  "SuperMembershipID": "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
  "SuperFundID": "2187a42b-639a-45cb-9eed-cd4ae488306a",
  "EmployeeNumber": 1234
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuperMembershipID|string(uuid)|false|none|Xero unique identifier for Super membership|
|SuperFundID|string(uuid)|true|none|Xero identifier for super fund|
|EmployeeNumber|string|true|none|The membership number assigned to the employee by the super fund.|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"BANK"
```

See Account Types

<h2 id="tocS_APIException">APIException</h2>
<!-- backwards compatibility -->
<a id="schemaapiexception"></a>
<a id="schema_APIException"></a>
<a id="tocSapiexception"></a>
<a id="tocsapiexception"></a>

```json
{
  "ErrorNumber": 16,
  "Type": "QueryParseException",
  "Message": "No property or field 'hi' exists in type 'Employee' (at index 0)"
}
```

The object returned for a bad request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorNumber|number(integer)|false|none|The error number|
|Type|string|false|none|The type of error|
|Message|string|false|none|The message describing the error|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "Message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Validation error message|
