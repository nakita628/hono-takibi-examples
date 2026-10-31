<h1 id="data-api">Data API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Serves the Clever Data API

Base URLs:

* <a href="https://api.clever.com/v1.2">https://api.clever.com/v1.2</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://clever.com/oauth/authorize](https://clever.com/oauth/authorize)
    - Token URL = [https://clever.com/oauth/tokens](https://clever.com/oauth/tokens)

<h1 id="data-api-contacts">Contacts</h1>

## getContacts

<a id="opIdgetContacts"></a>

> Code samples

```bash
curl https://example.com/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts`

Returns a list of student contacts

<h3 id="getcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "district": "string",
        "email": "string",
        "id": "string",
        "name": "string",
        "phone": "string",
        "phone_type": "string",
        "relationship": "string",
        "sis_id": "string",
        "student": "string",
        "type": "string"
      }
    }
  ]
}
```

<h3 id="getcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentContactsResponse](#schemastudentcontactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getContact

<a id="opIdgetContact"></a>

> Code samples

```bash
curl https://example.com/contacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}`

Returns a specific student contact

<h3 id="getcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "district": "string",
    "email": "string",
    "id": "string",
    "name": "string",
    "phone": "string",
    "phone_type": "string",
    "relationship": "string",
    "sis_id": "string",
    "student": "string",
    "type": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentContactResponse](#schemastudentcontactresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictForStudentContact

<a id="opIdgetDistrictForStudentContact"></a>

> Code samples

```bash
curl https://example.com/contacts/string/district \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}/district`

Returns the district for a student contact

<h3 id="getdistrictforstudentcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictforstudentcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudentForContact

<a id="opIdgetStudentForContact"></a>

> Code samples

```bash
curl https://example.com/contacts/string/student \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}/student`

Returns the student for a student contact

<h3 id="getstudentforcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "dob": "string",
    "ell_status": "Y",
    "email": "string",
    "gender": "M",
    "grade": "1",
    "graduation_year": "string",
    "hispanic_ethnicity": "Y",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "race": "Caucasian",
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "student_number": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudentforcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentResponse](#schemastudentresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-district-admins">District Admins</h1>

## getDistrictAdmins

<a id="opIdgetDistrictAdmins"></a>

> Code samples

```bash
curl https://example.com/district_admins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /district_admins`

Returns a list of district admins

<h3 id="getdistrictadmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|show_links|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "district": "string",
      "email": "string",
      "id": "string",
      "name": {
        "first": "string",
        "last": "string",
        "middle": "string"
      },
      "title": "string"
    }
  ]
}
```

<h3 id="getdistrictadmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictAdminsResponse](#schemadistrictadminsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictAdmin

<a id="opIdgetDistrictAdmin"></a>

> Code samples

```bash
curl https://example.com/district_admins/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /district_admins/{id}`

Returns a specific district admin

<h3 id="getdistrictadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "district": "string",
    "email": "string",
    "id": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "title": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictAdminResponse](#schemadistrictadminresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-districts">Districts</h1>

## getDistricts

<a id="opIdgetDistricts"></a>

> Code samples

```bash
curl https://example.com/districts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts`

Returns a list of districts. In practice this will only return the one district associated with the bearer token

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "id": "string",
        "mdr_number": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="getdistricts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictsResponse](#schemadistrictsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrict

<a id="opIdgetDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}`

Returns a specific district

<h3 id="getdistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|include|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getAdminsForDistrict

<a id="opIdgetAdminsForDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string/admins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/admins`

Returns the admins for a district

<h3 id="getadminsfordistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "district": "string",
      "email": "string",
      "id": "string",
      "name": {
        "first": "string",
        "last": "string",
        "middle": "string"
      },
      "title": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getadminsfordistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictAdminsResponse](#schemadistrictadminsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolsForDistrict

<a id="opIdgetSchoolsForDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string/schools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/schools`

Returns the schools for a district

<h3 id="getschoolsfordistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "district": "string",
        "high_grade": "1",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "low_grade": "1",
        "mdr_number": "string",
        "name": "string",
        "nces_id": "string",
        "phone": "string",
        "principal": {
          "email": "string",
          "name": "string"
        },
        "school_number": "string",
        "sis_id": "string",
        "state_id": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschoolsfordistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolsResponse](#schemaschoolsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSectionsForDistrict

<a id="opIdgetSectionsForDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/sections`

Returns the sections for a district

<h3 id="getsectionsfordistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getsectionsfordistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionsResponse](#schemasectionsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictStatus

<a id="opIdgetDistrictStatus"></a>

> Code samples

```bash
curl https://example.com/districts/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/status`

Returns the status of the district

<h3 id="getdistrictstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "error": "string",
        "id": "string",
        "instant_login": true,
        "last_sync": "string",
        "launch_date": "string",
        "pause_end": "string",
        "pause_start": "string",
        "sis_type": "string",
        "state": "running"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictStatusResponses](#schemadistrictstatusresponses)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudentsForDistrict

<a id="opIdgetStudentsForDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/students`

Returns the students for a district

<h3 id="getstudentsfordistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudentsfordistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentsResponse](#schemastudentsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeachersForDistrict

<a id="opIdgetTeachersForDistrict"></a>

> Code samples

```bash
curl https://example.com/districts/string/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /districts/{id}/teachers`

Returns the teachers for a district

<h3 id="getteachersfordistrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteachersfordistrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeachersResponse](#schemateachersresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-school-admins">School Admins</h1>

## getSchoolAdmins

<a id="opIdgetSchoolAdmins"></a>

> Code samples

```bash
curl https://example.com/school_admins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /school_admins`

Returns a list of school admins

<h3 id="getschooladmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "schools": [
          "string"
        ],
        "staff_id": "string",
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getschooladmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolAdminsResponse](#schemaschooladminsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolAdmin

<a id="opIdgetSchoolAdmin"></a>

> Code samples

```bash
curl https://example.com/school_admins/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /school_admins/{id}`

Returns a specific school admin

<h3 id="getschooladmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|include|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "email": "string",
    "id": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "schools": [
      "string"
    ],
    "staff_id": "string",
    "title": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschooladmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolAdminResponse](#schemaschooladminresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolsForSchoolAdmin

<a id="opIdgetSchoolsForSchoolAdmin"></a>

> Code samples

```bash
curl https://example.com/school_admins/string/schools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /school_admins/{id}/schools`

Returns the schools for a school admin

<h3 id="getschoolsforschooladmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "district": "string",
        "high_grade": "1",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "low_grade": "1",
        "mdr_number": "string",
        "name": "string",
        "nces_id": "string",
        "phone": "string",
        "principal": {
          "email": "string",
          "name": "string"
        },
        "school_number": "string",
        "sis_id": "string",
        "state_id": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschoolsforschooladmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolsResponse](#schemaschoolsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-schools">Schools</h1>

## getSchools

<a id="opIdgetSchools"></a>

> Code samples

```bash
curl https://example.com/schools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools`

Returns a list of schools

<h3 id="getschools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "district": "string",
        "high_grade": "1",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "low_grade": "1",
        "mdr_number": "string",
        "name": "string",
        "nces_id": "string",
        "phone": "string",
        "principal": {
          "email": "string",
          "name": "string"
        },
        "school_number": "string",
        "sis_id": "string",
        "state_id": "string"
      }
    }
  ]
}
```

<h3 id="getschools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolsResponse](#schemaschoolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchool

<a id="opIdgetSchool"></a>

> Code samples

```bash
curl https://example.com/schools/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools/{id}`

Returns a specific school

<h3 id="getschool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "district": "string",
    "high_grade": "1",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "low_grade": "1",
    "mdr_number": "string",
    "name": "string",
    "nces_id": "string",
    "phone": "string",
    "principal": {
      "email": "string",
      "name": "string"
    },
    "school_number": "string",
    "sis_id": "string",
    "state_id": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolResponse](#schemaschoolresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictForSchool

<a id="opIdgetDistrictForSchool"></a>

> Code samples

```bash
curl https://example.com/schools/string/district \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools/{id}/district`

Returns the district for a school

<h3 id="getdistrictforschool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictforschool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSectionsForSchool

<a id="opIdgetSectionsForSchool"></a>

> Code samples

```bash
curl https://example.com/schools/string/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools/{id}/sections`

Returns the sections for a school

<h3 id="getsectionsforschool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getsectionsforschool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionsResponse](#schemasectionsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudentsForSchool

<a id="opIdgetStudentsForSchool"></a>

> Code samples

```bash
curl https://example.com/schools/string/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools/{id}/students`

Returns the students for a school

<h3 id="getstudentsforschool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudentsforschool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentsResponse](#schemastudentsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeachersForSchool

<a id="opIdgetTeachersForSchool"></a>

> Code samples

```bash
curl https://example.com/schools/string/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schools/{id}/teachers`

Returns the teachers for a school

<h3 id="getteachersforschool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteachersforschool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeachersResponse](#schemateachersresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-sections">Sections</h1>

## getSections

<a id="opIdgetSections"></a>

> Code samples

```bash
curl https://example.com/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections`

Returns a list of sections

<h3 id="getsections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

<h3 id="getsections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionsResponse](#schemasectionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSection

<a id="opIdgetSection"></a>

> Code samples

```bash
curl https://example.com/sections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}`

Returns a specific section

<h3 id="getsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "course_description": "string",
    "course_name": "string",
    "course_number": "string",
    "created": "string",
    "district": "string",
    "grade": "1",
    "id": "string",
    "last_modified": "string",
    "name": "string",
    "period": "string",
    "school": "string",
    "section_number": "string",
    "sis_id": "string",
    "students": [
      "string"
    ],
    "subject": "english/language arts",
    "teacher": "string",
    "teachers": [
      "string"
    ],
    "term": {
      "end_date": "string",
      "name": "string",
      "start_date": "string"
    }
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionResponse](#schemasectionresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictForSection

<a id="opIdgetDistrictForSection"></a>

> Code samples

```bash
curl https://example.com/sections/string/district \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}/district`

Returns the district for a section

<h3 id="getdistrictforsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictforsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolForSection

<a id="opIdgetSchoolForSection"></a>

> Code samples

```bash
curl https://example.com/sections/string/school \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}/school`

Returns the school for a section

<h3 id="getschoolforsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "district": "string",
    "high_grade": "1",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "low_grade": "1",
    "mdr_number": "string",
    "name": "string",
    "nces_id": "string",
    "phone": "string",
    "principal": {
      "email": "string",
      "name": "string"
    },
    "school_number": "string",
    "sis_id": "string",
    "state_id": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschoolforsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolResponse](#schemaschoolresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudentsForSection

<a id="opIdgetStudentsForSection"></a>

> Code samples

```bash
curl https://example.com/sections/string/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}/students`

Returns the students for a section

<h3 id="getstudentsforsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudentsforsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentsResponse](#schemastudentsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeacherForSection

<a id="opIdgetTeacherForSection"></a>

> Code samples

```bash
curl https://example.com/sections/string/teacher \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}/teacher`

Returns the primary teacher for a section

<h3 id="getteacherforsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "email": "string",
    "id": "string",
    "last_modified": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "teacher_number": "string",
    "title": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteacherforsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeacherResponse](#schemateacherresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeachersForSection

<a id="opIdgetTeachersForSection"></a>

> Code samples

```bash
curl https://example.com/sections/string/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sections/{id}/teachers`

Returns the teachers for a section

<h3 id="getteachersforsection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteachersforsection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeachersResponse](#schemateachersresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-students">Students</h1>

## getStudents

<a id="opIdgetStudents"></a>

> Code samples

```bash
curl https://example.com/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students`

Returns a list of students

<h3 id="getstudents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

<h3 id="getstudents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentsResponse](#schemastudentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudent

<a id="opIdgetStudent"></a>

> Code samples

```bash
curl https://example.com/students/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}`

Returns a specific student

<h3 id="getstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|include|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "dob": "string",
    "ell_status": "Y",
    "email": "string",
    "gender": "M",
    "grade": "1",
    "graduation_year": "string",
    "hispanic_ethnicity": "Y",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "race": "Caucasian",
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "student_number": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentResponse](#schemastudentresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getContactsForStudent

<a id="opIdgetContactsForStudent"></a>

> Code samples

```bash
curl https://example.com/students/string/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}/contacts`

Returns the contacts for a student

<h3 id="getcontactsforstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "district": "string",
      "email": "string",
      "id": "string",
      "name": "string",
      "phone": "string",
      "phone_type": "string",
      "relationship": "string",
      "sis_id": "string",
      "student": "string",
      "type": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getcontactsforstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentContactsForStudentResponse](#schemastudentcontactsforstudentresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictForStudent

<a id="opIdgetDistrictForStudent"></a>

> Code samples

```bash
curl https://example.com/students/string/district \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}/district`

Returns the district for a student

<h3 id="getdistrictforstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictforstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolForStudent

<a id="opIdgetSchoolForStudent"></a>

> Code samples

```bash
curl https://example.com/students/string/school \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}/school`

Returns the primary school for a student

<h3 id="getschoolforstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "district": "string",
    "high_grade": "1",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "low_grade": "1",
    "mdr_number": "string",
    "name": "string",
    "nces_id": "string",
    "phone": "string",
    "principal": {
      "email": "string",
      "name": "string"
    },
    "school_number": "string",
    "sis_id": "string",
    "state_id": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschoolforstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolResponse](#schemaschoolresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSectionsForStudent

<a id="opIdgetSectionsForStudent"></a>

> Code samples

```bash
curl https://example.com/students/string/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}/sections`

Returns the sections for a student

<h3 id="getsectionsforstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getsectionsforstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionsResponse](#schemasectionsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeachersForStudent

<a id="opIdgetTeachersForStudent"></a>

> Code samples

```bash
curl https://example.com/students/string/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /students/{id}/teachers`

Returns the teachers for a student

<h3 id="getteachersforstudent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteachersforstudent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeachersResponse](#schemateachersresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

<h1 id="data-api-teachers">Teachers</h1>

## getTeachers

<a id="opIdgetTeachers"></a>

> Code samples

```bash
curl https://example.com/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers`

Returns a list of teachers

<h3 id="getteachers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|
|where|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getteachers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeachersResponse](#schemateachersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getTeacher

<a id="opIdgetTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}`

Returns a specific teacher

<h3 id="getteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|include|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "email": "string",
    "id": "string",
    "last_modified": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "teacher_number": "string",
    "title": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[TeacherResponse](#schemateacherresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getDistrictForTeacher

<a id="opIdgetDistrictForTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string/district \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}/district`

Returns the district for a teacher

<h3 id="getdistrictforteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getdistrictforteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[DistrictResponse](#schemadistrictresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getGradeLevelsForTeacher

<a id="opIdgetGradeLevelsForTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string/grade_levels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}/grade_levels`

Returns the grade levels for sections a teacher teaches

<h3 id="getgradelevelsforteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getgradelevelsforteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[GradeLevelsResponse](#schemagradelevelsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSchoolForTeacher

<a id="opIdgetSchoolForTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string/school \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}/school`

Retrieves school info for a teacher.

<h3 id="getschoolforteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "created": "string",
    "district": "string",
    "high_grade": "1",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "low_grade": "1",
    "mdr_number": "string",
    "name": "string",
    "nces_id": "string",
    "phone": "string",
    "principal": {
      "email": "string",
      "name": "string"
    },
    "school_number": "string",
    "sis_id": "string",
    "state_id": "string"
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getschoolforteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SchoolResponse](#schemaschoolresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getSectionsForTeacher

<a id="opIdgetSectionsForTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}/sections`

Returns the sections for a teacher

<h3 id="getsectionsforteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getsectionsforteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[SectionsResponse](#schemasectionsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

## getStudentsForTeacher

<a id="opIdgetStudentsForTeacher"></a>

> Code samples

```bash
curl https://example.com/teachers/string/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teachers/{id}/students`

Returns the students for a teacher

<h3 id="getstudentsforteacher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|limit|query|integer|false|none|
|starting_after|query|string|false|none|
|ending_before|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="getstudentsforteacher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK Response|[StudentsResponse](#schemastudentsresponse)|
|404|Not Found|Entity Not Found|[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth
</aside>

# Schemas

<h2 id="tocS_BadRequest">BadRequest</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest"></a>
<a id="schema_BadRequest"></a>
<a id="tocSbadrequest"></a>
<a id="tocsbadrequest"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "district_username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|district_username|string|false|none|none|

<h2 id="tocS_District">District</h2>
<!-- backwards compatibility -->
<a id="schemadistrict"></a>
<a id="schema_District"></a>
<a id="tocSdistrict"></a>
<a id="tocsdistrict"></a>

```json
{
  "id": "string",
  "mdr_number": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|mdr_number|string \| null|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_DistrictAdmin">DistrictAdmin</h2>
<!-- backwards compatibility -->
<a id="schemadistrictadmin"></a>
<a id="schema_DistrictAdmin"></a>
<a id="tocSdistrictadmin"></a>
<a id="tocsdistrictadmin"></a>

```json
{
  "district": "string",
  "email": "string",
  "id": "string",
  "name": {
    "first": "string",
    "last": "string",
    "middle": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|district|string|false|none|none|
|email|string|false|none|none|
|id|string|false|none|none|
|name|[Name](#schemaname)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_DistrictAdminResponse">DistrictAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistrictadminresponse"></a>
<a id="schema_DistrictAdminResponse"></a>
<a id="tocSdistrictadminresponse"></a>
<a id="tocsdistrictadminresponse"></a>

```json
{
  "data": {
    "district": "string",
    "email": "string",
    "id": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DistrictAdmin](#schemadistrictadmin)|false|none|none|

<h2 id="tocS_DistrictAdminsResponse">DistrictAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistrictadminsresponse"></a>
<a id="schema_DistrictAdminsResponse"></a>
<a id="tocSdistrictadminsresponse"></a>
<a id="tocsdistrictadminsresponse"></a>

```json
{
  "data": [
    {
      "district": "string",
      "email": "string",
      "id": "string",
      "name": {
        "first": "string",
        "last": "string",
        "middle": "string"
      },
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DistrictAdmin](#schemadistrictadmin)]|false|none|none|

<h2 id="tocS_DistrictResponse">DistrictResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistrictresponse"></a>
<a id="schema_DistrictResponse"></a>
<a id="tocSdistrictresponse"></a>
<a id="tocsdistrictresponse"></a>

```json
{
  "data": {
    "id": "string",
    "mdr_number": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[District](#schemadistrict)|false|none|none|

<h2 id="tocS_DistrictStatus">DistrictStatus</h2>
<!-- backwards compatibility -->
<a id="schemadistrictstatus"></a>
<a id="schema_DistrictStatus"></a>
<a id="tocSdistrictstatus"></a>
<a id="tocsdistrictstatus"></a>

```json
{
  "error": "string",
  "id": "string",
  "instant_login": true,
  "last_sync": "string",
  "launch_date": "string",
  "pause_end": "string",
  "pause_start": "string",
  "sis_type": "string",
  "state": "running"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|id|string|false|none|none|
|instant_login|boolean|false|none|none|
|last_sync|string(datetime) \| null|false|none|none|
|launch_date|string(datetime)|false|none|none|
|pause_end|string(datetime) \| null|false|none|none|
|pause_start|string(datetime) \| null|false|none|none|
|sis_type|string|false|none|none|
|state|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|running|
|state|pending|
|state|error|
|state|paused|

<h2 id="tocS_DistrictStatusResponse">DistrictStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistrictstatusresponse"></a>
<a id="schema_DistrictStatusResponse"></a>
<a id="tocSdistrictstatusresponse"></a>
<a id="tocsdistrictstatusresponse"></a>

```json
{
  "data": {
    "error": "string",
    "id": "string",
    "instant_login": true,
    "last_sync": "string",
    "launch_date": "string",
    "pause_end": "string",
    "pause_start": "string",
    "sis_type": "string",
    "state": "running"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DistrictStatus](#schemadistrictstatus)|false|none|none|

<h2 id="tocS_DistrictStatusResponses">DistrictStatusResponses</h2>
<!-- backwards compatibility -->
<a id="schemadistrictstatusresponses"></a>
<a id="schema_DistrictStatusResponses"></a>
<a id="tocSdistrictstatusresponses"></a>
<a id="tocsdistrictstatusresponses"></a>

```json
{
  "data": [
    {
      "data": {
        "error": "string",
        "id": "string",
        "instant_login": true,
        "last_sync": "string",
        "launch_date": "string",
        "pause_end": "string",
        "pause_start": "string",
        "sis_type": "string",
        "state": "running"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DistrictStatusResponse](#schemadistrictstatusresponse)]|false|none|none|

<h2 id="tocS_DistrictsResponse">DistrictsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistrictsresponse"></a>
<a id="schema_DistrictsResponse"></a>
<a id="tocSdistrictsresponse"></a>
<a id="tocsdistrictsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "id": "string",
        "mdr_number": "string",
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DistrictResponse](#schemadistrictresponse)]|false|none|none|

<h2 id="tocS_GradeLevelsResponse">GradeLevelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagradelevelsresponse"></a>
<a id="schema_GradeLevelsResponse"></a>
<a id="tocSgradelevelsresponse"></a>
<a id="tocsgradelevelsresponse"></a>

```json
{
  "data": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<h2 id="tocS_InternalError">InternalError</h2>
<!-- backwards compatibility -->
<a id="schemainternalerror"></a>
<a id="schema_InternalError"></a>
<a id="tocSinternalerror"></a>
<a id="tocsinternalerror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": "string",
  "city": "string",
  "lat": "string",
  "lon": "string",
  "state": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|city|string \| null|false|none|none|
|lat|string \| null|false|none|none|
|lon|string \| null|false|none|none|
|state|string \| null|false|none|none|
|zip|string \| null|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "first": "string",
  "last": "string",
  "middle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string \| null|false|none|none|
|last|string \| null|false|none|none|
|middle|string \| null|false|none|none|

<h2 id="tocS_NotFound">NotFound</h2>
<!-- backwards compatibility -->
<a id="schemanotfound"></a>
<a id="schema_NotFound"></a>
<a id="tocSnotfound"></a>
<a id="tocsnotfound"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_School">School</h2>
<!-- backwards compatibility -->
<a id="schemaschool"></a>
<a id="schema_School"></a>
<a id="tocSschool"></a>
<a id="tocsschool"></a>

```json
{
  "created": "string",
  "district": "string",
  "high_grade": "1",
  "id": "string",
  "last_modified": "string",
  "location": {
    "address": "string",
    "city": "string",
    "lat": "string",
    "lon": "string",
    "state": "string",
    "zip": "string"
  },
  "low_grade": "1",
  "mdr_number": "string",
  "name": "string",
  "nces_id": "string",
  "phone": "string",
  "principal": {
    "email": "string",
    "name": "string"
  },
  "school_number": "string",
  "sis_id": "string",
  "state_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(datetime)|false|none|none|
|district|string|false|none|none|
|high_grade|string \| null|false|none|none|
|id|string|false|none|none|
|last_modified|string(datetime)|false|none|none|
|location|[Location](#schemalocation)|false|none|none|
|low_grade|string \| null|false|none|none|
|mdr_number|string \| null|false|none|none|
|name|string|false|none|none|
|nces_id|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|principal|[Principal](#schemaprincipal)|false|none|none|
|school_number|string|false|none|none|
|sis_id|string|false|none|none|
|state_id|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|high_grade|1|
|high_grade|2|
|high_grade|3|
|high_grade|4|
|high_grade|5|
|high_grade|6|
|high_grade|7|
|high_grade|8|
|high_grade|9|
|high_grade|10|
|high_grade|11|
|high_grade|12|
|high_grade|PreKindergarten|
|high_grade|Kindergarten|
|high_grade|PostGraduate|
|high_grade|Other|
|low_grade|1|
|low_grade|2|
|low_grade|3|
|low_grade|4|
|low_grade|5|
|low_grade|6|
|low_grade|7|
|low_grade|8|
|low_grade|9|
|low_grade|10|
|low_grade|11|
|low_grade|12|
|low_grade|PreKindergarten|
|low_grade|Kindergarten|
|low_grade|PostGraduate|
|low_grade|Other|

<h2 id="tocS_SchoolAdmin">SchoolAdmin</h2>
<!-- backwards compatibility -->
<a id="schemaschooladmin"></a>
<a id="schema_SchoolAdmin"></a>
<a id="tocSschooladmin"></a>
<a id="tocsschooladmin"></a>

```json
{
  "credentials": {
    "district_username": "string"
  },
  "district": "string",
  "email": "string",
  "id": "string",
  "name": {
    "first": "string",
    "last": "string",
    "middle": "string"
  },
  "schools": [
    "string"
  ],
  "staff_id": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[Credentials](#schemacredentials)|false|none|none|
|district|string|false|none|none|
|email|string|false|none|none|
|id|string|false|none|none|
|name|[Name](#schemaname)|false|none|none|
|schools|[string]|false|none|none|
|staff_id|string|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_SchoolAdminResponse">SchoolAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschooladminresponse"></a>
<a id="schema_SchoolAdminResponse"></a>
<a id="tocSschooladminresponse"></a>
<a id="tocsschooladminresponse"></a>

```json
{
  "data": {
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "email": "string",
    "id": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "schools": [
      "string"
    ],
    "staff_id": "string",
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SchoolAdmin](#schemaschooladmin)|false|none|none|

<h2 id="tocS_SchoolAdminsResponse">SchoolAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschooladminsresponse"></a>
<a id="schema_SchoolAdminsResponse"></a>
<a id="tocSschooladminsresponse"></a>
<a id="tocsschooladminsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "schools": [
          "string"
        ],
        "staff_id": "string",
        "title": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SchoolAdminResponse](#schemaschooladminresponse)]|false|none|none|

<h2 id="tocS_SchoolResponse">SchoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschoolresponse"></a>
<a id="schema_SchoolResponse"></a>
<a id="tocSschoolresponse"></a>
<a id="tocsschoolresponse"></a>

```json
{
  "data": {
    "created": "string",
    "district": "string",
    "high_grade": "1",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "low_grade": "1",
    "mdr_number": "string",
    "name": "string",
    "nces_id": "string",
    "phone": "string",
    "principal": {
      "email": "string",
      "name": "string"
    },
    "school_number": "string",
    "sis_id": "string",
    "state_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[School](#schemaschool)|false|none|none|

<h2 id="tocS_SchoolsResponse">SchoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschoolsresponse"></a>
<a id="schema_SchoolsResponse"></a>
<a id="tocSschoolsresponse"></a>
<a id="tocsschoolsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "district": "string",
        "high_grade": "1",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "low_grade": "1",
        "mdr_number": "string",
        "name": "string",
        "nces_id": "string",
        "phone": "string",
        "principal": {
          "email": "string",
          "name": "string"
        },
        "school_number": "string",
        "sis_id": "string",
        "state_id": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SchoolResponse](#schemaschoolresponse)]|false|none|none|

<h2 id="tocS_Section">Section</h2>
<!-- backwards compatibility -->
<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "course_description": "string",
  "course_name": "string",
  "course_number": "string",
  "created": "string",
  "district": "string",
  "grade": "1",
  "id": "string",
  "last_modified": "string",
  "name": "string",
  "period": "string",
  "school": "string",
  "section_number": "string",
  "sis_id": "string",
  "students": [
    "string"
  ],
  "subject": "english/language arts",
  "teacher": "string",
  "teachers": [
    "string"
  ],
  "term": {
    "end_date": "string",
    "name": "string",
    "start_date": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|course_description|string \| null|false|none|none|
|course_name|string \| null|false|none|none|
|course_number|string \| null|false|none|none|
|created|string(datetime)|false|none|none|
|district|string|false|none|none|
|grade|string \| null|false|none|none|
|id|string|false|none|none|
|last_modified|string(datetime)|false|none|none|
|name|string|false|none|none|
|period|string \| null|false|none|none|
|school|string|false|none|none|
|section_number|string \| null|false|none|none|
|sis_id|string|false|none|none|
|students|[string]|false|none|none|
|subject|string|false|none|none|
|teacher|string \| null|false|none|none|
|teachers|[string]|false|none|none|
|term|[Term](#schematerm)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grade|1|
|grade|2|
|grade|3|
|grade|4|
|grade|5|
|grade|6|
|grade|7|
|grade|8|
|grade|9|
|grade|10|
|grade|11|
|grade|12|
|grade|PreKindergarten|
|grade|Kindergarten|
|grade|PostGraduate|
|grade|Other|
|subject|english/language arts|
|subject|math|
|subject|science|
|subject|social studies|
|subject|language|
|subject|homeroom/advisory|
|subject|interventions/online learning|
|subject|technology and engineering|
|subject|PE and health|
|subject|arts and music|
|subject|other|

<h2 id="tocS_SectionResponse">SectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasectionresponse"></a>
<a id="schema_SectionResponse"></a>
<a id="tocSsectionresponse"></a>
<a id="tocssectionresponse"></a>

```json
{
  "data": {
    "course_description": "string",
    "course_name": "string",
    "course_number": "string",
    "created": "string",
    "district": "string",
    "grade": "1",
    "id": "string",
    "last_modified": "string",
    "name": "string",
    "period": "string",
    "school": "string",
    "section_number": "string",
    "sis_id": "string",
    "students": [
      "string"
    ],
    "subject": "english/language arts",
    "teacher": "string",
    "teachers": [
      "string"
    ],
    "term": {
      "end_date": "string",
      "name": "string",
      "start_date": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Section](#schemasection)|false|none|none|

<h2 id="tocS_SectionsResponse">SectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasectionsresponse"></a>
<a id="schema_SectionsResponse"></a>
<a id="tocSsectionsresponse"></a>
<a id="tocssectionsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "course_description": "string",
        "course_name": "string",
        "course_number": "string",
        "created": "string",
        "district": "string",
        "grade": "1",
        "id": "string",
        "last_modified": "string",
        "name": "string",
        "period": "string",
        "school": "string",
        "section_number": "string",
        "sis_id": "string",
        "students": [
          "string"
        ],
        "subject": "english/language arts",
        "teacher": "string",
        "teachers": [
          "string"
        ],
        "term": {
          "end_date": "string",
          "name": "string",
          "start_date": "string"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SectionResponse](#schemasectionresponse)]|false|none|none|

<h2 id="tocS_Student">Student</h2>
<!-- backwards compatibility -->
<a id="schemastudent"></a>
<a id="schema_Student"></a>
<a id="tocSstudent"></a>
<a id="tocsstudent"></a>

```json
{
  "created": "string",
  "credentials": {
    "district_username": "string"
  },
  "district": "string",
  "dob": "string",
  "ell_status": "Y",
  "email": "string",
  "gender": "M",
  "grade": "1",
  "graduation_year": "string",
  "hispanic_ethnicity": "Y",
  "id": "string",
  "last_modified": "string",
  "location": {
    "address": "string",
    "city": "string",
    "lat": "string",
    "lon": "string",
    "state": "string",
    "zip": "string"
  },
  "name": {
    "first": "string",
    "last": "string",
    "middle": "string"
  },
  "race": "Caucasian",
  "school": "string",
  "schools": [
    "string"
  ],
  "sis_id": "string",
  "state_id": "string",
  "student_number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(datetime)|false|none|none|
|credentials|[Credentials](#schemacredentials)|false|none|none|
|district|string|false|none|none|
|dob|string \| null|false|none|none|
|ell_status|string \| null|false|none|none|
|email|string \| null|false|none|none|
|gender|string \| null|false|none|none|
|grade|string \| null|false|none|none|
|graduation_year|string \| null|false|none|none|
|hispanic_ethnicity|string \| null|false|none|none|
|id|string|false|none|none|
|last_modified|string(datetime)|false|none|none|
|location|[Location](#schemalocation)|false|none|none|
|name|[Name](#schemaname)|false|none|none|
|race|string \| null|false|none|none|
|school|string|false|none|none|
|schools|[string]|false|none|none|
|sis_id|string|false|none|none|
|state_id|string \| null|false|none|none|
|student_number|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ell_status|Y|
|ell_status|N|
|ell_status|""|
|gender|M|
|gender|F|
|gender|""|
|grade|1|
|grade|2|
|grade|3|
|grade|4|
|grade|5|
|grade|6|
|grade|7|
|grade|8|
|grade|9|
|grade|10|
|grade|11|
|grade|12|
|grade|PreKindergarten|
|grade|Kindergarten|
|grade|PostGraduate|
|grade|Other|
|hispanic_ethnicity|Y|
|hispanic_ethnicity|N|
|hispanic_ethnicity|""|
|race|Caucasian|
|race|Asian|
|race|Black or African American|
|race|American Indian|
|race|Hawaiian or Other Pacific Islander|
|race|Two or More Races|
|race|Unknown|
|race|""|

<h2 id="tocS_StudentContact">StudentContact</h2>
<!-- backwards compatibility -->
<a id="schemastudentcontact"></a>
<a id="schema_StudentContact"></a>
<a id="tocSstudentcontact"></a>
<a id="tocsstudentcontact"></a>

```json
{
  "district": "string",
  "email": "string",
  "id": "string",
  "name": "string",
  "phone": "string",
  "phone_type": "string",
  "relationship": "string",
  "sis_id": "string",
  "student": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|district|string|false|none|none|
|email|string \| null|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|phone|string \| null|false|none|none|
|phone_type|string \| null|false|none|none|
|relationship|string \| null|false|none|none|
|sis_id|string \| null|false|none|none|
|student|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_StudentContactResponse">StudentContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemastudentcontactresponse"></a>
<a id="schema_StudentContactResponse"></a>
<a id="tocSstudentcontactresponse"></a>
<a id="tocsstudentcontactresponse"></a>

```json
{
  "data": {
    "district": "string",
    "email": "string",
    "id": "string",
    "name": "string",
    "phone": "string",
    "phone_type": "string",
    "relationship": "string",
    "sis_id": "string",
    "student": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[StudentContact](#schemastudentcontact)|false|none|none|

<h2 id="tocS_StudentContactsForStudentResponse">StudentContactsForStudentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastudentcontactsforstudentresponse"></a>
<a id="schema_StudentContactsForStudentResponse"></a>
<a id="tocSstudentcontactsforstudentresponse"></a>
<a id="tocsstudentcontactsforstudentresponse"></a>

```json
{
  "data": [
    {
      "district": "string",
      "email": "string",
      "id": "string",
      "name": "string",
      "phone": "string",
      "phone_type": "string",
      "relationship": "string",
      "sis_id": "string",
      "student": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StudentContact](#schemastudentcontact)]|false|none|none|

<h2 id="tocS_StudentContactsResponse">StudentContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastudentcontactsresponse"></a>
<a id="schema_StudentContactsResponse"></a>
<a id="tocSstudentcontactsresponse"></a>
<a id="tocsstudentcontactsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "district": "string",
        "email": "string",
        "id": "string",
        "name": "string",
        "phone": "string",
        "phone_type": "string",
        "relationship": "string",
        "sis_id": "string",
        "student": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StudentContactResponse](#schemastudentcontactresponse)]|false|none|none|

<h2 id="tocS_StudentResponse">StudentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastudentresponse"></a>
<a id="schema_StudentResponse"></a>
<a id="tocSstudentresponse"></a>
<a id="tocsstudentresponse"></a>

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "dob": "string",
    "ell_status": "Y",
    "email": "string",
    "gender": "M",
    "grade": "1",
    "graduation_year": "string",
    "hispanic_ethnicity": "Y",
    "id": "string",
    "last_modified": "string",
    "location": {
      "address": "string",
      "city": "string",
      "lat": "string",
      "lon": "string",
      "state": "string",
      "zip": "string"
    },
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "race": "Caucasian",
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "student_number": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Student](#schemastudent)|false|none|none|

<h2 id="tocS_StudentsResponse">StudentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastudentsresponse"></a>
<a id="schema_StudentsResponse"></a>
<a id="tocSstudentsresponse"></a>
<a id="tocsstudentsresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "dob": "string",
        "ell_status": "Y",
        "email": "string",
        "gender": "M",
        "grade": "1",
        "graduation_year": "string",
        "hispanic_ethnicity": "Y",
        "id": "string",
        "last_modified": "string",
        "location": {
          "address": "string",
          "city": "string",
          "lat": "string",
          "lon": "string",
          "state": "string",
          "zip": "string"
        },
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "race": "Caucasian",
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "student_number": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StudentResponse](#schemastudentresponse)]|false|none|none|

<h2 id="tocS_Teacher">Teacher</h2>
<!-- backwards compatibility -->
<a id="schemateacher"></a>
<a id="schema_Teacher"></a>
<a id="tocSteacher"></a>
<a id="tocsteacher"></a>

```json
{
  "created": "string",
  "credentials": {
    "district_username": "string"
  },
  "district": "string",
  "email": "string",
  "id": "string",
  "last_modified": "string",
  "name": {
    "first": "string",
    "last": "string",
    "middle": "string"
  },
  "school": "string",
  "schools": [
    "string"
  ],
  "sis_id": "string",
  "state_id": "string",
  "teacher_number": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(datetime)|false|none|none|
|credentials|[Credentials](#schemacredentials)|false|none|none|
|district|string|false|none|none|
|email|string \| null|false|none|none|
|id|string|false|none|none|
|last_modified|string(datetime)|false|none|none|
|name|[Name](#schemaname)|false|none|none|
|school|string|false|none|none|
|schools|[string]|false|none|none|
|sis_id|string|false|none|none|
|state_id|string \| null|false|none|none|
|teacher_number|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_TeacherResponse">TeacherResponse</h2>
<!-- backwards compatibility -->
<a id="schemateacherresponse"></a>
<a id="schema_TeacherResponse"></a>
<a id="tocSteacherresponse"></a>
<a id="tocsteacherresponse"></a>

```json
{
  "data": {
    "created": "string",
    "credentials": {
      "district_username": "string"
    },
    "district": "string",
    "email": "string",
    "id": "string",
    "last_modified": "string",
    "name": {
      "first": "string",
      "last": "string",
      "middle": "string"
    },
    "school": "string",
    "schools": [
      "string"
    ],
    "sis_id": "string",
    "state_id": "string",
    "teacher_number": "string",
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Teacher](#schemateacher)|false|none|none|

<h2 id="tocS_TeachersResponse">TeachersResponse</h2>
<!-- backwards compatibility -->
<a id="schemateachersresponse"></a>
<a id="schema_TeachersResponse"></a>
<a id="tocSteachersresponse"></a>
<a id="tocsteachersresponse"></a>

```json
{
  "data": [
    {
      "data": {
        "created": "string",
        "credentials": {
          "district_username": "string"
        },
        "district": "string",
        "email": "string",
        "id": "string",
        "last_modified": "string",
        "name": {
          "first": "string",
          "last": "string",
          "middle": "string"
        },
        "school": "string",
        "schools": [
          "string"
        ],
        "sis_id": "string",
        "state_id": "string",
        "teacher_number": "string",
        "title": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TeacherResponse](#schemateacherresponse)]|false|none|none|

<h2 id="tocS_Term">Term</h2>
<!-- backwards compatibility -->
<a id="schematerm"></a>
<a id="schema_Term"></a>
<a id="tocSterm"></a>
<a id="tocsterm"></a>

```json
{
  "end_date": "string",
  "name": "string",
  "start_date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string(datetime) \| null|false|none|none|
|name|string \| null|false|none|none|
|start_date|string(datetime) \| null|false|none|none|
