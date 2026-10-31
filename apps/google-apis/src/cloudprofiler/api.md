<h1 id="cloud-profiler-api">Cloud Profiler API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages continuous profiling information.

Base URLs:

* <a href="https://cloudprofiler.googleapis.com/">https://cloudprofiler.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/profiler/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/monitoring|View and write monitoring data for all of your Google and third-party Cloud and API projects|
|https://www.googleapis.com/auth/monitoring.write|Publish metric data to your Google Cloud projects|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/monitoring|View and write monitoring data for all of your Google and third-party Cloud and API projects|
|https://www.googleapis.com/auth/monitoring.write|Publish metric data to your Google Cloud projects|

<h1 id="cloud-profiler-api-projects">projects</h1>

## cloudprofiler.projects.profiles.patch

<a id="opIdcloudprofiler.projects.profiles.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deployment": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "projectId": "string",
      "target": "string"
    },
    "duration": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "profileBytes": "string",
    "profileType": "PROFILE_TYPE_UNSPECIFIED"
  }'
```

`PATCH /v2/{name}`

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

> Body parameter

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

<h3 id="cloudprofilerprojectsprofilespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Opaque, server-assigned, unique ID for this profile.|
|updateMask|query|string|false|Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.|
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
|body|body|[Profile](#schemaprofile)|false|none|
|» deployment|body|[Deployment](#schemadeployment)|false|Deployment this profile corresponds to.|
|» duration|body|string(google-duration)|false|Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).|
|» labels|body|object|false|Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.|
|» » **additionalProperties**|body|string|false|none|
|» profileBytes|body|string(byte)|false|Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.|
|» profileType|body|string|false|Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» profileType|PROFILE_TYPE_UNSPECIFIED|
|» profileType|CPU|
|» profileType|WALL|
|» profileType|HEAP|
|» profileType|THREADS|
|» profileType|CONTENTION|
|» profileType|PEAK_HEAP|
|» profileType|HEAP_ALLOC|

> Example responses

> 200 Response

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

<h3 id="cloudprofilerprojectsprofilespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring.write )
</aside>

## cloudprofiler.projects.profiles.create

<a id="opIdcloudprofiler.projects.profiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deployment": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "projectId": "string",
      "target": "string"
    },
    "profileType": [
      "PROFILE_TYPE_UNSPECIFIED"
    ]
  }'
```

`POST /v2/{parent}/profiles`

CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 

> Body parameter

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "profileType": [
    "PROFILE_TYPE_UNSPECIFIED"
  ]
}
```

<h3 id="cloudprofilerprojectsprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent project to create the profile in.|
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
|body|body|[CreateProfileRequest](#schemacreateprofilerequest)|false|none|
|» deployment|body|[Deployment](#schemadeployment)|false|Deployment details.|
|» profileType|body|[string]|false|One or more profile types that the agent is capable of providing.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» profileType|PROFILE_TYPE_UNSPECIFIED|
|» profileType|CPU|
|» profileType|WALL|
|» profileType|HEAP|
|» profileType|THREADS|
|» profileType|CONTENTION|
|» profileType|PEAK_HEAP|
|» profileType|HEAP_ALLOC|

> Example responses

> 200 Response

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

<h3 id="cloudprofilerprojectsprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring.write )
</aside>

## cloudprofiler.projects.profiles.createOffline

<a id="opIdcloudprofiler.projects.profiles.createOffline"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/profiles:createOffline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deployment": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "projectId": "string",
      "target": "string"
    },
    "duration": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "profileBytes": "string",
    "profileType": "PROFILE_TYPE_UNSPECIFIED"
  }'
```

`POST /v2/{parent}/profiles:createOffline`

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

> Body parameter

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

<h3 id="cloudprofilerprojectsprofilescreateoffline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent project to create the profile in.|
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
|body|body|[Profile](#schemaprofile)|false|none|
|» deployment|body|[Deployment](#schemadeployment)|false|Deployment this profile corresponds to.|
|» duration|body|string(google-duration)|false|Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).|
|» labels|body|object|false|Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.|
|» » **additionalProperties**|body|string|false|none|
|» profileBytes|body|string(byte)|false|Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.|
|» profileType|body|string|false|Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» profileType|PROFILE_TYPE_UNSPECIFIED|
|» profileType|CPU|
|» profileType|WALL|
|» profileType|HEAP|
|» profileType|THREADS|
|» profileType|CONTENTION|
|» profileType|PEAK_HEAP|
|» profileType|HEAP_ALLOC|

> Example responses

> 200 Response

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

<h3 id="cloudprofilerprojectsprofilescreateoffline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring ), Oauth2 ( Scopes: https://www.googleapis.com/auth/monitoring.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/monitoring.write )
</aside>

# Schemas

<h2 id="tocS_CreateProfileRequest">CreateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilerequest"></a>
<a id="schema_CreateProfileRequest"></a>
<a id="tocScreateprofilerequest"></a>
<a id="tocscreateprofilerequest"></a>

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "profileType": [
    "PROFILE_TYPE_UNSPECIFIED"
  ]
}
```

CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|[Deployment](#schemadeployment)|false|none|Deployment details.|
|profileType|[string]|false|none|One or more profile types that the agent is capable of providing.|

#### Enumerated Values

|Property|Value|
|---|---|
|profileType|PROFILE_TYPE_UNSPECIFIED|
|profileType|CPU|
|profileType|WALL|
|profileType|HEAP|
|profileType|THREADS|
|profileType|CONTENTION|
|profileType|PEAK_HEAP|
|profileType|HEAP_ALLOC|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "projectId": "string",
  "target": "string"
}
```

Deployment contains the deployment identification information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central".|
|projectId|string|false|none|Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61}[a-z0-9]$`.|
|target|string|false|none|Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$`.|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "deployment": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "target": "string"
  },
  "duration": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "profileBytes": "string",
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

Profile resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|[Deployment](#schemadeployment)|false|none|Deployment this profile corresponds to.|
|duration|string(google-duration)|false|none|Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).|
|labels|object|false|none|Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.|
|name|string|false|read-only|Output only. Opaque, server-assigned, unique ID for this profile.|
|profileBytes|string(byte)|false|none|Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.|
|profileType|string|false|none|Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|profileType|PROFILE_TYPE_UNSPECIFIED|
|profileType|CPU|
|profileType|WALL|
|profileType|HEAP|
|profileType|THREADS|
|profileType|CONTENTION|
|profileType|PEAK_HEAP|
|profileType|HEAP_ALLOC|
