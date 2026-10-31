<h1 id="google-classroom-api">Google Classroom API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages classes, rosters, and invitations in Google Classroom.

Base URLs:

* <a href="https://classroom.googleapis.com/">https://classroom.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/classroom/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/classroom.announcements|View and manage announcements in Google Classroom|
|https://www.googleapis.com/auth/classroom.announcements.readonly|View announcements in Google Classroom|
|https://www.googleapis.com/auth/classroom.courses|See, edit, create, and permanently delete your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.courses.readonly|View your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.coursework.me|See, create and edit coursework items including assignments, questions, and grades|
|https://www.googleapis.com/auth/classroom.coursework.me.readonly|View your course work and grades in Google Classroom|
|https://www.googleapis.com/auth/classroom.coursework.students|Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer|
|https://www.googleapis.com/auth/classroom.coursework.students.readonly|View course work and grades for students in the Google Classroom classes you teach or administer|
|https://www.googleapis.com/auth/classroom.courseworkmaterials|See, edit, and create classwork materials in Google Classroom|
|https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly|See all classwork materials for your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly|View your Google Classroom guardians|
|https://www.googleapis.com/auth/classroom.guardianlinks.students|View and manage guardians for students in your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly|View guardians for students in your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.profile.emails|View the email addresses of people in your classes|
|https://www.googleapis.com/auth/classroom.profile.photos|View the profile photos of people in your classes|
|https://www.googleapis.com/auth/classroom.push-notifications|Receive notifications about your Google Classroom data|
|https://www.googleapis.com/auth/classroom.rosters|Manage your Google Classroom class rosters|
|https://www.googleapis.com/auth/classroom.rosters.readonly|View your Google Classroom class rosters|
|https://www.googleapis.com/auth/classroom.student-submissions.me.readonly|View your course work and grades in Google Classroom|
|https://www.googleapis.com/auth/classroom.student-submissions.students.readonly|View course work and grades for students in the Google Classroom classes you teach or administer|
|https://www.googleapis.com/auth/classroom.topics|See, create, and edit topics in Google Classroom|
|https://www.googleapis.com/auth/classroom.topics.readonly|View topics in Google Classroom|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/classroom.announcements|View and manage announcements in Google Classroom|
|https://www.googleapis.com/auth/classroom.announcements.readonly|View announcements in Google Classroom|
|https://www.googleapis.com/auth/classroom.courses|See, edit, create, and permanently delete your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.courses.readonly|View your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.coursework.me|See, create and edit coursework items including assignments, questions, and grades|
|https://www.googleapis.com/auth/classroom.coursework.me.readonly|View your course work and grades in Google Classroom|
|https://www.googleapis.com/auth/classroom.coursework.students|Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer|
|https://www.googleapis.com/auth/classroom.coursework.students.readonly|View course work and grades for students in the Google Classroom classes you teach or administer|
|https://www.googleapis.com/auth/classroom.courseworkmaterials|See, edit, and create classwork materials in Google Classroom|
|https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly|See all classwork materials for your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly|View your Google Classroom guardians|
|https://www.googleapis.com/auth/classroom.guardianlinks.students|View and manage guardians for students in your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly|View guardians for students in your Google Classroom classes|
|https://www.googleapis.com/auth/classroom.profile.emails|View the email addresses of people in your classes|
|https://www.googleapis.com/auth/classroom.profile.photos|View the profile photos of people in your classes|
|https://www.googleapis.com/auth/classroom.push-notifications|Receive notifications about your Google Classroom data|
|https://www.googleapis.com/auth/classroom.rosters|Manage your Google Classroom class rosters|
|https://www.googleapis.com/auth/classroom.rosters.readonly|View your Google Classroom class rosters|
|https://www.googleapis.com/auth/classroom.student-submissions.me.readonly|View your course work and grades in Google Classroom|
|https://www.googleapis.com/auth/classroom.student-submissions.students.readonly|View course work and grades for students in the Google Classroom classes you teach or administer|
|https://www.googleapis.com/auth/classroom.topics|See, create, and edit topics in Google Classroom|
|https://www.googleapis.com/auth/classroom.topics.readonly|View topics in Google Classroom|

<h1 id="google-classroom-api-courses">courses</h1>

## classroom.courses.list

<a id="opIdclassroom.courses.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses`

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.

<h3 id="classroomcourseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseStates|query|[string]|false|Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|studentId|query|string|false|Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|teacherId|query|string|false|Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|courseStates|COURSE_STATE_UNSPECIFIED|
|courseStates|ACTIVE|
|courseStates|ARCHIVED|
|courseStates|PROVISIONED|
|courseStates|DECLINED|
|courseStates|SUSPENDED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courses": [
    {
      "alternateLink": "string",
      "calendarId": "string",
      "courseGroupEmail": "string",
      "courseMaterialSets": [
        {
          "materials": [
            {
              "driveFile": {
                "alternateLink": "string",
                "id": "string",
                "thumbnailUrl": "string",
                "title": "string"
              },
              "form": {
                "formUrl": "string",
                "responseUrl": "string",
                "thumbnailUrl": "string",
                "title": "string"
              },
              "link": {
                "thumbnailUrl": "string",
                "title": "string",
                "url": "string"
              },
              "youTubeVideo": {
                "alternateLink": "string",
                "id": "string",
                "thumbnailUrl": "string",
                "title": "string"
              }
            }
          ],
          "title": "string"
        }
      ],
      "courseState": "COURSE_STATE_UNSPECIFIED",
      "creationTime": "string",
      "description": "string",
      "descriptionHeading": "string",
      "enrollmentCode": "string",
      "gradebookSettings": {
        "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
        "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
        "gradeCategories": [
          {
            "defaultGradeDenominator": 0,
            "id": "string",
            "name": "string",
            "weight": 0
          }
        ]
      },
      "guardiansEnabled": true,
      "id": "string",
      "name": "string",
      "ownerId": "string",
      "room": "string",
      "section": "string",
      "teacherFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      },
      "teacherGroupEmail": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomcourseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCoursesResponse](#schemalistcoursesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly )
</aside>

## classroom.courses.create

<a id="opIdclassroom.courses.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "calendarId": "string",
    "courseGroupEmail": "string",
    "courseMaterialSets": [
      {
        "materials": [
          {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "form": {
              "formUrl": "string",
              "responseUrl": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "link": {
              "thumbnailUrl": "string",
              "title": "string",
              "url": "string"
            },
            "youTubeVideo": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            }
          }
        ],
        "title": "string"
      }
    ],
    "courseState": "COURSE_STATE_UNSPECIFIED",
    "creationTime": "string",
    "description": "string",
    "descriptionHeading": "string",
    "enrollmentCode": "string",
    "gradebookSettings": {
      "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
      "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
      "gradeCategories": [
        {
          "defaultGradeDenominator": 0,
          "id": "string",
          "name": "string",
          "weight": 0
        }
      ]
    },
    "guardiansEnabled": true,
    "id": "string",
    "name": "string",
    "ownerId": "string",
    "room": "string",
    "section": "string",
    "teacherFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    },
    "teacherGroupEmail": "string",
    "updateTime": "string"
  }'
```

`POST /v1/courses`

Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

> Body parameter

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Course](#schemacourse)|false|none|
|» alternateLink|body|string|false|Absolute link to this course in the Classroom web UI. Read-only.|
|» calendarId|body|string|false|The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only.|
|» courseGroupEmail|body|string|false|The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» courseMaterialSets|body|[[CourseMaterialSet](#schemacoursematerialset)]|false|**Deprecated.** Sets of materials that appear on the "about" page of this course. Read-only.|
|» courseState|body|string|false|State of the course. If unspecified, the default state is `PROVISIONED`.|
|» creationTime|body|string(google-datetime)|false|Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.|
|» description|body|string|false|Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.|
|» descriptionHeading|body|string|false|Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.|
|» enrollmentCode|body|string|false|Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.|
|» gradebookSettings|body|[GradebookSettings](#schemagradebooksettings)|false|The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only|
|» guardiansEnabled|body|boolean|false|Whether or not guardian notifications are enabled for this course. Read-only.|
|» id|body|string|false|Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.|
|» name|body|string|false|Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.|
|» ownerId|body|string|false|The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.|
|» room|body|string|false|Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.|
|» section|body|string|false|Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.|
|» teacherFolder|body|[DriveFolder](#schemadrivefolder)|false|Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.|
|» teacherGroupEmail|body|string|false|The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» updateTime|body|string(google-datetime)|false|Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» courseState|COURSE_STATE_UNSPECIFIED|
|» courseState|ACTIVE|
|» courseState|ARCHIVED|
|» courseState|PROVISIONED|
|» courseState|DECLINED|
|» courseState|SUSPENDED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Course](#schemacourse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

## classroom.courses.aliases.list

<a id="opIdclassroom.courses.aliases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/aliases`

Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.

<h3 id="classroomcoursesaliaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "alias": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomcoursesaliaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCourseAliasesResponse](#schemalistcoursealiasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly )
</aside>

## classroom.courses.aliases.create

<a id="opIdclassroom.courses.aliases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string"
  }'
```

`POST /v1/courses/{courseId}/aliases`

Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).

> Body parameter

```json
{
  "alias": "string"
}
```

<h3 id="classroomcoursesaliasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CourseAlias](#schemacoursealias)|false|none|
|» alias|body|string|false|Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alias": "string"
}
```

<h3 id="classroomcoursesaliasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseAlias](#schemacoursealias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

## classroom.courses.aliases.delete

<a id="opIdclassroom.courses.aliases.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/aliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/aliases/{alias}`

Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

<h3 id="classroomcoursesaliasesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.|
|alias|path|string|true|Alias to delete. This may not be the Classroom-assigned identifier.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursesaliasesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

## classroom.courses.announcements.list

<a id="opIdclassroom.courses.announcements.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/announcements`

Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

<h3 id="classroomcoursesannouncementslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|announcementStates|query|[string]|false|Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.|
|orderBy|query|string|false|Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|announcementStates|ANNOUNCEMENT_STATE_UNSPECIFIED|
|announcementStates|PUBLISHED|
|announcementStates|DRAFT|
|announcementStates|DELETED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "announcements": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "scheduledTime": "string",
      "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
      "text": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomcoursesannouncementslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAnnouncementsResponse](#schemalistannouncementsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements.readonly )
</aside>

## classroom.courses.announcements.create

<a id="opIdclassroom.courses.announcements.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "scheduledTime": "string",
    "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
    "text": "string",
    "updateTime": "string"
  }'
```

`POST /v1/courses/{courseId}/announcements`

Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Announcement](#schemaannouncement)|false|none|
|» alternateLink|body|string|false|Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this announcement was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the announcement. Read-only.|
|» id|body|string|false|Classroom-assigned identifier of this announcement, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the announcement.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. Announcements must have no more than 20 material items.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this announcement is scheduled to be published.|
|» state|body|string|false|Status of this announcement. If unspecified, the default state is `DRAFT`.|
|» text|body|string|false|Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this announcement. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|ANNOUNCEMENT_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Announcement](#schemaannouncement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements )
</aside>

## classroom.courses.announcements.get

<a id="opIdclassroom.courses.announcements.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/announcements/{id}`

Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.

<h3 id="classroomcoursesannouncementsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the announcement.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Announcement](#schemaannouncement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements.readonly )
</aside>

## classroom.courses.announcements.delete

<a id="opIdclassroom.courses.announcements.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/announcements/{id}`

Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

<h3 id="classroomcoursesannouncementsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursesannouncementsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements )
</aside>

## classroom.courses.announcements.patch

<a id="opIdclassroom.courses.announcements.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "scheduledTime": "string",
    "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
    "text": "string",
    "updateTime": "string"
  }'
```

`PATCH /v1/courses/{courseId}/announcements/{id}`

Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the announcement.|
|updateMask|query|string|false|Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Announcement](#schemaannouncement)|false|none|
|» alternateLink|body|string|false|Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this announcement was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the announcement. Read-only.|
|» id|body|string|false|Classroom-assigned identifier of this announcement, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the announcement.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. Announcements must have no more than 20 material items.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this announcement is scheduled to be published.|
|» state|body|string|false|Status of this announcement. If unspecified, the default state is `DRAFT`.|
|» text|body|string|false|Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this announcement. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|ANNOUNCEMENT_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Announcement](#schemaannouncement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements )
</aside>

## classroom.courses.announcements.modifyAssignees

<a id="opIdclassroom.courses.announcements.modifyAssignees"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/announcements/string:modifyAssignees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "modifyIndividualStudentsOptions": {
      "addStudentIds": [
        "string"
      ],
      "removeStudentIds": [
        "string"
      ]
    }
  }'
```

`POST /v1/courses/{courseId}/announcements/{id}:modifyAssignees`

Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

> Body parameter

```json
{
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "modifyIndividualStudentsOptions": {
    "addStudentIds": [
      "string"
    ],
    "removeStudentIds": [
      "string"
    ]
  }
}
```

<h3 id="classroomcoursesannouncementsmodifyassignees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the announcement.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ModifyAnnouncementAssigneesRequest](#schemamodifyannouncementassigneesrequest)|false|none|
|» assigneeMode|body|string|false|Mode of the announcement describing whether it is accessible by all students or specified individual students.|
|» modifyIndividualStudentsOptions|body|[ModifyIndividualStudentsOptions](#schemamodifyindividualstudentsoptions)|false|Set which students can view or cannot view the announcement. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesannouncementsmodifyassignees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Announcement](#schemaannouncement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.announcements ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.announcements )
</aside>

## classroom.courses.courseWork.list

<a id="opIdclassroom.courses.courseWork.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWork`

Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

<h3 id="classroomcoursescourseworklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkStates|query|[string]|false|Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.|
|orderBy|query|string|false|Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|courseWorkStates|COURSE_WORK_STATE_UNSPECIFIED|
|courseWorkStates|PUBLISHED|
|courseWorkStates|DRAFT|
|courseWorkStates|DELETED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseWork": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "assignment": {
        "studentWorkFolder": {
          "alternateLink": "string",
          "id": "string",
          "title": "string"
        }
      },
      "associatedWithDeveloper": true,
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "description": "string",
      "dueDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "dueTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "gradeCategory": {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      },
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "maxPoints": 0,
      "multipleChoiceQuestion": {
        "choices": [
          "string"
        ]
      },
      "scheduledTime": "string",
      "state": "COURSE_WORK_STATE_UNSPECIFIED",
      "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
      "title": "string",
      "topicId": "string",
      "updateTime": "string",
      "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomcoursescourseworklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCourseWorkResponse](#schemalistcourseworkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly )
</aside>

## classroom.courses.courseWork.create

<a id="opIdclassroom.courses.courseWork.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "assignment": {
      "studentWorkFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      }
    },
    "associatedWithDeveloper": true,
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "description": "string",
    "dueDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "dueTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "gradeCategory": {
      "defaultGradeDenominator": 0,
      "id": "string",
      "name": "string",
      "weight": 0
    },
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "maxPoints": 0,
    "multipleChoiceQuestion": {
      "choices": [
        "string"
      ]
    },
    "scheduledTime": "string",
    "state": "COURSE_WORK_STATE_UNSPECIFIED",
    "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
    "title": "string",
    "topicId": "string",
    "updateTime": "string",
    "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
  }'
```

`POST /v1/courses/{courseId}/courseWork`

Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CourseWork](#schemacoursework)|false|none|
|» alternateLink|body|string|false|Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.|
|» assignment|body|[Assignment](#schemaassignment)|false|Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.|
|» associatedWithDeveloper|body|boolean|false|Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this course work was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the coursework. Read-only.|
|» description|body|string|false|Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.|
|» dueDate|body|[Date](#schemadate)|false|Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.|
|» dueTime|body|[TimeOfDay](#schematimeofday)|false|Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is specified.|
|» gradeCategory|body|[GradeCategory](#schemagradecategory)|false|The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade. Read-only.|
|» id|body|string|false|Classroom-assigned identifier of this course work, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are assigned the coursework.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. CourseWork must have no more than 20 material items.|
|» maxPoints|body|number(double)|false|Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.|
|» multipleChoiceQuestion|body|[MultipleChoiceQuestion](#schemamultiplechoicequestion)|false|Multiple choice question details. For read operations, this field is populated only when `work_type` is `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this course work is scheduled to be published.|
|» state|body|string|false|Status of this course work. If unspecified, the default state is `DRAFT`.|
|» submissionModificationMode|body|string|false|Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.|
|» title|body|string|false|Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|» topicId|body|string|false|Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this course work. Read-only.|
|» workType|body|string|false|Type of this course work. The type is set when the course work is created and cannot be changed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|COURSE_WORK_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|
|» submissionModificationMode|SUBMISSION_MODIFICATION_MODE_UNSPECIFIED|
|» submissionModificationMode|MODIFIABLE_UNTIL_TURNED_IN|
|» submissionModificationMode|MODIFIABLE|
|» workType|COURSE_WORK_TYPE_UNSPECIFIED|
|» workType|ASSIGNMENT|
|» workType|SHORT_ANSWER_QUESTION|
|» workType|MULTIPLE_CHOICE_QUESTION|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWork](#schemacoursework)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.studentSubmissions.list

<a id="opIdclassroom.courses.courseWork.studentSubmissions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions`

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

<h3 id="classroomcoursescourseworkstudentsubmissionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.|
|late|query|string|false|Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|states|query|[string]|false|Requested submission states. If specified, returned student submissions match one of the specified submission states.|
|userId|query|string|false|Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|late|LATE_VALUES_UNSPECIFIED|
|late|LATE_ONLY|
|late|NOT_LATE_ONLY|
|states|SUBMISSION_STATE_UNSPECIFIED|
|states|NEW|
|states|CREATED|
|states|TURNED_IN|
|states|RETURNED|
|states|RECLAIMED_BY_STUDENT|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "studentSubmissions": [
    {
      "alternateLink": "string",
      "assignedGrade": 0,
      "assignmentSubmission": {
        "attachments": [
          {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "form": {
              "formUrl": "string",
              "responseUrl": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "link": {
              "thumbnailUrl": "string",
              "title": "string",
              "url": "string"
            },
            "youTubeVideo": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            }
          }
        ]
      },
      "associatedWithDeveloper": true,
      "courseId": "string",
      "courseWorkId": "string",
      "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
      "creationTime": "string",
      "draftGrade": 0,
      "id": "string",
      "late": true,
      "multipleChoiceSubmission": {
        "answer": "string"
      },
      "shortAnswerSubmission": {
        "answer": "string"
      },
      "state": "SUBMISSION_STATE_UNSPECIFIED",
      "submissionHistory": [
        {
          "gradeHistory": {
            "actorUserId": "string",
            "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
            "gradeTimestamp": "string",
            "maxPoints": 0,
            "pointsEarned": 0
          },
          "stateHistory": {
            "actorUserId": "string",
            "state": "STATE_UNSPECIFIED",
            "stateTimestamp": "string"
          }
        }
      ],
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStudentSubmissionsResponse](#schemaliststudentsubmissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.students.readonly )
</aside>

## classroom.courses.courseWork.studentSubmissions.get

<a id="opIdclassroom.courses.courseWork.studentSubmissions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}`

Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

<h3 id="classroomcoursescourseworkstudentsubmissionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assignedGrade": 0,
  "assignmentSubmission": {
    "attachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "courseWorkId": "string",
  "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
  "creationTime": "string",
  "draftGrade": 0,
  "id": "string",
  "late": true,
  "multipleChoiceSubmission": {
    "answer": "string"
  },
  "shortAnswerSubmission": {
    "answer": "string"
  },
  "state": "SUBMISSION_STATE_UNSPECIFIED",
  "submissionHistory": [
    {
      "gradeHistory": {
        "actorUserId": "string",
        "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
        "gradeTimestamp": "string",
        "maxPoints": 0,
        "pointsEarned": 0
      },
      "stateHistory": {
        "actorUserId": "string",
        "state": "STATE_UNSPECIFIED",
        "stateTimestamp": "string"
      }
    }
  ],
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StudentSubmission](#schemastudentsubmission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.student-submissions.students.readonly )
</aside>

## classroom.courses.courseWork.studentSubmissions.patch

<a id="opIdclassroom.courses.courseWork.studentSubmissions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assignedGrade": 0,
    "assignmentSubmission": {
      "attachments": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ]
    },
    "associatedWithDeveloper": true,
    "courseId": "string",
    "courseWorkId": "string",
    "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
    "creationTime": "string",
    "draftGrade": 0,
    "id": "string",
    "late": true,
    "multipleChoiceSubmission": {
      "answer": "string"
    },
    "shortAnswerSubmission": {
      "answer": "string"
    },
    "state": "SUBMISSION_STATE_UNSPECIFIED",
    "submissionHistory": [
      {
        "gradeHistory": {
          "actorUserId": "string",
          "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
          "gradeTimestamp": "string",
          "maxPoints": 0,
          "pointsEarned": 0
        },
        "stateHistory": {
          "actorUserId": "string",
          "state": "STATE_UNSPECIFIED",
          "stateTimestamp": "string"
        }
      }
    ],
    "updateTime": "string",
    "userId": "string"
  }'
```

`PATCH /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}`

Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{
  "alternateLink": "string",
  "assignedGrade": 0,
  "assignmentSubmission": {
    "attachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "courseWorkId": "string",
  "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
  "creationTime": "string",
  "draftGrade": 0,
  "id": "string",
  "late": true,
  "multipleChoiceSubmission": {
    "answer": "string"
  },
  "shortAnswerSubmission": {
    "answer": "string"
  },
  "state": "SUBMISSION_STATE_UNSPECIFIED",
  "submissionHistory": [
    {
      "gradeHistory": {
        "actorUserId": "string",
        "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
        "gradeTimestamp": "string",
        "maxPoints": 0,
        "pointsEarned": 0
      },
      "stateHistory": {
        "actorUserId": "string",
        "state": "STATE_UNSPECIFIED",
        "stateTimestamp": "string"
      }
    }
  ],
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|updateMask|query|string|false|Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[StudentSubmission](#schemastudentsubmission)|false|none|
|» alternateLink|body|string|false|Absolute link to the submission in the Classroom web UI. Read-only.|
|» assignedGrade|body|number(double)|false|Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.|
|» assignmentSubmission|body|[AssignmentSubmission](#schemaassignmentsubmission)|false|Submission content when course_work_type is ASSIGNMENT. Students can modify this content using ModifyAttachments.|
|» associatedWithDeveloper|body|boolean|false|Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» courseWorkId|body|string|false|Identifier for the course work this corresponds to. Read-only.|
|» courseWorkType|body|string|false|Type of course work this submission is for. Read-only.|
|» creationTime|body|string(google-datetime)|false|Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.|
|» draftGrade|body|number(double)|false|Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.|
|» id|body|string|false|Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.|
|» late|body|boolean|false|Whether this submission is late. Read-only.|
|» multipleChoiceSubmission|body|[MultipleChoiceSubmission](#schemamultiplechoicesubmission)|false|Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.|
|» shortAnswerSubmission|body|[ShortAnswerSubmission](#schemashortanswersubmission)|false|Submission content when course_work_type is SHORT_ANSWER_QUESTION.|
|» state|body|string|false|State of this submission. Read-only.|
|» submissionHistory|body|[[SubmissionHistory](#schemasubmissionhistory)]|false|The history of the submission (includes state and grade histories). Read-only.|
|» updateTime|body|string(google-datetime)|false|Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.|
|» userId|body|string|false|Identifier for the student that owns this submission. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» courseWorkType|COURSE_WORK_TYPE_UNSPECIFIED|
|» courseWorkType|ASSIGNMENT|
|» courseWorkType|SHORT_ANSWER_QUESTION|
|» courseWorkType|MULTIPLE_CHOICE_QUESTION|
|» state|SUBMISSION_STATE_UNSPECIFIED|
|» state|NEW|
|» state|CREATED|
|» state|TURNED_IN|
|» state|RETURNED|
|» state|RECLAIMED_BY_STUDENT|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assignedGrade": 0,
  "assignmentSubmission": {
    "attachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "courseWorkId": "string",
  "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
  "creationTime": "string",
  "draftGrade": 0,
  "id": "string",
  "late": true,
  "multipleChoiceSubmission": {
    "answer": "string"
  },
  "shortAnswerSubmission": {
    "answer": "string"
  },
  "state": "SUBMISSION_STATE_UNSPECIFIED",
  "submissionHistory": [
    {
      "gradeHistory": {
        "actorUserId": "string",
        "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
        "gradeTimestamp": "string",
        "maxPoints": 0,
        "pointsEarned": 0
      },
      "stateHistory": {
        "actorUserId": "string",
        "state": "STATE_UNSPECIFIED",
        "stateTimestamp": "string"
      }
    }
  ],
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StudentSubmission](#schemastudentsubmission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.studentSubmissions.modifyAttachments

<a id="opIdclassroom.courses.courseWork.studentSubmissions.modifyAttachments"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string:modifyAttachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addAttachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  }'
```

`POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments`

Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{
  "addAttachments": [
    {
      "driveFile": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youTubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ]
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsmodifyattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ModifyAttachmentsRequest](#schemamodifyattachmentsrequest)|false|none|
|» addAttachments|body|[[Attachment](#schemaattachment)]|false|Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assignedGrade": 0,
  "assignmentSubmission": {
    "attachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "courseWorkId": "string",
  "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
  "creationTime": "string",
  "draftGrade": 0,
  "id": "string",
  "late": true,
  "multipleChoiceSubmission": {
    "answer": "string"
  },
  "shortAnswerSubmission": {
    "answer": "string"
  },
  "state": "SUBMISSION_STATE_UNSPECIFIED",
  "submissionHistory": [
    {
      "gradeHistory": {
        "actorUserId": "string",
        "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
        "gradeTimestamp": "string",
        "maxPoints": 0,
        "pointsEarned": 0
      },
      "stateHistory": {
        "actorUserId": "string",
        "state": "STATE_UNSPECIFIED",
        "stateTimestamp": "string"
      }
    }
  ],
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsmodifyattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StudentSubmission](#schemastudentsubmission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.studentSubmissions.reclaim

<a id="opIdclassroom.courses.courseWork.studentSubmissions.reclaim"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string:reclaim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim`

Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsreclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ReclaimStudentSubmissionRequest](#schemareclaimstudentsubmissionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsreclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me )
</aside>

## classroom.courses.courseWork.studentSubmissions.return

<a id="opIdclassroom.courses.courseWork.studentSubmissions.return"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string:return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return`

Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsreturn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ReturnStudentSubmissionRequest](#schemareturnstudentsubmissionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsreturn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.studentSubmissions.turnIn

<a id="opIdclassroom.courses.courseWork.studentSubmissions.turnIn"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string/studentSubmissions/string:turnIn \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn`

Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsturnin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkId|path|string|true|Identifier of the course work.|
|id|path|string|true|Identifier of the student submission.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TurnInStudentSubmissionRequest](#schematurninstudentsubmissionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursescourseworkstudentsubmissionsturnin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me )
</aside>

## classroom.courses.courseWork.get

<a id="opIdclassroom.courses.courseWork.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWork/{id}`

Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

<h3 id="classroomcoursescourseworkget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWork](#schemacoursework)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students.readonly )
</aside>

## classroom.courses.courseWork.delete

<a id="opIdclassroom.courses.courseWork.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/courseWork/{id}`

Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

<h3 id="classroomcoursescourseworkdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursescourseworkdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.patch

<a id="opIdclassroom.courses.courseWork.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "assignment": {
      "studentWorkFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      }
    },
    "associatedWithDeveloper": true,
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "description": "string",
    "dueDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "dueTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "gradeCategory": {
      "defaultGradeDenominator": 0,
      "id": "string",
      "name": "string",
      "weight": 0
    },
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "maxPoints": 0,
    "multipleChoiceQuestion": {
      "choices": [
        "string"
      ]
    },
    "scheduledTime": "string",
    "state": "COURSE_WORK_STATE_UNSPECIFIED",
    "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
    "title": "string",
    "topicId": "string",
    "updateTime": "string",
    "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
  }'
```

`PATCH /v1/courses/{courseId}/courseWork/{id}`

Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work.|
|updateMask|query|string|false|Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `CourseWork` object. If a field that does not support empty values is included in the update mask and not set in the `CourseWork` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CourseWork](#schemacoursework)|false|none|
|» alternateLink|body|string|false|Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.|
|» assignment|body|[Assignment](#schemaassignment)|false|Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.|
|» associatedWithDeveloper|body|boolean|false|Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this course work was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the coursework. Read-only.|
|» description|body|string|false|Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.|
|» dueDate|body|[Date](#schemadate)|false|Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.|
|» dueTime|body|[TimeOfDay](#schematimeofday)|false|Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is specified.|
|» gradeCategory|body|[GradeCategory](#schemagradecategory)|false|The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade. Read-only.|
|» id|body|string|false|Classroom-assigned identifier of this course work, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are assigned the coursework.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. CourseWork must have no more than 20 material items.|
|» maxPoints|body|number(double)|false|Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.|
|» multipleChoiceQuestion|body|[MultipleChoiceQuestion](#schemamultiplechoicequestion)|false|Multiple choice question details. For read operations, this field is populated only when `work_type` is `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this course work is scheduled to be published.|
|» state|body|string|false|Status of this course work. If unspecified, the default state is `DRAFT`.|
|» submissionModificationMode|body|string|false|Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.|
|» title|body|string|false|Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|» topicId|body|string|false|Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this course work. Read-only.|
|» workType|body|string|false|Type of this course work. The type is set when the course work is created and cannot be changed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|COURSE_WORK_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|
|» submissionModificationMode|SUBMISSION_MODIFICATION_MODE_UNSPECIFIED|
|» submissionModificationMode|MODIFIABLE_UNTIL_TURNED_IN|
|» submissionModificationMode|MODIFIABLE|
|» workType|COURSE_WORK_TYPE_UNSPECIFIED|
|» workType|ASSIGNMENT|
|» workType|SHORT_ANSWER_QUESTION|
|» workType|MULTIPLE_CHOICE_QUESTION|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWork](#schemacoursework)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWork.modifyAssignees

<a id="opIdclassroom.courses.courseWork.modifyAssignees"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWork/string:modifyAssignees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "modifyIndividualStudentsOptions": {
      "addStudentIds": [
        "string"
      ],
      "removeStudentIds": [
        "string"
      ]
    }
  }'
```

`POST /v1/courses/{courseId}/courseWork/{id}:modifyAssignees`

Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

> Body parameter

```json
{
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "modifyIndividualStudentsOptions": {
    "addStudentIds": [
      "string"
    ],
    "removeStudentIds": [
      "string"
    ]
  }
}
```

<h3 id="classroomcoursescourseworkmodifyassignees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the coursework.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ModifyCourseWorkAssigneesRequest](#schemamodifycourseworkassigneesrequest)|false|none|
|» assigneeMode|body|string|false|Mode of the coursework describing whether it will be assigned to all students or specified individual students.|
|» modifyIndividualStudentsOptions|body|[ModifyIndividualStudentsOptions](#schemamodifyindividualstudentsoptions)|false|Set which students are assigned or not assigned to the coursework. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

<h3 id="classroomcoursescourseworkmodifyassignees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWork](#schemacoursework)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.coursework.students )
</aside>

## classroom.courses.courseWorkMaterials.list

<a id="opIdclassroom.courses.courseWorkMaterials.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWorkMaterials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWorkMaterials`

Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

<h3 id="classroomcoursescourseworkmaterialslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|courseWorkMaterialStates|query|[string]|false|Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.|
|materialDriveId|query|string|false|Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.|
|materialLink|query|string|false|Optional filtering for course work material with at least one link material whose URL partially matches the provided string.|
|orderBy|query|string|false|Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|courseWorkMaterialStates|COURSEWORK_MATERIAL_STATE_UNSPECIFIED|
|courseWorkMaterialStates|PUBLISHED|
|courseWorkMaterialStates|DRAFT|
|courseWorkMaterialStates|DELETED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseWorkMaterial": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "description": "string",
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "scheduledTime": "string",
      "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
      "title": "string",
      "topicId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCourseWorkMaterialResponse](#schemalistcourseworkmaterialresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly )
</aside>

## classroom.courses.courseWorkMaterials.create

<a id="opIdclassroom.courses.courseWorkMaterials.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWorkMaterials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "description": "string",
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "scheduledTime": "string",
    "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    "title": "string",
    "topicId": "string",
    "updateTime": "string"
  }'
```

`POST /v1/courses/{courseId}/courseWorkMaterials`

Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CourseWorkMaterial](#schemacourseworkmaterial)|false|none|
|» alternateLink|body|string|false|Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this course work material was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the course work material. Read-only.|
|» description|body|string|false|Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|» id|body|string|false|Classroom-assigned identifier of this course work material, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the course work material.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. A course work material must have no more than 20 material items.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this course work material is scheduled to be published.|
|» state|body|string|false|Status of this course work material. If unspecified, the default state is `DRAFT`.|
|» title|body|string|false|Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|» topicId|body|string|false|Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this course work material. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|COURSEWORK_MATERIAL_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWorkMaterial](#schemacourseworkmaterial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials )
</aside>

## classroom.courses.courseWorkMaterials.get

<a id="opIdclassroom.courses.courseWorkMaterials.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWorkMaterials/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/courseWorkMaterials/{id}`

Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.

<h3 id="classroomcoursescourseworkmaterialsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work material.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWorkMaterial](#schemacourseworkmaterial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly )
</aside>

## classroom.courses.courseWorkMaterials.delete

<a id="opIdclassroom.courses.courseWorkMaterials.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWorkMaterials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/courseWorkMaterials/{id}`

Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

<h3 id="classroomcoursescourseworkmaterialsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursescourseworkmaterialsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials )
</aside>

## classroom.courses.courseWorkMaterials.patch

<a id="opIdclassroom.courses.courseWorkMaterials.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/courseWorkMaterials/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
    "courseId": "string",
    "creationTime": "string",
    "creatorUserId": "string",
    "description": "string",
    "id": "string",
    "individualStudentsOptions": {
      "studentIds": [
        "string"
      ]
    },
    "materials": [
      {
        "driveFile": {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "shareMode": "UNKNOWN_SHARE_MODE"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youtubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ],
    "scheduledTime": "string",
    "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    "title": "string",
    "topicId": "string",
    "updateTime": "string"
  }'
```

`PATCH /v1/courses/{courseId}/courseWorkMaterials/{id}`

Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist

> Body parameter

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the course work material.|
|updateMask|query|string|false|Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CourseWorkMaterial](#schemacourseworkmaterial)|false|none|
|» alternateLink|body|string|false|Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|» assigneeMode|body|string|false|Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» creationTime|body|string(google-datetime)|false|Timestamp when this course work material was created. Read-only.|
|» creatorUserId|body|string|false|Identifier for the user that created the course work material. Read-only.|
|» description|body|string|false|Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|» id|body|string|false|Classroom-assigned identifier of this course work material, unique per course. Read-only.|
|» individualStudentsOptions|body|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the course work material.|
|» materials|body|[[Material](#schemamaterial)]|false|Additional materials. A course work material must have no more than 20 material items.|
|» scheduledTime|body|string(google-datetime)|false|Optional timestamp when this course work material is scheduled to be published.|
|» state|body|string|false|Status of this course work material. If unspecified, the default state is `DRAFT`.|
|» title|body|string|false|Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|» topicId|body|string|false|Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.|
|» updateTime|body|string(google-datetime)|false|Timestamp of the most recent change to this course work material. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|» assigneeMode|ALL_STUDENTS|
|» assigneeMode|INDIVIDUAL_STUDENTS|
|» state|COURSEWORK_MATERIAL_STATE_UNSPECIFIED|
|» state|PUBLISHED|
|» state|DRAFT|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursescourseworkmaterialspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CourseWorkMaterial](#schemacourseworkmaterial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courseworkmaterials )
</aside>

## classroom.courses.students.list

<a id="opIdclassroom.courses.students.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/students \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/students`

Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

<h3 id="classroomcoursesstudentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|pageSize|query|integer|false|Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "students": [
    {
      "courseId": "string",
      "profile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "studentWorkFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      },
      "userId": "string"
    }
  ]
}
```

<h3 id="classroomcoursesstudentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStudentsResponse](#schemaliststudentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.courses.students.create

<a id="opIdclassroom.courses.students.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/students \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "courseId": "string",
    "profile": {
      "emailAddress": "string",
      "id": "string",
      "name": {
        "familyName": "string",
        "fullName": "string",
        "givenName": "string"
      },
      "permissions": [
        {
          "permission": "PERMISSION_UNSPECIFIED"
        }
      ],
      "photoUrl": "string",
      "verifiedTeacher": true
    },
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    },
    "userId": "string"
  }'
```

`POST /v1/courses/{courseId}/students`

Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.

> Body parameter

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "studentWorkFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesstudentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.|
|enrollmentCode|query|string|false|Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Student](#schemastudent)|false|none|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» profile|body|[UserProfile](#schemauserprofile)|false|Global user information for the student. Read-only.|
|» studentWorkFolder|body|[DriveFolder](#schemadrivefolder)|false|Information about a Drive Folder for this student's work in this course. Only visible to the student and domain administrators. Read-only.|
|» userId|body|string|false|Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "studentWorkFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesstudentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Student](#schemastudent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.courses.students.get

<a id="opIdclassroom.courses.students.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/students/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/students/{userId}`

Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

<h3 id="classroomcoursesstudentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|userId|path|string|true|Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "studentWorkFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesstudentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Student](#schemastudent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.courses.students.delete

<a id="opIdclassroom.courses.students.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/students/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/students/{userId}`

Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

<h3 id="classroomcoursesstudentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|userId|path|string|true|Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursesstudentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.courses.teachers.list

<a id="opIdclassroom.courses.teachers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/teachers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/teachers`

Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

<h3 id="classroomcoursesteacherslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|pageSize|query|integer|false|Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "teachers": [
    {
      "courseId": "string",
      "profile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "userId": "string"
    }
  ]
}
```

<h3 id="classroomcoursesteacherslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTeachersResponse](#schemalistteachersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.courses.teachers.create

<a id="opIdclassroom.courses.teachers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/teachers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "courseId": "string",
    "profile": {
      "emailAddress": "string",
      "id": "string",
      "name": {
        "familyName": "string",
        "fullName": "string",
        "givenName": "string"
      },
      "permissions": [
        {
          "permission": "PERMISSION_UNSPECIFIED"
        }
      ],
      "photoUrl": "string",
      "verifiedTeacher": true
    },
    "userId": "string"
  }'
```

`POST /v1/courses/{courseId}/teachers`

Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.

> Body parameter

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesteacherscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Teacher](#schemateacher)|false|none|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» profile|body|[UserProfile](#schemauserprofile)|false|Global user information for the teacher. Read-only.|
|» userId|body|string|false|Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesteacherscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Teacher](#schemateacher)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.courses.teachers.get

<a id="opIdclassroom.courses.teachers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/teachers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/teachers/{userId}`

Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

<h3 id="classroomcoursesteachersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|userId|path|string|true|Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "userId": "string"
}
```

<h3 id="classroomcoursesteachersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Teacher](#schemateacher)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.courses.teachers.delete

<a id="opIdclassroom.courses.teachers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/teachers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/teachers/{userId}`

Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.

<h3 id="classroomcoursesteachersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|userId|path|string|true|Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursesteachersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.courses.topics.list

<a id="opIdclassroom.courses.topics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/topics`

Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

<h3 id="classroomcoursestopicslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "topic": [
    {
      "courseId": "string",
      "name": "string",
      "topicId": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="classroomcoursestopicslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTopicResponse](#schemalisttopicresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics.readonly )
</aside>

## classroom.courses.topics.create

<a id="opIdclassroom.courses.topics.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/topics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "courseId": "string",
    "name": "string",
    "topicId": "string",
    "updateTime": "string"
  }'
```

`POST /v1/courses/{courseId}/topics`

Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

> Body parameter

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursestopicscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Topic](#schematopic)|false|none|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» name|body|string|false|The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.|
|» topicId|body|string|false|Unique identifier for the topic. Read-only.|
|» updateTime|body|string(google-datetime)|false|The time the topic was last updated by the system. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursestopicscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics )
</aside>

## classroom.courses.topics.get

<a id="opIdclassroom.courses.topics.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/topics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{courseId}/topics/{id}`

Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.

<h3 id="classroomcoursestopicsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course.|
|id|path|string|true|Identifier of the topic.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursestopicsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics.readonly )
</aside>

## classroom.courses.topics.delete

<a id="opIdclassroom.courses.topics.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/topics/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{courseId}/topics/{id}`

Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.

<h3 id="classroomcoursestopicsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the topic to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursestopicsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics )
</aside>

## classroom.courses.topics.patch

<a id="opIdclassroom.courses.topics.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string/topics/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "courseId": "string",
    "name": "string",
    "topicId": "string",
    "updateTime": "string"
  }'
```

`PATCH /v1/courses/{courseId}/topics/{id}`

Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist

> Body parameter

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursestopicspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.|
|id|path|string|true|Identifier of the topic.|
|updateMask|query|string|false|Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Topic](#schematopic)|false|none|
|» courseId|body|string|false|Identifier of the course. Read-only.|
|» name|body|string|false|The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.|
|» topicId|body|string|false|Unique identifier for the topic. Read-only.|
|» updateTime|body|string(google-datetime)|false|The time the topic was last updated by the system. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursestopicspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.topics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.topics )
</aside>

## classroom.courses.get

<a id="opIdclassroom.courses.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/courses/{id}`

Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

<h3 id="classroomcoursesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Course](#schemacourse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses.readonly )
</aside>

## classroom.courses.update

<a id="opIdclassroom.courses.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "calendarId": "string",
    "courseGroupEmail": "string",
    "courseMaterialSets": [
      {
        "materials": [
          {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "form": {
              "formUrl": "string",
              "responseUrl": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "link": {
              "thumbnailUrl": "string",
              "title": "string",
              "url": "string"
            },
            "youTubeVideo": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            }
          }
        ],
        "title": "string"
      }
    ],
    "courseState": "COURSE_STATE_UNSPECIFIED",
    "creationTime": "string",
    "description": "string",
    "descriptionHeading": "string",
    "enrollmentCode": "string",
    "gradebookSettings": {
      "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
      "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
      "gradeCategories": [
        {
          "defaultGradeDenominator": 0,
          "id": "string",
          "name": "string",
          "weight": 0
        }
      ]
    },
    "guardiansEnabled": true,
    "id": "string",
    "name": "string",
    "ownerId": "string",
    "room": "string",
    "section": "string",
    "teacherFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    },
    "teacherGroupEmail": "string",
    "updateTime": "string"
  }'
```

`PUT /v1/courses/{id}`

Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

> Body parameter

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Course](#schemacourse)|false|none|
|» alternateLink|body|string|false|Absolute link to this course in the Classroom web UI. Read-only.|
|» calendarId|body|string|false|The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only.|
|» courseGroupEmail|body|string|false|The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» courseMaterialSets|body|[[CourseMaterialSet](#schemacoursematerialset)]|false|**Deprecated.** Sets of materials that appear on the "about" page of this course. Read-only.|
|» courseState|body|string|false|State of the course. If unspecified, the default state is `PROVISIONED`.|
|» creationTime|body|string(google-datetime)|false|Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.|
|» description|body|string|false|Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.|
|» descriptionHeading|body|string|false|Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.|
|» enrollmentCode|body|string|false|Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.|
|» gradebookSettings|body|[GradebookSettings](#schemagradebooksettings)|false|The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only|
|» guardiansEnabled|body|boolean|false|Whether or not guardian notifications are enabled for this course. Read-only.|
|» id|body|string|false|Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.|
|» name|body|string|false|Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.|
|» ownerId|body|string|false|The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.|
|» room|body|string|false|Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.|
|» section|body|string|false|Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.|
|» teacherFolder|body|[DriveFolder](#schemadrivefolder)|false|Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.|
|» teacherGroupEmail|body|string|false|The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» updateTime|body|string(google-datetime)|false|Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» courseState|COURSE_STATE_UNSPECIFIED|
|» courseState|ACTIVE|
|» courseState|ARCHIVED|
|» courseState|PROVISIONED|
|» courseState|DECLINED|
|» courseState|SUSPENDED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Course](#schemacourse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

## classroom.courses.delete

<a id="opIdclassroom.courses.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/courses/{id}`

Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

<h3 id="classroomcoursesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomcoursesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

## classroom.courses.patch

<a id="opIdclassroom.courses.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/courses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateLink": "string",
    "calendarId": "string",
    "courseGroupEmail": "string",
    "courseMaterialSets": [
      {
        "materials": [
          {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "form": {
              "formUrl": "string",
              "responseUrl": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "link": {
              "thumbnailUrl": "string",
              "title": "string",
              "url": "string"
            },
            "youTubeVideo": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            }
          }
        ],
        "title": "string"
      }
    ],
    "courseState": "COURSE_STATE_UNSPECIFIED",
    "creationTime": "string",
    "description": "string",
    "descriptionHeading": "string",
    "enrollmentCode": "string",
    "gradebookSettings": {
      "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
      "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
      "gradeCategories": [
        {
          "defaultGradeDenominator": 0,
          "id": "string",
          "name": "string",
          "weight": 0
        }
      ]
    },
    "guardiansEnabled": true,
    "id": "string",
    "name": "string",
    "ownerId": "string",
    "room": "string",
    "section": "string",
    "teacherFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    },
    "teacherGroupEmail": "string",
    "updateTime": "string"
  }'
```

`PATCH /v1/courses/{id}`

Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner

> Body parameter

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.|
|updateMask|query|string|false|Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Course](#schemacourse)|false|none|
|» alternateLink|body|string|false|Absolute link to this course in the Classroom web UI. Read-only.|
|» calendarId|body|string|false|The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only.|
|» courseGroupEmail|body|string|false|The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» courseMaterialSets|body|[[CourseMaterialSet](#schemacoursematerialset)]|false|**Deprecated.** Sets of materials that appear on the "about" page of this course. Read-only.|
|» courseState|body|string|false|State of the course. If unspecified, the default state is `PROVISIONED`.|
|» creationTime|body|string(google-datetime)|false|Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.|
|» description|body|string|false|Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.|
|» descriptionHeading|body|string|false|Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.|
|» enrollmentCode|body|string|false|Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.|
|» gradebookSettings|body|[GradebookSettings](#schemagradebooksettings)|false|The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only|
|» guardiansEnabled|body|boolean|false|Whether or not guardian notifications are enabled for this course. Read-only.|
|» id|body|string|false|Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.|
|» name|body|string|false|Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.|
|» ownerId|body|string|false|The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.|
|» room|body|string|false|Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.|
|» section|body|string|false|Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.|
|» teacherFolder|body|[DriveFolder](#schemadrivefolder)|false|Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.|
|» teacherGroupEmail|body|string|false|The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.|
|» updateTime|body|string(google-datetime)|false|Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» courseState|COURSE_STATE_UNSPECIFIED|
|» courseState|ACTIVE|
|» courseState|ARCHIVED|
|» courseState|PROVISIONED|
|» courseState|DECLINED|
|» courseState|SUSPENDED|

> Example responses

> 200 Response

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

<h3 id="classroomcoursespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Course](#schemacourse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.courses ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.courses )
</aside>

<h1 id="google-classroom-api-invitations">invitations</h1>

## classroom.invitations.list

<a id="opIdclassroom.invitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/invitations`

Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

<h3 id="classroominvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|query|string|false|Restricts returned invitations to those for a course with the specified identifier.|
|pageSize|query|integer|false|Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|userId|query|string|false|Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "invitations": [
    {
      "courseId": "string",
      "id": "string",
      "role": "COURSE_ROLE_UNSPECIFIED",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroominvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInvitationsResponse](#schemalistinvitationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.invitations.create

<a id="opIdclassroom.invitations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "courseId": "string",
    "id": "string",
    "role": "COURSE_ROLE_UNSPECIFIED",
    "userId": "string"
  }'
```

`POST /v1/invitations`

Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.

> Body parameter

```json
{
  "courseId": "string",
  "id": "string",
  "role": "COURSE_ROLE_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="classroominvitationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Invitation](#schemainvitation)|false|none|
|» courseId|body|string|false|Identifier of the course to invite the user to.|
|» id|body|string|false|Identifier assigned by Classroom. Read-only.|
|» role|body|string|false|Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.|
|» userId|body|string|false|Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|COURSE_ROLE_UNSPECIFIED|
|» role|STUDENT|
|» role|TEACHER|
|» role|OWNER|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "id": "string",
  "role": "COURSE_ROLE_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="classroominvitationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Invitation](#schemainvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.invitations.get

<a id="opIdclassroom.invitations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/invitations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/invitations/{id}`

Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

<h3 id="classroominvitationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the invitation to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "courseId": "string",
  "id": "string",
  "role": "COURSE_ROLE_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="classroominvitationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Invitation](#schemainvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

## classroom.invitations.delete

<a id="opIdclassroom.invitations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/invitations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/invitations/{id}`

Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

<h3 id="classroominvitationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the invitation to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroominvitationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

## classroom.invitations.accept

<a id="opIdclassroom.invitations.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/invitations/string:accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/invitations/{id}:accept`

Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.

<h3 id="classroominvitationsaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the invitation to accept.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroominvitationsaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters )
</aside>

<h1 id="google-classroom-api-registrations">registrations</h1>

## classroom.registrations.create

<a id="opIdclassroom.registrations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/registrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudPubsubTopic": {
      "topicName": "string"
    },
    "expiryTime": "string",
    "feed": {
      "courseRosterChangesInfo": {
        "courseId": "string"
      },
      "courseWorkChangesInfo": {
        "courseId": "string"
      },
      "feedType": "FEED_TYPE_UNSPECIFIED"
    },
    "registrationId": "string"
  }'
```

`POST /v1/registrations`

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

> Body parameter

```json
{
  "cloudPubsubTopic": {
    "topicName": "string"
  },
  "expiryTime": "string",
  "feed": {
    "courseRosterChangesInfo": {
      "courseId": "string"
    },
    "courseWorkChangesInfo": {
      "courseId": "string"
    },
    "feedType": "FEED_TYPE_UNSPECIFIED"
  },
  "registrationId": "string"
}
```

<h3 id="classroomregistrationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Registration](#schemaregistration)|false|none|
|» cloudPubsubTopic|body|[CloudPubsubTopic](#schemacloudpubsubtopic)|false|The Cloud Pub/Sub topic that notifications are to be sent to.|
|» expiryTime|body|string(google-datetime)|false|The time until which the `Registration` is effective. This is a read-only field assigned by the server.|
|» feed|body|[Feed](#schemafeed)|false|Specification for the class of notifications that Classroom should deliver to the destination.|
|» registrationId|body|string|false|A server-generated unique identifier for this `Registration`. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cloudPubsubTopic": {
    "topicName": "string"
  },
  "expiryTime": "string",
  "feed": {
    "courseRosterChangesInfo": {
      "courseId": "string"
    },
    "courseWorkChangesInfo": {
      "courseId": "string"
    },
    "feedType": "FEED_TYPE_UNSPECIFIED"
  },
  "registrationId": "string"
}
```

<h3 id="classroomregistrationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Registration](#schemaregistration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.push-notifications ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.push-notifications )
</aside>

## classroom.registrations.delete

<a id="opIdclassroom.registrations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/registrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/registrations/{registrationId}`

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

<h3 id="classroomregistrationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationId|path|string|true|The `registration_id` of the `Registration` to be deleted.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomregistrationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.push-notifications ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.push-notifications )
</aside>

<h1 id="google-classroom-api-userprofiles">userProfiles</h1>

## classroom.userProfiles.guardianInvitations.list

<a id="opIdclassroom.userProfiles.guardianInvitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardianInvitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/userProfiles/{studentId}/guardianInvitations`

Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

<h3 id="classroomuserprofilesguardianinvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.|
|invitedEmailAddress|query|string|false|If specified, only results with the specified `invited_email_address` are returned.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|states|query|[string]|false|If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|states|GUARDIAN_INVITATION_STATE_UNSPECIFIED|
|states|PENDING|
|states|COMPLETE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "guardianInvitations": [
    {
      "creationTime": "string",
      "invitationId": "string",
      "invitedEmailAddress": "string",
      "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
      "studentId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGuardianInvitationsResponse](#schemalistguardianinvitationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly )
</aside>

## classroom.userProfiles.guardianInvitations.create

<a id="opIdclassroom.userProfiles.guardianInvitations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardianInvitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creationTime": "string",
    "invitationId": "string",
    "invitedEmailAddress": "string",
    "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    "studentId": "string"
  }'
```

`POST /v1/userProfiles/{studentId}/guardianInvitations`

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.

> Body parameter

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|ID of the student (in standard format)|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GuardianInvitation](#schemaguardianinvitation)|false|none|
|» creationTime|body|string(google-datetime)|false|The time that this invitation was created. Read-only.|
|» invitationId|body|string|false|Unique identifier for this invitation. Read-only.|
|» invitedEmailAddress|body|string|false|Email address that the invitation was sent to. This field is only visible to domain administrators.|
|» state|body|string|false|The state that this invitation is in.|
|» studentId|body|string|false|ID of the student (in standard format)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|GUARDIAN_INVITATION_STATE_UNSPECIFIED|
|» state|PENDING|
|» state|COMPLETE|

> Example responses

> 200 Response

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GuardianInvitation](#schemaguardianinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students )
</aside>

## classroom.userProfiles.guardianInvitations.get

<a id="opIdclassroom.userProfiles.guardianInvitations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardianInvitations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/userProfiles/{studentId}/guardianInvitations/{invitationId}`

Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.

<h3 id="classroomuserprofilesguardianinvitationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|The ID of the student whose guardian invitation is being requested.|
|invitationId|path|string|true|The `id` field of the `GuardianInvitation` being requested.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GuardianInvitation](#schemaguardianinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly )
</aside>

## classroom.userProfiles.guardianInvitations.patch

<a id="opIdclassroom.userProfiles.guardianInvitations.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardianInvitations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creationTime": "string",
    "invitationId": "string",
    "invitedEmailAddress": "string",
    "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    "studentId": "string"
  }'
```

`PATCH /v1/userProfiles/{studentId}/guardianInvitations/{invitationId}`

Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

> Body parameter

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|The ID of the student whose guardian invitation is to be modified.|
|invitationId|path|string|true|The `id` field of the `GuardianInvitation` to be modified.|
|updateMask|query|string|false|Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GuardianInvitation](#schemaguardianinvitation)|false|none|
|» creationTime|body|string(google-datetime)|false|The time that this invitation was created. Read-only.|
|» invitationId|body|string|false|Unique identifier for this invitation. Read-only.|
|» invitedEmailAddress|body|string|false|Email address that the invitation was sent to. This field is only visible to domain administrators.|
|» state|body|string|false|The state that this invitation is in.|
|» studentId|body|string|false|ID of the student (in standard format)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|GUARDIAN_INVITATION_STATE_UNSPECIFIED|
|» state|PENDING|
|» state|COMPLETE|

> Example responses

> 200 Response

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardianinvitationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GuardianInvitation](#schemaguardianinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students )
</aside>

## classroom.userProfiles.guardians.list

<a id="opIdclassroom.userProfiles.guardians.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardians \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/userProfiles/{studentId}/guardians`

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

<h3 id="classroomuserprofilesguardianslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.|
|invitedEmailAddress|query|string|false|Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.|
|pageSize|query|integer|false|Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.|
|pageToken|query|string|false|nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "guardians": [
    {
      "guardianId": "string",
      "guardianProfile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "invitedEmailAddress": "string",
      "studentId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="classroomuserprofilesguardianslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGuardiansResponse](#schemalistguardiansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly )
</aside>

## classroom.userProfiles.guardians.get

<a id="opIdclassroom.userProfiles.guardians.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardians/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/userProfiles/{studentId}/guardians/{guardianId}`

Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.

<h3 id="classroomuserprofilesguardiansget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|guardianId|path|string|true|The `id` field from a `Guardian`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "guardianId": "string",
  "guardianProfile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "invitedEmailAddress": "string",
  "studentId": "string"
}
```

<h3 id="classroomuserprofilesguardiansget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Guardian](#schemaguardian)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly )
</aside>

## classroom.userProfiles.guardians.delete

<a id="opIdclassroom.userProfiles.guardians.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string/guardians/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/userProfiles/{studentId}/guardians/{guardianId}`

Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.

<h3 id="classroomuserprofilesguardiansdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studentId|path|string|true|The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|guardianId|path|string|true|The `id` field from a `Guardian`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="classroomuserprofilesguardiansdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.guardianlinks.students )
</aside>

## classroom.userProfiles.get

<a id="opIdclassroom.userProfiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/userProfiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/userProfiles/{userId}`

Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.

<h3 id="classroomuserprofilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "emailAddress": "string",
  "id": "string",
  "name": {
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "permissions": [
    {
      "permission": "PERMISSION_UNSPECIFIED"
    }
  ],
  "photoUrl": "string",
  "verifiedTeacher": true
}
```

<h3 id="classroomuserprofilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserProfile](#schemauserprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.emails ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.profile.photos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/classroom.rosters.readonly )
</aside>

# Schemas

<h2 id="tocS_Announcement">Announcement</h2>
<!-- backwards compatibility -->
<a id="schemaannouncement"></a>
<a id="schema_Announcement"></a>
<a id="tocSannouncement"></a>
<a id="tocsannouncement"></a>

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
  "text": "string",
  "updateTime": "string"
}
```

Announcement created by a teacher for students of the course

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|assigneeMode|string|false|none|Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.|
|courseId|string|false|none|Identifier of the course. Read-only.|
|creationTime|string(google-datetime)|false|none|Timestamp when this announcement was created. Read-only.|
|creatorUserId|string|false|none|Identifier for the user that created the announcement. Read-only.|
|id|string|false|none|Classroom-assigned identifier of this announcement, unique per course. Read-only.|
|individualStudentsOptions|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|none|Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the announcement.|
|materials|[[Material](#schemamaterial)]|false|none|Additional materials. Announcements must have no more than 20 material items.|
|scheduledTime|string(google-datetime)|false|none|Optional timestamp when this announcement is scheduled to be published.|
|state|string|false|none|Status of this announcement. If unspecified, the default state is `DRAFT`.|
|text|string|false|none|Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|updateTime|string(google-datetime)|false|none|Timestamp of the most recent change to this announcement. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|assigneeMode|ALL_STUDENTS|
|assigneeMode|INDIVIDUAL_STUDENTS|
|state|ANNOUNCEMENT_STATE_UNSPECIFIED|
|state|PUBLISHED|
|state|DRAFT|
|state|DELETED|

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "studentWorkFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  }
}
```

Additional details for assignments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studentWorkFolder|[DriveFolder](#schemadrivefolder)|false|none|Drive folder where attachments from student submissions are placed. This is only populated for course teachers and administrators.|

<h2 id="tocS_AssignmentSubmission">AssignmentSubmission</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmission"></a>
<a id="schema_AssignmentSubmission"></a>
<a id="tocSassignmentsubmission"></a>
<a id="tocsassignmentsubmission"></a>

```json
{
  "attachments": [
    {
      "driveFile": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youTubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ]
}
```

Student work for an assignment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "driveFile": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "form": {
    "formUrl": "string",
    "responseUrl": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "link": {
    "thumbnailUrl": "string",
    "title": "string",
    "url": "string"
  },
  "youTubeVideo": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  }
}
```

Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[DriveFile](#schemadrivefile)|false|none|Google Drive file attachment.|
|form|[Form](#schemaform)|false|none|Google Forms attachment.|
|link|[Link](#schemalink)|false|none|Link attachment.|
|youTubeVideo|[YouTubeVideo](#schemayoutubevideo)|false|none|Youtube video attachment.|

<h2 id="tocS_CloudPubsubTopic">CloudPubsubTopic</h2>
<!-- backwards compatibility -->
<a id="schemacloudpubsubtopic"></a>
<a id="schema_CloudPubsubTopic"></a>
<a id="tocScloudpubsubtopic"></a>
<a id="tocscloudpubsubtopic"></a>

```json
{
  "topicName": "string"
}
```

A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topicName|string|false|none|The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).|

<h2 id="tocS_Course">Course</h2>
<!-- backwards compatibility -->
<a id="schemacourse"></a>
<a id="schema_Course"></a>
<a id="tocScourse"></a>
<a id="tocscourse"></a>

```json
{
  "alternateLink": "string",
  "calendarId": "string",
  "courseGroupEmail": "string",
  "courseMaterialSets": [
    {
      "materials": [
        {
          "driveFile": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youTubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "title": "string"
    }
  ],
  "courseState": "COURSE_STATE_UNSPECIFIED",
  "creationTime": "string",
  "description": "string",
  "descriptionHeading": "string",
  "enrollmentCode": "string",
  "gradebookSettings": {
    "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
    "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
    "gradeCategories": [
      {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      }
    ]
  },
  "guardiansEnabled": true,
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "room": "string",
  "section": "string",
  "teacherFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "teacherGroupEmail": "string",
  "updateTime": "string"
}
```

A Course in Classroom.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this course in the Classroom web UI. Read-only.|
|calendarId|string|false|none|The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only.|
|courseGroupEmail|string|false|none|The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.|
|courseMaterialSets|[[CourseMaterialSet](#schemacoursematerialset)]|false|none|**Deprecated.** Sets of materials that appear on the "about" page of this course. Read-only.|
|courseState|string|false|none|State of the course. If unspecified, the default state is `PROVISIONED`.|
|creationTime|string(google-datetime)|false|none|Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.|
|description|string|false|none|Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.|
|descriptionHeading|string|false|none|Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.|
|enrollmentCode|string|false|none|Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.|
|gradebookSettings|[GradebookSettings](#schemagradebooksettings)|false|none|The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only|
|guardiansEnabled|boolean|false|none|Whether or not guardian notifications are enabled for this course. Read-only.|
|id|string|false|none|Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.|
|name|string|false|none|Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.|
|ownerId|string|false|none|The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.|
|room|string|false|none|Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.|
|section|string|false|none|Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.|
|teacherFolder|[DriveFolder](#schemadrivefolder)|false|none|Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.|
|teacherGroupEmail|string|false|none|The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|courseState|COURSE_STATE_UNSPECIFIED|
|courseState|ACTIVE|
|courseState|ARCHIVED|
|courseState|PROVISIONED|
|courseState|DECLINED|
|courseState|SUSPENDED|

<h2 id="tocS_CourseAlias">CourseAlias</h2>
<!-- backwards compatibility -->
<a id="schemacoursealias"></a>
<a id="schema_CourseAlias"></a>
<a id="tocScoursealias"></a>
<a id="tocscoursealias"></a>

```json
{
  "alias": "string"
}
```

Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.|

<h2 id="tocS_CourseMaterial">CourseMaterial</h2>
<!-- backwards compatibility -->
<a id="schemacoursematerial"></a>
<a id="schema_CourseMaterial"></a>
<a id="tocScoursematerial"></a>
<a id="tocscoursematerial"></a>

```json
{
  "driveFile": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "form": {
    "formUrl": "string",
    "responseUrl": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "link": {
    "thumbnailUrl": "string",
    "title": "string",
    "url": "string"
  },
  "youTubeVideo": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  }
}
```

A material attached to a course as part of a material set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[DriveFile](#schemadrivefile)|false|none|Google Drive file attachment.|
|form|[Form](#schemaform)|false|none|Google Forms attachment.|
|link|[Link](#schemalink)|false|none|Link atatchment.|
|youTubeVideo|[YouTubeVideo](#schemayoutubevideo)|false|none|Youtube video attachment.|

<h2 id="tocS_CourseMaterialSet">CourseMaterialSet</h2>
<!-- backwards compatibility -->
<a id="schemacoursematerialset"></a>
<a id="schema_CourseMaterialSet"></a>
<a id="tocScoursematerialset"></a>
<a id="tocscoursematerialset"></a>

```json
{
  "materials": [
    {
      "driveFile": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youTubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "title": "string"
}
```

A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|materials|[[CourseMaterial](#schemacoursematerial)]|false|none|Materials attached to this set.|
|title|string|false|none|Title for this set.|

<h2 id="tocS_CourseRosterChangesInfo">CourseRosterChangesInfo</h2>
<!-- backwards compatibility -->
<a id="schemacourserosterchangesinfo"></a>
<a id="schema_CourseRosterChangesInfo"></a>
<a id="tocScourserosterchangesinfo"></a>
<a id="tocscourserosterchangesinfo"></a>

```json
{
  "courseId": "string"
}
```

Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|The `course_id` of the course to subscribe to roster changes for.|

<h2 id="tocS_CourseWork">CourseWork</h2>
<!-- backwards compatibility -->
<a id="schemacoursework"></a>
<a id="schema_CourseWork"></a>
<a id="tocScoursework"></a>
<a id="tocscoursework"></a>

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "assignment": {
    "studentWorkFolder": {
      "alternateLink": "string",
      "id": "string",
      "title": "string"
    }
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "dueDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "dueTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "gradeCategory": {
    "defaultGradeDenominator": 0,
    "id": "string",
    "name": "string",
    "weight": 0
  },
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "maxPoints": 0,
  "multipleChoiceQuestion": {
    "choices": [
      "string"
    ]
  },
  "scheduledTime": "string",
  "state": "COURSE_WORK_STATE_UNSPECIFIED",
  "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string",
  "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
}
```

Course work created by a teacher for students of the course.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|assigneeMode|string|false|none|Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.|
|assignment|[Assignment](#schemaassignment)|false|none|Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.|
|associatedWithDeveloper|boolean|false|none|Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.|
|courseId|string|false|none|Identifier of the course. Read-only.|
|creationTime|string(google-datetime)|false|none|Timestamp when this course work was created. Read-only.|
|creatorUserId|string|false|none|Identifier for the user that created the coursework. Read-only.|
|description|string|false|none|Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.|
|dueDate|[Date](#schemadate)|false|none|Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.|
|dueTime|[TimeOfDay](#schematimeofday)|false|none|Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is specified.|
|gradeCategory|[GradeCategory](#schemagradecategory)|false|none|The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade. Read-only.|
|id|string|false|none|Classroom-assigned identifier of this course work, unique per course. Read-only.|
|individualStudentsOptions|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|none|Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are assigned the coursework.|
|materials|[[Material](#schemamaterial)]|false|none|Additional materials. CourseWork must have no more than 20 material items.|
|maxPoints|number(double)|false|none|Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.|
|multipleChoiceQuestion|[MultipleChoiceQuestion](#schemamultiplechoicequestion)|false|none|Multiple choice question details. For read operations, this field is populated only when `work_type` is `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.|
|scheduledTime|string(google-datetime)|false|none|Optional timestamp when this course work is scheduled to be published.|
|state|string|false|none|Status of this course work. If unspecified, the default state is `DRAFT`.|
|submissionModificationMode|string|false|none|Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.|
|title|string|false|none|Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|topicId|string|false|none|Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.|
|updateTime|string(google-datetime)|false|none|Timestamp of the most recent change to this course work. Read-only.|
|workType|string|false|none|Type of this course work. The type is set when the course work is created and cannot be changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|assigneeMode|ALL_STUDENTS|
|assigneeMode|INDIVIDUAL_STUDENTS|
|state|COURSE_WORK_STATE_UNSPECIFIED|
|state|PUBLISHED|
|state|DRAFT|
|state|DELETED|
|submissionModificationMode|SUBMISSION_MODIFICATION_MODE_UNSPECIFIED|
|submissionModificationMode|MODIFIABLE_UNTIL_TURNED_IN|
|submissionModificationMode|MODIFIABLE|
|workType|COURSE_WORK_TYPE_UNSPECIFIED|
|workType|ASSIGNMENT|
|workType|SHORT_ANSWER_QUESTION|
|workType|MULTIPLE_CHOICE_QUESTION|

<h2 id="tocS_CourseWorkChangesInfo">CourseWorkChangesInfo</h2>
<!-- backwards compatibility -->
<a id="schemacourseworkchangesinfo"></a>
<a id="schema_CourseWorkChangesInfo"></a>
<a id="tocScourseworkchangesinfo"></a>
<a id="tocscourseworkchangesinfo"></a>

```json
{
  "courseId": "string"
}
```

Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|The `course_id` of the course to subscribe to work changes for.|

<h2 id="tocS_CourseWorkMaterial">CourseWorkMaterial</h2>
<!-- backwards compatibility -->
<a id="schemacourseworkmaterial"></a>
<a id="schema_CourseWorkMaterial"></a>
<a id="tocScourseworkmaterial"></a>
<a id="tocscourseworkmaterial"></a>

```json
{
  "alternateLink": "string",
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "courseId": "string",
  "creationTime": "string",
  "creatorUserId": "string",
  "description": "string",
  "id": "string",
  "individualStudentsOptions": {
    "studentIds": [
      "string"
    ]
  },
  "materials": [
    {
      "driveFile": {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "shareMode": "UNKNOWN_SHARE_MODE"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youtubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ],
  "scheduledTime": "string",
  "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
  "title": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

Course work material created by a teacher for students of the course

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.|
|assigneeMode|string|false|none|Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.|
|courseId|string|false|none|Identifier of the course. Read-only.|
|creationTime|string(google-datetime)|false|none|Timestamp when this course work material was created. Read-only.|
|creatorUserId|string|false|none|Identifier for the user that created the course work material. Read-only.|
|description|string|false|none|Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.|
|id|string|false|none|Classroom-assigned identifier of this course work material, unique per course. Read-only.|
|individualStudentsOptions|[IndividualStudentsOptions](#schemaindividualstudentsoptions)|false|none|Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the course work material.|
|materials|[[Material](#schemamaterial)]|false|none|Additional materials. A course work material must have no more than 20 material items.|
|scheduledTime|string(google-datetime)|false|none|Optional timestamp when this course work material is scheduled to be published.|
|state|string|false|none|Status of this course work material. If unspecified, the default state is `DRAFT`.|
|title|string|false|none|Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.|
|topicId|string|false|none|Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.|
|updateTime|string(google-datetime)|false|none|Timestamp of the most recent change to this course work material. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|assigneeMode|ALL_STUDENTS|
|assigneeMode|INDIVIDUAL_STUDENTS|
|state|COURSEWORK_MATERIAL_STATE_UNSPECIFIED|
|state|PUBLISHED|
|state|DRAFT|
|state|DELETED|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DriveFile">DriveFile</h2>
<!-- backwards compatibility -->
<a id="schemadrivefile"></a>
<a id="schema_DriveFile"></a>
<a id="tocSdrivefile"></a>
<a id="tocsdrivefile"></a>

```json
{
  "alternateLink": "string",
  "id": "string",
  "thumbnailUrl": "string",
  "title": "string"
}
```

Representation of a Google Drive file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|URL that can be used to access the Drive item. Read-only.|
|id|string|false|none|Drive API resource ID.|
|thumbnailUrl|string|false|none|URL of a thumbnail image of the Drive item. Read-only.|
|title|string|false|none|Title of the Drive item. Read-only.|

<h2 id="tocS_DriveFolder">DriveFolder</h2>
<!-- backwards compatibility -->
<a id="schemadrivefolder"></a>
<a id="schema_DriveFolder"></a>
<a id="tocSdrivefolder"></a>
<a id="tocsdrivefolder"></a>

```json
{
  "alternateLink": "string",
  "id": "string",
  "title": "string"
}
```

Representation of a Google Drive folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|URL that can be used to access the Drive folder. Read-only.|
|id|string|false|none|Drive API resource ID.|
|title|string|false|none|Title of the Drive folder. Read-only.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_Feed">Feed</h2>
<!-- backwards compatibility -->
<a id="schemafeed"></a>
<a id="schema_Feed"></a>
<a id="tocSfeed"></a>
<a id="tocsfeed"></a>

```json
{
  "courseRosterChangesInfo": {
    "courseId": "string"
  },
  "courseWorkChangesInfo": {
    "courseId": "string"
  },
  "feedType": "FEED_TYPE_UNSPECIFIED"
}
```

A class of notifications that an application can register to receive. For example: "all roster changes for a domain".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseRosterChangesInfo|[CourseRosterChangesInfo](#schemacourserosterchangesinfo)|false|none|Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. This field must be specified if `feed_type` is `COURSE_ROSTER_CHANGES`.|
|courseWorkChangesInfo|[CourseWorkChangesInfo](#schemacourseworkchangesinfo)|false|none|Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. This field must be specified if `feed_type` is `COURSE_WORK_CHANGES`.|
|feedType|string|false|none|The type of feed.|

#### Enumerated Values

|Property|Value|
|---|---|
|feedType|FEED_TYPE_UNSPECIFIED|
|feedType|DOMAIN_ROSTER_CHANGES|
|feedType|COURSE_ROSTER_CHANGES|
|feedType|COURSE_WORK_CHANGES|

<h2 id="tocS_Form">Form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_Form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "formUrl": "string",
  "responseUrl": "string",
  "thumbnailUrl": "string",
  "title": "string"
}
```

Google Forms item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formUrl|string|false|none|URL of the form.|
|responseUrl|string|false|none|URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form. Read-only.|
|thumbnailUrl|string|false|none|URL of a thumbnail image of the Form. Read-only.|
|title|string|false|none|Title of the Form. Read-only.|

<h2 id="tocS_GlobalPermission">GlobalPermission</h2>
<!-- backwards compatibility -->
<a id="schemaglobalpermission"></a>
<a id="schema_GlobalPermission"></a>
<a id="tocSglobalpermission"></a>
<a id="tocsglobalpermission"></a>

```json
{
  "permission": "PERMISSION_UNSPECIFIED"
}
```

Global user permission description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|string|false|none|Permission value.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|PERMISSION_UNSPECIFIED|
|permission|CREATE_COURSE|

<h2 id="tocS_GradeCategory">GradeCategory</h2>
<!-- backwards compatibility -->
<a id="schemagradecategory"></a>
<a id="schema_GradeCategory"></a>
<a id="tocSgradecategory"></a>
<a id="tocsgradecategory"></a>

```json
{
  "defaultGradeDenominator": 0,
  "id": "string",
  "name": "string",
  "weight": 0
}
```

Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultGradeDenominator|integer(int32)|false|none|Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS.|
|id|string|false|none|ID of the grade category.|
|name|string|false|none|Name of the grade category.|
|weight|integer(int32)|false|none|The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES.|

<h2 id="tocS_GradeHistory">GradeHistory</h2>
<!-- backwards compatibility -->
<a id="schemagradehistory"></a>
<a id="schema_GradeHistory"></a>
<a id="tocSgradehistory"></a>
<a id="tocsgradehistory"></a>

```json
{
  "actorUserId": "string",
  "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
  "gradeTimestamp": "string",
  "maxPoints": 0,
  "pointsEarned": 0
}
```

The history of each grade on this submission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorUserId|string|false|none|The teacher who made the grade change.|
|gradeChangeType|string|false|none|The type of grade change at this time in the submission grade history.|
|gradeTimestamp|string(google-datetime)|false|none|When the grade of the submission was changed.|
|maxPoints|number(double)|false|none|The denominator of the grade at this time in the submission grade history.|
|pointsEarned|number(double)|false|none|The numerator of the grade at this time in the submission grade history.|

#### Enumerated Values

|Property|Value|
|---|---|
|gradeChangeType|UNKNOWN_GRADE_CHANGE_TYPE|
|gradeChangeType|DRAFT_GRADE_POINTS_EARNED_CHANGE|
|gradeChangeType|ASSIGNED_GRADE_POINTS_EARNED_CHANGE|
|gradeChangeType|MAX_POINTS_CHANGE|

<h2 id="tocS_GradebookSettings">GradebookSettings</h2>
<!-- backwards compatibility -->
<a id="schemagradebooksettings"></a>
<a id="schema_GradebookSettings"></a>
<a id="tocSgradebooksettings"></a>
<a id="tocsgradebooksettings"></a>

```json
{
  "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
  "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
  "gradeCategories": [
    {
      "defaultGradeDenominator": 0,
      "id": "string",
      "name": "string",
      "weight": 0
    }
  ]
}
```

The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationType|string|false|none|Indicates how the overall grade is calculated.|
|displaySetting|string|false|none|Indicates who can see the overall grade..|
|gradeCategories|[[GradeCategory](#schemagradecategory)]|false|none|Grade categories that are available for coursework in the course.|

#### Enumerated Values

|Property|Value|
|---|---|
|calculationType|CALCULATION_TYPE_UNSPECIFIED|
|calculationType|TOTAL_POINTS|
|calculationType|WEIGHTED_CATEGORIES|
|displaySetting|DISPLAY_SETTING_UNSPECIFIED|
|displaySetting|SHOW_OVERALL_GRADE|
|displaySetting|HIDE_OVERALL_GRADE|
|displaySetting|SHOW_TEACHERS_ONLY|

<h2 id="tocS_Guardian">Guardian</h2>
<!-- backwards compatibility -->
<a id="schemaguardian"></a>
<a id="schema_Guardian"></a>
<a id="tocSguardian"></a>
<a id="tocsguardian"></a>

```json
{
  "guardianId": "string",
  "guardianProfile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "invitedEmailAddress": "string",
  "studentId": "string"
}
```

Association between a student and a guardian of that student. The guardian may receive information about the student's course work.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guardianId|string|false|none|Identifier for the guardian.|
|guardianProfile|[UserProfile](#schemauserprofile)|false|none|User profile for the guardian.|
|invitedEmailAddress|string|false|none|The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.|
|studentId|string|false|none|Identifier for the student to whom the guardian relationship applies.|

<h2 id="tocS_GuardianInvitation">GuardianInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaguardianinvitation"></a>
<a id="schema_GuardianInvitation"></a>
<a id="tocSguardianinvitation"></a>
<a id="tocsguardianinvitation"></a>

```json
{
  "creationTime": "string",
  "invitationId": "string",
  "invitedEmailAddress": "string",
  "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
  "studentId": "string"
}
```

An invitation to become the guardian of a specified user, sent to a specified email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(google-datetime)|false|none|The time that this invitation was created. Read-only.|
|invitationId|string|false|none|Unique identifier for this invitation. Read-only.|
|invitedEmailAddress|string|false|none|Email address that the invitation was sent to. This field is only visible to domain administrators.|
|state|string|false|none|The state that this invitation is in.|
|studentId|string|false|none|ID of the student (in standard format)|

#### Enumerated Values

|Property|Value|
|---|---|
|state|GUARDIAN_INVITATION_STATE_UNSPECIFIED|
|state|PENDING|
|state|COMPLETE|

<h2 id="tocS_IndividualStudentsOptions">IndividualStudentsOptions</h2>
<!-- backwards compatibility -->
<a id="schemaindividualstudentsoptions"></a>
<a id="schema_IndividualStudentsOptions"></a>
<a id="tocSindividualstudentsoptions"></a>
<a id="tocsindividualstudentsoptions"></a>

```json
{
  "studentIds": [
    "string"
  ]
}
```

Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studentIds|[string]|false|none|Identifiers for the students that have access to the coursework/announcement.|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "courseId": "string",
  "id": "string",
  "role": "COURSE_ROLE_UNSPECIFIED",
  "userId": "string"
}
```

An invitation to join a course.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|Identifier of the course to invite the user to.|
|id|string|false|none|Identifier assigned by Classroom. Read-only.|
|role|string|false|none|Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.|
|userId|string|false|none|Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

#### Enumerated Values

|Property|Value|
|---|---|
|role|COURSE_ROLE_UNSPECIFIED|
|role|STUDENT|
|role|TEACHER|
|role|OWNER|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "thumbnailUrl": "string",
  "title": "string",
  "url": "string"
}
```

URL item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnailUrl|string|false|none|URL of a thumbnail image of the target URL. Read-only.|
|title|string|false|none|Title of the target of the URL. Read-only.|
|url|string|false|none|URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.|

<h2 id="tocS_ListAnnouncementsResponse">ListAnnouncementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistannouncementsresponse"></a>
<a id="schema_ListAnnouncementsResponse"></a>
<a id="tocSlistannouncementsresponse"></a>
<a id="tocslistannouncementsresponse"></a>

```json
{
  "announcements": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "scheduledTime": "string",
      "state": "ANNOUNCEMENT_STATE_UNSPECIFIED",
      "text": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing course work.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcements|[[Announcement](#schemaannouncement)]|false|none|Announcement items that match the request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListCourseAliasesResponse">ListCourseAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoursealiasesresponse"></a>
<a id="schema_ListCourseAliasesResponse"></a>
<a id="tocSlistcoursealiasesresponse"></a>
<a id="tocslistcoursealiasesresponse"></a>

```json
{
  "aliases": [
    {
      "alias": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing course aliases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[CourseAlias](#schemacoursealias)]|false|none|The course aliases.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListCourseWorkMaterialResponse">ListCourseWorkMaterialResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcourseworkmaterialresponse"></a>
<a id="schema_ListCourseWorkMaterialResponse"></a>
<a id="tocSlistcourseworkmaterialresponse"></a>
<a id="tocslistcourseworkmaterialresponse"></a>

```json
{
  "courseWorkMaterial": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "description": "string",
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "scheduledTime": "string",
      "state": "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
      "title": "string",
      "topicId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing course work material.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseWorkMaterial|[[CourseWorkMaterial](#schemacourseworkmaterial)]|false|none|Course work material items that match the request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListCourseWorkResponse">ListCourseWorkResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcourseworkresponse"></a>
<a id="schema_ListCourseWorkResponse"></a>
<a id="tocSlistcourseworkresponse"></a>
<a id="tocslistcourseworkresponse"></a>

```json
{
  "courseWork": [
    {
      "alternateLink": "string",
      "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
      "assignment": {
        "studentWorkFolder": {
          "alternateLink": "string",
          "id": "string",
          "title": "string"
        }
      },
      "associatedWithDeveloper": true,
      "courseId": "string",
      "creationTime": "string",
      "creatorUserId": "string",
      "description": "string",
      "dueDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "dueTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "gradeCategory": {
        "defaultGradeDenominator": 0,
        "id": "string",
        "name": "string",
        "weight": 0
      },
      "id": "string",
      "individualStudentsOptions": {
        "studentIds": [
          "string"
        ]
      },
      "materials": [
        {
          "driveFile": {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "shareMode": "UNKNOWN_SHARE_MODE"
          },
          "form": {
            "formUrl": "string",
            "responseUrl": "string",
            "thumbnailUrl": "string",
            "title": "string"
          },
          "link": {
            "thumbnailUrl": "string",
            "title": "string",
            "url": "string"
          },
          "youtubeVideo": {
            "alternateLink": "string",
            "id": "string",
            "thumbnailUrl": "string",
            "title": "string"
          }
        }
      ],
      "maxPoints": 0,
      "multipleChoiceQuestion": {
        "choices": [
          "string"
        ]
      },
      "scheduledTime": "string",
      "state": "COURSE_WORK_STATE_UNSPECIFIED",
      "submissionModificationMode": "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
      "title": "string",
      "topicId": "string",
      "updateTime": "string",
      "workType": "COURSE_WORK_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing course work.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseWork|[[CourseWork](#schemacoursework)]|false|none|Course work items that match the request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListCoursesResponse">ListCoursesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoursesresponse"></a>
<a id="schema_ListCoursesResponse"></a>
<a id="tocSlistcoursesresponse"></a>
<a id="tocslistcoursesresponse"></a>

```json
{
  "courses": [
    {
      "alternateLink": "string",
      "calendarId": "string",
      "courseGroupEmail": "string",
      "courseMaterialSets": [
        {
          "materials": [
            {
              "driveFile": {
                "alternateLink": "string",
                "id": "string",
                "thumbnailUrl": "string",
                "title": "string"
              },
              "form": {
                "formUrl": "string",
                "responseUrl": "string",
                "thumbnailUrl": "string",
                "title": "string"
              },
              "link": {
                "thumbnailUrl": "string",
                "title": "string",
                "url": "string"
              },
              "youTubeVideo": {
                "alternateLink": "string",
                "id": "string",
                "thumbnailUrl": "string",
                "title": "string"
              }
            }
          ],
          "title": "string"
        }
      ],
      "courseState": "COURSE_STATE_UNSPECIFIED",
      "creationTime": "string",
      "description": "string",
      "descriptionHeading": "string",
      "enrollmentCode": "string",
      "gradebookSettings": {
        "calculationType": "CALCULATION_TYPE_UNSPECIFIED",
        "displaySetting": "DISPLAY_SETTING_UNSPECIFIED",
        "gradeCategories": [
          {
            "defaultGradeDenominator": 0,
            "id": "string",
            "name": "string",
            "weight": 0
          }
        ]
      },
      "guardiansEnabled": true,
      "id": "string",
      "name": "string",
      "ownerId": "string",
      "room": "string",
      "section": "string",
      "teacherFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      },
      "teacherGroupEmail": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing courses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courses|[[Course](#schemacourse)]|false|none|Courses that match the list request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListGuardianInvitationsResponse">ListGuardianInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistguardianinvitationsresponse"></a>
<a id="schema_ListGuardianInvitationsResponse"></a>
<a id="tocSlistguardianinvitationsresponse"></a>
<a id="tocslistguardianinvitationsresponse"></a>

```json
{
  "guardianInvitations": [
    {
      "creationTime": "string",
      "invitationId": "string",
      "invitedEmailAddress": "string",
      "state": "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
      "studentId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing guardian invitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guardianInvitations|[[GuardianInvitation](#schemaguardianinvitation)]|false|none|Guardian invitations that matched the list request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListGuardiansResponse">ListGuardiansResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistguardiansresponse"></a>
<a id="schema_ListGuardiansResponse"></a>
<a id="tocSlistguardiansresponse"></a>
<a id="tocslistguardiansresponse"></a>

```json
{
  "guardians": [
    {
      "guardianId": "string",
      "guardianProfile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "invitedEmailAddress": "string",
      "studentId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing guardians.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guardians|[[Guardian](#schemaguardian)]|false|none|Guardians on this page of results that met the criteria specified in the request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "invitations": [
    {
      "courseId": "string",
      "id": "string",
      "role": "COURSE_ROLE_UNSPECIFIED",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response when listing invitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[Invitation](#schemainvitation)]|false|none|Invitations that match the list request.|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|

<h2 id="tocS_ListStudentSubmissionsResponse">ListStudentSubmissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststudentsubmissionsresponse"></a>
<a id="schema_ListStudentSubmissionsResponse"></a>
<a id="tocSliststudentsubmissionsresponse"></a>
<a id="tocsliststudentsubmissionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "studentSubmissions": [
    {
      "alternateLink": "string",
      "assignedGrade": 0,
      "assignmentSubmission": {
        "attachments": [
          {
            "driveFile": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "form": {
              "formUrl": "string",
              "responseUrl": "string",
              "thumbnailUrl": "string",
              "title": "string"
            },
            "link": {
              "thumbnailUrl": "string",
              "title": "string",
              "url": "string"
            },
            "youTubeVideo": {
              "alternateLink": "string",
              "id": "string",
              "thumbnailUrl": "string",
              "title": "string"
            }
          }
        ]
      },
      "associatedWithDeveloper": true,
      "courseId": "string",
      "courseWorkId": "string",
      "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
      "creationTime": "string",
      "draftGrade": 0,
      "id": "string",
      "late": true,
      "multipleChoiceSubmission": {
        "answer": "string"
      },
      "shortAnswerSubmission": {
        "answer": "string"
      },
      "state": "SUBMISSION_STATE_UNSPECIFIED",
      "submissionHistory": [
        {
          "gradeHistory": {
            "actorUserId": "string",
            "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
            "gradeTimestamp": "string",
            "maxPoints": 0,
            "pointsEarned": 0
          },
          "stateHistory": {
            "actorUserId": "string",
            "state": "STATE_UNSPECIFIED",
            "stateTimestamp": "string"
          }
        }
      ],
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

Response when listing student submissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|
|studentSubmissions|[[StudentSubmission](#schemastudentsubmission)]|false|none|Student work that matches the request.|

<h2 id="tocS_ListStudentsResponse">ListStudentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststudentsresponse"></a>
<a id="schema_ListStudentsResponse"></a>
<a id="tocSliststudentsresponse"></a>
<a id="tocsliststudentsresponse"></a>

```json
{
  "nextPageToken": "string",
  "students": [
    {
      "courseId": "string",
      "profile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "studentWorkFolder": {
        "alternateLink": "string",
        "id": "string",
        "title": "string"
      },
      "userId": "string"
    }
  ]
}
```

Response when listing students.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|
|students|[[Student](#schemastudent)]|false|none|Students who match the list request.|

<h2 id="tocS_ListTeachersResponse">ListTeachersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistteachersresponse"></a>
<a id="schema_ListTeachersResponse"></a>
<a id="tocSlistteachersresponse"></a>
<a id="tocslistteachersresponse"></a>

```json
{
  "nextPageToken": "string",
  "teachers": [
    {
      "courseId": "string",
      "profile": {
        "emailAddress": "string",
        "id": "string",
        "name": {
          "familyName": "string",
          "fullName": "string",
          "givenName": "string"
        },
        "permissions": [
          {
            "permission": "PERMISSION_UNSPECIFIED"
          }
        ],
        "photoUrl": "string",
        "verifiedTeacher": true
      },
      "userId": "string"
    }
  ]
}
```

Response when listing teachers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|
|teachers|[[Teacher](#schemateacher)]|false|none|Teachers who match the list request.|

<h2 id="tocS_ListTopicResponse">ListTopicResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicresponse"></a>
<a id="schema_ListTopicResponse"></a>
<a id="tocSlisttopicresponse"></a>
<a id="tocslisttopicresponse"></a>

```json
{
  "nextPageToken": "string",
  "topic": [
    {
      "courseId": "string",
      "name": "string",
      "topicId": "string",
      "updateTime": "string"
    }
  ]
}
```

Response when listing topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token identifying the next page of results to return. If empty, no further results are available.|
|topic|[[Topic](#schematopic)]|false|none|Topic items that match the request.|

<h2 id="tocS_Material">Material</h2>
<!-- backwards compatibility -->
<a id="schemamaterial"></a>
<a id="schema_Material"></a>
<a id="tocSmaterial"></a>
<a id="tocsmaterial"></a>

```json
{
  "driveFile": {
    "driveFile": {
      "alternateLink": "string",
      "id": "string",
      "thumbnailUrl": "string",
      "title": "string"
    },
    "shareMode": "UNKNOWN_SHARE_MODE"
  },
  "form": {
    "formUrl": "string",
    "responseUrl": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "link": {
    "thumbnailUrl": "string",
    "title": "string",
    "url": "string"
  },
  "youtubeVideo": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  }
}
```

Material attached to course work. When creating attachments, setting the `form` field is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[SharedDriveFile](#schemashareddrivefile)|false|none|Google Drive file material.|
|form|[Form](#schemaform)|false|none|Google Forms material.|
|link|[Link](#schemalink)|false|none|Link material. On creation, this is upgraded to a more appropriate type if possible, and this is reflected in the response.|
|youtubeVideo|[YouTubeVideo](#schemayoutubevideo)|false|none|YouTube video material.|

<h2 id="tocS_ModifyAnnouncementAssigneesRequest">ModifyAnnouncementAssigneesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyannouncementassigneesrequest"></a>
<a id="schema_ModifyAnnouncementAssigneesRequest"></a>
<a id="tocSmodifyannouncementassigneesrequest"></a>
<a id="tocsmodifyannouncementassigneesrequest"></a>

```json
{
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "modifyIndividualStudentsOptions": {
    "addStudentIds": [
      "string"
    ],
    "removeStudentIds": [
      "string"
    ]
  }
}
```

Request to modify assignee mode and options of an announcement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assigneeMode|string|false|none|Mode of the announcement describing whether it is accessible by all students or specified individual students.|
|modifyIndividualStudentsOptions|[ModifyIndividualStudentsOptions](#schemamodifyindividualstudentsoptions)|false|none|Set which students can view or cannot view the announcement. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|assigneeMode|ALL_STUDENTS|
|assigneeMode|INDIVIDUAL_STUDENTS|

<h2 id="tocS_ModifyAttachmentsRequest">ModifyAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyattachmentsrequest"></a>
<a id="schema_ModifyAttachmentsRequest"></a>
<a id="tocSmodifyattachmentsrequest"></a>
<a id="tocsmodifyattachmentsrequest"></a>

```json
{
  "addAttachments": [
    {
      "driveFile": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "form": {
        "formUrl": "string",
        "responseUrl": "string",
        "thumbnailUrl": "string",
        "title": "string"
      },
      "link": {
        "thumbnailUrl": "string",
        "title": "string",
        "url": "string"
      },
      "youTubeVideo": {
        "alternateLink": "string",
        "id": "string",
        "thumbnailUrl": "string",
        "title": "string"
      }
    }
  ]
}
```

Request to modify the attachments of a student submission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addAttachments|[[Attachment](#schemaattachment)]|false|none|Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.|

<h2 id="tocS_ModifyCourseWorkAssigneesRequest">ModifyCourseWorkAssigneesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifycourseworkassigneesrequest"></a>
<a id="schema_ModifyCourseWorkAssigneesRequest"></a>
<a id="tocSmodifycourseworkassigneesrequest"></a>
<a id="tocsmodifycourseworkassigneesrequest"></a>

```json
{
  "assigneeMode": "ASSIGNEE_MODE_UNSPECIFIED",
  "modifyIndividualStudentsOptions": {
    "addStudentIds": [
      "string"
    ],
    "removeStudentIds": [
      "string"
    ]
  }
}
```

Request to modify assignee mode and options of a coursework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assigneeMode|string|false|none|Mode of the coursework describing whether it will be assigned to all students or specified individual students.|
|modifyIndividualStudentsOptions|[ModifyIndividualStudentsOptions](#schemamodifyindividualstudentsoptions)|false|none|Set which students are assigned or not assigned to the coursework. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|ASSIGNEE_MODE_UNSPECIFIED|
|assigneeMode|ALL_STUDENTS|
|assigneeMode|INDIVIDUAL_STUDENTS|

<h2 id="tocS_ModifyIndividualStudentsOptions">ModifyIndividualStudentsOptions</h2>
<!-- backwards compatibility -->
<a id="schemamodifyindividualstudentsoptions"></a>
<a id="schema_ModifyIndividualStudentsOptions"></a>
<a id="tocSmodifyindividualstudentsoptions"></a>
<a id="tocsmodifyindividualstudentsoptions"></a>

```json
{
  "addStudentIds": [
    "string"
  ],
  "removeStudentIds": [
    "string"
  ]
}
```

Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addStudentIds|[string]|false|none|IDs of students to be added as having access to this coursework/announcement.|
|removeStudentIds|[string]|false|none|IDs of students to be removed from having access to this coursework/announcement.|

<h2 id="tocS_MultipleChoiceQuestion">MultipleChoiceQuestion</h2>
<!-- backwards compatibility -->
<a id="schemamultiplechoicequestion"></a>
<a id="schema_MultipleChoiceQuestion"></a>
<a id="tocSmultiplechoicequestion"></a>
<a id="tocsmultiplechoicequestion"></a>

```json
{
  "choices": [
    "string"
  ]
}
```

Additional details for multiple-choice questions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[string]|false|none|Possible choices.|

<h2 id="tocS_MultipleChoiceSubmission">MultipleChoiceSubmission</h2>
<!-- backwards compatibility -->
<a id="schemamultiplechoicesubmission"></a>
<a id="schema_MultipleChoiceSubmission"></a>
<a id="tocSmultiplechoicesubmission"></a>
<a id="tocsmultiplechoicesubmission"></a>

```json
{
  "answer": "string"
}
```

Student work for a multiple-choice question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|Student's select choice.|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "familyName": "string",
  "fullName": "string",
  "givenName": "string"
}
```

Details of the user's name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyName|string|false|none|The user's last name. Read-only.|
|fullName|string|false|none|The user's full name formed by concatenating the first and last name values. Read-only.|
|givenName|string|false|none|The user's first name. Read-only.|

<h2 id="tocS_ReclaimStudentSubmissionRequest">ReclaimStudentSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemareclaimstudentsubmissionrequest"></a>
<a id="schema_ReclaimStudentSubmissionRequest"></a>
<a id="tocSreclaimstudentsubmissionrequest"></a>
<a id="tocsreclaimstudentsubmissionrequest"></a>

```json
{}
```

Request to reclaim a student submission.

<h2 id="tocS_Registration">Registration</h2>
<!-- backwards compatibility -->
<a id="schemaregistration"></a>
<a id="schema_Registration"></a>
<a id="tocSregistration"></a>
<a id="tocsregistration"></a>

```json
{
  "cloudPubsubTopic": {
    "topicName": "string"
  },
  "expiryTime": "string",
  "feed": {
    "courseRosterChangesInfo": {
      "courseId": "string"
    },
    "courseWorkChangesInfo": {
      "courseId": "string"
    },
    "feedType": "FEED_TYPE_UNSPECIFIED"
  },
  "registrationId": "string"
}
```

An instruction to Classroom to send notifications from the `feed` to the provided destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudPubsubTopic|[CloudPubsubTopic](#schemacloudpubsubtopic)|false|none|The Cloud Pub/Sub topic that notifications are to be sent to.|
|expiryTime|string(google-datetime)|false|none|The time until which the `Registration` is effective. This is a read-only field assigned by the server.|
|feed|[Feed](#schemafeed)|false|none|Specification for the class of notifications that Classroom should deliver to the destination.|
|registrationId|string|false|none|A server-generated unique identifier for this `Registration`. Read-only.|

<h2 id="tocS_ReturnStudentSubmissionRequest">ReturnStudentSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemareturnstudentsubmissionrequest"></a>
<a id="schema_ReturnStudentSubmissionRequest"></a>
<a id="tocSreturnstudentsubmissionrequest"></a>
<a id="tocsreturnstudentsubmissionrequest"></a>

```json
{}
```

Request to return a student submission.

<h2 id="tocS_SharedDriveFile">SharedDriveFile</h2>
<!-- backwards compatibility -->
<a id="schemashareddrivefile"></a>
<a id="schema_SharedDriveFile"></a>
<a id="tocSshareddrivefile"></a>
<a id="tocsshareddrivefile"></a>

```json
{
  "driveFile": {
    "alternateLink": "string",
    "id": "string",
    "thumbnailUrl": "string",
    "title": "string"
  },
  "shareMode": "UNKNOWN_SHARE_MODE"
}
```

Drive file that is used as material for course work.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[DriveFile](#schemadrivefile)|false|none|Drive file details.|
|shareMode|string|false|none|Mechanism by which students access the Drive item.|

#### Enumerated Values

|Property|Value|
|---|---|
|shareMode|UNKNOWN_SHARE_MODE|
|shareMode|VIEW|
|shareMode|EDIT|
|shareMode|STUDENT_COPY|

<h2 id="tocS_ShortAnswerSubmission">ShortAnswerSubmission</h2>
<!-- backwards compatibility -->
<a id="schemashortanswersubmission"></a>
<a id="schema_ShortAnswerSubmission"></a>
<a id="tocSshortanswersubmission"></a>
<a id="tocsshortanswersubmission"></a>

```json
{
  "answer": "string"
}
```

Student work for a short answer question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|Student response to a short-answer question.|

<h2 id="tocS_StateHistory">StateHistory</h2>
<!-- backwards compatibility -->
<a id="schemastatehistory"></a>
<a id="schema_StateHistory"></a>
<a id="tocSstatehistory"></a>
<a id="tocsstatehistory"></a>

```json
{
  "actorUserId": "string",
  "state": "STATE_UNSPECIFIED",
  "stateTimestamp": "string"
}
```

The history of each state this submission has been in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorUserId|string|false|none|The teacher or student who made the change.|
|state|string|false|none|The workflow pipeline stage.|
|stateTimestamp|string(google-datetime)|false|none|When the submission entered this state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|TURNED_IN|
|state|RETURNED|
|state|RECLAIMED_BY_STUDENT|
|state|STUDENT_EDITED_AFTER_TURN_IN|

<h2 id="tocS_Student">Student</h2>
<!-- backwards compatibility -->
<a id="schemastudent"></a>
<a id="schema_Student"></a>
<a id="tocSstudent"></a>
<a id="tocsstudent"></a>

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "studentWorkFolder": {
    "alternateLink": "string",
    "id": "string",
    "title": "string"
  },
  "userId": "string"
}
```

Student in a course.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|Identifier of the course. Read-only.|
|profile|[UserProfile](#schemauserprofile)|false|none|Global user information for the student. Read-only.|
|studentWorkFolder|[DriveFolder](#schemadrivefolder)|false|none|Information about a Drive Folder for this student's work in this course. Only visible to the student and domain administrators. Read-only.|
|userId|string|false|none|Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

<h2 id="tocS_StudentSubmission">StudentSubmission</h2>
<!-- backwards compatibility -->
<a id="schemastudentsubmission"></a>
<a id="schema_StudentSubmission"></a>
<a id="tocSstudentsubmission"></a>
<a id="tocsstudentsubmission"></a>

```json
{
  "alternateLink": "string",
  "assignedGrade": 0,
  "assignmentSubmission": {
    "attachments": [
      {
        "driveFile": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "form": {
          "formUrl": "string",
          "responseUrl": "string",
          "thumbnailUrl": "string",
          "title": "string"
        },
        "link": {
          "thumbnailUrl": "string",
          "title": "string",
          "url": "string"
        },
        "youTubeVideo": {
          "alternateLink": "string",
          "id": "string",
          "thumbnailUrl": "string",
          "title": "string"
        }
      }
    ]
  },
  "associatedWithDeveloper": true,
  "courseId": "string",
  "courseWorkId": "string",
  "courseWorkType": "COURSE_WORK_TYPE_UNSPECIFIED",
  "creationTime": "string",
  "draftGrade": 0,
  "id": "string",
  "late": true,
  "multipleChoiceSubmission": {
    "answer": "string"
  },
  "shortAnswerSubmission": {
    "answer": "string"
  },
  "state": "SUBMISSION_STATE_UNSPECIFIED",
  "submissionHistory": [
    {
      "gradeHistory": {
        "actorUserId": "string",
        "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
        "gradeTimestamp": "string",
        "maxPoints": 0,
        "pointsEarned": 0
      },
      "stateHistory": {
        "actorUserId": "string",
        "state": "STATE_UNSPECIFIED",
        "stateTimestamp": "string"
      }
    }
  ],
  "updateTime": "string",
  "userId": "string"
}
```

Student submission for course work. `StudentSubmission` items are generated when a `CourseWork` item is created. Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to the submission in the Classroom web UI. Read-only.|
|assignedGrade|number(double)|false|none|Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.|
|assignmentSubmission|[AssignmentSubmission](#schemaassignmentsubmission)|false|none|Submission content when course_work_type is ASSIGNMENT. Students can modify this content using ModifyAttachments.|
|associatedWithDeveloper|boolean|false|none|Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.|
|courseId|string|false|none|Identifier of the course. Read-only.|
|courseWorkId|string|false|none|Identifier for the course work this corresponds to. Read-only.|
|courseWorkType|string|false|none|Type of course work this submission is for. Read-only.|
|creationTime|string(google-datetime)|false|none|Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.|
|draftGrade|number(double)|false|none|Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.|
|id|string|false|none|Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.|
|late|boolean|false|none|Whether this submission is late. Read-only.|
|multipleChoiceSubmission|[MultipleChoiceSubmission](#schemamultiplechoicesubmission)|false|none|Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.|
|shortAnswerSubmission|[ShortAnswerSubmission](#schemashortanswersubmission)|false|none|Submission content when course_work_type is SHORT_ANSWER_QUESTION.|
|state|string|false|none|State of this submission. Read-only.|
|submissionHistory|[[SubmissionHistory](#schemasubmissionhistory)]|false|none|The history of the submission (includes state and grade histories). Read-only.|
|updateTime|string(google-datetime)|false|none|Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.|
|userId|string|false|none|Identifier for the student that owns this submission. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|courseWorkType|COURSE_WORK_TYPE_UNSPECIFIED|
|courseWorkType|ASSIGNMENT|
|courseWorkType|SHORT_ANSWER_QUESTION|
|courseWorkType|MULTIPLE_CHOICE_QUESTION|
|state|SUBMISSION_STATE_UNSPECIFIED|
|state|NEW|
|state|CREATED|
|state|TURNED_IN|
|state|RETURNED|
|state|RECLAIMED_BY_STUDENT|

<h2 id="tocS_SubmissionHistory">SubmissionHistory</h2>
<!-- backwards compatibility -->
<a id="schemasubmissionhistory"></a>
<a id="schema_SubmissionHistory"></a>
<a id="tocSsubmissionhistory"></a>
<a id="tocssubmissionhistory"></a>

```json
{
  "gradeHistory": {
    "actorUserId": "string",
    "gradeChangeType": "UNKNOWN_GRADE_CHANGE_TYPE",
    "gradeTimestamp": "string",
    "maxPoints": 0,
    "pointsEarned": 0
  },
  "stateHistory": {
    "actorUserId": "string",
    "state": "STATE_UNSPECIFIED",
    "stateTimestamp": "string"
  }
}
```

The history of the submission. This currently includes state and grade histories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gradeHistory|[GradeHistory](#schemagradehistory)|false|none|The grade history information of the submission, if present.|
|stateHistory|[StateHistory](#schemastatehistory)|false|none|The state history information of the submission, if present.|

<h2 id="tocS_Teacher">Teacher</h2>
<!-- backwards compatibility -->
<a id="schemateacher"></a>
<a id="schema_Teacher"></a>
<a id="tocSteacher"></a>
<a id="tocsteacher"></a>

```json
{
  "courseId": "string",
  "profile": {
    "emailAddress": "string",
    "id": "string",
    "name": {
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "permissions": [
      {
        "permission": "PERMISSION_UNSPECIFIED"
      }
    ],
    "photoUrl": "string",
    "verifiedTeacher": true
  },
  "userId": "string"
}
```

Teacher of a course.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|Identifier of the course. Read-only.|
|profile|[UserProfile](#schemauserprofile)|false|none|Global user information for the teacher. Read-only.|
|userId|string|false|none|Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "courseId": "string",
  "name": "string",
  "topicId": "string",
  "updateTime": "string"
}
```

Topic created by a teacher for the course

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courseId|string|false|none|Identifier of the course. Read-only.|
|name|string|false|none|The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.|
|topicId|string|false|none|Unique identifier for the topic. Read-only.|
|updateTime|string(google-datetime)|false|none|The time the topic was last updated by the system. Read-only.|

<h2 id="tocS_TurnInStudentSubmissionRequest">TurnInStudentSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schematurninstudentsubmissionrequest"></a>
<a id="schema_TurnInStudentSubmissionRequest"></a>
<a id="tocSturninstudentsubmissionrequest"></a>
<a id="tocsturninstudentsubmissionrequest"></a>

```json
{}
```

Request to turn in a student submission.

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "emailAddress": "string",
  "id": "string",
  "name": {
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "permissions": [
    {
      "permission": "PERMISSION_UNSPECIFIED"
    }
  ],
  "photoUrl": "string",
  "verifiedTeacher": true
}
```

Global information for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|Email address of the user. Must request `https://www.googleapis.com/auth/classroom.profile.emails` scope for this field to be populated in a response body. Read-only.|
|id|string|false|none|Identifier of the user. Read-only.|
|name|[Name](#schemaname)|false|none|Name of the user. Read-only.|
|permissions|[[GlobalPermission](#schemaglobalpermission)]|false|none|Global permissions of the user. Read-only.|
|photoUrl|string|false|none|URL of user's profile photo. Must request `https://www.googleapis.com/auth/classroom.profile.photos` scope for this field to be populated in a response body. Read-only.|
|verifiedTeacher|boolean|false|none|Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only|

<h2 id="tocS_YouTubeVideo">YouTubeVideo</h2>
<!-- backwards compatibility -->
<a id="schemayoutubevideo"></a>
<a id="schema_YouTubeVideo"></a>
<a id="tocSyoutubevideo"></a>
<a id="tocsyoutubevideo"></a>

```json
{
  "alternateLink": "string",
  "id": "string",
  "thumbnailUrl": "string",
  "title": "string"
}
```

YouTube video item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|URL that can be used to view the YouTube video. Read-only.|
|id|string|false|none|YouTube API resource ID.|
|thumbnailUrl|string|false|none|URL of a thumbnail image of the YouTube video. Read-only.|
|title|string|false|none|Title of the YouTube video. Read-only.|
