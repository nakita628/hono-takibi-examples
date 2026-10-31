<h1 id="personnel-data">Personnel Data v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for reading and writing personnel data incl. data about attendances and absences

Base URLs:

* <a href="https://api.personio.de/v1">https://api.personio.de/v1</a>

# Authentication

* API Key (auth)
    - Parameter Name: **Authorization**, in: header.

<h1 id="personnel-data-default">Default</h1>

## get/company/attendances

> Code samples

```bash
curl 'https://example.com/company/attendances?start_date=1970-01-01&end_date=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /company/attendances`

This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.

<h3 id="getcompanyattendances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|true|First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results|
|end_date|query|string(date)|true|Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.|
|updated_from|query|string(datetime)|false|Datetime from when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_from will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.|
|updated_to|query|string(datetime)|false|Datetime until when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_to will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.|
|employees|query|[integer]|false|A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.|
|limit|query|integer|false|Pagination attribute to limit how many attendances will be returned per page|
|offset|query|integer|false|Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "break": 50,
        "comment": "I was productive as hell",
        "date": "2017-01-17",
        "employee": 325659,
        "end_time": "18:00",
        "is_holiday": false,
        "is_on_time_off": false,
        "start_time": "9:00",
        "updated_at": "2017-01-17T16:41:08+00:00"
      },
      "id": 1234,
      "type": "AttendancePeriod"
    },
    {
      "attributes": {
        "break": 60,
        "comment": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        },
        "date": "2017-01-18",
        "employee": 325660,
        "end_time": "18:30",
        "is_holiday": false,
        "is_on_time_off": true,
        "start_time": "9:30",
        "updated_at": "2017-01-18T16:41:08+01:00"
      },
      "id": 1235,
      "type": "AttendancePeriod"
    }
  ],
  "limit": 200,
  "offset": 0,
  "success": true
}
```

<h3 id="getcompanyattendances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AttendancePeriodsResponse](#schemaattendanceperiodsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## post/company/attendances

> Code samples

```bash
curl https://example.com/company/attendances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attendances": [
      {
        "break": 120,
        "comment": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        },
        "date": "2017-01-18",
        "employee": 1234,
        "end_time": "18:00",
        "start_time": "08:00"
      },
      {
        "break": 35,
        "comment": "I was productive as hell",
        "date": "2017-01-17",
        "employee": 1235,
        "end_time": "12:00",
        "start_time": "09:00"
      }
    ]
  }'
```

`POST /company/attendances`

This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.

> Body parameter

```json
{
  "attendances": [
    {
      "break": 120,
      "comment": {
        "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
      },
      "date": "2017-01-18",
      "employee": 1234,
      "end_time": "18:00",
      "start_time": "08:00"
    },
    {
      "break": 35,
      "comment": "I was productive as hell",
      "date": "2017-01-17",
      "employee": 1235,
      "end_time": "12:00",
      "start_time": "09:00"
    }
  ]
}
```

<h3 id="postcompanyattendances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewAttendancePeriodRequest](#schemanewattendanceperiodrequest)|true|List of attendance periods to create|
|» attendances|body|[object]|false|none|
|» » break|body|integer(int32)|true|Break in minutes|
|» » comment|body|string|true|Optional comment|
|» » date|body|string(date)|true|Attendance date as YYYY-MM-DD|
|» » employee|body|integer|true|Employee identifier|
|» » end_time|body|string|true|End time as HH:MM|
|» » start_time|body|string|true|Start time as HH:MM|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": [
      1,
      2
    ],
    "message": "success"
  },
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 400,
    "detailed_message": [
      {
        "break": 60,
        "comment": "",
        "date": "2017-01-01",
        "employee": 1234,
        "end_time": "18:00",
        "error_msg": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        },
        "id": 1,
        "start_time": "09:00",
        "success": true
      },
      {
        "break": 60,
        "comment": "",
        "date": "2017-01-01",
        "employee": 1234,
        "end_time": "18:00",
        "error_msg": "Existing overlapping attendances periods",
        "id": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        },
        "start_time": "09:00",
        "success": false
      }
    ],
    "message": "Error when trying to insert Attendances periods rows"
  },
  "success": false
}
```

<h3 id="postcompanyattendances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The attendance periods were created successfully|[NewAttendancePeriodResponse](#schemanewattendanceperiodresponse)|
|400|Bad Request|Invalid request|[DetailedErrorResponse](#schemadetailederrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## delete/company/attendances/{id}

> Code samples

```bash
curl https://example.com/company/attendances/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /company/attendances/{id}`

This endpoint is responsible for deleting attendance data for the company employees.

<h3 id="deletecompanyattendancesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the attendance period to delete|

> Example responses

> 200 Response

```json
{
  "data": {
    "message": "The attendance period was deleted."
  },
  "success": true
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "message": "The attendance period was not found."
  },
  "success": false
}
```

<h3 id="deletecompanyattendancesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Response](#schemaresponse)|
|404|Not Found|Not found response|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## patch/company/attendances/{id}

> Code samples

```bash
curl https://example.com/company/attendances/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "break": 35,
    "comment": null,
    "date": "2019-03-17",
    "end_time": "12:00",
    "start_time": "9:00"
  }'
```

`PATCH /company/attendances/{id}`

This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.

> Body parameter

```json
{
  "break": 35,
  "comment": null,
  "date": "2019-03-17",
  "end_time": "12:00",
  "start_time": "9:00"
}
```

<h3 id="patchcompanyattendancesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the attendance period to update|
|body|body|[UpdateAttendancePeriodRequest](#schemaupdateattendanceperiodrequest)|true|attendance period data to update|
|» break|body|integer(int32)|false|Break in minutes|
|» comment|body|string|false|Optional comment|
|» date|body|string(date)|false|Attendance date as YYYY-MM-DD|
|» end_time|body|string|false|End time as HH:MM|
|» start_time|body|string|false|Start time as HH:MM|

> Example responses

> 200 Response

```json
{
  "data": {
    "message": "The attendance period was updated."
  },
  "success": true
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "message": "The attendance period was not found."
  },
  "success": false
}
```

<h3 id="patchcompanyattendancesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Response](#schemaresponse)|
|404|Not Found|Not found response|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/employees

> Code samples

```bash
curl https://example.com/company/employees \
  -H 'Accept: application/json'
```

`GET /company/employees`

List Employees

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "absence_entitlement": {
          "label": "Absence entitlement",
          "value": [
            {
              "attributes": {
                "entitlement": 30,
                "id": 12345,
                "name": "Paid Vacation"
              },
              "type": "TimeOffType"
            },
            {
              "attributes": {
                "entitlement": 0,
                "id": 12346,
                "name": "Parental leave"
              },
              "type": "TimeOffType"
            },
            {
              "attributes": {
                "entitlement": 0,
                "id": 12347,
                "name": "Sick days"
              },
              "type": "TimeOffType"
            }
          ]
        },
        "contract_end_date": {
          "label": "Contract ends",
          "value": {
            "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
          }
        },
        "cost_centers": {
          "label": "Cost center",
          "value": [
            {
              "attributes": {
                "id": 320,
                "name": "Cost Center One",
                "percentage": 50
              },
              "type": "CostCenter"
            },
            {
              "attributes": {
                "id": 321,
                "name": "Cost Center Two",
                "percentage": 50
              },
              "type": "CostCenter"
            }
          ]
        },
        "created_at": {
          "label": "created_at",
          "value": "2016-10-20T16:15:55+0200"
        },
        "department": {
          "label": "Department",
          "value": {
            "attributes": {
              "name": "Marketing"
            },
            "type": "Department"
          }
        },
        "dynamic_21827": {
          "label": "IBAN",
          "value": "DE98 8989 9898 0000 8989 00"
        },
        "dynamic_24407": {
          "label": "Titel",
          "value": "Dr"
        },
        "email": {
          "label": "Email",
          "value": "andreas.anderson@demo.com"
        },
        "employment_type": {
          "label": "Employment type",
          "value": "internal"
        },
        "first_name": {
          "label": "First name",
          "value": "Andreas"
        },
        "fix_salary": {
          "label": "Fix salary",
          "value": 4000
        },
        "gender": {
          "label": "Gender",
          "value": "male"
        },
        "hire_date": {
          "label": "Hire date",
          "value": "2012-02-01T00:00:00+0100"
        },
        "holiday_calendar": {
          "label": "Holiday Calendar",
          "value": {
            "attributes": {
              "country": "DE",
              "id": 931,
              "name": "DE (Hamburg) Feiertage",
              "state": "Hamburg"
            },
            "type": "HolidayCalendar"
          }
        },
        "hourly_salary": {
          "label": "Hourly salary",
          "value": 0
        },
        "id": {
          "label": "id",
          "value": 83752
        },
        "last_modified_at": {
          "label": "Last modified",
          "value": "2016-10-22T16:15:55+0200"
        },
        "last_name": {
          "label": "Last name",
          "value": "Anderson"
        },
        "last_working_day": {
          "label": "Last working day",
          "value": "2017-02-28T00:00:00+0200"
        },
        "office": {
          "label": "Office",
          "value": {
            "attributes": {
              "name": "Munich"
            },
            "type": "Office"
          }
        },
        "position": {
          "label": "Position",
          "value": "Online Marketing Specialist"
        },
        "probation_period_end": {
          "label": "Probation period end",
          "value": "2012-07-31T00:00:00+0200"
        },
        "profile_picture": {
          "label": "Profile Picture",
          "value": "http://api.dev.personio.de/v1/company/employees/2/profile-picture"
        },
        "status": {
          "label": "Status",
          "value": "active"
        },
        "supervisor": {
          "label": "Supervisor",
          "value": {
            "attributes": {
              "email": {
                "label": "Email",
                "value": "max.mustermann@example.org"
              },
              "first_name": {
                "label": "First name",
                "value": "Max"
              },
              "id": {
                "label": "id",
                "value": 423506
              },
              "last_name": {
                "label": "Last name",
                "value": "Mustermann"
              }
            },
            "type": "Employee"
          }
        },
        "termination_date": {
          "label": "Termination date",
          "value": {
            "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
          }
        },
        "termination_reason": {
          "label": "Termination reason",
          "value": ""
        },
        "termination_type": {
          "label": "Termination type",
          "value": ""
        },
        "vacation_day_balance": {
          "label": "Vacation day balance",
          "value": 28.5
        },
        "weekly_working_hours": {
          "label": "Weekly hours",
          "value": "40"
        },
        "work_schedule": {
          "label": "Work Schedule",
          "value": {
            "attributes": {
              "friday": "06:00",
              "id": 123,
              "monday": "08:30",
              "name": "Standard Hours",
              "saturday": "00:00",
              "sunday": "00:00",
              "thursday": "08:30",
              "tuesday": "08:30",
              "wednesday": "08:30"
            },
            "type": "WorkSchedule"
          }
        }
      },
      "type": "Employee"
    }
  ],
  "success": true
}
```

<h3 id="getcompanyemployees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmployeesResponse](#schemaemployeesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an employee

> Code samples

```bash
curl https://example.com/company/employees \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'employee%5Bdepartment%5D=string&employee%5Bemail%5D=string&employee%5Bfirst_name%5D=string&employee%5Bgender%5D=male&employee%5Bhire_date%5D=1970-01-01&employee%5Blast_name%5D=string&employee%5Bposition%5D=string&employee%5Bweekly_hours%5D=0'
```

`POST /company/employees`

Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.


> Body parameter

```yaml
"employee[department]": string
"employee[email]": string
"employee[first_name]": string
"employee[gender]": male
"employee[hire_date]": "1970-01-01"
"employee[last_name]": string
"employee[position]": string
"employee[weekly_hours]": 0
```

<h3 id="create-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» employee[department]|body|string|false|Employee department|
|» employee[email]|body|string|true|Employee email|
|» employee[first_name]|body|string|true|Employee first name|
|» employee[gender]|body|string|false|Employee gender|
|» employee[hire_date]|body|string(date)|false|Employee hire date|
|» employee[last_name]|body|string|true|Employee last name|
|» employee[position]|body|string|false|Employee position|
|» employee[weekly_hours]|body|number|false|Employee weekly working hours|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» employee[gender]|male|
|» employee[gender]|female|
|» employee[gender]|diverse|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 81723,
    "message": "success"
  },
  "success": true
}
```

<h3 id="create-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful creation of a employee|Inline|

<h3 id="create-an-employee-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/employees/{employee_id}

> Code samples

```bash
curl https://example.com/company/employees/0 \
  -H 'Accept: application/json'
```

`GET /company/employees/{employee_id}`

Show employee by ID

<h3 id="getcompanyemployeesemployeeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "absence_entitlement": {
        "label": "Absence entitlement",
        "value": [
          {
            "attributes": {
              "entitlement": 30,
              "id": 12345,
              "name": "Paid Vacation"
            },
            "type": "TimeOffType"
          },
          {
            "attributes": {
              "entitlement": 0,
              "id": 12346,
              "name": "Parental leave"
            },
            "type": "TimeOffType"
          },
          {
            "attributes": {
              "entitlement": 0,
              "id": 12347,
              "name": "Sick days"
            },
            "type": "TimeOffType"
          }
        ]
      },
      "contract_end_date": {
        "label": "Contract ends",
        "value": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        }
      },
      "cost_centers": {
        "label": "Cost center",
        "value": [
          {
            "attributes": {
              "id": 320,
              "name": "Cost Center One",
              "percentage": 50
            },
            "type": "CostCenter"
          },
          {
            "attributes": {
              "id": 321,
              "name": "Cost Center Two",
              "percentage": 50
            },
            "type": "CostCenter"
          }
        ]
      },
      "created_at": {
        "label": "created_at",
        "value": "2016-10-20T16:15:55+0200"
      },
      "department": {
        "label": "Department",
        "value": {
          "attributes": {
            "name": "Marketing"
          },
          "type": "Department"
        }
      },
      "dynamic_21827": {
        "label": "IBAN",
        "value": "DE98 8989 9898 0000 8989 00"
      },
      "dynamic_24407": {
        "label": "Titel",
        "value": "Dr"
      },
      "email": {
        "label": "Email",
        "value": "andreas.anderson@demo.com"
      },
      "employment_type": {
        "label": "Employment type",
        "value": "internal"
      },
      "first_name": {
        "label": "First name",
        "value": "Andreas"
      },
      "fix_salary": {
        "label": "Fix salary",
        "value": 4000
      },
      "gender": {
        "label": "Gender",
        "value": "male"
      },
      "hire_date": {
        "label": "Hire date",
        "value": "2012-02-01T00:00:00+0100"
      },
      "holiday_calendar": {
        "label": "Holiday Calendar",
        "value": {
          "attributes": {
            "country": "DE",
            "id": 931,
            "name": "DE (Hamburg) Feiertage",
            "state": "Hamburg"
          },
          "type": "HolidayCalendar"
        }
      },
      "hourly_salary": {
        "label": "Hourly salary",
        "value": 0
      },
      "id": {
        "label": "id",
        "value": 83752
      },
      "last_modified_at": {
        "label": "Last modified",
        "value": "2016-10-22T16:15:55+0200"
      },
      "last_name": {
        "label": "Last name",
        "value": "Anderson"
      },
      "last_working_day": {
        "label": "Last working day",
        "value": "2017-02-28T00:00:00+0200"
      },
      "office": {
        "label": "Office",
        "value": {
          "attributes": {
            "name": "Munich"
          },
          "type": "Office"
        }
      },
      "position": {
        "label": "Position",
        "value": "Online Marketing Specialist"
      },
      "probation_period_end": {
        "label": "Probation period end",
        "value": "2012-07-31T00:00:00+0200"
      },
      "status": {
        "label": "Status",
        "value": "active"
      },
      "supervisor": {
        "label": "Supervisor",
        "value": {
          "attributes": {
            "email": {
              "label": "Email",
              "value": "max.mustermann@example.org"
            },
            "first_name": {
              "label": "First name",
              "value": "Max"
            },
            "id": {
              "label": "id",
              "value": 423506
            },
            "last_name": {
              "label": "Last name",
              "value": "Mustermann"
            }
          },
          "type": "Employee"
        }
      },
      "termination_date": {
        "label": "Termination date",
        "value": {
          "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
        }
      },
      "termination_reason": {
        "label": "Termination reason",
        "value": ""
      },
      "termination_type": {
        "label": "Termination type",
        "value": ""
      },
      "vacation_day_balance": {
        "label": "Vacation day balance",
        "value": 28.5
      },
      "weekly_working_hours": {
        "label": "Weekly hours",
        "value": "40"
      },
      "work_schedule": {
        "label": "Work Schedule",
        "value": {
          "attributes": {
            "friday": "06:00",
            "id": 123,
            "monday": "08:30",
            "name": "Standard Hours",
            "saturday": "00:00",
            "sunday": "00:00",
            "thursday": "08:30",
            "tuesday": "08:30",
            "wednesday": "08:30"
          },
          "type": "WorkSchedule"
        }
      }
    },
    "type": "Employee"
  },
  "success": true
}
```

<h3 id="getcompanyemployeesemployeeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmployeeResponse](#schemaemployeeresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/employees/{employee_id}/profile-picture/{width}

> Code samples

```bash
curl https://example.com/company/employees/0/profile-picture/0
```

`GET /company/employees/{employee_id}/profile-picture/{width}`

Show employee profile picture

<h3 id="getcompanyemployeesemployeeidprofile-picturewidth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|
|width|path|integer(int32)|true|Width of the image. Default 75x75|

<h3 id="getcompanyemployeesemployeeidprofile-picturewidth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/time-off-types

> Code samples

```bash
curl https://example.com/company/time-off-types \
  -H 'Accept: application/json'
```

`GET /company/time-off-types`

Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'

<h3 id="getcompanytime-off-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Pagination attribute to limit how many records will be returned per page|
|offset|query|integer|false|Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "name": "Paid vacation"
      },
      "id": 1234,
      "type": "TimeOffType"
    },
    {
      "attributes": {
        "name": "Home office"
      },
      "id": 1235,
      "type": "TimeOffType"
    }
  ],
  "success": true
}
```

<h3 id="getcompanytime-off-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="getcompanytime-off-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TimeOffTypeResource](#schematimeofftyperesource)]|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/time-offs

> Code samples

```bash
curl https://example.com/company/time-offs \
  -H 'Accept: application/json'
```

`GET /company/time-offs`

This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.

<h3 id="getcompanytime-offs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|false|First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results|
|end_date|query|string(date)|false|Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.|
|updated_from|query|string(datetime)|false|Datetime from when the queried periods have been updated. It is inclusive, so the day specified as updated_from will also be considered on the results.|
|updated_to|query|string(datetime)|false|Datetime until when the queried periods have been updated. It is inclusive, so the day specified as updated_to will also be considered on the results.|
|employees|query|[integer]|false|A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.|
|limit|query|integer|false|Pagination attribute to limit how many attendances will be returned per page|
|offset|query|integer|false|Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "certificate": {
          "status": "not-required"
        },
        "created_at": "2017-01-17T10:32:18+0100",
        "days_count": 3,
        "employee": {
          "attributes": {
            "email": {
              "label": "Email",
              "value": "michael.miller@demo.com"
            },
            "first_name": {
              "label": "First name",
              "value": "Michael"
            },
            "id": {
              "label": "id",
              "value": 4567
            },
            "last_name": {
              "label": "Last name",
              "value": "Miller"
            }
          },
          "type": "Employee"
        },
        "end_date": "2017-12-29T00:00:00+0100",
        "half_day_end": 0,
        "half_day_start": 0,
        "id": 12345,
        "start_date": "2017-12-27T00:00:00+0100",
        "status": "approved",
        "time_off_type": {
          "attributes": {
            "id": 54321,
            "name": "Vacation"
          },
          "type": "TimeOffType"
        }
      },
      "type": "TimeOffPeriod"
    }
  ],
  "success": true
}
```

<h3 id="getcompanytime-offs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AbsencePeriodsResponse](#schemaabsenceperiodsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## post/company/time-offs

> Code samples

```bash
curl https://example.com/company/time-offs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "string",
    "employee_id": 0,
    "end_date": "1970-01-01",
    "half_day_end": true,
    "half_day_start": true,
    "start_date": "1970-01-01",
    "time_off_type_id": 0
  }'
```

`POST /company/time-offs`

This endpoint is responsible for adding absence data for the company employees.

> Body parameter

```json
{
  "comment": "string",
  "employee_id": 0,
  "end_date": "1970-01-01",
  "half_day_end": true,
  "half_day_start": true,
  "start_date": "1970-01-01",
  "time_off_type_id": 0
}
```

<h3 id="postcompanytime-offs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTimeOffPeriodRequest](#schemacreatetimeoffperiodrequest)|true|Absence period to create|
|» comment|body|string|false|Optional comment|
|» employee_id|body|integer|true|Employee identifier|
|» end_date|body|string(date)|true|Absence end date as YYYY-MM-DD|
|» half_day_end|body|boolean|true|Weather the end date is a half-day off|
|» half_day_start|body|boolean|true|Weather the start date is a half-day off|
|» start_date|body|string(date)|true|Absence start date as YYYY-MM-DD|
|» time_off_type_id|body|integer|true|Time-off type identifier|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "certificate": {
        "status": "not-required"
      },
      "created_at": "2017-01-17T10:32:18+0100",
      "days_count": 3,
      "employee": {
        "attributes": {
          "email": {
            "label": "Email",
            "value": "michael.miller@demo.com"
          },
          "first_name": {
            "label": "First name",
            "value": "Michael"
          },
          "id": {
            "label": "id",
            "value": 4567
          },
          "last_name": {
            "label": "Last name",
            "value": "Miller"
          }
        },
        "type": "Employee"
      },
      "end_date": "2017-12-29T00:00:00+0100",
      "half_day_end": 0,
      "half_day_start": 0,
      "id": 12345,
      "start_date": "2017-12-27T00:00:00+0100",
      "status": "approved",
      "time_off_type": {
        "attributes": {
          "id": 54321,
          "name": "Vacation"
        },
        "type": "TimeOffType"
      }
    },
    "type": "TimeOffPeriod"
  },
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 400,
    "message": "Error when trying to insert absence period"
  },
  "success": false
}
```

> 404 Response

```json
{
  "error": {
    "code": 0,
    "message": "Something went wrong"
  },
  "success": false
}
```

> 422 Response

```json
{
  "error": {
    "code": 0,
    "error_data": "{...}",
    "message": "The given data failed to pass validation."
  },
  "success": false
}
```

<h3 id="postcompanytime-offs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The absence period was created successfully|Inline|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Employee or Absence type not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="postcompanytime-offs-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CreateTimeOffPeriodResponse](#schemacreatetimeoffperiodresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/time-offs/{id}

> Code samples

```bash
curl https://example.com/company/time-offs/0 \
  -H 'Accept: application/json'
```

`GET /company/time-offs/{id}`

Absence Period

<h3 id="getcompanytime-offsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Numeric `id` of the absence period|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "certificate": {
        "status": "not-required"
      },
      "created_at": "2017-01-17T10:32:18+0100",
      "days_count": 3,
      "employee": {
        "attributes": {
          "email": {
            "label": "Email",
            "value": "michael.miller@demo.com"
          },
          "first_name": {
            "label": "First name",
            "value": "Michael"
          },
          "id": {
            "label": "id",
            "value": 2367
          },
          "last_name": {
            "label": "Last name",
            "value": "Miller"
          }
        },
        "type": "Employee"
      },
      "end_date": "2017-12-29T00:00:00+0100",
      "half_day_end": 0,
      "half_day_start": 0,
      "id": 12345,
      "start_date": "2017-12-27T00:00:00+0100",
      "status": "approved",
      "time_off_type": {
        "attributes": {
          "id": 45678,
          "name": "Vacation"
        },
        "type": "TimeOffType"
      }
    },
    "type": "TimeOffPeriod"
  },
  "success": true
}
```

<h3 id="getcompanytime-offsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AbsencePeriodResponse](#schemaabsenceperiodresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## delete/company/time-offs/{id}

> Code samples

```bash
curl https://example.com/company/time-offs/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /company/time-offs/{id}`

This endpoint is responsible for deleting absence period data for the company employees.

<h3 id="deletecompanytime-offsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the absence period to delete|

> Example responses

> 200 Response

```json
{
  "data": {
    "message": "The absence period was deleted."
  },
  "success": true
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "message": "The absence period was not found."
  },
  "success": false
}
```

<h3 id="deletecompanytime-offsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Response](#schemaresponse)|
|404|Not Found|Not found response|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AbsenceEntitlement">AbsenceEntitlement</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceentitlement"></a>
<a id="schema_AbsenceEntitlement"></a>
<a id="tocSabsenceentitlement"></a>
<a id="tocsabsenceentitlement"></a>

```json
{
  "label": "string",
  "value": [
    {
      "attributes": {
        "entitlement": 0,
        "id": 0,
        "name": "string"
      },
      "type": "TimeOffType"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|[object]|true|none|none|

<h2 id="tocS_AbsencePeriodResponse">AbsencePeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodresponse"></a>
<a id="schema_AbsencePeriodResponse"></a>
<a id="tocSabsenceperiodresponse"></a>
<a id="tocsabsenceperiodresponse"></a>

```json
{}
```

<h2 id="tocS_AbsencePeriodsResponse">AbsencePeriodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodsresponse"></a>
<a id="schema_AbsencePeriodsResponse"></a>
<a id="tocSabsenceperiodsresponse"></a>
<a id="tocsabsenceperiodsresponse"></a>

```json
{
  "data": {
    "attributes": [
      {
        "certificate": {
          "status": "string"
        },
        "created_at": "string",
        "days_count": 0,
        "employee": {
          "attributes": [
            {
              "email": "string",
              "first_name": "string",
              "id": 0,
              "last_name": "string"
            }
          ],
          "type": "string"
        },
        "end_date": "string",
        "half_day_end": 0,
        "half_day_start": 0,
        "id": 0,
        "start_date": "string",
        "status": "string",
        "time_off_type": {
          "attributes": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "type": "string"
        }
      }
    ],
    "type": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_AttendancePeriodsResponse">AttendancePeriodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattendanceperiodsresponse"></a>
<a id="schema_AttendancePeriodsResponse"></a>
<a id="tocSattendanceperiodsresponse"></a>
<a id="tocsattendanceperiodsresponse"></a>

```json
{
  "data": [
    {
      "attributes": [
        {
          "break": 0,
          "comment": "string",
          "date": "1970-01-01",
          "employee": 0,
          "end_time": "string",
          "is_holiday": true,
          "is_on_time_off": true,
          "start_time": "string"
        }
      ],
      "id": 0,
      "type": "string"
    }
  ],
  "success": true,
  "limit": 0,
  "offset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|[object]|true|none|none|
|limit|integer|false|none|none|
|offset|integer|false|none|none|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "label": "string",
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_CostCenters">CostCenters</h2>
<!-- backwards compatibility -->
<a id="schemacostcenters"></a>
<a id="schema_CostCenters"></a>
<a id="tocScostcenters"></a>
<a id="tocscostcenters"></a>

```json
{
  "label": "string",
  "value": [
    {
      "attributes": [
        {
          "id": 0,
          "name": "string",
          "percentage": 0
        }
      ],
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|[object]|true|none|none|

<h2 id="tocS_CreateTimeOffPeriodRequest">CreateTimeOffPeriodRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimeoffperiodrequest"></a>
<a id="schema_CreateTimeOffPeriodRequest"></a>
<a id="tocScreatetimeoffperiodrequest"></a>
<a id="tocscreatetimeoffperiodrequest"></a>

```json
{
  "comment": "string",
  "employee_id": 0,
  "end_date": "1970-01-01",
  "half_day_end": true,
  "half_day_start": true,
  "start_date": "1970-01-01",
  "time_off_type_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Optional comment|
|employee_id|integer|true|none|Employee identifier|
|end_date|string(date)|true|none|Absence end date as YYYY-MM-DD|
|half_day_end|boolean|true|none|Weather the end date is a half-day off|
|half_day_start|boolean|true|none|Weather the start date is a half-day off|
|start_date|string(date)|true|none|Absence start date as YYYY-MM-DD|
|time_off_type_id|integer|true|none|Time-off type identifier|

<h2 id="tocS_CreateTimeOffPeriodResponse">CreateTimeOffPeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimeoffperiodresponse"></a>
<a id="schema_CreateTimeOffPeriodResponse"></a>
<a id="tocScreatetimeoffperiodresponse"></a>
<a id="tocscreatetimeoffperiodresponse"></a>

```json
{
  "data": {
    "attributes": {
      "certificate": {
        "status": "string"
      },
      "created_at": "string",
      "days_count": 0,
      "employee": {
        "attributes": [
          {
            "email": "string",
            "first_name": "string",
            "id": 0,
            "last_name": "string"
          }
        ],
        "type": "string"
      },
      "end_date": "string",
      "half_day_end": 0,
      "half_day_start": 0,
      "id": 0,
      "start_date": "string",
      "status": "string",
      "time_off_type": {
        "attributes": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "type": "string"
      }
    },
    "type": "TimeOffPeriod"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "label": "string",
  "value": {
    "attributes": {
      "name": "string"
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_DetailedErrorResponse">DetailedErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailederrorresponse"></a>
<a id="schema_DetailedErrorResponse"></a>
<a id="tocSdetailederrorresponse"></a>
<a id="tocsdetailederrorresponse"></a>

```json
{
  "error": {
    "code": 0,
    "detailed_message": [
      {
        "break": 0,
        "comment": "string",
        "date": "string",
        "employee": 0,
        "end_time": "string",
        "error_msg": "string",
        "id": 0,
        "start_time": "string",
        "success": true
      }
    ],
    "message": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "attributes": [
    {
      "absence_entitlement": {
        "label": "string",
        "value": [
          {
            "attributes": {
              "entitlement": 0,
              "id": 0,
              "name": "string"
            },
            "type": "TimeOffType"
          }
        ]
      },
      "contract_end_date": {
        "label": "string",
        "value": {}
      },
      "cost_centers": {
        "label": "string",
        "value": [
          {
            "attributes": [
              {
                "id": 0,
                "name": "string",
                "percentage": 0
              }
            ],
            "type": "string"
          }
        ]
      },
      "created_at": {
        "label": "string",
        "value": {}
      },
      "department": {
        "label": "string",
        "value": {
          "attributes": {
            "name": "string"
          },
          "type": "string"
        }
      },
      "email": {
        "label": "string",
        "value": {}
      },
      "employment_type": {
        "label": "string",
        "value": {}
      },
      "first_name": {
        "label": "string",
        "value": {}
      },
      "fix_salary": {
        "label": "string",
        "value": {}
      },
      "gender": {
        "label": "string",
        "value": {}
      },
      "hire_date": {
        "label": "string",
        "value": {}
      },
      "holiday_calendar": {
        "label": "string",
        "value": {
          "attributes": {
            "country": "string",
            "id": 0,
            "name": "string",
            "state": "string"
          },
          "type": "string"
        }
      },
      "hourly_salary": {
        "label": "string",
        "value": {}
      },
      "id": {
        "label": "string",
        "value": {}
      },
      "last_name": {
        "label": "string",
        "value": {}
      },
      "office": {
        "label": "string",
        "value": {
          "attributes": {
            "name": "string"
          },
          "type": "string"
        }
      },
      "position": {
        "label": "string",
        "value": {}
      },
      "probation_period_end": {
        "label": "string",
        "value": {}
      },
      "status": {
        "label": "string",
        "value": {}
      },
      "supervisor": {
        "label": "string",
        "value": {}
      },
      "termination_date": {
        "label": "string",
        "value": {}
      },
      "termination_reason": {
        "label": "string",
        "value": {}
      },
      "termination_type": {
        "label": "string",
        "value": {}
      },
      "vacation_day_balance": {
        "label": "string",
        "value": {}
      },
      "weekly_working_hours": {
        "label": "string",
        "value": {}
      },
      "work_schedule": {
        "label": "string",
        "value": {
          "attributes": {
            "friday": "string",
            "id": 0,
            "monday": "string",
            "name": "string",
            "saturday": "string",
            "sunday": "string",
            "thursday": "string",
            "tuesday": "string",
            "wednesday": "string"
          },
          "type": "string"
        }
      }
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[object]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_EmployeeResponse">EmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeresponse"></a>
<a id="schema_EmployeeResponse"></a>
<a id="tocSemployeeresponse"></a>
<a id="tocsemployeeresponse"></a>

```json
{
  "data": {
    "attributes": [
      {
        "absence_entitlement": {
          "label": "string",
          "value": [
            {
              "attributes": {
                "entitlement": 0,
                "id": 0,
                "name": "string"
              },
              "type": "TimeOffType"
            }
          ]
        },
        "contract_end_date": {
          "label": "string",
          "value": {}
        },
        "cost_centers": {
          "label": "string",
          "value": [
            {
              "attributes": [
                {
                  "id": 0,
                  "name": "string",
                  "percentage": 0
                }
              ],
              "type": "string"
            }
          ]
        },
        "created_at": {
          "label": "string",
          "value": {}
        },
        "department": {
          "label": "string",
          "value": {
            "attributes": {
              "name": "string"
            },
            "type": "string"
          }
        },
        "email": {
          "label": "string",
          "value": {}
        },
        "employment_type": {
          "label": "string",
          "value": {}
        },
        "first_name": {
          "label": "string",
          "value": {}
        },
        "fix_salary": {
          "label": "string",
          "value": {}
        },
        "gender": {
          "label": "string",
          "value": {}
        },
        "hire_date": {
          "label": "string",
          "value": {}
        },
        "holiday_calendar": {
          "label": "string",
          "value": {
            "attributes": {
              "country": "string",
              "id": 0,
              "name": "string",
              "state": "string"
            },
            "type": "string"
          }
        },
        "hourly_salary": {
          "label": "string",
          "value": {}
        },
        "id": {
          "label": "string",
          "value": {}
        },
        "last_name": {
          "label": "string",
          "value": {}
        },
        "office": {
          "label": "string",
          "value": {
            "attributes": {
              "name": "string"
            },
            "type": "string"
          }
        },
        "position": {
          "label": "string",
          "value": {}
        },
        "probation_period_end": {
          "label": "string",
          "value": {}
        },
        "status": {
          "label": "string",
          "value": {}
        },
        "supervisor": {},
        "termination_date": {
          "label": "string",
          "value": {}
        },
        "termination_reason": {
          "label": "string",
          "value": {}
        },
        "termination_type": {
          "label": "string",
          "value": {}
        },
        "vacation_day_balance": {
          "label": "string",
          "value": {}
        },
        "weekly_working_hours": {
          "label": "string",
          "value": {}
        },
        "work_schedule": {
          "label": "string",
          "value": {
            "attributes": {
              "friday": "string",
              "id": 0,
              "monday": "string",
              "name": "string",
              "saturday": "string",
              "sunday": "string",
              "thursday": "string",
              "tuesday": "string",
              "wednesday": "string"
            },
            "type": "string"
          }
        }
      }
    ],
    "type": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_EmployeesResponse">EmployeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeesresponse"></a>
<a id="schema_EmployeesResponse"></a>
<a id="tocSemployeesresponse"></a>
<a id="tocsemployeesresponse"></a>

```json
{
  "data": [
    {
      "attributes": [
        {
          "absence_entitlement": {
            "label": "string",
            "value": [
              {
                "attributes": {
                  "entitlement": 0,
                  "id": 0,
                  "name": "string"
                },
                "type": "TimeOffType"
              }
            ]
          },
          "contract_end_date": {
            "label": "string",
            "value": {}
          },
          "cost_centers": {
            "label": "string",
            "value": [
              {
                "attributes": [
                  {
                    "id": 0,
                    "name": "string",
                    "percentage": 0
                  }
                ],
                "type": "string"
              }
            ]
          },
          "created_at": {
            "label": "string",
            "value": {}
          },
          "department": {
            "label": "string",
            "value": {
              "attributes": {
                "name": "string"
              },
              "type": "string"
            }
          },
          "email": {
            "label": "string",
            "value": {}
          },
          "employment_type": {
            "label": "string",
            "value": {}
          },
          "first_name": {
            "label": "string",
            "value": {}
          },
          "fix_salary": {
            "label": "string",
            "value": {}
          },
          "gender": {
            "label": "string",
            "value": {}
          },
          "hire_date": {
            "label": "string",
            "value": {}
          },
          "holiday_calendar": {
            "label": "string",
            "value": {
              "attributes": {
                "country": "string",
                "id": 0,
                "name": "string",
                "state": "string"
              },
              "type": "string"
            }
          },
          "hourly_salary": {
            "label": "string",
            "value": {}
          },
          "id": {
            "label": "string",
            "value": {}
          },
          "last_name": {
            "label": "string",
            "value": {}
          },
          "office": {
            "label": "string",
            "value": {
              "attributes": {
                "name": "string"
              },
              "type": "string"
            }
          },
          "position": {
            "label": "string",
            "value": {}
          },
          "probation_period_end": {
            "label": "string",
            "value": {}
          },
          "status": {
            "label": "string",
            "value": {}
          },
          "supervisor": {},
          "termination_date": {
            "label": "string",
            "value": {}
          },
          "termination_reason": {
            "label": "string",
            "value": {}
          },
          "termination_type": {
            "label": "string",
            "value": {}
          },
          "vacation_day_balance": {
            "label": "string",
            "value": {}
          },
          "weekly_working_hours": {
            "label": "string",
            "value": {}
          },
          "work_schedule": {
            "label": "string",
            "value": {
              "attributes": {
                "friday": "string",
                "id": 0,
                "monday": "string",
                "name": "string",
                "saturday": "string",
                "sunday": "string",
                "thursday": "string",
                "tuesday": "string",
                "wednesday": "string"
              },
              "type": "string"
            }
          }
        }
      ],
      "type": "string"
    }
  ],
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|[object]|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "code": 0,
    "message": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_HolidayCalendar">HolidayCalendar</h2>
<!-- backwards compatibility -->
<a id="schemaholidaycalendar"></a>
<a id="schema_HolidayCalendar"></a>
<a id="tocSholidaycalendar"></a>
<a id="tocsholidaycalendar"></a>

```json
{
  "label": "string",
  "value": {
    "attributes": {
      "country": "string",
      "id": 0,
      "name": "string",
      "state": "string"
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_NewAttendancePeriodRequest">NewAttendancePeriodRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewattendanceperiodrequest"></a>
<a id="schema_NewAttendancePeriodRequest"></a>
<a id="tocSnewattendanceperiodrequest"></a>
<a id="tocsnewattendanceperiodrequest"></a>

```json
{
  "attendances": [
    {
      "break": 120,
      "comment": {
        "$ref": "#/components/schemas/UpdateAttendancePeriodRequest/example/comment"
      },
      "date": "2017-01-18",
      "employee": 1234,
      "end_time": "18:00",
      "start_time": "08:00"
    },
    {
      "break": 35,
      "comment": "I was productive as hell",
      "date": "2017-01-17",
      "employee": 1235,
      "end_time": "12:00",
      "start_time": "09:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendances|[object]|false|none|none|

<h2 id="tocS_NewAttendancePeriodResponse">NewAttendancePeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemanewattendanceperiodresponse"></a>
<a id="schema_NewAttendancePeriodResponse"></a>
<a id="tocSnewattendanceperiodresponse"></a>
<a id="tocsnewattendanceperiodresponse"></a>

```json
{
  "data": {
    "id": [
      0
    ],
    "message": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "label": "string",
  "value": {
    "attributes": {
      "name": "string"
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "data": {},
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_Supervisor">Supervisor</h2>
<!-- backwards compatibility -->
<a id="schemasupervisor"></a>
<a id="schema_Supervisor"></a>
<a id="tocSsupervisor"></a>
<a id="tocssupervisor"></a>

```json
{
  "label": "string",
  "value": {
    "attributes": [
      {
        "absence_entitlement": {
          "label": "string",
          "value": [
            {
              "attributes": {
                "entitlement": 0,
                "id": 0,
                "name": "string"
              },
              "type": "TimeOffType"
            }
          ]
        },
        "contract_end_date": {
          "label": "string",
          "value": {}
        },
        "cost_centers": {
          "label": "string",
          "value": [
            {
              "attributes": [
                {
                  "id": 0,
                  "name": "string",
                  "percentage": 0
                }
              ],
              "type": "string"
            }
          ]
        },
        "created_at": {
          "label": "string",
          "value": {}
        },
        "department": {
          "label": "string",
          "value": {
            "attributes": {
              "name": "string"
            },
            "type": "string"
          }
        },
        "email": {
          "label": "string",
          "value": {}
        },
        "employment_type": {
          "label": "string",
          "value": {}
        },
        "first_name": {
          "label": "string",
          "value": {}
        },
        "fix_salary": {
          "label": "string",
          "value": {}
        },
        "gender": {
          "label": "string",
          "value": {}
        },
        "hire_date": {
          "label": "string",
          "value": {}
        },
        "holiday_calendar": {
          "label": "string",
          "value": {
            "attributes": {
              "country": "string",
              "id": 0,
              "name": "string",
              "state": "string"
            },
            "type": "string"
          }
        },
        "hourly_salary": {
          "label": "string",
          "value": {}
        },
        "id": {
          "label": "string",
          "value": {}
        },
        "last_name": {
          "label": "string",
          "value": {}
        },
        "office": {
          "label": "string",
          "value": {
            "attributes": {
              "name": "string"
            },
            "type": "string"
          }
        },
        "position": {
          "label": "string",
          "value": {}
        },
        "probation_period_end": {
          "label": "string",
          "value": {}
        },
        "status": {
          "label": "string",
          "value": {}
        },
        "supervisor": {},
        "termination_date": {
          "label": "string",
          "value": {}
        },
        "termination_reason": {
          "label": "string",
          "value": {}
        },
        "termination_type": {
          "label": "string",
          "value": {}
        },
        "vacation_day_balance": {
          "label": "string",
          "value": {}
        },
        "weekly_working_hours": {
          "label": "string",
          "value": {}
        },
        "work_schedule": {
          "label": "string",
          "value": {
            "attributes": {
              "friday": "string",
              "id": 0,
              "monday": "string",
              "name": "string",
              "saturday": "string",
              "sunday": "string",
              "thursday": "string",
              "tuesday": "string",
              "wednesday": "string"
            },
            "type": "string"
          }
        }
      }
    ],
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|[Employee](#schemaemployee)|true|none|none|

<h2 id="tocS_TimeOffTypeResource">TimeOffTypeResource</h2>
<!-- backwards compatibility -->
<a id="schematimeofftyperesource"></a>
<a id="schema_TimeOffTypeResource"></a>
<a id="tocStimeofftyperesource"></a>
<a id="tocstimeofftyperesource"></a>

```json
{
  "attributes": {
    "name": "string"
  },
  "id": 0,
  "type": "TimeOffType"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer|false|none|identifier|
|type|string|false|none|Time-off type resource name|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TimeOffType|

<h2 id="tocS_UpdateAttendancePeriodRequest">UpdateAttendancePeriodRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateattendanceperiodrequest"></a>
<a id="schema_UpdateAttendancePeriodRequest"></a>
<a id="tocSupdateattendanceperiodrequest"></a>
<a id="tocsupdateattendanceperiodrequest"></a>

```json
{
  "break": 35,
  "comment": null,
  "date": "2019-03-17",
  "end_time": "12:00",
  "start_time": "9:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|break|integer(int32)|false|none|Break in minutes|
|comment|string|false|none|Optional comment|
|date|string(date)|false|none|Attendance date as YYYY-MM-DD|
|end_time|string|false|none|End time as HH:MM|
|start_time|string|false|none|Start time as HH:MM|

<h2 id="tocS_WorkSchedule">WorkSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaworkschedule"></a>
<a id="schema_WorkSchedule"></a>
<a id="tocSworkschedule"></a>
<a id="tocsworkschedule"></a>

```json
{
  "label": "string",
  "value": {
    "attributes": {
      "friday": "string",
      "id": 0,
      "monday": "string",
      "name": "string",
      "saturday": "string",
      "sunday": "string",
      "thursday": "string",
      "tuesday": "string",
      "wednesday": "string"
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|object|true|none|none|
|value|object|true|none|none|
