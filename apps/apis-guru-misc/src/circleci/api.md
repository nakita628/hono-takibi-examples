<h1 id="circleci-rest-api">CircleCI REST API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.

Base URLs:

* <a href="https://circleci.com/api/v1">https://circleci.com/api/v1</a>

License: <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike 4.0 International</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **circle-token**, in: query.

<h1 id="circleci-rest-api-default">Default</h1>

## get/me

> Code samples

```bash
curl "https://example.com/me?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /me`

Provides information about the signed in user.


> Example responses

> 200 Response

```json
{
  "admin": true,
  "all_emails": [
    "user@example.com"
  ],
  "analytics_id": "string",
  "avatar_url": "http://example.com",
  "basic_email_prefs": "string",
  "bitbucket": 0,
  "bitbucket_authorized": true,
  "containers": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "days_left_in_trial": 0,
  "dev_admin": true,
  "enrolled_betas": [
    "string"
  ],
  "github_id": 0,
  "github_oauth_scopes": [
    "string"
  ],
  "gravatar_id": 0,
  "heroku_api_key": "string",
  "in_beta_program": true,
  "login": "string",
  "name": "string",
  "organization_prefs": {},
  "parallelism": 0,
  "plan": "string",
  "projects": {},
  "pusher_id": "string",
  "selected_email": "user@example.com",
  "sign_in_count": 0,
  "trial_end": "1970-01-01T00:00:00Z"
}
```

<h3 id="getme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|signed in user|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}

> Code samples

```bash
curl "https://example.com/project/string/string?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}`

Build summary for each of the last 30 builds for a single git repo.


<h3 id="getprojectusernameproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of builds to return. Maximum 100, defaults to 30.<br>|
|offset|query|integer|false|The API returns builds starting from this offset, defaults to 0.<br>|
|filter|query|string|false|Restricts which builds are returned.<br>Set to "completed", "successful", "failed", "running", or defaults to no filter.<br>|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|completed|
|filter|successful|
|filter|failed|
|filter|running|

> Example responses

> 200 Response

```json
[
  {
    "body": "string",
    "branch": "string",
    "build_time_millis": 0,
    "build_url": "http://example.com",
    "committer_email": "user@example.com",
    "committer_name": "string",
    "dont_build": "string",
    "lifecycle": "queued",
    "previous": {
      "build_num": 0,
      "build_time_millis": 0,
      "status": "retried"
    },
    "queued_at": "1970-01-01T00:00:00Z",
    "reponame": "string",
    "retry_of": 0,
    "start_time": "1970-01-01T00:00:00Z",
    "stop_time": "1970-01-01T00:00:00Z",
    "subject": "string",
    "username": "string",
    "vcs_url": "http://example.com",
    "why": "string"
  }
]
```

<h3 id="getprojectusernameproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Build summary for each of the last 30 builds|[Builds](#schemabuilds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}

> Code samples

```bash
curl "https://example.com/project/string/string?circle-token=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "build_parameters": {},
    "parallel": "string",
    "revision": "string",
    "tag": "string"
  }'
```

`POST /project/{username}/{project}`

Triggers a new build, returns a summary of the build.


> Body parameter

```json
{
  "build_parameters": {},
  "parallel": "string",
  "revision": "string",
  "tag": "string"
}
```

<h3 id="postprojectusernameproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|body|body|object|false|none|
|» build_parameters|body|[BuildParameters](#schemabuildparameters)|false|Additional environment variables to inject into the build environment. A map of names to values.<br>|
|» parallel|body|[Parallel](#schemaparallel)|false|The number of containers to use to run the build. Default is null and the project default is used.<br>|
|» revision|body|[Revision](#schemarevision)|false|The specific revision to build.<br>Default is null and the head of the branch is used. Cannot be used with tag parameter.<br>|
|» tag|body|[Tag](#schematag)|false|The tag to build. Default is null. Cannot be used with revision parameter.<br>|

> Example responses

> 201 Response

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "build_num": 0,
  "outcome": "canceled",
  "pushed_at": "1970-01-01T00:00:00Z",
  "status": "retried",
  "vcs_revision": "string"
}
```

<h3 id="postprojectusernameproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns a summary of the build|[BuildSummary](#schemabuildsummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## delete/project/{username}/{project}/build-cache

> Code samples

```bash
curl "https://example.com/project/string/string/build-cache?circle-token=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /project/{username}/{project}/build-cache`

Clears the cache for a project.


<h3 id="deleteprojectusernameprojectbuild-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="deleteprojectusernameprojectbuild-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status message|Inline|

<h3 id="deleteprojectusernameprojectbuild-cache-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/checkout-key

> Code samples

```bash
curl "https://example.com/project/string/string/checkout-key?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/checkout-key`

Lists checkout keys.


<h3 id="getprojectusernameprojectcheckout-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|

> Example responses

> 200 Response

```json
[
  {
    "fingerprint": "string",
    "preferred": true,
    "public_key": "string",
    "time": "1970-01-01T00:00:00Z",
    "type": "deploy-key"
  }
]
```

<h3 id="getprojectusernameprojectcheckout-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkout keys|[Keys](#schemakeys)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/checkout-key

> Code samples

```bash
curl "https://example.com/project/string/string/checkout-key?circle-token=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"deploy-key"'
```

`POST /project/{username}/{project}/checkout-key`

Creates a new checkout key.
Only usable with a user API token.


> Body parameter

```json
"deploy-key"
```

<h3 id="postprojectusernameprojectcheckout-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|body|body|string|false|The type of key to create. Can be 'deploy-key' or 'github-user-key'.<br>|

> Example responses

> 200 Response

```json
{
  "fingerprint": "string",
  "preferred": true,
  "public_key": "string",
  "time": "1970-01-01T00:00:00Z",
  "type": "deploy-key"
}
```

<h3 id="postprojectusernameprojectcheckout-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkout key|[Key](#schemakey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/checkout-key/{fingerprint}

> Code samples

```bash
curl "https://example.com/project/string/string/checkout-key/string?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/checkout-key/{fingerprint}`

Get a checkout key.


<h3 id="getprojectusernameprojectcheckout-keyfingerprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|fingerprint|path|string|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "fingerprint": "string",
  "preferred": true,
  "public_key": "string",
  "time": "1970-01-01T00:00:00Z",
  "type": "deploy-key"
}
```

<h3 id="getprojectusernameprojectcheckout-keyfingerprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkout key|[Key](#schemakey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## delete/project/{username}/{project}/checkout-key/{fingerprint}

> Code samples

```bash
curl "https://example.com/project/string/string/checkout-key/string?circle-token=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /project/{username}/{project}/checkout-key/{fingerprint}`

Delete a checkout key.


<h3 id="deleteprojectusernameprojectcheckout-keyfingerprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|fingerprint|path|string|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "message": "OK"
}
```

<h3 id="deleteprojectusernameprojectcheckout-keyfingerprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status message|Inline|

<h3 id="deleteprojectusernameprojectcheckout-keyfingerprint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|OK|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/envvar

> Code samples

```bash
curl "https://example.com/project/string/string/envvar?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/envvar`

Lists the environment variables for :project


<h3 id="getprojectusernameprojectenvvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getprojectusernameprojectenvvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|XXX|[Envvars](#schemaenvvars)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/envvar

> Code samples

```bash
curl "https://example.com/project/string/string/envvar?circle-token=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /project/{username}/{project}/envvar`

Creates a new environment variable


<h3 id="postprojectusernameprojectenvvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="postprojectusernameprojectenvvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|XXX|[Envvar](#schemaenvvar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/envvar/{name}

> Code samples

```bash
curl "https://example.com/project/string/string/envvar/string?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/envvar/{name}`

Gets the hidden value of environment variable :name


<h3 id="getprojectusernameprojectenvvarname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|name|path|string|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="getprojectusernameprojectenvvarname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|XXX|[Envvar](#schemaenvvar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## delete/project/{username}/{project}/envvar/{name}

> Code samples

```bash
curl "https://example.com/project/string/string/envvar/string?circle-token=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /project/{username}/{project}/envvar/{name}`

Deletes the environment variable named ':name'


<h3 id="deleteprojectusernameprojectenvvarname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|name|path|string|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "message": "OK"
}
```

<h3 id="deleteprojectusernameprojectenvvarname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletes the environment variable named ':name'<br>|Inline|

<h3 id="deleteprojectusernameprojectenvvarname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|OK|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/ssh-key

> Code samples

```bash
curl "https://example.com/project/string/string/ssh-key?circle-token=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "hostname": "string",
    "private_key": "string"
  }'
```

`POST /project/{username}/{project}/ssh-key`

Create an ssh key used to access external systems that require SSH key-based authentication


> Body parameter

```json
{
  "hostname": "string",
  "private_key": "string"
}
```

<h3 id="postprojectusernameprojectssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|body|body|object|true|none|
|» hostname|body|string|false|none|
|» private_key|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|

> Example responses

> default Response

```json
{
  "message": "a private key is required"
}
```

<h3 id="postprojectusernameprojectssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|no response expected|Inline|

<h3 id="postprojectusernameprojectssh-key-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/tree/{branch}

> Code samples

```bash
curl "https://example.com/project/string/string/tree/string?circle-token=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "build_parameters": {},
    "parallel": "string",
    "revision": "string"
  }'
```

`POST /project/{username}/{project}/tree/{branch}`

Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)


> Body parameter

```json
{
  "build_parameters": {},
  "parallel": "string",
  "revision": "string"
}
```

<h3 id="postprojectusernameprojecttreebranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|branch|path|string|true|The branch name should be url-encoded.<br>|
|body|body|object|false|none|
|» build_parameters|body|[BuildParameters](#schemabuildparameters)|false|Additional environment variables to inject into the build environment. A map of names to values.<br>|
|» parallel|body|[Parallel](#schemaparallel)|false|The number of containers to use to run the build. Default is null and the project default is used.<br>|
|» revision|body|[Revision](#schemarevision)|false|The specific revision to build.<br>Default is null and the head of the branch is used. Cannot be used with tag parameter.<br>|

> Example responses

> 201 Response

```json
{
  "body": "string",
  "branch": "string",
  "build_time_millis": 0,
  "build_url": "http://example.com",
  "committer_email": "user@example.com",
  "committer_name": "string",
  "dont_build": "string",
  "lifecycle": "queued",
  "previous": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "queued_at": "1970-01-01T00:00:00Z",
  "reponame": "string",
  "retry_of": 0,
  "start_time": "1970-01-01T00:00:00Z",
  "stop_time": "1970-01-01T00:00:00Z",
  "subject": "string",
  "username": "string",
  "vcs_url": "http://example.com",
  "why": "string"
}
```

<h3 id="postprojectusernameprojecttreebranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns a summary of the build|[Build](#schemabuild)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|uri|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/{build_num}

> Code samples

```bash
curl "https://example.com/project/string/string/0?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/{build_num}`

Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.


<h3 id="getprojectusernameprojectbuildnum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|build_num|path|integer|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "all_commit_details": [
    {
      "author_date": "1970-01-01T00:00:00Z",
      "author_email": "user@example.com",
      "author_login": "string",
      "author_name": "string",
      "body": "string",
      "commit": "string",
      "commit_url": "http://example.com",
      "committer_date": "1970-01-01T00:00:00Z",
      "committer_email": "user@example.com",
      "committer_login": "string",
      "committer_name": "string",
      "subject": "string"
    }
  ],
  "compare": "http://example.com",
  "job_name": "string",
  "node": null,
  "previous_successful_build": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "retries": true,
  "ssh_enabled": true,
  "timedout": true,
  "usage_queued_at": "1970-01-01T00:00:00Z",
  "user": {
    "admin": true,
    "all_emails": [
      "user@example.com"
    ],
    "analytics_id": "string",
    "avatar_url": "http://example.com",
    "basic_email_prefs": "string",
    "bitbucket": 0,
    "bitbucket_authorized": true,
    "containers": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "days_left_in_trial": 0,
    "dev_admin": true,
    "enrolled_betas": [
      "string"
    ],
    "github_id": 0,
    "github_oauth_scopes": [
      "string"
    ],
    "gravatar_id": 0,
    "heroku_api_key": "string",
    "in_beta_program": true,
    "login": "string",
    "name": "string",
    "organization_prefs": {},
    "parallelism": 0,
    "plan": "string",
    "projects": {},
    "pusher_id": "string",
    "selected_email": "user@example.com",
    "sign_in_count": 0,
    "trial_end": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="getprojectusernameprojectbuildnum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Full details for a single build|[BuildDetail](#schemabuilddetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/{build_num}/artifacts

> Code samples

```bash
curl "https://example.com/project/string/string/0/artifacts?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/{build_num}/artifacts`

List the artifacts produced by a given build.


<h3 id="getprojectusernameprojectbuildnumartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|build_num|path|integer|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
[
  {
    "node_index": 0,
    "path": "string",
    "pretty_path": "string",
    "url": "string"
  }
]
```

<h3 id="getprojectusernameprojectbuildnumartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List the artifacts produced by a given build|[Artifacts](#schemaartifacts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/{build_num}/cancel

> Code samples

```bash
curl "https://example.com/project/string/string/0/cancel?circle-token=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /project/{username}/{project}/{build_num}/cancel`

Cancels the build, returns a summary of the build.


<h3 id="postprojectusernameprojectbuildnumcancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|build_num|path|integer|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "body": "string",
  "branch": "string",
  "build_time_millis": 0,
  "build_url": "http://example.com",
  "committer_email": "user@example.com",
  "committer_name": "string",
  "dont_build": "string",
  "lifecycle": "queued",
  "previous": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "queued_at": "1970-01-01T00:00:00Z",
  "reponame": "string",
  "retry_of": 0,
  "start_time": "1970-01-01T00:00:00Z",
  "stop_time": "1970-01-01T00:00:00Z",
  "subject": "string",
  "username": "string",
  "vcs_url": "http://example.com",
  "why": "string"
}
```

<h3 id="postprojectusernameprojectbuildnumcancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns a summary of the build|[Build](#schemabuild)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/project/{username}/{project}/{build_num}/retry

> Code samples

```bash
curl "https://example.com/project/string/string/0/retry?circle-token=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /project/{username}/{project}/{build_num}/retry`

Retries the build, returns a summary of the new build.


<h3 id="postprojectusernameprojectbuildnumretry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|build_num|path|integer|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "body": "string",
  "branch": "string",
  "build_time_millis": 0,
  "build_url": "http://example.com",
  "committer_email": "user@example.com",
  "committer_name": "string",
  "dont_build": "string",
  "lifecycle": "queued",
  "previous": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "queued_at": "1970-01-01T00:00:00Z",
  "reponame": "string",
  "retry_of": 0,
  "start_time": "1970-01-01T00:00:00Z",
  "stop_time": "1970-01-01T00:00:00Z",
  "subject": "string",
  "username": "string",
  "vcs_url": "http://example.com",
  "why": "string"
}
```

<h3 id="postprojectusernameprojectbuildnumretry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns a summary of the new build|[Build](#schemabuild)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/project/{username}/{project}/{build_num}/tests

> Code samples

```bash
curl "https://example.com/project/string/string/0/tests?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /project/{username}/{project}/{build_num}/tests`

Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)


<h3 id="getprojectusernameprojectbuildnumtests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|XXXXXXXXX<br>|
|project|path|string|true|XXXXXXXXX<br>|
|build_num|path|integer|true|XXXXXXXXXX<br>|

> Example responses

> 200 Response

```json
{
  "tests": [
    {
      "classname": "string",
      "file": "string",
      "message": "string",
      "name": "string",
      "result": "retried",
      "run_time": 0,
      "source": "string"
    }
  ]
}
```

<h3 id="getprojectusernameprojectbuildnumtests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|test metadata for a build<br>|[Tests](#schematests)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/projects

> Code samples

```bash
curl "https://example.com/projects?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /projects`

List of all the projects you're following on CircleCI, with build information organized by branch.


> Example responses

> 200 Response

```json
[
  {
    "aws": {
      "keypair": "string"
    },
    "branches": {},
    "campfire_notify_prefs": "string",
    "campfire_room": "string",
    "campfire_subdomain": "string",
    "campfire_token": "string",
    "compile": "string",
    "default_branch": "string",
    "dependencies": "string",
    "extra": "string",
    "feature_flags": {
      "build-fork-prs": true,
      "fleet": true,
      "junit": true,
      "oss": true,
      "osx": true,
      "set-github-status": true,
      "trusty-beta": true
    },
    "flowdock_api_token": "string",
    "followed": true,
    "has_usable_key": true,
    "heroku_deploy_user": "string",
    "hipchat_api_token": "string",
    "hipchat_notify": "string",
    "hipchat_notify_prefs": "string",
    "hipchat_room": "string",
    "irc_channel": "string",
    "irc_keyword": "string",
    "irc_notify_prefs": "string",
    "irc_password": "string",
    "irc_server": "string",
    "irc_username": "string",
    "language": "string",
    "oss": true,
    "parallel": 0,
    "reponame": "string",
    "scopes": [
      "write-settings"
    ],
    "setup": "string",
    "slack_api_token": "string",
    "slack_channel": "string",
    "slack_channel_override": "string",
    "slack_notify_prefs": "string",
    "slack_subdomain": "string",
    "slack_webhook_url": "http://example.com",
    "ssh_keys": [
      "string"
    ],
    "test": "string",
    "username": "string",
    "vcs_type": "string",
    "vcs_url": "http://example.com"
  }
]
```

<h3 id="getprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all the projects you're following on CircleCI<br>|[Projects](#schemaprojects)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/recent-builds

> Code samples

```bash
curl "https://example.com/recent-builds?circle-token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /recent-builds`

Build summary for each of the last 30 recent builds, ordered by build_num.


<h3 id="getrecent-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of builds to return. Maximum 100, defaults to 30.<br>|
|offset|query|integer|false|The API returns builds starting from this offset, defaults to 0.<br>|

> Example responses

> 200 Response

```json
[
  {
    "body": "string",
    "branch": "string",
    "build_time_millis": 0,
    "build_url": "http://example.com",
    "committer_email": "user@example.com",
    "committer_name": "string",
    "dont_build": "string",
    "lifecycle": "queued",
    "previous": {
      "build_num": 0,
      "build_time_millis": 0,
      "status": "retried"
    },
    "queued_at": "1970-01-01T00:00:00Z",
    "reponame": "string",
    "retry_of": 0,
    "start_time": "1970-01-01T00:00:00Z",
    "stop_time": "1970-01-01T00:00:00Z",
    "subject": "string",
    "username": "string",
    "vcs_url": "http://example.com",
    "why": "string"
  }
]
```

<h3 id="getrecent-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Build summary for each of the last 30 recent builds|[Builds](#schemabuilds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## post/user/heroku-key

> Code samples

```bash
curl "https://example.com/user/heroku-key?circle-token=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /user/heroku-key`

Adds your Heroku API key to CircleCI, takes apikey as form param name.


> Example responses

> 403 Response

```json
{
  "message": "string"
}
```

<h3 id="postuserheroku-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Your Heroku API key is invalid.<br>|Inline|

<h3 id="postuserheroku-key-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "node_index": 0,
  "path": "string",
  "pretty_path": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|node_index|integer|false|none|none|
|path|string|false|none|none|
|pretty_path|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Artifacts">Artifacts</h2>
<!-- backwards compatibility -->
<a id="schemaartifacts"></a>
<a id="schema_Artifacts"></a>
<a id="tocSartifacts"></a>
<a id="tocsartifacts"></a>

```json
[
  {
    "node_index": 0,
    "path": "string",
    "pretty_path": "string",
    "url": "string"
  }
]
```

<h2 id="tocS_Aws">Aws</h2>
<!-- backwards compatibility -->
<a id="schemaaws"></a>
<a id="schema_Aws"></a>
<a id="tocSaws"></a>
<a id="tocsaws"></a>

```json
{
  "keypair": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keypair|string \| null|false|none|none|

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "body": "string",
  "branch": "string",
  "build_time_millis": 0,
  "build_url": "http://example.com",
  "committer_email": "user@example.com",
  "committer_name": "string",
  "dont_build": "string",
  "lifecycle": "queued",
  "previous": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "queued_at": "1970-01-01T00:00:00Z",
  "reponame": "string",
  "retry_of": 0,
  "start_time": "1970-01-01T00:00:00Z",
  "stop_time": "1970-01-01T00:00:00Z",
  "subject": "string",
  "username": "string",
  "vcs_url": "http://example.com",
  "why": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|commit message body|
|branch|string|false|none|none|
|build_time_millis|integer|false|none|none|
|build_url|string(uri)|false|none|none|
|committer_email|string(email)|false|none|none|
|committer_name|string|false|none|none|
|dont_build|string \| null|false|none|reason why we didn't build, if we didn't build|
|lifecycle|[Lifecycle](#schemalifecycle)|false|none|none|
|previous|[PreviousBuild](#schemapreviousbuild)|false|none|previous build|
|queued_at|string(date-time)|false|none|time build was queued|
|reponame|string|false|none|none|
|retry_of|integer \| null|false|none|build_num of the build this is a retry of|
|start_time|string(date-time)|false|none|time build started|
|stop_time|string(date-time)|false|none|time build finished|
|subject|string|false|none|none|
|username|string|false|none|none|
|vcs_url|string(uri)|false|none|none|
|why|string|false|none|short string explaining the reason we built|

#### Enumerated Values

|Property|Value|
|---|---|
|lifecycle|queued|
|lifecycle|scheduled|
|lifecycle|not_run|
|lifecycle|not_running|
|lifecycle|running|
|lifecycle|finished|

<h2 id="tocS_BuildDetail">BuildDetail</h2>
<!-- backwards compatibility -->
<a id="schemabuilddetail"></a>
<a id="schema_BuildDetail"></a>
<a id="tocSbuilddetail"></a>
<a id="tocsbuilddetail"></a>

```json
{
  "all_commit_details": [
    {
      "author_date": "1970-01-01T00:00:00Z",
      "author_email": "user@example.com",
      "author_login": "string",
      "author_name": "string",
      "body": "string",
      "commit": "string",
      "commit_url": "http://example.com",
      "committer_date": "1970-01-01T00:00:00Z",
      "committer_email": "user@example.com",
      "committer_login": "string",
      "committer_name": "string",
      "subject": "string"
    }
  ],
  "compare": "http://example.com",
  "job_name": "string",
  "node": null,
  "previous_successful_build": {
    "build_num": 0,
    "build_time_millis": 0,
    "status": "retried"
  },
  "retries": true,
  "ssh_enabled": true,
  "timedout": true,
  "usage_queued_at": "1970-01-01T00:00:00Z",
  "user": {
    "admin": true,
    "all_emails": [
      "user@example.com"
    ],
    "analytics_id": "string",
    "avatar_url": "http://example.com",
    "basic_email_prefs": "string",
    "bitbucket": 0,
    "bitbucket_authorized": true,
    "containers": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "days_left_in_trial": 0,
    "dev_admin": true,
    "enrolled_betas": [
      "string"
    ],
    "github_id": 0,
    "github_oauth_scopes": [
      "string"
    ],
    "gravatar_id": 0,
    "heroku_api_key": "string",
    "in_beta_program": true,
    "login": "string",
    "name": "string",
    "organization_prefs": {},
    "parallelism": 0,
    "plan": "string",
    "projects": {},
    "pusher_id": "string",
    "selected_email": "user@example.com",
    "sign_in_count": 0,
    "trial_end": "1970-01-01T00:00:00Z"
  }
}
```

previous build

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all_commit_details|[CommitDetails](#schemacommitdetails)|false|none|none|
|compare|string(uri) \| null|false|none|none|
|job_name|string|false|none|none|
|node|object \| null|false|none|none|
|previous_successful_build|[PreviousBuild](#schemapreviousbuild)|false|none|previous build|
|retries|boolean \| null|false|none|none|
|ssh_enabled|boolean \| null|false|none|none|
|timedout|boolean \| null|false|none|none|
|usage_queued_at|string(date-time)|false|none|none|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_BuildParameters">BuildParameters</h2>
<!-- backwards compatibility -->
<a id="schemabuildparameters"></a>
<a id="schema_BuildParameters"></a>
<a id="tocSbuildparameters"></a>
<a id="tocsbuildparameters"></a>

```json
{}
```

Additional environment variables to inject into the build environment. A map of names to values.

<h2 id="tocS_BuildSummary">BuildSummary</h2>
<!-- backwards compatibility -->
<a id="schemabuildsummary"></a>
<a id="schema_BuildSummary"></a>
<a id="tocSbuildsummary"></a>
<a id="tocsbuildsummary"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "build_num": 0,
  "outcome": "canceled",
  "pushed_at": "1970-01-01T00:00:00Z",
  "status": "retried",
  "vcs_revision": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|none|
|build_num|integer|false|none|none|
|outcome|[Outcome](#schemaoutcome)|false|none|none|
|pushed_at|string(date-time)|false|none|none|
|status|[Status](#schemastatus)|false|none|none|
|vcs_revision|[Sha1](#schemasha1)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome|canceled|
|outcome|infrastructure_fail|
|outcome|timedout|
|outcome|failed|
|outcome|no_tests|
|outcome|success|
|status|retried|
|status|canceled|
|status|infrastructure_fail|
|status|timedout|
|status|not_run|
|status|running|
|status|failed|
|status|queued|
|status|scheduled|
|status|not_running|
|status|no_tests|
|status|fixed|
|status|success|

<h2 id="tocS_Builds">Builds</h2>
<!-- backwards compatibility -->
<a id="schemabuilds"></a>
<a id="schema_Builds"></a>
<a id="tocSbuilds"></a>
<a id="tocsbuilds"></a>

```json
[
  {
    "body": "string",
    "branch": "string",
    "build_time_millis": 0,
    "build_url": "http://example.com",
    "committer_email": "user@example.com",
    "committer_name": "string",
    "dont_build": "string",
    "lifecycle": "queued",
    "previous": {
      "build_num": 0,
      "build_time_millis": 0,
      "status": "retried"
    },
    "queued_at": "1970-01-01T00:00:00Z",
    "reponame": "string",
    "retry_of": 0,
    "start_time": "1970-01-01T00:00:00Z",
    "stop_time": "1970-01-01T00:00:00Z",
    "subject": "string",
    "username": "string",
    "vcs_url": "http://example.com",
    "why": "string"
  }
]
```

<h2 id="tocS_CommitDetail">CommitDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommitdetail"></a>
<a id="schema_CommitDetail"></a>
<a id="tocScommitdetail"></a>
<a id="tocscommitdetail"></a>

```json
{
  "author_date": "1970-01-01T00:00:00Z",
  "author_email": "user@example.com",
  "author_login": "string",
  "author_name": "string",
  "body": "string",
  "commit": "string",
  "commit_url": "http://example.com",
  "committer_date": "1970-01-01T00:00:00Z",
  "committer_email": "user@example.com",
  "committer_login": "string",
  "committer_name": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author_date|string(date-time)|false|none|none|
|author_email|string(email)|false|none|none|
|author_login|string|false|none|none|
|author_name|string|false|none|none|
|body|string|false|none|none|
|commit|[Sha1](#schemasha1)|false|none|none|
|commit_url|string(uri)|false|none|none|
|committer_date|string(date-time)|false|none|none|
|committer_email|string(email)|false|none|none|
|committer_login|string|false|none|none|
|committer_name|string|false|none|none|
|subject|string|false|none|none|

<h2 id="tocS_CommitDetails">CommitDetails</h2>
<!-- backwards compatibility -->
<a id="schemacommitdetails"></a>
<a id="schema_CommitDetails"></a>
<a id="tocScommitdetails"></a>
<a id="tocscommitdetails"></a>

```json
[
  {
    "author_date": "1970-01-01T00:00:00Z",
    "author_email": "user@example.com",
    "author_login": "string",
    "author_name": "string",
    "body": "string",
    "commit": "string",
    "commit_url": "http://example.com",
    "committer_date": "1970-01-01T00:00:00Z",
    "committer_email": "user@example.com",
    "committer_login": "string",
    "committer_name": "string",
    "subject": "string"
  }
]
```

<h2 id="tocS_Envvar">Envvar</h2>
<!-- backwards compatibility -->
<a id="schemaenvvar"></a>
<a id="schema_Envvar"></a>
<a id="tocSenvvar"></a>
<a id="tocsenvvar"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Envvars">Envvars</h2>
<!-- backwards compatibility -->
<a id="schemaenvvars"></a>
<a id="schema_Envvars"></a>
<a id="tocSenvvars"></a>
<a id="tocsenvvars"></a>

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "fingerprint": "string",
  "preferred": true,
  "public_key": "string",
  "time": "1970-01-01T00:00:00Z",
  "type": "deploy-key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string|false|none|none|
|preferred|boolean|false|none|none|
|public_key|string|false|none|none|
|time|string(date-time)|false|none|when the key was issued|
|type|string|false|none|can be "deploy-key" or "github-user-key"<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|deploy-key|
|type|github-user-key|

<h2 id="tocS_Keys">Keys</h2>
<!-- backwards compatibility -->
<a id="schemakeys"></a>
<a id="schema_Keys"></a>
<a id="tocSkeys"></a>
<a id="tocskeys"></a>

```json
[
  {
    "fingerprint": "string",
    "preferred": true,
    "public_key": "string",
    "time": "1970-01-01T00:00:00Z",
    "type": "deploy-key"
  }
]
```

<h2 id="tocS_Lifecycle">Lifecycle</h2>
<!-- backwards compatibility -->
<a id="schemalifecycle"></a>
<a id="schema_Lifecycle"></a>
<a id="tocSlifecycle"></a>
<a id="tocslifecycle"></a>

```json
"queued"
```

<h2 id="tocS_Outcome">Outcome</h2>
<!-- backwards compatibility -->
<a id="schemaoutcome"></a>
<a id="schema_Outcome"></a>
<a id="tocSoutcome"></a>
<a id="tocsoutcome"></a>

```json
"canceled"
```

<h2 id="tocS_Parallel">Parallel</h2>
<!-- backwards compatibility -->
<a id="schemaparallel"></a>
<a id="schema_Parallel"></a>
<a id="tocSparallel"></a>
<a id="tocsparallel"></a>

```json
"string"
```

The number of containers to use to run the build. Default is null and the project default is used.

<h2 id="tocS_PreviousBuild">PreviousBuild</h2>
<!-- backwards compatibility -->
<a id="schemapreviousbuild"></a>
<a id="schema_PreviousBuild"></a>
<a id="tocSpreviousbuild"></a>
<a id="tocspreviousbuild"></a>

```json
{
  "build_num": 0,
  "build_time_millis": 0,
  "status": "retried"
}
```

previous build

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build_num|integer|false|none|none|
|build_time_millis|integer|false|none|none|
|status|[Status](#schemastatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|retried|
|status|canceled|
|status|infrastructure_fail|
|status|timedout|
|status|not_run|
|status|running|
|status|failed|
|status|queued|
|status|scheduled|
|status|not_running|
|status|no_tests|
|status|fixed|
|status|success|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "aws": {
    "keypair": "string"
  },
  "branches": {},
  "campfire_notify_prefs": "string",
  "campfire_room": "string",
  "campfire_subdomain": "string",
  "campfire_token": "string",
  "compile": "string",
  "default_branch": "string",
  "dependencies": "string",
  "extra": "string",
  "feature_flags": {
    "build-fork-prs": true,
    "fleet": true,
    "junit": true,
    "oss": true,
    "osx": true,
    "set-github-status": true,
    "trusty-beta": true
  },
  "flowdock_api_token": "string",
  "followed": true,
  "has_usable_key": true,
  "heroku_deploy_user": "string",
  "hipchat_api_token": "string",
  "hipchat_notify": "string",
  "hipchat_notify_prefs": "string",
  "hipchat_room": "string",
  "irc_channel": "string",
  "irc_keyword": "string",
  "irc_notify_prefs": "string",
  "irc_password": "string",
  "irc_server": "string",
  "irc_username": "string",
  "language": "string",
  "oss": true,
  "parallel": 0,
  "reponame": "string",
  "scopes": [
    "write-settings"
  ],
  "setup": "string",
  "slack_api_token": "string",
  "slack_channel": "string",
  "slack_channel_override": "string",
  "slack_notify_prefs": "string",
  "slack_subdomain": "string",
  "slack_webhook_url": "http://example.com",
  "ssh_keys": [
    "string"
  ],
  "test": "string",
  "username": "string",
  "vcs_type": "string",
  "vcs_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aws|[Aws](#schemaaws)|false|none|none|
|branches|object|false|none|none|
|campfire_notify_prefs|[StringOrNull](#schemastringornull)|false|none|none|
|campfire_room|[StringOrNull](#schemastringornull)|false|none|none|
|campfire_subdomain|[StringOrNull](#schemastringornull)|false|none|none|
|campfire_token|[StringOrNull](#schemastringornull)|false|none|none|
|compile|string|false|none|none|
|default_branch|string|false|none|none|
|dependencies|string|false|none|none|
|extra|string|false|none|none|
|feature_flags|object|false|none|none|
|flowdock_api_token|[StringOrNull](#schemastringornull)|false|none|none|
|followed|boolean|false|none|none|
|has_usable_key|boolean|false|none|none|
|heroku_deploy_user|[StringOrNull](#schemastringornull)|false|none|none|
|hipchat_api_token|[StringOrNull](#schemastringornull)|false|none|none|
|hipchat_notify|[StringOrNull](#schemastringornull)|false|none|none|
|hipchat_notify_prefs|string \| null|false|none|none|
|hipchat_room|[StringOrNull](#schemastringornull)|false|none|none|
|irc_channel|[StringOrNull](#schemastringornull)|false|none|none|
|irc_keyword|[StringOrNull](#schemastringornull)|false|none|none|
|irc_notify_prefs|[StringOrNull](#schemastringornull)|false|none|none|
|irc_password|[StringOrNull](#schemastringornull)|false|none|none|
|irc_server|[StringOrNull](#schemastringornull)|false|none|none|
|irc_username|[StringOrNull](#schemastringornull)|false|none|none|
|language|string|false|none|none|
|oss|boolean|false|none|none|
|parallel|integer|false|none|none|
|reponame|string|false|none|none|
|scopes|[[Scope](#schemascope)]|false|none|none|
|setup|string|false|none|none|
|slack_api_token|[StringOrNull](#schemastringornull)|false|none|none|
|slack_channel|[StringOrNull](#schemastringornull)|false|none|none|
|slack_channel_override|[StringOrNull](#schemastringornull)|false|none|none|
|slack_notify_prefs|[StringOrNull](#schemastringornull)|false|none|none|
|slack_subdomain|[StringOrNull](#schemastringornull)|false|none|none|
|slack_webhook_url|string(uri)|false|none|none|
|ssh_keys|[string]|false|none|none|
|test|string|false|none|none|
|username|string|false|none|none|
|vcs_type|string|false|none|none|
|vcs_url|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scopes|write-settings|
|scopes|view-builds|
|scopes|read-settings|
|scopes|trigger-builds|
|scopes|all|
|scopes|status|
|scopes|none|

<h2 id="tocS_Projects">Projects</h2>
<!-- backwards compatibility -->
<a id="schemaprojects"></a>
<a id="schema_Projects"></a>
<a id="tocSprojects"></a>
<a id="tocsprojects"></a>

```json
[
  {
    "aws": {
      "keypair": "string"
    },
    "branches": {},
    "campfire_notify_prefs": "string",
    "campfire_room": "string",
    "campfire_subdomain": "string",
    "campfire_token": "string",
    "compile": "string",
    "default_branch": "string",
    "dependencies": "string",
    "extra": "string",
    "feature_flags": {
      "build-fork-prs": true,
      "fleet": true,
      "junit": true,
      "oss": true,
      "osx": true,
      "set-github-status": true,
      "trusty-beta": true
    },
    "flowdock_api_token": "string",
    "followed": true,
    "has_usable_key": true,
    "heroku_deploy_user": "string",
    "hipchat_api_token": "string",
    "hipchat_notify": "string",
    "hipchat_notify_prefs": "string",
    "hipchat_room": "string",
    "irc_channel": "string",
    "irc_keyword": "string",
    "irc_notify_prefs": "string",
    "irc_password": "string",
    "irc_server": "string",
    "irc_username": "string",
    "language": "string",
    "oss": true,
    "parallel": 0,
    "reponame": "string",
    "scopes": [
      "write-settings"
    ],
    "setup": "string",
    "slack_api_token": "string",
    "slack_channel": "string",
    "slack_channel_override": "string",
    "slack_notify_prefs": "string",
    "slack_subdomain": "string",
    "slack_webhook_url": "http://example.com",
    "ssh_keys": [
      "string"
    ],
    "test": "string",
    "username": "string",
    "vcs_type": "string",
    "vcs_url": "http://example.com"
  }
]
```

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
"string"
```

The specific revision to build.
Default is null and the head of the branch is used. Cannot be used with tag parameter.

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"write-settings"
```

<h2 id="tocS_Sha1">Sha1</h2>
<!-- backwards compatibility -->
<a id="schemasha1"></a>
<a id="schema_Sha1"></a>
<a id="tocSsha1"></a>
<a id="tocssha1"></a>

```json
"string"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"retried"
```

<h2 id="tocS_StringOrNull">StringOrNull</h2>
<!-- backwards compatibility -->
<a id="schemastringornull"></a>
<a id="schema_StringOrNull"></a>
<a id="tocSstringornull"></a>
<a id="tocsstringornull"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
"string"
```

The tag to build. Default is null. Cannot be used with revision parameter.

<h2 id="tocS_Tests">Tests</h2>
<!-- backwards compatibility -->
<a id="schematests"></a>
<a id="schema_Tests"></a>
<a id="tocStests"></a>
<a id="tocstests"></a>

```json
{
  "tests": [
    {
      "classname": "string",
      "file": "string",
      "message": "string",
      "name": "string",
      "result": "retried",
      "run_time": 0,
      "source": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tests|[object]|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "admin": true,
  "all_emails": [
    "user@example.com"
  ],
  "analytics_id": "string",
  "avatar_url": "http://example.com",
  "basic_email_prefs": "string",
  "bitbucket": 0,
  "bitbucket_authorized": true,
  "containers": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "days_left_in_trial": 0,
  "dev_admin": true,
  "enrolled_betas": [
    "string"
  ],
  "github_id": 0,
  "github_oauth_scopes": [
    "string"
  ],
  "gravatar_id": 0,
  "heroku_api_key": "string",
  "in_beta_program": true,
  "login": "string",
  "name": "string",
  "organization_prefs": {},
  "parallelism": 0,
  "plan": "string",
  "projects": {},
  "pusher_id": "string",
  "selected_email": "user@example.com",
  "sign_in_count": 0,
  "trial_end": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|none|
|all_emails|[string(email)]|false|none|none|
|analytics_id|string|false|none|none|
|avatar_url|string(uri)|false|none|none|
|basic_email_prefs|string|false|none|none|
|bitbucket|integer \| null|false|none|none|
|bitbucket_authorized|boolean|false|none|none|
|containers|integer|false|none|none|
|created_at|string(date-time)|false|none|none|
|days_left_in_trial|integer|false|none|none|
|dev_admin|boolean|false|none|none|
|enrolled_betas|[string]|false|none|none|
|github_id|integer \| null|false|none|none|
|github_oauth_scopes|[string]|false|none|none|
|gravatar_id|integer \| null|false|none|none|
|heroku_api_key|string \| null|false|none|none|
|in_beta_program|boolean|false|none|none|
|login|string|false|none|none|
|name|string|false|none|none|
|organization_prefs|object|false|none|none|
|parallelism|integer|false|none|none|
|plan|string \| null|false|none|none|
|projects|object|false|none|none|
|pusher_id|string|false|none|none|
|selected_email|string(email)|false|none|none|
|sign_in_count|integer|false|none|none|
|trial_end|string(date-time)|false|none|none|
