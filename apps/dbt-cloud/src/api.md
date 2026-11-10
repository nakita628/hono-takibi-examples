<h1 id="dbt-cloud-api-v3">dbt Cloud API v3 v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# How to use this API

The dbt Cloud API v3 contains endpoints for programmatic administration of your dbt Cloud account.
With it, you can replicate resources across projects, accounts, and environments, or standardize project
creation for business teams. For endpoints related to jobs and runs, refer to the
[Discovery API](https://docs.getdbt.com/docs/dbt-apis/discovery-api) or [dbt Cloud API v2](https://docs.getdbt.com/dbt-cloud/api-v2#/).

The API docs are generated from an openapi spec defined in the
[dbt-cloud-openapi-spec](https://github.com/dbt-labs/dbt-cloud-openapi-spec/blob/master/openapi-v3.yaml)
repository. If you find issues in these docs or have questions about using the dbt Cloud
API, please open an issue in the dbt-cloud-openapi-spec repo or contact support@getdbt.com.

## Authentication

To authenticate an application with the dbt Cloud API, navigate to the
Account Settings page and go to Personal Tokens from the left sidebar. Create one if you don't have one already.
If you cannot access this page, confirm that your dbt Cloud account has access to the API,
and that you are using the hosted version of dbt Cloud. If dbt Cloud is running inside of a VPC
in an Enterprise account, contact your account manager for help finding your account-scoped Personal Access Token.

Once you've found your Personal Access Token (PAT) for your account, use it in the Authorization header of requests to the dbt Cloud API.
Be sure to include the `Token` prefix in the Authorization header, or the request will fail with a
"401 Unauthorized" error.

*Note: `Bearer` can be used in place of `Token` in the Authorization header. Both syntaxes are equivalent.*

**Headers**
```
Accept: application/json
Authorization: Token <your token>
```

## Pagination

All top-level API resources support bulk fetches using the "list" or `GET` API methods. These API methods accept `limit` and `offset` query parameters that you can use together to paginate results and return a subset of those results.

* Offset: Specifies how many records to skip. Can be an integer 0 and higher.
* Limit: Specifies the maximum records you want to retrieve in a single request. Can be an integer up to 100. This limit makes responses easier to handle for servers and people.

Endpoints that support pagination include some useful extra information about the pagination state. For example:

```json
{
  data: [...],
  extra: {
    // How the results were filtered
    filters: {...},
    // The order of the results
    order_by: "id",
    // The pagination state
    pagination: {
      // The number of records returned in this response
      count: 5,
      // The total number of available records
      total_count: 10,
    }

  }
}
````

## Example request

The following example uses the list projects endpoint to list the projects that your token is authorized to access.
This request skips the first 10 projects and lists the next 10 projects.
Be sure to replace `<YOUR_TOKEN>` in the Authorization header with your actual API token and `<YOUR_ACCOUNT_ID>` with your actual account ID.

```bash
curl --request GET \
  --url 'https://cloud.getdbt.com/api/v3/accounts/<YOUR_ACCOUNT_ID>/projects/?limit=10&offset=5' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Token <YOUR_TOKEN>'
```

Base URLs:

* <a href="https://cloud.getdbt.com/">https://cloud.getdbt.com/</a> - Production (US)

* <a href="https://ab123.us1.dbt.com/">https://ab123.us1.dbt.com/</a> - Production (US)

* <a href="https://emea.dbt.com/">https://emea.dbt.com/</a> - Production (Europe)

* <a href="https://au.dbt.com/">https://au.dbt.com/</a> - Production (AU)

<a href="https://www.getdbt.com/terms-of-service">Terms of service</a>
Email: <a href="mailto:support@getdbt.com">support@getdbt.com</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="dbt-cloud-api-v3-accounts">Accounts</h1>

## List Accounts

<a id="opIdList Accounts"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/`

List the Accounts that your API Token is authorized to access.

<h3 id="list-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "plan": {},
      "run_slots": 1,
      "developer_seats": 0,
      "it_seats": 0,
      "explorer_seats": 0,
      "analyst_seats": 0,
      "read_only_seats": 0,
      "locked": false,
      "lock_reason": "string",
      "lock_cause": {},
      "unlocked_at": "1970-01-01T00:00:00Z",
      "pending_cancel": false,
      "billing_email_address": "string",
      "pod_memory_request_mebibytes": 600,
      "develop_pod_memory_request_mebibytes": 0,
      "run_duration_limit_seconds": 86400,
      "queue_limit": 50,
      "enterprise_login_slug": "string",
      "business_critical": false,
      "default_license_type": "developer",
      "starter_repo_url": "string",
      "git_auth_level": "string",
      "identifier": "string",
      "trial_end_date": "1970-01-01T00:00:00Z",
      "static_subdomain": "string",
      "vanity_subdomain": "string",
      "run_locked_until": "1970-01-01T00:00:00Z",
      "state": 1,
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "copilot_locked_until": "1970-01-01T00:00:00Z",
      "agent_credit_locked": false,
      "account_migration_events": [
        null
      ],
      "groups": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountListEnveloped](#schemaaccountlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-groups">Groups</h1>

## Assign User to Groups

<a id="opIdAssign User to Groups"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/assign-groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": 0,
    "desired_group_ids": [
      0
    ],
    "add_group_ids": [
      0
    ],
    "remove_group_ids": [
      0
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/assign-groups/`

> Body parameter

```json
{
  "user_id": 0,
  "desired_group_ids": [
    0
  ],
  "add_group_ids": [
    0
  ],
  "remove_group_ids": [
    0
  ]
}
```

<h3 id="assign-user-to-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[AssignGroupsRequestRequest](#schemaassigngroupsrequestrequest)|true|none|
|» user_id|body|integer(int64)|true|none|
|» desired_group_ids|body|[integer(int64)]|false|none|
|» add_group_ids|body|[integer(int64)]|false|none|
|» remove_group_ids|body|[integer(int64)]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "name": "string",
      "state": 1,
      "assign_by_default": false,
      "sso_mapping_groups": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "group_permissions": [],
      "member_count": 0,
      "scim_managed": true
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="assign-user-to-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupListEnveloped](#schemagrouplistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Assign Group Permissions

<a id="opIdAssign Group Permissions"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/group-permissions/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "": [
      {
        "account_id": 0,
        "group_id": 0,
        "project_id": 0,
        "all_projects": true,
        "permission_set": "account_admin",
        "permission_level": 0,
        "state": 1,
        "writable_environment_categories": [
          "string"
        ]
      }
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/group-permissions/{group_id}/`

> Body parameter

```json
{
  "": [
    {
      "account_id": 0,
      "group_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "permission_level": 0,
      "state": 1,
      "writable_environment_categories": [
        "string"
      ]
    }
  ]
}
```

<h3 id="assign-group-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|path|integer(int64)|true|none|
|body|body|[GroupPermissionListRequest](#schemagrouppermissionlistrequest)|true|none|
|» |body|[[GroupPermissionRequest](#schemagrouppermissionrequest)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "group_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "permission_level": 0,
      "state": 1,
      "writable_environment_categories": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="assign-group-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupPermissionListEnveloped](#schemagrouppermissionlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Groups

<a id="opIdList Groups"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/groups/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/groups/`

<h3 id="list-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: group_permissions.|
|limit|query|integer|false|none|
|name|query|string|false|none|
|name__icontains|query|string|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|pk__in|query|[integer(int64)]|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "name": "string",
      "state": 1,
      "assign_by_default": false,
      "sso_mapping_groups": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "group_permissions": [],
      "member_count": 0,
      "scim_managed": true
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupListEnveloped](#schemagrouplistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Group

<a id="opIdCreate Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": true,
    "sso_mapping_groups": [
      "string"
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/groups/`

> Body parameter

```json
{
  "account_id": 0,
  "name": "string",
  "state": 1,
  "assign_by_default": true,
  "sso_mapping_groups": [
    "string"
  ]
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[GroupRequest](#schemagrouprequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» name|body|string|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» assign_by_default|body|boolean|true|none|
|» sso_mapping_groups|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": false,
    "sso_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "group_permissions": [],
    "member_count": 0,
    "scim_managed": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupEnveloped](#schemagroupenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Group

<a id="opIdRetrieve Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/groups/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/groups/{id}/`

<h3 id="retrieve-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: group_permissions.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": false,
    "sso_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "group_permissions": [],
    "member_count": 0,
    "scim_managed": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupEnveloped](#schemagroupenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Group

<a id="opIdUpdate Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/groups/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": true,
    "sso_mapping_groups": [
      "string"
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/groups/{id}/`

> Body parameter

```json
{
  "account_id": 0,
  "name": "string",
  "state": 1,
  "assign_by_default": true,
  "sso_mapping_groups": [
    "string"
  ]
}
```

<h3 id="update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[GroupRequest](#schemagrouprequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» name|body|string|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» assign_by_default|body|boolean|true|none|
|» sso_mapping_groups|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": false,
    "sso_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "group_permissions": [],
    "member_count": 0,
    "scim_managed": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GroupEnveloped](#schemagroupenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-audit-logs">Audit Logs</h1>

## List Recent Audit Log Events

<a id="opIdList Recent Audit Log Events"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/audit-logs/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/audit-logs/`

Fetch paginated audit log events.

Note: This API is only available to enterprise customers.

<h3 id="list-recent-audit-log-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "account_id": 0,
      "source": "string",
      "service": "string",
      "actor": null,
      "event_type": "string",
      "event_label": "string",
      "event_context": null,
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-recent-audit-log-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PublicAuditLogListEnveloped](#schemapublicauditloglistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get Recent Audit Log Events CSV

<a id="opIdGet Recent Audit Log Events CSV"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/audit-logs/download/ \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/audit-logs/download/`

Generate audit log CSV

Note: This API is only available to enterprise customers.

<h3 id="get-recent-audit-log-events-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

<h3 id="get-recent-audit-log-events-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A CSV file|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get Bulk Audit Log Export Status

<a id="opIdGet Bulk Audit Log Export Status"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/audit-logs/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/audit-logs/export/`

Check the status of a bulk export request.

Note: This API is only available to enterprise customers.

<h3 id="get-bulk-audit-log-export-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "is_running": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="get-bulk-audit-log-export-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuditLogBulkExportStatusResponseEnveloped](#schemaauditlogbulkexportstatusresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Submit Bulk Audit Log Export Request

<a id="opIdSubmit Bulk Audit Log Export Request"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/audit-logs/export/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v3/accounts/{account_id}/audit-logs/export/`

Submit a bulk export request.

Note: This API is only available to enterprise customers.

<h3 id="submit-bulk-audit-log-export-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "job_id": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="submit-bulk-audit-log-export-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuditLogStartBulkExportResponseEnveloped](#schemaauditlogstartbulkexportresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Download Bulk Audit Log Export

<a id="opIdDownload Bulk Audit Log Export"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/audit-logs/export/string/download/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/audit-logs/export/{job_identifier}/download/`

Download a bulk export of audit log events.

Note: This API is only available to enterprise customers.

<h3 id="download-bulk-audit-log-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|job_identifier|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "download_url": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="download-bulk-audit-log-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuditLogBulkExportDownloadResponseEnveloped](#schemaauditlogbulkexportdownloadresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-connections">Connections</h1>

## List Account Connections

<a id="opIdList Account Connections"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/connections/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/connections/`

List all Account Connections.

<h3 id="list-account-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|adapter_version|query|string|false|The adapter to fetch the connections for. Please note that Clickhouse is in private beta; to request access, contact your account representative.|
|has_analytics_credentials|query|boolean|false|Connections with analytics credentials|
|has_catalog_ingestion_enabled|query|boolean|false|Connections with catalog ingestion enabled|
|has_cost_insights_enabled|query|boolean|false|Connections with cost insights enabled|
|has_cost_management_enabled|query|boolean|false|Connections with cost management enabled|
|has_platform_metadata_credentials|query|boolean|false|Connections with platform metadata credentials|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|The maximum number of items to return.|
|name__icontains|query|string|false|Connection's name, case-insensitive|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|private_endpoint_id|query|string|false|Filter by private endpoint ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|adapter_version|apache_spark_v0|
|adapter_version|athena_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|clickhouse_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|fabric_v0|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|snowflake_v0|
|adapter_version|synapse_v0|
|adapter_version|teradata_v0|
|adapter_version|trino_v0|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_configuration_id": 0,
    "environment__count": 0,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="list-account-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountConnectionListResponse](#schemaaccountconnectionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Account Connection

<a id="opIdCreate Account Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/connections/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_configuration_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false,
      "oauth_client_id": "password",
      "oauth_client_secret": "password"
    }
  }'
```

`POST /api/v3/accounts/{account_id}/connections/`

Create a new Account Connection.

> Body parameter

```json
{
  "account_id": 0,
  "name": "string",
  "adapter_version": {},
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_configuration_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": false,
    "role": "string",
    "allow_sso": false,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

<h3 id="create-account-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|body|body|[AccountConnectionCreateBodyRequest](#schemaaccountconnectioncreatebodyrequest)|true|none|
|» account_id|body|integer(int64)|true|The account the connection is associated with|
|» name|body|string|true|The name of the connection|
|» adapter_version|body|object|true|Identifies the warehouse and version of its adapter. Please note that Clickhouse is in private beta; to request access, contact your account representative.|
|» private_link_endpoint_id|body|string|false|none|
|» is_ssh_tunnel_enabled|body|boolean|false|none|
|» oauth_configuration_id|body|integer(int64)|false|none|
|» config|body|[SnowflakeConnection](#schemasnowflakeconnection) \| [PostgresConnection](#schemapostgresconnection) \| [RedshiftConnection](#schemaredshiftconnection) \| [BigqueryConnection](#schemabigqueryconnection) \| [BigqueryConnectionV1](#schemabigqueryconnectionv1) \| [ClickHouseConnection](#schemaclickhouseconnection) \| [DatabricksConnection](#schemadatabricksconnection) \| [DatabricksSparkConnection](#schemadatabrickssparkconnection) \| [TrinoConnection](#schematrinoconnection) \| [FabricConnection](#schemafabricconnection) \| [SynapseConnection](#schemasynapseconnection) \| [ApacheSparkConnection](#schemaapachesparkconnection) \| [AthenaConnection](#schemaathenaconnection) \| [SalesforceConnection](#schemasalesforceconnection) \| [TeradataConnection](#schemateradataconnection)|true|The adapter-specific configuration for the connection|
|» » *anyOf*|body|[SnowflakeConnection](#schemasnowflakeconnection)|false|none|
|» » *anyOf*|body|[PostgresConnection](#schemapostgresconnection)|false|none|
|» » *anyOf*|body|[RedshiftConnection](#schemaredshiftconnection)|false|none|
|» » *anyOf*|body|[BigqueryConnection](#schemabigqueryconnection)|false|none|
|» » *anyOf*|body|[BigqueryConnectionV1](#schemabigqueryconnectionv1)|false|none|
|» » *anyOf*|body|[ClickHouseConnection](#schemaclickhouseconnection)|false|none|
|» » *anyOf*|body|[DatabricksConnection](#schemadatabricksconnection)|false|none|
|» » *anyOf*|body|[DatabricksSparkConnection](#schemadatabrickssparkconnection)|false|none|
|» » *anyOf*|body|[TrinoConnection](#schematrinoconnection)|false|none|
|» » *anyOf*|body|[FabricConnection](#schemafabricconnection)|false|none|
|» » *anyOf*|body|[SynapseConnection](#schemasynapseconnection)|false|none|
|» » *anyOf*|body|[ApacheSparkConnection](#schemaapachesparkconnection)|false|none|
|» » *anyOf*|body|[AthenaConnection](#schemaathenaconnection)|false|none|
|» » *anyOf*|body|[SalesforceConnection](#schemasalesforceconnection)|false|none|
|» » *anyOf*|body|[TeradataConnection](#schemateradataconnection)|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "is_configured_for_native_oauth": true,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-account-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountConnectionDetailResponse](#schemaaccountconnectiondetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Account Connection

<a id="opIdRetrieve Account Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/connections/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/connections/{id}/`

Retrieve details of a specific Account Connection.

<h3 id="retrieve-account-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "is_configured_for_native_oauth": true,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-account-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountConnectionDetailResponse](#schemaaccountconnectiondetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Account Connection Delete

<a id="opIdDelete Account Connection Delete"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/connections/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/connections/{id}/`

Delete an existing Account Connection Delete.

<h3 id="delete-account-connection-delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="delete-account-connection-delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Account Connection

<a id="opIdUpdate Account Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/connections/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "name": "string",
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_configuration_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": true,
      "role": "string",
      "allow_sso": true,
      "oauth_client_id": "password",
      "oauth_client_secret": "password"
    }
  }'
```

`PATCH /api/v3/accounts/{account_id}/connections/{id}/`

Update an existing Account Connection.

> Body parameter

```json
{
  "account_id": 0,
  "name": "string",
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_configuration_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": true,
    "role": "string",
    "allow_sso": true,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

<h3 id="update-account-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[AccountConnectionUpdateBodyRequest](#schemaaccountconnectionupdatebodyrequest)|false|none|
|» account_id|body|integer(int64)|false|The account the connection is associated with|
|» name|body|string|false|The name of the connection|
|» private_link_endpoint_id|body|string|false|none|
|» is_ssh_tunnel_enabled|body|boolean|false|none|
|» oauth_configuration_id|body|integer(int64)|false|none|
|» config|body|[OptionalSnowflakeConnection](#schemaoptionalsnowflakeconnection) \| [OptionalPostgresConnection](#schemaoptionalpostgresconnection) \| [OptionalRedshiftConnection](#schemaoptionalredshiftconnection) \| [OptionalBigqueryConnection](#schemaoptionalbigqueryconnection) \| [OptionalBigqueryConnectionV1](#schemaoptionalbigqueryconnectionv1) \| [OptionalClickHouseConnection](#schemaoptionalclickhouseconnection) \| [OptionalDatabricksConnection](#schemaoptionaldatabricksconnection) \| [OptionalDatabricksSparkConnection](#schemaoptionaldatabrickssparkconnection) \| [OptionalTrinoConnection](#schemaoptionaltrinoconnection) \| [OptionalFabricConnection](#schemaoptionalfabricconnection) \| [OptionalSynapseConnection](#schemaoptionalsynapseconnection) \| [OptionalApacheSparkConnection](#schemaoptionalapachesparkconnection) \| [OptionalAthenaConnection](#schemaoptionalathenaconnection) \| [OptionalSalesforceConnection](#schemaoptionalsalesforceconnection) \| [OptionalTeradataConnection](#schemaoptionalteradataconnection)|false|The adapter-specific configuration for the connection|
|» » *anyOf*|body|[OptionalSnowflakeConnection](#schemaoptionalsnowflakeconnection)|false|none|
|» » *anyOf*|body|[OptionalPostgresConnection](#schemaoptionalpostgresconnection)|false|none|
|» » *anyOf*|body|[OptionalRedshiftConnection](#schemaoptionalredshiftconnection)|false|none|
|» » *anyOf*|body|[OptionalBigqueryConnection](#schemaoptionalbigqueryconnection)|false|none|
|» » *anyOf*|body|[OptionalBigqueryConnectionV1](#schemaoptionalbigqueryconnectionv1)|false|none|
|» » *anyOf*|body|[OptionalClickHouseConnection](#schemaoptionalclickhouseconnection)|false|none|
|» » *anyOf*|body|[OptionalDatabricksConnection](#schemaoptionaldatabricksconnection)|false|none|
|» » *anyOf*|body|[OptionalDatabricksSparkConnection](#schemaoptionaldatabrickssparkconnection)|false|none|
|» » *anyOf*|body|[OptionalTrinoConnection](#schemaoptionaltrinoconnection)|false|none|
|» » *anyOf*|body|[OptionalFabricConnection](#schemaoptionalfabricconnection)|false|none|
|» » *anyOf*|body|[OptionalSynapseConnection](#schemaoptionalsynapseconnection)|false|none|
|» » *anyOf*|body|[OptionalApacheSparkConnection](#schemaoptionalapachesparkconnection)|false|none|
|» » *anyOf*|body|[OptionalAthenaConnection](#schemaoptionalathenaconnection)|false|none|
|» » *anyOf*|body|[OptionalSalesforceConnection](#schemaoptionalsalesforceconnection)|false|none|
|» » *anyOf*|body|[OptionalTeradataConnection](#schemaoptionalteradataconnection)|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "is_configured_for_native_oauth": true,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-account-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountConnectionDetailResponse](#schemaaccountconnectiondetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Connections

<a id="opIdList Connections"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/connections/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/connections/`

<aside class="warning">
This operation is deprecated
</aside>

List Connections

<h3 id="list-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|adapter_version|query|string|false|none|
|has_catalog_ingestion_enabled|query|boolean|false|none|
|has_cost_insights_enabled|query|boolean|false|none|
|has_cost_management_enabled|query|boolean|false|none|
|has_platform_metadata_credentials|query|boolean|false|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|project_id|path|integer(int64)|true|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

#### Enumerated Values

|Parameter|Value|
|---|---|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_redirect_uri": "string",
      "oauth_configuration_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BaseConnectionV3ListEnveloped](#schemabaseconnectionv3listenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Connection

<a id="opIdCreate Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/connections/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_configuration_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/connections/`

<aside class="warning">
This operation is deprecated
</aside>

Create a new Connection

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "postgres",
  "adapter_version": "apache_spark_v0",
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "oauth_configuration_id": 0
}
```

<h3 id="create-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[BaseConnectionV3Request](#schemabaseconnectionv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the connection is associated with|
|» project_id|body|integer(int64)|true|The project the connection is associated with|
|» name|body|string|true|The name of the connection|
|» type|body|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|» adapter_version|body|[AdapterVersionEnum](#schemaadapterversionenum)|false|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|» created_by_id|body|integer(int64)|false|none|
|» created_by_service_token_id|body|integer(int64)|false|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» private_link_endpoint_id|body|string|false|none|
|» oauth_configuration_id|body|integer(int64)|false|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|postgres|
|» type|redshift|
|» type|snowflake|
|» type|bigquery|
|» type|adapter|
|» adapter_version|apache_spark_v0|
|» adapter_version|databricks_spark_v0|
|» adapter_version|databricks_v0|
|» adapter_version|trino_v0|
|» adapter_version|snowflake_v0|
|» adapter_version|bigquery_v0|
|» adapter_version|bigquery_v1|
|» adapter_version|postgres_v0|
|» adapter_version|redshift_v0|
|» adapter_version|salesforce_v0|
|» adapter_version|synapse_v0|
|» adapter_version|fabric_v0|
|» adapter_version|athena_v0|
|» adapter_version|teradata_v0|
|» adapter_version|clickhouse_v0|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BaseConnectionV3Enveloped](#schemabaseconnectionv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Connection

<a id="opIdRetrieve Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/connections/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/connections/{id}/`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a Connection

<h3 id="retrieve-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BaseConnectionV3Enveloped](#schemabaseconnectionv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Connection

<a id="opIdUpdate Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/connections/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_configuration_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/connections/{id}/`

<aside class="warning">
This operation is deprecated
</aside>

Update a Connection

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "postgres",
  "adapter_version": "apache_spark_v0",
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "oauth_configuration_id": 0
}
```

<h3 id="update-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[BaseConnectionV3Request](#schemabaseconnectionv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the connection is associated with|
|» project_id|body|integer(int64)|true|The project the connection is associated with|
|» name|body|string|true|The name of the connection|
|» type|body|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|» adapter_version|body|[AdapterVersionEnum](#schemaadapterversionenum)|false|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|» created_by_id|body|integer(int64)|false|none|
|» created_by_service_token_id|body|integer(int64)|false|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» private_link_endpoint_id|body|string|false|none|
|» oauth_configuration_id|body|integer(int64)|false|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|postgres|
|» type|redshift|
|» type|snowflake|
|» type|bigquery|
|» type|adapter|
|» adapter_version|apache_spark_v0|
|» adapter_version|databricks_spark_v0|
|» adapter_version|databricks_v0|
|» adapter_version|trino_v0|
|» adapter_version|snowflake_v0|
|» adapter_version|bigquery_v0|
|» adapter_version|bigquery_v1|
|» adapter_version|postgres_v0|
|» adapter_version|redshift_v0|
|» adapter_version|salesforce_v0|
|» adapter_version|synapse_v0|
|» adapter_version|fabric_v0|
|» adapter_version|athena_v0|
|» adapter_version|teradata_v0|
|» adapter_version|clickhouse_v0|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BaseConnectionV3Enveloped](#schemabaseconnectionv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Connection

<a id="opIdDestroy Connection"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/connections/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/connections/{id}/`

<aside class="warning">
This operation is deprecated
</aside>

Delete a Connection

<h3 id="destroy-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-environments">Environments</h1>

## Delete Environment SAO Cache

<a id="opIdDelete Environment SAO Cache"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/environments/0/sao-cache/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/environments/{environment_id}/sao-cache/`

Clear the environment SAO (State Aware Orchestration) cache in Redis for the given environment

<h3 id="delete-environment-sao-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|environment_id|path|integer(int64)|true|none|

<h3 id="delete-environment-sao-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Environments

<a id="opIdList Environments"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environments/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/environments/`

List Environments

<h3 id="list-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|credentials_id|query|integer(int64)|false|none|
|dbt_version|query|string|false|none|
|dbt_version__in|query|[string]|false|none|
|deployment_type|query|string|false|none|
|deployment_type__in|query|[string]|false|none|
|id__gt|query|integer(int64)|false|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: project, connection, credentials, repository.|
|limit|query|integer|false|none|
|name|query|string|false|none|
|name__icontains|query|string|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|pk__in|query|[integer(int64)]|false|none|
|project_id|path|integer(int64)|true|none|
|project_id__in|query|[integer(int64)]|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |
|type|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deployment_type|production|
|deployment_type|staging|
|deployment_type__in|production|
|deployment_type__in|staging|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "New Environment",
      "dbt_version": "latest",
      "raw_dbt_version": "string",
      "type": "deployment",
      "use_custom_branch": false,
      "custom_branch": "string",
      "supports_docs": false,
      "deployment_type": "production",
      "is_deferrable": true,
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "project": {
        "name": "string",
        "account_id": 0,
        "description": "string",
        "connection_id": 0,
        "repository_id": 0,
        "semantic_layer_config_id": 0,
        "state": 1,
        "dbt_project_subdirectory": "string",
        "docs_job_id": 0,
        "freshness_job_id": 0,
        "type": {}
      },
      "primary_profile_id": 0,
      "credentials": {
        "account_id": 0,
        "project_id": 0,
        "type": "postgres",
        "state": 1,
        "threads": 0,
        "username": "string",
        "default_schema": "string",
        "target_name": "string",
        "adapter_version": {}
      },
      "fusion_readiness": null
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvironmentV3ListEnveloped](#schemaenvironmentv3listenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Environment

<a id="opIdCreate Environment"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environments/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "string",
    "dbt_version": "string",
    "type": "development",
    "use_custom_branch": true,
    "custom_branch": "string",
    "supports_docs": true,
    "deployment_type": "production",
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "primary_profile_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/environments/`

Create a new Environment

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "connection_id": 0,
  "extended_attributes_id": 0,
  "name": "string",
  "dbt_version": "string",
  "type": "development",
  "use_custom_branch": true,
  "custom_branch": "string",
  "supports_docs": true,
  "deployment_type": "production",
  "enable_model_query_history": false,
  "enable_dbt_state": false,
  "enable_dbt_state_model_lock": true,
  "state": 1,
  "primary_profile_id": 0
}
```

<h3 id="create-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[EnvironmentV3Request](#schemaenvironmentv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the environment is associated with|
|» project_id|body|integer(int64)|true|The project the environment is associated with|
|» credentials_id|body|integer(int64)|false|The id of the associated credentials. Null for development environments. Must be included when updating a deployment environment or the value will be reset to null.|
|» connection_id|body|integer(int64)|false|The id of the associated connection. Must be included when updating an environment or the value will be reset to null.|
|» extended_attributes_id|body|integer(int64)|false|none|
|» name|body|string|true|The name of the environment|
|» dbt_version|body|string|true|The default dbt Version to use for this environment|
|» type|body|[Type76eEnum](#schematype76eenum)|true|* `development` - DEVELOPMENT<br>* `deployment` - DEPLOYMENT|
|» use_custom_branch|body|boolean|true|none|
|» custom_branch|body|string|false|none|
|» supports_docs|body|boolean|true|none|
|» deployment_type|body|[DeploymentTypeEnum](#schemadeploymenttypeenum)|false|* `production` - production<br>* `staging` - staging|
|» enable_model_query_history|body|boolean|false|none|
|» enable_dbt_state|body|boolean|false|none|
|» enable_dbt_state_model_lock|body|boolean|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» primary_profile_id|body|integer(int64)|false|The id of the primary profile for this environment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|development|
|» type|deployment|
|» deployment_type|production|
|» deployment_type|staging|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "New Environment",
    "dbt_version": "latest",
    "raw_dbt_version": "string",
    "type": "deployment",
    "use_custom_branch": false,
    "custom_branch": "string",
    "supports_docs": false,
    "deployment_type": "production",
    "is_deferrable": true,
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    },
    "primary_profile_id": 0,
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "fusion_readiness": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvironmentV3Enveloped](#schemaenvironmentv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Environment

<a id="opIdRetrieve Environment"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environments/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/environments/{id}/`

Retrieve an Environment

<h3 id="retrieve-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: project, connection, credentials, repository.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "New Environment",
    "dbt_version": "latest",
    "raw_dbt_version": "string",
    "type": "deployment",
    "use_custom_branch": false,
    "custom_branch": "string",
    "supports_docs": false,
    "deployment_type": "production",
    "is_deferrable": true,
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    },
    "primary_profile_id": 0,
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "fusion_readiness": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvironmentV3Enveloped](#schemaenvironmentv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Environment

<a id="opIdUpdate Environment"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environments/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "string",
    "dbt_version": "string",
    "type": "development",
    "use_custom_branch": true,
    "custom_branch": "string",
    "supports_docs": true,
    "deployment_type": "production",
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "primary_profile_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/environments/{id}/`

Replace an Environment. This is a full replace operation — all fields must be provided. Any omitted fields will be reset to their default values (typically null). To avoid unintentionally clearing fields such as credentials_id or connection_id, first retrieve the environment with a GET request and include all current values in the update payload.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "connection_id": 0,
  "extended_attributes_id": 0,
  "name": "string",
  "dbt_version": "string",
  "type": "development",
  "use_custom_branch": true,
  "custom_branch": "string",
  "supports_docs": true,
  "deployment_type": "production",
  "enable_model_query_history": false,
  "enable_dbt_state": false,
  "enable_dbt_state_model_lock": true,
  "state": 1,
  "primary_profile_id": 0
}
```

<h3 id="update-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[EnvironmentV3Request](#schemaenvironmentv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the environment is associated with|
|» project_id|body|integer(int64)|true|The project the environment is associated with|
|» credentials_id|body|integer(int64)|false|The id of the associated credentials. Null for development environments. Must be included when updating a deployment environment or the value will be reset to null.|
|» connection_id|body|integer(int64)|false|The id of the associated connection. Must be included when updating an environment or the value will be reset to null.|
|» extended_attributes_id|body|integer(int64)|false|none|
|» name|body|string|true|The name of the environment|
|» dbt_version|body|string|true|The default dbt Version to use for this environment|
|» type|body|[Type76eEnum](#schematype76eenum)|true|* `development` - DEVELOPMENT<br>* `deployment` - DEPLOYMENT|
|» use_custom_branch|body|boolean|true|none|
|» custom_branch|body|string|false|none|
|» supports_docs|body|boolean|true|none|
|» deployment_type|body|[DeploymentTypeEnum](#schemadeploymenttypeenum)|false|* `production` - production<br>* `staging` - staging|
|» enable_model_query_history|body|boolean|false|none|
|» enable_dbt_state|body|boolean|false|none|
|» enable_dbt_state_model_lock|body|boolean|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» primary_profile_id|body|integer(int64)|false|The id of the primary profile for this environment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|development|
|» type|deployment|
|» deployment_type|production|
|» deployment_type|staging|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "New Environment",
    "dbt_version": "latest",
    "raw_dbt_version": "string",
    "type": "deployment",
    "use_custom_branch": false,
    "custom_branch": "string",
    "supports_docs": false,
    "deployment_type": "production",
    "is_deferrable": true,
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    },
    "primary_profile_id": 0,
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "fusion_readiness": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvironmentV3Enveloped](#schemaenvironmentv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Environment

<a id="opIdDestroy Environment"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environments/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/environments/{id}/`

Delete an Environment

<h3 id="destroy-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-favorite-assets">Favorite Assets</h1>

## List Favorite Asset Responses

<a id="opIdList Favorite Asset Responses"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/favorite-assets/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/favorite-assets/`

List all Favorite Asset Responses.

<h3 id="list-favorite-asset-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|environment_id|query|integer(int64)|false|The environment ID the favorited asset is associated with. Can be null for data warehouse assets.|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|project_id|query|integer(int64)|false|The project ID the favorited asset is associated with|
|user_id|query|integer(int64)|false|The user ID the favorited asset is associated with|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project_id": 0,
    "environment_id": 0,
    "asset_id": "string",
    "name": "string",
    "platform": "string",
    "asset_type": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="list-favorite-asset-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailFavoriteAssetResponse](#schemadetailfavoriteassetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-invites">Invites</h1>

## Send user invites

<a id="opIdSend user invites"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/invites/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "email_addresses": [
      "string"
    ],
    "license_type": "developer",
    "group_ids": [
      0
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/invites/`

Send email invites to users who you wish to add to this account

> Body parameter

```json
{
  "id": 0,
  "email_addresses": [
    "string"
  ],
  "license_type": "developer",
  "group_ids": [
    0
  ]
}
```

<h3 id="send-user-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[InviteUsersRequestRequest](#schemainviteusersrequestrequest)|true|none|
|» id|body|integer(int64)|false|none|
|» email_addresses|body|[string]|true|none|
|» license_type|body|[LicenseTypeEnum](#schemalicensetypeenum)|true|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|» group_ids|body|[integer(int64)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» license_type|developer|
|» license_type|read_only|
|» license_type|analyst|
|» license_type|it|

> Example responses

> 200 Response

```json
{
  "data": {
    "sent": [
      "string"
    ]
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="send-user-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InviteUsersResponseEnveloped](#schemainviteusersresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-ip-restriction-endpoints">IP Restriction Endpoints</h1>

## List IP Restrictions

<a id="opIdList IP Restrictions"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/ip-restrictions/`

<h3 id="list-ip-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "type": 0,
      "state": 1,
      "ip_restriction_rule_set_id": 0,
      "rule_set_enabled": true,
      "account_id": 0,
      "cidrs": [
        {
          "state": 1,
          "ip_restriction_rule_id": 0,
          "enabled": true,
          "cidr": "string",
          "cidr_ipv6": "string"
        }
      ],
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "enabled_for_service_tokens": true,
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-ip-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionRuleListEnveloped](#schemaiprestrictionrulelistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Save IP Restriction

<a id="opIdSave IP Restriction"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "type": 1,
    "rule_set_enabled": true,
    "account_id": 0,
    "cidrs": [
      {
        "state": 1,
        "cidr": "string",
        "id": 0
      }
    ],
    "description": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/ip-restrictions/`

Save net-new ip restriction rule

Note: As long as at least one cidr was successfully saved a 2XX will be returned.
Check the `extra` key within the response for a list of cidrs that failed to save.

> Body parameter

```json
{
  "name": "string",
  "type": 1,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "cidr": "string",
      "id": 0
    }
  ],
  "description": "string"
}
```

<h3 id="save-ip-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[IPRestrictionRequestRequest](#schemaiprestrictionrequestrequest)|true|none|
|» name|body|string|true|none|
|» type|body|[TypeEdaEnum](#schematypeedaenum)|true|* `1` - ALLOW<br>* `2` - DENY|
|» rule_set_enabled|body|boolean|true|none|
|» account_id|body|integer(int64)|true|none|
|» cidrs|body|[[IPRestrictionCidrRequestRequest](#schemaiprestrictioncidrrequestrequest)]|true|none|
|» description|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|1|
|» type|2|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "type": 0,
    "state": 1,
    "ip_restriction_rule_set_id": 0,
    "rule_set_enabled": true,
    "account_id": 0,
    "cidrs": [
      {
        "state": 1,
        "ip_restriction_rule_id": 0,
        "enabled": true,
        "cidr": "string",
        "cidr_ipv6": "string"
      }
    ],
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "enabled_for_service_tokens": true,
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="save-ip-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionRuleEnveloped](#schemaiprestrictionruleenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Enable IP Restrictions

<a id="opIdEnable IP Restrictions"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions-set/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true
  }'
```

`POST /api/v3/accounts/{account_id}/ip-restrictions-set/`

Toggle the enablement of the IP restriction feature.

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="enable-ip-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[IPRestrictionSetRequestRequest](#schemaiprestrictionsetrequestrequest)|true|none|
|» enabled|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "enabled": true,
    "state": 1,
    "enabled_for_service_tokens": true,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="enable-ip-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionRuleSetEnveloped](#schemaiprestrictionrulesetenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Validate Client IP Against IP Restrictions

<a id="opIdValidate Client IP Against IP Restrictions"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions-set/0/validate/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/ip-restrictions-set/{id}/validate/`

This endpoint returns whether the client ip is acceptable based on the
configured ip restriction rules associated to the rule set.

<h3 id="validate-client-ip-against-ip-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "is_valid_for_admin": true
}
```

<h3 id="validate-client-ip-against-ip-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionSetValidate](#schemaiprestrictionsetvalidate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Validate Client IP Against IP Restrictions Excluding Specified IP Rule

<a id="opIdValidate Client IP Against IP Restrictions Excluding Specified IP Rule"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions-set/0/validate/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/ip-restrictions-set/{id}/validate/{rule_id}`

This endpoint returns whether the client ip is acceptable based on the
configured ip restriction rules associated to the rule set - excluding the ip rule id
passed into the url

<h3 id="validate-client-ip-against-ip-restrictions-excluding-specified-ip-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|rule_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "is_valid_for_admin": true
}
```

<h3 id="validate-client-ip-against-ip-restrictions-excluding-specified-ip-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionSetValidate](#schemaiprestrictionsetvalidate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve IP Restriction

<a id="opIdRetrieve IP Restriction"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/ip-restrictions/{id}`

<h3 id="retrieve-ip-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "type": 0,
    "state": 1,
    "ip_restriction_rule_set_id": 0,
    "rule_set_enabled": true,
    "account_id": 0,
    "cidrs": [
      {
        "state": 1,
        "ip_restriction_rule_id": 0,
        "enabled": true,
        "cidr": "string",
        "cidr_ipv6": "string"
      }
    ],
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "enabled_for_service_tokens": true,
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-ip-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionRuleEnveloped](#schemaiprestrictionruleenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update IP Restriction

<a id="opIdUpdate IP Restriction"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "type": 1,
    "rule_set_enabled": true,
    "account_id": 0,
    "cidrs": [
      {
        "state": 1,
        "cidr": "string",
        "id": 0
      }
    ],
    "description": "string",
    "id": 0
  }'
```

`PUT /api/v3/accounts/{account_id}/ip-restrictions/{id}`

Update an existing ip restriction rule

Note: As long as at least one cidr was successfully saved a 2XX will be returned.
Check the `extra` key within the response for a list of cidrs that failed to save.

> Body parameter

```json
{
  "name": "string",
  "type": 1,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "cidr": "string",
      "id": 0
    }
  ],
  "description": "string",
  "id": 0
}
```

<h3 id="update-ip-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[UpdateIPRestrictionRequestRequest](#schemaupdateiprestrictionrequestrequest)|true|none|
|» name|body|string|true|none|
|» type|body|[TypeEdaEnum](#schematypeedaenum)|true|* `1` - ALLOW<br>* `2` - DENY|
|» rule_set_enabled|body|boolean|true|none|
|» account_id|body|integer(int64)|true|none|
|» cidrs|body|[[IPRestrictionCidrRequestRequest](#schemaiprestrictioncidrrequestrequest)]|true|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|1|
|» type|2|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": 0,
  "state": 1,
  "ip_restriction_rule_set_id": 0,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "ip_restriction_rule_id": 0,
      "enabled": true,
      "cidr": "string",
      "cidr_ipv6": "string"
    }
  ],
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "description": "string"
}
```

<h3 id="update-ip-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPRestrictionRule](#schemaiprestrictionrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete IP Restriction

<a id="opIdDelete IP Restriction"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/ip-restrictions/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/ip-restrictions/{id}`

<h3 id="delete-ip-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="delete-ip-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-license-maps">License Maps</h1>

## List License Maps

<a id="opIdList License Maps"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/license-maps/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/license-maps/`

<h3 id="list-license-maps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "license_type": "developer",
      "state": 1,
      "sso_license_mapping_groups": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-license-maps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LicenseMapListEnveloped](#schemalicensemaplistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create License Map

<a id="opIdCreate License Map"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/license-maps/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/license-maps/`

> Body parameter

```json
{
  "account_id": 0,
  "license_type": "developer",
  "state": 1,
  "sso_license_mapping_groups": [
    "string"
  ]
}
```

<h3 id="create-license-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[LicenseMapRequest](#schemalicensemaprequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» license_type|body|[LicenseTypeEnum](#schemalicensetypeenum)|true|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|» state|body|integer|false|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» sso_license_mapping_groups|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» license_type|developer|
|» license_type|read_only|
|» license_type|analyst|
|» license_type|it|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-license-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LicenseMapEnveloped](#schemalicensemapenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve License Map

<a id="opIdRetrieve License Map"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/license-maps/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/license-maps/{id}/`

<h3 id="retrieve-license-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-license-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LicenseMapEnveloped](#schemalicensemapenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update License Map

<a id="opIdUpdate License Map"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/license-maps/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/license-maps/{id}/`

> Body parameter

```json
{
  "account_id": 0,
  "license_type": "developer",
  "state": 1,
  "sso_license_mapping_groups": [
    "string"
  ]
}
```

<h3 id="update-license-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[LicenseMapRequest](#schemalicensemaprequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» license_type|body|[LicenseTypeEnum](#schemalicensetypeenum)|true|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|» state|body|integer|false|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» sso_license_mapping_groups|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» license_type|developer|
|» license_type|read_only|
|» license_type|analyst|
|» license_type|it|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-license-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LicenseMapEnveloped](#schemalicensemapenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy License Map

<a id="opIdDestroy License Map"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/license-maps/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/license-maps/{id}/`

<h3 id="destroy-license-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="destroy-license-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-oauth-configurations">OAuth Configurations</h1>

## List OAuthConfigurations

<a id="opIdList OAuthConfigurations"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/oauth-configurations/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/oauth-configurations/`

List OAuthConfigurations

<h3 id="list-oauthconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|client_id|query|string|false|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "type": "string",
      "name": "string",
      "extra_data": {
        "application_id_uri": "string"
      },
      "client_id": "string",
      "authorize_url": "string",
      "token_url": "string",
      "redirect_uri": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-oauthconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthConfigurationListEnveloped](#schemaoauthconfigurationlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create OAuthConfiguration

<a id="opIdCreate OAuthConfiguration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/oauth-configurations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/oauth-configurations/`

Create a new OAuthConfiguration

> Body parameter

```json
{
  "account_id": 0,
  "type": "string",
  "name": "string",
  "extra_data": {
    "application_id_uri": "string"
  },
  "client_id": "string",
  "client_secret": "string",
  "authorize_url": "string",
  "token_url": "string",
  "redirect_uri": "string"
}
```

<h3 id="create-oauthconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[OAuthConfigurationRequest](#schemaoauthconfigurationrequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» type|body|string|true|none|
|» name|body|string|false|none|
|» extra_data|body|[EntraExtraDataRequest](#schemaentraextradatarequest)|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» authorize_url|body|string|false|none|
|» token_url|body|string|false|none|
|» redirect_uri|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-oauthconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthConfigurationEnveloped](#schemaoauthconfigurationenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve OAuth Configuration

<a id="opIdRetrieve OAuth Configuration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/oauth-configurations/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/oauth-configurations/{id}/`

Retrieve an OAuth Configuration

<h3 id="retrieve-oauth-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-oauth-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthConfigurationEnveloped](#schemaoauthconfigurationenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update OAuth Configuration

<a id="opIdUpdate OAuth Configuration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/oauth-configurations/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/oauth-configurations/{id}/`

Update an OAuthConfiguration

> Body parameter

```json
{
  "account_id": 0,
  "type": "string",
  "name": "string",
  "extra_data": {
    "application_id_uri": "string"
  },
  "client_id": "string",
  "client_secret": "string",
  "authorize_url": "string",
  "token_url": "string",
  "redirect_uri": "string"
}
```

<h3 id="update-oauth-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[OAuthConfigurationRequest](#schemaoauthconfigurationrequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» type|body|string|true|none|
|» name|body|string|false|none|
|» extra_data|body|[EntraExtraDataRequest](#schemaentraextradatarequest)|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» authorize_url|body|string|false|none|
|» token_url|body|string|false|none|
|» redirect_uri|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-oauth-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthConfigurationEnveloped](#schemaoauthconfigurationenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy OAuth Configuration

<a id="opIdDestroy OAuth Configuration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/oauth-configurations/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/oauth-configurations/{id}/`

Delete an OAuth Configuration

<h3 id="destroy-oauth-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="destroy-oauth-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-private-endpoints">Private Endpoints</h1>

## List Private Endpoints

<a id="opIdList Private Endpoints"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/private-endpoints/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/private-endpoints/`

List all Private Endpoints.

<h3 id="list-private-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|The maximum number of Private Endpoints to return.|
|offset|query|integer|false|The number of Private Endpoints to skip before starting to collect the result set.|
|search|query|string|false|Search term to filter endpoints by name or private_link_endpoint.|
|type|query|string|false|The type of the Private Endpoint to filter by.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "account_id": 0,
      "state": 0,
      "name": "string",
      "type": "string",
      "private_link_endpoint": "string",
      "cidr_range": "string",
      "egress_cidr": "string",
      "endpoint_identifier": "string",
      "endpoint_state": "string",
      "connectivity_status": "string",
      "connection_count": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-private-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PrivateEndpointListResponse](#schemaprivateendpointlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Private Endpoint

<a id="opIdCreate Private Endpoint"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/private-endpoints/ \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v3/accounts/{account_id}/private-endpoints/`

Create a new Private Endpoints List Alias View.

<h3 id="create-private-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|

<h3 id="create-private-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Private Endpoint

<a id="opIdRetrieve Private Endpoint"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/private-endpoints/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/private-endpoints/{pl_endpoint_ksuid}/`

Retrieve details of a specific Private Endpoint.

<h3 id="retrieve-private-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|pl_endpoint_ksuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "account_id": 0,
    "state": 0,
    "name": "string",
    "type": "string",
    "private_link_endpoint": "string",
    "cidr_range": "string",
    "egress_cidr": "string",
    "endpoint_identifier": "string",
    "endpoint_state": "string",
    "connectivity_status": "string",
    "connection_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "port": 0,
    "provisioning_status": "string",
    "provisioning_status_message": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-private-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PrivateEndpointDetailResponse](#schemaprivateendpointdetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Private Endpoint

<a id="opIdDelete Private Endpoint"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/private-endpoints/string/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/private-endpoints/{pl_endpoint_ksuid}/`

-

<h3 id="delete-private-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|pl_endpoint_ksuid|path|string|true|none|

<h3 id="delete-private-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Private Endpoint

<a id="opIdUpdate Private Endpoint"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/private-endpoints/string/ \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/v3/accounts/{account_id}/private-endpoints/{pl_endpoint_ksuid}/`

-

<h3 id="update-private-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|pl_endpoint_ksuid|path|string|true|none|

<h3 id="update-private-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-projects">Projects</h1>

## List Projects

<a id="opIdList Projects"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/`

List Projects

<h3 id="list-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: repository, connection, group_permissions, docs_job, freshness_job.|
|limit|query|integer|false|none|
|name__icontains|query|string|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|pk__gt|query|integer(int64)|false|none|
|pk__in|query|[integer(int64)]|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "connection": {
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "type": "postgres",
        "adapter_version": "apache_spark_v0",
        "created_by_id": 0,
        "created_by_service_token_id": 0,
        "state": 1,
        "private_link_endpoint_id": "string",
        "oauth_configuration_id": 0
      },
      "environments": [
        {
          "account_id": 0,
          "project_id": 0,
          "credentials_id": 0,
          "connection_id": 0,
          "extended_attributes_id": 0,
          "name": "string",
          "dbt_version": "string",
          "type": "development",
          "use_custom_branch": true,
          "custom_branch": "string",
          "supports_docs": true,
          "deployment_type": "production",
          "enable_model_query_history": false,
          "enable_dbt_state": false,
          "enable_dbt_state_model_lock": true,
          "state": 1,
          "primary_profile_id": 0
        }
      ],
      "repository": {
        "account_id": 0,
        "project_id": 0,
        "full_name": "string",
        "remote_backend": {},
        "git_clone_strategy": {},
        "deploy_key_id": 0,
        "repository_credentials_id": 0,
        "github_installation_id": 0,
        "github_webhook_id": 0,
        "state": 1,
        "private_link_endpoint_id": "string",
        "git_provider_id": 0
      },
      "group_permissions": [
        {
          "account_id": 0,
          "group_id": 0,
          "project_id": 0,
          "all_projects": true,
          "permission_set": "account_admin",
          "permission_level": 0,
          "state": 1,
          "writable_environment_categories": [
            "string"
          ]
        }
      ],
      "docs_job": {
        "environment_id": 0,
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "description": "string",
        "generate_docs": true,
        "run_generate_sources": true,
        "state": 1,
        "dbt_version": "string",
        "triggers": {
          "github_webhook": true,
          "schedule": true,
          "git_provider_webhook": true,
          "on_merge": true,
          "custom_branch_only": true
        },
        "settings": {
          "threads": 0,
          "target_name": "string"
        },
        "execution": {
          "timeout_seconds": 0
        },
        "schedule": {
          "cron": "string",
          "date": "every_day",
          "time": "every_hour"
        },
        "execute_steps": [
          "string"
        ],
        "job_type": "ci",
        "triggers_on_draft_pr": false,
        "run_compare_changes": false,
        "compare_changes_flags": "--select state:modified",
        "run_lint": false,
        "errors_on_lint_failure": true,
        "deferring_environment_id": 0,
        "deferring_job_definition_id": 0,
        "cost_optimization_features": [
          "string"
        ]
      },
      "freshness_job": {
        "environment_id": 0,
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "description": "string",
        "generate_docs": true,
        "run_generate_sources": true,
        "state": 1,
        "dbt_version": "string",
        "triggers": {
          "github_webhook": true,
          "schedule": true,
          "git_provider_webhook": true,
          "on_merge": true,
          "custom_branch_only": true
        },
        "settings": {
          "threads": 0,
          "target_name": "string"
        },
        "execution": {
          "timeout_seconds": 0
        },
        "schedule": {
          "cron": "string",
          "date": "every_day",
          "time": "every_hour"
        },
        "execute_steps": [
          "string"
        ],
        "job_type": "ci",
        "triggers_on_draft_pr": false,
        "run_compare_changes": false,
        "compare_changes_flags": "--select state:modified",
        "run_lint": false,
        "errors_on_lint_failure": true,
        "deferring_environment_id": 0,
        "deferring_job_definition_id": 0,
        "cost_optimization_features": [
          "string"
        ]
      },
      "fusion_readiness": null,
      "default_version": "string"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectListEnveloped](#schemaprojectlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Project

<a id="opIdCreate Project"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/`

Create a new Project

> Body parameter

```json
{
  "name": "string",
  "account_id": 0,
  "description": "string",
  "connection_id": 0,
  "repository_id": 0,
  "semantic_layer_config_id": 0,
  "state": 1,
  "dbt_project_subdirectory": "string",
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "type": {}
}
```

<h3 id="create-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[ProjectRequest](#schemaprojectrequest)|true|none|
|» name|body|string|true|The name of the project|
|» account_id|body|integer(int64)|true|The account the project is associated with|
|» description|body|string|false|The description of the project|
|» connection_id|body|integer(int64)|false|The active connection|
|» repository_id|body|integer(int64)|false|The active repository|
|» semantic_layer_config_id|body|integer(int64)|false|The active semantic layer configuration|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» dbt_project_subdirectory|body|string|false|The path in the associated repository where a dbt project can be found|
|» docs_job_id|body|integer(int64)|false|The job used for docs generation|
|» freshness_job_id|body|integer(int64)|false|The job used for source freshness generation|
|» type|body|object|true|The type of the project<br><br>* `0` - DEFAULT<br>* `1` - HYBRID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "connection": {
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_configuration_id": 0
    },
    "environments": [
      {
        "account_id": 0,
        "project_id": 0,
        "credentials_id": 0,
        "connection_id": 0,
        "extended_attributes_id": 0,
        "name": "string",
        "dbt_version": "string",
        "type": "development",
        "use_custom_branch": true,
        "custom_branch": "string",
        "supports_docs": true,
        "deployment_type": "production",
        "enable_model_query_history": false,
        "enable_dbt_state": false,
        "enable_dbt_state_model_lock": true,
        "state": 1,
        "primary_profile_id": 0
      }
    ],
    "repository": {
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0
    },
    "group_permissions": [
      {
        "account_id": 0,
        "group_id": 0,
        "project_id": 0,
        "all_projects": true,
        "permission_set": "account_admin",
        "permission_level": 0,
        "state": 1,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "docs_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "freshness_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "fusion_readiness": null,
    "default_version": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectEnveloped](#schemaprojectenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Project

<a id="opIdRetrieve Project"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{id}/`

Retrieve a Project

<h3 id="retrieve-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: repository, connection, group_permissions, docs_job, freshness_job.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "connection": {
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_configuration_id": 0
    },
    "environments": [
      {
        "account_id": 0,
        "project_id": 0,
        "credentials_id": 0,
        "connection_id": 0,
        "extended_attributes_id": 0,
        "name": "string",
        "dbt_version": "string",
        "type": "development",
        "use_custom_branch": true,
        "custom_branch": "string",
        "supports_docs": true,
        "deployment_type": "production",
        "enable_model_query_history": false,
        "enable_dbt_state": false,
        "enable_dbt_state_model_lock": true,
        "state": 1,
        "primary_profile_id": 0
      }
    ],
    "repository": {
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0
    },
    "group_permissions": [
      {
        "account_id": 0,
        "group_id": 0,
        "project_id": 0,
        "all_projects": true,
        "permission_set": "account_admin",
        "permission_level": 0,
        "state": 1,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "docs_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "freshness_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "fusion_readiness": null,
    "default_version": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectEnveloped](#schemaprojectenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Project

<a id="opIdUpdate Project"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{id}/`

Update a Project

> Body parameter

```json
{
  "name": "string",
  "account_id": 0,
  "description": "string",
  "connection_id": 0,
  "repository_id": 0,
  "semantic_layer_config_id": 0,
  "state": 1,
  "dbt_project_subdirectory": "string",
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "type": {}
}
```

<h3 id="update-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[ProjectRequest](#schemaprojectrequest)|true|none|
|» name|body|string|true|The name of the project|
|» account_id|body|integer(int64)|true|The account the project is associated with|
|» description|body|string|false|The description of the project|
|» connection_id|body|integer(int64)|false|The active connection|
|» repository_id|body|integer(int64)|false|The active repository|
|» semantic_layer_config_id|body|integer(int64)|false|The active semantic layer configuration|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» dbt_project_subdirectory|body|string|false|The path in the associated repository where a dbt project can be found|
|» docs_job_id|body|integer(int64)|false|The job used for docs generation|
|» freshness_job_id|body|integer(int64)|false|The job used for source freshness generation|
|» type|body|object|true|The type of the project<br><br>* `0` - DEFAULT<br>* `1` - HYBRID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "connection": {
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_configuration_id": 0
    },
    "environments": [
      {
        "account_id": 0,
        "project_id": 0,
        "credentials_id": 0,
        "connection_id": 0,
        "extended_attributes_id": 0,
        "name": "string",
        "dbt_version": "string",
        "type": "development",
        "use_custom_branch": true,
        "custom_branch": "string",
        "supports_docs": true,
        "deployment_type": "production",
        "enable_model_query_history": false,
        "enable_dbt_state": false,
        "enable_dbt_state_model_lock": true,
        "state": 1,
        "primary_profile_id": 0
      }
    ],
    "repository": {
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0
    },
    "group_permissions": [
      {
        "account_id": 0,
        "group_id": 0,
        "project_id": 0,
        "all_projects": true,
        "permission_set": "account_admin",
        "permission_level": 0,
        "state": 1,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "docs_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "freshness_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "fusion_readiness": null,
    "default_version": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectEnveloped](#schemaprojectenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Project

<a id="opIdDestroy Project"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{id}/`

Delete Project

<h3 id="destroy-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="destroy-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-adapters">Adapters</h1>

## Create Adapter

<a id="opIdCreate Adapter"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/adapters/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/adapters/`

Create a new adapter for a project. The ID from this adapter can be used to create Connections or Credentials when necessary.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "adapter_version": "apache_spark_v0",
  "metadata_json": null,
  "state": 1
}
```

<h3 id="create-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[DbtAdapterRequest](#schemadbtadapterrequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» project_id|body|integer(int64)|true|none|
|» created_by_id|body|integer(int64)|false|none|
|» created_by_service_token_id|body|integer(int64)|false|none|
|» adapter_version|body|[AdapterVersionEnum](#schemaadapterversionenum)|true|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|» metadata_json|body|object|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adapter_version|apache_spark_v0|
|» adapter_version|databricks_spark_v0|
|» adapter_version|databricks_v0|
|» adapter_version|trino_v0|
|» adapter_version|snowflake_v0|
|» adapter_version|bigquery_v0|
|» adapter_version|bigquery_v1|
|» adapter_version|postgres_v0|
|» adapter_version|redshift_v0|
|» adapter_version|salesforce_v0|
|» adapter_version|synapse_v0|
|» adapter_version|fabric_v0|
|» adapter_version|athena_v0|
|» adapter_version|teradata_v0|
|» adapter_version|clickhouse_v0|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DbtAdapterEnveloped](#schemadbtadapterenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Adapter

<a id="opIdRetrieve Adapter"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/adapters/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/adapters/{id}/`

Get an adapter by ID.

<h3 id="retrieve-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DbtAdapterEnveloped](#schemadbtadapterenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Adapter

<a id="opIdUpdate Adapter"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/adapters/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/adapters/{id}/`

Update an adapter.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "adapter_version": "apache_spark_v0",
  "metadata_json": null,
  "state": 1
}
```

<h3 id="update-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[DbtAdapterRequest](#schemadbtadapterrequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» project_id|body|integer(int64)|true|none|
|» created_by_id|body|integer(int64)|false|none|
|» created_by_service_token_id|body|integer(int64)|false|none|
|» adapter_version|body|[AdapterVersionEnum](#schemaadapterversionenum)|true|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|» metadata_json|body|object|true|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adapter_version|apache_spark_v0|
|» adapter_version|databricks_spark_v0|
|» adapter_version|databricks_v0|
|» adapter_version|trino_v0|
|» adapter_version|snowflake_v0|
|» adapter_version|bigquery_v0|
|» adapter_version|bigquery_v1|
|» adapter_version|postgres_v0|
|» adapter_version|redshift_v0|
|» adapter_version|salesforce_v0|
|» adapter_version|synapse_v0|
|» adapter_version|fabric_v0|
|» adapter_version|athena_v0|
|» adapter_version|teradata_v0|
|» adapter_version|clickhouse_v0|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DbtAdapterEnveloped](#schemadbtadapterenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Adapter

<a id="opIdDestroy Adapter"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/adapters/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/adapters/{id}/`

Delete an adapter.

<h3 id="destroy-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-credentials">Credentials</h1>

## List Credentials

<a id="opIdList Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/credentials/`

List the credentials for a given project.

<h3 id="list-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CredentialsResponseListEnveloped](#schemacredentialsresponselistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Credentials

<a id="opIdCreate Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "password": "string",
    "adapter_version": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/credentials/`

Create a new set of credentials to associate with a user or environment.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

<h3 id="create-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CredentialsRequestRequest](#schemacredentialsrequestrequest)|false|none|
|» *oneOf*|body|[PostgresCredentialsRequest](#schemapostgrescredentialsrequest)|false|none|
|» *oneOf*|body|[RedshiftCredentialsRequest](#schemaredshiftcredentialsrequest)|false|none|
|» *oneOf*|body|[SnowflakeCredentialsRequest](#schemasnowflakecredentialsrequest)|false|none|
|» *oneOf*|body|[BigqueryCredentialsRequest](#schemabigquerycredentialsrequest)|false|none|
|» *oneOf*|body|[DbtAdapterCredentialsRequest](#schemadbtadaptercredentialsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CredentialsResponseEnveloped](#schemacredentialsresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get Credentials

<a id="opIdGet Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/credentials/{id}/`

Fetch a specific set of credentials.

<h3 id="get-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="get-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CredentialsResponseEnveloped](#schemacredentialsresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Credentials

<a id="opIdUpdate Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "password": "string",
    "adapter_version": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/credentials/{id}/`

Update a set of credentials.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

<h3 id="update-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CredentialsRequestRequest](#schemacredentialsrequestrequest)|false|none|
|» *oneOf*|body|[PostgresCredentialsRequest](#schemapostgrescredentialsrequest)|false|none|
|» *oneOf*|body|[RedshiftCredentialsRequest](#schemaredshiftcredentialsrequest)|false|none|
|» *oneOf*|body|[SnowflakeCredentialsRequest](#schemasnowflakecredentialsrequest)|false|none|
|» *oneOf*|body|[BigqueryCredentialsRequest](#schemabigquerycredentialsrequest)|false|none|
|» *oneOf*|body|[DbtAdapterCredentialsRequest](#schemadbtadaptercredentialsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CredentialsResponseEnveloped](#schemacredentialsresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Credentials

<a id="opIdDelete Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/credentials/{id}/`

Delete a set of credentials.

<h3 id="delete-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="delete-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Partial Update Credentials

<a id="opIdPartial Update Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/credentials/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "password": "string",
    "adapter_version": {}
  }'
```

`PATCH /api/v3/accounts/{account_id}/projects/{project_id}/credentials/{id}/`

Partially update a set of credentials.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

<h3 id="partial-update-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CredentialsRequestRequest](#schemacredentialsrequestrequest)|false|none|
|» *oneOf*|body|[PostgresCredentialsRequest](#schemapostgrescredentialsrequest)|false|none|
|» *oneOf*|body|[RedshiftCredentialsRequest](#schemaredshiftcredentialsrequest)|false|none|
|» *oneOf*|body|[SnowflakeCredentialsRequest](#schemasnowflakecredentialsrequest)|false|none|
|» *oneOf*|body|[BigqueryCredentialsRequest](#schemabigquerycredentialsrequest)|false|none|
|» *oneOf*|body|[DbtAdapterCredentialsRequest](#schemadbtadaptercredentialsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="partial-update-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CredentialsResponseEnveloped](#schemacredentialsresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-environment-variables">Environment Variables</h1>

## Create Projects Environment Variable

<a id="opIdCreate Projects Environment Variable"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "project",
    "user_id": 0,
    "environment_id": 0,
    "job_definition_id": 0,
    "raw_value": "string",
    "display_value": "string",
    "state": 1
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/`

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "project",
  "user_id": 0,
  "environment_id": 0,
  "job_definition_id": 0,
  "raw_value": "string",
  "display_value": "string",
  "state": 1
}
```

<h3 id="create-projects-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CustomEnvironmentVariableRequest](#schemacustomenvironmentvariablerequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» project_id|body|integer(int64)|true|none|
|» name|body|string|true|none|
|» type|body|[CustomEnvironmentVariableTypeEnum](#schemacustomenvironmentvariabletypeenum)|true|* `project` - project<br>* `environment` - environment<br>* `job` - job<br>* `user` - user|
|» user_id|body|integer(int64)|false|none|
|» environment_id|body|integer(int64)|false|none|
|» job_definition_id|body|integer(int64)|false|none|
|» raw_value|body|string|false|none|
|» display_value|body|string|false|none|
|» state|body|integer|false|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|project|
|» type|environment|
|» type|job|
|» type|user|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "project",
    "user_id": 0,
    "environment_id": 0,
    "job_definition_id": 0,
    "display_value": "string",
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "environment": {
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "string",
      "dbt_version": "string",
      "type": "development",
      "use_custom_branch": true,
      "custom_branch": "string",
      "supports_docs": true,
      "deployment_type": "production",
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "primary_profile_id": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-projects-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CustomEnvironmentVariableEnveloped](#schemacustomenvironmentvariableenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Projects Environment Variable

<a id="opIdUpdate Projects Environment Variable"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "project",
    "user_id": 0,
    "environment_id": 0,
    "job_definition_id": 0,
    "raw_value": "string",
    "display_value": "string",
    "state": 1
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/{id}/`

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "project",
  "user_id": 0,
  "environment_id": 0,
  "job_definition_id": 0,
  "raw_value": "string",
  "display_value": "string",
  "state": 1
}
```

<h3 id="update-projects-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CustomEnvironmentVariableRequest](#schemacustomenvironmentvariablerequest)|true|none|
|» account_id|body|integer(int64)|true|none|
|» project_id|body|integer(int64)|true|none|
|» name|body|string|true|none|
|» type|body|[CustomEnvironmentVariableTypeEnum](#schemacustomenvironmentvariabletypeenum)|true|* `project` - project<br>* `environment` - environment<br>* `job` - job<br>* `user` - user|
|» user_id|body|integer(int64)|false|none|
|» environment_id|body|integer(int64)|false|none|
|» job_definition_id|body|integer(int64)|false|none|
|» raw_value|body|string|false|none|
|» display_value|body|string|false|none|
|» state|body|integer|false|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|project|
|» type|environment|
|» type|job|
|» type|user|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "project",
    "user_id": 0,
    "environment_id": 0,
    "job_definition_id": 0,
    "display_value": "string",
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "environment": {
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "string",
      "dbt_version": "string",
      "type": "development",
      "use_custom_branch": true,
      "custom_branch": "string",
      "supports_docs": true,
      "deployment_type": "production",
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "primary_profile_id": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-projects-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CustomEnvironmentVariableEnveloped](#schemacustomenvironmentvariableenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Projects Environment Variable

<a id="opIdDestroy Projects Environment Variable"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/{id}/`

<h3 id="destroy-projects-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-projects-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Projects Environment Variables Bulk

<a id="opIdUpdate Projects Environment Variables Bulk"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/bulk/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "env_vars": {
      "name": "string",
      "new_name": "string",
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/bulk/`

> Body parameter

```json
{
  "env_vars": {
    "name": "string",
    "new_name": "string",
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-projects-environment-variables-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|object|false|none|
|» env_vars|body|object|true|Environment variable update payload. 'name' is the current variable name (required). 'new_name' is the rename target (optional). All other keys are either existing environment variable IDs (numeric strings) whose values should be updated, or environment names whose values should be created. Set a value to empty string or null to delete that variable override.|
|» » name|body|string|true|Current name of the environment variable.|
|» » new_name|body|string|false|New name for the environment variable. Requires 'name' to also be set.|
|» » **additionalProperties**|body|string \| null|false|Value keyed by either an existing env var ID (to update) or an environment name (to create a new override).|

> Example responses

> 200 Response

```json
{
  "data": {
    "message": "string",
    "new_var_ids": [
      0
    ],
    "deleted_var_ids": [
      0
    ],
    "failures": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

> 400 Response

```json
{
  "data": {
    "reason": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-projects-environment-variables-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BulkPutSuccessResponseEnveloped](#schemabulkputsuccessresponseenveloped)|
|400|Bad Request||[BulkPutErrorResponseEnveloped](#schemabulkputerrorresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Projects Environment Variables Bulk

<a id="opIdCreate Projects Environment Variables Bulk"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/bulk/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "env_var": [
      {
        "new_name": "string",
        "project": "string",
        "environmentNameExample1": "string",
        "environmentNameExample2": "string"
      }
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/bulk/`

> Body parameter

```json
{
  "env_var": [
    {
      "new_name": "string",
      "project": "string",
      "environmentNameExample1": "string",
      "environmentNameExample2": "string"
    }
  ]
}
```

<h3 id="create-projects-environment-variables-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CustomEnvironmentVariableBulkRequestRequest](#schemacustomenvironmentvariablebulkrequestrequest)|true|none|
|» env_var|body|[[CustomEnvironmentVariableBulkRequest](#schemacustomenvironmentvariablebulkrequest)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "status": "string",
      "status_code": 0,
      "key_name": "string",
      "data": {
        "message": "string",
        "new_var_ids": [
          0
        ],
        "failures": null
      }
    }
  ],
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

> 400 Response

```json
{
  "data": [
    {
      "status": "string",
      "status_code": 0,
      "key_name": "string",
      "reason": "string"
    }
  ],
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-projects-environment-variables-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CustomEnvironmentVariableBulkResponseListEnveloped](#schemacustomenvironmentvariablebulkresponselistenveloped)|
|400|Bad Request||[CustomEnvironmentVariableBulkResponseFailListEnveloped](#schemacustomenvironmentvariablebulkresponsefaillistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Projects Environment Variables Bulk

<a id="opIdDestroy Projects Environment Variables Bulk"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/bulk/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/bulk/`

<h3 id="destroy-projects-environment-variables-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-projects-environment-variables-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Projects Environment Variables Environment

<a id="opIdRetrieve Projects Environment Variables Environment"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/environment/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/environment/`

<h3 id="retrieve-projects-environment-variables-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "environments": [
      "project",
      "production",
      "staging",
      "dev"
    ],
    "variables": {
      "DBT_ENV_SECRET_1": {
        "project": {
          "id": 1,
          "value": "**********"
        },
        "production": {
          "id": 2,
          "value": "**********"
        }
      },
      "DBT_ENV_CUSTOM_2": {
        "project": {
          "id": 3,
          "value": "project_default"
        },
        "staging": {
          "id": 4,
          "value": "staging_value"
        },
        "dev": {
          "id": 5,
          "value": "dev_value"
        }
      }
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "Success!",
    "developer_message": ""
  },
  "extra": {}
}
```

<h3 id="retrieve-projects-environment-variables-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvVarEnvironmentResponse](#schemaenvvarenvironmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Projects Environment Variables Job

<a id="opIdRetrieve Projects Environment Variables Job"></a>

> Code samples

```bash
curl 'https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/job/?job_definition_id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/job/`

<h3 id="retrieve-projects-environment-variables-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|job_definition_id|query|integer(int64)|true|The ID of the job definition to retrieve environment variables for|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "DBT_ENV_SECRET_1": {
      "project": {
        "id": 1,
        "value": "**********"
      }
    },
    "DBT_ENV_CUSTOM_2": {
      "project": {
        "id": 2,
        "value": "project_default"
      },
      "environment": {
        "id": 3,
        "value": "dev_override"
      },
      "job": {
        "id": 4,
        "value": "job_override"
      }
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "Success!",
    "developer_message": ""
  },
  "extra": {}
}
```

<h3 id="retrieve-projects-environment-variables-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvVarJobResponse](#schemaenvvarjobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Projects Environment Variables User

<a id="opIdRetrieve Projects Environment Variables User"></a>

> Code samples

```bash
curl 'https://cloud.getdbt.com/api/v3/accounts/0/projects/0/environment-variables/user/?user_id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/environment-variables/user/`

<h3 id="retrieve-projects-environment-variables-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|
|user_id|query|integer(int64)|true|The ID of the user to retrieve environment variables for|

> Example responses

> 200 Response

```json
{
  "data": {
    "DBT_ENV_SECRET_1": {
      "project": {
        "id": 1,
        "value": "**********"
      }
    },
    "DBT_ENV_CUSTOM_2": {
      "project": {
        "id": 2,
        "value": "project_default"
      },
      "environment": {
        "id": 3,
        "value": "dev_override"
      },
      "user": {
        "id": 4,
        "value": "user_override"
      }
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "Success!",
    "developer_message": ""
  },
  "extra": {}
}
```

<h3 id="retrieve-projects-environment-variables-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvVarUserResponse](#schemaenvvaruserresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-extended-attributes">Extended Attributes</h1>

## Create Extended Attributes

<a id="opIdCreate Extended Attributes"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/extended-attributes/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "extended_attributes": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/extended-attributes/`

Create a new Extended Attributes record.

> Body parameter

```json
{
  "extended_attributes": {}
}
```

<h3 id="create-extended-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[ExtendedAttributesCreateBodyRequest](#schemaextendedattributescreatebodyrequest)|true|none|
|» extended_attributes|body|object|true|The key-value pairs to be stored as extended attributes. dbt guarantees to support extended attributes up to 4096 bytes in serialized JSON form.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "extended_attributes": {},
    "state": 1
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-extended-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExtendedAttributesResponse](#schemaextendedattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Extended Attributes

<a id="opIdRetrieve Extended Attributes"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/extended-attributes/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/extended-attributes/{id}/`

Retrieve an existing Extended Attributes record.

<h3 id="retrieve-extended-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "extended_attributes": {},
    "state": 1
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-extended-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExtendedAttributesResponse](#schemaextendedattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Extended Attributes

<a id="opIdDestroy Extended Attributes"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/extended-attributes/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/extended-attributes/{id}/`

Delete an existing Extended Attributes record.

<h3 id="destroy-extended-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-extended-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Extended Attributes

<a id="opIdUpdate Extended Attributes"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/extended-attributes/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "extended_attributes": {},
    "state": 0
  }'
```

`PATCH /api/v3/accounts/{account_id}/projects/{project_id}/extended-attributes/{id}/`

Update an existing Extended Attributes record.

> Body parameter

```json
{
  "extended_attributes": {},
  "state": 0
}
```

<h3 id="update-extended-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[ExtendedAttributesUpdateBodyRequest](#schemaextendedattributesupdatebodyrequest)|true|none|
|» extended_attributes|body|object|true|The key-value pairs to be stored as extended attributes. dbt guarantees to support extended attributes up to 4096 bytes in serialized JSON form.|
|» state|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "extended_attributes": {},
    "state": 1
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-extended-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExtendedAttributesResponse](#schemaextendedattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-lineage-integrations">Lineage Integrations</h1>

## List Lineage Integrations

<a id="opIdList Lineage Integrations"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/`

<h3 id="list-lineage-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "project_id": 0,
      "name": "string"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-lineage-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListLineageIntegrationResponse](#schemalistlineageintegrationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Lineage Integration

<a id="opIdCreate Lineage Integration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": {},
    "account_id": 0,
    "project_id": 0,
    "config": {}
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/`

> Body parameter

```json
{
  "name": {},
  "account_id": 0,
  "project_id": 0,
  "config": {}
}
```

<h3 id="create-lineage-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[PostLineageIntegrationRequest](#schemapostlineageintegrationrequest)|true|none|
|» name|body|object|true|The name of the integration|
|» account_id|body|integer(int64)|true|The account the integration is associated with|
|» project_id|body|integer(int64)|false|The project the integration is associated with|
|» config|body|object|false|The integration configuration for this type of integration|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "name": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-lineage-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailLineageIntegrationResponse](#schemadetaillineageintegrationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get Lineage Integration

<a id="opIdGet Lineage Integration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/`

<h3 id="get-lineage-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "name": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-lineage-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailLineageIntegrationResponse](#schemadetaillineageintegrationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Lineage Integration

<a id="opIdDelete Lineage Integration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/`

<h3 id="delete-lineage-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="delete-lineage-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Lineage Integration

<a id="opIdUpdate Lineage Integration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": {},
    "account_id": 0,
    "project_id": 0,
    "config": {}
  }'
```

`PATCH /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/`

> Body parameter

```json
{
  "name": {},
  "account_id": 0,
  "project_id": 0,
  "config": {}
}
```

<h3 id="update-lineage-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[PatchLineageIntegrationRequest](#schemapatchlineageintegrationrequest)|false|none|
|» name|body|object|false|The name of the integration|
|» account_id|body|integer(int64)|false|The account the integration is associated with|
|» project_id|body|integer(int64)|false|The project the integration is associated with|
|» config|body|object|false|The integration configuration for this type of integration|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "name": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-lineage-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailLineageIntegrationResponse](#schemadetaillineageintegrationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List collections from BI tool

<a id="opIdList collections from BI tool"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/collections/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/collections/`

<h3 id="list-collections-from-bi-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|collection_id|query|string|false|A subfolder in the collection|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "collections": [
        {
          "identifier": "string",
          "name": "string",
          "type": "folder",
          "watching": true
        }
      ]
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-collections-from-bi-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListLineageIntegrationCollectionResponse](#schemalistlineageintegrationcollectionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List collections from BI tool_2

<a id="opIdList collections from BI tool_2"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/collections/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/collections/{collection_id}/`

<h3 id="list-collections-from-bi-tool2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|collection_id|path|string|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "collections": [
        {
          "identifier": "string",
          "name": "string",
          "type": "folder",
          "watching": true
        }
      ]
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-collections-from-bi-tool2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListLineageIntegrationCollectionResponse](#schemalistlineageintegrationcollectionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Lineage Integration Selections

<a id="opIdUpdate Lineage Integration Selections"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/integrations/lineage/0/selections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to_add": [
      {
        "identifier": "string",
        "name": "string",
        "type": "folder",
        "watching": true
      }
    ],
    "to_remove": [
      "string"
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/integrations/lineage/{id}/selections`

> Body parameter

```json
{
  "to_add": [
    {
      "identifier": "string",
      "name": "string",
      "type": "folder",
      "watching": true
    }
  ],
  "to_remove": [
    "string"
  ]
}
```

<h3 id="update-lineage-integration-selections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[PostLineageIntegrationWatchSelectionRequest](#schemapostlineageintegrationwatchselectionrequest)|false|none|
|» to_add|body|[[WatchSelectionItem](#schemawatchselectionitem)]|false|Collections to start watching|
|» to_remove|body|[string]|false|Identifiers of collections to stop watching|

> Example responses

> 200 Response

```json
{
  "added": 0,
  "removed": 0
}
```

<h3 id="update-lineage-integration-selections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetLineageIntegrationWatchSelectionResponse](#schemagetlineageintegrationwatchselectionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-repositories">Repositories</h1>

## Create Managed Repository

<a id="opIdCreate Managed Repository"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/managed-repositories/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/managed-repositories/`

Create a new dbt Cloud managed repository.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-managed-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[CreateManagedRepositoryRequestRequest](#schemacreatemanagedrepositoryrequestrequest)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0,
    "github_repo": "string",
    "name": "string",
    "web_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deploy_key": {
      "account_id": 0,
      "public_key": "string",
      "state": 1
    },
    "git_provider": null,
    "gitlab": {
      "account_id": 0,
      "repository_id": 0,
      "gitlab_project_id": 0,
      "state": 1,
      "project_access_token_id": 0,
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "is_private_link_enabled": false
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-managed-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RepositoryV3Enveloped](#schemarepositoryv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Repositories

<a id="opIdList Repositories"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/repositories/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/repositories/`

List repositories for the given project

<h3 id="list-repositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: deploy_key.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|project_id|path|integer(int64)|true|none|
|project_id__in|query|[integer(int64)]|false|none|
|remote_url|query|string|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0,
      "github_repo": "string",
      "name": "string",
      "web_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deploy_key": {
        "account_id": 0,
        "public_key": "string",
        "state": 1
      },
      "git_provider": null,
      "gitlab": {
        "account_id": 0,
        "repository_id": 0,
        "gitlab_project_id": 0,
        "state": 1,
        "project_access_token_id": 0,
        "expires_at": "1970-01-01T00:00:00Z"
      },
      "is_private_link_enabled": false
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-repositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RepositoryV3ListEnveloped](#schemarepositoryv3listenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Repository

<a id="opIdCreate Repository"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/repositories/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/repositories/`

Create a new repository for the given project

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "full_name": "string",
  "remote_backend": {},
  "git_clone_strategy": {},
  "deploy_key_id": 0,
  "repository_credentials_id": 0,
  "github_installation_id": 0,
  "github_webhook_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "git_provider_id": 0
}
```

<h3 id="create-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[RepositoryV3Request](#schemarepositoryv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the repo is associated with|
|» project_id|body|integer(int64)|false|The project the repo is associated with|
|» full_name|body|string|false|The name of the repo⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.For example, if the remote URL is 'git://github.com/your_org/your_repo_name.git',the correct full_name is 'your_org/your_repo_name'.|
|» remote_backend|body|object|false|The associated git provider⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.<br><br>* `ado` - ado<br>* `github` - github<br>* `managed` - managed<br>* `gitlab` - gitlab<br>* `manual_config` - manual_config|
|» git_clone_strategy|body|object|false|The strategy to use when cloning the repo<br><br>* `azure_active_directory_app` - azure_active_directory_app<br>* `deploy_key` - deploy_key<br>* `deploy_token` - deploy_token<br>* `github_app` - github_app<br>* `git_token` - git_token|
|» deploy_key_id|body|integer(int64)|false|none|
|» repository_credentials_id|body|integer(int64)|false|none|
|» github_installation_id|body|integer(int64)|false|none|
|» github_webhook_id|body|integer(int64)|false|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» private_link_endpoint_id|body|string|false|none|
|» git_provider_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0,
    "github_repo": "string",
    "name": "string",
    "web_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deploy_key": {
      "account_id": 0,
      "public_key": "string",
      "state": 1
    },
    "git_provider": null,
    "gitlab": {
      "account_id": 0,
      "repository_id": 0,
      "gitlab_project_id": 0,
      "state": 1,
      "project_access_token_id": 0,
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "is_private_link_enabled": false
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RepositoryV3Enveloped](#schemarepositoryv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Repository

<a id="opIdRetrieve Repository"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/repositories/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/repositories/{id}/`

Get a repository by ID

<h3 id="retrieve-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: deploy_key.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0,
    "github_repo": "string",
    "name": "string",
    "web_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deploy_key": {
      "account_id": 0,
      "public_key": "string",
      "state": 1
    },
    "git_provider": null,
    "gitlab": {
      "account_id": 0,
      "repository_id": 0,
      "gitlab_project_id": 0,
      "state": 1,
      "project_access_token_id": 0,
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "is_private_link_enabled": false
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RepositoryV3Enveloped](#schemarepositoryv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Repository

<a id="opIdUpdate Repository"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/repositories/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/repositories/{id}/`

Update a repository

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "full_name": "string",
  "remote_backend": {},
  "git_clone_strategy": {},
  "deploy_key_id": 0,
  "repository_credentials_id": 0,
  "github_installation_id": 0,
  "github_webhook_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "git_provider_id": 0
}
```

<h3 id="update-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[RepositoryV3Request](#schemarepositoryv3request)|true|none|
|» account_id|body|integer(int64)|true|The account the repo is associated with|
|» project_id|body|integer(int64)|false|The project the repo is associated with|
|» full_name|body|string|false|The name of the repo⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.For example, if the remote URL is 'git://github.com/your_org/your_repo_name.git',the correct full_name is 'your_org/your_repo_name'.|
|» remote_backend|body|object|false|The associated git provider⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.<br><br>* `ado` - ado<br>* `github` - github<br>* `managed` - managed<br>* `gitlab` - gitlab<br>* `manual_config` - manual_config|
|» git_clone_strategy|body|object|false|The strategy to use when cloning the repo<br><br>* `azure_active_directory_app` - azure_active_directory_app<br>* `deploy_key` - deploy_key<br>* `deploy_token` - deploy_token<br>* `github_app` - github_app<br>* `git_token` - git_token|
|» deploy_key_id|body|integer(int64)|false|none|
|» repository_credentials_id|body|integer(int64)|false|none|
|» github_installation_id|body|integer(int64)|false|none|
|» github_webhook_id|body|integer(int64)|false|none|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|» private_link_endpoint_id|body|string|false|none|
|» git_provider_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0,
    "github_repo": "string",
    "name": "string",
    "web_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deploy_key": {
      "account_id": 0,
      "public_key": "string",
      "state": 1
    },
    "git_provider": null,
    "gitlab": {
      "account_id": 0,
      "repository_id": 0,
      "gitlab_project_id": 0,
      "state": 1,
      "project_access_token_id": 0,
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "is_private_link_enabled": false
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RepositoryV3Enveloped](#schemarepositoryv3enveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Repository

<a id="opIdDestroy Repository"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/repositories/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/repositories/{id}/`

Delete a repository

<h3 id="destroy-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="destroy-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-projects-managed-repositories">Projects Managed Repositories</h1>

## Retrieve Projects Managed Repositories Download

<a id="opIdRetrieve Projects Managed Repositories Download"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/managed-repositories/0/download/ \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/managed-repositories/{repository_id}/download/`

Download a managed repository as a ZIP archive

<h3 id="retrieve-projects-managed-repositories-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|
|repository_id|path|integer(int64)|true|none|

<h3 id="retrieve-projects-managed-repositories-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-profiles">Profiles</h1>

## List Profiles

<a id="opIdList Profiles"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/profiles/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/profiles/`

List profiles.

Profiles are the set of connection, credentials, and attributes used to connect to a data warehouse. They can be assigned to deployment environments to run jobs.

<h3 id="list-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|connection_id|query|integer(int64)|false|The ID of the connection for the profile|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|key|query|string|false|Filter profiles whose key contains this value, case-insensitive|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|profile_ids|query|object|false|A list of profile IDs to fetch|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="list-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProfileListResponse](#schemaprofilelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Profile

<a id="opIdCreate Profile"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/profiles/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "project_id": 0,
    "connection_id": 0,
    "key": "string",
    "credentials_id": 0,
    "extended_attributes_id": 0
  }'
```

`POST /api/v3/accounts/{account_id}/projects/{project_id}/profiles/`

Create a new profile.

Profiles are the set of connection, credentials, and attributes used to connect to a data warehouse. They can be assigned to deployment environments to run jobs.

> Body parameter

```json
{
  "account_id": 0,
  "project_id": 0,
  "connection_id": 0,
  "key": "string",
  "credentials_id": 0,
  "extended_attributes_id": 0
}
```

<h3 id="create-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|project_id|path|integer(int64)|true|none|
|body|body|[ProfileCreateBodyRequest](#schemaprofilecreatebodyrequest)|true|none|
|» account_id|body|integer(int64)|true|The ID of the account|
|» project_id|body|integer(int64)|true|The ID of the project|
|» connection_id|body|integer(int64)|true|The ID of the connection|
|» key|body|string|true|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|» credentials_id|body|integer(int64)|true|The ID of the credentials|
|» extended_attributes_id|body|integer(int64)|false|The ID of the extended attributes|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProfileDetailResponse](#schemaprofiledetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Profile

<a id="opIdRetrieve Profile"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/profiles/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/projects/{project_id}/profiles/{id}/`

Retrieve a specific profile.

Profiles are the set of connection, credentials, and attributes used to connect to a data warehouse. They can be assigned to deployment environments to run jobs.

<h3 id="retrieve-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|project_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProfileDetailResponse](#schemaprofiledetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Profile

<a id="opIdDelete Profile"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/profiles/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/projects/{project_id}/profiles/{id}/`

Delete an existing profile. The profile must not be assigned to any deployment environments in order to be deleted.

Profiles are the set of connection, credentials, and attributes used to connect to a data warehouse. They can be assigned to deployment environments to run jobs.

<h3 id="delete-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|

<h3 id="delete-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Profile

<a id="opIdUpdate Profile"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/projects/0/profiles/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pk": 0,
    "account_id": 0,
    "project_id": 0,
    "key": null,
    "connection_id": null,
    "credentials_id": null,
    "extended_attributes_id": null
  }'
```

`PATCH /api/v3/accounts/{account_id}/projects/{project_id}/profiles/{id}/`

Update an existing profile.

Profiles are the set of connection, credentials, and attributes used to connect to a data warehouse. They can be assigned to deployment environments to run jobs.

> Body parameter

```json
{
  "pk": 0,
  "account_id": 0,
  "project_id": 0,
  "key": null,
  "connection_id": null,
  "credentials_id": null,
  "extended_attributes_id": null
}
```

<h3 id="update-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|project_id|path|integer(int64)|true|none|
|body|body|[ProfileUpdateBodyRequest](#schemaprofileupdatebodyrequest)|true|none|
|» pk|body|integer(int64)|true|The ID of the Profile to be changed|
|» account_id|body|integer(int64)|true|The ID of the account|
|» project_id|body|integer(int64)|true|The ID of the project|
|» key|body|string|false|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|» connection_id|body|integer(int64)|false|The ID of the connection|
|» credentials_id|body|integer(int64)|false|The ID of the credentials|
|» extended_attributes_id|body|integer(int64)|false|The ID of the extended attributes. Set to null to unset.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProfileDetailResponse](#schemaprofiledetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-scim-endpoints">SCIM Endpoints</h1>

## Retrieve SCIM configuration

<a id="opIdRetrieve SCIM configuration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim-config/`

Retrieve the SCIM configuration for the account

<h3 id="retrieve-scim-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "enabled": true,
    "manual_updates_allowed": true,
    "scim_controlled_license_type": true
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-scim-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMConfigResponse](#schemadetailscimconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create SCIM configuration

<a id="opIdCreate SCIM configuration"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "manual_updates_allowed": true,
    "scim_controlled_license_type": true
  }'
```

`POST /api/v3/accounts/{account_id}/scim-config/`

Create SCIM configuration for the account

> Body parameter

```json
{
  "enabled": true,
  "manual_updates_allowed": true,
  "scim_controlled_license_type": true
}
```

<h3 id="create-scim-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[CreateSCIMConfigurationRequestRequest](#schemacreatescimconfigurationrequestrequest)|true|none|
|» enabled|body|boolean|true|none|
|» manual_updates_allowed|body|boolean|true|none|
|» scim_controlled_license_type|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "enabled": true,
    "manual_updates_allowed": true,
    "scim_controlled_license_type": true
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-scim-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMConfigResponse](#schemadetailscimconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve SCIM tokens

<a id="opIdRetrieve SCIM tokens"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/tokens/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim-config/tokens/`

Retrieve all SCIM tokens

<h3 id="retrieve-scim-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "last_used": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="retrieve-scim-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListSCIMTokenResponse](#schemalistscimtokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create SCIM token

<a id="opIdCreate SCIM token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/tokens/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/scim-config/tokens/`

Create a SCIM token

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-scim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[CreateSCIMTokenRequestRequest](#schemacreatescimtokenrequestrequest)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z",
    "token_string": "string"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-scim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailCreateSCIMTokenResponse](#schemadetailcreatescimtokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve SCIM token

<a id="opIdRetrieve SCIM token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/tokens/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim-config/tokens/{id}/`

Retrieve the specified SCIM token

<h3 id="retrieve-scim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-scim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMTokenResponse](#schemadetailscimtokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete SCIM token

<a id="opIdDelete SCIM token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim-config/tokens/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/scim-config/tokens/{id}/`

Delete the specified SCIM token

<h3 id="delete-scim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="delete-scim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List SCIM Groups

<a id="opIdList SCIM Groups"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Groups`

List all groups via SCIM

<h3 id="list-scim-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "externalId": "string",
      "displayName": "string",
      "members": [
        {
          "value": "string",
          "display": "string"
        }
      ],
      "meta": {
        "resourceType": "string",
        "location": "string",
        "created": "string",
        "lastModified": "string"
      },
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ]
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-scim-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListGroupSCIMResponse](#schemalistgroupscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create SCIM Group

<a id="opIdCreate SCIM Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schemas": [
      "string"
    ],
    "externalId": "12uhdfs0",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ]
  }'
```

`POST /api/v3/accounts/{account_id}/scim/v2/Groups`

Create a group via SCIM

> Body parameter

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "displayName": "string",
  "members": [
    {
      "value": "string",
      "display": "string"
    }
  ]
}
```

<h3 id="create-scim-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[CreateOrReplaceGroupSCIMRequestRequest](#schemacreateorreplacegroupscimrequestrequest)|true|none|
|» schemas|body|[string]|true|The SCIM schema of the request|
|» externalId|body|string|false|The external ID of the group|
|» displayName|body|string|true|The display name of the group|
|» members|body|[[GroupMemberComponent](#schemagroupmembercomponent)]|false|The members of the group|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "string",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    },
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-scim-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailGroupSCIMResponse](#schemadetailgroupscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM Group

<a id="opIdGet SCIM Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups/string \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Groups/{group_id}`

Get a group via SCIM

<h3 id="get-scim-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|path|string|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "string",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    },
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailGroupSCIMResponse](#schemadetailgroupscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update SCIM Group

<a id="opIdUpdate SCIM Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schemas": [
      "string"
    ],
    "externalId": "12uhdfs0",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ]
  }'
```

`PUT /api/v3/accounts/{account_id}/scim/v2/Groups/{group_id}`

Update a group via SCIM using PUT

> Body parameter

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "displayName": "string",
  "members": [
    {
      "value": "string",
      "display": "string"
    }
  ]
}
```

<h3 id="update-scim-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|path|string|true|none|
|body|body|[CreateOrReplaceGroupSCIMRequestRequest](#schemacreateorreplacegroupscimrequestrequest)|true|none|
|» schemas|body|[string]|true|The SCIM schema of the request|
|» externalId|body|string|false|The external ID of the group|
|» displayName|body|string|true|The display name of the group|
|» members|body|[[GroupMemberComponent](#schemagroupmembercomponent)]|false|The members of the group|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "string",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    },
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-scim-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailGroupSCIMResponse](#schemadetailgroupscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete SCIM Group

<a id="opIdDelete SCIM Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/scim/v2/Groups/{group_id}`

Delete a group via SCIM

<h3 id="delete-scim-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|path|string|true|none|

<h3 id="delete-scim-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Patch SCIM Group

<a id="opIdPatch SCIM Group"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Operations": [
      {
        "op": {},
        "path": "string",
        "value": null
      }
    ],
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:PatchOp"
    ]
  }'
```

`PATCH /api/v3/accounts/{account_id}/scim/v2/Groups/{group_id}`

Update a group via SCIM using PATCH

> Body parameter

```json
{
  "Operations": [
    {
      "op": {},
      "path": "string",
      "value": null
    }
  ],
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ]
}
```

<h3 id="patch-scim-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|path|string|true|none|
|body|body|[PatchGroupSCIMRequestRequest](#schemapatchgroupscimrequestrequest)|true|none|
|» Operations|body|[[PatchOperation](#schemapatchoperation)]|true|The operations to perform|
|» schemas|body|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "string",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    },
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="patch-scim-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailGroupSCIMResponse](#schemadetailgroupscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM Resource Types

<a id="opIdGet SCIM Resource Types"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/ResourceTypes \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/ResourceTypes`

Get Supported SCIM Resource Types

<h3 id="get-scim-resource-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 0,
    "startIndex": 0,
    "itemsPerPage": 0,
    "Resources": [
      null
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-resource-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMListResponse](#schemadetailscimlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM Resource Type Details

<a id="opIdGet SCIM Resource Type Details"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/ResourceTypes/string \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type}`

Get Supported SCIM Resource Type Details

<h3 id="get-scim-resource-type-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|resource_type|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
    ],
    "id": "string",
    "name": "string",
    "endpoint": "string",
    "description": "string",
    "schema": "string",
    "schemaExtensions": [
      {
        "schema": "string",
        "required": true
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-resource-type-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMResourceTypeResponse](#schemadetailscimresourcetyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM Schemas

<a id="opIdGet SCIM Schemas"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Schemas \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Schemas`

Get Supported SCIM Schemas

<h3 id="get-scim-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 0,
    "startIndex": 0,
    "itemsPerPage": 0,
    "Resources": [
      null
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMListResponse](#schemadetailscimlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM Schema Details

<a id="opIdGet SCIM Schema Details"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Schemas/string \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Schemas/{schema_uri}`

Get Supported SCIM Schema Details

<h3 id="get-scim-schema-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|schema_uri|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
    ],
    "id": "string",
    "name": "string",
    "endpoint": "string",
    "description": "string",
    "schema": "string",
    "schemaExtensions": [
      {
        "schema": "string",
        "required": true
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-schema-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailSCIMResourceTypeResponse](#schemadetailscimresourcetyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Scim V2 Serviceproviderconfig

<a id="opIdRetrieve Scim V2 Serviceproviderconfig"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/ServiceProviderConfig \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/ServiceProviderConfig`

Get the SCIM Service Provider Config

<h3 id="retrieve-scim-v2-serviceproviderconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

<h3 id="retrieve-scim-v2-serviceproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List SCIM Users

<a id="opIdList SCIM Users"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Users`

List all users via SCIM

<h3 id="list-scim-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "externalId": "12uhdfs0",
      "userName": "string",
      "active": true,
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
      ],
      "name": {
        "givenName": "John",
        "familyName": "Smith"
      },
      "emails": [
        {
          "value": "john.smith@example.com",
          "primary": "True"
        }
      ],
      "groups": [
        {
          "value": "1234",
          "externalId": "group-1234",
          "display": "Example Group"
        }
      ],
      "meta": {
        "resourceType": "User",
        "created": "2024-01-01T00:00:00+00:00",
        "lastModified": "2024-01-01T00:00:00+00:00",
        "location": "/scim/v2/Users/1111"
      },
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
        "licenseType": "developer"
      }
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-scim-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListUserSCIMResponse](#schemalistuserscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create SCIM User

<a id="opIdCreate SCIM User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schemas": [
      "string"
    ],
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": true
      }
    ],
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  }'
```

`POST /api/v3/accounts/{account_id}/scim/v2/Users`

Create a user via SCIM

> Body parameter

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "userName": "string",
  "active": true,
  "name": {
    "givenName": "John",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "john.smith@example.com",
      "primary": true
    }
  ],
  "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
    "licenseType": "developer"
  }
}
```

<h3 id="create-scim-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[CreateUserSCIMRequestRequest](#schemacreateuserscimrequestrequest)|true|none|
|» schemas|body|[string]|true|The user schemas supported by the SCIM provider|
|» externalId|body|string|false|The external ID of the user (user's scim id)|
|» userName|body|string|true|The username for the user which is their email address|
|» active|body|boolean|true|Whether the user is active|
|» name|body|object|true|The user's name components|
|» » givenName|body|string|false|The given name of the user|
|» » familyName|body|string|false|The family name of the user|
|» emails|body|[[UserEmailComponent](#schemauseremailcomponent)]|true|The user's email addresses|
|» urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User|body|object|false|Custom attributes for the user. This is where licenseType will be stored. When omitted, the account's default license type is used.|
|» » licenseType|body|object|true|The license type of the user|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
    ],
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": "True"
      }
    ],
    "groups": [
      {
        "value": "1234",
        "externalId": "group-1234",
        "display": "Example Group"
      }
    ],
    "meta": {
      "resourceType": "User",
      "created": "2024-01-01T00:00:00+00:00",
      "lastModified": "2024-01-01T00:00:00+00:00",
      "location": "/scim/v2/Users/1111"
    },
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-scim-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailUserSCIMResponse](#schemadetailuserscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get SCIM User

<a id="opIdGet SCIM User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users/string \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/scim/v2/Users/{user_id}`

Get a user via SCIM

<h3 id="get-scim-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
    ],
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": "True"
      }
    ],
    "groups": [
      {
        "value": "1234",
        "externalId": "group-1234",
        "display": "Example Group"
      }
    ],
    "meta": {
      "resourceType": "User",
      "created": "2024-01-01T00:00:00+00:00",
      "lastModified": "2024-01-01T00:00:00+00:00",
      "location": "/scim/v2/Users/1111"
    },
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="get-scim-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailUserSCIMResponse](#schemadetailuserscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Replace SCIM User

<a id="opIdReplace SCIM User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schemas": [
      "string"
    ],
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": true
      }
    ],
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  }'
```

`PUT /api/v3/accounts/{account_id}/scim/v2/Users/{user_id}`

Replace a user via SCIM using PUT

> Body parameter

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "userName": "string",
  "active": true,
  "name": {
    "givenName": "John",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "john.smith@example.com",
      "primary": true
    }
  ],
  "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
    "licenseType": "developer"
  }
}
```

<h3 id="replace-scim-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|user_id|path|string|true|none|
|body|body|[ReplaceUserSCIMRequestRequest](#schemareplaceuserscimrequestrequest)|true|none|
|» schemas|body|[string]|true|The user schemas supported by the SCIM provider|
|» externalId|body|string|false|The external ID of the user (user's scim id)|
|» userName|body|string|true|The username for the user which is their email address|
|» active|body|boolean|true|Whether the user is active|
|» name|body|object|true|The user's name components|
|» » givenName|body|string|false|The given name of the user|
|» » familyName|body|string|false|The family name of the user|
|» emails|body|[[UserEmailComponent](#schemauseremailcomponent)]|true|The user's email addresses|
|» urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User|body|object|false|Custom attributes for the user. This is where licenseType will be stored|
|» » licenseType|body|object|true|The license type of the user|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
    ],
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": "True"
      }
    ],
    "groups": [
      {
        "value": "1234",
        "externalId": "group-1234",
        "display": "Example Group"
      }
    ],
    "meta": {
      "resourceType": "User",
      "created": "2024-01-01T00:00:00+00:00",
      "lastModified": "2024-01-01T00:00:00+00:00",
      "location": "/scim/v2/Users/1111"
    },
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="replace-scim-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailUserSCIMResponse](#schemadetailuserscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete SCIM User

<a id="opIdDelete SCIM User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/scim/v2/Users/{user_id}`

Delete a user via SCIM. This endpoint will remove the users license from the account.

<h3 id="delete-scim-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|user_id|path|string|true|none|

<h3 id="delete-scim-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update SCIM User

<a id="opIdUpdate SCIM User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/scim/v2/Users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/scim+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schemas": [
      "string"
    ],
    "Operations": [
      {
        "op": {},
        "value": {
          "active": true
        },
        "path": "string"
      }
    ]
  }'
```

`PATCH /api/v3/accounts/{account_id}/scim/v2/Users/{user_id}`

Update a user attribute(s) via SCIM

> Body parameter

```json
{
  "schemas": [
    "string"
  ],
  "Operations": [
    {
      "op": {},
      "value": {
        "active": true
      },
      "path": "string"
    }
  ]
}
```

<h3 id="update-scim-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|user_id|path|string|true|none|
|body|body|[UpdateUserSCIMRequestRequest](#schemaupdateuserscimrequestrequest)|true|none|
|» schemas|body|[string]|true|The user schemas supported by the SCIM provider|
|» Operations|body|[[UserOperationComponent](#schemauseroperationcomponent)]|true|The operations to perform on the user|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
    ],
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": "True"
      }
    ],
    "groups": [
      {
        "value": "1234",
        "externalId": "group-1234",
        "display": "Example Group"
      }
    ],
    "meta": {
      "resourceType": "User",
      "created": "2024-01-01T00:00:00+00:00",
      "lastModified": "2024-01-01T00:00:00+00:00",
      "location": "/scim/v2/Users/1111"
    },
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-scim-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailUserSCIMResponse](#schemadetailuserscimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-semantic-layer-credentials">Semantic Layer Credentials</h1>

## List Semantic Layer Credentials

<a id="opIdList Semantic Layer Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/semantic-layer-credentials/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/semantic-layer-credentials/`

<h3 id="list-semantic-layer-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|order_by|query|string|false|Field to order results by. Prefix with '-' for descending order.|
|pk|query|integer(int64)|false|none|
|project_id|query|integer(int64)|false|none|
|state|query|integer \| string|false|Filters by soft deletion state.<br>            <ul><br>                <li><br>                    <strong>"active"</strong> / <strong>1</strong>: Only active resources<br>                </li><br>                <li><br>                    <strong>"deleted"</strong> / <strong>2</strong>: Only deleted resources<br>                </li><br>                <li><br>                    <strong>"all"</strong>: All resources<br>                </li><br>            </ul><br>            |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "adapter_version": {},
      "schema_type": "semantic_layer_credentials",
      "name": "string",
      "values": null,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "service_tokens": [
        {
          "id": 0,
          "account_id": 0,
          "uid": "string",
          "name": "string"
        }
      ]
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-semantic-layer-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SemanticLayerCredentialsListEnveloped](#schemasemanticlayercredentialslistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-service-tokens">Service Tokens</h1>

## List Service Tokens

<a id="opIdList Service Tokens"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/service-tokens/`

<h3 id="list-service-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "uid": "string",
      "name": "string",
      "state": 0,
      "permission_grants": [
        {
          "permission_set": "account_admin",
          "project_id": 0,
          "writable_environment_categories": [
            "string"
          ]
        }
      ],
      "last_used": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z",
      "semantic_layer_credentials": [
        {}
      ],
      "metadata_only": false,
      "webhooks_only": false
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

<h3 id="list-service-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListServiceTokenResponse](#schemalistservicetokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Service Token

<a id="opIdCreate Service Token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "metadata_only": false,
    "webhooks_only": false
  }'
```

`POST /api/v3/accounts/{account_id}/service-tokens/`

This endpoint is used to generate a new service token for the account.

> Body parameter

```json
{
  "name": "string",
  "permission_grants": [
    {
      "permission_set": "account_admin",
      "project_id": 0,
      "writable_environment_categories": [
        "string"
      ]
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "metadata_only": false,
  "webhooks_only": false
}
```

<h3 id="create-service-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|body|body|[CreateServiceTokenRequestRequest](#schemacreateservicetokenrequestrequest)|true|none|
|» name|body|string|true|The name of the service token|
|» permission_grants|body|[[ServiceTokenPermissionGrant](#schemaservicetokenpermissiongrant)]|false|Permissions to assign to the service token|
|» expires_at|body|string(date-time)|false|When the token stops authenticating. Omit for no expiry. Must be in the future, no more than 365 days out, with a timezone offset.|
|» metadata_only|body|boolean|false|Deprecated. Use the metadata_only permission set instead.|
|» webhooks_only|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "state": 0,
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "last_used": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false,
    "token": "string",
    "token_string": "string",
    "last_identify": "1970-01-01T00:00:00Z",
    "user_id": 0,
    "user": {},
    "type": 1,
    "service_token_permissions": [
      {}
    ]
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-service-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailCreateServiceTokenResponse](#schemadetailcreateservicetokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Service Token

<a id="opIdRetrieve Service Token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/service-tokens/{id}/`

<h3 id="retrieve-service-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "state": 0,
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "last_used": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-service-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailServiceTokenResponse](#schemadetailservicetokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Service Token

<a id="opIdUpdate Service Token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PUT /api/v3/accounts/{account_id}/service-tokens/{id}/`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-service-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|body|body|[UpdateServiceTokenRequestRequest](#schemaupdateservicetokenrequestrequest)|true|none|
|» name|body|string|true|The name of the service token|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "state": 0,
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "last_used": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="update-service-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailServiceTokenResponse](#schemadetailservicetokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Service Token

<a id="opIdDestroy Service Token"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/service-tokens/{id}/`

<h3 id="destroy-service-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|

<h3 id="destroy-service-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Service Tokens Permission

<a id="opIdRetrieve Service Tokens Permission"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/service-tokens/0/permissions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/service-tokens/{service_token_id}/permissions/`

List permissions of a given ServiceToken for an account.

<h3 id="retrieve-service-tokens-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|service_token_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "service_token_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "state": 1,
      "writable_environment_categories": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-service-tokens-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ServiceTokenPermissionListEnveloped](#schemaservicetokenpermissionlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-users">Users</h1>

## List Users

<a id="opIdList Users"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/users/`

List users for a given account.

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|group_id|query|integer(int64)|false|Filter by group id.|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|license_type|query|string|false|Filter by license type.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|omit_permissions|query|string|false|When set to "1" (recommended), group permissions and permission statements are omitted from the response.|
|order_by|query|string|false|none|
|pk|query|integer(int64)|false|Filter by primary key (id).|
|pk__in|query|string|false|Filter by primary keys (ids), as serialized JSON, e.g., [1,2,3]. Overrides "pk".|
|search|query|string|false|Case insensitive substring search in email, first_name, last_name, or full name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|license_type|analyst|
|license_type|developer|
|license_type|it|
|license_type|read_only|
|omit_permissions|0|
|omit_permissions|1|
|order_by|-created_at|
|order_by|-date_joined|
|order_by|-email|
|order_by|-email_verified|
|order_by|-first_name|
|order_by|-id|
|order_by|-last_login|
|order_by|-last_name|
|order_by|-license_type|
|order_by|-pk|
|order_by|-scim_managed|
|order_by|-updated_at|
|order_by|-username|
|order_by|created_at|
|order_by|date_joined|
|order_by|email|
|order_by|email_verified|
|order_by|first_name|
|order_by|id|
|order_by|last_login|
|order_by|last_name|
|order_by|license_type|
|order_by|pk|
|order_by|scim_managed|
|order_by|updated_at|
|order_by|username|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "apitoken_last_used": "1970-01-01T00:00:00Z",
      "azure_active_directory_connected": false,
      "azure_active_directory_token_retrieval_failure": true,
      "azure_active_directory_username": "string",
      "email_connected": false,
      "email_verified": false,
      "enterprise_connected": false,
      "enterprise_authentication_method": "string",
      "github_connected": false,
      "github_username": "string",
      "gitlab_connected": false,
      "gitlab_username": "string",
      "is_active": false,
      "is_staff": false,
      "last_login": "1970-01-01T00:00:00Z",
      "show_existing_user_email_verification": true,
      "sso_only_user": true,
      "github_token_retrieval_failure": true,
      "gitlab_token_retrieval_failure": true,
      "created_at": "1970-01-01T00:00:00Z",
      "permissions": [
        {
          "license_type": "string",
          "state": 1
        }
      ],
      "auth_provider_infos": null,
      "licenses": null
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserListEnveloped](#schemauserlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve User

<a id="opIdRetrieve User"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/users/{id}/`

<h3 id="retrieve-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "fullname": "string",
    "email_verified": true,
    "license": {
      "id": 0,
      "license_type": "developer"
    },
    "is_active": false,
    "is_staff": false,
    "scim_managed": true
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="retrieve-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailAccountUserResponse](#schemadetailaccountuserresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Account Scoped PATs

<a id="opIdList Account Scoped PATs"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/account-apikeys/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/users/{user_id}/account-apikeys/`

<h3 id="list-account-scoped-pats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|user_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "uid": "string",
      "name": "string",
      "token": "string",
      "state": 1,
      "token_string": "string",
      "last_used": "1970-01-01T00:00:00Z",
      "last_identify": "1970-01-01T00:00:00Z",
      "user_id": 0,
      "user": {
        "first_name": "string",
        "last_name": "string"
      },
      "type": 1,
      "expires_at": "1970-01-01T00:00:00Z",
      "metadata_only": false,
      "webhooks_only": false,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "service_token_permissions": []
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-account-scoped-pats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ServiceTokenListEnveloped](#schemaservicetokenlistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Account Scoped PAT

<a id="opIdCreate Account Scoped PAT"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/account-apikeys/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v3/accounts/{account_id}/users/{user_id}/account-apikeys/`

> Body parameter

```json
{
  "name": "string",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-account-scoped-pat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|user_id|path|integer(int64)|true|none|
|body|body|[AccountScopedPATRequestRequest](#schemaaccountscopedpatrequestrequest)|true|none|
|» name|body|string|true|none|
|» expires_at|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "user_id": 0,
    "type": 1,
    "uid": "string",
    "name": "string",
    "state": 0,
    "token": "string",
    "token_string": "string",
    "expires_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z",
    "last_identify": "1970-01-01T00:00:00Z",
    "user": {},
    "service_token_permissions": [
      {}
    ],
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="create-account-scoped-pat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailCreateAccountScopedPATResponse](#schemadetailcreateaccountscopedpatresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get Account Scoped PAT

<a id="opIdGet Account Scoped PAT"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/account-apikeys/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/users/{user_id}/account-apikeys/{id}/`

<h3 id="get-account-scoped-pat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|user_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "token": "string",
    "state": 1,
    "token_string": "string",
    "last_used": "1970-01-01T00:00:00Z",
    "last_identify": "1970-01-01T00:00:00Z",
    "user_id": 0,
    "user": {
      "first_name": "string",
      "last_name": "string"
    },
    "type": 1,
    "expires_at": "1970-01-01T00:00:00Z",
    "metadata_only": false,
    "webhooks_only": false,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "service_token_permissions": []
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="get-account-scoped-pat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountScopedPATResponseEnveloped](#schemaaccountscopedpatresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Rotate Account Scoped PAT

<a id="opIdRotate Account Scoped PAT"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/account-apikeys/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_at": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v3/accounts/{account_id}/users/{user_id}/account-apikeys/{id}/`

> Body parameter

```json
{
  "expires_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="rotate-account-scoped-pat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|user_id|path|integer(int64)|true|none|
|body|body|[AccountScopedPATRotateRequestRequest](#schemaaccountscopedpatrotaterequestrequest)|false|none|
|» expires_at|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "user_id": 0,
    "type": 1,
    "uid": "string",
    "name": "string",
    "state": 0,
    "token": "string",
    "token_string": "string",
    "expires_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z",
    "last_identify": "1970-01-01T00:00:00Z",
    "user": {},
    "service_token_permissions": [
      {}
    ],
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

<h3 id="rotate-account-scoped-pat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DetailCreateAccountScopedPATResponse](#schemadetailcreateaccountscopedpatresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete Account Scoped PAT

<a id="opIdDelete Account Scoped PAT"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/users/0/account-apikeys/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/users/{user_id}/account-apikeys/{id}/`

<h3 id="delete-account-scoped-pat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|id|path|integer(int64)|true|none|
|user_id|path|integer(int64)|true|none|

<h3 id="delete-account-scoped-pat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List User Credentials

<a id="opIdList User Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/users/0/credentials/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/users/{user_id}/credentials/`

List the development credentials associated with a given user. Authentication: Requires a personal access token (PAT) for the user specified by `user_id`. The authenticated user must match `user_id`. Service tokens are not supported, including Account Admin service tokens. An admin cannot use their PAT to manage another user's credentials.

<h3 id="list-user-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: credentials, project.|
|user_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "user_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "account_id": 0,
        "project_id": 0,
        "type": "postgres",
        "state": 1,
        "threads": 0,
        "username": "string",
        "default_schema": "string",
        "target_name": "string",
        "adapter_version": {}
      },
      "project": {
        "name": "string",
        "account_id": 0,
        "description": "string",
        "connection_id": 0,
        "repository_id": 0,
        "semantic_layer_config_id": 0,
        "state": 1,
        "dbt_project_subdirectory": "string",
        "docs_job_id": 0,
        "freshness_job_id": 0,
        "type": {}
      }
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-user-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserCredentialsListEnveloped](#schemausercredentialslistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create User Credentials

<a id="opIdCreate User Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/users/0/credentials/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "user_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "state": 1
  }'
```

`POST /api/v3/users/{user_id}/credentials/`

Associate a set of development credentials with a given user. Authentication: Requires a personal access token (PAT) for the user specified by `user_id`. The authenticated user must match `user_id`. Service tokens are not supported, including Account Admin service tokens. An admin cannot use their PAT to manage another user's credentials.

> Body parameter

```json
{
  "account_id": 0,
  "user_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "state": 1
}
```

<h3 id="create-user-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int64)|true|none|
|body|body|[UserCredentialsRequest](#schemausercredentialsrequest)|true|none|
|» account_id|body|integer(int64)|true|The account the user credentials are associated with|
|» user_id|body|integer(int64)|true|The user the user credentials are associated with|
|» project_id|body|integer(int64)|true|The project the user credentials are associated with|
|» credentials_id|body|integer(int64)|true|The credentials the user is associated with|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "user_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-user-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserCredentialsEnveloped](#schemausercredentialsenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Get User Credentials

<a id="opIdGet User Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/users/0/credentials/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/users/{user_id}/credentials/{id}/`

Get a development credentials association for a given user. Authentication: Requires a personal access token (PAT) for the user specified by `user_id`. The authenticated user must match `user_id`. Service tokens are not supported, including Account Admin service tokens. An admin cannot use their PAT to manage another user's credentials.

<h3 id="get-user-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response. Available: credentials, project.|
|user_id|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "user_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "account_id": 0,
        "project_id": 0,
        "type": "postgres",
        "state": 1,
        "threads": 0,
        "username": "string",
        "default_schema": "string",
        "target_name": "string",
        "adapter_version": {}
      },
      "project": {
        "name": "string",
        "account_id": 0,
        "description": "string",
        "connection_id": 0,
        "repository_id": 0,
        "semantic_layer_config_id": 0,
        "state": 1,
        "dbt_project_subdirectory": "string",
        "docs_job_id": 0,
        "freshness_job_id": 0,
        "type": {}
      }
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="get-user-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserCredentialsListEnveloped](#schemausercredentialslistenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update User Credentials

<a id="opIdUpdate User Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/users/0/credentials/0/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": 0,
    "user_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "state": 1
  }'
```

`POST /api/v3/users/{user_id}/credentials/{id}/`

Update which development credentials are associated with a specific user. Authentication: Requires a personal access token (PAT) for the user specified by `user_id`. The authenticated user must match `user_id`. Service tokens are not supported, including Account Admin service tokens. An admin cannot use their PAT to manage another user's credentials.

> Body parameter

```json
{
  "account_id": 0,
  "user_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "state": 1
}
```

<h3 id="update-user-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|none|
|user_id|path|integer(int64)|true|none|
|body|body|[UserCredentialsRequest](#schemausercredentialsrequest)|true|none|
|» account_id|body|integer(int64)|true|The account the user credentials are associated with|
|» user_id|body|integer(int64)|true|The user the user credentials are associated with|
|» project_id|body|integer(int64)|true|The project the user credentials are associated with|
|» credentials_id|body|integer(int64)|true|The credentials the user is associated with|
|» state|body|integer|true|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "user_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-user-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserCredentialsEnveloped](#schemausercredentialsenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Delete User Credentials

<a id="opIdDelete User Credentials"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/users/0/credentials/0/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/users/{user_id}/credentials/{id}/`

Delete a development credentials / user association. Authentication: Requires a personal access token (PAT) for the user specified by `user_id`. The authenticated user must match `user_id`. Service tokens are not supported, including Account Admin service tokens. An admin cannot use their PAT to manage another user's credentials.

<h3 id="delete-user-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|none|
|user_id|path|integer(int64)|true|none|

<h3 id="delete-user-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-webhooks">Webhooks</h1>

## Retrieve Webhooks Event

<a id="opIdRetrieve Webhooks Event"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/event/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/event/{event_id}`

<aside class="warning">
This operation is deprecated
</aside>

Get a specific event given an event_id.
This endpoint is deprecated and should not be called anymore.

<h3 id="retrieve-webhooks-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|event_id|path|string|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "subscription_id": "string",
    "account_identifier": "string",
    "job_id": "string",
    "trigger_event_type": "string",
    "payload": "string",
    "http_status_code": "string",
    "account_id": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-webhooks-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventResponseEnvelope](#schemaeventresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Webhooks Event Receipts

<a id="opIdList Webhooks Event Receipts"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/event/string/receipts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/event/{event_id}/receipts`

<aside class="warning">
This operation is deprecated
</aside>

Get all receipts for a given event id.
This endpoint is deprecated and should not be called anymore.

<h3 id="list-webhooks-event-receipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|event_id|path|string|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "event_id": "string",
      "subscription_id": "string",
      "dispatched_at": "string",
      "http_status_code": "string",
      "error_info": "string",
      "request_body": "string",
      "request_headers": "string",
      "response_body": "string"
    }
  ],
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-webhooks-event-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListWebhooksReceiptsResponseEnvelope](#schemalistwebhooksreceiptsresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Webhooks Receipt

<a id="opIdRetrieve Webhooks Receipt"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/receipt/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/receipt/{receipt_id}`

<aside class="warning">
This operation is deprecated
</aside>

Get a specific receipt given its id.
This endpoint is deprecated and should not be called anymore.

<h3 id="retrieve-webhooks-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|receipt_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "event_id": "string",
    "subscription_id": "string",
    "dispatched_at": "string",
    "http_status_code": "string",
    "error_info": "string",
    "request_body": "string",
    "request_headers": "string",
    "response_body": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-webhooks-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetWebhooksReceiptResponseEnvelope](#schemagetwebhooksreceiptresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Retrieve Webhooks Subscription

<a id="opIdRetrieve Webhooks Subscription"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}`

Get a specific subscription with a subscription id

<h3 id="retrieve-webhooks-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-webhooks-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SubscriptionResponseEnvelope](#schemasubscriptionresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Update Webhooks Subscription

<a id="opIdUpdate Webhooks Subscription"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  }'
```

`PUT /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}`

Edit a subscription given a subscription id

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "event_types": [
    null
  ],
  "job_ids": [
    0
  ],
  "client_url": "string",
  "active": true,
  "http_status_code": "string",
  "dispatched_at": "string",
  "deactivate_reason": "string",
  "account_id": 0,
  "account_identifier": "string"
}
```

<h3 id="update-webhooks-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|subscription_id|path|string|true|none|
|body|body|[SubscriptionRequest](#schemasubscriptionrequest)|true|none|
|» id|body|string|false|none|
|» name|body|string|true|Webhook name|
|» description|body|string|false|Webhook description|
|» event_types|body|[object]|true|Event types that trigger this webhook. Must not be empty.|
|» job_ids|body|[integer(int64)]|false|Job IDs that trigger this webhook. Leave empty to trigger for all jobs.|
|» client_url|body|string|true|Endpoint where events are sent|
|» active|body|boolean|true|Whether or not this Webhook is currently active|
|» http_status_code|body|string|false|The latest HTTP status code received from the client URL. 0 indicates that the webhook has not been dispatched.|
|» dispatched_at|body|string|false|Timestamp of when the webhook was last dispatched.|
|» deactivate_reason|body|string|false|Reason for deactivation|
|» account_id|body|integer(int64)|false|none|
|» account_identifier|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="update-webhooks-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateSubscriptionResponseEnvelope](#schemaupdatesubscriptionresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Destroy Webhooks Subscription

<a id="opIdDestroy Webhooks Subscription"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}`

Delete a specific subscription

<h3 id="destroy-webhooks-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  },
  "status": {
    "code": 0,
    "is_success": true
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="destroy-webhooks-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteSubscriptionResponseEnvelope](#schemadeletesubscriptionresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Webhooks Subscription Event Receipt

<a id="opIdList Webhooks Subscription Event Receipt"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string/event/string/receipt \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}/event/{event_id}/receipt`

Get the receipt for a given subscription id and event id.

<h3 id="list-webhooks-subscription-event-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|event_id|path|string|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "event_id": "string",
      "subscription_id": "string",
      "dispatched_at": "string",
      "http_status_code": "string",
      "error_info": "string",
      "request_body": "string",
      "request_headers": "string",
      "response_body": "string"
    }
  ],
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-webhooks-subscription-event-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListWebhooksReceiptsResponseEnvelope](#schemalistwebhooksreceiptsresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Webhooks Events

<a id="opIdList Webhooks Events"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}/events`

Get all events for a specific subscription

<h3 id="list-webhooks-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "subscription_id": "string",
      "account_identifier": "string",
      "job_id": "string",
      "trigger_event_type": "string",
      "payload": "string",
      "http_status_code": "string",
      "account_id": "string"
    }
  ],
  "status": {
    "code": 0
  },
  "extra": {
    "pagination": {
      "total_count": 0,
      "count": 0
    },
    "filters": {
      "offset": 0,
      "limit": 0
    }
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="list-webhooks-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedWebhooksEvents](#schemapaginatedwebhooksevents)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Test Webhooks Subscription

<a id="opIdTest Webhooks Subscription"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscription/string/test \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/subscription/{subscription_id}/test`

Test the client endpoint for a given subscription

<h3 id="test-webhooks-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "event_id": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="test-webhooks-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TestSubscriptionResponseEnvelope](#schematestsubscriptionresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## List Webhooks Subscriptions

<a id="opIdList Webhooks Subscriptions"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/accounts/{account_id}/webhooks/subscriptions`

Given an account id list all webhook subscriptions

<h3 id="list-webhooks-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "event_types": [
        null
      ],
      "job_ids": [
        0
      ],
      "client_url": "string",
      "active": true,
      "http_status_code": "string",
      "dispatched_at": "string",
      "deactivate_reason": "string",
      "account_id": 0,
      "account_identifier": "string"
    }
  ],
  "status": {
    "code": 0
  },
  "extra": {
    "pagination": {
      "total_count": 0,
      "count": 0
    },
    "filters": {
      "offset": 0,
      "limit": 0
    }
  }
}
```

<h3 id="list-webhooks-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedWebhooksSubscriptions](#schemapaginatedwebhookssubscriptions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

## Create Webhooks Subscription

<a id="opIdCreate Webhooks Subscription"></a>

> Code samples

```bash
curl https://cloud.getdbt.com/api/v3/accounts/0/webhooks/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  }'
```

`POST /api/v3/accounts/{account_id}/webhooks/subscriptions`

Create a new webhook subscription

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "event_types": [
    null
  ],
  "job_ids": [
    0
  ],
  "client_url": "string",
  "active": true,
  "http_status_code": "string",
  "dispatched_at": "string",
  "deactivate_reason": "string",
  "account_id": 0,
  "account_identifier": "string"
}
```

<h3 id="create-webhooks-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|none|
|limit|query|integer|false|The maximum number of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|body|body|[SubscriptionRequest](#schemasubscriptionrequest)|true|none|
|» id|body|string|false|none|
|» name|body|string|true|Webhook name|
|» description|body|string|false|Webhook description|
|» event_types|body|[object]|true|Event types that trigger this webhook. Must not be empty.|
|» job_ids|body|[integer(int64)]|false|Job IDs that trigger this webhook. Leave empty to trigger for all jobs.|
|» client_url|body|string|true|Endpoint where events are sent|
|» active|body|boolean|true|Whether or not this Webhook is currently active|
|» http_status_code|body|string|false|The latest HTTP status code received from the client URL. 0 indicates that the webhook has not been dispatched.|
|» dispatched_at|body|string|false|Timestamp of when the webhook was last dispatched.|
|» deactivate_reason|body|string|false|Reason for deactivation|
|» account_id|body|integer(int64)|false|none|
|» account_identifier|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

> 404 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="create-webhooks-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateSubscriptionResponseEnvelope](#schemacreatesubscriptionresponseenvelope)|
|404|Not Found||[NotFound](#schemanotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

<h1 id="dbt-cloud-api-v3-adapter-schema">Adapter Schema</h1>

## Retrieve Adapter Schema

<a id="opIdRetrieve Adapter Schema"></a>

> Code samples

```bash
curl 'https://cloud.getdbt.com/api/v3/adapter-schema/?adapter_version=apache_spark_v0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/adapter-schema/`

"
        Fetch the schema for a given adapter. The schema will include details on available fields for connections and credentials.

        Notes:
        - salesforce_v0 is currently in beta and not available to all users.
        

<h3 id="retrieve-adapter-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adapter_version|query|string|true|The adapter to fetch the schema for|
|include_related|query|string|false|Comma-separated list of related objects to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|adapter_version|apache_spark_v0|
|adapter_version|athena_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|clickhouse_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|fabric_v0|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|snowflake_v0|
|adapter_version|synapse_v0|
|adapter_version|teradata_v0|
|adapter_version|trino_v0|

> Example responses

> 200 Response

```json
{
  "data": {
    "adapter": {
      "metadata": {
        "title": "string",
        "docs_link": "string",
        "image_link": "string",
        "private_link": {
          "endpoint_type": {},
          "hostname_field": "host",
          "strip_suffix": "string"
        }
      },
      "connection": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "credential": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "platform_metadata_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "analytics_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "semantic_layer_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "cost_insights_config": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      }
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

<h3 id="retrieve-adapter-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AdapterSchemaResponseEnveloped](#schemaadapterschemaresponseenveloped)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuthentication
</aside>

# Schemas

<h2 id="tocS_AccountConnectionCreateBodyRequest">AccountConnectionCreateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectioncreatebodyrequest"></a>
<a id="schema_AccountConnectionCreateBodyRequest"></a>
<a id="tocSaccountconnectioncreatebodyrequest"></a>
<a id="tocsaccountconnectioncreatebodyrequest"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "adapter_version": {},
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_configuration_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": false,
    "role": "string",
    "allow_sso": false,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the connection is associated with|
|name|string|true|none|The name of the connection|
|adapter_version|object|true|none|Identifies the warehouse and version of its adapter. Please note that Clickhouse is in private beta; to request access, contact your account representative.|
|private_link_endpoint_id|string|false|none|none|
|is_ssh_tunnel_enabled|boolean|false|none|none|
|oauth_configuration_id|integer(int64)|false|none|none|
|config|[SnowflakeConnection](#schemasnowflakeconnection) \| [PostgresConnection](#schemapostgresconnection) \| [RedshiftConnection](#schemaredshiftconnection) \| [BigqueryConnection](#schemabigqueryconnection) \| [BigqueryConnectionV1](#schemabigqueryconnectionv1) \| [ClickHouseConnection](#schemaclickhouseconnection) \| [DatabricksConnection](#schemadatabricksconnection) \| [DatabricksSparkConnection](#schemadatabrickssparkconnection) \| [TrinoConnection](#schematrinoconnection) \| [FabricConnection](#schemafabricconnection) \| [SynapseConnection](#schemasynapseconnection) \| [ApacheSparkConnection](#schemaapachesparkconnection) \| [AthenaConnection](#schemaathenaconnection) \| [SalesforceConnection](#schemasalesforceconnection) \| [TeradataConnection](#schemateradataconnection)|true|none|The adapter-specific configuration for the connection|

<h2 id="tocS_AccountConnectionDetail">AccountConnectionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectiondetail"></a>
<a id="schema_AccountConnectionDetail"></a>
<a id="tocSaccountconnectiondetail"></a>
<a id="tocsaccountconnectiondetail"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "name": "string",
  "adapter_version": {},
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_redirect_uri": "string",
  "oauth_configuration_id": 0,
  "is_configured_for_native_oauth": true,
  "platform_metadata_credentials_id": 0,
  "analytics_credentials_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": false,
    "role": "string",
    "allow_sso": false,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the connection is associated with|
|name|string|true|none|The name of the connection|
|adapter_version|object|true|none|Identifies the warehouse and version of its adapter|
|private_link_endpoint_id|string|false|none|none|
|is_ssh_tunnel_enabled|boolean|false|none|none|
|oauth_redirect_uri|string|true|none|If OAuth is enabled for this connection, this field is used internally by dbt Cloud|
|oauth_configuration_id|integer(int64)|false|none|none|
|is_configured_for_native_oauth|boolean|false|none|none|
|platform_metadata_credentials_id|integer(int64)|false|none|none|
|analytics_credentials_id|integer(int64)|false|none|none|
|config|[SnowflakeConnection](#schemasnowflakeconnection) \| [PostgresConnection](#schemapostgresconnection) \| [RedshiftConnection](#schemaredshiftconnection) \| [BigqueryConnection](#schemabigqueryconnection) \| [BigqueryConnectionV1](#schemabigqueryconnectionv1) \| [ClickHouseConnection](#schemaclickhouseconnection) \| [DatabricksConnection](#schemadatabricksconnection) \| [DatabricksSparkConnection](#schemadatabrickssparkconnection) \| [TrinoConnection](#schematrinoconnection) \| [FabricConnection](#schemafabricconnection) \| [SynapseConnection](#schemasynapseconnection) \| [ApacheSparkConnection](#schemaapachesparkconnection) \| [AthenaConnection](#schemaathenaconnection) \| [SalesforceConnection](#schemasalesforceconnection) \| [TeradataConnection](#schemateradataconnection)|true|none|The adapter-specific configuration for the connection|

<h2 id="tocS_AccountConnectionDetailResponse">AccountConnectionDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectiondetailresponse"></a>
<a id="schema_AccountConnectionDetailResponse"></a>
<a id="tocSaccountconnectiondetailresponse"></a>
<a id="tocsaccountconnectiondetailresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "is_configured_for_native_oauth": true,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false,
      "oauth_client_id": "password",
      "oauth_client_secret": "password"
    }
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[AccountConnectionDetail](#schemaaccountconnectiondetail)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_AccountConnectionList">AccountConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectionlist"></a>
<a id="schema_AccountConnectionList"></a>
<a id="tocSaccountconnectionlist"></a>
<a id="tocsaccountconnectionlist"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "name": "string",
  "adapter_version": {},
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_configuration_id": 0,
  "environment__count": 0,
  "platform_metadata_credentials_id": 0,
  "analytics_credentials_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": false,
    "role": "string",
    "allow_sso": false,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the connection is associated with|
|name|string|true|none|The name of the connection|
|adapter_version|object|true|none|Identifies the warehouse and version of its adapter|
|private_link_endpoint_id|string|false|none|none|
|is_ssh_tunnel_enabled|boolean|false|none|none|
|oauth_configuration_id|integer(int64)|false|none|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|
|environment__count|integer|true|none|The number of environments using this connection|
|platform_metadata_credentials_id|integer(int64)|false|none|none|
|analytics_credentials_id|integer(int64)|false|none|none|
|config|[SnowflakeConnection](#schemasnowflakeconnection) \| [PostgresConnection](#schemapostgresconnection) \| [RedshiftConnection](#schemaredshiftconnection) \| [BigqueryConnection](#schemabigqueryconnection) \| [BigqueryConnectionV1](#schemabigqueryconnectionv1) \| [ClickHouseConnection](#schemaclickhouseconnection) \| [DatabricksConnection](#schemadatabricksconnection) \| [DatabricksSparkConnection](#schemadatabrickssparkconnection) \| [TrinoConnection](#schematrinoconnection) \| [FabricConnection](#schemafabricconnection) \| [SynapseConnection](#schemasynapseconnection) \| [ApacheSparkConnection](#schemaapachesparkconnection) \| [AthenaConnection](#schemaathenaconnection) \| [SalesforceConnection](#schemasalesforceconnection) \| [TeradataConnection](#schemateradataconnection)|false|none|This field will always be null in list responses. To retrieve connection configuration details, use the Retrieve Account Connection endpoint instead.|

<h2 id="tocS_AccountConnectionListResponse">AccountConnectionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectionlistresponse"></a>
<a id="schema_AccountConnectionListResponse"></a>
<a id="tocSaccountconnectionlistresponse"></a>
<a id="tocsaccountconnectionlistresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "name": "string",
    "adapter_version": {},
    "private_link_endpoint_id": "string",
    "is_ssh_tunnel_enabled": false,
    "oauth_configuration_id": 0,
    "environment__count": 0,
    "platform_metadata_credentials_id": 0,
    "analytics_credentials_id": 0,
    "config": {
      "account": "string",
      "database": "string",
      "warehouse": "string",
      "client_session_keep_alive": false,
      "role": "string",
      "allow_sso": false,
      "oauth_client_id": "password",
      "oauth_client_secret": "password"
    }
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[AccountConnectionList](#schemaaccountconnectionlist)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_AccountConnectionUpdateBodyRequest">AccountConnectionUpdateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconnectionupdatebodyrequest"></a>
<a id="schema_AccountConnectionUpdateBodyRequest"></a>
<a id="tocSaccountconnectionupdatebodyrequest"></a>
<a id="tocsaccountconnectionupdatebodyrequest"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "private_link_endpoint_id": "string",
  "is_ssh_tunnel_enabled": false,
  "oauth_configuration_id": 0,
  "config": {
    "account": "string",
    "database": "string",
    "warehouse": "string",
    "client_session_keep_alive": true,
    "role": "string",
    "allow_sso": true,
    "oauth_client_id": "password",
    "oauth_client_secret": "password"
  }
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|false|none|The account the connection is associated with|
|name|string|false|none|The name of the connection|
|private_link_endpoint_id|string|false|none|none|
|is_ssh_tunnel_enabled|boolean|false|none|none|
|oauth_configuration_id|integer(int64)|false|none|none|
|config|[OptionalSnowflakeConnection](#schemaoptionalsnowflakeconnection) \| [OptionalPostgresConnection](#schemaoptionalpostgresconnection) \| [OptionalRedshiftConnection](#schemaoptionalredshiftconnection) \| [OptionalBigqueryConnection](#schemaoptionalbigqueryconnection) \| [OptionalBigqueryConnectionV1](#schemaoptionalbigqueryconnectionv1) \| [OptionalClickHouseConnection](#schemaoptionalclickhouseconnection) \| [OptionalDatabricksConnection](#schemaoptionaldatabricksconnection) \| [OptionalDatabricksSparkConnection](#schemaoptionaldatabrickssparkconnection) \| [OptionalTrinoConnection](#schemaoptionaltrinoconnection) \| [OptionalFabricConnection](#schemaoptionalfabricconnection) \| [OptionalSynapseConnection](#schemaoptionalsynapseconnection) \| [OptionalApacheSparkConnection](#schemaoptionalapachesparkconnection) \| [OptionalAthenaConnection](#schemaoptionalathenaconnection) \| [OptionalSalesforceConnection](#schemaoptionalsalesforceconnection) \| [OptionalTeradataConnection](#schemaoptionalteradataconnection)|false|none|The adapter-specific configuration for the connection|

<h2 id="tocS_AccountListEnveloped">AccountListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlistenveloped"></a>
<a id="schema_AccountListEnveloped"></a>
<a id="tocSaccountlistenveloped"></a>
<a id="tocsaccountlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "plan": {},
      "run_slots": 1,
      "developer_seats": 0,
      "it_seats": 0,
      "explorer_seats": 0,
      "analyst_seats": 0,
      "read_only_seats": 0,
      "locked": false,
      "lock_reason": "string",
      "lock_cause": {},
      "unlocked_at": "1970-01-01T00:00:00Z",
      "pending_cancel": false,
      "billing_email_address": "string",
      "pod_memory_request_mebibytes": 600,
      "develop_pod_memory_request_mebibytes": 0,
      "run_duration_limit_seconds": 86400,
      "queue_limit": 50,
      "enterprise_login_slug": "string",
      "business_critical": false,
      "default_license_type": "developer",
      "starter_repo_url": "string",
      "git_auth_level": "string",
      "identifier": "string",
      "trial_end_date": "1970-01-01T00:00:00Z",
      "static_subdomain": "string",
      "vanity_subdomain": "string",
      "run_locked_until": "1970-01-01T00:00:00Z",
      "state": 1,
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "copilot_locked_until": "1970-01-01T00:00:00Z",
      "agent_credit_locked": false,
      "account_migration_events": [
        null
      ],
      "groups": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AccountResponse](#schemaaccountresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "plan": {},
  "run_slots": 1,
  "developer_seats": 0,
  "it_seats": 0,
  "explorer_seats": 0,
  "analyst_seats": 0,
  "read_only_seats": 0,
  "locked": false,
  "lock_reason": "string",
  "lock_cause": {},
  "unlocked_at": "1970-01-01T00:00:00Z",
  "pending_cancel": false,
  "billing_email_address": "string",
  "pod_memory_request_mebibytes": 600,
  "develop_pod_memory_request_mebibytes": 0,
  "run_duration_limit_seconds": 86400,
  "queue_limit": 50,
  "enterprise_login_slug": "string",
  "business_critical": false,
  "default_license_type": "developer",
  "starter_repo_url": "string",
  "git_auth_level": "string",
  "identifier": "string",
  "trial_end_date": "1970-01-01T00:00:00Z",
  "static_subdomain": "string",
  "vanity_subdomain": "string",
  "run_locked_until": "1970-01-01T00:00:00Z",
  "state": 1,
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "copilot_locked_until": "1970-01-01T00:00:00Z",
  "agent_credit_locked": false,
  "account_migration_events": [
    null
  ],
  "groups": [],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|name|string|false|none|The name of the account|
|plan|object|true|read-only|The active plan type for the account<br><br>* `cancelled` - CANCELLED<br>* `cancelled_2022` - CANCELLED_2022<br>* `cancelled_2025` - CANCELLED_2025<br>* `developer` - DEVELOPER<br>* `developer_2022` - DEVELOPER_2022<br>* `enterprise` - ENTERPRISE<br>* `enterprise_2025` - ENTERPRISE_2025<br>* `enterprise_plus_2025` - ENTERPRISE_PLUS_2025<br>* `free` - FREE<br>* `starter_2025` - STARTER_2025<br>* `team` - TEAM<br>* `team_2022` - TEAM_2022<br>* `team_annual` - TEAM_ANNUAL<br>* `trial` - TRIAL<br>* `trial_2022` - TRIAL_2022<br>* `trial_2025` - TRIAL_2025<br>* `usage_2026` - USAGE_2026<br>* `usage_managed_2026` - USAGE_MANAGED_2026|
|run_slots|integer|true|read-only|The total number of run slots the account may use|
|developer_seats|integer|true|read-only|The total number of developer seats the account may use|
|it_seats|integer|true|read-only|The total number of IT seats the account may use|
|explorer_seats|integer|true|read-only|The total number of explorer seats the account may use|
|analyst_seats|integer|true|read-only|The total number of pre-purchased analyst seats for the account|
|read_only_seats|integer|true|read-only|The total number of Read Only seats the account may use|
|locked|boolean|true|read-only|Whether the account is currently locked|
|lock_reason|string|true|read-only|Why the account is locked|
|lock_cause|object|true|read-only|Why the account is locked<br><br>* `trial_expired` - TRIAL_EXPIRED<br>* `cancelled` - CANCELLED<br>* `unpaid` - UNPAID<br>* `provisioned_team_annual` - PROVISIONED_TEAM_ANNUAL<br>* `other` - OTHER<br>* `migrated` - MIGRATED<br>* `workshop` - WORKSHOP|
|unlocked_at|string(date-time)|true|read-only|none|
|pending_cancel|boolean|true|read-only|Whether the account is pending cancellation|
|billing_email_address|string|true|read-only|The email address to send billing notifications to|
|pod_memory_request_mebibytes|integer|true|read-only|The amount of memory (in MiB) to request for run pods|
|develop_pod_memory_request_mebibytes|integer|true|read-only|The amount of memory (in MiB) to request for develop pods|
|run_duration_limit_seconds|integer|true|read-only|The maximum duration that a run may is permitted to execute for before it is terminated|
|queue_limit|integer|true|read-only|The maximum number of runs that may be queued at once|
|enterprise_login_slug|string|true|read-only|The enterprise login URL, if available|
|business_critical|boolean|true|read-only|Whether this account is on a Business Critical plan|
|default_license_type|object|false|none|The license type assigned to new users provisioned onto this account when no other license type is determined (e.g. no SSO group mapping, SCIM payload, or existing invite). Writes are ignored unless the account-wide default license flag is enabled for this account.<br><br>* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|starter_repo_url|string|true|read-only|If defined, the URL used to initialize new dbt projects|
|git_auth_level|string|true|read-only|none|
|identifier|string|true|read-only|A globally unique (cross-cell) identifier|
|trial_end_date|string(date-time)|true|read-only|none|
|static_subdomain|string|true|read-only|none|
|vanity_subdomain|string|true|read-only|none|
|run_locked_until|string(date-time)|true|read-only|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|docs_job_id|integer(int64)|false|none|(Deprecated)|
|freshness_job_id|integer(int64)|false|none|(Deprecated)|
|copilot_locked_until|string(date-time)|true|read-only|When copilot will be enabled again for the account|
|agent_credit_locked|boolean|true|read-only|True when the account's agent-credit balance is depleted and dbt-owned-key agent calls should be refused. Cleared on successful top-up.|
|account_migration_events|[object]|true|read-only|(Deprecated)|
|groups|[[Group](#schemagroup)]|true|read-only|The user groups in the account|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

<h2 id="tocS_AccountScopedPATRequestRequest">AccountScopedPATRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscopedpatrequestrequest"></a>
<a id="schema_AccountScopedPATRequestRequest"></a>
<a id="tocSaccountscopedpatrequestrequest"></a>
<a id="tocsaccountscopedpatrequestrequest"></a>

```json
{
  "name": "string",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|expires_at|string(date-time)|false|none|none|

<h2 id="tocS_AccountScopedPATResponse">AccountScopedPATResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscopedpatresponse"></a>
<a id="schema_AccountScopedPATResponse"></a>
<a id="tocSaccountscopedpatresponse"></a>
<a id="tocsaccountscopedpatresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "uid": "string",
  "name": "string",
  "token": "string",
  "state": 1,
  "token_string": "string",
  "last_used": "1970-01-01T00:00:00Z",
  "last_identify": "1970-01-01T00:00:00Z",
  "user_id": 0,
  "user": {
    "first_name": "string",
    "last_name": "string"
  },
  "type": 1,
  "expires_at": "1970-01-01T00:00:00Z",
  "metadata_only": false,
  "webhooks_only": false,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "service_token_permissions": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|uid|string|false|none|none|
|name|string|false|none|none|
|token|string|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|token_string|string|true|read-only|none|
|last_used|string(date-time)|true|read-only|none|
|last_identify|string(date-time)|true|read-only|none|
|user_id|integer(int64)|false|none|none|
|user|[User](#schemauser)|false|none|none|
|type|[Type34eEnum](#schematype34eenum)|false|none|* `1` - CLOUD_CLI<br>* `2` - GENERAL<br>* `3` - NATIVE_APP_USER_LINK<br>* `4` - SCIM|
|expires_at|string(date-time)|false|none|none|
|metadata_only|boolean|false|none|none|
|webhooks_only|boolean|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|service_token_permissions|[[ServiceTokenPermission](#schemaservicetokenpermission)]|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|
|type|3|
|type|4|

<h2 id="tocS_AccountScopedPATResponseEnveloped">AccountScopedPATResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscopedpatresponseenveloped"></a>
<a id="schema_AccountScopedPATResponseEnveloped"></a>
<a id="tocSaccountscopedpatresponseenveloped"></a>
<a id="tocsaccountscopedpatresponseenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "token": "string",
    "state": 1,
    "token_string": "string",
    "last_used": "1970-01-01T00:00:00Z",
    "last_identify": "1970-01-01T00:00:00Z",
    "user_id": 0,
    "user": {
      "first_name": "string",
      "last_name": "string"
    },
    "type": 1,
    "expires_at": "1970-01-01T00:00:00Z",
    "metadata_only": false,
    "webhooks_only": false,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "service_token_permissions": []
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountScopedPATResponse](#schemaaccountscopedpatresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_AccountScopedPATRotateRequestRequest">AccountScopedPATRotateRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscopedpatrotaterequestrequest"></a>
<a id="schema_AccountScopedPATRotateRequestRequest"></a>
<a id="tocSaccountscopedpatrotaterequestrequest"></a>
<a id="tocsaccountscopedpatrotaterequestrequest"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|none|

<h2 id="tocS_AccountUser">AccountUser</h2>
<!-- backwards compatibility -->
<a id="schemaaccountuser"></a>
<a id="schema_AccountUser"></a>
<a id="tocSaccountuser"></a>
<a id="tocsaccountuser"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "fullname": "string",
  "email_verified": true,
  "license": {
    "id": 0,
    "license_type": "developer"
  },
  "is_active": false,
  "is_staff": false,
  "scim_managed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|email|string|true|none|The email address of the user|
|first_name|string|true|none|The first name of the user|
|last_name|string|true|none|The last name of the user|
|fullname|string|true|none|The full name of the user|
|email_verified|boolean|true|none|Whether the user has verified their email|
|license|object|true|none|The license assigned to the user for the account|
|is_active|boolean|false|none|A boolean indicating if this user is active|
|is_staff|boolean|false|none|none|
|scim_managed|boolean|false|none|Whether the user is managed via SCIM|

<h2 id="tocS_AccountUserLicense">AccountUserLicense</h2>
<!-- backwards compatibility -->
<a id="schemaaccountuserlicense"></a>
<a id="schema_AccountUserLicense"></a>
<a id="tocSaccountuserlicense"></a>
<a id="tocsaccountuserlicense"></a>

```json
{
  "id": 0,
  "license_type": "developer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|license_type|[LicenseType](#schemalicensetype)|true|none|An enumeration.|

#### Enumerated Values

|Property|Value|
|---|---|
|license_type|developer|
|license_type|read_only|
|license_type|analyst|
|license_type|it|

<h2 id="tocS_Adapter">Adapter</h2>
<!-- backwards compatibility -->
<a id="schemaadapter"></a>
<a id="schema_Adapter"></a>
<a id="tocSadapter"></a>
<a id="tocsadapter"></a>

```json
{
  "metadata": {
    "title": "string",
    "docs_link": "string",
    "image_link": "string",
    "private_link": {
      "endpoint_type": {},
      "hostname_field": "host",
      "strip_suffix": "string"
    }
  },
  "connection": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  },
  "credential": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  },
  "platform_metadata_credentials": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  },
  "analytics_credentials": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  },
  "semantic_layer_credentials": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  },
  "cost_insights_config": {
    "field_order": [
      "string"
    ],
    "field_groups": [
      {
        "name": "string",
        "members": [
          "string"
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|true|none|High level information about the adapter|
|connection|object|false|none|The set of connection-level fields for this adapter|
|credential|object|false|none|The set of credential-level fields for this adapter|
|platform_metadata_credentials|object|false|none|The set of platform metadata credential-level fields for this adapter|
|analytics_credentials|object|false|none|The set of analytics credentials fields for this adapter|
|semantic_layer_credentials|object|false|none|The set of semantic layer credential-level fields for this adapter|
|cost_insights_config|object|false|none|The set of cost insights configuration fields for this adapter|

<h2 id="tocS_AdapterMetadata">AdapterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaadaptermetadata"></a>
<a id="schema_AdapterMetadata"></a>
<a id="tocSadaptermetadata"></a>
<a id="tocsadaptermetadata"></a>

```json
{
  "title": "string",
  "docs_link": "string",
  "image_link": "string",
  "private_link": {
    "endpoint_type": {},
    "hostname_field": "host",
    "strip_suffix": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Brief human-facing name for the adapter|
|docs_link|string|true|none|Link to the dbt core docs for this adapter|
|image_link|string|true|none|none|
|private_link|object|false|none|Private link properties of the adapter; None means PrivateLink is unsupported|

<h2 id="tocS_AdapterPrivateLinkProperties">AdapterPrivateLinkProperties</h2>
<!-- backwards compatibility -->
<a id="schemaadapterprivatelinkproperties"></a>
<a id="schema_AdapterPrivateLinkProperties"></a>
<a id="tocSadapterprivatelinkproperties"></a>
<a id="tocsadapterprivatelinkproperties"></a>

```json
{
  "endpoint_type": {},
  "hostname_field": "host",
  "strip_suffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint_type|object|true|none|The type of private link endpoint eligible. Typically ["adapter"]<br><br>* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|hostname_field|string|false|none|The field in the connection schema that contains the hostname|
|strip_suffix|string|true|none|Suffix to be stripped from the private link endpoint to obtain the hostname for the connection|

<h2 id="tocS_AdapterSchemaResponse">AdapterSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadapterschemaresponse"></a>
<a id="schema_AdapterSchemaResponse"></a>
<a id="tocSadapterschemaresponse"></a>
<a id="tocsadapterschemaresponse"></a>

```json
{
  "adapter": {
    "metadata": {
      "title": "string",
      "docs_link": "string",
      "image_link": "string",
      "private_link": {
        "endpoint_type": {},
        "hostname_field": "host",
        "strip_suffix": "string"
      }
    },
    "connection": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    },
    "credential": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    },
    "platform_metadata_credentials": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    },
    "analytics_credentials": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    },
    "semantic_layer_credentials": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    },
    "cost_insights_config": {
      "field_order": [
        "string"
      ],
      "field_groups": [
        {
          "name": "string",
          "members": [
            "string"
          ]
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapter|[Adapter](#schemaadapter)|false|none|none|

<h2 id="tocS_AdapterSchemaResponseEnveloped">AdapterSchemaResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaadapterschemaresponseenveloped"></a>
<a id="schema_AdapterSchemaResponseEnveloped"></a>
<a id="tocSadapterschemaresponseenveloped"></a>
<a id="tocsadapterschemaresponseenveloped"></a>

```json
{
  "data": {
    "adapter": {
      "metadata": {
        "title": "string",
        "docs_link": "string",
        "image_link": "string",
        "private_link": {
          "endpoint_type": {},
          "hostname_field": "host",
          "strip_suffix": "string"
        }
      },
      "connection": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "credential": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "platform_metadata_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "analytics_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "semantic_layer_credentials": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      },
      "cost_insights_config": {
        "field_order": [
          "string"
        ],
        "field_groups": [
          {
            "name": "string",
            "members": [
              "string"
            ]
          }
        ]
      }
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AdapterSchemaResponse](#schemaadapterschemaresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_AdapterVersionEnum">AdapterVersionEnum</h2>
<!-- backwards compatibility -->
<a id="schemaadapterversionenum"></a>
<a id="schema_AdapterVersionEnum"></a>
<a id="tocSadapterversionenum"></a>
<a id="tocsadapterversionenum"></a>

```json
"apache_spark_v0"
```

* `apache_spark_v0` - apache_spark_v0
* `databricks_spark_v0` - databricks_spark_v0
* `databricks_v0` - databricks_v0
* `trino_v0` - trino_v0
* `snowflake_v0` - snowflake_v0
* `bigquery_v0` - bigquery_v0
* `bigquery_v1` - bigquery_v1
* `postgres_v0` - postgres_v0
* `redshift_v0` - redshift_v0
* `salesforce_v0` - salesforce_v0
* `synapse_v0` - synapse_v0
* `fabric_v0` - fabric_v0
* `athena_v0` - athena_v0
* `teradata_v0` - teradata_v0
* `clickhouse_v0` - clickhouse_v0

<h2 id="tocS_ApacheSparkConnection">ApacheSparkConnection</h2>
<!-- backwards compatibility -->
<a id="schemaapachesparkconnection"></a>
<a id="schema_ApacheSparkConnection"></a>
<a id="tocSapachesparkconnection"></a>
<a id="tocsapachesparkconnection"></a>

```json
{
  "host": "string",
  "cluster": "string",
  "method": "http",
  "connect_timeout": 10,
  "connect_retries": 0,
  "organization": "",
  "user": "",
  "auth": "",
  "kerberos_service_name": "",
  "port": 443,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|cluster|string|true|none|none|
|method|object|false|none|none|
|connect_timeout|integer|false|none|none|
|connect_retries|integer|false|none|none|
|organization|string|false|none|none|
|user|string|false|none|none|
|auth|string|false|none|none|
|kerberos_service_name|string|false|none|none|
|port|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_AssignGroupsRequestRequest">AssignGroupsRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassigngroupsrequestrequest"></a>
<a id="schema_AssignGroupsRequestRequest"></a>
<a id="tocSassigngroupsrequestrequest"></a>
<a id="tocsassigngroupsrequestrequest"></a>

```json
{
  "user_id": 0,
  "desired_group_ids": [
    0
  ],
  "add_group_ids": [
    0
  ],
  "remove_group_ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|integer(int64)|true|none|none|
|desired_group_ids|[integer(int64)]|false|none|none|
|add_group_ids|[integer(int64)]|false|none|none|
|remove_group_ids|[integer(int64)]|false|none|none|

<h2 id="tocS_AthenaConnection">AthenaConnection</h2>
<!-- backwards compatibility -->
<a id="schemaathenaconnection"></a>
<a id="schema_AthenaConnection"></a>
<a id="tocSathenaconnection"></a>
<a id="tocsathenaconnection"></a>

```json
{
  "region_name": "string",
  "database": "string",
  "work_group": "string",
  "spark_work_group": "string",
  "s3_staging_dir": "string",
  "s3_data_dir": "string",
  "s3_data_naming": "string",
  "s3_tmp_table_dir": "string",
  "poll_interval": 0,
  "num_retries": 0,
  "num_boto3_retries": 0,
  "num_iceberg_retries": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region_name|string|true|none|none|
|database|string|true|none|none|
|work_group|string|false|none|none|
|spark_work_group|string|false|none|none|
|s3_staging_dir|string|true|none|none|
|s3_data_dir|string|false|none|none|
|s3_data_naming|string|false|none|none|
|s3_tmp_table_dir|string|false|none|none|
|poll_interval|integer|false|none|none|
|num_retries|integer|false|none|none|
|num_boto3_retries|integer|false|none|none|
|num_iceberg_retries|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_AuditLogBulkExportDownloadResponse">AuditLogBulkExportDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogbulkexportdownloadresponse"></a>
<a id="schema_AuditLogBulkExportDownloadResponse"></a>
<a id="tocSauditlogbulkexportdownloadresponse"></a>
<a id="tocsauditlogbulkexportdownloadresponse"></a>

```json
{
  "download_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_url|string|false|none|none|

<h2 id="tocS_AuditLogBulkExportDownloadResponseEnveloped">AuditLogBulkExportDownloadResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogbulkexportdownloadresponseenveloped"></a>
<a id="schema_AuditLogBulkExportDownloadResponseEnveloped"></a>
<a id="tocSauditlogbulkexportdownloadresponseenveloped"></a>
<a id="tocsauditlogbulkexportdownloadresponseenveloped"></a>

```json
{
  "data": {
    "download_url": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AuditLogBulkExportDownloadResponse](#schemaauditlogbulkexportdownloadresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_AuditLogBulkExportStatusResponse">AuditLogBulkExportStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogbulkexportstatusresponse"></a>
<a id="schema_AuditLogBulkExportStatusResponse"></a>
<a id="tocSauditlogbulkexportstatusresponse"></a>
<a id="tocsauditlogbulkexportstatusresponse"></a>

```json
{
  "is_running": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_running|boolean|false|none|none|

<h2 id="tocS_AuditLogBulkExportStatusResponseEnveloped">AuditLogBulkExportStatusResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogbulkexportstatusresponseenveloped"></a>
<a id="schema_AuditLogBulkExportStatusResponseEnveloped"></a>
<a id="tocSauditlogbulkexportstatusresponseenveloped"></a>
<a id="tocsauditlogbulkexportstatusresponseenveloped"></a>

```json
{
  "data": {
    "is_running": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AuditLogBulkExportStatusResponse](#schemaauditlogbulkexportstatusresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_AuditLogStartBulkExportResponse">AuditLogStartBulkExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogstartbulkexportresponse"></a>
<a id="schema_AuditLogStartBulkExportResponse"></a>
<a id="tocSauditlogstartbulkexportresponse"></a>
<a id="tocsauditlogstartbulkexportresponse"></a>

```json
{
  "job_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|false|none|none|

<h2 id="tocS_AuditLogStartBulkExportResponseEnveloped">AuditLogStartBulkExportResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogstartbulkexportresponseenveloped"></a>
<a id="schema_AuditLogStartBulkExportResponseEnveloped"></a>
<a id="tocSauditlogstartbulkexportresponseenveloped"></a>
<a id="tocsauditlogstartbulkexportresponseenveloped"></a>

```json
{
  "data": {
    "job_id": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AuditLogStartBulkExportResponse](#schemaauditlogstartbulkexportresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_BaseConnectionV3">BaseConnectionV3</h2>
<!-- backwards compatibility -->
<a id="schemabaseconnectionv3"></a>
<a id="schema_BaseConnectionV3"></a>
<a id="tocSbaseconnectionv3"></a>
<a id="tocsbaseconnectionv3"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "postgres",
  "adapter_version": "apache_spark_v0",
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "oauth_configuration_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the connection is associated with|
|project_id|integer(int64)|true|none|The project the connection is associated with|
|name|string|true|none|The name of the connection|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|adapter_version|[AdapterVersionEnum](#schemaadapterversionenum)|false|none|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|oauth_configuration_id|integer(int64)|false|none|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

<h2 id="tocS_BaseConnectionV3Enveloped">BaseConnectionV3Enveloped</h2>
<!-- backwards compatibility -->
<a id="schemabaseconnectionv3enveloped"></a>
<a id="schema_BaseConnectionV3Enveloped"></a>
<a id="tocSbaseconnectionv3enveloped"></a>
<a id="tocsbaseconnectionv3enveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_redirect_uri": "string",
    "oauth_configuration_id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BaseConnectionV3Response](#schemabaseconnectionv3response)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_BaseConnectionV3ListEnveloped">BaseConnectionV3ListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemabaseconnectionv3listenveloped"></a>
<a id="schema_BaseConnectionV3ListEnveloped"></a>
<a id="tocSbaseconnectionv3listenveloped"></a>
<a id="tocsbaseconnectionv3listenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_redirect_uri": "string",
      "oauth_configuration_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BaseConnectionV3Response](#schemabaseconnectionv3response)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_BaseConnectionV3Request">BaseConnectionV3Request</h2>
<!-- backwards compatibility -->
<a id="schemabaseconnectionv3request"></a>
<a id="schema_BaseConnectionV3Request"></a>
<a id="tocSbaseconnectionv3request"></a>
<a id="tocsbaseconnectionv3request"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "postgres",
  "adapter_version": "apache_spark_v0",
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "oauth_configuration_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the connection is associated with|
|project_id|integer(int64)|true|none|The project the connection is associated with|
|name|string|true|none|The name of the connection|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|adapter_version|[AdapterVersionEnum](#schemaadapterversionenum)|false|none|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|oauth_configuration_id|integer(int64)|false|none|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

<h2 id="tocS_BaseConnectionV3Response">BaseConnectionV3Response</h2>
<!-- backwards compatibility -->
<a id="schemabaseconnectionv3response"></a>
<a id="schema_BaseConnectionV3Response"></a>
<a id="tocSbaseconnectionv3response"></a>
<a id="tocsbaseconnectionv3response"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "postgres",
  "adapter_version": "apache_spark_v0",
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "oauth_redirect_uri": "string",
  "oauth_configuration_id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|The account the connection is associated with|
|project_id|integer(int64)|false|none|The project the connection is associated with|
|name|string|false|none|The name of the connection|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|false|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|adapter_version|[AdapterVersionEnum](#schemaadapterversionenum)|false|none|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|oauth_redirect_uri|string|true|read-only|If OAuth is enabled for this connection, this field is used internally by dbt Cloud|
|oauth_configuration_id|integer(int64)|false|none|The OAuth Configuration associated with this connection. When set,developer credentials leveraging OAuth may be created.|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

<h2 id="tocS_BigqueryConnection">BigqueryConnection</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryconnection"></a>
<a id="schema_BigqueryConnection"></a>
<a id="tocSbigqueryconnection"></a>
<a id="tocsbigqueryconnection"></a>

```json
{
  "project_id": "string",
  "timeout_seconds": 1,
  "private_key_id": "string",
  "private_key": "password",
  "client_email": "string",
  "client_id": "string",
  "auth_uri": "string",
  "token_uri": "string",
  "auth_provider_x509_cert_url": "string",
  "client_x509_cert_url": "string",
  "priority": "interactive",
  "scopes": [
    "string"
  ],
  "location": "string",
  "maximum_bytes_billed": 0,
  "execution_project": "string",
  "impersonate_service_account": "string",
  "retries": 1,
  "job_retry_deadline_seconds": 0,
  "job_creation_timeout_seconds": 0,
  "application_id": "password",
  "application_secret": "password",
  "gcs_bucket": "string",
  "dataproc_region": "string",
  "dataproc_cluster_name": "string",
  "api_endpoint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|true|none|none|
|timeout_seconds|integer|true|none|none|
|private_key_id|string|true|none|none|
|private_key|string(password)|true|write-only|none|
|client_email|string|true|none|none|
|client_id|string|true|none|none|
|auth_uri|string|true|none|none|
|token_uri|string|true|none|none|
|auth_provider_x509_cert_url|string|true|none|none|
|client_x509_cert_url|string|true|none|none|
|priority|[schemas__adapters__bigquery__v0__connection_schema__Priority](#schemaschemas__adapters__bigquery__v0__connection_schema__priority)|false|none|An enumeration.|
|scopes|[string]|false|none|none|
|location|string|false|none|none|
|maximum_bytes_billed|integer|false|none|none|
|execution_project|string|false|none|none|
|impersonate_service_account|string|false|none|none|
|retries|integer|false|none|none|
|job_retry_deadline_seconds|integer|false|none|none|
|job_creation_timeout_seconds|integer|false|none|none|
|application_id|string(password)|false|write-only|none|
|application_secret|string(password)|false|write-only|none|
|gcs_bucket|string|false|none|none|
|dataproc_region|string|false|none|none|
|dataproc_cluster_name|string|false|none|none|
|api_endpoint|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|interactive|
|priority|batch|

<h2 id="tocS_BigqueryConnectionV1">BigqueryConnectionV1</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryconnectionv1"></a>
<a id="schema_BigqueryConnectionV1"></a>
<a id="tocSbigqueryconnectionv1"></a>
<a id="tocsbigqueryconnectionv1"></a>

```json
{
  "deployment_env_auth_type": "service-account-json",
  "project_id": "string",
  "private_key_id": "string",
  "private_key": "password",
  "client_email": "string",
  "client_id": "string",
  "auth_uri": "string",
  "token_uri": "string",
  "auth_provider_x509_cert_url": "string",
  "client_x509_cert_url": "string",
  "job_execution_timeout_seconds": 1,
  "priority": "interactive",
  "scopes": [
    "string"
  ],
  "location": "string",
  "maximum_bytes_billed": 0,
  "execution_project": "string",
  "impersonate_service_account": "string",
  "retries": 0,
  "job_retry_deadline_seconds": 0,
  "job_creation_timeout_seconds": 0,
  "application_id": "password",
  "application_secret": "password",
  "gcs_bucket": "string",
  "dataproc_region": "string",
  "dataproc_cluster_name": "string",
  "api_endpoint": "string",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment_env_auth_type|object|false|none|none|
|project_id|string|true|none|none|
|private_key_id|string|false|none|none|
|private_key|string(password)|false|write-only|none|
|client_email|string|false|none|none|
|client_id|string|false|none|none|
|auth_uri|string|false|none|none|
|token_uri|string|false|none|none|
|auth_provider_x509_cert_url|string|false|none|none|
|client_x509_cert_url|string|false|none|none|
|job_execution_timeout_seconds|integer|false|none|none|
|priority|[schemas__adapters__bigquery__v1__connection_schema__Priority](#schemaschemas__adapters__bigquery__v1__connection_schema__priority)|false|none|An enumeration.|
|scopes|[string]|false|none|none|
|location|string|false|none|none|
|maximum_bytes_billed|integer|false|none|none|
|execution_project|string|false|none|none|
|impersonate_service_account|string|false|none|none|
|retries|integer|false|none|none|
|job_retry_deadline_seconds|integer|false|none|none|
|job_creation_timeout_seconds|integer|false|none|none|
|application_id|string(password)|false|write-only|none|
|application_secret|string(password)|false|write-only|none|
|gcs_bucket|string|false|none|none|
|dataproc_region|string|false|none|none|
|dataproc_cluster_name|string|false|none|none|
|api_endpoint|string|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use credentials.adapter_version|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|interactive|
|priority|batch|

<h2 id="tocS_BigqueryCredentials">BigqueryCredentials</h2>
<!-- backwards compatibility -->
<a id="schemabigquerycredentials"></a>
<a id="schema_BigqueryCredentials"></a>
<a id="tocSbigquerycredentials"></a>
<a id="tocsbigquerycredentials"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "schema": "string",
  "target_name": "string",
  "_refresh_token": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|schema|string|true|none|none|
|target_name|string|true|none|none|
|_refresh_token|string|false|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_BigqueryCredentialsRequest">BigqueryCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabigquerycredentialsrequest"></a>
<a id="schema_BigqueryCredentialsRequest"></a>
<a id="tocSbigquerycredentialsrequest"></a>
<a id="tocsbigquerycredentialsrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "schema": "string",
  "target_name": "string",
  "_refresh_token": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|schema|string|true|none|none|
|target_name|string|true|none|none|
|_refresh_token|string|false|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_BulkPutErrorResponse">BulkPutErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkputerrorresponse"></a>
<a id="schema_BulkPutErrorResponse"></a>
<a id="tocSbulkputerrorresponse"></a>
<a id="tocsbulkputerrorresponse"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|none|

<h2 id="tocS_BulkPutErrorResponseEnveloped">BulkPutErrorResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemabulkputerrorresponseenveloped"></a>
<a id="schema_BulkPutErrorResponseEnveloped"></a>
<a id="tocSbulkputerrorresponseenveloped"></a>
<a id="tocsbulkputerrorresponseenveloped"></a>

```json
{
  "data": {
    "reason": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BulkPutErrorResponse](#schemabulkputerrorresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_BulkPutSuccessResponse">BulkPutSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkputsuccessresponse"></a>
<a id="schema_BulkPutSuccessResponse"></a>
<a id="tocSbulkputsuccessresponse"></a>
<a id="tocsbulkputsuccessresponse"></a>

```json
{
  "message": "string",
  "new_var_ids": [
    0
  ],
  "deleted_var_ids": [
    0
  ],
  "failures": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|new_var_ids|[integer(int64)]|false|none|none|
|deleted_var_ids|[integer(int64)]|false|none|none|
|failures|object|false|none|Map of environment name to failure reason.|

<h2 id="tocS_BulkPutSuccessResponseEnveloped">BulkPutSuccessResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemabulkputsuccessresponseenveloped"></a>
<a id="schema_BulkPutSuccessResponseEnveloped"></a>
<a id="tocSbulkputsuccessresponseenveloped"></a>
<a id="tocsbulkputsuccessresponseenveloped"></a>

```json
{
  "data": {
    "message": "string",
    "new_var_ids": [
      0
    ],
    "deleted_var_ids": [
      0
    ],
    "failures": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BulkPutSuccessResponse](#schemabulkputsuccessresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_ClickHouseConnection">ClickHouseConnection</h2>
<!-- backwards compatibility -->
<a id="schemaclickhouseconnection"></a>
<a id="schema_ClickHouseConnection"></a>
<a id="tocSclickhouseconnection"></a>
<a id="tocsclickhouseconnection"></a>

```json
{
  "host": "string",
  "port": 8443,
  "database": "",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|port|integer|false|none|none|
|database|string|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use credentials.adapter_version|

<h2 id="tocS_ConnectionMethod">ConnectionMethod</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmethod"></a>
<a id="schema_ConnectionMethod"></a>
<a id="tocSconnectionmethod"></a>
<a id="tocsconnectionmethod"></a>

```json
"http"
```

An enumeration.

<h2 id="tocS_ConnectionTypeEnum">ConnectionTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontypeenum"></a>
<a id="schema_ConnectionTypeEnum"></a>
<a id="tocSconnectiontypeenum"></a>
<a id="tocsconnectiontypeenum"></a>

```json
"postgres"
```

* `postgres` - postgres
* `redshift` - redshift
* `snowflake` - snowflake
* `bigquery` - bigquery
* `adapter` - adapter

<h2 id="tocS_CreateAccountScopedPAT">CreateAccountScopedPAT</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountscopedpat"></a>
<a id="schema_CreateAccountScopedPAT"></a>
<a id="tocScreateaccountscopedpat"></a>
<a id="tocscreateaccountscopedpat"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "user_id": 0,
  "type": 1,
  "uid": "string",
  "name": "string",
  "state": 0,
  "token": "string",
  "token_string": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "last_used": "1970-01-01T00:00:00Z",
  "last_identify": "1970-01-01T00:00:00Z",
  "user": {},
  "service_token_permissions": [
    {}
  ],
  "semantic_layer_credentials": [
    {}
  ],
  "metadata_only": false,
  "webhooks_only": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the service token is associated with|
|user_id|integer(int64)|false|none|none|
|type|[ServiceTokenType](#schemaservicetokentype)|false|none|An enumeration.|
|uid|string|true|none|The unique identifier for the service token|
|name|string|true|none|The name of the service token|
|state|integer|true|none|The liveness state of the service token. A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|token|string|false|none|The hashed token secret|
|token_string|string|true|none|The full token string used to authenticate clients|
|expires_at|string(date-time)|false|none|When the token stops authenticating. Null means it never expires.|
|last_used|string(date-time)|false|none|Deprecated.|
|last_identify|string(date-time)|false|none|Deprecated.|
|user|object|false|none|Deprecated.|
|service_token_permissions|[object]|false|none|Deprecated.|
|semantic_layer_credentials|[object]|false|none|Deprecated.|
|metadata_only|boolean|false|none|Deprecated.|
|webhooks_only|boolean|false|none|Deprecated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|
|type|3|
|type|4|

<h2 id="tocS_CreateManagedRepositoryRequestRequest">CreateManagedRepositoryRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanagedrepositoryrequestrequest"></a>
<a id="schema_CreateManagedRepositoryRequestRequest"></a>
<a id="tocScreatemanagedrepositoryrequestrequest"></a>
<a id="tocscreatemanagedrepositoryrequestrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_CreateOrReplaceGroupSCIMRequestRequest">CreateOrReplaceGroupSCIMRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorreplacegroupscimrequestrequest"></a>
<a id="schema_CreateOrReplaceGroupSCIMRequestRequest"></a>
<a id="tocScreateorreplacegroupscimrequestrequest"></a>
<a id="tocscreateorreplacegroupscimrequestrequest"></a>

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "displayName": "string",
  "members": [
    {
      "value": "string",
      "display": "string"
    }
  ]
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|The SCIM schema of the request|
|externalId|string|false|none|The external ID of the group|
|displayName|string|true|none|The display name of the group|
|members|[[GroupMemberComponent](#schemagroupmembercomponent)]|false|none|The members of the group|

<h2 id="tocS_CreateSCIMConfigurationRequestRequest">CreateSCIMConfigurationRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescimconfigurationrequestrequest"></a>
<a id="schema_CreateSCIMConfigurationRequestRequest"></a>
<a id="tocScreatescimconfigurationrequestrequest"></a>
<a id="tocscreatescimconfigurationrequestrequest"></a>

```json
{
  "enabled": true,
  "manual_updates_allowed": true,
  "scim_controlled_license_type": true
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|manual_updates_allowed|boolean|true|none|none|
|scim_controlled_license_type|boolean|false|none|none|

<h2 id="tocS_CreateSCIMToken">CreateSCIMToken</h2>
<!-- backwards compatibility -->
<a id="schemacreatescimtoken"></a>
<a id="schema_CreateSCIMToken"></a>
<a id="tocScreatescimtoken"></a>
<a id="tocscreatescimtoken"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_used": "1970-01-01T00:00:00Z",
  "token_string": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|last_used|string(date-time)|false|none|none|
|token_string|string|true|none|none|

<h2 id="tocS_CreateSCIMTokenRequestRequest">CreateSCIMTokenRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescimtokenrequestrequest"></a>
<a id="schema_CreateSCIMTokenRequestRequest"></a>
<a id="tocScreatescimtokenrequestrequest"></a>
<a id="tocscreatescimtokenrequestrequest"></a>

```json
{
  "name": "string"
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_CreateServiceToken">CreateServiceToken</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetoken"></a>
<a id="schema_CreateServiceToken"></a>
<a id="tocScreateservicetoken"></a>
<a id="tocscreateservicetoken"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "uid": "string",
  "name": "string",
  "state": 0,
  "permission_grants": [
    {
      "permission_set": "account_admin",
      "project_id": 0,
      "writable_environment_categories": [
        "string"
      ]
    }
  ],
  "last_used": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "semantic_layer_credentials": [
    {}
  ],
  "metadata_only": false,
  "webhooks_only": false,
  "token": "string",
  "token_string": "string",
  "last_identify": "1970-01-01T00:00:00Z",
  "user_id": 0,
  "user": {},
  "type": 1,
  "service_token_permissions": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the service token is associated with|
|uid|string|true|none|The unique identifier for the service token|
|name|string|true|none|The name of the service token|
|state|integer|true|none|The liveness state of the service token. A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|permission_grants|[[ServiceTokenPermissionGrant](#schemaservicetokenpermissiongrant)]|false|none|The permissions to be assigned to the service token|
|last_used|string(date-time)|false|none|The time the service token was last used|
|expires_at|string(date-time)|false|none|When the token stops authenticating. Null means it never expires.|
|semantic_layer_credentials|[object]|false|none|none|
|metadata_only|boolean|false|none|Deprecated. Use the metadata_only permission set instead.|
|webhooks_only|boolean|false|none|none|
|token|string|false|none|The hashed token secret|
|token_string|string|true|none|The full token string used to authenticate clients|
|last_identify|string(date-time)|false|none|none|
|user_id|integer(int64)|false|none|none|
|user|object|false|none|none|
|type|[ServiceTokenType](#schemaservicetokentype)|false|none|An enumeration.|
|service_token_permissions|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|
|type|3|
|type|4|

<h2 id="tocS_CreateServiceTokenRequestRequest">CreateServiceTokenRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetokenrequestrequest"></a>
<a id="schema_CreateServiceTokenRequestRequest"></a>
<a id="tocScreateservicetokenrequestrequest"></a>
<a id="tocscreateservicetokenrequestrequest"></a>

```json
{
  "name": "string",
  "permission_grants": [
    {
      "permission_set": "account_admin",
      "project_id": 0,
      "writable_environment_categories": [
        "string"
      ]
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "metadata_only": false,
  "webhooks_only": false
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the service token|
|permission_grants|[[ServiceTokenPermissionGrant](#schemaservicetokenpermissiongrant)]|false|none|Permissions to assign to the service token|
|expires_at|string(date-time)|false|none|When the token stops authenticating. Omit for no expiry. Must be in the future, no more than 365 days out, with a timezone offset.|
|metadata_only|boolean|false|none|Deprecated. Use the metadata_only permission set instead.|
|webhooks_only|boolean|false|none|none|

<h2 id="tocS_CreateSubscriptionResponseEnvelope">CreateSubscriptionResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptionresponseenvelope"></a>
<a id="schema_CreateSubscriptionResponseEnvelope"></a>
<a id="tocScreatesubscriptionresponseenvelope"></a>
<a id="tocscreatesubscriptionresponseenvelope"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscription](#schemasubscription)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_CreateUserSCIMRequestRequest">CreateUserSCIMRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserscimrequestrequest"></a>
<a id="schema_CreateUserSCIMRequestRequest"></a>
<a id="tocScreateuserscimrequestrequest"></a>
<a id="tocscreateuserscimrequestrequest"></a>

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "userName": "string",
  "active": true,
  "name": {
    "givenName": "John",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "john.smith@example.com",
      "primary": true
    }
  ],
  "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
    "licenseType": "developer"
  }
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|The user schemas supported by the SCIM provider|
|externalId|string|false|none|The external ID of the user (user's scim id)|
|userName|string|true|none|The username for the user which is their email address|
|active|boolean|true|none|Whether the user is active|
|name|object|true|none|The user's name components|
|emails|[[UserEmailComponent](#schemauseremailcomponent)]|true|none|The user's email addresses|
|urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User|object|false|none|Custom attributes for the user. This is where licenseType will be stored. When omitted, the account's default license type is used.|

<h2 id="tocS_CredentialsRequestRequest">CredentialsRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsrequestrequest"></a>
<a id="schema_CredentialsRequestRequest"></a>
<a id="tocScredentialsrequestrequest"></a>
<a id="tocscredentialsrequestrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PostgresCredentialsRequest](#schemapostgrescredentialsrequest)|false|none|none|
|*oneOf*|[RedshiftCredentialsRequest](#schemaredshiftcredentialsrequest)|false|none|none|
|*oneOf*|[SnowflakeCredentialsRequest](#schemasnowflakecredentialsrequest)|false|none|none|
|*oneOf*|[BigqueryCredentialsRequest](#schemabigquerycredentialsrequest)|false|none|none|
|*oneOf*|[DbtAdapterCredentialsRequest](#schemadbtadaptercredentialsrequest)|false|none|none|

<h2 id="tocS_CredentialsResponse">CredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsresponse"></a>
<a id="schema_CredentialsResponse"></a>
<a id="tocScredentialsresponse"></a>
<a id="tocscredentialsresponse"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PostgresCredentials](#schemapostgrescredentials)|false|none|none|
|*oneOf*|[RedshiftCredentials](#schemaredshiftcredentials)|false|none|none|
|*oneOf*|[SnowflakeCredentials](#schemasnowflakecredentials)|false|none|none|
|*oneOf*|[BigqueryCredentials](#schemabigquerycredentials)|false|none|none|
|*oneOf*|[DbtAdapterCredentials](#schemadbtadaptercredentials)|false|none|none|

<h2 id="tocS_CredentialsResponseEnveloped">CredentialsResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsresponseenveloped"></a>
<a id="schema_CredentialsResponseEnveloped"></a>
<a id="tocScredentialsresponseenveloped"></a>
<a id="tocscredentialsresponseenveloped"></a>

```json
{
  "data": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CredentialsResponse](#schemacredentialsresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_CredentialsResponseList">CredentialsResponseList</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsresponselist"></a>
<a id="schema_CredentialsResponseList"></a>
<a id="tocScredentialsresponselist"></a>
<a id="tocscredentialsresponselist"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PostgresCredentials](#schemapostgrescredentials)|false|none|none|
|*oneOf*|[RedshiftCredentials](#schemaredshiftcredentials)|false|none|none|
|*oneOf*|[SnowflakeCredentials](#schemasnowflakecredentials)|false|none|none|
|*oneOf*|[BigqueryCredentials](#schemabigquerycredentials)|false|none|none|
|*oneOf*|[DbtAdapterCredentials](#schemadbtadaptercredentials)|false|none|none|

<h2 id="tocS_CredentialsResponseListEnveloped">CredentialsResponseListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsresponselistenveloped"></a>
<a id="schema_CredentialsResponseListEnveloped"></a>
<a id="tocScredentialsresponselistenveloped"></a>
<a id="tocscredentialsresponselistenveloped"></a>

```json
{
  "data": [
    {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CredentialsResponseList](#schemacredentialsresponselist)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_CustomAttributesComponent">CustomAttributesComponent</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributescomponent"></a>
<a id="schema_CustomAttributesComponent"></a>
<a id="tocScustomattributescomponent"></a>
<a id="tocscustomattributescomponent"></a>

```json
{
  "licenseType": "developer"
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseType|object|true|none|The license type of the user|

<h2 id="tocS_CustomEnvironmentVariableBulkRequest">CustomEnvironmentVariableBulkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkrequest"></a>
<a id="schema_CustomEnvironmentVariableBulkRequest"></a>
<a id="tocScustomenvironmentvariablebulkrequest"></a>
<a id="tocscustomenvironmentvariablebulkrequest"></a>

```json
{
  "new_name": "string",
  "project": "string",
  "environmentNameExample1": "string",
  "environmentNameExample2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_name|string|true|none|none|
|project|string|false|none|none|
|environmentNameExample1|string|false|none|This key must match the name of the environment you want to set this environment variable for.|
|environmentNameExample2|string|false|none|This key must match the name of the environment you want to set this environment variable for.|

<h2 id="tocS_CustomEnvironmentVariableBulkRequestRequest">CustomEnvironmentVariableBulkRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkrequestrequest"></a>
<a id="schema_CustomEnvironmentVariableBulkRequestRequest"></a>
<a id="tocScustomenvironmentvariablebulkrequestrequest"></a>
<a id="tocscustomenvironmentvariablebulkrequestrequest"></a>

```json
{
  "env_var": [
    {
      "new_name": "string",
      "project": "string",
      "environmentNameExample1": "string",
      "environmentNameExample2": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|env_var|[[CustomEnvironmentVariableBulkRequest](#schemacustomenvironmentvariablebulkrequest)]|true|none|none|

<h2 id="tocS_CustomEnvironmentVariableBulkResponse">CustomEnvironmentVariableBulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkresponse"></a>
<a id="schema_CustomEnvironmentVariableBulkResponse"></a>
<a id="tocScustomenvironmentvariablebulkresponse"></a>
<a id="tocscustomenvironmentvariablebulkresponse"></a>

```json
{
  "status": "string",
  "status_code": 0,
  "key_name": "string",
  "data": {
    "message": "string",
    "new_var_ids": [
      0
    ],
    "failures": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|status_code|integer|false|none|none|
|key_name|string|false|none|none|
|data|[ResponseData](#schemaresponsedata)|false|none|none|

<h2 id="tocS_CustomEnvironmentVariableBulkResponseFailListEnveloped">CustomEnvironmentVariableBulkResponseFailListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkresponsefaillistenveloped"></a>
<a id="schema_CustomEnvironmentVariableBulkResponseFailListEnveloped"></a>
<a id="tocScustomenvironmentvariablebulkresponsefaillistenveloped"></a>
<a id="tocscustomenvironmentvariablebulkresponsefaillistenveloped"></a>

```json
{
  "data": [
    {
      "status": "string",
      "status_code": 0,
      "key_name": "string",
      "reason": "string"
    }
  ],
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomEnvironmentVariableBulkResponseFailResponse](#schemacustomenvironmentvariablebulkresponsefailresponse)]|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_CustomEnvironmentVariableBulkResponseFailResponse">CustomEnvironmentVariableBulkResponseFailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkresponsefailresponse"></a>
<a id="schema_CustomEnvironmentVariableBulkResponseFailResponse"></a>
<a id="tocScustomenvironmentvariablebulkresponsefailresponse"></a>
<a id="tocscustomenvironmentvariablebulkresponsefailresponse"></a>

```json
{
  "status": "string",
  "status_code": 0,
  "key_name": "string",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|status_code|integer|false|none|none|
|key_name|string|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_CustomEnvironmentVariableBulkResponseListEnveloped">CustomEnvironmentVariableBulkResponseListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablebulkresponselistenveloped"></a>
<a id="schema_CustomEnvironmentVariableBulkResponseListEnveloped"></a>
<a id="tocScustomenvironmentvariablebulkresponselistenveloped"></a>
<a id="tocscustomenvironmentvariablebulkresponselistenveloped"></a>

```json
{
  "data": [
    {
      "status": "string",
      "status_code": 0,
      "key_name": "string",
      "data": {
        "message": "string",
        "new_var_ids": [
          0
        ],
        "failures": null
      }
    }
  ],
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomEnvironmentVariableBulkResponse](#schemacustomenvironmentvariablebulkresponse)]|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_CustomEnvironmentVariableEnveloped">CustomEnvironmentVariableEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariableenveloped"></a>
<a id="schema_CustomEnvironmentVariableEnveloped"></a>
<a id="tocScustomenvironmentvariableenveloped"></a>
<a id="tocscustomenvironmentvariableenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "project",
    "user_id": 0,
    "environment_id": 0,
    "job_definition_id": 0,
    "display_value": "string",
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "environment": {
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "string",
      "dbt_version": "string",
      "type": "development",
      "use_custom_branch": true,
      "custom_branch": "string",
      "supports_docs": true,
      "deployment_type": "production",
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "primary_profile_id": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CustomEnvironmentVariableResponse](#schemacustomenvironmentvariableresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_CustomEnvironmentVariableRequest">CustomEnvironmentVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariablerequest"></a>
<a id="schema_CustomEnvironmentVariableRequest"></a>
<a id="tocScustomenvironmentvariablerequest"></a>
<a id="tocscustomenvironmentvariablerequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "project",
  "user_id": 0,
  "environment_id": 0,
  "job_definition_id": 0,
  "raw_value": "string",
  "display_value": "string",
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|true|none|none|
|name|string|true|none|none|
|type|[CustomEnvironmentVariableTypeEnum](#schemacustomenvironmentvariabletypeenum)|true|none|* `project` - project<br>* `environment` - environment<br>* `job` - job<br>* `user` - user|
|user_id|integer(int64)|false|none|none|
|environment_id|integer(int64)|false|none|none|
|job_definition_id|integer(int64)|false|none|none|
|raw_value|string|false|write-only|none|
|display_value|string|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Property|Value|
|---|---|
|type|project|
|type|environment|
|type|job|
|type|user|

<h2 id="tocS_CustomEnvironmentVariableResponse">CustomEnvironmentVariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariableresponse"></a>
<a id="schema_CustomEnvironmentVariableResponse"></a>
<a id="tocScustomenvironmentvariableresponse"></a>
<a id="tocscustomenvironmentvariableresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "type": "project",
  "user_id": 0,
  "environment_id": 0,
  "job_definition_id": 0,
  "display_value": "string",
  "state": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "environment": {
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "string",
    "dbt_version": "string",
    "type": "development",
    "use_custom_branch": true,
    "custom_branch": "string",
    "supports_docs": true,
    "deployment_type": "production",
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "primary_profile_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|project_id|integer(int64)|false|none|none|
|name|string|false|none|none|
|type|[CustomEnvironmentVariableTypeEnum](#schemacustomenvironmentvariabletypeenum)|false|none|* `project` - project<br>* `environment` - environment<br>* `job` - job<br>* `user` - user|
|user_id|integer(int64)|false|none|none|
|environment_id|integer(int64)|false|none|none|
|job_definition_id|integer(int64)|false|none|none|
|display_value|string|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|environment|object|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|project|
|type|environment|
|type|job|
|type|user|

<h2 id="tocS_CustomEnvironmentVariableTypeEnum">CustomEnvironmentVariableTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemacustomenvironmentvariabletypeenum"></a>
<a id="schema_CustomEnvironmentVariableTypeEnum"></a>
<a id="tocScustomenvironmentvariabletypeenum"></a>
<a id="tocscustomenvironmentvariabletypeenum"></a>

```json
"project"
```

* `project` - project
* `environment` - environment
* `job` - job
* `user` - user

<h2 id="tocS_CustomPagination">CustomPagination</h2>
<!-- backwards compatibility -->
<a id="schemacustompagination"></a>
<a id="schema_CustomPagination"></a>
<a id="tocScustompagination"></a>
<a id="tocscustompagination"></a>

```json
{
  "count": 0,
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Number of items in the current page|
|total_count|integer|true|none|Total number of items|

<h2 id="tocS_DatabricksConnection">DatabricksConnection</h2>
<!-- backwards compatibility -->
<a id="schemadatabricksconnection"></a>
<a id="schema_DatabricksConnection"></a>
<a id="tocSdatabricksconnection"></a>
<a id="tocsdatabricksconnection"></a>

```json
{
  "host": "string",
  "http_path": "string",
  "catalog": "",
  "client_id": "password",
  "client_secret": "password",
  "scopes": [
    "string"
  ],
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|http_path|string|true|none|none|
|catalog|string|false|none|none|
|client_id|string(password)|false|write-only|none|
|client_secret|string(password)|false|write-only|none|
|scopes|[string]|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_DatabricksSparkConnection">DatabricksSparkConnection</h2>
<!-- backwards compatibility -->
<a id="schemadatabrickssparkconnection"></a>
<a id="schema_DatabricksSparkConnection"></a>
<a id="tocSdatabrickssparkconnection"></a>
<a id="tocsdatabrickssparkconnection"></a>

```json
{
  "host": "string",
  "method": "odbc",
  "port": 443,
  "cluster": "",
  "endpoint": "",
  "driver": "/opt/simba/spark/lib/64/libsparkodbc_sb64.so",
  "organization": "",
  "user": "",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|method|object|false|none|none|
|port|integer|false|none|none|
|cluster|string|false|none|none|
|endpoint|string|false|none|none|
|driver|string|false|none|none|
|organization|string|false|none|none|
|user|string|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_DbtAdapterCredentials">DbtAdapterCredentials</h2>
<!-- backwards compatibility -->
<a id="schemadbtadaptercredentials"></a>
<a id="schema_DbtAdapterCredentials"></a>
<a id="tocSdbtadaptercredentials"></a>
<a id="tocsdbtadaptercredentials"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "adapter_id": 0,
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|adapter_id|integer(int64)|false|none|none|
|target_name|string|true|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id. Please note that Clickhouse is in private beta; to request access, contact your account representative.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_DbtAdapterCredentialsRequest">DbtAdapterCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadbtadaptercredentialsrequest"></a>
<a id="schema_DbtAdapterCredentialsRequest"></a>
<a id="tocSdbtadaptercredentialsrequest"></a>
<a id="tocsdbtadaptercredentialsrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "adapter_id": 0,
  "credential_details": {
    "_ciphertext": "NOT_SET"
  },
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|adapter_id|integer(int64)|false|none|none|
|credential_details|object|false|write-only|none|
|target_name|string|true|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id. Please note that Clickhouse is in private beta; to request access, contact your account representative.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_DbtAdapterEnveloped">DbtAdapterEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemadbtadapterenveloped"></a>
<a id="schema_DbtAdapterEnveloped"></a>
<a id="tocSdbtadapterenveloped"></a>
<a id="tocsdbtadapterenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "adapter_version": "apache_spark_v0",
    "metadata_json": null,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DbtAdapterResponse](#schemadbtadapterresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_DbtAdapterRequest">DbtAdapterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadbtadapterrequest"></a>
<a id="schema_DbtAdapterRequest"></a>
<a id="tocSdbtadapterrequest"></a>
<a id="tocsdbtadapterrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "adapter_version": "apache_spark_v0",
  "metadata_json": null,
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|true|none|none|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|adapter_version|[AdapterVersionEnum](#schemaadapterversionenum)|true|none|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|metadata_json|object|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

#### Enumerated Values

|Property|Value|
|---|---|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

<h2 id="tocS_DbtAdapterResponse">DbtAdapterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadbtadapterresponse"></a>
<a id="schema_DbtAdapterResponse"></a>
<a id="tocSdbtadapterresponse"></a>
<a id="tocsdbtadapterresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "adapter_version": "apache_spark_v0",
  "metadata_json": null,
  "state": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|project_id|integer(int64)|false|none|none|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|adapter_version|[AdapterVersionEnum](#schemaadapterversionenum)|false|none|* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|metadata_json|object|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|adapter_version|apache_spark_v0|
|adapter_version|databricks_spark_v0|
|adapter_version|databricks_v0|
|adapter_version|trino_v0|
|adapter_version|snowflake_v0|
|adapter_version|bigquery_v0|
|adapter_version|bigquery_v1|
|adapter_version|postgres_v0|
|adapter_version|redshift_v0|
|adapter_version|salesforce_v0|
|adapter_version|synapse_v0|
|adapter_version|fabric_v0|
|adapter_version|athena_v0|
|adapter_version|teradata_v0|
|adapter_version|clickhouse_v0|

<h2 id="tocS_DbtAdapterVersion">DbtAdapterVersion</h2>
<!-- backwards compatibility -->
<a id="schemadbtadapterversion"></a>
<a id="schema_DbtAdapterVersion"></a>
<a id="tocSdbtadapterversion"></a>
<a id="tocsdbtadapterversion"></a>

```json
"apache_spark_v0"
```

An enumeration.

<h2 id="tocS_DefaultLicenseTypeEnum">DefaultLicenseTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemadefaultlicensetypeenum"></a>
<a id="schema_DefaultLicenseTypeEnum"></a>
<a id="tocSdefaultlicensetypeenum"></a>
<a id="tocsdefaultlicensetypeenum"></a>

```json
"developer"
```

* `developer` - DEVELOPER
* `read_only` - READ_ONLY
* `analyst` - ANALYST
* `it` - IT

<h2 id="tocS_DeleteSubscriptionResponseData">DeleteSubscriptionResponseData</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionresponsedata"></a>
<a id="schema_DeleteSubscriptionResponseData"></a>
<a id="tocSdeletesubscriptionresponsedata"></a>
<a id="tocsdeletesubscriptionresponsedata"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_DeleteSubscriptionResponseEnvelope">DeleteSubscriptionResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionresponseenvelope"></a>
<a id="schema_DeleteSubscriptionResponseEnvelope"></a>
<a id="tocSdeletesubscriptionresponseenvelope"></a>
<a id="tocsdeletesubscriptionresponseenvelope"></a>

```json
{
  "data": {
    "id": "string"
  },
  "status": {
    "code": 0,
    "is_success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DeleteSubscriptionResponseData](#schemadeletesubscriptionresponsedata)|true|none|none|
|status|[DeleteSubscriptionResponseStatus](#schemadeletesubscriptionresponsestatus)|true|none|none|

<h2 id="tocS_DeleteSubscriptionResponseStatus">DeleteSubscriptionResponseStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionresponsestatus"></a>
<a id="schema_DeleteSubscriptionResponseStatus"></a>
<a id="tocSdeletesubscriptionresponsestatus"></a>
<a id="tocsdeletesubscriptionresponsestatus"></a>

```json
{
  "code": 0,
  "is_success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|is_success|boolean|true|none|none|

<h2 id="tocS_DeployKey">DeployKey</h2>
<!-- backwards compatibility -->
<a id="schemadeploykey"></a>
<a id="schema_DeployKey"></a>
<a id="tocSdeploykey"></a>
<a id="tocsdeploykey"></a>

```json
{
  "account_id": 0,
  "public_key": "string",
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|public_key|string|true|none|none|
|state|integer|false|none|(Deprecated)|

<h2 id="tocS_DeploymentEnvironmentAuthType">DeploymentEnvironmentAuthType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentenvironmentauthtype"></a>
<a id="schema_DeploymentEnvironmentAuthType"></a>
<a id="tocSdeploymentenvironmentauthtype"></a>
<a id="tocsdeploymentenvironmentauthtype"></a>

```json
"service-account-json"
```

An enumeration.

<h2 id="tocS_DeploymentTypeEnum">DeploymentTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttypeenum"></a>
<a id="schema_DeploymentTypeEnum"></a>
<a id="tocSdeploymenttypeenum"></a>
<a id="tocsdeploymenttypeenum"></a>

```json
"production"
```

* `production` - production
* `staging` - staging

<h2 id="tocS_DetailAccountUserResponse">DetailAccountUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailaccountuserresponse"></a>
<a id="schema_DetailAccountUserResponse"></a>
<a id="tocSdetailaccountuserresponse"></a>
<a id="tocsdetailaccountuserresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "fullname": "string",
    "email_verified": true,
    "license": {
      "id": 0,
      "license_type": "developer"
    },
    "is_active": false,
    "is_staff": false,
    "scim_managed": true
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[AccountUser](#schemaaccountuser)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailCreateAccountScopedPATResponse">DetailCreateAccountScopedPATResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailcreateaccountscopedpatresponse"></a>
<a id="schema_DetailCreateAccountScopedPATResponse"></a>
<a id="tocSdetailcreateaccountscopedpatresponse"></a>
<a id="tocsdetailcreateaccountscopedpatresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "user_id": 0,
    "type": 1,
    "uid": "string",
    "name": "string",
    "state": 0,
    "token": "string",
    "token_string": "string",
    "expires_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z",
    "last_identify": "1970-01-01T00:00:00Z",
    "user": {},
    "service_token_permissions": [
      {}
    ],
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[CreateAccountScopedPAT](#schemacreateaccountscopedpat)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailCreateSCIMTokenResponse">DetailCreateSCIMTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailcreatescimtokenresponse"></a>
<a id="schema_DetailCreateSCIMTokenResponse"></a>
<a id="tocSdetailcreatescimtokenresponse"></a>
<a id="tocsdetailcreatescimtokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z",
    "token_string": "string"
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[CreateSCIMToken](#schemacreatescimtoken)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailCreateServiceTokenResponse">DetailCreateServiceTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailcreateservicetokenresponse"></a>
<a id="schema_DetailCreateServiceTokenResponse"></a>
<a id="tocSdetailcreateservicetokenresponse"></a>
<a id="tocsdetailcreateservicetokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "state": 0,
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "last_used": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false,
    "token": "string",
    "token_string": "string",
    "last_identify": "1970-01-01T00:00:00Z",
    "user_id": 0,
    "user": {},
    "type": 1,
    "service_token_permissions": [
      {}
    ]
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[CreateServiceToken](#schemacreateservicetoken)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailFavoriteAssetResponse">DetailFavoriteAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailfavoriteassetresponse"></a>
<a id="schema_DetailFavoriteAssetResponse"></a>
<a id="tocSdetailfavoriteassetresponse"></a>
<a id="tocsdetailfavoriteassetresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project_id": 0,
    "environment_id": 0,
    "asset_id": "string",
    "name": "string",
    "platform": "string",
    "asset_type": "string"
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[FavoriteAsset](#schemafavoriteasset)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailGroupSCIMResponse">DetailGroupSCIMResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailgroupscimresponse"></a>
<a id="schema_DetailGroupSCIMResponse"></a>
<a id="tocSdetailgroupscimresponse"></a>
<a id="tocsdetailgroupscimresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "string",
    "displayName": "string",
    "members": [
      {
        "value": "string",
        "display": "string"
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    },
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ]
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[GroupSCIM](#schemagroupscim)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailLineageIntegrationResponse">DetailLineageIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetaillineageintegrationresponse"></a>
<a id="schema_DetailLineageIntegrationResponse"></a>
<a id="tocSdetaillineageintegrationresponse"></a>
<a id="tocsdetaillineageintegrationresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "name": "string"
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[LineageIntegration](#schemalineageintegration)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailSCIMConfigResponse">DetailSCIMConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailscimconfigresponse"></a>
<a id="schema_DetailSCIMConfigResponse"></a>
<a id="tocSdetailscimconfigresponse"></a>
<a id="tocsdetailscimconfigresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "enabled": true,
    "manual_updates_allowed": true,
    "scim_controlled_license_type": true
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[SCIMConfig](#schemascimconfig)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailSCIMListResponse">DetailSCIMListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailscimlistresponse"></a>
<a id="schema_DetailSCIMListResponse"></a>
<a id="tocSdetailscimlistresponse"></a>
<a id="tocsdetailscimlistresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 0,
    "startIndex": 0,
    "itemsPerPage": 0,
    "Resources": [
      null
    ]
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[SCIMList](#schemascimlist)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailSCIMResourceTypeResponse">DetailSCIMResourceTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailscimresourcetyperesponse"></a>
<a id="schema_DetailSCIMResourceTypeResponse"></a>
<a id="tocSdetailscimresourcetyperesponse"></a>
<a id="tocsdetailscimresourcetyperesponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
    ],
    "id": "string",
    "name": "string",
    "endpoint": "string",
    "description": "string",
    "schema": "string",
    "schemaExtensions": [
      {
        "schema": "string",
        "required": true
      }
    ],
    "meta": {
      "resourceType": "string",
      "location": "string",
      "created": "string",
      "lastModified": "string"
    }
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[SCIMResourceType](#schemascimresourcetype)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailSCIMTokenResponse">DetailSCIMTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailscimtokenresponse"></a>
<a id="schema_DetailSCIMTokenResponse"></a>
<a id="tocSdetailscimtokenresponse"></a>
<a id="tocsdetailscimtokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[SCIMToken](#schemascimtoken)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailServiceTokenResponse">DetailServiceTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailservicetokenresponse"></a>
<a id="schema_DetailServiceTokenResponse"></a>
<a id="tocSdetailservicetokenresponse"></a>
<a id="tocsdetailservicetokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "uid": "string",
    "name": "string",
    "state": 0,
    "permission_grants": [
      {
        "permission_set": "account_admin",
        "project_id": 0,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "last_used": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "semantic_layer_credentials": [
      {}
    ],
    "metadata_only": false,
    "webhooks_only": false
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[ServiceToken](#schemaservicetoken)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_DetailUserSCIMResponse">DetailUserSCIMResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetailuserscimresponse"></a>
<a id="schema_DetailUserSCIMResponse"></a>
<a id="tocSdetailuserscimresponse"></a>
<a id="tocsdetailuserscimresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "externalId": "12uhdfs0",
    "userName": "string",
    "active": true,
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
    ],
    "name": {
      "givenName": "John",
      "familyName": "Smith"
    },
    "emails": [
      {
        "value": "john.smith@example.com",
        "primary": "True"
      }
    ],
    "groups": [
      {
        "value": "1234",
        "externalId": "group-1234",
        "display": "Example Group"
      }
    ],
    "meta": {
      "resourceType": "User",
      "created": "2024-01-01T00:00:00+00:00",
      "lastModified": "2024-01-01T00:00:00+00:00",
      "location": "/scim/v2/Users/1111"
    },
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
      "licenseType": "developer"
    }
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[UserSCIM](#schemauserscim)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_EncryptedJSONValue">EncryptedJSONValue</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedjsonvalue"></a>
<a id="schema_EncryptedJSONValue"></a>
<a id="tocSencryptedjsonvalue"></a>
<a id="tocsencryptedjsonvalue"></a>

```json
{
  "_ciphertext": "NOT_SET"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_ciphertext|string|false|none|none|

<h2 id="tocS_EncryptedJSONValueRequest">EncryptedJSONValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedjsonvaluerequest"></a>
<a id="schema_EncryptedJSONValueRequest"></a>
<a id="tocSencryptedjsonvaluerequest"></a>
<a id="tocsencryptedjsonvaluerequest"></a>

```json
{
  "_ciphertext": "NOT_SET"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_ciphertext|string|false|none|none|

<h2 id="tocS_EntraExtraData">EntraExtraData</h2>
<!-- backwards compatibility -->
<a id="schemaentraextradata"></a>
<a id="schema_EntraExtraData"></a>
<a id="tocSentraextradata"></a>
<a id="tocsentraextradata"></a>

```json
{
  "application_id_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_id_uri|string|true|none|none|

<h2 id="tocS_EntraExtraDataRequest">EntraExtraDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaentraextradatarequest"></a>
<a id="schema_EntraExtraDataRequest"></a>
<a id="tocSentraextradatarequest"></a>
<a id="tocsentraextradatarequest"></a>

```json
{
  "application_id_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_id_uri|string|true|none|none|

<h2 id="tocS_EnvVarEnvironmentData">EnvVarEnvironmentData</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarenvironmentdata"></a>
<a id="schema_EnvVarEnvironmentData"></a>
<a id="tocSenvvarenvironmentdata"></a>
<a id="tocsenvvarenvironmentdata"></a>

```json
{
  "environments": [
    "string"
  ],
  "variables": {
    "property1": {
      "property1": {
        "id": 0,
        "value": "string"
      },
      "property2": {
        "id": 0,
        "value": "string"
      }
    },
    "property2": {
      "property1": {
        "id": 0,
        "value": "string"
      },
      "property2": {
        "id": 0,
        "value": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[string]|true|none|Ordered list of environment names (includes 'project' as the first entry).|
|variables|object|true|none|Dict keyed by variable name. Each value is a dict keyed by environment name (or 'project') mapping to {id, value} pairs.|

<h2 id="tocS_EnvVarEnvironmentResponse">EnvVarEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarenvironmentresponse"></a>
<a id="schema_EnvVarEnvironmentResponse"></a>
<a id="tocSenvvarenvironmentresponse"></a>
<a id="tocsenvvarenvironmentresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "environments": [
      "string"
    ],
    "variables": {
      "property1": {
        "property1": {
          "id": 0,
          "value": "string"
        },
        "property2": {
          "id": 0,
          "value": "string"
        }
      },
      "property2": {
        "property1": {
          "id": 0,
          "value": "string"
        },
        "property2": {
          "id": 0,
          "value": "string"
        }
      }
    }
  },
  "extra": {},
  "error_code": 0
}
```

Response envelope for the environment/ environment-variable endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[EnvVarEnvironmentData](#schemaenvvarenvironmentdata)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_EnvVarJobResponse">EnvVarJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarjobresponse"></a>
<a id="schema_EnvVarJobResponse"></a>
<a id="tocSenvvarjobresponse"></a>
<a id="tocsenvvarjobresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "property1": {
      "project": {
        "id": 0,
        "value": "string"
      },
      "environment": {
        "id": 0,
        "value": "string"
      },
      "job": {
        "id": 0,
        "value": "string"
      }
    },
    "property2": {
      "project": {
        "id": 0,
        "value": "string"
      },
      "environment": {
        "id": 0,
        "value": "string"
      },
      "job": {
        "id": 0,
        "value": "string"
      }
    }
  },
  "extra": {},
  "error_code": 0
}
```

Response envelope for the job/ environment-variable endpoint.

``data`` is a dict keyed by variable name, where each value is a dict keyed by
scope (``project``, ``environment``, ``job``) mapping to ``{id, value}`` pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|object|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_EnvVarJobScopeMap">EnvVarJobScopeMap</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarjobscopemap"></a>
<a id="schema_EnvVarJobScopeMap"></a>
<a id="tocSenvvarjobscopemap"></a>
<a id="tocsenvvarjobscopemap"></a>

```json
{
  "project": {
    "id": 0,
    "value": "string"
  },
  "environment": {
    "id": 0,
    "value": "string"
  },
  "job": {
    "id": 0,
    "value": "string"
  }
}
```

Overrides for a single variable on the job/ endpoint.

Each scope is optional because a variable may only be set at some levels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|
|environment|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|
|job|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|

<h2 id="tocS_EnvVarUserResponse">EnvVarUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenvvaruserresponse"></a>
<a id="schema_EnvVarUserResponse"></a>
<a id="tocSenvvaruserresponse"></a>
<a id="tocsenvvaruserresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "property1": {
      "project": {
        "id": 0,
        "value": "string"
      },
      "environment": {
        "id": 0,
        "value": "string"
      },
      "user": {
        "id": 0,
        "value": "string"
      }
    },
    "property2": {
      "project": {
        "id": 0,
        "value": "string"
      },
      "environment": {
        "id": 0,
        "value": "string"
      },
      "user": {
        "id": 0,
        "value": "string"
      }
    }
  },
  "extra": {},
  "error_code": 0
}
```

Response envelope for the user/ environment-variable endpoint.

``data`` is a dict keyed by variable name, where each value is a dict keyed by
scope (``project``, ``environment``, ``user``) mapping to ``{id, value}`` pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|object|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_EnvVarUserScopeMap">EnvVarUserScopeMap</h2>
<!-- backwards compatibility -->
<a id="schemaenvvaruserscopemap"></a>
<a id="schema_EnvVarUserScopeMap"></a>
<a id="tocSenvvaruserscopemap"></a>
<a id="tocsenvvaruserscopemap"></a>

```json
{
  "project": {
    "id": 0,
    "value": "string"
  },
  "environment": {
    "id": 0,
    "value": "string"
  },
  "user": {
    "id": 0,
    "value": "string"
  }
}
```

Overrides for a single variable on the user/ endpoint.

Each scope is optional because a variable may only be set at some levels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|
|environment|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|
|user|[EnvVarValue](#schemaenvvarvalue)|false|none|A single environment variable override: its database ID and display value.|

<h2 id="tocS_EnvVarValue">EnvVarValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarvalue"></a>
<a id="schema_EnvVarValue"></a>
<a id="tocSenvvarvalue"></a>
<a id="tocsenvvarvalue"></a>

```json
{
  "id": 0,
  "value": "string"
}
```

A single environment variable override: its database ID and display value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|value|string|false|none|none|

<h2 id="tocS_EnvironmentV3">EnvironmentV3</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentv3"></a>
<a id="schema_EnvironmentV3"></a>
<a id="tocSenvironmentv3"></a>
<a id="tocsenvironmentv3"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "connection_id": 0,
  "extended_attributes_id": 0,
  "name": "string",
  "dbt_version": "string",
  "type": "development",
  "use_custom_branch": true,
  "custom_branch": "string",
  "supports_docs": true,
  "deployment_type": "production",
  "enable_model_query_history": false,
  "enable_dbt_state": false,
  "enable_dbt_state_model_lock": true,
  "state": 1,
  "primary_profile_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the environment is associated with|
|project_id|integer(int64)|true|none|The project the environment is associated with|
|credentials_id|integer(int64)|false|none|The id of the associated credentials. Null for development environments. Must be included when updating a deployment environment or the value will be reset to null.|
|connection_id|integer(int64)|false|none|The id of the associated connection. Must be included when updating an environment or the value will be reset to null.|
|extended_attributes_id|integer(int64)|false|none|none|
|name|string|true|none|The name of the environment|
|dbt_version|string|true|none|The default dbt Version to use for this environment|
|type|[Type76eEnum](#schematype76eenum)|true|none|* `development` - DEVELOPMENT<br>* `deployment` - DEPLOYMENT|
|use_custom_branch|boolean|true|none|none|
|custom_branch|string|false|none|none|
|supports_docs|boolean|true|none|none|
|deployment_type|[DeploymentTypeEnum](#schemadeploymenttypeenum)|false|none|* `production` - production<br>* `staging` - staging|
|enable_model_query_history|boolean|false|none|none|
|enable_dbt_state|boolean|false|none|none|
|enable_dbt_state_model_lock|boolean|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|primary_profile_id|integer(int64)|false|none|The id of the primary profile for this environment|

#### Enumerated Values

|Property|Value|
|---|---|
|type|development|
|type|deployment|
|deployment_type|production|
|deployment_type|staging|

<h2 id="tocS_EnvironmentV3Enveloped">EnvironmentV3Enveloped</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentv3enveloped"></a>
<a id="schema_EnvironmentV3Enveloped"></a>
<a id="tocSenvironmentv3enveloped"></a>
<a id="tocsenvironmentv3enveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "connection_id": 0,
    "extended_attributes_id": 0,
    "name": "New Environment",
    "dbt_version": "latest",
    "raw_dbt_version": "string",
    "type": "deployment",
    "use_custom_branch": false,
    "custom_branch": "string",
    "supports_docs": false,
    "deployment_type": "production",
    "is_deferrable": true,
    "enable_model_query_history": false,
    "enable_dbt_state": false,
    "enable_dbt_state_model_lock": true,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    },
    "primary_profile_id": 0,
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "fusion_readiness": null
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EnvironmentV3Response](#schemaenvironmentv3response)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_EnvironmentV3ListEnveloped">EnvironmentV3ListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentv3listenveloped"></a>
<a id="schema_EnvironmentV3ListEnveloped"></a>
<a id="tocSenvironmentv3listenveloped"></a>
<a id="tocsenvironmentv3listenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "New Environment",
      "dbt_version": "latest",
      "raw_dbt_version": "string",
      "type": "deployment",
      "use_custom_branch": false,
      "custom_branch": "string",
      "supports_docs": false,
      "deployment_type": "production",
      "is_deferrable": true,
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "project": {
        "name": "string",
        "account_id": 0,
        "description": "string",
        "connection_id": 0,
        "repository_id": 0,
        "semantic_layer_config_id": 0,
        "state": 1,
        "dbt_project_subdirectory": "string",
        "docs_job_id": 0,
        "freshness_job_id": 0,
        "type": {}
      },
      "primary_profile_id": 0,
      "credentials": {
        "account_id": 0,
        "project_id": 0,
        "type": "postgres",
        "state": 1,
        "threads": 0,
        "username": "string",
        "default_schema": "string",
        "target_name": "string",
        "adapter_version": {}
      },
      "fusion_readiness": null
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EnvironmentV3Response](#schemaenvironmentv3response)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_EnvironmentV3Request">EnvironmentV3Request</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentv3request"></a>
<a id="schema_EnvironmentV3Request"></a>
<a id="tocSenvironmentv3request"></a>
<a id="tocsenvironmentv3request"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "connection_id": 0,
  "extended_attributes_id": 0,
  "name": "string",
  "dbt_version": "string",
  "type": "development",
  "use_custom_branch": true,
  "custom_branch": "string",
  "supports_docs": true,
  "deployment_type": "production",
  "enable_model_query_history": false,
  "enable_dbt_state": false,
  "enable_dbt_state_model_lock": true,
  "state": 1,
  "primary_profile_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the environment is associated with|
|project_id|integer(int64)|true|none|The project the environment is associated with|
|credentials_id|integer(int64)|false|none|The id of the associated credentials. Null for development environments. Must be included when updating a deployment environment or the value will be reset to null.|
|connection_id|integer(int64)|false|none|The id of the associated connection. Must be included when updating an environment or the value will be reset to null.|
|extended_attributes_id|integer(int64)|false|none|none|
|name|string|true|none|The name of the environment|
|dbt_version|string|true|none|The default dbt Version to use for this environment|
|type|[Type76eEnum](#schematype76eenum)|true|none|* `development` - DEVELOPMENT<br>* `deployment` - DEPLOYMENT|
|use_custom_branch|boolean|true|none|none|
|custom_branch|string|false|none|none|
|supports_docs|boolean|true|none|none|
|deployment_type|[DeploymentTypeEnum](#schemadeploymenttypeenum)|false|none|* `production` - production<br>* `staging` - staging|
|enable_model_query_history|boolean|false|none|none|
|enable_dbt_state|boolean|false|none|none|
|enable_dbt_state_model_lock|boolean|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|primary_profile_id|integer(int64)|false|none|The id of the primary profile for this environment|

#### Enumerated Values

|Property|Value|
|---|---|
|type|development|
|type|deployment|
|deployment_type|production|
|deployment_type|staging|

<h2 id="tocS_EnvironmentV3Response">EnvironmentV3Response</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentv3response"></a>
<a id="schema_EnvironmentV3Response"></a>
<a id="tocSenvironmentv3response"></a>
<a id="tocsenvironmentv3response"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "connection_id": 0,
  "extended_attributes_id": 0,
  "name": "New Environment",
  "dbt_version": "latest",
  "raw_dbt_version": "string",
  "type": "deployment",
  "use_custom_branch": false,
  "custom_branch": "string",
  "supports_docs": false,
  "deployment_type": "production",
  "is_deferrable": true,
  "enable_model_query_history": false,
  "enable_dbt_state": false,
  "enable_dbt_state_model_lock": true,
  "state": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "project": {
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": {}
  },
  "primary_profile_id": 0,
  "credentials": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "fusion_readiness": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|The account the environment is associated with|
|project_id|integer(int64)|false|none|The project the environment is associated with|
|credentials_id|integer(int64)|false|none|The id of the associated credentials. Null for development environments. Must be included when updating a deployment environment or the value will be reset to null.|
|connection_id|integer(int64)|false|none|The id of the associated connection. Must be included when updating an environment or the value will be reset to null.|
|extended_attributes_id|integer(int64)|false|none|none|
|name|string|false|none|The name of the environment|
|dbt_version|string|false|none|The default dbt Version to use for this environment|
|raw_dbt_version|string|true|read-only|none|
|type|object|false|none|none|
|use_custom_branch|boolean|false|none|none|
|custom_branch|string|false|none|none|
|supports_docs|boolean|false|none|none|
|deployment_type|[DeploymentTypeEnum](#schemadeploymenttypeenum)|false|none|* `production` - production<br>* `staging` - staging|
|is_deferrable|boolean|true|read-only|none|
|enable_model_query_history|boolean|false|none|none|
|enable_dbt_state|boolean|false|none|none|
|enable_dbt_state_model_lock|boolean|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|project|object|true|read-only|none|
|primary_profile_id|integer(int64)|false|none|The id of the primary profile for this environment|
|credentials|object|true|read-only|none|
|fusion_readiness|object|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|deployment_type|production|
|deployment_type|staging|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "string",
  "subscription_id": "string",
  "account_identifier": "string",
  "job_id": "string",
  "trigger_event_type": "string",
  "payload": "string",
  "http_status_code": "string",
  "account_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|subscription_id|string|true|none|none|
|account_identifier|string|true|none|none|
|job_id|string|true|none|none|
|trigger_event_type|string|true|none|none|
|payload|string|true|none|none|
|http_status_code|string|true|none|none|
|account_id|string|true|none|none|

<h2 id="tocS_EventResponseEnvelope">EventResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemaeventresponseenvelope"></a>
<a id="schema_EventResponseEnvelope"></a>
<a id="tocSeventresponseenvelope"></a>
<a id="tocseventresponseenvelope"></a>

```json
{
  "data": {
    "id": "string",
    "subscription_id": "string",
    "account_identifier": "string",
    "job_id": "string",
    "trigger_event_type": "string",
    "payload": "string",
    "http_status_code": "string",
    "account_id": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Event](#schemaevent)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_ExtendedAttributes">ExtendedAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattributes"></a>
<a id="schema_ExtendedAttributes"></a>
<a id="tocSextendedattributes"></a>
<a id="tocsextendedattributes"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "project_id": 0,
  "extended_attributes": {},
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The ID of the extended attributes record|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The ID of the parent account|
|project_id|integer(int64)|true|none|The ID of the parent project|
|extended_attributes|object|true|none|The key-value pairs stored as extended attributes|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

<h2 id="tocS_ExtendedAttributesCreateBodyRequest">ExtendedAttributesCreateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattributescreatebodyrequest"></a>
<a id="schema_ExtendedAttributesCreateBodyRequest"></a>
<a id="tocSextendedattributescreatebodyrequest"></a>
<a id="tocsextendedattributescreatebodyrequest"></a>

```json
{
  "extended_attributes": {}
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extended_attributes|object|true|none|The key-value pairs to be stored as extended attributes. dbt guarantees to support extended attributes up to 4096 bytes in serialized JSON form.|

<h2 id="tocS_ExtendedAttributesResponse">ExtendedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattributesresponse"></a>
<a id="schema_ExtendedAttributesResponse"></a>
<a id="tocSextendedattributesresponse"></a>
<a id="tocsextendedattributesresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "project_id": 0,
    "extended_attributes": {},
    "state": 1
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[ExtendedAttributes](#schemaextendedattributes)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ExtendedAttributesUpdateBodyRequest">ExtendedAttributesUpdateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattributesupdatebodyrequest"></a>
<a id="schema_ExtendedAttributesUpdateBodyRequest"></a>
<a id="tocSextendedattributesupdatebodyrequest"></a>
<a id="tocsextendedattributesupdatebodyrequest"></a>

```json
{
  "extended_attributes": {},
  "state": 0
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extended_attributes|object|true|none|The key-value pairs to be stored as extended attributes. dbt guarantees to support extended attributes up to 4096 bytes in serialized JSON form.|
|state|integer|false|none|none|

<h2 id="tocS_Extra">Extra</h2>
<!-- backwards compatibility -->
<a id="schemaextra"></a>
<a id="schema_Extra"></a>
<a id="tocSextra"></a>
<a id="tocsextra"></a>

```json
{
  "filters": {
    "property1": null,
    "property2": null
  },
  "order_by": "string",
  "pagination": {
    "count": 0,
    "total_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|Filters applied to the request|
|order_by|string|true|none|Ordering applied to the request|
|pagination|[CustomPagination](#schemacustompagination)|true|none|none|

<h2 id="tocS_FabricConnection">FabricConnection</h2>
<!-- backwards compatibility -->
<a id="schemafabricconnection"></a>
<a id="schema_FabricConnection"></a>
<a id="tocSfabricconnection"></a>
<a id="tocsfabricconnection"></a>

```json
{
  "server": "string",
  "database": "string",
  "driver": "ODBC Driver 18 for SQL Server",
  "port": 1433,
  "retries": 1,
  "login_timeout": 0,
  "query_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|string|true|none|none|
|database|string|true|none|none|
|driver|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|
|login_timeout|integer|false|none|none|
|query_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_FavoriteAsset">FavoriteAsset</h2>
<!-- backwards compatibility -->
<a id="schemafavoriteasset"></a>
<a id="schema_FavoriteAsset"></a>
<a id="tocSfavoriteasset"></a>
<a id="tocsfavoriteasset"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "project_id": 0,
  "environment_id": 0,
  "asset_id": "string",
  "name": "string",
  "platform": "string",
  "asset_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|project_id|integer(int64)|false|none|The project ID the favorited asset is associated with. Can be null for data warehouse assets.|
|environment_id|integer(int64)|false|none|The environment ID the favorited asset is associated with|
|asset_id|string|true|none|The asset ID of the favorited asset|
|name|string|true|none|The name of the favorited asset|
|platform|string|true|none|The platform of the favorited asset|
|asset_type|string|false|none|The resource type of the favorited asset|

<h2 id="tocS_FieldGroup">FieldGroup</h2>
<!-- backwards compatibility -->
<a id="schemafieldgroup"></a>
<a id="schema_FieldGroup"></a>
<a id="tocSfieldgroup"></a>
<a id="tocsfieldgroup"></a>

```json
{
  "name": "string",
  "members": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|members|[string]|true|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "offset": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer|true|none|none|
|limit|integer|true|none|none|

<h2 id="tocS_GetLineageIntegrationWatchSelectionResponse">GetLineageIntegrationWatchSelectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlineageintegrationwatchselectionresponse"></a>
<a id="schema_GetLineageIntegrationWatchSelectionResponse"></a>
<a id="tocSgetlineageintegrationwatchselectionresponse"></a>
<a id="tocsgetlineageintegrationwatchselectionresponse"></a>

```json
{
  "added": 0,
  "removed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|integer|true|none|Number of collections additionally being watched|
|removed|integer|true|none|Number of collections no longer being watched|

<h2 id="tocS_GetWebhooksReceiptResponseEnvelope">GetWebhooksReceiptResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhooksreceiptresponseenvelope"></a>
<a id="schema_GetWebhooksReceiptResponseEnvelope"></a>
<a id="tocSgetwebhooksreceiptresponseenvelope"></a>
<a id="tocsgetwebhooksreceiptresponseenvelope"></a>

```json
{
  "data": {
    "id": "string",
    "event_id": "string",
    "subscription_id": "string",
    "dispatched_at": "string",
    "http_status_code": "string",
    "error_info": "string",
    "request_body": "string",
    "request_headers": "string",
    "response_body": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Receipt](#schemareceipt)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_GitCloneStrategyEnum">GitCloneStrategyEnum</h2>
<!-- backwards compatibility -->
<a id="schemagitclonestrategyenum"></a>
<a id="schema_GitCloneStrategyEnum"></a>
<a id="tocSgitclonestrategyenum"></a>
<a id="tocsgitclonestrategyenum"></a>

```json
"azure_active_directory_app"
```

* `azure_active_directory_app` - azure_active_directory_app
* `deploy_key` - deploy_key
* `deploy_token` - deploy_token
* `github_app` - github_app
* `git_token` - git_token

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "state": 1,
  "assign_by_default": true,
  "sso_mapping_groups": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|name|string|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|assign_by_default|boolean|true|none|none|
|sso_mapping_groups|[string]|false|none|none|

<h2 id="tocS_GroupEnveloped">GroupEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemagroupenveloped"></a>
<a id="schema_GroupEnveloped"></a>
<a id="tocSgroupenveloped"></a>
<a id="tocsgroupenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "name": "string",
    "state": 1,
    "assign_by_default": false,
    "sso_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "group_permissions": [],
    "member_count": 0,
    "scim_managed": true
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GroupResponse](#schemagroupresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_GroupListEnveloped">GroupListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemagrouplistenveloped"></a>
<a id="schema_GroupListEnveloped"></a>
<a id="tocSgrouplistenveloped"></a>
<a id="tocsgrouplistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "name": "string",
      "state": 1,
      "assign_by_default": false,
      "sso_mapping_groups": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "group_permissions": [],
      "member_count": 0,
      "scim_managed": true
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GroupResponse](#schemagroupresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_GroupMemberComponent">GroupMemberComponent</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembercomponent"></a>
<a id="schema_GroupMemberComponent"></a>
<a id="tocSgroupmembercomponent"></a>
<a id="tocsgroupmembercomponent"></a>

```json
{
  "value": "string",
  "display": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The ID of the member|
|display|string|true|none|The display name of the member|

<h2 id="tocS_GroupPermission">GroupPermission</h2>
<!-- backwards compatibility -->
<a id="schemagrouppermission"></a>
<a id="schema_GroupPermission"></a>
<a id="tocSgrouppermission"></a>
<a id="tocsgrouppermission"></a>

```json
{
  "account_id": 0,
  "group_id": 0,
  "project_id": 0,
  "all_projects": true,
  "permission_set": "account_admin",
  "permission_level": 0,
  "state": 1,
  "writable_environment_categories": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|group_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|all_projects|boolean|true|none|none|
|permission_set|[PermissionSetEnum](#schemapermissionsetenum)|true|none|* `account_admin` - ACCOUNT_ADMIN<br>* `account_viewer` - ACCOUNT_VIEWER<br>* `admin` - ADMIN<br>* `analyst` - ANALYST<br>* `analyst_read` - ANALYST_READ<br>* `billing_admin` - BILLING_ADMIN<br>* `cost_insights_admin` - COST_INSIGHTS_ADMIN<br>* `cost_insights_viewer` - COST_INSIGHTS_VIEWER<br>* `cost_management_admin` - COST_MANAGEMENT_ADMIN<br>* `cost_management_viewer` - COST_MANAGEMENT_VIEWER<br>* `database_admin` - DATABASE_ADMIN<br>* `developer` - DEVELOPER<br>* `fusion_admin` - V2_MIGRATION_ADMIN<br>* `git_admin` - GIT_ADMIN<br>* `job_admin` - JOB_ADMIN<br>* `job_creator` - JOB_CREATOR<br>* `job_runner` - JOB_RUNNER<br>* `job_viewer` - JOB_VIEWER<br>* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS<br>* `member` - MEMBER<br>* `metadata_only` - METADATA_ONLY<br>* `notification_manager` - NOTIFICATION_MANAGER<br>* `owner` - OWNER<br>* `project_creator` - PROJECT_CREATOR<br>* `readonly` - READONLY<br>* `scim_only` - SCIM_ONLY<br>* `security_admin` - SECURITY_ADMIN<br>* `semantic_layer_only` - SEMANTIC_LAYER_ONLY<br>* `stakeholder` - STAKEHOLDER<br>* `team_admin` - TEAM_ADMIN<br>* `webhooks_only` - WEBHOOKS_ONLY|
|permission_level|integer|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|writable_environment_categories|[string]|true|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_GroupPermissionListEnveloped">GroupPermissionListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemagrouppermissionlistenveloped"></a>
<a id="schema_GroupPermissionListEnveloped"></a>
<a id="tocSgrouppermissionlistenveloped"></a>
<a id="tocsgrouppermissionlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "group_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "permission_level": 0,
      "state": 1,
      "writable_environment_categories": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GroupPermissionResponse](#schemagrouppermissionresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_GroupPermissionListRequest">GroupPermissionListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrouppermissionlistrequest"></a>
<a id="schema_GroupPermissionListRequest"></a>
<a id="tocSgrouppermissionlistrequest"></a>
<a id="tocsgrouppermissionlistrequest"></a>

```json
{
  "": [
    {
      "account_id": 0,
      "group_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "permission_level": 0,
      "state": 1,
      "writable_environment_categories": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
||[[GroupPermissionRequest](#schemagrouppermissionrequest)]|true|none|none|

<h2 id="tocS_GroupPermissionRequest">GroupPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrouppermissionrequest"></a>
<a id="schema_GroupPermissionRequest"></a>
<a id="tocSgrouppermissionrequest"></a>
<a id="tocsgrouppermissionrequest"></a>

```json
{
  "account_id": 0,
  "group_id": 0,
  "project_id": 0,
  "all_projects": true,
  "permission_set": "account_admin",
  "permission_level": 0,
  "state": 1,
  "writable_environment_categories": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|group_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|all_projects|boolean|true|none|none|
|permission_set|[PermissionSetEnum](#schemapermissionsetenum)|true|none|* `account_admin` - ACCOUNT_ADMIN<br>* `account_viewer` - ACCOUNT_VIEWER<br>* `admin` - ADMIN<br>* `analyst` - ANALYST<br>* `analyst_read` - ANALYST_READ<br>* `billing_admin` - BILLING_ADMIN<br>* `cost_insights_admin` - COST_INSIGHTS_ADMIN<br>* `cost_insights_viewer` - COST_INSIGHTS_VIEWER<br>* `cost_management_admin` - COST_MANAGEMENT_ADMIN<br>* `cost_management_viewer` - COST_MANAGEMENT_VIEWER<br>* `database_admin` - DATABASE_ADMIN<br>* `developer` - DEVELOPER<br>* `fusion_admin` - V2_MIGRATION_ADMIN<br>* `git_admin` - GIT_ADMIN<br>* `job_admin` - JOB_ADMIN<br>* `job_creator` - JOB_CREATOR<br>* `job_runner` - JOB_RUNNER<br>* `job_viewer` - JOB_VIEWER<br>* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS<br>* `member` - MEMBER<br>* `metadata_only` - METADATA_ONLY<br>* `notification_manager` - NOTIFICATION_MANAGER<br>* `owner` - OWNER<br>* `project_creator` - PROJECT_CREATOR<br>* `readonly` - READONLY<br>* `scim_only` - SCIM_ONLY<br>* `security_admin` - SECURITY_ADMIN<br>* `semantic_layer_only` - SEMANTIC_LAYER_ONLY<br>* `stakeholder` - STAKEHOLDER<br>* `team_admin` - TEAM_ADMIN<br>* `webhooks_only` - WEBHOOKS_ONLY|
|permission_level|integer|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|writable_environment_categories|[string]|true|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_GroupPermissionResponse">GroupPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrouppermissionresponse"></a>
<a id="schema_GroupPermissionResponse"></a>
<a id="tocSgrouppermissionresponse"></a>
<a id="tocsgrouppermissionresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "group_id": 0,
  "project_id": 0,
  "all_projects": true,
  "permission_set": "account_admin",
  "permission_level": 0,
  "state": 1,
  "writable_environment_categories": [],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|group_id|integer(int64)|false|none|none|
|project_id|integer(int64)|false|none|none|
|all_projects|boolean|false|none|none|
|permission_set|[PermissionSetEnum](#schemapermissionsetenum)|false|none|* `account_admin` - ACCOUNT_ADMIN<br>* `account_viewer` - ACCOUNT_VIEWER<br>* `admin` - ADMIN<br>* `analyst` - ANALYST<br>* `analyst_read` - ANALYST_READ<br>* `billing_admin` - BILLING_ADMIN<br>* `cost_insights_admin` - COST_INSIGHTS_ADMIN<br>* `cost_insights_viewer` - COST_INSIGHTS_VIEWER<br>* `cost_management_admin` - COST_MANAGEMENT_ADMIN<br>* `cost_management_viewer` - COST_MANAGEMENT_VIEWER<br>* `database_admin` - DATABASE_ADMIN<br>* `developer` - DEVELOPER<br>* `fusion_admin` - V2_MIGRATION_ADMIN<br>* `git_admin` - GIT_ADMIN<br>* `job_admin` - JOB_ADMIN<br>* `job_creator` - JOB_CREATOR<br>* `job_runner` - JOB_RUNNER<br>* `job_viewer` - JOB_VIEWER<br>* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS<br>* `member` - MEMBER<br>* `metadata_only` - METADATA_ONLY<br>* `notification_manager` - NOTIFICATION_MANAGER<br>* `owner` - OWNER<br>* `project_creator` - PROJECT_CREATOR<br>* `readonly` - READONLY<br>* `scim_only` - SCIM_ONLY<br>* `security_admin` - SECURITY_ADMIN<br>* `semantic_layer_only` - SEMANTIC_LAYER_ONLY<br>* `stakeholder` - STAKEHOLDER<br>* `team_admin` - TEAM_ADMIN<br>* `webhooks_only` - WEBHOOKS_ONLY|
|permission_level|integer|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|writable_environment_categories|[string]|false|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_GroupRequest">GroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrouprequest"></a>
<a id="schema_GroupRequest"></a>
<a id="tocSgrouprequest"></a>
<a id="tocsgrouprequest"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "state": 1,
  "assign_by_default": true,
  "sso_mapping_groups": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|name|string|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|assign_by_default|boolean|true|none|none|
|sso_mapping_groups|[string]|false|none|none|

<h2 id="tocS_GroupResponse">GroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupresponse"></a>
<a id="schema_GroupResponse"></a>
<a id="tocSgroupresponse"></a>
<a id="tocsgroupresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "name": "string",
  "state": 1,
  "assign_by_default": false,
  "sso_mapping_groups": [
    "string"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "group_permissions": [],
  "member_count": 0,
  "scim_managed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|name|string|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|assign_by_default|boolean|false|none|none|
|sso_mapping_groups|[string]|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|group_permissions|[[GroupPermission](#schemagrouppermission)]|true|read-only|none|
|member_count|integer|true|read-only|none|
|scim_managed|boolean|true|read-only|none|

<h2 id="tocS_GroupSCIM">GroupSCIM</h2>
<!-- backwards compatibility -->
<a id="schemagroupscim"></a>
<a id="schema_GroupSCIM"></a>
<a id="tocSgroupscim"></a>
<a id="tocsgroupscim"></a>

```json
{
  "id": "string",
  "externalId": "string",
  "displayName": "string",
  "members": [
    {
      "value": "string",
      "display": "string"
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string",
    "created": "string",
    "lastModified": "string"
  },
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:Group"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the group|
|externalId|string|false|none|The external ID of the group|
|displayName|string|true|none|The display name of the group|
|members|[[GroupMemberComponent](#schemagroupmembercomponent)]|false|none|The members of the group|
|meta|object|true|none|The metadata of the group|
|schemas|[object]|false|none|none|

<h2 id="tocS_HumanReadableDateStrategyTypeEnum">HumanReadableDateStrategyTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemahumanreadabledatestrategytypeenum"></a>
<a id="schema_HumanReadableDateStrategyTypeEnum"></a>
<a id="tocShumanreadabledatestrategytypeenum"></a>
<a id="tocshumanreadabledatestrategytypeenum"></a>

```json
"every_day"
```

* `every_day` - every_day
* `days_of_week` - days_of_week
* `custom_cron` - custom_cron
* `interval_cron` - interval_cron

<h2 id="tocS_HumanReadableTimeStrategTypeEnum">HumanReadableTimeStrategTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemahumanreadabletimestrategtypeenum"></a>
<a id="schema_HumanReadableTimeStrategTypeEnum"></a>
<a id="tocShumanreadabletimestrategtypeenum"></a>
<a id="tocshumanreadabletimestrategtypeenum"></a>

```json
"every_hour"
```

* `every_hour` - every_hour
* `at_exact_hours` - at_exact_hours

<h2 id="tocS_IPRestrictionCidr">IPRestrictionCidr</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictioncidr"></a>
<a id="schema_IPRestrictionCidr"></a>
<a id="tocSiprestrictioncidr"></a>
<a id="tocsiprestrictioncidr"></a>

```json
{
  "state": 1,
  "ip_restriction_rule_id": 0,
  "enabled": true,
  "cidr": "string",
  "cidr_ipv6": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|ip_restriction_rule_id|integer(int64)|true|none|none|
|enabled|boolean|true|none|none|
|cidr|string|true|none|none|
|cidr_ipv6|string|false|none|none|

<h2 id="tocS_IPRestrictionCidrRequestRequest">IPRestrictionCidrRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictioncidrrequestrequest"></a>
<a id="schema_IPRestrictionCidrRequestRequest"></a>
<a id="tocSiprestrictioncidrrequestrequest"></a>
<a id="tocsiprestrictioncidrrequestrequest"></a>

```json
{
  "state": 1,
  "cidr": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|cidr|string|true|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_IPRestrictionRequestRequest">IPRestrictionRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionrequestrequest"></a>
<a id="schema_IPRestrictionRequestRequest"></a>
<a id="tocSiprestrictionrequestrequest"></a>
<a id="tocsiprestrictionrequestrequest"></a>

```json
{
  "name": "string",
  "type": 1,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "cidr": "string",
      "id": 0
    }
  ],
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[TypeEdaEnum](#schematypeedaenum)|true|none|* `1` - ALLOW<br>* `2` - DENY|
|rule_set_enabled|boolean|true|none|none|
|account_id|integer(int64)|true|none|none|
|cidrs|[[IPRestrictionCidrRequestRequest](#schemaiprestrictioncidrrequestrequest)]|true|none|none|
|description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|

<h2 id="tocS_IPRestrictionRule">IPRestrictionRule</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionrule"></a>
<a id="schema_IPRestrictionRule"></a>
<a id="tocSiprestrictionrule"></a>
<a id="tocsiprestrictionrule"></a>

```json
{
  "name": "string",
  "type": 0,
  "state": 1,
  "ip_restriction_rule_set_id": 0,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "ip_restriction_rule_id": 0,
      "enabled": true,
      "cidr": "string",
      "cidr_ipv6": "string"
    }
  ],
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|integer|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|ip_restriction_rule_set_id|integer(int64)|true|none|none|
|rule_set_enabled|boolean|true|none|none|
|account_id|integer(int64)|true|none|none|
|cidrs|[[IPRestrictionCidr](#schemaiprestrictioncidr)]|false|none|none|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_IPRestrictionRuleEnveloped">IPRestrictionRuleEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionruleenveloped"></a>
<a id="schema_IPRestrictionRuleEnveloped"></a>
<a id="tocSiprestrictionruleenveloped"></a>
<a id="tocsiprestrictionruleenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "type": 0,
    "state": 1,
    "ip_restriction_rule_set_id": 0,
    "rule_set_enabled": true,
    "account_id": 0,
    "cidrs": [
      {
        "state": 1,
        "ip_restriction_rule_id": 0,
        "enabled": true,
        "cidr": "string",
        "cidr_ipv6": "string"
      }
    ],
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "enabled_for_service_tokens": true,
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IPRestrictionRuleResponse](#schemaiprestrictionruleresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_IPRestrictionRuleListEnveloped">IPRestrictionRuleListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionrulelistenveloped"></a>
<a id="schema_IPRestrictionRuleListEnveloped"></a>
<a id="tocSiprestrictionrulelistenveloped"></a>
<a id="tocsiprestrictionrulelistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "type": 0,
      "state": 1,
      "ip_restriction_rule_set_id": 0,
      "rule_set_enabled": true,
      "account_id": 0,
      "cidrs": [
        {
          "state": 1,
          "ip_restriction_rule_id": 0,
          "enabled": true,
          "cidr": "string",
          "cidr_ipv6": "string"
        }
      ],
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "enabled_for_service_tokens": true,
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IPRestrictionRuleResponse](#schemaiprestrictionruleresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_IPRestrictionRuleResponse">IPRestrictionRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionruleresponse"></a>
<a id="schema_IPRestrictionRuleResponse"></a>
<a id="tocSiprestrictionruleresponse"></a>
<a id="tocsiprestrictionruleresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": 0,
  "state": 1,
  "ip_restriction_rule_set_id": 0,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "ip_restriction_rule_id": 0,
      "enabled": true,
      "cidr": "string",
      "cidr_ipv6": "string"
    }
  ],
  "created_by_id": 0,
  "created_by_service_token_id": 0,
  "enabled_for_service_tokens": true,
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|name|string|false|none|none|
|type|integer|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|ip_restriction_rule_set_id|integer(int64)|false|none|none|
|rule_set_enabled|boolean|false|none|none|
|account_id|integer(int64)|false|none|none|
|cidrs|[[IPRestrictionCidr](#schemaiprestrictioncidr)]|false|none|none|
|created_by_id|integer(int64)|false|none|none|
|created_by_service_token_id|integer(int64)|false|none|none|
|enabled_for_service_tokens|boolean|true|read-only|none|
|description|string|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

<h2 id="tocS_IPRestrictionRuleSetEnveloped">IPRestrictionRuleSetEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionrulesetenveloped"></a>
<a id="schema_IPRestrictionRuleSetEnveloped"></a>
<a id="tocSiprestrictionrulesetenveloped"></a>
<a id="tocsiprestrictionrulesetenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "enabled": true,
    "state": 1,
    "enabled_for_service_tokens": true,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IPRestrictionRuleSetResponse](#schemaiprestrictionrulesetresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_IPRestrictionRuleSetResponse">IPRestrictionRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionrulesetresponse"></a>
<a id="schema_IPRestrictionRuleSetResponse"></a>
<a id="tocSiprestrictionrulesetresponse"></a>
<a id="tocsiprestrictionrulesetresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "enabled": true,
  "state": 1,
  "enabled_for_service_tokens": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|enabled|boolean|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|enabled_for_service_tokens|boolean|true|read-only|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

<h2 id="tocS_IPRestrictionSetRequestRequest">IPRestrictionSetRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionsetrequestrequest"></a>
<a id="schema_IPRestrictionSetRequestRequest"></a>
<a id="tocSiprestrictionsetrequestrequest"></a>
<a id="tocsiprestrictionsetrequestrequest"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|

<h2 id="tocS_IPRestrictionSetValidate">IPRestrictionSetValidate</h2>
<!-- backwards compatibility -->
<a id="schemaiprestrictionsetvalidate"></a>
<a id="schema_IPRestrictionSetValidate"></a>
<a id="tocSiprestrictionsetvalidate"></a>
<a id="tocsiprestrictionsetvalidate"></a>

```json
{
  "is_valid_for_admin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_valid_for_admin|boolean|true|none|none|

<h2 id="tocS_InviteUsersRequestRequest">InviteUsersRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemainviteusersrequestrequest"></a>
<a id="schema_InviteUsersRequestRequest"></a>
<a id="tocSinviteusersrequestrequest"></a>
<a id="tocsinviteusersrequestrequest"></a>

```json
{
  "id": 0,
  "email_addresses": [
    "string"
  ],
  "license_type": "developer",
  "group_ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|email_addresses|[string]|true|none|none|
|license_type|[LicenseTypeEnum](#schemalicensetypeenum)|true|none|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|group_ids|[integer(int64)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|license_type|developer|
|license_type|read_only|
|license_type|analyst|
|license_type|it|

<h2 id="tocS_InviteUsersResponse">InviteUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemainviteusersresponse"></a>
<a id="schema_InviteUsersResponse"></a>
<a id="tocSinviteusersresponse"></a>
<a id="tocsinviteusersresponse"></a>

```json
{
  "sent": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sent|[string]|false|none|none|

<h2 id="tocS_InviteUsersResponseEnveloped">InviteUsersResponseEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemainviteusersresponseenveloped"></a>
<a id="schema_InviteUsersResponseEnveloped"></a>
<a id="tocSinviteusersresponseenveloped"></a>
<a id="tocsinviteusersresponseenveloped"></a>

```json
{
  "data": {
    "sent": [
      "string"
    ]
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InviteUsersResponse](#schemainviteusersresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_JobDefinitionExecution">JobDefinitionExecution</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitionexecution"></a>
<a id="schema_JobDefinitionExecution"></a>
<a id="tocSjobdefinitionexecution"></a>
<a id="tocsjobdefinitionexecution"></a>

```json
{
  "timeout_seconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout_seconds|integer|true|none|none|

<h2 id="tocS_JobDefinitionSchedule">JobDefinitionSchedule</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitionschedule"></a>
<a id="schema_JobDefinitionSchedule"></a>
<a id="tocSjobdefinitionschedule"></a>
<a id="tocsjobdefinitionschedule"></a>

```json
{
  "cron": "string",
  "date": "every_day",
  "time": "every_hour"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|true|none|Cron syntax schedule for the job string|
|date|[HumanReadableDateStrategyTypeEnum](#schemahumanreadabledatestrategytypeenum)|true|none|* `every_day` - every_day<br>* `days_of_week` - days_of_week<br>* `custom_cron` - custom_cron<br>* `interval_cron` - interval_cron|
|time|[HumanReadableTimeStrategTypeEnum](#schemahumanreadabletimestrategtypeenum)|true|none|* `every_hour` - every_hour<br>* `at_exact_hours` - at_exact_hours|

#### Enumerated Values

|Property|Value|
|---|---|
|date|every_day|
|date|days_of_week|
|date|custom_cron|
|date|interval_cron|
|time|every_hour|
|time|at_exact_hours|

<h2 id="tocS_JobDefinitionSettings">JobDefinitionSettings</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitionsettings"></a>
<a id="schema_JobDefinitionSettings"></a>
<a id="tocSjobdefinitionsettings"></a>
<a id="tocsjobdefinitionsettings"></a>

```json
{
  "threads": 0,
  "target_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threads|integer|true|none|The maximum number of models to run in parallel in a single dbt run|
|target_name|string|true|none|Informational field that can be consumed in dbt project code with `{{ target.name }}`|

<h2 id="tocS_JobDefinitionTriggers">JobDefinitionTriggers</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitiontriggers"></a>
<a id="schema_JobDefinitionTriggers"></a>
<a id="tocSjobdefinitiontriggers"></a>
<a id="tocsjobdefinitiontriggers"></a>

```json
{
  "github_webhook": true,
  "schedule": true,
  "git_provider_webhook": true,
  "on_merge": true,
  "custom_branch_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github_webhook|boolean|true|none|none|
|schedule|boolean|true|none|none|
|git_provider_webhook|boolean|false|none|none|
|on_merge|boolean|false|none|none|
|custom_branch_only|boolean|false|none|(Deprecated)|

<h2 id="tocS_JobDefinitionV2">JobDefinitionV2</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitionv2"></a>
<a id="schema_JobDefinitionV2"></a>
<a id="tocSjobdefinitionv2"></a>
<a id="tocsjobdefinitionv2"></a>

```json
{
  "environment_id": 0,
  "account_id": 0,
  "project_id": 0,
  "name": "string",
  "description": "string",
  "generate_docs": true,
  "run_generate_sources": true,
  "state": 1,
  "dbt_version": "string",
  "triggers": {
    "github_webhook": true,
    "schedule": true,
    "git_provider_webhook": true,
    "on_merge": true,
    "custom_branch_only": true
  },
  "settings": {
    "threads": 0,
    "target_name": "string"
  },
  "execution": {
    "timeout_seconds": 0
  },
  "schedule": {
    "cron": "string",
    "date": "every_day",
    "time": "every_hour"
  },
  "execute_steps": [
    "string"
  ],
  "job_type": "ci",
  "triggers_on_draft_pr": false,
  "run_compare_changes": false,
  "compare_changes_flags": "--select state:modified",
  "run_lint": false,
  "errors_on_lint_failure": true,
  "deferring_environment_id": 0,
  "deferring_job_definition_id": 0,
  "cost_optimization_features": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment_id|integer(int64)|true|none|none|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|true|none|none|
|name|string|true|none|The name of the job|
|description|string|false|none|none|
|generate_docs|boolean|true|none|When true, `dbt docs generate` will be run at the end of all runs for this Job|
|run_generate_sources|boolean|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|dbt_version|string|false|none|When set, overrides the dbt_version specified in the Job's Environment|
|triggers|[JobDefinitionTriggers](#schemajobdefinitiontriggers)|false|none|none|
|settings|[JobDefinitionSettings](#schemajobdefinitionsettings)|true|none|none|
|execution|[JobDefinitionExecution](#schemajobdefinitionexecution)|true|none|none|
|schedule|[JobDefinitionSchedule](#schemajobdefinitionschedule)|false|none|none|
|execute_steps|[string]|false|none|A list of dbt commands to run|
|job_type|[JobTypeEnum](#schemajobtypeenum)|false|none|* `ci` - ci<br>* `scheduled` - scheduled<br>* `other` - other<br>* `merge` - merge<br>* `exposure_sync` - exposure_sync<br>* `adaptive` - adaptive<br>* `hybrid` - hybrid|
|triggers_on_draft_pr|boolean|false|none|none|
|run_compare_changes|boolean|false|none|none|
|compare_changes_flags|string|false|none|dbt syntax flags to be used for compare changes|
|run_lint|boolean|false|none|none|
|errors_on_lint_failure|boolean|false|none|none|
|deferring_environment_id|integer(int64)|false|none|none|
|deferring_job_definition_id|integer(int64)|false|none|none|
|cost_optimization_features|[string]|false|none|List of cost optimization features to enable for this job.<br>            <br/><br/><br>            <b>Valid values:</b><br>            <ul><br>              <li>"state_aware_orchestration" - Enable orchestration that adapts to state changes (Private beta, requires fusion)</li><br>              <li>"efficient_testing" - Aggregate generic tests into a single query and reuse redundant tests (Private beta, requires fusion)</li><br>              <li>"dbt_state" - Enable orchestration that adapts to state changes (does not require fusion)</li><br>              <li>"inherit_environment" - Inherit this job's dbt State setting from its environment. Must be sent on its own; it cannot be combined with any other value.</li><br>            </ul><br>            <b>Example:</b> ["dbt_state"]<br>            |

#### Enumerated Values

|Property|Value|
|---|---|
|job_type|ci|
|job_type|scheduled|
|job_type|other|
|job_type|merge|
|job_type|exposure_sync|
|job_type|adaptive|
|job_type|hybrid|

<h2 id="tocS_JobTypeEnum">JobTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemajobtypeenum"></a>
<a id="schema_JobTypeEnum"></a>
<a id="tocSjobtypeenum"></a>
<a id="tocsjobtypeenum"></a>

```json
"ci"
```

* `ci` - ci
* `scheduled` - scheduled
* `other` - other
* `merge` - merge
* `exposure_sync` - exposure_sync
* `adaptive` - adaptive
* `hybrid` - hybrid

<h2 id="tocS_LicenseMapEnveloped">LicenseMapEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemalicensemapenveloped"></a>
<a id="schema_LicenseMapEnveloped"></a>
<a id="tocSlicensemapenveloped"></a>
<a id="tocslicensemapenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "license_type": "developer",
    "state": 1,
    "sso_license_mapping_groups": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[LicenseMapResponse](#schemalicensemapresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_LicenseMapListEnveloped">LicenseMapListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemalicensemaplistenveloped"></a>
<a id="schema_LicenseMapListEnveloped"></a>
<a id="tocSlicensemaplistenveloped"></a>
<a id="tocslicensemaplistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "license_type": "developer",
      "state": 1,
      "sso_license_mapping_groups": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseMapResponse](#schemalicensemapresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_LicenseMapRequest">LicenseMapRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicensemaprequest"></a>
<a id="schema_LicenseMapRequest"></a>
<a id="tocSlicensemaprequest"></a>
<a id="tocslicensemaprequest"></a>

```json
{
  "account_id": 0,
  "license_type": "developer",
  "state": 1,
  "sso_license_mapping_groups": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|license_type|[LicenseTypeEnum](#schemalicensetypeenum)|true|none|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|sso_license_mapping_groups|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|license_type|developer|
|license_type|read_only|
|license_type|analyst|
|license_type|it|

<h2 id="tocS_LicenseMapResponse">LicenseMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemalicensemapresponse"></a>
<a id="schema_LicenseMapResponse"></a>
<a id="tocSlicensemapresponse"></a>
<a id="tocslicensemapresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "license_type": "developer",
  "state": 1,
  "sso_license_mapping_groups": [
    "string"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|license_type|[LicenseTypeEnum](#schemalicensetypeenum)|false|none|* `developer` - DEVELOPER<br>* `read_only` - READ_ONLY<br>* `analyst` - ANALYST<br>* `it` - IT|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|sso_license_mapping_groups|[string]|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|license_type|developer|
|license_type|read_only|
|license_type|analyst|
|license_type|it|

<h2 id="tocS_LicenseType">LicenseType</h2>
<!-- backwards compatibility -->
<a id="schemalicensetype"></a>
<a id="schema_LicenseType"></a>
<a id="tocSlicensetype"></a>
<a id="tocslicensetype"></a>

```json
"developer"
```

An enumeration.

<h2 id="tocS_LicenseTypeEnum">LicenseTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemalicensetypeenum"></a>
<a id="schema_LicenseTypeEnum"></a>
<a id="tocSlicensetypeenum"></a>
<a id="tocslicensetypeenum"></a>

```json
"developer"
```

* `developer` - DEVELOPER
* `read_only` - READ_ONLY
* `analyst` - ANALYST
* `it` - IT

<h2 id="tocS_LineageIntegration">LineageIntegration</h2>
<!-- backwards compatibility -->
<a id="schemalineageintegration"></a>
<a id="schema_LineageIntegration"></a>
<a id="tocSlineageintegration"></a>
<a id="tocslineageintegration"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "project_id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The integration's ID|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the integration is associated with|
|project_id|integer(int64)|true|none|The project the integration is associated with|
|name|string|true|none|The name of the integration|

<h2 id="tocS_LineageIntegrationCollection">LineageIntegrationCollection</h2>
<!-- backwards compatibility -->
<a id="schemalineageintegrationcollection"></a>
<a id="schema_LineageIntegrationCollection"></a>
<a id="tocSlineageintegrationcollection"></a>
<a id="tocslineageintegrationcollection"></a>

```json
{
  "collections": [
    {
      "identifier": "string",
      "name": "string",
      "type": "folder",
      "watching": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[WatchSelectionItem](#schemawatchselectionitem)]|true|none|List of collections|

<h2 id="tocS_LineageIntegrationConfigSchema">LineageIntegrationConfigSchema</h2>
<!-- backwards compatibility -->
<a id="schemalineageintegrationconfigschema"></a>
<a id="schema_LineageIntegrationConfigSchema"></a>
<a id="tocSlineageintegrationconfigschema"></a>
<a id="tocslineageintegrationconfigschema"></a>

```json
{}
```

<h2 id="tocS_LineageIntegrationType">LineageIntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemalineageintegrationtype"></a>
<a id="schema_LineageIntegrationType"></a>
<a id="tocSlineageintegrationtype"></a>
<a id="tocslineageintegrationtype"></a>

```json
"tableau"
```

An enumeration.

<h2 id="tocS_ListGroupSCIMResponse">ListGroupSCIMResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupscimresponse"></a>
<a id="schema_ListGroupSCIMResponse"></a>
<a id="tocSlistgroupscimresponse"></a>
<a id="tocslistgroupscimresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "externalId": "string",
      "displayName": "string",
      "members": [
        {
          "value": "string",
          "display": "string"
        }
      ],
      "meta": {
        "resourceType": "string",
        "location": "string",
        "created": "string",
        "lastModified": "string"
      },
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ]
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[GroupSCIM](#schemagroupscim)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListLineageIntegrationCollectionResponse">ListLineageIntegrationCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlineageintegrationcollectionresponse"></a>
<a id="schema_ListLineageIntegrationCollectionResponse"></a>
<a id="tocSlistlineageintegrationcollectionresponse"></a>
<a id="tocslistlineageintegrationcollectionresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "collections": [
        {
          "identifier": "string",
          "name": "string",
          "type": "folder",
          "watching": true
        }
      ]
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[LineageIntegrationCollection](#schemalineageintegrationcollection)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListLineageIntegrationResponse">ListLineageIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlineageintegrationresponse"></a>
<a id="schema_ListLineageIntegrationResponse"></a>
<a id="tocSlistlineageintegrationresponse"></a>
<a id="tocslistlineageintegrationresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "project_id": 0,
      "name": "string"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[LineageIntegration](#schemalineageintegration)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListSCIMTokenResponse">ListSCIMTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscimtokenresponse"></a>
<a id="schema_ListSCIMTokenResponse"></a>
<a id="tocSlistscimtokenresponse"></a>
<a id="tocslistscimtokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "last_used": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[SCIMToken](#schemascimtoken)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListServiceTokenResponse">ListServiceTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicetokenresponse"></a>
<a id="schema_ListServiceTokenResponse"></a>
<a id="tocSlistservicetokenresponse"></a>
<a id="tocslistservicetokenresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "uid": "string",
      "name": "string",
      "state": 0,
      "permission_grants": [
        {
          "permission_set": "account_admin",
          "project_id": 0,
          "writable_environment_categories": [
            "string"
          ]
        }
      ],
      "last_used": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z",
      "semantic_layer_credentials": [
        {}
      ],
      "metadata_only": false,
      "webhooks_only": false
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[ServiceToken](#schemaservicetoken)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListUserSCIMResponse">ListUserSCIMResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserscimresponse"></a>
<a id="schema_ListUserSCIMResponse"></a>
<a id="tocSlistuserscimresponse"></a>
<a id="tocslistuserscimresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "externalId": "12uhdfs0",
      "userName": "string",
      "active": true,
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
      ],
      "name": {
        "givenName": "John",
        "familyName": "Smith"
      },
      "emails": [
        {
          "value": "john.smith@example.com",
          "primary": "True"
        }
      ],
      "groups": [
        {
          "value": "1234",
          "externalId": "group-1234",
          "display": "Example Group"
        }
      ],
      "meta": {
        "resourceType": "User",
        "created": "2024-01-01T00:00:00+00:00",
        "lastModified": "2024-01-01T00:00:00+00:00",
        "location": "/scim/v2/Users/1111"
      },
      "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
        "licenseType": "developer"
      }
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[UserSCIM](#schemauserscim)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ListWebhooksReceiptsResponseEnvelope">ListWebhooksReceiptsResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksreceiptsresponseenvelope"></a>
<a id="schema_ListWebhooksReceiptsResponseEnvelope"></a>
<a id="tocSlistwebhooksreceiptsresponseenvelope"></a>
<a id="tocslistwebhooksreceiptsresponseenvelope"></a>

```json
{
  "data": [
    {
      "id": "string",
      "event_id": "string",
      "subscription_id": "string",
      "dispatched_at": "string",
      "http_status_code": "string",
      "error_info": "string",
      "request_body": "string",
      "request_headers": "string",
      "response_body": "string"
    }
  ],
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Receipt](#schemareceipt)]|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_LockCauseEnum">LockCauseEnum</h2>
<!-- backwards compatibility -->
<a id="schemalockcauseenum"></a>
<a id="schema_LockCauseEnum"></a>
<a id="tocSlockcauseenum"></a>
<a id="tocslockcauseenum"></a>

```json
"trial_expired"
```

* `trial_expired` - TRIAL_EXPIRED
* `cancelled` - CANCELLED
* `unpaid` - UNPAID
* `provisioned_team_annual` - PROVISIONED_TEAM_ANNUAL
* `other` - OTHER
* `migrated` - MIGRATED
* `workshop` - WORKSHOP

<h2 id="tocS_MetaComponent">MetaComponent</h2>
<!-- backwards compatibility -->
<a id="schemametacomponent"></a>
<a id="schema_MetaComponent"></a>
<a id="tocSmetacomponent"></a>
<a id="tocsmetacomponent"></a>

```json
{
  "resourceType": "string",
  "location": "string",
  "created": "string",
  "lastModified": "string"
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|true|none|The resource type of the metadata|
|location|string|true|none|The location of the resource|
|created|string|false|none|The date and time the resource was created|
|lastModified|string|false|none|The date and time the resource was last modified|

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
"odbc"
```

An enumeration.

<h2 id="tocS_NotFound">NotFound</h2>
<!-- backwards compatibility -->
<a id="schemanotfound"></a>
<a id="schema_NotFound"></a>
<a id="tocSnotfound"></a>
<a id="tocsnotfound"></a>

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "status": {
    "code": 404,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object \| null|false|none|none|
|status|[NotFoundStatus](#schemanotfoundstatus)|true|none|none|

<h2 id="tocS_NotFoundStatus">NotFoundStatus</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundstatus"></a>
<a id="schema_NotFoundStatus"></a>
<a id="tocSnotfoundstatus"></a>
<a id="tocsnotfoundstatus"></a>

```json
{
  "code": 404,
  "is_success": true,
  "user_message": "string",
  "developer_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|is_success|boolean|true|none|Whether the request was successful or not|
|user_message|string|true|none|End-user friendly success or error message|
|developer_message|string|true|none|Developer friendly success or error message|

<h2 id="tocS_OAuthConfigurationEnveloped">OAuthConfigurationEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfigurationenveloped"></a>
<a id="schema_OAuthConfigurationEnveloped"></a>
<a id="tocSoauthconfigurationenveloped"></a>
<a id="tocsoauthconfigurationenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "type": "string",
    "name": "string",
    "extra_data": {
      "application_id_uri": "string"
    },
    "client_id": "string",
    "authorize_url": "string",
    "token_url": "string",
    "redirect_uri": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OAuthConfigurationResponse](#schemaoauthconfigurationresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_OAuthConfigurationListEnveloped">OAuthConfigurationListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfigurationlistenveloped"></a>
<a id="schema_OAuthConfigurationListEnveloped"></a>
<a id="tocSoauthconfigurationlistenveloped"></a>
<a id="tocsoauthconfigurationlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "type": "string",
      "name": "string",
      "extra_data": {
        "application_id_uri": "string"
      },
      "client_id": "string",
      "authorize_url": "string",
      "token_url": "string",
      "redirect_uri": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OAuthConfigurationResponse](#schemaoauthconfigurationresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_OAuthConfigurationRequest">OAuthConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfigurationrequest"></a>
<a id="schema_OAuthConfigurationRequest"></a>
<a id="tocSoauthconfigurationrequest"></a>
<a id="tocsoauthconfigurationrequest"></a>

```json
{
  "account_id": 0,
  "type": "string",
  "name": "string",
  "extra_data": {
    "application_id_uri": "string"
  },
  "client_id": "string",
  "client_secret": "string",
  "authorize_url": "string",
  "token_url": "string",
  "redirect_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|type|string|true|none|none|
|name|string|false|none|none|
|extra_data|[EntraExtraDataRequest](#schemaentraextradatarequest)|false|none|none|
|client_id|string|false|none|none|
|client_secret|string|false|write-only|none|
|authorize_url|string|false|none|none|
|token_url|string|false|none|none|
|redirect_uri|string|false|none|none|

<h2 id="tocS_OAuthConfigurationResponse">OAuthConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfigurationresponse"></a>
<a id="schema_OAuthConfigurationResponse"></a>
<a id="tocSoauthconfigurationresponse"></a>
<a id="tocsoauthconfigurationresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "type": "string",
  "name": "string",
  "extra_data": {
    "application_id_uri": "string"
  },
  "client_id": "string",
  "authorize_url": "string",
  "token_url": "string",
  "redirect_uri": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|type|string|false|none|none|
|name|string|false|none|none|
|extra_data|[EntraExtraData](#schemaentraextradata)|false|none|none|
|client_id|string|false|none|none|
|authorize_url|string|false|none|none|
|token_url|string|false|none|none|
|redirect_uri|string|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

<h2 id="tocS_OptionalApacheSparkConnection">OptionalApacheSparkConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalapachesparkconnection"></a>
<a id="schema_OptionalApacheSparkConnection"></a>
<a id="tocSoptionalapachesparkconnection"></a>
<a id="tocsoptionalapachesparkconnection"></a>

```json
{
  "host": "string",
  "cluster": "string",
  "method": "http",
  "connect_timeout": 0,
  "connect_retries": 0,
  "organization": "string",
  "user": "string",
  "auth": "string",
  "kerberos_service_name": "string",
  "port": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|cluster|string|false|none|none|
|method|[ConnectionMethod](#schemaconnectionmethod)|false|none|An enumeration.|
|connect_timeout|integer|false|none|none|
|connect_retries|integer|false|none|none|
|organization|string|false|none|none|
|user|string|false|none|none|
|auth|string|false|none|none|
|kerberos_service_name|string|false|none|none|
|port|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|http|
|method|thrift|

<h2 id="tocS_OptionalAthenaConnection">OptionalAthenaConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalathenaconnection"></a>
<a id="schema_OptionalAthenaConnection"></a>
<a id="tocSoptionalathenaconnection"></a>
<a id="tocsoptionalathenaconnection"></a>

```json
{
  "region_name": "string",
  "database": "string",
  "work_group": "string",
  "spark_work_group": "string",
  "s3_staging_dir": "string",
  "s3_data_dir": "string",
  "s3_data_naming": "string",
  "s3_tmp_table_dir": "string",
  "poll_interval": 0,
  "num_retries": 0,
  "num_boto3_retries": 0,
  "num_iceberg_retries": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region_name|string|false|none|none|
|database|string|false|none|none|
|work_group|string|false|none|none|
|spark_work_group|string|false|none|none|
|s3_staging_dir|string|false|none|none|
|s3_data_dir|string|false|none|none|
|s3_data_naming|string|false|none|none|
|s3_tmp_table_dir|string|false|none|none|
|poll_interval|integer|false|none|none|
|num_retries|integer|false|none|none|
|num_boto3_retries|integer|false|none|none|
|num_iceberg_retries|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalBigqueryConnection">OptionalBigqueryConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalbigqueryconnection"></a>
<a id="schema_OptionalBigqueryConnection"></a>
<a id="tocSoptionalbigqueryconnection"></a>
<a id="tocsoptionalbigqueryconnection"></a>

```json
{
  "project_id": "string",
  "timeout_seconds": 0,
  "private_key_id": "string",
  "private_key": "password",
  "client_email": "string",
  "client_id": "string",
  "auth_uri": "string",
  "token_uri": "string",
  "auth_provider_x509_cert_url": "string",
  "client_x509_cert_url": "string",
  "priority": "interactive",
  "scopes": [
    "string"
  ],
  "location": "string",
  "maximum_bytes_billed": 0,
  "execution_project": "string",
  "impersonate_service_account": "string",
  "retries": 0,
  "job_retry_deadline_seconds": 0,
  "job_creation_timeout_seconds": 0,
  "application_id": "password",
  "application_secret": "password",
  "gcs_bucket": "string",
  "dataproc_region": "string",
  "dataproc_cluster_name": "string",
  "api_endpoint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|none|none|
|timeout_seconds|integer|false|none|none|
|private_key_id|string|false|none|none|
|private_key|string(password)|false|write-only|none|
|client_email|string|false|none|none|
|client_id|string|false|none|none|
|auth_uri|string|false|none|none|
|token_uri|string|false|none|none|
|auth_provider_x509_cert_url|string|false|none|none|
|client_x509_cert_url|string|false|none|none|
|priority|[schemas__adapters__bigquery__v0__connection_schema__Priority](#schemaschemas__adapters__bigquery__v0__connection_schema__priority)|false|none|An enumeration.|
|scopes|[string]|false|none|none|
|location|string|false|none|none|
|maximum_bytes_billed|integer|false|none|none|
|execution_project|string|false|none|none|
|impersonate_service_account|string|false|none|none|
|retries|integer|false|none|none|
|job_retry_deadline_seconds|integer|false|none|none|
|job_creation_timeout_seconds|integer|false|none|none|
|application_id|string(password)|false|write-only|none|
|application_secret|string(password)|false|write-only|none|
|gcs_bucket|string|false|none|none|
|dataproc_region|string|false|none|none|
|dataproc_cluster_name|string|false|none|none|
|api_endpoint|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|interactive|
|priority|batch|

<h2 id="tocS_OptionalBigqueryConnectionV1">OptionalBigqueryConnectionV1</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalbigqueryconnectionv1"></a>
<a id="schema_OptionalBigqueryConnectionV1"></a>
<a id="tocSoptionalbigqueryconnectionv1"></a>
<a id="tocsoptionalbigqueryconnectionv1"></a>

```json
{
  "deployment_env_auth_type": "service-account-json",
  "project_id": "string",
  "private_key_id": "string",
  "private_key": "password",
  "client_email": "string",
  "client_id": "string",
  "auth_uri": "string",
  "token_uri": "string",
  "auth_provider_x509_cert_url": "string",
  "client_x509_cert_url": "string",
  "job_execution_timeout_seconds": 0,
  "priority": "interactive",
  "scopes": [
    "string"
  ],
  "location": "string",
  "maximum_bytes_billed": 0,
  "execution_project": "string",
  "impersonate_service_account": "string",
  "retries": 0,
  "job_retry_deadline_seconds": 0,
  "job_creation_timeout_seconds": 0,
  "application_id": "password",
  "application_secret": "password",
  "gcs_bucket": "string",
  "dataproc_region": "string",
  "dataproc_cluster_name": "string",
  "api_endpoint": "string",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment_env_auth_type|[DeploymentEnvironmentAuthType](#schemadeploymentenvironmentauthtype)|false|none|An enumeration.|
|project_id|string|false|none|none|
|private_key_id|string|false|none|none|
|private_key|string(password)|false|write-only|none|
|client_email|string|false|none|none|
|client_id|string|false|none|none|
|auth_uri|string|false|none|none|
|token_uri|string|false|none|none|
|auth_provider_x509_cert_url|string|false|none|none|
|client_x509_cert_url|string|false|none|none|
|job_execution_timeout_seconds|integer|false|none|none|
|priority|[schemas__adapters__bigquery__v1__connection_schema__Priority](#schemaschemas__adapters__bigquery__v1__connection_schema__priority)|false|none|An enumeration.|
|scopes|[string]|false|none|none|
|location|string|false|none|none|
|maximum_bytes_billed|integer|false|none|none|
|execution_project|string|false|none|none|
|impersonate_service_account|string|false|none|none|
|retries|integer|false|none|none|
|job_retry_deadline_seconds|integer|false|none|none|
|job_creation_timeout_seconds|integer|false|none|none|
|application_id|string(password)|false|write-only|none|
|application_secret|string(password)|false|write-only|none|
|gcs_bucket|string|false|none|none|
|dataproc_region|string|false|none|none|
|dataproc_cluster_name|string|false|none|none|
|api_endpoint|string|false|none|none|
|adapter_id|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|deployment_env_auth_type|service-account-json|
|deployment_env_auth_type|external-oauth-wif|
|priority|interactive|
|priority|batch|

<h2 id="tocS_OptionalClickHouseConnection">OptionalClickHouseConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalclickhouseconnection"></a>
<a id="schema_OptionalClickHouseConnection"></a>
<a id="tocSoptionalclickhouseconnection"></a>
<a id="tocsoptionalclickhouseconnection"></a>

```json
{
  "host": "string",
  "port": 0,
  "database": "string",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|port|integer|false|none|none|
|database|string|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalDatabricksConnection">OptionalDatabricksConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionaldatabricksconnection"></a>
<a id="schema_OptionalDatabricksConnection"></a>
<a id="tocSoptionaldatabricksconnection"></a>
<a id="tocsoptionaldatabricksconnection"></a>

```json
{
  "host": "string",
  "http_path": "string",
  "catalog": "string",
  "client_id": "password",
  "client_secret": "password",
  "scopes": [
    "string"
  ],
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|http_path|string|false|none|none|
|catalog|string|false|none|none|
|client_id|string(password)|false|write-only|none|
|client_secret|string(password)|false|write-only|none|
|scopes|[string]|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalDatabricksSparkConnection">OptionalDatabricksSparkConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionaldatabrickssparkconnection"></a>
<a id="schema_OptionalDatabricksSparkConnection"></a>
<a id="tocSoptionaldatabrickssparkconnection"></a>
<a id="tocsoptionaldatabrickssparkconnection"></a>

```json
{
  "host": "string",
  "method": "odbc",
  "port": 0,
  "cluster": "string",
  "endpoint": "string",
  "driver": "string",
  "organization": "string",
  "user": "string",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|method|[Method](#schemamethod)|false|none|An enumeration.|
|port|integer|false|none|none|
|cluster|string|false|none|none|
|endpoint|string|false|none|none|
|driver|string|false|none|none|
|organization|string|false|none|none|
|user|string|false|none|none|
|adapter_id|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|odbc|

<h2 id="tocS_OptionalFabricConnection">OptionalFabricConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalfabricconnection"></a>
<a id="schema_OptionalFabricConnection"></a>
<a id="tocSoptionalfabricconnection"></a>
<a id="tocsoptionalfabricconnection"></a>

```json
{
  "server": "string",
  "database": "string",
  "driver": "string",
  "port": 0,
  "retries": 0,
  "login_timeout": 0,
  "query_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|string|false|none|none|
|database|string|false|none|none|
|driver|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|
|login_timeout|integer|false|none|none|
|query_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalLineageIntegrationConfigSchema">OptionalLineageIntegrationConfigSchema</h2>
<!-- backwards compatibility -->
<a id="schemaoptionallineageintegrationconfigschema"></a>
<a id="schema_OptionalLineageIntegrationConfigSchema"></a>
<a id="tocSoptionallineageintegrationconfigschema"></a>
<a id="tocsoptionallineageintegrationconfigschema"></a>

```json
{}
```

<h2 id="tocS_OptionalPostgresConnection">OptionalPostgresConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalpostgresconnection"></a>
<a id="schema_OptionalPostgresConnection"></a>
<a id="tocSoptionalpostgresconnection"></a>
<a id="tocsoptionalpostgresconnection"></a>

```json
{
  "hostname": "string",
  "dbname": "string",
  "port": 0,
  "retries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|dbname|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|

<h2 id="tocS_OptionalRedshiftConnection">OptionalRedshiftConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalredshiftconnection"></a>
<a id="schema_OptionalRedshiftConnection"></a>
<a id="tocSoptionalredshiftconnection"></a>
<a id="tocsoptionalredshiftconnection"></a>

```json
{
  "hostname": "string",
  "dbname": "string",
  "port": 0,
  "retries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|dbname|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|

<h2 id="tocS_OptionalSalesforceConnection">OptionalSalesforceConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalsalesforceconnection"></a>
<a id="schema_OptionalSalesforceConnection"></a>
<a id="tocSoptionalsalesforceconnection"></a>
<a id="tocsoptionalsalesforceconnection"></a>

```json
{
  "login_url": "string",
  "database": "string",
  "data_transform_run_timeout": 0,
  "auth_type": "jwt_bearer",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|login_url|string|false|none|none|
|database|string|false|none|none|
|data_transform_run_timeout|integer|false|none|none|
|auth_type|[schemas__adapters__salesforce__connection_schema__AuthType](#schemaschemas__adapters__salesforce__connection_schema__authtype)|false|none|An enumeration.|
|adapter_id|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|jwt_bearer|

<h2 id="tocS_OptionalSnowflakeConnection">OptionalSnowflakeConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalsnowflakeconnection"></a>
<a id="schema_OptionalSnowflakeConnection"></a>
<a id="tocSoptionalsnowflakeconnection"></a>
<a id="tocsoptionalsnowflakeconnection"></a>

```json
{
  "account": "string",
  "database": "string",
  "warehouse": "string",
  "client_session_keep_alive": true,
  "role": "string",
  "allow_sso": true,
  "oauth_client_id": "password",
  "oauth_client_secret": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|none|
|database|string|false|none|none|
|warehouse|string|false|none|none|
|client_session_keep_alive|boolean|false|none|none|
|role|string|false|none|none|
|allow_sso|boolean|false|none|none|
|oauth_client_id|string(password)|false|write-only|none|
|oauth_client_secret|string(password)|false|write-only|none|

<h2 id="tocS_OptionalSynapseConnection">OptionalSynapseConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalsynapseconnection"></a>
<a id="schema_OptionalSynapseConnection"></a>
<a id="tocSoptionalsynapseconnection"></a>
<a id="tocsoptionalsynapseconnection"></a>

```json
{
  "host": "string",
  "database": "string",
  "driver": "string",
  "port": 0,
  "retries": 0,
  "login_timeout": 0,
  "query_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|database|string|false|none|none|
|driver|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|
|login_timeout|integer|false|none|none|
|query_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalTeradataConnection">OptionalTeradataConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalteradataconnection"></a>
<a id="schema_OptionalTeradataConnection"></a>
<a id="tocSoptionalteradataconnection"></a>
<a id="tocsoptionalteradataconnection"></a>

```json
{
  "port": "string",
  "tmode": "string",
  "host": "string",
  "retries": 0,
  "request_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|string|false|none|none|
|tmode|string|false|none|none|
|host|string|false|none|none|
|retries|integer|false|none|none|
|request_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_OptionalTrinoConnection">OptionalTrinoConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoptionaltrinoconnection"></a>
<a id="schema_OptionalTrinoConnection"></a>
<a id="tocSoptionaltrinoconnection"></a>
<a id="tocsoptionaltrinoconnection"></a>

```json
{
  "host": "string",
  "method": "string",
  "port": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|none|
|method|string|false|none|none|
|port|integer|false|none|none|
|adapter_id|integer(int64)|false|none|none|

<h2 id="tocS_PaginatedWebhooksEvents">PaginatedWebhooksEvents</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwebhooksevents"></a>
<a id="schema_PaginatedWebhooksEvents"></a>
<a id="tocSpaginatedwebhooksevents"></a>
<a id="tocspaginatedwebhooksevents"></a>

```json
{
  "data": [
    {
      "id": "string",
      "subscription_id": "string",
      "account_identifier": "string",
      "job_id": "string",
      "trigger_event_type": "string",
      "payload": "string",
      "http_status_code": "string",
      "account_id": "string"
    }
  ],
  "status": {
    "code": 0
  },
  "extra": {
    "pagination": {
      "total_count": 0,
      "count": 0
    },
    "filters": {
      "offset": 0,
      "limit": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Event](#schemaevent)]|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|
|extra|[PaginationExtra](#schemapaginationextra)|true|none|none|

<h2 id="tocS_PaginatedWebhooksSubscriptions">PaginatedWebhooksSubscriptions</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwebhookssubscriptions"></a>
<a id="schema_PaginatedWebhooksSubscriptions"></a>
<a id="tocSpaginatedwebhookssubscriptions"></a>
<a id="tocspaginatedwebhookssubscriptions"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "event_types": [
        null
      ],
      "job_ids": [
        0
      ],
      "client_url": "string",
      "active": true,
      "http_status_code": "string",
      "dispatched_at": "string",
      "deactivate_reason": "string",
      "account_id": 0,
      "account_identifier": "string"
    }
  ],
  "status": {
    "code": 0
  },
  "extra": {
    "pagination": {
      "total_count": 0,
      "count": 0
    },
    "filters": {
      "offset": 0,
      "limit": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Subscription](#schemasubscription)]|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|
|extra|[PaginationExtra](#schemapaginationextra)|true|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "total_count": 0,
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_count|integer|true|none|none|
|count|integer|true|none|none|

<h2 id="tocS_PaginationExtra">PaginationExtra</h2>
<!-- backwards compatibility -->
<a id="schemapaginationextra"></a>
<a id="schema_PaginationExtra"></a>
<a id="tocSpaginationextra"></a>
<a id="tocspaginationextra"></a>

```json
{
  "pagination": {
    "total_count": 0,
    "count": 0
  },
  "filters": {
    "offset": 0,
    "limit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|none|
|filters|[Filters](#schemafilters)|true|none|none|

<h2 id="tocS_PatchGroupSCIMRequestRequest">PatchGroupSCIMRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchgroupscimrequestrequest"></a>
<a id="schema_PatchGroupSCIMRequestRequest"></a>
<a id="tocSpatchgroupscimrequestrequest"></a>
<a id="tocspatchgroupscimrequestrequest"></a>

```json
{
  "Operations": [
    {
      "op": {},
      "path": "string",
      "value": null
    }
  ],
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ]
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|[[PatchOperation](#schemapatchoperation)]|true|none|The operations to perform|
|schemas|[object]|false|none|none|

<h2 id="tocS_PatchLineageIntegrationRequest">PatchLineageIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchlineageintegrationrequest"></a>
<a id="schema_PatchLineageIntegrationRequest"></a>
<a id="tocSpatchlineageintegrationrequest"></a>
<a id="tocspatchlineageintegrationrequest"></a>

```json
{
  "name": {},
  "account_id": 0,
  "project_id": 0,
  "config": {}
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|The name of the integration|
|account_id|integer(int64)|false|none|The account the integration is associated with|
|project_id|integer(int64)|false|none|The project the integration is associated with|
|config|object|false|none|The integration configuration for this type of integration|

<h2 id="tocS_PatchOp">PatchOp</h2>
<!-- backwards compatibility -->
<a id="schemapatchop"></a>
<a id="schema_PatchOp"></a>
<a id="tocSpatchop"></a>
<a id="tocspatchop"></a>

```json
"add"
```

An enumeration.

<h2 id="tocS_PatchOperation">PatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemapatchoperation"></a>
<a id="schema_PatchOperation"></a>
<a id="tocSpatchoperation"></a>
<a id="tocspatchoperation"></a>

```json
{
  "op": {},
  "path": "string",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|object|true|none|The operation type|
|path|string|false|none|The target [sub]attribute of the operation|
|value|object|false|none|The value used by the operation|

<h2 id="tocS_PermissionSetEnum">PermissionSetEnum</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetenum"></a>
<a id="schema_PermissionSetEnum"></a>
<a id="tocSpermissionsetenum"></a>
<a id="tocspermissionsetenum"></a>

```json
"account_admin"
```

* `account_admin` - ACCOUNT_ADMIN
* `account_viewer` - ACCOUNT_VIEWER
* `admin` - ADMIN
* `analyst` - ANALYST
* `analyst_read` - ANALYST_READ
* `billing_admin` - BILLING_ADMIN
* `cost_insights_admin` - COST_INSIGHTS_ADMIN
* `cost_insights_viewer` - COST_INSIGHTS_VIEWER
* `cost_management_admin` - COST_MANAGEMENT_ADMIN
* `cost_management_viewer` - COST_MANAGEMENT_VIEWER
* `database_admin` - DATABASE_ADMIN
* `developer` - DEVELOPER
* `fusion_admin` - V2_MIGRATION_ADMIN
* `git_admin` - GIT_ADMIN
* `job_admin` - JOB_ADMIN
* `job_creator` - JOB_CREATOR
* `job_runner` - JOB_RUNNER
* `job_viewer` - JOB_VIEWER
* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS
* `member` - MEMBER
* `metadata_only` - METADATA_ONLY
* `notification_manager` - NOTIFICATION_MANAGER
* `owner` - OWNER
* `project_creator` - PROJECT_CREATOR
* `readonly` - READONLY
* `scim_only` - SCIM_ONLY
* `security_admin` - SECURITY_ADMIN
* `semantic_layer_only` - SEMANTIC_LAYER_ONLY
* `stakeholder` - STAKEHOLDER
* `team_admin` - TEAM_ADMIN
* `webhooks_only` - WEBHOOKS_ONLY

<h2 id="tocS_PlanEnum">PlanEnum</h2>
<!-- backwards compatibility -->
<a id="schemaplanenum"></a>
<a id="schema_PlanEnum"></a>
<a id="tocSplanenum"></a>
<a id="tocsplanenum"></a>

```json
"cancelled"
```

* `cancelled` - CANCELLED
* `cancelled_2022` - CANCELLED_2022
* `cancelled_2025` - CANCELLED_2025
* `developer` - DEVELOPER
* `developer_2022` - DEVELOPER_2022
* `enterprise` - ENTERPRISE
* `enterprise_2025` - ENTERPRISE_2025
* `enterprise_plus_2025` - ENTERPRISE_PLUS_2025
* `free` - FREE
* `starter_2025` - STARTER_2025
* `team` - TEAM
* `team_2022` - TEAM_2022
* `team_annual` - TEAM_ANNUAL
* `trial` - TRIAL
* `trial_2022` - TRIAL_2022
* `trial_2025` - TRIAL_2025
* `usage_2026` - USAGE_2026
* `usage_managed_2026` - USAGE_MANAGED_2026

<h2 id="tocS_PostLineageIntegrationRequest">PostLineageIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostlineageintegrationrequest"></a>
<a id="schema_PostLineageIntegrationRequest"></a>
<a id="tocSpostlineageintegrationrequest"></a>
<a id="tocspostlineageintegrationrequest"></a>

```json
{
  "name": {},
  "account_id": 0,
  "project_id": 0,
  "config": {}
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|The name of the integration|
|account_id|integer(int64)|true|none|The account the integration is associated with|
|project_id|integer(int64)|false|none|The project the integration is associated with|
|config|object|false|none|The integration configuration for this type of integration|

<h2 id="tocS_PostLineageIntegrationWatchSelectionRequest">PostLineageIntegrationWatchSelectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostlineageintegrationwatchselectionrequest"></a>
<a id="schema_PostLineageIntegrationWatchSelectionRequest"></a>
<a id="tocSpostlineageintegrationwatchselectionrequest"></a>
<a id="tocspostlineageintegrationwatchselectionrequest"></a>

```json
{
  "to_add": [
    {
      "identifier": "string",
      "name": "string",
      "type": "folder",
      "watching": true
    }
  ],
  "to_remove": [
    "string"
  ]
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to_add|[[WatchSelectionItem](#schemawatchselectionitem)]|false|none|Collections to start watching|
|to_remove|[string]|false|none|Identifiers of collections to stop watching|

<h2 id="tocS_PostgresConnection">PostgresConnection</h2>
<!-- backwards compatibility -->
<a id="schemapostgresconnection"></a>
<a id="schema_PostgresConnection"></a>
<a id="tocSpostgresconnection"></a>
<a id="tocspostgresconnection"></a>

```json
{
  "hostname": "string",
  "dbname": "string",
  "port": 5432,
  "retries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|true|none|none|
|dbname|string|true|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|

<h2 id="tocS_PostgresCredentials">PostgresCredentials</h2>
<!-- backwards compatibility -->
<a id="schemapostgrescredentials"></a>
<a id="schema_PostgresCredentials"></a>
<a id="tocSpostgrescredentials"></a>
<a id="tocspostgrescredentials"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|username|string|true|none|none|
|default_schema|string|true|none|none|
|target_name|string|true|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_PostgresCredentialsRequest">PostgresCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostgrescredentialsrequest"></a>
<a id="schema_PostgresCredentialsRequest"></a>
<a id="tocSpostgrescredentialsrequest"></a>
<a id="tocspostgrescredentialsrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "username": "string",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|username|string|true|none|none|
|default_schema|string|true|none|none|
|target_name|string|true|none|none|
|password|string|false|write-only|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|

<h2 id="tocS_PredefinedPermissionSet">PredefinedPermissionSet</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedpermissionset"></a>
<a id="schema_PredefinedPermissionSet"></a>
<a id="tocSpredefinedpermissionset"></a>
<a id="tocspredefinedpermissionset"></a>

```json
"account_admin"
```

An enumeration.

<h2 id="tocS_PrivateEndpointDetail">PrivateEndpointDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprivateendpointdetail"></a>
<a id="schema_PrivateEndpointDetail"></a>
<a id="tocSprivateendpointdetail"></a>
<a id="tocsprivateendpointdetail"></a>

```json
{
  "id": "string",
  "account_id": 0,
  "state": 0,
  "name": "string",
  "type": "string",
  "private_link_endpoint": "string",
  "cidr_range": "string",
  "egress_cidr": "string",
  "endpoint_identifier": "string",
  "endpoint_state": "string",
  "connectivity_status": "string",
  "connection_count": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "port": 0,
  "provisioning_status": "string",
  "provisioning_status_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the Private Endpoint.|
|account_id|integer(int64)|true|none|The ID of the account|
|state|integer|true|none|The soft-deletion state of the private endpoint record|
|name|string|false|none|The name of the Private Endpoint.|
|type|string|false|none|The type of the Private Endpoint.|
|private_link_endpoint|string|false|none|The PrivateLink endpoint (DNS entry that lives in the dbt Cloud VPC.|
|cidr_range|string|false|none|The CIDR range associated with the Private Endpoint.|
|egress_cidr|string|false|none|Egress CIDR block associated with the Private Endpoint. Used by the customer to allowlist this PLE in their warehouse.|
|endpoint_identifier|string|false|none|The cloud provider's PrivateLink endpoint ID.|
|endpoint_state|string|false|none|The current state of the Private Endpoint.|
|connectivity_status|string|false|none|The connectivity status of the Private Endpoint.|
|connection_count|integer|false|none|The number of active connections using this Private Endpoint.|
|created_at|string(date-time)|true|none|The timestamp when the Private Endpoint was created.|
|updated_at|string(date-time)|true|none|The timestamp when the Private Endpoint was last updated.|
|port|integer|false|none|The network port associated with the Private Endpoint.|
|provisioning_status|string|false|none|Current provisioning status of the Private Endpoint, when known.|
|provisioning_status_message|string|false|none|Customer-facing message describing the current provisioning status, when one is available.|

<h2 id="tocS_PrivateEndpointDetailResponse">PrivateEndpointDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprivateendpointdetailresponse"></a>
<a id="schema_PrivateEndpointDetailResponse"></a>
<a id="tocSprivateendpointdetailresponse"></a>
<a id="tocsprivateendpointdetailresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": "string",
    "account_id": 0,
    "state": 0,
    "name": "string",
    "type": "string",
    "private_link_endpoint": "string",
    "cidr_range": "string",
    "egress_cidr": "string",
    "endpoint_identifier": "string",
    "endpoint_state": "string",
    "connectivity_status": "string",
    "connection_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "port": 0,
    "provisioning_status": "string",
    "provisioning_status_message": "string"
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[PrivateEndpointDetail](#schemaprivateendpointdetail)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_PrivateEndpointList">PrivateEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaprivateendpointlist"></a>
<a id="schema_PrivateEndpointList"></a>
<a id="tocSprivateendpointlist"></a>
<a id="tocsprivateendpointlist"></a>

```json
{
  "id": "string",
  "account_id": 0,
  "state": 0,
  "name": "string",
  "type": "string",
  "private_link_endpoint": "string",
  "cidr_range": "string",
  "egress_cidr": "string",
  "endpoint_identifier": "string",
  "endpoint_state": "string",
  "connectivity_status": "string",
  "connection_count": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the Private Endpoint.|
|account_id|integer(int64)|true|none|The ID of the account|
|state|integer|true|none|The soft-deletion state of the private endpoint record|
|name|string|false|none|The name of the Private Endpoint.|
|type|string|false|none|The type of the Private Endpoint.|
|private_link_endpoint|string|false|none|The PrivateLink endpoint (DNS entry that lives in the dbt Cloud VPC.|
|cidr_range|string|false|none|The CIDR range associated with the Private Endpoint.|
|egress_cidr|string|false|none|Egress CIDR block associated with the Private Endpoint. Used by the customer to allowlist this PLE in their warehouse.|
|endpoint_identifier|string|false|none|The cloud provider's PrivateLink endpoint ID.|
|endpoint_state|string|false|none|The current state of the Private Endpoint.|
|connectivity_status|string|false|none|The connectivity status of the Private Endpoint.|
|connection_count|integer|false|none|The number of active connections using this Private Endpoint.|
|created_at|string(date-time)|true|none|The timestamp when the Private Endpoint was created.|
|updated_at|string(date-time)|true|none|The timestamp when the Private Endpoint was last updated.|

<h2 id="tocS_PrivateEndpointListResponse">PrivateEndpointListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprivateendpointlistresponse"></a>
<a id="schema_PrivateEndpointListResponse"></a>
<a id="tocSprivateendpointlistresponse"></a>
<a id="tocsprivateendpointlistresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": [
    {
      "id": "string",
      "account_id": 0,
      "state": 0,
      "name": "string",
      "type": "string",
      "private_link_endpoint": "string",
      "cidr_range": "string",
      "egress_cidr": "string",
      "endpoint_identifier": "string",
      "endpoint_state": "string",
      "connectivity_status": "string",
      "connection_count": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {},
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[[PrivateEndpointList](#schemaprivateendpointlist)]|true|none|none|
|extra|[V3ResponseExtraData](#schemav3responseextradata)|true|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ProfileCreateBodyRequest">ProfileCreateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprofilecreatebodyrequest"></a>
<a id="schema_ProfileCreateBodyRequest"></a>
<a id="tocSprofilecreatebodyrequest"></a>
<a id="tocsprofilecreatebodyrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "connection_id": 0,
  "key": "string",
  "credentials_id": 0,
  "extended_attributes_id": 0
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The ID of the account|
|project_id|integer(int64)|true|none|The ID of the project|
|connection_id|integer(int64)|true|none|The ID of the connection|
|key|string|true|none|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|credentials_id|integer(int64)|true|none|The ID of the credentials|
|extended_attributes_id|integer(int64)|false|none|The ID of the extended attributes|

<h2 id="tocS_ProfileDetail">ProfileDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprofiledetail"></a>
<a id="schema_ProfileDetail"></a>
<a id="tocSprofiledetail"></a>
<a id="tocsprofiledetail"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "key": "string",
  "connection_id": 0,
  "credentials_id": 0,
  "extended_attributes_id": 0,
  "primary_bindings": [
    {
      "id": 0,
      "name": "string",
      "type": "string",
      "deployment_type": "string"
    }
  ],
  "catalog_bindings": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The ID of the profile|
|account_id|integer(int64)|true|none|The ID of the account|
|project_id|integer(int64)|true|none|The ID of the project|
|key|string|true|none|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|connection_id|integer(int64)|false|none|The ID of the connection. Null for profiles that have not been assigned a connection.|
|credentials_id|integer(int64)|true|none|The ID of the credentials|
|extended_attributes_id|integer(int64)|false|none|The ID of the extended attributes|
|primary_bindings|[[ProfileEnvironmentBinding](#schemaprofileenvironmentbinding)]|true|none|The primary bindings for the profile|
|catalog_bindings|[[ProfileEnvironmentBinding](#schemaprofileenvironmentbinding)]|false|none|The catalog bindings for the profile (deprecated)|

<h2 id="tocS_ProfileDetailResponse">ProfileDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprofiledetailresponse"></a>
<a id="schema_ProfileDetailResponse"></a>
<a id="tocSprofiledetailresponse"></a>
<a id="tocsprofiledetailresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[ProfileDetail](#schemaprofiledetail)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ProfileEnvironmentBinding">ProfileEnvironmentBinding</h2>
<!-- backwards compatibility -->
<a id="schemaprofileenvironmentbinding"></a>
<a id="schema_ProfileEnvironmentBinding"></a>
<a id="tocSprofileenvironmentbinding"></a>
<a id="tocsprofileenvironmentbinding"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": "string",
  "deployment_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The ID of the environment binding|
|name|string|true|none|The name of the environment binding|
|type|string|true|none|The type of the environment binding|
|deployment_type|string|true|none|The deployment type of the environment binding|

<h2 id="tocS_ProfileList">ProfileList</h2>
<!-- backwards compatibility -->
<a id="schemaprofilelist"></a>
<a id="schema_ProfileList"></a>
<a id="tocSprofilelist"></a>
<a id="tocsprofilelist"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "key": "string",
  "connection_id": 0,
  "credentials_id": 0,
  "extended_attributes_id": 0,
  "primary_bindings": [
    {
      "id": 0,
      "name": "string",
      "type": "string",
      "deployment_type": "string"
    }
  ],
  "catalog_bindings": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The ID of the profile|
|account_id|integer(int64)|true|none|The ID of the account|
|project_id|integer(int64)|true|none|The ID of the project|
|key|string|true|none|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|connection_id|integer(int64)|false|none|The ID of the connection. Null for profiles that have not been assigned a connection.|
|credentials_id|integer(int64)|true|none|The ID of the credentials|
|extended_attributes_id|integer(int64)|false|none|The ID of the extended attributes|
|primary_bindings|[[ProfileEnvironmentBinding](#schemaprofileenvironmentbinding)]|true|none|The primary bindings for the profile|
|catalog_bindings|[[ProfileEnvironmentBinding](#schemaprofileenvironmentbinding)]|false|none|The catalog bindings for the profile (deprecated)|

<h2 id="tocS_ProfileListResponse">ProfileListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprofilelistresponse"></a>
<a id="schema_ProfileListResponse"></a>
<a id="tocSprofilelistresponse"></a>
<a id="tocsprofilelistresponse"></a>

```json
{
  "status": {
    "code": 0,
    "is_success": true,
    "user_message": "string",
    "developer_message": ""
  },
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "key": "string",
    "connection_id": 0,
    "credentials_id": 0,
    "extended_attributes_id": 0,
    "primary_bindings": [
      {
        "id": 0,
        "name": "string",
        "type": "string",
        "deployment_type": "string"
      }
    ],
    "catalog_bindings": []
  },
  "extra": {},
  "error_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|none|
|data|[ProfileList](#schemaprofilelist)|true|none|none|
|extra|object|false|none|none|
|error_code|integer|false|none|none|

<h2 id="tocS_ProfileUpdateBodyRequest">ProfileUpdateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprofileupdatebodyrequest"></a>
<a id="schema_ProfileUpdateBodyRequest"></a>
<a id="tocSprofileupdatebodyrequest"></a>
<a id="tocsprofileupdatebodyrequest"></a>

```json
{
  "pk": 0,
  "account_id": 0,
  "project_id": 0,
  "key": null,
  "connection_id": null,
  "credentials_id": null,
  "extended_attributes_id": null
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pk|integer(int64)|true|none|The ID of the Profile to be changed|
|account_id|integer(int64)|true|none|The ID of the account|
|project_id|integer(int64)|true|none|The ID of the project|
|key|string|false|none|Unique name for the profile. The profile key must be unique per project and can only contain letters, numbers, dashes, and underscores. It must begin with a letter and end with a letter or number. It cannot contain consecutive dashes or underscores.|
|connection_id|integer(int64)|false|none|The ID of the connection|
|credentials_id|integer(int64)|false|none|The ID of the credentials|
|extended_attributes_id|integer(int64)|false|none|The ID of the extended attributes. Set to null to unset.|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "name": "string",
  "account_id": 0,
  "description": "string",
  "connection_id": 0,
  "repository_id": 0,
  "semantic_layer_config_id": 0,
  "state": 1,
  "dbt_project_subdirectory": "string",
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the project|
|account_id|integer(int64)|true|none|The account the project is associated with|
|description|string|false|none|The description of the project|
|connection_id|integer(int64)|false|none|The active connection|
|repository_id|integer(int64)|false|none|The active repository|
|semantic_layer_config_id|integer(int64)|false|none|The active semantic layer configuration|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|dbt_project_subdirectory|string|false|none|The path in the associated repository where a dbt project can be found|
|docs_job_id|integer(int64)|false|none|The job used for docs generation|
|freshness_job_id|integer(int64)|false|none|The job used for source freshness generation|
|type|object|true|none|The type of the project<br><br>* `0` - DEFAULT<br>* `1` - HYBRID|

<h2 id="tocS_ProjectEnveloped">ProjectEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaprojectenveloped"></a>
<a id="schema_ProjectEnveloped"></a>
<a id="tocSprojectenveloped"></a>
<a id="tocsprojectenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "connection": {
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "type": "postgres",
      "adapter_version": "apache_spark_v0",
      "created_by_id": 0,
      "created_by_service_token_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "oauth_configuration_id": 0
    },
    "environments": [
      {
        "account_id": 0,
        "project_id": 0,
        "credentials_id": 0,
        "connection_id": 0,
        "extended_attributes_id": 0,
        "name": "string",
        "dbt_version": "string",
        "type": "development",
        "use_custom_branch": true,
        "custom_branch": "string",
        "supports_docs": true,
        "deployment_type": "production",
        "enable_model_query_history": false,
        "enable_dbt_state": false,
        "enable_dbt_state_model_lock": true,
        "state": 1,
        "primary_profile_id": 0
      }
    ],
    "repository": {
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0
    },
    "group_permissions": [
      {
        "account_id": 0,
        "group_id": 0,
        "project_id": 0,
        "all_projects": true,
        "permission_set": "account_admin",
        "permission_level": 0,
        "state": 1,
        "writable_environment_categories": [
          "string"
        ]
      }
    ],
    "docs_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "freshness_job": {
      "environment_id": 0,
      "account_id": 0,
      "project_id": 0,
      "name": "string",
      "description": "string",
      "generate_docs": true,
      "run_generate_sources": true,
      "state": 1,
      "dbt_version": "string",
      "triggers": {
        "github_webhook": true,
        "schedule": true,
        "git_provider_webhook": true,
        "on_merge": true,
        "custom_branch_only": true
      },
      "settings": {
        "threads": 0,
        "target_name": "string"
      },
      "execution": {
        "timeout_seconds": 0
      },
      "schedule": {
        "cron": "string",
        "date": "every_day",
        "time": "every_hour"
      },
      "execute_steps": [
        "string"
      ],
      "job_type": "ci",
      "triggers_on_draft_pr": false,
      "run_compare_changes": false,
      "compare_changes_flags": "--select state:modified",
      "run_lint": false,
      "errors_on_lint_failure": true,
      "deferring_environment_id": 0,
      "deferring_job_definition_id": 0,
      "cost_optimization_features": [
        "string"
      ]
    },
    "fusion_readiness": null,
    "default_version": "string"
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ProjectResponse](#schemaprojectresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_ProjectListEnveloped">ProjectListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlistenveloped"></a>
<a id="schema_ProjectListEnveloped"></a>
<a id="tocSprojectlistenveloped"></a>
<a id="tocsprojectlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "connection": {
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "type": "postgres",
        "adapter_version": "apache_spark_v0",
        "created_by_id": 0,
        "created_by_service_token_id": 0,
        "state": 1,
        "private_link_endpoint_id": "string",
        "oauth_configuration_id": 0
      },
      "environments": [
        {
          "account_id": 0,
          "project_id": 0,
          "credentials_id": 0,
          "connection_id": 0,
          "extended_attributes_id": 0,
          "name": "string",
          "dbt_version": "string",
          "type": "development",
          "use_custom_branch": true,
          "custom_branch": "string",
          "supports_docs": true,
          "deployment_type": "production",
          "enable_model_query_history": false,
          "enable_dbt_state": false,
          "enable_dbt_state_model_lock": true,
          "state": 1,
          "primary_profile_id": 0
        }
      ],
      "repository": {
        "account_id": 0,
        "project_id": 0,
        "full_name": "string",
        "remote_backend": {},
        "git_clone_strategy": {},
        "deploy_key_id": 0,
        "repository_credentials_id": 0,
        "github_installation_id": 0,
        "github_webhook_id": 0,
        "state": 1,
        "private_link_endpoint_id": "string",
        "git_provider_id": 0
      },
      "group_permissions": [
        {
          "account_id": 0,
          "group_id": 0,
          "project_id": 0,
          "all_projects": true,
          "permission_set": "account_admin",
          "permission_level": 0,
          "state": 1,
          "writable_environment_categories": [
            "string"
          ]
        }
      ],
      "docs_job": {
        "environment_id": 0,
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "description": "string",
        "generate_docs": true,
        "run_generate_sources": true,
        "state": 1,
        "dbt_version": "string",
        "triggers": {
          "github_webhook": true,
          "schedule": true,
          "git_provider_webhook": true,
          "on_merge": true,
          "custom_branch_only": true
        },
        "settings": {
          "threads": 0,
          "target_name": "string"
        },
        "execution": {
          "timeout_seconds": 0
        },
        "schedule": {
          "cron": "string",
          "date": "every_day",
          "time": "every_hour"
        },
        "execute_steps": [
          "string"
        ],
        "job_type": "ci",
        "triggers_on_draft_pr": false,
        "run_compare_changes": false,
        "compare_changes_flags": "--select state:modified",
        "run_lint": false,
        "errors_on_lint_failure": true,
        "deferring_environment_id": 0,
        "deferring_job_definition_id": 0,
        "cost_optimization_features": [
          "string"
        ]
      },
      "freshness_job": {
        "environment_id": 0,
        "account_id": 0,
        "project_id": 0,
        "name": "string",
        "description": "string",
        "generate_docs": true,
        "run_generate_sources": true,
        "state": 1,
        "dbt_version": "string",
        "triggers": {
          "github_webhook": true,
          "schedule": true,
          "git_provider_webhook": true,
          "on_merge": true,
          "custom_branch_only": true
        },
        "settings": {
          "threads": 0,
          "target_name": "string"
        },
        "execution": {
          "timeout_seconds": 0
        },
        "schedule": {
          "cron": "string",
          "date": "every_day",
          "time": "every_hour"
        },
        "execute_steps": [
          "string"
        ],
        "job_type": "ci",
        "triggers_on_draft_pr": false,
        "run_compare_changes": false,
        "compare_changes_flags": "--select state:modified",
        "run_lint": false,
        "errors_on_lint_failure": true,
        "deferring_environment_id": 0,
        "deferring_job_definition_id": 0,
        "cost_optimization_features": [
          "string"
        ]
      },
      "fusion_readiness": null,
      "default_version": "string"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ProjectResponse](#schemaprojectresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_ProjectRequest">ProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrequest"></a>
<a id="schema_ProjectRequest"></a>
<a id="tocSprojectrequest"></a>
<a id="tocsprojectrequest"></a>

```json
{
  "name": "string",
  "account_id": 0,
  "description": "string",
  "connection_id": 0,
  "repository_id": 0,
  "semantic_layer_config_id": 0,
  "state": 1,
  "dbt_project_subdirectory": "string",
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the project|
|account_id|integer(int64)|true|none|The account the project is associated with|
|description|string|false|none|The description of the project|
|connection_id|integer(int64)|false|none|The active connection|
|repository_id|integer(int64)|false|none|The active repository|
|semantic_layer_config_id|integer(int64)|false|none|The active semantic layer configuration|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|dbt_project_subdirectory|string|false|none|The path in the associated repository where a dbt project can be found|
|docs_job_id|integer(int64)|false|none|The job used for docs generation|
|freshness_job_id|integer(int64)|false|none|The job used for source freshness generation|
|type|object|true|none|The type of the project<br><br>* `0` - DEFAULT<br>* `1` - HYBRID|

<h2 id="tocS_ProjectResponse">ProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectresponse"></a>
<a id="schema_ProjectResponse"></a>
<a id="tocSprojectresponse"></a>
<a id="tocsprojectresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "account_id": 0,
  "description": "string",
  "connection_id": 0,
  "repository_id": 0,
  "semantic_layer_config_id": 0,
  "state": 1,
  "dbt_project_subdirectory": "string",
  "docs_job_id": 0,
  "freshness_job_id": 0,
  "type": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "connection": {
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "type": "postgres",
    "adapter_version": "apache_spark_v0",
    "created_by_id": 0,
    "created_by_service_token_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "oauth_configuration_id": 0
  },
  "environments": [
    {
      "account_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "connection_id": 0,
      "extended_attributes_id": 0,
      "name": "string",
      "dbt_version": "string",
      "type": "development",
      "use_custom_branch": true,
      "custom_branch": "string",
      "supports_docs": true,
      "deployment_type": "production",
      "enable_model_query_history": false,
      "enable_dbt_state": false,
      "enable_dbt_state_model_lock": true,
      "state": 1,
      "primary_profile_id": 0
    }
  ],
  "repository": {
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0
  },
  "group_permissions": [
    {
      "account_id": 0,
      "group_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "permission_level": 0,
      "state": 1,
      "writable_environment_categories": [
        "string"
      ]
    }
  ],
  "docs_job": {
    "environment_id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "description": "string",
    "generate_docs": true,
    "run_generate_sources": true,
    "state": 1,
    "dbt_version": "string",
    "triggers": {
      "github_webhook": true,
      "schedule": true,
      "git_provider_webhook": true,
      "on_merge": true,
      "custom_branch_only": true
    },
    "settings": {
      "threads": 0,
      "target_name": "string"
    },
    "execution": {
      "timeout_seconds": 0
    },
    "schedule": {
      "cron": "string",
      "date": "every_day",
      "time": "every_hour"
    },
    "execute_steps": [
      "string"
    ],
    "job_type": "ci",
    "triggers_on_draft_pr": false,
    "run_compare_changes": false,
    "compare_changes_flags": "--select state:modified",
    "run_lint": false,
    "errors_on_lint_failure": true,
    "deferring_environment_id": 0,
    "deferring_job_definition_id": 0,
    "cost_optimization_features": [
      "string"
    ]
  },
  "freshness_job": {
    "environment_id": 0,
    "account_id": 0,
    "project_id": 0,
    "name": "string",
    "description": "string",
    "generate_docs": true,
    "run_generate_sources": true,
    "state": 1,
    "dbt_version": "string",
    "triggers": {
      "github_webhook": true,
      "schedule": true,
      "git_provider_webhook": true,
      "on_merge": true,
      "custom_branch_only": true
    },
    "settings": {
      "threads": 0,
      "target_name": "string"
    },
    "execution": {
      "timeout_seconds": 0
    },
    "schedule": {
      "cron": "string",
      "date": "every_day",
      "time": "every_hour"
    },
    "execute_steps": [
      "string"
    ],
    "job_type": "ci",
    "triggers_on_draft_pr": false,
    "run_compare_changes": false,
    "compare_changes_flags": "--select state:modified",
    "run_lint": false,
    "errors_on_lint_failure": true,
    "deferring_environment_id": 0,
    "deferring_job_definition_id": 0,
    "cost_optimization_features": [
      "string"
    ]
  },
  "fusion_readiness": null,
  "default_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|name|string|false|none|The name of the project|
|account_id|integer(int64)|false|none|The account the project is associated with|
|description|string|false|none|The description of the project|
|connection_id|integer(int64)|false|none|The active connection|
|repository_id|integer(int64)|false|none|The active repository|
|semantic_layer_config_id|integer(int64)|false|none|The active semantic layer configuration|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|dbt_project_subdirectory|string|false|none|The path in the associated repository where a dbt project can be found|
|docs_job_id|integer(int64)|false|none|The job used for docs generation|
|freshness_job_id|integer(int64)|false|none|The job used for source freshness generation|
|type|object|false|none|The type of the project<br><br>* `0` - DEFAULT<br>* `1` - HYBRID|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|connection|object|true|read-only|none|
|environments|[[EnvironmentV3](#schemaenvironmentv3)]|true|read-only|none|
|repository|object|true|read-only|none|
|group_permissions|[[GroupPermission](#schemagrouppermission)]|true|read-only|none|
|docs_job|object|true|read-only|none|
|freshness_job|object|true|read-only|none|
|fusion_readiness|object|true|read-only|none|
|default_version|string|true|read-only|The default dbt version for new environments in this project. Only populated when the project is fetched directly; null when the project is included as a nested object on another resource.|

<h2 id="tocS_PublicAuditLogListEnveloped">PublicAuditLogListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemapublicauditloglistenveloped"></a>
<a id="schema_PublicAuditLogListEnveloped"></a>
<a id="tocSpublicauditloglistenveloped"></a>
<a id="tocspublicauditloglistenveloped"></a>

```json
{
  "data": [
    {
      "id": "string",
      "account_id": 0,
      "source": "string",
      "service": "string",
      "actor": null,
      "event_type": "string",
      "event_label": "string",
      "event_context": null,
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PublicAuditLogResponse](#schemapublicauditlogresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_PublicAuditLogResponse">PublicAuditLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicauditlogresponse"></a>
<a id="schema_PublicAuditLogResponse"></a>
<a id="tocSpublicauditlogresponse"></a>
<a id="tocspublicauditlogresponse"></a>

```json
{
  "id": "string",
  "account_id": 0,
  "source": "string",
  "service": "string",
  "actor": null,
  "event_type": "string",
  "event_label": "string",
  "event_context": null,
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|account_id|integer(int64)|false|none|none|
|source|string|false|none|none|
|service|string|false|none|none|
|actor|object|false|none|none|
|event_type|string|false|none|none|
|event_label|string|false|none|none|
|event_context|object|false|none|none|
|created_at|string(date-time)|true|read-only|none|

<h2 id="tocS_Receipt">Receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceipt"></a>
<a id="schema_Receipt"></a>
<a id="tocSreceipt"></a>
<a id="tocsreceipt"></a>

```json
{
  "id": "string",
  "event_id": "string",
  "subscription_id": "string",
  "dispatched_at": "string",
  "http_status_code": "string",
  "error_info": "string",
  "request_body": "string",
  "request_headers": "string",
  "response_body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|event_id|string|true|none|none|
|subscription_id|string|true|none|none|
|dispatched_at|string|true|none|none|
|http_status_code|string|true|none|none|
|error_info|string|true|none|none|
|request_body|string|true|none|none|
|request_headers|string|true|none|none|
|response_body|string|true|none|none|

<h2 id="tocS_RedshiftConnection">RedshiftConnection</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftconnection"></a>
<a id="schema_RedshiftConnection"></a>
<a id="tocSredshiftconnection"></a>
<a id="tocsredshiftconnection"></a>

```json
{
  "hostname": "string",
  "dbname": "string",
  "port": 5439,
  "retries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|true|none|none|
|dbname|string|true|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|

<h2 id="tocS_RedshiftCredentials">RedshiftCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftcredentials"></a>
<a id="schema_RedshiftCredentials"></a>
<a id="tocSredshiftcredentials"></a>
<a id="tocsredshiftcredentials"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "auth_type": "password",
  "username": "",
  "default_schema": "string",
  "target_name": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|auth_type|[RedshiftCredentialsAuthTypeEnum](#schemaredshiftcredentialsauthtypeenum)|true|none|* `password` - PASSWORD<br>* `external_oauth` - OAUTH|
|username|string|false|none|none|
|default_schema|string|true|none|none|
|target_name|string|true|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|auth_type|password|
|auth_type|external_oauth|

<h2 id="tocS_RedshiftCredentialsAuthTypeEnum">RedshiftCredentialsAuthTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftcredentialsauthtypeenum"></a>
<a id="schema_RedshiftCredentialsAuthTypeEnum"></a>
<a id="tocSredshiftcredentialsauthtypeenum"></a>
<a id="tocsredshiftcredentialsauthtypeenum"></a>

```json
"password"
```

* `password` - PASSWORD
* `external_oauth` - OAUTH

<h2 id="tocS_RedshiftCredentialsRequest">RedshiftCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftcredentialsrequest"></a>
<a id="schema_RedshiftCredentialsRequest"></a>
<a id="tocSredshiftcredentialsrequest"></a>
<a id="tocsredshiftcredentialsrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "auth_type": "password",
  "username": "",
  "default_schema": "string",
  "target_name": "string",
  "password": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|auth_type|[RedshiftCredentialsAuthTypeEnum](#schemaredshiftcredentialsauthtypeenum)|true|none|* `password` - PASSWORD<br>* `external_oauth` - OAUTH|
|username|string|false|none|none|
|default_schema|string|true|none|none|
|target_name|string|true|none|none|
|password|string|false|write-only|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|auth_type|password|
|auth_type|external_oauth|

<h2 id="tocS_RemoteBackendEnum">RemoteBackendEnum</h2>
<!-- backwards compatibility -->
<a id="schemaremotebackendenum"></a>
<a id="schema_RemoteBackendEnum"></a>
<a id="tocSremotebackendenum"></a>
<a id="tocsremotebackendenum"></a>

```json
"ado"
```

* `ado` - ado
* `github` - github
* `managed` - managed
* `gitlab` - gitlab
* `manual_config` - manual_config

<h2 id="tocS_ReplaceUserSCIMRequestRequest">ReplaceUserSCIMRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplaceuserscimrequestrequest"></a>
<a id="schema_ReplaceUserSCIMRequestRequest"></a>
<a id="tocSreplaceuserscimrequestrequest"></a>
<a id="tocsreplaceuserscimrequestrequest"></a>

```json
{
  "schemas": [
    "string"
  ],
  "externalId": "12uhdfs0",
  "userName": "string",
  "active": true,
  "name": {
    "givenName": "John",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "john.smith@example.com",
      "primary": true
    }
  ],
  "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
    "licenseType": "developer"
  }
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|The user schemas supported by the SCIM provider|
|externalId|string|false|none|The external ID of the user (user's scim id)|
|userName|string|true|none|The username for the user which is their email address|
|active|boolean|true|none|Whether the user is active|
|name|object|true|none|The user's name components|
|emails|[[UserEmailComponent](#schemauseremailcomponent)]|true|none|The user's email addresses|
|urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User|object|false|none|Custom attributes for the user. This is where licenseType will be stored|

<h2 id="tocS_RepositoryGitlab">RepositoryGitlab</h2>
<!-- backwards compatibility -->
<a id="schemarepositorygitlab"></a>
<a id="schema_RepositoryGitlab"></a>
<a id="tocSrepositorygitlab"></a>
<a id="tocsrepositorygitlab"></a>

```json
{
  "account_id": 0,
  "repository_id": 0,
  "gitlab_project_id": 0,
  "state": 1,
  "project_access_token_id": 0,
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|repository_id|integer(int64)|false|none|none|
|gitlab_project_id|integer|true|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|project_access_token_id|integer|false|none|none|
|expires_at|string(date-time)|false|none|none|

<h2 id="tocS_RepositoryV3">RepositoryV3</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryv3"></a>
<a id="schema_RepositoryV3"></a>
<a id="tocSrepositoryv3"></a>
<a id="tocsrepositoryv3"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "full_name": "string",
  "remote_backend": {},
  "git_clone_strategy": {},
  "deploy_key_id": 0,
  "repository_credentials_id": 0,
  "github_installation_id": 0,
  "github_webhook_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "git_provider_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the repo is associated with|
|project_id|integer(int64)|false|none|The project the repo is associated with|
|full_name|string|false|none|The name of the repo⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.For example, if the remote URL is 'git://github.com/your_org/your_repo_name.git',the correct full_name is 'your_org/your_repo_name'.|
|remote_backend|object|false|none|The associated git provider⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.<br><br>* `ado` - ado<br>* `github` - github<br>* `managed` - managed<br>* `gitlab` - gitlab<br>* `manual_config` - manual_config|
|git_clone_strategy|object|false|none|The strategy to use when cloning the repo<br><br>* `azure_active_directory_app` - azure_active_directory_app<br>* `deploy_key` - deploy_key<br>* `deploy_token` - deploy_token<br>* `github_app` - github_app<br>* `git_token` - git_token|
|deploy_key_id|integer(int64)|false|none|none|
|repository_credentials_id|integer(int64)|false|none|none|
|github_installation_id|integer(int64)|false|none|none|
|github_webhook_id|integer(int64)|false|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|git_provider_id|integer(int64)|false|none|none|

<h2 id="tocS_RepositoryV3Enveloped">RepositoryV3Enveloped</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryv3enveloped"></a>
<a id="schema_RepositoryV3Enveloped"></a>
<a id="tocSrepositoryv3enveloped"></a>
<a id="tocsrepositoryv3enveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "project_id": 0,
    "full_name": "string",
    "remote_backend": {},
    "git_clone_strategy": {},
    "deploy_key_id": 0,
    "repository_credentials_id": 0,
    "github_installation_id": 0,
    "github_webhook_id": 0,
    "state": 1,
    "private_link_endpoint_id": "string",
    "git_provider_id": 0,
    "github_repo": "string",
    "name": "string",
    "web_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deploy_key": {
      "account_id": 0,
      "public_key": "string",
      "state": 1
    },
    "git_provider": null,
    "gitlab": {
      "account_id": 0,
      "repository_id": 0,
      "gitlab_project_id": 0,
      "state": 1,
      "project_access_token_id": 0,
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "is_private_link_enabled": false
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RepositoryV3Response](#schemarepositoryv3response)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_RepositoryV3ListEnveloped">RepositoryV3ListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryv3listenveloped"></a>
<a id="schema_RepositoryV3ListEnveloped"></a>
<a id="tocSrepositoryv3listenveloped"></a>
<a id="tocsrepositoryv3listenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "full_name": "string",
      "remote_backend": {},
      "git_clone_strategy": {},
      "deploy_key_id": 0,
      "repository_credentials_id": 0,
      "github_installation_id": 0,
      "github_webhook_id": 0,
      "state": 1,
      "private_link_endpoint_id": "string",
      "git_provider_id": 0,
      "github_repo": "string",
      "name": "string",
      "web_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deploy_key": {
        "account_id": 0,
        "public_key": "string",
        "state": 1
      },
      "git_provider": null,
      "gitlab": {
        "account_id": 0,
        "repository_id": 0,
        "gitlab_project_id": 0,
        "state": 1,
        "project_access_token_id": 0,
        "expires_at": "1970-01-01T00:00:00Z"
      },
      "is_private_link_enabled": false
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RepositoryV3Response](#schemarepositoryv3response)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_RepositoryV3Request">RepositoryV3Request</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryv3request"></a>
<a id="schema_RepositoryV3Request"></a>
<a id="tocSrepositoryv3request"></a>
<a id="tocsrepositoryv3request"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "full_name": "string",
  "remote_backend": {},
  "git_clone_strategy": {},
  "deploy_key_id": 0,
  "repository_credentials_id": 0,
  "github_installation_id": 0,
  "github_webhook_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "git_provider_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the repo is associated with|
|project_id|integer(int64)|false|none|The project the repo is associated with|
|full_name|string|false|none|The name of the repo⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.For example, if the remote URL is 'git://github.com/your_org/your_repo_name.git',the correct full_name is 'your_org/your_repo_name'.|
|remote_backend|object|false|none|The associated git provider⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.<br><br>* `ado` - ado<br>* `github` - github<br>* `managed` - managed<br>* `gitlab` - gitlab<br>* `manual_config` - manual_config|
|git_clone_strategy|object|false|none|The strategy to use when cloning the repo<br><br>* `azure_active_directory_app` - azure_active_directory_app<br>* `deploy_key` - deploy_key<br>* `deploy_token` - deploy_token<br>* `github_app` - github_app<br>* `git_token` - git_token|
|deploy_key_id|integer(int64)|false|none|none|
|repository_credentials_id|integer(int64)|false|none|none|
|github_installation_id|integer(int64)|false|none|none|
|github_webhook_id|integer(int64)|false|none|none|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|git_provider_id|integer(int64)|false|none|none|

<h2 id="tocS_RepositoryV3Response">RepositoryV3Response</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryv3response"></a>
<a id="schema_RepositoryV3Response"></a>
<a id="tocSrepositoryv3response"></a>
<a id="tocsrepositoryv3response"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "full_name": "string",
  "remote_backend": {},
  "git_clone_strategy": {},
  "deploy_key_id": 0,
  "repository_credentials_id": 0,
  "github_installation_id": 0,
  "github_webhook_id": 0,
  "state": 1,
  "private_link_endpoint_id": "string",
  "git_provider_id": 0,
  "github_repo": "string",
  "name": "string",
  "web_url": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deploy_key": {
    "account_id": 0,
    "public_key": "string",
    "state": 1
  },
  "git_provider": null,
  "gitlab": {
    "account_id": 0,
    "repository_id": 0,
    "gitlab_project_id": 0,
    "state": 1,
    "project_access_token_id": 0,
    "expires_at": "1970-01-01T00:00:00Z"
  },
  "is_private_link_enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|The account the repo is associated with|
|project_id|integer(int64)|false|none|The project the repo is associated with|
|full_name|string|false|none|The name of the repo⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.For example, if the remote URL is 'git://github.com/your_org/your_repo_name.git',the correct full_name is 'your_org/your_repo_name'.|
|remote_backend|object|false|none|The associated git provider⚠️ If not set to the correct values, CI jobs may not trigger and the branch link from the dbt Cloud IDE may not work.<br><br>* `ado` - ado<br>* `github` - github<br>* `managed` - managed<br>* `gitlab` - gitlab<br>* `manual_config` - manual_config|
|git_clone_strategy|object|false|none|The strategy to use when cloning the repo<br><br>* `azure_active_directory_app` - azure_active_directory_app<br>* `deploy_key` - deploy_key<br>* `deploy_token` - deploy_token<br>* `github_app` - github_app<br>* `git_token` - git_token|
|deploy_key_id|integer(int64)|false|none|none|
|repository_credentials_id|integer(int64)|false|none|none|
|github_installation_id|integer(int64)|false|none|none|
|github_webhook_id|integer(int64)|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|private_link_endpoint_id|string|false|none|none|
|git_provider_id|integer(int64)|false|none|none|
|github_repo|string|true|read-only|none|
|name|string|true|read-only|none|
|web_url|string|true|read-only|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|deploy_key|object|true|read-only|none|
|git_provider|object|true|read-only|none|
|gitlab|object|true|read-only|none|
|is_private_link_enabled|boolean|true|read-only|Whether the repository is using a private link endpoint|

<h2 id="tocS_ResponseData">ResponseData</h2>
<!-- backwards compatibility -->
<a id="schemaresponsedata"></a>
<a id="schema_ResponseData"></a>
<a id="tocSresponsedata"></a>
<a id="tocsresponsedata"></a>

```json
{
  "message": "string",
  "new_var_ids": [
    0
  ],
  "failures": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|new_var_ids|[integer(int64)]|true|none|none|
|failures|object|false|none|This field will detail specific failures within a single environment variable you are attempting to create.|

<h2 id="tocS_ResponseStatus">ResponseStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresponsestatus"></a>
<a id="schema_ResponseStatus"></a>
<a id="tocSresponsestatus"></a>
<a id="tocsresponsestatus"></a>

```json
{
  "code": 200,
  "is_success": true,
  "user_message": "string",
  "developer_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|HTTP status code|
|is_success|boolean|true|none|Whether the request was successful or not|
|user_message|string|true|none|End-user friendly success or error message|
|developer_message|string|true|none|Developer friendly success or error message|

<h2 id="tocS_SCIMConfig">SCIMConfig</h2>
<!-- backwards compatibility -->
<a id="schemascimconfig"></a>
<a id="schema_SCIMConfig"></a>
<a id="tocSscimconfig"></a>
<a id="tocsscimconfig"></a>

```json
{
  "enabled": true,
  "manual_updates_allowed": true,
  "scim_controlled_license_type": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|manual_updates_allowed|boolean|true|none|none|
|scim_controlled_license_type|boolean|true|none|none|

<h2 id="tocS_SCIMList">SCIMList</h2>
<!-- backwards compatibility -->
<a id="schemascimlist"></a>
<a id="schema_SCIMList"></a>
<a id="tocSscimlist"></a>
<a id="tocsscimlist"></a>

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 0,
  "startIndex": 0,
  "itemsPerPage": 0,
  "Resources": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|false|none|The SCIM schema of the response|
|totalResults|integer|true|none|The total number of results|
|startIndex|integer|true|none|The start index of the results|
|itemsPerPage|integer|true|none|The number of results per page|
|Resources|[object]|true|none|The list of resources|

<h2 id="tocS_SCIMResourceType">SCIMResourceType</h2>
<!-- backwards compatibility -->
<a id="schemascimresourcetype"></a>
<a id="schema_SCIMResourceType"></a>
<a id="tocSscimresourcetype"></a>
<a id="tocsscimresourcetype"></a>

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
  ],
  "id": "string",
  "name": "string",
  "endpoint": "string",
  "description": "string",
  "schema": "string",
  "schemaExtensions": [
    {
      "schema": "string",
      "required": true
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string",
    "created": "string",
    "lastModified": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|false|none|The SCIM schema of the resource type|
|id|string|true|none|The ID of the resource type|
|name|string|true|none|The name of the resource type|
|endpoint|string|true|none|The endpoint to access the resource type|
|description|string|true|none|The description of the resource type|
|schema|string|true|none|The schema of the resource type|
|schemaExtensions|[[SCIMSchemaExtension](#schemascimschemaextension)]|false|none|The extension schemas supported by the resource type|
|meta|object|true|none|The metadata of the resource type|

<h2 id="tocS_SCIMSchemaExtension">SCIMSchemaExtension</h2>
<!-- backwards compatibility -->
<a id="schemascimschemaextension"></a>
<a id="schema_SCIMSchemaExtension"></a>
<a id="tocSscimschemaextension"></a>
<a id="tocsscimschemaextension"></a>

```json
{
  "schema": "string",
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|string|true|none|The URI of an extension schema supported by the resource type|
|required|boolean|true|none|Whether the extension schema is required for the resource type|

<h2 id="tocS_SCIMToken">SCIMToken</h2>
<!-- backwards compatibility -->
<a id="schemascimtoken"></a>
<a id="schema_SCIMToken"></a>
<a id="tocSscimtoken"></a>
<a id="tocsscimtoken"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_used": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|last_used|string(date-time)|false|none|none|

<h2 id="tocS_SalesforceConnection">SalesforceConnection</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconnection"></a>
<a id="schema_SalesforceConnection"></a>
<a id="tocSsalesforceconnection"></a>
<a id="tocssalesforceconnection"></a>

```json
{
  "login_url": "string",
  "database": "default",
  "data_transform_run_timeout": 180000,
  "auth_type": "jwt_bearer",
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|login_url|string|true|none|none|
|database|string|false|none|none|
|data_transform_run_timeout|integer|false|none|none|
|auth_type|object|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_Schema">Schema</h2>
<!-- backwards compatibility -->
<a id="schemaschema"></a>
<a id="schema_Schema"></a>
<a id="tocSschema"></a>
<a id="tocsschema"></a>

```json
{
  "field_order": [
    "string"
  ],
  "field_groups": [
    {
      "name": "string",
      "members": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_order|[string]|false|none|The field order for display in the UI|
|field_groups|[[FieldGroup](#schemafieldgroup)]|false|none|Specification of how certain fields should be grouped|

<h2 id="tocS_SchemaTypeEnum">SchemaTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaschematypeenum"></a>
<a id="schema_SchemaTypeEnum"></a>
<a id="tocSschematypeenum"></a>
<a id="tocsschematypeenum"></a>

```json
"semantic_layer_credentials"
```

* `semantic_layer_credentials` - semantic_layer_credentials

<h2 id="tocS_SemanticLayerCredentialsListEnveloped">SemanticLayerCredentialsListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemasemanticlayercredentialslistenveloped"></a>
<a id="schema_SemanticLayerCredentialsListEnveloped"></a>
<a id="tocSsemanticlayercredentialslistenveloped"></a>
<a id="tocssemanticlayercredentialslistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "project_id": 0,
      "adapter_version": {},
      "schema_type": "semantic_layer_credentials",
      "name": "string",
      "values": null,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "service_tokens": [
        {
          "id": 0,
          "account_id": 0,
          "uid": "string",
          "name": "string"
        }
      ]
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SemanticLayerCredentialsResponse](#schemasemanticlayercredentialsresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_SemanticLayerCredentialsResponse">SemanticLayerCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasemanticlayercredentialsresponse"></a>
<a id="schema_SemanticLayerCredentialsResponse"></a>
<a id="tocSsemanticlayercredentialsresponse"></a>
<a id="tocssemanticlayercredentialsresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "project_id": 0,
  "adapter_version": {},
  "schema_type": "semantic_layer_credentials",
  "name": "string",
  "values": null,
  "state": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "service_tokens": [
    {
      "id": 0,
      "account_id": 0,
      "uid": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|The account the credentials are associated with|
|project_id|integer(int64)|false|none|The project the credentials are associated with|
|adapter_version|object|false|none|The adapter version. Should match the associated project's adapter version.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|
|schema_type|object|false|none|The adapter schema type. Always is 'semantic_layer_credentials'<br><br>* `semantic_layer_credentials` - semantic_layer_credentials|
|name|string|false|none|The user-facing name to identify these credentials.|
|values|object|false|none|Key/val pairs of creds values. When returned via API, encrypted values will be excluded.|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|service_tokens|[[ServiceTokenLite](#schemaservicetokenlite)]|true|read-only|none|

<h2 id="tocS_ServiceToken">ServiceToken</h2>
<!-- backwards compatibility -->
<a id="schemaservicetoken"></a>
<a id="schema_ServiceToken"></a>
<a id="tocSservicetoken"></a>
<a id="tocsservicetoken"></a>

```json
{
  "id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "uid": "string",
  "name": "string",
  "state": 0,
  "permission_grants": [
    {
      "permission_set": "account_admin",
      "project_id": 0,
      "writable_environment_categories": [
        "string"
      ]
    }
  ],
  "last_used": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "semantic_layer_credentials": [
    {}
  ],
  "metadata_only": false,
  "webhooks_only": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|account_id|integer(int64)|true|none|The account the service token is associated with|
|uid|string|true|none|The unique identifier for the service token|
|name|string|true|none|The name of the service token|
|state|integer|true|none|The liveness state of the service token. A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|permission_grants|[[ServiceTokenPermissionGrant](#schemaservicetokenpermissiongrant)]|false|none|The permissions to be assigned to the service token|
|last_used|string(date-time)|false|none|The time the service token was last used|
|expires_at|string(date-time)|false|none|When the token stops authenticating. Null means it never expires.|
|semantic_layer_credentials|[object]|false|none|The semantic layer credentials associated with the service token|
|metadata_only|boolean|false|none|Deprecated. Use the metadata_only permission set instead.|
|webhooks_only|boolean|false|none|none|

<h2 id="tocS_ServiceTokenListEnveloped">ServiceTokenListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenlistenveloped"></a>
<a id="schema_ServiceTokenListEnveloped"></a>
<a id="tocSservicetokenlistenveloped"></a>
<a id="tocsservicetokenlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "uid": "string",
      "name": "string",
      "token": "string",
      "state": 1,
      "token_string": "string",
      "last_used": "1970-01-01T00:00:00Z",
      "last_identify": "1970-01-01T00:00:00Z",
      "user_id": 0,
      "user": {
        "first_name": "string",
        "last_name": "string"
      },
      "type": 1,
      "expires_at": "1970-01-01T00:00:00Z",
      "metadata_only": false,
      "webhooks_only": false,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "service_token_permissions": []
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceTokenResponse](#schemaservicetokenresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_ServiceTokenLite">ServiceTokenLite</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenlite"></a>
<a id="schema_ServiceTokenLite"></a>
<a id="tocSservicetokenlite"></a>
<a id="tocsservicetokenlite"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "uid": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|account_id|integer(int64)|true|none|none|
|uid|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_ServiceTokenPermission">ServiceTokenPermission</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenpermission"></a>
<a id="schema_ServiceTokenPermission"></a>
<a id="tocSservicetokenpermission"></a>
<a id="tocsservicetokenpermission"></a>

```json
{
  "account_id": 0,
  "service_token_id": 0,
  "project_id": 0,
  "all_projects": true,
  "permission_set": "account_admin",
  "state": 1,
  "writable_environment_categories": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|service_token_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|all_projects|boolean|true|none|none|
|permission_set|[PermissionSetEnum](#schemapermissionsetenum)|true|none|* `account_admin` - ACCOUNT_ADMIN<br>* `account_viewer` - ACCOUNT_VIEWER<br>* `admin` - ADMIN<br>* `analyst` - ANALYST<br>* `analyst_read` - ANALYST_READ<br>* `billing_admin` - BILLING_ADMIN<br>* `cost_insights_admin` - COST_INSIGHTS_ADMIN<br>* `cost_insights_viewer` - COST_INSIGHTS_VIEWER<br>* `cost_management_admin` - COST_MANAGEMENT_ADMIN<br>* `cost_management_viewer` - COST_MANAGEMENT_VIEWER<br>* `database_admin` - DATABASE_ADMIN<br>* `developer` - DEVELOPER<br>* `fusion_admin` - V2_MIGRATION_ADMIN<br>* `git_admin` - GIT_ADMIN<br>* `job_admin` - JOB_ADMIN<br>* `job_creator` - JOB_CREATOR<br>* `job_runner` - JOB_RUNNER<br>* `job_viewer` - JOB_VIEWER<br>* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS<br>* `member` - MEMBER<br>* `metadata_only` - METADATA_ONLY<br>* `notification_manager` - NOTIFICATION_MANAGER<br>* `owner` - OWNER<br>* `project_creator` - PROJECT_CREATOR<br>* `readonly` - READONLY<br>* `scim_only` - SCIM_ONLY<br>* `security_admin` - SECURITY_ADMIN<br>* `semantic_layer_only` - SEMANTIC_LAYER_ONLY<br>* `stakeholder` - STAKEHOLDER<br>* `team_admin` - TEAM_ADMIN<br>* `webhooks_only` - WEBHOOKS_ONLY|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|writable_environment_categories|[string]|true|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_ServiceTokenPermissionGrant">ServiceTokenPermissionGrant</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenpermissiongrant"></a>
<a id="schema_ServiceTokenPermissionGrant"></a>
<a id="tocSservicetokenpermissiongrant"></a>
<a id="tocsservicetokenpermissiongrant"></a>

```json
{
  "permission_set": "account_admin",
  "project_id": 0,
  "writable_environment_categories": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission_set|[PredefinedPermissionSet](#schemapredefinedpermissionset)|true|none|An enumeration.|
|project_id|integer(int64)|false|none|The project to which the permissions are scoped. If none, then the permissions apply to all projects.|
|writable_environment_categories|[string]|false|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_ServiceTokenPermissionListEnveloped">ServiceTokenPermissionListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenpermissionlistenveloped"></a>
<a id="schema_ServiceTokenPermissionListEnveloped"></a>
<a id="tocSservicetokenpermissionlistenveloped"></a>
<a id="tocsservicetokenpermissionlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "service_token_id": 0,
      "project_id": 0,
      "all_projects": true,
      "permission_set": "account_admin",
      "state": 1,
      "writable_environment_categories": [],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceTokenPermissionResponse](#schemaservicetokenpermissionresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_ServiceTokenPermissionResponse">ServiceTokenPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenpermissionresponse"></a>
<a id="schema_ServiceTokenPermissionResponse"></a>
<a id="tocSservicetokenpermissionresponse"></a>
<a id="tocsservicetokenpermissionresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "service_token_id": 0,
  "project_id": 0,
  "all_projects": true,
  "permission_set": "account_admin",
  "state": 1,
  "writable_environment_categories": [],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|service_token_id|integer(int64)|false|none|none|
|project_id|integer(int64)|false|none|none|
|all_projects|boolean|false|none|none|
|permission_set|[PermissionSetEnum](#schemapermissionsetenum)|false|none|* `account_admin` - ACCOUNT_ADMIN<br>* `account_viewer` - ACCOUNT_VIEWER<br>* `admin` - ADMIN<br>* `analyst` - ANALYST<br>* `analyst_read` - ANALYST_READ<br>* `billing_admin` - BILLING_ADMIN<br>* `cost_insights_admin` - COST_INSIGHTS_ADMIN<br>* `cost_insights_viewer` - COST_INSIGHTS_VIEWER<br>* `cost_management_admin` - COST_MANAGEMENT_ADMIN<br>* `cost_management_viewer` - COST_MANAGEMENT_VIEWER<br>* `database_admin` - DATABASE_ADMIN<br>* `developer` - DEVELOPER<br>* `fusion_admin` - V2_MIGRATION_ADMIN<br>* `git_admin` - GIT_ADMIN<br>* `job_admin` - JOB_ADMIN<br>* `job_creator` - JOB_CREATOR<br>* `job_runner` - JOB_RUNNER<br>* `job_viewer` - JOB_VIEWER<br>* `manage_marketplace_apps` - MANAGE_MARKETPLACE_APPS<br>* `member` - MEMBER<br>* `metadata_only` - METADATA_ONLY<br>* `notification_manager` - NOTIFICATION_MANAGER<br>* `owner` - OWNER<br>* `project_creator` - PROJECT_CREATOR<br>* `readonly` - READONLY<br>* `scim_only` - SCIM_ONLY<br>* `security_admin` - SECURITY_ADMIN<br>* `semantic_layer_only` - SEMANTIC_LAYER_ONLY<br>* `stakeholder` - STAKEHOLDER<br>* `team_admin` - TEAM_ADMIN<br>* `webhooks_only` - WEBHOOKS_ONLY|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|writable_environment_categories|[string]|false|none|Environment types the permission set can write to. Allowed values: development, other, staging, production, all. `other` is shown as General in the dbt UI.|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|account_admin|
|permission_set|account_viewer|
|permission_set|admin|
|permission_set|analyst|
|permission_set|analyst_read|
|permission_set|billing_admin|
|permission_set|cost_insights_admin|
|permission_set|cost_insights_viewer|
|permission_set|cost_management_admin|
|permission_set|cost_management_viewer|
|permission_set|database_admin|
|permission_set|developer|
|permission_set|fusion_admin|
|permission_set|git_admin|
|permission_set|job_admin|
|permission_set|job_creator|
|permission_set|job_runner|
|permission_set|job_viewer|
|permission_set|manage_marketplace_apps|
|permission_set|member|
|permission_set|metadata_only|
|permission_set|notification_manager|
|permission_set|owner|
|permission_set|project_creator|
|permission_set|readonly|
|permission_set|scim_only|
|permission_set|security_admin|
|permission_set|semantic_layer_only|
|permission_set|stakeholder|
|permission_set|team_admin|
|permission_set|webhooks_only|

<h2 id="tocS_ServiceTokenResponse">ServiceTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokenresponse"></a>
<a id="schema_ServiceTokenResponse"></a>
<a id="tocSservicetokenresponse"></a>
<a id="tocsservicetokenresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "uid": "string",
  "name": "string",
  "token": "string",
  "state": 1,
  "token_string": "string",
  "last_used": "1970-01-01T00:00:00Z",
  "last_identify": "1970-01-01T00:00:00Z",
  "user_id": 0,
  "user": {
    "first_name": "string",
    "last_name": "string"
  },
  "type": 1,
  "expires_at": "1970-01-01T00:00:00Z",
  "metadata_only": false,
  "webhooks_only": false,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "service_token_permissions": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|none|
|uid|string|false|none|none|
|name|string|false|none|none|
|token|string|false|none|none|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|token_string|string|true|read-only|none|
|last_used|string(date-time)|true|read-only|none|
|last_identify|string(date-time)|true|read-only|none|
|user_id|integer(int64)|false|none|none|
|user|[User](#schemauser)|false|none|none|
|type|[Type34eEnum](#schematype34eenum)|false|none|* `1` - CLOUD_CLI<br>* `2` - GENERAL<br>* `3` - NATIVE_APP_USER_LINK<br>* `4` - SCIM|
|expires_at|string(date-time)|false|none|none|
|metadata_only|boolean|false|none|none|
|webhooks_only|boolean|false|none|none|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|service_token_permissions|[[ServiceTokenPermission](#schemaservicetokenpermission)]|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|
|type|3|
|type|4|

<h2 id="tocS_ServiceTokenType">ServiceTokenType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetokentype"></a>
<a id="schema_ServiceTokenType"></a>
<a id="tocSservicetokentype"></a>
<a id="tocsservicetokentype"></a>

```json
1
```

An enumeration.

<h2 id="tocS_SnowflakeConnection">SnowflakeConnection</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakeconnection"></a>
<a id="schema_SnowflakeConnection"></a>
<a id="tocSsnowflakeconnection"></a>
<a id="tocssnowflakeconnection"></a>

```json
{
  "account": "string",
  "database": "string",
  "warehouse": "string",
  "client_session_keep_alive": false,
  "role": "string",
  "allow_sso": false,
  "oauth_client_id": "password",
  "oauth_client_secret": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|none|
|database|string|true|none|none|
|warehouse|string|true|none|none|
|client_session_keep_alive|boolean|false|none|none|
|role|string|false|none|none|
|allow_sso|boolean|false|none|none|
|oauth_client_id|string(password)|false|write-only|none|
|oauth_client_secret|string(password)|false|write-only|none|

<h2 id="tocS_SnowflakeCredentials">SnowflakeCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakecredentials"></a>
<a id="schema_SnowflakeCredentials"></a>
<a id="tocSsnowflakecredentials"></a>
<a id="tocssnowflakecredentials"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "auth_type": "password",
  "schema": "string",
  "user": "string",
  "target_name": "string",
  "role": "string",
  "database": "string",
  "warehouse": "string",
  "_refresh_token": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|auth_type|[SnowflakeCredentialsAuthTypeEnum](#schemasnowflakecredentialsauthtypeenum)|true|none|* `password` - PASSWORD<br>* `keypair` - KEYPAIR<br>* `sso` - SSO<br>* `external_oauth` - EXTERNAL_OAUTH|
|schema|string|true|none|none|
|user|string|false|none|none|
|target_name|string|true|none|none|
|role|string|false|none|none|
|database|string|false|none|none|
|warehouse|string|false|none|none|
|_refresh_token|string|false|none|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|auth_type|password|
|auth_type|keypair|
|auth_type|sso|
|auth_type|external_oauth|

<h2 id="tocS_SnowflakeCredentialsAuthTypeEnum">SnowflakeCredentialsAuthTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakecredentialsauthtypeenum"></a>
<a id="schema_SnowflakeCredentialsAuthTypeEnum"></a>
<a id="tocSsnowflakecredentialsauthtypeenum"></a>
<a id="tocssnowflakecredentialsauthtypeenum"></a>

```json
"password"
```

* `password` - PASSWORD
* `keypair` - KEYPAIR
* `sso` - SSO
* `external_oauth` - EXTERNAL_OAUTH

<h2 id="tocS_SnowflakeCredentialsRequest">SnowflakeCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakecredentialsrequest"></a>
<a id="schema_SnowflakeCredentialsRequest"></a>
<a id="tocSsnowflakecredentialsrequest"></a>
<a id="tocssnowflakecredentialsrequest"></a>

```json
{
  "account_id": 0,
  "project_id": 0,
  "type": "postgres",
  "state": 1,
  "threads": 0,
  "auth_type": "password",
  "schema": "string",
  "user": "string",
  "target_name": "string",
  "role": "string",
  "database": "string",
  "warehouse": "string",
  "_refresh_token": "string",
  "password": "string",
  "private_key": "string",
  "private_key_passphrase": "string",
  "adapter_version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|none|
|project_id|integer(int64)|false|none|none|
|type|[ConnectionTypeEnum](#schemaconnectiontypeenum)|true|none|* `postgres` - postgres<br>* `redshift` - redshift<br>* `snowflake` - snowflake<br>* `bigquery` - bigquery<br>* `adapter` - adapter|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|threads|integer|true|none|none|
|auth_type|[SnowflakeCredentialsAuthTypeEnum](#schemasnowflakecredentialsauthtypeenum)|true|none|* `password` - PASSWORD<br>* `keypair` - KEYPAIR<br>* `sso` - SSO<br>* `external_oauth` - EXTERNAL_OAUTH|
|schema|string|true|none|none|
|user|string|false|none|none|
|target_name|string|true|none|none|
|role|string|false|none|none|
|database|string|false|none|none|
|warehouse|string|false|none|none|
|_refresh_token|string|false|none|none|
|password|string|false|write-only|none|
|private_key|string|false|write-only|none|
|private_key_passphrase|string|false|write-only|none|
|adapter_version|object|false|none|The version of the adapter used to create this connection. Can use instead of adapter_id.<br><br>* `apache_spark_v0` - apache_spark_v0<br>* `databricks_spark_v0` - databricks_spark_v0<br>* `databricks_v0` - databricks_v0<br>* `trino_v0` - trino_v0<br>* `snowflake_v0` - snowflake_v0<br>* `bigquery_v0` - bigquery_v0<br>* `bigquery_v1` - bigquery_v1<br>* `postgres_v0` - postgres_v0<br>* `redshift_v0` - redshift_v0<br>* `salesforce_v0` - salesforce_v0<br>* `synapse_v0` - synapse_v0<br>* `fabric_v0` - fabric_v0<br>* `athena_v0` - athena_v0<br>* `teradata_v0` - teradata_v0<br>* `clickhouse_v0` - clickhouse_v0|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postgres|
|type|redshift|
|type|snowflake|
|type|bigquery|
|type|adapter|
|auth_type|password|
|auth_type|keypair|
|auth_type|sso|
|auth_type|external_oauth|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "is_success": true,
  "user_message": "string",
  "developer_message": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|is_success|boolean|false|none|none|
|user_message|string|false|none|none|
|developer_message|string|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "event_types": [
    null
  ],
  "job_ids": [
    0
  ],
  "client_url": "string",
  "active": true,
  "http_status_code": "string",
  "dispatched_at": "string",
  "deactivate_reason": "string",
  "account_id": 0,
  "account_identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|true|none|Webhook name|
|description|string|false|none|Webhook description|
|event_types|[object]|true|none|Event types that trigger this webhook. Must not be empty.|
|job_ids|[integer(int64)]|false|none|Job IDs that trigger this webhook. Leave empty to trigger for all jobs.|
|client_url|string|true|none|Endpoint where events are sent|
|active|boolean|true|none|Whether or not this Webhook is currently active|
|http_status_code|string|false|none|The latest HTTP status code received from the client URL. 0 indicates that the webhook has not been dispatched.|
|dispatched_at|string|false|none|Timestamp of when the webhook was last dispatched.|
|deactivate_reason|string|false|none|Reason for deactivation|
|account_id|integer(int64)|false|none|none|
|account_identifier|string|false|none|none|

<h2 id="tocS_SubscriptionRequest">SubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionrequest"></a>
<a id="schema_SubscriptionRequest"></a>
<a id="tocSsubscriptionrequest"></a>
<a id="tocssubscriptionrequest"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "event_types": [
    null
  ],
  "job_ids": [
    0
  ],
  "client_url": "string",
  "active": true,
  "http_status_code": "string",
  "dispatched_at": "string",
  "deactivate_reason": "string",
  "account_id": 0,
  "account_identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|true|none|Webhook name|
|description|string|false|none|Webhook description|
|event_types|[object]|true|none|Event types that trigger this webhook. Must not be empty.|
|job_ids|[integer(int64)]|false|none|Job IDs that trigger this webhook. Leave empty to trigger for all jobs.|
|client_url|string|true|none|Endpoint where events are sent|
|active|boolean|true|none|Whether or not this Webhook is currently active|
|http_status_code|string|false|none|The latest HTTP status code received from the client URL. 0 indicates that the webhook has not been dispatched.|
|dispatched_at|string|false|none|Timestamp of when the webhook was last dispatched.|
|deactivate_reason|string|false|none|Reason for deactivation|
|account_id|integer(int64)|false|none|none|
|account_identifier|string|false|none|none|

<h2 id="tocS_SubscriptionResponseEnvelope">SubscriptionResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponseenvelope"></a>
<a id="schema_SubscriptionResponseEnvelope"></a>
<a id="tocSsubscriptionresponseenvelope"></a>
<a id="tocssubscriptionresponseenvelope"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscription](#schemasubscription)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_SynapseConnection">SynapseConnection</h2>
<!-- backwards compatibility -->
<a id="schemasynapseconnection"></a>
<a id="schema_SynapseConnection"></a>
<a id="tocSsynapseconnection"></a>
<a id="tocssynapseconnection"></a>

```json
{
  "host": "string",
  "database": "string",
  "driver": "ODBC Driver 18 for SQL Server",
  "port": 1433,
  "retries": 1,
  "login_timeout": 0,
  "query_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|database|string|true|none|none|
|driver|string|false|none|none|
|port|integer|false|none|none|
|retries|integer|false|none|none|
|login_timeout|integer|false|none|none|
|query_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_TeradataConnection">TeradataConnection</h2>
<!-- backwards compatibility -->
<a id="schemateradataconnection"></a>
<a id="schema_TeradataConnection"></a>
<a id="tocSteradataconnection"></a>
<a id="tocsteradataconnection"></a>

```json
{
  "port": "string",
  "tmode": "ANSI",
  "host": "string",
  "retries": 0,
  "request_timeout": 0,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|string|false|none|none|
|tmode|string|false|none|none|
|host|string|true|none|none|
|retries|integer|false|none|none|
|request_timeout|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_TestSubscriptionResponseData">TestSubscriptionResponseData</h2>
<!-- backwards compatibility -->
<a id="schematestsubscriptionresponsedata"></a>
<a id="schema_TestSubscriptionResponseData"></a>
<a id="tocStestsubscriptionresponsedata"></a>
<a id="tocstestsubscriptionresponsedata"></a>

```json
{
  "event_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|none|

<h2 id="tocS_TestSubscriptionResponseEnvelope">TestSubscriptionResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schematestsubscriptionresponseenvelope"></a>
<a id="schema_TestSubscriptionResponseEnvelope"></a>
<a id="tocStestsubscriptionresponseenvelope"></a>
<a id="tocstestsubscriptionresponseenvelope"></a>

```json
{
  "data": {
    "event_id": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TestSubscriptionResponseData](#schematestsubscriptionresponsedata)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_TrinoConnection">TrinoConnection</h2>
<!-- backwards compatibility -->
<a id="schematrinoconnection"></a>
<a id="schema_TrinoConnection"></a>
<a id="tocStrinoconnection"></a>
<a id="tocstrinoconnection"></a>

```json
{
  "host": "string",
  "method": "ldap",
  "port": 443,
  "adapter_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|none|
|method|string|false|none|none|
|port|integer|false|none|none|
|adapter_id|integer(int64)|false|none|Deprecated, use connection_details.adapter_version|

<h2 id="tocS_Type24eEnum">Type24eEnum</h2>
<!-- backwards compatibility -->
<a id="schematype24eenum"></a>
<a id="schema_Type24eEnum"></a>
<a id="tocStype24eenum"></a>
<a id="tocstype24eenum"></a>

```json
0
```

* `0` - DEFAULT
* `1` - HYBRID

<h2 id="tocS_Type34eEnum">Type34eEnum</h2>
<!-- backwards compatibility -->
<a id="schematype34eenum"></a>
<a id="schema_Type34eEnum"></a>
<a id="tocStype34eenum"></a>
<a id="tocstype34eenum"></a>

```json
1
```

* `1` - CLOUD_CLI
* `2` - GENERAL
* `3` - NATIVE_APP_USER_LINK
* `4` - SCIM

<h2 id="tocS_Type76eEnum">Type76eEnum</h2>
<!-- backwards compatibility -->
<a id="schematype76eenum"></a>
<a id="schema_Type76eEnum"></a>
<a id="tocStype76eenum"></a>
<a id="tocstype76eenum"></a>

```json
"development"
```

* `development` - DEVELOPMENT
* `deployment` - DEPLOYMENT

<h2 id="tocS_TypeEdaEnum">TypeEdaEnum</h2>
<!-- backwards compatibility -->
<a id="schematypeedaenum"></a>
<a id="schema_TypeEdaEnum"></a>
<a id="tocStypeedaenum"></a>
<a id="tocstypeedaenum"></a>

```json
1
```

* `1` - ALLOW
* `2` - DENY

<h2 id="tocS_UpdateIPRestrictionRequestRequest">UpdateIPRestrictionRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateiprestrictionrequestrequest"></a>
<a id="schema_UpdateIPRestrictionRequestRequest"></a>
<a id="tocSupdateiprestrictionrequestrequest"></a>
<a id="tocsupdateiprestrictionrequestrequest"></a>

```json
{
  "name": "string",
  "type": 1,
  "rule_set_enabled": true,
  "account_id": 0,
  "cidrs": [
    {
      "state": 1,
      "cidr": "string",
      "id": 0
    }
  ],
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[TypeEdaEnum](#schematypeedaenum)|true|none|* `1` - ALLOW<br>* `2` - DENY|
|rule_set_enabled|boolean|true|none|none|
|account_id|integer(int64)|true|none|none|
|cidrs|[[IPRestrictionCidrRequestRequest](#schemaiprestrictioncidrrequestrequest)]|true|none|none|
|description|string|false|none|none|
|id|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|

<h2 id="tocS_UpdateServiceTokenRequestRequest">UpdateServiceTokenRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicetokenrequestrequest"></a>
<a id="schema_UpdateServiceTokenRequestRequest"></a>
<a id="tocSupdateservicetokenrequestrequest"></a>
<a id="tocsupdateservicetokenrequestrequest"></a>

```json
{
  "name": "string"
}
```

Request body for updating a service token name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the service token|

<h2 id="tocS_UpdateSubscriptionResponseEnvelope">UpdateSubscriptionResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionresponseenvelope"></a>
<a id="schema_UpdateSubscriptionResponseEnvelope"></a>
<a id="tocSupdatesubscriptionresponseenvelope"></a>
<a id="tocsupdatesubscriptionresponseenvelope"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "event_types": [
      null
    ],
    "job_ids": [
      0
    ],
    "client_url": "string",
    "active": true,
    "http_status_code": "string",
    "dispatched_at": "string",
    "deactivate_reason": "string",
    "account_id": 0,
    "account_identifier": "string"
  },
  "status": {
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscription](#schemasubscription)|true|none|none|
|status|[WebhookResponseStatus](#schemawebhookresponsestatus)|true|none|none|

<h2 id="tocS_UpdateUserSCIMRequestRequest">UpdateUserSCIMRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserscimrequestrequest"></a>
<a id="schema_UpdateUserSCIMRequestRequest"></a>
<a id="tocSupdateuserscimrequestrequest"></a>
<a id="tocsupdateuserscimrequestrequest"></a>

```json
{
  "schemas": [
    "string"
  ],
  "Operations": [
    {
      "op": {},
      "value": {
        "active": true
      },
      "path": "string"
    }
  ]
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|The user schemas supported by the SCIM provider|
|Operations|[[UserOperationComponent](#schemauseroperationcomponent)]|true|none|The operations to perform on the user|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_UserCredentialsEnveloped">UserCredentialsEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemausercredentialsenveloped"></a>
<a id="schema_UserCredentialsEnveloped"></a>
<a id="tocSusercredentialsenveloped"></a>
<a id="tocsusercredentialsenveloped"></a>

```json
{
  "data": {
    "id": 0,
    "account_id": 0,
    "user_id": 0,
    "project_id": 0,
    "credentials_id": 0,
    "state": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "account_id": 0,
      "project_id": 0,
      "type": "postgres",
      "state": 1,
      "threads": 0,
      "username": "string",
      "default_schema": "string",
      "target_name": "string",
      "adapter_version": {}
    },
    "project": {
      "name": "string",
      "account_id": 0,
      "description": "string",
      "connection_id": 0,
      "repository_id": 0,
      "semantic_layer_config_id": 0,
      "state": 1,
      "dbt_project_subdirectory": "string",
      "docs_job_id": 0,
      "freshness_job_id": 0,
      "type": {}
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UserCredentialsResponse](#schemausercredentialsresponse)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_UserCredentialsListEnveloped">UserCredentialsListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemausercredentialslistenveloped"></a>
<a id="schema_UserCredentialsListEnveloped"></a>
<a id="tocSusercredentialslistenveloped"></a>
<a id="tocsusercredentialslistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "account_id": 0,
      "user_id": 0,
      "project_id": 0,
      "credentials_id": 0,
      "state": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "account_id": 0,
        "project_id": 0,
        "type": "postgres",
        "state": 1,
        "threads": 0,
        "username": "string",
        "default_schema": "string",
        "target_name": "string",
        "adapter_version": {}
      },
      "project": {
        "name": "string",
        "account_id": 0,
        "description": "string",
        "connection_id": 0,
        "repository_id": 0,
        "semantic_layer_config_id": 0,
        "state": 1,
        "dbt_project_subdirectory": "string",
        "docs_job_id": 0,
        "freshness_job_id": 0,
        "type": {}
      }
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserCredentialsResponse](#schemausercredentialsresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_UserCredentialsRequest">UserCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemausercredentialsrequest"></a>
<a id="schema_UserCredentialsRequest"></a>
<a id="tocSusercredentialsrequest"></a>
<a id="tocsusercredentialsrequest"></a>

```json
{
  "account_id": 0,
  "user_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The account the user credentials are associated with|
|user_id|integer(int64)|true|none|The user the user credentials are associated with|
|project_id|integer(int64)|true|none|The project the user credentials are associated with|
|credentials_id|integer(int64)|true|none|The credentials the user is associated with|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

<h2 id="tocS_UserCredentialsResponse">UserCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemausercredentialsresponse"></a>
<a id="schema_UserCredentialsResponse"></a>
<a id="tocSusercredentialsresponse"></a>
<a id="tocsusercredentialsresponse"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "user_id": 0,
  "project_id": 0,
  "credentials_id": 0,
  "state": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "account_id": 0,
    "project_id": 0,
    "type": "postgres",
    "state": 1,
    "threads": 0,
    "username": "string",
    "default_schema": "string",
    "target_name": "string",
    "adapter_version": {}
  },
  "project": {
    "name": "string",
    "account_id": 0,
    "description": "string",
    "connection_id": 0,
    "repository_id": 0,
    "semantic_layer_config_id": 0,
    "state": 1,
    "dbt_project_subdirectory": "string",
    "docs_job_id": 0,
    "freshness_job_id": 0,
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|account_id|integer(int64)|false|none|The account the user credentials are associated with|
|user_id|integer(int64)|false|none|The user the user credentials are associated with|
|project_id|integer(int64)|false|none|The project the user credentials are associated with|
|credentials_id|integer(int64)|false|none|The credentials the user is associated with|
|state|integer|false|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|
|created_at|string(date-time)|true|read-only|none|
|updated_at|string(date-time)|true|read-only|none|
|credentials|object|true|read-only|none|
|project|object|true|read-only|none|

<h2 id="tocS_UserEmailComponent">UserEmailComponent</h2>
<!-- backwards compatibility -->
<a id="schemauseremailcomponent"></a>
<a id="schema_UserEmailComponent"></a>
<a id="tocSuseremailcomponent"></a>
<a id="tocsuseremailcomponent"></a>

```json
{
  "value": "",
  "primary": false,
  "type": "work"
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The email address of the user|
|primary|boolean|false|none|Whether the email address is the primary email address of the user|
|type|string|false|none|The type of the email address|

<h2 id="tocS_UserGroupComponent">UserGroupComponent</h2>
<!-- backwards compatibility -->
<a id="schemausergroupcomponent"></a>
<a id="schema_UserGroupComponent"></a>
<a id="tocSusergroupcomponent"></a>
<a id="tocsusergroupcomponent"></a>

```json
{
  "id": "string",
  "externalId": "string",
  "displayName": "string",
  "members": [
    {
      "value": "string",
      "display": "string"
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string",
    "created": "string",
    "lastModified": "string"
  },
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:Group"
  ],
  "value": "string",
  "display": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the group|
|externalId|string|false|none|The external ID of the group|
|displayName|string|true|none|The display name of the group|
|members|[[GroupMemberComponent](#schemagroupmembercomponent)]|false|none|The members of the group|
|meta|object|true|none|The metadata of the group|
|schemas|[object]|false|none|none|
|value|string|true|none|The ID of the group|
|display|string|true|none|The display name of the group|

<h2 id="tocS_UserLicense">UserLicense</h2>
<!-- backwards compatibility -->
<a id="schemauserlicense"></a>
<a id="schema_UserLicense"></a>
<a id="tocSuserlicense"></a>
<a id="tocsuserlicense"></a>

```json
{
  "license_type": "string",
  "state": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|license_type|string|true|none|The type of license, e.g. `developer` or `read_only`|
|state|integer|true|none|A value of 1 means this entity is active and a value of 2 means this entity is deleted|

<h2 id="tocS_UserListEnveloped">UserListEnveloped</h2>
<!-- backwards compatibility -->
<a id="schemauserlistenveloped"></a>
<a id="schema_UserListEnveloped"></a>
<a id="tocSuserlistenveloped"></a>
<a id="tocsuserlistenveloped"></a>

```json
{
  "data": [
    {
      "id": 0,
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "apitoken_last_used": "1970-01-01T00:00:00Z",
      "azure_active_directory_connected": false,
      "azure_active_directory_token_retrieval_failure": true,
      "azure_active_directory_username": "string",
      "email_connected": false,
      "email_verified": false,
      "enterprise_connected": false,
      "enterprise_authentication_method": "string",
      "github_connected": false,
      "github_username": "string",
      "gitlab_connected": false,
      "gitlab_username": "string",
      "is_active": false,
      "is_staff": false,
      "last_login": "1970-01-01T00:00:00Z",
      "show_existing_user_email_verification": true,
      "sso_only_user": true,
      "github_token_retrieval_failure": true,
      "gitlab_token_retrieval_failure": true,
      "created_at": "1970-01-01T00:00:00Z",
      "permissions": [
        {
          "license_type": "string",
          "state": 1
        }
      ],
      "auth_provider_infos": null,
      "licenses": null
    }
  ],
  "extra": {
    "filters": {
      "property1": null,
      "property2": null
    },
    "order_by": "string",
    "pagination": {
      "count": 0,
      "total_count": 0
    }
  },
  "status": {
    "code": 200,
    "is_success": true,
    "user_message": "string",
    "developer_message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserResponse](#schemauserresponse)]|true|none|none|
|extra|[Extra](#schemaextra)|true|none|none|
|status|[ResponseStatus](#schemaresponsestatus)|true|none|none|

<h2 id="tocS_UserNameComponent">UserNameComponent</h2>
<!-- backwards compatibility -->
<a id="schemausernamecomponent"></a>
<a id="schema_UserNameComponent"></a>
<a id="tocSusernamecomponent"></a>
<a id="tocsusernamecomponent"></a>

```json
{
  "givenName": "",
  "familyName": ""
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|givenName|string|false|none|The given name of the user|
|familyName|string|false|none|The family name of the user|

<h2 id="tocS_UserOperationComponent">UserOperationComponent</h2>
<!-- backwards compatibility -->
<a id="schemauseroperationcomponent"></a>
<a id="schema_UserOperationComponent"></a>
<a id="tocSuseroperationcomponent"></a>
<a id="tocsuseroperationcomponent"></a>

```json
{
  "op": {},
  "value": {
    "active": true
  },
  "path": "string"
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|object|true|none|The operation to perform on the user|
|value|[UserValueComponent](#schemauservaluecomponent) \| string|true|none|The value to perform the operation on|
|path|string|false|none|The path to the value to perform the operation on|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "id": 0,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "apitoken_last_used": "1970-01-01T00:00:00Z",
  "azure_active_directory_connected": false,
  "azure_active_directory_token_retrieval_failure": true,
  "azure_active_directory_username": "string",
  "email_connected": false,
  "email_verified": false,
  "enterprise_connected": false,
  "enterprise_authentication_method": "string",
  "github_connected": false,
  "github_username": "string",
  "gitlab_connected": false,
  "gitlab_username": "string",
  "is_active": false,
  "is_staff": false,
  "last_login": "1970-01-01T00:00:00Z",
  "show_existing_user_email_verification": true,
  "sso_only_user": true,
  "github_token_retrieval_failure": true,
  "gitlab_token_retrieval_failure": true,
  "created_at": "1970-01-01T00:00:00Z",
  "permissions": [
    {
      "license_type": "string",
      "state": 1
    }
  ],
  "auth_provider_infos": null,
  "licenses": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|read-only|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|email|string|true|read-only|none|
|apitoken_last_used|string(date-time)|true|read-only|none|
|azure_active_directory_connected|boolean|true|read-only|none|
|azure_active_directory_token_retrieval_failure|boolean|true|read-only|none|
|azure_active_directory_username|string|true|read-only|none|
|email_connected|boolean|true|read-only|none|
|email_verified|boolean|true|read-only|none|
|enterprise_connected|boolean|true|read-only|none|
|enterprise_authentication_method|string|true|read-only|none|
|github_connected|boolean|true|read-only|none|
|github_username|string|true|read-only|none|
|gitlab_connected|boolean|true|read-only|none|
|gitlab_username|string|true|read-only|none|
|is_active|boolean|true|read-only|none|
|is_staff|boolean|true|read-only|none|
|last_login|string(date-time)|true|read-only|none|
|show_existing_user_email_verification|boolean|true|read-only|none|
|sso_only_user|boolean|true|read-only|none|
|github_token_retrieval_failure|boolean|true|read-only|none|
|gitlab_token_retrieval_failure|boolean|true|read-only|none|
|created_at|string(date-time)|true|read-only|none|
|permissions|[[UserLicense](#schemauserlicense)]|true|read-only|none|
|auth_provider_infos|object|true|read-only|none|
|licenses|object|true|read-only|none|

<h2 id="tocS_UserSCIM">UserSCIM</h2>
<!-- backwards compatibility -->
<a id="schemauserscim"></a>
<a id="schema_UserSCIM"></a>
<a id="tocSuserscim"></a>
<a id="tocsuserscim"></a>

```json
{
  "id": "string",
  "externalId": "12uhdfs0",
  "userName": "string",
  "active": true,
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User"
  ],
  "name": {
    "givenName": "John",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "john.smith@example.com",
      "primary": "True"
    }
  ],
  "groups": [
    {
      "value": "1234",
      "externalId": "group-1234",
      "display": "Example Group"
    }
  ],
  "meta": {
    "resourceType": "User",
    "created": "2024-01-01T00:00:00+00:00",
    "lastModified": "2024-01-01T00:00:00+00:00",
    "location": "/scim/v2/Users/1111"
  },
  "urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User": {
    "licenseType": "developer"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the user|
|externalId|string|false|none|The external ID of the user (user's scim id)|
|userName|string|true|none|The username for the user which is their email address|
|active|boolean|true|none|Whether the user is active|
|schemas|[string]|false|none|The schemas supported by the SCIM provider|
|name|object|true|none|The user's name components|
|emails|[[UserEmailComponent](#schemauseremailcomponent)]|true|none|The user's email addresses|
|groups|[[UserGroupComponent](#schemausergroupcomponent)]|false|none|The groups the user belongs to|
|meta|object|true|none|The metadata for the user|
|urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User|object|false|none|Custom attributes for the user. This is where licenseType will be stored|

<h2 id="tocS_UserValueComponent">UserValueComponent</h2>
<!-- backwards compatibility -->
<a id="schemauservaluecomponent"></a>
<a id="schema_UserValueComponent"></a>
<a id="tocSuservaluecomponent"></a>
<a id="tocsuservaluecomponent"></a>

```json
{
  "active": true
}
```

Base class for all request payloads.
It is expected that each endpoint extends this class to define its own payload format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|The active status of the user|

<h2 id="tocS_V3RequestParams">V3RequestParams</h2>
<!-- backwards compatibility -->
<a id="schemav3requestparams"></a>
<a id="schema_V3RequestParams"></a>
<a id="tocSv3requestparams"></a>
<a id="tocsv3requestparams"></a>

```json
{}
```

Base class for all URL request parameters.
It is expected that each endpoint extends this class to define its own parameters format

<h2 id="tocS_V3ResponseExtraData">V3ResponseExtraData</h2>
<!-- backwards compatibility -->
<a id="schemav3responseextradata"></a>
<a id="schema_V3ResponseExtraData"></a>
<a id="tocSv3responseextradata"></a>
<a id="tocsv3responseextradata"></a>

```json
{
  "filters": {},
  "order_by": "string",
  "pagination": {
    "count": 0,
    "total_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[V3RequestParams](#schemav3requestparams)|false|none|Base class for all URL request parameters.<br>It is expected that each endpoint extends this class to define its own parameters format|
|order_by|string \| [string]|false|none|none|
|pagination|[V3ResponsePagination](#schemav3responsepagination)|true|none|none|

<h2 id="tocS_V3ResponsePagination">V3ResponsePagination</h2>
<!-- backwards compatibility -->
<a id="schemav3responsepagination"></a>
<a id="schema_V3ResponsePagination"></a>
<a id="tocSv3responsepagination"></a>
<a id="tocsv3responsepagination"></a>

```json
{
  "count": 0,
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|total_count|integer|true|none|none|

<h2 id="tocS_WatchSelectionItem">WatchSelectionItem</h2>
<!-- backwards compatibility -->
<a id="schemawatchselectionitem"></a>
<a id="schema_WatchSelectionItem"></a>
<a id="tocSwatchselectionitem"></a>
<a id="tocswatchselectionitem"></a>

```json
{
  "identifier": "string",
  "name": "string",
  "type": "folder",
  "watching": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|name|string|true|none|none|
|type|[WatchSelectionType](#schemawatchselectiontype)|true|none|An enumeration.|
|watching|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|folder|
|type|dashboard|

<h2 id="tocS_WatchSelectionType">WatchSelectionType</h2>
<!-- backwards compatibility -->
<a id="schemawatchselectiontype"></a>
<a id="schema_WatchSelectionType"></a>
<a id="tocSwatchselectiontype"></a>
<a id="tocswatchselectiontype"></a>

```json
"folder"
```

An enumeration.

<h2 id="tocS_WebhookResponseStatus">WebhookResponseStatus</h2>
<!-- backwards compatibility -->
<a id="schemawebhookresponsestatus"></a>
<a id="schema_WebhookResponseStatus"></a>
<a id="tocSwebhookresponsestatus"></a>
<a id="tocswebhookresponsestatus"></a>

```json
{
  "code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|

<h2 id="tocS_schemas__adapters__bigquery__v0__connection_schema__Priority">schemas__adapters__bigquery__v0__connection_schema__Priority</h2>
<!-- backwards compatibility -->
<a id="schemaschemas__adapters__bigquery__v0__connection_schema__priority"></a>
<a id="schema_schemas__adapters__bigquery__v0__connection_schema__Priority"></a>
<a id="tocSschemas__adapters__bigquery__v0__connection_schema__priority"></a>
<a id="tocsschemas__adapters__bigquery__v0__connection_schema__priority"></a>

```json
"interactive"
```

An enumeration.

<h2 id="tocS_schemas__adapters__bigquery__v1__connection_schema__Priority">schemas__adapters__bigquery__v1__connection_schema__Priority</h2>
<!-- backwards compatibility -->
<a id="schemaschemas__adapters__bigquery__v1__connection_schema__priority"></a>
<a id="schema_schemas__adapters__bigquery__v1__connection_schema__Priority"></a>
<a id="tocSschemas__adapters__bigquery__v1__connection_schema__priority"></a>
<a id="tocsschemas__adapters__bigquery__v1__connection_schema__priority"></a>

```json
"interactive"
```

An enumeration.

<h2 id="tocS_schemas__adapters__lake_compute__connection_schema__AuthType">schemas__adapters__lake_compute__connection_schema__AuthType</h2>
<!-- backwards compatibility -->
<a id="schemaschemas__adapters__lake_compute__connection_schema__authtype"></a>
<a id="schema_schemas__adapters__lake_compute__connection_schema__AuthType"></a>
<a id="tocSschemas__adapters__lake_compute__connection_schema__authtype"></a>
<a id="tocsschemas__adapters__lake_compute__connection_schema__authtype"></a>

```json
"token"
```

An enumeration.

<h2 id="tocS_schemas__adapters__salesforce__connection_schema__AuthType">schemas__adapters__salesforce__connection_schema__AuthType</h2>
<!-- backwards compatibility -->
<a id="schemaschemas__adapters__salesforce__connection_schema__authtype"></a>
<a id="schema_schemas__adapters__salesforce__connection_schema__AuthType"></a>
<a id="tocSschemas__adapters__salesforce__connection_schema__authtype"></a>
<a id="tocsschemas__adapters__salesforce__connection_schema__authtype"></a>

```json
"jwt_bearer"
```

An enumeration.
