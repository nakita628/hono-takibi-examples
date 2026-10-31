<h1 id="bigquery-reservation-api">BigQuery Reservation API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A service to modify your BigQuery flat-rate reservations.

Base URLs:

* <a href="https://bigqueryreservation.googleapis.com/">https://bigqueryreservation.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/bigquery/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="bigquery-reservation-api-projects">projects</h1>

## bigqueryreservation.projects.locations.reservations.get

<a id="opIdbigqueryreservation.projects.locations.reservations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Returns information about the reservation.

<h3 id="bigqueryreservationprojectslocationsreservationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`|
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
  "concurrency": "string",
  "creationTime": "string",
  "ignoreIdleSlots": true,
  "multiRegionAuxiliary": true,
  "name": "string",
  "slotCapacity": "string",
  "updateTime": "string"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reservation](#schemareservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.assignments.delete

<a id="opIdbigqueryreservation.projects.locations.reservations.assignments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`|
|force|query|boolean|false|Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.|
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

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.assignments.patch

<a id="opIdbigqueryreservation.projects.locations.reservations.assignments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignee": "string",
    "jobType": "JOB_TYPE_UNSPECIFIED"
  }'
```

`PATCH /v1beta1/{name}`

Updates an existing assignment. Only the `priority` field can be updated.

> Body parameter

```json
{
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.|
|updateMask|query|string|false|Standard field mask for the set of fields to be updated.|
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
|body|body|[Assignment](#schemaassignment)|false|none|
|» assignee|body|string|false|The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.|
|» jobType|body|string|false|Which type of jobs will use the reservation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» jobType|JOB_TYPE_UNSPECIFIED|
|» jobType|PIPELINE|
|» jobType|QUERY|
|» jobType|ML_EXTERNAL|

> Example responses

> 200 Response

```json
{
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Assignment](#schemaassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.assignments.move

<a id="opIdbigqueryreservation.projects.locations.reservations.assignments.move"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationId": "string"
  }'
```

`POST /v1beta1/{name}:move`

Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.

> Body parameter

```json
{
  "destinationId": "string"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentsmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`|
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
|body|body|[MoveAssignmentRequest](#schemamoveassignmentrequest)|false|none|
|» destinationId|body|string|false|The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`|

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
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentsmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Assignment](#schemaassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.capacityCommitments.split

<a id="opIdbigqueryreservation.projects.locations.capacityCommitments.split"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:split \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "slotCount": "string"
  }'
```

`POST /v1beta1/{name}:split`

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

> Body parameter

```json
{
  "slotCount": "string"
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentssplit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`|
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
|body|body|[SplitCapacityCommitmentRequest](#schemasplitcapacitycommitmentrequest)|false|none|
|» slotCount|body|string(int64)|false|Number of slots in the capacity commitment after the split.|

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
  "first": {
    "commitmentEndTime": "string",
    "commitmentStartTime": "string",
    "failureStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "multiRegionAuxiliary": true,
    "name": "string",
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "slotCount": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "second": {
    "commitmentEndTime": "string",
    "commitmentStartTime": "string",
    "failureStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "multiRegionAuxiliary": true,
    "name": "string",
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "slotCount": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentssplit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SplitCapacityCommitmentResponse](#schemasplitcapacitycommitmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.assignments.list

<a id="opIdbigqueryreservation.projects.locations.reservations.assignments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/assignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/assignments`

Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "assignments": [
    {
      "assignee": "string",
      "jobType": "JOB_TYPE_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAssignmentsResponse](#schemalistassignmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.assignments.create

<a id="opIdbigqueryreservation.projects.locations.reservations.assignments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/assignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignee": "string",
    "jobType": "JOB_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/assignments`

Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.

> Body parameter

```json
{
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`|
|assignmentId|query|string|false|The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.|
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
|body|body|[Assignment](#schemaassignment)|false|none|
|» assignee|body|string|false|The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.|
|» jobType|body|string|false|Which type of jobs will use the reservation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» jobType|JOB_TYPE_UNSPECIFIED|
|» jobType|PIPELINE|
|» jobType|QUERY|
|» jobType|ML_EXTERNAL|

> Example responses

> 200 Response

```json
{
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationsassignmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Assignment](#schemaassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.capacityCommitments.list

<a id="opIdbigqueryreservation.projects.locations.capacityCommitments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/capacityCommitments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/capacityCommitments`

Lists all the capacity commitments for the admin project.

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "capacityCommitments": [
    {
      "commitmentEndTime": "string",
      "commitmentStartTime": "string",
      "failureStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "multiRegionAuxiliary": true,
      "name": "string",
      "plan": "COMMITMENT_PLAN_UNSPECIFIED",
      "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
      "slotCount": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCapacityCommitmentsResponse](#schemalistcapacitycommitmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.capacityCommitments.create

<a id="opIdbigqueryreservation.projects.locations.capacityCommitments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/capacityCommitments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "multiRegionAuxiliary": true,
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "slotCount": "string"
  }'
```

`POST /v1beta1/{parent}/capacityCommitments`

Creates a new capacity commitment resource.

> Body parameter

```json
{
  "multiRegionAuxiliary": true,
  "plan": "COMMITMENT_PLAN_UNSPECIFIED",
  "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
  "slotCount": "string"
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`|
|capacityCommitmentId|query|string|false|The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.|
|enforceSingleAdminProjectPerOrg|query|boolean|false|If true, fail the request if another project in the organization has a capacity commitment.|
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
|body|body|[CapacityCommitment](#schemacapacitycommitment)|false|none|
|» multiRegionAuxiliary|body|boolean|false|Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region.|
|» plan|body|string|false|Capacity commitment commitment plan.|
|» renewalPlan|body|string|false|The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.|
|» slotCount|body|string(int64)|false|Number of slots in this commitment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» plan|COMMITMENT_PLAN_UNSPECIFIED|
|» plan|FLEX|
|» plan|TRIAL|
|» plan|MONTHLY|
|» plan|ANNUAL|
|» renewalPlan|COMMITMENT_PLAN_UNSPECIFIED|
|» renewalPlan|FLEX|
|» renewalPlan|TRIAL|
|» renewalPlan|MONTHLY|
|» renewalPlan|ANNUAL|

> Example responses

> 200 Response

```json
{
  "commitmentEndTime": "string",
  "commitmentStartTime": "string",
  "failureStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "multiRegionAuxiliary": true,
  "name": "string",
  "plan": "COMMITMENT_PLAN_UNSPECIFIED",
  "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
  "slotCount": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CapacityCommitment](#schemacapacitycommitment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.capacityCommitments.merge

<a id="opIdbigqueryreservation.projects.locations.capacityCommitments.merge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/capacityCommitments:merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacityCommitmentIds": [
      "string"
    ]
  }'
```

`POST /v1beta1/{parent}/capacityCommitments:merge`

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

> Body parameter

```json
{
  "capacityCommitmentIds": [
    "string"
  ]
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentsmerge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`|
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
|body|body|[MergeCapacityCommitmentsRequest](#schemamergecapacitycommitmentsrequest)|false|none|
|» capacityCommitmentIds|body|[string]|false|Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc|

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
  "commitmentEndTime": "string",
  "commitmentStartTime": "string",
  "failureStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "multiRegionAuxiliary": true,
  "name": "string",
  "plan": "COMMITMENT_PLAN_UNSPECIFIED",
  "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
  "slotCount": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="bigqueryreservationprojectslocationscapacitycommitmentsmerge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CapacityCommitment](#schemacapacitycommitment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.list

<a id="opIdbigqueryreservation.projects.locations.reservations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/reservations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/reservations`

Lists all the reservations for the project in the specified location.

<h3 id="bigqueryreservationprojectslocationsreservationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`|
|filter|query|string|false|Can be used to filter out reservations based on names, capacity, etc, e.g.: filter="reservation.slot_capacity > 200" filter="reservation.name = \"*dev/*\"" Advanced filtering syntax can be [here](https://cloud.google.com/logging/docs/view/advanced-filters).|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "reservations": [
    {
      "concurrency": "string",
      "creationTime": "string",
      "ignoreIdleSlots": true,
      "multiRegionAuxiliary": true,
      "name": "string",
      "slotCapacity": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="bigqueryreservationprojectslocationsreservationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReservationsResponse](#schemalistreservationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.reservations.create

<a id="opIdbigqueryreservation.projects.locations.reservations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/reservations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "concurrency": "string",
    "ignoreIdleSlots": true,
    "multiRegionAuxiliary": true,
    "name": "string",
    "slotCapacity": "string"
  }'
```

`POST /v1beta1/{parent}/reservations`

Creates a new reservation resource.

> Body parameter

```json
{
  "concurrency": "string",
  "ignoreIdleSlots": true,
  "multiRegionAuxiliary": true,
  "name": "string",
  "slotCapacity": "string"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Project, location. E.g., `projects/myproject/locations/US`|
|reservationId|query|string|false|The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.|
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
|body|body|[Reservation](#schemareservation)|false|none|
|» concurrency|body|string(int64)|false|Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as `target_job_concurrency` in the Information Schema, DDL and BQ CLI.|
|» ignoreIdleSlots|body|boolean|false|If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.|
|» multiRegionAuxiliary|body|boolean|false|Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.|
|» name|body|string|false|The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.|
|» slotCapacity|body|string(int64)|false|Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation's slot capacity exceeds the project's slot capacity or if total slot capacity of the new reservation and its siblings exceeds the project's slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`. NOTE: for reservations in US or EU multi-regions, slot capacity constraints are checked separately for default and auxiliary regions. See multi_region_auxiliary flag for more details.|

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
  "concurrency": "string",
  "creationTime": "string",
  "ignoreIdleSlots": true,
  "multiRegionAuxiliary": true,
  "name": "string",
  "slotCapacity": "string",
  "updateTime": "string"
}
```

<h3 id="bigqueryreservationprojectslocationsreservationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reservation](#schemareservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigqueryreservation.projects.locations.searchAssignments

<a id="opIdbigqueryreservation.projects.locations.searchAssignments"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:searchAssignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}:searchAssignments`

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

<h3 id="bigqueryreservationprojectslocationssearchassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
|query|query|string|false|Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`|
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
  "assignments": [
    {
      "assignee": "string",
      "jobType": "JOB_TYPE_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigqueryreservationprojectslocationssearchassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchAssignmentsResponse](#schemasearchassignmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "assignee": "string",
  "jobType": "JOB_TYPE_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|string|false|none|The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.|
|jobType|string|false|none|Which type of jobs will use the reservation.|
|name|string|false|read-only|Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.|
|state|string|false|read-only|Output only. State of the assignment.|

#### Enumerated Values

|Property|Value|
|---|---|
|jobType|JOB_TYPE_UNSPECIFIED|
|jobType|PIPELINE|
|jobType|QUERY|
|jobType|ML_EXTERNAL|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACTIVE|

<h2 id="tocS_BiReservation">BiReservation</h2>
<!-- backwards compatibility -->
<a id="schemabireservation"></a>
<a id="schema_BiReservation"></a>
<a id="tocSbireservation"></a>
<a id="tocsbireservation"></a>

```json
{
  "name": "string",
  "preferredTables": [
    {
      "datasetId": "string",
      "projectId": "string",
      "tableId": "string"
    }
  ],
  "size": "string",
  "updateTime": "string"
}
```

Represents a BI Reservation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/biReservation`.|
|preferredTables|[[TableReference](#schematablereference)]|false|none|Preferred tables to use BI capacity for.|
|size|string(int64)|false|none|Size of a reservation, in bytes.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a reservation.|

<h2 id="tocS_CapacityCommitment">CapacityCommitment</h2>
<!-- backwards compatibility -->
<a id="schemacapacitycommitment"></a>
<a id="schema_CapacityCommitment"></a>
<a id="tocScapacitycommitment"></a>
<a id="tocscapacitycommitment"></a>

```json
{
  "commitmentEndTime": "string",
  "commitmentStartTime": "string",
  "failureStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "multiRegionAuxiliary": true,
  "name": "string",
  "plan": "COMMITMENT_PLAN_UNSPECIFIED",
  "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
  "slotCount": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitmentEndTime|string(google-datetime)|false|read-only|Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments.|
|commitmentStartTime|string(google-datetime)|false|read-only|Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.|
|failureStatus|[Status](#schemastatus)|false|none|Output only. For FAILED commitment plan, provides the reason of failure.|
|multiRegionAuxiliary|boolean|false|none|Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region.|
|name|string|false|read-only|Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.|
|plan|string|false|none|Capacity commitment commitment plan.|
|renewalPlan|string|false|none|The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.|
|slotCount|string(int64)|false|none|Number of slots in this commitment.|
|state|string|false|read-only|Output only. State of the commitment.|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|COMMITMENT_PLAN_UNSPECIFIED|
|plan|FLEX|
|plan|TRIAL|
|plan|MONTHLY|
|plan|ANNUAL|
|renewalPlan|COMMITMENT_PLAN_UNSPECIFIED|
|renewalPlan|FLEX|
|renewalPlan|TRIAL|
|renewalPlan|MONTHLY|
|renewalPlan|ANNUAL|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACTIVE|
|state|FAILED|

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

<h2 id="tocS_ListAssignmentsResponse">ListAssignmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassignmentsresponse"></a>
<a id="schema_ListAssignmentsResponse"></a>
<a id="tocSlistassignmentsresponse"></a>
<a id="tocslistassignmentsresponse"></a>

```json
{
  "assignments": [
    {
      "assignee": "string",
      "jobType": "JOB_TYPE_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ReservationService.ListAssignments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignments|[[Assignment](#schemaassignment)]|false|none|List of assignments visible to the user.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListCapacityCommitmentsResponse">ListCapacityCommitmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcapacitycommitmentsresponse"></a>
<a id="schema_ListCapacityCommitmentsResponse"></a>
<a id="tocSlistcapacitycommitmentsresponse"></a>
<a id="tocslistcapacitycommitmentsresponse"></a>

```json
{
  "capacityCommitments": [
    {
      "commitmentEndTime": "string",
      "commitmentStartTime": "string",
      "failureStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "multiRegionAuxiliary": true,
      "name": "string",
      "plan": "COMMITMENT_PLAN_UNSPECIFIED",
      "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
      "slotCount": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ReservationService.ListCapacityCommitments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityCommitments|[[CapacityCommitment](#schemacapacitycommitment)]|false|none|List of capacity commitments visible to the user.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListReservationsResponse">ListReservationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationsresponse"></a>
<a id="schema_ListReservationsResponse"></a>
<a id="tocSlistreservationsresponse"></a>
<a id="tocslistreservationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reservations": [
    {
      "concurrency": "string",
      "creationTime": "string",
      "ignoreIdleSlots": true,
      "multiRegionAuxiliary": true,
      "name": "string",
      "slotCapacity": "string",
      "updateTime": "string"
    }
  ]
}
```

The response for ReservationService.ListReservations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|reservations|[[Reservation](#schemareservation)]|false|none|List of reservations visible to the user.|

<h2 id="tocS_MergeCapacityCommitmentsRequest">MergeCapacityCommitmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamergecapacitycommitmentsrequest"></a>
<a id="schema_MergeCapacityCommitmentsRequest"></a>
<a id="tocSmergecapacitycommitmentsrequest"></a>
<a id="tocsmergecapacitycommitmentsrequest"></a>

```json
{
  "capacityCommitmentIds": [
    "string"
  ]
}
```

The request for ReservationService.MergeCapacityCommitments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityCommitmentIds|[string]|false|none|Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc|

<h2 id="tocS_MoveAssignmentRequest">MoveAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemamoveassignmentrequest"></a>
<a id="schema_MoveAssignmentRequest"></a>
<a id="tocSmoveassignmentrequest"></a>
<a id="tocsmoveassignmentrequest"></a>

```json
{
  "destinationId": "string"
}
```

The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|string|false|none|The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`|

<h2 id="tocS_Reservation">Reservation</h2>
<!-- backwards compatibility -->
<a id="schemareservation"></a>
<a id="schema_Reservation"></a>
<a id="tocSreservation"></a>
<a id="tocsreservation"></a>

```json
{
  "concurrency": "string",
  "creationTime": "string",
  "ignoreIdleSlots": true,
  "multiRegionAuxiliary": true,
  "name": "string",
  "slotCapacity": "string",
  "updateTime": "string"
}
```

A reservation is a mechanism used to guarantee slots to users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrency|string(int64)|false|none|Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as `target_job_concurrency` in the Information Schema, DDL and BQ CLI.|
|creationTime|string(google-datetime)|false|read-only|Output only. Creation time of the reservation.|
|ignoreIdleSlots|boolean|false|none|If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.|
|multiRegionAuxiliary|boolean|false|none|Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.|
|name|string|false|none|The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.|
|slotCapacity|string(int64)|false|none|Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation's slot capacity exceeds the project's slot capacity or if total slot capacity of the new reservation and its siblings exceeds the project's slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`. NOTE: for reservations in US or EU multi-regions, slot capacity constraints are checked separately for default and auxiliary regions. See multi_region_auxiliary flag for more details.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time of the reservation.|

<h2 id="tocS_SearchAssignmentsResponse">SearchAssignmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchassignmentsresponse"></a>
<a id="schema_SearchAssignmentsResponse"></a>
<a id="tocSsearchassignmentsresponse"></a>
<a id="tocssearchassignmentsresponse"></a>

```json
{
  "assignments": [
    {
      "assignee": "string",
      "jobType": "JOB_TYPE_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ReservationService.SearchAssignments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignments|[[Assignment](#schemaassignment)]|false|none|List of assignments visible to the user.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_SplitCapacityCommitmentRequest">SplitCapacityCommitmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasplitcapacitycommitmentrequest"></a>
<a id="schema_SplitCapacityCommitmentRequest"></a>
<a id="tocSsplitcapacitycommitmentrequest"></a>
<a id="tocssplitcapacitycommitmentrequest"></a>

```json
{
  "slotCount": "string"
}
```

The request for ReservationService.SplitCapacityCommitment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slotCount|string(int64)|false|none|Number of slots in the capacity commitment after the split.|

<h2 id="tocS_SplitCapacityCommitmentResponse">SplitCapacityCommitmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasplitcapacitycommitmentresponse"></a>
<a id="schema_SplitCapacityCommitmentResponse"></a>
<a id="tocSsplitcapacitycommitmentresponse"></a>
<a id="tocssplitcapacitycommitmentresponse"></a>

```json
{
  "first": {
    "commitmentEndTime": "string",
    "commitmentStartTime": "string",
    "failureStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "multiRegionAuxiliary": true,
    "name": "string",
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "slotCount": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "second": {
    "commitmentEndTime": "string",
    "commitmentStartTime": "string",
    "failureStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "multiRegionAuxiliary": true,
    "name": "string",
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "renewalPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "slotCount": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

The response for ReservationService.SplitCapacityCommitment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|[CapacityCommitment](#schemacapacitycommitment)|false|none|First capacity commitment, result of a split.|
|second|[CapacityCommitment](#schemacapacitycommitment)|false|none|Second capacity commitment, result of a split.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TableReference">TableReference</h2>
<!-- backwards compatibility -->
<a id="schematablereference"></a>
<a id="schema_TableReference"></a>
<a id="tocStablereference"></a>
<a id="tocstablereference"></a>

```json
{
  "datasetId": "string",
  "projectId": "string",
  "tableId": "string"
}
```

Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|The ID of the dataset in the above project.|
|projectId|string|false|none|The assigned project ID of the project.|
|tableId|string|false|none|The ID of the table in the above dataset.|
