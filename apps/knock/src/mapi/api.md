<h1 id="knock-management-api-mapi">Knock Management API (mAPI) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://control.knock.app">https://control.knock.app</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="knock-management-api-mapi-accounts">Accounts</h1>

Resources for managing your Knock account.

## Verify scope

<a id="opIdgetWhoami"></a>

> Code samples

```bash
curl https://control.knock.app/v1/whoami \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/whoami`

Return information about the current calling scope. Will either be a service token or from an OAuth context.

> Example responses

> 200 Response

```json
{
  "account_features": {
    "batch_items_render_limit_allowed": false,
    "custom_branding_allowed": false,
    "data_retention_days": 30,
    "data_warehouse_extension_allowed": false,
    "datadog_extension_allowed": true,
    "dsync_allowed": false,
    "guides_monthly_notified_recipients_limit": 500,
    "guides_per_tenant_scope_allowed": false,
    "heap_extension_allowed": false,
    "knock_branding_required": true,
    "litmus_email_preview_allowed": false,
    "message_sent_limit": 10000,
    "new_relic_extension_allowed": false,
    "permission_groups_allowed": false,
    "segment_extension_allowed": false,
    "self_serve_allowed": true,
    "sso_allowed": false,
    "tenant_preferences_allowed": false,
    "translations_allowed": false
  },
  "account_name": "Acme, Inc.",
  "account_slug": "acme",
  "service_token_name": "My Service Token",
  "type": "service_token",
  "user_email": null,
  "user_id": null,
  "user_name": null
}
```

<h3 id="verify-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WhoamiResponse](#schemawhoamiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get billing summary

<a id="opIdgetBillingSummary"></a>

> Code samples

```bash
curl https://control.knock.app/v1/billing/summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/billing/summary`

Returns a snapshot of the current draft invoice for the account, including amount due, plan, per-metric usage, and remaining credit blocks.

> Example responses

> 200 Response

```json
{
  "amount_due": "110.00",
  "credits": [
    {
      "currency": "mnr_credits",
      "effective_at": "2026-01-01T00:00:00.000000Z",
      "expires_at": "2027-01-01T00:00:00.000000Z",
      "id": "crb_year1",
      "name": "Monthly notified recipients",
      "quantity": 10800000,
      "remaining": 6760000,
      "status": "active"
    }
  ],
  "currency": "USD",
  "invoice_id": "UR2cRSkE42n3XWfz",
  "period_end": "2026-09-18T23:59:59.000000Z",
  "period_start": "2026-08-19T00:00:00.000000Z",
  "plan": {
    "display_name": "Starter",
    "id": "starter-june-2023",
    "type": "starter"
  },
  "target_date": "2026-09-19",
  "usage": [
    {
      "amount": "90.00",
      "credits_applied": 0,
      "metric_id": "5LrfGRz9En96R9Hg",
      "name": "Messages Sent",
      "pricing_currency": "USD",
      "quantity": 12500,
      "quantity_type": "usage"
    },
    {
      "amount": "0.00",
      "credits_applied": 0,
      "metric_id": "C4vGey39VY99wxky",
      "name": "Monthly notified recipients - guides",
      "pricing_currency": "USD",
      "quantity": 320,
      "quantity_type": "usage"
    },
    {
      "amount": "20.00",
      "credits_applied": 0,
      "metric_id": "LPQ3cxs8xN6XPigy",
      "name": "Workflow Runs",
      "pricing_currency": "USD",
      "quantity": 48,
      "quantity_type": "usage"
    }
  ]
}
```

> 429 Response

```json
{}
```

<h3 id="get-billing-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BillingSummary](#schemabillingsummary)|
|429|Too Many Requests|Too Many Requests|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-headless-accounts">Headless accounts</h1>

Headless accounts let an agent create a Knock account on its own and hand it to a person to claim.

## Create a headless account

<a id="opIdcreateHeadlessAccount"></a>

> Code samples

```bash
curl https://control.knock.app/v1/headless_accounts \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/headless_accounts`

Creates an account that has no owner yet, and returns a service token the agent uses to work in it. The account is deleted after 24 hours unless a person claims it. This endpoint needs no authentication and is rate limited.

> Example responses

> 201 Response

```json
{
  "expires_at": "2026-10-29T12:00:00.000Z",
  "status": "provisioning",
  "token": "knock_st_1234567890"
}
```

> 403 Response

```json
{}
```

> 429 Response

```json
{}
```

> 500 Response

```json
{}
```

> 503 Response

```json
{}
```

<h3 id="create-a-headless-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[HeadlessAccount](#schemaheadlessaccount)|
|403|Forbidden|Forbidden|Inline|
|429|Too Many Requests|Too Many Requests|Inline|
|500|Internal Server Error|Internal Server Error|Inline|
|503|Service Unavailable|Service Unavailable|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get a headless account's status

<a id="opIdgetHeadlessAccountStatus"></a>

> Code samples

```bash
curl https://control.knock.app/v1/headless_accounts/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/headless_accounts/status`

Returns whether the headless account is still being set up, waiting to be claimed, claimed by a person, or past its claim window. Agents poll this endpoint to find out when a person has claimed the account.

> Example responses

> 200 Response

```json
{
  "expires_at": "2026-10-29T12:00:00.000Z",
  "status": "unclaimed"
}
```

> 403 Response

```json
{}
```

> 429 Response

```json
{}
```

<h3 id="get-a-headless-accounts-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HeadlessAccountStatus](#schemaheadlessaccountstatus)|
|403|Forbidden|Forbidden|Inline|
|429|Too Many Requests|Too Many Requests|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Start claiming a headless account

<a id="opIdclaimHeadlessAccount"></a>

> Code samples

```bash
curl https://control.knock.app/v1/headless_accounts/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "founder@example.com"
  }'
```

`POST /v1/headless_accounts/claim`

Starts handing the account to a person. Returns a link and a six-digit code for the agent to show that person. They open the link, sign in with the email given here, and type the code to become the account's owner. The service token keeps working afterwards. Starting a new claim replaces the previous link and code.

> Body parameter

```json
{
  "email": "founder@example.com"
}
```

<h3 id="start-claiming-a-headless-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HeadlessAccountClaimRequest](#schemaheadlessaccountclaimrequest)|false|Params|
|» email|body|string(email)|true|The email of the person who will own the account. Only they can finish the claim.|

> Example responses

> 200 Response

```json
{
  "claim_url": "https://dashboard.knock.app/claim-account?token=eyJhbGciOi",
  "expires_at": "2026-10-28T12:10:00.000Z",
  "user_code": "042917"
}
```

> 403 Response

```json
{}
```

> 409 Response

```json
{}
```

> 410 Response

```json
{}
```

> 422 Response

```json
{}
```

> 429 Response

```json
{}
```

> 503 Response

```json
{}
```

<h3 id="start-claiming-a-headless-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HeadlessAccountClaim](#schemaheadlessaccountclaim)|
|403|Forbidden|Forbidden|Inline|
|409|Conflict|Conflict|Inline|
|410|Gone|Gone|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Too Many Requests|Inline|
|503|Service Unavailable|Service Unavailable|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-workflows">Workflows</h1>

Workflows let you express your cross-channel notification logic.

## Get a workflow

<a id="opIdgetWorkflow"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/{workflow_key}`

Retrieve a workflow by its key in a given environment.

<h3 id="get-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "active": false,
  "categories": [
    "marketing",
    "black-friday"
  ],
  "conditions": {
    "all": [
      {
        "argument": "admin",
        "operator": "equal_to",
        "variable": "recipient.role"
      }
    ]
  },
  "created_at": "2022-12-16T19:07:50.027113Z",
  "created_by": {
    "email": "john@example.com",
    "id": "user_123",
    "name": "John Doe"
  },
  "description": "This is a dummy workflow for demo purposes.",
  "environment": "development",
  "key": "december-16-demo",
  "name": "december-16-demo",
  "settings": {
    "override_preferences": true
  },
  "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "description": "Main in-app feed",
      "name": "In-app step",
      "ref": "in_app_feed_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "trigger_data_json_schema": {
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "required": [
      "name"
    ],
    "type": "object"
  },
  "trigger_frequency": "every_trigger",
  "updated_at": "2023-02-08T22:15:19.846681Z",
  "updated_by": {
    "email": "jane@example.com",
    "id": "user_456",
    "name": "Jane Smith"
  },
  "valid": true
}
```

<h3 id="get-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ShowWorkflowResponse](#schemashowworkflowresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a workflow

<a id="opIdupsertWorkflow"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "workflow": {
      "name": "My Workflow",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "name": "Channel 1",
          "ref": "channel_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "trigger_events": [
        {
          "audience_action_type": "member_added",
          "audience_key": "pro-users",
          "type": "audience"
        }
      ]
    }
  }'
```

`PUT /v1/workflows/{workflow_key}`

Updates a workflow of a given key, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "workflow": {
    "name": "My Workflow",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ]
  }
}
```

<h3 id="upsert-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» workflow|body|[WorkflowRequest](#schemaworkflowrequest)|true|A workflow request for upserting a workflow.|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "active": false,
    "categories": [
      "marketing",
      "black-friday"
    ],
    "conditions": {
      "all": [
        {
          "argument": "admin",
          "operator": "equal_to",
          "variable": "recipient.role"
        }
      ]
    },
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "This is a dummy workflow for demo purposes.",
    "environment": "development",
    "key": "december-16-demo",
    "name": "december-16-demo",
    "settings": {
      "override_preferences": true
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "channel_type": "in_app_feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ data.onboarding_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
        },
        "type": "channel"
      },
      {
        "ref": "delay_1",
        "settings": {
          "delay_for": {
            "unit": "hours",
            "value": 1
          }
        },
        "type": "delay"
      },
      {
        "channel_key": "postmark",
        "channel_type": "email",
        "ref": "email_1",
        "template": {
          "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
          "settings": {
            "layout_key": "default"
          },
          "subject": "Welcome to {{ vars.app_name }}!"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "trigger_data_json_schema": {
      "properties": {
        "onboarding_url": {
          "type": "string"
        }
      },
      "required": [
        "onboarding_url"
      ],
      "type": "object"
    },
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ],
    "trigger_frequency": "every_trigger",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="upsert-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|A workflow object. Read more in the [docs](https://docs.knock.app/concepts/workflows).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a workflow

<a id="opIdvalidateWorkflow"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "workflow": {
      "name": "My Workflow",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "name": "Channel 1",
          "ref": "channel_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "trigger_events": [
        {
          "audience_action_type": "member_added",
          "audience_key": "pro-users",
          "type": "audience"
        }
      ]
    }
  }'
```

`PUT /v1/workflows/{workflow_key}/validate`

Validates a workflow payload without persisting it. Some read-only fields will be empty as they are generated by the system when persisted.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "workflow": {
    "name": "My Workflow",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ]
  }
}
```

<h3 id="validate-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» workflow|body|[WorkflowRequest](#schemaworkflowrequest)|true|A workflow request for upserting a workflow.|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "active": false,
    "categories": [
      "marketing",
      "black-friday"
    ],
    "conditions": {
      "all": [
        {
          "argument": "admin",
          "operator": "equal_to",
          "variable": "recipient.role"
        }
      ]
    },
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "This is a dummy workflow for demo purposes.",
    "environment": "development",
    "key": "december-16-demo",
    "name": "december-16-demo",
    "settings": {
      "override_preferences": true
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "channel_type": "in_app_feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ data.onboarding_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
        },
        "type": "channel"
      },
      {
        "ref": "delay_1",
        "settings": {
          "delay_for": {
            "unit": "hours",
            "value": 1
          }
        },
        "type": "delay"
      },
      {
        "channel_key": "postmark",
        "channel_type": "email",
        "ref": "email_1",
        "template": {
          "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
          "settings": {
            "layout_key": "default"
          },
          "subject": "Welcome to {{ vars.app_name }}!"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "trigger_data_json_schema": {
      "properties": {
        "onboarding_url": {
          "type": "string"
        }
      },
      "required": [
        "onboarding_url"
      ],
      "type": "object"
    },
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ],
    "trigger_frequency": "every_trigger",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="validate-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|A workflow object. Read more in the [docs](https://docs.knock.app/concepts/workflows).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Preview a workflow template

<a id="opIdpreviewWorkflowTemplate"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string/steps/string/preview_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": "dnedry",
    "data": {
      "park_id": 1
    },
    "recipient": "dnedry",
    "tenant": "acme-corp"
  }'
```

`POST /v1/workflows/{workflow_key}/steps/{step_ref}/preview_template`

Generates a rendered template for a given channel step in a workflow.

> Body parameter

```json
{
  "actor": "dnedry",
  "data": {
    "park_id": 1
  },
  "recipient": "dnedry",
  "tenant": "acme-corp"
}
```

<h3 id="preview-a-workflow-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow.|
|step_ref|path|string|true|The reference key of the channel step in the workflow to preview.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[PreviewWorkflowTemplateRequest](#schemapreviewworkflowtemplaterequest)|false|Params|
|» actor|body|object|false|The actor to reference in the the workflow run.|
|» » *anyOf*|body|[RecipientReference](#schemarecipientreference)|false|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» » *anyOf*|body|object \| null|false|none|
|» data|body|object|false|The data to pass to the workflow template for rendering.|
|» recipient|body|[RecipientReference](#schemarecipientreference)|true|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» tenant|body|string \| null|false|The tenant to associate the workflow with. Must not contain whitespace.|

> Example responses

> 200 Response

```json
{
  "content_type": "email",
  "result": "success",
  "template": {
    "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Welcome to {{ vars.app_name }}",
    "text_body": "Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} Get started here: {{ data.sign_in_url }}."
  }
}
```

<h3 id="preview-a-workflow-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreviewWorkflowTemplateResponse](#schemapreviewworkflowtemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List workflows

<a id="opIdlistWorkflows"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows`

Returns a paginated list of workflows available in a given environment. The workflows are returned alphabetically by `key`.

<h3 id="list-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "active": false,
      "categories": [
        "marketing",
        "black-friday"
      ],
      "conditions": {
        "all": [
          {
            "argument": "admin",
            "operator": "equal_to",
            "variable": "recipient.role"
          }
        ]
      },
      "created_at": "2022-12-16T19:07:50.027113Z",
      "description": "This is a dummy workflow for demo purposes.",
      "environment": "development",
      "key": "december-16-demo",
      "name": "december-16-demo",
      "settings": {
        "override_preferences": true
      },
      "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "channel_type": "in_app_feed",
          "description": "Main in-app feed",
          "name": "In-app step",
          "ref": "in_app_feed_1",
          "template": {
            "action_url": "{{ data.onboarding_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
          },
          "type": "channel"
        },
        {
          "ref": "delay_1",
          "settings": {
            "delay_for": {
              "unit": "hours",
              "value": 1
            }
          },
          "type": "delay"
        },
        {
          "channel_key": "postmark",
          "channel_type": "email",
          "ref": "email_1",
          "template": {
            "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
            "settings": {
              "layout_key": "default"
            },
            "subject": "Welcome to {{ vars.app_name }}!"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "onboarding",
        "growth"
      ],
      "trigger_data_json_schema": {
        "properties": {
          "onboarding_url": {
            "type": "string"
          }
        },
        "required": [
          "onboarding_url"
        ],
        "type": "object"
      },
      "trigger_events": [
        {
          "audience_action_type": "member_added",
          "audience_key": "pro-users",
          "type": "audience"
        }
      ],
      "trigger_frequency": "every_trigger",
      "updated_at": "2023-02-08T22:15:19.846681Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-workflows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Workflow](#schemaworkflow)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Run a workflow

<a id="opIdrunWorkflow"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string/run \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "park_id": 1
    },
    "recipients": [
      {
        "email": "jane@example.com",
        "id": "user_1",
        "name": "Jane Doe"
      }
    ]
  }'
```

`PUT /v1/workflows/{workflow_key}/run`

Runs the latest version of a committed workflow in a given environment using the params provided.

> Body parameter

```json
{
  "data": {
    "park_id": 1
  },
  "recipients": [
    {
      "email": "jane@example.com",
      "id": "user_1",
      "name": "Jane Doe"
    }
  ]
}
```

<h3 id="run-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[RunWorkflowRequest](#schemarunworkflowrequest)|false|Params|
|» actor|body|object|false|The actor to reference in the the workflow run.|
|» » *anyOf*|body|[RecipientReference](#schemarecipientreference)|false|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» » *anyOf*|body|[InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)|false|A user recipient with optional identify properties. When email or name are provided, the user is created or updated as part of the workflow run. The collection is always `$users` and should not be sent.|
|» » *anyOf*|body|object \| null|false|none|
|» cancellation_key|body|string \| null|false|A key to cancel the workflow run.|
|» data|body|object|false|A map of data to be used in the workflow run. The structure should conform to the workflow's `trigger_data_json_schema` if one is defined. Available in templates as `{{ data.field_name }}`. See [trigger data validation docs](https://docs.knock.app/developer-tools/validating-trigger-data).|
|» recipients|body|[[RecipientReference](#schemarecipientreference) \| [InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)]|true|A list of recipients to run the workflow for. Supports user IDs, object references, or inline identify user objects (id + optional email/name).|
|» » *anyOf*|body|[RecipientReference](#schemarecipientreference)|false|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» » *anyOf*|body|[InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)|false|A user recipient with optional identify properties. When email or name are provided, the user is created or updated as part of the workflow run. The collection is always `$users` and should not be sent.|
|» step_id|body|string(uuid) \| null|false|When set, runs only this message-sending channel step. Guide steps, legacy in-app steps, and unknown ids are rejected.|
|» tenant|body|string|false|The tenant to associate the workflow run with. Must not contain whitespace.|

> Example responses

> 200 Response

```json
{
  "workflow_run_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

<h3 id="run-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RunWorkflowResponse](#schemarunworkflowresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Activate a workflow

<a id="opIdactivateWorkflow"></a>

> Code samples

```bash
curl https://control.knock.app/v1/workflows/string/activate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": true
  }'
```

`PUT /v1/workflows/{workflow_key}/activate`

Activates (or deactivates) a workflow in a given environment. Read more in the [docs](https://docs.knock.app/concepts/workflows#workflow-status).

Note: This immediately enables or disables a workflow in a given environment without needing to go through environment promotion.


> Body parameter

```json
{
  "status": true
}
```

<h3 id="activate-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_key|path|string|true|The key of the workflow.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» status|body|boolean|true|Whether to activate or deactivate the workflow. Set to `true` by default, which will activate the workflow.|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "active": false,
    "categories": [
      "marketing",
      "black-friday"
    ],
    "conditions": {
      "all": [
        {
          "argument": "admin",
          "operator": "equal_to",
          "variable": "recipient.role"
        }
      ]
    },
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "This is a dummy workflow for demo purposes.",
    "environment": "development",
    "key": "december-16-demo",
    "name": "december-16-demo",
    "settings": {
      "override_preferences": true
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "channel_type": "in_app_feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ data.onboarding_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
        },
        "type": "channel"
      },
      {
        "ref": "delay_1",
        "settings": {
          "delay_for": {
            "unit": "hours",
            "value": 1
          }
        },
        "type": "delay"
      },
      {
        "channel_key": "postmark",
        "channel_type": "email",
        "ref": "email_1",
        "template": {
          "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
          "settings": {
            "layout_key": "default"
          },
          "subject": "Welcome to {{ vars.app_name }}!"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "trigger_data_json_schema": {
      "properties": {
        "onboarding_url": {
          "type": "string"
        }
      },
      "required": [
        "onboarding_url"
      ],
      "type": "object"
    },
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ],
    "trigger_frequency": "every_trigger",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="activate-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="activate-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|A workflow object. Read more in the [docs](https://docs.knock.app/concepts/workflows).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-sources">Sources</h1>

Sources receive external events that can trigger Knock actions.

## Get source status

<a id="opIdgetSourceStatus"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sources/{key}/status`

Returns source activity and workflow-trigger mappings that need action in the requested environment.

<h3 id="get-source-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source whose status should be retrieved.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "events_count": 42,
  "last_event_received": "2026-05-11T16:00:00Z",
  "mappings_count": 2,
  "mappings_requiring_commit": [
    {
      "action_type": "workflows_trigger",
      "active": true,
      "event_type": "invoice.created",
      "is_deleted": false,
      "resource_key": "invoice-created",
      "status": "updated"
    }
  ]
}
```

<h3 id="get-source-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceStatusResponse](#schemasourcestatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List sources

<a id="opIdlistSources"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sources`

Returns connected sources for the project.

<h3 id="list-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|include|query|[string]|false|Associated resources to include in each source. Accepts `environment_settings`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|environment_settings|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "custom_image_url": null,
      "description": "Receives webhook events",
      "key": "webhook",
      "name": "Webhook"
    }
  ]
}
```

<h3 id="list-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourcesResponse](#schemasourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Rehearse a source event

<a id="opIdrehearseSource"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string/rehearse \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "body": {
        "event": "order.created",
        "order_id": "ord_123"
      },
      "headers": {
        "content-type": "application/json"
      }
    }
  }'
```

`POST /v1/sources/{key}/rehearse`

Sends an arbitrary payload through the source's parse, preprocess, and mapping pipeline in the requested environment. This endpoint cannot be run in production environments.

> Body parameter

```json
{
  "payload": {
    "body": {
      "event": "order.created",
      "order_id": "ord_123"
    },
    "headers": {
      "content-type": "application/json"
    }
  }
}
```

<h3 id="rehearse-a-source-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source to rehearse.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|body|body|[SourceRehearseRequest](#schemasourcerehearserequest)|false|Payload|
|» payload|body|object|true|An arbitrary payload to send through the source's parse, preprocess, and mapping pipeline.|

> Example responses

> 200 Response

```json
{
  "action_logs_count": 1,
  "errors": null,
  "failed_action_logs_count": 0,
  "log_id": "log_123",
  "status": "ok",
  "successful_action_logs_count": 1
}
```

<h3 id="rehearse-a-source-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceRehearseResponse](#schemasourcerehearseresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a source

<a id="opIdgetSource"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sources/{key}`

Returns a source with environment-specific settings, preprocess scripts, and event mappings.

<h3 id="get-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|

> Example responses

> 200 Response

```json
{
  "created_at": "2021-01-01T00:00:00Z",
  "custom_image_url": null,
  "description": "Receives events from Segment.",
  "environment_settings": {
    "development": {
      "mappings": [],
      "settings": {
        "endpoint": "https://api.knock.app/integrations/receive/src_123",
        "enforce_idempotency": true,
        "enforce_verification": false,
        "event_type_path": "body.event",
        "handle_identifies": true,
        "idempotency_key_path": "body.messageId",
        "preprocess_script": {
          "language": "javascript",
          "source": "return event;"
        },
        "timestamp_path": "body.timestamp"
      },
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  "key": "segment-source",
  "name": "Segment Source",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

<h3 id="get-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Source](#schemasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a source

<a id="opIdupsertSource"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source": {
      "custom_image_url": null,
      "description": "Receives events over HTTP.",
      "environment_settings": {
        "development": {
          "mappings": [],
          "settings": {
            "enforce_verification": false,
            "event_type_path": "body.event",
            "idempotency_key_path": "body.messageId",
            "preprocess_script": {
              "language": "javascript",
              "source": "return event;"
            },
            "timestamp_path": "body.timestamp"
          }
        }
      },
      "name": "Universal HTTP Source"
    }
  }'
```

`PUT /v1/sources/{key}`

Creates or updates a source with environment-specific settings, preprocess scripts, and event mappings.

> Body parameter

```json
{
  "source": {
    "custom_image_url": null,
    "description": "Receives events over HTTP.",
    "environment_settings": {
      "development": {
        "mappings": [],
        "settings": {
          "enforce_verification": false,
          "event_type_path": "body.event",
          "idempotency_key_path": "body.messageId",
          "preprocess_script": {
            "language": "javascript",
            "source": "return event;"
          },
          "timestamp_path": "body.timestamp"
        }
      }
    },
    "name": "Universal HTTP Source"
  }
}
```

<h3 id="upsert-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source to upsert.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|body|body|object|false|Params|
|» source|body|[SourceRequest](#schemasourcerequest)|true|A source request for setting a source and its environment-specific configuration.|

> Example responses

> 200 Response

```json
{
  "source": {
    "created_at": "2021-01-01T00:00:00Z",
    "custom_image_url": null,
    "description": "Receives events from Segment.",
    "environment_settings": {
      "development": {
        "mappings": [],
        "settings": {
          "endpoint": "https://api.knock.app/integrations/receive/src_123",
          "enforce_idempotency": true,
          "enforce_verification": false,
          "event_type_path": "body.event",
          "handle_identifies": true,
          "idempotency_key_path": "body.messageId",
          "preprocess_script": {
            "language": "javascript",
            "source": "return event;"
          },
          "timestamp_path": "body.timestamp"
        },
        "updated_at": "2021-01-01T00:00:00Z"
      }
    },
    "key": "segment-source",
    "name": "Segment Source",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[Source](#schemasource)|true|none|A source that receives external events and maps them to Knock actions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List source events

<a id="opIdlistSourceEvents"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sources/{key}/events`

Returns known unique events received by a source in the requested environment.

<h3 id="list-source-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source whose events should be listed.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "event": "user.created",
      "last_received_at": "2024-01-15T12:00:00Z"
    }
  ]
}
```

<h3 id="list-source-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceEventsResponse](#schemasourceeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List source providers

<a id="opIdlistSourceProviders"></a>

> Code samples

```bash
curl https://control.knock.app/v1/source_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/source_providers`

Returns the source provider templates available for creating sources.

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "key": "segment",
      "provider": {
        "description": "Receive customer events from Segment.",
        "name": "Segment"
      },
      "version": "1.0.0"
    }
  ]
}
```

<h3 id="list-source-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceProvidersResponse](#schemasourceprovidersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a source provider

<a id="opIdgetSourceProvider"></a>

> Code samples

```bash
curl https://control.knock.app/v1/source_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/source_providers/{key}`

Returns a source provider template available for creating sources.

<h3 id="get-a-source-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The source provider key to retrieve.|
|include|query|[string]|false|Associated resources to include in the response. Accepts `branding`, `default_action_mappings`, `example_payloads`, `preprocessing_script`, `static_fields`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|branding|
|include|default_action_mappings|
|include|example_payloads|
|include|preprocessing_script|
|include|static_fields|

> Example responses

> 200 Response

```json
{
  "default_settings": {
    "enforce_verification": false,
    "event_type_path": "body.event",
    "idempotency_key_path": "body.messageId",
    "timestamp_path": "body.timestamp"
  },
  "key": "segment",
  "provider": {
    "categories": [
      "Analytics"
    ],
    "description": "Receive customer events from Segment.",
    "name": "Segment",
    "webhook_docs_url": "https://segment.com/docs/connections/destinations/catalog/webhooks",
    "website_url": "https://segment.com"
  },
  "version": "1.0.0"
}
```

<h3 id="get-a-source-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceProviderResponse](#schemasourceproviderresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List source logs

<a id="opIdlistSourceLogs"></a>

> Code samples

```bash
curl https://control.knock.app/v1/sources/string/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sources/{key}/logs`

Returns event logs received by a source in the requested environment. Supports filtering by date/time, event, and log ID.

<h3 id="list-source-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the source whose logs should be listed.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|date|query|string|false|Returns event logs that were produced on this date.|
|starting_at|query|string(date-time)|false|Only return source logs at or after this timestamp.|
|ending_at|query|string(date-time)|false|Only return source logs at or before this timestamp.|
|event|query|string|false|The event name to filter by.|
|id|query|string|false|The log ID to filter by.|
|include|query|[string]|false|Associated resources to include in the response. Accepts `actions` to include the actions executed after receiving each source event.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|actions|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "data": {
        "invoice_id": "inv_123"
      },
      "event": "invoice.created",
      "id": "log_123",
      "inserted_at": "2024-01-15T12:00:00Z",
      "preprocess_output": null,
      "source": null,
      "verification_status": "enforced:verified"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-source-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SourceLogsResponse](#schemasourcelogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-partials">Partials</h1>

Partials allow you to reuse content across templates.

## Validate a partial

<a id="opIdvalidatePartial"></a>

> Code samples

```bash
curl https://control.knock.app/v1/partials/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partial": {
      "content": "<p>Hello, world!</p>",
      "description": "This is a test partial",
      "input_schema": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "name": "My Partial",
      "type": "html",
      "visual_block_enabled": true
    }
  }'
```

`PUT /v1/partials/{partial_key}/validate`

Validates a partial payload without persisting it.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "name": "My Partial",
    "type": "html",
    "visual_block_enabled": true
  }
}
```

<h3 id="validate-a-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|partial_key|path|string|true|The key of the partial to validate.|
|body|body|object|false|Params|
|» partial|body|[PartialRequest](#schemapartialrequest)|true|A partial object with attributes to update or create a partial.|

> Example responses

> 200 Response

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "environment": "development",
    "icon_name": "icon-name",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "inserted_at": "2021-01-01T00:00:00Z",
    "key": "my-partial",
    "name": "My Partial",
    "type": "html",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "visual_block_enabled": true
  }
}
```

<h3 id="validate-a-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-partial-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partial|[Partial](#schemapartial)|true|none|A partial is a reusable piece of content that can be used in a template.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a partial

<a id="opIdgetPartial"></a>

> Code samples

```bash
curl https://control.knock.app/v1/partials/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/partials/{partial_key}`

Get a partial by its key.

<h3 id="get-a-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|partial_key|path|string|true|The key of the partial to retrieve.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "content": "<p>Hello, world!</p>",
  "description": "This is a test partial",
  "environment": "development",
  "icon_name": "icon-name",
  "input_schema": [
    {
      "key": "text_field",
      "label": "My text field",
      "settings": {
        "description": "A description of the text field",
        "max_length": 100,
        "min_length": 10,
        "required": true
      },
      "type": "text"
    }
  ],
  "inserted_at": "2021-01-01T00:00:00Z",
  "key": "my-partial",
  "name": "My Partial",
  "type": "html",
  "updated_at": "2021-01-01T00:00:00Z",
  "valid": true,
  "visual_block_enabled": true
}
```

<h3 id="get-a-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Partial](#schemapartial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a partial

<a id="opIdupsertPartial"></a>

> Code samples

```bash
curl https://control.knock.app/v1/partials/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partial": {
      "content": "<p>Hello, world!</p>",
      "description": "This is a test partial",
      "input_schema": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "name": "My Partial",
      "type": "html",
      "visual_block_enabled": true
    }
  }'
```

`PUT /v1/partials/{partial_key}`

Updates a partial of a given key, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "name": "My Partial",
    "type": "html",
    "visual_block_enabled": true
  }
}
```

<h3 id="upsert-a-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|partial_key|path|string|true|The key of the partial to upsert.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» partial|body|[PartialRequest](#schemapartialrequest)|true|A partial object with attributes to update or create a partial.|

> Example responses

> 200 Response

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "environment": "development",
    "icon_name": "icon-name",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "inserted_at": "2021-01-01T00:00:00Z",
    "key": "my-partial",
    "name": "My Partial",
    "type": "html",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "visual_block_enabled": true
  }
}
```

<h3 id="upsert-a-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-partial-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partial|[Partial](#schemapartial)|true|none|A partial is a reusable piece of content that can be used in a template.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List partials

<a id="opIdlistPartials"></a>

> Code samples

```bash
curl https://control.knock.app/v1/partials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/partials`

List all partials for a given environment.

<h3 id="list-partials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "content": "<p>Hello, world!</p>",
      "description": "This is a test partial",
      "environment": "development",
      "icon_name": "icon-name",
      "input_schema": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "inserted_at": "2021-01-01T00:00:00Z",
      "key": "my-partial",
      "name": "My Partial",
      "type": "html",
      "updated_at": "2021-01-01T00:00:00Z",
      "valid": true,
      "visual_block_enabled": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-partials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-partials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Partial](#schemapartial)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Preview a partial

<a id="opIdpreviewPartial"></a>

> Code samples

```bash
curl https://control.knock.app/v1/partials/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "name": "Jane"
    },
    "partial": {
      "content": "<p>Hello, {{ name }}!</p>",
      "name": "My Partial",
      "type": "html"
    }
  }'
```

`POST /v1/partials/preview`

Renders a partial in isolation, without requiring the partial to be persisted in Knock.

Useful for iterating on a partial locally and seeing how it renders against
sample data.


> Body parameter

```json
{
  "data": {
    "name": "Jane"
  },
  "partial": {
    "content": "<p>Hello, {{ name }}!</p>",
    "name": "My Partial",
    "type": "html"
  }
}
```

<h3 id="preview-a-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[PreviewPartialRequest](#schemapreviewpartialrequest)|false|Params|
|» data|body|object|false|The data to pass to the partial when rendering. Top-level keys are exposed as variables in the partial template.|
|» layout|body|object \| null|false|Email layout configuration. Only applicable for `html` partials. When omitted, the rendered partial is returned unwrapped.|
|» » key|body|string \| null|false|The key of an existing email layout to use.|
|» partial|body|[PartialRequest](#schemapartialrequest)|true|A partial object with attributes to update or create a partial.|

> Example responses

> 200 Response

```json
{
  "content": "<p>Hello, Jane!</p>",
  "result": "success",
  "type": "html"
}
```

<h3 id="preview-a-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreviewPartialResponse](#schemapreviewpartialresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-commits">Commits</h1>

Commits are versioned changes to resources.

## Get a commit

<a id="opIdgetCommit"></a>

> Code samples

```bash
curl https://control.knock.app/v1/commits/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/commits/{id}`

Retrieve a single commit by its ID.

<h3 id="get-a-commit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The id of the commit to retrieve.|

> Example responses

> 200 Response

```json
{
  "author": {
    "email": "john.doe@example.com",
    "name": "John Doe"
  },
  "commit_message": "This is a commit message",
  "created_at": "2021-01-01T00:00:00Z",
  "environment": "development",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "promote_group_id": null,
  "promoted_from_commit_id": null,
  "resource": {
    "identifier": "my-email-layout",
    "type": "email_layout"
  }
}
```

<h3 id="get-a-commit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Commit](#schemacommit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Promote all changes

<a id="opIdpromoteAllCommits"></a>

> Code samples

```bash
curl 'https://control.knock.app/v1/commits/promote?to_environment=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/commits/promote`

Promote all changes across all resources to the target environment from its preceding environment.

<h3 id="promote-all-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|to_environment|query|string|true|A slug of the target environment to which you want to promote all changes from its directly preceding environment.<br><br>For example, if you have three environments “development”, “staging”, and “production” (in that order), setting this param to “production” will promote all commits not currently in production from staging.<br><br>When this param is set to `"development"`, the `"branch"` param must be provided.<br>|
|branch|query|string|false|The slug of the branch to promote all changes from.|
|resource_type|query|string \| [string]|false|Filter commits to promote by resource type(s). Accepts a single type or array of types. Can be combined with resource_id to filter for specific resources.|
|resource_id|query|string|false|Filter commits to promote by resource identifier. Must be used together with resource_type.|

> Example responses

> 200 Response

```json
{
  "promote_group": {
    "actor": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_count": 3,
    "created_at": "2021-01-01T00:00:00Z",
    "id": "6f1b1c3e-3c1f-4b1d-8f0e-5f6d9d6a2c11",
    "source": "development",
    "source_type": "environment",
    "to_environment": "production"
  },
  "result": "success"
}
```

<h3 id="promote-all-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="promote-all-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|promote_group|object \| null|true|none|A summary of the promote, or null if there were no changes to promote.|
|» actor|object \| null|false|none|The user who performed the promote.|
|» » email|string|false|none|none|
|» » name|string \| null|false|none|none|
|» commit_count|integer|true|none|The number of commits copied into the destination environment.|
|» created_at|string(date-time)|true|none|The timestamp of when the promote happened.|
|» id|string(uuid)|true|none|The unique identifier for the promote group.|
|» source|string|true|none|The slug of the environment or branch the commits were promoted from.|
|» source_type|string|true|none|Whether the source is an environment or a branch.|
|» to_environment|string|true|none|The slug of the environment the commits were promoted to.|
|result|string|true|none|The result of the promote operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|» source_type|environment|
|» source_type|branch|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Promote one commit

<a id="opIdpromoteOneCommit"></a>

> Code samples

```bash
curl https://control.knock.app/v1/commits/string/promote \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/commits/{id}/promote`

Promotes one change to the subsequent environment.

<h3 id="promote-one-commit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The target commit ID to promote to the subsequent environment.|

> Example responses

> 200 Response

```json
{
  "commit": {
    "author": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_message": "This is a commit message",
    "created_at": "2021-01-01T00:00:00Z",
    "environment": "development",
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "promote_group_id": null,
    "promoted_from_commit_id": null,
    "resource": {
      "identifier": "my-email-layout",
      "type": "email_layout"
    }
  },
  "promote_group": {
    "actor": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_count": 3,
    "created_at": "2021-01-01T00:00:00Z",
    "id": "6f1b1c3e-3c1f-4b1d-8f0e-5f6d9d6a2c11",
    "source": "development",
    "source_type": "environment",
    "to_environment": "production"
  }
}
```

<h3 id="promote-one-commit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="promote-one-commit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit|[Commit](#schemacommit)|true|none|A commit is a change to a resource within an environment, made by an author.|
|promote_group|[PromoteGroup](#schemapromotegroup)|true|none|A summary of a promote. Every commit copied into the destination environment by the same promote shares the group's ID, which you can use to list them with the `promote_group_id` filter on the list commits endpoint.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List commits

<a id="opIdlistCommits"></a>

> Code samples

```bash
curl https://control.knock.app/v1/commits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/commits`

Returns a paginated list of commits in a given environment. The commits are ordered from most recent first.

<h3 id="list-commits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|promoted|query|boolean|false|Whether to show commits in the given environment that have not been promoted to the subsequent environment (false) or commits which have been promoted (true).|
|resource_type|query|string \| [string]|false|Filter commits by resource type(s). Accepts a single type or array of types. Can be combined with resource_id to filter for specific resources.|
|resource_id|query|string|false|Filter commits by resource identifier. Must be used together with resource_type. For most resources, this will be the resource key. In the case of translations, this will be the locale code and namespace, separated by a `/`. For example, `en/courses` or `en`.|
|promote_group_id|query|string(uuid)|false|Filter commits to those created by a single promote. Every commit copied into an environment by the same promote shares one `promote_group_id`.|
|promoted_from_environment|query|string|false|Filter promoted commits by the slug of the environment or branch they were promoted from.|
|since|query|string(date-time)|false|Only return commits created at or after this RFC 3339 timestamp. Useful for catching up after missed webhooks.|
|until|query|string(date-time)|false|Only return commits created at or before this RFC 3339 timestamp.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "author": {
        "email": "john.doe@example.com",
        "name": "John Doe"
      },
      "commit_message": "This is a commit message",
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "development",
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "promote_group_id": null,
      "promoted_from_commit_id": null,
      "resource": {
        "identifier": "my-email-layout",
        "type": "email_layout"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-commits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-commits-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Commit](#schemacommit)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Commit all changes

<a id="opIdcommitAllChanges"></a>

> Code samples

```bash
curl https://control.knock.app/v1/commits \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/commits`

Commit all changes across all resources in the given environment. When writes
are limited to development, this endpoint accepts the development environment.


<h3 id="commit-all-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|commit_message|query|string|false|An optional message to include in a commit.|
|allow_empty|query|boolean|false|When used with a single resource_type and resource_id, creates a new version with identical content and commits it if there are no unpublished changes.|
|resource_type|query|string \| [string]|false|Filter changes to commit by resource type(s). Accepts a single type or array of types. Can be combined with resource_id to filter for specific resources.|
|resource_id|query|string|false|Filter changes to commit by resource identifier. Must be used together with resource_type.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="commit-all-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="commit-all-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the commit operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-environments">Environments</h1>

Environments are isolated instances of your account that map to your infrastructure.

## List environments

<a id="opIdlistEnvironments"></a>

> Code samples

```bash
curl https://control.knock.app/v1/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/environments`

Returns a paginated list of visible environments in catalog order.

<h3 id="list-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2022-10-31T19:59:03Z",
      "deleted_at": null,
      "hide_pii_data": false,
      "label_color": "#000000",
      "last_commit_at": "2022-10-31T19:59:03Z",
      "name": "Development",
      "order": 0,
      "owner": "system",
      "slug": "development",
      "updated_at": "2022-10-31T19:59:03Z",
      "visibility": "visible"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-environments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Environment](#schemaenvironment)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get an environment

<a id="opIdgetEnvironment"></a>

> Code samples

```bash
curl https://control.knock.app/v1/environments/development \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/environments/{environment_slug}`

Returns a single environment by the `environment_slug`.

<h3 id="get-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment_slug|path|string|true|The slug of the environment to retrieve.|

> Example responses

> 200 Response

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "hide_pii_data": false,
  "label_color": "#000000",
  "last_commit_at": "2022-10-31T19:59:03Z",
  "name": "Development",
  "order": 0,
  "owner": "system",
  "slug": "development",
  "updated_at": "2022-10-31T19:59:03Z",
  "visibility": "visible"
}
```

<h3 id="get-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Environment](#schemaenvironment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get environment defaults

<a id="opIdgetEnvironmentDefaults"></a>

> Code samples

```bash
curl https://control.knock.app/v1/environments/production/defaults \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/environments/{environment_slug}/defaults`

Returns the default settings for an environment. When no defaults have been set, `preference_set` and both timestamps are `null`.

<h3 id="get-environment-defaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment_slug|path|string|true|The slug of the environment to read or update the defaults for.|

> Example responses

> 200 Response

```json
{
  "created_at": "2026-10-31T19:59:03Z",
  "preference_set": {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": true,
          "push": true
        }
      }
    },
    "channel_types": {
      "email": true,
      "sms": false
    },
    "workflows": {
      "new-comment": {
        "channel_types": {
          "push": false
        }
      }
    }
  },
  "updated_at": "2026-11-03T12:00:00Z"
}
```

<h3 id="get-environment-defaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnvironmentDefaults](#schemaenvironmentdefaults)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert environment defaults

<a id="opIdupsertEnvironmentDefaults"></a>

> Code samples

```bash
curl https://control.knock.app/v1/environments/production/defaults \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "preference_set": {
      "categories": {
        "marketing": false
      },
      "channel_types": {
        "email": true,
        "sms": false
      },
      "workflows": {
        "new-comment": {
          "channel_types": {
            "push": false
          }
        }
      }
    }
  }'
```

`PUT /v1/environments/{environment_slug}/defaults`

Creates or replaces the default settings for an environment. The change applies to the environment immediately, including production. It is not committed or promoted, and concurrent writes are last-write-wins. The `preference_set` replaces any existing set in full, and `null` clears it.

> Body parameter

```json
{
  "preference_set": {
    "categories": {
      "marketing": false
    },
    "channel_types": {
      "email": true,
      "sms": false
    },
    "workflows": {
      "new-comment": {
        "channel_types": {
          "push": false
        }
      }
    }
  }
}
```

<h3 id="upsert-environment-defaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment_slug|path|string|true|The slug of the environment to read or update the defaults for.|
|body|body|[UpsertEnvironmentDefaultsRequest](#schemaupsertenvironmentdefaultsrequest)|true|Params|
|» preference_set|body|[EnvironmentDefaultsPreferenceSet](#schemaenvironmentdefaultspreferenceset)|true|A preference set applied to every recipient in the environment unless the recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys are not supported, because defaults are always replaced in full.|

> Example responses

> 200 Response

```json
{
  "created_at": "2026-10-31T19:59:03Z",
  "preference_set": {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": true,
          "push": true
        }
      }
    },
    "channel_types": {
      "email": true,
      "sms": false
    },
    "workflows": {
      "new-comment": {
        "channel_types": {
          "push": false
        }
      }
    }
  },
  "updated_at": "2026-11-03T12:00:00Z"
}
```

<h3 id="upsert-environment-defaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnvironmentDefaults](#schemaenvironmentdefaults)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-branches">Branches</h1>

Branches in Knock are a way to isolate changes to your Knock resources.

## List branches

<a id="opIdlistBranches"></a>

> Code samples

```bash
curl https://control.knock.app/v1/branches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/branches`

Returns a paginated list of branches. The branches will be returned in order of their last commit time (newest first).

<h3 id="list-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2022-10-31T19:59:03Z",
      "deleted_at": null,
      "last_commit_at": "2022-10-31T19:59:03Z",
      "slug": "feature-branch",
      "updated_at": "2022-10-31T19:59:03Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-branches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Branch](#schemabranch)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Rebase a branch

<a id="opIdrebaseBranch"></a>

> Code samples

```bash
curl https://control.knock.app/v1/branches/feature-branch/rebase \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/branches/{branch_slug}/rebase`

Rebases a branch onto the development environment, bringing in new and updated resources while preserving commits made on the branch.

<h3 id="rebase-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch_slug|path|string|true|The slug of the branch to rebase.|

> Example responses

> 200 Response

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "last_commit_at": "2022-10-31T19:59:03Z",
  "slug": "feature-branch",
  "updated_at": "2022-10-31T19:59:03Z"
}
```

<h3 id="rebase-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Branch](#schemabranch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a branch

<a id="opIdgetBranch"></a>

> Code samples

```bash
curl https://control.knock.app/v1/branches/feature-branch \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/branches/{branch_slug}`

Returns a single branch by the `branch_slug`.

<h3 id="get-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch_slug|path|string|true|The slug of the branch to retrieve.|

> Example responses

> 200 Response

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "last_commit_at": "2022-10-31T19:59:03Z",
  "slug": "feature-branch",
  "updated_at": "2022-10-31T19:59:03Z"
}
```

<h3 id="get-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Branch](#schemabranch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a branch

<a id="opIdcreateBranch"></a>

> Code samples

```bash
curl https://control.knock.app/v1/branches/feature-branch \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/branches/{branch_slug}`

Creates a new branch off of the development environment with the given slug.

<h3 id="create-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch_slug|path|string|true|The slug for the new branch to create.|

> Example responses

> 201 Response

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "last_commit_at": "2022-10-31T19:59:03Z",
  "slug": "feature-branch",
  "updated_at": "2022-10-31T19:59:03Z"
}
```

<h3 id="create-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Branch](#schemabranch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a branch

<a id="opIddeleteBranch"></a>

> Code samples

```bash
curl https://control.knock.app/v1/branches/feature-branch \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/branches/{branch_slug}`

Deletes a branch by the `branch_slug`.

<h3 id="delete-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch_slug|path|string|true|The slug of the branch to delete.|

<h3 id="delete-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-translations">Translations</h1>

Translations are per-locale string files that can be used in your templates.

## List translations

<a id="opIdlistTranslations"></a>

> Code samples

```bash
curl https://control.knock.app/v1/translations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/translations`

Returns a paginated list of translations available in a given environment. The translations are returned in alphabetical order by locale code.


<h3 id="list-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale_code|query|string|false|A specific locale code to filter translations for.|
|namespace|query|string|false|A specific namespace to filter translations for.|
|tenant|query|string|false|A specific tenant to filter translations for.|
|format|query|string|false|Optionally specify the returned content format. Supports 'json' and 'po'. Defaults to 'json'.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|po|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "content": "{\"hello\":\"Hello, world!\"}",
      "format": "json",
      "inserted_at": "2021-01-01T00:00:00Z",
      "locale_code": "en",
      "namespace": "my_app",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-translations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Translation](#schematranslation)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get translation

<a id="opIdgetTranslation"></a>

> Code samples

```bash
curl https://control.knock.app/v1/translations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/translations/{locale_code}`

Retrieve a translation by its locale and namespace, in a given environment.

<h3 id="get-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale_code|path|string|true|A specific locale code to filter translations for.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|format|query|string|false|Optionally specify the returned content format. Supports 'json' and 'po'. Defaults to 'json'.|
|namespace|query|string|false|A specific namespace to filter translations for.|
|tenant|query|string|false|A specific tenant to scope the translation to.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|po|

> Example responses

> 200 Response

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json",
    "inserted_at": "2021-01-01T00:00:00Z",
    "locale_code": "en",
    "namespace": "my_app",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="get-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-translation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|[Translation](#schematranslation)|true|none|A translation object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert translation

<a id="opIdupsertTranslation"></a>

> Code samples

```bash
curl 'https://control.knock.app/v1/translations/string?namespace=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "translation": {
      "content": "{\"hello\":\"Hello, world!\"}",
      "format": "json"
    }
  }'
```

`PUT /v1/translations/{locale_code}`

Updates a translation of a given locale code + namespace, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json"
  }
}
```

<h3 id="upsert-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale_code|path|string|true|A locale code of the translation.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|namespace|query|string|true|An optional namespace that identifies the translation.|
|tenant|query|string|false|An optional tenant to scope the translation to.|
|format|query|string|false|Optionally specify the returned content format. Supports 'json' and 'po'. Defaults to 'json'.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» translation|body|[TranslationRequest](#schematranslationrequest)|true|A translation object with a content attribute used to update or create a translation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|po|

> Example responses

> 200 Response

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json",
    "inserted_at": "2021-01-01T00:00:00Z",
    "locale_code": "en",
    "namespace": "my_app",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-translation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|[Translation](#schematranslation)|true|none|A translation object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate translation

<a id="opIdvalidateTranslation"></a>

> Code samples

```bash
curl https://control.knock.app/v1/translations/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "translation": {
      "content": "{\"hello\":\"Hello, world!\"}",
      "format": "json"
    }
  }'
```

`PUT /v1/translations/{locale_code}/validate`

Validates a translation payload without persisting it.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json"
  }
}
```

<h3 id="validate-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale_code|path|string|true|The translation's locale code.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» translation|body|[TranslationRequest](#schematranslationrequest)|true|A translation object with a content attribute used to update or create a translation.|

> Example responses

> 200 Response

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json",
    "inserted_at": "2021-01-01T00:00:00Z",
    "locale_code": "en",
    "namespace": "my_app",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="validate-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-translation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|[Translation](#schematranslation)|true|none|A translation object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-email-layouts">Email layouts</h1>

Email layouts wrap your email templates and provide a consistent look and feel.

## Preview an email layout

<a id="opIdpreviewEmailLayout"></a>

> Code samples

```bash
curl https://control.knock.app/v1/email_layouts/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "order_id": 123
    },
    "email_layout": {
      "html_layout": "<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>",
      "name": "Transactional",
      "text_layout": "Hello {{ recipient.name }}! {{ content }}"
    },
    "recipient": "user_123"
  }'
```

`POST /v1/email_layouts/preview`

Renders an email layout preview, without requiring a layout to be persisted within Knock.
This is useful for previewing layouts in isolation, before saving them.


> Body parameter

```json
{
  "data": {
    "order_id": 123
  },
  "email_layout": {
    "html_layout": "<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>",
    "name": "Transactional",
    "text_layout": "Hello {{ recipient.name }}! {{ content }}"
  },
  "recipient": "user_123"
}
```

<h3 id="preview-an-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[PreviewEmailLayoutRequest](#schemapreviewemaillayoutrequest)|false|Params|
|» actor|body|[RecipientReference](#schemarecipientreference) \| object \| null|false|The actor to reference in the preview.|
|» » *anyOf*|body|[RecipientReference](#schemarecipientreference)|false|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» » *anyOf*|body|object \| null|false|none|
|» data|body|object|false|The data to pass to the layout for rendering.|
|» email_layout|body|[EmailLayoutRequest](#schemaemaillayoutrequest)|true|A request to update or create an email layout.|
|» recipient|body|[RecipientReference](#schemarecipientreference)|true|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» tenant|body|string \| null|false|The tenant to associate with the preview. Must not contain whitespace.|
|» workflow|body|object \| null|false|Optional workflow context for variable hydration. When provided, recipient/actor/tenant are resolved via Knock.|
|» » categories|body|[string]|false|Workflow categories.|
|» » key|body|string|true|The workflow key.|

> Example responses

> 200 Response

```json
{
  "layout": {
    "html_body": "<html><body>Hello John! Welcome to Acme!</body></html>",
    "text_body": "Hello John! Welcome to Acme!"
  },
  "result": "success"
}
```

<h3 id="preview-an-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreviewEmailLayoutResponse](#schemapreviewemaillayoutresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get email layout

<a id="opIdgetEmailLayout"></a>

> Code samples

```bash
curl https://control.knock.app/v1/email_layouts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/email_layouts/{email_layout_key}`

Retrieve an email layout by its key, in a given environment.

<h3 id="get-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_layout_key|path|string|true|The key of the email layout to show.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "branding_overrides": {
    "dark_logo_url": "https://cdn.example.com/logo-dark.png",
    "dark_primary_color": "#1A1A2E",
    "dark_primary_color_contrast": "#FFFFFF",
    "primary_color": "#4F46E5",
    "primary_color_contrast": "#FFFFFF"
  },
  "created_at": "2021-01-01T00:00:00Z",
  "environment": "development",
  "footer_links": [
    {
      "text": "Example",
      "url": "http://example.com"
    }
  ],
  "html_layout": "<html><body>Hello, world!</body></html>",
  "key": "transactional",
  "name": "Transactional",
  "sha": "1234567890",
  "text_layout": "Hello, world!",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

<h3 id="get-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EmailLayout](#schemaemaillayout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert email layout

<a id="opIdupsertEmailLayout"></a>

> Code samples

```bash
curl https://control.knock.app/v1/email_layouts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email_layout": {
      "branding_overrides": {
        "dark_logo_url": "https://cdn.example.com/logo-dark.png",
        "dark_primary_color": "#1A1A2E",
        "dark_primary_color_contrast": "#FFFFFF",
        "primary_color": "#4F46E5",
        "primary_color_contrast": "#FFFFFF"
      },
      "footer_links": [
        {
          "text": "Example",
          "url": "http://example.com"
        }
      ],
      "html_layout": "<html><body>Hello, world!</body></html>",
      "name": "Transactional",
      "text_layout": "Hello, world!"
    }
  }'
```

`PUT /v1/email_layouts/{email_layout_key}`

Updates an email layout, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "name": "Transactional",
    "text_layout": "Hello, world!"
  }
}
```

<h3 id="upsert-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_layout_key|path|string|true|The key of the email layout to upsert.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Email layout|
|» email_layout|body|[EmailLayoutRequest](#schemaemaillayoutrequest)|true|A request to update or create an email layout.|

> Example responses

> 200 Response

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "created_at": "2021-01-01T00:00:00Z",
    "environment": "development",
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "key": "transactional",
    "name": "Transactional",
    "sha": "1234567890",
    "text_layout": "Hello, world!",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-email-layout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_layout|[EmailLayout](#schemaemaillayout)|true|none|A versioned email layout used within an environment.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate email layout

<a id="opIdvalidateEmailLayout"></a>

> Code samples

```bash
curl https://control.knock.app/v1/email_layouts/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email_layout": {
      "branding_overrides": {
        "dark_logo_url": "https://cdn.example.com/logo-dark.png",
        "dark_primary_color": "#1A1A2E",
        "dark_primary_color_contrast": "#FFFFFF",
        "primary_color": "#4F46E5",
        "primary_color_contrast": "#FFFFFF"
      },
      "footer_links": [
        {
          "text": "Example",
          "url": "http://example.com"
        }
      ],
      "html_layout": "<html><body>Hello, world!</body></html>",
      "name": "Transactional",
      "text_layout": "Hello, world!"
    }
  }'
```

`PUT /v1/email_layouts/{email_layout_key}/validate`

Validates an email layout payload without persisting it.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "name": "Transactional",
    "text_layout": "Hello, world!"
  }
}
```

<h3 id="validate-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_layout_key|path|string|true|The key of the email layout to validate.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Email layout|
|» email_layout|body|[EmailLayoutRequest](#schemaemaillayoutrequest)|true|A request to update or create an email layout.|

> Example responses

> 200 Response

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "created_at": "2021-01-01T00:00:00Z",
    "environment": "development",
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "key": "transactional",
    "name": "Transactional",
    "sha": "1234567890",
    "text_layout": "Hello, world!",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="validate-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-email-layout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_layout|[EmailLayout](#schemaemaillayout)|true|none|A versioned email layout used within an environment.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List email layouts

<a id="opIdlistEmailLayouts"></a>

> Code samples

```bash
curl https://control.knock.app/v1/email_layouts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/email_layouts`

Returns a paginated list of email layouts available in a given environment.

<h3 id="list-email-layouts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "branding_overrides": {
        "dark_logo_url": "https://cdn.example.com/logo-dark.png",
        "dark_primary_color": "#1A1A2E",
        "dark_primary_color_contrast": "#FFFFFF",
        "primary_color": "#4F46E5",
        "primary_color_contrast": "#FFFFFF"
      },
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "development",
      "footer_links": [
        {
          "text": "Example",
          "url": "http://example.com"
        }
      ],
      "html_layout": "<html><body>Hello, world!</body></html>",
      "key": "transactional",
      "name": "Transactional",
      "sha": "1234567890",
      "text_layout": "Hello, world!",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-email-layouts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-email-layouts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[EmailLayout](#schemaemaillayout)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-message-types">Message types</h1>

A message type allows you to specify an in-app schema that defines the fields available for your in-app notifications.

## List message types

<a id="opIdlistMessageTypes"></a>

> Code samples

```bash
curl https://control.knock.app/v1/message_types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/message_types`

Returns a paginated list of message types. When the environment is omitted, the account default is used. Root environments share the Development catalog.

<h3 id="list-message-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "archived_at": null,
      "created_at": "2021-01-01T00:00:00Z",
      "deleted_at": null,
      "description": "Email message type",
      "environment": "development",
      "icon_name": "email",
      "key": "email",
      "name": "Email",
      "owner": "user",
      "preview": "<div>Hello, world!</div>",
      "semver": "1.0.0",
      "sha": "1234567890",
      "updated_at": "2021-01-01T00:00:00Z",
      "valid": true,
      "variants": [
        {
          "fields": [
            {
              "key": "text_field",
              "label": "My text field",
              "settings": {
                "description": "A description of the text field",
                "max_length": 100,
                "min_length": 10,
                "required": true
              },
              "type": "text"
            }
          ],
          "key": "default",
          "name": "Default"
        }
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-message-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-message-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[MessageType](#schemamessagetype)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate message type

<a id="opIdvalidateMessageType"></a>

> Code samples

```bash
curl https://control.knock.app/v1/message_types/email/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_type": {
      "description": "This is a message type",
      "name": "My Message Type",
      "preview": "<div>Hello, world!</div>",
      "variants": [
        {
          "fields": [
            {
              "key": "text_field",
              "label": "My text field",
              "settings": {
                "description": "A description of the text field",
                "max_length": 100,
                "min_length": 10,
                "required": true
              },
              "type": "text"
            }
          ],
          "key": "default",
          "name": "Default"
        }
      ]
    }
  }'
```

`PUT /v1/message_types/{message_type_key}/validate`

Validates a message type payload without persisting it.

When the environment is omitted, the account default is used.
Message types are an account-shared catalog stored in Development.


> Body parameter

```json
{
  "message_type": {
    "description": "This is a message type",
    "name": "My Message Type",
    "preview": "<div>Hello, world!</div>",
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

<h3 id="validate-message-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_type_key|path|string|true|The key of the message type to validate.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» message_type|body|[MessageTypeRequest](#schemamessagetyperequest)|true|A request to create a message type.|

> Example responses

> 200 Response

```json
{
  "message_type": {
    "archived_at": null,
    "created_at": "2021-01-01T00:00:00Z",
    "deleted_at": null,
    "description": "Email message type",
    "environment": "development",
    "icon_name": "email",
    "key": "email",
    "name": "Email",
    "owner": "user",
    "preview": "<div>Hello, world!</div>",
    "semver": "1.0.0",
    "sha": "1234567890",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

<h3 id="validate-message-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-message-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_type|[MessageType](#schemamessagetype)|true|none|A message type is a schema for a message that maps to a UI component or element within your application.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get message type

<a id="opIdgetMessageType"></a>

> Code samples

```bash
curl https://control.knock.app/v1/message_types/email \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/message_types/{message_type_key}`

Retrieve a message type by its key. When the environment is omitted, the account default is used. Root environments share the Development catalog.

<h3 id="get-message-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_type_key|path|string|true|The key of the message type to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "archived_at": null,
  "created_at": "2021-01-01T00:00:00Z",
  "deleted_at": null,
  "description": "Email message type",
  "environment": "development",
  "icon_name": "email",
  "key": "email",
  "name": "Email",
  "owner": "user",
  "preview": "<div>Hello, world!</div>",
  "semver": "1.0.0",
  "sha": "1234567890",
  "updated_at": "2021-01-01T00:00:00Z",
  "valid": true,
  "variants": [
    {
      "fields": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "key": "default",
      "name": "Default"
    }
  ]
}
```

<h3 id="get-message-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MessageType](#schemamessagetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert message type

<a id="opIdupsertMessageType"></a>

> Code samples

```bash
curl https://control.knock.app/v1/message_types/email \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_type": {
      "description": "This is a message type",
      "name": "My Message Type",
      "preview": "<div>Hello, world!</div>",
      "variants": [
        {
          "fields": [
            {
              "key": "text_field",
              "label": "My text field",
              "settings": {
                "description": "A description of the text field",
                "max_length": 100,
                "min_length": 10,
                "required": true
              },
              "type": "text"
            }
          ],
          "key": "default",
          "name": "Default"
        }
      ]
    }
  }'
```

`PUT /v1/message_types/{message_type_key}`

Updates a message type, or creates a new one if it does not yet exist.

When the environment is omitted, the account default is used.
Message types are an account-shared catalog stored in Development. Requests
against other root environments read and write that same catalog.


> Body parameter

```json
{
  "message_type": {
    "description": "This is a message type",
    "name": "My Message Type",
    "preview": "<div>Hello, world!</div>",
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

<h3 id="upsert-message-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_type_key|path|string|true|The key of the message type to upsert.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» message_type|body|[MessageTypeRequest](#schemamessagetyperequest)|true|A request to create a message type.|

> Example responses

> 200 Response

```json
{
  "message_type": {
    "archived_at": null,
    "created_at": "2021-01-01T00:00:00Z",
    "deleted_at": null,
    "description": "Email message type",
    "environment": "development",
    "icon_name": "email",
    "key": "email",
    "name": "Email",
    "owner": "user",
    "preview": "<div>Hello, world!</div>",
    "semver": "1.0.0",
    "sha": "1234567890",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

<h3 id="upsert-message-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-message-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_type|[MessageType](#schemamessagetype)|true|none|A message type is a schema for a message that maps to a UI component or element within your application.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-reusable-requests">Reusable requests</h1>

Reusable requests are HTTP steps that workflows can link to and share across an account.

## Validate a reusable request

<a id="opIdvalidateReusableRequest"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests/fetch-user/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reusable_request": {
      "description": "Loads a user from the API.",
      "name": "Fetch user",
      "settings": {
        "body": null,
        "headers": [
          {
            "key": "X-API-Key",
            "value": "1234567890"
          }
        ],
        "method": "get",
        "query_params": [
          {
            "key": "key",
            "value": "value"
          }
        ],
        "response_path": null,
        "signing_key": null,
        "url": "https://example.com"
      },
      "type": "http_fetch"
    }
  }'
```

`PUT /v1/reusable_requests/{reusable_request_key}/validate`

Validates a reusable request payload without persisting it.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "reusable_request": {
    "description": "Loads a user from the API.",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "type": "http_fetch"
  }
}
```

<h3 id="validate-a-reusable-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|reusable_request_key|path|string|true|The key of the reusable request to validate.|
|body|body|object|false|Params|
|» reusable_request|body|[ReusableRequestRequest](#schemareusablerequestrequest)|true|A reusable request object with attributes to update or create a reusable request.|

> Example responses

> 200 Response

```json
{
  "reusable_request": {
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Loads a user from the API.",
    "environment": "development",
    "key": "fetch-user",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "sha": "abc123",
    "type": "http_fetch",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="validate-a-reusable-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-reusable-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reusable_request|[ReusableRequest](#schemareusablerequest)|true|none|A reusable HTTP request that workflows can link to.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List reusable requests

<a id="opIdlistReusableRequests"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reusable_requests`

Returns a paginated list of reusable requests for an environment.

<h3 id="list-reusable-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2021-01-01T00:00:00Z",
      "description": "Loads a user from the API.",
      "environment": "development",
      "key": "fetch-user",
      "name": "Fetch user",
      "settings": {
        "body": null,
        "headers": [
          {
            "key": "X-API-Key",
            "value": "1234567890"
          }
        ],
        "method": "get",
        "query_params": [
          {
            "key": "key",
            "value": "value"
          }
        ],
        "response_path": null,
        "signing_key": null,
        "url": "https://example.com"
      },
      "sha": "abc123",
      "type": "http_fetch",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-reusable-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-reusable-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ReusableRequest](#schemareusablerequest)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a reusable request

<a id="opIdgetReusableRequest"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests/fetch-user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reusable_requests/{reusable_request_key}`

Retrieves a reusable request by its key.

<h3 id="get-a-reusable-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|reusable_request_key|path|string|true|The key of the reusable request to retrieve.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "created_at": "2021-01-01T00:00:00Z",
  "description": "Loads a user from the API.",
  "environment": "development",
  "key": "fetch-user",
  "name": "Fetch user",
  "settings": {
    "body": null,
    "headers": [
      {
        "key": "X-API-Key",
        "value": "1234567890"
      }
    ],
    "method": "get",
    "query_params": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "response_path": null,
    "signing_key": null,
    "url": "https://example.com"
  },
  "sha": "abc123",
  "type": "http_fetch",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

<h3 id="get-a-reusable-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReusableRequest](#schemareusablerequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a reusable request

<a id="opIdupsertReusableRequest"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests/fetch-user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reusable_request": {
      "description": "Loads a user from the API.",
      "name": "Fetch user",
      "settings": {
        "body": null,
        "headers": [
          {
            "key": "X-API-Key",
            "value": "1234567890"
          }
        ],
        "method": "get",
        "query_params": [
          {
            "key": "key",
            "value": "value"
          }
        ],
        "response_path": null,
        "signing_key": null,
        "url": "https://example.com"
      },
      "type": "http_fetch"
    }
  }'
```

`PUT /v1/reusable_requests/{reusable_request_key}`

Updates a reusable request of a given key, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "reusable_request": {
    "description": "Loads a user from the API.",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "type": "http_fetch"
  }
}
```

<h3 id="upsert-a-reusable-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|reusable_request_key|path|string|true|The key of the reusable request to upsert.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» reusable_request|body|[ReusableRequestRequest](#schemareusablerequestrequest)|true|A reusable request object with attributes to update or create a reusable request.|

> Example responses

> 200 Response

```json
{
  "reusable_request": {
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Loads a user from the API.",
    "environment": "development",
    "key": "fetch-user",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "sha": "abc123",
    "type": "http_fetch",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-a-reusable-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-reusable-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reusable_request|[ReusableRequest](#schemareusablerequest)|true|none|A reusable HTTP request that workflows can link to.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive a reusable request

<a id="opIdarchiveReusableRequest"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests/fetch-user \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/reusable_requests/{reusable_request_key}`

Archives a reusable request by key across all environments.

<h3 id="archive-a-reusable-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|reusable_request_key|path|string|true|The key of the reusable request to archive.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-a-reusable-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-a-reusable-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Unarchive a reusable request

<a id="opIdunarchiveReusableRequest"></a>

> Code samples

```bash
curl https://control.knock.app/v1/reusable_requests/fetch-user/unarchive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/reusable_requests/{reusable_request_key}/unarchive`

Unarchives a reusable request by key, with every copy archived alongside it in other
environments.

Returns a 404 when the key isn't archived, including when an earlier or concurrent request
already restored it. Returns a 422 with the code `key_in_use` when a live reusable request
uses the key.


<h3 id="unarchive-a-reusable-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|reusable_request_key|path|string|true|The key of the reusable request to unarchive.|

> Example responses

> 200 Response

```json
{
  "reusable_request": {
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Loads a user from the API.",
    "environment": "development",
    "key": "fetch-user",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "sha": "abc123",
    "type": "http_fetch",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="unarchive-a-reusable-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="unarchive-a-reusable-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reusable_request|[ReusableRequest](#schemareusablerequest)|true|none|A reusable HTTP request that workflows can link to.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-guides">Guides</h1>

Guides let you define in-app guides that can be displayed to users based on priority and other conditions.

## Activate a guide

<a id="opIdactivateGuide"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides/string/activate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true
  }'
```

`PUT /v1/guides/{guide_key}/activate`

Activates (or deactivates) a guide in a given environment. You can either set the active status immediately or schedule it.

Note: This immediately enables or disables a guide in a given environment without needing to go through environment promotion.


> Body parameter

```json
{
  "active": true
}
```

<h3 id="activate-a-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guide_key|path|string|true|The key of the guide.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[GuideActivationParams](#schemaguideactivationparams)|false|Params|
|» *oneOf*|body|object|false|A request to activate or deactivate a guide.|
|» status|body|boolean|true|Whether to activate or deactivate the guide.|
|» *oneOf*|body|object|false|A request to schedule the activation of a guide. At least one of from or until must be provided.|
|» from|body|string(date-time)|false|When to activate the guide. If provided, the guide will be scheduled to activate at this time. Must be in ISO 8601 UTC format.|
|» until|body|string(date-time)|false|When to deactivate the guide. If provided, the guide will be scheduled to deactivate at this time. Must be in ISO 8601 UTC format.|

> Example responses

> 200 Response

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "active": true,
    "archived_at": null,
    "channel_key": "in-app-guide",
    "created_at": "2024-01-01T00:00:00Z",
    "description": "A guide to help users get started with the application",
    "environment": "development",
    "key": "getting-started",
    "name": "Getting Started Guide",
    "semver": "0.0.1",
    "sha": "1234567890",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "target_audience_key": null,
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    },
    "type": "banner",
    "updated_at": "2024-01-01T00:00:00Z",
    "valid": true
  }
}
```

<h3 id="activate-a-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="activate-a-guide-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide|[Guide](#schemaguide)|true|none|A guide defines an in-app guide that can be displayed to users based on priority and other conditions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List guides

<a id="opIdlistGuides"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/guides`

Returns a paginated list of guides available in a given environment.

<h3 id="list-guides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dashboard/*"
        }
      ],
      "active": true,
      "archived_at": null,
      "channel_key": "in-app-guide",
      "created_at": "2024-01-01T00:00:00Z",
      "description": "A guide to help users get started with the application",
      "environment": "development",
      "key": "getting-started",
      "name": "Getting Started Guide",
      "semver": "0.0.1",
      "sha": "1234567890",
      "steps": [
        {
          "name": "Welcome to the App",
          "ref": "welcome-step",
          "schema_key": "tooltip",
          "schema_semver": "1.0.0",
          "schema_variant_key": "default",
          "values": {
            "text_field": "value"
          }
        }
      ],
      "tags": [
        "onboarding",
        "growth"
      ],
      "target_audience_key": null,
      "target_property_conditions": {
        "all": [
          {
            "argument": "some_property",
            "operator": "equal_to",
            "variable": "recipient.property"
          }
        ]
      },
      "type": "banner",
      "updated_at": "2024-01-01T00:00:00Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-guides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-guides-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Guide](#schemaguide)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a guide

<a id="opIdgetGuide"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/guides/{guide_key}`

Get a guide by its key.

<h3 id="get-a-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|guide_key|path|string|true|The key of the guide to retrieve.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "activation_url_patterns": [
    {
      "directive": "allow",
      "pathname": "/dashboard/*"
    }
  ],
  "active": true,
  "archived_at": null,
  "channel_key": "in-app-guide",
  "created_at": "2024-01-01T00:00:00Z",
  "description": "A guide to help users get started with the application",
  "environment": "development",
  "key": "getting-started",
  "name": "Getting Started Guide",
  "semver": "0.0.1",
  "sha": "1234567890",
  "steps": [
    {
      "name": "Welcome to the App",
      "ref": "welcome-step",
      "schema_key": "tooltip",
      "schema_semver": "1.0.0",
      "schema_variant_key": "default",
      "values": {
        "text_field": "value"
      }
    }
  ],
  "tags": [
    "onboarding",
    "growth"
  ],
  "target_audience_key": null,
  "target_property_conditions": {
    "all": [
      {
        "argument": "some_property",
        "operator": "equal_to",
        "variable": "recipient.property"
      }
    ]
  },
  "type": "banner",
  "updated_at": "2024-01-01T00:00:00Z",
  "valid": true
}
```

<h3 id="get-a-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Guide](#schemaguide)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a guide

<a id="opIdupsertGuide"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guide": {
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dashboard/*"
        }
      ],
      "channel_key": "in-app-guide",
      "description": "A guide to help users get started with the application",
      "name": "Getting Started Guide",
      "steps": [
        {
          "name": "Welcome to the App",
          "ref": "welcome-step",
          "schema_key": "tooltip",
          "schema_semver": "1.0.0",
          "schema_variant_key": "default",
          "values": {
            "text_field": "value"
          }
        }
      ],
      "target_property_conditions": {
        "all": [
          {
            "argument": "some_property",
            "operator": "equal_to",
            "variable": "recipient.property"
          }
        ]
      }
    }
  }'
```

`PUT /v1/guides/{guide_key}`

Updates a guide of a given key, or creates a new one if it does not yet exist.

The write targets the environment in the request. Accounts that allow writes in
every environment can create and update in that environment. Pass force to
write outside the request's origin environment. When writes are limited to
development, this endpoint accepts the development environment unless force
is set.


> Body parameter

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "channel_key": "in-app-guide",
    "description": "A guide to help users get started with the application",
    "name": "Getting Started Guide",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    }
  }
}
```

<h3 id="upsert-a-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|guide_key|path|string|true|The key of the guide to upsert.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» guide|body|[GuideRequest](#schemaguiderequest)|true|A request to create or update a guide.|

> Example responses

> 200 Response

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "active": true,
    "archived_at": null,
    "channel_key": "in-app-guide",
    "created_at": "2024-01-01T00:00:00Z",
    "description": "A guide to help users get started with the application",
    "environment": "development",
    "key": "getting-started",
    "name": "Getting Started Guide",
    "semver": "0.0.1",
    "sha": "1234567890",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "target_audience_key": null,
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    },
    "type": "banner",
    "updated_at": "2024-01-01T00:00:00Z",
    "valid": true
  }
}
```

<h3 id="upsert-a-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-guide-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide|[Guide](#schemaguide)|true|none|A guide defines an in-app guide that can be displayed to users based on priority and other conditions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive a guide

<a id="opIdarchiveGuide"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/guides/{guide_key}`

Archives a given guide across all environments.

<h3 id="archive-a-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guide_key|path|string|true|The key of the guide to archive.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-a-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-a-guide-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the promote operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a guide

<a id="opIdvalidateGuide"></a>

> Code samples

```bash
curl https://control.knock.app/v1/guides/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guide": {
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dashboard/*"
        }
      ],
      "channel_key": "in-app-guide",
      "description": "A guide to help users get started with the application",
      "name": "Getting Started Guide",
      "steps": [
        {
          "name": "Welcome to the App",
          "ref": "welcome-step",
          "schema_key": "tooltip",
          "schema_semver": "1.0.0",
          "schema_variant_key": "default",
          "values": {
            "text_field": "value"
          }
        }
      ],
      "target_property_conditions": {
        "all": [
          {
            "argument": "some_property",
            "operator": "equal_to",
            "variable": "recipient.property"
          }
        ]
      }
    }
  }'
```

`PUT /v1/guides/{guide_key}/validate`

Validates a guide payload without persisting it.

Validation uses the environment in the request. Accounts that allow writes in
every environment can validate in that environment. When writes are limited
to development, this endpoint accepts the development environment.


> Body parameter

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "channel_key": "in-app-guide",
    "description": "A guide to help users get started with the application",
    "name": "Getting Started Guide",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    }
  }
}
```

<h3 id="validate-a-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guide_key|path|string|true|The key of the guide.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» guide|body|[GuideRequest](#schemaguiderequest)|true|A request to create or update a guide.|

> Example responses

> 200 Response

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "active": true,
    "archived_at": null,
    "channel_key": "in-app-guide",
    "created_at": "2024-01-01T00:00:00Z",
    "description": "A guide to help users get started with the application",
    "environment": "development",
    "key": "getting-started",
    "name": "Getting Started Guide",
    "semver": "0.0.1",
    "sha": "1234567890",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "target_audience_key": null,
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    },
    "type": "banner",
    "updated_at": "2024-01-01T00:00:00Z",
    "valid": true
  }
}
```

<h3 id="validate-a-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-guide-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide|[Guide](#schemaguide)|true|none|A guide defines an in-app guide that can be displayed to users based on priority and other conditions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-audiences">Audiences</h1>

Audiences define sets of users that can be targeted for notifications.

## List audiences

<a id="opIdlistAudiences"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audiences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audiences`

Returns a paginated list of audiences for the given environment.

<h3 id="list-audiences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2024-01-15T10:30:00Z",
      "description": "Customers who signed up in the last 30 days.",
      "environment": "development",
      "key": "new-customers",
      "name": "New customers",
      "segments": [
        {
          "conditions": [
            {
              "argument": "30_days_ago",
              "operator": "greater_than",
              "property": "recipient.created_at"
            }
          ]
        }
      ],
      "sha": "a1b2c3d4e5f6",
      "type": "dynamic",
      "updated_at": "2024-06-20T14:45:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-audiences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-audiences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Audience](#schemaaudience)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get an audience

<a id="opIdgetAudience"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audiences/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audiences/{audience_key}`

Retrieve an audience by its key in a given environment.

<h3 id="get-an-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audience_key|path|string|true|The key of the audience to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "description": "Customers who signed up in the last 30 days.",
  "environment": "development",
  "key": "new-customers",
  "name": "New customers",
  "segments": [
    {
      "conditions": [
        {
          "argument": "30_days_ago",
          "operator": "greater_than",
          "property": "recipient.created_at"
        }
      ]
    }
  ],
  "sha": "a1b2c3d4e5f6",
  "type": "dynamic",
  "updated_at": "2024-06-20T14:45:00Z"
}
```

<h3 id="get-an-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Audience](#schemaaudience)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert an audience

<a id="opIdupsertAudience"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audiences/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audience": {
      "description": "Users on the premium plan",
      "name": "Premium users",
      "segments": [
        {
          "conditions": [
            {
              "argument": "premium",
              "operator": "equal_to",
              "property": "recipient.plan"
            }
          ]
        }
      ],
      "type": "dynamic"
    }
  }'
```

`PUT /v1/audiences/{audience_key}`

Updates an audience of a given key, or creates a new one if it does not yet exist.

> Body parameter

```json
{
  "audience": {
    "description": "Users on the premium plan",
    "name": "Premium users",
    "segments": [
      {
        "conditions": [
          {
            "argument": "premium",
            "operator": "equal_to",
            "property": "recipient.plan"
          }
        ]
      }
    ],
    "type": "dynamic"
  }
}
```

<h3 id="upsert-an-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|audience_key|path|string|true|The key of the audience to upsert.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|force|query|boolean|false|When set to true, forces the upsert to override existing content regardless of environment restrictions. This bypasses the development-only environment check and origin environment checks.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|allow_empty|query|boolean|false|When used with commit, creates a new version with identical content and commits it if there are no unpublished changes.|
|body|body|object|false|Params|
|» audience|body|[AudienceRequest](#schemaaudiencerequest)|true|An audience object with attributes to create or update an audience. Use `type: static` for audiences with explicitly managed members, or `type: dynamic` for audiences with segment-based membership.|

> Example responses

> 200 Response

```json
{
  "audience": {
    "created_at": "2024-01-15T10:30:00Z",
    "description": "Customers who signed up in the last 30 days.",
    "environment": "development",
    "key": "new-customers",
    "name": "New customers",
    "segments": [
      {
        "conditions": [
          {
            "argument": "30_days_ago",
            "operator": "greater_than",
            "property": "recipient.created_at"
          }
        ]
      }
    ],
    "sha": "a1b2c3d4e5f6",
    "type": "dynamic",
    "updated_at": "2024-06-20T14:45:00Z"
  }
}
```

<h3 id="upsert-an-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-an-audience-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[Audience](#schemaaudience)|true|none|An audience defines a set of users that can be targeted for notifications. Can be either a `StaticAudience` (members explicitly added/removed) or a `DynamicAudience` (members determined by segment conditions).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive an audience

<a id="opIdarchiveAudience"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audiences/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/audiences/{audience_key}`

Archives a given audience across all environments.

<h3 id="archive-an-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audience_key|path|string|true|The key of the audience to archive.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-an-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-an-audience-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate an audience

<a id="opIdvalidateAudience"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audiences/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audience": {
      "description": "Users on the premium plan",
      "name": "Premium users",
      "segments": [
        {
          "conditions": [
            {
              "argument": "premium",
              "operator": "equal_to",
              "property": "recipient.plan"
            }
          ]
        }
      ],
      "type": "dynamic"
    }
  }'
```

`PUT /v1/audiences/{audience_key}/validate`

Validates an audience payload without persisting it.

> Body parameter

```json
{
  "audience": {
    "description": "Users on the premium plan",
    "name": "Premium users",
    "segments": [
      {
        "conditions": [
          {
            "argument": "premium",
            "operator": "equal_to",
            "property": "recipient.plan"
          }
        ]
      }
    ],
    "type": "dynamic"
  }
}
```

<h3 id="validate-an-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|audience_key|path|string|true|The key of the audience to validate.|
|body|body|object|false|Params|
|» audience|body|[AudienceRequest](#schemaaudiencerequest)|true|An audience object with attributes to create or update an audience. Use `type: static` for audiences with explicitly managed members, or `type: dynamic` for audiences with segment-based membership.|

> Example responses

> 200 Response

```json
{
  "audience": {
    "created_at": "2024-01-15T10:30:00Z",
    "description": "Customers who signed up in the last 30 days.",
    "environment": "development",
    "key": "new-customers",
    "name": "New customers",
    "segments": [
      {
        "conditions": [
          {
            "argument": "30_days_ago",
            "operator": "greater_than",
            "property": "recipient.created_at"
          }
        ]
      }
    ],
    "sha": "a1b2c3d4e5f6",
    "type": "dynamic",
    "updated_at": "2024-06-20T14:45:00Z"
  }
}
```

<h3 id="validate-an-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-an-audience-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[Audience](#schemaaudience)|true|none|An audience defines a set of users that can be targeted for notifications. Can be either a `StaticAudience` (members explicitly added/removed) or a `DynamicAudience` (members determined by segment conditions).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-goals">Goals</h1>

Goals define event conditions that are tracked and attributed to messaging resources.

## List goals

<a id="opIdlistGoals"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/goals`

Returns a paginated list of goals for the given environment.

<h3 id="list-goals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "condition": {
        "event": {
          "event_key": "order.completed",
          "event_type": "integration_source",
          "integration_source_key": "stripe",
          "recipient_path": "body.userId"
        },
        "match_conditions": [
          {
            "conditions": [
              {
                "argument": "100",
                "operator": "greater_than",
                "variable": "event.amount"
              }
            ],
            "operator": "and"
          }
        ]
      },
      "created_at": "2024-06-01T00:00:00Z",
      "description": "Tracks when a trial user converts to paid",
      "environment": "development",
      "key": "trial-conversion",
      "name": "Trial Conversion",
      "sha": "abc123def456",
      "updated_at": "2024-06-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-goals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-goals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Goal](#schemagoal)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a goal

<a id="opIdgetGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/goals/{goal_key}`

Retrieve a goal by its key in a given environment.

<h3 id="get-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goal_key|path|string|true|The key of the goal to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|

> Example responses

> 200 Response

```json
{
  "condition": {
    "event": {
      "event_key": "order.completed",
      "event_type": "integration_source",
      "integration_source_key": "stripe",
      "recipient_path": "body.userId"
    },
    "match_conditions": [
      {
        "conditions": [
          {
            "argument": "100",
            "operator": "greater_than",
            "variable": "event.amount"
          }
        ],
        "operator": "and"
      }
    ]
  },
  "created_at": "2024-06-01T00:00:00Z",
  "description": "Tracks when a trial user converts to paid",
  "environment": "development",
  "key": "trial-conversion",
  "name": "Trial Conversion",
  "sha": "abc123def456",
  "updated_at": "2024-06-01T00:00:00Z"
}
```

<h3 id="get-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Goal](#schemagoal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a goal

<a id="opIdupsertGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "goal": {
      "condition": {
        "event": {
          "event_key": "order.completed",
          "event_type": "integration_source",
          "integration_source_key": "stripe",
          "recipient_path": "body.userId"
        },
        "match_conditions": [
          {
            "conditions": [
              {
                "argument": "100",
                "operator": "greater_than",
                "variable": "event.amount"
              }
            ],
            "operator": "and"
          }
        ]
      },
      "description": "Tracks when a trial user converts to paid",
      "name": "Trial Conversion"
    }
  }'
```

`PUT /v1/goals/{goal_key}`

Updates a goal of a given key, or creates a new one if it does not yet exist. The goal is published immediately; this endpoint does not accept a commit parameter.

> Body parameter

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "description": "Tracks when a trial user converts to paid",
    "name": "Trial Conversion"
  }
}
```

<h3 id="upsert-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|goal_key|path|string|true|The key of the goal to upsert.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|body|body|object|false|Params|
|» goal|body|[GoalRequest](#schemagoalrequest)|true|A goal payload for upsert or validate.|

> Example responses

> 200 Response

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "created_at": "2024-06-01T00:00:00Z",
    "description": "Tracks when a trial user converts to paid",
    "environment": "development",
    "key": "trial-conversion",
    "name": "Trial Conversion",
    "sha": "abc123def456",
    "updated_at": "2024-06-01T00:00:00Z"
  }
}
```

<h3 id="upsert-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|[Goal](#schemagoal)|true|none|A goal defines an event condition that is tracked and attributed to messaging resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive a goal

<a id="opIdarchiveGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/goals/{goal_key}`

Archives a given goal in this environment. Refuses if a workflow, guide, or broadcast in this environment is attached to the goal.

<h3 id="archive-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goal_key|path|string|true|The key of the goal to archive.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a goal

<a id="opIdvalidateGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "goal": {
      "condition": {
        "event": {
          "event_key": "order.completed",
          "event_type": "integration_source",
          "integration_source_key": "stripe",
          "recipient_path": "body.userId"
        },
        "match_conditions": [
          {
            "conditions": [
              {
                "argument": "100",
                "operator": "greater_than",
                "variable": "event.amount"
              }
            ],
            "operator": "and"
          }
        ]
      },
      "description": "Tracks when a trial user converts to paid",
      "name": "Trial Conversion"
    }
  }'
```

`PUT /v1/goals/{goal_key}/validate`

Validates a goal payload without persisting it.

> Body parameter

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "description": "Tracks when a trial user converts to paid",
    "name": "Trial Conversion"
  }
}
```

<h3 id="validate-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|goal_key|path|string|true|The key of the goal to validate.|
|body|body|object|false|Params|
|» goal|body|[GoalRequest](#schemagoalrequest)|true|A goal payload for upsert or validate.|

> Example responses

> 200 Response

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "created_at": "2024-06-01T00:00:00Z",
    "description": "Tracks when a trial user converts to paid",
    "environment": "development",
    "key": "trial-conversion",
    "name": "Trial Conversion",
    "sha": "abc123def456",
    "updated_at": "2024-06-01T00:00:00Z"
  }
}
```

<h3 id="validate-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|[Goal](#schemagoal)|true|none|A goal defines an event condition that is tracked and attributed to messaging resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Attach a goal

<a id="opIdattachGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string/attachments/workflow/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachment": {
      "attribution_window_days": 7
    }
  }'
```

`PUT /v1/goals/{goal_key}/attachments/{resource_type}/{resource_key}`

Attaches the goal to a workflow, guide, or broadcast in the given environment, or updates its attribution window. The attachment goes live without a commit: the resource is published in the background, so the response doesn't wait on it. Workflows and guides must have been committed in the environment, and broadcasts must not have been sent. A resource holds one goal, so this replaces any other goal attached to it.

> Body parameter

```json
{
  "attachment": {
    "attribution_window_days": 7
  }
}
```

<h3 id="attach-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goal_key|path|string|true|The key of the goal.|
|resource_type|path|string|true|The type of resource: `workflow`, `guide`, or `broadcast`.|
|resource_key|path|string|true|The key of the workflow, guide, or broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|body|body|object|false|Params|
|» attachment|body|[GoalAttachmentRequest](#schemagoalattachmentrequest)|true|Settings for the goal attachment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|workflow|
|resource_type|guide|
|resource_type|broadcast|

> Example responses

> 200 Response

```json
{
  "attachment": {
    "attribution_window_days": 7,
    "goal_key": "trial-conversion",
    "resource_key": "trial-onboarding",
    "resource_type": "workflow"
  }
}
```

<h3 id="attach-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="attach-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[GoalResourceAttachment](#schemagoalresourceattachment)|true|none|A goal attached to a workflow, guide, or broadcast in one environment. An attachment goes live without a commit.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Detach a goal

<a id="opIddetachGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string/attachments/workflow/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/goals/{goal_key}/attachments/{resource_type}/{resource_key}`

Detaches the goal from a workflow, guide, or broadcast in the given environment. The change goes live without a commit: the resource is published in the background, so the response doesn't wait on it. Returns 404 when the goal isn't attached to the resource.

<h3 id="detach-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goal_key|path|string|true|The key of the goal.|
|resource_type|path|string|true|The type of resource: `workflow`, `guide`, or `broadcast`.|
|resource_key|path|string|true|The key of the workflow, guide, or broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|workflow|
|resource_type|guide|
|resource_type|broadcast|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="detach-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="detach-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the detach operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Clone a goal

<a id="opIdcloneGoal"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clone": {
      "environment": "production",
      "key": "trial-conversion-copy",
      "name": "Trial Conversion Copy"
    }
  }'
```

`POST /v1/goals/{goal_key}/clone`

Clones a goal into a destination environment.

> Body parameter

```json
{
  "clone": {
    "environment": "production",
    "key": "trial-conversion-copy",
    "name": "Trial Conversion Copy"
  }
}
```

<h3 id="clone-a-goal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|goal_key|path|string|true|The key of the source goal to clone.|
|body|body|object|false|Params|
|» clone|body|[CloneGoalRequest](#schemaclonegoalrequest)|true|The destination key, name, and environment for the cloned goal.|

> Example responses

> 200 Response

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "created_at": "2024-06-01T00:00:00Z",
    "description": "Tracks when a trial user converts to paid",
    "environment": "development",
    "key": "trial-conversion",
    "name": "Trial Conversion",
    "sha": "abc123def456",
    "updated_at": "2024-06-01T00:00:00Z"
  }
}
```

<h3 id="clone-a-goal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="clone-a-goal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|[Goal](#schemagoal)|true|none|A goal defines an event condition that is tracked and attributed to messaging resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List a goal's attachments

<a id="opIdlistGoalAttachments"></a>

> Code samples

```bash
curl https://control.knock.app/v1/goals/string/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/goals/{goal_key}/attachments`

Returns the workflows, guides, and broadcasts the goal is attached to in the given environment.

<h3 id="list-a-goals-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goal_key|path|string|true|The key of the goal.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "attribution_window_days": 7,
      "goal_key": "trial-conversion",
      "resource_key": "trial-onboarding",
      "resource_type": "workflow"
    }
  ]
}
```

<h3 id="list-a-goals-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-a-goals-attachments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[GoalResourceAttachment](#schemagoalresourceattachment)]|true|none|The goal's attachments in the environment.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-assets">Assets</h1>

Assets are uploaded files available to your Knock account.

## Archive an asset

<a id="opIdarchiveAsset"></a>

> Code samples

```bash
curl https://control.knock.app/v1/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/assets/{asset_id}`

Archives a library or template image asset by id. The stored file remains at its URL. Other asset types, unknown ids, and already archived assets are not found. Assets are account-wide and do not require an environment parameter.

<h3 id="archive-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|string(uuid)|true|The id of the asset to archive.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-an-asset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List assets

<a id="opIdlistAssets"></a>

> Code samples

```bash
curl https://control.knock.app/v1/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/assets`

Returns a paginated list of active account assets. Assets are account-wide and do not require an environment parameter.

<h3 id="list-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "asset_type": "library_asset",
      "created_at": "2021-01-01T00:00:00Z",
      "filename": "logo.png",
      "id": "018f02cd-9230-71d2-8f70-b40e5e2a4f6d",
      "mime_type": "image/png",
      "updated_at": "2021-01-01T00:00:00Z",
      "url": "https://assets.example.com/acc_123/proj_123/asset.png"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Asset](#schemaasset)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create an asset

<a id="opIdcreateAsset"></a>

> Code samples

```bash
curl https://control.knock.app/v1/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filename": "logo.png",
    "key": "acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png"
  }'
```

`POST /v1/assets`

Records a library asset after the file has been uploaded to the key from an upload request. The asset is always a library asset. Assets are account-wide and do not require an environment parameter.

> Body parameter

```json
{
  "filename": "logo.png",
  "key": "acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png"
}
```

<h3 id="create-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AssetCreateRequest](#schemaassetcreaterequest)|false|Params|
|» filename|body|string|true|The display name for this asset.|
|» key|body|string|true|The storage key from the upload request. The file must already be uploaded.|

> Example responses

> 201 Response

```json
{
  "asset_type": "library_asset",
  "created_at": "2021-01-01T00:00:00Z",
  "filename": "logo.png",
  "id": "018f02cd-9230-71d2-8f70-b40e5e2a4f6d",
  "mime_type": "image/png",
  "updated_at": "2021-01-01T00:00:00Z",
  "url": "https://assets.example.com/acc_123/proj_123/asset.png"
}
```

<h3 id="create-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Asset](#schemaasset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Request an asset upload

<a id="opIdrequestAssetUpload"></a>

> Code samples

```bash
curl https://control.knock.app/v1/assets/uploads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content_length": 20480,
    "filename": "logo.png",
    "mime_type": "image/png"
  }'
```

`POST /v1/assets/uploads`

Returns a time-limited URL for uploading an asset file. PUT the file bytes to upload_url with Content-Type and Content-Length from this response, then create the asset with the returned key. This request does not store an asset. Assets are account-wide and do not require an environment parameter.

> Body parameter

```json
{
  "content_length": 20480,
  "filename": "logo.png",
  "mime_type": "image/png"
}
```

<h3 id="request-an-asset-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AssetUploadRequest](#schemaassetuploadrequest)|false|Params|
|» content_length|body|integer|true|The file size in bytes. Maximum is 5 MB. The upload URL is signed for this length.|
|» filename|body|string \| null|false|The display name to echo back. The upload request does not store it. Send it again when creating the asset.|
|» mime_type|body|string|true|The MIME type of the file. One of image/jpeg, image/png, or image/gif.|

> Example responses

> 201 Response

```json
{
  "content_length": 20480,
  "expires_in": 300,
  "filename": "logo.png",
  "key": "acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png",
  "mime_type": "image/png",
  "upload_url": "https://account-assets.example/acc_123/proj_123/file.png?X-Amz-Signature=sig"
}
```

<h3 id="request-an-asset-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AssetUpload](#schemaassetupload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-preference-categories">Preference categories</h1>

Preference categories are a project-level catalog of categories that can be applied to workflows and broadcasts.

## List preference categories

<a id="opIdlistPreferenceCategories"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/preference_categories`

Returns all preference categories in the project's catalog, ordered by name. Preference categories are project-scoped and not tied to an environment.

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2021-01-01T00:00:00Z",
      "name": "billing",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-preference-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceCategoriesResponse](#schemapreferencecategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a preference category

<a id="opIdupsertPreferenceCategory"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_categories/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/preference_categories/{name}`

Creates a preference category by name. If a non-archived category with the same name already exists, returns the existing category.

<h3 id="upsert-a-preference-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the preference category to upsert.|

> Example responses

> 200 Response

```json
{
  "preference_category": {
    "created_at": "2021-01-01T00:00:00Z",
    "name": "billing",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-a-preference-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-preference-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preference_category|[PreferenceCategory](#schemapreferencecategory)|true|none|A named preference category in a project's catalog.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a preference category

<a id="opIddeletePreferenceCategory"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_categories/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/preference_categories/{name}`

Archives a preference category by name.

<h3 id="delete-a-preference-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the preference category to delete.|

<h3 id="delete-a-preference-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-warehouses">Warehouses</h1>

Warehouses are the databases in your data warehouse that Knock reads from.

## Get a warehouse

<a id="opIdgetWarehouse"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/warehouses/{warehouse_key}`

Retrieve a warehouse by its key.

<h3 id="get-a-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_key|path|string|true|The key of the warehouse to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "connection_error": null,
  "connection_settings": {
    "database": "ANALYTICS",
    "host": "acme.snowflakecomputing.com",
    "port": 443,
    "username": "KNOCK"
  },
  "connection_status": "connected",
  "created_at": "2026-10-01T12:00:00Z",
  "key": "analytics",
  "last_tested_at": "2026-11-01T12:00:00Z",
  "name": "Analytics",
  "type": "snowflake",
  "updated_at": "2026-11-01T12:00:00Z"
}
```

<h3 id="get-a-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Warehouse](#schemawarehouse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List warehouses

<a id="opIdlistWarehouses"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/warehouses`

Returns a paginated list of the project's warehouses. Warehouses are shared by every environment.

<h3 id="list-warehouses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "connection_error": null,
      "connection_settings": {
        "database": "ANALYTICS",
        "host": "acme.snowflakecomputing.com",
        "port": 443,
        "username": "KNOCK"
      },
      "connection_status": "connected",
      "created_at": "2026-10-01T12:00:00Z",
      "key": "analytics",
      "last_tested_at": "2026-11-01T12:00:00Z",
      "name": "Analytics",
      "type": "snowflake",
      "updated_at": "2026-11-01T12:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-warehouses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-warehouses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Warehouse](#schemawarehouse)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-warehouse-syncs">Warehouse syncs</h1>

Warehouse syncs read rows from a warehouse on a schedule and write them to Knock.

## Run a warehouse sync

<a id="opIdrunWarehouseSync"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string/run \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/warehouse_syncs/{warehouse_sync_key}/run`

Starts a run of the published warehouse sync now, instead of waiting for its schedule. Refused while a run is in progress.

<h3 id="run-a-warehouse-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync to run.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "created_at": "2026-10-01T12:00:00Z",
    "description": "Syncs users from the analytics warehouse",
    "enabled": true,
    "environment": "development",
    "frequency_minutes": 60,
    "has_unpublished_changes": false,
    "key": "users",
    "last_failure": null,
    "last_published_at": "2026-11-01T12:00:00Z",
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      },
      {
        "on_null": "preserve",
        "source_column": "name",
        "target_field": "name"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "publish_error": null,
    "sha": "abc123def456",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "status": "live",
    "target": null,
    "target_type": "user",
    "updated_at": "2026-11-01T12:00:00Z",
    "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="run-a-warehouse-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="run-a-warehouse-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSync](#schemawarehousesync)|true|none|A warehouse sync reads rows from a warehouse on a schedule and writes them to Knock as users, tenants, objects, audience members, or subscriptions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a warehouse sync's settings

<a id="opIdupdateWarehouseSyncSettings"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": false,
    "frequency_minutes": 1440
  }'
```

`PUT /v1/warehouse_syncs/{warehouse_sync_key}/settings`

Pauses or resumes a warehouse sync, or changes how often it runs. Settings take effect right away and don't need a publish.

> Body parameter

```json
{
  "enabled": false,
  "frequency_minutes": 1440
}
```

<h3 id="update-a-warehouse-syncs-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync to update.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|body|body|[WarehouseSyncSettingsRequest](#schemawarehousesyncsettingsrequest)|false|Params|
|» enabled|body|boolean|false|Whether the sync runs on its schedule.|
|» frequency_minutes|body|integer|false|How often the sync runs, in minutes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» frequency_minutes|10|
|» frequency_minutes|15|
|» frequency_minutes|60|
|» frequency_minutes|360|
|» frequency_minutes|720|
|» frequency_minutes|1440|

> Example responses

> 200 Response

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "created_at": "2026-10-01T12:00:00Z",
    "description": "Syncs users from the analytics warehouse",
    "enabled": true,
    "environment": "development",
    "frequency_minutes": 60,
    "has_unpublished_changes": false,
    "key": "users",
    "last_failure": null,
    "last_published_at": "2026-11-01T12:00:00Z",
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      },
      {
        "on_null": "preserve",
        "source_column": "name",
        "target_field": "name"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "publish_error": null,
    "sha": "abc123def456",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "status": "live",
    "target": null,
    "target_type": "user",
    "updated_at": "2026-11-01T12:00:00Z",
    "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="update-a-warehouse-syncs-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-a-warehouse-syncs-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSync](#schemawarehousesync)|true|none|A warehouse sync reads rows from a warehouse on a schedule and writes them to Knock as users, tenants, objects, audience members, or subscriptions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List warehouse syncs

<a id="opIdlistWarehouseSyncs"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/warehouse_syncs`

Returns a paginated list of warehouse syncs for the given environment.

<h3 id="list-warehouse-syncs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "change_tracking": {
        "last_modified_column": "updated_at"
      },
      "created_at": "2026-10-01T12:00:00Z",
      "description": "Syncs users from the analytics warehouse",
      "enabled": true,
      "environment": "development",
      "frequency_minutes": 60,
      "has_unpublished_changes": false,
      "key": "users",
      "last_failure": null,
      "last_published_at": "2026-11-01T12:00:00Z",
      "mappings": [
        {
          "on_null": "set_null",
          "source_column": "id",
          "target_field": "id"
        },
        {
          "on_null": "set_null",
          "source_column": "email",
          "target_field": "email"
        },
        {
          "on_null": "preserve",
          "source_column": "name",
          "target_field": "name"
        }
      ],
      "name": "Users",
      "primary_key_column": "id",
      "publish_error": null,
      "sha": "abc123def456",
      "source": {
        "mode": "sql",
        "query": "SELECT id, email, name, updated_at FROM analytics.users"
      },
      "status": "live",
      "target": null,
      "target_type": "user",
      "updated_at": "2026-11-01T12:00:00Z",
      "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
      "warehouse_key": "analytics"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-warehouse-syncs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-warehouse-syncs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[WarehouseSync](#schemawarehousesync)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List warehouse sync runs

<a id="opIdlistWarehouseSyncRuns"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/warehouse_syncs/{warehouse_sync_key}/runs`

Returns the most recent runs of a warehouse sync, newest first.

<h3 id="list-warehouse-sync-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "ended_at": "2026-11-01T12:02:30Z",
      "error": null,
      "id": "4b8e9a52-1c7d-4f0e-8a3b-6d2f5e9c1b07",
      "load_id": "9d3c2b1a-7e6f-4a5b-8c9d-0e1f2a3b4c5d",
      "records_errored": 0,
      "records_processed": 1200,
      "rows_applied": 1200,
      "rows_failed": 0,
      "started_at": "2026-11-01T12:00:05Z",
      "status": "completed",
      "submitted_at": "2026-11-01T12:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-warehouse-sync-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-warehouse-sync-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[WarehouseSyncRun](#schemawarehousesyncrun)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a warehouse sync

<a id="opIdvalidateWarehouseSync"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "warehouse_sync": {
      "change_tracking": {
        "last_modified_column": "updated_at"
      },
      "mappings": [
        {
          "on_null": "set_null",
          "source_column": "id",
          "target_field": "id"
        },
        {
          "on_null": "set_null",
          "source_column": "email",
          "target_field": "email"
        }
      ],
      "name": "Users",
      "primary_key_column": "id",
      "source": {
        "mode": "sql",
        "query": "SELECT id, email, name, updated_at FROM analytics.users"
      },
      "target_type": "user",
      "warehouse_key": "analytics"
    }
  }'
```

`PUT /v1/warehouse_syncs/{warehouse_sync_key}/validate`

Checks a warehouse sync payload the way an upsert would, without saving it. Returns the payload as sent.

> Body parameter

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "target_type": "user",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="validate-a-warehouse-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync to validate.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|body|body|object|false|Params|
|» warehouse_sync|body|[WarehouseSyncRequest](#schemawarehousesyncrequest)|true|A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.|

> Example responses

> 200 Response

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "target_type": "user",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="validate-a-warehouse-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-warehouse-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSyncRequest](#schemawarehousesyncrequest)|true|none|A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a warehouse sync

<a id="opIdgetWarehouseSync"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/warehouse_syncs/{warehouse_sync_key}`

Retrieve a warehouse sync by its key in a given environment.

<h3 id="get-a-warehouse-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "change_tracking": {
    "last_modified_column": "updated_at"
  },
  "created_at": "2026-10-01T12:00:00Z",
  "description": "Syncs users from the analytics warehouse",
  "enabled": true,
  "environment": "development",
  "frequency_minutes": 60,
  "has_unpublished_changes": false,
  "key": "users",
  "last_failure": null,
  "last_published_at": "2026-11-01T12:00:00Z",
  "mappings": [
    {
      "on_null": "set_null",
      "source_column": "id",
      "target_field": "id"
    },
    {
      "on_null": "set_null",
      "source_column": "email",
      "target_field": "email"
    },
    {
      "on_null": "preserve",
      "source_column": "name",
      "target_field": "name"
    }
  ],
  "name": "Users",
  "primary_key_column": "id",
  "publish_error": null,
  "sha": "abc123def456",
  "source": {
    "mode": "sql",
    "query": "SELECT id, email, name, updated_at FROM analytics.users"
  },
  "status": "live",
  "target": null,
  "target_type": "user",
  "updated_at": "2026-11-01T12:00:00Z",
  "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
  "warehouse_key": "analytics"
}
```

<h3 id="get-a-warehouse-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WarehouseSync](#schemawarehousesync)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a warehouse sync

<a id="opIdupsertWarehouseSync"></a>

> Code samples

```bash
curl https://control.knock.app/v1/warehouse_syncs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "warehouse_sync": {
      "change_tracking": {
        "last_modified_column": "updated_at"
      },
      "mappings": [
        {
          "on_null": "set_null",
          "source_column": "id",
          "target_field": "id"
        },
        {
          "on_null": "set_null",
          "source_column": "email",
          "target_field": "email"
        }
      ],
      "name": "Users",
      "primary_key_column": "id",
      "source": {
        "mode": "sql",
        "query": "SELECT id, email, name, updated_at FROM analytics.users"
      },
      "target_type": "user",
      "warehouse_key": "analytics"
    }
  }'
```

`PUT /v1/warehouse_syncs/{warehouse_sync_key}`

Creates a warehouse sync, or saves a new draft of it if it exists. Fields left out keep their current values. Pass `commit=true` to publish the draft. A draft that fails to publish stays saved.

> Body parameter

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "target_type": "user",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="upsert-a-warehouse-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_sync_key|path|string|true|The key of the warehouse sync to upsert.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|commit|query|boolean|false|Whether to commit the resource at the same time as modifying it.|
|commit_message|query|string|false|The message to commit the resource with, only used if `commit` is `true`.|
|body|body|object|false|Params|
|» warehouse_sync|body|[WarehouseSyncRequest](#schemawarehousesyncrequest)|true|A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.|

> Example responses

> 200 Response

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "created_at": "2026-10-01T12:00:00Z",
    "description": "Syncs users from the analytics warehouse",
    "enabled": true,
    "environment": "development",
    "frequency_minutes": 60,
    "has_unpublished_changes": false,
    "key": "users",
    "last_failure": null,
    "last_published_at": "2026-11-01T12:00:00Z",
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      },
      {
        "on_null": "preserve",
        "source_column": "name",
        "target_field": "name"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "publish_error": null,
    "sha": "abc123def456",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "status": "live",
    "target": null,
    "target_type": "user",
    "updated_at": "2026-11-01T12:00:00Z",
    "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
    "warehouse_key": "analytics"
  }
}
```

<h3 id="upsert-a-warehouse-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-warehouse-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSync](#schemawarehousesync)|true|none|A warehouse sync reads rows from a warehouse on a schedule and writes them to Knock as users, tenants, objects, audience members, or subscriptions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-tags">Tags</h1>

Tags are a project-level catalog of labels that can be applied to workflows, partials, guides, and broadcasts.

## Upsert a tag

<a id="opIdupsertTag"></a>

> Code samples

```bash
curl https://control.knock.app/v1/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tag": {
      "color": "#3B82F6",
      "description": "Billing-related workflows"
    }
  }'
```

`PUT /v1/tags/{name}`

Creates a tag by name. If a tag with the same name already exists, updates its description and color. Omitted description and color fields are set to null.

> Body parameter

```json
{
  "tag": {
    "color": "#3B82F6",
    "description": "Billing-related workflows"
  }
}
```

<h3 id="upsert-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the tag to upsert.|
|body|body|object|false|Params|
|» tag|body|[TagRequest](#schematagrequest)|true|A request to create or update a tag. The tag name is taken from the path. On conflict, omitted description and color fields are set to null.|

> Example responses

> 200 Response

```json
{
  "tag": {
    "color": "#3B82F6",
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Billing-related workflows",
    "name": "billing",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

<h3 id="upsert-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[Tag](#schematag)|true|none|A named tag in a project's resource-tag catalog.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a tag

<a id="opIddeleteTag"></a>

> Code samples

```bash
curl https://control.knock.app/v1/tags/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/tags/{name}`

Deletes a tag by name.

<h3 id="delete-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the tag to delete.|

<h3 id="delete-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List tags

<a id="opIdlistTags"></a>

> Code samples

```bash
curl https://control.knock.app/v1/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tags`

Returns all tags in the project's catalog, ordered by name. Tags are project-scoped and not tied to an environment.

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "color": "#3B82F6",
      "created_at": "2021-01-01T00:00:00Z",
      "description": "Billing-related workflows",
      "name": "billing",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagsResponse](#schematagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-variables">Variables</h1>

## Get a variable

<a id="opIdgetVariable"></a>

> Code samples

```bash
curl https://control.knock.app/v1/variables/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/variables/{key}`

Returns a single variable by key with per-environment value overrides.

<h3 id="get-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the variable to retrieve.|

> Example responses

> 200 Response

```json
{
  "description": "This is a description of my variable.",
  "environment_values": {
    "development": "dev_value",
    "production": "prod_value"
  },
  "inserted_at": "2021-01-01T00:00:00Z",
  "key": "my_variable",
  "type": "public",
  "updated_at": "2021-01-01T00:00:00Z",
  "value": "my_value"
}
```

<h3 id="get-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a variable

<a id="opIdupsertVariable"></a>

> Code samples

```bash
curl https://control.knock.app/v1/variables/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Source signing secret",
    "environment_values": {
      "development": "my_dev_secret_value",
      "production": ""
    },
    "type": "secret",
    "value": "my_secret_value"
  }'
```

`PUT /v1/variables/{key}`

Creates or updates a variable by key, along with its per-environment overrides. On an update, any attribute or environment that is omitted or null is left unchanged, and an empty string unsets it. The response never includes the value of a secret variable.

> Body parameter

```json
{
  "description": "Source signing secret",
  "environment_values": {
    "development": "my_dev_secret_value",
    "production": ""
  },
  "type": "secret",
  "value": "my_secret_value"
}
```

<h3 id="upsert-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the variable to upsert.|
|body|body|[VariableRequest](#schemavariablerequest)|false|Params|
|» description|body|string \| null|false|The description of the variable. When omitted or null on an update, the existing description is kept. An empty string clears it.|
|» environment_values|body|object|false|A map of root environment slugs to override values. An environment that is omitted or null is left unchanged. An empty string clears the override, so the default value applies.|
|» » **additionalProperties**|body|string \| null|false|none|
|» type|body|string|true|The type of the variable. Required, and it cannot be changed after the variable is created.|
|» value|body|string \| null|false|The default value of the variable. Required when creating a variable, unless `environment_values` sets a value for at least one environment. When omitted or null on an update, the existing value is kept. An empty string clears the default value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|public|
|» type|secret|

> Example responses

> 200 Response

```json
{
  "description": "This is a description of my variable.",
  "environment_values": {
    "development": "dev_value",
    "production": "prod_value"
  },
  "inserted_at": "2021-01-01T00:00:00Z",
  "key": "my_variable",
  "type": "public",
  "updated_at": "2021-01-01T00:00:00Z",
  "value": "my_value"
}
```

<h3 id="upsert-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a variable

<a id="opIddeleteVariable"></a>

> Code samples

```bash
curl https://control.knock.app/v1/variables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/variables/{key}`

Deletes a variable and all of its environment overrides. When an environment is specified, only the override for that environment is cleared, so the default value applies there.

<h3 id="delete-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the variable to delete.|
|environment|query|string|false|The environment slug. When provided, only the variable's override for this environment is cleared. When omitted, the whole variable is deleted, which requires `variables:manage` in the account's default environment and in every environment with an override.|

<h3 id="delete-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List variables

<a id="opIdlistVariables"></a>

> Code samples

```bash
curl https://control.knock.app/v1/variables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/variables`

Returns a list of variables. When an environment is specified, returns per-environment variables. Otherwise, returns project-scoped variables with per-environment overrides.

<h3 id="list-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used for authorization while the response remains project-scoped.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|type|query|string|false|Filter variables by type. Supports 'public' or 'secret'.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|public|
|type|secret|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "description": "This is a description of my variable.",
      "environment_values": {
        "development": "dev_value",
        "production": "prod_value"
      },
      "inserted_at": "2021-01-01T00:00:00Z",
      "key": "my_variable",
      "type": "public",
      "updated_at": "2021-01-01T00:00:00Z",
      "value": "my_value"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-variables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Variable](#schemavariable)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-broadcasts">Broadcasts</h1>

## Get a broadcast

<a id="opIdgetBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/broadcasts/{broadcast_key}`

Get a broadcast by its key in a given environment.

<h3 id="get-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "categories": [
    "marketing",
    "promotions"
  ],
  "created_at": "2022-12-16T19:07:50.027113Z",
  "description": "Holiday promotion broadcast for December",
  "environment": "development",
  "key": "december-promotion",
  "name": "December Promotion",
  "scheduled_at": null,
  "sent_at": null,
  "settings": {
    "is_commercial": true,
    "override_preferences": false
  },
  "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
  "status": "draft",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "description": "Main in-app feed",
      "name": "In-app step",
      "ref": "in_app_feed_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "tags": [
    "in-review"
  ],
  "target_audience_key": "premium-users",
  "updated_at": "2023-02-08T22:15:19.846681Z",
  "valid": true
}
```

<h3 id="get-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Broadcast](#schemabroadcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a broadcast

<a id="opIdupsertBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcast": {
      "categories": [
        "announcement"
      ],
      "description": "A broadcast to all users",
      "name": "My Broadcast",
      "settings": {
        "is_commercial": true,
        "override_preferences": false
      },
      "steps": [
        {
          "channel_key": "in-app-feed",
          "name": "Channel 1",
          "ref": "channel_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "in-review"
      ],
      "target_audience_key": "all-users"
    }
  }'
```

`PUT /v1/broadcasts/{broadcast_key}`

Updates a broadcast of a given key, or creates a new one if it does not yet exist.


> Body parameter

```json
{
  "broadcast": {
    "categories": [
      "announcement"
    ],
    "description": "A broadcast to all users",
    "name": "My Broadcast",
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "all-users"
  }
}
```

<h3 id="upsert-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|body|body|object|false|Params|
|» broadcast|body|[BroadcastRequest](#schemabroadcastrequest)|true|A broadcast request for upserting a broadcast.|

> Example responses

> 200 Response

```json
{
  "broadcast": {
    "categories": [
      "marketing",
      "promotions"
    ],
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "Holiday promotion broadcast for December",
    "environment": "development",
    "key": "december-promotion",
    "name": "December Promotion",
    "scheduled_at": null,
    "sent_at": null,
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "status": "draft",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "premium-users",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="upsert-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-broadcast-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[Broadcast](#schemabroadcast)|true|none|A broadcast object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Cancel a scheduled broadcast

<a id="opIdcancelBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string/cancel \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/broadcasts/{broadcast_key}/cancel`

Cancels sending a scheduled broadcast. The broadcast will return to draft status.


<h3 id="cancel-a-scheduled-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|

> Example responses

> 200 Response

```json
{
  "broadcast": {
    "categories": [
      "marketing",
      "promotions"
    ],
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "Holiday promotion broadcast for December",
    "environment": "development",
    "key": "december-promotion",
    "name": "December Promotion",
    "scheduled_at": null,
    "sent_at": null,
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "status": "draft",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "premium-users",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="cancel-a-scheduled-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="cancel-a-scheduled-broadcast-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[Broadcast](#schemabroadcast)|true|none|A broadcast object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Run a broadcast

<a id="opIdrunBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string/run \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recipient": {
      "id": "user_1"
    },
    "settings": {
      "sandbox_mode": true,
      "skip_delay": true
    },
    "tenant": "tenant_1"
  }'
```

`PUT /v1/broadcasts/{broadcast_key}/run`

Runs the current version of a broadcast for the provided recipient without publishing the broadcast.

> Body parameter

```json
{
  "recipient": {
    "id": "user_1"
  },
  "settings": {
    "sandbox_mode": true,
    "skip_delay": true
  },
  "tenant": "tenant_1"
}
```

<h3 id="run-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[BroadcastRunRequest](#schemabroadcastrunrequest)|false|Params|
|» recipient|body|object|true|The user to run the broadcast for.|
|» » id|body|string|true|The ID of the user.|
|» settings|body|object|false|Settings that control how the broadcast run executes.|
|» » sandbox_mode|body|boolean|false|Whether to generate messages without sending them to downstream providers. When omitted, each channel's sandbox mode setting in the environment applies. When false, messages are sent even through channels in sandbox mode.|
|» » skip_delay|body|boolean|false|Whether to skip delay steps during the run.|
|» step_id|body|string(uuid) \| null|false|When set, runs only this message-sending channel step. Guide steps, legacy in-app steps, and unknown ids are rejected.|
|» tenant|body|string \| null|false|The tenant to associate the broadcast run with. Must not contain whitespace.|

> Example responses

> 200 Response

```json
{
  "broadcast_run_id": "123e4567-e89b-12d3-a456-426614174000",
  "request_id": "req_123"
}
```

<h3 id="run-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BroadcastRunResponse](#schemabroadcastrunresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List broadcasts

<a id="opIdlistBroadcasts"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/broadcasts`

Returns a paginated list of broadcasts available in a given environment. The broadcasts are returned ordered by creation time (newest first).

<h3 id="list-broadcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|
|annotate|query|boolean|false|Whether to annotate the resource. Only used in the Knock CLI.|
|hide_uncommitted_changes|query|boolean|false|Whether to hide uncommitted changes. When true, only committed changes will be returned. When false, both committed and uncommitted changes will be returned.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "categories": [
        "marketing",
        "promotions"
      ],
      "created_at": "2022-12-16T19:07:50.027113Z",
      "description": "Holiday promotion broadcast for December",
      "environment": "development",
      "key": "december-promotion",
      "name": "December Promotion",
      "scheduled_at": null,
      "sent_at": null,
      "settings": {
        "is_commercial": true,
        "override_preferences": false
      },
      "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
      "status": "draft",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "description": "Main in-app feed",
          "name": "In-app step",
          "ref": "in_app_feed_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "in-review"
      ],
      "target_audience_key": "premium-users",
      "updated_at": "2023-02-08T22:15:19.846681Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-broadcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-broadcasts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Broadcast](#schemabroadcast)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Send a broadcast

<a id="opIdsendBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string/send \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "send_at": "2024-03-20T10:00:00Z"
  }'
```

`PUT /v1/broadcasts/{broadcast_key}/send`

Sends a broadcast immediately or schedules it to send at a future time.


> Body parameter

```json
{
  "send_at": "2024-03-20T10:00:00Z"
}
```

<h3 id="send-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[BroadcastSendRequest](#schemabroadcastsendrequest)|false|Params|
|» send_at|body|string(date-time)|false|When to send the broadcast. If provided, the broadcast will be scheduled to send at this time. Must be in ISO 8601 UTC format. If not provided, the broadcast will be sent immediately.|

> Example responses

> 200 Response

```json
{
  "broadcast": {
    "categories": [
      "marketing",
      "promotions"
    ],
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "Holiday promotion broadcast for December",
    "environment": "development",
    "key": "december-promotion",
    "name": "December Promotion",
    "scheduled_at": null,
    "sent_at": null,
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "status": "draft",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "premium-users",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="send-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="send-a-broadcast-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[Broadcast](#schemabroadcast)|true|none|A broadcast object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a broadcast

<a id="opIdvalidateBroadcast"></a>

> Code samples

```bash
curl https://control.knock.app/v1/broadcasts/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcast": {
      "categories": [
        "announcement"
      ],
      "description": "A broadcast to all users",
      "name": "My Broadcast",
      "settings": {
        "is_commercial": true,
        "override_preferences": false
      },
      "steps": [
        {
          "channel_key": "in-app-feed",
          "name": "Channel 1",
          "ref": "channel_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "in-review"
      ],
      "target_audience_key": "all-users"
    }
  }'
```

`PUT /v1/broadcasts/{broadcast_key}/validate`

Validates a broadcast payload without persisting it.


> Body parameter

```json
{
  "broadcast": {
    "categories": [
      "announcement"
    ],
    "description": "A broadcast to all users",
    "name": "My Broadcast",
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "all-users"
  }
}
```

<h3 id="validate-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcast_key|path|string|true|The key of the broadcast.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» broadcast|body|[BroadcastRequest](#schemabroadcastrequest)|true|A broadcast request for upserting a broadcast.|

> Example responses

> 200 Response

```json
{
  "broadcast": {
    "categories": [
      "marketing",
      "promotions"
    ],
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "Holiday promotion broadcast for December",
    "environment": "development",
    "key": "december-promotion",
    "name": "December Promotion",
    "scheduled_at": null,
    "sent_at": null,
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "status": "draft",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "premium-users",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

<h3 id="validate-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validate-a-broadcast-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[Broadcast](#schemabroadcast)|true|none|A broadcast object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-templates">Templates</h1>

## Preview a template

<a id="opIdpreviewTemplate"></a>

> Code samples

```bash
curl https://control.knock.app/v1/templates/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_type": "email",
    "data": {
      "order_id": 123
    },
    "recipient": "user_123",
    "template": {
      "html_body": "<p>Welcome!</p>",
      "settings": {
        "layout_key": "default"
      },
      "subject": "Hello {{ recipient.name }}"
    }
  }'
```

`POST /v1/templates/preview`

Renders a template preview, without requiring a template to be persisted within Knock.
This is useful for previewing templates in isolation, without the need to use a workflow.

For email templates, you can optionally specify a layout by key or provide inline layout content.


> Body parameter

```json
{
  "channel_type": "email",
  "data": {
    "order_id": 123
  },
  "recipient": "user_123",
  "template": {
    "html_body": "<p>Welcome!</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Hello {{ recipient.name }}"
  }
}
```

<h3 id="preview-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|[PreviewTemplateRequest](#schemapreviewtemplaterequest)|false|Params|
|» actor|body|[RecipientReference](#schemarecipientreference) \| object \| null|false|The actor to reference in the preview.|
|» » *anyOf*|body|[RecipientReference](#schemarecipientreference)|false|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» » *anyOf*|body|object \| null|false|none|
|» channel_type|body|string|true|The channel type of the template to preview.|
|» data|body|object|false|The data to pass to the template for rendering.|
|» layout|body|object \| null|false|Email layout configuration. Only applicable for email channel type. Falls back to environment default if not provided.|
|» » html_content|body|string \| null|false|Inline HTML content for the layout. Must include `{{ content }}` placeholder.|
|» » key|body|string \| null|false|The key of an existing email layout to use.|
|» » text_content|body|string \| null|false|Inline text content for the layout.|
|» recipient|body|[RecipientReference](#schemarecipientreference)|true|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|» template|body|object|true|The template content to preview. Structure depends on channel_type.|
|» » *anyOf*|body|[EmailTemplate](#schemaemailtemplate)|false|An email message template.|
|» » *anyOf*|body|[SmsTemplate](#schemasmstemplate)|false|An SMS template.|
|» » *anyOf*|body|[PushTemplate](#schemapushtemplate)|false|A push notification template.|
|» » *anyOf*|body|[ChatTemplate](#schemachattemplate)|false|A chat template.|
|» » *anyOf*|body|[InAppFeedTemplate](#schemainappfeedtemplate)|false|An in-app feed template.|
|» tenant|body|string \| null|false|The tenant to associate with the preview. Must not contain whitespace.|
|» workflow|body|object \| null|false|Optional workflow context for variable hydration. When provided, recipient/actor/tenant are resolved via Knock.|
|» » categories|body|[string]|false|Workflow categories.|
|» » commercial|body|boolean \| null|false|Whether the workflow is marked as commercial messaging.|
|» » key|body|string|true|The workflow key.|
|» » override_preferences|body|boolean \| null|false|Whether to ignore recipient preferences for a given type of notification. If true, will send for every channel in the workflow even if the recipient has opted out of a certain kind. Defaults to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel_type|email|
|» channel_type|sms|
|» channel_type|push|
|» channel_type|chat|
|» channel_type|in_app_feed|

> Example responses

> 200 Response

```json
{
  "content_type": "email",
  "result": "success",
  "template": {
    "html_body": "<p>Welcome to Acme!</p>",
    "subject": "Hello John",
    "text_body": "Welcome to Acme!"
  }
}
```

<h3 id="preview-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreviewTemplateResponse](#schemapreviewtemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-schemas">Schemas</h1>

## List item schemas

<a id="opIdlistSchemas"></a>

> Code samples

```bash
curl https://control.knock.app/v1/schemas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/schemas`

Retrieve the configuration for all managed item schemas (`user`, `tenant`, and `object`) in a given environment. Branch-qualified reads return the schemas inherited from the parent environment.

<h3 id="list-item-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item_type|query|string|false|Filter schemas by item type (`user`, `tenant`, or `object`).|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "item_id": "accounts",
      "item_type": "object",
      "properties": [
        {
          "description": "The user's current billing plan.",
          "item_type": null,
          "key": "plan",
          "preview_text": "Enterprise",
          "type": "string",
          "visible": true
        }
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-item-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-item-schemas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ItemSchema](#schemaitemschema)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get an item schema

<a id="opIdgetSchema"></a>

> Code samples

```bash
curl https://control.knock.app/v1/schemas/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/schemas/{item_type}`

Retrieve the configuration for an item schema (`user`, `tenant`, or `object`) in a given environment, including all of its configured properties.

<h3 id="get-an-item-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item_type|path|string|true|The item schema type to retrieve (`user`, `tenant`, or `object`).|
|collection|query|string|false|The object collection, required when `item_type` is `object`.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-an-item-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert item schema properties

<a id="opIdupsertSchema"></a>

> Code samples

```bash
curl https://control.knock.app/v1/schemas/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /v1/schemas/{item_type}`

Applies changes for the item schema properties in the request. Omitted properties are left unchanged; hide a property with `visible: false` rather than removing it. The required permissions depend on what changes: changing a property's display settings (`visible`/`description`) requires `item_schemas:manage`; changing a property's type or example, or adding a property, requires `item_schemas:edit`. Adding a property that is already hidden or already has a description requires both.

> Body parameter

```json
{}
```

<h3 id="upsert-item-schema-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item_type|path|string|true|The item schema type to upsert (`user`, `tenant`, or `object`).|
|collection|query|string|false|The object collection, required when `item_type` is `object`.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|

> Example responses

> 200 Response

```json
{}
```

<h3 id="upsert-item-schema-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate an item schema's configuration

<a id="opIdvalidateSchema"></a>

> Code samples

```bash
curl https://control.knock.app/v1/schemas/string/validate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /v1/schemas/{item_type}/validate`

Checks an item schema configuration payload and reports which permissions it would require, without saving any changes.

> Body parameter

```json
{}
```

<h3 id="validate-an-item-schemas-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item_type|path|string|true|The item schema type to validate (`user`, `tenant`, or `object`).|
|collection|query|string|false|The object collection, required when `item_type` is `object`.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|

> Example responses

> 200 Response

```json
{}
```

<h3 id="validate-an-item-schemas-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-channel-groups">Channel Groups</h1>

## List channel groups

<a id="opIdlistChannelGroups"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channel_groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/channel_groups`

Returns a paginated list of channel groups. Note: the list of channel groups is across the entire account, not scoped to an environment.

<h3 id="list-channel-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "channel_rules": [
        {
          "channel": {
            "archived_at": null,
            "created_at": "2021-01-01T00:00:00Z",
            "custom_icon_url": null,
            "id": "01234567-89ab-cdef-0123-456789abcdef",
            "key": "my-sendgrid-channel",
            "name": "My Sendgrid Channel",
            "provider": "sendgrid",
            "type": "email",
            "updated_at": "2021-01-01T00:00:00Z",
            "visible_in": [
              "workflow",
              "broadcast"
            ]
          },
          "created_at": "2021-01-01T00:00:00Z",
          "index": 0,
          "rule_type": "always",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "channel_type": "push",
      "created_at": "2021-01-01T00:00:00Z",
      "key": "push-group",
      "name": "Push Notification Group",
      "operator": "any",
      "source": "user",
      "updated_at": "2021-01-01T00:00:00Z",
      "visible_in": [
        "workflow",
        "broadcast"
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-channel-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-channel-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ChannelGroup](#schemachannelgroup)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a channel group

<a id="opIdgetChannelGroup"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channel_groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/channel_groups/{channel_group_key}`

Get a channel group by its key.

<h3 id="get-a-channel-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_group_key|path|string|true|The key of the channel group to retrieve.|

> Example responses

> 200 Response

```json
{
  "channel_rules": [
    {
      "channel": {
        "archived_at": null,
        "created_at": "2021-01-01T00:00:00Z",
        "custom_icon_url": null,
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "key": "my-sendgrid-channel",
        "name": "My Sendgrid Channel",
        "provider": "sendgrid",
        "type": "email",
        "updated_at": "2021-01-01T00:00:00Z",
        "visible_in": [
          "workflow",
          "broadcast"
        ]
      },
      "created_at": "2021-01-01T00:00:00Z",
      "index": 0,
      "rule_type": "always",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "channel_type": "push",
  "created_at": "2021-01-01T00:00:00Z",
  "key": "push-group",
  "name": "Push Notification Group",
  "operator": "any",
  "source": "user",
  "updated_at": "2021-01-01T00:00:00Z",
  "visible_in": [
    "workflow",
    "broadcast"
  ]
}
```

<h3 id="get-a-channel-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelGroup](#schemachannelgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert a channel group

<a id="opIdupsertChannelGroup"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channel_groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_group": {
      "channel_rules": [
        {
          "channel_key": "push-fcm",
          "index": 0,
          "rule_type": "always"
        }
      ],
      "channel_type": "push",
      "name": "Push Notification Group",
      "operator": "any"
    }
  }'
```

`PUT /v1/channel_groups/{channel_group_key}`

Creates or updates a channel group by key.

> Body parameter

```json
{
  "channel_group": {
    "channel_rules": [
      {
        "channel_key": "push-fcm",
        "index": 0,
        "rule_type": "always"
      }
    ],
    "channel_type": "push",
    "name": "Push Notification Group",
    "operator": "any"
  }
}
```

<h3 id="upsert-a-channel-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_group_key|path|string|true|The key of the channel group to upsert.|
|body|body|object|false|Params|
|» channel_group|body|[ChannelGroupRequest](#schemachannelgrouprequest)|true|A request to create or update a channel group.|

> Example responses

> 200 Response

```json
{
  "channel_group": {
    "channel_rules": [
      {
        "channel": {
          "archived_at": null,
          "created_at": "2021-01-01T00:00:00Z",
          "custom_icon_url": null,
          "id": "01234567-89ab-cdef-0123-456789abcdef",
          "key": "my-sendgrid-channel",
          "name": "My Sendgrid Channel",
          "provider": "sendgrid",
          "type": "email",
          "updated_at": "2021-01-01T00:00:00Z",
          "visible_in": [
            "workflow",
            "broadcast"
          ]
        },
        "created_at": "2021-01-01T00:00:00Z",
        "index": 0,
        "rule_type": "always",
        "updated_at": "2021-01-01T00:00:00Z"
      }
    ],
    "channel_type": "push",
    "created_at": "2021-01-01T00:00:00Z",
    "key": "push-group",
    "name": "Push Notification Group",
    "operator": "any",
    "source": "user",
    "updated_at": "2021-01-01T00:00:00Z",
    "visible_in": [
      "workflow",
      "broadcast"
    ]
  }
}
```

<h3 id="upsert-a-channel-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-a-channel-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group|[ChannelGroup](#schemachannelgroup)|true|none|A group of channels with rules for when they are applicable.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a channel group

<a id="opIddeleteChannelGroup"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channel_groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/channel_groups/{channel_group_key}`

Archives (soft deletes) a channel group by key.

<h3 id="delete-a-channel-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_group_key|path|string|true|The key of the channel group to delete.|

<h3 id="delete-a-channel-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-channels">Channels</h1>

## List channels

<a id="opIdlistChannels"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/channels`

Returns a paginated list of channels. Note: the list of channels is across the entire account, not scoped to an environment.

<h3 id="list-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(uuid)|false|A channel id to filter the results by.|
|include|query|[string]|false|Associated resources to include in the response. Accepts `environment_settings` to include per-environment channel configuration.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|environment_settings|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "archived_at": null,
      "created_at": "2021-01-01T00:00:00Z",
      "custom_icon_url": null,
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "key": "my-sendgrid-channel",
      "name": "My Sendgrid Channel",
      "provider": "sendgrid",
      "type": "email",
      "updated_at": "2021-01-01T00:00:00Z",
      "visible_in": [
        "workflow",
        "broadcast"
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Channel](#schemachannel)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a channel

<a id="opIdgetChannel"></a>

> Code samples

```bash
curl https://control.knock.app/v1/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/channels/{channel_key}`

Returns a channel with all environment-specific settings. Secret values in provider settings are obfuscated unless they are Liquid templates (e.g., `{{ vars.api_key }}`).

<h3 id="get-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_key|path|string|true|The key of the channel to retrieve.|

> Example responses

> 200 Response

```json
{
  "archived_at": null,
  "created_at": "2021-01-01T00:00:00Z",
  "custom_icon_url": null,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "key": "my-sendgrid-channel",
  "name": "My Sendgrid Channel",
  "provider": "sendgrid",
  "type": "email",
  "updated_at": "2021-01-01T00:00:00Z",
  "visible_in": [
    "workflow",
    "broadcast"
  ]
}
```

<h3 id="get-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-members">Members</h1>

## Get a member

<a id="opIdgetMember"></a>

> Code samples

```bash
curl https://control.knock.app/v1/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/members/{id}`

Returns a single member by their ID.

<h3 id="get-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the member to retrieve.|

> Example responses

> 200 Response

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "id": "d4b8e8e0-1234-5678-9abc-def012345678",
  "role": "admin",
  "updated_at": "2024-06-20T14:45:00Z",
  "user": {
    "avatar_url": "https://www.gravatar.com/avatar/abc123",
    "created_at": "2024-01-10T08:00:00Z",
    "email": "jane@example.com",
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "name": "Jane Doe",
    "updated_at": "2024-06-18T12:00:00Z"
  }
}
```

<h3 id="get-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Remove a member

<a id="opIdremoveMember"></a>

> Code samples

```bash
curl https://control.knock.app/v1/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/members/{id}`

Removes a member from the account.

<h3 id="remove-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the member to remove.|

<h3 id="remove-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List members

<a id="opIdlistMembers"></a>

> Code samples

```bash
curl https://control.knock.app/v1/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/members`

Returns a paginated list of members for the current account. Optionally filter by role.

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|Filter members by role. One of: owner, admin, member, production_only_member, billing, support.|
|email|query|string|false|Filter members by email address (exact match).|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "created_at": "2024-01-15T10:30:00Z",
      "id": "d4b8e8e0-1234-5678-9abc-def012345678",
      "role": "admin",
      "updated_at": "2024-06-20T14:45:00Z",
      "user": {
        "avatar_url": "https://www.gravatar.com/avatar/abc123",
        "created_at": "2024-01-10T08:00:00Z",
        "email": "jane@example.com",
        "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
        "name": "Jane Doe",
        "updated_at": "2024-06-18T12:00:00Z"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Member](#schemamember)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-webhooks">Webhooks</h1>

## List webhooks

<a id="opIdlistWebhooks"></a>

> Code samples

```bash
curl https://control.knock.app/v1/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks`

Returns a paginated list of outbound webhooks for a given environment.

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|event_type|query|string|false|Filter webhooks by event type in dotted format (e.g. `message.sent`).|
|active|query|boolean|false|Filter webhooks by active status.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "active": true,
      "created_at": "2021-01-01T00:00:00Z",
      "description": "My webhook endpoint",
      "event_types": [
        "message.sent",
        "message.delivered"
      ],
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "updated_at": "2021-01-01T00:00:00Z",
      "url": "https://example.com/webhooks"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Webhook](#schemawebhook)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://control.knock.app/v1/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhook": {
      "active": true,
      "description": "My webhook endpoint",
      "event_types": [
        "message.sent",
        "message.delivered"
      ],
      "url": "https://example.com/webhooks"
    }
  }'
```

`POST /v1/webhooks`

Creates a new outbound webhook in the given environment. The response includes
the `secret_key` which is only revealed at creation time.


> Body parameter

```json
{
  "webhook": {
    "active": true,
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "url": "https://example.com/webhooks"
  }
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» webhook|body|[WebhookRequest](#schemawebhookrequest)|true|The request body for creating or updating an outbound webhook.|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "active": true,
    "created_at": "2021-01-01T00:00:00Z",
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2021-01-01T00:00:00Z",
    "url": "https://example.com/webhooks"
  }
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-a-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|[Webhook](#schemawebhook)|true|none|An outbound webhook that receives event notifications.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a webhook

<a id="opIdgetWebhook"></a>

> Code samples

```bash
curl https://control.knock.app/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks/{id}`

Retrieves a single outbound webhook by its ID.

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the webhook to retrieve.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created_at": "2021-01-01T00:00:00Z",
  "description": "My webhook endpoint",
  "event_types": [
    "message.sent",
    "message.delivered"
  ],
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2021-01-01T00:00:00Z",
  "url": "https://example.com/webhooks"
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://control.knock.app/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhook": {
      "active": true,
      "description": "My webhook endpoint",
      "event_types": [
        "message.sent",
        "message.delivered"
      ],
      "url": "https://example.com/webhooks"
    }
  }'
```

`PUT /v1/webhooks/{id}`

Updates an existing outbound webhook.

> Body parameter

```json
{
  "webhook": {
    "active": true,
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "url": "https://example.com/webhooks"
  }
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the webhook to update.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|
|body|body|object|false|Params|
|» webhook|body|[WebhookRequest](#schemawebhookrequest)|true|The request body for creating or updating an outbound webhook.|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "active": true,
    "created_at": "2021-01-01T00:00:00Z",
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2021-01-01T00:00:00Z",
    "url": "https://example.com/webhooks"
  }
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-a-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|[Webhook](#schemawebhook)|true|none|An outbound webhook that receives event notifications.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive a webhook

<a id="opIdarchiveWebhook"></a>

> Code samples

```bash
curl https://control.knock.app/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/webhooks/{id}`

Archives an outbound webhook.

<h3 id="archive-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the webhook to archive.|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|branch|query|string|false|The slug of a branch to use. When `environment` is omitted, the branch is resolved from Development after the account default is injected. When `environment` is supplied, it must be `"development"`.|

> Example responses

> 200 Response

```json
{
  "result": "success"
}
```

<h3 id="archive-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-a-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-preference-center">Preference center</h1>

## Get preference center configuration

<a id="opIdgetPreferenceCenter"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_center \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/preference_center`

Returns the preference center configuration for the given environment.

<h3 id="get-preference-center-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "config": {
    "body": "Select which communications you’d like to receive from us.",
    "rows": [
      {
        "description": "Receive promotional and non-essential notifications.",
        "name": "Commercial messages",
        "type": "commercial_subscribed"
      }
    ],
    "show_account_name": true,
    "title": "Manage preferences"
  },
  "enabled": true
}
```

<h3 id="get-preference-center-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-preference-center-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The preference center configuration document.|
|enabled|boolean|false|none|Whether the preference center is enabled for recipients.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Upsert preference center configuration

<a id="opIdupsertPreferenceCenter"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_center \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "body": "Select which communications you’d like to receive from us.",
      "rows": [
        {
          "description": "Receive promotional and non-essential notifications.",
          "name": "Commercial messages",
          "type": "commercial_subscribed"
        }
      ],
      "show_account_name": true,
      "title": "Manage preferences"
    },
    "enabled": true
  }'
```

`PUT /v1/preference_center`

Creates or updates the preference center configuration for the given environment.

> Body parameter

```json
{
  "config": {
    "body": "Select which communications you’d like to receive from us.",
    "rows": [
      {
        "description": "Receive promotional and non-essential notifications.",
        "name": "Commercial messages",
        "type": "commercial_subscribed"
      }
    ],
    "show_account_name": true,
    "title": "Manage preferences"
  },
  "enabled": true
}
```

<h3 id="upsert-preference-center-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|body|body|object|false|Params|
|» config|body|object|true|The preference center configuration document.|
|» enabled|body|boolean|false|Whether the preference center is enabled for recipients.|

> Example responses

> 200 Response

```json
{
  "config": {
    "body": "Select which communications you’d like to receive from us.",
    "rows": [
      {
        "description": "Receive promotional and non-essential notifications.",
        "name": "Commercial messages",
        "type": "commercial_subscribed"
      }
    ],
    "show_account_name": true,
    "title": "Manage preferences"
  },
  "enabled": true
}
```

<h3 id="upsert-preference-center-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-preference-center-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The preference center configuration document.|
|enabled|boolean|false|none|Whether the preference center is enabled for recipients.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Reset preference center configuration to default

<a id="opIdresetPreferenceCenter"></a>

> Code samples

```bash
curl https://control.knock.app/v1/preference_center/reset \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/preference_center/reset`

Resets the preference center configuration for the given environment to the built-in default content. The `enabled` flag is preserved.

<h3 id="reset-preference-center-configuration-to-default-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|

> Example responses

> 200 Response

```json
{
  "config": {
    "body": "Select which communications you’d like to receive from us.",
    "rows": [
      {
        "description": "Receive promotional and non-essential notifications.",
        "name": "Commercial messages",
        "type": "commercial_subscribed"
      }
    ],
    "show_account_name": true,
    "title": "Manage preferences"
  },
  "enabled": true
}
```

<h3 id="reset-preference-center-configuration-to-default-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="reset-preference-center-configuration-to-default-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The preference center configuration document.|
|enabled|boolean|false|none|Whether the preference center is enabled for recipients.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-audit-logs">Audit logs</h1>

## List audit logs

<a id="opIdlistAuditLogs"></a>

> Code samples

```bash
curl https://control.knock.app/v1/audit_logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audit_logs`

Returns a paginated list of audit log entries for the current account, across every environment and branch, including account-level entries that have no environment. Entries are ordered from most recent first.

The list includes user-visible changes and environment merges. Commits are returned by the commits endpoint. Entries outside the account's data retention window are omitted.


<h3 id="list-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the list is account-wide and does not use the account's default environment. When set, limits entries to that environment or branch and omits account-level entries.<br>|
|action|query|string \| [string]|false|Filter by action. Accepts one action or an array of actions, matched exactly.|
|actor_id|query|string(uuid) \| [string(uuid)]|false|Filter by the id of the user who performed the action. Accepts one id or an array of ids.|
|resource_type|query|string \| [string]|false|Filter by resource type. Accepts one type or an array of types. `channel` includes channel environment settings, and `source` includes source environment settings.|
|since|query|string(date-time)|false|Only return entries inserted at or after this RFC 3339 timestamp.|
|until|query|string(date-time)|false|Only return entries inserted at or before this RFC 3339 timestamp.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|limit|query|integer|false|The number of entries to fetch per-page.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "action": "workflow.updated",
      "actor": {
        "email": "ada@example.com",
        "id": "5c0e1a2b-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
        "name": "Ada Lovelace"
      },
      "agent_session_id": null,
      "environment": "development",
      "id": "8f1c0b2e-6a4d-4f1a-9c3e-1b2d3e4f5a6b",
      "inserted_at": "2026-10-15T18:04:00Z",
      "ip_address": "203.0.113.10",
      "location": {
        "city": "New York",
        "country_code": "US",
        "region_code": "NY"
      },
      "project_id": "11111111-2222-3333-4444-555555555555",
      "request_id": "req_01HZX",
      "request_source": "dashboard",
      "resource": {
        "id": "99999999-aaaa-bbbb-cccc-dddddddddddd",
        "identifier": "welcome",
        "type": "workflow"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-audit-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[AuditLog](#schemaauditlog)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-management-api-mapi-api-keys">API keys</h1>

## Exchange for API key

<a id="opIdexchangeForApiKey"></a>

> Code samples

```bash
curl https://control.knock.app/v1/api_keys/exchange \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/api_keys/exchange`

Given an authenticated service token, exchanges it for an API key that can be used to make requests to the public API. Returns the environment's secret key by default. Pass `type=public` to get its public key instead, for client-side integrations.

<h3 id="exchange-for-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|query|string|false|The environment slug. When omitted, the account's default environment is used.|
|type|query|string|false|The type of API key to return: `secret` or `public`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|secret|
|type|public|

> Example responses

> 200 Response

```json
{
  "api_key": "sk_1234567890"
}
```

<h3 id="exchange-for-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="exchange-for-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|The API key exchanged from the service token, of the requested `type`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_InAppFeedChannelSettings">InAppFeedChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemainappfeedchannelsettings"></a>
<a id="schema_InAppFeedChannelSettings"></a>
<a id="tocSinappfeedchannelsettings"></a>
<a id="tocsinappfeedchannelsettings"></a>

```json
{
  "link_tracking": true
}
```

In-app feed channel settings. Only used as configuration as part of a workflow channel step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link_tracking|boolean|false|none|Whether to track link clicks on in-app feed notifications.|

<h2 id="tocS_Translation">Translation</h2>
<!-- backwards compatibility -->
<a id="schematranslation"></a>
<a id="schema_Translation"></a>
<a id="tocStranslation"></a>
<a id="tocstranslation"></a>

```json
{
  "content": "{\"hello\":\"Hello, world!\"}",
  "format": "json",
  "inserted_at": "2021-01-01T00:00:00Z",
  "locale_code": "en",
  "namespace": "my_app",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A translation object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|A JSON encoded string containing the key-value pairs of translation references and translation strings.|
|format|string|true|none|Indicates whether content is a JSON encoded object string or a string in the PO format.|
|inserted_at|string(date-time)|true|none|The timestamp of when the translation was created.|
|locale_code|string|true|none|The locale code for the translation object.|
|namespace|string|true|none|An optional namespace for the translation to help categorize your translations.|
|tenant|string|false|none|An optional tenant identifier to scope the translation to a specific tenant.|
|updated_at|string(date-time)|true|none|The timestamp of when the translation was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|json|
|format|po|

<h2 id="tocS_SourceProvidersResponse">SourceProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourceprovidersresponse"></a>
<a id="schema_SourceProvidersResponse"></a>
<a id="tocSsourceprovidersresponse"></a>
<a id="tocssourceprovidersresponse"></a>

```json
{
  "entries": [
    {
      "key": "segment",
      "provider": {
        "description": "Receive customer events from Segment.",
        "name": "Segment"
      },
      "version": "1.0.0"
    }
  ]
}
```

Source providers available for creating sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|true|none|Source providers.|

<h2 id="tocS_SmsChannelSettings">SmsChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemasmschannelsettings"></a>
<a id="schema_SmsChannelSettings"></a>
<a id="tocSsmschannelsettings"></a>
<a id="tocssmschannelsettings"></a>

```json
{
  "link_tracking": true
}
```

SMS channel settings. Only used as configuration as part of a workflow channel step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link_tracking|boolean|false|none|Whether to track link clicks on SMS notifications.|

<h2 id="tocS_PaginatedAssetResponse">PaginatedAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedassetresponse"></a>
<a id="schema_PaginatedAssetResponse"></a>
<a id="tocSpaginatedassetresponse"></a>
<a id="tocspaginatedassetresponse"></a>

```json
{
  "entries": [
    {
      "asset_type": "library_asset",
      "created_at": "2021-01-01T00:00:00Z",
      "filename": "logo.png",
      "id": "018f02cd-9230-71d2-8f70-b40e5e2a4f6d",
      "mime_type": "image/png",
      "updated_at": "2021-01-01T00:00:00Z",
      "url": "https://assets.example.com/acc_123/proj_123/asset.png"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Asset. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Asset](#schemaasset)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WrappedReusableRequestResponse">WrappedReusableRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedreusablerequestresponse"></a>
<a id="schema_WrappedReusableRequestResponse"></a>
<a id="tocSwrappedreusablerequestresponse"></a>
<a id="tocswrappedreusablerequestresponse"></a>

```json
{
  "reusable_request": {
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Loads a user from the API.",
    "environment": "development",
    "key": "fetch-user",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "sha": "abc123",
    "type": "http_fetch",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the ReusableRequest response under the `reusable_request` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reusable_request|[ReusableRequest](#schemareusablerequest)|true|none|A reusable HTTP request that workflows can link to.|

<h2 id="tocS_PushTemplate">PushTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapushtemplate"></a>
<a id="schema_PushTemplate"></a>
<a id="tocSpushtemplate"></a>
<a id="tocspushtemplate"></a>

```json
{
  "settings": {
    "delivery_type": "content",
    "payload_overrides": "{\"name\": \"John\"}"
  },
  "text_body": "Hello, world!",
  "title": "Hello, world!"
}
```

A push notification template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|object|true|none|The [settings](https://docs.knock.app/integrations/sms/settings-and-overrides) for the push template.|
|text_body|string|true|none|The body of the push notification.|
|title|string|true|none|The title of the push notification.|

<h2 id="tocS_CommitResource">CommitResource</h2>
<!-- backwards compatibility -->
<a id="schemacommitresource"></a>
<a id="schema_CommitResource"></a>
<a id="tocScommitresource"></a>
<a id="tocscommitresource"></a>

```json
{
  "identifier": "my-email-layout",
  "type": "email_layout"
}
```

The resource object associated with the commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|The unique identifier for the resource.|
|type|string|true|none|The type of the resource object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audience|
|type|email_layout|
|type|guide|
|type|message_type|
|type|partial|
|type|reusable_request|
|type|translation|
|type|workflow|

<h2 id="tocS_PartialRequest">PartialRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartialrequest"></a>
<a id="schema_PartialRequest"></a>
<a id="tocSpartialrequest"></a>
<a id="tocspartialrequest"></a>

```json
{
  "content": "<p>Hello, world!</p>",
  "description": "This is a test partial",
  "input_schema": [
    {
      "key": "text_field",
      "label": "My text field",
      "settings": {
        "description": "A description of the text field",
        "max_length": 100,
        "min_length": 10,
        "required": true
      },
      "type": "text"
    }
  ],
  "name": "My Partial",
  "type": "html",
  "visual_block_enabled": true
}
```

A partial object with attributes to update or create a partial.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The partial content.|
|description|string|false|none|An arbitrary string attached to a partial object. Useful for adding notes about the partial for internal purposes. Maximum of 280 characters allowed.|
|icon_name|string|false|none|The name of the icon to be used in the visual editor.|
|input_schema|[object]|false|none|The field types available for the partial.|
|name|string|true|none|A name for the partial. Must be at maximum 255 characters in length.|
|type|string|true|none|The partial type. One of 'html', 'json', 'markdown', 'text'.|
|visual_block_enabled|boolean|false|none|Indicates whether the partial can be used in the visual editor. Only applies to HTML partials.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html|
|type|text|
|type|json|
|type|markdown|

<h2 id="tocS_PreviewEmailLayoutRequest">PreviewEmailLayoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreviewemaillayoutrequest"></a>
<a id="schema_PreviewEmailLayoutRequest"></a>
<a id="tocSpreviewemaillayoutrequest"></a>
<a id="tocspreviewemaillayoutrequest"></a>

```json
{
  "data": {
    "order_id": 123
  },
  "email_layout": {
    "html_layout": "<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>",
    "name": "Transactional",
    "text_layout": "Hello {{ recipient.name }}! {{ content }}"
  },
  "recipient": "user_123"
}
```

A request to preview an email layout, without requiring a layout to be persisted within Knock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[RecipientReference](#schemarecipientreference) \| object \| null|false|none|The actor to reference in the preview.|
|data|object|false|none|The data to pass to the layout for rendering.|
|email_layout|[EmailLayoutRequest](#schemaemaillayoutrequest)|true|none|A request to update or create an email layout.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|tenant|string \| null|false|none|The tenant to associate with the preview. Must not contain whitespace.|
|workflow|object \| null|false|none|Optional workflow context for variable hydration. When provided, recipient/actor/tenant are resolved via Knock.|

<h2 id="tocS_AssetUploadRequest">AssetUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploadrequest"></a>
<a id="schema_AssetUploadRequest"></a>
<a id="tocSassetuploadrequest"></a>
<a id="tocsassetuploadrequest"></a>

```json
{
  "content_length": 20480,
  "filename": "logo.png",
  "mime_type": "image/png"
}
```

A request for a time-limited URL the client uses to upload an asset file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_length|integer|true|none|The file size in bytes. Maximum is 5 MB. The upload URL is signed for this length.|
|filename|string \| null|false|none|The display name to echo back. The upload request does not store it. Send it again when creating the asset.|
|mime_type|string|true|none|The MIME type of the file. One of image/jpeg, image/png, or image/gif.|

<h2 id="tocS_AuditLog">AuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaauditlog"></a>
<a id="schema_AuditLog"></a>
<a id="tocSauditlog"></a>
<a id="tocsauditlog"></a>

```json
{
  "action": "workflow.updated",
  "actor": {
    "email": "ada@example.com",
    "id": "5c0e1a2b-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
    "name": "Ada Lovelace"
  },
  "agent_session_id": null,
  "environment": "development",
  "id": "8f1c0b2e-6a4d-4f1a-9c3e-1b2d3e4f5a6b",
  "inserted_at": "2026-10-15T18:04:00Z",
  "ip_address": "203.0.113.10",
  "location": {
    "city": "New York",
    "country_code": "US",
    "region_code": "NY"
  },
  "project_id": "11111111-2222-3333-4444-555555555555",
  "request_id": "req_01HZX",
  "request_source": "dashboard",
  "resource": {
    "id": "99999999-aaaa-bbbb-cccc-dddddddddddd",
    "identifier": "welcome",
    "type": "workflow"
  }
}
```

An account audit log entry. Commit rows are returned by the commits endpoint. The entry does not include the stored change diff.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action that was performed, such as `workflow.updated` or `seat.removed`.|
|actor|object \| null|true|none|The Knock user who performed the action.|
|agent_session_id|string(uuid) \| null|true|none|The agent session that performed the action, when the source is an agent.|
|environment|string \| null|true|none|The slug of the environment or branch where the action happened. Null for account-level actions.|
|id|string(uuid)|true|none|The unique identifier for the audit log entry.|
|inserted_at|string(date-time)|true|none|The timestamp of when the action happened.|
|ip_address|string \| null|true|none|The IP address of the request that performed the action.|
|location|object \| null|true|none|The location derived from the request IP address.|
|project_id|string(uuid) \| null|true|none|The project the action belongs to. Null for account-level actions.|
|request_id|string \| null|true|none|The id of the request that performed the action.|
|request_source|string \| null|true|none|Where the action originated.|
|resource|object|true|none|The resource the action changed. `type` and `identifier` follow the commit resource for promotable resources, including `reusable_request`. `identifier` is null when the resource has no public handle or the row no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|request_source|dashboard|
|request_source|mapi|
|request_source|agent|

<h2 id="tocS_RecipientReference">RecipientReference</h2>
<!-- backwards compatibility -->
<a id="schemarecipientreference"></a>
<a id="schema_RecipientReference"></a>
<a id="tocSrecipientreference"></a>
<a id="tocsrecipientreference"></a>

```json
{
  "collection": "projects",
  "id": "project_1"
}
```

A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|A user ID.|
|*oneOf*|object|false|none|An object reference.|
|collection|string|true|none|The collection of the object.|
|id|string|true|none|The ID of the object.|

<h2 id="tocS_RequestTemplateHeaders">RequestTemplateHeaders</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplateheaders"></a>
<a id="schema_RequestTemplateHeaders"></a>
<a id="tocSrequesttemplateheaders"></a>
<a id="tocsrequesttemplateheaders"></a>

```json
[
  {
    "key": "X-API-Key",
    "value": "1234567890"
  }
]
```

The headers of the request. Can be a template string or a list of key-value pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|A template string that should resolve to a JSON object representing the headers.|
|*oneOf*|[object]|false|none|A list of key-value pairs for the request headers. Each object should contain key and value fields with string values.|

<h2 id="tocS_WorkflowRandomCohortStep">WorkflowRandomCohortStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrandomcohortstep"></a>
<a id="schema_WorkflowRandomCohortStep"></a>
<a id="tocSworkflowrandomcohortstep"></a>
<a id="tocsworkflowrandomcohortstep"></a>

```json
{
  "cohort_branches": [
    {
      "name": "Control",
      "percentage": "50",
      "steps": [],
      "terminates": false
    },
    {
      "name": "Variant",
      "percentage": "50",
      "steps": [],
      "terminates": false
    }
  ],
  "description": "Experiment step description.",
  "name": "Experiment",
  "ref": "experiment_1",
  "type": "random_cohort"
}
```

An experiment step. Deterministically assigns recipients to percentage-based cohorts for A/B testing and experimentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cohort_branches|[[WorkflowRandomCohortStepBranch](#schemaworkflowrandomcohortstepbranch)]|true|none|A list of cohort branches. Must have between 2 and 10 branches, and percentages must sum to 100.|
|cohort_key|string \| null|false|none|The key used to deterministically assign recipients to cohorts. Defaults to the recipient ID if not provided.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|type|string|true|none|The type of step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|random_cohort|

<h2 id="tocS_MessageTypeRequest">MessageTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagetyperequest"></a>
<a id="schema_MessageTypeRequest"></a>
<a id="tocSmessagetyperequest"></a>
<a id="tocsmessagetyperequest"></a>

```json
{
  "description": "This is a message type",
  "name": "My Message Type",
  "preview": "<div>Hello, world!</div>",
  "variants": [
    {
      "fields": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "key": "default",
      "name": "Default"
    }
  ]
}
```

A request to create a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|true|none|An arbitrary string attached to a message type object. Useful for adding notes about the message type for internal purposes. Maximum of 280 characters allowed.|
|icon_name|string|false|none|The icon name of the message type.|
|name|string|true|none|A name for the message type. Must be at maximum 255 characters in length.|
|preview|string|true|none|An HTML/liquid template for the message type preview.|
|semver|string|false|none|The semantic version of the message type.|
|variants|[[MessageTypeVariant](#schemamessagetypevariant)]|false|none|The variants of the message type.|

<h2 id="tocS_VariableRequest">VariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemavariablerequest"></a>
<a id="schema_VariableRequest"></a>
<a id="tocSvariablerequest"></a>
<a id="tocsvariablerequest"></a>

```json
{
  "description": "Source signing secret",
  "environment_values": {
    "development": "my_dev_secret_value",
    "production": ""
  },
  "type": "secret",
  "value": "my_secret_value"
}
```

A request to create or update a variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the variable. When omitted or null on an update, the existing description is kept. An empty string clears it.|
|environment_values|object|false|none|A map of root environment slugs to override values. An environment that is omitted or null is left unchanged. An empty string clears the override, so the default value applies.|
|type|string|true|none|The type of the variable. Required, and it cannot be changed after the variable is created.|
|value|string \| null|false|none|The default value of the variable. Required when creating a variable, unless `environment_values` sets a value for at least one environment. When omitted or null on an update, the existing value is kept. An empty string clears the default value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|public|
|type|secret|

<h2 id="tocS_PaginatedGoalResponse">PaginatedGoalResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgoalresponse"></a>
<a id="schema_PaginatedGoalResponse"></a>
<a id="tocSpaginatedgoalresponse"></a>
<a id="tocspaginatedgoalresponse"></a>

```json
{
  "entries": [
    {
      "condition": {
        "event": {
          "event_key": "order.completed",
          "event_type": "integration_source",
          "integration_source_key": "stripe",
          "recipient_path": "body.userId"
        },
        "match_conditions": [
          {
            "conditions": [
              {
                "argument": "100",
                "operator": "greater_than",
                "variable": "event.amount"
              }
            ],
            "operator": "and"
          }
        ]
      },
      "created_at": "2024-06-01T00:00:00Z",
      "description": "Tracks when a trial user converts to paid",
      "environment": "development",
      "key": "trial-conversion",
      "name": "Trial Conversion",
      "sha": "abc123def456",
      "updated_at": "2024-06-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Goal. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Goal](#schemagoal)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_GoalAttachmentRequest">GoalAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoalattachmentrequest"></a>
<a id="schema_GoalAttachmentRequest"></a>
<a id="tocSgoalattachmentrequest"></a>
<a id="tocsgoalattachmentrequest"></a>

```json
{
  "attribution_window_days": 7
}
```

Settings for the goal attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution_window_days|integer|false|none|The number of days after a message is sent in which a goal completion is attributed to it. Must be between 1 and 30. When omitted, re-saving the attached goal keeps its window; otherwise 7.|

<h2 id="tocS_WrappedSourceResponse">WrappedSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedsourceresponse"></a>
<a id="schema_WrappedSourceResponse"></a>
<a id="tocSwrappedsourceresponse"></a>
<a id="tocswrappedsourceresponse"></a>

```json
{
  "source": {
    "created_at": "2021-01-01T00:00:00Z",
    "custom_image_url": null,
    "description": "Receives events from Segment.",
    "environment_settings": {
      "development": {
        "mappings": [],
        "settings": {
          "endpoint": "https://api.knock.app/integrations/receive/src_123",
          "enforce_idempotency": true,
          "enforce_verification": false,
          "event_type_path": "body.event",
          "handle_identifies": true,
          "idempotency_key_path": "body.messageId",
          "preprocess_script": {
            "language": "javascript",
            "source": "return event;"
          },
          "timestamp_path": "body.timestamp"
        },
        "updated_at": "2021-01-01T00:00:00Z"
      }
    },
    "key": "segment-source",
    "name": "Segment Source",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the Source response under the `source` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[Source](#schemasource)|true|none|A source that receives external events and maps them to Knock actions.|

<h2 id="tocS_RequestTemplateQueryParamsString">RequestTemplateQueryParamsString</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplatequeryparamsstring"></a>
<a id="schema_RequestTemplateQueryParamsString"></a>
<a id="tocSrequesttemplatequeryparamsstring"></a>
<a id="tocsrequesttemplatequeryparamsstring"></a>

```json
"{{ data.request_query_params }}"
```

A template string that should resolve to a JSON object representing the query params.

<h2 id="tocS_GuideRequest">GuideRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguiderequest"></a>
<a id="schema_GuideRequest"></a>
<a id="tocSguiderequest"></a>
<a id="tocsguiderequest"></a>

```json
{
  "activation_url_patterns": [
    {
      "directive": "allow",
      "pathname": "/dashboard/*"
    }
  ],
  "channel_key": "in-app-guide",
  "description": "A guide to help users get started with the application",
  "name": "Getting Started Guide",
  "steps": [
    {
      "name": "Welcome to the App",
      "ref": "welcome-step",
      "schema_key": "tooltip",
      "schema_semver": "1.0.0",
      "schema_variant_key": "default",
      "values": {
        "text_field": "value"
      }
    }
  ],
  "target_property_conditions": {
    "all": [
      {
        "argument": "some_property",
        "operator": "equal_to",
        "variable": "recipient.property"
      }
    ]
  }
}
```

A request to create or update a guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activation_url_patterns|[[GuideActivationUrlPattern](#schemaguideactivationurlpattern)]|false|none|A list of activation url patterns that describe when the guide should be shown.|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the guide was archived.|
|channel_key|string|true|none|The key of the channel in which the guide exists.|
|deleted_at|string(date-time) \| null|false|none|The timestamp of when the guide was deleted.|
|description|string \| null|false|none|An arbitrary string attached to a guide object. Useful for adding notes about the guide for internal purposes. Maximum of 280 characters allowed.|
|guide_audience_conditions|object|false|none|Read-only. Workflow-derived audience eligibility as a condition group. Each applicable workflow (recorded plus currently referencing) that references this guide via trigger guide step contributes an audience-membership condition; multiple workflows are combined with OR. Omitted when there are no workflow-derived audience conditions.|
|name|string|true|none|A name for the guide. Must be at maximum 255 characters in length.|
|steps|[[GuideStep](#schemaguidestep)]|true|none|A list of guide step objects in the guide.|
|tags|[string]|false|none|Use tags to organize resources internally within your account. For example, by team or product area.|
|target_audience_key|string \| null|false|none|The key of the target audience for the guide. When not set, will default to targeting all users.|
|target_property_conditions|object|false|none|A conditions object that describes one or more conditions to be met for the guide to be shown to an audience member.|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "active": true,
  "created_at": "2021-01-01T00:00:00Z",
  "description": "My webhook endpoint",
  "event_types": [
    "message.sent",
    "message.delivered"
  ],
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2021-01-01T00:00:00Z",
  "url": "https://example.com/webhooks"
}
```

An outbound webhook that receives event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Whether the webhook is currently active.|
|created_at|string(date-time)|true|none|The timestamp of when the webhook was created.|
|description|string \| null|false|none|An optional description of the webhook.|
|event_types|[string]|true|none|The list of event types that this webhook is subscribed to, in dotted format (e.g. `message.sent`).|
|id|string(uuid)|true|none|The unique identifier for the webhook.|
|secret_key|string \| null|false|none|The secret key used to sign webhook payloads. Only returned when a webhook is first created.|
|updated_at|string(date-time)|true|none|The timestamp of when the webhook was last updated.|
|url|string|true|none|The URL that the webhook will send events to.|

<h2 id="tocS_ShowWorkflowResponse">ShowWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemashowworkflowresponse"></a>
<a id="schema_ShowWorkflowResponse"></a>
<a id="tocSshowworkflowresponse"></a>
<a id="tocsshowworkflowresponse"></a>

```json
{
  "active": false,
  "categories": [
    "marketing",
    "black-friday"
  ],
  "conditions": {
    "all": [
      {
        "argument": "admin",
        "operator": "equal_to",
        "variable": "recipient.role"
      }
    ]
  },
  "created_at": "2022-12-16T19:07:50.027113Z",
  "created_by": {
    "email": "john@example.com",
    "id": "user_123",
    "name": "John Doe"
  },
  "description": "This is a dummy workflow for demo purposes.",
  "environment": "development",
  "key": "december-16-demo",
  "name": "december-16-demo",
  "settings": {
    "override_preferences": true
  },
  "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "description": "Main in-app feed",
      "name": "In-app step",
      "ref": "in_app_feed_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "trigger_data_json_schema": {
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "required": [
      "name"
    ],
    "type": "object"
  },
  "trigger_frequency": "every_trigger",
  "updated_at": "2023-02-08T22:15:19.846681Z",
  "updated_by": {
    "email": "jane@example.com",
    "id": "user_456",
    "name": "Jane Smith"
  },
  "valid": true
}
```

A workflow object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Whether the workflow is [active](https://docs.knock.app/concepts/workflows#workflow-status) in the current environment. (read-only).|
|categories|[string]|false|none|A list of [categories](https://docs.knock.app/concepts/workflows#workflow-categories) that the workflow belongs to.|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met for the workflow to be executed. (optional).|
|created_at|string(date-time)|true|none|The timestamp of when the workflow was created. (read-only).|
|created_by|[MemberUser](#schemamemberuser) \| object \| null|false|none|Information about the user who created the workflow. Only included in detailed views. (read-only).|
|deleted_at|string(date-time)|false|none|The timestamp of when the workflow was deleted. (read-only).|
|description|string|false|none|An arbitrary string attached to a workflow object. Useful for adding notes about the workflow for internal purposes. Maximum of 280 characters allowed.|
|environment|string|true|none|The slug of the environment in which the workflow exists. (read-only).|
|key|string|true|none|The unique key string for the workflow object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the workflow. Must be at maximum 255 characters in length.|
|settings|object|false|none|A map of workflow settings.|
|sha|string|true|none|The SHA hash of the workflow data. (read-only).|
|steps|[[WorkflowStep](#schemaworkflowstep)]|true|none|A list of workflow step objects in the workflow.|
|tags|[string]|false|none|Use tags to organize resources internally within your account. For example, by team or product area.|
|trigger_data_json_schema|object|false|none|A JSON schema for the expected structure of the workflow trigger's `data` payload (available in templates as `{{ data.field_name }}`). Used to validate trigger requests. Read more in the [docs](https://docs.knock.app/developer-tools/validating-trigger-data).|
|trigger_events|[[WorkflowTriggerEvents](#schemaworkflowtriggerevents)]|false|none|Events that automatically trigger this workflow: audience triggers (a user enters an audience) or source event triggers (an event is received from an integration source). All entries must share the same `type`. Omit or pass an empty list for workflows triggered via the API.|
|trigger_frequency|string|false|none|The frequency at which the workflow should be triggered. One of: `once_per_recipient`, `once_per_recipient_per_tenant`, `every_trigger`. Defaults to `every_trigger`. Read more in [docs](https://docs.knock.app/send-notifications/triggering-workflows/overview#controlling-workflow-trigger-frequency).|
|updated_at|string(date-time)|true|none|The timestamp of when the workflow was last updated. (read-only).|
|updated_by|[MemberUser](#schemamemberuser) \| object \| null|false|none|Information about the user who last updated the workflow. Only included in detailed views. (read-only).|
|valid|boolean|true|none|Whether the workflow and its steps are in a valid state. (read-only).|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger_frequency|every_trigger|
|trigger_frequency|once_per_recipient|
|trigger_frequency|once_per_recipient_per_tenant|

<h2 id="tocS_AudienceRequest">AudienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencerequest"></a>
<a id="schema_AudienceRequest"></a>
<a id="tocSaudiencerequest"></a>
<a id="tocsaudiencerequest"></a>

```json
{
  "description": "Users on the premium plan",
  "name": "Premium users",
  "segments": [
    {
      "conditions": [
        {
          "argument": "premium",
          "operator": "equal_to",
          "property": "recipient.plan"
        }
      ]
    }
  ],
  "type": "dynamic"
}
```

An audience object with attributes to create or update an audience. Use `type: static` for audiences with explicitly managed members, or `type: dynamic` for audiences with segment-based membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[StaticAudienceRequest](#schemastaticaudiencerequest)|false|none|Request body for creating/updating a static audience.|
|*oneOf*|[DynamicAudienceRequest](#schemadynamicaudiencerequest)|false|none|Request body for creating/updating a dynamic audience.|

<h2 id="tocS_InlineIdentifyUserRequest">InlineIdentifyUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlineidentifyuserrequest"></a>
<a id="schema_InlineIdentifyUserRequest"></a>
<a id="tocSinlineidentifyuserrequest"></a>
<a id="tocsinlineidentifyuserrequest"></a>

```json
{
  "email": "jane@example.com",
  "id": "user_1",
  "name": "Jane Doe"
}
```

A user recipient with optional identify properties. When email or name are provided, the user is created or updated as part of the workflow run. The collection is always `$users` and should not be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|The email address to set on the user.|
|id|string|true|none|The ID of the user.|
|name|string \| null|false|none|The display name to set on the user.|

<h2 id="tocS_Workflow">Workflow</h2>
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_Workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

```json
{
  "active": false,
  "categories": [
    "marketing",
    "black-friday"
  ],
  "conditions": {
    "all": [
      {
        "argument": "admin",
        "operator": "equal_to",
        "variable": "recipient.role"
      }
    ]
  },
  "created_at": "2022-12-16T19:07:50.027113Z",
  "description": "This is a dummy workflow for demo purposes.",
  "environment": "development",
  "key": "december-16-demo",
  "name": "december-16-demo",
  "settings": {
    "override_preferences": true
  },
  "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "channel_type": "in_app_feed",
      "description": "Main in-app feed",
      "name": "In-app step",
      "ref": "in_app_feed_1",
      "template": {
        "action_url": "{{ data.onboarding_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
      },
      "type": "channel"
    },
    {
      "ref": "delay_1",
      "settings": {
        "delay_for": {
          "unit": "hours",
          "value": 1
        }
      },
      "type": "delay"
    },
    {
      "channel_key": "postmark",
      "channel_type": "email",
      "ref": "email_1",
      "template": {
        "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
        "settings": {
          "layout_key": "default"
        },
        "subject": "Welcome to {{ vars.app_name }}!"
      },
      "type": "channel"
    }
  ],
  "tags": [
    "onboarding",
    "growth"
  ],
  "trigger_data_json_schema": {
    "properties": {
      "onboarding_url": {
        "type": "string"
      }
    },
    "required": [
      "onboarding_url"
    ],
    "type": "object"
  },
  "trigger_events": [
    {
      "audience_action_type": "member_added",
      "audience_key": "pro-users",
      "type": "audience"
    }
  ],
  "trigger_frequency": "every_trigger",
  "updated_at": "2023-02-08T22:15:19.846681Z",
  "valid": true
}
```

A workflow object. Read more in the [docs](https://docs.knock.app/concepts/workflows).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Whether the workflow is [active](https://docs.knock.app/concepts/workflows#workflow-status) in the current environment. (read-only).|
|categories|[string]|false|none|A list of [categories](https://docs.knock.app/concepts/workflows#workflow-categories) that the workflow belongs to.|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met for the workflow to be executed. (optional).|
|created_at|string(date-time)|true|none|The timestamp of when the workflow was created. (read-only).|
|deleted_at|string(date-time)|false|none|The timestamp of when the workflow was deleted. (read-only).|
|description|string|false|none|An arbitrary string attached to a workflow object. Useful for adding notes about the workflow for internal purposes. Maximum of 280 characters allowed.|
|environment|string|true|none|The slug of the environment in which the workflow exists. (read-only).|
|key|string|true|none|The unique key string for the workflow object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the workflow. Must be at maximum 255 characters in length.|
|settings|object|false|none|A map of workflow settings.|
|sha|string|true|none|The SHA hash of the workflow data. (read-only).|
|steps|[[WorkflowStep](#schemaworkflowstep)]|true|none|A list of workflow step objects in the workflow.|
|tags|[string]|false|none|Use tags to organize resources internally within your account. For example, by team or product area.|
|trigger_data_json_schema|object|false|none|A JSON schema for the expected structure of the workflow trigger's `data` payload (available in templates as `{{ data.field_name }}`). Used to validate trigger requests. Read more in the [docs](https://docs.knock.app/developer-tools/validating-trigger-data).|
|trigger_events|[[WorkflowTriggerEvents](#schemaworkflowtriggerevents)]|false|none|Events that automatically trigger this workflow: audience triggers (a user enters an audience) or source event triggers (an event is received from an integration source). All entries must share the same `type`. Omit or pass an empty list for workflows triggered via the API.|
|trigger_frequency|string|false|none|The frequency at which the workflow should be triggered. One of: `once_per_recipient`, `once_per_recipient_per_tenant`, `every_trigger`. Defaults to `every_trigger`. Read more in [docs](https://docs.knock.app/send-notifications/triggering-workflows/overview#controlling-workflow-trigger-frequency).|
|updated_at|string(date-time)|true|none|The timestamp of when the workflow was last updated. (read-only).|
|valid|boolean|true|none|Whether the workflow and its steps are in a valid state. (read-only).|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger_frequency|every_trigger|
|trigger_frequency|once_per_recipient|
|trigger_frequency|once_per_recipient_per_tenant|

<h2 id="tocS_WarehouseSync">WarehouseSync</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesync"></a>
<a id="schema_WarehouseSync"></a>
<a id="tocSwarehousesync"></a>
<a id="tocswarehousesync"></a>

```json
{
  "change_tracking": {
    "last_modified_column": "updated_at"
  },
  "created_at": "2026-10-01T12:00:00Z",
  "description": "Syncs users from the analytics warehouse",
  "enabled": true,
  "environment": "development",
  "frequency_minutes": 60,
  "has_unpublished_changes": false,
  "key": "users",
  "last_failure": null,
  "last_published_at": "2026-11-01T12:00:00Z",
  "mappings": [
    {
      "on_null": "set_null",
      "source_column": "id",
      "target_field": "id"
    },
    {
      "on_null": "set_null",
      "source_column": "email",
      "target_field": "email"
    },
    {
      "on_null": "preserve",
      "source_column": "name",
      "target_field": "name"
    }
  ],
  "name": "Users",
  "primary_key_column": "id",
  "publish_error": null,
  "sha": "abc123def456",
  "source": {
    "mode": "sql",
    "query": "SELECT id, email, name, updated_at FROM analytics.users"
  },
  "status": "live",
  "target": null,
  "target_type": "user",
  "updated_at": "2026-11-01T12:00:00Z",
  "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
  "warehouse_key": "analytics"
}
```

A warehouse sync reads rows from a warehouse on a schedule and writes them to Knock as users, tenants, objects, audience members, or subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change_tracking|[WarehouseSyncChangeTracking](#schemawarehousesyncchangetracking)|false|none|How the sync detects changed and deleted rows.|
|created_at|string(date-time)|true|none|When the sync was created. (read-only).|
|description|string \| null|false|none|An optional description of the sync. Maximum of 280 characters allowed.|
|enabled|boolean|true|none|Whether the sync runs on its schedule.|
|environment|string|true|none|The slug of the environment the sync belongs to. (read-only).|
|frequency_minutes|integer|true|none|How often the sync runs, in minutes.|
|has_unpublished_changes|boolean|true|none|Whether the sync has a draft that hasn't been published.|
|key|string|true|none|The unique key of the sync in its environment.|
|last_failure|object \| null|false|none|The last run failure, cleared when a run succeeds.|
|last_published_at|string(date-time) \| null|false|none|When the sync was last published.|
|mappings|[[WarehouseSyncMapping](#schemawarehousesyncmapping)]|true|none|How columns map to Knock fields.|
|name|string|true|none|The name of the sync. Must be at minimum 1 character and at maximum 255 characters in length.|
|primary_key_column|string \| null|false|none|The column that uniquely identifies each row.|
|publish_error|string \| null|false|none|Why the last publish didn't go live, when it failed.|
|sha|string|true|none|The SHA hash of the sync's definition. (read-only).|
|source|[WarehouseSyncSource](#schemawarehousesyncsource)|false|none|The rows a warehouse sync reads: a table or view (`relation`), or the result of a SQL query (`sql`).|
|status|string|true|none|The status of the sync.|
|target|[WarehouseSyncTarget](#schemawarehousesynctarget)|false|none|The collection or audience the sync writes to. `object` and `subscription` syncs set `collection`, and `static_audience_membership` syncs set `audience_key`. Null for `user` and `tenant` syncs.|
|target_type|string|true|none|What each row becomes in Knock. Can't change after creation.|
|updated_at|string(date-time)|true|none|When the returned version was saved. (read-only).|
|version_id|string(uuid)|true|none|The ID of the version returned. Send it back when saving to make sure nobody saved since.|
|warehouse_key|string|true|none|The key of the warehouse the sync reads from. Can't change after creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency_minutes|10|
|frequency_minutes|15|
|frequency_minutes|60|
|frequency_minutes|360|
|frequency_minutes|720|
|frequency_minutes|1440|
|status|draft|
|status|publishing|
|status|delivery_failed|
|status|paused|
|status|needs_attention|
|status|live|
|target_type|user|
|target_type|tenant|
|target_type|object|
|target_type|static_audience_membership|
|target_type|subscription|

<h2 id="tocS_GoalResourceAttachment">GoalResourceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemagoalresourceattachment"></a>
<a id="schema_GoalResourceAttachment"></a>
<a id="tocSgoalresourceattachment"></a>
<a id="tocsgoalresourceattachment"></a>

```json
{
  "attribution_window_days": 7,
  "goal_key": "trial-conversion",
  "resource_key": "trial-onboarding",
  "resource_type": "workflow"
}
```

A goal attached to a workflow, guide, or broadcast in one environment. An attachment goes live without a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution_window_days|integer|true|none|The number of days after a message is sent in which a goal completion is attributed to it.|
|goal_key|string|true|none|The key of the attached goal.|
|resource_key|string|true|none|The key of the workflow, guide, or broadcast.|
|resource_type|string|true|none|The type of resource the goal is attached to.|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|workflow|
|resource_type|guide|
|resource_type|broadcast|

<h2 id="tocS_PaginatedVariableResponse">PaginatedVariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedvariableresponse"></a>
<a id="schema_PaginatedVariableResponse"></a>
<a id="tocSpaginatedvariableresponse"></a>
<a id="tocspaginatedvariableresponse"></a>

```json
{
  "entries": [
    {
      "description": "This is a description of my variable.",
      "environment_values": {
        "development": "dev_value",
        "production": "prod_value"
      },
      "inserted_at": "2021-01-01T00:00:00Z",
      "key": "my_variable",
      "type": "public",
      "updated_at": "2021-01-01T00:00:00Z",
      "value": "my_value"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Variable. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Variable](#schemavariable)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WorkflowDelayStep">WorkflowDelayStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowdelaystep"></a>
<a id="schema_WorkflowDelayStep"></a>
<a id="tocSworkflowdelaystep"></a>
<a id="tocsworkflowdelaystep"></a>

```json
{
  "conditions": {},
  "description": "Delay for 10 seconds",
  "name": "Delay",
  "ref": "delay_step",
  "settings": {
    "delay_for": {
      "unit": "seconds",
      "value": 10
    }
  },
  "type": "delay"
}
```

A delay function step. Read more in the [docs](https://docs.knock.app/designing-workflows/delay-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A set of conditions to be evaluated for this delay step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the delay step. Set `delay_for` for a fixed delay, `delay_until_field_path` for a dynamic delay, both for a relative delay, or `delay_until_time_windows` to wait until a weekly schedule is open.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delay|

<h2 id="tocS_Warehouse">Warehouse</h2>
<!-- backwards compatibility -->
<a id="schemawarehouse"></a>
<a id="schema_Warehouse"></a>
<a id="tocSwarehouse"></a>
<a id="tocswarehouse"></a>

```json
{
  "connection_error": null,
  "connection_settings": {
    "database": "ANALYTICS",
    "host": "acme.snowflakecomputing.com",
    "port": 443,
    "username": "KNOCK"
  },
  "connection_status": "connected",
  "created_at": "2026-10-01T12:00:00Z",
  "key": "analytics",
  "last_tested_at": "2026-11-01T12:00:00Z",
  "name": "Analytics",
  "type": "snowflake",
  "updated_at": "2026-11-01T12:00:00Z"
}
```

A warehouse is one database in your data warehouse that Knock reads from. Warehouses belong to the project and are shared by every environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_error|object \| null|false|none|The error from the last connection test, with a `code` and a `message`. Null when the last test passed.|
|connection_settings|object \| null|false|none|How Knock connects to the warehouse. The fields depend on the warehouse type, such as `host`, `port`, `database`, and `username`, or `project_id`, `region`, and `service_account_email` for BigQuery. Credentials such as passwords are never returned.|
|connection_status|string|true|none|The status of the warehouse's connection.|
|created_at|string(date-time)|true|none|When the warehouse was created.|
|key|string|true|none|The unique key of the warehouse.|
|last_tested_at|string(date-time) \| null|false|none|When the connection was last tested.|
|name|string|true|none|The name of the warehouse.|
|type|string|true|none|The type of data warehouse.|
|updated_at|string(date-time)|true|none|When the warehouse was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|not_configured|
|connection_status|key_not_installed|
|connection_status|failed|
|connection_status|connecting|
|connection_status|untested|
|connection_status|connected|
|type|redshift|
|type|snowflake|
|type|postgres|
|type|bigquery|

<h2 id="tocS_DetachGoalResponse">DetachGoalResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachgoalresponse"></a>
<a id="schema_DetachGoalResponse"></a>
<a id="tocSdetachgoalresponse"></a>
<a id="tocsdetachgoalresponse"></a>

```json
{
  "result": "success"
}
```

The response from detaching a goal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the detach operation.|

<h2 id="tocS_WrappedTranslationResponse">WrappedTranslationResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedtranslationresponse"></a>
<a id="schema_WrappedTranslationResponse"></a>
<a id="tocSwrappedtranslationresponse"></a>
<a id="tocswrappedtranslationresponse"></a>

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json",
    "inserted_at": "2021-01-01T00:00:00Z",
    "locale_code": "en",
    "namespace": "my_app",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the Translation response under the `translation` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|[Translation](#schematranslation)|true|none|A translation object.|

<h2 id="tocS_WorkflowWaitForEventAudienceEvent">WorkflowWaitForEventAudienceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventaudienceevent"></a>
<a id="schema_WorkflowWaitForEventAudienceEvent"></a>
<a id="tocSworkflowwaitforeventaudienceevent"></a>
<a id="tocsworkflowwaitforeventaudienceevent"></a>

```json
{
  "audience_key": "vip-users",
  "event_key": "enter",
  "event_type": "audience"
}
```

An audience membership event to wait for when a recipient enters or exits an audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience_key|string|true|none|The key of the audience to wait for membership changes.|
|event_key|string|true|none|The audience membership transition to wait for.|
|event_type|string|true|none|The type of event to wait for.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_key|enter|
|event_key|exit|
|event_type|audience|

<h2 id="tocS_WarehouseSyncTarget">WarehouseSyncTarget</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesynctarget"></a>
<a id="schema_WarehouseSyncTarget"></a>
<a id="tocSwarehousesynctarget"></a>
<a id="tocswarehousesynctarget"></a>

```json
{
  "collection": "projects"
}
```

The collection or audience the sync writes to. `object` and `subscription` syncs set `collection`, and `static_audience_membership` syncs set `audience_key`. Null for `user` and `tenant` syncs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience_key|string \| null|false|none|The key of the static audience the rows become members of.|
|collection|string \| null|false|none|The object collection the rows are written to.|

<h2 id="tocS_WorkflowBranchStepBranch">WorkflowBranchStepBranch</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowbranchstepbranch"></a>
<a id="schema_WorkflowBranchStepBranch"></a>
<a id="tocSworkflowbranchstepbranch"></a>
<a id="tocsworkflowbranchstepbranch"></a>

```json
{
  "conditions": {
    "all": [
      {
        "argument": "pro",
        "operator": "equal_to",
        "variable": "recipient.plan_type"
      }
    ]
  },
  "name": "Pro plan",
  "steps": [],
  "terminates": false
}
```

A branch in a branch step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A set of conditions to be evaluated for this branch.|
|name|string|false|none|The name of the branch.|
|steps|[[WorkflowStep](#schemaworkflowstep)]|false|none|A list of steps that will be executed if the branch is chosen.|
|terminates|boolean|false|none|If the workflow should halt at the end of the branch. Defaults to false if not provided.|

<h2 id="tocS_WrappedEmailLayoutRequestRequest">WrappedEmailLayoutRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedemaillayoutrequestrequest"></a>
<a id="schema_WrappedEmailLayoutRequestRequest"></a>
<a id="tocSwrappedemaillayoutrequestrequest"></a>
<a id="tocswrappedemaillayoutrequestrequest"></a>

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "name": "Transactional",
    "text_layout": "Hello, world!"
  }
}
```

Wraps the EmailLayoutRequest request under the email_layout key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_layout|[EmailLayoutRequest](#schemaemaillayoutrequest)|true|none|A request to update or create an email layout.|

<h2 id="tocS_WrappedChannelGroupRequestRequest">WrappedChannelGroupRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedchannelgrouprequestrequest"></a>
<a id="schema_WrappedChannelGroupRequestRequest"></a>
<a id="tocSwrappedchannelgrouprequestrequest"></a>
<a id="tocswrappedchannelgrouprequestrequest"></a>

```json
{
  "channel_group": {
    "channel_rules": [
      {
        "channel_key": "push-fcm",
        "index": 0,
        "rule_type": "always"
      }
    ],
    "channel_type": "push",
    "name": "Push Notification Group",
    "operator": "any"
  }
}
```

Wraps the ChannelGroupRequest request under the channel_group key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group|[ChannelGroupRequest](#schemachannelgrouprequest)|true|none|A request to create or update a channel group.|

<h2 id="tocS_PaginatedAudienceResponse">PaginatedAudienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedaudienceresponse"></a>
<a id="schema_PaginatedAudienceResponse"></a>
<a id="tocSpaginatedaudienceresponse"></a>
<a id="tocspaginatedaudienceresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2024-01-15T10:30:00Z",
      "description": "Customers who signed up in the last 30 days.",
      "environment": "development",
      "key": "new-customers",
      "name": "New customers",
      "segments": [
        {
          "conditions": [
            {
              "argument": "30_days_ago",
              "operator": "greater_than",
              "property": "recipient.created_at"
            }
          ]
        }
      ],
      "sha": "a1b2c3d4e5f6",
      "type": "dynamic",
      "updated_at": "2024-06-20T14:45:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Audience. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Audience](#schemaaudience)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WorkflowUpdateDataStep">WorkflowUpdateDataStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdatedatastep"></a>
<a id="schema_WorkflowUpdateDataStep"></a>
<a id="tocSworkflowupdatedatastep"></a>
<a id="tocsworkflowupdatedatastep"></a>

```json
{
  "description": "Update data step description.",
  "name": "Update data",
  "ref": "update_data_1",
  "settings": {
    "data": "{\"key\": \"value\"}"
  },
  "type": "update_data"
}
```

An update data function step. Merges data into the workflow's `data` scope for use in subsequent steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the update data step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_data|

<h2 id="tocS_RequestTemplateQueryParams">RequestTemplateQueryParams</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplatequeryparams"></a>
<a id="schema_RequestTemplateQueryParams"></a>
<a id="tocSrequesttemplatequeryparams"></a>
<a id="tocsrequesttemplatequeryparams"></a>

```json
[
  {
    "key": "key",
    "value": "value"
  }
]
```

The query params of the request. Can be a template string or a list of key-value pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|A template string that should resolve to a JSON object representing the query params.|
|*oneOf*|[object]|false|none|A list of key-value pairs for the request query params. Each object should contain key and value fields with string values.|

<h2 id="tocS_EnvironmentDefaultsPreferenceSet">EnvironmentDefaultsPreferenceSet</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdefaultspreferenceset"></a>
<a id="schema_EnvironmentDefaultsPreferenceSet"></a>
<a id="tocSenvironmentdefaultspreferenceset"></a>
<a id="tocsenvironmentdefaultspreferenceset"></a>

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": true,
        "push": true
      }
    }
  },
  "channel_types": {
    "email": true,
    "sms": false
  },
  "workflows": {
    "new-comment": {
      "channel_types": {
        "push": false
      }
    }
  }
}
```

A preference set applied to every recipient in the environment unless the recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys are not supported, because defaults are always replaced in full.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|object|false|none|A map of category key to a boolean or an object containing `channel_types`, `channels`, and `conditions`.|
|channel_types|object|false|none|A map of channel type to a boolean or an object containing `conditions`. Valid channel types are `email`, `sms`, `push`, `chat`, `in_app_feed`, and `http`.|
|channels|object|false|none|A map of channel ID to a boolean or an object containing `conditions`.|
|commercial_subscribed|boolean \| object|false|none|Whether the recipient is subscribed to commercial messages, as a boolean or a settings object.|
|workflows|object|false|none|A map of workflow key to a boolean or an object containing `channel_types`, `channels`, and `conditions`.|

<h2 id="tocS_WarehouseSyncRun">WarehouseSyncRun</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncrun"></a>
<a id="schema_WarehouseSyncRun"></a>
<a id="tocSwarehousesyncrun"></a>
<a id="tocswarehousesyncrun"></a>

```json
{
  "ended_at": "2026-11-01T12:02:30Z",
  "error": null,
  "id": "4b8e9a52-1c7d-4f0e-8a3b-6d2f5e9c1b07",
  "load_id": "9d3c2b1a-7e6f-4a5b-8c9d-0e1f2a3b4c5d",
  "records_errored": 0,
  "records_processed": 1200,
  "rows_applied": 1200,
  "rows_failed": 0,
  "started_at": "2026-11-01T12:00:05Z",
  "status": "completed",
  "submitted_at": "2026-11-01T12:00:00Z"
}
```

One run of a warehouse sync: reading changed rows from the warehouse, then applying them in Knock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ended_at|string(date-time) \| null|false|none|When the run ended.|
|error|object \| null|false|none|Why the run failed.|
|id|string|true|none|The ID of the run.|
|load_id|string \| null|false|none|The ID of the delivery of rows to Knock. Null when the run hasn't sent rows yet, failed before sending them, or found no changes.|
|records_errored|integer \| null|false|none|How many rows failed before reaching Knock.|
|records_processed|integer \| null|false|none|How many changed rows were read from the warehouse.|
|rows_applied|integer \| null|false|none|How many rows were applied in Knock.|
|rows_failed|integer \| null|false|none|How many rows failed to apply in Knock.|
|started_at|string(date-time) \| null|false|none|When the run started.|
|status|string|true|none|The status of the run.|
|submitted_at|string(date-time) \| null|false|none|When the run was queued.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|completed_with_errors|
|status|failed|

<h2 id="tocS_InAppFeedTemplate">InAppFeedTemplate</h2>
<!-- backwards compatibility -->
<a id="schemainappfeedtemplate"></a>
<a id="schema_InAppFeedTemplate"></a>
<a id="tocSinappfeedtemplate"></a>
<a id="tocsinappfeedtemplate"></a>

```json
{
  "action_buttons": [
    {
      "action": "https://example.com",
      "label": "Button 1"
    }
  ],
  "action_url": "https://example.com",
  "markdown_body": "Hello, world!"
}
```

An in-app feed template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_buttons|[object]|false|none|The action buttons of the in-app feed message.|
|action_url|string \| null|false|none|The URL to navigate to when the in-app feed is tapped. Can be omitted for multi-action templates, where the action buttons will be used instead.|
|markdown_body|string|true|none|The markdown body of the in-app feed.|

<h2 id="tocS_WrappedCloneGoalRequestRequest">WrappedCloneGoalRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedclonegoalrequestrequest"></a>
<a id="schema_WrappedCloneGoalRequestRequest"></a>
<a id="tocSwrappedclonegoalrequestrequest"></a>
<a id="tocswrappedclonegoalrequestrequest"></a>

```json
{
  "clone": {
    "environment": "production",
    "key": "trial-conversion-copy",
    "name": "Trial Conversion Copy"
  }
}
```

Wraps the CloneGoalRequest request under the clone key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clone|[CloneGoalRequest](#schemaclonegoalrequest)|true|none|The destination key, name, and environment for the cloned goal.|

<h2 id="tocS_WrappedWarehouseSyncRequestResponse">WrappedWarehouseSyncRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedwarehousesyncrequestresponse"></a>
<a id="schema_WrappedWarehouseSyncRequestResponse"></a>
<a id="tocSwrappedwarehousesyncrequestresponse"></a>
<a id="tocswrappedwarehousesyncrequestresponse"></a>

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "target_type": "user",
    "warehouse_key": "analytics"
  }
}
```

Wraps the WarehouseSyncRequest response under the `warehouse_sync` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSyncRequest](#schemawarehousesyncrequest)|true|none|A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.|

<h2 id="tocS_ChatChannelSettings">ChatChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemachatchannelsettings"></a>
<a id="schema_ChatChannelSettings"></a>
<a id="tocSchatchannelsettings"></a>
<a id="tocschatchannelsettings"></a>

```json
{
  "email_based_user_id_resolution": true,
  "link_tracking": true,
  "link_tracking_uses_short_links": true
}
```

Chat channel settings. Only used as configuration as part of a workflow channel step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_based_user_id_resolution|boolean|false|none|Whether to resolve chat provider user IDs using a Knock user's email address. Only relevant for Slack channels for the time being.|
|link_tracking|boolean|false|none|Whether to track link clicks on chat notifications.|
|link_tracking_uses_short_links|boolean|false|none|Whether tracked chat links should use compact short URLs instead of long tracked links. Only applied when link tracking is enabled. Not used by WhatsApp, which already uses short links.|

<h2 id="tocS_WarehouseSyncRequest">WarehouseSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncrequest"></a>
<a id="schema_WarehouseSyncRequest"></a>
<a id="tocSwarehousesyncrequest"></a>
<a id="tocswarehousesyncrequest"></a>

```json
{
  "change_tracking": {
    "last_modified_column": "updated_at"
  },
  "mappings": [
    {
      "on_null": "set_null",
      "source_column": "id",
      "target_field": "id"
    },
    {
      "on_null": "set_null",
      "source_column": "email",
      "target_field": "email"
    }
  ],
  "name": "Users",
  "primary_key_column": "id",
  "source": {
    "mode": "sql",
    "query": "SELECT id, email, name, updated_at FROM analytics.users"
  },
  "target_type": "user",
  "warehouse_key": "analytics"
}
```

A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change_tracking|[WarehouseSyncChangeTracking](#schemawarehousesyncchangetracking)|false|none|How the sync detects changed and deleted rows.|
|description|string \| null|false|none|An optional description of the sync. Maximum of 280 characters allowed.|
|mappings|[[WarehouseSyncMapping](#schemawarehousesyncmapping)]|false|none|How columns map to Knock fields.|
|name|string|false|none|The name of the sync. Must be at minimum 1 character and at maximum 255 characters in length.|
|primary_key_column|string \| null|false|none|The column that uniquely identifies each row.|
|source|[WarehouseSyncSource](#schemawarehousesyncsource)|false|none|The rows a warehouse sync reads: a table or view (`relation`), or the result of a SQL query (`sql`).|
|target|[WarehouseSyncTarget](#schemawarehousesynctarget)|false|none|The collection or audience the sync writes to. `object` and `subscription` syncs set `collection`, and `static_audience_membership` syncs set `audience_key`. Null for `user` and `tenant` syncs.|
|target_type|string|false|none|What each row becomes in Knock. Can't change after creation.|
|version_id|string(uuid)|false|none|The `version_id` of the sync you last read. When it isn't the current version, someone saved since, and the request is refused.|
|warehouse_key|string|false|none|The key of the warehouse the sync reads from. Can't change after creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|target_type|user|
|target_type|tenant|
|target_type|object|
|target_type|static_audience_membership|
|target_type|subscription|

<h2 id="tocS_PaginatedBroadcastResponse">PaginatedBroadcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedbroadcastresponse"></a>
<a id="schema_PaginatedBroadcastResponse"></a>
<a id="tocSpaginatedbroadcastresponse"></a>
<a id="tocspaginatedbroadcastresponse"></a>

```json
{
  "entries": [
    {
      "categories": [
        "marketing",
        "promotions"
      ],
      "created_at": "2022-12-16T19:07:50.027113Z",
      "description": "Holiday promotion broadcast for December",
      "environment": "development",
      "key": "december-promotion",
      "name": "December Promotion",
      "scheduled_at": null,
      "sent_at": null,
      "settings": {
        "is_commercial": true,
        "override_preferences": false
      },
      "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
      "status": "draft",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "description": "Main in-app feed",
          "name": "In-app step",
          "ref": "in_app_feed_1",
          "template": {
            "action_url": "{{ vars.app_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "in-review"
      ],
      "target_audience_key": "premium-users",
      "updated_at": "2023-02-08T22:15:19.846681Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Broadcast. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Broadcast](#schemabroadcast)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WorkflowWaitForEventRecipientEvent">WorkflowWaitForEventRecipientEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventrecipientevent"></a>
<a id="schema_WorkflowWaitForEventRecipientEvent"></a>
<a id="tocSworkflowwaitforeventrecipientevent"></a>
<a id="tocsworkflowwaitforeventrecipientevent"></a>

```json
{
  "event_key": "updated",
  "event_type": "recipient"
}
```

A recipient updated event to wait for from the workflow recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_key|string|false|none|Recipient lifecycle event to wait for. Always "updated" today.|
|event_type|string|true|none|The type of event to wait for.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_key|updated|
|event_type|recipient|

<h2 id="tocS_PaginatedEmailLayoutResponse">PaginatedEmailLayoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedemaillayoutresponse"></a>
<a id="schema_PaginatedEmailLayoutResponse"></a>
<a id="tocSpaginatedemaillayoutresponse"></a>
<a id="tocspaginatedemaillayoutresponse"></a>

```json
{
  "entries": [
    {
      "branding_overrides": {
        "dark_logo_url": "https://cdn.example.com/logo-dark.png",
        "dark_primary_color": "#1A1A2E",
        "dark_primary_color_contrast": "#FFFFFF",
        "primary_color": "#4F46E5",
        "primary_color_contrast": "#FFFFFF"
      },
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "development",
      "footer_links": [
        {
          "text": "Example",
          "url": "http://example.com"
        }
      ],
      "html_layout": "<html><body>Hello, world!</body></html>",
      "key": "transactional",
      "name": "Transactional",
      "sha": "1234567890",
      "text_layout": "Hello, world!",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of EmailLayout. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[EmailLayout](#schemaemaillayout)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WrappedBroadcastResponse">WrappedBroadcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedbroadcastresponse"></a>
<a id="schema_WrappedBroadcastResponse"></a>
<a id="tocSwrappedbroadcastresponse"></a>
<a id="tocswrappedbroadcastresponse"></a>

```json
{
  "broadcast": {
    "categories": [
      "marketing",
      "promotions"
    ],
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "Holiday promotion broadcast for December",
    "environment": "development",
    "key": "december-promotion",
    "name": "December Promotion",
    "scheduled_at": null,
    "sent_at": null,
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "status": "draft",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "premium-users",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

Wraps the Broadcast response under the `broadcast` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[Broadcast](#schemabroadcast)|true|none|A broadcast object.|

<h2 id="tocS_SourcePreprocessScript">SourcePreprocessScript</h2>
<!-- backwards compatibility -->
<a id="schemasourcepreprocessscript"></a>
<a id="schema_SourcePreprocessScript"></a>
<a id="tocSsourcepreprocessscript"></a>
<a id="tocssourcepreprocessscript"></a>

```json
{
  "language": "javascript",
  "source": "return event;"
}
```

A script that runs before source events are mapped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|true|none|The programming language used by the preprocess script.|
|source|string|true|none|The source code for the preprocess script.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|javascript|

<h2 id="tocS_RunWorkflowResponse">RunWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemarunworkflowresponse"></a>
<a id="schema_RunWorkflowResponse"></a>
<a id="tocSrunworkflowresponse"></a>
<a id="tocsrunworkflowresponse"></a>

```json
{
  "workflow_run_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

A response to a run workflow request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_run_id|string(uuid)|true|none|The ID of the workflow run.|

<h2 id="tocS_ChannelGroupRule">ChannelGroupRule</h2>
<!-- backwards compatibility -->
<a id="schemachannelgrouprule"></a>
<a id="schema_ChannelGroupRule"></a>
<a id="tocSchannelgrouprule"></a>
<a id="tocschannelgrouprule"></a>

```json
{
  "channel": {
    "archived_at": null,
    "created_at": "2021-01-01T00:00:00Z",
    "custom_icon_url": null,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "key": "my-sendgrid-channel",
    "name": "My Sendgrid Channel",
    "provider": "sendgrid",
    "type": "email",
    "updated_at": "2021-01-01T00:00:00Z",
    "visible_in": [
      "workflow",
      "broadcast"
    ]
  },
  "created_at": "2021-01-01T00:00:00Z",
  "index": 0,
  "rule_type": "always",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A rule that determines if a channel should be executed as part of a channel group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string \| null|false|none|For conditional rules, the value to compare against. For `is_in_random_cohort`, a 0–100 percentage with at most one decimal place.|
|channel|[Channel](#schemachannel)|true|none|A configured channel, which is a way to route messages to a provider.|
|created_at|string(date-time)|true|none|The timestamp of when the rule was created.|
|index|integer|true|none|The order index of this rule within the channel group.|
|operator|string \| null|false|none|For conditional rules, the operator to apply. For `is_in_random_cohort`, `variable` must be `recipient.id` and `argument` is a 0–100 percentage.|
|rule_type|string|true|none|The type of rule (if = conditional, unless = negative conditional, always = always apply).|
|updated_at|string(date-time)|true|none|The timestamp of when the rule was last updated.|
|variable|string \| null|false|none|For conditional rules, the variable to evaluate. For `is_in_random_cohort`, must be `recipient.id`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal_to|
|operator|not_equal_to|
|operator|greater_than|
|operator|less_than|
|operator|greater_than_or_equal_to|
|operator|less_than_or_equal_to|
|operator|contains|
|operator|not_contains|
|operator|contains_all|
|operator|not_contains_all|
|operator|is_timestamp_before|
|operator|is_timestamp_on_or_after|
|operator|is_timestamp_between|
|operator|is_between|
|operator|empty|
|operator|not_empty|
|operator|exists|
|operator|not_exists|
|operator|is_timestamp|
|operator|is_timestamp_before_now|
|operator|is_timestamp_on_or_after_now|
|operator|is_audience_member|
|operator|is_not_audience_member|
|operator|is_in_random_cohort|
|rule_type|if|
|rule_type|unless|
|rule_type|always|

<h2 id="tocS_WrappedAudienceResponse">WrappedAudienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedaudienceresponse"></a>
<a id="schema_WrappedAudienceResponse"></a>
<a id="tocSwrappedaudienceresponse"></a>
<a id="tocswrappedaudienceresponse"></a>

```json
{
  "audience": {
    "created_at": "2024-01-15T10:30:00Z",
    "description": "Customers who signed up in the last 30 days.",
    "environment": "development",
    "key": "new-customers",
    "name": "New customers",
    "segments": [
      {
        "conditions": [
          {
            "argument": "30_days_ago",
            "operator": "greater_than",
            "property": "recipient.created_at"
          }
        ]
      }
    ],
    "sha": "a1b2c3d4e5f6",
    "type": "dynamic",
    "updated_at": "2024-06-20T14:45:00Z"
  }
}
```

Wraps the Audience response under the `audience` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[Audience](#schemaaudience)|true|none|An audience defines a set of users that can be targeted for notifications. Can be either a `StaticAudience` (members explicitly added/removed) or a `DynamicAudience` (members determined by segment conditions).|

<h2 id="tocS_WorkflowWaitForEventWorkflowEvent">WorkflowWaitForEventWorkflowEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventworkflowevent"></a>
<a id="schema_WorkflowWaitForEventWorkflowEvent"></a>
<a id="tocSworkflowwaitforeventworkflowevent"></a>
<a id="tocsworkflowwaitforeventworkflowevent"></a>

```json
{
  "event_key": "completed",
  "event_type": "workflow",
  "source_key": "onboarding"
}
```

A workflow lifecycle event to wait for from a child workflow run for the same recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_key|string|true|none|The workflow lifecycle event to wait for.|
|event_type|string|true|none|The type of event to wait for.|
|source_key|string|true|none|The key of the workflow whose lifecycle event should match this wait.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_key|started|
|event_key|completed|
|event_type|workflow|

<h2 id="tocS_ArchiveWebhookResponse">ArchiveWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchivewebhookresponse"></a>
<a id="schema_ArchiveWebhookResponse"></a>
<a id="tocSarchivewebhookresponse"></a>
<a id="tocsarchivewebhookresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<h2 id="tocS_WorkflowTriggerWorkflowStep">WorkflowTriggerWorkflowStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtriggerworkflowstep"></a>
<a id="schema_WorkflowTriggerWorkflowStep"></a>
<a id="tocSworkflowtriggerworkflowstep"></a>
<a id="tocsworkflowtriggerworkflowstep"></a>

```json
{
  "name": "Trigger workflow step",
  "ref": "trigger_workflow_step",
  "settings": {
    "actor": "{{ actor.id }}",
    "cancellation_key": "{{ workflow.cancellation_key }}",
    "data": "{{ data | json }}",
    "recipients": "{{ recipient.id }}",
    "tenant": "{{ tenant.id }}",
    "workflow_key": "dinosaurs-loose"
  },
  "type": "trigger_workflow"
}
```

A workflow trigger function step. Read more in the [docs](https://docs.knock.app/designing-workflows/trigger-workflow-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A set of conditions to be evaluated for this trigger workflow step.|
|description|string \| null|false|none|A description for the workflow step.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the workflow trigger workflow step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|trigger_workflow|

<h2 id="tocS_EmailDividerBlock">EmailDividerBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemaildividerblock"></a>
<a id="schema_EmailDividerBlock"></a>
<a id="tocSemaildividerblock"></a>
<a id="tocsemaildividerblock"></a>

```json
{
  "layout_attrs": {
    "padding_bottom": 8,
    "padding_left": 4,
    "padding_right": 4,
    "padding_top": 8
  },
  "type": "divider"
}
```

A divider block in an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the block.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|type|string|true|none|The type of the block.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|divider|

<h2 id="tocS_WorkflowStep">WorkflowStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstep"></a>
<a id="schema_WorkflowStep"></a>
<a id="tocSworkflowstep"></a>
<a id="tocsworkflowstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "postmark",
  "channel_overrides": null,
  "channel_type": "email",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "Email channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Welcome to {{ vars.app_name }}",
    "text_body": "Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} Get started here: {{ data.sign_in_url }}."
  },
  "type": "channel"
}
```

A step within a workflow. Each workflow step, regardless of its type, share a common set of core attributes (`type`, `ref`, `name`, `description`, `conditions`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[WorkflowWebhookStep](#schemaworkflowwebhookstep)|false|none|A webhook step within a workflow to send an HTTP request to a generic channel. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowInAppFeedStep](#schemaworkflowinappfeedstep)|false|none|An in-app feed step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowInAppGuideStep](#schemaworkflowinappguidestep)|false|none|An in-app guide step within a workflow. References a guide that will be shown to recipients who execute this step. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowChatStep](#schemaworkflowchatstep)|false|none|A chat step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowSmsStep](#schemaworkflowsmsstep)|false|none|A SMS step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowPushStep](#schemaworkflowpushstep)|false|none|A push step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowEmailStep](#schemaworkflowemailstep)|false|none|An email step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).|
|*anyOf*|[WorkflowAIAgentStep](#schemaworkflowaiagentstep)|false|none|An AI agent function step. Fetches data from an AI model and merges it into the workflow's `data` scope for use in later steps. Supports Liquid templating in the prompt. Read more in the [docs](https://docs.knock.app/designing-workflows/ai-agent-function).|
|*anyOf*|[WorkflowDelayStep](#schemaworkflowdelaystep)|false|none|A delay function step. Read more in the [docs](https://docs.knock.app/designing-workflows/delay-function).|
|*anyOf*|[WorkflowWaitForEventStep](#schemaworkflowwaitforeventstep)|false|none|A wait for event function step that pauses a workflow until a matching event is received.|
|*anyOf*|[WorkflowBatchStep](#schemaworkflowbatchstep)|false|none|A batch function step. Read more in the [docs](https://docs.knock.app/designing-workflows/batch-function).|
|*anyOf*|[WorkflowFetchStep](#schemaworkflowfetchstep)|false|none|A fetch function step. Retrieves data from an external source and merges it into the workflow's `data` scope for use in later steps. Read more in the [docs](https://docs.knock.app/designing-workflows/fetch-function).|
|*anyOf*|[WorkflowUpdateDataStep](#schemaworkflowupdatedatastep)|false|none|An update data function step. Merges data into the workflow's `data` scope for use in subsequent steps.|
|*anyOf*|[WorkflowUpdateObjectStep](#schemaworkflowupdateobjectstep)|false|none|An update object step. Updates properties of a specific object referenced in the workflow.|
|*anyOf*|[WorkflowUpdateTenantStep](#schemaworkflowupdatetenantstep)|false|none|An update tenant step. Updates properties of a specific tenant referenced in the workflow.|
|*anyOf*|[WorkflowUpdateUserStep](#schemaworkflowupdateuserstep)|false|none|An update user step. Updates properties of a specific user referenced in the workflow.|
|*anyOf*|[WorkflowThrottleStep](#schemaworkflowthrottlestep)|false|none|A throttle function step. Read more in the [docs](https://docs.knock.app/designing-workflows/throttle-function).|
|*anyOf*|[WorkflowBranchStep](#schemaworkflowbranchstep)|false|none|A branch function step. Read more in the [docs](https://docs.knock.app/designing-workflows/branch-function).|
|*anyOf*|[WorkflowRandomCohortStep](#schemaworkflowrandomcohortstep)|false|none|An experiment step. Deterministically assigns recipients to percentage-based cohorts for A/B testing and experimentation.|
|*anyOf*|[WorkflowTriggerWorkflowStep](#schemaworkflowtriggerworkflowstep)|false|none|A workflow trigger function step. Read more in the [docs](https://docs.knock.app/designing-workflows/trigger-workflow-function).|

<h2 id="tocS_WorkflowUpdateUserStep">WorkflowUpdateUserStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdateuserstep"></a>
<a id="schema_WorkflowUpdateUserStep"></a>
<a id="tocSworkflowupdateuserstep"></a>
<a id="tocsworkflowupdateuserstep"></a>

```json
{
  "description": "Update user step description.",
  "name": "Update user",
  "ref": "update_user_1",
  "settings": {
    "recipient_gid": "gid://Object/$users/user-123",
    "recipient_mode": "reference",
    "update_properties": "{\"name\": \"Updated User\"}"
  },
  "type": "update_user"
}
```

An update user step. Updates properties of a specific user referenced in the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the update user step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_user|

<h2 id="tocS_GuideStep">GuideStep</h2>
<!-- backwards compatibility -->
<a id="schemaguidestep"></a>
<a id="schema_GuideStep"></a>
<a id="tocSguidestep"></a>
<a id="tocsguidestep"></a>

```json
{
  "name": "Welcome to the App",
  "ref": "welcome-step",
  "schema_key": "tooltip",
  "schema_semver": "1.0.0",
  "schema_variant_key": "default",
  "values": {
    "text_field": "value"
  }
}
```

A step in a guide that corresponds to a piece of UI and its content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A name for the step.|
|ref|string|true|none|The unique reference string for the step. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|schema_key|string|true|none|The key of the template schema to use for this step.|
|schema_semver|string|true|none|The semantic version of the template schema to use.|
|schema_variant_key|string|true|none|The key of the template schema variant to use.|
|values|object|false|none|A map of values that make up the step's content. Each value must conform to its respective template schema field settings.|

<h2 id="tocS_PreviewPartialResponse">PreviewPartialResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewpartialresponse"></a>
<a id="schema_PreviewPartialResponse"></a>
<a id="tocSpreviewpartialresponse"></a>
<a id="tocspreviewpartialresponse"></a>

```json
{
  "content": "<p>Hello, Jane!</p>",
  "result": "success",
  "type": "html"
}
```

A response to a partial preview request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|The rendered partial content. Present when result is `success`.|
|errors|[object]|false|none|A list of errors encountered during rendering. Present when result is `error`.|
|result|string|true|none|The result of the preview.|
|type|string|true|none|The partial type that was rendered.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|success|
|result|error|
|type|html|
|type|text|
|type|json|
|type|markdown|

<h2 id="tocS_ItemSchema">ItemSchema</h2>
<!-- backwards compatibility -->
<a id="schemaitemschema"></a>
<a id="schema_ItemSchema"></a>
<a id="tocSitemschema"></a>
<a id="tocsitemschema"></a>

```json
{
  "item_id": "accounts",
  "item_type": "object",
  "properties": [
    {
      "description": "The user's current billing plan.",
      "item_type": null,
      "key": "plan",
      "preview_text": "Enterprise",
      "type": "string",
      "visible": true
    }
  ]
}
```

A managed schema configuration for users, tenants, or objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_id|string \| null|false|none|The object collection key. Only present for object schemas.|
|item_type|string|true|none|The item type the schema applies to.|
|properties|[[ItemSchemaProperty](#schemaitemschemaproperty)]|true|none|The managed properties for the schema.|

#### Enumerated Values

|Property|Value|
|---|---|
|item_type|user|
|item_type|tenant|
|item_type|object|

<h2 id="tocS_PaginatedWarehouseSyncRunResponse">PaginatedWarehouseSyncRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwarehousesyncrunresponse"></a>
<a id="schema_PaginatedWarehouseSyncRunResponse"></a>
<a id="tocSpaginatedwarehousesyncrunresponse"></a>
<a id="tocspaginatedwarehousesyncrunresponse"></a>

```json
{
  "entries": [
    {
      "ended_at": "2026-11-01T12:02:30Z",
      "error": null,
      "id": "4b8e9a52-1c7d-4f0e-8a3b-6d2f5e9c1b07",
      "load_id": "9d3c2b1a-7e6f-4a5b-8c9d-0e1f2a3b4c5d",
      "records_errored": 0,
      "records_processed": 1200,
      "rows_applied": 1200,
      "rows_failed": 0,
      "started_at": "2026-11-01T12:00:05Z",
      "status": "completed",
      "submitted_at": "2026-11-01T12:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of WarehouseSyncRun. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[WarehouseSyncRun](#schemawarehousesyncrun)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_BroadcastSendRequest">BroadcastSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastsendrequest"></a>
<a id="schema_BroadcastSendRequest"></a>
<a id="tocSbroadcastsendrequest"></a>
<a id="tocsbroadcastsendrequest"></a>

```json
{
  "send_at": "2024-03-20T10:00:00Z"
}
```

A request to send or schedule a broadcast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|send_at|string(date-time)|false|none|When to send the broadcast. If provided, the broadcast will be scheduled to send at this time. Must be in ISO 8601 UTC format. If not provided, the broadcast will be sent immediately.|

<h2 id="tocS_WorkflowBatchStep">WorkflowBatchStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowbatchstep"></a>
<a id="schema_WorkflowBatchStep"></a>
<a id="tocSworkflowbatchstep"></a>
<a id="tocsworkflowbatchstep"></a>

```json
{
  "description": "Batch step description",
  "name": "Batch step",
  "ref": "batch_step",
  "settings": {
    "batch_key": "data.project_id",
    "batch_window": {
      "unit": "minutes",
      "value": 10
    }
  },
  "type": "batch"
}
```

A batch function step. Read more in the [docs](https://docs.knock.app/designing-workflows/batch-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the batch step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|batch|

<h2 id="tocS_StaticAudience">StaticAudience</h2>
<!-- backwards compatibility -->
<a id="schemastaticaudience"></a>
<a id="schema_StaticAudience"></a>
<a id="tocSstaticaudience"></a>
<a id="tocsstaticaudience"></a>

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "description": "Users participating in the beta program.",
  "environment": "development",
  "key": "beta-testers",
  "name": "Beta testers",
  "sha": "a1b2c3d4e5f6",
  "type": "static",
  "updated_at": "2024-06-20T14:45:00Z"
}
```

A static audience where members are explicitly added or removed via the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the audience was created.|
|description|string \| null|false|none|A description of the audience.|
|environment|string|true|none|The slug of the environment in which the audience exists.|
|key|string|true|none|The unique key of the audience.|
|name|string|true|none|The name of the audience.|
|sha|string \| null|false|none|The SHA hash of the audience data.|
|type|string|true|none|The type of audience. Always `static` for static audiences.|
|updated_at|string(date-time)|true|none|The timestamp of when the audience was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|static|

<h2 id="tocS_WorkflowPushStep">WorkflowPushStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowpushstep"></a>
<a id="schema_WorkflowPushStep"></a>
<a id="tocSworkflowpushstep"></a>
<a id="tocsworkflowpushstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "apns",
  "channel_overrides": null,
  "channel_type": "push",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "Push channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "settings": {
      "delivery_type": "content",
      "payload_overrides": "{\"name\": \"John\"}"
    },
    "text_body": "Hello, world!",
    "title": "Hello, world!"
  },
  "type": "channel"
}
```

A push step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_overrides|object|false|none|A map of channel overrides for the channel step.|
|channel_type|string|false|none|The type of the channel step. Always `push` for push steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[PushTemplate](#schemapushtemplate)|true|none|A push notification template.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|push|
|type|channel|

<h2 id="tocS_PaginatedWebhookResponse">PaginatedWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwebhookresponse"></a>
<a id="schema_PaginatedWebhookResponse"></a>
<a id="tocSpaginatedwebhookresponse"></a>
<a id="tocspaginatedwebhookresponse"></a>

```json
{
  "entries": [
    {
      "active": true,
      "created_at": "2021-01-01T00:00:00Z",
      "description": "My webhook endpoint",
      "event_types": [
        "message.sent",
        "message.delivered"
      ],
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "updated_at": "2021-01-01T00:00:00Z",
      "url": "https://example.com/webhooks"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Webhook. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Webhook](#schemawebhook)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "color": "#3B82F6",
  "created_at": "2021-01-01T00:00:00Z",
  "description": "Billing-related workflows",
  "name": "billing",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A named tag in a project's resource-tag catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|An optional hex color for the tag (e.g. #3B82F6).|
|created_at|string(date-time)|true|none|The timestamp of when the tag was created.|
|description|string \| null|false|none|An optional description of the tag.|
|name|string|true|none|The unique name of the tag within a project.|
|updated_at|string(date-time)|true|none|The timestamp of when the tag was last updated.|

<h2 id="tocS_WarehouseSyncSettingsRequest">WarehouseSyncSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncsettingsrequest"></a>
<a id="schema_WarehouseSyncSettingsRequest"></a>
<a id="tocSwarehousesyncsettingsrequest"></a>
<a id="tocswarehousesyncsettingsrequest"></a>

```json
{
  "enabled": false,
  "frequency_minutes": 1440
}
```

The sync's schedule settings. They take effect right away and aren't versioned. Fields left out keep their current values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the sync runs on its schedule.|
|frequency_minutes|integer|false|none|How often the sync runs, in minutes.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency_minutes|10|
|frequency_minutes|15|
|frequency_minutes|60|
|frequency_minutes|360|
|frequency_minutes|720|
|frequency_minutes|1440|

<h2 id="tocS_WrappedGuideRequestRequest">WrappedGuideRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedguiderequestrequest"></a>
<a id="schema_WrappedGuideRequestRequest"></a>
<a id="tocSwrappedguiderequestrequest"></a>
<a id="tocswrappedguiderequestrequest"></a>

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "channel_key": "in-app-guide",
    "description": "A guide to help users get started with the application",
    "name": "Getting Started Guide",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    }
  }
}
```

Wraps the GuideRequest request under the guide key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide|[GuideRequest](#schemaguiderequest)|true|none|A request to create or update a guide.|

<h2 id="tocS_PageInfo">PageInfo</h2>
<!-- backwards compatibility -->
<a id="schemapageinfo"></a>
<a id="schema_PageInfo"></a>
<a id="tocSpageinfo"></a>
<a id="tocspageinfo"></a>

```json
{
  "after": null,
  "before": null,
  "page_size": 25
}
```

The information about a paginated result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string \| null|false|none|The cursor to fetch entries after. Will only be present if there are more entries to fetch.|
|before|string \| null|false|none|The cursor to fetch entries before. Will only be present if there are more entries to fetch before the current page.|
|page_size|integer|true|none|The number of entries to fetch per-page.|

<h2 id="tocS_RequestTemplate">RequestTemplate</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplate"></a>
<a id="schema_RequestTemplate"></a>
<a id="tocSrequesttemplate"></a>
<a id="tocsrequesttemplate"></a>

```json
{
  "body": null,
  "headers": [
    {
      "key": "X-API-Key",
      "value": "1234567890"
    }
  ],
  "method": "get",
  "query_params": [
    {
      "key": "key",
      "value": "value"
    }
  ],
  "url": "https://example.com"
}
```

A request template for a fetch function step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string \| null|false|none|The body of the request. Only used for POST or PUT requests.|
|headers|object|false|none|The headers of the request. Can be a template string or a list of key-value pairs.|
|method|string|true|none|The HTTP method of the request.|
|query_params|object|false|none|The query params of the request. Can be a template string or a list of key-value pairs.|
|url|string|true|none|The URL of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|get|
|method|post|
|method|put|
|method|delete|
|method|patch|

<h2 id="tocS_AuditLogActor">AuditLogActor</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogactor"></a>
<a id="schema_AuditLogActor"></a>
<a id="tocSauditlogactor"></a>
<a id="tocsauditlogactor"></a>

```json
{
  "email": "ada@example.com",
  "id": "5c0e1a2b-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
  "name": "Ada Lovelace"
}
```

The Knock user who performed the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the user.|
|id|string(uuid)|true|none|The unique identifier for the user.|
|name|string \| null|false|none|The name of the user.|

<h2 id="tocS_Branch">Branch</h2>
<!-- backwards compatibility -->
<a id="schemabranch"></a>
<a id="schema_Branch"></a>
<a id="tocSbranch"></a>
<a id="tocsbranch"></a>

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "last_commit_at": "2022-10-31T19:59:03Z",
  "slug": "feature-branch",
  "updated_at": "2022-10-31T19:59:03Z"
}
```

A branch object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the branch was created.|
|deleted_at|string(date-time) \| null|false|none|The timestamp of when the branch was deleted.|
|last_commit_at|string(date-time) \| null|false|none|The timestamp of the most-recent commit in the branch.|
|slug|string|true|none|A unique slug for the branch. Cannot exceed 255 characters.|
|updated_at|string(date-time)|true|none|The timestamp of when the branch was last updated.|

<h2 id="tocS_WrappedBroadcastRequestRequest">WrappedBroadcastRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedbroadcastrequestrequest"></a>
<a id="schema_WrappedBroadcastRequestRequest"></a>
<a id="tocSwrappedbroadcastrequestrequest"></a>
<a id="tocswrappedbroadcastrequestrequest"></a>

```json
{
  "broadcast": {
    "categories": [
      "announcement"
    ],
    "description": "A broadcast to all users",
    "name": "My Broadcast",
    "settings": {
      "is_commercial": true,
      "override_preferences": false
    },
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "in-review"
    ],
    "target_audience_key": "all-users"
  }
}
```

Wraps the BroadcastRequest request under the broadcast key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast|[BroadcastRequest](#schemabroadcastrequest)|true|none|A broadcast request for upserting a broadcast.|

<h2 id="tocS_EmailMarkdownBlock">EmailMarkdownBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemailmarkdownblock"></a>
<a id="schema_EmailMarkdownBlock"></a>
<a id="tocSemailmarkdownblock"></a>
<a id="tocsemailmarkdownblock"></a>

```json
{
  "content": "# Hello, world!",
  "layout_attrs": {
    "padding_bottom": 8,
    "padding_left": 4,
    "padding_right": 4,
    "padding_top": 8
  },
  "type": "markdown"
}
```

A markdown block in an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The markdown content of the block. Supports Liquid templating with variables like `{{ recipient.name }}`, `{{ actor.name }}`, `{{ vars.app_name }}`, `{{ data.custom_field }}`, and `{{ tenant.name }}`. See the [template variables reference](https://docs.knock.app/designing-workflows/template-editor/variables) for available variables.|
|id|string(uuid)|false|none|The ID of the block.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|type|string|true|none|The type of the block.|
|variant|string|false|none|The flavor of markdown to use for the block.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|markdown|
|variant|default|

<h2 id="tocS_GuideActivationUrlPattern">GuideActivationUrlPattern</h2>
<!-- backwards compatibility -->
<a id="schemaguideactivationurlpattern"></a>
<a id="schema_GuideActivationUrlPattern"></a>
<a id="tocSguideactivationurlpattern"></a>
<a id="tocsguideactivationurlpattern"></a>

```json
{
  "directive": "allow",
  "pathname": "/dashboard/*",
  "search": "tab=settings"
}
```

A rule that controls when a guide should be shown based on the user's location in the application. At least one of `pathname` or `search` must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directive|string|true|none|Whether to allow or block the guide at the specified location.|
|pathname|string|false|none|The URL pathname pattern to match against. Must be a valid URI path.|
|search|string|false|none|The URL query string pattern to match against (without the leading '?'). Supports URLPattern API syntax.|

#### Enumerated Values

|Property|Value|
|---|---|
|directive|allow|
|directive|block|

<h2 id="tocS_SourceProviderResponse">SourceProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourceproviderresponse"></a>
<a id="schema_SourceProviderResponse"></a>
<a id="tocSsourceproviderresponse"></a>
<a id="tocssourceproviderresponse"></a>

```json
{
  "default_settings": {
    "enforce_verification": false,
    "event_type_path": "body.event",
    "idempotency_key_path": "body.messageId",
    "timestamp_path": "body.timestamp"
  },
  "key": "segment",
  "provider": {
    "categories": [
      "Analytics"
    ],
    "description": "Receive customer events from Segment.",
    "name": "Segment",
    "webhook_docs_url": "https://segment.com/docs/connections/destinations/catalog/webhooks",
    "website_url": "https://segment.com"
  },
  "version": "1.0.0"
}
```

A source provider available for creating sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_action_mappings|[object]|false|none|Default event action mappings for the provider. Only present when `include` contains `default_action_mappings`.|
|default_settings|object|true|none|Default source settings for this provider.|
|example_payloads|object \| null|false|none|Example payloads keyed by event type. Only present when `include` contains `example_payloads`.|
|key|string|true|none|Provider key.|
|provider|object|true|none|Provider display metadata.|
|static_fields|object|false|none|JSON Schema fields needed to configure the source. Only present when `include` contains `static_fields`.|
|version|string|true|none|Provider version.|

<h2 id="tocS_MessageTypeUrlField">MessageTypeUrlField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypeurlfield"></a>
<a id="schema_MessageTypeUrlField"></a>
<a id="tocSmessagetypeurlfield"></a>
<a id="tocsmessagetypeurlfield"></a>

```json
{
  "key": "url_field",
  "label": "URL Field",
  "settings": {
    "description": "A description of the URL field",
    "placeholder": "A placeholder for the URL field",
    "required": true
  },
  "type": "url"
}
```

A URL field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the url field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|url|

<h2 id="tocS_RequestTemplateHeadersArray">RequestTemplateHeadersArray</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplateheadersarray"></a>
<a id="schema_RequestTemplateHeadersArray"></a>
<a id="tocSrequesttemplateheadersarray"></a>
<a id="tocsrequesttemplateheadersarray"></a>

```json
[
  {
    "key": "X-API-Key",
    "value": "1234567890"
  }
]
```

A list of key-value pairs for the request headers. Each object should contain key and value fields with string values.

<h2 id="tocS_PaginatedTranslationResponse">PaginatedTranslationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedtranslationresponse"></a>
<a id="schema_PaginatedTranslationResponse"></a>
<a id="tocSpaginatedtranslationresponse"></a>
<a id="tocspaginatedtranslationresponse"></a>

```json
{
  "entries": [
    {
      "content": "{\"hello\":\"Hello, world!\"}",
      "format": "json",
      "inserted_at": "2021-01-01T00:00:00Z",
      "locale_code": "en",
      "namespace": "my_app",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Translation. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Translation](#schematranslation)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_PaginatedBranchResponse">PaginatedBranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedbranchresponse"></a>
<a id="schema_PaginatedBranchResponse"></a>
<a id="tocSpaginatedbranchresponse"></a>
<a id="tocspaginatedbranchresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2022-10-31T19:59:03Z",
      "deleted_at": null,
      "last_commit_at": "2022-10-31T19:59:03Z",
      "slug": "feature-branch",
      "updated_at": "2022-10-31T19:59:03Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Branch. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Branch](#schemabranch)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_SourceRehearseRequest">SourceRehearseRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourcerehearserequest"></a>
<a id="schema_SourceRehearseRequest"></a>
<a id="tocSsourcerehearserequest"></a>
<a id="tocssourcerehearserequest"></a>

```json
{
  "payload": {
    "body": {
      "event": "order.created",
      "order_id": "ord_123"
    },
    "headers": {
      "content-type": "application/json"
    }
  }
}
```

Request body for rehearsing a source event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|An arbitrary payload to send through the source's parse, preprocess, and mapping pipeline.|

<h2 id="tocS_PreferenceCenterRequest">PreferenceCenterRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecenterrequest"></a>
<a id="schema_PreferenceCenterRequest"></a>
<a id="tocSpreferencecenterrequest"></a>
<a id="tocspreferencecenterrequest"></a>

```json
{
  "config": {
    "body": "Select which communications you’d like to receive from us.",
    "rows": [
      {
        "description": "Receive promotional and non-essential notifications.",
        "name": "Commercial messages",
        "type": "commercial_subscribed"
      }
    ],
    "show_account_name": true,
    "title": "Manage preferences"
  },
  "enabled": true
}
```

A preference center configuration payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|The preference center configuration document.|
|enabled|boolean|false|none|Whether the preference center is enabled for recipients.|

<h2 id="tocS_WrappedSourceRequestRequest">WrappedSourceRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedsourcerequestrequest"></a>
<a id="schema_WrappedSourceRequestRequest"></a>
<a id="tocSwrappedsourcerequestrequest"></a>
<a id="tocswrappedsourcerequestrequest"></a>

```json
{
  "source": {
    "custom_image_url": null,
    "description": "Receives events over HTTP.",
    "environment_settings": {
      "development": {
        "mappings": [],
        "settings": {
          "enforce_verification": false,
          "event_type_path": "body.event",
          "idempotency_key_path": "body.messageId",
          "preprocess_script": {
            "language": "javascript",
            "source": "return event;"
          },
          "timestamp_path": "body.timestamp"
        }
      }
    },
    "name": "Universal HTTP Source"
  }
}
```

Wraps the SourceRequest request under the source key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[SourceRequest](#schemasourcerequest)|true|none|A source request for setting a source and its environment-specific configuration.|

<h2 id="tocS_SourceRequest">SourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourcerequest"></a>
<a id="schema_SourceRequest"></a>
<a id="tocSsourcerequest"></a>
<a id="tocssourcerequest"></a>

```json
{
  "custom_image_url": null,
  "description": "Receives events over HTTP.",
  "environment_settings": {
    "development": {
      "mappings": [],
      "settings": {
        "enforce_verification": false,
        "event_type_path": "body.event",
        "idempotency_key_path": "body.messageId",
        "preprocess_script": {
          "language": "javascript",
          "source": "return event;"
        },
        "timestamp_path": "body.timestamp"
      }
    }
  },
  "name": "Universal HTTP Source"
}
```

A source request for setting a source and its environment-specific configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_image_url|string \| null|false|none|An optional URL for a custom image representing the source.|
|description|string \| null|false|none|An optional description of the source.|
|environment_settings|object|false|none|Per-environment settings keyed by environment slug.|
|name|string|true|none|The human-readable name of the source.|
|preconfigured_provider|string|false|none|When creating a source, bootstraps configuration from a preconfigured provider template. Ignored when updating an existing source.|

<h2 id="tocS_WrappedAudienceRequestRequest">WrappedAudienceRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedaudiencerequestrequest"></a>
<a id="schema_WrappedAudienceRequestRequest"></a>
<a id="tocSwrappedaudiencerequestrequest"></a>
<a id="tocswrappedaudiencerequestrequest"></a>

```json
{
  "audience": {
    "description": "Users on the premium plan",
    "name": "Premium users",
    "segments": [
      {
        "conditions": [
          {
            "argument": "premium",
            "operator": "equal_to",
            "property": "recipient.plan"
          }
        ]
      }
    ],
    "type": "dynamic"
  }
}
```

Wraps the AudienceRequest request under the audience key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[AudienceRequest](#schemaaudiencerequest)|true|none|An audience object with attributes to create or update an audience. Use `type: static` for audiences with explicitly managed members, or `type: dynamic` for audiences with segment-based membership.|

<h2 id="tocS_BroadcastRunResponse">BroadcastRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastrunresponse"></a>
<a id="schema_BroadcastRunResponse"></a>
<a id="tocSbroadcastrunresponse"></a>
<a id="tocsbroadcastrunresponse"></a>

```json
{
  "broadcast_run_id": "123e4567-e89b-12d3-a456-426614174000",
  "request_id": "req_123"
}
```

A response to a broadcast run request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcast_run_id|string(uuid)|true|none|The ID of the broadcast run.|
|request_id|string|true|none|The ID of the run request.|

<h2 id="tocS_EmailVisualBlocks">EmailVisualBlocks</h2>
<!-- backwards compatibility -->
<a id="schemaemailvisualblocks"></a>
<a id="schema_EmailVisualBlocks"></a>
<a id="tocSemailvisualblocks"></a>
<a id="tocsemailvisualblocks"></a>

```json
[
  {
    "content": "# Hello, {{ recipient.name }}!\n\nWelcome to **{{ vars.app_name }}**. [Get started here]({{ data.sign_in_url }}).",
    "type": "markdown"
  },
  {
    "content": "<p>Hello, {{ recipient.name }}!</p><p>Welcome to <strong>{{ vars.app_name }}</strong>. <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
    "type": "html"
  },
  {
    "type": "divider"
  },
  {
    "attrs": {
      "foo": "bar"
    },
    "key": "my-partial",
    "name": "My partial",
    "type": "partial"
  },
  {
    "type": "image",
    "url": "https://example.com/image.png"
  },
  {
    "buttons": [
      {
        "action": "https://example.com/button-action",
        "label": "Click me",
        "type": "button",
        "variant": "solid"
      }
    ],
    "type": "button_set"
  }
]
```

The visual blocks that make up the email template.

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "archived_at": null,
  "created_at": "2021-01-01T00:00:00Z",
  "custom_icon_url": null,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "key": "my-sendgrid-channel",
  "name": "My Sendgrid Channel",
  "provider": "sendgrid",
  "type": "email",
  "updated_at": "2021-01-01T00:00:00Z",
  "visible_in": [
    "workflow",
    "broadcast"
  ]
}
```

A configured channel, which is a way to route messages to a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the channel was deleted.|
|created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|custom_icon_url|string \| null|false|none|Optional URL to a custom icon for the channel. Only used for display purposes in the dashboard.|
|description|string \| null|false|none|Optional description of the channel's purpose or usage.|
|environment_settings|object \| null|false|none|Per-environment settings for this channel, keyed by environment slug (e.g., 'development', 'production'). Only included when requested via the `include` parameter or when retrieving a single channel.|
|id|string|true|none|The unique identifier for the channel.|
|key|string|true|none|Unique identifier for the channel within a project (immutable once created).|
|name|string|true|none|The human-readable name of the channel.|
|provider|string|true|none|The ID of the provider that this channel uses to deliver messages. Learn more about the providers available [in our documentation](https://docs.knock.app/integrations/overview).|
|type|string|true|none|The type of channel, determining what kind of messages it can send.|
|updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|visible_in|[string]|false|none|The resources where this channel is visible as a step destination (e.g. workflow, broadcast).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|
|type|in_app|
|type|in_app_feed|
|type|in_app_guide|
|type|sms|
|type|push|
|type|chat|
|type|http|
|visible_in|workflow|
|visible_in|broadcast|

<h2 id="tocS_GuideActivationParams">GuideActivationParams</h2>
<!-- backwards compatibility -->
<a id="schemaguideactivationparams"></a>
<a id="schema_GuideActivationParams"></a>
<a id="tocSguideactivationparams"></a>
<a id="tocsguideactivationparams"></a>

```json
{
  "active": true
}
```

A request to activate or schedule the activation of a guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A request to activate or deactivate a guide.|
|status|boolean|true|none|Whether to activate or deactivate the guide.|
|*oneOf*|object|false|none|A request to schedule the activation of a guide. At least one of from or until must be provided.|
|from|string(date-time)|false|none|When to activate the guide. If provided, the guide will be scheduled to activate at this time. Must be in ISO 8601 UTC format.|
|until|string(date-time)|false|none|When to deactivate the guide. If provided, the guide will be scheduled to deactivate at this time. Must be in ISO 8601 UTC format.|

<h2 id="tocS_PromoteGroup">PromoteGroup</h2>
<!-- backwards compatibility -->
<a id="schemapromotegroup"></a>
<a id="schema_PromoteGroup"></a>
<a id="tocSpromotegroup"></a>
<a id="tocspromotegroup"></a>

```json
{
  "actor": {
    "email": "john.doe@example.com",
    "name": "John Doe"
  },
  "commit_count": 3,
  "created_at": "2021-01-01T00:00:00Z",
  "id": "6f1b1c3e-3c1f-4b1d-8f0e-5f6d9d6a2c11",
  "source": "development",
  "source_type": "environment",
  "to_environment": "production"
}
```

A summary of a promote. Every commit copied into the destination environment by the same promote shares the group's ID, which you can use to list them with the `promote_group_id` filter on the list commits endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object \| null|false|none|The user who performed the promote.|
|commit_count|integer|true|none|The number of commits copied into the destination environment.|
|created_at|string(date-time)|true|none|The timestamp of when the promote happened.|
|id|string(uuid)|true|none|The unique identifier for the promote group.|
|source|string|true|none|The slug of the environment or branch the commits were promoted from.|
|source_type|string|true|none|Whether the source is an environment or a branch.|
|to_environment|string|true|none|The slug of the environment the commits were promoted to.|

#### Enumerated Values

|Property|Value|
|---|---|
|source_type|environment|
|source_type|branch|

<h2 id="tocS_PreviewPartialRequest">PreviewPartialRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreviewpartialrequest"></a>
<a id="schema_PreviewPartialRequest"></a>
<a id="tocSpreviewpartialrequest"></a>
<a id="tocspreviewpartialrequest"></a>

```json
{
  "data": {
    "name": "Jane"
  },
  "partial": {
    "content": "<p>Hello, {{ name }}!</p>",
    "name": "My Partial",
    "type": "html"
  }
}
```

A request to preview a partial, without requiring a partial to be persisted within Knock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|The data to pass to the partial when rendering. Top-level keys are exposed as variables in the partial template.|
|layout|object \| null|false|none|Email layout configuration. Only applicable for `html` partials. When omitted, the rendered partial is returned unwrapped.|
|partial|[PartialRequest](#schemapartialrequest)|true|none|A partial object with attributes to update or create a partial.|

<h2 id="tocS_WrappedWorkflowRequestRequest">WrappedWorkflowRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedworkflowrequestrequest"></a>
<a id="schema_WrappedWorkflowRequestRequest"></a>
<a id="tocSwrappedworkflowrequestrequest"></a>
<a id="tocswrappedworkflowrequestrequest"></a>

```json
{
  "workflow": {
    "name": "My Workflow",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "name": "Channel 1",
        "ref": "channel_1",
        "template": {
          "action_url": "{{ vars.app_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**"
        },
        "type": "channel"
      }
    ],
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ]
  }
}
```

Wraps the WorkflowRequest request under the workflow key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[WorkflowRequest](#schemaworkflowrequest)|true|none|A workflow request for upserting a workflow.|

<h2 id="tocS_ConditionGroup">ConditionGroup</h2>
<!-- backwards compatibility -->
<a id="schemaconditiongroup"></a>
<a id="schema_ConditionGroup"></a>
<a id="tocSconditiongroup"></a>
<a id="tocsconditiongroup"></a>

```json
{
  "all": [
    {
      "argument": "some_property",
      "operator": "equal_to",
      "variable": "recipient.property"
    }
  ]
}
```

A group of conditions to be evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ConditionGroupAllMatch](#schemaconditiongroupallmatch)|false|none|A group of conditions that must all be met.|
|*anyOf*|[ConditionGroupAnyMatch](#schemaconditiongroupanymatch)|false|none|A group of conditions that any must be met. Can contain nested alls.|

<h2 id="tocS_ArchiveReusableRequestResponse">ArchiveReusableRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchivereusablerequestresponse"></a>
<a id="schema_ArchiveReusableRequestResponse"></a>
<a id="tocSarchivereusablerequestresponse"></a>
<a id="tocsarchivereusablerequestresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving a reusable request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<h2 id="tocS_TagRequest">TagRequest</h2>
<!-- backwards compatibility -->
<a id="schematagrequest"></a>
<a id="schema_TagRequest"></a>
<a id="tocStagrequest"></a>
<a id="tocstagrequest"></a>

```json
{
  "color": "#3B82F6",
  "description": "Billing-related workflows"
}
```

A request to create or update a tag. The tag name is taken from the path. On conflict, omitted description and color fields are set to null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|An optional hex color for the tag (e.g. #3B82F6).|
|description|string \| null|false|none|An optional description of the tag.|

<h2 id="tocS_WorkflowWebhookStep">WorkflowWebhookStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwebhookstep"></a>
<a id="schema_WorkflowWebhookStep"></a>
<a id="tocSworkflowwebhookstep"></a>
<a id="tocsworkflowwebhookstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "pagerduty",
  "channel_type": "http",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "Webhook channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "body": null,
    "headers": [
      {
        "key": "X-API-Key",
        "value": "1234567890"
      }
    ],
    "method": "get",
    "query_params": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "url": "https://example.com"
  },
  "type": "channel"
}
```

A webhook step within a workflow to send an HTTP request to a generic channel. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_type|string|false|none|The type of the channel step. Always `http` for webhook steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[WebhookTemplate](#schemawebhooktemplate)|true|none|A webhook template. By default, a webhook step will use the request settings you configured in your webhook channel. You can override this as you see fit on a per-step basis.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|http|
|type|channel|

<h2 id="tocS_MessageTypeImageField">MessageTypeImageField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypeimagefield"></a>
<a id="schema_MessageTypeImageField"></a>
<a id="tocSmessagetypeimagefield"></a>
<a id="tocsmessagetypeimagefield"></a>

```json
{
  "action": {
    "key": "action",
    "label": "Image Action",
    "settings": {
      "description": "A link to open when the paywall image is clicked",
      "placeholder": "A placeholder for the image action",
      "required": true
    },
    "type": "text"
  },
  "alt": {
    "key": "alt",
    "label": "Alt Text",
    "settings": {
      "description": "A description of the paywall image",
      "placeholder": "A placeholder for the alt text",
      "required": true
    },
    "type": "text"
  },
  "key": "image_field",
  "label": "Paywall Image",
  "settings": {
    "description": "An image to display in the paywall",
    "required": true
  },
  "type": "image",
  "url": {
    "key": "url",
    "label": "Image URL",
    "settings": {
      "description": "The URL of the paywall image",
      "placeholder": "A placeholder for the image URL",
      "required": true
    },
    "type": "url"
  }
}
```

An image field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[MessageTypeTextField](#schemamessagetypetextfield)|true|none|A text field used in a message type.|
|alt|[MessageTypeTextField](#schemamessagetypetextfield)|true|none|A text field used in a message type.|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the image field.|
|type|string|true|none|The type of the field.|
|url|[MessageTypeUrlField](#schemamessagetypeurlfield)|true|none|A URL field used in a message type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_SmsTemplate">SmsTemplate</h2>
<!-- backwards compatibility -->
<a id="schemasmstemplate"></a>
<a id="schema_SmsTemplate"></a>
<a id="tocSsmstemplate"></a>
<a id="tocssmstemplate"></a>

```json
{
  "settings": {
    "payload_overrides": "{\"name\": \"John\"}",
    "to_number": "+1234567890"
  },
  "text_body": "Hello, world!"
}
```

An SMS template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|object|false|none|The settings for the SMS template. Can be omitted.|
|text_body|string|true|none|The message of the SMS.|

<h2 id="tocS_SourceLog">SourceLog</h2>
<!-- backwards compatibility -->
<a id="schemasourcelog"></a>
<a id="schema_SourceLog"></a>
<a id="tocSsourcelog"></a>
<a id="tocssourcelog"></a>

```json
{
  "data": {
    "invoice_id": "inv_123"
  },
  "event": "invoice.created",
  "id": "log_123",
  "inserted_at": "2024-01-15T12:00:00Z",
  "preprocess_output": null,
  "source": null,
  "verification_status": "enforced:verified"
}
```

A log entry for an event received by a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[SourceLogAction](#schemasourcelogaction)]|false|none|The actions executed after receiving the source event. Only present when `include` contains `actions`.|
|data|object \| null|false|none|The full event data sent from the source. For legacy sources, this is the properties or traits object.|
|event|string|true|none|The decoded source event name.|
|id|string|true|none|The source log ID.|
|inserted_at|string(date-time) \| null|false|none|The timestamp of when the source log was created.|
|preprocess_output|object \| null|false|none|The output returned by the preprocess script.|
|source|string \| null|false|none|Indicates the origin of the log; if the log is a product of a test event. This is typically null for regular source events received from the data source.|
|verification_status|string \| null|false|none|The verification status for the received event.|

<h2 id="tocS_WrappedWarehouseSyncResponse">WrappedWarehouseSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedwarehousesyncresponse"></a>
<a id="schema_WrappedWarehouseSyncResponse"></a>
<a id="tocSwrappedwarehousesyncresponse"></a>
<a id="tocswrappedwarehousesyncresponse"></a>

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "created_at": "2026-10-01T12:00:00Z",
    "description": "Syncs users from the analytics warehouse",
    "enabled": true,
    "environment": "development",
    "frequency_minutes": 60,
    "has_unpublished_changes": false,
    "key": "users",
    "last_failure": null,
    "last_published_at": "2026-11-01T12:00:00Z",
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      },
      {
        "on_null": "preserve",
        "source_column": "name",
        "target_field": "name"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "publish_error": null,
    "sha": "abc123def456",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "status": "live",
    "target": null,
    "target_type": "user",
    "updated_at": "2026-11-01T12:00:00Z",
    "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
    "warehouse_key": "analytics"
  }
}
```

Wraps the WarehouseSync response under the `warehouse_sync` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSync](#schemawarehousesync)|true|none|A warehouse sync reads rows from a warehouse on a schedule and writes them to Knock as users, tenants, objects, audience members, or subscriptions.|

<h2 id="tocS_EmailButtonSetBlockButton">EmailButtonSetBlockButton</h2>
<!-- backwards compatibility -->
<a id="schemaemailbuttonsetblockbutton"></a>
<a id="schema_EmailButtonSetBlockButton"></a>
<a id="tocSemailbuttonsetblockbutton"></a>
<a id="tocsemailbuttonsetblockbutton"></a>

```json
{
  "action": "https://example.com/button-action",
  "label": "Click me",
  "size_attrs": {
    "is_fullwidth": false,
    "size": "sm"
  },
  "style_attrs": {
    "background_color": "#000000",
    "border_color": "#000000",
    "border_radius": 6,
    "border_width": 1,
    "text_color": "#FFFFFF"
  },
  "variant": "solid"
}
```

A button in a button set block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action of the button.|
|label|string|true|none|The label of the button.|
|size_attrs|object|false|none|The size attributes of the button.|
|style_attrs|object|false|none|The style attributes of the button.|
|variant|string|true|none|The variant of the button.|

#### Enumerated Values

|Property|Value|
|---|---|
|variant|solid|
|variant|outline|

<h2 id="tocS_ArchiveAssetResponse">ArchiveAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveassetresponse"></a>
<a id="schema_ArchiveAssetResponse"></a>
<a id="tocSarchiveassetresponse"></a>
<a id="tocsarchiveassetresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<h2 id="tocS_WorkflowRequest">WorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrequest"></a>
<a id="schema_WorkflowRequest"></a>
<a id="tocSworkflowrequest"></a>
<a id="tocsworkflowrequest"></a>

```json
{
  "name": "My Workflow",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "name": "Channel 1",
      "ref": "channel_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "trigger_events": [
    {
      "audience_action_type": "member_added",
      "audience_key": "pro-users",
      "type": "audience"
    }
  ]
}
```

A workflow request for upserting a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|A list of [categories](https://docs.knock.app/concepts/workflows#workflow-categories) that the workflow belongs to.|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met for the workflow to be executed. (optional).|
|description|string|false|none|An arbitrary string attached to a workflow object. Useful for adding notes about the workflow for internal purposes. Maximum of 280 characters allowed.|
|name|string|true|none|A name for the workflow. Must be at maximum 255 characters in length.|
|settings|object|false|none|A map of workflow settings.|
|steps|[[WorkflowStep](#schemaworkflowstep)]|true|none|A list of workflow step objects in the workflow.|
|tags|[string]|false|none|Use tags to organize resources internally within your account. For example, by team or product area.|
|trigger_data_json_schema|object|false|none|A JSON schema for the expected structure of the workflow trigger's `data` payload (available in templates as `{{ data.field_name }}`). Used to validate trigger requests. Read more in the [docs](https://docs.knock.app/developer-tools/validating-trigger-data).|
|trigger_events|[[WorkflowTriggerEvents](#schemaworkflowtriggerevents)]|false|none|Events that automatically trigger this workflow: audience triggers (a user enters an audience) or source event triggers (an event is received from an integration source). All entries must share the same `type`. Omit or pass an empty list for workflows triggered via the API.|
|trigger_frequency|string|false|none|The frequency at which the workflow should be triggered. One of: `once_per_recipient`, `once_per_recipient_per_tenant`, `every_trigger`. Defaults to `every_trigger`. Read more in [docs](https://docs.knock.app/send-notifications/triggering-workflows/overview#controlling-workflow-trigger-frequency).|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger_frequency|every_trigger|
|trigger_frequency|once_per_recipient|
|trigger_frequency|once_per_recipient_per_tenant|

<h2 id="tocS_WarehouseSyncMapping">WarehouseSyncMapping</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncmapping"></a>
<a id="schema_WarehouseSyncMapping"></a>
<a id="tocSwarehousesyncmapping"></a>
<a id="tocswarehousesyncmapping"></a>

```json
{
  "on_null": "set_null",
  "source_column": "email",
  "target_field": "email"
}
```

Maps one column from the warehouse to one field in Knock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|on_null|string|false|none|What to do when the column is `NULL`. `set_null` clears the Knock field, and `preserve` keeps its current value.|
|source_column|string|true|none|The column to read. Can be a dotted path into an object column, such as `PROPERTIES.plan`.|
|target_field|string|true|none|The Knock field to write the value to.|

#### Enumerated Values

|Property|Value|
|---|---|
|on_null|set_null|
|on_null|preserve|

<h2 id="tocS_BroadcastRequest">BroadcastRequest</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastrequest"></a>
<a id="schema_BroadcastRequest"></a>
<a id="tocSbroadcastrequest"></a>
<a id="tocsbroadcastrequest"></a>

```json
{
  "categories": [
    "announcement"
  ],
  "description": "A broadcast to all users",
  "name": "My Broadcast",
  "settings": {
    "is_commercial": true,
    "override_preferences": false
  },
  "steps": [
    {
      "channel_key": "in-app-feed",
      "name": "Channel 1",
      "ref": "channel_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "tags": [
    "in-review"
  ],
  "target_audience_key": "all-users"
}
```

A broadcast request for upserting a broadcast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|A list of categories that the broadcast belongs to.|
|description|string|false|none|An arbitrary string attached to a broadcast object. Useful for adding notes about the broadcast for internal purposes. Maximum of 280 characters allowed.|
|name|string|true|none|A name for the broadcast. Must be at maximum 255 characters in length.|
|scheduled_at|string(date-time) \| null|false|none|The timestamp of when the broadcast is scheduled to be sent.|
|settings|object|false|none|A map of broadcast settings.|
|steps|[object]|true|none|A list of broadcast step objects in the broadcast. Broadcasts only support channel, branch, and delay steps.|
|tags|[string]|false|none|A list of resource tags attached to the broadcast. Tags must exist in the project's tag catalog.|
|target_audience_key|string|false|none|The key of the audience to target for this broadcast.|

<h2 id="tocS_AudienceCondition">AudienceCondition</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencecondition"></a>
<a id="schema_AudienceCondition"></a>
<a id="tocSaudiencecondition"></a>
<a id="tocsaudiencecondition"></a>

```json
{
  "argument": "premium",
  "operator": "equal_to",
  "property": "recipient.plan"
}
```

A condition to evaluate for audience membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string \| null|false|none|The argument to compare against. Can be a static value (string, number, boolean) or a dynamic path expression.|
|operator|string|true|none|The operator to use when evaluating the condition.|
|property|string|true|none|The property to be evaluated. Properties are dynamic values using path expressions like `recipient.plan` or `recipient.created_at`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal_to|
|operator|not_equal_to|
|operator|greater_than|
|operator|less_than|
|operator|greater_than_or_equal_to|
|operator|less_than_or_equal_to|
|operator|contains|
|operator|not_contains|
|operator|contains_all|
|operator|not_contains_all|
|operator|is_timestamp_before|
|operator|is_timestamp_on_or_after|
|operator|is_timestamp_between|
|operator|is_between|
|operator|empty|
|operator|not_empty|
|operator|exists|
|operator|not_exists|
|operator|is_timestamp|
|operator|is_timestamp_before_now|
|operator|is_timestamp_on_or_after_now|
|operator|is_audience_member|
|operator|is_not_audience_member|

<h2 id="tocS_CloneGoalRequest">CloneGoalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclonegoalrequest"></a>
<a id="schema_CloneGoalRequest"></a>
<a id="tocSclonegoalrequest"></a>
<a id="tocsclonegoalrequest"></a>

```json
{
  "environment": "production",
  "key": "trial-conversion-copy",
  "name": "Trial Conversion Copy"
}
```

The destination key, name, and environment for the cloned goal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|true|none|The destination environment slug.|
|key|string|true|none|The key for the cloned goal.|
|name|string|true|none|The name for the cloned goal.|

<h2 id="tocS_HeadlessAccountClaimRequest">HeadlessAccountClaimRequest</h2>
<!-- backwards compatibility -->
<a id="schemaheadlessaccountclaimrequest"></a>
<a id="schema_HeadlessAccountClaimRequest"></a>
<a id="tocSheadlessaccountclaimrequest"></a>
<a id="tocsheadlessaccountclaimrequest"></a>

```json
{
  "email": "founder@example.com"
}
```

The person an agent wants to hand a headless account to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email of the person who will own the account. Only they can finish the claim.|

<h2 id="tocS_AssetCreateRequest">AssetCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassetcreaterequest"></a>
<a id="schema_AssetCreateRequest"></a>
<a id="tocSassetcreaterequest"></a>
<a id="tocsassetcreaterequest"></a>

```json
{
  "filename": "logo.png",
  "key": "acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png"
}
```

Records a library asset for a key returned by an upload request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|true|none|The display name for this asset.|
|key|string|true|none|The storage key from the upload request. The file must already be uploaded.|

<h2 id="tocS_RequestTemplateQueryParamsArray">RequestTemplateQueryParamsArray</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplatequeryparamsarray"></a>
<a id="schema_RequestTemplateQueryParamsArray"></a>
<a id="tocSrequesttemplatequeryparamsarray"></a>
<a id="tocsrequesttemplatequeryparamsarray"></a>

```json
[
  {
    "key": "key",
    "value": "value"
  }
]
```

A list of key-value pairs for the request query params. Each object should contain key and value fields with string values.

<h2 id="tocS_SourceStatusResponse">SourceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcestatusresponse"></a>
<a id="schema_SourceStatusResponse"></a>
<a id="tocSsourcestatusresponse"></a>
<a id="tocssourcestatusresponse"></a>

```json
{
  "events_count": 42,
  "last_event_received": "2026-05-11T16:00:00Z",
  "mappings_count": 2,
  "mappings_requiring_commit": [
    {
      "action_type": "workflows_trigger",
      "active": true,
      "event_type": "invoice.created",
      "is_deleted": false,
      "resource_key": "invoice-created",
      "status": "updated"
    }
  ]
}
```

Status information for a source in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events_count|integer|true|none|The number of source events received in the last 30 days.|
|last_event_received|string \| null|true|none|The timestamp of the most recently received source event.|
|mappings_count|integer|true|none|The total number of event action mappings for the source environment.|
|mappings_requiring_commit|[object]|true|none|Workflow trigger event action mappings that need a workflow commit before their changes are applied.|

<h2 id="tocS_WorkflowInAppFeedStep">WorkflowInAppFeedStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowinappfeedstep"></a>
<a id="schema_WorkflowInAppFeedStep"></a>
<a id="tocSworkflowinappfeedstep"></a>
<a id="tocsworkflowinappfeedstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "knock-in-app",
  "channel_overrides": null,
  "channel_type": "in_app_feed",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "In-app feed channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "action_buttons": [
      {
        "action": "https://example.com",
        "label": "Button 1"
      }
    ],
    "action_url": "https://example.com",
    "markdown_body": "Hello, world!"
  },
  "type": "channel"
}
```

An in-app feed step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_overrides|object|false|none|A map of channel overrides for the channel step.|
|channel_type|string|false|none|The type of the channel step. Always `in_app_feed` for in-app feed steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[InAppFeedTemplate](#schemainappfeedtemplate)|true|none|An in-app feed template.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|in_app_feed|
|type|channel|

<h2 id="tocS_PreferenceCategory">PreferenceCategory</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecategory"></a>
<a id="schema_PreferenceCategory"></a>
<a id="tocSpreferencecategory"></a>
<a id="tocspreferencecategory"></a>

```json
{
  "created_at": "2021-01-01T00:00:00Z",
  "name": "billing",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A named preference category in a project's catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the preference category was archived.|
|created_at|string(date-time)|true|none|The timestamp of when the preference category was created.|
|name|string|true|none|The unique name of the preference category within a project.|
|updated_at|string(date-time)|true|none|The timestamp of when the preference category was last updated.|

<h2 id="tocS_ReusableRequest">ReusableRequest</h2>
<!-- backwards compatibility -->
<a id="schemareusablerequest"></a>
<a id="schema_ReusableRequest"></a>
<a id="tocSreusablerequest"></a>
<a id="tocsreusablerequest"></a>

```json
{
  "created_at": "2021-01-01T00:00:00Z",
  "description": "Loads a user from the API.",
  "environment": "development",
  "key": "fetch-user",
  "name": "Fetch user",
  "settings": {
    "body": null,
    "headers": [
      {
        "key": "X-API-Key",
        "value": "1234567890"
      }
    ],
    "method": "get",
    "query_params": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "response_path": null,
    "signing_key": null,
    "url": "https://example.com"
  },
  "sha": "abc123",
  "type": "http_fetch",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A reusable HTTP request that workflows can link to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object \| null|false|none|Conditions that must be met before the request runs.|
|created_at|string(date-time)|true|none|The timestamp of when the reusable request was created.|
|description|string \| null|false|none|An internal note about the reusable request.|
|environment|string|true|none|The slug of the environment in which the reusable request exists.|
|key|string|true|none|The unique key for the reusable request. Must be 3 to 255 characters and match ^[a-z0-9_-]+$.|
|name|string \| null|false|none|A name for the reusable request.|
|settings|[ReusableRequestSettings](#schemareusablerequestsettings)|true|none|The HTTP request a reusable request runs.|
|sha|string \| null|false|none|The SHA hash of the reusable request.|
|type|string|true|none|The reusable request type. Only http_fetch is supported.|
|updated_at|string(date-time)|true|none|The timestamp of when the reusable request was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|http_fetch|

<h2 id="tocS_CommitAuthor">CommitAuthor</h2>
<!-- backwards compatibility -->
<a id="schemacommitauthor"></a>
<a id="schema_CommitAuthor"></a>
<a id="tocScommitauthor"></a>
<a id="tocscommitauthor"></a>

```json
{
  "email": "john.doe@example.com",
  "name": "John Doe"
}
```

The author of the commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the commit author.|
|name|string \| null|false|none|The name of the commit author.|

<h2 id="tocS_WrappedWebhookResponse">WrappedWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedwebhookresponse"></a>
<a id="schema_WrappedWebhookResponse"></a>
<a id="tocSwrappedwebhookresponse"></a>
<a id="tocswrappedwebhookresponse"></a>

```json
{
  "webhook": {
    "active": true,
    "created_at": "2021-01-01T00:00:00Z",
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2021-01-01T00:00:00Z",
    "url": "https://example.com/webhooks"
  }
}
```

Wraps the Webhook response under the `webhook` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|[Webhook](#schemawebhook)|true|none|An outbound webhook that receives event notifications.|

<h2 id="tocS_RunWorkflowRequest">RunWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunworkflowrequest"></a>
<a id="schema_RunWorkflowRequest"></a>
<a id="tocSrunworkflowrequest"></a>
<a id="tocsrunworkflowrequest"></a>

```json
{
  "data": {
    "park_id": 1
  },
  "recipients": [
    {
      "email": "jane@example.com",
      "id": "user_1",
      "name": "Jane Doe"
    }
  ]
}
```

A request to run (test) a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|false|none|The actor to reference in the the workflow run.|
|cancellation_key|string \| null|false|none|A key to cancel the workflow run.|
|data|object|false|none|A map of data to be used in the workflow run. The structure should conform to the workflow's `trigger_data_json_schema` if one is defined. Available in templates as `{{ data.field_name }}`. See [trigger data validation docs](https://docs.knock.app/developer-tools/validating-trigger-data).|
|recipients|[[RecipientReference](#schemarecipientreference) \| [InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)]|true|none|A list of recipients to run the workflow for. Supports user IDs, object references, or inline identify user objects (id + optional email/name).|
|step_id|string(uuid) \| null|false|none|When set, runs only this message-sending channel step. Guide steps, legacy in-app steps, and unknown ids are rejected.|
|tenant|string|false|none|The tenant to associate the workflow run with. Must not contain whitespace.|

<h2 id="tocS_ListGoalAttachmentsResponse">ListGoalAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgoalattachmentsresponse"></a>
<a id="schema_ListGoalAttachmentsResponse"></a>
<a id="tocSlistgoalattachmentsresponse"></a>
<a id="tocslistgoalattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "attribution_window_days": 7,
      "goal_key": "trial-conversion",
      "resource_key": "trial-onboarding",
      "resource_type": "workflow"
    }
  ]
}
```

The goal's attachments in the environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[GoalResourceAttachment](#schemagoalresourceattachment)]|true|none|The goal's attachments in the environment.|

<h2 id="tocS_ReusableRequestRequest">ReusableRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemareusablerequestrequest"></a>
<a id="schema_ReusableRequestRequest"></a>
<a id="tocSreusablerequestrequest"></a>
<a id="tocsreusablerequestrequest"></a>

```json
{
  "description": "Loads a user from the API.",
  "name": "Fetch user",
  "settings": {
    "body": null,
    "headers": [
      {
        "key": "X-API-Key",
        "value": "1234567890"
      }
    ],
    "method": "get",
    "query_params": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "response_path": null,
    "signing_key": null,
    "url": "https://example.com"
  },
  "type": "http_fetch"
}
```

A reusable request object with attributes to update or create a reusable request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object \| null|false|none|Conditions that must be met before the request runs.|
|description|string \| null|false|none|An internal note about the reusable request.|
|name|string \| null|false|none|A name for the reusable request.|
|settings|[ReusableRequestSettings](#schemareusablerequestsettings)|true|none|The HTTP request a reusable request runs.|
|type|string|true|none|The reusable request type. Only http_fetch is supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|http_fetch|

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
{
  "archived_at": null,
  "created_at": "2021-01-01T00:00:00Z",
  "deleted_at": null,
  "description": "Email message type",
  "environment": "development",
  "icon_name": "email",
  "key": "email",
  "name": "Email",
  "owner": "user",
  "preview": "<div>Hello, world!</div>",
  "semver": "1.0.0",
  "sha": "1234567890",
  "updated_at": "2021-01-01T00:00:00Z",
  "valid": true,
  "variants": [
    {
      "fields": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "key": "default",
      "name": "Default"
    }
  ]
}
```

A message type is a schema for a message that maps to a UI component or element within your application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the message type was deleted.|
|created_at|string(date-time)|true|none|The timestamp of when the message type was created.|
|deleted_at|string(date-time) \| null|false|none|The timestamp of when the message type was deleted.|
|description|string \| null|false|none|An arbitrary string attached to a message type object. Useful for adding notes about the message type for internal purposes. Maximum of 280 characters allowed.|
|environment|string|true|none|The environment of the message type.|
|icon_name|string|false|none|The icon name of the message type.|
|key|string|true|none|The unique key string for the message type object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the message type. Must be at maximum 255 characters in length.|
|owner|string|true|none|The owner of the message type.|
|preview|string|true|none|An HTML/liquid template for the message type preview.|
|semver|string|true|none|The semantic version of the message type.|
|sha|string|true|none|The SHA hash of the message type.|
|updated_at|string(date-time)|true|none|The timestamp of when the message type was last updated.|
|valid|boolean|true|none|Whether the message type is valid.|
|variants|[[MessageTypeVariant](#schemamessagetypevariant)]|true|none|The variants of the message type.|

#### Enumerated Values

|Property|Value|
|---|---|
|owner|system|
|owner|user|

<h2 id="tocS_BillingSummary">BillingSummary</h2>
<!-- backwards compatibility -->
<a id="schemabillingsummary"></a>
<a id="schema_BillingSummary"></a>
<a id="tocSbillingsummary"></a>
<a id="tocsbillingsummary"></a>

```json
{
  "amount_due": "110.00",
  "credits": [
    {
      "currency": "mnr_credits",
      "effective_at": "2026-01-01T00:00:00.000000Z",
      "expires_at": "2027-01-01T00:00:00.000000Z",
      "id": "crb_year1",
      "name": "Monthly notified recipients",
      "quantity": 10800000,
      "remaining": 6760000,
      "status": "active"
    }
  ],
  "currency": "USD",
  "invoice_id": "UR2cRSkE42n3XWfz",
  "period_end": "2026-09-18T23:59:59.000000Z",
  "period_start": "2026-08-19T00:00:00.000000Z",
  "plan": {
    "display_name": "Starter",
    "id": "starter-june-2023",
    "type": "starter"
  },
  "target_date": "2026-09-19",
  "usage": [
    {
      "amount": "90.00",
      "credits_applied": 0,
      "metric_id": "5LrfGRz9En96R9Hg",
      "name": "Messages Sent",
      "pricing_currency": "USD",
      "quantity": 12500,
      "quantity_type": "usage"
    },
    {
      "amount": "0.00",
      "credits_applied": 0,
      "metric_id": "C4vGey39VY99wxky",
      "name": "Monthly notified recipients - guides",
      "pricing_currency": "USD",
      "quantity": 320,
      "quantity_type": "usage"
    },
    {
      "amount": "20.00",
      "credits_applied": 0,
      "metric_id": "LPQ3cxs8xN6XPigy",
      "name": "Workflow Runs",
      "pricing_currency": "USD",
      "quantity": 48,
      "quantity_type": "usage"
    }
  ]
}
```

A snapshot of the current draft Orb invoice for the account, including plan, per-metric usage, and remaining credit blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_due|string|true|none|The amount due on the draft invoice, as a decimal string.|
|credits|[[BillingCreditBlock](#schemabillingcreditblock)]|true|none|Unexpired Orb credit blocks for custom pricing units on the draft invoice, including scheduled and depleted allotments.|
|currency|string \| null|true|none|The invoice currency code, such as USD.|
|invoice_id|string \| null|true|none|The Orb draft invoice id, if present.|
|period_end|string(date-time) \| null|true|none|The end of the current usage period, hoisted from the first usage line item.|
|period_start|string(date-time) \| null|true|none|The start of the current usage period, hoisted from the first usage line item.|
|plan|object|true|none|The Knock plan currently assigned to the account.|
|target_date|string(date)|true|none|The date the draft invoice is scheduled to be issued.|
|usage|[[BillingUsageRecord](#schemabillingusagerecord)]|true|none|Per-metric usage line items from the draft invoice.|

<h2 id="tocS_PreviewTemplateResponse">PreviewTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewtemplateresponse"></a>
<a id="schema_PreviewTemplateResponse"></a>
<a id="tocSpreviewtemplateresponse"></a>
<a id="tocspreviewtemplateresponse"></a>

```json
{
  "content_type": "email",
  "result": "success",
  "template": {
    "html_body": "<p>Welcome to Acme!</p>",
    "subject": "Hello John",
    "text_body": "Welcome to Acme!"
  }
}
```

A response to a template preview request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|The content type of the preview.|
|errors|[object]|false|none|A list of errors encountered during rendering. Present when result is "error".|
|result|string|true|none|The result of the preview.|
|template|object|false|none|The rendered template, ready to be previewed.|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|email|
|content_type|in_app_feed|
|content_type|push|
|content_type|chat|
|content_type|sms|
|result|success|
|result|error|

<h2 id="tocS_BillingUsageRecord">BillingUsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemabillingusagerecord"></a>
<a id="schema_BillingUsageRecord"></a>
<a id="tocSbillingusagerecord"></a>
<a id="tocsbillingusagerecord"></a>

```json
{
  "amount": "90.00",
  "credits_applied": 0,
  "metric_id": "5LrfGRz9En96R9Hg",
  "name": "Messages Sent",
  "pricing_currency": "USD",
  "quantity": 12500,
  "quantity_type": "usage"
}
```

Usage for a single Orb billable metric on the current draft invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|The billed dollar amount for this metric after credits and adjustments.|
|credits_applied|integer|true|none|Prepaid credits applied to this metric during the current service period.|
|metric_id|string|true|none|The Orb billable metric id.|
|name|string|true|none|The Orb billable metric name.|
|pricing_currency|string \| null|true|none|The Orb price currency for this line item, used to correlate usage with credit blocks.|
|quantity|integer|true|none|Orb line-item usage quantity for this period. This is not replaced by credits_applied.|
|quantity_type|string|true|none|Whether the GraphQL usage quantity is raw usage or credits applied. Prefer quantity and credits_applied for new clients.|

#### Enumerated Values

|Property|Value|
|---|---|
|quantity_type|usage|
|quantity_type|credits|

<h2 id="tocS_SourceLogsResponse">SourceLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcelogsresponse"></a>
<a id="schema_SourceLogsResponse"></a>
<a id="tocSsourcelogsresponse"></a>
<a id="tocssourcelogsresponse"></a>

```json
{
  "entries": [
    {
      "data": {
        "invoice_id": "inv_123"
      },
      "event": "invoice.created",
      "id": "log_123",
      "inserted_at": "2024-01-15T12:00:00Z",
      "preprocess_output": null,
      "source": null,
      "verification_status": "enforced:verified"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of source logs. Include `actions` in the `include` query parameter to return action details for each log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[SourceLog](#schemasourcelog)]|true|none|The source logs for the requested source and environment.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_AudienceTrigger">AudienceTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencetrigger"></a>
<a id="schema_AudienceTrigger"></a>
<a id="tocSaudiencetrigger"></a>
<a id="tocsaudiencetrigger"></a>

```json
{
  "audience_action_type": "member_added",
  "audience_key": "pro-users",
  "type": "audience"
}
```

An audience trigger that automatically triggers the workflow when a user enters an audience. Read more in the [docs](https://docs.knock.app/send-notifications/triggering-workflows/audiences).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience_action_type|string|true|none|The action type that triggers the workflow.|
|audience_key|string|true|none|The unique key of the audience that triggers the workflow.|
|type|string|true|none|The trigger event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|audience_action_type|member_added|
|type|audience|

<h2 id="tocS_SourceRehearseResponse">SourceRehearseResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcerehearseresponse"></a>
<a id="schema_SourceRehearseResponse"></a>
<a id="tocSsourcerehearseresponse"></a>
<a id="tocssourcerehearseresponse"></a>

```json
{
  "action_logs_count": 1,
  "errors": null,
  "failed_action_logs_count": 0,
  "log_id": "log_123",
  "status": "ok",
  "successful_action_logs_count": 1
}
```

The result of a simulated source event rehearsal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_logs_count|integer|true|none|The total number of action logs produced by the rehearsal.|
|errors|[object]|false|none|Errors returned while rehearsing the source event.|
|failed_action_logs_count|integer|true|none|The number of failed action logs produced by the rehearsal.|
|log_id|string \| null|true|none|The ID of the source event log created by the rehearsal.|
|status|string|true|none|Whether the rehearsal completed without action errors.|
|successful_action_logs_count|integer|true|none|The number of successful action logs produced by the rehearsal.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ok|
|status|error|

<h2 id="tocS_GuideBooleanActivationParams">GuideBooleanActivationParams</h2>
<!-- backwards compatibility -->
<a id="schemaguidebooleanactivationparams"></a>
<a id="schema_GuideBooleanActivationParams"></a>
<a id="tocSguidebooleanactivationparams"></a>
<a id="tocsguidebooleanactivationparams"></a>

```json
{
  "status": true
}
```

A request to activate or deactivate a guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|true|none|Whether to activate or deactivate the guide.|

<h2 id="tocS_DelayTimeWindow">DelayTimeWindow</h2>
<!-- backwards compatibility -->
<a id="schemadelaytimewindow"></a>
<a id="schema_DelayTimeWindow"></a>
<a id="tocSdelaytimewindow"></a>
<a id="tocsdelaytimewindow"></a>

```json
{
  "day": "monday",
  "from": "09:00",
  "type": "open",
  "until": "17:00"
}
```

A time window for a delay step. Describes a single day and when the delay can resume on it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|true|none|The day of the week.|
|from|string \| null|false|none|The time the window opens. When blank, the window is open all day.|
|type|string|true|none|Whether the delay can resume on this day. A `closed` day does not support `from` and `until`.|
|until|string \| null|false|none|The time the window closes. When blank, the window is open until the end of the day.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|monday|
|day|tuesday|
|day|wednesday|
|day|thursday|
|day|friday|
|day|saturday|
|day|sunday|
|type|open|
|type|closed|

<h2 id="tocS_WrappedChannelGroupResponse">WrappedChannelGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedchannelgroupresponse"></a>
<a id="schema_WrappedChannelGroupResponse"></a>
<a id="tocSwrappedchannelgroupresponse"></a>
<a id="tocswrappedchannelgroupresponse"></a>

```json
{
  "channel_group": {
    "channel_rules": [
      {
        "channel": {
          "archived_at": null,
          "created_at": "2021-01-01T00:00:00Z",
          "custom_icon_url": null,
          "id": "01234567-89ab-cdef-0123-456789abcdef",
          "key": "my-sendgrid-channel",
          "name": "My Sendgrid Channel",
          "provider": "sendgrid",
          "type": "email",
          "updated_at": "2021-01-01T00:00:00Z",
          "visible_in": [
            "workflow",
            "broadcast"
          ]
        },
        "created_at": "2021-01-01T00:00:00Z",
        "index": 0,
        "rule_type": "always",
        "updated_at": "2021-01-01T00:00:00Z"
      }
    ],
    "channel_type": "push",
    "created_at": "2021-01-01T00:00:00Z",
    "key": "push-group",
    "name": "Push Notification Group",
    "operator": "any",
    "source": "user",
    "updated_at": "2021-01-01T00:00:00Z",
    "visible_in": [
      "workflow",
      "broadcast"
    ]
  }
}
```

Wraps the ChannelGroup response under the `channel_group` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group|[ChannelGroup](#schemachannelgroup)|true|none|A group of channels with rules for when they are applicable.|

<h2 id="tocS_Commit">Commit</h2>
<!-- backwards compatibility -->
<a id="schemacommit"></a>
<a id="schema_Commit"></a>
<a id="tocScommit"></a>
<a id="tocscommit"></a>

```json
{
  "author": {
    "email": "john.doe@example.com",
    "name": "John Doe"
  },
  "commit_message": "This is a commit message",
  "created_at": "2021-01-01T00:00:00Z",
  "environment": "development",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "promote_group_id": null,
  "promoted_from_commit_id": null,
  "resource": {
    "identifier": "my-email-layout",
    "type": "email_layout"
  }
}
```

A commit is a change to a resource within an environment, made by an author.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|true|none|The author of the commit.|
|commit_message|string|false|none|The optional message about the commit.|
|created_at|string(date-time)|true|none|The timestamp of when the commit was created.|
|environment|string|true|none|The environment of the commit.|
|id|string(uuid)|true|none|The unique identifier for the commit.|
|promote_group_id|string(uuid) \| null|true|none|The identifier of the promote that created this commit, shared by every commit copied into the environment by the same promote. Null if the commit was not created by a promote.|
|promoted_from_commit_id|string(uuid) \| null|true|none|The ID of the commit this commit was promoted from. Null if the commit was not created by a promote.|
|resource|object|true|none|The resource object associated with the commit.|

<h2 id="tocS_MessageTypeBooleanField">MessageTypeBooleanField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypebooleanfield"></a>
<a id="schema_MessageTypeBooleanField"></a>
<a id="tocSmessagetypebooleanfield"></a>
<a id="tocsmessagetypebooleanfield"></a>

```json
{
  "key": "boolean_field",
  "label": "Boolean Field",
  "settings": {
    "default": false,
    "description": "A description of the boolean field",
    "required": true
  },
  "type": "boolean"
}
```

A boolean field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the boolean field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|boolean|

<h2 id="tocS_PaginatedWarehouseSyncResponse">PaginatedWarehouseSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwarehousesyncresponse"></a>
<a id="schema_PaginatedWarehouseSyncResponse"></a>
<a id="tocSpaginatedwarehousesyncresponse"></a>
<a id="tocspaginatedwarehousesyncresponse"></a>

```json
{
  "entries": [
    {
      "change_tracking": {
        "last_modified_column": "updated_at"
      },
      "created_at": "2026-10-01T12:00:00Z",
      "description": "Syncs users from the analytics warehouse",
      "enabled": true,
      "environment": "development",
      "frequency_minutes": 60,
      "has_unpublished_changes": false,
      "key": "users",
      "last_failure": null,
      "last_published_at": "2026-11-01T12:00:00Z",
      "mappings": [
        {
          "on_null": "set_null",
          "source_column": "id",
          "target_field": "id"
        },
        {
          "on_null": "set_null",
          "source_column": "email",
          "target_field": "email"
        },
        {
          "on_null": "preserve",
          "source_column": "name",
          "target_field": "name"
        }
      ],
      "name": "Users",
      "primary_key_column": "id",
      "publish_error": null,
      "sha": "abc123def456",
      "source": {
        "mode": "sql",
        "query": "SELECT id, email, name, updated_at FROM analytics.users"
      },
      "status": "live",
      "target": null,
      "target_type": "user",
      "updated_at": "2026-11-01T12:00:00Z",
      "version_id": "8f0a5c1e-4f5b-4c3e-9c62-2b0e3d1f7a10",
      "warehouse_key": "analytics"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of WarehouseSync. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[WarehouseSync](#schemawarehousesync)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WrappedGoalResourceAttachmentResponse">WrappedGoalResourceAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedgoalresourceattachmentresponse"></a>
<a id="schema_WrappedGoalResourceAttachmentResponse"></a>
<a id="tocSwrappedgoalresourceattachmentresponse"></a>
<a id="tocswrappedgoalresourceattachmentresponse"></a>

```json
{
  "attachment": {
    "attribution_window_days": 7,
    "goal_key": "trial-conversion",
    "resource_key": "trial-onboarding",
    "resource_type": "workflow"
  }
}
```

Wraps the GoalResourceAttachment response under the `attachment` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[GoalResourceAttachment](#schemagoalresourceattachment)|true|none|A goal attached to a workflow, guide, or broadcast in one environment. An attachment goes live without a commit.|

<h2 id="tocS_BillingCreditBlock">BillingCreditBlock</h2>
<!-- backwards compatibility -->
<a id="schemabillingcreditblock"></a>
<a id="schema_BillingCreditBlock"></a>
<a id="tocSbillingcreditblock"></a>
<a id="tocsbillingcreditblock"></a>

```json
{
  "currency": "mnr_credits",
  "effective_at": "2026-01-01T00:00:00.000000Z",
  "expires_at": "2027-01-01T00:00:00.000000Z",
  "id": "crb_year1",
  "name": "Monthly notified recipients",
  "quantity": 10800000,
  "remaining": 6760000,
  "status": "active"
}
```

An unexpired Orb credit block, including scheduled and depleted allotments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The Orb custom pricing-unit identifier, such as mnr_credits or ai_credits.|
|effective_at|string(date-time) \| null|true|none|When the block becomes effective.|
|expires_at|string(date-time) \| null|true|none|When the block expires.|
|id|string|true|none|The Orb credit block id.|
|name|string|true|none|The display name for the credit currency.|
|quantity|number|true|none|The block's original allocation.|
|remaining|number|true|none|The block's remaining balance.|
|status|string|true|none|Derived block status: scheduled when not yet effective, depleted when remaining is zero or less, otherwise active.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|depleted|
|status|scheduled|

<h2 id="tocS_WorkflowUpdateTenantStep">WorkflowUpdateTenantStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdatetenantstep"></a>
<a id="schema_WorkflowUpdateTenantStep"></a>
<a id="tocSworkflowupdatetenantstep"></a>
<a id="tocsworkflowupdatetenantstep"></a>

```json
{
  "description": "Update tenant step description.",
  "name": "Update tenant",
  "ref": "update_tenant_1",
  "settings": {
    "recipient_gid": "gid://Object/$tenants/tenant-123",
    "recipient_mode": "reference",
    "update_properties": "{\"name\": \"Updated Tenant\"}"
  },
  "type": "update_tenant"
}
```

An update tenant step. Updates properties of a specific tenant referenced in the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the update tenant step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_tenant|

<h2 id="tocS_WrappedEmailLayoutResponse">WrappedEmailLayoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedemaillayoutresponse"></a>
<a id="schema_WrappedEmailLayoutResponse"></a>
<a id="tocSwrappedemaillayoutresponse"></a>
<a id="tocswrappedemaillayoutresponse"></a>

```json
{
  "email_layout": {
    "branding_overrides": {
      "dark_logo_url": "https://cdn.example.com/logo-dark.png",
      "dark_primary_color": "#1A1A2E",
      "dark_primary_color_contrast": "#FFFFFF",
      "primary_color": "#4F46E5",
      "primary_color_contrast": "#FFFFFF"
    },
    "created_at": "2021-01-01T00:00:00Z",
    "environment": "development",
    "footer_links": [
      {
        "text": "Example",
        "url": "http://example.com"
      }
    ],
    "html_layout": "<html><body>Hello, world!</body></html>",
    "key": "transactional",
    "name": "Transactional",
    "sha": "1234567890",
    "text_layout": "Hello, world!",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the EmailLayout response under the `email_layout` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_layout|[EmailLayout](#schemaemaillayout)|true|none|A versioned email layout used within an environment.|

<h2 id="tocS_WorkflowChatStep">WorkflowChatStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowchatstep"></a>
<a id="schema_WorkflowChatStep"></a>
<a id="tocSworkflowchatstep"></a>
<a id="tocsworkflowchatstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "slack",
  "channel_overrides": null,
  "channel_type": "chat",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "Chat channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "json_body": null,
    "markdown_body": "**Hello**, world!",
    "summary": "Hello, world!"
  },
  "type": "channel"
}
```

A chat step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_overrides|object|false|none|A map of channel overrides for the channel step.|
|channel_type|string|false|none|The type of the channel step. Always `chat` for chat steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[ChatTemplate](#schemachattemplate)|true|none|A chat template.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|chat|
|type|channel|

<h2 id="tocS_SourceEventActionMapping">SourceEventActionMapping</h2>
<!-- backwards compatibility -->
<a id="schemasourceeventactionmapping"></a>
<a id="schema_SourceEventActionMapping"></a>
<a id="tocSsourceeventactionmapping"></a>
<a id="tocssourceeventactionmapping"></a>

```json
{
  "action_parameters": null,
  "action_type": "workflows_trigger",
  "active": true,
  "created_at": "2021-01-01T00:00:00Z",
  "event_type": "Order Created",
  "is_deleted": false,
  "updated_at": "2021-01-01T00:00:00Z"
}
```

An action mapping attached to a source event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_parameters|object \| null|false|none|The action-specific parameters for the mapping.|
|action_type|string|true|none|The action that is performed when this mapping matches a source event.|
|active|boolean|true|none|Whether the mapping is active. Inactive mappings are skipped during execution.|
|created_at|string(date-time)|true|none|The timestamp of when the mapping was created.|
|event_type|string|true|none|The decoded event type that triggers the action.|
|is_deleted|boolean|true|none|Whether the mapping has been deleted. When true, this indicates the trigger is present in the workflow's published version and may be active until the workflow is committed and published.|
|updated_at|string(date-time)|true|none|The timestamp of when the mapping was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_type|workflows_trigger|
|action_type|users_identify|
|action_type|users_delete|
|action_type|objects_set|
|action_type|objects_delete|
|action_type|objects_subscribe|
|action_type|objects_unsubscribe|
|action_type|tenants_set|
|action_type|tenants_delete|
|action_type|audiences_add_member|
|action_type|audiences_remove_member|

<h2 id="tocS_SourceEventsResponse">SourceEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourceeventsresponse"></a>
<a id="schema_SourceEventsResponse"></a>
<a id="tocSsourceeventsresponse"></a>
<a id="tocssourceeventsresponse"></a>

```json
{
  "entries": [
    {
      "event": "user.created",
      "last_received_at": "2024-01-15T12:00:00Z"
    }
  ]
}
```

A list of known unique source events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[SourceEvent](#schemasourceevent)]|true|none|The known unique events for the requested source and environment.|

<h2 id="tocS_WrappedPartialRequestRequest">WrappedPartialRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedpartialrequestrequest"></a>
<a id="schema_WrappedPartialRequestRequest"></a>
<a id="tocSwrappedpartialrequestrequest"></a>
<a id="tocswrappedpartialrequestrequest"></a>

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "name": "My Partial",
    "type": "html",
    "visual_block_enabled": true
  }
}
```

Wraps the PartialRequest request under the partial key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partial|[PartialRequest](#schemapartialrequest)|true|none|A partial object with attributes to update or create a partial.|

<h2 id="tocS_WorkflowInAppGuideStep">WorkflowInAppGuideStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowinappguidestep"></a>
<a id="schema_WorkflowInAppGuideStep"></a>
<a id="tocSworkflowinappguidestep"></a>
<a id="tocsworkflowinappguidestep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "in-app-guide",
  "channel_type": "in_app_guide",
  "conditions": null,
  "description": "Show the onboarding guide to recipients who execute this step",
  "guide_key": "onboarding",
  "name": "In-app guide step",
  "ref": "in_app_guide_step",
  "send_windows": null,
  "type": "channel"
}
```

An in-app guide step within a workflow. References a guide that will be shown to recipients who execute this step. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_type|string|true|none|The type of the channel step. Always `in_app_guide` for in-app guide steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|guide_key|string \| null|false|none|The key of the guide to reference. When a recipient executes this step they are added to the managed audience that backs the guide's workflow-derived targeting.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|in_app_guide|
|type|channel|

<h2 id="tocS_WrappedGoalResponse">WrappedGoalResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedgoalresponse"></a>
<a id="schema_WrappedGoalResponse"></a>
<a id="tocSwrappedgoalresponse"></a>
<a id="tocswrappedgoalresponse"></a>

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "created_at": "2024-06-01T00:00:00Z",
    "description": "Tracks when a trial user converts to paid",
    "environment": "development",
    "key": "trial-conversion",
    "name": "Trial Conversion",
    "sha": "abc123def456",
    "updated_at": "2024-06-01T00:00:00Z"
  }
}
```

Wraps the Goal response under the `goal` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|[Goal](#schemagoal)|true|none|A goal defines an event condition that is tracked and attributed to messaging resources.|

<h2 id="tocS_HeadlessAccount">HeadlessAccount</h2>
<!-- backwards compatibility -->
<a id="schemaheadlessaccount"></a>
<a id="schema_HeadlessAccount"></a>
<a id="tocSheadlessaccount"></a>
<a id="tocsheadlessaccount"></a>

```json
{
  "expires_at": "2026-10-29T12:00:00.000Z",
  "status": "provisioning",
  "token": "knock_st_1234567890"
}
```

A headless account an agent created, with the service token the agent uses to work in it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|true|none|When the account and its token are deleted unless a person claims the account first.|
|status|string|true|none|The account is still being set up. Poll the status endpoint.|
|token|string|true|none|A service token for the Management API. It is only returned once and keeps working after a person claims the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|provisioning|

<h2 id="tocS_MessageTypeSelectField">MessageTypeSelectField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypeselectfield"></a>
<a id="schema_MessageTypeSelectField"></a>
<a id="tocSmessagetypeselectfield"></a>
<a id="tocsmessagetypeselectfield"></a>

```json
{
  "key": "select_field",
  "label": "Select Field",
  "settings": {
    "default": "option1",
    "description": "A description of the select field",
    "options": [
      {
        "label": "Option 1",
        "value": "option1"
      },
      {
        "label": "Option 2",
        "value": "option2"
      },
      {
        "label": "Option 3",
        "value": "option3"
      }
    ],
    "required": true
  },
  "type": "select"
}
```

A select field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|true|none|Settings for the select field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|select|

<h2 id="tocS_Broadcast">Broadcast</h2>
<!-- backwards compatibility -->
<a id="schemabroadcast"></a>
<a id="schema_Broadcast"></a>
<a id="tocSbroadcast"></a>
<a id="tocsbroadcast"></a>

```json
{
  "categories": [
    "marketing",
    "promotions"
  ],
  "created_at": "2022-12-16T19:07:50.027113Z",
  "description": "Holiday promotion broadcast for December",
  "environment": "development",
  "key": "december-promotion",
  "name": "December Promotion",
  "scheduled_at": null,
  "sent_at": null,
  "settings": {
    "is_commercial": true,
    "override_preferences": false
  },
  "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
  "status": "draft",
  "steps": [
    {
      "channel_key": "in-app-feed",
      "description": "Main in-app feed",
      "name": "In-app step",
      "ref": "in_app_feed_1",
      "template": {
        "action_url": "{{ vars.app_url }}",
        "markdown_body": "Hello **{{ recipient.name }}**"
      },
      "type": "channel"
    }
  ],
  "tags": [
    "in-review"
  ],
  "target_audience_key": "premium-users",
  "updated_at": "2023-02-08T22:15:19.846681Z",
  "valid": true
}
```

A broadcast object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the broadcast was archived.|
|categories|[string]|false|none|A list of categories that the broadcast belongs to.|
|created_at|string(date-time)|true|none|The timestamp of when the broadcast was created. (read-only).|
|description|string|false|none|An arbitrary string attached to a broadcast object. Useful for adding notes about the broadcast for internal purposes. Maximum of 280 characters allowed.|
|environment|string|true|none|The slug of the environment in which the broadcast exists. (read-only).|
|key|string|true|none|The unique key string for the broadcast object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the broadcast. Must be at maximum 255 characters in length.|
|scheduled_at|string(date-time) \| null|false|none|The timestamp of when the broadcast is scheduled to be sent.|
|sent_at|string(date-time) \| null|false|none|The timestamp of when the broadcast was sent. (read-only).|
|settings|object|false|none|A map of broadcast settings.|
|sha|string|true|none|The SHA hash of the workflow data. (read-only).|
|status|string|true|none|The current status of the broadcast. One of: `draft`, `scheduled`, `sent`.|
|steps|[object]|true|none|A list of broadcast step objects in the broadcast. Broadcasts only support channel, branch, and delay steps.|
|tags|[string]|false|none|A list of resource tags attached to the broadcast. Tags must exist in the project's tag catalog.|
|target_audience_key|string|false|none|The key of the audience to target for this broadcast.|
|updated_at|string(date-time)|true|none|The timestamp of when the broadcast was last updated. (read-only).|
|valid|boolean|true|none|Whether the broadcast and its steps are in a valid state. (read-only).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|scheduled|
|status|sent|

<h2 id="tocS_WorkflowFetchStep">WorkflowFetchStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowfetchstep"></a>
<a id="schema_WorkflowFetchStep"></a>
<a id="tocSworkflowfetchstep"></a>
<a id="tocsworkflowfetchstep"></a>

```json
{
  "name": "Fetch step",
  "ref": "fetch_1",
  "settings": {
    "body": null,
    "headers": [
      {
        "key": "X-API-Key",
        "value": "1234567890"
      }
    ],
    "method": "get",
    "query_params": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "url": "https://example.com"
  },
  "type": "http_fetch"
}
```

A fetch function step. Retrieves data from an external source and merges it into the workflow's `data` scope for use in later steps. Read more in the [docs](https://docs.knock.app/designing-workflows/fetch-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|[RequestTemplate](#schemarequesttemplate)|true|none|A request template for a fetch function step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|http_fetch|

<h2 id="tocS_GoalCondition">GoalCondition</h2>
<!-- backwards compatibility -->
<a id="schemagoalcondition"></a>
<a id="schema_GoalCondition"></a>
<a id="tocSgoalcondition"></a>
<a id="tocsgoalcondition"></a>

```json
{
  "event": {
    "event_key": "order.completed",
    "event_type": "integration_source",
    "integration_source_key": "stripe",
    "recipient_path": "body.userId"
  },
  "match_conditions": [
    {
      "conditions": [
        {
          "argument": "100",
          "operator": "greater_than",
          "variable": "event.amount"
        }
      ],
      "operator": "and"
    }
  ]
}
```

A goal condition consisting of a polymorphic event and optional match conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|The event to track. Supports integration_source and audience event types.|
|match_conditions|[[ConditionGroup](#schemaconditiongroup)]|false|none|Optional list of condition groups; each group uses an operator (and/or) with nested conditions.|

<h2 id="tocS_ObjectRecipientReference">ObjectRecipientReference</h2>
<!-- backwards compatibility -->
<a id="schemaobjectrecipientreference"></a>
<a id="schema_ObjectRecipientReference"></a>
<a id="tocSobjectrecipientreference"></a>
<a id="tocsobjectrecipientreference"></a>

```json
{
  "collection": "projects",
  "id": "project_1"
}
```

An object reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|true|none|The collection of the object.|
|id|string|true|none|The ID of the object.|

<h2 id="tocS_EnvironmentDefaults">EnvironmentDefaults</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdefaults"></a>
<a id="schema_EnvironmentDefaults"></a>
<a id="tocSenvironmentdefaults"></a>
<a id="tocsenvironmentdefaults"></a>

```json
{
  "created_at": "2026-10-31T19:59:03Z",
  "preference_set": {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": true,
          "push": true
        }
      }
    },
    "channel_types": {
      "email": true,
      "sms": false
    },
    "workflows": {
      "new-comment": {
        "channel_types": {
          "push": false
        }
      }
    }
  },
  "updated_at": "2026-11-03T12:00:00Z"
}
```

The default settings for an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time) \| null|true|none|The timestamp of when the defaults were first set. Null when no defaults have been set.|
|preference_set|[EnvironmentDefaultsPreferenceSet](#schemaenvironmentdefaultspreferenceset)|true|none|A preference set applied to every recipient in the environment unless the recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys are not supported, because defaults are always replaced in full.|
|updated_at|string(date-time) \| null|true|none|The timestamp of when the defaults were last updated. Null when no defaults have been set.|

<h2 id="tocS_EmailChannelSettings">EmailChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemaemailchannelsettings"></a>
<a id="schema_EmailChannelSettings"></a>
<a id="tocSemailchannelsettings"></a>
<a id="tocsemailchannelsettings"></a>

```json
{
  "bcc_address": null,
  "cc_address": null,
  "from_address": "hello@example.com",
  "from_name": "John Doe",
  "json_overrides": "{\"some_override\": true}",
  "link_tracking": true,
  "open_tracking": true,
  "reply_to_address": null,
  "to_address": "hello@example.com"
}
```

Email channel settings. Only used as configuration as part of a workflow channel step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bcc_address|string \| null|false|none|The BCC address on email notifications. Supports liquid.|
|cc_address|string \| null|false|none|The CC address on email notifications. Supports liquid.|
|from_address|string \| null|false|none|The email address from which this channel will send. Supports liquid.|
|from_name|string \| null|false|none|The name from which this channel will send. Supports liquid.|
|json_overrides|string \| null|false|none|A JSON template for any custom overrides to merge into the API payload that is sent to the email provider. Supports liquid.|
|link_tracking|boolean|false|none|Whether to track link clicks on email notifications.|
|open_tracking|boolean|false|none|Whether to track opens on email notifications.|
|reply_to_address|string \| null|false|none|The Reply-to address on email notifications. Supports liquid.|
|to_address|string|false|none|The email address to which this channel will send. Defaults to `recipient.email`. Supports liquid.|

<h2 id="tocS_PreviewTemplateRequest">PreviewTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreviewtemplaterequest"></a>
<a id="schema_PreviewTemplateRequest"></a>
<a id="tocSpreviewtemplaterequest"></a>
<a id="tocspreviewtemplaterequest"></a>

```json
{
  "channel_type": "email",
  "data": {
    "order_id": 123
  },
  "recipient": "user_123",
  "template": {
    "html_body": "<p>Welcome!</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Hello {{ recipient.name }}"
  }
}
```

A request to preview a template, without requiring a template to be persisted within Knock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[RecipientReference](#schemarecipientreference) \| object \| null|false|none|The actor to reference in the preview.|
|channel_type|string|true|none|The channel type of the template to preview.|
|data|object|false|none|The data to pass to the template for rendering.|
|layout|object \| null|false|none|Email layout configuration. Only applicable for email channel type. Falls back to environment default if not provided.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|template|object|true|none|The template content to preview. Structure depends on channel_type.|
|tenant|string \| null|false|none|The tenant to associate with the preview. Must not contain whitespace.|
|workflow|object \| null|false|none|Optional workflow context for variable hydration. When provided, recipient/actor/tenant are resolved via Knock.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|email|
|channel_type|sms|
|channel_type|push|
|channel_type|chat|
|channel_type|in_app_feed|

<h2 id="tocS_MessageTypeColorField">MessageTypeColorField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypecolorfield"></a>
<a id="schema_MessageTypeColorField"></a>
<a id="tocSmessagetypecolorfield"></a>
<a id="tocsmessagetypecolorfield"></a>

```json
{
  "key": "accent_color",
  "label": "Accent color",
  "settings": {
    "default": "#FF0000",
    "description": "A hex color for the accent",
    "placeholder": "#000000",
    "required": true
  },
  "type": "color"
}
```

A hex color field (#RGB or #RRGGBB) used in a message type or partial input schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the color field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|color|

<h2 id="tocS_UserRecipientReference">UserRecipientReference</h2>
<!-- backwards compatibility -->
<a id="schemauserrecipientreference"></a>
<a id="schema_UserRecipientReference"></a>
<a id="tocSuserrecipientreference"></a>
<a id="tocsuserrecipientreference"></a>

```json
"user_1"
```

A user ID.

<h2 id="tocS_WorkflowWaitForEventIntegrationSourceEvent">WorkflowWaitForEventIntegrationSourceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventintegrationsourceevent"></a>
<a id="schema_WorkflowWaitForEventIntegrationSourceEvent"></a>
<a id="tocSworkflowwaitforeventintegrationsourceevent"></a>
<a id="tocsworkflowwaitforeventintegrationsourceevent"></a>

```json
{
  "event_key": "order.updated",
  "event_type": "integration_source",
  "integration_source_key": "segment",
  "recipient_path": "userId"
}
```

An integration source event to wait for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_key|string|true|none|The name of the event to wait for.|
|event_type|string|true|none|The type of event to wait for.|
|integration_source_key|string|true|none|The key of the integration source that emits the event to wait for.|
|recipient_path|string \| null|false|none|JSON path into the source event that yields the recipient user ID, for example, body.userId. For legacy sources, use the field name without prefixing body. When omitted, a default will be automatically set.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|integration_source|

<h2 id="tocS_ReusableRequestSettings">ReusableRequestSettings</h2>
<!-- backwards compatibility -->
<a id="schemareusablerequestsettings"></a>
<a id="schema_ReusableRequestSettings"></a>
<a id="tocSreusablerequestsettings"></a>
<a id="tocsreusablerequestsettings"></a>

```json
{
  "body": null,
  "headers": [
    {
      "key": "X-API-Key",
      "value": "1234567890"
    }
  ],
  "method": "get",
  "query_params": [
    {
      "key": "key",
      "value": "value"
    }
  ],
  "response_path": null,
  "signing_key": null,
  "url": "https://example.com"
}
```

The HTTP request a reusable request runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string \| null|false|none|The body of the request. Only used for POST or PUT requests.|
|data_input_schema|object \| null|false|none|A JSON schema for inputs the request accepts.|
|data_input_values_str|string \| null|false|none|A JSON string of input values for the request.|
|headers|object|false|none|The headers of the request. Can be a template string or a list of key-value pairs.|
|method|string|true|none|The HTTP method of the request.|
|query_params|object|false|none|The query params of the request. Can be a template string or a list of key-value pairs.|
|response_path|string \| null|false|none|A JSON path into the response that is merged into the workflow data.|
|signing_key|string \| null|false|none|The signing key used to sign the request.|
|url|string|false|none|The URL of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|get|
|method|post|
|method|put|
|method|delete|
|method|patch|

<h2 id="tocS_ArchiveGuideResponse">ArchiveGuideResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveguideresponse"></a>
<a id="schema_ArchiveGuideResponse"></a>
<a id="tocSarchiveguideresponse"></a>
<a id="tocsarchiveguideresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving a guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the promote operation.|

<h2 id="tocS_SourceLogAction">SourceLogAction</h2>
<!-- backwards compatibility -->
<a id="schemasourcelogaction"></a>
<a id="schema_SourceLogAction"></a>
<a id="tocSsourcelogaction"></a>
<a id="tocssourcelogaction"></a>

```json
{
  "action_parameters": {
    "actor": "body.actor_id",
    "cancellation_key": "headers.message_id",
    "data": "body.data",
    "key": "alerts",
    "recipients": "body.data.email",
    "tenant": null
  },
  "action_payload": {
    "actor": "Sam",
    "cancellation_key": "1234567890",
    "data": "{\"name\": \"Sam\"}",
    "key": "alerts",
    "recipients": [
      {
        "collection": "$users",
        "id": "sam"
      }
    ],
    "tenant": null,
    "workflow": {
      "active": false,
      "categories": [
        "marketing",
        "black-friday"
      ],
      "conditions": {
        "all": [
          {
            "argument": "admin",
            "operator": "equal_to",
            "variable": "recipient.role"
          }
        ]
      },
      "created_at": "2022-12-16T19:07:50.027113Z",
      "description": "This is a dummy workflow for demo purposes.",
      "environment": "development",
      "key": "december-16-demo",
      "name": "december-16-demo",
      "settings": {
        "override_preferences": true
      },
      "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "channel_type": "in_app_feed",
          "description": "Main in-app feed",
          "name": "In-app step",
          "ref": "in_app_feed_1",
          "template": {
            "action_url": "{{ data.onboarding_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
          },
          "type": "channel"
        },
        {
          "ref": "delay_1",
          "settings": {
            "delay_for": {
              "unit": "hours",
              "value": 1
            }
          },
          "type": "delay"
        },
        {
          "channel_key": "postmark",
          "channel_type": "email",
          "ref": "email_1",
          "template": {
            "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
            "settings": {
              "layout_key": "default"
            },
            "subject": "Welcome to {{ vars.app_name }}!"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "onboarding",
        "growth"
      ],
      "trigger_data_json_schema": {
        "properties": {
          "onboarding_url": {
            "type": "string"
          }
        },
        "required": [
          "onboarding_url"
        ],
        "type": "object"
      },
      "trigger_events": [
        {
          "audience_action_type": "member_added",
          "audience_key": "pro-users",
          "type": "audience"
        }
      ],
      "trigger_frequency": "every_trigger",
      "updated_at": "2023-02-08T22:15:19.846681Z",
      "valid": true
    }
  },
  "action_result": {
    "id": "e8b3383f-78a0-5ddc-9c48-f93d115f06cd"
  },
  "action_status": "success",
  "action_type": "workflows_trigger",
  "id": "action_log_123",
  "inserted_at": "2024-01-15T12:00:01Z"
}
```

An action executed after receiving a source event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_parameters|object \| null|false|none|The configured mapping parameters used to derive the action payload.|
|action_payload|object \| null|false|none|The parsed values generated from the mapping parameters for this action.|
|action_result|object \| null|false|none|The result returned by the action.|
|action_status|string \| null|false|none|The status of the action.|
|action_type|string|false|none|The type of action that was executed.|
|id|string|true|none|The action log ID.|
|inserted_at|string(date-time) \| null|false|none|The timestamp of when the action log was created.|

<h2 id="tocS_BroadcastRunRequest">BroadcastRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastrunrequest"></a>
<a id="schema_BroadcastRunRequest"></a>
<a id="tocSbroadcastrunrequest"></a>
<a id="tocsbroadcastrunrequest"></a>

```json
{
  "recipient": {
    "id": "user_1"
  },
  "settings": {
    "sandbox_mode": true,
    "skip_delay": true
  },
  "tenant": "tenant_1"
}
```

A request to run a broadcast for a recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient|object|true|none|The user to run the broadcast for.|
|settings|object|false|none|Settings that control how the broadcast run executes.|
|step_id|string(uuid) \| null|false|none|When set, runs only this message-sending channel step. Guide steps, legacy in-app steps, and unknown ids are rejected.|
|tenant|string \| null|false|none|The tenant to associate the broadcast run with. Must not contain whitespace.|

<h2 id="tocS_ChannelGroupRuleRequest">ChannelGroupRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelgrouprulerequest"></a>
<a id="schema_ChannelGroupRuleRequest"></a>
<a id="tocSchannelgrouprulerequest"></a>
<a id="tocschannelgrouprulerequest"></a>

```json
{
  "channel_key": "email-channel",
  "index": 0,
  "rule_type": "always"
}
```

A rule that determines if a channel should be executed as part of a channel group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string \| null|false|none|For conditional rules, the value to compare against. For `is_in_random_cohort`, a 0–100 percentage with at most one decimal place.|
|channel_key|string|true|none|The key of the channel this rule applies to.|
|index|integer|false|none|The order index of this rule within the channel group.|
|operator|string \| null|false|none|For conditional rules, the operator to apply. For `is_in_random_cohort`, `variable` must be `recipient.id` and `argument` is a 0–100 percentage.|
|rule_type|string|true|none|The type of rule (if = conditional, unless = negative conditional, always = always apply).|
|variable|string \| null|false|none|For conditional rules, the variable to evaluate. For `is_in_random_cohort`, must be `recipient.id`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal_to|
|operator|not_equal_to|
|operator|greater_than|
|operator|less_than|
|operator|greater_than_or_equal_to|
|operator|less_than_or_equal_to|
|operator|contains|
|operator|not_contains|
|operator|contains_all|
|operator|not_contains_all|
|operator|is_timestamp_before|
|operator|is_timestamp_on_or_after|
|operator|is_timestamp_between|
|operator|is_between|
|operator|empty|
|operator|not_empty|
|operator|exists|
|operator|not_exists|
|operator|is_timestamp|
|operator|is_timestamp_before_now|
|operator|is_timestamp_on_or_after_now|
|operator|is_audience_member|
|operator|is_not_audience_member|
|operator|is_in_random_cohort|
|rule_type|if|
|rule_type|unless|
|rule_type|always|

<h2 id="tocS_WrappedGoalRequestRequest">WrappedGoalRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedgoalrequestrequest"></a>
<a id="schema_WrappedGoalRequestRequest"></a>
<a id="tocSwrappedgoalrequestrequest"></a>
<a id="tocswrappedgoalrequestrequest"></a>

```json
{
  "goal": {
    "condition": {
      "event": {
        "event_key": "order.completed",
        "event_type": "integration_source",
        "integration_source_key": "stripe",
        "recipient_path": "body.userId"
      },
      "match_conditions": [
        {
          "conditions": [
            {
              "argument": "100",
              "operator": "greater_than",
              "variable": "event.amount"
            }
          ],
          "operator": "and"
        }
      ]
    },
    "description": "Tracks when a trial user converts to paid",
    "name": "Trial Conversion"
  }
}
```

Wraps the GoalRequest request under the goal key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|[GoalRequest](#schemagoalrequest)|true|none|A goal payload for upsert or validate.|

<h2 id="tocS_MessageTypeNumberField">MessageTypeNumberField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypenumberfield"></a>
<a id="schema_MessageTypeNumberField"></a>
<a id="tocSmessagetypenumberfield"></a>
<a id="tocsmessagetypenumberfield"></a>

```json
{
  "key": "ship_number",
  "label": "Ship number",
  "settings": {
    "default": 42,
    "description": "Displayed next to the hull ID",
    "max": 999999,
    "min": 0,
    "placeholder": "0",
    "required": true,
    "unit_label": "TEU"
  },
  "type": "number"
}
```

A numeric field used in a message type or partial input schema, with optional min/max bounds and a unit label for display.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the number field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|number|

<h2 id="tocS_ArchiveGoalResponse">ArchiveGoalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchivegoalresponse"></a>
<a id="schema_ArchiveGoalResponse"></a>
<a id="tocSarchivegoalresponse"></a>
<a id="tocsarchivegoalresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving a goal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<h2 id="tocS_EmailLayoutRequest">EmailLayoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemaillayoutrequest"></a>
<a id="schema_EmailLayoutRequest"></a>
<a id="tocSemaillayoutrequest"></a>
<a id="tocsemaillayoutrequest"></a>

```json
{
  "branding_overrides": {
    "dark_logo_url": "https://cdn.example.com/logo-dark.png",
    "dark_primary_color": "#1A1A2E",
    "dark_primary_color_contrast": "#FFFFFF",
    "primary_color": "#4F46E5",
    "primary_color_contrast": "#FFFFFF"
  },
  "footer_links": [
    {
      "text": "Example",
      "url": "http://example.com"
    }
  ],
  "html_layout": "<html><body>Hello, world!</body></html>",
  "name": "Transactional",
  "text_layout": "Hello, world!"
}
```

A request to update or create an email layout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branding_overrides|[BrandingOverrides](#schemabrandingoverrides)|false|none|Overrides to apply against account branding variables in an email layout, including dark mode-specific values.|
|footer_links|[object]|false|none|A list of one or more items to show in the footer of the email layout.|
|html_layout|string|true|none|The complete HTML or MJML content of the email layout.|
|is_mjml|boolean \| null|false|none|Whether this layout uses MJML format. When true, html_layout must contain <mjml> tags.|
|name|string|true|none|The friendly name of this email layout.|
|text_layout|string|true|none|The complete plain text content of the email layout.|

<h2 id="tocS_SourceEnvironmentSettings">SourceEnvironmentSettings</h2>
<!-- backwards compatibility -->
<a id="schemasourceenvironmentsettings"></a>
<a id="schema_SourceEnvironmentSettings"></a>
<a id="tocSsourceenvironmentsettings"></a>
<a id="tocssourceenvironmentsettings"></a>

```json
{
  "mappings": [],
  "settings": {
    "endpoint": "https://api.knock.app/integrations/receive/src_123",
    "enforce_verification": false,
    "event_type_path": "body.event",
    "idempotency_key_path": "body.messageId",
    "preprocess_script": {
      "language": "javascript",
      "source": "return event;"
    },
    "timestamp_path": "body.timestamp"
  },
  "updated_at": "2021-01-01T00:00:00Z"
}
```

Environment-specific settings for a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[[SourceEventActionMapping](#schemasourceeventactionmapping)]|true|none|Event action mappings configured for this source in the environment.|
|settings|object|true|none|Source settings for this environment, including endpoint, verification behavior, and preprocess script.|
|updated_at|string(date-time)|true|none|The timestamp of when these environment settings were last updated.|

<h2 id="tocS_PushChannelSettings">PushChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemapushchannelsettings"></a>
<a id="schema_PushChannelSettings"></a>
<a id="tocSpushchannelsettings"></a>
<a id="tocspushchannelsettings"></a>

```json
{
  "token_deregistration": true
}
```

Push channel settings. Only used as configuration as part of a workflow channel step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token_deregistration|boolean|false|none|Whether to deregister a push-token when a push send hard bounces. This is to prevent the same token from being used for future pushes.|

<h2 id="tocS_WrappedPartialResponse">WrappedPartialResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedpartialresponse"></a>
<a id="schema_WrappedPartialResponse"></a>
<a id="tocSwrappedpartialresponse"></a>
<a id="tocswrappedpartialresponse"></a>

```json
{
  "partial": {
    "content": "<p>Hello, world!</p>",
    "description": "This is a test partial",
    "environment": "development",
    "icon_name": "icon-name",
    "input_schema": [
      {
        "key": "text_field",
        "label": "My text field",
        "settings": {
          "description": "A description of the text field",
          "max_length": 100,
          "min_length": 10,
          "required": true
        },
        "type": "text"
      }
    ],
    "inserted_at": "2021-01-01T00:00:00Z",
    "key": "my-partial",
    "name": "My Partial",
    "type": "html",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "visual_block_enabled": true
  }
}
```

Wraps the Partial response under the `partial` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partial|[Partial](#schemapartial)|true|none|A partial is a reusable piece of content that can be used in a template.|

<h2 id="tocS_WrappedTagRequestRequest">WrappedTagRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedtagrequestrequest"></a>
<a id="schema_WrappedTagRequestRequest"></a>
<a id="tocSwrappedtagrequestrequest"></a>
<a id="tocswrappedtagrequestrequest"></a>

```json
{
  "tag": {
    "color": "#3B82F6",
    "description": "Billing-related workflows"
  }
}
```

Wraps the TagRequest request under the tag key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[TagRequest](#schematagrequest)|true|none|A request to create or update a tag. The tag name is taken from the path. On conflict, omitted description and color fields are set to null.|

<h2 id="tocS_ConditionGroupAllMatch">ConditionGroupAllMatch</h2>
<!-- backwards compatibility -->
<a id="schemaconditiongroupallmatch"></a>
<a id="schema_ConditionGroupAllMatch"></a>
<a id="tocSconditiongroupallmatch"></a>
<a id="tocsconditiongroupallmatch"></a>

```json
{
  "all": [
    {
      "argument": "some_property",
      "operator": "equal_to",
      "variable": "recipient.property"
    }
  ]
}
```

A group of conditions that must all be met.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|[[Condition](#schemacondition)]|false|none|A list of conditions.|

<h2 id="tocS_PreviewEmailLayoutResponse">PreviewEmailLayoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewemaillayoutresponse"></a>
<a id="schema_PreviewEmailLayoutResponse"></a>
<a id="tocSpreviewemaillayoutresponse"></a>
<a id="tocspreviewemaillayoutresponse"></a>

```json
{
  "layout": {
    "html_body": "<html><body>Hello John! Welcome to Acme!</body></html>",
    "text_body": "Hello John! Welcome to Acme!"
  },
  "result": "success"
}
```

A response to an email layout preview request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|A list of errors encountered during rendering. Present when result is "error".|
|layout|object \| null|false|none|The rendered email layout, ready to be previewed.|
|result|string|true|none|The result of the preview.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|success|
|result|error|

<h2 id="tocS_AssetUpload">AssetUpload</h2>
<!-- backwards compatibility -->
<a id="schemaassetupload"></a>
<a id="schema_AssetUpload"></a>
<a id="tocSassetupload"></a>
<a id="tocsassetupload"></a>

```json
{
  "content_length": 20480,
  "expires_in": 300,
  "filename": "logo.png",
  "key": "acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png",
  "mime_type": "image/png",
  "upload_url": "https://account-assets.example/acc_123/proj_123/file.png?X-Amz-Signature=sig"
}
```

A time-limited permission to upload an asset file directly to storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_length|integer|true|none|The byte length the PUT must send as Content-Length.|
|expires_in|integer|true|none|Seconds until the upload URL expires.|
|filename|string \| null|false|none|The filename from the request, when one was sent.|
|key|string|true|none|The storage key to send when creating the asset.|
|mime_type|string|true|none|The MIME type the PUT must send as Content-Type.|
|upload_url|string|true|none|The URL to PUT the file bytes to. The signature covers Content-Type and Content-Length, and the PUT must send both.|

<h2 id="tocS_WorkflowTriggerEvents">WorkflowTriggerEvents</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtriggerevents"></a>
<a id="schema_WorkflowTriggerEvents"></a>
<a id="tocSworkflowtriggerevents"></a>
<a id="tocsworkflowtriggerevents"></a>

```json
{
  "audience_action_type": "member_added",
  "audience_key": "pro-users",
  "type": "audience"
}
```

A trigger event that can automatically trigger a workflow. Can be an audience trigger or a source event trigger.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AudienceTrigger](#schemaaudiencetrigger)|false|none|An audience trigger that automatically triggers the workflow when a user enters an audience. Read more in the [docs](https://docs.knock.app/send-notifications/triggering-workflows/audiences).|
|*oneOf*|[SourceEventTrigger](#schemasourceeventtrigger)|false|none|A source event trigger that triggers the workflow when an event is received from an integration source. Read more in the [docs](https://docs.knock.app/integrations/sources/streams).|

<h2 id="tocS_MessageTypeMultiSelectField">MessageTypeMultiSelectField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypemultiselectfield"></a>
<a id="schema_MessageTypeMultiSelectField"></a>
<a id="tocSmessagetypemultiselectfield"></a>
<a id="tocsmessagetypemultiselectfield"></a>

```json
{
  "key": "multi_select_field",
  "label": "Multi-Select Field",
  "settings": {
    "default": [
      "option1",
      "option3"
    ],
    "description": "A description of the multi-select field",
    "options": [
      {
        "label": "Option 1",
        "value": "option1"
      },
      {
        "label": "Option 2",
        "value": "option2"
      },
      {
        "label": "Option 3",
        "value": "option3"
      }
    ],
    "required": true
  },
  "type": "multi_select"
}
```

A multi-select field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|true|none|Settings for the multi_select field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|multi_select|

<h2 id="tocS_ItemSchemaProperty">ItemSchemaProperty</h2>
<!-- backwards compatibility -->
<a id="schemaitemschemaproperty"></a>
<a id="schema_ItemSchemaProperty"></a>
<a id="tocSitemschemaproperty"></a>
<a id="tocsitemschemaproperty"></a>

```json
{
  "description": "The user's current billing plan.",
  "item_type": null,
  "key": "plan",
  "preview_text": "Enterprise",
  "type": "string",
  "visible": true
}
```

A property definition within an item schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the property.|
|item_type|string \| null|false|none|The referenced item type when the property stores an item reference.|
|key|string|true|none|The property key.|
|preview_text|string \| null|false|none|The property preview text.|
|type|string \| null|false|none|The primitive or referenced item type for the property.|
|visible|boolean|false|none|Whether the property is visible in the schema management UI.|

<h2 id="tocS_UpsertEnvironmentDefaultsRequest">UpsertEnvironmentDefaultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertenvironmentdefaultsrequest"></a>
<a id="schema_UpsertEnvironmentDefaultsRequest"></a>
<a id="tocSupsertenvironmentdefaultsrequest"></a>
<a id="tocsupsertenvironmentdefaultsrequest"></a>

```json
{
  "preference_set": {
    "categories": {
      "marketing": false
    },
    "channel_types": {
      "email": true,
      "sms": false
    },
    "workflows": {
      "new-comment": {
        "channel_types": {
          "push": false
        }
      }
    }
  }
}
```

A request to replace the default settings for an environment. Send `preference_set` as `null` to clear the defaults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preference_set|[EnvironmentDefaultsPreferenceSet](#schemaenvironmentdefaultspreferenceset)|true|none|A preference set applied to every recipient in the environment unless the recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys are not supported, because defaults are always replaced in full.|

<h2 id="tocS_WorkflowWaitForEventMessageEvent">WorkflowWaitForEventMessageEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventmessageevent"></a>
<a id="schema_WorkflowWaitForEventMessageEvent"></a>
<a id="tocSworkflowwaitforeventmessageevent"></a>
<a id="tocsworkflowwaitforeventmessageevent"></a>

```json
{
  "event_key": "interacted",
  "event_type": "message",
  "source_key": "engagement-workflow",
  "source_type": "workflow"
}
```

A message event to wait for from a message source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_key|string|true|none|The message lifecycle event to wait for.|
|event_type|string|true|none|The type of event to wait for.|
|source_key|string|true|none|The key of the message source to scope the wait to.|
|source_type|string|true|none|The type of message source to scope the wait to.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_key|created|
|event_key|queued|
|event_key|sent|
|event_key|not_sent|
|event_key|delivered|
|event_key|delivery_attempted|
|event_key|undelivered|
|event_key|bounced|
|event_key|complaint|
|event_key|read|
|event_key|unread|
|event_key|seen|
|event_key|unseen|
|event_key|archived|
|event_key|unarchived|
|event_key|interacted|
|event_key|link_clicked|
|event_type|message|
|source_type|workflow|
|source_type|broadcast|
|source_type|guide|

<h2 id="tocS_BrandingOverrides">BrandingOverrides</h2>
<!-- backwards compatibility -->
<a id="schemabrandingoverrides"></a>
<a id="schema_BrandingOverrides"></a>
<a id="tocSbrandingoverrides"></a>
<a id="tocsbrandingoverrides"></a>

```json
{
  "dark_icon_url": "https://cdn.example.com/icon-dark.png",
  "dark_logo_url": "https://cdn.example.com/logo-dark.png",
  "dark_primary_color": "#1A1A2E",
  "dark_primary_color_contrast": "#FFFFFF",
  "icon_url": "https://cdn.example.com/icon-light.png",
  "logo_url": "https://cdn.example.com/logo-light.png",
  "primary_color": "#4F46E5",
  "primary_color_contrast": "#FFFFFF",
  "primary_text_color": "#111827",
  "secondary_text_color": "#6B7280"
}
```

Overrides to apply against account branding variables in an email layout, including dark mode-specific values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dark_icon_url|string \| null|false|none|A URL for a dark mode icon override.|
|dark_logo_url|string \| null|false|none|A URL for a dark mode logo override.|
|dark_primary_color|string \| null|false|none|The dark mode primary brand color in hex format.|
|dark_primary_color_contrast|string \| null|false|none|The dark mode contrast color for the primary brand color in hex format.|
|icon_url|string \| null|false|none|A URL for a light mode icon override.|
|logo_url|string \| null|false|none|A URL for a light mode logo override.|
|primary_color|string \| null|false|none|The light mode primary brand color in hex format.|
|primary_color_contrast|string \| null|false|none|The light mode contrast color for the primary brand color in hex format.|
|primary_text_color|string \| null|false|none|The light mode primary text color in hex format.|
|secondary_text_color|string \| null|false|none|The light mode secondary text color in hex format.|

<h2 id="tocS_AuditLogLocation">AuditLogLocation</h2>
<!-- backwards compatibility -->
<a id="schemaauditloglocation"></a>
<a id="schema_AuditLogLocation"></a>
<a id="tocSauditloglocation"></a>
<a id="tocsauditloglocation"></a>

```json
{
  "city": "New York",
  "country_code": "US",
  "region_code": "NY"
}
```

The location derived from the request IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string \| null|false|none|The city.|
|country_code|string \| null|false|none|The country code.|
|region_code|string \| null|false|none|The region code.|

<h2 id="tocS_SourceEventTrigger">SourceEventTrigger</h2>
<!-- backwards compatibility -->
<a id="schemasourceeventtrigger"></a>
<a id="schema_SourceEventTrigger"></a>
<a id="tocSsourceeventtrigger"></a>
<a id="tocssourceeventtrigger"></a>

```json
{
  "event_name": "user.signed_up",
  "event_type": "track",
  "integration_source_id": "123e4567-e89b-12d3-a456-426614174000",
  "trigger_parameters": {
    "data": "{{ event.data }}",
    "recipients": "[{{ event.userId }}]"
  },
  "type": "source_event"
}
```

A source event trigger that triggers the workflow when an event is received from an integration source. Read more in the [docs](https://docs.knock.app/integrations/sources/streams).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_name|string|true|none|The name of the event that triggers the workflow.|
|event_type|string|true|none|The type of event. Currently only 'track' is supported.|
|integration_source_id|string(uuid)|true|none|The ID of the integration source that emits the event.|
|trigger_parameters|[TriggerParameters](#schematriggerparameters)|false|none|Optional parameters to customize the triggered workflow run.|
|type|string|true|none|The trigger event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|track|
|type|source_event|

<h2 id="tocS_MemberUser">MemberUser</h2>
<!-- backwards compatibility -->
<a id="schemamemberuser"></a>
<a id="schema_MemberUser"></a>
<a id="tocSmemberuser"></a>
<a id="tocsmemberuser"></a>

```json
{
  "avatar_url": "https://www.gravatar.com/avatar/abc123",
  "created_at": "2024-01-10T08:00:00Z",
  "email": "jane@example.com",
  "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
  "name": "Jane Doe",
  "updated_at": "2024-06-18T12:00:00Z"
}
```

Information about a user within the Knock dashboard. Not to be confused with an external user (recipient) of a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string \| null|false|none|The URL of the user's avatar image.|
|created_at|string(date-time)|true|none|The timestamp of when the user was created.|
|email|string(email)|true|none|The user's email address.|
|id|string(uuid)|true|none|The user's unique identifier.|
|name|string \| null|false|none|The user's display name.|
|updated_at|string(date-time)|true|none|The timestamp of when the user was last updated.|

<h2 id="tocS_WrappedWorkflowResponse">WrappedWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedworkflowresponse"></a>
<a id="schema_WrappedWorkflowResponse"></a>
<a id="tocSwrappedworkflowresponse"></a>
<a id="tocswrappedworkflowresponse"></a>

```json
{
  "workflow": {
    "active": false,
    "categories": [
      "marketing",
      "black-friday"
    ],
    "conditions": {
      "all": [
        {
          "argument": "admin",
          "operator": "equal_to",
          "variable": "recipient.role"
        }
      ]
    },
    "created_at": "2022-12-16T19:07:50.027113Z",
    "description": "This is a dummy workflow for demo purposes.",
    "environment": "development",
    "key": "december-16-demo",
    "name": "december-16-demo",
    "settings": {
      "override_preferences": true
    },
    "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
    "steps": [
      {
        "channel_key": "in-app-feed",
        "channel_type": "in_app_feed",
        "description": "Main in-app feed",
        "name": "In-app step",
        "ref": "in_app_feed_1",
        "template": {
          "action_url": "{{ data.onboarding_url }}",
          "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
        },
        "type": "channel"
      },
      {
        "ref": "delay_1",
        "settings": {
          "delay_for": {
            "unit": "hours",
            "value": 1
          }
        },
        "type": "delay"
      },
      {
        "channel_key": "postmark",
        "channel_type": "email",
        "ref": "email_1",
        "template": {
          "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
          "settings": {
            "layout_key": "default"
          },
          "subject": "Welcome to {{ vars.app_name }}!"
        },
        "type": "channel"
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "trigger_data_json_schema": {
      "properties": {
        "onboarding_url": {
          "type": "string"
        }
      },
      "required": [
        "onboarding_url"
      ],
      "type": "object"
    },
    "trigger_events": [
      {
        "audience_action_type": "member_added",
        "audience_key": "pro-users",
        "type": "audience"
      }
    ],
    "trigger_frequency": "every_trigger",
    "updated_at": "2023-02-08T22:15:19.846681Z",
    "valid": true
  }
}
```

Wraps the Workflow response under the `workflow` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|A workflow object. Read more in the [docs](https://docs.knock.app/concepts/workflows).|

<h2 id="tocS_PaginatedMessageTypeResponse">PaginatedMessageTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmessagetyperesponse"></a>
<a id="schema_PaginatedMessageTypeResponse"></a>
<a id="tocSpaginatedmessagetyperesponse"></a>
<a id="tocspaginatedmessagetyperesponse"></a>

```json
{
  "entries": [
    {
      "archived_at": null,
      "created_at": "2021-01-01T00:00:00Z",
      "deleted_at": null,
      "description": "Email message type",
      "environment": "development",
      "icon_name": "email",
      "key": "email",
      "name": "Email",
      "owner": "user",
      "preview": "<div>Hello, world!</div>",
      "semver": "1.0.0",
      "sha": "1234567890",
      "updated_at": "2021-01-01T00:00:00Z",
      "valid": true,
      "variants": [
        {
          "fields": [
            {
              "key": "text_field",
              "label": "My text field",
              "settings": {
                "description": "A description of the text field",
                "max_length": 100,
                "min_length": 10,
                "required": true
              },
              "type": "text"
            }
          ],
          "key": "default",
          "name": "Default"
        }
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of MessageType. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[MessageType](#schemamessagetype)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_DynamicAudience">DynamicAudience</h2>
<!-- backwards compatibility -->
<a id="schemadynamicaudience"></a>
<a id="schema_DynamicAudience"></a>
<a id="tocSdynamicaudience"></a>
<a id="tocsdynamicaudience"></a>

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "description": "Customers who signed up in the last 30 days.",
  "environment": "development",
  "key": "new-customers",
  "name": "New customers",
  "segments": [
    {
      "conditions": [
        {
          "argument": "30_days_ago",
          "operator": "greater_than",
          "property": "recipient.created_at"
        }
      ]
    }
  ],
  "sha": "a1b2c3d4e5f6",
  "type": "dynamic",
  "updated_at": "2024-06-20T14:45:00Z"
}
```

A dynamic audience where membership is determined by segment conditions evaluated at runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the audience was created.|
|description|string \| null|false|none|A description of the audience.|
|environment|string|true|none|The slug of the environment in which the audience exists.|
|key|string|true|none|The unique key of the audience.|
|name|string|true|none|The name of the audience.|
|segments|[object]|true|none|A list of segments that define the dynamic audience membership criteria. Each segment contains one or more conditions joined by AND. Multiple segments are joined by OR.|
|sha|string \| null|false|none|The SHA hash of the audience data.|
|type|string|true|none|The type of audience. Always `dynamic` for dynamic audiences.|
|updated_at|string(date-time)|true|none|The timestamp of when the audience was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dynamic|

<h2 id="tocS_ExchangeForApiKeyResponse">ExchangeForApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeforapikeyresponse"></a>
<a id="schema_ExchangeForApiKeyResponse"></a>
<a id="tocSexchangeforapikeyresponse"></a>
<a id="tocsexchangeforapikeyresponse"></a>

```json
{
  "api_key": "sk_1234567890"
}
```

Returns an API key that can be used to make requests to the public API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|The API key exchanged from the service token, of the requested `type`.|

<h2 id="tocS_ChannelGroup">ChannelGroup</h2>
<!-- backwards compatibility -->
<a id="schemachannelgroup"></a>
<a id="schema_ChannelGroup"></a>
<a id="tocSchannelgroup"></a>
<a id="tocschannelgroup"></a>

```json
{
  "channel_rules": [
    {
      "channel": {
        "archived_at": null,
        "created_at": "2021-01-01T00:00:00Z",
        "custom_icon_url": null,
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "key": "my-sendgrid-channel",
        "name": "My Sendgrid Channel",
        "provider": "sendgrid",
        "type": "email",
        "updated_at": "2021-01-01T00:00:00Z",
        "visible_in": [
          "workflow",
          "broadcast"
        ]
      },
      "created_at": "2021-01-01T00:00:00Z",
      "index": 0,
      "rule_type": "always",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "channel_type": "push",
  "created_at": "2021-01-01T00:00:00Z",
  "key": "push-group",
  "name": "Push Notification Group",
  "operator": "any",
  "source": "user",
  "updated_at": "2021-01-01T00:00:00Z",
  "visible_in": [
    "workflow",
    "broadcast"
  ]
}
```

A group of channels with rules for when they are applicable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the channel group was archived (soft deleted).|
|channel_rules|[[ChannelGroupRule](#schemachannelgrouprule)]|true|none|Rules for determining which channels should be used.|
|channel_type|string|true|none|The type of channels contained in this group.|
|created_at|string(date-time)|true|none|The timestamp of when the channel group was created.|
|key|string|true|none|Unique identifier for the channel group within a project.|
|name|string|true|none|The human-readable name of the channel group.|
|operator|string|true|none|Determines how the channel rules are applied ('any' means any rule can match, 'all' means all rules must match).|
|source|string|true|none|Whether this channel group was created by the system or a user. Only user created channel groups can be modified.|
|updated_at|string(date-time)|true|none|The timestamp of when the channel group was last updated.|
|visible_in|[string]|false|none|The resources where this channel group is visible as a step destination (e.g. workflow, broadcast).|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|email|
|channel_type|in_app|
|channel_type|in_app_feed|
|channel_type|in_app_guide|
|channel_type|sms|
|channel_type|push|
|channel_type|chat|
|channel_type|http|
|operator|any|
|operator|all|
|source|system|
|source|user|
|visible_in|workflow|
|visible_in|broadcast|

<h2 id="tocS_DynamicAudienceRequest">DynamicAudienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadynamicaudiencerequest"></a>
<a id="schema_DynamicAudienceRequest"></a>
<a id="tocSdynamicaudiencerequest"></a>
<a id="tocsdynamicaudiencerequest"></a>

```json
{
  "description": "Users on the premium plan",
  "name": "Premium users",
  "segments": [
    {
      "conditions": [
        {
          "argument": "premium",
          "operator": "equal_to",
          "property": "recipient.plan"
        }
      ]
    }
  ],
  "type": "dynamic"
}
```

Request body for creating/updating a dynamic audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|A description of the audience.|
|name|string|true|none|The name of the audience.|
|segments|[object]|false|none|A list of segments that define the dynamic audience membership criteria. Each segment contains one or more conditions joined by AND. Multiple segments are joined by OR.|
|type|string|true|none|The type of audience. Set to `dynamic` for dynamic audiences.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dynamic|

<h2 id="tocS_ChannelGroupRequest">ChannelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelgrouprequest"></a>
<a id="schema_ChannelGroupRequest"></a>
<a id="tocSchannelgrouprequest"></a>
<a id="tocschannelgrouprequest"></a>

```json
{
  "channel_rules": [
    {
      "channel_key": "push-fcm",
      "index": 0,
      "rule_type": "always"
    }
  ],
  "channel_type": "push",
  "name": "Push Notification Group",
  "operator": "any"
}
```

A request to create or update a channel group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_rules|[[ChannelGroupRuleRequest](#schemachannelgrouprulerequest)]|false|none|Rules for determining which channels should be used.|
|channel_type|string|true|none|The type of channels contained in this group.|
|name|string|true|none|The human-readable name of the channel group.|
|operator|string|false|none|Determines how the channel rules are applied ('any' means any rule can match, 'all' means all rules must match). Defaults to 'any'.|
|visible_in|[string]|false|none|Optional. Where the channel group is visible as a step destination. Defaults to both workflow and broadcast when creating; omitted on update preserves the existing value.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|email|
|channel_type|in_app|
|channel_type|in_app_feed|
|channel_type|in_app_guide|
|channel_type|sms|
|channel_type|push|
|channel_type|chat|
|channel_type|http|
|operator|any|
|operator|all|
|visible_in|workflow|
|visible_in|broadcast|

<h2 id="tocS_GuideScheduledActivationParams">GuideScheduledActivationParams</h2>
<!-- backwards compatibility -->
<a id="schemaguidescheduledactivationparams"></a>
<a id="schema_GuideScheduledActivationParams"></a>
<a id="tocSguidescheduledactivationparams"></a>
<a id="tocsguidescheduledactivationparams"></a>

```json
{
  "from": "2024-03-20T10:00:00Z",
  "until": "2024-03-21T10:00:00Z"
}
```

A request to schedule the activation of a guide. At least one of from or until must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|false|none|When to activate the guide. If provided, the guide will be scheduled to activate at this time. Must be in ISO 8601 UTC format.|
|until|string(date-time)|false|none|When to deactivate the guide. If provided, the guide will be scheduled to deactivate at this time. Must be in ISO 8601 UTC format.|

<h2 id="tocS_PreviewWorkflowTemplateRequest">PreviewWorkflowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreviewworkflowtemplaterequest"></a>
<a id="schema_PreviewWorkflowTemplateRequest"></a>
<a id="tocSpreviewworkflowtemplaterequest"></a>
<a id="tocspreviewworkflowtemplaterequest"></a>

```json
{
  "actor": "dnedry",
  "data": {
    "park_id": 1
  },
  "recipient": "dnedry",
  "tenant": "acme-corp"
}
```

A request to preview a workflow template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|false|none|The actor to reference in the the workflow run.|
|data|object|false|none|The data to pass to the workflow template for rendering.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A recipient reference, used when referencing a recipient by either their ID (for a user), or by a reference for an object.|
|tenant|string \| null|false|none|The tenant to associate the workflow with. Must not contain whitespace.|

<h2 id="tocS_WorkflowAIAgentStep">WorkflowAIAgentStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowaiagentstep"></a>
<a id="schema_WorkflowAIAgentStep"></a>
<a id="tocSworkflowaiagentstep"></a>
<a id="tocsworkflowaiagentstep"></a>

```json
{
  "name": "AI agent step",
  "ref": "ai_agent_step",
  "settings": {
    "model": "anthropic:claude-haiku-4-5",
    "request_prompt": "You are a helpful assistant.",
    "response_type": "text"
  },
  "type": "ai_agent"
}
```

An AI agent function step. Fetches data from an AI model and merges it into the workflow's `data` scope for use in later steps. Supports Liquid templating in the prompt. Read more in the [docs](https://docs.knock.app/designing-workflows/ai-agent-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the AI agent step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ai_agent|

<h2 id="tocS_MessageTypeJsonField">MessageTypeJsonField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypejsonfield"></a>
<a id="schema_MessageTypeJsonField"></a>
<a id="tocSmessagetypejsonfield"></a>
<a id="tocsmessagetypejsonfield"></a>

```json
{
  "key": "json_field",
  "label": "JSON Field",
  "settings": {
    "default": {
      "key": "value"
    },
    "description": "A description of the JSON field",
    "placeholder": "A placeholder for the JSON field",
    "required": true,
    "schema": {
      "properties": {
        "key": {
          "type": "string"
        }
      },
      "required": [
        "key"
      ]
    }
  },
  "type": "json"
}
```

A JSON field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the json field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|json|

<h2 id="tocS_TagsResponse">TagsResponse</h2>
<!-- backwards compatibility -->
<a id="schematagsresponse"></a>
<a id="schema_TagsResponse"></a>
<a id="tocStagsresponse"></a>
<a id="tocstagsresponse"></a>

```json
{
  "entries": [
    {
      "color": "#3B82F6",
      "created_at": "2021-01-01T00:00:00Z",
      "description": "Billing-related workflows",
      "name": "billing",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ]
}
```

A list of tags in the project's catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Tag](#schematag)]|true|none|Tags, ordered by name.|

<h2 id="tocS_WrappedTranslationRequestRequest">WrappedTranslationRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedtranslationrequestrequest"></a>
<a id="schema_WrappedTranslationRequestRequest"></a>
<a id="tocSwrappedtranslationrequestrequest"></a>
<a id="tocswrappedtranslationrequestrequest"></a>

```json
{
  "translation": {
    "content": "{\"hello\":\"Hello, world!\"}",
    "format": "json"
  }
}
```

Wraps the TranslationRequest request under the translation key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|[TranslationRequest](#schematranslationrequest)|true|none|A translation object with a content attribute used to update or create a translation.|

<h2 id="tocS_ChannelEnvironmentSettings">ChannelEnvironmentSettings</h2>
<!-- backwards compatibility -->
<a id="schemachannelenvironmentsettings"></a>
<a id="schema_ChannelEnvironmentSettings"></a>
<a id="tocSchannelenvironmentsettings"></a>
<a id="tocschannelenvironmentsettings"></a>

```json
{
  "channel_settings": {
    "from_address": "hello@example.com",
    "from_name": "Example Inc"
  },
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "is_sandbox": false,
  "is_valid": true,
  "provider_settings": {
    "api_key": "{{ vars.sendgrid_api_key }}",
    "check_delivery_status": true,
    "link_tracking": true,
    "open_tracking": true
  }
}
```

Environment-specific settings for a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_settings|object \| null|false|none|Channel-type-specific settings (e.g., from_address for email). Structure varies by channel type.|
|id|string(uuid)|true|none|The unique identifier for these environment settings.|
|is_sandbox|boolean|true|none|Whether the channel is in sandbox mode for this environment. Sandbox mode may prevent actual message delivery.|
|is_valid|boolean|true|none|Whether the channel configuration is valid and ready to send messages in this environment.|
|provider_settings|object \| null|false|none|Provider-specific settings (e.g., API keys, credentials). Structure varies by provider. Secret values are obfuscated unless they are Liquid templates.|

<h2 id="tocS_PaginatedWorkflowResponse">PaginatedWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedworkflowresponse"></a>
<a id="schema_PaginatedWorkflowResponse"></a>
<a id="tocSpaginatedworkflowresponse"></a>
<a id="tocspaginatedworkflowresponse"></a>

```json
{
  "entries": [
    {
      "active": false,
      "categories": [
        "marketing",
        "black-friday"
      ],
      "conditions": {
        "all": [
          {
            "argument": "admin",
            "operator": "equal_to",
            "variable": "recipient.role"
          }
        ]
      },
      "created_at": "2022-12-16T19:07:50.027113Z",
      "description": "This is a dummy workflow for demo purposes.",
      "environment": "development",
      "key": "december-16-demo",
      "name": "december-16-demo",
      "settings": {
        "override_preferences": true
      },
      "sha": "f7e9d3b2a1c8e6m4k5j7h9g0i2l3n4p6q8r0t1u3v5w7x9y",
      "steps": [
        {
          "channel_key": "in-app-feed",
          "channel_type": "in_app_feed",
          "description": "Main in-app feed",
          "name": "In-app step",
          "ref": "in_app_feed_1",
          "template": {
            "action_url": "{{ data.onboarding_url }}",
            "markdown_body": "Hello **{{ recipient.name }}**. Click here to get started."
          },
          "type": "channel"
        },
        {
          "ref": "delay_1",
          "settings": {
            "delay_for": {
              "unit": "hours",
              "value": 1
            }
          },
          "type": "delay"
        },
        {
          "channel_key": "postmark",
          "channel_type": "email",
          "ref": "email_1",
          "template": {
            "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.onboarding_url }}'>Get started here</a>.</p>",
            "settings": {
              "layout_key": "default"
            },
            "subject": "Welcome to {{ vars.app_name }}!"
          },
          "type": "channel"
        }
      ],
      "tags": [
        "onboarding",
        "growth"
      ],
      "trigger_data_json_schema": {
        "properties": {
          "onboarding_url": {
            "type": "string"
          }
        },
        "required": [
          "onboarding_url"
        ],
        "type": "object"
      },
      "trigger_events": [
        {
          "audience_action_type": "member_added",
          "audience_key": "pro-users",
          "type": "audience"
        }
      ],
      "trigger_frequency": "every_trigger",
      "updated_at": "2023-02-08T22:15:19.846681Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Workflow. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Workflow](#schemaworkflow)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WorkflowThrottleStep">WorkflowThrottleStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowthrottlestep"></a>
<a id="schema_WorkflowThrottleStep"></a>
<a id="tocSworkflowthrottlestep"></a>
<a id="tocsworkflowthrottlestep"></a>

```json
{
  "name": "Throttle step",
  "ref": "throttle_step",
  "settings": {
    "throttle_key": "data.project_id",
    "throttle_limit": 1,
    "throttle_window": {
      "unit": "minutes",
      "value": 10
    }
  },
  "type": "throttle"
}
```

A throttle function step. Read more in the [docs](https://docs.knock.app/designing-workflows/throttle-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the throttle step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|throttle|

<h2 id="tocS_PaginatedMemberResponse">PaginatedMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmemberresponse"></a>
<a id="schema_PaginatedMemberResponse"></a>
<a id="tocSpaginatedmemberresponse"></a>
<a id="tocspaginatedmemberresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2024-01-15T10:30:00Z",
      "id": "d4b8e8e0-1234-5678-9abc-def012345678",
      "role": "admin",
      "updated_at": "2024-06-20T14:45:00Z",
      "user": {
        "avatar_url": "https://www.gravatar.com/avatar/abc123",
        "created_at": "2024-01-10T08:00:00Z",
        "email": "jane@example.com",
        "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
        "name": "Jane Doe",
        "updated_at": "2024-06-18T12:00:00Z"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Member. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Member](#schemamember)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_PaginatedAuditLogResponse">PaginatedAuditLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedauditlogresponse"></a>
<a id="schema_PaginatedAuditLogResponse"></a>
<a id="tocSpaginatedauditlogresponse"></a>
<a id="tocspaginatedauditlogresponse"></a>

```json
{
  "entries": [
    {
      "action": "workflow.updated",
      "actor": {
        "email": "ada@example.com",
        "id": "5c0e1a2b-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
        "name": "Ada Lovelace"
      },
      "agent_session_id": null,
      "environment": "development",
      "id": "8f1c0b2e-6a4d-4f1a-9c3e-1b2d3e4f5a6b",
      "inserted_at": "2026-10-15T18:04:00Z",
      "ip_address": "203.0.113.10",
      "location": {
        "city": "New York",
        "country_code": "US",
        "region_code": "NY"
      },
      "project_id": "11111111-2222-3333-4444-555555555555",
      "request_id": "req_01HZX",
      "request_source": "dashboard",
      "resource": {
        "id": "99999999-aaaa-bbbb-cccc-dddddddddddd",
        "identifier": "welcome",
        "type": "workflow"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of AuditLog. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[AuditLog](#schemaauditlog)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_SourcesResponse">SourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcesresponse"></a>
<a id="schema_SourcesResponse"></a>
<a id="tocSsourcesresponse"></a>
<a id="tocssourcesresponse"></a>

```json
{
  "entries": [
    {
      "custom_image_url": null,
      "description": "Receives webhook events",
      "key": "webhook",
      "name": "Webhook"
    }
  ]
}
```

Sources connected to the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|true|none|Sources.|

<h2 id="tocS_AuditLogResource">AuditLogResource</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogresource"></a>
<a id="schema_AuditLogResource"></a>
<a id="tocSauditlogresource"></a>
<a id="tocsauditlogresource"></a>

```json
{
  "id": "99999999-aaaa-bbbb-cccc-dddddddddddd",
  "identifier": "welcome",
  "type": "workflow"
}
```

The resource the action changed. `type` and `identifier` follow the commit resource for promotable resources, including `reusable_request`. `identifier` is null when the resource has no public handle or the row no longer exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The stored id of the resource. External user and object ids are not UUIDs.|
|identifier|string \| null|false|none|The public handle for the resource, such as a key, slug, email, or `locale/namespace` for a translation.|
|type|string|true|none|The type of the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|
|type|account_user|
|type|api_key|
|type|asset|
|type|audience|
|type|broadcast|
|type|channel|
|type|channel_group|
|type|email_layout|
|type|environment|
|type|environment_defaults|
|type|event_action_mapping|
|type|external_audience|
|type|goal|
|type|guide|
|type|guide_group|
|type|invite|
|type|member|
|type|message_type|
|type|object|
|type|partial|
|type|permission_group|
|type|preference_category|
|type|preference_center|
|type|preference_center_domain|
|type|reusable_request|
|type|service_token|
|type|signing_key|
|type|source|
|type|subscription|
|type|tag|
|type|translation|
|type|user|
|type|variable|
|type|view|
|type|webhook|
|type|workflow|
|type|unknown|

<h2 id="tocS_WorkflowBranchStep">WorkflowBranchStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowbranchstep"></a>
<a id="schema_WorkflowBranchStep"></a>
<a id="tocSworkflowbranchstep"></a>
<a id="tocsworkflowbranchstep"></a>

```json
{
  "branches": [
    {
      "conditions": {
        "all": [
          {
            "argument": "pro",
            "operator": "equal_to",
            "variable": "recipient.plan_type"
          }
        ]
      },
      "name": "Pro plan",
      "steps": [],
      "terminates": false
    },
    {
      "conditions": null,
      "name": "Default",
      "steps": [],
      "terminates": false
    }
  ],
  "description": "Branch description",
  "name": "Branch 1",
  "ref": "branch_1",
  "type": "branch"
}
```

A branch function step. Read more in the [docs](https://docs.knock.app/designing-workflows/branch-function).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[object]|true|none|A list of workflow branches to be evaluated.|
|description|string|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|type|string|true|none|The type of step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|branch|

<h2 id="tocS_MessageTypeTextareaField">MessageTypeTextareaField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypetextareafield"></a>
<a id="schema_MessageTypeTextareaField"></a>
<a id="tocSmessagetypetextareafield"></a>
<a id="tocsmessagetypetextareafield"></a>

```json
{
  "key": "textarea_field",
  "label": "Textarea Field",
  "settings": {
    "description": "A description of the textarea field",
    "max_length": 1000,
    "min_length": 10,
    "placeholder": "A placeholder for the textarea field",
    "required": true
  },
  "type": "textarea"
}
```

A textarea field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the textarea field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|textarea|

<h2 id="tocS_PaginatedWarehouseResponse">PaginatedWarehouseResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwarehouseresponse"></a>
<a id="schema_PaginatedWarehouseResponse"></a>
<a id="tocSpaginatedwarehouseresponse"></a>
<a id="tocspaginatedwarehouseresponse"></a>

```json
{
  "entries": [
    {
      "connection_error": null,
      "connection_settings": {
        "database": "ANALYTICS",
        "host": "acme.snowflakecomputing.com",
        "port": 443,
        "username": "KNOCK"
      },
      "connection_status": "connected",
      "created_at": "2026-10-01T12:00:00Z",
      "key": "analytics",
      "last_tested_at": "2026-11-01T12:00:00Z",
      "name": "Analytics",
      "type": "snowflake",
      "updated_at": "2026-11-01T12:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Warehouse. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Warehouse](#schemawarehouse)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_MessageTypeButtonField">MessageTypeButtonField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypebuttonfield"></a>
<a id="schema_MessageTypeButtonField"></a>
<a id="tocSmessagetypebuttonfield"></a>
<a id="tocsmessagetypebuttonfield"></a>

```json
{
  "action": {
    "key": "action",
    "label": "Button Action",
    "settings": {
      "description": "A description of the text field in the button action",
      "required": true
    },
    "type": "text"
  },
  "key": "button_field",
  "label": "Button Field",
  "settings": {
    "description": "A description of the button field",
    "required": true
  },
  "text": {
    "key": "text",
    "label": "Button Text",
    "settings": {
      "description": "A description of the text field in the button",
      "required": true
    },
    "type": "text"
  },
  "type": "button"
}
```

A button field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[MessageTypeTextField](#schemamessagetypetextfield)|true|none|A text field used in a message type.|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the button field.|
|text|[MessageTypeTextField](#schemamessagetypetextfield)|true|none|A text field used in a message type.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|button|

<h2 id="tocS_EmailImageBlock">EmailImageBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemailimageblock"></a>
<a id="schema_EmailImageBlock"></a>
<a id="tocSemailimageblock"></a>
<a id="tocsemailimageblock"></a>

```json
{
  "alt": "Example image",
  "layout_attrs": {
    "horizontal_align": "center",
    "padding_bottom": 4,
    "padding_left": 0,
    "padding_right": 0,
    "padding_top": 4
  },
  "style_attrs": {
    "width": "25%"
  },
  "type": "image",
  "url": "https://example.com/image.jpg"
}
```

An image block in an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string \| null|false|none|Optional action URL for the image.|
|alt|string \| null|false|none|Alt text for the image.|
|id|string(uuid)|false|none|The ID of the block.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|style_attrs|object|false|none|The style attributes of the image.|
|type|string|true|none|The type of the block.|
|url|string(uri)|true|none|The URL of the image to display.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_Partial">Partial</h2>
<!-- backwards compatibility -->
<a id="schemapartial"></a>
<a id="schema_Partial"></a>
<a id="tocSpartial"></a>
<a id="tocspartial"></a>

```json
{
  "content": "<p>Hello, world!</p>",
  "description": "This is a test partial",
  "environment": "development",
  "icon_name": "icon-name",
  "input_schema": [
    {
      "key": "text_field",
      "label": "My text field",
      "settings": {
        "description": "A description of the text field",
        "max_length": 100,
        "min_length": 10,
        "required": true
      },
      "type": "text"
    }
  ],
  "inserted_at": "2021-01-01T00:00:00Z",
  "key": "my-partial",
  "name": "My Partial",
  "type": "html",
  "updated_at": "2021-01-01T00:00:00Z",
  "valid": true,
  "visual_block_enabled": true
}
```

A partial is a reusable piece of content that can be used in a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The partial content.|
|description|string|false|none|An arbitrary string attached to a partial object. Useful for adding notes about the partial for internal purposes. Maximum of 280 characters allowed.|
|environment|string|false|none|The slug of the environment in which the partial exists.|
|icon_name|string|false|none|The name of the icon to be used in the visual editor.|
|input_schema|[object]|false|none|The field types available for the partial.|
|inserted_at|string(date-time)|true|none|The timestamp of when the partial was created.|
|key|string|true|none|The unique key string for the partial object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the partial. Must be at maximum 255 characters in length.|
|type|string|true|none|The partial type. One of 'html', 'json', 'markdown', 'text'.|
|updated_at|string(date-time)|true|none|The timestamp of when the partial was last updated.|
|valid|boolean|true|none|Whether the partial and its content are in a valid state.|
|visual_block_enabled|boolean|false|none|Indicates whether the partial can be used in the visual editor. Only applies to HTML partials.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html|
|type|text|
|type|json|
|type|markdown|

<h2 id="tocS_HeadlessAccountStatus">HeadlessAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaheadlessaccountstatus"></a>
<a id="schema_HeadlessAccountStatus"></a>
<a id="tocSheadlessaccountstatus"></a>
<a id="tocsheadlessaccountstatus"></a>

```json
{
  "expires_at": "2026-10-29T12:00:00.000Z",
  "status": "unclaimed"
}
```

Where a headless account stands, from the point of view of the agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time) \| null|true|none|When an unclaimed account is deleted, or null once it has been claimed.|
|status|string|true|none|Whether the account is still being set up, waiting to be claimed, claimed by a person, or expired because its claim window closed or its setup never finished.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|provisioning|
|status|unclaimed|
|status|claimed|
|status|expired|

<h2 id="tocS_WebhookTemplate">WebhookTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktemplate"></a>
<a id="schema_WebhookTemplate"></a>
<a id="tocSwebhooktemplate"></a>
<a id="tocswebhooktemplate"></a>

```json
{
  "body": null,
  "headers": [
    {
      "key": "X-API-Key",
      "value": "1234567890"
    }
  ],
  "method": "get",
  "query_params": [
    {
      "key": "key",
      "value": "value"
    }
  ],
  "url": "https://example.com"
}
```

A webhook template. By default, a webhook step will use the request settings you configured in your webhook channel. You can override this as you see fit on a per-step basis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string \| null|false|none|The body of the request. Only used for POST or PUT requests.|
|headers|[object]|false|none|A list of key-value pairs for the request headers. Each object should contain key and value fields with string values.|
|method|string|true|none|The HTTP method of the webhook.|
|query_params|[object]|false|none|A list of key-value pairs for the request query params. Each object should contain key and value fields with string values.|
|url|string|true|none|The URL of the webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|get|
|method|post|
|method|put|
|method|delete|
|method|patch|

<h2 id="tocS_EmailLayout">EmailLayout</h2>
<!-- backwards compatibility -->
<a id="schemaemaillayout"></a>
<a id="schema_EmailLayout"></a>
<a id="tocSemaillayout"></a>
<a id="tocsemaillayout"></a>

```json
{
  "branding_overrides": {
    "dark_logo_url": "https://cdn.example.com/logo-dark.png",
    "dark_primary_color": "#1A1A2E",
    "dark_primary_color_contrast": "#FFFFFF",
    "primary_color": "#4F46E5",
    "primary_color_contrast": "#FFFFFF"
  },
  "created_at": "2021-01-01T00:00:00Z",
  "environment": "development",
  "footer_links": [
    {
      "text": "Example",
      "url": "http://example.com"
    }
  ],
  "html_layout": "<html><body>Hello, world!</body></html>",
  "key": "transactional",
  "name": "Transactional",
  "sha": "1234567890",
  "text_layout": "Hello, world!",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A versioned email layout used within an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branding_overrides|[BrandingOverrides](#schemabrandingoverrides)|false|none|Overrides to apply against account branding variables in an email layout, including dark mode-specific values.|
|created_at|string(date-time)|true|none|The timestamp of when the email layout was created.|
|environment|string|false|none|The environment of the email layout.|
|footer_links|[object]|false|none|A list of one or more items to show in the footer of the email layout.|
|html_layout|string|true|none|The complete HTML or MJML content of the email layout.|
|is_mjml|boolean|false|none|Whether this layout uses MJML format. When true, html_layout must contain <mjml> tags.|
|key|string|true|none|The unique key for this email layout.|
|name|string|true|none|The human-readable name of this email layout.|
|sha|string|true|none|The SHA of the email layout.|
|text_layout|string|true|none|The complete plaintext content of the email layout.|
|updated_at|string(date-time)|false|none|The timestamp of when the email layout was last updated.|

<h2 id="tocS_GoalRequest">GoalRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoalrequest"></a>
<a id="schema_GoalRequest"></a>
<a id="tocSgoalrequest"></a>
<a id="tocsgoalrequest"></a>

```json
{
  "condition": {
    "event": {
      "event_key": "order.completed",
      "event_type": "integration_source",
      "integration_source_key": "stripe",
      "recipient_path": "body.userId"
    },
    "match_conditions": [
      {
        "conditions": [
          {
            "argument": "100",
            "operator": "greater_than",
            "variable": "event.amount"
          }
        ],
        "operator": "and"
      }
    ]
  },
  "description": "Tracks when a trial user converts to paid",
  "name": "Trial Conversion"
}
```

A goal payload for upsert or validate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoalCondition](#schemagoalcondition)|true|none|A goal condition consisting of a polymorphic event and optional match conditions.|
|description|string \| null|false|none|An optional description for the goal. Maximum of 280 characters allowed.|
|name|string|true|none|A name for the goal. Must be at minimum 1 character and at maximum 255 characters in length.|

<h2 id="tocS_WrappedReusableRequestRequestRequest">WrappedReusableRequestRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedreusablerequestrequestrequest"></a>
<a id="schema_WrappedReusableRequestRequestRequest"></a>
<a id="tocSwrappedreusablerequestrequestrequest"></a>
<a id="tocswrappedreusablerequestrequestrequest"></a>

```json
{
  "reusable_request": {
    "description": "Loads a user from the API.",
    "name": "Fetch user",
    "settings": {
      "body": null,
      "headers": [
        {
          "key": "X-API-Key",
          "value": "1234567890"
        }
      ],
      "method": "get",
      "query_params": [
        {
          "key": "key",
          "value": "value"
        }
      ],
      "response_path": null,
      "signing_key": null,
      "url": "https://example.com"
    },
    "type": "http_fetch"
  }
}
```

Wraps the ReusableRequestRequest request under the reusable_request key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reusable_request|[ReusableRequestRequest](#schemareusablerequestrequest)|true|none|A reusable request object with attributes to update or create a reusable request.|

<h2 id="tocS_TriggerParameters">TriggerParameters</h2>
<!-- backwards compatibility -->
<a id="schematriggerparameters"></a>
<a id="schema_TriggerParameters"></a>
<a id="tocStriggerparameters"></a>
<a id="tocstriggerparameters"></a>

```json
{
  "actor": "{{ event.actorId }}",
  "data": "{{ event.data }}",
  "recipients": "[{{ event.userId }}]"
}
```

Optional parameters to customize the triggered workflow run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|string \| null|false|none|A liquid template string that will be evaluated to determine the actor.|
|cancellation_key|string \| null|false|none|A liquid template string that will be evaluated to determine the cancellation key.|
|data|string \| null|false|none|A liquid template string that will be evaluated and passed as the data payload.|
|recipients|string \| null|false|none|A liquid template string that will be evaluated to determine recipients.|
|tenant|string \| null|false|none|A liquid template string that will be evaluated to determine the tenant.|

<h2 id="tocS_RequestTemplateHeadersString">RequestTemplateHeadersString</h2>
<!-- backwards compatibility -->
<a id="schemarequesttemplateheadersstring"></a>
<a id="schema_RequestTemplateHeadersString"></a>
<a id="tocSrequesttemplateheadersstring"></a>
<a id="tocsrequesttemplateheadersstring"></a>

```json
"{{ data.request_headers }}"
```

A template string that should resolve to a JSON object representing the headers.

<h2 id="tocS_PreviewWorkflowTemplateResponse">PreviewWorkflowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewworkflowtemplateresponse"></a>
<a id="schema_PreviewWorkflowTemplateResponse"></a>
<a id="tocSpreviewworkflowtemplateresponse"></a>
<a id="tocspreviewworkflowtemplateresponse"></a>

```json
{
  "content_type": "email",
  "result": "success",
  "template": {
    "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Welcome to {{ vars.app_name }}",
    "text_body": "Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} Get started here: {{ data.sign_in_url }}."
  }
}
```

A response to a preview workflow template request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|The content type of the preview.|
|result|string|true|none|The result of the preview.|
|template|object|true|none|The rendered template, ready to be previewed.|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|email|
|content_type|in_app_feed|
|content_type|push|
|content_type|chat|
|content_type|sms|
|content_type|http|
|result|success|
|result|error|

<h2 id="tocS_ConditionGroupAnyMatch">ConditionGroupAnyMatch</h2>
<!-- backwards compatibility -->
<a id="schemaconditiongroupanymatch"></a>
<a id="schema_ConditionGroupAnyMatch"></a>
<a id="tocSconditiongroupanymatch"></a>
<a id="tocsconditiongroupanymatch"></a>

```json
{
  "any": [
    {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    }
  ]
}
```

A group of conditions that any must be met. Can contain nested alls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|any|[object]|false|none|An array of conditions or nested condition groups to evaluate.|

<h2 id="tocS_WrappedPreferenceCategoryResponse">WrappedPreferenceCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedpreferencecategoryresponse"></a>
<a id="schema_WrappedPreferenceCategoryResponse"></a>
<a id="tocSwrappedpreferencecategoryresponse"></a>
<a id="tocswrappedpreferencecategoryresponse"></a>

```json
{
  "preference_category": {
    "created_at": "2021-01-01T00:00:00Z",
    "name": "billing",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the PreferenceCategory response under the `preference_category` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preference_category|[PreferenceCategory](#schemapreferencecategory)|true|none|A named preference category in a project's catalog.|

<h2 id="tocS_WrappedWarehouseSyncRequestRequest">WrappedWarehouseSyncRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedwarehousesyncrequestrequest"></a>
<a id="schema_WrappedWarehouseSyncRequestRequest"></a>
<a id="tocSwrappedwarehousesyncrequestrequest"></a>
<a id="tocswrappedwarehousesyncrequestrequest"></a>

```json
{
  "warehouse_sync": {
    "change_tracking": {
      "last_modified_column": "updated_at"
    },
    "mappings": [
      {
        "on_null": "set_null",
        "source_column": "id",
        "target_field": "id"
      },
      {
        "on_null": "set_null",
        "source_column": "email",
        "target_field": "email"
      }
    ],
    "name": "Users",
    "primary_key_column": "id",
    "source": {
      "mode": "sql",
      "query": "SELECT id, email, name, updated_at FROM analytics.users"
    },
    "target_type": "user",
    "warehouse_key": "analytics"
  }
}
```

Wraps the WarehouseSyncRequest request under the warehouse_sync key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse_sync|[WarehouseSyncRequest](#schemawarehousesyncrequest)|true|none|A warehouse sync payload for upsert or validate. Fields left out keep their current values. `warehouse_key`, `target_type`, and `target` are required to create a sync and can't change after. Change `enabled` and `frequency_minutes` with the settings endpoint.|

<h2 id="tocS_PaginatedChannelGroupResponse">PaginatedChannelGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedchannelgroupresponse"></a>
<a id="schema_PaginatedChannelGroupResponse"></a>
<a id="tocSpaginatedchannelgroupresponse"></a>
<a id="tocspaginatedchannelgroupresponse"></a>

```json
{
  "entries": [
    {
      "channel_rules": [
        {
          "channel": {
            "archived_at": null,
            "created_at": "2021-01-01T00:00:00Z",
            "custom_icon_url": null,
            "id": "01234567-89ab-cdef-0123-456789abcdef",
            "key": "my-sendgrid-channel",
            "name": "My Sendgrid Channel",
            "provider": "sendgrid",
            "type": "email",
            "updated_at": "2021-01-01T00:00:00Z",
            "visible_in": [
              "workflow",
              "broadcast"
            ]
          },
          "created_at": "2021-01-01T00:00:00Z",
          "index": 0,
          "rule_type": "always",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "channel_type": "push",
      "created_at": "2021-01-01T00:00:00Z",
      "key": "push-group",
      "name": "Push Notification Group",
      "operator": "any",
      "source": "user",
      "updated_at": "2021-01-01T00:00:00Z",
      "visible_in": [
        "workflow",
        "broadcast"
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of ChannelGroup. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ChannelGroup](#schemachannelgroup)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WhoamiResponse">WhoamiResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhoamiresponse"></a>
<a id="schema_WhoamiResponse"></a>
<a id="tocSwhoamiresponse"></a>
<a id="tocswhoamiresponse"></a>

```json
{
  "account_features": {
    "batch_items_render_limit_allowed": false,
    "custom_branding_allowed": false,
    "data_retention_days": 30,
    "data_warehouse_extension_allowed": false,
    "datadog_extension_allowed": true,
    "dsync_allowed": false,
    "guides_monthly_notified_recipients_limit": 500,
    "guides_per_tenant_scope_allowed": false,
    "heap_extension_allowed": false,
    "knock_branding_required": true,
    "litmus_email_preview_allowed": false,
    "message_sent_limit": 10000,
    "new_relic_extension_allowed": false,
    "permission_groups_allowed": false,
    "segment_extension_allowed": false,
    "self_serve_allowed": true,
    "sso_allowed": false,
    "tenant_preferences_allowed": false,
    "translations_allowed": false
  },
  "account_name": "Acme, Inc.",
  "account_slug": "acme",
  "service_token_name": "My Service Token",
  "type": "service_token",
  "user_email": null,
  "user_id": null,
  "user_name": null
}
```

Information about the current calling scope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_features|object|true|none|Account plan features and limits.|
|account_name|string|true|none|The display name of the account.|
|account_slug|string|true|none|The unique slug identifier for the account.|
|service_token_name|string \| null|false|none|The name of the service token if authenticated via service token, null for OAuth contexts.|
|type|string|true|none|The type of authentication context - either a service token or OAuth user context.|
|user_email|string \| null|false|none|The email of the authenticated user if in OAuth context, null for service token contexts.|
|user_id|string \| null|false|none|The ID of the authenticated user if in OAuth context, null for service token contexts.|
|user_name|string \| null|false|none|The name of the authenticated user if in OAuth context, null for service token contexts.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|service_token|
|type|oauth_context|

<h2 id="tocS_StaticAudienceRequest">StaticAudienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastaticaudiencerequest"></a>
<a id="schema_StaticAudienceRequest"></a>
<a id="tocSstaticaudiencerequest"></a>
<a id="tocsstaticaudiencerequest"></a>

```json
{
  "description": "Manually managed list of beta testers",
  "name": "Beta users",
  "type": "static"
}
```

Request body for creating/updating a static audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|A description of the audience.|
|name|string|true|none|The name of the audience.|
|type|string|true|none|The type of audience. Set to `static` for static audiences.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|static|

<h2 id="tocS_WrappedWebhookRequestRequest">WrappedWebhookRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedwebhookrequestrequest"></a>
<a id="schema_WrappedWebhookRequestRequest"></a>
<a id="tocSwrappedwebhookrequestrequest"></a>
<a id="tocswrappedwebhookrequestrequest"></a>

```json
{
  "webhook": {
    "active": true,
    "description": "My webhook endpoint",
    "event_types": [
      "message.sent",
      "message.delivered"
    ],
    "url": "https://example.com/webhooks"
  }
}
```

Wraps the WebhookRequest request under the webhook key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|[WebhookRequest](#schemawebhookrequest)|true|none|The request body for creating or updating an outbound webhook.|

<h2 id="tocS_WorkflowSmsStep">WorkflowSmsStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowsmsstep"></a>
<a id="schema_WorkflowSmsStep"></a>
<a id="tocSworkflowsmsstep"></a>
<a id="tocsworkflowsmsstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "twilio",
  "channel_overrides": null,
  "channel_type": "sms",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "SMS channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "settings": {
      "payload_overrides": "{\"name\": \"John\"}",
      "to_number": "+1234567890"
    },
    "text_body": "Hello, world!"
  },
  "type": "channel"
}
```

A SMS step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_overrides|object|false|none|A map of channel overrides for the channel step.|
|channel_type|string|false|none|The type of the channel step. Always `sms` for SMS steps.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[SmsTemplate](#schemasmstemplate)|true|none|An SMS template.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|sms|
|type|channel|

<h2 id="tocS_WorkflowEmailStep">WorkflowEmailStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowemailstep"></a>
<a id="schema_WorkflowEmailStep"></a>
<a id="tocSworkflowemailstep"></a>
<a id="tocsworkflowemailstep"></a>

```json
{
  "channel_group_key": null,
  "channel_key": "postmark",
  "channel_overrides": null,
  "channel_type": "email",
  "conditions": null,
  "description": "This is a description of the channel step",
  "name": "Email channel step",
  "ref": "channel_step",
  "send_windows": null,
  "template": {
    "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
    "settings": {
      "layout_key": "default"
    },
    "subject": "Welcome to {{ vars.app_name }}",
    "text_body": "Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} Get started here: {{ data.sign_in_url }}."
  },
  "type": "channel"
}
```

An email step within a workflow. Read more in the [docs](https://docs.knock.app/designing-workflows/channel-step).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_group_key|string \| null|false|none|The key of the channel group to which the channel step will be sending a notification. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_key|string \| null|false|none|The key of a specific configured channel instance (e.g., 'knock-email', 'postmark', 'sendgrid-marketing') to send the notification through. Either `channel_key` or `channel_group_key` must be provided, but not both.|
|channel_overrides|object|false|none|A map of channel overrides for the channel step.|
|channel_type|string|false|none|The category of channel for this step. Always `email` for email steps. This identifies the type of notification (email, sms, push, etc.) while `channel_key` specifies which configured provider instance to use.|
|conditions|object|false|none|A set of conditions to be evaluated for this channel step.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|send_windows|[[SendWindow](#schemasendwindow)]|false|none|A list of send window objects. Must include one send window object per day of the week.|
|template|[EmailTemplate](#schemaemailtemplate)|true|none|An email message template.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|email|
|type|channel|

<h2 id="tocS_WrappedMessageTypeResponse">WrappedMessageTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedmessagetyperesponse"></a>
<a id="schema_WrappedMessageTypeResponse"></a>
<a id="tocSwrappedmessagetyperesponse"></a>
<a id="tocswrappedmessagetyperesponse"></a>

```json
{
  "message_type": {
    "archived_at": null,
    "created_at": "2021-01-01T00:00:00Z",
    "deleted_at": null,
    "description": "Email message type",
    "environment": "development",
    "icon_name": "email",
    "key": "email",
    "name": "Email",
    "owner": "user",
    "preview": "<div>Hello, world!</div>",
    "semver": "1.0.0",
    "sha": "1234567890",
    "updated_at": "2021-01-01T00:00:00Z",
    "valid": true,
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

Wraps the MessageType response under the `message_type` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_type|[MessageType](#schemamessagetype)|true|none|A message type is a schema for a message that maps to a UI component or element within your application.|

<h2 id="tocS_MessageTypeTextField">MessageTypeTextField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypetextfield"></a>
<a id="schema_MessageTypeTextField"></a>
<a id="tocSmessagetypetextfield"></a>
<a id="tocsmessagetypetextfield"></a>

```json
{
  "key": "text_field",
  "label": "Text Field",
  "settings": {
    "description": "A description of the text field",
    "max_length": 100,
    "min_length": 10,
    "placeholder": "A placeholder for the text field",
    "required": true
  },
  "type": "text"
}
```

A text field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the text field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_MessageTypeVariant">MessageTypeVariant</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypevariant"></a>
<a id="schema_MessageTypeVariant"></a>
<a id="tocSmessagetypevariant"></a>
<a id="tocsmessagetypevariant"></a>

```json
{
  "fields": [
    {
      "key": "text_field",
      "label": "My text field",
      "settings": {
        "description": "A description of the text field",
        "max_length": 100,
        "min_length": 10,
        "required": true
      },
      "type": "text"
    }
  ],
  "key": "default",
  "name": "Default"
}
```

A variant of a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|true|none|The field types available for the variant.|
|key|string|true|none|The unique key string for the variant. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the variant. Must be at maximum 255 characters in length.|

<h2 id="tocS_EmailTemplate">EmailTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplate"></a>
<a id="schema_EmailTemplate"></a>
<a id="tocSemailtemplate"></a>
<a id="tocsemailtemplate"></a>

```json
{
  "html_body": "<p>Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} <a href='{{ data.sign_in_url }}'>Get started here</a>.</p>",
  "settings": {
    "layout_key": "default"
  },
  "subject": "Welcome to {{ vars.app_name }}",
  "text_body": "Hello, {{ recipient.name }}! Welcome to {{ vars.app_name }} Get started here: {{ data.sign_in_url }}."
}
```

An email message template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html_body|string \| null|false|none|An HTML or MJML template for the email body. **Required** if `visual_blocks` is not provided. Only one of `html_body` or `visual_blocks` should be set. When `is_mjml` is true, this must contain MJML components. Supports Liquid templating with variables like `{{ recipient.name }}`, `{{ actor.name }}`, `{{ vars.app_name }}`, `{{ data.custom_field }}`, and `{{ tenant.name }}`. See the [template variables reference](https://docs.knock.app/designing-workflows/template-editor/variables) for available variables.|
|is_mjml|boolean \| null|false|none|Whether this template uses MJML format. When true, the template content will be compiled from MJML to HTML. Only valid when the selected layout is also MJML or when no layout is selected.|
|settings|object|true|none|The [settings](https://docs.knock.app/integrations/email/settings) for the email template. Must be supplied with at least `layout_key`.|
|subject|string|true|none|The subject of the email. Supports Liquid templating with variables like `{{ recipient.name }}`, `{{ actor.name }}`, `{{ vars.app_name }}`, `{{ data.custom_field }}`, and `{{ tenant.name }}`. See the [template variables reference](https://docs.knock.app/designing-workflows/template-editor/variables) for available variables.|
|text_body|string \| null|false|none|A text template for the email body. When omitted, the email template will be autogenerated from the `html_body` or `visual_blocks`.|
|visual_blocks|object|false|none|The visual blocks that make up the email template. **Required** if `html_body` is not provided. Only one of `html_body` or `visual_blocks` should be set.|

<h2 id="tocS_TranslationRequest">TranslationRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslationrequest"></a>
<a id="schema_TranslationRequest"></a>
<a id="tocStranslationrequest"></a>
<a id="tocstranslationrequest"></a>

```json
{
  "content": "{\"hello\":\"Hello, world!\"}",
  "format": "json"
}
```

A translation object with a content attribute used to update or create a translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|A JSON encoded string containing the key-value pairs of translation references and translation strings.|
|format|string|true|none|Indicates whether content is a JSON encoded object string or a string in the PO format.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|json|
|format|po|

<h2 id="tocS_PreferenceCategoriesResponse">PreferenceCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecategoriesresponse"></a>
<a id="schema_PreferenceCategoriesResponse"></a>
<a id="tocSpreferencecategoriesresponse"></a>
<a id="tocspreferencecategoriesresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2021-01-01T00:00:00Z",
      "name": "billing",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ]
}
```

A list of preference categories in the project's catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[PreferenceCategory](#schemapreferencecategory)]|true|none|Preference categories, ordered by name.|

<h2 id="tocS_PaginatedItemSchemaResponse">PaginatedItemSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditemschemaresponse"></a>
<a id="schema_PaginatedItemSchemaResponse"></a>
<a id="tocSpaginateditemschemaresponse"></a>
<a id="tocspaginateditemschemaresponse"></a>

```json
{
  "entries": [
    {
      "item_id": "accounts",
      "item_type": "object",
      "properties": [
        {
          "description": "The user's current billing plan.",
          "item_type": null,
          "key": "plan",
          "preview_text": "Enterprise",
          "type": "string",
          "visible": true
        }
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of ItemSchema. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ItemSchema](#schemaitemschema)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WrappedMessageTypeRequestRequest">WrappedMessageTypeRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedmessagetyperequestrequest"></a>
<a id="schema_WrappedMessageTypeRequestRequest"></a>
<a id="tocSwrappedmessagetyperequestrequest"></a>
<a id="tocswrappedmessagetyperequestrequest"></a>

```json
{
  "message_type": {
    "description": "This is a message type",
    "name": "My Message Type",
    "preview": "<div>Hello, world!</div>",
    "variants": [
      {
        "fields": [
          {
            "key": "text_field",
            "label": "My text field",
            "settings": {
              "description": "A description of the text field",
              "max_length": 100,
              "min_length": 10,
              "required": true
            },
            "type": "text"
          }
        ],
        "key": "default",
        "name": "Default"
      }
    ]
  }
}
```

Wraps the MessageTypeRequest request under the message_type key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_type|[MessageTypeRequest](#schemamessagetyperequest)|true|none|A request to create a message type.|

<h2 id="tocS_PaginatedGuideResponse">PaginatedGuideResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedguideresponse"></a>
<a id="schema_PaginatedGuideResponse"></a>
<a id="tocSpaginatedguideresponse"></a>
<a id="tocspaginatedguideresponse"></a>

```json
{
  "entries": [
    {
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dashboard/*"
        }
      ],
      "active": true,
      "archived_at": null,
      "channel_key": "in-app-guide",
      "created_at": "2024-01-01T00:00:00Z",
      "description": "A guide to help users get started with the application",
      "environment": "development",
      "key": "getting-started",
      "name": "Getting Started Guide",
      "semver": "0.0.1",
      "sha": "1234567890",
      "steps": [
        {
          "name": "Welcome to the App",
          "ref": "welcome-step",
          "schema_key": "tooltip",
          "schema_semver": "1.0.0",
          "schema_variant_key": "default",
          "values": {
            "text_field": "value"
          }
        }
      ],
      "tags": [
        "onboarding",
        "growth"
      ],
      "target_audience_key": null,
      "target_property_conditions": {
        "all": [
          {
            "argument": "some_property",
            "operator": "equal_to",
            "variable": "recipient.property"
          }
        ]
      },
      "type": "banner",
      "updated_at": "2024-01-01T00:00:00Z",
      "valid": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Guide. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Guide](#schemaguide)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_ArchiveAudienceResponse">ArchiveAudienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveaudienceresponse"></a>
<a id="schema_ArchiveAudienceResponse"></a>
<a id="tocSarchiveaudienceresponse"></a>
<a id="tocsarchiveaudienceresponse"></a>

```json
{
  "result": "success"
}
```

The response from archiving an audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the archive operation.|

<h2 id="tocS_HeadlessAccountClaim">HeadlessAccountClaim</h2>
<!-- backwards compatibility -->
<a id="schemaheadlessaccountclaim"></a>
<a id="schema_HeadlessAccountClaim"></a>
<a id="tocSheadlessaccountclaim"></a>
<a id="tocsheadlessaccountclaim"></a>

```json
{
  "claim_url": "https://dashboard.knock.app/claim-account?token=eyJhbGciOi",
  "expires_at": "2026-10-28T12:10:00.000Z",
  "user_code": "042917"
}
```

A claim an agent started for a person, with the link and code to show them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claim_url|string|true|none|The dashboard link the person opens and signs in with the email given when the claim started.|
|expires_at|string(date-time)|true|none|When the link and code stop working.|
|user_code|string|true|none|A six-digit code to show the person, who types it on the claim page. Show it separately from the link.|

<h2 id="tocS_WrappedGuideResponse">WrappedGuideResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedguideresponse"></a>
<a id="schema_WrappedGuideResponse"></a>
<a id="tocSwrappedguideresponse"></a>
<a id="tocswrappedguideresponse"></a>

```json
{
  "guide": {
    "activation_url_patterns": [
      {
        "directive": "allow",
        "pathname": "/dashboard/*"
      }
    ],
    "active": true,
    "archived_at": null,
    "channel_key": "in-app-guide",
    "created_at": "2024-01-01T00:00:00Z",
    "description": "A guide to help users get started with the application",
    "environment": "development",
    "key": "getting-started",
    "name": "Getting Started Guide",
    "semver": "0.0.1",
    "sha": "1234567890",
    "steps": [
      {
        "name": "Welcome to the App",
        "ref": "welcome-step",
        "schema_key": "tooltip",
        "schema_semver": "1.0.0",
        "schema_variant_key": "default",
        "values": {
          "text_field": "value"
        }
      }
    ],
    "tags": [
      "onboarding",
      "growth"
    ],
    "target_audience_key": null,
    "target_property_conditions": {
      "all": [
        {
          "argument": "some_property",
          "operator": "equal_to",
          "variable": "recipient.property"
        }
      ]
    },
    "type": "banner",
    "updated_at": "2024-01-01T00:00:00Z",
    "valid": true
  }
}
```

Wraps the Guide response under the `guide` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide|[Guide](#schemaguide)|true|none|A guide defines an in-app guide that can be displayed to users based on priority and other conditions.|

<h2 id="tocS_ChatTemplate">ChatTemplate</h2>
<!-- backwards compatibility -->
<a id="schemachattemplate"></a>
<a id="schema_ChatTemplate"></a>
<a id="tocSchattemplate"></a>
<a id="tocschattemplate"></a>

```json
{
  "json_body": null,
  "markdown_body": "**Hello**, world!",
  "summary": "Hello, world!"
}
```

A chat template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|json_body|string \| null|false|none|A JSON template for the chat notification message payload. Only present if not using the markdown body.|
|markdown_body|string|true|none|The markdown body of the chat template.|
|summary|string|false|none|The summary of the chat template. Used by some chat apps in their push notifications.|

<h2 id="tocS_EmailHtmlBlock">EmailHtmlBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemailhtmlblock"></a>
<a id="schema_EmailHtmlBlock"></a>
<a id="tocSemailhtmlblock"></a>
<a id="tocsemailhtmlblock"></a>

```json
{
  "content": "<p>Hello, world!</p>",
  "layout_attrs": {
    "padding_bottom": 8,
    "padding_left": 4,
    "padding_right": 4,
    "padding_top": 8
  },
  "type": "html"
}
```

An HTML block in an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The HTML content of the block. Supports Liquid templating with variables like `{{ recipient.name }}`, `{{ actor.name }}`, `{{ vars.app_name }}`, `{{ data.custom_field }}`, and `{{ tenant.name }}`. See the [template variables reference](https://docs.knock.app/designing-workflows/template-editor/variables) for available variables.|
|id|string(uuid)|false|none|The ID of the block.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|type|string|true|none|The type of the block.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html|

<h2 id="tocS_EmailTemplateSettings">EmailTemplateSettings</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatesettings"></a>
<a id="schema_EmailTemplateSettings"></a>
<a id="tocSemailtemplatesettings"></a>
<a id="tocsemailtemplatesettings"></a>

```json
{
  "layout_key": "default"
}
```

The [settings](https://docs.knock.app/integrations/email/settings) for the email template. Must be supplied with at least `layout_key`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment_key|string \| null|false|none|The object path in the workflow trigger's `data` payload to resolve attachments.Defaults to `attachments`.|
|layout_key|string \| null|false|none|The `key` of the [email layout](https://docs.knock.app/integrations/email/layouts) that wraps the email template. When omitted, the email template will need to define the `<html>` structure.|
|pre_content|string \| null|false|none|A liquid template that will be injected into the email layout above the message template content. Useful for setting variables that should be available to the email layout.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "created_at": "2021-01-01T00:00:00Z",
  "custom_image_url": null,
  "description": "Receives events from Segment.",
  "environment_settings": {
    "development": {
      "mappings": [],
      "settings": {
        "endpoint": "https://api.knock.app/integrations/receive/src_123",
        "enforce_idempotency": true,
        "enforce_verification": false,
        "event_type_path": "body.event",
        "handle_identifies": true,
        "idempotency_key_path": "body.messageId",
        "preprocess_script": {
          "language": "javascript",
          "source": "return event;"
        },
        "timestamp_path": "body.timestamp"
      },
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  "key": "segment-source",
  "name": "Segment Source",
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A source that receives external events and maps them to Knock actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the source was created.|
|custom_image_url|string \| null|false|none|An optional URL for a custom image representing the source.|
|description|string \| null|false|none|An optional description of the source.|
|environment_settings|object|true|none|Per-environment settings keyed by environment slug.|
|key|string|true|none|The unique key for the source within the project.|
|name|string|true|none|The human-readable name of the source.|
|updated_at|string(date-time)|true|none|The timestamp of when the source was last updated.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "created_at": "2022-10-31T19:59:03Z",
  "deleted_at": null,
  "hide_pii_data": false,
  "label_color": "#000000",
  "last_commit_at": "2022-10-31T19:59:03Z",
  "name": "Development",
  "order": 0,
  "owner": "system",
  "slug": "development",
  "updated_at": "2022-10-31T19:59:03Z",
  "visibility": "visible"
}
```

An environment object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the environment was created.|
|deleted_at|string(date-time) \| null|false|none|The timestamp of when the environment was deleted.|
|hide_pii_data|boolean|false|none|Whether PII data is hidden from the environment. Read more in the [data obfuscation docs](https://docs.knock.app/manage-your-account/data-obfuscation).|
|label_color|string \| null|false|none|The color of the environment label to display in the dashboard.|
|last_commit_at|string(date-time) \| null|false|none|The timestamp of the most-recent commit in the environment.|
|name|string|true|none|A human-readable name for the environment. Cannot exceed 255 characters.|
|order|integer|true|none|The order of the environment. The lowest number is the first environment, the highest number is the last environment. The order will not always be sequential.|
|owner|string|true|none|The owner of the environment.|
|slug|string|true|none|A unique slug for the environment. Cannot exceed 255 characters.|
|updated_at|string(date-time)|true|none|The timestamp of when the environment was last updated.|
|visibility|string|true|none|Whether the environment is part of the account catalog.|

#### Enumerated Values

|Property|Value|
|---|---|
|owner|system|
|owner|user|
|visibility|visible|
|visibility|hidden|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "argument": "some_property",
  "operator": "equal_to",
  "variable": "recipient.property"
}
```

A condition to be evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string \| null|false|none|The argument to be evaluated. Arguments can be either static values or dynamic properties. Static values will always be JSON decoded so will support strings, lists, objects, numbers, and booleans. Dynamic values should be path expressions.|
|operator|string|true|none|The operator to use in the evaluation of the condition.|
|variable|string|true|none|The variable to be evaluated. Variables can be either static values or dynamic properties. Static values will always be JSON decoded so will support strings, lists, objects, numbers, and booleans. Dynamic values should be path expressions.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal_to|
|operator|not_equal_to|
|operator|greater_than|
|operator|less_than|
|operator|greater_than_or_equal_to|
|operator|less_than_or_equal_to|
|operator|contains|
|operator|not_contains|
|operator|contains_all|
|operator|not_contains_all|
|operator|is_timestamp_before|
|operator|is_timestamp_on_or_after|
|operator|is_timestamp_between|
|operator|is_between|
|operator|empty|
|operator|not_empty|
|operator|exists|
|operator|not_exists|
|operator|is_timestamp|
|operator|is_timestamp_before_now|
|operator|is_timestamp_on_or_after_now|
|operator|is_audience_member|
|operator|is_not_audience_member|

<h2 id="tocS_SendWindow">SendWindow</h2>
<!-- backwards compatibility -->
<a id="schemasendwindow"></a>
<a id="schema_SendWindow"></a>
<a id="tocSsendwindow"></a>
<a id="tocssendwindow"></a>

```json
{
  "day": "monday",
  "from": "09:00",
  "type": "send",
  "until": "17:00"
}
```

A send window time for a notification. Describes a single day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|true|none|The day of the week.|
|from|string \| null|false|none|The start time of the send window.|
|type|string|true|none|The type of send window.|
|until|string \| null|false|none|The end time of the send window.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|monday|
|day|tuesday|
|day|wednesday|
|day|thursday|
|day|friday|
|day|saturday|
|day|sunday|
|type|send|
|type|do_not_send|

<h2 id="tocS_Guide">Guide</h2>
<!-- backwards compatibility -->
<a id="schemaguide"></a>
<a id="schema_Guide"></a>
<a id="tocSguide"></a>
<a id="tocsguide"></a>

```json
{
  "activation_url_patterns": [
    {
      "directive": "allow",
      "pathname": "/dashboard/*"
    }
  ],
  "active": true,
  "archived_at": null,
  "channel_key": "in-app-guide",
  "created_at": "2024-01-01T00:00:00Z",
  "description": "A guide to help users get started with the application",
  "environment": "development",
  "key": "getting-started",
  "name": "Getting Started Guide",
  "semver": "0.0.1",
  "sha": "1234567890",
  "steps": [
    {
      "name": "Welcome to the App",
      "ref": "welcome-step",
      "schema_key": "tooltip",
      "schema_semver": "1.0.0",
      "schema_variant_key": "default",
      "values": {
        "text_field": "value"
      }
    }
  ],
  "tags": [
    "onboarding",
    "growth"
  ],
  "target_audience_key": null,
  "target_property_conditions": {
    "all": [
      {
        "argument": "some_property",
        "operator": "equal_to",
        "variable": "recipient.property"
      }
    ]
  },
  "type": "banner",
  "updated_at": "2024-01-01T00:00:00Z",
  "valid": true
}
```

A guide defines an in-app guide that can be displayed to users based on priority and other conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activation_url_patterns|[[GuideActivationUrlPattern](#schemaguideactivationurlpattern)]|false|none|A list of activation url patterns that describe when the guide should be shown.|
|active|boolean|true|none|Whether the guide is active.|
|archived_at|string(date-time) \| null|false|none|The timestamp of when the guide was archived.|
|channel_key|string|false|none|The key of the channel in which the guide exists.|
|created_at|string(date-time)|true|none|The timestamp of when the guide was created.|
|deleted_at|string(date-time) \| null|false|none|The timestamp of when the guide was deleted.|
|description|string \| null|false|none|An arbitrary string attached to a guide object. Useful for adding notes about the guide for internal purposes. Maximum of 280 characters allowed.|
|environment|string|true|none|The slug of the environment in which the guide exists.|
|guide_audience_conditions|object|false|none|Read-only. Workflow-derived audience eligibility as a condition group. Each applicable workflow (recorded plus currently referencing) that references this guide via trigger guide step contributes an audience-membership condition; multiple workflows are combined with OR. Omitted when there are no workflow-derived audience conditions.|
|key|string|true|none|The unique key string for the guide object. Must be at minimum 3 characters and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.|
|name|string|true|none|A name for the guide. Must be at maximum 255 characters in length.|
|semver|string|false|none|The semver of the guide.|
|sha|string|true|none|The SHA hash of the guide.|
|steps|[[GuideStep](#schemaguidestep)]|false|none|A list of guide step objects in the guide.|
|tags|[string]|false|none|Use tags to organize resources internally within your account. For example, by team or product area.|
|target_audience_key|string \| null|false|none|The key of the target audience for the guide. When not set, will default to targeting all users.|
|target_property_conditions|object|false|none|A conditions object that describes one or more conditions to be met for the guide to be shown to an audience member.|
|type|string|false|none|The type of the guide. This is derived from the message type of the guide steps.|
|updated_at|string(date-time)|true|none|The timestamp of when the guide was last updated.|
|valid|boolean|false|none|Whether the guide is valid.|

<h2 id="tocS_CommitAllResponse">CommitAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommitallresponse"></a>
<a id="schema_CommitAllResponse"></a>
<a id="tocScommitallresponse"></a>
<a id="tocscommitallresponse"></a>

```json
{
  "result": "success"
}
```

The response from committing all changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|The result of the commit operation.|

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "description": "This is a description of my variable.",
  "environment_values": {
    "development": "dev_value",
    "production": "prod_value"
  },
  "inserted_at": "2021-01-01T00:00:00Z",
  "key": "my_variable",
  "type": "public",
  "updated_at": "2021-01-01T00:00:00Z",
  "value": "my_value"
}
```

An environment variable object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the variable.|
|environment_values|object|false|none|A map of environment slugs to their override values. Only present for project-scoped responses.|
|inserted_at|string(date-time)|true|none|The timestamp of when the variable was created.|
|key|string|true|none|The key of the variable.|
|type|string|true|none|The type of the variable.|
|updated_at|string(date-time)|true|none|The timestamp of when the variable was last updated.|
|value|string \| null|false|none|The default value of the variable. For secret variables, this is obfuscated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|public|
|type|secret|

<h2 id="tocS_Goal">Goal</h2>
<!-- backwards compatibility -->
<a id="schemagoal"></a>
<a id="schema_Goal"></a>
<a id="tocSgoal"></a>
<a id="tocsgoal"></a>

```json
{
  "condition": {
    "event": {
      "event_key": "order.completed",
      "event_type": "integration_source",
      "integration_source_key": "stripe",
      "recipient_path": "body.userId"
    },
    "match_conditions": [
      {
        "conditions": [
          {
            "argument": "100",
            "operator": "greater_than",
            "variable": "event.amount"
          }
        ],
        "operator": "and"
      }
    ]
  },
  "created_at": "2024-06-01T00:00:00Z",
  "description": "Tracks when a trial user converts to paid",
  "environment": "development",
  "key": "trial-conversion",
  "name": "Trial Conversion",
  "sha": "abc123def456",
  "updated_at": "2024-06-01T00:00:00Z"
}
```

A goal defines an event condition that is tracked and attributed to messaging resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoalCondition](#schemagoalcondition)|true|none|A goal condition consisting of a polymorphic event and optional match conditions.|
|created_at|string(date-time)|true|none|The timestamp of when the goal was created. (read-only).|
|description|string \| null|false|none|An optional description for the goal. Maximum of 280 characters allowed.|
|environment|string|true|none|The slug of the environment in which the goal exists. (read-only).|
|key|string|true|none|The unique key string for the goal. Must be at minimum 1 character and at maximum 255 characters in length.|
|name|string|true|none|A name for the goal. Must be at minimum 1 character and at maximum 255 characters in length.|
|sha|string|true|none|The SHA hash of the goal data. (read-only).|
|updated_at|string(date-time)|true|none|The timestamp of when the goal was last updated. (read-only).|

<h2 id="tocS_WarehouseSyncChangeTracking">WarehouseSyncChangeTracking</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncchangetracking"></a>
<a id="schema_WarehouseSyncChangeTracking"></a>
<a id="tocSwarehousesyncchangetracking"></a>
<a id="tocswarehousesyncchangetracking"></a>

```json
{
  "is_deleted_column": "is_deleted",
  "last_modified_column": "updated_at"
}
```

How the sync detects changed and deleted rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_deleted_column|string \| null|false|none|A boolean column that marks a row as deleted. Requires `last_modified_column`.|
|last_modified_column|string \| null|false|none|A timestamp column that changes whenever a row changes. With it, each run reads only rows changed since the last run.|

<h2 id="tocS_SourceEvent">SourceEvent</h2>
<!-- backwards compatibility -->
<a id="schemasourceevent"></a>
<a id="schema_SourceEvent"></a>
<a id="tocSsourceevent"></a>
<a id="tocssourceevent"></a>

```json
{
  "event": "user.created",
  "last_received_at": "2024-01-15T12:00:00Z"
}
```

A known unique event received by a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|The decoded event name.|
|last_received_at|string(date-time) \| null|true|none|The timestamp of when this event was last received.|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "asset_type": "library_asset",
  "created_at": "2021-01-01T00:00:00Z",
  "filename": "logo.png",
  "id": "018f02cd-9230-71d2-8f70-b40e5e2a4f6d",
  "mime_type": "image/png",
  "updated_at": "2021-01-01T00:00:00Z",
  "url": "https://assets.example.com/acc_123/proj_123/asset.png"
}
```

An uploaded asset file for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_type|string|true|none|The type of asset.|
|created_at|string(date-time)|true|none|The timestamp of when this asset was created.|
|filename|string \| null|false|none|The human-readable filename for this asset.|
|id|string(uuid)|true|none|The unique ID for this asset.|
|mime_type|string|true|none|The MIME type for this asset.|
|updated_at|string(date-time)|true|none|The timestamp of when this asset was last updated.|
|url|string|true|none|The public URL for this asset.|

<h2 id="tocS_WrappedCommitResponse">WrappedCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedcommitresponse"></a>
<a id="schema_WrappedCommitResponse"></a>
<a id="tocSwrappedcommitresponse"></a>
<a id="tocswrappedcommitresponse"></a>

```json
{
  "commit": {
    "author": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_message": "This is a commit message",
    "created_at": "2021-01-01T00:00:00Z",
    "environment": "development",
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "promote_group_id": null,
    "promoted_from_commit_id": null,
    "resource": {
      "identifier": "my-email-layout",
      "type": "email_layout"
    }
  },
  "promote_group": {
    "actor": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_count": 3,
    "created_at": "2021-01-01T00:00:00Z",
    "id": "6f1b1c3e-3c1f-4b1d-8f0e-5f6d9d6a2c11",
    "source": "development",
    "source_type": "environment",
    "to_environment": "production"
  }
}
```

Wraps the Commit response under the `commit` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit|[Commit](#schemacommit)|true|none|A commit is a change to a resource within an environment, made by an author.|
|promote_group|[PromoteGroup](#schemapromotegroup)|true|none|A summary of a promote. Every commit copied into the destination environment by the same promote shares the group's ID, which you can use to list them with the `promote_group_id` filter on the list commits endpoint.|

<h2 id="tocS_Audience">Audience</h2>
<!-- backwards compatibility -->
<a id="schemaaudience"></a>
<a id="schema_Audience"></a>
<a id="tocSaudience"></a>
<a id="tocsaudience"></a>

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "description": "Customers who signed up in the last 30 days.",
  "environment": "development",
  "key": "new-customers",
  "name": "New customers",
  "segments": [
    {
      "conditions": [
        {
          "argument": "30_days_ago",
          "operator": "greater_than",
          "property": "recipient.created_at"
        }
      ]
    }
  ],
  "sha": "a1b2c3d4e5f6",
  "type": "dynamic",
  "updated_at": "2024-06-20T14:45:00Z"
}
```

An audience defines a set of users that can be targeted for notifications. Can be either a `StaticAudience` (members explicitly added/removed) or a `DynamicAudience` (members determined by segment conditions).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[StaticAudience](#schemastaticaudience)|false|none|A static audience where members are explicitly added or removed via the API.|
|*oneOf*|[DynamicAudience](#schemadynamicaudience)|false|none|A dynamic audience where membership is determined by segment conditions evaluated at runtime.|

<h2 id="tocS_PaginatedReusableRequestResponse">PaginatedReusableRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedreusablerequestresponse"></a>
<a id="schema_PaginatedReusableRequestResponse"></a>
<a id="tocSpaginatedreusablerequestresponse"></a>
<a id="tocspaginatedreusablerequestresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2021-01-01T00:00:00Z",
      "description": "Loads a user from the API.",
      "environment": "development",
      "key": "fetch-user",
      "name": "Fetch user",
      "settings": {
        "body": null,
        "headers": [
          {
            "key": "X-API-Key",
            "value": "1234567890"
          }
        ],
        "method": "get",
        "query_params": [
          {
            "key": "key",
            "value": "value"
          }
        ],
        "response_path": null,
        "signing_key": null,
        "url": "https://example.com"
      },
      "sha": "abc123",
      "type": "http_fetch",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of ReusableRequest. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ReusableRequest](#schemareusablerequest)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "created_at": "2024-01-15T10:30:00Z",
  "id": "d4b8e8e0-1234-5678-9abc-def012345678",
  "role": "admin",
  "updated_at": "2024-06-20T14:45:00Z",
  "user": {
    "avatar_url": "https://www.gravatar.com/avatar/abc123",
    "created_at": "2024-01-10T08:00:00Z",
    "email": "jane@example.com",
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "name": "Jane Doe",
    "updated_at": "2024-06-18T12:00:00Z"
  }
}
```

A member of the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The timestamp of when the member joined the account.|
|id|string(uuid)|true|none|The unique identifier of the member.|
|role|string|true|none|The member's role in the account.|
|updated_at|string(date-time)|true|none|The timestamp of when the member was last updated.|
|user|[MemberUser](#schemamemberuser)|true|none|Information about a user within the Knock dashboard. Not to be confused with an external user (recipient) of a workflow.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|admin|
|role|member|
|role|production_only_member|
|role|billing|
|role|support|

<h2 id="tocS_PaginatedCommitResponse">PaginatedCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcommitresponse"></a>
<a id="schema_PaginatedCommitResponse"></a>
<a id="tocSpaginatedcommitresponse"></a>
<a id="tocspaginatedcommitresponse"></a>

```json
{
  "entries": [
    {
      "author": {
        "email": "john.doe@example.com",
        "name": "John Doe"
      },
      "commit_message": "This is a commit message",
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "development",
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "promote_group_id": null,
      "promoted_from_commit_id": null,
      "resource": {
        "identifier": "my-email-layout",
        "type": "email_layout"
      }
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Commit. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Commit](#schemacommit)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_MessageTypeMarkdownField">MessageTypeMarkdownField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypemarkdownfield"></a>
<a id="schema_MessageTypeMarkdownField"></a>
<a id="tocSmessagetypemarkdownfield"></a>
<a id="tocsmessagetypemarkdownfield"></a>

```json
{
  "key": "markdown_field",
  "label": "Markdown Field",
  "settings": {
    "default": "# Heading\n\nThis is **bold** and this is *italic*.",
    "description": "A description of the markdown field",
    "placeholder": "A placeholder for the markdown field",
    "required": true
  },
  "type": "markdown"
}
```

A markdown field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the markdown field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|markdown|

<h2 id="tocS_WrappedTagResponse">WrappedTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrappedtagresponse"></a>
<a id="schema_WrappedTagResponse"></a>
<a id="tocSwrappedtagresponse"></a>
<a id="tocswrappedtagresponse"></a>

```json
{
  "tag": {
    "color": "#3B82F6",
    "created_at": "2021-01-01T00:00:00Z",
    "description": "Billing-related workflows",
    "name": "billing",
    "updated_at": "2021-01-01T00:00:00Z"
  }
}
```

Wraps the Tag response under the `tag` key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[Tag](#schematag)|true|none|A named tag in a project's resource-tag catalog.|

<h2 id="tocS_WorkflowRandomCohortStepBranch">WorkflowRandomCohortStepBranch</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrandomcohortstepbranch"></a>
<a id="schema_WorkflowRandomCohortStepBranch"></a>
<a id="tocSworkflowrandomcohortstepbranch"></a>
<a id="tocsworkflowrandomcohortstepbranch"></a>

```json
{
  "name": "Control",
  "percentage": "50",
  "steps": [],
  "terminates": false
}
```

A cohort branch in an experiment step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the cohort branch.|
|percentage|string|true|none|The percentage of recipients to assign to this cohort. Must be between 0 and 100 with at most 1 decimal place. All branch percentages must sum to 100. Sent as a number in requests; returned as a decimal string in responses (e.g. "50", "33.3").|
|steps|[[WorkflowStep](#schemaworkflowstep)]|false|none|A list of steps that will be executed for recipients assigned to this cohort.|
|terminates|boolean|false|none|If the workflow should halt at the end of the branch. Defaults to false if not provided.|

<h2 id="tocS_WorkflowUpdateObjectStep">WorkflowUpdateObjectStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdateobjectstep"></a>
<a id="schema_WorkflowUpdateObjectStep"></a>
<a id="tocSworkflowupdateobjectstep"></a>
<a id="tocsworkflowupdateobjectstep"></a>

```json
{
  "description": "Update object step description.",
  "name": "Update object",
  "ref": "update_object_1",
  "settings": {
    "recipient_gid": "gid://Object/projects/123",
    "update_properties": "{\"status\": \"active\"}"
  },
  "type": "update_object"
}
```

An update object step. Updates properties of a specific object referenced in the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the update object step.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_object|

<h2 id="tocS_WorkflowWaitForEventStep">WorkflowWaitForEventStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwaitforeventstep"></a>
<a id="schema_WorkflowWaitForEventStep"></a>
<a id="tocSworkflowwaitforeventstep"></a>
<a id="tocsworkflowwaitforeventstep"></a>

```json
{
  "name": "Wait for message event",
  "ref": "wait_for_event_1",
  "settings": {
    "event": {
      "event_key": "interacted",
      "event_type": "message",
      "source_key": "engagement-workflow",
      "source_type": "workflow"
    },
    "expires_after": {
      "unit": "days",
      "value": 1
    },
    "match_conditions": [
      {
        "conditions": [
          {
            "argument": "msg_123",
            "operator": "equal_to",
            "variable": "event.message_id"
          }
        ],
        "operator": "and"
      }
    ],
    "on_match": "continue",
    "on_timeout": "halt"
  },
  "type": "wait_for_event"
}
```

A wait for event function step that pauses a workflow until a matching event is received.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|A conditions object that describes one or more conditions to be met in order for the step to be executed.|
|description|string \| null|false|none|An arbitrary string attached to a workflow step. Useful for adding notes about the workflow for internal purposes.|
|name|string \| null|false|none|A name for the workflow step.|
|ref|string|true|none|The reference key of the workflow step. Must be unique per workflow.|
|settings|object|true|none|The settings for the wait for event step. When `event.event_type` is `message` or `workflow`, `match_conditions` is required.|
|type|string|true|none|The type of the workflow step.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|wait_for_event|

<h2 id="tocS_MessageTypeListField">MessageTypeListField</h2>
<!-- backwards compatibility -->
<a id="schemamessagetypelistfield"></a>
<a id="schema_MessageTypeListField"></a>
<a id="tocSmessagetypelistfield"></a>
<a id="tocsmessagetypelistfield"></a>

```json
{
  "key": "faqs",
  "label": "FAQs",
  "settings": {
    "default": [],
    "description": "Frequently asked questions",
    "item_schema": {
      "properties": {
        "answer": {
          "type": "string"
        },
        "question": {
          "type": "string"
        }
      },
      "required": [
        "question",
        "answer"
      ],
      "type": "object"
    },
    "placeholder": null,
    "required": true
  },
  "type": "list"
}
```

A list field used in a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The unique key of the field.|
|label|string \| null|true|none|The label of the field.|
|settings|object|false|none|Settings for the list field.|
|type|string|true|none|The type of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|list|

<h2 id="tocS_WarehouseSyncSource">WarehouseSyncSource</h2>
<!-- backwards compatibility -->
<a id="schemawarehousesyncsource"></a>
<a id="schema_WarehouseSyncSource"></a>
<a id="tocSwarehousesyncsource"></a>
<a id="tocswarehousesyncsource"></a>

```json
{
  "mode": "sql",
  "query": "SELECT id, email, name, updated_at FROM analytics.users"
}
```

The rows a warehouse sync reads: a table or view (`relation`), or the result of a SQL query (`sql`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|true|none|Whether the sync reads a table or view, or a SQL query.|
|name|string \| null|false|none|The name of the table or view. Required when `mode` is `relation`.|
|query|string \| null|false|none|The SQL query to read. Required when `mode` is `sql`.|
|schema|string \| null|false|none|The schema of the table or view. Required when `mode` is `relation`.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|relation|
|mode|sql|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "unit": "minutes",
  "value": 10
}
```

A duration of time, represented as a unit and a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|true|none|The unit of time.|
|value|integer|true|none|The value of the duration.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|minutes|
|unit|hours|
|unit|days|
|unit|weeks|
|unit|months|

<h2 id="tocS_EmailPartialBlock">EmailPartialBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemailpartialblock"></a>
<a id="schema_EmailPartialBlock"></a>
<a id="tocSemailpartialblock"></a>
<a id="tocsemailpartialblock"></a>

```json
{
  "attrs": {
    "foo": "bar"
  },
  "key": "my_partial",
  "layout_attrs": {
    "padding_bottom": 8,
    "padding_left": 4,
    "padding_right": 4,
    "padding_top": 8
  },
  "name": "my_partial",
  "type": "partial"
}
```

A partial block in an email template, used to render a reusable partial component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attrs|object|true|none|The attributes to pass to the partial block.|
|id|string(uuid)|false|none|The ID of the block.|
|key|string|true|none|The key of the partial block to invoke.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|name|string|true|none|The name of the partial block.|
|type|string|true|none|The type of the block.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|partial|

<h2 id="tocS_PaginatedPartialResponse">PaginatedPartialResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpartialresponse"></a>
<a id="schema_PaginatedPartialResponse"></a>
<a id="tocSpaginatedpartialresponse"></a>
<a id="tocspaginatedpartialresponse"></a>

```json
{
  "entries": [
    {
      "content": "<p>Hello, world!</p>",
      "description": "This is a test partial",
      "environment": "development",
      "icon_name": "icon-name",
      "input_schema": [
        {
          "key": "text_field",
          "label": "My text field",
          "settings": {
            "description": "A description of the text field",
            "max_length": 100,
            "min_length": 10,
            "required": true
          },
          "type": "text"
        }
      ],
      "inserted_at": "2021-01-01T00:00:00Z",
      "key": "my-partial",
      "name": "My Partial",
      "type": "html",
      "updated_at": "2021-01-01T00:00:00Z",
      "valid": true,
      "visual_block_enabled": true
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Partial. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Partial](#schemapartial)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_WrappedGoalAttachmentRequestRequest">WrappedGoalAttachmentRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemawrappedgoalattachmentrequestrequest"></a>
<a id="schema_WrappedGoalAttachmentRequestRequest"></a>
<a id="tocSwrappedgoalattachmentrequestrequest"></a>
<a id="tocswrappedgoalattachmentrequestrequest"></a>

```json
{
  "attachment": {
    "attribution_window_days": 7
  }
}
```

Wraps the GoalAttachmentRequest request under the attachment key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[GoalAttachmentRequest](#schemagoalattachmentrequest)|true|none|Settings for the goal attachment.|

<h2 id="tocS_EmailButtonSetBlock">EmailButtonSetBlock</h2>
<!-- backwards compatibility -->
<a id="schemaemailbuttonsetblock"></a>
<a id="schema_EmailButtonSetBlock"></a>
<a id="tocSemailbuttonsetblock"></a>
<a id="tocsemailbuttonsetblock"></a>

```json
{
  "buttons": [
    {
      "action": "https://example.com/button-action",
      "label": "Click me",
      "size_attrs": {
        "is_fullwidth": false,
        "size": "sm"
      },
      "style_attrs": {
        "background_color": "#000000",
        "border_color": "#000000",
        "border_radius": 6,
        "border_width": 1,
        "text_color": "#FFFFFF"
      },
      "variant": "solid"
    }
  ],
  "layout_attrs": {
    "column_gap": 8,
    "horizontal_align": "left",
    "padding_bottom": 8,
    "padding_left": 4,
    "padding_right": 4,
    "padding_top": 8
  },
  "type": "button_set"
}
```

A button set block in an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttons|[[EmailButtonSetBlockButton](#schemaemailbuttonsetblockbutton)]|true|none|A list of buttons in the button set.|
|id|string(uuid)|false|none|The ID of the block.|
|layout_attrs|object|false|none|The layout attributes of the block.|
|type|string|true|none|The type of the block.|
|version|integer|false|none|The version of the block schema. This is automatically managed by Knock and should not be set manually. Currently all blocks are at version 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|button_set|

<h2 id="tocS_PaginatedChannelResponse">PaginatedChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedchannelresponse"></a>
<a id="schema_PaginatedChannelResponse"></a>
<a id="tocSpaginatedchannelresponse"></a>
<a id="tocspaginatedchannelresponse"></a>

```json
{
  "entries": [
    {
      "archived_at": null,
      "created_at": "2021-01-01T00:00:00Z",
      "custom_icon_url": null,
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "key": "my-sendgrid-channel",
      "name": "My Sendgrid Channel",
      "provider": "sendgrid",
      "type": "email",
      "updated_at": "2021-01-01T00:00:00Z",
      "visible_in": [
        "workflow",
        "broadcast"
      ]
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Channel. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Channel](#schemachannel)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_PaginatedEnvironmentResponse">PaginatedEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedenvironmentresponse"></a>
<a id="schema_PaginatedEnvironmentResponse"></a>
<a id="tocSpaginatedenvironmentresponse"></a>
<a id="tocspaginatedenvironmentresponse"></a>

```json
{
  "entries": [
    {
      "created_at": "2022-10-31T19:59:03Z",
      "deleted_at": null,
      "hide_pii_data": false,
      "label_color": "#000000",
      "last_commit_at": "2022-10-31T19:59:03Z",
      "name": "Development",
      "order": 0,
      "owner": "system",
      "slug": "development",
      "updated_at": "2022-10-31T19:59:03Z",
      "visibility": "visible"
    }
  ],
  "page_info": {
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of Environment. Contains a list of entries and page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Environment](#schemaenvironment)]|true|none|A list of entries.|
|page_info|[PageInfo](#schemapageinfo)|true|none|The information about a paginated result.|

<h2 id="tocS_PromoteAllResponse">PromoteAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromoteallresponse"></a>
<a id="schema_PromoteAllResponse"></a>
<a id="tocSpromoteallresponse"></a>
<a id="tocspromoteallresponse"></a>

```json
{
  "promote_group": {
    "actor": {
      "email": "john.doe@example.com",
      "name": "John Doe"
    },
    "commit_count": 3,
    "created_at": "2021-01-01T00:00:00Z",
    "id": "6f1b1c3e-3c1f-4b1d-8f0e-5f6d9d6a2c11",
    "source": "development",
    "source_type": "environment",
    "to_environment": "production"
  },
  "result": "success"
}
```

The response from promoting all changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|promote_group|object \| null|true|none|A summary of the promote, or null if there were no changes to promote.|
|result|string|true|none|The result of the promote operation.|

<h2 id="tocS_WebhookRequest">WebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhookrequest"></a>
<a id="schema_WebhookRequest"></a>
<a id="tocSwebhookrequest"></a>
<a id="tocswebhookrequest"></a>

```json
{
  "active": true,
  "description": "My webhook endpoint",
  "event_types": [
    "message.sent",
    "message.delivered"
  ],
  "url": "https://example.com/webhooks"
}
```

The request body for creating or updating an outbound webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|Whether the webhook should be active.|
|description|string \| null|false|none|An optional description of the webhook.|
|event_types|[string]|true|none|The list of event types that this webhook should be subscribed to, in dotted format (e.g. `message.sent`).|
|url|string|true|none|The URL that the webhook will send events to.|
