<h1 id="xero-projects-api">Xero Projects API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Xero Projects API

Base URLs:

* <a href="https://api.xero.com/projects.xro/2.0">https://api.xero.com/projects.xro/2.0</a> - Xero API server for projects

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
|projects|Grant read-write access to projects|
|projects.read|Grant read-only access to projects|

<h1 id="xero-projects-api-project">Project</h1>

## Retrieves all projects

<a id="opIdgetProjects"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects`

Allows you to retrieve, create and update projects.

<h3 id="retrieves-all-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectIds|query|[string(uuid)]|false|Search for all projects that match a comma separated list of projectIds|
|contactID|query|string(uuid)|false|Filter for projects for a specific contact|
|states|query|string|false|Filter for projects in a particular state (INPROGRESS or CLOSED)|
|page|query|integer|false|set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.|
|pageSize|query|integer|false|Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "pageCount": 1,
    "itemCount": 9
  },
  "items": [
    {
      "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
      "contactId": "216830cb-9a68-487e-928b-c1a7ccc4fc81",
      "name": "FooProject28916",
      "currencyCode": "AUD",
      "minutesLogged": 180,
      "totalTaskAmount": {
        "currency": "AUD",
        "value": 60
      },
      "totalExpenseAmount": {
        "currency": "AUD",
        "value": 499
      },
      "minutesToBeInvoiced": 180,
      "taskAmountToBeInvoiced": {
        "currency": "AUD",
        "value": 60
      },
      "taskAmountInvoiced": {
        "currency": "AUD",
        "value": 0
      },
      "expenseAmountToBeInvoiced": {
        "currency": "AUD",
        "value": 499
      },
      "expenseAmountInvoiced": {
        "currency": "AUD",
        "value": 0
      },
      "projectAmountInvoiced": {
        "currency": "AUD",
        "value": 0
      },
      "deposit": {
        "currency": "AUD",
        "value": 0
      },
      "depositApplied": {
        "currency": "AUD",
        "value": 0
      },
      "creditNoteAmount": {
        "currency": "AUD",
        "value": 0
      },
      "totalInvoiced": {
        "currency": "AUD",
        "value": 0
      },
      "totalToBeInvoiced": {
        "currency": "AUD",
        "value": 559
      },
      "deadlineUtc": "2020-03-03T15:00:00Z",
      "estimate": {
        "currency": "AUD",
        "value": 99.99
      },
      "status": "INPROGRESS"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-all-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns a list of project objects|[Projects](#schemaprojects)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Create one or more new projects

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"{ \"contactId\": \"00000000-0000-0000-000-000000000000\", \"name\": \"New Kitchen\", \"deadlineUtc\": \"2019-12-10T12:59:59Z\", \"estimateAmount\": \"99.99\" }"'
```

`POST /Projects`

> Body parameter

```json
"{ \"contactId\": \"00000000-0000-0000-000-000000000000\", \"name\": \"New Kitchen\", \"deadlineUtc\": \"2019-12-10T12:59:59Z\", \"estimateAmount\": \"99.99\" }"
```

<h3 id="create-one-or-more-new-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[ProjectCreateOrUpdate](#schemaprojectcreateorupdate)|true|Create a new project with ProjectCreateOrUpdate object|
|» contactId|body|string(uuid)|false|Identifier of the contact this project was created for.|
|» name|body|string|true|Name of the project.|
|» estimateAmount|body|number(double)|false|none|
|» deadlineUtc|body|string(date-time)|false|Deadline for the project. UTC Date Time in ISO-8601 format.|

> Example responses

> 201 Response

```json
{
  "projectId": "ed957eee-bc6f-4f52-a663-aa42e6af9620",
  "contactId": "216830cb-9a68-487e-928b-c1a7ccc4fc81",
  "name": "New Kitchen",
  "currencyCode": "AUD",
  "minutesLogged": 0,
  "totalTaskAmount": {
    "currency": "AUD",
    "value": 0
  },
  "totalExpenseAmount": {
    "currency": "AUD",
    "value": 0
  },
  "minutesToBeInvoiced": 0,
  "taskAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "taskAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "expenseAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "expenseAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "projectAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "deposit": {
    "currency": "AUD",
    "value": 0
  },
  "depositApplied": {
    "currency": "AUD",
    "value": 0
  },
  "creditNoteAmount": {
    "currency": "AUD",
    "value": 0
  },
  "totalInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "totalToBeInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "deadlineUtc": "2020-03-03T15:00:00Z",
  "estimate": {
    "currency": "AUD",
    "value": 99.99
  },
  "status": "INPROGRESS"
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="create-one-or-more-new-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK/success, returns the new project object|[Project](#schemaproject)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Retrieves a single project

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects/{projectId}`

Allows you to retrieve a specific project using the projectId

<h3 id="retrieves-a-single-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
  "contactId": "216830cb-9a68-487e-928b-c1a7ccc4fc81",
  "name": "Remodeling 2012",
  "currencyCode": "AUD",
  "minutesLogged": 180,
  "totalTaskAmount": {
    "currency": "AUD",
    "value": 60
  },
  "totalExpenseAmount": {
    "currency": "AUD",
    "value": 499
  },
  "minutesToBeInvoiced": 180,
  "taskAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 60
  },
  "taskAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "expenseAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 499
  },
  "expenseAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "projectAmountInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "deposit": {
    "currency": "AUD",
    "value": 0
  },
  "depositApplied": {
    "currency": "AUD",
    "value": 0
  },
  "creditNoteAmount": {
    "currency": "AUD",
    "value": 0
  },
  "totalInvoiced": {
    "currency": "AUD",
    "value": 0
  },
  "totalToBeInvoiced": {
    "currency": "AUD",
    "value": 559
  },
  "deadlineUtc": "2020-03-03T15:00:00Z",
  "estimate": {
    "currency": "AUD",
    "value": 99.99
  },
  "status": "INPROGRESS"
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-a-single-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns the specified project object|[Project](#schemaproject)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Updates a specific project

<a id="opIdupdateProject"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"{ \"name\": \"New Kitchen\", \"deadlineUtc\": \"2017-04-23T18:25:43.511Z\", \"estimateAmount\": 99.99 }"'
```

`PUT /Projects/{projectId}`

Allows you to update a specific projects.

> Body parameter

```json
"{ \"name\": \"New Kitchen\", \"deadlineUtc\": \"2017-04-23T18:25:43.511Z\", \"estimateAmount\": 99.99 }"
```

<h3 id="updates-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[ProjectCreateOrUpdate](#schemaprojectcreateorupdate)|true|Request of type ProjectCreateOrUpdate|
|» contactId|body|string(uuid)|false|Identifier of the contact this project was created for.|
|» name|body|string|true|Name of the project.|
|» estimateAmount|body|number(double)|false|none|
|» deadlineUtc|body|string(date-time)|false|Deadline for the project. UTC Date Time in ISO-8601 format.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="updates-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## creates a project for the specified contact

<a id="opIdpatchProject"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"{ \"status\": \"INPROGRESS\" }"'
```

`PATCH /Projects/{projectId}`

Allows you to update a specific projects.

> Body parameter

```json
"{ \"status\": \"INPROGRESS\" }"
```

<h3 id="creates-a-project-for-the-specified-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[ProjectPatch](#schemaprojectpatch)|true|Update the status of an existing Project|
|» status|body|[ProjectStatus](#schemaprojectstatus)|true|Status for project|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|INPROGRESS|
|» status|CLOSED|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="creates-a-project-for-the-specified-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Retrieves a list of all project users

<a id="opIdgetProjectUsers"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/ProjectsUsers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /ProjectsUsers`

Allows you to retrieve the users on a projects.

<h3 id="retrieves-a-list-of-all-project-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.|
|pageSize|query|integer|false|Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "userId": "740add2a-a703-4b8a-a670-1093919c2040",
      "name": "Test User",
      "email": "test@xero.com"
    },
    {
      "userId": "00000000-0000-0000-0000-000000000000",
      "name": "API Team",
      "email": "api@xero.com"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-a-list-of-all-project-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns a list of project users|[ProjectUsers](#schemaprojectusers)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Retrieves all project tasks

<a id="opIdgetTasks"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects/{projectId}/Tasks`

Allows you to retrieve a specific project

<h3 id="retrieves-all-project-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|page|query|integer|false|Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.|
|pageSize|query|integer|false|Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.|
|taskIds|query|string|false|Search for all tasks that match a comma separated list of taskIds, i.e. GET https://.../tasks?taskIds={taskID},{taskID}|
|chargeType|query|[ChargeType](#schemachargetype)|false|none|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chargeType|TIME|
|chargeType|FIXED|
|chargeType|NON_CHARGEABLE|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "pageCount": 1,
    "itemCount": 1
  },
  "items": [
    {
      "name": "Demolition",
      "rate": {
        "currency": "AUD",
        "value": 20
      },
      "chargeType": "TIME",
      "status": "ACTIVE",
      "estimateMinutes": 12000,
      "taskId": "7be77337-feec-4458-bb1b-dbaa5a4aafce",
      "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
      "totalMinutes": 180,
      "totalAmount": {
        "currency": "AUD",
        "value": 60
      },
      "minutesToBeInvoiced": 180,
      "minutesInvoiced": 0,
      "nonChargeableMinutes": 0,
      "fixedMinutes": 0,
      "amountToBeInvoiced": {
        "currency": "AUD",
        "value": 60
      },
      "amountInvoiced": {
        "currency": "AUD",
        "value": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-all-project-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns a list of task objects|[Tasks](#schematasks)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Allows you to create a task

<a id="opIdcreateTask"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '"{ \"status\": \"INPROGRESS\" }"'
```

`POST /Projects/{projectId}/Tasks`

Allows you to create a specific task

> Body parameter

```json
"{ \"status\": \"INPROGRESS\" }"
```

<h3 id="allows-you-to-create-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can create a task on a specified projectId|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TaskCreateOrUpdate](#schemataskcreateorupdate)|true|The task object you are creating|
|» name|body|string|true|Name of the task. Max length 100 characters.|
|» rate|body|[Amount](#schemaamount)|true|none|
|» chargeType|body|[ChargeType](#schemachargetype)|true|Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.|
|» estimateMinutes|body|integer|false|An estimated time to perform the task|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» chargeType|TIME|
|» chargeType|FIXED|
|» chargeType|NON_CHARGEABLE|

> Example responses

> 201 Response

```json
{
  "name": "Demolition",
  "rate": {
    "currency": "AUD",
    "value": 20
  },
  "chargeType": "TIME",
  "status": "ACTIVE",
  "estimateMinutes": 12000,
  "taskId": "00000000-0000-0000-0000-000000000000",
  "projectId": "00000000-0000-0000-0000-000000000000",
  "totalMinutes": 300,
  "totalAmount": {
    "currency": "AUD",
    "value": 100
  },
  "minutesToBeInvoiced": 300,
  "minutesInvoiced": 0,
  "nonChargeableMinutes": 0,
  "fixedMinutes": 0,
  "amountToBeInvoiced": {
    "currency": "AUD",
    "value": 100
  },
  "amountInvoiced": {
    "currency": "AUD",
    "value": 0
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="allows-you-to-create-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK/success, returns the new task object|[Task](#schematask)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Retrieves a single project task

<a id="opIdgetTask"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects/{projectId}/Tasks/{taskId}`

Allows you to retrieve a specific project

<h3 id="retrieves-a-single-project-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|taskId|path|string(uuid)|true|You can specify an individual task by appending the taskId to the endpoint, i.e. GET https://.../tasks/{taskID}|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "name": "Demolition",
  "rate": {
    "currency": "AUD",
    "value": 20
  },
  "chargeType": "TIME",
  "status": "ACTIVE",
  "estimateMinutes": 12000,
  "taskId": "7be77337-feec-4458-bb1b-dbaa5a4aafce",
  "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
  "totalMinutes": 300,
  "totalAmount": {
    "currency": "AUD",
    "value": 100
  },
  "minutesToBeInvoiced": 300,
  "minutesInvoiced": 0,
  "nonChargeableMinutes": 0,
  "fixedMinutes": 0,
  "amountToBeInvoiced": {
    "currency": "AUD",
    "value": 100
  },
  "amountInvoiced": {
    "currency": "AUD",
    "value": 0
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-a-single-project-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns the specified task object|[Task](#schematask)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Allows you to update a task

<a id="opIdupdateTask"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '""'
```

`PUT /Projects/{projectId}/Tasks/{taskId}`

Allows you to update a specific task

> Body parameter

```json
""
```

<h3 id="allows-you-to-update-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|taskId|path|string(uuid)|true|You can specify an individual task by appending the id to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TaskCreateOrUpdate](#schemataskcreateorupdate)|true|The task object you are updating|
|» name|body|string|true|Name of the task. Max length 100 characters.|
|» rate|body|[Amount](#schemaamount)|true|none|
|» chargeType|body|[ChargeType](#schemachargetype)|true|Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.|
|» estimateMinutes|body|integer|false|An estimated time to perform the task|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» chargeType|TIME|
|» chargeType|FIXED|
|» chargeType|NON_CHARGEABLE|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="allows-you-to-update-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK/Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Allows you to delete a task

<a id="opIddeleteTask"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Projects/{projectId}/Tasks/{taskId}`

Allows you to delete a specific task

<h3 id="allows-you-to-delete-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|taskId|path|string(uuid)|true|You can specify an individual task by appending the id to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="allows-you-to-delete-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Retrieves all time entries associated with a specific project

<a id="opIdgetTimeEntries"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Time \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects/{projectId}/Time`

Allows you to retrieve the time entries associated with a specific project

<h3 id="retrieves-all-time-entries-associated-with-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|Identifier of the project, that the task (which the time entry is logged against) belongs to.|
|userId|query|string(uuid)|false|The xero user identifier of the person who logged time.|
|taskId|query|string(uuid)|false|Identifier of the task that time entry is logged against.|
|invoiceId|query|string(uuid)|false|Finds all time entries for this invoice.|
|contactId|query|string(uuid)|false|Finds all time entries for this contact identifier.|
|page|query|integer|false|Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.|
|pageSize|query|integer|false|Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.|
|states|query|[string]|false|Comma-separated list of states to find. Will find all time entries that are in the status of whatever is specified.|
|isChargeable|query|boolean|false|Finds all time entries which relate to tasks with the charge type `TIME` or `FIXED`.|
|dateAfterUtc|query|string(date-time)|false|ISO 8601 UTC date. Finds all time entries on or after this date filtered on the `dateUtc` field.|
|dateBeforeUtc|query|string(date-time)|false|ISO 8601 UTC date. Finds all time entries on or before this date filtered on the `dateUtc` field.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "pageCount": 1,
    "itemCount": 9
  },
  "items": [
    {
      "timeEntryId": "3cd35eca-704f-4bca-b258-236028ae8ed1",
      "userId": "740add2a-a703-4b8a-a670-1093919c2040",
      "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
      "taskId": "7be77337-feec-4458-bb1b-dbaa5a4aafce",
      "dateUtc": "2020-02-27T15:00:00Z",
      "dateEnteredUtc": "2020-02-28T03:24:29.2215641Z",
      "duration": 45,
      "description": "My description",
      "status": "ACTIVE"
    },
    {
      "timeEntryId": "00000000-0000-0000-0000-000000000000",
      "userId": "00000000-0000-0000-0000-000000000000",
      "projectId": "00000000-0000-0000-0000-000000000000",
      "taskId": "00000000-0000-0000-0000-000000000000",
      "dateUtc": "2020-02-26T15:00:00Z",
      "dateEnteredUtc": "2020-02-28T03:24:29.2215641Z",
      "duration": 30,
      "description": "My description",
      "status": "ACTIVE"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-all-time-entries-associated-with-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns a list of time entry objects|[TimeEntries](#schematimeentries)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Creates a time entry for a specific project

<a id="opIdcreateTimeEntry"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Time \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "userId": "00000000-0000-0000-0000-000000000000",
    "taskId": "00000000-0000-0000-0000-000000000000",
    "dateUtc": "2020-02-26T15:00:00Z",
    "duration": 30,
    "description": "My description"
  }'
```

`POST /Projects/{projectId}/Time`

Allows you to create a specific task

> Body parameter

```json
{
  "userId": "00000000-0000-0000-0000-000000000000",
  "taskId": "00000000-0000-0000-0000-000000000000",
  "dateUtc": "2020-02-26T15:00:00Z",
  "duration": 30,
  "description": "My description"
}
```

<h3 id="creates-a-time-entry-for-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TimeEntryCreateOrUpdate](#schematimeentrycreateorupdate)|true|The time entry object you are creating|
|» userId|body|string(uuid)|true|The xero user identifier of the person logging the time.|
|» taskId|body|string(uuid)|true|Identifier of the task that time entry is logged against.|
|» dateUtc|body|string(date-time)|true|Date time entry is logged on. UTC Date Time in ISO-8601 format.|
|» duration|body|integer|true|Number of minutes to be logged. Duration is between 1 and 59940 inclusively.|
|» description|body|string|false|An optional description of the time entry, will be set to null if not provided during update.|

> Example responses

> 200 Response

```json
{
  "timeEntryId": "c6539534-f1d2-43a6-80df-3bd1f8aca24d",
  "userId": "c6539534-f1d2-43a6-80df-3bd1f8aca24d",
  "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
  "taskId": "7be77337-feec-4458-bb1b-dbaa5a4aafce",
  "dateUtc": "2020-02-26T15:00:00Z",
  "dateEnteredUtc": "2020-02-28T20:37:42.8652832Z",
  "duration": 30,
  "description": "My description",
  "status": "ACTIVE"
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="creates-a-time-entry-for-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns the newly created time entry|[TimeEntry](#schematimeentry)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Retrieves a single time entry for a specific project

<a id="opIdgetTimeEntry"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Time/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Projects/{projectId}/Time/{timeEntryId}`

Allows you to get a single time entry in a project

<h3 id="retrieves-a-single-time-entry-for-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|timeEntryId|path|string(uuid)|true|You can specify an individual time entry by appending the id to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "timeEntryId": "3cd35eca-704f-4bca-b258-236028ae8ed1",
  "userId": "740add2a-a703-4b8a-a670-1093919c2040",
  "projectId": "b021e7cb-1903-4292-b48b-5b27b4271e3e",
  "taskId": "7be77337-feec-4458-bb1b-dbaa5a4aafce",
  "dateUtc": "2020-02-27T15:00:00Z",
  "dateEnteredUtc": "2020-02-21T21:41:22.2642727Z",
  "duration": 45,
  "description": "My description",
  "status": "ACTIVE"
}
```

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="retrieves-a-single-time-entry-for-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK/success, returns the specified time entry|[TimeEntry](#schematimeentry)|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects projects.read )
</aside>

## Updates a time entry for a specific project

<a id="opIdupdateTimeEntry"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Time/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "userId": "00000000-0000-0000-0000-000000000000",
    "taskId": "00000000-0000-0000-0000-000000000000",
    "dateUtc": "2020-02-27T15:00:00Z",
    "duration": 45,
    "description": "My UPDATED description"
  }'
```

`PUT /Projects/{projectId}/Time/{timeEntryId}`

Allows you to update time entry in a project

> Body parameter

```json
{
  "userId": "00000000-0000-0000-0000-000000000000",
  "taskId": "00000000-0000-0000-0000-000000000000",
  "dateUtc": "2020-02-27T15:00:00Z",
  "duration": 45,
  "description": "My UPDATED description"
}
```

<h3 id="updates-a-time-entry-for-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|timeEntryId|path|string(uuid)|true|You can specify an individual time entry by appending the id to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[TimeEntryCreateOrUpdate](#schematimeentrycreateorupdate)|true|The time entry object you are updating|
|» userId|body|string(uuid)|true|The xero user identifier of the person logging the time.|
|» taskId|body|string(uuid)|true|Identifier of the task that time entry is logged against.|
|» dateUtc|body|string(date-time)|true|Date time entry is logged on. UTC Date Time in ISO-8601 format.|
|» duration|body|integer|true|Number of minutes to be logged. Duration is between 1 and 59940 inclusively.|
|» description|body|string|false|An optional description of the time entry, will be set to null if not provided during update.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="updates-a-time-entry-for-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

## Deletes a time entry for a specific project

<a id="opIddeleteTimeEntry"></a>

> Code samples

```bash
curl https://api.xero.com/projects.xro/2.0/Projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/Time/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`DELETE /Projects/{projectId}/Time/{timeEntryId}`

Allows you to delete a specific time entry

<h3 id="deletes-a-time-entry-for-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|You can specify an individual project by appending the projectId to the endpoint|
|timeEntryId|path|string(uuid)|true|You can specify an individual task by appending the id to the endpoint|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "modelState": {}
}
```

<h3 id="deletes-a-time-entry-for-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - return response 204 no content|None|
|400|Bad Request|A failed request due to validation error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: projects )
</aside>

# Schemas

<h2 id="tocS_Projects">Projects</h2>
<!-- backwards compatibility -->
<a id="schemaprojects"></a>
<a id="schema_Projects"></a>
<a id="tocSprojects"></a>
<a id="tocsprojects"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "projectId": "254553fa-2be8-4991-bd5e-70a97ea12ef8",
      "contactId": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "New Kitchen",
      "currencyCode": "AUD",
      "minutesLogged": 0,
      "totalTaskAmount": {
        "currency": "AUD",
        "value": 1
      },
      "totalExpenseAmount": {
        "currency": "AUD",
        "value": 1
      },
      "estimateAmount": {
        "currency": "AUD",
        "value": 1
      },
      "minutesToBeInvoiced": 0,
      "taskAmountToBeInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "taskAmountInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "expenseAmountToBeInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "expenseAmountInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "projectAmountInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "deposit": {
        "currency": "AUD",
        "value": 1
      },
      "depositApplied": {
        "currency": "AUD",
        "value": 1
      },
      "creditNoteAmount": {
        "currency": "AUD",
        "value": 1
      },
      "deadlineUtc": "2019-12-10T12:59:59Z",
      "totalInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "totalToBeInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "estimate": {
        "currency": "AUD",
        "value": 1
      },
      "status": "INPROGRESS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[Project](#schemaproject)]|false|none|none|

<h2 id="tocS_ProjectCreateOrUpdate">ProjectCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreateorupdate"></a>
<a id="schema_ProjectCreateOrUpdate"></a>
<a id="tocSprojectcreateorupdate"></a>
<a id="tocsprojectcreateorupdate"></a>

```json
{
  "contactId": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "New Kitchen",
  "estimateAmount": 1,
  "deadlineUtc": "2019-12-10T12:59:59Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string(uuid)|false|none|Identifier of the contact this project was created for.|
|name|string|true|none|Name of the project.|
|estimateAmount|number(double)|false|none|none|
|deadlineUtc|string(date-time)|false|none|Deadline for the project. UTC Date Time in ISO-8601 format.|

<h2 id="tocS_ProjectPatch">ProjectPatch</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpatch"></a>
<a id="schema_ProjectPatch"></a>
<a id="tocSprojectpatch"></a>
<a id="tocsprojectpatch"></a>

```json
{
  "status": "INPROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ProjectStatus](#schemaprojectstatus)|true|none|Status for project|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INPROGRESS|
|status|CLOSED|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "projectId": "254553fa-2be8-4991-bd5e-70a97ea12ef8",
  "contactId": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "New Kitchen",
  "currencyCode": "AUD",
  "minutesLogged": 0,
  "totalTaskAmount": {
    "currency": "AUD",
    "value": 1
  },
  "totalExpenseAmount": {
    "currency": "AUD",
    "value": 1
  },
  "estimateAmount": {
    "currency": "AUD",
    "value": 1
  },
  "minutesToBeInvoiced": 0,
  "taskAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "taskAmountInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "expenseAmountToBeInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "expenseAmountInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "projectAmountInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "deposit": {
    "currency": "AUD",
    "value": 1
  },
  "depositApplied": {
    "currency": "AUD",
    "value": 1
  },
  "creditNoteAmount": {
    "currency": "AUD",
    "value": 1
  },
  "deadlineUtc": "2019-12-10T12:59:59Z",
  "totalInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "totalToBeInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "estimate": {
    "currency": "AUD",
    "value": 1
  },
  "status": "INPROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string(uuid)|false|none|Identifier of the project.|
|contactId|string(uuid)|false|none|Identifier of the contact this project was created for.|
|name|string|true|none|Name of the project.|
|currencyCode|[CurrencyCode](#schemacurrencycode)|false|none|3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.|
|minutesLogged|integer|false|none|A total of minutes logged against all tasks on the Project.|
|totalTaskAmount|[Amount](#schemaamount)|false|none|none|
|totalExpenseAmount|[Amount](#schemaamount)|false|none|none|
|estimateAmount|[Amount](#schemaamount)|false|none|none|
|minutesToBeInvoiced|integer|false|none|Minutes which have not been invoiced across all chargeable tasks in the project.|
|taskAmountToBeInvoiced|[Amount](#schemaamount)|false|none|none|
|taskAmountInvoiced|[Amount](#schemaamount)|false|none|none|
|expenseAmountToBeInvoiced|[Amount](#schemaamount)|false|none|none|
|expenseAmountInvoiced|[Amount](#schemaamount)|false|none|none|
|projectAmountInvoiced|[Amount](#schemaamount)|false|none|none|
|deposit|[Amount](#schemaamount)|false|none|none|
|depositApplied|[Amount](#schemaamount)|false|none|none|
|creditNoteAmount|[Amount](#schemaamount)|false|none|none|
|deadlineUtc|string(date-time)|false|none|Deadline for the project. UTC Date Time in ISO-8601 format.|
|totalInvoiced|[Amount](#schemaamount)|false|none|none|
|totalToBeInvoiced|[Amount](#schemaamount)|false|none|none|
|estimate|[Amount](#schemaamount)|false|none|none|
|status|[ProjectStatus](#schemaprojectstatus)|false|none|Status for project|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyCode|AED|
|currencyCode|AFN|
|currencyCode|ALL|
|currencyCode|AMD|
|currencyCode|ANG|
|currencyCode|AOA|
|currencyCode|ARS|
|currencyCode|AUD|
|currencyCode|AWG|
|currencyCode|AZN|
|currencyCode|BAM|
|currencyCode|BBD|
|currencyCode|BDT|
|currencyCode|BGN|
|currencyCode|BHD|
|currencyCode|BIF|
|currencyCode|BMD|
|currencyCode|BND|
|currencyCode|BOB|
|currencyCode|BRL|
|currencyCode|BSD|
|currencyCode|BTN|
|currencyCode|BWP|
|currencyCode|BYN|
|currencyCode|BZD|
|currencyCode|CAD|
|currencyCode|CDF|
|currencyCode|CHF|
|currencyCode|CLP|
|currencyCode|CNY|
|currencyCode|COP|
|currencyCode|CRC|
|currencyCode|CUC|
|currencyCode|CUP|
|currencyCode|CVE|
|currencyCode|CZK|
|currencyCode|DJF|
|currencyCode|DKK|
|currencyCode|DOP|
|currencyCode|DZD|
|currencyCode|EGP|
|currencyCode|ERN|
|currencyCode|ETB|
|currencyCode|EUR|
|currencyCode|FJD|
|currencyCode|FKP|
|currencyCode|GBP|
|currencyCode|GEL|
|currencyCode|GGP|
|currencyCode|GHS|
|currencyCode|GIP|
|currencyCode|GMD|
|currencyCode|GNF|
|currencyCode|GTQ|
|currencyCode|GYD|
|currencyCode|HKD|
|currencyCode|HNL|
|currencyCode|HRK|
|currencyCode|HTG|
|currencyCode|HUF|
|currencyCode|IDR|
|currencyCode|ILS|
|currencyCode|IMP|
|currencyCode|INR|
|currencyCode|IQD|
|currencyCode|IRR|
|currencyCode|ISK|
|currencyCode|JEP|
|currencyCode|JMD|
|currencyCode|JOD|
|currencyCode|JPY|
|currencyCode|KES|
|currencyCode|KGS|
|currencyCode|KHR|
|currencyCode|KMF|
|currencyCode|KPW|
|currencyCode|KRW|
|currencyCode|KWD|
|currencyCode|KYD|
|currencyCode|KZT|
|currencyCode|LAK|
|currencyCode|LBP|
|currencyCode|LKR|
|currencyCode|LRD|
|currencyCode|LSL|
|currencyCode|LYD|
|currencyCode|MAD|
|currencyCode|MDL|
|currencyCode|MGA|
|currencyCode|MKD|
|currencyCode|MMK|
|currencyCode|MNT|
|currencyCode|MOP|
|currencyCode|MRU|
|currencyCode|MUR|
|currencyCode|MVR|
|currencyCode|MWK|
|currencyCode|MXN|
|currencyCode|MYR|
|currencyCode|MZN|
|currencyCode|NAD|
|currencyCode|NGN|
|currencyCode|NIO|
|currencyCode|NOK|
|currencyCode|NPR|
|currencyCode|NZD|
|currencyCode|OMR|
|currencyCode|PAB|
|currencyCode|PEN|
|currencyCode|PGK|
|currencyCode|PHP|
|currencyCode|PKR|
|currencyCode|PLN|
|currencyCode|PYG|
|currencyCode|QAR|
|currencyCode|RON|
|currencyCode|RSD|
|currencyCode|RUB|
|currencyCode|RWF|
|currencyCode|SAR|
|currencyCode|SBD|
|currencyCode|SCR|
|currencyCode|SDG|
|currencyCode|SEK|
|currencyCode|SGD|
|currencyCode|SHP|
|currencyCode|SLL|
|currencyCode|SOS|
|currencyCode|SPL|
|currencyCode|SRD|
|currencyCode|STN|
|currencyCode|SVC|
|currencyCode|SYP|
|currencyCode|SZL|
|currencyCode|THB|
|currencyCode|TJS|
|currencyCode|TMT|
|currencyCode|TND|
|currencyCode|TOP|
|currencyCode|TRY|
|currencyCode|TTD|
|currencyCode|TVD|
|currencyCode|TWD|
|currencyCode|TZS|
|currencyCode|UAH|
|currencyCode|UGX|
|currencyCode|USD|
|currencyCode|UYU|
|currencyCode|UZS|
|currencyCode|VEF|
|currencyCode|VND|
|currencyCode|VUV|
|currencyCode|WST|
|currencyCode|XAF|
|currencyCode|XCD|
|currencyCode|XDR|
|currencyCode|XOF|
|currencyCode|XPF|
|currencyCode|YER|
|currencyCode|ZAR|
|currencyCode|ZMW|
|currencyCode|ZMK|
|currencyCode|ZWD|
|status|INPROGRESS|
|status|CLOSED|

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
|page|integer|false|none|Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.|
|pageSize|integer|false|none|Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.|
|pageCount|integer|false|none|Number of pages available|
|itemCount|integer|false|none|Number of items returned|

<h2 id="tocS_ProjectUsers">ProjectUsers</h2>
<!-- backwards compatibility -->
<a id="schemaprojectusers"></a>
<a id="schema_ProjectUsers"></a>
<a id="tocSprojectusers"></a>
<a id="tocsprojectusers"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "userId": "254553fa-2be8-4991-bd5e-70a97ea12ef8",
      "name": "Sidney Allen",
      "email": "sidneyallen@xero.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[ProjectUser](#schemaprojectuser)]|false|none|none|

<h2 id="tocS_ProjectUser">ProjectUser</h2>
<!-- backwards compatibility -->
<a id="schemaprojectuser"></a>
<a id="schema_ProjectUser"></a>
<a id="tocSprojectuser"></a>
<a id="tocsprojectuser"></a>

```json
{
  "userId": "254553fa-2be8-4991-bd5e-70a97ea12ef8",
  "name": "Sidney Allen",
  "email": "sidneyallen@xero.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|Identifier of the user of the project.|
|name|string|false|none|Full name of the user.|
|email|string|false|none|Email address of the user.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "AUD",
  "value": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[CurrencyCode](#schemacurrencycode)|false|none|3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.|
|value|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AED|
|currency|AFN|
|currency|ALL|
|currency|AMD|
|currency|ANG|
|currency|AOA|
|currency|ARS|
|currency|AUD|
|currency|AWG|
|currency|AZN|
|currency|BAM|
|currency|BBD|
|currency|BDT|
|currency|BGN|
|currency|BHD|
|currency|BIF|
|currency|BMD|
|currency|BND|
|currency|BOB|
|currency|BRL|
|currency|BSD|
|currency|BTN|
|currency|BWP|
|currency|BYN|
|currency|BZD|
|currency|CAD|
|currency|CDF|
|currency|CHF|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|CRC|
|currency|CUC|
|currency|CUP|
|currency|CVE|
|currency|CZK|
|currency|DJF|
|currency|DKK|
|currency|DOP|
|currency|DZD|
|currency|EGP|
|currency|ERN|
|currency|ETB|
|currency|EUR|
|currency|FJD|
|currency|FKP|
|currency|GBP|
|currency|GEL|
|currency|GGP|
|currency|GHS|
|currency|GIP|
|currency|GMD|
|currency|GNF|
|currency|GTQ|
|currency|GYD|
|currency|HKD|
|currency|HNL|
|currency|HRK|
|currency|HTG|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|IMP|
|currency|INR|
|currency|IQD|
|currency|IRR|
|currency|ISK|
|currency|JEP|
|currency|JMD|
|currency|JOD|
|currency|JPY|
|currency|KES|
|currency|KGS|
|currency|KHR|
|currency|KMF|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KYD|
|currency|KZT|
|currency|LAK|
|currency|LBP|
|currency|LKR|
|currency|LRD|
|currency|LSL|
|currency|LYD|
|currency|MAD|
|currency|MDL|
|currency|MGA|
|currency|MKD|
|currency|MMK|
|currency|MNT|
|currency|MOP|
|currency|MRU|
|currency|MUR|
|currency|MVR|
|currency|MWK|
|currency|MXN|
|currency|MYR|
|currency|MZN|
|currency|NAD|
|currency|NGN|
|currency|NIO|
|currency|NOK|
|currency|NPR|
|currency|NZD|
|currency|OMR|
|currency|PAB|
|currency|PEN|
|currency|PGK|
|currency|PHP|
|currency|PKR|
|currency|PLN|
|currency|PYG|
|currency|QAR|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|RWF|
|currency|SAR|
|currency|SBD|
|currency|SCR|
|currency|SDG|
|currency|SEK|
|currency|SGD|
|currency|SHP|
|currency|SLL|
|currency|SOS|
|currency|SPL|
|currency|SRD|
|currency|STN|
|currency|SVC|
|currency|SYP|
|currency|SZL|
|currency|THB|
|currency|TJS|
|currency|TMT|
|currency|TND|
|currency|TOP|
|currency|TRY|
|currency|TTD|
|currency|TVD|
|currency|TWD|
|currency|TZS|
|currency|UAH|
|currency|UGX|
|currency|USD|
|currency|UYU|
|currency|UZS|
|currency|VEF|
|currency|VND|
|currency|VUV|
|currency|WST|
|currency|XAF|
|currency|XCD|
|currency|XDR|
|currency|XOF|
|currency|XPF|
|currency|YER|
|currency|ZAR|
|currency|ZMW|
|currency|ZMK|
|currency|ZWD|

<h2 id="tocS_ProjectStatus">ProjectStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatus"></a>
<a id="schema_ProjectStatus"></a>
<a id="tocSprojectstatus"></a>
<a id="tocsprojectstatus"></a>

```json
"INPROGRESS"
```

Status for project

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"AUD"
```

3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "modelState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Exception message|
|modelState|object|false|none|Array of Elements of validation Errors|

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "taskId": "00000000-0000-0000-000-000000000000",
      "name": "string",
      "rate": {
        "currency": "AUD",
        "value": 1
      },
      "chargeType": "TIME",
      "estimateMinutes": 0,
      "projectId": "00000000-0000-0000-000-000000000000",
      "totalMinutes": 0,
      "totalAmount": {
        "currency": "AUD",
        "value": 1
      },
      "minutesInvoiced": 0,
      "minutesToBeInvoiced": 0,
      "fixedMinutes": 0,
      "nonChargeableMinutes": 0,
      "amountToBeInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "amountInvoiced": {
        "currency": "AUD",
        "value": 1
      },
      "status": "ACTIVE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[Task](#schematask)]|false|none|none|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "taskId": "00000000-0000-0000-000-000000000000",
  "name": "string",
  "rate": {
    "currency": "AUD",
    "value": 1
  },
  "chargeType": "TIME",
  "estimateMinutes": 0,
  "projectId": "00000000-0000-0000-000-000000000000",
  "totalMinutes": 0,
  "totalAmount": {
    "currency": "AUD",
    "value": 1
  },
  "minutesInvoiced": 0,
  "minutesToBeInvoiced": 0,
  "fixedMinutes": 0,
  "nonChargeableMinutes": 0,
  "amountToBeInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "amountInvoiced": {
    "currency": "AUD",
    "value": 1
  },
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|string(uuid)|false|none|Identifier of the task.|
|name|string|false|none|Name of the task.|
|rate|[Amount](#schemaamount)|false|none|none|
|chargeType|[ChargeType](#schemachargetype)|false|none|Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.|
|estimateMinutes|integer|false|none|An estimated time to perform the task|
|projectId|string(uuid)|false|none|Identifier of the project task belongs to.|
|totalMinutes|integer|false|none|Total minutes which have been logged against the task. Logged by assigning a time entry to a task|
|totalAmount|[Amount](#schemaamount)|false|none|none|
|minutesInvoiced|integer|false|none|Minutes on this task which have been invoiced.|
|minutesToBeInvoiced|integer|false|none|Minutes on this task which have not been invoiced.|
|fixedMinutes|integer|false|none|Minutes logged against this task if its charge type is `FIXED`.|
|nonChargeableMinutes|integer|false|none|Minutes logged against this task if its charge type is `NON_CHARGEABLE`.|
|amountToBeInvoiced|[Amount](#schemaamount)|false|none|none|
|amountInvoiced|[Amount](#schemaamount)|false|none|none|
|status|string|false|none|Status of the task. When a task of ChargeType is `FIXED` and the rate amount is invoiced the status will be set to `INVOICED` and can't be modified. A task with ChargeType of `TIME` or `NON_CHARGEABLE` cannot have a status of `INVOICED`. A `LOCKED` state indicates that the task is currently changing state (for example being invoiced) and can't be modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|chargeType|TIME|
|chargeType|FIXED|
|chargeType|NON_CHARGEABLE|
|status|ACTIVE|
|status|INVOICED|
|status|LOCKED|

<h2 id="tocS_ChargeType">ChargeType</h2>
<!-- backwards compatibility -->
<a id="schemachargetype"></a>
<a id="schema_ChargeType"></a>
<a id="tocSchargetype"></a>
<a id="tocschargetype"></a>

```json
"TIME"
```

Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.

<h2 id="tocS_TaskCreateOrUpdate">TaskCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemataskcreateorupdate"></a>
<a id="schema_TaskCreateOrUpdate"></a>
<a id="tocStaskcreateorupdate"></a>
<a id="tocstaskcreateorupdate"></a>

```json
{
  "name": "string",
  "rate": {
    "currency": "AUD",
    "value": 1
  },
  "chargeType": "TIME",
  "estimateMinutes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the task. Max length 100 characters.|
|rate|[Amount](#schemaamount)|true|none|none|
|chargeType|[ChargeType](#schemachargetype)|true|none|Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.|
|estimateMinutes|integer|false|none|An estimated time to perform the task|

#### Enumerated Values

|Property|Value|
|---|---|
|chargeType|TIME|
|chargeType|FIXED|
|chargeType|NON_CHARGEABLE|

<h2 id="tocS_TimeEntries">TimeEntries</h2>
<!-- backwards compatibility -->
<a id="schematimeentries"></a>
<a id="schema_TimeEntries"></a>
<a id="tocStimeentries"></a>
<a id="tocstimeentries"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "timeEntryId": "00000000-0000-0000-000-000000000000",
      "userId": "00000000-0000-0000-000-000000000000",
      "projectId": "00000000-0000-0000-000-000000000000",
      "taskId": "00000000-0000-0000-000-000000000000",
      "dateUtc": "1970-01-01T00:00:00Z",
      "dateEnteredUtc": "1970-01-01T00:00:00Z",
      "duration": 0,
      "description": "string",
      "status": "ACTIVE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[TimeEntry](#schematimeentry)]|false|none|none|

<h2 id="tocS_TimeEntry">TimeEntry</h2>
<!-- backwards compatibility -->
<a id="schematimeentry"></a>
<a id="schema_TimeEntry"></a>
<a id="tocStimeentry"></a>
<a id="tocstimeentry"></a>

```json
{
  "timeEntryId": "00000000-0000-0000-000-000000000000",
  "userId": "00000000-0000-0000-000-000000000000",
  "projectId": "00000000-0000-0000-000-000000000000",
  "taskId": "00000000-0000-0000-000-000000000000",
  "dateUtc": "1970-01-01T00:00:00Z",
  "dateEnteredUtc": "1970-01-01T00:00:00Z",
  "duration": 0,
  "description": "string",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeEntryId|string(uuid)|false|none|Identifier of the time entry.|
|userId|string(uuid)|false|none|The xero user identifier of the person who logged time.|
|projectId|string(uuid)|false|none|Identifier of the project, that the task (which the time entry is logged against) belongs to.|
|taskId|string(uuid)|false|none|Identifier of the task that time entry is logged against.|
|dateUtc|string(date-time)|false|none|The date time that time entry is logged on. UTC Date Time in ISO-8601 format.|
|dateEnteredUtc|string(date-time)|false|none|The date time that time entry is created. UTC Date Time in ISO-8601 format. By default it is set to server time.|
|duration|integer|false|none|The duration of logged minutes.|
|description|string|false|none|A description of the time entry.|
|status|string|false|none|Status of the time entry. By default a time entry is created with status of `ACTIVE`. A `LOCKED` state indicates that the time entry is currently changing state (for example being invoiced). Updates are not allowed when in this state. It will have a status of INVOICED once it is invoiced.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|LOCKED|
|status|INVOICED|

<h2 id="tocS_TimeEntryCreateOrUpdate">TimeEntryCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schematimeentrycreateorupdate"></a>
<a id="schema_TimeEntryCreateOrUpdate"></a>
<a id="tocStimeentrycreateorupdate"></a>
<a id="tocstimeentrycreateorupdate"></a>

```json
{
  "userId": "00000000-0000-0000-000-000000000000",
  "taskId": "00000000-0000-0000-000-000000000000",
  "dateUtc": "1970-01-01T00:00:00Z",
  "duration": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|true|none|The xero user identifier of the person logging the time.|
|taskId|string(uuid)|true|none|Identifier of the task that time entry is logged against.|
|dateUtc|string(date-time)|true|none|Date time entry is logged on. UTC Date Time in ISO-8601 format.|
|duration|integer|true|none|Number of minutes to be logged. Duration is between 1 and 59940 inclusively.|
|description|string|false|none|An optional description of the time entry, will be set to null if not provided during update.|
