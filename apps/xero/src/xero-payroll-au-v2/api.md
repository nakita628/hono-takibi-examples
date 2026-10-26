<h1 id="xero-payroll-au-api-20">Xero Payroll AU API 2.0 v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Xero Payroll API 2.0 for orgs in Australia region.

Base URLs:

* <a href="https://api.xero.com/payroll.xro/2.0">https://api.xero.com/payroll.xro/2.0</a> - Xero Payroll AU API 2.0

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
|payroll.timesheets|Grant read-write access to payroll timesheets|
|payroll.timesheets.read|Grant read-only access to payroll timesheets|

<h1 id="xero-payroll-au-api-20-payrollauv2">PayrollAuV2</h1>

Operations available to regular developers

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
