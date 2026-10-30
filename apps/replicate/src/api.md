<h1 id="replicate-http-api">Replicate HTTP API v1.0.0-a1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A web service for running Replicate models

Base URLs:

* <a href="https://api.replicate.com/v1">https://api.replicate.com/v1</a>

<a href="https://replicate.com/terms">Terms of service</a>
Email: <a href="mailto:team@replicate.com">team@replicate.com</a> 

<a href="https://replicate.com/docs/reference/http">Replicate HTTP API</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="replicate-http-api-default">Default</h1>

## Get the authenticated account

<a id="opIdaccount.get"></a>

> Code samples

```bash
curl https://api.replicate.com/account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account`

Returns information about the user or organization associated with the provided API token.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/account
```

The response will be a JSON object describing the account:

```json
{
  "type": "organization",
  "username": "acme",
  "name": "Acme Corp, Inc.",
  "github_url": "https://github.com/acme",
}
```


> Example responses

> 200 Response

```json
{
  "avatar_url": "http://example.com",
  "github_url": "http://example.com",
  "name": "string",
  "type": "organization",
  "username": "string"
}
```

<h3 id="get-the-authenticated-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-authenticated-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string(uri)|false|none|The avatar URL for the account.|
|github_url|string(uri)|false|none|The GitHub URL of the account.|
|name|string|false|none|The name of the account.|
|type|string|true|none|The account type. Can be a user or an organization.|
|username|string|true|none|The username of the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|organization|
|type|user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List collections of models

<a id="opIdcollections.list"></a>

> Code samples

```bash
curl https://api.replicate.com/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /collections`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/collections
```

The response will be a paginated JSON list of collection objects:

```json
{
  "next": "null",
  "previous": null,
  "results": [
    {
      "name": "Super resolution",
      "slug": "super-resolution",
      "description": "Upscaling models that create high-quality images from low-quality images."
    }
  ]
}
```


> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "description": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="list-collections-of-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_paginated_collection_response](#schemaschemas_paginated_collection_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a collection of models

<a id="opIdcollections.get"></a>

> Code samples

```bash
curl https://api.replicate.com/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /collections/{collection_slug}`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/collections/super-resolution
```

The response will be a collection object with a nested list of the models in that collection:

```json
{
  "name": "Super resolution",
  "slug": "super-resolution",
  "description": "Upscaling models that create high-quality images from low-quality images.",
  "full_description": "## Overview\n\nThese models generate high-quality images from low-quality images. Many of these models are based on **advanced upscaling techniques**.\n\n### Key Features\n\n- Enhance image resolution\n- Restore fine details\n- Improve overall image quality",
  "models": [...]
}
```


<h3 id="get-a-collection-of-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_slug|path|string|true|The slug of the collection, like `super-resolution` or `image-restoration`. See [replicate.com/collections](https://replicate.com/collections).<br>|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "full_description": "string",
  "models": [
    {
      "cover_image_url": "http://example.com",
      "default_example": {},
      "description": "string",
      "github_url": "http://example.com",
      "is_official": true,
      "latest_version": {},
      "license_url": "http://example.com",
      "name": "string",
      "owner": "string",
      "paper_url": "http://example.com",
      "run_count": 0,
      "url": "http://example.com",
      "visibility": "public"
    }
  ],
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-a-collection-of-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_collection_response](#schemaschemas_collection_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List deployments

<a id="opIddeployments.list"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deployments`

Get a list of deployments associated with the current account, including the latest release configuration for each deployment.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/deployments
```

The response will be a paginated JSON array of deployment objects, sorted with the most recent deployment first:

```json
{
  "next": "http://api.replicate.com/v1/deployments?cursor=cD0yMDIzLTA2LTA2KzIzJTNBNDAlM0EwOC45NjMwMDAlMkIwMCUzQTAw",
  "previous": null,
  "results": [
    {
      "owner": "replicate",
      "name": "my-app-image-generator",
      "current_release": {
        "number": 1,
        "model": "stability-ai/sdxl",
        "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
        "created_at": "2024-02-15T16:32:57.018467Z",
        "created_by": {
          "type": "organization",
          "username": "acme",
          "name": "Acme Corp, Inc.",
          "avatar_url": "https://cdn.replicate.com/avatars/acme.png",
          "github_url": "https://github.com/acme"
        },
        "configuration": {
          "hardware": "gpu-t4",
          "min_instances": 1,
          "max_instances": 5
        }
      }
    }
  ]
}
```


> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "current_release": {
        "configuration": {
          "hardware": "string",
          "max_instances": 0,
          "min_instances": 0
        },
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": {
          "avatar_url": "http://example.com",
          "github_url": "http://example.com",
          "name": "string",
          "type": "organization",
          "username": "string"
        },
        "model": "string",
        "number": 0,
        "version": "string"
      },
      "name": "string",
      "owner": "string"
    }
  ]
}
```

<h3 id="list-deployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-deployments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|A URL pointing to the next page of deployment objects if any|
|previous|string \| null|false|none|A URL pointing to the previous page of deployment objects if any|
|results|[[schemas_deployment_response](#schemaschemas_deployment_response)]|false|none|An array containing a page of deployment objects|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a deployment

<a id="opIddeployments.create"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hardware": "string",
    "max_instances": 0,
    "min_instances": 0,
    "model": "string",
    "name": "string",
    "version": "string"
  }'
```

`POST /deployments`

Create a new deployment:

Example cURL request:

```console
curl -s \
  -X POST \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "my-app-image-generator",
        "model": "stability-ai/sdxl",
        "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
        "hardware": "gpu-t4",
        "min_instances": 0,
        "max_instances": 3
      }' \
  https://api.replicate.com/v1/deployments
```

The response will be a JSON object describing the deployment:

```json
{
  "owner": "acme",
  "name": "my-app-image-generator",
  "current_release": {
    "number": 1,
    "model": "stability-ai/sdxl",
    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
    "created_at": "2024-02-15T16:32:57.018467Z",
    "created_by": {
      "type": "organization",
      "username": "acme",
      "name": "Acme Corp, Inc.",
      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",
      "github_url": "https://github.com/acme"
    },
    "configuration": {
      "hardware": "gpu-t4",
      "min_instances": 1,
      "max_instances": 5
    }
  }
}
```


> Body parameter

```json
{
  "hardware": "string",
  "max_instances": 0,
  "min_instances": 0,
  "model": "string",
  "name": "string",
  "version": "string"
}
```

<h3 id="create-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» hardware|body|string|true|The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.|
|» max_instances|body|integer|true|The maximum number of instances for scaling.|
|» min_instances|body|integer|true|The minimum number of instances for scaling.|
|» model|body|string|true|The full name of the model that you want to deploy e.g. stability-ai/sdxl.|
|» name|body|string|true|The name of the deployment.|
|» version|body|string|true|The 64-character string ID of the model version that you want to deploy.|

> Example responses

> 200 Response

```json
{
  "current_release": {
    "configuration": {
      "hardware": "string",
      "max_instances": 0,
      "min_instances": 0
    },
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": {
      "avatar_url": "http://example.com",
      "github_url": "http://example.com",
      "name": "string",
      "type": "organization",
      "username": "string"
    },
    "model": "string",
    "number": 0,
    "version": "string"
  },
  "name": "string",
  "owner": "string"
}
```

<h3 id="create-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_deployment_response](#schemaschemas_deployment_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a deployment

<a id="opIddeployments.get"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deployments/{deployment_owner}/{deployment_name}`

Get information about a deployment by name including the current release.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/deployments/replicate/my-app-image-generator
```

The response will be a JSON object describing the deployment:

```json
{
  "owner": "acme",
  "name": "my-app-image-generator",
  "current_release": {
    "number": 1,
    "model": "stability-ai/sdxl",
    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
    "created_at": "2024-02-15T16:32:57.018467Z",
    "created_by": {
      "type": "organization",
      "username": "acme",
      "name": "Acme Corp, Inc.",
      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",
      "github_url": "https://github.com/acme"
    },
    "configuration": {
      "hardware": "gpu-t4",
      "min_instances": 1,
      "max_instances": 5
    }
  }
}
```


<h3 id="get-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deployment_owner|path|string|true|The name of the user or organization that owns the deployment.<br>|
|deployment_name|path|string|true|The name of the deployment.<br>|

> Example responses

> 200 Response

```json
{
  "current_release": {
    "configuration": {
      "hardware": "string",
      "max_instances": 0,
      "min_instances": 0
    },
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": {
      "avatar_url": "http://example.com",
      "github_url": "http://example.com",
      "name": "string",
      "type": "organization",
      "username": "string"
    },
    "model": "string",
    "number": 0,
    "version": "string"
  },
  "name": "string",
  "owner": "string"
}
```

<h3 id="get-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_deployment_response](#schemaschemas_deployment_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a deployment

<a id="opIddeployments.delete"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deployments/{deployment_owner}/{deployment_name}`

Delete a deployment

Deployment deletion has some restrictions:

- You can only delete deployments that have been offline and unused for at least 15 minutes.

Example cURL request:

```command
curl -s -X DELETE \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/deployments/acme/my-app-image-generator
```

The response will be an empty 204, indicating the deployment has been deleted.


<h3 id="delete-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deployment_owner|path|string|true|The name of the user or organization that owns the deployment.<br>|
|deployment_name|path|string|true|The name of the deployment.<br>|

<h3 id="delete-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a deployment

<a id="opIddeployments.update"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hardware": "string",
    "max_instances": 0,
    "min_instances": 0,
    "version": "string"
  }'
```

`PATCH /deployments/{deployment_owner}/{deployment_name}`

Update properties of an existing deployment, including hardware, min/max instances, and the deployment's underlying model [version](https://replicate.com/docs/how-does-replicate-work#versions).

Example cURL request:

```console
curl -s \
  -X PATCH \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"min_instances": 3, "max_instances": 10}' \
  https://api.replicate.com/v1/deployments/acme/my-app-image-generator
```

The response will be a JSON object describing the deployment:

```json
{
  "owner": "acme",
  "name": "my-app-image-generator",
  "current_release": {
    "number": 2,
    "model": "stability-ai/sdxl",
    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
    "created_at": "2024-02-15T16:32:57.018467Z",
    "created_by": {
      "type": "organization",
      "username": "acme",
      "name": "Acme Corp, Inc.",
      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",
      "github_url": "https://github.com/acme"
    },
    "configuration": {
      "hardware": "gpu-t4",
      "min_instances": 3,
      "max_instances": 10
    }
  }
}
```

Updating any deployment properties will increment the `number` field of the `current_release`.


> Body parameter

```json
{
  "hardware": "string",
  "max_instances": 0,
  "min_instances": 0,
  "version": "string"
}
```

<h3 id="update-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deployment_owner|path|string|true|The name of the user or organization that owns the deployment.<br>|
|deployment_name|path|string|true|The name of the deployment.<br>|
|body|body|object|false|none|
|» hardware|body|string|false|The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.|
|» max_instances|body|integer|false|The maximum number of instances for scaling.|
|» min_instances|body|integer|false|The minimum number of instances for scaling.|
|» version|body|string|false|The ID of the model version that you want to deploy|

> Example responses

> 200 Response

```json
{
  "current_release": {
    "configuration": {
      "hardware": "string",
      "max_instances": 0,
      "min_instances": 0
    },
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": {
      "avatar_url": "http://example.com",
      "github_url": "http://example.com",
      "name": "string",
      "type": "organization",
      "username": "string"
    },
    "model": "string",
    "number": 0,
    "version": "string"
  },
  "name": "string",
  "owner": "string"
}
```

<h3 id="update-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_deployment_response](#schemaschemas_deployment_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a prediction using a deployment

<a id="opIddeployments.predictions.create"></a>

> Code samples

```bash
curl https://api.replicate.com/deployments/string/string/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": {
      "prompt": "Tell me a joke",
      "system_prompt": "You are a helpful assistant"
    },
    "stream": true,
    "webhook": "https://example.com/my-webhook-handler",
    "webhook_events_filter": [
      "start",
      "completed"
    ]
  }'
```

`POST /deployments/{deployment_owner}/{deployment_name}/predictions`

Create a prediction for the deployment and inputs you provide.

Example cURL request:

```console
curl -s -X POST -H 'Prefer: wait' \
  -d '{"input": {"prompt": "A photo of a bear riding a bicycle over the moon"}}' \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  https://api.replicate.com/v1/deployments/acme/my-app-image-generator/predictions
```

The request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.

For a complete overview of the `deployments.predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.


> Body parameter

```json
{
  "input": {
    "prompt": "Tell me a joke",
    "system_prompt": "You are a helpful assistant"
  },
  "stream": true,
  "webhook": "https://example.com/my-webhook-handler",
  "webhook_events_filter": [
    "start",
    "completed"
  ]
}
```

<h3 id="create-a-prediction-using-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deployment_owner|path|string|true|The name of the user or organization that owns the deployment.<br>|
|deployment_name|path|string|true|The name of the deployment.<br>|
|Prefer|header|string|false|Leave the request open and wait for the model to finish generating output. Set to `wait=n` where n is a number of seconds between 1 and 60.<br><br>See [sync mode](https://replicate.com/docs/topics/predictions/create-a-prediction#sync-mode) for more information.<br>|
|Cancel-After|header|string|false|The maximum time the prediction can run before it is automatically canceled. The lifetime is measured from when the prediction is created.<br><br>The duration can be specified as string with an optional unit suffix:<br>- `s` for seconds (e.g., `30s`, `90s`)<br>- `m` for minutes (e.g., `5m`, `15m`)<br>- `h` for hours (e.g., `1h`, `2h30m`)<br>- defaults to seconds if no unit suffix is provided (e.g. `30` is the same as `30s`)<br><br>You can combine units for more precision (e.g., `1h30m45s`).<br><br>The minimum allowed duration is 5 seconds.<br>|
|body|body|[schemas_prediction_request](#schemaschemas_prediction_request)|false|none|
|» input|body|object|true|The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the "API" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.<br><br>Files should be passed as HTTP URLs or data URLs.<br><br>Use an HTTP URL when:<br><br>- you have a large file > 256kb<br>- you want to be able to use the file multiple times<br>- you want your prediction metadata to be associable with your input files<br><br>Use a data URL when:<br><br>- you have a small file <= 256kb<br>- you don't want to upload and host the file somewhere<br>- you don't need to use the file again (Replicate will not store it)<br>|
|» stream|body|boolean|false|**This field is deprecated.**<br><br>Request a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).<br><br>This field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.<br>|
|» webhook|body|string|false|An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.<br>|
|» webhook_events_filter|body|[string]|false|By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:<br><br>- `start`: immediately on prediction start<br>- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)<br>- `logs`: each time log output is generated by a prediction<br>- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:<br><br>```json<br>{<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» webhook_events_filter|start|
|» webhook_events_filter|output|
|» webhook_events_filter|logs|
|» webhook_events_filter|completed|

> Example responses

> 201 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

> 202 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="create-a-prediction-using-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.|[schemas_prediction_response](#schemaschemas_prediction_response)|
|202|Accepted|Prediction has been created but does not yet have all outputs|[schemas_prediction_response](#schemaschemas_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List files

<a id="opIdfiles.list"></a>

> Code samples

```bash
curl https://api.replicate.com/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files`

Get a paginated list of all files created by the user or organization associated with the provided API token.

Example cURL request:

```console
curl -s \
  -H "Authorization: Token $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/files
```

The response will be a paginated JSON array of file objects, sorted with the most recent file first.


> Example responses

> 200 Response

```json
{
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "checksums": {
        "sha256": "f047f8e745f9996c6e386064e06cb2007b8e6bc0a968a334fc0d2b2d64012066"
      },
      "content_type": "application/zip",
      "created_at": "2024-02-21T12:54:18.578761Z",
      "expires_at": "2024-02-21T13:54:18.578761Z",
      "id": "cneqzikepnug6xezperrr4z55o",
      "metadata": {
        "customer_reference_id": 123
      },
      "size": 69420,
      "urls": {
        "get": "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o"
      }
    }
  ]
}
```

<h3 id="list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[schemas_file_response](#schemaschemas_file_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a file

<a id="opIdfiles.create"></a>

> Code samples

```bash
curl https://api.replicate.com/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'content=@/path/to/file' \
  -F 'filename=string' \
  -F 'metadata={}' \
  -F 'type=application/octet-stream'
```

`POST /files`

Create a file by uploading its content and optional metadata.

Example cURL request:

```console
curl -X POST https://api.replicate.com/v1/files \
  -H "Authorization: Token $REPLICATE_API_TOKEN" \
  -H 'Content-Type: multipart/form-data' \
  -F 'content=@/path/to/archive.zip;type=application/zip;filename=example.zip' \
  -F 'metadata={"customer_reference_id": 123};type=application/json'
```

The request must include:
- `content`: The file content (required)
- `type`: The content / MIME type for the file (defaults to `application/octet-stream`)
- `filename`: The filename (required, ≤ 255 bytes, valid UTF-8)
- `metadata`: User-provided metadata associated with the file (defaults to `{}`, must be valid JSON)


> Body parameter

```yaml
content: string
filename: string
metadata: {}
type: application/octet-stream
```

<h3 id="create-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» content|body|string(binary)|true|The file content|
|» filename|body|string|false|The filename|
|» metadata|body|object|false|User-provided metadata associated with the file|
|» type|body|string|false|The content / MIME type for the file|

> Example responses

> 201 Response

```json
{
  "checksums": {
    "sha256": "f047f8e745f9996c6e386064e06cb2007b8e6bc0a968a334fc0d2b2d64012066"
  },
  "content_type": "application/zip",
  "created_at": "2024-02-21T12:54:18.578761Z",
  "expires_at": "2024-02-21T13:54:18.578761Z",
  "id": "cneqzikepnug6xezperrr4z55o",
  "metadata": {
    "customer_reference_id": 123
  },
  "size": 69420,
  "urls": {
    "get": "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o"
  }
}
```

> 413 Response

```json
{
  "detail": "Files must be less than 100MB in size"
}
```

<h3 id="create-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File has been created|[schemas_file_response](#schemaschemas_file_response)|
|413|Payload Too Large|Content Too Large|Inline|

<h3 id="create-a-file-responseschema">Response Schema</h3>

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a file

<a id="opIdfiles.get"></a>

> Code samples

```bash
curl https://api.replicate.com/files/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{file_id}`

Get the details of a file.

Example cURL request:

```console
curl -s \
  -H "Authorization: Token $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o
```


<h3 id="get-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The ID of the file to get|

> Example responses

> 200 Response

```json
{
  "checksums": {
    "sha256": "f047f8e745f9996c6e386064e06cb2007b8e6bc0a968a334fc0d2b2d64012066"
  },
  "content_type": "application/zip",
  "created_at": "2024-02-21T12:54:18.578761Z",
  "expires_at": "2024-02-21T13:54:18.578761Z",
  "id": "cneqzikepnug6xezperrr4z55o",
  "metadata": {
    "customer_reference_id": 123
  },
  "size": 69420,
  "urls": {
    "get": "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o"
  }
}
```

> 404 Response

```json
{
  "detail": "File not found"
}
```

<h3 id="get-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_file_response](#schemaschemas_file_response)|
|404|Not Found|File not found|Inline|

<h3 id="get-a-file-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a file

<a id="opIdfiles.delete"></a>

> Code samples

```bash
curl https://api.replicate.com/files/string \
  -X DELETE \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{file_id}`

Delete a file. Once a file has been deleted, subsequent requests to the file resource return 404 Not found.

Example cURL request:

```console
curl -X DELETE \
  -H "Authorization: Token $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o
```


<h3 id="delete-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The ID of the file to delete|

> Example responses

> 404 Response

```json
{
  "detail": "File not found"
}
```

<h3 id="delete-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|File has been deleted|None|
|404|Not Found|File not found|Inline|

<h3 id="delete-a-file-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download a file

<a id="opIdfiles.download"></a>

> Code samples

```bash
curl 'https://api.replicate.com/files/string/download?owner=string&expiry=0&signature=string' \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{file_id}/download`

Download a file by providing the file owner, access expiry, and a valid signature.

Example cURL request:

```console
curl -X GET "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o/download?expiry=1708515345&owner=mattt&signature=zuoghqlrcnw8YHywkpaXQlHsVhWen%2FDZ4aal76dLiOo%3D"
```


<h3 id="download-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The ID of the file to download|
|owner|query|string|true|The username of the user or organization that uploaded the file|
|expiry|query|integer(int64)|true|A Unix timestamp with expiration date of this download URL|
|signature|query|string|true|A base64-encoded HMAC-SHA256 checksum of the string '{owner} {id} {expiry}' generated with the Files API signing secret|

> Example responses

> 404 Response

```json
{
  "detail": "File not found"
}
```

<h3 id="download-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|File not found|Inline|

<h3 id="download-a-file-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List available hardware for models

<a id="opIdhardware.list"></a>

> Code samples

```bash
curl https://api.replicate.com/hardware \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hardware`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/hardware
```

The response will be a JSON array of hardware objects:

```json
[
    {"name": "CPU", "sku": "cpu"},
    {"name": "Nvidia T4 GPU", "sku": "gpu-t4"},
    {"name": "Nvidia A40 GPU", "sku": "gpu-a40-small"},
    {"name": "Nvidia A40 (Large) GPU", "sku": "gpu-a40-large"},
]
```


> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "sku": "string"
  }
]
```

<h3 id="list-available-hardware-for-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-available-hardware-for-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» name|string|false|none|The name of the hardware.|
|» sku|string|false|none|The SKU of the hardware.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List public models

<a id="opIdmodels.list"></a>

> Code samples

```bash
curl https://api.replicate.com/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models`

Get a paginated list of public models.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models
```

The response will be a pagination object containing a list of model objects.

See the [`models.get`](#models.get) docs for more details about the model object.

## Sorting

You can sort the results using the `sort_by` and `sort_direction` query parameters.

For example, to get the most recently created models:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  "https://api.replicate.com/v1/models?sort_by=model_created_at&sort_direction=desc"
```

Available sorting options:
- `model_created_at`: Sort by when the model was first created
- `latest_version_created_at`: Sort by when the model's latest version was created (default)

Sort direction can be `asc` (ascending) or `desc` (descending, default).


<h3 id="list-public-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort_by|query|string|false|Field to sort models by. Defaults to `latest_version_created_at`.<br>|
|sort_direction|query|string|false|Sort direction. Defaults to `desc` (descending, newest first).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|model_created_at|
|sort_by|latest_version_created_at|
|sort_direction|asc|
|sort_direction|desc|

> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "cover_image_url": "http://example.com",
      "default_example": {},
      "description": "string",
      "github_url": "http://example.com",
      "is_official": true,
      "latest_version": {},
      "license_url": "http://example.com",
      "name": "string",
      "owner": "string",
      "paper_url": "http://example.com",
      "run_count": 0,
      "url": "http://example.com",
      "visibility": "public"
    }
  ]
}
```

<h3 id="list-public-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_paginated_model_response](#schemaschemas_paginated_model_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a model

<a id="opIdmodels.create"></a>

> Code samples

```bash
curl https://api.replicate.com/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cover_image_url": "string",
    "description": "Detect hot dogs in images",
    "github_url": "https://github.com/alice/hot-dog-detector",
    "hardware": "cpu",
    "license_url": "string",
    "name": "hot-dog-detector",
    "owner": "alice",
    "paper_url": "https://arxiv.org/abs/2504.17639",
    "visibility": "public"
  }'
```

`POST /models`

Create a model.

Example cURL request:

```console
curl -s -X POST \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"owner": "alice", "name": "hot-dog-detector", "description": "Detect hot dogs in images", "visibility": "public", "hardware": "cpu"}' \
  https://api.replicate.com/v1/models
```

The response will be a model object in the following format:

```json
{
  "url": "https://replicate.com/alice/hot-dog-detector",
  "owner": "alice",
  "name": "hot-dog-detector",
  "description": "Detect hot dogs in images",
  "visibility": "public",
  "github_url": null,
  "paper_url": null,
  "license_url": null,
  "run_count": 0,
  "cover_image_url": null,
  "default_example": null,
  "latest_version": null,
}
```

Note that there is a limit of 1,000 models per account. For most purposes, we recommend using a single model and pushing new [versions](https://replicate.com/docs/how-does-replicate-work#versions) of the model as you make changes to it.


> Body parameter

```json
{
  "cover_image_url": "string",
  "description": "Detect hot dogs in images",
  "github_url": "https://github.com/alice/hot-dog-detector",
  "hardware": "cpu",
  "license_url": "string",
  "name": "hot-dog-detector",
  "owner": "alice",
  "paper_url": "https://arxiv.org/abs/2504.17639",
  "visibility": "public"
}
```

<h3 id="create-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cover_image_url|body|string|false|A URL for the model's cover image. This should be an image file.|
|» description|body|string|false|A description of the model.|
|» github_url|body|string|false|A URL for the model's source code on GitHub.|
|» hardware|body|string|true|The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.|
|» license_url|body|string|false|A URL for the model's license.|
|» name|body|string|true|The name of the model. This must be unique among all models owned by the user or organization.|
|» owner|body|string|true|The name of the user or organization that will own the model. This must be the same as the user or organization that is making the API request. In other words, the API token used in the request must belong to this user or organization.|
|» paper_url|body|string|false|A URL for the model's paper.|
|» visibility|body|string|true|Whether the model should be public or private. A public model can be viewed and run by anyone, whereas a private model can be viewed and run only by the user or organization members that own the model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|public|
|» visibility|private|

> Example responses

> 201 Response

```json
{
  "cover_image_url": "http://example.com",
  "default_example": {},
  "description": "string",
  "github_url": "http://example.com",
  "is_official": true,
  "latest_version": {},
  "license_url": "http://example.com",
  "name": "string",
  "owner": "string",
  "paper_url": "http://example.com",
  "run_count": 0,
  "url": "http://example.com",
  "visibility": "public"
}
```

<h3 id="create-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[schemas_model_response](#schemaschemas_model_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search public models

<a id="opIdmodels.search"></a>

> Code samples

```bash
curl https://api.replicate.com/models \
  -X QUERY \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`QUERY /models`

Get a list of public models matching a search query.

Example cURL request:

```console
curl -s -X QUERY \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: text/plain" \
  -d "hello" \
  https://api.replicate.com/v1/models
```

The response will be a paginated JSON object containing an array of model objects.

See the [`models.get`](#models.get) docs for more details about the model object.


> Body parameter

```text
string
```

<h3 id="search-public-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "cover_image_url": "http://example.com",
      "default_example": {},
      "description": "string",
      "github_url": "http://example.com",
      "latest_version": {},
      "license_url": "http://example.com",
      "name": "string",
      "owner": "string",
      "paper_url": "http://example.com",
      "run_count": 0,
      "url": "http://example.com",
      "visibility": "public"
    }
  ]
}
```

<h3 id="search-public-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="search-public-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|true|none|A URL pointing to the next page of model objects, if any|
|previous|string \| null|true|none|A URL pointing to the previous page of model objects, if any|
|results|[object]|true|none|An array of model objects|
|» cover_image_url|string(uri) \| null|false|none|A URL for the model's cover image|
|» default_example|object \| null|false|none|The model's default example prediction|
|» description|string|false|none|A description of the model|
|» github_url|string(uri) \| null|false|none|A URL for the model's source code on GitHub|
|» latest_version|object \| null|false|none|The model's latest version|
|» license_url|string(uri) \| null|false|none|A URL for the model's license|
|» name|string|false|none|The name of the model|
|» owner|string|false|none|The name of the user or organization that owns the model|
|» paper_url|string(uri) \| null|false|none|A URL for the model's paper|
|» run_count|integer|false|none|The number of times the model has been run|
|» url|string(uri)|false|none|The URL of the model on Replicate|
|» visibility|string|false|none|Whether the model is public or private|

#### Enumerated Values

|Property|Value|
|---|---|
|» visibility|public|
|» visibility|private|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a model

<a id="opIdmodels.get"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{model_owner}/{model_name}`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world
```

The response will be a model object in the following format:

```json
{
  "url": "https://replicate.com/replicate/hello-world",
  "owner": "replicate",
  "name": "hello-world",
  "description": "A tiny model that says hello",
  "visibility": "public",
  "github_url": "https://github.com/replicate/cog-examples",
  "paper_url": null,
  "license_url": null,
  "run_count": 5681081,
  "cover_image_url": "...",
  "default_example": {...},
  "latest_version": {...},
}
```

The model object includes the [input and output schema](https://replicate.com/docs/reference/openapi#model-schemas) for the latest version of the model.

Here's an example showing how to fetch the model with cURL and display its input schema with [jq](https://stedolan.github.io/jq/):

```console
curl -s \
    -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
    https://api.replicate.com/v1/models/replicate/hello-world \
    | jq ".latest_version.openapi_schema.components.schemas.Input"
```

This will return the following JSON object:

```json
{
  "type": "object",
  "title": "Input",
  "required": [
    "text"
  ],
  "properties": {
    "text": {
      "type": "string",
      "title": "Text",
      "x-order": 0,
      "description": "Text to prefix with 'hello '"
    }
  }
}
``` 

The `cover_image_url` string is an HTTPS URL for an image file. This can be:

- An image uploaded by the model author.
- The output file of the example prediction, if the model author has not set a cover image.
- The input file of the example prediction, if the model author has not set a cover image and the example prediction has no output file.
- A generic fallback image.

The `default_example` object is a [prediction](#predictions.get) created with this model.

The `latest_version` object is the model's most recently pushed [version](#models.versions.get).


<h3 id="get-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|

> Example responses

> 200 Response

```json
{
  "cover_image_url": "http://example.com",
  "default_example": {},
  "description": "string",
  "github_url": "http://example.com",
  "is_official": true,
  "latest_version": {},
  "license_url": "http://example.com",
  "name": "string",
  "owner": "string",
  "paper_url": "http://example.com",
  "run_count": 0,
  "url": "http://example.com",
  "visibility": "public"
}
```

<h3 id="get-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_model_response](#schemaschemas_model_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a model

<a id="opIdmodels.delete"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /models/{model_owner}/{model_name}`

Delete a model

Model deletion has some restrictions:

- You can only delete models you own.
- You can only delete private models.
- You can only delete models that have no versions associated with them. Currently you'll need to [delete the model's versions](#models.versions.delete) before you can delete the model itself.

Example cURL request:

```command
curl -s -X DELETE \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world
```

The response will be an empty 204, indicating the model has been deleted.


<h3 id="delete-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|

<h3 id="delete-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update metadata for a model

<a id="opIdmodels.update"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Detect hot dogs in images",
    "github_url": "https://github.com/alice/hot-dog-detector",
    "license_url": "string",
    "paper_url": "https://arxiv.org/abs/2504.17639",
    "readme": "# Updated README\n\nNew content here",
    "weights_url": "https://huggingface.co/alice/hot-dog-detector"
  }'
```

`PATCH /models/{model_owner}/{model_name}`

Update select properties of an existing model.

You can update the following properties:

  - `description` - Model description
  - `readme` - Model README content
  - `github_url` - GitHub repository URL
  - `paper_url` - Research paper URL
  - `weights_url` - Model weights URL
  - `license_url` - License URL

Example cURL request:

```console
curl -X PATCH \
  https://api.replicate.com/v1/models/your-username/your-model-name \
  -H "Authorization: Token $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Detect hot dogs in images",
    "readme": "# Hot Dog Detector\n\n🌭 Ketchup, mustard, and onions...",
    "github_url": "https://github.com/alice/hot-dog-detector",
    "paper_url": "https://arxiv.org/abs/2504.17639",
    "weights_url": "https://huggingface.co/alice/hot-dog-detector",
    "license_url": "https://choosealicense.com/licenses/mit/"
  }'
```

The response will be the updated model object with all of its properties.


> Body parameter

```json
{
  "description": "Detect hot dogs in images",
  "github_url": "https://github.com/alice/hot-dog-detector",
  "license_url": "string",
  "paper_url": "https://arxiv.org/abs/2504.17639",
  "readme": "# Updated README\n\nNew content here",
  "weights_url": "https://huggingface.co/alice/hot-dog-detector"
}
```

<h3 id="update-metadata-for-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|
|body|body|object|false|none|
|» description|body|string|false|A description of the model.|
|» github_url|body|string|false|A URL for the model's source code on GitHub.|
|» license_url|body|string|false|A URL for the model's license.|
|» paper_url|body|string|false|A URL for the model's paper.|
|» readme|body|string|false|The README content of the model.|
|» weights_url|body|string|false|A URL for the model's weights.|

> Example responses

> 200 Response

```json
{
  "cover_image_url": "http://example.com",
  "default_example": {},
  "description": "string",
  "github_url": "http://example.com",
  "is_official": true,
  "latest_version": {},
  "license_url": "http://example.com",
  "name": "string",
  "owner": "string",
  "paper_url": "http://example.com",
  "run_count": 0,
  "url": "http://example.com",
  "visibility": "public"
}
```

<h3 id="update-metadata-for-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_model_response](#schemaschemas_model_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List examples for a model

<a id="opIdmodels.examples.list"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{model_owner}/{model_name}/examples`

List [example predictions](https://replicate.com/docs/topics/models/publish-a-model#what-are-examples) made using the model.
These are predictions that were saved by the model author as illustrative examples of the model's capabilities.

If you want all the examples for a model, use this operation.

If you just want the model's default example, you can use the [`models.get`](#models.get) operation instead, which includes a `default_example` object.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world/examples
```

The response will be a pagination object containing a list of example predictions:

```json
{
  "next": "https://api.replicate.com/v1/models/replicate/hello-world/examples?cursor=...",
  "previous": "https://api.replicate.com/v1/models/replicate/hello-world/examples?cursor=...",
  "results": [...]
}
```

Each item in the `results` list is a [prediction object](#predictions.get).


<h3 id="list-examples-for-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|

> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data_removed": true,
      "deadline": "1970-01-01T00:00:00Z",
      "deployment": "string",
      "error": "string",
      "id": "string",
      "input": {},
      "logs": "string",
      "metrics": {
        "total_time": 0
      },
      "model": "string",
      "output": null,
      "source": "web",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "starting",
      "urls": {
        "cancel": "http://example.com",
        "get": "http://example.com",
        "stream": "http://example.com",
        "web": "http://example.com"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="list-examples-for-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_paginated_prediction_response](#schemaschemas_paginated_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a prediction using an official model

<a id="opIdmodels.predictions.create"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": {
      "prompt": "Tell me a joke",
      "system_prompt": "You are a helpful assistant"
    },
    "stream": true,
    "webhook": "https://example.com/my-webhook-handler",
    "webhook_events_filter": [
      "start",
      "completed"
    ]
  }'
```

`POST /models/{model_owner}/{model_name}/predictions`

Create a prediction using an [official model](https://replicate.com/changelog/2025-01-29-official-models).

If you're _not_ running an official model, use the [`predictions.create`](#predictions.create) operation instead.

Example cURL request:

```console
curl -s -X POST -H 'Prefer: wait' \
  -d '{"input": {"prompt": "Write a short poem about the weather."}}' \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions
```

The request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.

For a complete overview of the `deployments.predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.


> Body parameter

```json
{
  "input": {
    "prompt": "Tell me a joke",
    "system_prompt": "You are a helpful assistant"
  },
  "stream": true,
  "webhook": "https://example.com/my-webhook-handler",
  "webhook_events_filter": [
    "start",
    "completed"
  ]
}
```

<h3 id="create-a-prediction-using-an-official-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|
|Prefer|header|string|false|Leave the request open and wait for the model to finish generating output. Set to `wait=n` where n is a number of seconds between 1 and 60.<br><br>See [sync mode](https://replicate.com/docs/topics/predictions/create-a-prediction#sync-mode) for more information.<br>|
|Cancel-After|header|string|false|The maximum time the prediction can run before it is automatically canceled. The lifetime is measured from when the prediction is created.<br><br>The duration can be specified as string with an optional unit suffix:<br>- `s` for seconds (e.g., `30s`, `90s`)<br>- `m` for minutes (e.g., `5m`, `15m`)<br>- `h` for hours (e.g., `1h`, `2h30m`)<br>- defaults to seconds if no unit suffix is provided (e.g. `30` is the same as `30s`)<br><br>You can combine units for more precision (e.g., `1h30m45s`).<br><br>The minimum allowed duration is 5 seconds.<br>|
|body|body|[schemas_prediction_request](#schemaschemas_prediction_request)|false|none|
|» input|body|object|true|The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the "API" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.<br><br>Files should be passed as HTTP URLs or data URLs.<br><br>Use an HTTP URL when:<br><br>- you have a large file > 256kb<br>- you want to be able to use the file multiple times<br>- you want your prediction metadata to be associable with your input files<br><br>Use a data URL when:<br><br>- you have a small file <= 256kb<br>- you don't want to upload and host the file somewhere<br>- you don't need to use the file again (Replicate will not store it)<br>|
|» stream|body|boolean|false|**This field is deprecated.**<br><br>Request a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).<br><br>This field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.<br>|
|» webhook|body|string|false|An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.<br>|
|» webhook_events_filter|body|[string]|false|By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:<br><br>- `start`: immediately on prediction start<br>- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)<br>- `logs`: each time log output is generated by a prediction<br>- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:<br><br>```json<br>{<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» webhook_events_filter|start|
|» webhook_events_filter|output|
|» webhook_events_filter|logs|
|» webhook_events_filter|completed|

> Example responses

> 201 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

> 202 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="create-a-prediction-using-an-official-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.|[schemas_prediction_response](#schemaschemas_prediction_response)|
|202|Accepted|Prediction has been created but does not yet have all outputs|[schemas_prediction_response](#schemaschemas_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a model's README

<a id="opIdmodels.readme.get"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/readme \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{model_owner}/{model_name}/readme`

Get the README content for a model.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world/readme
```

The response will be the README content as plain text in Markdown format:

```
# Hello World Model

This is an example model that...
```


<h3 id="get-a-models-readme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|

<h3 id="get-a-models-readme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|README not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List model versions

<a id="opIdmodels.versions.list"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{model_owner}/{model_name}/versions`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world/versions
```

The response will be a JSON array of model version objects, sorted with the most recent version first:

```json
{
  "next": null,
  "previous": null,
  "results": [
    {
      "id": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",
      "created_at": "2022-04-26T19:29:04.418669Z",
      "cog_version": "0.3.0",
      "openapi_schema": {...}
    }
  ]
}
```


<h3 id="list-model-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|

> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "cog_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "openapi_schema": {}
    }
  ]
}
```

<h3 id="list-model-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_paginated_version_response](#schemaschemas_paginated_version_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a model version

<a id="opIdmodels.versions.get"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{model_owner}/{model_name}/versions/{version_id}`

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world/versions/5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa
```

The response will be the version object:

```json
{
  "id": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",
  "created_at": "2022-04-26T19:29:04.418669Z",
  "cog_version": "0.3.0",
  "openapi_schema": {...}
}
```

Every model describes its inputs and outputs with [OpenAPI Schema Objects](https://spec.openapis.org/oas/latest.html#schemaObject) in the `openapi_schema` property.

The `openapi_schema.components.schemas.Input` property for the [replicate/hello-world](https://replicate.com/replicate/hello-world) model looks like this:

```json
{
  "type": "object",
  "title": "Input",
  "required": [
    "text"
  ],
  "properties": {
    "text": {
      "x-order": 0,
      "type": "string",
      "title": "Text",
      "description": "Text to prefix with 'hello '"
    }
  }
}
```

The `openapi_schema.components.schemas.Output` property for the [replicate/hello-world](https://replicate.com/replicate/hello-world) model looks like this:

```json
{
  "type": "string",
  "title": "Output"
}
```

For more details, see the docs on [Cog's supported input and output types](https://github.com/replicate/cog/blob/75b7802219e7cd4cee845e34c4c22139558615d4/docs/python.md#input-and-output-types)


<h3 id="get-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|
|version_id|path|string|true|The ID of the version.<br>|

> Example responses

> 200 Response

```json
{
  "cog_version": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "openapi_schema": {}
}
```

<h3 id="get-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_version_response](#schemaschemas_version_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a model version

<a id="opIdmodels.versions.delete"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/versions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /models/{model_owner}/{model_name}/versions/{version_id}`

Delete a model version and all associated predictions, including all output files.

Model version deletion has some restrictions:

- You can only delete versions from models you own.
- You can only delete versions from private models.
- You cannot delete a version if someone other than you has run predictions with it.
- You cannot delete a version if it is being used as the base model for a fine tune/training.
- You cannot delete a version if it has an associated deployment.
- You cannot delete a version if another model version is overridden to use it.

Example cURL request:

```command
curl -s -X DELETE \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/models/replicate/hello-world/versions/5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa
```

The response will be an empty 202, indicating the deletion request has been accepted. It might take a few minutes to be processed.


<h3 id="delete-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|
|version_id|path|string|true|The ID of the version.<br>|

<h3 id="delete-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deletion request has been accepted. It might take a few minutes to be processed.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a training

<a id="opIdtrainings.create"></a>

> Code samples

```bash
curl https://api.replicate.com/models/string/string/versions/string/trainings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": "string",
    "input": {},
    "webhook": "string",
    "webhook_events_filter": [
      "start"
    ]
  }'
```

`POST /models/{model_owner}/{model_name}/versions/{version_id}/trainings`

Start a new training of the model version you specify.

Example request body:

```json
{
  "destination": "{new_owner}/{new_name}",
  "input": {
    "train_data": "https://example.com/my-input-images.zip",
  },
  "webhook": "https://example.com/my-webhook",
}
```

Example cURL request:

```console
curl -s -X POST \
  -d '{"destination": "{new_owner}/{new_name}", "input": {"input_images": "https://example.com/my-input-images.zip"}}' \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  https://api.replicate.com/v1/models/stability-ai/sdxl/versions/da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf/trainings
```

The response will be the training object:

```json
{
  "id": "zz4ibbonubfz7carwiefibzgga",
  "model": "stability-ai/sdxl",
  "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
  "input": {
    "input_images": "https://example.com/my-input-images.zip"
  },
  "logs": "",
  "error": null,
  "status": "starting",
  "created_at": "2023-09-08T16:32:56.990893084Z",
  "urls": {
    "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",
     "get": "https://api.replicate.com/v1/predictions/zz4ibbonubfz7carwiefibzgga",
     "cancel": "https://api.replicate.com/v1/predictions/zz4ibbonubfz7carwiefibzgga/cancel"
  }
}
```

As models can take several minutes or more to train, the result will not be available immediately. To get the final result of the training you should either provide a `webhook` HTTPS URL for us to call when the results are ready, or poll the [get a training](#trainings.get) endpoint until it has finished.

When a training completes, it creates a new [version](https://replicate.com/docs/how-does-replicate-work#terminology) of the model at the specified destination.

To find some models to train on, check out the [trainable language models collection](https://replicate.com/collections/trainable-language-models).


> Body parameter

```json
{
  "destination": "string",
  "input": {},
  "webhook": "string",
  "webhook_events_filter": [
    "start"
  ]
}
```

<h3 id="create-a-training-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_owner|path|string|true|The name of the user or organization that owns the model.<br>|
|model_name|path|string|true|The name of the model.<br>|
|version_id|path|string|true|The ID of the version.<br>|
|body|body|[schemas_training_request](#schemaschemas_training_request)|false|none|
|» destination|body|string|true|A string representing the desired model to push to in the format `{destination_model_owner}/{destination_model_name}`. This should be an existing model owned by the user or organization making the API request. If the destination is invalid, the server will return an appropriate 4XX response.<br>|
|» input|body|object|true|An object containing inputs to the Cog model's `train()` function.<br>|
|» webhook|body|string|false|An HTTPS URL for receiving a webhook when the training completes. The webhook will be a POST request where the request body is the same as the response body of the [get training](#trainings.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.|
|» webhook_events_filter|body|[string]|false|By default, we will send requests to your webhook URL whenever there are new outputs or the training has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the training request:<br><br>- `start`: immediately on training start<br>- `output`: each time a training generates an output (note that trainings can generate multiple outputs)<br>- `logs`: each time log output is generated by a training<br>- `completed`: when the training reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the training, you would provide:<br><br>```json<br>{<br>  "destination": "my-organization/my-model",<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» webhook_events_filter|start|
|» webhook_events_filter|output|
|» webhook_events_filter|logs|
|» webhook_events_filter|completed|

> Example responses

> 201 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "predict_time": 0,
    "total_time": 0
  },
  "model": "string",
  "output": {
    "version": "string",
    "weights": "string"
  },
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="create-a-training-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[schemas_training_response](#schemaschemas_training_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List predictions

<a id="opIdpredictions.list"></a>

> Code samples

```bash
curl https://api.replicate.com/predictions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /predictions`

Get a paginated list of all predictions created by the user or organization associated with the provided API token.

This will include predictions created from the API and the website. It will return 100 records per page.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/predictions
```

The response will be a paginated JSON array of prediction objects, sorted with the most recent prediction first:

```json
{
  "next": null,
  "previous": null,
  "results": [
    {
      "completed_at": "2023-09-08T16:19:34.791859Z",
      "created_at": "2023-09-08T16:19:34.907244Z",
      "data_removed": false,
      "error": null,
      "id": "gm3qorzdhgbfurvjtvhg6dckhu",
      "input": {
        "text": "Alice"
      },
      "metrics": {
        "predict_time": 0.012683
      },
      "output": "hello Alice",
      "started_at": "2023-09-08T16:19:34.779176Z",
      "source": "api",
      "status": "succeeded",
      "urls": {
        "web": "https://replicate.com/p/gm3qorzdhgbfurvjtvhg6dckhu",
        "get": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu",
        "cancel": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu/cancel"
      },
      "model": "replicate/hello-world",
      "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",
    }
  ]
}
```

`id` will be the unique ID of the prediction.

`source` will indicate how the prediction was created. Possible values are `web` or `api`.

`status` will be the status of the prediction. Refer to [get a single prediction](#predictions.get) for possible values.

`urls` will be a convenience object that can be used to construct new API requests for the given prediction. If the requested model version supports streaming, this will have a `stream` entry with an HTTPS URL that you can use to construct an [`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

`model` will be the model identifier string in the format of `{model_owner}/{model_name}`.

`version` will be the unique ID of model version used to create the prediction.

`data_removed` will be `true` if the input and output data has been deleted.


<h3 id="list-predictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_after|query|string(date-time)|false|Include only predictions created at or after this date-time, in ISO 8601 format.|
|created_before|query|string(date-time)|false|Include only predictions created before this date-time, in ISO 8601 format.|
|source|query|string|false|Filter predictions by how they were created. Currently only `web` is supported.<br><br>If no value is set, the API returns predictions from both API and web sources.<br><br>When filtering by `source=web`, results are limited to predictions created in the last 14 days.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|web|

> Example responses

> 200 Response

```json
{
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data_removed": true,
      "deadline": "1970-01-01T00:00:00Z",
      "deployment": "string",
      "error": "string",
      "id": "string",
      "input": {},
      "logs": "string",
      "metrics": {
        "total_time": 0
      },
      "model": "string",
      "output": null,
      "source": "web",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "starting",
      "urls": {
        "cancel": "http://example.com",
        "get": "http://example.com",
        "stream": "http://example.com",
        "web": "http://example.com"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="list-predictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-predictions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[schemas_prediction_response](#schemaschemas_prediction_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a prediction

<a id="opIdpredictions.create"></a>

> Code samples

```bash
curl https://api.replicate.com/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": {
      "text": "Alice"
    },
    "stream": true,
    "version": "replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426",
    "webhook": "https://example.com/my-webhook-handler",
    "webhook_events_filter": [
      "start",
      "completed"
    ]
  }'
```

`POST /predictions`

Create a prediction for the model version and inputs you provide.

Example cURL request:

```console
curl -s -X POST -H 'Prefer: wait' \
  -d '{"version": "replicate/hello-world:5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa", "input": {"text": "Alice"}}' \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  https://api.replicate.com/v1/predictions
```

The request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.

For a complete overview of the `predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.


> Body parameter

```json
{
  "input": {
    "text": "Alice"
  },
  "stream": true,
  "version": "replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426",
  "webhook": "https://example.com/my-webhook-handler",
  "webhook_events_filter": [
    "start",
    "completed"
  ]
}
```

<h3 id="create-a-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|Leave the request open and wait for the model to finish generating output. Set to `wait=n` where n is a number of seconds between 1 and 60.<br><br>See [sync mode](https://replicate.com/docs/topics/predictions/create-a-prediction#sync-mode) for more information.<br>|
|Cancel-After|header|string|false|The maximum time the prediction can run before it is automatically canceled. The lifetime is measured from when the prediction is created.<br><br>The duration can be specified as string with an optional unit suffix:<br>- `s` for seconds (e.g., `30s`, `90s`)<br>- `m` for minutes (e.g., `5m`, `15m`)<br>- `h` for hours (e.g., `1h`, `2h30m`)<br>- defaults to seconds if no unit suffix is provided (e.g. `30` is the same as `30s`)<br><br>You can combine units for more precision (e.g., `1h30m45s`).<br><br>The minimum allowed duration is 5 seconds.<br>|
|body|body|[schemas_version_prediction_request](#schemaschemas_version_prediction_request)|false|none|
|» input|body|object|true|The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the "API" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.<br><br>Files should be passed as HTTP URLs or data URLs.<br><br>Use an HTTP URL when:<br><br>- you have a large file > 256kb<br>- you want to be able to use the file multiple times<br>- you want your prediction metadata to be associable with your input files<br><br>Use a data URL when:<br><br>- you have a small file <= 256kb<br>- you don't want to upload and host the file somewhere<br>- you don't need to use the file again (Replicate will not store it)<br>|
|» stream|body|boolean|false|**This field is deprecated.**<br><br>Request a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).<br><br>This field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.<br>|
|» version|body|string|true|The identifier for the model or model version that you want to run. This can be specified in a few different formats:<br><br>- `{owner_name}/{model_name}` - Use this format for [official models](https://replicate.com/docs/topics/models/official-models). For example, `black-forest-labs/flux-schnell`. For all other models, the specific version is required.<br>- `{owner_name}/{model_name}:{version_id}` - The owner and model name, plus the full 64-character version ID. For example, `replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`.<br>- `{version_id}` - Just the 64-character version ID. For example, `9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`<br>|
|» webhook|body|string|false|An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.<br>|
|» webhook_events_filter|body|[string]|false|By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:<br><br>- `start`: immediately on prediction start<br>- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)<br>- `logs`: each time log output is generated by a prediction<br>- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:<br><br>```json<br>{<br>  "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» webhook_events_filter|start|
|» webhook_events_filter|output|
|» webhook_events_filter|logs|
|» webhook_events_filter|completed|

> Example responses

> 201 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

> 202 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="create-a-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.|[schemas_prediction_response](#schemaschemas_prediction_response)|
|202|Accepted|Prediction has been created but does not yet have all outputs|[schemas_prediction_response](#schemaschemas_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a prediction

<a id="opIdpredictions.get"></a>

> Code samples

```bash
curl https://api.replicate.com/predictions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /predictions/{prediction_id}`

Get the current state of a prediction.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu
```

The response will be the prediction object:

```json
{
  "id": "gm3qorzdhgbfurvjtvhg6dckhu",
  "model": "replicate/hello-world",
  "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",
  "input": {
    "text": "Alice"
  },
  "logs": "",
  "output": "hello Alice",
  "error": null,
  "status": "succeeded",
  "created_at": "2023-09-08T16:19:34.765994Z",
  "source": "api",
  "data_removed": false,
  "started_at": "2023-09-08T16:19:34.779176Z",
  "completed_at": "2023-09-08T16:19:34.791859Z",
  "metrics": {
    "predict_time": 0.012683
  },
  "urls": {
    "web": "https://replicate.com/p/gm3qorzdhgbfurvjtvhg6dckhu",
    "get": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu",
    "cancel": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu/cancel"
  }
}
```

`source` will indicate how the prediction was created. Possible values are `web` or `api`.

`status` will be one of:

- `starting`: the prediction is starting up. If this status lasts longer than a few seconds, then it's typically because a new worker is being started to run the prediction.
- `processing`: the `predict()` method of the model is currently running.
- `succeeded`: the prediction completed successfully.
- `failed`: the prediction encountered an error during processing.
- `canceled`: the prediction was canceled by its creator.

In the case of success, `output` will be an object containing the output of the model. Any files will be represented as HTTPS URLs. You'll need to pass the `Authorization` header to request them.

In the case of failure, `error` will contain the error encountered during the prediction.

Terminated predictions (with a status of `succeeded`, `failed`, or `canceled`) will include a `metrics` object with a `predict_time` property showing the amount of CPU or GPU time, in seconds, that the prediction used while running. It won't include time waiting for the prediction to start. The `metrics` object will also include a `total_time` property showing the total time, in seconds, that the prediction took to complete.

All input parameters, output values, and logs are automatically removed after an hour, by default, for predictions created through the API.

You must save a copy of any data or files in the output if you'd like to continue using them. The `output` key will still be present, but it's value will be `null` after the output has been removed.

Output files are served by `replicate.delivery` and its subdomains. If you use an allow list of external domains for your assets, add `replicate.delivery` and `*.replicate.delivery` to it.


<h3 id="get-a-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prediction_id|path|string|true|The ID of the prediction to get.<br>|

> Example responses

> 200 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="get-a-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_prediction_response](#schemaschemas_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a prediction

<a id="opIdpredictions.cancel"></a>

> Code samples

```bash
curl https://api.replicate.com/predictions/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /predictions/{prediction_id}/cancel`

Cancel a prediction that is currently running.

Example cURL request that creates a prediction and then cancels it:

```console
# First, create a prediction
PREDICTION_ID=$(curl -s -X POST \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "a video that may take a while to generate"
    }
  }' \
  https://api.replicate.com/v1/models/minimax/video-01/predictions | jq -r '.id')

# Echo the prediction ID
echo "Created prediction with ID: $PREDICTION_ID"

# Cancel the prediction
curl -s -X POST \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/predictions/$PREDICTION_ID/cancel
```


<h3 id="cancel-a-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prediction_id|path|string|true|The ID of the prediction to cancel.<br>|

> Example responses

> 200 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="cancel-a-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_prediction_response](#schemaschemas_prediction_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search models, collections, and docs (beta)

<a id="opIdsearch"></a>

> Code samples

```bash
curl 'https://api.replicate.com/search?query=nano%20banana' \
  -H 'Accept: application/json'
```

`GET /search`

Search for public models, collections, and docs using a text query.

For models, the response includes all model data, plus a new `metadata` object with the following fields:

- `generated_description`: A longer and more detailed AI-generated description of the model
- `tags`: An array of tags for the model
- `score`: A score for the model's relevance to the search query

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  "https://api.replicate.com/v1/search?query=nano+banana"
```

Note: This search API is currently in beta and may change in future versions.


<h3 id="search-models-collections-and-docs-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query string|
|limit|query|integer|false|Maximum number of model results to return (1-50, defaults to 20)|

> Example responses

> 200 Response

```json
{
  "collections": [
    {
      "description": "Models for editing and manipulating images",
      "models": [
        "google/nano-banana",
        "stability-ai/stable-diffusion"
      ],
      "name": "Image Editing",
      "slug": "image-editing"
    }
  ],
  "models": [
    {
      "metadata": {
        "generated_description": "Generate and edit images from text prompts and one or more input images. Combine multiple references via multi-image fusion to insert objects into new scenes, restyle environments, or blend visual styles. Apply natural-language edits such as object removal, background blur, pose changes, colorization, and style transfer, while maintaining character, object, and style consistency across a series. Support conversational, iterative workflows that follow multi-step instructions. Embed invisible SynthID watermarking for provenance on all generated or edited images.",
        "score": 1.3847375700706976,
        "tags": [
          "text-to-image",
          "image-to-image",
          "image-editing"
        ]
      },
      "model": {
        "cover_image_url": "https://tjzk.replicate.delivery/models_models_featured_image/ed879e99-71b5-4689-bed3-e7305e35a28a/this.png",
        "default_example": null,
        "description": "Google's latest image editing model in Gemini 2.5",
        "github_url": null,
        "latest_version": {
          "cog_version": "0.16.7",
          "created_at": "2025-09-12T16:36:33.884779Z",
          "id": "56b8f5f774804fda8ffe63f01d3e2900f97609bd7ae976f50e595854110de200",
          "openapi_schema": {}
        },
        "license_url": null,
        "name": "nano-banana",
        "owner": "google",
        "paper_url": null,
        "run_count": 4304274,
        "url": "https://replicate.com/google/nano-banana",
        "visibility": "public"
      }
    }
  ],
  "pages": [
    {
      "href": "/docs/guides/image-editing",
      "name": "Getting started with image editing"
    }
  ],
  "query": "nano banana"
}
```

> 400 Response

```json
{
  "detail": "Query parameter \"query\" is required"
}
```

> 500 Response

```json
{
  "detail": "Search service error"
}
```

<h3 id="search-models-collections-and-docs-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_search_response](#schemaschemas_search_response)|
|400|Bad Request|Bad Request - Missing or invalid query parameter|Inline|
|500|Internal Server Error|Internal Server Error - Search service error|Inline|

<h3 id="search-models-collections-and-docs-beta-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List trainings

<a id="opIdtrainings.list"></a>

> Code samples

```bash
curl https://api.replicate.com/trainings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /trainings`

Get a paginated list of all trainings created by the user or organization associated with the provided API token.

This will include trainings created from the API and the website. It will return 100 records per page.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/trainings
```

The response will be a paginated JSON array of training objects, sorted with the most recent training first:

```json
{
  "next": null,
  "previous": null,
  "results": [
    {
      "completed_at": "2023-09-08T16:41:19.826523Z",
      "created_at": "2023-09-08T16:32:57.018467Z",
      "error": null,
      "id": "zz4ibbonubfz7carwiefibzgga",
      "input": {
        "input_images": "https://example.com/my-input-images.zip"
      },
      "metrics": {
        "predict_time": 502.713876
      },
      "output": {
        "version": "...",
        "weights": "..."
      },
      "started_at": "2023-09-08T16:32:57.112647Z",
      "source": "api",
      "status": "succeeded",
      "urls": {
        "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",
        "get": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga",
        "cancel": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga/cancel"
      },
      "model": "stability-ai/sdxl",
      "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
    }
  ]
}
```

`id` will be the unique ID of the training.

`source` will indicate how the training was created. Possible values are `web` or `api`.

`status` will be the status of the training. Refer to [get a single training](#trainings.get) for possible values.

`urls` will be a convenience object that can be used to construct new API requests for the given training.

`version` will be the unique ID of model version used to create the training.


> Example responses

> 200 Response

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "error": "string",
      "id": "string",
      "input": {},
      "logs": "string",
      "metrics": {
        "predict_time": 0,
        "total_time": 0
      },
      "model": "string",
      "output": {
        "version": "string",
        "weights": "string"
      },
      "source": "web",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "starting",
      "urls": {
        "cancel": "http://example.com",
        "get": "http://example.com"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="list-trainings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-trainings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|URL to the next page of results|
|previous|string \| null|false|none|URL to the previous page of results|
|results|[[schemas_training_response](#schemaschemas_training_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a training

<a id="opIdtrainings.get"></a>

> Code samples

```bash
curl https://api.replicate.com/trainings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /trainings/{training_id}`

Get the current state of a training.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga
```

The response will be the training object:

```json
{
  "completed_at": "2023-09-08T16:41:19.826523Z",
  "created_at": "2023-09-08T16:32:57.018467Z",
  "error": null,
  "id": "zz4ibbonubfz7carwiefibzgga",
  "input": {
    "input_images": "https://example.com/my-input-images.zip"
  },
  "logs": "...",
  "metrics": {
    "predict_time": 502.713876
  },
  "output": {
    "version": "...",
    "weights": "..."
  },
  "started_at": "2023-09-08T16:32:57.112647Z",
  "status": "succeeded",
  "urls": {
    "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",
    "get": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga",
    "cancel": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga/cancel"
  },
  "model": "stability-ai/sdxl",
  "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
}
```

`status` will be one of:

- `starting`: the training is starting up. If this status lasts longer than a few seconds, then it's typically because a new worker is being started to run the training.
- `processing`: the `train()` method of the model is currently running.
- `succeeded`: the training completed successfully.
- `failed`: the training encountered an error during processing.
- `canceled`: the training was canceled by its creator.

In the case of success, `output` will be an object containing the output of the model. Any files will be represented as HTTPS URLs. You'll need to pass the `Authorization` header to request them.

In the case of failure, `error` will contain the error encountered during the training.

Terminated trainings (with a status of `succeeded`, `failed`, or `canceled`) will include a `metrics` object with a `predict_time` property showing the amount of CPU or GPU time, in seconds, that the training used while running. It won't include time waiting for the training to start. The `metrics` object will also include a `total_time` property showing the total time, in seconds, that the training took to complete.


<h3 id="get-a-training-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|training_id|path|string|true|The ID of the training to get.<br>|

> Example responses

> 200 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "predict_time": 0,
    "total_time": 0
  },
  "model": "string",
  "output": {
    "version": "string",
    "weights": "string"
  },
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="get-a-training-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_training_response](#schemaschemas_training_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a training

<a id="opIdtrainings.cancel"></a>

> Code samples

```bash
curl https://api.replicate.com/trainings/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /trainings/{training_id}/cancel`

<h3 id="cancel-a-training-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|training_id|path|string|true|The ID of the training you want to cancel.<br>|

> Example responses

> 200 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "predict_time": 0,
    "total_time": 0
  },
  "model": "string",
  "output": {
    "version": "string",
    "weights": "string"
  },
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com"
  },
  "version": "string"
}
```

<h3 id="cancel-a-training-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schemas_training_response](#schemaschemas_training_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the signing secret for the default webhook

<a id="opIdwebhooks.default.secret.get"></a>

> Code samples

```bash
curl https://api.replicate.com/webhooks/default/secret \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/default/secret`

Get the signing secret for the default webhook endpoint. This is used to verify that webhook requests are coming from Replicate.

Example cURL request:

```console
curl -s \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/webhooks/default/secret
```

The response will be a JSON object with a `key` property:

```json
{
  "key": "..."
}
```


> Example responses

> 200 Response

```json
{
  "key": "string"
}
```

<h3 id="get-the-signing-secret-for-the-default-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-signing-secret-for-the-default-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The signing secret.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_schemas_collection_list_item">schemas_collection_list_item</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_collection_list_item"></a>
<a id="schema_schemas_collection_list_item"></a>
<a id="tocSschemas_collection_list_item"></a>
<a id="tocsschemas_collection_list_item"></a>

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A description of the collection|
|name|string|true|none|The name of the collection|
|slug|string|true|none|The slug of the collection (lowercase with dashes)|

<h2 id="tocS_schemas_collection_response">schemas_collection_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_collection_response"></a>
<a id="schema_schemas_collection_response"></a>
<a id="tocSschemas_collection_response"></a>
<a id="tocsschemas_collection_response"></a>

```json
{
  "description": "string",
  "full_description": "string",
  "models": [
    {
      "cover_image_url": "http://example.com",
      "default_example": {},
      "description": "string",
      "github_url": "http://example.com",
      "is_official": true,
      "latest_version": {},
      "license_url": "http://example.com",
      "name": "string",
      "owner": "string",
      "paper_url": "http://example.com",
      "run_count": 0,
      "url": "http://example.com",
      "visibility": "public"
    }
  ],
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A description of the collection|
|full_description|string \| null|false|none|The full description of the collection in markdown format|
|models|[[schemas_model_response](#schemaschemas_model_response)]|true|none|The models in this collection|
|name|string|true|none|The name of the collection|
|slug|string|true|none|The slug of the collection (lowercase with dashes)|

<h2 id="tocS_schemas_deployment_response">schemas_deployment_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_deployment_response"></a>
<a id="schema_schemas_deployment_response"></a>
<a id="tocSschemas_deployment_response"></a>
<a id="tocsschemas_deployment_response"></a>

```json
{
  "current_release": {
    "configuration": {
      "hardware": "string",
      "max_instances": 0,
      "min_instances": 0
    },
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": {
      "avatar_url": "http://example.com",
      "github_url": "http://example.com",
      "name": "string",
      "type": "organization",
      "username": "string"
    },
    "model": "string",
    "number": 0,
    "version": "string"
  },
  "name": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_release|object|false|none|none|
|name|string|false|none|The name of the deployment.|
|owner|string|false|none|The owner of the deployment.|

<h2 id="tocS_schemas_file_response">schemas_file_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_file_response"></a>
<a id="schema_schemas_file_response"></a>
<a id="tocSschemas_file_response"></a>
<a id="tocsschemas_file_response"></a>

```json
{
  "checksums": {
    "sha256": "f047f8e745f9996c6e386064e06cb2007b8e6bc0a968a334fc0d2b2d64012066"
  },
  "content_type": "application/zip",
  "created_at": "2024-02-21T12:54:18.578761Z",
  "expires_at": "2024-02-21T13:54:18.578761Z",
  "id": "cneqzikepnug6xezperrr4z55o",
  "metadata": {
    "customer_reference_id": 123
  },
  "size": 69420,
  "urls": {
    "get": "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o"
  }
}
```

A file resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksums|object|true|none|A dictionary of checksums for the file keyed by the algorithm name|
|content_type|string|true|none|The content / MIME type of the file|
|created_at|string(date-time)|true|none|When the file was created|
|expires_at|string(date-time)|true|none|When the file expires|
|id|string|true|none|A unique, randomly-generated identifier for the file resource|
|metadata|object|true|none|Metadata provided by user when the file was created|
|size|integer|true|none|The length of the file in bytes|
|urls|object|true|none|A dictionary of URLs associated with the file resource|

<h2 id="tocS_schemas_model_response">schemas_model_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_model_response"></a>
<a id="schema_schemas_model_response"></a>
<a id="tocSschemas_model_response"></a>
<a id="tocsschemas_model_response"></a>

```json
{
  "cover_image_url": "http://example.com",
  "default_example": {},
  "description": "string",
  "github_url": "http://example.com",
  "is_official": true,
  "latest_version": {},
  "license_url": "http://example.com",
  "name": "string",
  "owner": "string",
  "paper_url": "http://example.com",
  "run_count": 0,
  "url": "http://example.com",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_image_url|string(uri) \| null|false|none|A URL for the model's cover image|
|default_example|object \| null|false|none|The model's default example prediction|
|description|string \| null|false|none|A description of the model|
|github_url|string(uri) \| null|false|none|A URL for the model's source code on GitHub|
|is_official|boolean|false|none|Boolean indicating whether the model is officially maintained by Replicate. Official models are always on, have stable API interfaces, and predictable pricing.|
|latest_version|object \| null|false|none|The model's latest version|
|license_url|string(uri) \| null|false|none|A URL for the model's license|
|name|string|false|none|The name of the model|
|owner|string|false|none|The name of the user or organization that owns the model|
|paper_url|string(uri) \| null|false|none|A URL for the model's paper|
|run_count|integer|false|none|The number of times the model has been run|
|url|string(uri)|false|none|The URL of the model on Replicate|
|visibility|string|false|none|Whether the model is public or private|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|public|
|visibility|private|

<h2 id="tocS_schemas_page_response">schemas_page_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_page_response"></a>
<a id="schema_schemas_page_response"></a>
<a id="tocSschemas_page_response"></a>
<a id="tocsschemas_page_response"></a>

```json
{
  "href": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|URL path to the page|
|name|string|true|none|Title of the page|

<h2 id="tocS_schemas_paginated_collection_response">schemas_paginated_collection_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_paginated_collection_response"></a>
<a id="schema_schemas_paginated_collection_response"></a>
<a id="tocSschemas_paginated_collection_response"></a>
<a id="tocsschemas_paginated_collection_response"></a>

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "description": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|A URL pointing to the next page of collection objects, if any|
|previous|string \| null|false|none|A URL pointing to the previous page of collection objects, if any|
|results|[[schemas_collection_list_item](#schemaschemas_collection_list_item)]|false|none|An array of collection objects|

<h2 id="tocS_schemas_paginated_model_response">schemas_paginated_model_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_paginated_model_response"></a>
<a id="schema_schemas_paginated_model_response"></a>
<a id="tocSschemas_paginated_model_response"></a>
<a id="tocsschemas_paginated_model_response"></a>

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "cover_image_url": "http://example.com",
      "default_example": {},
      "description": "string",
      "github_url": "http://example.com",
      "is_official": true,
      "latest_version": {},
      "license_url": "http://example.com",
      "name": "string",
      "owner": "string",
      "paper_url": "http://example.com",
      "run_count": 0,
      "url": "http://example.com",
      "visibility": "public"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|A URL pointing to the next page of model objects, if any|
|previous|string \| null|false|none|A URL pointing to the previous page of model objects, if any|
|results|[[schemas_model_response](#schemaschemas_model_response)]|false|none|An array of model objects|

<h2 id="tocS_schemas_paginated_prediction_response">schemas_paginated_prediction_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_paginated_prediction_response"></a>
<a id="schema_schemas_paginated_prediction_response"></a>
<a id="tocSschemas_paginated_prediction_response"></a>
<a id="tocsschemas_paginated_prediction_response"></a>

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data_removed": true,
      "deadline": "1970-01-01T00:00:00Z",
      "deployment": "string",
      "error": "string",
      "id": "string",
      "input": {},
      "logs": "string",
      "metrics": {
        "total_time": 0
      },
      "model": "string",
      "output": null,
      "source": "web",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "starting",
      "urls": {
        "cancel": "http://example.com",
        "get": "http://example.com",
        "stream": "http://example.com",
        "web": "http://example.com"
      },
      "version": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|A URL pointing to the next page of prediction objects, if any|
|previous|string \| null|false|none|A URL pointing to the previous page of prediction objects, if any|
|results|[[schemas_prediction_response](#schemaschemas_prediction_response)]|false|none|An array of prediction objects|

<h2 id="tocS_schemas_paginated_version_response">schemas_paginated_version_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_paginated_version_response"></a>
<a id="schema_schemas_paginated_version_response"></a>
<a id="tocSschemas_paginated_version_response"></a>
<a id="tocsschemas_paginated_version_response"></a>

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "cog_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "openapi_schema": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|A URL pointing to the next page of version objects, if any|
|previous|string \| null|false|none|A URL pointing to the previous page of version objects, if any|
|results|[[schemas_version_response](#schemaschemas_version_response)]|false|none|An array of version objects|

<h2 id="tocS_schemas_prediction_request">schemas_prediction_request</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_prediction_request"></a>
<a id="schema_schemas_prediction_request"></a>
<a id="tocSschemas_prediction_request"></a>
<a id="tocsschemas_prediction_request"></a>

```json
{
  "input": {
    "prompt": "Tell me a joke",
    "system_prompt": "You are a helpful assistant"
  },
  "stream": true,
  "webhook": "https://example.com/my-webhook-handler",
  "webhook_events_filter": [
    "start",
    "completed"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the "API" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.<br><br>Files should be passed as HTTP URLs or data URLs.<br><br>Use an HTTP URL when:<br><br>- you have a large file > 256kb<br>- you want to be able to use the file multiple times<br>- you want your prediction metadata to be associable with your input files<br><br>Use a data URL when:<br><br>- you have a small file <= 256kb<br>- you don't want to upload and host the file somewhere<br>- you don't need to use the file again (Replicate will not store it)<br>|
|stream|boolean|false|none|**This field is deprecated.**<br><br>Request a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).<br><br>This field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.<br>|
|webhook|string|false|none|An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.<br>|
|webhook_events_filter|[string]|false|none|By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:<br><br>- `start`: immediately on prediction start<br>- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)<br>- `logs`: each time log output is generated by a prediction<br>- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:<br><br>```json<br>{<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|webhook_events_filter|start|
|webhook_events_filter|output|
|webhook_events_filter|logs|
|webhook_events_filter|completed|

<h2 id="tocS_schemas_prediction_response">schemas_prediction_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_prediction_response"></a>
<a id="schema_schemas_prediction_response"></a>
<a id="tocSschemas_prediction_response"></a>
<a id="tocsschemas_prediction_response"></a>

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data_removed": true,
  "deadline": "1970-01-01T00:00:00Z",
  "deployment": "string",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "total_time": 0
  },
  "model": "string",
  "output": null,
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com",
    "stream": "http://example.com",
    "web": "http://example.com"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed_at|string(date-time)|false|none|The time that the model completed the prediction and all outputs were uploaded|
|created_at|string(date-time)|true|none|The time that the prediction was created|
|data_removed|boolean|true|none|Whether the prediction output has been deleted|
|deadline|string(date-time)|false|none|The absolute time at which the prediction will be automatically canceled if it has not completed|
|deployment|string|false|none|The name of the deployment that created the prediction|
|error|string \| null|true|none|An error string if the model status is `"failed"`|
|id|string|true|none|none|
|input|object|true|none|The prediction input|
|logs|string|false|none|The log output from the model|
|metrics|object|false|none|Additional metrics associated with the prediction|
|model|string|true|none|The name of the model that created the prediction|
|output|object|true|none|The prediction output, which can be any JSON-serializable value, depending on the model|
|source|string|false|none|Indicates how the prediction was created|
|started_at|string(date-time)|false|none|The time that the model began the prediction|
|status|string|true|none|The prediction status. `canceled` means the prediction was canceled (either by the user or because it reached its deadline while running). `aborted` means the prediction was terminated before it started running (for example, when a deadline is reached before the prediction starts).<br>|
|urls|object|true|none|URLs for working with the prediction|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|web|
|source|api|
|status|starting|
|status|processing|
|status|succeeded|
|status|failed|
|status|canceled|
|status|aborted|

<h2 id="tocS_schemas_search_collection_response">schemas_search_collection_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_search_collection_response"></a>
<a id="schema_schemas_search_collection_response"></a>
<a id="tocSschemas_search_collection_response"></a>
<a id="tocsschemas_search_collection_response"></a>

```json
{
  "description": "string",
  "models": [
    "string"
  ],
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A description of the collection|
|models|[string]|false|none|Array of model names in the collection|
|name|string|true|none|The name of the collection|
|slug|string|true|none|The slug of the collection (lowercase with dashes)|

<h2 id="tocS_schemas_search_model_metadata_response">schemas_search_model_metadata_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_search_model_metadata_response"></a>
<a id="schema_schemas_search_model_metadata_response"></a>
<a id="tocSschemas_search_model_metadata_response"></a>
<a id="tocsschemas_search_model_metadata_response"></a>

```json
{
  "generated_description": "string",
  "score": 0,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generated_description|string \| null|false|none|AI-generated detailed description of the model|
|score|number \| null|false|none|Search relevance score|
|tags|[string]|false|none|Array of descriptive tags for the model|

<h2 id="tocS_schemas_search_response">schemas_search_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_search_response"></a>
<a id="schema_schemas_search_response"></a>
<a id="tocSschemas_search_response"></a>
<a id="tocsschemas_search_response"></a>

```json
{
  "collections": [
    {
      "description": "string",
      "models": [
        "string"
      ],
      "name": "string",
      "slug": "string"
    }
  ],
  "models": [
    {
      "metadata": {
        "generated_description": "string",
        "score": 0,
        "tags": [
          "string"
        ]
      },
      "model": {
        "cover_image_url": "http://example.com",
        "default_example": {},
        "description": "string",
        "github_url": "http://example.com",
        "is_official": true,
        "latest_version": {},
        "license_url": "http://example.com",
        "name": "string",
        "owner": "string",
        "paper_url": "http://example.com",
        "run_count": 0,
        "url": "http://example.com",
        "visibility": "public"
      }
    }
  ],
  "pages": [
    {
      "href": "string",
      "name": "string"
    }
  ],
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[schemas_search_collection_response](#schemaschemas_search_collection_response)]|true|none|Array of collections that match the search query|
|models|[object]|true|none|Array of models that match the search query, each containing model data and extra metadata|
|pages|[[schemas_page_response](#schemaschemas_page_response)]|true|none|Array of Replicate documentation pages that match the search query|
|query|string|true|none|The search term that was evaluated|

<h2 id="tocS_schemas_training_request">schemas_training_request</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_training_request"></a>
<a id="schema_schemas_training_request"></a>
<a id="tocSschemas_training_request"></a>
<a id="tocsschemas_training_request"></a>

```json
{
  "destination": "string",
  "input": {},
  "webhook": "string",
  "webhook_events_filter": [
    "start"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|true|none|A string representing the desired model to push to in the format `{destination_model_owner}/{destination_model_name}`. This should be an existing model owned by the user or organization making the API request. If the destination is invalid, the server will return an appropriate 4XX response.<br>|
|input|object|true|none|An object containing inputs to the Cog model's `train()` function.<br>|
|webhook|string|false|none|An HTTPS URL for receiving a webhook when the training completes. The webhook will be a POST request where the request body is the same as the response body of the [get training](#trainings.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.|
|webhook_events_filter|[string]|false|none|By default, we will send requests to your webhook URL whenever there are new outputs or the training has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the training request:<br><br>- `start`: immediately on training start<br>- `output`: each time a training generates an output (note that trainings can generate multiple outputs)<br>- `logs`: each time log output is generated by a training<br>- `completed`: when the training reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the training, you would provide:<br><br>```json<br>{<br>  "destination": "my-organization/my-model",<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|webhook_events_filter|start|
|webhook_events_filter|output|
|webhook_events_filter|logs|
|webhook_events_filter|completed|

<h2 id="tocS_schemas_training_response">schemas_training_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_training_response"></a>
<a id="schema_schemas_training_response"></a>
<a id="tocSschemas_training_response"></a>
<a id="tocsschemas_training_response"></a>

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "error": "string",
  "id": "string",
  "input": {},
  "logs": "string",
  "metrics": {
    "predict_time": 0,
    "total_time": 0
  },
  "model": "string",
  "output": {
    "version": "string",
    "weights": "string"
  },
  "source": "web",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "starting",
  "urls": {
    "cancel": "http://example.com",
    "get": "http://example.com"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed_at|string(date-time)|false|none|The time when the training completed|
|created_at|string(date-time)|false|none|The time when the training was created|
|error|string \| null|false|none|Error message if the training failed|
|id|string|false|none|The unique ID of the training|
|input|object|false|none|The input parameters used for the training|
|logs|string|false|none|The logs from the training process|
|metrics|object|false|none|Metrics about the training process|
|model|string|false|none|The name of the model in the format owner/name|
|output|object|false|none|The output of the training process|
|source|string|false|none|How the training was created|
|started_at|string(date-time)|false|none|The time when the training started|
|status|string|false|none|The current status of the training. `canceled` means the training was canceled (either by the user or because it reached its deadline while running). `aborted` means the training was terminated before it started running (for example, when a deadline is reached before the training starts).<br>|
|urls|object|false|none|URLs for interacting with the training|
|version|string|false|none|The ID of the model version used for training|

#### Enumerated Values

|Property|Value|
|---|---|
|source|web|
|source|api|
|status|starting|
|status|processing|
|status|succeeded|
|status|failed|
|status|canceled|
|status|aborted|

<h2 id="tocS_schemas_version_prediction_request">schemas_version_prediction_request</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_version_prediction_request"></a>
<a id="schema_schemas_version_prediction_request"></a>
<a id="tocSschemas_version_prediction_request"></a>
<a id="tocsschemas_version_prediction_request"></a>

```json
{
  "input": {
    "text": "Alice"
  },
  "stream": true,
  "version": "replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426",
  "webhook": "https://example.com/my-webhook-handler",
  "webhook_events_filter": [
    "start",
    "completed"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the "API" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.<br><br>Files should be passed as HTTP URLs or data URLs.<br><br>Use an HTTP URL when:<br><br>- you have a large file > 256kb<br>- you want to be able to use the file multiple times<br>- you want your prediction metadata to be associable with your input files<br><br>Use a data URL when:<br><br>- you have a small file <= 256kb<br>- you don't want to upload and host the file somewhere<br>- you don't need to use the file again (Replicate will not store it)<br>|
|stream|boolean|false|none|**This field is deprecated.**<br><br>Request a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).<br><br>This field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.<br>|
|version|string|true|none|The identifier for the model or model version that you want to run. This can be specified in a few different formats:<br><br>- `{owner_name}/{model_name}` - Use this format for [official models](https://replicate.com/docs/topics/models/official-models). For example, `black-forest-labs/flux-schnell`. For all other models, the specific version is required.<br>- `{owner_name}/{model_name}:{version_id}` - The owner and model name, plus the full 64-character version ID. For example, `replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`.<br>- `{version_id}` - Just the 64-character version ID. For example, `9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`<br>|
|webhook|string|false|none|An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.<br>|
|webhook_events_filter|[string]|false|none|By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:<br><br>- `start`: immediately on prediction start<br>- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)<br>- `logs`: each time log output is generated by a prediction<br>- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)<br><br>For example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:<br><br>```json<br>{<br>  "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",<br>  "input": {<br>    "text": "Alice"<br>  },<br>  "webhook": "https://example.com/my-webhook",<br>  "webhook_events_filter": ["start", "completed"]<br>}<br>```<br><br>Requests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they'll always be sent regardless of throttling.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|webhook_events_filter|start|
|webhook_events_filter|output|
|webhook_events_filter|logs|
|webhook_events_filter|completed|

<h2 id="tocS_schemas_version_response">schemas_version_response</h2>
<!-- backwards compatibility -->
<a id="schemaschemas_version_response"></a>
<a id="schema_schemas_version_response"></a>
<a id="tocSschemas_version_response"></a>
<a id="tocsschemas_version_response"></a>

```json
{
  "cog_version": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "openapi_schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cog_version|string \| null|false|none|The version of Cog used to create this version|
|created_at|string(date-time)|false|none|The date and time the version was created|
|id|string|false|none|The ID of the version|
|openapi_schema|object \| null|false|none|The OpenAPI schema for the model's inputs and outputs|
