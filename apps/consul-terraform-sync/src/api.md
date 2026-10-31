<h1 id="cts-api">CTS API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API Documentation for Consul-Terraform-Sync, for more information see [Consul NIA API](https://www.consul.io/docs/nia/api)

Base URLs:

* <a href="http://localhost:8558">http://localhost:8558</a> - The Consul-Terraform-Sync Server

License: <a href="https://github.com/hashicorp/consul-terraform-sync/blob/main/LICENSE">MPL-2.0 License</a>

<h1 id="cts-api-status">status</h1>

## Gets cluster status when CTS is configured with high availability

<a id="opIdgetClusterStatus"></a>

> Code samples

```bash
curl http://localhost:8558/v1/status/cluster \
  -H 'Accept: application/json'
```

`GET /v1/status/cluster`

CTS Enterprise Only. Checks the current status of the CTS cluster and returns a list of cluster members and their associated metadata

> Example responses

> 200 Response

```json
{
  "cluster_name": "cluster-a",
  "members": [
    {
      "id": "cts-01",
      "service_name": "consul-terraform-sync",
      "healthy": true,
      "leader": true,
      "address": "cts-01.example.com"
    },
    {
      "id": "cts-02",
      "service_name": "consul-terraform-sync",
      "healthy": false,
      "leader": false
    }
  ],
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

<h3 id="gets-cluster-status-when-cts-is-configured-with-high-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status of cluster members|[ClusterStatusResponse](#schemaclusterstatusresponse)|
|default|Default|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cts-api-health">health</h1>

## Gets health status

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl http://localhost:8558/v1/health \
  -H 'Accept: application/json'
```

`GET /v1/health`

Checks the health of CTS

> Example responses

> 200 Response

```json
{
  "error": {
    "message": "this is an error message"
  }
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  }
}
```

<h3 id="gets-health-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CTS is healthy|[HealthCheckResponse](#schemahealthcheckresponse)|
|default|Default|CTS is unhealthy|[HealthCheckResponse](#schemahealthcheckresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cts-api-tasks">tasks</h1>

## Gets all tasks

<a id="opIdgetAllTasks"></a>

> Code samples

```bash
curl http://localhost:8558/v1/tasks \
  -H 'Accept: application/json'
```

`GET /v1/tasks`

Retrieves information for all tasks

> Example responses

> 200 Response

```json
{
  "tasks": [
    {
      "condition": {
        "services": {
          "names": [
            "web",
            "api"
          ]
        }
      },
      "description": "A basic task",
      "enabled": true,
      "name": "taskC",
      "providers": [],
      "module": "org/example/module",
      "variables": {
        "var1": "example.field"
      },
      "version": "1.0.0"
    }
  ],
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

<h3 id="gets-all-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks retrieved|[TasksResponse](#schematasksresponse)|
|default|Default|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new task

<a id="opIdcreateTask"></a>

> Code samples

```bash
curl http://localhost:8558/v1/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "task": {
      "condition": {
        "services": {
          "names": [
            "web",
            "api"
          ]
        }
      },
      "description": "A basic task",
      "enabled": true,
      "name": "taskC",
      "providers": [],
      "module": "org/example/module",
      "variables": {
        "var1": "example.field"
      },
      "version": "1.0.0"
    }
  }'
```

`POST /v1/tasks`

Creates a new task


> Body parameter

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  }
}
```

<h3 id="creates-a-new-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run|query|string|false|Different modes for running. Supports run now which runs the task immediately<br>and run inspect which creates a dry run task that is inspected and discarded<br>at the end of the inspection.<br>|
|body|body|[TaskRequest](#schemataskrequest)|true|Task to create|
|» task|body|[Task](#schematask)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|run|now|
|run|inspect|

> Example responses

> 200 Response

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6",
  "run": {
    "plan": "module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource \"local_file\" \"greeting_services\" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = \"2d5049b47d16d9c4d15cc59950fdd3de24b79716\" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n",
    "changes_present": true,
    "tfc_run_url": "https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345"
  },
  "error": {
    "message": "this is an error message"
  }
}
```

> 201 Response

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6",
  "run": {
    "plan": "module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource \"local_file\" \"greeting_services\" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = \"2d5049b47d16d9c4d15cc59950fdd3de24b79716\" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n",
    "changes_present": true,
    "tfc_run_url": "https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345"
  },
  "error": {
    "message": "this is an error message"
  }
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

<h3 id="creates-a-new-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task response with inspection, task not created|[TaskResponse](#schemataskresponse)|
|201|Created|Task response, task is created|[TaskResponse](#schemataskresponse)|
|default|Default|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a task by name

<a id="opIdgetTaskByName"></a>

> Code samples

```bash
curl http://localhost:8558/v1/tasks/taskA \
  -H 'Accept: application/json'
```

`GET /v1/tasks/{name}`

Retrieves information for a single task based on the name provided

<h3 id="gets-a-task-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of task to retrieve|

> Example responses

> 200 Response

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6",
  "run": {
    "plan": "module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource \"local_file\" \"greeting_services\" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = \"2d5049b47d16d9c4d15cc59950fdd3de24b79716\" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n",
    "changes_present": true,
    "tfc_run_url": "https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345"
  },
  "error": {
    "message": "this is an error message"
  }
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

<h3 id="gets-a-task-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task retrieved|[TaskResponse](#schemataskresponse)|
|default|Default|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Marks a task for deletion

<a id="opIddeleteTaskByName"></a>

> Code samples

```bash
curl http://localhost:8558/v1/tasks/taskA \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/tasks/{name}`

Marks a single task for deletion based on the name provided. The task will be
deleted once it is not running.


<h3 id="marks-a-task-for-deletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of task to delete|

> Example responses

> 202 Response

```json
{
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

> default Response

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

<h3 id="marks-a-task-for-deletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Task marked for deletion|[TaskDeleteResponse](#schemataskdeleteresponse)|
|default|Default|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ClusterStatusResponse">ClusterStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatusresponse"></a>
<a id="schema_ClusterStatusResponse"></a>
<a id="tocSclusterstatusresponse"></a>
<a id="tocsclusterstatusresponse"></a>

```json
{
  "cluster_name": "cluster-a",
  "members": [
    {
      "id": "cts-01",
      "service_name": "consul-terraform-sync",
      "healthy": true,
      "leader": true,
      "address": "cts-01.example.com"
    },
    {
      "id": "cts-02",
      "service_name": "consul-terraform-sync",
      "healthy": false,
      "leader": false
    }
  ],
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_name|string|true|none|the name of the CTS cluster|
|members|[[Member](#schemamember)]|true|none|the list of CTS instances which are part of this cluster|
|request_id|[RequestID](#schemarequestid)|true|none|none|

<h2 id="tocS_TaskRequest">TaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemataskrequest"></a>
<a id="schema_TaskRequest"></a>
<a id="tocStaskrequest"></a>
<a id="tocstaskrequest"></a>

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task|[Task](#schematask)|true|none|none|

<h2 id="tocS_TasksResponse">TasksResponse</h2>
<!-- backwards compatibility -->
<a id="schematasksresponse"></a>
<a id="schema_TasksResponse"></a>
<a id="tocStasksresponse"></a>
<a id="tocstasksresponse"></a>

```json
{
  "tasks": [
    {
      "condition": {
        "services": {
          "names": [
            "web",
            "api"
          ]
        }
      },
      "description": "A basic task",
      "enabled": true,
      "name": "taskC",
      "providers": [],
      "module": "org/example/module",
      "variables": {
        "var1": "example.field"
      },
      "version": "1.0.0"
    }
  ],
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|[[Task](#schematask)]|false|none|none|
|request_id|[RequestID](#schemarequestid)|true|none|none|

<h2 id="tocS_TaskResponse">TaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskresponse"></a>
<a id="schema_TaskResponse"></a>
<a id="tocStaskresponse"></a>
<a id="tocstaskresponse"></a>

```json
{
  "task": {
    "condition": {
      "services": {
        "names": [
          "web",
          "api"
        ]
      }
    },
    "description": "A basic task",
    "enabled": true,
    "name": "taskC",
    "providers": [],
    "module": "org/example/module",
    "variables": {
      "var1": "example.field"
    },
    "version": "1.0.0"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6",
  "run": {
    "plan": "module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource \"local_file\" \"greeting_services\" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = \"2d5049b47d16d9c4d15cc59950fdd3de24b79716\" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n",
    "changes_present": true,
    "tfc_run_url": "https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345"
  },
  "error": {
    "message": "this is an error message"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task|[Task](#schematask)|false|none|none|
|request_id|[RequestID](#schemarequestid)|true|none|none|
|run|[Run](#schemarun)|false|none|none|
|error|[Error](#schemaerror)|false|none|none|

<h2 id="tocS_TaskDeleteResponse">TaskDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskdeleteresponse"></a>
<a id="schema_TaskDeleteResponse"></a>
<a id="tocStaskdeleteresponse"></a>
<a id="tocstaskdeleteresponse"></a>

```json
{
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6",
  "error": {
    "message": "this is an error message"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|[RequestID](#schemarequestid)|true|none|none|
|error|[Error](#schemaerror)|false|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "message": "this is an error message"
  },
  "request_id": "bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|true|none|none|
|request_id|[RequestID](#schemarequestid)|true|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": "cts-01",
  "service_name": "consul-terraform-sync",
  "healthy": true,
  "leader": true,
  "address": "cts-01.example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|the id of the CTS instance|
|service_name|string|true|none|the service name of the CTS instance|
|healthy|boolean|true|none|the health status of the cts instance|
|leader|boolean|true|none|boolean true if CTS instance is a cluster leader, false otherwise|
|address|string|false|none|the address if this instance is the CTS leader, empty otherwise|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "condition": {
    "services": {
      "names": [
        "web",
        "api"
      ]
    }
  },
  "description": "A basic task",
  "enabled": true,
  "name": "taskC",
  "providers": [],
  "module": "org/example/module",
  "variables": {
    "var1": "example.field"
  },
  "version": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The human readable text to describe the task.|
|enabled|boolean|false|none|Whether the task is enabled or disabled from executing.|
|name|string|true|none|The unique name of the task.|
|providers|[string]|false|none|The list of provider names that the task's module uses.|
|module|string|true|none|The location of the Terraform module.|
|variables|[VariableMap](#schemavariablemap)|false|none|The map of variables that are provided to the task's module.|
|version|string|false|none|The version of the configured module that the task uses. Defaults to the latest version if not set.|
|buffer_period|[BufferPeriod](#schemabufferperiod)|false|none|The buffer period for triggering task execution.|
|condition|[Condition](#schemacondition)|true|none|The condition on which to trigger the task to execute. If the task has the deprecated services field configured as a module input, it is represented here as condition.services.|
|module_input|[ModuleInput](#schemamoduleinput)|false|none|The additional module input(s) that the tasks provides to the Terraform module on execution. If the task has the deprecated services field configured as a module input, it is represented here as module_input.services.|
|terraform_version|string|false|none|Deprecated, use task.terraform_cloud_workspace.terraform_version instead. Enterprise only. The version of Terraform to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver. Defaults to the latest compatible version if not set.|
|terraform_cloud_workspace|[TerraformCloudWorkspace](#schematerraformcloudworkspace)|false|none|Enterprise only. Configuration values to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver.|

<h2 id="tocS_BufferPeriod">BufferPeriod</h2>
<!-- backwards compatibility -->
<a id="schemabufferperiod"></a>
<a id="schema_BufferPeriod"></a>
<a id="tocSbufferperiod"></a>
<a id="tocsbufferperiod"></a>

```json
{
  "enabled": true,
  "max": "5s",
  "min": "20s"
}
```

The buffer period for triggering task execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the buffer period is enabled or disabled. Defaults to the global buffer period configured for CTS.|
|max|string|false|none|The maximum period of time to wait after changes are detected before triggering the task. Defaults to the global buffer period configured for CTS.|
|min|string|false|none|The minimum period of time to wait after changes are detected before triggering the task. Defaults to the global buffer period configured for CTS.|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "catalog_services": {
    "datacenter": "dc1",
    "regexp": "web.*",
    "namespace": "default",
    "node_meta": {
      "key": "value"
    },
    "use_as_module_input": false
  },
  "services": {
    "regexp": "web.*",
    "names": [
      "web",
      "api"
    ],
    "filter": "\\\"test\\\" in Service.Tags",
    "datacenter": "dc1",
    "namespace": "default",
    "cts_user_defined_meta": {
      "property1": "string",
      "property2": "string"
    },
    "use_as_module_input": false
  },
  "consul_kv": {
    "path": "my-key",
    "recurse": false,
    "datacenter": "dc1",
    "namespace": "default",
    "use_as_module_input": false
  },
  "schedule": {
    "cron": "* * * * Mon"
  }
}
```

The condition on which to trigger the task to execute. If the task has the deprecated services field configured as a module input, it is represented here as condition.services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog_services|[CatalogServicesCondition](#schemacatalogservicescondition)|false|none|none|
|services|[ServicesCondition](#schemaservicescondition)|false|none|none|
|consul_kv|[ConsulKVCondition](#schemaconsulkvcondition)|false|none|none|
|schedule|[ScheduleCondition](#schemaschedulecondition)|false|none|none|

<h2 id="tocS_ModuleInput">ModuleInput</h2>
<!-- backwards compatibility -->
<a id="schemamoduleinput"></a>
<a id="schema_ModuleInput"></a>
<a id="tocSmoduleinput"></a>
<a id="tocsmoduleinput"></a>

```json
{
  "services": {
    "regexp": "web.*",
    "names": [
      "web",
      "api"
    ],
    "filter": "\\\"test\\\" in Service.Tags",
    "datacenter": "dc1",
    "namespace": "default",
    "cts_user_defined_meta": {
      "property1": "string",
      "property2": "string"
    }
  },
  "consul_kv": {
    "path": "my-key",
    "recurse": false,
    "datacenter": "dc1",
    "namespace": "default"
  }
}
```

The additional module input(s) that the tasks provides to the Terraform module on execution. If the task has the deprecated services field configured as a module input, it is represented here as module_input.services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[ServicesModuleInput](#schemaservicesmoduleinput)|false|none|none|
|consul_kv|[ConsulKVModuleInput](#schemaconsulkvmoduleinput)|false|none|none|

<h2 id="tocS_VariableMap">VariableMap</h2>
<!-- backwards compatibility -->
<a id="schemavariablemap"></a>
<a id="schema_VariableMap"></a>
<a id="tocSvariablemap"></a>
<a id="tocsvariablemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

The map of variables that are provided to the task's module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_ServicesCondition">ServicesCondition</h2>
<!-- backwards compatibility -->
<a id="schemaservicescondition"></a>
<a id="schema_ServicesCondition"></a>
<a id="tocSservicescondition"></a>
<a id="tocsservicescondition"></a>

```json
{
  "regexp": "web.*",
  "names": [
    "web",
    "api"
  ],
  "filter": "\\\"test\\\" in Service.Tags",
  "datacenter": "dc1",
  "namespace": "default",
  "cts_user_defined_meta": {
    "property1": "string",
    "property2": "string"
  },
  "use_as_module_input": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regexp|string|false|none|none|
|names|[string]|false|none|none|
|filter|string|false|none|none|
|datacenter|string|false|none|none|
|namespace|string|false|none|none|
|cts_user_defined_meta|object|false|none|none|
|use_as_module_input|boolean|false|none|none|

<h2 id="tocS_CatalogServicesCondition">CatalogServicesCondition</h2>
<!-- backwards compatibility -->
<a id="schemacatalogservicescondition"></a>
<a id="schema_CatalogServicesCondition"></a>
<a id="tocScatalogservicescondition"></a>
<a id="tocscatalogservicescondition"></a>

```json
{
  "datacenter": "dc1",
  "regexp": "web.*",
  "namespace": "default",
  "node_meta": {
    "key": "value"
  },
  "use_as_module_input": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datacenter|string|false|none|none|
|regexp|string|true|none|none|
|namespace|string|false|none|none|
|node_meta|object|false|none|none|
|use_as_module_input|boolean|false|none|none|

<h2 id="tocS_ConsulKVCondition">ConsulKVCondition</h2>
<!-- backwards compatibility -->
<a id="schemaconsulkvcondition"></a>
<a id="schema_ConsulKVCondition"></a>
<a id="tocSconsulkvcondition"></a>
<a id="tocsconsulkvcondition"></a>

```json
{
  "path": "my-key",
  "recurse": false,
  "datacenter": "dc1",
  "namespace": "default",
  "use_as_module_input": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|recurse|boolean|false|none|none|
|datacenter|string|false|none|none|
|namespace|string|false|none|none|
|use_as_module_input|boolean|false|none|none|

<h2 id="tocS_ScheduleCondition">ScheduleCondition</h2>
<!-- backwards compatibility -->
<a id="schemaschedulecondition"></a>
<a id="schema_ScheduleCondition"></a>
<a id="tocSschedulecondition"></a>
<a id="tocsschedulecondition"></a>

```json
{
  "cron": "* * * * Mon"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|true|none|none|

<h2 id="tocS_ServicesModuleInput">ServicesModuleInput</h2>
<!-- backwards compatibility -->
<a id="schemaservicesmoduleinput"></a>
<a id="schema_ServicesModuleInput"></a>
<a id="tocSservicesmoduleinput"></a>
<a id="tocsservicesmoduleinput"></a>

```json
{
  "regexp": "web.*",
  "names": [
    "web",
    "api"
  ],
  "filter": "\\\"test\\\" in Service.Tags",
  "datacenter": "dc1",
  "namespace": "default",
  "cts_user_defined_meta": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regexp|string|false|none|none|
|names|[string]|false|none|none|
|filter|string|false|none|none|
|datacenter|string|false|none|none|
|namespace|string|false|none|none|
|cts_user_defined_meta|object|false|none|none|

<h2 id="tocS_ConsulKVModuleInput">ConsulKVModuleInput</h2>
<!-- backwards compatibility -->
<a id="schemaconsulkvmoduleinput"></a>
<a id="schema_ConsulKVModuleInput"></a>
<a id="tocSconsulkvmoduleinput"></a>
<a id="tocsconsulkvmoduleinput"></a>

```json
{
  "path": "my-key",
  "recurse": false,
  "datacenter": "dc1",
  "namespace": "default"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|recurse|boolean|false|none|none|
|datacenter|string|false|none|none|
|namespace|string|false|none|none|

<h2 id="tocS_TerraformCloudWorkspace">TerraformCloudWorkspace</h2>
<!-- backwards compatibility -->
<a id="schematerraformcloudworkspace"></a>
<a id="schema_TerraformCloudWorkspace"></a>
<a id="tocSterraformcloudworkspace"></a>
<a id="tocsterraformcloudworkspace"></a>

```json
{
  "execution_mode": "agent",
  "agent_pool_id": "apool-123",
  "agent_pool_name": "test_agent_pool",
  "terraform_version": "1.0.0"
}
```

Enterprise only. Configuration values to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution_mode|string|false|none|Enterprise only. Execution mode to set for the Terraform Cloud workspace associated with the task. Can only be "remote" or "agent". Defaults to "remote".|
|agent_pool_id|string|false|none|Enterprise only. Agent pool ID to set for the Terraform Cloud workspace associated with the task when the execution mode is "agent". Either agent_pool_id or agent_pool_name is required if execution mode is "agent". If both are set, then agent_pool_id takes precedence.|
|agent_pool_name|string|false|none|Enterprise only. Name of agent pool to set for the Terraform Cloud workspace associated with the task when the execution mode is "agent". Either agent_pool_id or agent_pool_name is required if execution mode is "agent". If both are set, then agent_pool_id takes precedence.|
|terraform_version|string|false|none|Enterprise only. The version of Terraform to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver. Defaults to the latest compatible version if not set.|

<h2 id="tocS_Run">Run</h2>
<!-- backwards compatibility -->
<a id="schemarun"></a>
<a id="schema_Run"></a>
<a id="tocSrun"></a>
<a id="tocsrun"></a>

```json
{
  "plan": "module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource \"local_file\" \"greeting_services\" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = \"2d5049b47d16d9c4d15cc59950fdd3de24b79716\" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n",
  "changes_present": true,
  "tfc_run_url": "https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan|string|false|none|none|
|changes_present|boolean|false|none|Whether or not infrastructure changes were detected during task inspection.|
|tfc_run_url|string|false|none|Enterprise only. URL of Terraform Cloud run that corresponds to the task run.|

<h2 id="tocS_RequestID">RequestID</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestID"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"bb63cd70-8f45-4f42-b27b-bc2a6f4931e6"
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "this is an error message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_HealthCheckResponse">HealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckresponse"></a>
<a id="schema_HealthCheckResponse"></a>
<a id="tocShealthcheckresponse"></a>
<a id="tocshealthcheckresponse"></a>

```json
{
  "error": {
    "message": "this is an error message"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
