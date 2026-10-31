<h1 id="lgtm-api-specification">LGTM API specification v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The REST API for LGTM provides data so that you can customize how you integrate LGTM analysis into your workflow. It includes the following resources:
  * `/` ([API root](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-API-root))&mdash;get version information or download the specification in OpenAPI format.
  * `/projects` ([Projects](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Projects))&mdash;list projects, get a summary of the current status for a project, or add new projects.
  * `/analyses` ([Analyses](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Analyses))&mdash;get a summary of results, download all the alerts, or trigger analysis for a specific commit.
  * `/codereviews` ([Code reviews](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Code-reviews))&mdash;trigger code review for a patch, and view the results.
  * `/operations` ([Operations](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Operations))&mdash;get information about long-running tasks, for example, analyses or code reviews that you've requested.
  * `/snapshots` ([Snapshots](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Snapshots))&mdash;download and upload databases representing a snapshot of a codebase.
  * `/queryjobs` ([Query jobs](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-Query-jobs))&mdash;submit queries to evaluate against existing projects, and download their results.
  * `/system` ([System](https://lgtm.com/help/lgtm/api/api-v1#LGTM-API-specification-System))&mdash;get information on the health or usage of the system.

For an overview and getting started topics, see [API for LGTM](https://lgtm.com/help/lgtm/api/api-for-lgtm).

Base URLs:

* <a href="https://lgtm.com/api/v1.0">https://lgtm.com/api/v1.0</a>

# Authentication

- HTTP Authentication, scheme: bearer 

LGTM Enterprise users need to create and use an access token to authenticate with this API. This is optional for LGTM.com users unless they want to submit a CodeQL query for analysis of one or more projects, or to request the analysis of a patch or commit. LGTM.com users also need an access token to  check on the progress of long running tasks using the `/operations` endpoint.
Log in to LGTM and use the **Create token** option in your Account settings page. For more detailed information, see [Authentication with the API](https://lgtm.com/help/lgtm/api/authentication-api) and [Managing access tokens](https://lgtm.com/help/lgtm/api/managing-access-tokens).
If you include an access token in the header of a request to the API  for data, it must have the scopes required by that endpoint. Access tokens are shown in the examples as: `Authorization: Bearer {access-token}`

<h1 id="lgtm-api-specification-api-root">API root</h1>

The `/` endpoints are used to get information about the API:
  * [Get the API version number](https://lgtm.com/help/lgtm/api/api-v1#opIdgetVersion) for the LGTM server.
  * [View the API specification](https://lgtm.com/help/lgtm/api/api-v1#opIdgetSpec) in [OpenAPI format](https://github.com/OAI/OpenAPI-Specification).


## Version information

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /`

Get the version information of this API.

> Example responses

> 200 Response

```json
{
  "apiVersion": "1.0"
}
```

<h3 id="version-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## API specification

<a id="opIdgetSpec"></a>

> Code samples

```bash
curl https://example.com/openapi \
  -H 'Accept: application/json'
```

`GET /openapi`

Get the specification of this API in [OpenAPI](https://github.com/OAI/OpenAPI-Specification) format. This endpoint does not require an access token. This makes it easier for you to use the specification with third-party tools.

> Example responses

> 200 Response

```json
{}
```

<h3 id="api-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lgtm-api-specification-projects">Projects</h1>

The `/projects` endpoints are used to interact with projects:
  * [List the projects](https://lgtm.com/help/lgtm/api/api-v1#opIdgetProjects) available to the current user.
  * Get the latest summary for a specific project [by identifier](https://lgtm.com/help/lgtm/api/api-v1#opIdgetProject), 
  or by [URL identifier](https://lgtm.com/help/lgtm/api/api-v1#opIdgetProjectByUrlIdentifier).
  * LGTM administrators only, [add projects](https://lgtm.com/help/lgtm/api/api-v1#opIdaddProject) to LGTM.


## List projects

<a id="opIdgetProjects"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects`

List all the projects the current user has authorization to view. 

A maximum of 100 projects are returned in each response. When further results are available, the response includes the URL you need to request the next page of results.

Use the optional parameter, `limit`, to change the number of results reported in each response (range of 1&mdash;100). If you supply an invalid value for this  parameter, the default value of 100 is used.

When more than one page of results is available, each response includes a `nextPageUrl` response parameter. You can use this URL to request the next page of results. The `nextPageUrl` includes an automatically generated `start` parameter, which specifies the projects to return in the next page of results.


<h3 id="list-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The maximum number of projects to return in each response (1-100).|
|start|query|string|false|An opaque identifier generated by the API.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1234567,
      "name": "Apache Commons IO",
      "url": "https://lgtm.example.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    },
    {
      "id": 1234567,
      "name": "Apache Commons IO",
      "url": "https://lgtm.example.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    }
  ],
  "nextPageUrl": "https://lgtm.example.com/api/v1.0/projects?start=AVAIySnWtmGBpZjIb27kbrqB2uK2HIU0Zk9Sfh19ya8nxzA4GE5bv9LxVPSjQCwHKThqAADNvp17WuWBuBe8901G-ryeA2tLD6JZh8lue2IM0EuqsqB9Wk5BAM6T0lEnXA"
}
```

<h3 id="list-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[project-list](#schemaproject-list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Add a project to LGTM

<a id="opIdaddProject"></a>

> Code samples

```bash
curl 'https://example.com/projects?repository=http%3A%2F%2Fexample.com' \
  -X POST \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"extraction":{"java":{"index":{"build_command":"./build.sh"}}}}'
```

`POST /projects`

LGTM administrators can add a new project to LGTM by providing a repository URL. By default, LGTM tries to build and analyze the project in the same way as for projects added through the user interface. If at least one language is successfully analyzed, and the repository doesn't already exist on LGTM, a new project is created. If the project already exists but your API call triggers a successful analysis  of additional languages, LGTM adds those languages to the project.

You can configure how LGTM processes the project using query parameters to:
  * Specify the languages to analyze.
  * Create a new project in [sparse mode](https://help.semmle.com/lgtm-enterprise/user/help/analysis-faqs.html#what-is-sparse-analysis).
  * Create a new project in [upload mode](https://help.semmle.com/lgtm-enterprise/user/help/analysis-faqs.html#what-is-upload-analysis) to analyze externally-generated databases. Each database represents a snapshot of the codebase. 
  Use this option when you want to upload databases that were generated by the CodeQL CLI (or the QL command-line tools).
  The version of the command line used to generate the database
  must be the same version as LGTM Enterprise. 

With any of these options, you can also include an `lgtm.yml` in the body of the request to [customize extraction](https://lgtm.com/help/lgtm/customizing-code-extraction).


> Body parameter

```json
{
  "extraction": {
    "java": {
      "index": {
        "build_command": "./build.sh"
      }
    }
  }
}
```

<h3 id="add-a-project-to-lgtm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repository|query|string(uri)|true|The URL of the repository to analyze.<br>LGTM tests this against the [repository providers](https://lgtm.com/admin/help/adding-repository-providers) defined for the system. If it doesn't match any of them, the request fails.|
|language|query|[string]|false|Optional, a [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) to specify which language to analyze.<br>To request the analysis of more than one language, specify a query parameter for each language. By default, LGTM tries to analyze all supported languages.<br>|
|mode|query|string|false|The analysis mode of the new project.<br>When set to `full` all commits of the project are analyzed; when set to `sparse` the latest commit of the project is analyzed periodically; when set to `upload`,  no automatic analysis is performed, instead externally-generated databases should be uploaded.<br>For new projects the default value is `full`. The `mode` parameter cannot be used to change the analysis mode of existing projects. Therefore, for existing projects, it should either be left blank or set to match the analysis mode of the project.<br>|
|commit|query|string|false|Required when `mode=upload`, specify the identifier of the commit used to generate the database.|
|date|query|string(date-time)|false|Optional when `mode=upload`, specify the date and time of the commit used to generate the database; defaults to the current time.|
|worker-label|query|[string]|false|Optional, any [labels](https://lgtm.com/admin/help/defining-worker-labels) required by workers to analyze this project. <br>To specify more than one label, repeat the query parameter.<br>|
|body|body|string|false|An optional [lgtm.yml project configuration](https://lgtm.com/help/lgtm/lgtm.yml-configuration-file) file to customize the LGTM code analysis and results display for the project.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|full|
|mode|sparse|
|mode|upload|

> Example responses

> 202 Response

```json
{
  "id": 1548865134385,
  "status": "pending",
  "task-result": {
    "commit-id": "c103e89d2151a9f83a1bab59e112a4bc41a8050d",
    "languages": [
      {
        "language": "java",
        "status": "pending"
      },
      {
        "language": "javascript",
        "status": "pending"
      }
    ],
    "log-url": "https://lgtm.example.com/logs/a5cfe527b55cecc91c45dba658775d482177495b"
  },
  "task-type": "analysis",
  "uploads": {
    "java": {
      "id": "755e8beb6f33c1e7e6a70f8a30dfc0a2d62bbb70e2912e9668a563f21bbcd9fb",
      "url": "https://lgtm.example.com/api/v1.0/snapshots/uploads/755e8beb6f33c1e7e6a70f8a30dfc0a2d62bbb70e2912e9668a563f21bbcd9fb"
    },
    "javascript": {
      "id": "a8dcd65757901312f53f55d1cde2461a280309683fe99b0b3982f47e8adb9a49",
      "url": "https://lgtm.example.com/api/v1.0/snapshots/uploads/a8dcd65757901312f53f55d1cde2461a280309683fe99b0b3982f47e8adb9a49"
    }
  }
}
```

<h3 id="add-a-project-to-lgtm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Analysis attempts triggered or upload URLs returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get project by numeric identifier

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/projects/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project-id}`

Get the latest summary for a specific project using the numeric project identifier.

To find the LGTM identifier for a project, list all projects using the `/projects`  endpoint and look up the project by name. Alternatively, use the `/projects/{provider}/{org}/{name}` endpoint. If you have administration access, the project identifier is also displayed in  the administration page for the project.


<h3 id="get-project-by-numeric-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier|

> Example responses

> 200 Response

```json
{
  "id": 1234567,
  "name": "Apache Commons IO",
  "url": "https://lgtm.example.com/projects/g/apache/commons-io",
  "url-identifier": "g/apache/commons-io",
  "languages": [
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success",
      "grade": "A+"
    }
  ]
}
```

<h3 id="get-project-by-numeric-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[project-details](#schemaproject-details)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Delete project by numeric identifier

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl https://example.com/projects/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project-id}`

Delete a project with a particular numeric project identifier.
In addition to access to the project, administrative access to LGTM or the LGTM Enterprise instance is required to delete projects.


<h3 id="delete-project-by-numeric-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier|

> Example responses

> 200 Response

```json
{
  "id": 1234567,
  "name": "Apache Commons IO",
  "url": "https://lgtm.example.com/projects/g/apache/commons-io",
  "url-identifier": "g/apache/commons-io",
  "languages": [
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success",
      "grade": "A+"
    }
  ]
}
```

<h3 id="delete-project-by-numeric-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Details of the deleted project returned.|[project-details](#schemaproject-details)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get configuration for a project identified by numeric identifier

<a id="opIdgetProjectConfig"></a>

> Code samples

```bash
curl https://example.com/projects/0/settings/analysis-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project-id}/settings/analysis-configuration`

Get the latest configuration for a specific project using the numeric project identifier.

<h3 id="get-configuration-for-a-project-identified-by-numeric-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier|
|source|query|string|false|The type of project configuration to retrieve.<br>If this parameter isn't specified, the request retrieves the effective configuration. That is, the configuration that is actually applied to the project, which may be from:<br>* the repository<br>* the administrator-set, project configuration<br>* the global configuration.<br><br>If you do specify this value, it must be one of:<br><br> * `repository` to retrieve the configuration specified by a YAML file in the repository. A 404 status is returned if there is no repository configuration. <br><br> * `administrator` to retrieve the administrator-set, project configuration. A 404 status is returned if there is no administrator configuration.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|repository|
|source|administrator|

> Example responses

> 400 Response

```json
{}
```

<h3 id="get-configuration-for-a-project-identified-by-numeric-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|Inline|
|400|Bad Request|Only YAML is supported.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Set the administrator configuration for a project identified by numeric identifier

<a id="opIdsetProjectConfig"></a>

> Code samples

```bash
curl https://example.com/projects/0/settings/analysis-configuration \
  -X PUT \
  -H 'Content-Type: application/x-yaml' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'path_classifiers:
  test:
    - test'
```

`PUT /projects/{project-id}/settings/analysis-configuration`

Set the administrator configuration for a specific project using the numeric project identifier.

> Body parameter

```text
path_classifiers:
  test:
    - test
```

<h3 id="set-the-administrator-configuration-for-a-project-identified-by-numeric-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier|
|body|body|string|true|The project configuration to set. Note that this only sets the administrator project configuration. It can be overridden by the repository configuration.<br>In addition to access to the project, administrative access to LGTM or the LGTM Enterprise instance is required to set administrator project configurations.<br>|

<h3 id="set-the-administrator-configuration-for-a-project-identified-by-numeric-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. The new effective project configuration is returned.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get project by URL identifier

<a id="opIdgetProjectByUrlIdentifier"></a>

> Code samples

```bash
curl https://example.com/projects/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{provider}/{org}/{name}`

Get the latest summary for a specific project using the project's URL identifier `{provider}/{org}/{name}`.

To find the URL identifier for a project, view the project overview page in LGTM. The URL identifier follows after `/projects`. For example, for a project with the URL `https://lgtm.example.com/projects/g/apache/commons-io` the URL identifier is `g/apache/commons-io`. In the example, `g` represents the `provider` (repository host), `apache` is the `organization` and `commons-io` is the `name` of the repository.


<h3 id="get-project-by-url-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The first part of the URL identifier of a project, which represents the repository host.|
|org|path|string|true|The second part of the URL identifier of a project, the organization.|
|name|path|string|true|The third part of the URL identifier of a project, the repository name.|

> Example responses

> 200 Response

```json
{
  "id": 1234567,
  "name": "Apache Commons IO",
  "url": "https://lgtm.example.com/projects/g/apache/commons-io",
  "url-identifier": "g/apache/commons-io",
  "languages": [
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success",
      "grade": "A+"
    }
  ]
}
```

<h3 id="get-project-by-url-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[project-details](#schemaproject-details)|
|307|Temporary Redirect|Redirect. The project has been renamed. Request redirected to numeric identifier for the project.<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-analyses">Analyses</h1>

Most of the `/analyses` endpoints are used to retrieve the results of analyzing a commit:
  * [Get the *analysis* identifier and results summary for the latest or a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit).
  * [Get the *commit* identifier and results summary for a specific analysis](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysis).
  * [Download the full results for a specific analysis](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).

 You can also use this end point to trigger the analysis of a commit that hasn't previously been analyzed.
 For more information, see [Run analysis of a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdrequestAnalysis).


## Get analysis summary

<a id="opIdgetAnalysis"></a>

> Code samples

```bash
curl https://example.com/analyses/stringstringstringstringstringstringstri \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analyses/{analysis-id}`

Get a summary of the analysis results for a specific analysis identifier.

To find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}` endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit).

This endpoint reports the commit analyzed and a summary of the results for each language. Alternatively, you can use this identifier to download full details  of all the alerts found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).


<h3 id="get-analysis-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analysis-id|path|string|true|The analysis identifier.|

> Example responses

> 200 Response

```json
{
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "id": "2e65208b2f1872634132566a1a0ce6392407297c",
  "languages": [
    {
      "alerts": 139,
      "language": "java",
      "lines": 101498,
      "status": "success"
    },
    {
      "alerts": 9,
      "language": "javascript",
      "lines": 773,
      "status": "success"
    }
  ],
  "log-url": "https://lgtm.example.com/projects/g/apache/struts/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c",
  "project": {
    "id": 123456789,
    "name": "Apache Struts",
    "url": "https://lgtm.example.com/projects/g/apache/struts",
    "url-identifier": "g/apache/struts"
  },
  "results-url": "https://lgtm.example.com/projects/g/apache/struts/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files"
}
```

<h3 id="get-analysis-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[analysis](#schemaanalysis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get detailed alert information

<a id="opIdgetAlerts"></a>

> Code samples

```bash
curl https://example.com/analyses/string/alerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analyses/{analysis-id}/alerts`

Download all the alerts found by an analysis.
Use the `Accept:` request header to specify the output media type as either CSV or [SARIF](https://lgtm.com/help/lgtm/sarif-results-file): 

- `application/sarif+json`: Alerts in SARIF format. If no version is specified the latest supported SARIF version is used.
- `application/json`: Alerts in SARIF format (*deprecated*). 
  If no version is specified, [SARIF 2.0.0](http://docs.oasis-open.org/sarif/sarif/v2.0/sarif-v2.0.html) 
  is used for backwards compatibility.

- `text/csv`: Alerts in CSV format. The `text/csv` media type has two optional parameters:
   - `charset`: determines the character encoding of the text, by default UTF-8.
   - `header`: determines whether a header row with column names is `present` or `absent`.
      The default value for this parameter is `present`.
      For example, an Accept header with value `text/csv; header=absent` 
      would result in CSV output without a header row.
    



To find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}`  endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit). 


<h3 id="get-detailed-alert-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analysis-id|path|string|true|The analysis identifier.|
|sarif-version|query|string|false|The desired version of the SARIF format. Currently supported versions are `1.0.0`, `2.0.0`, and `2.1.0`.|
|excluded-files|query|boolean|false|Set `true` to include results in files that are excluded from the output by default. This includes results in test code and generated files. For more information, see [File classification](https://lgtm.com/help/lgtm/file-classification).|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-detailed-alert-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Run analysis of a specific commit

<a id="opIdrequestAnalysis"></a>

> Code samples

```bash
curl 'https://example.com/analyses/0?commit=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /analyses/{project-id}`

Trigger the analysis of a specific commit to a project. If a previous attempt to analyze that commit failed, this triggers a fresh analysis.  This is supported for all LGTM projects, regardless of repository type or host. The commit must be available in the main repository, but can be on a branch that isn't tracked by LGTM. For both LGTM.com and LGTM Enterprise, you must include an access token with the `analyses:write` scope.

When you request the analysis of a commit, the API returns:
- `operation-id`: used to track the status of the task using the `/operations` endpoint. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation).
- `status`: initially pending.
- `task-result`: containing information about the progress and results of the analysis.


<h3 id="run-analysis-of-a-specific-commit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|commit|query|string|true|The identifier of the commit to analyze.|
|language|query|[string]|false|The language codes of the languages to analyze.<br>For a list of available languages, see [Supported languages](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported). To specify more than one language, this parameter can be repeated. If no language is specified, all the project's languages will be analyzed.<br>|

> Example responses

> 202 Response

```json
{
  "id": 1508906426111,
  "status": "pending",
  "task-result": {
    "commit-id": "559de2c461e94ab636c959149c775bb27111fb48",
    "id": "3d5a71d2b87880432aadb8166e79f984b3611fda",
    "languages": [
      {
        "language": "javascript",
        "status": "pending"
      },
      {
        "language": "java",
        "status": "pending"
      }
    ],
    "log-url": "https://lgtm.com/projects/g/apache/commons-io/logs/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda",
    "project": {
      "id": 38901173,
      "name": "apache/commons-io",
      "url": "https://lgtm.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    },
    "results-url": "https://lgtm.com/projects/g/apache/commons-io/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda/files"
  },
  "task-result-url": "https://lgtm.com/api/v1.0/analyses/3d5a71d2b87880432aadb8166e79f984b3611fda",
  "task-type": "analysis"
}
```

<h3 id="run-analysis-of-a-specific-commit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Analysis triggered. Tracking data returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get analysis summary for a specific commit

<a id="opIdgetAnalysisForCommit"></a>

> Code samples

```bash
curl https://example.com/analyses/0/commits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analyses/{project-id}/commits/{commit-id}`

Get a summary of the analysis results for a specific commit, or the latest commit, to a project. (For projects configured for sparse or upload analysis, only `latest` is supported.) 

This endpoint reports a summary of results for each language, and also the analysis identifier. You can use the analysis identifier to download full details of all the alerts  found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).


<h3 id="get-analysis-summary-for-a-specific-commit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|commit-id|path|string|true|The identifier of a specific commit. Alternatively, use `latest` for the most recent analyzed commit.|

> Example responses

> 200 Response

```json
{
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "id": "2e65208b2f1872634132566a1a0ce6392407297c",
  "languages": [
    {
      "alerts": 139,
      "language": "java",
      "lines": 101498,
      "status": "success"
    },
    {
      "alerts": 9,
      "language": "javascript",
      "lines": 773,
      "status": "success"
    }
  ],
  "log-url": "https://lgtm.example.com/projects/g/apache/struts/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c",
  "project": {
    "id": 123456789,
    "name": "Apache Struts",
    "url": "https://lgtm.example.com/projects/g/apache/struts",
    "url-identifier": "g/apache/struts"
  },
  "results-url": "https://lgtm.example.com/projects/g/apache/struts/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files"
}
```

<h3 id="get-analysis-summary-for-a-specific-commit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Data returned.|[analysis](#schemaanalysis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-code-reviews">Code reviews</h1>

The `/codereviews` endpoint is used to trigger a patch code review and request the results:
  * [Trigger the review of a patch](https://lgtm.com/help/lgtm/api/api-v1#opIdrequestReview).
  * [Get the results of a completed code review](https://lgtm.com/help/lgtm/api/api-v1#opIdgetCodeReview).


## Run code review for a patch

<a id="opIdrequestReview"></a>

> Code samples

```bash
curl 'https://example.com/codereviews/0?base=string&external-id=integer' \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'The contents of a binary patch file'
```

`POST /codereviews/{project-id}`

Trigger the code review of a patch. This is available for projects with Git repositories.

Your request must include:

  * Identifier for the base commit
  * Patch generated using `git diff --binary` (see [git diff](https://git-scm.com/docs/git-diff))
  * Header `Content-Type: application/octet-stream`
  * For both LGTM.com and LGTM Enterprise, an access token with the `codereviews:write` scope

Note that if you make a request using Curl, you'll also need to add `--data-binary` to the request to ensure that the patch you supply in the body is sent with newlines unchanged.
You can track the progress of the review using the task result URL returned on creation of the task, or by calling the `/operations` endpoint with the operations identifier returned by the request. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation). Alternatively, if you supply a callback URL you'll get a post-back automatically on completion of the review.

When the review is complete, you can access the results using the task result URL.


> Body parameter

```text
The contents of a binary patch file
```

<h3 id="run-code-review-for-a-patch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|base|query|string|true|The identifier for the base commit.|
|external-id|query|integer(int32)|true|Your reference number for the code review.|
|review-url|query|string|false|An informative back-link to an external system.|
|callback-url|query|string|false|The callback URL for LGTM to post to on completion of the review.<br>When the code review is complete, the API sends an HTTP POST request to the callback URL with the result of the code review in the request body. The code review results in the request body are identical to the results accessed through the [`/codereviews/{review-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIdgetCodeReview) end-point.<br>If you specify a `callback-secret`, the request also includes an `x-lgtm-signature` header with a digital signature of the request's contents.<br>|
|callback-secret|query|string|false|The `callback-secret` is used to compute a signature which is included in the `x-lgtm-signature` header of the callback response.<br>The receiver of the callback can check the validity of the response by computing the signature using HMAC-SHA1 and verifying that it matches the `x-lgtm-signature` header value.<br>The HMAC algorithm requires byte sequences as inputs for both the secret and the message. The callback secret string must be converted to bytes using UTF-8 encoding. The response body should ideally be read as a plain byte sequence. Conversion to, for example a JSON object, and back to a byte sequence might change the formatting, and would invalidate the signature.<br>|
|body|body|string(binary)|true|The patch containing the code changes for review.|

> Example responses

> 202 Response

```json
{
  "id": 1000013,
  "status": "pending",
  "task-result": {
    "id": "e866b685a22f5d644a3dc1c9c145f56aab7d4350",
    "languages": [
      {
        "alerts": [],
        "fixed": 0,
        "language": "javascript",
        "new": 0,
        "status": "pending",
        "status-message": "Starting up"
      }
    ],
    "results-url": "https://lgtm.com/projects/g/Semmle/code/rev/pr-e866b685a22f5d644a3dc1c9c145f56aab7d4350",
    "status": "pending",
    "status-message": "Starting up"
  },
  "task-result-url": "https://lgtm.com/api/v1.0/codereviews/e866b685a22f5d644a3dc1c9c145f56aab7d4350",
  "task-type": "codereview"
}
```

<h3 id="run-code-review-for-a-patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Code review triggered. Tracking data returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get results of code review

<a id="opIdgetCodeReview"></a>

> Code samples

```bash
curl https://example.com/codereviews/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /codereviews/{review-id}`

Get the results of a code review using the review identifier for the task.

When you request a code review, the response includes a task result URL of the form: `/codereviews/{review-id}`.

This endpoint reports the results of a complete code review, or the status of a review  that's still in progress.


<h3 id="get-results-of-code-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|review-id|path|string|true|The identifier for the review (from the `task-result-url`).|

> Example responses

> 200 Response

```json
{
  "id": "b45e291e7033460949ec986153c5416d22157d3e",
  "languages": [
    {
      "alerts": [
        {
          "fixed": 1,
          "new": 0,
          "query": {
            "id": 3717280014,
            "language": "javascript",
            "name": "Duplicate switch case",
            "pack": "com.lgtm/javascript-queries",
            "properties": {
              "id": "js/duplicate-switch-case",
              "name": "Duplicate switch case",
              "severity": "warning",
              "tags": [
                "maintainability",
                "correctness",
                "external/cwe/cwe-561"
              ]
            },
            "url": "https://lgtm.example.com/rules/3717280014/"
          }
        }
      ],
      "fixed": 1,
      "language": "javascript",
      "new": 0,
      "status": "success",
      "status-message": "1 fixed alert"
    }
  ],
  "results-url": "https://lgtm.example.com/projects/g/yarnpkg/yarn/rev/pr-b45e291e7033460949ec986153c5416d22157d3e",
  "status": "success",
  "status-message": "Analysis succeeded"
}
```

<h3 id="get-results-of-code-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|Inline|

<h3 id="get-results-of-code-review-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[code-review](#schemacode-review)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-operations">Operations</h1>

The `/operations` endpoint is used to track the progress of long-running tasks,  for example, code review requests. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation).


## Get operation status

<a id="opIdgetOperation"></a>

> Code samples

```bash
curl https://example.com/operations/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/{operation-id}`

Track progress of a long-running operation using the operations identifier returned when you  created the operation. For example, by triggering the analysis of a commit, or the code review of a patch. For both LGTM.com and LGTM Enterprise, you must include an access token with the `operations:read` scope.


<h3 id="get-operation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation-id|path|integer(int64)|true|The operation identifier returned on creating the task.|

> Example responses

> 200 Response

```json
{
  "id": 1548841694385,
  "status": "pending",
  "task-result": {
    "languages": [
      {
        "language": "cpp",
        "status": "pending"
      },
      {
        "language": "csharp",
        "status": "pending"
      },
      {
        "language": "java",
        "status": "pending"
      },
      {
        "language": "javascript",
        "status": "pending"
      },
      {
        "language": "python",
        "status": "pending"
      }
    ],
    "log-url": "https://lgtm.com/logs/29a7017f6000333419dbb9829865e5786b91843d"
  },
  "task-type": "analysis"
}
```

<h3 id="get-operation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-snapshots">Snapshots</h1>

The `/snapshots` endpoint is used to download databases, representing a snapshot of the code, to analyze in your IDE.  LGTM administrators can also use it to upload externally-built databases to LGTM.


## Upload snapshot

<a id="opIduploadPart"></a>

> Code samples

```bash
curl https://example.com/snapshots/uploads/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'The name of database file to upload.'
```

`PUT /snapshots/uploads/{session-id}`

Upload a database representing a snapshot of a codebase.  The database is sent in one or more parts. Each part is sent in the request body. 
Use the [`POST /snapshots/{project-id}/{language}`](https://lgtm.com/help/lgtm/api/api-v1#opIdinitSnapshotUpload) endpoint  to start an upload session before uploading a database part. Database parts must have been generated and prepared for upload using the CodeQL CLI or the QL command-line tools. For further information on exporting externally-built databases,  see [Preparing snapshots to upload to LGTM](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM).

Split large databases into multiple parts. Upload the parts by making a separate request for each part.  Don't upload the next part until you've successfully uploaded the previous part.

If the upload fails you should retry it with the same data.


> Body parameter

```text
The name of database file to upload.
```

<h3 id="upload-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session-id|path|string|true|The id of the upload session.|
|body|body|string(binary)|true|The database or database part to upload.|

<h3 id="upload-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Complete snapshot upload session

<a id="opIdcompleteUpload"></a>

> Code samples

```bash
curl https://example.com/snapshots/uploads/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /snapshots/uploads/{session-id}`

Completes the database upload by closing the upload session, upgrading the database if appropriate, and scheduling analysis of that snapshot of the codebase.

You can view the analysis progress and access the results using the `task-result-url`.


<h3 id="complete-snapshot-upload-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session-id|path|string|true|The id of the upload session.|

> Example responses

> 202 Response

```json
{
  "id": 1508906426111,
  "status": "pending",
  "task-result": {
    "commit-id": "559de2c461e94ab636c959149c775bb27111fb48",
    "id": "3d5a71d2b87880432aadb8166e79f984b3611fda",
    "languages": [
      {
        "language": "javascript",
        "status": "pending"
      },
      {
        "language": "java",
        "status": "pending"
      }
    ],
    "log-url": "https://lgtm.com/projects/g/apache/commons-io/logs/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda",
    "project": {
      "id": 38901173,
      "name": "apache/commons-io",
      "url": "https://lgtm.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    },
    "results-url": "https://lgtm.com/projects/g/apache/commons-io/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda/files"
  },
  "task-result-url": "https://lgtm.com/api/v1.0/analyses/3d5a71d2b87880432aadb8166e79f984b3611fda",
  "task-type": "analysis"
}
```

<h3 id="complete-snapshot-upload-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Analysis triggered. Tracking data returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Abort database upload process

<a id="opIdabortUpload"></a>

> Code samples

```bash
curl https://example.com/snapshots/uploads/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /snapshots/uploads/{session-id}`

Aborts the specified upload session and deletes any uploaded parts. After the session is aborted it cannot be restarted.
If any part uploads are in progress when the session is aborted, their data may not be deleted. To ensure that uploaded parts are deleted correctly, you should only abort an upload session after all part uploads have completed.


<h3 id="abort-database-upload-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session-id|path|string|true|The id of the upload session.|

> Example responses

> 202 Response

```json
{
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "id": "ec741d71eeb55250ddca33800f0ee06e77ccfd7f",
  "languages": [
    {
      "language": "java",
      "status": "failure"
    }
  ],
  "log-url": "https://lgtm.example.com/projects/g/apache/commons-io/logs/analysis/ec741d71eeb55250ddca33800f0ee06e77ccfd7f",
  "project": {
    "id": 1548859144386,
    "name": "apache/commons-io",
    "url": "https://lgtm.example.com/projects/g/apache/commons-io",
    "url-identifier": "g/apache/commons-io"
  },
  "results-url": "https://lgtm.example.com/projects/g/apache/commons-io/analysis/ec741d71eeb55250ddca33800f0ee06e77ccfd7f/files"
}
```

<h3 id="abort-database-upload-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Aborted.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Download a snapshot

<a id="opIdgetSnapshot"></a>

> Code samples

```bash
curl https://example.com/snapshots/0/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /snapshots/{project-id}/{language}`

Download a CodeQL database from LGTM, representing a snapshot of the codebase, to run queries in your IDE.

This endpoint works for projects that have been successfully analyzed for the language specified in the request.  A successful request redirects you to a URL for downloading a database that represents the code snapshot, as specified in the `Location:` header in the response. Therefore, your HTTP client should be configured to follow redirects. For example, if you are using `curl`, you can add the`-L` flag to the command.

The database is downloaded as a zip file that can be imported into an IDE equipped with a  CodeQL extension. The extension must be up to date to analyze databases downloaded from LGTM. For more information on running queries locally in your IDE, see [Runnning queries in your IDE](https://lgtm.com/help/lgtm/running-queries-ide). 


<h3 id="download-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|language|path|string|true|The language of the database to download.|

<h3 id="download-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|303|See Other|Redirects to a URL for downloading the CodeQL database as indicated by the `Location:` header.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string|uri|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Start snapshot upload session

<a id="opIdinitSnapshotUpload"></a>

> Code samples

```bash
curl 'https://example.com/snapshots/0/string?commit=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /snapshots/{project-id}/{language}`

Start a session to upload an externally-built database (which represents a snapshot of a codebase) to a project on LGTM. 

This endpoint works for projects that are already on LGTM, and the selected language of  the database must already be configured. The project must be configured with 'upload' analysis mode. You can upload a "bundled" CodeQL database or a database exported by  the QL command-line tools (`odasa`).

If your database was generated using a version of the  command line that is older than LGTM,  LGTM will try to upgrade and analyze it when the upload is complete. You can include cached predicates in the upload, but they are ignored as the cache is  repopulated after the database has been upgraded and analyzed. However, if you want to include results with your database, make sure the database is  compatible before you start the upload session.  Incompatible databases with results won't be upgraded and therefore cannot be uploaded.  For further information on externally-built databases,  see [Preparing snapshots to upload to LGTM using the QL command-line tools](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM).

    
When the upload session has been successfully started, upload the database to the  upload URL returned in the response. The database can be uploaded to the upload URL in parts using  the [`PUT /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIduploadPart) endpoint. After uploading all the parts you must call  the [`POST /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIdcompleteUpload) endpoint to complete the upload session.


<h3 id="start-snapshot-upload-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|language|path|string|true|The language of the database to upload.|
|commit|query|string|true|The identifier of the analyzed commit.|
|date|query|string(date-time)|false|The date and time of the analyzed commit (default the current time).|

> Example responses

> 200 Response

```json
{
  "id": "0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d",
  "url": "https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d"
}
```

<h3 id="start-snapshot-upload-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[upload-session](#schemaupload-session)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-system">System</h1>

The `/system` endpoint is used to retrieve information about the status of the system: 
  * Get the [system health](https://lgtm.com/help/lgtm/api/api-v1#opIdgetHealth).
  * LGTM administrators only, get the [list of usage metrics](https://lgtm.com/help/lgtm/api/api-v1#opIdgetMetrics).
  * LGTM administrators only, get the [values of a given metric](https://lgtm.com/help/lgtm/api/api-v1#opIdgetMetric)


## Get a summary of the application's health

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl https://example.com/system/health \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /system/health`

Return an indication of whether the application is working as expected (up) or needs  attention (down). 
\> The `description` and `details` fields are reported only if the request includes an access token for a user account that has administration rights for this LGTM server.


> Example responses

> 200 Response

```json
{
  "details": [
    {
      "database": {
        "status": "UP"
      }
    },
    {
      "file_storage": {
        "status": "UP"
      }
    },
    {
      "queue": {
        "status": "UP"
      }
    },
    {
      "search": {
        "status": "UP"
      }
    },
    {
      "workers": {
        "description": "The status of the least healthy worker type is UNKNOWN",
        "details": [
          {
            "QUERY": {
              "description": "The status of the healthiest of these workers is UNKNOWN",
              "details": [
                {
                  "query-001": {
                    "description": "BOOTING",
                    "status": "UNKNOWN"
                  }
                }
              ],
              "status": "UNKNOWN"
            }
          },
          {
            "GENERAL": {
              "description": "The status of the healthiest of these workers is UP",
              "details": [
                {
                  "general-001": {
                    "description": "EXECUTING",
                    "status": "UP"
                  }
                },
                {
                  "general-002": {
                    "description": "IDLE",
                    "status": "UP"
                  }
                },
                {
                  "general-003": {
                    "description": "EXECUTING",
                    "status": "UP"
                  }
                },
                {
                  "general-004": {
                    "description": "UNKNOWN",
                    "status": "PROVISIONING"
                  }
                }
              ],
              "status": "UP"
            }
          }
        ],
        "status": "UNKNOWN"
      }
    }
  ],
  "status": "UP"
}
```

> 503 Response

```json
{
  "description": "description",
  "details": {},
  "status": "UP"
}
```

<h3 id="get-a-summary-of-the-applications-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The application is up.|[health](#schemahealth)|
|503|Service Unavailable|The application is down.|[health](#schemahealth)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get the identifiers and descriptions of the usage metrics

<a id="opIdgetMetrics"></a>

> Code samples

```bash
curl https://example.com/system/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /system/metrics`

LGTM administrators can use this endpoint to list the usage metrics that are available to download.


> Example responses

> 200 Response

```json
{
  "data": [
    {
      "description": "Users who have used the LGTM web application in the past 180 days",
      "metric-id": "active-users"
    },
    {
      "description": "Projects with Java analysis",
      "metric-id": "java-projects"
    }
  ]
}
```

<h3 id="get-the-identifiers-and-descriptions-of-the-usage-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The metric identifiers and descriptions are returned.|[metrics-list](#schemametrics-list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get the computed values of the specified metric

<a id="opIdgetMetric"></a>

> Code samples

```bash
curl https://example.com/system/metrics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /system/metrics/{metric-id}`

LGTM administrators can download usage data using this endpoint. The response includes up to 1000 values for the specified metric and reports the date-time that each value was calculated. There is normally one value per day.


<h3 id="get-the-computed-values-of-the-specified-metric-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metric-id|path|string|true|The identifier of the metric.|

> Example responses

> 200 Response

```json
{
  "measurements": [
    {
      "timestamp": "2019-05-02T12:01:23.000+00:00",
      "value": 1357
    },
    {
      "timestamp": "2019-05-01T11:35:22.000+00:00",
      "value": 1234
    }
  ],
  "metric-id": "active-users"
}
```

<h3 id="get-the-computed-values-of-the-specified-metric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[metric](#schemametric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-query-jobs">Query jobs</h1>

The `/queryjobs` endpoint is used to run CodeQL queries on LGTM and check their progress.
  * [Create a new query job](https://lgtm.com/help/lgtm/api/api-v1#opIdcreateQueryJob).
  * Get an overview of the [progress of the query job](https://lgtm.com/help/lgtm/api/api-v1#opIdgetQueryJob).
  * Get a [summary of the results](https://lgtm.com/help/lgtm/api/api-v1#opIdgetQueryJobResultsOverview) for the query job.
  * Download the [results for a specific project](https://lgtm.com/help/lgtm/api/api-v1#opIdgetQueryJobResultsForProject).


## Run a CodeQL query on one or more projects

<a id="opIdcreateQueryJob"></a>

> Code samples

```bash
curl 'https://example.com/queryjobs?language=string' \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'select "hello", "world"'
```

`POST /queryjobs`

Submit a query to run on one or more projects on LGTM. The query is included in the body of the request.


> Body parameter

```text
select "hello", "world"
```

<h3 id="run-a-codeql-query-on-one-or-more-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|true|The [language](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) you want to analyze.<br>|
|project-id|query|[integer(int64)]|false|The identifier of the project to analyze. Either `project-id` or `projects-list` must be specified.|
|projects-list|query|string|false|Name of the list containing the projects to analyze. Either `project-id` or `projects-list` must be specified.|
|body|body|string|true|The query to run.|

> Example responses

> 202 Response

```json
{
  "id": 1508906426111,
  "status": "pending",
  "task-result": {
    "$ref": "#/components/examples/queryjobsResponseExample"
  },
  "task-result-url": "https://lgtm.com/api/v1.0/queryjobs/987654321",
  "task-type": "queryjobs"
}
```

<h3 id="run-a-codeql-query-on-one-or-more-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Query submitted. Tracking data returned.|[operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Get the status of a query job

<a id="opIdgetQueryJob"></a>

> Code samples

```bash
curl https://example.com/queryjobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /queryjobs/{queryjob-id}`

Get the status of a query job using the query job identifier for the task.

When you create a query job, the response includes a task result URL of the form: `/queryjobs/{queryjob-id}`.


<h3 id="get-the-status-of-a-query-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryjob-id|path|string|true|The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.|

> Example responses

> 200 Response

```json
{
  "id": "b45e291e7033460949ec986153c5416d22157d3e",
  "result-url": "https://lgtm.com/query/b45e291e7033460949ec986153c5416d22157d3e",
  "stats": {
    "failed": 1,
    "pending": 1,
    "success-with-result": 3,
    "success-without-result": 5,
    "successful": 8
  }
}
```

<h3 id="get-the-status-of-a-query-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[queryjob](#schemaqueryjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Provide a summary of results for the projects in the query job

<a id="opIdgetQueryJobResultsOverview"></a>

> Code samples

```bash
curl https://example.com/queryjobs/string/results \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /queryjobs/{queryjob-id}/results`

This endpoint provides a summary of the results generated by completed query runs for each  project specified in the the POST /queryjobs endpoint.  For completed query jobs, the summary includes:

  * The number of results for successful query runs.
  * Error information for failed query runs.

No information is included in the response for any project for which the query  run is still in progress.


<h3 id="provide-a-summary-of-results-for-the-projects-in-the-query-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryjob-id|path|string|true|The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.|
|start|query|string|false|An opaque identifier generated by the API used for pagination. <br>This identifier will be included as part of the response for this endpoint whenever more than one page of results is available. <br>|
|limit|query|integer(int32)|false|The number of results to return. Useful for pagination.|
|filter|query|string|false|Only return a subset of results. Legal values are `w-results`, `wo-results`, `error`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "project": {
        "id": 1234567,
        "name": "Apache Commons IO",
        "url": "https://lgtm.example.com/projects/g/apache/commons-io",
        "url-identifier": "g/apache/commons-io"
      },
      "results": 10,
      "status": "success"
    },
    {
      "error": "Generic Error",
      "project": {
        "id": 42530,
        "name": "Apache Maven",
        "url": "https://lgtm.example.com/projects/g/apache/maven",
        "url-identifier": "g/apache/maven"
      },
      "status": "error"
    }
  ],
  "next": "https://lgtm.example.com/api/v1.0/queryjobs/2123/results?start=AXBe"
}
```

<h3 id="provide-a-summary-of-results-for-the-projects-in-the-query-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|[queryjob-results-overview](#schemaqueryjob-results-overview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Fetch the results of a query job for a specific project

<a id="opIdgetQueryJobResultsForProject"></a>

> Code samples

```bash
curl https://example.com/queryjobs/string/results/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /queryjobs/{queryjob-id}/results/{project-id}`

Fetch the results for a specific project. The endpoint succeeds only if the query was successful,  and returns a `404` error otherwise.  By default, the endpoint provides only results that are within the source tree. To obtain all results, specify the `nofilter` parameter.


<h3 id="fetch-the-results-of-a-query-job-for-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryjob-id|path|string|true|The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.|
|project-id|path|string|true|The identifier for the project.|
|start|query|integer(int32)|false|Start point for the page of results.|
|limit|query|integer(int32)|false|The maximum number of results to display (less than 100).|
|nofilter|query|boolean|false|Include results that are not part of the source tree. These results are filtered out by default.|

> Example responses

> 200 Response

```json
{
  "columns": [
    "Column A",
    "Column B"
  ],
  "data": [
    [
      {
        "file": "/path/to/file.txt",
        "line": 100,
        "url": "https://lgtm.example.com/projects/g/apache/commons-io/snapshot/271554d09bb63cb546aa5151916588c320533395/files/path/to/file.txt#L100",
        "value": "Alert 1"
      },
      {
        "value": "Value B"
      }
    ]
  ],
  "next": "https://lgtm.example.com/api/v1.0/queryjobs/results/1234567?start=AXBe&limit=100",
  "project": {
    "id": 1234567,
    "name": "Apache Commons IO",
    "url": "https://lgtm.example.com/projects/g/apache/commons-io",
    "url-identifier": "g/apache/commons-io"
  }
}
```

<h3 id="fetch-the-results-of-a-query-job-for-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. The result contains three items: column headers, data, and pagination information.|[queryjob-project-results](#schemaqueryjob-project-results)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="lgtm-api-specification-issues">Issues</h1>

## Get detailed alert information for an issue

<a id="opIdgetIssue"></a>

> Code samples

```bash
curl https://example.com/issues/0/%2Bja0cf6%2B84AGgat15W1jooeMfUY%3D \
  -H 'Accept: application/sarif+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issues/{project-id}/{alert-key}`

Fetch the alert information for an issue in [SARIF](https://lgtm.com/help/lgtm/sarif-results-file) format.


<h3 id="get-detailed-alert-information-for-an-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-id|path|integer(int64)|true|The numeric project identifier.|
|alert-key|path|string|true|The alert key is generated by LGTM when it posts an issue `create` webhook request <br> to an external system using the [issue tracker Webhook API](https://lgtm.com/admin/help/issuetracker-webhook-api).<br> This key is an opaque identifier that tracks the alert's location over time. For example, if a file containing the alert<br> is modified, the SARIF data will reflect the updated location of the alert.<br> Note that the key needs to be URL encoded as it may contain characters that are not web-safe.  <br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-detailed-alert-information-for-an-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Requested data returned.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

# Schemas

<h2 id="tocS_analysis">analysis</h2>
<!-- backwards compatibility -->
<a id="schemaanalysis"></a>
<a id="schema_analysis"></a>
<a id="tocSanalysis"></a>
<a id="tocsanalysis"></a>

```json
{
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "id": "2e65208b2f1872634132566a1a0ce6392407297c",
  "languages": [
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success"
    },
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success"
    }
  ],
  "log-url": "https://lgtm.example.com/projects/g/yarnpkg/yarn/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c",
  "project": {
    "id": 1234567,
    "name": "Apache Commons IO",
    "url": "https://lgtm.example.com/projects/g/apache/commons-io",
    "url-identifier": "g/apache/commons-io"
  },
  "results-url": "https://lgtm.example.com/projects/g/yarnpkg/yarn/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit-id|string|false|none|The commit identifier.<br>The commit identifier is included only if the same commit was successfully analyzed for all languages. A detailed breakdown of which commit was analyzed for each language is provided in the `languages` property.<br>|
|id|string|false|none|The analysis identifier.|
|languages|[[language-stats](#schemalanguage-stats)]|false|none|Per-language information.|
|log-url|string|false|none|A page on LGTM to view the logs for this analysis.|
|project|[project](#schemaproject)|false|none|none|
|results-url|string|false|none|A page on LGTM to view the results of this analysis.|

<h2 id="tocS_code-review">code-review</h2>
<!-- backwards compatibility -->
<a id="schemacode-review"></a>
<a id="schema_code-review"></a>
<a id="tocScode-review"></a>
<a id="tocscode-review"></a>

```json
{
  "id": "b45e291e7033460949ec986153c5416d22157d3e",
  "languages": [
    {
      "alerts": [
        {
          "fixed": 1,
          "new": 0,
          "query": {
            "name": "Incomplete string escaping or encoding"
          }
        }
      ],
      "fixed": 1,
      "language": "javascript",
      "new": 0,
      "status": "success",
      "status-message": "1 fixed alert"
    }
  ],
  "results-url": "https://lgtm.example.com/projects/g/yarnpkg/yarn/rev/pr-b45e291e7033460949ec986153c5416d22157d3e",
  "status": "success",
  "status-message": "Analysis succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier for the review.|
|languages|[[codereview_languages](#schemacodereview_languages)]|false|none|Detailed information for each language analyzed.|
|results-url|string|false|none|A page on LGTM to view the status and results of this code review.|
|status|string|false|none|The status of the code review.|
|status-message|string|false|none|A summary of the current status of the code review.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|failure|
|status|success|

<h2 id="tocS_codereview_alerts">codereview_alerts</h2>
<!-- backwards compatibility -->
<a id="schemacodereview_alerts"></a>
<a id="schema_codereview_alerts"></a>
<a id="tocScodereview_alerts"></a>
<a id="tocscodereview_alerts"></a>

```json
{
  "fixed": 1,
  "new": 0,
  "query": {
    "id": 10000,
    "language": "javascript",
    "name": "Incomplete string escaping or encoding",
    "pack": "com.lgtm/javascript-queries",
    "properties": {
      "id": "js/incomplete-sanitization",
      "name": "Incomplete string escaping or encoding",
      "severity": "warning",
      "tags": [
        "correctness",
        "security",
        "external/cwe/cwe-116"
      ]
    },
    "url": "https://lgtm.example.com/rules/1000774/"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|integer(int32)|false|none|The number of alerts fixed by the patch for this query.|
|new|integer(int32)|false|none|The number of alerts introduced by the patch for this query.|
|query|[query](#schemaquery)|false|none|none|

<h2 id="tocS_codereview_languages">codereview_languages</h2>
<!-- backwards compatibility -->
<a id="schemacodereview_languages"></a>
<a id="schema_codereview_languages"></a>
<a id="tocScodereview_languages"></a>
<a id="tocscodereview_languages"></a>

```json
{
  "alerts": [
    {
      "fixed": 1,
      "new": 0,
      "query": {
        "id": 10000,
        "language": "javascript",
        "name": "Incomplete string escaping or encoding",
        "pack": "com.lgtm/javascript-queries",
        "properties": {
          "id": "js/incomplete-sanitization",
          "name": "Incomplete string escaping or encoding",
          "severity": "warning",
          "tags": [
            "correctness",
            "security",
            "external/cwe/cwe-116"
          ]
        },
        "url": "https://lgtm.example.com/rules/1000774/"
      }
    }
  ],
  "fixed": 1,
  "language": "javascript",
  "new": 0,
  "status": "success",
  "status-message": "1 fixed alert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[codereview_alerts](#schemacodereview_alerts)]|false|none|The list of added and fixed alerts per query for this language.|
|fixed|integer(int32)|false|none|The total number of alerts fixed by the patch for this language.|
|language|string|false|none|The language analyzed.|
|new|integer(int32)|false|none|The total number of alerts introduced by the patch for this language.|
|status|string|false|none|The status for analysis of this language.|
|status-message|string|false|none|The current state of analysis of this langauge. When available, a summary of analysis results.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|failure|
|status|success|

<h2 id="tocS_health">health</h2>
<!-- backwards compatibility -->
<a id="schemahealth"></a>
<a id="schema_health"></a>
<a id="tocShealth"></a>
<a id="tocshealth"></a>

```json
{
  "description": "description",
  "details": {},
  "status": "UP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the status of the service.|
|details|object|false|none|Details of the health of the service. This contains information about the status of the components on which the service depends.|
|status|string|false|none|The status of the service.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN|
|status|UP|
|status|DOWN|

<h2 id="tocS_language-stats">language-stats</h2>
<!-- backwards compatibility -->
<a id="schemalanguage-stats"></a>
<a id="schema_language-stats"></a>
<a id="tocSlanguage-stats"></a>
<a id="tocslanguage-stats"></a>

```json
{
  "alerts": 628,
  "analysis-date": "2000-01-23T04:56:07.000+00:00",
  "commit-date": "2000-01-23T04:56:07.000+00:00",
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "language": "javascript",
  "lines": 133298,
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|integer(int32)|false|none|The number of alerts for this language.|
|analysis-date|string(date-time)|false|none|The time the commit was analyzed.|
|commit-date|string(date-time)|false|none|The time of the commit.|
|commit-id|string|false|none|The latest successfully analyzed commit for the language. All statistics refer to this commit.|
|language|string|false|none|The short name for the language.|
|lines|integer(int32)|false|none|The number of lines of code for this language.|
|status|string|false|none|The status of the analysis of this language.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|
|status|pending|

<h2 id="tocS_measurement">measurement</h2>
<!-- backwards compatibility -->
<a id="schemameasurement"></a>
<a id="schema_measurement"></a>
<a id="tocSmeasurement"></a>
<a id="tocsmeasurement"></a>

```json
{
  "timestamp": "2000-01-23T04:56:07.000+00:00",
  "value": 0.8008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|none|The date and time when this metric was computed.|
|value|number|false|none|The value of this metric at the timestamp reported.|

<h2 id="tocS_metric">metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "measurements": [
    {
      "timestamp": "2000-01-23T04:56:07.000+00:00",
      "value": 0.8008281904610115
    },
    {
      "timestamp": "2000-01-23T04:56:07.000+00:00",
      "value": 0.8008281904610115
    }
  ],
  "metric-id": "metric-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measurements|[[measurement](#schemameasurement)]|false|none|A time series of values taken by the metric at different timestamps.|
|metric-id|string|false|none|The identifier by which this metric is referenced in the API.|

<h2 id="tocS_metric-name">metric-name</h2>
<!-- backwards compatibility -->
<a id="schemametric-name"></a>
<a id="schema_metric-name"></a>
<a id="tocSmetric-name"></a>
<a id="tocsmetric-name"></a>

```json
{
  "description": "description",
  "metric-id": "metric-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The name by which the metric is listed in the user interface.|
|metric-id|string|false|none|The identifier by which this metric is referenced in the API.|

<h2 id="tocS_metrics-list">metrics-list</h2>
<!-- backwards compatibility -->
<a id="schemametrics-list"></a>
<a id="schema_metrics-list"></a>
<a id="tocSmetrics-list"></a>
<a id="tocsmetrics-list"></a>

```json
{
  "data": [
    {
      "description": "description",
      "metric-id": "metric-id"
    },
    {
      "description": "description",
      "metric-id": "metric-id"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[metric-name](#schemametric-name)]|false|none|The list of names and identifiers by which the metrics are referenced.|

<h2 id="tocS_operation">operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "id": 7654321,
  "status": "pending",
  "task-result": "",
  "task-result-url": "https://lgtm.example.com/api/v1.0/codereviews/b45e291e7033460949ec986153c5416d22157d3e",
  "task-type": "analysis",
  "uploads": {
    "key": {
      "id": "0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d",
      "url": "https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|The identifier for the operation.|
|status|string|false|none|Status of the operation.|
|task-result|[analysis](#schemaanalysis) \| [code-review](#schemacode-review) \| [queryjob](#schemaqueryjob)|false|none|none|
|task-result-url|string|false|none|The URL for the result of the task. For some operations, included only on completion.|
|task-type|string|true|none|none|
|uploads|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|done|
|task-type|analysis|
|task-type|codereview|
|task-type|queryjob|

<h2 id="tocS_project">project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": 1234567,
  "name": "Apache Commons IO",
  "url": "https://lgtm.example.com/projects/g/apache/commons-io",
  "url-identifier": "g/apache/commons-io"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|The numeric identifier of the project.|
|name|string|false|none|The display name of the project.|
|url|string|false|none|The full URL of the project on LGTM.|
|url-identifier|string|false|none|The URL identifier of the project.|

<h2 id="tocS_project-details">project-details</h2>
<!-- backwards compatibility -->
<a id="schemaproject-details"></a>
<a id="schema_project-details"></a>
<a id="tocSproject-details"></a>
<a id="tocsproject-details"></a>

```json
{
  "id": 1234567,
  "name": "Apache Commons IO",
  "url": "https://lgtm.example.com/projects/g/apache/commons-io",
  "url-identifier": "g/apache/commons-io",
  "languages": [
    {
      "alerts": 628,
      "analysis-date": "2000-01-23T04:56:07.000+00:00",
      "commit-date": "2000-01-23T04:56:07.000+00:00",
      "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
      "language": "javascript",
      "lines": 133298,
      "status": "success",
      "grade": "A+"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|The numeric identifier of the project.|
|name|string|false|none|The display name of the project.|
|url|string|false|none|The full URL of the project on LGTM.|
|url-identifier|string|false|none|The URL identifier of the project.|
|languages|[[project-language-stats](#schemaproject-language-stats)]|false|none|Per-language information.|

<h2 id="tocS_project-language-stats">project-language-stats</h2>
<!-- backwards compatibility -->
<a id="schemaproject-language-stats"></a>
<a id="schema_project-language-stats"></a>
<a id="tocSproject-language-stats"></a>
<a id="tocsproject-language-stats"></a>

```json
{
  "alerts": 628,
  "analysis-date": "2000-01-23T04:56:07.000+00:00",
  "commit-date": "2000-01-23T04:56:07.000+00:00",
  "commit-id": "04d7a2300feec9bbcc48185e370e3b5d3ae4da9d",
  "language": "javascript",
  "lines": 133298,
  "status": "success",
  "grade": "A+"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|integer(int32)|false|none|The number of alerts for this language.|
|analysis-date|string(date-time)|false|none|The time the commit was analyzed.|
|commit-date|string(date-time)|false|none|The time of the commit.|
|commit-id|string|false|none|The latest successfully analyzed commit for the language. All statistics refer to this commit.|
|language|string|false|none|The short name for the language.|
|lines|integer(int32)|false|none|The number of lines of code for this language.|
|status|string|false|none|The status of the analysis of this language.|
|grade|string|false|none|The grade of the code for this language.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|
|status|pending|
|grade|A+|
|grade|A|
|grade|B|
|grade|C|
|grade|D|
|grade|E|

<h2 id="tocS_project-list">project-list</h2>
<!-- backwards compatibility -->
<a id="schemaproject-list"></a>
<a id="schema_project-list"></a>
<a id="tocSproject-list"></a>
<a id="tocsproject-list"></a>

```json
{
  "data": [
    {
      "id": 1234567,
      "name": "Apache Commons IO",
      "url": "https://lgtm.example.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    },
    {
      "id": 1234567,
      "name": "Apache Commons IO",
      "url": "https://lgtm.example.com/projects/g/apache/commons-io",
      "url-identifier": "g/apache/commons-io"
    }
  ],
  "nextPageUrl": "https://lgtm.example.com/api/v1.0/projects?start=AVAIySnWtmGBpZjIb27kbrqB2uK2HIU0Zk9Sfh19ya8nxzA4GE5bv9LxVPSjQCwHKThqAADNvp17WuWBuBe8901G-ryeA2tLD6JZh8lue2IM0EuqsqB9Wk5BAM6T0lEnXA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[project](#schemaproject)]|false|none|A single page of projects.|
|nextPageUrl|string|false|none|The URL to retrieve the next page of projects. Omitted if there is no next page.|

<h2 id="tocS_query">query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "id": 10000,
  "language": "javascript",
  "name": "Incomplete string escaping or encoding",
  "pack": "com.lgtm/javascript-queries",
  "properties": {
    "id": "js/incomplete-sanitization",
    "name": "Incomplete string escaping or encoding",
    "severity": "warning",
    "tags": [
      "correctness",
      "security",
      "external/cwe/cwe-116"
    ]
  },
  "url": "https://lgtm.example.com/rules/1000774/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|The numeric identifier of the query.|
|language|string|false|none|The [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) of the query.|
|name|string|false|none|**Deprecated.** The `@name` of the query.|
|pack|string|false|none|The name of the query pack that contains the query.|
|properties|[query_properties](#schemaquery_properties)|false|none|none|
|url|string|false|none|A page on LGTM to view the details of the query.|

<h2 id="tocS_query-result-entry">query-result-entry</h2>
<!-- backwards compatibility -->
<a id="schemaquery-result-entry"></a>
<a id="schema_query-result-entry"></a>
<a id="tocSquery-result-entry"></a>
<a id="tocsquery-result-entry"></a>

```json
{
  "file": "string",
  "line": 0,
  "url": "http://example.com",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|line|integer(int32)|false|none|none|
|url|string(uri)|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_query_properties">query_properties</h2>
<!-- backwards compatibility -->
<a id="schemaquery_properties"></a>
<a id="schema_query_properties"></a>
<a id="tocSquery_properties"></a>
<a id="tocsquery_properties"></a>

```json
{
  "id": "js/incomplete-sanitization",
  "name": "Incomplete string escaping or encoding",
  "severity": "warning",
  "tags": [
    "correctness",
    "security",
    "external/cwe/cwe-116"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The `@id` of the query.|
|name|string|false|none|The `@name` of the query.|
|severity|string|false|none|The severity of the query.|
|tags|[string]|false|none|The `@tags` associated with the query.|

<h2 id="tocS_queryjob">queryjob</h2>
<!-- backwards compatibility -->
<a id="schemaqueryjob"></a>
<a id="schema_queryjob"></a>
<a id="tocSqueryjob"></a>
<a id="tocsqueryjob"></a>

```json
{
  "id": "b45e291e7033460949ec986153c5416d22157d3e",
  "result-url": "https://lgtm.com/api/v1.0/query/b45e291e7033460949ec986153c5416d22157d3e",
  "stats": {
    "failed": 1,
    "pending": 1,
    "success-with-result": 3,
    "success-without-result": 5,
    "successful": 8
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier for the QueryJob.|
|result-url|string|false|none|URL to view the result of the query job.|
|stats|[queryjob_stats](#schemaqueryjob_stats)|false|none|none|

<h2 id="tocS_queryjob-project-results">queryjob-project-results</h2>
<!-- backwards compatibility -->
<a id="schemaqueryjob-project-results"></a>
<a id="schema_queryjob-project-results"></a>
<a id="tocSqueryjob-project-results"></a>
<a id="tocsqueryjob-project-results"></a>

```json
{
  "columns": [
    "Column A",
    "Column B"
  ],
  "data": [
    [
      {
        "file": "/path/to/file.txt",
        "line": 100,
        "url": "https://lgtm.example.com/projects/g/apache/commons-io/snapshot/271554d09bb63cb546aa5151916588c320533395/files/path/to/file.txt#L100",
        "value": "Alert 1"
      },
      {
        "value": "Value B"
      }
    ]
  ],
  "next": "https://lgtm.example.com/api/v1.0/queryjobs/results/1234567?start=AXBe&limit=100",
  "project": {
    "id": 1234567,
    "name": "Apache Commons IO",
    "url": "https://lgtm.example.com/projects/g/apache/commons-io",
    "url-identifier": "g/apache/commons-io"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|Columns returned by the query.|
|data|[[[query-result-entry](#schemaquery-result-entry)]]|false|none|Results of the query divided by row.|
|next|string|false|none|URL for retrieving the next part of the results (if applicable).|
|project|[project](#schemaproject)|false|none|none|

<h2 id="tocS_queryjob-results-overview">queryjob-results-overview</h2>
<!-- backwards compatibility -->
<a id="schemaqueryjob-results-overview"></a>
<a id="schema_queryjob-results-overview"></a>
<a id="tocSqueryjob-results-overview"></a>
<a id="tocsqueryjob-results-overview"></a>

```json
{
  "data": [
    {
      "project": {
        "id": 1234567,
        "name": "Apache Commons IO",
        "url": "https://lgtm.example.com/projects/g/apache/commons-io",
        "url-identifier": "g/apache/commons-io"
      },
      "results": 10,
      "status": "success"
    },
    {
      "error": "Generic Error",
      "project": {
        "id": 42530,
        "name": "Apache Maven",
        "url": "https://lgtm.example.com/projects/g/apache/maven",
        "url-identifier": "g/apache/maven"
      },
      "status": "error"
    }
  ],
  "next": "https://lgtm.example.com/api/v1.0/queryjobs/2123/results?start=AXBe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[queryjob-results-overview-entry](#schemaqueryjob-results-overview-entry)]|false|none|none|
|next|string|false|none|none|

<h2 id="tocS_queryjob-results-overview-entry">queryjob-results-overview-entry</h2>
<!-- backwards compatibility -->
<a id="schemaqueryjob-results-overview-entry"></a>
<a id="schema_queryjob-results-overview-entry"></a>
<a id="tocSqueryjob-results-overview-entry"></a>
<a id="tocsqueryjob-results-overview-entry"></a>

```json
{
  "error": "string",
  "external": 10,
  "internal": 1,
  "project": {
    "id": 1234567,
    "name": "Apache Commons IO",
    "url": "https://lgtm.example.com/projects/g/apache/commons-io",
    "url-identifier": "g/apache/commons-io"
  },
  "status": "success",
  "total": 11
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message. Only applies if `status` is `error`.|
|external|integer(int32)|false|none|Number of results that refer to elements outside the source tree (e.g., libraries). Only applies if `status` is `success`.|
|internal|integer(int32)|false|none|Number of results that refer to elements within the source tree. Only applies if `status` is `success`.|
|project|[project](#schemaproject)|false|none|none|
|status|string|false|none|Describes whether the query was sucessfully executed against the project.|
|total|integer(int32)|false|none|Number of results returned by the query. This is broken down further into `internal` and `external` results. Only applies if `status` is `success`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_queryjob_stats">queryjob_stats</h2>
<!-- backwards compatibility -->
<a id="schemaqueryjob_stats"></a>
<a id="schema_queryjob_stats"></a>
<a id="tocSqueryjob_stats"></a>
<a id="tocsqueryjob_stats"></a>

```json
{
  "failed": 1,
  "pending": 1,
  "success-with-result": 3,
  "success-without-result": 5,
  "successful": 8
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failed|integer(int32)|false|none|The number of projects for which the query failed.|
|pending|integer(int32)|false|none|The number of projects scheduled for execution but pending. For very large jobs, not all projects are scheduled at the same time. Therefore, this number might increase as more projects are scheduled. This means that `successful + failed + pending` might be smaller than the total number of project that will be analyzed.<br>|
|success-with-result|integer(int32)|false|none|The number of projects for which the query returned results.|
|success-without-result|integer(int32)|false|none|The number of projects for which the query was successful but returned no results.|
|successful|integer(int32)|false|none|The number of projects for which the query completed succesfully. These are broken down further between the ones that have results (`success-with-result`) and the ones that do not (`success-without-result`): `successful = success-with-result + success-without-result`.<br>|

<h2 id="tocS_upload-session">upload-session</h2>
<!-- backwards compatibility -->
<a id="schemaupload-session"></a>
<a id="schema_upload-session"></a>
<a id="tocSupload-session"></a>
<a id="tocsupload-session"></a>

```json
{
  "id": "0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d",
  "url": "https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier of the upload session|
|url|string(uri)|false|none|The URL for uploading file content.|

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "apiVersion": "1.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|The version number of the API.|
