<h1 id="personnel-data">Personnel Data v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for reading and writing personnel data including data about attendances, absences, documents, etc

Base URLs:

* <a href="https://api.personio.de/v1">https://api.personio.de/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="personnel-data-employees">Employees</h1>

## List Employees

> Code samples

```bash
curl https://api.personio.de/v1/company/employees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees`

List Company Employees

<h3 id="list-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Pagination attribute to limit the number of employees returned per page.|
|offset|query|integer|false|Pagination attribute to identify the first item in the collection to return.|
|email|query|string|false|Find an employee with the given email address. The response is still a list, containing only the filtered employee. NOTE: when using the updated_since filter, the email filter is ignored.|
|attributes[]|query|[string]|false|A list of attributes that will be returned for the employees, ie. a projection of the employee fields and relationships. In case `updated_since` query parameter is used, this list will additionally be used to exclude the employees that had none of the provided `attributes[]` updated since `updated_since`, ie. a selection filter.|
|updated_since|query|string|false|Filter to select and return only the employees that have been updated after `updated_since`. When it is used together with the `attributes[]` query parameter, the filter will select only the employees that have had any of the provided `attributes[]` updated since `updated_since`. The format is `ISO 8601` (2022-12-24T08:15:30) or `YYYY-MM-DD`. NOTE: when using the `updated_since` filter, the `email`, `limit`, and `offset` parameters are ignored.<br><details> <summary><b>Examples with <code>updated_since</code> and <code>attributes[]</code>:</b></summary><br /> In an example company that has 17 employees:<br /><br /> <details><br>  <summary><br>  <code class="language-html">?updated_since=2022-12-24T08:15:30</code><br>  will yield 10 employees that were recently updated:<br>  </summary><br><p><pre class="prettyprint"><code language="json" class="language-json"> {<br>  "success": true,<br>  "metadata": {<br>    "total_elements": 10,<br>    "current_page": 0,<br>    "total_pages": 10<br>  },<br>  "offset": 0,<br>  "limit": 1,<br>  "data": [<br>    {<br>      "type": "Employee",<br>      "attributes": {<br>        "id": {<br>          "label": "ID",<br>          "value": 1,<br>          "type": "integer",<br>          "universal_id": "id"<br>        },<br>        "first_name": {<br>          "label": "First name",<br>          "value": "Alexander",<br>          "type": "standard",<br>          "universal_id": "first_name"<br>        },<br>        "last_name": {<br>          "label": "Last name",<br>          "value": "Bergmann",<br>          "type": "standard",<br>          "universal_id": "last_name"<br>        },<br>        "email": {<br>          "label": "Email",<br>          "value": "alexander.bergmann@demo.com",<br>          "type": "standard",<br>          "universal_id": "email"<br>        }<br>      }<br>    }, ...<br>  ],<br>  ...<br>  ...<br>} </code></pre></p> </details><br /> <details><br>  <summary><br>  <code class="language-html">?attributes[]=first_name</code><br>  will yield all 17 employees:<br>  </summary><br><p><pre class="prettyprint"><code language="json" class="language-json"> {<br>  "success": true,<br>  "metadata": {<br>    "total_elements": 17,<br>    "current_page": 0,<br>    "total_pages": 17<br>  },<br>  "offset": 0,<br>  "limit": 1,<br>  "data": [<br>    {<br>      "type": "Employee",<br>      "attributes": {<br>        "id": {<br>          "label": "ID",<br>          "value": 1,<br>          "type": "integer",<br>          "universal_id": "id"<br>        },<br>        "first_name": {<br>          "label": "First name",<br>          "value": "Alexander",<br>          "type": "standard",<br>          "universal_id": "first_name"<br>        }<br>      }<br>    }<br>  ]<br>} </code></pre></p> </details><br /> <details><br>  <summary><br>  <code class="language-html">?attributes[]=first_name&updated_since=2022-12-24T08:15:30</code><br>  will yield 3 employees, ones that had their <code>first_name</code> changed since <code>2022-12-24T08:15:30</code>:<br>  </summary><br><p><pre class="prettyprint"><code language="json" class="language-json"> {<br>  "success": true,<br>  "metadata": {<br>    "total_elements": 3,<br>    "current_page": 0,<br>    "total_pages": 3<br>  },<br>  "offset": 0,<br>  "limit": 1,<br>  "data": [<br>    {<br>      "type": "Employee",<br>      "attributes": {<br>        "id": {<br>          "label": "ID",<br>          "value": 1,<br>          "type": "integer",<br>          "universal_id": "id"<br>        },<br>        "first_name": {<br>          "label": "First name",<br>          "value": "Alexander",<br>          "type": "standard",<br>          "universal_id": "first_name"<br>        }<br>      }<br>    }<br>  ]<br>} </code></pre></p> </details> </details>|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 2,
    "current_page": 0,
    "total_pages": 3
  },
  "offset": 0,
  "limit": 20,
  "data": [
    {
      "type": "Employee",
      "attributes": {
        "id": {
          "label": "ID",
          "value": 1,
          "type": "integer",
          "universal_id": "id"
        },
        "first_name": {
          "label": "First name",
          "value": "Alexander",
          "type": "standard",
          "universal_id": "first_name"
        },
        "last_name": {
          "label": "Last name",
          "value": "Bergmann",
          "type": "standard",
          "universal_id": "last_name"
        },
        "preferred_name": {
          "label": "Name (preferred)",
          "value": "Alexander Bergmann",
          "type": "standard",
          "universal_id": "preferred_name"
        },
        "email": {
          "label": "Email",
          "value": "alexander.bergmann@demo.email",
          "type": "standard",
          "universal_id": "email"
        },
        "gender": {
          "label": "Gender",
          "value": "male",
          "type": "standard",
          "universal_id": "gender"
        },
        "status": {
          "label": "Status",
          "value": "active",
          "type": "standard",
          "universal_id": "status"
        },
        "position": {
          "label": "Position",
          "value": "CTO",
          "type": "standard",
          "universal_id": "position"
        },
        "supervisor": {
          "label": "Supervisor",
          "value": {
            "type": "Employee",
            "attributes": {
              "id": {
                "label": "ID",
                "value": 2,
                "type": "integer",
                "universal_id": "id"
              }
            }
          },
          "type": "standard",
          "universal_id": "supervisor"
        },
        "employment_type": {
          "label": "Employment type",
          "value": "external",
          "type": "standard",
          "universal_id": "employment_type"
        },
        "weekly_working_hours": {
          "label": "Weekly hours",
          "value": "40",
          "type": "standard",
          "universal_id": "weekly_working_hours"
        },
        "hire_date": {
          "label": "Hire date",
          "value": "2014-11-09T00:00:00+01:00",
          "type": "date",
          "universal_id": "hire_date"
        },
        "contract_end_date": {
          "label": "Contract ends",
          "value": null,
          "type": "date",
          "universal_id": "contract_end_date"
        },
        "termination_date": {
          "label": "Termination date",
          "value": null,
          "type": "date",
          "universal_id": "termination_date"
        },
        "termination_type": {
          "label": "Termination type",
          "value": null,
          "type": "standard",
          "universal_id": "termination_type"
        },
        "termination_reason": {
          "label": "Termination reason",
          "value": null,
          "type": "standard",
          "universal_id": "termination_reason"
        },
        "probation_period_end": {
          "label": "Probation period end",
          "value": null,
          "type": "date",
          "universal_id": "probation_period_end"
        },
        "created_at": {
          "label": "created_at",
          "value": "2017-05-23T09:49:03+02:00",
          "type": "date",
          "universal_id": "created_at"
        },
        "last_modified_at": {
          "label": "Last modified",
          "value": "2020-11-18T17:33:55+01:00",
          "type": "date",
          "universal_id": "last_modified_at"
        },
        "subcompany": {
          "label": "Subcompany",
          "value": {
            "type": "Subcompany",
            "attributes": {
              "id": 7033,
              "name": "CS Demo GmbH"
            }
          },
          "type": "standard",
          "universal_id": "subcompany"
        },
        "office": {
          "label": "Workplace",
          "value": {
            "type": "Office",
            "attributes": {
              "id": 131014,
              "name": "Munich"
            }
          },
          "type": "standard",
          "universal_id": "office"
        },
        "department": {
          "label": "Department",
          "value": {
            "type": "Department",
            "attributes": {
              "id": 281521,
              "name": "Customer Support"
            }
          },
          "type": "standard",
          "universal_id": "department"
        },
        "cost_centers": {
          "label": "Cost center",
          "value": [
            {
              "type": "CostCenter",
              "attributes": {
                "id": 82957,
                "name": "Cost center 1",
                "percentage": 100
              }
            }
          ],
          "type": "standard",
          "universal_id": "cost_centers"
        },
        "holiday_calendar": {
          "label": "Public holidays",
          "value": {
            "type": "HolidayCalendar",
            "attributes": {
              "id": 2,
              "name": "Deutschland (Bayern) Feiertage",
              "country": "DE",
              "state": "Bayern"
            }
          },
          "type": "standard",
          "universal_id": "holiday_calendar"
        },
        "absence_entitlement": {
          "label": "Absence entitlement",
          "value": [
            {
              "type": "TimeOffType",
              "attributes": {
                "id": 113437,
                "name": "Paid vacation",
                "category": "paid_vacation",
                "entitlement": 24
              }
            }
          ],
          "type": "standard",
          "universal_id": "absence_entitlement"
        },
        "work_schedule": {
          "label": "Work schedule",
          "value": {
            "type": "WorkSchedule",
            "attributes": {
              "id": 97188,
              "id_str": "97188",
              "name": "Full-time, 40 hours without time tracking, (mon,tue,wed,thu,fri)",
              "valid_from": null,
              "monday": "08:00",
              "tuesday": "08:00",
              "wednesday": "08:00",
              "thursday": "08:00",
              "friday": "08:00",
              "saturday": "00:00",
              "sunday": "00:00"
            }
          },
          "type": "standard",
          "universal_id": "work_schedule"
        },
        "fix_salary": {
          "label": "Fix salary",
          "value": 3000,
          "type": "decimal",
          "universal_id": "fix_salary",
          "currency": "EUR"
        },
        "fix_salary_interval": {
          "label": "Salary interval",
          "value": "monthly",
          "type": "standard",
          "universal_id": "fix_salary_interval"
        },
        "hourly_salary": {
          "label": "Hourly salary",
          "value": 0,
          "type": "decimal",
          "universal_id": "hourly_salary",
          "currency": "EUR"
        },
        "vacation_day_balance": {
          "label": "Vacation day balance",
          "value": 2,
          "type": "decimal",
          "universal_id": "vacation_day_balance"
        },
        "last_working_day": {
          "label": "Last day of work",
          "value": null,
          "type": "date",
          "universal_id": "last_working_day"
        },
        "profile_picture": {
          "label": "Profile Picture",
          "value": "https://api.personio.de/v1/company/employees/1132888/profile-picture",
          "type": "standard",
          "universal_id": "profile_picture"
        },
        "team": {
          "label": "Team",
          "value": {
            "type": "Team",
            "attributes": {
              "id": 59026,
              "name": "T_X"
            }
          },
          "type": "standard",
          "universal_id": "team"
        },
        "dynamic_24407": {
          "label": "Titel",
          "value": "Dr",
          "universal_id": null,
          "type": "standard"
        },
        "dynamic_21827": {
          "label": "IBAN",
          "value": "DE98 8989 9898 0000 8989 00",
          "universal_id": "iban",
          "type": "standard"
        },
        "dynamic_33400": {
          "label": "Anniversary Date",
          "value": "2021-01-01",
          "universal_id": null,
          "type": "date"
        }
      }
    }
  ]
}
```

<h3 id="list-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmployeesResponse](#schemaemployeesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create an Employee

> Code samples

```bash
curl https://api.personio.de/v1/company/employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "employee": {
      "email": "john.dou@demo.com",
      "first_name": "John",
      "last_name": "Dou",
      "preferred_name": "John Dou",
      "gender": "male",
      "position": "developer",
      "subcompany": "ACME",
      "department": "IT",
      "office": "Madrid",
      "hire_date": "2020-01-31",
      "weekly_working_hours": 40,
      "status": "active",
      "supervisor_id": 5,
      "custom_attributes": {
        "dynamic_{{ field uid }}": "German"
      }
    }
  }'
```

`POST /company/employees`

Creates a new employee. If the employee's status is not provided, it will be set based on the `hire_date` value - if it is in the past, status will be `active`, otherwise `onboarding`. This endpoint responds with the `id` of the created employee in case of success.


> Body parameter

```json
{
  "employee": {
    "email": "john.dou@demo.com",
    "first_name": "John",
    "last_name": "Dou",
    "preferred_name": "John Dou",
    "gender": "male",
    "position": "developer",
    "subcompany": "ACME",
    "department": "IT",
    "office": "Madrid",
    "hire_date": "2020-01-31",
    "weekly_working_hours": 40,
    "status": "active",
    "supervisor_id": 5,
    "custom_attributes": {
      "dynamic_{{ field uid }}": "German"
    }
  }
}
```

<h3 id="create-an-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|object|false|none|
|» employee|body|object|false|none|
|» » email|body|string|true|The e-mail field is required for the employee creation. Updating of this field is not currently supported.|
|» » first_name|body|string|true|none|
|» » last_name|body|string|true|none|
|» » preferred_name|body|string|false|none|
|» » gender|body|string|false|none|
|» » position|body|string|false|none|
|» » subcompany|body|string|false|The subcompany employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » department|body|string|false|The department employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » office|body|string|false|The workplace employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » hire_date|body|string(date)|false|Employee hire date. Format: "yyyy-mm-dd". If `status` is not provided, it will be set to `active` if the hire date is in the past, or to `onboarding` if it's in the future.|
|» » weekly_working_hours|body|number|false|none|
|» » status|body|string|false|Status of the employee. Overrides the status determined based on the value of `hire_date`.|
|» » supervisor_id|body|number|false|Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee, otherwise an error will be returned. If not present, no supervisor will be assigned.|
|» » custom_attributes|body|object|false|none|
|» » » dynamic_{{ field uid }}|body|string|false|Dynamic field, represented by unique id.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": 81723,
    "message": "success"
  }
}
```

> 422 Response

```json
{
  "success": false,
  "error": {
    "code": 422,
    "message": "Supervisor with ID 1 not found"
  }
}
```

<h3 id="create-an-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful creation of a employee|Inline|
|422|Unprocessable Entity|Employee creation failed due to invalid payload|Inline|

<h3 id="create-an-employee-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» id|number|false|none|none|
|» message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» code|number|false|none|none|
|» message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get Employee by ID

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees/{employee_id}`

Get Employee by ID

<h3 id="get-employee-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": "ID",
        "value": 1,
        "type": "integer",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First name",
        "value": "Alexander",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last name",
        "value": "Bergmann",
        "type": "standard",
        "universal_id": "last_name"
      },
      "preferred_name": {
        "label": "Name (preferred)",
        "value": "Alexander Bergmann",
        "type": "standard",
        "universal_id": "preferred_name"
      },
      "email": {
        "label": "Email",
        "value": "alexander.bergmann@demo.email",
        "type": "standard",
        "universal_id": "email"
      },
      "gender": {
        "label": "Gender",
        "value": "male",
        "type": "standard",
        "universal_id": "gender"
      },
      "status": {
        "label": "Status",
        "value": "active",
        "type": "standard",
        "universal_id": "status"
      },
      "position": {
        "label": "Position",
        "value": "CTO",
        "type": "standard",
        "universal_id": "position"
      },
      "supervisor": {
        "label": "Supervisor",
        "value": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": "ID",
              "value": 2,
              "type": "integer",
              "universal_id": "id"
            }
          }
        },
        "type": "standard",
        "universal_id": "supervisor"
      },
      "employment_type": {
        "label": "Employment type",
        "value": "external",
        "type": "standard",
        "universal_id": "employment_type"
      },
      "weekly_working_hours": {
        "label": "Weekly hours",
        "value": "40",
        "type": "standard",
        "universal_id": "weekly_working_hours"
      },
      "hire_date": {
        "label": "Hire date",
        "value": "2014-11-09T00:00:00+01:00",
        "type": "date",
        "universal_id": "hire_date"
      },
      "contract_end_date": {
        "label": "Contract ends",
        "value": null,
        "type": "date",
        "universal_id": "contract_end_date"
      },
      "termination_date": {
        "label": "Termination date",
        "value": null,
        "type": "date",
        "universal_id": "termination_date"
      },
      "termination_type": {
        "label": "Termination type",
        "value": null,
        "type": "standard",
        "universal_id": "termination_type"
      },
      "termination_reason": {
        "label": "Termination reason",
        "value": null,
        "type": "standard",
        "universal_id": "termination_reason"
      },
      "probation_period_end": {
        "label": "Probation period end",
        "value": null,
        "type": "date",
        "universal_id": "probation_period_end"
      },
      "created_at": {
        "label": "created_at",
        "value": "2017-05-23T09:49:03+02:00",
        "type": "date",
        "universal_id": "created_at"
      },
      "last_modified_at": {
        "label": "Last modified",
        "value": "2020-11-18T17:33:55+01:00",
        "type": "date",
        "universal_id": "last_modified_at"
      },
      "subcompany": {
        "label": "Subcompany",
        "value": {
          "type": "Subcompany",
          "attributes": {
            "id": 7033,
            "name": "CS Demo GmbH"
          }
        },
        "type": "standard",
        "universal_id": "subcompany"
      },
      "office": {
        "label": "Workplace",
        "value": {
          "type": "Office",
          "attributes": {
            "id": 131014,
            "name": "Munich"
          }
        },
        "type": "standard",
        "universal_id": "office"
      },
      "department": {
        "label": "Department",
        "value": {
          "type": "Department",
          "attributes": {
            "id": 281521,
            "name": "Customer Support"
          }
        },
        "type": "standard",
        "universal_id": "department"
      },
      "cost_centers": {
        "label": "Cost center",
        "value": [
          {
            "type": "CostCenter",
            "attributes": {
              "id": 82957,
              "name": "Cost center 1",
              "percentage": 100
            }
          }
        ],
        "type": "standard",
        "universal_id": "cost_centers"
      },
      "holiday_calendar": {
        "label": "Public holidays",
        "value": {
          "type": "HolidayCalendar",
          "attributes": {
            "id": 2,
            "name": "Deutschland (Bayern) Feiertage",
            "country": "DE",
            "state": "Bayern"
          }
        },
        "type": "standard",
        "universal_id": "holiday_calendar"
      },
      "absence_entitlement": {
        "label": "Absence entitlement",
        "value": [
          {
            "type": "TimeOffType",
            "attributes": {
              "id": 113437,
              "name": "Paid vacation",
              "category": "paid_vacation",
              "entitlement": 24
            }
          }
        ],
        "type": "standard",
        "universal_id": "absence_entitlement"
      },
      "work_schedule": {
        "label": "Work schedule",
        "value": {
          "type": "WorkSchedule",
          "attributes": {
            "id": 97188,
            "id_str": "97188",
            "name": "Full-time, 40 hours without time tracking, (mon,tue,wed,thu,fri)",
            "valid_from": null,
            "monday": "08:00",
            "tuesday": "08:00",
            "wednesday": "08:00",
            "thursday": "08:00",
            "friday": "08:00",
            "saturday": "00:00",
            "sunday": "00:00"
          }
        },
        "type": "standard",
        "universal_id": "work_schedule"
      },
      "fix_salary": {
        "label": "Fix salary",
        "value": 3000,
        "type": "decimal",
        "universal_id": "fix_salary",
        "currency": "EUR"
      },
      "fix_salary_interval": {
        "label": "Salary interval",
        "value": "monthly",
        "type": "standard",
        "universal_id": "fix_salary_interval"
      },
      "hourly_salary": {
        "label": "Hourly salary",
        "value": 0,
        "type": "decimal",
        "universal_id": "hourly_salary",
        "currency": "EUR"
      },
      "last_working_day": {
        "label": "Last day of work",
        "value": null,
        "type": "date",
        "universal_id": "last_working_day"
      },
      "profile_picture": {
        "label": "Profile Picture",
        "value": "https://api.personio.de/v1/company/employees/1132888/profile-picture",
        "type": "standard",
        "universal_id": "profile_picture"
      },
      "team": {
        "label": "Team",
        "value": {
          "type": "Team",
          "attributes": {
            "id": 59026,
            "name": "T_X"
          }
        },
        "type": "standard",
        "universal_id": "team"
      },
      "dynamic_24407": {
        "label": "Titel",
        "value": "Dr",
        "universal_id": null,
        "type": "standard"
      },
      "dynamic_21827": {
        "label": "IBAN",
        "value": "DE98 8989 9898 0000 8989 00",
        "universal_id": "iban",
        "type": "standard"
      },
      "dynamic_33400": {
        "label": "Anniversary Date",
        "value": "2021-01-01",
        "universal_id": null,
        "type": "date"
      },
      "dynamic_180883": {
        "label": "Birthday",
        "value": "1983-08-18",
        "universal_id": "date_of_birth",
        "type": "date"
      }
    }
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "Es ist ein Problem aufgetreten "
  }
}
```

<h3 id="get-employee-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmployeeResponse](#schemaemployeeresponse)|
|404|Not Found||[Employee404ErrorResponse](#schemaemployee404errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update Employee by ID

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "employee": {
      "first_name": "John",
      "last_name": "Dou",
      "preferred_name": "John Dou",
      "gender": "male",
      "position": "developer",
      "subcompany": "ACME",
      "department": "IT",
      "office": "Madrid",
      "hire_date": "2020-01-31",
      "weekly_working_hours": 40,
      "status": "active",
      "supervisor_id": 5,
      "custom_attributes": {
        "dynamic_{{ field uid }}": "German"
      }
    }
  }'
```

`PATCH /company/employees/{employee_id}`

Updates an existing employee. Note: Only the fields that are listed in the body example are updatable. Attributes that are not part of the sample request body but are present inside the request are ignored. It's not possible to update the Email field.


> Body parameter

```json
{
  "employee": {
    "first_name": "John",
    "last_name": "Dou",
    "preferred_name": "John Dou",
    "gender": "male",
    "position": "developer",
    "subcompany": "ACME",
    "department": "IT",
    "office": "Madrid",
    "hire_date": "2020-01-31",
    "weekly_working_hours": 40,
    "status": "active",
    "supervisor_id": 5,
    "custom_attributes": {
      "dynamic_{{ field uid }}": "German"
    }
  }
}
```

<h3 id="update-employee-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|object|false|none|
|» employee|body|object|false|none|
|» » first_name|body|string|false|none|
|» » last_name|body|string|false|none|
|» » preferred_name|body|string|false|none|
|» » gender|body|string|false|none|
|» » position|body|string|false|none|
|» » subcompany|body|string|false|The subcompany employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » department|body|string|false|The department employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » office|body|string|false|The workplace employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.|
|» » hire_date|body|string(date)|false|Employee hire date. Format: "yyyy-mm-dd". Update of the `hire_date` will not update employee status on its own (for that you'll need to update the `status` field)|
|» » weekly_working_hours|body|number|false|none|
|» » status|body|string|false|Status of the employee.|
|» » supervisor_id|body|number|false|Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee and not the same as the one of the employee being updated, otherwise an error will be returned. If sent as null, will unset the employee's supervisor.|
|» » custom_attributes|body|object|false|none|
|» » » dynamic_{{ field uid }}|body|string|false|Dynamic field, represented by unique id.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": 12345
  },
  "meta": []
}
```

> 422 Response

```json
{
  "success": true,
  "error": {
    "code": 422,
    "message": "Supervisor with ID 1 not found"
  }
}
```

<h3 id="update-employee-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Employee is updated|[EmployeeUpdatedResponse](#schemaemployeeupdatedresponse)|
|422|Unprocessable Entity|Employee update failed due to invalid payload|[EmployeeUpdateErrorResponse](#schemaemployeeupdateerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get Absence Balance for Employee

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/0/absences/balance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees/{employee_id}/absences/balance`

Retrieve the absence balance for a specific employee

<h3 id="get-absence-balance-for-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1234,
      "name": "Paid Vacation",
      "category": "custom_absence",
      "balance": 10.5,
      "available_balance": 8.5
    }
  ]
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "Es ist ein Problem aufgetreten "
  }
}
```

<h3 id="get-absence-balance-for-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmployeeAbsenceBalance](#schemaemployeeabsencebalance)|
|404|Not Found||[Employee404ErrorResponse](#schemaemployee404errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List Allowed Custom Attributes

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/custom-attributes \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees/custom-attributes`

This endpoint is an alias for `/company/employees/attributes`.

<h3 id="list-allowed-custom-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

<h3 id="list-allowed-custom-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Please refer to `/company/employees/attributes`|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List Allowed Attributes

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees/attributes`

Lists all the allowed atrributes per API credentials including custom (dynamic) attributes.

<h3 id="list-allowed-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "key": "first_name",
      "label": "First Name",
      "type": "standard",
      "universal_id": "first_name",
      "options": []
    },
    {
      "key": "last_name",
      "label": "Last Name",
      "type": "standard",
      "universal_id": "last_name",
      "options": []
    },
    {
      "key": "dynamic_1",
      "label": "IBAN",
      "type": "standard",
      "universal_id": "iban",
      "options": []
    },
    {
      "key": "dynamic_2",
      "label": "Marital status",
      "type": "list",
      "universal_id": null,
      "options": [
        "married",
        "single"
      ]
    },
    {
      "key": "dynamic_3",
      "label": "Language Skills",
      "type": "tags",
      "universal_id": null,
      "options": [
        "English",
        "French",
        "Spanish",
        "German"
      ]
    }
  ]
}
```

<h3 id="list-allowed-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get Employee Profile Picture

> Code samples

```bash
curl https://api.personio.de/v1/company/employees/0/profile-picture/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/employees/{employee_id}/profile-picture/{width}`

Show employee's profile picture. If profile picture is missing, the 404 error will be thrown. The `Profile Picture` attribute has to be whitelisted.

<h3 id="get-employee-profile-picture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer(int32)|true|Numeric `id` of the employee|
|width|path|integer(int32)|true|Width of the image. Default is original size|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "Etwas ist schiefgelaufen ..."
  }
}
```

<h3 id="get-employee-profile-picture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|When the employee doesn't exist or employee doesn't have profile picture set or Profile Picture attribute is not whitelisted, this error occurs.|[Employee404ErrorResponse](#schemaemployee404errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="personnel-data-attendances">Attendances</h1>

## List Attendances (deprecated)

> Code samples

```bash
curl 'https://api.personio.de/v1/company/attendances?start_date=1970-01-01&end_date=1970-01-01' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/attendances`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. Fetch attendance data for the company employees. The result can be `paginated` and `filtered` by period, the date and/or time they were updated, and/or specific employee/employees. The result contains a list of attendances.

<h3 id="list-attendances-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|true|First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results|
|end_date|query|string(date)|true|Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.|
|updated_from|query|string(datetime)|false|Datetime from when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_from will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.|
|updated_to|query|string(datetime)|false|Datetime until when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_to will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.|
|includePending|query|boolean|false|Returns AttendancePeriods with a status of pending, rejected and confirmed. For pending periods, the end_date attribute is nullable. The status of each period is included in the response.|
|employees[]|query|[integer]|false|A list of Personio employee ID's to filter the results. The result filters including only attendances of provided employees.|
|limit|query|integer|false|Pagination attribute to limit how many attendances are per page|
|offset|query|integer|false|The offset from the first record that would be returned. With 3 results [A, B, C] and an offset of 1, the following two results will be returned [B, C].|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 2,
    "current_page": 0,
    "total_pages": 3
  },
  "offset": 0,
  "limit": 200,
  "data": [
    {
      "id": 1234,
      "type": "AttendancePeriod",
      "attributes": {
        "employee": 325659,
        "date": "2017-01-17",
        "start_time": "09:00",
        "end_time": "18:00",
        "updated_at": "2017-01-17T16:41:08+00:00",
        "status": "confirmed",
        "break": 50,
        "comment": "I was super productive",
        "is_holiday": false,
        "is_on_time_off": "false,",
        "project": {
          "id": 567,
          "type": "Project",
          "attributes": {
            "name": "A project name",
            "active": true
          }
        }
      }
    },
    {
      "id": 1235,
      "type": "AttendancePeriod",
      "attributes": {
        "employee": 325660,
        "date": "2017-01-18",
        "start_time": "09:30",
        "end_time": "18:30",
        "updated_at": "2017-01-18T16:41:08+01:00",
        "status": "pending",
        "break": 60,
        "comment": "I wasn't productive",
        "is_holiday": false,
        "is_on_time_off": true,
        "project": null
      }
    }
  ]
}
```

> 401 Response

```json
{
  "success": false,
  "error": {
    "message": "Authorization is not provided",
    "code": 401
  }
}
```

> 403 Response

```json
{
  "success": false,
  "error": {
    "message": "Provided authorization is not valid",
    "code": 403
  }
}
```

<h3 id="list-attendances-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Attendance periods matching the provided filters|[AttendancePeriodsResponse](#schemaattendanceperiodsresponse)|
|401|Unauthorized|Unauthorized Access|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden Access|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create an Attendance (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attendances": [
      {
        "employee": 1,
        "date": "1970-01-01",
        "start_time": "08:00",
        "end_time": "17:00",
        "break": 60,
        "comment": "I was productive as hell",
        "project_id": 5
      }
    ],
    "skip_approval": true
  }'
```

`POST /company/attendances`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. The endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.

> Body parameter

```json
{
  "attendances": [
    {
      "employee": 1,
      "date": "1970-01-01",
      "start_time": "08:00",
      "end_time": "17:00",
      "break": 60,
      "comment": "I was productive as hell",
      "project_id": 5
    }
  ],
  "skip_approval": true
}
```

<h3 id="create-an-attendance-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|object|true|List of attendance periods to create|
|» attendances|body|[object]|false|none|
|» » employee|body|integer|true|none|
|» » date|body|string(date)|true|none|
|» » start_time|body|string|true|Format: hh:mm|
|» » end_time|body|string \| null|false|Format: hh:mm|
|» » break|body|integer|true|none|
|» » comment|body|string \| null|false|none|
|» » project_id|body|integer \| null|false|none|
|» skip_approval|body|boolean|false|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": [
      1,
      2
    ],
    "message": "success"
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert Attendances periods rows",
    "detailed_message": [
      {
        "success": true,
        "error_msg": null,
        "id": 1,
        "employee": 1234,
        "date": "2017-01-01",
        "start_time": "09:00",
        "end_time": "18:00",
        "break": 60,
        "comment": "",
        "project_id": 5
      },
      {
        "success": false,
        "error_msg": "Existing overlapping attendances periods",
        "id": null,
        "employee": 1234,
        "date": "2017-01-01",
        "start_time": "09:00",
        "end_time": "18:00",
        "break": 60,
        "comment": "",
        "project_id": null
      }
    ]
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": {
    "message": "Authorization is not provided",
    "code": 401
  }
}
```

> 403 Response

```json
{
  "success": false,
  "error": {
    "message": "Provided authorization is not valid",
    "code": 403
  }
}
```

<h3 id="create-an-attendance-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The attendance periods are successfully created|[NewAttendancePeriodResponse](#schemanewattendanceperiodresponse)|
|400|Bad Request|Invalid request|[AttendanceCreateUpdate400ErrorResponse](#schemaattendancecreateupdate400errorresponse)|
|401|Unauthorized|Unauthorized Access|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden Access|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete Attendance by ID (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /company/attendances/{id}`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. It deletes attendance data for the company employees.

<h3 id="delete-attendance-by-id-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the attendance period to delete|
|skip_approval|query|boolean|false|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "message": "The attendance period was deleted."
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Bad Request"
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": {
    "message": "Authorization is not provided",
    "code": 401
  }
}
```

> 403 Response

```json
{
  "success": false,
  "error": {
    "message": "Provided authorization is not valid",
    "code": 403
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The attendance period was not found."
  }
}
```

<h3 id="delete-attendance-by-id-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DeletedAttendanceResponse](#schemadeletedattendanceresponse)|
|400|Bad Request|Bad Request|[AttendanceDelete400ErrorResponse](#schemaattendancedelete400errorresponse)|
|401|Unauthorized|Unauthorized Access|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden Access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[Attendance404ErrorResponse](#schemaattendance404errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update Attendance by ID (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date": "1970-01-01",
    "start_time": "08:00",
    "end_time": "17:00",
    "break": 60,
    "comment": "I was productive as hell",
    "project_id": 5,
    "skip_approval": true
  }'
```

`PATCH /company/attendances/{id}`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. It is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.

> Body parameter

```json
{
  "date": "1970-01-01",
  "start_time": "08:00",
  "end_time": "17:00",
  "break": 60,
  "comment": "I was productive as hell",
  "project_id": 5,
  "skip_approval": true
}
```

<h3 id="update-attendance-by-id-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the attendance period to update|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|[AttendanceUpdateRequest](#schemaattendanceupdaterequest)|true|Attendance period data to update. At least one of the properties (`date`, `start_time`, `end_time`, `break`, `comment`, `project_id`, `skip_approval`) is required.|
|» date|body|string(date)|false|none|
|» start_time|body|string|false|Format: hh:mm|
|» end_time|body|string \| null|false|Format: hh:mm|
|» break|body|integer|false|none|
|» comment|body|string \| null|false|none|
|» project_id|body|integer \| null|false|none|
|» skip_approval|body|boolean|false|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "message": "The attendance period was updated."
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert Attendances periods rows."
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": {
    "message": "Authorization is not provided",
    "code": 401
  }
}
```

> 403 Response

```json
{
  "success": false,
  "error": {
    "message": "Provided authorization is not valid",
    "code": 403
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The attendance period was not found."
  }
}
```

<h3 id="update-attendance-by-id-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[UpdatedAttendanceResponse](#schemaupdatedattendanceresponse)|
|400|Bad Request|Bad Request|[AttendanceCreateUpdate400ErrorResponse](#schemaattendancecreateupdate400errorresponse)|
|401|Unauthorized|Unauthorized Access|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden Access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found response|[Attendance404ErrorResponse](#schemaattendance404errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="personnel-data-projects">Projects</h1>

## List Projects (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/attendances/projects`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. Provides a list of all company projects.

<h3 id="list-projects-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "Project",
      "attributes": {
        "name": "Project name",
        "active": true,
        "created_at": "2022-02-01T12:00:00+0100",
        "updated_at": "2022-02-01T12:00:00+0100"
      }
    }
  ]
}
```

<h3 id="list-projects-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of projects returned|Inline|

<h3 id="list-projects-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[[Project](#schemaproject)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a Project (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "A project name",
    "active": true
  }'
```

`POST /company/attendances/projects`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. Creates a project into the company account

> Body parameter

```json
{
  "name": "A project name",
  "active": true
}
```

<h3 id="create-a-project-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|object|false|none|
|» name|body|string|true|none|
|» active|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "Project",
    "attributes": {
      "name": "Project name",
      "active": true,
      "created_at": "2022-02-01T12:00:00+0100",
      "updated_at": "2022-02-01T12:00:00+0100"
    }
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "name": [
      "Project name cannot be empty"
    ]
  }
}
```

<h3 id="create-a-project-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project created successfully|Inline|
|400|Bad Request|Invalid data was sent|Inline|

<h3 id="create-a-project-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[Project](#schemaproject)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» name|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete Project by ID (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/projects/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /company/attendances/projects/{id}`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. Deletes a project from the company account

<h3 id="delete-project-by-id-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Numeric `id` of the project|

> Example responses

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Project 5 not found"
  }
}
```

> 409 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "There are existing attendances for this project."
  }
}
```

<h3 id="delete-project-by-id-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Project was successfully deleted|None|
|404|Not Found|Project does not exist|Inline|
|409|Conflict|There are existing attendances for this project|Inline|

<h3 id="delete-project-by-id-deprecated-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» code|integer|false|none|none|
|» message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» code|integer|false|none|none|
|» message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update Project by ID (deprecated)

> Code samples

```bash
curl https://api.personio.de/v1/company/attendances/projects/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "A project name",
    "active": true
  }'
```

`PATCH /company/attendances/projects/{id}`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use v2. Updates a project with the given data.

> Body parameter

```json
{
  "name": "A project name",
  "active": true
}
```

<h3 id="update-project-by-id-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Numeric `id` of the project|
|body|body|object|false|none|
|» name|body|string|false|none|
|» active|body|boolean|false|Marks the availability of the project|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "Project",
    "attributes": {
      "name": "Project name",
      "active": true,
      "created_at": "2022-02-01T12:00:00+0100",
      "updated_at": "2022-02-01T12:00:00+0100"
    }
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "active": [
      "Active field needs to be of type boolean"
    ],
    "name": "Project name already exists"
  }
}
```

> 404 Response

```json
{
  "success": false,
  "message": "Project 5 not found"
}
```

<h3 id="update-project-by-id-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project updated successfully|Inline|
|400|Bad Request|Invalid data was sent|Inline|
|404|Not Found|Project not found|Inline|

<h3 id="update-project-by-id-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[Project](#schemaproject)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» active|[string]|false|none|none|
|» name|string|false|none|This field would be included only if the new name is already used by another project|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="personnel-data-absences">Absences</h1>

## List Time-Off Types

> Code samples

```bash
curl https://api.personio.de/v1/company/time-off-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/time-off-types`

Provides a list of absence types for absences **time unit** set to either **days** or **hours**. For example 'Paid vacation', 'Parental leave' or 'Home office'.

<h3 id="list-time-off-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Pagination attribute to limit how many records will be returned per page|
|offset|query|integer|false|Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "type": "TimeOffType",
      "attributes": {
        "id": 1234,
        "name": "Paid vacation",
        "category": "paid_vacation",
        "unit": "day",
        "approval_required": true
      }
    },
    {
      "type": "TimeOffType",
      "attributes": {
        "id": 1235,
        "name": "Home office",
        "category": "offsite_work",
        "unit": "hour",
        "approval_required": true
      }
    }
  ]
}
```

<h3 id="list-time-off-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-time-off-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[[TimeOffTypeResource](#schematimeofftyperesource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List Time-Offs

> Code samples

```bash
curl https://api.personio.de/v1/company/time-offs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/time-offs`

Fetches absence periods for absences with **time unit** set to **days**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of absence periods.

<h3 id="list-time-offs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|false|First day of the period to be queried. It is inclusive, so the result starts from and including the provided `start_date`|
|end_date|query|string(date)|false|Last day of the period to be queried. It is inclusive, so the result ends on `end_date` including absences from the `end_date`|
|updated_from|query|string(date)|false|Query the periods that created or modified from the date `updated_from`. It is inclusive, so all the periods created or modified from the beginning of the `updated_from` will be included in the results|
|updated_to|query|string(date)|false|Query the periods that created or modified until the date `updated_to`. It is inclusive, so all the periods created or modified until the end of the `updated_to` will be included in the results|
|employees[]|query|[integer]|false|A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees|
|limit|query|integer|false|Pagination attribute to limit the number of absence periods per page|
|offset|query|integer|false|Pagination attribute to identify which page number you are requesting|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 1,
    "current_page": 1,
    "total_pages": 1
  },
  "data": [
    {
      "type": "TimeOffPeriod",
      "attributes": {
        "id": 12345,
        "status": "approved",
        "start_date": "2017-12-27T00:00:00+0100",
        "end_date": "2017-12-29T00:00:00+0100",
        "days_count": 3,
        "half_day_start": false,
        "half_day_end": false,
        "time_off_type": {
          "type": "TimeOffType",
          "attributes": {
            "id": 54321,
            "name": "Vacation",
            "category": "offsite_work"
          }
        },
        "employee": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": "id",
              "value": 4567,
              "type": "integer",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last name",
              "value": "Miller",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.miller@demo.com",
              "type": "standard",
              "universal_id": "email"
            }
          }
        },
        "certificate": {
          "status": "not-required"
        },
        "created_at": "2017-01-17T10:32:18+0100",
        "updated_at": "2017-01-17T10:32:18+0100"
      }
    }
  ],
  "offset": "0,",
  "limit": "200,"
}
```

<h3 id="list-time-offs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AbsencePeriodsResponse](#schemaabsenceperiodsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a Time-Off

> Code samples

```bash
curl https://api.personio.de/v1/company/time-offs \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'employee_id=0&time_off_type_id=0&start_date=2020-01-31&end_date=2020-01-31&half_day_start=false&half_day_end=false&comment=Some%20Comment&skip_approval=false'
```

`POST /company/time-offs`

Adds absence data for absence types with **time unit** set to **days**.

> Body parameter

```yaml
employee_id: 0
time_off_type_id: 0
start_date: "2020-01-31"
end_date: "2020-01-31"
half_day_start: false
half_day_end: false
comment: Some Comment
skip_approval: false
```

<h3 id="create-a-time-off-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|[CreateTimeOffPeriodRequest](#schemacreatetimeoffperiodrequest)|true|Absence data|
|» employee_id|body|integer|true|Employee identifier|
|» time_off_type_id|body|integer|true|Time-off type identifier|
|» start_date|body|string(date)|true|Absence start date. Format: yyyy-mm-dd|
|» end_date|body|string(date)|true|Absence end date. Format: yyyy-mm-dd|
|» half_day_start|body|boolean|true|Whether the start date is a half-day off.|
|» half_day_end|body|boolean|true|Whether the end date is a half-day off.|
|» comment|body|string|false|Optional comment|
|» skip_approval|body|boolean|false|Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "type": "TimeOffPeriod",
    "attributes": {
      "id": 12345,
      "status": "approved",
      "start_date": "2017-12-27T00:00:00+0100",
      "end_date": "2017-12-29T00:00:00+0100",
      "days_count": 3,
      "half_day_start": false,
      "half_day_end": false,
      "time_off_type": {
        "type": "TimeOffType",
        "attributes": {
          "id": 54321,
          "name": "Vacation",
          "category": "offsite_work"
        }
      },
      "employee": {
        "type": "Employee",
        "attributes": {
          "id": {
            "label": "id",
            "value": 4567,
            "type": "integer",
            "universal_id": "id"
          },
          "first_name": {
            "label": "First name",
            "value": "Michael",
            "type": "standard",
            "universal_id": "first_name"
          },
          "last_name": {
            "label": "Last name",
            "value": "Miller",
            "type": "standard",
            "universal_id": "last_name"
          },
          "email": {
            "label": "Email",
            "value": "michael.miller@demo.com",
            "type": "standard",
            "universal_id": "email"
          }
        }
      },
      "certificate": {
        "status": "not-required"
      },
      "created_at": "2017-01-17T10:32:18+0100",
      "created_by": "API",
      "updated_at": "2017-01-17T10:32:18+0100"
    }
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert absence period"
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Time-off type not found."
  }
}
```

> 422 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "The given data failed to pass validation.",
    "error_data": "{...}"
  }
}
```

<h3 id="create-a-time-off-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The absence period is successfully created|Inline|
|400|Bad Request|Invalid request|[ErrorInsertingAbsenceResponse](#schemaerrorinsertingabsenceresponse)|
|404|Not Found|Employee or Absence type not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorCreateAbsenceResponse](#schemaerrorcreateabsenceresponse)|

<h3 id="create-a-time-off-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AbsencePeriodResponse](#schemaabsenceperiodresponse)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get Time-Off by ID

> Code samples

```bash
curl https://api.personio.de/v1/company/time-offs/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/time-offs/{id}`

Gets an absence period for absences with **time unit** set to **days**.

<h3 id="get-time-off-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Numeric `id` of the absence period|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "type": "TimeOffPeriod",
    "attributes": {
      "id": 12345,
      "status": "approved",
      "start_date": "2017-12-27T00:00:00+0100",
      "end_date": "2017-12-29T00:00:00+0100",
      "days_count": 3,
      "half_day_start": false,
      "half_day_end": false,
      "time_off_type": {
        "type": "TimeOffType",
        "attributes": {
          "id": 45678,
          "name": "Vacation",
          "category": "offsite_work"
        }
      },
      "employee": {
        "type": "Employee",
        "attributes": {
          "id": {
            "label": "id",
            "value": 2367,
            "type": "integer",
            "universal_id": "id"
          },
          "first_name": {
            "label": "First name",
            "value": "Michael",
            "type": "standard",
            "universal_id": "first_name"
          },
          "last_name": {
            "label": "Last name",
            "value": "Miller",
            "type": "standard",
            "universal_id": "last_name"
          },
          "email": {
            "label": "Email",
            "value": "michael.miller@demo.com",
            "type": "standard",
            "universal_id": "email"
          }
        }
      },
      "certificate": {
        "status": "not-required"
      },
      "created_at": "2017-01-17T10:32:18+0100",
      "updated_at": "2017-01-17T10:32:18+0100"
    }
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The absence period was not found."
  }
}
```

<h3 id="get-time-off-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AbsencePeriodResponse](#schemaabsenceperiodresponse)|
|404|Not Found|Not found response|[ErrorAbsenceResponse](#schemaerrorabsenceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete Time-Off by ID

> Code samples

```bash
curl https://api.personio.de/v1/company/time-offs/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /company/time-offs/{id}`

Deletes absence period data for absence types with **time unit** set to **days**.

<h3 id="delete-time-off-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of the absence period to delete|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "message": "The absence period was deleted."
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "The absence period id is invalid."
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The absence period was not found."
  }
}
```

<h3 id="delete-time-off-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DeletedAbsenceResponse](#schemadeletedabsenceresponse)|
|400|Bad Request|Bad request response|[ErrorAbsenceResponse](#schemaerrorabsenceresponse)|
|404|Not Found|Not found response|[ErrorAbsenceResponse](#schemaerrorabsenceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List Absence Periods

> Code samples

```bash
curl https://api.personio.de/v1/company/absence-periods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/absence-periods`

Fetches absence periods for absences with **time unit** set to **hours**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of hourly absence periods.

<h3 id="list-absence-periods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|false|When both start_date and end_date values are provided, the list of absences returned is a set that has all absences that intersects the window expressed as [start_date, end_date]. When either value is unspecified, the list of absences returned are unbounded in the direction of the unspecified value.|
|end_date|query|string(date)|false|When both start_date and end_date values are provided, the list of absences returned is a set that has all absences that intersects the window expressed as [start_date, end_date]. When either value is unspecified, the list of absences returned are unbounded in the direction of the unspecified value.|
|updated_from|query|string(date-time)|false|Filter by periods that were created or modified from the date updated_from. It is inclusive, so all the periods created or modified from the beginning of the updated_from will be included in the results.|
|updated_to|query|string(date-time)|false|Filter by periods that were created or modified until the date updated_to. It is inclusive, so all the periods created or modified until the end of the updated_to will be included in the results.|
|employees[]|query|[integer]|false|A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees|
|absence_types[]|query|[string]|false|A list of Personio absence type IDs to filter the results. The result filters including only absences of provided absence types.|
|absence_periods[]|query|[string]|false|A list of Personio absence period IDs to filter the results. The result filters including only absences containing the provided ids.|
|limit|query|integer|false|Pagination attribute to limit how many absence periods are returned per page.|
|offset|query|integer|false|Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 1,
    "current_page": 1,
    "total_pages": 1
  },
  "data": [
    {
      "type": "AbsencePeriod",
      "attributes": {
        "id": "9bba303f-0fbc-4514-9958-0befa21923fb",
        "measurement_unit": "hour",
        "effective_duration": 960,
        "employee": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": "id",
              "value": 2367,
              "type": "integer",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last name",
              "value": "Miller",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.miller@demo.com",
              "type": "standard",
              "universal_id": "email"
            }
          }
        },
        "absence_type": {
          "type": "AbsenceType",
          "attributes": {
            "id": "9bba303f-0fbc-4514-9958-0befa21923fb",
            "name": "Absence Type Name",
            "time_off_type_id": 45678
          }
        },
        "certificate": {
          "status": "not-required"
        },
        "start": "2022-05-31T22:00:00.0Z",
        "end": "2022-06-02T22:00:00.0Z",
        "half_day_start": true,
        "half_day_end": false,
        "comment": "this is a comment",
        "origin": "web",
        "status": "approved",
        "created_by": 1,
        "created_at": "2022-06-20T14:29:56.510Z",
        "updated_at": "2022-06-20T14:29:56.510Z",
        "approved_at": "2022-06-20T14:29:56.510Z",
        "breakdowns": [
          {
            "date": "2022-06-01",
            "effective_duration": 480
          },
          {
            "date": "2022-06-02",
            "effective_duration": 480
          }
        ]
      }
    }
  ],
  "offset": "0,",
  "limit": "200,"
}
```

<h3 id="list-absence-periods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[HourlyAbsencePeriodsResponse](#schemahourlyabsenceperiodsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|AbsenceType Not Found|Inline|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-absence-periods-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|
|» code|integer|false|none|none|
|» message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create an Absence Period

> Code samples

```bash
curl https://api.personio.de/v1/company/absence-periods \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'employee_id=10735&time_off_type_id=10735&start_date=2020-01-31&end_date=2020-01-31&start_time=03%3A00&end_time=15%3A00&half_day_start=false&half_day_end=false&comment=Some%20Comment&skip_approval=false'
```

`POST /company/absence-periods`

Adds absence data for absence types with **time unit** set to **hours**. Note that creating periods for absence types with certificate requirement enabled is not supported!

> Body parameter

```yaml
employee_id: 10735
time_off_type_id: 10735
start_date: "2020-01-31"
end_date: "2020-01-31"
start_time: "03:00"
end_time: "15:00"
half_day_start: false
half_day_end: false
comment: Some Comment
skip_approval: false
```

<h3 id="create-an-absence-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|[CreateAbsencePeriodRequest](#schemacreateabsenceperiodrequest)|true|Absence data|
|» employee_id|body|integer|true|Employee identifier|
|» time_off_type_id|body|integer|true|Time-off type identifier|
|» start_date|body|string(date)|true|Absence start date. Format: yyyy-mm-dd|
|» end_date|body|string(date)|true|Absence end date. Format: yyyy-mm-dd|
|» start_time|body|string(date)|false|Absence start time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)|
|» end_time|body|string(date)|false|Absence end time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)|
|» half_day_start|body|boolean|false|Whether the start date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)|
|» half_day_end|body|boolean|false|Whether the end date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)|
|» comment|body|string|false|Optional comment|
|» skip_approval|body|boolean|false|Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.|

> Example responses

> 201 Response

```json
{
  "success": true,
  "data": [
    {
      "type": "AbsencePeriod",
      "attributes": {
        "id": "9bba303f-0fbc-4514-9958-0befa21923fb",
        "measurement_unit": "hour",
        "effective_duration": 960,
        "employee": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": "id",
              "value": 2367,
              "type": "integer",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last name",
              "value": "Miller",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.miller@demo.com",
              "type": "standard",
              "universal_id": "email"
            }
          }
        },
        "absence_type": {
          "type": "AbsenceType",
          "attributes": {
            "id": "9bba303f-0fbc-4514-9958-0befa21923fb",
            "name": "Absence Type Name",
            "time_off_type_id": 45678
          }
        },
        "certificate": {
          "status": "not-required"
        },
        "start": "2022-05-31T22:00:00.0Z",
        "end": "2022-06-02T22:00:00.0Z",
        "half_day_start": true,
        "half_day_end": false,
        "comment": "this is a comment",
        "origin": "web",
        "status": "approved",
        "timezone": "Europe/Berlin",
        "created_by": 1,
        "created_at": "2022-06-20T14:29:56.510Z",
        "updated_at": "2022-06-20T14:29:56.510Z",
        "approved_at": "2022-06-20T14:29:56.510Z",
        "breakdowns": [
          {
            "date": "2022-06-01",
            "effective_duration": 480
          },
          {
            "date": "2022-06-02",
            "effective_duration": 480
          }
        ]
      }
    }
  ]
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert absence period"
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Absence type not found."
  }
}
```

> 422 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "The given data failed to pass validation.",
    "error_data": "{...}"
  }
}
```

> 500 Response

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Something went wrong"
  }
}
```

<h3 id="create-an-absence-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The absence period was successfully created|Inline|
|400|Bad Request|Invalid request|[ErrorInsertingAbsenceResponse](#schemaerrorinsertingabsenceresponse)|
|404|Not Found|Employee or Absence type not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorCreateAbsenceResponse](#schemaerrorcreateabsenceresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-an-absence-period-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HourlyAbsencePeriodResponse](#schemahourlyabsenceperiodresponse)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete Absence Period by ID

> Code samples

```bash
curl https://api.personio.de/v1/company/absence-periods/61fe126b-a7b3-449a-b5ee-3865a6fcc546 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /company/absence-periods/{id}`

Deletes absence period data for absence types with **time unit** set to **hours**.

<h3 id="delete-absence-period-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|ID of the absence period to delete|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "message": "The absence period was deleted."
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "The absence period id is invalid."
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The absence period was not found."
  }
}
```

<h3 id="delete-absence-period-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DeletedAbsenceResponse](#schemadeletedabsenceresponse)|
|400|Bad Request|Bad request response|[ErrorAbsenceResponse](#schemaerrorabsenceresponse)|
|404|Not Found|Not found response|[ErrorAbsenceResponse](#schemaerrorabsenceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="personnel-data-documents">Documents</h1>

## List Document Categories

> Code samples

```bash
curl https://api.personio.de/v1/company/document-categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /company/document-categories`

This endpoint is responsible for fetching all document categories of the company. The result contains a list of document categories.

<h3 id="list-document-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "DocumentCategory",
      "attributes": {
        "name": "Certificates of employment"
      }
    },
    {
      "id": 2,
      "type": "DocumentCategory",
      "attributes": {
        "name": "Other documents"
      }
    }
  ]
}
```

<h3 id="list-document-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DocumentCategoriesResponse](#schemadocumentcategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upload Document

> Code samples

```bash
curl https://api.personio.de/v1/company/documents \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'title=string' \
  -F 'comment=string' \
  -F 'employee_id=0' \
  -F 'category_id=0' \
  -F 'date=1970-01-01' \
  -F 'file=@/path/to/file'
```

`POST /company/documents`

This endpoint is responsible for uploading documents for the company employees.
The Documents endpoint has a rate limit of 60 requests per minute.


> Body parameter

```yaml
title: string
comment: string
employee_id: 0
category_id: 0
date: "1970-01-01"
file: string
```

<h3 id="upload-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|body|body|[DocumentUploadRequest](#schemadocumentuploadrequest)|false|Data necessary for document upload.|
|» title|body|string|true|Title of the document. Maximum length is 255 characters.|
|» comment|body|string|false|Optional comment that can be added to the uploaded document.|
|» employee_id|body|integer|true|Employee identifier|
|» category_id|body|integer|true|Document Category identifier|
|» date|body|string(date)|false|Optional date can be added to the uploaded document. Must follow the format: Y-m-d|
|» file|body|string(binary)|true|The document that shall be uploaded to an employees profile. Maximum file size is 30MB.|

> Example responses

> 201 Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "Document",
    "attributes": {
      "title": "Personio",
      "date": "2022-02-02",
      "comment": "Enable better organisations",
      "employee": {
        "type": "Employee",
        "attributes": {
          "id": {
            "label": "ID",
            "value": 1,
            "type": "integer",
            "universal_id": "id"
          },
          "first_name": {
            "label": "First name",
            "value": "Demo",
            "type": "standard",
            "universal_id": "first_name"
          },
          "last_name": {
            "label": "Last name",
            "value": "Account",
            "type": "standard",
            "universal_id": "last_name"
          },
          "email": {
            "label": "Email",
            "value": "demo.account@demo.de",
            "type": "standard",
            "universal_id": "email"
          }
        }
      },
      "category": {
        "id": 1,
        "type": "DocumentCategory",
        "attributes": {
          "name": "Other documents"
        }
      }
    }
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": {
    "message": "No query results for model [DocumentCategory] 1",
    "code": 0
  }
}
```

> 422 Response

```json
{
  "success": false,
  "error": {
    "message": "The given data was invalid.",
    "code": 0,
    "error_data": {
      "file": [
        "The file must be a file of type: pdf, docx, doc, jpg, zip, png, txt, jpeg, odt, xlsx, rtf, htm, xls, p7s, pptx, pages, rar, ppt, gif, tif, html, msg, asc, tiff, wps, bmp, 7z, csv, ics, vcf, dotx, numbers, eps, gz, ods, otf, odp, odg, rtfd, txz, webarchive, xml, xps, md, fax."
      ]
    }
  }
}
```

<h3 id="upload-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The document was successfully uploaded to the employees profile|[DocumentUploadSuccessResponse](#schemadocumentuploadsuccessresponse)|
|404|Not Found|This status code is returned if the provided employee_id or category_id are not found within the company.|[DocumentUploadFailedWithBadDocumentCategoryResponse](#schemadocumentuploadfailedwithbaddocumentcategoryresponse)|
|422|Unprocessable Entity|This status code is returned if the provided request parameters cannot be processed or if the parameters are invalid.|[DocumentUploadFailedWithUnsupportedFileTypeResponse](#schemadocumentuploadfailedwithunsupportedfiletyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="personnel-data-custom-reports">Custom Reports</h1>

## List Custom Reports

<a id="opIdlistReports"></a>

> Code samples

```bash
curl https://api.personio.de/v1/company/custom-reports/reports \
  -H 'Accept: application/json'
```

`GET /company/custom-reports/reports`

> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/listcompanyreports). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.

This endpoint provides you with metadata about existing custom reports in your Personio account, such as report name, report type, report date / timeframe.


<h3 id="list-custom-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|report_ids|query|[string]|false|A list of report ID's to filter the results.|
|status|query|string|false|The status of the report to filter the results.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": [
    {
      "type": "Report",
      "attributes": {
        "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
        "name": "Employee vacations past month",
        "description": "Shows vacations of all employees that were taken past month",
        "author_first_name": "Robert",
        "author_last_name": "Sirano",
        "type": "point_in_time",
        "status": "up_to_date",
        "start_date": "2022-09-01",
        "end_date": "2022-09-30",
        "created_at": "2022-04-10T17:32:28Z",
        "updated_at": "2022-04-10T17:32:28Z",
        "data_refreshed_at": "2022-04-10T17:32:28Z",
        "columns": [
          "string"
        ],
        "filters": [
          {
            "column": "office_id",
            "comparison": "eq",
            "value": 1
          }
        ],
        "period_type": "fixed"
      }
    }
  ]
}
```

> 500 Response

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

<h3 id="list-custom-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[PublicListReportsResponse](#schemapubliclistreportsresponse)|
|500|Internal Server Error|Internal Server Error|[PublicAPIException](#schemapublicapiexception)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Custom Report by ID

<a id="opIdlistReportItems"></a>

> Code samples

```bash
curl https://api.personio.de/v1/company/custom-reports/reports/eea50309-d1b1-47d6-bc7e-27de7a3ab491 \
  -H 'Accept: application/json'
```

`GET /company/custom-reports/reports/{report_id}`

> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/getreport). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.

This endpoint provides you with the data of an existing Custom Report.


<h3 id="get-custom-report-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|report_id|path|string|true|The ID of the report to filter the result.|
|locale|query|string|false|locale used to translate localized fields.|
|page|query|integer|false|Pagination parameter to identify the page to return.|
|limit|query|integer|false|Pagination parameter to limit the number of employees returned per page.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": [
    {
      "type": "Report",
      "attributes": {
        "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
        "name": "Employee vacations at a specific point in time",
        "description": "Shows vacations of all employees on a specific date",
        "author_first_name": "Robert",
        "author_last_name": "Sirano",
        "type": "point_in_time",
        "status": "created",
        "start_date": "2022-04-10",
        "end_date": "2022-04-10",
        "created_at": "2022-04-10T17:32:28Z",
        "updated_at": "2022-04-10T17:32:28Z",
        "data_refreshed_at": "2022-04-10T17:32:28Z",
        "columns": [
          "string"
        ],
        "filters": [
          {
            "column": "office_id",
            "comparison": "eq",
            "value": 1
          }
        ],
        "period_type": "fixed",
        "items": [
          {
            "employee_id": 17,
            "attributes": [
              {
                "attribute_id": "first_name",
                "data_type": "TEXT",
                "value": "Robert",
                "employee_id": 17
              }
            ]
          }
        ]
      }
    }
  ]
}
```

> 400 Response

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

> 404 Response

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

> 500 Response

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

<h3 id="get-custom-report-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[PublicReportResponse](#schemapublicreportresponse)|
|400|Bad Request|Bad request|[PublicAPIException](#schemapublicapiexception)|
|404|Not Found|Report not found|[PublicAPIException](#schemapublicapiexception)|
|500|Internal Server Error|Internal Server Error|[PublicAPIException](#schemapublicapiexception)|

<aside class="success">
This operation does not require authentication
</aside>

## List Custom Report Column Labels

<a id="opIdlistColumns"></a>

> Code samples

```bash
curl https://api.personio.de/v1/company/custom-reports/columns \
  -H 'Accept: application/json'
```

`GET /company/custom-reports/columns`

> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/listreportsattributes). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.

This endpoint provides human-readable labels for report table columns. It is particularly important if you get a report with custom attributes or absence data to match the column IDs to the translation.


<h3 id="list-custom-report-column-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Personio-Partner-ID|header|string|false|The partner identifier|
|X-Personio-App-ID|header|string|false|The application identifier|
|columns|query|[string]|false|The columns to filter the results.|
|locale|query|string|false|locale used to translate localized fields.|
|report_id|query|string|false|The ID of the report to filter the result of the columns. If no ID is passed, all columns for the company are returned.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": {
    "type": "Column",
    "attributes": [
      {
        "attribute_id": "first_name",
        "human_readable": "First Name",
        "data_type": "TEXT"
      }
    ]
  }
}
```

> 500 Response

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

<h3 id="list-custom-report-column-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[PublicListColumnsResponse](#schemapubliclistcolumnsresponse)|
|500|Internal Server Error|Internal Server Error|[PublicAPIException](#schemapublicapiexception)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "success": true,
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_DocumentUploadRequest">DocumentUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadrequest"></a>
<a id="schema_DocumentUploadRequest"></a>
<a id="tocSdocumentuploadrequest"></a>
<a id="tocsdocumentuploadrequest"></a>

```json
{
  "title": "string",
  "comment": "string",
  "employee_id": 0,
  "category_id": 0,
  "date": "1970-01-01",
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Title of the document. Maximum length is 255 characters.|
|comment|string|false|none|Optional comment that can be added to the uploaded document.|
|employee_id|integer|true|none|Employee identifier|
|category_id|integer|true|none|Document Category identifier|
|date|string(date)|false|none|Optional date can be added to the uploaded document. Must follow the format: Y-m-d|
|file|string(binary)|true|none|The document that shall be uploaded to an employees profile. Maximum file size is 30MB.|

<h2 id="tocS_DocumentUploadFailedWithBadDocumentCategoryResponse">DocumentUploadFailedWithBadDocumentCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadfailedwithbaddocumentcategoryresponse"></a>
<a id="schema_DocumentUploadFailedWithBadDocumentCategoryResponse"></a>
<a id="tocSdocumentuploadfailedwithbaddocumentcategoryresponse"></a>
<a id="tocsdocumentuploadfailedwithbaddocumentcategoryresponse"></a>

```json
{
  "success": false,
  "error": {
    "message": "No query results for model [DocumentCategory] 1",
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_DocumentUploadFailedWithUnsupportedFileTypeResponse">DocumentUploadFailedWithUnsupportedFileTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadfailedwithunsupportedfiletyperesponse"></a>
<a id="schema_DocumentUploadFailedWithUnsupportedFileTypeResponse"></a>
<a id="tocSdocumentuploadfailedwithunsupportedfiletyperesponse"></a>
<a id="tocsdocumentuploadfailedwithunsupportedfiletyperesponse"></a>

```json
{
  "success": false,
  "error": {
    "message": "The given data was invalid.",
    "code": 0,
    "error_data": {
      "file": [
        "The file must be a file of type: pdf, docx, doc, jpg, zip, png, txt, jpeg, odt, xlsx, rtf, htm, xls, p7s, pptx, pages, rar, ppt, gif, tif, html, msg, asc, tiff, wps, bmp, 7z, csv, ics, vcf, dotx, numbers, eps, gz, ods, otf, odp, odg, rtfd, txz, webarchive, xml, xps, md, fax."
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_DocumentUploadSuccessResponse">DocumentUploadSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadsuccessresponse"></a>
<a id="schema_DocumentUploadSuccessResponse"></a>
<a id="tocSdocumentuploadsuccessresponse"></a>
<a id="tocsdocumentuploadsuccessresponse"></a>

```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "Document",
    "attributes": {
      "title": "Document Title",
      "date": "2022-01-01",
      "comment": "Optional Test Comment",
      "employee": {
        "id": {
          "label": "ID",
          "value": 1,
          "type": "standard",
          "universal_id": "id"
        },
        "first_name": {
          "label": "First name",
          "value": "Michael",
          "type": "standard",
          "universal_id": "first_name"
        },
        "last_name": {
          "label": "Last name",
          "value": "Dou",
          "type": "standard",
          "universal_id": "last_name"
        },
        "email": {
          "label": "Email",
          "value": "michaeldou@demo.de",
          "type": "standard",
          "universal_id": "email"
        }
      },
      "category_id": {
        "id": 1,
        "type": "DocumentCategory",
        "attributes": {
          "name": "Certificates of employment"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_DocumentEmployeeResponseObject">DocumentEmployeeResponseObject</h2>
<!-- backwards compatibility -->
<a id="schemadocumentemployeeresponseobject"></a>
<a id="schema_DocumentEmployeeResponseObject"></a>
<a id="tocSdocumentemployeeresponseobject"></a>
<a id="tocsdocumentemployeeresponseobject"></a>

```json
{
  "id": {
    "label": "ID",
    "value": 1,
    "type": "standard",
    "universal_id": "id"
  },
  "first_name": {
    "label": "First name",
    "value": "Michael",
    "type": "standard",
    "universal_id": "first_name"
  },
  "last_name": {
    "label": "Last name",
    "value": "Dou",
    "type": "standard",
    "universal_id": "last_name"
  },
  "email": {
    "label": "Email",
    "value": "michaeldou@demo.de",
    "type": "standard",
    "universal_id": "email"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|first_name|object|false|none|none|
|last_name|object|false|none|none|
|email|object|false|none|none|

<h2 id="tocS_DocumentCategoriesResponse">DocumentCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcategoriesresponse"></a>
<a id="schema_DocumentCategoriesResponse"></a>
<a id="tocSdocumentcategoriesresponse"></a>
<a id="tocsdocumentcategoriesresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "DocumentCategory",
      "attributes": {
        "name": "Certificates of employment"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[[DocumentCategory](#schemadocumentcategory)]|false|none|none|

<h2 id="tocS_DocumentCategory">DocumentCategory</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcategory"></a>
<a id="schema_DocumentCategory"></a>
<a id="tocSdocumentcategory"></a>
<a id="tocsdocumentcategory"></a>

```json
{
  "id": 1,
  "type": "DocumentCategory",
  "attributes": {
    "name": "Certificates of employment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|type|string|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_DeletedAbsenceResponse">DeletedAbsenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedabsenceresponse"></a>
<a id="schema_DeletedAbsenceResponse"></a>
<a id="tocSdeletedabsenceresponse"></a>
<a id="tocsdeletedabsenceresponse"></a>

```json
{
  "success": true,
  "data": {
    "message": "The absence period was deleted."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_DeletedAttendanceResponse">DeletedAttendanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedattendanceresponse"></a>
<a id="schema_DeletedAttendanceResponse"></a>
<a id="tocSdeletedattendanceresponse"></a>
<a id="tocsdeletedattendanceresponse"></a>

```json
{
  "success": true,
  "data": {
    "message": "The attendance period was deleted"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_UpdatedAttendanceResponse">UpdatedAttendanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedattendanceresponse"></a>
<a id="schema_UpdatedAttendanceResponse"></a>
<a id="tocSupdatedattendanceresponse"></a>
<a id="tocsupdatedattendanceresponse"></a>

```json
{
  "success": true,
  "data": {
    "message": "The attendance period was updated."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Something went wrong"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_ErrorCreateAbsenceResponse">ErrorCreateAbsenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcreateabsenceresponse"></a>
<a id="schema_ErrorCreateAbsenceResponse"></a>
<a id="tocSerrorcreateabsenceresponse"></a>
<a id="tocserrorcreateabsenceresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "The given data failed to pass validation."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_ErrorAbsenceResponse">ErrorAbsenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorabsenceresponse"></a>
<a id="schema_ErrorAbsenceResponse"></a>
<a id="tocSerrorabsenceresponse"></a>
<a id="tocserrorabsenceresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The absence period was not found."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_ErrorInsertingAbsenceResponse">ErrorInsertingAbsenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinsertingabsenceresponse"></a>
<a id="schema_ErrorInsertingAbsenceResponse"></a>
<a id="tocSerrorinsertingabsenceresponse"></a>
<a id="tocserrorinsertingabsenceresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert absence period"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_AttendanceCreateUpdate400ErrorResponse">AttendanceCreateUpdate400ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattendancecreateupdate400errorresponse"></a>
<a id="schema_AttendanceCreateUpdate400ErrorResponse"></a>
<a id="tocSattendancecreateupdate400errorresponse"></a>
<a id="tocsattendancecreateupdate400errorresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error when trying to insert Attendances periods rows",
    "detailed_message": [
      {
        "success": false,
        "error_msg": "Existing overlapping attendances periods",
        "id": null,
        "employee": 1234,
        "date": "2017-01-01",
        "start_time": "09:00",
        "end_time": "18:00",
        "break": 60,
        "comment": "Optional Test Comment",
        "project_id": null
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_AttendanceDelete400ErrorResponse">AttendanceDelete400ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattendancedelete400errorresponse"></a>
<a id="schema_AttendanceDelete400ErrorResponse"></a>
<a id="tocSattendancedelete400errorresponse"></a>
<a id="tocsattendancedelete400errorresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Bad Request"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_Attendance404ErrorResponse">Attendance404ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattendance404errorresponse"></a>
<a id="schema_Attendance404ErrorResponse"></a>
<a id="tocSattendance404errorresponse"></a>
<a id="tocsattendance404errorresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "The attendance period was not found."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_Employee404ErrorResponse">Employee404ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployee404errorresponse"></a>
<a id="schema_Employee404ErrorResponse"></a>
<a id="tocSemployee404errorresponse"></a>
<a id="tocsemployee404errorresponse"></a>

```json
{
  "success": false,
  "error": {
    "code": 0,
    "message": "Es ist ein Problem aufgetreten"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_EmployeeCreatedResponse">EmployeeCreatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeecreatedresponse"></a>
<a id="schema_EmployeeCreatedResponse"></a>
<a id="tocSemployeecreatedresponse"></a>
<a id="tocsemployeecreatedresponse"></a>

```json
{
  "success": true,
  "data": {
    "id": 1,
    "message": "success"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_EmployeeCreationErrorResponse">EmployeeCreationErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeecreationerrorresponse"></a>
<a id="schema_EmployeeCreationErrorResponse"></a>
<a id="tocSemployeecreationerrorresponse"></a>
<a id="tocsemployeecreationerrorresponse"></a>

```json
{
  "success": true,
  "error": {
    "code": 422,
    "message": "Supervisor with ID 1 not found"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_EmployeeUpdatedResponse">EmployeeUpdatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeupdatedresponse"></a>
<a id="schema_EmployeeUpdatedResponse"></a>
<a id="tocSemployeeupdatedresponse"></a>
<a id="tocsemployeeupdatedresponse"></a>

```json
{
  "success": true,
  "data": {
    "id": 12345
  },
  "meta": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|meta|[string]|false|none|none|

<h2 id="tocS_EmployeeUpdateErrorResponse">EmployeeUpdateErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeupdateerrorresponse"></a>
<a id="schema_EmployeeUpdateErrorResponse"></a>
<a id="tocSemployeeupdateerrorresponse"></a>
<a id="tocsemployeeupdateerrorresponse"></a>

```json
{
  "success": true,
  "error": {
    "code": 422,
    "message": "Supervisor with ID 1 not found"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "label": "Workplace",
  "value": {
    "type": "Office",
    "attributes": {
      "name": "Munich"
    }
  },
  "type": "standard",
  "universal_id": "office"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|object|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "label": "Department",
  "value": {
    "type": "Department",
    "attributes": {
      "id": 1,
      "name": "Marketing"
    }
  },
  "type": "standard",
  "universal_id": "department"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|object|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_CostCenters">CostCenters</h2>
<!-- backwards compatibility -->
<a id="schemacostcenters"></a>
<a id="schema_CostCenters"></a>
<a id="tocScostcenters"></a>
<a id="tocscostcenters"></a>

```json
{
  "label": "Cost center",
  "value": [
    {
      "type": "CostCenter",
      "attributes": {
        "name": "Cost Center One",
        "id": 1,
        "percentage": 50
      }
    }
  ],
  "type": "standard",
  "universal_id": "cost_center"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|[object]|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_HolidayCalendar">HolidayCalendar</h2>
<!-- backwards compatibility -->
<a id="schemaholidaycalendar"></a>
<a id="schema_HolidayCalendar"></a>
<a id="tocSholidaycalendar"></a>
<a id="tocsholidaycalendar"></a>

```json
{
  "label": "Holiday Calendar",
  "value": {
    "type": "HolidayCalendar",
    "attributes": {
      "id": 1,
      "name": "DE (Hamburg) Feiertage",
      "country": "DE",
      "state": "Hamburg"
    }
  },
  "type": "standard",
  "universal_id": "holiday_calendar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|object|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_WorkSchedule">WorkSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaworkschedule"></a>
<a id="schema_WorkSchedule"></a>
<a id="tocSworkschedule"></a>
<a id="tocsworkschedule"></a>

```json
{
  "label": "WorkSchedule",
  "value": {
    "type": "WorkSchedule",
    "attributes": {
      "id": 1,
      "name": "Standard Hours",
      "monday": "08:30",
      "tuesday": "08:30",
      "wednesday": "08:30",
      "thursday": "08:30",
      "friday": "08:30",
      "saturday": "00:00",
      "sunday": "00:00"
    }
  },
  "type": "standard",
  "universal_id": "work_schedule"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|object|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "label": "Team",
  "value": {
    "type": "Team",
    "attributes": {
      "name": "Management"
    }
  },
  "type": "standard",
  "universal_id": "team"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|false|none|none|
|value|object|false|none|none|
|type|[TypeEnum](#schematypeenum)|false|none|none|
|universal_id|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|date|
|type|integer|
|type|decimal|
|type|list|
|type|link|
|type|tags|
|type|multiline|

<h2 id="tocS_AbsenceEntitlement">AbsenceEntitlement</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceentitlement"></a>
<a id="schema_AbsenceEntitlement"></a>
<a id="tocSabsenceentitlement"></a>
<a id="tocsabsenceentitlement"></a>

```json
{
  "label": "Absence entitlement",
  "value": [
    {
      "type": "TimeOffType",
      "attributes": {
        "id": 1,
        "name": "Paid Vacation",
        "entitlement": 30
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|object|true|none|none|
|value|[object]|true|none|none|

<h2 id="tocS_Supervisor">Supervisor</h2>
<!-- backwards compatibility -->
<a id="schemasupervisor"></a>
<a id="schema_Supervisor"></a>
<a id="tocSsupervisor"></a>
<a id="tocssupervisor"></a>

```json
{
  "label": "Supervisor",
  "value": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": 1,
        "value": "id",
        "type": "standard",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First Name",
        "value": "Michael",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last Name",
        "value": "Dou",
        "type": "standard",
        "universal_id": "last_name"
      },
      "email": {
        "label": "Email",
        "value": "michael.dou@personio.de",
        "type": "standard",
        "universal_id": "email"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|value|[ShortEmployee](#schemashortemployee)|false|none|none|

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "id": {
    "label": "ID",
    "value": 1,
    "type": "standard",
    "universal_id": "id"
  },
  "first_name": {
    "label": "First name",
    "value": "Michael",
    "type": "standard",
    "universal_id": "first_name"
  },
  "last_name": {
    "label": "Last name",
    "value": "Dou",
    "type": "standard",
    "universal_id": "last_name"
  },
  "preferred_name": {
    "label": "Name (preferred)",
    "value": "Michael Dou",
    "type": "standard",
    "universal_id": "preferred_name"
  },
  "email": {
    "label": "Email",
    "value": "michael.dou@personio.de",
    "type": "standard",
    "universal_id": "email"
  },
  "gender": {
    "label": "Gender",
    "value": "male",
    "type": "standard",
    "universal_id": "gender"
  },
  "status": {
    "label": "Status",
    "value": "active",
    "type": "standard",
    "universal_id": "status"
  },
  "position": {
    "label": "Position",
    "value": "Online Marketing Specialist",
    "type": "standard",
    "universal_id": "position"
  },
  "supervisor": {
    "label": "Supervisor",
    "value": {
      "type": "Employee",
      "attributes": {
        "id": {
          "label": 1,
          "value": "id",
          "type": "standard",
          "universal_id": "id"
        },
        "first_name": {
          "label": "First Name",
          "value": "Michael",
          "type": "standard",
          "universal_id": "first_name"
        },
        "last_name": {
          "label": "Last Name",
          "value": "Dou",
          "type": "standard",
          "universal_id": "last_name"
        },
        "email": {
          "label": "Email",
          "value": "michael.dou@personio.de",
          "type": "standard",
          "universal_id": "email"
        }
      }
    }
  },
  "employment_type": {
    "label": "Employment type",
    "value": "internal",
    "type": "standard",
    "universal_id": "employment_type"
  },
  "weekly_working_hours": {
    "label": "Weekly hours",
    "value": 40,
    "type": "standard",
    "universal_id": "weekly_working_hours"
  },
  "hire_date": {
    "label": "Hire date",
    "value": "2012-02-01T00:00:00+0100",
    "type": "standard",
    "universal_id": "hire_date"
  },
  "contract_end_date": {
    "label": "Contact end date",
    "value": "2020-02-01T00:00:00+0100",
    "type": "standard",
    "universal_id": "contract_end_date"
  },
  "termination_date": {
    "label": "Termonation date",
    "value": "2020-02-01T00:00:00+0100",
    "type": "standard",
    "universal_id": "termination_date"
  },
  "termination_type": {
    "label": "Termonation type",
    "value": null,
    "type": "standard",
    "universal_id": "termination_type"
  },
  "termination_reason": {
    "label": "Termonation reason",
    "value": null,
    "type": "standard",
    "universal_id": "termination_reason"
  },
  "probation_period_end": {
    "label": "Probation period end",
    "value": "2020-02-01T00:00:00+0100",
    "type": "standard",
    "universal_id": "probation_period_end"
  },
  "created_at": {
    "label": "Created at",
    "value": "2018-02-01T00:00:00+0100",
    "type": "standard",
    "universal_id": "created_at"
  },
  "last_modified_at": {
    "label": "Last modified",
    "value": "2020-11-18T17:33:55+01:00",
    "type": "standard",
    "universal_id": "last_modified_at"
  },
  "subcompany": {
    "label": "Workplace",
    "value": {
      "type": "Office",
      "attributes": {
        "name": "Munich"
      }
    },
    "type": "standard",
    "universal_id": "office"
  },
  "office": {
    "label": "Workplace",
    "value": {
      "type": "Office",
      "attributes": {
        "name": "Munich"
      }
    },
    "type": "standard",
    "universal_id": "office"
  },
  "department": {
    "label": "Department",
    "value": {
      "type": "Department",
      "attributes": {
        "id": 1,
        "name": "Marketing"
      }
    },
    "type": "standard",
    "universal_id": "department"
  },
  "cost_centers": {
    "label": "Cost center",
    "value": [
      {
        "type": "CostCenter",
        "attributes": {
          "name": "Cost Center One",
          "id": 1,
          "percentage": 50
        }
      }
    ],
    "type": "standard",
    "universal_id": "cost_center"
  },
  "holiday_calendar": {
    "label": "Holiday Calendar",
    "value": {
      "type": "HolidayCalendar",
      "attributes": {
        "id": 1,
        "name": "DE (Hamburg) Feiertage",
        "country": "DE",
        "state": "Hamburg"
      }
    },
    "type": "standard",
    "universal_id": "holiday_calendar"
  },
  "work_schedule": {
    "label": "WorkSchedule",
    "value": {
      "type": "WorkSchedule",
      "attributes": {
        "id": 1,
        "name": "Standard Hours",
        "monday": "08:30",
        "tuesday": "08:30",
        "wednesday": "08:30",
        "thursday": "08:30",
        "friday": "08:30",
        "saturday": "00:00",
        "sunday": "00:00"
      }
    },
    "type": "standard",
    "universal_id": "work_schedule"
  },
  "absence_entitlement": {
    "label": "Absence entitlement",
    "value": [
      {
        "type": "TimeOffType",
        "attributes": {
          "id": 1,
          "name": "Paid Vacation",
          "entitlement": 30
        }
      }
    ]
  },
  "team": {
    "label": "Team",
    "value": {
      "type": "Team",
      "attributes": {
        "name": "Management"
      }
    },
    "type": "standard",
    "universal_id": "team"
  },
  "fix_salary": {
    "label": "Fix salary",
    "value": 4000,
    "type": "standard",
    "universal_id": "fix_salary",
    "currency": "EUR"
  },
  "fix_salary_interval": {
    "label": "Salary interval",
    "value": "monthly",
    "type": "standard",
    "universal_id": "fix_salary_interval"
  },
  "hourly_salary": {
    "label": "Hourly salary",
    "value": 0,
    "type": "standard",
    "universal_id": "hourly_salary",
    "currency": "EUR"
  },
  "last_working_day": {
    "label": "Last day of work",
    "value": null,
    "type": "standard",
    "universal_id": "last_working_day"
  },
  "profile_picture": {
    "label": "Profile Picture",
    "value": "http://api.dev.personio.de/v1/company/employees/1/profile-picture",
    "type": "standard",
    "universal_id": "profile_picture"
  },
  "dynamic_21827": {
    "label": "IBAN",
    "value": "DE98 8989 9898 0000 8989 00",
    "type": "standard",
    "universal_id": "iban"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|first_name|object|false|none|none|
|last_name|object|false|none|none|
|preferred_name|object|false|none|none|
|email|object|false|none|none|
|gender|object|false|none|none|
|status|object|false|none|none|
|position|object|false|none|none|
|supervisor|[Supervisor](#schemasupervisor)|false|none|none|
|employment_type|object|false|none|none|
|weekly_working_hours|object|false|none|none|
|hire_date|object|false|none|none|
|contract_end_date|object|false|none|none|
|termination_date|object|false|none|none|
|termination_type|object|false|none|none|
|termination_reason|object|false|none|none|
|probation_period_end|object|false|none|none|
|created_at|object|false|none|none|
|last_modified_at|object|false|none|none|
|subcompany|[Office](#schemaoffice)|false|none|none|
|office|[Office](#schemaoffice)|false|none|none|
|department|[Department](#schemadepartment)|false|none|none|
|cost_centers|[CostCenters](#schemacostcenters)|false|none|none|
|holiday_calendar|[HolidayCalendar](#schemaholidaycalendar)|false|none|none|
|work_schedule|[WorkSchedule](#schemaworkschedule)|false|none|none|
|absence_entitlement|[AbsenceEntitlement](#schemaabsenceentitlement)|false|none|none|
|team|[Team](#schemateam)|false|none|none|
|fix_salary|object|false|none|none|
|fix_salary_interval|object|false|none|none|
|hourly_salary|object|false|none|none|
|last_working_day|object|false|none|none|
|profile_picture|object|false|none|none|
|dynamic_21827|object|false|none|none|

<h2 id="tocS_EmployeesResponse">EmployeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeesresponse"></a>
<a id="schema_EmployeesResponse"></a>
<a id="tocSemployeesresponse"></a>
<a id="tocsemployeesresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "type": "Employee",
      "attributes": {
        "id": {
          "label": "ID",
          "value": 1,
          "type": "standard",
          "universal_id": "id"
        },
        "first_name": {
          "label": "First name",
          "value": "Michael",
          "type": "standard",
          "universal_id": "first_name"
        },
        "last_name": {
          "label": "Last name",
          "value": "Dou",
          "type": "standard",
          "universal_id": "last_name"
        },
        "preferred_name": {
          "label": "Name (preferred)",
          "value": "Michael Dou",
          "type": "standard",
          "universal_id": "preferred_name"
        },
        "email": {
          "label": "Email",
          "value": "michael.dou@personio.de",
          "type": "standard",
          "universal_id": "email"
        },
        "gender": {
          "label": "Gender",
          "value": "male",
          "type": "standard",
          "universal_id": "gender"
        },
        "status": {
          "label": "Status",
          "value": "active",
          "type": "standard",
          "universal_id": "status"
        },
        "position": {
          "label": "Position",
          "value": "Online Marketing Specialist",
          "type": "standard",
          "universal_id": "position"
        },
        "supervisor": {
          "label": "Supervisor",
          "value": {
            "type": "Employee",
            "attributes": {
              "id": {
                "label": 1,
                "value": "id",
                "type": "standard",
                "universal_id": "id"
              },
              "first_name": {
                "label": "First Name",
                "value": "Michael",
                "type": "standard",
                "universal_id": "first_name"
              },
              "last_name": {
                "label": "Last Name",
                "value": "Dou",
                "type": "standard",
                "universal_id": "last_name"
              },
              "email": {
                "label": "Email",
                "value": "michael.dou@personio.de",
                "type": "standard",
                "universal_id": "email"
              }
            }
          }
        },
        "employment_type": {
          "label": "Employment type",
          "value": "internal",
          "type": "standard",
          "universal_id": "employment_type"
        },
        "weekly_working_hours": {
          "label": "Weekly hours",
          "value": 40,
          "type": "standard",
          "universal_id": "weekly_working_hours"
        },
        "hire_date": {
          "label": "Hire date",
          "value": "2012-02-01T00:00:00+0100",
          "type": "standard",
          "universal_id": "hire_date"
        },
        "contract_end_date": {
          "label": "Contact end date",
          "value": "2020-02-01T00:00:00+0100",
          "type": "standard",
          "universal_id": "contract_end_date"
        },
        "termination_date": {
          "label": "Termonation date",
          "value": "2020-02-01T00:00:00+0100",
          "type": "standard",
          "universal_id": "termination_date"
        },
        "termination_type": {
          "label": "Termonation type",
          "value": null,
          "type": "standard",
          "universal_id": "termination_type"
        },
        "termination_reason": {
          "label": "Termonation reason",
          "value": null,
          "type": "standard",
          "universal_id": "termination_reason"
        },
        "probation_period_end": {
          "label": "Probation period end",
          "value": "2020-02-01T00:00:00+0100",
          "type": "standard",
          "universal_id": "probation_period_end"
        },
        "created_at": {
          "label": "Created at",
          "value": "2018-02-01T00:00:00+0100",
          "type": "standard",
          "universal_id": "created_at"
        },
        "last_modified_at": {
          "label": "Last modified",
          "value": "2020-11-18T17:33:55+01:00",
          "type": "standard",
          "universal_id": "last_modified_at"
        },
        "subcompany": {
          "label": "Workplace",
          "value": {
            "type": "Office",
            "attributes": {
              "name": "Munich"
            }
          },
          "type": "standard",
          "universal_id": "office"
        },
        "office": {
          "label": "Workplace",
          "value": {
            "type": "Office",
            "attributes": {
              "name": "Munich"
            }
          },
          "type": "standard",
          "universal_id": "office"
        },
        "department": {
          "label": "Department",
          "value": {
            "type": "Department",
            "attributes": {
              "id": 1,
              "name": "Marketing"
            }
          },
          "type": "standard",
          "universal_id": "department"
        },
        "cost_centers": {
          "label": "Cost center",
          "value": [
            {
              "type": "CostCenter",
              "attributes": {
                "name": "Cost Center One",
                "id": 1,
                "percentage": 50
              }
            }
          ],
          "type": "standard",
          "universal_id": "cost_center"
        },
        "holiday_calendar": {
          "label": "Holiday Calendar",
          "value": {
            "type": "HolidayCalendar",
            "attributes": {
              "id": 1,
              "name": "DE (Hamburg) Feiertage",
              "country": "DE",
              "state": "Hamburg"
            }
          },
          "type": "standard",
          "universal_id": "holiday_calendar"
        },
        "work_schedule": {
          "label": "WorkSchedule",
          "value": {
            "type": "WorkSchedule",
            "attributes": {
              "id": 1,
              "name": "Standard Hours",
              "monday": "08:30",
              "tuesday": "08:30",
              "wednesday": "08:30",
              "thursday": "08:30",
              "friday": "08:30",
              "saturday": "00:00",
              "sunday": "00:00"
            }
          },
          "type": "standard",
          "universal_id": "work_schedule"
        },
        "absence_entitlement": {
          "label": "Absence entitlement",
          "value": [
            {
              "type": "TimeOffType",
              "attributes": {
                "id": 1,
                "name": "Paid Vacation",
                "entitlement": 30
              }
            }
          ]
        },
        "team": {
          "label": "Team",
          "value": {
            "type": "Team",
            "attributes": {
              "name": "Management"
            }
          },
          "type": "standard",
          "universal_id": "team"
        },
        "fix_salary": {
          "label": "Fix salary",
          "value": 4000,
          "type": "standard",
          "universal_id": "fix_salary",
          "currency": "EUR"
        },
        "fix_salary_interval": {
          "label": "Salary interval",
          "value": "monthly",
          "type": "standard",
          "universal_id": "fix_salary_interval"
        },
        "hourly_salary": {
          "label": "Hourly salary",
          "value": 0,
          "type": "standard",
          "universal_id": "hourly_salary",
          "currency": "EUR"
        },
        "last_working_day": {
          "label": "Last day of work",
          "value": null,
          "type": "standard",
          "universal_id": "last_working_day"
        },
        "profile_picture": {
          "label": "Profile Picture",
          "value": "http://api.dev.personio.de/v1/company/employees/1/profile-picture",
          "type": "standard",
          "universal_id": "profile_picture"
        },
        "dynamic_21827": {
          "label": "IBAN",
          "value": "DE98 8989 9898 0000 8989 00",
          "type": "standard",
          "universal_id": "iban"
        }
      }
    }
  ],
  "metadata": {
    "total_elements": 0,
    "total_pages": 0,
    "current_page": 0
  },
  "offset": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|metadata|object|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[object]|true|none|none|

<h2 id="tocS_EmployeeResponse">EmployeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeresponse"></a>
<a id="schema_EmployeeResponse"></a>
<a id="tocSemployeeresponse"></a>
<a id="tocsemployeeresponse"></a>

```json
{
  "success": true,
  "data": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": "ID",
        "value": 1,
        "type": "standard",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First name",
        "value": "Michael",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last name",
        "value": "Dou",
        "type": "standard",
        "universal_id": "last_name"
      },
      "preferred_name": {
        "label": "Name (preferred)",
        "value": "Michael Dou",
        "type": "standard",
        "universal_id": "preferred_name"
      },
      "email": {
        "label": "Email",
        "value": "michael.dou@personio.de",
        "type": "standard",
        "universal_id": "email"
      },
      "gender": {
        "label": "Gender",
        "value": "male",
        "type": "standard",
        "universal_id": "gender"
      },
      "status": {
        "label": "Status",
        "value": "active",
        "type": "standard",
        "universal_id": "status"
      },
      "position": {
        "label": "Position",
        "value": "Online Marketing Specialist",
        "type": "standard",
        "universal_id": "position"
      },
      "supervisor": {
        "label": "Supervisor",
        "value": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": 1,
              "value": "id",
              "type": "standard",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First Name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last Name",
              "value": "Dou",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.dou@personio.de",
              "type": "standard",
              "universal_id": "email"
            }
          }
        }
      },
      "employment_type": {
        "label": "Employment type",
        "value": "internal",
        "type": "standard",
        "universal_id": "employment_type"
      },
      "weekly_working_hours": {
        "label": "Weekly hours",
        "value": 40,
        "type": "standard",
        "universal_id": "weekly_working_hours"
      },
      "hire_date": {
        "label": "Hire date",
        "value": "2012-02-01T00:00:00+0100",
        "type": "standard",
        "universal_id": "hire_date"
      },
      "contract_end_date": {
        "label": "Contact end date",
        "value": "2020-02-01T00:00:00+0100",
        "type": "standard",
        "universal_id": "contract_end_date"
      },
      "termination_date": {
        "label": "Termonation date",
        "value": "2020-02-01T00:00:00+0100",
        "type": "standard",
        "universal_id": "termination_date"
      },
      "termination_type": {
        "label": "Termonation type",
        "value": null,
        "type": "standard",
        "universal_id": "termination_type"
      },
      "termination_reason": {
        "label": "Termonation reason",
        "value": null,
        "type": "standard",
        "universal_id": "termination_reason"
      },
      "probation_period_end": {
        "label": "Probation period end",
        "value": "2020-02-01T00:00:00+0100",
        "type": "standard",
        "universal_id": "probation_period_end"
      },
      "created_at": {
        "label": "Created at",
        "value": "2018-02-01T00:00:00+0100",
        "type": "standard",
        "universal_id": "created_at"
      },
      "last_modified_at": {
        "label": "Last modified",
        "value": "2020-11-18T17:33:55+01:00",
        "type": "standard",
        "universal_id": "last_modified_at"
      },
      "subcompany": {
        "label": "Workplace",
        "value": {
          "type": "Office",
          "attributes": {
            "name": "Munich"
          }
        },
        "type": "standard",
        "universal_id": "office"
      },
      "office": {
        "label": "Workplace",
        "value": {
          "type": "Office",
          "attributes": {
            "name": "Munich"
          }
        },
        "type": "standard",
        "universal_id": "office"
      },
      "department": {
        "label": "Department",
        "value": {
          "type": "Department",
          "attributes": {
            "id": 1,
            "name": "Marketing"
          }
        },
        "type": "standard",
        "universal_id": "department"
      },
      "cost_centers": {
        "label": "Cost center",
        "value": [
          {
            "type": "CostCenter",
            "attributes": {
              "name": "Cost Center One",
              "id": 1,
              "percentage": 50
            }
          }
        ],
        "type": "standard",
        "universal_id": "cost_center"
      },
      "holiday_calendar": {
        "label": "Holiday Calendar",
        "value": {
          "type": "HolidayCalendar",
          "attributes": {
            "id": 1,
            "name": "DE (Hamburg) Feiertage",
            "country": "DE",
            "state": "Hamburg"
          }
        },
        "type": "standard",
        "universal_id": "holiday_calendar"
      },
      "work_schedule": {
        "label": "WorkSchedule",
        "value": {
          "type": "WorkSchedule",
          "attributes": {
            "id": 1,
            "name": "Standard Hours",
            "monday": "08:30",
            "tuesday": "08:30",
            "wednesday": "08:30",
            "thursday": "08:30",
            "friday": "08:30",
            "saturday": "00:00",
            "sunday": "00:00"
          }
        },
        "type": "standard",
        "universal_id": "work_schedule"
      },
      "absence_entitlement": {
        "label": "Absence entitlement",
        "value": [
          {
            "type": "TimeOffType",
            "attributes": {
              "id": 1,
              "name": "Paid Vacation",
              "entitlement": 30
            }
          }
        ]
      },
      "team": {
        "label": "Team",
        "value": {
          "type": "Team",
          "attributes": {
            "name": "Management"
          }
        },
        "type": "standard",
        "universal_id": "team"
      },
      "fix_salary": {
        "label": "Fix salary",
        "value": 4000,
        "type": "standard",
        "universal_id": "fix_salary",
        "currency": "EUR"
      },
      "fix_salary_interval": {
        "label": "Salary interval",
        "value": "monthly",
        "type": "standard",
        "universal_id": "fix_salary_interval"
      },
      "hourly_salary": {
        "label": "Hourly salary",
        "value": 0,
        "type": "standard",
        "universal_id": "hourly_salary",
        "currency": "EUR"
      },
      "last_working_day": {
        "label": "Last day of work",
        "value": null,
        "type": "standard",
        "universal_id": "last_working_day"
      },
      "profile_picture": {
        "label": "Profile Picture",
        "value": "http://api.dev.personio.de/v1/company/employees/1/profile-picture",
        "type": "standard",
        "universal_id": "profile_picture"
      },
      "dynamic_21827": {
        "label": "IBAN",
        "value": "DE98 8989 9898 0000 8989 00",
        "type": "standard",
        "universal_id": "iban"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_EmployeeAbsenceBalance">EmployeeAbsenceBalance</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeabsencebalance"></a>
<a id="schema_EmployeeAbsenceBalance"></a>
<a id="tocSemployeeabsencebalance"></a>
<a id="tocsemployeeabsencebalance"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": 1234,
      "name": "Paid Vacation",
      "category": "custom_absence",
      "balance": 10.5,
      "available_balance": 8.5
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": 1,
  "type": "Project",
  "attributes": {
    "name": "Project name",
    "active": true,
    "created_at": "2022-02-01T12:00:00+0100",
    "updated_at": "2022-02-01T12:00:00+0100"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|type|string|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_AttendanceProject">AttendanceProject</h2>
<!-- backwards compatibility -->
<a id="schemaattendanceproject"></a>
<a id="schema_AttendanceProject"></a>
<a id="tocSattendanceproject"></a>
<a id="tocsattendanceproject"></a>

```json
{
  "id": 1,
  "type": "Project",
  "attributes": {
    "name": "Project name",
    "active": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|type|string|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_Attendance">Attendance</h2>
<!-- backwards compatibility -->
<a id="schemaattendance"></a>
<a id="schema_Attendance"></a>
<a id="tocSattendance"></a>
<a id="tocsattendance"></a>

```json
{
  "employee": 1,
  "date": "1970-01-01",
  "start_time": "08:00",
  "end_time": "17:00",
  "break": 60,
  "comment": "I was productive as hell",
  "is_holiday": false,
  "is_on_time_off": false,
  "status": "confirmed",
  "project": {
    "id": 5,
    "type": "Project",
    "attributes": {
      "name": "A project name",
      "active": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|integer|false|none|none|
|date|string(date)|false|none|none|
|start_time|string|false|none|none|
|end_time|string \| null|false|none|none|
|break|integer|false|none|none|
|comment|string|false|none|none|
|is_holiday|boolean|false|none|none|
|is_on_time_off|boolean|false|none|none|
|status|string|false|none|none|
|project|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|confirmed|
|status|pending|
|status|rejected|

<h2 id="tocS_AttendanceCreateRequest">AttendanceCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattendancecreaterequest"></a>
<a id="schema_AttendanceCreateRequest"></a>
<a id="tocSattendancecreaterequest"></a>
<a id="tocsattendancecreaterequest"></a>

```json
{
  "attendances": [
    {
      "employee": 1,
      "date": "1970-01-01",
      "start_time": "08:00",
      "end_time": "17:00",
      "break": 60,
      "comment": "I was productive as hell",
      "project_id": 5
    }
  ],
  "skip_approval": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendances|[object]|false|none|none|
|skip_approval|boolean|false|none|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|

<h2 id="tocS_AttendanceUpdateRequest">AttendanceUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattendanceupdaterequest"></a>
<a id="schema_AttendanceUpdateRequest"></a>
<a id="tocSattendanceupdaterequest"></a>
<a id="tocsattendanceupdaterequest"></a>

```json
{
  "date": "1970-01-01",
  "start_time": "08:00",
  "end_time": "17:00",
  "break": 60,
  "comment": "I was productive as hell",
  "project_id": 5,
  "skip_approval": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|none|
|start_time|string|false|none|Format: hh:mm|
|end_time|string \| null|false|none|Format: hh:mm|
|break|integer|false|none|none|
|comment|string \| null|false|none|none|
|project_id|integer \| null|false|none|none|
|skip_approval|boolean|false|none|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|

<h2 id="tocS_AttendancePeriodsResponse">AttendancePeriodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattendanceperiodsresponse"></a>
<a id="schema_AttendancePeriodsResponse"></a>
<a id="tocSattendanceperiodsresponse"></a>
<a id="tocsattendanceperiodsresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "AttendancePeriod",
      "attributes": {
        "employee": 1,
        "date": "1970-01-01",
        "start_time": "08:00",
        "end_time": "17:00",
        "break": 60,
        "comment": "I was productive as hell",
        "is_holiday": false,
        "is_on_time_off": false,
        "status": "confirmed",
        "project": {
          "id": 5,
          "type": "Project",
          "attributes": {
            "name": "A project name",
            "active": true
          }
        }
      }
    }
  ],
  "metadata": {
    "total_elements": 0,
    "total_pages": 0,
    "current_page": 0
  },
  "offset": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|metadata|object|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[object]|true|none|none|

<h2 id="tocS_NewAttendancePeriodParametersRequest">NewAttendancePeriodParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewattendanceperiodparametersrequest"></a>
<a id="schema_NewAttendancePeriodParametersRequest"></a>
<a id="tocSnewattendanceperiodparametersrequest"></a>
<a id="tocsnewattendanceperiodparametersrequest"></a>

```json
{
  "attendances[][employee]": 0,
  "attendances[][date]": "2020-01-31",
  "attendances[][start_time]": "08:00",
  "attendances[][end_time]": "12:00",
  "attendances[]break": 0,
  "attendances[][comment]": "string",
  "skip_approval": true,
  "project_id": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendances[][employee]|integer|true|none|Employee identifier|
|attendances[][date]|string(date)|true|none|Attendance date. Format: yyyy-mm-dd|
|attendances[][start_time]|string|true|none|Start time. Format: hh:mm|
|attendances[][end_time]|string \| null|false|none|End time. Format: hh:mm|
|attendances[]break|integer(int32)|true|none|Break in minutes|
|attendances[][comment]|string \| null|false|none|Optional comment|
|skip_approval|boolean|false|none|Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.|
|project_id|integer(int32) \| null|false|none|The ID of the project|

<h2 id="tocS_NewAttendancePeriodResponse">NewAttendancePeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemanewattendanceperiodresponse"></a>
<a id="schema_NewAttendancePeriodResponse"></a>
<a id="tocSnewattendanceperiodresponse"></a>
<a id="tocsnewattendanceperiodresponse"></a>

```json
{
  "success": true,
  "data": {
    "id": [
      1
    ],
    "message": "Success"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_TimeOffTypeResource">TimeOffTypeResource</h2>
<!-- backwards compatibility -->
<a id="schematimeofftyperesource"></a>
<a id="schema_TimeOffTypeResource"></a>
<a id="tocStimeofftyperesource"></a>
<a id="tocstimeofftyperesource"></a>

```json
{
  "type": "TimeOffType",
  "attributes": {
    "id": 1,
    "name": "Paid vacation",
    "category": "offsite_work",
    "unit": "day",
    "approval_required": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Time-off type resource name|
|attributes|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TimeOffType|

<h2 id="tocS_CreateTimeOffPeriodRequest">CreateTimeOffPeriodRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimeoffperiodrequest"></a>
<a id="schema_CreateTimeOffPeriodRequest"></a>
<a id="tocScreatetimeoffperiodrequest"></a>
<a id="tocscreatetimeoffperiodrequest"></a>

```json
{
  "employee_id": 0,
  "time_off_type_id": 0,
  "start_date": "2020-01-31",
  "end_date": "2020-01-31",
  "half_day_start": false,
  "half_day_end": false,
  "comment": "Some Comment",
  "skip_approval": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_id|integer|true|none|Employee identifier|
|time_off_type_id|integer|true|none|Time-off type identifier|
|start_date|string(date)|true|none|Absence start date. Format: yyyy-mm-dd|
|end_date|string(date)|true|none|Absence end date. Format: yyyy-mm-dd|
|half_day_start|boolean|true|none|Whether the start date is a half-day off.|
|half_day_end|boolean|true|none|Whether the end date is a half-day off.|
|comment|string|false|none|Optional comment|
|skip_approval|boolean|false|none|Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.|

<h2 id="tocS_CreateAbsencePeriodRequest">CreateAbsencePeriodRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateabsenceperiodrequest"></a>
<a id="schema_CreateAbsencePeriodRequest"></a>
<a id="tocScreateabsenceperiodrequest"></a>
<a id="tocscreateabsenceperiodrequest"></a>

```json
{
  "employee_id": 10735,
  "time_off_type_id": 10735,
  "start_date": "2020-01-31",
  "end_date": "2020-01-31",
  "start_time": "03:00",
  "end_time": "15:00",
  "half_day_start": false,
  "half_day_end": false,
  "comment": "Some Comment",
  "skip_approval": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_id|integer|true|none|Employee identifier|
|time_off_type_id|integer|true|none|Time-off type identifier|
|start_date|string(date)|true|none|Absence start date. Format: yyyy-mm-dd|
|end_date|string(date)|true|none|Absence end date. Format: yyyy-mm-dd|
|start_time|string(date)|false|none|Absence start time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)|
|end_time|string(date)|false|none|Absence end time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)|
|half_day_start|boolean|false|none|Whether the start date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)|
|half_day_end|boolean|false|none|Whether the end date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)|
|comment|string|false|none|Optional comment|
|skip_approval|boolean|false|none|Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.|

<h2 id="tocS_AbsencePeriodsResponse">AbsencePeriodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodsresponse"></a>
<a id="schema_AbsencePeriodsResponse"></a>
<a id="tocSabsenceperiodsresponse"></a>
<a id="tocsabsenceperiodsresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "type": "TimeOffPeriod",
      "attributes": {
        "id": 1,
        "status": "approved",
        "start_date": "2017-12-27T00:00:00+0100",
        "end_date": "2017-12-79T00:00:00+0100",
        "days_count": 3,
        "half_day_start": false,
        "half_day_end": false,
        "time_off_type": {
          "type": "TimeOffType",
          "attributes": {
            "id": 1,
            "name": "Vacation",
            "category": "offsite_work"
          }
        },
        "employee": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": 1,
              "value": "id",
              "type": "standard",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First Name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last Name",
              "value": "Dou",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.dou@personio.de",
              "type": "standard",
              "universal_id": "email"
            }
          }
        },
        "certificate": {
          "status": "not-required"
        },
        "created_at": "2017-01-17T10:32:18+0100",
        "created_by": "API",
        "updated_at": "2017-01-17T10:32:18+0100"
      }
    }
  ],
  "metadata": {
    "total_elements": 0,
    "total_pages": 0,
    "current_page": 0
  },
  "offset": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|metadata|object|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[object]|true|none|none|

<h2 id="tocS_HourlyAbsencePeriodsResponse">HourlyAbsencePeriodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemahourlyabsenceperiodsresponse"></a>
<a id="schema_HourlyAbsencePeriodsResponse"></a>
<a id="tocShourlyabsenceperiodsresponse"></a>
<a id="tocshourlyabsenceperiodsresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "type": "AbsencePeriod",
      "attributes": {
        "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
        "measurement_unit": "hours",
        "effective_duration": 16,
        "employee": {
          "type": "Employee",
          "attributes": {
            "id": {
              "label": 1,
              "value": "id",
              "type": "standard",
              "universal_id": "id"
            },
            "first_name": {
              "label": "First Name",
              "value": "Michael",
              "type": "standard",
              "universal_id": "first_name"
            },
            "last_name": {
              "label": "Last Name",
              "value": "Dou",
              "type": "standard",
              "universal_id": "last_name"
            },
            "email": {
              "label": "Email",
              "value": "michael.dou@personio.de",
              "type": "standard",
              "universal_id": "email"
            }
          }
        },
        "absence_type": {
          "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
          "name": "Absence Type Name",
          "time_off_type_id": 1
        },
        "certificate": {
          "status": "not-required"
        },
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z",
        "half_day_start": true,
        "half_day_end": true,
        "comment": "string",
        "origin": "web",
        "status": "approved",
        "timezone": "Europe/Berlin",
        "created_by": 1,
        "created_at": "2017-01-17T10:32:18+0100",
        "updated_at": "2017-01-17T10:32:18+0100",
        "approved_at": "1970-01-01T00:00:00Z",
        "breakdowns": [
          {
            "date": "1970-01-01",
            "effective_duration": 60
          }
        ]
      }
    }
  ],
  "metadata": {
    "total_elements": 0,
    "total_pages": 0,
    "current_page": 0
  },
  "offset": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|metadata|object|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[object]|true|none|none|

<h2 id="tocS_HourlyAbsencePeriodResponseAttributes">HourlyAbsencePeriodResponseAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahourlyabsenceperiodresponseattributes"></a>
<a id="schema_HourlyAbsencePeriodResponseAttributes"></a>
<a id="tocShourlyabsenceperiodresponseattributes"></a>
<a id="tocshourlyabsenceperiodresponseattributes"></a>

```json
{
  "id": "9bba303f-0fbc-4514-9958-0befa21923fb",
  "measurement_unit": "minutes",
  "effective_duration": 60,
  "employee": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": 1,
        "value": "id",
        "type": "standard",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First Name",
        "value": "Michael",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last Name",
        "value": "Dou",
        "type": "standard",
        "universal_id": "last_name"
      },
      "email": {
        "label": "Email",
        "value": "michael.dou@personio.de",
        "type": "standard",
        "universal_id": "email"
      }
    }
  },
  "absence_type_id": {
    "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
    "name": "Absence Type Name",
    "time_off_type_id": 1
  },
  "certificate": {
    "status": "not-required"
  },
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "half_day_start": true,
  "half_day_end": true,
  "comment": "string",
  "origin": "web",
  "status": "approved",
  "created_by": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "approved_at": "1970-01-01T00:00:00Z",
  "breakdowns": [
    {
      "date": "1970-01-01",
      "effective_duration": 60
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|measurement_unit|string|false|none|none|
|effective_duration|integer|true|none|Period effective duration in minutes|
|employee|[ShortEmployee](#schemashortemployee)|true|none|none|
|absence_type_id|[AbsenceType](#schemaabsencetype)|true|none|none|
|certificate|object|true|none|none|
|start|string(date-time)|true|none|none|
|end|string(date-time) \| null|false|none|none|
|half_day_start|boolean|true|none|none|
|half_day_end|boolean|true|none|none|
|comment|string|false|none|none|
|origin|string \| null|true|none|none|
|status|string|true|none|none|
|created_by|integer|true|none|ID of the employee who created the absence period.|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|approved_at|string(date-time) \| null|false|none|none|
|breakdowns|[[AbsencePeriodBreakdown](#schemaabsenceperiodbreakdown)]|true|none|Breakdowns of effective duration by day of absence.|

#### Enumerated Values

|Property|Value|
|---|---|
|measurement_unit|minutes|
|origin|web|
|origin|api|
|origin|mobile|
|origin|slack|
|origin|msteams|

<h2 id="tocS_AbsencePeriodResponse">AbsencePeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodresponse"></a>
<a id="schema_AbsencePeriodResponse"></a>
<a id="tocSabsenceperiodresponse"></a>
<a id="tocsabsenceperiodresponse"></a>

```json
{
  "success": true,
  "data": {
    "type": "TimeOffPeriod",
    "attributes": {
      "id": 1,
      "status": "approved",
      "start_date": "2017-12-27T00:00:00+0100",
      "end_date": "2017-12-79T00:00:00+0100",
      "days_count": 3,
      "half_day_start": false,
      "half_day_end": false,
      "time_off_type": {
        "type": "TimeOffType",
        "attributes": {
          "id": 1,
          "name": "Vacation",
          "category": "offsite_work"
        }
      },
      "employee": {
        "type": "Employee",
        "attributes": {
          "id": {
            "label": 1,
            "value": "id",
            "type": "standard",
            "universal_id": "id"
          },
          "first_name": {
            "label": "First Name",
            "value": "Michael",
            "type": "standard",
            "universal_id": "first_name"
          },
          "last_name": {
            "label": "Last Name",
            "value": "Dou",
            "type": "standard",
            "universal_id": "last_name"
          },
          "email": {
            "label": "Email",
            "value": "michael.dou@personio.de",
            "type": "standard",
            "universal_id": "email"
          }
        }
      },
      "certificate": {
        "status": "not-required"
      },
      "created_at": "2017-01-17T10:32:18+0100",
      "created_by": "API",
      "updated_at": "2017-01-17T10:32:18+0100"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_HourlyAbsencePeriodResponse">HourlyAbsencePeriodResponse</h2>
<!-- backwards compatibility -->
<a id="schemahourlyabsenceperiodresponse"></a>
<a id="schema_HourlyAbsencePeriodResponse"></a>
<a id="tocShourlyabsenceperiodresponse"></a>
<a id="tocshourlyabsenceperiodresponse"></a>

```json
{
  "success": true,
  "data": {
    "type": "AbsencePeriod",
    "attributes": {
      "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
      "measurement_unit": "hours",
      "effective_duration": 16,
      "employee": {
        "type": "Employee",
        "attributes": {
          "id": {
            "label": 1,
            "value": "id",
            "type": "standard",
            "universal_id": "id"
          },
          "first_name": {
            "label": "First Name",
            "value": "Michael",
            "type": "standard",
            "universal_id": "first_name"
          },
          "last_name": {
            "label": "Last Name",
            "value": "Dou",
            "type": "standard",
            "universal_id": "last_name"
          },
          "email": {
            "label": "Email",
            "value": "michael.dou@personio.de",
            "type": "standard",
            "universal_id": "email"
          }
        }
      },
      "absence_type": {
        "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
        "name": "Absence Type Name",
        "time_off_type_id": 1
      },
      "certificate": {
        "status": "not-required"
      },
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z",
      "half_day_start": true,
      "half_day_end": true,
      "comment": "string",
      "origin": "web",
      "status": "approved",
      "timezone": "Europe/Berlin",
      "created_by": 1,
      "created_at": "2017-01-17T10:32:18+0100",
      "updated_at": "2017-01-17T10:32:18+0100",
      "approved_at": "1970-01-01T00:00:00Z",
      "breakdowns": [
        {
          "date": "1970-01-01",
          "effective_duration": 60
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|data|object|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_Absence">Absence</h2>
<!-- backwards compatibility -->
<a id="schemaabsence"></a>
<a id="schema_Absence"></a>
<a id="tocSabsence"></a>
<a id="tocsabsence"></a>

```json
{
  "id": 1,
  "status": "approved",
  "start_date": "2017-12-27T00:00:00+0100",
  "end_date": "2017-12-79T00:00:00+0100",
  "days_count": 3,
  "half_day_start": false,
  "half_day_end": false,
  "time_off_type": {
    "type": "TimeOffType",
    "attributes": {
      "id": 1,
      "name": "Vacation",
      "category": "offsite_work"
    }
  },
  "employee": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": 1,
        "value": "id",
        "type": "standard",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First Name",
        "value": "Michael",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last Name",
        "value": "Dou",
        "type": "standard",
        "universal_id": "last_name"
      },
      "email": {
        "label": "Email",
        "value": "michael.dou@personio.de",
        "type": "standard",
        "universal_id": "email"
      }
    }
  },
  "certificate": {
    "status": "not-required"
  },
  "created_at": "2017-01-17T10:32:18+0100",
  "created_by": "API",
  "updated_at": "2017-01-17T10:32:18+0100"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|status|string|false|none|none|
|start_date|string|false|none|none|
|end_date|string|false|none|none|
|days_count|number|false|none|none|
|half_day_start|boolean|false|none|none|
|half_day_end|boolean|false|none|none|
|time_off_type|object|false|none|none|
|employee|[ShortEmployee](#schemashortemployee)|false|none|none|
|certificate|object|false|none|none|
|created_at|string|false|none|none|
|created_by|string|false|none|API if the origin is api, otherwise returns an admin employee's name who's account is used to create the absence|
|updated_at|string|false|none|none|

<h2 id="tocS_HourlyAbsence">HourlyAbsence</h2>
<!-- backwards compatibility -->
<a id="schemahourlyabsence"></a>
<a id="schema_HourlyAbsence"></a>
<a id="tocShourlyabsence"></a>
<a id="tocshourlyabsence"></a>

```json
{
  "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
  "measurement_unit": "hours",
  "effective_duration": 16,
  "employee": {
    "type": "Employee",
    "attributes": {
      "id": {
        "label": 1,
        "value": "id",
        "type": "standard",
        "universal_id": "id"
      },
      "first_name": {
        "label": "First Name",
        "value": "Michael",
        "type": "standard",
        "universal_id": "first_name"
      },
      "last_name": {
        "label": "Last Name",
        "value": "Dou",
        "type": "standard",
        "universal_id": "last_name"
      },
      "email": {
        "label": "Email",
        "value": "michael.dou@personio.de",
        "type": "standard",
        "universal_id": "email"
      }
    }
  },
  "absence_type": {
    "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
    "name": "Absence Type Name",
    "time_off_type_id": 1
  },
  "certificate": {
    "status": "not-required"
  },
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "half_day_start": true,
  "half_day_end": true,
  "comment": "string",
  "origin": "web",
  "status": "approved",
  "timezone": "Europe/Berlin",
  "created_by": 1,
  "created_at": "2017-01-17T10:32:18+0100",
  "updated_at": "2017-01-17T10:32:18+0100",
  "approved_at": "1970-01-01T00:00:00Z",
  "breakdowns": [
    {
      "date": "1970-01-01",
      "effective_duration": 60
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|measurement_unit|string|false|none|none|
|effective_duration|integer|false|none|Period effective duration in minutes|
|employee|[ShortEmployee](#schemashortemployee)|false|none|none|
|absence_type|[AbsenceType](#schemaabsencetype)|false|none|none|
|certificate|object|false|none|none|
|start|string(date-time)|false|none|none|
|end|string(date-time) \| null|false|none|none|
|half_day_start|boolean|false|none|none|
|half_day_end|boolean|false|none|none|
|comment|string|false|none|none|
|origin|string|false|none|none|
|status|string|false|none|none|
|timezone|string|false|none|none|
|created_by|integer|false|none|ID of the employee who created the absence period.|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|approved_at|string(date-time) \| null|false|none|none|
|breakdowns|[[AbsencePeriodBreakdown](#schemaabsenceperiodbreakdown)]|false|none|Breakdowns of effective duration by day of absence.|

<h2 id="tocS_AbsenceType">AbsenceType</h2>
<!-- backwards compatibility -->
<a id="schemaabsencetype"></a>
<a id="schema_AbsenceType"></a>
<a id="tocSabsencetype"></a>
<a id="tocsabsencetype"></a>

```json
{
  "id": "61fe126b-a7b3-449a-b5ee-3865a6fcc546",
  "name": "Absence Type Name",
  "time_off_type_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|false|none|none|
|time_off_type_id|integer|false|none|none|

<h2 id="tocS_AbsencePeriodBreakdown">AbsencePeriodBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodbreakdown"></a>
<a id="schema_AbsencePeriodBreakdown"></a>
<a id="tocSabsenceperiodbreakdown"></a>
<a id="tocsabsenceperiodbreakdown"></a>

```json
{
  "date": "1970-01-01",
  "effective_duration": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|true|none|none|
|effective_duration|integer|true|none|Number representing the value of duration in minutes.|

<h2 id="tocS_ShortEmployee">ShortEmployee</h2>
<!-- backwards compatibility -->
<a id="schemashortemployee"></a>
<a id="schema_ShortEmployee"></a>
<a id="tocSshortemployee"></a>
<a id="tocsshortemployee"></a>

```json
{
  "type": "Employee",
  "attributes": {
    "id": {
      "label": 1,
      "value": "id",
      "type": "standard",
      "universal_id": "id"
    },
    "first_name": {
      "label": "First Name",
      "value": "Michael",
      "type": "standard",
      "universal_id": "first_name"
    },
    "last_name": {
      "label": "Last Name",
      "value": "Dou",
      "type": "standard",
      "universal_id": "last_name"
    },
    "email": {
      "label": "Email",
      "value": "michael.dou@personio.de",
      "type": "standard",
      "universal_id": "email"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_TypeEnum">TypeEnum</h2>
<!-- backwards compatibility -->
<a id="schematypeenum"></a>
<a id="schema_TypeEnum"></a>
<a id="tocStypeenum"></a>
<a id="tocstypeenum"></a>

```json
"standard"
```

<h2 id="tocS_PublicListReportsResponse">PublicListReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistreportsresponse"></a>
<a id="schema_PublicListReportsResponse"></a>
<a id="tocSpubliclistreportsresponse"></a>
<a id="tocspubliclistreportsresponse"></a>

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": [
    {
      "type": "Report",
      "attributes": {
        "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
        "name": "Employee vacations past month",
        "description": "Shows vacations of all employees that were taken past month",
        "author_first_name": "Robert",
        "author_last_name": "Sirano",
        "type": "point_in_time",
        "status": "up_to_date",
        "start_date": "2022-09-01",
        "end_date": "2022-09-30",
        "created_at": "2022-04-10T17:32:28Z",
        "updated_at": "2022-04-10T17:32:28Z",
        "data_refreshed_at": "2022-04-10T17:32:28Z",
        "columns": [
          "string"
        ],
        "filters": [
          {
            "column": "office_id",
            "comparison": "eq",
            "value": 1
          }
        ],
        "period_type": "fixed"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|metadata|[PublicReportMetaData](#schemapublicreportmetadata)|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[[PublicReportData](#schemapublicreportdata)]|false|none|none|

<h2 id="tocS_PublicReportResponse">PublicReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportresponse"></a>
<a id="schema_PublicReportResponse"></a>
<a id="tocSpublicreportresponse"></a>
<a id="tocspublicreportresponse"></a>

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": [
    {
      "type": "Report",
      "attributes": {
        "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
        "name": "Employee vacations at a specific point in time",
        "description": "Shows vacations of all employees on a specific date",
        "author_first_name": "Robert",
        "author_last_name": "Sirano",
        "type": "point_in_time",
        "status": "created",
        "start_date": "2022-04-10",
        "end_date": "2022-04-10",
        "created_at": "2022-04-10T17:32:28Z",
        "updated_at": "2022-04-10T17:32:28Z",
        "data_refreshed_at": "2022-04-10T17:32:28Z",
        "columns": [
          "string"
        ],
        "filters": [
          {
            "column": "office_id",
            "comparison": "eq",
            "value": 1
          }
        ],
        "period_type": "fixed",
        "items": [
          {
            "employee_id": 17,
            "attributes": [
              {
                "attribute_id": "first_name",
                "data_type": "TEXT",
                "value": "Robert",
                "employee_id": 17
              }
            ]
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|metadata|[PublicReportMetaData](#schemapublicreportmetadata)|false|none|none|
|offset|integer|false|none|**Deprecated.**|
|limit|integer|false|none|none|
|data|[[PublicReportItemsData](#schemapublicreportitemsdata)]|false|none|none|

<h2 id="tocS_PublicListColumnsResponse">PublicListColumnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistcolumnsresponse"></a>
<a id="schema_PublicListColumnsResponse"></a>
<a id="tocSpubliclistcolumnsresponse"></a>
<a id="tocspubliclistcolumnsresponse"></a>

```json
{
  "success": true,
  "metadata": {
    "total_elements": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "offset": 0,
  "limit": 0,
  "data": {
    "type": "Column",
    "attributes": [
      {
        "attribute_id": "first_name",
        "human_readable": "First Name",
        "data_type": "TEXT"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|metadata|[PublicReportMetaData](#schemapublicreportmetadata)|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|data|[PublicColumnData](#schemapubliccolumndata)|false|none|none|

<h2 id="tocS_PublicReportMetaData">PublicReportMetaData</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportmetadata"></a>
<a id="schema_PublicReportMetaData"></a>
<a id="tocSpublicreportmetadata"></a>
<a id="tocspublicreportmetadata"></a>

```json
{
  "total_elements": 0,
  "current_page": 0,
  "total_pages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_elements|integer|false|none|none|
|current_page|integer|false|none|none|
|total_pages|integer|false|none|none|

<h2 id="tocS_PublicReportData">PublicReportData</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportdata"></a>
<a id="schema_PublicReportData"></a>
<a id="tocSpublicreportdata"></a>
<a id="tocspublicreportdata"></a>

```json
{
  "type": "Report",
  "attributes": {
    "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
    "name": "Employee vacations past month",
    "description": "Shows vacations of all employees that were taken past month",
    "author_first_name": "Robert",
    "author_last_name": "Sirano",
    "type": "point_in_time",
    "status": "up_to_date",
    "start_date": "2022-09-01",
    "end_date": "2022-09-30",
    "created_at": "2022-04-10T17:32:28Z",
    "updated_at": "2022-04-10T17:32:28Z",
    "data_refreshed_at": "2022-04-10T17:32:28Z",
    "columns": [
      "string"
    ],
    "filters": [
      {
        "column": "office_id",
        "comparison": "eq",
        "value": 1
      }
    ],
    "period_type": "fixed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|attributes|[PublicReportAttributes](#schemapublicreportattributes)|false|none|none|

<h2 id="tocS_PublicReportItemsData">PublicReportItemsData</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportitemsdata"></a>
<a id="schema_PublicReportItemsData"></a>
<a id="tocSpublicreportitemsdata"></a>
<a id="tocspublicreportitemsdata"></a>

```json
{
  "type": "Report",
  "attributes": {
    "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
    "name": "Employee vacations at a specific point in time",
    "description": "Shows vacations of all employees on a specific date",
    "author_first_name": "Robert",
    "author_last_name": "Sirano",
    "type": "point_in_time",
    "status": "created",
    "start_date": "2022-04-10",
    "end_date": "2022-04-10",
    "created_at": "2022-04-10T17:32:28Z",
    "updated_at": "2022-04-10T17:32:28Z",
    "data_refreshed_at": "2022-04-10T17:32:28Z",
    "columns": [
      "string"
    ],
    "filters": [
      {
        "column": "office_id",
        "comparison": "eq",
        "value": 1
      }
    ],
    "period_type": "fixed",
    "items": [
      {
        "employee_id": 17,
        "attributes": [
          {
            "attribute_id": "first_name",
            "data_type": "TEXT",
            "value": "Robert",
            "employee_id": 17
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
|type|string|false|none|none|
|attributes|[PublicReportItemsAttributes](#schemapublicreportitemsattributes) \| [PublicTimeframeReportItemsAttributes](#schemapublictimeframereportitemsattributes) \| [PublicHistoricalReportItemsAttributes](#schemapublichistoricalreportitemsattributes)|false|none|none|

<h2 id="tocS_PublicColumnData">PublicColumnData</h2>
<!-- backwards compatibility -->
<a id="schemapubliccolumndata"></a>
<a id="schema_PublicColumnData"></a>
<a id="tocSpubliccolumndata"></a>
<a id="tocspubliccolumndata"></a>

```json
{
  "type": "Column",
  "attributes": [
    {
      "attribute_id": "first_name",
      "human_readable": "First Name",
      "data_type": "TEXT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|attributes|[[PublicColumnAttributes](#schemapubliccolumnattributes)]|false|none|none|

<h2 id="tocS_PublicColumnAttributes">PublicColumnAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapubliccolumnattributes"></a>
<a id="schema_PublicColumnAttributes"></a>
<a id="tocSpubliccolumnattributes"></a>
<a id="tocspubliccolumnattributes"></a>

```json
{
  "attribute_id": "first_name",
  "human_readable": "First Name",
  "data_type": "TEXT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|human_readable|string|false|none|none|
|data_type|string|false|none|none|

<h2 id="tocS_PublicReportAttributes">PublicReportAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportattributes"></a>
<a id="schema_PublicReportAttributes"></a>
<a id="tocSpublicreportattributes"></a>
<a id="tocspublicreportattributes"></a>

```json
{
  "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
  "name": "Employee vacations past month",
  "description": "Shows vacations of all employees that were taken past month",
  "author_first_name": "Robert",
  "author_last_name": "Sirano",
  "type": "point_in_time",
  "status": "up_to_date",
  "start_date": "2022-09-01",
  "end_date": "2022-09-30",
  "created_at": "2022-04-10T17:32:28Z",
  "updated_at": "2022-04-10T17:32:28Z",
  "data_refreshed_at": "2022-04-10T17:32:28Z",
  "columns": [
    "string"
  ],
  "filters": [
    {
      "column": "office_id",
      "comparison": "eq",
      "value": 1
    }
  ],
  "period_type": "fixed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|author_first_name|string|false|none|Report author|
|author_last_name|string|false|none|Report author|
|type|string|false|none|none|
|status|string|false|none|none|
|start_date|string(date)|false|none|none|
|end_date|string(date)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|data_refreshed_at|string(date-time)|false|none|none|
|columns|[string]|false|none|none|
|filters|[object]|false|none|none|
|period_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|point_in_time|
|type|historical_data|
|type|timeframe|
|status|up_to_date|
|status|updating|
|status|update_failed|
|period_type|fixed|
|period_type|today|
|period_type|last_day_of_this_month|
|period_type|this_year|
|period_type|last_month|
|period_type|last_thirty_days|
|period_type|this_month|
|period_type|year_to_date|

<h2 id="tocS_PublicReportItemsAttributes">PublicReportItemsAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapublicreportitemsattributes"></a>
<a id="schema_PublicReportItemsAttributes"></a>
<a id="tocSpublicreportitemsattributes"></a>
<a id="tocspublicreportitemsattributes"></a>

```json
{
  "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
  "name": "Employee vacations at a specific point in time",
  "description": "Shows vacations of all employees on a specific date",
  "author_first_name": "Robert",
  "author_last_name": "Sirano",
  "type": "point_in_time",
  "status": "created",
  "start_date": "2022-04-10",
  "end_date": "2022-04-10",
  "created_at": "2022-04-10T17:32:28Z",
  "updated_at": "2022-04-10T17:32:28Z",
  "data_refreshed_at": "2022-04-10T17:32:28Z",
  "columns": [
    "string"
  ],
  "filters": [
    {
      "column": "office_id",
      "comparison": "eq",
      "value": 1
    }
  ],
  "period_type": "fixed",
  "items": [
    {
      "employee_id": 17,
      "attributes": [
        {
          "attribute_id": "first_name",
          "data_type": "TEXT",
          "value": "Robert",
          "employee_id": 17
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|author_first_name|string|false|none|Report author|
|author_last_name|string|false|none|Report author|
|type|string|false|none|none|
|status|string|false|none|none|
|start_date|string(date-time)|false|none|none|
|end_date|string(date-time)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|data_refreshed_at|string(date-time)|false|none|none|
|columns|[string]|false|none|none|
|filters|[object]|false|none|none|
|period_type|string|false|none|none|
|items|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|point_in_time|
|status|up_to_date|
|status|updating|
|status|update_failed|
|period_type|fixed|
|period_type|today|
|period_type|yesterday|
|period_type|last_day_of_this_week|
|period_type|last_day_of_last_week|
|period_type|last_day_of_this_month|
|period_type|last_day_of_last_month|
|period_type|last_day_of_this_quarter|
|period_type|last_day_of_last_quarter|
|period_type|last_day_of_this_year|
|period_type|last_day_of_last_year|

<h2 id="tocS_PublicTimeframeReportItemsAttributes">PublicTimeframeReportItemsAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapublictimeframereportitemsattributes"></a>
<a id="schema_PublicTimeframeReportItemsAttributes"></a>
<a id="tocSpublictimeframereportitemsattributes"></a>
<a id="tocspublictimeframereportitemsattributes"></a>

```json
{
  "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
  "name": "Employee vacations past month",
  "description": "Shows vacations of all employees that were taken past month",
  "author_first_name": "Robert",
  "author_last_name": "Sirano",
  "type": "timeframe",
  "status": "created",
  "start_date": "2022-04-01",
  "end_date": "2022-04-10",
  "created_at": "2022-04-10T17:32:28Z",
  "updated_at": "2022-04-10T17:32:28Z",
  "data_refreshed_at": "2022-04-10T17:32:28Z",
  "columns": [
    "string"
  ],
  "filters": [
    {
      "column": "office_id",
      "comparison": "eq",
      "value": 1
    }
  ],
  "period_type": "fixed",
  "items": [
    {
      "employee_id": 17,
      "attributes": [
        {
          "attribute_id": "first_name",
          "data_type": "TEXT",
          "value": "Robert",
          "employee_id": 17
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|author_first_name|string|false|none|Report author|
|author_last_name|string|false|none|Report author|
|type|string|false|none|none|
|status|string|false|none|none|
|start_date|string(date-time)|false|none|none|
|end_date|string(date-time)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|data_refreshed_at|string(date-time)|false|none|none|
|columns|[string]|false|none|none|
|filters|[object]|false|none|none|
|period_type|string|false|none|none|
|items|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|timeframe|
|status|up_to_date|
|status|updating|
|status|update_failed|
|period_type|fixed|
|period_type|today|
|period_type|yesterday|
|period_type|this_week|
|period_type|last_week|
|period_type|this_month|
|period_type|last_month|
|period_type|last_thirty_days|
|period_type|next_month|
|period_type|this_quarter|
|period_type|last_quarter|
|period_type|this_year|
|period_type|year_to_date|
|period_type|last_year|
|period_type|next_year|

<h2 id="tocS_PublicHistoricalReportItemsAttributes">PublicHistoricalReportItemsAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapublichistoricalreportitemsattributes"></a>
<a id="schema_PublicHistoricalReportItemsAttributes"></a>
<a id="tocSpublichistoricalreportitemsattributes"></a>
<a id="tocspublichistoricalreportitemsattributes"></a>

```json
{
  "id": "eb7482f3-2323-43e2-87ed-99d2399e8e22",
  "name": "Department changes in the past year",
  "description": "Shows department changes of all employees over the past year",
  "author_first_name": "Robert",
  "author_last_name": "Sirano",
  "type": "historical_data",
  "status": "created",
  "start_date": "2022-01-01",
  "end_date": "2022-09-30",
  "created_at": "2022-04-10T17:32:28Z",
  "updated_at": "2022-04-10T17:32:28Z",
  "data_refreshed_at": "2022-04-10T17:32:28Z",
  "columns": [
    "string"
  ],
  "filters": [
    {
      "column": "office_id",
      "comparison": "eq",
      "value": 1
    }
  ],
  "period_type": "fixed",
  "items": [
    {
      "employee_id": 17,
      "historical_attributes": [
        {
          "attribute_id": "first_name",
          "data_type": "TEXT",
          "value": "Robert",
          "employee_id": 17,
          "effective_date": "2021-01-01"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|author_first_name|string|false|none|Report author|
|author_last_name|string|false|none|Report author|
|type|string|false|none|none|
|status|string|false|none|none|
|start_date|string(date-time)|false|none|none|
|end_date|string(date-time)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|data_refreshed_at|string(date-time)|false|none|none|
|columns|[string]|false|none|none|
|filters|[object]|false|none|none|
|period_type|string|false|none|none|
|items|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|historical_data|
|status|up_to_date|
|status|updating|
|status|update_failed|
|period_type|fixed|
|period_type|today|
|period_type|yesterday|
|period_type|this_week|
|period_type|last_week|
|period_type|this_month|
|period_type|last_month|
|period_type|last_thirty_days|
|period_type|next_month|
|period_type|this_quarter|
|period_type|last_quarter|
|period_type|this_year|
|period_type|year_to_date|
|period_type|last_year|
|period_type|next_year|

<h2 id="tocS_DefaultAttribute">DefaultAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadefaultattribute"></a>
<a id="schema_DefaultAttribute"></a>
<a id="tocSdefaultattribute"></a>
<a id="tocsdefaultattribute"></a>

```json
{
  "attribute_id": "first_name",
  "data_type": "TEXT",
  "value": "Robert",
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|value|string|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|TEXT|

<h2 id="tocS_EntityAttribute">EntityAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaentityattribute"></a>
<a id="schema_EntityAttribute"></a>
<a id="tocSentityattribute"></a>
<a id="tocsentityattribute"></a>

```json
{
  "attribute_id": "department",
  "entity_id": 1,
  "data_type": "ENTITY",
  "value": "IT",
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|entity_id|string|false|none|none|
|data_type|string|false|none|none|
|value|string|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|ENTITY|

<h2 id="tocS_CostCenterAttribute">CostCenterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacostcenterattribute"></a>
<a id="schema_CostCenterAttribute"></a>
<a id="tocScostcenterattribute"></a>
<a id="tocscostcenterattribute"></a>

```json
{
  "attribute_id": "cost_center",
  "data_type": "COST_CENTER",
  "employee_id": 17,
  "cost_centers": [
    {
      "cost_center_id": 1,
      "value": "Test Center",
      "weight": "100%"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|employee_id|integer|false|none|none|
|cost_centers|[[CostCenter](#schemacostcenter)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|COST_CENTER|

<h2 id="tocS_CostCenter">CostCenter</h2>
<!-- backwards compatibility -->
<a id="schemacostcenter"></a>
<a id="schema_CostCenter"></a>
<a id="tocScostcenter"></a>
<a id="tocscostcenter"></a>

```json
{
  "cost_center_id": 1,
  "value": "Test Center",
  "weight": "100%"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost_center_id|string|false|none|none|
|value|string|false|none|none|
|weight|string|false|none|none|

<h2 id="tocS_AbsenceOverviewAttribute">AbsenceOverviewAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceoverviewattribute"></a>
<a id="schema_AbsenceOverviewAttribute"></a>
<a id="tocSabsenceoverviewattribute"></a>
<a id="tocsabsenceoverviewattribute"></a>

```json
{
  "attribute_id": "absence_123",
  "data_type": "ABSENCE_OVERVIEW",
  "start_date": "2022-03-01",
  "end_date": "2022-03-03",
  "duration_days": 2,
  "duration_hours": 5,
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|start_date|string(date)|false|none|none|
|end_date|string(date)|false|none|none|
|duration_days|string|false|none|none|
|duration_hours|string|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|ABSENCE_OVERVIEW|

<h2 id="tocS_AbsencePeriodAttribute">AbsencePeriodAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaabsenceperiodattribute"></a>
<a id="schema_AbsencePeriodAttribute"></a>
<a id="tocSabsenceperiodattribute"></a>
<a id="tocsabsenceperiodattribute"></a>

```json
{
  "attribute_id": "absence_123:periods",
  "data_type": "ABSENCE_PERIOD",
  "start_date": "2022-03-01",
  "end_date": "2022-03-03",
  "half_day_at_start": true,
  "half_day_at_end": true,
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|start_date|string(date)|false|none|none|
|end_date|string(date)|false|none|none|
|half_day_at_start|boolean|false|none|none|
|half_day_at_end|boolean|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|ABSENCE_PERIOD|

<h2 id="tocS_DurationAttribute">DurationAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadurationattribute"></a>
<a id="schema_DurationAttribute"></a>
<a id="tocSdurationattribute"></a>
<a id="tocsdurationattribute"></a>

```json
{
  "attribute_id": "attendance_contractual_target_hours",
  "data_type": "DURATION",
  "duration": 10,
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|duration|integer|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|DURATION|

<h2 id="tocS_PerformanceTargetAttribute">PerformanceTargetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetargetattribute"></a>
<a id="schema_PerformanceTargetAttribute"></a>
<a id="tocSperformancetargetattribute"></a>
<a id="tocsperformancetargetattribute"></a>

```json
{
  "attribute_id": "performance_target_name",
  "data_type": "PERFORMANCE_TARGET",
  "employee_id": 17,
  "performance_targets": [
    {
      "performance_target_id": 1,
      "performance_target_value": 20
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|employee_id|integer|false|none|none|
|performance_targets|[[PerformanceTarget](#schemaperformancetarget)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|PERFORMANCE_TARGET|

<h2 id="tocS_PerformanceTarget">PerformanceTarget</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetarget"></a>
<a id="schema_PerformanceTarget"></a>
<a id="tocSperformancetarget"></a>
<a id="tocsperformancetarget"></a>

```json
{
  "performance_target_id": 1,
  "performance_target_value": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|performance_target_id|string|false|none|none|
|performance_target_value|string|false|none|none|

<h2 id="tocS_PerformanceKpiAttribute">PerformanceKpiAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaperformancekpiattribute"></a>
<a id="schema_PerformanceKpiAttribute"></a>
<a id="tocSperformancekpiattribute"></a>
<a id="tocsperformancekpiattribute"></a>

```json
{
  "attribute_id": "string",
  "data_type": "PERFORMANCE_KPI",
  "employee_id": 17,
  "performance_target_kpis": [
    {
      "performance_target_id": 1,
      "performance_target_value": 20
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|employee_id|integer|false|none|none|
|performance_target_kpis|[[PerformanceTarget](#schemaperformancetarget)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|PERFORMANCE_KPI|

<h2 id="tocS_PerformanceTargetKpi">PerformanceTargetKpi</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetargetkpi"></a>
<a id="schema_PerformanceTargetKpi"></a>
<a id="tocSperformancetargetkpi"></a>
<a id="tocsperformancetargetkpi"></a>

```json
{
  "performance_target_id": "id_123",
  "performance_kpis": [
    {
      "performance_kpi_id": "kpi_123",
      "performance_kpi_value": 14
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|performance_target_id|string|false|none|none|
|performance_kpis|[[PerformanceKpi](#schemaperformancekpi)]|false|none|none|

<h2 id="tocS_PerformanceKpi">PerformanceKpi</h2>
<!-- backwards compatibility -->
<a id="schemaperformancekpi"></a>
<a id="schema_PerformanceKpi"></a>
<a id="tocSperformancekpi"></a>
<a id="tocsperformancekpi"></a>

```json
{
  "performance_kpi_id": "kpi_123",
  "performance_kpi_value": 14
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|performance_kpi_id|string|false|none|none|
|performance_kpi_value|string|false|none|none|

<h2 id="tocS_SalaryAttribute">SalaryAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasalaryattribute"></a>
<a id="schema_SalaryAttribute"></a>
<a id="tocSsalaryattribute"></a>
<a id="tocssalaryattribute"></a>

```json
{
  "attribute_id": "salary_123",
  "data_type": "SALARY",
  "amount": 12.2,
  "currency_symbol": "$",
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|amount|string|false|none|none|
|currency_symbol|string|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|SALARY|

<h2 id="tocS_CompensationAttribute">CompensationAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacompensationattribute"></a>
<a id="schema_CompensationAttribute"></a>
<a id="tocScompensationattribute"></a>
<a id="tocscompensationattribute"></a>

```json
{
  "attribute_id": "ABCXXX",
  "data_type": "COMPENSATION",
  "amount": 12.2,
  "currency_code": "USD",
  "currency_symbol": "$",
  "overtime_hours": 12,
  "bonus_type": "MAX",
  "employee_id": 17
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|amount|string|false|none|none|
|currency_code|string|false|none|none|
|currency_symbol|string|false|none|none|
|overtime_hours|string|false|none|none|
|bonus_type|string|false|none|none|
|employee_id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|COMPENSATION|

<h2 id="tocS_DefaultHistoricalAttribute">DefaultHistoricalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadefaulthistoricalattribute"></a>
<a id="schema_DefaultHistoricalAttribute"></a>
<a id="tocSdefaulthistoricalattribute"></a>
<a id="tocsdefaulthistoricalattribute"></a>

```json
{
  "attribute_id": "first_name",
  "data_type": "TEXT",
  "value": "Robert",
  "employee_id": 17,
  "effective_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|value|string|false|none|none|
|employee_id|integer|false|none|none|
|effective_date|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|TEXT|

<h2 id="tocS_DurationHistoricalAttribute">DurationHistoricalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadurationhistoricalattribute"></a>
<a id="schema_DurationHistoricalAttribute"></a>
<a id="tocSdurationhistoricalattribute"></a>
<a id="tocsdurationhistoricalattribute"></a>

```json
{
  "attribute_id": "attendance_contractual_target_hours",
  "data_type": "DURATION",
  "duration": 10,
  "employee_id": 17,
  "effective_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|duration|integer|false|none|none|
|employee_id|integer|false|none|none|
|effective_date|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|DURATION|

<h2 id="tocS_EntityHistoricalAttribute">EntityHistoricalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaentityhistoricalattribute"></a>
<a id="schema_EntityHistoricalAttribute"></a>
<a id="tocSentityhistoricalattribute"></a>
<a id="tocsentityhistoricalattribute"></a>

```json
{
  "attribute_id": "department",
  "entity_id": 1,
  "data_type": "ENTITY",
  "value": "IT",
  "employee_id": 17,
  "effective_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|entity_id|string|false|none|none|
|data_type|string|false|none|none|
|value|string|false|none|none|
|employee_id|integer|false|none|none|
|effective_date|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|ENTITY|

<h2 id="tocS_CostCenterHistoricalAttribute">CostCenterHistoricalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacostcenterhistoricalattribute"></a>
<a id="schema_CostCenterHistoricalAttribute"></a>
<a id="tocScostcenterhistoricalattribute"></a>
<a id="tocscostcenterhistoricalattribute"></a>

```json
{
  "attribute_id": "cost_center",
  "data_type": "COST_CENTER",
  "employee_id": 17,
  "cost_centers": [
    {
      "cost_center_id": 1,
      "value": "Test Center",
      "weight": "100%"
    }
  ],
  "effective_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|employee_id|integer|false|none|none|
|cost_centers|[[CostCenter](#schemacostcenter)]|false|none|none|
|effective_date|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|COST_CENTER|

<h2 id="tocS_SalaryHistoricalAttribute">SalaryHistoricalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasalaryhistoricalattribute"></a>
<a id="schema_SalaryHistoricalAttribute"></a>
<a id="tocSsalaryhistoricalattribute"></a>
<a id="tocssalaryhistoricalattribute"></a>

```json
{
  "attribute_id": "salary_123",
  "data_type": "SALARY",
  "amount": 12.2,
  "currency_symbol": "$",
  "employee_id": 17,
  "effective_date": "2021-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|string|false|none|none|
|data_type|string|false|none|none|
|amount|string|false|none|none|
|currency_symbol|string|false|none|none|
|employee_id|integer|false|none|none|
|effective_date|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|SALARY|

<h2 id="tocS_PublicAPIException">PublicAPIException</h2>
<!-- backwards compatibility -->
<a id="schemapublicapiexception"></a>
<a id="schema_PublicAPIException"></a>
<a id="tocSpublicapiexception"></a>
<a id="tocspublicapiexception"></a>

```json
[
  {
    "status": 500,
    "trace_id": "ABCXXX",
    "timestamp": "2020-01-01T00:00:00Z",
    "errors": [
      {
        "title": "Not Found",
        "details": "Report not found",
        "type": "search",
        "_meta": [
          {
            "field": "ID",
            "description": "Report ID not found"
          }
        ]
      }
    ]
  }
]
```

<h2 id="tocS_CustomReportsErrorResponse">CustomReportsErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomreportserrorresponse"></a>
<a id="schema_CustomReportsErrorResponse"></a>
<a id="tocScustomreportserrorresponse"></a>
<a id="tocscustomreportserrorresponse"></a>

```json
{
  "status": 500,
  "trace_id": "ABCXXX",
  "timestamp": "2020-01-01T00:00:00Z",
  "errors": [
    {
      "title": "Not Found",
      "details": "Report not found",
      "type": "search",
      "_meta": [
        {
          "field": "ID",
          "description": "Report ID not found"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|none|
|trace_id|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|errors|[[ErrorDetails](#schemaerrordetails)]|false|none|none|

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
{
  "title": "Not Found",
  "details": "Report not found",
  "type": "search",
  "_meta": [
    {
      "field": "ID",
      "description": "Report ID not found"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|details|string|false|none|none|
|type|string|false|none|none|
|_meta|[[ErrorMeta](#schemaerrormeta)]|false|none|none|

<h2 id="tocS_ErrorMeta">ErrorMeta</h2>
<!-- backwards compatibility -->
<a id="schemaerrormeta"></a>
<a id="schema_ErrorMeta"></a>
<a id="tocSerrormeta"></a>
<a id="tocserrormeta"></a>

```json
{
  "field": "ID",
  "description": "Report ID not found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|description|string|false|none|none|
