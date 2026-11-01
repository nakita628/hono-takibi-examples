<h1 id="ray-jobs-api">Ray Jobs API v4.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the specification for the Ray Jobs REST API.
See the Ray Jobs documentation for details:
https://docs.ray.io/en/latest/cluster/running-applications/job-submission/index.html

<h1 id="ray-jobs-api-default">Default</h1>

## Get Version

> Code samples

```bash
curl http://localhost:8265/api/version \
  -H 'Accept: application/json'
```

`GET /api/version`

Get the Ray Jobs API version and the Ray version running on the cluster.


> Example responses

> 200 Response

```json
{
  "version": "string",
  "ray_version": "string",
  "ray_commit": "string"
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Ray Jobs API version and the Ray version running on the cluster.<br>|Inline|

<h3 id="get-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|The version of the Ray Jobs API running on the server.|
|ray_version|string|false|none|The version of Ray running on the server.|
|ray_commit|string|false|none|The commit of Ray running on the server.|

<aside class="success">
This operation does not require authentication
</aside>

## List Jobs

> Code samples

```bash
curl http://localhost:8265/api/jobs \
  -H 'Accept: application/json'
```

`GET /api/jobs`

List all submitted jobs in the cluster and their details.


> Example responses

> 200 Response

```json
[
  {
    "type": {},
    "entrypoint": "string",
    "job_id": "string",
    "submission_id": "string",
    "driver_info": {
      "id": "string",
      "node_ip_address": "string",
      "pid": "string"
    },
    "status": {},
    "message": "string",
    "error_type": "string",
    "start_time": 0,
    "end_time": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "runtime_env": {},
    "driver_agent_http_address": "string",
    "driver_node_id": "string"
  }
]
```

<h3 id="list-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The details of the jobs.<br>|Inline|

<h3 id="list-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JobDetails](#schemajobdetails)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Submit Job

> Code samples

```bash
curl http://localhost:8265/api/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entrypoint": "string",
    "submission_id": "string",
    "job_id": "string",
    "runtime_env": {},
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "entrypoint_num_cpus": 0,
    "entrypoint_num_gpus": 0,
    "entrypoint_memory": 0,
    "entrypoint_resources": {
      "property1": 0,
      "property2": 0
    }
  }'
```

`POST /api/jobs`

Submit a job to the cluster.


> Body parameter

```json
{
  "entrypoint": "string",
  "submission_id": "string",
  "job_id": "string",
  "runtime_env": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "entrypoint_num_cpus": 0,
  "entrypoint_num_gpus": 0,
  "entrypoint_memory": 0,
  "entrypoint_resources": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="submit-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobSubmitRequest](#schemajobsubmitrequest)|true|The job to submit.<br>|
|» entrypoint|body|string|true|Command to start execution, ex: 'python script.py'|
|» submission_id|body|string|false|Optional submission_id to specify for the job.|
|» job_id|body|string|false|**Deprecated.** Optional job_id to specify for the job.|
|» runtime_env|body|object|false|The runtime environment for the job.|
|» metadata|body|object|false|Arbitrary user-provided metadata for the job.|
|» » **additionalProperties**|body|string|false|none|
|» entrypoint_num_cpus|body|number|false|Number of CPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|
|» entrypoint_num_gpus|body|number|false|Number of GPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|
|» entrypoint_memory|body|integer|false|The quantity of memory to reserve for the execution of the entrypoint command, separately from any tasks or actors launched by it.|
|» entrypoint_resources|body|object|false|The quantity of various custom resources to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|
|» » **additionalProperties**|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "job_id": "string",
  "submission_id": "string"
}
```

<h3 id="submit-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ID of the submitted job.<br>|[JobSubmitResponse](#schemajobsubmitresponse)|
|400|Bad Request|A TypeError or ValueError was raised when submitting the job.<br>|Inline|
|500|Internal Server Error|An internal error occurred when submitting the job.<br>|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Job Details

> Code samples

```bash
curl http://localhost:8265/api/jobs/string \
  -H 'Accept: application/json'
```

`GET /api/jobs/{submission_id}`

Get the status and details of a job.


<h3 id="get-job-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|The ID of the job to get the status and details of.<br>|

> Example responses

> 200 Response

```json
{
  "type": {},
  "entrypoint": "string",
  "job_id": "string",
  "submission_id": "string",
  "driver_info": {
    "id": "string",
    "node_ip_address": "string",
    "pid": "string"
  },
  "status": {},
  "message": "string",
  "error_type": "string",
  "start_time": 0,
  "end_time": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "runtime_env": {},
  "driver_agent_http_address": "string",
  "driver_node_id": "string"
}
```

<h3 id="get-job-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The details of the job.<br>|[JobDetails](#schemajobdetails)|
|404|Not Found|The job does not exist.<br>|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Job

> Code samples

```bash
curl http://localhost:8265/api/jobs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/jobs/{submission_id}`

Delete a job that is already in a terminal state.


<h3 id="delete-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|The ID of the job to cancel.<br>|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Whether the job was deleted.<br>|Inline|
|400|Bad Request|The job was not submitted via the Ray Jobs API, so it cannot be deleted.<br>|Inline|
|404|Not Found|The job does not exist.<br>|Inline|
|500|Internal Server Error|An internal error occurred when deleting the job, or the job was not in a terminal state.<br>|Inline|

<h3 id="delete-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|false|none|Whether the job was deleted.|

<aside class="success">
This operation does not require authentication
</aside>

## Stop Job

> Code samples

```bash
curl http://localhost:8265/api/jobs/string/stop \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/jobs/{submission_id}/stop`

Stop a job.


<h3 id="stop-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|The ID of the job to stop.<br>|

> Example responses

> 200 Response

```json
{
  "stopped": true
}
```

<h3 id="stop-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Whether the job was stopped.<br>|Inline|
|400|Bad Request|The job was not submitted via the Ray Jobs API, so it cannot be stopped.<br>|Inline|
|404|Not Found|The job does not exist.<br>|Inline|
|500|Internal Server Error|An internal error occurred when stopping the job.<br>|Inline|

<h3 id="stop-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopped|boolean|false|none|Whether the job was stopped.|

<aside class="success">
This operation does not require authentication
</aside>

## Get Job Logs

> Code samples

```bash
curl http://localhost:8265/api/jobs/string/logs \
  -H 'Accept: application/json'
```

`GET /api/jobs/{submission_id}/logs`

Get the logs of a job.


<h3 id="get-job-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|The ID of the job to get the logs of.<br>|

> Example responses

> 200 Response

```json
{
  "logs": "string"
}
```

<h3 id="get-job-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The logs of the job.<br>|Inline|
|400|Bad Request|The job was not submitted via the Ray Jobs API, so its logs cannot be retrieved.<br>|Inline|
|404|Not Found|The job does not exist.<br>|Inline|
|500|Internal Server Error|An internal error occurred when getting the logs of the job.<br>|Inline|

<h3 id="get-job-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|string|false|none|The logs of the job.|

<aside class="success">
This operation does not require authentication
</aside>

## Tail Job Logs

> Code samples

```bash
curl http://localhost:8265/api/jobs/string/logs/tail
```

`GET /api/jobs/{submission_id}/logs/tail`

WebSocket endpoint for tailing the logs of a job
(Not documented in OpenAPI, see
https://docs.ray.io/en/latest/_modules/ray/dashboard/modules/job/sdk.html#JobSubmissionClient.tail_job_logs
for example usage).


<h3 id="tail-job-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|The ID of the job to tail the logs of.<br>|

<h3 id="tail-job-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|The job was not submitted via the Ray Jobs API, so its logs cannot be retrieved.<br>|Inline|
|404|Not Found|The job does not exist.<br>|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_JobDetails">JobDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobdetails"></a>
<a id="schema_JobDetails"></a>
<a id="tocSjobdetails"></a>
<a id="tocsjobdetails"></a>

```json
{
  "type": {},
  "entrypoint": "string",
  "job_id": "string",
  "submission_id": "string",
  "driver_info": {
    "id": "string",
    "node_ip_address": "string",
    "pid": "string"
  },
  "status": {},
  "message": "string",
  "error_type": "string",
  "start_time": 0,
  "end_time": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "runtime_env": {},
  "driver_agent_http_address": "string",
  "driver_node_id": "string"
}
```

Job data with extra details about its driver and its submission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|The type of job.|
|entrypoint|string|true|none|The entrypoint command for this job.|
|job_id|string \| null|false|none|The job id. An id that is created for every job that is launched in Ray. This id can be used to fetch data about jobs using Ray core APIs.|
|submission_id|string \| null|false|none|A submission id is an id created for every submission job. This id can be used to fetch data about jobs using the job submission APIs.|
|driver_info|object \| null|false|none|The driver related to this job. For submission jobs, it is the last driver launched by that job submission, or None if there is no driver.|
|status|object|true|none|The status of the job.|
|message|string \| null|false|none|A message describing the status in more detail.|
|error_type|string \| null|false|none|Internal error, user script error|
|start_time|integer \| null|false|none|The time when the job was started. A Unix timestamp in ms.|
|end_time|integer \| null|false|none|The time when the job moved into a terminal state. A Unix timestamp in ms.|
|metadata|object \| null|false|none|Arbitrary user-provided metadata for the job.|
|runtime_env|object \| null|false|none|The runtime environment for the job.|
|driver_agent_http_address|string \| null|false|none|Driver agent http address.|
|driver_node_id|string \| null|false|none|Driver node id.|

<h2 id="tocS_JobSubmitRequest">JobSubmitRequest</h2>
<!-- backwards compatibility -->
<a id="schemajobsubmitrequest"></a>
<a id="schema_JobSubmitRequest"></a>
<a id="tocSjobsubmitrequest"></a>
<a id="tocsjobsubmitrequest"></a>

```json
{
  "entrypoint": "string",
  "submission_id": "string",
  "job_id": "string",
  "runtime_env": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "entrypoint_num_cpus": 0,
  "entrypoint_num_gpus": 0,
  "entrypoint_memory": 0,
  "entrypoint_resources": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entrypoint|string|true|none|Command to start execution, ex: 'python script.py'|
|submission_id|string|false|none|Optional submission_id to specify for the job.|
|job_id|string|false|none|**Deprecated.** Optional job_id to specify for the job.|
|runtime_env|object|false|none|The runtime environment for the job.|
|metadata|object|false|none|Arbitrary user-provided metadata for the job.|
|entrypoint_num_cpus|number|false|none|Number of CPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|
|entrypoint_num_gpus|number|false|none|Number of GPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|
|entrypoint_memory|integer|false|none|The quantity of memory to reserve for the execution of the entrypoint command, separately from any tasks or actors launched by it.|
|entrypoint_resources|object|false|none|The quantity of various custom resources to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.|

<h2 id="tocS_JobSubmitResponse">JobSubmitResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobsubmitresponse"></a>
<a id="schema_JobSubmitResponse"></a>
<a id="tocSjobsubmitresponse"></a>
<a id="tocsjobsubmitresponse"></a>

```json
{
  "job_id": "string",
  "submission_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|false|none|**Deprecated.** The ID of the submitted job.<br>|
|submission_id|string|false|none|The ID of the submitted job.<br>|

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"SUBMISSION"
```

An enumeration for describing the different job types.

<h2 id="tocS_DriverInfo">DriverInfo</h2>
<!-- backwards compatibility -->
<a id="schemadriverinfo"></a>
<a id="schema_DriverInfo"></a>
<a id="tocSdriverinfo"></a>
<a id="tocsdriverinfo"></a>

```json
{
  "id": "string",
  "node_ip_address": "string",
  "pid": "string"
}
```

A class for recording information about the driver related to the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id of the driver|
|node_ip_address|string|true|none|The ip address of the node the driver is running on|
|pid|string|true|none|The pid of the worker process the driver is using.|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"PENDING"
```

An enumeration for describing the status of a job.
