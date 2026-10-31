<h1 id="rudder-api">Rudder API v16</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Download OpenAPI specification: [openapi.yml](openapi.yml)

# Introduction

Rudder exposes a REST API, enabling the user to interact with Rudder without using the webapp, for example in scripts or cronjobs.

## Versioning

Each time the API is extended with new features (new functions, new parameters, new responses, ...), it will be assigned a new version number. This will allow you
to keep your existing scripts (based on previous behavior). Versions will always be integers (no 2.1 or 3.3, just 2, 3, 4, ...) or `latest`.

You can change the version of the API used by setting it either within the url or in a header:

* the URL: each URL is prefixed by its version id, like `/api/version/function`.

```bash
# Version 10
curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/10/rules
# Latest
curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules
# Wrong (not an integer) => 404 not found
curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/3.14/rules
```

* the HTTP headers. You can add the **X-API-Version** header to your request. The value needs to be an integer or `latest`.

```bash
# Version 10
curl -X GET -H "X-API-Token: yourToken" -H "X-API-Version: 10" https://rudder.example.com/rudder/api/rules
# Wrong => Error response indicating which versions are available
curl -X GET -H "X-API-Token: yourToken" -H "X-API-Version: 3.14" https://rudder.example.com/rudder/api/rules
```

In the future, we may declare some versions as deprecated, in order to remove them in a later version of Rudder, but we will never remove any versions without warning, or without a safe
period of time to allow migration from previous versions.


<h4>Existing versions</h4>
<table>
  <thead>
    <tr>
      <th style="width: 20%">Version</th>
      <th style="width: 20%">Rudder versions it appeared in</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">1</td>
      <td class="code">Never released (for internal use only)</td>
      <td>Experimental version</td>
    </tr>
    <tr>
      <td class="code">2 to 10 (deprecated)</td>
      <td class="code">4.3 and before</td>
      <td>These versions provided the core set of API features for rules, directives, nodes global parameters, change requests and compliance, rudder settings and system API</td>
    </tr>
    <tr>
      <td class="code">11</td>
      <td class="code">5.0</td>
      <td>New system API (replacing old localhost v1 api): status, maintenance operations and server behavior</td>
    </tr>
    <tr>
      <td class="code">12</td>
      <td class="code">6.0 and 6.1</td>
      <td>Node key management</td>
    </tr>
    <tr>
      <td class="code">13</td>
      <td class="code">6.2</td>
      <td><ul>
        <li>Node status endpoint</li>
        <li>System health check</li>
        <li>System maintenance job to purge software [that endpoint was back-ported in 6.1]</li>
      </ul></td>
    </tr>
    <tr>
      <td class="code">14</td>
      <td class="code">7.0</td>
      <td><ul>
        <li>Secret management</li>
        <li>Directive tree</li>
        <li>Improve techniques management</li>
        <li>Demote a relay</li>
      </ul></td>
    </tr>
    <tr>
      <td class="code">15</td>
      <td class="code">7.1</td>
      <td><ul>
        <li>Package updates in nodes</li>
      </ul></td>
    </tr>
    <tr>
      <td class="code">16</td>
      <td class="code">7.2</td>
      <td><ul>
        <li>Create node API included from plugin</li>
        <li>Configuration archive import/export</li>
      </ul></td>
    </tr>
  </tbody>
</table>


## Response format

All responses from the API are in the JSON format.

```json
{
  "action": "The name of the called function",
  "id": "The ID of the element you want, if relevant",
  "result": "The result of your action: success or error",
  "data": "Only present if this is a success and depends on the function, it's usually a JSON object",
  "errorDetails": "Only present if this is an error, it contains the error message"
}
```


* __Success__ responses are sent with the 200 HTTP (Success) code

* __Error__ responses are sent with a HTTP error code (mostly 5xx...)


## HTTP method

Rudder's REST API is based on the usage of [HTTP methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html). We use them to indicate what action will be done by the request. Currently, we use four of them:


* **GET**: search or retrieve information (get rule details, get a group, ...)

* **PUT**: add new objects (create a directive, clone a Rule, ...)

* **DELETE**: remove objects (delete a node, delete a parameter, ...)

* **POST**: update existing objects (update a directive, reload a group, ...)


## Parameters

### General parameters

Some parameters are available for almost all API functions. They will be described in this section.
They must be part of the query and can't be submitted in a JSON form.

#### Available for all requests

<table>
  <thead>
    <tr>
      <th style="width: 30%">Field</th>
      <th style="width: 10%">Type</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">prettify</td>
      <td><b>boolean</b><br><i>optional</i></td>
      <td>
        Determine if the answer should be prettified (human friendly) or not. We recommend using this for debugging purposes, but not for general script usage as this does add some unnecessary load on the server side.
        <p class="default-value">Default value: <code>false</code></p>
      </td>
    </tr>
  </tbody>
</table>


#### Available for modification requests (PUT/POST/DELETE)

<table>
  <thead>
    <tr>
      <th style="width: 25%">Field</th>
      <th style="width: 12%">Type</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">reason</td>
      <td><b>string</b><br><i>optional</i> or <i>required</i></td>
      <td>
        Set a message to explain the change. If you set the reason messages to be mandatory in the web interface, failing to supply this value will lead to an error.
        <p class="default-value">Default value: <code>""</code></p>
      </td>
    </tr>
    <tr>
      <td class="code">changeRequestName</td>
      <td><b>string</b><br><i>optional</i></td>
      <td>
        Set the change request name, is used only if workflows are enabled. The default value depends on the function called
        <p class="default-value">Default value: <code>A default string for each function</code></p>
      </td>
    </tr>
    <tr>
      <td class="code">changeRequestDescription</td>
      <td><b>string</b><br><i>optional</i></td>
      <td>
        Set the change request description, is used only if workflows are enabled.
        <p class="default-value">Default value: <code>""</code></p>
      </td>
    </tr>
  </tbody>
</table>


### Passing parameters

Parameters to the API can be sent:

* As part of the URL for resource identification

* As data for POST/PUT requests

  * Directly in JSON format

  * As request arguments

#### As part of the URL for resource identification

Parameters in URLs are used to indicate which resource you want to interact with. The function will not work if this resource is missing.

```bash
# Get the Rule of ID "id"
curl -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules/id
```



CAUTION: To avoid surprising behavior, do not put a '/' at the end of an URL: it would be interpreted as '/[empty string parameter]' and redirected to '/index', likely not what you wanted to do.


#### Sending data for POST/PUT requests

##### Directly in JSON format

JSON format is the preferred way to interact with Rudder API for creating or updating resources.
You'll also have to set the *Content-Type* header to **application/json** (without it the JSON content would be ignored).
In a `curl` `POST` request, that header can be provided with the `-H` parameter:

```bash
curl -X POST -H "Content-Type: application/json" ...
```

The supplied file must contain a valid JSON: strings need quotes, booleans and integers don't, etc.

The (human readable) format is:

```json
{
  "key1": "value1",
  "key2": false,
  "key3": 42
}
```


Here is an example with inlined data:

```bash
# Update the Rule 'id' with a new name, disabled, and setting it one directive
curl -X POST -H "X-API-Token: yourToken" -H  "Content-Type: application/json"
https://rudder.example.com/rudder/api/rules/latest/{id}
  -d '{ "displayName": "new name", "enabled": false, "directives": "directiveId"}'
```

You can also pass a supply the JSON in a file:

```bash
# Update the Rule 'id' with a new name, disabled, and setting it one directive
curl -X POST -H "X-API-Token: yourToken" -H "Content-Type: application/json" https://rudder.example.com/rudder/api/rules/latest/{id} -d @jsonParam
```

Note that the general parameters view in the previous chapter cannot be passed in a JSON, and you will need to pass them a URL parameters if you want them to be taken into account (you can't mix JSON and request parameters):

```bash
# Update the Rule 'id' with a new name, disabled, and setting it one directive with reason message "Reason used"
curl -X POST -H "X-API-Token: yourToken" -H "Content-Type: application/json" "https://rudder.example.com/rudder/api/rules/latest/{id}?reason=Reason used" -d @jsonParam -d "reason=Reason ignored"
```

##### Request parameters

In some cases, when you have little, simple data to update, JSON can feel bloated. In such cases, you can use
request parameters. You will need to pass one parameter for each data you want to change.

Parameters follow the following schema:

```
key=value
```

You can pass parameters by two means:

* As query parameters: At the end of your url, put a **?** then your first parameter and then a **&** before next parameters. In that case, parameters need to be https://en.wikipedia.org/wiki/Percent-encoding[URL encoded]

```bash
# Update the Rule 'id' with a new name, disabled, and setting it one directive
curl -X POST -H "X-API-Token: yourToken"  https://rudder.example.com/rudder/api/rules/latest/{id}?"displayName=my new name"&"enabled=false"&"directives=aDirectiveId"
```

* As request data: You can pass those parameters in the request data, they won't figure in the URL, making it lighter to read, You can pass a file that contains data.

```bash
# Update the Rule 'id' with a new name, disabled, and setting it one directive (in file directive-info.json)
curl -X POST -H "X-API-Token: yourToken"
https://rudder.example.com/rudder/api/rules/latest/{id} -d "displayName=my new name" -d "enabled=false" -d @directive-info.json
```

Base URLs:

* <a href="https://rudder.example.local/rudder/api/latest/">https://rudder.example.local/rudder/api/latest/</a> - Rudder server

Email: <a href="mailto:dev@rudder.io">Rudder developers</a> 
Web: <a href="https://www.rudder.io">Rudder developers</a> 
License: <a href="https://spdx.org/licenses/CC-BY-SA-2.0.html">CC-BY-SA 2.0</a>

<a href="https://docs.rudder.io">Learn more about Rudder.</a>

# Authentication

* API Key (API-Tokens)
    - Parameter Name: **X-API-Token**, in: header. Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.

![API Tokens settings](assets/APISettings.png "API Tokens settings")

API Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.

On any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:


    curl --request GET --header "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules


If you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.

<h1 id="rudder-api-api-info">API Info</h1>

Information about API endpoints and versions

## List all endoints

<a id="opIdapiGeneralInformations"></a>

> Code samples

```bash
curl https://example.com/info \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /info`

List all endpoints and their version

> Example responses

> 200 Response

```json
{
  "action": "apiGeneralInformations",
  "data": {
    "availableVersions": [
      {
        "all": [
          {
            "all": [
              {
                "status": "maintained",
                "version": 12
              }
            ],
            "latest": 12
          }
        ],
        "latest": 12
      }
    ],
    "documentation": "string",
    "endpoints": [
      [
        "{ 'listAcceptedNodes': 'List all accepted nodes with configurable details level', 'GET': '[8,9,10,11,12,13] /nodes' }"
      ]
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-endoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API endpoints|Inline|

<h3 id="list-all-endoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» availableVersions|[[api-versions](#schemaapi-versions)]|true|none|none|
|» documentation|string|true|none|Link to Rudder API description|
|» endpoints|[[api-endpoints](#schemaapi-endpoints)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|apiGeneralInformations|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get information about one API endpoint

<a id="opIdapiInformations"></a>

> Code samples

```bash
curl https://example.com/info/details/listAcceptedNodes \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /info/details/{endpointName}`

Get the description and the list of supported version for one API endpoint

<h3 id="get-information-about-one-api-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointName|path|string|true|Name of the endpoint for which one wants information|

> Example responses

> 200 Response

```json
{
  "action": "apiInformations",
  "data": {
    "documentation": "string",
    "endpointName": "string",
    "endpoints": [
      "{\n  \"listAcceptedNodes\": \"List all accepted nodes with configurable details level\",\n  \"GET\": \"[8,9,10,11,12,13] /nodes\"\n}"
    ]
  },
  "result": "success"
}
```

<h3 id="get-information-about-one-api-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Endpoint information|Inline|

<h3 id="get-information-about-one-api-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» documentation|string|true|none|Link to Rudder API description|
|» endpointName|string|true|none|The endpoint name as key and the endpoint description as value|
|» endpoints|[object]|true|none|none|
|» » httpVerb|object(The HTTP verb for the endpoint for key and the supported version and API path for value)|false|none|none|
|» » version|[api-version](#schemaapi-version)|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|apiInformations|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get information on endpoint in a section

<a id="opIdapiSubInformations"></a>

> Code samples

```bash
curl https://example.com/info/nodes \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /info/{sectionId}`

Get all endpoints in the given section with their supported version.

<h3 id="get-information-on-endpoint-in-a-section-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sectionId|path|string|true|Id of the API section|

> Example responses

> 200 Response

```json
{
  "action": "apiSubInformations",
  "data": {
    "availableVersions": [
      {
        "all": [
          {
            "all": [
              {
                "status": "maintained",
                "version": 12
              }
            ],
            "latest": 12
          }
        ],
        "latest": 12
      }
    ],
    "documentation": "string",
    "endpoints": [
      [
        "{ 'listAcceptedNodes': 'List all accepted nodes with configurable details level', 'GET': '[8,9,10,11,12,13] /nodes' }"
      ]
    ]
  },
  "result": "success"
}
```

<h3 id="get-information-on-endpoint-in-a-section-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Endpoint information|Inline|

<h3 id="get-information-on-endpoint-in-a-section-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» availableVersions|[[api-versions](#schemaapi-versions)]|true|none|none|
|» documentation|string|true|none|Link to Rudder API description|
|» endpoints|[[api-endpoints](#schemaapi-endpoints)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|apiSubInformations|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-status">Status</h1>

Is alive check

## Check if Rudder is alive

<a id="opIdnone"></a>

> Code samples

```bash
curl https://example.com/status \
  -H "X-API-Token: ${API_KEY}"
```

`GET /status`

An unauthenticated API to check if Rudder web application is up and running. Be careful: this API does not follow other Rudder's API convention: 
- it is not versioned, so the path is just `/api/status`;
- it returns a plain text message.

<h3 id="check-if-rudder-is-alive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK status message|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-compliance">Compliance</h1>

Access compliance data

## Global compliance

<a id="opIdgetGlobalCompliance"></a>

> Code samples

```bash
curl https://example.com/compliance \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /compliance`

Get current global compliance of a Rudder server

<h3 id="global-compliance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|precision|query|integer|false|Number of digits after comma in compliance percent figures|

> Example responses

> 200 Response

```json
{
  "action": "getGlobalCompliance",
  "data": {
    "globalCompliance": {
      "compliance": 57,
      "complianceDetails": {
        "error": 1.32,
        "noReport": 36.18,
        "successAlreadyOK": 48.68,
        "successNotApplicable": 5.92,
        "successRepaired": 2.63,
        "unexpectedMissingComponent": 2.63,
        "unexpectedUnknownComponent": 2.63
      }
    }
  },
  "result": "success"
}
```

<h3 id="global-compliance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="global-compliance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» globalCompliance|object|true|none|none|
|» » compliance|number(integer)|true|none|Global compliance level (`-1` when no policies are defined)|
|» » complianceDetails|object|false|none|none|
|» » » error|number(float)|false|none|none|
|» » » noReport|number(float)|false|none|none|
|» » » successAlreadyOK|number(float)|false|none|none|
|» » » successNotApplicable|number(float)|false|none|none|
|» » » successRepaired|number(float)|false|none|none|
|» » » unexpectedMissingComponent|number(float)|false|none|none|
|» » » unexpectedUnknownComponent|number(float)|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getGlobalCompliance|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Compliance details for all nodes

<a id="opIdgetNodesCompliance"></a>

> Code samples

```bash
curl https://example.com/compliance/nodes \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /compliance/nodes`

Get current compliance of all the nodes of a Rudder server

<h3 id="compliance-details-for-all-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|integer|false|Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)|
|precision|query|integer|false|Number of digits after comma in compliance percent figures|

> Example responses

> 200 Response

```json
{
  "action": "getNodesCompliance",
  "data": {
    "nodes": [
      {
        "compliance": 57.43,
        "complianceDetails": {
          "error": 1.32,
          "noReport": 36.18,
          "successAlreadyOK": 48.68,
          "successNotApplicable": 5.92,
          "successRepaired": 2.63,
          "unexpectedMissingComponent": 2.63,
          "unexpectedUnknownComponent": 2.63
        },
        "id": "f37f4928-fcb5-4acf-a422-d40f123a9670",
        "mode": "full-compliance"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="compliance-details-for-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="compliance-details-for-all-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» nodes|[object]|true|none|none|
|» » compliance|number(float)|true|none|Rule compliance level|
|» » complianceDetails|object|true|none|none|
|» » » error|number(float)|false|none|none|
|» » » noReport|number(float)|false|none|none|
|» » » successAlreadyOK|number(float)|false|none|none|
|» » » successNotApplicable|number(float)|false|none|none|
|» » » successRepaired|number(float)|false|none|none|
|» » » unexpectedMissingComponent|number(float)|false|none|none|
|» » » unexpectedUnknownComponent|number(float)|false|none|none|
|» » id|string(uuid)|true|none|id of the node|
|» » mode|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getNodesCompliance|
|» » mode|full-compliance|
|» » mode|changes-only|
|» » mode|reports-disabled|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Compliance details by node

<a id="opIdgetNodeCompliance"></a>

> Code samples

```bash
curl https://example.com/compliance/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /compliance/nodes/{nodeId}`

Get current compliance of a node of a Rudder server

<h3 id="compliance-details-by-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|integer|false|Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)|
|precision|query|integer|false|Number of digits after comma in compliance percent figures|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

> Example responses

> 200 Response

```json
{
  "action": "getNodeCompliance",
  "data": {
    "nodes": [
      {
        "compliance": 57.43,
        "complianceDetails": {
          "error": 1.32,
          "noReport": 36.18,
          "successAlreadyOK": 48.68,
          "successNotApplicable": 5.92,
          "successRepaired": 2.63,
          "unexpectedMissingComponent": 2.63,
          "unexpectedUnknownComponent": 2.63
        },
        "id": "f37f4928-fcb5-4acf-a422-d40f123a9670",
        "mode": "full-compliance"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="compliance-details-by-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="compliance-details-by-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» nodes|[object]|true|none|none|
|» » compliance|number(float)|true|none|Rule compliance level|
|» » complianceDetails|object|true|none|none|
|» » » error|number(float)|false|none|none|
|» » » noReport|number(float)|false|none|none|
|» » » successAlreadyOK|number(float)|false|none|none|
|» » » successNotApplicable|number(float)|false|none|none|
|» » » successRepaired|number(float)|false|none|none|
|» » » unexpectedMissingComponent|number(float)|false|none|none|
|» » » unexpectedUnknownComponent|number(float)|false|none|none|
|» » id|string(uuid)|true|none|id of the node|
|» » mode|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getNodeCompliance|
|» » mode|full-compliance|
|» » mode|changes-only|
|» » mode|reports-disabled|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Compliance details for all rules

<a id="opIdgetRulesCompliance"></a>

> Code samples

```bash
curl https://example.com/compliance/rules \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /compliance/rules`

Get current compliance of all the rules of a Rudder server

<h3 id="compliance-details-for-all-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|integer|false|Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)|
|precision|query|integer|false|Number of digits after comma in compliance percent figures|

> Example responses

> 200 Response

```json
{
  "action": "getRulesCompliance",
  "data": {
    "rules": [
      {
        "compliance": 57.43,
        "complianceDetails": {
          "error": 1.32,
          "noReport": 36.18,
          "successAlreadyOK": 48.68,
          "successNotApplicable": 5.92,
          "successRepaired": 2.63,
          "unexpectedMissingComponent": 2.63,
          "unexpectedUnknownComponent": 2.63
        },
        "id": "f37f4928-fcb5-4acf-a422-d40f123a9670",
        "mode": "full-compliance"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="compliance-details-for-all-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="compliance-details-for-all-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[object]|true|none|none|
|» » compliance|number(float)|true|none|Rule compliance level|
|» » complianceDetails|object|true|none|none|
|» » » error|number(float)|false|none|none|
|» » » noReport|number(float)|false|none|none|
|» » » successAlreadyOK|number(float)|false|none|none|
|» » » successNotApplicable|number(float)|false|none|none|
|» » » successRepaired|number(float)|false|none|none|
|» » » unexpectedMissingComponent|number(float)|false|none|none|
|» » » unexpectedUnknownComponent|number(float)|false|none|none|
|» » id|string(uuid)|true|none|id of the rule|
|» » mode|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getRulesCompliance|
|» » mode|full-compliance|
|» » mode|changes-only|
|» » mode|reports-disabled|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Compliance details by rule

<a id="opIdgetRuleCompliance"></a>

> Code samples

```bash
curl https://example.com/compliance/rules/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /compliance/rules/{ruleId}`

Get current compliance of a rule of a Rudder server

<h3 id="compliance-details-by-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|integer|false|Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)|
|precision|query|integer|false|Number of digits after comma in compliance percent figures|
|ruleId|path|string(uuid)|true|Id of the target rule|

> Example responses

> 200 Response

```json
{
  "action": "getRuleCompliance",
  "data": {
    "rules": [
      {
        "compliance": 57.43,
        "complianceDetails": {
          "error": 1.32,
          "noReport": 36.18,
          "successAlreadyOK": 48.68,
          "successNotApplicable": 5.92,
          "successRepaired": 2.63,
          "unexpectedMissingComponent": 2.63,
          "unexpectedUnknownComponent": 2.63
        },
        "id": "f37f4928-fcb5-4acf-a422-d40f123a9670",
        "mode": "full-compliance"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="compliance-details-by-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="compliance-details-by-rule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[object]|true|none|none|
|» » compliance|number(float)|true|none|Rule compliance level|
|» » complianceDetails|object|true|none|none|
|» » » error|number(float)|false|none|none|
|» » » noReport|number(float)|false|none|none|
|» » » successAlreadyOK|number(float)|false|none|none|
|» » » successNotApplicable|number(float)|false|none|none|
|» » » successRepaired|number(float)|false|none|none|
|» » » unexpectedMissingComponent|number(float)|false|none|none|
|» » » unexpectedUnknownComponent|number(float)|false|none|none|
|» » id|string(uuid)|true|none|id of the rule|
|» » mode|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getRuleCompliance|
|» » mode|full-compliance|
|» » mode|changes-only|
|» » mode|reports-disabled|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-rules">Rules</h1>

Rules management

## List all rules

<a id="opIdlistRules"></a>

> Code samples

```bash
curl https://example.com/rules \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /rules`

List all rules

> Example responses

> 200 Response

```json
{
  "action": "listRules",
  "data": {
    "rules": [
      {
        "directives": [
          "string"
        ],
        "displayName": "Security policy",
        "enabled": true,
        "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
        "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
        "shortDescription": "Baseline applying CIS guidelines",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "targets": [
          {
            "exclude": {
              "or": [
                "policyServer:root",
                "group:cd377524-808b-4b42-8724-6ef308efeac7"
              ]
            },
            "include": {
              "or": [
                "special:all"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="list-all-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[rule](#schemarule)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listRules|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a rule

<a id="opIdcreateRule"></a>

> Code samples

```bash
curl https://example.com/rules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
    "directives": [
      "string"
    ],
    "displayName": "Security policy",
    "enabled": true,
    "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
    "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
    "shortDescription": "Baseline applying CIS guidelines",
    "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
    "system": false,
    "tags": [
      {
        "customer": "MyCompany"
      }
    ],
    "targets": [
      {
        "exclude": {
          "or": [
            "policyServer:root",
            "group:cd377524-808b-4b42-8724-6ef308efeac7"
          ]
        },
        "include": {
          "or": [
            "special:all"
          ]
        }
      }
    ]
  }'
```

`PUT /rules`

Create a new rule. You can specify a source rule to clone it.

> Body parameter

```json
{
  "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
  "directives": [
    "string"
  ],
  "displayName": "Security policy",
  "enabled": true,
  "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
  "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
  "shortDescription": "Baseline applying CIS guidelines",
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "targets": [
    {
      "exclude": {
        "or": [
          "policyServer:root",
          "group:cd377524-808b-4b42-8724-6ef308efeac7"
        ]
      },
      "include": {
        "or": [
          "special:all"
        ]
      }
    }
  ]
}
```

<h3 id="create-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rule-new](#schemarule-new)|false|none|
|» category|body|string(uuid)|false|The parent category id. If provided, the new rule will be in this parent category|
|» directives|body|[string]|false|Directives linked to the rule|
|» displayName|body|string|false|Rule name|
|» enabled|body|boolean|false|Is the rule enabled|
|» id|body|string(uuid)|false|Rule id|
|» longDescription|body|string|false|Rule documentation|
|» shortDescription|body|string|false|One line rule description|
|» source|body|string(uuid)|false|The id of the rule the clone will be based onto. If this parameter if provided, the new rule will be a clone of this source. Other value will override values from the source.|
|» system|body|boolean|false|If true it is an internal Rudder rule|
|» tags|body|[object]|false|none|
|» » name|body|string|false|Value of the `name` key|
|» targets|body|[rule-targets](#schemarule-targets)|false|Node and special groups targeted by that rule|

> Example responses

> 200 Response

```json
{
  "action": "createRule",
  "data": {
    "rules": [
      {
        "directives": [
          "string"
        ],
        "displayName": "Security policy",
        "enabled": true,
        "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
        "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
        "shortDescription": "Baseline applying CIS guidelines",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "targets": [
          {
            "exclude": {
              "or": [
                "policyServer:root",
                "group:cd377524-808b-4b42-8724-6ef308efeac7"
              ]
            },
            "include": {
              "or": [
                "special:all"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="create-a-rule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[rule](#schemarule)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createRule|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a rule category

<a id="opIdCreateRuleCategory"></a>

> Code samples

```bash
curl https://example.com/rules/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Baseline applying CIS guidelines",
    "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
    "name": "Security policies",
    "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
  }'
```

`PUT /rules/categories`

Create a new rule category

> Body parameter

```json
{
  "description": "Baseline applying CIS guidelines",
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "name": "Security policies",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

<h3 id="create-a-rule-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rule-category](#schemarule-category)|true|none|
|» description|body|string|false|Rules category description|
|» id|body|string(uuid)|false|Rule category id, only provide it when needed.|
|» name|body|string|true|Name of the rule category|
|» parent|body|string(uuid)|true|The parent category of the rules|

> Example responses

> 200 Response

```json
{
  "action": "CreateRuleCategory",
  "data": {
    "ruleCategories": [
      {
        "description": "Baseline applying CIS guidelines",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Security policies",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-rule-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules category information|Inline|

<h3 id="create-a-rule-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» ruleCategories|[[rule-category](#schemarule-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|CreateRuleCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get rule category details

<a id="opIdGetRuleCategoryDetails"></a>

> Code samples

```bash
curl https://example.com/rules/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /rules/categories/{ruleCategoryId}`

Get detailed information about a rule category

<h3 id="get-rule-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleCategoryId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "GetRuleCategoryDetails",
  "data": {
    "rulesCategories": [
      {
        "description": "Baseline applying CIS guidelines",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Security policies",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-rule-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules category information|Inline|

<h3 id="get-rule-category-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rulesCategories|[[rule-category](#schemarule-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|GetRuleCategoryDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update rule category details

<a id="opIdUpdateRuleCategory"></a>

> Code samples

```bash
curl https://example.com/rules/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Baseline applying CIS guidelines",
    "name": "Security policies",
    "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
  }'
```

`POST /rules/categories/{ruleCategoryId}`

Update detailed information about a rule category

> Body parameter

```json
{
  "description": "Baseline applying CIS guidelines",
  "name": "Security policies",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

<h3 id="update-rule-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleCategoryId|path|string(uuid)|true|none|
|body|body|[rule-category-update](#schemarule-category-update)|true|none|
|» description|body|string|false|Rules category description|
|» name|body|string|true|Name of the rule category|
|» parent|body|string(uuid)|true|The parent category of the rules|

> Example responses

> 200 Response

```json
{
  "action": "UpdateRuleCategory",
  "data": {
    "ruleCategories": [
      {
        "description": "Baseline applying CIS guidelines",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Security policies",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-rule-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules category information|Inline|

<h3 id="update-rule-category-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» ruleCategories|[[rule-category](#schemarule-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|UpdateRuleCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete group category

<a id="opIdDeleteRuleCategory"></a>

> Code samples

```bash
curl https://example.com/rules/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /rules/categories/{ruleCategoryId}`

Delete a group category. It must have no child groups and no children categories.

<h3 id="delete-group-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleCategoryId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "DeleteRuleCategory",
  "data": {
    "groupCategories": [
      {
        "description": "Baseline applying CIS guidelines",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Security policies",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-group-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups category information|Inline|

<h3 id="delete-group-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|[[rule-category](#schemarule-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|DeleteRuleCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get rules tree

<a id="opIdGetRuleTree"></a>

> Code samples

```bash
curl https://example.com/rules/tree \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /rules/tree`

Get all available rules and their categories in a tree

> Example responses

> 200 Response

```json
{
  "action": "GetRuleTree",
  "data": {
    "categories": [
      {
        "categories": [
          {
            "categories": [],
            "description": "",
            "id": "f45ec2fd-69f4-4669-9c22-1af3abe2a107",
            "name": "Specific dev category",
            "parent": "4306143d-eabf-4478-b7b1-1616f4aa02b5",
            "rules": [
              {
                "directives": [],
                "displayName": "my specific Rule",
                "enabled": true,
                "id": "b7fda4e7-3616-4e99-89b0-8ffadaf6b0f0",
                "longDescription": "",
                "shortDescription": "",
                "system": false,
                "targets": []
              }
            ]
          }
        ],
        "description": "",
        "id": "4306143d-eabf-4478-b7b1-1616f4aa02b5",
        "name": "Dev category",
        "parent": "rootRuleCategory",
        "rules": [
          {
            "directives": [],
            "displayName": "dev Rule",
            "enabled": true,
            "id": "f2aa50a9-961c-4cce-a266-380cffcdce32",
            "longDescription": "",
            "shortDescription": "",
            "system": false,
            "targets": []
          }
        ]
      }
    ],
    "description": "This is the main category of Rules",
    "id": "rootRuleCategory",
    "name": "Rules",
    "parent": "rootRuleCategory",
    "rules": [
      {
        "directives": [],
        "displayName": "Global security policy",
        "enabled": true,
        "id": "43cde273-5bb0-466f-8850-7d3fdde03253",
        "longDescription": "",
        "shortDescription": "",
        "system": false,
        "targets": []
      },
      {
        "directives": [
          "bff45fe2-8233-4d28-96aa-78b0390b548b"
        ],
        "displayName": "Global configuration for all nodes",
        "enabled": false,
        "id": "32377fd7-02fd-43d0-aab7-28460a91347b",
        "longDescription": "This Rule was created automatically when Rudder was installed. It can be used to target Directives to all nodes (including the Rudder root server itself), or deleted if you would rather create your own set of Rules (it will never be created again).",
        "shortDescription": "",
        "system": false,
        "targets": [
          {
            "exclude": {
              "or": []
            },
            "include": {
              "or": [
                "special:all",
                "special:all_exceptPolicyServers",
                "special:all_policyServers"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-rules-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="get-rules-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» ruleCategories|object|true|none|Rule tree|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|GetRuleTree|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get a rule details

<a id="opIdruleDetails"></a>

> Code samples

```bash
curl https://example.com/rules/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /rules/{ruleId}`

Get the details of a rule

<h3 id="get-a-rule-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|string(uuid)|true|Id of the target rule|

> Example responses

> 200 Response

```json
{
  "action": "ruleDetails",
  "data": {
    "rules": [
      {
        "directives": [
          "string"
        ],
        "displayName": "Security policy",
        "enabled": true,
        "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
        "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
        "shortDescription": "Baseline applying CIS guidelines",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "targets": [
          {
            "exclude": {
              "or": [
                "policyServer:root",
                "group:cd377524-808b-4b42-8724-6ef308efeac7"
              ]
            },
            "include": {
              "or": [
                "special:all"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-a-rule-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="get-a-rule-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[rule](#schemarule)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ruleDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a rule details

<a id="opIdupdateRule"></a>

> Code samples

```bash
curl https://example.com/rules/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
    "directives": [
      "string"
    ],
    "displayName": "Security policy",
    "enabled": true,
    "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
    "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
    "shortDescription": "Baseline applying CIS guidelines",
    "system": false,
    "tags": [
      {
        "customer": "MyCompany"
      }
    ],
    "targets": [
      {
        "exclude": {
          "or": [
            "policyServer:root",
            "group:cd377524-808b-4b42-8724-6ef308efeac7"
          ]
        },
        "include": {
          "or": [
            "special:all"
          ]
        }
      }
    ]
  }'
```

`POST /rules/{ruleId}`

Update the details of a rule

> Body parameter

```json
{
  "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
  "directives": [
    "string"
  ],
  "displayName": "Security policy",
  "enabled": true,
  "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
  "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
  "shortDescription": "Baseline applying CIS guidelines",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "targets": [
    {
      "exclude": {
        "or": [
          "policyServer:root",
          "group:cd377524-808b-4b42-8724-6ef308efeac7"
        ]
      },
      "include": {
        "or": [
          "special:all"
        ]
      }
    }
  ]
}
```

<h3 id="update-a-rule-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|string(uuid)|true|Id of the target rule|
|body|body|[rule-with-category](#schemarule-with-category)|true|none|
|» category|body|string(uuid)|false|The parent category id.|
|» directives|body|[string]|false|Directives linked to the rule|
|» displayName|body|string|false|Rule name|
|» enabled|body|boolean|false|Is the rule enabled|
|» id|body|string(uuid)|false|Rule id|
|» longDescription|body|string|false|Rule documentation|
|» shortDescription|body|string|false|One line rule description|
|» system|body|boolean|false|If true it is an internal Rudder rule|
|» tags|body|[object]|false|none|
|» » name|body|string|false|Value of the `name` key|
|» targets|body|[rule-targets](#schemarule-targets)|false|Node and special groups targeted by that rule|

> Example responses

> 200 Response

```json
{
  "action": "updateRule",
  "data": {
    "rules": [
      {
        "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
        "directives": [
          "string"
        ],
        "displayName": "Security policy",
        "enabled": true,
        "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
        "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
        "shortDescription": "Baseline applying CIS guidelines",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "targets": [
          {
            "exclude": {
              "or": [
                "policyServer:root",
                "group:cd377524-808b-4b42-8724-6ef308efeac7"
              ]
            },
            "include": {
              "or": [
                "special:all"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-a-rule-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="update-a-rule-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[rule-with-category](#schemarule-with-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateRule|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a rule

<a id="opIddeleteRule"></a>

> Code samples

```bash
curl https://example.com/rules/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /rules/{ruleId}`

Delete a rule.

<h3 id="delete-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|string(uuid)|true|Id of the target rule|

> Example responses

> 200 Response

```json
{
  "action": "deleteRule",
  "data": {
    "rules": [
      {
        "directives": [
          "string"
        ],
        "displayName": "Security policy",
        "enabled": true,
        "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
        "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
        "shortDescription": "Baseline applying CIS guidelines",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "targets": [
          {
            "exclude": {
              "or": [
                "policyServer:root",
                "group:cd377524-808b-4b42-8724-6ef308efeac7"
              ]
            },
            "include": {
              "or": [
                "special:all"
              ]
            }
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules information|Inline|

<h3 id="delete-a-rule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[rule](#schemarule)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteRule|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-directives">Directives</h1>

Directives management

## List all directives

<a id="opIdlistDirectives"></a>

> Code samples

```bash
curl https://example.com/directives \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /directives`

List all directives

> Example responses

> 200 Response

```json
{
  "action": "listDirectives",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-directives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="list-all-directives-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listDirectives|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a directive

<a id="opIdcreateDirective"></a>

> Code samples

```bash
curl https://example.com/directives \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "enabled": true,
    "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
    "parameters": {
      "name": "sections",
      "sections": [
        {
          "section": {
            "name": "File to manage",
            "sections": [
              {
                "section": {
                  "name": "File",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                        "value": "/root/test"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "File cleaning options",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_DAYS",
                        "value": "0"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_OPTION",
                        "value": "none"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                        "value": ".*"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Permissions",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                        "value": "false"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                        "value": "000"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                        "value": "1"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Post-modification hook",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                        "value": "false"
                      }
                    }
                  ]
                }
              }
            ],
            "vars": [
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                  "value": "copy"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                  "value": "/vagrant/node.sh"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                  "value": "false"
                }
              }
            ]
          }
        }
      ]
    },
    "priority": 5,
    "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
    "system": false,
    "tags": [
      {
        "customer": "MyCompany"
      }
    ],
    "techniqueName": "userManagement",
    "techniqueVersion": "8.0"
  }'
```

`PUT /directives`

Create a new directive from provided parameters. You can specify a source directive to clone it.

> Body parameter

```json
{
  "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "enabled": true,
  "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
  "parameters": {
    "name": "sections",
    "sections": [
      {
        "section": {
          "name": "File to manage",
          "sections": [
            {
              "section": {
                "name": "File",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                      "value": "/root/test"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "File cleaning options",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_DAYS",
                      "value": "0"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_OPTION",
                      "value": "none"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                      "value": ".*"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Permissions",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                      "value": "false"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                      "value": "000"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                      "value": "1"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Post-modification hook",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ],
          "vars": [
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                "value": "copy"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                "value": "/vagrant/node.sh"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                "value": "false"
              }
            }
          ]
        }
      }
    ]
  },
  "priority": 5,
  "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "techniqueName": "userManagement",
  "techniqueVersion": "8.0"
}
```

<h3 id="create-a-directive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[directive-new](#schemadirective-new)|false|none|
|» displayName|body|string|false|Human readable name of the directive|
|» enabled|body|boolean|false|Is the directive enabled|
|» id|body|string(uuid)|false|Directive id|
|» longDescription|body|string(markdown)|false|Description of the technique (rendered as markdown)|
|» parameters|body|object|false|Directive parameters (depends on the source technique)|
|» priority|body|integer|false|Directive priority. `0` has highest priority.|
|» shortDescription|body|string|false|One line directive description|
|» source|body|string(uuid)|false|The id of the directive the clone will be based onto. If this parameter if provided,  the new directive will be a clone of this source. Other value will override values from the source.|
|» system|body|boolean|false|If true it is an internal Rudder directive|
|» tags|body|[object]|false|none|
|» » name|body|string|false|Value of the `name` key|
|» techniqueName|body|string|false|Directive id|
|» techniqueVersion|body|string|false|Directive id|

> Example responses

> 200 Response

```json
{
  "action": "createDirective",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-directive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="create-a-directive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createDirective|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get directive details

<a id="opIddirectiveDetails"></a>

> Code samples

```bash
curl https://example.com/directives/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /directives/{directiveId}`

Get all information about a given directive

<h3 id="get-directive-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directiveId|path|string(uuid)|true|Id of the directive|

> Example responses

> 200 Response

```json
{
  "action": "directiveDetails",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-directive-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="get-directive-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|directiveDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a directive details

<a id="opIdupdateDirective"></a>

> Code samples

```bash
curl https://example.com/directives/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "enabled": true,
    "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
    "parameters": {
      "name": "sections",
      "sections": [
        {
          "section": {
            "name": "File to manage",
            "sections": [
              {
                "section": {
                  "name": "File",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                        "value": "/root/test"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "File cleaning options",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_DAYS",
                        "value": "0"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_OPTION",
                        "value": "none"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                        "value": ".*"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Permissions",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                        "value": "false"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                        "value": "000"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                        "value": "1"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Post-modification hook",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                        "value": "false"
                      }
                    }
                  ]
                }
              }
            ],
            "vars": [
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                  "value": "copy"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                  "value": "/vagrant/node.sh"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                  "value": "false"
                }
              }
            ]
          }
        }
      ]
    },
    "policyMode": "audit",
    "priority": 5,
    "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "system": false,
    "tags": [
      {
        "customer": "MyCompany"
      }
    ],
    "techniqueName": "userManagement",
    "techniqueVersion": "8.0"
  }'
```

`POST /directives/{directiveId}`

Update directive information

> Body parameter

```json
{
  "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "enabled": true,
  "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
  "parameters": {
    "name": "sections",
    "sections": [
      {
        "section": {
          "name": "File to manage",
          "sections": [
            {
              "section": {
                "name": "File",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                      "value": "/root/test"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "File cleaning options",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_DAYS",
                      "value": "0"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_OPTION",
                      "value": "none"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                      "value": ".*"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Permissions",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                      "value": "false"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                      "value": "000"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                      "value": "1"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Post-modification hook",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ],
          "vars": [
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                "value": "copy"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                "value": "/vagrant/node.sh"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                "value": "false"
              }
            }
          ]
        }
      }
    ]
  },
  "policyMode": "audit",
  "priority": 5,
  "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "techniqueName": "userManagement",
  "techniqueVersion": "8.0"
}
```

<h3 id="update-a-directive-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directiveId|path|string(uuid)|true|Id of the directive|
|body|body|[directive](#schemadirective)|true|none|
|» displayName|body|string|false|Human readable name of the directive|
|» enabled|body|boolean|false|Is the directive enabled|
|» id|body|string(uuid)|false|Directive id|
|» longDescription|body|string(markdown)|false|Description of the technique (rendered as markdown)|
|» parameters|body|object|false|Directive parameters (depends on the source technique)|
|» policyMode|body|string|false|Policy mode of the directive|
|» priority|body|integer|false|Directive priority. `0` has highest priority.|
|» shortDescription|body|string|false|One line directive description|
|» system|body|boolean|false|If true it is an internal Rudder directive|
|» tags|body|[object]|false|none|
|» » name|body|string|false|Value of the `name` key|
|» techniqueName|body|string|false|Directive id|
|» techniqueVersion|body|string|false|Directive id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» policyMode|enforce|
|» policyMode|audit|

> Example responses

> 200 Response

```json
{
  "action": "updateDirective",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-a-directive-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="update-a-directive-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateDirective|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a directive

<a id="opIddeleteDirective"></a>

> Code samples

```bash
curl https://example.com/directives/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /directives/{directiveId}`

Delete a directive

<h3 id="delete-a-directive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directiveId|path|string(uuid)|true|Id of the directive|

> Example responses

> 200 Response

```json
{
  "action": "deleteDirective",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-directive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="delete-a-directive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteDirective|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Check that update on a directive is valid

<a id="opIdcheckDirective"></a>

> Code samples

```bash
curl https://example.com/directives/9a1773c9-0889-40b6-be89-f6504443ac1b/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "enabled": true,
    "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
    "parameters": {
      "name": "sections",
      "sections": [
        {
          "section": {
            "name": "File to manage",
            "sections": [
              {
                "section": {
                  "name": "File",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                        "value": "/root/test"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "File cleaning options",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_DAYS",
                        "value": "0"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_OPTION",
                        "value": "none"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                        "value": ".*"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Permissions",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                        "value": "false"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                        "value": "000"
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                        "value": "1"
                      }
                    }
                  ]
                }
              },
              {
                "section": {
                  "name": "Post-modification hook",
                  "vars": [
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                        "value": ""
                      }
                    },
                    {
                      "var": {
                        "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                        "value": "false"
                      }
                    }
                  ]
                }
              }
            ],
            "vars": [
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                  "value": "copy"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                  "value": "/vagrant/node.sh"
                }
              },
              {
                "var": {
                  "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                  "value": "false"
                }
              }
            ]
          }
        }
      ]
    },
    "policyMode": "audit",
    "priority": 5,
    "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
    "system": false,
    "tags": [
      {
        "customer": "MyCompany"
      }
    ],
    "techniqueName": "userManagement",
    "techniqueVersion": "8.0"
  }'
```

`POST /directives/{directiveId}/check`

Check that update on a directive is valid

> Body parameter

```json
{
  "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "enabled": true,
  "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
  "parameters": {
    "name": "sections",
    "sections": [
      {
        "section": {
          "name": "File to manage",
          "sections": [
            {
              "section": {
                "name": "File",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                      "value": "/root/test"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "File cleaning options",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_DAYS",
                      "value": "0"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_OPTION",
                      "value": "none"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                      "value": ".*"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Permissions",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                      "value": "false"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                      "value": "000"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                      "value": "1"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Post-modification hook",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ],
          "vars": [
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                "value": "copy"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                "value": "/vagrant/node.sh"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                "value": "false"
              }
            }
          ]
        }
      }
    ]
  },
  "policyMode": "audit",
  "priority": 5,
  "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "techniqueName": "userManagement",
  "techniqueVersion": "8.0"
}
```

<h3 id="check-that-update-on-a-directive-is-valid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directiveId|path|string(uuid)|true|Id of the directive|
|body|body|[directive](#schemadirective)|true|none|
|» displayName|body|string|false|Human readable name of the directive|
|» enabled|body|boolean|false|Is the directive enabled|
|» id|body|string(uuid)|false|Directive id|
|» longDescription|body|string(markdown)|false|Description of the technique (rendered as markdown)|
|» parameters|body|object|false|Directive parameters (depends on the source technique)|
|» policyMode|body|string|false|Policy mode of the directive|
|» priority|body|integer|false|Directive priority. `0` has highest priority.|
|» shortDescription|body|string|false|One line directive description|
|» system|body|boolean|false|If true it is an internal Rudder directive|
|» tags|body|[object]|false|none|
|» » name|body|string|false|Value of the `name` key|
|» techniqueName|body|string|false|Directive id|
|» techniqueVersion|body|string|false|Directive id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» policyMode|enforce|
|» policyMode|audit|

> Example responses

> 200 Response

```json
{
  "action": "checkDirective",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="check-that-update-on-a-directive-is-valid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directives information|Inline|

<h3 id="check-that-update-on-a-directive-is-valid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|checkDirective|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-techniques">Techniques</h1>

Techniques management

## List methods

<a id="opIdmethods"></a>

> Code samples

```bash
curl https://example.com/methods \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /methods`

Get all generic methods metadata

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "methods": {
      "agents": [
        "dsc"
      ],
      "category": "user_techniques",
      "condition": {
        "parameter": "package",
        "prefix": "package_present"
      },
      "deprecated": {
        "info": "titi",
        "replacedBy": "tutu"
      },
      "desc": "Enforce the presence of a package",
      "documentation": "toto",
      "id": "package_present",
      "name": "Package present",
      "parameters": [
        {
          "constraints": {
            "allow_empty_string": false,
            "allow_whitespace_string": true,
            "max_length": 250,
            "min_length": 5,
            "not_regex": "^c.*",
            "regex": ".*",
            "select": [
              "!="
            ]
          },
          "description": "Name of a package to install",
          "name": "package",
          "typ": "test"
        }
      ],
      "version": "1.0"
    }
  },
  "result": "success"
}
```

<h3 id="list-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Methods information|Inline|

<h3 id="list-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» methods|[methods](#schemamethods)|true|none|List of available generic methods|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload methods

<a id="opIdreloadMethods"></a>

> Code samples

```bash
curl https://example.com/methods/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /methods/reload`

Reload methods metadata from file system

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "methods": {
      "agents": [
        "dsc"
      ],
      "category": "user_techniques",
      "condition": {
        "parameter": "package",
        "prefix": "package_present"
      },
      "deprecated": {
        "info": "titi",
        "replacedBy": "tutu"
      },
      "desc": "Enforce the presence of a package",
      "documentation": "toto",
      "id": "package_present",
      "name": "Package present",
      "parameters": [
        {
          "constraints": {
            "allow_empty_string": false,
            "allow_whitespace_string": true,
            "max_length": 250,
            "min_length": 5,
            "not_regex": "^c.*",
            "regex": ".*",
            "select": [
              "!="
            ]
          },
          "description": "Name of a package to install",
          "name": "package",
          "typ": "test"
        }
      ],
      "version": "1.0"
    }
  },
  "result": "success"
}
```

<h3 id="reload-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Methods information|Inline|

<h3 id="reload-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» methods|[methods](#schemamethods)|true|none|List of available generic methods|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List all techniques

<a id="opIdlistTechniques"></a>

> Code samples

```bash
curl https://example.com/techniques \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques`

List all technique with their versions

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "calls": [
          {
            "component": "Install apache2",
            "condition": "linux.package_present_vim_repaired",
            "disableReporting": true,
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "method": "package_present",
            "parameters": [
              {
                "name": "package",
                "value": "apache2"
              }
            ]
          }
        ],
        "category": "user_techniques",
        "description": "This techniques apply generic security policies",
        "id": "security-policy",
        "name": "Security Policy",
        "parameters": [
          {
            "description": "Name of a package to install",
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "mayBeEmpty": true,
            "name": "Package to install"
          }
        ],
        "resources": [
          {
            "name": "conf/my/app/new",
            "state": "modified"
          }
        ],
        "source": "editor",
        "version": "1.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-techniques-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="list-all-techniques-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[techniques](#schematechniques)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create technique

<a id="opIdCreateTechnique"></a>

> Code samples

```bash
curl https://example.com/techniques \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '[
    {
      "calls": [
        {
          "component": "Install apache2",
          "condition": "linux.package_present_vim_repaired",
          "disableReporting": true,
          "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
          "method": "package_present",
          "parameters": [
            {
              "name": "package",
              "value": "apache2"
            }
          ]
        }
      ],
      "category": "user_techniques",
      "description": "This techniques apply generic security policies",
      "id": "security-policy",
      "name": "Security Policy",
      "parameters": [
        {
          "description": "Name of a package to install",
          "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
          "mayBeEmpty": true,
          "name": "Package to install"
        }
      ],
      "resources": [
        {
          "name": "conf/my/app/new",
          "state": "modified"
        }
      ],
      "source": "editor",
      "version": "1.0"
    }
  ]'
```

`PUT /techniques`

Create a new technique in Rudder from a technique in the technique editor

> Body parameter

```json
[
  {
    "calls": [
      {
        "component": "Install apache2",
        "condition": "linux.package_present_vim_repaired",
        "disableReporting": true,
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "method": "package_present",
        "parameters": [
          {
            "name": "package",
            "value": "apache2"
          }
        ]
      }
    ],
    "category": "user_techniques",
    "description": "This techniques apply generic security policies",
    "id": "security-policy",
    "name": "Security Policy",
    "parameters": [
      {
        "description": "Name of a package to install",
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "mayBeEmpty": true,
        "name": "Package to install"
      }
    ],
    "resources": [
      {
        "name": "conf/my/app/new",
        "state": "modified"
      }
    ],
    "source": "editor",
    "version": "1.0"
  }
]
```

<h3 id="create-technique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[techniques](#schematechniques)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": {
      "technique": {
        "calls": [
          {
            "component": "Install apache2",
            "condition": "linux.package_present_vim_repaired",
            "disableReporting": true,
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "method": "package_present",
            "parameters": [
              {
                "name": "package",
                "value": "apache2"
              }
            ]
          }
        ],
        "category": "user_techniques",
        "description": "This techniques apply generic security policies",
        "id": "security-policy",
        "name": "Security Policy",
        "parameters": [
          {
            "description": "Name of a package to install",
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "mayBeEmpty": true,
            "name": "Package to install"
          }
        ],
        "resources": [
          {
            "name": "conf/my/app/new",
            "state": "modified"
          }
        ],
        "source": "editor",
        "version": "1.0"
      }
    }
  },
  "result": "success"
}
```

<h3 id="create-technique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Versions information|Inline|

<h3 id="create-technique-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|object|true|none|none|
|» » technique|[editorTechnique](#schemaeditortechnique)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List categories

<a id="opIdtechniqueCategories"></a>

> Code samples

```bash
curl https://example.com/techniques/categories \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/categories`

Get all technique categories

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniqueCategories": {
      "id": "/",
      "name": "/",
      "path": "",
      "subcategories": [
        {
          "id": "systemManagement",
          "name": "User Techniques",
          "path": "systemSettings/systemManagement",
          "subcategories": []
        }
      ]
    }
  },
  "result": "success"
}
```

<h3 id="list-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Categories information|Inline|

<h3 id="list-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniqueCategories|[categories-tree](#schemacategories-tree)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload techniques

<a id="opIdtechniques"></a>

> Code samples

```bash
curl https://example.com/techniques/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /techniques/reload`

Reload all techniques metadata from file system

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "calls": [
          {
            "component": "Install apache2",
            "condition": "linux.package_present_vim_repaired",
            "disableReporting": true,
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "method": "package_present",
            "parameters": [
              {
                "name": "package",
                "value": "apache2"
              }
            ]
          }
        ],
        "category": "user_techniques",
        "description": "This techniques apply generic security policies",
        "id": "security-policy",
        "name": "Security Policy",
        "parameters": [
          {
            "description": "Name of a package to install",
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "mayBeEmpty": true,
            "name": "Package to install"
          }
        ],
        "resources": [
          {
            "name": "conf/my/app/new",
            "state": "modified"
          }
        ],
        "source": "editor",
        "version": "1.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="reload-techniques-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="reload-techniques-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[techniques](#schematechniques)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List versions

<a id="opIdlistTechniquesVersions"></a>

> Code samples

```bash
curl https://example.com/techniques/versions \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/versions`

List all techniques version

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "name": "userManagement",
        "version": [
          "1.0",
          "1.2",
          "3.0"
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Versions information|Inline|

<h3 id="list-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[techniques-versions](#schematechniques-versions)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Technique metadata by ID

<a id="opIdgetTechniqueAllVersion"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}`

Get each Technique's versions with their metadata by ID

<h3 id="technique-metadata-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "JREditorTechnique": {
          "calls": [
            {
              "component": "Install apache2",
              "condition": "linux.package_present_vim_repaired",
              "disableReporting": true,
              "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
              "method": "package_present",
              "parameters": [
                {
                  "name": "package",
                  "value": "apache2"
                }
              ]
            }
          ],
          "category": "user_techniques",
          "description": "This techniques apply generic security policies",
          "id": "security-policy",
          "name": "Security Policy",
          "parameters": [
            {
              "description": "Name of a package to install",
              "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
              "mayBeEmpty": true,
              "name": "Package to install"
            }
          ],
          "resources": [
            {
              "name": "conf/my/app/new",
              "state": "modified"
            }
          ],
          "source": "editor",
          "version": "1.0"
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="technique-metadata-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="technique-metadata-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[object]|true|none|none|
|» » JREditorTechnique|[editorTechnique](#schemaeditortechnique)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List all directives based on a technique

<a id="opIdlistTechniquesDirectives"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/directives \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}/directives`

List all directives based on all version of a technique

<h3 id="list-all-directives-based-on-a-technique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|

> Example responses

> 200 Response

```json
{
  "action": "listTechniquesDirectives",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-directives-based-on-a-technique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="list-all-directives-based-on-a-technique-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniquesDirectives|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Technique metadata by version and ID

<a id="opIdgetTechniqueAllVersionId"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0 \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}/{techniqueVersion}`

Get Technique metadata

<h3 id="technique-metadata-by-version-and-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "JREditorTechnique": {
          "calls": [
            {
              "component": "Install apache2",
              "condition": "linux.package_present_vim_repaired",
              "disableReporting": true,
              "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
              "method": "package_present",
              "parameters": [
                {
                  "name": "package",
                  "value": "apache2"
                }
              ]
            }
          ],
          "category": "user_techniques",
          "description": "This techniques apply generic security policies",
          "id": "security-policy",
          "name": "Security Policy",
          "parameters": [
            {
              "description": "Name of a package to install",
              "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
              "mayBeEmpty": true,
              "name": "Package to install"
            }
          ],
          "resources": [
            {
              "name": "conf/my/app/new",
              "state": "modified"
            }
          ],
          "source": "editor",
          "version": "1.0"
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="technique-metadata-by-version-and-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="technique-metadata-by-version-and-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[object]|true|none|none|
|» » JREditorTechnique|[editorTechnique](#schemaeditortechnique)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update technique

<a id="opIdupdateTechnique"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '[
    {
      "calls": [
        {
          "component": "Install apache2",
          "condition": "linux.package_present_vim_repaired",
          "disableReporting": true,
          "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
          "method": "package_present",
          "parameters": [
            {
              "name": "package",
              "value": "apache2"
            }
          ]
        }
      ],
      "category": "user_techniques",
      "description": "This techniques apply generic security policies",
      "id": "security-policy",
      "name": "Security Policy",
      "parameters": [
        {
          "description": "Name of a package to install",
          "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
          "mayBeEmpty": true,
          "name": "Package to install"
        }
      ],
      "resources": [
        {
          "name": "conf/my/app/new",
          "state": "modified"
        }
      ],
      "source": "editor",
      "version": "1.0"
    }
  ]'
```

`POST /techniques/{techniqueId}/{techniqueVersion}`

Update technique created with technique editor

> Body parameter

```json
[
  {
    "calls": [
      {
        "component": "Install apache2",
        "condition": "linux.package_present_vim_repaired",
        "disableReporting": true,
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "method": "package_present",
        "parameters": [
          {
            "name": "package",
            "value": "apache2"
          }
        ]
      }
    ],
    "category": "user_techniques",
    "description": "This techniques apply generic security policies",
    "id": "security-policy",
    "name": "Security Policy",
    "parameters": [
      {
        "description": "Name of a package to install",
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "mayBeEmpty": true,
        "name": "Package to install"
      }
    ],
    "resources": [
      {
        "name": "conf/my/app/new",
        "state": "modified"
      }
    ],
    "source": "editor",
    "version": "1.0"
  }
]
```

<h3 id="update-technique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|
|body|body|[techniques](#schematechniques)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": {
      "technique": {
        "calls": [
          {
            "component": "Install apache2",
            "condition": "linux.package_present_vim_repaired",
            "disableReporting": true,
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "method": "package_present",
            "parameters": [
              {
                "name": "package",
                "value": "apache2"
              }
            ]
          }
        ],
        "category": "user_techniques",
        "description": "This techniques apply generic security policies",
        "id": "security-policy",
        "name": "Security Policy",
        "parameters": [
          {
            "description": "Name of a package to install",
            "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
            "mayBeEmpty": true,
            "name": "Package to install"
          }
        ],
        "resources": [
          {
            "name": "conf/my/app/new",
            "state": "modified"
          }
        ],
        "source": "editor",
        "version": "1.0"
      }
    }
  },
  "result": "success"
}
```

<h3 id="update-technique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Versions information|Inline|

<h3 id="update-technique-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|object|true|none|none|
|» » technique|[editorTechnique](#schemaeditortechnique)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete technique

<a id="opIddeleteTechnique"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /techniques/{techniqueId}/{techniqueVersion}`

Delete a technique from technique editor

<h3 id="delete-technique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": {
      "id": "foo",
      "version": 1
    }
  },
  "result": "success"
}
```

<h3 id="delete-technique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion information|Inline|

<h3 id="delete-technique-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|object|false|none|none|
|» » id|string|true|none|Deleted technique ID|
|» » version|string|true|none|Deleted technique version|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List all directives based on a version of a technique

<a id="opIdlistTechniqueVersionDirectives"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0/directives \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}/{techniqueVersion}/directives`

List all directives based on a version of a technique

<h3 id="list-all-directives-based-on-a-version-of-a-technique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|

> Example responses

> 200 Response

```json
{
  "action": "listTechniqueDirectives",
  "data": {
    "directives": [
      {
        "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "enabled": true,
        "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
        "parameters": {
          "name": "sections",
          "sections": [
            {
              "section": {
                "name": "File to manage",
                "sections": [
                  {
                    "section": {
                      "name": "File",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                            "value": "/root/test"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "File cleaning options",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_DAYS",
                            "value": "0"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_OPTION",
                            "value": "none"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                            "value": ".*"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Permissions",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                            "value": "false"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                            "value": "000"
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                            "value": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "section": {
                      "name": "Post-modification hook",
                      "vars": [
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                            "value": ""
                          }
                        },
                        {
                          "var": {
                            "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                            "value": "false"
                          }
                        }
                      ]
                    }
                  }
                ],
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                      "value": "copy"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                      "value": "/vagrant/node.sh"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ]
        },
        "policyMode": "audit",
        "priority": 5,
        "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
        "system": false,
        "tags": [
          {
            "customer": "MyCompany"
          }
        ],
        "techniqueName": "userManagement",
        "techniqueVersion": "8.0"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-directives-based-on-a-version-of-a-technique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Techniques information|Inline|

<h3 id="list-all-directives-based-on-a-version-of-a-technique-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» directives|[[directive](#schemadirective)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniqueDirectives|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Technique's resources

<a id="opIdgetTechniquesResources"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0/resources \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}/{techniqueVersion}/resources`

Get currently deployed resources of a technique

<h3 id="techniques-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "resources": [
      {
        "name": "apply-policy.robot",
        "state": "untouched"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="techniques-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resources information|Inline|

<h3 id="techniques-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» resources|[techniques-resources](#schematechniques-resources)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Technique's revisions

<a id="opIdtechniqueRevisions"></a>

> Code samples

```bash
curl https://example.com/techniques/userManagement/6.0/revisions \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /techniques/{techniqueId}/{techniqueVersion}/revisions`

Get revisions for given technique

<h3 id="techniques-revisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|techniqueId|path|string|true|Technique ID|
|techniqueVersion|path|string|true|Technique version|

> Example responses

> 200 Response

```json
{
  "action": "listTechniques",
  "data": {
    "techniques": [
      {
        "author": "admin",
        "date": "2022-06-14T16:20:40+02:00",
        "message": "Committing technique bar",
        "revision": "6faf7e9c47f2c3a41784598b5acf2883bd4e1e08"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="techniques-revisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Versions information|Inline|

<h3 id="techniques-revisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|[techniques-revisions](#schematechniques-revisions)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listTechniques|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-groups">Groups</h1>

Groups management

## List all groups

<a id="opIdlistGroups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /groups`

List all groups

> Example responses

> 200 Response

```json
{
  "action": "listGroups",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="list-all-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listGroups|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a group

<a id="opIdcreateGroup"></a>

> Code samples

```bash
curl https://example.com/groups \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
    "description": "Documentation for the group",
    "displayName": "Ubuntu 18.04 nodes",
    "dynamic": true,
    "enabled": true,
    "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
    "properties": [
      {
        "name": "os",
        "value": "debian10"
      }
    ],
    "query": {
      "composition": "and",
      "select": "node",
      "where": [
        {
          "attribute": "OS",
          "comparator": "eq",
          "objectType": "node",
          "value": "Linux"
        }
      ]
    },
    "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
  }'
```

`PUT /groups`

Create a new group based in provided parameters

> Body parameter

```json
{
  "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
  "description": "Documentation for the group",
  "displayName": "Ubuntu 18.04 nodes",
  "dynamic": true,
  "enabled": true,
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "properties": [
    {
      "name": "os",
      "value": "debian10"
    }
  ],
  "query": {
    "composition": "and",
    "select": "node",
    "where": [
      {
        "attribute": "OS",
        "comparator": "eq",
        "objectType": "node",
        "value": "Linux"
      }
    ]
  },
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

<h3 id="create-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[group-new](#schemagroup-new)|false|none|
|» category|body|string(uuid)|true|Id of the new group's category|
|» description|body|string|false|Group description|
|» displayName|body|string|true|Name of the group|
|» dynamic|body|boolean|false|Should the group be dynamically refreshed (if not, it is a static group)|
|» enabled|body|boolean|false|Enable or disable the group|
|» id|body|string(uuid)|false|Group id, only provide it when needed.|
|» properties|body|[object]|false|Group properties|
|» » name|body|string|true|Property name|
|» » value|body|object(string or JSON)|true|Property value (can be a string or JSON object)|
|» query|body|object|false|The criteria defining the group. If not provided, the group will be empty.|
|» » composition|body|string|false|Boolean operator to use between each  `where` criteria.|
|» » select|body|string|false|What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.|
|» » where|body|[object]|false|List of criteria|
|» » » attribute|body|string|false|Attribute to compare|
|» » » comparator|body|string|false|Comparator to use|
|» » » objectType|body|string|false|Type of the object|
|» » » value|body|string|false|Value to compare against|
|» source|body|string(uuid)|false|The id of the group the clone will be based onto. If this parameter if provided,  the new group will be a clone of this source. Other value will override values from the source.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » composition|and|
|» » composition|or|

> Example responses

> 200 Response

```json
{
  "action": "createGroup",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group information|Inline|

<h3 id="create-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createGroup|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a group category

<a id="opIdCreateGroupCategory"></a>

> Code samples

```bash
curl https://example.com/groups/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Nodes by hardware provider",
    "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
    "name": "Hardware groups",
    "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
  }'
```

`PUT /groups/categories`

Create a new group category

> Body parameter

```json
{
  "description": "Nodes by hardware provider",
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "name": "Hardware groups",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

<h3 id="create-a-group-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[group-category](#schemagroup-category)|true|none|
|» description|body|string|false|Group category description|
|» id|body|string(uuid)|false|Group category id, only provide it when needed.|
|» name|body|string|true|Name of the group category|
|» parent|body|string(uuid)|true|The parent category of the groups|

> Example responses

> 200 Response

```json
{
  "action": "CreateGroupCategory",
  "data": {
    "groupCategories": [
      {
        "description": "Nodes by hardware provider",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Hardware groups",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-group-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups category information|Inline|

<h3 id="create-a-group-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|[[group-category](#schemagroup-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|CreateGroupCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get group category details

<a id="opIdGetGroupCategoryDetails"></a>

> Code samples

```bash
curl https://example.com/groups/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /groups/categories/{groupCategoryId}`

Get detailed information about a group category

<h3 id="get-group-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupCategoryId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "GetGroupCategoryDetails",
  "data": {
    "groupCategories": [
      {
        "description": "Nodes by hardware provider",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Hardware groups",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-group-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups category information|Inline|

<h3 id="get-group-category-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|[[group-category](#schemagroup-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|GetGroupCategoryDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update group category details

<a id="opIdUpdateGroupCategory"></a>

> Code samples

```bash
curl https://example.com/groups/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Nodes by hardware provider",
    "name": "Hardware groups",
    "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
  }'
```

`POST /groups/categories/{groupCategoryId}`

Update detailed information about a group category

> Body parameter

```json
{
  "description": "Nodes by hardware provider",
  "name": "Hardware groups",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

<h3 id="update-group-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupCategoryId|path|string(uuid)|true|none|
|body|body|[group-category-update](#schemagroup-category-update)|true|none|
|» description|body|string|false|Group category description|
|» name|body|string|true|Name of the group category|
|» parent|body|string(uuid)|true|The parent category of the groups|

> Example responses

> 200 Response

```json
{
  "action": "UpdateGroupCategory",
  "data": {
    "groupCategories": [
      {
        "description": "Nodes by hardware provider",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Hardware groups",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-group-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups category information|Inline|

<h3 id="update-group-category-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|[[group-category](#schemagroup-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|UpdateGroupCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete group category

<a id="opIdDeleteGroupCategory"></a>

> Code samples

```bash
curl https://example.com/groups/categories/e0a311fa-f7b2-4f9e-89a9-db517b9c6b90 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /groups/categories/{groupCategoryId}`

Delete a group category. It must have no child groups and no children categories.

<h3 id="delete-group-category-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupCategoryId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "DeleteGroupCategory",
  "data": {
    "groupCategories": [
      {
        "description": "Nodes by hardware provider",
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "name": "Hardware groups",
        "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-group-category-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups category information|Inline|

<h3 id="delete-group-category-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|[[group-category](#schemagroup-category)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|DeleteGroupCategory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get groups tree

<a id="opIdGetGroupTree"></a>

> Code samples

```bash
curl https://example.com/groups/tree \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /groups/tree`

Get all available groups and their categories in a tree

> Example responses

> 200 Response

```json
{
  "action": "GetGroupTree",
  "data": {
    "categories": [
      {
        "categories": [],
        "description": "That category holds all the system and special target",
        "groups": [
          {
            "description": "All nodes known by Rudder directly connected to the root server",
            "displayName": "All nodes managed by root policy server",
            "dynamic": true,
            "enabled": true,
            "id": "hasPolicyServer-root",
            "nodeIds": [
              "dd404bda-2785-4959-abaa-8f37a0bbd85e",
              "f6223b0e-e2aa-4d1f-b6d1-74de8ea8e513",
              "root"
            ],
            "query": {
              "composition": "And",
              "select": "nodeAndPolicyServer",
              "where": [
                {
                  "attribute": "policyServerId",
                  "comparator": "eq",
                  "objectType": "node",
                  "value": "root"
                }
              ]
            }
          }
        ],
        "id": "SystemGroups",
        "name": "System groups",
        "parent": "GroupRoot"
      },
      {
        "categories": [],
        "description": "",
        "groups": [
          {
            "description": "",
            "displayName": "Linux nodes",
            "dynamic": false,
            "enabled": true,
            "id": "79d83ff9-24d8-4be6-b1f7-cbb1c173f7a5",
            "nodeIds": [],
            "query": {
              "composition": "And",
              "select": "node",
              "where": [
                {
                  "attribute": "OS",
                  "comparator": "eq",
                  "objectType": "node",
                  "value": "Linux"
                }
              ]
            }
          }
        ],
        "id": "38dd2107-a73b-45fb-916d-e110312abb87",
        "name": "production groups",
        "parent": "GroupRoot"
      }
    ],
    "description": "This is the root category for the groups (both dynamic and static) and group categories",
    "groups": [
      {
        "description": "",
        "displayName": "Test Clients",
        "dynamic": true,
        "enabled": true,
        "id": "af208515-c2f2-4577-bbf4-9fffebbe6629",
        "nodeIds": [],
        "query": {
          "composition": "Or",
          "select": "node",
          "where": [
            {
              "attribute": "nodeHostname",
              "comparator": "regex",
              "objectType": "node",
              "value": "servername.*company.net"
            },
            {
              "attribute": "nodeHostname",
              "comparator": "regex",
              "objectType": "node",
              "value": "lt serverbla.*company.net"
            }
          ]
        }
      },
      {
        "description": "",
        "displayName": "Test Clients",
        "dynamic": true,
        "enabled": true,
        "id": "d7634b2d-7189-422b-9971-24c29b75da46",
        "nodeIds": [],
        "query": {
          "composition": "Or",
          "select": "node",
          "where": [
            {
              "attribute": "nodeHostname",
              "comparator": "regex",
              "objectType": "node",
              "value": "servername.*company.net"
            },
            {
              "attribute": "nodeHostname",
              "comparator": "regex",
              "objectType": "node",
              "value": "lt serverbla.*company.net"
            }
          ]
        }
      }
    ],
    "id": "GroupRoot",
    "name": "Root of the group and group categories",
    "parent": "GroupRoot"
  },
  "result": "success"
}
```

<h3 id="get-groups-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="get-groups-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groupCategories|object|true|none|Group tree|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|GetGroupTree|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get group details

<a id="opIdgroupDetails"></a>

> Code samples

```bash
curl https://example.com/groups/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /groups/{groupId}`

Get detailed information about a group

<h3 id="get-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string(uuid)|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "action": "groupDetails",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="get-group-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|groupDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update group details

<a id="opIdupdateGroup"></a>

> Code samples

```bash
curl https://example.com/groups/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
    "description": "Documentation for the group",
    "displayName": "Ubuntu 18.04 nodes",
    "dynamic": true,
    "enabled": true,
    "query": {
      "composition": "and",
      "select": "node",
      "where": [
        {
          "attribute": "OS",
          "comparator": "eq",
          "objectType": "node",
          "value": "Linux"
        }
      ]
    }
  }'
```

`POST /groups/{groupId}`

Update detailed information about a group

> Body parameter

```json
{
  "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
  "description": "Documentation for the group",
  "displayName": "Ubuntu 18.04 nodes",
  "dynamic": true,
  "enabled": true,
  "query": {
    "composition": "and",
    "select": "node",
    "where": [
      {
        "attribute": "OS",
        "comparator": "eq",
        "objectType": "node",
        "value": "Linux"
      }
    ]
  }
}
```

<h3 id="update-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string(uuid)|true|Id of the group|
|body|body|[group-update](#schemagroup-update)|true|none|
|» category|body|string(uuid)|false|Id of the new group's category|
|» description|body|string|false|Group description|
|» displayName|body|string|false|Name of the group|
|» dynamic|body|boolean|false|Should the group be dynamically refreshed (if not, it is a static group)|
|» enabled|body|boolean|false|Enable or disable the group|
|» query|body|object|false|The criteria defining the group. If not provided, the group will be empty.|
|» » composition|body|string|false|Boolean operator to use between each  `where` criteria.|
|» » select|body|string|false|What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.|
|» » where|body|[object]|false|List of criteria|
|» » » attribute|body|string|false|Attribute to compare|
|» » » comparator|body|string|false|Comparator to use|
|» » » objectType|body|string|false|Type of the object|
|» » » value|body|string|false|Value to compare against|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » composition|and|
|» » composition|or|

> Example responses

> 200 Response

```json
{
  "action": "updateGroup",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="update-group-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateGroup|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a group

<a id="opIddeleteGroup"></a>

> Code samples

```bash
curl https://example.com/groups/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /groups/{groupId}`

Update detailed information about a group

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string(uuid)|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "action": "deleteGroup",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteGroup|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload a group

<a id="opIdreloadGroup"></a>

> Code samples

```bash
curl https://example.com/groups/9a1773c9-0889-40b6-be89-f6504443ac1b/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /groups/{groupId}/reload`

Recompute the content of a group

<h3 id="reload-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string(uuid)|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "action": "reloadGroup",
  "data": {
    "groups": [
      {
        "description": "Documentation for the group",
        "displayName": "Ubuntu 18.04 nodes",
        "dynamic": true,
        "enabled": true,
        "groupClass": [
          "group_ubuntu"
        ],
        "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
        "nodeIds": [
          "109142a2-40eb-4e6d-84b4-7ebe3670474c"
        ],
        "properties": [
          {
            "name": "os",
            "value": "debian10"
          }
        ],
        "query": {
          "composition": "and",
          "select": "node",
          "where": [
            {
              "attribute": "OS",
              "comparator": "eq",
              "objectType": "node",
              "value": "Linux"
            }
          ]
        }
      }
    ]
  },
  "result": "success"
}
```

<h3 id="reload-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups information|Inline|

<h3 id="reload-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|[[group](#schemagroup)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|reloadGroup|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-nodes">Nodes</h1>

Nodes management

## List managed nodes

<a id="opIdlistAcceptedNodes"></a>

> Code samples

```bash
curl https://example.com/nodes \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /nodes`

Get information about the nodes managed by the target server

<h3 id="list-managed-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|string(comma-separated list)|false|Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.<br>* **minimal** includes: `id`, `hostname` and `status`<br>* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`<br>* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`|
|query|query|object|false|The criterion you want to find for your nodes. Replaces the `where`, `composition` and `select` parameters in a single parameter.|
|where|query|[object]|false|The criterion you want to find for your nodes|
|composition|query|string|false|Boolean operator to use between each  `where` criteria.|
|select|query|string|false|What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|composition|and|
|composition|or|

> Example responses

> 200 Response

```json
{
  "action": "listAcceptedNodes",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-managed-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="list-managed-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the nodes|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listAcceptedNodes|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create one or several new nodes

<a id="opIdcreateNodes"></a>

> Code samples

```bash
curl https://example.com/nodes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '[
    {
      "agentKey": {
        "status": "certified",
        "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
      },
      "hostname": "my.node.hostname.local",
      "id": "378740d3-c4a9-4474-8485-478e7e52db52",
      "ipAddresses": [
        "192.168.180.90"
      ],
      "machineType": "vmware",
      "os": {
        "fullName": "Debian GNU/Linux 9 (stretch)",
        "name": "debian",
        "servicePack": "string",
        "type": "linux",
        "version": 9.5
      },
      "policyMode": "enforce",
      "policyServerId": "root",
      "properties": [
        {
          "name": "datacenter",
          "value": "AMS2"
        }
      ],
      "state": "enabled",
      "status": "accepted",
      "timezone": {
        "name": "CEST",
        "offset": 200
      }
    }
  ]'
```

`PUT /nodes`

Use the provided array of node information to create new nodes

> Body parameter

```json
[
  {
    "agentKey": {
      "status": "certified",
      "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
    },
    "hostname": "my.node.hostname.local",
    "id": "378740d3-c4a9-4474-8485-478e7e52db52",
    "ipAddresses": [
      "192.168.180.90"
    ],
    "machineType": "vmware",
    "os": {
      "fullName": "Debian GNU/Linux 9 (stretch)",
      "name": "debian",
      "servicePack": "string",
      "type": "linux",
      "version": 9.5
    },
    "policyMode": "enforce",
    "policyServerId": "root",
    "properties": [
      {
        "name": "datacenter",
        "value": "AMS2"
      }
    ],
    "state": "enabled",
    "status": "accepted",
    "timezone": {
      "name": "CEST",
      "offset": 200
    }
  }
]
```

<h3 id="create-one-or-several-new-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[node-add](#schemanode-add)|true|none|
|» agentKey|body|[agent-key](#schemaagent-key)|false|Information about agent key or certificate|
|» hostname|body|string|true|The fully qualified name of the node|
|» id|body|string|true|The Rudder node unique identifier in /opt/rudder/etc/uuid.hive|
|» ipAddresses|body|[string]|true|an array of IPs.|
|» machineType|body|string|true|The kind of machine for the node (use vm for a generic VM)|
|» os|body|[os](#schemaos)|true|none|
|» policyMode|body|string|false|The policy mode for the node. Can only be specified when status=accepted. If not specified, the default (global) mode will be used|
|» policyServerId|body|string|false|The policy server ID for that node. By default, "root"|
|» properties|body|[object]|true|Node properties (either set by user or filled by third party sources)|
|» » name|body|string|true|Property name|
|» » value|body|object(string or JSON)|true|Property value (can be a string or JSON object)|
|» state|body|string|false|Node lifecycle state. Can only be specified when status=accepted. If not specified, enable is used|
|» status|body|string|true|Target status of the node|
|» timezone|body|[timezone](#schematimezone)|false|Timezone information of the node.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» machineType|vmware|
|» machineType|physical|
|» machineType|vm|
|» machineType|solariszone|
|» machineType|qemu|
|» machineType|xen|
|» machineType|aixlpar|
|» machineType|hyperv|
|» machineType|bsdjail|
|» policyMode|enforce|
|» policyMode|audit|
|» state|enabled|
|» state|ignored|
|» state|empty-policies|
|» state|initializing|
|» state|preparing-eol|
|» status|accepted|
|» status|pending|

> Example responses

> 200 Response

```json
{
  "action": "createNode",
  "data": {
    "created": [
      "378740d3-c4a9-4474-8485-478e7e52db52"
    ],
    "failed": [
      "string"
    ]
  },
  "result": "success"
}
```

<h3 id="create-one-or-several-new-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Creation information|Inline|

<h3 id="create-one-or-several-new-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» created|[string]|true|none|none|
|» failed|[string]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger an agent run on all nodes

<a id="opIdapplyPolicyAllNodes"></a>

> Code samples

```bash
curl https://example.com/nodes/applyPolicy \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /nodes/applyPolicy`

This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.

> Example responses

> 200 Response

```json
{
  "action": "applyPolicyAllNodes",
  "data": [
    {
      "hostname": "node.example.com",
      "id": "249e14ac-2418-457c-a27d-1650907b13c7",
      "result": "Started"
    }
  ],
  "result": "success"
}
```

<h3 id="trigger-an-agent-run-on-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|

<h3 id="trigger-an-agent-run-on-all-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[object]|true|none|none|
|» hostname|string|false|none|Node hostname|
|» id|string(uuid (or "root"))|false|none|Rudder id of the node|
|» result|string|false|none|Result or policy application trigger|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|applyPolicyAllNodes|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List pending nodes

<a id="opIdlistPendingNodes"></a>

> Code samples

```bash
curl https://example.com/nodes/pending \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /nodes/pending`

Get information about the nodes pending acceptation

<h3 id="list-pending-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|string(comma-separated list)|false|Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.<br>* **minimal** includes: `id`, `hostname` and `status`<br>* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`<br>* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`|
|query|query|object|false|The criterion you want to find for your nodes. Replaces the `where`, `composition` and `select` parameters in a single parameter.|
|where|query|[object]|false|The criterion you want to find for your nodes|
|composition|query|string|false|Boolean operator to use between each  `where` criteria.|
|select|query|string|false|What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|composition|and|
|composition|or|

> Example responses

> 200 Response

```json
{
  "action": "listPendingNodes",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-pending-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="list-pending-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the nodes|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listPendingNodes|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update pending Node status

<a id="opIdchangePendingNodeStatus"></a>

> Code samples

```bash
curl https://example.com/nodes/pending/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "status": "accepted"
  }'
```

`POST /nodes/pending/{nodeId}`

Accept or refuse a pending node

> Body parameter

```json
{
  "status": "accepted"
}
```

<h3 id="update-pending-node-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|
|body|body|object|false|none|
|» status|body|string|false|New status of the pending node|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|accepted|
|» status|refused|

> Example responses

> 200 Response

```json
{
  "action": "changePendingNodeStatus",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-pending-node-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="update-pending-node-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the node|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|changePendingNodeStatus|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get nodes acceptation status

<a id="opIdgetNodesStatus"></a>

> Code samples

```bash
curl 'https://example.com/nodes/status?ids=8403353b-42c4-46f5-a08d-bc77a1a0bad9%2Croot' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /nodes/status`

Get acceptation status (pending, accepted, deleted, unknown) of a list of nodes

<h3 id="get-nodes-acceptation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string(comma-separated list)|true|Comma separated list of node Ids|

> Example responses

> 200 Response

```json
{
  "action": "getNodesStatus",
  "data": {
    "nodes": [
      {
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "status": "pending"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-nodes-acceptation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|nodes|Inline|

<h3 id="get-nodes-acceptation-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|List of nodeId and associated status|
|» nodes|[object]|true|none|List of nodeId and associated status|
|» » id|string(uuid (or "root"))|true|none|Unique id of the node|
|» » status|string|true|none|Status of the node|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getNodesStatus|
|» » status|pending|
|» » status|accepted|
|» » status|deleted|
|» » status|unknown|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get information about a node

<a id="opIdnodeDetails"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /nodes/{nodeId}`

Get details about a given node

<h3 id="get-information-about-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|
|include|query|string(comma-separated list)|false|Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.<br>* **minimal** includes: `id`, `hostname` and `status`<br>* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`<br>* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`|

> Example responses

> 200 Response

```json
{
  "action": "nodeDetails",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-information-about-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="get-information-about-a-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the node|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|nodeDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update node settings and properties

<a id="opIdupdateNode"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "agentKey": {
      "status": "certified",
      "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
    },
    "policyMode": "audit",
    "properties": [
      {
        "name": "datacenter",
        "value": "AMS2"
      }
    ],
    "state": "enabled"
  }'
```

`POST /nodes/{nodeId}`

Update node settings and properties

> Body parameter

```json
{
  "agentKey": {
    "status": "certified",
    "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
  },
  "policyMode": "audit",
  "properties": [
    {
      "name": "datacenter",
      "value": "AMS2"
    }
  ],
  "state": "enabled"
}
```

<h3 id="update-node-settings-and-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|
|body|body|[node-settings](#schemanode-settings)|false|none|
|» agentKey|body|[agent-key](#schemaagent-key)|false|Information about agent key or certificate|
|» policyMode|body|string|false|In which mode the node will apply its configuration policy. Use `default` to use the global mode.|
|» properties|body|[object]|false|none|
|» » name|body|string|true|Property name|
|» » value|body|object(string or JSON)|true|Property value (can be a string or JSON object)|
|» state|body|string|false|The node life cycle state. See [dedicated doc](https://docs.rudder.io/reference/current/usage/advanced_node_management.html#node-lifecycle) for more information.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» policyMode|audit|
|» policyMode|enforce|
|» policyMode|default|
|» state|enabled|
|» state|ignored|
|» state|empty-policies|
|» state|initializing|
|» state|preparing-eol|

> Example responses

> 200 Response

```json
{
  "action": "updateNode",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-node-settings-and-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="update-node-settings-and-properties-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the node|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a node

<a id="opIddeleteNode"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /nodes/{nodeId}`

Remove a node from the Rudder server. It won't be managed anymore.

<h3 id="delete-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|
|mode|query|string|false|Deletion mode to use, either move to trash ('move', default) or erase ('erase')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|move|
|mode|erase|

> Example responses

> 200 Response

```json
{
  "action": "deleteNode",
  "data": {
    "nodes": [
      {
        "accounts": [
          "root"
        ],
        "architectureDescription": "x86_64",
        "bios": {
          "description": "FIXME",
          "editor": "innotek GmbH",
          "name": "VirtualBox",
          "quantity": 1,
          "releaseDate": "2006-12-01 00:00:00+0000",
          "version": "1.2.3"
        },
        "controllers": [
          {
            "description": "string",
            "manufacturer": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "description": "",
        "environmentVariables": [
          {
            "name": "LANG",
            "value": "en_US.UTF-8"
          }
        ],
        "fileSystems": [
          {
            "description": "string",
            "fileCount": 1456,
            "freeSpace": 3487,
            "mountPoint": "/srv",
            "name": "ext4",
            "totalSpace": 208869
          }
        ],
        "hostname": "node1.example.com",
        "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
        "ipAddresses": [
          "192.168.23.45"
        ],
        "lastInventoryDate": "2020-02-29T10:11:32Z",
        "lastRunDate": "2020-02-29T14:48:28Z",
        "machine": {
          "id": "string",
          "manufacturer": "innotek GmbH",
          "provider": "vbox",
          "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
          "type": "Virtual"
        },
        "managementTechnology": [
          {
            "capabilities": [
              "xml"
            ],
            "name": "Rudder",
            "nodeKind": "node",
            "rootComponents": [
              "rudder-db"
            ],
            "version": "6.0.3.release-1.EL.7"
          }
        ],
        "managementTechnologyDetails": {
          "cfengineKeys": [
            "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
          ],
          "cfengineUser": "root"
        },
        "memories": [
          {
            "capacity": 2,
            "caption": "string",
            "description": "string",
            "name": "string",
            "quantity": 1,
            "serialNumber": "string",
            "slotNumber": 3,
            "speed": 1066,
            "type": "string"
          }
        ],
        "networkInterfaces": [
          {
            "dhcpServer": "192.168.34.5",
            "ipAddresses": [
              "192.168.76.4"
            ],
            "macAddress": "08:00:27:6f:5c:14",
            "mask": [
              "255.255.255.0"
            ],
            "name": "eth0",
            "speed": "1000",
            "status": "Up",
            "type": "ethernet"
          }
        ],
        "os": {
          "fullName": "CentOS Linux release 7.6.1810 (Core)",
          "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
          "name": "Centos",
          "servicePack": "3",
          "type": "Linux",
          "version": "7.6.1810"
        },
        "policyMode": "audit",
        "policyServerId": "root",
        "ports": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1,
            "type": "string"
          }
        ],
        "processes": [
          {
            "cpuUsage": 1,
            "description": "string",
            "memory": 0.4000000059604645,
            "name": "/usr/sbin/httpd -DFOREGROUND",
            "pid": 3576,
            "started": "2020-02-29 00:24",
            "tty": "?",
            "user": "apache",
            "virtualMemory": 4380
          }
        ],
        "processors": [
          {
            "arch": "i386",
            "core": 1,
            "cpuid": "string",
            "description": "string",
            "externalClock": "string",
            "familyName": "string",
            "manufacturer": "Intel",
            "model": 158,
            "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
            "quantity": 1,
            "speed": 2800,
            "stepping": 9,
            "thread": 1
          }
        ],
        "properties": [
          {
            "name": "datacenter",
            "value": "AMS2"
          }
        ],
        "ram": 0,
        "slots": [
          {
            "description": "string",
            "name": "string",
            "quantity": 0,
            "status": "string"
          }
        ],
        "software": [
          {
            "description": "A library for getting files from web servers",
            "editor": "CentOS",
            "license": {
              "description": "string",
              "expirationDate": "1970-01-01",
              "name": "string",
              "oem": "string",
              "productId": "string",
              "productKey": "string"
            },
            "name": "libcurl",
            "releaseDate": "1970-01-01",
            "version": "7.29.0-54.el7_7.2"
          }
        ],
        "softwareUpdate": [
          {
            "arch": "string",
            "description": "string",
            "from": "string",
            "ids": [
              "string"
            ],
            "kind": "none",
            "name": "string",
            "severity": "critical",
            "source": "string",
            "version": "string"
          }
        ],
        "sound": [
          {
            "description": "string",
            "name": "string",
            "quantity": 1
          }
        ],
        "status": "accepted",
        "storage": [
          {
            "description": "string",
            "firmware": "10",
            "manufacturer": "string",
            "model": "VBOXHARDDISK",
            "name": "sda",
            "quantity": 1,
            "serialNumber": "000a1954",
            "size": 85899,
            "type": "disk"
          }
        ],
        "timezone": {
          "name": "UTC",
          "offset": "+0000"
        },
        "videos": [
          {
            "chipset": "string",
            "description": "string",
            "memory": "string",
            "name": "string",
            "quantity": 1,
            "resolution": "string"
          }
        ],
        "virtualMachines": [
          {
            "description": "string",
            "memory": "string",
            "name": "string",
            "owner": "string",
            "status": "string",
            "subsystem": "string",
            "type": "string",
            "uuid": "string",
            "vcpu": "string"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|Inline|

<h3 id="delete-a-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the node|
|» nodes|[[node-full](#schemanode-full)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger an agent run

<a id="opIdapplyNode"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b/applyPolicy \
  -X POST \
  -H "X-API-Token: ${API_KEY}"
```

`POST /nodes/{nodeId}/applyPolicy`

This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.

<h3 id="trigger-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

<h3 id="trigger-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent output|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get inherited node properties for a node

<a id="opIdnodeInheritedProperties"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b/inheritedProperties \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /nodes/{nodeId}/inheritedProperties`

This API returns all node properties for a node, including group inherited ones.

<h3 id="get-inherited-node-properties-for-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

> Example responses

> 200 Response

```json
{
  "action": "nodeInheritedProperties",
  "data": [
    {
      "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
      "properties": [
        {
          "hierarchy": [
            {
              "id": "9180b869-08a3-4173-9dd4-ab68f227e76c",
              "kind": "global",
              "name": "all centos7",
              "value": "{\"array\":[1,2],\"object\":{\"parent\":\"value\"},\"string\":\"parent\"}"
            }
          ],
          "name": "datacenter",
          "origval": "AMS2",
          "provider": "inherited",
          "value": "AMS2"
        }
      ]
    }
  ],
  "result": "success"
}
```

<h3 id="get-inherited-node-properties-for-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Node|Inline|

<h3 id="get-inherited-node-properties-for-a-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[[node-inherited-properties](#schemanode-inherited-properties)]|true|none|Information about the node inherited properties|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|nodeInheritedProperties|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-inventories">Inventories</h1>

Inventory processing service

## Get information about inventory processing queue

<a id="opIdqueueInformation"></a>

> Code samples

```bash
curl https://example.com/inventories/info \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /inventories/info`

Provide information about the current state of the inventory processor

> Example responses

> 200 Response

```json
{
  "action": "queueInformation",
  "data": {
    "queueMaxSize": 50,
    "queueSaturated": false
  },
  "result": "success"
}
```

<h3 id="get-information-about-inventory-processing-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inventories information|Inline|

<h3 id="get-information-about-inventory-processing-queue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the service|
|» queueMaxSize|integer|true|none|none|
|» queueSaturated|boolean|true|none|Is the inventory queue full|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|queueInformation|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Upload an inventory for processing

<a id="opIduploadInventory"></a>

> Code samples

```bash
curl https://example.com/inventories/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'signature=@/path/to/file'
```

`POST /inventories/upload`

Upload an inventory to the web application

> Body parameter

```yaml
file: string
signature: string
```

<h3 id="upload-an-inventory-for-processing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|The inventory file. The original file name is used to check extension, that should be .xml[.gz] or .ocs[.gz]|
|» signature|body|string(binary)|false|The signature file. The original file name is used to check extension, that should be ${originalInventoryFileName}.sign[.gz]|

> Example responses

> 200 Response

```json
{
  "action": "uploadInventory",
  "data": "Inventory 'file.xml' for Node 'c1bab9fc-bcf6-4d59-a397-84c8e2fc06c0' added to processing queue.",
  "result": "success"
}
```

<h3 id="upload-an-inventory-for-processing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inventory uploaded|Inline|

<h3 id="upload-an-inventory-for-processing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|uploadInventory|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Restart inventory watcher

<a id="opIdfileWatcherRestart"></a>

> Code samples

```bash
curl https://example.com/inventories/watcher/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /inventories/watcher/restart`

Restart the inventory watcher if necessary

> Example responses

> 200 Response

```json
{
  "action": "fileWatcherRestart",
  "data": "Incoming inventory watcher restarted",
  "result": "success"
}
```

<h3 id="restart-inventory-watcher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Started|Inline|

<h3 id="restart-inventory-watcher-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|fileWatcherRestart|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Start inventory watcher

<a id="opIdfileWatcherStart"></a>

> Code samples

```bash
curl https://example.com/inventories/watcher/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /inventories/watcher/start`

Start the inventory watcher if necessary

> Example responses

> 200 Response

```json
{
  "action": "fileWatcherStart",
  "data": "Incoming inventory watcher started",
  "result": "success"
}
```

<h3 id="start-inventory-watcher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Started|Inline|

<h3 id="start-inventory-watcher-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|fileWatcherStart|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Stop inventory watcher

<a id="opIdfileWatcherStop"></a>

> Code samples

```bash
curl https://example.com/inventories/watcher/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /inventories/watcher/stop`

Stop the inventory watcher if necessary

> Example responses

> 200 Response

```json
{
  "action": "fileWatcherStop",
  "data": "Incoming inventory watcher stopped",
  "result": "success"
}
```

<h3 id="stop-inventory-watcher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopped|Inline|

<h3 id="stop-inventory-watcher-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|fileWatcherStop|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-parameters">Parameters</h1>

Global parameters

## List all global parameters

<a id="opIdlistParameters"></a>

> Code samples

```bash
curl https://example.com/parameters \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /parameters`

Get the current value of all the global parameters

> Example responses

> 200 Response

```json
{
  "action": "listParameters",
  "data": {
    "parameters": [
      {
        "description": "Default inform message put in footer of managed files by Rudder",
        "id": "rudder_file_edit_footer",
        "overridable": false,
        "value": "### End of file managed by Rudder ###"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-global-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="list-all-global-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Parameters|
|» parameters|[[parameter](#schemaparameter)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listParameters|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a new parameter

<a id="opIdcreateParameter"></a>

> Code samples

```bash
curl https://example.com/parameters \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Default inform message put in footer of managed files by Rudder",
    "id": "rudder_file_edit_footer",
    "overridable": false,
    "value": "### End of file managed by Rudder ###"
  }'
```

`PUT /parameters`

Create a new global parameter

> Body parameter

```json
{
  "description": "Default inform message put in footer of managed files by Rudder",
  "id": "rudder_file_edit_footer",
  "overridable": false,
  "value": "### End of file managed by Rudder ###"
}
```

<h3 id="create-a-new-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[parameter](#schemaparameter)|true|none|
|» description|body|string|false|Description of the parameter|
|» id|body|string|true|Name of the parameter|
|» overridable|body|boolean|false|Is the global parameter overridable by node|
|» value|body|object(string or JSON)|false|Value of the parameter|

> Example responses

> 200 Response

```json
{
  "action": "createParameter",
  "data": {
    "parameters": [
      {
        "description": "Default inform message put in footer of managed files by Rudder",
        "id": "rudder_file_edit_footer",
        "overridable": false,
        "value": "### End of file managed by Rudder ###"
      }
    ]
  },
  "id": "rudder_file_edit_footer",
  "result": "success"
}
```

<h3 id="create-a-new-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="create-a-new-parameter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Parameters|
|» parameters|[[parameter](#schemaparameter)]|true|none|none|
|id|string|true|none|Id of the parameter|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createParameter|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get the value of a parameter

<a id="opIdparameterDetails"></a>

> Code samples

```bash
curl https://example.com/parameters/rudder_file_edit_header \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /parameters/{parameterId}`

Get the current value of a given parameter

<h3 id="get-the-value-of-a-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameterId|path|string|true|Id of the parameter to manage|

> Example responses

> 200 Response

```json
{
  "action": "parameterDetails",
  "data": {
    "parameters": [
      {
        "description": "Default inform message put in footer of managed files by Rudder",
        "id": "rudder_file_edit_footer",
        "overridable": false,
        "value": "### End of file managed by Rudder ###"
      }
    ]
  },
  "id": "rudder_file_edit_footer",
  "result": "success"
}
```

<h3 id="get-the-value-of-a-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="get-the-value-of-a-parameter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Parameters|
|» parameters|[[parameter](#schemaparameter)]|true|none|none|
|id|string|true|none|Id of the parameter|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|parameterDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a parameter's value

<a id="opIdupdateParameter"></a>

> Code samples

```bash
curl https://example.com/parameters/rudder_file_edit_header \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /parameters/{parameterId}`

Update the properties of a parameter

<h3 id="update-a-parameters-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameterId|path|string|true|Id of the parameter to manage|

> Example responses

> 200 Response

```json
{
  "action": "updateParameter",
  "data": {
    "parameters": [
      {
        "description": "Default inform message put in footer of managed files by Rudder",
        "id": "rudder_file_edit_footer",
        "overridable": false,
        "value": "### End of file managed by Rudder ###"
      }
    ]
  },
  "id": "rudder_file_edit_footer",
  "result": "success"
}
```

<h3 id="update-a-parameters-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="update-a-parameters-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Parameters|
|» parameters|[[parameter](#schemaparameter)]|true|none|none|
|id|string|true|none|Id of the parameter|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateParameter|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a parameter

<a id="opIddeleteParameter"></a>

> Code samples

```bash
curl https://example.com/parameters/rudder_file_edit_header \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /parameters/{parameterId}`

Delete an existing parameter

<h3 id="delete-a-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameterId|path|string|true|Id of the parameter to manage|

> Example responses

> 200 Response

```json
{
  "action": "deleteParameter",
  "data": {
    "parameters": [
      {
        "description": "Default inform message put in footer of managed files by Rudder",
        "id": "rudder_file_edit_footer",
        "overridable": false,
        "value": "### End of file managed by Rudder ###"
      }
    ]
  },
  "id": "rudder_file_edit_footer",
  "result": "success"
}
```

> 500 Response

```json
{
  "action": "deleteParameter",
  "errorDetails": "Could not delete Parameter rudder_file_edit_footer cause is: Could not find Parameter rudder_file_edit_footer.",
  "id": "rudder_file_edit_footer",
  "result": "error"
}
```

<h3 id="delete-a-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|
|500|Internal Server Error|Non existing parameter|Inline|

<h3 id="delete-a-parameter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Parameters|
|» parameters|[[parameter](#schemaparameter)]|true|none|none|
|id|string|true|none|Id of the parameter|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteParameter|
|result|success|
|result|error|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|errorDetails|string|false|none|none|
|id|string|true|none|Id of the parameter|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteParameter|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-archives">Archives</h1>

Import and export zip of policies

## Get a ZIP archive of the requested items and their dependencies

<a id="opIdexport"></a>

> Code samples

```bash
curl https://example.com/archives/export \
  -H "X-API-Token: ${API_KEY}"
```

`GET /archives/export`

Get a ZIP archive or rules, directives, techniques and groups with optionally their dependencies

<h3 id="get-a-zip-archive-of-the-requested-items-and-their-dependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rules|query|[object]|false|IDs (optionally with revision, '+' need to be escaped as '%2B') of rules to include|
|directives|query|[object]|false|IDs (optionally with revision, '+' need to be escaped as '%2B') of directives to include|
|techniques|query|[object]|false|IDs, ie technique name/technique version (optionally with revision, '+' need to be escaped as '%2B') of techniques to include|
|groups|query|[object]|false|IDs (optionally with revision, '+' need to be escaped as '%2B') of groups to include|
|include|query|[string]|false|Scope of dependencies to include in archive, where rule as directives and groups dependencies, directives have techniques dependencies, and techniques and groups don't have dependencies. 'none' means no dependencies will be include, 'all' means that the whole tree will,  'directives' and 'groups' means to include them specifically, 'techniques' means to include both directives and techniques.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|all (default)|
|include|none|
|include|directives|
|include|techniques|
|include|groups|

<h3 id="get-a-zip-archive-of-the-requested-items-and-their-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A zip archive with the queried content.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Import a ZIP archive of policies into Rudder

<a id="opIdimport"></a>

> Code samples

```bash
curl https://example.com/archives/import \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -F 'archive=@/path/to/file'
```

`POST /archives/import`

Import a ZIP archive of techniques, directives, groups and rules in a saved in a normalized format into Rudder

> Body parameter

```yaml
archive: string
```

<h3 id="import-a-zip-archive-of-policies-into-rudder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» archive|body|string(binary)|false|The ZIP archive file containing policies in a conventional layout and serialization format|

> Example responses

> 200 Response

```json
{
  "action": "import",
  "data": {
    "archiveImported": true
  },
  "result": "success"
}
```

<h3 id="import-a-zip-archive-of-policies-into-rudder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive imported|Inline|

<h3 id="import-a-zip-archive-of-policies-into-rudder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Details about archive import process|
|» archiveImported|boolean|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|import|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-settings">Settings</h1>

Server configuration

## List all settings

<a id="opIdgetAllSettings"></a>

> Code samples

```bash
curl https://example.com/settings \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /settings`

Get the current value of all the settings

> Example responses

> 200 Response

```json
{
  "action": "getAllSettings",
  "data": {
    "settings": {
      "allowed_networks": [
        {
          "allowed_networks": [
            "192.168.40.0/24"
          ],
          "id": "root"
        }
      ],
      "change_message_prompt": "Please provide a reason for this change",
      "display_recent_changes_graphs": true,
      "enable_change_message": true,
      "enable_change_request": false,
      "enable_javascript_directives": "enabled",
      "enable_self_deployment": true,
      "enable_self_validation": true,
      "first_run_hour": 0,
      "first_run_minute": 0,
      "global_policy_mode": "enforce",
      "global_policy_mode_overridable": true,
      "heartbeat_frequency": 10,
      "mandatory_change_message": false,
      "modified_file_ttl": 7,
      "node_accept_duplicated_hostname": false,
      "node_onaccept_default_policyMode": "default",
      "node_onaccept_default_state": "enabled",
      "output_file_ttl": 7,
      "relay_server_synchronization_method": "classic",
      "relay_server_synchronize_policies": true,
      "relay_server_synchronize_shared_files": true,
      "reporting_mode": "full-compliance",
      "require_time_synchronization": true,
      "rudder_compute_changes": true,
      "rudder_compute_dyngroups_max_parallelism": "1",
      "rudder_generation_compute_dyngroups": true,
      "rudder_generation_continue_on_error": false,
      "rudder_generation_delay": "0 seconds",
      "rudder_generation_js_timeout": 30,
      "rudder_generation_max_parallelism": "x0.5",
      "rudder_generation_policy": "all",
      "rudder_report_protocol_default": "HTTPS",
      "rudder_save_db_compliance_details": false,
      "rudder_save_db_compliance_levels": true,
      "rudder_verify_certificates": false,
      "run_frequency": 5,
      "send_metrics": "not defined",
      "splay_time": 5,
      "unexpected_unbound_var_values": true
    }
  },
  "result": "success"
}
```

<h3 id="list-all-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="list-all-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the setting|
|» settings|object|true|none|none|
|» » allowed_networks|[object]|false|none|List of allowed networks for each policy server (root and relays)|
|» » » allowed_networks|[string(CIDR network)]|false|none|List of allowed networks|
|» » » id|string|false|none|Rudder id of the policy server|
|» » change_message_prompt|string|false|none|Explanation to display|
|» » display_recent_changes_graphs|boolean|false|none|Display changes graphs|
|» » enable_change_message|boolean|false|none|Enable change audit logs|
|» » enable_change_request|boolean|false|none|Enable Change Requests|
|» » enable_javascript_directives|string|false|none|Enable script evaluation in Directives|
|» » enable_self_deployment|boolean|false|none|Allow self deployment|
|» » enable_self_validation|boolean|false|none|Allow self validation|
|» » first_run_hour|integer|false|none|First agent run time - hour|
|» » first_run_minute|integer|false|none|First agent run time - minute|
|» » global_policy_mode|string|false|none|Define the default setting for global policy mode|
|» » global_policy_mode_overridable|boolean|false|none|Allow overrides on this default setting|
|» » heartbeat_frequency|integer|false|none|Send heartbeat every heartbeat_frequency runs (only on **changes-only** compliance mode)|
|» » mandatory_change_message|boolean|false|none|Make message mandatory|
|» » modified_file_ttl|integer|false|none|Number of days to retain modified files|
|» » node_accept_duplicated_hostname|boolean|false|none|Allow acceptation of a pending node when another one with the same hostname is already accepted|
|» » node_onaccept_default_policyMode|string|false|none|Default policy mode for accepted node|
|» » node_onaccept_default_state|string|false|none|Set default state for node when they are accepted within Rudder|
|» » output_file_ttl|integer|false|none|Number of days to retain agent output files|
|» » relay_server_synchronization_method|string|false|none|Method used to synchronize data between server and relays, either "classic" (agent protocol, default), "rsync" (use rsync to synchronize, that you'll need to be manually set up), or "disabled" (use third party system to transmit data)|
|» » relay_server_synchronize_policies|boolean|false|none|If **rsync** is set as a synchronization method, use rsync to synchronize policies between Rudder server and relays. If false, you'll have to synchronize policies yourself.|
|» » relay_server_synchronize_shared_files|boolean|false|none|If **rsync** is set as a synchronization method, use rsync to synchronize shared files between Rudder server and relays. If false, you'll have to synchronize shared files yourself.|
|» » reporting_mode|string|false|none|Compliance reporting mode|
|» » require_time_synchronization|boolean|false|none|Require time synchronization between nodes and policy server|
|» » rudder_compute_changes|boolean|false|none|Compute list of changes (repaired reports) per rule|
|» » rudder_compute_dyngroups_max_parallelism|string|false|none|Set the parallelism to compute dynamic group, as a number of thread (i.e. 4), or a multiplicative of the number of core (x0.5)|
|» » rudder_generation_compute_dyngroups|boolean|false|none|Recompute all dynamic groups at the start of policy generation|
|» » rudder_generation_continue_on_error|boolean|false|none|Policy generation continues on error during NodeConfiguration evaluation|
|» » rudder_generation_delay|string|false|none|Set a delay before starting policy generation, this will allow you to accumulate changes before they are deployed to Nodes, and can also lessen webapp resources needs. The value is a number followed by the time unit needed (seconds/s, minutes/m, hours/h ...), ie "5m" for 5 minutes|
|» » rudder_generation_js_timeout|integer|false|none|Policy generation JS evaluation of directive parameter timeout in seconds|
|» » rudder_generation_max_parallelism|string|false|none|Set the policy generation parallelism, either as an number of thread (i.e. 4), or a multiplicative of the number of core (x0.5)|
|» » rudder_generation_policy|string|false|none|Should policy generation be triggered automatically after a change (value 'all'), or should we wait until a manual launch (through api or UI, value 'onlyManual') or even no policy generation at all (value "none")|
|» » rudder_report_protocol_default|string|false|none|Default reporting protocol used|
|» » rudder_save_db_compliance_details|boolean|false|none|Store all compliance details in database|
|» » rudder_save_db_compliance_levels|boolean|false|none|Store all compliance levels in database|
|» » rudder_verify_certificates|boolean|false|none|Enforce certificate validation in all HTTPS calls|
|» » run_frequency|integer|false|none|Agent run schedule - time between agent runs (in minutes)|
|» » send_metrics|string|false|none|Send anonymous usage statistics|
|» » splay_time|integer|false|none|Maximum delay after scheduled run time (random interval)|
|» » unexpected_unbound_var_values|boolean|false|none|Allows multiple reports for configuration based on a multivalued variable|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getAllSettings|
|» » global_policy_mode|enforce|
|» » global_policy_mode|audit|
|» » node_onaccept_default_policyMode|default|
|» » node_onaccept_default_policyMode|enforce|
|» » node_onaccept_default_policyMode|audit|
|» » node_onaccept_default_state|enabled|
|» » node_onaccept_default_state|ignored|
|» » node_onaccept_default_state|empty-policies|
|» » node_onaccept_default_state|initializing|
|» » node_onaccept_default_state|preparing-eol|
|» » relay_server_synchronization_method|classic|
|» » relay_server_synchronization_method|rsync|
|» » relay_server_synchronization_method|disabled|
|» » reporting_mode|full-compliance|
|» » reporting_mode|changes-only|
|» » reporting_mode|reports-disabled|
|» » rudder_report_protocol_default|HTTPS|
|» » rudder_report_protocol_default|SYSLOG|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get allowed networks for a policy server

<a id="opIdgetAllowedNetworks"></a>

> Code samples

```bash
curl https://example.com/settings/allowed_networks/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /settings/allowed_networks/{nodeId}`

Get the list of allowed networks for a policy server

<h3 id="get-allowed-networks-for-a-policy-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Policy server ID for which you want to manage allowed networks.|

> Example responses

> 200 Response

```json
{
  "action": "getAllowedNetworks",
  "data": {
    "settings": {
      "allowed_networks": [
        "162.168.1.0/24",
        "192.168.2.0/24"
      ]
    }
  },
  "id": "root",
  "result": "success"
}
```

<h3 id="get-allowed-networks-for-a-policy-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Allowed Networks|Inline|

<h3 id="get-allowed-networks-for-a-policy-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the allowed_networks settings|
|» settings|object|true|none|none|
|» » allowed_networks|[object]|true|none|Array of allowed networks|
|id|string|true|none|Target policy server ID|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getAllowedNetworks|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Set allowed networks for a policy server

<a id="opIdsetAllowedNetworks"></a>

> Code samples

```bash
curl https://example.com/settings/allowed_networks/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "value": "enforce"
  }'
```

`POST /settings/allowed_networks/{nodeId}`

Set the list of allowed networks for a policy server

> Body parameter

```json
{
  "value": "enforce"
}
```

<h3 id="set-allowed-networks-for-a-policy-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Policy server ID for which you want to manage allowed networks.|
|body|body|object|true|none|
|» value|body|object|false|New value of the allowed networks|

> Example responses

> 200 Response

```json
{
  "action": "modifyAllowedNetworks",
  "data": {
    "allowed_networks": [
      "162.168.1.0/24",
      "192.168.2.0/24"
    ]
  },
  "id": "string",
  "result": "success"
}
```

<h3 id="set-allowed-networks-for-a-policy-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Allowed Networks|Inline|

<h3 id="set-allowed-networks-for-a-policy-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the allowed_networks settings|
|» allowed_networks|[object]|false|none|Array of allowed networks|
|id|string|false|none|The id of the modified node|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|modifyAllowedNetworks|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Modify allowed networks for a policy server

<a id="opIdmodifyAllowedNetworks"></a>

> Code samples

```bash
curl https://example.com/settings/allowed_networks/9a1773c9-0889-40b6-be89-f6504443ac1b/diff \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "allowed_networks": {
      "add": [
        "192.168.2.0/24",
        "192.168.0.0/16"
      ],
      "delete": [
        "162.168.1.0/24"
      ]
    }
  }'
```

`POST /settings/allowed_networks/{nodeId}/diff`

Add or delete allowed networks for a policy server

> Body parameter

```json
{
  "allowed_networks": {
    "add": [
      "192.168.2.0/24",
      "192.168.0.0/16"
    ],
    "delete": [
      "162.168.1.0/24"
    ]
  }
}
```

<h3 id="modify-allowed-networks-for-a-policy-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Policy server ID for which you want to manage allowed networks.|
|body|body|object|true|none|
|» allowed_networks|body|object|false|none|
|» » add|body|[object]|false|List of networks to add to existing allowed networks for that server|
|» » delete|body|[object]|false|List of networks to remove from existing allowed networks for that server|

> Example responses

> 200 Response

```json
{
  "action": "modifySetting",
  "data": {
    "allowed_networks": [
      "192.168.2.0/24",
      "192.168.0.0/16"
    ]
  },
  "result": "success"
}
```

<h3 id="modify-allowed-networks-for-a-policy-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Allowed Networks|Inline|

<h3 id="modify-allowed-networks-for-a-policy-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the allowed_networks settings|
|» allowed_networks|[object]|false|none|Array of allowed networks|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|modifySetting|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get the value of a setting

<a id="opIdgetSetting"></a>

> Code samples

```bash
curl https://example.com/settings/global_policy_mode \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /settings/{settingId}`

Get the current value of a specific setting

<h3 id="get-the-value-of-a-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingId|path|string|true|Id of the setting to set|

> Example responses

> 200 Response

```json
{
  "action": "getSetting",
  "data": {
    "settingId": "value"
  },
  "id": "global_policy_mode",
  "result": "success"
}
```

<h3 id="get-the-value-of-a-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="get-the-value-of-a-setting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the setting|
|» settingId|string|false|none|Id and value of the property|
|id|string|true|none|Id of the setting|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getSetting|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Set the value of a setting

<a id="opIdmodifySetting"></a>

> Code samples

```bash
curl https://example.com/settings/global_policy_mode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "value": "enforce"
  }'
```

`POST /settings/{settingId}`

Set the current value of a specific setting

> Body parameter

```json
{
  "value": "enforce"
}
```

<h3 id="set-the-value-of-a-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingId|path|string|true|Id of the setting to set|
|body|body|object|true|none|
|» value|body|string|false|New value of the setting|

> Example responses

> 200 Response

```json
{
  "action": "modifySetting",
  "data": {
    "settingId": "value"
  },
  "id": "global_policy_mode",
  "result": "success"
}
```

<h3 id="set-the-value-of-a-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|Inline|

<h3 id="set-the-value-of-a-setting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the setting|
|» settingId|string|false|none|Id and value of the property|
|id|string|true|none|Id of the setting|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|modifySetting|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api-system">System</h1>

Internal components and administration

## List archives

<a id="opIdlistArchives"></a>

> Code samples

```bash
curl https://example.com/system/archives/full \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /system/archives/{archiveKind}`

List configuration archives

<h3 id="list-archives-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archiveKind|path|string|true|Type of archive to make|

#### Enumerated Values

|Parameter|Value|
|---|---|
|archiveKind|full|
|archiveKind|groups|
|archiveKind|rules|
|archiveKind|directives|
|archiveKind|parameters|

> Example responses

> 200 Response

```json
{
  "action": "archiveFull",
  "data": {
    "full": [
      {
        "commiter": "Rudder system account",
        "gitCommit": "546de1b211ecc5b7ca295abac2191bc6bb05d44e",
        "id": "2019-09-17_16-06-15.255"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-archives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-archives-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The kind of the archive|
|data|object|true|none|none|
|» full|[object]|true|none|none|
|» » commiter|string|true|none|none|
|» » gitCommit|string(hash)|true|none|none|
|» » id|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|archiveFull|
|action|archiveGroups|
|action|archiveRules|
|action|archiveDirectives|
|action|archiveParameters|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create an archive

<a id="opIdcreateArchive"></a>

> Code samples

```bash
curl https://example.com/system/archives/full \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/archives/{archiveKind}`

Create new archive of the given kind

<h3 id="create-an-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archiveKind|path|string|true|Type of archive to make|

#### Enumerated Values

|Parameter|Value|
|---|---|
|archiveKind|full|
|archiveKind|groups|
|archiveKind|rules|
|archiveKind|directives|
|archiveKind|parameters|

> Example responses

> 200 Response

```json
{
  "action": "archiveFull",
  "data": {
    "full": {
      "commiter": "Rudder system account",
      "gitCommit": "546de1b211ecc5b7ca295abac2191bc6bb05d44e",
      "id": "2019-09-17_16-06-15.255"
    }
  },
  "result": "success"
}
```

<h3 id="create-an-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-an-archive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The kind of the archive|
|data|object|true|none|none|
|» full|object|true|none|none|
|» » commiter|string|true|none|none|
|» » gitCommit|string(hash)|true|none|none|
|» » id|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|archiveFull|
|action|archiveGroups|
|action|archiveRules|
|action|archiveDirectives|
|action|archiveParameters|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Restore an archive

<a id="opIdrestoreArchive"></a>

> Code samples

```bash
curl https://example.com/system/archives/full/restore/latestCommit \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/archives/{archiveKind}/restore/{archiveRestoreKind}`

Restore an archive of the given kind for the given moment

<h3 id="restore-an-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archiveKind|path|string|true|Type of archive to make|
|archiveRestoreKind|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|archiveKind|full|
|archiveKind|groups|
|archiveKind|rules|
|archiveKind|directives|
|archiveKind|parameters|
|archiveRestoreKind|latestArchive|
|archiveRestoreKind|latestCommit|
|archiveRestoreKind|archive ID|

> Example responses

> 200 Response

```json
{
  "action": "archirestoreFullLatestCommitveFull",
  "data": {
    "directive": "Started",
    "full": "Started",
    "groups": "Started",
    "parameters": "Started",
    "rules": "Started"
  },
  "result": "success"
}
```

<h3 id="restore-an-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="restore-an-archive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The kind of the archive|
|data|object|true|none|none|
|» directive|string|false|none|none|
|» full|string|false|none|none|
|» groups|string|false|none|none|
|» parameters|string|false|none|none|
|» rules|string|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|restoreFullLatestArchive|
|action|restoreGroupLatestArchive|
|action|restoreRulesLatestArchive|
|action|restoreDirectivesLatestArchive|
|action|restoreParametersLatestArchive|
|action|restoreFullLatestCommit|
|action|restoreGroupLatestCommit|
|action|restoreRulesLatestCommit|
|action|restoreDirectivesLatestCommit|
|action|restoreParametersLatestCommit|
|action|archiveFullDateRestore|
|action|archiveGroupDateRestore|
|action|archiveRulesDateRestore|
|action|archiveDirectivesDateRestore|
|action|archiveParametersDateRestore|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get an archive as a ZIP

<a id="opIdgetZipArchive"></a>

> Code samples

```bash
curl https://example.com/system/archives/full/zip/string \
  -H "X-API-Token: ${API_KEY}"
```

`GET /system/archives/{archiveKind}/zip/{commitId}`

Get an archive of the given kind as a zip

<h3 id="get-an-archive-as-a-zip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archiveKind|path|string|true|Type of archive to make|
|commitId|path|string|true|commit ID of the archive to get as a ZIP file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|archiveKind|full|
|archiveKind|groups|
|archiveKind|rules|
|archiveKind|directives|
|archiveKind|parameters|

<h3 id="get-an-archive-as-a-zip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get healthcheck

<a id="opIdgetHealthcheckResult"></a>

> Code samples

```bash
curl https://example.com/system/healthcheck \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /system/healthcheck`

Run and get the result of all checks

> Example responses

> 200 Response

```json
{
  "action": "getHealthcheckResult",
  "data": [
    {
      "msg": "Only 2GB of RAM left",
      "name": "RAM available",
      "status": "Critical"
    }
  ],
  "result": "success"
}
```

<h3 id="get-healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthcheck information|Inline|

<h3 id="get-healthcheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[[check](#schemacheck)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getHealthcheckResult|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get server information

<a id="opIdgetSystemInfo"></a>

> Code samples

```bash
curl https://example.com/system/info \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /system/info`

Get information about the server version

> Example responses

> 200 Response

```json
{
  "action": "getSystemInfo",
  "data": {
    "rudder": {
      "build-time": "2019-03-25T10:11:23Z",
      "full-version": "6.0.4",
      "major-version": "6.0"
    }
  },
  "result": "success"
}
```

<h3 id="get-server-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service information|Inline|

<h3 id="get-server-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the service|
|» rudder|object|true|none|none|
|» » build-time|string(date)|true|none|none|
|» » full-version|string(X.Y.Z)|true|none|none|
|» » major-version|string(X.Y)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getSystemInfo|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger batch for cleaning unreferenced software

<a id="opIdpurgeSoftware"></a>

> Code samples

```bash
curl https://example.com/system/maintenance/purgeSoftware \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/maintenance/purgeSoftware`

Start the software cleaning batch asynchronously.

> Example responses

> 200 Response

```json
{
  "action": "purgeSoftware",
  "data": [
    "string"
  ],
  "result": "success"
}
```

<h3 id="trigger-batch-for-cleaning-unreferenced-software-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Purge Software|Inline|

<h3 id="trigger-batch-for-cleaning-unreferenced-software-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[string]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|purgeSoftware|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger a new policy generation

<a id="opIdregeneratePolicies"></a>

> Code samples

```bash
curl https://example.com/system/regenerate/policies \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/regenerate/policies`

Trigger a full policy generation

> Example responses

> 200 Response

```json
{
  "action": "regeneratePolicies",
  "data": {
    "policies": "Started"
  },
  "result": "success"
}
```

<h3 id="trigger-a-new-policy-generation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="trigger-a-new-policy-generation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» policies|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|regeneratePolicies|
|» policies|Started|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload both techniques and dynamic groups

<a id="opIdreloadAll"></a>

> Code samples

```bash
curl https://example.com/system/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/reload`

Reload both techniques and dynamic groups

> Example responses

> 200 Response

```json
{
  "action": "reloadAll",
  "data": {
    "groups": "Started",
    "techniques": "Started"
  },
  "result": "success"
}
```

<h3 id="reload-both-techniques-and-dynamic-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service reload|Inline|

<h3 id="reload-both-techniques-and-dynamic-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|string|true|none|none|
|» techniques|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|reloadAll|
|» groups|Started|
|» techniques|Started|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload dynamic groups

<a id="opIdreloadGroups"></a>

> Code samples

```bash
curl https://example.com/system/reload/groups \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/reload/groups`

Reload dynamic groups

> Example responses

> 200 Response

```json
{
  "action": "reloadGroups",
  "data": {
    "groups": "Started"
  },
  "result": "success"
}
```

<h3 id="reload-dynamic-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service reload|Inline|

<h3 id="reload-dynamic-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» groups|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|reloadGroups|
|» groups|Started|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload techniques

<a id="opIdreloadTechniques"></a>

> Code samples

```bash
curl https://example.com/system/reload/techniques \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/reload/techniques`

Reload techniques from local technique library

> Example responses

> 200 Response

```json
{
  "action": "reloadTechniques",
  "data": {
    "techniques": "Started"
  },
  "result": "success"
}
```

<h3 id="reload-techniques-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service reload|Inline|

<h3 id="reload-techniques-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» techniques|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|reloadTechniques|
|» techniques|Started|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get server status

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl https://example.com/system/status \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /system/status`

Get information about current server status

> Example responses

> 200 Response

```json
{
  "action": "getStatus",
  "data": {
    "global": "OK"
  },
  "result": "success"
}
```

<h3 id="get-server-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service status|Inline|

<h3 id="get-server-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Status of the service|
|» global|string|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getStatus|
|» global|OK|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger update of policies

<a id="opIdupdatePolicies"></a>

> Code samples

```bash
curl https://example.com/system/update/policies \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /system/update/policies`

Update configuration policies if needed

> Example responses

> 200 Response

```json
{
  "action": "updatePolicies",
  "data": {
    "policies": "Started"
  },
  "result": "success"
}
```

<h3 id="trigger-update-of-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="trigger-update-of-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» policies|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updatePolicies|
|» policies|Started|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--change-requests">🧩 Change requests</h1>

**Requires that the `changes-validation` plugin is installed on the server.**

Manage change requests.

## List all change requests

<a id="opIdlistChangeRequests"></a>

> Code samples

```bash
curl https://example.com/api/changeRequests \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /api/changeRequests`

List all change requests

> Example responses

> 200 Response

```json
{
  "action": "listChangeRequests",
  "data": {
    "rules": [
      {
        "acceptable": true,
        "changes": {
          "rules": [
            {
              "action": "modify Rule"
            }
          ]
        },
        "created by": "Matthieu C.",
        "description": "string",
        "id": 42,
        "name": "Remove unused security policy",
        "status": "Deployed"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-change-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change requests information|Inline|

<h3 id="list-all-change-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[change-request](#schemachange-request)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listChangeRequests|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get a change request details

<a id="opIdchangeRequestDetails"></a>

> Code samples

```bash
curl https://example.com/changeRequests/37 \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /changeRequests/{changeRequestId}`

Get a change request details

<h3 id="get-a-change-request-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|changeRequestId|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "action": "changeRequestDetails",
  "data": {
    "rules": [
      {
        "acceptable": true,
        "changes": {
          "rules": [
            {
              "action": "modify Rule"
            }
          ]
        },
        "created by": "Matthieu C.",
        "description": "string",
        "id": 42,
        "name": "Remove unused security policy",
        "status": "Deployed"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-a-change-request-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change requests information|Inline|

<h3 id="get-a-change-request-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[change-request](#schemachange-request)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|changeRequestDetails|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a request details

<a id="opIdupdateChangeRequest"></a>

> Code samples

```bash
curl https://example.com/changeRequests/37 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /changeRequests/{changeRequestId}`

Update a change request

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="update-a-request-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|changeRequestId|path|integer|true|none|
|body|body|object|true|none|
|» description|body|string|false|Change request description|
|» name|body|string|false|Change request name|

> Example responses

> 200 Response

```json
{
  "action": "updateChangeRequest",
  "data": {
    "rules": [
      {
        "acceptable": true,
        "changes": {
          "rules": [
            {
              "action": "modify Rule"
            }
          ]
        },
        "created by": "Matthieu C.",
        "description": "string",
        "id": 42,
        "name": "Remove unused security policy",
        "status": "Deployed"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-a-request-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change requests information|Inline|

<h3 id="update-a-request-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[change-request](#schemachange-request)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateChangeRequest|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Decline a request details

<a id="opIddeclineChangeRequest"></a>

> Code samples

```bash
curl https://example.com/changeRequests/37 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /changeRequests/{changeRequestId}`

Refuse a change request

<h3 id="decline-a-request-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|changeRequestId|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "action": "declineChangeRequest",
  "data": {
    "rules": [
      {
        "acceptable": true,
        "changes": {
          "rules": [
            {
              "action": "modify Rule"
            }
          ]
        },
        "created by": "Matthieu C.",
        "description": "string",
        "id": 42,
        "name": "Remove unused security policy",
        "status": "Deployed"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="decline-a-request-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change requests information|Inline|

<h3 id="decline-a-request-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[change-request](#schemachange-request)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|declineChangeRequest|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Accept a request details

<a id="opIdacceptChangeRequest"></a>

> Code samples

```bash
curl https://example.com/changeRequests/37/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "status": "deployed"
  }'
```

`POST /changeRequests/{changeRequestId}/accept`

Accept a change request

> Body parameter

```json
{
  "status": "deployed"
}
```

<h3 id="accept-a-request-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|changeRequestId|path|integer|true|none|
|body|body|object|true|none|
|» status|body|string|false|New status of the change request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|pending deployment|
|» status|deployed|

> Example responses

> 200 Response

```json
{
  "action": "acceptChangeRequest",
  "data": {
    "rules": [
      {
        "acceptable": true,
        "changes": {
          "rules": [
            {
              "action": "modify Rule"
            }
          ]
        },
        "created by": "Matthieu C.",
        "description": "string",
        "id": 42,
        "name": "Remove unused security policy",
        "status": "Deployed"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="accept-a-request-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change requests information|Inline|

<h3 id="accept-a-request-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» rules|[[change-request](#schemachange-request)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|acceptChangeRequest|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List user

<a id="opIdlistUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /users`

List all validated and unvalidated users

> Example responses

> 200 Response

```json
{
  "action": "listUsers",
  "data": [
    {
      "isValidated": true,
      "userExists": true,
      "username": "John Do"
    }
  ],
  "result": "success"
}
```

<h3 id="list-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List users|Inline|

<h3 id="list-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[[validated-user](#schemavalidated-user)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listUsers|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update validated user list

<a id="opIdsaveWorkflowUser"></a>

> Code samples

```bash
curl https://example.com/validatedUsers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "validatedUsers": [
      "John Do"
    ]
  }'
```

`POST /validatedUsers`

Add and remove user from validated users

> Body parameter

```json
{
  "validatedUsers": [
    "John Do"
  ]
}
```

<h3 id="update-validated-user-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» validatedUsers|body|[string]|true|list of user to put in validated list|

> Example responses

> 200 Response

```json
{
  "action": "addUser",
  "data": {
    "isValidated": true,
    "userExists": true,
    "username": "John Do"
  },
  "result": "success"
}
```

<h3 id="update-validated-user-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|Inline|

<h3 id="update-validated-user-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[validated-user](#schemavalidated-user)|true|none|list of users with their workflow settings|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|addUser|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Remove an user from validated user list

<a id="opIdremoveValidatedUser"></a>

> Code samples

```bash
curl https://example.com/validatedUsers/JaneDoe \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /validatedUsers/{username}`

The user is again subject to workflow validation

<h3 id="remove-an-user-from-validated-user-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|Username of an user (unique)|

> Example responses

> 200 Response

```json
{
  "action": "listUsers",
  "data": "John Do",
  "result": "success"
}
```

<h3 id="remove-an-user-from-validated-user-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Removed user|Inline|

<h3 id="remove-an-user-from-validated-user-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|the user removed from validated list|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|listUsers|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--cve">🧩 CVE</h1>

**Requires that the `cve` plugin is installed on the server.**

Manage CVE plugins data and configuration.

## Get all CVE details

<a id="opIdgetAllCve"></a>

> Code samples

```bash
curl https://example.com/cve \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /cve`

Get all CVE details

> Example responses

> 200 Response

```json
{
  "action": "getAllCve",
  "data": {
    "CVEs": [
      {
        "cvssv2": {
          "baseScore": 0,
          "vector": "string"
        },
        "cvssv3": {
          "baseScore": 9.8,
          "baseSeverity": "critical",
          "vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
        },
        "cweIds": [
          "CWE-119"
        ],
        "description": "Buffer overflow in GNU Wget 1.20.1 and earlier allows remote attackers to cause a denial-of-service (DoS) or may execute an arbitrary code via unspecified vectors.",
        "id": "CVE-2019-5953",
        "lastModifiedDate": "2019-07-03 01:15:00+02",
        "publishedDate": "2019-05-17 18:29:00+02"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-all-cve-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CVE check result|Inline|

<h3 id="get-all-cve-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» CVEs|[[cveDetails](#schemacvedetails)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getAllCve|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Trigger a CVE check

<a id="opIdcheckCVE"></a>

> Code samples

```bash
curl https://example.com/cve/check \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /cve/check`

Trigger a CVE check

> Example responses

> 200 Response

```json
{
  "action": "checkCVE",
  "data": {
    "cveChecks": [
      {
        "cveId": "CVE-2019-5953",
        "nodes": [
          "string"
        ],
        "packages": [
          {
            "name": "libssh2-1",
            "version": "1.7.0-1"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="trigger-a-cve-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CVE check result|Inline|

<h3 id="trigger-a-cve-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» cveChecks|[[cveCheck](#schemacvecheck)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|checkCVE|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get CVE check config

<a id="opIdgetCVECheckConfiguration"></a>

> Code samples

```bash
curl https://example.com/cve/check/config \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /cve/check/config`

Get CVE check config

> Example responses

> 200 Response

```json
{
  "action": "getCVECheckConfiguration",
  "data": {
    "apiKey": "string",
    "url": "https://api.rudder.io/cve/v1/"
  },
  "result": "success"
}
```

<h3 id="get-cve-check-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CVE check config|Inline|

<h3 id="get-cve-check-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» apiKey|string|false|none|Token used by to contact the API to check CVE|
|» url|string|false|none|Url used to check CVE|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getCVECheckConfiguration|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update cve check config

<a id="opIdupdateCVECheckConfiguration"></a>

> Code samples

```bash
curl https://example.com/cve/check/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "apiKey": "string",
    "url": "https://api.rudder.io/cve/v1/"
  }'
```

`POST /cve/check/config`

Update cve check config

> Body parameter

```json
{
  "apiKey": "string",
  "url": "https://api.rudder.io/cve/v1/"
}
```

<h3 id="update-cve-check-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey|body|string|false|Token used by to contact the API to check CVE|
|» url|body|string|false|Url used to check CVE|

> Example responses

> 200 Response

```json
{
  "action": "updateCVECheckConfiguration",
  "data": {
    "apiKey": "string",
    "url": "https://api.rudder.io/cve/v1/"
  },
  "result": "success"
}
```

<h3 id="update-cve-check-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|new CVE check config|Inline|

<h3 id="update-cve-check-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» apiKey|string|false|none|Token used by to contact the API to check CVE|
|» url|string|false|none|Url used to check CVE|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateCVECheckConfiguration|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get last CVE check result

<a id="opIdgetLastCVECheck"></a>

> Code samples

```bash
curl https://example.com/cve/check/last \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /cve/check/last`

Get last CVE check result

> Example responses

> 200 Response

```json
{
  "action": "getLastCVECheck",
  "data": {
    "CVEChecks": [
      {
        "cveId": "CVE-2019-5953",
        "nodes": [
          "string"
        ],
        "packages": [
          {
            "name": "libssh2-1",
            "version": "1.7.0-1"
          }
        ]
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-last-cve-check-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Last CVE check|Inline|

<h3 id="get-last-cve-check-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» CVEChecks|[[cveCheck](#schemacvecheck)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getLastCVECheck|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get a list of CVE details

<a id="opIdgetCVEList"></a>

> Code samples

```bash
curl https://example.com/cve/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "cveIds": [
      "CVE-2019-5953"
    ]
  }'
```

`POST /cve/list`

Get CVE details, from a list passed as parameter

> Body parameter

```json
{
  "cveIds": [
    "CVE-2019-5953"
  ]
}
```

<h3 id="get-a-list-of-cve-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» cveIds|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "action": "getCVEList",
  "data": {
    "CVEs": [
      {
        "cvssv2": {
          "baseScore": 0,
          "vector": "string"
        },
        "cvssv3": {
          "baseScore": 9.8,
          "baseSeverity": "critical",
          "vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
        },
        "cweIds": [
          "CWE-119"
        ],
        "description": "Buffer overflow in GNU Wget 1.20.1 and earlier allows remote attackers to cause a denial-of-service (DoS) or may execute an arbitrary code via unspecified vectors.",
        "id": "CVE-2019-5953",
        "lastModifiedDate": "2019-07-03 01:15:00+02",
        "publishedDate": "2019-05-17 18:29:00+02"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-a-list-of-cve-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CVE list|Inline|

<h3 id="get-a-list-of-cve-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» CVEs|[[cveDetails](#schemacvedetails)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getCVEList|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update CVE database from remote source

<a id="opIdupdateCVE"></a>

> Code samples

```bash
curl https://example.com/cve/update/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "url": "https://nvd.nist.gov/feeds/json/cve/1.1",
    "years": [
      "2019"
    ]
  }'
```

`POST /cve/update/`

Update CVE database from remote source

> Body parameter

```json
{
  "url": "https://nvd.nist.gov/feeds/json/cve/1.1",
  "years": [
    "2019"
  ]
}
```

<h3 id="update-cve-database-from-remote-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|false|Url used to update CVE, will default to one set in config|
|» years|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "action": "updateCVE",
  "data": {
    "CVEs": 12345
  },
  "result": "success"
}
```

<h3 id="update-cve-database-from-remote-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated CVE count|Inline|

<h3 id="update-cve-database-from-remote-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» CVEs|integer|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateCVE|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update CVE database from file system

<a id="opIdreadCVEfromFS"></a>

> Code samples

```bash
curl https://example.com/cve/update/fs \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /cve/update/fs`

Update CVE database from file system

> Example responses

> 200 Response

```json
{
  "action": "readCVEfromFS",
  "data": {
    "CVEs": 12345
  },
  "result": "success"
}
```

<h3 id="update-cve-database-from-file-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated CVE count|Inline|

<h3 id="update-cve-database-from-file-system-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» CVEs|integer|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|readCVEfromFS|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--data-sources">🧩 Data sources</h1>

**Requires that the `datasources` plugin is installed on the server.**

Data sources plugin configuration.

## List all data sources

<a id="opIdgetAllDataSources"></a>

> Code samples

```bash
curl https://example.com/datasources \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /datasources`

Get the configuration of all present data sources

> Example responses

> 200 Response

```json
{
  "action": "getAllDataSources",
  "data": {
    "datasources": [
      {
        "description": "Synchronize example data from the CMDB",
        "enabled": true,
        "id": "test-data-source",
        "name": "Test data source",
        "runParameters": {
          "onGeneration": true,
          "onNewNode": true,
          "schedule": {
            "type": "scheduled"
          }
        },
        "type": {
          "name": "HTTP",
          "parameters": {
            "checkSsl": true,
            "headers": [
              {
                "name": "X-API-Key",
                "value": "05ce8e3d9df6"
              }
            ],
            "path": "string",
            "requestMethod": "GET",
            "requestMode": {
              "name": "byNode"
            },
            "requestTimeout": 10,
            "url": "http://jsonplaceholder.typicode.com/users/1"
          }
        },
        "updateTimeout": 30
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data sources information|Inline|

<h3 id="list-all-data-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» datasources|[[datasource](#schemadatasource)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getAllDataSources|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a data source

<a id="opIdcreateDataSource"></a>

> Code samples

```bash
curl https://example.com/datasources \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Synchronize example data from the CMDB",
    "enabled": true,
    "id": "test-data-source",
    "name": "Test data source",
    "runParameters": {
      "onGeneration": true,
      "onNewNode": true,
      "schedule": {
        "type": "scheduled"
      }
    },
    "type": {
      "name": "HTTP",
      "parameters": {
        "checkSsl": true,
        "headers": [
          {
            "name": "X-API-Key",
            "value": "05ce8e3d9df6"
          }
        ],
        "path": "string",
        "requestMethod": "GET",
        "requestMode": {
          "name": "byNode"
        },
        "requestTimeout": 10,
        "url": "http://jsonplaceholder.typicode.com/users/1"
      }
    },
    "updateTimeout": 30
  }'
```

`PUT /datasources`

Create a new data source

> Body parameter

```json
{
  "description": "Synchronize example data from the CMDB",
  "enabled": true,
  "id": "test-data-source",
  "name": "Test data source",
  "runParameters": {
    "onGeneration": true,
    "onNewNode": true,
    "schedule": {
      "type": "scheduled"
    }
  },
  "type": {
    "name": "HTTP",
    "parameters": {
      "checkSsl": true,
      "headers": [
        {
          "name": "X-API-Key",
          "value": "05ce8e3d9df6"
        }
      ],
      "path": "string",
      "requestMethod": "GET",
      "requestMode": {
        "name": "byNode"
      },
      "requestTimeout": 10,
      "url": "http://jsonplaceholder.typicode.com/users/1"
    }
  },
  "updateTimeout": 30
}
```

<h3 id="create-a-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[datasource](#schemadatasource)|false|none|
|» description|body|string|false|Description of the goal of the data source to create.|
|» enabled|body|boolean|false|Enable or disable data source.|
|» id|body|string|false|Unique identifier of the data source to create.|
|» name|body|string|false|The human readable name of the data source to create.|
|» runParameters|body|object|false|Parameters to configure when the data source is fetched to update node properties.|
|» » onGeneration|body|boolean|false|Trigger a fetch at the beginning of a policy generation|
|» » onNewNode|body|boolean|false|Trigger a fetch when a new node is accepted, for that node|
|» » schedule|body|object|false|Configure if data source should be fetch periodically|
|» » » type|body|string|false|`scheduled` enables periodic update, `notscheduled` disables them|
|» type|body|object|false|Define and configure data source type.|
|» » name|body|string|false|Data source type name|
|» » parameters|body|object|false|You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)|
|» » » checkSsl|body|boolean|false|Check SSL certificate validity for https. Must be set to false for self-signed certificate|
|» » » headers|body|[object]|false|Represent HTTP headers for the query. Rudder expansion available.|
|» » » » name|body|string|false|Name of the header|
|» » » » value|body|string|false|Value of the header|
|» » » path|body|string|false|JSON path (as defined in [the specification](https://github.com/jayway/JsonPath/), without the leading `$.`) to find the interesting sub-json or string/number/boolean value in the answer. Let empty to use the whole answer as value.|
|» » » requestMethod|body|string|false|HTTP method to use to contact the URL.|
|» » » requestMode|body|object|false|Configure the strategy used to query the HTTP data source.|
|» » » » name|body|string|false|Node by node strategy|
|» » » requestTimeout|body|integer|false|Timeout in seconds for each HTTP request|
|» » » url|body|string|false|URL to contact. Rudder expansion available.|
|» updateTimeout|body|integer|false|Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|scheduled|
|» » » type|notscheduled|
|» » name|HTTP|
|» » » requestMethod|GET|
|» » » requestMethod|POST|
|» » » » name|byNode|

> Example responses

> 200 Response

```json
{
  "action": "createDataSource",
  "data": {
    "datasources": [
      {
        "description": "Synchronize example data from the CMDB",
        "enabled": true,
        "id": "test-data-source",
        "name": "Test data source",
        "runParameters": {
          "onGeneration": true,
          "onNewNode": true,
          "schedule": {
            "type": "scheduled"
          }
        },
        "type": {
          "name": "HTTP",
          "parameters": {
            "checkSsl": true,
            "headers": [
              {
                "name": "X-API-Key",
                "value": "05ce8e3d9df6"
              }
            ],
            "path": "string",
            "requestMethod": "GET",
            "requestMode": {
              "name": "byNode"
            },
            "requestTimeout": 10,
            "url": "http://jsonplaceholder.typicode.com/users/1"
          }
        },
        "updateTimeout": 30
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created|Inline|

<h3 id="create-a-data-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|Information about the data sources|
|» datasources|[[datasource](#schemadatasource)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|createDataSource|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update properties from data sources

<a id="opIdReloadAllDatasourcesAllNodes"></a>

> Code samples

```bash
curl https://example.com/datasources/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /datasources/reload`

Update properties from all data source on all nodes. The call is asynchronous.

> Example responses

> 200 Response

```json
{
  "action": "ReloadAllDatasourcesAllNodes",
  "data": "Data for all nodes, for all configured data sources are going to be updated",
  "result": "success"
}
```

<h3 id="update-properties-from-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data source reloaded|Inline|

<h3 id="update-properties-from-data-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ReloadAllDatasourcesAllNodes|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update properties from data sources

<a id="opIdReloadOneDatasourceAllNodes"></a>

> Code samples

```bash
curl https://example.com/datasources/reload/test-data-source \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /datasources/reload/{datasourceId}`

Update properties from all data source on all nodes. The call is asynchronous.

<h3 id="update-properties-from-data-sources-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|string|true|Id of the data source|

> Example responses

> 200 Response

```json
{
  "action": "ReloadOneDatasourceAllNodes",
  "data": "Data for all nodes, for the 'test-data-source' data source are going to be updated",
  "result": "success"
}
```

<h3 id="update-properties-from-data-sources-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data source reloaded|Inline|

<h3 id="update-properties-from-data-sources-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ReloadOneDatasourceAllNodes|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get data source configuration

<a id="opIdgetDataSource"></a>

> Code samples

```bash
curl https://example.com/datasources/test-data-source \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /datasources/{datasourceId}`

Get the configuration of a data source

<h3 id="get-data-source-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|string|true|Id of the data source|

> Example responses

> 200 Response

```json
{
  "action": "getDataSource",
  "data": {
    "datasources": [
      {
        "description": "Synchronize example data from the CMDB",
        "enabled": true,
        "id": "test-data-source",
        "name": "Test data source",
        "runParameters": {
          "onGeneration": true,
          "onNewNode": true,
          "schedule": {
            "type": "scheduled"
          }
        },
        "type": {
          "name": "HTTP",
          "parameters": {
            "checkSsl": true,
            "headers": [
              {
                "name": "X-API-Key",
                "value": "05ce8e3d9df6"
              }
            ],
            "path": "string",
            "requestMethod": "GET",
            "requestMode": {
              "name": "byNode"
            },
            "requestTimeout": 10,
            "url": "http://jsonplaceholder.typicode.com/users/1"
          }
        },
        "updateTimeout": 30
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-data-source-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data source information|Inline|

<h3 id="get-data-source-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» datasources|[[datasource](#schemadatasource)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getDataSource|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a data source configuration

<a id="opIdupdateDataSource"></a>

> Code samples

```bash
curl https://example.com/datasources/test-data-source \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Synchronize example data from the CMDB",
    "enabled": true,
    "id": "test-data-source",
    "name": "Test data source",
    "runParameters": {
      "onGeneration": true,
      "onNewNode": true,
      "schedule": {
        "type": "scheduled"
      }
    },
    "type": {
      "name": "HTTP",
      "parameters": {
        "checkSsl": true,
        "headers": [
          {
            "name": "X-API-Key",
            "value": "05ce8e3d9df6"
          }
        ],
        "path": "string",
        "requestMethod": "GET",
        "requestMode": {
          "name": "byNode"
        },
        "requestTimeout": 10,
        "url": "http://jsonplaceholder.typicode.com/users/1"
      }
    },
    "updateTimeout": 30
  }'
```

`POST /datasources/{datasourceId}`

Update the configuration of a data source

> Body parameter

```json
{
  "description": "Synchronize example data from the CMDB",
  "enabled": true,
  "id": "test-data-source",
  "name": "Test data source",
  "runParameters": {
    "onGeneration": true,
    "onNewNode": true,
    "schedule": {
      "type": "scheduled"
    }
  },
  "type": {
    "name": "HTTP",
    "parameters": {
      "checkSsl": true,
      "headers": [
        {
          "name": "X-API-Key",
          "value": "05ce8e3d9df6"
        }
      ],
      "path": "string",
      "requestMethod": "GET",
      "requestMode": {
        "name": "byNode"
      },
      "requestTimeout": 10,
      "url": "http://jsonplaceholder.typicode.com/users/1"
    }
  },
  "updateTimeout": 30
}
```

<h3 id="update-a-data-source-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|string|true|Id of the data source|
|body|body|[datasource](#schemadatasource)|false|none|
|» description|body|string|false|Description of the goal of the data source to create.|
|» enabled|body|boolean|false|Enable or disable data source.|
|» id|body|string|false|Unique identifier of the data source to create.|
|» name|body|string|false|The human readable name of the data source to create.|
|» runParameters|body|object|false|Parameters to configure when the data source is fetched to update node properties.|
|» » onGeneration|body|boolean|false|Trigger a fetch at the beginning of a policy generation|
|» » onNewNode|body|boolean|false|Trigger a fetch when a new node is accepted, for that node|
|» » schedule|body|object|false|Configure if data source should be fetch periodically|
|» » » type|body|string|false|`scheduled` enables periodic update, `notscheduled` disables them|
|» type|body|object|false|Define and configure data source type.|
|» » name|body|string|false|Data source type name|
|» » parameters|body|object|false|You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)|
|» » » checkSsl|body|boolean|false|Check SSL certificate validity for https. Must be set to false for self-signed certificate|
|» » » headers|body|[object]|false|Represent HTTP headers for the query. Rudder expansion available.|
|» » » » name|body|string|false|Name of the header|
|» » » » value|body|string|false|Value of the header|
|» » » path|body|string|false|JSON path (as defined in [the specification](https://github.com/jayway/JsonPath/), without the leading `$.`) to find the interesting sub-json or string/number/boolean value in the answer. Let empty to use the whole answer as value.|
|» » » requestMethod|body|string|false|HTTP method to use to contact the URL.|
|» » » requestMode|body|object|false|Configure the strategy used to query the HTTP data source.|
|» » » » name|body|string|false|Node by node strategy|
|» » » requestTimeout|body|integer|false|Timeout in seconds for each HTTP request|
|» » » url|body|string|false|URL to contact. Rudder expansion available.|
|» updateTimeout|body|integer|false|Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|scheduled|
|» » » type|notscheduled|
|» » name|HTTP|
|» » » requestMethod|GET|
|» » » requestMethod|POST|
|» » » » name|byNode|

> Example responses

> 200 Response

```json
{
  "action": "updateDataSource",
  "data": {
    "datasources": [
      {
        "description": "Synchronize example data from the CMDB",
        "enabled": true,
        "id": "test-data-source",
        "name": "Test data source",
        "runParameters": {
          "onGeneration": true,
          "onNewNode": true,
          "schedule": {
            "type": "scheduled"
          }
        },
        "type": {
          "name": "HTTP",
          "parameters": {
            "checkSsl": true,
            "headers": [
              {
                "name": "X-API-Key",
                "value": "05ce8e3d9df6"
              }
            ],
            "path": "string",
            "requestMethod": "GET",
            "requestMode": {
              "name": "byNode"
            },
            "requestTimeout": 10,
            "url": "http://jsonplaceholder.typicode.com/users/1"
          }
        },
        "updateTimeout": 30
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-a-data-source-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data source information|Inline|

<h3 id="update-a-data-source-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» datasources|[[datasource](#schemadatasource)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateDataSource|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a data source

<a id="opIddeleteDataSource"></a>

> Code samples

```bash
curl https://example.com/datasources/test-data-source \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /datasources/{datasourceId}`

Delete a data source configuration

<h3 id="delete-a-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|string|true|Id of the data source|

> Example responses

> 200 Response

```json
{
  "action": "deleteDataSource",
  "data": {
    "datasources": [
      {
        "description": "Synchronize example data from the CMDB",
        "enabled": true,
        "id": "test-data-source",
        "name": "Test data source",
        "runParameters": {
          "onGeneration": true,
          "onNewNode": true,
          "schedule": {
            "type": "scheduled"
          }
        },
        "type": {
          "name": "HTTP",
          "parameters": {
            "checkSsl": true,
            "headers": [
              {
                "name": "X-API-Key",
                "value": "05ce8e3d9df6"
              }
            ],
            "path": "string",
            "requestMethod": "GET",
            "requestMode": {
              "name": "byNode"
            },
            "requestTimeout": 10,
            "url": "http://jsonplaceholder.typicode.com/users/1"
          }
        },
        "updateTimeout": 30
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data source information|Inline|

<h3 id="delete-a-data-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» datasources|[[datasource](#schemadatasource)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteDataSource|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update properties for one node from all data sources

<a id="opIdReloadAllDatasourcesOneNode"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b/fetchData \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /nodes/{nodeId}/fetchData`

Update properties from all data sources on one nodes. The call is asynchronous.

<h3 id="update-properties-for-one-node-from-all-data-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

> Example responses

> 200 Response

```json
{
  "action": "ReloadAllDatasourcesOneNode",
  "data": "Data for node '4e3336f9-ace8-44d6-8d07-496ff1631b01', for all configured data sources, is going to be updated",
  "result": "success"
}
```

<h3 id="update-properties-for-one-node-from-all-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data sources reloaded|Inline|

<h3 id="update-properties-for-one-node-from-all-data-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ReloadAllDatasourcesOneNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update properties for one node from a data source

<a id="opIdReloadOneDatasourceOneNode"></a>

> Code samples

```bash
curl https://example.com/nodes/9a1773c9-0889-40b6-be89-f6504443ac1b/fetchData/test-data-source \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /nodes/{nodeId}/fetchData/{datasourceId}`

Update properties from a data source on one nodes. The call is asynchronous.

<h3 id="update-properties-for-one-node-from-a-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|
|datasourceId|path|string|true|Id of the data source|

> Example responses

> 200 Response

```json
{
  "action": "ReloadOneDatasourceOneNode",
  "data": "Data for node '4e3336f9-ace8-44d6-8d07-496ff1631b01', for ' test-data-source' data source, is going to be updated",
  "result": "success"
}
```

<h3 id="update-properties-for-one-node-from-a-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data sources reloaded|Inline|

<h3 id="update-properties-for-one-node-from-a-data-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ReloadOneDatasourceOneNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--scale-out-relay">🧩 Scale out Relay</h1>

**Requires that the `scale-out-relay` plugin is installed on the server.**

Manage relays.

## Demote a relay to simple node

<a id="opIddemoteToNode"></a>

> Code samples

```bash
curl https://example.com/scaleoutrelay/demote/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /scaleoutrelay/demote/{nodeId}`

Demote a relay to a simple node.

<h3 id="demote-a-relay-to-simple-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

> Example responses

> 200 Response

```json
{
  "action": "demoteToNode",
  "data": "17dadf50-6056-4c8b-a935-6b97d14b89a7",
  "result": "success"
}
```

<h3 id="demote-a-relay-to-simple-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Demote to node response|Inline|

<h3 id="demote-a-relay-to-simple-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|Success or error message|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|demoteToNode|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Promote a node to relay

<a id="opIdpromoteToRelay"></a>

> Code samples

```bash
curl https://example.com/scaleoutrelay/promote/9a1773c9-0889-40b6-be89-f6504443ac1b \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /scaleoutrelay/promote/{nodeId}`

Promote a node to relay

<h3 id="promote-a-node-to-relay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string(uuid (or "root"))|true|Id of the target node|

> Example responses

> 200 Response

```json
{
  "action": "promoteToRelay",
  "data": "17dadf50-6056-4c8b-a935-6b97d14b89a7",
  "result": "success"
}
```

<h3 id="promote-a-node-to-relay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Promote response|Inline|

<h3 id="promote-a-node-to-relay-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|string|true|none|Success or error message|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|promoteToRelay|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--user-management">🧩 User Management</h1>

**Requires that the `user-management` plugin is installed on the server.**

Manage users settings and configuration file.

## Add user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl https://example.com/usermanagement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "isPreHahed": false,
    "password": "passwdWillBeStoredHashed",
    "role": [
      "user"
    ],
    "username": "John Doe"
  }'
```

`POST /usermanagement`

Add a new user

> Body parameter

```json
{
  "isPreHahed": false,
  "password": "passwdWillBeStoredHashed",
  "role": [
    "user"
  ],
  "username": "John Doe"
}
```

<h3 id="add-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[users](#schemausers)|true|none|
|» isPreHahed|body|boolean|false|If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash|
|» password|body|string|false|this password will be hashed for you if the `isPreHashed` is set on false|
|» role|body|[string]|false|Defined user's permissions|
|» username|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» isPreHahed|false|
|» isPreHahed|true|

> Example responses

> 200 Response

```json
{
  "action": "addUser",
  "data": {
    "addedUser": {
      "password": "passwdWillBeStoredHashed",
      "role": [
        "user"
      ],
      "username": "John Doe"
    }
  },
  "result": "success"
}
```

<h3 id="add-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|Inline|

<h3 id="add-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» addedUser|object|true|none|none|
|» » password|string|false|none|this password will be hashed for you if the `isPreHashed` is set on false|
|» » role|[string]|false|none|defined user's permissions|
|» » username|string|false|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|addUser|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List all roles

<a id="opIdgetRole"></a>

> Code samples

```bash
curl https://example.com/usermanagement/roles \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /usermanagement/roles`

Get all available roles and their rights

> Example responses

> 200 Response

```json
{
  "action": "getRole",
  "data": [
    {
      "id": "inventory",
      "rights": [
        "node_read"
      ]
    }
  ],
  "result": "success"
}
```

<h3 id="list-all-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Roles information|Inline|

<h3 id="list-all-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|[object]|true|none|none|
|» id|string|true|none|Name of the role|
|» rights|[string]|true|none|Role's rights|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getRole|
|» id|inventory|
|» id|compliance|
|» id|administrator|
|» id|etc|
|» rights|node_read|
|» rights|userAccount_all|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update user's infos

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/usermanagement/update/JaneDoe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "isPreHahed": false,
    "password": "passwdWillBeStoredHashed",
    "role": [
      "user"
    ],
    "username": "John Doe"
  }'
```

`POST /usermanagement/update/{username}`

Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.

> Body parameter

```json
{
  "isPreHahed": false,
  "password": "passwdWillBeStoredHashed",
  "role": [
    "user"
  ],
  "username": "John Doe"
}
```

<h3 id="update-users-infos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|Username of an user (unique)|
|body|body|[users](#schemausers)|true|none|
|» isPreHahed|body|boolean|false|If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash|
|» password|body|string|false|this password will be hashed for you if the `isPreHashed` is set on false|
|» role|body|[string]|false|Defined user's permissions|
|» username|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» isPreHahed|false|
|» isPreHahed|true|

> Example responses

> 200 Response

```json
{
  "action": "updateUser",
  "data": {
    "updatedUser": {
      "password": "Titi",
      "role": [
        "user"
      ],
      "username": "Titi"
    }
  },
  "result": "success"
}
```

<h3 id="update-users-infos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|Inline|

<h3 id="update-users-infos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» updatedUser|object|true|none|none|
|» » password|string|true|none|New password given|
|» » role|[string]|true|none|defined user's permissions|
|» » username|string|true|none|New Username|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateUser|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## List all users

<a id="opIdgetUserInfo"></a>

> Code samples

```bash
curl https://example.com/usermanagement/users \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /usermanagement/users`

Get the list of all present users and their permissions

> Example responses

> 200 Response

```json
{
  "action": "getUserInfo",
  "data": {
    "digest": "BCRYPT",
    "users": [
      {
        "isPreHahed": false,
        "password": "passwdWillBeStoredHashed",
        "role": [
          "user"
        ],
        "username": "John Doe"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users information|Inline|

<h3 id="list-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» digest|string|true|none|none|
|» users|[[users](#schemausers)]|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getUserInfo|
|» digest|BCRYPT|
|» digest|SHA512|
|» digest|SHA256|
|» digest|SHA1|
|» digest|MD5|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload user

<a id="opIdreloadUserConf"></a>

> Code samples

```bash
curl https://example.com/usermanagement/users/reload \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /usermanagement/users/reload`

Reload the users from the file system, in the configuration file

> Example responses

> 200 Response

```json
{
  "action": "reloadUserConf",
  "data": {
    "reload": {
      "status": "Done"
    }
  },
  "result": "success"
}
```

<h3 id="reload-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reload information|Inline|

<h3 id="reload-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» reload|object|true|none|none|
|» » status|string|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|reloadUserConf|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete an user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://example.com/usermanagement/JaneDoe \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /usermanagement/{username}`

Delete the user and his permissions

<h3 id="delete-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|Username of an user (unique)|

> Example responses

> 200 Response

```json
{
  "action": "deleteUser",
  "data": {
    "deletedUser": {
      "username": "Toto"
    }
  },
  "result": "success"
}
```

<h3 id="delete-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted user|Inline|

<h3 id="delete-an-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» deletedUser|object|true|none|none|
|» » username|string|true|none|Username of the deleted user|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteUser|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--branding">🧩 Branding</h1>

**Requires that the `branding` plugin is installed on the server.**

Manage web interface customization.

## Get branding configuration

<a id="opIdgetBrandingConf"></a>

> Code samples

```bash
curl https://example.com/branding \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /branding`

Get all web interface customization parameters

> Example responses

> 200 Response

```json
{
  "action": "getBrandingConf",
  "data": {
    "branding": {
      "barColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "displayBar": true,
      "displayBarLogin": true,
      "displayLabel": true,
      "displayMotd": true,
      "labelColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "labelText": "Production",
      "motd": "Welcome, please sign in:",
      "smallLogo": {
        "enable": true
      },
      "wideLogo": {
        "enable": true
      }
    }
  },
  "result": "success"
}
```

<h3 id="get-branding-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branding configuration|Inline|

<h3 id="get-branding-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» branding|[branding-conf](#schemabranding-conf)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getBrandingConf|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update web interface customization

<a id="opIdupdateBRandingConf"></a>

> Code samples

```bash
curl https://example.com/branding \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "barColor": {
      "alpha": 0.5,
      "blue": 0.235,
      "green": 0.01,
      "red": 0.2
    },
    "displayBar": true,
    "displayBarLogin": true,
    "displayLabel": true,
    "displayMotd": true,
    "labelColor": {
      "alpha": 0.5,
      "blue": 0.235,
      "green": 0.01,
      "red": 0.2
    },
    "labelText": "Production",
    "motd": "Welcome, please sign in:",
    "smallLogo": {
      "enable": true
    },
    "wideLogo": {
      "enable": true
    }
  }'
```

`POST /branding`

change color, logo, label etc.

> Body parameter

```json
{
  "barColor": {
    "alpha": 0.5,
    "blue": 0.235,
    "green": 0.01,
    "red": 0.2
  },
  "displayBar": true,
  "displayBarLogin": true,
  "displayLabel": true,
  "displayMotd": true,
  "labelColor": {
    "alpha": 0.5,
    "blue": 0.235,
    "green": 0.01,
    "red": 0.2
  },
  "labelText": "Production",
  "motd": "Welcome, please sign in:",
  "smallLogo": {
    "enable": true
  },
  "wideLogo": {
    "enable": true
  }
}
```

<h3 id="update-web-interface-customization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[branding-conf](#schemabranding-conf)|true|none|
|» barColor|body|[color](#schemacolor)|true|none|
|» displayBar|body|boolean|true|Whether header bar is displayed or not|
|» displayBarLogin|body|boolean|true|Whether header bar is displayed in login page or not|
|» displayLabel|body|boolean|true|Whether header bar's label is displayed or not|
|» displayMotd|body|boolean|true|Whether the message of the day is displayed in login page or not|
|» labelColor|body|[color](#schemacolor)|true|none|
|» labelText|body|string|true|The header bar's label title|
|» motd|body|string|true|Message of the day in login page|
|» smallLogo|body|[logo](#schemalogo)|true|none|
|» wideLogo|body|[logo](#schemalogo)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "updateBRandingConf",
  "data": {
    "branding": {
      "barColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "displayBar": true,
      "displayBarLogin": true,
      "displayLabel": true,
      "displayMotd": true,
      "labelColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "labelText": "Production",
      "motd": "Welcome, please sign in:",
      "smallLogo": {
        "enable": true
      },
      "wideLogo": {
        "enable": true
      }
    }
  },
  "result": "success"
}
```

<h3 id="update-web-interface-customization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|Inline|

<h3 id="update-web-interface-customization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» branding|[branding-conf](#schemabranding-conf)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateBRandingConf|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Reload branding file

<a id="opIdreloadBrandingConf"></a>

> Code samples

```bash
curl https://example.com/branding/reload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`POST /branding/reload`

Reload the configuration from file

> Example responses

> 200 Response

```json
{
  "action": "getBrandingConf",
  "data": {
    "branding": {
      "barColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "displayBar": true,
      "displayBarLogin": true,
      "displayLabel": true,
      "displayMotd": true,
      "labelColor": {
        "alpha": 0.5,
        "blue": 0.235,
        "green": 0.01,
        "red": 0.2
      },
      "labelText": "Production",
      "motd": "Welcome, please sign in:",
      "smallLogo": {
        "enable": true
      },
      "wideLogo": {
        "enable": true
      }
    }
  },
  "result": "success"
}
```

<h3 id="reload-branding-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branding configuration|Inline|

<h3 id="reload-branding-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» branding|[branding-conf](#schemabranding-conf)|true|none|none|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getBrandingConf|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

<h1 id="rudder-api--secret-management">🧩 Secret Management</h1>

**Requires that the `secret-management` plugin is installed on the server.**

Manage secrets variables.

## List all secrets

<a id="opIdgetAllSecrets"></a>

> Code samples

```bash
curl https://example.com/secret/ \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /secret/`

Get the list of all secrets without their value

> Example responses

> 200 Response

```json
{
  "action": "getAllSecrets",
  "data": {
    "secrets": [
      {
        "description": "Password of my super secret user account",
        "name": "secret-password"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="list-all-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secrets information|Inline|

<h3 id="list-all-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» secrets|[object]|true|none|List of API version and status|
|» » description|string|true|none|The description of the secret to identify it more easily|
|» » name|string|true|none|The name of the secret used as a reference on the value|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getAllSecrets|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Create a secret

<a id="opIdaddSecret"></a>

> Code samples

```bash
curl https://example.com/secret/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Password of my super secret user account",
    "name": "secret-password",
    "value": "nj-k;EO32!kFWewn2Nk,u"
  }'
```

`PUT /secret/`

Add a secret

> Body parameter

```json
{
  "description": "Password of my super secret user account",
  "name": "secret-password",
  "value": "nj-k;EO32!kFWewn2Nk,u"
}
```

<h3 id="create-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[secrets](#schemasecrets)|true|none|
|» description|body|string|false|The description of the secret to identify it more easily|
|» name|body|string|false|The name of the secret used as a reference on the value|
|» value|body|string|false|The value of the secret it will not be exposed in the interface|

> Example responses

> 200 Response

```json
{
  "action": "addSecret",
  "data": {
    "secrets": [
      {
        "description": "Password of my super secret user account",
        "name": "secret-password"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="create-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secrets information|Inline|

<h3 id="create-a-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» secrets|[object]|true|none|List of API version and status|
|» » description|string|true|none|The description of the secret to identify it more easily|
|» » name|string|true|none|The name of the secret used as a reference on the value|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|addSecret|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Update a secret

<a id="opIdupdateSecret"></a>

> Code samples

```bash
curl https://example.com/secret/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}" \
  -d '{
    "description": "Password of my super secret user account",
    "name": "secret-password",
    "value": "nj-k;EO32!kFWewn2Nk,u"
  }'
```

`POST /secret/`

Update a secret and override the value, the name cannot be overridden

> Body parameter

```json
{
  "description": "Password of my super secret user account",
  "name": "secret-password",
  "value": "nj-k;EO32!kFWewn2Nk,u"
}
```

<h3 id="update-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[secrets](#schemasecrets)|true|none|
|» description|body|string|false|The description of the secret to identify it more easily|
|» name|body|string|false|The name of the secret used as a reference on the value|
|» value|body|string|false|The value of the secret it will not be exposed in the interface|

> Example responses

> 200 Response

```json
{
  "action": "updateSecret",
  "data": {
    "secrets": [
      {
        "description": "Password of my super secret user account",
        "name": "secret-password"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="update-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secrets information|Inline|

<h3 id="update-a-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» secrets|[object]|true|none|List of API version and status|
|» » description|string|true|none|The description of the secret to identify it more easily|
|» » name|string|true|none|The name of the secret used as a reference on the value|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|updateSecret|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Get one secret

<a id="opIdgetSecret"></a>

> Code samples

```bash
curl https://example.com/secret/string \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`GET /secret/{name}`

Get one secret by his unique name

<h3 id="get-one-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Unique name of the secret|

> Example responses

> 200 Response

```json
{
  "action": "getSecret",
  "data": {
    "secrets": [
      {
        "description": "Password of my super secret user account",
        "name": "secret-password"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="get-one-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secret information|Inline|

<h3 id="get-one-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» secrets|[object]|true|none|List of API version and status|
|» » description|string|true|none|The description of the secret to identify it more easily|
|» » name|string|true|none|The name of the secret used as a reference on the value|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|getSecret|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

## Delete a secret

<a id="opIddeleteSecret"></a>

> Code samples

```bash
curl https://example.com/secret/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Token: ${API_KEY}"
```

`DELETE /secret/{name}`

Remove the secret by his unique name

<h3 id="delete-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Unique name of the secret|

> Example responses

> 200 Response

```json
{
  "action": "deleteSecret",
  "data": {
    "secrets": [
      {
        "description": "Password of my super secret user account",
        "name": "secret-password"
      }
    ]
  },
  "result": "success"
}
```

<h3 id="delete-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secret information|Inline|

<h3 id="delete-a-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The id of the action|
|data|object|true|none|none|
|» secrets|[object]|true|none|List of API version and status|
|» » description|string|true|none|The description of the secret to identify it more easily|
|» » name|string|true|none|The name of the secret used as a reference on the value|
|result|string|true|none|Result of the request|

#### Enumerated Values

|Property|Value|
|---|---|
|action|deleteSecret|
|result|success|
|result|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-Tokens
</aside>

# Schemas

<h2 id="tocS_agent-key">agent-key</h2>
<!-- backwards compatibility -->
<a id="schemaagent-key"></a>
<a id="schema_agent-key"></a>
<a id="tocSagent-key"></a>
<a id="tocsagent-key"></a>

```json
{
  "status": "certified",
  "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
}
```

Information about agent key or certificate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Certification status of the security token (reset to `undefined` to trust a new certificate). If `certified`, inventory signature check will be enforced|
|value|string(PEM)|true|none|Certificate (or public key for <6.0 agents) used by the agent. Be careful write a "\n" after header line and before footer line, JSON does not keep formatting in string.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|certified|
|status|undefined|

<h2 id="tocS_api-endpoints">api-endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaapi-endpoints"></a>
<a id="schema_api-endpoints"></a>
<a id="tocSapi-endpoints"></a>
<a id="tocsapi-endpoints"></a>

```json
[
  "{ 'listAcceptedNodes': 'List all accepted nodes with configurable details level', 'GET': '[8,9,10,11,12,13] /nodes' }"
]
```

<h2 id="tocS_api-version">api-version</h2>
<!-- backwards compatibility -->
<a id="schemaapi-version"></a>
<a id="schema_api-version"></a>
<a id="tocSapi-version"></a>
<a id="tocsapi-version"></a>

```json
{
  "all": [
    {
      "status": "maintained",
      "version": 12
    }
  ],
  "latest": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|[object]|false|none|List of API version and status|
|latest|integer|false|none|Latest API version available|

<h2 id="tocS_api-versions">api-versions</h2>
<!-- backwards compatibility -->
<a id="schemaapi-versions"></a>
<a id="schema_api-versions"></a>
<a id="tocSapi-versions"></a>
<a id="tocsapi-versions"></a>

```json
{
  "all": [
    {
      "all": [
        {
          "status": "maintained",
          "version": 12
        }
      ],
      "latest": 12
    }
  ],
  "latest": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|[[api-version](#schemaapi-version)]|false|none|List of API version and status|
|latest|integer|false|none|Latest API version available|

<h2 id="tocS_branding-conf">branding-conf</h2>
<!-- backwards compatibility -->
<a id="schemabranding-conf"></a>
<a id="schema_branding-conf"></a>
<a id="tocSbranding-conf"></a>
<a id="tocsbranding-conf"></a>

```json
{
  "barColor": {
    "alpha": 0.5,
    "blue": 0.235,
    "green": 0.01,
    "red": 0.2
  },
  "displayBar": true,
  "displayBarLogin": true,
  "displayLabel": true,
  "displayMotd": true,
  "labelColor": {
    "alpha": 0.5,
    "blue": 0.235,
    "green": 0.01,
    "red": 0.2
  },
  "labelText": "Production",
  "motd": "Welcome, please sign in:",
  "smallLogo": {
    "enable": true
  },
  "wideLogo": {
    "enable": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barColor|[color](#schemacolor)|true|none|none|
|displayBar|boolean|true|none|Whether header bar is displayed or not|
|displayBarLogin|boolean|true|none|Whether header bar is displayed in login page or not|
|displayLabel|boolean|true|none|Whether header bar's label is displayed or not|
|displayMotd|boolean|true|none|Whether the message of the day is displayed in login page or not|
|labelColor|[color](#schemacolor)|true|none|none|
|labelText|string|true|none|The header bar's label title|
|motd|string|true|none|Message of the day in login page|
|smallLogo|[logo](#schemalogo)|true|none|none|
|wideLogo|[logo](#schemalogo)|true|none|none|

<h2 id="tocS_categories-tree">categories-tree</h2>
<!-- backwards compatibility -->
<a id="schemacategories-tree"></a>
<a id="schema_categories-tree"></a>
<a id="tocScategories-tree"></a>
<a id="tocscategories-tree"></a>

```json
{
  "id": "/",
  "name": "/",
  "path": "",
  "subcategories": [
    {
      "id": "systemManagement",
      "name": "User Techniques",
      "path": "systemSettings/systemManagement",
      "subcategories": []
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Category ID|
|name|string|true|none|Category's name|
|path|string|true|none|Category's path|
|subcategories|[[category](#schemacategory)]|true|none|List of sub categories|

<h2 id="tocS_category">category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "systemManagement",
  "name": "User Techniques",
  "path": "systemSettings/systemManagement",
  "subcategories": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Category ID|
|name|string|true|none|Category's name|
|path|string|true|none|category's path|
|subcategories|[[category](#schemacategory)]|true|none|List of sub categories|

<h2 id="tocS_change-request">change-request</h2>
<!-- backwards compatibility -->
<a id="schemachange-request"></a>
<a id="schema_change-request"></a>
<a id="tocSchange-request"></a>
<a id="tocschange-request"></a>

```json
{
  "acceptable": true,
  "changes": {
    "rules": [
      {
        "action": "modify Rule"
      }
    ]
  },
  "created by": "Matthieu C.",
  "description": "string",
  "id": 42,
  "name": "Remove unused security policy",
  "status": "Deployed"
}
```

Content of the change request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptable|boolean|false|none|none|
|changes|object|false|none|none|
|created by|string|false|none|none|
|description|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Deployed|
|status|Pending deployment|
|status|Cancelled|
|status|Pending validation|
|status|Open|

<h2 id="tocS_check">check</h2>
<!-- backwards compatibility -->
<a id="schemacheck"></a>
<a id="schema_check"></a>
<a id="tocScheck"></a>
<a id="tocscheck"></a>

```json
{
  "msg": "Only 2GB of RAM left",
  "name": "RAM available",
  "status": "Critical"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|true|none|Message about the check|
|name|string|true|none|Name of the check|
|status|string|true|none|The severity status of the check|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Critical|
|status|Warning|
|status|Ok|

<h2 id="tocS_color">color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "alpha": 0.5,
  "blue": 0.235,
  "green": 0.01,
  "red": 0.2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number|true|none|percentage of opacity|
|blue|number|true|none|percentage of blue component|
|green|number|true|none|percentage of green component|
|red|number|true|none|percentage of red component|

<h2 id="tocS_cveCheck">cveCheck</h2>
<!-- backwards compatibility -->
<a id="schemacvecheck"></a>
<a id="schema_cveCheck"></a>
<a id="tocScvecheck"></a>
<a id="tocscvecheck"></a>

```json
{
  "cveId": "CVE-2019-5953",
  "nodes": [
    "string"
  ],
  "packages": [
    {
      "name": "libssh2-1",
      "version": "1.7.0-1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cveId|string(cve id)|false|none|CVE id|
|nodes|[string]|false|none|Id of Nodes affected by this CVE|
|packages|[object]|false|none|packages affected by this CVE|

<h2 id="tocS_cveDetails">cveDetails</h2>
<!-- backwards compatibility -->
<a id="schemacvedetails"></a>
<a id="schema_cveDetails"></a>
<a id="tocScvedetails"></a>
<a id="tocscvedetails"></a>

```json
{
  "cvssv2": {
    "baseScore": 0,
    "vector": "string"
  },
  "cvssv3": {
    "baseScore": 9.8,
    "baseSeverity": "critical",
    "vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
  },
  "cweIds": [
    "CWE-119"
  ],
  "description": "Buffer overflow in GNU Wget 1.20.1 and earlier allows remote attackers to cause a denial-of-service (DoS) or may execute an arbitrary code via unspecified vectors.",
  "id": "CVE-2019-5953",
  "lastModifiedDate": "2019-07-03 01:15:00+02",
  "publishedDate": "2019-05-17 18:29:00+02"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvssv2|object|false|none|CVSS V2 of the CVE|
|cvssv3|object|false|none|CVSS V3 of the CVE|
|cweIds|[string]|false|none|List of CWE (Common Weakness Enumeration) of the CVE|
|description|string(date)|false|none|CVE Description|
|id|string(cve id)|false|none|CVE id|
|lastModifiedDate|string(date)|false|none|last Date the CVE was modified|
|publishedDate|string(date)|false|none|Date the CVE was published|

<h2 id="tocS_datasource">datasource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_datasource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "description": "Synchronize example data from the CMDB",
  "enabled": true,
  "id": "test-data-source",
  "name": "Test data source",
  "runParameters": {
    "onGeneration": true,
    "onNewNode": true,
    "schedule": {
      "type": "scheduled"
    }
  },
  "type": {
    "name": "HTTP",
    "parameters": {
      "checkSsl": true,
      "headers": [
        {
          "name": "X-API-Key",
          "value": "05ce8e3d9df6"
        }
      ],
      "path": "string",
      "requestMethod": "GET",
      "requestMode": {
        "name": "byNode"
      },
      "requestTimeout": 10,
      "url": "http://jsonplaceholder.typicode.com/users/1"
    }
  },
  "updateTimeout": 30
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the goal of the data source to create.|
|enabled|boolean|false|none|Enable or disable data source.|
|id|string|false|none|Unique identifier of the data source to create.|
|name|string|false|none|The human readable name of the data source to create.|
|runParameters|object|false|none|Parameters to configure when the data source is fetched to update node properties.|
|type|object|false|none|Define and configure data source type.|
|updateTimeout|integer|false|none|Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.|

<h2 id="tocS_directive">directive</h2>
<!-- backwards compatibility -->
<a id="schemadirective"></a>
<a id="schema_directive"></a>
<a id="tocSdirective"></a>
<a id="tocsdirective"></a>

```json
{
  "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "enabled": true,
  "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
  "parameters": {
    "name": "sections",
    "sections": [
      {
        "section": {
          "name": "File to manage",
          "sections": [
            {
              "section": {
                "name": "File",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                      "value": "/root/test"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "File cleaning options",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_DAYS",
                      "value": "0"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_OPTION",
                      "value": "none"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                      "value": ".*"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Permissions",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                      "value": "false"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                      "value": "000"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                      "value": "1"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Post-modification hook",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ],
          "vars": [
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                "value": "copy"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                "value": "/vagrant/node.sh"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                "value": "false"
              }
            }
          ]
        }
      }
    ]
  },
  "policyMode": "audit",
  "priority": 5,
  "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "techniqueName": "userManagement",
  "techniqueVersion": "8.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Human readable name of the directive|
|enabled|boolean|false|none|Is the directive enabled|
|id|string(uuid)|false|none|Directive id|
|longDescription|string(markdown)|false|none|Description of the technique (rendered as markdown)|
|parameters|object|false|none|Directive parameters (depends on the source technique)|
|policyMode|string|false|none|Policy mode of the directive|
|priority|integer|false|none|Directive priority. `0` has highest priority.|
|shortDescription|string|false|none|One line directive description|
|system|boolean|false|none|If true it is an internal Rudder directive|
|tags|[object]|false|none|none|
|techniqueName|string|false|none|Directive id|
|techniqueVersion|string|false|none|Directive id|

#### Enumerated Values

|Property|Value|
|---|---|
|policyMode|enforce|
|policyMode|audit|

<h2 id="tocS_directive-new">directive-new</h2>
<!-- backwards compatibility -->
<a id="schemadirective-new"></a>
<a id="schema_directive-new"></a>
<a id="tocSdirective-new"></a>
<a id="tocsdirective-new"></a>

```json
{
  "displayName": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "enabled": true,
  "id": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "longDescription": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
  "parameters": {
    "name": "sections",
    "sections": [
      {
        "section": {
          "name": "File to manage",
          "sections": [
            {
              "section": {
                "name": "File",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PATH",
                      "value": "/root/test"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "File cleaning options",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_DAYS",
                      "value": "0"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_OPTION",
                      "value": "none"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_DELETION_PATTERN",
                      "value": ".*"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Permissions",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS",
                      "value": "false"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_GROUP",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_OWNER",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_PERM",
                      "value": "000"
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_RECURSIVE",
                      "value": "1"
                    }
                  }
                ]
              }
            },
            {
              "section": {
                "name": "Post-modification hook",
                "vars": [
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND",
                      "value": ""
                    }
                  },
                  {
                    "var": {
                      "name": "FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN",
                      "value": "false"
                    }
                  }
                ]
              }
            }
          ],
          "vars": [
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_ACTION",
                "value": "copy"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SOURCE",
                "value": "/vagrant/node.sh"
              }
            },
            {
              "var": {
                "name": "FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE",
                "value": "false"
              }
            }
          ]
        }
      }
    ]
  },
  "priority": 5,
  "shortDescription": "91252ea2-feb2-412d-8599-c6945fee02c4",
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "techniqueName": "userManagement",
  "techniqueVersion": "8.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Human readable name of the directive|
|enabled|boolean|false|none|Is the directive enabled|
|id|string(uuid)|false|none|Directive id|
|longDescription|string(markdown)|false|none|Description of the technique (rendered as markdown)|
|parameters|object|false|none|Directive parameters (depends on the source technique)|
|priority|integer|false|none|Directive priority. `0` has highest priority.|
|shortDescription|string|false|none|One line directive description|
|source|string(uuid)|false|none|The id of the directive the clone will be based onto. If this parameter if provided,  the new directive will be a clone of this source. Other value will override values from the source.|
|system|boolean|false|none|If true it is an internal Rudder directive|
|tags|[object]|false|none|none|
|techniqueName|string|false|none|Directive id|
|techniqueVersion|string|false|none|Directive id|

<h2 id="tocS_editorTechnique">editorTechnique</h2>
<!-- backwards compatibility -->
<a id="schemaeditortechnique"></a>
<a id="schema_editorTechnique"></a>
<a id="tocSeditortechnique"></a>
<a id="tocseditortechnique"></a>

```json
{
  "calls": [
    {
      "component": "Install apache2",
      "condition": "linux.package_present_vim_repaired",
      "disableReporting": true,
      "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
      "method": "package_present",
      "parameters": [
        {
          "name": "package",
          "value": "apache2"
        }
      ]
    }
  ],
  "category": "user_techniques",
  "description": "This techniques apply generic security policies",
  "id": "security-policy",
  "name": "Security Policy",
  "parameters": [
    {
      "description": "Name of a package to install",
      "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
      "mayBeEmpty": true,
      "name": "Package to install"
    }
  ],
  "resources": [
    {
      "name": "conf/my/app/new",
      "state": "modified"
    }
  ],
  "source": "editor",
  "version": "1.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|[[techniqueMethodCall](#schematechniquemethodcall) \| [techniqueBlock](#schematechniqueblock)]|false|none|Method and blocks contained by this technique|
|category|string|false|none|category of this technique|
|description|string|false|none|description of this technique|
|id|string|false|none|Technique id|
|name|string|false|none|Technique name|
|parameters|[[techniqueParameter](#schematechniqueparameter)]|false|none|Parameters for this technique|
|resources|[[techniqueResource](#schematechniqueresource)]|false|none|Resources for this technique|
|source|string|false|none|Source of the technique, always editor here|
|version|string|false|none|version of this technique|

<h2 id="tocS_group">group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "description": "Documentation for the group",
  "displayName": "Ubuntu 18.04 nodes",
  "dynamic": true,
  "enabled": true,
  "groupClass": [
    "group_ubuntu"
  ],
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "nodeIds": [
    "109142a2-40eb-4e6d-84b4-7ebe3670474c"
  ],
  "properties": [
    {
      "name": "os",
      "value": "debian10"
    }
  ],
  "query": {
    "composition": "and",
    "select": "node",
    "where": [
      {
        "attribute": "OS",
        "comparator": "eq",
        "objectType": "node",
        "value": "Linux"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Group description|
|displayName|string|false|none|Name of the group|
|dynamic|boolean|false|none|Should the group be dynamically refreshed (if not, it is a static group)|
|enabled|boolean|false|none|Enable or disable the group|
|groupClass|[string(condition)]|false|none|none|
|id|string(uuid)|false|none|Group id|
|nodeIds|[string(uuid (or "root"))]|false|none|List of nodes in the group|
|properties|[object]|false|none|Group properties|
|query|object|false|none|The criteria defining the group|

<h2 id="tocS_group-category">group-category</h2>
<!-- backwards compatibility -->
<a id="schemagroup-category"></a>
<a id="schema_group-category"></a>
<a id="tocSgroup-category"></a>
<a id="tocsgroup-category"></a>

```json
{
  "description": "Nodes by hardware provider",
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "name": "Hardware groups",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Group category description|
|id|string(uuid)|false|none|Group category id, only provide it when needed.|
|name|string|true|none|Name of the group category|
|parent|string(uuid)|true|none|The parent category of the groups|

<h2 id="tocS_group-category-update">group-category-update</h2>
<!-- backwards compatibility -->
<a id="schemagroup-category-update"></a>
<a id="schema_group-category-update"></a>
<a id="tocSgroup-category-update"></a>
<a id="tocsgroup-category-update"></a>

```json
{
  "description": "Nodes by hardware provider",
  "name": "Hardware groups",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Group category description|
|name|string|true|none|Name of the group category|
|parent|string(uuid)|true|none|The parent category of the groups|

<h2 id="tocS_group-new">group-new</h2>
<!-- backwards compatibility -->
<a id="schemagroup-new"></a>
<a id="schema_group-new"></a>
<a id="tocSgroup-new"></a>
<a id="tocsgroup-new"></a>

```json
{
  "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
  "description": "Documentation for the group",
  "displayName": "Ubuntu 18.04 nodes",
  "dynamic": true,
  "enabled": true,
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "properties": [
    {
      "name": "os",
      "value": "debian10"
    }
  ],
  "query": {
    "composition": "and",
    "select": "node",
    "where": [
      {
        "attribute": "OS",
        "comparator": "eq",
        "objectType": "node",
        "value": "Linux"
      }
    ]
  },
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string(uuid)|true|none|Id of the new group's category|
|description|string|false|none|Group description|
|displayName|string|true|none|Name of the group|
|dynamic|boolean|false|none|Should the group be dynamically refreshed (if not, it is a static group)|
|enabled|boolean|false|none|Enable or disable the group|
|id|string(uuid)|false|none|Group id, only provide it when needed.|
|properties|[object]|false|none|Group properties|
|query|object|false|none|The criteria defining the group. If not provided, the group will be empty.|
|source|string(uuid)|false|none|The id of the group the clone will be based onto. If this parameter if provided,  the new group will be a clone of this source. Other value will override values from the source.|

<h2 id="tocS_group-update">group-update</h2>
<!-- backwards compatibility -->
<a id="schemagroup-update"></a>
<a id="schema_group-update"></a>
<a id="tocSgroup-update"></a>
<a id="tocsgroup-update"></a>

```json
{
  "category": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
  "description": "Documentation for the group",
  "displayName": "Ubuntu 18.04 nodes",
  "dynamic": true,
  "enabled": true,
  "query": {
    "composition": "and",
    "select": "node",
    "where": [
      {
        "attribute": "OS",
        "comparator": "eq",
        "objectType": "node",
        "value": "Linux"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string(uuid)|false|none|Id of the new group's category|
|description|string|false|none|Group description|
|displayName|string|false|none|Name of the group|
|dynamic|boolean|false|none|Should the group be dynamically refreshed (if not, it is a static group)|
|enabled|boolean|false|none|Enable or disable the group|
|query|object|false|none|The criteria defining the group. If not provided, the group will be empty.|

<h2 id="tocS_logo">logo</h2>
<!-- backwards compatibility -->
<a id="schemalogo"></a>
<a id="schema_logo"></a>
<a id="tocSlogo"></a>
<a id="tocslogo"></a>

```json
{
  "enable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|boolean|true|none|Whether the wide logo is displayed or not|

<h2 id="tocS_methodParameter">methodParameter</h2>
<!-- backwards compatibility -->
<a id="schemamethodparameter"></a>
<a id="schema_methodParameter"></a>
<a id="tocSmethodparameter"></a>
<a id="tocsmethodparameter"></a>

```json
{
  "constraints": {
    "allow_empty_string": false,
    "allow_whitespace_string": true,
    "max_length": 250,
    "min_length": 5,
    "not_regex": "^c.*",
    "regex": ".*",
    "select": [
      "!="
    ]
  },
  "description": "Name of a package to install",
  "name": "package",
  "typ": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|object|true|none|none|
|description|string|true|none|description of this parameter|
|name|string|true|none|Parameter name|
|typ|string|true|none|Type of the parameter, probably just a string for now, but can be a dsc "HereString"|

<h2 id="tocS_methods">methods</h2>
<!-- backwards compatibility -->
<a id="schemamethods"></a>
<a id="schema_methods"></a>
<a id="tocSmethods"></a>
<a id="tocsmethods"></a>

```json
{
  "agents": [
    "dsc"
  ],
  "category": "user_techniques",
  "condition": {
    "parameter": "package",
    "prefix": "package_present"
  },
  "deprecated": {
    "info": "titi",
    "replacedBy": "tutu"
  },
  "desc": "Enforce the presence of a package",
  "documentation": "toto",
  "id": "package_present",
  "name": "Package present",
  "parameters": [
    {
      "constraints": {
        "allow_empty_string": false,
        "allow_whitespace_string": true,
        "max_length": 250,
        "min_length": 5,
        "not_regex": "^c.*",
        "regex": ".*",
        "select": [
          "!="
        ]
      },
      "description": "Name of a package to install",
      "name": "package",
      "typ": "test"
    }
  ],
  "version": "1.0"
}
```

List of available generic methods

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[string]|true|none|List of agents compatible with this method|
|category|string|true|none|category of this technique|
|condition|object|true|none|condition generated by this method|
|deprecated|object|true|none|Is this method deprecated ?|
|desc|string|true|none|description of this method|
|documentation|string|true|none|full documentation of this method|
|id|string|true|none|method id|
|name|string|true|none|method name|
|parameters|[[methodParameter](#schemamethodparameter)]|true|none|Parameters for this technique|
|version|string|true|none|version of this technique|

<h2 id="tocS_node-add">node-add</h2>
<!-- backwards compatibility -->
<a id="schemanode-add"></a>
<a id="schema_node-add"></a>
<a id="tocSnode-add"></a>
<a id="tocsnode-add"></a>

```json
[
  {
    "agentKey": {
      "status": "certified",
      "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
    },
    "hostname": "my.node.hostname.local",
    "id": "378740d3-c4a9-4474-8485-478e7e52db52",
    "ipAddresses": [
      "192.168.180.90"
    ],
    "machineType": "vmware",
    "os": {
      "fullName": "Debian GNU/Linux 9 (stretch)",
      "name": "debian",
      "servicePack": "string",
      "type": "linux",
      "version": 9.5
    },
    "policyMode": "enforce",
    "policyServerId": "root",
    "properties": [
      {
        "name": "datacenter",
        "value": "AMS2"
      }
    ],
    "state": "enabled",
    "status": "accepted",
    "timezone": {
      "name": "CEST",
      "offset": 200
    }
  }
]
```

<h2 id="tocS_node-full">node-full</h2>
<!-- backwards compatibility -->
<a id="schemanode-full"></a>
<a id="schema_node-full"></a>
<a id="tocSnode-full"></a>
<a id="tocsnode-full"></a>

```json
{
  "accounts": [
    "root"
  ],
  "architectureDescription": "x86_64",
  "bios": {
    "description": "FIXME",
    "editor": "innotek GmbH",
    "name": "VirtualBox",
    "quantity": 1,
    "releaseDate": "2006-12-01 00:00:00+0000",
    "version": "1.2.3"
  },
  "controllers": [
    {
      "description": "string",
      "manufacturer": "string",
      "name": "string",
      "quantity": 1,
      "type": "string"
    }
  ],
  "description": "",
  "environmentVariables": [
    {
      "name": "LANG",
      "value": "en_US.UTF-8"
    }
  ],
  "fileSystems": [
    {
      "description": "string",
      "fileCount": 1456,
      "freeSpace": 3487,
      "mountPoint": "/srv",
      "name": "ext4",
      "totalSpace": 208869
    }
  ],
  "hostname": "node1.example.com",
  "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
  "ipAddresses": [
    "192.168.23.45"
  ],
  "lastInventoryDate": "2020-02-29T10:11:32Z",
  "lastRunDate": "2020-02-29T14:48:28Z",
  "machine": {
    "id": "string",
    "manufacturer": "innotek GmbH",
    "provider": "vbox",
    "serialNumber": "ece12459-2b90-49c9-ab1e-72e38f797421",
    "type": "Virtual"
  },
  "managementTechnology": [
    {
      "capabilities": [
        "xml"
      ],
      "name": "Rudder",
      "nodeKind": "node",
      "rootComponents": [
        "rudder-db"
      ],
      "version": "6.0.3.release-1.EL.7"
    }
  ],
  "managementTechnologyDetails": {
    "cfengineKeys": [
      "-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----"
    ],
    "cfengineUser": "root"
  },
  "memories": [
    {
      "capacity": 2,
      "caption": "string",
      "description": "string",
      "name": "string",
      "quantity": 1,
      "serialNumber": "string",
      "slotNumber": 3,
      "speed": 1066,
      "type": "string"
    }
  ],
  "networkInterfaces": [
    {
      "dhcpServer": "192.168.34.5",
      "ipAddresses": [
        "192.168.76.4"
      ],
      "macAddress": "08:00:27:6f:5c:14",
      "mask": [
        "255.255.255.0"
      ],
      "name": "eth0",
      "speed": "1000",
      "status": "Up",
      "type": "ethernet"
    }
  ],
  "os": {
    "fullName": "CentOS Linux release 7.6.1810 (Core)",
    "kernelVersion": "3.10.0-957.1.3.el7.x86_64",
    "name": "Centos",
    "servicePack": "3",
    "type": "Linux",
    "version": "7.6.1810"
  },
  "policyMode": "audit",
  "policyServerId": "root",
  "ports": [
    {
      "description": "string",
      "name": "string",
      "quantity": 1,
      "type": "string"
    }
  ],
  "processes": [
    {
      "cpuUsage": 1,
      "description": "string",
      "memory": 0.4000000059604645,
      "name": "/usr/sbin/httpd -DFOREGROUND",
      "pid": 3576,
      "started": "2020-02-29 00:24",
      "tty": "?",
      "user": "apache",
      "virtualMemory": 4380
    }
  ],
  "processors": [
    {
      "arch": "i386",
      "core": 1,
      "cpuid": "string",
      "description": "string",
      "externalClock": "string",
      "familyName": "string",
      "manufacturer": "Intel",
      "model": 158,
      "name": "Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz",
      "quantity": 1,
      "speed": 2800,
      "stepping": 9,
      "thread": 1
    }
  ],
  "properties": [
    {
      "name": "datacenter",
      "value": "AMS2"
    }
  ],
  "ram": 0,
  "slots": [
    {
      "description": "string",
      "name": "string",
      "quantity": 0,
      "status": "string"
    }
  ],
  "software": [
    {
      "description": "A library for getting files from web servers",
      "editor": "CentOS",
      "license": {
        "description": "string",
        "expirationDate": "1970-01-01",
        "name": "string",
        "oem": "string",
        "productId": "string",
        "productKey": "string"
      },
      "name": "libcurl",
      "releaseDate": "1970-01-01",
      "version": "7.29.0-54.el7_7.2"
    }
  ],
  "softwareUpdate": [
    {
      "arch": "string",
      "description": "string",
      "from": "string",
      "ids": [
        "string"
      ],
      "kind": "none",
      "name": "string",
      "severity": "critical",
      "source": "string",
      "version": "string"
    }
  ],
  "sound": [
    {
      "description": "string",
      "name": "string",
      "quantity": 1
    }
  ],
  "status": "accepted",
  "storage": [
    {
      "description": "string",
      "firmware": "10",
      "manufacturer": "string",
      "model": "VBOXHARDDISK",
      "name": "sda",
      "quantity": 1,
      "serialNumber": "000a1954",
      "size": 85899,
      "type": "disk"
    }
  ],
  "timezone": {
    "name": "UTC",
    "offset": "+0000"
  },
  "videos": [
    {
      "chipset": "string",
      "description": "string",
      "memory": "string",
      "name": "string",
      "quantity": 1,
      "resolution": "string"
    }
  ],
  "virtualMachines": [
    {
      "description": "string",
      "memory": "string",
      "name": "string",
      "owner": "string",
      "status": "string",
      "subsystem": "string",
      "type": "string",
      "uuid": "string",
      "vcpu": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[string]|false|none|User accounts declared in the node|
|architectureDescription|string|false|none|Information about CPU architecture (32/64 bits)|
|bios|object|false|none|BIOS information|
|controllers|[object]|false|none|Physical controller information|
|description|string|false|none|A human intended description of the node (not used)|
|environmentVariables|[object]|false|none|Environment variables defined on the node in the context of the agent|
|fileSystems|[object]|false|none|File system declared on the node|
|hostname|string|true|none|Fully qualified name of the node|
|id|string(uuid (or "root"))|true|none|Unique id of the node|
|ipAddresses|[string]|true|none|IP addresses of the node (IPv4 and IPv6)|
|lastInventoryDate|string(date)|false|none|Date and time of the latest generated inventory, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"|
|lastRunDate|string(date)|false|none|Date and time of the latest run, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"|
|machine|object|false|none|Information about the underlying machine|
|managementTechnology|[object]|true|none|Management agents running on the node|
|managementTechnologyDetails|object|false|none|Additional information about management technology|
|memories|[object]|false|none|Memory slots|
|networkInterfaces|[object]|false|none|Detailed information about registered network interfaces on the node|
|os|object|false|none|Information about the operating system|
|policyMode|string|false|none|Rudder policy mode for the node (`default` follows the global configuration)|
|policyServerId|string(uuid (or "root"))|true|none|Rudder policy server managing the node|
|ports|[object]|false|none|Physical port information objects|
|processes|[object]|false|none|Process running (at inventory time)|
|processors|[object]|false|none|CPU information|
|properties|[object]|true|none|Node properties (either set by user or filled by third party sources)|
|ram|integer|false|none|Size of RAM in MB|
|slots|[object]|false|none|Physical extension slot information|
|software|[object]|false|none|Software installed on the node (can have thousands items)|
|softwareUpdate|[object]|false|none|Software that can be updated on that machine|
|sound|[object]|false|none|Sound card information|
|status|string|true|none|Status of the node|
|storage|[object]|false|none|Storage (disks) information objects|
|timezone|object|false|none|none|
|videos|[object]|false|none|Video card information|
|virtualMachines|[object]|false|none|Hosted virtual machine information|

#### Enumerated Values

|Property|Value|
|---|---|
|policyMode|enforce|
|policyMode|audit|
|policyMode|default|
|status|pending|
|status|accepted|
|status|deleted|

<h2 id="tocS_node-inherited-properties">node-inherited-properties</h2>
<!-- backwards compatibility -->
<a id="schemanode-inherited-properties"></a>
<a id="schema_node-inherited-properties"></a>
<a id="tocSnode-inherited-properties"></a>
<a id="tocsnode-inherited-properties"></a>

```json
{
  "id": "9a1773c9-0889-40b6-be89-f6504443ac1b",
  "properties": [
    {
      "hierarchy": [
        {
          "id": "9180b869-08a3-4173-9dd4-ab68f227e76c",
          "kind": "global",
          "name": "all centos7",
          "value": "{\"array\":[1,2],\"object\":{\"parent\":\"value\"},\"string\":\"parent\"}"
        }
      ],
      "name": "datacenter",
      "origval": "AMS2",
      "provider": "inherited",
      "value": "AMS2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid (or "root"))|true|none|Unique id of the node|
|properties|[object]|true|none|Node properties (either set by user or filled by third party sources)|

<h2 id="tocS_node-settings">node-settings</h2>
<!-- backwards compatibility -->
<a id="schemanode-settings"></a>
<a id="schema_node-settings"></a>
<a id="tocSnode-settings"></a>
<a id="tocsnode-settings"></a>

```json
{
  "agentKey": {
    "status": "certified",
    "value": "-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----"
  },
  "policyMode": "audit",
  "properties": [
    {
      "name": "datacenter",
      "value": "AMS2"
    }
  ],
  "state": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentKey|[agent-key](#schemaagent-key)|false|none|Information about agent key or certificate|
|policyMode|string|false|none|In which mode the node will apply its configuration policy. Use `default` to use the global mode.|
|properties|[object]|false|none|none|
|state|string|false|none|The node life cycle state. See [dedicated doc](https://docs.rudder.io/reference/current/usage/advanced_node_management.html#node-lifecycle) for more information.|

#### Enumerated Values

|Property|Value|
|---|---|
|policyMode|audit|
|policyMode|enforce|
|policyMode|default|
|state|enabled|
|state|ignored|
|state|empty-policies|
|state|initializing|
|state|preparing-eol|

<h2 id="tocS_os">os</h2>
<!-- backwards compatibility -->
<a id="schemaos"></a>
<a id="schema_os"></a>
<a id="tocSos"></a>
<a id="tocsos"></a>

```json
{
  "fullName": "Debian GNU/Linux 9 (stretch)",
  "name": "debian",
  "servicePack": "string",
  "type": "linux",
  "version": 9.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullName|string|true|none|The long description name of the os|
|name|string|true|none|For Linux, a distribution, for Windows, the commercial name|
|servicePack|string|false|none|a service pack informationnal string|
|type|string|true|none|none|
|version|string|true|none|A string representation of the version|

#### Enumerated Values

|Property|Value|
|---|---|
|name|debian|
|name|kali|
|name|ubuntu|
|name|redhat|
|name|centos|
|name|fedora|
|name|suse|
|name|oracle|
|name|scientific|
|name|slackware|
|name|xp|
|name|vista|
|name|seven|
|name|10|
|name|2000|
|name|2003|
|name|2008 r2|
|name|2012|
|name|2012 r2|
|name|2016|
|type|linux|
|type|windows|
|type|solaris|
|type|aix|
|type|freebsd|
|type|unknown|

<h2 id="tocS_parameter">parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "description": "Default inform message put in footer of managed files by Rudder",
  "id": "rudder_file_edit_footer",
  "overridable": false,
  "value": "### End of file managed by Rudder ###"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the parameter|
|id|string|true|none|Name of the parameter|
|overridable|boolean|false|none|Is the global parameter overridable by node|
|value|object(string or JSON)|false|none|Value of the parameter|

<h2 id="tocS_rule">rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "directives": [
    "string"
  ],
  "displayName": "Security policy",
  "enabled": true,
  "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
  "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
  "shortDescription": "Baseline applying CIS guidelines",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "targets": [
    {
      "exclude": {
        "or": [
          "policyServer:root",
          "group:cd377524-808b-4b42-8724-6ef308efeac7"
        ]
      },
      "include": {
        "or": [
          "special:all"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directives|[string]|false|none|Directives linked to the rule|
|displayName|string|false|none|Rule name|
|enabled|boolean|false|none|Is the rule enabled|
|id|string(uuid)|false|none|Rule id|
|longDescription|string|false|none|Rule documentation|
|shortDescription|string|false|none|One line rule description|
|system|boolean|false|none|If true it is an internal Rudder rule|
|tags|[object]|false|none|none|
|targets|[rule-targets](#schemarule-targets)|false|none|Node and special groups targeted by that rule|

<h2 id="tocS_rule-category">rule-category</h2>
<!-- backwards compatibility -->
<a id="schemarule-category"></a>
<a id="schema_rule-category"></a>
<a id="tocSrule-category"></a>
<a id="tocsrule-category"></a>

```json
{
  "description": "Baseline applying CIS guidelines",
  "id": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
  "name": "Security policies",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Rules category description|
|id|string(uuid)|false|none|Rule category id, only provide it when needed.|
|name|string|true|none|Name of the rule category|
|parent|string(uuid)|true|none|The parent category of the rules|

<h2 id="tocS_rule-category-update">rule-category-update</h2>
<!-- backwards compatibility -->
<a id="schemarule-category-update"></a>
<a id="schema_rule-category-update"></a>
<a id="tocSrule-category-update"></a>
<a id="tocsrule-category-update"></a>

```json
{
  "description": "Baseline applying CIS guidelines",
  "name": "Security policies",
  "parent": "b9f6d98a-28bc-4d80-90f7-d2f14269e215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Rules category description|
|name|string|true|none|Name of the rule category|
|parent|string(uuid)|true|none|The parent category of the rules|

<h2 id="tocS_rule-new">rule-new</h2>
<!-- backwards compatibility -->
<a id="schemarule-new"></a>
<a id="schema_rule-new"></a>
<a id="tocSrule-new"></a>
<a id="tocsrule-new"></a>

```json
{
  "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
  "directives": [
    "string"
  ],
  "displayName": "Security policy",
  "enabled": true,
  "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
  "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
  "shortDescription": "Baseline applying CIS guidelines",
  "source": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "targets": [
    {
      "exclude": {
        "or": [
          "policyServer:root",
          "group:cd377524-808b-4b42-8724-6ef308efeac7"
        ]
      },
      "include": {
        "or": [
          "special:all"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string(uuid)|false|none|The parent category id. If provided, the new rule will be in this parent category|
|directives|[string]|false|none|Directives linked to the rule|
|displayName|string|false|none|Rule name|
|enabled|boolean|false|none|Is the rule enabled|
|id|string(uuid)|false|none|Rule id|
|longDescription|string|false|none|Rule documentation|
|shortDescription|string|false|none|One line rule description|
|source|string(uuid)|false|none|The id of the rule the clone will be based onto. If this parameter if provided, the new rule will be a clone of this source. Other value will override values from the source.|
|system|boolean|false|none|If true it is an internal Rudder rule|
|tags|[object]|false|none|none|
|targets|[rule-targets](#schemarule-targets)|false|none|Node and special groups targeted by that rule|

<h2 id="tocS_rule-target">rule-target</h2>
<!-- backwards compatibility -->
<a id="schemarule-target"></a>
<a id="schema_rule-target"></a>
<a id="tocSrule-target"></a>
<a id="tocsrule-target"></a>

```json
"policyServer:root"
```

Node and special groups targeted by that rule

<h2 id="tocS_rule-targets">rule-targets</h2>
<!-- backwards compatibility -->
<a id="schemarule-targets"></a>
<a id="schema_rule-targets"></a>
<a id="tocSrule-targets"></a>
<a id="tocsrule-targets"></a>

```json
[
  {
    "exclude": {
      "or": [
        "policyServer:root",
        "group:cd377524-808b-4b42-8724-6ef308efeac7"
      ]
    },
    "include": {
      "or": [
        "special:all"
      ]
    }
  }
]
```

Node and special groups targeted by that rule

<h2 id="tocS_rule-with-category">rule-with-category</h2>
<!-- backwards compatibility -->
<a id="schemarule-with-category"></a>
<a id="schema_rule-with-category"></a>
<a id="tocSrule-with-category"></a>
<a id="tocsrule-with-category"></a>

```json
{
  "category": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
  "directives": [
    "string"
  ],
  "displayName": "Security policy",
  "enabled": true,
  "id": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
  "longDescription": "This rules should be applied to all Linux nodes required basic hardening",
  "shortDescription": "Baseline applying CIS guidelines",
  "system": false,
  "tags": [
    {
      "customer": "MyCompany"
    }
  ],
  "targets": [
    {
      "exclude": {
        "or": [
          "policyServer:root",
          "group:cd377524-808b-4b42-8724-6ef308efeac7"
        ]
      },
      "include": {
        "or": [
          "special:all"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string(uuid)|false|none|The parent category id.|
|directives|[string]|false|none|Directives linked to the rule|
|displayName|string|false|none|Rule name|
|enabled|boolean|false|none|Is the rule enabled|
|id|string(uuid)|false|none|Rule id|
|longDescription|string|false|none|Rule documentation|
|shortDescription|string|false|none|One line rule description|
|system|boolean|false|none|If true it is an internal Rudder rule|
|tags|[object]|false|none|none|
|targets|[rule-targets](#schemarule-targets)|false|none|Node and special groups targeted by that rule|

<h2 id="tocS_secrets">secrets</h2>
<!-- backwards compatibility -->
<a id="schemasecrets"></a>
<a id="schema_secrets"></a>
<a id="tocSsecrets"></a>
<a id="tocssecrets"></a>

```json
{
  "description": "Password of my super secret user account",
  "name": "secret-password",
  "value": "nj-k;EO32!kFWewn2Nk,u"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the secret to identify it more easily|
|name|string|false|none|The name of the secret used as a reference on the value|
|value|string|false|none|The value of the secret it will not be exposed in the interface|

<h2 id="tocS_techniqueBlock">techniqueBlock</h2>
<!-- backwards compatibility -->
<a id="schematechniqueblock"></a>
<a id="schema_techniqueBlock"></a>
<a id="tocStechniqueblock"></a>
<a id="tocstechniqueblock"></a>

```json
{
  "calls": [],
  "component": "Install my app",
  "condition": "linux.package_present_vim_repaired",
  "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
  "reportingLogic": {
    "type": "worst",
    "value": "id/name of a component"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|[[techniqueMethodCall](#schematechniquemethodcall) \| [techniqueBlock](#schematechniqueblock)]|false|none|Method and blocks contained by this block|
|component|string|false|none|Component is used in reporting to identify this method call. You can see it as a name|
|condition|string|false|none|Condition to run this method.|
|id|string|false|none|Method call id|
|reportingLogic|object|false|none|none|

<h2 id="tocS_techniqueMethodCall">techniqueMethodCall</h2>
<!-- backwards compatibility -->
<a id="schematechniquemethodcall"></a>
<a id="schema_techniqueMethodCall"></a>
<a id="tocStechniquemethodcall"></a>
<a id="tocstechniquemethodcall"></a>

```json
{
  "component": "Install apache2",
  "condition": "linux.package_present_vim_repaired",
  "disableReporting": true,
  "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
  "method": "package_present",
  "parameters": [
    {
      "name": "package",
      "value": "apache2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|string|false|none|Component is used in reporting to identify this method call. You can see it as a name|
|condition|string|false|none|Condition to run this method.|
|disableReporting|boolean|false|none|Should the reporting of this method be disabled|
|id|string|false|none|Method call id|
|method|string|false|none|Id of the method called|
|parameters|[object]|false|none|Parameters for this method call|

<h2 id="tocS_techniqueParameter">techniqueParameter</h2>
<!-- backwards compatibility -->
<a id="schematechniqueparameter"></a>
<a id="schema_techniqueParameter"></a>
<a id="tocStechniqueparameter"></a>
<a id="tocstechniqueparameter"></a>

```json
{
  "description": "Name of a package to install",
  "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
  "mayBeEmpty": true,
  "name": "Package to install"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|description of this parameter|
|id|string|false|none|parameter id|
|mayBeEmpty|boolean|false|none|May the value given when creating a directive be empty|
|name|string|false|none|Parameter name|

<h2 id="tocS_techniqueResource">techniqueResource</h2>
<!-- backwards compatibility -->
<a id="schematechniqueresource"></a>
<a id="schema_techniqueResource"></a>
<a id="tocStechniqueresource"></a>
<a id="tocstechniqueresource"></a>

```json
{
  "name": "conf/my/app/new",
  "state": "modified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|resource name. this is the relative path to the resource|
|state|string|false|none|State of the resource file. it can be a value between new, modified, deleted, untouched|

<h2 id="tocS_techniques">techniques</h2>
<!-- backwards compatibility -->
<a id="schematechniques"></a>
<a id="schema_techniques"></a>
<a id="tocStechniques"></a>
<a id="tocstechniques"></a>

```json
[
  {
    "calls": [
      {
        "component": "Install apache2",
        "condition": "linux.package_present_vim_repaired",
        "disableReporting": true,
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "method": "package_present",
        "parameters": [
          {
            "name": "package",
            "value": "apache2"
          }
        ]
      }
    ],
    "category": "user_techniques",
    "description": "This techniques apply generic security policies",
    "id": "security-policy",
    "name": "Security Policy",
    "parameters": [
      {
        "description": "Name of a package to install",
        "id": "6a8de98f-7829-4c1b-b4e7-b9387f27f279",
        "mayBeEmpty": true,
        "name": "Package to install"
      }
    ],
    "resources": [
      {
        "name": "conf/my/app/new",
        "state": "modified"
      }
    ],
    "source": "editor",
    "version": "1.0"
  }
]
```

<h2 id="tocS_techniques-resources">techniques-resources</h2>
<!-- backwards compatibility -->
<a id="schematechniques-resources"></a>
<a id="schema_techniques-resources"></a>
<a id="tocStechniques-resources"></a>
<a id="tocstechniques-resources"></a>

```json
[
  {
    "name": "apply-policy.robot",
    "state": "untouched"
  }
]
```

<h2 id="tocS_techniques-revisions">techniques-revisions</h2>
<!-- backwards compatibility -->
<a id="schematechniques-revisions"></a>
<a id="schema_techniques-revisions"></a>
<a id="tocStechniques-revisions"></a>
<a id="tocstechniques-revisions"></a>

```json
[
  {
    "author": "admin",
    "date": "2022-06-14T16:20:40+02:00",
    "message": "Committing technique bar",
    "revision": "6faf7e9c47f2c3a41784598b5acf2883bd4e1e08"
  }
]
```

<h2 id="tocS_techniques-versions">techniques-versions</h2>
<!-- backwards compatibility -->
<a id="schematechniques-versions"></a>
<a id="schema_techniques-versions"></a>
<a id="tocStechniques-versions"></a>
<a id="tocstechniques-versions"></a>

```json
[
  {
    "name": "userManagement",
    "version": [
      "1.0",
      "1.2",
      "3.0"
    ]
  }
]
```

<h2 id="tocS_timezone">timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "name": "CEST",
  "offset": 200
}
```

Timezone information of the node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The standard name of the timezone|
|offset|string|true|none|Timezone offset compared to UTC, in +/-HHMM format|

<h2 id="tocS_users">users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "isPreHahed": false,
  "password": "passwdWillBeStoredHashed",
  "role": [
    "user"
  ],
  "username": "John Doe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreHahed|boolean|false|none|If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash|
|password|string|false|none|this password will be hashed for you if the `isPreHashed` is set on false|
|role|[string]|false|none|Defined user's permissions|
|username|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|isPreHahed|false|
|isPreHahed|true|

<h2 id="tocS_validated-user">validated-user</h2>
<!-- backwards compatibility -->
<a id="schemavalidated-user"></a>
<a id="schema_validated-user"></a>
<a id="tocSvalidated-user"></a>
<a id="tocsvalidated-user"></a>

```json
{
  "isValidated": true,
  "userExists": true,
  "username": "John Do"
}
```

list of users with their workflow settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isValidated|boolean|true|none|whether the user's actions generate chanque-request or not|
|userExists|boolean|true|none|whether the user exists in file or not|
|username|string|true|none|none|
