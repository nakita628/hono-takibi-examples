<h1 id="aws-amplify">AWS Amplify v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>

Base URLs:

* <a href="http://amplify.us-east-1.amazonaws.com">http://amplify.us-east-1.amazonaws.com</a> - The Amplify multi-region endpoint

* <a href="https://amplify.us-east-1.amazonaws.com">https://amplify.us-east-1.amazonaws.com</a> - The Amplify multi-region endpoint

* <a href="http://amplify.cn-north-1.amazonaws.com.cn">http://amplify.cn-north-1.amazonaws.com.cn</a> - The Amplify endpoint for China (Beijing) and China (Ningxia)

* <a href="https://amplify.cn-north-1.amazonaws.com.cn">https://amplify.cn-north-1.amazonaws.com.cn</a> - The Amplify endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/amplify/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-amplify-default">Default</h1>

## ListApps

<a id="opIdListApps"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps`

 Returns a list of the existing Amplify apps. 

<h3 id="listapps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false| A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "apps": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppsResult](#schemalistappsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApp

<a id="opIdCreateApp"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "repository": "string",
    "platform": "WEB",
    "iamServiceRoleArn": "string",
    "oauthToken": "password",
    "accessToken": "password",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableBranchAutoBuild": true,
    "enableBranchAutoDeletion": true,
    "enableBasicAuth": true,
    "basicAuthCredentials": "password",
    "customRules": [
      {
        "source": {},
        "target": {},
        "status": {},
        "condition": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "buildSpec": "password",
    "customHeaders": "string",
    "enableAutoBranchCreation": true,
    "autoBranchCreationPatterns": [
      "string"
    ],
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    }
  }'
```

`POST /apps`

 Creates a new Amplify app. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "repository": "string",
  "platform": "WEB",
  "iamServiceRoleArn": "string",
  "oauthToken": "password",
  "accessToken": "password",
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "enableBranchAutoBuild": true,
  "enableBranchAutoDeletion": true,
  "enableBasicAuth": true,
  "basicAuthCredentials": "password",
  "customRules": [
    {
      "source": {},
      "target": {},
      "status": {},
      "condition": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildSpec": "password",
  "customHeaders": "string",
  "enableAutoBranchCreation": true,
  "autoBranchCreationPatterns": [
    "string"
  ],
  "autoBranchCreationConfig": {
    "stage": {},
    "framework": {},
    "enableAutoBuild": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "buildSpec": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {}
  }
}
```

<h3 id="createapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name for an Amplify app. |
|» description|body|string|false| The description for an Amplify app. |
|» repository|body|string|false| The repository for an Amplify app. |
|» platform|body|string|false| The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.|
|» iamServiceRoleArn|body|string|false| The AWS Identity and Access Management (IAM) service role for an Amplify app. |
|» oauthToken|body|string(password)|false|<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>|
|» accessToken|body|string(password)|false|<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>|
|» environmentVariables|body|object|false| The environment variables map for an Amplify app. |
|» » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» enableBranchAutoBuild|body|boolean|false| Enables the auto building of branches for an Amplify app. |
|» enableBranchAutoDeletion|body|boolean|false| Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. |
|» enableBasicAuth|body|boolean|false| Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. |
|» basicAuthCredentials|body|string(password)|false| The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.|
|» customRules|body|[[CustomRule](#schemacustomrule)]|false| The custom rewrite and redirect rules for an Amplify app. |
|» tags|body|object|false| The tag for an Amplify app. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» buildSpec|body|string(password)|false| The build specification (build spec) file for an Amplify app build. |
|» customHeaders|body|string|false|The custom HTTP headers for an Amplify app.|
|» enableAutoBranchCreation|body|boolean|false| Enables automated branch creation for an Amplify app. |
|» autoBranchCreationPatterns|body|[[AutoBranchCreationPattern](#schemaautobranchcreationpattern)]|false| The automated branch creation glob patterns for an Amplify app. |
|» autoBranchCreationConfig|body|object|false| Describes the automated branch creation configuration. |
|» » stage|body|object|false|none|
|» » framework|body|object|false|none|
|» » enableAutoBuild|body|object|false|none|
|» » environmentVariables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» » basicAuthCredentials|body|object|false|none|
|» » enableBasicAuth|body|object|false|none|
|» » enablePerformanceMode|body|object|false|none|
|» » buildSpec|body|object|false|none|
|» » enablePullRequestPreview|body|object|false|none|
|» » pullRequestEnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» platform|WEB|
|» platform|WEB_DYNAMIC|
|» platform|WEB_COMPUTE|

> Example responses

> 200 Response

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppResult](#schemacreateappresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackendEnvironments

<a id="opIdListBackendEnvironments"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/backendenvironments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/backendenvironments`

 Lists the backend environments for an Amplify app. 

<h3 id="listbackendenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|environmentName|query|string|false| The name of the backend environment |
|nextToken|query|string|false| A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "backendEnvironments": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listbackendenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackendEnvironmentsResult](#schemalistbackendenvironmentsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackendEnvironment

<a id="opIdCreateBackendEnvironment"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/backendenvironments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "environmentName": "string",
    "stackName": "string",
    "deploymentArtifacts": "string"
  }'
```

`POST /apps/{appId}/backendenvironments`

 Creates a new backend environment for an Amplify app. 

> Body parameter

```json
{
  "environmentName": "string",
  "stackName": "string",
  "deploymentArtifacts": "string"
}
```

<h3 id="createbackendenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» environmentName|body|string|true| The name for the backend environment. |
|» stackName|body|string|false| The AWS CloudFormation stack name of a backend environment. |
|» deploymentArtifacts|body|string|false| The name of deployment artifacts. |

> Example responses

> 200 Response

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createbackendenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendEnvironmentResult](#schemacreatebackendenvironmentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBranches

<a id="opIdListBranches"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/branches`

 Lists the branches of an Amplify app. 

<h3 id="listbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|nextToken|query|string|false| A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "branches": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBranchesResult](#schemalistbranchesresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBranch

<a id="opIdCreateBranch"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "branchName": "string",
    "description": "string",
    "stage": "PRODUCTION",
    "framework": "string",
    "enableNotification": true,
    "enableAutoBuild": true,
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": "password",
    "enableBasicAuth": true,
    "enablePerformanceMode": true,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "buildSpec": "password",
    "ttl": "string",
    "displayName": "string",
    "enablePullRequestPreview": true,
    "pullRequestEnvironmentName": "string",
    "backendEnvironmentArn": "string"
  }'
```

`POST /apps/{appId}/branches`

 Creates a new branch for an Amplify app. 

> Body parameter

```json
{
  "branchName": "string",
  "description": "string",
  "stage": "PRODUCTION",
  "framework": "string",
  "enableNotification": true,
  "enableAutoBuild": true,
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "basicAuthCredentials": "password",
  "enableBasicAuth": true,
  "enablePerformanceMode": true,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildSpec": "password",
  "ttl": "string",
  "displayName": "string",
  "enablePullRequestPreview": true,
  "pullRequestEnvironmentName": "string",
  "backendEnvironmentArn": "string"
}
```

<h3 id="createbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» branchName|body|string|true| The name for the branch. |
|» description|body|string|false| The description for the branch. |
|» stage|body|string|false| Describes the current stage for the branch. |
|» framework|body|string|false| The framework for the branch. |
|» enableNotification|body|boolean|false| Enables notifications for the branch. |
|» enableAutoBuild|body|boolean|false| Enables auto building for the branch. |
|» environmentVariables|body|object|false| The environment variables for the branch. |
|» » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» basicAuthCredentials|body|string(password)|false| The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.|
|» enableBasicAuth|body|boolean|false| Enables basic authorization for the branch. |
|» enablePerformanceMode|body|boolean|false|<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>|
|» tags|body|object|false| The tag for the branch. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» buildSpec|body|string(password)|false| The build specification (build spec) file for an Amplify app build. |
|» ttl|body|string|false| The content Time to Live (TTL) for the website in seconds. |
|» displayName|body|string|false| The display name for a branch. This is used as the default domain prefix. |
|» enablePullRequestPreview|body|boolean|false| Enables pull request previews for this branch. |
|» pullRequestEnvironmentName|body|string|false| The Amplify environment name for the pull request. |
|» backendEnvironmentArn|body|string|false| The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» stage|PRODUCTION|
|» stage|BETA|
|» stage|DEVELOPMENT|
|» stage|EXPERIMENTAL|
|» stage|PULL_REQUEST|

> Example responses

> 200 Response

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBranchResult](#schemacreatebranchresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileMap": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /apps/{appId}/branches/{branchName}/deployments`

 Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 

> Body parameter

```json
{
  "fileMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch, for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» fileMap|body|object|false| An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. |
|» » **additionalProperties**|body|[MD5Hash](#schemamd5hash)|false|none|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "fileUploadUrls": {
    "property1": "string",
    "property2": "string"
  },
  "zipUploadUrl": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentResult](#schemacreatedeploymentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomainAssociations

<a id="opIdListDomainAssociations"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/domains`

 Returns the domain associations for an Amplify app. 

<h3 id="listdomainassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|nextToken|query|string|false| A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "domainAssociations": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listdomainassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainAssociationsResult](#schemalistdomainassociationsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomainAssociation

<a id="opIdCreateDomainAssociation"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domainName": "string",
    "enableAutoSubDomain": true,
    "subDomainSettings": [
      {
        "prefix": {},
        "branchName": {}
      }
    ],
    "autoSubDomainCreationPatterns": [
      "string"
    ],
    "autoSubDomainIAMRole": "string"
  }'
```

`POST /apps/{appId}/domains`

 Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 

> Body parameter

```json
{
  "domainName": "string",
  "enableAutoSubDomain": true,
  "subDomainSettings": [
    {
      "prefix": {},
      "branchName": {}
    }
  ],
  "autoSubDomainCreationPatterns": [
    "string"
  ],
  "autoSubDomainIAMRole": "string"
}
```

<h3 id="createdomainassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» domainName|body|string|true| The domain name for the domain association. |
|» enableAutoSubDomain|body|boolean|false| Enables the automated creation of subdomains for branches. |
|» subDomainSettings|body|[[SubDomainSetting](#schemasubdomainsetting)]|true| The setting for the subdomain. |
|» autoSubDomainCreationPatterns|body|[[AutoSubDomainCreationPattern](#schemaautosubdomaincreationpattern)]|false| Sets the branch patterns for automatic subdomain creation. |
|» autoSubDomainIAMRole|body|string|false| The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. |

> Example responses

> 200 Response

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createdomainassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainAssociationResult](#schemacreatedomainassociationresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebhooks

<a id="opIdListWebhooks"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/webhooks`

 Returns a list of webhooks for an Amplify app. 

<h3 id="listwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|nextToken|query|string|false| A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "webhooks": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebhooksResult](#schemalistwebhooksresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebhook

<a id="opIdCreateWebhook"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "branchName": "string",
    "description": "string"
  }'
```

`POST /apps/{appId}/webhooks`

 Creates a new webhook on an Amplify app. 

> Body parameter

```json
{
  "branchName": "string",
  "description": "string"
}
```

<h3 id="createwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» branchName|body|string|true| The name for a branch that is part of an Amplify app. |
|» description|body|string|false| The description for a webhook. |

> Example responses

> 200 Response

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebhookResult](#schemacreatewebhookresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApp

<a id="opIdGetApp"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}`

 Returns an existing Amplify app by appID. 

<h3 id="getapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppResult](#schemagetappresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApp

<a id="opIdUpdateApp"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "platform": "WEB",
    "iamServiceRoleArn": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableBranchAutoBuild": true,
    "enableBranchAutoDeletion": true,
    "enableBasicAuth": true,
    "basicAuthCredentials": "password",
    "customRules": [
      {
        "source": {},
        "target": {},
        "status": {},
        "condition": {}
      }
    ],
    "buildSpec": "password",
    "customHeaders": "string",
    "enableAutoBranchCreation": true,
    "autoBranchCreationPatterns": [
      "string"
    ],
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repository": "string",
    "oauthToken": "password",
    "accessToken": "password"
  }'
```

`POST /apps/{appId}`

 Updates an existing Amplify app. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "platform": "WEB",
  "iamServiceRoleArn": "string",
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "enableBranchAutoBuild": true,
  "enableBranchAutoDeletion": true,
  "enableBasicAuth": true,
  "basicAuthCredentials": "password",
  "customRules": [
    {
      "source": {},
      "target": {},
      "status": {},
      "condition": {}
    }
  ],
  "buildSpec": "password",
  "customHeaders": "string",
  "enableAutoBranchCreation": true,
  "autoBranchCreationPatterns": [
    "string"
  ],
  "autoBranchCreationConfig": {
    "stage": {},
    "framework": {},
    "enableAutoBuild": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "buildSpec": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {}
  },
  "repository": "string",
  "oauthToken": "password",
  "accessToken": "password"
}
```

<h3 id="updateapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false| The name for an Amplify app. |
|» description|body|string|false| The description for an Amplify app. |
|» platform|body|string|false| The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.|
|» iamServiceRoleArn|body|string|false| The AWS Identity and Access Management (IAM) service role for an Amplify app. |
|» environmentVariables|body|object|false| The environment variables for an Amplify app. |
|» » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» enableBranchAutoBuild|body|boolean|false| Enables branch auto-building for an Amplify app. |
|» enableBranchAutoDeletion|body|boolean|false| Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. |
|» enableBasicAuth|body|boolean|false| Enables basic authorization for an Amplify app. |
|» basicAuthCredentials|body|string(password)|false| The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.|
|» customRules|body|[[CustomRule](#schemacustomrule)]|false| The custom redirect and rewrite rules for an Amplify app. |
|» buildSpec|body|string(password)|false| The build specification (build spec) file for an Amplify app build. |
|» customHeaders|body|string|false|The custom HTTP headers for an Amplify app.|
|» enableAutoBranchCreation|body|boolean|false| Enables automated branch creation for an Amplify app. |
|» autoBranchCreationPatterns|body|[[AutoBranchCreationPattern](#schemaautobranchcreationpattern)]|false| Describes the automated branch creation glob patterns for an Amplify app. |
|» autoBranchCreationConfig|body|object|false| Describes the automated branch creation configuration. |
|» » stage|body|object|false|none|
|» » framework|body|object|false|none|
|» » enableAutoBuild|body|object|false|none|
|» » environmentVariables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» » basicAuthCredentials|body|object|false|none|
|» » enableBasicAuth|body|object|false|none|
|» » enablePerformanceMode|body|object|false|none|
|» » buildSpec|body|object|false|none|
|» » enablePullRequestPreview|body|object|false|none|
|» » pullRequestEnvironmentName|body|object|false|none|
|» repository|body|string|false| The name of the repository for an Amplify app |
|» oauthToken|body|string(password)|false|<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>|
|» accessToken|body|string(password)|false|<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» platform|WEB|
|» platform|WEB_DYNAMIC|
|» platform|WEB_COMPUTE|

> Example responses

> 200 Response

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAppResult](#schemaupdateappresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApp

<a id="opIdDeleteApp"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}`

 Deletes an existing Amplify app specified by an app ID. 

<h3 id="deleteapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppResult](#schemadeleteappresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendEnvironment

<a id="opIdGetBackendEnvironment"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/backendenvironments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/backendenvironments/{environmentName}`

 Returns a backend environment for an Amplify app. 

<h3 id="getbackendenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique id for an Amplify app. |
|environmentName|path|string|true| The name for the backend environment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getbackendenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendEnvironmentResult](#schemagetbackendenvironmentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackendEnvironment

<a id="opIdDeleteBackendEnvironment"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/backendenvironments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}/backendenvironments/{environmentName}`

 Deletes a backend environment for an Amplify app. 

<h3 id="deletebackendenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID of an Amplify app. |
|environmentName|path|string|true| The name of a backend environment of an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletebackendenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackendEnvironmentResult](#schemadeletebackendenvironmentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBranch

<a id="opIdGetBranch"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/branches/{branchName}`

 Returns a branch for an Amplify app. 

<h3 id="getbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBranchResult](#schemagetbranchresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBranch

<a id="opIdUpdateBranch"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "framework": "string",
    "stage": "PRODUCTION",
    "enableNotification": true,
    "enableAutoBuild": true,
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": "password",
    "enableBasicAuth": true,
    "enablePerformanceMode": true,
    "buildSpec": "password",
    "ttl": "string",
    "displayName": "string",
    "enablePullRequestPreview": true,
    "pullRequestEnvironmentName": "string",
    "backendEnvironmentArn": "string"
  }'
```

`POST /apps/{appId}/branches/{branchName}`

 Updates a branch for an Amplify app. 

> Body parameter

```json
{
  "description": "string",
  "framework": "string",
  "stage": "PRODUCTION",
  "enableNotification": true,
  "enableAutoBuild": true,
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "basicAuthCredentials": "password",
  "enableBasicAuth": true,
  "enablePerformanceMode": true,
  "buildSpec": "password",
  "ttl": "string",
  "displayName": "string",
  "enablePullRequestPreview": true,
  "pullRequestEnvironmentName": "string",
  "backendEnvironmentArn": "string"
}
```

<h3 id="updatebranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false| The description for the branch. |
|» framework|body|string|false| The framework for the branch. |
|» stage|body|string|false| Describes the current stage for the branch. |
|» enableNotification|body|boolean|false| Enables notifications for the branch. |
|» enableAutoBuild|body|boolean|false| Enables auto building for the branch. |
|» environmentVariables|body|object|false| The environment variables for the branch. |
|» » **additionalProperties**|body|[EnvValue](#schemaenvvalue)|false|none|
|» basicAuthCredentials|body|string(password)|false| The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.|
|» enableBasicAuth|body|boolean|false| Enables basic authorization for the branch. |
|» enablePerformanceMode|body|boolean|false|<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>|
|» buildSpec|body|string(password)|false| The build specification (build spec) file for an Amplify app build. |
|» ttl|body|string|false| The content Time to Live (TTL) for the website in seconds. |
|» displayName|body|string|false| The display name for a branch. This is used as the default domain prefix. |
|» enablePullRequestPreview|body|boolean|false| Enables pull request previews for this branch. |
|» pullRequestEnvironmentName|body|string|false| The Amplify environment name for the pull request. |
|» backendEnvironmentArn|body|string|false| The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» stage|PRODUCTION|
|» stage|BETA|
|» stage|DEVELOPMENT|
|» stage|EXPERIMENTAL|
|» stage|PULL_REQUEST|

> Example responses

> 200 Response

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatebranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBranchResult](#schemaupdatebranchresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBranch

<a id="opIdDeleteBranch"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}/branches/{branchName}`

 Deletes a branch for an Amplify app. 

<h3 id="deletebranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletebranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBranchResult](#schemadeletebranchresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainAssociation

<a id="opIdGetDomainAssociation"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/domains/{domainName}`

 Returns the domain information for an Amplify app. 

<h3 id="getdomainassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique id for an Amplify app. |
|domainName|path|string|true| The name of the domain. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdomainassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainAssociationResult](#schemagetdomainassociationresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainAssociation

<a id="opIdUpdateDomainAssociation"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/domains/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enableAutoSubDomain": true,
    "subDomainSettings": [
      {
        "prefix": {},
        "branchName": {}
      }
    ],
    "autoSubDomainCreationPatterns": [
      "string"
    ],
    "autoSubDomainIAMRole": "string"
  }'
```

`POST /apps/{appId}/domains/{domainName}`

 Creates a new domain association for an Amplify app.

> Body parameter

```json
{
  "enableAutoSubDomain": true,
  "subDomainSettings": [
    {
      "prefix": {},
      "branchName": {}
    }
  ],
  "autoSubDomainCreationPatterns": [
    "string"
  ],
  "autoSubDomainIAMRole": "string"
}
```

<h3 id="updatedomainassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|domainName|path|string|true| The name of the domain. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» enableAutoSubDomain|body|boolean|false| Enables the automated creation of subdomains for branches. |
|» subDomainSettings|body|[[SubDomainSetting](#schemasubdomainsetting)]|false| Describes the settings for the subdomain. |
|» autoSubDomainCreationPatterns|body|[[AutoSubDomainCreationPattern](#schemaautosubdomaincreationpattern)]|false| Sets the branch patterns for automatic subdomain creation. |
|» autoSubDomainIAMRole|body|string|false| The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. |

> Example responses

> 200 Response

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatedomainassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainAssociationResult](#schemaupdatedomainassociationresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainAssociation

<a id="opIdDeleteDomainAssociation"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}/domains/{domainName}`

 Deletes a domain association for an Amplify app. 

<h3 id="deletedomainassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique id for an Amplify app. |
|domainName|path|string|true| The name of the domain. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletedomainassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainAssociationResult](#schemadeletedomainassociationresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJob

<a id="opIdGetJob"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/branches/{branchName}/jobs/{jobId}`

 Returns a job for a branch of an Amplify app. 

<h3 id="getjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The branch name for the job. |
|jobId|path|string|true| The unique ID for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "job": {
    "summary": {
      "jobArn": {},
      "jobId": {},
      "commitId": {},
      "commitMessage": {},
      "commitTime": {},
      "startTime": {},
      "status": {},
      "endTime": {},
      "jobType": {}
    },
    "steps": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobResult](#schemagetjobresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJob

<a id="opIdDeleteJob"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}`

 Deletes a job for a branch of an Amplify app. 

<h3 id="deletejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch, for the job. |
|jobId|path|string|true| The unique ID for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteJobResult](#schemadeletejobresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWebhook

<a id="opIdGetWebhook"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /webhooks/{webhookId}`

 Returns the webhook information that corresponds to a specified webhook ID. 

<h3 id="getwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true| The unique ID for a webhook. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWebhookResult](#schemagetwebhookresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWebhook

<a id="opIdUpdateWebhook"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/webhooks/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "branchName": "string",
    "description": "string"
  }'
```

`POST /webhooks/{webhookId}`

 Updates a webhook. 

> Body parameter

```json
{
  "branchName": "string",
  "description": "string"
}
```

<h3 id="updatewebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true| The unique ID for a webhook. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» branchName|body|string|false| The name for a branch that is part of an Amplify app. |
|» description|body|string|false| The description for a webhook. |

> Example responses

> 200 Response

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWebhookResult](#schemaupdatewebhookresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|DependentServiceFailureException|[DependentServiceFailureException](#schemadependentservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWebhook

<a id="opIdDeleteWebhook"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /webhooks/{webhookId}`

 Deletes a webhook. 

<h3 id="deletewebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true| The unique ID for a webhook. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWebhookResult](#schemadeletewebhookresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateAccessLogs

<a id="opIdGenerateAccessLogs"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/accesslogs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "startTime": "1970-01-01T00:00:00Z",
    "endTime": "1970-01-01T00:00:00Z",
    "domainName": "string"
  }'
```

`POST /apps/{appId}/accesslogs`

 Returns the website access logs for a specific time range using a presigned URL. 

> Body parameter

```json
{
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "domainName": "string"
}
```

<h3 id="generateaccesslogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» startTime|body|string(date-time)|false| The time at which the logs should start. The time range specified is inclusive of the start time. |
|» endTime|body|string(date-time)|false| The time at which the logs should end. The time range specified is inclusive of the end time. |
|» domainName|body|string|true| The name of the domain. |

> Example responses

> 200 Response

```json
{
  "logUrl": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="generateaccesslogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateAccessLogsResult](#schemagenerateaccesslogsresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetArtifactUrl

<a id="opIdGetArtifactUrl"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/artifacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /artifacts/{artifactId}`

 Returns the artifact info that corresponds to an artifact id. 

<h3 id="getartifacturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artifactId|path|string|true| The unique ID for an artifact. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "artifactId": {},
  "artifactUrl": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getartifacturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetArtifactUrlResult](#schemagetartifacturlresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListArtifacts

<a id="opIdListArtifacts"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs/string/artifacts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts`

 Returns a list of artifacts for a specified app, branch, and job. 

<h3 id="listartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name of a branch that is part of an Amplify app. |
|jobId|path|string|true| The unique ID for a job. |
|nextToken|query|string|false| A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListArtifactsResult](#schemalistartifactsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apps/{appId}/branches/{branchName}/jobs`

 Lists the jobs for a branch of an Amplify app. 

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for a branch. |
|nextToken|query|string|false| A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps. |
|maxResults|query|integer|false| The maximum number of records to list in a single response. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "jobSummaries": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResult](#schemalistjobsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartJob

<a id="opIdStartJob"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobId": "string",
    "jobType": "RELEASE",
    "jobReason": "string",
    "commitId": "string",
    "commitMessage": "string",
    "commitTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /apps/{appId}/branches/{branchName}/jobs`

 Starts a new job for a branch of an Amplify app. 

> Body parameter

```json
{
  "jobId": "string",
  "jobType": "RELEASE",
  "jobReason": "string",
  "commitId": "string",
  "commitMessage": "string",
  "commitTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="startjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The branch name for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobId|body|string|false| The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>. |
|» jobType|body|string|true| Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required. |
|» jobReason|body|string|false| A descriptive reason for starting this job. |
|» commitId|body|string|false| The commit ID from a third-party repository provider for the job. |
|» commitMessage|body|string|false| The commit message from a third-party repository provider for the job. |
|» commitTime|body|string(date-time)|false| The commit date and time for the job. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» jobType|RELEASE|
|» jobType|RETRY|
|» jobType|MANUAL|
|» jobType|WEB_HOOK|

> Example responses

> 200 Response

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="startjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartJobResult](#schemastartjobresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

 Returns a list of tags for a specified Amazon Resource Name (ARN). 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) to use to list tags. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

 Tags the resource with a tag key and value. 

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) to use to tag a resource. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true| The tags used to tag the resource. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDeployment

<a id="opIdStartDeployment"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/deployments/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobId": "string",
    "sourceUrl": "string"
  }'
```

`POST /apps/{appId}/branches/{branchName}/deployments/start`

 Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 

> Body parameter

```json
{
  "jobId": "string",
  "sourceUrl": "string"
}
```

<h3 id="startdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch, for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobId|body|string|false| The job ID for this deployment, generated by the create deployment request. |
|» sourceUrl|body|string|false| The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file. |

> Example responses

> 200 Response

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="startdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDeploymentResult](#schemastartdeploymentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopJob

<a id="opIdStopJob"></a>

> Code samples

```bash
curl https://amplify.us-east-1.amazonaws.com/apps/string/branches/string/jobs/string/stop \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}/stop`

 Stops a job that is in progress for a branch of an Amplify app. 

<h3 id="stopjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true| The unique ID for an Amplify app. |
|branchName|path|string|true| The name for the branch, for the job. |
|jobId|path|string|true| The unique id for the job. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="stopjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopJobResult](#schemastopjobresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://amplify.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

 Untags a resource with a specified Amazon Resource Name (ARN). 

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) to use to untag a resource. |
|tagKeys|query|[[TagKey](#schematagkey)]|true| The tag keys to use to untag a resource. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAppResult">CreateAppResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateappresult"></a>
<a id="schema_CreateAppResult"></a>
<a id="tocScreateappresult"></a>
<a id="tocscreateappresult"></a>

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|true|none| Represents the different branches of a repository for building, deploying, and hosting an Amplify app. |

<h2 id="tocS_EnvValue">EnvValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvvalue"></a>
<a id="schema_EnvValue"></a>
<a id="tocSenvvalue"></a>
<a id="tocsenvvalue"></a>

```json
"string"
```

<h2 id="tocS_CustomRule">CustomRule</h2>
<!-- backwards compatibility -->
<a id="schemacustomrule"></a>
<a id="schema_CustomRule"></a>
<a id="tocScustomrule"></a>
<a id="tocscustomrule"></a>

```json
{
  "source": {},
  "target": {},
  "status": {},
  "condition": {}
}
```

 Describes a custom rewrite or redirect rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|target|object|true|none|none|
|status|object|false|none|none|
|condition|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_AutoBranchCreationPattern">AutoBranchCreationPattern</h2>
<!-- backwards compatibility -->
<a id="schemaautobranchcreationpattern"></a>
<a id="schema_AutoBranchCreationPattern"></a>
<a id="tocSautobranchcreationpattern"></a>
<a id="tocsautobranchcreationpattern"></a>

```json
"string"
```

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
"PRODUCTION"
```

<h2 id="tocS_Framework">Framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_Framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
"string"
```

<h2 id="tocS_EnableAutoBuild">EnableAutoBuild</h2>
<!-- backwards compatibility -->
<a id="schemaenableautobuild"></a>
<a id="schema_EnableAutoBuild"></a>
<a id="tocSenableautobuild"></a>
<a id="tocsenableautobuild"></a>

```json
true
```

<h2 id="tocS_EnvironmentVariables">EnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariables"></a>
<a id="schema_EnvironmentVariables"></a>
<a id="tocSenvironmentvariables"></a>
<a id="tocsenvironmentvariables"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EnvValue](#schemaenvvalue)|false|none|none|

<h2 id="tocS_BasicAuthCredentials">BasicAuthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthcredentials"></a>
<a id="schema_BasicAuthCredentials"></a>
<a id="tocSbasicauthcredentials"></a>
<a id="tocsbasicauthcredentials"></a>

```json
"password"
```

<h2 id="tocS_EnableBasicAuth">EnableBasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemaenablebasicauth"></a>
<a id="schema_EnableBasicAuth"></a>
<a id="tocSenablebasicauth"></a>
<a id="tocsenablebasicauth"></a>

```json
true
```

<h2 id="tocS_EnablePerformanceMode">EnablePerformanceMode</h2>
<!-- backwards compatibility -->
<a id="schemaenableperformancemode"></a>
<a id="schema_EnablePerformanceMode"></a>
<a id="tocSenableperformancemode"></a>
<a id="tocsenableperformancemode"></a>

```json
true
```

<h2 id="tocS_BuildSpec">BuildSpec</h2>
<!-- backwards compatibility -->
<a id="schemabuildspec"></a>
<a id="schema_BuildSpec"></a>
<a id="tocSbuildspec"></a>
<a id="tocsbuildspec"></a>

```json
"password"
```

 The build specification (build spec) file for an Amplify app build.

<h2 id="tocS_EnablePullRequestPreview">EnablePullRequestPreview</h2>
<!-- backwards compatibility -->
<a id="schemaenablepullrequestpreview"></a>
<a id="schema_EnablePullRequestPreview"></a>
<a id="tocSenablepullrequestpreview"></a>
<a id="tocsenablepullrequestpreview"></a>

```json
true
```

<h2 id="tocS_PullRequestEnvironmentName">PullRequestEnvironmentName</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestenvironmentname"></a>
<a id="schema_PullRequestEnvironmentName"></a>
<a id="tocSpullrequestenvironmentname"></a>
<a id="tocspullrequestenvironmentname"></a>

```json
"string"
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DependentServiceFailureException">DependentServiceFailureException</h2>
<!-- backwards compatibility -->
<a id="schemadependentservicefailureexception"></a>
<a id="schema_DependentServiceFailureException"></a>
<a id="tocSdependentservicefailureexception"></a>
<a id="tocsdependentservicefailureexception"></a>

```json
null
```

<h2 id="tocS_CreateBackendEnvironmentResult">CreateBackendEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendenvironmentresult"></a>
<a id="schema_CreateBackendEnvironmentResult"></a>
<a id="tocScreatebackendenvironmentresult"></a>
<a id="tocscreatebackendenvironmentresult"></a>

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the create backend environment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendEnvironment|object|true|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateBranchResult">CreateBranchResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebranchresult"></a>
<a id="schema_CreateBranchResult"></a>
<a id="tocScreatebranchresult"></a>
<a id="tocscreatebranchresult"></a>

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

 The result structure for create branch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|

<h2 id="tocS_CreateDeploymentResult">CreateDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresult"></a>
<a id="schema_CreateDeploymentResult"></a>
<a id="tocScreatedeploymentresult"></a>
<a id="tocscreatedeploymentresult"></a>

```json
{
  "jobId": {},
  "fileUploadUrls": {
    "property1": "string",
    "property2": "string"
  },
  "zipUploadUrl": {}
}
```

 The result structure for the create a new deployment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|fileUploadUrls|object|true|none|none|
|zipUploadUrl|object|true|none|none|

<h2 id="tocS_MD5Hash">MD5Hash</h2>
<!-- backwards compatibility -->
<a id="schemamd5hash"></a>
<a id="schema_MD5Hash"></a>
<a id="tocSmd5hash"></a>
<a id="tocsmd5hash"></a>

```json
"string"
```

<h2 id="tocS_CreateDomainAssociationResult">CreateDomainAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainassociationresult"></a>
<a id="schema_CreateDomainAssociationResult"></a>
<a id="tocScreatedomainassociationresult"></a>
<a id="tocscreatedomainassociationresult"></a>

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

 The result structure for the create domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociation|object|true|none|none|

<h2 id="tocS_SubDomainSetting">SubDomainSetting</h2>
<!-- backwards compatibility -->
<a id="schemasubdomainsetting"></a>
<a id="schema_SubDomainSetting"></a>
<a id="tocSsubdomainsetting"></a>
<a id="tocssubdomainsetting"></a>

```json
{
  "prefix": {},
  "branchName": {}
}
```

 Describes the settings for the subdomain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|object|true|none|none|
|branchName|object|true|none|none|

<h2 id="tocS_AutoSubDomainCreationPattern">AutoSubDomainCreationPattern</h2>
<!-- backwards compatibility -->
<a id="schemaautosubdomaincreationpattern"></a>
<a id="schema_AutoSubDomainCreationPattern"></a>
<a id="tocSautosubdomaincreationpattern"></a>
<a id="tocsautosubdomaincreationpattern"></a>

```json
"string"
```

<h2 id="tocS_CreateWebhookResult">CreateWebhookResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookresult"></a>
<a id="schema_CreateWebhookResult"></a>
<a id="tocScreatewebhookresult"></a>
<a id="tocscreatewebhookresult"></a>

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the create webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|true|none|none|

<h2 id="tocS_DeleteAppResult">DeleteAppResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappresult"></a>
<a id="schema_DeleteAppResult"></a>
<a id="tocSdeleteappresult"></a>
<a id="tocsdeleteappresult"></a>

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

 The result structure for the delete app request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|true|none| Represents the different branches of a repository for building, deploying, and hosting an Amplify app. |

<h2 id="tocS_DeleteBackendEnvironmentResult">DeleteBackendEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendenvironmentresult"></a>
<a id="schema_DeleteBackendEnvironmentResult"></a>
<a id="tocSdeletebackendenvironmentresult"></a>
<a id="tocsdeletebackendenvironmentresult"></a>

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure of the delete backend environment result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendEnvironment|object|true|none|none|

<h2 id="tocS_DeleteBranchResult">DeleteBranchResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebranchresult"></a>
<a id="schema_DeleteBranchResult"></a>
<a id="tocSdeletebranchresult"></a>
<a id="tocsdeletebranchresult"></a>

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

 The result structure for the delete branch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|

<h2 id="tocS_DeleteDomainAssociationResult">DeleteDomainAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainassociationresult"></a>
<a id="schema_DeleteDomainAssociationResult"></a>
<a id="tocSdeletedomainassociationresult"></a>
<a id="tocsdeletedomainassociationresult"></a>

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociation|[DomainAssociation](#schemadomainassociation)|true|none| Describes a domain association that associates a custom domain with an Amplify app. |

<h2 id="tocS_DeleteJobResult">DeleteJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobresult"></a>
<a id="schema_DeleteJobResult"></a>
<a id="tocSdeletejobresult"></a>
<a id="tocsdeletejobresult"></a>

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

 The result structure for the delete job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummary|[JobSummary](#schemajobsummary)|true|none| Describes the summary for an execution job for an Amplify app. |

<h2 id="tocS_DeleteWebhookResult">DeleteWebhookResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookresult"></a>
<a id="schema_DeleteWebhookResult"></a>
<a id="tocSdeletewebhookresult"></a>
<a id="tocsdeletewebhookresult"></a>

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the delete webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|true|none|none|

<h2 id="tocS_GenerateAccessLogsResult">GenerateAccessLogsResult</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesslogsresult"></a>
<a id="schema_GenerateAccessLogsResult"></a>
<a id="tocSgenerateaccesslogsresult"></a>
<a id="tocsgenerateaccesslogsresult"></a>

```json
{
  "logUrl": {}
}
```

 The result structure for the generate access logs request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logUrl|object|false|none|none|

<h2 id="tocS_GetAppResult">GetAppResult</h2>
<!-- backwards compatibility -->
<a id="schemagetappresult"></a>
<a id="schema_GetAppResult"></a>
<a id="tocSgetappresult"></a>
<a id="tocsgetappresult"></a>

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|true|none| Represents the different branches of a repository for building, deploying, and hosting an Amplify app. |

<h2 id="tocS_GetArtifactUrlResult">GetArtifactUrlResult</h2>
<!-- backwards compatibility -->
<a id="schemagetartifacturlresult"></a>
<a id="schema_GetArtifactUrlResult"></a>
<a id="tocSgetartifacturlresult"></a>
<a id="tocsgetartifacturlresult"></a>

```json
{
  "artifactId": {},
  "artifactUrl": {}
}
```

 Returns the result structure for the get artifact request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|object|true|none|none|
|artifactUrl|object|true|none|none|

<h2 id="tocS_GetBackendEnvironmentResult">GetBackendEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendenvironmentresult"></a>
<a id="schema_GetBackendEnvironmentResult"></a>
<a id="tocSgetbackendenvironmentresult"></a>
<a id="tocsgetbackendenvironmentresult"></a>

```json
{
  "backendEnvironment": {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the get backend environment result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendEnvironment|object|true|none|none|

<h2 id="tocS_GetBranchResult">GetBranchResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbranchresult"></a>
<a id="schema_GetBranchResult"></a>
<a id="tocSgetbranchresult"></a>
<a id="tocsgetbranchresult"></a>

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|[Branch](#schemabranch)|true|none| The branch for an Amplify app, which maps to a third-party repository branch. |

<h2 id="tocS_GetDomainAssociationResult">GetDomainAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainassociationresult"></a>
<a id="schema_GetDomainAssociationResult"></a>
<a id="tocSgetdomainassociationresult"></a>
<a id="tocsgetdomainassociationresult"></a>

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

 The result structure for the get domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociation|object|true|none|none|

<h2 id="tocS_GetJobResult">GetJobResult</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresult"></a>
<a id="schema_GetJobResult"></a>
<a id="tocSgetjobresult"></a>
<a id="tocsgetjobresult"></a>

```json
{
  "job": {
    "summary": {
      "jobArn": {},
      "jobId": {},
      "commitId": {},
      "commitMessage": {},
      "commitTime": {},
      "startTime": {},
      "status": {},
      "endTime": {},
      "jobType": {}
    },
    "steps": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|true|none| Describes an execution job for an Amplify app. |

<h2 id="tocS_GetWebhookResult">GetWebhookResult</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookresult"></a>
<a id="schema_GetWebhookResult"></a>
<a id="tocSgetwebhookresult"></a>
<a id="tocsgetwebhookresult"></a>

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the get webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|true|none|none|

<h2 id="tocS_ListAppsResult">ListAppsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistappsresult"></a>
<a id="schema_ListAppsResult"></a>
<a id="tocSlistappsresult"></a>
<a id="tocslistappsresult"></a>

```json
{
  "apps": {},
  "nextToken": {}
}
```

 The result structure for an Amplify app list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListArtifactsResult">ListArtifactsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistartifactsresult"></a>
<a id="schema_ListArtifactsResult"></a>
<a id="tocSlistartifactsresult"></a>
<a id="tocslistartifactsresult"></a>

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

 The result structure for the list artifacts request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBackendEnvironmentsResult">ListBackendEnvironmentsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistbackendenvironmentsresult"></a>
<a id="schema_ListBackendEnvironmentsResult"></a>
<a id="tocSlistbackendenvironmentsresult"></a>
<a id="tocslistbackendenvironmentsresult"></a>

```json
{
  "backendEnvironments": {},
  "nextToken": {}
}
```

 The result structure for the list backend environments result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendEnvironments|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBranchesResult">ListBranchesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistbranchesresult"></a>
<a id="schema_ListBranchesResult"></a>
<a id="tocSlistbranchesresult"></a>
<a id="tocslistbranchesresult"></a>

```json
{
  "branches": {},
  "nextToken": {}
}
```

 The result structure for the list branches request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDomainAssociationsResult">ListDomainAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainassociationsresult"></a>
<a id="schema_ListDomainAssociationsResult"></a>
<a id="tocSlistdomainassociationsresult"></a>
<a id="tocslistdomainassociationsresult"></a>

```json
{
  "domainAssociations": {},
  "nextToken": {}
}
```

 The result structure for the list domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociations|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListJobsResult">ListJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresult"></a>
<a id="schema_ListJobsResult"></a>
<a id="tocSlistjobsresult"></a>
<a id="tocslistjobsresult"></a>

```json
{
  "jobSummaries": {},
  "nextToken": {}
}
```

 The maximum number of records to list in a single response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

 The response for the list tags for resource request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListWebhooksResult">ListWebhooksResult</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksresult"></a>
<a id="schema_ListWebhooksResult"></a>
<a id="tocSlistwebhooksresult"></a>
<a id="tocslistwebhooksresult"></a>

```json
{
  "webhooks": {},
  "nextToken": {}
}
```

 The result structure for the list webhooks request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StartDeploymentResult">StartDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemastartdeploymentresult"></a>
<a id="schema_StartDeploymentResult"></a>
<a id="tocSstartdeploymentresult"></a>
<a id="tocsstartdeploymentresult"></a>

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

 The result structure for the start a deployment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummary|object|true|none|none|

<h2 id="tocS_StartJobResult">StartJobResult</h2>
<!-- backwards compatibility -->
<a id="schemastartjobresult"></a>
<a id="schema_StartJobResult"></a>
<a id="tocSstartjobresult"></a>
<a id="tocsstartjobresult"></a>

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

 The result structure for the run job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummary|object|true|none|none|

<h2 id="tocS_StopJobResult">StopJobResult</h2>
<!-- backwards compatibility -->
<a id="schemastopjobresult"></a>
<a id="schema_StopJobResult"></a>
<a id="tocSstopjobresult"></a>
<a id="tocsstopjobresult"></a>

```json
{
  "jobSummary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
}
```

 The result structure for the stop job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummary|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

 The response for the tag resource request.

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

 The response for the untag resource request.

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateAppResult">UpdateAppResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappresult"></a>
<a id="schema_UpdateAppResult"></a>
<a id="tocSupdateappresult"></a>
<a id="tocsupdateappresult"></a>

```json
{
  "app": {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
}
```

 The result structure for an Amplify app update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|object|true|none|none|

<h2 id="tocS_UpdateBranchResult">UpdateBranchResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebranchresult"></a>
<a id="schema_UpdateBranchResult"></a>
<a id="tocSupdatebranchresult"></a>
<a id="tocsupdatebranchresult"></a>

```json
{
  "branch": {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
}
```

 The result structure for the update branch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|

<h2 id="tocS_UpdateDomainAssociationResult">UpdateDomainAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainassociationresult"></a>
<a id="schema_UpdateDomainAssociationResult"></a>
<a id="tocSupdatedomainassociationresult"></a>
<a id="tocsupdatedomainassociationresult"></a>

```json
{
  "domainAssociation": {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
}
```

 The result structure for the update domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociation|object|true|none|none|

<h2 id="tocS_UpdateWebhookResult">UpdateWebhookResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookresult"></a>
<a id="schema_UpdateWebhookResult"></a>
<a id="tocSupdatewebhookresult"></a>
<a id="tocsupdatewebhookresult"></a>

```json
{
  "webhook": {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
}
```

 The result structure for the update webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|true|none|none|

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
"password"
```

<h2 id="tocS_ActiveJobId">ActiveJobId</h2>
<!-- backwards compatibility -->
<a id="schemaactivejobid"></a>
<a id="schema_ActiveJobId"></a>
<a id="tocSactivejobid"></a>
<a id="tocsactivejobid"></a>

```json
"string"
```

<h2 id="tocS_AppId">AppId</h2>
<!-- backwards compatibility -->
<a id="schemaappid"></a>
<a id="schema_AppId"></a>
<a id="tocSappid"></a>
<a id="tocsappid"></a>

```json
"string"
```

<h2 id="tocS_AppArn">AppArn</h2>
<!-- backwards compatibility -->
<a id="schemaapparn"></a>
<a id="schema_AppArn"></a>
<a id="tocSapparn"></a>
<a id="tocsapparn"></a>

```json
"string"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
"string"
```

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"WEB"
```

<h2 id="tocS_CreateTime">CreateTime</h2>
<!-- backwards compatibility -->
<a id="schemacreatetime"></a>
<a id="schema_CreateTime"></a>
<a id="tocScreatetime"></a>
<a id="tocscreatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UpdateTime">UpdateTime</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetime"></a>
<a id="schema_UpdateTime"></a>
<a id="tocSupdatetime"></a>
<a id="tocsupdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ServiceRoleArn">ServiceRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicerolearn"></a>
<a id="schema_ServiceRoleArn"></a>
<a id="tocSservicerolearn"></a>
<a id="tocsservicerolearn"></a>

```json
"string"
```

<h2 id="tocS_DefaultDomain">DefaultDomain</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdomain"></a>
<a id="schema_DefaultDomain"></a>
<a id="tocSdefaultdomain"></a>
<a id="tocsdefaultdomain"></a>

```json
"string"
```

<h2 id="tocS_EnableBranchAutoBuild">EnableBranchAutoBuild</h2>
<!-- backwards compatibility -->
<a id="schemaenablebranchautobuild"></a>
<a id="schema_EnableBranchAutoBuild"></a>
<a id="tocSenablebranchautobuild"></a>
<a id="tocsenablebranchautobuild"></a>

```json
true
```

<h2 id="tocS_EnableBranchAutoDeletion">EnableBranchAutoDeletion</h2>
<!-- backwards compatibility -->
<a id="schemaenablebranchautodeletion"></a>
<a id="schema_EnableBranchAutoDeletion"></a>
<a id="tocSenablebranchautodeletion"></a>
<a id="tocsenablebranchautodeletion"></a>

```json
true
```

<h2 id="tocS_CustomRules">CustomRules</h2>
<!-- backwards compatibility -->
<a id="schemacustomrules"></a>
<a id="schema_CustomRules"></a>
<a id="tocScustomrules"></a>
<a id="tocscustomrules"></a>

```json
[
  {
    "source": {},
    "target": {},
    "status": {},
    "condition": {}
  }
]
```

<h2 id="tocS_ProductionBranch">ProductionBranch</h2>
<!-- backwards compatibility -->
<a id="schemaproductionbranch"></a>
<a id="schema_ProductionBranch"></a>
<a id="tocSproductionbranch"></a>
<a id="tocsproductionbranch"></a>

```json
{
  "lastDeployTime": {},
  "status": {},
  "thumbnailUrl": {},
  "branchName": {}
}
```

 Describes the information about a production branch for an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastDeployTime|object|false|none|none|
|status|object|false|none|none|
|thumbnailUrl|object|false|none|none|
|branchName|object|false|none|none|

<h2 id="tocS_CustomHeaders">CustomHeaders</h2>
<!-- backwards compatibility -->
<a id="schemacustomheaders"></a>
<a id="schema_CustomHeaders"></a>
<a id="tocScustomheaders"></a>
<a id="tocscustomheaders"></a>

```json
"string"
```

<h2 id="tocS_EnableAutoBranchCreation">EnableAutoBranchCreation</h2>
<!-- backwards compatibility -->
<a id="schemaenableautobranchcreation"></a>
<a id="schema_EnableAutoBranchCreation"></a>
<a id="tocSenableautobranchcreation"></a>
<a id="tocsenableautobranchcreation"></a>

```json
true
```

<h2 id="tocS_AutoBranchCreationPatterns">AutoBranchCreationPatterns</h2>
<!-- backwards compatibility -->
<a id="schemaautobranchcreationpatterns"></a>
<a id="schema_AutoBranchCreationPatterns"></a>
<a id="tocSautobranchcreationpatterns"></a>
<a id="tocsautobranchcreationpatterns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutoBranchCreationConfig">AutoBranchCreationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaautobranchcreationconfig"></a>
<a id="schema_AutoBranchCreationConfig"></a>
<a id="tocSautobranchcreationconfig"></a>
<a id="tocsautobranchcreationconfig"></a>

```json
{
  "stage": {},
  "framework": {},
  "enableAutoBuild": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "basicAuthCredentials": {},
  "enableBasicAuth": {},
  "enablePerformanceMode": {},
  "buildSpec": {},
  "enablePullRequestPreview": {},
  "pullRequestEnvironmentName": {}
}
```

 Describes the automated branch creation configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stage|object|false|none|none|
|framework|object|false|none|none|
|enableAutoBuild|object|false|none|none|
|environmentVariables|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|enableBasicAuth|object|false|none|none|
|enablePerformanceMode|object|false|none|none|
|buildSpec|object|false|none|none|
|enablePullRequestPreview|object|false|none|none|
|pullRequestEnvironmentName|object|false|none|none|

<h2 id="tocS_RepositoryCloneMethod">RepositoryCloneMethod</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryclonemethod"></a>
<a id="schema_RepositoryCloneMethod"></a>
<a id="tocSrepositoryclonemethod"></a>
<a id="tocsrepositoryclonemethod"></a>

```json
"SSH"
```

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "appId": {},
  "appArn": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "description": {},
  "repository": {},
  "platform": {},
  "createTime": {},
  "updateTime": {},
  "iamServiceRoleArn": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "defaultDomain": {},
  "enableBranchAutoBuild": {},
  "enableBranchAutoDeletion": {},
  "enableBasicAuth": {},
  "basicAuthCredentials": {},
  "customRules": {},
  "productionBranch": {
    "lastDeployTime": {},
    "status": {},
    "thumbnailUrl": {},
    "branchName": {}
  },
  "buildSpec": {},
  "customHeaders": {},
  "enableAutoBranchCreation": {},
  "autoBranchCreationPatterns": {},
  "autoBranchCreationConfig": {
    "stage": {},
    "framework": {},
    "enableAutoBuild": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "buildSpec": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {}
  },
  "repositoryCloneMethod": {}
}
```

 Represents the different branches of a repository for building, deploying, and hosting an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|
|appArn|object|true|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|
|description|object|true|none|none|
|repository|object|true|none|none|
|platform|object|true|none|none|
|createTime|object|true|none|none|
|updateTime|object|true|none|none|
|iamServiceRoleArn|object|false|none|none|
|environmentVariables|object|true|none|none|
|defaultDomain|object|true|none|none|
|enableBranchAutoBuild|object|true|none|none|
|enableBranchAutoDeletion|object|false|none|none|
|enableBasicAuth|object|true|none|none|
|basicAuthCredentials|object|false|none|none|
|customRules|object|false|none|none|
|productionBranch|object|false|none|none|
|buildSpec|object|false|none|none|
|customHeaders|object|false|none|none|
|enableAutoBranchCreation|object|false|none|none|
|autoBranchCreationPatterns|object|false|none|none|
|autoBranchCreationConfig|object|false|none|none|
|repositoryCloneMethod|object|false|none|none|

<h2 id="tocS_Apps">Apps</h2>
<!-- backwards compatibility -->
<a id="schemaapps"></a>
<a id="schema_Apps"></a>
<a id="tocSapps"></a>
<a id="tocsapps"></a>

```json
[
  {
    "appId": {},
    "appArn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "description": {},
    "repository": {},
    "platform": {},
    "createTime": {},
    "updateTime": {},
    "iamServiceRoleArn": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "defaultDomain": {},
    "enableBranchAutoBuild": {},
    "enableBranchAutoDeletion": {},
    "enableBasicAuth": {},
    "basicAuthCredentials": {},
    "customRules": {},
    "productionBranch": {
      "lastDeployTime": {},
      "status": {},
      "thumbnailUrl": {},
      "branchName": {}
    },
    "buildSpec": {},
    "customHeaders": {},
    "enableAutoBranchCreation": {},
    "autoBranchCreationPatterns": {},
    "autoBranchCreationConfig": {
      "stage": {},
      "framework": {},
      "enableAutoBuild": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "basicAuthCredentials": {},
      "enableBasicAuth": {},
      "enablePerformanceMode": {},
      "buildSpec": {},
      "enablePullRequestPreview": {},
      "pullRequestEnvironmentName": {}
    },
    "repositoryCloneMethod": {}
  }
]
```

<h2 id="tocS_ArtifactFileName">ArtifactFileName</h2>
<!-- backwards compatibility -->
<a id="schemaartifactfilename"></a>
<a id="schema_ArtifactFileName"></a>
<a id="tocSartifactfilename"></a>
<a id="tocsartifactfilename"></a>

```json
"string"
```

<h2 id="tocS_ArtifactId">ArtifactId</h2>
<!-- backwards compatibility -->
<a id="schemaartifactid"></a>
<a id="schema_ArtifactId"></a>
<a id="tocSartifactid"></a>
<a id="tocsartifactid"></a>

```json
"string"
```

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "artifactFileName": {},
  "artifactId": {}
}
```

 Describes an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactFileName|object|true|none|none|
|artifactId|object|true|none|none|

<h2 id="tocS_ArtifactUrl">ArtifactUrl</h2>
<!-- backwards compatibility -->
<a id="schemaartifacturl"></a>
<a id="schema_ArtifactUrl"></a>
<a id="tocSartifacturl"></a>
<a id="tocsartifacturl"></a>

```json
"string"
```

<h2 id="tocS_Artifacts">Artifacts</h2>
<!-- backwards compatibility -->
<a id="schemaartifacts"></a>
<a id="schema_Artifacts"></a>
<a id="tocSartifacts"></a>
<a id="tocsartifacts"></a>

```json
[
  {
    "artifactFileName": {},
    "artifactId": {}
  }
]
```

<h2 id="tocS_ArtifactsUrl">ArtifactsUrl</h2>
<!-- backwards compatibility -->
<a id="schemaartifactsurl"></a>
<a id="schema_ArtifactsUrl"></a>
<a id="tocSartifactsurl"></a>
<a id="tocsartifactsurl"></a>

```json
"string"
```

<h2 id="tocS_AssociatedResource">AssociatedResource</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedresource"></a>
<a id="schema_AssociatedResource"></a>
<a id="tocSassociatedresource"></a>
<a id="tocsassociatedresource"></a>

```json
"string"
```

<h2 id="tocS_AssociatedResources">AssociatedResources</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedresources"></a>
<a id="schema_AssociatedResources"></a>
<a id="tocSassociatedresources"></a>
<a id="tocsassociatedresources"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutoSubDomainCreationPatterns">AutoSubDomainCreationPatterns</h2>
<!-- backwards compatibility -->
<a id="schemaautosubdomaincreationpatterns"></a>
<a id="schema_AutoSubDomainCreationPatterns"></a>
<a id="tocSautosubdomaincreationpatterns"></a>
<a id="tocsautosubdomaincreationpatterns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutoSubDomainIAMRole">AutoSubDomainIAMRole</h2>
<!-- backwards compatibility -->
<a id="schemaautosubdomainiamrole"></a>
<a id="schema_AutoSubDomainIAMRole"></a>
<a id="tocSautosubdomainiamrole"></a>
<a id="tocsautosubdomainiamrole"></a>

```json
"string"
```

<h2 id="tocS_BackendEnvironmentArn">BackendEnvironmentArn</h2>
<!-- backwards compatibility -->
<a id="schemabackendenvironmentarn"></a>
<a id="schema_BackendEnvironmentArn"></a>
<a id="tocSbackendenvironmentarn"></a>
<a id="tocsbackendenvironmentarn"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentName">EnvironmentName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentname"></a>
<a id="schema_EnvironmentName"></a>
<a id="tocSenvironmentname"></a>
<a id="tocsenvironmentname"></a>

```json
"string"
```

<h2 id="tocS_StackName">StackName</h2>
<!-- backwards compatibility -->
<a id="schemastackname"></a>
<a id="schema_StackName"></a>
<a id="tocSstackname"></a>
<a id="tocsstackname"></a>

```json
"string"
```

<h2 id="tocS_DeploymentArtifacts">DeploymentArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentartifacts"></a>
<a id="schema_DeploymentArtifacts"></a>
<a id="tocSdeploymentartifacts"></a>
<a id="tocsdeploymentartifacts"></a>

```json
"string"
```

<h2 id="tocS_BackendEnvironment">BackendEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemabackendenvironment"></a>
<a id="schema_BackendEnvironment"></a>
<a id="tocSbackendenvironment"></a>
<a id="tocsbackendenvironment"></a>

```json
{
  "backendEnvironmentArn": {},
  "environmentName": {},
  "stackName": {},
  "deploymentArtifacts": {},
  "createTime": {},
  "updateTime": {}
}
```

 Describes the backend environment for an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendEnvironmentArn|object|true|none|none|
|environmentName|object|true|none|none|
|stackName|object|false|none|none|
|deploymentArtifacts|object|false|none|none|
|createTime|object|true|none|none|
|updateTime|object|true|none|none|

<h2 id="tocS_BackendEnvironments">BackendEnvironments</h2>
<!-- backwards compatibility -->
<a id="schemabackendenvironments"></a>
<a id="schema_BackendEnvironments"></a>
<a id="tocSbackendenvironments"></a>
<a id="tocsbackendenvironments"></a>

```json
[
  {
    "backendEnvironmentArn": {},
    "environmentName": {},
    "stackName": {},
    "deploymentArtifacts": {},
    "createTime": {},
    "updateTime": {}
  }
]
```

<h2 id="tocS_BranchArn">BranchArn</h2>
<!-- backwards compatibility -->
<a id="schemabrancharn"></a>
<a id="schema_BranchArn"></a>
<a id="tocSbrancharn"></a>
<a id="tocsbrancharn"></a>

```json
"string"
```

<h2 id="tocS_BranchName">BranchName</h2>
<!-- backwards compatibility -->
<a id="schemabranchname"></a>
<a id="schema_BranchName"></a>
<a id="tocSbranchname"></a>
<a id="tocsbranchname"></a>

```json
"string"
```

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_EnableNotification">EnableNotification</h2>
<!-- backwards compatibility -->
<a id="schemaenablenotification"></a>
<a id="schema_EnableNotification"></a>
<a id="tocSenablenotification"></a>
<a id="tocsenablenotification"></a>

```json
true
```

<h2 id="tocS_CustomDomains">CustomDomains</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomains"></a>
<a id="schema_CustomDomains"></a>
<a id="tocScustomdomains"></a>
<a id="tocscustomdomains"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TotalNumberOfJobs">TotalNumberOfJobs</h2>
<!-- backwards compatibility -->
<a id="schematotalnumberofjobs"></a>
<a id="schema_TotalNumberOfJobs"></a>
<a id="tocStotalnumberofjobs"></a>
<a id="tocstotalnumberofjobs"></a>

```json
"string"
```

<h2 id="tocS_ThumbnailUrl">ThumbnailUrl</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailurl"></a>
<a id="schema_ThumbnailUrl"></a>
<a id="tocSthumbnailurl"></a>
<a id="tocsthumbnailurl"></a>

```json
"string"
```

<h2 id="tocS_TTL">TTL</h2>
<!-- backwards compatibility -->
<a id="schemattl"></a>
<a id="schema_TTL"></a>
<a id="tocSttl"></a>
<a id="tocsttl"></a>

```json
"string"
```

 The content Time to Live (TTL) for the website in seconds.

<h2 id="tocS_Branch">Branch</h2>
<!-- backwards compatibility -->
<a id="schemabranch"></a>
<a id="schema_Branch"></a>
<a id="tocSbranch"></a>
<a id="tocsbranch"></a>

```json
{
  "branchArn": {},
  "branchName": {},
  "description": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "stage": {},
  "displayName": {},
  "enableNotification": {},
  "createTime": {},
  "updateTime": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "enableAutoBuild": {},
  "customDomains": {},
  "framework": {},
  "activeJobId": {},
  "totalNumberOfJobs": {},
  "enableBasicAuth": {},
  "enablePerformanceMode": {},
  "thumbnailUrl": {},
  "basicAuthCredentials": {},
  "buildSpec": {},
  "ttl": {},
  "associatedResources": {},
  "enablePullRequestPreview": {},
  "pullRequestEnvironmentName": {},
  "destinationBranch": {},
  "sourceBranch": {},
  "backendEnvironmentArn": {}
}
```

 The branch for an Amplify app, which maps to a third-party repository branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchArn|object|true|none|none|
|branchName|object|true|none|none|
|description|object|true|none|none|
|tags|object|false|none|none|
|stage|object|true|none|none|
|displayName|object|true|none|none|
|enableNotification|object|true|none|none|
|createTime|object|true|none|none|
|updateTime|object|true|none|none|
|environmentVariables|object|true|none|none|
|enableAutoBuild|object|true|none|none|
|customDomains|object|true|none|none|
|framework|object|true|none|none|
|activeJobId|object|true|none|none|
|totalNumberOfJobs|object|true|none|none|
|enableBasicAuth|object|true|none|none|
|enablePerformanceMode|object|false|none|none|
|thumbnailUrl|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|buildSpec|object|false|none|none|
|ttl|object|true|none|none|
|associatedResources|object|false|none|none|
|enablePullRequestPreview|object|true|none|none|
|pullRequestEnvironmentName|object|false|none|none|
|destinationBranch|object|false|none|none|
|sourceBranch|object|false|none|none|
|backendEnvironmentArn|object|false|none|none|

<h2 id="tocS_Branches">Branches</h2>
<!-- backwards compatibility -->
<a id="schemabranches"></a>
<a id="schema_Branches"></a>
<a id="tocSbranches"></a>
<a id="tocsbranches"></a>

```json
[
  {
    "branchArn": {},
    "branchName": {},
    "description": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "stage": {},
    "displayName": {},
    "enableNotification": {},
    "createTime": {},
    "updateTime": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "enableAutoBuild": {},
    "customDomains": {},
    "framework": {},
    "activeJobId": {},
    "totalNumberOfJobs": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "thumbnailUrl": {},
    "basicAuthCredentials": {},
    "buildSpec": {},
    "ttl": {},
    "associatedResources": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {},
    "destinationBranch": {},
    "sourceBranch": {},
    "backendEnvironmentArn": {}
  }
]
```

<h2 id="tocS_CertificateVerificationDNSRecord">CertificateVerificationDNSRecord</h2>
<!-- backwards compatibility -->
<a id="schemacertificateverificationdnsrecord"></a>
<a id="schema_CertificateVerificationDNSRecord"></a>
<a id="tocScertificateverificationdnsrecord"></a>
<a id="tocscertificateverificationdnsrecord"></a>

```json
"string"
```

<h2 id="tocS_CommitId">CommitId</h2>
<!-- backwards compatibility -->
<a id="schemacommitid"></a>
<a id="schema_CommitId"></a>
<a id="tocScommitid"></a>
<a id="tocscommitid"></a>

```json
"string"
```

<h2 id="tocS_CommitMessage">CommitMessage</h2>
<!-- backwards compatibility -->
<a id="schemacommitmessage"></a>
<a id="schema_CommitMessage"></a>
<a id="tocScommitmessage"></a>
<a id="tocscommitmessage"></a>

```json
"string"
```

<h2 id="tocS_CommitTime">CommitTime</h2>
<!-- backwards compatibility -->
<a id="schemacommittime"></a>
<a id="schema_CommitTime"></a>
<a id="tocScommittime"></a>
<a id="tocscommittime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
"string"
```

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"string"
```

<h2 id="tocS_OauthToken">OauthToken</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtoken"></a>
<a id="schema_OauthToken"></a>
<a id="tocSoauthtoken"></a>
<a id="tocsoauthtoken"></a>

```json
"password"
```

<h2 id="tocS_CreateAppRequest">CreateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprequest"></a>
<a id="schema_CreateAppRequest"></a>
<a id="tocScreateapprequest"></a>
<a id="tocscreateapprequest"></a>

```json
{
  "name": {},
  "description": {},
  "repository": {},
  "platform": {},
  "iamServiceRoleArn": {},
  "oauthToken": {},
  "accessToken": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "enableBranchAutoBuild": {},
  "enableBranchAutoDeletion": {},
  "enableBasicAuth": {},
  "basicAuthCredentials": {},
  "customRules": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildSpec": {},
  "customHeaders": {},
  "enableAutoBranchCreation": {},
  "autoBranchCreationPatterns": {},
  "autoBranchCreationConfig": {
    "stage": {},
    "framework": {},
    "enableAutoBuild": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "buildSpec": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {}
  }
}
```

 The request structure used to create apps in Amplify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|repository|object|false|none|none|
|platform|object|false|none|none|
|iamServiceRoleArn|object|false|none|none|
|oauthToken|object|false|none|none|
|accessToken|object|false|none|none|
|environmentVariables|object|false|none|none|
|enableBranchAutoBuild|object|false|none|none|
|enableBranchAutoDeletion|object|false|none|none|
|enableBasicAuth|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|customRules|object|false|none|none|
|tags|object|false|none|none|
|buildSpec|object|false|none|none|
|customHeaders|object|false|none|none|
|enableAutoBranchCreation|object|false|none|none|
|autoBranchCreationPatterns|object|false|none|none|
|autoBranchCreationConfig|object|false|none|none|

<h2 id="tocS_CreateBackendEnvironmentRequest">CreateBackendEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendenvironmentrequest"></a>
<a id="schema_CreateBackendEnvironmentRequest"></a>
<a id="tocScreatebackendenvironmentrequest"></a>
<a id="tocscreatebackendenvironmentrequest"></a>

```json
{
  "environmentName": {},
  "stackName": {},
  "deploymentArtifacts": {}
}
```

 The request structure for the backend environment create request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|true|none|none|
|stackName|object|false|none|none|
|deploymentArtifacts|object|false|none|none|

<h2 id="tocS_CreateBranchRequest">CreateBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebranchrequest"></a>
<a id="schema_CreateBranchRequest"></a>
<a id="tocScreatebranchrequest"></a>
<a id="tocscreatebranchrequest"></a>

```json
{
  "branchName": {},
  "description": {},
  "stage": {},
  "framework": {},
  "enableNotification": {},
  "enableAutoBuild": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "basicAuthCredentials": {},
  "enableBasicAuth": {},
  "enablePerformanceMode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildSpec": {},
  "ttl": {},
  "displayName": {},
  "enablePullRequestPreview": {},
  "pullRequestEnvironmentName": {},
  "backendEnvironmentArn": {}
}
```

 The request structure for the create branch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|object|true|none|none|
|description|object|false|none|none|
|stage|object|false|none|none|
|framework|object|false|none|none|
|enableNotification|object|false|none|none|
|enableAutoBuild|object|false|none|none|
|environmentVariables|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|enableBasicAuth|object|false|none|none|
|enablePerformanceMode|object|false|none|none|
|tags|object|false|none|none|
|buildSpec|object|false|none|none|
|ttl|object|false|none|none|
|displayName|object|false|none|none|
|enablePullRequestPreview|object|false|none|none|
|pullRequestEnvironmentName|object|false|none|none|
|backendEnvironmentArn|object|false|none|none|

<h2 id="tocS_FileMap">FileMap</h2>
<!-- backwards compatibility -->
<a id="schemafilemap"></a>
<a id="schema_FileMap"></a>
<a id="tocSfilemap"></a>
<a id="tocsfilemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MD5Hash](#schemamd5hash)|false|none|none|

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "fileMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

 The request structure for the create a new deployment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileMap|object|false|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_FileUploadUrls">FileUploadUrls</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadurls"></a>
<a id="schema_FileUploadUrls"></a>
<a id="tocSfileuploadurls"></a>
<a id="tocsfileuploadurls"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UploadUrl](#schemauploadurl)|false|none|none|

<h2 id="tocS_UploadUrl">UploadUrl</h2>
<!-- backwards compatibility -->
<a id="schemauploadurl"></a>
<a id="schema_UploadUrl"></a>
<a id="tocSuploadurl"></a>
<a id="tocsuploadurl"></a>

```json
"string"
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_EnableAutoSubDomain">EnableAutoSubDomain</h2>
<!-- backwards compatibility -->
<a id="schemaenableautosubdomain"></a>
<a id="schema_EnableAutoSubDomain"></a>
<a id="tocSenableautosubdomain"></a>
<a id="tocsenableautosubdomain"></a>

```json
true
```

<h2 id="tocS_SubDomainSettings">SubDomainSettings</h2>
<!-- backwards compatibility -->
<a id="schemasubdomainsettings"></a>
<a id="schema_SubDomainSettings"></a>
<a id="tocSsubdomainsettings"></a>
<a id="tocssubdomainsettings"></a>

```json
[
  {
    "prefix": {},
    "branchName": {}
  }
]
```

<h2 id="tocS_CreateDomainAssociationRequest">CreateDomainAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainassociationrequest"></a>
<a id="schema_CreateDomainAssociationRequest"></a>
<a id="tocScreatedomainassociationrequest"></a>
<a id="tocscreatedomainassociationrequest"></a>

```json
{
  "domainName": {},
  "enableAutoSubDomain": {},
  "subDomainSettings": {},
  "autoSubDomainCreationPatterns": {},
  "autoSubDomainIAMRole": {}
}
```

 The request structure for the create domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|enableAutoSubDomain|object|false|none|none|
|subDomainSettings|object|true|none|none|
|autoSubDomainCreationPatterns|object|false|none|none|
|autoSubDomainIAMRole|object|false|none|none|

<h2 id="tocS_DomainAssociation">DomainAssociation</h2>
<!-- backwards compatibility -->
<a id="schemadomainassociation"></a>
<a id="schema_DomainAssociation"></a>
<a id="tocSdomainassociation"></a>
<a id="tocsdomainassociation"></a>

```json
{
  "domainAssociationArn": {},
  "domainName": {},
  "enableAutoSubDomain": {},
  "autoSubDomainCreationPatterns": {},
  "autoSubDomainIAMRole": {},
  "domainStatus": {},
  "statusReason": {},
  "certificateVerificationDNSRecord": {},
  "subDomains": {}
}
```

 Describes a domain association that associates a custom domain with an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAssociationArn|object|true|none|none|
|domainName|object|true|none|none|
|enableAutoSubDomain|object|true|none|none|
|autoSubDomainCreationPatterns|object|false|none|none|
|autoSubDomainIAMRole|object|false|none|none|
|domainStatus|object|true|none|none|
|statusReason|object|true|none|none|
|certificateVerificationDNSRecord|object|false|none|none|
|subDomains|object|true|none|none|

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "branchName": {},
  "description": {}
}
```

 The request structure for the create webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "webhookArn": {},
  "webhookId": {},
  "webhookUrl": {},
  "branchName": {},
  "description": {},
  "createTime": {},
  "updateTime": {}
}
```

 Describes a webhook that connects repository events to an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookArn|object|true|none|none|
|webhookId|object|true|none|none|
|webhookUrl|object|true|none|none|
|branchName|object|true|none|none|
|description|object|true|none|none|
|createTime|object|true|none|none|
|updateTime|object|true|none|none|

<h2 id="tocS_CustomDomain">CustomDomain</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomain"></a>
<a id="schema_CustomDomain"></a>
<a id="tocScustomdomain"></a>
<a id="tocscustomdomain"></a>

```json
"string"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"string"
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

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
"string"
```

<h2 id="tocS_DNSRecord">DNSRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_DNSRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
"string"
```

<h2 id="tocS_DeleteAppRequest">DeleteAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapprequest"></a>
<a id="schema_DeleteAppRequest"></a>
<a id="tocSdeleteapprequest"></a>
<a id="tocsdeleteapprequest"></a>

```json
{}
```

 Describes the request structure for the delete app request.

<h2 id="tocS_DeleteBackendEnvironmentRequest">DeleteBackendEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendenvironmentrequest"></a>
<a id="schema_DeleteBackendEnvironmentRequest"></a>
<a id="tocSdeletebackendenvironmentrequest"></a>
<a id="tocsdeletebackendenvironmentrequest"></a>

```json
{}
```

 The request structure for the delete backend environment request.

<h2 id="tocS_DeleteBranchRequest">DeleteBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebranchrequest"></a>
<a id="schema_DeleteBranchRequest"></a>
<a id="tocSdeletebranchrequest"></a>
<a id="tocsdeletebranchrequest"></a>

```json
{}
```

 The request structure for the delete branch request.

<h2 id="tocS_DeleteDomainAssociationRequest">DeleteDomainAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainassociationrequest"></a>
<a id="schema_DeleteDomainAssociationRequest"></a>
<a id="tocSdeletedomainassociationrequest"></a>
<a id="tocsdeletedomainassociationrequest"></a>

```json
{}
```

 The request structure for the delete domain association request.

<h2 id="tocS_DeleteJobRequest">DeleteJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobrequest"></a>
<a id="schema_DeleteJobRequest"></a>
<a id="tocSdeletejobrequest"></a>
<a id="tocsdeletejobrequest"></a>

```json
{}
```

 The request structure for the delete job request.

<h2 id="tocS_JobSummary">JobSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobsummary"></a>
<a id="schema_JobSummary"></a>
<a id="tocSjobsummary"></a>
<a id="tocsjobsummary"></a>

```json
{
  "jobArn": {},
  "jobId": {},
  "commitId": {},
  "commitMessage": {},
  "commitTime": {},
  "startTime": {},
  "status": {},
  "endTime": {},
  "jobType": {}
}
```

 Describes the summary for an execution job for an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|true|none|none|
|jobId|object|true|none|none|
|commitId|object|true|none|none|
|commitMessage|object|true|none|none|
|commitTime|object|true|none|none|
|startTime|object|true|none|none|
|status|object|true|none|none|
|endTime|object|false|none|none|
|jobType|object|true|none|none|

<h2 id="tocS_WebhookId">WebhookId</h2>
<!-- backwards compatibility -->
<a id="schemawebhookid"></a>
<a id="schema_WebhookId"></a>
<a id="tocSwebhookid"></a>
<a id="tocswebhookid"></a>

```json
"string"
```

<h2 id="tocS_DeleteWebhookRequest">DeleteWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookrequest"></a>
<a id="schema_DeleteWebhookRequest"></a>
<a id="tocSdeletewebhookrequest"></a>
<a id="tocsdeletewebhookrequest"></a>

```json
{}
```

 The request structure for the delete webhook request.

<h2 id="tocS_DomainAssociationArn">DomainAssociationArn</h2>
<!-- backwards compatibility -->
<a id="schemadomainassociationarn"></a>
<a id="schema_DomainAssociationArn"></a>
<a id="tocSdomainassociationarn"></a>
<a id="tocsdomainassociationarn"></a>

```json
"string"
```

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
"PENDING_VERIFICATION"
```

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_SubDomains">SubDomains</h2>
<!-- backwards compatibility -->
<a id="schemasubdomains"></a>
<a id="schema_SubDomains"></a>
<a id="tocSsubdomains"></a>
<a id="tocssubdomains"></a>

```json
[
  {
    "subDomainSetting": {
      "prefix": {},
      "branchName": {}
    },
    "verified": {},
    "dnsRecord": {}
  }
]
```

<h2 id="tocS_DomainAssociations">DomainAssociations</h2>
<!-- backwards compatibility -->
<a id="schemadomainassociations"></a>
<a id="schema_DomainAssociations"></a>
<a id="tocSdomainassociations"></a>
<a id="tocsdomainassociations"></a>

```json
[
  {
    "domainAssociationArn": {},
    "domainName": {},
    "enableAutoSubDomain": {},
    "autoSubDomainCreationPatterns": {},
    "autoSubDomainIAMRole": {},
    "domainStatus": {},
    "statusReason": {},
    "certificateVerificationDNSRecord": {},
    "subDomains": {}
  }
]
```

<h2 id="tocS_DomainPrefix">DomainPrefix</h2>
<!-- backwards compatibility -->
<a id="schemadomainprefix"></a>
<a id="schema_DomainPrefix"></a>
<a id="tocSdomainprefix"></a>
<a id="tocsdomainprefix"></a>

```json
"string"
```

<h2 id="tocS_EndTime">EndTime</h2>
<!-- backwards compatibility -->
<a id="schemaendtime"></a>
<a id="schema_EndTime"></a>
<a id="tocSendtime"></a>
<a id="tocsendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EnvKey">EnvKey</h2>
<!-- backwards compatibility -->
<a id="schemaenvkey"></a>
<a id="schema_EnvKey"></a>
<a id="tocSenvkey"></a>
<a id="tocsenvkey"></a>

```json
"string"
```

<h2 id="tocS_FileName">FileName</h2>
<!-- backwards compatibility -->
<a id="schemafilename"></a>
<a id="schema_FileName"></a>
<a id="tocSfilename"></a>
<a id="tocsfilename"></a>

```json
"string"
```

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_GenerateAccessLogsRequest">GenerateAccessLogsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesslogsrequest"></a>
<a id="schema_GenerateAccessLogsRequest"></a>
<a id="tocSgenerateaccesslogsrequest"></a>
<a id="tocsgenerateaccesslogsrequest"></a>

```json
{
  "startTime": {},
  "endTime": {},
  "domainName": {}
}
```

 The request structure for the generate access logs request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|domainName|object|true|none|none|

<h2 id="tocS_LogUrl">LogUrl</h2>
<!-- backwards compatibility -->
<a id="schemalogurl"></a>
<a id="schema_LogUrl"></a>
<a id="tocSlogurl"></a>
<a id="tocslogurl"></a>

```json
"string"
```

<h2 id="tocS_GetAppRequest">GetAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapprequest"></a>
<a id="schema_GetAppRequest"></a>
<a id="tocSgetapprequest"></a>
<a id="tocsgetapprequest"></a>

```json
{}
```

 The request structure for the get app request.

<h2 id="tocS_GetArtifactUrlRequest">GetArtifactUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetartifacturlrequest"></a>
<a id="schema_GetArtifactUrlRequest"></a>
<a id="tocSgetartifacturlrequest"></a>
<a id="tocsgetartifacturlrequest"></a>

```json
{}
```

 Returns the request structure for the get artifact request.

<h2 id="tocS_GetBackendEnvironmentRequest">GetBackendEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendenvironmentrequest"></a>
<a id="schema_GetBackendEnvironmentRequest"></a>
<a id="tocSgetbackendenvironmentrequest"></a>
<a id="tocsgetbackendenvironmentrequest"></a>

```json
{}
```

 The request structure for the get backend environment request.

<h2 id="tocS_GetBranchRequest">GetBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbranchrequest"></a>
<a id="schema_GetBranchRequest"></a>
<a id="tocSgetbranchrequest"></a>
<a id="tocsgetbranchrequest"></a>

```json
{}
```

 The request structure for the get branch request.

<h2 id="tocS_GetDomainAssociationRequest">GetDomainAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainassociationrequest"></a>
<a id="schema_GetDomainAssociationRequest"></a>
<a id="tocSgetdomainassociationrequest"></a>
<a id="tocsgetdomainassociationrequest"></a>

```json
{}
```

 The request structure for the get domain association request.

<h2 id="tocS_GetJobRequest">GetJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobrequest"></a>
<a id="schema_GetJobRequest"></a>
<a id="tocSgetjobrequest"></a>
<a id="tocsgetjobrequest"></a>

```json
{}
```

 The request structure for the get job request.

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "summary": {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  },
  "steps": {}
}
```

 Describes an execution job for an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|true|none|none|
|steps|object|true|none|none|

<h2 id="tocS_GetWebhookRequest">GetWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookrequest"></a>
<a id="schema_GetWebhookRequest"></a>
<a id="tocSgetwebhookrequest"></a>
<a id="tocsgetwebhookrequest"></a>

```json
{}
```

 The request structure for the get webhook request.

<h2 id="tocS_Steps">Steps</h2>
<!-- backwards compatibility -->
<a id="schemasteps"></a>
<a id="schema_Steps"></a>
<a id="tocSsteps"></a>
<a id="tocssteps"></a>

```json
[
  {
    "stepName": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "logUrl": {},
    "artifactsUrl": {},
    "testArtifactsUrl": {},
    "testConfigUrl": {},
    "screenshots": {
      "property1": "string",
      "property2": "string"
    },
    "statusReason": {},
    "context": {}
  }
]
```

<h2 id="tocS_JobArn">JobArn</h2>
<!-- backwards compatibility -->
<a id="schemajobarn"></a>
<a id="schema_JobArn"></a>
<a id="tocSjobarn"></a>
<a id="tocsjobarn"></a>

```json
"string"
```

<h2 id="tocS_JobReason">JobReason</h2>
<!-- backwards compatibility -->
<a id="schemajobreason"></a>
<a id="schema_JobReason"></a>
<a id="tocSjobreason"></a>
<a id="tocsjobreason"></a>

```json
"string"
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_JobSummaries">JobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemajobsummaries"></a>
<a id="schema_JobSummaries"></a>
<a id="tocSjobsummaries"></a>
<a id="tocsjobsummaries"></a>

```json
[
  {
    "jobArn": {},
    "jobId": {},
    "commitId": {},
    "commitMessage": {},
    "commitTime": {},
    "startTime": {},
    "status": {},
    "endTime": {},
    "jobType": {}
  }
]
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"RELEASE"
```

<h2 id="tocS_LastDeployTime">LastDeployTime</h2>
<!-- backwards compatibility -->
<a id="schemalastdeploytime"></a>
<a id="schema_LastDeployTime"></a>
<a id="tocSlastdeploytime"></a>
<a id="tocslastdeploytime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_ListAppsRequest">ListAppsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappsrequest"></a>
<a id="schema_ListAppsRequest"></a>
<a id="tocSlistappsrequest"></a>
<a id="tocslistappsrequest"></a>

```json
{}
```

 The request structure for the list apps request.

<h2 id="tocS_ListArtifactsRequest">ListArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistartifactsrequest"></a>
<a id="schema_ListArtifactsRequest"></a>
<a id="tocSlistartifactsrequest"></a>
<a id="tocslistartifactsrequest"></a>

```json
{}
```

 Describes the request structure for the list artifacts request.

<h2 id="tocS_ListBackendEnvironmentsRequest">ListBackendEnvironmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbackendenvironmentsrequest"></a>
<a id="schema_ListBackendEnvironmentsRequest"></a>
<a id="tocSlistbackendenvironmentsrequest"></a>
<a id="tocslistbackendenvironmentsrequest"></a>

```json
{}
```

 The request structure for the list backend environments request.

<h2 id="tocS_ListBranchesRequest">ListBranchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbranchesrequest"></a>
<a id="schema_ListBranchesRequest"></a>
<a id="tocSlistbranchesrequest"></a>
<a id="tocslistbranchesrequest"></a>

```json
{}
```

 The request structure for the list branches request.

<h2 id="tocS_ListDomainAssociationsRequest">ListDomainAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainassociationsrequest"></a>
<a id="schema_ListDomainAssociationsRequest"></a>
<a id="tocSlistdomainassociationsrequest"></a>
<a id="tocslistdomainassociationsrequest"></a>

```json
{}
```

 The request structure for the list domain associations request.

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{}
```

 The request structure for the list jobs request.

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

 The request structure to use to list tags for a resource.

<h2 id="tocS_ListWebhooksRequest">ListWebhooksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksrequest"></a>
<a id="schema_ListWebhooksRequest"></a>
<a id="tocSlistwebhooksrequest"></a>
<a id="tocslistwebhooksrequest"></a>

```json
{}
```

 The request structure for the list webhooks request.

<h2 id="tocS_Webhooks">Webhooks</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks"></a>
<a id="schema_Webhooks"></a>
<a id="tocSwebhooks"></a>
<a id="tocswebhooks"></a>

```json
[
  {
    "webhookArn": {},
    "webhookId": {},
    "webhookUrl": {},
    "branchName": {},
    "description": {},
    "createTime": {},
    "updateTime": {}
  }
]
```

<h2 id="tocS_Screenshots">Screenshots</h2>
<!-- backwards compatibility -->
<a id="schemascreenshots"></a>
<a id="schema_Screenshots"></a>
<a id="tocSscreenshots"></a>
<a id="tocsscreenshots"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ThumbnailUrl](#schemathumbnailurl)|false|none|none|

<h2 id="tocS_SourceUrl">SourceUrl</h2>
<!-- backwards compatibility -->
<a id="schemasourceurl"></a>
<a id="schema_SourceUrl"></a>
<a id="tocSsourceurl"></a>
<a id="tocssourceurl"></a>

```json
"string"
```

<h2 id="tocS_StartDeploymentRequest">StartDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdeploymentrequest"></a>
<a id="schema_StartDeploymentRequest"></a>
<a id="tocSstartdeploymentrequest"></a>
<a id="tocsstartdeploymentrequest"></a>

```json
{
  "jobId": {},
  "sourceUrl": {}
}
```

 The request structure for the start a deployment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|sourceUrl|object|false|none|none|

<h2 id="tocS_StartJobRequest">StartJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrequest"></a>
<a id="schema_StartJobRequest"></a>
<a id="tocSstartjobrequest"></a>
<a id="tocsstartjobrequest"></a>

```json
{
  "jobId": {},
  "jobType": {},
  "jobReason": {},
  "commitId": {},
  "commitMessage": {},
  "commitTime": {}
}
```

 The request structure for the start job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|jobType|object|true|none|none|
|jobReason|object|false|none|none|
|commitId|object|false|none|none|
|commitMessage|object|false|none|none|
|commitTime|object|false|none|none|

<h2 id="tocS_StepName">StepName</h2>
<!-- backwards compatibility -->
<a id="schemastepname"></a>
<a id="schema_StepName"></a>
<a id="tocSstepname"></a>
<a id="tocsstepname"></a>

```json
"string"
```

<h2 id="tocS_TestArtifactsUrl">TestArtifactsUrl</h2>
<!-- backwards compatibility -->
<a id="schematestartifactsurl"></a>
<a id="schema_TestArtifactsUrl"></a>
<a id="tocStestartifactsurl"></a>
<a id="tocstestartifactsurl"></a>

```json
"string"
```

<h2 id="tocS_TestConfigUrl">TestConfigUrl</h2>
<!-- backwards compatibility -->
<a id="schematestconfigurl"></a>
<a id="schema_TestConfigUrl"></a>
<a id="tocStestconfigurl"></a>
<a id="tocstestconfigurl"></a>

```json
"string"
```

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "stepName": {},
  "startTime": {},
  "status": {},
  "endTime": {},
  "logUrl": {},
  "artifactsUrl": {},
  "testArtifactsUrl": {},
  "testConfigUrl": {},
  "screenshots": {
    "property1": "string",
    "property2": "string"
  },
  "statusReason": {},
  "context": {}
}
```

 Describes an execution step, for an execution job, for an Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stepName|object|true|none|none|
|startTime|object|true|none|none|
|status|object|true|none|none|
|endTime|object|true|none|none|
|logUrl|object|false|none|none|
|artifactsUrl|object|false|none|none|
|testArtifactsUrl|object|false|none|none|
|testConfigUrl|object|false|none|none|
|screenshots|object|false|none|none|
|statusReason|object|false|none|none|
|context|object|false|none|none|

<h2 id="tocS_StopJobRequest">StopJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopjobrequest"></a>
<a id="schema_StopJobRequest"></a>
<a id="tocSstopjobrequest"></a>
<a id="tocsstopjobrequest"></a>

```json
{}
```

 The request structure for the stop job request.

<h2 id="tocS_Verified">Verified</h2>
<!-- backwards compatibility -->
<a id="schemaverified"></a>
<a id="schema_Verified"></a>
<a id="tocSverified"></a>
<a id="tocsverified"></a>

```json
true
```

<h2 id="tocS_SubDomain">SubDomain</h2>
<!-- backwards compatibility -->
<a id="schemasubdomain"></a>
<a id="schema_SubDomain"></a>
<a id="tocSsubdomain"></a>
<a id="tocssubdomain"></a>

```json
{
  "subDomainSetting": {
    "prefix": {},
    "branchName": {}
  },
  "verified": {},
  "dnsRecord": {}
}
```

 The subdomain for the domain association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subDomainSetting|object|true|none|none|
|verified|object|true|none|none|
|dnsRecord|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

 The request structure to tag a resource with a tag key and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_ThumbnailName">ThumbnailName</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailname"></a>
<a id="schema_ThumbnailName"></a>
<a id="tocSthumbnailname"></a>
<a id="tocsthumbnailname"></a>

```json
"string"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

 The request structure for the untag resource request.

<h2 id="tocS_UpdateAppRequest">UpdateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprequest"></a>
<a id="schema_UpdateAppRequest"></a>
<a id="tocSupdateapprequest"></a>
<a id="tocsupdateapprequest"></a>

```json
{
  "name": {},
  "description": {},
  "platform": {},
  "iamServiceRoleArn": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "enableBranchAutoBuild": {},
  "enableBranchAutoDeletion": {},
  "enableBasicAuth": {},
  "basicAuthCredentials": {},
  "customRules": {},
  "buildSpec": {},
  "customHeaders": {},
  "enableAutoBranchCreation": {},
  "autoBranchCreationPatterns": {},
  "autoBranchCreationConfig": {
    "stage": {},
    "framework": {},
    "enableAutoBuild": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "basicAuthCredentials": {},
    "enableBasicAuth": {},
    "enablePerformanceMode": {},
    "buildSpec": {},
    "enablePullRequestPreview": {},
    "pullRequestEnvironmentName": {}
  },
  "repository": {},
  "oauthToken": {},
  "accessToken": {}
}
```

 The request structure for the update app request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|platform|object|false|none|none|
|iamServiceRoleArn|object|false|none|none|
|environmentVariables|object|false|none|none|
|enableBranchAutoBuild|object|false|none|none|
|enableBranchAutoDeletion|object|false|none|none|
|enableBasicAuth|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|customRules|object|false|none|none|
|buildSpec|object|false|none|none|
|customHeaders|object|false|none|none|
|enableAutoBranchCreation|object|false|none|none|
|autoBranchCreationPatterns|object|false|none|none|
|autoBranchCreationConfig|object|false|none|none|
|repository|object|false|none|none|
|oauthToken|object|false|none|none|
|accessToken|object|false|none|none|

<h2 id="tocS_UpdateBranchRequest">UpdateBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebranchrequest"></a>
<a id="schema_UpdateBranchRequest"></a>
<a id="tocSupdatebranchrequest"></a>
<a id="tocsupdatebranchrequest"></a>

```json
{
  "description": {},
  "framework": {},
  "stage": {},
  "enableNotification": {},
  "enableAutoBuild": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "basicAuthCredentials": {},
  "enableBasicAuth": {},
  "enablePerformanceMode": {},
  "buildSpec": {},
  "ttl": {},
  "displayName": {},
  "enablePullRequestPreview": {},
  "pullRequestEnvironmentName": {},
  "backendEnvironmentArn": {}
}
```

 The request structure for the update branch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|framework|object|false|none|none|
|stage|object|false|none|none|
|enableNotification|object|false|none|none|
|enableAutoBuild|object|false|none|none|
|environmentVariables|object|false|none|none|
|basicAuthCredentials|object|false|none|none|
|enableBasicAuth|object|false|none|none|
|enablePerformanceMode|object|false|none|none|
|buildSpec|object|false|none|none|
|ttl|object|false|none|none|
|displayName|object|false|none|none|
|enablePullRequestPreview|object|false|none|none|
|pullRequestEnvironmentName|object|false|none|none|
|backendEnvironmentArn|object|false|none|none|

<h2 id="tocS_UpdateDomainAssociationRequest">UpdateDomainAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainassociationrequest"></a>
<a id="schema_UpdateDomainAssociationRequest"></a>
<a id="tocSupdatedomainassociationrequest"></a>
<a id="tocsupdatedomainassociationrequest"></a>

```json
{
  "enableAutoSubDomain": {},
  "subDomainSettings": {},
  "autoSubDomainCreationPatterns": {},
  "autoSubDomainIAMRole": {}
}
```

 The request structure for the update domain association request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableAutoSubDomain|object|false|none|none|
|subDomainSettings|object|false|none|none|
|autoSubDomainCreationPatterns|object|false|none|none|
|autoSubDomainIAMRole|object|false|none|none|

<h2 id="tocS_UpdateWebhookRequest">UpdateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_UpdateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "branchName": {},
  "description": {}
}
```

 The request structure for the update webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_WebhookArn">WebhookArn</h2>
<!-- backwards compatibility -->
<a id="schemawebhookarn"></a>
<a id="schema_WebhookArn"></a>
<a id="tocSwebhookarn"></a>
<a id="tocswebhookarn"></a>

```json
"string"
```

<h2 id="tocS_WebhookUrl">WebhookUrl</h2>
<!-- backwards compatibility -->
<a id="schemawebhookurl"></a>
<a id="schema_WebhookUrl"></a>
<a id="tocSwebhookurl"></a>
<a id="tocswebhookurl"></a>

```json
"string"
```
